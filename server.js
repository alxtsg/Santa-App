const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const config = require('./config');
const healthController = require('./controllers/health');
const wishController = require('./controllers/wish');

const app = express();

app.use(bodyParser());
app.use(morgan());

app.use(express.static(config.web));

app.use('/health', healthController);
app.use('/wishes', wishController);

const listener = app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}.`);
});
