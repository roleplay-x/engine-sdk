import { BindingRulesRequest } from './binding-rules-request';
import { ItemMobilityRequest } from './item-mobility-request';
import { ItemDefinitionMaterialRequest } from './item-definition-material-request';
import { ItemComponentRequest } from './components/item-component-request';

/**
 * Request to create a new revision of an item definition
 * @export
 * @interface CreateItemDefinitionRevisionRequest
 */
export interface CreateItemDefinitionRevisionRequest {
  /**
   * Material type ID for crafting/salvage purposes
   * @type {string}
   * @memberof CreateItemDefinitionRevisionRequest
   */
  materialTypeId?: string;
  /**
   * Item category ID
   * @type {string}
   * @memberof CreateItemDefinitionRevisionRequest
   */
  categoryId: string;
  /**
   * Primary unit of measurement. Valid values: UNIT, KG, L, M
   * @type {string}
   * @memberof CreateItemDefinitionRevisionRequest
   */
  primaryUnit: string;
  /**
   * Weight per unit in kilograms
   * @type {number}
   * @memberof CreateItemDefinitionRevisionRequest
   */
  weightPerUnit?: number;
  /**
   * Volume per unit in liters
   * @type {number}
   * @memberof CreateItemDefinitionRevisionRequest
   */
  volumePerUnit?: number;
  /**
   * List of components that define the item's behavior
   * @type {ItemComponentRequest[]}
   * @memberof CreateItemDefinitionRevisionRequest
   */
  components?: ItemComponentRequest[];
  /**
   * Binding rules that define when the item becomes bound to an owner
   * @type {BindingRulesRequest}
   * @memberof CreateItemDefinitionRevisionRequest
   */
  bindingRules?: BindingRulesRequest;
  /**
   * Mobility constraints for the item
   * @type {ItemMobilityRequest}
   * @memberof CreateItemDefinitionRevisionRequest
   */
  mobility?: ItemMobilityRequest;
  /**
   * Recipe ID for crafting this item
   * @type {string}
   * @memberof CreateItemDefinitionRevisionRequest
   */
  recipeId?: string;
  /**
   * URL to the icon image representing this item
   * @type {string}
   * @memberof CreateItemDefinitionRevisionRequest
   */
  iconUrl?: string;
  /**
   * Custom attributes for the item definition
   * @type {Record<string, string>}
   * @memberof CreateItemDefinitionRevisionRequest
   */
  attributes?: Record<string, string>;
  /**
   * List of materials that make up this item
   * @type {ItemDefinitionMaterialRequest[]}
   * @memberof CreateItemDefinitionRevisionRequest
   */
  materials?: ItemDefinitionMaterialRequest[];
}
