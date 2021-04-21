import { retrieveData } from './weather';

let searchField,
  searchBtn,
  errorElement = undefined;

window.addEventListener('load', () => {
  searchField = document.querySelector('#search-input');
  searchBtn = document.querySelector('#search-button');

  errorElement = document.querySelector('#error-message');

  searchBtn.addEventListener('click', () => {
    retrieveData(searchField.value);

    searchField.value = '';
    errorElement.innerText = '';
  })

  retrieveData('New York');
})
