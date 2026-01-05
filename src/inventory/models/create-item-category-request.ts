/**
 * Constraints defining which characters can use items in a category
 * @export
 * @interface CreateItemCategoryConstraintsRequest
 */
export interface CreateItemCategoryConstraintsRequest {
  /**
   * List of gender IDs that can use items in this category. Undefined or empty means all genders allowed.
   * @type {ReadonlyArray<string>}
   * @memberof CreateItemCategoryConstraintsRequest
   */
  genders?: ReadonlyArray<string>;
  /**
   * List of segment definition IDs required to use items in this category.
   * @type {ReadonlyArray<string>}
   * @memberof CreateItemCategoryConstraintsRequest
   */
  segmentDefinitionIds?: ReadonlyArray<string>;
}

/**
 * Request to create a new item category
 * @export
 * @interface CreateItemCategoryRequest
 */
export interface CreateItemCategoryRequest {
  /**
   * Unique identifier for the item category. Must follow path format (e.g., 'weapons/melee').
   * @type {string}
   * @memberof CreateItemCategoryRequest
   */
  id: string;
  /**
   * Default display name for the item category (used when no localization available).
   * @type {string}
   * @memberof CreateItemCategoryRequest
   */
  defaultName: string;
  /**
   * Default description for the item category.
   * @type {string}
   * @memberof CreateItemCategoryRequest
   */
  description?: string;
  /**
   * URL to the icon image representing this item category.
   * @type {string}
   * @memberof CreateItemCategoryRequest
   */
  iconUrl?: string;
  /**
   * Constraints defining which characters can use items in this category.
   * @type {CreateItemCategoryConstraintsRequest}
   * @memberof CreateItemCategoryRequest
   */
  constraints?: CreateItemCategoryConstraintsRequest;
  /**
   * Whether the item category should be enabled upon creation.
   * @type {boolean}
   * @memberof CreateItemCategoryRequest
   */
  enabled: boolean;
}
