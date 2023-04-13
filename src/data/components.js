import components from './subcomponents';

const ele = components();

export default function componentElements() {
  const defaultCity = 'Ogden'
  function inputForm() {
    return ele
      .divCI('form-container', 'form-container')
      .addChild(ele.inpCIIn('city-field', 'city-field', defaultCity))
      .addChild(ele.butCIT('submit-city', 'submit-city', 'Get Weather'));
  }

  function location() {
    return ele
      .divCI('location-container', 'location-container')
      .addChild(ele.divCIT('city', 'city', ''))
      .addChild(ele.divCIT('country', 'country', ''))
      .addChild(ele.divCIT('local-time', 'local-time', ''));
  }

  function hero() {
    return ele
      .divCI('hero-container', 'hero-container')
      .addChild(
        ele
          .divCI('hero-1', 'hero-1')
          .addChild(
            ele
              .divCI('high-low', 'high-low')
              .addChild(
                ele.divCIT('day-high', 'day-high ', '')
              )
              .addChild(
                ele.divCIT('night-low', 'night-low ', '')
              )
          )
          .addChild(
            ele.divCIT('current-temp', 'current-temp', '')
          )
      )
      .addChild(
        ele
          .divCI('hero-2', 'hero-2')
          .addChild(ele.divCI('condition-icon', 'conditionicon'))
          .addChild(
            ele.divCIT('condition-text', 'condition-text', '')
          )
      );
  }
  return { inputForm, location, hero };
}
