import { ApiOptions, EngineClient } from '../core/engine-client';
import { ChangeMyPasswordRequest } from './models/change-my-password-request';
import { Character } from '../character/models/character';
import { AccountSummary } from '../account/models/account-summary';

export class PlayerApi {
  constructor(private readonly client: EngineClient) {}

  /**
   * This endpoint changes the password of the currently authenticated account.<br/>This endpoint performs account-level operations. The token must be associated with an account.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Change my password
   * @param {ChangeMyPasswordRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public changeMyPassword(request: ChangeMyPasswordRequest, options?: ApiOptions): Promise<void> {
    return this.client.put<ChangeMyPasswordRequest, void>({
      url: 'player/accounts/password',
      data: request,
      options,
    });
  }

  /**
   * This endpoint retrieves the currently selected character for the authenticated account.<br/>This endpoint performs character-level operations. The token must be associated with a character.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get my current character
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getMyCurrentCharacter(options?: ApiOptions): Promise<Character> {
    return this.client.get<Character>({
      url: 'player/characters/current',
      options,
    });
  }

  /**
   * This endpoint retrieves a summary of the currently authenticated account.<br/>This endpoint performs account-level operations. The token must be associated with an account.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get my account summary
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getMyAccountSummary(options?: ApiOptions): Promise<AccountSummary> {
    return this.client.get<AccountSummary>({
      url: `player/accounts/summary`,
      options,
    });
  }
}
