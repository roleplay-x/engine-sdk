import { HDPosition } from '../../common/position';

/**
 * Request to update a spawn location
 */
export interface UpdateSpawnLocationRequest {
  cameraId?: string;
  position?: HDPosition;
  segmentDefinitionIds?: string[];
}