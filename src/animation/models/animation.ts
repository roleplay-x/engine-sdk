import { AnimationItem } from './animation-item';

/**
 * Represents an animation configuration
 */
export interface Animation {
  /**
   * Unique identifier for the animation.
   */
  id: string;
  /**
   * Optional key used to reference this animation in game scripts and configurations.
   */
  key?: string;
  /**
   * Display name of the animation shown in the UI.
   */
  name: string;
  /**
   * Identifier of the category this animation belongs to.
   */
  animationCategoryId: string;
  /**
   * List of animation items that compose this animation sequence.
   */
  items: AnimationItem[];
  /**
   * Custom key-value attributes associated with this animation for extensibility.
   */
  attributes: Record<string, string>;
  /**
   * Indicates whether this animation is enabled and available for use.
   */
  enabled: boolean;
  /**
   * Display order position for sorting animations within a category.
   */
  order: number;
  /**
   * Unix timestamp in milliseconds when the animation was created.
   */
  createdDate: number;
  /**
   * Unix timestamp in milliseconds when the animation was last modified.
   */
  lastModifiedDate: number;
}
