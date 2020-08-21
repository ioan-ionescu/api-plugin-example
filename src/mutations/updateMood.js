/**
 * @summary TODO
 * @param {Object} [input] Additional input arguments
 * @param {String} input.mood - new mood
 * @param {String} input.shopId - Shop ID
 * @returns {Promise<String>} old mood
 */
export default async function updateMood(context, input) {
  const {
    mood,
    shopId
  } = input;
  
  const oldMood = "cheerful";

  return oldMood;
}
  