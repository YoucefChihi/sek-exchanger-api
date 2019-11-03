/** api/index.js */

const axios = require("axios");
const { countriesEndpoint, fixerEndpoint, fixerKey } = require("../config");
const { getNeededFieldsFromCountry } = require("../utils");

const getCountryByName = async countryName => {
  try {
    const { data } = await axios.get(
      `${countriesEndpoint}/name/${countryName}`
    );
    if (data.length === 1) {
      const country = getNeededFieldsFromCountry(data[0]);
      return country;
    } else {
      /**
       * get error to resemble axios error since both can be thrown
       * and will be handled by the same catch
       * {response: {data: {status, message}}}
       */
      throw {
        response: {
          data: {
            status: 400,
            message: "There was more than one country, please refine search.",
            name: "TooManyCountries"
          }
        }
      };
    }
  } catch (error) {
    throw error;
  }
};

const mapSEKRateToCurrencies = async currencies => {
  const symbols = currencies.map(currency => currency.code).join(",") + ",SEK";
  const params = {
    access_key: fixerKey,
    symbols
  };
  const {
    data: { rates }
  } = await axios.get(`${fixerEndpoint}`, { params });
  return currencies.map(currency => ({
    ...currency,
    oneSEK: Number((rates[currency.code] / rates["SEK"]).toFixed(2))
  }));
};

module.exports = { getCountryByName, mapSEKRateToCurrencies };
