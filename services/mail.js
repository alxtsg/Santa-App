const mailer = require('nodemailer');

const config = require('../config');

/**
 * @typedef {import('nodemailer').SendMailOptions} MailOptions
 */

const transporter = mailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  auth: {
    user: config.smtp.user,
    pass: config.smtp.password
  }
});

/**
 * Sends mail.
 *
 * @param {MailOptions} mail Mail options.
 */
const send = async (mail) => {
  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error(`Failed to send mail: ${error.message}`);
    throw error;
  }
};

module.exports = {
  send
};
