export const EquipmentSlotCategory = {
  Clothing: 'CLOTHING',
  Accessory: 'ACCESSORY',
  Cosmetic: 'COSMETIC',
  Container: 'CONTAINER',
  Tool: 'TOOL',
} as const;

export type EquipmentSlotCategory =
  (typeof EquipmentSlotCategory)[keyof typeof EquipmentSlotCategory];
