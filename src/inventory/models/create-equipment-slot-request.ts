import { EquipmentSlotTarget } from '../enums/equipment-slot-target';
import { EquipmentSlotCategory } from '../enums/equipment-slot-category';

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
   * Target type this slot applies to
   * @type {EquipmentSlotTarget}
   * @memberof CreateEquipmentSlotRequest
   */
  target: EquipmentSlotTarget;
  /**
   * Category of the equipment slot
   * @type {EquipmentSlotCategory}
   * @memberof CreateEquipmentSlotRequest
   */
  category: EquipmentSlotCategory;
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
