import { AccessPolicy } from './access-policy';

/**
 * Describes an access policy with its metadata
 * @export
 * @interface AccessPolicyItem
 */
export interface AccessPolicyItem {
  /**
   * Code identifier for the access policy
   * @type {AccessPolicy}
   * @memberof AccessPolicyItem
   */
  code: AccessPolicy;
  /**
   * Display name of the access policy
   * @type {string}
   * @memberof AccessPolicyItem
   */
  name: string;
  /**
   * Description of what this access policy grants
   * @type {string}
   * @memberof AccessPolicyItem
   */
  description: string;
}
