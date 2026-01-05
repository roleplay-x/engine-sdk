/**
 * Reference relation identifying the owner
 * @export
 * @interface ReferenceRelation
 */
export interface ReferenceRelation {
  /**
   * Category of the reference (e.g., character, account)
   * @type {string}
   * @memberof ReferenceRelation
   */
  category: string;
  /**
   * ID of the referenced entity
   * @type {string}
   * @memberof ReferenceRelation
   */
  referenceId: string;
}

/**
 * Balance for a specific currency in a ledger account
 * @export
 * @interface LedgerAccountBalance
 */
export interface LedgerAccountBalance {
  /**
   * Currency identifier
   * @type {string}
   * @memberof LedgerAccountBalance
   */
  currencyId: string;
  /**
   * Localized currency name
   * @type {string}
   * @memberof LedgerAccountBalance
   */
  currencyName: string;
  /**
   * Balance amount
   * @type {number}
   * @memberof LedgerAccountBalance
   */
  amount: number;
  /**
   * Formatted balance amount with currency symbol
   * @type {string}
   * @memberof LedgerAccountBalance
   */
  formattedAmount: string;
}

/**
 * Ledger account with balances
 * @export
 * @interface LedgerAccount
 */
export interface LedgerAccount {
  /**
   * Unique identifier for the ledger account
   * @type {string}
   * @memberof LedgerAccount
   */
  id: string;
  /**
   * Owner reference of the account
   * @type {ReferenceRelation}
   * @memberof LedgerAccount
   */
  owner: ReferenceRelation;
  /**
   * List of balances for different currencies
   * @type {ReadonlyArray<LedgerAccountBalance>}
   * @memberof LedgerAccount
   */
  balances: ReadonlyArray<LedgerAccountBalance>;
  /**
   * Unix timestamp when the account was created
   * @type {number}
   * @memberof LedgerAccount
   */
  createdDate: number;
  /**
   * Unix timestamp when the account was last modified
   * @type {number}
   * @memberof LedgerAccount
   */
  lastModifiedDate: number;
}
