import { MetricScopeType } from './metric-scope-type';

/**
 * Defines a metric scope for time-based filtering
 * @export
 * @interface MetricScopeDefinition
 */
export interface MetricScopeDefinition {
  /**
   * Unique identifier for the scope
   * @type {string}
   * @memberof MetricScopeDefinition
   */
  id: string;
  /**
   * Type of the scope (DAILY, WEEKLY, MONTHLY, etc.)
   * @type {MetricScopeType}
   * @memberof MetricScopeDefinition
   */
  type: MetricScopeType;
  /**
   * Key identifier for the scope
   * @type {string}
   * @memberof MetricScopeDefinition
   */
  key: string;
  /**
   * Display name of the scope
   * @type {string}
   * @memberof MetricScopeDefinition
   */
  name?: string;
  /**
   * Description of the scope
   * @type {string}
   * @memberof MetricScopeDefinition
   */
  description?: string;
}
