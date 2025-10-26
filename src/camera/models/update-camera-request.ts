import { CameraCinematicRequest } from './camera-cinematic-request';
import { CameraFollowRequest } from './camera-follow-request';
import { CameraOrbitRequest } from './camera-orbit-request';
import { CameraStaticRequest } from './camera-static-request';
import { CameraType } from './camera';
import { CameraPedEditRequest } from './camera-ped-edit-request';

/**
 *
 * @export
 * @interface UpdateCameraRequest
 */
export interface UpdateCameraRequest {
  /**
   *
   * @type {CameraType}
   * @memberof UpdateCameraRequest
   */
  type: CameraType;
  /**
   *
   * @type {string}
   * @memberof UpdateCameraRequest
   */
  description?: string | null;
  /**
   *
   * @type {CameraStaticRequest}
   * @memberof UpdateCameraRequest
   */
  static?: CameraStaticRequest;
  /**
   *
   * @type {CameraFollowRequest}
   * @memberof UpdateCameraRequest
   */
  follow?: CameraFollowRequest;
  /**
   *
   * @type {CameraOrbitRequest}
   * @memberof UpdateCameraRequest
   */
  orbit?: CameraOrbitRequest;
  /**
   *
   * @type {CameraCinematicRequest}
   * @memberof UpdateCameraRequest
   */
  cinematic?: CameraCinematicRequest;
  /**
   *
   * @type {CameraPedEditRequest}
   * @memberof CreateCameraRequest
   */
  pedEdit?: CameraPedEditRequest;
  /**
   *
   * @type {string}
   * @memberof UpdateCameraRequest
   */
  soundId?: string;
  /**
   *
   * @type {boolean}
   * @memberof UpdateCameraRequest
   */
  freezePlayer: boolean;
  /**
   *
   * @type {boolean}
   * @memberof UpdateCameraRequest
   */
  hideHud: boolean;
}
