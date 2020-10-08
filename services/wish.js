const customParseFormat = require('dayjs/plugin/customParseFormat')
const dayjs = require('dayjs');
const userServices = require('./user');
const userModel = require('../models/user');
const wishValidator = require('../validators/wish');

/**
 * @typedef {import('../type-def').UserRecord} UserRecord
 * @typedef {import('../type-def').Wish} Wish
 */

const MIN_ELIGIBLE_AGE = 10;

dayjs.extend(customParseFormat);

const isEligible = (birthdate) => {
  const userBirthdate = dayjs(birthdate, userModel.BIRTHDATE_FORMAT);
  const now = dayjs();
  return (now.diff(userBirthdate, 'year') < MIN_ELIGIBLE_AGE);
}

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
  const record = await userServices.getUserRecordByUsername(wish.username);
  if (!record) {
    throw new Error(`User ${wish.username} not found.`);
  }
  if (!isEligible(record.birthdate)) {
    throw new Error(`${wish.username} is no longer eligible.`);
  }
};

module.exports = {
  createWish
};
