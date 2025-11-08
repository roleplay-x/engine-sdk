import { HDPosition } from '../../common/position';

/**
 * Spawn location for character spawning
 */
export interface SpawnLocation {
  id: string;
  name: string;
  description: string;
  cameraId?: string;
  position: HDPosition;
  segmentDefinitionIds: ReadonlyArray<string>;
  enabled: boolean;
  order: number;
  createdDate: number;
  lastModifiedDate: number;
}