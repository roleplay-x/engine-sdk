import { ApiOptions, EngineClient } from '../core/engine-client';
import { ServerSettingsField } from './models/server-settings-field';
import { ServerSettingsRequest } from './models/server-settings-request';
import { ServerSettingsValidationResult } from './models/server-settings-validation-result';
import { ImportServerSettingsRequest } from './models/import-server-settings-request';
import { ExportServerSettingsRequest } from './models/export-server-settings-request';

export class ServerApi {
  constructor(private readonly client: EngineClient) {}

  /**
   * It retrieves a list of server settings import/export requests.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get server settings requests
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getServerSettingsRequests(options?: ApiOptions): Promise<ServerSettingsRequest[]> {
    return this.client.get<ServerSettingsRequest[]>({
      url: 'servers/settings-requests',
      options,
    });
  }

  /**
   * It retrieves available server settings fields that can be exported.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get server settings fields
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getServerSettingsFields(options?: ApiOptions): Promise<ServerSettingsField[]> {
    return this.client.get<ServerSettingsField[]>({
      url: 'servers/settings-requests/fields',
      options,
    });
  }

  /**
   * It validates server settings file format and content.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Validate server settings
   * @param {object} settings Server settings JSON data
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public validateServerSettings(
    settings: object,
    options?: ApiOptions,
  ): Promise<ServerSettingsValidationResult> {
    return this.client.post<object, ServerSettingsValidationResult>({
      url: 'servers/settings-requests/validation',
      data: settings,
      options,
    });
  }

  /**
   * It imports server settings from a file.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Import server settings
   * @param {ImportServerSettingsRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public importServerSettings(
    request: ImportServerSettingsRequest,
    options?: ApiOptions,
  ): Promise<ServerSettingsRequest> {
    return this.client.post<ImportServerSettingsRequest, ServerSettingsRequest>({
      url: 'servers/settings-requests/imports',
      data: request,
      options,
    });
  }

  /**
   * It exports server settings to a file.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Export server settings
   * @param {ExportServerSettingsRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public exportServerSettings(
    request: ExportServerSettingsRequest,
    options?: ApiOptions,
  ): Promise<ServerSettingsRequest> {
    return this.client.post<ExportServerSettingsRequest, ServerSettingsRequest>({
      url: 'servers/settings-requests/exports',
      data: request,
      options,
    });
  }
}
