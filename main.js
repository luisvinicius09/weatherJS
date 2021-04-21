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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/js/weather.js\");\n\r\n\r\nlet searchField,\r\n  searchBtn,\r\n  errorElement = undefined;\r\n\r\nwindow.addEventListener('load', () => {\r\n  searchField = document.querySelector('#search-input');\r\n  searchBtn = document.querySelector('#search-button');\r\n\r\n  errorElement = document.querySelector('#error-message');\r\n\r\n  searchBtn.addEventListener('click', () => {\r\n    (0,_weather__WEBPACK_IMPORTED_MODULE_0__.retrieveData)(searchField.value);\r\n\r\n    searchField.value = '';\r\n    errorElement.innerText = '';\r\n  })\r\n\r\n  ;(0,_weather__WEBPACK_IMPORTED_MODULE_0__.retrieveData)('New York');\r\n})\r\n\r\n\r\n// const retrieveData = async (city) => {\r\n//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;\r\n//   try {\r\n//     const res = await fetch(url, {\r\n//       method: 'POST',\r\n//       mode: 'cors',\r\n//     });\r\n//     if(res.status !== 200) {\r\n//       throw 'Ops, something went wrong!'\r\n//     }\r\n//     const data = await res.json();\r\n//     displayData(filterData(data));\r\n//     displayGifs();\r\n//   } catch (err) {\r\n//     displayError(err)\r\n//     return err\r\n//   }\r\n// }\r\n\r\n// const convertTemperature = (t) => {\r\n//   return Math.round((t - 273.15).toFixed(2));\r\n// }\r\n\r\n// const filterData = (obj) => {\r\n//   let name = obj.name;\r\n//   let country = obj.sys.country;\r\n//   let { description: desc, icon } = obj.weather[0];\r\n//   let {\r\n//     temp: main,\r\n//     temp_max: max,\r\n//     temp_min: min,\r\n//     feels_like: feels,\r\n//     humidity\r\n//   } = obj.main;\r\n\r\n//   return {\r\n//     name,\r\n//     country,\r\n//     desc,\r\n//     icon,\r\n//     main,\r\n//     max,\r\n//     min,\r\n//     feels,\r\n//     humidity\r\n//   };\r\n// };\r\n\r\n// const displayData = (obj) => {\r\n//   mainTemp.innerText = convertTemperature(obj.main);\r\n//   maxTemp.innerText = convertTemperature(obj.max);\r\n//   minTemp.innerText = convertTemperature(obj.min);\r\n//   feelsLike.innerText = convertTemperature(obj.feels);\r\n//   humidity.innerText = obj.humidity;\r\n//   cityName.innerText = obj.name;\r\n//   countryName.innerText = obj.country;\r\n// }\r\n\r\n// const displayGifs = () => {\r\n//   gifElement.src = 'https://media.giphy.com/media/3oFyD4xKncK6ptR7qg/giphy.gif';\r\n//   gifElement.alt = 'GIF'\r\n// }\r\n\r\n// const displayError = (msg) => {\r\n//   errorElement.innerText = msg\r\n// }\n\n//# sourceURL=webpack://weatherJS/./src/js/index.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertTemperature\": () => (/* binding */ convertTemperature)\n/* harmony export */ });\nconst convertTemperature = (t) => {\r\n  return (t - 273.15).toFixed(0);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weatherJS/./src/js/utils.js?");

/***/ }),

/***/ "./src/js/weather.js":
/*!***************************!*\
  !*** ./src/js/weather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"retrieveData\": () => (/* binding */ retrieveData)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\r\n\r\nlet mainTemp,\r\n  minTemp,\r\n  maxTemp,\r\n  feelsLike,\r\n  humidity,\r\n  cityName,\r\n  countryName,\r\n  gifElement,\r\n  errorElement = undefined;\r\n\r\n  mainTemp = document.querySelector('#main-temp');\r\n  minTemp = document.querySelector('#min-temp');\r\n  maxTemp = document.querySelector('#max-temp');\r\n  feelsLike = document.querySelector('#feels-like');\r\n  humidity = document.querySelector('#humidity');\r\n\r\n  cityName = document.querySelector('#city-name');\r\n  countryName = document.querySelector('#country-name');\r\n\r\n  gifElement = document.querySelector('#weather-gif');\r\n\r\n  errorElement = document.querySelector('#error-message');\r\n\r\nconst API_KEY = '1b0ad98e107c7466ad627bfc4b878e26';\r\n\r\n\r\nconst retrieveData = async (city) => {\r\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;\r\n  try {\r\n    const res = await fetch(url, {\r\n      method: 'POST',\r\n      mode: 'cors',\r\n    });\r\n    if(res.status !== 200) {\r\n      throw 'Ops, something went wrong!'\r\n    }\r\n    const data = await res.json();\r\n    displayData(filterData(data));\r\n    displayGifs();\r\n  } catch (err) {\r\n    displayError(err)\r\n    return err\r\n  }\r\n};\r\n\r\nconst filterData = (obj) => {\r\n  let name = obj.name;\r\n  let country = obj.sys.country;\r\n  let { description: desc, icon } = obj.weather[0];\r\n  let {\r\n    temp: main,\r\n    temp_max: max,\r\n    temp_min: min,\r\n    feels_like: feels,\r\n    humidity\r\n  } = obj.main;\r\n\r\n  return {\r\n    name,\r\n    country,\r\n    desc,\r\n    icon,\r\n    main,\r\n    max,\r\n    min,\r\n    feels,\r\n    humidity\r\n  };\r\n};\r\n\r\nconst displayData = (obj) => {\r\n  mainTemp.innerText = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.convertTemperature)(obj.main);\r\n  maxTemp.innerText = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.convertTemperature)(obj.max);\r\n  minTemp.innerText = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.convertTemperature)(obj.min);\r\n  feelsLike.innerText = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.convertTemperature)(obj.feels);\r\n  humidity.innerText = obj.humidity;\r\n  cityName.innerText = obj.name;\r\n  countryName.innerText = obj.country;\r\n};\r\n\r\nconst displayGifs = () => {\r\n  gifElement.src = 'https://media.giphy.com/media/3oFyD4xKncK6ptR7qg/giphy.gif';\r\n  gifElement.alt = 'GIF'\r\n};\r\n\r\nconst displayError = (msg) => {\r\n  errorElement.innerText = msg\r\n};\r\n\r\n\n\n//# sourceURL=webpack://weatherJS/./src/js/weather.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;