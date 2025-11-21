/**
 * Request to create a new character nationality option
 * @export
 * @interface CreateCharacterNationalityRequest
 */
export interface CreateCharacterNationalityRequest {
  /**
   * Unique identifier for the nationality
   * @type {string}
   * @memberof CreateCharacterNationalityRequest
   */
  id: string;
  /**
   * Default display name for the nationality (used when no localization exists)
   * @type {string}
   * @memberof CreateCharacterNationalityRequest
   */
  defaultName: string;
  /**
   * Whether this nationality option should be enabled for character creation
   * @type {boolean}
   * @memberof CreateCharacterNationalityRequest
   */
  enabled: boolean;
}
