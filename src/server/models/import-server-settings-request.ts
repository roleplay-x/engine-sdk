/**
 * Request to import server settings
 * @export
 * @interface ImportServerSettingsRequest
 */
export interface ImportServerSettingsRequest {
  /**
   * URL of the settings file to import
   * @type {string}
   * @memberof ImportServerSettingsRequest
   */
  fileUrl?: string;
  /**
   * File ID from storage (alternative to fileUrl)
   * @type {string}
   * @memberof ImportServerSettingsRequest
   */
  fileId?: string;
}
