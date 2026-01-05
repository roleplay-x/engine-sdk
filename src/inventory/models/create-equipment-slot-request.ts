/**
 * Request to create an equipment slot
 * @export
 * @interface CreateEquipmentSlotRequest
 */
export interface CreateEquipmentSlotRequest {
  /**
   * Unique identifier for the equipment slot
   * @type {string}
   * @memberof CreateEquipmentSlotRequest
   */
  id: string;
  /**
   * Default display name of the equipment slot
   * @type {string}
   * @memberof CreateEquipmentSlotRequest
   */
  defaultName: string;
  /**
   * Target type this slot applies to (e.g., CHARACTER, VEHICLE)
   * @type {string}
   * @memberof CreateEquipmentSlotRequest
   */
  target: string;
  /**
   * Category of the equipment slot (e.g., HEAD, TORSO, ACCESSORY)
   * @type {string}
   * @memberof CreateEquipmentSlotRequest
   */
  category: string;
  /**
   * URL to the icon image representing this equipment slot
   * @type {string}
   * @memberof CreateEquipmentSlotRequest
   */
  iconUrl?: string;
  /**
   * Whether this slot is visible in the UI
   * @type {boolean}
   * @memberof CreateEquipmentSlotRequest
   */
  visible?: boolean;
  /**
   * Indicates whether this equipment slot is enabled and available for use
   * @type {boolean}
   * @memberof CreateEquipmentSlotRequest
   */
  enabled: boolean;
}
