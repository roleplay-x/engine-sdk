/**
 * Sound type codes
 * @export
 * @enum {string}
 */
export enum SoundType {
  External = 'EXTERNAL',
  Native = 'NATIVE',
}

/**
 * Represents a sound configuration
 * @export
 * @interface Sound
 */
export interface Sound {
  /**
   * Unique identifier for the sound
   * @type {string}
   * @memberof Sound
   */
  id: string;
  /**
   * Name of the sound
   * @type {string}
   * @memberof Sound
   */
  name: string;
  /**
   * Type of the sound (EXTERNAL or NATIVE)
   * @type {SoundType}
   * @memberof Sound
   */
  type: SoundType;
  /**
   * Description of the sound
   * @type {string}
   * @memberof Sound
   */
  description: string;
  /**
   * Additional attributes for the sound configuration
   * @type {{ [key: string]: string; }}
   * @memberof Sound
   */
  attributes: { [key: string]: string };
  /**
   * URL to external sound file (for EXTERNAL type)
   * @type {string}
   * @memberof Sound
   */
  externalUrl?: string;
  /**
   * Whether this sound is enabled
   * @type {boolean}
   * @memberof Sound
   */
  enabled: boolean;
  /**
   * Unix timestamp when the sound was created
   * @type {number}
   * @memberof Sound
   */
  createdDate: number;
  /**
   * Unix timestamp when the sound was last modified
   * @type {number}
   * @memberof Sound
   */
  lastModifiedDate: number;
}
