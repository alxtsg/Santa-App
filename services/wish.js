const customParseFormat = require('dayjs/plugin/customParseFormat')
const dayjs = require('dayjs');
const userServices = require('./user');

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
  const userRecords = await userServices.getUserRecords();
  console.log(userRecords);
};

module.exports = {
  createWish
};
