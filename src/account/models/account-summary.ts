/**
 * @export
 * @interface AccountSummary
 */
export interface AccountSummary {
  /**
   * Unique identifier for the account
   * @type {string}
   * @memberof AccountSummary
   */
  id: string;
  /**
   * Unique username chosen by the account holder
   * @type {string}
   * @memberof AccountSummary
   */
  username: string;
  /**
   * Preferred locale/language code for the account (e.g., en-US)
   * @type {string}
   * @memberof AccountSummary
   */
  locale: string;
  /**
   * Email address associated with the account, undefined if not provided
   * @type {string}
   * @memberof AccountSummary
   */
  email?: string;
  /**
   * Maximum number of characters allowed for this account
   * @type {number}
   * @memberof AccountSummary
   */
  maxCharacters: number;
  /**
   * Current number of characters created by this account
   * @type {number}
   * @memberof AccountSummary
   */
  charactersCount: number;
  /**
   * List of access policy identifiers assigned to this account
   * @type {Array<string>}
   * @memberof AccountSummary
   */
  accessPolicies: Array<string>;
}
