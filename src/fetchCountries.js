// import Notiflix from 'notiflix';
// import './css/styles.css';
// import { countryList } from "./index.js";

// import {renderUserListItems} from "./renderFunction.js"



const fetchCountries = function (nameCountry) {

  return fetch(
    `https://restcountries.com/v3.1/name/${nameCountry}?fields=name,capital,population,flags,languages`
  )
    .then(resp => {
      if (!resp.ok) throw new Error('Oops, there is no country with that name');

      return resp.json();
    })
    
};

export { fetchCountries };

