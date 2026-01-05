/**
 * Represents an effect applied by a component
 * @export
 * @interface ComponentEffect
 */
export interface ComponentEffect {
  /**
   * The effect type ID
   * @type {string}
   * @memberof ComponentEffect
   */
  effectTypeId: string;
  /**
   * Localized name of the effect type
   * @type {string}
   * @memberof ComponentEffect
   */
  effectTypeName?: string;
  /**
   * The value/magnitude of the effect
   * @type {number}
   * @memberof ComponentEffect
   */
  value: number;
}
