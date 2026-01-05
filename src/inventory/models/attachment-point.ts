/**
 * Represents an attachment point for items
 * @export
 * @interface AttachmentPoint
 */
export interface AttachmentPoint {
  /**
   * Unique identifier for the attachment point
   * @type {string}
   * @memberof AttachmentPoint
   */
  id: string;
  /**
   * Localized name of the attachment point
   * @type {string}
   * @memberof AttachmentPoint
   */
  name: string;
  /**
   * URL to the attachment point icon
   * @type {string}
   * @memberof AttachmentPoint
   */
  iconUrl?: string;
  /**
   * Display order of the attachment point
   * @type {number}
   * @memberof AttachmentPoint
   */
  order: number;
  /**
   * Whether the attachment point is enabled
   * @type {boolean}
   * @memberof AttachmentPoint
   */
  enabled: boolean;
  /**
   * Unix timestamp when the attachment point was created
   * @type {number}
   * @memberof AttachmentPoint
   */
  createdDate: number;
  /**
   * Unix timestamp when the attachment point was last modified
   * @type {number}
   * @memberof AttachmentPoint
   */
  lastModifiedDate: number;
}
