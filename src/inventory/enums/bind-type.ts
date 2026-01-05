/**
 * Item binding types
 * @export
 */
export const BindType = {
  None: 'NONE',
  Permanent: 'PERMANENT',
  OnSegment: 'ON_SEGMENT',
  OnDuty: 'ON_DUTY',
  Temporary: 'TEMPORARY',
} as const;

export type BindType = (typeof BindType)[keyof typeof BindType];
