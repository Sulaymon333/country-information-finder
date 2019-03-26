// DOM elements
const input = document.querySelector('#input');
const actions = document.querySelector('.actions');
const startsWithButton = document.querySelector('#starts');
const containsButton = document.querySelector('#contains');
const sort = document.querySelector('#sort');
const countriesTotal = document.querySelector('.total-countries');
let countriesContainer = document.querySelector('.countries-container');

/* country divs have
 div - flag
 h1  - name
 h2 - capital
 p - language
 p - population
*/

// build country DIV's
function countryDivs(name, capital, languages, population, flag) {
  const countryDiv = document.createElement('div');
  countryDiv.classList.add('country');
  countryDiv.innerHTML += `<div><img src="${flag}"/></div>`;
  countryDiv.innerHTML += `<h1>${name}</h1>`;
  countryDiv.innerHTML += `<p><span>Capital: <b>${capital}</b></p>`;
  countryDiv.innerHTML += `<p>Languages: <b>${languages.join(', ')}</b></p>`;
  countryDiv.innerHTML += `<p>Population: <b>${String(population)}</b></h1>`;
  countryDiv.style.color = 'red';
  countryDiv.style
    .fontWeight = '500'
  countryDiv.style.backgroundColor = `rgba(255, 255, 255, 0.7)`;
  countriesContainer.appendChild(countryDiv);
}

// Get ech country data
countries.forEach((country) => {
  let {
    name,
    capital,
    languages,
    population,
    currency
  } = country
})
let w = '';
console.log(String(name.population).split('').forEach((item, index) => {
  console.log(item)

  if ((index + 2) % 3 == 0) {

    w += item
  }
  console.log(w);
}));


// Button Switcher function
startsWithButton.classList.add('selected-button');

function buttonSwitcher(button1, button2) {
  button2.addEventListener('click', function () {
    button2.classList.add('selected-button');
    button1.classList.remove('selected-button');
  });
}
buttonSwitcher(startsWithButton, containsButton) // starts with
buttonSwitcher(containsButton, startsWithButton) // contains

// capitalize input
function capitalize(value) {
  let firstItem = value.slice(0, 1).toUpperCase();
  return (value = firstItem + value.slice(1));
}

// Get the total number of countries and style it - default
countriesTotal.innerHTML = countries.length;
countriesTotal.style.fontWeight = '700';

// Show all the countries - default view
countries.forEach(country => {
  // Get ech country data
  let {
    name,
    capital,
    languages,
    population,
    flag
  } = country
  countryDivs(name, capital, languages, population, flag);
});

// initialize sort type arrays
let startsWith;
let contains;

input.addEventListener('keyup', function (e) {
  // contains = countries.filter(country => {
  //   return country.toLowerCase().includes((e.target.value.toLowerCase()));
  // });
  sortType(contains)
  containsButton.addEventListener('click', containsChecker);

  startsWith = countries.filter(country => {
    countriesContainer.innerHTML = '';
    return country.startsWith(capitalize(e.target.value));
  });
  sortType(startsWith)
  startsWithButton.addEventListener('click', startsWithChecker);
});

// starts with function
function startsWithChecker() {
  countriesContainer.innerHTML = '';
  sortType(startsWith);
}

// contains function
function containsChecker() {
  countriesContainer.innerHTML = '';
  sortType(contains)
}

// get sorted data without clicking buttons
function sortType(sortType) {
  sortType.forEach(countrySorted => {
    countryDivs(countrySorted)
  });
  countriesTotal.innerHTML = sortType.length;
}