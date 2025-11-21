/**
 * Represents a character nationality option
 * @export
 * @interface CharacterNationality
 */
export interface CharacterNationality {
  /**
   * Unique identifier for the nationality
   * @type {string}
   * @memberof CharacterNationality
   */
  id: string;
  /**
   * Localized display name of the nationality
   * @type {string}
   * @memberof CharacterNationality
   */
  name: string;
  /**
   * Whether this nationality option is enabled for character creation
   * @type {boolean}
   * @memberof CharacterNationality
   */
  enabled: boolean;
  /**
   * Display order for sorting nationality options
   * @type {number}
   * @memberof CharacterNationality
   */
  order: number;
}
