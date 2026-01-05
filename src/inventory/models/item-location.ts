import { ItemLocationType } from '../enums/item-location-type';

/**
 * Container-specific location details
 * @export
 * @interface ContainerLocationDetails
 */
export interface ContainerLocationDetails {
  /**
   * ID of the container item
   * @type {string}
   * @memberof ContainerLocationDetails
   */
  containerId: string;
  /**
   * Slot index within the container
   * @type {number}
   * @memberof ContainerLocationDetails
   */
  slot?: number;
}

/**
 * World location details
 * @export
 * @interface WorldLocationDetails
 */
export interface WorldLocationDetails {
  /**
   * X coordinate
   * @type {number}
   * @memberof WorldLocationDetails
   */
  x: number;
  /**
   * Y coordinate
   * @type {number}
   * @memberof WorldLocationDetails
   */
  y: number;
  /**
   * Z coordinate
   * @type {number}
   * @memberof WorldLocationDetails
   */
  z: number;
  /**
   * W rotation component
   * @type {number}
   * @memberof WorldLocationDetails
   */
  w?: number;
  /**
   * Dimension/world ID
   * @type {number}
   * @memberof WorldLocationDetails
   */
  dimension?: number;
}

/**
 * Equipment location details
 * @export
 * @interface EquipmentLocationDetails
 */
export interface EquipmentLocationDetails {
  /**
   * ID of the entity the item is equipped to
   * @type {string}
   * @memberof EquipmentLocationDetails
   */
  equippedToId: string;
  /**
   * Equipment slot ID
   * @type {string}
   * @memberof EquipmentLocationDetails
   */
  equipmentSlot: string;
}

/**
 * Crafting station location details
 * @export
 * @interface CraftingStationLocationDetails
 */
export interface CraftingStationLocationDetails {
  /**
   * ID of the crafting station
   * @type {string}
   * @memberof CraftingStationLocationDetails
   */
  stationId: string;
  /**
   * ID of the active crafting session
   * @type {string}
   * @memberof CraftingStationLocationDetails
   */
  craftingSessionId: string;
  /**
   * Input slot index
   * @type {number}
   * @memberof CraftingStationLocationDetails
   */
  inputSlot?: number;
}

/**
 * Attached item location details
 * @export
 * @interface AttachedLocationDetails
 */
export interface AttachedLocationDetails {
  /**
   * ID of the parent item this item is attached to
   * @type {string}
   * @memberof AttachedLocationDetails
   */
  parentItemId: string;
  /**
   * Attachment point on the parent item
   * @type {string}
   * @memberof AttachedLocationDetails
   */
  attachmentPoint: string;
}

/**
 * Represents the location of an item in the game world
 * @export
 * @interface ItemLocation
 */
export interface ItemLocation {
  /**
   * Location identifier (e.g., CONTAINER:guid, WORLD, CHARACTER:id)
   * @type {string}
   * @memberof ItemLocation
   */
  id: string;
  /**
   * Location type
   * @type {ItemLocationType}
   * @memberof ItemLocation
   */
  type: ItemLocationType;
  /**
   * Preservation factor affecting perishable items (0-1 scale)
   * @type {number}
   * @memberof ItemLocation
   */
  preservationFactor: number;
  /**
   * Container-specific location details
   * @type {ContainerLocationDetails}
   * @memberof ItemLocation
   */
  container?: ContainerLocationDetails;
  /**
   * World-specific location details
   * @type {WorldLocationDetails}
   * @memberof ItemLocation
   */
  world?: WorldLocationDetails;
  /**
   * Equipment-specific location details
   * @type {EquipmentLocationDetails}
   * @memberof ItemLocation
   */
  equipment?: EquipmentLocationDetails;
  /**
   * Crafting station-specific location details
   * @type {CraftingStationLocationDetails}
   * @memberof ItemLocation
   */
  craftingStation?: CraftingStationLocationDetails;
  /**
   * Attached item location details
   * @type {AttachedLocationDetails}
   * @memberof ItemLocation
   */
  attached?: AttachedLocationDetails;
}
