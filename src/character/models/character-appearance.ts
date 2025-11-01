/**
 *
 * @export
 * @interface CharacterAppearance
 */
export interface CharacterAppearance {
  /**
   *
   * @type {Record<string, string>}
   * @memberof CharacterAppearance
   */
  data: Record<string, string>;
  /**
   *
   * @type {string}
   * @memberof CharacterAppearance
   */
  imageUrl?: string;
  /**
   *
   * @type {number}
   * @memberof CharacterAppearance
   */
  version: number;
}
