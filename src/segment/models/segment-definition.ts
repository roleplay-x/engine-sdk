import { SegmentPolicy } from './segment-policy';
import { SegmentStyle } from './segment-style';
import { JsonCondition } from '../../common/json-condition';
import { ReferenceCategory } from '../../reference/models/reference-category';
import { SegmentTypeCode } from './segment-type';

/**
 * Defines a segment template that can be assigned to references
 * @export
 * @interface SegmentDefinition
 */
export interface SegmentDefinition {
  /**
   * Unique identifier for the segment definition
   * @type {string}
   * @memberof SegmentDefinition
   */
  id: string;
  /**
   * Localized name of the segment definition
   * @type {string}
   * @memberof SegmentDefinition
   */
  name: string;
  /**
   * Type of the segment (MANUAL or AUTO)
   * @type {SegmentTypeCode}
   * @memberof SegmentDefinition
   */
  type: SegmentTypeCode;
  /**
   * Display name of the segment type
   * @type {string}
   * @memberof SegmentDefinition
   */
  typeName: string;
  /**
   * Category of references this segment can be applied to
   * @type {ReferenceCategory}
   * @memberof SegmentDefinition
   */
  category: ReferenceCategory;
  /**
   * Display name of the category
   * @type {string}
   * @memberof SegmentDefinition
   */
  categoryName: string;
  /**
   * Policy configuration for this segment definition
   * @type {SegmentPolicy}
   * @memberof SegmentDefinition
   */
  policy: SegmentPolicy;
  /**
   * Visual style configuration for this segment definition
   * @type {SegmentStyle}
   * @memberof SegmentDefinition
   */
  style: SegmentStyle;
  /**
   * Whether this segment definition is visible to users
   * @type {boolean}
   * @memberof SegmentDefinition
   */
  visible: boolean;
  /**
   * JSON condition for automatic segment assignment (only for AUTO type)
   * @type {JsonCondition}
   * @memberof SegmentDefinition
   */
  condition?: JsonCondition;
  /**
   * Unix timestamp when the segment definition was created
   * @type {number}
   * @memberof SegmentDefinition
   */
  createdDate: number;
  /**
   * Unix timestamp when the segment definition was last modified
   * @type {number}
   * @memberof SegmentDefinition
   */
  lastModifiedDate: number;
}
