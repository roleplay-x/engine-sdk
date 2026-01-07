export const ItemActionType = {
  Usable: 'USABLE',
  Equippable: 'EQUIPPABLE',
  Attachable: 'ATTACHABLE',
  Weapon: 'WEAPON',
  Move: 'MOVE',
  Split: 'SPLIT',
} as const;

export type ItemActionType = (typeof ItemActionType)[keyof typeof ItemActionType];
