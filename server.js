const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const config = require('./config');
const healthController = require('./controllers/health');
const sendWishScheduler = require('./schedulers/send-wish');
const wishController = require('./controllers/wish');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('combined'));

app.use(express.static(config.web));

app.use('/health', healthController);
app.use('/wishes', wishController);

sendWishScheduler.init();

const listener = app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}.`);
});
