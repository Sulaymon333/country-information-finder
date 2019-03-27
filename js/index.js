//***NOTE git push -u countries master - not origin***//

// DOM elements
const inputField = document.querySelector('#input');
const actions = document.querySelector('.actions');
const sortByNameButton = document.querySelector('#name');
const sortByCapitalButton = document.querySelector('#capital');
const sortByPopulationButton = document.querySelector('#population');
const countriesTotal = document.querySelector('.total-countries');
let countriesContainer = document.querySelector('.countries-container');

/* ShowCountries() function */
const showCountries = (arr) => {
  arr.forEach((country) => {
    let {
      name,
      capital,
      languages,
      flag,
      population
    } = country
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country');
    countryDiv.innerHTML += `<div><img src="${flag}"/></div>`;
    countryDiv.innerHTML += `<h1>${name}</h1>`;
    countryDiv.innerHTML += `<p><span>Capital: <b>${capital}</b></p>`;
    countryDiv.innerHTML += `<p>Languages: <b>${languages.join(', ')}</b></p>`;
    countryDiv.innerHTML += `<p>Population: <b>${population.toLocaleString()}</b></h1>`;
    countryDiv.style.color = 'red';
    countryDiv.style
      .fontWeight = '500'
    countryDiv.style.backgroundColor = `rgba(255, 255, 255, 0.7)`;
    countriesContainer.appendChild(countryDiv);
  })
  // Get the total number of countries and style it - default
  countriesTotal.innerHTML = arr.length;
  countriesTotal.style.fontWeight = '700';
}
showCountries(countries)

let [
  name,
  capital,
  languages,
  population,
  currency
] = countries

/*=== sortCountriesByName() function ===*/
const filterCountriesBySearchTerm = (arr, searchTerm) => {
  let filtered = arr.filter((country) => {
    let {
      name,
      capital,
      languages
    } = country
    let match = name.toLowerCase().includes(searchTerm.toLowerCase()) || capital.toLowerCase().includes(searchTerm.toLowerCase()) || languages.join(',').toLowerCase().includes(searchTerm.toLowerCase())
    return match
  })
  // console.log(filtered);
  let result = searchTerm == '' ? arr : filtered
  return result;
}

/*=== EVENT LISTENERS ===*/
/*=== An event listener for sort by name button ===*/
inputField.addEventListener('input', (e) => {
  countriesContainer.innerHTML = '';
  const searchTerm = e.target.value;
  showCountries(filterCountriesBySearchTerm(countries, searchTerm))

})
/*=== An event listener for sort by name button ===*/
sortByNameButton.addEventListener('click', () => {
  sortByNameButton.classList.add('selected-button')
  const otherButtons = buttonSiblings(sortByNameButton)
  otherButtons.forEach((button) => {
    if (button.classList.contains('selected-button')) {
      button.classList.remove('selected-button')
    }
  })
  countriesContainer.innerHTML = '';
  showCountries(filterCountriesBySearchTerm(countries, inputField.value).sort((a, b) => {
    if (a.name < b.name) {
      return 1
    }
    if (a.name > b.name) {
      return -1
    }
    return 0
  }))
})
/*=== An event listener for sort by capital button ===*/
sortByCapitalButton.addEventListener('click', () => {
  sortByCapitalButton.classList.add('selected-button')
  const otherButtons = buttonSiblings(sortByCapitalButton)
  otherButtons.forEach((button) => {
    if (button.classList.contains('selected-button')) {
      button.classList.remove('selected-button')
    }
  })
  countriesContainer.innerHTML = '';
  showCountries(filterCountriesBySearchTerm(countries, inputField.value).sort((a, b) => {
    if (a.capital < b.capital) {
      return -1
    }
    if (a.capital > b.capital) {
      return 1
    }
    return 0
  }))
})
/*=== An event listener for sort by population button ===*/
sortByPopulationButton.addEventListener('click', () => {
  sortByPopulationButton.classList.add('selected-button')
  const otherButtons = buttonSiblings(sortByPopulationButton)
  otherButtons.forEach((button) => {
    if (button.classList.contains('selected-button')) {
      button.classList.remove('selected-button')
    }
  })

  countriesContainer.innerHTML = '';
  showCountries(filterCountriesBySearchTerm(countries, inputField.value).sort((a, b) => {
    if (a.population < b.population) {
      return 1
    }
    if (a.population > b.population) {
      return -1
    }
    return 0
  }))
})

/* ButtonChanger() */
const buttonSiblings = n => [...n.parentElement.children].filter(currentButton => currentButton.nodeType === 1 && currentButton != n)