import { BindingRulesRequest } from './binding-rules-request';
import { ItemMobilityRequest } from './item-mobility-request';
import { ItemDefinitionMaterialRequest } from './item-definition-material-request';
import { ItemComponentRequest } from './components/item-component-request';

/**
 * Request to force update an item definition bypassing revision system
 * @export
 * @interface ForceUpdateItemDefinitionRequest
 */
export interface ForceUpdateItemDefinitionRequest {
  /**
   * Material type ID for crafting/salvage purposes
   * @type {string}
   * @memberof ForceUpdateItemDefinitionRequest
   */
  materialTypeId?: string;
  /**
   * Item category ID
   * @type {string}
   * @memberof ForceUpdateItemDefinitionRequest
   */
  categoryId: string;
  /**
   * Primary unit of measurement. Valid values: UNIT, KG, L, M
   * @type {string}
   * @memberof ForceUpdateItemDefinitionRequest
   */
  primaryUnit: string;
  /**
   * Weight per unit in kilograms
   * @type {number}
   * @memberof ForceUpdateItemDefinitionRequest
   */
  weightPerUnit?: number;
  /**
   * Volume per unit in liters
   * @type {number}
   * @memberof ForceUpdateItemDefinitionRequest
   */
  volumePerUnit?: number;
  /**
   * List of components that define the item's behavior
   * @type {ItemComponentRequest[]}
   * @memberof ForceUpdateItemDefinitionRequest
   */
  components?: ItemComponentRequest[];
  /**
   * Binding rules that define when the item becomes bound to an owner
   * @type {BindingRulesRequest}
   * @memberof ForceUpdateItemDefinitionRequest
   */
  bindingRules?: BindingRulesRequest;
  /**
   * Mobility constraints for the item
   * @type {ItemMobilityRequest}
   * @memberof ForceUpdateItemDefinitionRequest
   */
  mobility?: ItemMobilityRequest;
  /**
   * Recipe ID for crafting this item
   * @type {string}
   * @memberof ForceUpdateItemDefinitionRequest
   */
  recipeId?: string;
  /**
   * URL to the icon image representing this item
   * @type {string}
   * @memberof ForceUpdateItemDefinitionRequest
   */
  iconUrl?: string;
  /**
   * Custom attributes for the item definition
   * @type {Record<string, string>}
   * @memberof ForceUpdateItemDefinitionRequest
   */
  attributes?: Record<string, string>;
  /**
   * List of materials that make up this item
   * @type {ItemDefinitionMaterialRequest[]}
   * @memberof ForceUpdateItemDefinitionRequest
   */
  materials?: ItemDefinitionMaterialRequest[];
}
