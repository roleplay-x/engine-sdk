/**
 * Request to create an attachment point
 * @export
 * @interface CreateAttachmentPointRequest
 */
export interface CreateAttachmentPointRequest {
  /**
   * Unique identifier for the attachment point
   * @type {string}
   * @memberof CreateAttachmentPointRequest
   */
  id: string;
  /**
   * Default display name for the attachment point (used when no localization available)
   * @type {string}
   * @memberof CreateAttachmentPointRequest
   */
  defaultName: string;
  /**
   * URL to the icon image representing this attachment point
   * @type {string}
   * @memberof CreateAttachmentPointRequest
   */
  iconUrl?: string;
  /**
   * Whether the attachment point should be enabled upon creation
   * @type {boolean}
   * @memberof CreateAttachmentPointRequest
   */
  enabled: boolean;
}
