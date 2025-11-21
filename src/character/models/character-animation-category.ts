/**
 * Represents a character animation category
 */
export interface CharacterAnimationCategory {
  /**
   * Unique identifier for the animation category.
   */
  id: string;

  /**
   * Display name of the animation category shown in the UI.
   */
  name: string;

  /**
   * Display order position for sorting categories in the list.
   */
  order: number;
}
