import { SegmentColor } from './segment-color';

/**
 * Visual style configuration for a segment
 * @export
 * @interface SegmentStyle
 */
export interface SegmentStyle {
  /**
   * Color configuration for the segment display
   * @type {SegmentColor}
   * @memberof SegmentStyle
   */
  color?: SegmentColor;
}
