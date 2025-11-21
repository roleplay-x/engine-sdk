import { AccountSignInMethod } from './account-sign-in-method';

/**
 * @export
 * @interface AccountSignInOption
 */
export interface AccountSignInOption {
  /**
   * Sign-in method type (PASSWORD, DISCORD, EXTERNAL)
   * @type {AccountSignInMethod}
   * @memberof AccountSignInOption
   */
  method: AccountSignInMethod;
  /**
   * External provider's unique identifier for this account, undefined for password-based auth
   * @type {string}
   * @memberof AccountSignInOption
   */
  externalId?: string;
  /**
   * Unix timestamp when this sign-in option was added to the account
   * @type {number}
   * @memberof AccountSignInOption
   */
  createdDate: number;
}
