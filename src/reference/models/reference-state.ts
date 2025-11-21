/**
 * Represents a reference state
 */
export interface ReferenceState {
  /**
   * Unique identifier for the reference state entry.
   */
  id: string;

  /**
   * Reference category. Valid values: ACCOUNT, CHARACTER, VEHICLE
   */
  category: string;

  /**
   * Combined category and reference identifier in format 'category:referenceId'.
   */
  categoryReferenceId: string;

  /**
   * State type. Valid values: SERVER, CLIENT
   */
  type: string;

  /**
   * Key identifier for this specific state within the reference.
   */
  key: string;

  /**
   * JSON value containing the state data.
   */
  value: unknown;

  /**
   * Unix timestamp when the state was first created.
   */
  createdDate: number;

  /**
   * Unix timestamp of the most recent modification to this state.
   */
  lastModifiedDate: number;
}
