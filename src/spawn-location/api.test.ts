import nock from 'nock';
import { EngineClient } from '../core/engine-client';
import { SpawnLocationApi } from './api';
import { CreateSpawnLocationRequest } from './models/create-spawn-location-request';
import { UpdateSpawnLocationRequest } from './models/update-spawn-location-request';
import { UpdateSpawnLocationOrderRequest } from './models/update-spawn-location-order-request';
import { SpawnLocation } from './models/spawn-location';
import { ApiKeyAuthorization } from '../auth/api-key-authorization';
import { withCommonHeaders } from '../../test/utils/nock-helpers';

describe('SpawnLocationApi', () => {
  const apiUrl = 'http://mock-api';
  const serverId = 'serverId';
  const applicationName = 'app';
  const locale = 'en-US';
  const auth = new ApiKeyAuthorization('apiKeyId', 'apiKeySecret');
  const authorizationToken = auth.getAuthorizationToken();

  let client: EngineClient;
  let api: SpawnLocationApi;
  let baseScope: nock.Scope;

  beforeAll(() => {
    client = new EngineClient({ apiUrl, applicationName, serverId, locale }, auth);
    api = new SpawnLocationApi(client);
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

  describe('createSpawnLocation()', () => {
    it('should create a spawn location with all fields', async () => {
      const req: CreateSpawnLocationRequest = {
        id: 'spawn-1',
        defaultName: 'Main Spawn',
        description: 'Main spawn point',
        cameraId: 'cam-1',
        position: { x: 100, y: 50, z: 200, dimension: 0, w: 90 },
        segmentDefinitionIds: ['seg-1', 'seg-2'],
        enabled: true,
        order: 1,
      };
      const mock: SpawnLocation = {
        id: 'spawn-1',
        name: 'Main Spawn',
        description: 'Main spawn point',
        cameraId: 'cam-1',
        position: { x: 100, y: 50, z: 200, dimension: 0, w: 90 },
        segmentDefinitionIds: ['seg-1', 'seg-2'],
        enabled: true,
        order: 1,
        createdDate: 1610000000000,
        lastModifiedDate: 1610000001000,
      };

      baseScope
        .post('/spawn-locations', (body) => {
          expect(body).toEqual(req);
          return true;
        })
        .reply(201, mock);

      const result = await api.createSpawnLocation(req);
      expect(result).toEqual(mock);
    });

    it('should create a spawn location with minimal fields', async () => {
      const req: CreateSpawnLocationRequest = {
        enabled: false,
        order: 0,
      };
      const mock: SpawnLocation = {
        id: 'spawn-2',
        name: 'Spawn Location',
        description: '',
        position: { x: 0, y: 0, z: 0, dimension: 0, w: 0 },
        segmentDefinitionIds: [],
        enabled: false,
        order: 0,
        createdDate: 1610000002000,
        lastModifiedDate: 1610000003000,
      };

      baseScope
        .post('/spawn-locations', (body) => {
          expect(body).toEqual(req);
          return true;
        })
        .reply(201, mock);

      const result = await api.createSpawnLocation(req);
      expect(result).toEqual(mock);
    });
  });

  describe('getSpawnLocations()', () => {
    const list: SpawnLocation[] = [
      {
        id: 'spawn-1',
        name: 'Spawn 1',
        description: 'First spawn',
        position: { x: 10, y: 20, z: 30, dimension: 0, w: 45 },
        segmentDefinitionIds: ['seg-1'],
        enabled: true,
        order: 1,
        createdDate: 1610000004000,
        lastModifiedDate: 1610000005000,
      },
      {
        id: 'spawn-2',
        name: 'Spawn 2',
        description: 'Second spawn',
        cameraId: 'cam-2',
        position: { x: 40, y: 50, z: 60, dimension: 1, w: 180 },
        segmentDefinitionIds: ['seg-2', 'seg-3'],
        enabled: false,
        order: 2,
        createdDate: 1610000006000,
        lastModifiedDate: 1610000007000,
      },
    ];

    it('should GET /spawn-locations with all query params', async () => {
      const query = { enabled: true, noCache: true };

      baseScope
        .get('/spawn-locations')
        .query({
          enabled: 'true',
          noCache: 'true',
        })
        .reply(200, list);

      const result = await api.getSpawnLocations(query);
      expect(result).toEqual(list);
    });

    it('should GET /spawn-locations without query params', async () => {
      baseScope.get('/spawn-locations').reply(200, list);

      const result = await api.getSpawnLocations();
      expect(result).toEqual(list);
    });

    it('should include only provided query params', async () => {
      baseScope.get('/spawn-locations').query({ enabled: 'false' }).reply(200, list);

      const result = await api.getSpawnLocations({ enabled: false });
      expect(result).toEqual(list);
    });
  });

  describe('getSpawnLocationById()', () => {
    const spawnId = 'spawn-1';
    const mock: SpawnLocation = {
      id: 'spawn-1',
      name: 'Test Spawn',
      description: 'Test spawn location',
      cameraId: 'cam-1',
      position: { x: 100, y: 200, z: 300, dimension: 0, w: 270 },
      segmentDefinitionIds: ['seg-1'],
      enabled: true,
      order: 5,
      createdDate: 1610000008000,
      lastModifiedDate: 1610000009000,
    };

    it('should GET /spawn-locations/:id without query and return SpawnLocation', async () => {
      baseScope.get(`/spawn-locations/${spawnId}`).reply(200, mock);
      const result = await api.getSpawnLocationById(spawnId);
      expect(result).toEqual(mock);
    });

    it('should include noCache query when provided', async () => {
      baseScope.get(`/spawn-locations/${spawnId}`).query({ noCache: 'true' }).reply(200, mock);

      const result = await api.getSpawnLocationById(spawnId, { noCache: true });
      expect(result).toEqual(mock);
    });
  });

  describe('updateSpawnLocation()', () => {
    it('should PUT /spawn-locations/:id with correct body', async () => {
      const spawnId = 'spawn-1';
      const req: UpdateSpawnLocationRequest = {
        cameraId: 'cam-updated',
        position: { x: 999, y: 888, z: 777, dimension: 1, w: 45 },
        segmentDefinitionIds: ['seg-new-1', 'seg-new-2'],
      };

      baseScope
        .put(`/spawn-locations/${spawnId}`, (body) => {
          expect(body).toEqual({
            cameraId: 'cam-updated',
            position: { x: 999, y: 888, z: 777, dimension: 1, w: 45 },
            segmentDefinitionIds: ['seg-new-1', 'seg-new-2'],
          });
          return true;
        })
        .reply(204);

      await api.updateSpawnLocation(spawnId, req);
    });

    it('should handle partial updates', async () => {
      const spawnId = 'spawn-2';
      const req: UpdateSpawnLocationRequest = {
        position: { x: 0, y: 0, z: 0, dimension: 0, w: 0 },
      };

      baseScope
        .put(`/spawn-locations/${spawnId}`, (body) => {
          expect(body).toEqual({
            position: { x: 0, y: 0, z: 0, dimension: 0, w: 0 },
          });
          return true;
        })
        .reply(204);

      await api.updateSpawnLocation(spawnId, req);
    });
  });

  describe('enableSpawnLocation()', () => {
    it('should enable a spawn location', async () => {
      const spawnId = 'spawn-1';
      baseScope.put(`/spawn-locations/${spawnId}/enabled`).reply(204);
      await api.enableSpawnLocation(spawnId);
    });
  });

  describe('disableSpawnLocation()', () => {
    it('should disable a spawn location', async () => {
      const spawnId = 'spawn-1';
      baseScope.put(`/spawn-locations/${spawnId}/disabled`).reply(204);
      await api.disableSpawnLocation(spawnId);
    });
  });

  describe('updateSpawnLocationOrder()', () => {
    it('should PUT /spawn-locations/:id/order with correct body', async () => {
      const spawnId = 'spawn-1';
      const req: UpdateSpawnLocationOrderRequest = {
        order: 10,
      };

      baseScope
        .put(`/spawn-locations/${spawnId}/order`, (body) => {
          expect(body).toEqual({ order: 10 });
          return true;
        })
        .reply(204);

      await api.updateSpawnLocationOrder(spawnId, req);
    });
  });
});
