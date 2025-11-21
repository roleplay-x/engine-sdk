import { AccessPolicyItem } from './access-policy-item';

/**
 * Access policy group codes
 * @export
 * @enum {string}
 */
export enum AccessPolicyGroupCode {
  Scp = 'account_policy:group:scp',
  Configuration = 'account_policy:group:configuration',
  Localization = 'account_policy:group:localization',
  Account = 'account_policy:group:account',
  Character = 'account_policy:group:character',
  Reference = 'account_policy:group:reference',
  Session = 'account_policy:group:session',
  Segment = 'account_policy:group:segment',
}

/**
 * Groups related access policies together
 * @export
 * @interface AccessPolicyGroup
 */
export interface AccessPolicyGroup {
  /**
   * Code identifier for the access policy group
   * @type {AccessPolicyGroupCode}
   * @memberof AccessPolicyGroup
   */
  code: AccessPolicyGroupCode;
  /**
   * Display name of the access policy group
   * @type {string}
   * @memberof AccessPolicyGroup
   */
  name: string;
  /**
   * Description of the access policy group
   * @type {string}
   * @memberof AccessPolicyGroup
   */
  description: string;
  /**
   * List of access policies in this group
   * @type {Array<AccessPolicyItem>}
   * @memberof AccessPolicyGroup
   */
  policies: Array<AccessPolicyItem>;
}
