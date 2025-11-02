import { BlueprintConfig, BlueprintConfigType } from '../models/blueprint-config';

export type BlueprintConfigOptionValue = {
  type:
    | BlueprintConfigType.Dropdown
    | BlueprintConfigType.ImageSelector
    | BlueprintConfigType.ArrowSelector
    | BlueprintConfigType.ListSelect;
  value: string;
};

export type BlueprintConfigSliderValue = {
  type: BlueprintConfigType.Slider;
  value: number;
};

export type BlueprintConfigColorValue = {
  type: BlueprintConfigType.ColorPicker;
  index?: string;
  hex: string;
  isCustomRgbAllowed: boolean;
};

export type BlueprintConfigValueMapper =
  | BlueprintConfigOptionValue
  | BlueprintConfigSliderValue
  | BlueprintConfigColorValue;

export type BaseBlueprintConfigValue = { configKey: string } & BlueprintConfigValueMapper;

type BlueprintConfigTypeToValueMap = {
  [BlueprintConfigType.ColorPicker]: BlueprintConfigColorValue;
  [BlueprintConfigType.Slider]: BlueprintConfigSliderValue;
  [BlueprintConfigType.Dropdown]: BlueprintConfigOptionValue;
  [BlueprintConfigType.ImageSelector]: BlueprintConfigOptionValue;
  [BlueprintConfigType.ArrowSelector]: BlueprintConfigOptionValue;
  [BlueprintConfigType.ListSelect]: BlueprintConfigOptionValue;
};

export type PartialBlueprintConfigValues<T extends Record<string, BlueprintConfigValueMapper>> = {
  [K in keyof T]?: T[K];
};

export function mapBlueprintConfigValues(
  configs: Map<string, BlueprintConfig>,
  data: Record<string, string>,
): BaseBlueprintConfigValue[] {
  return Object.keys(data)
    .map((configKey) => {
      const config = configs.get(configKey);
      if (!config) {
        return;
      }

      return mapBlueprintConfigValue(config, data[configKey]);
    })
    .filter((value) => !!value);
}

export function mapBlueprintConfigValue(
  config: BlueprintConfig,
  valueKey: string,
): BaseBlueprintConfigValue | undefined {
  switch (config.type) {
    case BlueprintConfigType.Dropdown:
    case BlueprintConfigType.ArrowSelector:
    case BlueprintConfigType.ListSelect:
    case BlueprintConfigType.ImageSelector:
      return {
        configKey: config.key,
        type: config.type,
        value: config.options?.find((p) => p.key === valueKey)?.value ?? '',
      };

    case BlueprintConfigType.Slider:
      return {
        configKey: config.key,
        type: BlueprintConfigType.Slider,
        value: parseFloat(valueKey) || 0,
      };

    case BlueprintConfigType.ColorPicker: {
      const color = config.colors?.find((p) => p.key === valueKey);
      return {
        configKey: config.key,
        type: BlueprintConfigType.ColorPicker,
        index: color?.index,
        hex: color?.hex ?? '',
        isCustomRgbAllowed: config.parameters.color?.isCustomRgbAllowed ?? false,
      };
    }
  }
}

export function mapBlueprintConfigValuesFrom<T extends Record<string, BlueprintConfigValueMapper>>(
  values: BaseBlueprintConfigValue[],
): PartialBlueprintConfigValues<T> {
  const result = {} as PartialBlueprintConfigValues<T>;

  for (const value of values) {
    const { configKey, ...rest } = value;
    result[configKey as keyof T] = rest as T[keyof T];
  }

  return result;
}

export function mapBlueprintConfigValuesAs<T extends Record<string, BlueprintConfigValueMapper>>(
  configs: Map<string, BlueprintConfig>,
  data: Record<string, string>,
): PartialBlueprintConfigValues<T> {
  const values = mapBlueprintConfigValues(configs, data);
  return mapBlueprintConfigValuesFrom<T>(values);
}

export function mapBlueprintConfigValueAs<TType extends BlueprintConfigType>(
  config: BlueprintConfig,
  valueKey: string,
): BlueprintConfigTypeToValueMap[TType] | undefined {
  const value = mapBlueprintConfigValue(config, valueKey);
  if (!value) {
    return undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { configKey, ...rest } = value;
  return rest as BlueprintConfigTypeToValueMap[TType];
}
