import { BlueprintConfigConstraintsRequest } from './blueprint-config-constraints-request';
import { BlueprintConfigParametersRequest } from './blueprint-config-parameters-request';

export interface CreateBlueprintConfigRequest {
  defaultName?: string;
  type: string;
  key: string;
  parameters: BlueprintConfigParametersRequest;
  asset?: string;
  enabled: boolean;
  constraints: BlueprintConfigConstraintsRequest;
}
