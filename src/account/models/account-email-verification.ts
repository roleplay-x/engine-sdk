/**
 * @export
 * @interface AccountEmailVerification
 */
export interface AccountEmailVerification {
  /**
   * Indicates whether the email address has been verified
   * @type {boolean}
   * @memberof AccountEmailVerification
   */
  verified: boolean;
  /**
   * Unix timestamp of the last verification request sent
   * @type {number}
   * @memberof AccountEmailVerification
   */
  lastRequestDate: number;
}
