import { ComponentType } from '../../enums/component-type';

/**
 * Key component allowing the item to unlock locks
 * @export
 * @interface KeyComponent
 */
export interface KeyComponent {
  /**
   * The type discriminator for the component
   * @type {typeof ComponentType.Key}
   * @memberof KeyComponent
   */
  type: typeof ComponentType.Key;
  /**
   * Custom attributes for the component
   * @type {Record<string, string>}
   * @memberof KeyComponent
   */
  attributes: Record<string, string>;
  /**
   * The target type this key can unlock
   * @type {string}
   * @memberof KeyComponent
   */
  targetType: string;
  /**
   * Localized name of the target type
   * @type {string}
   * @memberof KeyComponent
   */
  targetTypeName?: string;
  /**
   * Whether the key can be duplicated
   * @type {boolean}
   * @memberof KeyComponent
   */
  canDuplicate: boolean;
}
