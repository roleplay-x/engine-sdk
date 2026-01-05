/**
 * Item definition material request
 * @export
 * @interface ItemDefinitionMaterialRequest
 */
export interface ItemDefinitionMaterialRequest {
  /**
   * The material type ID
   * @type {string}
   * @memberof ItemDefinitionMaterialRequest
   */
  materialTypeId: string;
  /**
   * Amount of material in the item
   * @type {number}
   * @memberof ItemDefinitionMaterialRequest
   */
  amount?: number;
}
