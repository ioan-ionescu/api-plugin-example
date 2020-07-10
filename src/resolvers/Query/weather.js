import { decodeProductOpaqueId, decodeShopOpaqueId } from "../../xforms/id.js";

/**
 * @name Query/weather
 * @method
 * @summary TODO
 * @param {Object} _ - unused
 * @param {Object} args - an object of all arguments that were sent by the client
 * @param {String} args.shopId - Shop id of the product
 * @param {Object} context - an object containing the per-request state
 * @returns {Promise<Object>} Weather
 */
export default async function weather(_, args, context) {
  const {
    shopId: opaqueShopId
  } = args;

  const shopId = decodeShopOpaqueId(opaqueShopId);

  return context.queries.weather(context, {
    shopId
  });
}
