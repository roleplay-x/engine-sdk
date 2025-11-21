import nock from 'nock';
import { EngineClient } from '../core/engine-client';
import { AnimationApi } from './api';
import {
  Animation,
  AnimationCategory,
  AnimationPack,
  AnimationPackItem,
  CreateAnimationCategoryRequest,
  CreateAnimationPackItemRequest,
  CreateAnimationPackRequest,
  CreateAnimationRequest,
  UpdateAnimationCategoryRequest,
  UpdateAnimationOrderRequest,
  UpdateAnimationPackItemRequest,
  UpdateAnimationPackRequest,
  UpdateAnimationRequest,
} from './models';
import { ApiKeyAuthorization } from '../auth/api-key-authorization';
import { withCommonHeaders } from '../../test/utils/nock-helpers';
import { PaginatedItems } from '../common/paginated-items';

describe('AnimationApi', () => {
  const apiUrl = 'http://mock-api';
  const serverId = 'serverId';
  const applicationName = 'app';
  const locale = 'en-US';
  const auth = new ApiKeyAuthorization('apiKeyId', 'apiKeySecret');
  const authorizationToken = auth.getAuthorizationToken();

  let client: EngineClient;
  let api: AnimationApi;
  let baseScope: nock.Scope;

  beforeAll(() => {
    client = new EngineClient({ apiUrl, applicationName, serverId, locale }, auth);
    api = new AnimationApi(client);
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

  const mockAnimation: Animation = {
    id: 'anim-1',
    key: 'wave',
    name: 'Wave',
    animationCategoryId: 'cat-1',
    items: [{ animationPackItemId: 'item-1', duration: 1000 }],
    attributes: { type: 'greeting' },
    enabled: true,
    order: 1,
    createdDate: 1610000000000,
    lastModifiedDate: 1610000010000,
  };

  const mockCategory: AnimationCategory = {
    id: 'cat-1',
    name: 'Greetings',
    isDefault: true,
    enabled: true,
    order: 1,
    createdDate: 1610000000000,
    lastModifiedDate: 1610000010000,
  };

  const mockPack: AnimationPack = {
    id: 'pack-1',
    name: 'Basic Pack',
    attributes: { version: '1.0' },
  };

  const mockPackItem: AnimationPackItem = {
    id: 'item-1',
    animationPackId: 'pack-1',
    name: 'Wave Animation',
    attributes: { loop: 'false' },
  };

  describe('createAnimation()', () => {
    it('should POST /animations and return animation', async () => {
      const request: CreateAnimationRequest = {
        defaultName: 'Wave',
        animationCategoryId: 'cat-1',
        items: [{ animationPackItemId: 'item-1', duration: 1000 }],
        enabled: true,
      };

      baseScope
        .post('/animations', (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(200, mockAnimation);

      const result = await api.createAnimation(request);
      expect(result).toEqual(mockAnimation);
    });
  });

  describe('getAnimations()', () => {
    const paginatedResult: PaginatedItems<Animation> = {
      pageIndex: 0,
      pageSize: 10,
      pageCount: 1,
      totalCount: 1,
      items: [mockAnimation],
    };

    it('should GET /animations and return paginated animations', async () => {
      baseScope.get('/animations').reply(200, paginatedResult);

      const result = await api.getAnimations();
      expect(result).toEqual(paginatedResult);
    });

    it('should GET /animations with query params', async () => {
      baseScope
        .get('/animations')
        .query({ animationCategoryId: 'cat-1', enabled: true, pageIndex: 0, pageSize: 10 })
        .reply(200, paginatedResult);

      const result = await api.getAnimations({
        animationCategoryId: 'cat-1',
        enabled: true,
        pageIndex: 0,
        pageSize: 10,
      });
      expect(result).toEqual(paginatedResult);
    });
  });

  describe('getAnimationById()', () => {
    it('should GET /animations/{id} and return animation', async () => {
      baseScope.get('/animations/anim-1').reply(200, mockAnimation);

      const result = await api.getAnimationById('anim-1');
      expect(result).toEqual(mockAnimation);
    });
  });

  describe('updateAnimation()', () => {
    it('should PUT /animations/{id}', async () => {
      const request: UpdateAnimationRequest = {
        defaultName: 'Updated Wave',
      };

      baseScope
        .put('/animations/anim-1', (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(204);

      await api.updateAnimation('anim-1', request);
    });
  });

  describe('enableAnimation()', () => {
    it('should PUT /animations/{id}/enabled', async () => {
      baseScope.put('/animations/anim-1/enabled').reply(204);

      await api.enableAnimation('anim-1');
    });
  });

  describe('disableAnimation()', () => {
    it('should PUT /animations/{id}/disabled', async () => {
      baseScope.put('/animations/anim-1/disabled').reply(204);

      await api.disableAnimation('anim-1');
    });
  });

  describe('updateAnimationOrder()', () => {
    it('should PUT /animations/{id}/order', async () => {
      const request: UpdateAnimationOrderRequest = { orderBefore: 'anim-2' };

      baseScope
        .put('/animations/anim-1/order', (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(204);

      await api.updateAnimationOrder('anim-1', request);
    });
  });

  describe('createAnimationCategory()', () => {
    it('should POST /animation-categories and return category', async () => {
      const request: CreateAnimationCategoryRequest = {
        defaultName: 'Greetings',
        isDefault: true,
        enabled: true,
      };

      baseScope
        .post('/animation-categories', (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(200, mockCategory);

      const result = await api.createAnimationCategory(request);
      expect(result).toEqual(mockCategory);
    });
  });

  describe('getAnimationCategories()', () => {
    it('should GET /animation-categories and return categories', async () => {
      baseScope.get('/animation-categories').reply(200, [mockCategory]);

      const result = await api.getAnimationCategories();
      expect(result).toEqual([mockCategory]);
    });

    it('should GET /animation-categories with query params', async () => {
      baseScope.get('/animation-categories').query({ isDefault: true }).reply(200, [mockCategory]);

      const result = await api.getAnimationCategories({ isDefault: true });
      expect(result).toEqual([mockCategory]);
    });
  });

  describe('getAnimationCategoryById()', () => {
    it('should GET /animation-categories/{id} and return category', async () => {
      baseScope.get('/animation-categories/cat-1').reply(200, mockCategory);

      const result = await api.getAnimationCategoryById('cat-1');
      expect(result).toEqual(mockCategory);
    });
  });

  describe('updateAnimationCategory()', () => {
    it('should PUT /animation-categories/{id}', async () => {
      const request: UpdateAnimationCategoryRequest = {
        defaultName: 'Updated Greetings',
      };

      baseScope
        .put('/animation-categories/cat-1', (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(204);

      await api.updateAnimationCategory('cat-1', request);
    });
  });

  describe('enableAnimationCategory()', () => {
    it('should PUT /animation-categories/{id}/enabled', async () => {
      baseScope.put('/animation-categories/cat-1/enabled').reply(204);

      await api.enableAnimationCategory('cat-1');
    });
  });

  describe('disableAnimationCategory()', () => {
    it('should PUT /animation-categories/{id}/disabled', async () => {
      baseScope.put('/animation-categories/cat-1/disabled').reply(204);

      await api.disableAnimationCategory('cat-1');
    });
  });

  describe('updateAnimationCategoryOrder()', () => {
    it('should PUT /animation-categories/{id}/order', async () => {
      const request: UpdateAnimationOrderRequest = { orderBefore: 'cat-2' };

      baseScope
        .put('/animation-categories/cat-1/order', (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(204);

      await api.updateAnimationCategoryOrder('cat-1', request);
    });
  });

  describe('createAnimationPack()', () => {
    it('should POST /animation-packs and return pack', async () => {
      const request: CreateAnimationPackRequest = {
        name: 'Basic Pack',
        attributes: { version: '1.0' },
      };

      baseScope
        .post('/animation-packs', (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(200, mockPack);

      const result = await api.createAnimationPack(request);
      expect(result).toEqual(mockPack);
    });
  });

  describe('getAnimationPacks()', () => {
    const paginatedResult: PaginatedItems<AnimationPack> = {
      pageIndex: 0,
      pageSize: 10,
      pageCount: 1,
      totalCount: 1,
      items: [mockPack],
    };

    it('should GET /animation-packs and return paginated packs', async () => {
      baseScope.get('/animation-packs').reply(200, paginatedResult);

      const result = await api.getAnimationPacks();
      expect(result).toEqual(paginatedResult);
    });

    it('should GET /animation-packs with query params', async () => {
      baseScope
        .get('/animation-packs')
        .query({ name: 'Basic', includeItems: true })
        .reply(200, paginatedResult);

      const result = await api.getAnimationPacks({ name: 'Basic', includeItems: true });
      expect(result).toEqual(paginatedResult);
    });
  });

  describe('getAnimationPackById()', () => {
    it('should GET /animation-packs/{id} and return pack', async () => {
      baseScope.get('/animation-packs/pack-1').reply(200, mockPack);

      const result = await api.getAnimationPackById('pack-1');
      expect(result).toEqual(mockPack);
    });

    it('should GET /animation-packs/{id} with includeItems', async () => {
      const packWithItems = { ...mockPack, items: [mockPackItem] };
      baseScope
        .get('/animation-packs/pack-1')
        .query({ includeItems: true })
        .reply(200, packWithItems);

      const result = await api.getAnimationPackById('pack-1', { includeItems: true });
      expect(result).toEqual(packWithItems);
    });
  });

  describe('updateAnimationPack()', () => {
    it('should PUT /animation-packs/{id}', async () => {
      const request: UpdateAnimationPackRequest = {
        name: 'Updated Pack',
      };

      baseScope
        .put('/animation-packs/pack-1', (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(204);

      await api.updateAnimationPack('pack-1', request);
    });
  });

  describe('createAnimationPackItem()', () => {
    it('should POST /animation-pack-items and return pack item', async () => {
      const request: CreateAnimationPackItemRequest = {
        animationPackId: 'pack-1',
        name: 'Wave Animation',
        attributes: { loop: 'false' },
      };

      baseScope
        .post('/animation-pack-items', (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(200, mockPackItem);

      const result = await api.createAnimationPackItem(request);
      expect(result).toEqual(mockPackItem);
    });
  });

  describe('getAnimationPackItems()', () => {
    const paginatedResult: PaginatedItems<AnimationPackItem> = {
      pageIndex: 0,
      pageSize: 10,
      pageCount: 1,
      totalCount: 1,
      items: [mockPackItem],
    };

    it('should GET /animation-pack-items and return paginated items', async () => {
      baseScope.get('/animation-pack-items').reply(200, paginatedResult);

      const result = await api.getAnimationPackItems();
      expect(result).toEqual(paginatedResult);
    });

    it('should GET /animation-pack-items with query params', async () => {
      baseScope
        .get('/animation-pack-items')
        .query({ animationPackId: 'pack-1', name: 'Wave' })
        .reply(200, paginatedResult);

      const result = await api.getAnimationPackItems({ animationPackId: 'pack-1', name: 'Wave' });
      expect(result).toEqual(paginatedResult);
    });
  });

  describe('getAnimationPackItemById()', () => {
    it('should GET /animation-pack-items/{id} and return pack item', async () => {
      baseScope.get('/animation-pack-items/item-1').reply(200, mockPackItem);

      const result = await api.getAnimationPackItemById('item-1');
      expect(result).toEqual(mockPackItem);
    });
  });

  describe('updateAnimationPackItem()', () => {
    it('should PUT /animation-pack-items/{id}', async () => {
      const request: UpdateAnimationPackItemRequest = {
        name: 'Updated Wave',
      };

      baseScope
        .put('/animation-pack-items/item-1', (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(204);

      await api.updateAnimationPackItem('item-1', request);
    });
  });
});
