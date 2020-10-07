const ajv = require('ajv');

const newWishSchema = require('./new-wish-schema.json');

const newWishValidation = ajv.compile(newWishSchema);

const isValidNewWish = (wish) => newWishValidation(wish);

module.exports = {
  isValidNewWish
};
