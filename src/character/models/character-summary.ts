import { CharacterAppearance } from './character-appearance';
import { CharacterMotives } from './character-motives';

/**
 *
 * @export
 * @interface CharacterSummary
 */
export interface CharacterSummary {
  /**
   *
   * @type {string}
   * @memberof CharacterSummary
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof CharacterSummary
   */
  accountId: string;
  /**
   *
   * @type {string}
   * @memberof CharacterSummary
   */
  firstName: string;
  /**
   *
   * @type {string}
   * @memberof CharacterSummary
   */
  lastName: string;
  /**
   *
   * @type {string}
   * @memberof CharacterSummary
   */
  fullName: string;
  /**
   *
   * @type {string}
   * @memberof CharacterSummary
   */
  birthDate: string;
  /**
   *
   * @type {number}
   * @memberof CharacterSummary
   */
  age: number;
  /**
   *
   * @type {string}
   * @memberof CharacterSummary
   */
  gender: string;
  /**
   *
   * @type {string}
   * @memberof CharacterSummary
   */
  genderName: string;
  /**
   *
   * @type {string}
   * @memberof CharacterSummary
   */
  nationality?: string;
  /**
   *
   * @type {string}
   * @memberof CharacterSummary
   */
  nationalityName?: string;
  /**
   *
   * @type {boolean}
   * @memberof CharacterSummary
   */
  isActive: boolean;
  /**
   *
   * @type {CharacterAppearance}
   * @memberof CharacterSummary
   */
  appearance?: CharacterAppearance;
  /**
   *
   * @type {CharacterMotives}
   * @memberof CharacterSummary
   */
  motives?: CharacterMotives;
  /**
   *
   * @type {number}
   * @memberof CharacterSummary
   */
  totalSessionTimeSeconds: number;
  /**
   *
   * @type {number}
   * @memberof CharacterSummary
   */
  lastSessionDate?: number;
  /**
   *
   * @type {number}
   * @memberof CharacterSummary
   */
  createdDate: number;
  /**
   *
   * @type {number}
   * @memberof CharacterSummary
   */
  cash: number;
}
