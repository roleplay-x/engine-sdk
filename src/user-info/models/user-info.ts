/**
 * User information for authenticated sessions
 * @export
 * @interface UserInfo
 */
export interface UserInfo {
  /**
   * Unique identifier for the user
   * @type {string}
   * @memberof UserInfo
   */
  id: string;
  /**
   * Username of the user
   * @type {string}
   * @memberof UserInfo
   */
  username: string;
  /**
   * Email address of the user
   * @type {string}
   * @memberof UserInfo
   */
  email?: string;
  /**
   * List of access policies granted to the user
   * @type {Array<string>}
   * @memberof UserInfo
   */
  accountPolicies: Array<string>;
}
