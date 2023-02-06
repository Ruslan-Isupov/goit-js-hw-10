import './css/styles.css';
import debounce from 'lodash.debounce';
// import Notiflix from 'notiflix';
const countryList = document.querySelector(".country-list")
import {fetchCountries} from "./fetchCountries.js"
import {clearMarkup} from "./renderFunction.js" 

const DEBOUNCE_DELAY = 300;

const searchCountry = document.querySelector("#search-box")
// const countryInfo = document.querySelector(".country-info")


searchCountry.addEventListener("input", debounce(searchParticularCountry,DEBOUNCE_DELAY))

function searchParticularCountry(e){
  
const nameCountry = e.target.value.trim()

if( nameCountry === ""){
 
  return  clearMarkup()
 
}
fetchCountries(nameCountry)

}
export {countryList} 

  // fetch("https://restcountries.com/v3.1/name/peru")
// .then((res ) => res.json()).then((data) => console.log(data))