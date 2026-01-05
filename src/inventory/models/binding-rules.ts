/**
 * Binding rules for segment-based binding
 * @export
 * @interface SegmentBindingRules
 */
export interface SegmentBindingRules {
  /**
   * List of segment definition IDs that trigger binding
   * @type {ReadonlyArray<string>}
   * @memberof SegmentBindingRules
   */
  segmentDefinitionIds: ReadonlyArray<string>;
}

/**
 * Binding rules for duty-based binding
 * @export
 * @interface DutyBindingRules
 */
export interface DutyBindingRules {
  /**
   * The duty ID that triggers binding
   * @type {string}
   * @memberof DutyBindingRules
   */
  dutyId: string;
}

/**
 * Binding rules for temporary binding
 * @export
 * @interface TemporaryBindingRules
 */
export interface TemporaryBindingRules {
  /**
   * Duration in milliseconds after which the item becomes unbound
   * @type {number}
   * @memberof TemporaryBindingRules
   */
  unbindAfterDuration?: number;
  /**
   * Duration in milliseconds after which the item is removed
   * @type {number}
   * @memberof TemporaryBindingRules
   */
  removeAfterDuration?: number;
  /**
   * Whether the item is removed on owner death
   * @type {boolean}
   * @memberof TemporaryBindingRules
   */
  removeOnDeath?: boolean;
}

/**
 * Rules that define how an item becomes bound to an owner
 * @export
 * @interface BindingRules
 */
export interface BindingRules {
  /**
   * Type of binding
   * @type {string}
   * @memberof BindingRules
   */
  type: string;
  /**
   * Segment-specific binding rules, required when Type is ON_SEGMENT
   * @type {SegmentBindingRules}
   * @memberof BindingRules
   */
  segment?: SegmentBindingRules;
  /**
   * Duty-specific binding rules, required when Type is ON_DUTY
   * @type {DutyBindingRules}
   * @memberof BindingRules
   */
  duty?: DutyBindingRules;
  /**
   * Temporary binding rules, required when Type is TEMPORARY
   * @type {TemporaryBindingRules}
   * @memberof BindingRules
   */
  temporary?: TemporaryBindingRules;
}
