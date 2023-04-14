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
___CSS_LOADER_EXPORT___.push([module.id, "div {\n  border: 1px solid rgb(255, 0, 0);\n  min-height: 1rem;\n  min-width: 1rem;\n  padding: 2px;\n  box-shadow: 0 0 3px red, inset 0 0 3px red;\n}\n\ndiv > div {\n  border: 1px solid olivedrab;\n  margin: 5px;\n  box-shadow: 0 0 3px olivedrab, inset 0 0 3px olivedrab;\n}\n\ndiv > div > div {\n  border: 1px solid rgb(35, 142, 137);\n  box-shadow: 0 0 3px rgb(35, 142, 137), inset 0 0 3px rgb(35, 142, 137);\n}\n\ndiv > div > div > div {\n  border: 1px solid rgb(117, 35, 142);\n  box-shadow: 0 0 3px rgb(117, 35, 142), inset 0 0 3px rgb(117, 35, 142);\n}\n\ndiv > div > div > div > div {\n  border: 1px solid rgb(142, 92, 35);\n  box-shadow: 0 0 3px rgb(142, 92, 35), inset 0 0 3px rgb(142, 92, 35);\n}\n\nbody {\n  background-color: #1a1a19;\n  font-family: 'Share Tech Mono', monospace;\n  color: rgb(145, 253, 159);\n  text-shadow: 0 0 4px rgb(86, 221, 104), 0 0 8px rgb(57, 207, 77);\n}\n\nbutton {\n  background-color: #4b4b48;\n  color: rgb(145, 253, 159);\n  border-color: rgb(35, 142, 137);\n  font-family: 'Share Tech Mono', monospace;\n}\n\ninput {\n  margin: 5px;\n  background-color: #1a1a19;\n  color: rgb(145, 253, 159);\n  border-color: rgb(35, 142, 137);\n  box-shadow: 0 0 3px rgb(35, 142, 137);\n  font-family: 'Share Tech Mono', monospace;\n}\n\ninput:focus {\n  outline: none !important;\n  border: 2px rgb(55, 189, 182);\n  border-style: solid;\n  box-shadow: 0 0 6px rgb(32, 112, 108), inset 0 0 6px rgb(32, 112, 108);\n}\n\n.main-area {\n  min-width: 20rem;\n  max-width: 38rem;\n}\n\n.hero-container {\n  display: flex;\n  justify-content: space-between;\n  min-height: 10rem;\n}\n\n.high-low {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.high-low > div {\n  flex-shrink: 0;\n}\n\n.switch-container {\n  display: flex;\n}\n\n.current-temp {\n  font-size: 4rem;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  font-family: 'Overpass Mono';\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 3px;\n  left: 0;\n  right: 0;\n  bottom: 3px;\n  background-color: #2b2b29;\n  border: 1px solid;\n  box-shadow: 0 0 3px rgb(36, 202, 133);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  top: 2px;\n  content: ':)';\n  height: 21px;\n  width: 23px;\n  left: 2px;\n  bottom: 4px;\n  background-color: #1a1a19;\n  border: 1px solid;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  transform: scaleX(1);\n  text-align: center;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px), scaleX(-1);\n}\n\ninput:checked + .slider:after {\n  transform: scaleX(1);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,gCAAgC;EAChC,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,0CAA0C;AAC5C;;AAEA;EACE,2BAA2B;EAC3B,WAAW;EACX,sDAAsD;AACxD;;AAEA;EACE,mCAAmC;EACnC,sEAAsE;AACxE;;AAEA;EACE,mCAAmC;EACnC,sEAAsE;AACxE;;AAEA;EACE,kCAAkC;EAClC,oEAAoE;AACtE;;AAEA;EACE,yBAAyB;EACzB,yCAAyC;EACzC,yBAAyB;EACzB,gEAAgE;AAClE;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,+BAA+B;EAC/B,yCAAyC;AAC3C;;AAEA;EACE,WAAW;EACX,yBAAyB;EACzB,yBAAyB;EACzB,+BAA+B;EAC/B,qCAAqC;EACrC,yCAAyC;AAC3C;;AAEA;EACE,wBAAwB;EACxB,6BAA6B;EAC7B,mBAAmB;EACnB,sEAAsE;AACxE;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,QAAQ;EACR,OAAO;EACP,QAAQ;EACR,WAAW;EACX,yBAAyB;EACzB,iBAAiB;EACjB,qCAAqC;EACrC,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,aAAa;EACb,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,yBAAyB;EACzB,iBAAiB;EACjB,wBAAwB;EACxB,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;EACnC,+BAA+B;EAC/B,uCAAuC;AACzC;;AAEA;EACE,oBAAoB;AACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Overpass+Mono&family=Share+Tech+Mono&display=swap');\n\ndiv {\n  border: 1px solid rgb(255, 0, 0);\n  min-height: 1rem;\n  min-width: 1rem;\n  padding: 2px;\n  box-shadow: 0 0 3px red, inset 0 0 3px red;\n}\n\ndiv > div {\n  border: 1px solid olivedrab;\n  margin: 5px;\n  box-shadow: 0 0 3px olivedrab, inset 0 0 3px olivedrab;\n}\n\ndiv > div > div {\n  border: 1px solid rgb(35, 142, 137);\n  box-shadow: 0 0 3px rgb(35, 142, 137), inset 0 0 3px rgb(35, 142, 137);\n}\n\ndiv > div > div > div {\n  border: 1px solid rgb(117, 35, 142);\n  box-shadow: 0 0 3px rgb(117, 35, 142), inset 0 0 3px rgb(117, 35, 142);\n}\n\ndiv > div > div > div > div {\n  border: 1px solid rgb(142, 92, 35);\n  box-shadow: 0 0 3px rgb(142, 92, 35), inset 0 0 3px rgb(142, 92, 35);\n}\n\nbody {\n  background-color: #1a1a19;\n  font-family: 'Share Tech Mono', monospace;\n  color: rgb(145, 253, 159);\n  text-shadow: 0 0 4px rgb(86, 221, 104), 0 0 8px rgb(57, 207, 77);\n}\n\nbutton {\n  background-color: #4b4b48;\n  color: rgb(145, 253, 159);\n  border-color: rgb(35, 142, 137);\n  font-family: 'Share Tech Mono', monospace;\n}\n\ninput {\n  margin: 5px;\n  background-color: #1a1a19;\n  color: rgb(145, 253, 159);\n  border-color: rgb(35, 142, 137);\n  box-shadow: 0 0 3px rgb(35, 142, 137);\n  font-family: 'Share Tech Mono', monospace;\n}\n\ninput:focus {\n  outline: none !important;\n  border: 2px rgb(55, 189, 182);\n  border-style: solid;\n  box-shadow: 0 0 6px rgb(32, 112, 108), inset 0 0 6px rgb(32, 112, 108);\n}\n\n.main-area {\n  min-width: 20rem;\n  max-width: 38rem;\n}\n\n.hero-container {\n  display: flex;\n  justify-content: space-between;\n  min-height: 10rem;\n}\n\n.high-low {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.high-low > div {\n  flex-shrink: 0;\n}\n\n.switch-container {\n  display: flex;\n}\n\n.current-temp {\n  font-size: 4rem;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  font-family: 'Overpass Mono';\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 3px;\n  left: 0;\n  right: 0;\n  bottom: 3px;\n  background-color: #2b2b29;\n  border: 1px solid;\n  box-shadow: 0 0 3px rgb(36, 202, 133);\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  top: 2px;\n  content: ':)';\n  height: 21px;\n  width: 23px;\n  left: 2px;\n  bottom: 4px;\n  background-color: #1a1a19;\n  border: 1px solid;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  transform: scaleX(1);\n  text-align: center;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px), scaleX(-1);\n}\n\ninput:checked + .slider:after {\n  transform: scaleX(1);\n}\n"],"sourceRoot":""}]);
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
        console.log('Enter');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQ3FCO0FBS1k7O0FBRWpDLDBCQUEwQix1RUFBZTtBQUN6Qyx3RUFBZ0I7QUFDaEIsc0VBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2NvbnRyb2xsZXIvYnVpbGQtcGFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9zcmMvY29udHJvbGxlci9nZXQtYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9kYXRhL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2RhdGEvZWxlbWVudC1tYWtlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9zcmMvZGF0YS9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2RhdGEvc3ViY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QtdGVtcGxhdGUvLi9zcmMvZGF0YS93ZWF0aGVyLWNsYXNzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU92ZXJwYXNzK01vbm8mZmFtaWx5PVNoYXJlK1RlY2grTW9ubyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJkaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMCwgMCk7XFxuICBtaW4taGVpZ2h0OiAxcmVtO1xcbiAgbWluLXdpZHRoOiAxcmVtO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCByZWQsIGluc2V0IDAgMCAzcHggcmVkO1xcbn1cXG5cXG5kaXYgPiBkaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgb2xpdmVkcmFiO1xcbiAgbWFyZ2luOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IG9saXZlZHJhYiwgaW5zZXQgMCAwIDNweCBvbGl2ZWRyYWI7XFxufVxcblxcbmRpdiA+IGRpdiA+IGRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMzUsIDE0MiwgMTM3KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiKDM1LCAxNDIsIDEzNyksIGluc2V0IDAgMCAzcHggcmdiKDM1LCAxNDIsIDEzNyk7XFxufVxcblxcbmRpdiA+IGRpdiA+IGRpdiA+IGRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTE3LCAzNSwgMTQyKTtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiKDExNywgMzUsIDE0MiksIGluc2V0IDAgMCAzcHggcmdiKDExNywgMzUsIDE0Mik7XFxufVxcblxcbmRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTQyLCA5MiwgMzUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCByZ2IoMTQyLCA5MiwgMzUpLCBpbnNldCAwIDAgM3B4IHJnYigxNDIsIDkyLCAzNSk7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExOTtcXG4gIGZvbnQtZmFtaWx5OiAnU2hhcmUgVGVjaCBNb25vJywgbW9ub3NwYWNlO1xcbiAgY29sb3I6IHJnYigxNDUsIDI1MywgMTU5KTtcXG4gIHRleHQtc2hhZG93OiAwIDAgNHB4IHJnYig4NiwgMjIxLCAxMDQpLCAwIDAgOHB4IHJnYig1NywgMjA3LCA3Nyk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI0YjQ4O1xcbiAgY29sb3I6IHJnYigxNDUsIDI1MywgMTU5KTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDM1LCAxNDIsIDEzNyk7XFxuICBmb250LWZhbWlseTogJ1NoYXJlIFRlY2ggTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuaW5wdXQge1xcbiAgbWFyZ2luOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExYTE5O1xcbiAgY29sb3I6IHJnYigxNDUsIDI1MywgMTU5KTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDM1LCAxNDIsIDEzNyk7XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYigzNSwgMTQyLCAxMzcpO1xcbiAgZm9udC1mYW1pbHk6ICdTaGFyZSBUZWNoIE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcXG4gIGJvcmRlcjogMnB4IHJnYig1NSwgMTg5LCAxODIpO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJveC1zaGFkb3c6IDAgMCA2cHggcmdiKDMyLCAxMTIsIDEwOCksIGluc2V0IDAgMCA2cHggcmdiKDMyLCAxMTIsIDEwOCk7XFxufVxcblxcbi5tYWluLWFyZWEge1xcbiAgbWluLXdpZHRoOiAyMHJlbTtcXG4gIG1heC13aWR0aDogMzhyZW07XFxufVxcblxcbi5oZXJvLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWluLWhlaWdodDogMTByZW07XFxufVxcblxcbi5oaWdoLWxvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uaGlnaC1sb3cgPiBkaXYge1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5zd2l0Y2gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jdXJyZW50LXRlbXAge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgZm9udC1mYW1pbHk6ICdPdmVycGFzcyBNb25vJztcXG59XFxuXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAzcHg7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjJiMjk7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiKDM2LCAyMDIsIDEzMyk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDJweDtcXG4gIGNvbnRlbnQ6ICc6KSc7XFxuICBoZWlnaHQ6IDIxcHg7XFxuICB3aWR0aDogMjNweDtcXG4gIGxlZnQ6IDJweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExOTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpLCBzY2FsZVgoLTEpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxzRUFBc0U7QUFDeEU7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsc0VBQXNFO0FBQ3hFOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLG9FQUFvRTtBQUN0RTs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5Q0FBeUM7RUFDekMseUJBQXlCO0VBQ3pCLGdFQUFnRTtBQUNsRTs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsK0JBQStCO0VBQy9CLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixxQ0FBcUM7RUFDckMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsc0VBQXNFO0FBQ3hFOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsUUFBUTtFQUNSLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIscUNBQXFDO0VBQ3JDLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsK0JBQStCO0VBQy9CLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PdmVycGFzcytNb25vJmZhbWlseT1TaGFyZStUZWNoK01vbm8mZGlzcGxheT1zd2FwJyk7XFxuXFxuZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDAsIDApO1xcbiAgbWluLWhlaWdodDogMXJlbTtcXG4gIG1pbi13aWR0aDogMXJlbTtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmVkLCBpbnNldCAwIDAgM3B4IHJlZDtcXG59XFxuXFxuZGl2ID4gZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIG9saXZlZHJhYjtcXG4gIG1hcmdpbjogNXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCBvbGl2ZWRyYWIsIGluc2V0IDAgMCAzcHggb2xpdmVkcmFiO1xcbn1cXG5cXG5kaXYgPiBkaXYgPiBkaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDM1LCAxNDIsIDEzNyk7XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYigzNSwgMTQyLCAxMzcpLCBpbnNldCAwIDAgM3B4IHJnYigzNSwgMTQyLCAxMzcpO1xcbn1cXG5cXG5kaXYgPiBkaXYgPiBkaXYgPiBkaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExNywgMzUsIDE0Mik7XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYigxMTcsIDM1LCAxNDIpLCBpbnNldCAwIDAgM3B4IHJnYigxMTcsIDM1LCAxNDIpO1xcbn1cXG5cXG5kaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE0MiwgOTIsIDM1KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiKDE0MiwgOTIsIDM1KSwgaW5zZXQgMCAwIDNweCByZ2IoMTQyLCA5MiwgMzUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMTk7XFxuICBmb250LWZhbWlseTogJ1NoYXJlIFRlY2ggTW9ubycsIG1vbm9zcGFjZTtcXG4gIGNvbG9yOiByZ2IoMTQ1LCAyNTMsIDE1OSk7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDRweCByZ2IoODYsIDIyMSwgMTA0KSwgMCAwIDhweCByZ2IoNTcsIDIwNywgNzcpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNGI0ODtcXG4gIGNvbG9yOiByZ2IoMTQ1LCAyNTMsIDE1OSk7XFxuICBib3JkZXItY29sb3I6IHJnYigzNSwgMTQyLCAxMzcpO1xcbiAgZm9udC1mYW1pbHk6ICdTaGFyZSBUZWNoIE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbmlucHV0IHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWExOTtcXG4gIGNvbG9yOiByZ2IoMTQ1LCAyNTMsIDE1OSk7XFxuICBib3JkZXItY29sb3I6IHJnYigzNSwgMTQyLCAxMzcpO1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCByZ2IoMzUsIDE0MiwgMTM3KTtcXG4gIGZvbnQtZmFtaWx5OiAnU2hhcmUgVGVjaCBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XFxuICBib3JkZXI6IDJweCByZ2IoNTUsIDE4OSwgMTgyKTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3gtc2hhZG93OiAwIDAgNnB4IHJnYigzMiwgMTEyLCAxMDgpLCBpbnNldCAwIDAgNnB4IHJnYigzMiwgMTEyLCAxMDgpO1xcbn1cXG5cXG4ubWFpbi1hcmVhIHtcXG4gIG1pbi13aWR0aDogMjByZW07XFxuICBtYXgtd2lkdGg6IDM4cmVtO1xcbn1cXG5cXG4uaGVyby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xcbn1cXG5cXG4uaGlnaC1sb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmhpZ2gtbG93ID4gZGl2IHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uc3dpdGNoLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY3VycmVudC10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMzRweDtcXG4gIGZvbnQtZmFtaWx5OiAnT3ZlcnBhc3MgTW9ubyc7XFxufVxcblxcbi5zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogM3B4O1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyYjI5O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYigzNiwgMjAyLCAxMzMpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAycHg7XFxuICBjb250ZW50OiAnOiknO1xcbiAgaGVpZ2h0OiAyMXB4O1xcbiAgd2lkdGg6IDIzcHg7XFxuICBsZWZ0OiAycHg7XFxuICBib3R0b206IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTFhMTk7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KSwgc2NhbGVYKC0xKTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBjb21wb25lbnRFbGVtZW50cyBmcm9tICcuLi9kYXRhL2NvbXBvbmVudHMnO1xuaW1wb3J0IGNvbXBvbmVudHMgZnJvbSAnLi4vZGF0YS9zdWJjb21wb25lbnRzJztcbmltcG9ydCBNeVdlYXRoZXIgZnJvbSAnLi4vZGF0YS93ZWF0aGVyLWNsYXNzJztcbmltcG9ydCBnZXRXZWF0aGVyIGZyb20gJy4vZ2V0LWFwaSc7XG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4uL2RhdGEvc2VsZWN0b3JzJztcblxuLy8gY29uc3QgZGVmYXVsdFdlYXRoZXJEYXRhID0gZ2V0V2VhdGhlcignb2dkZW4nKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU3RydWN0dXJlcygpIHtcbiAgY29uc3QgZWxlID0gY29tcG9uZW50cygpO1xuICBjb25zdCBzZWN0aW9uID0gY29tcG9uZW50RWxlbWVudHMoKTtcbiAgcmV0dXJuIGVsZVxuICAgIC5kaXZDSSgnbWFpbi1hcmVhJywgJ21haW4tYXJlYScpXG4gICAgLmFkZENoaWxkKHNlY3Rpb24uaW5wdXRGb3JtKCkpXG4gICAgLmFkZENoaWxkKHNlY3Rpb24ubG9jYXRpb24oKSlcbiAgICAuYWRkQ2hpbGQoc2VjdGlvbi5oZXJvKCkpXG4gICAgLmJ1aWxkKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRlZmF1bHRXZWF0aGVyKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlcignU2VhdHRsZScpO1xuICByZXR1cm4gbmV3IE15V2VhdGhlcihkYXRhKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gYXBwZW5kSW5mbyh3ZWF0aGVyLCBmb3JtYXQpIHtcbiAgY29uc3QgdGVtcFN5bWJvbCA9ICgpID0+IHtcbiAgICBpZiAoZm9ybWF0ID09PSAnYW1lcicpIHtcbiAgICAgIHJldHVybiAnRic7XG4gICAgfVxuICAgIHJldHVybiAnQyc7XG4gIH07XG4gIGNvbnN0IHsgbG9jYXRpb24gfSA9IHNlbGVjdG9ycygpO1xuICBjb25zdCB7IGhlcm8gfSA9IHNlbGVjdG9ycygpO1xuICBjb25zdCB7IGlucHV0Rm9ybSB9ID0gc2VsZWN0b3JzKCk7XG4gIGlucHV0Rm9ybS5pbnB1dEZpZWxkLnRleHRDb250ZW50ID0gd2VhdGhlci5nZXREYXRhKCdjaXR5Jyk7XG4gIGxvY2F0aW9uLmNpdHkudGV4dENvbnRlbnQgPSB3ZWF0aGVyLmdldERhdGEoJ2NpdHknKTtcbiAgbG9jYXRpb24ucmVnaW9uLnRleHRDb250ZW50ID0gd2VhdGhlci5nZXREYXRhKCdyZWdpb24nKTtcbiAgbG9jYXRpb24uY291bnRyeS50ZXh0Q29udGVudCA9IHdlYXRoZXIuZ2V0RGF0YSgnY291bnRyeScpO1xuICBsb2NhdGlvbi5sb2NhbFRpbWUudGV4dENvbnRlbnQgPSB3ZWF0aGVyLmdldERhdGEoJ2xvY2FsVGltZScpO1xuICBoZXJvLmRheUhpZ2gudGV4dENvbnRlbnQgPSBgRGF58J+gmSAke3dlYXRoZXIuZ2V0Rm9ybWF0RGF0YShcbiAgICBmb3JtYXQsXG4gICAgJ21heFRlbXAnXG4gICl9wrAke3RlbXBTeW1ib2woKX1gO1xuICBoZXJvLm5pZ2h0TG93LnRleHRDb250ZW50ID0gYE5pZ2h08J+gmyAke3dlYXRoZXIuZ2V0Rm9ybWF0RGF0YShcbiAgICBmb3JtYXQsXG4gICAgJ21pblRlbXAnXG4gICl9wrAgICR7dGVtcFN5bWJvbCgpfWA7XG4gIGhlcm8uY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyLmdldEZvcm1hdERhdGEoXG4gICAgZm9ybWF0LFxuICAgICd0ZW1wJ1xuICApfcKwJHt0ZW1wU3ltYm9sKCl9YDtcbiAgaGVyby5mZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke3dlYXRoZXIuZ2V0Rm9ybWF0RGF0YShcbiAgICBmb3JtYXQsXG4gICAgJ2ZlZWxzTGlrZSdcbiAgKX3CsCR7dGVtcFN5bWJvbCgpfWA7XG4gIGhlcm8uY29uZGl0aW9uVGV4dC50ZXh0Q29udGVudCA9IGBjb25kaXRpb246IFxcbiR7d2VhdGhlci5nZXREYXRhKFxuICAgICdjb25kaXRpb24nXG4gICl9YDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlZmF1bHRJbmZvQnVpbGQoKSB7XG4gIGNvbnN0IGRlZmF1bHREYXRhID0gYXdhaXQgZGVmYXVsdFdlYXRoZXIoKTtcbiAgY29uc29sZS5sb2coJ2RlZmF1bHQgZGF0YScsIGRlZmF1bHREYXRhKTtcbiAgcmV0dXJuIGFwcGVuZEluZm8oZGVmYXVsdERhdGEsICdhbWVyJyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXIod2VhdGhlckZvcm1hdCkge1xuICBjb25zdCBjaXR5Q2hvaWNlID0gc2VsZWN0b3JzKCkuaW5wdXRGb3JtLmlucHV0RmllbGQudmFsdWU7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHlDaG9pY2UpO1xuICBjb25zdCBteURhdGEgPSBuZXcgTXlXZWF0aGVyKGRhdGEpO1xuICBhcHBlbmRJbmZvKG15RGF0YSwgd2VhdGhlckZvcm1hdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidXR0b25DbGlja2VkKCkge1xuICBjb25zdCBmb3JtYXQgPSBzZWxlY3RvcnMoKS5pbnB1dEZvcm0uZm9ybWF0U3dpdGNoLmNoZWNrZWQ7XG4gIGlmICghZm9ybWF0KSB7XG4gICAgdXBkYXRlV2VhdGhlcignYW1lcicpO1xuICB9IGVsc2UgdXBkYXRlV2VhdGhlcignZWxzZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoQWN0aXZhdGVkKGUpIHtcbiAgY29uc3QgZm9ybWF0ID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgY29uc29sZS5sb2coJ3N3aXRjaCBpbmZvJywgZm9ybWF0KTtcbiAgaWYgKCFmb3JtYXQpIHtcbiAgICBidXR0b25DbGlja2VkKCdhbWVyJyk7XG4gIH0gZWxzZSBidXR0b25DbGlja2VkKCdlbHNlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBrZXlib2FyZExpc3RlbigpIHtcbiAgY29uc3QgaW5wdXQgPSBzZWxlY3RvcnMoKS5pbnB1dEZvcm0uaW5wdXRGaWVsZDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1hcnJvdy1jYWxsYmFjaywgZnVuYy1uYW1lc1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGRvY3VtZW50Lmhhc0ZvY3VzKGlucHV0KSkge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFbnRlcicpO1xuICAgICAgICBidXR0b25DbGlja2VkKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSkge1xuICAvLyBjb25zb2xlLmxvZyhpbnB1dC52YWx1ZSlcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTg4MDM1NDJkNGQyZjQwMGRhNDMxODMxMjEyMzA2MDQmcT0ke2NpdHl9JmRheXM9MSZhcWk9bm8mYWxlcnRzPW5vYCxcbiAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBjb21wb25lbnRzIGZyb20gJy4vc3ViY29tcG9uZW50cyc7XG5pbXBvcnQgeyBidXR0b25DbGlja2VkLCBzd2l0Y2hBY3RpdmF0ZWQgfSBmcm9tICcuLi9jb250cm9sbGVyL2J1aWxkLXBhZ2UnO1xuXG5jb25zdCBlbGUgPSBjb21wb25lbnRzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvbmVudEVsZW1lbnRzKCkge1xuICBjb25zdCBkZWZhdWx0Q2l0eSA9ICdTZWF0dGxlJztcbiAgY29uc3QgZGVmYXVsdEZvcm1hdCA9ICdhbWVyJztcbiAgZnVuY3Rpb24gaW5wdXRGb3JtKCkge1xuICAgIHJldHVybiBlbGVcbiAgICAgIC5kaXZDSSgnZm9ybS1jb250YWluZXInLCAnZm9ybS1jb250YWluZXInKVxuICAgICAgLmFkZENoaWxkKGVsZS5pbnBDSUluKCdjaXR5LWZpZWxkJywgJ2NpdHktZmllbGQnLCBkZWZhdWx0Q2l0eSkpXG4gICAgICAuYWRkQ2hpbGQoXG4gICAgICAgIGVsZVxuICAgICAgICAgIC5idXRDSVQoJ3N1Ym1pdC1jaXR5JywgJ3N1Ym1pdC1jaXR5JywgJ0dldCBXZWF0aGVyJylcbiAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBidXR0b25DbGlja2VkKCkpXG4gICAgICApXG4gICAgICAuYWRkQ2hpbGQoXG4gICAgICAgIGVsZVxuICAgICAgICAgIC5kaXZDSSgnc3dpdGNoLWNvbnRhaW5lcicsICdzd2l0Y2gtY29udGFpbmVyJylcbiAgICAgICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJVCgnc3dpdGNoLWYnLCAnc3dpdGNoLWYnLCAnRsKwJykpXG4gICAgICAgICAgLmFkZENoaWxkKFxuICAgICAgICAgICAgZWxlXG4gICAgICAgICAgICAgIC5sYWJlbEMoJ3N3aXRjaCcpXG4gICAgICAgICAgICAgIC5hZGRDaGlsZChcbiAgICAgICAgICAgICAgICBlbGVcbiAgICAgICAgICAgICAgICAgIC5jaGVja0NJSW4oJ3N3aXRjaC1ib3gnLCAnc3dpdGNoLWJveCcsIGRlZmF1bHRGb3JtYXQpXG4gICAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gc3dpdGNoQWN0aXZhdGVkKGUpKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5hZGRDaGlsZChlbGUuc3BhbkNJKCdzbGlkZXInLCAnc2xpZGVyJykpXG4gICAgICAgICAgKVxuICAgICAgICAgIC5hZGRDaGlsZChlbGUuZGl2Q0lUKCdzd2l0Y2gtYycsICdzd2l0Y2gtYycsICdDwrAnKSlcbiAgICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBsb2NhdGlvbigpIHtcbiAgICByZXR1cm4gZWxlXG4gICAgICAuZGl2Q0koJ2xvY2F0aW9uLWNvbnRhaW5lcicsICdsb2NhdGlvbi1jb250YWluZXInKVxuICAgICAgLmFkZENoaWxkKGVsZS5kaXZDSSgnY2l0eScsICdjaXR5JykpXG4gICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJKCdyZWdpb24nLCAncmVnaW9uJykpXG4gICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJKCdjb3VudHJ5JywgJ2NvdW50cnknKSlcbiAgICAgIC5hZGRDaGlsZChlbGUuZGl2Q0koJ2xvY2FsLXRpbWUnLCAnbG9jYWwtdGltZScpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhlcm8oKSB7XG4gICAgcmV0dXJuIGVsZVxuICAgICAgLmRpdkNJKCdoZXJvLWNvbnRhaW5lcicsICdoZXJvLWNvbnRhaW5lcicpXG4gICAgICAuYWRkQ2hpbGQoXG4gICAgICAgIGVsZVxuICAgICAgICAgIC5kaXZDSSgnaGVyby0xJywgJ2hlcm8tMScpXG4gICAgICAgICAgLmFkZENoaWxkKFxuICAgICAgICAgICAgZWxlXG4gICAgICAgICAgICAgIC5kaXZDSSgnaGlnaC1sb3cnLCAnaGlnaC1sb3cnKVxuICAgICAgICAgICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJKCdkYXktaGlnaCcsICdkYXktaGlnaCcpKVxuICAgICAgICAgICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJKCduaWdodC1sb3cnLCAnbmlnaHQtbG93JykpXG4gICAgICAgICAgKVxuICAgICAgICAgIC5hZGRDaGlsZChlbGUuZGl2Q0koJ2N1cnJlbnQtdGVtcCcsICdjdXJyZW50LXRlbXAnKSlcbiAgICAgICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJKCdmZWVscy1saWtlJywgJ2ZlZWxzLWxpa2UnKSlcbiAgICAgIClcbiAgICAgIC5hZGRDaGlsZChcbiAgICAgICAgZWxlXG4gICAgICAgICAgLmRpdkNJKCdoZXJvLTInLCAnaGVyby0yJylcbiAgICAgICAgICAuYWRkQ2hpbGQoZWxlLmRpdkNJKCdjb25kaXRpb24taWNvbicsICdjb25kaXRpb24taWNvbicpKVxuICAgICAgICAgIC5hZGRDaGlsZChlbGUuZGl2Q0koJ2NvbmRpdGlvbi10ZXh0JywgJ2NvbmRpdGlvbi10ZXh0JykpXG4gICAgICApO1xuICB9XG4gIHJldHVybiB7IGlucHV0Rm9ybSwgbG9jYXRpb24sIGhlcm8gfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50VHlwZSkge1xuICAgIHRoaXMuZWxlbWVudFR5cGUgPSBlbGVtZW50VHlwZTtcbiAgICB0aGlzLmF0dHJpYnV0ZXMgPSB7fTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IHt9O1xuICB9XG5cbiAgYWRkQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgIHRoaXMuYXR0cmlidXRlc1trZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkQ2hpbGQoY2hpbGRFbGVtZW50KSB7XG4gICAgdGhpcy50ZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZEVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkVGV4dCh0ZXh0KSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbGlzdGVuZXIpIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXSkge1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVyc1tldmVudFR5cGVdID0gW107XG4gICAgfVxuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXS5wdXNoKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGJ1aWxkKCkge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMuZWxlbWVudFR5cGUpO1xuXG4gICAgZm9yIChjb25zdCBbYXR0cmlidXRlLCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5hdHRyaWJ1dGVzKSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIG5ld0VsZW1lbnQudG9nZ2xlQXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBbZXZlbnRUeXBlLCBsaXN0ZW5lcnNdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuZXZlbnRMaXN0ZW5lcnMpKSB7XG4gICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgbmV3RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbGlzdGVuZXIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pIHtcbiAgICAgICAgbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZC5idWlsZCgpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgRE9NdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMudGV4dCk7XG4gICAgICBuZXdFbGVtZW50LmFwcGVuZENoaWxkKERPTXRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdFbGVtZW50O1xuICB9XG59XG4iLCJmdW5jdGlvbiBieUlEKGlkKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdG9ycygpIHtcbiAgcmV0dXJuIHtcbiAgICBpbnB1dEZvcm06IHtcbiAgICAgIGZvcm1Db250YWluZXI6IGJ5SUQoJ2Zvcm0tY29udGFpbmVyJyksXG4gICAgICBpbnB1dEZpZWxkOiBieUlEKCdjaXR5LWZpZWxkJyksXG4gICAgICBzdWJtaXRCdXR0b246IGJ5SUQoJ3N1Ym1pdC1jaXR5JyksXG4gICAgICBmb3JtYXRTd2l0Y2g6IGJ5SUQoJ3N3aXRjaC1ib3gnKSxcbiAgICAgIHNsaWRlcjogYnlJRCgnc2xpZGVyJylcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICBsb2NhdGlvbkNvbnRhaW5lcjogYnlJRCgnbG9jYXRpb24tY29udGFpbmVyJyksXG4gICAgICBjaXR5OiBieUlEKCdjaXR5JyksXG4gICAgICByZWdpb246IGJ5SUQoJ3JlZ2lvbicpLFxuICAgICAgY291bnRyeTogYnlJRCgnY291bnRyeScpLFxuICAgICAgbG9jYWxUaW1lOiBieUlEKCdsb2NhbC10aW1lJyksXG4gICAgfSxcbiAgICBoZXJvOiB7XG4gICAgICBoZXJvQ29udGFpbmVyOiBieUlEKCdoZXJvLWNvbnRhaW5lcicpLFxuICAgICAgLy8gaGVybzE6IGJ5SUQoJ2hlcm8tMScpLFxuICAgICAgLy8gaGlnaExvdzogYnlJRCgnaGlnaC1sb3cnKSxcbiAgICAgIGRheUhpZ2g6IGJ5SUQoJ2RheS1oaWdoJyksXG4gICAgICBuaWdodExvdzogYnlJRCgnbmlnaHQtbG93JyksXG4gICAgICBjdXJyZW50VGVtcDogYnlJRCgnY3VycmVudC10ZW1wJyksXG4gICAgICBmZWVsc0xpa2U6IGJ5SUQoJ2ZlZWxzLWxpa2UnKSxcbiAgICAgIC8vIGhlcm8yOiBieUlEKCdoZXJvLTInKSxcbiAgICAgIGNvbmRpdGlvbkljb246IGJ5SUQoJ2NvbmRpdGlvbi1pY29uJyksXG4gICAgICBjb25kaXRpb25UZXh0OiBieUlEKCdjb25kaXRpb24tdGV4dCcpLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGVjdG9ycztcbiIsImltcG9ydCBFbGVtZW50IGZyb20gJy4vZWxlbWVudC1tYWtlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvbmVudHMoKSB7XG4gIC8vIGRpdlxuICBmdW5jdGlvbiBkaXZDSShjbGFzc05hbWUsIGlkKSB7XG4gICAgcmV0dXJuIG5ldyBFbGVtZW50KCdkaXYnKS5hZGRBdHRyaWJ1dGVzKHtcbiAgICAgIGNsYXNzOiBjbGFzc05hbWUsXG4gICAgICBpZCxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpdkNJVChjbGFzc05hbWUsIGlkLCB0ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBFbGVtZW50KCdkaXYnKVxuICAgICAgLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgICBjbGFzczogY2xhc3NOYW1lLFxuICAgICAgICBpZCxcbiAgICAgIH0pXG4gICAgICAuYWRkVGV4dCh0ZXh0KTtcbiAgfVxuXG4gIC8vIGJ1dHRvblxuICBmdW5jdGlvbiBidXRDSVQoY2xhc3NOYW1lLCBpZCwgdGV4dCkge1xuICAgIHJldHVybiBuZXcgRWxlbWVudCgnYnV0dG9uJylcbiAgICAgIC5hZGRBdHRyaWJ1dGVzKHtcbiAgICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgICAgaWQsXG4gICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgfSlcbiAgICAgIC5hZGRUZXh0KHRleHQpO1xuICB9XG5cbiAgLy8gcmFkaW8gYnV0dG9uXG4gIGZ1bmN0aW9uIHJhZENJTkNoKGNsYXNzTmFtZSwgaWQsIG5hbWUsIGlzQ2hlY2tlZCkge1xuICAgIHJldHVybiBuZXcgRWxlbWVudCgnaW5wdXQnKS5hZGRBdHRyaWJ1dGVzKHtcbiAgICAgIGNsYXNzOiBjbGFzc05hbWUsXG4gICAgICB0eXBlOiAncmFkaW8nLFxuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgdmFsdWU6IGlkLFxuICAgICAgY2hlY2tlZDogaXNDaGVja2VkLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5wQ0lJbihjbGFzc05hbWUsIGlkLCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBFbGVtZW50KCdpbnB1dCcpLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIGlkLFxuICAgICAgdmFsdWU6IGluaXQsXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzcGFuQ0koY2xhc3NOYW1lLCBpZCkge1xuICAgIHJldHVybiBuZXcgRWxlbWVudCgnc3BhbicpLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgIGlkLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbGFiZWxDKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiBuZXcgRWxlbWVudCgnbGFiZWwnKS5hZGRBdHRyaWJ1dGVzKHtcbiAgICAgIGNsYXNzOiBjbGFzc05hbWUsXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja0NJSW4oY2xhc3NOYW1lLCBpZCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgRWxlbWVudCgnaW5wdXQnKS5hZGRBdHRyaWJ1dGVzKHtcbiAgICAgIGNsYXNzOiBjbGFzc05hbWUsXG4gICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgaWQsXG4gICAgICB2YWx1ZTogaW5pdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGltYWdlXG4gIGZ1bmN0aW9uIGltZ1NBQ0koc3JjLCBhbHQsIGNsYXNzTmFtZSwgaWQpIHtcbiAgICByZXR1cm4gbmV3IEVsZW1lbnQoJ2ltZycpLmFkZEF0dHJpYnV0ZXMoe1xuICAgICAgc3JjLFxuICAgICAgYWx0LFxuICAgICAgY2xhc3M6IGNsYXNzTmFtZSxcbiAgICAgIGlkLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBkaXZDSSxcbiAgICBkaXZDSVQsXG4gICAgYnV0Q0lULFxuICAgIHJhZENJTkNoLFxuICAgIGltZ1NBQ0ksXG4gICAgaW5wQ0lJbixcbiAgICBjaGVja0NJSW4sXG4gICAgc3BhbkNJLFxuICAgIGxhYmVsQyxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE15V2VhdGhlciB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBjb25zdCBub3cgPSBkYXRhLmN1cnJlbnQ7XG4gICAgY29uc3QgZm9yZWNhc3REYXkgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheTtcbiAgICBjb25zdCBsb2MgPSBkYXRhLmxvY2F0aW9uO1xuICAgIHRoaXMuY2l0eSA9IGxvYy5uYW1lO1xuICAgIHRoaXMucmVnaW9uID0gbG9jLnJlZ2lvbjtcbiAgICB0aGlzLmNvdW50cnkgPSBsb2MuY291bnRyeTtcbiAgICB0aGlzLmxvY2FsVGltZSA9IGxvYy5sb2NhbHRpbWU7XG4gICAgdGhpcy5pc0RheSA9IG5vdy5pc19kYXk7XG4gICAgdGhpcy50ZW1wID0geyBhbWVyOiBub3cudGVtcF9mLCBlbHNlOiBub3cudGVtcF9jIH07XG4gICAgdGhpcy5mZWVsc0xpa2UgPSB7IGFtZXI6IG5vdy5mZWVsc2xpa2VfZiwgZWxzZTogbm93LmZlZWxzbGlrZV9jIH07XG4gICAgdGhpcy53aW5kID0geyBhbWVyOiBub3cud2luZF9tcGgsIGVsc2U6IG5vdy53aW5kX2twaCB9O1xuICAgIHRoaXMuZ3VzdCA9IHsgYW1lcjogbm93Lmd1c3RfbXBoLCBlbHNlOiBub3cuZ3VzdF9rcGggfTtcbiAgICB0aGlzLnByZWNpcCA9IHsgYW1lcjogbm93LnByZWNpcF9pbiwgZWxzZTogbm93LnByZWNpcF9tbSB9O1xuICAgIHRoaXMubWF4VGVtcCA9IHsgYW1lcjogZm9yZWNhc3REYXkubWF4dGVtcF9mLCBlbHNlOiBmb3JlY2FzdERheS5tYXh0ZW1wX2MgfTtcbiAgICB0aGlzLm1pblRlbXAgPSB7IGFtZXI6IGZvcmVjYXN0RGF5Lm1pbnRlbXBfZiwgZWxzZTogZm9yZWNhc3REYXkubWludGVtcF9jIH07XG4gICAgdGhpcy50b3RhbFByZWNpcCA9IHtcbiAgICAgIGFtZXI6IGZvcmVjYXN0RGF5LnRvdGFscHJlY2lwX2luLFxuICAgICAgZWxzZTogZm9yZWNhc3REYXkudG90YWxwcmVjaXBfbW0sXG4gICAgfTtcbiAgICB0aGlzLmNsb3VkID0gbm93LmNsb3VkO1xuICAgIHRoaXMud2lsbEl0UmFpbiA9IGZvcmVjYXN0RGF5LmRhaWx5X3dpbGxfaXRfcmFpbjtcbiAgICB0aGlzLndpbGxJdFNub3cgPSBmb3JlY2FzdERheS5kYWlseV93aWxsX2l0X3Nub3c7XG4gICAgdGhpcy5jaGFuY2VPZlJhaW4gPSBmb3JlY2FzdERheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcbiAgICB0aGlzLmNoYW5jZU9mU25vdyA9IGZvcmVjYXN0RGF5LmRhaWx5X2NoYW5jZV9vZl9zbm93O1xuICAgIHRoaXMuY29uZGl0aW9uID0gbm93LmNvbmRpdGlvbi50ZXh0O1xuICAgIHRoaXMuaHVtaWRpdHkgPSBub3cuaHVtaWRpdHk7XG4gIH1cblxuICBnZXREYXRhKHRoaW5nKSB7XG4gICAgcmV0dXJuIHRoaXNbdGhpbmddO1xuICB9XG5cbiAgZ2V0Rm9ybWF0RGF0YShmb3JtYXQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpc1tkYXRhXVtmb3JtYXRdO1xuICB9XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7XG4gIGJ1aWxkU3RydWN0dXJlcyxcbiAgZGVmYXVsdEluZm9CdWlsZCxcbiAga2V5Ym9hcmRMaXN0ZW4sXG59IGZyb20gJy4vY29udHJvbGxlci9idWlsZC1wYWdlJztcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChidWlsZFN0cnVjdHVyZXMoKSk7XG5kZWZhdWx0SW5mb0J1aWxkKCk7XG5rZXlib2FyZExpc3RlbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9