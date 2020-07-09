(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/scroller/scroller"],{

/***/ 265:
/*!****************************************************************************************!*\
  !*** D:/vuepackage2/AplmuV0.4 (3) (2) - 副本 - 副本 - 副本/components/scroller/scroller.vue ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scroller_vue_vue_type_template_id_cbdb6978___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroller.vue?vue&type=template&id=cbdb6978& */ 266);
/* harmony import */ var _scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroller.vue?vue&type=script&lang=js& */ 268);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _scroller_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroller.vue?vue&type=style&index=0&lang=css& */ 272);
/* harmony import */ var _JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _scroller_vue_vue_type_template_id_cbdb6978___WEBPACK_IMPORTED_MODULE_0__["render"],
  _scroller_vue_vue_type_template_id_cbdb6978___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _scroller_vue_vue_type_template_id_cbdb6978___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/scroller/scroller.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 266:
/*!***********************************************************************************************************************!*\
  !*** D:/vuepackage2/AplmuV0.4 (3) (2) - 副本 - 副本 - 副本/components/scroller/scroller.vue?vue&type=template&id=cbdb6978& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_template_id_cbdb6978___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./scroller.vue?vue&type=template&id=cbdb6978& */ 267);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_template_id_cbdb6978___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_template_id_cbdb6978___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_template_id_cbdb6978___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_template_id_cbdb6978___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 267:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/vuepackage2/AplmuV0.4 (3) (2) - 副本 - 副本 - 副本/components/scroller/scroller.vue?vue&type=template&id=cbdb6978& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 268:
/*!*****************************************************************************************************************!*\
  !*** D:/vuepackage2/AplmuV0.4 (3) (2) - 副本 - 副本 - 副本/components/scroller/scroller.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JPG_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./scroller.vue?vue&type=script&lang=js& */ 269);
/* harmony import */ var _JPG_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_JPG_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _JPG_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _JPG_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_JPG_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 269:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/vuepackage2/AplmuV0.4 (3) (2) - 副本 - 副本 - 副本/components/scroller/scroller.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;













































































var _scroller = _interopRequireDefault(__webpack_require__(/*! ./scroller.js */ 270));

var _option = _interopRequireDefault(__webpack_require__(/*! ./option.js */ 271));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
// 引入scroller.js,处理核心逻辑
// 引入全局配置
var _default2 = { data: function data() {return { scroller: null, // scroller实例
      viewId: 'id_' + Math.random().toString(36).substr(2), // 随机生成scroller的id(不能数字开头,否则找不到元素)
      downHight: 0, //下拉刷新: 容器高度
      downRotate: 0, //下拉刷新: 圆形进度条旋转的角度
      downText: '', //下拉刷新: 提示的文本
      isDownReset: false, //下拉刷新: 是否显示重置的过渡动画
      isDownLoading: false, //下拉刷新: 是否显示加载中
      isUpLoading: false, // 上拉加载: 是否显示 "加载中..."
      isUpNoMore: false, // 上拉加载: 是否显示 "-- END --"
      isShowEmpty: false, // 是否显示空布局
      isShowToTop: false, // 是否显示回到顶部按钮
      scrollAble: true, // 是否禁止下滑 (下拉时禁止,避免抖动)
      scrollTop: 0, // 滚动条的位置
      scrollAnim: false, // 是否开启滚动动画
      windowTop: 0, // 可使用窗口的顶部位置
      windowBottom: 0 // 可使用窗口的底部位置
    };}, props: { down: Object, // 下拉刷新的参数配置
    up: Object, // 上拉加载的参数配置
    top: [String, Number], // 下拉布局往下偏移的数值, 已默认单位为upx.
    bottom: [String, Number], // 上拉布局往上偏移的数值, 已默认单位为upx.
    fixed: { // 是否通过fixed固定scroller的高度, 默认true
      type: Boolean, default: function _default() {return true;} } }, computed: { // top数值,单位upx,需转成px. 目的是使下拉布局往下偏移
    numTop: function numTop() {return uni.upx2px(Number(this.top || 0));}, fixedTop: function fixedTop() {return this.fixed ? this.numTop + this.windowTop + 'px' : 0;}, padTop: function padTop() {return !this.fixed ? this.numTop + 'px' : 0;}, // bottom数值,单位upx,需转成px 目的是使上拉布局往上偏移
    numBottom: function numBottom() {return uni.upx2px(Number(this.bottom || 0));}, fixedBottom: function fixedBottom() {return this.fixed ? this.numBottom + this.windowBottom + 'px' : 0;}, padBottom: function padBottom() {return !this.fixed ? this.numBottom + 'px' : 0;}, // 空布局的配置
    optEmpty: function optEmpty() {return this.scroller.optUp.empty;}, // 过渡
    transition: function transition() {return this.isDownReset ? 'transform 300ms' : '';}, translateY: function translateY() {return this.downHight > 0 ? 'translateY(' + this.downHight + 'px)' : ''; // transform会使fixed失效,需注意把fixed元素写在scroller之外
    } }, methods: { //注册列表滚动事件,用于下拉刷新
    scroll: function scroll(e) {var _this = this;this.scroller.scroll(e.detail, function () {_this.$emit('scroll', _this.scroller); // 此时可直接通过 this.scroller.scrollTop获取滚动条位置; this.scroller.isScrollUp获取是否向上滑动
      });}, //注册列表touchstart事件,用于下拉刷新
    touchstartEvent: function touchstartEvent(e) {this.scroller.touchstartEvent(e);}, //注册列表touchmove事件,用于下拉刷新
    touchmoveEvent: function touchmoveEvent(e) {this.scroller.touchmoveEvent(e);}, //注册列表touchend事件,用于下拉刷新
    touchendEvent: function touchendEvent(e) {this.scroller.touchendEvent(e);}, // 点击空布局的按钮回调
    emptyClick: function emptyClick() {this.$emit('emptyclick', this.scroller);}, // 点击回到顶部的按钮回调
    toTopClick: function toTopClick() {this.isShowToTop = false; // 回到顶部按钮需要先隐藏,再执行回到顶部,避免闪动
      this.scroller.scrollTo(0, this.scroller.optUp.toTop.duration); // 执行回到顶部
      this.$emit('topclick', this.scroller); // 派发点击回到顶部按钮的回调
    }, // 更新滚动区域的高度 (使内容不满屏和到底,都可继续翻页)
    setClientHeight: function setClientHeight() {var _this2 = this;if (this.scroller.getClientHeight(true) === 0 && !this.isExec) {this.isExec = true; // 避免多次获取
        this.$nextTick(function () {// 确保dom已渲染
          var view = uni.createSelectorQuery().in(_this2).select('#' + _this2.viewId);view.boundingClientRect(function (data) {_this2.isExec = false;if (data) {_this2.scroller.setClientHeight(data.height);} else if (_this2.clientNum != 3) {// 极少部分情况,可能dom还未渲染完毕,递归获取,最多重试3次
              _this2.clientNum = _this2.clientNum == null ? 1 : _this2.clientNum + 1;
              setTimeout(function () {
                _this2.setClientHeight();
              }, _this2.clientNum * 100);
            }
          }).exec();
        });
      }
    } },

  // 使用created初始化scroller对象; 如果用mounted部分css样式编译到H5会失效
  created: function created() {
    var vm = this;

    var diyOption = {
      // 下拉刷新的配置
      down: {
        inOffset: function inOffset(scroller) {
          // 下拉的距离进入offset范围内那一刻的回调
          vm.scrollAble = false; // 禁止下拉,避免抖动 (自定义scroller组件时,此行不可删)
          vm.isDownReset = false; // 不重置高度 (自定义scroller组件时,此行不可删)
          vm.isDownLoading = false; // 不显示加载中
          vm.downText = scroller.optDown.textInOffset; // 设置文本
        },
        outOffset: function outOffset(scroller) {
          // 下拉的距离大于offset那一刻的回调
          vm.scrollAble = false; // 禁止下拉,避免抖动 (自定义scroller组件时,此行不可删)
          vm.isDownReset = false; // 不重置高度 (自定义scroller组件时,此行不可删)
          vm.isDownLoading = false; // 不显示加载中
          vm.downText = scroller.optDown.textOutOffset; // 设置文本
        },
        onMoving: function onMoving(scroller, rate, downHight) {
          // 下拉过程中的回调,滑动过程一直在执行; rate下拉区域当前高度与指定距离的比值(inOffset: rate<1; outOffset: rate>=1); downHight当前下拉区域的高度
          vm.downHight = downHight; // 设置下拉区域的高度 (自定义scroller组件时,此行不可删)
          vm.downRotate = 'rotate(' + 360 * rate + 'deg)'; // 设置旋转角度
        },
        showLoading: function showLoading(scroller, downHight) {
          // 显示下拉刷新进度的回调
          vm.scrollAble = true; // 开启下拉 (自定义scroller组件时,此行不可删)
          vm.isDownReset = true; // 重置高度 (自定义scroller组件时,此行不可删)
          vm.isDownLoading = true; // 显示加载中
          vm.downHight = downHight; // 设置下拉区域的高度 (自定义scroller组件时,此行不可删)
          vm.downText = scroller.optDown.textLoading; // 设置文本
        },
        endDownScroll: function endDownScroll(scroller) {
          vm.scrollAble = true; // 开启下拉 (自定义scroller组件时,此行不可删)
          vm.isDownReset = true; // 重置高度 (自定义scroller组件时,此行不可删)
          vm.isDownLoading = false; // 不显示加载中
          vm.downHight = 0; // 设置下拉区域的高度 (自定义scroller组件时,此行不可删)
        },
        // 派发下拉刷新的回调
        callback: function callback(scroller) {
          vm.$emit('down', scroller);
        } },

      // 上拉加载的配置
      up: {
        // 显示加载中的回调
        showLoading: function showLoading() {
          vm.isUpLoading = true;
          vm.isUpNoMore = false;
        },
        // 显示无更多数据的回调
        showNoMore: function showNoMore() {
          vm.isUpLoading = false;
          vm.isUpNoMore = true;
        },
        // 隐藏上拉加载的回调
        hideUpScroll: function hideUpScroll() {
          vm.isUpLoading = false;
          vm.isUpNoMore = false;
        },
        // 空布局
        empty: {
          onShow: function onShow(isShow) {
            // 显示隐藏的回调
            vm.isShowEmpty = isShow;
          } },

        // 回到顶部
        toTop: {
          onShow: function onShow(isShow) {
            // 显示隐藏的回调
            vm.isShowToTop = isShow;
          } },

        // 派发上拉加载的回调
        callback: function callback(scroller) {
          vm.$emit('up', scroller);
          // 更新容器的高度 (多scroller的情况)
          vm.setClientHeight();
        } } };



    _scroller.default.extend(diyOption, _option.default); // 混入全局的配置
    var myOption = JSON.parse(
    JSON.stringify({
      down: vm.down,
      up: vm.up }));

    // 深拷贝,避免对props的影响
    _scroller.default.extend(myOption, diyOption); // 混入具体界面的配置

    // 初始化Scroller对象
    vm.scroller = new _scroller.default(myOption);
    vm.scroller.viewId = vm.viewId; // 附带id
    // init回调scroller对象
    vm.$emit('init', vm.scroller);

    // 设置高度
    uni.getSystemInfo({
      success: function success(res) {
        if (res.windowTop) vm.windowTop = res.windowTop; // 修正app和H5的top值
        if (res.windowBottom) vm.windowBottom = res.windowBottom; // 修正app和H5的bottom值
        vm.scroller.setBodyHeight(res.windowHeight); // 使down的bottomOffset生效
      } });


    // 因为使用的是scrollview,这里需自定义scrollTo
    vm.scroller.resetScrollTo(function (y, t) {
      var curY = vm.scroller.getScrollTop();
      if (t === 0) {
        vm.scrollAnim = false;
        vm.scrollTop = curY;
        vm.$nextTick(function () {
          vm.scrollTop = y;
        });
      } else {
        vm.scrollAnim = true;
        vm.scroller.getStep(
        curY,
        y,
        function (step) {
          // 此写法可支持配置t
          vm.scrollTop = step;
        },
        t);

      }
    });
  },
  mounted: function mounted() {
    // 设置容器的高度
    this.setClientHeight();
  } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 272:
/*!*************************************************************************************************************************!*\
  !*** D:/vuepackage2/AplmuV0.4 (3) (2) - 副本 - 副本 - 副本/components/scroller/scroller.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JPG_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_JPG_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_JPG_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../JPG/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./scroller.vue?vue&type=style&index=0&lang=css& */ 273);
/* harmony import */ var _JPG_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_JPG_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_JPG_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_JPG_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_JPG_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_JPG_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _JPG_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_JPG_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_JPG_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _JPG_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_JPG_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_JPG_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_JPG_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_JPG_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_JPG_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_JPG_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_scroller_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 273:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/vuepackage2/AplmuV0.4 (3) (2) - 副本 - 副本 - 副本/components/scroller/scroller.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/scroller/scroller.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/scroller/scroller-create-component',
    {
        'components/scroller/scroller-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(265))
        })
    },
    [['components/scroller/scroller-create-component']]
]);
