import { CameraCinematic } from './camera-cinematic';
import { CameraFollow } from './camera-follow';
import { CameraOrbit } from './camera-orbit';
import { CameraStatic } from './camera-static';
import { CameraPedEdit } from './camera-ped-edit';

/**
 * Camera type codes
 * @export
 * @enum {string}
 */
export enum CameraType {
  Static = 'STATIC',
  Follow = 'FOLLOW',
  Orbit = 'ORBIT',
  Cinematic = 'CINEMATIC',
  PedEdit = 'PED_EDIT',
}

/**
 * Camera target type codes
 * @export
 * @enum {string}
 */
export enum CameraTargetType {
  Character = 'CHARACTER',
  Vehicle = 'VEHICLE',
}

/**
 * Represents a camera configuration for in-game scenes
 * @export
 * @interface Camera
 */
export interface Camera {
  /**
   * Unique identifier for the camera
   * @type {string}
   * @memberof Camera
   */
  id: string;
  /**
   * Type of the camera (STATIC, FOLLOW, ORBIT, CINEMATIC, PED_EDIT)
   * @type {CameraType}
   * @memberof Camera
   */
  type: CameraType;
  /**
   * Name of the camera configuration
   * @type {string}
   * @memberof Camera
   */
  name: string;
  /**
   * Description of the camera's purpose or use case
   * @type {string}
   * @memberof Camera
   */
  description: string;
  /**
   * Static camera configuration, present when type is STATIC
   * @type {CameraStatic}
   * @memberof Camera
   */
  static?: CameraStatic;
  /**
   * Ped edit camera configuration, present when type is PED_EDIT
   * @type {CameraPedEdit}
   * @memberof Camera
   */
  pedEdit?: CameraPedEdit;
  /**
   * Follow camera configuration, present when type is FOLLOW
   * @type {CameraFollow}
   * @memberof Camera
   */
  follow?: CameraFollow;
  /**
   * Orbit camera configuration, present when type is ORBIT
   * @type {CameraOrbit}
   * @memberof Camera
   */
  orbit?: CameraOrbit;
  /**
   * Cinematic camera configuration, present when type is CINEMATIC
   * @type {CameraCinematic}
   * @memberof Camera
   */
  cinematic?: CameraCinematic;
  /**
   * ID of the sound to play when camera is active
   * @type {string}
   * @memberof Camera
   */
  soundId?: string;
  /**
   * Whether to freeze player movement while camera is active
   * @type {boolean}
   * @memberof Camera
   */
  freezePlayer: boolean;
  /**
   * Whether to hide the HUD while camera is active
   * @type {boolean}
   * @memberof Camera
   */
  hideHud: boolean;
  /**
   * Whether this camera configuration is enabled
   * @type {boolean}
   * @memberof Camera
   */
  enabled: boolean;
  /**
   * Unix timestamp when the camera was created
   * @type {number}
   * @memberof Camera
   */
  createdDate: number;
  /**
   * Unix timestamp when the camera was last modified
   * @type {number}
   * @memberof Camera
   */
  lastModifiedDate: number;
}
