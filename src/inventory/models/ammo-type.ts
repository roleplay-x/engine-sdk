/**
 * Represents an ammunition type in the inventory system
 * @export
 * @interface AmmoType
 */
export interface AmmoType {
  /**
   * Unique identifier for the ammo type
   * @type {string}
   * @memberof AmmoType
   */
  id: string;
  /**
   * Localized name of the ammo type
   * @type {string}
   * @memberof AmmoType
   */
  name: string;
  /**
   * Whether the ammo type is enabled
   * @type {boolean}
   * @memberof AmmoType
   */
  enabled: boolean;
  /**
   * Unix timestamp when the ammo type was created
   * @type {number}
   * @memberof AmmoType
   */
  createdDate: number;
  /**
   * Unix timestamp when the ammo type was last modified
   * @type {number}
   * @memberof AmmoType
   */
  lastModifiedDate: number;
}
