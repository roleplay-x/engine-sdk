import { BlueprintConfigConstraints } from './blueprint-config-constraints';

export enum BlueprintConfigColorType {
  Rgb = 'RGB',
  Index = 'INDEX',
}

export interface BlueprintConfigColor {
  id: string;
  configId: string;
  key: string;
  name: string;
  type: BlueprintConfigColorType;
  hex: string;
  index?: string;
  order: number;
  enabled: boolean;
  isDefault: boolean;
  constraints: BlueprintConfigConstraints;
}
