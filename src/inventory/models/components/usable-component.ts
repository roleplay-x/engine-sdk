import { ComponentType } from '../../enums/component-type';
import { ComponentEffect } from './component-effect';

/**
 * Target configuration for usable items
 * @export
 * @interface UsableTarget
 */
export interface UsableTarget {
  /**
   * Target type
   * @type {string}
   * @memberof UsableTarget
   */
  targetType: string;
  /**
   * Localized name of the target type
   * @type {string}
   * @memberof UsableTarget
   */
  targetTypeName?: string;
  /**
   * Range in meters for targeting
   * @type {number}
   * @memberof UsableTarget
   */
  range?: number;
  /**
   * Target item categories if targeting items
   * @type {ReadonlyArray<string>}
   * @memberof UsableTarget
   */
  categories?: ReadonlyArray<string>;
}

/**
 * Skill requirement for using an item
 * @export
 * @interface UsableSkillRequirement
 */
export interface UsableSkillRequirement {
  /**
   * Required skill ID
   * @type {string}
   * @memberof UsableSkillRequirement
   */
  skillId: string;
  /**
   * Localized name of the skill
   * @type {string}
   * @memberof UsableSkillRequirement
   */
  skillName?: string;
  /**
   * Minimum skill level required
   * @type {number}
   * @memberof UsableSkillRequirement
   */
  minLevel?: number;
}

/**
 * Definition of a usable item state
 * @export
 * @interface UsableStateDefinition
 */
export interface UsableStateDefinition {
  /**
   * Unique state identifier
   * @type {string}
   * @memberof UsableStateDefinition
   */
  stateId: string;
  /**
   * Localized name of the state
   * @type {string}
   * @memberof UsableStateDefinition
   */
  stateName?: string;
  /**
   * Icon URL for this state
   * @type {string}
   * @memberof UsableStateDefinition
   */
  iconUrl?: string;
  /**
   * Custom attributes for this state
   * @type {Record<string, string>}
   * @memberof UsableStateDefinition
   */
  attributes?: Record<string, string>;
}

/**
 * Conditions for performing a usable action
 * @export
 * @interface UsableActionCondition
 */
export interface UsableActionCondition {
  /**
   * States in which the action is allowed
   * @type {ReadonlyArray<string>}
   * @memberof UsableActionCondition
   */
  allowedStates?: ReadonlyArray<string>;
  /**
   * States in which the action is blocked
   * @type {ReadonlyArray<string>}
   * @memberof UsableActionCondition
   */
  blockedStates?: ReadonlyArray<string>;
  /**
   * Additional flags required
   * @type {ReadonlyArray<string>}
   * @memberof UsableActionCondition
   */
  flags?: ReadonlyArray<string>;
}

/**
 * An action that can be performed with a usable item
 * @export
 * @interface UsableAction
 */
export interface UsableAction {
  /**
   * Unique action identifier
   * @type {string}
   * @memberof UsableAction
   */
  actionId: string;
  /**
   * Localized name of the action
   * @type {string}
   * @memberof UsableAction
   */
  actionName?: string;
  /**
   * Duration in milliseconds to perform the action
   * @type {number}
   * @memberof UsableAction
   */
  duration?: number;
  /**
   * Cooldown in milliseconds between uses
   * @type {number}
   * @memberof UsableAction
   */
  cooldown?: number;
  /**
   * Amount to decrease from uses remaining
   * @type {number}
   * @memberof UsableAction
   */
  decreaseAmount?: number;
  /**
   * Whether the user can select the amount
   * @type {boolean}
   * @memberof UsableAction
   */
  amountSelectable: boolean;
  /**
   * State to transition to after action completes
   * @type {string}
   * @memberof UsableAction
   */
  transitionToState?: string;
  /**
   * Conditions required to perform the action
   * @type {UsableActionCondition}
   * @memberof UsableAction
   */
  condition?: UsableActionCondition;
}

/**
 * Usable component defining how an item can be used/consumed
 * @export
 * @interface UsableComponent
 */
export interface UsableComponent {
  /**
   * The type discriminator for the component
   * @type {typeof ComponentType.Usable}
   * @memberof UsableComponent
   */
  type: typeof ComponentType.Usable;
  /**
   * Custom attributes for the component
   * @type {Record<string, string>}
   * @memberof UsableComponent
   */
  attributes: Record<string, string>;
  /**
   * Animation ID to play when using the item
   * @type {string}
   * @memberof UsableComponent
   */
  animationId?: string;
  /**
   * Maximum number of uses before the item is depleted
   * @type {number}
   * @memberof UsableComponent
   */
  maxUses?: number;
  /**
   * Whether to remove the item when fully used
   * @type {boolean}
   * @memberof UsableComponent
   */
  removeOnUse: boolean;
  /**
   * Effects applied when using the item
   * @type {ReadonlyArray<ComponentEffect>}
   * @memberof UsableComponent
   */
  effects?: ReadonlyArray<ComponentEffect>;
  /**
   * Target configuration for the usable action
   * @type {UsableTarget}
   * @memberof UsableComponent
   */
  target?: UsableTarget;
  /**
   * Skill requirement to use the item
   * @type {UsableSkillRequirement}
   * @memberof UsableComponent
   */
  skillRequirement?: UsableSkillRequirement;
  /**
   * Default state when item is created
   * @type {string}
   * @memberof UsableComponent
   */
  defaultState?: string;
  /**
   * Available states for the usable item
   * @type {ReadonlyArray<UsableStateDefinition>}
   * @memberof UsableComponent
   */
  states?: ReadonlyArray<UsableStateDefinition>;
  /**
   * Available actions that can be performed
   * @type {ReadonlyArray<UsableAction>}
   * @memberof UsableComponent
   */
  actions: ReadonlyArray<UsableAction>;
}
