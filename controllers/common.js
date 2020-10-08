const mustache = require('mustache');

const fs = require('fs');

const config = require('../config');

const fsPromise = fs.promises;

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
  try {
    const loadOptions = {
      encoding: 'utf8'
    };
    TEMPLATES.ERROR = await fsPromise.readFile(
      config.templates.error,
      loadOptions
    );
    TEMPLATES.SUCCESS = await fsPromise.readFile(
      config.templates.success,
      loadOptions
    );
    // Pre-parse the templates to speed up the rendering later.
    mustache.parse(TEMPLATES.ERROR);
    mustache.parse(TEMPLATES.SUCCESS);
  } catch (error) {
    throw new Error(`Unable to load template(s): ${error.message}`);
  }
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
