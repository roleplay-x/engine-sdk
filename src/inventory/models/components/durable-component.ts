import { ComponentType } from '../../enums/component-type';

/**
 * Durable component adding durability/wear mechanics to an item
 * @export
 * @interface DurableComponent
 */
export interface DurableComponent {
  /**
   * The type discriminator for the component
   * @type {typeof ComponentType.Durable}
   * @memberof DurableComponent
   */
  type: typeof ComponentType.Durable;
  /**
   * Custom attributes for the component
   * @type {Record<string, string>}
   * @memberof DurableComponent
   */
  attributes: Record<string, string>;
  /**
   * Maximum durability value
   * @type {number}
   * @memberof DurableComponent
   */
  maxDurability: number;
  /**
   * Durability lost per use
   * @type {number}
   * @memberof DurableComponent
   */
  lossPerUse: number;
  /**
   * Whether the item can be repaired
   * @type {boolean}
   * @memberof DurableComponent
   */
  repairable: boolean;
}
