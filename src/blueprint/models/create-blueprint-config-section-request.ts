import { BlueprintConfigConstraintsRequest } from './blueprint-config-constraints-request';

export interface CreateBlueprintConfigSectionRequest {
  category: string;
  key: string;
  defaultName: string;
  parentSectionId?: string;
  constraints: BlueprintConfigConstraintsRequest;
  asset?: string;
  enabled: boolean;
}
