import { Position } from '../../common/position';
import { Rotation } from '../../common/rotation';

/**
 *
 * @export
 * @interface CameraPedEditRequest
 */
export interface CameraPedEditRequest {
  /**
   *
   * @type {Position}
   * @memberof CameraPedEditRequest
   */
  position: Position;
  /**
   *
   * @type {Rotation}
   * @memberof CameraPedEditRequest
   */
  rotation: Rotation;
  /**
   *
   * @type {number}
   * @memberof CameraPedEditRequest
   */
  fov: number;
}
