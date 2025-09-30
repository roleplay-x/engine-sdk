/**
 *
 * @export
 * @interface SetCategoryTemplateIdRequest
 */
export interface SetCategoryTemplateIdRequest {
  /**
   * Category of the template to be set. It is required to identify which category to update.
   * @type {string}
   * @memberof SetCategoryTemplateIdRequest
   */
  category?: string;
  /**
   * ID of the template to be associated with the specified category. It is required to set or update the template for the category.
   * @type {string}
   * @memberof SetCategoryTemplateIdRequest
   */
  templateId?: string;
}
