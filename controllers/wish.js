const express = require('express');
const mustache = require('mustache');

const commonController = require('./common');
const wishService = require('../services/wish');

const router = express.Router();

router.post('/', async (request, response) => {
  console.log(request.body);
  try {
    await wishService.createWish(request.body);
    const responseContent = mustache.render(
      commonController.TEMPLATES.SUCCESS,
      request.body
    )
    response.status(commonController.HTTP_STATUS.OK)
      .send(responseContent);
  } catch (error) {
    response.status(commonController.HTTP_STATUS.OK)
      .send(commonController.renderError(error));
  }
});

module.exports = router;
