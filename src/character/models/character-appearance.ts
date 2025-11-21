/**
 * Character's appearance configuration
 * @export
 * @interface CharacterAppearance
 */
export interface CharacterAppearance {
  /**
   * Key-value pairs of appearance configuration data
   * @type {Record<string, string>}
   * @memberof CharacterAppearance
   */
  data: Record<string, string>;
  /**
   * URL to the character's appearance image
   * @type {string}
   * @memberof CharacterAppearance
   */
  imageUrl?: string;
  /**
   * Version number of the appearance configuration
   * @type {number}
   * @memberof CharacterAppearance
   */
  version: number;
}
