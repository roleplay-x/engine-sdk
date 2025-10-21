import { ApiOptions, EngineClient } from '../core/engine-client';
import { ChangeMyPasswordRequest } from './models/change-my-password-request';
import { Character } from '../character/models/character';
import { AccountSummary } from '../account/models/account-summary';
import { CreateMyCharacterRequest } from './models/create-my-character-request';
import { CharacterGender } from '../character/models/character-gender';
import { CharacterNationality } from '../character/models/character-nationality';
import { BlueprintConfigSection } from '../blueprint/models/blueprint-config-section';

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
   * This endpoint retrieves a list of characters associated with the currently authenticated account.<br/>This endpoint performs account-level operations. The token must be associated with an account.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get my characters
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getMyCharacters(options?: ApiOptions): Promise<Character[]> {
    return this.client.get<Character[]>({
      url: 'player/characters',
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

  /**
   * Creates a new character for the currently authenticated account<br/>This endpoint performs account-level operations. The token must be associated with an account.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Create my character
   * @param {CreateMyCharacterRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public createMyCharacter(
    request: CreateMyCharacterRequest,
    options?: ApiOptions,
  ): Promise<Character> {
    return this.client.post<CreateMyCharacterRequest, Character>({
      url: 'player/characters',
      data: request,
      options,
    });
  }

  /**
   * Retrieves all enabled character genders<br/>This endpoint performs account-level operations. The token must be associated with an account.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get character genders
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getCharacterGenders(options?: ApiOptions): Promise<ReadonlyArray<CharacterGender>> {
    return this.client.get<ReadonlyArray<CharacterGender>>({
      url: 'player/characters/genders',
      options,
    });
  }

  /**
   * Retrieves all enabled character nationalities<br/>This endpoint performs account-level operations. The token must be associated with an account.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get character nationalities
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getCharacterNationalities(
    options?: ApiOptions,
  ): Promise<ReadonlyArray<CharacterNationality>> {
    return this.client.get<ReadonlyArray<CharacterNationality>>({
      url: 'player/characters/nationalities',
      options,
    });
  }

  /**
   * Retrieves all enabled blueprint configuration sections with configs<br/>This endpoint performs character-level operations. The token must be associated with a character.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get blueprint sections
   * @param {Object} [query]                   Query parameters.
   * @param {string} [query.category]               The category filter for blueprint sections.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getBlueprintSections(
    query?: { category?: string },
    options?: ApiOptions,
  ): Promise<ReadonlyArray<BlueprintConfigSection>> {
    return this.client.get<ReadonlyArray<BlueprintConfigSection>>({
      url: 'player/blueprints/sections',
      query,
      options,
    });
  }
}
