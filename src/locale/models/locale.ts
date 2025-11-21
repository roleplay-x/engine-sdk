/**
 * Represents a locale/language supported by the server
 * @export
 * @interface Locale
 */
export interface Locale {
  /**
   * Locale code (e.g., en-US, de-DE)
   * @type {string}
   * @memberof Locale
   */
  code: string;
  /**
   * Display name of the locale
   * @type {string}
   * @memberof Locale
   */
  name: string;
  /**
   * URL to the locale's icon/flag image
   * @type {string}
   * @memberof Locale
   */
  iconUrl: string;
  /**
   * Whether this locale is enabled for use
   * @type {boolean}
   * @memberof Locale
   */
  enabled: boolean;
  /**
   * Display order for sorting locales
   * @type {number}
   * @memberof Locale
   */
  order: number;
}
