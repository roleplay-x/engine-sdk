/**
 * Defines the mobility constraints for an item
 * @export
 * @interface ItemMobility
 */
export interface ItemMobility {
  /**
   * Whether the item can be picked up from the ground
   * @type {boolean}
   * @memberof ItemMobility
   */
  canPickup: boolean;
  /**
   * Whether the item can be carried in inventory
   * @type {boolean}
   * @memberof ItemMobility
   */
  canCarry: boolean;
  /**
   * Whether the item can be dropped on the ground
   * @type {boolean}
   * @memberof ItemMobility
   */
  canDrop: boolean;
  /**
   * Whether the item requires placement (cannot be freely dropped)
   * @type {boolean}
   * @memberof ItemMobility
   */
  requiresPlacement: boolean;
}
