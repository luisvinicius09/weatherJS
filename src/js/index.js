import { retrieveData } from './weather';

window.addEventListener('load', () => {
  const searchField = document.querySelector('#search-input');
  const searchBtn = document.querySelector('#search-button');

  const errorElement = document.querySelector('#error-message');

  searchBtn.addEventListener('click', () => {
    retrieveData(searchField.value);

    searchField.value = '';
    errorElement.innerText = '';
  });

  retrieveData('New York');
});
