import { SegmentPolicy } from './segment-policy';
import { SegmentStyle } from './segment-style';
import { SegmentTypeCode } from './segment-type';
import { ReferenceCategory } from '../../reference/models/reference-category';

/**
 * Represents a segment assigned to a reference (account, character, etc.)
 * @export
 * @interface Segment
 */
export interface Segment {
  /**
   * Unique identifier for this segment instance
   * @type {string}
   * @memberof Segment
   */
  id: string;
  /**
   * ID of the segment definition this segment is based on
   * @type {string}
   * @memberof Segment
   */
  segmentDefinitionId: string;
  /**
   * Localized name of the segment
   * @type {string}
   * @memberof Segment
   */
  name: string;
  /**
   * Type of the segment (MANUAL or AUTO)
   * @type {SegmentTypeCode}
   * @memberof Segment
   */
  type: SegmentTypeCode;
  /**
   * Display name of the segment type
   * @type {string}
   * @memberof Segment
   */
  typeName: string;
  /**
   * Category of the reference this segment applies to
   * @type {ReferenceCategory}
   * @memberof Segment
   */
  category: ReferenceCategory;
  /**
   * Display name of the category
   * @type {string}
   * @memberof Segment
   */
  categoryName: string;
  /**
   * ID of the reference (account, character, etc.) this segment is assigned to
   * @type {string}
   * @memberof Segment
   */
  referenceId: string;
  /**
   * Name of the reference this segment is assigned to
   * @type {string}
   * @memberof Segment
   */
  referenceName: string;
  /**
   * Policy configuration for this segment (access policies, etc.)
   * @type {SegmentPolicy}
   * @memberof Segment
   */
  policy: SegmentPolicy;
  /**
   * Visual style configuration for this segment
   * @type {SegmentStyle}
   * @memberof Segment
   */
  style: SegmentStyle;
  /**
   * Unix timestamp when this segment expires, undefined if permanent
   * @type {number}
   * @memberof Segment
   */
  validUntil?: number;
  /**
   * Whether this segment is visible to users
   * @type {boolean}
   * @memberof Segment
   */
  visible: boolean;
  /**
   * Unix timestamp when the segment was created
   * @type {number}
   * @memberof Segment
   */
  createdDate: number;
  /**
   * Unix timestamp when the segment was last modified
   * @type {number}
   * @memberof Segment
   */
  lastModifiedDate: number;
}
