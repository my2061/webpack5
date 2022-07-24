
 (() => { 
 	"use strict";
 	var __webpack_modules__ = ({

 "./src/handler.js":

((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst obj = {\r\n    handler1(){\r\n        return obj.handler2();\r\n    },\r\n    handler2(){\r\n        return \"handler2\";\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (obj);\n\n//# sourceURL=webpack:///./src/handler.js?");

}),

 "./src/index.js":

((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler */ \"./src/handler.js\");\n\r\n\r\n// await new Promise((resolve, reject)=>{\r\n//     setTimeout(()=>{\r\n//         resolve(1);\r\n//     }, 1000)\r\n// }).then(data=>{\r\n//     console.log(data);\r\n// })\r\n\r\nconst init = () => {\r\n    const result = _handler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].handler1();\r\n    console.log(\"init\" + result);\r\n}\r\n\r\ninit();\r\n\r\n// import gif from \"../assets/123.gif\";\r\n// import png from \"../assets/456.png\";\r\n// import txt from \"../assets/789.txt\";\r\n// import jpg from \"../assets/91011.jpg\";\r\n\r\n// console.log(\"gif\", gif);\t//期望输出结果根据文件大小决定是否是路径还是base64\r\n// console.log(\"png\", png);\t//期望输出结果是路径\r\n// console.log(\"txt\", txt);\t//期望输出结果是原始内容\r\n// console.log(\"jpg\", jpg);\t//期望输出结果是base64\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

})

 	});
 	var __webpack_module_cache__ = {};
 	
 	function __webpack_require__(moduleId) {
 		var cachedModule = __webpack_module_cache__[moduleId];
 		if (cachedModule !== undefined) {
 			return cachedModule.exports;
 		}
 		var module = __webpack_module_cache__[moduleId] = {
 			exports: {}
 		};
 	
 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
 		return module.exports;
 	}
 	
 	(() => {
 		__webpack_require__.d = (exports, definition) => {
 			for(var key in definition) {
 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
 				}
 			}
 		};
 	})();
 	(() => {
 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
 	})();
 	
 	(() => {
 		__webpack_require__.r = (exports) => {
 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 			}
 			Object.defineProperty(exports, '__esModule', { value: true });
 		};
 	})();
 	
 	var __webpack_exports__ = __webpack_require__("./src/index.js");
 })()
;