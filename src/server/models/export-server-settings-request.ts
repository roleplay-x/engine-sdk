/**
 * Request to export server settings
 * @export
 * @interface ExportServerSettingsRequest
 */
export interface ExportServerSettingsRequest {
  /**
   * List of field keys to export
   * @type {string[]}
   * @memberof ExportServerSettingsRequest
   */
  fields: string[];
}
