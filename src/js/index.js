import retrieveData from './weather';
import animate from './animations';

window.addEventListener('load', () => {
  const searchField = document.querySelector('#search-input');
  const searchBtn = document.querySelector('#search-button');

  const errorElement = document.querySelector('#error-message');

  searchBtn.addEventListener('click', () => {
    retrieveData(searchField.value.match(/^[^,]*/));

    searchField.value = '';
    errorElement.innerText = '';
  });

  searchField.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      retrieveData(searchField.value.match(/^[^,]*/))
  
      searchField.value = '';
      errorElement.innerText = '';
    }
  })

  retrieveData('New York');
  animate();
});
