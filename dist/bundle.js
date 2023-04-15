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

/***/ "./src/components/Button/button.ts":
/*!*****************************************!*\
  !*** ./src/components/Button/button.ts ***!
  \*****************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Shorthand property assignments are valid only in destructuring patterns (8:16)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|     static get observedAttributes() {\\n|         const titattrs = {\\n>             cat = null,\\n|         };\\n|         return Object.keys(titattrs);\");\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Button/button.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonCategories\": () => (/* reexport safe */ _Button_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"JKDisplay\": () => (/* reexport safe */ _jokeDisplay_jokeDisplay__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"JkText\": () => (/* reexport safe */ _jokeText_jokeText__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"Title\": () => (/* reexport default from dynamic */ _title_title__WEBPACK_IMPORTED_MODULE_1___default.a)\n/* harmony export */ });\n/* harmony import */ var _Button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button/button */ \"./src/components/Button/button.ts\");\n/* harmony import */ var _title_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title/title */ \"./src/components/title/title.ts\");\n/* harmony import */ var _title_title__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_title_title__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _jokeText_jokeText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jokeText/jokeText */ \"./src/components/jokeText/jokeText.ts\");\n/* harmony import */ var _jokeDisplay_jokeDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jokeDisplay/jokeDisplay */ \"./src/components/jokeDisplay/jokeDisplay.ts\");\n\n\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/components/jokeDisplay/jokeDisplay.ts":
/*!***************************************************!*\
  !*** ./src/components/jokeDisplay/jokeDisplay.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ JKDisplay)\n/* harmony export */ });\nclass JKDisplay extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = `\r\n        <main-title></main-title>\r\n        <section>\r\n            <cat-button></cat-button>\r\n        </section>\r\n        <joke-text>\r\n        `;\n    }\n}\ncustomElements.define('jk-display', JKDisplay);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/jokeDisplay/jokeDisplay.ts?");

/***/ }),

/***/ "./src/components/jokeText/jokeText.ts":
/*!*********************************************!*\
  !*** ./src/components/jokeText/jokeText.ts ***!
  \*********************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Shorthand property assignments are valid only in destructuring patterns (8:17)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|     static get observedAttributes() {\\n|         const jkTextattrs = {\\n>             text = null\\n|         };\\n|         return Object.keys(jkTextattrs);\");\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/jokeText/jokeText.ts?");

/***/ }),

/***/ "./src/components/title/title.ts":
/*!***************************************!*\
  !*** ./src/components/title/title.ts ***!
  \***************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Shorthand property assignments are valid only in destructuring patterns (8:19)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|     static get observedAttributes() {\\n|         const titattrs = {\\n>             tittle = null\\n|         };\\n|         return Object.keys(titattrs);\");\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/title/title.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const appCont = this.ownerDocument.createElement('app-container');\n        const appDashboard = this.ownerDocument.createElement('jk-display');\n        appCont.appendChild(appDashboard);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(appCont);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;