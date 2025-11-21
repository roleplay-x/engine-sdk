/**
 * Request to apply a segment to a reference (account, character, etc.)
 * @export
 * @interface ApplySegmentToReferenceRequest
 */
export interface ApplySegmentToReferenceRequest {
  /**
   * Unix timestamp when the segment expires, undefined for permanent assignment
   * @type {number}
   * @memberof ApplySegmentToReferenceRequest
   */
  validUntil?: number;
}
