/**
 * Request to update an existing animation pack item
 */
export interface UpdateAnimationPackItemRequest {
  /**
   * Display name of the animation pack item for administrative purposes.
   */
  name?: string;
  /**
   * Custom key-value attributes for storing additional metadata such as animation flags, loop settings, or blend parameters.
   */
  attributes?: Record<string, string>;
}
