import { ConfigKey } from './config-keys';
import { ConfigDefinitionsMap } from './config-definition';
import { ConfigType } from './config-types';

/**
 * Select option for configuration values
 * @export
 * @interface ConfigSelectOptionValue
 */
export interface ConfigSelectOptionValue {
  /**
   * Option key identifier
   * @type {string}
   */
  key: string;
  /**
   * Option display value
   * @type {string}
   */
  value: string;
}

/**
 * Configuration value with metadata
 * @export
 * @type Config
 */
export type Config = {
  [K in ConfigKey]: {
    /**
     * Configuration key identifier
     */
    key: K;
    /**
     * Configuration value
     */
    value: ConfigDefinitionsMap[K];
    /**
     * Display name of the configuration
     */
    name?: string;
    /**
     * Description of the configuration
     */
    description?: string;
    /**
     * Type of the configuration value
     */
    type: ConfigType;
    /**
     * Whether this configuration can be edited
     */
    editable: boolean;
    /**
     * Available options for select-type configurations
     */
    options?: ConfigSelectOptionValue[];
  };
}[ConfigKey];
