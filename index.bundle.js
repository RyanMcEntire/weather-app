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
/* harmony export */   "default": () => (/* binding */ defaultPageBuild)
/* harmony export */ });
/* harmony import */ var _data_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/components */ "./src/data/components.js");
/* harmony import */ var _data_element_maker_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/element-maker-components */ "./src/data/element-maker-components.js");
/* harmony import */ var _data_weather_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/weather-class */ "./src/data/weather-class.js");
/* harmony import */ var _get_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-api */ "./src/controller/get-api.js");





const defaultWeatherData = (0,_get_api__WEBPACK_IMPORTED_MODULE_3__["default"])("ogden");
// FIXME: make myWeather asyncronously async await
console.log(defaultWeatherData);
console.log(new _data_weather_class__WEBPACK_IMPORTED_MODULE_2__["default"](defaultWeatherData));
function defaultWeather() {
  const data = defaultWeatherData;
  return new _data_weather_class__WEBPACK_IMPORTED_MODULE_2__["default"](data);
}

const ele = (0,_data_element_maker_components__WEBPACK_IMPORTED_MODULE_1__["default"])();
const section = (0,_data_components__WEBPACK_IMPORTED_MODULE_0__["default"])();

function defaultPageBuild() {
  return ele
    .divCI("main-area", "main-area")
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
    `http://api.weatherapi.com/v1/current.json?key=8803542d4d2f400da43183121230604&q=${city}&aqi=no)`,
    { mode: "cors" }
  );
  const weatherData = await response.json();

  console.log(weatherData.current.temp_f, weatherData.location.name);
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
/* harmony import */ var _element_maker_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-maker-components */ "./src/data/element-maker-components.js");


const ele = (0,_element_maker_components__WEBPACK_IMPORTED_MODULE_0__["default"])();

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
      .divCI("form-container", "form-container")
      .addChild(ele.inpCIIn("city-field", "city-field", defaultValue))
      .addChild(ele.butCIT("submit-city", "submit-city", "Get Weather"));
  }

  function location(cityName, countryName, localTime) {
    return ele
      .divCI("location-container", "location-container")
      .addChild(ele.divCIT("city", "city", cityName))
      .addChild(ele.divCIT("country", "country", countryName))
      .addChild(ele.divCIT("local-time", "local-time", localTime));
  }

  function hero(dayHigh, nightLow, currentTemp, conditionText) {
    return ele
      .divCI("hero-container", "hero-container")
      .addChild(
        ele
          .divCI("hero-1", "hero-1")
          .addChild(
            ele
              .divCI("high-low", "high-low")
              .addChild(ele.divCIT("dayHigh", "dayHigh ", `Day ↑ ${dayHigh}° `))
              .addChild(ele.divCIT("dayLow", "dayLow ", `Night ↓ ${nightLow}°`))
          )
          .addChild(
            ele.divCIT("current-temp", "current-temp", `${currentTemp}°`)
          )
      )
      .addChild(
        ele
          .divCI("hero-2", "hero-2")
          .addChild(ele.divCI("condition-icon", "condition0icon"))
          .addChild(
            ele.divCIT("condition-text", "condition-text", conditionText)
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

/***/ "./src/data/element-maker-components.js":
/*!**********************************************!*\
  !*** ./src/data/element-maker-components.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ components)
/* harmony export */ });
/* harmony import */ var _element_maker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-maker */ "./src/data/element-maker.js");


function components() {
  // div
  function divCI(className, id) {
    return new _element_maker__WEBPACK_IMPORTED_MODULE_0__["default"]("div").addAttributes({
      class: className,
      id,
    });
  }

  function divCIT(className, id, text) {
    return new _element_maker__WEBPACK_IMPORTED_MODULE_0__["default"]("div")
      .addAttributes({
        class: className,
        id,
      })
      .addText(text);
  }

  // button
  function butCIT(className, id, text) {
    return new _element_maker__WEBPACK_IMPORTED_MODULE_0__["default"]("button")
      .addAttributes({
        class: className,
        id,
        type: "button",
      })
      .addText(text);
  }

  // radio button
  function radCINCh(className, id, name, isChecked) {
    return new _element_maker__WEBPACK_IMPORTED_MODULE_0__["default"]("input").addAttributes({
      class: className,
      type: "radio",
      id,
      name,
      value: id,
      checked: isChecked,
    });
  }

  function inpCIIn(className, id, init) {
    return new _element_maker__WEBPACK_IMPORTED_MODULE_0__["default"]("input").addAttributes({
      class: className,
      type: "text",
      id,
      value: init,
    });
  }

  // image
  function imgSACI(src, alt, className, id) {
    return new _element_maker__WEBPACK_IMPORTED_MODULE_0__["default"]("img").addAttributes({
      src,
      alt,
      class: className,
      id,
    });
  }

  return { divCI, divCIT, butCIT, radCINCh, imgSACI, inpCIIn };
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
      if (typeof value === "boolean") {
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
    this.city = data.location.name;
    this.country = data.location.country;
    this.localTime = data.location.localtime;
    this.isDay = now.is_day;
    this.temp = { amer: now.temp_f, else: now.temp_c };
    this.feelsLike = { amer: now.feelslike_f, else: now.feelslike_c };
    this.wind = { amer: now.wind_mph, else: now.wind_kph };
    this.gust = { amer: now.gust_mph, else: now.gust_kph };
    this.precip = { amer: now.precip_in, else: now.precip_mm };
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
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _controller_get_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/get-api */ "./src/controller/get-api.js");
/* harmony import */ var _controller_build_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/build-page */ "./src/controller/build-page.js");




(0,_controller_get_api__WEBPACK_IMPORTED_MODULE_1__["default"])("ogden");
(0,_controller_build_page__WEBPACK_IMPORTED_MODULE_2__["default"])();



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ25EcUI7QUFDeUI7QUFDUzs7QUFFdkQsK0RBQVU7QUFDVixrRUFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXIvYnVpbGQtcGFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9zcmMvY29udHJvbGxlci9nZXQtYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9kYXRhL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2RhdGEvZWxlbWVudC1tYWtlci1jb21wb25lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9kYXRhL2VsZW1lbnQtbWFrZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2RhdGEvd2VhdGhlci1jbGFzcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNvbXBvbmVudEVsZW1lbnRzIGZyb20gXCIuLi9kYXRhL2NvbXBvbmVudHNcIjtcbmltcG9ydCBjb21wb25lbnRzIGZyb20gXCIuLi9kYXRhL2VsZW1lbnQtbWFrZXItY29tcG9uZW50c1wiO1xuaW1wb3J0IE15V2VhdGhlciBmcm9tIFwiLi4vZGF0YS93ZWF0aGVyLWNsYXNzXCI7XG5pbXBvcnQgZ2V0V2VhdGhlciBmcm9tIFwiLi9nZXQtYXBpXCI7XG5cbmNvbnN0IGRlZmF1bHRXZWF0aGVyRGF0YSA9IGdldFdlYXRoZXIoXCJvZ2RlblwiKTtcbi8vIEZJWE1FOiBtYWtlIG15V2VhdGhlciBhc3luY3Jvbm91c2x5IGFzeW5jIGF3YWl0XG5jb25zb2xlLmxvZyhkZWZhdWx0V2VhdGhlckRhdGEpO1xuY29uc29sZS5sb2cobmV3IE15V2VhdGhlcihkZWZhdWx0V2VhdGhlckRhdGEpKTtcbmZ1bmN0aW9uIGRlZmF1bHRXZWF0aGVyKCkge1xuICBjb25zdCBkYXRhID0gZGVmYXVsdFdlYXRoZXJEYXRhO1xuICByZXR1cm4gbmV3IE15V2VhdGhlcihkYXRhKTtcbn1cblxuY29uc3QgZWxlID0gY29tcG9uZW50cygpO1xuY29uc3Qgc2VjdGlvbiA9IGNvbXBvbmVudEVsZW1lbnRzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZmF1bHRQYWdlQnVpbGQoKSB7XG4gIHJldHVybiBlbGVcbiAgICAuZGl2Q0koXCJtYWluLWFyZWFcIiwgXCJtYWluLWFyZWFcIilcbiAgICAuYWRkQ2hpbGQoc2VjdGlvbi5pbnB1dEZvcm0oZGVmYXVsdFdlYXRoZXIoKS5nZXRDaXR5KCkpKVxuICAgIC5hZGRDaGlsZChzZWN0aW9uLmxvY2F0aW9uKCkpXG4gICAgLmFkZENoaWxkKHNlY3Rpb24uaGVybygpKVxuICAgIC5idWlsZCgpO1xufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZhdWx0UGFnZUJ1aWxkKCkge1xuLy8gICByZXR1cm4gZWxlXG4vLyAgICAgLmRpdkNJKFwibWFpbi1hcmVhXCIsIFwibWFpbi1hcmVhXCIpXG4vLyAgICAgLmFkZENoaWxkKHNlY3Rpb24uaW5wdXRGb3JtKCkpXG4vLyAgICAgLmFkZENoaWxkKHNlY3Rpb24ubG9jYXRpb24oKSlcbi8vICAgICAuYWRkQ2hpbGQoc2VjdGlvbi5oZXJvKCkpXG4vLyAgICAgLmJ1aWxkKCk7XG4vLyB9XG4iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHkpIHtcbiAgLy8gY29uc29sZS5sb2coaW5wdXQudmFsdWUpXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTg4MDM1NDJkNGQyZjQwMGRhNDMxODMxMjEyMzA2MDQmcT0ke2NpdHl9JmFxaT1ubylgLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZiwgd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZSk7XG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cbiIsImltcG9ydCBjb21wb25lbnRzIGZyb20gXCIuL2VsZW1lbnQtbWFrZXItY29tcG9uZW50c1wiO1xuXG5jb25zdCBlbGUgPSBjb21wb25lbnRzKCk7XG5cbi8vIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IFwiT2dkZW5cIjtcbi8vIGNvbnN0IGNpdHlOYW1lID0gXCJPZ2RlblwiO1xuLy8gY29uc3QgY291bnRyeU5hbWUgPSBcIlVTQVwiO1xuLy8gY29uc3QgbG9jYWxUaW1lID0gXCI0OjIwXCI7XG4vLyBjb25zdCBkYXlIaWdoID0gXCI5N1wiO1xuLy8gY29uc3QgbmlnaHRMb3cgPSBcIjIzXCI7XG4vLyBjb25zdCBjdXJyZW50VGVtcCA9IFwiNjlcIjtcbi8vIGNvbnN0IGNvbmRpdGlvblRleHQgPSBcInN1bm55XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvbmVudEVsZW1lbnRzKCkge1xuICBmdW5jdGlvbiBpbnB1dEZvcm0oZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuIGVsZVxuICAgICAgLmRpdkNJKFwiZm9ybS1jb250YWluZXJcIiwgXCJmb3JtLWNvbnRhaW5lclwiKVxuICAgICAgLmFkZENoaWxkKGVsZS5pbnBDSUluKFwiY2l0eS1maWVsZFwiLCBcImNpdHktZmllbGRcIiwgZGVmYXVsdFZhbHVlKSlcbiAgICAgIC5hZGRDaGlsZChlbGUuYnV0Q0lUKFwic3VibWl0LWNpdHlcIiwgXCJzdWJtaXQtY2l0eVwiLCBcIkdldCBXZWF0aGVyXCIpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvY2F0aW9uKGNpdHlOYW1lLCBjb3VudHJ5TmFtZSwgbG9jYWxUaW1lKSB7XG4gICAgcmV0dXJuIGVsZVxuICAgICAgLmRpdkNJKFwibG9jYXRpb24tY29udGFpbmVyXCIsIFwibG9jYXRpb24tY29udGFpbmVyXCIpXG4gICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJVChcImNpdHlcIiwgXCJjaXR5XCIsIGNpdHlOYW1lKSlcbiAgICAgIC5hZGRDaGlsZChlbGUuZGl2Q0lUKFwiY291bnRyeVwiLCBcImNvdW50cnlcIiwgY291bnRyeU5hbWUpKVxuICAgICAgLmFkZENoaWxkKGVsZS5kaXZDSVQoXCJsb2NhbC10aW1lXCIsIFwibG9jYWwtdGltZVwiLCBsb2NhbFRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhlcm8oZGF5SGlnaCwgbmlnaHRMb3csIGN1cnJlbnRUZW1wLCBjb25kaXRpb25UZXh0KSB7XG4gICAgcmV0dXJuIGVsZVxuICAgICAgLmRpdkNJKFwiaGVyby1jb250YWluZXJcIiwgXCJoZXJvLWNvbnRhaW5lclwiKVxuICAgICAgLmFkZENoaWxkKFxuICAgICAgICBlbGVcbiAgICAgICAgICAuZGl2Q0koXCJoZXJvLTFcIiwgXCJoZXJvLTFcIilcbiAgICAgICAgICAuYWRkQ2hpbGQoXG4gICAgICAgICAgICBlbGVcbiAgICAgICAgICAgICAgLmRpdkNJKFwiaGlnaC1sb3dcIiwgXCJoaWdoLWxvd1wiKVxuICAgICAgICAgICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJVChcImRheUhpZ2hcIiwgXCJkYXlIaWdoIFwiLCBgRGF5IOKGkSAke2RheUhpZ2h9wrAgYCkpXG4gICAgICAgICAgICAgIC5hZGRDaGlsZChlbGUuZGl2Q0lUKFwiZGF5TG93XCIsIFwiZGF5TG93IFwiLCBgTmlnaHQg4oaTICR7bmlnaHRMb3d9wrBgKSlcbiAgICAgICAgICApXG4gICAgICAgICAgLmFkZENoaWxkKFxuICAgICAgICAgICAgZWxlLmRpdkNJVChcImN1cnJlbnQtdGVtcFwiLCBcImN1cnJlbnQtdGVtcFwiLCBgJHtjdXJyZW50VGVtcH3CsGApXG4gICAgICAgICAgKVxuICAgICAgKVxuICAgICAgLmFkZENoaWxkKFxuICAgICAgICBlbGVcbiAgICAgICAgICAuZGl2Q0koXCJoZXJvLTJcIiwgXCJoZXJvLTJcIilcbiAgICAgICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJKFwiY29uZGl0aW9uLWljb25cIiwgXCJjb25kaXRpb24waWNvblwiKSlcbiAgICAgICAgICAuYWRkQ2hpbGQoXG4gICAgICAgICAgICBlbGUuZGl2Q0lUKFwiY29uZGl0aW9uLXRleHRcIiwgXCJjb25kaXRpb24tdGV4dFwiLCBjb25kaXRpb25UZXh0KVxuICAgICAgICAgIClcbiAgICAgICk7XG4gIH1cbiAgcmV0dXJuIHsgaW5wdXRGb3JtLCBsb2NhdGlvbiwgaGVybyB9O1xufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlQnVpbGQoKSB7XG4vLyAgIHJldHVybiBlbGVcbi8vICAgICAuZGl2Q0koXCJtYWluLXBhZ2VcIiwgXCJtYWluLXBhZ2VcIilcbi8vICAgICAuYWRkQ2hpbGQoaW5wdXRGb3JtKCkpXG4vLyAgICAgLmFkZENoaWxkKGxvY2F0aW9uKCkpXG4vLyAgICAgLmFkZENoaWxkKGhlcm8oKSlcbi8vICAgICAuYnVpbGQoKTtcbi8vIH1cbiIsImltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnQtbWFrZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9uZW50cygpIHtcbiAgLy8gZGl2XG4gIGZ1bmN0aW9uIGRpdkNJKGNsYXNzTmFtZSwgaWQpIHtcbiAgICByZXR1cm4gbmV3IEVsZW1lbnQoXCJkaXZcIikuYWRkQXR0cmlidXRlcyh7XG4gICAgICBjbGFzczogY2xhc3NOYW1lLFxuICAgICAgaWQsXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXZDSVQoY2xhc3NOYW1lLCBpZCwgdGV4dCkge1xuICAgIHJldHVybiBuZXcgRWxlbWVudChcImRpdlwiKVxuICAgICAgLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgICBjbGFzczogY2xhc3NOYW1lLFxuICAgICAgICBpZCxcbiAgICAgIH0pXG4gICAgICAuYWRkVGV4dCh0ZXh0KTtcbiAgfVxuXG4gIC8vIGJ1dHRvblxuICBmdW5jdGlvbiBidXRDSVQoY2xhc3NOYW1lLCBpZCwgdGV4dCkge1xuICAgIHJldHVybiBuZXcgRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgICBjbGFzczogY2xhc3NOYW1lLFxuICAgICAgICBpZCxcbiAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIH0pXG4gICAgICAuYWRkVGV4dCh0ZXh0KTtcbiAgfVxuXG4gIC8vIHJhZGlvIGJ1dHRvblxuICBmdW5jdGlvbiByYWRDSU5DaChjbGFzc05hbWUsIGlkLCBuYW1lLCBpc0NoZWNrZWQpIHtcbiAgICByZXR1cm4gbmV3IEVsZW1lbnQoXCJpbnB1dFwiKS5hZGRBdHRyaWJ1dGVzKHtcbiAgICAgIGNsYXNzOiBjbGFzc05hbWUsXG4gICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICB2YWx1ZTogaWQsXG4gICAgICBjaGVja2VkOiBpc0NoZWNrZWQsXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnBDSUluKGNsYXNzTmFtZSwgaWQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IEVsZW1lbnQoXCJpbnB1dFwiKS5hZGRBdHRyaWJ1dGVzKHtcbiAgICAgIGNsYXNzOiBjbGFzc05hbWUsXG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIGlkLFxuICAgICAgdmFsdWU6IGluaXQsXG4gICAgfSk7XG4gIH1cblxuICAvLyBpbWFnZVxuICBmdW5jdGlvbiBpbWdTQUNJKHNyYywgYWx0LCBjbGFzc05hbWUsIGlkKSB7XG4gICAgcmV0dXJuIG5ldyBFbGVtZW50KFwiaW1nXCIpLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgc3JjLFxuICAgICAgYWx0LFxuICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgIGlkLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHsgZGl2Q0ksIGRpdkNJVCwgYnV0Q0lULCByYWRDSU5DaCwgaW1nU0FDSSwgaW5wQ0lJbiB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRUeXBlKSB7XG4gICAgdGhpcy5lbGVtZW50VHlwZSA9IGVsZW1lbnRUeXBlO1xuICAgIHRoaXMuYXR0cmlidXRlcyA9IHt9O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0ge307XG4gIH1cblxuICBhZGRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKSkge1xuICAgICAgdGhpcy5hdHRyaWJ1dGVzW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZEVsZW1lbnQpIHtcbiAgICB0aGlzLnRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkRWxlbWVudCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRUZXh0KHRleHQpIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBsaXN0ZW5lcikge1xuICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVyc1tldmVudFR5cGVdKSB7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzW2V2ZW50VHlwZV0gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudFR5cGVdLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYnVpbGQoKSB7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy5lbGVtZW50VHlwZSk7XG5cbiAgICBmb3IgKGNvbnN0IFthdHRyaWJ1dGUsIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmF0dHJpYnV0ZXMpKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICBuZXdFbGVtZW50LnRvZ2dsZUF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgW2V2ZW50VHlwZSwgbGlzdGVuZXJzXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmV2ZW50TGlzdGVuZXJzKSkge1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgIG5ld0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGxpc3RlbmVyKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XG4gICAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQuYnVpbGQoKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IERPTXRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLnRleHQpO1xuICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChET010ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlXZWF0aGVyIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIGNvbnN0IG5vdyA9IGRhdGEuY3VycmVudDtcbiAgICB0aGlzLmNpdHkgPSBkYXRhLmxvY2F0aW9uLm5hbWU7XG4gICAgdGhpcy5jb3VudHJ5ID0gZGF0YS5sb2NhdGlvbi5jb3VudHJ5O1xuICAgIHRoaXMubG9jYWxUaW1lID0gZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWU7XG4gICAgdGhpcy5pc0RheSA9IG5vdy5pc19kYXk7XG4gICAgdGhpcy50ZW1wID0geyBhbWVyOiBub3cudGVtcF9mLCBlbHNlOiBub3cudGVtcF9jIH07XG4gICAgdGhpcy5mZWVsc0xpa2UgPSB7IGFtZXI6IG5vdy5mZWVsc2xpa2VfZiwgZWxzZTogbm93LmZlZWxzbGlrZV9jIH07XG4gICAgdGhpcy53aW5kID0geyBhbWVyOiBub3cud2luZF9tcGgsIGVsc2U6IG5vdy53aW5kX2twaCB9O1xuICAgIHRoaXMuZ3VzdCA9IHsgYW1lcjogbm93Lmd1c3RfbXBoLCBlbHNlOiBub3cuZ3VzdF9rcGggfTtcbiAgICB0aGlzLnByZWNpcCA9IHsgYW1lcjogbm93LnByZWNpcF9pbiwgZWxzZTogbm93LnByZWNpcF9tbSB9O1xuICAgIHRoaXMuY29uZGl0aW9uID0gbm93LmNvbmRpdGlvbi50ZXh0O1xuICAgIHRoaXMuaHVtaWRpdHkgPSBub3cuaHVtaWRpdHk7XG4gIH1cblxuICBnZXRDaXR5KCkge1xuICAgIHJldHVybiB0aGlzLmNpdHk7XG4gIH1cblxuICBnZXRDb3VudHJ5KCkge1xuICAgIHJldHVybiB0aGlzLmNvdW50cnk7XG4gIH1cblxuICBnZXRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsVGltZTtcbiAgfVxuXG4gIGdldElzRGF5KCkge1xuICAgIHJldHVybiB0aGlzLmlzRGF5O1xuICB9XG5cbiAgZ2V0VGVtcChmb3JtYXQpIHtcbiAgICByZXR1cm4gdGhpcy50ZW1wW2Zvcm1hdF07XG4gIH1cblxuICBnZXRGZWVsc0xpa2UoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMuZmVlbHNMaWtlW2Zvcm1hdF07XG4gIH1cblxuICBnZXRXaW5kKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLndpbmRbZm9ybWF0XTtcbiAgfVxuXG4gIGdldEd1c3QoZm9ybWF0KSB7XG4gICAgcmV0dXJuIHRoaXMuZ3VzdFtmb3JtYXRdO1xuICB9XG5cbiAgZ2V0UHJlY2lwKGZvcm1hdCkge1xuICAgIHJldHVybiB0aGlzLnByZWNpcFtmb3JtYXRdO1xuICB9XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGdldFdlYXRoZXIgZnJvbSBcIi4vY29udHJvbGxlci9nZXQtYXBpXCI7XG5pbXBvcnQgZGVmYXVsdFBhZ2VCdWlsZCBmcm9tIFwiLi9jb250cm9sbGVyL2J1aWxkLXBhZ2VcIjtcblxuZ2V0V2VhdGhlcihcIm9nZGVuXCIpO1xuZGVmYXVsdFBhZ2VCdWlsZCgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=