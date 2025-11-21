import { AnimationPackItem } from './animation-pack-item';

/**
 * Represents an animation pack
 */
export interface AnimationPack {
  /**
   * Unique identifier for the animation pack.
   */
  id: string;
  /**
   * Display name of the animation pack.
   */
  name: string;
  /**
   * Custom key-value attributes associated with this animation pack for extensibility.
   */
  attributes: Record<string, string>;
  /**
   * List of animation items contained in this pack. Null when items are not loaded.
   */
  items?: AnimationPackItem[];
}
