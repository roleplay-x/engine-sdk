/**
 * Represents a character animation
 */
export interface CharacterAnimation {
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
   * Total duration of the animation in milliseconds.
   */
  duration: number;

  /**
   * Custom key-value attributes associated with this animation for extensibility.
   */
  attributes: Record<string, string>;

  /**
   * Display order position for sorting animations within a category.
   */
  order: number;
}
