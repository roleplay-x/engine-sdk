import { ServerTemplateCategory } from './server-template-category';

/**
 * Represents a server template configuration
 * @export
 * @interface ServerTemplate
 */
export interface ServerTemplate {
  /**
   * Unique identifier for the template
   * @type {string}
   * @memberof ServerTemplate
   */
  id: string;
  /**
   * Name of the template
   * @type {string}
   * @memberof ServerTemplate
   */
  name: string;
  /**
   * Minor version number of the template
   * @type {string}
   * @memberof ServerTemplate
   */
  minorVersion: string;
  /**
   * Full version string of the template
   * @type {string}
   * @memberof ServerTemplate
   */
  fullVersion: string;
  /**
   * Categories included in this template
   * @type {Array<ServerTemplateCategory>}
   * @memberof ServerTemplate
   */
  categories: Array<ServerTemplateCategory>;
}
