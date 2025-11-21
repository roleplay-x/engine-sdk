import { AccountSignInMethod } from '../../account/models/account-sign-in-method';

/**
 * Reason why a session ended
 * @export
 * @enum {string}
 */
export enum SessionEndReason {
  SessionInitFailed = 'SESSION_INIT_FAILED',
  DroppedByServer = 'DROPPED_BY_SERVER',
  ReplacedByNewSession = 'REPLACED_BY_NEW_SESSION',
  ConnectionDropped = 'CONNECTION_DROPPED',
  Crashed = 'CRASHED',
  PlayerQuit = 'PLAYER_QUIT',
  KickedByAdmin = 'KICKED_BY_ADMIN',
  BannedByAdmin = 'BANNED_BY_ADMIN',
  KickedByServer = 'KICKED_BY_SERVER',
  BannedByServer = 'BANNED_BY_SERVER',
}

/**
 * Represents a player session on the game server
 * @export
 * @interface Session
 */
export interface Session {
  /**
   * Unique identifier for the session
   * @type {string}
   * @memberof Session
   */
  id: string;
  /**
   * IP address of the client connected to this session
   * @type {string}
   * @memberof Session
   */
  ipAddress: string;
  /**
   * ID of the account associated with this session, undefined if not authorized
   * @type {string}
   * @memberof Session
   */
  accountId?: string;
  /**
   * ID of the character linked to this session, undefined if no character linked
   * @type {string}
   * @memberof Session
   */
  characterId?: string;
  /**
   * The method used to sign in for this session
   * @type {AccountSignInMethod}
   * @memberof Session
   */
  signInMethod?: AccountSignInMethod;
  /**
   * Unix timestamp when the session ended, undefined if still active
   * @type {number}
   * @memberof Session
   */
  endDate?: number;
  /**
   * Reason why the session ended, undefined if still active
   * @type {SessionEndReason}
   * @memberof Session
   */
  endReason?: SessionEndReason;
  /**
   * Additional text describing why the session ended
   * @type {string}
   * @memberof Session
   */
  endReasonText?: string;
  /**
   * Unix timestamp when the session was authorized
   * @type {number}
   * @memberof Session
   */
  authorizedDate?: number;
  /**
   * Unix timestamp of the last heartbeat received from the client
   * @type {number}
   * @memberof Session
   */
  lastHeartbeatDate?: number;
  /**
   * Unix timestamp when a character was linked to the session
   * @type {number}
   * @memberof Session
   */
  characterLinkedDate?: number;
  /**
   * Whether the session is currently active
   * @type {boolean}
   * @memberof Session
   */
  isActive: boolean;
  /**
   * Unix timestamp when the session was created
   * @type {number}
   * @memberof Session
   */
  createdDate: number;
  /**
   * Unix timestamp when the session was last modified
   * @type {number}
   * @memberof Session
   */
  lastModifiedDate: number;
}
