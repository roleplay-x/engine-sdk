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
   * Creates a new item category with the provided configuration.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create item category
   * @param {CreateItemCategoryRequest} request The item category configuration to create.
   * @param {ApiOptions} [options] Override http request options.
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
   * Returns a paginated list of item categories based on the provided filters.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get item categories
   * @param {Object} [query]                   Query parameters.
   * @param {string} [query.parentId]          Filter by parent category ID.
   * @param {boolean} [query.enabled]          Filter by enabled status.
   * @param {number} [query.pageIndex]         Page index for pagination (1-based).
   * @param {number} [query.pageSize]          Number of items per page.
   * @param {boolean} [query.noCache]          If `true`, bypass server cache and fetch fresh data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Returns the item category with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get item category by ID
   * @param {string} id                        The item category ID.
   * @param {Object} [query]                   Query parameters.
   * @param {boolean} [query.noCache]          If `true`, bypass server cache and fetch fresh data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Updates the item category with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update item category
   * @param {string} id                        The item category ID.
   * @param {UpdateItemCategoryRequest} request The update data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Enables the item category with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Enable item category
   * @param {string} id                        The item category ID.
   * @param {ApiOptions} [options] Override http request options.
   * @throws {EngineError}
   */
  public enableItemCategory(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `item-categories/${id}/enabled`,
      options,
    });
  }

  /**
   * Disables the item category with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Disable item category
   * @param {string} id                        The item category ID.
   * @param {ApiOptions} [options] Override http request options.
   * @throws {EngineError}
   */
  public disableItemCategory(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `item-categories/${id}/disabled`,
      options,
    });
  }

  /**
   * Updates the display order of the item category with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update item category order
   * @param {string} id                        The item category ID.
   * @param {UpdateEntityOrderRequest} request The order update data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Creates a new ammo type with the provided configuration.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create ammo type
   * @param {CreateAmmoTypeRequest} request    The ammo type configuration to create.
   * @param {ApiOptions} [options] Override http request options.
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
   * Returns a list of ammo types based on the provided filters.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get ammo types
   * @param {Object} [query]                   Query parameters.
   * @param {boolean} [query.enabled]          Filter by enabled status.
   * @param {boolean} [query.noCache]          If `true`, bypass server cache and fetch fresh data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Returns the ammo type with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get ammo type by ID
   * @param {string} id                        The ammo type ID.
   * @param {Object} [query]                   Query parameters.
   * @param {boolean} [query.noCache]          If `true`, bypass server cache and fetch fresh data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Enables the ammo type with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Enable ammo type
   * @param {string} id                        The ammo type ID.
   * @param {ApiOptions} [options] Override http request options.
   * @throws {EngineError}
   */
  public enableAmmoType(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `ammo-types/${id}/enabled`,
      options,
    });
  }

  /**
   * Disables the ammo type with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Disable ammo type
   * @param {string} id                        The ammo type ID.
   * @param {ApiOptions} [options] Override http request options.
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
   * Creates a new attachment point with the provided configuration.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create attachment point
   * @param {CreateAttachmentPointRequest} request The attachment point configuration to create.
   * @param {ApiOptions} [options] Override http request options.
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
   * Returns a list of attachment points based on the provided filters.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get attachment points
   * @param {Object} [query]                   Query parameters.
   * @param {boolean} [query.enabled]          Filter by enabled status.
   * @param {boolean} [query.noCache]          If `true`, bypass server cache and fetch fresh data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Returns the attachment point with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get attachment point by ID
   * @param {string} id                        The attachment point ID.
   * @param {Object} [query]                   Query parameters.
   * @param {boolean} [query.noCache]          If `true`, bypass server cache and fetch fresh data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Enables the attachment point with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Enable attachment point
   * @param {string} id                        The attachment point ID.
   * @param {ApiOptions} [options] Override http request options.
   * @throws {EngineError}
   */
  public enableAttachmentPoint(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `attachment-points/${id}/enabled`,
      options,
    });
  }

  /**
   * Disables the attachment point with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Disable attachment point
   * @param {string} id                        The attachment point ID.
   * @param {ApiOptions} [options] Override http request options.
   * @throws {EngineError}
   */
  public disableAttachmentPoint(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `attachment-points/${id}/disabled`,
      options,
    });
  }

  /**
   * Updates the display order of the attachment point with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update attachment point order
   * @param {string} id                        The attachment point ID.
   * @param {UpdateEntityOrderRequest} request The order update data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Creates a new equipment slot with the provided configuration.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create equipment slot
   * @param {CreateEquipmentSlotRequest} request The equipment slot configuration to create.
   * @param {ApiOptions} [options] Override http request options.
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
   * Returns a list of equipment slots based on the provided filters.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get equipment slots
   * @param {Object} [query]                   Query parameters.
   * @param {boolean} [query.enabled]          Filter by enabled status.
   * @param {boolean} [query.noCache]          If `true`, bypass server cache and fetch fresh data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Returns the equipment slot with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get equipment slot by ID
   * @param {string} id                        The equipment slot ID.
   * @param {Object} [query]                   Query parameters.
   * @param {boolean} [query.noCache]          If `true`, bypass server cache and fetch fresh data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Partially updates the equipment slot with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Patch equipment slot
   * @param {string} id                        The equipment slot ID.
   * @param {PatchEquipmentSlotRequest} request The patch data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Enables the equipment slot with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Enable equipment slot
   * @param {string} id                        The equipment slot ID.
   * @param {ApiOptions} [options] Override http request options.
   * @throws {EngineError}
   */
  public enableEquipmentSlot(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `equipment-slots/${id}/enabled`,
      options,
    });
  }

  /**
   * Disables the equipment slot with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Disable equipment slot
   * @param {string} id                        The equipment slot ID.
   * @param {ApiOptions} [options] Override http request options.
   * @throws {EngineError}
   */
  public disableEquipmentSlot(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `equipment-slots/${id}/disabled`,
      options,
    });
  }

  /**
   * Updates the display order of the equipment slot with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update equipment slot order
   * @param {string} id                        The equipment slot ID.
   * @param {UpdateEntityOrderRequest} request The order update data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Creates a new material type with the provided configuration.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create material type
   * @param {CreateMaterialTypeRequest} request The material type configuration to create.
   * @param {ApiOptions} [options] Override http request options.
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
   * Returns a paginated list of material types based on the provided filters.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get material types
   * @param {Object} [query]                   Query parameters.
   * @param {string} [query.parentId]          Filter by parent material type ID.
   * @param {string} [query.baseUnit]          Filter by base unit.
   * @param {boolean} [query.enabled]          Filter by enabled status.
   * @param {number} [query.pageIndex]         Page index for pagination (1-based).
   * @param {number} [query.pageSize]          Number of items per page.
   * @param {boolean} [query.noCache]          If `true`, bypass server cache and fetch fresh data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Returns the material type with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get material type by ID
   * @param {string} id                        The material type ID.
   * @param {Object} [query]                   Query parameters.
   * @param {boolean} [query.noCache]          If `true`, bypass server cache and fetch fresh data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Updates the material type with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update material type
   * @param {string} id                        The material type ID.
   * @param {UpdateMaterialTypeRequest} request The update data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Enables the material type with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Enable material type
   * @param {string} id                        The material type ID.
   * @param {ApiOptions} [options] Override http request options.
   * @throws {EngineError}
   */
  public enableMaterialType(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `material-types/${id}/enabled`,
      options,
    });
  }

  /**
   * Disables the material type with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Disable material type
   * @param {string} id                        The material type ID.
   * @param {ApiOptions} [options] Override http request options.
   * @throws {EngineError}
   */
  public disableMaterialType(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `material-types/${id}/disabled`,
      options,
    });
  }

  /**
   * Updates the display order of the material type with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update material type order
   * @param {string} id                        The material type ID.
   * @param {UpdateEntityOrderRequest} request The order update data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Creates a new effect type with the provided configuration.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create effect type
   * @param {CreateEffectTypeRequest} request  The effect type configuration to create.
   * @param {ApiOptions} [options] Override http request options.
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
   * Returns a list of effect types based on the provided filters.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get effect types
   * @param {Object} [query]                   Query parameters.
   * @param {string} [query.target]            Filter by target type.
   * @param {boolean} [query.enabled]          Filter by enabled status.
   * @param {boolean} [query.noCache]          If `true`, bypass server cache and fetch fresh data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Returns the effect type with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get effect type by ID
   * @param {string} id                        The effect type ID.
   * @param {Object} [query]                   Query parameters.
   * @param {boolean} [query.noCache]          If `true`, bypass server cache and fetch fresh data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Updates the effect type with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update effect type
   * @param {string} id                        The effect type ID.
   * @param {UpdateEffectTypeRequest} request  The update data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Enables the effect type with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Enable effect type
   * @param {string} id                        The effect type ID.
   * @param {ApiOptions} [options] Override http request options.
   * @throws {EngineError}
   */
  public enableEffectType(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `effect-types/${id}/enabled`,
      options,
    });
  }

  /**
   * Disables the effect type with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Disable effect type
   * @param {string} id                        The effect type ID.
   * @param {ApiOptions} [options] Override http request options.
   * @throws {EngineError}
   */
  public disableEffectType(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `effect-types/${id}/disabled`,
      options,
    });
  }

  /**
   * Updates the display order of the effect type with the specified ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update effect type order
   * @param {string} id                        The effect type ID.
   * @param {UpdateEntityOrderRequest} request The order update data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Creates a new item definition with the provided configuration.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create item definition
   * @param {CreateItemDefinitionRequest} request The item definition configuration to create.
   * @param {ApiOptions} [options] Override http request options.
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
   * Returns a paginated list of item definitions based on the provided filters.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get item definitions
   * @param {Object} [query]                            Query parameters.
   * @param {string} [query.definitionCode]             Filter by definition code.
   * @param {string} [query.materialTypeId]             Filter by material type ID.
   * @param {string} [query.categoryPath]               Filter by category path.
   * @param {string} [query.ownerCategoryReferenceId]   Filter by owner category reference ID.
   * @param {boolean} [query.latestRevisionOnly]        If `true`, return only latest revisions.
   * @param {number} [query.pageIndex]                  Page index for pagination (1-based).
   * @param {number} [query.pageSize]                   Number of items per page.
   * @param {boolean} [query.noCache]                   If `true`, bypass server cache and fetch fresh data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Returns the item definition with the specified ID or definition code.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get item definition by ID or definition code
   * @param {string} idOrDefinitionCode        The item definition ID or definition code.
   * @param {Object} [query]                   Query parameters.
   * @param {boolean} [query.noCache]          If `true`, bypass server cache and fetch fresh data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Creates a new revision of an existing item definition with the provided configuration.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create a new revision of an item definition
   * @param {string} definitionCode            The definition code.
   * @param {CreateItemDefinitionRevisionRequest} request The revision configuration to create.
   * @param {ApiOptions} [options] Override http request options.
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
   * Force updates the item definition with the specified ID, bypassing revision system.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Force update item definition
   * @param {string} id                        The item definition ID.
   * @param {ForceUpdateItemDefinitionRequest} request The update data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Creates one or more items at the specified target location.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create items
   * @param {CreateItemsRequest} request       The items configuration to create.
   * @param {ApiOptions} [options] Override http request options.
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
   * Moves one or more items between locations.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Move items
   * @param {MoveItemsRequest} request         The move operation data.
   * @param {ApiOptions} [options] Override http request options.
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
   * Returns a paginated list of items based on the provided filters.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:inventory<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:inventory<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get items
   * @param {Object} [query]                   Query parameters.
   * @param {string} [query.ids]               Comma-separated item IDs.
   * @param {string} [query.locationIds]       Comma-separated location IDs.
   * @param {string} [query.itemDefinitionIds] Comma-separated item definition IDs.
   * @param {number} [query.pageIndex]         Page index for pagination (1-based).
   * @param {number} [query.pageSize]          Number of items per page.
   * @param {ApiOptions} [options] Override http request options.
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
