import { ComponentType } from '../../enums/component-type';

/**
 * Currency component marking the item as currency for transactions
 * @export
 * @interface CurrencyComponent
 */
export interface CurrencyComponent {
  /**
   * The type discriminator for the component
   * @type {typeof ComponentType.Currency}
   * @memberof CurrencyComponent
   */
  type: typeof ComponentType.Currency;
  /**
   * Custom attributes for the component
   * @type {Record<string, string>}
   * @memberof CurrencyComponent
   */
  attributes: Record<string, string>;
}
