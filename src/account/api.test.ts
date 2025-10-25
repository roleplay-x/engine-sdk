import nock from 'nock';
import { EngineClient } from '../core/engine-client';
import { AccountApi } from './api';
import { RegisterAccountRequest } from './models/register-account-request';
import { Account } from './models/account';
import { AccountAuthRequest } from './models/account-auth-request';
import { GrantAccessResult } from './models/grant-access-result';
import { ApiKeyAuthorization } from '../auth/api-key-authorization';
import { withCommonHeaders } from '../../test/utils/nock-helpers';
import { ExternalLoginAuthRequest } from './models/external-login-auth-request';
import { ExternalLoginPreAuthResult } from './models/external-login-pre-auth-result';
import { ExternalLoginPreAuthRequest } from './models/external-login-pre-auth-request';
import { AccountSummary } from './models/account-summary';

describe('AccountApi', () => {
  const apiUrl = 'http://mock-api';
  const serverId = 'serverId';
  const applicationName = 'app';
  const locale = 'en-US';
  const auth = new ApiKeyAuthorization('apiKeyId', 'apiKeySecret');
  const authorizationToken = auth.getAuthorizationToken();

  let client: EngineClient;
  let api: AccountApi;
  let baseScope: nock.Scope;

  beforeAll(() => {
    client = new EngineClient({ apiUrl, applicationName, serverId, locale }, auth);
    api = new AccountApi(client);
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

  describe('registerAccount()', () => {
    it('should POST /accounts with correct body and return Account', async () => {
      const req: RegisterAccountRequest = {
        email: 'user@example.com',
        username: 'newuser',
        password: 'P@ssw0rd',
        locale: 'en-US',
        confirmPassword: 'P@ssw0rd',
      };
      const mockAccount: Account = {
        id: 'acc123',
        email: 'user@example.com',
        username: 'newuser',
        locale: 'en-US',
        createdDate: 176781234567,
        lastModifiedDate: 176781234567,
      };

      baseScope
        .post('/accounts', (body) => {
          expect(body).toEqual(req);
          return true;
        })
        .reply(201, mockAccount);

      const result = await api.registerAccount(req);
      expect(result).toEqual(mockAccount);
    });
  });

  describe('authWithPassword()', () => {
    it('should POST /accounts/auth and return GrantAccessResult', async () => {
      const req: AccountAuthRequest = {
        username: 'existinguser',
        password: 'secret',
      };
      const mockGrant: GrantAccessResult = {
        access_token: 'tok123',
        expires_in: 3600,
        account_id: 'acc123',
        token_type: 'Bearer',
      };

      baseScope
        .post('/accounts/auth', (body) => {
          expect(body).toEqual(req);
          return true;
        })
        .reply(200, mockGrant);

      const result = await api.authWithPassword(req);
      expect(result).toEqual(mockGrant);
    });
  });

  describe('getAccountById()', () => {
    const accountId = 'acc123';
    const mockAccount: Account = {
      id: accountId,
      email: 'user@example.com',
      username: 'user',
      createdDate: 176781234567,
      lastModifiedDate: 176781234567,
      locale: 'en-US',
    };

    it('should GET /accounts/:id without query and return Account', async () => {
      baseScope.get(`/accounts/${accountId}`).reply(200, mockAccount);

      const result = await api.getAccountById(accountId);
      expect(result).toEqual(mockAccount);
    });

    it('should include includeSignInOptions query when provided', async () => {
      baseScope
        .get(`/accounts/${accountId}`)
        .query({ includeSignInOptions: 'true' })
        .reply(200, mockAccount);

      const result = await api.getAccountById(accountId, { includeSignInOptions: true });
      expect(result).toEqual(mockAccount);
    });
  });

  describe('getAccountSummary()', () => {
    const accountId = 'acc123';
    const mockSummary: AccountSummary = {
      id: accountId,
      username: 'testuser',
      locale: 'en-US',
      email: 'test@example.com',
      maxCharacters: 5,
      charactersCount: 2,
      accessPolicies: ['read:character', 'write:character'],
    };

    it('should GET /accounts/:id/summaries and return AccountSummary', async () => {
      baseScope.get(`/accounts/${accountId}/summaries`).reply(200, mockSummary);

      const result = await api.getAccountSummary(accountId);

      expect(result).toEqual(mockSummary);
    });

    it('should pass options parameter correctly', async () => {
      baseScope.get(`/accounts/${accountId}/summaries`).reply(200, mockSummary);

      const result = await api.getAccountSummary(accountId, {});

      expect(result).toEqual(mockSummary);
    });

    it('should handle different account ids', async () => {
      const anotherAccountId = 'acc456';
      const anotherSummary: AccountSummary = {
        id: anotherAccountId,
        username: 'anotheruser',
        locale: 'en-US',
        maxCharacters: 3,
        charactersCount: 1,
        accessPolicies: [],
      };

      baseScope.get(`/accounts/${anotherAccountId}/summaries`).reply(200, anotherSummary);

      const result = await api.getAccountSummary(anotherAccountId);

      expect(result).toEqual(anotherSummary);
    });

    it('should handle summary without email', async () => {
      const summaryWithoutEmail: AccountSummary = {
        id: accountId,
        username: 'nomail',
        locale: 'en-US',
        maxCharacters: 10,
        charactersCount: 0,
        accessPolicies: ['read:account'],
      };

      baseScope.get(`/accounts/${accountId}/summaries`).reply(200, summaryWithoutEmail);

      const result = await api.getAccountSummary(accountId);

      expect(result).toEqual(summaryWithoutEmail);
    });
  });

  describe('preAuthExternalLogin()', () => {
    it('should POST /accounts/external-login/pre-auth and return pre-auth result', async () => {
      const req: ExternalLoginPreAuthRequest = {
        email: 'user@email.com',
        password: 'p@ss',
      };
      const mockResult: ExternalLoginPreAuthResult = {
        externalId: 'external123',
        email: 'user@email.com',
        username: undefined,
        emailInputRequired: false,
        usernameInputRequired: true,
      };

      baseScope
        .post('/accounts/external-login/pre-auth', (body) => {
          expect(body).toEqual(req);
          return true;
        })
        .reply(200, mockResult);

      const result = await api.preAuthExternalLogin(req);
      expect(result).toEqual(mockResult);
    });
  });

  describe('authExternalLogin()', () => {
    it('should POST /accounts/external-login/auth and return GrantAccessResult', async () => {
      const req: ExternalLoginAuthRequest = {
        email: 'user@email.com',
        password: 'p@ss',
      };
      const mockGrant: GrantAccessResult = {
        access_token: 'xtok456',
        expires_in: 7200,
        account_id: 'acc456',
        token_type: 'Bearer',
      };

      baseScope
        .post('/accounts/external-login/auth', (body) => {
          expect(body).toEqual(req);
          return true;
        })
        .reply(200, mockGrant);

      const result = await api.authExternalLogin(req);
      expect(result).toEqual(mockGrant);
    });
  });
});
