/**
 * Presigned URL for direct file upload
 * @export
 * @interface StoragePresignedUrl
 */
export interface StoragePresignedUrl {
  /**
   * Unique file identifier
   * @type {string}
   * @memberof StoragePresignedUrl
   */
  fileId: string;
  /**
   * File name
   * @type {string}
   * @memberof StoragePresignedUrl
   */
  name: string;
  /**
   * Presigned URL for file upload
   * @type {string}
   * @memberof StoragePresignedUrl
   */
  presignedUrl: string;
  /**
   * Required headers for the upload request
   * @type {Record<string, string>}
   * @memberof StoragePresignedUrl
   */
  headers: Record<string, string>;
  /**
   * Unix timestamp when the URL expires
   * @type {number}
   * @memberof StoragePresignedUrl
   */
  expiresAt: number;
}
