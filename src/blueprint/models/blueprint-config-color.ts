import { BlueprintConfigConstraints } from './blueprint-config-constraints';

export interface BlueprintConfigColor {
  id: string;
  configId: string;
  key: string;
  name: string;
  type: string;
  hex: string;
  index?: string;
  order: number;
  enabled: boolean;
  isDefault: boolean;
  constraints: BlueprintConfigConstraints;
}
