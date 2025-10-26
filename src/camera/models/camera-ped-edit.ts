import { Position } from '../../common/position';
import { Rotation } from '../../common/rotation';

/**
 *
 * @export
 * @interface CameraPedEdit
 */
export interface CameraPedEdit {
  /**
   *
   * @type {Position}
   * @memberof CameraPedEdit
   */
  position: Position;
  /**
   *
   * @type {Rotation}
   * @memberof CameraPedEdit
   */
  rotation: Rotation;
  /**
   *
   * @type {number}
   * @memberof CameraPedEdit
   */
  fov: number;
}
