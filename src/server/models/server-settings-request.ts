import { ServerSettingsRequestType } from './server-settings-request-type';
import { ServerSettingsRequestStatus } from './server-settings-request-status';

/**
 * Server settings import/export request
 * @export
 * @interface ServerSettingsRequest
 */
export interface ServerSettingsRequest {
  /**
   * Request ID
   * @type {string}
   * @memberof ServerSettingsRequest
   */
  id: string;
  /**
   * Request type
   * @type {ServerSettingsRequestType}
   * @memberof ServerSettingsRequest
   */
  type: ServerSettingsRequestType;
  /**
   * File URL (for completed requests)
   * @type {string}
   * @memberof ServerSettingsRequest
   */
  fileUrl?: string;
  /**
   * Unix timestamp when the request was created
   * @type {number}
   * @memberof ServerSettingsRequest
   */
  createdDate: number;
  /**
   * Unix timestamp when the request was completed
   * @type {number}
   * @memberof ServerSettingsRequest
   */
  completedDate?: number;
  /**
   * Unix timestamp when the request was last modified
   * @type {number}
   * @memberof ServerSettingsRequest
   */
  lastModifiedDate: number;
  /**
   * Request status
   * @type {ServerSettingsRequestStatus}
   * @memberof ServerSettingsRequest
   */
  status: ServerSettingsRequestStatus;
  /**
   * Fields included in the request (for export)
   * @type {string[]}
   * @memberof ServerSettingsRequest
   */
  fields: string[];
}
