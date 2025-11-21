import { SegmentAccountPolicyRequest } from './segment-account-policy-request';

/**
 * Request to configure segment policies
 * @export
 * @interface SegmentPolicyRequest
 */
export interface SegmentPolicyRequest {
  /**
   * List of access policy codes to grant
   * @type {Array<string>}
   * @memberof SegmentPolicyRequest
   */
  accessPolicies?: Array<string>;
  /**
   * Vehicle-related policy configuration
   * @type {object}
   * @memberof SegmentPolicyRequest
   */
  vehicle?: object;
  /**
   * Account-specific policy configuration
   * @type {SegmentAccountPolicyRequest}
   * @memberof SegmentPolicyRequest
   */
  account?: SegmentAccountPolicyRequest;
}
