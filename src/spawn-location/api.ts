import { ApiOptions, EngineClient } from '../core/engine-client';
import { CreateSpawnLocationRequest } from './models/create-spawn-location-request';
import { SpawnLocation } from './models/spawn-location';
import { UpdateSpawnLocationRequest } from './models/update-spawn-location-request';
import { UpdateSpawnLocationOrderRequest } from './models/update-spawn-location-order-request';

export class SpawnLocationApi {
  constructor(private readonly client: EngineClient) {}

  /**
   * It creates a new spawn location for use on the server.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:world<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:world<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create spawn location
   * @param {CreateSpawnLocationRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public createSpawnLocation(
    request: CreateSpawnLocationRequest,
    options?: ApiOptions,
  ): Promise<SpawnLocation> {
    return this.client.post<CreateSpawnLocationRequest, SpawnLocation>({
      url: 'spawn-locations',
      data: request,
      options,
    });
  }

  /**
   * It returns a list of spawn locations based on the provided filters. If noCache is true, it will not use the cache.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:world<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:world<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get spawn locations
   * @param {Object} [query]                   Query parameters.
   * @param {boolean} [query.enabled]          Filter by enabled status.
   * @param {boolean} [query.noCache]          If `true`, the request will not use the cache.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getSpawnLocations(
    query?: {
      enabled?: boolean;
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<SpawnLocation[]> {
    return this.client.get<SpawnLocation[]>({
      url: 'spawn-locations',
      query,
      options,
    });
  }

  /**
   * It returns a spawn location by its ID. If noCache is true, it will not use the cache.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:world<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:world<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get spawn location by ID
   * @param {string} id
   * @param {Object} [query]                   Query parameters.
   * @param {boolean} [query.noCache]          If `true`, the request will not use the cache.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getSpawnLocationById(
    id: string,
    query?: {
      noCache?: boolean;
    },
    options?: ApiOptions,
  ): Promise<SpawnLocation> {
    return this.client.get<SpawnLocation>({
      url: `spawn-locations/${id}`,
      query,
      options,
    });
  }

  /**
   * It updates an existing spawn location on the server.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:world<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:world<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update spawn location
   * @param {string} id
   * @param {UpdateSpawnLocationRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public updateSpawnLocation(
    id: string,
    request: UpdateSpawnLocationRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateSpawnLocationRequest, void>({
      url: `spawn-locations/${id}`,
      data: request,
      options,
    });
  }

  /**
   * It enables a spawn location for the server by its ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:world<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:world<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Enable spawn location
   * @param {string} id
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public enableSpawnLocation(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `spawn-locations/${id}/enabled`,
      options,
    });
  }

  /**
   * It disables a spawn location for the server by its ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:world<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:world<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Disable spawn location
   * @param {string} id
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public disableSpawnLocation(id: string, options?: ApiOptions): Promise<void> {
    return this.client.put<void, void>({
      url: `spawn-locations/${id}/disabled`,
      options,
    });
  }

  /**
   * Updates the display order of a spawn location<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:world<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:world<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update spawn location order
   * @param {string} id
   * @param {UpdateSpawnLocationOrderRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public updateSpawnLocationOrder(
    id: string,
    request: UpdateSpawnLocationOrderRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateSpawnLocationOrderRequest, void>({
      url: `spawn-locations/${id}/order`,
      data: request,
      options,
    });
  }
}