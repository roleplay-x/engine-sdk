import { SessionInfoAccount } from './session-info-account';
import { SessionInfoCharacter } from './session-info-character';
import { AccountSignInMethod } from '../../account/models/account-sign-in-method';

/**
 * Current session information including account and character details
 * @export
 * @interface SessionInfo
 */
export interface SessionInfo {
  /**
   * Unique identifier for the session
   * @type {string}
   * @memberof SessionInfo
   */
  id: string;
  /**
   * IP address of the client connected to this session
   * @type {string}
   * @memberof SessionInfo
   */
  ipAddress: string;
  /**
   * Hash of the session token for validation purposes
   * @type {string}
   * @memberof SessionInfo
   */
  tokenHash: string;
  /**
   * The method used to sign in for this session
   * @type {AccountSignInMethod}
   * @memberof SessionInfo
   */
  signInMethod?: AccountSignInMethod;
  /**
   * Account information associated with this session, undefined if not authorized
   * @type {SessionInfoAccount}
   * @memberof SessionInfo
   */
  account?: SessionInfoAccount;
  /**
   * Character information linked to this session, undefined if no character linked
   * @type {SessionInfoCharacter}
   * @memberof SessionInfo
   */
  character?: SessionInfoCharacter;
}
