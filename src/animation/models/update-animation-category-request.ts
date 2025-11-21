/**
 * Request to update an existing animation category
 */
export interface UpdateAnimationCategoryRequest {
  /**
   * Default display name of the category shown when no localized name is available.
   */
  defaultName?: string;
  /**
   * Whether this is the default category. The default categories are pre-selected when players browse animations.
   */
  isDefault?: boolean;
}
