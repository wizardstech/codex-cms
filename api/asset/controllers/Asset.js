'use strict';

/**
 * Asset.js controller
 *
 * @description: A set of functions called "actions" for managing `Asset`.
 */

module.exports = {

  /**
   * Retrieve asset records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.asset.search(ctx.query);
    } else {
      return strapi.services.asset.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a asset record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.asset.fetch(ctx.params);
  },

  /**
   * Count asset records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.asset.count(ctx.query, populate);
  },

  /**
   * Create a/an asset record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.asset.add(ctx.request.body);
  },

  /**
   * Update a/an asset record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.asset.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an asset record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.asset.remove(ctx.params);
  }
};
