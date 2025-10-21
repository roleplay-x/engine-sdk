import { BlueprintConfigConstraintsRequest } from './blueprint-config-constraints-request';

export interface CreateBlueprintConfigOptionRequest {
  defaultName?: string;
  key: string;
  value: string;
  asset?: string;
  enabled: boolean;
  constraints: BlueprintConfigConstraintsRequest;
}
