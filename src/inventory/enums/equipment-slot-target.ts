export const EquipmentSlotTarget = {
  Character: 'CHARACTER',
  Vehicle: 'VEHICLE',
  Warehouse: 'WAREHOUSE',
} as const;

export type EquipmentSlotTarget = (typeof EquipmentSlotTarget)[keyof typeof EquipmentSlotTarget];
