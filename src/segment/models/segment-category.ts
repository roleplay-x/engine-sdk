import { ReferenceCategory } from '../../reference/models/reference-category';

/**
 * Describes a segment category and its capabilities
 * @export
 * @interface SegmentCategory
 */
export interface SegmentCategory {
  /**
   * Code identifier for the segment category
   * @type {ReferenceCategory}
   * @memberof SegmentCategory
   */
  code: ReferenceCategory;
  /**
   * Display name of the segment category
   * @type {string}
   * @memberof SegmentCategory
   */
  name: string;
  /**
   * Whether this category supports access policy configuration
   * @type {boolean}
   * @memberof SegmentCategory
   */
  supportsAccessPolicies: boolean;
}
