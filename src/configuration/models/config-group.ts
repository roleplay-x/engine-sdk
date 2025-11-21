import { Config } from './config';
import { ConfigGroupKey } from './config-keys';

/**
 * Groups related configuration values together
 * @export
 * @interface ConfigGroup
 */
export interface ConfigGroup {
  /**
   * Key identifier for the configuration group
   * @type {ConfigGroupKey}
   * @memberof ConfigGroup
   */
  groupKey: ConfigGroupKey;
  /**
   * Display name of the configuration group
   * @type {string}
   * @memberof ConfigGroup
   */
  groupName?: string;
  /**
   * Configuration values in this group
   * @type {Config[]}
   * @memberof ConfigGroup
   */
  configs: Config[];
  /**
   * Nested configuration groups
   * @type {ConfigGroup[]}
   * @memberof ConfigGroup
   */
  groups: ConfigGroup[];
}
