/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/render */ "./src/js/render.js");

const render = new _js_render__WEBPACK_IMPORTED_MODULE_0__["default"]();
// render.showShadow()

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./sw.js').then(function (registration) {
      // Успешная регистрация
      console.log('myServiceWorker registration successful');
    }, function (err) {
      // При регистрации произошла ошибка
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

/***/ }),

/***/ "./src/js/fetcher.js":
/*!***************************!*\
  !*** ./src/js/fetcher.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Fetcher; }
/* harmony export */ });
/* harmony import */ var _widgets_errorMessage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets/errorMessage.js */ "./src/js/widgets/errorMessage.js");
/* harmony import */ var _widgets_news_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/news.js */ "./src/js/widgets/news.js");


class Fetcher {
  constructor(container, shadow) {
    this.url = 'https://ahj-workers.onrender.com';
    // this.url = 'http://localhost:3000/index.html';
    this.shadow = shadow;
    this.container = container;
  }
  async getNews() {
    const request = fetch(this.url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await request;
    if (result.status !== 200) {
      const {
        parentElement
      } = this.shadow;
      return parentElement.appendChild(_widgets_errorMessage_js__WEBPACK_IMPORTED_MODULE_0__["default"].showError());
    }
    this.shadow.remove();
    const newsList = JSON.parse(await result.text());
    const news = new _widgets_news_js__WEBPACK_IMPORTED_MODULE_1__["default"](newsList);
    return this.container.appendChild(news.showNews());
  }
}

/***/ }),

/***/ "./src/js/render.js":
/*!**************************!*\
  !*** ./src/js/render.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PageRender; }
/* harmony export */ });
/* harmony import */ var _widgets_shadow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets/shadow.js */ "./src/js/widgets/shadow.js");
/* harmony import */ var _fetcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetcher.js */ "./src/js/fetcher.js");


class PageRender {
  constructor() {
    this.reloader = document.querySelector('.reload');
    this.container = document.querySelector('.news');
    // this.shadow = Shadow.create();
    // this.fetcher = new Fetcher(this.container, this.shadow);
  }
  showShadow() {

    // this.container.appendChild(this.shadow);
  }
  showNews() {
    this.fetcher.getNews();
    this.reloader.addEventListener('click', () => {
      this.container.replaceChildren();
      this.container.appendChild(shadow);
      this.fetcher.getNews();
    });
  }
}

/***/ }),

/***/ "./src/js/widgets/errorMessage.js":
/*!****************************************!*\
  !*** ./src/js/widgets/errorMessage.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ErrorMsg; }
/* harmony export */ });
class ErrorMsg {
  static showError() {
    const div = document.createElement('div');
    div.classList.add('error');
    const p = document.createElement('p');
    p.classList.add('text-error');
    p.textContent = 'Не удалось загрузить данные. Проверьте подключение и обновите страницу';
    div.appendChild(p);
    return div;
  }
}

/***/ }),

/***/ "./src/js/widgets/news.js":
/*!********************************!*\
  !*** ./src/js/widgets/news.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ News; }
/* harmony export */ });
class News {
  constructor({
    newsList
  }) {
    this.newsList = newsList;
  }
  showNews() {
    const ul = document.createElement('ul');
    ul.classList.add('news-list');
    for (let i = 0; i < this.newsList.length; i++) {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = this.newsList[i].timestamp;
      const info = document.createElement('div');
      info.classList.add('info');
      const image = document.createElement('div');
      image.classList.add('image');
      const p = document.createElement('p');
      p.classList.add('description');
      p.textContent = this.newsList[i].description;
      info.appendChild(image);
      info.appendChild(p);
      li.appendChild(span);
      li.appendChild(info);
      ul.appendChild(li);
    }
    return ul;
  }
}

/***/ }),

/***/ "./src/js/widgets/shadow.js":
/*!**********************************!*\
  !*** ./src/js/widgets/shadow.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Shadow; }
/* harmony export */ });
class Shadow {
  static create() {
    const ul = document.createElement('ul');
    ul.classList.add('shadow');
    const li = document.createElement('li');
    const shadowSpan = document.createElement('div');
    shadowSpan.classList.add('shadow-span');
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('shadow-image');
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('shadow-description');
    infoDiv.appendChild(imageDiv);
    infoDiv.appendChild(descriptionDiv);
    li.appendChild(shadowSpan);
    li.appendChild(infoDiv);
    ul.appendChild(li);
    ul.appendChild(li.cloneNode(true));
    ul.appendChild(li.cloneNode(true));
    return ul;
  }
}

/***/ }),

/***/ "./src/css/shadowStyle.css":
/*!*********************************!*\
  !*** ./src/css/shadowStyle.css ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_shadowStyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/shadowStyle.css */ "./src/css/shadowStyle.css");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./src/app.js");



}();
/******/ })()
;
//# sourceMappingURL=main.js.map