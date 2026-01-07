import { Unit } from '../enums/unit';

/**
 * Request to create a material type
 * @export
 * @interface CreateMaterialTypeRequest
 */
export interface CreateMaterialTypeRequest {
  /**
   * Unique identifier for the material type. Must start with 'material/'
   * @type {string}
   * @memberof CreateMaterialTypeRequest
   */
  id?: string;
  /**
   * Default display name shown when no localized name is available
   * @type {string}
   * @memberof CreateMaterialTypeRequest
   */
  defaultName?: string;
  /**
   * Default description shown when no localized description is available
   * @type {string}
   * @memberof CreateMaterialTypeRequest
   */
  description?: string;
  /**
   * URL to the icon image representing this material type
   * @type {string}
   * @memberof CreateMaterialTypeRequest
   */
  iconUrl?: string;
  /**
   * Base unit of measurement
   * @type {Unit}
   * @memberof CreateMaterialTypeRequest
   */
  baseUnit?: Unit;
  /**
   * Base weight per unit
   * @type {number}
   * @memberof CreateMaterialTypeRequest
   */
  baseWeight?: number;
  /**
   * Base volume per unit in cubic centimeters
   * @type {number}
   * @memberof CreateMaterialTypeRequest
   */
  baseVolume?: number;
  /**
   * Dictionary of effect type IDs to their modifier values
   * @type {Record<string, number>}
   * @memberof CreateMaterialTypeRequest
   */
  baseEffects?: Record<string, number>;
  /**
   * Base time in seconds required to craft one unit
   * @type {number}
   * @memberof CreateMaterialTypeRequest
   */
  baseCraftTime?: number;
  /**
   * Whether this material type is enabled
   * @type {boolean}
   * @memberof CreateMaterialTypeRequest
   */
  enabled?: boolean;
}
