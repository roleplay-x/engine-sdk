import { EffectTarget } from '../enums/effect-target';
import { EffectPolarity } from '../enums/effect-polarity';

/**
 * Effect type definition
 * @export
 * @interface EffectType
 */
export interface EffectType {
  /**
   * Unique identifier for the effect type
   * @type {string}
   * @memberof EffectType
   */
  id: string;
  /**
   * Localized display name of the effect type
   * @type {string}
   * @memberof EffectType
   */
  name: string;
  /**
   * Localized description of the effect type
   * @type {string}
   * @memberof EffectType
   */
  description?: string;
  /**
   * Target entity type this effect applies to
   * @type {EffectTarget}
   * @memberof EffectType
   */
  target: EffectTarget;
  /**
   * Whether higher or lower values are more beneficial
   * @type {EffectPolarity}
   * @memberof EffectType
   */
  polarity: EffectPolarity;
  /**
   * Initial value when the effect is first applied or reset
   * @type {number}
   * @memberof EffectType
   */
  initialValue: number;
  /**
   * List of value ranges defining different states/levels for this effect
   * @type {EffectRange[]}
   * @memberof EffectType
   */
  ranges: EffectRange[];
  /**
   * List of state modifiers that affect how this effect behaves based on character state
   * @type {EffectStateModifier[]}
   * @memberof EffectType
   */
  stateModifiers: EffectStateModifier[];
  /**
   * Indicates whether this effect type is enabled and available for use
   * @type {boolean}
   * @memberof EffectType
   */
  enabled: boolean;
  /**
   * Display order position for sorting effect types
   * @type {number}
   * @memberof EffectType
   */
  order: number;
  /**
   * Unix timestamp in milliseconds when the effect type was created
   * @type {number}
   * @memberof EffectType
   */
  createdDate: number;
  /**
   * Unix timestamp in milliseconds when the effect type was last modified
   * @type {number}
   * @memberof EffectType
   */
  lastModifiedDate: number;
}

/**
 * Effect range definition
 * @export
 * @interface EffectRange
 */
export interface EffectRange {
  /**
   * Unique key identifier for this range within the effect type
   * @type {string}
   * @memberof EffectRange
   */
  key: string;
  /**
   * Localized display name of the range (e.g., 'Critical', 'Low', 'Normal', 'High')
   * @type {string}
   * @memberof EffectRange
   */
  name: string;
  /**
   * Minimum value (inclusive) for this range
   * @type {number}
   * @memberof EffectRange
   */
  min: number;
  /**
   * Maximum value (inclusive) for this range
   * @type {number}
   * @memberof EffectRange
   */
  max: number;
  /**
   * Hex color code for visual representation of this range (e.g., '#FF0000' for critical)
   * @type {string}
   * @memberof EffectRange
   */
  color: string;
  /**
   * Additional key-value attributes for customizing range behavior or appearance
   * @type {Record<string, string>}
   * @memberof EffectRange
   */
  attributes: Record<string, string>;
}

/**
 * Effect state modifier definition
 * @export
 * @interface EffectStateModifier
 */
export interface EffectStateModifier {
  /**
   * Character state key that triggers this modifier
   * @type {string}
   * @memberof EffectStateModifier
   */
  state: string;
  /**
   * Multiplier applied to the effect change rate when in this state
   * @type {number}
   * @memberof EffectStateModifier
   */
  modifier: number;
}
