import componentElements from '../data/components';
import components from '../data/element-maker-components';
import MyWeather from '../data/weather-class';
import getWeather from './get-api';

const defaultWeatherData = getWeather('ogden');
// FIXME: make myWeather asyncronously async await
console.log(defaultWeatherData);
console.log(new MyWeather(defaultWeatherData));
function defaultWeather() {
  const data = defaultWeatherData;
  return new MyWeather(data);
}

const ele = components();
const section = componentElements();

export default function defaultPageBuild() {
  return ele
    .divCI('main-area', 'main-area')
    .addChild(section.inputForm(defaultWeather().getCity()))
    .addChild(section.location())
    .addChild(section.hero())
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
