import { convertTemperature } from './utils';

let mainTemp = undefined;
let minTemp = undefined;
let maxTemp = undefined;
let feelsLike = undefined;
let humidity = undefined;
let cityName = undefined;
let countryName = undefined;
let gifElement = undefined;
let errorElement = undefined;

const mainTemp = document.querySelector('#main-temp');
const minTemp = document.querySelector('#min-temp');
const maxTemp = document.querySelector('#max-temp');
const feelsLike = document.querySelector('#feels-like');
const humidity = document.querySelector('#humidity');

const cityName = document.querySelector('#city-name');
const countryName = document.querySelector('#country-name');

const gifElement = document.querySelector('#weather-gif');

const errorElement = document.querySelector('#error-message');

const API_KEY = 'PUT THE API KEY HERE';

const filterData = (obj) => {
  const { name } = obj;
  const { country } = obj.sys;
  const { description: desc, icon } = obj.weather[0];
  const {
    temp: main,
    temp_max: max,
    temp_min: min,
    feels_like: feels,
    humidity,
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
    humidity,
  };
};

const displayData = (obj) => {
  mainTemp.innerText = convertTemperature(obj.main);
  maxTemp.innerText = convertTemperature(obj.max);
  minTemp.innerText = convertTemperature(obj.min);
  feelsLike.innerText = convertTemperature(obj.feels);
  humidity.innerText = obj.humidity;
  cityName.innerText = obj.name;
  countryName.innerText = obj.country;
};

const displayGifs = () => {
  gifElement.src = 'https://media.giphy.com/media/3oFyD4xKncK6ptR7qg/giphy.gif';
  gifElement.alt = 'GIF';
};

const displayError = (msg) => {
  errorElement.innerText = msg;
};

const retrieveData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      mode: 'cors',
    });
    if (res.status !== 200) {
      throw 'Ops, something went wrong!';
    }
    const data = await res.json();
    return data;
    displayData(filterData(data));
    displayGifs();
  } catch (err) {
    displayError(err);
    return err;
  }
};

export {
  retrieveData,
};
