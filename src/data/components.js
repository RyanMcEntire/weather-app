import components from './subcomponents';

const ele = components();

// const defaultValue = "Ogden";
// const cityName = "Ogden";
// const countryName = "USA";
// const localTime = "4:20";
// const dayHigh = "97";
// const nightLow = "23";
// const currentTemp = "69";
// const conditionText = "sunny";

export default function componentElements() {
  function inputForm(defaultValue) {
    return ele
      .divCI('form-container', 'form-container')
      .addChild(ele.inpCIIn('city-field', 'city-field', defaultValue))
      .addChild(ele.butCIT('submit-city', 'submit-city', 'Get Weather'));
  }

  function location(cityName, countryName, localTime) {
    return ele
      .divCI('location-container', 'location-container')
      .addChild(ele.divCIT('city', 'city', cityName))
      .addChild(ele.divCIT('country', 'country', countryName))
      .addChild(ele.divCIT('local-time', 'local-time', localTime));
  }

  function hero(dayHigh, nightLow, currentTemp, conditionText) {
    return ele
      .divCI('hero-container', 'hero-container')
      .addChild(
        ele
          .divCI('hero-1', 'hero-1')
          .addChild(
            ele
              .divCI('high-low', 'high-low')
              .addChild(ele.divCIT('dayHigh', 'dayHigh ', `Day ↑ ${dayHigh}° `))
              .addChild(ele.divCIT('dayLow', 'dayLow ', `Night ↓ ${nightLow}°`))
          )
          .addChild(
            ele.divCIT('current-temp', 'current-temp', `${currentTemp}°`)
          )
      )
      .addChild(
        ele
          .divCI('hero-2', 'hero-2')
          .addChild(ele.divCI('condition-icon', 'condition0icon'))
          .addChild(
            ele.divCIT('condition-text', 'condition-text', conditionText)
          )
      );
  }
  return { inputForm, location, hero };
}

// export default function pageBuild() {
//   return ele
//     .divCI("main-page", "main-page")
//     .addChild(inputForm())
//     .addChild(location())
//     .addChild(hero())
//     .build();
// }
