webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Article.js":
/*!*******************************!*\
  !*** ./components/Article.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Luis\\Desktop\\udemy\\ReactNuevo\\bitcoins\\components\\Article.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Article = function Article(props) {
  var _props$article = props.article,
      urlToImage = _props$article.urlToImage,
      url = _props$article.url,
      title = _props$article.title,
      description = _props$article.description,
      source = _props$article.source;
  var image = '';

  if (urlToImage !== '') {
    image = __jsx("img", {
      src: urlToImage,
      alt: title,
      className: "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }

  return __jsx("div", {
    className: "col-md-6 col-12 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "card-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, image)));
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ })

})
//# sourceMappingURL=index.js.f4ed24dc3089ddfb03bc.hot-update.js.map