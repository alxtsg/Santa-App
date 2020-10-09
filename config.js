const dotenv = require('dotenv');

const path = require('path');

/**
 * @typedef {import('./type-def').Config} Config
 */

const envFile = path.join(__dirname, '.env');

/**
 * @type {Config}
 */
const config = {};

const DECIMAL_RADIX = 10;

const result = dotenv.config({
  path: envFile
});
if (result.error !== undefined) {
  throw new Error(`Unable to read .env: ${result.error.message}`);
}
const envConfig = result.parsed;
config.web = envConfig.WEB;
config.port = process.env.PORT || parseInt(envConfig.PORT, DECIMAL_RADIX);
config.smtp = {};
config.smtp.host = envConfig.SMTP_HOST;
config.smtp.port = parseInt(envConfig.SMTP_PORT, DECIMAL_RADIX);
config.smtp.user = envConfig.SMTP_AUTH_USER;
config.smtp.password = envConfig.SMTP_AUTH_PASSWORD;
config.templates = {};
config.templates.error = envConfig.ERROR_PAGE_TEMPLATE;
config.templates.success = envConfig.SUCCESS_PAGE_TEMPLATE;
config.templates.wishMail = envConfig.WISH_MAIL_TEMPLATE;
config.sendWishInterval = parseInt(envConfig.SEND_WISH_INTERVAL, DECIMAL_RADIX);
config.wishMailSender = envConfig.WISH_MAIL_SENDER;
config.wishMailReceiver = envConfig.WISH_MAIL_RECEIVER;
config.maxEligibleAge = parseInt(envConfig.MAX_ELIGIBLE_AGE, DECIMAL_RADIX);

module.exports = config;
