/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Ropest.woff2 */ \"./src/fonts/Ropest.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/MaterialSymbolsRounded-VariableFont.woff2 */ \"./src/fonts/MaterialSymbolsRounded-VariableFont.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n@font-face {\n  font-family: 'Ropest';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Material Icons';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff2');\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  --garnet: hsl(0, 45%, 31%);\n  --oxford-blue:hsl(213, 96%, 11%);\n  --celestial-blue: hsl(208, 68%, 59%);\n  --cream: hsl(76, 100%, 95%);\n  --robins-egg: hsl(187, 58%, 77%);\n  --title-font: 'Ropest', 'Courier New', Courier, monospace;\n  --page-font: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 10rem 1fr;\n}\n\n.sidebar {\n  display: grid;\n  justify-items: center;\n  align-items: stretch;\n  background: var(--garnet);\n  padding-top: 2rem;\n  z-index: 1;\n  transition: 300ms;\n}\n\nnav {\n  display: grid;\n  grid-template-rows: repeat(3, 3rem);\n  justify-items: center;\n  align-items: start;\n  background: var(--garnet);\n  max-width: 100%;\n}\n\n.tabcontainer {\n  display: grid;\n  grid-template-columns: 3rem 6rem;\n  justify-items: start;\n  align-items: center;\n  gap: 1rem;\n}\n\n.tabcontainer p {\n  font-family: 'Material Icons';\n  font-size: 24px;\n  color: var(--cream);\n  justify-self: end;\n}\n\nbutton {\n  height: 3rem;\n  width: auto;\n  border: none;\n  background: none;\n  font-size: 1rem;\n  font-family: var(--page-font);\n  color: var(--cream);\n}\n\n.tabcontainer:hover, button:hover {\n  background:hsl(0, 45%, 21%);\n  cursor: pointer;\n}\n\n.main {\n  display: grid;\n  max-height: 100vh;\n  grid-template-rows: 10rem calc(100vh - 15rem) 5rem;\n}\n\n.banner {\n  display: grid;\n  background: var(--oxford-blue);\n  color: var(--cream);\n}\n\n.title {\n  align-self: center;\n  justify-self: center;\n  font-size: 5rem;\n  font-family: var(--title-font);\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 1fr;\n  background: var(--celestial-blue);\n}\n\n.homecontainer {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  padding: 5rem;\n  background: var(--celestial-blue);\n}\n\n.home {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  grid-template-rows: 1fr 15rem;\n  gap: 5rem;\n}\n\n.infocontainer {\n  display: grid;\n  grid-template-rows: 8rem 5rem;\n  justify-items: center;\n  align-items: center;\n  padding: 2rem 3rem;\n  border-radius: 0.25rem;\n  background: var(--robins-egg);\n  color: var(--oxford-blue);\n  font-family: var(--page-font);\n}\n\n.hours {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  gap: 1rem;\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n\n.hourstitle {\n  font-weight: 600;\n}\n\n.address {\n  margin-top: 1rem;\n  font-weight: 600;\n  font-style: italic;\n}\n\n.imagecontainer {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  padding: 2rem;\n  border-radius: 0.25rem;\n  background: var(--robins-egg);\n}\n\n.restaurant {\n  height: 38vh;\n  width: auto;\n  clip-path: polygon(5% 0, 95% 0, 100% 10%, 100% 90%, 95% 100%, 5% 100%, 0 90%, 0 10%);\n}\n\n.menucontainer {\n  overflow-y: scroll;\n  display: grid;\n  grid-template-rows: 8rem 1fr;\n  justify-items: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.menutitle {\n  font-family: var(--title-font);\n  font-size: 4rem;\n  color: var(--cream);\n}\n\n.menu {\n  display: grid;\n  grid-template-rows: repeat(8, 13rem);\n  padding: 0rem 5rem 5rem;\n  gap: 3rem;\n  justify-items: center;\n  align-items: center;\n}\n\n.menuitem {\n  display: grid;\n  grid-template-columns: 1fr 10rem;\n  width: 55rem;\n  gap: 1rem;\n  padding: 1.5rem;\n  background: var(--robins-egg);\n  border-radius: 0.25rem;\n}\n\n.info {\n  display: grid;\n  grid-template-rows: 2rem 4rem 2rem;\n  margin-right: 1rem;\n  gap: 1rem;\n  color: var(--oxford-blue);\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\n.name {\n  font-weight: 700;\n  font-size: 1.2rem;\n  padding-bottom: 1.5rem;\n}\n\n.price {\n  font-style: italic;\n}\n\n.dishimage {\n  height: 10rem;\n  width: 10rem;\n  object-fit: contain;\n}\n\n.aboutcontainer {\n  overflow-y: scroll;\n  display: grid;\n  justify-items: center;\n  align-items: start;\n  padding: 5rem;\n}\n\n.about {\n  display: grid;\n  grid-template-rows: 3rem 1fr 3rem 1fr;\n  justify-items: center;\n  align-items: start;\n  gap: 2rem;\n  width: 55rem;\n  padding: 5rem;\n  border-radius: 0.25rem;\n  font-family: var(--page-font);\n  background: var(--robins-egg);\n  color: var(--oxford-blue);\n}\n\n.originheading, .philheading {\n  font-weight: 600;\n  font-size: 1.5rem;\n  font-style: italic;\n}\n\n.origin, .philosophy {\n  line-height: 1.5rem;\n}\n\n.footcontainer {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  background: var(--oxford-blue);\n}\n\n.footer {\n  color: var(--cream);\n  font-family: var(--page-font);\n  font-style: italic;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/aboutload.js":
/*!**************************!*\
  !*** ./src/aboutload.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/** Function that generates about page content and adds it to the DOM */\n\nconst aboutLoad = () => {\n  const content = document.getElementById('content');\n  const container = document.createElement('div');\n  const about = document.createElement('div');\n  const originHeading = document.createElement('div');\n  const origin = document.createElement('div');\n  const philHeading = document.createElement('div');\n  const philosophy = document.createElement('div');\n\n  container.classList.add('aboutcontainer');\n  about.classList.add('about');\n  originHeading.classList.add('originheading');\n  origin.classList.add('origin');\n  philHeading.classList.add('philheading');\n  philosophy.classList.add('philosophy');\n\n  originHeading.textContent = 'Our Origin Story'\n  origin.innerHTML = `Nestled on the rugged shores of the North Atlantic, Blobfish \n  Bistro emerged from the depths like a hidden treasure. Founded in 1961 by Captain \n  Magnus “Salty” O’Sullivan, a grizzled seafarer with a penchant for adventure, \n  our humble eatery began as a dockside cottage. Salty, with a twinkle in his eye \n  and salt spray in his beard, envisioned a place where the ocean’s bounty could \n  be celebrated—a sanctuary for seafood enthusiasts and curious souls alike.<br><br>\n  The legend goes that Salty stumbled upon a rare and peculiar creature during a \n  tempestuous night: the blobfish. With its gelatinous appearance and melancholic \n  expression, the blobfish seemed an unlikely muse. Yet, Salty saw beyond its unconventional \n  beauty. He believed that within its squishy exterior lay the essence of the sea—the \n  untamed, mysterious spirit of maritime adventure.<br><br>And so, Blobfish Bistro \n  was born—a haven where oceanic wonders collided with culinary creativity. Salty’s \n  crew, a motley crew of fishermen, foragers, and eccentric chefs, rallied behind \n  his vision. They scoured the coastline for the freshest catches, from luminescent \n  squid to crimson Dungeness crabs. Their motto? “From tide to table, with love.”`\n\n  philHeading.textContent = 'Our Philosophy'\n  philosophy.innerHTML = `At Blobfish Bistro, we embrace the wild and whimsical. \n  Our cuisine dances on the edge of tradition, daring to blend unexpected flavors \n  and textures. Here’s what sets us apart: <br><br><b>Sustainable Sourcing:</b> We \n  honor the sea by sourcing sustainably caught seafood. Our partnerships with local \n  fishermen ensure that every scallop, every oyster, and every tentacle is harvested \n  with care. We believe in leaving the ocean better than we found it. <br><br><b>Seaweed \n  Alchemy:</b> Our chefs are alchemists, transforming humble seafood into culinary \n  magic. Try our kelp-infused butter or the swordfish pastrami—it’s like tasting \n  the briny kiss of Poseidon himself. <br><br><b>Tidepool Fusion:</b> Our menu transcends \n  borders. Picture a fusion of Japanese umami, Mediterranean zest, and North Atlantic \n  flair.<br><br>Whether you’re a seasoned sailor or a landlubber seeking adventure, \n  Blobfish Bistro invites you to savor the sea’s secrets. Come, raise a glass of \n  seaweed-infused gin, listen to the haunting shanties of our resident accordionist, \n  and let the ocean weave its spell around you.`\n\n  content.appendChild(container);\n  container.appendChild(about);\n  about.appendChild(originHeading);\n  about.appendChild(origin);\n  about.appendChild(philHeading);\n  about.appendChild(philosophy);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutLoad);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/aboutload.js?");

/***/ }),

/***/ "./src/homeload.js":
/*!*************************!*\
  !*** ./src/homeload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_restaurant_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant.jpeg */ \"./src/images/restaurant.jpeg\");\n\n\n/** Function that generates home page content and adds it to the DOM */\n\nconst homeLoad = () => {\n  const content = document.querySelector('#content');\n  const container = document.createElement('div');\n  const home = document.createElement('div');\n  const info = document.createElement('div');\n  const hours = document.createElement('div');\n  const title = document.createElement('div');\n  const monFri = document.createElement('div');\n  const satSun = document.createElement('div');\n  const address = document.createElement('div');\n  const imageContainer = document.createElement('div');\n  const restaurantImage = new Image();\n  restaurantImage.src = _images_restaurant_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n\n  container.classList.add('homecontainer');\n  home.classList.add('home');\n  imageContainer.classList.add('imagecontainer');\n  info.classList.add('infocontainer');\n  hours.classList.add('hours');\n  title.classList.add('hourstitle');\n  monFri.classList.add('monfri');\n  satSun.classList.add('satsun');\n  address.classList.add('address');\n  restaurantImage.classList.add('restaurant');\n\n  title.textContent = 'Hours'\n  monFri.textContent = 'Mon-Fri: 10am - 7pm'\n  satSun.textContent = 'Sat-Sun: 9am - 4pm'\n  address.textContent = '498 Bayside Dr, Portsville, ME 09310'\n\n  content.appendChild(container);\n  container.appendChild(home);\n  home.appendChild(imageContainer);\n  imageContainer.appendChild(restaurantImage);\n  home.appendChild(info);\n  info.appendChild(hours);\n  hours.appendChild(title);\n  hours.appendChild(monFri);\n  hours.appendChild(satSun);\n  info.appendChild(address);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeLoad);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/homeload.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeload_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeload.js */ \"./src/homeload.js\");\n/* harmony import */ var _menuload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuload.js */ \"./src/menuload.js\");\n/* harmony import */ var _aboutload_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutload.js */ \"./src/aboutload.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/** Import page load functions from the three page modules */\n\n\n\n\n\n\n/** Initial home page load */\n\n(0,_homeload_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n/** Grab the buttons for tabbed browsing */\n\nconst homeBtn = document.getElementById('home');\nconst menuBtn = document.getElementById('menu');\nconst aboutBtn = document.getElementById('about');\n\n/** Function to clear the DOM and call the relevant page load function */\n\nconst tabSwitch = (pageFunc) => {\n  const content = document.getElementById('content');\n  while (content.firstChild) {\n  content.removeChild(content.lastChild);\n  }\n  pageFunc();\n};\n\n/** Slap event listeners on each button that call their respective\n *  imported page load functions */\n\nhomeBtn.addEventListener('click', () => {\n  tabSwitch(_homeload_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n});\n\nmenuBtn.addEventListener('click', () => {\n  tabSwitch(_menuload_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n});\n\naboutBtn.addEventListener('click', () => {\n  tabSwitch(_aboutload_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n});\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  item1: {\n    name: 'Buffalo Blowfish Tails',\n    description: 'Crispy blowfish tails tossed in a tangy buffalo sauce. A unique and flavorful appetizer that pairs well with a cold beer.',\n    price: '$12.99',\n    image: __webpack_require__(/*! ./images/blowfish-tails.jpeg */ \"./src/images/blowfish-tails.jpeg\"),\n  },\n  item2: {\n    name: 'Clam Chowder Dumplings',\n    description: 'Steamed dumplings filled with New England clam chowder—creamy, chunky, and bursting with clam flavor. Accompanied by a chive dipping sauce.',\n    price: '$11.75 (6 dumplings)',\n    image: __webpack_require__(/*! ./images/clam-chowder-dumplings.jpeg */ \"./src/images/clam-chowder-dumplings.jpeg\"),\n  },\n  item3: {\n    name: 'Shrimp-Stuffed Avocado Boat',\n    description: 'Half an avocado filled with shrimp and citrus segments, topped with a zesty cilantro-lime dressing. Served chilled.',\n    price: '$13.99',\n    image: __webpack_require__(/*! ./images/shrimp-stuffed-avocado.jpeg */ \"./src/images/shrimp-stuffed-avocado.jpeg\"),\n  },\n  item4: {\n    name: 'Seaweed-Wrapped Tuna Tacos',\n    description: 'Crispy seaweed shells filled with diced ahi tuna, avocado, mango salsa, and a wasabi aioli drizzle. A fusion of Japanese and Mexican flavors.',\n    price: '$14.95 (3 tacos)',\n    image: __webpack_require__(/*! ./images/seaweed-tuna-tacos.jpeg */ \"./src/images/seaweed-tuna-tacos.jpeg\"),\n  },\n  item5: {\n    name: 'Swordfish Pastrami Sandwich',\n    description: 'Thinly sliced swordfish pastrami layered on rye bread with pickled red onions, Dijon mustard, and arugula. Served with a side of house-made potato chips.',\n    price: '$15.95',\n    image: __webpack_require__(/*! ./images/swordfish-sandwich.jpeg */ \"./src/images/swordfish-sandwich.jpeg\"),\n  },\n  item6: {\n    name: 'Oyster Platter',\n    description: 'Raw West Coast oysters dressed with watercress granita, celeriac, and olive oil.',\n    price: '$18.50 (half dozen)',\n    image: __webpack_require__(/*! ./images/oyster-platter.jpeg */ \"./src/images/oyster-platter.jpeg\"),\n  },\n  item7: {\n    name: 'Miso-Glazed Black Cod',\n    description: 'Buttery black cod fillet marinated in a sweet and savory miso glaze, then broiled until caramelized. Served with steamed bok choy.',\n    price: '$22.95',\n    image: __webpack_require__(/*! ./images/black-cod.jpeg */ \"./src/images/black-cod.jpeg\"),\n  },\n  item8: {\n    name: 'Salmon Wellington',\n    description: 'Flaky puff pastry encases a center-cut salmon fillet, spinach, and dill cream cheese. Baked until golden brown and served with a lemon beurre blanc.',\n    price: '$23.50',\n    image: __webpack_require__(/*! ./images/salmon-wellington.jpeg */ \"./src/images/salmon-wellington.jpeg\"),\n  },\n});\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/menuload.js":
/*!*************************!*\
  !*** ./src/menuload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/** Import JSON menu data */\n\n\n\n/** Function that generates menu page content and adds it to the DOM */\n\nconst menuLoad = () => {\n  const content = document.getElementById('content');\n  const menuContainer = document.createElement('div');\n  const title = document.createElement('div');\n  const menu = document.createElement('div');\n\n  menuContainer.classList.add('menucontainer');\n  title.classList.add('menutitle');\n  title.textContent = 'Menu';\n  menu.classList.add('menu');\n\n  menuContainer.appendChild(title);\n  \n  /** Generate menu items iteratively using a JSON object and append\n    * them to the menu page */\n\n  const populateMenu = obj => {\n    Object.keys(obj).forEach(key => {\n      if (typeof obj[key] === 'object') {\n\n        const item = document.createElement('div');\n        const info = document.createElement('div');\n        const name = document.createElement('div');\n        const desc = document.createElement('div');\n        const price = document.createElement('div');\n        const imageContainer = document.createElement('div');\n        const image = new Image();\n\n        item.classList.add('menuitem');\n        info.classList.add('info');\n        image.classList.add('dishimage');\n        name.classList.add('name');\n        desc.classList.add('desc');\n        price.classList.add('price');\n        name.textContent = obj[key].name;\n        desc.textContent = obj[key].description;\n        price.textContent = obj[key].price;\n        image.src = obj[key].image;\n      \n        menu.appendChild(item);\n        item.appendChild(info);\n        info.appendChild(name);\n        info.appendChild(desc);\n        info.appendChild(price);\n        item.appendChild(imageContainer);\n        imageContainer.appendChild(image);\n      }\n    })\n  }\n\n  populateMenu(_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n  menuContainer.appendChild(menu);\n  content.appendChild(menuContainer);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLoad);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menuload.js?");

/***/ }),

/***/ "./src/fonts/MaterialSymbolsRounded-VariableFont.woff2":
/*!*************************************************************!*\
  !*** ./src/fonts/MaterialSymbolsRounded-VariableFont.woff2 ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"71abd9d04663b452666d.woff2\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/fonts/MaterialSymbolsRounded-VariableFont.woff2?");

/***/ }),

/***/ "./src/fonts/Ropest.woff2":
/*!********************************!*\
  !*** ./src/fonts/Ropest.woff2 ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3ca1ef793637cd579895.woff2\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/fonts/Ropest.woff2?");

/***/ }),

/***/ "./src/images/black-cod.jpeg":
/*!***********************************!*\
  !*** ./src/images/black-cod.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5cba4e6d3c464c10b50c.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/black-cod.jpeg?");

/***/ }),

/***/ "./src/images/blowfish-tails.jpeg":
/*!****************************************!*\
  !*** ./src/images/blowfish-tails.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b72a3d7aa70443115894.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/blowfish-tails.jpeg?");

/***/ }),

/***/ "./src/images/clam-chowder-dumplings.jpeg":
/*!************************************************!*\
  !*** ./src/images/clam-chowder-dumplings.jpeg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6ccd10cdfdf49b3830b3.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/clam-chowder-dumplings.jpeg?");

/***/ }),

/***/ "./src/images/oyster-platter.jpeg":
/*!****************************************!*\
  !*** ./src/images/oyster-platter.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"91a82a10235df3640c8d.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/oyster-platter.jpeg?");

/***/ }),

/***/ "./src/images/restaurant.jpeg":
/*!************************************!*\
  !*** ./src/images/restaurant.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e436c41403549e0246c9.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/restaurant.jpeg?");

/***/ }),

/***/ "./src/images/salmon-wellington.jpeg":
/*!*******************************************!*\
  !*** ./src/images/salmon-wellington.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d75227140ec27974b80b.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/salmon-wellington.jpeg?");

/***/ }),

/***/ "./src/images/seaweed-tuna-tacos.jpeg":
/*!********************************************!*\
  !*** ./src/images/seaweed-tuna-tacos.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"043d3f479bf1c3e279b2.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/seaweed-tuna-tacos.jpeg?");

/***/ }),

/***/ "./src/images/shrimp-stuffed-avocado.jpeg":
/*!************************************************!*\
  !*** ./src/images/shrimp-stuffed-avocado.jpeg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3863b5ae704891264233.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/shrimp-stuffed-avocado.jpeg?");

/***/ }),

/***/ "./src/images/swordfish-sandwich.jpeg":
/*!********************************************!*\
  !*** ./src/images/swordfish-sandwich.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d5da1b14fb3565bbfa69.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/images/swordfish-sandwich.jpeg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;