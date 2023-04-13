import componentElements from '../data/components';
import components from '../data/subcomponents';
import MyWeather from '../data/weather-class';
import getWeather from './get-api';

// const defaultWeatherData = getWeather('ogden');

async function defaultWeather() {
  const data = await getWeather('Ogden');
  console.table('data', data);
  return new MyWeather(data);
}



const ele = components();
const section = componentElements();

export async function pageBuild(weather, format) {
  const city = weather.getCity();
  const country = weather.getCountry();
  const localTime = weather.getTime();
  const dayHigh = weather.getMaxTemp(format);
  const nightLow = weather.getMinTemp(format);
  const currentTemp = weather.getTemp(format);
  const conditionText = weather.getCondition();
  console.info('weather-object', city, weather);
  //
  return ele
    .divCI('main-area', 'main-area')
    .addChild(section.inputForm(city))
    .addChild(section.location(city, country, localTime))
    .addChild(section.hero(dayHigh, nightLow, currentTemp, conditionText))
    .build();
}

export async function defaultPageBuild() {
  const defaultData = await defaultWeather();
  return pageBuild(defaultData, 'amer');
}

// export default function defaultPageBuild() {
//   return ele
//     .divCI("main-area", "main-area")
//     .addChild(section.inputForm())
//     .addChild(section.location())
//     .addChild(section.hero())
//     .build();
// }
