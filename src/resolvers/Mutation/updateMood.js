import { decodeProductOpaqueId, decodeShopOpaqueId } from "../../xforms/id.js";

/**
 * @name Mutation/updateMood
 * @summary TODO
 * @param {Object} _ unused
 * @param {Object} args - an object of all arguments that were sent by the client
 * @param {String} args.shopId - Shop id
 * @param {Object} context - an object containing the per-request state
 * @returns {Promise<String>} Mood
 */
export default async function updateMood(_, args, context) {
  const {
    mood,  
    shopId: opaqueShopId,
  } = args;

  const shopId = decodeShopOpaqueId(opaqueShopId);

  return context.mutations.updateMood(context, {
    mood,  
    shopId
  });
}