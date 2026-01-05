import { ComponentType } from '../../enums/component-type';

/**
 * Definition of an attachment slot
 * @export
 * @interface AttachmentSlotDefinition
 */
export interface AttachmentSlotDefinition {
  /**
   * The attachment point ID
   * @type {string}
   * @memberof AttachmentSlotDefinition
   */
  attachmentPoint: string;
  /**
   * Localized name of the attachment point
   * @type {string}
   * @memberof AttachmentSlotDefinition
   */
  attachmentPointName?: string;
  /**
   * List of allowed item category IDs for this slot
   * @type {ReadonlyArray<string>}
   * @memberof AttachmentSlotDefinition
   */
  allowedCategories?: ReadonlyArray<string>;
}

/**
 * Attachment slots component providing slots for attaching other items
 * @export
 * @interface AttachmentSlotsComponent
 */
export interface AttachmentSlotsComponent {
  /**
   * The type discriminator for the component
   * @type {typeof ComponentType.AttachmentSlots}
   * @memberof AttachmentSlotsComponent
   */
  type: typeof ComponentType.AttachmentSlots;
  /**
   * Custom attributes for the component
   * @type {Record<string, string>}
   * @memberof AttachmentSlotsComponent
   */
  attributes: Record<string, string>;
  /**
   * List of attachment slot definitions
   * @type {ReadonlyArray<AttachmentSlotDefinition>}
   * @memberof AttachmentSlotsComponent
   */
  slots: ReadonlyArray<AttachmentSlotDefinition>;
}
