import { AnimationItemRequest } from './animation-item-request';

/**
 * Request to update an existing animation
 */
export interface UpdateAnimationRequest {
  /**
   * Unique key identifier for the animation. Used for programmatic access and localization lookups.
   */
  key?: string;
  /**
   * Default display name of the animation.
   */
  defaultName?: string;
  /**
   * The ID of the category this animation belongs to. Categories help organize animations into logical groups.
   */
  animationCategoryId?: string;
  /**
   * List of animation items that define the actual animation sequences. Each item references an animation pack item with optional constraints.
   */
  items?: AnimationItemRequest[];
  /**
   * Custom key-value attributes for storing additional metadata about the animation.
   */
  attributes?: Record<string, string>;
}
