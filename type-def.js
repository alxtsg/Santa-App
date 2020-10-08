/**
 * Type definitions.
 */

/**
 * @typedef {object} User
 * @property {string} username Username.
 * @property {string} uid User ID.
 */
const User = {};

/**
 * @typedef {object} UserProfile
 * @property {string} userUid User ID.
 * @property {string} address User address.
 * @property {string} birthdate User's birthdate, in YYYY/DD/MM format.
 */
const UserProfile = {};

/**
 * @typedef {object} UserRecord
 * @property {string} userUid User ID.
 * @property {string} username Username.
 * @property {string} address User address.
 * @property {string} birthdate User's birthdate, in YYYY/DD/MM format.
 */
const UserRecord = {};

/**
 * @typedef {object} Wish
 * @property {string} username Username.
 * @property {string} wish Wish content.
 */
const Wish = {};

module.exports = {
  User,
  UserProfile,
  UserRecord,
  Wish
};
