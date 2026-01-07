import nock from 'nock';
import { EngineClient } from '../core/engine-client';
import { InventoryApi } from './api';
import { ApiKeyAuthorization } from '../auth/api-key-authorization';
import { withCommonHeaders } from '../../test/utils/nock-helpers';
import { ItemCategory } from './models/item-category';
import { AmmoType } from './models/ammo-type';
import { AttachmentPoint } from './models/attachment-point';
import { EquipmentSlot } from './models/equipment-slot';
import { MaterialType } from './models/material-type';
import { EffectType } from './models/effect-type';
import { ItemDefinition } from './models/item-definition';
import { Item } from './models/item';
import { CreateItemCategoryRequest } from './models/create-item-category-request';
import { UpdateItemCategoryRequest } from './models/update-item-category-request';
import { UpdateEntityOrderRequest } from './models/update-entity-order-request';
import { CreateAmmoTypeRequest } from './models/create-ammo-type-request';
import { CreateAttachmentPointRequest } from './models/create-attachment-point-request';
import { CreateEquipmentSlotRequest } from './models/create-equipment-slot-request';
import { PatchEquipmentSlotRequest } from './models/patch-equipment-slot-request';
import { CreateMaterialTypeRequest } from './models/create-material-type-request';
import { UpdateMaterialTypeRequest } from './models/update-material-type-request';
import { CreateEffectTypeRequest } from './models/create-effect-type-request';
import { UpdateEffectTypeRequest } from './models/update-effect-type-request';
import { CreateItemDefinitionRequest } from './models/create-item-definition-request';
import { CreateItemDefinitionRevisionRequest } from './models/create-item-definition-revision-request';
import { ForceUpdateItemDefinitionRequest } from './models/force-update-item-definition-request';
import { CreateItemsRequest } from './models/create-items-request';
import { MoveItemsRequest } from './models/move-items-request';
import { PaginatedItems } from '../common/paginated-items';
import { ItemLocationType } from './enums/item-location-type';
import { BindType } from './enums/bind-type';
import { EquipmentSlotCategory } from './enums/equipment-slot-category';
import { Unit } from './enums/unit';

describe('InventoryApi', () => {
  const apiUrl = 'http://mock-api';
  const serverId = 'serverId';
  const applicationName = 'app';
  const locale = 'en-US';
  const auth = new ApiKeyAuthorization('apiKeyId', 'apiKeySecret');
  const authorizationToken = auth.getAuthorizationToken();

  let client: EngineClient;
  let api: InventoryApi;
  let baseScope: nock.Scope;

  beforeAll(() => {
    client = new EngineClient({ apiUrl, applicationName, serverId, locale }, auth);
    api = new InventoryApi(client);
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

  describe('Item Categories', () => {
    const mockCategory: ItemCategory = {
      id: 'WEAPONS',
      name: 'Weapons',
      iconUrl: 'https://example.com/weapons.png',
      enabled: true,
      order: 1,
      createdDate: 1610000000000,
      lastModifiedDate: 1610000001000,
    };

    describe('createItemCategory()', () => {
      it('should POST /item-categories and return ItemCategory', async () => {
        const req: CreateItemCategoryRequest = {
          id: 'WEAPONS',
          defaultName: 'Weapons',
          iconUrl: 'https://example.com/weapons.png',
          enabled: true,
        };

        baseScope
          .post('/item-categories', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(201, mockCategory);

        const result = await api.createItemCategory(req);
        expect(result).toEqual(mockCategory);
      });
    });

    describe('getItemCategories()', () => {
      it('should GET /item-categories and return paginated results', async () => {
        const paginated: PaginatedItems<ItemCategory> = {
          pageIndex: 0,
          pageSize: 20,
          pageCount: 1,
          totalCount: 1,
          items: [mockCategory],
        };

        baseScope.get('/item-categories').reply(200, paginated);

        const result = await api.getItemCategories();
        expect(result).toEqual(paginated);
      });

      it('should pass query parameters', async () => {
        const paginated: PaginatedItems<ItemCategory> = {
          pageIndex: 0,
          pageSize: 10,
          pageCount: 1,
          totalCount: 1,
          items: [mockCategory],
        };

        baseScope
          .get('/item-categories')
          .query({ parentId: 'ROOT', enabled: 'true', pageIndex: '0', pageSize: '10' })
          .reply(200, paginated);

        const result = await api.getItemCategories({
          parentId: 'ROOT',
          enabled: true,
          pageIndex: 0,
          pageSize: 10,
        });
        expect(result).toEqual(paginated);
      });
    });

    describe('getItemCategoryById()', () => {
      it('should GET /item-categories/:id and return ItemCategory', async () => {
        baseScope.get('/item-categories/WEAPONS').reply(200, mockCategory);

        const result = await api.getItemCategoryById('WEAPONS');
        expect(result).toEqual(mockCategory);
      });
    });

    describe('updateItemCategory()', () => {
      it('should PUT /item-categories/:id', async () => {
        const req: UpdateItemCategoryRequest = {
          iconUrl: 'https://example.com/new-weapons.png',
        };

        baseScope
          .put('/item-categories/WEAPONS', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(204);

        await api.updateItemCategory('WEAPONS', req);
      });
    });

    describe('enableItemCategory()', () => {
      it('should PUT /item-categories/:id/enabled', async () => {
        baseScope.put('/item-categories/WEAPONS/enabled').reply(204);

        await api.enableItemCategory('WEAPONS');
      });
    });

    describe('disableItemCategory()', () => {
      it('should PUT /item-categories/:id/disabled', async () => {
        baseScope.put('/item-categories/WEAPONS/disabled').reply(204);

        await api.disableItemCategory('WEAPONS');
      });
    });

    describe('updateItemCategoryOrder()', () => {
      it('should PUT /item-categories/:id/order', async () => {
        const req: UpdateEntityOrderRequest = { order: 2 };

        baseScope
          .put('/item-categories/WEAPONS/order', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(204);

        await api.updateItemCategoryOrder('WEAPONS', req);
      });
    });
  });

  describe('Ammo Types', () => {
    const mockAmmoType: AmmoType = {
      id: '9MM',
      name: '9mm Rounds',
      enabled: true,
      createdDate: 1610000000000,
      lastModifiedDate: 1610000001000,
    };

    describe('createAmmoType()', () => {
      it('should POST /ammo-types and return AmmoType', async () => {
        const req: CreateAmmoTypeRequest = {
          id: '9MM',
          defaultName: '9mm Rounds',
          enabled: true,
        };

        baseScope
          .post('/ammo-types', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(201, mockAmmoType);

        const result = await api.createAmmoType(req);
        expect(result).toEqual(mockAmmoType);
      });
    });

    describe('getAmmoTypes()', () => {
      it('should GET /ammo-types and return AmmoType array', async () => {
        baseScope.get('/ammo-types').reply(200, [mockAmmoType]);

        const result = await api.getAmmoTypes();
        expect(result).toEqual([mockAmmoType]);
      });

      it('should pass query parameters', async () => {
        baseScope.get('/ammo-types').query({ enabled: 'true' }).reply(200, [mockAmmoType]);

        const result = await api.getAmmoTypes({ enabled: true });
        expect(result).toEqual([mockAmmoType]);
      });
    });

    describe('getAmmoTypeById()', () => {
      it('should GET /ammo-types/:id and return AmmoType', async () => {
        baseScope.get('/ammo-types/9MM').reply(200, mockAmmoType);

        const result = await api.getAmmoTypeById('9MM');
        expect(result).toEqual(mockAmmoType);
      });
    });

    describe('enableAmmoType()', () => {
      it('should PUT /ammo-types/:id/enabled', async () => {
        baseScope.put('/ammo-types/9MM/enabled').reply(204);

        await api.enableAmmoType('9MM');
      });
    });

    describe('disableAmmoType()', () => {
      it('should PUT /ammo-types/:id/disabled', async () => {
        baseScope.put('/ammo-types/9MM/disabled').reply(204);

        await api.disableAmmoType('9MM');
      });
    });
  });

  describe('Attachment Points', () => {
    const mockPoint: AttachmentPoint = {
      id: 'SCOPE_MOUNT',
      name: 'Scope Mount',
      enabled: true,
      order: 1,
      createdDate: 1610000000000,
      lastModifiedDate: 1610000001000,
    };

    describe('createAttachmentPoint()', () => {
      it('should POST /attachment-points and return AttachmentPoint', async () => {
        const req: CreateAttachmentPointRequest = {
          id: 'SCOPE_MOUNT',
          defaultName: 'Scope Mount',
          enabled: true,
        };

        baseScope
          .post('/attachment-points', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(201, mockPoint);

        const result = await api.createAttachmentPoint(req);
        expect(result).toEqual(mockPoint);
      });
    });

    describe('getAttachmentPoints()', () => {
      it('should GET /attachment-points and return AttachmentPoint array', async () => {
        baseScope.get('/attachment-points').reply(200, [mockPoint]);

        const result = await api.getAttachmentPoints();
        expect(result).toEqual([mockPoint]);
      });
    });

    describe('getAttachmentPointById()', () => {
      it('should GET /attachment-points/:id and return AttachmentPoint', async () => {
        baseScope.get('/attachment-points/SCOPE_MOUNT').reply(200, mockPoint);

        const result = await api.getAttachmentPointById('SCOPE_MOUNT');
        expect(result).toEqual(mockPoint);
      });
    });

    describe('enableAttachmentPoint()', () => {
      it('should PUT /attachment-points/:id/enabled', async () => {
        baseScope.put('/attachment-points/SCOPE_MOUNT/enabled').reply(204);

        await api.enableAttachmentPoint('SCOPE_MOUNT');
      });
    });

    describe('disableAttachmentPoint()', () => {
      it('should PUT /attachment-points/:id/disabled', async () => {
        baseScope.put('/attachment-points/SCOPE_MOUNT/disabled').reply(204);

        await api.disableAttachmentPoint('SCOPE_MOUNT');
      });
    });

    describe('updateAttachmentPointOrder()', () => {
      it('should PUT /attachment-points/:id/order', async () => {
        const req: UpdateEntityOrderRequest = { order: 2 };

        baseScope
          .put('/attachment-points/SCOPE_MOUNT/order', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(204);

        await api.updateAttachmentPointOrder('SCOPE_MOUNT', req);
      });
    });
  });

  describe('Equipment Slots', () => {
    const mockSlot: EquipmentSlot = {
      id: 'PRIMARY_WEAPON',
      name: 'Primary Weapon',
      target: 'CHARACTER',
      targetName: 'Character',
      category: EquipmentSlotCategory.Tool,
      categoryName: 'Weapon',
      iconUrl: 'https://example.com/primary.png',
      visible: true,
      enabled: true,
      order: 1,
      createdDate: 1610000000000,
      lastModifiedDate: 1610000001000,
    };

    describe('createEquipmentSlot()', () => {
      it('should POST /equipment-slots and return EquipmentSlot', async () => {
        const req: CreateEquipmentSlotRequest = {
          id: 'PRIMARY_WEAPON',
          defaultName: 'Primary Weapon',
          target: 'CHARACTER',
          category: EquipmentSlotCategory.Tool,
          iconUrl: 'https://example.com/primary.png',
          enabled: true,
        };

        baseScope
          .post('/equipment-slots', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(201, mockSlot);

        const result = await api.createEquipmentSlot(req);
        expect(result).toEqual(mockSlot);
      });
    });

    describe('getEquipmentSlots()', () => {
      it('should GET /equipment-slots and return EquipmentSlot array', async () => {
        baseScope.get('/equipment-slots').reply(200, [mockSlot]);

        const result = await api.getEquipmentSlots();
        expect(result).toEqual([mockSlot]);
      });
    });

    describe('getEquipmentSlotById()', () => {
      it('should GET /equipment-slots/:id and return EquipmentSlot', async () => {
        baseScope.get('/equipment-slots/PRIMARY_WEAPON').reply(200, mockSlot);

        const result = await api.getEquipmentSlotById('PRIMARY_WEAPON');
        expect(result).toEqual(mockSlot);
      });
    });

    describe('patchEquipmentSlot()', () => {
      it('should PATCH /equipment-slots/:id and return EquipmentSlot', async () => {
        const req: PatchEquipmentSlotRequest = {
          visible: false,
        };

        const updatedSlot = { ...mockSlot, visible: false };

        baseScope
          .patch('/equipment-slots/PRIMARY_WEAPON', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(200, updatedSlot);

        const result = await api.patchEquipmentSlot('PRIMARY_WEAPON', req);
        expect(result).toEqual(updatedSlot);
      });
    });

    describe('enableEquipmentSlot()', () => {
      it('should PUT /equipment-slots/:id/enabled', async () => {
        baseScope.put('/equipment-slots/PRIMARY_WEAPON/enabled').reply(204);

        await api.enableEquipmentSlot('PRIMARY_WEAPON');
      });
    });

    describe('disableEquipmentSlot()', () => {
      it('should PUT /equipment-slots/:id/disabled', async () => {
        baseScope.put('/equipment-slots/PRIMARY_WEAPON/disabled').reply(204);

        await api.disableEquipmentSlot('PRIMARY_WEAPON');
      });
    });

    describe('updateEquipmentSlotOrder()', () => {
      it('should PUT /equipment-slots/:id/order', async () => {
        const req: UpdateEntityOrderRequest = { order: 2 };

        baseScope
          .put('/equipment-slots/PRIMARY_WEAPON/order', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(204);

        await api.updateEquipmentSlotOrder('PRIMARY_WEAPON', req);
      });
    });
  });

  describe('Material Types', () => {
    const mockMaterial: MaterialType = {
      id: 'STEEL',
      name: 'Steel',
      description: 'A strong metal alloy',
      iconUrl: 'https://example.com/steel.png',
      baseUnit: 'GRAM',
      baseWeight: 1,
      baseVolume: 0.127,
      baseEffects: {},
      baseCraftTime: 60,
      enabled: true,
      order: 1,
      createdDate: 1610000000000,
      lastModifiedDate: 1610000001000,
    };

    describe('createMaterialType()', () => {
      it('should POST /material-types and return MaterialType', async () => {
        const req: CreateMaterialTypeRequest = {
          id: 'STEEL',
          defaultName: 'Steel',
          baseUnit: 'GRAM',
        };

        baseScope
          .post('/material-types', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(201, mockMaterial);

        const result = await api.createMaterialType(req);
        expect(result).toEqual(mockMaterial);
      });
    });

    describe('getMaterialTypes()', () => {
      it('should GET /material-types and return paginated results', async () => {
        const paginated: PaginatedItems<MaterialType> = {
          pageIndex: 0,
          pageSize: 20,
          pageCount: 1,
          totalCount: 1,
          items: [mockMaterial],
        };

        baseScope.get('/material-types').reply(200, paginated);

        const result = await api.getMaterialTypes();
        expect(result).toEqual(paginated);
      });

      it('should pass query parameters', async () => {
        const paginated: PaginatedItems<MaterialType> = {
          pageIndex: 0,
          pageSize: 10,
          pageCount: 1,
          totalCount: 1,
          items: [mockMaterial],
        };

        baseScope
          .get('/material-types')
          .query({ enabled: 'true', pageIndex: '0', pageSize: '10' })
          .reply(200, paginated);

        const result = await api.getMaterialTypes({
          enabled: true,
          pageIndex: 0,
          pageSize: 10,
        });
        expect(result).toEqual(paginated);
      });
    });

    describe('getMaterialTypeById()', () => {
      it('should GET /material-types/:id and return MaterialType', async () => {
        baseScope.get('/material-types/STEEL').reply(200, mockMaterial);

        const result = await api.getMaterialTypeById('STEEL');
        expect(result).toEqual(mockMaterial);
      });
    });

    describe('updateMaterialType()', () => {
      it('should PUT /material-types/:id', async () => {
        const req: UpdateMaterialTypeRequest = {
          baseUnit: 'PIECE',
        };

        baseScope
          .put('/material-types/STEEL', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(204);

        await api.updateMaterialType('STEEL', req);
      });
    });

    describe('enableMaterialType()', () => {
      it('should PUT /material-types/:id/enabled', async () => {
        baseScope.put('/material-types/STEEL/enabled').reply(204);

        await api.enableMaterialType('STEEL');
      });
    });

    describe('disableMaterialType()', () => {
      it('should PUT /material-types/:id/disabled', async () => {
        baseScope.put('/material-types/STEEL/disabled').reply(204);

        await api.disableMaterialType('STEEL');
      });
    });

    describe('updateMaterialTypeOrder()', () => {
      it('should PUT /material-types/:id/order', async () => {
        const req: UpdateEntityOrderRequest = { order: 2 };

        baseScope
          .put('/material-types/STEEL/order', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(204);

        await api.updateMaterialTypeOrder('STEEL', req);
      });
    });
  });

  describe('Effect Types', () => {
    const mockEffect: EffectType = {
      id: 'DAMAGE',
      name: 'Damage',
      target: 'CHARACTER',
      polarity: 'NEGATIVE',
      initialValue: 100,
      enabled: true,
      order: 1,
      ranges: [],
      stateModifiers: [],
      createdDate: 1610000000000,
      lastModifiedDate: 1610000001000,
    };

    describe('createEffectType()', () => {
      it('should POST /effect-types and return EffectType', async () => {
        const req: CreateEffectTypeRequest = {
          id: 'DAMAGE',
          defaultName: 'Damage',
          target: 'CHARACTER',
          polarity: 'NEGATIVE',
          initialValue: 100,
        };

        baseScope
          .post('/effect-types', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(201, mockEffect);

        const result = await api.createEffectType(req);
        expect(result).toEqual(mockEffect);
      });
    });

    describe('getEffectTypes()', () => {
      it('should GET /effect-types and return EffectType array', async () => {
        baseScope.get('/effect-types').reply(200, [mockEffect]);

        const result = await api.getEffectTypes();
        expect(result).toEqual([mockEffect]);
      });

      it('should pass query parameters', async () => {
        baseScope
          .get('/effect-types')
          .query({ target: 'CHARACTER', enabled: 'true' })
          .reply(200, [mockEffect]);

        const result = await api.getEffectTypes({ target: 'CHARACTER', enabled: true });
        expect(result).toEqual([mockEffect]);
      });
    });

    describe('getEffectTypeById()', () => {
      it('should GET /effect-types/:id and return EffectType', async () => {
        baseScope.get('/effect-types/DAMAGE').reply(200, mockEffect);

        const result = await api.getEffectTypeById('DAMAGE');
        expect(result).toEqual(mockEffect);
      });
    });

    describe('updateEffectType()', () => {
      it('should PUT /effect-types/:id', async () => {
        const req: UpdateEffectTypeRequest = {
          initialValue: 150,
        };

        baseScope
          .put('/effect-types/DAMAGE', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(204);

        await api.updateEffectType('DAMAGE', req);
      });
    });

    describe('enableEffectType()', () => {
      it('should PUT /effect-types/:id/enabled', async () => {
        baseScope.put('/effect-types/DAMAGE/enabled').reply(204);

        await api.enableEffectType('DAMAGE');
      });
    });

    describe('disableEffectType()', () => {
      it('should PUT /effect-types/:id/disabled', async () => {
        baseScope.put('/effect-types/DAMAGE/disabled').reply(204);

        await api.disableEffectType('DAMAGE');
      });
    });

    describe('updateEffectTypeOrder()', () => {
      it('should PUT /effect-types/:id/order', async () => {
        const req: UpdateEntityOrderRequest = { order: 2 };

        baseScope
          .put('/effect-types/DAMAGE/order', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(204);

        await api.updateEffectTypeOrder('DAMAGE', req);
      });
    });
  });

  describe('Item Definitions', () => {
    const mockDefinition: ItemDefinition = {
      id: 'def-123',
      definitionCode: 'PISTOL_M9',
      revisionNumber: 1,
      latest: true,
      categoryId: 'WEAPONS',
      categoryName: 'Weapons',
      primaryUnit: Unit.Piece,
      weightPerUnit: 1.5,
      volumePerUnit: 0.5,
      components: [],
      attributes: {},
      materials: [],
      createdDate: 1610000000000,
      lastModifiedDate: 1610000001000,
    };

    describe('createItemDefinition()', () => {
      it('should POST /item-definitions and return ItemDefinition', async () => {
        const req: CreateItemDefinitionRequest = {
          definitionCode: 'PISTOL_M9',
          categoryId: 'WEAPONS',
          primaryUnit: Unit.Piece,
          weightPerUnit: 1.5,
          volumePerUnit: 0.5,
        };

        baseScope
          .post('/item-definitions', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(201, mockDefinition);

        const result = await api.createItemDefinition(req);
        expect(result).toEqual(mockDefinition);
      });
    });

    describe('getItemDefinitions()', () => {
      it('should GET /item-definitions and return paginated results', async () => {
        const paginated: PaginatedItems<ItemDefinition> = {
          pageIndex: 0,
          pageSize: 20,
          pageCount: 1,
          totalCount: 1,
          items: [mockDefinition],
        };

        baseScope.get('/item-definitions').reply(200, paginated);

        const result = await api.getItemDefinitions();
        expect(result).toEqual(paginated);
      });

      it('should pass query parameters', async () => {
        const paginated: PaginatedItems<ItemDefinition> = {
          pageIndex: 0,
          pageSize: 10,
          pageCount: 1,
          totalCount: 1,
          items: [mockDefinition],
        };

        baseScope
          .get('/item-definitions')
          .query({
            definitionCode: 'PISTOL_M9',
            categoryPath: 'WEAPONS',
            latestRevisionOnly: 'true',
            pageIndex: '0',
            pageSize: '10',
          })
          .reply(200, paginated);

        const result = await api.getItemDefinitions({
          definitionCode: 'PISTOL_M9',
          categoryPath: 'WEAPONS',
          latestRevisionOnly: true,
          pageIndex: 0,
          pageSize: 10,
        });
        expect(result).toEqual(paginated);
      });
    });

    describe('getItemDefinitionById()', () => {
      it('should GET /item-definitions/:id and return ItemDefinition', async () => {
        baseScope.get('/item-definitions/PISTOL_M9').reply(200, mockDefinition);

        const result = await api.getItemDefinitionById('PISTOL_M9');
        expect(result).toEqual(mockDefinition);
      });
    });

    describe('createItemDefinitionRevision()', () => {
      it('should POST /item-definitions/:code/revisions and return ItemDefinition', async () => {
        const req: CreateItemDefinitionRevisionRequest = {
          categoryId: 'WEAPONS',
          primaryUnit: 'UNIT',
          weightPerUnit: 1.6,
          volumePerUnit: 0.6,
        };

        const newRevision = {
          ...mockDefinition,
          revisionNumber: 2,
          weightPerUnit: 1.6,
          volumePerUnit: 0.6,
        };

        baseScope
          .post('/item-definitions/PISTOL_M9/revisions', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(201, newRevision);

        const result = await api.createItemDefinitionRevision('PISTOL_M9', req);
        expect(result).toEqual(newRevision);
      });
    });

    describe('forceUpdateItemDefinition()', () => {
      it('should PUT /item-definitions/:id', async () => {
        const req: ForceUpdateItemDefinitionRequest = {
          categoryId: 'WEAPONS',
          primaryUnit: 'UNIT',
        };

        baseScope
          .put('/item-definitions/def-123', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(204);

        await api.forceUpdateItemDefinition('def-123', req);
      });
    });
  });

  describe('Items', () => {
    const mockCategory: ItemCategory = {
      id: 'WEAPONS',
      name: 'Weapons',
      enabled: true,
      order: 1,
      createdDate: 1610000000000,
      lastModifiedDate: 1610000001000,
    };

    const mockItem: Item = {
      id: 'item-123',
      definitionId: 'def-123',
      definitionCode: 'PISTOL_M9',
      definitionRevisionNumber: 1,
      amount: 1,
      location: {
        id: 'CHARACTER:char-456',
        type: ItemLocationType.Character,
        preservationFactor: 1,
      },
      state: {
        binding: { type: BindType.None },
        data: {},
      },
      category: mockCategory,
      primaryUnit: Unit.Piece,
      weightPerUnit: 1.5,
      volumePerUnit: 0.5,
      totalWeight: 1.5,
      totalVolume: 0.5,
      attributes: {},
      components: [],
    };

    describe('createItems()', () => {
      it('should POST /items', async () => {
        const req: CreateItemsRequest = {
          targetLocationId: 'CHARACTER:char-456',
          items: [
            {
              itemDefinitionId: 'PISTOL_M9',
              amount: 1,
            },
          ],
        };

        baseScope
          .post('/items', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(204);

        await api.createItems(req);
      });
    });

    describe('moveItems()', () => {
      it('should PUT /items/locations', async () => {
        const req: MoveItemsRequest = {
          items: [
            {
              itemId: 'item-123',
              amount: 1,
              from: { locationId: 'CHARACTER:char-456' },
              to: { locationId: 'CHARACTER:char-789' },
            },
          ],
        };

        baseScope
          .put('/items/locations', (body) => {
            expect(body).toEqual(req);
            return true;
          })
          .reply(204);

        await api.moveItems(req);
      });
    });

    describe('getItems()', () => {
      it('should GET /items and return paginated results', async () => {
        const paginated: PaginatedItems<Item> = {
          pageIndex: 0,
          pageSize: 20,
          pageCount: 1,
          totalCount: 1,
          items: [mockItem],
        };

        baseScope.get('/items').reply(200, paginated);

        const result = await api.getItems();
        expect(result).toEqual(paginated);
      });

      it('should pass query parameters with arrays', async () => {
        const paginated: PaginatedItems<Item> = {
          pageIndex: 0,
          pageSize: 10,
          pageCount: 1,
          totalCount: 1,
          items: [mockItem],
        };

        baseScope
          .get('/items')
          .query({
            ids: 'item-123,item-456',
            locationIds: 'loc-1,loc-2',
            pageIndex: '0',
            pageSize: '10',
          })
          .reply(200, paginated);

        const result = await api.getItems({
          ids: ['item-123', 'item-456'],
          locationIds: ['loc-1', 'loc-2'],
          pageIndex: 0,
          pageSize: 10,
        });
        expect(result).toEqual(paginated);
      });
    });
  });
});
