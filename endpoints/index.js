/** endpoints/index.js */

const countries = require("./countries");
const login = require("./login");
const notFound = require("./notFound");

module.exports = ({ app }) => {
  app.get("/countries", countries.get);
  app.get("/login", login.get);

  app.get("*", notFound.get);
};
