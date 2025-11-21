import { BlueprintConfigConstraints } from './blueprint-config-constraints';
import { BlueprintConfigParameters } from './blueprint-config-parameters';
import { BlueprintConfigOption } from './blueprint-config-option';
import { BlueprintConfigColor } from './blueprint-config-color';

/**
 * Blueprint configuration type codes
 * @export
 * @enum {string}
 */
export enum BlueprintConfigType {
  Slider = 'SLIDER',
  ListSelect = 'LIST_SELECT',
  Dropdown = 'DROPDOWN',
  ArrowSelector = 'ARROW_SELECTOR',
  ImageSelector = 'IMAGE_SELECTOR',
  ColorPicker = 'COLOR_PICKER',
}

/**
 * Blueprint configuration category codes
 * @export
 * @enum {string}
 */
export enum BlueprintConfigCategory {
  CharacterAppearance = 'CHARACTER_APPEARANCE',
  VehicleModification = 'VEHICLE_MODIFICATION',
}

/**
 * Blueprint configuration for character appearance or vehicle modification
 * @export
 * @interface BlueprintConfig
 */
export interface BlueprintConfig {
  /**
   * Unique identifier for the configuration
   * @type {string}
   * @memberof BlueprintConfig
   */
  id: string;
  /**
   * Category this configuration belongs to
   * @type {BlueprintConfigCategory}
   * @memberof BlueprintConfig
   */
  category: BlueprintConfigCategory;
  /**
   * Display name of the category
   * @type {string}
   * @memberof BlueprintConfig
   */
  categoryName: string;
  /**
   * ID of the section this configuration belongs to
   * @type {string}
   * @memberof BlueprintConfig
   */
  sectionId: string;
  /**
   * Key of the section this configuration belongs to
   * @type {string}
   * @memberof BlueprintConfig
   */
  sectionKey: string;
  /**
   * Type of the configuration input
   * @type {BlueprintConfigType}
   * @memberof BlueprintConfig
   */
  type: BlueprintConfigType;
  /**
   * Display name of the configuration type
   * @type {string}
   * @memberof BlueprintConfig
   */
  typeName: string;
  /**
   * Key identifier for the configuration
   * @type {string}
   * @memberof BlueprintConfig
   */
  key: string;
  /**
   * Display name of the configuration
   * @type {string}
   * @memberof BlueprintConfig
   */
  name: string;
  /**
   * Display order for sorting configurations
   * @type {number}
   * @memberof BlueprintConfig
   */
  order: number;
  /**
   * Whether this configuration is enabled
   * @type {boolean}
   * @memberof BlueprintConfig
   */
  enabled: boolean;
  /**
   * Whether this configuration is optional
   * @type {boolean}
   * @memberof BlueprintConfig
   */
  optional: boolean;
  /**
   * Asset identifier for the configuration
   * @type {string}
   * @memberof BlueprintConfig
   */
  asset?: string;
  /**
   * Parameters for slider configurations
   * @type {BlueprintConfigParameters}
   * @memberof BlueprintConfig
   */
  parameters: BlueprintConfigParameters;
  /**
   * Constraints for the configuration values
   * @type {BlueprintConfigConstraints}
   * @memberof BlueprintConfig
   */
  constraints: BlueprintConfigConstraints;
  /**
   * Available options for select-type configurations
   * @type {ReadonlyArray<BlueprintConfigOption>}
   * @memberof BlueprintConfig
   */
  options?: ReadonlyArray<BlueprintConfigOption>;
  /**
   * Available colors for color picker configurations
   * @type {ReadonlyArray<BlueprintConfigColor>}
   * @memberof BlueprintConfig
   */
  colors?: ReadonlyArray<BlueprintConfigColor>;
}
