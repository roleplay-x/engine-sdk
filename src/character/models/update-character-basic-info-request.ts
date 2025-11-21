/**
 * Request to update a character's basic information
 * @export
 * @interface UpdateCharacterBasicInfoRequest
 */
export interface UpdateCharacterBasicInfoRequest {
  /**
   * New first name for the character
   * @type {string}
   * @memberof UpdateCharacterBasicInfoRequest
   */
  firstName?: string;
  /**
   * New last name for the character
   * @type {string}
   * @memberof UpdateCharacterBasicInfoRequest
   */
  lastName?: string;
  /**
   * New nationality identifier for the character
   * @type {string}
   * @memberof UpdateCharacterBasicInfoRequest
   */
  nationality?: string;
  /**
   * New gender identifier for the character
   * @type {string}
   * @memberof UpdateCharacterBasicInfoRequest
   */
  gender?: string;
  /**
   * New birth date for the character in ISO format
   * @type {string}
   * @memberof UpdateCharacterBasicInfoRequest
   */
  birthDate?: string;
}
