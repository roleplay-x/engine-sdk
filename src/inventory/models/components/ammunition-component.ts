import { ComponentType } from '../../enums/component-type';

/**
 * Ammunition component marking the item as ammunition for weapons
 * @export
 * @interface AmmunitionComponent
 */
export interface AmmunitionComponent {
  /**
   * The type discriminator for the component
   * @type {typeof ComponentType.Ammunition}
   * @memberof AmmunitionComponent
   */
  type: typeof ComponentType.Ammunition;
  /**
   * Custom attributes for the component
   * @type {Record<string, string>}
   * @memberof AmmunitionComponent
   */
  attributes: Record<string, string>;
  /**
   * The ammo type ID
   * @type {string}
   * @memberof AmmunitionComponent
   */
  ammoTypeId: string;
  /**
   * Localized name of the ammo type
   * @type {string}
   * @memberof AmmunitionComponent
   */
  ammoTypeName?: string;
}
