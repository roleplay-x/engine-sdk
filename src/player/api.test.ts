import nock from 'nock';
import { EngineClient } from '../core/engine-client';
import { PlayerApi } from './api';
import { ChangeMyPasswordRequest } from './models/change-my-password-request';
import { Character } from '../character/models/character';
import { ApiKeyAuthorization } from '../auth/api-key-authorization';
import { withCommonHeaders } from '../../test/utils/nock-helpers';
import { AccountSummary } from '../account/models/account-summary';

describe('PlayerApi', () => {
  const apiUrl = 'http://mock-api';
  const serverId = 'serverId';
  const applicationName = 'app';
  const locale = 'en-US';
  const auth = new ApiKeyAuthorization('apiKeyId', 'apiKeySecret');
  const authorizationToken = auth.getAuthorizationToken();

  let client: EngineClient;
  let api: PlayerApi;
  let baseScope: nock.Scope;

  beforeAll(() => {
    client = new EngineClient({ apiUrl, applicationName, serverId, locale }, auth);
    api = new PlayerApi(client);
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

  describe('changeMyPassword()', () => {
    it('should PUT /player/accounts/password with correct body', async () => {
      const req: ChangeMyPasswordRequest = {
        currentPassword: 'oldPass',
        newPassword: 'newPass',
        confirmNewPassword: 'newPass',
      };

      baseScope
        .put('/player/accounts/password', (body) => {
          expect(body).toEqual(req);
          return true;
        })
        .reply(204);

      await api.changeMyPassword(req);
    });
  });

  describe('getMyCurrentCharacter()', () => {
    it('should GET /player/characters/current and return Character', async () => {
      const mock: Character = {
        id: 'char1',
        firstName: 'Jane',
        lastName: 'Doe',
        accountId: 'acc123',
        createdDate: 176781234567,
        lastModifiedDate: 176781234567,
        birthDate: '1990-01-01',
      } as Character;

      baseScope.get('/player/characters/current').reply(200, mock);

      const result = await api.getMyCurrentCharacter();
      expect(result).toEqual(mock);
    });
  });

  describe('getMyAccountSummary()', () => {
    const mockSummary: AccountSummary = {
      id: 'acc123',
      username: 'testuser',
      locale: 'en-US',
      email: 'test@example.com',
      maxCharacters: 5,
      charactersCount: 2,
      accessPolicies: ['read:character', 'write:character'],
    };

    it('should GET /player/accounts/summary and return AccountSummary', async () => {
      baseScope.get('/player/accounts/summary').reply(200, mockSummary);

      const result = await api.getMyAccountSummary();

      expect(result).toEqual(mockSummary);
    });

    it('should pass options parameter correctly', async () => {
      baseScope.get('/player/accounts/summary').reply(200, mockSummary);

      const result = await api.getMyAccountSummary({});

      expect(result).toEqual(mockSummary);
    });

    it('should handle summary without email', async () => {
      const summaryWithoutEmail: AccountSummary = {
        id: 'acc456',
        username: 'anotheruser',
        locale: 'en-US',
        maxCharacters: 3,
        charactersCount: 1,
        accessPolicies: [],
      };

      baseScope.get('/player/accounts/summary').reply(200, summaryWithoutEmail);

      const result = await api.getMyAccountSummary();

      expect(result).toEqual(summaryWithoutEmail);
    });

    it('should handle summary with empty access policies', async () => {
      const summaryWithEmptyPolicies: AccountSummary = {
        id: 'acc789',
        username: 'newuser',
        locale: 'en-US',
        email: 'new@example.com',
        maxCharacters: 10,
        charactersCount: 0,
        accessPolicies: [],
      };

      baseScope.get('/player/accounts/summary').reply(200, summaryWithEmptyPolicies);

      const result = await api.getMyAccountSummary();

      expect(result).toEqual(summaryWithEmptyPolicies);
    });
  });
});
