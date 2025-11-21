import { HDPosition } from '../../common/position';

/**
 * Represents a spawn location for character spawning
 * @export
 * @interface SpawnLocation
 */
export interface SpawnLocation {
  /**
   * Unique identifier for the spawn location
   * @type {string}
   * @memberof SpawnLocation
   */
  id: string;
  /**
   * Name of the spawn location
   * @type {string}
   * @memberof SpawnLocation
   */
  name: string;
  /**
   * Description of the spawn location
   * @type {string}
   * @memberof SpawnLocation
   */
  description: string;
  /**
   * ID of the camera to use when spawning at this location
   * @type {string}
   * @memberof SpawnLocation
   */
  cameraId?: string;
  /**
   * Position coordinates for the spawn location
   * @type {HDPosition}
   * @memberof SpawnLocation
   */
  position: HDPosition;
  /**
   * Segment definition IDs required to use this spawn location
   * @type {ReadonlyArray<string>}
   * @memberof SpawnLocation
   */
  segmentDefinitionIds: ReadonlyArray<string>;
  /**
   * Whether this spawn location is enabled
   * @type {boolean}
   * @memberof SpawnLocation
   */
  enabled: boolean;
  /**
   * Display order for sorting spawn locations
   * @type {number}
   * @memberof SpawnLocation
   */
  order: number;
  /**
   * Unix timestamp when the spawn location was created
   * @type {number}
   * @memberof SpawnLocation
   */
  createdDate: number;
  /**
   * Unix timestamp when the spawn location was last modified
   * @type {number}
   * @memberof SpawnLocation
   */
  lastModifiedDate: number;
}
