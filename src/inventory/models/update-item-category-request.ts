/**
 * Constraints for updating an item category
 * @export
 * @interface UpdateItemCategoryConstraintsRequest
 */
export interface UpdateItemCategoryConstraintsRequest {
  /**
   * List of gender IDs that can use items in this category
   * @type {ReadonlyArray<string>}
   * @memberof UpdateItemCategoryConstraintsRequest
   */
  genders?: ReadonlyArray<string>;
  /**
   * List of segment definition IDs required to use items in this category
   * @type {ReadonlyArray<string>}
   * @memberof UpdateItemCategoryConstraintsRequest
   */
  segmentDefinitionIds?: ReadonlyArray<string>;
}

/**
 * Request to update an existing item category
 * @export
 * @interface UpdateItemCategoryRequest
 */
export interface UpdateItemCategoryRequest {
  /**
   * URL to the icon image representing this item category.
   * @type {string}
   * @memberof UpdateItemCategoryRequest
   */
  iconUrl?: string;
  /**
   * Constraints defining which characters can use items in this category.
   * @type {UpdateItemCategoryConstraintsRequest}
   * @memberof UpdateItemCategoryRequest
   */
  constraints?: UpdateItemCategoryConstraintsRequest;
}
