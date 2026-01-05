/**
 * Request to create an ammo type
 * @export
 * @interface CreateAmmoTypeRequest
 */
export interface CreateAmmoTypeRequest {
  /**
   * Unique identifier for the ammo type
   * @type {string}
   * @memberof CreateAmmoTypeRequest
   */
  id: string;
  /**
   * Default display name for the ammo type (used when no localization available)
   * @type {string}
   * @memberof CreateAmmoTypeRequest
   */
  defaultName: string;
  /**
   * Whether the ammo type should be enabled upon creation
   * @type {boolean}
   * @memberof CreateAmmoTypeRequest
   */
  enabled: boolean;
}
