/**
 * Character's motive values representing physical and mental state
 * @export
 * @interface CharacterMotives
 */
export interface CharacterMotives {
  /**
   * Hunger level (0-100, lower means more hungry)
   * @type {number}
   * @memberof CharacterMotives
   */
  hunger: number;
  /**
   * Thirst level (0-100, lower means more thirsty)
   * @type {number}
   * @memberof CharacterMotives
   */
  thirst: number;
  /**
   * Energy level (0-100, lower means more tired)
   * @type {number}
   * @memberof CharacterMotives
   */
  energy: number;
  /**
   * Health level (0-100, lower means more injured)
   * @type {number}
   * @memberof CharacterMotives
   */
  health: number;
  /**
   * Mood level (0-100, lower means worse mood)
   * @type {number}
   * @memberof CharacterMotives
   */
  mood: number;
  /**
   * Whether the character is in a critical state (any motive critically low)
   * @type {boolean}
   * @memberof CharacterMotives
   */
  isInCriticalState: boolean;
  /**
   * Whether the character is in a healthy state (all motives at acceptable levels)
   * @type {boolean}
   * @memberof CharacterMotives
   */
  isHealthy: boolean;
}
