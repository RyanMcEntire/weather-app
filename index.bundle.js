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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Overpass+Mono&family=Share+Tech+Mono&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div {\n  border: 1px solid rgb(255, 0, 0);\n  min-height: 1rem;\n  min-width: 1rem;\n  padding: 2px;\n  box-shadow: 0 0 3px red, inset 0 0 3px red;\n}\n\ndiv > div {\n  border: 1px solid olivedrab;\n  margin: 5px;\n  box-shadow: 0 0 3px olivedrab, inset 0 0 3px olivedrab;\n}\n\ndiv > div > div {\n  border: 1px solid rgb(35, 142, 137);\n  box-shadow: 0 0 3px rgb(35, 142, 137), inset 0 0 3px rgb(35, 142, 137);\n}\n\ndiv > div > div > div {\n  border: 1px solid rgb(117, 35, 142);\n  box-shadow: 0 0 3px rgb(117, 35, 142), inset 0 0 3px rgb(117, 35, 142);\n}\n\ndiv > div > div > div > div {\n  border: 1px solid rgb(142, 92, 35);\n  box-shadow: 0 0 3px rgb(142, 92, 35), inset 0 0 3px rgb(142, 92, 35);\n}\n\nbody {\n  background-color: #1a1a19;\n  font-family: 'Share Tech Mono', monospace;\n  color: rgb(145, 253, 159);\n  text-shadow: 0 0 4px rgb(86, 221, 104), 0 0 8px rgb(57, 207, 77);\n}\n\nbutton {\n  background-color: #4b4b48;\n  color: rgb(145, 253, 159);\n  border-color: rgb(35, 142, 137);\n  font-family: 'Share Tech Mono', monospace;\n}\n\ninput {\n  margin: 5px;\n  background-color: #1a1a19;\n  color: rgb(145, 253, 159);\n  border-color: rgb(35, 142, 137);\n  box-shadow: 0 0 3px rgb(35, 142, 137);\n  font-family: 'Share Tech Mono', monospace;\n}\n\ninput:focus {\n  outline: none !important;\n  border: 2px rgb(55, 189, 182);\n  border-style: solid;\n  box-shadow: 0 0 6px rgb(32, 112, 108), inset 0 0 6px rgb(32, 112, 108);\n}\n\n.main-area {\n  min-width: 20rem;\n  max-width: 38rem;\n  margin: auto;\n  margin-top: 2rem;\n}\n\n.hero-container {\n  display: flex;\n  justify-content: space-between;\n  min-height: 10rem;\n}\n\n.hero-2 {\n  flex-grow: 1;\n}\n\n.high-low {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.high-low > div {\n  flex-shrink: 0;\n}\n\n.switch-container {\n  display: flex;\n}\n\n.current-temp {\n  font-size: 4rem;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  font-family: 'Overpass Mono';\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 3px;\n  left: 0;\n  right: 0;\n  bottom: 3px;\n  background-color: #2b2b29;\n  border: 1px solid;\n  box-shadow: 0 0 3px rgb(36, 202, 133);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  top: 2px;\n  content: ':)';\n  height: 21px;\n  width: 23px;\n  left: 2px;\n  bottom: 4px;\n  background-color: #1a1a19;\n  border: 1px solid;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  transform: scaleX(1);\n  text-align: center;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px), scaleX(-1);\n}\n\ninput:checked + .slider:after {\n  transform: scaleX(1);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,gCAAgC;EAChC,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,0CAA0C;AAC5C;;AAEA;EACE,2BAA2B;EAC3B,WAAW;EACX,sDAAsD;AACxD;;AAEA;EACE,mCAAmC;EACnC,sEAAsE;AACxE;;AAEA;EACE,mCAAmC;EACnC,sEAAsE;AACxE;;AAEA;EACE,kCAAkC;EAClC,oEAAoE;AACtE;;AAEA;EACE,yBAAyB;EACzB,yCAAyC;EACzC,yBAAyB;EACzB,gEAAgE;AAClE;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,+BAA+B;EAC/B,yCAAyC;AAC3C;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,yBAAyB;EACzB,+BAA+B;EAC/B,qCAAqC;EACrC,yCAAyC;AAC3C;;AAEA;EACE,wBAAwB;EACxB,6BAA6B;EAC7B,mBAAmB;EACnB,sEAAsE;AACxE;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,QAAQ;EACR,OAAO;EACP,QAAQ;EACR,WAAW;EACX,yBAAyB;EACzB,iBAAiB;EACjB,qCAAqC;EACrC,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,aAAa;EACb,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,yBAAyB;EACzB,iBAAiB;EACjB,wBAAwB;EACxB,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,uCAAuC;AACzC;;AAEA;EACE,oBAAoB;AACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Overpass+Mono&family=Share+Tech+Mono&display=swap');\n\ndiv {\n  border: 1px solid rgb(255, 0, 0);\n  min-height: 1rem;\n  min-width: 1rem;\n  padding: 2px;\n  box-shadow: 0 0 3px red, inset 0 0 3px red;\n}\n\ndiv > div {\n  border: 1px solid olivedrab;\n  margin: 5px;\n  box-shadow: 0 0 3px olivedrab, inset 0 0 3px olivedrab;\n}\n\ndiv > div > div {\n  border: 1px solid rgb(35, 142, 137);\n  box-shadow: 0 0 3px rgb(35, 142, 137), inset 0 0 3px rgb(35, 142, 137);\n}\n\ndiv > div > div > div {\n  border: 1px solid rgb(117, 35, 142);\n  box-shadow: 0 0 3px rgb(117, 35, 142), inset 0 0 3px rgb(117, 35, 142);\n}\n\ndiv > div > div > div > div {\n  border: 1px solid rgb(142, 92, 35);\n  box-shadow: 0 0 3px rgb(142, 92, 35), inset 0 0 3px rgb(142, 92, 35);\n}\n\nbody {\n  background-color: #1a1a19;\n  font-family: 'Share Tech Mono', monospace;\n  color: rgb(145, 253, 159);\n  text-shadow: 0 0 4px rgb(86, 221, 104), 0 0 8px rgb(57, 207, 77);\n}\n\nbutton {\n  background-color: #4b4b48;\n  color: rgb(145, 253, 159);\n  border-color: rgb(35, 142, 137);\n  font-family: 'Share Tech Mono', monospace;\n}\n\ninput {\n  margin: 5px;\n  background-color: #1a1a19;\n  color: rgb(145, 253, 159);\n  border-color: rgb(35, 142, 137);\n  box-shadow: 0 0 3px rgb(35, 142, 137);\n  font-family: 'Share Tech Mono', monospace;\n}\n\ninput:focus {\n  outline: none !important;\n  border: 2px rgb(55, 189, 182);\n  border-style: solid;\n  box-shadow: 0 0 6px rgb(32, 112, 108), inset 0 0 6px rgb(32, 112, 108);\n}\n\n.main-area {\n  min-width: 20rem;\n  max-width: 38rem;\n  margin: auto;\n  margin-top: 2rem;\n}\n\n.hero-container {\n  display: flex;\n  justify-content: space-between;\n  min-height: 10rem;\n}\n\n.hero-2 {\n  flex-grow: 1;\n}\n\n.high-low {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.high-low > div {\n  flex-shrink: 0;\n}\n\n.switch-container {\n  display: flex;\n}\n\n.current-temp {\n  font-size: 4rem;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  font-family: 'Overpass Mono';\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 3px;\n  left: 0;\n  right: 0;\n  bottom: 3px;\n  background-color: #2b2b29;\n  border: 1px solid;\n  box-shadow: 0 0 3px rgb(36, 202, 133);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  top: 2px;\n  content: ':)';\n  height: 21px;\n  width: 23px;\n  left: 2px;\n  bottom: 4px;\n  background-color: #1a1a19;\n  border: 1px solid;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  transform: scaleX(1);\n  text-align: center;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px), scaleX(-1);\n}\n\ninput:checked + .slider:after {\n  transform: scaleX(1);\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "defaultInfoBuild": () => (/* binding */ defaultInfoBuild),
/* harmony export */   "keyboardListen": () => (/* binding */ keyboardListen),
/* harmony export */   "switchActivated": () => (/* binding */ switchActivated)
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
  const data = await (0,_get_api__WEBPACK_IMPORTED_MODULE_3__["default"])('Seattle');
  return new _data_weather_class__WEBPACK_IMPORTED_MODULE_2__["default"](data);
}

async function appendInfo(weather, format) {
  const tempSymbol = () => {
    if (format === 'amer') {
      return 'F';
    }
    return 'C';
  };
  const { location } = (0,_data_selectors__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const { hero } = (0,_data_selectors__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const { inputForm } = (0,_data_selectors__WEBPACK_IMPORTED_MODULE_4__["default"])();
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

async function defaultInfoBuild() {
  const defaultData = await defaultWeather();
  console.log('default data', defaultData);
  return appendInfo(defaultData, 'amer');
}

async function updateWeather(weatherFormat) {
  const cityChoice = (0,_data_selectors__WEBPACK_IMPORTED_MODULE_4__["default"])().inputForm.inputField.value;
  const data = await (0,_get_api__WEBPACK_IMPORTED_MODULE_3__["default"])(cityChoice);
  const myData = new _data_weather_class__WEBPACK_IMPORTED_MODULE_2__["default"](data);
  appendInfo(myData, weatherFormat);
}

function buttonClicked() {
  const format = (0,_data_selectors__WEBPACK_IMPORTED_MODULE_4__["default"])().inputForm.formatSwitch.checked;
  if (!format) {
    updateWeather('amer');
  } else updateWeather('else');
}

function switchActivated(e) {
  const format = e.target.checked;
  console.log('switch info', format);
  if (!format) {
    buttonClicked('amer');
  } else buttonClicked('else');
}

function keyboardListen() {
  const input = (0,_data_selectors__WEBPACK_IMPORTED_MODULE_4__["default"])().inputForm.inputField;
  // eslint-disable-next-line prefer-arrow-callback, func-names
  input.addEventListener('keypress', function (e) {
    if (document.hasFocus(input)) {
      if (e.key === 'Enter') {
        buttonClicked();
      }
    }
  });
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
  const defaultCity = 'Seattle';
  const defaultFormat = 'amer';
  function inputForm() {
    return ele
      .divCI('form-container', 'form-container')
      .addChild(ele.inpCIIn('city-field', 'city-field', defaultCity))
      .addChild(
        ele
          .butCIT('submit-city', 'submit-city', 'Get Weather')
          .addEventListener('click', () => (0,_controller_build_page__WEBPACK_IMPORTED_MODULE_1__.buttonClicked)())
      )
      .addChild(
        ele
          .divCI('switch-container', 'switch-container')
          .addChild(ele.divCIT('switch-f', 'switch-f', 'F°'))
          .addChild(
            ele
              .labelC('switch')
              .addChild(
                ele
                  .checkCIIn('switch-box', 'switch-box', defaultFormat)
                  .addEventListener('click', (e) => (0,_controller_build_page__WEBPACK_IMPORTED_MODULE_1__.switchActivated)(e))
              )
              .addChild(ele.spanCI('slider', 'slider'))
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
      formatSwitch: byID('switch-box'),
      slider: byID('slider')
    },
    location: {
      locationContainer: byID('location-container'),
      city: byID('city'),
      region: byID('region'),
      country: byID('country'),
      localTime: byID('local-time'),
    },
    hero: {
      heroContainer: byID('hero-container'),
      // hero1: byID('hero-1'),
      // highLow: byID('high-low'),
      dayHigh: byID('day-high'),
      nightLow: byID('night-low'),
      currentTemp: byID('current-temp'),
      feelsLike: byID('feels-like'),
      // hero2: byID('hero-2'),
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

  function spanCI(className, id) {
    return new _element_maker__WEBPACK_IMPORTED_MODULE_0__["default"]('span').addAttributes({
      class: className,
      id,
    });
  }

  function labelC(className) {
    return new _element_maker__WEBPACK_IMPORTED_MODULE_0__["default"]('label').addAttributes({
      class: className,
    });
  }

  function checkCIIn(className, id, init) {
    return new _element_maker__WEBPACK_IMPORTED_MODULE_0__["default"]('input').addAttributes({
      class: className,
      type: 'checkbox',
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

  return {
    divCI,
    divCIT,
    butCIT,
    radCINCh,
    imgSACI,
    inpCIIn,
    checkCIIn,
    spanCI,
    labelC,
  };
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
    const loc = data.location;
    this.city = loc.name;
    this.region = loc.region;
    this.country = loc.country;
    this.localTime = loc.localtime;
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

  getData(thing) {
    return this[thing];
  }

  getFormatData(format, data) {
    return this[data][format];
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
(0,_controller_build_page__WEBPACK_IMPORTED_MODULE_1__.defaultInfoBuild)();
(0,_controller_build_page__WEBPACK_IMPORTED_MODULE_1__.keyboardListen)();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFvQjtBQUNwQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckNxQjtBQUtZOztBQUVqQywwQkFBMEIsdUVBQWU7QUFDekMsd0VBQWdCO0FBQ2hCLHNFQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9jb250cm9sbGVyL2J1aWxkLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXIvZ2V0LWFwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9zcmMvZGF0YS9jb21wb25lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9kYXRhL2VsZW1lbnQtbWFrZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2RhdGEvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9kYXRhL3N1YmNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2RhdGEvd2VhdGhlci1jbGFzcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PdmVycGFzcytNb25vJmZhbWlseT1TaGFyZStUZWNoK01vbm8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDAsIDApO1xcbiAgbWluLWhlaWdodDogMXJlbTtcXG4gIG1pbi13aWR0aDogMXJlbTtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmVkLCBpbnNldCAwIDAgM3B4IHJlZDtcXG59XFxuXFxuZGl2ID4gZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIG9saXZlZHJhYjtcXG4gIG1hcmdpbjogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCBvbGl2ZWRyYWIsIGluc2V0IDAgMCAzcHggb2xpdmVkcmFiO1xcbn1cXG5cXG5kaXYgPiBkaXYgPiBkaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDM1LCAxNDIsIDEzNyk7XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYigzNSwgMTQyLCAxMzcpLCBpbnNldCAwIDAgM3B4IHJnYigzNSwgMTQyLCAxMzcpO1xcbn1cXG5cXG5kaXYgPiBkaXYgPiBkaXYgPiBkaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExNywgMzUsIDE0Mik7XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYigxMTcsIDM1LCAxNDIpLCBpbnNldCAwIDAgM3B4IHJnYigxMTcsIDM1LCAxNDIpO1xcbn1cXG5cXG5kaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE0MiwgOTIsIDM1KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiKDE0MiwgOTIsIDM1KSwgaW5zZXQgMCAwIDNweCByZ2IoMTQyLCA5MiwgMzUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMTk7XFxuICBmb250LWZhbWlseTogJ1NoYXJlIFRlY2ggTW9ubycsIG1vbm9zcGFjZTtcXG4gIGNvbG9yOiByZ2IoMTQ1LCAyNTMsIDE1OSk7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDRweCByZ2IoODYsIDIyMSwgMTA0KSwgMCAwIDhweCByZ2IoNTcsIDIwNywgNzcpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0ODtcXG4gIGNvbG9yOiByZ2IoMTQ1LCAyNTMsIDE1OSk7XFxuICBib3JkZXItY29sb3I6IHJnYigzNSwgMTQyLCAxMzcpO1xcbiAgZm9udC1mYW1pbHk6ICdTaGFyZSBUZWNoIE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbmlucHV0IHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExOTtcXG4gIGNvbG9yOiByZ2IoMTQ1LCAyNTMsIDE1OSk7XFxuICBib3JkZXItY29sb3I6IHJnYigzNSwgMTQyLCAxMzcpO1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCByZ2IoMzUsIDE0MiwgMTM3KTtcXG4gIGZvbnQtZmFtaWx5OiAnU2hhcmUgVGVjaCBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDJweCByZ2IoNTUsIDE4OSwgMTgyKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3gtc2hhZG93OiAwIDAgNnB4IHJnYigzMiwgMTEyLCAxMDgpLCBpbnNldCAwIDAgNnB4IHJnYigzMiwgMTEyLCAxMDgpO1xcbn1cXG5cXG4ubWFpbi1hcmVhIHtcXG4gIG1pbi13aWR0aDogMjByZW07XFxuICBtYXgtd2lkdGg6IDM4cmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLmhlcm8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtaW4taGVpZ2h0OiAxMHJlbTtcXG59XFxuXFxuLmhlcm8tMiB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5oaWdoLWxvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uaGlnaC1sb3cgPiBkaXYge1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5zd2l0Y2gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jdXJyZW50LXRlbXAge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgZm9udC1mYW1pbHk6ICdPdmVycGFzcyBNb25vJztcXG59XFxuXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAzcHg7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMjk7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiKDM2LCAyMDIsIDEzMyk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDJweDtcXG4gIGNvbnRlbnQ6ICc6KSc7XFxuICBoZWlnaHQ6IDIxcHg7XFxuICB3aWR0aDogMjNweDtcXG4gIGxlZnQ6IDJweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExOTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpLCBzY2FsZVgoLTEpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxzRUFBc0U7QUFDeEU7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsc0VBQXNFO0FBQ3hFOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLG9FQUFvRTtBQUN0RTs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5Q0FBeUM7RUFDekMseUJBQXlCO0VBQ3pCLGdFQUFnRTtBQUNsRTs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixxQ0FBcUM7RUFDckMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsc0VBQXNFO0FBQ3hFOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixRQUFRO0VBQ1IsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixxQ0FBcUM7RUFDckMsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywrQkFBK0I7RUFDL0IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU92ZXJwYXNzK01vbm8mZmFtaWx5PVNoYXJlK1RlY2grTW9ubyZkaXNwbGF5PXN3YXAnKTtcXG5cXG5kaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMCwgMCk7XFxuICBtaW4taGVpZ2h0OiAxcmVtO1xcbiAgbWluLXdpZHRoOiAxcmVtO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCByZWQsIGluc2V0IDAgMCAzcHggcmVkO1xcbn1cXG5cXG5kaXYgPiBkaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgb2xpdmVkcmFiO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IG9saXZlZHJhYiwgaW5zZXQgMCAwIDNweCBvbGl2ZWRyYWI7XFxufVxcblxcbmRpdiA+IGRpdiA+IGRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzUsIDE0MiwgMTM3KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiKDM1LCAxNDIsIDEzNyksIGluc2V0IDAgMCAzcHggcmdiKDM1LCAxNDIsIDEzNyk7XFxufVxcblxcbmRpdiA+IGRpdiA+IGRpdiA+IGRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTE3LCAzNSwgMTQyKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiKDExNywgMzUsIDE0MiksIGluc2V0IDAgMCAzcHggcmdiKDExNywgMzUsIDE0Mik7XFxufVxcblxcbmRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTQyLCA5MiwgMzUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCByZ2IoMTQyLCA5MiwgMzUpLCBpbnNldCAwIDAgM3B4IHJnYigxNDIsIDkyLCAzNSk7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExOTtcXG4gIGZvbnQtZmFtaWx5OiAnU2hhcmUgVGVjaCBNb25vJywgbW9ub3NwYWNlO1xcbiAgY29sb3I6IHJnYigxNDUsIDI1MywgMTU5KTtcXG4gIHRleHQtc2hhZG93OiAwIDAgNHB4IHJnYig4NiwgMjIxLCAxMDQpLCAwIDAgOHB4IHJnYig1NywgMjA3LCA3Nyk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjQ4O1xcbiAgY29sb3I6IHJnYigxNDUsIDI1MywgMTU5KTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDM1LCAxNDIsIDEzNyk7XFxuICBmb250LWZhbWlseTogJ1NoYXJlIFRlY2ggTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgbWFyZ2luOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTE5O1xcbiAgY29sb3I6IHJnYigxNDUsIDI1MywgMTU5KTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDM1LCAxNDIsIDEzNyk7XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYigzNSwgMTQyLCAxMzcpO1xcbiAgZm9udC1mYW1pbHk6ICdTaGFyZSBUZWNoIE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMnB4IHJnYig1NSwgMTg5LCAxODIpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJveC1zaGFkb3c6IDAgMCA2cHggcmdiKDMyLCAxMTIsIDEwOCksIGluc2V0IDAgMCA2cHggcmdiKDMyLCAxMTIsIDEwOCk7XFxufVxcblxcbi5tYWluLWFyZWEge1xcbiAgbWluLXdpZHRoOiAyMHJlbTtcXG4gIG1heC13aWR0aDogMzhyZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uaGVyby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xcbn1cXG5cXG4uaGVyby0yIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLmhpZ2gtbG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5oaWdoLWxvdyA+IGRpdiB7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLnN3aXRjaC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmN1cnJlbnQtdGVtcCB7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDM0cHg7XFxuICBmb250LWZhbWlseTogJ092ZXJwYXNzIE1vbm8nO1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDNweDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmIyOTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCByZ2IoMzYsIDIwMiwgMTMzKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMnB4O1xcbiAgY29udGVudDogJzopJztcXG4gIGhlaWdodDogMjFweDtcXG4gIHdpZHRoOiAyM3B4O1xcbiAgbGVmdDogMnB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTE5O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCksIHNjYWxlWCgtMSk7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgY29tcG9uZW50RWxlbWVudHMgZnJvbSAnLi4vZGF0YS9jb21wb25lbnRzJztcbmltcG9ydCBjb21wb25lbnRzIGZyb20gJy4uL2RhdGEvc3ViY29tcG9uZW50cyc7XG5pbXBvcnQgTXlXZWF0aGVyIGZyb20gJy4uL2RhdGEvd2VhdGhlci1jbGFzcyc7XG5pbXBvcnQgZ2V0V2VhdGhlciBmcm9tICcuL2dldC1hcGknO1xuaW1wb3J0IHNlbGVjdG9ycyBmcm9tICcuLi9kYXRhL3NlbGVjdG9ycyc7XG5cbi8vIGNvbnN0IGRlZmF1bHRXZWF0aGVyRGF0YSA9IGdldFdlYXRoZXIoJ29nZGVuJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFN0cnVjdHVyZXMoKSB7XG4gIGNvbnN0IGVsZSA9IGNvbXBvbmVudHMoKTtcbiAgY29uc3Qgc2VjdGlvbiA9IGNvbXBvbmVudEVsZW1lbnRzKCk7XG4gIHJldHVybiBlbGVcbiAgICAuZGl2Q0koJ21haW4tYXJlYScsICdtYWluLWFyZWEnKVxuICAgIC5hZGRDaGlsZChzZWN0aW9uLmlucHV0Rm9ybSgpKVxuICAgIC5hZGRDaGlsZChzZWN0aW9uLmxvY2F0aW9uKCkpXG4gICAgLmFkZENoaWxkKHNlY3Rpb24uaGVybygpKVxuICAgIC5idWlsZCgpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkZWZhdWx0V2VhdGhlcigpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoJ1NlYXR0bGUnKTtcbiAgcmV0dXJuIG5ldyBNeVdlYXRoZXIoZGF0YSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFwcGVuZEluZm8od2VhdGhlciwgZm9ybWF0KSB7XG4gIGNvbnN0IHRlbXBTeW1ib2wgPSAoKSA9PiB7XG4gICAgaWYgKGZvcm1hdCA9PT0gJ2FtZXInKSB7XG4gICAgICByZXR1cm4gJ0YnO1xuICAgIH1cbiAgICByZXR1cm4gJ0MnO1xuICB9O1xuICBjb25zdCB7IGxvY2F0aW9uIH0gPSBzZWxlY3RvcnMoKTtcbiAgY29uc3QgeyBoZXJvIH0gPSBzZWxlY3RvcnMoKTtcbiAgY29uc3QgeyBpbnB1dEZvcm0gfSA9IHNlbGVjdG9ycygpO1xuICBpbnB1dEZvcm0uaW5wdXRGaWVsZC50ZXh0Q29udGVudCA9IHdlYXRoZXIuZ2V0RGF0YSgnY2l0eScpO1xuICBsb2NhdGlvbi5jaXR5LnRleHRDb250ZW50ID0gd2VhdGhlci5nZXREYXRhKCdjaXR5Jyk7XG4gIGxvY2F0aW9uLnJlZ2lvbi50ZXh0Q29udGVudCA9IHdlYXRoZXIuZ2V0RGF0YSgncmVnaW9uJyk7XG4gIGxvY2F0aW9uLmNvdW50cnkudGV4dENvbnRlbnQgPSB3ZWF0aGVyLmdldERhdGEoJ2NvdW50cnknKTtcbiAgbG9jYXRpb24ubG9jYWxUaW1lLnRleHRDb250ZW50ID0gd2VhdGhlci5nZXREYXRhKCdsb2NhbFRpbWUnKTtcbiAgaGVyby5kYXlIaWdoLnRleHRDb250ZW50ID0gYERhefCfoJkgJHt3ZWF0aGVyLmdldEZvcm1hdERhdGEoXG4gICAgZm9ybWF0LFxuICAgICdtYXhUZW1wJ1xuICApfcKwJHt0ZW1wU3ltYm9sKCl9YDtcbiAgaGVyby5uaWdodExvdy50ZXh0Q29udGVudCA9IGBOaWdodPCfoJsgJHt3ZWF0aGVyLmdldEZvcm1hdERhdGEoXG4gICAgZm9ybWF0LFxuICAgICdtaW5UZW1wJ1xuICApfcKwICAke3RlbXBTeW1ib2woKX1gO1xuICBoZXJvLmN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5nZXRGb3JtYXREYXRhKFxuICAgIGZvcm1hdCxcbiAgICAndGVtcCdcbiAgKX3CsCR7dGVtcFN5bWJvbCgpfWA7XG4gIGhlcm8uZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHt3ZWF0aGVyLmdldEZvcm1hdERhdGEoXG4gICAgZm9ybWF0LFxuICAgICdmZWVsc0xpa2UnXG4gICl9wrAke3RlbXBTeW1ib2woKX1gO1xuICBoZXJvLmNvbmRpdGlvblRleHQudGV4dENvbnRlbnQgPSBgY29uZGl0aW9uOiBcXG4ke3dlYXRoZXIuZ2V0RGF0YShcbiAgICAnY29uZGl0aW9uJ1xuICApfWA7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWZhdWx0SW5mb0J1aWxkKCkge1xuICBjb25zdCBkZWZhdWx0RGF0YSA9IGF3YWl0IGRlZmF1bHRXZWF0aGVyKCk7XG4gIGNvbnNvbGUubG9nKCdkZWZhdWx0IGRhdGEnLCBkZWZhdWx0RGF0YSk7XG4gIHJldHVybiBhcHBlbmRJbmZvKGRlZmF1bHREYXRhLCAnYW1lcicpO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVXZWF0aGVyKHdlYXRoZXJGb3JtYXQpIHtcbiAgY29uc3QgY2l0eUNob2ljZSA9IHNlbGVjdG9ycygpLmlucHV0Rm9ybS5pbnB1dEZpZWxkLnZhbHVlO1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihjaXR5Q2hvaWNlKTtcbiAgY29uc3QgbXlEYXRhID0gbmV3IE15V2VhdGhlcihkYXRhKTtcbiAgYXBwZW5kSW5mbyhteURhdGEsIHdlYXRoZXJGb3JtYXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnV0dG9uQ2xpY2tlZCgpIHtcbiAgY29uc3QgZm9ybWF0ID0gc2VsZWN0b3JzKCkuaW5wdXRGb3JtLmZvcm1hdFN3aXRjaC5jaGVja2VkO1xuICBpZiAoIWZvcm1hdCkge1xuICAgIHVwZGF0ZVdlYXRoZXIoJ2FtZXInKTtcbiAgfSBlbHNlIHVwZGF0ZVdlYXRoZXIoJ2Vsc2UnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaEFjdGl2YXRlZChlKSB7XG4gIGNvbnN0IGZvcm1hdCA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gIGNvbnNvbGUubG9nKCdzd2l0Y2ggaW5mbycsIGZvcm1hdCk7XG4gIGlmICghZm9ybWF0KSB7XG4gICAgYnV0dG9uQ2xpY2tlZCgnYW1lcicpO1xuICB9IGVsc2UgYnV0dG9uQ2xpY2tlZCgnZWxzZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga2V5Ym9hcmRMaXN0ZW4oKSB7XG4gIGNvbnN0IGlucHV0ID0gc2VsZWN0b3JzKCkuaW5wdXRGb3JtLmlucHV0RmllbGQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItYXJyb3ctY2FsbGJhY2ssIGZ1bmMtbmFtZXNcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChkb2N1bWVudC5oYXNGb2N1cyhpbnB1dCkpIHtcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBidXR0b25DbGlja2VkKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSkge1xuICAvLyBjb25zb2xlLmxvZyhpbnB1dC52YWx1ZSlcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTg4MDM1NDJkNGQyZjQwMGRhNDMxODMxMjEyMzA2MDQmcT0ke2NpdHl9JmRheXM9MSZhcWk9bm8mYWxlcnRzPW5vYCxcbiAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBjb21wb25lbnRzIGZyb20gJy4vc3ViY29tcG9uZW50cyc7XG5pbXBvcnQgeyBidXR0b25DbGlja2VkLCBzd2l0Y2hBY3RpdmF0ZWQgfSBmcm9tICcuLi9jb250cm9sbGVyL2J1aWxkLXBhZ2UnO1xuXG5jb25zdCBlbGUgPSBjb21wb25lbnRzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvbmVudEVsZW1lbnRzKCkge1xuICBjb25zdCBkZWZhdWx0Q2l0eSA9ICdTZWF0dGxlJztcbiAgY29uc3QgZGVmYXVsdEZvcm1hdCA9ICdhbWVyJztcbiAgZnVuY3Rpb24gaW5wdXRGb3JtKCkge1xuICAgIHJldHVybiBlbGVcbiAgICAgIC5kaXZDSSgnZm9ybS1jb250YWluZXInLCAnZm9ybS1jb250YWluZXInKVxuICAgICAgLmFkZENoaWxkKGVsZS5pbnBDSUluKCdjaXR5LWZpZWxkJywgJ2NpdHktZmllbGQnLCBkZWZhdWx0Q2l0eSkpXG4gICAgICAuYWRkQ2hpbGQoXG4gICAgICAgIGVsZVxuICAgICAgICAgIC5idXRDSVQoJ3N1Ym1pdC1jaXR5JywgJ3N1Ym1pdC1jaXR5JywgJ0dldCBXZWF0aGVyJylcbiAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBidXR0b25DbGlja2VkKCkpXG4gICAgICApXG4gICAgICAuYWRkQ2hpbGQoXG4gICAgICAgIGVsZVxuICAgICAgICAgIC5kaXZDSSgnc3dpdGNoLWNvbnRhaW5lcicsICdzd2l0Y2gtY29udGFpbmVyJylcbiAgICAgICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJVCgnc3dpdGNoLWYnLCAnc3dpdGNoLWYnLCAnRsKwJykpXG4gICAgICAgICAgLmFkZENoaWxkKFxuICAgICAgICAgICAgZWxlXG4gICAgICAgICAgICAgIC5sYWJlbEMoJ3N3aXRjaCcpXG4gICAgICAgICAgICAgIC5hZGRDaGlsZChcbiAgICAgICAgICAgICAgICBlbGVcbiAgICAgICAgICAgICAgICAgIC5jaGVja0NJSW4oJ3N3aXRjaC1ib3gnLCAnc3dpdGNoLWJveCcsIGRlZmF1bHRGb3JtYXQpXG4gICAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gc3dpdGNoQWN0aXZhdGVkKGUpKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5hZGRDaGlsZChlbGUuc3BhbkNJKCdzbGlkZXInLCAnc2xpZGVyJykpXG4gICAgICAgICAgKVxuICAgICAgICAgIC5hZGRDaGlsZChlbGUuZGl2Q0lUKCdzd2l0Y2gtYycsICdzd2l0Y2gtYycsICdDwrAnKSlcbiAgICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBsb2NhdGlvbigpIHtcbiAgICByZXR1cm4gZWxlXG4gICAgICAuZGl2Q0koJ2xvY2F0aW9uLWNvbnRhaW5lcicsICdsb2NhdGlvbi1jb250YWluZXInKVxuICAgICAgLmFkZENoaWxkKGVsZS5kaXZDSSgnY2l0eScsICdjaXR5JykpXG4gICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJKCdyZWdpb24nLCAncmVnaW9uJykpXG4gICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJKCdjb3VudHJ5JywgJ2NvdW50cnknKSlcbiAgICAgIC5hZGRDaGlsZChlbGUuZGl2Q0koJ2xvY2FsLXRpbWUnLCAnbG9jYWwtdGltZScpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhlcm8oKSB7XG4gICAgcmV0dXJuIGVsZVxuICAgICAgLmRpdkNJKCdoZXJvLWNvbnRhaW5lcicsICdoZXJvLWNvbnRhaW5lcicpXG4gICAgICAuYWRkQ2hpbGQoXG4gICAgICAgIGVsZVxuICAgICAgICAgIC5kaXZDSSgnaGVyby0xJywgJ2hlcm8tMScpXG4gICAgICAgICAgLmFkZENoaWxkKFxuICAgICAgICAgICAgZWxlXG4gICAgICAgICAgICAgIC5kaXZDSSgnaGlnaC1sb3cnLCAnaGlnaC1sb3cnKVxuICAgICAgICAgICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJKCdkYXktaGlnaCcsICdkYXktaGlnaCcpKVxuICAgICAgICAgICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJKCduaWdodC1sb3cnLCAnbmlnaHQtbG93JykpXG4gICAgICAgICAgKVxuICAgICAgICAgIC5hZGRDaGlsZChlbGUuZGl2Q0koJ2N1cnJlbnQtdGVtcCcsICdjdXJyZW50LXRlbXAnKSlcbiAgICAgICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJKCdmZWVscy1saWtlJywgJ2ZlZWxzLWxpa2UnKSlcbiAgICAgIClcbiAgICAgIC5hZGRDaGlsZChcbiAgICAgICAgZWxlXG4gICAgICAgICAgLmRpdkNJKCdoZXJvLTInLCAnaGVyby0yJylcbiAgICAgICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJKCdjb25kaXRpb24taWNvbicsICdjb25kaXRpb24taWNvbicpKVxuICAgICAgICAgIC5hZGRDaGlsZChlbGUuZGl2Q0koJ2NvbmRpdGlvbi10ZXh0JywgJ2NvbmRpdGlvbi10ZXh0JykpXG4gICAgICApO1xuICB9XG4gIHJldHVybiB7IGlucHV0Rm9ybSwgbG9jYXRpb24sIGhlcm8gfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50VHlwZSkge1xuICAgIHRoaXMuZWxlbWVudFR5cGUgPSBlbGVtZW50VHlwZTtcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSB7fTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgYWRkQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgIHRoaXMuYXR0cmlidXRlc1trZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQ2hpbGQoY2hpbGRFbGVtZW50KSB7XG4gICAgdGhpcy50ZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZEVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkVGV4dCh0ZXh0KSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbGlzdGVuZXIpIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXSkge1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudFR5cGVdID0gW107XG4gICAgfVxuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGJ1aWxkKCkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuZWxlbWVudFR5cGUpO1xuXG4gICAgZm9yIChjb25zdCBbYXR0cmlidXRlLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5hdHRyaWJ1dGVzKSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIG5ld0VsZW1lbnQudG9nZ2xlQXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBbZXZlbnRUeXBlLCBsaXN0ZW5lcnNdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuZXZlbnRMaXN0ZW5lcnMpKSB7XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgbmV3RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbGlzdGVuZXIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pIHtcbiAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZC5idWlsZCgpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgRE9NdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMudGV4dCk7XG4gICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKERPTXRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdFbGVtZW50O1xuICB9XG59XG4iLCJmdW5jdGlvbiBieUlEKGlkKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdG9ycygpIHtcbiAgcmV0dXJuIHtcbiAgICBpbnB1dEZvcm06IHtcbiAgICAgIGZvcm1Db250YWluZXI6IGJ5SUQoJ2Zvcm0tY29udGFpbmVyJyksXG4gICAgICBpbnB1dEZpZWxkOiBieUlEKCdjaXR5LWZpZWxkJyksXG4gICAgICBzdWJtaXRCdXR0b246IGJ5SUQoJ3N1Ym1pdC1jaXR5JyksXG4gICAgICBmb3JtYXRTd2l0Y2g6IGJ5SUQoJ3N3aXRjaC1ib3gnKSxcbiAgICAgIHNsaWRlcjogYnlJRCgnc2xpZGVyJylcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICBsb2NhdGlvbkNvbnRhaW5lcjogYnlJRCgnbG9jYXRpb24tY29udGFpbmVyJyksXG4gICAgICBjaXR5OiBieUlEKCdjaXR5JyksXG4gICAgICByZWdpb246IGJ5SUQoJ3JlZ2lvbicpLFxuICAgICAgY291bnRyeTogYnlJRCgnY291bnRyeScpLFxuICAgICAgbG9jYWxUaW1lOiBieUlEKCdsb2NhbC10aW1lJyksXG4gICAgfSxcbiAgICBoZXJvOiB7XG4gICAgICBoZXJvQ29udGFpbmVyOiBieUlEKCdoZXJvLWNvbnRhaW5lcicpLFxuICAgICAgLy8gaGVybzE6IGJ5SUQoJ2hlcm8tMScpLFxuICAgICAgLy8gaGlnaExvdzogYnlJRCgnaGlnaC1sb3cnKSxcbiAgICAgIGRheUhpZ2g6IGJ5SUQoJ2RheS1oaWdoJyksXG4gICAgICBuaWdodExvdzogYnlJRCgnbmlnaHQtbG93JyksXG4gICAgICBjdXJyZW50VGVtcDogYnlJRCgnY3VycmVudC10ZW1wJyksXG4gICAgICBmZWVsc0xpa2U6IGJ5SUQoJ2ZlZWxzLWxpa2UnKSxcbiAgICAgIC8vIGhlcm8yOiBieUlEKCdoZXJvLTInKSxcbiAgICAgIGNvbmRpdGlvbkljb246IGJ5SUQoJ2NvbmRpdGlvbi1pY29uJyksXG4gICAgICBjb25kaXRpb25UZXh0OiBieUlEKCdjb25kaXRpb24tdGV4dCcpLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGVjdG9ycztcbiIsImltcG9ydCBFbGVtZW50IGZyb20gJy4vZWxlbWVudC1tYWtlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvbmVudHMoKSB7XG4gIC8vIGRpdlxuICBmdW5jdGlvbiBkaXZDSShjbGFzc05hbWUsIGlkKSB7XG4gICAgcmV0dXJuIG5ldyBFbGVtZW50KCdkaXYnKS5hZGRBdHRyaWJ1dGVzKHtcbiAgICAgIGNsYXNzOiBjbGFzc05hbWUsXG4gICAgICBpZCxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpdkNJVChjbGFzc05hbWUsIGlkLCB0ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBFbGVtZW50KCdkaXYnKVxuICAgICAgLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgICBjbGFzczogY2xhc3NOYW1lLFxuICAgICAgICBpZCxcbiAgICAgIH0pXG4gICAgICAuYWRkVGV4dCh0ZXh0KTtcbiAgfVxuXG4gIC8vIGJ1dHRvblxuICBmdW5jdGlvbiBidXRDSVQoY2xhc3NOYW1lLCBpZCwgdGV4dCkge1xuICAgIHJldHVybiBuZXcgRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIC5hZGRBdHRyaWJ1dGVzKHtcbiAgICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgICAgaWQsXG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgfSlcbiAgICAgIC5hZGRUZXh0KHRleHQpO1xuICB9XG5cbiAgLy8gcmFkaW8gYnV0dG9uXG4gIGZ1bmN0aW9uIHJhZENJTkNoKGNsYXNzTmFtZSwgaWQsIG5hbWUsIGlzQ2hlY2tlZCkge1xuICAgIHJldHVybiBuZXcgRWxlbWVudCgnaW5wdXQnKS5hZGRBdHRyaWJ1dGVzKHtcbiAgICAgIGNsYXNzOiBjbGFzc05hbWUsXG4gICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgdmFsdWU6IGlkLFxuICAgICAgY2hlY2tlZDogaXNDaGVja2VkLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5wQ0lJbihjbGFzc05hbWUsIGlkLCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBFbGVtZW50KCdpbnB1dCcpLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkLFxuICAgICAgdmFsdWU6IGluaXQsXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzcGFuQ0koY2xhc3NOYW1lLCBpZCkge1xuICAgIHJldHVybiBuZXcgRWxlbWVudCgnc3BhbicpLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgIGlkLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbGFiZWxDKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiBuZXcgRWxlbWVudCgnbGFiZWwnKS5hZGRBdHRyaWJ1dGVzKHtcbiAgICAgIGNsYXNzOiBjbGFzc05hbWUsXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0NJSW4oY2xhc3NOYW1lLCBpZCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgRWxlbWVudCgnaW5wdXQnKS5hZGRBdHRyaWJ1dGVzKHtcbiAgICAgIGNsYXNzOiBjbGFzc05hbWUsXG4gICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgaWQsXG4gICAgICB2YWx1ZTogaW5pdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGltYWdlXG4gIGZ1bmN0aW9uIGltZ1NBQ0koc3JjLCBhbHQsIGNsYXNzTmFtZSwgaWQpIHtcbiAgICByZXR1cm4gbmV3IEVsZW1lbnQoJ2ltZycpLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgc3JjLFxuICAgICAgYWx0LFxuICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgIGlkLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBkaXZDSSxcbiAgICBkaXZDSVQsXG4gICAgYnV0Q0lULFxuICAgIHJhZENJTkNoLFxuICAgIGltZ1NBQ0ksXG4gICAgaW5wQ0lJbixcbiAgICBjaGVja0NJSW4sXG4gICAgc3BhbkNJLFxuICAgIGxhYmVsQyxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE15V2VhdGhlciB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBjb25zdCBub3cgPSBkYXRhLmN1cnJlbnQ7XG4gICAgY29uc3QgZm9yZWNhc3REYXkgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheTtcbiAgICBjb25zdCBsb2MgPSBkYXRhLmxvY2F0aW9uO1xuICAgIHRoaXMuY2l0eSA9IGxvYy5uYW1lO1xuICAgIHRoaXMucmVnaW9uID0gbG9jLnJlZ2lvbjtcbiAgICB0aGlzLmNvdW50cnkgPSBsb2MuY291bnRyeTtcbiAgICB0aGlzLmxvY2FsVGltZSA9IGxvYy5sb2NhbHRpbWU7XG4gICAgdGhpcy5pc0RheSA9IG5vdy5pc19kYXk7XG4gICAgdGhpcy50ZW1wID0geyBhbWVyOiBub3cudGVtcF9mLCBlbHNlOiBub3cudGVtcF9jIH07XG4gICAgdGhpcy5mZWVsc0xpa2UgPSB7IGFtZXI6IG5vdy5mZWVsc2xpa2VfZiwgZWxzZTogbm93LmZlZWxzbGlrZV9jIH07XG4gICAgdGhpcy53aW5kID0geyBhbWVyOiBub3cud2luZF9tcGgsIGVsc2U6IG5vdy53aW5kX2twaCB9O1xuICAgIHRoaXMuZ3VzdCA9IHsgYW1lcjogbm93Lmd1c3RfbXBoLCBlbHNlOiBub3cuZ3VzdF9rcGggfTtcbiAgICB0aGlzLnByZWNpcCA9IHsgYW1lcjogbm93LnByZWNpcF9pbiwgZWxzZTogbm93LnByZWNpcF9tbSB9O1xuICAgIHRoaXMubWF4VGVtcCA9IHsgYW1lcjogZm9yZWNhc3REYXkubWF4dGVtcF9mLCBlbHNlOiBmb3JlY2FzdERheS5tYXh0ZW1wX2MgfTtcbiAgICB0aGlzLm1pblRlbXAgPSB7IGFtZXI6IGZvcmVjYXN0RGF5Lm1pbnRlbXBfZiwgZWxzZTogZm9yZWNhc3REYXkubWludGVtcF9jIH07XG4gICAgdGhpcy50b3RhbFByZWNpcCA9IHtcbiAgICAgIGFtZXI6IGZvcmVjYXN0RGF5LnRvdGFscHJlY2lwX2luLFxuICAgICAgZWxzZTogZm9yZWNhc3REYXkudG90YWxwcmVjaXBfbW0sXG4gICAgfTtcbiAgICB0aGlzLmNsb3VkID0gbm93LmNsb3VkO1xuICAgIHRoaXMud2lsbEl0UmFpbiA9IGZvcmVjYXN0RGF5LmRhaWx5X3dpbGxfaXRfcmFpbjtcbiAgICB0aGlzLndpbGxJdFNub3cgPSBmb3JlY2FzdERheS5kYWlseV93aWxsX2l0X3Nub3c7XG4gICAgdGhpcy5jaGFuY2VPZlJhaW4gPSBmb3JlY2FzdERheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcbiAgICB0aGlzLmNoYW5jZU9mU25vdyA9IGZvcmVjYXN0RGF5LmRhaWx5X2NoYW5jZV9vZl9zbm93O1xuICAgIHRoaXMuY29uZGl0aW9uID0gbm93LmNvbmRpdGlvbi50ZXh0O1xuICAgIHRoaXMuaHVtaWRpdHkgPSBub3cuaHVtaWRpdHk7XG4gIH1cblxuICBnZXREYXRhKHRoaW5nKSB7XG4gICAgcmV0dXJuIHRoaXNbdGhpbmddO1xuICB9XG5cbiAgZ2V0Rm9ybWF0RGF0YShmb3JtYXQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpc1tkYXRhXVtmb3JtYXRdO1xuICB9XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7XG4gIGJ1aWxkU3RydWN0dXJlcyxcbiAgZGVmYXVsdEluZm9CdWlsZCxcbiAga2V5Ym9hcmRMaXN0ZW4sXG59IGZyb20gJy4vY29udHJvbGxlci9idWlsZC1wYWdlJztcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChidWlsZFN0cnVjdHVyZXMoKSk7XG5kZWZhdWx0SW5mb0J1aWxkKCk7XG5rZXlib2FyZExpc3RlbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9