import { BindType } from '../enums/bind-type';

/**
 * Durable component runtime state
 * @export
 * @interface DurableState
 */
export interface DurableState {
  /**
   * Current durability value (0-max)
   * @type {number}
   * @memberof DurableState
   */
  durability: number;
}

/**
 * Usable component runtime state
 * @export
 * @interface UsableState
 */
export interface UsableState {
  /**
   * Remaining uses (undefined if unlimited)
   * @type {number}
   * @memberof UsableState
   */
  remaining?: number;
  /**
   * Action cooldowns as action name to expiration timestamp
   * @type {Record<string, number>}
   * @memberof UsableState
   */
  actionCooldowns?: Record<string, number>;
  /**
   * Current action state
   * @type {string}
   * @memberof UsableState
   */
  actionState?: string;
}

/**
 * Weapon component runtime state
 * @export
 * @interface WeaponState
 */
export interface WeaponState {
  /**
   * Current ammo loaded in the weapon
   * @type {number}
   * @memberof WeaponState
   */
  ammoLoaded?: number;
  /**
   * Current ammo type ID loaded
   * @type {string}
   * @memberof WeaponState
   */
  ammoTypeId?: string;
}

/**
 * Perishable component runtime state
 * @export
 * @interface PerishableState
 */
export interface PerishableState {
  /**
   * Unix timestamp when the item was produced
   * @type {number}
   * @memberof PerishableState
   */
  productionTimestamp: number;
  /**
   * Unix timestamp when the item was last moved
   * @type {number}
   * @memberof PerishableState
   */
  lastLocationTimestamp: number;
  /**
   * Total accumulated decay time in milliseconds
   * @type {number}
   * @memberof PerishableState
   */
  accumulatedDecayMs: number;
}

/**
 * Binding state of an item
 * @export
 * @interface BindingState
 */
export interface BindingState {
  /**
   * Binding type
   * @type {BindType}
   * @memberof BindingState
   */
  type: BindType;
  /**
   * Expiration timestamp for temporary bindings
   * @type {number}
   * @memberof BindingState
   */
  expirationDate?: number;
  /**
   * ID of the entity this item is bound to
   * @type {string}
   * @memberof BindingState
   */
  boundToEntityId?: string;
  /**
   * Type of the entity this item is bound to
   * @type {string}
   * @memberof BindingState
   */
  boundToEntityType?: string;
}

/**
 * Container lock state
 * @export
 * @interface ContainerLockState
 */
export interface ContainerLockState {
  /**
   * Hash of the key that can unlock this container
   * @type {string}
   * @memberof ContainerLockState
   */
  keyHash?: string;
  /**
   * Hash of the code that can unlock this container
   * @type {string}
   * @memberof ContainerLockState
   */
  codeHash?: string;
  /**
   * Whether the container is currently locked
   * @type {boolean}
   * @memberof ContainerLockState
   */
  isLocked: boolean;
}

/**
 * Container runtime state for items that can hold other items
 * @export
 * @interface ContainerState
 */
export interface ContainerState {
  /**
   * Number of occupied slots
   * @type {number}
   * @memberof ContainerState
   */
  slots: number;
  /**
   * Total weight of items in the container
   * @type {number}
   * @memberof ContainerState
   */
  weight: number;
  /**
   * Total volume of items in the container
   * @type {number}
   * @memberof ContainerState
   */
  volume: number;
}

/**
 * Key state for items that can unlock containers
 * @export
 * @interface KeyState
 */
export interface KeyState {
  /**
   * Hash value that matches against container lock
   * @type {string}
   * @memberof KeyState
   */
  keyHash: string;
  /**
   * Reference ID of the target this key unlocks
   * @type {string}
   * @memberof KeyState
   */
  targetReferenceId: string;
  /**
   * Display name of the target this key unlocks
   * @type {string}
   * @memberof KeyState
   */
  targetName?: string;
}

/**
 * Represents an attachment currently attached to an item
 * @export
 * @interface ItemAttachment
 */
export interface ItemAttachment {
  /**
   * Attachment point identifier
   * @type {string}
   * @memberof ItemAttachment
   */
  attachmentPoint: string;
  /**
   * ID of the attached item
   * @type {string}
   * @memberof ItemAttachment
   */
  itemId: string;
}

/**
 * Represents the runtime state of an item instance
 * @export
 * @interface ItemState
 */
export interface ItemState {
  /**
   * Durable component state (durability tracking)
   * @type {DurableState}
   * @memberof ItemState
   */
  durable?: DurableState;
  /**
   * Usable component state (uses remaining, cooldowns)
   * @type {UsableState}
   * @memberof ItemState
   */
  usable?: UsableState;
  /**
   * Weapon component state (ammo loaded, ammo type)
   * @type {WeaponState}
   * @memberof ItemState
   */
  weapon?: WeaponState;
  /**
   * List of attachments currently attached to this item
   * @type {ReadonlyArray<ItemAttachment>}
   * @memberof ItemState
   */
  attachments?: ReadonlyArray<ItemAttachment>;
  /**
   * Perishable component state (decay tracking)
   * @type {PerishableState}
   * @memberof ItemState
   */
  perishable?: PerishableState;
  /**
   * Binding state (bound to entity, expiration)
   * @type {BindingState}
   * @memberof ItemState
   */
  binding: BindingState;
  /**
   * Container lock state (locked status, key/code hash)
   * @type {ContainerLockState}
   * @memberof ItemState
   */
  lock?: ContainerLockState;
  /**
   * Container state (occupied slots, weight, volume)
   * @type {ContainerState}
   * @memberof ItemState
   */
  container?: ContainerState;
  /**
   * Key state (key hash, target reference)
   * @type {KeyState}
   * @memberof ItemState
   */
  key?: KeyState;
  /**
   * Custom state data as key-value pairs
   * @type {Record<string, string>}
   * @memberof ItemState
   */
  data: Record<string, string>;
}
