import { ComponentType } from '../../enums/component-type';

/**
 * Information about a compatible ammo type
 * @export
 * @interface WeaponAmmoTypeInfo
 */
export interface WeaponAmmoTypeInfo {
  /**
   * The ammo type ID
   * @type {string}
   * @memberof WeaponAmmoTypeInfo
   */
  id: string;
  /**
   * Localized name of the ammo type
   * @type {string}
   * @memberof WeaponAmmoTypeInfo
   */
  name?: string;
}

/**
 * Weapon component defining combat properties
 * @export
 * @interface WeaponComponent
 */
export interface WeaponComponent {
  /**
   * The type discriminator for the component
   * @type {typeof ComponentType.Weapon}
   * @memberof WeaponComponent
   */
  type: typeof ComponentType.Weapon;
  /**
   * Custom attributes for the component
   * @type {Record<string, string>}
   * @memberof WeaponComponent
   */
  attributes: Record<string, string>;
  /**
   * The weapon class
   * @type {string}
   * @memberof WeaponComponent
   */
  weaponClass: string;
  /**
   * Localized name of the weapon class
   * @type {string}
   * @memberof WeaponComponent
   */
  weaponClassName?: string;
  /**
   * Base damage value
   * @type {number}
   * @memberof WeaponComponent
   */
  damage: number;
  /**
   * Effective range in meters
   * @type {number}
   * @memberof WeaponComponent
   */
  range: number;
  /**
   * Accuracy modifier (0-1 scale)
   * @type {number}
   * @memberof WeaponComponent
   */
  accuracy?: number;
  /**
   * Fire rate in rounds per minute
   * @type {number}
   * @memberof WeaponComponent
   */
  fireRate?: number;
  /**
   * Recoil modifier
   * @type {number}
   * @memberof WeaponComponent
   */
  recoil?: number;
  /**
   * List of compatible ammo types with their names
   * @type {ReadonlyArray<WeaponAmmoTypeInfo>}
   * @memberof WeaponComponent
   */
  ammoTypes?: ReadonlyArray<WeaponAmmoTypeInfo>;
  /**
   * Magazine capacity for ranged weapons
   * @type {number}
   * @memberof WeaponComponent
   */
  magazineCapacity?: number;
  /**
   * Swing speed for melee weapons
   * @type {number}
   * @memberof WeaponComponent
   */
  swingSpeed?: number;
}
