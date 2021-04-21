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


// const retrieveData = async (city) => {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;
//   try {
//     const res = await fetch(url, {
//       method: 'POST',
//       mode: 'cors',
//     });
//     if(res.status !== 200) {
//       throw 'Ops, something went wrong!'
//     }
//     const data = await res.json();
//     displayData(filterData(data));
//     displayGifs();
//   } catch (err) {
//     displayError(err)
//     return err
//   }
// }

// const convertTemperature = (t) => {
//   return Math.round((t - 273.15).toFixed(2));
// }

// const filterData = (obj) => {
//   let name = obj.name;
//   let country = obj.sys.country;
//   let { description: desc, icon } = obj.weather[0];
//   let {
//     temp: main,
//     temp_max: max,
//     temp_min: min,
//     feels_like: feels,
//     humidity
//   } = obj.main;

//   return {
//     name,
//     country,
//     desc,
//     icon,
//     main,
//     max,
//     min,
//     feels,
//     humidity
//   };
// };

// const displayData = (obj) => {
//   mainTemp.innerText = convertTemperature(obj.main);
//   maxTemp.innerText = convertTemperature(obj.max);
//   minTemp.innerText = convertTemperature(obj.min);
//   feelsLike.innerText = convertTemperature(obj.feels);
//   humidity.innerText = obj.humidity;
//   cityName.innerText = obj.name;
//   countryName.innerText = obj.country;
// }

// const displayGifs = () => {
//   gifElement.src = 'https://media.giphy.com/media/3oFyD4xKncK6ptR7qg/giphy.gif';
//   gifElement.alt = 'GIF'
// }

// const displayError = (msg) => {
//   errorElement.innerText = msg
// }