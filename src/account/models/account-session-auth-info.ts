/**
 * @export
 * @interface AccountSessionAuthInfo
 */
export interface AccountSessionAuthInfo {
  /**
   * Unix timestamp when the session authentication occurred
   * @type {number}
   * @memberof AccountSessionAuthInfo
   */
  date: number;
  /**
   * Identifier of the session where the authentication took place
   * @type {string}
   * @memberof AccountSessionAuthInfo
   */
  sessionId: string;
}
