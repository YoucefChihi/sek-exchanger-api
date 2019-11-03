/** utils/index.js */

const getNeededFieldsFromCountry = country => {
  const { name, population, currencies } = country;
  return { name, population, currencies };
};

module.exports = { getNeededFieldsFromCountry };
