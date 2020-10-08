const customParseFormat = require('dayjs/plugin/customParseFormat')
const dayjs = require('dayjs');
const userServices = require('./user');
const wishValidator = require('../validators/wish');

/**
 * @typedef {import('../type-def').UserRecord} UserRecord
 * @typedef {import('../type-def').Wish} Wish
 */

dayjs.extend(customParseFormat);

/**
 * Creates a wish.
 *
 * @todo Implementation.
 *
 * @param {Wish} wish The wish being made.
 *
 * @throws {Error} When unable to create the wish.
 */
const createWish = async (wish) => {
  if (!wishValidator.isValidNewWish(wish)) {
    throw new Error('Invalid wish.');
  }
  const records = await userServices.getUserRecords();
  const isUserFound = records.some((user) => (user.username === wish.username));
  if (!isUserFound) {
    throw new Error('User not found.');
  }
  console.log(records);
};

module.exports = {
  createWish
};
