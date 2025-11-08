export interface Position {
  x: number;
  y: number;
  z: number;
}

export interface DPosition extends Position {
  dimension: number;
}

/**
 * Position with heading (rotation) and dimension
 */
export interface HDPosition extends DPosition {
  w: number;
}

/**
 * Position with heading (rotation)
 */
export interface HPosition extends Position {
  w: number;
}
