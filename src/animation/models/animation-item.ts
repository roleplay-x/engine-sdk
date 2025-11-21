import { AnimationItemConstraints } from './animation-item-constraints';

/**
 * An item in an animation sequence
 */
export interface AnimationItem {
  /**
   * Identifier of the animation pack item to be played.
   */
  animationPackItemId: string;
  /**
   * Optional constraints that determine when this animation item can be played.
   */
  constraints?: AnimationItemConstraints;
  /**
   * Duration of the animation item playback in milliseconds.
   */
  duration: number;
}
