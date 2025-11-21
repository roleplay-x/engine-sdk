/**
 * Account information within a session context
 * @export
 * @interface SessionInfoAccount
 */
export interface SessionInfoAccount {
  /**
   * Unique identifier for the account
   * @type {string}
   * @memberof SessionInfoAccount
   */
  id: string;
  /**
   * Username of the account
   * @type {string}
   * @memberof SessionInfoAccount
   */
  username: string;
  /**
   * List of segment definition IDs assigned to this account
   * @type {Array<string>}
   * @memberof SessionInfoAccount
   */
  segmentDefinitionIds: Array<string>;
  /**
   * Unix timestamp when the session was authorized for this account
   * @type {number}
   * @memberof SessionInfoAccount
   */
  authorizedDate: number;
}
