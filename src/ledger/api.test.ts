import nock from 'nock';
import { EngineClient } from '../core/engine-client';
import { LedgerApi } from './api';
import { ApiKeyAuthorization } from '../auth/api-key-authorization';
import { withCommonHeaders } from '../../test/utils/nock-helpers';
import { Currency } from './models/currency';
import { LedgerAccount } from './models/ledger-account';
import { CreateCurrencyRequest } from './models/create-currency-request';
import { UpdateCurrencyRequest } from './models/update-currency-request';

describe('LedgerApi', () => {
  const apiUrl = 'http://mock-api';
  const serverId = 'serverId';
  const applicationName = 'app';
  const locale = 'en-US';
  const auth = new ApiKeyAuthorization('apiKeyId', 'apiKeySecret');
  const authorizationToken = auth.getAuthorizationToken();

  let client: EngineClient;
  let api: LedgerApi;
  let baseScope: nock.Scope;

  beforeAll(() => {
    client = new EngineClient({ apiUrl, applicationName, serverId, locale }, auth);
    api = new LedgerApi(client);
  });

  beforeEach(() => {
    baseScope = withCommonHeaders(nock(apiUrl), {
      serverId,
      applicationName,
      locale,
      authorizationToken,
    });
  });

  afterEach(() => {
    if (!nock.isDone()) {
      throw new Error('Not all nock interceptors were used!');
    }
    nock.cleanAll();
  });

  describe('Currencies', () => {
    const mockCurrency: Currency = {
      id: 'USD',
      name: 'US Dollar',
      symbol: '$',
      textFormat: '{symbol}{amount}',
      itemDefinitionId: 'CASH_USD',
      enabled: true,
      createdDate: 1610000000000,
      lastModifiedDate: 1610000001000,
    };

    describe('createCurrency()', () => {
      it('should POST /currencies and return Currency', async () => {
        const req: CreateCurrencyRequest = {
          id: 'USD',
          defaultName: 'US Dollar',
          symbol: '$',
          defaultTextFormat: '{symbol}{amount}',
          itemDefinitionId: 'CASH_USD',
        };

        baseScope
          .post('/currencies', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(201, mockCurrency);

        const result = await api.createCurrency(req);
        expect(result).toEqual(mockCurrency);
      });
    });

    describe('getCurrencies()', () => {
      it('should GET /currencies and return Currency array', async () => {
        baseScope.get('/currencies').reply(200, [mockCurrency]);

        const result = await api.getCurrencies();
        expect(result).toEqual([mockCurrency]);
      });

      it('should pass query parameters', async () => {
        baseScope.get('/currencies').query({ enabled: 'true' }).reply(200, [mockCurrency]);

        const result = await api.getCurrencies({ enabled: true });
        expect(result).toEqual([mockCurrency]);
      });

      it('should handle empty currencies list', async () => {
        baseScope.get('/currencies').reply(200, []);

        const result = await api.getCurrencies();
        expect(result).toEqual([]);
      });
    });

    describe('getCurrencyById()', () => {
      it('should GET /currencies/:id and return Currency', async () => {
        baseScope.get('/currencies/USD').reply(200, mockCurrency);

        const result = await api.getCurrencyById('USD');
        expect(result).toEqual(mockCurrency);
      });

      it('should pass noCache query parameter', async () => {
        baseScope.get('/currencies/USD').query({ noCache: 'true' }).reply(200, mockCurrency);

        const result = await api.getCurrencyById('USD', { noCache: true });
        expect(result).toEqual(mockCurrency);
      });
    });

    describe('updateCurrency()', () => {
      it('should PATCH /currencies/:id', async () => {
        const req: UpdateCurrencyRequest = {
          symbol: '€',
        };

        baseScope
          .patch('/currencies/USD', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(204);

        await api.updateCurrency('USD', req);
      });
    });

    describe('enableCurrency()', () => {
      it('should PUT /currencies/:id/enabled', async () => {
        baseScope.put('/currencies/USD/enabled').reply(204);

        await api.enableCurrency('USD');
      });
    });

    describe('disableCurrency()', () => {
      it('should PUT /currencies/:id/disabled', async () => {
        baseScope.put('/currencies/USD/disabled').reply(204);

        await api.disableCurrency('USD');
      });
    });
  });

  describe('Ledger Accounts', () => {
    const mockAccount: LedgerAccount = {
      id: 'acc-123',
      owner: {
        category: 'CHARACTER',
        referenceId: 'char-123',
      },
      balances: [
        {
          currencyId: 'USD',
          currencyName: 'US Dollar',
          amount: 1000,
          formattedAmount: '$1,000.00',
        },
        { currencyId: 'EUR', currencyName: 'Euro', amount: 500, formattedAmount: '€500.00' },
      ],
      createdDate: 1610000000000,
      lastModifiedDate: 1610000001000,
    };

    describe('getLedgerAccountById()', () => {
      it('should GET /ledger-accounts/:id and return LedgerAccount', async () => {
        baseScope.get('/ledger-accounts/CHARACTER%3Achar-123').reply(200, mockAccount);

        const result = await api.getLedgerAccountById('CHARACTER:char-123');
        expect(result).toEqual(mockAccount);
      });

      it('should pass noCache query parameter', async () => {
        baseScope
          .get('/ledger-accounts/CHARACTER%3Achar-123')
          .query({ noCache: 'true' })
          .reply(200, mockAccount);

        const result = await api.getLedgerAccountById('CHARACTER:char-123', { noCache: true });
        expect(result).toEqual(mockAccount);
      });

      it('should handle account with empty balances', async () => {
        const emptyAccount: LedgerAccount = {
          id: 'acc-456',
          owner: {
            category: 'CHARACTER',
            referenceId: 'char-456',
          },
          balances: [],
          createdDate: 1610000000000,
          lastModifiedDate: 1610000001000,
        };

        baseScope.get('/ledger-accounts/CHARACTER%3Achar-456').reply(200, emptyAccount);

        const result = await api.getLedgerAccountById('CHARACTER:char-456');
        expect(result).toEqual(emptyAccount);
      });
    });
  });
});
