import { ReferenceCategory } from './reference-category';

/**
 * Represents a reference entity that can have segments applied
 * @export
 * @interface Reference
 */
export interface Reference {
  /**
   * Unique identifier for the reference
   * @type {string}
   * @memberof Reference
   */
  id: string;
  /**
   * Category of the reference (ACCOUNT, CHARACTER, VEHICLE)
   * @type {ReferenceCategory}
   * @memberof Reference
   */
  category: ReferenceCategory;
  /**
   * Display name of the category
   * @type {string}
   * @memberof Reference
   */
  categoryName: string;
  /**
   * ID of the actual entity (account ID, character ID, etc.)
   * @type {string}
   * @memberof Reference
   */
  referenceId: string;
  /**
   * Display name of the reference
   * @type {string}
   * @memberof Reference
   */
  name: string;
  /**
   * Whether this reference is enabled
   * @type {boolean}
   * @memberof Reference
   */
  enabled: boolean;
}

export function generateCategoryReferenceId(
  category: ReferenceCategory,
  referenceId: string,
): string {
  return `${category}:${referenceId}`;
}
