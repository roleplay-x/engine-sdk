import { SegmentAccountPolicyRequest } from './segment-account-policy-request';

/**
 *
 * @export
 * @interface SegmentPolicyRequest
 */
export interface SegmentPolicyRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof SegmentPolicyRequest
   */
  accessPolicies?: Array<string> | null;
  /**
   *
   * @type {object}
   * @memberof SegmentPolicyRequest
   */
  vehicle?: object;
  /**
   *
   * @type {SegmentAccountPolicyRequest}
   * @memberof SegmentPolicyRequest
   */
  account?: SegmentAccountPolicyRequest;
}
