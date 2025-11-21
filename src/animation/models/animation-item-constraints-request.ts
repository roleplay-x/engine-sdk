/**
 * Request model for animation item constraints
 */
export interface AnimationItemConstraintsRequest {
  /**
   * List of gender identifiers that can use this animation item. If empty or null, the animation is available to all genders.
   */
  genders?: string[];
}
