"use strict";
(self["webpackChunkwebpack_project_template"] = self["webpackChunkwebpack_project_template"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controller/build-page.js":
/*!**************************************!*\
  !*** ./src/controller/build-page.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageBuild)
/* harmony export */ });
/* harmony import */ var _data_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/components */ "./src/data/components.js");
/* harmony import */ var _data_subcomponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/subcomponents */ "./src/data/subcomponents.js");
/* harmony import */ var _data_weather_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/weather-class */ "./src/data/weather-class.js");
/* harmony import */ var _get_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-api */ "./src/controller/get-api.js");





// const defaultWeatherData = getWeather('ogden');

async function defaultWeather() {
  const data = await (0,_get_api__WEBPACK_IMPORTED_MODULE_3__["default"])('Ogden');
  console.table('data', data)
  return new _data_weather_class__WEBPACK_IMPORTED_MODULE_2__["default"](data);
}

const ele = (0,_data_subcomponents__WEBPACK_IMPORTED_MODULE_1__["default"])();
const section = (0,_data_components__WEBPACK_IMPORTED_MODULE_0__["default"])();

async function pageBuild(format) {
  const weather = await defaultWeather();
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

// export default function defaultPageBuild() {
//   return ele
//     .divCI("main-area", "main-area")
//     .addChild(section.inputForm())
//     .addChild(section.location())
//     .addChild(section.hero())
//     .build();
// }


/***/ }),

/***/ "./src/controller/get-api.js":
/*!***********************************!*\
  !*** ./src/controller/get-api.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeather)
/* harmony export */ });
async function getWeather(city) {
  // console.log(input.value)

  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=8803542d4d2f400da43183121230604&q=${city}&days=1&aqi=no&alerts=no`,
    { mode: 'cors' }
  );
  const weatherData = await response.json();
  return weatherData;
}


/***/ }),

/***/ "./src/data/components.js":
/*!********************************!*\
  !*** ./src/data/components.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ componentElements)
/* harmony export */ });
/* harmony import */ var _subcomponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subcomponents */ "./src/data/subcomponents.js");


const ele = (0,_subcomponents__WEBPACK_IMPORTED_MODULE_0__["default"])();

// const defaultValue = "Ogden";
// const cityName = "Ogden";
// const countryName = "USA";
// const localTime = "4:20";
// const dayHigh = "97";
// const nightLow = "23";
// const currentTemp = "69";
// const conditionText = "sunny";

function componentElements() {
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


/***/ }),

/***/ "./src/data/element-maker.js":
/*!***********************************!*\
  !*** ./src/data/element-maker.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Element)
/* harmony export */ });
/* eslint-disable no-restricted-syntax */

class Element {
  constructor(elementType) {
    this.elementType = elementType;
    this.attributes = {};
    this.children = [];
    this.eventListeners = {};
  }

  addAttributes(attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      this.attributes[key] = value;
    }
    return this;
  }

  addChild(childElement) {
    this.text = undefined;
    this.children.push(childElement);
    return this;
  }

  addText(text) {
    this.children = [];
    this.text = text;
    return this;
  }

  addEventListener(eventType, listener) {
    if (!this.eventListeners[eventType]) {
      this.eventListeners[eventType] = [];
    }
    this.eventListeners[eventType].push(listener);
    return this;
  }

  build() {
    const newElement = document.createElement(this.elementType);

    for (const [attribute, value] of Object.entries(this.attributes)) {
      if (typeof value === 'boolean') {
        newElement.toggleAttribute(attribute, value);
      } else {
        newElement.setAttribute(attribute, value);
      }
    }

    for (const [eventType, listeners] of Object.entries(this.eventListeners)) {
      listeners.forEach((listener) => {
        newElement.addEventListener(eventType, listener);
      });
    }

    if (this.text === undefined) {
      for (const child of this.children) {
        newElement.appendChild(child.build());
      }
    } else {
      const DOMtext = document.createTextNode(this.text);
      newElement.appendChild(DOMtext);
    }

    return newElement;
  }
}


/***/ }),

/***/ "./src/data/subcomponents.js":
/*!***********************************!*\
  !*** ./src/data/subcomponents.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ components)
/* harmony export */ });
/* harmony import */ var _element_maker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-maker */ "./src/data/element-maker.js");


function components() {
  // div
  function divCI(className, id) {
    return new _element_maker__WEBPACK_IMPORTED_MODULE_0__["default"]('div').addAttributes({
      class: className,
      id,
    });
  }

  function divCIT(className, id, text) {
    return new _element_maker__WEBPACK_IMPORTED_MODULE_0__["default"]('div')
      .addAttributes({
        class: className,
        id,
      })
      .addText(text);
  }

  // button
  function butCIT(className, id, text) {
    return new _element_maker__WEBPACK_IMPORTED_MODULE_0__["default"]('button')
      .addAttributes({
        class: className,
        id,
        type: 'button',
      })
      .addText(text);
  }

  // radio button
  function radCINCh(className, id, name, isChecked) {
    return new _element_maker__WEBPACK_IMPORTED_MODULE_0__["default"]('input').addAttributes({
      class: className,
      type: 'radio',
      id,
      name,
      value: id,
      checked: isChecked,
    });
  }

  function inpCIIn(className, id, init) {
    return new _element_maker__WEBPACK_IMPORTED_MODULE_0__["default"]('input').addAttributes({
      class: className,
      type: 'text',
      id,
      value: init,
    });
  }

  // image
  function imgSACI(src, alt, className, id) {
    return new _element_maker__WEBPACK_IMPORTED_MODULE_0__["default"]('img').addAttributes({
      src,
      alt,
      class: className,
      id,
    });
  }

  return { divCI, divCIT, butCIT, radCINCh, imgSACI, inpCIIn };
}


/***/ }),

/***/ "./src/data/weather-class.js":
/*!***********************************!*\
  !*** ./src/data/weather-class.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyWeather)
/* harmony export */ });
class MyWeather {
  constructor(data) {
    const now = data.current;
    const forecastDay = data.forecast.forecastday[0].day;
    this.city = data.location.name;
    this.country = data.location.country;
    this.localTime = data.location.localtime;
    this.isDay = now.is_day;
    this.temp = { amer: now.temp_f, else: now.temp_c };
    this.feelsLike = { amer: now.feelslike_f, else: now.feelslike_c };
    this.wind = { amer: now.wind_mph, else: now.wind_kph };
    this.gust = { amer: now.gust_mph, else: now.gust_kph };
    this.precip = { amer: now.precip_in, else: now.precip_mm };
    this.maxTemp = { amer: forecastDay.maxtemp_f, else: forecastDay.maxtemp_c };
    this.minTemp = { amer: forecastDay.mintemp_f, else: forecastDay.mintemp_c };
    this.totalPrecip = {
      amer: forecastDay.totalprecip_in,
      else: forecastDay.totalprecip_mm,
    };
    this.cloud = now.cloud;
    this.willItRain = forecastDay.daily_will_it_rain;
    this.willItSnow = forecastDay.daily_will_it_snow;
    this.chanceOfRain = forecastDay.daily_chance_of_rain;
    this.chanceOfSnow = forecastDay.daily_chance_of_snow;
    this.condition = now.condition.text;
    this.humidity = now.humidity;
  }

  getCity() {
    return this.city;
  }

  getCountry() {
    return this.country;
  }

  getTime() {
    return this.localTime;
  }

  getIsDay() {
    return this.isDay;
  }

  getTemp(format) {
    return this.temp[format];
  }

  getFeelsLike(format) {
    return this.feelsLike[format];
  }

  getWind(format) {
    return this.wind[format];
  }

  getGust(format) {
    return this.gust[format];
  }

  getPrecip(format) {
    return this.precip[format];
  }

  getCondition() {
    return this.condition;
  }

  getMaxTemp(format) {
    return this.maxTemp[format];
  }

  getMinTemp(format) {
    return this.minTemp[format];
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _controller_build_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/build-page */ "./src/controller/build-page.js");

// import getWeather from './controller/get-api';


async function defaultBuild() {
  const defaultPage = await (0,_controller_build_page__WEBPACK_IMPORTED_MODULE_1__["default"])('amer');
  document.body.appendChild(defaultPage);
}

defaultBuild();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQSxlQUFlLHNEQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsc0RBQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsZUFBZSxzREFBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxzREFBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7OztBQy9EZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUN2QixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzNFcUI7QUFDckI7QUFDZ0Q7O0FBRWhEO0FBQ0EsNEJBQTRCLGtFQUFTO0FBQ3JDO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXIvYnVpbGQtcGFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9zcmMvY29udHJvbGxlci9nZXQtYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9kYXRhL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2RhdGEvZWxlbWVudC1tYWtlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9zcmMvZGF0YS9zdWJjb21wb25lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9kYXRhL3dlYXRoZXItY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjb21wb25lbnRFbGVtZW50cyBmcm9tICcuLi9kYXRhL2NvbXBvbmVudHMnO1xuaW1wb3J0IGNvbXBvbmVudHMgZnJvbSAnLi4vZGF0YS9zdWJjb21wb25lbnRzJztcbmltcG9ydCBNeVdlYXRoZXIgZnJvbSAnLi4vZGF0YS93ZWF0aGVyLWNsYXNzJztcbmltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vZ2V0LWFwaSc7XG5cbi8vIGNvbnN0IGRlZmF1bHRXZWF0aGVyRGF0YSA9IGdldFdlYXRoZXIoJ29nZGVuJyk7XG5cbmFzeW5jIGZ1bmN0aW9uIGRlZmF1bHRXZWF0aGVyKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlcignT2dkZW4nKTtcbiAgY29uc29sZS50YWJsZSgnZGF0YScsIGRhdGEpXG4gIHJldHVybiBuZXcgTXlXZWF0aGVyKGRhdGEpO1xufVxuXG5jb25zdCBlbGUgPSBjb21wb25lbnRzKCk7XG5jb25zdCBzZWN0aW9uID0gY29tcG9uZW50RWxlbWVudHMoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcGFnZUJ1aWxkKGZvcm1hdCkge1xuICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZGVmYXVsdFdlYXRoZXIoKTtcbiAgY29uc3QgY2l0eSA9IHdlYXRoZXIuZ2V0Q2l0eSgpO1xuICBjb25zdCBjb3VudHJ5ID0gd2VhdGhlci5nZXRDb3VudHJ5KCk7XG4gIGNvbnN0IGxvY2FsVGltZSA9IHdlYXRoZXIuZ2V0VGltZSgpO1xuICBjb25zdCBkYXlIaWdoID0gd2VhdGhlci5nZXRNYXhUZW1wKGZvcm1hdCk7XG4gIGNvbnN0IG5pZ2h0TG93ID0gd2VhdGhlci5nZXRNaW5UZW1wKGZvcm1hdCk7XG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gd2VhdGhlci5nZXRUZW1wKGZvcm1hdCk7XG4gIGNvbnN0IGNvbmRpdGlvblRleHQgPSB3ZWF0aGVyLmdldENvbmRpdGlvbigpO1xuICBjb25zb2xlLmluZm8oJ3dlYXRoZXItb2JqZWN0JywgY2l0eSwgd2VhdGhlcik7XG4gIC8vXG4gIHJldHVybiBlbGVcbiAgICAuZGl2Q0koJ21haW4tYXJlYScsICdtYWluLWFyZWEnKVxuICAgIC5hZGRDaGlsZChzZWN0aW9uLmlucHV0Rm9ybShjaXR5KSlcbiAgICAuYWRkQ2hpbGQoc2VjdGlvbi5sb2NhdGlvbihjaXR5LCBjb3VudHJ5LCBsb2NhbFRpbWUpKVxuICAgIC5hZGRDaGlsZChzZWN0aW9uLmhlcm8oZGF5SGlnaCwgbmlnaHRMb3csIGN1cnJlbnRUZW1wLCBjb25kaXRpb25UZXh0KSlcbiAgICAuYnVpbGQoKTtcbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmYXVsdFBhZ2VCdWlsZCgpIHtcbi8vICAgcmV0dXJuIGVsZVxuLy8gICAgIC5kaXZDSShcIm1haW4tYXJlYVwiLCBcIm1haW4tYXJlYVwiKVxuLy8gICAgIC5hZGRDaGlsZChzZWN0aW9uLmlucHV0Rm9ybSgpKVxuLy8gICAgIC5hZGRDaGlsZChzZWN0aW9uLmxvY2F0aW9uKCkpXG4vLyAgICAgLmFkZENoaWxkKHNlY3Rpb24uaGVybygpKVxuLy8gICAgIC5idWlsZCgpO1xuLy8gfVxuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KSB7XG4gIC8vIGNvbnNvbGUubG9nKGlucHV0LnZhbHVlKVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ODgwMzU0MmQ0ZDJmNDAwZGE0MzE4MzEyMTIzMDYwNCZxPSR7Y2l0eX0mZGF5cz0xJmFxaT1ubyZhbGVydHM9bm9gLFxuICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cbiIsImltcG9ydCBjb21wb25lbnRzIGZyb20gJy4vc3ViY29tcG9uZW50cyc7XG5cbmNvbnN0IGVsZSA9IGNvbXBvbmVudHMoKTtcblxuLy8gY29uc3QgZGVmYXVsdFZhbHVlID0gXCJPZ2RlblwiO1xuLy8gY29uc3QgY2l0eU5hbWUgPSBcIk9nZGVuXCI7XG4vLyBjb25zdCBjb3VudHJ5TmFtZSA9IFwiVVNBXCI7XG4vLyBjb25zdCBsb2NhbFRpbWUgPSBcIjQ6MjBcIjtcbi8vIGNvbnN0IGRheUhpZ2ggPSBcIjk3XCI7XG4vLyBjb25zdCBuaWdodExvdyA9IFwiMjNcIjtcbi8vIGNvbnN0IGN1cnJlbnRUZW1wID0gXCI2OVwiO1xuLy8gY29uc3QgY29uZGl0aW9uVGV4dCA9IFwic3VubnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9uZW50RWxlbWVudHMoKSB7XG4gIGZ1bmN0aW9uIGlucHV0Rm9ybShkZWZhdWx0VmFsdWUpIHtcbiAgICByZXR1cm4gZWxlXG4gICAgICAuZGl2Q0koJ2Zvcm0tY29udGFpbmVyJywgJ2Zvcm0tY29udGFpbmVyJylcbiAgICAgIC5hZGRDaGlsZChlbGUuaW5wQ0lJbignY2l0eS1maWVsZCcsICdjaXR5LWZpZWxkJywgZGVmYXVsdFZhbHVlKSlcbiAgICAgIC5hZGRDaGlsZChlbGUuYnV0Q0lUKCdzdWJtaXQtY2l0eScsICdzdWJtaXQtY2l0eScsICdHZXQgV2VhdGhlcicpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvY2F0aW9uKGNpdHlOYW1lLCBjb3VudHJ5TmFtZSwgbG9jYWxUaW1lKSB7XG4gICAgcmV0dXJuIGVsZVxuICAgICAgLmRpdkNJKCdsb2NhdGlvbi1jb250YWluZXInLCAnbG9jYXRpb24tY29udGFpbmVyJylcbiAgICAgIC5hZGRDaGlsZChlbGUuZGl2Q0lUKCdjaXR5JywgJ2NpdHknLCBjaXR5TmFtZSkpXG4gICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJVCgnY291bnRyeScsICdjb3VudHJ5JywgY291bnRyeU5hbWUpKVxuICAgICAgLmFkZENoaWxkKGVsZS5kaXZDSVQoJ2xvY2FsLXRpbWUnLCAnbG9jYWwtdGltZScsIGxvY2FsVGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGVybyhkYXlIaWdoLCBuaWdodExvdywgY3VycmVudFRlbXAsIGNvbmRpdGlvblRleHQpIHtcbiAgICByZXR1cm4gZWxlXG4gICAgICAuZGl2Q0koJ2hlcm8tY29udGFpbmVyJywgJ2hlcm8tY29udGFpbmVyJylcbiAgICAgIC5hZGRDaGlsZChcbiAgICAgICAgZWxlXG4gICAgICAgICAgLmRpdkNJKCdoZXJvLTEnLCAnaGVyby0xJylcbiAgICAgICAgICAuYWRkQ2hpbGQoXG4gICAgICAgICAgICBlbGVcbiAgICAgICAgICAgICAgLmRpdkNJKCdoaWdoLWxvdycsICdoaWdoLWxvdycpXG4gICAgICAgICAgICAgIC5hZGRDaGlsZChlbGUuZGl2Q0lUKCdkYXlIaWdoJywgJ2RheUhpZ2ggJywgYERheSDihpEgJHtkYXlIaWdofcKwIGApKVxuICAgICAgICAgICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJVCgnZGF5TG93JywgJ2RheUxvdyAnLCBgTmlnaHQg4oaTICR7bmlnaHRMb3d9wrBgKSlcbiAgICAgICAgICApXG4gICAgICAgICAgLmFkZENoaWxkKFxuICAgICAgICAgICAgZWxlLmRpdkNJVCgnY3VycmVudC10ZW1wJywgJ2N1cnJlbnQtdGVtcCcsIGAke2N1cnJlbnRUZW1wfcKwYClcbiAgICAgICAgICApXG4gICAgICApXG4gICAgICAuYWRkQ2hpbGQoXG4gICAgICAgIGVsZVxuICAgICAgICAgIC5kaXZDSSgnaGVyby0yJywgJ2hlcm8tMicpXG4gICAgICAgICAgLmFkZENoaWxkKGVsZS5kaXZDSSgnY29uZGl0aW9uLWljb24nLCAnY29uZGl0aW9uMGljb24nKSlcbiAgICAgICAgICAuYWRkQ2hpbGQoXG4gICAgICAgICAgICBlbGUuZGl2Q0lUKCdjb25kaXRpb24tdGV4dCcsICdjb25kaXRpb24tdGV4dCcsIGNvbmRpdGlvblRleHQpXG4gICAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuICByZXR1cm4geyBpbnB1dEZvcm0sIGxvY2F0aW9uLCBoZXJvIH07XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VCdWlsZCgpIHtcbi8vICAgcmV0dXJuIGVsZVxuLy8gICAgIC5kaXZDSShcIm1haW4tcGFnZVwiLCBcIm1haW4tcGFnZVwiKVxuLy8gICAgIC5hZGRDaGlsZChpbnB1dEZvcm0oKSlcbi8vICAgICAuYWRkQ2hpbGQobG9jYXRpb24oKSlcbi8vICAgICAuYWRkQ2hpbGQoaGVybygpKVxuLy8gICAgIC5idWlsZCgpO1xuLy8gfVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRUeXBlKSB7XG4gICAgdGhpcy5lbGVtZW50VHlwZSA9IGVsZW1lbnRUeXBlO1xuICAgIHRoaXMuYXR0cmlidXRlcyA9IHt9O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0ge307XG4gIH1cblxuICBhZGRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuICAgICAgdGhpcy5hdHRyaWJ1dGVzW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZEVsZW1lbnQpIHtcbiAgICB0aGlzLnRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkRWxlbWVudCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRUZXh0KHRleHQpIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVyc1tldmVudFR5cGVdKSB7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudFR5cGVdLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYnVpbGQoKSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5lbGVtZW50VHlwZSk7XG5cbiAgICBmb3IgKGNvbnN0IFthdHRyaWJ1dGUsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmF0dHJpYnV0ZXMpKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgbmV3RWxlbWVudC50b2dnbGVBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IFtldmVudFR5cGUsIGxpc3RlbmVyc10gb2YgT2JqZWN0LmVudHJpZXModGhpcy5ldmVudExpc3RlbmVycykpIHtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICBuZXdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBsaXN0ZW5lcik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xuICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkLmJ1aWxkKCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBET010ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy50ZXh0KTtcbiAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoRE9NdGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gIH1cbn1cbiIsImltcG9ydCBFbGVtZW50IGZyb20gJy4vZWxlbWVudC1tYWtlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvbmVudHMoKSB7XG4gIC8vIGRpdlxuICBmdW5jdGlvbiBkaXZDSShjbGFzc05hbWUsIGlkKSB7XG4gICAgcmV0dXJuIG5ldyBFbGVtZW50KCdkaXYnKS5hZGRBdHRyaWJ1dGVzKHtcbiAgICAgIGNsYXNzOiBjbGFzc05hbWUsXG4gICAgICBpZCxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpdkNJVChjbGFzc05hbWUsIGlkLCB0ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBFbGVtZW50KCdkaXYnKVxuICAgICAgLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgICBjbGFzczogY2xhc3NOYW1lLFxuICAgICAgICBpZCxcbiAgICAgIH0pXG4gICAgICAuYWRkVGV4dCh0ZXh0KTtcbiAgfVxuXG4gIC8vIGJ1dHRvblxuICBmdW5jdGlvbiBidXRDSVQoY2xhc3NOYW1lLCBpZCwgdGV4dCkge1xuICAgIHJldHVybiBuZXcgRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIC5hZGRBdHRyaWJ1dGVzKHtcbiAgICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgICAgaWQsXG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgfSlcbiAgICAgIC5hZGRUZXh0KHRleHQpO1xuICB9XG5cbiAgLy8gcmFkaW8gYnV0dG9uXG4gIGZ1bmN0aW9uIHJhZENJTkNoKGNsYXNzTmFtZSwgaWQsIG5hbWUsIGlzQ2hlY2tlZCkge1xuICAgIHJldHVybiBuZXcgRWxlbWVudCgnaW5wdXQnKS5hZGRBdHRyaWJ1dGVzKHtcbiAgICAgIGNsYXNzOiBjbGFzc05hbWUsXG4gICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgdmFsdWU6IGlkLFxuICAgICAgY2hlY2tlZDogaXNDaGVja2VkLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5wQ0lJbihjbGFzc05hbWUsIGlkLCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBFbGVtZW50KCdpbnB1dCcpLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkLFxuICAgICAgdmFsdWU6IGluaXQsXG4gICAgfSk7XG4gIH1cblxuICAvLyBpbWFnZVxuICBmdW5jdGlvbiBpbWdTQUNJKHNyYywgYWx0LCBjbGFzc05hbWUsIGlkKSB7XG4gICAgcmV0dXJuIG5ldyBFbGVtZW50KCdpbWcnKS5hZGRBdHRyaWJ1dGVzKHtcbiAgICAgIHNyYyxcbiAgICAgIGFsdCxcbiAgICAgIGNsYXNzOiBjbGFzc05hbWUsXG4gICAgICBpZCxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7IGRpdkNJLCBkaXZDSVQsIGJ1dENJVCwgcmFkQ0lOQ2gsIGltZ1NBQ0ksIGlucENJSW4gfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE15V2VhdGhlciB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBjb25zdCBub3cgPSBkYXRhLmN1cnJlbnQ7XG4gICAgY29uc3QgZm9yZWNhc3REYXkgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheTtcbiAgICB0aGlzLmNpdHkgPSBkYXRhLmxvY2F0aW9uLm5hbWU7XG4gICAgdGhpcy5jb3VudHJ5ID0gZGF0YS5sb2NhdGlvbi5jb3VudHJ5O1xuICAgIHRoaXMubG9jYWxUaW1lID0gZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWU7XG4gICAgdGhpcy5pc0RheSA9IG5vdy5pc19kYXk7XG4gICAgdGhpcy50ZW1wID0geyBhbWVyOiBub3cudGVtcF9mLCBlbHNlOiBub3cudGVtcF9jIH07XG4gICAgdGhpcy5mZWVsc0xpa2UgPSB7IGFtZXI6IG5vdy5mZWVsc2xpa2VfZiwgZWxzZTogbm93LmZlZWxzbGlrZV9jIH07XG4gICAgdGhpcy53aW5kID0geyBhbWVyOiBub3cud2luZF9tcGgsIGVsc2U6IG5vdy53aW5kX2twaCB9O1xuICAgIHRoaXMuZ3VzdCA9IHsgYW1lcjogbm93Lmd1c3RfbXBoLCBlbHNlOiBub3cuZ3VzdF9rcGggfTtcbiAgICB0aGlzLnByZWNpcCA9IHsgYW1lcjogbm93LnByZWNpcF9pbiwgZWxzZTogbm93LnByZWNpcF9tbSB9O1xuICAgIHRoaXMubWF4VGVtcCA9IHsgYW1lcjogZm9yZWNhc3REYXkubWF4dGVtcF9mLCBlbHNlOiBmb3JlY2FzdERheS5tYXh0ZW1wX2MgfTtcbiAgICB0aGlzLm1pblRlbXAgPSB7IGFtZXI6IGZvcmVjYXN0RGF5Lm1pbnRlbXBfZiwgZWxzZTogZm9yZWNhc3REYXkubWludGVtcF9jIH07XG4gICAgdGhpcy50b3RhbFByZWNpcCA9IHtcbiAgICAgIGFtZXI6IGZvcmVjYXN0RGF5LnRvdGFscHJlY2lwX2luLFxuICAgICAgZWxzZTogZm9yZWNhc3REYXkudG90YWxwcmVjaXBfbW0sXG4gICAgfTtcbiAgICB0aGlzLmNsb3VkID0gbm93LmNsb3VkO1xuICAgIHRoaXMud2lsbEl0UmFpbiA9IGZvcmVjYXN0RGF5LmRhaWx5X3dpbGxfaXRfcmFpbjtcbiAgICB0aGlzLndpbGxJdFNub3cgPSBmb3JlY2FzdERheS5kYWlseV93aWxsX2l0X3Nub3c7XG4gICAgdGhpcy5jaGFuY2VPZlJhaW4gPSBmb3JlY2FzdERheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcbiAgICB0aGlzLmNoYW5jZU9mU25vdyA9IGZvcmVjYXN0RGF5LmRhaWx5X2NoYW5jZV9vZl9zbm93O1xuICAgIHRoaXMuY29uZGl0aW9uID0gbm93LmNvbmRpdGlvbi50ZXh0O1xuICAgIHRoaXMuaHVtaWRpdHkgPSBub3cuaHVtaWRpdHk7XG4gIH1cblxuICBnZXRDaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmNpdHk7XG4gIH1cblxuICBnZXRDb3VudHJ5KCkge1xuICAgIHJldHVybiB0aGlzLmNvdW50cnk7XG4gIH1cblxuICBnZXRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsVGltZTtcbiAgfVxuXG4gIGdldElzRGF5KCkge1xuICAgIHJldHVybiB0aGlzLmlzRGF5O1xuICB9XG5cbiAgZ2V0VGVtcChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy50ZW1wW2Zvcm1hdF07XG4gIH1cblxuICBnZXRGZWVsc0xpa2UoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMuZmVlbHNMaWtlW2Zvcm1hdF07XG4gIH1cblxuICBnZXRXaW5kKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLndpbmRbZm9ybWF0XTtcbiAgfVxuXG4gIGdldEd1c3QoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ3VzdFtmb3JtYXRdO1xuICB9XG5cbiAgZ2V0UHJlY2lwKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLnByZWNpcFtmb3JtYXRdO1xuICB9XG5cbiAgZ2V0Q29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbjtcbiAgfVxuXG4gIGdldE1heFRlbXAoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMubWF4VGVtcFtmb3JtYXRdO1xuICB9XG5cbiAgZ2V0TWluVGVtcChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5taW5UZW1wW2Zvcm1hdF07XG4gIH1cbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuLy8gaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi9jb250cm9sbGVyL2dldC1hcGknO1xuaW1wb3J0IHBhZ2VCdWlsZCBmcm9tICcuL2NvbnRyb2xsZXIvYnVpbGQtcGFnZSc7XG5cbmFzeW5jIGZ1bmN0aW9uIGRlZmF1bHRCdWlsZCgpIHtcbiAgY29uc3QgZGVmYXVsdFBhZ2UgPSBhd2FpdCBwYWdlQnVpbGQoJ2FtZXInKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZWZhdWx0UGFnZSk7XG59XG5cbmRlZmF1bHRCdWlsZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9