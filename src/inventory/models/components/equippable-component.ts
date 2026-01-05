import { ComponentType } from '../../enums/component-type';
import { ComponentEffect } from './component-effect';

/**
 * Information about an equipment slot
 * @export
 * @interface EquipmentSlotInfo
 */
export interface EquipmentSlotInfo {
  /**
   * The equipment slot ID
   * @type {string}
   * @memberof EquipmentSlotInfo
   */
  id: string;
  /**
   * Localized name of the equipment slot
   * @type {string}
   * @memberof EquipmentSlotInfo
   */
  name?: string;
}

/**
 * Equippable component allowing the item to be worn or held
 * @export
 * @interface EquippableComponent
 */
export interface EquippableComponent {
  /**
   * The type discriminator for the component
   * @type {typeof ComponentType.Equippable}
   * @memberof EquippableComponent
   */
  type: typeof ComponentType.Equippable;
  /**
   * Custom attributes for the component
   * @type {Record<string, string>}
   * @memberof EquippableComponent
   */
  attributes: Record<string, string>;
  /**
   * List of equipment slot IDs where this item can be equipped
   * @type {ReadonlyArray<EquipmentSlotInfo>}
   * @memberof EquippableComponent
   */
  equipmentSlots: ReadonlyArray<EquipmentSlotInfo>;
  /**
   * List of equipment slot IDs that become blocked when this item is equipped
   * @type {ReadonlyArray<string>}
   * @memberof EquippableComponent
   */
  blocksSlots?: ReadonlyArray<string>;
  /**
   * Effects applied when the item is equipped
   * @type {ReadonlyArray<ComponentEffect>}
   * @memberof EquippableComponent
   */
  effects?: ReadonlyArray<ComponentEffect>;
}
