/**
 * Item component types
 * @export
 */
export const ComponentType = {
  Currency: 'CURRENCY',
  Weapon: 'WEAPON',
  Stackable: 'STACKABLE',
  Perishable: 'PERISHABLE',
  Durable: 'DURABLE',
  Equippable: 'EQUIPPABLE',
  Ammunition: 'AMMUNITION',
  Container: 'CONTAINER',
  Attachable: 'ATTACHABLE',
  AttachmentSlots: 'ATTACHMENT_SLOTS',
  Usable: 'USABLE',
  Key: 'KEY',
} as const;

export type ComponentType = (typeof ComponentType)[keyof typeof ComponentType];
