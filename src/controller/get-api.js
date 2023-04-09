export default async function getWeather(city) {
  // console.log(input.value)

  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=8803542d4d2f400da43183121230604&q=${city}&aqi=no)`,
    { mode: "cors" }
  );
  const weatherData = await response.json();

  console.log(weatherData.current.temp_f, weatherData.location.name);
  return weatherData;
}
