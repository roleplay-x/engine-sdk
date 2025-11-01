import { BlueprintAppearanceConfigConstraints } from './blueprint-appearance-config-constraints';

export interface BlueprintConfigConstraints {
  appearance?: BlueprintAppearanceConfigConstraints;
  segmentDefinitionIds?: ReadonlyArray<string>;
}
