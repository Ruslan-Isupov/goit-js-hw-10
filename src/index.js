import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
const countryList = document.querySelector(".country-list")
import {fetchCountries} from "./fetchCountries.js"
import {renderUserListItems} from "./renderFunction.js"
import {clearMarkup} from "./renderFunction.js" 

const DEBOUNCE_DELAY = 300;

const searchCountry = document.querySelector("#search-box")



searchCountry.addEventListener("input", debounce(searchParticularCountry,DEBOUNCE_DELAY))

function searchParticularCountry(e){
  
const nameCountry = e.target.value.trim()

if( nameCountry === ""){
 
  return  clearMarkup()
 
}
fetchCountries(nameCountry).then(country => {
  renderUserListItems(country);
})
.catch(error => {
  countryList.innerHTML = "";
  Notiflix.Notify.failure('Oops, there is no country with that name');
});

}
export {countryList} 

