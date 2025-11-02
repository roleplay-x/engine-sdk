import { BlueprintConfig, BlueprintConfigType } from '../models/blueprint-config';
import {
  BlueprintConfigColorValue,
  BlueprintConfigOptionValue,
  BlueprintConfigSliderValue,
  mapBlueprintConfigValue,
  mapBlueprintConfigValueAs,
  mapBlueprintConfigValues,
  mapBlueprintConfigValuesAs,
  mapBlueprintConfigValuesFrom,
  BaseBlueprintConfigValue,
} from './blueprint-config-value.mapper';

describe('BlueprintConfigValueMapper', () => {
  const mockConfigs = new Map<string, BlueprintConfig>([
    [
      'HAIR_STYLE',
      {
        type: BlueprintConfigType.ImageSelector,
        key: 'HAIR_STYLE',
        options: [
          { key: 'HAIR_M_1', value: '1', enabled: true },
          { key: 'HAIR_M_2', value: '2', enabled: true },
        ],
      } as unknown as BlueprintConfig,
    ],
    [
      'HAIR_COLOR',
      {
        type: BlueprintConfigType.ColorPicker,
        key: 'HAIR_COLOR',
        colors: [
          { key: 'HAIR_COLOR_0', hex: '#1c1f21', index: '0', enabled: true, type: 'INDEX' },
          { key: 'HAIR_COLOR_1', hex: '#272a2c', index: '1', enabled: true, type: 'INDEX' },
        ],
        parameters: {
          color: {
            isCustomRgbAllowed: false,
          },
        },
      } as unknown as BlueprintConfig,
    ],
    [
      'FACE_MIX_PERCENT',
      {
        type: BlueprintConfigType.Slider,
        key: 'FACE_MIX_PERCENT',
        parameters: {
          slider: { min: 0, max: 100, step: 1 },
        },
      } as unknown as BlueprintConfig,
    ],
    [
      'PED',
      {
        type: BlueprintConfigType.ArrowSelector,
        key: 'PED',
        options: [
          { key: 'DEFAULT_MALE', value: 'mp_m_freemode_01', enabled: true },
          { key: 'DEFAULT_FEMALE', value: 'mp_f_freemode_01', enabled: true },
        ],
      } as unknown as BlueprintConfig,
    ],
    [
      'EYE_COLOR',
      {
        type: BlueprintConfigType.ImageSelector,
        key: 'EYE_COLOR',
        options: [
          { key: 'EYE_COLOR_0', value: '0', enabled: true },
          { key: 'EYE_COLOR_1', value: '1', enabled: true },
        ],
      } as unknown as BlueprintConfig,
    ],
  ]);

  describe('mapBlueprintConfigValue', () => {
    it('should map ImageSelector config value', () => {
      const config = mockConfigs.get('HAIR_STYLE')!;
      const result = mapBlueprintConfigValue(config, 'HAIR_M_1');

      expect(result).toEqual({
        configKey: 'HAIR_STYLE',
        type: BlueprintConfigType.ImageSelector,
        value: '1',
      });
    });

    it('should map ColorPicker config value', () => {
      const config = mockConfigs.get('HAIR_COLOR')!;
      const result = mapBlueprintConfigValue(config, 'HAIR_COLOR_0');

      expect(result).toEqual({
        configKey: 'HAIR_COLOR',
        type: BlueprintConfigType.ColorPicker,
        index: '0',
        hex: '#1c1f21',
        isCustomRgbAllowed: false,
      });
    });

    it('should map Slider config value', () => {
      const config = mockConfigs.get('FACE_MIX_PERCENT')!;
      const result = mapBlueprintConfigValue(config, '75');

      expect(result).toEqual({
        configKey: 'FACE_MIX_PERCENT',
        type: BlueprintConfigType.Slider,
        value: 75,
      });
    });

    it('should map ArrowSelector config value', () => {
      const config = mockConfigs.get('PED')!;
      const result = mapBlueprintConfigValue(config, 'DEFAULT_MALE');

      expect(result).toEqual({
        configKey: 'PED',
        type: BlueprintConfigType.ArrowSelector,
        value: 'mp_m_freemode_01',
      });
    });

    it('should return empty value when option not found', () => {
      const config = mockConfigs.get('HAIR_STYLE')!;
      const result = mapBlueprintConfigValue(config, 'NON_EXISTENT');

      expect(result).toEqual({
        configKey: 'HAIR_STYLE',
        type: BlueprintConfigType.ImageSelector,
        value: '',
      });
    });

    it('should return empty hex when color not found', () => {
      const config = mockConfigs.get('HAIR_COLOR')!;
      const result = mapBlueprintConfigValue(config, 'NON_EXISTENT');

      expect(result).toEqual({
        configKey: 'HAIR_COLOR',
        type: BlueprintConfigType.ColorPicker,
        index: undefined,
        hex: '',
        isCustomRgbAllowed: false,
      });
    });
  });

  describe('mapBlueprintConfigValues', () => {
    it('should map multiple config values', () => {
      const data = {
        HAIR_STYLE: 'HAIR_M_1',
        HAIR_COLOR: 'HAIR_COLOR_1',
        FACE_MIX_PERCENT: 'invalid_value',
      };

      const result = mapBlueprintConfigValues(mockConfigs, data);

      expect(result).toHaveLength(3);
      expect(result).toContainEqual({
        configKey: 'HAIR_STYLE',
        type: BlueprintConfigType.ImageSelector,
        value: '1',
      });
      expect(result).toContainEqual({
        configKey: 'HAIR_COLOR',
        type: BlueprintConfigType.ColorPicker,
        index: '1',
        hex: '#272a2c',
        isCustomRgbAllowed: false,
      });
      expect(result).toContainEqual({
        configKey: 'FACE_MIX_PERCENT',
        type: BlueprintConfigType.Slider,
        value: 0,
      });
    });

    it('should skip configs that are not in the map', () => {
      const data = {
        HAIR_STYLE: 'HAIR_M_1',
        NON_EXISTENT_CONFIG: 'some_value',
      };

      const result = mapBlueprintConfigValues(mockConfigs, data);

      expect(result).toHaveLength(1);
      expect(result[0]?.configKey).toBe('HAIR_STYLE');
    });
  });

  describe('mapBlueprintConfigValuesAs', () => {
    it('should map config values with typed schema', () => {
      type CharacterAppearanceConfig = {
        HAIR_STYLE: BlueprintConfigOptionValue;
        HAIR_COLOR: BlueprintConfigColorValue;
        FACE_MIX_PERCENT: BlueprintConfigSliderValue;
        UNKNOWN_CONFIG: BlueprintConfigSliderValue;
      };

      const data = {
        HAIR_STYLE: 'HAIR_M_1',
        HAIR_COLOR: 'HAIR_COLOR_0',
        FACE_MIX_PERCENT: '75',
        UNKNOWN_CONFIG: '1',
      };

      const result = mapBlueprintConfigValuesAs<CharacterAppearanceConfig>(mockConfigs, data);

      expect(result.UNKNOWN_CONFIG).toBeUndefined();
      expect(result.HAIR_STYLE).toEqual({
        type: BlueprintConfigType.ImageSelector,
        value: '1',
      });
      expect(result.HAIR_COLOR).toEqual({
        type: BlueprintConfigType.ColorPicker,
        index: '0',
        hex: '#1c1f21',
        isCustomRgbAllowed: false,
      });
      expect(result.FACE_MIX_PERCENT).toEqual({
        type: BlueprintConfigType.Slider,
        value: 75,
      });
    });

    it('should return partial results when some configs are missing in data', () => {
      type CharacterAppearanceConfig = {
        HAIR_STYLE: BlueprintConfigOptionValue;
        HAIR_COLOR: BlueprintConfigColorValue;
        FACE_MIX_PERCENT: BlueprintConfigSliderValue;
      };

      const data = {
        HAIR_STYLE: 'HAIR_M_1',
      };

      const result = mapBlueprintConfigValuesAs<CharacterAppearanceConfig>(mockConfigs, data);

      expect(result.HAIR_STYLE).toEqual({
        type: BlueprintConfigType.ImageSelector,
        value: '1',
      });
      expect(result.HAIR_COLOR).toBeUndefined();
      expect(result.FACE_MIX_PERCENT).toBeUndefined();
    });

    it('should work with multiple option types', () => {
      type BaseConfig = {
        PED: BlueprintConfigOptionValue;
        EYE_COLOR: BlueprintConfigOptionValue;
      };

      const data = {
        PED: 'DEFAULT_MALE',
        EYE_COLOR: 'EYE_COLOR_1',
      };

      const result = mapBlueprintConfigValuesAs<BaseConfig>(mockConfigs, data);

      expect(result.PED).toEqual({
        type: BlueprintConfigType.ArrowSelector,
        value: 'mp_m_freemode_01',
      });
      expect(result.EYE_COLOR).toEqual({
        type: BlueprintConfigType.ImageSelector,
        value: '1',
      });
    });
  });

  describe('mapBlueprintConfigValuesFrom', () => {
    it('should convert base config value array to typed object', () => {
      type CharacterAppearanceConfig = {
        HAIR_STYLE: BlueprintConfigOptionValue;
        HAIR_COLOR: BlueprintConfigColorValue;
        FACE_MIX_PERCENT: BlueprintConfigSliderValue;
      };

      const baseValues: BaseBlueprintConfigValue[] = [
        {
          configKey: 'HAIR_STYLE',
          type: BlueprintConfigType.ImageSelector,
          value: '1',
        },
        {
          configKey: 'HAIR_COLOR',
          type: BlueprintConfigType.ColorPicker,
          index: '0',
          hex: '#1c1f21',
          isCustomRgbAllowed: false,
        },
        {
          configKey: 'FACE_MIX_PERCENT',
          type: BlueprintConfigType.Slider,
          value: 75,
        },
      ];

      const result = mapBlueprintConfigValuesFrom<CharacterAppearanceConfig>(baseValues);

      expect(result.HAIR_STYLE).toEqual({
        type: BlueprintConfigType.ImageSelector,
        value: '1',
      });
      expect(result.HAIR_COLOR).toEqual({
        type: BlueprintConfigType.ColorPicker,
        index: '0',
        hex: '#1c1f21',
        isCustomRgbAllowed: false,
      });
      expect(result.FACE_MIX_PERCENT).toEqual({
        type: BlueprintConfigType.Slider,
        value: 75,
      });
    });

    it('should handle empty array', () => {
      type CharacterAppearanceConfig = {
        HAIR_STYLE: BlueprintConfigOptionValue;
        HAIR_COLOR: BlueprintConfigColorValue;
      };

      const baseValues: BaseBlueprintConfigValue[] = [];

      const result = mapBlueprintConfigValuesFrom<CharacterAppearanceConfig>(baseValues);

      expect(result.HAIR_STYLE).toBeUndefined();
      expect(result.HAIR_COLOR).toBeUndefined();
    });

    it('should preserve all value types correctly', () => {
      type MixedConfig = {
        PED: BlueprintConfigOptionValue;
        EYE_COLOR: BlueprintConfigOptionValue;
      };

      const baseValues: BaseBlueprintConfigValue[] = [
        {
          configKey: 'PED',
          type: BlueprintConfigType.ArrowSelector,
          value: 'mp_m_freemode_01',
        },
        {
          configKey: 'EYE_COLOR',
          type: BlueprintConfigType.ImageSelector,
          value: '1',
        },
      ];

      const result = mapBlueprintConfigValuesFrom<MixedConfig>(baseValues);

      expect(result.PED).toEqual({
        type: BlueprintConfigType.ArrowSelector,
        value: 'mp_m_freemode_01',
      });
      expect(result.EYE_COLOR).toEqual({
        type: BlueprintConfigType.ImageSelector,
        value: '1',
      });
    });
  });

  describe('mapBlueprintConfigValueAs', () => {
    it('should map single config value as ColorPicker type', () => {
      const config = mockConfigs.get('HAIR_COLOR')!;
      const result = mapBlueprintConfigValueAs<BlueprintConfigType.ColorPicker>(
        config,
        'HAIR_COLOR_1',
      );

      expect(result).toEqual({
        type: BlueprintConfigType.ColorPicker,
        index: '1',
        hex: '#272a2c',
        isCustomRgbAllowed: false,
      });
    });

    it('should map single config value as Slider type', () => {
      const config = mockConfigs.get('FACE_MIX_PERCENT')!;
      const result = mapBlueprintConfigValueAs<BlueprintConfigType.Slider>(config, '100');

      expect(result).toEqual({
        type: BlueprintConfigType.Slider,
        value: 100,
      });
    });

    it('should map single config value as ImageSelector type', () => {
      const config = mockConfigs.get('HAIR_STYLE')!;
      const result = mapBlueprintConfigValueAs<BlueprintConfigType.ImageSelector>(
        config,
        'HAIR_M_2',
      );

      expect(result).toEqual({
        type: BlueprintConfigType.ImageSelector,
        value: '2',
      });
    });

    it('should return undefined when config is invalid', () => {
      const invalidConfig = {
        type: 'INVALID_TYPE' as unknown,
        key: 'INVALID',
      } as BlueprintConfig;

      const result = mapBlueprintConfigValueAs<BlueprintConfigType.Slider>(invalidConfig, '50');

      expect(result).toBeUndefined();
    });
  });
});
