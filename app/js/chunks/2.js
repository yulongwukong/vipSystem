webpackJsonp([2],{

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(50)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(54),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/monica/Documents/workspace/逍遥信用/vipSystem/static/page/payPhoneBill/payPhoneBill.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] payPhoneBill.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30c2ac4f", Component.options)
  } else {
    hotAPI.reload("data-v-30c2ac4f", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "/*顶部报错提示*/\n.tips {\n  width: 100%;\n  height: 0.933333rem;\n  position: fixed;\n  top: -0.933333rem;\n  left: 0;\n  text-align: center;\n  font-size: 0.28rem;\n  color: #000;\n  line-height: 0.933333rem;\n  z-index: 9999;\n  white-space: nowrap;\n}\n.tips_error {\n  background: #fff;\n}\n.tips_success {\n  background: #04be02;\n}\n/*顶部报错提示*/\n#contentPage {\n  width: 100%;\n  -webkit-overflow-scrolling: touch;\n  overflow-scrolling: touch;\n  overflow: hidden;\n  height: 100%;\n  position: relative;\n}\n.pull-to-refresh-layer {\n  height: 1.6rem;\n}\n.fade-enter-active,\n.fade-leave-active {\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n.fadeUp-enter-active,\n.fadeUp-leave-active {\n  -webkit-transition: 0.4s all ease-in-out;\n  transition: 0.4s all ease-in-out;\n  -webkit-transform: translateY(0);\n      -ms-transform: translateY(0);\n          transform: translateY(0);\n}\n.fadeUp-enter,\n.fadeUp-leave-to {\n  opacity: 0;\n  -webkit-transform: translateY(50px);\n      -ms-transform: translateY(50px);\n          transform: translateY(50px);\n}\n.fadeDelay-enter-active,\n.fadeDelay-leave-active {\n  -webkit-transition: 0.4s all ease-in-out;\n  transition: 0.4s all ease-in-out;\n  -webkit-transform: translateY(0);\n      -ms-transform: translateY(0);\n          transform: translateY(0);\n}\n.fadeDelay-enter,\n.fadeDelay-leave-to {\n  opacity: 0;\n  -webkit-transform: translateY(50px);\n      -ms-transform: translateY(50px);\n          transform: translateY(50px);\n}\n.wrap {\n  padding-top: 1.04rem;\n}\n.wrap.padding0 {\n  padding-top: 0.88rem;\n}\n.payPhoneBill {\n  width: 100%;\n  overflow: hidden;\n  padding-top: 2rem;\n  text-align: center;\n  font-size: .8rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "payPhoneBill"
  }, [_vm._v("手机充值")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-30c2ac4f", module.exports)
  }
}

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("45614e45", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-30c2ac4f!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/less-loader/index.js!./payPhoneBill.less", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-30c2ac4f!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/less-loader/index.js!./payPhoneBill.less");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        global.beforeRouteName = from.name; //给全局变量赋值
        next();
    },
    mounted: function mounted() {
        //判断浏览器是否支持popstate;
        if (window.history && window.history.pushState) {
            history.pushState(null, null, document.URL);
            window.addEventListener('popstate', this.goBack, false);
        }
    },

    methods: {
        goBack: function goBack() {

            alert("进入的路由名称：" + global.beforeRouteName);

            if (global.beforeRouteName == "payPhoneBill") {
                alert("返回payPhoneBill --  可执行相关操作");
            } else if (global.beforeRouteName == "mpos") {
                alert("返回mpos --  可执行相关操作");
            } else {
                alert("关闭页面");
            }
        }
    },
    destroyed: function destroyed() {
        window.removeEventListener('popstate', this.goBack, false);
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ })

});