/* eslint-disable import/no-cycle */
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
  const data = await getWeather('Seattle');
  return new MyWeather(data);
}

async function appendInfo(weather, format) {
  const tempSymbol = () => {
    if (format === 'amer') {
      return 'F';
    }
    return 'C';
  };
  const { location } = selectors();
  const { hero } = selectors();
  const { inputForm } = selectors();
  inputForm.inputField.textContent = weather.getData('city');
  location.city.textContent = weather.getData('city');
  location.region.textContent = weather.getData('region');
  location.country.textContent = weather.getData('country');
  location.localTime.textContent = weather.getData('localTime');
  hero.dayHigh.textContent = `Day🠙 ${weather.getFormatData(
    format,
    'maxTemp'
  )}°${tempSymbol()}`;
  hero.nightLow.textContent = `Night🠛 ${weather.getFormatData(
    format,
    'minTemp'
  )}°  ${tempSymbol()}`;
  hero.currentTemp.textContent = `${weather.getFormatData(
    format,
    'temp'
  )}°${tempSymbol()}`;
  hero.feelsLike.textContent = `Feels like ${weather.getFormatData(
    format,
    'feelsLike'
  )}°${tempSymbol()}`;
  hero.conditionText.textContent = `condition: \n${weather.getData(
    'condition'
  )}`;
}

export async function defaultInfoBuild() {
  const defaultData = await defaultWeather();
  console.log('default data', defaultData);
  return appendInfo(defaultData, 'amer');
}

async function updateWeather(weatherFormat) {
  const cityChoice = selectors().inputForm.inputField.value;
  const data = await getWeather(cityChoice);
  const myData = new MyWeather(data);
  appendInfo(myData, weatherFormat);
}

export function buttonClicked() {
  const format = selectors().inputForm.formatSwitch.checked;
  if (!format) {
    updateWeather('amer');
  } else updateWeather('else');
}

export function switchActivated(e) {
  const format = e.target.checked;
  console.log('switch info', format);
  if (!format) {
    buttonClicked('amer');
  } else buttonClicked('else');
}

export function keyboardListen() {
  const input = selectors().inputForm.inputField;
  // eslint-disable-next-line prefer-arrow-callback, func-names
  input.addEventListener('keypress', function (e) {
    if (document.hasFocus(input)) {
      if (e.key === 'Enter') {
        console.log('Enter');
        buttonClicked();
      }
    }
  });
}
