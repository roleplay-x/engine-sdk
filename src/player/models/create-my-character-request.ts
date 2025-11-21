/**
 * Request to create a new character for the current player
 * @export
 * @interface CreateMyCharacterRequest
 */
export interface CreateMyCharacterRequest {
  /**
   * First name of the character
   * @type {string}
   * @memberof CreateMyCharacterRequest
   */
  firstName?: string;
  /**
   * Last name of the character
   * @type {string}
   * @memberof CreateMyCharacterRequest
   */
  lastName?: string;
  /**
   * Birth date of the character in ISO format
   * @type {string}
   * @memberof CreateMyCharacterRequest
   */
  birthDate?: string;
  /**
   * Gender identifier for the character
   * @type {string}
   * @memberof CreateMyCharacterRequest
   */
  gender?: string;
  /**
   * Nationality identifier for the character
   * @type {string}
   * @memberof CreateMyCharacterRequest
   */
  nationality?: string;
  /**
   * Appearance configuration data
   * @type {object}
   * @memberof CreateMyCharacterRequest
   */
  appearanceData?: object;
}
