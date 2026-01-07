export const EffectTarget = {
  Character: 'CHARACTER',
  Item: 'ITEM',
  Vehicle: 'VEHICLE',
} as const;

export type EffectTarget = (typeof EffectTarget)[keyof typeof EffectTarget];
