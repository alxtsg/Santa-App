const express = require('express');

const commonController = require('./common');
const healthService = require('../services/health');

const router = express.Router();

router.get('/', (request, response) => {
  const isOk = healthService.check();
  if (!isOk) {
    response.status(commonController.HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({
        error: 'API is down!'
      });
    return;
  }
  response.status(commonController.HTTP_STATUS.OK)
    .json({
      data: 'API is ready.'
    });
  return;
});

module.exports = router;
