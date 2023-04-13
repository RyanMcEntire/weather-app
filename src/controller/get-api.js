export default async function getWeather(city) {
  // console.log(input.value)

  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=8803542d4d2f400da43183121230604&q=${city}&days=1&aqi=no&alerts=no`,
    { mode: 'cors' }
  );
  const weatherData = await response.json();
  return weatherData;
}
