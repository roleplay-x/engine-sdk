/**
 * Request to patch an equipment slot
 * @export
 * @interface PatchEquipmentSlotRequest
 */
export interface PatchEquipmentSlotRequest {
  /**
   * URL to the icon image representing this equipment slot
   * @type {string}
   * @memberof PatchEquipmentSlotRequest
   */
  iconUrl?: string;
  /**
   * Whether this slot is visible in the UI
   * @type {boolean}
   * @memberof PatchEquipmentSlotRequest
   */
  visible?: boolean;
}
