import nock from 'nock';
import { EngineClient } from '../core/engine-client';
import { PlayerApi } from './api';
import { ChangeMyPasswordRequest } from './models/change-my-password-request';
import { Character } from '../character/models/character';
import { ApiKeyAuthorization } from '../auth/api-key-authorization';
import { withCommonHeaders } from '../../test/utils/nock-helpers';
import { AccountSummary } from '../account/models/account-summary';
import { CreateMyCharacterRequest } from './models/create-my-character-request';
import { CharacterGender } from '../character/models/character-gender';
import { CharacterNationality } from '../character/models/character-nationality';
import { BlueprintConfigSection } from '../blueprint/models/blueprint-config-section';

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

  describe('createMyCharacter()', () => {
    const mockCharacter: Character = {
      id: 'char123',
      accountId: 'acc123',
      firstName: 'John',
      lastName: 'Doe',
      birthDate: '1990-01-01',
      gender: 'MALE',
      nationality: 'US',
      createdDate: 176781234567,
      lastModifiedDate: 176781234567,
    } as Character;

    const request: CreateMyCharacterRequest = {
      firstName: 'John',
      lastName: 'Doe',
      birthDate: '1990-01-01',
      gender: 'MALE',
      nationality: 'US',
      appearanceData: {},
    };

    it('should POST /player/characters and return created Character', async () => {
      baseScope
        .post('/player/characters', (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(201, mockCharacter);

      const result = await api.createMyCharacter(request);

      expect(result).toEqual(mockCharacter);
    });

    it('should pass options parameter correctly', async () => {
      baseScope
        .post('/player/characters', (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(201, mockCharacter);

      const result = await api.createMyCharacter(request, {});

      expect(result).toEqual(mockCharacter);
    });

    it('should handle character with minimal data', async () => {
      const minimalRequest: CreateMyCharacterRequest = {
        firstName: 'Jane',
      };

      const minimalCharacter: Character = {
        id: 'char456',
        accountId: 'acc123',
        firstName: 'Jane',
        createdDate: 176781234567,
        lastModifiedDate: 176781234567,
      } as Character;

      baseScope
        .post('/player/characters', (body) => {
          expect(body).toEqual(minimalRequest);
          return true;
        })
        .reply(201, minimalCharacter);

      const result = await api.createMyCharacter(minimalRequest);

      expect(result).toEqual(minimalCharacter);
    });
  });

  describe('getCharacterGenders()', () => {
    const mockGenders: ReadonlyArray<CharacterGender> = [
      {
        id: 'MALE',
        name: 'Male',
        enabled: true,
        order: 1,
      },
      {
        id: 'FEMALE',
        name: 'Female',
        enabled: true,
        order: 2,
      },
    ];

    it('should GET /player/characters/genders and return genders', async () => {
      baseScope.get('/player/characters/genders').reply(200, mockGenders);

      const result = await api.getCharacterGenders();

      expect(result).toEqual(mockGenders);
    });

    it('should pass options parameter correctly', async () => {
      baseScope.get('/player/characters/genders').reply(200, mockGenders);

      const result = await api.getCharacterGenders({});

      expect(result).toEqual(mockGenders);
    });

    it('should handle empty genders list', async () => {
      const emptyGenders: ReadonlyArray<CharacterGender> = [];
      baseScope.get('/player/characters/genders').reply(200, emptyGenders);

      const result = await api.getCharacterGenders();

      expect(result).toEqual(emptyGenders);
    });
  });

  describe('getCharacterNationalities()', () => {
    const mockNationalities: ReadonlyArray<CharacterNationality> = [
      {
        id: 'US',
        name: 'United States',
        enabled: true,
        order: 1,
      },
      {
        id: 'UK',
        name: 'United Kingdom',
        enabled: true,
        order: 2,
      },
    ];

    it('should GET /player/characters/nationalities and return nationalities', async () => {
      baseScope.get('/player/characters/nationalities').reply(200, mockNationalities);

      const result = await api.getCharacterNationalities();

      expect(result).toEqual(mockNationalities);
    });

    it('should pass options parameter correctly', async () => {
      baseScope.get('/player/characters/nationalities').reply(200, mockNationalities);

      const result = await api.getCharacterNationalities({});

      expect(result).toEqual(mockNationalities);
    });

    it('should handle empty nationalities list', async () => {
      const emptyNationalities: ReadonlyArray<CharacterNationality> = [];
      baseScope.get('/player/characters/nationalities').reply(200, emptyNationalities);

      const result = await api.getCharacterNationalities();

      expect(result).toEqual(emptyNationalities);
    });
  });

  describe('getBlueprintSections()', () => {
    const mockSections: ReadonlyArray<BlueprintConfigSection> = [
      {
        id: 'section1',
        category: 'APPEARANCE',
        categoryName: 'Appearance',
        key: 'hair',
        name: 'Hair',
        order: 1,
        enabled: true,
        constraints: {},
      },
      {
        id: 'section2',
        category: 'APPEARANCE',
        categoryName: 'Appearance',
        key: 'face',
        name: 'Face',
        order: 2,
        enabled: true,
        constraints: {},
      },
    ];

    it('should GET /player/blueprints/sections and return sections', async () => {
      baseScope.get('/player/blueprints/sections').reply(200, mockSections);

      const result = await api.getBlueprintSections();

      expect(result).toEqual(mockSections);
    });

    it('should pass category query parameter', async () => {
      baseScope
        .get('/player/blueprints/sections')
        .query({ category: 'APPEARANCE' })
        .reply(200, mockSections);

      const result = await api.getBlueprintSections({ category: 'APPEARANCE' });

      expect(result).toEqual(mockSections);
    });

    it('should pass options parameter correctly', async () => {
      baseScope.get('/player/blueprints/sections').reply(200, mockSections);

      const result = await api.getBlueprintSections({}, {});

      expect(result).toEqual(mockSections);
    });

    it('should handle empty sections list', async () => {
      const emptySections: ReadonlyArray<BlueprintConfigSection> = [];
      baseScope.get('/player/blueprints/sections').reply(200, emptySections);

      const result = await api.getBlueprintSections();

      expect(result).toEqual(emptySections);
    });
  });
});
