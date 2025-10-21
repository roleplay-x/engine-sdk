import nock from 'nock';
import { EngineClient } from '../core/engine-client';
import { BlueprintApi } from './api';
import { BlueprintConfigSection } from './models/blueprint-config-section';
import { BlueprintConfig } from './models/blueprint-config';
import { BlueprintConfigOption } from './models/blueprint-config-option';
import { BlueprintConfigColor } from './models/blueprint-config-color';
import { CreateBlueprintConfigSectionRequest } from './models/create-blueprint-config-section-request';
import { CreateBlueprintConfigRequest } from './models/create-blueprint-config-request';
import { CreateBlueprintConfigOptionRequest } from './models/create-blueprint-config-option-request';
import { CreateBlueprintConfigColorRequest } from './models/create-blueprint-config-color-request';
import { UpdateBlueprintOrderRequest } from './models/update-blueprint-order-request';
import { ApiKeyAuthorization } from '../auth/api-key-authorization';
import { withCommonHeaders } from '../../test/utils/nock-helpers';

describe('BlueprintApi', () => {
  const apiUrl = 'http://mock-api';
  const serverId = 'serverId';
  const applicationName = 'app';
  const locale = 'en-US';
  const auth = new ApiKeyAuthorization('apiKeyId', 'apiKeySecret');
  const authorizationToken = auth.getAuthorizationToken();

  let client: EngineClient;
  let api: BlueprintApi;
  let baseScope: nock.Scope;

  beforeAll(() => {
    client = new EngineClient({ apiUrl, applicationName, serverId, locale }, auth);
    api = new BlueprintApi(client);
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

  describe('getAllBlueprintSections()', () => {
    const mockSections: ReadonlyArray<BlueprintConfigSection> = [
      {
        id: 'section1',
        category: 'APPEARANCE',
        categoryName: 'Appearance',
        key: 'hair',
        name: 'Hair',
        order: 1,
        enabled: true,
        constraints: {},
      },
      {
        id: 'section2',
        category: 'APPEARANCE',
        categoryName: 'Appearance',
        key: 'body',
        name: 'Body',
        order: 2,
        enabled: true,
        constraints: {},
      },
    ];

    it('should GET /blueprints/sections and return sections', async () => {
      baseScope.get('/blueprints/sections').reply(200, mockSections);

      const result = await api.getAllBlueprintSections();

      expect(result).toEqual(mockSections);
    });

    it('should pass category query parameter', async () => {
      baseScope
        .get('/blueprints/sections')
        .query({ category: 'APPEARANCE' })
        .reply(200, mockSections);

      const result = await api.getAllBlueprintSections({ category: 'APPEARANCE' });

      expect(result).toEqual(mockSections);
    });

    it('should pass multiple query parameters', async () => {
      baseScope
        .get('/blueprints/sections')
        .query({ category: 'APPEARANCE', includeConfigs: 'true', noCache: 'true', enabled: 'true' })
        .reply(200, mockSections);

      const result = await api.getAllBlueprintSections({
        category: 'APPEARANCE',
        includeConfigs: true,
        noCache: true,
        enabled: true,
      });

      expect(result).toEqual(mockSections);
    });

    it('should handle empty sections list', async () => {
      const emptySections: ReadonlyArray<BlueprintConfigSection> = [];
      baseScope.get('/blueprints/sections').reply(200, emptySections);

      const result = await api.getAllBlueprintSections();

      expect(result).toEqual(emptySections);
    });
  });

  describe('getBlueprintSection()', () => {
    const sectionId = 'section1';
    const mockSection: BlueprintConfigSection = {
      id: sectionId,
      category: 'APPEARANCE',
      categoryName: 'Appearance',
      key: 'hair',
      name: 'Hair',
      order: 1,
      enabled: true,
      constraints: {},
    };

    it('should GET /blueprints/sections/:id and return section', async () => {
      baseScope.get(`/blueprints/sections/${sectionId}`).reply(200, mockSection);

      const result = await api.getBlueprintSection(sectionId);

      expect(result).toEqual(mockSection);
    });

    it('should pass query parameters', async () => {
      baseScope
        .get(`/blueprints/sections/${sectionId}`)
        .query({ includeSubSections: 'true', includeConfigs: 'true' })
        .reply(200, mockSection);

      const result = await api.getBlueprintSection(sectionId, {
        includeSubSections: true,
        includeConfigs: true,
      });

      expect(result).toEqual(mockSection);
    });
  });

  describe('createBlueprintSection()', () => {
    const request: CreateBlueprintConfigSectionRequest = {
      category: 'APPEARANCE',
      key: 'face',
      defaultName: 'Face',
      enabled: true,
      constraints: {},
    };

    const mockSection: BlueprintConfigSection = {
      id: 'section3',
      category: 'APPEARANCE',
      categoryName: 'Appearance',
      key: 'face',
      name: 'Face',
      order: 3,
      enabled: true,
      constraints: {},
    };

    it('should POST /blueprints/sections and return created section', async () => {
      baseScope
        .post('/blueprints/sections', (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(201, mockSection);

      const result = await api.createBlueprintSection(request);

      expect(result).toEqual(mockSection);
    });
  });

  describe('enableBlueprintSection()', () => {
    const sectionId = 'section1';

    it('should PUT /blueprints/sections/:id/enabled', async () => {
      baseScope.put(`/blueprints/sections/${sectionId}/enabled`).reply(204);

      await api.enableBlueprintSection(sectionId);
    });
  });

  describe('disableBlueprintSection()', () => {
    const sectionId = 'section1';

    it('should PUT /blueprints/sections/:id/disabled', async () => {
      baseScope.put(`/blueprints/sections/${sectionId}/disabled`).reply(204);

      await api.disableBlueprintSection(sectionId);
    });
  });

  describe('updateBlueprintSectionOrder()', () => {
    const sectionId = 'section1';
    const request: UpdateBlueprintOrderRequest = { order: 5 };

    it('should PUT /blueprints/sections/:id/order with correct body', async () => {
      baseScope
        .put(`/blueprints/sections/${sectionId}/order`, (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(204);

      await api.updateBlueprintSectionOrder(sectionId, request);
    });
  });

  describe('getBlueprintConfig()', () => {
    const configId = 'config1';
    const mockConfig: BlueprintConfig = {
      id: configId,
      category: 'APPEARANCE',
      categoryName: 'Appearance',
      sectionId: 'section1',
      sectionKey: 'hair',
      type: 'OPTION',
      typeName: 'Option',
      key: 'hairStyle',
      name: 'Hair Style',
      order: 1,
      enabled: true,
      parameters: {},
      constraints: {},
    };

    it('should GET /blueprints/configs/:id and return config', async () => {
      baseScope.get(`/blueprints/configs/${configId}`).reply(200, mockConfig);

      const result = await api.getBlueprintConfig(configId);

      expect(result).toEqual(mockConfig);
    });

    it('should pass query parameters', async () => {
      baseScope
        .get(`/blueprints/configs/${configId}`)
        .query({ includeOptions: 'true', noCache: 'true' })
        .reply(200, mockConfig);

      const result = await api.getBlueprintConfig(configId, {
        includeOptions: true,
        noCache: true,
      });

      expect(result).toEqual(mockConfig);
    });
  });

  describe('createBlueprintConfig()', () => {
    const sectionId = 'section1';
    const request: CreateBlueprintConfigRequest = {
      type: 'OPTION',
      key: 'hairStyle',
      parameters: {},
      enabled: true,
      constraints: {},
    };

    const mockConfig: BlueprintConfig = {
      id: 'config2',
      category: 'APPEARANCE',
      categoryName: 'Appearance',
      sectionId,
      sectionKey: 'hair',
      type: 'OPTION',
      typeName: 'Option',
      key: 'hairStyle',
      name: 'Hair Style',
      order: 1,
      enabled: true,
      parameters: {},
      constraints: {},
    };

    it('should POST /blueprints/sections/:id/configs and return created config', async () => {
      baseScope
        .post(`/blueprints/sections/${sectionId}/configs`, (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(201, mockConfig);

      const result = await api.createBlueprintConfig(sectionId, request);

      expect(result).toEqual(mockConfig);
    });
  });

  describe('enableBlueprintConfig()', () => {
    const configId = 'config1';

    it('should PUT /blueprints/configs/:id/enabled', async () => {
      baseScope.put(`/blueprints/configs/${configId}/enabled`).reply(204);

      await api.enableBlueprintConfig(configId);
    });
  });

  describe('disableBlueprintConfig()', () => {
    const configId = 'config1';

    it('should PUT /blueprints/configs/:id/disabled', async () => {
      baseScope.put(`/blueprints/configs/${configId}/disabled`).reply(204);

      await api.disableBlueprintConfig(configId);
    });
  });

  describe('getBlueprintConfigOption()', () => {
    const optionId = 'option1';
    const mockOption: BlueprintConfigOption = {
      id: optionId,
      configId: 'config1',
      key: 'short',
      name: 'Short Hair',
      value: 'short',
      order: 1,
      enabled: true,
      constraints: {},
    };

    it('should GET /blueprints/configs/options/:id and return option', async () => {
      baseScope.get(`/blueprints/configs/options/${optionId}`).reply(200, mockOption);

      const result = await api.getBlueprintConfigOption(optionId);

      expect(result).toEqual(mockOption);
    });
  });

  describe('createBlueprintConfigOption()', () => {
    const configId = 'config1';
    const request: CreateBlueprintConfigOptionRequest = {
      key: 'long',
      value: 'long',
      enabled: true,
      constraints: {},
    };

    const mockOption: BlueprintConfigOption = {
      id: 'option2',
      configId,
      key: 'long',
      name: 'Long Hair',
      value: 'long',
      order: 2,
      enabled: true,
      constraints: {},
    };

    it('should POST /blueprints/configs/:id/options and return created option', async () => {
      baseScope
        .post(`/blueprints/configs/${configId}/options`, (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(201, mockOption);

      const result = await api.createBlueprintConfigOption(configId, request);

      expect(result).toEqual(mockOption);
    });
  });

  describe('getBlueprintConfigColor()', () => {
    const colorId = 'color1';
    const mockColor: BlueprintConfigColor = {
      id: colorId,
      configId: 'config1',
      key: 'black',
      name: 'Black',
      type: 'PRIMARY',
      hex: '#000000',
      order: 1,
      enabled: true,
      constraints: {},
    };

    it('should GET /blueprints/configs/colors/:id and return color', async () => {
      baseScope.get(`/blueprints/configs/colors/${colorId}`).reply(200, mockColor);

      const result = await api.getBlueprintConfigColor(colorId);

      expect(result).toEqual(mockColor);
    });
  });

  describe('createBlueprintConfigColor()', () => {
    const configId = 'config1';
    const request: CreateBlueprintConfigColorRequest = {
      key: 'red',
      type: 'PRIMARY',
      hex: '#FF0000',
      enabled: true,
      constraints: {},
    };

    const mockColor: BlueprintConfigColor = {
      id: 'color2',
      configId,
      key: 'red',
      name: 'Red',
      type: 'PRIMARY',
      hex: '#FF0000',
      order: 2,
      enabled: true,
      constraints: {},
    };

    it('should POST /blueprints/configs/:id/colors and return created color', async () => {
      baseScope
        .post(`/blueprints/configs/${configId}/colors`, (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(201, mockColor);

      const result = await api.createBlueprintConfigColor(configId, request);

      expect(result).toEqual(mockColor);
    });
  });
});
