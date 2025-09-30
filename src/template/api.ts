import { ApiOptions, EngineClient } from '../core/engine-client';
import { ServerTemplate } from './models/server-template';
import { SetCategoryTemplateIdRequest } from './models/set-category-template-id-request';
import { TemplateCategory } from './models/template-category';

export class TemplateApi {
  constructor(private readonly client: EngineClient) {}

  /**
   * It returns a list of templates. If noCache is true, it will not use the cache.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get templates
   * @param {Object} [query]                   Query parameters.
   * @param {boolean} [query.noCache]               If `true`, the request will not use the cache.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getTemplates(
    query: { noCache?: boolean },
    options?: ApiOptions,
  ): Promise<ReadonlyArray<ServerTemplate>> {
    return this.client.get<ReadonlyArray<ServerTemplate>>({
      url: 'templates',
      query,
      options,
    });
  }

  /**
   * It returns a template by its ID. If noCache is true, it will not use the cache.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get template by ID
   * @param {string} id
   * @param {Object} [query]                   Query parameters.
   * @param {boolean} [query.noCache]               If `true`, the request will not use the cache.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getTemplateById(
    id: string,
    query: { noCache?: boolean },
    options?: ApiOptions,
  ): Promise<ServerTemplate> {
    return this.client.get<ServerTemplate>({
      url: `templates/${id}`,
      query,
      options,
    });
  }

  /**
   * It sets the template ID for the given category ID.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Set category template ID
   * @param {string} category
   * @param {string} templateId
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public setCategoryTemplateId(
    category: string,
    templateId: string,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<SetCategoryTemplateIdRequest, void>({
      url: `templates`,
      data: { category, templateId },
      options,
    });
  }

  /**
   * It returns a list of template categories.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:read:configuration<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: read:configuration<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get template categories
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getTemplateCategories(options?: ApiOptions): Promise<ReadonlyArray<TemplateCategory>> {
    return this.client.get<ReadonlyArray<TemplateCategory>>({
      url: 'templates/categories',
      options,
    });
  }
}
