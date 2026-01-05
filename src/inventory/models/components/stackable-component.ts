import { ComponentType } from '../../enums/component-type';

/**
 * Stackable component allowing multiple units in a single slot
 * @export
 * @interface StackableComponent
 */
export interface StackableComponent {
  /**
   * The type discriminator for the component
   * @type {typeof ComponentType.Stackable}
   * @memberof StackableComponent
   */
  type: typeof ComponentType.Stackable;
  /**
   * Custom attributes for the component
   * @type {Record<string, string>}
   * @memberof StackableComponent
   */
  attributes: Record<string, string>;
  /**
   * Maximum amount that can be stacked in a single slot
   * @type {number}
   * @memberof StackableComponent
   */
  maxStackAmount: number;
}
