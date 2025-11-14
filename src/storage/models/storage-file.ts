/**
 * Storage file information
 * @export
 * @interface StorageFile
 */
export interface StorageFile {
  /**
   * Unique file identifier
   * @type {string}
   * @memberof StorageFile
   */
  id: string;
  /**
   * File name
   * @type {string}
   * @memberof StorageFile
   */
  name: string;
  /**
   * MIME type of the file
   * @type {string}
   * @memberof StorageFile
   */
  mimeType: string;
  /**
   * File size in bytes
   * @type {number}
   * @memberof StorageFile
   */
  size: number;
  /**
   * Whether the file has restricted access
   * @type {boolean}
   * @memberof StorageFile
   */
  isRestricted: boolean;
  /**
   * Storage definition identifier
   * @type {string}
   * @memberof StorageFile
   */
  definitionId: string;
  /**
   * Public URL of the file (if not restricted)
   * @type {string}
   * @memberof StorageFile
   */
  url?: string;
  /**
   * File processing status
   * @type {string}
   * @memberof StorageFile
   */
  status: string;
  /**
   * Unix timestamp when the file was created
   * @type {number}
   * @memberof StorageFile
   */
  createdDate: number;
}
