
const API_KEY = '1b0ad98e107c7466ad627bfc4b878e26';

const retrieveData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      mode: 'cors',
    });
    const data = await res.json();
    console.log(data)
  } catch (err) {
    console.log(err);
  }
}
