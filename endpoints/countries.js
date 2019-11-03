/** /countries endpoint */
const { getCountryByName, mapSEKRateToCurrencies } = require("../api");

const get = async (req, res) => {
  const {
    cookies,
    query: { countryName }
  } = req;
  if (countryName) {
    try {
      const country = await getCountryByName(countryName);
      const currencies = await mapSEKRateToCurrencies(country.currencies);
      country.currencies = currencies;
      res.send(country);
    } catch (error) {
      if (error.response) {
        const {
          data: { status, message }
        } = error.response;
        res.status(status).send(message);
      } else {
        res.status(500).send("Internal Server Error");
      }
    }
  } else {
    res.status(400).send("No country name provided.");
  }
};

module.exports = {
  get
};
