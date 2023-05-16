/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { CategoryVo } from "./category-vo";
// May contain unused imports in some cases
// @ts-ignore
import { ContributorVo } from "./contributor-vo";
// May contain unused imports in some cases
// @ts-ignore
import { Metadata } from "./metadata";
// May contain unused imports in some cases
// @ts-ignore
import { PostSpec } from "./post-spec";
// May contain unused imports in some cases
// @ts-ignore
import { PostStatus } from "./post-status";
// May contain unused imports in some cases
// @ts-ignore
import { StatsVo } from "./stats-vo";
// May contain unused imports in some cases
// @ts-ignore
import { TagVo } from "./tag-vo";

/**
 *
 * @export
 * @interface ListedPostVo
 */
export interface ListedPostVo {
  /**
   *
   * @type {Array<CategoryVo>}
   * @memberof ListedPostVo
   */
  categories?: Array<CategoryVo>;
  /**
   *
   * @type {Array<ContributorVo>}
   * @memberof ListedPostVo
   */
  contributors?: Array<ContributorVo>;
  /**
   *
   * @type {Metadata}
   * @memberof ListedPostVo
   */
  metadata: Metadata;
  /**
   *
   * @type {ContributorVo}
   * @memberof ListedPostVo
   */
  owner?: ContributorVo;
  /**
   *
   * @type {PostSpec}
   * @memberof ListedPostVo
   */
  spec?: PostSpec;
  /**
   *
   * @type {StatsVo}
   * @memberof ListedPostVo
   */
  stats?: StatsVo;
  /**
   *
   * @type {PostStatus}
   * @memberof ListedPostVo
   */
  status?: PostStatus;
  /**
   *
   * @type {Array<TagVo>}
   * @memberof ListedPostVo
   */
  tags?: Array<TagVo>;
}
