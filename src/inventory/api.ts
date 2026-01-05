import { ApiOptions, EngineClient } from '../core/engine-client';
import { PaginatedItems } from '../common/paginated-items';
import { ItemCategory } from './models/item-category';
import { AmmoType } from './models/ammo-type';
import { AttachmentPoint } from './models/attachment-point';
import { EquipmentSlot } from './models/equipment-slot';
import { ItemDefinition } from './models/item-definition';
import { Item } from './models/item';
import { MaterialType } from './models/material-type';
import { EffectType } from './models/effect-type';
import { CreateItemCategoryRequest } from './models/create-item-category-request';
import { UpdateItemCategoryRequest } from './models/update-item-category-request';
import { UpdateEntityOrderRequest } from './models/update-entity-order-request';
import { CreateAmmoTypeRequest } from './models/create-ammo-type-request';
import { CreateAttachmentPointRequest } from './models/create-attachment-point-request';
import { CreateEquipmentSlotRequest } from './models/create-equipment-slot-request';
import { PatchEquipmentSlotRequest } from './models/patch-equipment-slot-request';
import { CreateItemDefinitionRequest } from './models/create-item-definition-request';
import { CreateItemDefinitionRevisionRequest } from './models/create-item-definition-revision-request';
import { ForceUpdateItemDefinitionRequest } from './models/force-update-item-definition-request';
import { CreateItemsRequest } from './models/create-items-request';
import { MoveItemsRequest } from './models/move-items-request';
import { CreateMaterialTypeRequest } from './models/create-material-type-request';
import { UpdateMaterialTypeRequest } from './models/update-material-type-request';
import { CreateEffectTypeRequest } from './models/create-effect-type-request';
import { UpdateEffectTypeRequest } from './models/update-effect-type-request';

export class InventoryApi {
  constructor(private readonly client: EngineClient) {}

  // ==================== Item Categories ====================

  /**
   * Creates a new item category
   * @summary Create item category
   * @param {CreateItemCategoryRequest} request The item category to create
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public createItemCategory(
    request: CreateItemCategoryRequest,
    options?: ApiOptions,
  ): Promise<ItemCategory> {
    return this.client.post<CreateItemCategoryRequest, ItemCategory>({
      url: 'item-categories',
      data: request,
      options,
    });
  }

  /**
   * Retrieves a paginated list of item categories
   * @summary Get item categories
   * @param {Object} [query] Query parameters
   * @param {string} [query.parentId] Filter by parent category ID
   * @param {boolean} [query.enabled] Filter by enabled status
   * @param {number} [query.pageIndex] Page index for pagination (1-based)
   * @param {number} [query.pageSize] Number of items per page
   * @param {boolean} [query.noCache] Bypass server cache
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public getItemCategories(
    query?: {
      parentId?: string;
      enabled?: boolean;
      pageIndex?: number;
      pageSize?: number;
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<PaginatedItems<ItemCategory>> {
    return this.client.get<PaginatedItems<ItemCategory>>({
      url: 'item-categories',
      query,
      options,
    });
  }

  /**
   * Retrieves an item category by its ID
   * @summary Get item category by ID
   * @param {string} id The item category ID
   * @param {Object} [query] Query parameters
   * @param {boolean} [query.noCache] Bypass server cache
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public getItemCategoryById(
    id: string,
    query?: {
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<ItemCategory> {
    return this.client.get<ItemCategory>({
      url: `item-categories/${id}`,
      query,
      options,
    });
  }

  /**
   * Updates an item category
   * @summary Update item category
   * @param {string} id The item category ID
   * @param {UpdateItemCategoryRequest} request The update data
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public updateItemCategory(
    id: string,
    request: UpdateItemCategoryRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateItemCategoryRequest, void>({
      url: `item-categories/${id}`,
      data: request,
      options,
    });
  }

  /**
   * Enables an item category
   * @summary Enable item category
   * @param {string} id The item category ID
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public enableItemCategory(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `item-categories/${id}/enabled`,
      options,
    });
  }

  /**
   * Disables an item category
   * @summary Disable item category
   * @param {string} id The item category ID
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public disableItemCategory(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `item-categories/${id}/disabled`,
      options,
    });
  }

  /**
   * Updates the display order of an item category
   * @summary Update item category order
   * @param {string} id The item category ID
   * @param {UpdateEntityOrderRequest} request The order update data
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public updateItemCategoryOrder(
    id: string,
    request: UpdateEntityOrderRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateEntityOrderRequest, void>({
      url: `item-categories/${id}/order`,
      data: request,
      options,
    });
  }

  // ==================== Ammo Types ====================

  /**
   * Creates a new ammo type
   * @summary Create ammo type
   * @param {CreateAmmoTypeRequest} request The ammo type to create
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public createAmmoType(request: CreateAmmoTypeRequest, options?: ApiOptions): Promise<AmmoType> {
    return this.client.post<CreateAmmoTypeRequest, AmmoType>({
      url: 'ammo-types',
      data: request,
      options,
    });
  }

  /**
   * Retrieves a list of ammo types
   * @summary Get ammo types
   * @param {Object} [query] Query parameters
   * @param {boolean} [query.enabled] Filter by enabled status
   * @param {boolean} [query.noCache] Bypass server cache
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public getAmmoTypes(
    query?: {
      enabled?: boolean;
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<AmmoType[]> {
    return this.client.get<AmmoType[]>({
      url: 'ammo-types',
      query,
      options,
    });
  }

  /**
   * Retrieves an ammo type by its ID
   * @summary Get ammo type by ID
   * @param {string} id The ammo type ID
   * @param {Object} [query] Query parameters
   * @param {boolean} [query.noCache] Bypass server cache
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public getAmmoTypeById(
    id: string,
    query?: {
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<AmmoType> {
    return this.client.get<AmmoType>({
      url: `ammo-types/${id}`,
      query,
      options,
    });
  }

  /**
   * Enables an ammo type
   * @summary Enable ammo type
   * @param {string} id The ammo type ID
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public enableAmmoType(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `ammo-types/${id}/enabled`,
      options,
    });
  }

  /**
   * Disables an ammo type
   * @summary Disable ammo type
   * @param {string} id The ammo type ID
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public disableAmmoType(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `ammo-types/${id}/disabled`,
      options,
    });
  }

  // ==================== Attachment Points ====================

  /**
   * Creates a new attachment point
   * @summary Create attachment point
   * @param {CreateAttachmentPointRequest} request The attachment point to create
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public createAttachmentPoint(
    request: CreateAttachmentPointRequest,
    options?: ApiOptions,
  ): Promise<AttachmentPoint> {
    return this.client.post<CreateAttachmentPointRequest, AttachmentPoint>({
      url: 'attachment-points',
      data: request,
      options,
    });
  }

  /**
   * Retrieves a list of attachment points
   * @summary Get attachment points
   * @param {Object} [query] Query parameters
   * @param {boolean} [query.enabled] Filter by enabled status
   * @param {boolean} [query.noCache] Bypass server cache
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public getAttachmentPoints(
    query?: {
      enabled?: boolean;
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<AttachmentPoint[]> {
    return this.client.get<AttachmentPoint[]>({
      url: 'attachment-points',
      query,
      options,
    });
  }

  /**
   * Retrieves an attachment point by its ID
   * @summary Get attachment point by ID
   * @param {string} id The attachment point ID
   * @param {Object} [query] Query parameters
   * @param {boolean} [query.noCache] Bypass server cache
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public getAttachmentPointById(
    id: string,
    query?: {
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<AttachmentPoint> {
    return this.client.get<AttachmentPoint>({
      url: `attachment-points/${id}`,
      query,
      options,
    });
  }

  /**
   * Enables an attachment point
   * @summary Enable attachment point
   * @param {string} id The attachment point ID
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public enableAttachmentPoint(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `attachment-points/${id}/enabled`,
      options,
    });
  }

  /**
   * Disables an attachment point
   * @summary Disable attachment point
   * @param {string} id The attachment point ID
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public disableAttachmentPoint(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `attachment-points/${id}/disabled`,
      options,
    });
  }

  /**
   * Updates the display order of an attachment point
   * @summary Update attachment point order
   * @param {string} id The attachment point ID
   * @param {UpdateEntityOrderRequest} request The order update data
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public updateAttachmentPointOrder(
    id: string,
    request: UpdateEntityOrderRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateEntityOrderRequest, void>({
      url: `attachment-points/${id}/order`,
      data: request,
      options,
    });
  }

  // ==================== Equipment Slots ====================

  /**
   * Creates a new equipment slot
   * @summary Create equipment slot
   * @param {CreateEquipmentSlotRequest} request The equipment slot to create
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public createEquipmentSlot(
    request: CreateEquipmentSlotRequest,
    options?: ApiOptions,
  ): Promise<EquipmentSlot> {
    return this.client.post<CreateEquipmentSlotRequest, EquipmentSlot>({
      url: 'equipment-slots',
      data: request,
      options,
    });
  }

  /**
   * Retrieves a list of equipment slots
   * @summary Get equipment slots
   * @param {Object} [query] Query parameters
   * @param {boolean} [query.enabled] Filter by enabled status
   * @param {boolean} [query.noCache] Bypass server cache
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public getEquipmentSlots(
    query?: {
      enabled?: boolean;
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<EquipmentSlot[]> {
    return this.client.get<EquipmentSlot[]>({
      url: 'equipment-slots',
      query,
      options,
    });
  }

  /**
   * Retrieves an equipment slot by its ID
   * @summary Get equipment slot by ID
   * @param {string} id The equipment slot ID
   * @param {Object} [query] Query parameters
   * @param {boolean} [query.noCache] Bypass server cache
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public getEquipmentSlotById(
    id: string,
    query?: {
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<EquipmentSlot> {
    return this.client.get<EquipmentSlot>({
      url: `equipment-slots/${id}`,
      query,
      options,
    });
  }

  /**
   * Partially updates an equipment slot
   * @summary Patch equipment slot
   * @param {string} id The equipment slot ID
   * @param {PatchEquipmentSlotRequest} request The patch data
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public patchEquipmentSlot(
    id: string,
    request: PatchEquipmentSlotRequest,
    options?: ApiOptions,
  ): Promise<EquipmentSlot> {
    return this.client.patch<PatchEquipmentSlotRequest, EquipmentSlot>({
      url: `equipment-slots/${id}`,
      data: request,
      options,
    });
  }

  /**
   * Enables an equipment slot
   * @summary Enable equipment slot
   * @param {string} id The equipment slot ID
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public enableEquipmentSlot(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `equipment-slots/${id}/enabled`,
      options,
    });
  }

  /**
   * Disables an equipment slot
   * @summary Disable equipment slot
   * @param {string} id The equipment slot ID
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public disableEquipmentSlot(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `equipment-slots/${id}/disabled`,
      options,
    });
  }

  /**
   * Updates the display order of an equipment slot
   * @summary Update equipment slot order
   * @param {string} id The equipment slot ID
   * @param {UpdateEntityOrderRequest} request The order update data
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public updateEquipmentSlotOrder(
    id: string,
    request: UpdateEntityOrderRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateEntityOrderRequest, void>({
      url: `equipment-slots/${id}/order`,
      data: request,
      options,
    });
  }

  // ==================== Material Types ====================

  /**
   * Creates a new material type
   * @summary Create material type
   * @param {CreateMaterialTypeRequest} request The material type to create
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public createMaterialType(
    request: CreateMaterialTypeRequest,
    options?: ApiOptions,
  ): Promise<MaterialType> {
    return this.client.post<CreateMaterialTypeRequest, MaterialType>({
      url: 'material-types',
      data: request,
      options,
    });
  }

  /**
   * Retrieves a paginated list of material types
   * @summary Get material types
   * @param {Object} [query] Query parameters
   * @param {string} [query.parentId] Filter by parent ID
   * @param {string} [query.baseUnit] Filter by base unit
   * @param {boolean} [query.enabled] Filter by enabled status
   * @param {number} [query.pageIndex] Page index for pagination
   * @param {number} [query.pageSize] Number of items per page
   * @param {boolean} [query.noCache] Bypass server cache
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public getMaterialTypes(
    query?: {
      parentId?: string;
      baseUnit?: string;
      enabled?: boolean;
      pageIndex?: number;
      pageSize?: number;
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<PaginatedItems<MaterialType>> {
    return this.client.get<PaginatedItems<MaterialType>>({
      url: 'material-types',
      query,
      options,
    });
  }

  /**
   * Retrieves a material type by its ID
   * @summary Get material type by ID
   * @param {string} id The material type ID
   * @param {Object} [query] Query parameters
   * @param {boolean} [query.noCache] Bypass server cache
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public getMaterialTypeById(
    id: string,
    query?: {
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<MaterialType> {
    return this.client.get<MaterialType>({
      url: `material-types/${id}`,
      query,
      options,
    });
  }

  /**
   * Updates a material type
   * @summary Update material type
   * @param {string} id The material type ID
   * @param {UpdateMaterialTypeRequest} request The update data
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public updateMaterialType(
    id: string,
    request: UpdateMaterialTypeRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateMaterialTypeRequest, void>({
      url: `material-types/${id}`,
      data: request,
      options,
    });
  }

  /**
   * Enables a material type
   * @summary Enable material type
   * @param {string} id The material type ID
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public enableMaterialType(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `material-types/${id}/enabled`,
      options,
    });
  }

  /**
   * Disables a material type
   * @summary Disable material type
   * @param {string} id The material type ID
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public disableMaterialType(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `material-types/${id}/disabled`,
      options,
    });
  }

  /**
   * Updates the display order of a material type
   * @summary Update material type order
   * @param {string} id The material type ID
   * @param {UpdateEntityOrderRequest} request The order update data
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public updateMaterialTypeOrder(
    id: string,
    request: UpdateEntityOrderRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateEntityOrderRequest, void>({
      url: `material-types/${id}/order`,
      data: request,
      options,
    });
  }

  // ==================== Effect Types ====================

  /**
   * Creates a new effect type
   * @summary Create effect type
   * @param {CreateEffectTypeRequest} request The effect type to create
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public createEffectType(
    request: CreateEffectTypeRequest,
    options?: ApiOptions,
  ): Promise<EffectType> {
    return this.client.post<CreateEffectTypeRequest, EffectType>({
      url: 'effect-types',
      data: request,
      options,
    });
  }

  /**
   * Retrieves a list of effect types
   * @summary Get effect types
   * @param {Object} [query] Query parameters
   * @param {string} [query.target] Filter by target type
   * @param {boolean} [query.enabled] Filter by enabled status
   * @param {boolean} [query.noCache] Bypass server cache
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public getEffectTypes(
    query?: {
      target?: string;
      enabled?: boolean;
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<EffectType[]> {
    return this.client.get<EffectType[]>({
      url: 'effect-types',
      query,
      options,
    });
  }

  /**
   * Retrieves an effect type by its ID
   * @summary Get effect type by ID
   * @param {string} id The effect type ID
   * @param {Object} [query] Query parameters
   * @param {boolean} [query.noCache] Bypass server cache
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public getEffectTypeById(
    id: string,
    query?: {
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<EffectType> {
    return this.client.get<EffectType>({
      url: `effect-types/${id}`,
      query,
      options,
    });
  }

  /**
   * Updates an effect type
   * @summary Update effect type
   * @param {string} id The effect type ID
   * @param {UpdateEffectTypeRequest} request The update data
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public updateEffectType(
    id: string,
    request: UpdateEffectTypeRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateEffectTypeRequest, void>({
      url: `effect-types/${id}`,
      data: request,
      options,
    });
  }

  /**
   * Enables an effect type
   * @summary Enable effect type
   * @param {string} id The effect type ID
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public enableEffectType(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `effect-types/${id}/enabled`,
      options,
    });
  }

  /**
   * Disables an effect type
   * @summary Disable effect type
   * @param {string} id The effect type ID
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public disableEffectType(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `effect-types/${id}/disabled`,
      options,
    });
  }

  /**
   * Updates the display order of an effect type
   * @summary Update effect type order
   * @param {string} id The effect type ID
   * @param {UpdateEntityOrderRequest} request The order update data
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public updateEffectTypeOrder(
    id: string,
    request: UpdateEntityOrderRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateEntityOrderRequest, void>({
      url: `effect-types/${id}/order`,
      data: request,
      options,
    });
  }

  // ==================== Item Definitions ====================

  /**
   * Creates a new item definition
   * @summary Create item definition
   * @param {CreateItemDefinitionRequest} request The item definition to create
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public createItemDefinition(
    request: CreateItemDefinitionRequest,
    options?: ApiOptions,
  ): Promise<ItemDefinition> {
    return this.client.post<CreateItemDefinitionRequest, ItemDefinition>({
      url: 'item-definitions',
      data: request,
      options,
    });
  }

  /**
   * Retrieves a paginated list of item definitions
   * @summary Get item definitions
   * @param {Object} [query] Query parameters
   * @param {string} [query.definitionCode] Filter by definition code
   * @param {string} [query.materialTypeId] Filter by material type ID
   * @param {string} [query.categoryPath] Filter by category path
   * @param {string} [query.ownerCategoryReferenceId] Filter by owner reference ID
   * @param {boolean} [query.latestRevisionOnly] Only return latest revisions
   * @param {number} [query.pageIndex] Page index for pagination
   * @param {number} [query.pageSize] Number of items per page
   * @param {boolean} [query.noCache] Bypass server cache
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public getItemDefinitions(
    query?: {
      definitionCode?: string;
      materialTypeId?: string;
      categoryPath?: string;
      ownerCategoryReferenceId?: string;
      latestRevisionOnly?: boolean;
      pageIndex?: number;
      pageSize?: number;
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<PaginatedItems<ItemDefinition>> {
    return this.client.get<PaginatedItems<ItemDefinition>>({
      url: 'item-definitions',
      query,
      options,
    });
  }

  /**
   * Retrieves an item definition by its ID or definition code
   * @summary Get item definition by ID
   * @param {string} idOrDefinitionCode The item definition ID or definition code
   * @param {Object} [query] Query parameters
   * @param {boolean} [query.noCache] Bypass server cache
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public getItemDefinitionById(
    idOrDefinitionCode: string,
    query?: {
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<ItemDefinition> {
    return this.client.get<ItemDefinition>({
      url: `item-definitions/${idOrDefinitionCode}`,
      query,
      options,
    });
  }

  /**
   * Creates a new revision of an existing item definition
   * @summary Create item definition revision
   * @param {string} definitionCode The definition code
   * @param {CreateItemDefinitionRevisionRequest} request The revision data
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public createItemDefinitionRevision(
    definitionCode: string,
    request: CreateItemDefinitionRevisionRequest,
    options?: ApiOptions,
  ): Promise<ItemDefinition> {
    return this.client.post<CreateItemDefinitionRevisionRequest, ItemDefinition>({
      url: `item-definitions/${definitionCode}/revisions`,
      data: request,
      options,
    });
  }

  /**
   * Force updates an item definition bypassing revision system
   * @summary Force update item definition
   * @param {string} id The item definition ID
   * @param {ForceUpdateItemDefinitionRequest} request The update data
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public forceUpdateItemDefinition(
    id: string,
    request: ForceUpdateItemDefinitionRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<ForceUpdateItemDefinitionRequest, void>({
      url: `item-definitions/${id}`,
      data: request,
      options,
    });
  }

  // ==================== Items ====================

  /**
   * Creates one or more items
   * @summary Create items
   * @param {CreateItemsRequest} request The items to create
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public createItems(request: CreateItemsRequest, options?: ApiOptions): Promise<void> {
    return this.client.post<CreateItemsRequest, void>({
      url: 'items',
      data: request,
      options,
    });
  }

  /**
   * Moves one or more items between locations
   * @summary Move items
   * @param {MoveItemsRequest} request The move operation data
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public moveItems(request: MoveItemsRequest, options?: ApiOptions): Promise<void> {
    return this.client.put<MoveItemsRequest, void>({
      url: 'items/locations',
      data: request,
      options,
    });
  }

  /**
   * Retrieves a paginated list of items
   * @summary Get items
   * @param {Object} [query] Query parameters
   * @param {string} [query.ids] Comma-separated item IDs
   * @param {string} [query.locationIds] Comma-separated location IDs
   * @param {string} [query.itemDefinitionIds] Comma-separated item definition IDs
   * @param {number} [query.pageIndex] Page index for pagination
   * @param {number} [query.pageSize] Number of items per page
   * @param {ApiOptions} [options] Override http request options
   * @throws {EngineError}
   */
  public getItems(
    query?: {
      ids?: string;
      locationIds?: string;
      itemDefinitionIds?: string;
      pageIndex?: number;
      pageSize?: number;
    },
    options?: ApiOptions,
  ): Promise<PaginatedItems<Item>> {
    return this.client.get<PaginatedItems<Item>>({
      url: 'items',
      query,
      options,
    });
  }
}
