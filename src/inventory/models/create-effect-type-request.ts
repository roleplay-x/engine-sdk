/**
 * Request to create an effect type
 * @export
 * @interface CreateEffectTypeRequest
 */
export interface CreateEffectTypeRequest {
  /**
   * Unique identifier for the effect type
   * @type {string}
   * @memberof CreateEffectTypeRequest
   */
  id?: string;
  /**
   * Default display name shown when no localized name is available
   * @type {string}
   * @memberof CreateEffectTypeRequest
   */
  defaultName?: string;
  /**
   * Default description shown when no localized description is available
   * @type {string}
   * @memberof CreateEffectTypeRequest
   */
  description?: string;
  /**
   * Target entity type. Valid values: CHARACTER, ITEM, VEHICLE
   * @type {string}
   * @memberof CreateEffectTypeRequest
   */
  target?: string;
  /**
   * Whether higher or lower values are beneficial. Valid values: POSITIVE, NEGATIVE
   * @type {string}
   * @memberof CreateEffectTypeRequest
   */
  polarity?: string;
  /**
   * Initial value when the effect is first applied
   * @type {number}
   * @memberof CreateEffectTypeRequest
   */
  initialValue?: number;
  /**
   * List of value ranges defining different states for this effect
   * @type {EffectRangeRequest[]}
   * @memberof CreateEffectTypeRequest
   */
  ranges?: EffectRangeRequest[];
  /**
   * List of state modifiers affecting effect behavior
   * @type {EffectStateModifierRequest[]}
   * @memberof CreateEffectTypeRequest
   */
  stateModifiers?: EffectStateModifierRequest[];
  /**
   * Whether this effect type is enabled
   * @type {boolean}
   * @memberof CreateEffectTypeRequest
   */
  enabled?: boolean;
}

/**
 * Effect range request
 * @export
 * @interface EffectRangeRequest
 */
export interface EffectRangeRequest {
  /**
   * Unique key identifier for this range
   * @type {string}
   * @memberof EffectRangeRequest
   */
  key?: string;
  /**
   * Default display name for this range
   * @type {string}
   * @memberof EffectRangeRequest
   */
  defaultName?: string;
  /**
   * Minimum value (inclusive) for this range
   * @type {number}
   * @memberof EffectRangeRequest
   */
  min?: number;
  /**
   * Maximum value (inclusive) for this range
   * @type {number}
   * @memberof EffectRangeRequest
   */
  max?: number;
  /**
   * Hex color code for visual representation (e.g., '#FF0000')
   * @type {string}
   * @memberof EffectRangeRequest
   */
  color?: string;
  /**
   * Additional key-value attributes for customization
   * @type {Record<string, string>}
   * @memberof EffectRangeRequest
   */
  attributes?: Record<string, string>;
}

/**
 * Effect state modifier request
 * @export
 * @interface EffectStateModifierRequest
 */
export interface EffectStateModifierRequest {
  /**
   * Character state key that triggers this modifier
   * @type {string}
   * @memberof EffectStateModifierRequest
   */
  state?: string;
  /**
   * Multiplier applied to the effect change rate
   * @type {number}
   * @memberof EffectStateModifierRequest
   */
  modifier?: number;
}
