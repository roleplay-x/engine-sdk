/**
 * Discord user account information for authentication
 * @export
 * @interface DiscordUserAccountInfo
 */
export interface DiscordUserAccountInfo {
  /**
   * Whether an account already exists for this Discord user
   * @type {boolean}
   * @memberof DiscordUserAccountInfo
   */
  accountExists: boolean;
  /**
   * Regex pattern for validating usernames
   * @type {string}
   * @memberof DiscordUserAccountInfo
   */
  usernameRegex: string;
  /**
   * Whether email is required for registration
   * @type {boolean}
   * @memberof DiscordUserAccountInfo
   */
  emailRequired: boolean;
  /**
   * Discord user ID
   * @type {string}
   * @memberof DiscordUserAccountInfo
   */
  userId: string;
  /**
   * Whether the user is a member of the required Discord guild
   * @type {boolean}
   * @memberof DiscordUserAccountInfo
   */
  isMemberOfGuild: boolean;
  /**
   * Whether the user is whitelisted
   * @type {boolean}
   * @memberof DiscordUserAccountInfo
   */
  isWhitelisted: boolean;
  /**
   * List of Discord role IDs the user has
   * @type {Array<string>}
   * @memberof DiscordUserAccountInfo
   */
  roles: Array<string>;
  /**
   * Discord username
   * @type {string}
   * @memberof DiscordUserAccountInfo
   */
  username?: string;
}
