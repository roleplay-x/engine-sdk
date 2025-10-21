import { BlueprintConfig } from './blueprint-config';
import { BlueprintConfigConstraints } from './blueprint-config-constraints';

export interface BlueprintConfigSection {
  id: string;
  category: string;
  categoryName: string;
  key: string;
  name: string;
  asset?: string;
  parentSectionId?: string;
  order: number;
  enabled: boolean;
  constraints: BlueprintConfigConstraints;
  configs?: ReadonlyArray<BlueprintConfig>;
  subSections?: ReadonlyArray<BlueprintConfigSection>;
}
