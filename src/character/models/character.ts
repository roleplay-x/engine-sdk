import { CharacterAppearance } from './character-appearance';
import { CharacterMotives } from './character-motives';

/**
 * Represents a player's character in the game
 * @export
 * @interface Character
 */
export interface Character {
  /**
   * Unique identifier for the character
   * @type {string}
   * @memberof Character
   */
  id: string;
  /**
   * ID of the account that owns this character
   * @type {string}
   * @memberof Character
   */
  accountId: string;
  /**
   * First name of the character
   * @type {string}
   * @memberof Character
   */
  firstName: string;
  /**
   * Last name of the character
   * @type {string}
   * @memberof Character
   */
  lastName: string;
  /**
   * Full name of the character (first name + last name)
   * @type {string}
   * @memberof Character
   */
  fullName: string;
  /**
   * Birth date of the character in ISO format
   * @type {string}
   * @memberof Character
   */
  birthDate: string;
  /**
   * Gender identifier of the character
   * @type {string}
   * @memberof Character
   */
  gender: string;
  /**
   * Display name of the character's gender
   * @type {string}
   * @memberof Character
   */
  genderName: string;
  /**
   * Nationality identifier of the character
   * @type {string}
   * @memberof Character
   */
  nationality?: string;
  /**
   * Display name of the character's nationality
   * @type {string}
   * @memberof Character
   */
  nationalityName?: string;
  /**
   * Character's motive values (hunger, thirst, energy, health, mood)
   * @type {CharacterMotives}
   * @memberof Character
   */
  motives?: CharacterMotives;
  /**
   * Character's appearance configuration
   * @type {CharacterAppearance}
   * @memberof Character
   */
  appearance?: CharacterAppearance;
  /**
   * Whether the character is currently active
   * @type {boolean}
   * @memberof Character
   */
  isActive: boolean;
  /**
   * Unix timestamp when the character was created
   * @type {number}
   * @memberof Character
   */
  createdDate: number;
  /**
   * Unix timestamp when the character was last modified
   * @type {number}
   * @memberof Character
   */
  lastModifiedDate: number;
}
