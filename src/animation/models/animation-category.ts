/**
 * Represents an animation category
 */
export interface AnimationCategory {
  /**
   * Unique identifier for the animation category.
   */
  id: string;
  /**
   * Display name of the animation category shown in the UI.
   */
  name: string;
  /**
   * Indicates whether this is the default category for new animations.
   */
  isDefault: boolean;
  /**
   * Indicates whether this category is enabled and visible to users.
   */
  enabled: boolean;
  /**
   * Display order position for sorting categories in the list.
   */
  order: number;
  /**
   * Unix timestamp in milliseconds when the category was created.
   */
  createdDate: number;
  /**
   * Unix timestamp in milliseconds when the category was last modified.
   */
  lastModifiedDate: number;
}
