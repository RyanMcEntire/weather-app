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
  const data = await getWeather('Ogden');
  return new MyWeather(data);
}

async function appendInfo(weather, format) {
  const { location } = selectors();
  const { hero } = selectors();
  const { inputForm } = selectors();
  inputForm.inputField.textContent = weather.getCity();
  location.city.textContent = weather.getCity();
  location.country.textContent = weather.getCountry();
  location.localTime.textContent = weather.getTime();
  hero.dayHigh.textContent = `Day 🠙 ${weather.getMaxTemp(format)}`;
  hero.nightLow.textContent = `Night 🠛 ${weather.getMinTemp(format)}`;
  hero.currentTemp.textContent = `Current Temperature: ${weather.getTemp(format)}`;
  hero.conditionText.textContent = weather.getCondition();
}

export async function defaultInfoBuild() {
  const defaultData = await defaultWeather();
  console.log('default data', defaultData);
  return appendInfo(defaultData, 'amer');
}

export async function buttonClicked() {
  const cityChoice = selectors().inputForm.inputField.value;
  const data = await getWeather(cityChoice)
  const myData = new MyWeather(data)
  const format = 'amer'
  appendInfo(myData, format)
}

