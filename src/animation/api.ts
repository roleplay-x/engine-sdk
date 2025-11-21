import { ApiOptions, EngineClient } from '../core/engine-client';
import { PaginatedItems } from '../common/paginated-items';
import { PaginationQuery } from '../common/pagination-query';
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

export class AnimationApi {
  constructor(private readonly client: EngineClient) {}

  /**
   * Creates a new animation.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create animation
   * @param {CreateAnimationRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public createAnimation(
    request: CreateAnimationRequest,
    options?: ApiOptions,
  ): Promise<Animation> {
    return this.client.post<CreateAnimationRequest, Animation>({
      url: 'animations',
      data: request,
      options,
    });
  }

  /**
   * It returns a paginated list of animations based on the provided filters.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key]<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get animations
   * @param {Object} [query] Query parameters
   * @param {string} [query.animationCategoryId] Filter by animation category ID.
   * @param {string} [query.keyIn] Filter by animation keys (comma-separated).
   * @param {boolean} [query.enabled] Filter by enabled status.
   * @param {boolean} [query.noCache] Bypass cache.
   * @param {number} [query.pageIndex] Page index for pagination.
   * @param {number} [query.pageSize] Page size for pagination.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getAnimations(
    query?: {
      animationCategoryId?: string;
      keyIn?: string;
      enabled?: boolean;
      noCache?: boolean;
    } & PaginationQuery,
    options?: ApiOptions,
  ): Promise<PaginatedItems<Animation>> {
    return this.client.get<PaginatedItems<Animation>>({
      url: 'animations',
      query,
      options,
    });
  }

  /**
   * It returns an animation by its ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key]<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get animation by ID
   * @param {string} id Animation ID
   * @param {Object} [query] Query parameters
   * @param {boolean} [query.noCache] Bypass cache.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getAnimationById(
    id: string,
    query?: { noCache?: boolean },
    options?: ApiOptions,
  ): Promise<Animation> {
    return this.client.get<Animation>({
      url: `animations/${id}`,
      query,
      options,
    });
  }

  /**
   * Updates an existing animation.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update animation
   * @param {string} id Animation ID
   * @param {UpdateAnimationRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public updateAnimation(
    id: string,
    request: UpdateAnimationRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateAnimationRequest, void>({
      url: `animations/${id}`,
      data: request,
      options,
    });
  }

  /**
   * Enables an animation.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Enable animation
   * @param {string} id Animation ID
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public enableAnimation(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `animations/${id}/enabled`,
      data: undefined,
      options,
    });
  }

  /**
   * Disables an animation.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Disable animation
   * @param {string} id Animation ID
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public disableAnimation(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `animations/${id}/disabled`,
      data: undefined,
      options,
    });
  }

  /**
   * Updates the order of an animation.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update animation order
   * @param {string} id Animation ID
   * @param {UpdateAnimationOrderRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public updateAnimationOrder(
    id: string,
    request: UpdateAnimationOrderRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateAnimationOrderRequest, void>({
      url: `animations/${id}/order`,
      data: request,
      options,
    });
  }

  /**
   * Creates a new animation category.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create animation category
   * @param {CreateAnimationCategoryRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public createAnimationCategory(
    request: CreateAnimationCategoryRequest,
    options?: ApiOptions,
  ): Promise<AnimationCategory> {
    return this.client.post<CreateAnimationCategoryRequest, AnimationCategory>({
      url: 'animation-categories',
      data: request,
      options,
    });
  }

  /**
   * It returns a list of animation categories.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key]<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get animation categories
   * @param {Object} [query] Query parameters
   * @param {boolean} [query.isDefault] Filter by default status.
   * @param {boolean} [query.noCache] Bypass cache.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getAnimationCategories(
    query?: { isDefault?: boolean; noCache?: boolean },
    options?: ApiOptions,
  ): Promise<AnimationCategory[]> {
    return this.client.get<AnimationCategory[]>({
      url: 'animation-categories',
      query,
      options,
    });
  }

  /**
   * It returns an animation category by its ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key]<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get animation category by ID
   * @param {string} id Animation category ID
   * @param {Object} [query] Query parameters
   * @param {boolean} [query.noCache] Bypass cache.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getAnimationCategoryById(
    id: string,
    query?: { noCache?: boolean },
    options?: ApiOptions,
  ): Promise<AnimationCategory> {
    return this.client.get<AnimationCategory>({
      url: `animation-categories/${id}`,
      query,
      options,
    });
  }

  /**
   * Updates an existing animation category.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update animation category
   * @param {string} id Animation category ID
   * @param {UpdateAnimationCategoryRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public updateAnimationCategory(
    id: string,
    request: UpdateAnimationCategoryRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateAnimationCategoryRequest, void>({
      url: `animation-categories/${id}`,
      data: request,
      options,
    });
  }

  /**
   * Enables an animation category.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Enable animation category
   * @param {string} id Animation category ID
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public enableAnimationCategory(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `animation-categories/${id}/enabled`,
      options,
    });
  }

  /**
   * Disables an animation category.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Disable animation category
   * @param {string} id Animation category ID
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public disableAnimationCategory(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `animation-categories/${id}/disabled`,
      options,
    });
  }

  /**
   * Updates the order of an animation category.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update animation category order
   * @param {string} id Animation category ID
   * @param {UpdateAnimationOrderRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public updateAnimationCategoryOrder(
    id: string,
    request: UpdateAnimationOrderRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateAnimationOrderRequest, void>({
      url: `animation-categories/${id}/order`,
      data: request,
      options,
    });
  }

  /**
   * Creates a new animation pack.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create animation pack
   * @param {CreateAnimationPackRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public createAnimationPack(
    request: CreateAnimationPackRequest,
    options?: ApiOptions,
  ): Promise<AnimationPack> {
    return this.client.post<CreateAnimationPackRequest, AnimationPack>({
      url: 'animation-packs',
      data: request,
      options,
    });
  }

  /**
   * It returns a paginated list of animation packs based on the provided filters.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key]<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get animation packs
   * @param {Object} [query] Query parameters
   * @param {string} [query.name] Filter by pack name.
   * @param {boolean} [query.includeItems] Include pack items in response.
   * @param {number} [query.pageIndex] Page index for pagination.
   * @param {number} [query.pageSize] Page size for pagination.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getAnimationPacks(
    query?: {
      name?: string;
      includeItems?: boolean;
    } & PaginationQuery,
    options?: ApiOptions,
  ): Promise<PaginatedItems<AnimationPack>> {
    return this.client.get<PaginatedItems<AnimationPack>>({
      url: 'animation-packs',
      query,
      options,
    });
  }

  /**
   * It returns an animation pack by its ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key]<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get animation pack by ID
   * @param {string} id Animation pack ID
   * @param {Object} [query] Query parameters
   * @param {boolean} [query.includeItems] Include pack items in response.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getAnimationPackById(
    id: string,
    query?: { includeItems?: boolean },
    options?: ApiOptions,
  ): Promise<AnimationPack> {
    return this.client.get<AnimationPack>({
      url: `animation-packs/${id}`,
      query,
      options,
    });
  }

  /**
   * Updates an existing animation pack.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update animation pack
   * @param {string} id Animation pack ID
   * @param {UpdateAnimationPackRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public updateAnimationPack(
    id: string,
    request: UpdateAnimationPackRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateAnimationPackRequest, void>({
      url: `animation-packs/${id}`,
      data: request,
      options,
    });
  }

  /**
   * Creates a new animation pack item.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create animation pack item
   * @param {CreateAnimationPackItemRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public createAnimationPackItem(
    request: CreateAnimationPackItemRequest,
    options?: ApiOptions,
  ): Promise<AnimationPackItem> {
    return this.client.post<CreateAnimationPackItemRequest, AnimationPackItem>({
      url: 'animation-pack-items',
      data: request,
      options,
    });
  }

  /**
   * It returns a paginated list of animation pack items based on the provided filters.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key]<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get animation pack items
   * @param {Object} [query] Query parameters
   * @param {string} [query.animationPackId] Filter by animation pack ID.
   * @param {string} [query.name] Filter by item name.
   * @param {number} [query.pageIndex] Page index for pagination.
   * @param {number} [query.pageSize] Page size for pagination.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getAnimationPackItems(
    query?: {
      animationPackId?: string;
      name?: string;
    } & PaginationQuery,
    options?: ApiOptions,
  ): Promise<PaginatedItems<AnimationPackItem>> {
    return this.client.get<PaginatedItems<AnimationPackItem>>({
      url: 'animation-pack-items',
      query,
      options,
    });
  }

  /**
   * It returns an animation pack item by its ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key]<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get animation pack item by ID
   * @param {string} id Animation pack item ID
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getAnimationPackItemById(id: string, options?: ApiOptions): Promise<AnimationPackItem> {
    return this.client.get<AnimationPackItem>({
      url: `animation-pack-items/${id}`,
      options,
    });
  }

  /**
   * Updates an existing animation pack item.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update animation pack item
   * @param {string} id Animation pack item ID
   * @param {UpdateAnimationPackItemRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public updateAnimationPackItem(
    id: string,
    request: UpdateAnimationPackItemRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateAnimationPackItemRequest, void>({
      url: `animation-pack-items/${id}`,
      data: request,
      options,
    });
  }
}
