/**
 * Request to create a new animation category
 */
export interface CreateAnimationCategoryRequest {
  /**
   * Optional custom identifier for the category. If not provided, a new ID will be generated automatically.
   */
  id?: string;
  /**
   * Default display name of the category shown when no localized name is available.
   */
  defaultName: string;
  /**
   * Whether this is the default category. The default categories are pre-selected when players browse animations.
   */
  isDefault: boolean;
  /**
   * Whether the category is enabled and visible to players. Disabled categories are hidden from the animation list.
   */
  enabled: boolean;
}
