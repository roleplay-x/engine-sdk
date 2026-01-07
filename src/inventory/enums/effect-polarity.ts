export const EffectPolarity = {
  Positive: 'POSITIVE',
  Negative: 'NEGATIVE',
} as const;

export type EffectPolarity = (typeof EffectPolarity)[keyof typeof EffectPolarity];
