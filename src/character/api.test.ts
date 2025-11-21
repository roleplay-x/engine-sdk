import nock from 'nock';
import { EngineClient } from '../core/engine-client';
import { CharacterApi } from './api';
import { CharacterNationality } from './models/character-nationality';
import { CreateCharacterNationalityRequest } from './models/create-character-nationality-request';
import { UpdateCharacterNationalityOrderRequest } from './models/update-character-nationality-order-request';
import { CharacterGender } from './models/character-gender';
import { CreateCharacterGenderRequest } from './models/create-character-gender-request';
import { UpdateCharacterGenderOrderRequest } from './models/update-character-gender-order-request';
import { UpdateCharacterBasicInfoRequest } from './models/update-character-basic-info-request';
import { Character } from './models/character';
import { CharacterSummary } from './models/character-summary';
import { ApiKeyAuthorization } from '../auth/api-key-authorization';
import { withCommonHeaders } from '../../test/utils/nock-helpers';
import { PaginatedItems } from '../common/paginated-items';
import { CharacterAnimation } from './models/character-animation';
import { CharacterAnimationCategory } from './models/character-animation-category';

describe('CharacterApi', () => {
  const apiUrl = 'http://mock-api';
  const serverId = 'serverId';
  const applicationName = 'app';
  const locale = 'en-US';
  const auth = new ApiKeyAuthorization('apiKeyId', 'apiKeySecret');
  const authorizationToken = auth.getAuthorizationToken();

  let client: EngineClient;
  let api: CharacterApi;
  let baseScope: nock.Scope;

  beforeAll(() => {
    client = new EngineClient({ apiUrl, applicationName, serverId, locale }, auth);
    api = new CharacterApi(client);
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

  describe('getCharacters()', () => {
    const mockCharacters: Character[] = [
      {
        id: 'c1',
        firstName: 'John',
        lastName: 'Doe',
        accountId: 'acc123',
        gender: 'MALE',
        genderName: 'Male',
        isActive: true,
        fullName: 'John Doe',
        createdDate: 176781234567,
        lastModifiedDate: 176781234567,
        birthDate: '1990-01-01',
      },
      {
        id: 'c2',
        firstName: 'Jane',
        lastName: 'Smith',
        accountId: 'acc123',
        gender: 'FEMALE',
        genderName: 'Female',
        isActive: false,
        fullName: 'Jane Smith',
        createdDate: 176781234567,
        lastModifiedDate: 176781234567,
        birthDate: '1992-05-15',
      },
    ];

    const mockPaginatedResult: PaginatedItems<Character> = {
      pageIndex: 0,
      pageSize: 10,
      pageCount: 1,
      totalCount: 2,
      items: mockCharacters,
    };

    it('should GET /characters without query', async () => {
      baseScope.get('/characters').reply(200, mockPaginatedResult);

      const result = await api.getCharacters();
      expect(result).toEqual(mockPaginatedResult);
    });

    it('should include accountId query when provided', async () => {
      baseScope.get('/characters').query({ accountId: 'acc123' }).reply(200, mockPaginatedResult);

      const result = await api.getCharacters({ accountId: 'acc123' });
      expect(result).toEqual(mockPaginatedResult);
    });

    it('should include all provided query params', async () => {
      const query = {
        accountId: 'acc123',
        includeAppearance: true,
        includeMotives: false,
        onlyActive: true,
        pageIndex: 0,
        pageSize: 10,
      };
      baseScope
        .get('/characters')
        .query({
          accountId: 'acc123',
          includeAppearance: 'true',
          includeMotives: 'false',
          onlyActive: 'true',
          pageIndex: '0',
          pageSize: '10',
        })
        .reply(200, mockPaginatedResult);

      const result = await api.getCharacters(query);
      expect(result).toEqual(mockPaginatedResult);
    });

    it('should include only non-null query params', async () => {
      baseScope
        .get('/characters')
        .query({ includeAppearance: 'true', pageIndex: '1' })
        .reply(200, mockPaginatedResult);

      const result = await api.getCharacters({ includeAppearance: true, pageIndex: 1 });
      expect(result).toEqual(mockPaginatedResult);
    });
  });

  describe('getCharacterById()', () => {
    const characterId = 'c1';
    const mockCharacter: Character = {
      id: characterId,
      firstName: 'John',
      lastName: 'Doe',
      accountId: 'acc123',
      gender: 'MALE',
      genderName: 'Male',
      isActive: true,
      fullName: 'John Doe',
      createdDate: 176781234567,
      lastModifiedDate: 176781234567,
      birthDate: '1990-01-01',
    };

    it('should GET /characters/:id without query', async () => {
      baseScope.get(`/characters/${characterId}`).reply(200, mockCharacter);

      const result = await api.getCharacterById(characterId);
      expect(result).toEqual(mockCharacter);
    });

    it('should include all query params when provided', async () => {
      const query = { accountId: 'acc123', includeAppearance: true, includeMotives: false };
      baseScope
        .get(`/characters/${characterId}`)
        .query({ accountId: 'acc123', includeAppearance: 'true', includeMotives: 'false' })
        .reply(200, mockCharacter);

      const result = await api.getCharacterById(characterId, query);
      expect(result).toEqual(mockCharacter);
    });

    it('should include only non-null query params', async () => {
      baseScope
        .get(`/characters/${characterId}`)
        .query({ includeAppearance: 'true' })
        .reply(200, mockCharacter);

      const result = await api.getCharacterById(characterId, { includeAppearance: true });
      expect(result).toEqual(mockCharacter);
    });
  });

  describe('getCharacterSummaryById()', () => {
    const characterId = 'char1';
    const mockSummary: CharacterSummary = {
      id: characterId,
      accountId: 'acc123',
      firstName: 'John',
      lastName: 'Doe',
      fullName: 'John Doe',
      birthDate: '1990-01-01',
      age: 35,
      gender: 'MALE',
      genderName: 'Male',
      nationality: 'AMERICAN',
      nationalityName: 'American',
      isActive: true,
      totalSessionTimeSeconds: 3600,
      lastSessionDate: 176781234567,
      createdDate: 176781234567,
      cash: 1000,
    };

    it('should GET /characters/:id/summaries without query', async () => {
      baseScope.get(`/characters/${characterId}/summaries`).reply(200, mockSummary);

      const result = await api.getCharacterSummaryById(characterId);
      expect(result).toEqual(mockSummary);
    });

    it('should include onlyActive query when provided', async () => {
      baseScope
        .get(`/characters/${characterId}/summaries`)
        .query({ onlyActive: 'true' })
        .reply(200, mockSummary);

      const result = await api.getCharacterSummaryById(characterId, { onlyActive: true });
      expect(result).toEqual(mockSummary);
    });
  });

  describe('updateCharacterAppearance()', () => {
    const characterId = 'char1';
    const mockCharacter: Character = {
      id: characterId,
      firstName: 'John',
      lastName: 'Doe',
      accountId: 'acc123',
      gender: 'MALE',
      genderName: 'Male',
      isActive: true,
      fullName: 'John Doe',
      createdDate: 176781234567,
      lastModifiedDate: 176781234567,
      birthDate: '1990-01-01',
    };

    it('should PUT /characters/:id/appearance with data only', async () => {
      const request = { data: { hairColor: 'black', hairStyle: 'short' } };

      baseScope
        .put(`/characters/${characterId}/appearance`, (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(200, mockCharacter);

      const result = await api.updateCharacterAppearance(characterId, request);
      expect(result).toEqual(mockCharacter);
    });

    it('should PUT /characters/:id/appearance with base64Image', async () => {
      const request = {
        data: { hairColor: 'brown' },
        base64Image: 'base64encodedstring',
      };

      baseScope
        .put(`/characters/${characterId}/appearance`, (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(200, mockCharacter);

      const result = await api.updateCharacterAppearance(characterId, request);
      expect(result).toEqual(mockCharacter);
    });

    it('should PUT /characters/:id/appearance with empty data', async () => {
      const request = {};

      baseScope
        .put(`/characters/${characterId}/appearance`, (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(200, mockCharacter);

      const result = await api.updateCharacterAppearance(characterId, request);
      expect(result).toEqual(mockCharacter);
    });
  });

  describe('createCharacterNationality()', () => {
    it('should POST /characters/nationalities and return CharacterNationality', async () => {
      const req: CreateCharacterNationalityRequest = {
        id: 'BRITISH',
        enabled: true,
        defaultName: 'British',
      };
      const mock: CharacterNationality = {
        id: 'BRITISH',
        name: 'British',
        enabled: true,
        order: 3,
      };

      baseScope
        .post('/characters/nationalities', (body) => {
          expect(body).toEqual(req);
          return true;
        })
        .reply(201, mock);

      const result = await api.createCharacterNationality(req);
      expect(result).toEqual(mock);
    });
  });

  describe('getCharacterNationalities()', () => {
    const mockList: CharacterNationality[] = [
      { id: 'nat1', name: 'Atlantis', enabled: true, order: 1 },
    ];

    it('should GET /characters/nationalities without query', async () => {
      baseScope.get('/characters/nationalities').reply(200, mockList);

      const result = await api.getCharacterNationalities();
      expect(result).toEqual(mockList);
    });

    it('should include all query params', async () => {
      baseScope
        .get('/characters/nationalities')
        .query({ noCache: 'true', enabled: 'false' })
        .reply(200, mockList);

      const result = await api.getCharacterNationalities({ noCache: true, enabled: false });
      expect(result).toEqual(mockList);
    });

    it('should include only non-null query params', async () => {
      baseScope.get('/characters/nationalities').query({ enabled: 'true' }).reply(200, mockList);

      const result = await api.getCharacterNationalities({ enabled: true });
      expect(result).toEqual(mockList);
    });
  });

  describe('getCharacterNationalityById()', () => {
    const id = 'nat1';
    const mock: CharacterNationality = { id, name: 'Atlantis', enabled: true, order: 1 };

    it('should GET /characters/nationalities/:id without query', async () => {
      baseScope.get(`/characters/nationalities/${id}`).reply(200, mock);

      const result = await api.getCharacterNationalityById(id);
      expect(result).toEqual(mock);
    });

    it('should include noCache query when provided', async () => {
      baseScope.get(`/characters/nationalities/${id}`).query({ noCache: 'true' }).reply(200, mock);

      const result = await api.getCharacterNationalityById(id, { noCache: true });
      expect(result).toEqual(mock);
    });
  });

  describe('enableCharacterNationality()', () => {
    it('should PUT /characters/nationalities/:id/enabled', async () => {
      const id = 'nat1';
      baseScope.put(`/characters/nationalities/${id}/enabled`).reply(204);

      await api.enableCharacterNationality(id);
    });
  });

  describe('disableCharacterNationality()', () => {
    it('should PUT /characters/nationalities/:id/disabled', async () => {
      const id = 'nat1';
      baseScope.put(`/characters/nationalities/${id}/disabled`).reply(204);

      await api.disableCharacterNationality(id);
    });
  });

  describe('updateCharacterNationalityOrder()', () => {
    it('should PUT /characters/nationalities/:id/order with correct body', async () => {
      const id = 'nat1';
      const req: UpdateCharacterNationalityOrderRequest = { order: 5 };

      baseScope
        .put(`/characters/nationalities/${id}/order`, (body) => {
          expect(body).toEqual(req);
          return true;
        })
        .reply(204);

      await api.updateCharacterNationalityOrder(id, req);
    });
  });

  describe('createCharacterGender()', () => {
    it('should POST /characters/genders and return CharacterGender', async () => {
      const req: CreateCharacterGenderRequest = {
        id: 'FEMALE',
        defaultName: 'Female',
        enabled: true,
      };
      const mock: CharacterGender = {
        id: 'FEMALE',
        name: 'Female',
        enabled: true,
        order: 2,
      };

      baseScope
        .post('/characters/genders', (body) => {
          expect(body).toEqual(req);
          return true;
        })
        .reply(201, mock);

      const result = await api.createCharacterGender(req);
      expect(result).toEqual(mock);
    });
  });

  describe('getCharacterGenders()', () => {
    const mockList: CharacterGender[] = [{ id: 'FEMALE', name: 'Female', enabled: true, order: 2 }];

    it('should GET /characters/genders without query', async () => {
      baseScope.get('/characters/genders').reply(200, mockList);

      const result = await api.getCharacterGenders();
      expect(result).toEqual(mockList);
    });

    it('should include all query params', async () => {
      baseScope
        .get('/characters/genders')
        .query({ noCache: 'true', enabled: 'false' })
        .reply(200, mockList);

      const result = await api.getCharacterGenders({ noCache: true, enabled: false });
      expect(result).toEqual(mockList);
    });

    it('should include only non-null query params', async () => {
      baseScope.get('/characters/genders').query({ enabled: 'true' }).reply(200, mockList);

      const result = await api.getCharacterGenders({ enabled: true });
      expect(result).toEqual(mockList);
    });
  });

  describe('getCharacterGenderById()', () => {
    const id = 'gen1';
    const mock: CharacterGender = { id: 'FEMALE', name: 'Female', enabled: true, order: 2 };

    it('should GET /characters/genders/:id without query', async () => {
      baseScope.get(`/characters/genders/${id}`).reply(200, mock);

      const result = await api.getCharacterGenderById(id);
      expect(result).toEqual(mock);
    });

    it('should include noCache query when provided', async () => {
      baseScope.get(`/characters/genders/${id}`).query({ noCache: 'true' }).reply(200, mock);

      const result = await api.getCharacterGenderById(id, { noCache: true });
      expect(result).toEqual(mock);
    });
  });

  describe('enableCharacterGender()', () => {
    it('should PUT /characters/genders/:id/enabled', async () => {
      const id = 'gen1';
      baseScope.put(`/characters/genders/${id}/enabled`).reply(204);

      await api.enableCharacterGender(id);
    });
  });

  describe('disableCharacterGender()', () => {
    it('should PUT /characters/genders/:id/disabled', async () => {
      const id = 'gen1';
      baseScope.put(`/characters/genders/${id}/disabled`).reply(204);

      await api.disableCharacterGender(id);
    });
  });

  describe('updateCharacterGenderOrder()', () => {
    it('should PUT /characters/genders/:id/order with correct body', async () => {
      const id = 'gen1';
      const req: UpdateCharacterGenderOrderRequest = { order: 4 };

      baseScope
        .put(`/characters/genders/${id}/order`, (body) => {
          expect(body).toEqual(req);
          return true;
        })
        .reply(204);

      await api.updateCharacterGenderOrder(id, req);
    });
  });

  describe('updateCharacterBasicInfo()', () => {
    it('should PATCH /characters/:id/basic-info with correct body', async () => {
      const id = 'char1';
      const req: UpdateCharacterBasicInfoRequest = { firstName: 'Jane', lastName: 'Doe' };
      const mockCharacter: Character = {
        id,
        firstName: 'Jane',
        lastName: 'Doe',
        accountId: 'acc123',
        gender: 'FEMALE',
        genderName: 'Female',
        isActive: true,
        fullName: 'Jane Doe',
        createdDate: 176781234567,
        lastModifiedDate: 176781234567,
        birthDate: '1990-01-01',
      };

      baseScope
        .patch(`/characters/${id}/basic-info`, (body) => {
          expect(body).toEqual(req);
          return true;
        })
        .reply(200, mockCharacter);

      const result = await api.updateCharacterBasicInfo(id, req);
      expect(result).toEqual(mockCharacter);
    });
  });

  describe('activateCharacter()', () => {
    it('should PUT /characters/:id/activated', async () => {
      const id = 'char1';
      baseScope.put(`/characters/${id}/activated`).reply(204);

      await api.activateCharacter(id);
    });
  });

  describe('deactivateCharacter()', () => {
    it('should PUT /characters/:id/deactivated', async () => {
      const id = 'char1';
      baseScope.put(`/characters/${id}/deactivated`).reply(204);

      await api.deactivateCharacter(id);
    });
  });

  describe('getCharacterAnimations()', () => {
    const characterId = 'char1';
    const mockAnimations: CharacterAnimation[] = [
      {
        id: 'anim1',
        name: 'Walk',
        duration: 1000,
        attributes: { loop: 'true' },
        order: 1,
      },
      {
        id: 'anim2',
        name: 'Run',
        duration: 500,
        attributes: { loop: 'true' },
        order: 2,
      },
    ];

    const mockPaginatedResult: PaginatedItems<CharacterAnimation> = {
      pageIndex: 0,
      pageSize: 10,
      pageCount: 1,
      totalCount: 2,
      items: mockAnimations,
    };

    it('should GET /characters/:id/animations without query', async () => {
      baseScope.get(`/characters/${characterId}/animations`).reply(200, mockPaginatedResult);

      const result = await api.getCharacterAnimations(characterId);
      expect(result).toEqual(mockPaginatedResult);
    });

    it('should include query params when provided', async () => {
      const query = {
        animationCategoryId: 'cat1',
        key: 'walk',
        pageIndex: 0,
        pageSize: 10,
      };

      baseScope
        .get(`/characters/${characterId}/animations`)
        .query({
          animationCategoryId: 'cat1',
          key: 'walk',
          pageIndex: '0',
          pageSize: '10',
        })
        .reply(200, mockPaginatedResult);

      const result = await api.getCharacterAnimations(characterId, query);
      expect(result).toEqual(mockPaginatedResult);
    });
  });

  describe('getCharacterAnimationById()', () => {
    const characterId = 'char1';
    const animationId = 'anim1';
    const mockAnimation: CharacterAnimation = {
      id: animationId,
      name: 'Walk',
      duration: 1000,
      attributes: { loop: 'true' },
      order: 1,
    };

    it('should GET /characters/:id/animations/:animationId', async () => {
      baseScope
        .get(`/characters/${characterId}/animations/${animationId}`)
        .reply(200, mockAnimation);

      const result = await api.getCharacterAnimationById(characterId, animationId);
      expect(result).toEqual(mockAnimation);
    });
  });

  describe('getCharacterAnimationCategories()', () => {
    const mockCategories: CharacterAnimationCategory[] = [
      { id: 'cat1', name: 'Movement', order: 1 },
      { id: 'cat2', name: 'Combat', order: 2 },
    ];

    it('should GET /characters/animation-categories', async () => {
      baseScope.get('/characters/animation-categories').reply(200, mockCategories);

      const result = await api.getCharacterAnimationCategories();
      expect(result).toEqual(mockCategories);
    });
  });
});
