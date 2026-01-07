import { ItemComponent } from './components/item-component';
import { BindingRules } from './binding-rules';
import { ItemMobility } from './item-mobility';
import { ItemDefinitionMaterial } from './item-definition-material';
import { Unit } from '../enums/unit';

/**
 * Represents an item definition that describes the blueprint for creating items
 * @export
 * @interface ItemDefinition
 */
export interface ItemDefinition {
  /**
   * Unique identifier for this specific revision of the item definition
   * @type {string}
   * @memberof ItemDefinition
   */
  id: string;
  /**
   * The definition code that groups all revisions together
   * @type {string}
   * @memberof ItemDefinition
   */
  definitionCode: string;
  /**
   * The revision number of this definition
   * @type {number}
   * @memberof ItemDefinition
   */
  revisionNumber: number;
  /**
   * Whether this is the latest revision
   * @type {boolean}
   * @memberof ItemDefinition
   */
  latest: boolean;
  /**
   * Localized display name of the item definition
   * @type {string}
   * @memberof ItemDefinition
   */
  name?: string;
  /**
   * Localized description of the item definition
   * @type {string}
   * @memberof ItemDefinition
   */
  description?: string;
  /**
   * Material type ID for crafting/salvage purposes
   * @type {string}
   * @memberof ItemDefinition
   */
  materialTypeId?: string;
  /**
   * Localized name of the material type
   * @type {string}
   * @memberof ItemDefinition
   */
  materialTypeName?: string;
  /**
   * Item category ID
   * @type {string}
   * @memberof ItemDefinition
   */
  categoryId: string;
  /**
   * Localized name of the item category
   * @type {string}
   * @memberof ItemDefinition
   */
  categoryName: string;
  /**
   * Primary unit of measurement
   * @type {Unit}
   * @memberof ItemDefinition
   */
  primaryUnit: Unit;
  /**
   * Weight per unit in kilograms
   * @type {number}
   * @memberof ItemDefinition
   */
  weightPerUnit: number;
  /**
   * Volume per unit in liters
   * @type {number}
   * @memberof ItemDefinition
   */
  volumePerUnit: number;
  /**
   * List of components that define the item's behavior
   * @type {ReadonlyArray<ItemComponent>}
   * @memberof ItemDefinition
   */
  components: ReadonlyArray<ItemComponent>;
  /**
   * Binding rules that define when the item becomes bound to an owner
   * @type {BindingRules}
   * @memberof ItemDefinition
   */
  bindingRules?: BindingRules;
  /**
   * Mobility constraints for the item
   * @type {ItemMobility}
   * @memberof ItemDefinition
   */
  mobility?: ItemMobility;
  /**
   * Category reference ID of the owner (e.g., CHARACTER:123)
   * @type {string}
   * @memberof ItemDefinition
   */
  ownerCategoryReferenceId?: string;
  /**
   * Recipe ID for crafting this item
   * @type {string}
   * @memberof ItemDefinition
   */
  recipeId?: string;
  /**
   * URL to the icon image representing this item
   * @type {string}
   * @memberof ItemDefinition
   */
  iconUrl?: string;
  /**
   * Custom attributes for the item definition
   * @type {Record<string, string>}
   * @memberof ItemDefinition
   */
  attributes: Record<string, string>;
  /**
   * List of materials that make up this item
   * @type {ReadonlyArray<ItemDefinitionMaterial>}
   * @memberof ItemDefinition
   */
  materials: ReadonlyArray<ItemDefinitionMaterial>;
  /**
   * Unix timestamp in milliseconds when the item definition was created
   * @type {number}
   * @memberof ItemDefinition
   */
  createdDate: number;
  /**
   * Unix timestamp in milliseconds when the item definition was last modified
   * @type {number}
   * @memberof ItemDefinition
   */
  lastModifiedDate: number;
}
