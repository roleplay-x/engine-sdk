import nock from 'nock';
import { EngineClient } from '../core/engine-client';
import { StorageApi } from './api';
import { CreateStoragePresignedUrlsRequest } from './models/create-storage-presigned-urls-request';
import { PersistStorageFilesRequest } from './models/persist-storage-files-request';
import { StoragePresignedUrl } from './models/storage-presigned-url';
import { StorageFile } from './models/storage-file';
import { StorageFileType } from './models/storage-file-type';
import { ApiKeyAuthorization } from '../auth/api-key-authorization';
import { withCommonHeaders } from '../../test/utils/nock-helpers';

describe('StorageApi', () => {
  const apiUrl = 'http://mock-api';
  const serverId = 'serverId';
  const applicationName = 'app';
  const locale = 'en-US';
  const auth = new ApiKeyAuthorization('apiKeyId', 'apiKeySecret');
  const authorizationToken = auth.getAuthorizationToken();

  let client: EngineClient;
  let api: StorageApi;
  let baseScope: nock.Scope;

  beforeAll(() => {
    client = new EngineClient({ apiUrl, applicationName, serverId, locale }, auth);
    api = new StorageApi(client);
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

  describe('createPresignedUrls()', () => {
    const request: CreateStoragePresignedUrlsRequest = {
      definitionId: StorageFileType.ServerSettings,
      files: ['settings.json'],
      useFileName: true,
    };

    const mockResponse: StoragePresignedUrl[] = [
      {
        fileId: 'file-123',
        name: 'settings.json',
        presignedUrl: 'https://storage.example.com/upload/settings.json?signature=xyz',
        headers: {
          'Content-Type': 'application/json',
        },
        expiresAt: 1610000000000,
      },
    ];

    it('should POST /storages/files and return presigned URLs', async () => {
      baseScope
        .post('/storages/files', (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(200, mockResponse);

      const result = await api.createPresignedUrls(request);
      expect(result).toEqual(mockResponse);
    });

    it('should handle multiple files', async () => {
      const multiFileRequest: CreateStoragePresignedUrlsRequest = {
        definitionId: StorageFileType.LocaleIcons,
        files: ['icon1.png', 'icon2.png'],
        parameters: { locale: 'en-US' },
      };

      const multiFileResponse: StoragePresignedUrl[] = [
        {
          fileId: 'file-1',
          name: 'icon1.png',
          presignedUrl: 'https://storage.example.com/upload/icon1.png',
          headers: {},
          expiresAt: 1610000000000,
        },
        {
          fileId: 'file-2',
          name: 'icon2.png',
          presignedUrl: 'https://storage.example.com/upload/icon2.png',
          headers: {},
          expiresAt: 1610000000000,
        },
      ];

      baseScope.post('/storages/files').reply(200, multiFileResponse);

      const result = await api.createPresignedUrls(multiFileRequest);
      expect(result).toEqual(multiFileResponse);
    });
  });

  describe('persistFiles()', () => {
    const request: PersistStorageFilesRequest = {
      fileIds: ['file-123', 'file-456'],
      expectedDefinitionId: StorageFileType.ServerSettings,
    };

    const mockResponse: StorageFile[] = [
      {
        id: 'file-123',
        name: 'settings.json',
        mimeType: 'application/json',
        size: 1024,
        isRestricted: false,
        definitionId: 'SERVER_SETTINGS',
        url: 'https://storage.example.com/files/settings.json',
        status: 'ACTIVE',
        createdDate: 1610000000000,
      },
      {
        id: 'file-456',
        name: 'settings2.json',
        mimeType: 'application/json',
        size: 2048,
        isRestricted: false,
        definitionId: 'SERVER_SETTINGS',
        url: 'https://storage.example.com/files/settings2.json',
        status: 'ACTIVE',
        createdDate: 1610000001000,
      },
    ];

    it('should PUT /storages/files/persisted and return storage files', async () => {
      baseScope
        .put('/storages/files/persisted', (body) => {
          expect(body).toEqual(request);
          return true;
        })
        .reply(200, mockResponse);

      const result = await api.persistFiles(request);
      expect(result).toEqual(mockResponse);
    });

    it('should handle single file', async () => {
      const singleFileRequest: PersistStorageFilesRequest = {
        fileIds: ['file-789'],
      };

      const singleFileResponse: StorageFile[] = [
        {
          id: 'file-789',
          name: 'icon.png',
          mimeType: 'image/png',
          size: 512,
          isRestricted: true,
          definitionId: 'SERVER_LOCALE_ICONS',
          status: 'ACTIVE',
          createdDate: 1610000002000,
        },
      ];

      baseScope.put('/storages/files/persisted').reply(200, singleFileResponse);

      const result = await api.persistFiles(singleFileRequest);
      expect(result).toEqual(singleFileResponse);
    });
  });
});
