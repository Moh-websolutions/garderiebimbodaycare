webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MainIntro.js":
/*!*********************************!*\
  !*** ./components/MainIntro.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "W:\\bimbo2020\\react\\garderiebimbodaycare\\components\\MainIntro.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





 //import $ from 'jquery';
//import Bootstrap from 'react-bootstrap';



var Mainintro = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Mainintro, _React$Component);

  var _super = _createSuper(Mainintro);

  function Mainintro() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Mainintro);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Mainintro, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
          var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
          doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
          var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
          doAnimations($animatingElements);
        });
        BasicSlider.slick({
          autoplay: false,
          autoplaySpeed: 10000,
          dots: false,
          fade: true,
          arrows: false,
          prevArrow: '<button type="button" class="slick-prev"><i class="ti-shift-left"></i></button>',
          nextArrow: '<button type="button" class="slick-next"><i class="ti-shift-right"></i></button>',
          responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }, {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }, {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }]
        });

        function doAnimations(elements) {
          var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
              'animation-delay': $animationDelay,
              '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
              $this.removeClass($animationType);
            });
          });
        }
      }

      mainSlider();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
            children: "Bimbo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
            name: "description",
            content: "We believe it is important to provide an environment where every child feels safe and secure while they're away from home. "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "shortcut icon",
            href: "/assets/img/favicon/favicon.ico",
            type: "image/x-icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/assets/img/favicon/favicon-32x32.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "icon",
            type: "image/png",
            sizes: "96x96",
            href: "/assets/img/favicon/favicon-96x96.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/assets/img/favicon/favicon-16x16.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "apple-touch-icon",
            sizes: "57x57",
            href: "/assets/img/favicon/apple-icon-57x57.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "apple-touch-icon",
            sizes: "60x60",
            href: "/assets/img/favicon/apple-icon-60x60.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "apple-touch-icon",
            sizes: "72x72",
            href: "/assets/img/favicon/apple-icon-72x72.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "apple-touch-icon",
            sizes: "76x76",
            href: "/assets/img/favicon/apple-icon-76x76.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "apple-touch-icon",
            sizes: "114x114",
            href: "/assets/img/favicon/apple-icon-114x114.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "apple-touch-icon",
            sizes: "120x120",
            href: "/assets/img/favicon/apple-icon-120x120.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "apple-touch-icon",
            sizes: "144x144",
            href: "/assets/img/favicon/apple-icon-144x144.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "apple-touch-icon",
            sizes: "152x152",
            href: "/assets/img/favicon/apple-icon-152x152.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/assets/img/favicon/apple-icon-180x180.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "apple-touch-icon-precomposed",
            href: "/assets/img/favicon/android-icon-192x192.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "apple-touch-icon-precomposed",
            href: "/assets/img/favicon/android-icon-144x144.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "apple-touch-icon-precomposed",
            href: "/assets/img/favicon/android-icon-96x96.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "apple-touch-icon-precomposed",
            href: "/assets/img/favicon/images/android-icon-72x72.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "apple-touch-icon-precomposed",
            href: "/assets/img/favicon/android-icon-48x48.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "apple-touch-icon-precomposed",
            href: "/assets/img/favicon/android-icon-36x36.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            href: "../assets/css/animate.min.css",
            rel: "stylesheet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            href: "../assets/css/bootstrap.min.css",
            rel: "stylesheet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            href: "../assets/css/slick.css",
            rel: "stylesheet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            href: "../assets/css/slicknav.css",
            rel: "stylesheet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            href: "../assets/css/style.css",
            rel: "stylesheet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            href: "../assets/css/responsive.css",
            rel: "stylesheet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            href: "../assets/css/lightgallery.css",
            rel: "stylesheet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            href: "https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,800,900|Poppins:300,400,500,600,700,800,900&display=swap",
            rel: "stylesheet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "preconnect",
            href: "https://fonts.gstatic.com"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;700&display=swap",
            rel: "stylesheet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            href: "../assets/fonts/fontawesome/css/all.css",
            rel: "stylesheet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            href: "https://unpkg.com/aos@2.3.1/dist/aos.css",
            rel: "stylesheet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
            "data-aos": "fade-in",
            "data-aos-duration": "1500",
            children: this.props.children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "../assets/js/jquery-1.12.4.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "../assets/js/jquery.slicknav.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "../assets/js/jquery.sticky.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "../assets/js/slick.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "../assets/js/wow.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "../assets/js/jquery.scrollUp.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "../assets/js/colors-circles.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "../assets/gallery-assets/js/lightgallery.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "../assets/gallery-assets/js/lg-thumbnail.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "../assets/gallery-assets/lib/jquery.mousewheel.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "../assets/js/main.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 17
        }, this)]
      }, void 0, true);
    }
  }]);

  return Mainintro;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Mainintro);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluSW50cm8uanMiXSwibmFtZXMiOlsiTWFpbmludHJvIiwibWFpblNsaWRlciIsIkJhc2ljU2xpZGVyIiwiJCIsIm9uIiwiZSIsInNsaWNrIiwiJGZpcnN0QW5pbWF0aW5nRWxlbWVudHMiLCJmaW5kIiwiZG9BbmltYXRpb25zIiwiY3VycmVudFNsaWRlIiwibmV4dFNsaWRlIiwiJGFuaW1hdGluZ0VsZW1lbnRzIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiZG90cyIsImZhZGUiLCJhcnJvd3MiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJpbmZpbml0ZSIsImVsZW1lbnRzIiwiYW5pbWF0aW9uRW5kRXZlbnRzIiwiZWFjaCIsIiR0aGlzIiwiJGFuaW1hdGlvbkRlbGF5IiwiZGF0YSIsIiRhbmltYXRpb25UeXBlIiwiY3NzIiwiYWRkQ2xhc3MiLCJvbmUiLCJyZW1vdmVDbGFzcyIsInByb3BzIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFDQTs7SUFHTUEsUzs7Ozs7Ozs7Ozs7Ozt3Q0FFZ0I7QUFHbEIsZUFBU0MsVUFBVCxHQUFzQjtBQUNwQixZQUFJQyxXQUFXLEdBQUdDLENBQUMsQ0FBQyxnQkFBRCxDQUFuQjtBQUNBRCxtQkFBVyxDQUFDRSxFQUFaLENBQWUsTUFBZixFQUF1QixVQUFVQyxDQUFWLEVBQWFDLEtBQWIsRUFBb0I7QUFDekMsY0FBSUMsdUJBQXVCLEdBQUdKLENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDSyxJQUFoQyxDQUFxQyxrQkFBckMsQ0FBOUI7QUFDQUMsc0JBQVksQ0FB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QUFRLGFBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBL0NKLGVBZ0RJO0FBQVEsYUFBRyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoREosZUFpREk7QUFBUSxhQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpESixlQWtESTtBQUFRLGFBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbERKLGVBbURJO0FBQVEsYUFBRyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuREosZUFxREk7QUFBUSxhQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJESixlQXNESTtBQUFRLGFBQUcsRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdERKLGVBdURJO0FBQVEsYUFBRyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2REosZUF3REk7QUFBUSxhQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXhESjtBQUFBLHNCQURKO0FBOERIOzs7O0VBdkltQkMsNENBQUssQ0FBQ0MsUzs7QUEwSWZ4Qyx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jZDI0MDllZDRmNzQ4MWU0NDNhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuLy9pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG4vL2ltcG9ydCBCb290c3RyYXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IEFPUyBmcm9tIFwiYW9zXCI7XHJcblxyXG5cclxuY2xhc3MgTWFpbmludHJvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuIFxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBtYWluU2xpZGVyKCkge1xyXG4gICAgICB2YXIgQmFzaWNTbGlkZXIgPSAkKCcuc2xpZGVyLWFjdGl2ZScpO1xyXG4gICAgICBCYXNpY1NsaWRlci5vbignaW5pdCcsIGZ1bmN0aW9uIChlLCBzbGljaykge1xyXG4gICAgICAgIHZhciAkZmlyc3RBbmltYXRpbmdFbGVtZW50cyA9ICQoJy5zaW5nbGUtc2xpZGVyOmZpcnN0LWNoaWxkJykuZmluZCgnW2RhdGEtYW5pbWF0aW9uXScpO1xyXG4gICAgICAgIGRvQW5pbWF0aW9ucygkZmlyc3RBbmltYXRpbmdFbGVtZW50cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBCYXNpY1NsaWRlci5vbignYmVmb3JlQ2hhbmdlJywgZnVuY3Rpb24gKGUsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkge1xyXG4gICAgICAgIHZhciAkYW5pbWF0aW5nRWxlbWVudHMgPSAkKCcuc2luZ2xlLXNsaWRlcltkYXRhLXNsaWNrLWluZGV4PVwiJyArIG5leHRTbGlkZSArICdcIl0nKS5maW5kKCdbZGF0YS1hbmltYXRpb25dJyk7XHJcbiAgICAgICAgZG9BbmltYXRpb25zKCRhbmltYXRpbmdFbGVtZW50cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBCYXNpY1NsaWRlci5zbGljayh7XHJcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDEwMDAwLFxyXG4gICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgIGZhZGU6IHRydWUsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXZcIj48aSBjbGFzcz1cInRpLXNoaWZ0LWxlZnRcIj48L2k+PC9idXR0b24+JyxcclxuICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHRcIj48aSBjbGFzcz1cInRpLXNoaWZ0LXJpZ2h0XCI+PC9pPjwvYnV0dG9uPicsXHJcbiAgICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgIGFycm93czogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgZnVuY3Rpb24gZG9BbmltYXRpb25zKGVsZW1lbnRzKSB7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvbkVuZEV2ZW50cyA9ICd3ZWJraXRBbmltYXRpb25FbmQgbW96QW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQgYW5pbWF0aW9uZW5kJztcclxuICAgICAgICBlbGVtZW50cy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICB2YXIgJGFuaW1hdGlvbkRlbGF5ID0gJHRoaXMuZGF0YSgnZGVsYXknKTtcclxuICAgICAgICAgIHZhciAkYW5pbWF0aW9uVHlwZSA9ICdhbmltYXRlZCAnICsgJHRoaXMuZGF0YSgnYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgICAkdGhpcy5jc3Moe1xyXG4gICAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogJGFuaW1hdGlvbkRlbGF5LFxyXG4gICAgICAgICAgICAnLXdlYmtpdC1hbmltYXRpb24tZGVsYXknOiAkYW5pbWF0aW9uRGVsYXlcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJGFuaW1hdGlvblR5cGUpLm9uZShhbmltYXRpb25FbmRFdmVudHMsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJGFuaW1hdGlvblR5cGUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG1haW5TbGlkZXIoKTtcclxufTtcclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkJpbWJvPC90aXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiV2UgYmVsaWV2ZSBpdCBpcyBpbXBvcnRhbnQgdG8gcHJvdmlkZSBhbiBlbnZpcm9ubWVudCB3aGVyZSBldmVyeSBjaGlsZCBmZWVscyBzYWZlIGFuZCBzZWN1cmUgd2hpbGUgdGhleSdyZSBhd2F5IGZyb20gaG9tZS4gXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9hc3NldHMvaW1nL2Zhdmljb24vZmF2aWNvbi5pY29cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiL2Fzc2V0cy9pbWcvZmF2aWNvbi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjk2eDk2XCIgaHJlZj1cIi9hc3NldHMvaW1nL2Zhdmljb24vZmF2aWNvbi05Nng5Ni5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvYXNzZXRzL2ltZy9mYXZpY29uL2Zhdmljb24tMTZ4MTYucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI1N3g1N1wiIGhyZWY9XCIvYXNzZXRzL2ltZy9mYXZpY29uL2FwcGxlLWljb24tNTd4NTcucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI2MHg2MFwiIGhyZWY9XCIvYXNzZXRzL2ltZy9mYXZpY29uL2FwcGxlLWljb24tNjB4NjAucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI3Mng3MlwiIGhyZWY9XCIvYXNzZXRzL2ltZy9mYXZpY29uL2FwcGxlLWljb24tNzJ4NzIucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI3Nng3NlwiIGhyZWY9XCIvYXNzZXRzL2ltZy9mYXZpY29uL2FwcGxlLWljb24tNzZ4NzYucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMTR4MTE0XCIgaHJlZj1cIi9hc3NldHMvaW1nL2Zhdmljb24vYXBwbGUtaWNvbi0xMTR4MTE0LnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTIweDEyMFwiIGhyZWY9XCIvYXNzZXRzL2ltZy9mYXZpY29uL2FwcGxlLWljb24tMTIweDEyMC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE0NHgxNDRcIiBocmVmPVwiL2Fzc2V0cy9pbWcvZmF2aWNvbi9hcHBsZS1pY29uLTE0NHgxNDQucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgaHJlZj1cIi9hc3NldHMvaW1nL2Zhdmljb24vYXBwbGUtaWNvbi0xNTJ4MTUyLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvYXNzZXRzL2ltZy9mYXZpY29uL2FwcGxlLWljb24tMTgweDE4MC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb24tcHJlY29tcG9zZWRcIiBocmVmPVwiL2Fzc2V0cy9pbWcvZmF2aWNvbi9hbmRyb2lkLWljb24tMTkyeDE5Mi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb24tcHJlY29tcG9zZWRcIiBocmVmPVwiL2Fzc2V0cy9pbWcvZmF2aWNvbi9hbmRyb2lkLWljb24tMTQ0eDE0NC5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb24tcHJlY29tcG9zZWRcIiBocmVmPVwiL2Fzc2V0cy9pbWcvZmF2aWNvbi9hbmRyb2lkLWljb24tOTZ4OTYucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uLXByZWNvbXBvc2VkXCIgaHJlZj1cIi9hc3NldHMvaW1nL2Zhdmljb24vaW1hZ2VzL2FuZHJvaWQtaWNvbi03Mng3Mi5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb24tcHJlY29tcG9zZWRcIiBocmVmPVwiL2Fzc2V0cy9pbWcvZmF2aWNvbi9hbmRyb2lkLWljb24tNDh4NDgucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uLXByZWNvbXBvc2VkXCIgaHJlZj1cIi9hc3NldHMvaW1nL2Zhdmljb24vYW5kcm9pZC1pY29uLTM2eDM2LnBuZ1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIuLi9hc3NldHMvY3NzL2FuaW1hdGUubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCIuLi9hc3NldHMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi4uL2Fzc2V0cy9jc3Mvc2xpY2suY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi4uL2Fzc2V0cy9jc3Mvc2xpY2tuYXYuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi4uL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi4uL2Fzc2V0cy9jc3MvcmVzcG9uc2l2ZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiLi4vYXNzZXRzL2Nzcy9saWdodGdhbGxlcnkuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86MzAwLDQwMCw2MDAsNzAwLDgwMCw5MDB8UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwLDgwMCw5MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ETStTYW5zOndnaHRANTAwOzcwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGluayAgaHJlZj1cIi4uL2Fzc2V0cy9mb250cy9mb250YXdlc29tZS9jc3MvYWxsLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9hb3NAMi4zLjEvZGlzdC9hb3MuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bWFpbiBkYXRhLWFvcz1cImZhZGUtaW5cIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjE1MDBcIj4gIFxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL2pzL2pxdWVyeS0xLjEyLjQubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9qcy9qcXVlcnkuc2xpY2tuYXYubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9qcy9qcXVlcnkuc3RpY2t5LmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9qcy9zbGljay5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL2pzL3dvdy5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL2pzL2pxdWVyeS5zY3JvbGxVcC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL2pzL2NvbG9ycy1jaXJjbGVzLmpzXCI+PC9zY3JpcHQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvZ2FsbGVyeS1hc3NldHMvanMvbGlnaHRnYWxsZXJ5LmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9nYWxsZXJ5LWFzc2V0cy9qcy9sZy10aHVtYm5haWwuanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL2dhbGxlcnktYXNzZXRzL2xpYi9qcXVlcnkubW91c2V3aGVlbC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL2pzL21haW4uanNcIj48L3NjcmlwdD5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluaW50cm9cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==