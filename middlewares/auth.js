const jwt = require("jsonwebtoken");
const { secret } = require("../config");

module.exports = (req, res, next) => {
  const { cookies, originalUrl } = req;
  console.log(cookies);
  if (originalUrl === "/login") {
    next();
  } else if (cookies.token) {
    try {
      jwt.verify(cookies.token, secret);
      next();
    } catch (error) {
      res.status(401).send("Unauthorized. Invalid token provided.");
    }
  } else {
    res.status(401).send("Unauthorized. No token provided.");
  }
};
