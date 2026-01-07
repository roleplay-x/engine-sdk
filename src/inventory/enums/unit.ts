export const Unit = {
  Gram: 'GRAM',
  Milliliter: 'MILLILITER',
  Piece: 'PIECE',
} as const;

export type Unit = (typeof Unit)[keyof typeof Unit];
