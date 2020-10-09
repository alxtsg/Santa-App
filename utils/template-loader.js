const mustache = require('mustache');

const fs = require('fs');

const fsPromises = fs.promises;

const readOptions = {
  encoding: 'utf8'
};

/**
 * Loads template.
 *
 * @param {string} template Template path.
 *
 * @returns {string} Template content.
 */
const load = async (template) => {
  try {
    const templateContent = await fsPromises.readFile(template, readOptions);
    // Pre-parse the template to speed up the rendering later.
    mustache.parse(templateContent);
    return templateContent;
  } catch (error) {
    throw new Error(`Unable to load template: ${error.message}`);
  }
};

module.exports = {
  load
};
