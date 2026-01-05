/**
 * Item mobility request that defines movement constraints
 * @export
 * @interface ItemMobilityRequest
 */
export interface ItemMobilityRequest {
  /**
   * Whether the item can be picked up from the ground
   * @type {boolean}
   * @memberof ItemMobilityRequest
   */
  canPickup?: boolean;
  /**
   * Whether the item can be carried in inventory
   * @type {boolean}
   * @memberof ItemMobilityRequest
   */
  canCarry?: boolean;
  /**
   * Whether the item can be dropped on the ground
   * @type {boolean}
   * @memberof ItemMobilityRequest
   */
  canDrop?: boolean;
  /**
   * Whether the item requires placement (cannot be freely dropped)
   * @type {boolean}
   * @memberof ItemMobilityRequest
   */
  requiresPlacement?: boolean;
}
