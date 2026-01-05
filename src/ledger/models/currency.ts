/**
 * Represents a currency in the game's ledger system
 * @export
 * @interface Currency
 */
export interface Currency {
  /**
   * Unique identifier for the currency
   * @type {string}
   * @memberof Currency
   */
  id: string;
  /**
   * Localized display name of the currency
   * @type {string}
   * @memberof Currency
   */
  name: string;
  /**
   * Currency symbol (e.g., $, €, ¥)
   * @type {string}
   * @memberof Currency
   */
  symbol: string;
  /**
   * Text format pattern for displaying currency values
   * @type {string}
   * @memberof Currency
   */
  textFormat: string;
  /**
   * Item definition ID associated with this currency
   * @type {string}
   * @memberof Currency
   */
  itemDefinitionId: string;
  /**
   * URL to the icon image representing this currency
   * @type {string}
   * @memberof Currency
   */
  iconUrl?: string;
  /**
   * Whether the currency is enabled
   * @type {boolean}
   * @memberof Currency
   */
  enabled: boolean;
  /**
   * Unix timestamp in milliseconds when the currency was created
   * @type {number}
   * @memberof Currency
   */
  createdDate: number;
  /**
   * Unix timestamp in milliseconds when the currency was last modified
   * @type {number}
   * @memberof Currency
   */
  lastModifiedDate: number;
}
