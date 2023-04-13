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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Space+Mono&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div {\n  border: 1px solid red;\n  min-height: 1rem;\n  min-width: 1rem;\n  padding: 2px;\n}\n\ndiv > div {\n  border: 1px solid olivedrab;\n  margin: 5px;\n}\n\ndiv > div > div {\n  border: 1px solid rgb(35, 142, 137);\n}\n\ndiv > div > div > div {\n  border: 1px solid rgb(117, 35, 142);\n}\n\ndiv > div > div > div > div {\n  border: 1px solid rgb(142, 92, 35);\n}\n\nbody {\n  background-color: #1a1a19;\n  font-family: 'Space Mono', monospace;\n  color: rgb(145, 253, 159);\n  text-shadow: 0 0 4px rgb(86, 221, 104), 0 0 8px rgb(57, 207, 77);\n}\n\n.main-area {\n  min-width: 20rem;\n  max-width: 30rem;\n}\n\n.hero-container {\n  display: flex;\n  min-height: 10rem;\n}\n\n.high-low {\n  display: flex;\n}\n\n.current-temp {\n  font-size: 5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,2BAA2B;EAC3B,WAAW;AACb;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,yBAAyB;EACzB,oCAAoC;EACpC,yBAAyB;EACzB,gEAAgE;AAClE;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');\n\ndiv {\n  border: 1px solid red;\n  min-height: 1rem;\n  min-width: 1rem;\n  padding: 2px;\n}\n\ndiv > div {\n  border: 1px solid olivedrab;\n  margin: 5px;\n}\n\ndiv > div > div {\n  border: 1px solid rgb(35, 142, 137);\n}\n\ndiv > div > div > div {\n  border: 1px solid rgb(117, 35, 142);\n}\n\ndiv > div > div > div > div {\n  border: 1px solid rgb(142, 92, 35);\n}\n\nbody {\n  background-color: #1a1a19;\n  font-family: 'Space Mono', monospace;\n  color: rgb(145, 253, 159);\n  text-shadow: 0 0 4px rgb(86, 221, 104), 0 0 8px rgb(57, 207, 77);\n}\n\n.main-area {\n  min-width: 20rem;\n  max-width: 30rem;\n}\n\n.hero-container {\n  display: flex;\n  min-height: 10rem;\n}\n\n.high-low {\n  display: flex;\n}\n\n.current-temp {\n  font-size: 5rem;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "buildStructures": () => (/* binding */ buildStructures),
/* harmony export */   "buttonClicked": () => (/* binding */ buttonClicked),
/* harmony export */   "defaultInfoBuild": () => (/* binding */ defaultInfoBuild)
/* harmony export */ });
/* harmony import */ var _data_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/components */ "./src/data/components.js");
/* harmony import */ var _data_subcomponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/subcomponents */ "./src/data/subcomponents.js");
/* harmony import */ var _data_weather_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/weather-class */ "./src/data/weather-class.js");
/* harmony import */ var _get_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-api */ "./src/controller/get-api.js");
/* harmony import */ var _data_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/selectors */ "./src/data/selectors.js");
/* eslint-disable import/no-cycle */






// const defaultWeatherData = getWeather('ogden');

function buildStructures() {
  const ele = (0,_data_subcomponents__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const section = (0,_data_components__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return ele
    .divCI('main-area', 'main-area')
    .addChild(section.inputForm())
    .addChild(section.location())
    .addChild(section.hero())
    .build();
}

async function defaultWeather() {
  const data = await (0,_get_api__WEBPACK_IMPORTED_MODULE_3__["default"])('Ogden');
  return new _data_weather_class__WEBPACK_IMPORTED_MODULE_2__["default"](data);
}

async function appendInfo(weather, format) {
  const { location } = (0,_data_selectors__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const { hero } = (0,_data_selectors__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const { inputForm } = (0,_data_selectors__WEBPACK_IMPORTED_MODULE_4__["default"])();
  inputForm.inputField.textContent = weather.getCity();
  location.city.textContent = weather.getCity();
  location.country.textContent = weather.getCountry();
  location.localTime.textContent = weather.getTime();
  hero.dayHigh.textContent = `Day 🠙 ${weather.getMaxTemp(format)}°`;
  hero.nightLow.textContent = `Night 🠛 ${weather.getMinTemp(format)}°`;
  hero.currentTemp.textContent = `${weather.getTemp(format)}°`;
  hero.conditionText.textContent = weather.getCondition();
}

async function defaultInfoBuild() {
  const defaultData = await defaultWeather();
  console.log('default data', defaultData);
  return appendInfo(defaultData, 'amer');
}

async function buttonClicked() {
  const cityChoice = (0,_data_selectors__WEBPACK_IMPORTED_MODULE_4__["default"])().inputForm.inputField.value;
  const data = await (0,_get_api__WEBPACK_IMPORTED_MODULE_3__["default"])(cityChoice)
  const myData = new _data_weather_class__WEBPACK_IMPORTED_MODULE_2__["default"](data)
  const format = 'amer' // TODO: needs to check user choice when implemented
  appendInfo(myData, format)
}



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
/* harmony import */ var _controller_build_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/build-page */ "./src/controller/build-page.js");
/* eslint-disable import/no-cycle */



const ele = (0,_subcomponents__WEBPACK_IMPORTED_MODULE_0__["default"])();

function componentElements() {
  const defaultCity = 'Ogden';
  function inputForm() {
    return ele
      .divCI('form-container', 'form-container')
      .addChild(ele.inpCIIn('city-field', 'city-field', defaultCity))
      .addChild(
        ele
          .butCIT('submit-city', 'submit-city', 'Get Weather')
          .addEventListener('click', () => (0,_controller_build_page__WEBPACK_IMPORTED_MODULE_1__.buttonClicked)())
      );
  }

  function location() {
    return ele
      .divCI('location-container', 'location-container')
      .addChild(ele.divCI('city', 'city'))
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

/***/ "./src/data/selectors.js":
/*!*******************************!*\
  !*** ./src/data/selectors.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function byID(id) {
  return document.getElementById(id);
}

function selectors() {
  return {
    inputForm: {
      formContainer: byID('form-container'),
      inputField: byID('city-field'),
      submitButton: byID('submit-city'),
    },
    location: {
      locationContainer: byID('location-container'),
      city: byID('city'),
      country: byID('country'),
      localTime: byID('local-time'),
    },
    hero: {
      heroContainer: byID('hero-container'),
      hero1: byID('hero-1'),
      highLow: byID('high-low'),
      dayHigh: byID('day-high'),
      nightLow: byID('night-low'),
      currentTemp: byID('current-temp'),
      feelsLike: byID('feels-like'),
      hero2: byID('hero-2'),
      conditionIcon: byID('condition-icon'),
      conditionText: byID('condition-text'),
    },
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectors);


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



document.body.appendChild((0,_controller_build_page__WEBPACK_IMPORTED_MODULE_1__.buildStructures)());
(0,_controller_build_page__WEBPACK_IMPORTED_MODULE_1__.defaultInfoBuild)()


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix3SEFBd0g7QUFDeEg7QUFDQSwrQ0FBK0MsMEJBQTBCLHFCQUFxQixvQkFBb0IsaUJBQWlCLEdBQUcsZUFBZSxnQ0FBZ0MsZ0JBQWdCLEdBQUcscUJBQXFCLHdDQUF3QyxHQUFHLDJCQUEyQix3Q0FBd0MsR0FBRyxpQ0FBaUMsdUNBQXVDLEdBQUcsVUFBVSw4QkFBOEIseUNBQXlDLDhCQUE4QixxRUFBcUUsR0FBRyxnQkFBZ0IscUJBQXFCLHFCQUFxQixHQUFHLHFCQUFxQixrQkFBa0Isc0JBQXNCLEdBQUcsZUFBZSxrQkFBa0IsR0FBRyxtQkFBbUIsb0JBQW9CLEdBQUcsU0FBUyxnRkFBZ0YsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSwwR0FBMEcsU0FBUywwQkFBMEIscUJBQXFCLG9CQUFvQixpQkFBaUIsR0FBRyxlQUFlLGdDQUFnQyxnQkFBZ0IsR0FBRyxxQkFBcUIsd0NBQXdDLEdBQUcsMkJBQTJCLHdDQUF3QyxHQUFHLGlDQUFpQyx1Q0FBdUMsR0FBRyxVQUFVLDhCQUE4Qix5Q0FBeUMsOEJBQThCLHFFQUFxRSxHQUFHLGdCQUFnQixxQkFBcUIscUJBQXFCLEdBQUcscUJBQXFCLGtCQUFrQixzQkFBc0IsR0FBRyxlQUFlLGtCQUFrQixHQUFHLG1CQUFtQixvQkFBb0IsR0FBRyxxQkFBcUI7QUFDaGpFO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDbUQ7QUFDSjtBQUNEO0FBQ1g7QUFDTzs7QUFFMUM7O0FBRU87QUFDUCxjQUFjLCtEQUFVO0FBQ3hCLGtCQUFrQiw0REFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsb0RBQVU7QUFDL0IsYUFBYSwyREFBUztBQUN0Qjs7QUFFQTtBQUNBLFVBQVUsV0FBVyxFQUFFLDJEQUFTO0FBQ2hDLFVBQVUsT0FBTyxFQUFFLDJEQUFTO0FBQzVCLFVBQVUsWUFBWSxFQUFFLDJEQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDJCQUEyQjtBQUNsRSwwQ0FBMEMsMkJBQTJCO0FBQ3JFLG9DQUFvQyx3QkFBd0I7QUFDNUQ7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AscUJBQXFCLDJEQUFTO0FBQzlCLHFCQUFxQixvREFBVTtBQUMvQixxQkFBcUIsMkRBQVM7QUFDOUI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkRlO0FBQ2Y7O0FBRUE7QUFDQSx3RkFBd0YsS0FBSztBQUM3RixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDeUM7QUFDZ0I7O0FBRXpELFlBQVksMERBQVU7O0FBRVA7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHFFQUFhO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaENhOztBQUV2QjtBQUNmO0FBQ0E7QUFDQSxlQUFlLHNEQUFPO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxlQUFlLHNEQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLHNEQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsc0RBQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsZUFBZSxzREFBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxzREFBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxXQUFXO0FBQ1g7Ozs7Ozs7Ozs7Ozs7OztBQy9EZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUN2QixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzNFcUI7QUFDdUQ7O0FBRTVFLDBCQUEwQix1RUFBZTtBQUN6Qyx3RUFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXIvYnVpbGQtcGFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9zcmMvY29udHJvbGxlci9nZXQtYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9kYXRhL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2RhdGEvZWxlbWVudC1tYWtlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9zcmMvZGF0YS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2RhdGEvc3ViY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9zcmMvZGF0YS93ZWF0aGVyLWNsYXNzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNwYWNlK01vbm8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIG1pbi1oZWlnaHQ6IDFyZW07XFxuICBtaW4td2lkdGg6IDFyZW07XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbmRpdiA+IGRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBvbGl2ZWRyYWI7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuZGl2ID4gZGl2ID4gZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigzNSwgMTQyLCAxMzcpO1xcbn1cXG5cXG5kaXYgPiBkaXYgPiBkaXYgPiBkaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExNywgMzUsIDE0Mik7XFxufVxcblxcbmRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTQyLCA5MiwgMzUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMTk7XFxuICBmb250LWZhbWlseTogJ1NwYWNlIE1vbm8nLCBtb25vc3BhY2U7XFxuICBjb2xvcjogcmdiKDE0NSwgMjUzLCAxNTkpO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA0cHggcmdiKDg2LCAyMjEsIDEwNCksIDAgMCA4cHggcmdiKDU3LCAyMDcsIDc3KTtcXG59XFxuXFxuLm1haW4tYXJlYSB7XFxuICBtaW4td2lkdGg6IDIwcmVtO1xcbiAgbWF4LXdpZHRoOiAzMHJlbTtcXG59XFxuXFxuLmhlcm8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtaW4taGVpZ2h0OiAxMHJlbTtcXG59XFxuXFxuLmhpZ2gtbG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jdXJyZW50LXRlbXAge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLGdFQUFnRTtBQUNsRTs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TcGFjZStNb25vJmRpc3BsYXk9c3dhcCcpO1xcblxcbmRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBtaW4taGVpZ2h0OiAxcmVtO1xcbiAgbWluLXdpZHRoOiAxcmVtO1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG5kaXYgPiBkaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgb2xpdmVkcmFiO1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbmRpdiA+IGRpdiA+IGRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzUsIDE0MiwgMTM3KTtcXG59XFxuXFxuZGl2ID4gZGl2ID4gZGl2ID4gZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTcsIDM1LCAxNDIpO1xcbn1cXG5cXG5kaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE0MiwgOTIsIDM1KTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTE5O1xcbiAgZm9udC1mYW1pbHk6ICdTcGFjZSBNb25vJywgbW9ub3NwYWNlO1xcbiAgY29sb3I6IHJnYigxNDUsIDI1MywgMTU5KTtcXG4gIHRleHQtc2hhZG93OiAwIDAgNHB4IHJnYig4NiwgMjIxLCAxMDQpLCAwIDAgOHB4IHJnYig1NywgMjA3LCA3Nyk7XFxufVxcblxcbi5tYWluLWFyZWEge1xcbiAgbWluLXdpZHRoOiAyMHJlbTtcXG4gIG1heC13aWR0aDogMzByZW07XFxufVxcblxcbi5oZXJvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogMTByZW07XFxufVxcblxcbi5oaWdoLWxvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY3VycmVudC10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IGNvbXBvbmVudEVsZW1lbnRzIGZyb20gJy4uL2RhdGEvY29tcG9uZW50cyc7XG5pbXBvcnQgY29tcG9uZW50cyBmcm9tICcuLi9kYXRhL3N1YmNvbXBvbmVudHMnO1xuaW1wb3J0IE15V2VhdGhlciBmcm9tICcuLi9kYXRhL3dlYXRoZXItY2xhc3MnO1xuaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi9nZXQtYXBpJztcbmltcG9ydCBzZWxlY3RvcnMgZnJvbSAnLi4vZGF0YS9zZWxlY3RvcnMnO1xuXG4vLyBjb25zdCBkZWZhdWx0V2VhdGhlckRhdGEgPSBnZXRXZWF0aGVyKCdvZ2RlbicpO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTdHJ1Y3R1cmVzKCkge1xuICBjb25zdCBlbGUgPSBjb21wb25lbnRzKCk7XG4gIGNvbnN0IHNlY3Rpb24gPSBjb21wb25lbnRFbGVtZW50cygpO1xuICByZXR1cm4gZWxlXG4gICAgLmRpdkNJKCdtYWluLWFyZWEnLCAnbWFpbi1hcmVhJylcbiAgICAuYWRkQ2hpbGQoc2VjdGlvbi5pbnB1dEZvcm0oKSlcbiAgICAuYWRkQ2hpbGQoc2VjdGlvbi5sb2NhdGlvbigpKVxuICAgIC5hZGRDaGlsZChzZWN0aW9uLmhlcm8oKSlcbiAgICAuYnVpbGQoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVmYXVsdFdlYXRoZXIoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKCdPZ2RlbicpO1xuICByZXR1cm4gbmV3IE15V2VhdGhlcihkYXRhKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYXBwZW5kSW5mbyh3ZWF0aGVyLCBmb3JtYXQpIHtcbiAgY29uc3QgeyBsb2NhdGlvbiB9ID0gc2VsZWN0b3JzKCk7XG4gIGNvbnN0IHsgaGVybyB9ID0gc2VsZWN0b3JzKCk7XG4gIGNvbnN0IHsgaW5wdXRGb3JtIH0gPSBzZWxlY3RvcnMoKTtcbiAgaW5wdXRGb3JtLmlucHV0RmllbGQudGV4dENvbnRlbnQgPSB3ZWF0aGVyLmdldENpdHkoKTtcbiAgbG9jYXRpb24uY2l0eS50ZXh0Q29udGVudCA9IHdlYXRoZXIuZ2V0Q2l0eSgpO1xuICBsb2NhdGlvbi5jb3VudHJ5LnRleHRDb250ZW50ID0gd2VhdGhlci5nZXRDb3VudHJ5KCk7XG4gIGxvY2F0aW9uLmxvY2FsVGltZS50ZXh0Q29udGVudCA9IHdlYXRoZXIuZ2V0VGltZSgpO1xuICBoZXJvLmRheUhpZ2gudGV4dENvbnRlbnQgPSBgRGF5IPCfoJkgJHt3ZWF0aGVyLmdldE1heFRlbXAoZm9ybWF0KX3CsGA7XG4gIGhlcm8ubmlnaHRMb3cudGV4dENvbnRlbnQgPSBgTmlnaHQg8J+gmyAke3dlYXRoZXIuZ2V0TWluVGVtcChmb3JtYXQpfcKwYDtcbiAgaGVyby5jdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXIuZ2V0VGVtcChmb3JtYXQpfcKwYDtcbiAgaGVyby5jb25kaXRpb25UZXh0LnRleHRDb250ZW50ID0gd2VhdGhlci5nZXRDb25kaXRpb24oKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlZmF1bHRJbmZvQnVpbGQoKSB7XG4gIGNvbnN0IGRlZmF1bHREYXRhID0gYXdhaXQgZGVmYXVsdFdlYXRoZXIoKTtcbiAgY29uc29sZS5sb2coJ2RlZmF1bHQgZGF0YScsIGRlZmF1bHREYXRhKTtcbiAgcmV0dXJuIGFwcGVuZEluZm8oZGVmYXVsdERhdGEsICdhbWVyJyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidXR0b25DbGlja2VkKCkge1xuICBjb25zdCBjaXR5Q2hvaWNlID0gc2VsZWN0b3JzKCkuaW5wdXRGb3JtLmlucHV0RmllbGQudmFsdWU7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHlDaG9pY2UpXG4gIGNvbnN0IG15RGF0YSA9IG5ldyBNeVdlYXRoZXIoZGF0YSlcbiAgY29uc3QgZm9ybWF0ID0gJ2FtZXInIC8vIFRPRE86IG5lZWRzIHRvIGNoZWNrIHVzZXIgY2hvaWNlIHdoZW4gaW1wbGVtZW50ZWRcbiAgYXBwZW5kSW5mbyhteURhdGEsIGZvcm1hdClcbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KSB7XG4gIC8vIGNvbnNvbGUubG9nKGlucHV0LnZhbHVlKVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ODgwMzU0MmQ0ZDJmNDAwZGE0MzE4MzEyMTIzMDYwNCZxPSR7Y2l0eX0mZGF5cz0xJmFxaT1ubyZhbGVydHM9bm9gLFxuICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IGNvbXBvbmVudHMgZnJvbSAnLi9zdWJjb21wb25lbnRzJztcbmltcG9ydCB7IGJ1dHRvbkNsaWNrZWQgfSBmcm9tICcuLi9jb250cm9sbGVyL2J1aWxkLXBhZ2UnO1xuXG5jb25zdCBlbGUgPSBjb21wb25lbnRzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvbmVudEVsZW1lbnRzKCkge1xuICBjb25zdCBkZWZhdWx0Q2l0eSA9ICdPZ2Rlbic7XG4gIGZ1bmN0aW9uIGlucHV0Rm9ybSgpIHtcbiAgICByZXR1cm4gZWxlXG4gICAgICAuZGl2Q0koJ2Zvcm0tY29udGFpbmVyJywgJ2Zvcm0tY29udGFpbmVyJylcbiAgICAgIC5hZGRDaGlsZChlbGUuaW5wQ0lJbignY2l0eS1maWVsZCcsICdjaXR5LWZpZWxkJywgZGVmYXVsdENpdHkpKVxuICAgICAgLmFkZENoaWxkKFxuICAgICAgICBlbGVcbiAgICAgICAgICAuYnV0Q0lUKCdzdWJtaXQtY2l0eScsICdzdWJtaXQtY2l0eScsICdHZXQgV2VhdGhlcicpXG4gICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYnV0dG9uQ2xpY2tlZCgpKVxuICAgICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvY2F0aW9uKCkge1xuICAgIHJldHVybiBlbGVcbiAgICAgIC5kaXZDSSgnbG9jYXRpb24tY29udGFpbmVyJywgJ2xvY2F0aW9uLWNvbnRhaW5lcicpXG4gICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJKCdjaXR5JywgJ2NpdHknKSlcbiAgICAgIC5hZGRDaGlsZChlbGUuZGl2Q0koJ2NvdW50cnknLCAnY291bnRyeScpKVxuICAgICAgLmFkZENoaWxkKGVsZS5kaXZDSSgnbG9jYWwtdGltZScsICdsb2NhbC10aW1lJykpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGVybygpIHtcbiAgICByZXR1cm4gZWxlXG4gICAgICAuZGl2Q0koJ2hlcm8tY29udGFpbmVyJywgJ2hlcm8tY29udGFpbmVyJylcbiAgICAgIC5hZGRDaGlsZChcbiAgICAgICAgZWxlXG4gICAgICAgICAgLmRpdkNJKCdoZXJvLTEnLCAnaGVyby0xJylcbiAgICAgICAgICAuYWRkQ2hpbGQoXG4gICAgICAgICAgICBlbGVcbiAgICAgICAgICAgICAgLmRpdkNJKCdoaWdoLWxvdycsICdoaWdoLWxvdycpXG4gICAgICAgICAgICAgIC5hZGRDaGlsZChlbGUuZGl2Q0koJ2RheS1oaWdoJywgJ2RheS1oaWdoJykpXG4gICAgICAgICAgICAgIC5hZGRDaGlsZChlbGUuZGl2Q0koJ25pZ2h0LWxvdycsICduaWdodC1sb3cnKSlcbiAgICAgICAgICApXG4gICAgICAgICAgLmFkZENoaWxkKGVsZS5kaXZDSSgnY3VycmVudC10ZW1wJywgJ2N1cnJlbnQtdGVtcCcpKVxuICAgICAgICAgIC5hZGRDaGlsZChlbGUuZGl2Q0koJ2ZlZWxzLWxpa2UnLCAnZmVlbHMtbGlrZScpKVxuICAgICAgKVxuICAgICAgLmFkZENoaWxkKFxuICAgICAgICBlbGVcbiAgICAgICAgICAuZGl2Q0koJ2hlcm8tMicsICdoZXJvLTInKVxuICAgICAgICAgIC5hZGRDaGlsZChlbGUuZGl2Q0koJ2NvbmRpdGlvbi1pY29uJywgJ2NvbmRpdGlvbi1pY29uJykpXG4gICAgICAgICAgLmFkZENoaWxkKGVsZS5kaXZDSSgnY29uZGl0aW9uLXRleHQnLCAnY29uZGl0aW9uLXRleHQnKSlcbiAgICAgICk7XG4gIH1cbiAgcmV0dXJuIHsgaW5wdXRGb3JtLCBsb2NhdGlvbiwgaGVybyB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRUeXBlKSB7XG4gICAgdGhpcy5lbGVtZW50VHlwZSA9IGVsZW1lbnRUeXBlO1xuICAgIHRoaXMuYXR0cmlidXRlcyA9IHt9O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0ge307XG4gIH1cblxuICBhZGRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuICAgICAgdGhpcy5hdHRyaWJ1dGVzW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZEVsZW1lbnQpIHtcbiAgICB0aGlzLnRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkRWxlbWVudCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRUZXh0KHRleHQpIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVyc1tldmVudFR5cGVdKSB7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudFR5cGVdLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYnVpbGQoKSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5lbGVtZW50VHlwZSk7XG5cbiAgICBmb3IgKGNvbnN0IFthdHRyaWJ1dGUsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmF0dHJpYnV0ZXMpKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgbmV3RWxlbWVudC50b2dnbGVBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IFtldmVudFR5cGUsIGxpc3RlbmVyc10gb2YgT2JqZWN0LmVudHJpZXModGhpcy5ldmVudExpc3RlbmVycykpIHtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICBuZXdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBsaXN0ZW5lcik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xuICAgICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkLmJ1aWxkKCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBET010ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy50ZXh0KTtcbiAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoRE9NdGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gIH1cbn1cbiIsImZ1bmN0aW9uIGJ5SUQoaWQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0b3JzKCkge1xuICByZXR1cm4ge1xuICAgIGlucHV0Rm9ybToge1xuICAgICAgZm9ybUNvbnRhaW5lcjogYnlJRCgnZm9ybS1jb250YWluZXInKSxcbiAgICAgIGlucHV0RmllbGQ6IGJ5SUQoJ2NpdHktZmllbGQnKSxcbiAgICAgIHN1Ym1pdEJ1dHRvbjogYnlJRCgnc3VibWl0LWNpdHknKSxcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICBsb2NhdGlvbkNvbnRhaW5lcjogYnlJRCgnbG9jYXRpb24tY29udGFpbmVyJyksXG4gICAgICBjaXR5OiBieUlEKCdjaXR5JyksXG4gICAgICBjb3VudHJ5OiBieUlEKCdjb3VudHJ5JyksXG4gICAgICBsb2NhbFRpbWU6IGJ5SUQoJ2xvY2FsLXRpbWUnKSxcbiAgICB9LFxuICAgIGhlcm86IHtcbiAgICAgIGhlcm9Db250YWluZXI6IGJ5SUQoJ2hlcm8tY29udGFpbmVyJyksXG4gICAgICBoZXJvMTogYnlJRCgnaGVyby0xJyksXG4gICAgICBoaWdoTG93OiBieUlEKCdoaWdoLWxvdycpLFxuICAgICAgZGF5SGlnaDogYnlJRCgnZGF5LWhpZ2gnKSxcbiAgICAgIG5pZ2h0TG93OiBieUlEKCduaWdodC1sb3cnKSxcbiAgICAgIGN1cnJlbnRUZW1wOiBieUlEKCdjdXJyZW50LXRlbXAnKSxcbiAgICAgIGZlZWxzTGlrZTogYnlJRCgnZmVlbHMtbGlrZScpLFxuICAgICAgaGVybzI6IGJ5SUQoJ2hlcm8tMicpLFxuICAgICAgY29uZGl0aW9uSWNvbjogYnlJRCgnY29uZGl0aW9uLWljb24nKSxcbiAgICAgIGNvbmRpdGlvblRleHQ6IGJ5SUQoJ2NvbmRpdGlvbi10ZXh0JyksXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0b3JzO1xuIiwiaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9lbGVtZW50LW1ha2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9uZW50cygpIHtcbiAgLy8gZGl2XG4gIGZ1bmN0aW9uIGRpdkNJKGNsYXNzTmFtZSwgaWQpIHtcbiAgICByZXR1cm4gbmV3IEVsZW1lbnQoJ2RpdicpLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgIGlkLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGl2Q0lUKGNsYXNzTmFtZSwgaWQsIHRleHQpIHtcbiAgICByZXR1cm4gbmV3IEVsZW1lbnQoJ2RpdicpXG4gICAgICAuYWRkQXR0cmlidXRlcyh7XG4gICAgICAgIGNsYXNzOiBjbGFzc05hbWUsXG4gICAgICAgIGlkLFxuICAgICAgfSlcbiAgICAgIC5hZGRUZXh0KHRleHQpO1xuICB9XG5cbiAgLy8gYnV0dG9uXG4gIGZ1bmN0aW9uIGJ1dENJVChjbGFzc05hbWUsIGlkLCB0ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBFbGVtZW50KCdidXR0b24nKVxuICAgICAgLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgICBjbGFzczogY2xhc3NOYW1lLFxuICAgICAgICBpZCxcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICB9KVxuICAgICAgLmFkZFRleHQodGV4dCk7XG4gIH1cblxuICAvLyByYWRpbyBidXR0b25cbiAgZnVuY3Rpb24gcmFkQ0lOQ2goY2xhc3NOYW1lLCBpZCwgbmFtZSwgaXNDaGVja2VkKSB7XG4gICAgcmV0dXJuIG5ldyBFbGVtZW50KCdpbnB1dCcpLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgIHR5cGU6ICdyYWRpbycsXG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICB2YWx1ZTogaWQsXG4gICAgICBjaGVja2VkOiBpc0NoZWNrZWQsXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnBDSUluKGNsYXNzTmFtZSwgaWQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IEVsZW1lbnQoJ2lucHV0JykuYWRkQXR0cmlidXRlcyh7XG4gICAgICBjbGFzczogY2xhc3NOYW1lLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgaWQsXG4gICAgICB2YWx1ZTogaW5pdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGltYWdlXG4gIGZ1bmN0aW9uIGltZ1NBQ0koc3JjLCBhbHQsIGNsYXNzTmFtZSwgaWQpIHtcbiAgICByZXR1cm4gbmV3IEVsZW1lbnQoJ2ltZycpLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgc3JjLFxuICAgICAgYWx0LFxuICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgIGlkLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHsgZGl2Q0ksIGRpdkNJVCwgYnV0Q0lULCByYWRDSU5DaCwgaW1nU0FDSSwgaW5wQ0lJbiB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlXZWF0aGVyIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIGNvbnN0IG5vdyA9IGRhdGEuY3VycmVudDtcbiAgICBjb25zdCBmb3JlY2FzdERheSA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5O1xuICAgIHRoaXMuY2l0eSA9IGRhdGEubG9jYXRpb24ubmFtZTtcbiAgICB0aGlzLmNvdW50cnkgPSBkYXRhLmxvY2F0aW9uLmNvdW50cnk7XG4gICAgdGhpcy5sb2NhbFRpbWUgPSBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZTtcbiAgICB0aGlzLmlzRGF5ID0gbm93LmlzX2RheTtcbiAgICB0aGlzLnRlbXAgPSB7IGFtZXI6IG5vdy50ZW1wX2YsIGVsc2U6IG5vdy50ZW1wX2MgfTtcbiAgICB0aGlzLmZlZWxzTGlrZSA9IHsgYW1lcjogbm93LmZlZWxzbGlrZV9mLCBlbHNlOiBub3cuZmVlbHNsaWtlX2MgfTtcbiAgICB0aGlzLndpbmQgPSB7IGFtZXI6IG5vdy53aW5kX21waCwgZWxzZTogbm93LndpbmRfa3BoIH07XG4gICAgdGhpcy5ndXN0ID0geyBhbWVyOiBub3cuZ3VzdF9tcGgsIGVsc2U6IG5vdy5ndXN0X2twaCB9O1xuICAgIHRoaXMucHJlY2lwID0geyBhbWVyOiBub3cucHJlY2lwX2luLCBlbHNlOiBub3cucHJlY2lwX21tIH07XG4gICAgdGhpcy5tYXhUZW1wID0geyBhbWVyOiBmb3JlY2FzdERheS5tYXh0ZW1wX2YsIGVsc2U6IGZvcmVjYXN0RGF5Lm1heHRlbXBfYyB9O1xuICAgIHRoaXMubWluVGVtcCA9IHsgYW1lcjogZm9yZWNhc3REYXkubWludGVtcF9mLCBlbHNlOiBmb3JlY2FzdERheS5taW50ZW1wX2MgfTtcbiAgICB0aGlzLnRvdGFsUHJlY2lwID0ge1xuICAgICAgYW1lcjogZm9yZWNhc3REYXkudG90YWxwcmVjaXBfaW4sXG4gICAgICBlbHNlOiBmb3JlY2FzdERheS50b3RhbHByZWNpcF9tbSxcbiAgICB9O1xuICAgIHRoaXMuY2xvdWQgPSBub3cuY2xvdWQ7XG4gICAgdGhpcy53aWxsSXRSYWluID0gZm9yZWNhc3REYXkuZGFpbHlfd2lsbF9pdF9yYWluO1xuICAgIHRoaXMud2lsbEl0U25vdyA9IGZvcmVjYXN0RGF5LmRhaWx5X3dpbGxfaXRfc25vdztcbiAgICB0aGlzLmNoYW5jZU9mUmFpbiA9IGZvcmVjYXN0RGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xuICAgIHRoaXMuY2hhbmNlT2ZTbm93ID0gZm9yZWNhc3REYXkuZGFpbHlfY2hhbmNlX29mX3Nub3c7XG4gICAgdGhpcy5jb25kaXRpb24gPSBub3cuY29uZGl0aW9uLnRleHQ7XG4gICAgdGhpcy5odW1pZGl0eSA9IG5vdy5odW1pZGl0eTtcbiAgfVxuXG4gIGdldENpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2l0eTtcbiAgfVxuXG4gIGdldENvdW50cnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY291bnRyeTtcbiAgfVxuXG4gIGdldFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxUaW1lO1xuICB9XG5cbiAgZ2V0SXNEYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNEYXk7XG4gIH1cblxuICBnZXRUZW1wKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLnRlbXBbZm9ybWF0XTtcbiAgfVxuXG4gIGdldEZlZWxzTGlrZShmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5mZWVsc0xpa2VbZm9ybWF0XTtcbiAgfVxuXG4gIGdldFdpbmQoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMud2luZFtmb3JtYXRdO1xuICB9XG5cbiAgZ2V0R3VzdChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5ndXN0W2Zvcm1hdF07XG4gIH1cblxuICBnZXRQcmVjaXAoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMucHJlY2lwW2Zvcm1hdF07XG4gIH1cblxuICBnZXRDb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uO1xuICB9XG5cbiAgZ2V0TWF4VGVtcChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy5tYXhUZW1wW2Zvcm1hdF07XG4gIH1cblxuICBnZXRNaW5UZW1wKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLm1pblRlbXBbZm9ybWF0XTtcbiAgfVxufVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBidWlsZFN0cnVjdHVyZXMsIGRlZmF1bHRJbmZvQnVpbGQgfSBmcm9tICcuL2NvbnRyb2xsZXIvYnVpbGQtcGFnZSc7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnVpbGRTdHJ1Y3R1cmVzKCkpO1xuZGVmYXVsdEluZm9CdWlsZCgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=