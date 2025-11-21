import { TemplateCategoryId } from './template-category-id';

/**
 * Represents a template category
 * @export
 * @interface TemplateCategory
 */
export interface TemplateCategory {
  /**
   * Category identifier
   * @type {TemplateCategoryId}
   * @memberof TemplateCategory
   */
  id: TemplateCategoryId;
  /**
   * Display name of the category
   * @type {string}
   * @memberof TemplateCategory
   */
  name: string;
}
