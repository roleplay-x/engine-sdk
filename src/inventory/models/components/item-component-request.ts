import { ComponentType } from '../../enums/component-type';

/**
 * Base interface for item component requests
 * @export
 * @interface ItemComponentRequestBase
 */
export interface ItemComponentRequestBase {
  /**
   * The component type discriminator
   * @type {ComponentType}
   * @memberof ItemComponentRequestBase
   */
  type: ComponentType;
  /**
   * Custom attributes for the component
   * @type {Record<string, string>}
   * @memberof ItemComponentRequestBase
   */
  attributes?: Record<string, string>;
}

/**
 * Component effect request
 * @export
 * @interface ComponentEffectRequest
 */
export interface ComponentEffectRequest {
  /**
   * The effect type ID
   * @type {string}
   * @memberof ComponentEffectRequest
   */
  effectTypeId: string;
  /**
   * The value/magnitude of the effect
   * @type {number}
   * @memberof ComponentEffectRequest
   */
  value: number;
}

/**
 * Weapon component request defining combat properties
 * @export
 * @interface WeaponComponentRequest
 */
export interface WeaponComponentRequest extends ItemComponentRequestBase {
  type: typeof ComponentType.Weapon;
  /**
   * The weapon class. Valid values: MELEE, PISTOL, SMG, RIFLE, SHOTGUN, SNIPER, HEAVY, THROWABLE
   * @type {string}
   * @memberof WeaponComponentRequest
   */
  weaponClass: string;
  /**
   * Base damage value
   * @type {number}
   * @memberof WeaponComponentRequest
   */
  damage: number;
  /**
   * Effective range in meters
   * @type {number}
   * @memberof WeaponComponentRequest
   */
  range: number;
  /**
   * Accuracy modifier (0-1 scale)
   * @type {number}
   * @memberof WeaponComponentRequest
   */
  accuracy?: number;
  /**
   * Fire rate in rounds per minute
   * @type {number}
   * @memberof WeaponComponentRequest
   */
  fireRate?: number;
  /**
   * Recoil modifier
   * @type {number}
   * @memberof WeaponComponentRequest
   */
  recoil?: number;
  /**
   * List of compatible ammo type IDs
   * @type {string[]}
   * @memberof WeaponComponentRequest
   */
  ammoTypeIds?: string[];
  /**
   * Magazine capacity for ranged weapons
   * @type {number}
   * @memberof WeaponComponentRequest
   */
  magazineCapacity?: number;
  /**
   * Swing speed for melee weapons
   * @type {number}
   * @memberof WeaponComponentRequest
   */
  swingSpeed?: number;
}

/**
 * Container access restrictions request
 * @export
 * @interface ContainerAccessRestrictionsRequest
 */
export interface ContainerAccessRestrictionsRequest {
  /**
   * Access type. Valid values: OPEN, RESTRICTED, LOCKED
   * @type {string}
   * @memberof ContainerAccessRestrictionsRequest
   */
  accessType: string;
  /**
   * List of user IDs allowed to access
   * @type {string[]}
   * @memberof ContainerAccessRestrictionsRequest
   */
  allowedUserIds?: string[];
  /**
   * List of segment definition IDs allowed to access
   * @type {string[]}
   * @memberof ContainerAccessRestrictionsRequest
   */
  allowedSegmentDefinitionIds?: string[];
}

/**
 * Container lock settings request
 * @export
 * @interface ContainerLockSettingsRequest
 */
export interface ContainerLockSettingsRequest {
  /**
   * Lock type. Valid values: NONE, CODE, KEY, BOTH
   * @type {string}
   * @memberof ContainerLockSettingsRequest
   */
  lockType: string;
  /**
   * Required code length for CODE or BOTH lock types
   * @type {number}
   * @memberof ContainerLockSettingsRequest
   */
  codeLength?: number;
}

/**
 * Container component request allowing the item to hold other items
 * @export
 * @interface ContainerComponentRequest
 */
export interface ContainerComponentRequest extends ItemComponentRequestBase {
  type: typeof ComponentType.Container;
  /**
   * Maximum number of slots in the container
   * @type {number}
   * @memberof ContainerComponentRequest
   */
  maxSlotCount?: number;
  /**
   * Maximum total weight the container can hold
   * @type {number}
   * @memberof ContainerComponentRequest
   */
  maxWeight?: number;
  /**
   * Maximum total volume the container can hold
   * @type {number}
   * @memberof ContainerComponentRequest
   */
  maxVolume?: number;
  /**
   * List of allowed item category IDs
   * @type {string[]}
   * @memberof ContainerComponentRequest
   */
  allowedCategories?: string[];
  /**
   * List of blocked item category IDs
   * @type {string[]}
   * @memberof ContainerComponentRequest
   */
  blockedCategories?: string[];
  /**
   * Access restrictions for the container
   * @type {ContainerAccessRestrictionsRequest}
   * @memberof ContainerComponentRequest
   */
  accessRestrictions?: ContainerAccessRestrictionsRequest;
  /**
   * Lock settings for the container
   * @type {ContainerLockSettingsRequest}
   * @memberof ContainerComponentRequest
   */
  lockSettings?: ContainerLockSettingsRequest;
  /**
   * Preservation factor affecting perishable items (0-1 scale)
   * @type {number}
   * @memberof ContainerComponentRequest
   */
  preservationFactor?: number;
  /**
   * Layout type for visual representation
   * @type {string}
   * @memberof ContainerComponentRequest
   */
  layout?: string;
  /**
   * Display order for multiple containers on same item
   * @type {number}
   * @memberof ContainerComponentRequest
   */
  order?: number;
}

/**
 * Usable target request
 * @export
 * @interface UsableTargetRequest
 */
export interface UsableTargetRequest {
  /**
   * Target type. Valid values: SELF, OTHER, ITEM, WORLD
   * @type {string}
   * @memberof UsableTargetRequest
   */
  targetType: string;
  /**
   * Range in meters for targeting
   * @type {number}
   * @memberof UsableTargetRequest
   */
  range?: number;
  /**
   * Target item categories if targeting items
   * @type {string[]}
   * @memberof UsableTargetRequest
   */
  categories?: string[];
}

/**
 * Usable skill requirement request
 * @export
 * @interface UsableSkillRequirementRequest
 */
export interface UsableSkillRequirementRequest {
  /**
   * Required skill ID
   * @type {string}
   * @memberof UsableSkillRequirementRequest
   */
  skillId: string;
  /**
   * Minimum skill level required
   * @type {number}
   * @memberof UsableSkillRequirementRequest
   */
  minLevel?: number;
}

/**
 * Usable state definition request
 * @export
 * @interface UsableStateDefinitionRequest
 */
export interface UsableStateDefinitionRequest {
  /**
   * Unique state identifier
   * @type {string}
   * @memberof UsableStateDefinitionRequest
   */
  stateId: string;
  /**
   * Icon URL for this state
   * @type {string}
   * @memberof UsableStateDefinitionRequest
   */
  iconUrl?: string;
  /**
   * Custom attributes for this state
   * @type {Record<string, string>}
   * @memberof UsableStateDefinitionRequest
   */
  attributes?: Record<string, string>;
}

/**
 * Usable action condition request
 * @export
 * @interface UsableActionConditionRequest
 */
export interface UsableActionConditionRequest {
  /**
   * States in which the action is allowed
   * @type {string[]}
   * @memberof UsableActionConditionRequest
   */
  allowedStates?: string[];
  /**
   * States in which the action is blocked
   * @type {string[]}
   * @memberof UsableActionConditionRequest
   */
  blockedStates?: string[];
  /**
   * Additional flags required. Valid values: REQUIRE_AMMO, REQUIRE_EMPTY, REQUIRE_FULL
   * @type {string[]}
   * @memberof UsableActionConditionRequest
   */
  flags?: string[];
}

/**
 * Usable action request
 * @export
 * @interface UsableActionRequest
 */
export interface UsableActionRequest {
  /**
   * Unique action identifier
   * @type {string}
   * @memberof UsableActionRequest
   */
  actionId: string;
  /**
   * Duration in milliseconds to perform the action
   * @type {number}
   * @memberof UsableActionRequest
   */
  duration?: number;
  /**
   * Cooldown in milliseconds between uses
   * @type {number}
   * @memberof UsableActionRequest
   */
  cooldown?: number;
  /**
   * Amount to decrease from uses remaining
   * @type {number}
   * @memberof UsableActionRequest
   */
  decreaseAmount?: number;
  /**
   * Whether the user can select the amount
   * @type {boolean}
   * @memberof UsableActionRequest
   */
  amountSelectable?: boolean;
  /**
   * State to transition to after action completes
   * @type {string}
   * @memberof UsableActionRequest
   */
  transitionToState?: string;
  /**
   * Conditions required to perform the action
   * @type {UsableActionConditionRequest}
   * @memberof UsableActionRequest
   */
  condition?: UsableActionConditionRequest;
}

/**
 * Usable component request defining how an item can be used/consumed
 * @export
 * @interface UsableComponentRequest
 */
export interface UsableComponentRequest extends ItemComponentRequestBase {
  type: typeof ComponentType.Usable;
  /**
   * Animation ID to play when using the item
   * @type {string}
   * @memberof UsableComponentRequest
   */
  animationId?: string;
  /**
   * Maximum number of uses before the item is depleted
   * @type {number}
   * @memberof UsableComponentRequest
   */
  maxUses?: number;
  /**
   * Whether to remove the item when fully used
   * @type {boolean}
   * @memberof UsableComponentRequest
   */
  removeOnUse?: boolean;
  /**
   * Effects applied when using the item
   * @type {ComponentEffectRequest[]}
   * @memberof UsableComponentRequest
   */
  effects?: ComponentEffectRequest[];
  /**
   * Target configuration for the usable action
   * @type {UsableTargetRequest}
   * @memberof UsableComponentRequest
   */
  target?: UsableTargetRequest;
  /**
   * Skill requirement to use the item
   * @type {UsableSkillRequirementRequest}
   * @memberof UsableComponentRequest
   */
  skillRequirement?: UsableSkillRequirementRequest;
  /**
   * Default state when item is created
   * @type {string}
   * @memberof UsableComponentRequest
   */
  defaultState?: string;
  /**
   * Available states for the usable item
   * @type {UsableStateDefinitionRequest[]}
   * @memberof UsableComponentRequest
   */
  states?: UsableStateDefinitionRequest[];
  /**
   * Available actions that can be performed
   * @type {UsableActionRequest[]}
   * @memberof UsableComponentRequest
   */
  actions?: UsableActionRequest[];
}

/**
 * Equippable component request allowing the item to be worn or held
 * @export
 * @interface EquippableComponentRequest
 */
export interface EquippableComponentRequest extends ItemComponentRequestBase {
  type: typeof ComponentType.Equippable;
  /**
   * List of equipment slot IDs where this item can be equipped
   * @type {string[]}
   * @memberof EquippableComponentRequest
   */
  equipmentSlots: string[];
  /**
   * List of equipment slot IDs that become blocked when this item is equipped
   * @type {string[]}
   * @memberof EquippableComponentRequest
   */
  blocksSlots?: string[];
  /**
   * Effects applied when the item is equipped
   * @type {ComponentEffectRequest[]}
   * @memberof EquippableComponentRequest
   */
  effects?: ComponentEffectRequest[];
}

/**
 * Durable component request adding durability/wear mechanics to an item
 * @export
 * @interface DurableComponentRequest
 */
export interface DurableComponentRequest extends ItemComponentRequestBase {
  type: typeof ComponentType.Durable;
  /**
   * Maximum durability value
   * @type {number}
   * @memberof DurableComponentRequest
   */
  maxDurability: number;
  /**
   * Durability lost per use
   * @type {number}
   * @memberof DurableComponentRequest
   */
  lossPerUse: number;
  /**
   * Whether the item can be repaired
   * @type {boolean}
   * @memberof DurableComponentRequest
   */
  repairable?: boolean;
}

/**
 * Stackable component request allowing multiple units in a single slot
 * @export
 * @interface StackableComponentRequest
 */
export interface StackableComponentRequest extends ItemComponentRequestBase {
  type: typeof ComponentType.Stackable;
  /**
   * Maximum amount that can be stacked in a single slot
   * @type {number}
   * @memberof StackableComponentRequest
   */
  maxStackAmount: number;
}

/**
 * Perishable component request adding spoilage/decay mechanics to an item
 * @export
 * @interface PerishableComponentRequest
 */
export interface PerishableComponentRequest extends ItemComponentRequestBase {
  type: typeof ComponentType.Perishable;
  /**
   * Duration in milliseconds until the item spoils
   * @type {number}
   * @memberof PerishableComponentRequest
   */
  spoilDuration: number;
}

/**
 * Ammunition component request marking the item as ammunition for weapons
 * @export
 * @interface AmmunitionComponentRequest
 */
export interface AmmunitionComponentRequest extends ItemComponentRequestBase {
  type: typeof ComponentType.Ammunition;
  /**
   * The ammo type ID
   * @type {string}
   * @memberof AmmunitionComponentRequest
   */
  ammoTypeId: string;
}

/**
 * Attachable component request allowing the item to be attached to other items
 * @export
 * @interface AttachableComponentRequest
 */
export interface AttachableComponentRequest extends ItemComponentRequestBase {
  type: typeof ComponentType.Attachable;
  /**
   * List of item category IDs this item can be attached to
   * @type {string[]}
   * @memberof AttachableComponentRequest
   */
  attachableToCategories: string[];
  /**
   * The attachment point ID where this item attaches
   * @type {string}
   * @memberof AttachableComponentRequest
   */
  attachmentPoint: string;
  /**
   * Effects applied when the item is attached
   * @type {ComponentEffectRequest[]}
   * @memberof AttachableComponentRequest
   */
  effects?: ComponentEffectRequest[];
}

/**
 * Attachment slot definition request
 * @export
 * @interface AttachmentSlotDefinitionRequest
 */
export interface AttachmentSlotDefinitionRequest {
  /**
   * The attachment point ID
   * @type {string}
   * @memberof AttachmentSlotDefinitionRequest
   */
  attachmentPoint: string;
  /**
   * List of allowed item category IDs for this slot
   * @type {string[]}
   * @memberof AttachmentSlotDefinitionRequest
   */
  allowedCategories?: string[];
}

/**
 * Attachment slots component request providing slots for attaching other items
 * @export
 * @interface AttachmentSlotsComponentRequest
 */
export interface AttachmentSlotsComponentRequest extends ItemComponentRequestBase {
  type: typeof ComponentType.AttachmentSlots;
  /**
   * List of attachment slot definitions
   * @type {AttachmentSlotDefinitionRequest[]}
   * @memberof AttachmentSlotsComponentRequest
   */
  slots: AttachmentSlotDefinitionRequest[];
}

/**
 * Key component request allowing the item to unlock locks
 * @export
 * @interface KeyComponentRequest
 */
export interface KeyComponentRequest extends ItemComponentRequestBase {
  type: typeof ComponentType.Key;
  /**
   * The target type this key can unlock. Valid values: CONTAINER, VEHICLE, PROPERTY
   * @type {string}
   * @memberof KeyComponentRequest
   */
  targetType: string;
  /**
   * Whether the key can be duplicated
   * @type {boolean}
   * @memberof KeyComponentRequest
   */
  canDuplicate?: boolean;
}

/**
 * Currency component request marking the item as currency for transactions
 * @export
 * @interface CurrencyComponentRequest
 */
export interface CurrencyComponentRequest extends ItemComponentRequestBase {
  type: typeof ComponentType.Currency;
}

/**
 * Union type of all possible item component requests
 * @export
 * @type ItemComponentRequest
 */
export type ItemComponentRequest =
  | WeaponComponentRequest
  | ContainerComponentRequest
  | UsableComponentRequest
  | EquippableComponentRequest
  | DurableComponentRequest
  | StackableComponentRequest
  | PerishableComponentRequest
  | AmmunitionComponentRequest
  | AttachableComponentRequest
  | AttachmentSlotsComponentRequest
  | KeyComponentRequest
  | CurrencyComponentRequest;
