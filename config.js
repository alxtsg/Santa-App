const dotenv = require('dotenv');

const path = require('path');

const envFile = path.join(__dirname, '.env');

const config = {
  web: null,
  port: null,
  templates: {
    error: null,
    success: null
  }
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

module.exports = config;
