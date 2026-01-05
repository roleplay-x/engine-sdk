import { ComponentType } from '../../enums/component-type';
import { ComponentEffect } from './component-effect';

/**
 * Attachable component allowing the item to be attached to other items
 * @export
 * @interface AttachableComponent
 */
export interface AttachableComponent {
  /**
   * The type discriminator for the component
   * @type {typeof ComponentType.Attachable}
   * @memberof AttachableComponent
   */
  type: typeof ComponentType.Attachable;
  /**
   * Custom attributes for the component
   * @type {Record<string, string>}
   * @memberof AttachableComponent
   */
  attributes: Record<string, string>;
  /**
   * List of item category IDs this item can be attached to
   * @type {ReadonlyArray<string>}
   * @memberof AttachableComponent
   */
  attachableToCategories: ReadonlyArray<string>;
  /**
   * The attachment point ID where this item attaches
   * @type {string}
   * @memberof AttachableComponent
   */
  attachmentPoint: string;
  /**
   * Localized name of the attachment point
   * @type {string}
   * @memberof AttachableComponent
   */
  attachmentPointName?: string;
  /**
   * Effects applied when the item is attached
   * @type {ReadonlyArray<ComponentEffect>}
   * @memberof AttachableComponent
   */
  effects?: ReadonlyArray<ComponentEffect>;
}
