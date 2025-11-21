import { ReferenceStateDataRequest } from './reference-state-data-request';

/**
 * Request to update reference states
 */
export interface UpdateReferenceStatesRequest {
  /**
   * Array of state data to update
   */
  states: ReferenceStateDataRequest[];
}
