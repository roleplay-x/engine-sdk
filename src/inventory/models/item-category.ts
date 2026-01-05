import { ItemCategoryConstraints } from './item-category-constraints';

/**
 * Represents an item category in the inventory system
 * @export
 * @interface ItemCategory
 */
export interface ItemCategory {
  /**
   * Unique identifier for the item category
   * @type {string}
   * @memberof ItemCategory
   */
  id: string;
  /**
   * Parent category ID if this is a subcategory
   * @type {string}
   * @memberof ItemCategory
   */
  parentId?: string;
  /**
   * Localized name of the category
   * @type {string}
   * @memberof ItemCategory
   */
  name: string;
  /**
   * Localized description of the category
   * @type {string}
   * @memberof ItemCategory
   */
  description?: string;
  /**
   * URL to the category icon
   * @type {string}
   * @memberof ItemCategory
   */
  iconUrl?: string;
  /**
   * Category constraints
   * @type {ItemCategoryConstraints}
   * @memberof ItemCategory
   */
  constraints?: ItemCategoryConstraints;
  /**
   * Whether the category is enabled
   * @type {boolean}
   * @memberof ItemCategory
   */
  enabled: boolean;
  /**
   * Display order of the category
   * @type {number}
   * @memberof ItemCategory
   */
  order: number;
  /**
   * Unix timestamp when the category was created
   * @type {number}
   * @memberof ItemCategory
   */
  createdDate: number;
  /**
   * Unix timestamp when the category was last modified
   * @type {number}
   * @memberof ItemCategory
   */
  lastModifiedDate: number;
}
