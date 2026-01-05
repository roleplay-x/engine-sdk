import { EffectRangeRequest, EffectStateModifierRequest } from './create-effect-type-request';

/**
 * Request to update an effect type
 * @export
 * @interface UpdateEffectTypeRequest
 */
export interface UpdateEffectTypeRequest {
  /**
   * Target entity type. Valid values: CHARACTER, ITEM, VEHICLE
   * @type {string}
   * @memberof UpdateEffectTypeRequest
   */
  target?: string;
  /**
   * Whether higher or lower values are beneficial. Valid values: POSITIVE, NEGATIVE
   * @type {string}
   * @memberof UpdateEffectTypeRequest
   */
  polarity?: string;
  /**
   * Initial value when the effect is first applied
   * @type {number}
   * @memberof UpdateEffectTypeRequest
   */
  initialValue?: number;
  /**
   * List of value ranges defining different states for this effect
   * @type {EffectRangeRequest[]}
   * @memberof UpdateEffectTypeRequest
   */
  ranges?: EffectRangeRequest[];
  /**
   * List of state modifiers affecting effect behavior
   * @type {EffectStateModifierRequest[]}
   * @memberof UpdateEffectTypeRequest
   */
  stateModifiers?: EffectStateModifierRequest[];
}
