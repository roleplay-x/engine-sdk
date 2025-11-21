/**
 * Session information including the authentication token
 * @export
 * @interface SessionWithToken
 */
export interface SessionWithToken {
  /**
   * Unique identifier for the session
   * @type {string}
   * @memberof SessionWithToken
   */
  id: string;
  /**
   * Authentication token for this session
   * @type {string}
   * @memberof SessionWithToken
   */
  token: string;
}
