const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const config = require('./config');
const healthController = require('./controllers/health');
const wishController = require('./controllers/wish');

const sendWishScheduler = require('./schedules/send-wish');

const app = express();

app.use(bodyParser.urlencoded());
app.use(morgan());

app.use(express.static(config.web));

app.use('/health', healthController);
app.use('/wishes', wishController);

sendWishScheduler.init();

const listener = app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}.`);
});
