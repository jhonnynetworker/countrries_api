const CountryApi = {};
const countriesJson = require("./countries.json");

const countries = countriesJson;

CountryApi.getCountryNamesList = function () {
  return countries.map((country) => country.name);
};

CountryApi.getRegions = function () {
  const regions = new Set();
  countries.map((country) => regions.add(country.region));
  return Array.from(regions);
};

CountryApi.getCountriesFromRegion = function (region) {
  return countries
    .filter((country) => country.region === region)
    .map((country) => {
      return country.name;
    });
};

CountryApi.getCountryByName = function (name) {
  return countries.filter((country) => country.name === name)[0];
};

module.exports = CountryApi;
