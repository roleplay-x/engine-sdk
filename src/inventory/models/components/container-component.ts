import { ComponentType } from '../../enums/component-type';

/**
 * Access restrictions for a container
 * @export
 * @interface ContainerAccessRestrictions
 */
export interface ContainerAccessRestrictions {
  /**
   * Access type
   * @type {string}
   * @memberof ContainerAccessRestrictions
   */
  accessType: string;
  /**
   * Localized name of the access type
   * @type {string}
   * @memberof ContainerAccessRestrictions
   */
  accessTypeName?: string;
  /**
   * List of user IDs allowed to access
   * @type {ReadonlyArray<string>}
   * @memberof ContainerAccessRestrictions
   */
  allowedUserIds?: ReadonlyArray<string>;
  /**
   * List of segment definition IDs allowed to access
   * @type {ReadonlyArray<string>}
   * @memberof ContainerAccessRestrictions
   */
  allowedSegmentDefinitionIds?: ReadonlyArray<string>;
}

/**
 * Lock settings for a container
 * @export
 * @interface ContainerLockSettings
 */
export interface ContainerLockSettings {
  /**
   * Lock type
   * @type {string}
   * @memberof ContainerLockSettings
   */
  lockType: string;
  /**
   * Localized name of the lock type
   * @type {string}
   * @memberof ContainerLockSettings
   */
  lockTypeName?: string;
  /**
   * Required code length for CODE or BOTH lock types
   * @type {number}
   * @memberof ContainerLockSettings
   */
  codeLength?: number;
}

/**
 * Container component allowing the item to hold other items
 * @export
 * @interface ContainerComponent
 */
export interface ContainerComponent {
  /**
   * The type discriminator for the component
   * @type {typeof ComponentType.Container}
   * @memberof ContainerComponent
   */
  type: typeof ComponentType.Container;
  /**
   * Custom attributes for the component
   * @type {Record<string, string>}
   * @memberof ContainerComponent
   */
  attributes: Record<string, string>;
  /**
   * Maximum number of slots in the container
   * @type {number}
   * @memberof ContainerComponent
   */
  maxSlotCount?: number;
  /**
   * Maximum total weight the container can hold
   * @type {number}
   * @memberof ContainerComponent
   */
  maxWeight?: number;
  /**
   * Maximum total volume the container can hold
   * @type {number}
   * @memberof ContainerComponent
   */
  maxVolume?: number;
  /**
   * List of allowed item category IDs
   * @type {ReadonlyArray<string>}
   * @memberof ContainerComponent
   */
  allowedCategories?: ReadonlyArray<string>;
  /**
   * List of blocked item category IDs
   * @type {ReadonlyArray<string>}
   * @memberof ContainerComponent
   */
  blockedCategories?: ReadonlyArray<string>;
  /**
   * Access restrictions for the container
   * @type {ContainerAccessRestrictions}
   * @memberof ContainerComponent
   */
  accessRestrictions?: ContainerAccessRestrictions;
  /**
   * Lock settings for the container
   * @type {ContainerLockSettings}
   * @memberof ContainerComponent
   */
  lockSettings?: ContainerLockSettings;
  /**
   * Preservation factor affecting perishable items (0-1 scale)
   * @type {number}
   * @memberof ContainerComponent
   */
  preservationFactor?: number;
  /**
   * Layout type for visual representation
   * @type {string}
   * @memberof ContainerComponent
   */
  layout?: string;
  /**
   * Display order for multiple containers on same item
   * @type {number}
   * @memberof ContainerComponent
   */
  order: number;
}
