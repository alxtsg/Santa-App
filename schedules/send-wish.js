const config = require('../config');

const wishService = require('../services/wish');

const sendWish = async () => {};

const sendWishes = async () => {};

const init = () => {
  setInterval(() => {
    const wishes = wishService.getPendingWishes();
    console.log('Pending wishes', wishes);
    sendWishes(wishes);
  }, config.sendWishInterval * 1000);
};

module.exports = {
  init
};
