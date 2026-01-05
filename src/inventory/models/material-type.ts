/**
 * Represents a material type for items
 * @export
 * @interface MaterialType
 */
export interface MaterialType {
  /**
   * Unique identifier for the material type
   * @type {string}
   * @memberof MaterialType
   */
  id: string;
  /**
   * Localized name of the material type
   * @type {string}
   * @memberof MaterialType
   */
  name: string;
  /**
   * URL to the material type icon
   * @type {string}
   * @memberof MaterialType
   */
  iconUrl?: string;
  /**
   * Whether the material type is enabled
   * @type {boolean}
   * @memberof MaterialType
   */
  enabled: boolean;
  /**
   * Unix timestamp when the material type was created
   * @type {number}
   * @memberof MaterialType
   */
  createdDate: number;
  /**
   * Unix timestamp when the material type was last modified
   * @type {number}
   * @memberof MaterialType
   */
  lastModifiedDate: number;
}
