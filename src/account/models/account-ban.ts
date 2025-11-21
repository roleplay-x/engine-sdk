/**
 * @export
 * @interface AccountBan
 */
export interface AccountBan {
  /**
   * Reason provided for the account ban
   * @type {string}
   * @memberof AccountBan
   */
  reason: string;
  /**
   * Unix timestamp when the ban was issued
   * @type {number}
   * @memberof AccountBan
   */
  date: number;
  /**
   * Unix timestamp when the ban expires
   * @type {number}
   * @memberof AccountBan
   */
  endDate: number;
  /**
   * Username or identifier of the administrator who executed the ban
   * @type {string}
   * @memberof AccountBan
   */
  executorUser: string;
}
