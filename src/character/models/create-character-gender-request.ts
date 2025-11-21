/**
 * Request to create a new character gender option
 * @export
 * @interface CreateCharacterGenderRequest
 */
export interface CreateCharacterGenderRequest {
  /**
   * Unique identifier for the gender
   * @type {string}
   * @memberof CreateCharacterGenderRequest
   */
  id: string;
  /**
   * Default display name for the gender (used when no localization exists)
   * @type {string}
   * @memberof CreateCharacterGenderRequest
   */
  defaultName: string;
  /**
   * Whether this gender option should be enabled for character creation
   * @type {boolean}
   * @memberof CreateCharacterGenderRequest
   */
  enabled: boolean;
}
