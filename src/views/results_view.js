const PubSub = require('../helpers/pub_sub.js');

const ResultsView = function (container) {
  this.container = container
}

ResultsView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:selected-country', (event) => {
    const country = event.detail;
    this.render(country);
  });
};

ResultsView.prototype.render = function (country) {
  const countryName = document.createElement('h2');
  countryName.textContent = `${country.name}`;

  const countryFlag = document.createElement('img');
  countryFlag.classList.add('small');
  countryFlag.src = country.flag;

  const countryRegionTitle = document.createElement('h3');
  countryRegionTitle.textContent = `Region:`

  const countryRegion = document.createElement('p');
  countryRegion.textContent = `${country.region}`;

  const countryLanguagesTitle = document.createElement('h3');
  countryLanguagesTitle.textContent = `Languages:`

  const languageList = this.createLanguageList(country.languages);

  this.container.innerHTML = '';
  this.container.appendChild(countryName);
  this.container.appendChild(countryFlag);
  this.container.appendChild(countryRegionTitle);
  this.container.appendChild(countryRegion);
  this.container.appendChild(countryLanguagesTitle);
  this.container.appendChild(languageList);

};


ResultsView.prototype.createLanguageList = function (languages) {
  const list = document.createElement('ul');

  languages.forEach((language) => {
    const listItem = document.createElement('li');
    listItem.textContent = language.nativeName;
    list.appendChild(listItem);

  })
  return list;
};

module.exports = ResultsView;
