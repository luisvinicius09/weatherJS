// import convertTemperature from './utils';

let searchField,
  searchBtn,
  mainTemp,
  minTemp,
  maxTemp,
  feelsLike,
  humidity = undefined;

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
    if(res.status !== 200) {
      throw 'Ops, something went wrong!'
    }
    const data = await res.json();
    console.log(filterData(data))
  } catch (err) {
    return err
  }
}

const convertTemperature = (t) => {
  return Math.round((t - 273.15).toFixed(2));
}

retrieveData();

const filterData = (obj) => {
  let name = obj.name;
  let country = obj.sys.country;
  let { description: desc, icon } = obj.weather[0];
  let {
    temp: main,
    temp_max: max,
    temp_min: min,
    feels_like: feels,
    humidity
  } = obj.main;

  return {
    name,
    country,
    desc,
    icon,
    main,
    max,
    min,
    feels,
    humidity
  };
};

const displayData = (obj) => {
  
}
