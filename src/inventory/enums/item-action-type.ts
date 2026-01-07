export const ItemActionType = {
  Usable: 'USABLE',
  Equippable: 'EQUIPPABLE',
  Attachable: 'ATTACHABLE',
  Ammo: 'AMMO',
  Move: 'MOVE',
  Split: 'SPLIT',
  Stack: 'STACK',
} as const;

export type ItemActionType = (typeof ItemActionType)[keyof typeof ItemActionType];
