const AllCountries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const ResultsView = require('./views/results_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const allCountries = new AllCountries();
  allCountries.getData();
  allCountries.bindEvents();

  const selectElement = document.querySelector('select#countries');
  const countryDropdown = new SelectView(selectElement);
  countryDropdown.bindEvents();

  const infoDiv = document.querySelector('div#country');
  const resultsView = new ResultsView(infoDiv);
  resultsView.bindEvents();
});
