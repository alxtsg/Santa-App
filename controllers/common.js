const mustache = require('mustache');

const config = require('../config');
const templateLoader = require('../utils/template-loader');

const HTTP_STATUS = {
  OK: 200,
  NO_CONTENT: 204,
  INTERNAL_SERVER_ERROR: 500
};
const TEMPLATES = {
  ERROR: null,
  SUCCESS: null
};

const loadTemplates = async () => {
  TEMPLATES.ERROR = await templateLoader.load(config.templates.error);
  TEMPLATES.SUCCESS = await templateLoader.load(config.templates.success);
};

const renderError = (error) => mustache.render(
  TEMPLATES.ERROR,
  {
    message: error.message
  }
);

loadTemplates();

module.exports = {
  HTTP_STATUS,
  TEMPLATES,
  renderError
};
