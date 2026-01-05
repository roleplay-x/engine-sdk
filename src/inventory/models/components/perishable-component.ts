import { ComponentType } from '../../enums/component-type';

/**
 * Perishable component adding spoilage/decay mechanics to an item
 * @export
 * @interface PerishableComponent
 */
export interface PerishableComponent {
  /**
   * The type discriminator for the component
   * @type {typeof ComponentType.Perishable}
   * @memberof PerishableComponent
   */
  type: typeof ComponentType.Perishable;
  /**
   * Custom attributes for the component
   * @type {Record<string, string>}
   * @memberof PerishableComponent
   */
  attributes: Record<string, string>;
  /**
   * Duration in milliseconds until the item spoils
   * @type {number}
   * @memberof PerishableComponent
   */
  spoilDuration: number;
}
