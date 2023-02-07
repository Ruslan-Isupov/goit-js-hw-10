import Notiflix from 'notiflix';
import { countryList } from './index.js';

function renderUserListItems(country) {
  let markup = '';
  if (country.length > 10) {
    clearMarkup();
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (country.length < 2) {
    markup = country
      .map(
        unit =>
          `<li class="country">
        <img src="${unit.flags.svg}"
          alt="Flag of ${unit.name}" class = "flag">
            <p class = "name"> ${unit.name.official} </p>
            <p><b>Capital</b>: ${unit.capital}</p>
            <p><b>Population</b>: ${unit.population}</p>
  
  <p><b>Languages</b>:${Object.values(unit.languages)}</p> 
          </li>`
      )
      .join('');
    countryList.innerHTML = markup;
  } else if (country.length >= 2 && country.length <= 10) {
    markup = country
      .map(
        unit =>
          `<li class="country">
        <img src="${unit.flags.svg}"
          alt="Flag of ${unit.name}" class = "flag">
            <p class = "name-plural"> ${unit.name.official} </p>
         
          </li>`
      )
      .join('');
    countryList.innerHTML = markup;
  }
}

function clearMarkup() {
  countryList.innerHTML = '';
}
export { renderUserListItems };
export { clearMarkup };
