const rateLimit = require("express-rate-limit");
const { rateLimitWindowMs, maxReqPerWindowMs } = require("../config");

module.exports = rateLimit({
  windowMs: rateLimitWindowMs,
  max: maxReqPerWindowMs,
  keyGenerator: ({ cookies: { token } }) => token
});
