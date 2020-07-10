/**
 * @summary TODO
 * @param {Object} [input] Additional input arguments
 * @param {String} input.shopId - Shop ID
 * @returns {Promise<Object>} Weather
 */
export default async function weather(context, input) {
  const { shopId } = input;

  const weather = "sunny";

  return {    
    shopId,
    weather
  };
}
