import { StorageFileType } from './storage-file-type';

/**
 * Request to create presigned URLs for file upload
 * @export
 * @interface CreateStoragePresignedUrlsRequest
 */
export interface CreateStoragePresignedUrlsRequest {
  /**
   * Storage file definition ID
   * @type {StorageFileType}
   * @memberof CreateStoragePresignedUrlsRequest
   */
  definitionId: StorageFileType;
  /**
   * List of file names to upload
   * @type {string[]}
   * @memberof CreateStoragePresignedUrlsRequest
   */
  files: string[];
  /**
   * Additional path parameters
   * @type {Record<string, string>}
   * @memberof CreateStoragePresignedUrlsRequest
   */
  parameters?: Record<string, string>;
  /**
   * Whether to use the original file name
   * @type {boolean}
   * @memberof CreateStoragePresignedUrlsRequest
   */
  useFileName?: boolean;
}
