const mustache = require('mustache');

const config = require('../config');
const mailService = require('../services/mail');
const templateLoader = require('../utils/template-loader');
const wishModel = require('../models/wish');
const wishService = require('../services/wish');

/**
 * @typedef {import('../type-def').WishRecord} WishRecord
 */

let mailTemplate = null;

const loadTemplate = async () => {
  mailTemplate = await templateLoader.load(config.templates.wishMail);
};

/**
 * Sends wishes.
 *
 * @param {WishRecord[]} wishes Wishes to be sent.
 */
const sendWishes = async (wishes) => {
  wishes.forEach((wish) => {
    const {
      username,
      address,
      content
    } = wish;
    const subject = `New wish from ${username}`;
    const view = {
      username,
      address,
      content
    };
    const html = mustache.render(mailTemplate, view);
    const mail = {
      from: config.wishMailSender,
      to: config.wishMailReceiver,
      subject,
      html
    };
    mailService.send(mail)
      .then(() => {
        wish.state = wishModel.STATES.SENT;
      })
      .catch(() => {
        console.error('Failed to send wish mail. Try again later.');
      });
  });
};

const init = () => {
  setInterval(() => {
    const wishes = wishService.getPendingWishes();
    sendWishes(wishes);
  }, config.sendWishInterval * 1000);
};

loadTemplate();

module.exports = {
  init
};
