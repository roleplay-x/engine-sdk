/**
 * Account-specific policy configuration for a segment
 * @export
 * @interface SegmentAccountPolicyRequest
 */
export interface SegmentAccountPolicyRequest {
  /**
   * Maximum number of characters allowed for accounts with this segment
   * @type {number}
   * @memberof SegmentAccountPolicyRequest
   */
  maxCharacters?: number;
}
