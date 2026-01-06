import { TemplateCategoryId } from '../../template/models/template-category-id';

export interface DefaultNameTranslation {
  name: string;
}

export interface DefaultNameDescriptionTranslation {
  name: string;
  description: string;
}

export interface TextTranslation {
  message: string;
  description?: string;
  parameters: { key: string; description: string; example: string }[];
}

export interface ErrorTranslation {
  message: string;
  description: string;
  parameters: { key: string; description: string; example: string }[];
}

export interface TemplateTextTranslation {
  message: string;
  description: string;
  parameters: { key: string; description: string; example: string }[];
}

export interface TemplateConfigTranslation {
  message: string;
  description: string;
}

export interface CurrencyTranslation {
  name: string;
  textFormat: string;
}

export interface LocalizationData {
  errors?: {
    [key: string]: ErrorTranslation;
  };
  locales?: {
    [key: string]: DefaultNameTranslation;
  };
  metrics?: {
    definitions?: {
      [key: string]: DefaultNameDescriptionTranslation;
    };
    scopes?: {
      [key: string]: DefaultNameDescriptionTranslation;
    };
  };
  texts?: {
    [key: string]: TextTranslation;
  };
  character?: {
    nationalities?: {
      [key: string]: DefaultNameTranslation;
    };
    genders: {
      [key: string]: DefaultNameTranslation;
    };
  };
  segment?: {
    definitions?: {
      [key: string]: DefaultNameTranslation;
    };
    policy?: {
      accessPolicyGroups?: {
        [key: string]: DefaultNameDescriptionTranslation;
      };
      accessPolicies?: {
        [key: string]: DefaultNameDescriptionTranslation;
      };
      types?: {
        [key: string]: DefaultNameDescriptionTranslation;
      };
    };
  };
  reference?: {
    categories?: {
      [key: string]: DefaultNameTranslation;
    };
  };
  blueprint?: {
    sections?: {
      [key: string]: DefaultNameTranslation;
    };
    configs?: {
      [key: string]: DefaultNameTranslation;
    };
    colors?: {
      [key: string]: DefaultNameTranslation;
    };
    options?: {
      [key: string]: DefaultNameTranslation;
    };
    categories?: {
      [key: string]: DefaultNameTranslation;
    };
    configTypes?: {
      [key: string]: DefaultNameTranslation;
    };
  };
  inventory?: {
    materialTypes?: {
      [key: string]: DefaultNameDescriptionTranslation;
    };
    effectTypes?: {
      [key: string]: DefaultNameDescriptionTranslation;
    };
    equipmentSlots?: {
      [key: string]: DefaultNameDescriptionTranslation;
    };
    equipmentSlotTargets?: {
      [key: string]: DefaultNameTranslation;
    };
    equipmentSlotCategories?: {
      [key: string]: DefaultNameTranslation;
    };
    attachmentPoints?: {
      [key: string]: DefaultNameDescriptionTranslation;
    };
    ammoTypes?: {
      [key: string]: DefaultNameTranslation;
    };
    itemCategories?: {
      [key: string]: DefaultNameDescriptionTranslation;
    };
    itemDefinitions?: {
      [key: string]: DefaultNameDescriptionTranslation;
    };
    usableActions?: {
      [key: string]: DefaultNameTranslation;
    };
    usableStates?: {
      [key: string]: DefaultNameTranslation;
    };
    usableTargetTypes?: {
      [key: string]: DefaultNameTranslation;
    };
    componentTypes?: {
      [key: string]: DefaultNameTranslation;
    };
    weaponClasses?: {
      [key: string]: DefaultNameTranslation;
    };
    lockTypes?: {
      [key: string]: DefaultNameTranslation;
    };
    containerAccessTypes?: {
      [key: string]: DefaultNameTranslation;
    };
    keyTargetTypes?: {
      [key: string]: DefaultNameTranslation;
    };
    bindingEntityTypes?: {
      [key: string]: DefaultNameTranslation;
    };
  };
  ledger?: {
    currencies?: {
      [key: string]: CurrencyTranslation;
    };
    transactionTypes?: {
      [key: string]: DefaultNameDescriptionTranslation;
    };
  };
  templates?: {
    [templateId: string]: {
      [category in TemplateCategoryId]: {
        TEXTS: {
          [key: string]: TemplateTextTranslation;
        };
        CONFIGURATION: {
          [key: string]: TemplateConfigTranslation;
        };
      };
    };
  };
}

export interface Localization {
  [locale: string]: LocalizationData;
}
