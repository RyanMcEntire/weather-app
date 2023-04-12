import componentElements from '../data/components';
import components from '../data/subcomponents';
import MyWeather from '../data/weather-class';
import getWeather from './get-api';

// const defaultWeatherData = getWeather('ogden');

async function defaultWeather() {
  const data = await getWeather('Ogden');
  console.log('async call', data);
  return new MyWeather(data);
}

const ele = components();
const section = componentElements();

export default async function defaultPageBuild() {
  const format = 'amer';
  const weather = await defaultWeather();
  const city = weather.getCity();
  const country = weather.getCountry();
  const localTime = weather.getTime();
  // TODO: add day high and low to class object and method
  const dayHigh = weather.getMaxTemp(format)
  const nightLow = weather.getMinTemp(format);
  const currentTemp = weather.getTemp(format);
  const conditionText = weather.getCondition();
  console.log('weather-object', city, weather);
  // 
  return ele
    .divCI('main-area', 'main-area')
    .addChild(section.inputForm(city))
    .addChild(section.location(city, country, localTime))
    .addChild(section.hero(dayHigh, nightLow, currentTemp, conditionText))
    .build();
}

// export default function defaultPageBuild() {
//   return ele
//     .divCI("main-area", "main-area")
//     .addChild(section.inputForm())
//     .addChild(section.location())
//     .addChild(section.hero())
//     .build();
// }
