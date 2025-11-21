import { SegmentPolicyRequest } from './segment-policy-request';
import { SegmentStyleRequest } from './segment-style-request';
import { JsonCondition } from '../../common/json-condition';

/**
 * Request to partially update a segment definition
 * @export
 * @interface PatchSegmentDefinitionRequest
 */
export interface PatchSegmentDefinitionRequest {
  /**
   * Updated policy configuration for the segment definition
   * @type {SegmentPolicyRequest}
   * @memberof PatchSegmentDefinitionRequest
   */
  policy?: SegmentPolicyRequest;
  /**
   * Updated visual style configuration for the segment definition
   * @type {SegmentStyleRequest}
   * @memberof PatchSegmentDefinitionRequest
   */
  style?: SegmentStyleRequest;
  /**
   * Updated JSON condition for automatic segment assignment
   * @type {JsonCondition}
   * @memberof PatchSegmentDefinitionRequest
   */
  condition?: JsonCondition;
  /**
   * Whether the segment definition is enabled
   * @type {boolean}
   * @memberof PatchSegmentDefinitionRequest
   */
  enabled?: boolean;
  /**
   * Whether the segment definition is visible to users
   * @type {boolean}
   * @memberof PatchSegmentDefinitionRequest
   */
  visible?: boolean;
}
