const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const AllCountries = function(countries) {
  this.countries = null;
};

AllCountries.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all');
  requestHelper.get( (data) => {
    this.countries = data;
    PubSub.publish('Countries:all-countries-loaded', this.countries);
  });
};

AllCountries.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    this.publishCountryDetail(selectedIndex);
  });
};

AllCountries.prototype.publishCountryDetail = function (countryIndex) {
  const selectedCountry = this.countries[countryIndex];
  PubSub.publish('Country:selected-country', selectedCountry);
};


module.exports = AllCountries;
