import nock from 'nock';
import { EngineClient } from '../core/engine-client';
import { TemplateApi } from './api';
import { ServerTemplate } from './models/server-template';
import { ServerTemplateCategory } from './models/server-template-category';
import { ServerTemplateConfiguration } from './models/server-template-configuration';
import { ApiKeyAuthorization } from '../auth/api-key-authorization';
import { withCommonHeaders } from '../../test/utils/nock-helpers';
import { TemplateCategoryId } from './models/template-category-id';
import { ConfigType } from '../configuration/models/config-types';
import { TemplateCategory } from './models/template-category';

describe('TemplateApi', () => {
  const apiUrl = 'http://mock-api';
  const serverId = 'serverId';
  const applicationName = 'app';
  const locale = 'en-US';
  const auth = new ApiKeyAuthorization('apiKeyId', 'apiKeySecret');
  const authorizationToken = auth.getAuthorizationToken();

  let client: EngineClient;
  let api: TemplateApi;
  let baseScope: nock.Scope;

  beforeAll(() => {
    client = new EngineClient({ apiUrl, applicationName, serverId, locale }, auth);
    api = new TemplateApi(client);
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

  const mockConfiguration: ServerTemplateConfiguration = {
    key: 'config-key-1',
    templateKey: 'template-config-1',
    type: ConfigType.String,
    name: 'Configuration Name',
    description: 'Configuration description',
    value: 'default-value',
    customGroup: 'general',
  };

  const mockCategory: ServerTemplateCategory = {
    id: TemplateCategoryId.Login,
    name: 'Login',
    configuration: [mockConfiguration],
    isActive: true,
  };

  const mockTemplates: ReadonlyArray<ServerTemplate> = [
    {
      id: 'template-1',
      name: 'A Template',
      minorVersion: '1.2',
      fullVersion: '1.2.3',
      categories: [mockCategory],
    },
    {
      id: 'template-2',
      name: 'B Template',
      minorVersion: '2.0',
      fullVersion: '2.0.1',
      categories: [],
    },
  ];

  describe('getTemplates()', () => {
    it('should fetch templates without cache', async () => {
      baseScope.get('/templates').query({ noCache: 'true' }).reply(200, mockTemplates);

      const result = await api.getTemplates({ noCache: true });

      expect(result).toEqual(mockTemplates);
    });

    it('should fetch templates with cache (noCache false)', async () => {
      baseScope.get('/templates').query({ noCache: 'false' }).reply(200, mockTemplates);

      const result = await api.getTemplates({ noCache: false });

      expect(result).toEqual(mockTemplates);
    });

    it('should fetch templates without query parameters', async () => {
      baseScope.get('/templates').reply(200, mockTemplates);

      const result = await api.getTemplates({});

      expect(result).toEqual(mockTemplates);
    });

    it('should pass options parameter correctly', async () => {
      baseScope.get('/templates').query({ noCache: 'true' }).reply(200, mockTemplates);

      const result = await api.getTemplates({ noCache: true });

      expect(result).toEqual(mockTemplates);
    });

    it('should handle empty template list', async () => {
      const emptyTemplates: ReadonlyArray<ServerTemplate> = [];
      baseScope.get('/templates').reply(200, emptyTemplates);

      const result = await api.getTemplates({});

      expect(result).toEqual(emptyTemplates);
    });

    it('should handle templates with multiple categories', async () => {
      const anotherCategory: ServerTemplateCategory = {
        id: TemplateCategoryId.Toaster,
        name: 'Toaster',
        configuration: [
          {
            key: 'config-key-2',
            templateKey: 'template-config-2',
            type: ConfigType.Int32,
            name: 'Radius',
            value: 100,
            customGroup: 'advanced',
          },
        ],
        isActive: true,
      };

      const templatesWithMultipleCategories: ReadonlyArray<ServerTemplate> = [
        {
          id: 'template-3',
          name: 'Complex Template',
          minorVersion: '3.0',
          fullVersion: '3.0.0',
          categories: [mockCategory, anotherCategory],
        },
      ];

      baseScope.get('/templates').reply(200, templatesWithMultipleCategories);

      const result = await api.getTemplates({});

      expect(result).toEqual(templatesWithMultipleCategories);
    });
  });

  describe('getTemplateById()', () => {
    const templateId = 'template-1';
    const mockTemplate: ServerTemplate = mockTemplates[0];

    it('should fetch template by id without cache', async () => {
      baseScope.get(`/templates/${templateId}`).query({ noCache: 'true' }).reply(200, mockTemplate);

      const result = await api.getTemplateById(templateId, { noCache: true });

      expect(result).toEqual(mockTemplate);
    });

    it('should fetch template by id with cache (noCache false)', async () => {
      baseScope
        .get(`/templates/${templateId}`)
        .query({ noCache: 'false' })
        .reply(200, mockTemplate);

      const result = await api.getTemplateById(templateId, { noCache: false });

      expect(result).toEqual(mockTemplate);
    });

    it('should fetch template by id without query parameters', async () => {
      baseScope.get(`/templates/${templateId}`).reply(200, mockTemplate);

      const result = await api.getTemplateById(templateId, {});

      expect(result).toEqual(mockTemplate);
    });

    it('should pass options parameter correctly', async () => {
      baseScope.get(`/templates/${templateId}`).query({ noCache: 'true' }).reply(200, mockTemplate);

      const result = await api.getTemplateById(templateId, { noCache: true });

      expect(result).toEqual(mockTemplate);
    });

    it('should handle template with no categories', async () => {
      const templateWithNoCategories: ServerTemplate = mockTemplates[1];
      const templateId2 = 'template-2';

      baseScope.get(`/templates/${templateId2}`).reply(200, templateWithNoCategories);

      const result = await api.getTemplateById(templateId2, {});

      expect(result).toEqual(templateWithNoCategories);
    });

    it('should handle template with multiple categories', async () => {
      const anotherCategory: ServerTemplateCategory = {
        id: TemplateCategoryId.Toaster,
        name: 'Toaster',
        configuration: [
          {
            key: 'config-key-2',
            templateKey: 'template-config-2',
            type: ConfigType.Int32,
            name: 'Radius',
            value: 100,
            customGroup: 'advanced',
          },
        ],
        isActive: true,
      };

      const templateWithMultipleCategories: ServerTemplate = {
        id: 'template-3',
        name: 'Complex Template',
        minorVersion: '3.0',
        fullVersion: '3.0.0',
        categories: [mockCategory, anotherCategory],
      };

      baseScope.get('/templates/template-3').reply(200, templateWithMultipleCategories);

      const result = await api.getTemplateById('template-3', {});

      expect(result).toEqual(templateWithMultipleCategories);
    });
  });

  describe('setCategoryTemplateId()', () => {
    it('should set category template id', async () => {
      const category = 'login';
      const templateId = 'template-1';

      baseScope
        .put('/templates', (body) => {
          expect(body).toEqual({ category, templateId });
          return true;
        })
        .reply(204);

      await api.setCategoryTemplateId(category, templateId);
    });

    it('should pass options parameter correctly', async () => {
      const category = 'toaster';
      const templateId = 'template-2';

      baseScope
        .put('/templates', (body) => {
          expect(body).toEqual({ category, templateId });
          return true;
        })
        .reply(204);

      await api.setCategoryTemplateId(category, templateId, {});
    });

    it('should handle different category values', async () => {
      const category = 'custom-category';
      const templateId = 'template-3';

      baseScope
        .put('/templates', (body) => {
          expect(body).toEqual({ category, templateId });
          return true;
        })
        .reply(204);

      await api.setCategoryTemplateId(category, templateId);
    });
  });

  describe('getTemplateCategories()', () => {
    const mockCategories: ReadonlyArray<TemplateCategory> = [
      {
        id: 'LOGIN',
        name: 'Login',
      },
      {
        id: 'TOASTER',
        name: 'Toaster (Notifications)',
      },
    ];

    it('should fetch template categories', async () => {
      baseScope.get('/templates/categories').reply(200, mockCategories);

      const result = await api.getTemplateCategories();

      expect(result).toEqual(mockCategories);
    });

    it('should pass options parameter correctly', async () => {
      baseScope.get('/templates/categories').reply(200, mockCategories);

      const result = await api.getTemplateCategories({});

      expect(result).toEqual(mockCategories);
    });

    it('should handle empty categories list', async () => {
      const emptyCategories: ReadonlyArray<TemplateCategory> = [];
      baseScope.get('/templates/categories').reply(200, emptyCategories);

      const result = await api.getTemplateCategories();

      expect(result).toEqual(emptyCategories);
    });

    it('should handle single category', async () => {
      const singleCategory: ReadonlyArray<TemplateCategory> = [
        {
          id: 'LOGIN',
          name: 'Login',
        },
      ];

      baseScope.get('/templates/categories').reply(200, singleCategory);

      const result = await api.getTemplateCategories();

      expect(result).toEqual(singleCategory);
    });
  });
});
