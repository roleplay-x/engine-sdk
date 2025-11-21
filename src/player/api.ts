import { ApiOptions, EngineClient } from '../core/engine-client';
import { ChangeMyPasswordRequest } from './models/change-my-password-request';
import { Character } from '../character/models/character';
import { CharacterSummary } from '../character/models/character-summary';
import { CharacterAnimation } from '../character/models/character-animation';
import { CharacterAnimationCategory } from '../character/models/character-animation-category';
import { AccountSummary } from '../account/models/account-summary';
import { CreateMyCharacterRequest } from './models/create-my-character-request';
import { CharacterGender } from '../character/models/character-gender';
import { CharacterNationality } from '../character/models/character-nationality';
import { BlueprintConfigSection } from '../blueprint/models/blueprint-config-section';
import { SpawnLocation } from '../spawn-location/models/spawn-location';
import { MyReferenceState } from './models/my-reference-state';
import { UpdateMyReferenceStatesRequest } from './models/update-my-reference-states-request';
import { PaginationQuery } from '../common/pagination-query';
import { PaginatedItems } from '../common/paginated-items';

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
   * Retrieves appearance sections for the currently selected character<br/>This endpoint performs character-level operations. The token must be associated with a character.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get my appearance sections
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getMyAppearanceSections(options?: ApiOptions): Promise<BlueprintConfigSection[]> {
    return this.client.get<BlueprintConfigSection[]>({
      url: 'player/characters/appearance/sections',
      options,
    });
  }

  /**
   * Retrieves available spawn locations for the currently selected character<br/>This endpoint performs character-level operations. The token must be associated with a character.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get my spawn locations
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getMySpawnLocations(options?: ApiOptions): Promise<SpawnLocation[]> {
    return this.client.get<SpawnLocation[]>({
      url: 'player/characters/spawn-locations',
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
   * Retrieves a list of character summaries for the currently authenticated account<br/>This endpoint performs account-level operations. The token must be associated with an account.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get my character summaries
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getMyCharacterSummaries(options?: ApiOptions): Promise<CharacterSummary[]> {
    return this.client.get<CharacterSummary[]>({
      url: 'player/characters/summaries',
      options,
    });
  }

  /**
   * Retrieves a character summary by ID<br/>This endpoint performs account-level operations. The token must be associated with an account.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get my character summary by ID
   * @param {string} characterId
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getMyCharacterSummaryById(
    characterId: string,
    options?: ApiOptions,
  ): Promise<CharacterSummary> {
    return this.client.get<CharacterSummary>({
      url: `player/characters/${characterId}/summaries`,
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
      url: `player/accounts/summaries`,
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

  /**
   * Retrieves the states for the authenticated account.<br/>This endpoint performs account-level operations. The token must be associated with an account.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get my account states
   * @param {Object} [query] Query parameters
   * @param {string} [query.keys] Filter by keys (comma-separated).
   * @param {number} [query.pageIndex] Page index for pagination.
   * @param {number} [query.pageSize] Page size for pagination.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getMyAccountStates(
    query?: { keys?: ReadonlyArray<string> } & PaginationQuery,
    options?: ApiOptions,
  ): Promise<MyReferenceState[]> {
    return this.client.get<MyReferenceState[]>({
      url: 'player/accounts/states',
      query,
      options,
    });
  }

  /**
   * Updates the states for the authenticated account.<br/>This endpoint performs account-level operations. The token must be associated with an account.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update my account states
   * @param {UpdateMyReferenceStatesRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public updateMyAccountStates(
    request: UpdateMyReferenceStatesRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateMyReferenceStatesRequest, void>({
      url: 'player/accounts/states',
      data: request,
      options,
    });
  }

  /**
   * Retrieves the states for the authenticated character.<br/>This endpoint performs character-level operations. The token must be associated with a character.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get my character states
   * @param {Object} [query] Query parameters
   * @param {ReadonlyArray<string>} [query.keys] Filter by keys (comma-separated).
   * @param {number} [query.pageIndex] Page index for pagination.
   * @param {number} [query.pageSize] Page size for pagination.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getMyCharacterStates(
    query?: { keys?: ReadonlyArray<string> } & PaginationQuery,
    options?: ApiOptions,
  ): Promise<MyReferenceState[]> {
    return this.client.get<MyReferenceState[]>({
      url: 'player/characters/states',
      query,
      options,
    });
  }

  /**
   * Updates the states for the authenticated character.<br/>This endpoint performs character-level operations. The token must be associated with a character.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Update my character states
   * @param {UpdateMyReferenceStatesRequest} request
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public updateMyCharacterStates(
    request: UpdateMyReferenceStatesRequest,
    options?: ApiOptions,
  ): Promise<void> {
    return this.client.put<UpdateMyReferenceStatesRequest, void>({
      url: 'player/characters/states',
      data: request,
      options,
    });
  }

  /**
   * Retrieves paginated animations for the currently selected character.<br/>This endpoint performs character-level operations. The token must be associated with a character.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get my animations
   * @param {Object} [query] Query parameters
   * @param {string} [query.animationCategoryId] Filter by animation category ID.
   * @param {string} [query.key] Filter by animation key.
   * @param {string} [query.keyIn] Filter by animation keys (comma-separated).
   * @param {string} [query.ids] Filter by animation IDs (comma-separated).
   * @param {number} [query.pageIndex] Page index for pagination.
   * @param {number} [query.pageSize] Page size for pagination.
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getMyAnimations(
    query?: {
      animationCategoryId?: string;
      key?: string;
      keyIn?: string;
      ids?: string;
    } & PaginationQuery,
    options?: ApiOptions,
  ): Promise<PaginatedItems<CharacterAnimation>> {
    return this.client.get<PaginatedItems<CharacterAnimation>>({
      url: 'player/characters/animations',
      query,
      options,
    });
  }

  /**
   * Retrieves a specific animation by ID for the currently selected character.<br/>This endpoint performs character-level operations. The token must be associated with a character.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get my animation by ID
   * @param {string} animationId Animation ID
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getMyAnimationById(
    animationId: string,
    options?: ApiOptions,
  ): Promise<CharacterAnimation> {
    return this.client.get<CharacterAnimation>({
      url: `player/characters/animations/${animationId}`,
      options,
    });
  }

  /**
   * Retrieves animation categories for the currently selected character.<br/>This endpoint performs character-level operations. The token must be associated with a character.<br/><br/> This endpoint requires authorization, and supports following token types:<br/>🔓 [Access Token]<br/>🔓 [Session Token]
   * @summary Get my animation categories
   * @param {*} [options] Override http request option.
   * @throws {EngineError}
   */
  public getMyAnimationCategories(options?: ApiOptions): Promise<CharacterAnimationCategory[]> {
    return this.client.get<CharacterAnimationCategory[]>({
      url: 'player/characters/animation-categories',
      options,
    });
  }
}
