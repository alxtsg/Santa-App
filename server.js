const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const healthController = require('./controllers/health');
const wishController = require('./controllers/wish');

const app = express();

app.use(bodyParser());
app.use(morgan());

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.use('/health', healthController);
app.use('/wishes', wishController);

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
