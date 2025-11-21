import { AnimationItemRequest } from './animation-item-request';

/**
 * Request to create a new animation
 */
export interface CreateAnimationRequest {
  /**
   * Optional custom identifier for the animation. If not provided, a new ID will be generated automatically.
   */
  id?: string;
  /**
   * Unique key identifier for the animation. Used for programmatic access (like commands) and search.
   */
  key?: string;
  /**
   * Default display name of the animation shown when no localized name is available.
   */
  defaultName: string;
  /**
   * The ID of the category this animation belongs to. Categories help organize animations into logical groups.
   */
  animationCategoryId: string;
  /**
   * List of animation items that define the actual animation sequences. Each item references an animation pack item with optional constraints.
   */
  items: AnimationItemRequest[];
  /**
   * Custom key-value attributes for storing additional metadata about the animation.
   */
  attributes?: Record<string, string>;
  /**
   * Whether the animation is enabled and available for use. Disabled animations are hidden from players.
   */
  enabled: boolean;
}
