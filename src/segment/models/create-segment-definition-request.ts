import { JsonCondition } from '../../common/json-condition';
import { SegmentPolicyRequest } from './segment-policy-request';
import { SegmentStyleRequest } from './segment-style-request';

/**
 * Request to create a new segment definition
 * @export
 * @interface CreateSegmentDefinitionRequest
 */
export interface CreateSegmentDefinitionRequest {
  /**
   * Custom ID for the segment definition, auto-generated if not provided
   * @type {string}
   * @memberof CreateSegmentDefinitionRequest
   */
  id?: string;
  /**
   * Default name for the segment definition (used when no localization exists)
   * @type {string}
   * @memberof CreateSegmentDefinitionRequest
   */
  defaultName?: string;
  /**
   * Type code of the segment (MANUAL or AUTO)
   * @type {string}
   * @memberof CreateSegmentDefinitionRequest
   */
  type?: string;
  /**
   * Category code this segment applies to (ACCOUNT, CHARACTER, etc.)
   * @type {string}
   * @memberof CreateSegmentDefinitionRequest
   */
  category?: string;
  /**
   * Policy configuration for the segment definition
   * @type {SegmentPolicyRequest}
   * @memberof CreateSegmentDefinitionRequest
   */
  policy?: SegmentPolicyRequest;
  /**
   * Visual style configuration for the segment definition
   * @type {SegmentStyleRequest}
   * @memberof CreateSegmentDefinitionRequest
   */
  style?: SegmentStyleRequest;
  /**
   * JSON condition for automatic segment assignment (only for AUTO type)
   * @type {JsonCondition}
   * @memberof CreateSegmentDefinitionRequest
   */
  condition?: JsonCondition;
  /**
   * Whether this segment definition is visible to users
   * @type {boolean}
   * @memberof CreateSegmentDefinitionRequest
   */
  visible: boolean;
}
