/** not found endpoint */

const get = (req, res) => {
  res.status(404).send("Endpoint not found.");
};

module.exports = {
  get
};
