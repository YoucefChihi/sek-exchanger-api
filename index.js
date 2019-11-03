const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const endpoints = require("./endpoints");
const middlewares = require("./middlewares");

const port = 4000;
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser());

middlewares({ app });
endpoints({ app });

app.listen(port, () => {
  console.log("running on port:", port);
});
