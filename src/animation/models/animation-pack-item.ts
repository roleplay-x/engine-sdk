/**
 * Represents an item in an animation pack
 */
export interface AnimationPackItem {
  /**
   * Unique identifier for the animation pack item.
   */
  id: string;
  /**
   * Identifier of the parent animation pack this item belongs to.
   */
  animationPackId: string;
  /**
   * Display name of the animation pack item.
   */
  name: string;
  /**
   * Custom key-value attributes associated with this animation pack item for extensibility.
   */
  attributes: Record<string, string>;
}
