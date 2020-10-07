const express = require('express');

const commonController = require('./common');
const wishService = require('../services/wish');

const router = express.Router();

router.post('/', async (request, response) => {
  /**
   * @todo Implementation.
   */
  response.status(commonController.HTTP_STATUS.OK)
    .json({
      data: '...'
    });
});

module.exports = router;
