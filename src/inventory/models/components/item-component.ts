import { WeaponComponent } from './weapon-component';
import { ContainerComponent } from './container-component';
import { UsableComponent } from './usable-component';
import { EquippableComponent } from './equippable-component';
import { DurableComponent } from './durable-component';
import { StackableComponent } from './stackable-component';
import { PerishableComponent } from './perishable-component';
import { AmmunitionComponent } from './ammunition-component';
import { AttachableComponent } from './attachable-component';
import { AttachmentSlotsComponent } from './attachment-slots-component';
import { KeyComponent } from './key-component';
import { CurrencyComponent } from './currency-component';

/**
 * Union type for all item components
 * @export
 * @type ItemComponent
 */
export type ItemComponent =
  | WeaponComponent
  | ContainerComponent
  | UsableComponent
  | EquippableComponent
  | DurableComponent
  | StackableComponent
  | PerishableComponent
  | AmmunitionComponent
  | AttachableComponent
  | AttachmentSlotsComponent
  | KeyComponent
  | CurrencyComponent;
