require('dotenv').config();
var http = require("https");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
app.use(cors())
app.use(bodyParser.json({ charset: 'utf-8', limit: '2000kb' }));

const API_KEY = process.env.API_KEY;
const APP_ID = process.env.APP_ID;
app.listen(8081, () => {
  console.log("listening");
})

var options = {
    "method": "GET",
    "hostname": "api.schiphol.nl",
    "port": 443,
    "path": "/public-flights/flights",
    "headers": {
      "resourceversion": "v4",
      "app_id": APP_ID,
      "app_key": API_KEY,
    };
  };
  
  var req = http.request(options, function (res) {
    var chunks = [];
  
    res.on("data", function (chunk) {
      chunks.push(chunk);
    });
  
    res.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });

  req.end();
  app.get('/flights', (req, res) => {
  })
