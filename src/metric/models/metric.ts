import { MetricScopeDefinition } from './metric-scope-definition';
import { MetricValueType } from './metric-value-type';
import { MetricMainKey } from './metric-main-key';

/**
 * Represents a metric value with its definition and scope
 * @export
 * @type Metric
 */
export type Metric = {
  /**
   * Unique identifier for the metric
   * @type {string}
   * @memberof Metric
   */
  id: string;
  /**
   * ID of the reference this metric belongs to (account, character, etc.)
   * @type {string}
   * @memberof Metric
   */
  categoryReferenceId: string;
  /**
   * Main key identifying the metric type
   * @type {MetricMainKey}
   * @memberof Metric
   */
  key: MetricMainKey;
  /**
   * Sub-key for additional metric categorization
   * @type {string}
   * @memberof Metric
   */
  subKey?: string;
  /**
   * Scope definition for the metric
   * @type {MetricScopeDefinition}
   * @memberof Metric
   */
  scope?: MetricScopeDefinition;
  /**
   * Display name of the metric
   * @type {string}
   * @memberof Metric
   */
  name?: string;
  /**
   * Description of what this metric measures
   * @type {string}
   * @memberof Metric
   */
  description?: string;
} & (
  | {
      /**
       * Numeric value type
       * @type {MetricValueType.Number}
       * @memberof Metric
       */
      valueType: MetricValueType.Number;
      /**
       * Numeric value
       * @type {number}
       * @memberof Metric
       */
      value: number;
    }
  | {
      /**
       * Date value type
       * @type {MetricValueType.Date}
       * @memberof Metric
       */
      valueType: MetricValueType.Date;
      /**
       * Unix timestamp value
       * @type {number}
       * @memberof Metric
       */
      value: number;
    }
  | {
      /**
       * String value type
       * @type {MetricValueType.String}
       * @memberof Metric
       */
      valueType: MetricValueType.String;
      /**
       * String value
       * @type {string}
       * @memberof Metric
       */
      value: string;
    }
  | {
      /**
       * Boolean value type
       * @type {MetricValueType.Boolean}
       * @memberof Metric
       */
      valueType: MetricValueType.Boolean;
      /**
       * Boolean value
       * @type {boolean}
       * @memberof Metric
       */
      value: boolean;
    }
  | {
      /**
       * List value type
       * @type {MetricValueType.List}
       * @memberof Metric
       */
      valueType: MetricValueType.List;
      /**
       * Array of objects value
       * @type {object[]}
       * @memberof Metric
       */
      value: object[];
    }
  | {
      /**
       * Set value type
       * @type {MetricValueType.Set}
       * @memberof Metric
       */
      valueType: MetricValueType.Set;
      /**
       * Map of string keys to object values
       * @type {Map<string, object>}
       * @memberof Metric
       */
      value: Map<string, object>;
    }
);
