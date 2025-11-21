/**
 * Request to configure segment colors
 * @export
 * @interface SegmentColorRequest
 */
export interface SegmentColorRequest {
  /**
   * Background color in hex format (e.g., #FF5733)
   * @type {string}
   * @memberof SegmentColorRequest
   */
  background?: string;
  /**
   * Text color in hex format (e.g., #FFFFFF)
   * @type {string}
   * @memberof SegmentColorRequest
   */
  text?: string;
}
