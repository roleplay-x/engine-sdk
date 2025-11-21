/**
 * Request to update an existing animation pack
 */
export interface UpdateAnimationPackRequest {
  /**
   * Display name of the animation pack for administrative purposes.
   */
  name?: string;
  /**
   * Custom key-value attributes for storing additional metadata about the animation pack.
   */
  attributes?: Record<string, string>;
}
