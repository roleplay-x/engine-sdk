import { ItemComponent } from './components/item-component';
import { ItemLocation } from './item-location';
import { ItemState } from './item-state';
import { ItemCategory } from './item-category';
import { MaterialType } from './material-type';

/**
 * Represents an item instance in the game world
 * @export
 * @interface Item
 */
export interface Item {
  /**
   * Unique identifier for this item instance
   * @type {string}
   * @memberof Item
   */
  id: string;
  /**
   * ID of the item definition this item is based on
   * @type {string}
   * @memberof Item
   */
  definitionId: string;
  /**
   * Definition code of the item definition
   * @type {string}
   * @memberof Item
   */
  definitionCode: string;
  /**
   * Revision number of the item definition used
   * @type {number}
   * @memberof Item
   */
  definitionRevisionNumber: number;
  /**
   * Localized display name of the item
   * @type {string}
   * @memberof Item
   */
  name?: string;
  /**
   * Localized description of the item
   * @type {string}
   * @memberof Item
   */
  description?: string;
  /**
   * Current amount/quantity of the item
   * @type {number}
   * @memberof Item
   */
  amount: number;
  /**
   * Current location of the item
   * @type {ItemLocation}
   * @memberof Item
   */
  location: ItemLocation;
  /**
   * Runtime state of the item
   * @type {ItemState}
   * @memberof Item
   */
  state: ItemState;
  /**
   * ID of the parent item this item is attached to (if applicable)
   * @type {string}
   * @memberof Item
   */
  attachedTo?: string;
  /**
   * Material type information (if applicable)
   * @type {MaterialType}
   * @memberof Item
   */
  materialType?: MaterialType;
  /**
   * List of components that define the item's behavior
   * @type {ReadonlyArray<ItemComponent>}
   * @memberof Item
   */
  components: ReadonlyArray<ItemComponent>;
  /**
   * Category of the item
   * @type {ItemCategory}
   * @memberof Item
   */
  category: ItemCategory;
  /**
   * Primary unit of measurement
   * @type {string}
   * @memberof Item
   */
  primaryUnit: string;
  /**
   * Weight per unit in kilograms
   * @type {number}
   * @memberof Item
   */
  weightPerUnit: number;
  /**
   * Volume per unit in liters
   * @type {number}
   * @memberof Item
   */
  volumePerUnit: number;
  /**
   * Total weight of this item instance (amount * weightPerUnit)
   * @type {number}
   * @memberof Item
   */
  totalWeight: number;
  /**
   * Total volume of this item instance (amount * volumePerUnit)
   * @type {number}
   * @memberof Item
   */
  totalVolume: number;
  /**
   * URL to the icon image representing this item
   * @type {string}
   * @memberof Item
   */
  iconUrl?: string;
  /**
   * Custom attributes for this item
   * @type {Record<string, string>}
   * @memberof Item
   */
  attributes: Record<string, string>;
}
