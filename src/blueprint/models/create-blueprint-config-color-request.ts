import { BlueprintConfigConstraintsRequest } from './blueprint-config-constraints-request';

export interface CreateBlueprintConfigColorRequest {
  defaultName?: string;
  key: string;
  type: string;
  hex: string;
  index?: string;
  enabled: boolean;
  constraints: BlueprintConfigConstraintsRequest;
}
