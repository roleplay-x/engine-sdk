import { AnimationItemConstraintsRequest } from './animation-item-constraints-request';

/**
 * Request model for an animation item
 */
export interface AnimationItemRequest {
  /**
   * Reference to the animation pack item that contains the actual animation data (dictionary name, flags, etc.).
   */
  animationPackItemId?: string;
  /**
   * Optional constraints that determine when this animation item can be used (e.g., gender restrictions).
   */
  constraints?: AnimationItemConstraintsRequest;
  /**
   * Duration of the animation in milliseconds. Determines how long this animation item plays before transitioning.
   */
  duration: number;
}
