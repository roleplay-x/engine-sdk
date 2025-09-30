import { ServerTemplateConfiguration } from './server-template-configuration';
import { TemplateCategoryId } from './template-category-id';

/**
 *
 * @export
 * @interface ServerTemplateCategory
 */
export interface ServerTemplateCategory {
  /**
   *
   * @type {string}
   * @memberof ServerTemplateCategory
   */
  id: TemplateCategoryId;
  /**
   *
   * @type {string}
   * @memberof ServerTemplateCategory
   */
  name: string;
  /**
   *
   * @type {Array<ServerTemplateConfiguration>}
   * @memberof ServerTemplateCategory
   */
  configuration: Array<ServerTemplateConfiguration>;
  /**
   *
   * @type {boolean}
   * @memberof ServerTemplateCategory
   */
  isActive: boolean;
}
