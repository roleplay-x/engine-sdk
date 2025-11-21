import { SegmentColorRequest } from './segment-color-request';

/**
 * Request to configure segment visual style
 * @export
 * @interface SegmentStyleRequest
 */
export interface SegmentStyleRequest {
  /**
   * Color configuration for the segment display
   * @type {SegmentColorRequest}
   * @memberof SegmentStyleRequest
   */
  color?: SegmentColorRequest;
}
