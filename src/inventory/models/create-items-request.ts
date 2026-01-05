/**
 * Request to create one or more items
 * @export
 * @interface CreateItemsRequest
 */
export interface CreateItemsRequest {
  /**
   * Target location ID where items will be created (e.g., CHARACTER:123, CONTAINER:guid)
   * @type {string}
   * @memberof CreateItemsRequest
   */
  targetLocationId: string;
  /**
   * Target location type. Valid values: CONTAINER, WORLD, CHARACTER, VEHICLE, CRAFTING_STATION, ATTACHED
   * @type {string}
   * @memberof CreateItemsRequest
   */
  targetLocationType?: string;
  /**
   * List of items to create
   * @type {CreateItemDataRequest[]}
   * @memberof CreateItemsRequest
   */
  items: CreateItemDataRequest[];
  /**
   * Operation details for audit and tracking
   * @type {ItemOperationDetailsRequest}
   * @memberof CreateItemsRequest
   */
  operationDetails?: ItemOperationDetailsRequest;
}

/**
 * Data for a single item to create
 * @export
 * @interface CreateItemDataRequest
 */
export interface CreateItemDataRequest {
  /**
   * Item definition ID or definition code
   * @type {string}
   * @memberof CreateItemDataRequest
   */
  itemDefinitionId: string;
  /**
   * Amount of the item to create
   * @type {number}
   * @memberof CreateItemDataRequest
   */
  amount: number;
  /**
   * Optional state overrides for the new item
   * @type {ItemStateOverridesRequest}
   * @memberof CreateItemDataRequest
   */
  stateOverrides?: ItemStateOverridesRequest;
}

/**
 * Operation details for audit and tracking
 * @export
 * @interface ItemOperationDetailsRequest
 */
export interface ItemOperationDetailsRequest {
  /**
   * Category reference ID of the entity performing the operation
   * @type {string}
   * @memberof ItemOperationDetailsRequest
   */
  byCategoryReferenceId?: string;
  /**
   * Category reference ID of the entity the operation is for
   * @type {string}
   * @memberof ItemOperationDetailsRequest
   */
  forCategoryReferenceId?: string;
  /**
   * Additional custom data for the operation
   * @type {Record<string, string>}
   * @memberof ItemOperationDetailsRequest
   */
  data?: Record<string, string>;
}

/**
 * State overrides for creating items with custom initial state
 * @export
 * @interface ItemStateOverridesRequest
 */
export interface ItemStateOverridesRequest {
  /**
   * Durable state overrides
   * @type {DurableStateOverridesRequest}
   * @memberof ItemStateOverridesRequest
   */
  durable?: DurableStateOverridesRequest;
  /**
   * Usable state overrides
   * @type {UsableStateOverridesRequest}
   * @memberof ItemStateOverridesRequest
   */
  usable?: UsableStateOverridesRequest;
  /**
   * Weapon state overrides
   * @type {WeaponStateOverridesRequest}
   * @memberof ItemStateOverridesRequest
   */
  weapon?: WeaponStateOverridesRequest;
  /**
   * Perishable state overrides
   * @type {PerishableStateOverridesRequest}
   * @memberof ItemStateOverridesRequest
   */
  perishable?: PerishableStateOverridesRequest;
  /**
   * Binding state overrides
   * @type {BindingStateOverridesRequest}
   * @memberof ItemStateOverridesRequest
   */
  binding?: BindingStateOverridesRequest;
  /**
   * Container lock state overrides
   * @type {ContainerLockStateOverridesRequest}
   * @memberof ItemStateOverridesRequest
   */
  lock?: ContainerLockStateOverridesRequest;
  /**
   * Key state overrides
   * @type {KeyStateOverridesRequest}
   * @memberof ItemStateOverridesRequest
   */
  key?: KeyStateOverridesRequest;
  /**
   * Container state overrides
   * @type {ContainerStateOverridesRequest}
   * @memberof ItemStateOverridesRequest
   */
  container?: ContainerStateOverridesRequest;
  /**
   * Custom state data as key-value pairs
   * @type {Record<string, string>}
   * @memberof ItemStateOverridesRequest
   */
  data?: Record<string, string>;
}

/**
 * Durable state overrides
 * @export
 * @interface DurableStateOverridesRequest
 */
export interface DurableStateOverridesRequest {
  /**
   * Initial durability value (0-max)
   * @type {number}
   * @memberof DurableStateOverridesRequest
   */
  durability?: number;
}

/**
 * Usable state overrides
 * @export
 * @interface UsableStateOverridesRequest
 */
export interface UsableStateOverridesRequest {
  /**
   * Initial remaining uses
   * @type {number}
   * @memberof UsableStateOverridesRequest
   */
  remaining?: number;
  /**
   * Initial action state
   * @type {string}
   * @memberof UsableStateOverridesRequest
   */
  actionState?: string;
}

/**
 * Weapon state overrides
 * @export
 * @interface WeaponStateOverridesRequest
 */
export interface WeaponStateOverridesRequest {
  /**
   * Initial ammo loaded in the weapon
   * @type {number}
   * @memberof WeaponStateOverridesRequest
   */
  ammoLoaded?: number;
  /**
   * Initial ammo type ID
   * @type {string}
   * @memberof WeaponStateOverridesRequest
   */
  ammoTypeId?: string;
}

/**
 * Perishable state overrides
 * @export
 * @interface PerishableStateOverridesRequest
 */
export interface PerishableStateOverridesRequest {
  /**
   * Unix timestamp when the item was produced
   * @type {number}
   * @memberof PerishableStateOverridesRequest
   */
  productionTimestamp?: number;
  /**
   * Initial accumulated decay time in milliseconds
   * @type {number}
   * @memberof PerishableStateOverridesRequest
   */
  accumulatedDecayMs?: number;
}

/**
 * Binding state overrides
 * @export
 * @interface BindingStateOverridesRequest
 */
export interface BindingStateOverridesRequest {
  /**
   * Binding type. Valid values: NONE, SEGMENT, DUTY, TEMPORARY
   * @type {string}
   * @memberof BindingStateOverridesRequest
   */
  type?: string;
  /**
   * Expiration timestamp for temporary bindings
   * @type {number}
   * @memberof BindingStateOverridesRequest
   */
  expirationDate?: number;
  /**
   * ID of the entity to bind to
   * @type {string}
   * @memberof BindingStateOverridesRequest
   */
  boundToEntityId?: string;
  /**
   * Type of the entity to bind to
   * @type {string}
   * @memberof BindingStateOverridesRequest
   */
  boundToEntityType?: string;
}

/**
 * Container lock state overrides
 * @export
 * @interface ContainerLockStateOverridesRequest
 */
export interface ContainerLockStateOverridesRequest {
  /**
   * Whether the container is initially locked
   * @type {boolean}
   * @memberof ContainerLockStateOverridesRequest
   */
  isLocked?: boolean;
  /**
   * Hash of the key that can unlock this container
   * @type {string}
   * @memberof ContainerLockStateOverridesRequest
   */
  keyHash?: string;
  /**
   * Hash of the code that can unlock this container
   * @type {string}
   * @memberof ContainerLockStateOverridesRequest
   */
  codeHash?: string;
}

/**
 * Key state overrides
 * @export
 * @interface KeyStateOverridesRequest
 */
export interface KeyStateOverridesRequest {
  /**
   * Hash value that matches against container lock
   * @type {string}
   * @memberof KeyStateOverridesRequest
   */
  keyHash?: string;
  /**
   * Reference ID of the target this key unlocks
   * @type {string}
   * @memberof KeyStateOverridesRequest
   */
  targetReferenceId?: string;
  /**
   * Display name of the target this key unlocks
   * @type {string}
   * @memberof KeyStateOverridesRequest
   */
  targetName?: string;
}

/**
 * Container state overrides
 * @export
 * @interface ContainerStateOverridesRequest
 */
export interface ContainerStateOverridesRequest {
  /**
   * Initial occupied slots
   * @type {number}
   * @memberof ContainerStateOverridesRequest
   */
  slots?: number;
  /**
   * Initial weight of items in the container
   * @type {number}
   * @memberof ContainerStateOverridesRequest
   */
  weight?: number;
  /**
   * Initial volume of items in the container
   * @type {number}
   * @memberof ContainerStateOverridesRequest
   */
  volume?: number;
}
