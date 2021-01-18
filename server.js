"use strict"
const express = require('express');
const app = express();
const { PORT } = require('./config/index');

//init configs
require('./config/express').initExpress(app)
require('./config/routes').initRoutes(app)
require('./config/mongoose').initMongoose()

require('./config/finalRoute').finalRoute(app)
require('./config/errorHandling').errorHandling(app)

app.listen(PORT, function () {
  console.log(`app is running ${PORT}`);
})
