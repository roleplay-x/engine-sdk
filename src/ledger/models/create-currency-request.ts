/**
 * Request to create a new currency
 * @export
 * @interface CreateCurrencyRequest
 */
export interface CreateCurrencyRequest {
  /**
   * Unique identifier for the currency
   * @type {string}
   * @memberof CreateCurrencyRequest
   */
  id?: string;
  /**
   * Currency symbol (e.g., $, €, ¥)
   * @type {string}
   * @memberof CreateCurrencyRequest
   */
  symbol?: string;
  /**
   * Item definition ID associated with this currency
   * @type {string}
   * @memberof CreateCurrencyRequest
   */
  itemDefinitionId?: string;
  /**
   * Default display name of the currency
   * @type {string}
   * @memberof CreateCurrencyRequest
   */
  defaultName?: string;
  /**
   * Default text format pattern. Must contain ${amount} placeholder.
   * @type {string}
   * @memberof CreateCurrencyRequest
   */
  defaultTextFormat?: string;
  /**
   * Whether the currency is enabled. Defaults to true.
   * @type {boolean}
   * @memberof CreateCurrencyRequest
   */
  enabled?: boolean;
}
