const Ajv = require('ajv');

const newWishSchema = require('./new-wish-schema.json');

/**
 * @typedef {import('../type-def').Wish} Wish
 */

const ajv = new Ajv();

const newWishValidation = ajv.compile(newWishSchema);

/**
 * Checks if the wish is valid.
 *
 * @param {Wish} wish The wish from the user.
 *
 * @returns {boolean} True if the wish is valid, false otherwise.
 */
const isValidNewWish = (wish) => newWishValidation(wish);

module.exports = {
  isValidNewWish
};
