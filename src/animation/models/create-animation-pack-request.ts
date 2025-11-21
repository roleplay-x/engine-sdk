/**
 * Request to create a new animation pack
 */
export interface CreateAnimationPackRequest {
  /**
   * Unique identifier for the animation pack. This is typically the game engine's animation dictionary or resource pack name.
   */
  id?: string;
  /**
   * Display name of the animation pack for administrative purposes.
   */
  name: string;
  /**
   * Custom key-value attributes for storing additional metadata about the animation pack.
   */
  attributes?: Record<string, string>;
}
