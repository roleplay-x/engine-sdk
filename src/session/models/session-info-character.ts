/**
 * Character information within a session context
 * @export
 * @interface SessionInfoCharacter
 */
export interface SessionInfoCharacter {
  /**
   * Unique identifier for the character
   * @type {string}
   * @memberof SessionInfoCharacter
   */
  id: string;
  /**
   * First name of the character
   * @type {string}
   * @memberof SessionInfoCharacter
   */
  firstName: string;
  /**
   * Last name of the character
   * @type {string}
   * @memberof SessionInfoCharacter
   */
  lastName: string;
  /**
   * Full name of the character (first name + last name)
   * @type {string}
   * @memberof SessionInfoCharacter
   */
  fullName: string;
  /**
   * Unix timestamp when the character was linked to the session
   * @type {number}
   * @memberof SessionInfoCharacter
   */
  linkedDate: number;
  /**
   * List of segment definition IDs assigned to this character
   * @type {Array<string>}
   * @memberof SessionInfoCharacter
   */
  segmentDefinitionIds: Array<string>;
}
