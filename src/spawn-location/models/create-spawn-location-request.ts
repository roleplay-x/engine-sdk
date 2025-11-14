import { HDPosition } from '../../common/position';

/**
 * Request to create a spawn location
 */
export interface CreateSpawnLocationRequest {
  id?: string;
  defaultName?: string;
  description?: string;
  cameraId?: string;
  position?: HDPosition;
  segmentDefinitionIds?: string[];
  enabled: boolean;
  order: number;
}
