import { AccountBan } from './account-ban';
import { AccountEmailVerification } from './account-email-verification';
import { AccountSessionAuthInfo } from './account-session-auth-info';
import { AccountSignInOption } from './account-sign-in-option';

/**
 * @export
 * @interface Account
 */
export interface Account {
  /**
   * Unique identifier for the account
   * @type {string}
   * @memberof Account
   */
  id: string;
  /**
   * Unique username chosen by the account holder
   * @type {string}
   * @memberof Account
   */
  username: string;
  /**
   * Preferred locale/language code for the account (e.g., en-US)
   * @type {string}
   * @memberof Account
   */
  locale: string;
  /**
   * Email address associated with the account, undefined if not provided
   * @type {string}
   * @memberof Account
   */
  email?: string;
  /**
   * Email verification status and related information
   * @type {AccountEmailVerification}
   * @memberof Account
   */
  emailVerification?: AccountEmailVerification;
  /**
   * Unix timestamp of the account's last authentication
   * @type {number}
   * @memberof Account
   */
  lastAuthDate?: number;
  /**
   * Information about the last session authentication for this account
   * @type {AccountSessionAuthInfo}
   * @memberof Account
   */
  lastSessionAuthInfo?: AccountSessionAuthInfo;
  /**
   * Ban information if the account is currently banned, undefined otherwise
   * @type {AccountBan}
   * @memberof Account
   */
  ban?: AccountBan;
  /**
   * List of available sign-in methods configured for this account
   * @type {Array<AccountSignInOption>}
   * @memberof Account
   */
  signInOptions?: Array<AccountSignInOption>;
  /**
   * Unix timestamp when the account was created
   * @type {number}
   * @memberof Account
   */
  createdDate: number;
  /**
   * Unix timestamp when the account was last modified
   * @type {number}
   * @memberof Account
   */
  lastModifiedDate: number;
}
