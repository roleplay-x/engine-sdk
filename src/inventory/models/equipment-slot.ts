/**
 * Represents an equipment slot in the inventory system
 * @export
 * @interface EquipmentSlot
 */
export interface EquipmentSlot {
  /**
   * Unique identifier for the equipment slot
   * @type {string}
   * @memberof EquipmentSlot
   */
  id: string;
  /**
   * Localized name of the equipment slot
   * @type {string}
   * @memberof EquipmentSlot
   */
  name: string;
  /**
   * Target type identifier (e.g., CHARACTER, VEHICLE)
   * @type {string}
   * @memberof EquipmentSlot
   */
  target: string;
  /**
   * Localized target type name
   * @type {string}
   * @memberof EquipmentSlot
   */
  targetName: string;
  /**
   * Equipment slot category identifier
   * @type {string}
   * @memberof EquipmentSlot
   */
  category: string;
  /**
   * Localized category name
   * @type {string}
   * @memberof EquipmentSlot
   */
  categoryName: string;
  /**
   * URL to the equipment slot icon
   * @type {string}
   * @memberof EquipmentSlot
   */
  iconUrl?: string;
  /**
   * Whether the slot is visible in UI
   * @type {boolean}
   * @memberof EquipmentSlot
   */
  visible: boolean;
  /**
   * Display order of the slot
   * @type {number}
   * @memberof EquipmentSlot
   */
  order: number;
  /**
   * Whether the equipment slot is enabled
   * @type {boolean}
   * @memberof EquipmentSlot
   */
  enabled: boolean;
  /**
   * Unix timestamp when the slot was created
   * @type {number}
   * @memberof EquipmentSlot
   */
  createdDate: number;
  /**
   * Unix timestamp when the slot was last modified
   * @type {number}
   * @memberof EquipmentSlot
   */
  lastModifiedDate: number;
}
