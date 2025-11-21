/**
 * Represents a character gender option
 * @export
 * @interface CharacterGender
 */
export interface CharacterGender {
  /**
   * Unique identifier for the gender
   * @type {string}
   * @memberof CharacterGender
   */
  id: string;
  /**
   * Localized display name of the gender
   * @type {string}
   * @memberof CharacterGender
   */
  name: string;
  /**
   * Whether this gender option is enabled for character creation
   * @type {boolean}
   * @memberof CharacterGender
   */
  enabled: boolean;
  /**
   * Display order for sorting gender options
   * @type {number}
   * @memberof CharacterGender
   */
  order: number;
}
