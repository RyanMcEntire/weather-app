import componentElements from '../data/components';
import components from '../data/subcomponents';
import MyWeather from '../data/weather-class';
import getWeather from './get-api';
import selectors from '../data/selectors';

// const defaultWeatherData = getWeather('ogden');

export function buildStructures() {
  const ele = components();
  const section = componentElements();
  return ele
    .divCI('main-area', 'main-area')
    .addChild(section.inputForm())
    .addChild(section.location())
    .addChild(section.hero())
    .build();
}

async function defaultWeather() {
  const data = await getWeather('Ogden');
  console.table('data', data);
  return new MyWeather(data);
}

export async function pageBuild(weather, format) {
  const {location} = selectors();
  const { hero } = selectors();
  location.city.textContent = weather.getCity();
  location.country.textContent = weather.getCountry();
  location.localTime.textContent = weather.getTime();
  hero.dayHigh.textContent = weather.getMaxTemp(format);
  hero.nightLow.textContent = weather.getMinTemp(format);
  hero.currentTemp.textContent = weather.getTemp(format);
  hero.conditionIcon.textContent = weather.getCondition();
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
