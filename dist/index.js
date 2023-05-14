/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/reset.scss */ \"./src/scss/reset.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/header.scss */ \"./src/scss/header.scss\");\n/* harmony import */ var _scss_content_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/content.scss */ \"./src/scss/content.scss\");\n/* harmony import */ var _scss_footer_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/footer.scss */ \"./src/scss/footer.scss\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n// function component(text) {\n//   const element = document.createElement('h1');\n//   element.textContent = text;\n//   return element;\n// }\n//document.body.prepend(component(\"Проєкт зібрано за допомогою Webpack\"));\n\n//# sourceURL=webpack://lab5/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("let services = [];\nlet button = document.querySelector('#calc_cost');\nlet modal = document.getElementById('myModal');\nvar span = document.getElementsByClassName(\"close\")[0];\nlet h2 = document.querySelector(\"#h2\");\nlet fio = document.getElementById('fio').value;\nlet main_text = document.querySelector(\"#main_text\");\nvar market_analysis, loyalty_program, site_promo, brandbook, pr_company, chat_bot;\nservices[0] = {\n  name: document.getElementById('market_analysis'),\n  price: 100\n};\nservices[1] = {\n  name: document.getElementById('loyalty_program'),\n  price: 170\n};\nservices[2] = {\n  name: document.getElementById('site_promo'),\n  price: 150\n};\nservices[3] = {\n  name: document.getElementById('brandbook'),\n  price: 150\n};\nservices[4] = {\n  name: document.getElementById('pr_company'),\n  price: 200\n};\nservices[5] = {\n  name: document.getElementById('chat_bot'),\n  price: 100\n};\nfunction sum_price() {\n  let s = 0;\n  for (let i = 0; i < services.length; i++) {\n    if (services[i].name.checked) {\n      s += services[i].price;\n      console.log(services[i].name + ' обрано');\n    } else {\n      console.log(services[i].name + ' не обрано');\n    }\n  }\n  return s;\n}\nbutton.onclick = function () {\n  modal.style.display = \"block\";\n  let s = sum_price();\n  let s_min = s - 50;\n  let s_max = s + 100;\n  h2.innerHTML = 'Welcome, ' + fio;\n  main_text.innerHTML = \"We will contact you shortly to discuss your order.\" + \"<br>\" + \" Estimated cost of selected services: \" + s_min + \" - \" + s_max + \"$\";\n};\n\n//закриття при кліці на хрестик\nspan.onclick = function () {\n  modal.style.display = \"none\";\n};\n\n// закриття при кліці поза вікном\nwindow.onclick = function (event) {\n  if (event.target == modal) {\n    modal.style.display = \"none\";\n  }\n};\n\n//# sourceURL=webpack://lab5/./src/main.js?");

/***/ }),

/***/ "./src/scss/content.scss":
/*!*******************************!*\
  !*** ./src/scss/content.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab5/./src/scss/content.scss?");

/***/ }),

/***/ "./src/scss/footer.scss":
/*!******************************!*\
  !*** ./src/scss/footer.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab5/./src/scss/footer.scss?");

/***/ }),

/***/ "./src/scss/header.scss":
/*!******************************!*\
  !*** ./src/scss/header.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab5/./src/scss/header.scss?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab5/./src/scss/main.scss?");

/***/ }),

/***/ "./src/scss/reset.scss":
/*!*****************************!*\
  !*** ./src/scss/reset.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab5/./src/scss/reset.scss?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;