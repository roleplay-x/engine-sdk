import { ItemOperationDetailsRequest } from './create-items-request';

/**
 * Request to move one or more items between locations
 * @export
 * @interface MoveItemsRequest
 */
export interface MoveItemsRequest {
  /**
   * List of items to move
   * @type {MoveItemDataRequest[]}
   * @memberof MoveItemsRequest
   */
  items: MoveItemDataRequest[];
  /**
   * Operation details for audit and tracking
   * @type {ItemOperationDetailsRequest}
   * @memberof MoveItemsRequest
   */
  operationDetails?: ItemOperationDetailsRequest;
}

/**
 * Data for a single item move operation
 * @export
 * @interface MoveItemDataRequest
 */
export interface MoveItemDataRequest {
  /**
   * ID of the item to move
   * @type {string}
   * @memberof MoveItemDataRequest
   */
  itemId: string;
  /**
   * Amount of the item to move
   * @type {number}
   * @memberof MoveItemDataRequest
   */
  amount: number;
  /**
   * Source location details
   * @type {MoveItemParticipantRequest}
   * @memberof MoveItemDataRequest
   */
  from: MoveItemParticipantRequest;
  /**
   * Destination location details
   * @type {MoveItemParticipantRequest}
   * @memberof MoveItemDataRequest
   */
  to: MoveItemParticipantRequest;
  /**
   * Additional location details for the destination
   * @type {MoveLocationDetailsRequest}
   * @memberof MoveItemDataRequest
   */
  details?: MoveLocationDetailsRequest;
}

/**
 * Participant (source or destination) in a move operation
 * @export
 * @interface MoveItemParticipantRequest
 */
export interface MoveItemParticipantRequest {
  /**
   * Location ID (e.g., CHARACTER:123, CONTAINER:guid)
   * @type {string}
   * @memberof MoveItemParticipantRequest
   */
  locationId: string;
  /**
   * Category reference ID for tracking
   * @type {string}
   * @memberof MoveItemParticipantRequest
   */
  categoryReferenceId?: string;
}

/**
 * Additional location details for the destination
 * @export
 * @interface MoveLocationDetailsRequest
 */
export interface MoveLocationDetailsRequest {
  /**
   * Container-specific location details
   * @type {MoveContainerLocationDetailsRequest}
   * @memberof MoveLocationDetailsRequest
   */
  container?: MoveContainerLocationDetailsRequest;
  /**
   * World-specific location details
   * @type {MoveWorldLocationDetailsRequest}
   * @memberof MoveLocationDetailsRequest
   */
  world?: MoveWorldLocationDetailsRequest;
  /**
   * Equipment-specific location details
   * @type {MoveEquipmentLocationDetailsRequest}
   * @memberof MoveLocationDetailsRequest
   */
  equipment?: MoveEquipmentLocationDetailsRequest;
  /**
   * Attached item location details
   * @type {MoveAttachedLocationDetailsRequest}
   * @memberof MoveLocationDetailsRequest
   */
  attached?: MoveAttachedLocationDetailsRequest;
  /**
   * Crafting station location details
   * @type {MoveCraftingStationLocationDetailsRequest}
   * @memberof MoveLocationDetailsRequest
   */
  craftingStation?: MoveCraftingStationLocationDetailsRequest;
}

/**
 * Container-specific move details
 * @export
 * @interface MoveContainerLocationDetailsRequest
 */
export interface MoveContainerLocationDetailsRequest {
  /**
   * Slot index within the container
   * @type {number}
   * @memberof MoveContainerLocationDetailsRequest
   */
  slot?: number;
}

/**
 * World location move details
 * @export
 * @interface MoveWorldLocationDetailsRequest
 */
export interface MoveWorldLocationDetailsRequest {
  /**
   * X coordinate
   * @type {number}
   * @memberof MoveWorldLocationDetailsRequest
   */
  x: number;
  /**
   * Y coordinate
   * @type {number}
   * @memberof MoveWorldLocationDetailsRequest
   */
  y: number;
  /**
   * Z coordinate
   * @type {number}
   * @memberof MoveWorldLocationDetailsRequest
   */
  z: number;
  /**
   * W rotation component
   * @type {number}
   * @memberof MoveWorldLocationDetailsRequest
   */
  w?: number;
  /**
   * Dimension/world ID
   * @type {number}
   * @memberof MoveWorldLocationDetailsRequest
   */
  dimension?: number;
}

/**
 * Equipment-specific move details
 * @export
 * @interface MoveEquipmentLocationDetailsRequest
 */
export interface MoveEquipmentLocationDetailsRequest {
  /**
   * Equipment slot ID
   * @type {string}
   * @memberof MoveEquipmentLocationDetailsRequest
   */
  equipmentSlot?: string;
}

/**
 * Attached item move details
 * @export
 * @interface MoveAttachedLocationDetailsRequest
 */
export interface MoveAttachedLocationDetailsRequest {
  /**
   * Attachment point on the parent item
   * @type {string}
   * @memberof MoveAttachedLocationDetailsRequest
   */
  attachmentPoint: string;
}

/**
 * Crafting station move details
 * @export
 * @interface MoveCraftingStationLocationDetailsRequest
 */
export interface MoveCraftingStationLocationDetailsRequest {
  /**
   * ID of the crafting station
   * @type {string}
   * @memberof MoveCraftingStationLocationDetailsRequest
   */
  stationId: string;
  /**
   * ID of the active crafting session
   * @type {string}
   * @memberof MoveCraftingStationLocationDetailsRequest
   */
  craftingSessionId: string;
  /**
   * Input slot index
   * @type {number}
   * @memberof MoveCraftingStationLocationDetailsRequest
   */
  inputSlot?: number;
}
