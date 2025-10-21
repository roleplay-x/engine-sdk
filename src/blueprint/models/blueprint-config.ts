import { BlueprintConfigConstraints } from './blueprint-config-constraints';
import { BlueprintConfigParameters } from './blueprint-config-parameters';
import { BlueprintConfigOption } from './blueprint-config-option';
import { BlueprintConfigColor } from './blueprint-config-color';

export interface BlueprintConfig {
  id: string;
  category: string;
  categoryName: string;
  sectionId: string;
  sectionKey: string;
  type: string;
  typeName: string;
  key: string;
  name: string;
  order: number;
  enabled: boolean;
  asset?: string;
  parameters: BlueprintConfigParameters;
  constraints: BlueprintConfigConstraints;
  options?: ReadonlyArray<BlueprintConfigOption>;
  colors?: ReadonlyArray<BlueprintConfigColor>;
}
