/**
 * Usable target types
 * @export
 */
export const UsableTargetType = {
  Self: 'SELF',
  OtherPlayer: 'OTHER_PLAYER',
  SelfOrOtherPlayer: 'SELF_OR_OTHER_PLAYER',
  Vehicle: 'VEHICLE',
  WorldObject: 'WORLD_OBJECT',
  Location: 'LOCATION',
} as const;

export type UsableTargetType = (typeof UsableTargetType)[keyof typeof UsableTargetType];
