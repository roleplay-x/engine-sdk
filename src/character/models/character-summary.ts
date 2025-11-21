import { CharacterAppearance } from './character-appearance';
import { CharacterMotives } from './character-motives';

/**
 * Summary information for a character including gameplay stats
 * @export
 * @interface CharacterSummary
 */
export interface CharacterSummary {
  /**
   * Unique identifier for the character
   * @type {string}
   * @memberof CharacterSummary
   */
  id: string;
  /**
   * ID of the account that owns this character
   * @type {string}
   * @memberof CharacterSummary
   */
  accountId: string;
  /**
   * First name of the character
   * @type {string}
   * @memberof CharacterSummary
   */
  firstName: string;
  /**
   * Last name of the character
   * @type {string}
   * @memberof CharacterSummary
   */
  lastName: string;
  /**
   * Full name of the character (first name + last name)
   * @type {string}
   * @memberof CharacterSummary
   */
  fullName: string;
  /**
   * Birth date of the character in ISO format
   * @type {string}
   * @memberof CharacterSummary
   */
  birthDate: string;
  /**
   * Calculated age of the character in years
   * @type {number}
   * @memberof CharacterSummary
   */
  age: number;
  /**
   * Gender identifier of the character
   * @type {string}
   * @memberof CharacterSummary
   */
  gender: string;
  /**
   * Display name of the character's gender
   * @type {string}
   * @memberof CharacterSummary
   */
  genderName: string;
  /**
   * Nationality identifier of the character
   * @type {string}
   * @memberof CharacterSummary
   */
  nationality?: string;
  /**
   * Display name of the character's nationality
   * @type {string}
   * @memberof CharacterSummary
   */
  nationalityName?: string;
  /**
   * Whether the character is currently active
   * @type {boolean}
   * @memberof CharacterSummary
   */
  isActive: boolean;
  /**
   * Character's appearance configuration
   * @type {CharacterAppearance}
   * @memberof CharacterSummary
   */
  appearance?: CharacterAppearance;
  /**
   * Character's motive values (hunger, thirst, energy, health, mood)
   * @type {CharacterMotives}
   * @memberof CharacterSummary
   */
  motives?: CharacterMotives;
  /**
   * Total time played with this character in seconds
   * @type {number}
   * @memberof CharacterSummary
   */
  totalSessionTimeSeconds: number;
  /**
   * Unix timestamp of the last session with this character
   * @type {number}
   * @memberof CharacterSummary
   */
  lastSessionDate?: number;
  /**
   * Unix timestamp when the character was created
   * @type {number}
   * @memberof CharacterSummary
   */
  createdDate: number;
  /**
   * Current cash balance of the character
   * @type {number}
   * @memberof CharacterSummary
   */
  cash: number;
}
