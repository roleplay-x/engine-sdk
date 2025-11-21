import { ReferenceCategory } from '../../reference/models/reference-category';
import { MetricKeyType, MetricSubKeyType } from './metric-key-type';
import { MetricValueType } from './metric-value-type';

/**
 * Defines a metric and its configuration
 * @export
 * @interface MetricDefinition
 */
export interface MetricDefinition {
  /**
   * Category this metric applies to (ACCOUNT, CHARACTER, VEHICLE)
   * @type {ReferenceCategory}
   * @memberof MetricDefinition
   */
  category: ReferenceCategory;
  /**
   * Display name of the category
   * @type {string}
   * @memberof MetricDefinition
   */
  categoryName: string;
  /**
   * Display name of the metric
   * @type {string}
   * @memberof MetricDefinition
   */
  name: string;
  /**
   * Description of what this metric measures
   * @type {string}
   * @memberof MetricDefinition
   */
  description: string;
  /**
   * Main key identifier for the metric
   * @type {string}
   * @memberof MetricDefinition
   */
  key: string;
  /**
   * Type of the main key
   * @type {MetricKeyType}
   * @memberof MetricDefinition
   */
  keyType: MetricKeyType;
  /**
   * Type of the sub-key
   * @type {MetricSubKeyType}
   * @memberof MetricDefinition
   */
  subKeyType: MetricSubKeyType;
  /**
   * Type of value this metric stores
   * @type {MetricValueType}
   * @memberof MetricDefinition
   */
  valueType: MetricValueType;
}
