/** middlewares/index.js */

const cors = require("./cors");
const rateLimit = require("./rateLimit");
const auth = require("./auth");

module.exports = ({ app }) => {
  app.use(cors);
  app.use(rateLimit);
  app.use(auth);
};
