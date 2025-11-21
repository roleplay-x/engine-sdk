/**
 * Segment type codes
 * @export
 * @enum {string}
 */
export enum SegmentTypeCode {
  Manual = 'MANUAL',
  Auto = 'AUTO',
}

/**
 * Describes a segment type and its capabilities
 * @export
 * @interface SegmentType
 */
export interface SegmentType {
  /**
   * Code identifier for the segment type
   * @type {SegmentTypeCode}
   * @memberof SegmentType
   */
  code: SegmentTypeCode;
  /**
   * Display name of the segment type
   * @type {string}
   * @memberof SegmentType
   */
  name: string;
  /**
   * Description of what this segment type does
   * @type {string}
   * @memberof SegmentType
   */
  description: string;
  /**
   * Whether this segment type supports metric-based conditions
   * @type {boolean}
   * @memberof SegmentType
   */
  supportsMetrics: boolean;
}
