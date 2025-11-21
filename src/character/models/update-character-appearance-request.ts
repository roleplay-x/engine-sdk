/**
 * Request to update a character's appearance
 * @export
 * @interface UpdateCharacterAppearanceRequest
 */
export interface UpdateCharacterAppearanceRequest {
  /**
   * Key-value pairs of appearance configuration data
   * @type {Record<string, string>}
   * @memberof UpdateCharacterAppearanceRequest
   */
  data?: Record<string, string>;
  /**
   * Base64 encoded image for the character's appearance preview
   * @type {string}
   * @memberof UpdateCharacterAppearanceRequest
   */
  base64Image?: string;
}
