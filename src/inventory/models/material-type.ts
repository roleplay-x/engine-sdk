/**
 * Represents a material type for items
 * @export
 * @interface MaterialType
 */
export interface MaterialType {
  /**
   * Unique identifier for the material type
   * @type {string}
   * @memberof MaterialType
   */
  id: string;
  /**
   * Parent material type ID for hierarchical organization. Null if this is a root material type.
   * @type {string}
   * @memberof MaterialType
   */
  parentId?: string;
  /**
   * Localized display name of the material type
   * @type {string}
   * @memberof MaterialType
   */
  name: string;
  /**
   * Localized description of the material type
   * @type {string}
   * @memberof MaterialType
   */
  description?: string;
  /**
   * URL to the icon image representing this material type
   * @type {string}
   * @memberof MaterialType
   */
  iconUrl?: string;
  /**
   * Base unit of measurement. Valid values: GRAM, MILLILITER, PIECE
   * @type {string}
   * @memberof MaterialType
   */
  baseUnit: string;
  /**
   * Base weight per unit in the base unit (grams if GRAM, milliliters if MILLILITER, or per piece)
   * @type {number}
   * @memberof MaterialType
   */
  baseWeight: number;
  /**
   * Base volume per unit in cubic centimeters
   * @type {number}
   * @memberof MaterialType
   */
  baseVolume: number;
  /**
   * Dictionary of effect type IDs to their modifier values applied when this material is consumed
   * @type {Record<string, number>}
   * @memberof MaterialType
   */
  baseEffects: Record<string, number>;
  /**
   * Base time in seconds required to craft one unit of this material
   * @type {number}
   * @memberof MaterialType
   */
  baseCraftTime: number;
  /**
   * Whether the material type is enabled
   * @type {boolean}
   * @memberof MaterialType
   */
  enabled: boolean;
  /**
   * Display order position for sorting material types
   * @type {number}
   * @memberof MaterialType
   */
  order: number;
  /**
   * Unix timestamp when the material type was created
   * @type {number}
   * @memberof MaterialType
   */
  createdDate: number;
  /**
   * Unix timestamp when the material type was last modified
   * @type {number}
   * @memberof MaterialType
   */
  lastModifiedDate: number;
}