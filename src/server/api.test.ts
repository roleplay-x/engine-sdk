import nock from 'nock';
import { EngineClient } from '../core/engine-client';
import { ServerApi } from './api';
import { ServerSettingsField } from './models/server-settings-field';
import { ServerSettingsRequest } from './models/server-settings-request';
import { ServerSettingsRequestType } from './models/server-settings-request-type';
import { ServerSettingsRequestStatus } from './models/server-settings-request-status';
import { ServerSettingsValidationResult } from './models/server-settings-validation-result';
import { ImportServerSettingsRequest } from './models/import-server-settings-request';
import { ExportServerSettingsRequest } from './models/export-server-settings-request';
import { ApiKeyAuthorization } from '../auth/api-key-authorization';
import { withCommonHeaders } from '../../test/utils/nock-helpers';

describe('ServerApi', () => {
  const apiUrl = 'http://mock-api';
  const serverId = 'serverId';
  const applicationName = 'app';
  const locale = 'en-US';
  const auth = new ApiKeyAuthorization('apiKeyId', 'apiKeySecret');
  const authorizationToken = auth.getAuthorizationToken();

  let client: EngineClient;
  let api: ServerApi;
  let baseScope: nock.Scope;

  beforeAll(() => {
    client = new EngineClient({ apiUrl, applicationName, serverId, locale }, auth);
    api = new ServerApi(client);
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

  describe('getServerSettingsRequests()', () => {
    const mockRequests: ServerSettingsRequest[] = [
      {
        id: 'req-1',
        type: ServerSettingsRequestType.Import,
        fileUrl: 'https://storage.example.com/import.json',
        createdDate: 1610000000000,
        completedDate: 1610000010000,
        lastModifiedDate: 1610000010000,
        status: ServerSettingsRequestStatus.Completed,
        fields: [],
      },
      {
        id: 'req-2',
        type: ServerSettingsRequestType.Export,
        createdDate: 1610000020000,
        lastModifiedDate: 1610000020000,
        status: ServerSettingsRequestStatus.InProgress,
        fields: ['blueprints', 'cameras'],
      },
    ];

    it('should GET /servers/settings-requests and return requests', async () => {
      baseScope.get('/servers/settings-requests').reply(200, mockRequests);

      const result = await api.getServerSettingsRequests();
      expect(result).toEqual(mockRequests);
    });
  });

  describe('getServerSettingsFields()', () => {
    const mockFields: ServerSettingsField[] = [
      {
        key: 'blueprints',
        name: 'Blueprints',
      },
      {
        key: 'cameras',
        name: 'Cameras',
      },
      {
        key: 'sounds',
        name: 'Sounds',
      },
    ];

    it('should GET /servers/settings-requests/fields and return fields', async () => {
      baseScope.get('/servers/settings-requests/fields').reply(200, mockFields);

      const result = await api.getServerSettingsFields();
      expect(result).toEqual(mockFields);
    });
  });

  describe('validateServerSettings()', () => {
    const settings = {
      blueprints: [],
      cameras: [],
    };

    it('should POST /servers/settings-requests/validation with valid settings', async () => {
      const validResult: ServerSettingsValidationResult = {
        errors: [],
      };

      baseScope
        .post('/servers/settings-requests/validation', (body) => {
          expect(body).toEqual(settings);
          return true;
        })
        .reply(200, validResult);

      const result = await api.validateServerSettings(settings);
      expect(result).toEqual(validResult);
    });

    it('should return validation errors for invalid settings', async () => {
      const invalidResult: ServerSettingsValidationResult = {
        errors: ['Invalid blueprint format', 'Missing required camera field'],
      };

      baseScope.post('/servers/settings-requests/validation').reply(200, invalidResult);

      const result = await api.validateServerSettings(settings);
      expect(result).toEqual(invalidResult);
    });
  });

  describe('importServerSettings()', () => {
    const request: ImportServerSettingsRequest = {
      fileUrl: 'https://storage.example.com/settings.json',
    };

    const mockResponse: ServerSettingsRequest = {
      id: 'req-123',
      type: ServerSettingsRequestType.Import,
      fileUrl: 'https://storage.example.com/settings.json',
      createdDate: 1610000000000,
      lastModifiedDate: 1610000000000,
      status: ServerSettingsRequestStatus.InProgress,
      fields: [],
    };

    it('should POST /servers/settings-requests/imports and return request', async () => {
      baseScope
        .post('/servers/settings-requests/imports', (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(200, mockResponse);

      const result = await api.importServerSettings(request);
      expect(result).toEqual(mockResponse);
    });

    it('should handle file ID instead of URL', async () => {
      const fileIdRequest: ImportServerSettingsRequest = {
        fileId: 'file-456',
      };

      baseScope.post('/servers/settings-requests/imports').reply(200, mockResponse);

      const result = await api.importServerSettings(fileIdRequest);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('exportServerSettings()', () => {
    const request: ExportServerSettingsRequest = {
      fields: ['blueprints', 'cameras', 'sounds'],
    };

    const mockResponse: ServerSettingsRequest = {
      id: 'req-456',
      type: ServerSettingsRequestType.Export,
      createdDate: 1610000000000,
      lastModifiedDate: 1610000000000,
      status: ServerSettingsRequestStatus.InProgress,
      fields: ['blueprints', 'cameras', 'sounds'],
    };

    it('should POST /servers/settings-requests/exports and return request', async () => {
      baseScope
        .post('/servers/settings-requests/exports', (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(200, mockResponse);

      const result = await api.exportServerSettings(request);
      expect(result).toEqual(mockResponse);
    });

    it('should handle single field export', async () => {
      const singleFieldRequest: ExportServerSettingsRequest = {
        fields: ['blueprints'],
      };

      const singleFieldResponse: ServerSettingsRequest = {
        ...mockResponse,
        fields: ['blueprints'],
      };

      baseScope.post('/servers/settings-requests/exports').reply(200, singleFieldResponse);

      const result = await api.exportServerSettings(singleFieldRequest);
      expect(result).toEqual(singleFieldResponse);
    });
  });
});
