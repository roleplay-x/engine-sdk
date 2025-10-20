/**
 *
 * @export
 * @interface AccountSummary
 */
export interface AccountSummary {
  /**
   *
   * @type {string}
   * @memberof AccountSummary
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof AccountSummary
   */
  username: string;
  /**
   *
   * @type {string}
   * @memberof AccountSummary
   */
  locale: string;
  /**
   *
   * @type {string}
   * @memberof AccountSummary
   */
  email?: string;
  /**
   *
   * @type {number}
   * @memberof AccountSummary
   */
  maxCharacters: number;
  /**
   *
   * @type {number}
   * @memberof AccountSummary
   */
  charactersCount: number;
  /**
   *
   * @type {Array<string>}
   * @memberof AccountSummary
   */
  accessPolicies: Array<string>;
}
