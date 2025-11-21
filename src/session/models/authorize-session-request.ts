/**
 * Request to authorize an existing session with an access token
 * @export
 * @interface AuthorizeSessionRequest
 */
export interface AuthorizeSessionRequest {
  /**
   * Access token of the user to authorize the session
   * @type {string}
   * @memberof AuthorizeSessionRequest
   */
  accessToken: string;
}
