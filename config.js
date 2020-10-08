const dotenv = require('dotenv');

const path = require('path');

/**
 * @typedef {import('./type-def').Config} Config
 */

const envFile = path.join(__dirname, '.env');

/**
 * @type {Config}
 */
const config = {
  web: null,
  port: null,
  templates: {
    error: null,
    success: null
  },
  sendWishInterval: null,
  maxEligibleAge: null
};

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
config.templates.error = envConfig.ERROR_PAGE_TEMPLATE;
config.templates.success = envConfig.SUCCESS_PAGE_TEMPLATE;
config.sendWishInterval = parseInt(envConfig.SEND_WISH_INTERVAL, DECIMAL_RADIX);
config.maxEligibleAge = parseInt(envConfig.MAX_ELIGIBLE_AGE, DECIMAL_RADIX);

module.exports = config;
