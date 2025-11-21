/**
 * Policy configuration for a segment
 * @export
 * @interface SegmentPolicy
 */
export interface SegmentPolicy {
  /**
   * List of access policy codes granted by this segment
   * @type {Array<string>}
   * @memberof SegmentPolicy
   */
  accessPolicies: Array<string>;
  /**
   * Vehicle-related policy configuration
   * @type {object}
   * @memberof SegmentPolicy
   */
  vehicle?: object;
}
