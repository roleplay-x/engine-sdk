import { BlueprintConfigConstraintsRequest } from './blueprint-config-constraints-request';
import { BlueprintConfigParametersRequest } from './blueprint-config-parameters-request';
import { BlueprintConfigType } from './blueprint-config';

export interface CreateBlueprintConfigRequest {
  defaultName?: string;
  type: BlueprintConfigType;
  key: string;
  parameters: BlueprintConfigParametersRequest;
  asset?: string;
  enabled: boolean;
  constraints: BlueprintConfigConstraintsRequest;
}
