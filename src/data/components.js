import components from "./element-maker-components";

const ele = components();

export function inputForm() {
  return ele
    .divCI("form-container", "form-container")
    .addChild(ele.inpCIIn("city-field", "city-field", defaultValue))
    .addChild(ele.butCIT("submit-city", "submit-city", "Get Weather"))
    .build();
}

export function location() {
  return ele
    .divCI("location-container", "location-container")
    .addChild(ele.divCIT("city", "city", cityName))
    .addChild(ele.divCIT("country", "country", countryName))
    .addChild(ele.divCIT("local-time", "local-time", localTime))
    .build();
}

export function hero() {
  return ele
    .divCI("hero-container", "hero-container")
    .addChild(
      ele
        .divCI("hero-1", "hero-1")
        .addChild(
          ele
            .divCI("high-low", "high-low")
            .addChild(ele.divCIT("dayHigh", "dayHigh ", `Day ↑ ${dayHigh} `))
            .addChild(ele.divCIT("dayLow", "dayLow ", `Night ↓ ${nightLow}`))
        )
        .addChild(ele.divCIT("current-temp", "current-temp", `${currentTemp}°`))
    )
    .addChild(
      ele
        .divCI("hero-2", "hero-2")
        .addChild(ele.divCI("condition-icon", "condition0icon"))
        .addChild(ele.divCIT("condition-text", "condition-text", conditionText))
    )
    .build();
}
