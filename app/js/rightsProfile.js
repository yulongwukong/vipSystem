webpackJsonp([3],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _vue2.default();

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var movieTicket = function movieTicket() {
    return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 40));
};

exports.default = [{
    path: "/movieTicket",
    name: "movieTicket",
    component: movieTicket,
    meta: {
        title: "5折看电影",
        keepAlive: false
    }
}];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var mpos = function mpos() {
    return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 41));
};

exports.default = [{
    path: "/mpos",
    name: "mpos",
    component: mpos,
    meta: {
        title: "mpos",
        keepAlive: false
    }
}];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var payPhoneBill = function payPhoneBill() {
    return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 42));
};

exports.default = [{
    path: "/payPhoneBill",
    name: "payPhoneBill",
    component: payPhoneBill,
    meta: {
        title: "8折话费",
        keepAlive: false
    }
}];

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/less-loader/index.js!./rightsProfile.less", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/postcss-loader/index.js!../../node_modules/less-loader/index.js!./rightsProfile.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, __dirname) {

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(17);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Rights = __webpack_require__(55);

var _Rights2 = _interopRequireDefault(_Rights);

__webpack_require__(15);

var _bus = __webpack_require__(0);

var _bus2 = _interopRequireDefault(_bus);

var _mpos = __webpack_require__(11);

var _mpos2 = _interopRequireDefault(_mpos);

var _movieTicket = __webpack_require__(10);

var _movieTicket2 = _interopRequireDefault(_movieTicket);

var _payPhoneBill = __webpack_require__(12);

var _payPhoneBill2 = _interopRequireDefault(_payPhoneBill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

global.beforeRouteName = "";

var routes = [].concat(_toConsumableArray(_mpos2.default), _toConsumableArray(_movieTicket2.default), _toConsumableArray(_payPhoneBill2.default));

_vue2.default.use(_vueRouter2.default);
var router = new _vueRouter2.default({
    base: __dirname,
    routes: routes
}); //这里可以带有路由器的配置参数

router.beforeEach(function (to, from, next) {

    var toPath = to.name;
    _bus2.default.$emit('isLoading', true);

    document.title = to.meta.title;
    next();
});

router.afterEach(function (to, from) {
    _bus2.default.$emit('isLoading', false);
});

var app = new _vue2.default({
    router: router,
    // store,
    render: function render(h) {
        return h(_Rights2.default);
    }
}).$mount('#root');
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), "/"))

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _bus = __webpack_require__(0);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		return {
			isLoading: false
		};
	},
	mounted: function mounted() {
		var _this = this;

		_bus2.default.$on('isLoading', function (content) {
			_this.isLoading = content;
		});
	}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/*顶部报错提示*/\n.tips {\n  width: 100%;\n  height: 0.933333rem;\n  position: fixed;\n  top: -0.933333rem;\n  left: 0;\n  text-align: center;\n  font-size: 0.28rem;\n  color: #000;\n  line-height: 0.933333rem;\n  z-index: 9999;\n  white-space: nowrap;\n}\n.tips_error {\n  background: #fff;\n}\n.tips_success {\n  background: #04be02;\n}\n/*顶部报错提示*/\n#contentPage {\n  width: 100%;\n  -webkit-overflow-scrolling: touch;\n  overflow-scrolling: touch;\n  overflow: hidden;\n  height: 100%;\n  position: relative;\n}\n.pull-to-refresh-layer {\n  height: 1.6rem;\n}\n.fade-enter-active,\n.fade-leave-active {\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n.fadeUp-enter-active,\n.fadeUp-leave-active {\n  -webkit-transition: 0.4s all ease-in-out;\n  transition: 0.4s all ease-in-out;\n  -webkit-transform: translateY(0);\n      -ms-transform: translateY(0);\n          transform: translateY(0);\n}\n.fadeUp-enter,\n.fadeUp-leave-to {\n  opacity: 0;\n  -webkit-transform: translateY(50px);\n      -ms-transform: translateY(50px);\n          transform: translateY(50px);\n}\n.fadeDelay-enter-active,\n.fadeDelay-leave-active {\n  -webkit-transition: 0.4s all ease-in-out;\n  transition: 0.4s all ease-in-out;\n  -webkit-transform: translateY(0);\n      -ms-transform: translateY(0);\n          transform: translateY(0);\n}\n.fadeDelay-enter,\n.fadeDelay-leave-to {\n  opacity: 0;\n  -webkit-transform: translateY(50px);\n      -ms-transform: translateY(50px);\n          transform: translateY(50px);\n}\n.wrap {\n  padding-top: 1.04rem;\n}\n.wrap.padding0 {\n  padding-top: 0.88rem;\n}\n.rightsProfile {\n  width: 100%;\n  overflow: hidden;\n}\n.rightsProfile .rightsProfile_head {\n  width: 100%;\n  height: 1rem;\n  background: #cccccc;\n  font-size: .32rem;\n  color: #333;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/*loading加载*/\n.loadPage[data-v-8e9e1b7a] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 99999;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n.loadPage .loading[data-v-8e9e1b7a] {\n  width: 3.2rem;\n  padding: 0.52rem 0 0.54rem;\n  background: rgba(255, 255, 255, 0.9);\n  position: relative;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  border-radius: 0.15rem;\n  text-align: center;\n}\n.loadPage .loading img[data-v-8e9e1b7a] {\n  width: 1.0rem;\n  height: 1.0rem;\n  display: block;\n  margin: 0 auto;\n  -webkit-animation: loading 0.8s linear infinite;\n  animation: loading 0.8s linear infinite;\n}\n.loadPage .loading p[data-v-8e9e1b7a] {\n  color: #3D4A5B;\n  opacity: 0.9;\n  font-size: 0.28rem;\n  margin-top: 0.34rem;\n}\n@-webkit-keyframes loading {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes loading {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n/*loading加载*/\n", ""]);

// exports


/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(36)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(34),
  /* scopeId */
  "data-v-8e9e1b7a",
  /* cssModules */
  null
)
Component.options.__file = "/Users/monica/Documents/workspace/逍遥信用/vipSystem/static/components/loading.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] loading.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8e9e1b7a", Component.options)
  } else {
    hotAPI.reload("data-v-8e9e1b7a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isLoading),
      expression: "isLoading"
    }],
    staticClass: "loadPage"
  }, [_vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "loading"
  }, [_c('img', {
    attrs: {
      "src": "image/icon_loading.png"
    }
  }), _vm._v(" "), _c('p', [_vm._v("数据加载中")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8e9e1b7a", module.exports)
  }
}

/***/ }),
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("876e839c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8e9e1b7a&scoped=true!../../node_modules/postcss-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./loading.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8e9e1b7a&scoped=true!../../node_modules/postcss-loader/index.js!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./loading.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(59)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(58),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/monica/Documents/workspace/逍遥信用/vipSystem/static/Rights.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Rights.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b2a56f7", Component.options)
  } else {
    hotAPI.reload("data-v-2b2a56f7", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _loading = __webpack_require__(33);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		return {
			myNavBar: [{
				title: "移动机具",
				active: true,
				mark: "mpos"
			}, {
				title: "8折话费",
				active: false,
				mark: "payPhoneBill"
			}, {
				title: "5折看电影",
				active: false,
				mark: "movieTicket"
			}, {
				title: "家用",
				active: false
			}, {
				title: "家用电器",
				active: false
			}, {
				title: "家用",
				active: false
			}],
			routerName: ""
		};
	},

	components: {
		Loading: _loading2.default
	},
	watch: {
		$route: function $route(to, from) {
			// console.log(this.$route.name);
			var routerName = this.$route.name;
			this.myNavBar.map(function (el) {
				el.active = false;
				if (el.mark == routerName) {
					el.active = true;
				}
			});
		}
	},
	mounted: function mounted() {
		var _this = this;

		this.$nextTick(function () {

			var that = _this;
			var myNav = new Swiper('#nav', {
				freeMode: true,
				freeModeMomentumRatio: 0.5,
				slidesPerView: '3'
			});
			var swiperWidth = myNav.container[0].clientWidth;
			var maxTranslate = myNav.maxTranslate();
			var maxWidth = -maxTranslate + swiperWidth / 2;

			myNav.on("tap", function (swiper, e) {

				var slide = swiper.slides[swiper.clickedIndex];
				var slideLeft = slide.offsetLeft;
				var slideWidth = slide.clientWidth;
				var slideCenter = slideLeft + slideWidth / 2;

				// 被点击slide的中心点
				myNav.setWrapperTransition(300);
				if (slideCenter < swiperWidth / 2) {
					myNav.setWrapperTranslate(0);
				} else if (slideCenter > maxWidth) {
					myNav.setWrapperTranslate(maxTranslate);
				} else {
					var nowTlanslate = slideCenter - swiperWidth / 2;
					myNav.setWrapperTranslate(-nowTlanslate);
				}

				that.myNavBar.map(function (el) {
					el.active = false;
				});
				that.myNavBar[swiper.clickedIndex].active = true;
				that.$router.push({
					path: that.myNavBar[swiper.clickedIndex].mark
				});
			});
		});
	}
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n#nav {\n  height: 100%;\n}\n#nav .swiper-wrapper {\n  height: 100%;\n}\n#nav .swiper-wrapper li {\n  text-align: center;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n#nav .swiper-wrapper li.active-nav {\n  color: #fff;\n  background: #ddd !important;\n}\n#nav .swiper-wrapper li.active-nav a {\n  color: #fff;\n  background: #ddd !important;\n}\n", ""]);

// exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "page"
    }
  }, [_c('Loading', {
    attrs: {
      "isLoading": _vm.isLoading
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "rightsProfile"
  }, [_c('div', {
    staticClass: "rightsProfile_head"
  }, [_c('div', {
    staticClass: "swiper-container",
    attrs: {
      "id": "nav"
    }
  }, [_c('ul', {
    staticClass: "swiper-wrapper"
  }, _vm._l((_vm.myNavBar), function(i) {
    return _c('li', {
      key: i,
      staticClass: "swiper-slide",
      class: {
        'active-nav': i.active
      }
    }, [_vm._v("\n                            " + _vm._s(i.title) + "\n                        ")])
  }))])])]), _vm._v(" "), _c('keep-alive', [(_vm.$route.meta.keepAlive) ? _c('router-view') : _vm._e()], 1), _vm._v(" "), (!_vm.$route.meta.keepAlive) ? _c('router-view') : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2b2a56f7", module.exports)
  }
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("570a1b32", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2b2a56f7!../node_modules/postcss-loader/index.js!../node_modules/less-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Rights.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2b2a56f7!../node_modules/postcss-loader/index.js!../node_modules/less-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Rights.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })
],[21]);