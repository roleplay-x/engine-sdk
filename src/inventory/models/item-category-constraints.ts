/**
 * Constraints for item category
 * @export
 * @interface ItemCategoryConstraints
 */
export interface ItemCategoryConstraints {
  /**
   * Allowed gender IDs for this category
   * @type {ReadonlyArray<string>}
   * @memberof ItemCategoryConstraints
   */
  genders?: ReadonlyArray<string>;
  /**
   * Allowed segment definition IDs for this category
   * @type {ReadonlyArray<string>}
   * @memberof ItemCategoryConstraints
   */
  segmentDefinitionIds?: ReadonlyArray<string>;
}
