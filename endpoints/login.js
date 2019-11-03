/** /login endpoint */
const jwt = require("jsonwebtoken");
const { secret, tokenMaxAge } = require("../config");

const get = (req, res) => {
  const randomNumber = Math.random().toString();
  const data = randomNumber.substring(2, randomNumber.length);
  const token = jwt.sign(data, secret);
  res.cookie("token", token, { maxAge: tokenMaxAge, httpOnly: true });
  res.send("Random token generated. Logged in succefully.");
};

module.exports = {
  get
};
