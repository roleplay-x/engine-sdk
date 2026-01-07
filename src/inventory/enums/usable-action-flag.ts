/**
 * Usable action flags
 * @export
 */
export const UsableActionFlag = {
  OnEquipped: 'ON_EQUIPPED',
  OnAttached: 'ON_ATTACHED',
  OnGround: 'ON_GROUND',
  InInventory: 'IN_INVENTORY',
  InContainer: 'IN_CONTAINER',
  InVehicle: 'IN_VEHICLE',
} as const;

export type UsableActionFlag = (typeof UsableActionFlag)[keyof typeof UsableActionFlag];
