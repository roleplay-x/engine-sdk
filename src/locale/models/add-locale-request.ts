/**
 *
 * @export
 * @interface AddLocaleRequest
 */
export interface AddLocaleRequest {
  /**
   *
   * @type {string}
   * @memberof AddLocaleRequest
   */
  code: string | null;
  /**
   *
   * @type {string}
   * @memberof AddLocaleRequest
   */
  defaultName: string | null;
  /**
   *
   * @type {string}
   * @memberof AddLocaleRequest
   */
  iconUrl?: string;
  /**
   * File ID from storage for the locale icon
   * @type {string}
   * @memberof AddLocaleRequest
   */
  fileId?: string;
}
