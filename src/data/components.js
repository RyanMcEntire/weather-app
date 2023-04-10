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
  return ele.divCI('form-container')
}
