/* eslint-disable import/no-cycle */
import components from './subcomponents';
import { buttonClicked, switchActivated } from '../controller/build-page';

const ele = components();

export default function componentElements() {
  const defaultCity = 'Ogden';
  const defaultFormat = 'amer';
  function inputForm() {
    return ele
      .divCI('form-container', 'form-container')
      .addChild(ele.inpCIIn('city-field', 'city-field', defaultCity))
      .addChild(
        ele
          .butCIT('submit-city', 'submit-city', 'Get Weather')
          .addEventListener('click', () => buttonClicked())
      )
      .addChild(
        ele
          .divCI('switch-container', 'switch-container')
          .addChild(ele.divCIT('switch-f', 'switch-f', 'F°'))
          .addChild(ele.labelC('switch'))
          .addChild(
            ele
              .checkCIIn('switch-box', 'switch-box', defaultFormat)
              .addEventListener('click', (e) => switchActivated(e))
              .addChild(ele.spanC('slider'))
          )
          .addChild(ele.divCIT('switch-c', 'switch-c', 'C°'))
      );
  }

  function location() {
    return ele
      .divCI('location-container', 'location-container')
      .addChild(ele.divCI('city', 'city'))
      .addChild(ele.divCI('region', 'region'))
      .addChild(ele.divCI('country', 'country'))
      .addChild(ele.divCI('local-time', 'local-time'));
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
              .addChild(ele.divCI('day-high', 'day-high'))
              .addChild(ele.divCI('night-low', 'night-low'))
          )
          .addChild(ele.divCI('current-temp', 'current-temp'))
          .addChild(ele.divCI('feels-like', 'feels-like'))
      )
      .addChild(
        ele
          .divCI('hero-2', 'hero-2')
          .addChild(ele.divCI('condition-icon', 'condition-icon'))
          .addChild(ele.divCI('condition-text', 'condition-text'))
      );
  }
  return { inputForm, location, hero };
}
