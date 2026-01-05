/**
 * Item location types
 * @export
 */
export const ItemLocationType = {
  Container: 'CONTAINER',
  World: 'WORLD',
  Character: 'CHARACTER',
  Vehicle: 'VEHICLE',
  Warehouse: 'WAREHOUSE',
  CraftingStation: 'CRAFTING_STATION',
  Attached: 'ATTACHED',
  Ledger: 'LEDGER',
} as const;

export type ItemLocationType = (typeof ItemLocationType)[keyof typeof ItemLocationType];
