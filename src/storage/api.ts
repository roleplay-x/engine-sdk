import { ApiOptions, EngineClient } from '../core/engine-client';
import { CreateStoragePresignedUrlsRequest } from './models/create-storage-presigned-urls-request';
import { PersistStorageFilesRequest } from './models/persist-storage-files-request';
import { StoragePresignedUrl } from './models/storage-presigned-url';
import { StorageFile } from './models/storage-file';

export class StorageApi {
  constructor(private readonly client: EngineClient) {}

  /**
   * It creates presigned URLs for uploading files to the storage.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:storage<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:storage<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create storage presigned URLs
   * @param {CreateStoragePresignedUrlsRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public createPresignedUrls(
    request: CreateStoragePresignedUrlsRequest,
    options?: ApiOptions,
  ): Promise<StoragePresignedUrl[]> {
    return this.client.post<CreateStoragePresignedUrlsRequest, StoragePresignedUrl[]>({
      url: 'storages/files',
      data: request,
      options,
    });
  }

  /**
   * It marks previously uploaded files as persisted in the storage.<br/>This endpoint performs server-level operations. The token does not need to be associated with any account or character.<br/><b>Account Policies</b>: account_policy:write:storage<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [API Key] <b>Required Scopes</b>: write:storage<br/>🔓 [SSO Token]<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Persist storage files
   * @param {PersistStorageFilesRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public persistFiles(
    request: PersistStorageFilesRequest,
    options?: ApiOptions,
  ): Promise<StorageFile[]> {
    return this.client.put<PersistStorageFilesRequest, StorageFile[]>({
      url: 'storages/files/persisted',
      data: request,
      options,
    });
  }
}
