const customParseFormat = require('dayjs/plugin/customParseFormat')
const dayjs = require('dayjs');

const cache = require('../cache');
const config = require('../config');
const userModel = require('../models/user');
const userServices = require('./user');
const wishModel = require('../models/wish');
const wishValidator = require('../validators/wish');

/**
 * @typedef {import('../type-def').Wish} Wish
 */

dayjs.extend(customParseFormat);

const isEligible = (birthdate) => {
  const userBirthdate = dayjs(birthdate, userModel.BIRTHDATE_FORMAT);
  const now = dayjs();
  return (now.diff(userBirthdate, 'year') < config.maxEligibleAge);
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
  cache.wishesCache.push({
    username: wish.username,
    address: record.address,
    content: wish.content,
    state: wishModel.STATES.PENDING
  });
  console.log(cache.wishesCache);
};

const getPendingWishes = () => cache.wishesCache.filter((item) =>
  (item.state === wishModel.STATES.PENDING)
);

module.exports = {
  createWish,
  getPendingWishes
};
