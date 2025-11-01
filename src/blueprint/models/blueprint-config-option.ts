import { BlueprintConfigConstraints } from './blueprint-config-constraints';

export interface BlueprintConfigOption {
  id: string;
  configId: string;
  key: string;
  name: string;
  value: string;
  asset?: string;
  order: number;
  enabled: boolean;
  isDefault: boolean;
  constraints: BlueprintConfigConstraints;
}
