import { ApiOptions, EngineClient } from '../core/engine-client';
import { Currency } from './models/currency';
import { LedgerAccount } from './models/ledger-account';
import { CreateCurrencyRequest } from './models/create-currency-request';
import { UpdateCurrencyRequest } from './models/update-currency-request';

export class LedgerApi {
  constructor(private readonly client: EngineClient) {}

  /**
   * Creates a new currency
   * @summary Create currency
   * @param {CreateCurrencyRequest} request The currency to create
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public createCurrency(request: CreateCurrencyRequest, options?: ApiOptions): Promise<Currency> {
    return this.client.post<CreateCurrencyRequest, Currency>({
      url: 'currencies',
      data: request,
      options,
    });
  }

  /**
   * Retrieves a list of currencies
   * @summary Get currencies
   * @param {Object} [query] Query parameters
   * @param {boolean} [query.enabled] Filter by enabled status
   * @param {boolean} [query.noCache] Bypass server cache
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public getCurrencies(
    query?: {
      enabled?: boolean;
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<Currency[]> {
    return this.client.get<Currency[]>({
      url: 'currencies',
      query,
      options,
    });
  }

  /**
   * Retrieves a currency by its ID
   * @summary Get currency by ID
   * @param {string} id The currency ID
   * @param {Object} [query] Query parameters
   * @param {boolean} [query.noCache] Bypass server cache
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public getCurrencyById(
    id: string,
    query?: {
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<Currency> {
    return this.client.get<Currency>({
      url: `currencies/${id}`,
      query,
      options,
    });
  }

  /**
   * Updates a currency
   * @summary Update currency
   * @param {string} id The currency ID
   * @param {UpdateCurrencyRequest} request The update data
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public updateCurrency(
    id: string,
    request: UpdateCurrencyRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.patch<UpdateCurrencyRequest, void>({
      url: `currencies/${id}`,
      data: request,
      options,
    });
  }

  /**
   * Enables a currency
   * @summary Enable currency
   * @param {string} id The currency ID
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public enableCurrency(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `currencies/${id}/enabled`,
      options,
    });
  }

  /**
   * Disables a currency
   * @summary Disable currency
   * @param {string} id The currency ID
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public disableCurrency(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `currencies/${id}/disabled`,
      options,
    });
  }

  /**
   * Retrieves a ledger account by its ID
   * @summary Get ledger account by ID
   * @param {string} id The ledger account ID (reference format, e.g., CHARACTER:guid)
   * @param {Object} [query] Query parameters
   * @param {boolean} [query.noCache] Bypass server cache
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public getLedgerAccountById(
    id: string,
    query?: {
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<LedgerAccount> {
    return this.client.get<LedgerAccount>({
      url: `ledger-accounts/${encodeURIComponent(id)}`,
      query,
      options,
    });
  }
}
