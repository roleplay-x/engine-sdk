import nock from 'nock';
import { EngineClient } from '../core/engine-client';
import { PlayerApi } from './api';
import { ChangeMyPasswordRequest } from './models/change-my-password-request';
import { Character } from '../character/models/character';
import { CharacterSummary } from '../character/models/character-summary';
import { ApiKeyAuthorization } from '../auth/api-key-authorization';
import { withCommonHeaders } from '../../test/utils/nock-helpers';
import { AccountSummary } from '../account/models/account-summary';
import { CreateMyCharacterRequest } from './models/create-my-character-request';
import { CharacterGender } from '../character/models/character-gender';
import { CharacterNationality } from '../character/models/character-nationality';
import { BlueprintConfigSection } from '../blueprint/models/blueprint-config-section';
import { BlueprintConfigCategory } from '../blueprint/models/blueprint-config';
import { SpawnLocation } from '../spawn-location/models/spawn-location';
import { MyReferenceState } from './models/my-reference-state';
import { UpdateMyReferenceStatesRequest } from './models/update-my-reference-states-request';

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

  describe('getMyAppearanceSections()', () => {
    const mockSections: BlueprintConfigSection[] = [
      {
        id: 'section1',
        category: BlueprintConfigCategory.CharacterAppearance,
        categoryName: 'Appearance',
        key: 'hair',
        name: 'Hair',
        order: 1,
        enabled: true,
        visible: true,
        constraints: {},
      },
      {
        id: 'section2',
        category: BlueprintConfigCategory.CharacterAppearance,
        categoryName: 'Appearance',
        key: 'body',
        name: 'Body',
        order: 2,
        enabled: true,
        visible: true,
        constraints: {},
      },
    ];

    it('should GET /player/characters/appearance/sections and return sections', async () => {
      baseScope.get('/player/characters/appearance/sections').reply(200, mockSections);

      const result = await api.getMyAppearanceSections();
      expect(result).toEqual(mockSections);
    });

    it('should pass options parameter correctly', async () => {
      baseScope.get('/player/characters/appearance/sections').reply(200, mockSections);

      const result = await api.getMyAppearanceSections({});
      expect(result).toEqual(mockSections);
    });

    it('should handle empty sections list', async () => {
      const emptySections: BlueprintConfigSection[] = [];
      baseScope.get('/player/characters/appearance/sections').reply(200, emptySections);

      const result = await api.getMyAppearanceSections();
      expect(result).toEqual(emptySections);
    });
  });

  describe('getMySpawnLocations()', () => {
    const mockSpawnLocations: SpawnLocation[] = [
      {
        id: 'spawn-1',
        name: 'Downtown Spawn',
        description: 'Main spawn point downtown',
        cameraId: 'cam-1',
        position: { x: 100, y: 200, z: 300, dimension: 0, w: 90 },
        segmentDefinitionIds: ['seg-1'],
        enabled: true,
        order: 1,
        createdDate: 1610000000000,
        lastModifiedDate: 1610000001000,
      },
      {
        id: 'spawn-2',
        name: 'Beach Spawn',
        description: 'Beach spawn point',
        position: { x: 500, y: 100, z: 200, dimension: 0, w: 180 },
        segmentDefinitionIds: ['seg-2', 'seg-3'],
        enabled: true,
        order: 2,
        createdDate: 1610000002000,
        lastModifiedDate: 1610000003000,
      },
    ];

    it('should GET /player/characters/spawn-locations and return spawn locations', async () => {
      baseScope.get('/player/characters/spawn-locations').reply(200, mockSpawnLocations);

      const result = await api.getMySpawnLocations();
      expect(result).toEqual(mockSpawnLocations);
    });

    it('should pass options parameter correctly', async () => {
      baseScope.get('/player/characters/spawn-locations').reply(200, mockSpawnLocations);

      const result = await api.getMySpawnLocations({});
      expect(result).toEqual(mockSpawnLocations);
    });

    it('should handle empty spawn locations list', async () => {
      const emptyLocations: SpawnLocation[] = [];
      baseScope.get('/player/characters/spawn-locations').reply(200, emptyLocations);

      const result = await api.getMySpawnLocations();
      expect(result).toEqual(emptyLocations);
    });
  });

  describe('getMyCharacters()', () => {
    it('should GET /player/characters and return Character array', async () => {
      const mockCharacters: Character[] = [
        {
          id: 'char1',
          firstName: 'Jane',
          lastName: 'Doe',
          accountId: 'acc123',
          createdDate: 176781234567,
          lastModifiedDate: 176781234567,
          birthDate: '1990-01-01',
        } as Character,
        {
          id: 'char2',
          firstName: 'John',
          lastName: 'Smith',
          accountId: 'acc123',
          createdDate: 176781234567,
          lastModifiedDate: 176781234567,
          birthDate: '1985-05-15',
        } as Character,
      ];

      baseScope.get('/player/characters').reply(200, mockCharacters);

      const result = await api.getMyCharacters();
      expect(result).toEqual(mockCharacters);
    });
  });

  describe('getMyCharacterSummaries()', () => {
    it('should GET /player/characters/summaries and return CharacterSummary array', async () => {
      const mockSummaries: CharacterSummary[] = [
        {
          id: 'char1',
          accountId: 'acc123',
          firstName: 'Jane',
          lastName: 'Doe',
          fullName: 'Jane Doe',
          birthDate: '1990-01-01',
          age: 35,
          gender: 'FEMALE',
          genderName: 'Female',
          nationality: 'AMERICAN',
          nationalityName: 'American',
          isActive: true,
          totalSessionTimeSeconds: 3600,
          lastSessionDate: 176781234567,
          createdDate: 176781234567,
          cash: 1000,
        },
        {
          id: 'char2',
          accountId: 'acc123',
          firstName: 'John',
          lastName: 'Smith',
          fullName: 'John Smith',
          birthDate: '1985-05-15',
          age: 40,
          gender: 'MALE',
          genderName: 'Male',
          isActive: false,
          totalSessionTimeSeconds: 7200,
          createdDate: 176781234567,
          cash: 500,
        },
      ];

      baseScope.get('/player/characters/summaries').reply(200, mockSummaries);

      const result = await api.getMyCharacterSummaries();
      expect(result).toEqual(mockSummaries);
    });
  });

  describe('getMyCharacterSummaryById()', () => {
    const characterId = 'char1';
    const mockSummary: CharacterSummary = {
      id: characterId,
      accountId: 'acc123',
      firstName: 'Jane',
      lastName: 'Doe',
      fullName: 'Jane Doe',
      birthDate: '1990-01-01',
      age: 35,
      gender: 'FEMALE',
      genderName: 'Female',
      nationality: 'AMERICAN',
      nationalityName: 'American',
      isActive: true,
      totalSessionTimeSeconds: 3600,
      lastSessionDate: 176781234567,
      createdDate: 176781234567,
      cash: 1000,
    };

    it('should GET /player/characters/:id/summaries and return CharacterSummary', async () => {
      baseScope.get(`/player/characters/${characterId}/summaries`).reply(200, mockSummary);

      const result = await api.getMyCharacterSummaryById(characterId);
      expect(result).toEqual(mockSummary);
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

    it('should GET /player/accounts/summaries and return AccountSummary', async () => {
      baseScope.get('/player/accounts/summaries').reply(200, mockSummary);

      const result = await api.getMyAccountSummary();

      expect(result).toEqual(mockSummary);
    });

    it('should pass options parameter correctly', async () => {
      baseScope.get('/player/accounts/summaries').reply(200, mockSummary);

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

      baseScope.get('/player/accounts/summaries').reply(200, summaryWithoutEmail);

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

      baseScope.get('/player/accounts/summaries').reply(200, summaryWithEmptyPolicies);

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
        category: BlueprintConfigCategory.CharacterAppearance,
        categoryName: 'Appearance',
        key: 'hair',
        name: 'Hair',
        order: 1,
        enabled: true,
        visible: true,
        constraints: {},
      },
      {
        id: 'section2',
        category: BlueprintConfigCategory.CharacterAppearance,
        categoryName: 'Appearance',
        key: 'face',
        name: 'Face',
        order: 2,
        enabled: true,
        visible: true,
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

  describe('getMyAccountStates()', () => {
    const mockStates: MyReferenceState[] = [
      { key: 'settings', value: { theme: 'dark' } },
      { key: 'preferences', value: { notifications: true } },
    ];

    it('should GET /player/accounts/states without query', async () => {
      baseScope.get('/player/accounts/states').reply(200, mockStates);

      const result = await api.getMyAccountStates();
      expect(result).toEqual(mockStates);
    });

    it('should include query params when provided', async () => {
      baseScope.get('/player/accounts/states').query(true).reply(200, mockStates);

      const result = await api.getMyAccountStates({
        keys: ['settings', 'preferences'],
        pageIndex: 0,
        pageSize: 10,
      });
      expect(result).toEqual(mockStates);
    });
  });

  describe('updateMyAccountStates()', () => {
    it('should PUT /player/accounts/states with correct body', async () => {
      const req: UpdateMyReferenceStatesRequest = {
        states: [{ key: 'settings', value: { theme: 'light' } }],
      };

      baseScope
        .put('/player/accounts/states', (body) => {
          expect(body).toEqual(req);
          return true;
        })
        .reply(204);

      await api.updateMyAccountStates(req);
    });
  });

  describe('getMyCharacterStates()', () => {
    const mockStates: MyReferenceState[] = [
      { key: 'inventory', value: { slots: 10 } },
      { key: 'position', value: { x: 100, y: 200 } },
    ];

    it('should GET /player/characters/states without query', async () => {
      baseScope.get('/player/characters/states').reply(200, mockStates);

      const result = await api.getMyCharacterStates();
      expect(result).toEqual(mockStates);
    });

    it('should include query params when provided', async () => {
      baseScope.get('/player/characters/states').query(true).reply(200, mockStates);

      const result = await api.getMyCharacterStates({
        keys: ['inventory'],
        pageIndex: 0,
        pageSize: 10,
      });
      expect(result).toEqual(mockStates);
    });
  });

  describe('updateMyCharacterStates()', () => {
    it('should PUT /player/characters/states with correct body', async () => {
      const req: UpdateMyReferenceStatesRequest = {
        states: [{ key: 'position', value: { x: 150, y: 250 } }],
      };

      baseScope
        .put('/player/characters/states', (body) => {
          expect(body).toEqual(req);
          return true;
        })
        .reply(204);

      await api.updateMyCharacterStates(req);
    });
  });

  describe('getMyAnimations()', () => {
    const mockAnimation = {
      id: 'anim-1',
      name: 'Wave',
      duration: 1500,
      attributes: { type: 'greeting' },
      order: 1,
    };

    const paginatedResult = {
      pageIndex: 0,
      pageSize: 20,
      pageCount: 1,
      totalCount: 1,
      items: [mockAnimation],
    };

    it('should GET /player/characters/animations without query', async () => {
      baseScope.get('/player/characters/animations').reply(200, paginatedResult);

      const result = await api.getMyAnimations();
      expect(result).toEqual(paginatedResult);
    });

    it('should include query params when provided', async () => {
      baseScope
        .get('/player/characters/animations')
        .query({ animationCategoryId: 'cat-1', key: 'wave', pageIndex: '0', pageSize: '10' })
        .reply(200, paginatedResult);

      const result = await api.getMyAnimations({
        animationCategoryId: 'cat-1',
        key: 'wave',
        pageIndex: 0,
        pageSize: 10,
      });
      expect(result).toEqual(paginatedResult);
    });
  });

  describe('getMyAnimationById()', () => {
    const mockAnimation = {
      id: 'anim-1',
      name: 'Wave',
      duration: 1500,
      attributes: { type: 'greeting' },
      order: 1,
    };

    it('should GET /player/characters/animations/{animationId}', async () => {
      baseScope.get('/player/characters/animations/anim-1').reply(200, mockAnimation);

      const result = await api.getMyAnimationById('anim-1');
      expect(result).toEqual(mockAnimation);
    });
  });

  describe('getMyAnimationCategories()', () => {
    const mockCategories = [
      { id: 'cat-1', name: 'Greetings', order: 1 },
      { id: 'cat-2', name: 'Dances', order: 2 },
    ];

    it('should GET /player/characters/animation-categories', async () => {
      baseScope.get('/player/characters/animation-categories').reply(200, mockCategories);

      const result = await api.getMyAnimationCategories();
      expect(result).toEqual(mockCategories);
    });
  });
});
