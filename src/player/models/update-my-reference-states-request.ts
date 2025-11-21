import { MyReferenceStateDataRequest } from './my-reference-state-data-request';

/**
 * Request to update player's reference states
 */
export interface UpdateMyReferenceStatesRequest {
  /**
   * Array of state data to update
   */
  states: MyReferenceStateDataRequest[];
}
