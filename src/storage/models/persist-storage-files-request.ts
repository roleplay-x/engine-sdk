import { StorageFileType } from './storage-file-type';

/**
 * Request to persist uploaded files
 * @export
 * @interface PersistStorageFilesRequest
 */
export interface PersistStorageFilesRequest {
  /**
   * List of file IDs to persist
   * @type {string[]}
   * @memberof PersistStorageFilesRequest
   */
  fileIds: string[];
  /**
   * Expected file definition ID for validation
   * @type {StorageFileType}
   * @memberof PersistStorageFilesRequest
   */
  expectedDefinitionId?: StorageFileType;
}
