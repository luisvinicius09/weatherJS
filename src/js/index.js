let searchField = undefined;
let searchBtn = undefined;

window.addEventListener('load', () => {
  searchField = document.querySelector('#search-input');
  searchBtn = document.querySelector('#search-button');

  searchBtn.addEventListener('click', () => {
    retrieveData(searchField.value);
  })

})


const API_KEY = '1b0ad98e107c7466ad627bfc4b878e26';

const retrieveData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=${API_KEY}`;
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      mode: 'cors',
    });
    const data = await res.json();
    console.log(displayData(data))
  } catch (err) {
    console.log(err);
  }
}

retrieveData();



const displayData = (arr) => {
  let name = arr.name;
  let country = arr.sys.country
  let weather = arr.weather[0];
  let { temp: main, temp_max: max,
  temp_min: min, feels: feels_like, hum: humidity
  } = arr.main;

  console.log(convertTemperature(main));

  return { name, country, weather }
}


