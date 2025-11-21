/**
 * Request data for a reference state
 */
export interface ReferenceStateDataRequest {
  /**
   * State type. Valid values: SERVER, CLIENT
   */
  type?: string;

  /**
   * Unique key identifier for the state data. Used to retrieve and update specific state values.
   */
  key?: string;

  /**
   * State value as JSON. Can be any valid JSON type (string, number, boolean, object, array, null).
   */
  value?: unknown;
}
