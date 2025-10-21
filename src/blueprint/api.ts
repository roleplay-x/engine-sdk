import { ApiOptions, EngineClient } from '../core/engine-client';
import { BlueprintConfigSection } from './models/blueprint-config-section';
import { BlueprintConfig } from './models/blueprint-config';
import { BlueprintConfigOption } from './models/blueprint-config-option';
import { BlueprintConfigColor } from './models/blueprint-config-color';
import { CreateBlueprintConfigSectionRequest } from './models/create-blueprint-config-section-request';
import { CreateBlueprintConfigRequest } from './models/create-blueprint-config-request';
import { CreateBlueprintConfigOptionRequest } from './models/create-blueprint-config-option-request';
import { CreateBlueprintConfigColorRequest } from './models/create-blueprint-config-color-request';
import { UpdateBlueprintOrderRequest } from './models/update-blueprint-order-request';

export class BlueprintApi {
  constructor(private readonly client: EngineClient) {}

  /**
   * Retrieves all blueprint configuration sections<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get all blueprint sections
   * @param {Object} [query]                   Query parameters.
   * @param {string} [query.category]               The category filter for blueprint sections.
   * @param {boolean} [query.includeConfigs]        If `true`, includes configs in the response.
   * @param {boolean} [query.noCache]               If `true`, the request will not use the cache.
   * @param {boolean} [query.enabled]               Filter by enabled status.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getAllBlueprintSections(
    query?: { category?: string; includeConfigs?: boolean; noCache?: boolean; enabled?: boolean },
    options?: ApiOptions,
  ): Promise<ReadonlyArray<BlueprintConfigSection>> {
    return this.client.get<ReadonlyArray<BlueprintConfigSection>>({
      url: 'blueprints/sections',
      query,
      options,
    });
  }

  /**
   * Retrieves a blueprint configuration section by ID<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get blueprint section
   * @param {string} sectionId
   * @param {Object} [query]                   Query parameters.
   * @param {boolean} [query.includeSubSections]    If `true`, includes sub sections in the response.
   * @param {boolean} [query.includeConfigs]        If `true`, includes configs in the response.
   * @param {boolean} [query.noCache]               If `true`, the request will not use the cache.
   * @param {boolean} [query.enabled]               Filter by enabled status.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getBlueprintSection(
    sectionId: string,
    query?: {
      includeSubSections?: boolean;
      includeConfigs?: boolean;
      noCache?: boolean;
      enabled?: boolean;
    },
    options?: ApiOptions,
  ): Promise<BlueprintConfigSection> {
    return this.client.get<BlueprintConfigSection>({
      url: `blueprints/sections/${sectionId}`,
      query,
      options,
    });
  }

  /**
   * Creates a new blueprint configuration section<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create blueprint section
   * @param {CreateBlueprintConfigSectionRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public createBlueprintSection(
    request: CreateBlueprintConfigSectionRequest,
    options?: ApiOptions,
  ): Promise<BlueprintConfigSection> {
    return this.client.post<CreateBlueprintConfigSectionRequest, BlueprintConfigSection>({
      url: 'blueprints/sections',
      data: request,
      options,
    });
  }

  /**
   * Enables a blueprint configuration section<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Enable blueprint section
   * @param {string} sectionId
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public enableBlueprintSection(sectionId: string, options?: ApiOptions): Promise<void> {
    return this.client.put<undefined, void>({
      url: `blueprints/sections/${sectionId}/enabled`,
      options,
    });
  }

  /**
   * Disables a blueprint configuration section<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Disable blueprint section
   * @param {string} sectionId
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public disableBlueprintSection(sectionId: string, options?: ApiOptions): Promise<void> {
    return this.client.put<undefined, void>({
      url: `blueprints/sections/${sectionId}/disabled`,
      options,
    });
  }

  /**
   * Updates the order of a blueprint configuration section<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update blueprint section order
   * @param {string} sectionId
   * @param {UpdateBlueprintOrderRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public updateBlueprintSectionOrder(
    sectionId: string,
    request: UpdateBlueprintOrderRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateBlueprintOrderRequest, void>({
      url: `blueprints/sections/${sectionId}/order`,
      data: request,
      options,
    });
  }

  /**
   * Retrieves a blueprint configuration by ID<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get blueprint config
   * @param {string} configId
   * @param {Object} [query]                   Query parameters.
   * @param {boolean} [query.includeOptions]        If `true`, includes options in the response.
   * @param {boolean} [query.noCache]               If `true`, the request will not use the cache.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getBlueprintConfig(
    configId: string,
    query?: { includeOptions?: boolean; noCache?: boolean },
    options?: ApiOptions,
  ): Promise<BlueprintConfig> {
    return this.client.get<BlueprintConfig>({
      url: `blueprints/configs/${configId}`,
      query,
      options,
    });
  }

  /**
   * Creates a new blueprint configuration<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create blueprint config
   * @param {string} sectionId
   * @param {CreateBlueprintConfigRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public createBlueprintConfig(
    sectionId: string,
    request: CreateBlueprintConfigRequest,
    options?: ApiOptions,
  ): Promise<BlueprintConfig> {
    return this.client.post<CreateBlueprintConfigRequest, BlueprintConfig>({
      url: `blueprints/sections/${sectionId}/configs`,
      data: request,
      options,
    });
  }

  /**
   * Enables a blueprint configuration<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Enable blueprint config
   * @param {string} configId
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public enableBlueprintConfig(configId: string, options?: ApiOptions): Promise<void> {
    return this.client.put<undefined, void>({
      url: `blueprints/configs/${configId}/enabled`,
      options,
    });
  }

  /**
   * Disables a blueprint configuration<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Disable blueprint config
   * @param {string} configId
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public disableBlueprintConfig(configId: string, options?: ApiOptions): Promise<void> {
    return this.client.put<undefined, void>({
      url: `blueprints/configs/${configId}/disabled`,
      options,
    });
  }

  /**
   * Updates the order of a blueprint configuration<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update blueprint config order
   * @param {string} configId
   * @param {UpdateBlueprintOrderRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public updateBlueprintConfigOrder(
    configId: string,
    request: UpdateBlueprintOrderRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateBlueprintOrderRequest, void>({
      url: `blueprints/configs/${configId}/order`,
      data: request,
      options,
    });
  }

  /**
   * Retrieves a blueprint configuration option by ID<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get blueprint config option
   * @param {string} optionId
   * @param {Object} [query]                   Query parameters.
   * @param {boolean} [query.noCache]               If `true`, the request will not use the cache.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getBlueprintConfigOption(
    optionId: string,
    query?: { noCache?: boolean },
    options?: ApiOptions,
  ): Promise<BlueprintConfigOption> {
    return this.client.get<BlueprintConfigOption>({
      url: `blueprints/configs/options/${optionId}`,
      query,
      options,
    });
  }

  /**
   * Creates a new blueprint configuration option<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create blueprint config option
   * @param {string} configId
   * @param {CreateBlueprintConfigOptionRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public createBlueprintConfigOption(
    configId: string,
    request: CreateBlueprintConfigOptionRequest,
    options?: ApiOptions,
  ): Promise<BlueprintConfigOption> {
    return this.client.post<CreateBlueprintConfigOptionRequest, BlueprintConfigOption>({
      url: `blueprints/configs/${configId}/options`,
      data: request,
      options,
    });
  }

  /**
   * Enables a blueprint configuration option<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Enable blueprint config option
   * @param {string} optionId
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public enableBlueprintConfigOption(optionId: string, options?: ApiOptions): Promise<void> {
    return this.client.put<undefined, void>({
      url: `blueprints/configs/options/${optionId}/enabled`,
      options,
    });
  }

  /**
   * Disables a blueprint configuration option<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Disable blueprint config option
   * @param {string} optionId
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public disableBlueprintConfigOption(optionId: string, options?: ApiOptions): Promise<void> {
    return this.client.put<undefined, void>({
      url: `blueprints/configs/options/${optionId}/disabled`,
      options,
    });
  }

  /**
   * Updates the order of a blueprint configuration option<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update blueprint config option order
   * @param {string} optionId
   * @param {UpdateBlueprintOrderRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public updateBlueprintConfigOptionOrder(
    optionId: string,
    request: UpdateBlueprintOrderRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateBlueprintOrderRequest, void>({
      url: `blueprints/configs/options/${optionId}/order`,
      data: request,
      options,
    });
  }

  /**
   * Retrieves a blueprint configuration color by ID<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get blueprint config color
   * @param {string} colorId
   * @param {Object} [query]                   Query parameters.
   * @param {boolean} [query.noCache]               If `true`, the request will not use the cache.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getBlueprintConfigColor(
    colorId: string,
    query?: { noCache?: boolean },
    options?: ApiOptions,
  ): Promise<BlueprintConfigColor> {
    return this.client.get<BlueprintConfigColor>({
      url: `blueprints/configs/colors/${colorId}`,
      query,
      options,
    });
  }

  /**
   * Creates a new blueprint configuration color<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create blueprint config color
   * @param {string} configId
   * @param {CreateBlueprintConfigColorRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public createBlueprintConfigColor(
    configId: string,
    request: CreateBlueprintConfigColorRequest,
    options?: ApiOptions,
  ): Promise<BlueprintConfigColor> {
    return this.client.post<CreateBlueprintConfigColorRequest, BlueprintConfigColor>({
      url: `blueprints/configs/${configId}/colors`,
      data: request,
      options,
    });
  }

  /**
   * Enables a blueprint configuration color<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Enable blueprint config color
   * @param {string} colorId
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public enableBlueprintConfigColor(colorId: string, options?: ApiOptions): Promise<void> {
    return this.client.put<undefined, void>({
      url: `blueprints/configs/colors/${colorId}/enabled`,
      options,
    });
  }

  /**
   * Disables a blueprint configuration color<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Disable blueprint config color
   * @param {string} colorId
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public disableBlueprintConfigColor(colorId: string, options?: ApiOptions): Promise<void> {
    return this.client.put<undefined, void>({
      url: `blueprints/configs/colors/${colorId}/disabled`,
      options,
    });
  }

  /**
   * Updates the order of a blueprint configuration color<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update blueprint config color order
   * @param {string} colorId
   * @param {UpdateBlueprintOrderRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public updateBlueprintConfigColorOrder(
    colorId: string,
    request: UpdateBlueprintOrderRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateBlueprintOrderRequest, void>({
      url: `blueprints/configs/colors/${colorId}/order`,
      data: request,
      options,
    });
  }
}
