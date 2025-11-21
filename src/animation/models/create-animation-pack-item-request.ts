/**
 * Request to create a new animation pack item
 */
export interface CreateAnimationPackItemRequest {
  /**
   * Unique identifier for the animation pack item. This is typically the game engine's animation clip or sequence name within the pack.
   */
  id?: string;
  /**
   * The ID of the animation pack this item belongs to.
   */
  animationPackId: string;
  /**
   * Display name of the animation pack item for administrative purposes.
   */
  name: string;
  /**
   * Custom key-value attributes for storing additional metadata such as animation flags, loop settings, or blend parameters.
   */
  attributes?: Record<string, string>;
}
