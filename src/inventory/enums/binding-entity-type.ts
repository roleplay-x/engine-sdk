export const BindingEntityType = {
  VehicleRental: 'VEHICLE_RENTAL',
  HouseRental: 'HOUSE_RENTAL',
  StoreRental: 'STORE_RENTAL',
} as const;

export type BindingEntityType = (typeof BindingEntityType)[keyof typeof BindingEntityType];
