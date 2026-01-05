/**
 * Binding rules request that define when the item becomes bound to an owner
 * @export
 * @interface BindingRulesRequest
 */
export interface BindingRulesRequest {
  /**
   * Type of binding. Valid values: NONE, ON_PICKUP, ON_EQUIP, ON_USE, ON_SEGMENT, ON_DUTY, TEMPORARY
   * @type {string}
   * @memberof BindingRulesRequest
   */
  type: string;
  /**
   * Segment-specific binding rules, required when Type is ON_SEGMENT
   * @type {SegmentBindingRulesRequest}
   * @memberof BindingRulesRequest
   */
  segment?: SegmentBindingRulesRequest;
  /**
   * Duty-specific binding rules, required when Type is ON_DUTY
   * @type {DutyBindingRulesRequest}
   * @memberof BindingRulesRequest
   */
  duty?: DutyBindingRulesRequest;
  /**
   * Temporary binding rules, required when Type is TEMPORARY
   * @type {TemporaryBindingRulesRequest}
   * @memberof BindingRulesRequest
   */
  temporary?: TemporaryBindingRulesRequest;
}

/**
 * Segment-specific binding rules
 * @export
 * @interface SegmentBindingRulesRequest
 */
export interface SegmentBindingRulesRequest {
  /**
   * List of segment definition IDs that trigger binding
   * @type {string[]}
   * @memberof SegmentBindingRulesRequest
   */
  segmentDefinitionIds?: string[];
}

/**
 * Duty-specific binding rules
 * @export
 * @interface DutyBindingRulesRequest
 */
export interface DutyBindingRulesRequest {
  /**
   * The duty ID that triggers binding
   * @type {string}
   * @memberof DutyBindingRulesRequest
   */
  dutyId?: string;
}

/**
 * Temporary binding rules
 * @export
 * @interface TemporaryBindingRulesRequest
 */
export interface TemporaryBindingRulesRequest {
  /**
   * Duration in milliseconds after which the item becomes unbound
   * @type {number}
   * @memberof TemporaryBindingRulesRequest
   */
  unbindAfterDuration?: number;
  /**
   * Duration in milliseconds after which the item is removed
   * @type {number}
   * @memberof TemporaryBindingRulesRequest
   */
  removeAfterDuration?: number;
  /**
   * Whether the item is removed on owner death
   * @type {boolean}
   * @memberof TemporaryBindingRulesRequest
   */
  removeOnDeath?: boolean;
}
