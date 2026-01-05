/**
 * Request to update a material type
 * @export
 * @interface UpdateMaterialTypeRequest
 */
export interface UpdateMaterialTypeRequest {
  /**
   * URL to the icon image representing this material type
   * @type {string}
   * @memberof UpdateMaterialTypeRequest
   */
  iconUrl?: string;
  /**
   * Base unit of measurement. Valid values: GRAM, MILLILITER, PIECE
   * @type {string}
   * @memberof UpdateMaterialTypeRequest
   */
  baseUnit?: string;
  /**
   * Base weight per unit
   * @type {number}
   * @memberof UpdateMaterialTypeRequest
   */
  baseWeight?: number;
  /**
   * Base volume per unit in cubic centimeters
   * @type {number}
   * @memberof UpdateMaterialTypeRequest
   */
  baseVolume?: number;
  /**
   * Dictionary of effect type IDs to their modifier values
   * @type {Record<string, number>}
   * @memberof UpdateMaterialTypeRequest
   */
  baseEffects?: Record<string, number>;
  /**
   * Base time in seconds required to craft one unit
   * @type {number}
   * @memberof UpdateMaterialTypeRequest
   */
  baseCraftTime?: number;
}
