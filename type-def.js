/**
 * Type definitions.
 */

/**
 * @typedef {object} Config
 * @property {string} web Path of web front-end directory.
 * @property {number} port Port number listened by the application.
 * @property {object} smtp SMTP configurations.
 * @property {string} smtp.host SMTP server host.
 * @property {number} smtp.port SMTP server port.
 * @property {string} smtp.user SMTP server username.
 * @property {string} smtp.password SMTP server user password.
 * @property {object} templates Page templates.
 * @property {string} templates.error Path of error page template.
 * @property {string} templates.success Path of success page template.
 * @property {string} templates.wishMail Path of wish mail template.
 * @property {number} sendWishInterval Interval of sending wishes.
 * @property {string} wishMailSender E-mail address of wish mail sender.
 * @property {string} wishMailReceiver E-mail address of wish mail receiver.
 * @property {number} maxEligibleAge Maximum eligible age for making a new wish.
 */
const Config = {};

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
 * @property {string} content Wish content.
 */
const Wish = {};

/**
 * @typedef {'pending'|'sent'} WishState
 */
const WishState = null;

/**
 * @typedef {object} WishRecord
 * @property {string} username Username.
 * @property {string} address User address.
 * @property {string} content Wish content.
 * @property {WishState} state Wish state.
 */
const WishRecord = {};

module.exports = {
  Config,
  User,
  UserProfile,
  UserRecord,
  Wish,
  WishState,
  WishRecord
};
