import { BlueprintConfigConstraints } from './blueprint-config-constraints';
import { BlueprintConfigParameters } from './blueprint-config-parameters';
import { BlueprintConfigOption } from './blueprint-config-option';
import { BlueprintConfigColor } from './blueprint-config-color';

export enum BlueprintConfigType {
  Slider = 'SLIDER',
  ListSelect = 'LIST_SELECT',
  Dropdown = 'DROPDOWN',
  ArrowSelector = 'ARROW_SELECTOR',
  ImageSelector = 'IMAGE_SELECTOR',
  ColorPicker = 'COLOR_PICKER',
}

export enum BlueprintConfigCategory {
  CharacterAppearance = 'CHARACTER_APPEARANCE',
  VehicleModification = 'VEHICLE_MODIFICATION',
}

export interface BlueprintConfig {
  id: string;
  category: BlueprintConfigCategory;
  categoryName: string;
  sectionId: string;
  sectionKey: string;
  type: BlueprintConfigType;
  typeName: string;
  key: string;
  name: string;
  order: number;
  enabled: boolean;
  optional: boolean;
  asset?: string;
  parameters: BlueprintConfigParameters;
  constraints: BlueprintConfigConstraints;
  options?: ReadonlyArray<BlueprintConfigOption>;
  colors?: ReadonlyArray<BlueprintConfigColor>;
}
