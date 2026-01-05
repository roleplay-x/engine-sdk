/**
 * Represents a material component of an item definition
 * @export
 * @interface ItemDefinitionMaterial
 */
export interface ItemDefinitionMaterial {
  /**
   * The material type ID
   * @type {string}
   * @memberof ItemDefinitionMaterial
   */
  materialTypeId: string;
  /**
   * Localized name of the material type
   * @type {string}
   * @memberof ItemDefinitionMaterial
   */
  materialTypeName?: string;
  /**
   * Amount of material in the item
   * @type {number}
   * @memberof ItemDefinitionMaterial
   */
  amount: number;
}
