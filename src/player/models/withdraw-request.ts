/**
 * Request to withdraw currency from the character's ledger account
 * @export
 * @interface WithdrawRequest
 */
export interface WithdrawRequest {
  /**
   * Currency identifier to withdraw
   * @type {string}
   * @memberof WithdrawRequest
   */
  currencyId?: string;
  /**
   * Amount to withdraw
   * @type {number}
   * @memberof WithdrawRequest
   */
  amount: number;
  /**
   * Target location ID where the withdrawn cash will be placed
   * @type {string}
   * @memberof WithdrawRequest
   */
  targetLocationId?: string;
}
