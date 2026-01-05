import { BindingRulesRequest } from './binding-rules-request';
import { ItemMobilityRequest } from './item-mobility-request';
import { ItemDefinitionMaterialRequest } from './item-definition-material-request';
import { ItemComponentRequest } from './components/item-component-request';

/**
 * Request to create an item definition
 * @export
 * @interface CreateItemDefinitionRequest
 */
export interface CreateItemDefinitionRequest {
  /**
   * The definition code that groups all revisions together
   * @type {string}
   * @memberof CreateItemDefinitionRequest
   */
  definitionCode: string;
  /**
   * Default display name of the item definition
   * @type {string}
   * @memberof CreateItemDefinitionRequest
   */
  defaultName?: string;
  /**
   * Default description of the item definition
   * @type {string}
   * @memberof CreateItemDefinitionRequest
   */
  description?: string;
  /**
   * Material type ID for crafting/salvage purposes
   * @type {string}
   * @memberof CreateItemDefinitionRequest
   */
  materialTypeId?: string;
  /**
   * Item category ID
   * @type {string}
   * @memberof CreateItemDefinitionRequest
   */
  categoryId: string;
  /**
   * Primary unit of measurement. Valid values: UNIT, KG, L, M
   * @type {string}
   * @memberof CreateItemDefinitionRequest
   */
  primaryUnit: string;
  /**
   * Weight per unit in kilograms
   * @type {number}
   * @memberof CreateItemDefinitionRequest
   */
  weightPerUnit?: number;
  /**
   * Volume per unit in liters
   * @type {number}
   * @memberof CreateItemDefinitionRequest
   */
  volumePerUnit?: number;
  /**
   * List of components that define the item's behavior
   * @type {ItemComponentRequest[]}
   * @memberof CreateItemDefinitionRequest
   */
  components?: ItemComponentRequest[];
  /**
   * Binding rules that define when the item becomes bound to an owner
   * @type {BindingRulesRequest}
   * @memberof CreateItemDefinitionRequest
   */
  bindingRules?: BindingRulesRequest;
  /**
   * Mobility constraints for the item
   * @type {ItemMobilityRequest}
   * @memberof CreateItemDefinitionRequest
   */
  mobility?: ItemMobilityRequest;
  /**
   * Category reference ID of the owner (e.g., CHARACTER:123)
   * @type {string}
   * @memberof CreateItemDefinitionRequest
   */
  ownerCategoryReferenceId?: string;
  /**
   * Recipe ID for crafting this item
   * @type {string}
   * @memberof CreateItemDefinitionRequest
   */
  recipeId?: string;
  /**
   * URL to the icon image representing this item
   * @type {string}
   * @memberof CreateItemDefinitionRequest
   */
  iconUrl?: string;
  /**
   * Custom attributes for the item definition
   * @type {Record<string, string>}
   * @memberof CreateItemDefinitionRequest
   */
  attributes?: Record<string, string>;
  /**
   * List of materials that make up this item
   * @type {ItemDefinitionMaterialRequest[]}
   * @memberof CreateItemDefinitionRequest
   */
  materials?: ItemDefinitionMaterialRequest[];
}
