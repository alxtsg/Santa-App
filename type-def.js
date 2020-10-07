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
 * @property {string} birthday User's birthday, in YYYY/MM/DD format.
 */
const UserProfile = {};

/**
 * @typedef {object} UserRecord
 * @property {string} userUid User ID.
 * @property {string} username Username.
 * @property {string} address User address.
 * @property {string} birthday User's birthday, in YYYY/MM/DD format.
 */
const UserRecord = {};

module.exports = {
  User,
  UserProfile,
  UserRecord
};
