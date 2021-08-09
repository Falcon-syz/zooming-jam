(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni, process) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 10);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e26) {throw _e26;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e27) {didErr = true;err = _e27;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;function t(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function s(e, t, s) {return e(s = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && s.path);} }, s.exports), s.exports;}var n = s(function (e, t) {var s;e.exports = (s = s || function (e, t) {var s = Object.create || function () {function e() {}return function (t) {var s;return e.prototype = t, s = new e(), e.prototype = null, s;};}(),n = {},r = n.lib = {},o = r.Base = { extend: function extend(e) {var t = s(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = r.WordArray = o.extend({ init: function init(e, t) {e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,s = e.words,n = this.sigBytes,r = e.sigBytes;if (this.clamp(), n % 4) for (var o = 0; o < r; o++) {var i = s[o >>> 2] >>> 24 - o % 4 * 8 & 255;t[n + o >>> 2] |= i << 24 - (n + o) % 4 * 8;} else for (o = 0; o < r; o += 4) {t[n + o >>> 2] = s[o >>> 2];}return this.sigBytes += r, this;}, clamp: function clamp() {var t = this.words,s = this.sigBytes;t[s >>> 2] &= 4294967295 << 32 - s % 4 * 8, t.length = e.ceil(s / 4);}, clone: function clone() {var e = o.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var s, n = [], r = function r(t) {t = t;var s = 987654321,n = 4294967295;return function () {var r = ((s = 36969 * (65535 & s) + (s >> 16) & n) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & n) & n;return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);};}, o = 0; o < t; o += 4) {var a = r(4294967296 * (s || e.random()));s = 987654071 * a(), n.push(4294967296 * a() | 0);}return new i.init(n, t);} }),a = n.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, s = e.sigBytes, n = [], r = 0; r < s; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16));}return n.join("");}, parse: function parse(e) {for (var t = e.length, s = [], n = 0; n < t; n += 2) {s[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;}return new i.init(s, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, s = e.sigBytes, n = [], r = 0; r < s; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;n.push(String.fromCharCode(o));}return n.join("");}, parse: function parse(e) {for (var t = e.length, s = [], n = 0; n < t; n++) {s[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;}return new i.init(s, t);} },h = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },l = r.BufferedBlockAlgorithm = o.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var s = this._data,n = s.words,r = s.sigBytes,o = this.blockSize,a = r / (4 * o),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o,u = e.min(4 * c, r);if (c) {for (var h = 0; h < c; h += o) {this._doProcessBlock(n, h);}var l = n.splice(0, c);s.sigBytes -= u;}return new i.init(l, u);}, clone: function clone() {var e = o.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 }),d = (r.Hasher = l.extend({ cfg: o.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {l.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, s) {return new e.init(s).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, s) {return new d.HMAC.init(e, s).finalize(t);};} }), n.algo = {});return n;}(Math), s);}),r = (s(function (e, t) {var s;e.exports = (s = n, function (e) {var t = s,n = t.lib,r = n.WordArray,o = n.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = o.extend({ _doReset: function _doReset() {this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var s = 0; s < 16; s++) {var n = t + s,r = e[n];e[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);}var o = this._hash.words,i = e[t + 0],c = e[t + 1],f = e[t + 2],p = e[t + 3],g = e[t + 4],m = e[t + 5],y = e[t + 6],_ = e[t + 7],v = e[t + 8],w = e[t + 9],S = e[t + 10],k = e[t + 11],T = e[t + 12],P = e[t + 13],A = e[t + 14],I = e[t + 15],E = o[0],O = o[1],U = o[2],b = o[3];E = u(E, O, U, b, i, 7, a[0]), b = u(b, E, O, U, c, 12, a[1]), U = u(U, b, E, O, f, 17, a[2]), O = u(O, U, b, E, p, 22, a[3]), E = u(E, O, U, b, g, 7, a[4]), b = u(b, E, O, U, m, 12, a[5]), U = u(U, b, E, O, y, 17, a[6]), O = u(O, U, b, E, _, 22, a[7]), E = u(E, O, U, b, v, 7, a[8]), b = u(b, E, O, U, w, 12, a[9]), U = u(U, b, E, O, S, 17, a[10]), O = u(O, U, b, E, k, 22, a[11]), E = u(E, O, U, b, T, 7, a[12]), b = u(b, E, O, U, P, 12, a[13]), U = u(U, b, E, O, A, 17, a[14]), E = h(E, O = u(O, U, b, E, I, 22, a[15]), U, b, c, 5, a[16]), b = h(b, E, O, U, y, 9, a[17]), U = h(U, b, E, O, k, 14, a[18]), O = h(O, U, b, E, i, 20, a[19]), E = h(E, O, U, b, m, 5, a[20]), b = h(b, E, O, U, S, 9, a[21]), U = h(U, b, E, O, I, 14, a[22]), O = h(O, U, b, E, g, 20, a[23]), E = h(E, O, U, b, w, 5, a[24]), b = h(b, E, O, U, A, 9, a[25]), U = h(U, b, E, O, p, 14, a[26]), O = h(O, U, b, E, v, 20, a[27]), E = h(E, O, U, b, P, 5, a[28]), b = h(b, E, O, U, f, 9, a[29]), U = h(U, b, E, O, _, 14, a[30]), E = l(E, O = h(O, U, b, E, T, 20, a[31]), U, b, m, 4, a[32]), b = l(b, E, O, U, v, 11, a[33]), U = l(U, b, E, O, k, 16, a[34]), O = l(O, U, b, E, A, 23, a[35]), E = l(E, O, U, b, c, 4, a[36]), b = l(b, E, O, U, g, 11, a[37]), U = l(U, b, E, O, _, 16, a[38]), O = l(O, U, b, E, S, 23, a[39]), E = l(E, O, U, b, P, 4, a[40]), b = l(b, E, O, U, i, 11, a[41]), U = l(U, b, E, O, p, 16, a[42]), O = l(O, U, b, E, y, 23, a[43]), E = l(E, O, U, b, w, 4, a[44]), b = l(b, E, O, U, T, 11, a[45]), U = l(U, b, E, O, I, 16, a[46]), E = d(E, O = l(O, U, b, E, f, 23, a[47]), U, b, i, 6, a[48]), b = d(b, E, O, U, _, 10, a[49]), U = d(U, b, E, O, A, 15, a[50]), O = d(O, U, b, E, m, 21, a[51]), E = d(E, O, U, b, T, 6, a[52]), b = d(b, E, O, U, p, 10, a[53]), U = d(U, b, E, O, S, 15, a[54]), O = d(O, U, b, E, c, 21, a[55]), E = d(E, O, U, b, v, 6, a[56]), b = d(b, E, O, U, I, 10, a[57]), U = d(U, b, E, O, y, 15, a[58]), O = d(O, U, b, E, P, 21, a[59]), E = d(E, O, U, b, g, 6, a[60]), b = d(b, E, O, U, k, 10, a[61]), U = d(U, b, E, O, f, 15, a[62]), O = d(O, U, b, E, w, 21, a[63]), o[0] = o[0] + E | 0, o[1] = o[1] + O | 0, o[2] = o[2] + U | 0, o[3] = o[3] + b | 0;}, _doFinalize: function _doFinalize() {var t = this._data,s = t.words,n = 8 * this._nDataBytes,r = 8 * t.sigBytes;s[r >>> 5] |= 128 << 24 - r % 32;var o = e.floor(n / 4294967296),i = n;s[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), s[14 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (s.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var h = c[u];c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);}return a;}, clone: function clone() {var e = o.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, s, n, r, o, i) {var a = e + (t & s | ~t & n) + r + i;return (a << o | a >>> 32 - o) + t;}function h(e, t, s, n, r, o, i) {var a = e + (t & n | s & ~n) + r + i;return (a << o | a >>> 32 - o) + t;}function l(e, t, s, n, r, o, i) {var a = e + (t ^ s ^ n) + r + i;return (a << o | a >>> 32 - o) + t;}function d(e, t, s, n, r, o, i) {var a = e + (s ^ (t | ~n)) + r + i;return (a << o | a >>> 32 - o) + t;}t.MD5 = o._createHelper(c), t.HmacMD5 = o._createHmacHelper(c);}(Math), s.MD5);}), s(function (e, t) {var s, r, o;e.exports = (r = (s = n).lib.Base, o = s.enc.Utf8, void (s.algo.HMAC = r.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = o.parse(t));var s = e.blockSize,n = 4 * s;t.sigBytes > n && (t = e.finalize(t)), t.clamp();for (var r = this._oKey = t.clone(), i = this._iKey = t.clone(), a = r.words, c = i.words, u = 0; u < s; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}r.sigBytes = i.sigBytes = n, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,s = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(s));} })));}), s(function (e, t) {e.exports = n.HmacMD5;}));function o(e) {return function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}, function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var i = /*#__PURE__*/function (_Error) {_inherits(i, _Error);var _super = _createSuper(i);function i(e) {var _this;_classCallCheck(this, i);_this = _super.call(this, e.message), _this.errMsg = e.message || "", Object.defineProperties(_assertThisInitialized(_this), { code: { get: function get() {return e.code;} }, requestId: { get: function get() {return e.requestId;} }, message: { get: function get() {return this.errMsg;}, set: function set(e) {this.errMsg = e;} } });return _this;}return i;}( /*#__PURE__*/_wrapNativeSuper(Error));var _e2 = (0, _uniI18n.initVueI18n)({ "zh-Hans": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, "zh-Hant": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, en: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" } }, "zh-Hans"),a = _e2.t,c = _e2.setLocale,u = _e2.getLocale;var h, l, d;try {h = __webpack_require__(/*! uni-stat-config */ 11).default || __webpack_require__(/*! uni-stat-config */ 11);} catch (e) {h = { appid: "" };}function f() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;var t = "";for (; t.length < e;) {t += Math.random().toString(32).substring(2);}return t.substring(0, e);}function p() {var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),e = _uni$getSystemInfoSyn.deviceId;return { PLATFORM: "mp-weixin", OS: d, APPID: h.appid, LOCALE: u(), DEVICEID: e, CLIENT_SDK_VERSION: "1.0.1" };}function g() {if ("n" === m()) {try {l = plus.runtime.getDCloudId();} catch (e) {l = "";}return l;}return l || (l = f(32), uni.setStorage({ key: "__DC_CLOUD_UUID", data: l })), l;}function m() {var _appPlus$h5$mpWeixi;return (_appPlus$h5$mpWeixi = { "app-plus": "n", h5: "h5", "mp-weixin": "wx" }, _defineProperty(_appPlus$h5$mpWeixi, ["y", "a", "p", "mp-ali"].reverse().join(""), "ali"), _defineProperty(_appPlus$h5$mpWeixi, "mp-baidu", "bd"), _defineProperty(_appPlus$h5$mpWeixi, "mp-toutiao", "tt"), _defineProperty(_appPlus$h5$mpWeixi, "mp-qq", "qq"), _defineProperty(_appPlus$h5$mpWeixi, "quickapp-native", "qn"), _appPlus$h5$mpWeixi)["mp-weixin"];}var y = { sign: function sign(e, t) {var s = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (s = s + "&" + t + "=" + e[t]);}), s = s.slice(1), r(s, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (s, n) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}),  false && false;var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return n(new i({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var r = e.data;if (r.error) return n(new i({ code: r.error.code, message: r.error.message, requestId: t }));r.result = r.data, r.requestId = t, delete r.data, s(r);} }));});} };var _ = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStorageSync: function setStorageSync(e, t) {return uni.setStorageSync(e, t);}, getStorageSync: function getStorageSync(e) {return uni.getStorageSync(e);}, removeStorageSync: function removeStorageSync(e) {return uni.removeStorageSync(e);}, clearStorageSync: function clearStorageSync() {return uni.clearStorageSync();} };var v = /*#__PURE__*/function () {function v(e) {_classCallCheck(this, v);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(a("uniCloud.init.paramRequired", { param: t }));}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = _;}_createClass(v, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return y.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this2 = this;return Promise.resolve().then(function () {return _this2.hasAccessToken ? t ? _this2.requestWrapped(e) : _this2.requestWrapped(e).catch(function (t) {return new Promise(function (e, s) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? s(t) : e();}).then(function () {return _this2.getAccessToken();}).then(function () {var t = _this2.rebuildRequest(e);return _this2.request(t, !0);});}) : _this2.getAccessToken().then(function () {var t = _this2.rebuildRequest(e);return _this2.request(t, !0);});});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = y.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var s = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),n = { "Content-Type": "application/json" };return "auth" !== t && (s.token = this.accessToken, n["x-basement-token"] = this.accessToken), n["x-serverless-sign"] = y.sign(s, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: s, dataType: "json", header: n };} }, { key: "getAccessToken", value: function getAccessToken() {var _this3 = this;return this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, s) {e.result && e.result.accessToken ? (_this3.setAccessToken(e.result.accessToken), t(_this3.accessToken)) : s(new i({ code: "AUTH_FAILED", message: "获取accessToken失败" }));});});} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var _this4 = this;var e = _ref.url,t = _ref.formData,s = _ref.name,n = _ref.filePath,r = _ref.fileType,o = _ref.onUploadProgress;return new Promise(function (a, c) {var u = _this4.adapter.uploadFile({ url: e, formData: t, name: s, filePath: n, fileType: r, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? a(e) : c(new i({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {c(new i({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && u && "function" == typeof u.onProgressUpdate && u.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref2) {var _this5 = this;var e = _ref2.filePath,t = _ref2.cloudPath,_ref2$fileType = _ref2.fileType,s = _ref2$fileType === void 0 ? "image" : _ref2$fileType,n = _ref2.onUploadProgress,r = _ref2.config;if (!t) throw new i({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var o = r && r.envType || this.config.envType;var a, c;return this.getOSSUploadOptionsFromPath({ env: o, filename: t }).then(function (t) {var r = t.result;a = r.id, c = "https://" + r.cdnDomain + "/" + r.ossPath;var o = { url: "https://" + r.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: r.accessKeyId, Signature: r.signature, host: r.host, id: a, key: r.ossPath, policy: r.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: s };return _this5.uploadFileToOSS(Object.assign({}, o, { onUploadProgress: n }));}).then(function () {return _this5.reportOSSUpload({ id: a });}).then(function (t) {return new Promise(function (s, n) {t.success ? s({ success: !0, filePath: e, fileID: c }) : n(new i({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref4.fileList;return new Promise(function (t, s) {Array.isArray(e) && 0 !== e.length || s(new i({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t({ fileList: e.map(function (e) {return { fileID: e, tempFileURL: e };}) });});} }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return v;}();var w = { init: function init(e) {var t = new v(e);["deleteFile", "getTempFileURL"].forEach(function (e) {t[e] = o(t[e]).bind(t);});var s = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return s;}, t.customAuth = t.auth, t;} },S = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:",k = "undefined" != typeof process && "e2e" === "development" && "pre" === Object({"VUE_APP_NAME":"zooming-jam","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).END_POINT ? "//tcb-pre.tencentcloudapi.com/web" : "//tcb-api.tencentcloudapi.com/web";var T;!function (e) {e.local = "local", e.none = "none", e.session = "session";}(T || (T = {}));var P = function P() {};s(function (e, t) {var s;e.exports = (s = n, function (e) {var t = s,n = t.lib,r = n.WordArray,o = n.Hasher,i = t.algo,a = [],c = [];!function () {function t(t) {for (var s = e.sqrt(t), n = 2; n <= s; n++) {if (!(t % n)) return !1;}return !0;}function s(e) {return 4294967296 * (e - (0 | e)) | 0;}for (var n = 2, r = 0; r < 64;) {t(n) && (r < 8 && (a[r] = s(e.pow(n, .5))), c[r] = s(e.pow(n, 1 / 3)), r++), n++;}}();var u = [],h = i.SHA256 = o.extend({ _doReset: function _doReset() {this._hash = new r.init(a.slice(0));}, _doProcessBlock: function _doProcessBlock(e, t) {for (var s = this._hash.words, n = s[0], r = s[1], o = s[2], i = s[3], a = s[4], h = s[5], l = s[6], d = s[7], f = 0; f < 64; f++) {if (f < 16) u[f] = 0 | e[t + f];else {var p = u[f - 15],g = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3,m = u[f - 2],y = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;u[f] = g + u[f - 7] + y + u[f - 16];}var _ = n & r ^ n & o ^ r & o,v = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22),w = d + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & h ^ ~a & l) + c[f] + u[f];d = l, l = h, h = a, a = i + w | 0, i = o, o = r, r = n, n = w + (v + _) | 0;}s[0] = s[0] + n | 0, s[1] = s[1] + r | 0, s[2] = s[2] + o | 0, s[3] = s[3] + i | 0, s[4] = s[4] + a | 0, s[5] = s[5] + h | 0, s[6] = s[6] + l | 0, s[7] = s[7] + d | 0;}, _doFinalize: function _doFinalize() {var t = this._data,s = t.words,n = 8 * this._nDataBytes,r = 8 * t.sigBytes;return s[r >>> 5] |= 128 << 24 - r % 32, s[14 + (r + 64 >>> 9 << 4)] = e.floor(n / 4294967296), s[15 + (r + 64 >>> 9 << 4)] = n, t.sigBytes = 4 * s.length, this._process(), this._hash;}, clone: function clone() {var e = o.clone.call(this);return e._hash = this._hash.clone(), e;} });t.SHA256 = o._createHelper(h), t.HmacSHA256 = o._createHmacHelper(h);}(Math), s.SHA256);}), s(function (e, t) {e.exports = n.HmacSHA256;}), s(function (e, t) {var s, r, o;e.exports = (r = (s = o = n).lib.WordArray, s.enc.Base64 = { stringify: function stringify(e) {var t = e.words,s = e.sigBytes,n = this._map;e.clamp();for (var r = [], o = 0; o < s; o += 3) {for (var i = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, a = 0; a < 4 && o + .75 * a < s; a++) {r.push(n.charAt(i >>> 6 * (3 - a) & 63));}}var c = n.charAt(64);if (c) for (; r.length % 4;) {r.push(c);}return r.join("");}, parse: function parse(e) {var t = e.length,s = this._map,n = this._reverseMap;if (!n) {n = this._reverseMap = [];for (var o = 0; o < s.length; o++) {n[s.charCodeAt(o)] = o;}}var i = s.charAt(64);if (i) {var a = e.indexOf(i);-1 !== a && (t = a);}return function (e, t, s) {for (var n = [], o = 0, i = 0; i < t; i++) {if (i % 4) {var a = s[e.charCodeAt(i - 1)] << i % 4 * 2,c = s[e.charCodeAt(i)] >>> 6 - i % 4 * 2;n[o >>> 2] |= (a | c) << 24 - o % 4 * 8, o++;}}return r.create(n, o);}(e, t, n);}, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" }, o.enc.Base64);}), s(function (e, t) {e.exports = n.enc.Utf8;});var A = function A() {var e;if (!Promise) {e = function e() {}, e.promise = {};var _t = function _t() {throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');};return Object.defineProperty(e.promise, "then", { get: _t }), Object.defineProperty(e.promise, "catch", { get: _t }), e;}var t = new Promise(function (t, s) {e = function e(_e3, n) {return _e3 ? s(_e3) : t(n);};});return e.promise = t, e;};function I(e) {return void 0 === e;}function E(e) {return "[object Null]" === Object.prototype.toString.call(e);}var O;function U(e) {var t = (s = e, "[object Array]" === Object.prototype.toString.call(s) ? e : [e]);var s;var _iterator = _createForOfIteratorHelper(t),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _e4 = _step.value;var _t2 = _e4.isMatch,_s = _e4.genAdapter,_n = _e4.runtime;if (_t2()) return { adapter: _s(), runtime: _n };}} catch (err) {_iterator.e(err);} finally {_iterator.f();}}!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}(O || (O = {}));var b = { adapter: null, runtime: void 0 },D = ["anonymousUuidKey"];var C = /*#__PURE__*/function (_P) {_inherits(C, _P);var _super2 = _createSuper(C);function C() {var _this6;_classCallCheck(this, C);_this6 = _super2.call(this), b.adapter.root.tcbObject || (b.adapter.root.tcbObject = {});return _this6;}_createClass(C, [{ key: "setItem", value: function setItem(e, t) {b.adapter.root.tcbObject[e] = t;} }, { key: "getItem", value: function getItem(e) {return b.adapter.root.tcbObject[e];} }, { key: "removeItem", value: function removeItem(e) {delete b.adapter.root.tcbObject[e];} }, { key: "clear", value: function clear() {delete b.adapter.root.tcbObject;} }]);return C;}(P);function x(e, t) {switch (e) {case "local":return t.localStorage || new C();case "none":return new C();default:return t.sessionStorage || new C();}}var R = /*#__PURE__*/function () {function R(e) {_classCallCheck(this, R);if (!this._storage) {this._persistence = b.adapter.primaryStorage || e.persistence, this._storage = x(this._persistence, b.adapter);var _t3 = "access_token_" + e.env,_s2 = "access_token_expire_" + e.env,_n2 = "refresh_token_" + e.env,_r = "anonymous_uuid_" + e.env,_o = "login_type_" + e.env,_i = "user_info_" + e.env;this.keys = { accessTokenKey: _t3, accessTokenExpireKey: _s2, refreshTokenKey: _n2, anonymousUuidKey: _r, loginTypeKey: _o, userInfoKey: _i };}}_createClass(R, [{ key: "updatePersistence", value: function updatePersistence(e) {if (e === this._persistence) return;var t = "local" === this._persistence;this._persistence = e;var s = x(e, b.adapter);for (var _e5 in this.keys) {var _n3 = this.keys[_e5];if (t && D.includes(_e5)) continue;var _r2 = this._storage.getItem(_n3);I(_r2) || E(_r2) || (s.setItem(_n3, _r2), this._storage.removeItem(_n3));}this._storage = s;} }, { key: "setStore", value: function setStore(e, t, s) {if (!this._storage) return;var n = { version: s || "localCachev1", content: t },r = JSON.stringify(n);try {this._storage.setItem(e, r);} catch (e) {throw e;}} }, { key: "getStore", value: function getStore(e, t) {try {if (!this._storage) return;} catch (e) {return "";}t = t || "localCachev1";var s = this._storage.getItem(e);if (!s) return "";if (s.indexOf(t) >= 0) {return JSON.parse(s).content;}return "";} }, { key: "removeStore", value: function removeStore(e) {this._storage.removeItem(e);} }]);return R;}();var q = {},F = {};function L(e) {return q[e];}var N = function N(e, t) {_classCallCheck(this, N);this.data = t || null, this.name = e;};var M = /*#__PURE__*/function (_N) {_inherits(M, _N);var _super3 = _createSuper(M);function M(e, t) {var _this7;_classCallCheck(this, M);_this7 = _super3.call(this, "error", { error: e, data: t }), _this7.error = e;return _this7;}return M;}(N);var $ = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);this._listeners = {};}_createClass(_class, [{ key: "on", value: function on(e, t) {return function (e, t, s) {s[e] = s[e] || [], s[e].push(t);}(e, t, this._listeners), this;} }, { key: "off", value: function off(e, t) {return function (e, t, s) {if (s && s[e]) {var _n4 = s[e].indexOf(t);-1 !== _n4 && s[e].splice(_n4, 1);}}(e, t, this._listeners), this;} }, { key: "fire", value: function fire(e, t) {if (e instanceof M) return console.error(e.error), this;var s = "string" == typeof e ? new N(e, t || {}) : e;var n = s.name;if (this._listens(n)) {s.target = this;var _e6 = this._listeners[n] ? _toConsumableArray(this._listeners[n]) : [];var _iterator2 = _createForOfIteratorHelper(_e6),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _t4 = _step2.value;_t4.call(this, s);}} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}}return this;} }, { key: "_listens", value: function _listens(e) {return this._listeners[e] && this._listeners[e].length > 0;} }]);return _class;}())();function K(e, t) {$.on(e, t);}function j(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};$.fire(e, t);}function B(e, t) {$.off(e, t);}var H = "loginStateChanged",W = "loginStateExpire",V = "loginTypeChanged",z = "anonymousConverted",J = "refreshAccessToken";var Y;!function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";}(Y || (Y = {}));var X = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],G = { "X-SDK-Version": "1.3.5" };function Q(e, t, s) {var n = e[t];e[t] = function (t) {var r = {},o = {};s.forEach(function (s) {var _s$call = s.call(e, t),n = _s$call.data,i = _s$call.headers;Object.assign(r, n), Object.assign(o, i);});var i = t.data;return i && function () {var e;if (e = i, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, i), r);else for (var _e7 in r) {i.append(_e7, r[_e7]);}}(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), o), n.call(e, t);};}function Z() {var e = Math.random().toString(16).slice(2);return { data: { seqId: e }, headers: _objectSpread(_objectSpread({}, G), {}, { "x-seqid": e }) };}var ee = /*#__PURE__*/function () {function ee() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, ee);var t;this.config = e, this._reqClass = new b.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"), restrictedMethods: ["post"] }), this._cache = L(this.config.env), this._localCache = (t = this.config.env, F[t]), Q(this._reqClass, "post", [Z]), Q(this._reqClass, "upload", [Z]), Q(this._reqClass, "download", [Z]);}_createClass(ee, [{ key: "post", value: function () {var _post = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this._reqClass.post(e);case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee, this);}));function post(_x) {return _post.apply(this, arguments);}return post;}() }, { key: "upload", value: function () {var _upload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(e) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return this._reqClass.upload(e);case 2:return _context2.abrupt("return", _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2, this);}));function upload(_x2) {return _upload.apply(this, arguments);}return upload;}() }, { key: "download", value: function () {var _download = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this._reqClass.download(e);case 2:return _context3.abrupt("return", _context3.sent);case 3:case "end":return _context3.stop();}}}, _callee3, this);}));function download(_x3) {return _download.apply(this, arguments);}return download;}() }, { key: "refreshAccessToken", value: function () {var _refreshAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var e, t;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());_context4.prev = 1;_context4.next = 4;return this._refreshAccessTokenPromise;case 4:e = _context4.sent;_context4.next = 10;break;case 7:_context4.prev = 7;_context4.t0 = _context4["catch"](1);t = _context4.t0;case 10:if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {_context4.next = 12;break;}throw t;case 12:return _context4.abrupt("return", e);case 13:case "end":return _context4.stop();}}}, _callee4, this, [[1, 7]]);}));function refreshAccessToken() {return _refreshAccessToken2.apply(this, arguments);}return refreshAccessToken;}() }, { key: "_refreshAccessToken", value: function () {var _refreshAccessToken3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _this$_cache$keys, e, t, s, n, r, o, i, a, _e8, _e9, _t5, _n5;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, s = _this$_cache$keys.refreshTokenKey, n = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;this._cache.removeStore(e), this._cache.removeStore(t);o = this._cache.getStore(s);if (o) {_context5.next = 5;break;}throw new Error("未登录CloudBase");case 5:i = { refresh_token: o };_context5.next = 8;return this.request("auth.fetchAccessTokenWithRefreshToken", i);case 8:a = _context5.sent;if (!a.data.code) {_context5.next = 21;break;}_e8 = a.data.code;if (!("SIGN_PARAM_INVALID" === _e8 || "REFRESH_TOKEN_EXPIRED" === _e8 || "INVALID_REFRESH_TOKEN" === _e8)) {_context5.next = 20;break;}if (!(this._cache.getStore(n) === Y.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e8)) {_context5.next = 19;break;}_e9 = this._cache.getStore(r);_t5 = this._cache.getStore(s);_context5.next = 17;return this.send("auth.signInAnonymously", { anonymous_uuid: _e9, refresh_token: _t5 });case 17:_n5 = _context5.sent;return _context5.abrupt("return", (this.setRefreshToken(_n5.refresh_token), this._refreshAccessToken()));case 19:j(W), this._cache.removeStore(s);case 20:throw new Error("刷新access token失败：" + a.data.code);case 21:if (!a.data.access_token) {_context5.next = 23;break;}return _context5.abrupt("return", (j(J), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), { accessToken: a.data.access_token, accessTokenExpire: a.data.access_token_expire }));case 23:a.data.refresh_token && (this._cache.removeStore(s), this._cache.setStore(s, a.data.refresh_token), this._refreshAccessToken());case 24:case "end":return _context5.stop();}}}, _callee5, this);}));function _refreshAccessToken() {return _refreshAccessToken3.apply(this, arguments);}return _refreshAccessToken;}() }, { key: "getAccessToken", value: function () {var _getAccessToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var _this$_cache$keys2, e, t, s, n, r, o;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, s = _this$_cache$keys2.refreshTokenKey;if (this._cache.getStore(s)) {_context6.next = 3;break;}throw new Error("refresh token不存在，登录状态异常");case 3:n = this._cache.getStore(e), r = this._cache.getStore(t), o = !0;_context6.t0 = this._shouldRefreshAccessTokenHook;if (!_context6.t0) {_context6.next = 9;break;}_context6.next = 8;return this._shouldRefreshAccessTokenHook(n, r);case 8:_context6.t0 = !_context6.sent;case 9:_context6.t1 = _context6.t0;if (!_context6.t1) {_context6.next = 12;break;}o = !1;case 12:return _context6.abrupt("return", (!n || !r || r < Date.now()) && o ? this.refreshAccessToken() : { accessToken: n, accessTokenExpire: r });case 13:case "end":return _context6.stop();}}}, _callee6, this);}));function getAccessToken() {return _getAccessToken.apply(this, arguments);}return getAccessToken;}() }, { key: "request", value: function () {var _request = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(e, t, s) {var n, r, o, _e10, i, _e11, _e12, a, c, u, h, l, d, f, p, g;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:n = "x-tcb-trace_" + this.config.env;r = "application/x-www-form-urlencoded";o = _objectSpread({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t);if (!(-1 === X.indexOf(e))) {_context7.next = 10;break;}_e10 = this._cache.keys.refreshTokenKey;_context7.t0 = this._cache.getStore(_e10);if (!_context7.t0) {_context7.next = 10;break;}_context7.next = 9;return this.getAccessToken();case 9:o.access_token = _context7.sent.accessToken;case 10:if ("storage.uploadFile" === e) {i = new FormData();for (_e11 in i) {i.hasOwnProperty(_e11) && void 0 !== i[_e11] && i.append(_e11, o[_e11]);}r = "multipart/form-data";} else {r = "application/json;charset=UTF-8", i = {};for (_e12 in o) {void 0 !== o[_e12] && (i[_e12] = o[_e12]);}}a = { headers: { "content-type": r } };s && s.onUploadProgress && (a.onUploadProgress = s.onUploadProgress);c = this._localCache.getStore(n);c && (a.headers["X-TCB-Trace"] = c);u = t.parse, h = t.inQuery, l = t.search;d = { env: this.config.env };u && (d.parse = !0), h && (d = _objectSpread(_objectSpread({}, h), d));f = function (e, t) {var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var n = /\?/.test(t);var r = "";for (var _e13 in s) {"" === r ? !n && (t += "?") : r += "&", r += "".concat(_e13, "=").concat(encodeURIComponent(s[_e13]));}return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);}(S, k, d);l && (f += l);_context7.next = 22;return this.post(_objectSpread({ url: f, data: i }, a));case 22:p = _context7.sent;g = p.header && p.header["x-tcb-trace"];if (!(g && this._localCache.setStore(n, g), 200 !== Number(p.status) && 200 !== Number(p.statusCode) || !p.data)) {_context7.next = 26;break;}throw new Error("network request error");case 26:return _context7.abrupt("return", p);case 27:case "end":return _context7.stop();}}}, _callee7, this);}));function request(_x4, _x5, _x6) {return _request.apply(this, arguments);}return request;}() }, { key: "send", value: function () {var _send = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(e) {var t,s,_s3,_args8 = arguments;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:t = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};_context8.next = 3;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 3:s = _context8.sent;if (!("ACCESS_TOKEN_EXPIRED" === s.data.code && -1 === X.indexOf(e))) {_context8.next = 13;break;}_context8.next = 7;return this.refreshAccessToken();case 7:_context8.next = 9;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 9:_s3 = _context8.sent;if (!_s3.data.code) {_context8.next = 12;break;}throw new Error("[".concat(_s3.data.code, "] ").concat(_s3.data.message));case 12:return _context8.abrupt("return", _s3.data);case 13:if (!s.data.code) {_context8.next = 15;break;}throw new Error("[".concat(s.data.code, "] ").concat(s.data.message));case 15:return _context8.abrupt("return", s.data);case 16:case "end":return _context8.stop();}}}, _callee8, this);}));function send(_x7) {return _send.apply(this, arguments);}return send;}() }, { key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys3 = this._cache.keys,t = _this$_cache$keys3.accessTokenKey,s = _this$_cache$keys3.accessTokenExpireKey,n = _this$_cache$keys3.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(s), this._cache.setStore(n, e);} }]);return ee;}();var te = {};function se(e) {return te[e];}var ne = /*#__PURE__*/function () {function ne(e) {_classCallCheck(this, ne);this.config = e, this._cache = L(e.env), this._request = se(e.env);}_createClass(ne, [{ key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys4 = this._cache.keys,t = _this$_cache$keys4.accessTokenKey,s = _this$_cache$keys4.accessTokenExpireKey,n = _this$_cache$keys4.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(s), this._cache.setStore(n, e);} }, { key: "setAccessToken", value: function setAccessToken(e, t) {var _this$_cache$keys5 = this._cache.keys,s = _this$_cache$keys5.accessTokenKey,n = _this$_cache$keys5.accessTokenExpireKey;this._cache.setStore(s, e), this._cache.setStore(n, t);} }, { key: "refreshUserInfo", value: function () {var _refreshUserInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var _yield$this$_request$, e;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$ = _context9.sent;e = _yield$this$_request$.data;return _context9.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context9.stop();}}}, _callee9, this);}));function refreshUserInfo() {return _refreshUserInfo.apply(this, arguments);}return refreshUserInfo;}() }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e);} }]);return ne;}();var re = /*#__PURE__*/function () {function re(e) {_classCallCheck(this, re);if (!e) throw new Error("envId is not defined");this._envId = e, this._cache = L(this._envId), this._request = se(this._envId), this.setUserInfo();}_createClass(re, [{ key: "linkWithTicket", value: function linkWithTicket(e) {if ("string" != typeof e) throw new Error("ticket must be string");return this._request.send("auth.linkWithTicket", { ticket: e });} }, { key: "linkWithRedirect", value: function linkWithRedirect(e) {e.signInWithRedirect();} }, { key: "updatePassword", value: function updatePassword(e, t) {return this._request.send("auth.updatePassword", { oldPassword: t, newPassword: e });} }, { key: "updateEmail", value: function updateEmail(e) {return this._request.send("auth.updateEmail", { newEmail: e });} }, { key: "updateUsername", value: function updateUsername(e) {if ("string" != typeof e) throw new Error("username must be a string");return this._request.send("auth.updateUsername", { username: e });} }, { key: "getLinkedUidList", value: function () {var _getLinkedUidList = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var _yield$this$_request$2, e, t, s;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return this._request.send("auth.getLinkedUidList", {});case 2:_yield$this$_request$2 = _context10.sent;e = _yield$this$_request$2.data;t = !1;s = e.users;return _context10.abrupt("return", (s.forEach(function (e) {e.wxOpenId && e.wxPublicId && (t = !0);}), { users: s, hasPrimaryUid: t }));case 7:case "end":return _context10.stop();}}}, _callee10, this);}));function getLinkedUidList() {return _getLinkedUidList.apply(this, arguments);}return getLinkedUidList;}() }, { key: "setPrimaryUid", value: function setPrimaryUid(e) {return this._request.send("auth.setPrimaryUid", { uid: e });} }, { key: "unlink", value: function unlink(e) {return this._request.send("auth.unlink", { platform: e });} }, { key: "update", value: function () {var _update = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {var t, s, n, r, o, i, _yield$this$_request$3, a;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:t = e.nickName;s = e.gender;n = e.avatarUrl;r = e.province;o = e.country;i = e.city;_context11.next = 8;return this._request.send("auth.updateUserInfo", { nickName: t, gender: s, avatarUrl: n, province: r, country: o, city: i });case 8:_yield$this$_request$3 = _context11.sent;a = _yield$this$_request$3.data;this.setLocalUserInfo(a);case 11:case "end":return _context11.stop();}}}, _callee11, this);}));function update(_x8) {return _update.apply(this, arguments);}return update;}() }, { key: "refresh", value: function () {var _refresh = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var _yield$this$_request$4, e;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$4 = _context12.sent;e = _yield$this$_request$4.data;return _context12.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context12.stop();}}}, _callee12, this);}));function refresh() {return _refresh.apply(this, arguments);}return refresh;}() }, { key: "setUserInfo", value: function setUserInfo() {var _this8 = this;var e = this._cache.keys.userInfoKey,t = this._cache.getStore(e);["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {_this8[e] = t[e];}), this.location = { country: t.country, province: t.province, city: t.city };} }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e), this.setUserInfo();} }]);return re;}();var oe = /*#__PURE__*/function () {function oe(e) {_classCallCheck(this, oe);if (!e) throw new Error("envId is not defined");this._cache = L(e);var _this$_cache$keys6 = this._cache.keys,t = _this$_cache$keys6.refreshTokenKey,s = _this$_cache$keys6.accessTokenKey,n = _this$_cache$keys6.accessTokenExpireKey,r = this._cache.getStore(t),o = this._cache.getStore(s),i = this._cache.getStore(n);this.credential = { refreshToken: r, accessToken: o, accessTokenExpire: i }, this.user = new re(e);}_createClass(oe, [{ key: "isAnonymousAuth", get: function get() {return this.loginType === Y.ANONYMOUS;} }, { key: "isCustomAuth", get: function get() {return this.loginType === Y.CUSTOM;} }, { key: "isWeixinAuth", get: function get() {return this.loginType === Y.WECHAT || this.loginType === Y.WECHAT_OPEN || this.loginType === Y.WECHAT_PUBLIC;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return oe;}();var ie = /*#__PURE__*/function (_ne) {_inherits(ie, _ne);var _super4 = _createSuper(ie);function ie() {_classCallCheck(this, ie);return _super4.apply(this, arguments);}_createClass(ie, [{ key: "signIn", value: function () {var _signIn = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var _this$_cache$keys7, e, t, s, n, r, _e14;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:this._cache.updatePersistence("local");_this$_cache$keys7 = this._cache.keys;e = _this$_cache$keys7.anonymousUuidKey;t = _this$_cache$keys7.refreshTokenKey;s = this._cache.getStore(e) || void 0;n = this._cache.getStore(t) || void 0;_context13.next = 8;return this._request.send("auth.signInAnonymously", { anonymous_uuid: s, refresh_token: n });case 8:r = _context13.sent;if (!(r.uuid && r.refresh_token)) {_context13.next = 20;break;}this._setAnonymousUUID(r.uuid);this.setRefreshToken(r.refresh_token);_context13.next = 14;return this._request.refreshAccessToken();case 14:j(H);j(V, { env: this.config.env, loginType: Y.ANONYMOUS, persistence: "local" });_e14 = new oe(this.config.env);_context13.next = 19;return _e14.user.refresh();case 19:return _context13.abrupt("return", _e14);case 20:throw new Error("匿名登录失败");case 21:case "end":return _context13.stop();}}}, _callee13, this);}));function signIn() {return _signIn.apply(this, arguments);}return signIn;}() }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {var _this$_cache$keys8, t, s, n, r, o;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_this$_cache$keys8 = this._cache.keys;t = _this$_cache$keys8.anonymousUuidKey;s = _this$_cache$keys8.refreshTokenKey;n = this._cache.getStore(t);r = this._cache.getStore(s);_context14.next = 7;return this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: n, refresh_token: r, ticket: e });case 7:o = _context14.sent;if (!o.refresh_token) {_context14.next = 16;break;}this._clearAnonymousUUID();this.setRefreshToken(o.refresh_token);_context14.next = 13;return this._request.refreshAccessToken();case 13:j(z, { env: this.config.env });j(V, { loginType: Y.CUSTOM, persistence: "local" });return _context14.abrupt("return", { credential: { refreshToken: o.refresh_token } });case 16:throw new Error("匿名转化失败");case 17:case "end":return _context14.stop();}}}, _callee14, this);}));function linkAndRetrieveDataWithTicket(_x9) {return _linkAndRetrieveDataWithTicket.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "_setAnonymousUUID", value: function _setAnonymousUUID(e) {var _this$_cache$keys9 = this._cache.keys,t = _this$_cache$keys9.anonymousUuidKey,s = _this$_cache$keys9.loginTypeKey;this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(s, Y.ANONYMOUS);} }, { key: "_clearAnonymousUUID", value: function _clearAnonymousUUID() {this._cache.removeStore(this._cache.keys.anonymousUuidKey);} }]);return ie;}(ne);var ae = /*#__PURE__*/function (_ne2) {_inherits(ae, _ne2);var _super5 = _createSuper(ae);function ae() {_classCallCheck(this, ae);return _super5.apply(this, arguments);}_createClass(ae, [{ key: "signIn", value: function () {var _signIn2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15(e) {var t, s;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:if (!("string" != typeof e)) {_context15.next = 2;break;}throw new Error("ticket must be a string");case 2:t = this._cache.keys.refreshTokenKey;_context15.next = 5;return this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t) || "" });case 5:s = _context15.sent;if (!s.refresh_token) {_context15.next = 15;break;}this.setRefreshToken(s.refresh_token);_context15.next = 10;return this._request.refreshAccessToken();case 10:j(H);j(V, { env: this.config.env, loginType: Y.CUSTOM, persistence: this.config.persistence });_context15.next = 14;return this.refreshUserInfo();case 14:return _context15.abrupt("return", new oe(this.config.env));case 15:throw new Error("自定义登录失败");case 16:case "end":return _context15.stop();}}}, _callee15, this);}));function signIn(_x10) {return _signIn2.apply(this, arguments);}return signIn;}() }]);return ae;}(ne);var ce = /*#__PURE__*/function (_ne3) {_inherits(ce, _ne3);var _super6 = _createSuper(ce);function ce() {_classCallCheck(this, ce);return _super6.apply(this, arguments);}_createClass(ce, [{ key: "signIn", value: function () {var _signIn3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16(e, t) {var s, n, r, o, i;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:if (!("string" != typeof e)) {_context16.next = 2;break;}throw new Error("email must be a string");case 2:s = this._cache.keys.refreshTokenKey;_context16.next = 5;return this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t, refresh_token: this._cache.getStore(s) || "" });case 5:n = _context16.sent;r = n.refresh_token;o = n.access_token;i = n.access_token_expire;if (!r) {_context16.next = 22;break;}this.setRefreshToken(r);if (!(o && i)) {_context16.next = 15;break;}this.setAccessToken(o, i);_context16.next = 17;break;case 15:_context16.next = 17;return this._request.refreshAccessToken();case 17:_context16.next = 19;return this.refreshUserInfo();case 19:j(H);j(V, { env: this.config.env, loginType: Y.EMAIL, persistence: this.config.persistence });return _context16.abrupt("return", new oe(this.config.env));case 22:throw n.code ? new Error("\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: [".concat(n.code, "] ").concat(n.message)) : new Error("邮箱登录失败");case 23:case "end":return _context16.stop();}}}, _callee16, this);}));function signIn(_x11, _x12) {return _signIn3.apply(this, arguments);}return signIn;}() }, { key: "activate", value: function () {var _activate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:return _context17.abrupt("return", this._request.send("auth.activateEndUserMail", { token: e }));case 1:case "end":return _context17.stop();}}}, _callee17, this);}));function activate(_x13) {return _activate.apply(this, arguments);}return activate;}() }, { key: "resetPasswordWithToken", value: function () {var _resetPasswordWithToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18(e, t) {return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:return _context18.abrupt("return", this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t }));case 1:case "end":return _context18.stop();}}}, _callee18, this);}));function resetPasswordWithToken(_x14, _x15) {return _resetPasswordWithToken.apply(this, arguments);}return resetPasswordWithToken;}() }]);return ce;}(ne);var ue = /*#__PURE__*/function (_ne4) {_inherits(ue, _ne4);var _super7 = _createSuper(ue);function ue() {_classCallCheck(this, ue);return _super7.apply(this, arguments);}_createClass(ue, [{ key: "signIn", value: function () {var _signIn4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {var s, n, r, o, i;return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:if (!("string" != typeof e)) {_context19.next = 2;break;}throw new Error("username must be a string");case 2:"string" != typeof t && (t = "", console.warn("password is empty"));s = this._cache.keys.refreshTokenKey;_context19.next = 6;return this._request.send("auth.signIn", { loginType: Y.USERNAME, username: e, password: t, refresh_token: this._cache.getStore(s) || "" });case 6:n = _context19.sent;r = n.refresh_token;o = n.access_token_expire;i = n.access_token;if (!r) {_context19.next = 23;break;}this.setRefreshToken(r);if (!(i && o)) {_context19.next = 16;break;}this.setAccessToken(i, o);_context19.next = 18;break;case 16:_context19.next = 18;return this._request.refreshAccessToken();case 18:_context19.next = 20;return this.refreshUserInfo();case 20:j(H);j(V, { env: this.config.env, loginType: Y.USERNAME, persistence: this.config.persistence });return _context19.abrupt("return", new oe(this.config.env));case 23:throw n.code ? new Error("\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: [".concat(n.code, "] ").concat(n.message)) : new Error("用户名密码登录失败");case 24:case "end":return _context19.stop();}}}, _callee19, this);}));function signIn(_x16, _x17) {return _signIn4.apply(this, arguments);}return signIn;}() }]);return ue;}(ne);var he = /*#__PURE__*/function () {function he(e) {_classCallCheck(this, he);this.config = e, this._cache = L(e.env), this._request = se(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), K(V, this._onLoginTypeChanged);}_createClass(he, [{ key: "anonymousAuthProvider", value: function anonymousAuthProvider() {return new ie(this.config);} }, { key: "customAuthProvider", value: function customAuthProvider() {return new ae(this.config);} }, { key: "emailAuthProvider", value: function emailAuthProvider() {return new ce(this.config);} }, { key: "usernameAuthProvider", value: function usernameAuthProvider() {return new ue(this.config);} }, { key: "signInAnonymously", value: function () {var _signInAnonymously = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:return _context20.abrupt("return", new ie(this.config).signIn());case 1:case "end":return _context20.stop();}}}, _callee20, this);}));function signInAnonymously() {return _signInAnonymously.apply(this, arguments);}return signInAnonymously;}() }, { key: "signInWithEmailAndPassword", value: function () {var _signInWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:return _context21.abrupt("return", new ce(this.config).signIn(e, t));case 1:case "end":return _context21.stop();}}}, _callee21, this);}));function signInWithEmailAndPassword(_x18, _x19) {return _signInWithEmailAndPassword.apply(this, arguments);}return signInWithEmailAndPassword;}() }, { key: "signInWithUsernameAndPassword", value: function signInWithUsernameAndPassword(e, t) {return new ue(this.config).signIn(e, t);} }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee22(e) {return _regenerator.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:this._anonymousAuthProvider || (this._anonymousAuthProvider = new ie(this.config)), K(z, this._onAnonymousConverted);_context22.next = 3;return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);case 3:return _context22.abrupt("return", _context22.sent);case 4:case "end":return _context22.stop();}}}, _callee22, this);}));function linkAndRetrieveDataWithTicket(_x20) {return _linkAndRetrieveDataWithTicket2.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "signOut", value: function () {var _signOut = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee23() {var _this$_cache$keys10, e, t, s, n, r;return _regenerator.default.wrap(function _callee23$(_context23) {while (1) {switch (_context23.prev = _context23.next) {case 0:if (!(this.loginType === Y.ANONYMOUS)) {_context23.next = 2;break;}throw new Error("匿名用户不支持登出操作");case 2:_this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, s = _this$_cache$keys10.accessTokenExpireKey, n = this._cache.getStore(e);if (n) {_context23.next = 5;break;}return _context23.abrupt("return");case 5:_context23.next = 7;return this._request.send("auth.logout", { refresh_token: n });case 7:r = _context23.sent;return _context23.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(s), j(H), j(V, { env: this.config.env, loginType: Y.NULL, persistence: this.config.persistence }), r));case 9:case "end":return _context23.stop();}}}, _callee23, this);}));function signOut() {return _signOut.apply(this, arguments);}return signOut;}() }, { key: "signUpWithEmailAndPassword", value: function () {var _signUpWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {return _regenerator.default.wrap(function _callee24$(_context24) {while (1) {switch (_context24.prev = _context24.next) {case 0:return _context24.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t }));case 1:case "end":return _context24.stop();}}}, _callee24, this);}));function signUpWithEmailAndPassword(_x21, _x22) {return _signUpWithEmailAndPassword.apply(this, arguments);}return signUpWithEmailAndPassword;}() }, { key: "sendPasswordResetEmail", value: function () {var _sendPasswordResetEmail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {return _regenerator.default.wrap(function _callee25$(_context25) {while (1) {switch (_context25.prev = _context25.next) {case 0:return _context25.abrupt("return", this._request.send("auth.sendPasswordResetEmail", { email: e }));case 1:case "end":return _context25.stop();}}}, _callee25, this);}));function sendPasswordResetEmail(_x23) {return _sendPasswordResetEmail.apply(this, arguments);}return sendPasswordResetEmail;}() }, { key: "onLoginStateChanged", value: function onLoginStateChanged(e) {var _this9 = this;K(H, function () {var t = _this9.hasLoginState();e.call(_this9, t);});var t = this.hasLoginState();e.call(this, t);} }, { key: "onLoginStateExpired", value: function onLoginStateExpired(e) {K(W, e.bind(this));} }, { key: "onAccessTokenRefreshed", value: function onAccessTokenRefreshed(e) {K(J, e.bind(this));} }, { key: "onAnonymousConverted", value: function onAnonymousConverted(e) {K(z, e.bind(this));} }, { key: "onLoginTypeChanged", value: function onLoginTypeChanged(e) {var _this10 = this;K(V, function () {var t = _this10.hasLoginState();e.call(_this10, t);});} }, { key: "getAccessToken", value: function () {var _getAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee26() {return _regenerator.default.wrap(function _callee26$(_context26) {while (1) {switch (_context26.prev = _context26.next) {case 0:_context26.next = 2;return this._request.getAccessToken();case 2:_context26.t0 = _context26.sent.accessToken;_context26.t1 = this.config.env;return _context26.abrupt("return", { accessToken: _context26.t0, env: _context26.t1 });case 5:case "end":return _context26.stop();}}}, _callee26, this);}));function getAccessToken() {return _getAccessToken2.apply(this, arguments);}return getAccessToken;}() }, { key: "hasLoginState", value: function hasLoginState() {var e = this._cache.keys.refreshTokenKey;return this._cache.getStore(e) ? new oe(this.config.env) : null;} }, { key: "isUsernameRegistered", value: function () {var _isUsernameRegistered = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee27(e) {var _yield$this$_request$5, t;return _regenerator.default.wrap(function _callee27$(_context27) {while (1) {switch (_context27.prev = _context27.next) {case 0:if (!("string" != typeof e)) {_context27.next = 2;break;}throw new Error("username must be a string");case 2:_context27.next = 4;return this._request.send("auth.isUsernameRegistered", { username: e });case 4:_yield$this$_request$5 = _context27.sent;t = _yield$this$_request$5.data;return _context27.abrupt("return", t && t.isRegistered);case 7:case "end":return _context27.stop();}}}, _callee27, this);}));function isUsernameRegistered(_x24) {return _isUsernameRegistered.apply(this, arguments);}return isUsernameRegistered;}() }, { key: "getLoginState", value: function getLoginState() {return Promise.resolve(this.hasLoginState());} }, { key: "signInWithTicket", value: function () {var _signInWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {return _regenerator.default.wrap(function _callee28$(_context28) {while (1) {switch (_context28.prev = _context28.next) {case 0:return _context28.abrupt("return", new ae(this.config).signIn(e));case 1:case "end":return _context28.stop();}}}, _callee28, this);}));function signInWithTicket(_x25) {return _signInWithTicket.apply(this, arguments);}return signInWithTicket;}() }, { key: "shouldRefreshAccessToken", value: function shouldRefreshAccessToken(e) {this._request._shouldRefreshAccessTokenHook = e.bind(this);} }, { key: "getUserInfo", value: function getUserInfo() {return this._request.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, { requestId: e.seqId });});} }, { key: "getAuthHeader", value: function getAuthHeader() {var _this$_cache$keys11 = this._cache.keys,e = _this$_cache$keys11.refreshTokenKey,t = _this$_cache$keys11.accessTokenKey,s = this._cache.getStore(e);return { "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + s };} }, { key: "_onAnonymousConverted", value: function _onAnonymousConverted(e) {var t = e.data.env;t === this.config.env && this._cache.updatePersistence(this.config.persistence);} }, { key: "_onLoginTypeChanged", value: function _onLoginTypeChanged(e) {var _e$data = e.data,t = _e$data.loginType,s = _e$data.persistence,n = _e$data.env;n === this.config.env && (this._cache.updatePersistence(s), this._cache.setStore(this._cache.keys.loginTypeKey, t));} }, { key: "currentUser", get: function get() {var e = this.hasLoginState();return e && e.user || null;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return he;}();var le = function le(e, t) {t = t || A();var s = se(this.config.env),n = e.cloudPath,r = e.filePath,o = e.onUploadProgress,_e$fileType = e.fileType,i = _e$fileType === void 0 ? "image" : _e$fileType;return s.send("storage.getUploadMetadata", { path: n }).then(function (e) {var _e$data2 = e.data,a = _e$data2.url,c = _e$data2.authorization,u = _e$data2.token,h = _e$data2.fileId,l = _e$data2.cosFileId,d = e.requestId,f = { key: n, signature: c, "x-cos-meta-fileid": l, success_action_status: "201", "x-cos-security-token": u };s.upload({ url: a, data: f, file: r, name: n, fileType: i, onUploadProgress: o }).then(function (e) {201 === e.statusCode ? t(null, { fileID: h, requestId: d }) : t(new Error("STORAGE_REQUEST_FAIL: " + e.data));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;},de = function de(e, t) {t = t || A();var s = se(this.config.env),n = e.cloudPath;return s.send("storage.getUploadMetadata", { path: n }).then(function (e) {t(null, e);}).catch(function (e) {t(e);}), t.promise;},fe = function fe(_ref5, t) {var e = _ref5.fileList;if (t = t || A(), !e || !Array.isArray(e)) return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };var _iterator3 = _createForOfIteratorHelper(e),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _t6 = _step3.value;if (!_t6 || "string" != typeof _t6) return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };}} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}var s = { fileid_list: e };return se(this.config.env).send("storage.batchDeleteFile", s).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},pe = function pe(_ref6, t) {var e = _ref6.fileList;t = t || A(), e && Array.isArray(e) || t(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });var s = [];var _iterator4 = _createForOfIteratorHelper(e),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _n6 = _step4.value;"object" == typeof _n6 ? (_n6.hasOwnProperty("fileID") && _n6.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), s.push({ fileid: _n6.fileID, max_age: _n6.maxAge })) : "string" == typeof _n6 ? s.push({ fileid: _n6 }) : t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });}} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}var n = { file_list: s };return se(this.config.env).send("storage.batchGetDownloadUrl", n).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},ge = /*#__PURE__*/function () {var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee29(_ref7, t) {var e, s, n, r;return _regenerator.default.wrap(function _callee29$(_context29) {while (1) {switch (_context29.prev = _context29.next) {case 0:e = _ref7.fileID;_context29.next = 3;return pe.call(this, { fileList: [{ fileID: e, maxAge: 600 }] });case 3:s = _context29.sent.fileList[0];if (!("SUCCESS" !== s.code)) {_context29.next = 6;break;}return _context29.abrupt("return", t ? t(s) : new Promise(function (e) {e(s);}));case 6:n = se(this.config.env);r = s.download_url;if (!(r = encodeURI(r), !t)) {_context29.next = 10;break;}return _context29.abrupt("return", n.download({ url: r }));case 10:_context29.t0 = t;_context29.next = 13;return n.download({ url: r });case 13:_context29.t1 = _context29.sent;(0, _context29.t0)(_context29.t1);case 15:case "end":return _context29.stop();}}}, _callee29, this);}));return function ge(_x26, _x27) {return _ref8.apply(this, arguments);};}(),me = function me(_ref9, o) {var e = _ref9.name,t = _ref9.data,s = _ref9.query,n = _ref9.parse,r = _ref9.search;var i = o || A();var a;try {a = t ? JSON.stringify(t) : "";} catch (e) {return Promise.reject(e);}if (!e) return Promise.reject(new Error("函数名不能为空"));var c = { inQuery: s, parse: n, search: r, function_name: e, request_data: a };return se(this.config.env).send("functions.invokeFunction", c).then(function (e) {if (e.code) i(null, e);else {var _t7 = e.data.response_data;if (n) i(null, { result: _t7, requestId: e.requestId });else try {_t7 = JSON.parse(e.data.response_data), i(null, { result: _t7, requestId: e.requestId });} catch (e) {i(new Error("response data must be json"));}}return i.promise;}).catch(function (e) {i(e);}), i.promise;},ye = { timeout: 15e3, persistence: "session" },_e = {};var ve = /*#__PURE__*/function () {function ve(e) {_classCallCheck(this, ve);this.config = e || this.config, this.authObj = void 0;}_createClass(ve, [{ key: "init", value: function init(e) {switch (b.adapter || (this.requestClient = new b.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD") })), this.config = _objectSpread(_objectSpread({}, ye), e), !0) {case this.config.timeout > 6e5:console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;break;case this.config.timeout < 100:console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;}return new ve(this.config);} }, { key: "auth", value: function auth() {var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref10.persistence;if (this.authObj) return this.authObj;var t = e || b.adapter.primaryStorage || ye.persistence;var s;return t !== this.config.persistence && (this.config.persistence = t), function (e) {var t = e.env;q[t] = new R(e), F[t] = new R(_objectSpread(_objectSpread({}, e), {}, { persistence: "local" }));}(this.config), s = this.config, te[s.env] = new ee(s), this.authObj = new he(this.config), this.authObj;} }, { key: "on", value: function on(e, t) {return K.apply(this, [e, t]);} }, { key: "off", value: function off(e, t) {return B.apply(this, [e, t]);} }, { key: "callFunction", value: function callFunction(e, t) {return me.apply(this, [e, t]);} }, { key: "deleteFile", value: function deleteFile(e, t) {return fe.apply(this, [e, t]);} }, { key: "getTempFileURL", value: function getTempFileURL(e, t) {return pe.apply(this, [e, t]);} }, { key: "downloadFile", value: function downloadFile(e, t) {return ge.apply(this, [e, t]);} }, { key: "uploadFile", value: function uploadFile(e, t) {return le.apply(this, [e, t]);} }, { key: "getUploadMetadata", value: function getUploadMetadata(e, t) {return de.apply(this, [e, t]);} }, { key: "registerExtension", value: function registerExtension(e) {_e[e.name] = e;} }, { key: "invokeExtension", value: function () {var _invokeExtension = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee30(e, t) {var s;return _regenerator.default.wrap(function _callee30$(_context30) {while (1) {switch (_context30.prev = _context30.next) {case 0:s = _e[e];if (s) {_context30.next = 3;break;}throw Error("\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C"));case 3:_context30.next = 5;return s.invoke(t, this);case 5:return _context30.abrupt("return", _context30.sent);case 6:case "end":return _context30.stop();}}}, _callee30, this);}));function invokeExtension(_x28, _x29) {return _invokeExtension.apply(this, arguments);}return invokeExtension;}() }, { key: "useAdapters", value: function useAdapters(e) {var _ref11 = U(e) || {},t = _ref11.adapter,s = _ref11.runtime;t && (b.adapter = t), s && (b.runtime = s);} }]);return ve;}();var we = new ve();function Se(e, t, s) {void 0 === s && (s = {});var n = /\?/.test(t),r = "";for (var o in s) {"" === r ? !n && (t += "?") : r += "&", r += o + "=" + encodeURIComponent(s[o]);}return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;}var ke = /*#__PURE__*/function () {function ke() {_classCallCheck(this, ke);}_createClass(ke, [{ key: "post", value: function post(e) {var t = e.url,s = e.data,n = e.headers;return new Promise(function (e, r) {_.request({ url: Se("https:", t), data: s, method: "POST", header: n, success: function success(t) {e(t);}, fail: function fail(e) {r(e);} });});} }, { key: "upload", value: function upload(e) {return new Promise(function (t, s) {var n = e.url,r = e.file,o = e.data,i = e.headers,a = e.fileType,c = _.uploadFile({ url: Se("https:", n), name: "file", formData: Object.assign({}, o), filePath: r, fileType: a, header: i, success: function success(e) {var s = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && o.success_action_status && (s.statusCode = parseInt(o.success_action_status, 10)), t(s);}, fail: function fail(e) { false && false, s(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});} }]);return ke;}();var Te = { setItem: function setItem(e, t) {_.setStorageSync(e, t);}, getItem: function getItem(e) {return _.getStorageSync(e);}, removeItem: function removeItem(e) {_.removeStorageSync(e);}, clear: function clear() {_.clearStorageSync();} };var Pe = { genAdapter: function genAdapter() {return { root: {}, reqClass: ke, localStorage: Te, primaryStorage: "local" };}, isMatch: function isMatch() {return !0;}, runtime: "uni_app" };we.useAdapters(Pe);var Ae = we,Ie = Ae.init;Ae.init = function (e) {e.env = e.spaceId;var t = Ie.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var s = t.auth;t.auth = function (e) {var t = s.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = o(t[e]).bind(t);}), t;}, t.customAuth = t.auth;return ["deleteFile", "getTempFileURL", "downloadFile"].forEach(function (e) {t[e] = o(t[e]).bind(t);}), t;};var Ee = /*#__PURE__*/function (_v) {_inherits(Ee, _v);var _super8 = _createSuper(Ee);function Ee() {_classCallCheck(this, Ee);return _super8.apply(this, arguments);}_createClass(Ee, [{ key: "getAccessToken", value: function getAccessToken() {var _this11 = this;return new Promise(function (e, t) {_this11.setAccessToken("Anonymous_Access_token"), e("Anonymous_Access_token");});} }, { key: "setupRequest", value: function setupRequest(e, t) {var s = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),n = { "Content-Type": "application/json" };"auth" !== t && (s.token = this.accessToken, n["x-basement-token"] = this.accessToken), n["x-serverless-sign"] = y.sign(s, this.config.clientSecret);var r = p(),o = r.APPID,i = r.PLATFORM,a = r.DEVICEID,c = r.CLIENT_SDK_VERSION;return n["x-client-platform"] = i, n["x-client-appid"] = o, n["x-client-device-id"] = a, n["x-client-version"] = c, n["x-client-token"] = _.getStorageSync("uni_id_token"), { url: this.config.requestUrl, method: "POST", data: s, dataType: "json", header: JSON.parse(JSON.stringify(n)) };} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref12) {var _this12 = this;var e = _ref12.url,t = _ref12.formData,s = _ref12.name,n = _ref12.filePath,r = _ref12.fileType,o = _ref12.onUploadProgress;return new Promise(function (a, c) {var u = _this12.adapter.uploadFile({ url: e, formData: t, name: s, filePath: n, fileType: r, success: function success(e) {e && e.statusCode < 400 ? a(e) : c(new i({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {c(new i({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && u && "function" == typeof u.onProgressUpdate && u.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "uploadFile", value: function uploadFile(_ref13) {var _this13 = this;var e = _ref13.filePath,t = _ref13.cloudPath,_ref13$fileType = _ref13.fileType,s = _ref13$fileType === void 0 ? "image" : _ref13$fileType,n = _ref13.onUploadProgress;if (!t) throw new i({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var r;return this.getOSSUploadOptionsFromPath({ cloudPath: t }).then(function (t) {var _t$result = t.result,o = _t$result.url,i = _t$result.formData,a = _t$result.name,c = _t$result.fileUrl;r = c;var u = { url: o, formData: i, name: a, filePath: e, fileType: s };return _this13.uploadFileToOSS(Object.assign({}, u, { onUploadProgress: n }));}).then(function () {return _this13.reportOSSUpload({ cloudPath: t });}).then(function (t) {return new Promise(function (s, n) {t.success ? s({ success: !0, filePath: e, fileID: r }) : n(new i({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }]);return Ee;}(v);var Oe = { init: function init(e) {var t = new Ee(e);["deleteFile", "getTempFileURL"].forEach(function (e) {t[e] = o(t[e]).bind(t);});var s = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return s;}, t.customAuth = t.auth, t;} };var Ue, be;function De(_ref14) {var e = _ref14.name,t = _ref14.data,s = _ref14.spaceId,n = _ref14.provider;Ue || (Ue = p(), be = { ak: h.appid, p: "android" === d ? "a" : "i", ut: m(), uuid: g() });var r = JSON.parse(JSON.stringify(t || {})),o = e,i = s,a = { tencent: "t", aliyun: "a" }[n];{var _e15 = Object.assign({}, be, { fn: o, sid: i, pvd: a });Object.assign(r, { clientInfo: Ue, uniCloudClientInfo: encodeURIComponent(JSON.stringify(_e15)) });var _uni$getSystemInfoSyn2 = uni.getSystemInfoSync(),_t8 = _uni$getSystemInfoSyn2.deviceId;r.uniCloudDeviceId = _t8;}if (!r.uniIdToken) {var _e16 = _.getStorageSync("uni_id_token") || _.getStorageSync("uniIdToken");_e16 && (r.uniIdToken = _e16);}return r;}function Ce(_ref15) {var _this14 = this;var e = _ref15.name,t = _ref15.data;var s = this.localAddress,n = this.localPort,r = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider],o = this.config.spaceId,a = "http://".concat(s, ":").concat(n, "/system/check-function"),c = "http://".concat(s, ":").concat(n, "/cloudfunctions/").concat(e);return new Promise(function (t, s) {_.request({ method: "POST", url: a, data: { name: e, platform: "mp-weixin", provider: r, spaceId: o }, timeout: 3e3, success: function success(e) {t(e);}, fail: function fail() {t({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });} });}).then(function () {var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref16.data;var _ref17 = e || {},t = _ref17.code,s = _ref17.message;return { code: 0 === t ? 0 : t || "SYS_ERR", message: s || "SYS_ERR" };}).then(function (_ref18) {var s = _ref18.code,n = _ref18.message;if (0 !== s) {switch (s) {case "MODULE_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "FUNCTION_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "ACTION_ENCRYPTED":console.error(n || "需要访问加密的uni-clientDB-action，自动切换为云端环境");break;case "NETWORK_ERROR":{var _e17 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";throw console.error(_e17), new Error(_e17);}case "SWITCH_TO_CLOUD":break;default:{var _e18 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(n, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");throw console.error(_e18), new Error(_e18);}}return _this14.originCallFunction({ name: e, data: t });}return new Promise(function (s, n) {var a = De({ name: e, data: t, provider: _this14.config.provider, spaceId: o });_.request({ method: "POST", url: c, data: { provider: r, platform: "mp-weixin", param: a }, success: function success() {var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref19.statusCode,t = _ref19.data;return !e || e >= 400 ? n(new i({ code: t.code || "SYS_ERR", message: t.message || "request:fail" })) : s({ result: t });}, fail: function fail(e) {n(new i({ code: e.code || e.errCode || "SYS_ERR", message: e.message || e.errMsg || "request:fail" }));} });});});}var xe = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确已经是否已上传到服务空间", mode: "append" }];var Re = /[\\^$.*+?()[\]{}|]/g,qe = RegExp(Re.source);function Fe(e, t, s) {return e.replace(new RegExp((n = t) && qe.test(n) ? n.replace(Re, "\\$&") : n, "g"), s);var n;}function Le(e) {var t = e.callFunction;e.callFunction = function (e) {var _this15 = this;var s;s = this.isReady ? Promise.resolve() : this.initUniCloud;var n = e.name;return s.then(function () {e.data = De({ name: n, data: e.data, provider: _this15.config.provider, spaceId: _this15.config.spaceId });var s = { aliyun: "aliyun", tencent: "tcb" }[_this15.config.provider];return new Promise(function (r, o) {t.call(_this15, e).then(function (e) {if (_this15.config.useDebugFunction && e && e.requestId) {var _t9 = JSON.stringify({ spaceId: _this15.config.spaceId, functionName: n, requestId: e.requestId });console.log("[".concat(s, "-request]").concat(_t9, "[/").concat(s, "-request]"));}r(e);}).catch(function (t) {if (_this15.config.useDebugFunction && t && t.requestId) {var _e19 = JSON.stringify({ spaceId: _this15.config.spaceId, functionName: n, requestId: t.requestId });console.log("[".concat(s, "-request]").concat(_e19, "[/").concat(s, "-request]"));}t && t.message && (t.message = function () {var _ref20 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref20$message = _ref20.message,e = _ref20$message === void 0 ? "" : _ref20$message,_ref20$extraInfo = _ref20.extraInfo,t = _ref20$extraInfo === void 0 ? {} : _ref20$extraInfo,_ref20$formatter = _ref20.formatter,s = _ref20$formatter === void 0 ? [] : _ref20$formatter;for (var _n7 = 0; _n7 < s.length; _n7++) {var _s$_n = s[_n7],_r3 = _s$_n.rule,_o2 = _s$_n.content,_i2 = _s$_n.mode,_a = e.match(_r3);if (!_a) continue;var _c = _o2;for (var _e20 = 1; _e20 < _a.length; _e20++) {_c = Fe(_c, "{$".concat(_e20, "}"), _a[_e20]);}for (var _e21 in t) {_c = Fe(_c, "{".concat(_e21, "}"), t[_e21]);}switch (_i2) {case "replace":return _c;case "append":default:return e + _c;}}return e;}({ message: "[".concat(e.name, "]: ").concat(t.message), formatter: xe, extraInfo: { functionName: n } })), o(t);});});});};var s = e.callFunction;e.originCallFunction = e.callFunction, e.callFunction = function (t) {return o(function (t) {var _this16 = this;var n;n = e.isReady ? Promise.resolve() : e.initUniCloud;var r = n.then(function () {return  true && e.debugInfo && !e.debugInfo.forceRemote && [{"provider":"aliyun","spaceName":"rocking-jam","spaceId":"57d34227-0647-4731-8f4e-1c944cbbc6f5","clientSecret":"j6QBHBTPnYTo64NYz8rNKA==","endpoint":"https://api.bspapp.com"}] ? Ce.call(_this16, t) : s.call(_this16, t);});return Object.defineProperty(r, "result", { get: function get() {return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};} }), r;}).call(this, t);};}var Ne = Symbol("CLIENT_DB_INTERNAL");function Me(e, t) {return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Ne, new Proxy(e, { get: function get(e, s, n) {return function (e, t) {return Object.prototype.hasOwnProperty.call(e, t);}(e, s) || e[s] || "string" != typeof s ? e[s] : t.get(e, s, n);} });}var $e = /*#__PURE__*/function (_Error2) {_inherits($e, _Error2);var _super9 = _createSuper($e);function $e(e, t) {var _this17;_classCallCheck(this, $e);_this17 = _super9.call(this, e), _this17.code = t;return _this17;}return $e;}( /*#__PURE__*/_wrapNativeSuper(Error));function Ke(e) {switch (t = e, Object.prototype.toString.call(t).slice(8, -1).toLowerCase()) {case "array":return e.map(function (e) {return Ke(e);});case "object":return e._internalType === Ne || Object.keys(e).forEach(function (t) {e[t] = Ke(e[t]);}), e;case "regexp":return { $regexp: { source: e.source, flags: e.flags } };case "date":return { $date: e.toISOString() };default:return e;}var t;}function je() {var e = _.getStorageSync("uni_id_token") || "",t = e.split(".");if (!e || 3 !== t.length) return { uid: null, role: [], permission: [], tokenExpired: 0 };var s;try {s = JSON.parse((n = t[1], decodeURIComponent(atob(n).split("").map(function (e) {return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);}).join(""))));} catch (e) {throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);}var n;return s.tokenExpired = 1e3 * s.exp, delete s.exp, delete s.iat, s;}var Be = t(s(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 });var s = "chooseAndUploadFile:fail";function n(e, t) {return e.tempFiles.forEach(function (e, s) {e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + s + e.name.substring(e.name.lastIndexOf("."));}), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {return e.path;})), e;}function r(e, t, _ref21) {var s = _ref21.onChooseFile,n = _ref21.onUploadProgress;return t.then(function (e) {if (s) {var _t10 = s(e);if (void 0 !== _t10) return Promise.resolve(_t10).then(function (t) {return void 0 === t ? e : t;});}return e;}).then(function (t) {return !1 === t ? { errMsg: "chooseAndUploadFile:ok", tempFilePaths: [], tempFiles: [] } : function (e, t) {var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;var n = arguments.length > 3 ? arguments[3] : undefined;(t = Object.assign({}, t)).errMsg = "chooseAndUploadFile:ok";var r = t.tempFiles,o = r.length;var i = 0;return new Promise(function (a) {for (; i < s;) {c();}function c() {var s = i++;if (s >= o) return void (!r.find(function (e) {return !e.url && !e.errMsg;}) && a(t));var u = r[s];e.uploadFile({ filePath: u.path, cloudPath: u.cloudPath, fileType: u.fileType, onUploadProgress: function onUploadProgress(e) {e.index = s, e.tempFile = u, e.tempFilePath = u.path, n && n(e);} }).then(function (e) {u.url = e.fileID, s < o && c();}).catch(function (e) {u.errMsg = e.errMsg || e.message, s < o && c();});}});}(e, t, 5, n);});}t.initChooseAndUploadFile = function (e) {return function () {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: "all" };return "image" === t.type ? r(e, function (e) {var t = e.count,r = e.sizeType,_e$sourceType = e.sourceType,o = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,i = e.extension;return new Promise(function (e, a) {uni.chooseImage({ count: t, sizeType: r, sourceType: o, extension: i, success: function success(t) {e(n(t, "image"));}, fail: function fail(e) {a({ errMsg: e.errMsg.replace("chooseImage:fail", s) });} });});}(t), t) : "video" === t.type ? r(e, function (e) {var t = e.camera,r = e.compressed,o = e.maxDuration,i = e.sourceType,a = e.extension;return new Promise(function (e, c) {uni.chooseVideo({ camera: t, compressed: r, maxDuration: o, sourceType: i, extension: a, success: function success(t) {var s = t.tempFilePath,r = t.duration,o = t.size,i = t.height,a = t.width;e(n({ errMsg: "chooseVideo:ok", tempFilePaths: [s], tempFiles: [{ name: t.tempFile && t.tempFile.name || "", path: s, size: o, type: t.tempFile && t.tempFile.type || "", width: a, height: i, duration: r, fileType: "video", cloudPath: "" }] }, "video"));}, fail: function fail(e) {c({ errMsg: e.errMsg.replace("chooseVideo:fail", s) });} });});}(t), t) : r(e, function (e) {var t = e.count,r = e.extension;return new Promise(function (e, o) {var i = uni.chooseFile;if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (i = wx.chooseMessageFile), "function" != typeof i) return o({ errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });i({ type: "all", count: t, extension: r, success: function success(t) {e(n(t));}, fail: function fail(e) {o({ errMsg: e.errMsg.replace("chooseFile:fail", s) });} });});}(t), t);};};}));var He = "manual";function We(_x30, _x31) {return _We.apply(this, arguments);}function _We() {_We = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee32(e, t) {var s, _e28, n;return _regenerator.default.wrap(function _callee32$(_context32) {while (1) {switch (_context32.prev = _context32.next) {case 0:s = "http://".concat(e, ":").concat(t, "/system/ping");_context32.prev = 1;_context32.next = 4;return n = { url: s, timeout: 500 }, new Promise(function (e, t) {_.request(_objectSpread(_objectSpread({}, n), {}, { success: function success(t) {e(t);}, fail: function fail(e) {t(e);} }));});case 4:_e28 = _context32.sent;return _context32.abrupt("return", !(!_e28.data || 0 !== _e28.data.code));case 8:_context32.prev = 8;_context32.t0 = _context32["catch"](1);return _context32.abrupt("return", !1);case 11:case "end":return _context32.stop();}}}, _callee32, null, [[1, 8]]);}));return _We.apply(this, arguments);}var Ve = new ( /*#__PURE__*/function () {function _class2() {_classCallCheck(this, _class2);}_createClass(_class2, [{ key: "init", value: function init(e) {var t = {};var s = !1 !== e.debugFunction && "development" === "development" && ( false || "app-plus" === "mp-weixin");switch (e.provider) {case "tencent":t = Ae.init(Object.assign(e, { useDebugFunction: s }));break;case "aliyun":t = w.init(Object.assign(e, { useDebugFunction: s }));break;case "private":t = Oe.init(Object.assign(e, { useDebugFunction: s }));break;default:throw new Error("未提供正确的provider参数");}var n = undefined; true && n && !n.code && (t.debugInfo = n), t.isReady = !1;var r = t.auth();return t.initUniCloud = r.getLoginState().then(function (e) {return e ? Promise.resolve() : r.signInAnonymously();}).then(function () {if ( true && t.debugInfo) {var _t$debugInfo = t.debugInfo,_e22 = _t$debugInfo.address,_s4 = _t$debugInfo.servePort;return function () {var _ref22 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee31(e, t) {var s, _n8, _r4;return _regenerator.default.wrap(function _callee31$(_context31) {while (1) {switch (_context31.prev = _context31.next) {case 0:_n8 = 0;case 1:if (!(_n8 < e.length)) {_context31.next = 11;break;}_r4 = e[_n8];_context31.next = 5;return We(_r4, t);case 5:if (!_context31.sent) {_context31.next = 8;break;}s = _r4;return _context31.abrupt("break", 11);case 8:_n8++;_context31.next = 1;break;case 11:return _context31.abrupt("return", { address: s, port: t });case 12:case "end":return _context31.stop();}}}, _callee31);}));return function (_x32, _x33) {return _ref22.apply(this, arguments);};}()(_e22, _s4);}return Promise.resolve();}).then(function () {var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref23.address,s = _ref23.port;if (e) t.localAddress = e, t.localPort = s;else if (t.debugInfo) {var _e23 =  false ? undefined : "warn",_s5 = console[_e23];"remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, _s5("当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试")) : _s5("无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试");}}).then(function () {return function () {if (true) return;if (uni.getStorageSync("__LAST_DCLOUD_APPID") === h.appid) return;uni.setStorageSync("__LAST_DCLOUD_APPID", h.appid), uni.removeStorageSync("uni_id_token") && (console.warn("检测到当前项目与上次运行到此端口的项目不一致，自动清理uni-id保存的token信息（仅开发调试时生效）"), uni.removeStorageSync("uni_id_token"), uni.removeStorageSync("uni_id_token_expired"));}(), new Promise(function (e) { false ? (undefined) : setTimeout(function () {d = uni.getSystemInfoSync().platform, l = uni.getStorageSync("__DC_CLOUD_UUID") || f(32), e();}, 0);});}).then(function () {t.isReady = !0;}), Le(t), function (e) {var t = e.uploadFile;e.uploadFile = function (e) {var _this18 = this;var s;return s = this.isReady ? Promise.resolve() : this.initUniCloud, s.then(function () {return t.call(_this18, e);});};var s = e.uploadFile;e.uploadFile = function (e) {return o(s).call(this, e);};}(t), function (e) {e.database = function () {if (this._database) return this._database;var t = {},s = {};var n = /*#__PURE__*/function () {function n(e, t, s) {_classCallCheck(this, n);this.content = e, this.prevStage = t, this.actionName = s;}_createClass(n, [{ key: "toJSON", value: function toJSON() {var e = this;var t = [e.content];for (; e.prevStage;) {e = e.prevStage, t.push(e.content);}return { $db: t.reverse().map(function (e) {return { $method: e.$method, $param: e.$param };}) };} }, { key: "get", value: function get() {return this._send("get", Array.from(arguments));} }, { key: "add", value: function add() {return this._send("add", Array.from(arguments));} }, { key: "remove", value: function remove() {return this._send("remove", Array.from(arguments));} }, { key: "update", value: function update() {return this._send("update", Array.from(arguments));} }, { key: "end", value: function end() {return this._send("end", Array.from(arguments));} }, { key: "set", value: function set() {throw new Error("clientDB禁止使用set方法");} }, { key: "_send", value: function _send(n, r) {var o = this.toJSON();return o.$db.push({ $method: n, $param: r }), e.callFunction({ name: "DCloud-clientDB", data: { action: this.actionName, command: o } }).then(function (e) {var _e$result = e.result,n = _e$result.code,r = _e$result.message,o = _e$result.token,i = _e$result.tokenExpired,_e$result$systemInfo = _e$result.systemInfo,a = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;if (a) for (var _e24 = 0; _e24 < a.length; _e24++) {var _a$_e = a[_e24],_t11 = _a$_e.level,_s6 = _a$_e.message,_n9 = _a$_e.detail,_r5 =  false ? undefined : _t11,_o3 = console[_r5] || console.log;var _i3 = "[System Info]" + _s6;_n9 && (_i3 = "".concat(_i3, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_n9)), _o3(_i3);}return n ? Promise.reject(new $e(r, n)) : (o && i && t.refreshToken && t.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: i });}), o && i && s.refreshToken && s.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: i });}), Promise.resolve(e));}).catch(function (e) {var t = new $e(e.message, e.code || "SYSTEM_ERROR");return s.error && s.error.forEach(function (e) {e(t);}), /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB"), Promise.reject(e);});} }, { key: "useAggregate", get: function get() {var e = this,t = !1;for (; e.prevStage;) {e = e.prevStage;var _s7 = e.content.$method;if ("aggregate" === _s7 || "pipeline" === _s7) {t = !0;break;}}return t;} }, { key: "count", get: function get() {if (!this.useAggregate) return function () {return this._send("count", Array.from(arguments));};var e = this;return function () {return i({ $method: "count", $param: Ke(Array.from(arguments)) }, e, e.actionName);};} }]);return n;}();var r = ["db.Geo", "db.command", "command.aggregate"];function o(e, t) {return r.indexOf("".concat(e, ".").concat(t)) > -1;}function i(e, t, s) {return Me(new n(e, t, s), { get: function get(e, t) {var n = "db";return e && e.content && (n = e.content.$method), o(n, t) ? i({ $method: t }, e, s) : function () {return i({ $method: t, $param: Ke(Array.from(arguments)) }, e, s);};} });}function a(_ref24) {var e = _ref24.path,t = _ref24.method;return /*#__PURE__*/function () {function _class3() {_classCallCheck(this, _class3);this.param = Array.from(arguments);}_createClass(_class3, [{ key: "toJSON", value: function toJSON() {return { $newDb: [].concat(_toConsumableArray(e.map(function (e) {return { $method: e };})), [{ $method: t, $param: this.param }]) };} }]);return _class3;}();}var c = { auth: { on: function on(e, s) {t[e] = t[e] || [], t[e].indexOf(s) > -1 || t[e].push(s);}, off: function off(e, s) {t[e] = t[e] || [];var n = t[e].indexOf(s);-1 !== n && t[e].splice(n, 1);} }, on: function on(e, t) {s[e] = s[e] || [], s[e].indexOf(t) > -1 || s[e].push(t);}, off: function off(e, t) {s[e] = s[e] || [];var n = s[e].indexOf(t);-1 !== n && s[e].splice(n, 1);}, env: Me({}, { get: function get(e, t) {return { $env: t };} }), action: function action(e) {return Me({}, { get: function get(t, s) {return o("db", s) ? i({ $method: s }, null, e) : function () {return i({ $method: s, $param: Ke(Array.from(arguments)) }, null, e);};} });}, Geo: Me({}, { get: function get(e, t) {return a({ path: ["Geo"], method: t });} }), getCloudEnv: function getCloudEnv(e) {if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");return { $env: e.replace("$cloudEnv_", "") };}, get serverDate() {return a({ path: [], method: "serverDate" });}, get RegExp() {return a({ path: [], method: "RegExp" });} },u = Me(c, { get: function get(e, t) {return o("db", t) ? i({ $method: t }) : function () {return i({ $method: t, $param: Ke(Array.from(arguments)) });};} });return this._database = u, u;};}(t), function (e) {e.getCurrentUserInfo = je, e.chooseAndUploadFile = o(Be.initChooseAndUploadFile(e));}(t), t.init = this.init, t;} }]);return _class2;}())();(function () {{var e = {};if (1 === [{"provider":"aliyun","spaceName":"rocking-jam","spaceId":"57d34227-0647-4731-8f4e-1c944cbbc6f5","clientSecret":"j6QBHBTPnYTo64NYz8rNKA==","endpoint":"https://api.bspapp.com"}].length) e = [{"provider":"aliyun","spaceName":"rocking-jam","spaceId":"57d34227-0647-4731-8f4e-1c944cbbc6f5","clientSecret":"j6QBHBTPnYTo64NYz8rNKA==","endpoint":"https://api.bspapp.com"}][0], Ve = Ve.init(e);else {var _e25 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo"],t = [{"provider":"aliyun","spaceName":"rocking-jam","spaceId":"57d34227-0647-4731-8f4e-1c944cbbc6f5","clientSecret":"j6QBHBTPnYTo64NYz8rNKA==","endpoint":"https://api.bspapp.com"}].length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间";_e25.forEach(function (e) {Ve[e] = function () {return console.error(t), Promise.reject(new i({ code: "SYS_ERR", message: t }));};});}Object.assign(Ve, { get mixinDatacom() {return e = Ve, { props: { localdata: { type: Array, default: function _default() {return [];} }, options: { type: [Object, Array], default: function _default() {return {};} }, collection: { type: String, default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: !1 }, gettree: { type: [Boolean, String], default: !1 }, gettreepath: { type: [Boolean, String], default: !1 }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: !1 }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: !1 } }, data: function data() {return { mixinDatacomLoading: !1, mixinDatacomHasMore: !1, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} };}, created: function created() {var _this19 = this;this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(function () {var e = [];return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {e.push(_this19[t]);}), e;}, function (e, t) {if (_this19.loadtime === He) return;var s = !1;var n = [];for (var _r6 = 2; _r6 < e.length; _r6++) {e[_r6] !== t[_r6] && (n.push(e[_r6]), s = !0);}e[0] !== t[0] && (_this19.mixinDatacomPage.current = _this19.pageCurrent), _this19.mixinDatacomPage.size = _this19.pageSize, _this19.onMixinDatacomPropsChange(s, n);});}, methods: { onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {}, mixinDatacomEasyGet: function mixinDatacomEasyGet() {var _this20 = this;var _ref25 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref25$getone = _ref25.getone,e = _ref25$getone === void 0 ? !1 : _ref25$getone,t = _ref25.success,s = _ref25.fail;this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (s) {_this20.mixinDatacomLoading = !1;var _s$result = s.result,n = _s$result.data,r = _s$result.count;_this20.getcount && (_this20.mixinDatacomPage.count = r), _this20.mixinDatacomHasMore = n.length < _this20.pageSize;var o = e ? n.length ? n[0] : void 0 : n;_this20.mixinDatacomResData = o, t && t(o);}).catch(function (e) {_this20.mixinDatacomLoading = !1, _this20.mixinDatacomErrorMessage = e, s && s(e);}));}, mixinDatacomGet: function mixinDatacomGet() {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var s = e.database();var n = t.action || this.action;n && (s = s.action(n));var r = t.collection || this.collection;s = s.collection(r);var o = t.where || this.where;o && Object.keys(o).length && (s = s.where(o));var i = t.field || this.field;i && (s = s.field(i));var a = t.foreignKey || this.foreignKey;a && (s = s.foreignKey(a));var c = t.groupby || this.groupby;c && (s = s.groupBy(c));var u = t.groupField || this.groupField;u && (s = s.groupField(u)), !0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (s = s.distinct());var h = t.orderby || this.orderby;h && (s = s.orderBy(h));var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,f = void 0 !== t.getcount ? t.getcount : this.getcount,p = void 0 !== t.gettree ? t.gettree : this.gettree,g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,m = { getCount: f },y = { limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel, startWith: void 0 !== t.startwith ? t.startwith : this.startwith };return p && (m.getTree = y), g && (m.getTreePath = y), s = s.skip(d * (l - 1)).limit(d).get(m), s;} } };var e;} });}})();var ze = Ve;var _default2 = ze;exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"], __webpack_require__(/*! ./../../../../../node-libs-browser/mock/process.js */ 5)))

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse || !wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"zooming-jam","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destory', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueId = this.$options.propsData.vueId;
    var object = center[vueId] = center[vueId] || {};
    object[name] = value;
    if (parents[vueId]) {
      parents[vueId].$forceUpdate();
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      appOptions.onShow.apply(app, args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      appOptions.onHide.apply(app, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch.call(app, args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      appOptions.onShow.apply(vm, args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      appOptions.onHide.apply(vm, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch.call(vm, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 4 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"zooming-jam","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"zooming-jam","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"zooming-jam","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"zooming-jam","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 5 */
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 6);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),
/* 6 */
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 5)))

/***/ }),
/* 7 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 8);

/***/ }),
/* 8 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 9);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 9 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 10 */
/*!**************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.esm.js ***!
  \**************************************************************/
/*! exports provided: I18n, initVueI18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(uni) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18n", function() { return I18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initVueI18n", function() { return initVueI18n; });
const isObject = (val) => val !== null && typeof val === 'object';
class BaseFormatter {
    constructor() {
        this._caches = Object.create(null);
    }
    interpolate(message, values) {
        if (!values) {
            return [message];
        }
        let tokens = this._caches[message];
        if (!tokens) {
            tokens = parse(message);
            this._caches[message] = tokens;
        }
        return compile(tokens, values);
    }
}
const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format) {
    const tokens = [];
    let position = 0;
    let text = '';
    while (position < format.length) {
        let char = format[position++];
        if (char === '{') {
            if (text) {
                tokens.push({ type: 'text', value: text });
            }
            text = '';
            let sub = '';
            char = format[position++];
            while (char !== undefined && char !== '}') {
                sub += char;
                char = format[position++];
            }
            const isClosed = char === '}';
            const type = RE_TOKEN_LIST_VALUE.test(sub)
                ? 'list'
                : isClosed && RE_TOKEN_NAMED_VALUE.test(sub)
                    ? 'named'
                    : 'unknown';
            tokens.push({ value: sub, type });
        }
        else if (char === '%') {
            // when found rails i18n syntax, skip text capture
            if (format[position] !== '{') {
                text += char;
            }
        }
        else {
            text += char;
        }
    }
    text && tokens.push({ type: 'text', value: text });
    return tokens;
}
function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values)
        ? 'list'
        : isObject(values)
            ? 'named'
            : 'unknown';
    if (mode === 'unknown') {
        return compiled;
    }
    while (index < tokens.length) {
        const token = tokens[index];
        switch (token.type) {
            case 'text':
                compiled.push(token.value);
                break;
            case 'list':
                compiled.push(values[parseInt(token.value, 10)]);
                break;
            case 'named':
                if (mode === 'named') {
                    compiled.push(values[token.value]);
                }
                else {
                    if (true) {
                        console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
                    }
                }
                break;
            case 'unknown':
                if (true) {
                    console.warn(`Detect 'unknown' type of token!`);
                }
                break;
        }
        index++;
    }
    return compiled;
}

const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const defaultFormatter = new BaseFormatter();
function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
}
function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
}
function normalizeLocale(locale, messages) {
    if (!locale) {
        return;
    }
    locale = locale.trim().replace(/_/g, '-');
    if (messages[locale]) {
        return locale;
    }
    locale = locale.toLowerCase();
    if (locale.indexOf('zh') === 0) {
        if (locale.indexOf('-hans') !== -1) {
            return 'zh-Hans';
        }
        if (locale.indexOf('-hant') !== -1) {
            return 'zh-Hant';
        }
        if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
            return 'zh-Hant';
        }
        return 'zh-Hans';
    }
    const lang = startsWith(locale, ['en', 'fr', 'es']);
    if (lang) {
        return lang;
    }
}
class I18n {
    constructor({ locale, fallbackLocale, messages, watcher, formater, }) {
        this.locale = 'en';
        this.fallbackLocale = 'en';
        this.message = {};
        this.messages = {};
        this.watchers = [];
        if (fallbackLocale) {
            this.fallbackLocale = fallbackLocale;
        }
        this.formater = formater || defaultFormatter;
        this.messages = messages;
        this.setLocale(locale);
        if (watcher) {
            this.watchLocale(watcher);
        }
    }
    setLocale(locale) {
        const oldLocale = this.locale;
        this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
        this.message = this.messages[this.locale];
        this.watchers.forEach((watcher) => {
            watcher(this.locale, oldLocale);
        });
    }
    getLocale() {
        return this.locale;
    }
    watchLocale(fn) {
        const index = this.watchers.push(fn) - 1;
        return () => {
            this.watchers.splice(index, 1);
        };
    }
    t(key, locale, values) {
        let message = this.message;
        if (typeof locale === 'string') {
            locale = normalizeLocale(locale, this.messages);
            locale && (message = this.messages[locale]);
        }
        else {
            values = locale;
        }
        if (!hasOwn(message, key)) {
            console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
            return key;
        }
        return this.formater.interpolate(message[key], values).join('');
    }
}

function initLocaleWatcher(appVm, i18n) {
    appVm.$i18n &&
        appVm.$i18n.vm.$watch('locale', (newLocale) => {
            i18n.setLocale(newLocale);
        }, {
            immediate: true,
        });
}
function getDefaultLocale() {
    if (typeof navigator !== 'undefined') {
        return navigator.userLanguage || navigator.language;
    }
    if (typeof plus !== 'undefined') {
        // TODO 待调整为最新的获取语言代码
        return plus.os.language;
    }
    return uni.getSystemInfoSync().language;
}
function initVueI18n(messages, fallbackLocale = 'en', locale) {
    const i18n = new I18n({
        locale: locale || fallbackLocale,
        fallbackLocale,
        messages,
    });
    let t = (key, values) => {
        if (typeof getApp !== 'function') {
            // app-plus view
            /* eslint-disable no-func-assign */
            t = function (key, values) {
                return i18n.t(key, values);
            };
        }
        else {
            const appVm = getApp().$vm;
            if (!appVm.$t || !appVm.$i18n) {
                if (!locale) {
                    i18n.setLocale(getDefaultLocale());
                }
                /* eslint-disable no-func-assign */
                t = function (key, values) {
                    return i18n.t(key, values);
                };
            }
            else {
                initLocaleWatcher(appVm, i18n);
                /* eslint-disable no-func-assign */
                t = function (key, values) {
                    const $i18n = appVm.$i18n;
                    const silentTranslationWarn = $i18n.silentTranslationWarn;
                    $i18n.silentTranslationWarn = true;
                    const msg = appVm.$t(key, values);
                    $i18n.silentTranslationWarn = silentTranslationWarn;
                    if (msg !== key) {
                        return msg;
                    }
                    return i18n.t(key, $i18n.locale, values);
                };
            }
        }
        return t(key, values);
    };
    return {
        t(key, values) {
            return t(key, values);
        },
        getLocale() {
            return i18n.getLocale();
        },
        setLocale(newLocale) {
            return i18n.setLocale(newLocale);
        },
        mixin: {
            beforeCreate() {
                const unwatch = i18n.watchLocale(() => {
                    this.$forceUpdate();
                });
                this.$once('hook:beforeDestroy', function () {
                    unwatch();
                });
            },
            methods: {
                $$t(key, values) {
                    return t(key, values);
                },
            },
        },
    };
}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),
/* 11 */
/*!*****************************************************!*\
  !*** F:/mpj/zooming-jam/pages.json?{"type":"stat"} ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__5B67C48" };exports.default = _default;

/***/ }),
/* 12 */
/*!*************************************!*\
  !*** F:/mpj/zooming-jam/pages.json ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 19 */
/*!********************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 20));



var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 21));




















var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 25));

var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 26));

var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 27));

var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 28));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 29));

var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 30));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 31));

var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 32));

var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 33));

var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 23));

var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 22));

var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 34));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 24));

var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 35));

var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 36));

var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 37));

var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 38));

var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 39));



var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 40);

var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 41));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 42));



var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 43));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 44));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 引入全局mixin
// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件
function wranning(str) {// 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {console.warn(str);}} // 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }
// post类型对象参数转为get类型url参数
var $u = { queryParams: _queryParams.default, route: _route.default, timeFormat: _timeFormat.default, date: _timeFormat.default, // 另名date
  timeFrom: _timeFrom.default, colorGradient: _colorGradient.default.colorGradient, colorToRgba: _colorGradient.default.colorToRgba, guid: _guid.default, color: _color.default, sys: _sys.sys, os: _sys.os, type2icon: _type2icon.default, randomArray: _randomArray.default, wranning: wranning, get: _request.default.get,
  post: _request.default.post,
  put: _request.default.put,
  'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default, // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default };


// $u挂载到uni对象上
uni.$u = $u;

var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),
/* 20 */
/*!*******************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/mixin/mixin.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    getParentData: function getParentData() {var _this2 = this;var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this2.parentData[key] = _this2.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {var _this3 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this3) {
          childrenList.splice(index, 1);
        }
      });
    }
  } };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),
/* 21 */
/*!*********************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/request/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 22));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var
Request = /*#__PURE__*/function () {_createClass(Request, [{ key: "setConfig",
    // 设置全局默认配置
    value: function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, { key: "request", value: function request() {var _this = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;

      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this.config.timer);
          _this.config.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this.config.originalData) {
            // 判断是否存在拦截器
            if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
              var resInterceptors = _this.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this.interceptor.response && typeof _this.interceptor.response === 'function') {
                var _resInterceptors = _this.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this.config.baseUrl + (options.url.indexOf('/') == 0 ?
        options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this.config.showLoading && !_this.config.timer) {
          _this.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this.config.loadingText,
              mask: _this.config.loadingMask });

            _this.config.timer = null;
          }, _this.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
      // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
      // 	return new Promise(()=>{});
      // })
    } }]);

  function Request() {var _this2 = this;_classCallCheck(this, Request);
    this.config = {
      baseUrl: '', // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true, // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null, // 定时器
      originalData: false, // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null };


    // get请求
    this.get = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        method: 'GET',
        url: url,
        header: header,
        data: data });

    };

    // post请求
    this.post = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'POST',
        header: header,
        data: data });

    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data });

    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this2.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data });

    };
  }return Request;}();var _default =

new Request();exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),
/* 22 */
/*!**************************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/deepMerge.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// JS对象深度合并
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}var _default =

deepMerge;exports.default = _default;

/***/ }),
/* 23 */
/*!**************************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/deepClone.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}var _default =

deepClone;exports.default = _default;

/***/ }),
/* 24 */
/*!*********************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/test.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^1[3-9]\d{9}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * 验证ISO类型的日期格式
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * 验证十进制数字
   */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
   * 验证整数
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);
}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
   * 金额,只允许2位小数
   */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 验证是否包含某个值
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * 验证一个值范围[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * 验证一个长度范围[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * 是否固定电话
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * 判断是否为空
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}


/**
   * 是否数组
   */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * 是否短信验证码
   */
function code(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}var _default =


{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code };exports.default = _default;

/***/ }),
/* 25 */
/*!****************************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/queryParams.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 对象转url参数
                                                                                                      * @param {*} data,对象
                                                                                                      * @param {*} isPrefix,是否自动加上"?"
                                                                                                      */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });}

    } else {
      _result.push(key + '=' + value);
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}var _default =

queryParams;exports.default = _default;

/***/ }),
/* 26 */
/*!**********************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/route.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 7));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 并且带有路由拦截功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */var

Router = /*#__PURE__*/function () {
  function Router() {_classCallCheck(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1, // navigateBack页面后退时,回退的层数
      params: {}, // 传递的参数
      animationType: 'pop-in', // 窗口动画,只在APP有效
      animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  _createClass(Router, [{ key: "addRootPath", value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, { key: "mixinParam", value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&" + query;
      } else {
        // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
        query = uni.$u.queryParams(params);
        return url += query;
      }
    }

    // 对外的方法名称
  }, { key: "route", value: function () {var _route = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var options,params,mergeConfig,isNext,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};

                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }

                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {_context.next = 14;break;}_context.next = 10;return (

                  new Promise(function (resolve, reject) {
                    uni.$u.routeIntercept(mergeConfig, resolve);
                  }));case 10:isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);_context.next = 15;break;case 14:

                this.openPage(mergeConfig);case 15:case "end":return _context.stop();}}}, _callee, this);}));function route() {return _route.apply(this, arguments);}return route;}()



    // 执行路由跳转
  }, { key: "openPage", value: function openPage(config) {
      // 解构参数
      var
      url =




      config.url,type = config.type,delta = config.delta,animationType = config.animationType,animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration });

      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url });

      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url });

      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url });

      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta });

      }
    } }]);return Router;}();var _default =


new Router().route;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),
/* 27 */
/*!***************************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/timeFormat.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError(
    'fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length,
    times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "h+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    };
  };
  return fmt;
}var _default =

timeFormat;exports.default = _default;

/***/ }),
/* 28 */
/*!*************************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/timeFrom.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 27));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                                                                                                                                          * 时间戳转为多久之前
                                                                                                                                                                                                                                                                                          * @param String timestamp 时间戳
                                                                                                                                                                                                                                                                                          * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
                                                                                                                                                                                                                                                                                          * 如果为布尔值false，无论什么时间，都返回多久以前的格式
                                                                                                                                                                                                                                                                                          */
function timeFrom() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var timestamp = +new Date(Number(dateTime));

  var timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }}

  return tips;
}var _default =

timeFrom;exports.default = _default;

/***/ }),
/* 29 */
/*!******************************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/colorGradient.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 求两个颜色之间的渐变值
                                                                                                      * @param {string} startColor 开始的颜色
                                                                                                      * @param {string} endColor 结束的颜色
                                                                                                      * @param {number} step 颜色等分的份额
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; //总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //计算每一步的hex值 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB *
    i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {return Number(val);});
  } else {
    return sColor;
  }
};

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}


/**
  * JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
  * sHex为传入的十六进制的色值
  * alpha为rgba的透明度
  */
function colorToRgba(color) {var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = color.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i3, _i3 + 2)));
    }
    // return sColorChange.join(',')
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
  } else
  {
    return sColor;
  }
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba };exports.default = _default;

/***/ }),
/* 30 */
/*!*********************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/guid.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
                                                                                                      * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
                                                                                                      * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
                                                                                                      * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
                                                                                                      * v-for的时候,推荐使用后端返回的id而不是循环的index
                                                                                                      * @param {Number} len uuid的长度
                                                                                                      * @param {Boolean} firstU 将返回的首字母置为"u"
                                                                                                      * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
                                                                                                      */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}var _default =

guid;exports.default = _default;

/***/ }),
/* 31 */
/*!**********************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/color.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",

  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",

  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",

  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",

  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",

  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed" };var _default =


color;exports.default = _default;

/***/ }),
/* 32 */
/*!**************************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/type2icon.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 根据主题type值,获取对应的图标
                                                                                                      * @param String type 主题名称,primary|info|error|warning|success
                                                                                                      * @param String fill 是否使用fill填充实体的图标  
                                                                                                      */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}var _default =

type2icon;exports.default = _default;

/***/ }),
/* 33 */
/*!****************************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/randomArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 打乱数组
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}var _default =

randomArray;exports.default = _default;

/***/ }),
/* 34 */
/*!************************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/addUnit.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = addUnit;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),
/* 35 */
/*!***********************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/random.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}var _default =

random;exports.default = _default;

/***/ }),
/* 36 */
/*!*********************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/trim.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}var _default =

trim;exports.default = _default;

/***/ }),
/* 37 */
/*!**********************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/toast.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration });

}var _default =

toast;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),
/* 38 */
/*!**************************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/getParent.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getParent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return { v: data };}();if (typeof _ret === "object") return _ret.v;
    }
  }

  return {};
}

/***/ }),
/* 39 */
/*!************************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/$parent.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = $parent; // 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),
/* 40 */
/*!********************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/sys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.os = os;exports.sys = sys;function os() {
  return uni.getSystemInfoSync().platform;
};

function sys() {
  return uni.getSystemInfoSync();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),
/* 41 */
/*!*************************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/debounce.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
                                                                                                                         * 
                                                                                                                         * @param {Function} func 要执行的回调函数 
                                                                                                                         * @param {Number} wait 延时的时间
                                                                                                                         * @param {Boolean} immediate 是否立即执行 
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),
/* 42 */
/*!*************************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/function/throttle.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer, flag;
/**
                                                                                                                      * 节流原理：在一定时间内，只能触发一次
                                                                                                                      * 
                                                                                                                      * @param {Function} func 要执行的回调函数 
                                                                                                                      * @param {Number} wait 延时的时间
                                                                                                                      * @param {Boolean} immediate 是否立即执行
                                                                                                                      * @return null
                                                                                                                      */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(function () {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }

  }
};var _default =
throttle;exports.default = _default;

/***/ }),
/* 43 */
/*!*********************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/config/config.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2020-03-17
var version = '1.8.4';var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'] };exports.default = _default;

/***/ }),
/* 44 */
/*!*********************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/config/zIndex.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),
/* 45 */
/*!*****************************************!*\
  !*** F:/mpj/zooming-jam/store/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 46));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_vue.default.use(_vuex.default);

var store = new _vuex.default.Store({
  state: {
    vuex_tabbar: [{
      iconPath: "/static/tabs/pick.png",
      selectedIconPath: "/static/tabs/pick-active.png",
      pagePath: "/pages/pick/pick" },

    {
      iconPath: "/static/tabs/make.png",
      selectedIconPath: "/static/tabs/make-active.png",
      pagePath: "/pages/make/make" },

    {
      iconPath: "/static/tabs/open.png",
      selectedIconPath: "/static/tabs/open-active.png",
      pagePath: "/pages/open/open" }] } });var _default =





store;exports.default = _default;

/***/ }),
/* 46 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/*!*********************************************!*\
  !*** F:/mpj/zooming-jam/static/pick/bg.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAajCAIAAAD4aM69AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZGYxZDFjYS1mMWM3LTQ5M2UtODc2YS1iZmRkNzlhMDM2NjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjAyNzVDOUNFNzBDMTFFQjlCNkNBN0Q0M0Q1RkJBMzUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjAyNzVDOUJFNzBDMTFFQjlCNkNBN0Q0M0Q1RkJBMzUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxYmNjNTY2ZS02M2Y5LTRjYjMtOTY3Yi02MTE0ZTdkMTMzM2MiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZWQyOGYyNS0zMmQ0LTY2NDgtOWQ1ZS05YTRhOGJkNmZmMzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5L4Kf9AACYC0lEQVR42uzdW3uiVhiAUTlvzP//ob2JKIJFaVObSTwigq510WdmmoNx5uJ7YbN39Ndffy0AAID3EHsLAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAG8BAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAB4C0AAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAvAUAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAASAtwAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgA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"

/***/ }),
/* 54 */
/*!**************************************************!*\
  !*** F:/mpj/zooming-jam/static/pick/redtree.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAajCAIAAAD4aM69AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZGYxZDFjYS1mMWM3LTQ5M2UtODc2YS1iZmRkNzlhMDM2NjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjAyNzVDQTBFNzBDMTFFQjlCNkNBN0Q0M0Q1RkJBMzUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjAyNzVDOUZFNzBDMTFFQjlCNkNBN0Q0M0Q1RkJBMzUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxYmNjNTY2ZS02M2Y5LTRjYjMtOTY3Yi02MTE0ZTdkMTMzM2MiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZWQyOGYyNS0zMmQ0LTY2NDgtOWQ1ZS05YTRhOGJkNmZmMzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz63g2npAACWWElEQVR42uzd6VZTyRqA4a+SMEbAMCYBTnvO/V9NX0K3QkRQnEHIrmYnLpujyJRABp5n6VoKgWzCn3pTtatS/vPPAAAAnoaKlwAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgADwEgAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEABeAgAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAsBLAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAHgJAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAA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"

/***/ }),
/* 55 */
/*!****************************************************!*\
  !*** F:/mpj/zooming-jam/static/pick/greentree.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAajCAIAAAD4aM69AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZGYxZDFjYS1mMWM3LTQ5M2UtODc2YS1iZmRkNzlhMDM2NjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDA0MzFFMTNFNzExMTFFQjlCNkNBN0Q0M0Q1RkJBMzUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDA0MzFFMTJFNzExMTFFQjlCNkNBN0Q0M0Q1RkJBMzUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxYmNjNTY2ZS02M2Y5LTRjYjMtOTY3Yi02MTE0ZTdkMTMzM2MiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZWQyOGYyNS0zMmQ0LTY2NDgtOWQ1ZS05YTRhOGJkNmZmMzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Xnj+WAACX7ElEQVR42uzd23oT1xmA4Vmj7WhGggKBELANpvSk938PvYc2AUKbBmiTBkuyJGtm1bZahwfwTpZlSX7fnCS2NmPl5P80a2aF97/8JQEAAG6H1EcAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAA+AgAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAHwEAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAHgIwAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAB8BAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACA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"

/***/ }),
/* 56 */
/*!***************************************************!*\
  !*** F:/mpj/zooming-jam/static/pick/bluetree.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAajCAIAAAD4aM69AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZGYxZDFjYS1mMWM3LTQ5M2UtODc2YS1iZmRkNzlhMDM2NjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDA0MzFFMTdFNzExMTFFQjlCNkNBN0Q0M0Q1RkJBMzUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDA0MzFFMTZFNzExMTFFQjlCNkNBN0Q0M0Q1RkJBMzUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxYmNjNTY2ZS02M2Y5LTRjYjMtOTY3Yi02MTE0ZTdkMTMzM2MiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZWQyOGYyNS0zMmQ0LTY2NDgtOWQ1ZS05YTRhOGJkNmZmMzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4NrxxzAACbJ0lEQVR42uzd61IbRxqA4e4ZSSOM8RIbjAG7au//evYONgsmiR07cWxG0nSvxPgUcDjohCSepypVdgwS6Nf3znT3xP/8lQMAAPAwFD4CAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACwEcAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAA+AgAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAHwEAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAHgIwAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAA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"

/***/ }),
/* 57 */
/*!*****************************************************!*\
  !*** F:/mpj/zooming-jam/static/pick/yellowtree.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAajCAIAAAD4aM69AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZGYxZDFjYS1mMWM3LTQ5M2UtODc2YS1iZmRkNzlhMDM2NjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjAyNzVDQTRFNzBDMTFFQjlCNkNBN0Q0M0Q1RkJBMzUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjAyNzVDQTNFNzBDMTFFQjlCNkNBN0Q0M0Q1RkJBMzUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxYmNjNTY2ZS02M2Y5LTRjYjMtOTY3Yi02MTE0ZTdkMTMzM2MiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZWQyOGYyNS0zMmQ0LTY2NDgtOWQ1ZS05YTRhOGJkNmZmMzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mybyWAACVzElEQVR42uzdeXcUxRrA4arq2QJ4CQJRLgnb0fv9v8j9CF4PENk8RzQqZJauutMTJKxZZiaz5XnUI4TZ0uGP99fVSxz9+d8AAABcDskmAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAGwCAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACwCYAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAbAIAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAALAJgAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAA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"

/***/ }),
/* 58 */
/*!*****************************************************!*\
  !*** F:/mpj/zooming-jam/static/pick/purpletree.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAajCAIAAAD4aM69AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZGYxZDFjYS1mMWM3LTQ5M2UtODc2YS1iZmRkNzlhMDM2NjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjY0MDU4REFFNzExMTFFQjlCNkNBN0Q0M0Q1RkJBMzUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDA0MzFFMUFFNzExMTFFQjlCNkNBN0Q0M0Q1RkJBMzUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxYmNjNTY2ZS02M2Y5LTRjYjMtOTY3Yi02MTE0ZTdkMTMzM2MiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4ZWQyOGYyNS0zMmQ0LTY2NDgtOWQ1ZS05YTRhOGJkNmZmMzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6o2B4SAACZBUlEQVR42uzdW1fbRhuAUc2MCZhgk/T//8DvsuGUQKx5P2SnhBAwtpHPe3e1i7TGp9WL99GMpPTzf5MGAAA4DtlXAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAPgKAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAF8BAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAB4CsAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAACAAfAUAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAAAgAAABAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAAAQAAAAgAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAACAAAAAAAQAAAAgAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAABAAAAAAAIAAAAQAAAAgAAAAAAEAAAAIAAAAAABAAAACAAAAEAAAAAAAgAAABAAAACAAAAAAAEAAAAIAAAAQAAAAAACAAAAEAAAAIAAAAAABAAAACAAAAAAAQAAAAgAAABAAAAAgAAAAAAEAAAAIAAAAAABAAAA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"

/***/ }),
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/*!********************************************************!*\
  !*** F:/mpj/zooming-jam/uview-ui/libs/util/emitter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 递归使用 call 方式this指向
                                                                                                      * @param componentName // 需要找的组件的名称
                                                                                                      * @param eventName // 事件名称
                                                                                                      * @param params // 需要传递的参数
                                                                                                      */
function _broadcast(componentName, eventName, params) {
  // 循环子节点找到名称一样的子节点 否则 递归 当前子节点
  this.$children.map(function (child) {
    if (componentName === child.$options.name) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}var _default =
{
  methods: {
    /**
              * 派发 (向上查找) (一个)
              * @param componentName // 需要找的组件的名称
              * @param eventName // 事件名称
              * @param params // 需要传递的参数
              */
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root; //$parent 找到最近的父节点 $root 根节点
      var name = parent.$options.name; // 获取当前组件实例的name
      // 如果当前有节点 && 当前没名称 且 当前名称等于需要传进来的名称的时候就去查找当前的节点
      // 循环出当前名称的一样的组件实例
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      // 有节点表示当前找到了name一样的实例
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    /**
        * 广播 (向下查找) (广播多个)
        * @param componentName // 需要找的组件的名称
        * @param eventName // 事件名称
        * @param params // 需要传递的参数
        */
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    } } };exports.default = _default;

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map