/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/statistics/statistics.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/statistics/echarts.min.js":
/*!**************************************!*\
  !*** ./js/statistics/echarts.min.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? e(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t) {
  "use strict";

  function e(t) {
    var e = {},
        i = {},
        n = t.match(/Firefox\/([\d.]+)/),
        r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
        a = t.match(/Edge\/([\d.]+)/),
        o = /micromessenger/i.test(t);
    return n && (i.firefox = !0, i.version = n[1]), r && (i.ie = !0, i.version = r[1]), a && (i.edge = !0, i.version = a[1]), o && (i.weChat = !0), {
      browser: i,
      os: e,
      node: !1,
      canvasSupported: !!document.createElement("canvas").getContext,
      svgSupported: "undefined" != typeof SVGRect,
      touchEventsSupported: "ontouchstart" in window && !i.ie && !i.edge,
      pointerEventsSupported: "onpointerdown" in window && (i.edge || i.ie && i.version >= 11)
    };
  }

  function i(t, e) {
    "createCanvas" === t && (Ad = null), Cd[t] = e;
  }

  function n(t) {
    if (null == t || "object" != _typeof(t)) return t;
    var e = t,
        i = wd.call(t);

    if ("[object Array]" === i) {
      if (!R(t)) {
        e = [];

        for (var r = 0, a = t.length; a > r; r++) {
          e[r] = n(t[r]);
        }
      }
    } else if (xd[i]) {
      if (!R(t)) {
        var o = t.constructor;
        if (t.constructor.from) e = o.from(t);else {
          e = new o(t.length);

          for (var r = 0, a = t.length; a > r; r++) {
            e[r] = n(t[r]);
          }
        }
      }
    } else if (!_d[i] && !R(t) && !I(t)) {
      e = {};

      for (var s in t) {
        t.hasOwnProperty(s) && (e[s] = n(t[s]));
      }
    }

    return e;
  }

  function r(t, e, i) {
    if (!b(e) || !b(t)) return i ? n(e) : t;

    for (var a in e) {
      if (e.hasOwnProperty(a)) {
        var o = t[a],
            s = e[a];
        !b(s) || !b(o) || _(s) || _(o) || I(s) || I(o) || M(s) || M(o) || R(s) || R(o) ? !i && a in t || (t[a] = n(e[a], !0)) : r(o, s, i);
      }
    }

    return t;
  }

  function a(t, e) {
    for (var i = t[0], n = 1, a = t.length; a > n; n++) {
      i = r(i, t[n], e);
    }

    return i;
  }

  function o(t, e) {
    for (var i in e) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }

    return t;
  }

  function s(t, e, i) {
    for (var n in e) {
      e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
    }

    return t;
  }

  function l() {
    return Ad || (Ad = kd().getContext("2d")), Ad;
  }

  function h(t, e) {
    if (t) {
      if (t.indexOf) return t.indexOf(e);

      for (var i = 0, n = t.length; n > i; i++) {
        if (t[i] === e) return i;
      }
    }

    return -1;
  }

  function u(t, e) {
    function i() {}

    var n = t.prototype;
    i.prototype = e.prototype, t.prototype = new i();

    for (var r in n) {
      t.prototype[r] = n[r];
    }

    t.prototype.constructor = t, t.superClass = e;
  }

  function c(t, e, i) {
    t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, i);
  }

  function d(t) {
    return t ? "string" != typeof t && "number" == typeof t.length : void 0;
  }

  function f(t, e, i) {
    if (t && e) if (t.forEach && t.forEach === Md) t.forEach(e, i);else if (t.length === +t.length) for (var n = 0, r = t.length; r > n; n++) {
      e.call(i, t[n], n, t);
    } else for (var a in t) {
      t.hasOwnProperty(a) && e.call(i, t[a], a, t);
    }
  }

  function p(t, e, i) {
    if (t && e) {
      if (t.map && t.map === Td) return t.map(e, i);

      for (var n = [], r = 0, a = t.length; a > r; r++) {
        n.push(e.call(i, t[r], r, t));
      }

      return n;
    }
  }

  function g(t, e, i, n) {
    if (t && e) {
      if (t.reduce && t.reduce === Dd) return t.reduce(e, i, n);

      for (var r = 0, a = t.length; a > r; r++) {
        i = e.call(n, i, t[r], r, t);
      }

      return i;
    }
  }

  function v(t, e, i) {
    if (t && e) {
      if (t.filter && t.filter === Sd) return t.filter(e, i);

      for (var n = [], r = 0, a = t.length; a > r; r++) {
        e.call(i, t[r], r, t) && n.push(t[r]);
      }

      return n;
    }
  }

  function m(t, e) {
    var i = Id.call(arguments, 2);
    return function () {
      return t.apply(e, i.concat(Id.call(arguments)));
    };
  }

  function y(t) {
    var e = Id.call(arguments, 1);
    return function () {
      return t.apply(this, e.concat(Id.call(arguments)));
    };
  }

  function _(t) {
    return "[object Array]" === wd.call(t);
  }

  function x(t) {
    return "function" == typeof t;
  }

  function w(t) {
    return "[object String]" === wd.call(t);
  }

  function b(t) {
    var e = _typeof(t);

    return "function" === e || !!t && "object" == e;
  }

  function M(t) {
    return !!_d[wd.call(t)];
  }

  function S(t) {
    return !!xd[wd.call(t)];
  }

  function I(t) {
    return "object" == _typeof(t) && "number" == typeof t.nodeType && "object" == _typeof(t.ownerDocument);
  }

  function T(t) {
    return t !== t;
  }

  function D() {
    for (var t = 0, e = arguments.length; e > t; t++) {
      if (null != arguments[t]) return arguments[t];
    }
  }

  function C(t, e) {
    return null != t ? t : e;
  }

  function k(t, e, i) {
    return null != t ? t : null != e ? e : i;
  }

  function A() {
    return Function.call.apply(Id, arguments);
  }

  function L(t) {
    if ("number" == typeof t) return [t, t, t, t];
    var e = t.length;
    return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t;
  }

  function P(t, e) {
    if (!t) throw new Error(e);
  }

  function O(t) {
    return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }

  function N(t) {
    t[Ld] = !0;
  }

  function R(t) {
    return t[Ld];
  }

  function E(t) {
    function e(t, e) {
      i ? n.set(t, e) : n.set(e, t);
    }

    var i = _(t),
        n = this;

    t instanceof E ? t.each(e) : t && f(t, e);
  }

  function z(t) {
    return new E(t);
  }

  function B() {}

  function V(t, e) {
    var i = new Pd(2);
    return null == t && (t = 0), null == e && (e = 0), i[0] = t, i[1] = e, i;
  }

  function F(t, e) {
    return t[0] = e[0], t[1] = e[1], t;
  }

  function H(t) {
    var e = new Pd(2);
    return e[0] = t[0], e[1] = t[1], e;
  }

  function W(t, e, i) {
    return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t;
  }

  function G(t, e, i, n) {
    return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t;
  }

  function X(t, e, i) {
    return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t;
  }

  function Y(t) {
    return Math.sqrt(U(t));
  }

  function U(t) {
    return t[0] * t[0] + t[1] * t[1];
  }

  function q(t, e, i) {
    return t[0] = e[0] * i, t[1] = e[1] * i, t;
  }

  function Z(t, e) {
    var i = Y(e);
    return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t;
  }

  function j(t, e) {
    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
  }

  function K(t, e) {
    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
  }

  function $(t, e, i) {
    var n = e[0],
        r = e[1];
    return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t;
  }

  function Q(t, e, i) {
    return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t;
  }

  function J(t, e, i) {
    return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t;
  }

  function tt() {
    this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this);
  }

  function et(t, e) {
    return {
      target: t,
      topTarget: e && e.topTarget
    };
  }

  function it(t, e, i) {
    return {
      type: t,
      event: i,
      target: e.target,
      topTarget: e.topTarget,
      cancelBubble: !1,
      offsetX: i.zrX,
      offsetY: i.zrY,
      gestureEvent: i.gestureEvent,
      pinchX: i.pinchX,
      pinchY: i.pinchY,
      pinchScale: i.pinchScale,
      wheelDelta: i.zrDelta,
      zrByTouch: i.zrByTouch,
      which: i.which
    };
  }

  function nt() {}

  function rt(t, e, i) {
    if (t[t.rectHover ? "rectContain" : "contain"](e, i)) {
      for (var n, r = t; r;) {
        if (r.clipPath && !r.clipPath.contain(e, i)) return !1;
        r.silent && (n = !0), r = r.parent;
      }

      return !n || zd;
    }

    return !1;
  }

  function at() {
    var t = new Fd(6);
    return ot(t), t;
  }

  function ot(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
  }

  function st(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t;
  }

  function lt(t, e, i) {
    var n = e[0] * i[0] + e[2] * i[1],
        r = e[1] * i[0] + e[3] * i[1],
        a = e[0] * i[2] + e[2] * i[3],
        o = e[1] * i[2] + e[3] * i[3],
        s = e[0] * i[4] + e[2] * i[5] + e[4],
        l = e[1] * i[4] + e[3] * i[5] + e[5];
    return t[0] = n, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t;
  }

  function ht(t, e, i) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t;
  }

  function ut(t, e, i) {
    var n = e[0],
        r = e[2],
        a = e[4],
        o = e[1],
        s = e[3],
        l = e[5],
        h = Math.sin(i),
        u = Math.cos(i);
    return t[0] = n * u + o * h, t[1] = -n * h + o * u, t[2] = r * u + s * h, t[3] = -r * h + u * s, t[4] = u * a + h * l, t[5] = u * l - h * a, t;
  }

  function ct(t, e, i) {
    var n = i[0],
        r = i[1];
    return t[0] = e[0] * n, t[1] = e[1] * r, t[2] = e[2] * n, t[3] = e[3] * r, t[4] = e[4] * n, t[5] = e[5] * r, t;
  }

  function dt(t, e) {
    var i = e[0],
        n = e[2],
        r = e[4],
        a = e[1],
        o = e[3],
        s = e[5],
        l = i * o - a * n;
    return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - o * r) * l, t[5] = (a * r - i * s) * l, t) : null;
  }

  function ft(t) {
    return t > Wd || -Wd > t;
  }

  function pt(t) {
    this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1;
  }

  function gt(t) {
    return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t;
  }

  function vt(t) {
    return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t;
  }

  function mt(t) {
    return 0 > t ? 0 : t > 1 ? 1 : t;
  }

  function yt(t) {
    return gt(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10));
  }

  function _t(t) {
    return mt(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t));
  }

  function xt(t, e, i) {
    return 0 > i ? i += 1 : i > 1 && (i -= 1), 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t;
  }

  function wt(t, e, i) {
    return t + (e - t) * i;
  }

  function bt(t, e, i, n, r) {
    return t[0] = e, t[1] = i, t[2] = n, t[3] = r, t;
  }

  function Mt(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
  }

  function St(t, e) {
    tf && Mt(tf, e), tf = Jd.put(t, tf || e.slice());
  }

  function It(t, e) {
    if (t) {
      e = e || [];
      var i = Jd.get(t);
      if (i) return Mt(e, i);
      t += "";
      var n = t.replace(/ /g, "").toLowerCase();
      if (n in Qd) return Mt(e, Qd[n]), St(t, e), e;

      if ("#" !== n.charAt(0)) {
        var r = n.indexOf("("),
            a = n.indexOf(")");

        if (-1 !== r && a + 1 === n.length) {
          var o = n.substr(0, r),
              s = n.substr(r + 1, a - (r + 1)).split(","),
              l = 1;

          switch (o) {
            case "rgba":
              if (4 !== s.length) return void bt(e, 0, 0, 0, 1);
              l = _t(s.pop());

            case "rgb":
              return 3 !== s.length ? void bt(e, 0, 0, 0, 1) : (bt(e, yt(s[0]), yt(s[1]), yt(s[2]), l), St(t, e), e);

            case "hsla":
              return 4 !== s.length ? void bt(e, 0, 0, 0, 1) : (s[3] = _t(s[3]), Tt(s, e), St(t, e), e);

            case "hsl":
              return 3 !== s.length ? void bt(e, 0, 0, 0, 1) : (Tt(s, e), St(t, e), e);

            default:
              return;
          }
        }

        bt(e, 0, 0, 0, 1);
      } else {
        if (4 === n.length) {
          var h = parseInt(n.substr(1), 16);
          return h >= 0 && 4095 >= h ? (bt(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1), St(t, e), e) : void bt(e, 0, 0, 0, 1);
        }

        if (7 === n.length) {
          var h = parseInt(n.substr(1), 16);
          return h >= 0 && 16777215 >= h ? (bt(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1), St(t, e), e) : void bt(e, 0, 0, 0, 1);
        }
      }
    }
  }

  function Tt(t, e) {
    var i = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
        n = _t(t[1]),
        r = _t(t[2]),
        a = .5 >= r ? r * (n + 1) : r + n - r * n,
        o = 2 * r - a;

    return e = e || [], bt(e, gt(255 * xt(o, a, i + 1 / 3)), gt(255 * xt(o, a, i)), gt(255 * xt(o, a, i - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e;
  }

  function Dt(t) {
    if (t) {
      var e,
          i,
          n = t[0] / 255,
          r = t[1] / 255,
          a = t[2] / 255,
          o = Math.min(n, r, a),
          s = Math.max(n, r, a),
          l = s - o,
          h = (s + o) / 2;
      if (0 === l) e = 0, i = 0;else {
        i = .5 > h ? l / (s + o) : l / (2 - s - o);
        var u = ((s - n) / 6 + l / 2) / l,
            c = ((s - r) / 6 + l / 2) / l,
            d = ((s - a) / 6 + l / 2) / l;
        n === s ? e = d - c : r === s ? e = 1 / 3 + u - d : a === s && (e = 2 / 3 + c - u), 0 > e && (e += 1), e > 1 && (e -= 1);
      }
      var f = [360 * e, i, h];
      return null != t[3] && f.push(t[3]), f;
    }
  }

  function Ct(t, e) {
    var i = It(t);

    if (i) {
      for (var n = 0; 3 > n; n++) {
        i[n] = 0 > e ? i[n] * (1 - e) | 0 : (255 - i[n]) * e + i[n] | 0, i[n] > 255 ? i[n] = 255 : t[n] < 0 && (i[n] = 0);
      }

      return Ot(i, 4 === i.length ? "rgba" : "rgb");
    }
  }

  function kt(t) {
    var e = It(t);
    return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0;
  }

  function At(t, e, i) {
    if (e && e.length && t >= 0 && 1 >= t) {
      i = i || [];
      var n = t * (e.length - 1),
          r = Math.floor(n),
          a = Math.ceil(n),
          o = e[r],
          s = e[a],
          l = n - r;
      return i[0] = gt(wt(o[0], s[0], l)), i[1] = gt(wt(o[1], s[1], l)), i[2] = gt(wt(o[2], s[2], l)), i[3] = mt(wt(o[3], s[3], l)), i;
    }
  }

  function Lt(t, e, i, n) {
    return t = It(t), t ? (t = Dt(t), null != e && (t[0] = vt(e)), null != i && (t[1] = _t(i)), null != n && (t[2] = _t(n)), Ot(Tt(t), "rgba")) : void 0;
  }

  function Pt(t, e) {
    return t = It(t), t && null != e ? (t[3] = mt(e), Ot(t, "rgba")) : void 0;
  }

  function Ot(t, e) {
    if (t && t.length) {
      var i = t[0] + "," + t[1] + "," + t[2];
      return ("rgba" === e || "hsva" === e || "hsla" === e) && (i += "," + t[3]), e + "(" + i + ")";
    }
  }

  function Nt(t, e) {
    return t[e];
  }

  function Rt(t, e, i) {
    t[e] = i;
  }

  function Et(t, e, i) {
    return (e - t) * i + t;
  }

  function zt(t, e, i) {
    return i > .5 ? e : t;
  }

  function Bt(t, e, i, n, r) {
    var a = t.length;
    if (1 == r) for (var o = 0; a > o; o++) {
      n[o] = Et(t[o], e[o], i);
    } else for (var s = a && t[0].length, o = 0; a > o; o++) {
      for (var l = 0; s > l; l++) {
        n[o][l] = Et(t[o][l], e[o][l], i);
      }
    }
  }

  function Vt(t, e, i) {
    var n = t.length,
        r = e.length;

    if (n !== r) {
      var a = n > r;
      if (a) t.length = r;else for (var o = n; r > o; o++) {
        t.push(1 === i ? e[o] : ef.call(e[o]));
      }
    }

    for (var s = t[0] && t[0].length, o = 0; o < t.length; o++) {
      if (1 === i) isNaN(t[o]) && (t[o] = e[o]);else for (var l = 0; s > l; l++) {
        isNaN(t[o][l]) && (t[o][l] = e[o][l]);
      }
    }
  }

  function Ft(t, e, i) {
    if (t === e) return !0;
    var n = t.length;
    if (n !== e.length) return !1;

    if (1 === i) {
      for (var r = 0; n > r; r++) {
        if (t[r] !== e[r]) return !1;
      }
    } else for (var a = t[0].length, r = 0; n > r; r++) {
      for (var o = 0; a > o; o++) {
        if (t[r][o] !== e[r][o]) return !1;
      }
    }

    return !0;
  }

  function Ht(t, e, i, n, r, a, o, s, l) {
    var h = t.length;
    if (1 == l) for (var u = 0; h > u; u++) {
      s[u] = Wt(t[u], e[u], i[u], n[u], r, a, o);
    } else for (var c = t[0].length, u = 0; h > u; u++) {
      for (var d = 0; c > d; d++) {
        s[u][d] = Wt(t[u][d], e[u][d], i[u][d], n[u][d], r, a, o);
      }
    }
  }

  function Wt(t, e, i, n, r, a, o) {
    var s = .5 * (i - t),
        l = .5 * (n - e);
    return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e;
  }

  function Gt(t) {
    if (d(t)) {
      var e = t.length;

      if (d(t[0])) {
        for (var i = [], n = 0; e > n; n++) {
          i.push(ef.call(t[n]));
        }

        return i;
      }

      return ef.call(t);
    }

    return t;
  }

  function Xt(t) {
    return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")";
  }

  function Yt(t) {
    var e = t[t.length - 1].value;
    return d(e && e[0]) ? 2 : 1;
  }

  function Ut(t, e, i, n, r, a) {
    var o = t._getter,
        s = t._setter,
        l = "spline" === e,
        h = n.length;

    if (h) {
      var u,
          c = n[0].value,
          f = d(c),
          p = !1,
          g = !1,
          v = f ? Yt(n) : 0;
      n.sort(function (t, e) {
        return t.time - e.time;
      }), u = n[h - 1].time;

      for (var m = [], y = [], _ = n[0].value, x = !0, w = 0; h > w; w++) {
        m.push(n[w].time / u);
        var b = n[w].value;

        if (f && Ft(b, _, v) || !f && b === _ || (x = !1), _ = b, "string" == typeof b) {
          var M = It(b);
          M ? (b = M, p = !0) : g = !0;
        }

        y.push(b);
      }

      if (a || !x) {
        for (var S = y[h - 1], w = 0; h - 1 > w; w++) {
          f ? Vt(y[w], S, v) : !isNaN(y[w]) || isNaN(S) || g || p || (y[w] = S);
        }

        f && Vt(o(t._target, r), S, v);
        var I,
            T,
            D,
            C,
            k,
            A,
            L = 0,
            P = 0;
        if (p) var O = [0, 0, 0, 0];

        var N = function N(t, e) {
          var i;
          if (0 > e) i = 0;else if (P > e) {
            for (I = Math.min(L + 1, h - 1), i = I; i >= 0 && !(m[i] <= e); i--) {
              ;
            }

            i = Math.min(i, h - 2);
          } else {
            for (i = L; h > i && !(m[i] > e); i++) {
              ;
            }

            i = Math.min(i - 1, h - 2);
          }
          L = i, P = e;
          var n = m[i + 1] - m[i];
          if (0 !== n) if (T = (e - m[i]) / n, l) {
            if (C = y[i], D = y[0 === i ? i : i - 1], k = y[i > h - 2 ? h - 1 : i + 1], A = y[i > h - 3 ? h - 1 : i + 2], f) Ht(D, C, k, A, T, T * T, T * T * T, o(t, r), v);else {
              var a;
              if (p) a = Ht(D, C, k, A, T, T * T, T * T * T, O, 1), a = Xt(O);else {
                if (g) return zt(C, k, T);
                a = Wt(D, C, k, A, T, T * T, T * T * T);
              }
              s(t, r, a);
            }
          } else if (f) Bt(y[i], y[i + 1], T, o(t, r), v);else {
            var a;
            if (p) Bt(y[i], y[i + 1], T, O, 1), a = Xt(O);else {
              if (g) return zt(y[i], y[i + 1], T);
              a = Et(y[i], y[i + 1], T);
            }
            s(t, r, a);
          }
        },
            R = new pt({
          target: t._target,
          life: u,
          loop: t._loop,
          delay: t._delay,
          onframe: N,
          ondestroy: i
        });

        return e && "spline" !== e && (R.easing = e), R;
      }
    }
  }

  function qt(t, e, i, n) {
    0 > i && (t += i, i = -i), 0 > n && (e += n, n = -n), this.x = t, this.y = e, this.width = i, this.height = n;
  }

  function Zt(t) {
    for (var e = 0; t >= gf;) {
      e |= 1 & t, t >>= 1;
    }

    return t + e;
  }

  function jt(t, e, i, n) {
    var r = e + 1;
    if (r === i) return 1;

    if (n(t[r++], t[e]) < 0) {
      for (; i > r && n(t[r], t[r - 1]) < 0;) {
        r++;
      }

      Kt(t, e, r);
    } else for (; i > r && n(t[r], t[r - 1]) >= 0;) {
      r++;
    }

    return r - e;
  }

  function Kt(t, e, i) {
    for (i--; i > e;) {
      var n = t[e];
      t[e++] = t[i], t[i--] = n;
    }
  }

  function $t(t, e, i, n, r) {
    for (n === e && n++; i > n; n++) {
      for (var a, o = t[n], s = e, l = n; l > s;) {
        a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;
      }

      var h = n - s;

      switch (h) {
        case 3:
          t[s + 3] = t[s + 2];

        case 2:
          t[s + 2] = t[s + 1];

        case 1:
          t[s + 1] = t[s];
          break;

        default:
          for (; h > 0;) {
            t[s + h] = t[s + h - 1], h--;
          }

      }

      t[s] = o;
    }
  }

  function Qt(t, e, i, n, r, a) {
    var o = 0,
        s = 0,
        l = 1;

    if (a(t, e[i + r]) > 0) {
      for (s = n - r; s > l && a(t, e[i + r + l]) > 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }

      l > s && (l = s), o += r, l += r;
    } else {
      for (s = r + 1; s > l && a(t, e[i + r - l]) <= 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }

      l > s && (l = s);
      var h = o;
      o = r - l, l = r - h;
    }

    for (o++; l > o;) {
      var u = o + (l - o >>> 1);
      a(t, e[i + u]) > 0 ? o = u + 1 : l = u;
    }

    return l;
  }

  function Jt(t, e, i, n, r, a) {
    var o = 0,
        s = 0,
        l = 1;

    if (a(t, e[i + r]) < 0) {
      for (s = r + 1; s > l && a(t, e[i + r - l]) < 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }

      l > s && (l = s);
      var h = o;
      o = r - l, l = r - h;
    } else {
      for (s = n - r; s > l && a(t, e[i + r + l]) >= 0;) {
        o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      }

      l > s && (l = s), o += r, l += r;
    }

    for (o++; l > o;) {
      var u = o + (l - o >>> 1);
      a(t, e[i + u]) < 0 ? l = u : o = u + 1;
    }

    return l;
  }

  function te(t, e) {
    function i(t, e) {
      l[c] = t, h[c] = e, c += 1;
    }

    function n() {
      for (; c > 1;) {
        var t = c - 2;
        if (t >= 1 && h[t - 1] <= h[t] + h[t + 1] || t >= 2 && h[t - 2] <= h[t] + h[t - 1]) h[t - 1] < h[t + 1] && t--;else if (h[t] > h[t + 1]) break;
        a(t);
      }
    }

    function r() {
      for (; c > 1;) {
        var t = c - 2;
        t > 0 && h[t - 1] < h[t + 1] && t--, a(t);
      }
    }

    function a(i) {
      var n = l[i],
          r = h[i],
          a = l[i + 1],
          u = h[i + 1];
      h[i] = r + u, i === c - 3 && (l[i + 1] = l[i + 2], h[i + 1] = h[i + 2]), c--;
      var d = Jt(t[a], t, n, r, 0, e);
      n += d, r -= d, 0 !== r && (u = Qt(t[n + r - 1], t, a, u, u - 1, e), 0 !== u && (u >= r ? o(n, r, a, u) : s(n, r, a, u)));
    }

    function o(i, n, r, a) {
      var o = 0;

      for (o = 0; n > o; o++) {
        d[o] = t[i + o];
      }

      var s = 0,
          l = r,
          h = i;

      if (t[h++] = t[l++], 0 !== --a) {
        if (1 === n) {
          for (o = 0; a > o; o++) {
            t[h + o] = t[l + o];
          }

          return void (t[h + a] = d[s]);
        }

        for (var c, f, p, g = u;;) {
          c = 0, f = 0, p = !1;

          do {
            if (e(t[l], d[s]) < 0) {
              if (t[h++] = t[l++], f++, c = 0, 0 === --a) {
                p = !0;
                break;
              }
            } else if (t[h++] = d[s++], c++, f = 0, 1 === --n) {
              p = !0;
              break;
            }
          } while (g > (c | f));

          if (p) break;

          do {
            if (c = Jt(t[l], d, s, n, 0, e), 0 !== c) {
              for (o = 0; c > o; o++) {
                t[h + o] = d[s + o];
              }

              if (h += c, s += c, n -= c, 1 >= n) {
                p = !0;
                break;
              }
            }

            if (t[h++] = t[l++], 0 === --a) {
              p = !0;
              break;
            }

            if (f = Qt(d[s], t, l, a, 0, e), 0 !== f) {
              for (o = 0; f > o; o++) {
                t[h + o] = t[l + o];
              }

              if (h += f, l += f, a -= f, 0 === a) {
                p = !0;
                break;
              }
            }

            if (t[h++] = d[s++], 1 === --n) {
              p = !0;
              break;
            }

            g--;
          } while (c >= vf || f >= vf);

          if (p) break;
          0 > g && (g = 0), g += 2;
        }

        if (u = g, 1 > u && (u = 1), 1 === n) {
          for (o = 0; a > o; o++) {
            t[h + o] = t[l + o];
          }

          t[h + a] = d[s];
        } else {
          if (0 === n) throw new Error();

          for (o = 0; n > o; o++) {
            t[h + o] = d[s + o];
          }
        }
      } else for (o = 0; n > o; o++) {
        t[h + o] = d[s + o];
      }
    }

    function s(i, n, r, a) {
      var o = 0;

      for (o = 0; a > o; o++) {
        d[o] = t[r + o];
      }

      var s = i + n - 1,
          l = a - 1,
          h = r + a - 1,
          c = 0,
          f = 0;

      if (t[h--] = t[s--], 0 !== --n) {
        if (1 === a) {
          for (h -= n, s -= n, f = h + 1, c = s + 1, o = n - 1; o >= 0; o--) {
            t[f + o] = t[c + o];
          }

          return void (t[h] = d[l]);
        }

        for (var p = u;;) {
          var g = 0,
              v = 0,
              m = !1;

          do {
            if (e(d[l], t[s]) < 0) {
              if (t[h--] = t[s--], g++, v = 0, 0 === --n) {
                m = !0;
                break;
              }
            } else if (t[h--] = d[l--], v++, g = 0, 1 === --a) {
              m = !0;
              break;
            }
          } while (p > (g | v));

          if (m) break;

          do {
            if (g = n - Jt(d[l], t, i, n, n - 1, e), 0 !== g) {
              for (h -= g, s -= g, n -= g, f = h + 1, c = s + 1, o = g - 1; o >= 0; o--) {
                t[f + o] = t[c + o];
              }

              if (0 === n) {
                m = !0;
                break;
              }
            }

            if (t[h--] = d[l--], 1 === --a) {
              m = !0;
              break;
            }

            if (v = a - Qt(t[s], d, 0, a, a - 1, e), 0 !== v) {
              for (h -= v, l -= v, a -= v, f = h + 1, c = l + 1, o = 0; v > o; o++) {
                t[f + o] = d[c + o];
              }

              if (1 >= a) {
                m = !0;
                break;
              }
            }

            if (t[h--] = t[s--], 0 === --n) {
              m = !0;
              break;
            }

            p--;
          } while (g >= vf || v >= vf);

          if (m) break;
          0 > p && (p = 0), p += 2;
        }

        if (u = p, 1 > u && (u = 1), 1 === a) {
          for (h -= n, s -= n, f = h + 1, c = s + 1, o = n - 1; o >= 0; o--) {
            t[f + o] = t[c + o];
          }

          t[h] = d[l];
        } else {
          if (0 === a) throw new Error();

          for (c = h - (a - 1), o = 0; a > o; o++) {
            t[c + o] = d[o];
          }
        }
      } else for (c = h - (a - 1), o = 0; a > o; o++) {
        t[c + o] = d[o];
      }
    }

    var l,
        h,
        u = vf,
        c = 0,
        d = [];
    l = [], h = [], this.mergeRuns = n, this.forceMergeRuns = r, this.pushRun = i;
  }

  function ee(t, e, i, n) {
    i || (i = 0), n || (n = t.length);
    var r = n - i;

    if (!(2 > r)) {
      var a = 0;
      if (gf > r) return a = jt(t, i, n, e), void $t(t, i, n, i + a, e);
      var o = new te(t, e),
          s = Zt(r);

      do {
        if (a = jt(t, i, n, e), s > a) {
          var l = r;
          l > s && (l = s), $t(t, i, i + l, i + a, e), a = l;
        }

        o.pushRun(i, a), o.mergeRuns(), r -= a, i += a;
      } while (0 !== r);

      o.forceMergeRuns();
    }
  }

  function ie(t, e) {
    return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;
  }

  function ne(t, e, i) {
    var n = null == e.x ? 0 : e.x,
        r = null == e.x2 ? 1 : e.x2,
        a = null == e.y ? 0 : e.y,
        o = null == e.y2 ? 0 : e.y2;
    e.global || (n = n * i.width + i.x, r = r * i.width + i.x, a = a * i.height + i.y, o = o * i.height + i.y), n = isNaN(n) ? 0 : n, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o;
    var s = t.createLinearGradient(n, a, r, o);
    return s;
  }

  function re(t, e, i) {
    var n = i.width,
        r = i.height,
        a = Math.min(n, r),
        o = null == e.x ? .5 : e.x,
        s = null == e.y ? .5 : e.y,
        l = null == e.r ? .5 : e.r;
    e.global || (o = o * n + i.x, s = s * r + i.y, l *= a);
    var h = t.createRadialGradient(o, s, 0, o, s, l);
    return h;
  }

  function ae() {
    return !1;
  }

  function oe(t, e, i) {
    var n = kd(),
        r = e.getWidth(),
        a = e.getHeight(),
        o = n.style;
    return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", n.setAttribute("data-zr-dom-id", t)), n.width = r * i, n.height = a * i, n;
  }

  function se(t) {
    if ("string" == typeof t) {
      var e = Cf.get(t);
      return e && e.image;
    }

    return t;
  }

  function le(t, e, i, n, r) {
    if (t) {
      if ("string" == typeof t) {
        if (e && e.__zrImageSrc === t || !i) return e;
        var a = Cf.get(t),
            o = {
          hostEl: i,
          cb: n,
          cbPayload: r
        };
        return a ? (e = a.image, !ue(e) && a.pending.push(o)) : (!e && (e = new Image()), e.onload = he, Cf.put(t, e.__cachedImgObj = {
          image: e,
          pending: [o]
        }), e.src = e.__zrImageSrc = t), e;
      }

      return t;
    }

    return e;
  }

  function he() {
    var t = this.__cachedImgObj;
    this.onload = this.__cachedImgObj = null;

    for (var e = 0; e < t.pending.length; e++) {
      var i = t.pending[e],
          n = i.cb;
      n && n(this, i.cbPayload), i.hostEl.dirty();
    }

    t.pending.length = 0;
  }

  function ue(t) {
    return t && t.width && t.height;
  }

  function ce(t, e) {
    e = e || Of;
    var i = t + ":" + e;
    if (kf[i]) return kf[i];

    for (var n = (t + "").split("\n"), r = 0, a = 0, o = n.length; o > a; a++) {
      r = Math.max(Me(n[a], e).width, r);
    }

    return Af > Lf && (Af = 0, kf = {}), Af++, kf[i] = r, r;
  }

  function de(t, e, i, n, r, a, o) {
    return a ? pe(t, e, i, n, r, a, o) : fe(t, e, i, n, r, o);
  }

  function fe(t, e, i, n, r, a) {
    var o = Se(t, e, r, a),
        s = ce(t, e);
    r && (s += r[1] + r[3]);
    var l = o.outerHeight,
        h = ge(0, s, i),
        u = ve(0, l, n),
        c = new qt(h, u, s, l);
    return c.lineHeight = o.lineHeight, c;
  }

  function pe(t, e, i, n, r, a, o) {
    var s = Ie(t, {
      rich: a,
      truncate: o,
      font: e,
      textAlign: i,
      textPadding: r
    }),
        l = s.outerWidth,
        h = s.outerHeight,
        u = ge(0, l, i),
        c = ve(0, h, n);
    return new qt(u, c, l, h);
  }

  function ge(t, e, i) {
    return "right" === i ? t -= e : "center" === i && (t -= e / 2), t;
  }

  function ve(t, e, i) {
    return "middle" === i ? t -= e / 2 : "bottom" === i && (t -= e), t;
  }

  function me(t, e, i) {
    var n = e.x,
        r = e.y,
        a = e.height,
        o = e.width,
        s = a / 2,
        l = "left",
        h = "top";

    switch (t) {
      case "left":
        n -= i, r += s, l = "right", h = "middle";
        break;

      case "right":
        n += i + o, r += s, h = "middle";
        break;

      case "top":
        n += o / 2, r -= i, l = "center", h = "bottom";
        break;

      case "bottom":
        n += o / 2, r += a + i, l = "center";
        break;

      case "inside":
        n += o / 2, r += s, l = "center", h = "middle";
        break;

      case "insideLeft":
        n += i, r += s, h = "middle";
        break;

      case "insideRight":
        n += o - i, r += s, l = "right", h = "middle";
        break;

      case "insideTop":
        n += o / 2, r += i, l = "center";
        break;

      case "insideBottom":
        n += o / 2, r += a - i, l = "center", h = "bottom";
        break;

      case "insideTopLeft":
        n += i, r += i;
        break;

      case "insideTopRight":
        n += o - i, r += i, l = "right";
        break;

      case "insideBottomLeft":
        n += i, r += a - i, h = "bottom";
        break;

      case "insideBottomRight":
        n += o - i, r += a - i, l = "right", h = "bottom";
    }

    return {
      x: n,
      y: r,
      textAlign: l,
      textVerticalAlign: h
    };
  }

  function ye(t, e, i, n, r) {
    if (!e) return "";
    var a = (t + "").split("\n");
    r = _e(e, i, n, r);

    for (var o = 0, s = a.length; s > o; o++) {
      a[o] = xe(a[o], r);
    }

    return a.join("\n");
  }

  function _e(t, e, i, n) {
    n = o({}, n), n.font = e;
    var i = C(i, "...");
    n.maxIterations = C(n.maxIterations, 2);
    var r = n.minChar = C(n.minChar, 0);
    n.cnCharWidth = ce("国", e);
    var a = n.ascCharWidth = ce("a", e);
    n.placeholder = C(n.placeholder, "");

    for (var s = t = Math.max(0, t - 1), l = 0; r > l && s >= a; l++) {
      s -= a;
    }

    var h = ce(i);
    return h > s && (i = "", h = 0), s = t - h, n.ellipsis = i, n.ellipsisWidth = h, n.contentWidth = s, n.containerWidth = t, n;
  }

  function xe(t, e) {
    var i = e.containerWidth,
        n = e.font,
        r = e.contentWidth;
    if (!i) return "";
    var a = ce(t, n);
    if (i >= a) return t;

    for (var o = 0;; o++) {
      if (r >= a || o >= e.maxIterations) {
        t += e.ellipsis;
        break;
      }

      var s = 0 === o ? we(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;
      t = t.substr(0, s), a = ce(t, n);
    }

    return "" === t && (t = e.placeholder), t;
  }

  function we(t, e, i, n) {
    for (var r = 0, a = 0, o = t.length; o > a && e > r; a++) {
      var s = t.charCodeAt(a);
      r += s >= 0 && 127 >= s ? i : n;
    }

    return a;
  }

  function be(t) {
    return ce("国", t);
  }

  function Me(t, e) {
    return Nf.measureText(t, e);
  }

  function Se(t, e, i, n) {
    null != t && (t += "");
    var r = be(e),
        a = t ? t.split("\n") : [],
        o = a.length * r,
        s = o;

    if (i && (s += i[0] + i[2]), t && n) {
      var l = n.outerHeight,
          h = n.outerWidth;
      if (null != l && s > l) t = "", a = [];else if (null != h) for (var u = _e(h - (i ? i[1] + i[3] : 0), e, n.ellipsis, {
        minChar: n.minChar,
        placeholder: n.placeholder
      }), c = 0, d = a.length; d > c; c++) {
        a[c] = xe(a[c], u);
      }
    }

    return {
      lines: a,
      height: o,
      outerHeight: s,
      lineHeight: r
    };
  }

  function Ie(t, e) {
    var i = {
      lines: [],
      width: 0,
      height: 0
    };
    if (null != t && (t += ""), !t) return i;

    for (var n, r = Pf.lastIndex = 0; null != (n = Pf.exec(t));) {
      var a = n.index;
      a > r && Te(i, t.substring(r, a)), Te(i, n[2], n[1]), r = Pf.lastIndex;
    }

    r < t.length && Te(i, t.substring(r, t.length));
    var o = i.lines,
        s = 0,
        l = 0,
        h = [],
        u = e.textPadding,
        c = e.truncate,
        d = c && c.outerWidth,
        f = c && c.outerHeight;
    u && (null != d && (d -= u[1] + u[3]), null != f && (f -= u[0] + u[2]));

    for (var p = 0; p < o.length; p++) {
      for (var g = o[p], v = 0, m = 0, y = 0; y < g.tokens.length; y++) {
        var _ = g.tokens[y],
            x = _.styleName && e.rich[_.styleName] || {},
            w = _.textPadding = x.textPadding,
            b = _.font = x.font || e.font,
            M = _.textHeight = C(x.textHeight, be(b));
        if (w && (M += w[0] + w[2]), _.height = M, _.lineHeight = k(x.textLineHeight, e.textLineHeight, M), _.textAlign = x && x.textAlign || e.textAlign, _.textVerticalAlign = x && x.textVerticalAlign || "middle", null != f && s + _.lineHeight > f) return {
          lines: [],
          width: 0,
          height: 0
        };
        _.textWidth = ce(_.text, b);
        var S = x.textWidth,
            I = null == S || "auto" === S;
        if ("string" == typeof S && "%" === S.charAt(S.length - 1)) _.percentWidth = S, h.push(_), S = 0;else {
          if (I) {
            S = _.textWidth;
            var T = x.textBackgroundColor,
                D = T && T.image;
            D && (D = se(D), ue(D) && (S = Math.max(S, D.width * M / D.height)));
          }

          var A = w ? w[1] + w[3] : 0;
          S += A;
          var L = null != d ? d - m : null;
          null != L && S > L && (!I || A > L ? (_.text = "", _.textWidth = S = 0) : (_.text = ye(_.text, L - A, b, c.ellipsis, {
            minChar: c.minChar
          }), _.textWidth = ce(_.text, b), S = _.textWidth + A));
        }
        m += _.width = S, x && (v = Math.max(v, _.lineHeight));
      }

      g.width = m, g.lineHeight = v, s += v, l = Math.max(l, m);
    }

    i.outerWidth = i.width = C(e.textWidth, l), i.outerHeight = i.height = C(e.textHeight, s), u && (i.outerWidth += u[1] + u[3], i.outerHeight += u[0] + u[2]);

    for (var p = 0; p < h.length; p++) {
      var _ = h[p],
          P = _.percentWidth;
      _.width = parseInt(P, 10) / 100 * l;
    }

    return i;
  }

  function Te(t, e, i) {
    for (var n = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
      var s = r[o],
          l = {
        styleName: i,
        text: s,
        isLineHolder: !s && !n
      };
      if (o) a.push({
        tokens: [l]
      });else {
        var h = (a[a.length - 1] || (a[0] = {
          tokens: []
        })).tokens,
            u = h.length;
        1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || n) && h.push(l);
      }
    }
  }

  function De(t) {
    var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
    return e && O(e) || t.textFont || t.font;
  }

  function Ce(t, e) {
    var i,
        n,
        r,
        a,
        o = e.x,
        s = e.y,
        l = e.width,
        h = e.height,
        u = e.r;
    0 > l && (o += l, l = -l), 0 > h && (s += h, h = -h), "number" == typeof u ? i = n = r = a = u : u instanceof Array ? 1 === u.length ? i = n = r = a = u[0] : 2 === u.length ? (i = r = u[0], n = a = u[1]) : 3 === u.length ? (i = u[0], n = a = u[1], r = u[2]) : (i = u[0], n = u[1], r = u[2], a = u[3]) : i = n = r = a = 0;
    var c;
    i + n > l && (c = i + n, i *= l / c, n *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), n + r > h && (c = n + r, n *= h / c, r *= h / c), i + a > h && (c = i + a, i *= h / c, a *= h / c), t.moveTo(o + i, s), t.lineTo(o + l - n, s), 0 !== n && t.arc(o + l - n, s + n, n, -Math.PI / 2, 0), t.lineTo(o + l, s + h - r), 0 !== r && t.arc(o + l - r, s + h - r, r, 0, Math.PI / 2), t.lineTo(o + a, s + h), 0 !== a && t.arc(o + a, s + h - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + i), 0 !== i && t.arc(o + i, s + i, i, Math.PI, 1.5 * Math.PI);
  }

  function ke(t) {
    return Ae(t), f(t.rich, Ae), t;
  }

  function Ae(t) {
    if (t) {
      t.font = De(t);
      var e = t.textAlign;
      "middle" === e && (e = "center"), t.textAlign = null == e || Rf[e] ? e : "left";
      var i = t.textVerticalAlign || t.textBaseline;
      "center" === i && (i = "middle"), t.textVerticalAlign = null == i || Ef[i] ? i : "top";
      var n = t.textPadding;
      n && (t.textPadding = L(t.textPadding));
    }
  }

  function Le(t, e, i, n, r) {
    n.rich ? Oe(t, e, i, n, r) : Pe(t, e, i, n, r);
  }

  function Pe(t, e, i, n, r) {
    var a = He(e, "font", n.font || Of),
        o = n.textPadding,
        s = t.__textCotentBlock;
    (!s || t.__dirty) && (s = t.__textCotentBlock = Se(i, a, o, n.truncate));
    var l = s.outerHeight,
        h = s.lines,
        u = s.lineHeight,
        c = Fe(l, n, r),
        d = c.baseX,
        f = c.baseY,
        p = c.textAlign,
        g = c.textVerticalAlign;
    Re(e, n, r, d, f);

    var v = ve(f, l, g),
        m = d,
        y = v,
        _ = ze(n);

    if (_ || o) {
      var x = ce(i, a),
          w = x;
      o && (w += o[1] + o[3]);
      var b = ge(d, w, p);
      _ && Be(t, e, n, b, v, w, l), o && (m = Ye(d, p, o), y += o[0]);
    }

    He(e, "textAlign", p || "left"), He(e, "textBaseline", "middle"), He(e, "shadowBlur", n.textShadowBlur || 0), He(e, "shadowColor", n.textShadowColor || "transparent"), He(e, "shadowOffsetX", n.textShadowOffsetX || 0), He(e, "shadowOffsetY", n.textShadowOffsetY || 0), y += u / 2;
    var M = n.textStrokeWidth,
        S = We(n.textStroke, M),
        I = Ge(n.textFill);
    S && (He(e, "lineWidth", M), He(e, "strokeStyle", S)), I && He(e, "fillStyle", I);

    for (var T = 0; T < h.length; T++) {
      S && e.strokeText(h[T], m, y), I && e.fillText(h[T], m, y), y += u;
    }
  }

  function Oe(t, e, i, n, r) {
    var a = t.__textCotentBlock;
    (!a || t.__dirty) && (a = t.__textCotentBlock = Ie(i, n)), Ne(t, e, a, n, r);
  }

  function Ne(t, e, i, n, r) {
    var a = i.width,
        o = i.outerWidth,
        s = i.outerHeight,
        l = n.textPadding,
        h = Fe(s, n, r),
        u = h.baseX,
        c = h.baseY,
        d = h.textAlign,
        f = h.textVerticalAlign;
    Re(e, n, r, u, c);
    var p = ge(u, o, d),
        g = ve(c, s, f),
        v = p,
        m = g;
    l && (v += l[3], m += l[0]);
    var y = v + a;
    ze(n) && Be(t, e, n, p, g, o, s);

    for (var _ = 0; _ < i.lines.length; _++) {
      for (var x, w = i.lines[_], b = w.tokens, M = b.length, S = w.lineHeight, I = w.width, T = 0, D = v, C = y, k = M - 1; M > T && (x = b[T], !x.textAlign || "left" === x.textAlign);) {
        Ee(t, e, x, n, S, m, D, "left"), I -= x.width, D += x.width, T++;
      }

      for (; k >= 0 && (x = b[k], "right" === x.textAlign);) {
        Ee(t, e, x, n, S, m, C, "right"), I -= x.width, C -= x.width, k--;
      }

      for (D += (a - (D - v) - (y - C) - I) / 2; k >= T;) {
        x = b[T], Ee(t, e, x, n, S, m, D + x.width / 2, "center"), D += x.width, T++;
      }

      m += S;
    }
  }

  function Re(t, e, i, n, r) {
    if (i && e.textRotation) {
      var a = e.textOrigin;
      "center" === a ? (n = i.width / 2 + i.x, r = i.height / 2 + i.y) : a && (n = a[0] + i.x, r = a[1] + i.y), t.translate(n, r), t.rotate(-e.textRotation), t.translate(-n, -r);
    }
  }

  function Ee(t, e, i, n, r, a, o, s) {
    var l = n.rich[i.styleName] || {},
        h = i.textVerticalAlign,
        u = a + r / 2;
    "top" === h ? u = a + i.height / 2 : "bottom" === h && (u = a + r - i.height / 2), !i.isLineHolder && ze(l) && Be(t, e, l, "right" === s ? o - i.width : "center" === s ? o - i.width / 2 : o, u - i.height / 2, i.width, i.height);
    var c = i.textPadding;
    c && (o = Ye(o, s, c), u -= i.height / 2 - c[2] - i.textHeight / 2), He(e, "shadowBlur", k(l.textShadowBlur, n.textShadowBlur, 0)), He(e, "shadowColor", l.textShadowColor || n.textShadowColor || "transparent"), He(e, "shadowOffsetX", k(l.textShadowOffsetX, n.textShadowOffsetX, 0)), He(e, "shadowOffsetY", k(l.textShadowOffsetY, n.textShadowOffsetY, 0)), He(e, "textAlign", s), He(e, "textBaseline", "middle"), He(e, "font", i.font || Of);
    var d = We(l.textStroke || n.textStroke, p),
        f = Ge(l.textFill || n.textFill),
        p = C(l.textStrokeWidth, n.textStrokeWidth);
    d && (He(e, "lineWidth", p), He(e, "strokeStyle", d), e.strokeText(i.text, o, u)), f && (He(e, "fillStyle", f), e.fillText(i.text, o, u));
  }

  function ze(t) {
    return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor;
  }

  function Be(t, e, i, n, r, a, o) {
    var s = i.textBackgroundColor,
        l = i.textBorderWidth,
        h = i.textBorderColor,
        u = w(s);

    if (He(e, "shadowBlur", i.textBoxShadowBlur || 0), He(e, "shadowColor", i.textBoxShadowColor || "transparent"), He(e, "shadowOffsetX", i.textBoxShadowOffsetX || 0), He(e, "shadowOffsetY", i.textBoxShadowOffsetY || 0), u || l && h) {
      e.beginPath();
      var c = i.textBorderRadius;
      c ? Ce(e, {
        x: n,
        y: r,
        width: a,
        height: o,
        r: c
      }) : e.rect(n, r, a, o), e.closePath();
    }

    if (u) He(e, "fillStyle", s), e.fill();else if (b(s)) {
      var d = s.image;
      d = le(d, null, t, Ve, s), d && ue(d) && e.drawImage(d, n, r, a, o);
    }
    l && h && (He(e, "lineWidth", l), He(e, "strokeStyle", h), e.stroke());
  }

  function Ve(t, e) {
    e.image = t;
  }

  function Fe(t, e, i) {
    var n = e.x || 0,
        r = e.y || 0,
        a = e.textAlign,
        o = e.textVerticalAlign;

    if (i) {
      var s = e.textPosition;
      if (s instanceof Array) n = i.x + Xe(s[0], i.width), r = i.y + Xe(s[1], i.height);else {
        var l = me(s, i, e.textDistance);
        n = l.x, r = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign;
      }
      var h = e.textOffset;
      h && (n += h[0], r += h[1]);
    }

    return {
      baseX: n,
      baseY: r,
      textAlign: a,
      textVerticalAlign: o
    };
  }

  function He(t, e, i) {
    return t[e] = _f(t, e, i), t[e];
  }

  function We(t, e) {
    return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
  }

  function Ge(t) {
    return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
  }

  function Xe(t, e) {
    return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;
  }

  function Ye(t, e, i) {
    return "right" === e ? t - i[1] : "center" === e ? t + i[3] / 2 - i[1] / 2 : t + i[3];
  }

  function Ue(t, e) {
    return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding);
  }

  function qe(t) {
    t = t || {}, uf.call(this, t);

    for (var e in t) {
      t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
    }

    this.style = new wf(t.style, this), this._rect = null, this.__clipPaths = [];
  }

  function Ze(t) {
    qe.call(this, t);
  }

  function je(t) {
    return parseInt(t, 10);
  }

  function Ke(t) {
    return !!t && (!!t.__builtin__ || "function" == typeof t.resize && "function" == typeof t.refresh);
  }

  function $e(t, e, i) {
    return Gf.copy(t.getBoundingRect()), t.transform && Gf.applyTransform(t.transform), Xf.width = e, Xf.height = i, !Gf.intersect(Xf);
  }

  function Qe(t, e) {
    if (t == e) return !1;
    if (!t || !e || t.length !== e.length) return !0;

    for (var i = 0; i < t.length; i++) {
      if (t[i] !== e[i]) return !0;
    }
  }

  function Je(t, e) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      n.setTransform(e), e.beginPath(), n.buildPath(e, n.shape), e.clip(), n.restoreTransform(e);
    }
  }

  function ti(t, e) {
    var i = document.createElement("div");
    return i.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", i;
  }

  function ei(t) {
    return t.getBoundingClientRect ? t.getBoundingClientRect() : {
      left: 0,
      top: 0
    };
  }

  function ii(t, e, i, n) {
    return i = i || {}, n || !yd.canvasSupported ? ni(t, e, i) : yd.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (i.zrX = e.layerX, i.zrY = e.layerY) : null != e.offsetX ? (i.zrX = e.offsetX, i.zrY = e.offsetY) : ni(t, e, i), i;
  }

  function ni(t, e, i) {
    var n = ei(t);
    i.zrX = e.clientX - n.left, i.zrY = e.clientY - n.top;
  }

  function ri(t, e, i) {
    if (e = e || window.event, null != e.zrX) return e;
    var n = e.type,
        r = n && n.indexOf("touch") >= 0;

    if (r) {
      var a = "touchend" != n ? e.targetTouches[0] : e.changedTouches[0];
      a && ii(t, a, e, i);
    } else ii(t, e, e, i), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;

    var o = e.button;
    return null == e.which && void 0 !== o && qf.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
  }

  function ai(t, e, i) {
    Uf ? t.addEventListener(e, i) : t.attachEvent("on" + e, i);
  }

  function oi(t, e, i) {
    Uf ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i);
  }

  function si(t) {
    var e = t[1][0] - t[0][0],
        i = t[1][1] - t[0][1];
    return Math.sqrt(e * e + i * i);
  }

  function li(t) {
    return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2];
  }

  function hi(t) {
    return "mousewheel" === t && yd.browser.firefox ? "DOMMouseScroll" : t;
  }

  function ui(t, e, i) {
    var n = t._gestureMgr;
    "start" === i && n.clear();
    var r = n.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);

    if ("end" === i && n.clear(), r) {
      var a = r.type;
      e.gestureEvent = a, t.handler.dispatchToElement({
        target: r.target
      }, a, r.event);
    }
  }

  function ci(t) {
    t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
      t._touching = !1;
    }, 700);
  }

  function di(t) {
    var e = t.pointerType;
    return "pen" === e || "touch" === e;
  }

  function fi(t) {
    function e(t, e) {
      return function () {
        return e._touching ? void 0 : t.apply(e, arguments);
      };
    }

    f(tp, function (e) {
      t._handlers[e] = m(np[e], t);
    }), f(ip, function (e) {
      t._handlers[e] = m(np[e], t);
    }), f(Jf, function (i) {
      t._handlers[i] = e(np[i], t);
    });
  }

  function pi(t) {
    function e(e, i) {
      f(e, function (e) {
        ai(t, hi(e), i._handlers[e]);
      }, i);
    }

    Ed.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new Kf(), this._handlers = {}, fi(this), yd.pointerEventsSupported ? e(ip, this) : (yd.touchEventsSupported && e(tp, this), e(Jf, this));
  }

  function gi(t, e) {
    var i = new sp(vd(), t, e);
    return i;
  }

  function vi(t) {
    return t instanceof Array ? t : null == t ? [] : [t];
  }

  function mi(t, e, i) {
    if (t) {
      t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};

      for (var n = 0, r = i.length; r > n; n++) {
        var a = i[n];
        !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a]);
      }
    }
  }

  function yi(t) {
    return !hp(t) || up(t) || t instanceof Date ? t : t.value;
  }

  function _i(t) {
    return hp(t) && !(t instanceof Array);
  }

  function xi(t, e) {
    e = (e || []).slice();
    var i = p(t || [], function (t) {
      return {
        exist: t
      };
    });
    return lp(e, function (t, n) {
      if (hp(t)) {
        for (var r = 0; r < i.length; r++) {
          if (!i[r].option && null != t.id && i[r].exist.id === t.id + "") return i[r].option = t, void (e[n] = null);
        }

        for (var r = 0; r < i.length; r++) {
          var a = i[r].exist;
          if (!(i[r].option || null != a.id && null != t.id || null == t.name || Mi(t) || Mi(a) || a.name !== t.name + "")) return i[r].option = t, void (e[n] = null);
        }
      }
    }), lp(e, function (t) {
      if (hp(t)) {
        for (var e = 0; e < i.length; e++) {
          var n = i[e].exist;

          if (!i[e].option && !Mi(n) && null == t.id) {
            i[e].option = t;
            break;
          }
        }

        e >= i.length && i.push({
          option: t
        });
      }
    }), i;
  }

  function wi(t) {
    var e = z();
    lp(t, function (t) {
      var i = t.exist;
      i && e.set(i.id, t);
    }), lp(t, function (t) {
      var i = t.option;
      P(!i || null == i.id || !e.get(i.id) || e.get(i.id) === t, "id duplicates: " + (i && i.id)), i && null != i.id && e.set(i.id, t), !t.keyInfo && (t.keyInfo = {});
    }), lp(t, function (t, i) {
      var n = t.exist,
          r = t.option,
          a = t.keyInfo;

      if (hp(r)) {
        if (a.name = null != r.name ? r.name + "" : n ? n.name : cp + i, n) a.id = n.id;else if (null != r.id) a.id = r.id + "";else {
          var o = 0;

          do {
            a.id = "\0" + a.name + "\0" + o++;
          } while (e.get(a.id));
        }
        e.set(a.id, t);
      }
    });
  }

  function bi(t) {
    var e = t.name;
    return !(!e || !e.indexOf(cp));
  }

  function Mi(t) {
    return hp(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0");
  }

  function Si(t, e) {
    function i(t, e, i) {
      for (var n = 0, r = t.length; r > n; n++) {
        for (var a = t[n].seriesId, o = vi(t[n].dataIndex), s = i && i[a], l = 0, h = o.length; h > l; l++) {
          var u = o[l];
          s && s[u] ? s[u] = null : (e[a] || (e[a] = {}))[u] = 1;
        }
      }
    }

    function n(t, e) {
      var i = [];

      for (var r in t) {
        if (t.hasOwnProperty(r) && null != t[r]) if (e) i.push(+r);else {
          var a = n(t[r], !0);
          a.length && i.push({
            seriesId: r,
            dataIndex: a
          });
        }
      }

      return i;
    }

    var r = {},
        a = {};
    return i(t || [], r), i(e || [], a, r), [n(r), n(a)];
  }

  function Ii(t, e) {
    return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? _(e.dataIndex) ? p(e.dataIndex, function (e) {
      return t.indexOfRawIndex(e);
    }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? _(e.name) ? p(e.name, function (e) {
      return t.indexOfName(e);
    }) : t.indexOfName(e.name) : void 0;
  }

  function Ti() {
    var t = "__\0ec_inner_" + fp++ + "_" + Math.random().toFixed(5);
    return function (e) {
      return e[t] || (e[t] = {});
    };
  }

  function Di(t, e, i) {
    if (w(e)) {
      var n = {};
      n[e + "Index"] = 0, e = n;
    }

    var r = i && i.defaultMainType;
    !r || Ci(e, r + "Index") || Ci(e, r + "Id") || Ci(e, r + "Name") || (e[r + "Index"] = 0);
    var a = {};
    return lp(e, function (n, r) {
      var n = e[r];
      if ("dataIndex" === r || "dataIndexInside" === r) return void (a[r] = n);
      var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],
          s = o[1],
          l = (o[2] || "").toLowerCase();

      if (!(!s || !l || null == n || "index" === l && "none" === n || i && i.includeMainTypes && h(i.includeMainTypes, s) < 0)) {
        var u = {
          mainType: s
        };
        ("index" !== l || "all" !== n) && (u[l] = n);
        var c = t.queryComponents(u);
        a[s + "Models"] = c, a[s + "Model"] = c[0];
      }
    }), a;
  }

  function Ci(t, e) {
    return t && t.hasOwnProperty(e);
  }

  function ki(t, e, i) {
    t.setAttribute ? t.setAttribute(e, i) : t[e] = i;
  }

  function Ai(t, e) {
    return t.getAttribute ? t.getAttribute(e) : t[e];
  }

  function Li(t) {
    var e = {
      main: "",
      sub: ""
    };
    return t && (t = t.split(pp), e.main = t[0] || "", e.sub = t[1] || ""), e;
  }

  function Pi(t) {
    P(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');
  }

  function Oi(t) {
    t.$constructor = t, t.extend = function (t) {
      var e = this,
          i = function i() {
        t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments);
      };

      return o(i.prototype, t), i.extend = this.extend, i.superCall = Ri, i.superApply = Ei, u(i, this), i.superClass = e, i;
    };
  }

  function Ni(t) {
    var e = ["__\0is_clz", vp++, Math.random().toFixed(3)].join("_");
    t.prototype[e] = !0, t.isInstance = function (t) {
      return !(!t || !t[e]);
    };
  }

  function Ri(t, e) {
    var i = A(arguments, 2);
    return this.superClass.prototype[e].apply(t, i);
  }

  function Ei(t, e, i) {
    return this.superClass.prototype[e].apply(t, i);
  }

  function zi(t, e) {
    function i(t) {
      var e = n[t.main];
      return e && e[gp] || (e = n[t.main] = {}, e[gp] = !0), e;
    }

    e = e || {};
    var n = {};

    if (t.registerClass = function (t, e) {
      if (e) if (Pi(e), e = Li(e), e.sub) {
        if (e.sub !== gp) {
          var r = i(e);
          r[e.sub] = t;
        }
      } else n[e.main] = t;
      return t;
    }, t.getClass = function (t, e, i) {
      var r = n[t];
      if (r && r[gp] && (r = e ? r[e] : null), i && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
      return r;
    }, t.getClassesByMainType = function (t) {
      t = Li(t);
      var e = [],
          i = n[t.main];
      return i && i[gp] ? f(i, function (t, i) {
        i !== gp && e.push(t);
      }) : e.push(i), e;
    }, t.hasClass = function (t) {
      return t = Li(t), !!n[t.main];
    }, t.getAllClassMainTypes = function () {
      var t = [];
      return f(n, function (e, i) {
        t.push(i);
      }), t;
    }, t.hasSubTypes = function (t) {
      t = Li(t);
      var e = n[t.main];
      return e && e[gp];
    }, t.parseClassType = Li, e.registerWhenExtend) {
      var r = t.extend;
      r && (t.extend = function (e) {
        var i = r.call(this, e);
        return t.registerClass(i, e.type);
      });
    }

    return t;
  }

  function Bi(t) {
    return t > -Sp && Sp > t;
  }

  function Vi(t) {
    return t > Sp || -Sp > t;
  }

  function Fi(t, e, i, n, r) {
    var a = 1 - r;
    return a * a * (a * t + 3 * r * e) + r * r * (r * n + 3 * a * i);
  }

  function Hi(t, e, i, n, r) {
    var a = 1 - r;
    return 3 * (((e - t) * a + 2 * (i - e) * r) * a + (n - i) * r * r);
  }

  function Wi(t, e, i, n, r, a) {
    var o = n + 3 * (e - i) - t,
        s = 3 * (i - 2 * e + t),
        l = 3 * (e - t),
        h = t - r,
        u = s * s - 3 * o * l,
        c = s * l - 9 * o * h,
        d = l * l - 3 * s * h,
        f = 0;
    if (Bi(u) && Bi(c)) {
      if (Bi(s)) a[0] = 0;else {
        var p = -l / s;
        p >= 0 && 1 >= p && (a[f++] = p);
      }
    } else {
      var g = c * c - 4 * u * d;

      if (Bi(g)) {
        var v = c / u,
            p = -s / o + v,
            m = -v / 2;
        p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m);
      } else if (g > 0) {
        var y = Mp(g),
            _ = u * s + 1.5 * o * (-c + y),
            x = u * s + 1.5 * o * (-c - y);

        _ = 0 > _ ? -bp(-_, Dp) : bp(_, Dp), x = 0 > x ? -bp(-x, Dp) : bp(x, Dp);
        var p = (-s - (_ + x)) / (3 * o);
        p >= 0 && 1 >= p && (a[f++] = p);
      } else {
        var w = (2 * u * s - 3 * o * c) / (2 * Mp(u * u * u)),
            b = Math.acos(w) / 3,
            M = Mp(u),
            S = Math.cos(b),
            p = (-s - 2 * M * S) / (3 * o),
            m = (-s + M * (S + Tp * Math.sin(b))) / (3 * o),
            I = (-s + M * (S - Tp * Math.sin(b))) / (3 * o);
        p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m), I >= 0 && 1 >= I && (a[f++] = I);
      }
    }
    return f;
  }

  function Gi(t, e, i, n, r) {
    var a = 6 * i - 12 * e + 6 * t,
        o = 9 * e + 3 * n - 3 * t - 9 * i,
        s = 3 * e - 3 * t,
        l = 0;

    if (Bi(o)) {
      if (Vi(a)) {
        var h = -s / a;
        h >= 0 && 1 >= h && (r[l++] = h);
      }
    } else {
      var u = a * a - 4 * o * s;
      if (Bi(u)) r[0] = -a / (2 * o);else if (u > 0) {
        var c = Mp(u),
            h = (-a + c) / (2 * o),
            d = (-a - c) / (2 * o);
        h >= 0 && 1 >= h && (r[l++] = h), d >= 0 && 1 >= d && (r[l++] = d);
      }
    }

    return l;
  }

  function Xi(t, e, i, n, r, a) {
    var o = (e - t) * r + t,
        s = (i - e) * r + e,
        l = (n - i) * r + i,
        h = (s - o) * r + o,
        u = (l - s) * r + s,
        c = (u - h) * r + h;
    a[0] = t, a[1] = o, a[2] = h, a[3] = c, a[4] = c, a[5] = u, a[6] = l, a[7] = n;
  }

  function Yi(t, e, i, n, r, a, o, s, l, h, u) {
    var c,
        d,
        f,
        p,
        g,
        v = .005,
        m = 1 / 0;
    Cp[0] = l, Cp[1] = h;

    for (var y = 0; 1 > y; y += .05) {
      kp[0] = Fi(t, i, r, o, y), kp[1] = Fi(e, n, a, s, y), p = Nd(Cp, kp), m > p && (c = y, m = p);
    }

    m = 1 / 0;

    for (var _ = 0; 32 > _ && !(Ip > v); _++) {
      d = c - v, f = c + v, kp[0] = Fi(t, i, r, o, d), kp[1] = Fi(e, n, a, s, d), p = Nd(kp, Cp), d >= 0 && m > p ? (c = d, m = p) : (Ap[0] = Fi(t, i, r, o, f), Ap[1] = Fi(e, n, a, s, f), g = Nd(Ap, Cp), 1 >= f && m > g ? (c = f, m = g) : v *= .5);
    }

    return u && (u[0] = Fi(t, i, r, o, c), u[1] = Fi(e, n, a, s, c)), Mp(m);
  }

  function Ui(t, e, i, n) {
    var r = 1 - n;
    return r * (r * t + 2 * n * e) + n * n * i;
  }

  function qi(t, e, i, n) {
    return 2 * ((1 - n) * (e - t) + n * (i - e));
  }

  function Zi(t, e, i, n, r) {
    var a = t - 2 * e + i,
        o = 2 * (e - t),
        s = t - n,
        l = 0;

    if (Bi(a)) {
      if (Vi(o)) {
        var h = -s / o;
        h >= 0 && 1 >= h && (r[l++] = h);
      }
    } else {
      var u = o * o - 4 * a * s;

      if (Bi(u)) {
        var h = -o / (2 * a);
        h >= 0 && 1 >= h && (r[l++] = h);
      } else if (u > 0) {
        var c = Mp(u),
            h = (-o + c) / (2 * a),
            d = (-o - c) / (2 * a);
        h >= 0 && 1 >= h && (r[l++] = h), d >= 0 && 1 >= d && (r[l++] = d);
      }
    }

    return l;
  }

  function ji(t, e, i) {
    var n = t + i - 2 * e;
    return 0 === n ? .5 : (t - e) / n;
  }

  function Ki(t, e, i, n, r) {
    var a = (e - t) * n + t,
        o = (i - e) * n + e,
        s = (o - a) * n + a;
    r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = i;
  }

  function $i(t, e, i, n, r, a, o, s, l) {
    var h,
        u = .005,
        c = 1 / 0;
    Cp[0] = o, Cp[1] = s;

    for (var d = 0; 1 > d; d += .05) {
      kp[0] = Ui(t, i, r, d), kp[1] = Ui(e, n, a, d);
      var f = Nd(Cp, kp);
      c > f && (h = d, c = f);
    }

    c = 1 / 0;

    for (var p = 0; 32 > p && !(Ip > u); p++) {
      var g = h - u,
          v = h + u;
      kp[0] = Ui(t, i, r, g), kp[1] = Ui(e, n, a, g);
      var f = Nd(kp, Cp);
      if (g >= 0 && c > f) h = g, c = f;else {
        Ap[0] = Ui(t, i, r, v), Ap[1] = Ui(e, n, a, v);
        var m = Nd(Ap, Cp);
        1 >= v && c > m ? (h = v, c = m) : u *= .5;
      }
    }

    return l && (l[0] = Ui(t, i, r, h), l[1] = Ui(e, n, a, h)), Mp(c);
  }

  function Qi(t, e, i, n, r, a) {
    r[0] = Lp(t, i), r[1] = Lp(e, n), a[0] = Pp(t, i), a[1] = Pp(e, n);
  }

  function Ji(t, e, i, n, r, a, o, s, l, h) {
    var u,
        c = Gi,
        d = Fi,
        f = c(t, i, r, o, Vp);

    for (l[0] = 1 / 0, l[1] = 1 / 0, h[0] = -1 / 0, h[1] = -1 / 0, u = 0; f > u; u++) {
      var p = d(t, i, r, o, Vp[u]);
      l[0] = Lp(p, l[0]), h[0] = Pp(p, h[0]);
    }

    for (f = c(e, n, a, s, Fp), u = 0; f > u; u++) {
      var g = d(e, n, a, s, Fp[u]);
      l[1] = Lp(g, l[1]), h[1] = Pp(g, h[1]);
    }

    l[0] = Lp(t, l[0]), h[0] = Pp(t, h[0]), l[0] = Lp(o, l[0]), h[0] = Pp(o, h[0]), l[1] = Lp(e, l[1]), h[1] = Pp(e, h[1]), l[1] = Lp(s, l[1]), h[1] = Pp(s, h[1]);
  }

  function tn(t, e, i, n, r, a, o, s) {
    var l = ji,
        h = Ui,
        u = Pp(Lp(l(t, i, r), 1), 0),
        c = Pp(Lp(l(e, n, a), 1), 0),
        d = h(t, i, r, u),
        f = h(e, n, a, c);
    o[0] = Lp(t, r, d), o[1] = Lp(e, a, f), s[0] = Pp(t, r, d), s[1] = Pp(e, a, f);
  }

  function en(t, e, i, n, r, a, o, s, l) {
    var h = Q,
        u = J,
        c = Math.abs(r - a);
    if (1e-4 > c % Rp && c > 1e-4) return s[0] = t - i, s[1] = e - n, l[0] = t + i, void (l[1] = e + n);

    if (Ep[0] = Np(r) * i + t, Ep[1] = Op(r) * n + e, zp[0] = Np(a) * i + t, zp[1] = Op(a) * n + e, h(s, Ep, zp), u(l, Ep, zp), r %= Rp, 0 > r && (r += Rp), a %= Rp, 0 > a && (a += Rp), r > a && !o ? a += Rp : a > r && o && (r += Rp), o) {
      var d = a;
      a = r, r = d;
    }

    for (var f = 0; a > f; f += Math.PI / 2) {
      f > r && (Bp[0] = Np(f) * i + t, Bp[1] = Op(f) * n + e, h(s, Bp, s), u(l, Bp, l));
    }
  }

  function nn(t, e, i, n, r, a, o) {
    if (0 === r) return !1;
    var s = r,
        l = 0,
        h = t;
    if (o > e + s && o > n + s || e - s > o && n - s > o || a > t + s && a > i + s || t - s > a && i - s > a) return !1;
    if (t === i) return Math.abs(a - t) <= s / 2;
    l = (e - n) / (t - i), h = (t * n - i * e) / (t - i);
    var u = l * a - o + h,
        c = u * u / (l * l + 1);
    return s / 2 * s / 2 >= c;
  }

  function rn(t, e, i, n, r, a, o, s, l, h, u) {
    if (0 === l) return !1;
    var c = l;
    if (u > e + c && u > n + c && u > a + c && u > s + c || e - c > u && n - c > u && a - c > u && s - c > u || h > t + c && h > i + c && h > r + c && h > o + c || t - c > h && i - c > h && r - c > h && o - c > h) return !1;
    var d = Yi(t, e, i, n, r, a, o, s, h, u, null);
    return c / 2 >= d;
  }

  function an(t, e, i, n, r, a, o, s, l) {
    if (0 === o) return !1;
    var h = o;
    if (l > e + h && l > n + h && l > a + h || e - h > l && n - h > l && a - h > l || s > t + h && s > i + h && s > r + h || t - h > s && i - h > s && r - h > s) return !1;
    var u = $i(t, e, i, n, r, a, s, l, null);
    return h / 2 >= u;
  }

  function on(t) {
    return t %= tg, 0 > t && (t += tg), t;
  }

  function sn(t, e, i, n, r, a, o, s, l) {
    if (0 === o) return !1;
    var h = o;
    s -= t, l -= e;
    var u = Math.sqrt(s * s + l * l);
    if (u - h > i || i > u + h) return !1;
    if (Math.abs(n - r) % eg < 1e-4) return !0;

    if (a) {
      var c = n;
      n = on(r), r = on(c);
    } else n = on(n), r = on(r);

    n > r && (r += eg);
    var d = Math.atan2(l, s);
    return 0 > d && (d += eg), d >= n && r >= d || d + eg >= n && r >= d + eg;
  }

  function ln(t, e, i, n, r, a) {
    if (a > e && a > n || e > a && n > a) return 0;
    if (n === e) return 0;
    var o = e > n ? 1 : -1,
        s = (a - e) / (n - e);
    (1 === s || 0 === s) && (o = e > n ? .5 : -.5);
    var l = s * (i - t) + t;
    return l === r ? 1 / 0 : l > r ? o : 0;
  }

  function hn(t, e) {
    return Math.abs(t - e) < rg;
  }

  function un() {
    var t = og[0];
    og[0] = og[1], og[1] = t;
  }

  function cn(t, e, i, n, r, a, o, s, l, h) {
    if (h > e && h > n && h > a && h > s || e > h && n > h && a > h && s > h) return 0;
    var u = Wi(e, n, a, s, h, ag);
    if (0 === u) return 0;

    for (var c, d, f = 0, p = -1, g = 0; u > g; g++) {
      var v = ag[g],
          m = 0 === v || 1 === v ? .5 : 1,
          y = Fi(t, i, r, o, v);
      l > y || (0 > p && (p = Gi(e, n, a, s, og), og[1] < og[0] && p > 1 && un(), c = Fi(e, n, a, s, og[0]), p > 1 && (d = Fi(e, n, a, s, og[1]))), f += 2 == p ? v < og[0] ? e > c ? m : -m : v < og[1] ? c > d ? m : -m : d > s ? m : -m : v < og[0] ? e > c ? m : -m : c > s ? m : -m);
    }

    return f;
  }

  function dn(t, e, i, n, r, a, o, s) {
    if (s > e && s > n && s > a || e > s && n > s && a > s) return 0;
    var l = Zi(e, n, a, s, ag);
    if (0 === l) return 0;
    var h = ji(e, n, a);

    if (h >= 0 && 1 >= h) {
      for (var u = 0, c = Ui(e, n, a, h), d = 0; l > d; d++) {
        var f = 0 === ag[d] || 1 === ag[d] ? .5 : 1,
            p = Ui(t, i, r, ag[d]);
        o > p || (u += ag[d] < h ? e > c ? f : -f : c > a ? f : -f);
      }

      return u;
    }

    var f = 0 === ag[0] || 1 === ag[0] ? .5 : 1,
        p = Ui(t, i, r, ag[0]);
    return o > p ? 0 : e > a ? f : -f;
  }

  function fn(t, e, i, n, r, a, o, s) {
    if (s -= e, s > i || -i > s) return 0;
    var l = Math.sqrt(i * i - s * s);
    ag[0] = -l, ag[1] = l;
    var h = Math.abs(n - r);
    if (1e-4 > h) return 0;

    if (1e-4 > h % ng) {
      n = 0, r = ng;
      var u = a ? 1 : -1;
      return o >= ag[0] + t && o <= ag[1] + t ? u : 0;
    }

    if (a) {
      var l = n;
      n = on(r), r = on(l);
    } else n = on(n), r = on(r);

    n > r && (r += ng);

    for (var c = 0, d = 0; 2 > d; d++) {
      var f = ag[d];

      if (f + t > o) {
        var p = Math.atan2(s, f),
            u = a ? 1 : -1;
        0 > p && (p = ng + p), (p >= n && r >= p || p + ng >= n && r >= p + ng) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (u = -u), c += u);
      }
    }

    return c;
  }

  function pn(t, e, i, n, r) {
    for (var a = 0, o = 0, s = 0, l = 0, h = 0, u = 0; u < t.length;) {
      var c = t[u++];

      switch (c === ig.M && u > 1 && (i || (a += ln(o, s, l, h, n, r))), 1 == u && (o = t[u], s = t[u + 1], l = o, h = s), c) {
        case ig.M:
          l = t[u++], h = t[u++], o = l, s = h;
          break;

        case ig.L:
          if (i) {
            if (nn(o, s, t[u], t[u + 1], e, n, r)) return !0;
          } else a += ln(o, s, t[u], t[u + 1], n, r) || 0;

          o = t[u++], s = t[u++];
          break;

        case ig.C:
          if (i) {
            if (rn(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, n, r)) return !0;
          } else a += cn(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], n, r) || 0;

          o = t[u++], s = t[u++];
          break;

        case ig.Q:
          if (i) {
            if (an(o, s, t[u++], t[u++], t[u], t[u + 1], e, n, r)) return !0;
          } else a += dn(o, s, t[u++], t[u++], t[u], t[u + 1], n, r) || 0;

          o = t[u++], s = t[u++];
          break;

        case ig.A:
          var d = t[u++],
              f = t[u++],
              p = t[u++],
              g = t[u++],
              v = t[u++],
              m = t[u++],
              y = (t[u++], 1 - t[u++]),
              _ = Math.cos(v) * p + d,
              x = Math.sin(v) * g + f;

          u > 1 ? a += ln(o, s, _, x, n, r) : (l = _, h = x);
          var w = (n - d) * g / p + d;

          if (i) {
            if (sn(d, f, g, v, v + m, y, e, w, r)) return !0;
          } else a += fn(d, f, g, v, v + m, y, w, r);

          o = Math.cos(v + m) * p + d, s = Math.sin(v + m) * g + f;
          break;

        case ig.R:
          l = o = t[u++], h = s = t[u++];

          var b = t[u++],
              M = t[u++],
              _ = l + b,
              x = h + M;

          if (i) {
            if (nn(l, h, _, h, e, n, r) || nn(_, h, _, x, e, n, r) || nn(_, x, l, x, e, n, r) || nn(l, x, l, h, e, n, r)) return !0;
          } else a += ln(_, h, _, x, n, r), a += ln(l, x, l, h, n, r);

          break;

        case ig.Z:
          if (i) {
            if (nn(o, s, l, h, e, n, r)) return !0;
          } else a += ln(o, s, l, h, n, r);

          o = l, s = h;
      }
    }

    return i || hn(s, h) || (a += ln(o, s, l, h, n, r) || 0), 0 !== a;
  }

  function gn(t, e, i) {
    return pn(t, 0, !1, e, i);
  }

  function vn(t, e, i, n) {
    return pn(t, e, !0, i, n);
  }

  function mn(t) {
    qe.call(this, t), this.path = null;
  }

  function yn(t, e, i, n, r, a, o, s, l, h, u) {
    var c = l * (_g / 180),
        d = yg(c) * (t - i) / 2 + mg(c) * (e - n) / 2,
        f = -1 * mg(c) * (t - i) / 2 + yg(c) * (e - n) / 2,
        p = d * d / (o * o) + f * f / (s * s);
    p > 1 && (o *= vg(p), s *= vg(p));

    var g = (r === a ? -1 : 1) * vg((o * o * s * s - o * o * f * f - s * s * d * d) / (o * o * f * f + s * s * d * d)) || 0,
        v = g * o * f / s,
        m = g * -s * d / o,
        y = (t + i) / 2 + yg(c) * v - mg(c) * m,
        _ = (e + n) / 2 + mg(c) * v + yg(c) * m,
        x = bg([1, 0], [(d - v) / o, (f - m) / s]),
        w = [(d - v) / o, (f - m) / s],
        b = [(-1 * d - v) / o, (-1 * f - m) / s],
        M = bg(w, b);

    wg(w, b) <= -1 && (M = _g), wg(w, b) >= 1 && (M = 0), 0 === a && M > 0 && (M -= 2 * _g), 1 === a && 0 > M && (M += 2 * _g), u.addData(h, y, _, o, s, x, M, c, a);
  }

  function _n(t) {
    if (!t) return [];
    var e,
        i = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");

    for (e = 0; e < gg.length; e++) {
      i = i.replace(new RegExp(gg[e], "g"), "|" + gg[e]);
    }

    var n,
        r = i.split("|"),
        a = 0,
        o = 0,
        s = new Jp(),
        l = Jp.CMD;

    for (e = 1; e < r.length; e++) {
      var h,
          u = r[e],
          c = u.charAt(0),
          d = 0,
          f = u.slice(1).replace(/e,-/g, "e-").split(",");
      f.length > 0 && "" === f[0] && f.shift();

      for (var p = 0; p < f.length; p++) {
        f[p] = parseFloat(f[p]);
      }

      for (; d < f.length && !isNaN(f[d]) && !isNaN(f[0]);) {
        var g,
            v,
            m,
            y,
            _,
            x,
            w,
            b = a,
            M = o;

        switch (c) {
          case "l":
            a += f[d++], o += f[d++], h = l.L, s.addData(h, a, o);
            break;

          case "L":
            a = f[d++], o = f[d++], h = l.L, s.addData(h, a, o);
            break;

          case "m":
            a += f[d++], o += f[d++], h = l.M, s.addData(h, a, o), c = "l";
            break;

          case "M":
            a = f[d++], o = f[d++], h = l.M, s.addData(h, a, o), c = "L";
            break;

          case "h":
            a += f[d++], h = l.L, s.addData(h, a, o);
            break;

          case "H":
            a = f[d++], h = l.L, s.addData(h, a, o);
            break;

          case "v":
            o += f[d++], h = l.L, s.addData(h, a, o);
            break;

          case "V":
            o = f[d++], h = l.L, s.addData(h, a, o);
            break;

          case "C":
            h = l.C, s.addData(h, f[d++], f[d++], f[d++], f[d++], f[d++], f[d++]), a = f[d - 2], o = f[d - 1];
            break;

          case "c":
            h = l.C, s.addData(h, f[d++] + a, f[d++] + o, f[d++] + a, f[d++] + o, f[d++] + a, f[d++] + o), a += f[d - 2], o += f[d - 1];
            break;

          case "S":
            g = a, v = o;
            var S = s.len(),
                I = s.data;
            n === l.C && (g += a - I[S - 4], v += o - I[S - 3]), h = l.C, b = f[d++], M = f[d++], a = f[d++], o = f[d++], s.addData(h, g, v, b, M, a, o);
            break;

          case "s":
            g = a, v = o;
            var S = s.len(),
                I = s.data;
            n === l.C && (g += a - I[S - 4], v += o - I[S - 3]), h = l.C, b = a + f[d++], M = o + f[d++], a += f[d++], o += f[d++], s.addData(h, g, v, b, M, a, o);
            break;

          case "Q":
            b = f[d++], M = f[d++], a = f[d++], o = f[d++], h = l.Q, s.addData(h, b, M, a, o);
            break;

          case "q":
            b = f[d++] + a, M = f[d++] + o, a += f[d++], o += f[d++], h = l.Q, s.addData(h, b, M, a, o);
            break;

          case "T":
            g = a, v = o;
            var S = s.len(),
                I = s.data;
            n === l.Q && (g += a - I[S - 4], v += o - I[S - 3]), a = f[d++], o = f[d++], h = l.Q, s.addData(h, g, v, a, o);
            break;

          case "t":
            g = a, v = o;
            var S = s.len(),
                I = s.data;
            n === l.Q && (g += a - I[S - 4], v += o - I[S - 3]), a += f[d++], o += f[d++], h = l.Q, s.addData(h, g, v, a, o);
            break;

          case "A":
            m = f[d++], y = f[d++], _ = f[d++], x = f[d++], w = f[d++], b = a, M = o, a = f[d++], o = f[d++], h = l.A, yn(b, M, a, o, x, w, m, y, _, h, s);
            break;

          case "a":
            m = f[d++], y = f[d++], _ = f[d++], x = f[d++], w = f[d++], b = a, M = o, a += f[d++], o += f[d++], h = l.A, yn(b, M, a, o, x, w, m, y, _, h, s);
        }
      }

      ("z" === c || "Z" === c) && (h = l.Z, s.addData(h)), n = h;
    }

    return s.toStatic(), s;
  }

  function xn(t, e) {
    var i = _n(t);

    return e = e || {}, e.buildPath = function (t) {
      if (t.setData) {
        t.setData(i.data);
        var e = t.getContext();
        e && t.rebuildPath(e);
      } else {
        var e = t;
        i.rebuildPath(e);
      }
    }, e.applyTransform = function (t) {
      pg(i, t), this.dirty(!0);
    }, e;
  }

  function wn(t, e) {
    return new mn(xn(t, e));
  }

  function bn(t, e) {
    return mn.extend(xn(t, e));
  }

  function Mn(t, e) {
    for (var i = [], n = t.length, r = 0; n > r; r++) {
      var a = t[r];
      a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), i.push(a.path);
    }

    var o = new mn(e);
    return o.createPathProxy(), o.buildPath = function (t) {
      t.appendPath(i);
      var e = t.getContext();
      e && t.rebuildPath(e);
    }, o;
  }

  function Sn(t, e, i, n, r, a, o) {
    var s = .5 * (i - t),
        l = .5 * (n - e);
    return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e;
  }

  function In(t, e, i) {
    var n = e.points,
        r = e.smooth;

    if (n && n.length >= 2) {
      if (r && "spline" !== r) {
        var a = Ag(n, r, i, e.smoothConstraint);
        t.moveTo(n[0][0], n[0][1]);

        for (var o = n.length, s = 0; (i ? o : o - 1) > s; s++) {
          var l = a[2 * s],
              h = a[2 * s + 1],
              u = n[(s + 1) % o];
          t.bezierCurveTo(l[0], l[1], h[0], h[1], u[0], u[1]);
        }
      } else {
        "spline" === r && (n = kg(n, i)), t.moveTo(n[0][0], n[0][1]);

        for (var s = 1, c = n.length; c > s; s++) {
          t.lineTo(n[s][0], n[s][1]);
        }
      }

      i && t.closePath();
    }
  }

  function Tn(t, e, i) {
    var n = t.cpx2,
        r = t.cpy2;
    return null === n || null === r ? [(i ? Hi : Fi)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? Hi : Fi)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(i ? qi : Ui)(t.x1, t.cpx1, t.x2, e), (i ? qi : Ui)(t.y1, t.cpy1, t.y2, e)];
  }

  function Dn(t) {
    qe.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0;
  }

  function Cn(t) {
    return mn.extend(t);
  }

  function kn(t, e) {
    return bn(t, e);
  }

  function An(t, e, i, n) {
    var r = wn(t, e),
        a = r.getBoundingRect();
    return i && ("center" === n && (i = Pn(i, a)), On(r, i)), r;
  }

  function Ln(t, e, i) {
    var n = new Ze({
      style: {
        image: t,
        x: e.x,
        y: e.y,
        width: e.width,
        height: e.height
      },
      onload: function onload(t) {
        if ("center" === i) {
          var r = {
            width: t.width,
            height: t.height
          };
          n.setStyle(Pn(e, r));
        }
      }
    });
    return n;
  }

  function Pn(t, e) {
    var i,
        n = e.width / e.height,
        r = t.height * n;
    r <= t.width ? i = t.height : (r = t.width, i = r / n);
    var a = t.x + t.width / 2,
        o = t.y + t.height / 2;
    return {
      x: a - r / 2,
      y: o - i / 2,
      width: r,
      height: i
    };
  }

  function On(t, e) {
    if (t.applyTransform) {
      var i = t.getBoundingRect(),
          n = i.calculateTransform(e);
      t.applyTransform(n);
    }
  }

  function Nn(t) {
    var e = t.shape,
        i = t.style.lineWidth;
    return Gg(2 * e.x1) === Gg(2 * e.x2) && (e.x1 = e.x2 = En(e.x1, i, !0)), Gg(2 * e.y1) === Gg(2 * e.y2) && (e.y1 = e.y2 = En(e.y1, i, !0)), t;
  }

  function Rn(t) {
    var e = t.shape,
        i = t.style.lineWidth,
        n = e.x,
        r = e.y,
        a = e.width,
        o = e.height;
    return e.x = En(e.x, i, !0), e.y = En(e.y, i, !0), e.width = Math.max(En(n + a, i, !1) - e.x, 0 === a ? 0 : 1), e.height = Math.max(En(r + o, i, !1) - e.y, 0 === o ? 0 : 1), t;
  }

  function En(t, e, i) {
    var n = Gg(2 * t);
    return (n + Gg(e)) % 2 === 0 ? n / 2 : (n + (i ? 1 : -1)) / 2;
  }

  function zn(t) {
    return null != t && "none" != t;
  }

  function Bn(t) {
    return "string" == typeof t ? Ct(t, -.1) : t;
  }

  function Vn(t) {
    if (t.__hoverStlDirty) {
      var e = t.style.stroke,
          i = t.style.fill,
          n = t.__hoverStl;
      n.fill = n.fill || (zn(i) ? Bn(i) : null), n.stroke = n.stroke || (zn(e) ? Bn(e) : null);
      var r = {};

      for (var a in n) {
        null != n[a] && (r[a] = t.style[a]);
      }

      t.__normalStl = r, t.__hoverStlDirty = !1;
    }
  }

  function Fn(t) {
    if (!t.__isHover) {
      if (Vn(t), t.useHoverLayer) t.__zr && t.__zr.addHover(t, t.__hoverStl);else {
        var e = t.style,
            i = e.insideRollbackOpt;
        i && rr(e), e.extendFrom(t.__hoverStl), i && (nr(e, e.insideOriginalTextPosition, i), null == e.textFill && (e.textFill = i.autoColor)), t.dirty(!1), t.z2 += 1;
      }
      t.__isHover = !0;
    }
  }

  function Hn(t) {
    if (t.__isHover) {
      var e = t.__normalStl;
      t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e), t.z2 -= 1), t.__isHover = !1;
    }
  }

  function Wn(t) {
    "group" === t.type ? t.traverse(function (t) {
      "group" !== t.type && Fn(t);
    }) : Fn(t);
  }

  function Gn(t) {
    "group" === t.type ? t.traverse(function (t) {
      "group" !== t.type && Hn(t);
    }) : Hn(t);
  }

  function Xn(t, e) {
    t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && Vn(t);
  }

  function Yn(t) {
    this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && Wn(this);
  }

  function Un(t) {
    this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && Gn(this);
  }

  function qn() {
    this.__isEmphasis = !0, Wn(this);
  }

  function Zn() {
    this.__isEmphasis = !1, Gn(this);
  }

  function jn(t, e, i) {
    t.__hoverSilentOnTouch = i && i.hoverSilentOnTouch, "group" === t.type ? t.traverse(function (t) {
      "group" !== t.type && Xn(t, e);
    }) : Xn(t, e), t.on("mouseover", Yn).on("mouseout", Un), t.on("emphasis", qn).on("normal", Zn);
  }

  function Kn(t, e, i, n, r, a, o) {
    r = r || Ug;
    var s,
        l = r.labelFetcher,
        h = r.labelDataIndex,
        u = r.labelDimIndex,
        c = i.getShallow("show"),
        d = n.getShallow("show");
    (c || d) && (l && (s = l.getFormattedLabel(h, "normal", null, u)), null == s && (s = x(r.defaultText) ? r.defaultText(h, r) : r.defaultText));
    var f = c ? s : null,
        p = d ? C(l ? l.getFormattedLabel(h, "emphasis", null, u) : null, s) : null;
    (null != f || null != p) && ($n(t, i, a, r), $n(e, n, o, r, !0)), t.text = f, e.text = p;
  }

  function $n(t, e, i, n, r) {
    return Jn(t, e, n, r), i && o(t, i), t.host && t.host.dirty && t.host.dirty(!1), t;
  }

  function Qn(t, e, i) {
    var n,
        r = {
      isRectText: !0
    };
    i === !1 ? n = !0 : r.autoColor = i, Jn(t, e, r, n), t.host && t.host.dirty && t.host.dirty(!1);
  }

  function Jn(t, e, i, n) {
    if (i = i || Ug, i.isRectText) {
      var r = e.getShallow("position") || (n ? null : "inside");
      "outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");
      var a = e.getShallow("rotate");
      null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = C(e.getShallow("distance"), n ? null : 5);
    }

    var o,
        s = e.ecModel,
        l = s && s.option.textStyle,
        h = tr(e);

    if (h) {
      o = {};

      for (var u in h) {
        if (h.hasOwnProperty(u)) {
          var c = e.getModel(["rich", u]);
          er(o[u] = {}, c, l, i, n);
        }
      }
    }

    return t.rich = o, er(t, e, l, i, n, !0), i.forceRich && !i.textStyle && (i.textStyle = {}), t;
  }

  function tr(t) {
    for (var e; t && t !== t.ecModel;) {
      var i = (t.option || Ug).rich;

      if (i) {
        e = e || {};

        for (var n in i) {
          i.hasOwnProperty(n) && (e[n] = 1);
        }
      }

      t = t.parentModel;
    }

    return e;
  }

  function er(t, e, i, n, r, a) {
    if (i = !r && i || Ug, t.textFill = ir(e.getShallow("color"), n) || i.color, t.textStroke = ir(e.getShallow("textBorderColor"), n) || i.textBorderColor, t.textStrokeWidth = C(e.getShallow("textBorderWidth"), i.textBorderWidth), !r) {
      if (a) {
        var o = t.textPosition;
        t.insideRollback = nr(t, o, n), t.insideOriginalTextPosition = o, t.insideRollbackOpt = n;
      }

      null == t.textFill && (t.textFill = n.autoColor);
    }

    t.fontStyle = e.getShallow("fontStyle") || i.fontStyle, t.fontWeight = e.getShallow("fontWeight") || i.fontWeight, t.fontSize = e.getShallow("fontSize") || i.fontSize, t.fontFamily = e.getShallow("fontFamily") || i.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && n.disableBox || (t.textBackgroundColor = ir(e.getShallow("backgroundColor"), n), t.textPadding = e.getShallow("padding"), t.textBorderColor = ir(e.getShallow("borderColor"), n), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || i.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || i.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || i.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || i.textShadowOffsetY;
  }

  function ir(t, e) {
    return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null;
  }

  function nr(t, e, i) {
    var n,
        r = i.useInsideStyle;
    return null == t.textFill && r !== !1 && (r === !0 || i.isRectText && e && "string" == typeof e && e.indexOf("inside") >= 0) && (n = {
      textFill: null,
      textStroke: t.textStroke,
      textStrokeWidth: t.textStrokeWidth
    }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = i.autoColor, null == t.textStrokeWidth && (t.textStrokeWidth = 2))), n;
  }

  function rr(t) {
    var e = t.insideRollback;
    e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth);
  }

  function ar(t, e) {
    var i = e || e.getModel("textStyle");
    return O([t.fontStyle || i && i.getShallow("fontStyle") || "", t.fontWeight || i && i.getShallow("fontWeight") || "", (t.fontSize || i && i.getShallow("fontSize") || 12) + "px", t.fontFamily || i && i.getShallow("fontFamily") || "sans-serif"].join(" "));
  }

  function or(t, e, i, n, r, a) {
    "function" == typeof r && (a = r, r = null);
    var o = n && n.isAnimationEnabled();

    if (o) {
      var s = t ? "Update" : "",
          l = n.getShallow("animationDuration" + s),
          h = n.getShallow("animationEasing" + s),
          u = n.getShallow("animationDelay" + s);
      "function" == typeof u && (u = u(r, n.getAnimationDelayParams ? n.getAnimationDelayParams(e, r) : null)), "function" == typeof l && (l = l(r)), l > 0 ? e.animateTo(i, l, u || 0, h, a, !!a) : (e.stopAnimation(), e.attr(i), a && a());
    } else e.stopAnimation(), e.attr(i), a && a();
  }

  function sr(t, e, i, n, r) {
    or(!0, t, e, i, n, r);
  }

  function lr(t, e, i, n, r) {
    or(!1, t, e, i, n, r);
  }

  function hr(t, e) {
    for (var i = ot([]); t && t !== e;) {
      lt(i, t.getLocalTransform(), i), t = t.parent;
    }

    return i;
  }

  function ur(t, e, i) {
    return e && !d(e) && (e = Gd.getLocalTransform(e)), i && (e = dt([], e)), $([], t, e);
  }

  function cr(t, e, i) {
    var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
        r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
        a = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -r : "bottom" === t ? r : 0];
    return a = ur(a, e, i), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
  }

  function dr(t, e, i) {
    function n(t) {
      var e = {};
      return t.traverse(function (t) {
        !t.isGroup && t.anid && (e[t.anid] = t);
      }), e;
    }

    function r(t) {
      var e = {
        position: H(t.position),
        rotation: t.rotation
      };
      return t.shape && (e.shape = o({}, t.shape)), e;
    }

    if (t && e) {
      var a = n(t);
      e.traverse(function (t) {
        if (!t.isGroup && t.anid) {
          var e = a[t.anid];

          if (e) {
            var n = r(t);
            t.attr(r(e)), sr(t, n, i, t.dataIndex);
          }
        }
      });
    }
  }

  function fr(t, e) {
    return p(t, function (t) {
      var i = t[0];
      i = Xg(i, e.x), i = Yg(i, e.x + e.width);
      var n = t[1];
      return n = Xg(n, e.y), n = Yg(n, e.y + e.height), [i, n];
    });
  }

  function pr(t, e) {
    var i = Xg(t.x, e.x),
        n = Yg(t.x + t.width, e.x + e.width),
        r = Xg(t.y, e.y),
        a = Yg(t.y + t.height, e.y + e.height);
    return n >= i && a >= r ? {
      x: i,
      y: r,
      width: n - i,
      height: a - r
    } : void 0;
  }

  function gr(t, e, i) {
    e = o({
      rectHover: !0
    }, e);
    var n = e.style = {
      strokeNoScale: !0
    };
    return i = i || {
      x: -1,
      y: -1,
      width: 2,
      height: 2
    }, t ? 0 === t.indexOf("image://") ? (n.image = t.slice(8), s(n, i), new Ze(e)) : An(t.replace("path://", ""), e, i, "center") : void 0;
  }

  function vr(t, e, i) {
    this.parentModel = e, this.ecModel = i, this.option = t;
  }

  function mr(t, e, i) {
    for (var n = 0; n < e.length && (!e[n] || (t = t && "object" == _typeof(t) ? t[e[n]] : null, null != t)); n++) {
      ;
    }

    return null == t && i && (t = i.get(e)), t;
  }

  function yr(t, e) {
    var i = tv(t).getParent;
    return i ? i.call(t, e) : t.parentModel;
  }

  function _r(t) {
    return [t || "", ev++, Math.random().toFixed(5)].join("_");
  }

  function xr(t) {
    var e = {};
    return t.registerSubTypeDefaulter = function (t, i) {
      t = Li(t), e[t.main] = i;
    }, t.determineSubType = function (i, n) {
      var r = n.type;

      if (!r) {
        var a = Li(i).main;
        t.hasSubTypes(i) && e[a] && (r = e[a](n));
      }

      return r;
    }, t;
  }

  function wr(t, e) {
    function i(t) {
      var i = {},
          a = [];
      return f(t, function (o) {
        var s = n(i, o),
            l = s.originalDeps = e(o),
            u = r(l, t);
        s.entryCount = u.length, 0 === s.entryCount && a.push(o), f(u, function (t) {
          h(s.predecessor, t) < 0 && s.predecessor.push(t);
          var e = n(i, t);
          h(e.successor, t) < 0 && e.successor.push(o);
        });
      }), {
        graph: i,
        noEntryList: a
      };
    }

    function n(t, e) {
      return t[e] || (t[e] = {
        predecessor: [],
        successor: []
      }), t[e];
    }

    function r(t, e) {
      var i = [];
      return f(t, function (t) {
        h(e, t) >= 0 && i.push(t);
      }), i;
    }

    t.topologicalTravel = function (t, e, n, r) {
      function a(t) {
        l[t].entryCount--, 0 === l[t].entryCount && h.push(t);
      }

      function o(t) {
        u[t] = !0, a(t);
      }

      if (t.length) {
        var s = i(e),
            l = s.graph,
            h = s.noEntryList,
            u = {};

        for (f(t, function (t) {
          u[t] = !0;
        }); h.length;) {
          var c = h.pop(),
              d = l[c],
              p = !!u[c];
          p && (n.call(r, c, d.originalDeps.slice()), delete u[c]), f(d.successor, p ? o : a);
        }

        f(u, function () {
          throw new Error("Circle dependency may exists");
        });
      }
    };
  }

  function br(t) {
    return t.replace(/^\s+/, "").replace(/\s+$/, "");
  }

  function Mr(t, e, i, n) {
    var r = e[1] - e[0],
        a = i[1] - i[0];
    if (0 === r) return 0 === a ? i[0] : (i[0] + i[1]) / 2;
    if (n) {
      if (r > 0) {
        if (t <= e[0]) return i[0];
        if (t >= e[1]) return i[1];
      } else {
        if (t >= e[0]) return i[0];
        if (t <= e[1]) return i[1];
      }
    } else {
      if (t === e[0]) return i[0];
      if (t === e[1]) return i[1];
    }
    return (t - e[0]) / r * a + i[0];
  }

  function Sr(t, e) {
    switch (t) {
      case "center":
      case "middle":
        t = "50%";
        break;

      case "left":
      case "top":
        t = "0%";
        break;

      case "right":
      case "bottom":
        t = "100%";
    }

    return "string" == typeof t ? br(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t;
  }

  function Ir(t, e, i) {
    return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), i ? t : +t;
  }

  function Tr(t) {
    return t.sort(function (t, e) {
      return t - e;
    }), t;
  }

  function Dr(t) {
    var e = t.toString(),
        i = e.indexOf("e");

    if (i > 0) {
      var n = +e.slice(i + 1);
      return 0 > n ? -n : 0;
    }

    var r = e.indexOf(".");
    return 0 > r ? 0 : e.length - 1 - r;
  }

  function Cr(t, e) {
    var i = Math.log,
        n = Math.LN10,
        r = Math.floor(i(t[1] - t[0]) / n),
        a = Math.round(i(Math.abs(e[1] - e[0])) / n),
        o = Math.min(Math.max(-r + a, 0), 20);
    return isFinite(o) ? o : 20;
  }

  function kr(t, e, i) {
    if (!t[e]) return 0;
    var n = g(t, function (t, e) {
      return t + (isNaN(e) ? 0 : e);
    }, 0);
    if (0 === n) return 0;

    for (var r = Math.pow(10, i), a = p(t, function (t) {
      return (isNaN(t) ? 0 : t) / n * r * 100;
    }), o = 100 * r, s = p(a, function (t) {
      return Math.floor(t);
    }), l = g(s, function (t, e) {
      return t + e;
    }, 0), h = p(a, function (t, e) {
      return t - s[e];
    }); o > l;) {
      for (var u = Number.NEGATIVE_INFINITY, c = null, d = 0, f = h.length; f > d; ++d) {
        h[d] > u && (u = h[d], c = d);
      }

      ++s[c], h[c] = 0, ++l;
    }

    return s[e] / r;
  }

  function Ar(t) {
    var e = 2 * Math.PI;
    return (t % e + e) % e;
  }

  function Lr(t) {
    return t > -iv && iv > t;
  }

  function Pr(t) {
    if (t instanceof Date) return t;

    if ("string" == typeof t) {
      var e = nv.exec(t);
      if (!e) return new Date(NaN);

      if (e[8]) {
        var i = +e[4] || 0;
        return "Z" !== e[8].toUpperCase() && (i -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, i, +(e[5] || 0), +e[6] || 0, +e[7] || 0));
      }

      return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0);
    }

    return new Date(null == t ? NaN : Math.round(t));
  }

  function Or(t) {
    return Math.pow(10, Nr(t));
  }

  function Nr(t) {
    return Math.floor(Math.log(t) / Math.LN10);
  }

  function Rr(t, e) {
    var i,
        n = Nr(t),
        r = Math.pow(10, n),
        a = t / r;
    return i = e ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10, t = i * r, n >= -20 ? +t.toFixed(0 > n ? -n : 0) : t;
  }

  function Er(t) {
    function e(t, i, n) {
      return t.interval[n] < i.interval[n] || t.interval[n] === i.interval[n] && (t.close[n] - i.close[n] === (n ? -1 : 1) || !n && e(t, i, 1));
    }

    t.sort(function (t, i) {
      return e(t, i, 0) ? -1 : 1;
    });

    for (var i = -1 / 0, n = 1, r = 0; r < t.length;) {
      for (var a = t[r].interval, o = t[r].close, s = 0; 2 > s; s++) {
        a[s] <= i && (a[s] = i, o[s] = s ? 1 : 1 - n), i = a[s], n = o[s];
      }

      a[0] === a[1] && o[0] * o[1] !== 1 ? t.splice(r, 1) : r++;
    }

    return t;
  }

  function zr(t) {
    return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""));
  }

  function Br(t, e) {
    return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
      return e.toUpperCase();
    }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t;
  }

  function Vr(t) {
    return null == t ? "" : (t + "").replace(av, function (t, e) {
      return ov[e];
    });
  }

  function Fr(t, e, i) {
    _(e) || (e = [e]);
    var n = e.length;
    if (!n) return "";

    for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
      var o = sv[a];
      t = t.replace(lv(o), lv(o, 0));
    }

    for (var s = 0; n > s; s++) {
      for (var l = 0; l < r.length; l++) {
        var h = e[s][r[l]];
        t = t.replace(lv(sv[l], s), i ? Vr(h) : h);
      }
    }

    return t;
  }

  function Hr(t, e, i) {
    return f(e, function (e, n) {
      t = t.replace("{" + n + "}", i ? Vr(e) : e);
    }), t;
  }

  function Wr(t, e) {
    t = w(t) ? {
      color: t,
      extraCssText: e
    } : t || {};
    var i = t.color,
        n = t.type,
        e = t.extraCssText;
    return i ? "subItem" === n ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + Vr(i) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + Vr(i) + ";" + (e || "") + '"></span>' : "";
  }

  function Gr(t, e) {
    return t += "", "0000".substr(0, e - t.length) + t;
  }

  function Xr(t, e, i) {
    ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
    var n = Pr(e),
        r = i ? "UTC" : "",
        a = n["get" + r + "FullYear"](),
        o = n["get" + r + "Month"]() + 1,
        s = n["get" + r + "Date"](),
        l = n["get" + r + "Hours"](),
        h = n["get" + r + "Minutes"](),
        u = n["get" + r + "Seconds"](),
        c = n["get" + r + "Milliseconds"]();
    return t = t.replace("MM", Gr(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", Gr(s, 2)).replace("d", s).replace("hh", Gr(l, 2)).replace("h", l).replace("mm", Gr(h, 2)).replace("m", h).replace("ss", Gr(u, 2)).replace("s", u).replace("SSS", Gr(c, 3));
  }

  function Yr(t, e, i, n, r) {
    var a = 0,
        o = 0;
    null == n && (n = 1 / 0), null == r && (r = 1 / 0);
    var s = 0;
    e.eachChild(function (l, h) {
      var u,
          c,
          d = l.position,
          f = l.getBoundingRect(),
          p = e.childAt(h + 1),
          g = p && p.getBoundingRect();

      if ("horizontal" === t) {
        var v = f.width + (g ? -g.x + f.x : 0);
        u = a + v, u > n || l.newline ? (a = 0, u = v, o += s + i, s = f.height) : s = Math.max(s, f.height);
      } else {
        var m = f.height + (g ? -g.y + f.y : 0);
        c = o + m, c > r || l.newline ? (a += s + i, o = 0, c = m, s = f.width) : s = Math.max(s, f.width);
      }

      l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = u + i : o = c + i);
    });
  }

  function Ur(t, e, i) {
    i = rv(i || 0);
    var n = e.width,
        r = e.height,
        a = Sr(t.left, n),
        o = Sr(t.top, r),
        s = Sr(t.right, n),
        l = Sr(t.bottom, r),
        h = Sr(t.width, n),
        u = Sr(t.height, r),
        c = i[2] + i[0],
        d = i[1] + i[3],
        f = t.aspect;

    switch (isNaN(h) && (h = n - s - d - a), isNaN(u) && (u = r - l - c - o), null != f && (isNaN(h) && isNaN(u) && (f > n / r ? h = .8 * n : u = .8 * r), isNaN(h) && (h = f * u), isNaN(u) && (u = h / f)), isNaN(a) && (a = n - s - h - d), isNaN(o) && (o = r - l - u - c), t.left || t.right) {
      case "center":
        a = n / 2 - h / 2 - i[3];
        break;

      case "right":
        a = n - h - d;
    }

    switch (t.top || t.bottom) {
      case "middle":
      case "center":
        o = r / 2 - u / 2 - i[0];
        break;

      case "bottom":
        o = r - u - c;
    }

    a = a || 0, o = o || 0, isNaN(h) && (h = n - d - a - (s || 0)), isNaN(u) && (u = r - c - o - (l || 0));
    var p = new qt(a + i[3], o + i[0], h, u);
    return p.margin = i, p;
  }

  function qr(t, e, i, n, r) {
    var a = !r || !r.hv || r.hv[0],
        o = !r || !r.hv || r.hv[1],
        l = r && r.boundingMode || "all";

    if (a || o) {
      var h;
      if ("raw" === l) h = "group" === t.type ? new qt(0, 0, +e.width || 0, +e.height || 0) : t.getBoundingRect();else if (h = t.getBoundingRect(), t.needLocalTransform()) {
        var u = t.getLocalTransform();
        h = h.clone(), h.applyTransform(u);
      }
      e = Ur(s({
        width: h.width,
        height: h.height
      }, e), i, n);
      var c = t.position,
          d = a ? e.x - h.x : 0,
          f = o ? e.y - h.y : 0;
      t.attr("position", "raw" === l ? [d, f] : [c[0] + d, c[1] + f]);
    }
  }

  function Zr(t, e) {
    return null != t[dv[e][0]] || null != t[dv[e][1]] && null != t[dv[e][2]];
  }

  function jr(t, e, i) {
    function n(i, n) {
      var o = {},
          l = 0,
          h = {},
          u = 0,
          c = 2;
      if (uv(i, function (e) {
        h[e] = t[e];
      }), uv(i, function (t) {
        r(e, t) && (o[t] = h[t] = e[t]), a(o, t) && l++, a(h, t) && u++;
      }), s[n]) return a(e, i[1]) ? h[i[2]] = null : a(e, i[2]) && (h[i[1]] = null), h;

      if (u !== c && l) {
        if (l >= c) return o;

        for (var d = 0; d < i.length; d++) {
          var f = i[d];

          if (!r(o, f) && r(t, f)) {
            o[f] = t[f];
            break;
          }
        }

        return o;
      }

      return h;
    }

    function r(t, e) {
      return t.hasOwnProperty(e);
    }

    function a(t, e) {
      return null != t[e] && "auto" !== t[e];
    }

    function o(t, e, i) {
      uv(t, function (t) {
        e[t] = i[t];
      });
    }

    !b(i) && (i = {});
    var s = i.ignoreSize;
    !_(s) && (s = [s, s]);
    var l = n(dv[0], 0),
        h = n(dv[1], 1);
    o(dv[0], t, l), o(dv[1], t, h);
  }

  function Kr(t) {
    return $r({}, t);
  }

  function $r(t, e) {
    return e && t && uv(cv, function (i) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }), t;
  }

  function Qr(t) {
    var e = [];
    return f(vv.getClassesByMainType(t), function (t) {
      e = e.concat(t.prototype.dependencies || []);
    }), e = p(e, function (t) {
      return Li(t).main;
    }), "dataset" !== t && h(e, "dataset") <= 0 && e.unshift("dataset"), e;
  }

  function Jr(t, e) {
    for (var i = t.length, n = 0; i > n; n++) {
      if (t[n].length > e) return t[n];
    }

    return t[i - 1];
  }

  function ta(t) {
    var e = t.get("coordinateSystem"),
        i = {
      coordSysName: e,
      coordSysDims: [],
      axisMap: z(),
      categoryAxisMap: z()
    },
        n = wv[e];
    return n ? (n(t, i, i.axisMap, i.categoryAxisMap), i) : void 0;
  }

  function ea(t) {
    return "category" === t.get("type");
  }

  function ia(t) {
    this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === Iv ? {} : []), this.sourceFormat = t.sourceFormat || Tv, this.seriesLayoutBy = t.seriesLayoutBy || Cv, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && z(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount;
  }

  function na(t) {
    var e = t.option.source,
        i = Tv;
    if (S(e)) i = Dv;else if (_(e)) for (var n = 0, r = e.length; r > n; n++) {
      var a = e[n];

      if (null != a) {
        if (_(a)) {
          i = Mv;
          break;
        }

        if (b(a)) {
          i = Sv;
          break;
        }
      }
    } else if (b(e)) {
      for (var o in e) {
        if (e.hasOwnProperty(o) && d(e[o])) {
          i = Iv;
          break;
        }
      }
    } else if (null != e) throw new Error("Invalid data");
    Av(t).sourceFormat = i;
  }

  function ra(t) {
    return Av(t).source;
  }

  function aa(t) {
    Av(t).datasetMap = z();
  }

  function oa(t) {
    var e = t.option,
        i = e.data,
        n = S(i) ? Dv : bv,
        r = !1,
        a = e.seriesLayoutBy,
        o = e.sourceHeader,
        s = e.dimensions,
        l = da(t);

    if (l) {
      var h = l.option;
      i = h.source, n = Av(l).sourceFormat, r = !0, a = a || h.seriesLayoutBy, null == o && (o = h.sourceHeader), s = s || h.dimensions;
    }

    var u = sa(i, n, a, o, s),
        c = e.encode;
    !c && l && (c = ca(t, l, i, n, a, u)), Av(t).source = new ia({
      data: i,
      fromDataset: r,
      seriesLayoutBy: a,
      sourceFormat: n,
      dimensionsDefine: u.dimensionsDefine,
      startIndex: u.startIndex,
      dimensionsDetectCount: u.dimensionsDetectCount,
      encodeDefine: c
    });
  }

  function sa(t, e, i, n, r) {
    if (!t) return {
      dimensionsDefine: la(r)
    };
    var a, o, s;
    if (e === Mv) "auto" === n || null == n ? ha(function (t) {
      null != t && "-" !== t && (w(t) ? null == o && (o = 1) : o = 0);
    }, i, t, 10) : o = n ? 1 : 0, r || 1 !== o || (r = [], ha(function (t, e) {
      r[e] = null != t ? t : "";
    }, i, t)), a = r ? r.length : i === kv ? t.length : t[0] ? t[0].length : null;else if (e === Sv) r || (r = ua(t), s = !0);else if (e === Iv) r || (r = [], s = !0, f(t, function (t, e) {
      r.push(e);
    }));else if (e === bv) {
      var l = yi(t[0]);
      a = _(l) && l.length || 1;
    }
    var h;
    return s && f(r, function (t, e) {
      "name" === (b(t) ? t.name : t) && (h = e);
    }), {
      startIndex: o,
      dimensionsDefine: la(r),
      dimensionsDetectCount: a,
      potentialNameDimIndex: h
    };
  }

  function la(t) {
    if (t) {
      var e = z();
      return p(t, function (t) {
        if (t = o({}, b(t) ? t : {
          name: t
        }), null == t.name) return t;
        t.name += "", null == t.displayName && (t.displayName = t.name);
        var i = e.get(t.name);
        return i ? t.name += "-" + i.count++ : e.set(t.name, {
          count: 1
        }), t;
      });
    }
  }

  function ha(t, e, i, n) {
    if (null == n && (n = 1 / 0), e === kv) for (var r = 0; r < i.length && n > r; r++) {
      t(i[r] ? i[r][0] : null, r);
    } else for (var a = i[0] || [], r = 0; r < a.length && n > r; r++) {
      t(a[r], r);
    }
  }

  function ua(t) {
    for (var e, i = 0; i < t.length && !(e = t[i++]);) {
      ;
    }

    if (e) {
      var n = [];
      return f(e, function (t, e) {
        n.push(e);
      }), n;
    }
  }

  function ca(t, e, i, n, r, a) {
    var o = ta(t),
        s = {},
        l = [],
        h = [],
        u = t.subType,
        c = z(["pie", "map", "funnel"]),
        d = z(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);

    if (o && null != d.get(u)) {
      var p = t.ecModel,
          g = Av(p).datasetMap,
          v = e.uid + "_" + r,
          m = g.get(v) || g.set(v, {
        categoryWayDim: 1,
        valueWayDim: 0
      });
      f(o.coordSysDims, function (t) {
        if (null == o.firstCategoryDimIndex) {
          var e = m.valueWayDim++;
          s[t] = e, h.push(e);
        } else if (o.categoryAxisMap.get(t)) s[t] = 0, l.push(0);else {
          var e = m.categoryWayDim++;
          s[t] = e, h.push(e);
        }
      });
    } else if (null != c.get(u)) {
      for (var y, _ = 0; 5 > _ && null == y; _++) {
        pa(i, n, r, a.dimensionsDefine, a.startIndex, _) || (y = _);
      }

      if (null != y) {
        s.value = y;
        var x = a.potentialNameDimIndex || Math.max(y - 1, 0);
        h.push(x), l.push(x);
      }
    }

    return l.length && (s.itemName = l), h.length && (s.seriesName = h), s;
  }

  function da(t) {
    var e = t.option,
        i = e.data;
    return i ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0);
  }

  function fa(t, e) {
    return pa(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
  }

  function pa(t, e, i, n, r, a) {
    function o(t) {
      return (null == t || !isFinite(t) || "" === t) && (!(!w(t) || "-" === t) || void 0);
    }

    var s,
        l = 5;
    if (S(t)) return !1;
    var h;
    if (n && (h = n[a], h = b(h) ? h.name : h), e === Mv) {
      if (i === kv) {
        for (var u = t[a], c = 0; c < (u || []).length && l > c; c++) {
          if (null != (s = o(u[r + c]))) return s;
        }
      } else for (var c = 0; c < t.length && l > c; c++) {
        var d = t[r + c];
        if (d && null != (s = o(d[a]))) return s;
      }
    } else if (e === Sv) {
      if (!h) return;

      for (var c = 0; c < t.length && l > c; c++) {
        var f = t[c];
        if (f && null != (s = o(f[h]))) return s;
      }
    } else if (e === Iv) {
      if (!h) return;
      var u = t[h];
      if (!u || S(u)) return !1;

      for (var c = 0; c < u.length && l > c; c++) {
        if (null != (s = o(u[c]))) return s;
      }
    } else if (e === bv) for (var c = 0; c < t.length && l > c; c++) {
      var f = t[c],
          p = yi(f);
      if (!_(p)) return !1;
      if (null != (s = o(p[a]))) return s;
    }
    return !1;
  }

  function ga(t, e) {
    if (e) {
      var i = e.seiresIndex,
          n = e.seriesId,
          r = e.seriesName;
      return null != i && t.componentIndex !== i || null != n && t.id !== n || null != r && t.name !== r;
    }
  }

  function va(t, e) {
    var i = t.color && !t.colorLayer;
    f(e, function (e, a) {
      "colorLayer" === a && i || vv.hasClass(a) || ("object" == _typeof(e) ? t[a] = t[a] ? r(t[a], e, !1) : n(e) : null == t[a] && (t[a] = e));
    });
  }

  function ma(t) {
    t = t, this.option = {}, this.option[Lv] = 1, this._componentsMap = z({
      series: []
    }), this._seriesIndices, this._seriesIndicesMap, va(t, this._theme.option), r(t, yv, !1), this.mergeOption(t);
  }

  function ya(t, e) {
    _(e) || (e = e ? [e] : []);
    var i = {};
    return f(e, function (e) {
      i[e] = (t.get(e) || []).slice();
    }), i;
  }

  function _a(t, e, i) {
    var n = e.type ? e.type : i ? i.subType : vv.determineSubType(t, e);
    return n;
  }

  function xa(t, e) {
    t._seriesIndicesMap = z(t._seriesIndices = p(e, function (t) {
      return t.componentIndex;
    }) || []);
  }

  function wa(t, e) {
    return e.hasOwnProperty("subType") ? v(t, function (t) {
      return t.subType === e.subType;
    }) : t;
  }

  function ba(t) {
    f(Ov, function (e) {
      this[e] = m(t[e], t);
    }, this);
  }

  function Ma() {
    this._coordinateSystems = [];
  }

  function Sa(t) {
    this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption;
  }

  function Ia(t, e, i) {
    var n,
        r,
        a = [],
        o = [],
        s = t.timeline;

    if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
      r = r || {};
      var l = t.media;
      Rv(l, function (t) {
        t && t.option && (t.query ? o.push(t) : n || (n = t));
      });
    }

    return r || (r = t), r.timeline || (r.timeline = s), Rv([r].concat(a).concat(p(o, function (t) {
      return t.option;
    })), function (t) {
      Rv(e, function (e) {
        e(t, i);
      });
    }), {
      baseOption: r,
      timelineOptions: a,
      mediaDefault: n,
      mediaList: o
    };
  }

  function Ta(t, e, i) {
    var n = {
      width: e,
      height: i,
      aspectratio: e / i
    },
        r = !0;
    return f(t, function (t, e) {
      var i = e.match(Vv);

      if (i && i[1] && i[2]) {
        var a = i[1],
            o = i[2].toLowerCase();
        Da(n[o], t, a) || (r = !1);
      }
    }), r;
  }

  function Da(t, e, i) {
    return "min" === i ? t >= e : "max" === i ? e >= t : t === e;
  }

  function Ca(t, e) {
    return t.join(",") === e.join(",");
  }

  function ka(t, e) {
    e = e || {}, Rv(e, function (e, i) {
      if (null != e) {
        var n = t[i];

        if (vv.hasClass(i)) {
          e = vi(e), n = vi(n);
          var r = xi(n, e);
          t[i] = zv(r, function (t) {
            return t.option && t.exist ? Bv(t.exist, t.option, !0) : t.exist || t.option;
          });
        } else t[i] = Bv(n, e, !0);
      }
    });
  }

  function Aa(t) {
    var e = t && t.itemStyle;
    if (e) for (var i = 0, n = Wv.length; n > i; i++) {
      var a = Wv[i],
          o = e.normal,
          s = e.emphasis;
      o && o[a] && (t[a] = t[a] || {}, t[a].normal ? r(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? r(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null);
    }
  }

  function La(t, e, i) {
    if (t && t[e] && (t[e].normal || t[e].emphasis)) {
      var n = t[e].normal,
          r = t[e].emphasis;
      n && (i ? (t[e].normal = t[e].emphasis = null, s(t[e], n)) : t[e] = n), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r);
    }
  }

  function Pa(t) {
    La(t, "itemStyle"), La(t, "lineStyle"), La(t, "areaStyle"), La(t, "label"), La(t, "labelLine"), La(t, "upperLabel"), La(t, "edgeLabel");
  }

  function Oa(t, e) {
    var i = Hv(t) && t[e],
        n = Hv(i) && i.textStyle;
    if (n) for (var r = 0, a = dp.length; a > r; r++) {
      var e = dp[r];
      n.hasOwnProperty(e) && (i[e] = n[e]);
    }
  }

  function Na(t) {
    t && (Pa(t), Oa(t, "label"), t.emphasis && Oa(t.emphasis, "label"));
  }

  function Ra(t) {
    if (Hv(t)) {
      Aa(t), Pa(t), Oa(t, "label"), Oa(t, "upperLabel"), Oa(t, "edgeLabel"), t.emphasis && (Oa(t.emphasis, "label"), Oa(t.emphasis, "upperLabel"), Oa(t.emphasis, "edgeLabel"));
      var e = t.markPoint;
      e && (Aa(e), Na(e));
      var i = t.markLine;
      i && (Aa(i), Na(i));
      var n = t.markArea;
      n && Na(n);
      var r = t.data;

      if ("graph" === t.type) {
        r = r || t.nodes;
        var a = t.links || t.edges;
        if (a && !S(a)) for (var o = 0; o < a.length; o++) {
          Na(a[o]);
        }
        f(t.categories, function (t) {
          Pa(t);
        });
      }

      if (r && !S(r)) for (var o = 0; o < r.length; o++) {
        Na(r[o]);
      }
      var e = t.markPoint;
      if (e && e.data) for (var s = e.data, o = 0; o < s.length; o++) {
        Na(s[o]);
      }
      var i = t.markLine;
      if (i && i.data) for (var l = i.data, o = 0; o < l.length; o++) {
        _(l[o]) ? (Na(l[o][0]), Na(l[o][1])) : Na(l[o]);
      }
      "gauge" === t.type ? (Oa(t, "axisLabel"), Oa(t, "title"), Oa(t, "detail")) : "treemap" === t.type ? (La(t.breadcrumb, "itemStyle"), f(t.levels, function (t) {
        Pa(t);
      })) : "tree" === t.type && Pa(t.leaves);
    }
  }

  function Ea(t) {
    return _(t) ? t : t ? [t] : [];
  }

  function za(t) {
    return (_(t) ? t[0] : t) || {};
  }

  function Ba(t, e) {
    e = e.split(",");

    for (var i = t, n = 0; n < e.length && (i = i && i[e[n]], null != i); n++) {
      ;
    }

    return i;
  }

  function Va(t, e, i, n) {
    e = e.split(",");

    for (var r, a = t, o = 0; o < e.length - 1; o++) {
      r = e[o], null == a[r] && (a[r] = {}), a = a[r];
    }

    (n || null == a[e[o]]) && (a[e[o]] = i);
  }

  function Fa(t) {
    f(Xv, function (e) {
      e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
    });
  }

  function Ha(t) {
    f(t, function (e, i) {
      var n = [],
          r = [NaN, NaN],
          a = [e.stackResultDimension, e.stackedOverDimension],
          o = e.data,
          s = e.isStackedByIndex,
          l = o.map(a, function (a, l, h) {
        var u = o.get(e.stackedDimension, h);
        if (isNaN(u)) return r;
        var c, d;
        s ? d = o.getRawIndex(h) : c = o.get(e.stackedByDimension, h);

        for (var f = NaN, p = i - 1; p >= 0; p--) {
          var g = t[p];

          if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
            var v = g.data.getByRawIndex(g.stackResultDimension, d);

            if (u >= 0 && v > 0 || 0 >= u && 0 > v) {
              u += v, f = v;
              break;
            }
          }
        }

        return n[0] = u, n[1] = f, n;
      });
      o.hostModel.setData(l), e.data = l;
    });
  }

  function Wa(t, e) {
    ia.isInstance(t) || (t = ia.seriesDataToSource(t)), this._source = t;
    var i = this._data = t.data,
        n = t.sourceFormat;
    n === Dv && (this._offset = 0, this._dimSize = e, this._data = i);
    var r = jv[n === Mv ? n + "_" + t.seriesLayoutBy : n];
    o(this, r);
  }

  function Ga() {
    return this._data.length;
  }

  function Xa(t) {
    return this._data[t];
  }

  function Ya(t) {
    for (var e = 0; e < t.length; e++) {
      this._data.push(t[e]);
    }
  }

  function Ua(t, e, i) {
    return null != i ? t[i] : t;
  }

  function qa(t, e, i, n) {
    return Za(t[n], this._dimensionInfos[e]);
  }

  function Za(t, e) {
    var i = e && e.type;

    if ("ordinal" === i) {
      var n = e && e.ordinalMeta;
      return n ? n.parseAndCollect(t) : t;
    }

    return "time" === i && "number" != typeof t && null != t && "-" !== t && (t = +Pr(t)), null == t || "" === t ? NaN : +t;
  }

  function ja(t, e, i) {
    if (t) {
      var n = t.getRawDataItem(e);

      if (null != n) {
        var r,
            a,
            o = t.getProvider().getSource().sourceFormat,
            s = t.getDimensionInfo(i);
        return s && (r = s.name, a = s.index), Kv[o](n, e, a, r);
      }
    }
  }

  function Ka(t, e, i) {
    if (t) {
      var n = t.getProvider().getSource().sourceFormat;

      if (n === bv || n === Sv) {
        var r = t.getRawDataItem(e);
        return n !== bv || b(r) || (r = null), r ? r[i] : void 0;
      }
    }
  }

  function $a(t) {
    return new Qa(t);
  }

  function Qa(t) {
    t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context;
  }

  function Ja(t, e, i, n, r, a) {
    em.reset(i, n, r, a), t._callingProgress = e, t._callingProgress({
      start: i,
      end: n,
      count: n - i,
      next: em.next
    }, t.context);
  }

  function to(t, e) {
    t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;
    var i, n;
    !e && t._reset && (i = t._reset(t.context), i && i.progress && (n = i.forceFirstProgress, i = i.progress), _(i) && !i.length && (i = null)), t._progress = i, t._modBy = t._modDataCount = null;
    var r = t._downstream;
    return r && r.dirty(), n;
  }

  function eo(t) {
    var e = t.name;
    bi(t) || (t.name = io(t) || e);
  }

  function io(t) {
    var e = t.getRawData(),
        i = e.mapDimension("seriesName", !0),
        n = [];
    return f(i, function (t) {
      var i = e.getDimensionInfo(t);
      i.displayName && n.push(i.displayName);
    }), n.join(" ");
  }

  function no(t) {
    return t.model.getRawData().count();
  }

  function ro(t) {
    var e = t.model;
    return e.setData(e.getRawData().cloneShallow()), ao;
  }

  function ao(t, e) {
    t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
  }

  function oo(t, e) {
    f(t.CHANGABLE_METHODS, function (i) {
      t.wrapMethod(i, y(so, e));
    });
  }

  function so(t) {
    var e = lo(t);
    e && e.setOutputEnd(this.count());
  }

  function lo(t) {
    var e = (t.ecModel || {}).scheduler,
        i = e && e.getPipeline(t.uid);

    if (i) {
      var n = i.currentTask;

      if (n) {
        var r = n.agentStubMap;
        r && (n = r.get(t.uid));
      }

      return n;
    }
  }

  function ho() {
    this.group = new pf(), this.uid = _r("viewChart"), this.renderTask = $a({
      plan: fo,
      reset: po
    }), this.renderTask.context = {
      view: this
    };
  }

  function uo(t, e) {
    if (t && (t.trigger(e), "group" === t.type)) for (var i = 0; i < t.childCount(); i++) {
      uo(t.childAt(i), e);
    }
  }

  function co(t, e, i) {
    var n = Ii(t, e);
    null != n ? f(vi(n), function (e) {
      uo(t.getItemGraphicEl(e), i);
    }) : t.eachItemGraphicEl(function (t) {
      uo(t, i);
    });
  }

  function fo(t) {
    return lm(t.model);
  }

  function po(t) {
    var e = t.model,
        i = t.ecModel,
        n = t.api,
        r = t.payload,
        a = e.pipelineContext.progressiveRender,
        o = t.view,
        s = r && sm(r).updateMethod,
        l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
    return "render" !== l && o[l](e, i, n, r), um[l];
  }

  function go(t, e, i) {
    function n() {
      u = new Date().getTime(), c = null, t.apply(o, s || []);
    }

    var r,
        a,
        o,
        s,
        l,
        h = 0,
        u = 0,
        c = null;
    e = e || 0;

    var d = function d() {
      r = new Date().getTime(), o = this, s = arguments;
      var t = l || e,
          d = l || i;
      l = null, a = r - (d ? h : u) - t, clearTimeout(c), d ? c = setTimeout(n, t) : a >= 0 ? n() : c = setTimeout(n, -a), h = r;
    };

    return d.clear = function () {
      c && (clearTimeout(c), c = null);
    }, d.debounceNextCall = function (t) {
      l = t;
    }, d;
  }

  function vo(t, e, i, n) {
    var r = t[e];

    if (r) {
      var a = r[cm] || r,
          o = r[fm],
          s = r[dm];

      if (s !== i || o !== n) {
        if (null == i || !n) return t[e] = a;
        r = t[e] = go(a, i, "debounce" === n), r[cm] = a, r[fm] = n, r[dm] = i;
      }

      return r;
    }
  }

  function mo(t, e, i, n) {
    this.ecInstance = t, this.api = e, this.unfinished;
    var i = this._dataProcessorHandlers = i.slice(),
        n = this._visualHandlers = n.slice();
    this._allHandlers = i.concat(n), this._stageTaskMap = z();
  }

  function yo(t, e, i, n, r) {
    function a(t, e) {
      return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
    }

    r = r || {};
    var o;
    f(e, function (e) {
      if (!r.visualType || r.visualType === e.visualType) {
        var s = t._stageTaskMap.get(e.uid),
            l = s.seriesTaskMap,
            h = s.overallTask;

        if (h) {
          var u,
              c = h.agentStubMap;
          c.each(function (t) {
            a(r, t) && (t.dirty(), u = !0);
          }), u && h.dirty(), xm(h, n);
          var d = t.getPerformArgs(h, r.block);
          c.each(function (t) {
            t.perform(d);
          }), o |= h.perform(d);
        } else l && l.each(function (s) {
          a(r, s) && s.dirty();
          var l = t.getPerformArgs(s, r.block);
          l.skip = !e.performRawSeries && i.isSeriesFiltered(s.context.model), xm(s, n), o |= s.perform(l);
        });
      }
    }), t.unfinished |= o;
  }

  function _o(t, e, i, n, r) {
    function a(i) {
      var a = i.uid,
          s = o.get(a) || o.set(a, $a({
        plan: Io,
        reset: To,
        count: Co
      }));
      s.context = {
        model: i,
        ecModel: n,
        api: r,
        useClearVisual: e.isVisual && !e.isLayout,
        plan: e.plan,
        reset: e.reset,
        scheduler: t
      }, ko(t, i, s);
    }

    var o = i.seriesTaskMap || (i.seriesTaskMap = z()),
        s = e.seriesType,
        l = e.getTargetSeries;
    e.createOnAllSeries ? n.eachRawSeries(a) : s ? n.eachRawSeriesByType(s, a) : l && l(n, r).each(a);
    var h = t._pipelineMap;
    o.each(function (t, e) {
      h.get(e) || (t.dispose(), o.removeKey(e));
    });
  }

  function xo(t, e, i, n, r) {
    function a(e) {
      var i = e.uid,
          n = s.get(i);
      n || (n = s.set(i, $a({
        reset: bo,
        onDirty: So
      })), o.dirty()), n.context = {
        model: e,
        overallProgress: u,
        modifyOutputEnd: c
      }, n.agent = o, n.__block = u, ko(t, e, n);
    }

    var o = i.overallTask = i.overallTask || $a({
      reset: wo
    });
    o.context = {
      ecModel: n,
      api: r,
      overallReset: e.overallReset,
      scheduler: t
    };
    var s = o.agentStubMap = o.agentStubMap || z(),
        l = e.seriesType,
        h = e.getTargetSeries,
        u = !0,
        c = e.modifyOutputEnd;
    l ? n.eachRawSeriesByType(l, a) : h ? h(n, r).each(a) : (u = !1, f(n.getSeries(), a));
    var d = t._pipelineMap;
    s.each(function (t, e) {
      d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e));
    });
  }

  function wo(t) {
    t.overallReset(t.ecModel, t.api, t.payload);
  }

  function bo(t) {
    return t.overallProgress && Mo;
  }

  function Mo() {
    this.agent.dirty(), this.getDownstream().dirty();
  }

  function So() {
    this.agent && this.agent.dirty();
  }

  function Io(t) {
    return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload);
  }

  function To(t) {
    t.useClearVisual && t.data.clearAllVisual();
    var e = t.resetDefines = vi(t.reset(t.model, t.ecModel, t.api, t.payload));
    return e.length > 1 ? p(e, function (t, e) {
      return Do(e);
    }) : wm;
  }

  function Do(t) {
    return function (e, i) {
      var n = i.data,
          r = i.resetDefines[t];
      if (r && r.dataEach) for (var a = e.start; a < e.end; a++) {
        r.dataEach(n, a);
      } else r && r.progress && r.progress(e, n);
    };
  }

  function Co(t) {
    return t.data.count();
  }

  function ko(t, e, i) {
    var n = e.uid,
        r = t._pipelineMap.get(n);

    !r.head && (r.head = i), r.tail && r.tail.pipe(i), r.tail = i, i.__idxInPipeline = r.count++, i.__pipeline = r;
  }

  function Ao(t) {
    bm = null;

    try {
      t(Mm, Sm);
    } catch (e) {}

    return bm;
  }

  function Lo(t, e) {
    for (var i in e.prototype) {
      t[i] = B;
    }
  }

  function Po(t) {
    return function (e, i, n) {
      e = e && e.toLowerCase(), Ed.prototype[t].call(this, e, i, n);
    };
  }

  function Oo() {
    Ed.call(this);
  }

  function No(t, e, i) {
    function r(t, e) {
      return t.__prio - e.__prio;
    }

    i = i || {}, "string" == typeof e && (e = ay[e]), this.id, this.group, this._dom = t;
    var a = "canvas",
        o = this._zr = gi(t, {
      renderer: i.renderer || a,
      devicePixelRatio: i.devicePixelRatio,
      width: i.width,
      height: i.height
    });
    this._throttledZrFlush = go(m(o.flush, o), 17);
    var e = n(e);
    e && Uv(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new Ma();
    var s = this._api = Qo(this);
    ee(ry, r), ee(ey, r), this._scheduler = new mo(this, s, ey, ry), Ed.call(this), this._messageCenter = new Oo(), this._initEvents(), this.resize = m(this.resize, this), this._pendingActions = [], o.animation.on("frame", this._onframe, this), Wo(o, this), N(this);
  }

  function Ro(t, e, i) {
    var n,
        r = this._model,
        a = this._coordSysMgr.getCoordinateSystems();

    e = Di(r, e);

    for (var o = 0; o < a.length; o++) {
      var s = a[o];
      if (s[t] && null != (n = s[t](r, e, i))) return n;
    }
  }

  function Eo(t) {
    var e = t._model,
        i = t._scheduler;
    i.restorePipelines(e), i.prepareStageTasks(), Go(t, "component", e, i), Go(t, "chart", e, i), i.plan();
  }

  function zo(t, e, i, n, r) {
    function a(n) {
      n && n.__alive && n[e] && n[e](n.__model, o, t._api, i);
    }

    var o = t._model;
    if (!n) return void Pm(t._componentsViews.concat(t._chartsViews), a);
    var s = {};
    s[n + "Id"] = i[n + "Id"], s[n + "Index"] = i[n + "Index"], s[n + "Name"] = i[n + "Name"];
    var l = {
      mainType: n,
      query: s
    };
    r && (l.subType = r);
    var h = i.excludeSeriesId;
    null != h && (h = z(vi(h))), o && o.eachComponent(l, function (e) {
      h && null != h.get(e.id) || a(t["series" === n ? "_chartsMap" : "_componentsMap"][e.__viewId]);
    }, t);
  }

  function Bo(t, e) {
    var i = t._chartsMap,
        n = t._scheduler;
    e.eachSeries(function (t) {
      n.updateStreamModes(t, i[t.__viewId]);
    });
  }

  function Vo(t, e) {
    var i = t.type,
        n = t.escapeConnect,
        r = Jm[i],
        a = r.actionInfo,
        l = (a.update || "update").split(":"),
        h = l.pop();
    l = null != l[0] && Rm(l[0]), this[qm] = !0;
    var u = [t],
        c = !1;
    t.batch && (c = !0, u = p(t.batch, function (e) {
      return e = s(o({}, e), t), e.batch = null, e;
    }));
    var d,
        f = [],
        g = "highlight" === i || "downplay" === i;
    Pm(u, function (t) {
      d = r.action(t, this._model, this._api), d = d || o({}, t), d.type = a.event || d.type, f.push(d), g ? zo(this, h, t, "series") : l && zo(this, h, t, l.main, l.sub);
    }, this), "none" === h || g || l || (this[Zm] ? (Eo(this), $m.update.call(this, t), this[Zm] = !1) : $m[h].call(this, t)), d = c ? {
      type: a.event || i,
      escapeConnect: n,
      batch: f
    } : f[0], this[qm] = !1, !e && this._messageCenter.trigger(d.type, d);
  }

  function Fo(t) {
    for (var e = this._pendingActions; e.length;) {
      var i = e.shift();
      Vo.call(this, i, t);
    }
  }

  function Ho(t) {
    !t && this.trigger("updated");
  }

  function Wo(t, e) {
    t.on("rendered", function () {
      e.trigger("rendered"), !t.animation.isFinished() || e[Zm] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished");
    });
  }

  function Go(t, e, i, n) {
    function r(t) {
      var e = "_ec_" + t.id + "_" + t.type,
          r = s[e];

      if (!r) {
        var u = Rm(t.type),
            c = a ? rm.getClass(u.main, u.sub) : ho.getClass(u.sub);
        r = new c(), r.init(i, h), s[e] = r, o.push(r), l.add(r.group);
      }

      t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = {
        mainType: t.mainType,
        index: t.componentIndex
      }, !a && n.prepareView(r, t, i, h);
    }

    for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, h = t._api, u = 0; u < o.length; u++) {
      o[u].__alive = !1;
    }

    a ? i.eachComponent(function (t, e) {
      "series" !== t && r(e);
    }) : i.eachSeries(r);

    for (var u = 0; u < o.length;) {
      var c = o[u];
      c.__alive ? u++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(i, h), o.splice(u, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null);
    }
  }

  function Xo(t) {
    t.clearColorPalette(), t.eachSeries(function (t) {
      t.clearColorPalette();
    });
  }

  function Yo(t, e, i, n) {
    Uo(t, e, i, n), Pm(t._chartsViews, function (t) {
      t.__alive = !1;
    }), qo(t, e, i, n), Pm(t._chartsViews, function (t) {
      t.__alive || t.remove(e, i);
    });
  }

  function Uo(t, e, i, n, r) {
    Pm(r || t._componentsViews, function (t) {
      var r = t.__model;
      t.render(r, e, i, n), $o(r, t);
    });
  }

  function qo(t, e, i, n, r) {
    var a,
        o = t._scheduler;
    e.eachSeries(function (e) {
      var i = t._chartsMap[e.__viewId];
      i.__alive = !0;
      var s = i.renderTask;
      o.updatePayload(s, n), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), i.group.silent = !!e.get("silent"), $o(e, i), Ko(e, i);
    }), o.unfinished |= a, jo(t._zr, e), vm(t._zr.dom, e);
  }

  function Zo(t, e) {
    Pm(ny, function (i) {
      i(t, e);
    });
  }

  function jo(t, e) {
    var i = t.storage,
        n = 0;
    i.traverse(function (t) {
      t.isGroup || n++;
    }), n > e.get("hoverLayerThreshold") && !yd.node && i.traverse(function (t) {
      t.isGroup || (t.useHoverLayer = !0);
    });
  }

  function Ko(t, e) {
    var i = t.get("blendMode") || null;
    e.group.traverse(function (t) {
      t.isGroup || t.style.blend !== i && t.setStyle("blend", i), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {
        t.setStyle("blend", i);
      });
    });
  }

  function $o(t, e) {
    var i = t.get("z"),
        n = t.get("zlevel");
    e.group.traverse(function (t) {
      "group" !== t.type && (null != i && (t.z = i), null != n && (t.zlevel = n));
    });
  }

  function Qo(t) {
    var e = t._coordSysMgr;
    return o(new ba(t), {
      getCoordinateSystems: m(e.getCoordinateSystems, e),
      getComponentByElement: function getComponentByElement(e) {
        for (; e;) {
          var i = e.__ecComponentInfo;
          if (null != i) return t._model.getComponent(i.mainType, i.index);
          e = e.parent;
        }
      }
    });
  }

  function Jo(t) {
    function e(t, e) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n[a] = e;
      }
    }

    var i = 0,
        n = 1,
        r = 2,
        a = "__connectUpdateStatus";
    Pm(ty, function (o, s) {
      t._messageCenter.on(s, function (o) {
        if (ly[t.group] && t[a] !== i) {
          if (o && o.escapeConnect) return;
          var s = t.makeActionFromEvent(o),
              l = [];
          Pm(sy, function (e) {
            e !== t && e.group === t.group && l.push(e);
          }), e(l, i), Pm(l, function (t) {
            t[a] !== n && t.dispatchAction(s);
          }), e(l, r);
        }
      });
    });
  }

  function ts(t, e, i) {
    var n = rs(t);
    if (n) return n;
    var r = new No(t, e, i);
    return r.id = "ec_" + hy++, sy[r.id] = r, ki(t, cy, r.id), Jo(r), r;
  }

  function es(t) {
    if (_(t)) {
      var e = t;
      t = null, Pm(e, function (e) {
        null != e.group && (t = e.group);
      }), t = t || "g_" + uy++, Pm(e, function (e) {
        e.group = t;
      });
    }

    return ly[t] = !0, t;
  }

  function is(t) {
    ly[t] = !1;
  }

  function ns(t) {
    "string" == typeof t ? t = sy[t] : t instanceof No || (t = rs(t)), t instanceof No && !t.isDisposed() && t.dispose();
  }

  function rs(t) {
    return sy[Ai(t, cy)];
  }

  function as(t) {
    return sy[t];
  }

  function os(t, e) {
    ay[t] = e;
  }

  function ss(t) {
    iy.push(t);
  }

  function ls(t, e) {
    gs(ey, t, e, Vm);
  }

  function hs(t) {
    ny.push(t);
  }

  function us(t, e, i) {
    "function" == typeof e && (i = e, e = "");
    var n = Nm(t) ? t.type : [t, t = {
      event: e
    }][0];
    t.event = (t.event || n).toLowerCase(), e = t.event, Lm(jm.test(n) && jm.test(e)), Jm[n] || (Jm[n] = {
      action: i,
      actionInfo: t
    }), ty[e] = n;
  }

  function cs(t, e) {
    Ma.register(t, e);
  }

  function ds(t) {
    var e = Ma.get(t);
    return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0;
  }

  function fs(t, e) {
    gs(ry, t, e, Hm, "layout");
  }

  function ps(t, e) {
    gs(ry, t, e, Gm, "visual");
  }

  function gs(t, e, i, n, r) {
    (Om(e) || Nm(e)) && (i = e, e = n);
    var a = mo.wrapStageHandler(i, r);
    return a.__prio = e, a.__raw = i, t.push(a), a;
  }

  function vs(t, e) {
    oy[t] = e;
  }

  function ms(t) {
    return vv.extend(t);
  }

  function ys(t) {
    return rm.extend(t);
  }

  function _s(t) {
    return nm.extend(t);
  }

  function xs(t) {
    return ho.extend(t);
  }

  function ws(t) {
    i("createCanvas", t);
  }

  function bs(t, e, i) {
    e.geoJson && !e.features && (i = e.specialAreas, e = e.geoJson), "string" == typeof e && (e = "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")()), dy[t] = {
      geoJson: e,
      specialAreas: i
    };
  }

  function Ms(t) {
    return dy[t];
  }

  function Ss(t, e, i) {
    i = i || {};
    var n,
        r,
        a,
        o,
        s = i.byIndex,
        l = i.stackedCoordDimension,
        h = !(!t || !t.get("stack"));

    if (f(e, function (t, i) {
      w(t) && (e[i] = t = {
        name: t
      }), h && !t.isExtraCoord && (s || n || !t.ordinalMeta || (n = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t));
    }), !r || s || n || (s = !0), r) {
      a = "__\0ecstackresult", o = "__\0ecstackedover", n && (n.createInvertedIndices = !0);
      var u = r.coordDim,
          c = r.type,
          d = 0;
      f(e, function (t) {
        t.coordDim === u && d++;
      }), e.push({
        name: a,
        coordDim: u,
        coordDimIndex: d,
        type: c,
        isExtraCoord: !0,
        isCalculationCoord: !0
      }), d++, e.push({
        name: o,
        coordDim: o,
        coordDimIndex: d,
        type: c,
        isExtraCoord: !0,
        isCalculationCoord: !0
      });
    }

    return {
      stackedDimension: r && r.name,
      stackedByDimension: n && n.name,
      isStackedByIndex: s,
      stackedOverDimension: o,
      stackResultDimension: a
    };
  }

  function Is(t, e) {
    return !!e && e === t.getCalculationInfo("stackedDimension");
  }

  function Ts(t, e) {
    return Is(t, e) ? t.getCalculationInfo("stackResultDimension") : e;
  }

  function Ds(t) {
    return t.get("stack") || gy + t.seriesIndex;
  }

  function Cs(t) {
    return t.dim + t.index;
  }

  function ks(t, e) {
    var i = [];
    return e.eachSeriesByType(t, function (t) {
      Ns(t) && !Rs(t) && i.push(t);
    }), i;
  }

  function As(t) {
    var e = [];
    return f(t, function (t) {
      var i = t.getData(),
          n = t.coordinateSystem,
          r = n.getBaseAxis(),
          a = r.getExtent(),
          o = "category" === r.type ? r.getBandWidth() : Math.abs(a[1] - a[0]) / i.count(),
          s = Sr(t.get("barWidth"), o),
          l = Sr(t.get("barMaxWidth"), o),
          h = t.get("barGap"),
          u = t.get("barCategoryGap");
      e.push({
        bandWidth: o,
        barWidth: s,
        barMaxWidth: l,
        barGap: h,
        barCategoryGap: u,
        axisKey: Cs(r),
        stackId: Ds(t)
      });
    }), Ls(e);
  }

  function Ls(t) {
    var e = {};
    f(t, function (t) {
      var i = t.axisKey,
          n = t.bandWidth,
          r = e[i] || {
        bandWidth: n,
        remainedWidth: n,
        autoWidthCount: 0,
        categoryGap: "20%",
        gap: "30%",
        stacks: {}
      },
          a = r.stacks;
      e[i] = r;
      var o = t.stackId;
      a[o] || r.autoWidthCount++, a[o] = a[o] || {
        width: 0,
        maxWidth: 0
      };
      var s = t.barWidth;
      s && !a[o].width && (a[o].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);
      var l = t.barMaxWidth;
      l && (a[o].maxWidth = l);
      var h = t.barGap;
      null != h && (r.gap = h);
      var u = t.barCategoryGap;
      null != u && (r.categoryGap = u);
    });
    var i = {};
    return f(e, function (t, e) {
      i[e] = {};
      var n = t.stacks,
          r = t.bandWidth,
          a = Sr(t.categoryGap, r),
          o = Sr(t.gap, 1),
          s = t.remainedWidth,
          l = t.autoWidthCount,
          h = (s - a) / (l + (l - 1) * o);
      h = Math.max(h, 0), f(n, function (t) {
        var e = t.maxWidth;
        e && h > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, t.width = e, l--);
      }), h = (s - a) / (l + (l - 1) * o), h = Math.max(h, 0);
      var u,
          c = 0;
      f(n, function (t) {
        t.width || (t.width = h), u = t, c += t.width * (1 + o);
      }), u && (c -= u.width * o);
      var d = -c / 2;
      f(n, function (t, n) {
        i[e][n] = i[e][n] || {
          offset: d,
          width: t.width
        }, d += t.width * (1 + o);
      });
    }), i;
  }

  function Ps(t, e, i) {
    if (t && e) {
      var n = t[Cs(e)];
      return null != n && null != i && (n = n[Ds(i)]), n;
    }
  }

  function Os(t, e) {
    var i = ks(t, e),
        n = As(i),
        r = {};
    f(i, function (t) {
      var e = t.getData(),
          i = t.coordinateSystem,
          a = i.getBaseAxis(),
          o = Ds(t),
          s = n[Cs(a)][o],
          l = s.offset,
          h = s.width,
          u = i.getOtherAxis(a),
          c = t.get("barMinHeight") || 0;
      r[o] = r[o] || [], e.setLayout({
        offset: l,
        size: h
      });

      for (var d = e.mapDimension(u.dim), f = e.mapDimension(a.dim), p = Is(e, d), g = u.isHorizontal(), v = Es(a, u, p), m = 0, y = e.count(); y > m; m++) {
        var _ = e.get(d, m),
            x = e.get(f, m);

        if (!isNaN(_)) {
          var w = _ >= 0 ? "p" : "n",
              b = v;
          p && (r[o][x] || (r[o][x] = {
            p: v,
            n: v
          }), b = r[o][x][w]);
          var M, S, I, T;

          if (g) {
            var D = i.dataToPoint([_, x]);
            M = b, S = D[1] + l, I = D[0] - v, T = h, Math.abs(I) < c && (I = (0 > I ? -1 : 1) * c), p && (r[o][x][w] += I);
          } else {
            var D = i.dataToPoint([x, _]);
            M = D[0] + l, S = b, I = h, T = D[1] - v, Math.abs(T) < c && (T = (0 >= T ? -1 : 1) * c), p && (r[o][x][w] += T);
          }

          e.setItemLayout(m, {
            x: M,
            y: S,
            width: I,
            height: T
          });
        }
      }
    }, this);
  }

  function Ns(t) {
    return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type;
  }

  function Rs(t) {
    return t.pipelineContext && t.pipelineContext.large;
  }

  function Es(t, e, i) {
    return h(t.getAxesOnZeroOf(), e) >= 0 || i ? e.toGlobalCoord(e.dataToCoord(0)) : e.getGlobalExtent()[0];
  }

  function zs(t) {
    this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments);
  }

  function Bs(t) {
    this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map;
  }

  function Vs(t) {
    return t._map || (t._map = z(t.categories));
  }

  function Fs(t) {
    return b(t) && null != t.value ? t.value : t + "";
  }

  function Hs(t, e, i, n) {
    var r = {},
        a = t[1] - t[0],
        o = r.interval = Rr(a / e, !0);
    null != i && i > o && (o = r.interval = i), null != n && o > n && (o = r.interval = n);
    var s = r.intervalPrecision = Ws(o),
        l = r.niceTickExtent = [by(Math.ceil(t[0] / o) * o, s), by(Math.floor(t[1] / o) * o, s)];
    return Xs(l, t), r;
  }

  function Ws(t) {
    return Dr(t) + 2;
  }

  function Gs(t, e, i) {
    t[e] = Math.max(Math.min(t[e], i[1]), i[0]);
  }

  function Xs(t, e) {
    !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), Gs(t, 0, e), Gs(t, 1, e), t[0] > t[1] && (t[0] = t[1]);
  }

  function Ys(t, e, i, n) {
    var r = [];
    if (!t) return r;
    var a = 1e4;
    e[0] < i[0] && r.push(e[0]);

    for (var o = i[0]; o <= i[1] && (r.push(o), o = by(o + t, n), o !== r[r.length - 1]);) {
      if (r.length > a) return [];
    }

    return e[1] > (r.length ? r[r.length - 1] : i[1]) && r.push(e[1]), r;
  }

  function Us(t, e) {
    return By(t, zy(e));
  }

  function qs(t, e) {
    var i,
        n,
        r,
        a = t.type,
        o = e.getMin(),
        s = e.getMax(),
        l = null != o,
        h = null != s,
        u = t.getExtent();
    "ordinal" === a ? i = e.getCategories().length : (n = e.get("boundaryGap"), _(n) || (n = [n || 0, n || 0]), "boolean" == typeof n[0] && (n = [0, 0]), n[0] = Sr(n[0], 1), n[1] = Sr(n[1], 1), r = u[1] - u[0] || Math.abs(u[0])), null == o && (o = "ordinal" === a ? i ? 0 : NaN : u[0] - n[0] * r), null == s && (s = "ordinal" === a ? i ? i - 1 : NaN : u[1] + n[1] * r), "dataMin" === o ? o = u[0] : "function" == typeof o && (o = o({
      min: u[0],
      max: u[1]
    })), "dataMax" === s ? s = u[1] : "function" == typeof s && (s = s({
      min: u[0],
      max: u[1]
    })), (null == o || !isFinite(o)) && (o = NaN), (null == s || !isFinite(s)) && (s = NaN), t.setBlank(T(o) || T(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), 0 > o && 0 > s && !h && (s = 0));
    var c = e.ecModel;

    if (c && "time" === a) {
      var d,
          p = ks("bar", c);

      if (f(p, function (t) {
        d |= t.getBaseAxis() === e.axis;
      }), d) {
        var g = As(p),
            v = Zs(o, s, e, g);
        o = v.min, s = v.max;
      }
    }

    return [o, s];
  }

  function Zs(t, e, i, n) {
    var r = i.axis.getExtent(),
        a = r[1] - r[0],
        o = Ps(n, i.axis);
    if (void 0 === o) return {
      min: t,
      max: e
    };
    var s = 1 / 0;
    f(o, function (t) {
      s = Math.min(t.offset, s);
    });
    var l = -1 / 0;
    f(o, function (t) {
      l = Math.max(t.offset + t.width, l);
    }), s = Math.abs(s), l = Math.abs(l);
    var h = s + l,
        u = e - t,
        c = 1 - (s + l) / a,
        d = u / c - u;
    return e += d * (l / h), t -= d * (s / h), {
      min: t,
      max: e
    };
  }

  function js(t, e) {
    var i = qs(t, e),
        n = null != e.getMin(),
        r = null != e.getMax(),
        a = e.get("splitNumber");
    "log" === t.type && (t.base = e.get("logBase"));
    var o = t.type;
    t.setExtent(i[0], i[1]), t.niceExtent({
      splitNumber: a,
      fixMin: n,
      fixMax: r,
      minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null,
      maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null
    });
    var s = e.get("interval");
    null != s && t.setInterval && t.setInterval(s);
  }

  function Ks(t, e) {
    if (e = e || t.get("type")) switch (e) {
      case "category":
        return new wy(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);

      case "value":
        return new Sy();

      default:
        return (zs.getClass(e) || Sy).create(t);
    }
  }

  function $s(t) {
    var e = t.scale.getExtent(),
        i = e[0],
        n = e[1];
    return !(i > 0 && n > 0 || 0 > i && 0 > n);
  }

  function Qs(t) {
    var e = t.getLabelModel().get("formatter"),
        i = "category" === t.type ? t.scale.getExtent()[0] : null;
    return "string" == typeof e ? e = function (t) {
      return function (e) {
        return t.replace("{value}", null != e ? e : "");
      };
    }(e) : "function" == typeof e ? function (n, r) {
      return null != i && (r = n - i), e(Js(t, n), r);
    } : function (e) {
      return t.scale.getLabel(e);
    };
  }

  function Js(t, e) {
    return "category" === t.type ? t.scale.getLabel(e) : e;
  }

  function tl(t) {
    var e = t.model,
        i = t.scale;

    if (e.get("axisLabel.show") && !i.isBlank()) {
      var n,
          r,
          a = "category" === t.type,
          o = i.getExtent();
      a ? r = i.count() : (n = i.getTicks(), r = n.length);
      var s,
          l = t.getLabelModel(),
          h = Qs(t),
          u = 1;
      r > 40 && (u = Math.ceil(r / 40));

      for (var c = 0; r > c; c += u) {
        var d = n ? n[c] : o[0] + c,
            f = h(d),
            p = l.getTextRect(f),
            g = el(p, l.get("rotate") || 0);
        s ? s.union(g) : s = g;
      }

      return s;
    }
  }

  function el(t, e) {
    var i = e * Math.PI / 180,
        n = t.plain(),
        r = n.width,
        a = n.height,
        o = r * Math.cos(i) + a * Math.sin(i),
        s = r * Math.sin(i) + a * Math.cos(i),
        l = new qt(n.x, n.y, o, s);
    return l;
  }

  function il(t) {
    return this._axes[t];
  }

  function nl(t) {
    Xy.call(this, t);
  }

  function rl(t) {
    return "category" === t.type ? ol(t) : hl(t);
  }

  function al(t, e) {
    return "category" === t.type ? ll(t, e) : {
      ticks: t.scale.getTicks()
    };
  }

  function ol(t) {
    var e = t.getLabelModel(),
        i = sl(t, e);
    return !e.get("show") || t.scale.isBlank() ? {
      labels: [],
      labelCategoryInterval: i.labelCategoryInterval
    } : i;
  }

  function sl(t, e) {
    var i = ul(t, "labels"),
        n = yl(e),
        r = cl(i, n);
    if (r) return r;
    var a, o;
    return x(n) ? a = ml(t, n) : (o = "auto" === n ? fl(t) : n, a = vl(t, o)), dl(i, n, {
      labels: a,
      labelCategoryInterval: o
    });
  }

  function ll(t, e) {
    var i = ul(t, "ticks"),
        n = yl(e),
        r = cl(i, n);
    if (r) return r;
    var a, o;
    if ((!e.get("show") || t.scale.isBlank()) && (a = []), x(n)) a = ml(t, n, !0);else if ("auto" === n) {
      var s = sl(t, t.getLabelModel());
      o = s.labelCategoryInterval, a = p(s.labels, function (t) {
        return t.tickValue;
      });
    } else o = n, a = vl(t, o, !0);
    return dl(i, n, {
      ticks: a,
      tickCategoryInterval: o
    });
  }

  function hl(t) {
    var e = t.scale.getTicks(),
        i = Qs(t);
    return {
      labels: p(e, function (e, n) {
        return {
          formattedLabel: i(e, n),
          rawLabel: t.scale.getLabel(e),
          tickValue: e
        };
      })
    };
  }

  function ul(t, e) {
    return Yy(t)[e] || (Yy(t)[e] = []);
  }

  function cl(t, e) {
    for (var i = 0; i < t.length; i++) {
      if (t[i].key === e) return t[i].value;
    }
  }

  function dl(t, e, i) {
    return t.push({
      key: e,
      value: i
    }), i;
  }

  function fl(t) {
    var e = Yy(t).autoInterval;
    return null != e ? e : Yy(t).autoInterval = t.calculateCategoryInterval();
  }

  function pl(t) {
    var e = gl(t),
        i = Qs(t),
        n = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
        r = t.scale,
        a = r.getExtent(),
        o = r.count();
    if (a[1] - a[0] < 1) return 0;
    var s = 1;
    o > 40 && (s = Math.max(1, Math.floor(o / 40)));

    for (var l = a[0], h = t.dataToCoord(l + 1) - t.dataToCoord(l), u = Math.abs(h * Math.cos(n)), c = Math.abs(h * Math.sin(n)), d = 0, f = 0; l <= a[1]; l += s) {
      var p = 0,
          g = 0,
          v = de(i(l), e.font, "center", "top");
      p = 1.3 * v.width, g = 1.3 * v.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7);
    }

    var m = d / u,
        y = f / c;
    isNaN(m) && (m = 1 / 0), isNaN(y) && (y = 1 / 0);

    var _ = Math.max(0, Math.floor(Math.min(m, y))),
        x = Yy(t.model),
        w = x.lastAutoInterval,
        b = x.lastTickCount;

    return null != w && null != b && Math.abs(w - _) <= 1 && Math.abs(b - o) <= 1 && w > _ ? _ = w : (x.lastTickCount = o, x.lastAutoInterval = _), _;
  }

  function gl(t) {
    var e = t.getLabelModel();
    return {
      axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
      labelRotate: e.get("rotate") || 0,
      font: e.getFont()
    };
  }

  function vl(t, e, i) {
    function n(t) {
      l.push(i ? t : {
        formattedLabel: r(t),
        rawLabel: a.getLabel(t),
        tickValue: t
      });
    }

    var r = Qs(t),
        a = t.scale,
        o = a.getExtent(),
        s = t.getLabelModel(),
        l = [],
        h = Math.max((e || 0) + 1, 1),
        u = o[0],
        c = a.count();
    0 !== u && h > 1 && c / h > 2 && (u = Math.round(Math.ceil(u / h) * h));
    var d = {
      min: s.get("showMinLabel"),
      max: s.get("showMaxLabel")
    };
    d.min && u !== o[0] && n(o[0]);

    for (var f = u; f <= o[1]; f += h) {
      n(f);
    }

    return d.max && f !== o[1] && n(o[1]), l;
  }

  function ml(t, e, i) {
    var n = t.scale,
        r = Qs(t),
        a = [];
    return f(n.getTicks(), function (t) {
      var o = n.getLabel(t);
      e(t, o) && a.push(i ? t : {
        formattedLabel: r(t),
        rawLabel: o,
        tickValue: t
      });
    }), a;
  }

  function yl(t) {
    var e = t.get("interval");
    return null == e ? "auto" : e;
  }

  function _l(t, e) {
    var i = t[1] - t[0],
        n = e,
        r = i / n / 2;
    t[0] += r, t[1] -= r;
  }

  function xl(t, e, i, n, r) {
    function a(t, e) {
      return u ? t > e : e > t;
    }

    var o = e.length;

    if (t.onBand && !n && o) {
      var s,
          l = t.getExtent();
      if (1 === o) e[0].coord = l[0], s = e[1] = {
        coord: l[0]
      };else {
        var h = e[1].coord - e[0].coord;
        f(e, function (t) {
          t.coord -= h / 2;
          var e = e || 0;
          e % 2 > 0 && (t.coord -= h / (2 * (e + 1)));
        }), s = {
          coord: e[o - 1].coord + h
        }, e.push(s);
      }
      var u = l[0] > l[1];
      a(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()), r && a(l[0], e[0].coord) && e.unshift({
        coord: l[0]
      }), a(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()), r && a(s.coord, l[1]) && e.push({
        coord: l[1]
      });
    }
  }

  function wl(t, e) {
    return e.type || (e.data ? "category" : "value");
  }

  function bl(t, e) {
    return t.getCoordSysModel() === e;
  }

  function Ml(t, e, i) {
    this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, i), this.model = t;
  }

  function Sl(t, e, i) {
    i.getAxesOnZeroOf = function () {
      return n ? [n] : [];
    };

    var n,
        r = t[e],
        a = i.model,
        o = a.get("axisLine.onZero"),
        s = a.get("axisLine.onZeroAxisIndex");

    if (o) {
      if (null != s) return void (Il(r[s]) && (n = r[s]));

      for (var l in r) {
        if (r.hasOwnProperty(l) && Il(r[l])) {
          n = r[l];
          break;
        }
      }
    }
  }

  function Il(t) {
    return t && "category" !== t.type && "time" !== t.type && $s(t);
  }

  function Tl(t, e) {
    var i = t.getExtent(),
        n = i[0] + i[1];
    t.toGlobalCoord = "x" === t.dim ? function (t) {
      return t + e;
    } : function (t) {
      return n - t + e;
    }, t.toLocalCoord = "x" === t.dim ? function (t) {
      return t - e;
    } : function (t) {
      return n - t + e;
    };
  }

  function Dl(t) {
    return p(n_, function (e) {
      var i = t.getReferringComponents(e)[0];
      return i;
    });
  }

  function Cl(t) {
    return "cartesian2d" === t.get("coordinateSystem");
  }

  function kl(t) {
    return t;
  }

  function Al(t, e, i, n, r) {
    this._old = t, this._new = e, this._oldKeyGetter = i || kl, this._newKeyGetter = n || kl, this.context = r;
  }

  function Ll(t, e, i, n, r) {
    for (var a = 0; a < t.length; a++) {
      var o = "_ec_" + r[n](t[a], a),
          s = e[o];
      null == s ? (i.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a));
    }
  }

  function Pl(t) {
    var e = {},
        i = e.encode = {},
        n = z(),
        r = [],
        a = [];
    f(t.dimensions, function (e) {
      var o = t.getDimensionInfo(e),
          s = o.coordDim;

      if (s) {
        var l = i[s];
        i.hasOwnProperty(s) || (l = i[s] = []), l[o.coordDimIndex] = e, o.isExtraCoord || (n.set(s, 1), Nl(o.type) && (r[0] = e)), o.defaultTooltip && a.push(e);
      }

      r_.each(function (t, e) {
        var n = i[e];
        i.hasOwnProperty(e) || (n = i[e] = []);
        var r = o.otherDims[e];
        null != r && r !== !1 && (n[r] = o.name);
      });
    });
    var o = [],
        s = {};
    n.each(function (t, e) {
      var n = i[e];
      s[e] = n[0], o = o.concat(n);
    }), e.dataDimsOnCoord = o, e.encodeFirstDimNotExtra = s;
    var l = i.label;
    l && l.length && (r = l.slice());
    var h = i.tooltip;
    return h && h.length ? a = h.slice() : a.length || (a = r.slice()), i.defaultedLabel = r, i.defaultedTooltip = a, e;
  }

  function Ol(t) {
    return "category" === t ? "ordinal" : "time" === t ? "time" : "float";
  }

  function Nl(t) {
    return !("ordinal" === t || "time" === t);
  }

  function Rl(t) {
    return t._rawCount > 65535 ? h_ : u_;
  }

  function El(t) {
    var e = t.constructor;
    return e === Array ? t.slice() : new e(t);
  }

  function zl(t, e) {
    f(c_.concat(e.__wrappedMethods || []), function (i) {
      e.hasOwnProperty(i) && (t[i] = e[i]);
    }), t.__wrappedMethods = e.__wrappedMethods, f(d_, function (i) {
      t[i] = n(e[i]);
    }), t._calculationInfo = o(e._calculationInfo);
  }

  function Bl(t) {
    var e = t._invertedIndicesMap;
    f(e, function (i, n) {
      var r = t._dimensionInfos[n],
          a = r.ordinalMeta;

      if (a) {
        i = e[n] = new h_(a.categories.length);

        for (var o = 0; o < i.length; o++) {
          i[o] = NaN;
        }

        for (var o = 0; o < t._count; o++) {
          i[t.get(n, o)] = o;
        }
      }
    });
  }

  function Vl(t, e, i) {
    var n;

    if (null != e) {
      var r = t._chunkSize,
          a = Math.floor(i / r),
          o = i % r,
          s = t.dimensions[e],
          l = t._storage[s][a];

      if (l) {
        n = l[o];
        var h = t._dimensionInfos[s].ordinalMeta;
        h && h.categories.length && (n = h.categories[n]);
      }
    }

    return n;
  }

  function Fl(t) {
    return t;
  }

  function Hl(t) {
    return t < this._count && t >= 0 ? this._indices[t] : -1;
  }

  function Wl(t, e) {
    var i = t._idList[e];
    return null == i && (i = Vl(t, t._idDimIdx, e)), null == i && (i = s_ + e), i;
  }

  function Gl(t) {
    return _(t) || (t = [t]), t;
  }

  function Xl(t, e) {
    var i = t.dimensions,
        n = new f_(p(i, t.getDimensionInfo, t), t.hostModel);
    zl(n, t);

    for (var r = n._storage = {}, a = t._storage, o = 0; o < i.length; o++) {
      var s = i[o];
      a[s] && (h(e, s) >= 0 ? (r[s] = Yl(a[s]), n._rawExtent[s] = Ul(), n._extent[s] = null) : r[s] = a[s]);
    }

    return n;
  }

  function Yl(t) {
    for (var e = new Array(t.length), i = 0; i < t.length; i++) {
      e[i] = El(t[i]);
    }

    return e;
  }

  function Ul() {
    return [1 / 0, -1 / 0];
  }

  function ql(t, e, i) {
    function r(t, e, i) {
      null != r_.get(e) ? t.otherDims[e] = i : (t.coordDim = e, t.coordDimIndex = i, u.set(e, !0));
    }

    ia.isInstance(e) || (e = ia.seriesDataToSource(e)), i = i || {}, t = (t || []).slice();

    for (var a = (i.dimsDef || []).slice(), l = z(i.encodeDef), h = z(), u = z(), c = [], d = Zl(e, t, a, i.dimCount), p = 0; d > p; p++) {
      var g = a[p] = o({}, b(a[p]) ? a[p] : {
        name: a[p]
      }),
          v = g.name,
          m = c[p] = {
        otherDims: {}
      };
      null != v && null == h.get(v) && (m.name = m.displayName = v, h.set(v, p)), null != g.type && (m.type = g.type), null != g.displayName && (m.displayName = g.displayName);
    }

    l.each(function (t, e) {
      t = vi(t).slice();
      var i = l.set(e, []);
      f(t, function (t, n) {
        w(t) && (t = h.get(t)), null != t && d > t && (i[n] = t, r(c[t], e, n));
      });
    });
    var y = 0;
    f(t, function (t) {
      var e, t, i, a;
      if (w(t)) e = t, t = {};else {
        e = t.name;
        var o = t.ordinalMeta;
        t.ordinalMeta = null, t = n(t), t.ordinalMeta = o, i = t.dimsDef, a = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null;
      }
      var h = vi(l.get(e));
      if (!h.length) for (var u = 0; u < (i && i.length || 1); u++) {
        for (; y < c.length && null != c[y].coordDim;) {
          y++;
        }

        y < c.length && h.push(y++);
      }
      f(h, function (n, o) {
        var l = c[n];

        if (r(s(l, t), e, o), null == l.name && i) {
          var h = i[o];
          !b(h) && (h = {
            name: h
          }), l.name = l.displayName = h.name, l.defaultTooltip = h.defaultTooltip;
        }

        a && s(l.otherDims, a);
      });
    });
    var _ = i.generateCoord,
        x = i.generateCoordCount,
        M = null != x;
    x = _ ? x || 1 : 0;

    for (var S = _ || "value", I = 0; d > I; I++) {
      var m = c[I] = c[I] || {},
          T = m.coordDim;
      null == T && (m.coordDim = jl(S, u, M), m.coordDimIndex = 0, (!_ || 0 >= x) && (m.isExtraCoord = !0), x--), null == m.name && (m.name = jl(m.coordDim, h)), null == m.type && fa(e, I, m.name) && (m.type = "ordinal");
    }

    return c;
  }

  function Zl(t, e, i, n) {
    var r = Math.max(t.dimensionsDetectCount || 1, e.length, i.length, n || 0);
    return f(e, function (t) {
      var e = t.dimsDef;
      e && (r = Math.max(r, e.length));
    }), r;
  }

  function jl(t, e, i) {
    if (i || null != e.get(t)) {
      for (var n = 0; null != e.get(t + n);) {
        n++;
      }

      t += n;
    }

    return e.set(t, !0), t;
  }

  function Kl(t, e, i) {
    i = i || {}, ia.isInstance(t) || (t = ia.seriesDataToSource(t));
    var n,
        r = e.get("coordinateSystem"),
        a = Ma.get(r),
        o = ta(e);
    o && (n = p(o.coordSysDims, function (t) {
      var e = {
        name: t
      },
          i = o.axisMap.get(t);

      if (i) {
        var n = i.get("type");
        e.type = Ol(n);
      }

      return e;
    })), n || (n = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);
    var s,
        l,
        h = v_(t, {
      coordDimensions: n,
      generateCoord: i.generateCoord
    });
    o && f(h, function (t, e) {
      var i = t.coordDim,
          n = o.categoryAxisMap.get(i);
      n && (null == s && (s = e), t.ordinalMeta = n.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0);
    }), l || null == s || (h[s].otherDims.itemName = 0);
    var u = Ss(e, h),
        c = new f_(h, e);
    c.setCalculationInfo(u);
    var d = null != s && $l(t) ? function (t, e, i, n) {
      return n === s ? i : this.defaultDimValueGetter(t, e, i, n);
    } : null;
    return c.hasItemOption = !1, c.initData(t, null, d), c;
  }

  function $l(t) {
    if (t.sourceFormat === bv) {
      var e = Ql(t.data || []);
      return null != e && !_(yi(e));
    }
  }

  function Ql(t) {
    for (var e = 0; e < t.length && null == t[e];) {
      e++;
    }

    return t[e];
  }

  function Jl(t, e) {
    var i = t.mapDimension("defaultedLabel", !0),
        n = i.length;
    if (1 === n) return ja(t, e, i[0]);

    if (n) {
      for (var r = [], a = 0; a < i.length; a++) {
        var o = ja(t, e, i[a]);
        r.push(o);
      }

      return r.join(" ");
    }
  }

  function th(t, e, i, n, r, a) {
    var o = i.getModel("label"),
        s = i.getModel("emphasis.label");
    Kn(t, e, o, s, {
      labelFetcher: r,
      labelDataIndex: a,
      defaultText: Jl(r.getData(), a),
      isRectText: !0,
      autoColor: n
    }), eh(t), eh(e);
  }

  function eh(t, e) {
    "outside" === t.textPosition && (t.textPosition = e);
  }

  function ih(t, e, i) {
    i.style.text = null, sr(i, {
      shape: {
        width: 0
      }
    }, e, t, function () {
      i.parent && i.parent.remove(i);
    });
  }

  function nh(t, e, i) {
    i.style.text = null, sr(i, {
      shape: {
        r: i.shape.r0
      }
    }, e, t, function () {
      i.parent && i.parent.remove(i);
    });
  }

  function rh(t, e, i, n, r, a, o, l) {
    var h = e.getItemVisual(i, "color"),
        u = e.getItemVisual(i, "opacity"),
        c = n.getModel("itemStyle"),
        d = n.getModel("emphasis.itemStyle").getBarItemStyle();
    l || t.setShape("r", c.get("barBorderRadius") || 0), t.useStyle(s({
      fill: h,
      opacity: u
    }, c.getBarItemStyle()));
    var f = n.getShallow("cursor");
    f && t.attr("cursor", f);
    var p = o ? r.height > 0 ? "bottom" : "top" : r.width > 0 ? "left" : "right";
    l || th(t.style, d, n, h, a, i, p), jn(t, d);
  }

  function ah(t, e) {
    var i = t.get(x_) || 0;
    return Math.min(i, Math.abs(e.width), Math.abs(e.height));
  }

  function oh(t, e, i) {
    var n = t.getData(),
        r = [],
        a = n.getLayout("valueAxisHorizontal") ? 1 : 0;
    r[1 - a] = n.getLayout("valueAxisStart");
    var o = new M_({
      shape: {
        points: n.getLayout("largePoints")
      },
      incremental: !!i,
      __startPoint: r,
      __valueIdx: a
    });
    e.add(o), sh(o, t, n);
  }

  function sh(t, e, i) {
    var n = i.getVisual("borderColor") || i.getVisual("color"),
        r = e.getModel("itemStyle").getItemStyle(["color", "borderColor"]);
    t.useStyle(r), t.style.fill = null, t.style.stroke = n, t.style.lineWidth = i.getLayout("barWidth");
  }

  function lh(t, e) {
    if ("image" !== this.type) {
      var i = this.style,
          n = this.shape;
      n && "line" === n.symbolType ? i.stroke = t : this.__isEmptyBrush ? (i.stroke = t, i.fill = e || "#fff") : (i.fill && (i.fill = t), i.stroke && (i.stroke = t)), this.dirty(!1);
    }
  }

  function hh(t, e, i, n, r, a, o) {
    var s = 0 === t.indexOf("empty");
    s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
    var l;
    return l = 0 === t.indexOf("image://") ? Ln(t.slice(8), new qt(e, i, n, r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? An(t.slice(7), {}, new qt(e, i, n, r), o ? "center" : "cover") : new L_({
      shape: {
        symbolType: t,
        x: e,
        y: i,
        width: n,
        height: r
      }
    }), l.__isEmptyBrush = s, l.setColor = lh, l.setColor(a), l;
  }

  function uh(t) {
    var e = {
      componentType: t.mainType
    };
    return e[t.mainType + "Index"] = t.componentIndex, e;
  }

  function ch(t, e, i, n) {
    var r,
        a,
        o = Ar(i - t.rotation),
        s = n[0] > n[1],
        l = "start" === e && !s || "start" !== e && s;
    return Lr(o - P_ / 2) ? (a = l ? "bottom" : "top", r = "center") : Lr(o - 1.5 * P_) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = 1.5 * P_ > o && o > P_ / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
      rotation: o,
      textAlign: r,
      textVerticalAlign: a
    };
  }

  function dh(t) {
    var e = t.get("tooltip");
    return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
  }

  function fh(t, e, i) {
    var n = t.get("axisLabel.showMinLabel"),
        r = t.get("axisLabel.showMaxLabel");
    e = e || [], i = i || [];
    var a = e[0],
        o = e[1],
        s = e[e.length - 1],
        l = e[e.length - 2],
        h = i[0],
        u = i[1],
        c = i[i.length - 1],
        d = i[i.length - 2];
    n === !1 ? (ph(a), ph(h)) : gh(a, o) && (n ? (ph(o), ph(u)) : (ph(a), ph(h))), r === !1 ? (ph(s), ph(c)) : gh(l, s) && (r ? (ph(l), ph(d)) : (ph(s), ph(c)));
  }

  function ph(t) {
    t && (t.ignore = !0);
  }

  function gh(t, e) {
    var i = t && t.getBoundingRect().clone(),
        n = e && e.getBoundingRect().clone();

    if (i && n) {
      var r = ot([]);
      return ut(r, r, -t.rotation), i.applyTransform(lt([], r, t.getLocalTransform())), n.applyTransform(lt([], r, e.getLocalTransform())), i.intersect(n);
    }
  }

  function vh(t) {
    return "middle" === t || "center" === t;
  }

  function mh(t, e, i) {
    var n = e.axis;

    if (e.get("axisTick.show") && !n.scale.isBlank()) {
      for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), o = r.get("length"), l = n.getTicksCoords(), h = [], u = [], c = t._transform, d = [], f = 0; f < l.length; f++) {
        var p = l[f].coord;
        h[0] = p, h[1] = 0, u[0] = p, u[1] = i.tickDirection * o, c && ($(h, h, c), $(u, u, c));
        var g = new Ng(Nn({
          anid: "tick_" + l[f].tickValue,
          shape: {
            x1: h[0],
            y1: h[1],
            x2: u[0],
            y2: u[1]
          },
          style: s(a.getLineStyle(), {
            stroke: e.get("axisLine.lineStyle.color")
          }),
          z2: 2,
          silent: !0
        }));
        t.group.add(g), d.push(g);
      }

      return d;
    }
  }

  function yh(t, e, i) {
    var n = e.axis,
        r = D(i.axisLabelShow, e.get("axisLabel.show"));

    if (r && !n.scale.isBlank()) {
      var a = e.getModel("axisLabel"),
          o = a.get("margin"),
          s = n.getViewLabels(),
          l = (D(i.labelRotate, a.get("rotate")) || 0) * P_ / 180,
          h = R_(i.rotation, l, i.labelDirection),
          u = e.getCategories(!0),
          c = [],
          d = dh(e),
          p = e.get("triggerEvent");
      return f(s, function (r, s) {
        var l = r.tickValue,
            f = r.formattedLabel,
            g = r.rawLabel,
            v = a;
        u && u[l] && u[l].textStyle && (v = new vr(u[l].textStyle, a, e.ecModel));
        var m = v.getTextColor() || e.get("axisLine.lineStyle.color"),
            y = n.dataToCoord(l),
            _ = [y, i.labelOffset + i.labelDirection * o],
            x = new Mg({
          anid: "label_" + l,
          position: _,
          rotation: h.rotation,
          silent: d,
          z2: 10
        });
        $n(x.style, v, {
          text: f,
          textAlign: v.getShallow("align", !0) || h.textAlign,
          textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || h.textVerticalAlign,
          textFill: "function" == typeof m ? m("category" === n.type ? g : "value" === n.type ? l + "" : l, s) : m
        }), p && (x.eventData = uh(e), x.eventData.targetType = "axisLabel", x.eventData.value = g), t._dumbGroup.add(x), x.updateTransform(), c.push(x), t.group.add(x), x.decomposeTransform();
      }), c;
    }
  }

  function _h(t, e) {
    var i = {
      axesInfo: {},
      seriesInvolved: !1,
      coordSysAxesInfo: {},
      coordSysMap: {}
    };
    return xh(i, t, e), i.seriesInvolved && bh(i, t), i;
  }

  function xh(t, e, i) {
    var n = e.getComponent("tooltip"),
        r = e.getComponent("axisPointer"),
        a = r.get("link", !0) || [],
        o = [];
    E_(i.getCoordinateSystems(), function (i) {
      function s(n, s, l) {
        var u = l.model.getModel("axisPointer", r),
            d = u.get("show");

        if (d && ("auto" !== d || n || Ch(u))) {
          null == s && (s = u.get("triggerTooltip")), u = n ? wh(l, c, r, e, n, s) : u;
          var f = u.get("snap"),
              p = kh(l.model),
              g = s || f || "category" === l.type,
              v = t.axesInfo[p] = {
            key: p,
            axis: l,
            coordSys: i,
            axisPointerModel: u,
            triggerTooltip: s,
            involveSeries: g,
            snap: f,
            useHandle: Ch(u),
            seriesModels: []
          };
          h[p] = v, t.seriesInvolved |= g;
          var m = Mh(a, l);

          if (null != m) {
            var y = o[m] || (o[m] = {
              axesInfo: {}
            });
            y.axesInfo[p] = v, y.mapper = a[m].mapper, v.linkGroup = y;
          }
        }
      }

      if (i.axisPointerEnabled) {
        var l = kh(i.model),
            h = t.coordSysAxesInfo[l] = {};
        t.coordSysMap[l] = i;
        var u = i.model,
            c = u.getModel("tooltip", n);

        if (E_(i.getAxes(), z_(s, !1, null)), i.getTooltipAxes && n && c.get("show")) {
          var d = "axis" === c.get("trigger"),
              f = "cross" === c.get("axisPointer.type"),
              p = i.getTooltipAxes(c.get("axisPointer.axis"));
          (d || f) && E_(p.baseAxes, z_(s, !f || "cross", d)), f && E_(p.otherAxes, z_(s, "cross", !1));
        }
      }
    });
  }

  function wh(t, e, i, r, a, o) {
    var l = e.getModel("axisPointer"),
        h = {};
    E_(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function (t) {
      h[t] = n(l.get(t));
    }), h.snap = "category" !== t.type && !!o, "cross" === l.get("type") && (h.type = "line");
    var u = h.label || (h.label = {});

    if (null == u.show && (u.show = !1), "cross" === a) {
      var c = l.get("label.show");

      if (u.show = null == c || c, !o) {
        var d = h.lineStyle = l.get("crossStyle");
        d && s(u, d.textStyle);
      }
    }

    return t.model.getModel("axisPointer", new vr(h, i, r));
  }

  function bh(t, e) {
    e.eachSeries(function (e) {
      var i = e.coordinateSystem,
          n = e.get("tooltip.trigger", !0),
          r = e.get("tooltip.show", !0);
      i && "none" !== n && n !== !1 && "item" !== n && r !== !1 && e.get("axisPointer.show", !0) !== !1 && E_(t.coordSysAxesInfo[kh(i.model)], function (t) {
        var n = t.axis;
        i.getAxis(n.dim) === n && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count());
      });
    }, this);
  }

  function Mh(t, e) {
    for (var i = e.model, n = e.dim, r = 0; r < t.length; r++) {
      var a = t[r] || {};
      if (Sh(a[n + "AxisId"], i.id) || Sh(a[n + "AxisIndex"], i.componentIndex) || Sh(a[n + "AxisName"], i.name)) return r;
    }
  }

  function Sh(t, e) {
    return "all" === t || _(t) && h(t, e) >= 0 || t === e;
  }

  function Ih(t) {
    var e = Th(t);

    if (e) {
      var i = e.axisPointerModel,
          n = e.axis.scale,
          r = i.option,
          a = i.get("status"),
          o = i.get("value");
      null != o && (o = n.parse(o));
      var s = Ch(i);
      null == a && (r.status = s ? "show" : "hide");
      var l = n.getExtent().slice();
      l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show");
    }
  }

  function Th(t) {
    var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
    return e && e.axesInfo[kh(t)];
  }

  function Dh(t) {
    var e = Th(t);
    return e && e.axisPointerModel;
  }

  function Ch(t) {
    return !!t.get("handle.show");
  }

  function kh(t) {
    return t.type + "||" + t.id;
  }

  function Ah(t, e, i, n, r, a) {
    var o = B_.getAxisPointerClass(t.axisPointerClass);

    if (o) {
      var s = Dh(e);
      s ? (t._axisPointer || (t._axisPointer = new o())).render(e, s, n, a) : Lh(t, n);
    }
  }

  function Lh(t, e, i) {
    var n = t._axisPointer;
    n && n.dispose(e, i), t._axisPointer = null;
  }

  function Ph(t, e, i) {
    i = i || {};
    var n = t.coordinateSystem,
        r = e.axis,
        a = {},
        o = r.getAxesOnZeroOf()[0],
        s = r.position,
        l = o ? "onZero" : s,
        h = r.dim,
        u = n.getRect(),
        c = [u.x, u.x + u.width, u.y, u.y + u.height],
        d = {
      left: 0,
      right: 1,
      top: 0,
      bottom: 1,
      onZero: 2
    },
        f = e.get("offset") || 0,
        p = "x" === h ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];

    if (o) {
      var g = o.toGlobalCoord(o.dataToCoord(0));
      p[d.onZero] = Math.max(Math.min(g, p[1]), p[0]);
    }

    a.position = ["y" === h ? p[d[l]] : c[0], "x" === h ? p[d[l]] : c[3]], a.rotation = Math.PI / 2 * ("x" === h ? 0 : 1);
    var v = {
      top: -1,
      bottom: 1,
      left: -1,
      right: 1
    };
    a.labelDirection = a.tickDirection = a.nameDirection = v[s], a.labelOffset = o ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), D(i.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);
    var m = e.get("axisLabel.rotate");
    return a.labelRotate = "top" === l ? -m : m, a.z2 = 1, a;
  }

  function Oh(t, e, i) {
    pf.call(this), this.updateData(t, e, i);
  }

  function Nh(t) {
    return [t[0] / 2, t[1] / 2];
  }

  function Rh(t, e) {
    this.parent.drift(t, e);
  }

  function Eh(t) {
    this.group = new pf(), this._symbolCtor = t || Oh;
  }

  function zh(t, e, i, n) {
    return !(!e || isNaN(e[0]) || isNaN(e[1]) || n.isIgnore && n.isIgnore(i) || n.clipShape && !n.clipShape.contain(e[0], e[1]) || "none" === t.getItemVisual(i, "symbol"));
  }

  function Bh(t) {
    return null == t || b(t) || (t = {
      isIgnore: t
    }), t || {};
  }

  function Vh(t) {
    var e = t.hostModel;
    return {
      itemStyle: e.getModel("itemStyle").getItemStyle(["color"]),
      hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(),
      symbolRotate: e.get("symbolRotate"),
      symbolOffset: e.get("symbolOffset"),
      hoverAnimation: e.get("hoverAnimation"),
      labelModel: e.getModel("label"),
      hoverLabelModel: e.getModel("emphasis.label"),
      cursorStyle: e.get("cursor")
    };
  }

  function Fh(t, e, i) {
    var n,
        r = t.getBaseAxis(),
        a = t.getOtherAxis(r),
        o = Hh(a, i),
        s = r.dim,
        l = a.dim,
        h = e.mapDimension(l),
        u = e.mapDimension(s),
        c = "x" === l || "radius" === l ? 1 : 0,
        d = p(t.dimensions, function (t) {
      return e.mapDimension(t);
    }),
        f = e.getCalculationInfo("stackResultDimension");
    return (n |= Is(e, d[0])) && (d[0] = f), (n |= Is(e, d[1])) && (d[1] = f), {
      dataDimsForPoint: d,
      valueStart: o,
      valueAxisDim: l,
      baseAxisDim: s,
      stacked: !!n,
      valueDim: h,
      baseDim: u,
      baseDataOffset: c,
      stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
    };
  }

  function Hh(t, e) {
    var i = 0,
        n = t.scale.getExtent();
    return "start" === e ? i = n[0] : "end" === e ? i = n[1] : n[0] > 0 ? i = n[0] : n[1] < 0 && (i = n[1]), i;
  }

  function Wh(t, e, i, n) {
    var r = NaN;
    t.stacked && (r = i.get(i.getCalculationInfo("stackedOverDimension"), n)), isNaN(r) && (r = t.valueStart);
    var a = t.baseDataOffset,
        o = [];
    return o[a] = i.get(t.baseDim, n), o[1 - a] = r, e.dataToPoint(o);
  }

  function Gh(t, e) {
    var i = [];
    return e.diff(t).add(function (t) {
      i.push({
        cmd: "+",
        idx: t
      });
    }).update(function (t, e) {
      i.push({
        cmd: "=",
        idx: e,
        idx1: t
      });
    }).remove(function (t) {
      i.push({
        cmd: "-",
        idx: t
      });
    }).execute(), i;
  }

  function Xh(t) {
    return isNaN(t[0]) || isNaN(t[1]);
  }

  function Yh(t, e, i, n, r, a, o, s, l, h) {
    return "none" !== h && h ? Uh.apply(this, arguments) : qh.apply(this, arguments);
  }

  function Uh(t, e, i, n, r, a, o, s, l, h, u) {
    for (var c = 0, d = i, f = 0; n > f; f++) {
      var p = e[d];
      if (d >= r || 0 > d) break;

      if (Xh(p)) {
        if (u) {
          d += a;
          continue;
        }

        break;
      }

      if (d === i) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]);else if (l > 0) {
        var g = e[c],
            v = "y" === h ? 1 : 0,
            m = (p[v] - g[v]) * l;
        tx(ix, g), ix[v] = g[v] + m, tx(nx, p), nx[v] = p[v] - m, t.bezierCurveTo(ix[0], ix[1], nx[0], nx[1], p[0], p[1]);
      } else t.lineTo(p[0], p[1]);
      c = d, d += a;
    }

    return f;
  }

  function qh(t, e, i, n, r, a, o, s, l, h, u) {
    for (var c = 0, d = i, f = 0; n > f; f++) {
      var p = e[d];
      if (d >= r || 0 > d) break;

      if (Xh(p)) {
        if (u) {
          d += a;
          continue;
        }

        break;
      }

      if (d === i) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]), tx(ix, p);else if (l > 0) {
        var g = d + a,
            v = e[g];
        if (u) for (; v && Xh(e[g]);) {
          g += a, v = e[g];
        }
        var m = .5,
            y = e[c],
            v = e[g];
        if (!v || Xh(v)) tx(nx, p);else {
          Xh(v) && !u && (v = p), X(ex, v, y);

          var _, x;

          if ("x" === h || "y" === h) {
            var w = "x" === h ? 0 : 1;
            _ = Math.abs(p[w] - y[w]), x = Math.abs(p[w] - v[w]);
          } else _ = Od(p, y), x = Od(p, v);

          m = x / (x + _), J_(nx, p, ex, -l * (1 - m));
        }
        $_(ix, ix, s), Q_(ix, ix, o), $_(nx, nx, s), Q_(nx, nx, o), t.bezierCurveTo(ix[0], ix[1], nx[0], nx[1], p[0], p[1]), J_(ix, p, ex, l * m);
      } else t.lineTo(p[0], p[1]);
      c = d, d += a;
    }

    return f;
  }

  function Zh(t, e) {
    var i = [1 / 0, 1 / 0],
        n = [-1 / 0, -1 / 0];
    if (e) for (var r = 0; r < t.length; r++) {
      var a = t[r];
      a[0] < i[0] && (i[0] = a[0]), a[1] < i[1] && (i[1] = a[1]), a[0] > n[0] && (n[0] = a[0]), a[1] > n[1] && (n[1] = a[1]);
    }
    return {
      min: e ? i : n,
      max: e ? n : i
    };
  }

  function jh(t, e) {
    if (t.length === e.length) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i],
            r = e[i];
        if (n[0] !== r[0] || n[1] !== r[1]) return;
      }

      return !0;
    }
  }

  function Kh(t) {
    return "number" == typeof t ? t : t ? .5 : 0;
  }

  function $h(t) {
    var e = t.getGlobalExtent();

    if (t.onBand) {
      var i = t.getBandWidth() / 2 - 1,
          n = e[1] > e[0] ? 1 : -1;
      e[0] += n * i, e[1] -= n * i;
    }

    return e;
  }

  function Qh(t, e, i) {
    if (!i.valueDim) return [];

    for (var n = [], r = 0, a = e.count(); a > r; r++) {
      n.push(Wh(i, t, e, r));
    }

    return n;
  }

  function Jh(t, e, i, n) {
    var r = $h(t.getAxis("x")),
        a = $h(t.getAxis("y")),
        o = t.getBaseAxis().isHorizontal(),
        s = Math.min(r[0], r[1]),
        l = Math.min(a[0], a[1]),
        h = Math.max(r[0], r[1]) - s,
        u = Math.max(a[0], a[1]) - l;
    if (i) s -= .5, h += .5, l -= .5, u += .5;else {
      var c = n.get("lineStyle.width") || 2,
          d = n.get("clipOverflow") ? c / 2 : Math.max(h, u);
      o ? (l -= d, u += 2 * d) : (s -= d, h += 2 * d);
    }
    var f = new Og({
      shape: {
        x: s,
        y: l,
        width: h,
        height: u
      }
    });
    return e && (f.shape[o ? "width" : "height"] = 0, lr(f, {
      shape: {
        width: h,
        height: u
      }
    }, n)), f;
  }

  function tu(t, e, i, n) {
    var r = t.getAngleAxis(),
        a = t.getRadiusAxis(),
        o = a.getExtent().slice();
    o[0] > o[1] && o.reverse();
    var s = r.getExtent(),
        l = Math.PI / 180;
    i && (o[0] -= .5, o[1] += .5);
    var h = new Dg({
      shape: {
        cx: Ir(t.cx, 1),
        cy: Ir(t.cy, 1),
        r0: Ir(o[0], 1),
        r: Ir(o[1], 1),
        startAngle: -s[0] * l,
        endAngle: -s[1] * l,
        clockwise: r.inverse
      }
    });
    return e && (h.shape.endAngle = -s[0] * l, lr(h, {
      shape: {
        endAngle: -s[1] * l
      }
    }, n)), h;
  }

  function eu(t, e, i, n) {
    return "polar" === t.type ? tu(t, e, i, n) : Jh(t, e, i, n);
  }

  function iu(t, e, i) {
    for (var n = e.getBaseAxis(), r = "x" === n.dim || "radius" === n.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
      var s = t[o + 1],
          l = t[o];
      a.push(l);
      var h = [];

      switch (i) {
        case "end":
          h[r] = s[r], h[1 - r] = l[1 - r], a.push(h);
          break;

        case "middle":
          var u = (l[r] + s[r]) / 2,
              c = [];
          h[r] = c[r] = u, h[1 - r] = l[1 - r], c[1 - r] = s[1 - r], a.push(h), a.push(c);
          break;

        default:
          h[r] = l[r], h[1 - r] = s[1 - r], a.push(h);
      }
    }

    return t[o] && a.push(t[o]), a;
  }

  function nu(t, e) {
    var i = t.getVisual("visualMeta");

    if (i && i.length && t.count() && "cartesian2d" === e.type) {
      for (var n, r, a = i.length - 1; a >= 0; a--) {
        var o = i[a].dimension,
            s = t.dimensions[o],
            l = t.getDimensionInfo(s);

        if (n = l && l.coordDim, "x" === n || "y" === n) {
          r = i[a];
          break;
        }
      }

      if (r) {
        var h = e.getAxis(n),
            u = p(r.stops, function (t) {
          return {
            coord: h.toGlobalCoord(h.dataToCoord(t.value)),
            color: t.color
          };
        }),
            c = u.length,
            d = r.outerColors.slice();
        c && u[0].coord > u[c - 1].coord && (u.reverse(), d.reverse());
        var g = 10,
            v = u[0].coord - g,
            m = u[c - 1].coord + g,
            y = m - v;
        if (.001 > y) return "transparent";
        f(u, function (t) {
          t.offset = (t.coord - v) / y;
        }), u.push({
          offset: c ? u[c - 1].offset : .5,
          color: d[1] || "transparent"
        }), u.unshift({
          offset: c ? u[0].offset : .5,
          color: d[0] || "transparent"
        });

        var _ = new Fg(0, 0, 0, 0, u, !0);

        return _[n] = v, _[n + "2"] = m, _;
      }
    }
  }

  function ru(t, e, i) {
    var n = t.get("showAllSymbol"),
        r = "auto" === n;

    if (!n || r) {
      var a = i.getAxesByScale("ordinal")[0];

      if (a && (!r || !au(a, e))) {
        var o = e.mapDimension(a.dim),
            s = {};
        return f(a.getViewLabels(), function (t) {
          s[t.tickValue] = 1;
        }), function (t) {
          return !s.hasOwnProperty(e.get(o, t));
        };
      }
    }
  }

  function au(t, e) {
    var i = t.getExtent(),
        n = Math.abs(i[1] - i[0]) / t.scale.count();
    isNaN(n) && (n = 0);

    for (var r = e.count(), a = Math.max(1, Math.round(r / 5)), o = 0; r > o; o += a) {
      if (1.5 * Oh.getSymbolSize(e, o)[t.isHorizontal() ? 1 : 0] > n) return !1;
    }

    return !0;
  }

  function ou(t, e, i, n) {
    var r = e.getData(),
        a = this.dataIndex,
        o = r.getName(a),
        s = e.get("selectedOffset");
    n.dispatchAction({
      type: "pieToggleSelect",
      from: t,
      name: o,
      seriesId: e.id
    }), r.each(function (t) {
      su(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, i);
    });
  }

  function su(t, e, i, n, r) {
    var a = (e.startAngle + e.endAngle) / 2,
        o = Math.cos(a),
        s = Math.sin(a),
        l = i ? n : 0,
        h = [o * l, s * l];
    r ? t.animate().when(200, {
      position: h
    }).start("bounceOut") : t.attr("position", h);
  }

  function lu(t, e) {
    function i() {
      a.ignore = a.hoverIgnore, o.ignore = o.hoverIgnore;
    }

    function n() {
      a.ignore = a.normalIgnore, o.ignore = o.normalIgnore;
    }

    pf.call(this);
    var r = new Dg({
      z2: 2
    }),
        a = new Pg(),
        o = new Mg();
    this.add(r), this.add(a), this.add(o), this.updateData(t, e, !0), this.on("emphasis", i).on("normal", n).on("mouseover", i).on("mouseout", n);
  }

  function hu(t, e, i, n, r, a, o) {
    function s(e, i, n) {
      for (var r = e; i > r; r++) {
        if (t[r].y += n, r > e && i > r + 1 && t[r + 1].y > t[r].y + t[r].height) return void l(r, n / 2);
      }

      l(i - 1, n / 2);
    }

    function l(e, i) {
      for (var n = e; n >= 0 && (t[n].y -= i, !(n > 0 && t[n].y > t[n - 1].y + t[n - 1].height)); n--) {
        ;
      }
    }

    function h(t, e, i, n, r, a) {
      for (var o = a > 0 ? e ? Number.MAX_VALUE : 0 : e ? Number.MAX_VALUE : 0, s = 0, l = t.length; l > s; s++) {
        if ("center" !== t[s].position) {
          var h = Math.abs(t[s].y - n),
              u = t[s].len,
              c = t[s].len2,
              d = r + u > h ? Math.sqrt((r + u + c) * (r + u + c) - h * h) : Math.abs(t[s].x - i);
          e && d >= o && (d = o - 10), !e && o >= d && (d = o + 10), t[s].x = i + d * a, o = d;
        }
      }
    }

    t.sort(function (t, e) {
      return t.y - e.y;
    });

    for (var u, c = 0, d = t.length, f = [], p = [], g = 0; d > g; g++) {
      u = t[g].y - c, 0 > u && s(g, d, -u, r), c = t[g].y + t[g].height;
    }

    0 > o - c && l(d - 1, c - o);

    for (var g = 0; d > g; g++) {
      t[g].y >= i ? p.push(t[g]) : f.push(t[g]);
    }

    h(f, !1, e, i, n, r), h(p, !0, e, i, n, r);
  }

  function uu(t, e, i, n, r, a) {
    for (var o = [], s = [], l = 0; l < t.length; l++) {
      t[l].x < e ? o.push(t[l]) : s.push(t[l]);
    }

    hu(s, e, i, n, 1, r, a), hu(o, e, i, n, -1, r, a);

    for (var l = 0; l < t.length; l++) {
      var h = t[l].linePoints;

      if (h) {
        var u = h[1][0] - h[2][0];
        h[2][0] = t[l].x < e ? t[l].x + 3 : t[l].x - 3, h[1][1] = h[2][1] = t[l].y, h[1][0] = h[2][0] + u;
      }
    }
  }

  function cu() {
    var t = kd();
    this.canvas = t, this.blurSize = 30, this.pointSize = 20, this.maxOpacity = 1, this.minOpacity = 0, this._gradientPixels = {};
  }

  function du(t, e, i) {
    var n = t[1] - t[0];
    e = p(e, function (e) {
      return {
        interval: [(e.interval[0] - t[0]) / n, (e.interval[1] - t[0]) / n]
      };
    });
    var r = e.length,
        a = 0;
    return function (t) {
      for (var n = a; r > n; n++) {
        var o = e[n].interval;

        if (o[0] <= t && t <= o[1]) {
          a = n;
          break;
        }
      }

      if (n === r) for (var n = a - 1; n >= 0; n--) {
        var o = e[n].interval;

        if (o[0] <= t && t <= o[1]) {
          a = n;
          break;
        }
      }
      return n >= 0 && r > n && i[n];
    };
  }

  function fu(t, e) {
    var i = t[1] - t[0];
    return e = [(e[0] - t[0]) / i, (e[1] - t[0]) / i], function (t) {
      return t >= e[0] && t <= e[1];
    };
  }

  function pu(t) {
    var e = t.dimensions;
    return "lng" === e[0] && "lat" === e[1];
  }

  function gu(t) {
    var e = t.mainData,
        i = t.datas;
    i || (i = {
      main: e
    }, t.datasAttr = {
      main: "data"
    }), t.datas = t.mainData = null, wu(e, i, t), Sx(i, function (i) {
      Sx(e.TRANSFERABLE_METHODS, function (e) {
        i.wrapMethod(e, y(vu, t));
      });
    }), e.wrapMethod("cloneShallow", y(yu, t)), Sx(e.CHANGABLE_METHODS, function (i) {
      e.wrapMethod(i, y(mu, t));
    }), P(i[e.dataType] === e);
  }

  function vu(t, e) {
    if (xu(this)) {
      var i = o({}, this[Ix]);
      i[this.dataType] = e, wu(e, i, t);
    } else bu(e, this.dataType, this[Tx], t);

    return e;
  }

  function mu(t, e) {
    return t.struct && t.struct.update(this), e;
  }

  function yu(t, e) {
    return Sx(e[Ix], function (i, n) {
      i !== e && bu(i.cloneShallow(), n, e, t);
    }), e;
  }

  function _u(t) {
    var e = this[Tx];
    return null == t || null == e ? e : e[Ix][t];
  }

  function xu(t) {
    return t[Tx] === t;
  }

  function wu(t, e, i) {
    t[Ix] = {}, Sx(e, function (e, n) {
      bu(e, n, t, i);
    });
  }

  function bu(t, e, i, n) {
    i[Ix][e] = t, t[Tx] = i, t.dataType = e, n.struct && (t[n.structAttr] = n.struct, n.struct[n.datasAttr[e]] = t), t.getLinkedData = _u;
  }

  function Mu(t, e, i) {
    this.root, this.data, this._nodes = [], this.hostModel = t, this.levelModels = p(e || [], function (e) {
      return new vr(e, t, t.ecModel);
    }), this.leavesModel = new vr(i || {}, t, t.ecModel);
  }

  function Su(t, e) {
    var i = e.children;
    t.parentNode !== e && (i.push(t), t.parentNode = e);
  }

  function Iu(t) {
    t.hierNode = {
      defaultAncestor: null,
      ancestor: t,
      prelim: 0,
      modifier: 0,
      change: 0,
      shift: 0,
      i: 0,
      thread: null
    };

    for (var e, i, n = [t]; e = n.pop();) {
      if (i = e.children, e.isExpand && i.length) for (var r = i.length, a = r - 1; a >= 0; a--) {
        var o = i[a];
        o.hierNode = {
          defaultAncestor: null,
          ancestor: o,
          prelim: 0,
          modifier: 0,
          change: 0,
          shift: 0,
          i: a,
          thread: null
        }, n.push(o);
      }
    }
  }

  function Tu(t, e) {
    var i = t.isExpand ? t.children : [],
        n = t.parentNode.children,
        r = t.hierNode.i ? n[t.hierNode.i - 1] : null;

    if (i.length) {
      Lu(t);
      var a = (i[0].hierNode.prelim + i[i.length - 1].hierNode.prelim) / 2;
      r ? (t.hierNode.prelim = r.hierNode.prelim + e(t, r), t.hierNode.modifier = t.hierNode.prelim - a) : t.hierNode.prelim = a;
    } else r && (t.hierNode.prelim = r.hierNode.prelim + e(t, r));

    t.parentNode.hierNode.defaultAncestor = Pu(t, r, t.parentNode.hierNode.defaultAncestor || n[0], e);
  }

  function Du(t) {
    var e = t.hierNode.prelim + t.parentNode.hierNode.modifier;
    t.setLayout({
      x: e
    }, !0), t.hierNode.modifier += t.parentNode.hierNode.modifier;
  }

  function Cu(t) {
    return arguments.length ? t : zu;
  }

  function ku(t, e) {
    var i = {};
    return t -= Math.PI / 2, i.x = e * Math.cos(t), i.y = e * Math.sin(t), i;
  }

  function Au(t, e) {
    return Ur(t.getBoxLayoutParams(), {
      width: e.getWidth(),
      height: e.getHeight()
    });
  }

  function Lu(t) {
    for (var e = t.children, i = e.length, n = 0, r = 0; --i >= 0;) {
      var a = e[i];
      a.hierNode.prelim += n, a.hierNode.modifier += n, r += a.hierNode.change, n += a.hierNode.shift + r;
    }
  }

  function Pu(t, e, i, n) {
    if (e) {
      for (var r = t, a = t, o = a.parentNode.children[0], s = e, l = r.hierNode.modifier, h = a.hierNode.modifier, u = o.hierNode.modifier, c = s.hierNode.modifier; s = Ou(s), a = Nu(a), s && a;) {
        r = Ou(r), o = Nu(o), r.hierNode.ancestor = t;
        var d = s.hierNode.prelim + c - a.hierNode.prelim - h + n(s, a);
        d > 0 && (Eu(Ru(s, t, i), t, d), h += d, l += d), c += s.hierNode.modifier, h += a.hierNode.modifier, l += r.hierNode.modifier, u += o.hierNode.modifier;
      }

      s && !Ou(r) && (r.hierNode.thread = s, r.hierNode.modifier += c - l), a && !Nu(o) && (o.hierNode.thread = a, o.hierNode.modifier += h - u, i = t);
    }

    return i;
  }

  function Ou(t) {
    var e = t.children;
    return e.length && t.isExpand ? e[e.length - 1] : t.hierNode.thread;
  }

  function Nu(t) {
    var e = t.children;
    return e.length && t.isExpand ? e[0] : t.hierNode.thread;
  }

  function Ru(t, e, i) {
    return t.hierNode.ancestor.parentNode === e.parentNode ? t.hierNode.ancestor : i;
  }

  function Eu(t, e, i) {
    var n = i / (e.hierNode.i - t.hierNode.i);
    e.hierNode.change -= n, e.hierNode.shift += i, e.hierNode.modifier += i, e.hierNode.prelim += i, t.hierNode.change += n;
  }

  function zu(t, e) {
    return t.parentNode === e.parentNode ? 1 : 2;
  }

  function Bu(t, e) {
    var i = t.getItemLayout(e);
    return i && !isNaN(i.x) && !isNaN(i.y) && "none" !== t.getItemVisual(e, "symbol");
  }

  function Vu(t, e, i) {
    return i.itemModel = e, i.itemStyle = e.getModel("itemStyle").getItemStyle(), i.hoverItemStyle = e.getModel("emphasis.itemStyle").getItemStyle(), i.lineStyle = e.getModel("lineStyle").getLineStyle(), i.labelModel = e.getModel("label"), i.hoverLabelModel = e.getModel("emphasis.label"), i.symbolInnerColor = t.isExpand === !1 && 0 !== t.children.length ? i.itemStyle.fill : "#fff", i;
  }

  function Fu(t, e, i, n, r, a) {
    var o = !i,
        l = t.tree.getNodeByDataIndex(e),
        h = l.getModel(),
        a = Vu(l, h, a),
        u = t.tree.root,
        c = l.parentNode === u ? l : l.parentNode || l,
        d = t.getItemGraphicEl(c.dataIndex),
        f = c.getLayout(),
        p = d ? {
      x: d.position[0],
      y: d.position[1],
      rawX: d.__radialOldRawX,
      rawY: d.__radialOldRawY
    } : f,
        g = l.getLayout();
    o ? (i = new Oh(t, e, a), i.attr("position", [p.x, p.y])) : i.updateData(t, e, a), i.__radialOldRawX = i.__radialRawX, i.__radialOldRawY = i.__radialRawY, i.__radialRawX = g.rawX, i.__radialRawY = g.rawY, n.add(i), t.setItemGraphicEl(e, i), sr(i, {
      position: [g.x, g.y]
    }, r);
    var v = i.getSymbolPath();

    if ("radial" === a.layout) {
      var m,
          y,
          _ = u.children[0],
          x = _.getLayout(),
          w = _.children.length;

      if (g.x === x.x && l.isExpand === !0) {
        var b = {};
        b.x = (_.children[0].getLayout().x + _.children[w - 1].getLayout().x) / 2, b.y = (_.children[0].getLayout().y + _.children[w - 1].getLayout().y) / 2, m = Math.atan2(b.y - x.y, b.x - x.x), 0 > m && (m = 2 * Math.PI + m), y = b.x < x.x, y && (m -= Math.PI);
      } else m = Math.atan2(g.y - x.y, g.x - x.x), 0 > m && (m = 2 * Math.PI + m), 0 === l.children.length || 0 !== l.children.length && l.isExpand === !1 ? (y = g.x < x.x, y && (m -= Math.PI)) : (y = g.x > x.x, y || (m -= Math.PI));

      var M = y ? "left" : "right";
      v.setStyle({
        textPosition: M,
        textRotation: -m,
        textOrigin: "center",
        verticalAlign: "middle"
      });
    }

    if (l.parentNode && l.parentNode !== u) {
      var S = i.__edge;
      S || (S = i.__edge = new Eg({
        shape: Wu(a, p, p),
        style: s({
          opacity: 0
        }, a.lineStyle)
      })), sr(S, {
        shape: Wu(a, f, g),
        style: {
          opacity: 1
        }
      }, r), n.add(S);
    }
  }

  function Hu(t, e, i, n, r, a) {
    for (var o, s = t.tree.getNodeByDataIndex(e), l = t.tree.root, h = s.getModel(), a = Vu(s, h, a), u = s.parentNode === l ? s : s.parentNode || s; o = u.getLayout(), null == o;) {
      u = u.parentNode === l ? u : u.parentNode || u;
    }

    sr(i, {
      position: [o.x + 1, o.y + 1]
    }, r, function () {
      n.remove(i), t.setItemGraphicEl(e, null);
    }), i.fadeOut(null, {
      keepLabel: !0
    });
    var c = i.__edge;
    c && sr(c, {
      shape: Wu(a, o, o),
      style: {
        opacity: 0
      }
    }, r, function () {
      n.remove(c);
    });
  }

  function Wu(t, e, i) {
    var n,
        r,
        a,
        o,
        s = t.orient;

    if ("radial" === t.layout) {
      var l = e.rawX,
          h = e.rawY,
          u = i.rawX,
          c = i.rawY,
          d = ku(l, h),
          f = ku(l, h + (c - h) * t.curvature),
          p = ku(u, c + (h - c) * t.curvature),
          g = ku(u, c);
      return {
        x1: d.x,
        y1: d.y,
        x2: g.x,
        y2: g.y,
        cpx1: f.x,
        cpy1: f.y,
        cpx2: p.x,
        cpy2: p.y
      };
    }

    var l = e.x,
        h = e.y,
        u = i.x,
        c = i.y;
    return ("LR" === s || "RL" === s) && (n = l + (u - l) * t.curvature, r = h, a = u + (l - u) * t.curvature, o = c), ("TB" === s || "BT" === s) && (n = l, r = h + (c - h) * t.curvature, a = u, o = c + (h - c) * t.curvature), {
      x1: l,
      y1: h,
      x2: u,
      y2: c,
      cpx1: n,
      cpy1: r,
      cpx2: a,
      cpy2: o
    };
  }

  function Gu(t, e, i) {
    for (var n, r = [t], a = []; n = r.pop();) {
      if (a.push(n), n.isExpand) {
        var o = n.children;
        if (o.length) for (var s = 0; s < o.length; s++) {
          r.push(o[s]);
        }
      }
    }

    for (; n = a.pop();) {
      e(n, i);
    }
  }

  function Xu(t, e) {
    for (var i, n = [t]; i = n.pop();) {
      if (e(i), i.isExpand) {
        var r = i.children;
        if (r.length) for (var a = r.length - 1; a >= 0; a--) {
          n.push(r[a]);
        }
      }
    }
  }

  function Yu(t, e) {
    var i = Au(t, e);
    t.layoutInfo = i;
    var n = t.get("layout"),
        r = 0,
        a = 0,
        o = null;
    "radial" === n ? (r = 2 * Math.PI, a = Math.min(i.height, i.width) / 2, o = Cu(function (t, e) {
      return (t.parentNode === e.parentNode ? 1 : 2) / t.depth;
    })) : (r = i.width, a = i.height, o = Cu());
    var s = t.getData().tree.root,
        l = s.children[0];

    if (l) {
      Iu(s), Gu(l, Tu, o), s.hierNode.modifier = -l.hierNode.prelim, Xu(l, Du);
      var h = l,
          u = l,
          c = l;
      Xu(l, function (t) {
        var e = t.getLayout().x;
        e < h.getLayout().x && (h = t), e > u.getLayout().x && (u = t), t.depth > c.depth && (c = t);
      });
      var d = h === u ? 1 : o(h, u) / 2,
          f = d - h.getLayout().x,
          p = 0,
          g = 0,
          v = 0,
          m = 0;
      if ("radial" === n) p = r / (u.getLayout().x + d + f), g = a / (c.depth - 1 || 1), Xu(l, function (t) {
        v = (t.getLayout().x + f) * p, m = (t.depth - 1) * g;
        var e = ku(v, m);
        t.setLayout({
          x: e.x,
          y: e.y,
          rawX: v,
          rawY: m
        }, !0);
      });else {
        var y = t.getOrient();
        "RL" === y || "LR" === y ? (g = a / (u.getLayout().x + d + f), p = r / (c.depth - 1 || 1), Xu(l, function (t) {
          m = (t.getLayout().x + f) * g, v = "LR" === y ? (t.depth - 1) * p : r - (t.depth - 1) * p, t.setLayout({
            x: v,
            y: m
          }, !0);
        })) : ("TB" === y || "BT" === y) && (p = r / (u.getLayout().x + d + f), g = a / (c.depth - 1 || 1), Xu(l, function (t) {
          v = (t.getLayout().x + f) * p, m = "TB" === y ? (t.depth - 1) * g : a - (t.depth - 1) * g, t.setLayout({
            x: v,
            y: m
          }, !0);
        }));
      }
    }
  }

  function Uu(t) {
    this._model = t;
  }

  function qu(t, e, i, n) {
    var r = i.calendarModel,
        a = i.seriesModel,
        o = r ? r.coordinateSystem : a ? a.coordinateSystem : null;
    return o === this ? o[t](n) : null;
  }

  function Zu(t, e) {
    var i = t.cellSize;
    _(i) ? 1 === i.length && (i[1] = i[0]) : i = t.cellSize = [i, i];
    var n = p([0, 1], function (t) {
      return Zr(e, t) && (i[t] = "auto"), null != i[t] && "auto" !== i[t];
    });
    jr(t, e, {
      type: "box",
      ignoreSize: n
    });
  }

  function ju(t, e, i, n, r) {
    var a = t.axis;

    if (!a.scale.isBlank() && a.containData(e)) {
      if (!t.involveSeries) return void i.showPointer(t, e);
      var s = Ku(e, t),
          l = s.payloadBatch,
          h = s.snapToValue;
      l[0] && null == r.seriesIndex && o(r, l[0]), !n && t.snap && a.containData(h) && null != h && (e = h), i.showPointer(t, e, l, r), i.showTooltip(t, s, h);
    }
  }

  function Ku(t, e) {
    var i = e.axis,
        n = i.dim,
        r = t,
        a = [],
        o = Number.MAX_VALUE,
        s = -1;
    return Nx(e.seriesModels, function (e) {
      var l,
          h,
          u = e.getData().mapDimension(n, !0);

      if (e.getAxisTooltipData) {
        var c = e.getAxisTooltipData(u, t, i);
        h = c.dataIndices, l = c.nestestValue;
      } else {
        if (h = e.getData().indicesOfNearest(u[0], t, "category" === i.type ? .5 : null), !h.length) return;
        l = e.getData().get(u[0], h[0]);
      }

      if (null != l && isFinite(l)) {
        var d = t - l,
            f = Math.abs(d);
        o >= f && ((o > f || d >= 0 && 0 > s) && (o = f, s = d, r = l, a.length = 0), Nx(h, function (t) {
          a.push({
            seriesIndex: e.seriesIndex,
            dataIndexInside: t,
            dataIndex: e.getData().getRawIndex(t)
          });
        }));
      }
    }), {
      payloadBatch: a,
      snapToValue: r
    };
  }

  function $u(t, e, i, n) {
    t[e.key] = {
      value: i,
      payloadBatch: n
    };
  }

  function Qu(t, e, i, n) {
    var r = i.payloadBatch,
        a = e.axis,
        o = a.model,
        s = e.axisPointerModel;

    if (e.triggerTooltip && r.length) {
      var l = e.coordSys.model,
          h = kh(l),
          u = t.map[h];
      u || (u = t.map[h] = {
        coordSysId: l.id,
        coordSysIndex: l.componentIndex,
        coordSysType: l.type,
        coordSysMainType: l.mainType,
        dataByAxis: []
      }, t.list.push(u)), u.dataByAxis.push({
        axisDim: a.dim,
        axisIndex: o.componentIndex,
        axisType: o.type,
        axisId: o.id,
        value: n,
        valueLabelOpt: {
          precision: s.get("label.precision"),
          formatter: s.get("label.formatter")
        },
        seriesDataIndices: r.slice()
      });
    }
  }

  function Ju(t, e, i) {
    var n = i.axesInfo = [];
    Nx(e, function (e, i) {
      var r = e.axisPointerModel.option,
          a = t[i];
      a ? (!e.useHandle && (r.status = "show"), r.value = a.value, r.seriesDataIndices = (a.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && n.push({
        axisDim: e.axis.dim,
        axisIndex: e.axis.model.componentIndex,
        value: r.value
      });
    });
  }

  function tc(t, e, i, n) {
    if (rc(e) || !t.list.length) return void n({
      type: "hideTip"
    });
    var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
    n({
      type: "showTip",
      escapeConnect: !0,
      x: e[0],
      y: e[1],
      tooltipOption: i.tooltipOption,
      position: i.position,
      dataIndexInside: r.dataIndexInside,
      dataIndex: r.dataIndex,
      seriesIndex: r.seriesIndex,
      dataByCoordSys: t.list
    });
  }

  function ec(t, e, i) {
    var n = i.getZr(),
        r = "axisPointerLastHighlights",
        a = Ex(n)[r] || {},
        o = Ex(n)[r] = {};
    Nx(t, function (t) {
      var e = t.axisPointerModel.option;
      "show" === e.status && Nx(e.seriesDataIndices, function (t) {
        var e = t.seriesIndex + " | " + t.dataIndex;
        o[e] = t;
      });
    });
    var s = [],
        l = [];
    f(a, function (t, e) {
      !o[e] && l.push(t);
    }), f(o, function (t, e) {
      !a[e] && s.push(t);
    }), l.length && i.dispatchAction({
      type: "downplay",
      escapeConnect: !0,
      batch: l
    }), s.length && i.dispatchAction({
      type: "highlight",
      escapeConnect: !0,
      batch: s
    });
  }

  function ic(t, e) {
    for (var i = 0; i < (t || []).length; i++) {
      var n = t[i];
      if (e.axis.dim === n.axisDim && e.axis.model.componentIndex === n.axisIndex) return n;
    }
  }

  function nc(t) {
    var e = t.axis.model,
        i = {},
        n = i.axisDim = t.axis.dim;
    return i.axisIndex = i[n + "AxisIndex"] = e.componentIndex, i.axisName = i[n + "AxisName"] = e.name, i.axisId = i[n + "AxisId"] = e.id, i;
  }

  function rc(t) {
    return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1]);
  }

  function ac(t, e, i) {
    if (!yd.node) {
      var n = e.getZr();
      Bx(n).records || (Bx(n).records = {}), oc(n, e);
      var r = Bx(n).records[t] || (Bx(n).records[t] = {});
      r.handler = i;
    }
  }

  function oc(t, e) {
    function i(i, n) {
      t.on(i, function (i) {
        var r = uc(e);
        Vx(Bx(t).records, function (t) {
          t && n(t, i, r.dispatchAction);
        }), sc(r.pendings, e);
      });
    }

    Bx(t).initialized || (Bx(t).initialized = !0, i("click", y(hc, "click")), i("mousemove", y(hc, "mousemove")), i("globalout", lc));
  }

  function sc(t, e) {
    var i,
        n = t.showTip.length,
        r = t.hideTip.length;
    n ? i = t.showTip[n - 1] : r && (i = t.hideTip[r - 1]), i && (i.dispatchAction = null, e.dispatchAction(i));
  }

  function lc(t, e, i) {
    t.handler("leave", null, i);
  }

  function hc(t, e, i, n) {
    e.handler(t, i, n);
  }

  function uc(t) {
    var e = {
      showTip: [],
      hideTip: []
    },
        i = function i(n) {
      var r = e[n.type];
      r ? r.push(n) : (n.dispatchAction = i, t.dispatchAction(n));
    };

    return {
      dispatchAction: i,
      pendings: e
    };
  }

  function cc(t, e) {
    if (!yd.node) {
      var i = e.getZr(),
          n = (Bx(i).records || {})[t];
      n && (Bx(i).records[t] = null);
    }
  }

  function dc() {}

  function fc(t, e, i, n) {
    pc(Hx(i).lastProp, n) || (Hx(i).lastProp = n, e ? sr(i, n, t) : (i.stopAnimation(), i.attr(n)));
  }

  function pc(t, e) {
    if (b(t) && b(e)) {
      var i = !0;
      return f(e, function (e, n) {
        i = i && pc(t[n], e);
      }), !!i;
    }

    return t === e;
  }

  function gc(t, e) {
    t[e.get("label.show") ? "show" : "hide"]();
  }

  function vc(t) {
    return {
      position: t.position.slice(),
      rotation: t.rotation || 0
    };
  }

  function mc(t, e, i) {
    var n = e.get("z"),
        r = e.get("zlevel");
    t && t.traverse(function (t) {
      "group" !== t.type && (null != n && (t.z = n), null != r && (t.zlevel = r), t.silent = i);
    });
  }

  function yc(t) {
    var e,
        i = t.get("type"),
        n = t.getModel(i + "Style");
    return "line" === i ? (e = n.getLineStyle(), e.fill = null) : "shadow" === i && (e = n.getAreaStyle(), e.stroke = null), e;
  }

  function _c(t, e, i, n, r) {
    var a = i.get("value"),
        o = wc(a, e.axis, e.ecModel, i.get("seriesDataIndices"), {
      precision: i.get("label.precision"),
      formatter: i.get("label.formatter")
    }),
        s = i.getModel("label"),
        l = rv(s.get("padding") || 0),
        h = s.getFont(),
        u = de(o, h),
        c = r.position,
        d = u.width + l[1] + l[3],
        f = u.height + l[0] + l[2],
        p = r.align;
    "right" === p && (c[0] -= d), "center" === p && (c[0] -= d / 2);
    var g = r.verticalAlign;
    "bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), xc(c, d, f, n);
    var v = s.get("backgroundColor");
    v && "auto" !== v || (v = e.get("axisLine.lineStyle.color")), t.label = {
      shape: {
        x: 0,
        y: 0,
        width: d,
        height: f,
        r: s.get("borderRadius")
      },
      position: c.slice(),
      style: {
        text: o,
        textFont: h,
        textFill: s.getTextColor(),
        textPosition: "inside",
        fill: v,
        stroke: s.get("borderColor") || "transparent",
        lineWidth: s.get("borderWidth") || 0,
        shadowBlur: s.get("shadowBlur"),
        shadowColor: s.get("shadowColor"),
        shadowOffsetX: s.get("shadowOffsetX"),
        shadowOffsetY: s.get("shadowOffsetY")
      },
      z2: 10
    };
  }

  function xc(t, e, i, n) {
    var r = n.getWidth(),
        a = n.getHeight();
    t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + i, a) - i, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0);
  }

  function wc(t, e, i, n, r) {
    t = e.scale.parse(t);
    var a = e.scale.getLabel(t, {
      precision: r.precision
    }),
        o = r.formatter;

    if (o) {
      var s = {
        value: Js(e, t),
        seriesData: []
      };
      f(n, function (t) {
        var e = i.getSeriesByIndex(t.seriesIndex),
            n = t.dataIndexInside,
            r = e && e.getDataParams(n);
        r && s.seriesData.push(r);
      }), w(o) ? a = o.replace("{value}", a) : x(o) && (a = o(s));
    }

    return a;
  }

  function bc(t, e, i) {
    var n = at();
    return ut(n, n, i.rotation), ht(n, n, i.position), ur([t.dataToCoord(e), (i.labelOffset || 0) + (i.labelDirection || 1) * (i.labelMargin || 0)], n);
  }

  function Mc(t, e, i, n, r, a) {
    var o = O_.innerTextLayout(i.rotation, 0, i.labelDirection);
    i.labelMargin = r.get("label.margin"), _c(e, n, r, a, {
      position: bc(n.axis, t, i),
      align: o.textAlign,
      verticalAlign: o.textVerticalAlign
    });
  }

  function Sc(t, e, i) {
    return i = i || 0, {
      x1: t[i],
      y1: t[1 - i],
      x2: e[i],
      y2: e[1 - i]
    };
  }

  function Ic(t, e, i) {
    return i = i || 0, {
      x: t[i],
      y: t[1 - i],
      width: e[i],
      height: e[1 - i]
    };
  }

  function Tc(t, e) {
    var i = {};
    return i[e.dim + "AxisIndex"] = e.index, t.getCartesian(i);
  }

  function Dc(t) {
    return "x" === t.dim ? 0 : 1;
  }

  function Cc(t) {
    var e = "cubic-bezier(0.23, 1, 0.32, 1)",
        i = "left " + t + "s " + e + ",top " + t + "s " + e;
    return p(Zx, function (t) {
      return t + "transition:" + i;
    }).join(";");
  }

  function kc(t) {
    var e = [],
        i = t.get("fontSize"),
        n = t.getTextColor();
    return n && e.push("color:" + n), e.push("font:" + t.getFont()), i && e.push("line-height:" + Math.round(3 * i / 2) + "px"), Ux(["decoration", "align"], function (i) {
      var n = t.get(i);
      n && e.push("text-" + i + ":" + n);
    }), e.join(";");
  }

  function Ac(t) {
    var e = [],
        i = t.get("transitionDuration"),
        n = t.get("backgroundColor"),
        r = t.getModel("textStyle"),
        a = t.get("padding");
    return i && e.push(Cc(i)), n && (yd.canvasSupported ? e.push("background-Color:" + n) : (e.push("background-Color:#" + kt(n)), e.push("filter:alpha(opacity=70)"))), Ux(["width", "color", "radius"], function (i) {
      var n = "border-" + i,
          r = qx(n),
          a = t.get(r);
      null != a && e.push(n + ":" + a + ("color" === i ? "" : "px"));
    }), e.push(kc(r)), null != a && e.push("padding:" + rv(a).join("px ") + "px"), e.join(";") + ";";
  }

  function Lc(t, e) {
    if (yd.wxa) return null;
    var i = document.createElement("div"),
        n = this._zr = e.getZr();
    this.el = i, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(i), this._container = t, this._show = !1, this._hideTimeout;
    var r = this;
    i.onmouseenter = function () {
      r._enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0;
    }, i.onmousemove = function (e) {
      if (e = e || window.event, !r._enterable) {
        var i = n.handler;
        ri(t, e, !0), i.dispatch("mousemove", e);
      }
    }, i.onmouseleave = function () {
      r._enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1;
    };
  }

  function Pc(t) {
    for (var e = t.pop(); t.length;) {
      var i = t.pop();
      i && (vr.isInstance(i) && (i = i.get("tooltip", !0)), "string" == typeof i && (i = {
        formatter: i
      }), e = new vr(i, e, e.ecModel));
    }

    return e;
  }

  function Oc(t, e) {
    return t.dispatchAction || m(e.dispatchAction, e);
  }

  function Nc(t, e, i, n, r, a, o) {
    var s = Ec(i),
        l = s.width,
        h = s.height;
    return null != a && (t + l + a > n ? t -= l + a : t += a), null != o && (e + h + o > r ? e -= h + o : e += o), [t, e];
  }

  function Rc(t, e, i, n, r) {
    var a = Ec(i),
        o = a.width,
        s = a.height;
    return t = Math.min(t + o, n) - o, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e];
  }

  function Ec(t) {
    var e = t.clientWidth,
        i = t.clientHeight;

    if (document.defaultView && document.defaultView.getComputedStyle) {
      var n = document.defaultView.getComputedStyle(t);
      n && (e += parseInt(n.paddingLeft, 10) + parseInt(n.paddingRight, 10) + parseInt(n.borderLeftWidth, 10) + parseInt(n.borderRightWidth, 10), i += parseInt(n.paddingTop, 10) + parseInt(n.paddingBottom, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10));
    }

    return {
      width: e,
      height: i
    };
  }

  function zc(t, e, i) {
    var n = i[0],
        r = i[1],
        a = 5,
        o = 0,
        s = 0,
        l = e.width,
        h = e.height;

    switch (t) {
      case "inside":
        o = e.x + l / 2 - n / 2, s = e.y + h / 2 - r / 2;
        break;

      case "top":
        o = e.x + l / 2 - n / 2, s = e.y - r - a;
        break;

      case "bottom":
        o = e.x + l / 2 - n / 2, s = e.y + h + a;
        break;

      case "left":
        o = e.x - n - a, s = e.y + h / 2 - r / 2;
        break;

      case "right":
        o = e.x + l + a, s = e.y + h / 2 - r / 2;
    }

    return [o, s];
  }

  function Bc(t) {
    return "center" === t || "middle" === t;
  }

  function Vc(t, e) {
    return t && t.hasOwnProperty && t.hasOwnProperty(e);
  }

  function Fc(t) {
    var e = t.pieceList;
    t.hasSpecialVisual = !1, f(e, function (e, i) {
      e.originIndex = i, null != e.visual && (t.hasSpecialVisual = !0);
    });
  }

  function Hc(t) {
    var e = t.categories,
        i = t.visual,
        n = t.categoryMap = {};

    if (iw(e, function (t, e) {
      n[t] = e;
    }), !_(i)) {
      var r = [];
      b(i) ? iw(i, function (t, e) {
        var i = n[e];
        r[null != i ? i : rw] = t;
      }) : r[rw] = i, i = Kc(t, r);
    }

    for (var a = e.length - 1; a >= 0; a--) {
      null == i[a] && (delete n[e[a]], e.pop());
    }
  }

  function Wc(t, e) {
    var i = t.visual,
        n = [];
    b(i) ? iw(i, function (t) {
      n.push(t);
    }) : null != i && n.push(i);
    var r = {
      color: 1,
      symbol: 1
    };
    e || 1 !== n.length || r.hasOwnProperty(t.type) || (n[1] = n[0]), Kc(t, n);
  }

  function Gc(t) {
    return {
      applyVisual: function applyVisual(e, i, n) {
        e = this.mapValueToVisual(e), n("color", t(i("color"), e));
      },
      _doMap: Zc([0, 1])
    };
  }

  function Xc(t) {
    var e = this.option.visual;
    return e[Math.round(Mr(t, [0, 1], [0, e.length - 1], !0))] || {};
  }

  function Yc(t) {
    return function (e, i, n) {
      n(t, this.mapValueToVisual(e));
    };
  }

  function Uc(t) {
    var e = this.option.visual;
    return e[this.option.loop && t !== rw ? t % e.length : t];
  }

  function qc() {
    return this.option.visual[0];
  }

  function Zc(t) {
    return {
      linear: function linear(e) {
        return Mr(e, t, this.option.visual, !0);
      },
      category: Uc,
      piecewise: function piecewise(e, i) {
        var n = jc.call(this, i);
        return null == n && (n = Mr(e, t, this.option.visual, !0)), n;
      },
      fixed: qc
    };
  }

  function jc(t) {
    var e = this.option,
        i = e.pieceList;

    if (e.hasSpecialVisual) {
      var n = aw.findPieceIndex(t, i),
          r = i[n];
      if (r && r.visual) return r.visual[this.type];
    }
  }

  function Kc(t, e) {
    return t.visual = e, "color" === t.type && (t.parsedVisual = p(e, function (t) {
      return It(t);
    })), e;
  }

  function $c(t, e, i) {
    return t ? i >= e : i > e;
  }

  function Qc(t) {
    if (t) for (var e in t) {
      if (t.hasOwnProperty(e)) return !0;
    }
  }

  function Jc(t, e, i) {
    function r() {
      var t = function t() {};

      t.prototype.__hidden = t.prototype;
      var e = new t();
      return e;
    }

    var a = {};
    return lw(e, function (e) {
      var o = a[e] = r();
      lw(t[e], function (t, r) {
        if (aw.isValidType(r)) {
          var a = {
            type: r,
            visual: t
          };
          i && i(a, e), o[r] = new aw(a), "opacity" === r && (a = n(a), a.type = "colorAlpha", o.__hidden.__alphaForOpacity = new aw(a));
        }
      });
    }), a;
  }

  function td(t, e, i) {
    var r;
    f(i, function (t) {
      e.hasOwnProperty(t) && Qc(e[t]) && (r = !0);
    }), r && f(i, function (i) {
      e.hasOwnProperty(i) && Qc(e[i]) ? t[i] = n(e[i]) : delete t[i];
    });
  }

  function ed(t, e, i, n) {
    function r(t, r) {
      function o(t) {
        return r.getItemVisual(l, t);
      }

      function s(t, e) {
        r.setItemVisual(l, t, e);
      }

      null != n && (n = r.getDimension(n));

      for (var l; null != (l = t.next());) {
        var h = r.getRawDataItem(l);
        if (h && h.visualMap === !1) return;

        for (var u = null != n ? r.get(n, l, !0) : l, c = i(u), d = e[c], f = a[c], p = 0, g = f.length; g > p; p++) {
          var v = f[p];
          d[v] && d[v].applyVisual(u, o, s);
        }
      }
    }

    var a = {};
    return f(t, function (t) {
      var i = aw.prepareVisualTypes(e[t]);
      a[t] = i;
    }), {
      progress: r
    };
  }

  function id(t, e, i, n) {
    function r(t) {
      return l[t];
    }

    function a(t, e) {
      l[t] = e;
    }

    for (var o = e.targetVisuals[n], s = aw.prepareVisualTypes(o), l = {
      color: t.getData().getVisual("color")
    }, h = 0, u = s.length; u > h; h++) {
      var c = s[h],
          d = o["opacity" === c ? "__alphaForOpacity" : c];
      d && d.applyVisual(i, r, a);
    }

    return l.color;
  }

  function nd(t, e, i) {
    if (i[0] === i[1]) return i.slice();

    for (var n = 200, r = (i[1] - i[0]) / n, a = i[0], o = [], s = 0; n >= s && a < i[1]; s++) {
      o.push(a), a += r;
    }

    return o.push(i[1]), o;
  }

  function rd(t, e) {
    var i = t[e] - t[1 - e];
    return {
      span: Math.abs(i),
      sign: i > 0 ? -1 : 0 > i ? 1 : e ? -1 : 1
    };
  }

  function ad(t, e) {
    return Math.min(e[1], Math.max(e[0], t));
  }

  function od(t, e, i) {
    var n = t.option,
        r = n.align;
    if (null != r && "auto" !== r) return r;

    for (var a = {
      width: e.getWidth(),
      height: e.getHeight()
    }, o = "horizontal" === n.orient ? 1 : 0, s = [["left", "right", "width"], ["top", "bottom", "height"]], l = s[o], h = [0, null, 10], u = {}, c = 0; 3 > c; c++) {
      u[s[1 - o][c]] = h[c], u[l[c]] = 2 === c ? i[0] : n[l[c]];
    }

    var d = [["x", "width", 3], ["y", "height", 0]][o],
        f = Ur(u, a, n.padding);
    return l[(f.margin[d[2]] || 0) + f[d[0]] + .5 * f[d[1]] < .5 * a[d[1]] ? 0 : 1];
  }

  function sd(t) {
    return f(t || [], function () {
      null != t.dataIndex && (t.dataIndexInside = t.dataIndex, t.dataIndex = null);
    }), t;
  }

  function ld(t, e, i, n) {
    return new Lg({
      shape: {
        points: t
      },
      draggable: !!i,
      cursor: e,
      drift: i,
      onmousemove: function onmousemove(t) {
        Zf(t.event);
      },
      ondragend: n
    });
  }

  function hd(t, e) {
    return 0 === t ? [[0, 0], [e, 0], [e, -e]] : [[0, 0], [e, 0], [e, e]];
  }

  function ud(t, e, i, n) {
    return t ? [[0, -Tw(e, Dw(i, 0))], [kw, 0], [0, Tw(e, Dw(n - i, 0))]] : [[0, 0], [5, -5], [5, 5]];
  }

  function cd(t, e, i) {
    var n = Cw / 2,
        r = t.get("hoverLinkDataSize");
    return r && (n = Sw(r, e, i, !0) / 2), n;
  }

  function dd(t) {
    var e = t.get("hoverLinkOnHandle");
    return !!(null == e ? t.get("realtime") : e);
  }

  function fd(t) {
    return "vertical" === t ? "ns-resize" : "ew-resize";
  }

  function pd(t, e) {
    var i = t.inverse;
    ("vertical" === t.orient ? !i : i) && e.reverse();
  }

  var gd = 2311,
      vd = function vd() {
    return gd++;
  },
      md = {};

  md = "object" == (typeof wx === "undefined" ? "undefined" : _typeof(wx)) && "function" == typeof wx.getSystemInfoSync ? {
    browser: {},
    os: {},
    node: !1,
    wxa: !0,
    canvasSupported: !0,
    svgSupported: !1,
    touchEventsSupported: !0
  } : "undefined" == typeof document && "undefined" != typeof self ? {
    browser: {},
    os: {},
    node: !1,
    worker: !0,
    canvasSupported: !0
  } : "undefined" == typeof navigator ? {
    browser: {},
    os: {},
    node: !0,
    worker: !1,
    canvasSupported: !0,
    svgSupported: !0
  } : e(navigator.userAgent);

  var yd = md,
      _d = {
    "[object Function]": 1,
    "[object RegExp]": 1,
    "[object Date]": 1,
    "[object Error]": 1,
    "[object CanvasGradient]": 1,
    "[object CanvasPattern]": 1,
    "[object Image]": 1,
    "[object Canvas]": 1
  },
      xd = {
    "[object Int8Array]": 1,
    "[object Uint8Array]": 1,
    "[object Uint8ClampedArray]": 1,
    "[object Int16Array]": 1,
    "[object Uint16Array]": 1,
    "[object Int32Array]": 1,
    "[object Uint32Array]": 1,
    "[object Float32Array]": 1,
    "[object Float64Array]": 1
  },
      wd = Object.prototype.toString,
      bd = Array.prototype,
      Md = bd.forEach,
      Sd = bd.filter,
      Id = bd.slice,
      Td = bd.map,
      Dd = bd.reduce,
      Cd = {},
      kd = function kd() {
    return Cd.createCanvas();
  };

  Cd.createCanvas = function () {
    return document.createElement("canvas");
  };

  var Ad,
      Ld = "__ec_primitive__";
  E.prototype = {
    constructor: E,
    get: function get(t) {
      return this.hasOwnProperty(t) ? this[t] : null;
    },
    set: function set(t, e) {
      return this[t] = e;
    },
    each: function each(t, e) {
      void 0 !== e && (t = m(t, e));

      for (var i in this) {
        this.hasOwnProperty(i) && t(this[i], i);
      }
    },
    removeKey: function removeKey(t) {
      delete this[t];
    }
  };
  var Pd = "undefined" == typeof Float32Array ? Array : Float32Array,
      Od = j,
      Nd = K;
  tt.prototype = {
    constructor: tt,
    _dragStart: function _dragStart(t) {
      var e = t.target;
      e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(et(e, t), "dragstart", t.event));
    },
    _drag: function _drag(t) {
      var e = this._draggingTarget;

      if (e) {
        var i = t.offsetX,
            n = t.offsetY,
            r = i - this._x,
            a = n - this._y;
        this._x = i, this._y = n, e.drift(r, a, t), this.dispatchToElement(et(e, t), "drag", t.event);
        var o = this.findHover(i, n, e).target,
            s = this._dropTarget;
        this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(et(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(et(o, t), "dragenter", t.event));
      }
    },
    _dragEnd: function _dragEnd(t) {
      var e = this._draggingTarget;
      e && (e.dragging = !1), this.dispatchToElement(et(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(et(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
    }
  };

  var Rd = Array.prototype.slice,
      Ed = function Ed() {
    this._$handlers = {};
  };

  Ed.prototype = {
    constructor: Ed,
    one: function one(t, e, i) {
      var n = this._$handlers;
      if (!e || !t) return this;
      n[t] || (n[t] = []);

      for (var r = 0; r < n[t].length; r++) {
        if (n[t][r].h === e) return this;
      }

      return n[t].push({
        h: e,
        one: !0,
        ctx: i || this
      }), this;
    },
    on: function on(t, e, i) {
      var n = this._$handlers;
      if (!e || !t) return this;
      n[t] || (n[t] = []);

      for (var r = 0; r < n[t].length; r++) {
        if (n[t][r].h === e) return this;
      }

      return n[t].push({
        h: e,
        one: !1,
        ctx: i || this
      }), this;
    },
    isSilent: function isSilent(t) {
      var e = this._$handlers;
      return e[t] && e[t].length;
    },
    off: function off(t, e) {
      var i = this._$handlers;
      if (!t) return this._$handlers = {}, this;

      if (e) {
        if (i[t]) {
          for (var n = [], r = 0, a = i[t].length; a > r; r++) {
            i[t][r].h != e && n.push(i[t][r]);
          }

          i[t] = n;
        }

        i[t] && 0 === i[t].length && delete i[t];
      } else delete i[t];

      return this;
    },
    trigger: function trigger(t) {
      if (this._$handlers[t]) {
        var e = arguments,
            i = e.length;
        i > 3 && (e = Rd.call(e, 1));

        for (var n = this._$handlers[t], r = n.length, a = 0; r > a;) {
          switch (i) {
            case 1:
              n[a].h.call(n[a].ctx);
              break;

            case 2:
              n[a].h.call(n[a].ctx, e[1]);
              break;

            case 3:
              n[a].h.call(n[a].ctx, e[1], e[2]);
              break;

            default:
              n[a].h.apply(n[a].ctx, e);
          }

          n[a].one ? (n.splice(a, 1), r--) : a++;
        }
      }

      return this;
    },
    triggerWithContext: function triggerWithContext(t) {
      if (this._$handlers[t]) {
        var e = arguments,
            i = e.length;
        i > 4 && (e = Rd.call(e, 1, e.length - 1));

        for (var n = e[e.length - 1], r = this._$handlers[t], a = r.length, o = 0; a > o;) {
          switch (i) {
            case 1:
              r[o].h.call(n);
              break;

            case 2:
              r[o].h.call(n, e[1]);
              break;

            case 3:
              r[o].h.call(n, e[1], e[2]);
              break;

            default:
              r[o].h.apply(n, e);
          }

          r[o].one ? (r.splice(o, 1), a--) : o++;
        }
      }

      return this;
    }
  };
  var zd = "silent";

  nt.prototype.dispose = function () {};

  var Bd = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
      Vd = function Vd(t, e, i, n) {
    Ed.call(this), this.storage = t, this.painter = e, this.painterRoot = n, i = i || new nt(), this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, tt.call(this), this.setHandlerProxy(i);
  };

  Vd.prototype = {
    constructor: Vd,
    setHandlerProxy: function setHandlerProxy(t) {
      this.proxy && this.proxy.dispose(), t && (f(Bd, function (e) {
        t.on && t.on(e, this[e], this);
      }, this), t.handler = this), this.proxy = t;
    },
    mousemove: function mousemove(t) {
      var e = t.zrX,
          i = t.zrY,
          n = this._hovered,
          r = n.target;
      r && !r.__zr && (n = this.findHover(n.x, n.y), r = n.target);
      var a = this._hovered = this.findHover(e, i),
          o = a.target,
          s = this.proxy;
      s.setCursor && s.setCursor(o ? o.cursor : "default"), r && o !== r && this.dispatchToElement(n, "mouseout", t), this.dispatchToElement(a, "mousemove", t), o && o !== r && this.dispatchToElement(a, "mouseover", t);
    },
    mouseout: function mouseout(t) {
      this.dispatchToElement(this._hovered, "mouseout", t);
      var e,
          i = t.toElement || t.relatedTarget;

      do {
        i = i && i.parentNode;
      } while (i && 9 != i.nodeType && !(e = i === this.painterRoot));

      !e && this.trigger("globalout", {
        event: t
      });
    },
    resize: function resize() {
      this._hovered = {};
    },
    dispatch: function dispatch(t, e) {
      var i = this[t];
      i && i.call(this, e);
    },
    dispose: function dispose() {
      this.proxy.dispose(), this.storage = this.proxy = this.painter = null;
    },
    setCursorStyle: function setCursorStyle(t) {
      var e = this.proxy;
      e.setCursor && e.setCursor(t);
    },
    dispatchToElement: function dispatchToElement(t, e, i) {
      t = t || {};
      var n = t.target;

      if (!n || !n.silent) {
        for (var r = "on" + e, a = it(e, t, i); n && (n[r] && (a.cancelBubble = n[r].call(n, a)), n.trigger(e, a), n = n.parent, !a.cancelBubble);) {
          ;
        }

        a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function (t) {
          "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a);
        }));
      }
    },
    findHover: function findHover(t, e, i) {
      for (var n = this.storage.getDisplayList(), r = {
        x: t,
        y: e
      }, a = n.length - 1; a >= 0; a--) {
        var o;

        if (n[a] !== i && !n[a].ignore && (o = rt(n[a], t, e)) && (!r.topTarget && (r.topTarget = n[a]), o !== zd)) {
          r.target = n[a];
          break;
        }
      }

      return r;
    }
  }, f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
    Vd.prototype[t] = function (e) {
      var i = this.findHover(e.zrX, e.zrY),
          n = i.target;
      if ("mousedown" === t) this._downEl = n, this._downPoint = [e.zrX, e.zrY], this._upEl = n;else if ("mouseup" === t) this._upEl = n;else if ("click" === t) {
        if (this._downEl !== this._upEl || !this._downPoint || Od(this._downPoint, [e.zrX, e.zrY]) > 4) return;
        this._downPoint = null;
      }
      this.dispatchToElement(i, t, e);
    };
  }), c(Vd, Ed), c(Vd, tt);

  var Fd = "undefined" == typeof Float32Array ? Array : Float32Array,
      Hd = ot,
      Wd = 5e-5,
      Gd = function Gd(t) {
    t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null;
  },
      Xd = Gd.prototype;

  Xd.transform = null, Xd.needLocalTransform = function () {
    return ft(this.rotation) || ft(this.position[0]) || ft(this.position[1]) || ft(this.scale[0] - 1) || ft(this.scale[1] - 1);
  }, Xd.updateTransform = function () {
    var t = this.parent,
        e = t && t.transform,
        i = this.needLocalTransform(),
        n = this.transform;
    return i || e ? (n = n || at(), i ? this.getLocalTransform(n) : Hd(n), e && (i ? lt(n, t.transform, n) : st(n, t.transform)), this.transform = n, this.invTransform = this.invTransform || at(), void dt(this.invTransform, n)) : void (n && Hd(n));
  }, Xd.getLocalTransform = function (t) {
    return Gd.getLocalTransform(this, t);
  }, Xd.setTransform = function (t) {
    var e = this.transform,
        i = t.dpr || 1;
    e ? t.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : t.setTransform(i, 0, 0, i, 0, 0);
  }, Xd.restoreTransform = function (t) {
    var e = t.dpr || 1;
    t.setTransform(e, 0, 0, e, 0, 0);
  };
  var Yd = [];
  Xd.decomposeTransform = function () {
    if (this.transform) {
      var t = this.parent,
          e = this.transform;
      t && t.transform && (lt(Yd, t.invTransform, e), e = Yd);
      var i = e[0] * e[0] + e[1] * e[1],
          n = e[2] * e[2] + e[3] * e[3],
          r = this.position,
          a = this.scale;
      ft(i - 1) && (i = Math.sqrt(i)), ft(n - 1) && (n = Math.sqrt(n)), e[0] < 0 && (i = -i), e[3] < 0 && (n = -n), r[0] = e[4], r[1] = e[5], a[0] = i, a[1] = n, this.rotation = Math.atan2(-e[1] / n, e[0] / i);
    }
  }, Xd.getGlobalScale = function () {
    var t = this.transform;
    if (!t) return [1, 1];
    var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        i = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
    return t[0] < 0 && (e = -e), t[3] < 0 && (i = -i), [e, i];
  }, Xd.transformCoordToLocal = function (t, e) {
    var i = [t, e],
        n = this.invTransform;
    return n && $(i, i, n), i;
  }, Xd.transformCoordToGlobal = function (t, e) {
    var i = [t, e],
        n = this.transform;
    return n && $(i, i, n), i;
  }, Gd.getLocalTransform = function (t, e) {
    e = e || [], Hd(e);
    var i = t.origin,
        n = t.scale || [1, 1],
        r = t.rotation || 0,
        a = t.position || [0, 0];
    return i && (e[4] -= i[0], e[5] -= i[1]), ct(e, e, n), r && ut(e, e, r), i && (e[4] += i[0], e[5] += i[1]), e[4] += a[0], e[5] += a[1], e;
  };
  var Ud = {
    linear: function linear(t) {
      return t;
    },
    quadraticIn: function quadraticIn(t) {
      return t * t;
    },
    quadraticOut: function quadraticOut(t) {
      return t * (2 - t);
    },
    quadraticInOut: function quadraticInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
    },
    cubicIn: function cubicIn(t) {
      return t * t * t;
    },
    cubicOut: function cubicOut(t) {
      return --t * t * t + 1;
    },
    cubicInOut: function cubicInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
    },
    quarticIn: function quarticIn(t) {
      return t * t * t * t;
    },
    quarticOut: function quarticOut(t) {
      return 1 - --t * t * t * t;
    },
    quarticInOut: function quarticInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
    },
    quinticIn: function quinticIn(t) {
      return t * t * t * t * t;
    },
    quinticOut: function quinticOut(t) {
      return --t * t * t * t * t + 1;
    },
    quinticInOut: function quinticInOut(t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
    },
    sinusoidalIn: function sinusoidalIn(t) {
      return 1 - Math.cos(t * Math.PI / 2);
    },
    sinusoidalOut: function sinusoidalOut(t) {
      return Math.sin(t * Math.PI / 2);
    },
    sinusoidalInOut: function sinusoidalInOut(t) {
      return .5 * (1 - Math.cos(Math.PI * t));
    },
    exponentialIn: function exponentialIn(t) {
      return 0 === t ? 0 : Math.pow(1024, t - 1);
    },
    exponentialOut: function exponentialOut(t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
    },
    exponentialInOut: function exponentialInOut(t) {
      return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2);
    },
    circularIn: function circularIn(t) {
      return 1 - Math.sqrt(1 - t * t);
    },
    circularOut: function circularOut(t) {
      return Math.sqrt(1 - --t * t);
    },
    circularInOut: function circularInOut(t) {
      return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    elasticIn: function elasticIn(t) {
      var e,
          i = .1,
          n = .4;
      return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n)));
    },
    elasticOut: function elasticOut(t) {
      var e,
          i = .1,
          n = .4;
      return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / n) + 1);
    },
    elasticInOut: function elasticInOut(t) {
      var e,
          i = .1,
          n = .4;
      return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n) * .5 + 1);
    },
    backIn: function backIn(t) {
      var e = 1.70158;
      return t * t * ((e + 1) * t - e);
    },
    backOut: function backOut(t) {
      var e = 1.70158;
      return --t * t * ((e + 1) * t + e) + 1;
    },
    backInOut: function backInOut(t) {
      var e = 2.5949095;
      return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
    },
    bounceIn: function bounceIn(t) {
      return 1 - Ud.bounceOut(1 - t);
    },
    bounceOut: function bounceOut(t) {
      return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    },
    bounceInOut: function bounceInOut(t) {
      return .5 > t ? .5 * Ud.bounceIn(2 * t) : .5 * Ud.bounceOut(2 * t - 1) + .5;
    }
  };
  pt.prototype = {
    constructor: pt,
    step: function step(t, e) {
      if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void (this._pausedTime += e);
      var i = (t - this._startTime - this._pausedTime) / this._life;

      if (!(0 > i)) {
        i = Math.min(i, 1);
        var n = this.easing,
            r = "string" == typeof n ? Ud[n] : n,
            a = "function" == typeof r ? r(i) : i;
        return this.fire("frame", a), 1 == i ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null;
      }
    },
    restart: function restart(t) {
      var e = (t - this._startTime - this._pausedTime) % this._life;
      this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1;
    },
    fire: function fire(t, e) {
      t = "on" + t, this[t] && this[t](this._target, e);
    },
    pause: function pause() {
      this._paused = !0;
    },
    resume: function resume() {
      this._paused = !1;
    }
  };

  var qd = function qd() {
    this.head = null, this.tail = null, this._len = 0;
  },
      Zd = qd.prototype;

  Zd.insert = function (t) {
    var e = new jd(t);
    return this.insertEntry(e), e;
  }, Zd.insertEntry = function (t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
  }, Zd.remove = function (t) {
    var e = t.prev,
        i = t.next;
    e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--;
  }, Zd.len = function () {
    return this._len;
  }, Zd.clear = function () {
    this.head = this.tail = null, this._len = 0;
  };

  var jd = function jd(t) {
    this.value = t, this.next, this.prev;
  },
      Kd = function Kd(t) {
    this._list = new qd(), this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null;
  },
      $d = Kd.prototype;

  $d.put = function (t, e) {
    var i = this._list,
        n = this._map,
        r = null;

    if (null == n[t]) {
      var a = i.len(),
          o = this._lastRemovedEntry;

      if (a >= this._maxSize && a > 0) {
        var s = i.head;
        i.remove(s), delete n[s.key], r = s.value, this._lastRemovedEntry = s;
      }

      o ? o.value = e : o = new jd(e), o.key = t, i.insertEntry(o), n[t] = o;
    }

    return r;
  }, $d.get = function (t) {
    var e = this._map[t],
        i = this._list;
    return null != e ? (e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value) : void 0;
  }, $d.clear = function () {
    this._list.clear(), this._map = {};
  };

  var Qd = {
    transparent: [0, 0, 0, 0],
    aliceblue: [240, 248, 255, 1],
    antiquewhite: [250, 235, 215, 1],
    aqua: [0, 255, 255, 1],
    aquamarine: [127, 255, 212, 1],
    azure: [240, 255, 255, 1],
    beige: [245, 245, 220, 1],
    bisque: [255, 228, 196, 1],
    black: [0, 0, 0, 1],
    blanchedalmond: [255, 235, 205, 1],
    blue: [0, 0, 255, 1],
    blueviolet: [138, 43, 226, 1],
    brown: [165, 42, 42, 1],
    burlywood: [222, 184, 135, 1],
    cadetblue: [95, 158, 160, 1],
    chartreuse: [127, 255, 0, 1],
    chocolate: [210, 105, 30, 1],
    coral: [255, 127, 80, 1],
    cornflowerblue: [100, 149, 237, 1],
    cornsilk: [255, 248, 220, 1],
    crimson: [220, 20, 60, 1],
    cyan: [0, 255, 255, 1],
    darkblue: [0, 0, 139, 1],
    darkcyan: [0, 139, 139, 1],
    darkgoldenrod: [184, 134, 11, 1],
    darkgray: [169, 169, 169, 1],
    darkgreen: [0, 100, 0, 1],
    darkgrey: [169, 169, 169, 1],
    darkkhaki: [189, 183, 107, 1],
    darkmagenta: [139, 0, 139, 1],
    darkolivegreen: [85, 107, 47, 1],
    darkorange: [255, 140, 0, 1],
    darkorchid: [153, 50, 204, 1],
    darkred: [139, 0, 0, 1],
    darksalmon: [233, 150, 122, 1],
    darkseagreen: [143, 188, 143, 1],
    darkslateblue: [72, 61, 139, 1],
    darkslategray: [47, 79, 79, 1],
    darkslategrey: [47, 79, 79, 1],
    darkturquoise: [0, 206, 209, 1],
    darkviolet: [148, 0, 211, 1],
    deeppink: [255, 20, 147, 1],
    deepskyblue: [0, 191, 255, 1],
    dimgray: [105, 105, 105, 1],
    dimgrey: [105, 105, 105, 1],
    dodgerblue: [30, 144, 255, 1],
    firebrick: [178, 34, 34, 1],
    floralwhite: [255, 250, 240, 1],
    forestgreen: [34, 139, 34, 1],
    fuchsia: [255, 0, 255, 1],
    gainsboro: [220, 220, 220, 1],
    ghostwhite: [248, 248, 255, 1],
    gold: [255, 215, 0, 1],
    goldenrod: [218, 165, 32, 1],
    gray: [128, 128, 128, 1],
    green: [0, 128, 0, 1],
    greenyellow: [173, 255, 47, 1],
    grey: [128, 128, 128, 1],
    honeydew: [240, 255, 240, 1],
    hotpink: [255, 105, 180, 1],
    indianred: [205, 92, 92, 1],
    indigo: [75, 0, 130, 1],
    ivory: [255, 255, 240, 1],
    khaki: [240, 230, 140, 1],
    lavender: [230, 230, 250, 1],
    lavenderblush: [255, 240, 245, 1],
    lawngreen: [124, 252, 0, 1],
    lemonchiffon: [255, 250, 205, 1],
    lightblue: [173, 216, 230, 1],
    lightcoral: [240, 128, 128, 1],
    lightcyan: [224, 255, 255, 1],
    lightgoldenrodyellow: [250, 250, 210, 1],
    lightgray: [211, 211, 211, 1],
    lightgreen: [144, 238, 144, 1],
    lightgrey: [211, 211, 211, 1],
    lightpink: [255, 182, 193, 1],
    lightsalmon: [255, 160, 122, 1],
    lightseagreen: [32, 178, 170, 1],
    lightskyblue: [135, 206, 250, 1],
    lightslategray: [119, 136, 153, 1],
    lightslategrey: [119, 136, 153, 1],
    lightsteelblue: [176, 196, 222, 1],
    lightyellow: [255, 255, 224, 1],
    lime: [0, 255, 0, 1],
    limegreen: [50, 205, 50, 1],
    linen: [250, 240, 230, 1],
    magenta: [255, 0, 255, 1],
    maroon: [128, 0, 0, 1],
    mediumaquamarine: [102, 205, 170, 1],
    mediumblue: [0, 0, 205, 1],
    mediumorchid: [186, 85, 211, 1],
    mediumpurple: [147, 112, 219, 1],
    mediumseagreen: [60, 179, 113, 1],
    mediumslateblue: [123, 104, 238, 1],
    mediumspringgreen: [0, 250, 154, 1],
    mediumturquoise: [72, 209, 204, 1],
    mediumvioletred: [199, 21, 133, 1],
    midnightblue: [25, 25, 112, 1],
    mintcream: [245, 255, 250, 1],
    mistyrose: [255, 228, 225, 1],
    moccasin: [255, 228, 181, 1],
    navajowhite: [255, 222, 173, 1],
    navy: [0, 0, 128, 1],
    oldlace: [253, 245, 230, 1],
    olive: [128, 128, 0, 1],
    olivedrab: [107, 142, 35, 1],
    orange: [255, 165, 0, 1],
    orangered: [255, 69, 0, 1],
    orchid: [218, 112, 214, 1],
    palegoldenrod: [238, 232, 170, 1],
    palegreen: [152, 251, 152, 1],
    paleturquoise: [175, 238, 238, 1],
    palevioletred: [219, 112, 147, 1],
    papayawhip: [255, 239, 213, 1],
    peachpuff: [255, 218, 185, 1],
    peru: [205, 133, 63, 1],
    pink: [255, 192, 203, 1],
    plum: [221, 160, 221, 1],
    powderblue: [176, 224, 230, 1],
    purple: [128, 0, 128, 1],
    red: [255, 0, 0, 1],
    rosybrown: [188, 143, 143, 1],
    royalblue: [65, 105, 225, 1],
    saddlebrown: [139, 69, 19, 1],
    salmon: [250, 128, 114, 1],
    sandybrown: [244, 164, 96, 1],
    seagreen: [46, 139, 87, 1],
    seashell: [255, 245, 238, 1],
    sienna: [160, 82, 45, 1],
    silver: [192, 192, 192, 1],
    skyblue: [135, 206, 235, 1],
    slateblue: [106, 90, 205, 1],
    slategray: [112, 128, 144, 1],
    slategrey: [112, 128, 144, 1],
    snow: [255, 250, 250, 1],
    springgreen: [0, 255, 127, 1],
    steelblue: [70, 130, 180, 1],
    tan: [210, 180, 140, 1],
    teal: [0, 128, 128, 1],
    thistle: [216, 191, 216, 1],
    tomato: [255, 99, 71, 1],
    turquoise: [64, 224, 208, 1],
    violet: [238, 130, 238, 1],
    wheat: [245, 222, 179, 1],
    white: [255, 255, 255, 1],
    whitesmoke: [245, 245, 245, 1],
    yellow: [255, 255, 0, 1],
    yellowgreen: [154, 205, 50, 1]
  },
      Jd = new Kd(20),
      tf = null,
      ef = Array.prototype.slice,
      nf = function nf(t, e, i, n) {
    this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = i || Nt, this._setter = n || Rt, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = [];
  };

  nf.prototype = {
    when: function when(t, e) {
      var i = this._tracks;

      for (var n in e) {
        if (e.hasOwnProperty(n)) {
          if (!i[n]) {
            i[n] = [];

            var r = this._getter(this._target, n);

            if (null == r) continue;
            0 !== t && i[n].push({
              time: 0,
              value: Gt(r)
            });
          }

          i[n].push({
            time: t,
            value: e[n]
          });
        }
      }

      return this;
    },
    during: function during(t) {
      return this._onframeList.push(t), this;
    },
    pause: function pause() {
      for (var t = 0; t < this._clipList.length; t++) {
        this._clipList[t].pause();
      }

      this._paused = !0;
    },
    resume: function resume() {
      for (var t = 0; t < this._clipList.length; t++) {
        this._clipList[t].resume();
      }

      this._paused = !1;
    },
    isPaused: function isPaused() {
      return !!this._paused;
    },
    _doneCallback: function _doneCallback() {
      this._tracks = {}, this._clipList.length = 0;

      for (var t = this._doneList, e = t.length, i = 0; e > i; i++) {
        t[i].call(this);
      }
    },
    start: function start(t, e) {
      var i,
          n = this,
          r = 0,
          a = function a() {
        r--, r || n._doneCallback();
      };

      for (var o in this._tracks) {
        if (this._tracks.hasOwnProperty(o)) {
          var s = Ut(this, t, a, this._tracks[o], o, e);
          s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), i = s);
        }
      }

      if (i) {
        var l = i.onframe;

        i.onframe = function (t, e) {
          l(t, e);

          for (var i = 0; i < n._onframeList.length; i++) {
            n._onframeList[i](t, e);
          }
        };
      }

      return r || this._doneCallback(), this;
    },
    stop: function stop(t) {
      for (var e = this._clipList, i = this.animation, n = 0; n < e.length; n++) {
        var r = e[n];
        t && r.onframe(this._target, 1), i && i.removeClip(r);
      }

      e.length = 0;
    },
    delay: function delay(t) {
      return this._delay = t, this;
    },
    done: function done(t) {
      return t && this._doneList.push(t), this;
    },
    getClips: function getClips() {
      return this._clipList;
    }
  };
  var rf = 1;
  "undefined" != typeof window && (rf = Math.max(window.devicePixelRatio || 1, 1));

  var af = 0,
      of = rf,
      sf = function sf() {};

  1 === af ? sf = function sf() {
    for (var t in arguments) {
      throw new Error(arguments[t]);
    }
  } : af > 1 && (sf = function sf() {
    for (var t in arguments) {
      console.log(arguments[t]);
    }
  });

  var lf = sf,
      hf = function hf() {
    this.animators = [];
  };

  hf.prototype = {
    constructor: hf,
    animate: function animate(t, e) {
      var i,
          n = !1,
          r = this,
          a = this.__zr;

      if (t) {
        var o = t.split("."),
            s = r;
        n = "shape" === o[0];

        for (var l = 0, u = o.length; u > l; l++) {
          s && (s = s[o[l]]);
        }

        s && (i = s);
      } else i = r;

      if (!i) return void lf('Property "' + t + '" is not existed in element ' + r.id);
      var c = r.animators,
          d = new nf(i, e);
      return d.during(function () {
        r.dirty(n);
      }).done(function () {
        c.splice(h(c, d), 1);
      }), c.push(d), a && a.animation.addAnimator(d), d;
    },
    stopAnimation: function stopAnimation(t) {
      for (var e = this.animators, i = e.length, n = 0; i > n; n++) {
        e[n].stop(t);
      }

      return e.length = 0, this;
    },
    animateTo: function animateTo(t, e, i, n, r, a) {
      function o() {
        l--, l || r && r();
      }

      w(i) ? (r = n, n = i, i = 0) : x(n) ? (r = n, n = "linear", i = 0) : x(i) ? (r = i, i = 0) : x(e) ? (r = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, i);
      var s = this.animators.slice(),
          l = s.length;
      l || r && r();

      for (var h = 0; h < s.length; h++) {
        s[h].done(o).start(n, a);
      }
    },
    _animateToShallow: function _animateToShallow(t, e, i, n, r) {
      var a = {},
          o = 0;

      for (var s in i) {
        if (i.hasOwnProperty(s)) if (null != e[s]) b(i[s]) && !d(i[s]) ? this._animateToShallow(t ? t + "." + s : s, e[s], i[s], n, r) : (a[s] = i[s], o++);else if (null != i[s]) if (t) {
          var l = {};
          l[t] = {}, l[t][s] = i[s], this.attr(l);
        } else this.attr(s, i[s]);
      }

      return o > 0 && this.animate(t, !1).when(null == n ? 500 : n, a).delay(r || 0), this;
    }
  };

  var uf = function uf(t) {
    Gd.call(this, t), Ed.call(this, t), hf.call(this, t), this.id = t.id || vd();
  };

  uf.prototype = {
    type: "element",
    name: "",
    __zr: null,
    ignore: !1,
    clipPath: null,
    isGroup: !1,
    drift: function drift(t, e) {
      switch (this.draggable) {
        case "horizontal":
          e = 0;
          break;

        case "vertical":
          t = 0;
      }

      var i = this.transform;
      i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty(!1);
    },
    beforeUpdate: function beforeUpdate() {},
    afterUpdate: function afterUpdate() {},
    update: function update() {
      this.updateTransform();
    },
    traverse: function traverse() {},
    attrKV: function attrKV(t, e) {
      if ("position" === t || "scale" === t || "origin" === t) {
        if (e) {
          var i = this[t];
          i || (i = this[t] = []), i[0] = e[0], i[1] = e[1];
        }
      } else this[t] = e;
    },
    hide: function hide() {
      this.ignore = !0, this.__zr && this.__zr.refresh();
    },
    show: function show() {
      this.ignore = !1, this.__zr && this.__zr.refresh();
    },
    attr: function attr(t, e) {
      if ("string" == typeof t) this.attrKV(t, e);else if (b(t)) for (var i in t) {
        t.hasOwnProperty(i) && this.attrKV(i, t[i]);
      }
      return this.dirty(!1), this;
    },
    setClipPath: function setClipPath(t) {
      var e = this.__zr;
      e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1);
    },
    removeClipPath: function removeClipPath() {
      var t = this.clipPath;
      t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1));
    },
    addSelfToZr: function addSelfToZr(t) {
      this.__zr = t;
      var e = this.animators;
      if (e) for (var i = 0; i < e.length; i++) {
        t.animation.addAnimator(e[i]);
      }
      this.clipPath && this.clipPath.addSelfToZr(t);
    },
    removeSelfFromZr: function removeSelfFromZr(t) {
      this.__zr = null;
      var e = this.animators;
      if (e) for (var i = 0; i < e.length; i++) {
        t.animation.removeAnimator(e[i]);
      }
      this.clipPath && this.clipPath.removeSelfFromZr(t);
    }
  }, c(uf, hf), c(uf, Gd), c(uf, Ed);
  var cf = $,
      df = Math.min,
      ff = Math.max;
  qt.prototype = {
    constructor: qt,
    union: function union(t) {
      var e = df(t.x, this.x),
          i = df(t.y, this.y);
      this.width = ff(t.x + t.width, this.x + this.width) - e, this.height = ff(t.y + t.height, this.y + this.height) - i, this.x = e, this.y = i;
    },
    applyTransform: function () {
      var t = [],
          e = [],
          i = [],
          n = [];
      return function (r) {
        if (r) {
          t[0] = i[0] = this.x, t[1] = n[1] = this.y, e[0] = n[0] = this.x + this.width, e[1] = i[1] = this.y + this.height, cf(t, t, r), cf(e, e, r), cf(i, i, r), cf(n, n, r), this.x = df(t[0], e[0], i[0], n[0]), this.y = df(t[1], e[1], i[1], n[1]);
          var a = ff(t[0], e[0], i[0], n[0]),
              o = ff(t[1], e[1], i[1], n[1]);
          this.width = a - this.x, this.height = o - this.y;
        }
      };
    }(),
    calculateTransform: function calculateTransform(t) {
      var e = this,
          i = t.width / e.width,
          n = t.height / e.height,
          r = at();
      return ht(r, r, [-e.x, -e.y]), ct(r, r, [i, n]), ht(r, r, [t.x, t.y]), r;
    },
    intersect: function intersect(t) {
      if (!t) return !1;
      t instanceof qt || (t = qt.create(t));
      var e = this,
          i = e.x,
          n = e.x + e.width,
          r = e.y,
          a = e.y + e.height,
          o = t.x,
          s = t.x + t.width,
          l = t.y,
          h = t.y + t.height;
      return !(o > n || i > s || l > a || r > h);
    },
    contain: function contain(t, e) {
      var i = this;
      return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height;
    },
    clone: function clone() {
      return new qt(this.x, this.y, this.width, this.height);
    },
    copy: function copy(t) {
      this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height;
    },
    plain: function plain() {
      return {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height
      };
    }
  }, qt.create = function (t) {
    return new qt(t.x, t.y, t.width, t.height);
  };

  var pf = function pf(t) {
    t = t || {}, uf.call(this, t);

    for (var e in t) {
      t.hasOwnProperty(e) && (this[e] = t[e]);
    }

    this._children = [], this.__storage = null, this.__dirty = !0;
  };

  pf.prototype = {
    constructor: pf,
    isGroup: !0,
    type: "group",
    silent: !1,
    children: function children() {
      return this._children.slice();
    },
    childAt: function childAt(t) {
      return this._children[t];
    },
    childOfName: function childOfName(t) {
      for (var e = this._children, i = 0; i < e.length; i++) {
        if (e[i].name === t) return e[i];
      }
    },
    childCount: function childCount() {
      return this._children.length;
    },
    add: function add(t) {
      return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this;
    },
    addBefore: function addBefore(t, e) {
      if (t && t !== this && t.parent !== this && e && e.parent === this) {
        var i = this._children,
            n = i.indexOf(e);
        n >= 0 && (i.splice(n, 0, t), this._doAdd(t));
      }

      return this;
    },
    _doAdd: function _doAdd(t) {
      t.parent && t.parent.remove(t), t.parent = this;
      var e = this.__storage,
          i = this.__zr;
      e && e !== t.__storage && (e.addToStorage(t), t instanceof pf && t.addChildrenToStorage(e)), i && i.refresh();
    },
    remove: function remove(t) {
      var e = this.__zr,
          i = this.__storage,
          n = this._children,
          r = h(n, t);
      return 0 > r ? this : (n.splice(r, 1), t.parent = null, i && (i.delFromStorage(t), t instanceof pf && t.delChildrenFromStorage(i)), e && e.refresh(), this);
    },
    removeAll: function removeAll() {
      var t,
          e,
          i = this._children,
          n = this.__storage;

      for (e = 0; e < i.length; e++) {
        t = i[e], n && (n.delFromStorage(t), t instanceof pf && t.delChildrenFromStorage(n)), t.parent = null;
      }

      return i.length = 0, this;
    },
    eachChild: function eachChild(t, e) {
      for (var i = this._children, n = 0; n < i.length; n++) {
        var r = i[n];
        t.call(e, r, n);
      }

      return this;
    },
    traverse: function traverse(t, e) {
      for (var i = 0; i < this._children.length; i++) {
        var n = this._children[i];
        t.call(e, n), "group" === n.type && n.traverse(t, e);
      }

      return this;
    },
    addChildrenToStorage: function addChildrenToStorage(t) {
      for (var e = 0; e < this._children.length; e++) {
        var i = this._children[e];
        t.addToStorage(i), i instanceof pf && i.addChildrenToStorage(t);
      }
    },
    delChildrenFromStorage: function delChildrenFromStorage(t) {
      for (var e = 0; e < this._children.length; e++) {
        var i = this._children[e];
        t.delFromStorage(i), i instanceof pf && i.delChildrenFromStorage(t);
      }
    },
    dirty: function dirty() {
      return this.__dirty = !0, this.__zr && this.__zr.refresh(), this;
    },
    getBoundingRect: function getBoundingRect(t) {
      for (var e = null, i = new qt(0, 0, 0, 0), n = t || this._children, r = [], a = 0; a < n.length; a++) {
        var o = n[a];

        if (!o.ignore && !o.invisible) {
          var s = o.getBoundingRect(),
              l = o.getLocalTransform(r);
          l ? (i.copy(s), i.applyTransform(l), e = e || i.clone(), e.union(i)) : (e = e || s.clone(), e.union(s));
        }
      }

      return e || i;
    }
  }, u(pf, uf);

  var gf = 32,
      vf = 7,
      mf = function mf() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  };

  mf.prototype = {
    constructor: mf,
    traverse: function traverse(t, e) {
      for (var i = 0; i < this._roots.length; i++) {
        this._roots[i].traverse(t, e);
      }
    },
    getDisplayList: function getDisplayList(t, e) {
      return e = e || !1, t && this.updateDisplayList(e), this._displayList;
    },
    updateDisplayList: function updateDisplayList(t) {
      this._displayListLen = 0;

      for (var e = this._roots, i = this._displayList, n = 0, r = e.length; r > n; n++) {
        this._updateAndAddDisplayable(e[n], null, t);
      }

      i.length = this._displayListLen, yd.canvasSupported && ee(i, ie);
    },
    _updateAndAddDisplayable: function _updateAndAddDisplayable(t, e, i) {
      if (!t.ignore || i) {
        t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
        var n = t.clipPath;

        if (n) {
          e = e ? e.slice() : [];

          for (var r = n, a = t; r;) {
            r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath;
          }
        }

        if (t.isGroup) {
          for (var o = t._children, s = 0; s < o.length; s++) {
            var l = o[s];
            t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, i);
          }

          t.__dirty = !1;
        } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t;
      }
    },
    addRoot: function addRoot(t) {
      t.__storage !== this && (t instanceof pf && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t));
    },
    delRoot: function delRoot(t) {
      if (null == t) {
        for (var e = 0; e < this._roots.length; e++) {
          var i = this._roots[e];
          i instanceof pf && i.delChildrenFromStorage(this);
        }

        return this._roots = [], this._displayList = [], void (this._displayListLen = 0);
      }

      if (t instanceof Array) for (var e = 0, n = t.length; n > e; e++) {
        this.delRoot(t[e]);
      } else {
        var r = h(this._roots, t);
        r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof pf && t.delChildrenFromStorage(this));
      }
    },
    addToStorage: function addToStorage(t) {
      return t && (t.__storage = this, t.dirty(!1)), this;
    },
    delFromStorage: function delFromStorage(t) {
      return t && (t.__storage = null), this;
    },
    dispose: function dispose() {
      this._renderList = this._roots = null;
    },
    displayableSortFunc: ie
  };

  var yf = {
    shadowBlur: 1,
    shadowOffsetX: 1,
    shadowOffsetY: 1,
    textShadowBlur: 1,
    textShadowOffsetX: 1,
    textShadowOffsetY: 1,
    textBoxShadowBlur: 1,
    textBoxShadowOffsetX: 1,
    textBoxShadowOffsetY: 1
  },
      _f = function _f(t, e, i) {
    return yf.hasOwnProperty(e) ? i *= t.dpr : i;
  },
      xf = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
      wf = function wf(t, e) {
    this.extendFrom(t, !1), this.host = e;
  };

  wf.prototype = {
    constructor: wf,
    host: null,
    fill: "#000",
    stroke: null,
    opacity: 1,
    lineDash: null,
    lineDashOffset: 0,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    lineWidth: 1,
    strokeNoScale: !1,
    text: null,
    font: null,
    textFont: null,
    fontStyle: null,
    fontWeight: null,
    fontSize: null,
    fontFamily: null,
    textTag: null,
    textFill: "#000",
    textStroke: null,
    textWidth: null,
    textHeight: null,
    textStrokeWidth: 0,
    textLineHeight: null,
    textPosition: "inside",
    textRect: null,
    textOffset: null,
    textAlign: null,
    textVerticalAlign: null,
    textDistance: 5,
    textShadowColor: "transparent",
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
    textBoxShadowColor: "transparent",
    textBoxShadowBlur: 0,
    textBoxShadowOffsetX: 0,
    textBoxShadowOffsetY: 0,
    transformText: !1,
    textRotation: 0,
    textOrigin: null,
    textBackgroundColor: null,
    textBorderColor: null,
    textBorderWidth: 0,
    textBorderRadius: 0,
    textPadding: null,
    rich: null,
    truncate: null,
    blend: null,
    bind: function bind(t, e, i) {
      for (var n = this, r = i && i.style, a = !r, o = 0; o < xf.length; o++) {
        var s = xf[o],
            l = s[0];
        (a || n[l] !== r[l]) && (t[l] = _f(t, l, n[l] || s[1]));
      }

      if ((a || n.fill !== r.fill) && (t.fillStyle = n.fill), (a || n.stroke !== r.stroke) && (t.strokeStyle = n.stroke), (a || n.opacity !== r.opacity) && (t.globalAlpha = null == n.opacity ? 1 : n.opacity), (a || n.blend !== r.blend) && (t.globalCompositeOperation = n.blend || "source-over"), this.hasStroke()) {
        var h = n.lineWidth;
        t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);
      }
    },
    hasFill: function hasFill() {
      var t = this.fill;
      return null != t && "none" !== t;
    },
    hasStroke: function hasStroke() {
      var t = this.stroke;
      return null != t && "none" !== t && this.lineWidth > 0;
    },
    extendFrom: function extendFrom(t, e) {
      if (t) for (var i in t) {
        !t.hasOwnProperty(i) || e !== !0 && (e === !1 ? this.hasOwnProperty(i) : null == t[i]) || (this[i] = t[i]);
      }
    },
    set: function set(t, e) {
      "string" == typeof t ? this[t] = e : this.extendFrom(t, !0);
    },
    clone: function clone() {
      var t = new this.constructor();
      return t.extendFrom(this, !0), t;
    },
    getGradient: function getGradient(t, e, i) {
      for (var n = "radial" === e.type ? re : ne, r = n(t, e, i), a = e.colorStops, o = 0; o < a.length; o++) {
        r.addColorStop(a[o].offset, a[o].color);
      }

      return r;
    }
  };

  for (var bf = wf.prototype, Mf = 0; Mf < xf.length; Mf++) {
    var Sf = xf[Mf];
    Sf[0] in bf || (bf[Sf[0]] = Sf[1]);
  }

  wf.getGradient = bf.getGradient;

  var If = function If(t, e) {
    this.image = t, this.repeat = e, this.type = "pattern";
  };

  If.prototype.getCanvasPattern = function (t) {
    return t.createPattern(this.image, this.repeat || "repeat");
  };

  var Tf = function Tf(t, e, i) {
    var n;
    i = i || of, "string" == typeof t ? n = oe(t, e, i) : b(t) && (n = t, t = n.id), this.id = t, this.dom = n;
    var r = n.style;
    r && (n.onselectstart = ae, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = i;
  };

  Tf.prototype = {
    constructor: Tf,
    __dirty: !0,
    __used: !1,
    __drawIndex: 0,
    __startIndex: 0,
    __endIndex: 0,
    incremental: !1,
    getElementCount: function getElementCount() {
      return this.__endIndex - this.__startIndex;
    },
    initContext: function initContext() {
      this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
    },
    createBackBuffer: function createBackBuffer() {
      var t = this.dpr;
      this.domBack = oe("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t);
    },
    resize: function resize(t, e) {
      var i = this.dpr,
          n = this.dom,
          r = n.style,
          a = this.domBack;
      r && (r.width = t + "px", r.height = e + "px"), n.width = t * i, n.height = e * i, a && (a.width = t * i, a.height = e * i, 1 != i && this.ctxBack.scale(i, i));
    },
    clear: function clear(t, e) {
      var i = this.dom,
          n = this.ctx,
          r = i.width,
          a = i.height,
          e = e || this.clearColor,
          o = this.motionBlur && !t,
          s = this.lastFrameAlpha,
          l = this.dpr;

      if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(i, 0, 0, r / l, a / l)), n.clearRect(0, 0, r, a), e && "transparent" !== e) {
        var h;
        e.colorStops ? (h = e.__canvasGradient || wf.getGradient(n, e, {
          x: 0,
          y: 0,
          width: r,
          height: a
        }), e.__canvasGradient = h) : e.image && (h = If.prototype.getCanvasPattern.call(e, n)), n.save(), n.fillStyle = h || e, n.fillRect(0, 0, r, a), n.restore();
      }

      if (o) {
        var u = this.domBack;
        n.save(), n.globalAlpha = s, n.drawImage(u, 0, 0, r, a), n.restore();
      }
    }
  };

  var Df = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
    setTimeout(t, 16);
  },
      Cf = new Kd(50),
      kf = {},
      Af = 0,
      Lf = 5e3,
      Pf = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
      Of = "12px sans-serif",
      Nf = {};

  Nf.measureText = function (t, e) {
    var i = l();
    return i.font = e || Of, i.measureText(t);
  };

  var Rf = {
    left: 1,
    right: 1,
    center: 1
  },
      Ef = {
    top: 1,
    bottom: 1,
    middle: 1
  },
      zf = new qt(),
      Bf = function Bf() {};

  Bf.prototype = {
    constructor: Bf,
    drawRectText: function drawRectText(t, e) {
      var i = this.style;
      e = i.textRect || e, this.__dirty && ke(i, !0);
      var n = i.text;

      if (null != n && (n += ""), Ue(n, i)) {
        t.save();
        var r = this.transform;
        i.transformText ? this.setTransform(t) : r && (zf.copy(e), zf.applyTransform(r), e = zf), Le(this, t, n, i, e), t.restore();
      }
    }
  }, qe.prototype = {
    constructor: qe,
    type: "displayable",
    __dirty: !0,
    invisible: !1,
    z: 0,
    z2: 0,
    zlevel: 0,
    draggable: !1,
    dragging: !1,
    silent: !1,
    culling: !1,
    cursor: "pointer",
    rectHover: !1,
    progressive: !1,
    incremental: !1,
    inplace: !1,
    beforeBrush: function beforeBrush() {},
    afterBrush: function afterBrush() {},
    brush: function brush() {},
    getBoundingRect: function getBoundingRect() {},
    contain: function contain(t, e) {
      return this.rectContain(t, e);
    },
    traverse: function traverse(t, e) {
      t.call(e, this);
    },
    rectContain: function rectContain(t, e) {
      var i = this.transformCoordToLocal(t, e),
          n = this.getBoundingRect();
      return n.contain(i[0], i[1]);
    },
    dirty: function dirty() {
      this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh();
    },
    animateStyle: function animateStyle(t) {
      return this.animate("style", t);
    },
    attrKV: function attrKV(t, e) {
      "style" !== t ? uf.prototype.attrKV.call(this, t, e) : this.style.set(e);
    },
    setStyle: function setStyle(t, e) {
      return this.style.set(t, e), this.dirty(!1), this;
    },
    useStyle: function useStyle(t) {
      return this.style = new wf(t, this), this.dirty(!1), this;
    }
  }, u(qe, uf), c(qe, Bf), Ze.prototype = {
    constructor: Ze,
    type: "image",
    brush: function brush(t, e) {
      var i = this.style,
          n = i.image;
      i.bind(t, this, e);
      var r = this._image = le(n, this._image, this, this.onload);

      if (r && ue(r)) {
        var a = i.x || 0,
            o = i.y || 0,
            s = i.width,
            l = i.height,
            h = r.width / r.height;

        if (null == s && null != l ? s = l * h : null == l && null != s ? l = s / h : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), i.sWidth && i.sHeight) {
          var u = i.sx || 0,
              c = i.sy || 0;
          t.drawImage(r, u, c, i.sWidth, i.sHeight, a, o, s, l);
        } else if (i.sx && i.sy) {
          var u = i.sx,
              c = i.sy,
              d = s - u,
              f = l - c;
          t.drawImage(r, u, c, d, f, a, o, s, l);
        } else t.drawImage(r, a, o, s, l);

        null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
      }
    },
    getBoundingRect: function getBoundingRect() {
      var t = this.style;
      return this._rect || (this._rect = new qt(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect;
    }
  }, u(Ze, qe);

  var Vf = 1e5,
      Ff = 314159,
      Hf = .01,
      Wf = .001,
      Gf = new qt(0, 0, 0, 0),
      Xf = new qt(0, 0, 0, 0),
      Yf = function Yf(t, e, i) {
    this.type = "canvas";
    var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
    this._opts = i = o({}, i || {}), this.dpr = i.devicePixelRatio || of, this._singleCanvas = n, this.root = t;
    var r = t.style;
    r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
    var a = this._zlevelList = [],
        s = this._layers = {};

    if (this._layerConfig = {}, this._needsManuallyCompositing = !1, n) {
      var l = t.width,
          h = t.height;
      null != i.width && (l = i.width), null != i.height && (h = i.height), this.dpr = i.devicePixelRatio || 1, t.width = l * this.dpr, t.height = h * this.dpr, this._width = l, this._height = h;
      var u = new Tf(t, this, this.dpr);
      u.__builtin__ = !0, u.initContext(), s[Ff] = u, u.zlevel = Ff, a.push(Ff), this._domRoot = t;
    } else {
      this._width = this._getSize(0), this._height = this._getSize(1);
      var c = this._domRoot = ti(this._width, this._height);
      t.appendChild(c);
    }

    this._hoverlayer = null, this._hoverElements = [];
  };

  Yf.prototype = {
    constructor: Yf,
    getType: function getType() {
      return "canvas";
    },
    isSingleCanvas: function isSingleCanvas() {
      return this._singleCanvas;
    },
    getViewportRoot: function getViewportRoot() {
      return this._domRoot;
    },
    getViewportRootOffset: function getViewportRootOffset() {
      var t = this.getViewportRoot();
      return t ? {
        offsetLeft: t.offsetLeft || 0,
        offsetTop: t.offsetTop || 0
      } : void 0;
    },
    refresh: function refresh(t) {
      var e = this.storage.getDisplayList(!0),
          i = this._zlevelList;
      this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);

      for (var n = 0; n < i.length; n++) {
        var r = i[n],
            a = this._layers[r];

        if (!a.__builtin__ && a.refresh) {
          var o = 0 === n ? this._backgroundColor : null;
          a.refresh(o);
        }
      }

      return this.refreshHover(), this;
    },
    addHover: function addHover(t, e) {
      if (!t.__hoverMir) {
        var i = new t.constructor({
          style: t.style,
          shape: t.shape
        });
        i.__from = t, t.__hoverMir = i, i.setStyle(e), this._hoverElements.push(i);
      }
    },
    removeHover: function removeHover(t) {
      var e = t.__hoverMir,
          i = this._hoverElements,
          n = h(i, e);
      n >= 0 && i.splice(n, 1), t.__hoverMir = null;
    },
    clearHover: function clearHover() {
      for (var t = this._hoverElements, e = 0; e < t.length; e++) {
        var i = t[e].__from;
        i && (i.__hoverMir = null);
      }

      t.length = 0;
    },
    refreshHover: function refreshHover() {
      var t = this._hoverElements,
          e = t.length,
          i = this._hoverlayer;

      if (i && i.clear(), e) {
        ee(t, this.storage.displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(Vf));
        var n = {};
        i.ctx.save();

        for (var r = 0; e > r;) {
          var a = t[r],
              o = a.__from;
          o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, i, !0, n))) : (t.splice(r, 1), o.__hoverMir = null, e--);
        }

        i.ctx.restore();
      }
    },
    getHoverLayer: function getHoverLayer() {
      return this.getLayer(Vf);
    },
    _paintList: function _paintList(t, e, i) {
      if (this._redrawId === i) {
        e = e || !1, this._updateLayerStatus(t);

        var n = this._doPaintList(t, e);

        if (this._needsManuallyCompositing && this._compositeManually(), !n) {
          var r = this;
          Df(function () {
            r._paintList(t, e, i);
          });
        }
      }
    },
    _compositeManually: function _compositeManually() {
      var t = this.getLayer(Ff).ctx,
          e = this._domRoot.width,
          i = this._domRoot.height;
      t.clearRect(0, 0, e, i), this.eachBuiltinLayer(function (n) {
        n.virtual && t.drawImage(n.dom, 0, 0, e, i);
      });
    },
    _doPaintList: function _doPaintList(t, e) {
      for (var i = [], n = 0; n < this._zlevelList.length; n++) {
        var r = this._zlevelList[n],
            a = this._layers[r];
        a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && i.push(a);
      }

      for (var o = !0, s = 0; s < i.length; s++) {
        var a = i[s],
            l = a.ctx,
            h = {};
        l.save();
        var u = e ? a.__startIndex : a.__drawIndex,
            c = !e && a.incremental && Date.now,
            d = c && Date.now(),
            p = a.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
        if (a.__startIndex === a.__endIndex) a.clear(!1, p);else if (u === a.__startIndex) {
          var g = t[u];
          g.incremental && g.notClear && !e || a.clear(!1, p);
        }
        -1 === u && (console.error("For some unknown reason. drawIndex is -1"), u = a.__startIndex);

        for (var v = u; v < a.__endIndex; v++) {
          var m = t[v];

          if (this._doPaintEl(m, a, e, h), m.__dirty = !1, c) {
            var y = Date.now() - d;
            if (y > 15) break;
          }
        }

        a.__drawIndex = v, a.__drawIndex < a.__endIndex && (o = !1), h.prevElClipPaths && l.restore(), l.restore();
      }

      return yd.wxa && f(this._layers, function (t) {
        t && t.ctx && t.ctx.draw && t.ctx.draw();
      }), o;
    },
    _doPaintEl: function _doPaintEl(t, e, i, n) {
      var r = e.ctx,
          a = t.transform;

      if (!(!e.__dirty && !i || t.invisible || 0 === t.style.opacity || a && !a[0] && !a[3] || t.culling && $e(t, this._width, this._height))) {
        var o = t.__clipPaths;
        (!n.prevElClipPaths || Qe(o, n.prevElClipPaths)) && (n.prevElClipPaths && (e.ctx.restore(), n.prevElClipPaths = null, n.prevEl = null), o && (r.save(), Je(o, r), n.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, n.prevEl || null), n.prevEl = t, t.afterBrush && t.afterBrush(r);
      }
    },
    getLayer: function getLayer(t, e) {
      this._singleCanvas && !this._needsManuallyCompositing && (t = Ff);
      var i = this._layers[t];
      return i || (i = new Tf("zr_" + t, this, this.dpr), i.zlevel = t, i.__builtin__ = !0, this._layerConfig[t] && r(i, this._layerConfig[t], !0), e && (i.virtual = e), this.insertLayer(t, i), i.initContext()), i;
    },
    insertLayer: function insertLayer(t, e) {
      var i = this._layers,
          n = this._zlevelList,
          r = n.length,
          a = null,
          o = -1,
          s = this._domRoot;
      if (i[t]) return void lf("ZLevel " + t + " has been used already");
      if (!Ke(e)) return void lf("Layer of zlevel " + t + " is not valid");

      if (r > 0 && t > n[0]) {
        for (o = 0; r - 1 > o && !(n[o] < t && n[o + 1] > t); o++) {
          ;
        }

        a = i[n[o]];
      }

      if (n.splice(o + 1, 0, t), i[t] = e, !e.virtual) if (a) {
        var l = a.dom;
        l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom);
      } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom);
    },
    eachLayer: function eachLayer(t, e) {
      var i,
          n,
          r = this._zlevelList;

      for (n = 0; n < r.length; n++) {
        i = r[n], t.call(e, this._layers[i], i);
      }
    },
    eachBuiltinLayer: function eachBuiltinLayer(t, e) {
      var i,
          n,
          r,
          a = this._zlevelList;

      for (r = 0; r < a.length; r++) {
        n = a[r], i = this._layers[n], i.__builtin__ && t.call(e, i, n);
      }
    },
    eachOtherLayer: function eachOtherLayer(t, e) {
      var i,
          n,
          r,
          a = this._zlevelList;

      for (r = 0; r < a.length; r++) {
        n = a[r], i = this._layers[n], i.__builtin__ || t.call(e, i, n);
      }
    },
    getLayers: function getLayers() {
      return this._layers;
    },
    _updateLayerStatus: function _updateLayerStatus(t) {
      function e(t) {
        r && (r.__endIndex !== t && (r.__dirty = !0), r.__endIndex = t);
      }

      if (this.eachBuiltinLayer(function (t) {
        t.__dirty = t.__used = !1;
      }), this._singleCanvas) for (var i = 1; i < t.length; i++) {
        var n = t[i];

        if (n.zlevel !== t[i - 1].zlevel || n.incremental) {
          this._needsManuallyCompositing = !0;
          break;
        }
      }

      for (var r = null, a = 0, i = 0; i < t.length; i++) {
        var o,
            n = t[i],
            s = n.zlevel;
        n.incremental ? (o = this.getLayer(s + Wf, this._needsManuallyCompositing), o.incremental = !0, a = 1) : o = this.getLayer(s + (a > 0 ? Hf : 0), this._needsManuallyCompositing), o.__builtin__ || lf("ZLevel " + s + " has been used by unkown layer " + o.id), o !== r && (o.__used = !0, o.__startIndex !== i && (o.__dirty = !0), o.__startIndex = i, o.__drawIndex = o.incremental ? -1 : i, e(i), r = o), n.__dirty && (o.__dirty = !0, o.incremental && o.__drawIndex < 0 && (o.__drawIndex = i));
      }

      e(i), this.eachBuiltinLayer(function (t) {
        !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
      });
    },
    clear: function clear() {
      return this.eachBuiltinLayer(this._clearLayer), this;
    },
    _clearLayer: function _clearLayer(t) {
      t.clear();
    },
    setBackgroundColor: function setBackgroundColor(t) {
      this._backgroundColor = t;
    },
    configLayer: function configLayer(t, e) {
      if (e) {
        var i = this._layerConfig;
        i[t] ? r(i[t], e, !0) : i[t] = e;

        for (var n = 0; n < this._zlevelList.length; n++) {
          var a = this._zlevelList[n];

          if (a === t || a === t + Hf) {
            var o = this._layers[a];
            r(o, i[t], !0);
          }
        }
      }
    },
    delLayer: function delLayer(t) {
      var e = this._layers,
          i = this._zlevelList,
          n = e[t];
      n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(h(i, t), 1));
    },
    resize: function resize(t, e) {
      if (this._domRoot.style) {
        var i = this._domRoot;
        i.style.display = "none";
        var n = this._opts;

        if (null != t && (n.width = t), null != e && (n.height = e), t = this._getSize(0), e = this._getSize(1), i.style.display = "", this._width != t || e != this._height) {
          i.style.width = t + "px", i.style.height = e + "px";

          for (var r in this._layers) {
            this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
          }

          f(this._progressiveLayers, function (i) {
            i.resize(t, e);
          }), this.refresh(!0);
        }

        this._width = t, this._height = e;
      } else {
        if (null == t || null == e) return;
        this._width = t, this._height = e, this.getLayer(Ff).resize(t, e);
      }

      return this;
    },
    clearLayer: function clearLayer(t) {
      var e = this._layers[t];
      e && e.clear();
    },
    dispose: function dispose() {
      this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
    },
    getRenderedCanvas: function getRenderedCanvas(t) {
      if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[Ff].dom;
      var e = new Tf("image", this, t.pixelRatio || this.dpr);

      if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
        this.refresh();
        var i = e.dom.width,
            n = e.dom.height,
            r = e.ctx;
        this.eachLayer(function (t) {
          t.__builtin__ ? r.drawImage(t.dom, 0, 0, i, n) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore());
        });
      } else for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
        var l = o[s];

        this._doPaintEl(l, e, !0, a);
      }

      return e.dom;
    },
    getWidth: function getWidth() {
      return this._width;
    },
    getHeight: function getHeight() {
      return this._height;
    },
    _getSize: function _getSize(t) {
      var e = this._opts,
          i = ["width", "height"][t],
          n = ["clientWidth", "clientHeight"][t],
          r = ["paddingLeft", "paddingTop"][t],
          a = ["paddingRight", "paddingBottom"][t];
      if (null != e[i] && "auto" !== e[i]) return parseFloat(e[i]);
      var o = this.root,
          s = document.defaultView.getComputedStyle(o);
      return (o[n] || je(s[i]) || je(o.style[i])) - (je(s[r]) || 0) - (je(s[a]) || 0) | 0;
    },
    pathToImage: function pathToImage(t, e) {
      e = e || this.dpr;
      var i = document.createElement("canvas"),
          n = i.getContext("2d"),
          r = t.getBoundingRect(),
          a = t.style,
          o = a.shadowBlur * e,
          s = a.shadowOffsetX * e,
          l = a.shadowOffsetY * e,
          h = a.hasStroke() ? a.lineWidth : 0,
          u = Math.max(h / 2, -s + o),
          c = Math.max(h / 2, s + o),
          d = Math.max(h / 2, -l + o),
          f = Math.max(h / 2, l + o),
          p = r.width + u + c,
          g = r.height + d + f;
      i.width = p * e, i.height = g * e, n.scale(e, e), n.clearRect(0, 0, p, g), n.dpr = e;
      var v = {
        position: t.position,
        rotation: t.rotation,
        scale: t.scale
      };
      t.position = [u - r.x, d - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(n);
      var m = Ze,
          y = new m({
        style: {
          x: 0,
          y: 0,
          image: i
        }
      });
      return null != v.position && (y.position = t.position = v.position), null != v.rotation && (y.rotation = t.rotation = v.rotation), null != v.scale && (y.scale = t.scale = v.scale), y;
    }
  };

  var Uf = "undefined" != typeof window && !!window.addEventListener,
      qf = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Zf = Uf ? function (t) {
    t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0;
  } : function (t) {
    t.returnValue = !1, t.cancelBubble = !0;
  },
      jf = function jf(t) {
    t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {}, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, Ed.call(this);
  };

  jf.prototype = {
    constructor: jf,
    addClip: function addClip(t) {
      this._clips.push(t);
    },
    addAnimator: function addAnimator(t) {
      t.animation = this;

      for (var e = t.getClips(), i = 0; i < e.length; i++) {
        this.addClip(e[i]);
      }
    },
    removeClip: function removeClip(t) {
      var e = h(this._clips, t);
      e >= 0 && this._clips.splice(e, 1);
    },
    removeAnimator: function removeAnimator(t) {
      for (var e = t.getClips(), i = 0; i < e.length; i++) {
        this.removeClip(e[i]);
      }

      t.animation = null;
    },
    _update: function _update() {
      for (var t = new Date().getTime() - this._pausedTime, e = t - this._time, i = this._clips, n = i.length, r = [], a = [], o = 0; n > o; o++) {
        var s = i[o],
            l = s.step(t, e);
        l && (r.push(l), a.push(s));
      }

      for (var o = 0; n > o;) {
        i[o]._needsRemove ? (i[o] = i[n - 1], i.pop(), n--) : o++;
      }

      n = r.length;

      for (var o = 0; n > o; o++) {
        a[o].fire(r[o]);
      }

      this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update();
    },
    _startLoop: function _startLoop() {
      function t() {
        e._running && (Df(t), !e._paused && e._update());
      }

      var e = this;
      this._running = !0, Df(t);
    },
    start: function start() {
      this._time = new Date().getTime(), this._pausedTime = 0, this._startLoop();
    },
    stop: function stop() {
      this._running = !1;
    },
    pause: function pause() {
      this._paused || (this._pauseStart = new Date().getTime(), this._paused = !0);
    },
    resume: function resume() {
      this._paused && (this._pausedTime += new Date().getTime() - this._pauseStart, this._paused = !1);
    },
    clear: function clear() {
      this._clips = [];
    },
    isFinished: function isFinished() {
      return !this._clips.length;
    },
    animate: function animate(t, e) {
      e = e || {};
      var i = new nf(t, e.loop, e.getter, e.setter);
      return this.addAnimator(i), i;
    }
  }, c(jf, Ed);

  var Kf = function Kf() {
    this._track = [];
  };

  Kf.prototype = {
    constructor: Kf,
    recognize: function recognize(t, e, i) {
      return this._doTrack(t, e, i), this._recognize(t);
    },
    clear: function clear() {
      return this._track.length = 0, this;
    },
    _doTrack: function _doTrack(t, e, i) {
      var n = t.touches;

      if (n) {
        for (var r = {
          points: [],
          touches: [],
          target: e,
          event: t
        }, a = 0, o = n.length; o > a; a++) {
          var s = n[a],
              l = ii(i, s, {});
          r.points.push([l.zrX, l.zrY]), r.touches.push(s);
        }

        this._track.push(r);
      }
    },
    _recognize: function _recognize(t) {
      for (var e in $f) {
        if ($f.hasOwnProperty(e)) {
          var i = $f[e](this._track, t);
          if (i) return i;
        }
      }
    }
  };
  var $f = {
    pinch: function pinch(t, e) {
      var i = t.length;

      if (i) {
        var n = (t[i - 1] || {}).points,
            r = (t[i - 2] || {}).points || n;

        if (r && r.length > 1 && n && n.length > 1) {
          var a = si(n) / si(r);
          !isFinite(a) && (a = 1), e.pinchScale = a;
          var o = li(n);
          return e.pinchX = o[0], e.pinchY = o[1], {
            type: "pinch",
            target: t[0].target,
            event: e
          };
        }
      }
    }
  },
      Qf = 300,
      Jf = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
      tp = ["touchstart", "touchend", "touchmove"],
      ep = {
    pointerdown: 1,
    pointerup: 1,
    pointermove: 1,
    pointerout: 1
  },
      ip = p(Jf, function (t) {
    var e = t.replace("mouse", "pointer");
    return ep[e] ? e : t;
  }),
      np = {
    mousemove: function mousemove(t) {
      t = ri(this.dom, t), this.trigger("mousemove", t);
    },
    mouseout: function mouseout(t) {
      t = ri(this.dom, t);
      var e = t.toElement || t.relatedTarget;
      if (e != this.dom) for (; e && 9 != e.nodeType;) {
        if (e === this.dom) return;
        e = e.parentNode;
      }
      this.trigger("mouseout", t);
    },
    touchstart: function touchstart(t) {
      t = ri(this.dom, t), t.zrByTouch = !0, this._lastTouchMoment = new Date(), ui(this, t, "start"), np.mousemove.call(this, t), np.mousedown.call(this, t), ci(this);
    },
    touchmove: function touchmove(t) {
      t = ri(this.dom, t), t.zrByTouch = !0, ui(this, t, "change"), np.mousemove.call(this, t), ci(this);
    },
    touchend: function touchend(t) {
      t = ri(this.dom, t), t.zrByTouch = !0, ui(this, t, "end"), np.mouseup.call(this, t), +new Date() - this._lastTouchMoment < Qf && np.click.call(this, t), ci(this);
    },
    pointerdown: function pointerdown(t) {
      np.mousedown.call(this, t);
    },
    pointermove: function pointermove(t) {
      di(t) || np.mousemove.call(this, t);
    },
    pointerup: function pointerup(t) {
      np.mouseup.call(this, t);
    },
    pointerout: function pointerout(t) {
      di(t) || np.mouseout.call(this, t);
    }
  };
  f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
    np[t] = function (e) {
      e = ri(this.dom, e), this.trigger(t, e);
    };
  });
  var rp = pi.prototype;
  rp.dispose = function () {
    for (var t = Jf.concat(tp), e = 0; e < t.length; e++) {
      var i = t[e];
      oi(this.dom, hi(i), this._handlers[i]);
    }
  }, rp.setCursor = function (t) {
    this.dom.style && (this.dom.style.cursor = t || "default");
  }, c(pi, Ed);

  var ap = !yd.canvasSupported,
      op = {
    canvas: Yf
  },
      sp = function sp(t, e, i) {
    i = i || {}, this.dom = e, this.id = t;
    var n = this,
        r = new mf(),
        a = i.renderer;

    if (ap) {
      if (!op.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
      a = "vml";
    } else a && op[a] || (a = "canvas");

    var o = new op[a](e, r, i, t);
    this.storage = r, this.painter = o;
    var s = yd.node || yd.worker ? null : new pi(o.getViewportRoot());
    this.handler = new Vd(r, o, s, o.root), this.animation = new jf({
      stage: {
        update: m(this.flush, this)
      }
    }), this.animation.start(), this._needsRefresh;
    var l = r.delFromStorage,
        h = r.addToStorage;
    r.delFromStorage = function (t) {
      l.call(r, t), t && t.removeSelfFromZr(n);
    }, r.addToStorage = function (t) {
      h.call(r, t), t.addSelfToZr(n);
    };
  };

  sp.prototype = {
    constructor: sp,
    getId: function getId() {
      return this.id;
    },
    add: function add(t) {
      this.storage.addRoot(t), this._needsRefresh = !0;
    },
    remove: function remove(t) {
      this.storage.delRoot(t), this._needsRefresh = !0;
    },
    configLayer: function configLayer(t, e) {
      this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0;
    },
    setBackgroundColor: function setBackgroundColor(t) {
      this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0;
    },
    refreshImmediately: function refreshImmediately() {
      this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1;
    },
    refresh: function refresh() {
      this._needsRefresh = !0;
    },
    flush: function flush() {
      var t;
      this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered");
    },
    addHover: function addHover(t, e) {
      this.painter.addHover && (this.painter.addHover(t, e), this.refreshHover());
    },
    removeHover: function removeHover(t) {
      this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover());
    },
    clearHover: function clearHover() {
      this.painter.clearHover && (this.painter.clearHover(), this.refreshHover());
    },
    refreshHover: function refreshHover() {
      this._needsRefreshHover = !0;
    },
    refreshHoverImmediately: function refreshHoverImmediately() {
      this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover();
    },
    resize: function resize(t) {
      t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize();
    },
    clearAnimation: function clearAnimation() {
      this.animation.clear();
    },
    getWidth: function getWidth() {
      return this.painter.getWidth();
    },
    getHeight: function getHeight() {
      return this.painter.getHeight();
    },
    pathToImage: function pathToImage(t, e) {
      return this.painter.pathToImage(t, e);
    },
    setCursorStyle: function setCursorStyle(t) {
      this.handler.setCursorStyle(t);
    },
    findHover: function findHover(t, e) {
      return this.handler.findHover(t, e);
    },
    on: function on(t, e, i) {
      this.handler.on(t, e, i);
    },
    off: function off(t, e) {
      this.handler.off(t, e);
    },
    trigger: function trigger(t, e) {
      this.handler.trigger(t, e);
    },
    clear: function clear() {
      this.storage.delRoot(), this.painter.clear();
    },
    dispose: function dispose() {
      this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null;
    }
  };

  var lp = f,
      hp = b,
      up = _,
      cp = "series\0",
      dp = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
      fp = 0,
      pp = ".",
      gp = "___EC__COMPONENT__CONTAINER___",
      vp = 0,
      mp = function mp(t) {
    for (var e = 0; e < t.length; e++) {
      t[e][1] || (t[e][1] = t[e][0]);
    }

    return function (e, i, n) {
      for (var r = {}, a = 0; a < t.length; a++) {
        var o = t[a][1];

        if (!(i && h(i, o) >= 0 || n && h(n, o) < 0)) {
          var s = e.getShallow(o);
          null != s && (r[t[a][0]] = s);
        }
      }

      return r;
    };
  },
      yp = mp([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
      _p = {
    getLineStyle: function getLineStyle(t) {
      var e = yp(this, t),
          i = this.getLineDash(e.lineWidth);
      return i && (e.lineDash = i), e;
    },
    getLineDash: function getLineDash(t) {
      null == t && (t = 1);
      var e = this.get("type"),
          i = Math.max(t, 2),
          n = 4 * t;
      return "solid" === e || null == e ? null : "dashed" === e ? [n, n] : [i, i];
    }
  },
      xp = mp([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),
      wp = {
    getAreaStyle: function getAreaStyle(t, e) {
      return xp(this, t, e);
    }
  },
      bp = Math.pow,
      Mp = Math.sqrt,
      Sp = 1e-8,
      Ip = 1e-4,
      Tp = Mp(3),
      Dp = 1 / 3,
      Cp = V(),
      kp = V(),
      Ap = V(),
      Lp = Math.min,
      Pp = Math.max,
      Op = Math.sin,
      Np = Math.cos,
      Rp = 2 * Math.PI,
      Ep = V(),
      zp = V(),
      Bp = V(),
      Vp = [],
      Fp = [],
      Hp = {
    M: 1,
    L: 2,
    C: 3,
    Q: 4,
    A: 5,
    Z: 6,
    R: 7
  },
      Wp = [],
      Gp = [],
      Xp = [],
      Yp = [],
      Up = Math.min,
      qp = Math.max,
      Zp = Math.cos,
      jp = Math.sin,
      Kp = Math.sqrt,
      $p = Math.abs,
      Qp = "undefined" != typeof Float32Array,
      Jp = function Jp(t) {
    this._saveData = !t, this._saveData && (this.data = []), this._ctx = null;
  };

  Jp.prototype = {
    constructor: Jp,
    _xi: 0,
    _yi: 0,
    _x0: 0,
    _y0: 0,
    _ux: 0,
    _uy: 0,
    _len: 0,
    _lineDash: null,
    _dashOffset: 0,
    _dashIdx: 0,
    _dashSum: 0,
    setScale: function setScale(t, e) {
      this._ux = $p(1 / of / t) || 0, this._uy = $p(1 / of / e) || 0;
    },
    getContext: function getContext() {
      return this._ctx;
    },
    beginPath: function beginPath(t) {
      return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this;
    },
    moveTo: function moveTo(t, e) {
      return this.addData(Hp.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
    },
    lineTo: function lineTo(t, e) {
      var i = $p(t - this._xi) > this._ux || $p(e - this._yi) > this._uy || this._len < 5;
      return this.addData(Hp.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), i && (this._xi = t, this._yi = e), this;
    },
    bezierCurveTo: function bezierCurveTo(t, e, i, n, r, a) {
      return this.addData(Hp.C, t, e, i, n, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, r, a) : this._ctx.bezierCurveTo(t, e, i, n, r, a)), this._xi = r, this._yi = a, this;
    },
    quadraticCurveTo: function quadraticCurveTo(t, e, i, n) {
      return this.addData(Hp.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), this._xi = i, this._yi = n, this;
    },
    arc: function arc(t, e, i, n, r, a) {
      return this.addData(Hp.A, t, e, i, i, n, r - n, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, r, a), this._xi = Zp(r) * i + t, this._yi = jp(r) * i + t, this;
    },
    arcTo: function arcTo(t, e, i, n, r) {
      return this._ctx && this._ctx.arcTo(t, e, i, n, r), this;
    },
    rect: function rect(t, e, i, n) {
      return this._ctx && this._ctx.rect(t, e, i, n), this.addData(Hp.R, t, e, i, n), this;
    },
    closePath: function closePath() {
      this.addData(Hp.Z);
      var t = this._ctx,
          e = this._x0,
          i = this._y0;
      return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, this._yi = i, this;
    },
    fill: function fill(t) {
      t && t.fill(), this.toStatic();
    },
    stroke: function stroke(t) {
      t && t.stroke(), this.toStatic();
    },
    setLineDash: function setLineDash(t) {
      if (t instanceof Array) {
        this._lineDash = t, this._dashIdx = 0;

        for (var e = 0, i = 0; i < t.length; i++) {
          e += t[i];
        }

        this._dashSum = e;
      }

      return this;
    },
    setLineDashOffset: function setLineDashOffset(t) {
      return this._dashOffset = t, this;
    },
    len: function len() {
      return this._len;
    },
    setData: function setData(t) {
      var e = t.length;
      this.data && this.data.length == e || !Qp || (this.data = new Float32Array(e));

      for (var i = 0; e > i; i++) {
        this.data[i] = t[i];
      }

      this._len = e;
    },
    appendPath: function appendPath(t) {
      t instanceof Array || (t = [t]);

      for (var e = t.length, i = 0, n = this._len, r = 0; e > r; r++) {
        i += t[r].len();
      }

      Qp && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));

      for (var r = 0; e > r; r++) {
        for (var a = t[r].data, o = 0; o < a.length; o++) {
          this.data[n++] = a[o];
        }
      }

      this._len = n;
    },
    addData: function addData(t) {
      if (this._saveData) {
        var e = this.data;
        this._len + arguments.length > e.length && (this._expandData(), e = this.data);

        for (var i = 0; i < arguments.length; i++) {
          e[this._len++] = arguments[i];
        }

        this._prevCmd = t;
      }
    },
    _expandData: function _expandData() {
      if (!(this.data instanceof Array)) {
        for (var t = [], e = 0; e < this._len; e++) {
          t[e] = this.data[e];
        }

        this.data = t;
      }
    },
    _needsDash: function _needsDash() {
      return this._lineDash;
    },
    _dashedLineTo: function _dashedLineTo(t, e) {
      var i,
          n,
          r = this._dashSum,
          a = this._dashOffset,
          o = this._lineDash,
          s = this._ctx,
          l = this._xi,
          h = this._yi,
          u = t - l,
          c = e - h,
          d = Kp(u * u + c * c),
          f = l,
          p = h,
          g = o.length;

      for (u /= d, c /= d, 0 > a && (a = r + a), a %= r, f -= a * u, p -= a * c; u > 0 && t >= f || 0 > u && f >= t || 0 == u && (c > 0 && e >= p || 0 > c && p >= e);) {
        n = this._dashIdx, i = o[n], f += u * i, p += c * i, this._dashIdx = (n + 1) % g, u > 0 && l > f || 0 > u && f > l || c > 0 && h > p || 0 > c && p > h || s[n % 2 ? "moveTo" : "lineTo"](u >= 0 ? Up(f, t) : qp(f, t), c >= 0 ? Up(p, e) : qp(p, e));
      }

      u = f - t, c = p - e, this._dashOffset = -Kp(u * u + c * c);
    },
    _dashedBezierTo: function _dashedBezierTo(t, e, i, n, r, a) {
      var o,
          s,
          l,
          h,
          u,
          c = this._dashSum,
          d = this._dashOffset,
          f = this._lineDash,
          p = this._ctx,
          g = this._xi,
          v = this._yi,
          m = Fi,
          y = 0,
          _ = this._dashIdx,
          x = f.length,
          w = 0;

      for (0 > d && (d = c + d), d %= c, o = 0; 1 > o; o += .1) {
        s = m(g, t, i, r, o + .1) - m(g, t, i, r, o), l = m(v, e, n, a, o + .1) - m(v, e, n, a, o), y += Kp(s * s + l * l);
      }

      for (; x > _ && (w += f[_], !(w > d)); _++) {
        ;
      }

      for (o = (w - d) / y; 1 >= o;) {
        h = m(g, t, i, r, o), u = m(v, e, n, a, o), _ % 2 ? p.moveTo(h, u) : p.lineTo(h, u), o += f[_] / y, _ = (_ + 1) % x;
      }

      _ % 2 !== 0 && p.lineTo(r, a), s = r - h, l = a - u, this._dashOffset = -Kp(s * s + l * l);
    },
    _dashedQuadraticTo: function _dashedQuadraticTo(t, e, i, n) {
      var r = i,
          a = n;
      i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, n, r, a);
    },
    toStatic: function toStatic() {
      var t = this.data;
      t instanceof Array && (t.length = this._len, Qp && (this.data = new Float32Array(t)));
    },
    getBoundingRect: function getBoundingRect() {
      Wp[0] = Wp[1] = Xp[0] = Xp[1] = Number.MAX_VALUE, Gp[0] = Gp[1] = Yp[0] = Yp[1] = -Number.MAX_VALUE;

      for (var t = this.data, e = 0, i = 0, n = 0, r = 0, a = 0; a < t.length;) {
        var o = t[a++];

        switch (1 == a && (e = t[a], i = t[a + 1], n = e, r = i), o) {
          case Hp.M:
            n = t[a++], r = t[a++], e = n, i = r, Xp[0] = n, Xp[1] = r, Yp[0] = n, Yp[1] = r;
            break;

          case Hp.L:
            Qi(e, i, t[a], t[a + 1], Xp, Yp), e = t[a++], i = t[a++];
            break;

          case Hp.C:
            Ji(e, i, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], Xp, Yp), e = t[a++], i = t[a++];
            break;

          case Hp.Q:
            tn(e, i, t[a++], t[a++], t[a], t[a + 1], Xp, Yp), e = t[a++], i = t[a++];
            break;

          case Hp.A:
            var s = t[a++],
                l = t[a++],
                h = t[a++],
                u = t[a++],
                c = t[a++],
                d = t[a++] + c,
                f = (t[a++], 1 - t[a++]);
            1 == a && (n = Zp(c) * h + s, r = jp(c) * u + l), en(s, l, h, u, c, d, f, Xp, Yp), e = Zp(d) * h + s, i = jp(d) * u + l;
            break;

          case Hp.R:
            n = e = t[a++], r = i = t[a++];
            var p = t[a++],
                g = t[a++];
            Qi(n, r, n + p, r + g, Xp, Yp);
            break;

          case Hp.Z:
            e = n, i = r;
        }

        Q(Wp, Wp, Xp), J(Gp, Gp, Yp);
      }

      return 0 === a && (Wp[0] = Wp[1] = Gp[0] = Gp[1] = 0), new qt(Wp[0], Wp[1], Gp[0] - Wp[0], Gp[1] - Wp[1]);
    },
    rebuildPath: function rebuildPath(t) {
      for (var e, i, n, r, a, o, s = this.data, l = this._ux, h = this._uy, u = this._len, c = 0; u > c;) {
        var d = s[c++];

        switch (1 == c && (n = s[c], r = s[c + 1], e = n, i = r), d) {
          case Hp.M:
            e = n = s[c++], i = r = s[c++], t.moveTo(n, r);
            break;

          case Hp.L:
            a = s[c++], o = s[c++], ($p(a - n) > l || $p(o - r) > h || c === u - 1) && (t.lineTo(a, o), n = a, r = o);
            break;

          case Hp.C:
            t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), n = s[c - 2], r = s[c - 1];
            break;

          case Hp.Q:
            t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), n = s[c - 2], r = s[c - 1];
            break;

          case Hp.A:
            var f = s[c++],
                p = s[c++],
                g = s[c++],
                v = s[c++],
                m = s[c++],
                y = s[c++],
                _ = s[c++],
                x = s[c++],
                w = g > v ? g : v,
                b = g > v ? 1 : g / v,
                M = g > v ? v / g : 1,
                S = Math.abs(g - v) > .001,
                I = m + y;
            S ? (t.translate(f, p), t.rotate(_), t.scale(b, M), t.arc(0, 0, w, m, I, 1 - x), t.scale(1 / b, 1 / M), t.rotate(-_), t.translate(-f, -p)) : t.arc(f, p, w, m, I, 1 - x), 1 == c && (e = Zp(m) * g + f, i = jp(m) * v + p), n = Zp(I) * g + f, r = jp(I) * v + p;
            break;

          case Hp.R:
            e = n = s[c], i = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
            break;

          case Hp.Z:
            t.closePath(), n = e, r = i;
        }
      }
    }
  }, Jp.CMD = Hp;
  var tg = 2 * Math.PI,
      eg = 2 * Math.PI,
      ig = Jp.CMD,
      ng = 2 * Math.PI,
      rg = 1e-4,
      ag = [-1, -1, -1],
      og = [-1, -1],
      sg = If.prototype.getCanvasPattern,
      lg = Math.abs,
      hg = new Jp(!0);
  mn.prototype = {
    constructor: mn,
    type: "path",
    __dirtyPath: !0,
    strokeContainThreshold: 5,
    brush: function brush(t, e) {
      var i = this.style,
          n = this.path || hg,
          r = i.hasStroke(),
          a = i.hasFill(),
          o = i.fill,
          s = i.stroke,
          l = a && !!o.colorStops,
          h = r && !!s.colorStops,
          u = a && !!o.image,
          c = r && !!s.image;

      if (i.bind(t, this, e), this.setTransform(t), this.__dirty) {
        var d;
        l && (d = d || this.getBoundingRect(), this._fillGradient = i.getGradient(t, o, d)), h && (d = d || this.getBoundingRect(), this._strokeGradient = i.getGradient(t, s, d));
      }

      l ? t.fillStyle = this._fillGradient : u && (t.fillStyle = sg.call(o, t)), h ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = sg.call(s, t));
      var f = i.lineDash,
          p = i.lineDashOffset,
          g = !!t.setLineDash,
          v = this.getGlobalScale();
      n.setScale(v[0], v[1]), this.__dirtyPath || f && !g && r ? (n.beginPath(t), f && !g && (n.setLineDash(f), n.setLineDashOffset(p)), this.buildPath(n, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a && n.fill(t), f && g && (t.setLineDash(f), t.lineDashOffset = p), r && n.stroke(t), f && g && t.setLineDash([]), null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
    },
    buildPath: function buildPath() {},
    createPathProxy: function createPathProxy() {
      this.path = new Jp();
    },
    getBoundingRect: function getBoundingRect() {
      var t = this._rect,
          e = this.style,
          i = !t;

      if (i) {
        var n = this.path;
        n || (n = this.path = new Jp()), this.__dirtyPath && (n.beginPath(), this.buildPath(n, this.shape, !1)), t = n.getBoundingRect();
      }

      if (this._rect = t, e.hasStroke()) {
        var r = this._rectWithStroke || (this._rectWithStroke = t.clone());

        if (this.__dirty || i) {
          r.copy(t);
          var a = e.lineWidth,
              o = e.strokeNoScale ? this.getLineScale() : 1;
          e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2);
        }

        return r;
      }

      return t;
    },
    contain: function contain(t, e) {
      var i = this.transformCoordToLocal(t, e),
          n = this.getBoundingRect(),
          r = this.style;

      if (t = i[0], e = i[1], n.contain(t, e)) {
        var a = this.path.data;

        if (r.hasStroke()) {
          var o = r.lineWidth,
              s = r.strokeNoScale ? this.getLineScale() : 1;
          if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), vn(a, o / s, t, e))) return !0;
        }

        if (r.hasFill()) return gn(a, t, e);
      }

      return !1;
    },
    dirty: function dirty(t) {
      null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty();
    },
    animateShape: function animateShape(t) {
      return this.animate("shape", t);
    },
    attrKV: function attrKV(t, e) {
      "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : qe.prototype.attrKV.call(this, t, e);
    },
    setShape: function setShape(t, e) {
      var i = this.shape;

      if (i) {
        if (b(t)) for (var n in t) {
          t.hasOwnProperty(n) && (i[n] = t[n]);
        } else i[t] = e;
        this.dirty(!0);
      }

      return this;
    },
    getLineScale: function getLineScale() {
      var t = this.transform;
      return t && lg(t[0] - 1) > 1e-10 && lg(t[3] - 1) > 1e-10 ? Math.sqrt(lg(t[0] * t[3] - t[2] * t[1])) : 1;
    }
  }, mn.extend = function (t) {
    var e = function e(_e2) {
      mn.call(this, _e2), t.style && this.style.extendFrom(t.style, !1);
      var i = t.shape;

      if (i) {
        this.shape = this.shape || {};
        var n = this.shape;

        for (var r in i) {
          !n.hasOwnProperty(r) && i.hasOwnProperty(r) && (n[r] = i[r]);
        }
      }

      t.init && t.init.call(this, _e2);
    };

    u(e, mn);

    for (var i in t) {
      "style" !== i && "shape" !== i && (e.prototype[i] = t[i]);
    }

    return e;
  }, u(mn, qe);

  var ug = Jp.CMD,
      cg = [[], [], []],
      dg = Math.sqrt,
      fg = Math.atan2,
      pg = function pg(t, e) {
    var i,
        n,
        r,
        a,
        o,
        s,
        l = t.data,
        h = ug.M,
        u = ug.C,
        c = ug.L,
        d = ug.R,
        f = ug.A,
        p = ug.Q;

    for (r = 0, a = 0; r < l.length;) {
      switch (i = l[r++], a = r, n = 0, i) {
        case h:
          n = 1;
          break;

        case c:
          n = 1;
          break;

        case u:
          n = 3;
          break;

        case p:
          n = 2;
          break;

        case f:
          var g = e[4],
              v = e[5],
              m = dg(e[0] * e[0] + e[1] * e[1]),
              y = dg(e[2] * e[2] + e[3] * e[3]),
              _ = fg(-e[1] / y, e[0] / m);

          l[r] *= m, l[r++] += g, l[r] *= y, l[r++] += v, l[r++] *= m, l[r++] *= y, l[r++] += _, l[r++] += _, r += 2, a = r;
          break;

        case d:
          s[0] = l[r++], s[1] = l[r++], $(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], s[1] += l[r++], $(s, s, e), l[a++] = s[0], l[a++] = s[1];
      }

      for (o = 0; n > o; o++) {
        var s = cg[o];
        s[0] = l[r++], s[1] = l[r++], $(s, s, e), l[a++] = s[0], l[a++] = s[1];
      }
    }
  },
      gg = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
      vg = Math.sqrt,
      mg = Math.sin,
      yg = Math.cos,
      _g = Math.PI,
      xg = function xg(t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
  },
      wg = function wg(t, e) {
    return (t[0] * e[0] + t[1] * e[1]) / (xg(t) * xg(e));
  },
      bg = function bg(t, e) {
    return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(wg(t, e));
  },
      Mg = function Mg(t) {
    qe.call(this, t);
  };

  Mg.prototype = {
    constructor: Mg,
    type: "text",
    brush: function brush(t, e) {
      var i = this.style;
      this.__dirty && ke(i, !0), i.fill = i.stroke = i.shadowBlur = i.shadowColor = i.shadowOffsetX = i.shadowOffsetY = null;
      var n = i.text;
      null != n && (n += ""), i.bind(t, this, e), Ue(n, i) && (this.setTransform(t), Le(this, t, n, i), this.restoreTransform(t));
    },
    getBoundingRect: function getBoundingRect() {
      var t = this.style;

      if (this.__dirty && ke(t, !0), !this._rect) {
        var e = t.text;
        null != e ? e += "" : e = "";
        var i = de(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);

        if (i.x += t.x || 0, i.y += t.y || 0, We(t.textStroke, t.textStrokeWidth)) {
          var n = t.textStrokeWidth;
          i.x -= n / 2, i.y -= n / 2, i.width += n, i.height += n;
        }

        this._rect = i;
      }

      return this._rect;
    }
  }, u(Mg, qe);

  var Sg = mn.extend({
    type: "circle",
    shape: {
      cx: 0,
      cy: 0,
      r: 0
    },
    buildPath: function buildPath(t, e, i) {
      i && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0);
    }
  }),
      Ig = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]],
      Tg = function Tg(t) {
    return yd.browser.ie && yd.browser.version >= 11 ? function () {
      var e,
          i = this.__clipPaths,
          n = this.style;
      if (i) for (var r = 0; r < i.length; r++) {
        var a = i[r],
            o = a && a.shape,
            s = a && a.type;

        if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
          for (var l = 0; l < Ig.length; l++) {
            Ig[l][2] = n[Ig[l][0]], n[Ig[l][0]] = Ig[l][1];
          }

          e = !0;
          break;
        }
      }
      if (t.apply(this, arguments), e) for (var l = 0; l < Ig.length; l++) {
        n[Ig[l][0]] = Ig[l][2];
      }
    } : t;
  },
      Dg = mn.extend({
    type: "sector",
    shape: {
      cx: 0,
      cy: 0,
      r0: 0,
      r: 0,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      clockwise: !0
    },
    brush: Tg(mn.prototype.brush),
    buildPath: function buildPath(t, e) {
      var i = e.cx,
          n = e.cy,
          r = Math.max(e.r0 || 0, 0),
          a = Math.max(e.r, 0),
          o = e.startAngle,
          s = e.endAngle,
          l = e.clockwise,
          h = Math.cos(o),
          u = Math.sin(o);
      t.moveTo(h * r + i, u * r + n), t.lineTo(h * a + i, u * a + n), t.arc(i, n, a, o, s, !l), t.lineTo(Math.cos(s) * r + i, Math.sin(s) * r + n), 0 !== r && t.arc(i, n, r, s, o, l), t.closePath();
    }
  }),
      Cg = mn.extend({
    type: "ring",
    shape: {
      cx: 0,
      cy: 0,
      r: 0,
      r0: 0
    },
    buildPath: function buildPath(t, e) {
      var i = e.cx,
          n = e.cy,
          r = 2 * Math.PI;
      t.moveTo(i + e.r, n), t.arc(i, n, e.r, 0, r, !1), t.moveTo(i + e.r0, n), t.arc(i, n, e.r0, 0, r, !0);
    }
  }),
      kg = function kg(t, e) {
    for (var i = t.length, n = [], r = 0, a = 1; i > a; a++) {
      r += j(t[a - 1], t[a]);
    }

    var o = r / 2;
    o = i > o ? i : o;

    for (var a = 0; o > a; a++) {
      var s,
          l,
          h,
          u = a / (o - 1) * (e ? i : i - 1),
          c = Math.floor(u),
          d = u - c,
          f = t[c % i];
      e ? (s = t[(c - 1 + i) % i], l = t[(c + 1) % i], h = t[(c + 2) % i]) : (s = t[0 === c ? c : c - 1], l = t[c > i - 2 ? i - 1 : c + 1], h = t[c > i - 3 ? i - 1 : c + 2]);
      var p = d * d,
          g = d * p;
      n.push([Sn(s[0], f[0], l[0], h[0], d, p, g), Sn(s[1], f[1], l[1], h[1], d, p, g)]);
    }

    return n;
  },
      Ag = function Ag(t, e, i, n) {
    var r,
        a,
        o,
        s,
        l = [],
        h = [],
        u = [],
        c = [];

    if (n) {
      o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];

      for (var d = 0, f = t.length; f > d; d++) {
        Q(o, o, t[d]), J(s, s, t[d]);
      }

      Q(o, o, n[0]), J(s, s, n[1]);
    }

    for (var d = 0, f = t.length; f > d; d++) {
      var p = t[d];
      if (i) r = t[d ? d - 1 : f - 1], a = t[(d + 1) % f];else {
        if (0 === d || d === f - 1) {
          l.push(H(t[d]));
          continue;
        }

        r = t[d - 1], a = t[d + 1];
      }
      X(h, a, r), q(h, h, e);
      var g = j(p, r),
          v = j(p, a),
          m = g + v;
      0 !== m && (g /= m, v /= m), q(u, h, -g), q(c, h, v);

      var y = W([], p, u),
          _ = W([], p, c);

      n && (J(y, y, o), Q(y, y, s), J(_, _, o), Q(_, _, s)), l.push(y), l.push(_);
    }

    return i && l.push(l.shift()), l;
  },
      Lg = mn.extend({
    type: "polygon",
    shape: {
      points: null,
      smooth: !1,
      smoothConstraint: null
    },
    buildPath: function buildPath(t, e) {
      In(t, e, !0);
    }
  }),
      Pg = mn.extend({
    type: "polyline",
    shape: {
      points: null,
      smooth: !1,
      smoothConstraint: null
    },
    style: {
      stroke: "#000",
      fill: null
    },
    buildPath: function buildPath(t, e) {
      In(t, e, !1);
    }
  }),
      Og = mn.extend({
    type: "rect",
    shape: {
      r: 0,
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    buildPath: function buildPath(t, e) {
      var i = e.x,
          n = e.y,
          r = e.width,
          a = e.height;
      e.r ? Ce(t, e) : t.rect(i, n, r, a), t.closePath();
    }
  }),
      Ng = mn.extend({
    type: "line",
    shape: {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      percent: 1
    },
    style: {
      stroke: "#000",
      fill: null
    },
    buildPath: function buildPath(t, e) {
      var i = e.x1,
          n = e.y1,
          r = e.x2,
          a = e.y2,
          o = e.percent;
      0 !== o && (t.moveTo(i, n), 1 > o && (r = i * (1 - o) + r * o, a = n * (1 - o) + a * o), t.lineTo(r, a));
    },
    pointAt: function pointAt(t) {
      var e = this.shape;
      return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];
    }
  }),
      Rg = [],
      Eg = mn.extend({
    type: "bezier-curve",
    shape: {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      cpx1: 0,
      cpy1: 0,
      percent: 1
    },
    style: {
      stroke: "#000",
      fill: null
    },
    buildPath: function buildPath(t, e) {
      var i = e.x1,
          n = e.y1,
          r = e.x2,
          a = e.y2,
          o = e.cpx1,
          s = e.cpy1,
          l = e.cpx2,
          h = e.cpy2,
          u = e.percent;
      0 !== u && (t.moveTo(i, n), null == l || null == h ? (1 > u && (Ki(i, o, r, u, Rg), o = Rg[1], r = Rg[2], Ki(n, s, a, u, Rg), s = Rg[1], a = Rg[2]), t.quadraticCurveTo(o, s, r, a)) : (1 > u && (Xi(i, o, l, r, u, Rg), o = Rg[1], l = Rg[2], r = Rg[3], Xi(n, s, h, a, u, Rg), s = Rg[1], h = Rg[2], a = Rg[3]), t.bezierCurveTo(o, s, l, h, r, a)));
    },
    pointAt: function pointAt(t) {
      return Tn(this.shape, t, !1);
    },
    tangentAt: function tangentAt(t) {
      var e = Tn(this.shape, t, !0);
      return Z(e, e);
    }
  }),
      zg = mn.extend({
    type: "arc",
    shape: {
      cx: 0,
      cy: 0,
      r: 0,
      startAngle: 0,
      endAngle: 2 * Math.PI,
      clockwise: !0
    },
    style: {
      stroke: "#000",
      fill: null
    },
    buildPath: function buildPath(t, e) {
      var i = e.cx,
          n = e.cy,
          r = Math.max(e.r, 0),
          a = e.startAngle,
          o = e.endAngle,
          s = e.clockwise,
          l = Math.cos(a),
          h = Math.sin(a);
      t.moveTo(l * r + i, h * r + n), t.arc(i, n, r, a, o, !s);
    }
  }),
      Bg = mn.extend({
    type: "compound",
    shape: {
      paths: null
    },
    _updatePathDirty: function _updatePathDirty() {
      for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e.length; i++) {
        t = t || e[i].__dirtyPath;
      }

      this.__dirtyPath = t, this.__dirty = this.__dirty || t;
    },
    beforeBrush: function beforeBrush() {
      this._updatePathDirty();

      for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++) {
        t[i].path || t[i].createPathProxy(), t[i].path.setScale(e[0], e[1]);
      }
    },
    buildPath: function buildPath(t, e) {
      for (var i = e.paths || [], n = 0; n < i.length; n++) {
        i[n].buildPath(t, i[n].shape, !0);
      }
    },
    afterBrush: function afterBrush() {
      for (var t = this.shape.paths || [], e = 0; e < t.length; e++) {
        t[e].__dirtyPath = !1;
      }
    },
    getBoundingRect: function getBoundingRect() {
      return this._updatePathDirty(), mn.prototype.getBoundingRect.call(this);
    }
  }),
      Vg = function Vg(t) {
    this.colorStops = t || [];
  };

  Vg.prototype = {
    constructor: Vg,
    addColorStop: function addColorStop(t, e) {
      this.colorStops.push({
        offset: t,
        color: e
      });
    }
  };

  var Fg = function Fg(t, e, i, n, r, a) {
    this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == i ? 1 : i, this.y2 = null == n ? 0 : n, this.type = "linear", this.global = a || !1, Vg.call(this, r);
  };

  Fg.prototype = {
    constructor: Fg
  }, u(Fg, Vg);

  var Hg = function Hg(t, e, i, n, r) {
    this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == i ? .5 : i, this.type = "radial", this.global = r || !1, Vg.call(this, n);
  };

  Hg.prototype = {
    constructor: Hg
  }, u(Hg, Vg), Dn.prototype.incremental = !0, Dn.prototype.clearDisplaybles = function () {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1;
  }, Dn.prototype.addDisplayable = function (t, e) {
    e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty();
  }, Dn.prototype.addDisplayables = function (t, e) {
    e = e || !1;

    for (var i = 0; i < t.length; i++) {
      this.addDisplayable(t[i], e);
    }
  }, Dn.prototype.eachPendingDisplayable = function (t) {
    for (var e = this._cursor; e < this._displayables.length; e++) {
      t && t(this._displayables[e]);
    }

    for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      t && t(this._temporaryDisplayables[e]);
    }
  }, Dn.prototype.update = function () {
    this.updateTransform();

    for (var t = this._cursor; t < this._displayables.length; t++) {
      var e = this._displayables[t];
      e.parent = this, e.update(), e.parent = null;
    }

    for (var t = 0; t < this._temporaryDisplayables.length; t++) {
      var e = this._temporaryDisplayables[t];
      e.parent = this, e.update(), e.parent = null;
    }
  }, Dn.prototype.brush = function (t) {
    for (var e = this._cursor; e < this._displayables.length; e++) {
      var i = this._displayables[e];
      i.beforeBrush && i.beforeBrush(t), i.brush(t, e === this._cursor ? null : this._displayables[e - 1]), i.afterBrush && i.afterBrush(t);
    }

    this._cursor = e;

    for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      var i = this._temporaryDisplayables[e];
      i.beforeBrush && i.beforeBrush(t), i.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), i.afterBrush && i.afterBrush(t);
    }

    this._temporaryDisplayables = [], this.notClear = !0;
  };
  var Wg = [];
  Dn.prototype.getBoundingRect = function () {
    if (!this._rect) {
      for (var t = new qt(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
        var i = this._displayables[e],
            n = i.getBoundingRect().clone();
        i.needLocalTransform() && n.applyTransform(i.getLocalTransform(Wg)), t.union(n);
      }

      this._rect = t;
    }

    return this._rect;
  }, Dn.prototype.contain = function (t, e) {
    var i = this.transformCoordToLocal(t, e),
        n = this.getBoundingRect();
    if (n.contain(i[0], i[1])) for (var r = 0; r < this._displayables.length; r++) {
      var a = this._displayables[r];
      if (a.contain(t, e)) return !0;
    }
    return !1;
  }, u(Dn, qe);
  var Gg = Math.round,
      Xg = Math.max,
      Yg = Math.min,
      Ug = {},
      qg = Mn,
      Zg = (Object.freeze || Object)({
    extendShape: Cn,
    extendPath: kn,
    makePath: An,
    makeImage: Ln,
    mergePath: qg,
    resizePath: On,
    subPixelOptimizeLine: Nn,
    subPixelOptimizeRect: Rn,
    subPixelOptimize: En,
    setHoverStyle: jn,
    setLabelStyle: Kn,
    setTextStyle: $n,
    setText: Qn,
    getFont: ar,
    updateProps: sr,
    initProps: lr,
    getTransform: hr,
    applyTransform: ur,
    transformDirection: cr,
    groupTransition: dr,
    clipPointsByRect: fr,
    clipRectByRect: pr,
    createIcon: gr,
    Group: pf,
    Image: Ze,
    Text: Mg,
    Circle: Sg,
    Sector: Dg,
    Ring: Cg,
    Polygon: Lg,
    Polyline: Pg,
    Rect: Og,
    Line: Ng,
    BezierCurve: Eg,
    Arc: zg,
    IncrementalDisplayable: Dn,
    CompoundPath: Bg,
    LinearGradient: Fg,
    RadialGradient: Hg,
    BoundingRect: qt
  }),
      jg = ["textStyle", "color"],
      Kg = {
    getTextColor: function getTextColor(t) {
      var e = this.ecModel;
      return this.getShallow("color") || (!t && e ? e.get(jg) : null);
    },
    getFont: function getFont() {
      return ar({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    },
    getTextRect: function getTextRect(t) {
      return de(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"));
    }
  },
      $g = mp([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),
      Qg = {
    getItemStyle: function getItemStyle(t, e) {
      var i = $g(this, t, e),
          n = this.getBorderLineDash();
      return n && (i.lineDash = n), i;
    },
    getBorderLineDash: function getBorderLineDash() {
      var t = this.get("borderType");
      return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1];
    }
  },
      Jg = c,
      tv = Ti();
  vr.prototype = {
    constructor: vr,
    init: null,
    mergeOption: function mergeOption(t) {
      r(this.option, t, !0);
    },
    get: function get(t, e) {
      return null == t ? this.option : mr(this.option, this.parsePath(t), !e && yr(this, t));
    },
    getShallow: function getShallow(t, e) {
      var i = this.option,
          n = null == i ? i : i[t],
          r = !e && yr(this, t);
      return null == n && r && (n = r.getShallow(t)), n;
    },
    getModel: function getModel(t, e) {
      var i,
          n = null == t ? this.option : mr(this.option, t = this.parsePath(t));
      return e = e || (i = yr(this, t)) && i.getModel(t), new vr(n, e, this.ecModel);
    },
    isEmpty: function isEmpty() {
      return null == this.option;
    },
    restoreData: function restoreData() {},
    clone: function clone() {
      var t = this.constructor;
      return new t(n(this.option));
    },
    setReadOnly: function setReadOnly() {},
    parsePath: function parsePath(t) {
      return "string" == typeof t && (t = t.split(".")), t;
    },
    customizeGetParent: function customizeGetParent(t) {
      tv(this).getParent = t;
    },
    isAnimationEnabled: function isAnimationEnabled() {
      if (!yd.node) {
        if (null != this.option.animation) return !!this.option.animation;
        if (this.parentModel) return this.parentModel.isAnimationEnabled();
      }
    }
  }, Oi(vr), Ni(vr), Jg(vr, _p), Jg(vr, wp), Jg(vr, Kg), Jg(vr, Qg);

  var ev = 0,
      iv = 1e-4,
      nv = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
      rv = L,
      av = /([&<>"'])/g,
      ov = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  },
      sv = ["a", "b", "c", "d", "e", "f", "g"],
      lv = function lv(t, e) {
    return "{" + t + (null == e ? "" : e) + "}";
  },
      hv = ye,
      uv = f,
      cv = ["left", "right", "top", "bottom", "width", "height"],
      dv = [["width", "left", "right"], ["height", "top", "bottom"]],
      fv = Yr,
      pv = (y(Yr, "vertical"), y(Yr, "horizontal"), {
    getBoxLayoutParams: function getBoxLayoutParams() {
      return {
        left: this.get("left"),
        top: this.get("top"),
        right: this.get("right"),
        bottom: this.get("bottom"),
        width: this.get("width"),
        height: this.get("height")
      };
    }
  }),
      gv = Ti(),
      vv = vr.extend({
    type: "component",
    id: "",
    name: "",
    mainType: "",
    subType: "",
    componentIndex: 0,
    defaultOption: null,
    ecModel: null,
    dependentModels: [],
    uid: null,
    layoutMode: null,
    $constructor: function $constructor(t, e, i, n) {
      vr.call(this, t, e, i, n), this.uid = _r("ec_cpt_model");
    },
    init: function init(t, e, i) {
      this.mergeDefaultAndTheme(t, i);
    },
    mergeDefaultAndTheme: function mergeDefaultAndTheme(t, e) {
      var i = this.layoutMode,
          n = i ? Kr(t) : {},
          a = e.getTheme();
      r(t, a.get(this.mainType)), r(t, this.getDefaultOption()), i && jr(t, n, i);
    },
    mergeOption: function mergeOption(t) {
      r(this.option, t, !0);
      var e = this.layoutMode;
      e && jr(this.option, t, e);
    },
    optionUpdated: function optionUpdated() {},
    getDefaultOption: function getDefaultOption() {
      var t = gv(this);

      if (!t.defaultOption) {
        for (var e = [], i = this.constructor; i;) {
          var n = i.prototype.defaultOption;
          n && e.push(n), i = i.superClass;
        }

        for (var a = {}, o = e.length - 1; o >= 0; o--) {
          a = r(a, e[o], !0);
        }

        t.defaultOption = a;
      }

      return t.defaultOption;
    },
    getReferringComponents: function getReferringComponents(t) {
      return this.ecModel.queryComponents({
        mainType: t,
        index: this.get(t + "Index", !0),
        id: this.get(t + "Id", !0)
      });
    }
  });

  zi(vv, {
    registerWhenExtend: !0
  }), xr(vv), wr(vv, Qr), c(vv, pv);
  var mv = "";
  "undefined" != typeof navigator && (mv = navigator.platform || "");

  var yv = {
    color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
    gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
    textStyle: {
      fontFamily: mv.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: "normal"
    },
    blendMode: null,
    animation: "auto",
    animationDuration: 1e3,
    animationDurationUpdate: 300,
    animationEasing: "exponentialOut",
    animationEasingUpdate: "cubicOut",
    animationThreshold: 2e3,
    progressiveThreshold: 3e3,
    progressive: 400,
    hoverLayerThreshold: 3e3,
    useUTC: !1
  },
      _v = Ti(),
      xv = {
    clearColorPalette: function clearColorPalette() {
      _v(this).colorIdx = 0, _v(this).colorNameMap = {};
    },
    getColorFromPalette: function getColorFromPalette(t, e, i) {
      e = e || this;

      var n = _v(e),
          r = n.colorIdx || 0,
          a = n.colorNameMap = n.colorNameMap || {};

      if (a.hasOwnProperty(t)) return a[t];
      var o = vi(this.get("color", !0)),
          s = this.get("colorLayer", !0),
          l = null != i && s ? Jr(s, i) : o;

      if (l = l || o, l && l.length) {
        var h = l[r];
        return t && (a[t] = h), n.colorIdx = (r + 1) % l.length, h;
      }
    }
  },
      wv = {
    cartesian2d: function cartesian2d(t, e, i, n) {
      var r = t.getReferringComponents("xAxis")[0],
          a = t.getReferringComponents("yAxis")[0];
      e.coordSysDims = ["x", "y"], i.set("x", r), i.set("y", a), ea(r) && (n.set("x", r), e.firstCategoryDimIndex = 0), ea(a) && (n.set("y", a), e.firstCategoryDimIndex = 1);
    },
    singleAxis: function singleAxis(t, e, i, n) {
      var r = t.getReferringComponents("singleAxis")[0];
      e.coordSysDims = ["single"], i.set("single", r), ea(r) && (n.set("single", r), e.firstCategoryDimIndex = 0);
    },
    polar: function polar(t, e, i, n) {
      var r = t.getReferringComponents("polar")[0],
          a = r.findAxisModel("radiusAxis"),
          o = r.findAxisModel("angleAxis");
      e.coordSysDims = ["radius", "angle"], i.set("radius", a), i.set("angle", o), ea(a) && (n.set("radius", a), e.firstCategoryDimIndex = 0), ea(o) && (n.set("angle", o), e.firstCategoryDimIndex = 1);
    },
    geo: function geo(t, e) {
      e.coordSysDims = ["lng", "lat"];
    },
    parallel: function parallel(t, e, i, n) {
      var r = t.ecModel,
          a = r.getComponent("parallel", t.get("parallelIndex")),
          o = e.coordSysDims = a.dimensions.slice();
      f(a.parallelAxisIndex, function (t, a) {
        var s = r.getComponent("parallelAxis", t),
            l = o[a];
        i.set(l, s), ea(s) && null == e.firstCategoryDimIndex && (n.set(l, s), e.firstCategoryDimIndex = a);
      });
    }
  },
      bv = "original",
      Mv = "arrayRows",
      Sv = "objectRows",
      Iv = "keyedColumns",
      Tv = "unknown",
      Dv = "typedArray",
      Cv = "column",
      kv = "row";

  ia.seriesDataToSource = function (t) {
    return new ia({
      data: t,
      sourceFormat: S(t) ? Dv : bv,
      fromDataset: !1
    });
  }, Ni(ia);
  var Av = Ti(),
      Lv = "\0_ec_inner",
      Pv = vr.extend({
    init: function init(t, e, i, n) {
      i = i || {}, this.option = null, this._theme = new vr(i), this._optionManager = n;
    },
    setOption: function setOption(t, e) {
      P(!(Lv in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null);
    },
    resetOption: function resetOption(t) {
      var e = !1,
          i = this._optionManager;

      if (!t || "recreate" === t) {
        var n = i.mountOption("recreate" === t);
        this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(n)) : ma.call(this, n), e = !0;
      }

      if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
        var r = i.getTimelineOption(this);
        r && (this.mergeOption(r), e = !0);
      }

      if (!t || "recreate" === t || "media" === t) {
        var a = i.getMediaOption(this, this._api);
        a.length && f(a, function (t) {
          this.mergeOption(t, e = !0);
        }, this);
      }

      return e;
    },
    mergeOption: function mergeOption(t) {
      function e(e, n) {
        var r = vi(t[e]),
            s = xi(a.get(e), r);
        wi(s), f(s, function (t) {
          var i = t.option;
          b(i) && (t.keyInfo.mainType = e, t.keyInfo.subType = _a(e, i, t.exist));
        });
        var l = ya(a, n);
        i[e] = [], a.set(e, []), f(s, function (t, n) {
          var r = t.exist,
              s = t.option;

          if (P(b(s) || r, "Empty component definition"), s) {
            var h = vv.getClass(e, t.keyInfo.subType, !0);
            if (r && r instanceof h) r.name = t.keyInfo.name, r.mergeOption(s, this), r.optionUpdated(s, !1);else {
              var u = o({
                dependentModels: l,
                componentIndex: n
              }, t.keyInfo);
              r = new h(s, this, this, u), o(r, u), r.init(s, this, this, u), r.optionUpdated(null, !0);
            }
          } else r.mergeOption({}, this), r.optionUpdated({}, !1);

          a.get(e)[n] = r, i[e][n] = r.option;
        }, this), "series" === e && xa(this, a.get("series"));
      }

      var i = this.option,
          a = this._componentsMap,
          s = [];
      aa(this), f(t, function (t, e) {
        null != t && (vv.hasClass(e) ? e && s.push(e) : i[e] = null == i[e] ? n(t) : r(i[e], t, !0));
      }), vv.topologicalTravel(s, vv.getAllClassMainTypes(), e, this), this._seriesIndicesMap = z(this._seriesIndices = this._seriesIndices || []);
    },
    getOption: function getOption() {
      var t = n(this.option);
      return f(t, function (e, i) {
        if (vv.hasClass(i)) {
          for (var e = vi(e), n = e.length - 1; n >= 0; n--) {
            Mi(e[n]) && e.splice(n, 1);
          }

          t[i] = e;
        }
      }), delete t[Lv], t;
    },
    getTheme: function getTheme() {
      return this._theme;
    },
    getComponent: function getComponent(t, e) {
      var i = this._componentsMap.get(t);

      return i ? i[e || 0] : void 0;
    },
    queryComponents: function queryComponents(t) {
      var e = t.mainType;
      if (!e) return [];

      var i = t.index,
          n = t.id,
          r = t.name,
          a = this._componentsMap.get(e);

      if (!a || !a.length) return [];
      var o;
      if (null != i) _(i) || (i = [i]), o = v(p(i, function (t) {
        return a[t];
      }), function (t) {
        return !!t;
      });else if (null != n) {
        var s = _(n);

        o = v(a, function (t) {
          return s && h(n, t.id) >= 0 || !s && t.id === n;
        });
      } else if (null != r) {
        var l = _(r);

        o = v(a, function (t) {
          return l && h(r, t.name) >= 0 || !l && t.name === r;
        });
      } else o = a.slice();
      return wa(o, t);
    },
    findComponents: function findComponents(t) {
      function e(t) {
        var e = r + "Index",
            i = r + "Id",
            n = r + "Name";
        return !t || null == t[e] && null == t[i] && null == t[n] ? null : {
          mainType: r,
          index: t[e],
          id: t[i],
          name: t[n]
        };
      }

      function i(e) {
        return t.filter ? v(e, t.filter) : e;
      }

      var n = t.query,
          r = t.mainType,
          a = e(n),
          o = a ? this.queryComponents(a) : this._componentsMap.get(r);
      return i(wa(o, t));
    },
    eachComponent: function eachComponent(t, e, i) {
      var n = this._componentsMap;
      if ("function" == typeof t) i = e, e = t, n.each(function (t, n) {
        f(t, function (t, r) {
          e.call(i, n, t, r);
        });
      });else if (w(t)) f(n.get(t), e, i);else if (b(t)) {
        var r = this.findComponents(t);
        f(r, e, i);
      }
    },
    getSeriesByName: function getSeriesByName(t) {
      var e = this._componentsMap.get("series");

      return v(e, function (e) {
        return e.name === t;
      });
    },
    getSeriesByIndex: function getSeriesByIndex(t) {
      return this._componentsMap.get("series")[t];
    },
    getSeriesByType: function getSeriesByType(t) {
      var e = this._componentsMap.get("series");

      return v(e, function (e) {
        return e.subType === t;
      });
    },
    getSeries: function getSeries() {
      return this._componentsMap.get("series").slice();
    },
    getSeriesCount: function getSeriesCount() {
      return this._componentsMap.get("series").length;
    },
    eachSeries: function eachSeries(t, e) {
      f(this._seriesIndices, function (i) {
        var n = this._componentsMap.get("series")[i];

        t.call(e, n, i);
      }, this);
    },
    eachRawSeries: function eachRawSeries(t, e) {
      f(this._componentsMap.get("series"), t, e);
    },
    eachSeriesByType: function eachSeriesByType(t, e, i) {
      f(this._seriesIndices, function (n) {
        var r = this._componentsMap.get("series")[n];

        r.subType === t && e.call(i, r, n);
      }, this);
    },
    eachRawSeriesByType: function eachRawSeriesByType(t, e, i) {
      return f(this.getSeriesByType(t), e, i);
    },
    isSeriesFiltered: function isSeriesFiltered(t) {
      return null == this._seriesIndicesMap.get(t.componentIndex);
    },
    getCurrentSeriesIndices: function getCurrentSeriesIndices() {
      return (this._seriesIndices || []).slice();
    },
    filterSeries: function filterSeries(t, e) {
      var i = v(this._componentsMap.get("series"), t, e);
      xa(this, i);
    },
    restoreData: function restoreData(t) {
      var e = this._componentsMap;
      xa(this, e.get("series"));
      var i = [];
      e.each(function (t, e) {
        i.push(e);
      }), vv.topologicalTravel(i, vv.getAllClassMainTypes(), function (i) {
        f(e.get(i), function (e) {
          ("series" !== i || !ga(e, t)) && e.restoreData();
        });
      });
    }
  });
  c(Pv, xv);
  var Ov = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
      Nv = {};
  Ma.prototype = {
    constructor: Ma,
    create: function create(t, e) {
      var i = [];
      f(Nv, function (n) {
        var r = n.create(t, e);
        i = i.concat(r || []);
      }), this._coordinateSystems = i;
    },
    update: function update(t, e) {
      f(this._coordinateSystems, function (i) {
        i.update && i.update(t, e);
      });
    },
    getCoordinateSystems: function getCoordinateSystems() {
      return this._coordinateSystems.slice();
    }
  }, Ma.register = function (t, e) {
    Nv[t] = e;
  }, Ma.get = function (t) {
    return Nv[t];
  };
  var Rv = f,
      Ev = n,
      zv = p,
      Bv = r,
      Vv = /^(min|max)?(.+)$/;
  Sa.prototype = {
    constructor: Sa,
    setOption: function setOption(t, e) {
      t && f(vi(t.series), function (t) {
        t && t.data && S(t.data) && N(t.data);
      }), t = Ev(t, !0);
      var i = this._optionBackup,
          n = Ia.call(this, t, e, !i);
      this._newBaseOption = n.baseOption, i ? (ka(i.baseOption, n.baseOption), n.timelineOptions.length && (i.timelineOptions = n.timelineOptions), n.mediaList.length && (i.mediaList = n.mediaList), n.mediaDefault && (i.mediaDefault = n.mediaDefault)) : this._optionBackup = n;
    },
    mountOption: function mountOption(t) {
      var e = this._optionBackup;
      return this._timelineOptions = zv(e.timelineOptions, Ev), this._mediaList = zv(e.mediaList, Ev), this._mediaDefault = Ev(e.mediaDefault), this._currentMediaIndices = [], Ev(t ? e.baseOption : this._newBaseOption);
    },
    getTimelineOption: function getTimelineOption(t) {
      var e,
          i = this._timelineOptions;

      if (i.length) {
        var n = t.getComponent("timeline");
        n && (e = Ev(i[n.getCurrentIndex()], !0));
      }

      return e;
    },
    getMediaOption: function getMediaOption() {
      var t = this._api.getWidth(),
          e = this._api.getHeight(),
          i = this._mediaList,
          n = this._mediaDefault,
          r = [],
          a = [];

      if (!i.length && !n) return a;

      for (var o = 0, s = i.length; s > o; o++) {
        Ta(i[o].query, t, e) && r.push(o);
      }

      return !r.length && n && (r = [-1]), r.length && !Ca(r, this._currentMediaIndices) && (a = zv(r, function (t) {
        return Ev(-1 === t ? n.option : i[t].option);
      })), this._currentMediaIndices = r, a;
    }
  };

  var Fv = f,
      Hv = b,
      Wv = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
      Gv = function Gv(t, e) {
    Fv(Ea(t.series), function (t) {
      Hv(t) && Ra(t);
    });
    var i = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
    e && i.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Fv(i, function (e) {
      Fv(Ea(t[e]), function (t) {
        t && (Oa(t, "axisLabel"), Oa(t.axisPointer, "label"));
      });
    }), Fv(Ea(t.parallel), function (t) {
      var e = t && t.parallelAxisDefault;
      Oa(e, "axisLabel"), Oa(e && e.axisPointer, "label");
    }), Fv(Ea(t.calendar), function (t) {
      La(t, "itemStyle"), Oa(t, "dayLabel"), Oa(t, "monthLabel"), Oa(t, "yearLabel");
    }), Fv(Ea(t.radar), function (t) {
      Oa(t, "name");
    }), Fv(Ea(t.geo), function (t) {
      Hv(t) && (Na(t), Fv(Ea(t.regions), function (t) {
        Na(t);
      }));
    }), Fv(Ea(t.timeline), function (t) {
      Na(t), La(t, "label"), La(t, "itemStyle"), La(t, "controlStyle", !0);
      var e = t.data;
      _(e) && f(e, function (t) {
        b(t) && (La(t, "label"), La(t, "itemStyle"));
      });
    }), Fv(Ea(t.toolbox), function (t) {
      La(t, "iconStyle"), Fv(t.feature, function (t) {
        La(t, "iconStyle");
      });
    }), Oa(za(t.axisPointer), "label"), Oa(za(t.tooltip).axisPointer, "label");
  },
      Xv = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
      Yv = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
      Uv = function Uv(t, e) {
    Gv(t, e), t.series = vi(t.series), f(t.series, function (t) {
      if (b(t)) {
        var e = t.type;

        if (("pie" === e || "gauge" === e) && null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
          var i = Ba(t, "pointer.color");
          null != i && Va(t, "itemStyle.normal.color", i);
        }

        Fa(t);
      }
    }), t.dataRange && (t.visualMap = t.dataRange), f(Yv, function (e) {
      var i = t[e];
      i && (_(i) || (i = [i]), f(i, function (t) {
        Fa(t);
      }));
    });
  },
      qv = function qv(t) {
    var e = z();
    t.eachSeries(function (t) {
      var i = t.get("stack");

      if (i) {
        var n = e.get(i) || e.set(i, []),
            r = t.getData(),
            a = {
          stackResultDimension: r.getCalculationInfo("stackResultDimension"),
          stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
          stackedDimension: r.getCalculationInfo("stackedDimension"),
          stackedByDimension: r.getCalculationInfo("stackedByDimension"),
          isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
          data: r,
          seriesModel: t
        };
        if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;
        n.length && r.setCalculationInfo("stackedOnSeries", n[n.length - 1].seriesModel), n.push(a);
      }
    }), e.each(Ha);
  },
      Zv = Wa.prototype;

  Zv.pure = !1, Zv.persistent = !0, Zv.getSource = function () {
    return this._source;
  };
  var jv = {
    arrayRows_column: {
      pure: !0,
      count: function count() {
        return Math.max(0, this._data.length - this._source.startIndex);
      },
      getItem: function getItem(t) {
        return this._data[t + this._source.startIndex];
      },
      appendData: Ya
    },
    arrayRows_row: {
      pure: !0,
      count: function count() {
        var t = this._data[0];
        return t ? Math.max(0, t.length - this._source.startIndex) : 0;
      },
      getItem: function getItem(t) {
        t += this._source.startIndex;

        for (var e = [], i = this._data, n = 0; n < i.length; n++) {
          var r = i[n];
          e.push(r ? r[t] : null);
        }

        return e;
      },
      appendData: function appendData() {
        throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
      }
    },
    objectRows: {
      pure: !0,
      count: Ga,
      getItem: Xa,
      appendData: Ya
    },
    keyedColumns: {
      pure: !0,
      count: function count() {
        var t = this._source.dimensionsDefine[0].name,
            e = this._data[t];
        return e ? e.length : 0;
      },
      getItem: function getItem(t) {
        for (var e = [], i = this._source.dimensionsDefine, n = 0; n < i.length; n++) {
          var r = this._data[i[n].name];
          e.push(r ? r[t] : null);
        }

        return e;
      },
      appendData: function appendData(t) {
        var e = this._data;
        f(t, function (t, i) {
          for (var n = e[i] || (e[i] = []), r = 0; r < (t || []).length; r++) {
            n.push(t[r]);
          }
        });
      }
    },
    original: {
      count: Ga,
      getItem: Xa,
      appendData: Ya
    },
    typedArray: {
      persistent: !1,
      pure: !0,
      count: function count() {
        return this._data ? this._data.length / this._dimSize : 0;
      },
      getItem: function getItem(t, e) {
        t -= this._offset, e = e || [];

        for (var i = this._dimSize * t, n = 0; n < this._dimSize; n++) {
          e[n] = this._data[i + n];
        }

        return e;
      },
      appendData: function appendData(t) {
        this._data = t;
      },
      clean: function clean() {
        this._offset += this.count(), this._data = null;
      }
    }
  },
      Kv = {
    arrayRows: Ua,
    objectRows: function objectRows(t, e, i, n) {
      return null != i ? t[n] : t;
    },
    keyedColumns: Ua,
    original: function original(t, e, i) {
      var n = yi(t);
      return null != i && n instanceof Array ? n[i] : n;
    },
    typedArray: Ua
  },
      $v = {
    arrayRows: qa,
    objectRows: function objectRows(t, e) {
      return Za(t[e], this._dimensionInfos[e]);
    },
    keyedColumns: qa,
    original: function original(t, e, i, n) {
      var r = t && (null == t.value ? t : t.value);
      return !this._rawData.pure && _i(t) && (this.hasItemOption = !0), Za(r instanceof Array ? r[n] : r, this._dimensionInfos[e]);
    },
    typedArray: function typedArray(t, e, i, n) {
      return t[n];
    }
  },
      Qv = /\{@(.+?)\}/g,
      Jv = {
    getDataParams: function getDataParams(t, e) {
      var i = this.getData(e),
          n = this.getRawValue(t, e),
          r = i.getRawIndex(t),
          a = i.getName(t),
          o = i.getRawDataItem(t),
          s = i.getItemVisual(t, "color");
      return {
        componentType: this.mainType,
        componentSubType: this.subType,
        seriesType: "series" === this.mainType ? this.subType : null,
        seriesIndex: this.seriesIndex,
        seriesId: this.id,
        seriesName: this.name,
        name: a,
        dataIndex: r,
        data: o,
        dataType: e,
        value: n,
        color: s,
        marker: Wr(s),
        $vars: ["seriesName", "name", "value"]
      };
    },
    getFormattedLabel: function getFormattedLabel(t, e, i, n, r) {
      e = e || "normal";
      var a = this.getData(i),
          o = a.getItemModel(t),
          s = this.getDataParams(t, i);
      null != n && s.value instanceof Array && (s.value = s.value[n]);
      var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);
      if ("function" == typeof l) return s.status = e, l(s);

      if ("string" == typeof l) {
        var h = Fr(l, s);
        return h.replace(Qv, function (e, i) {
          var n = i.length;
          return "[" === i.charAt(0) && "]" === i.charAt(n - 1) && (i = +i.slice(1, n - 1)), ja(a, t, i);
        });
      }
    },
    getRawValue: function getRawValue(t, e) {
      return ja(this.getData(e), t);
    },
    formatTooltip: function formatTooltip() {}
  },
      tm = Qa.prototype;

  tm.perform = function (t) {
    function e(t) {
      return !(t >= 1) && (t = 1), t;
    }

    var i = this._upstream,
        n = t && t.skip;

    if (this._dirty && i) {
      var r = this.context;
      r.data = r.outputData = i.context.outputData;
    }

    this.__pipeline && (this.__pipeline.currentTask = this);
    var a;
    this._plan && !n && (a = this._plan(this.context));
    var o = e(this._modBy),
        s = this._modDataCount || 0,
        l = e(t && t.modBy),
        h = t && t.modDataCount || 0;
    (o !== l || s !== h) && (a = "reset");
    var u;
    (this._dirty || "reset" === a) && (this._dirty = !1, u = to(this, n)), this._modBy = l, this._modDataCount = h;
    var c = t && t.step;

    if (this._dueEnd = i ? i._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
      var d = this._dueIndex,
          f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);

      if (!n && (u || f > d)) {
        var p = this._progress;
        if (_(p)) for (var g = 0; g < p.length; g++) {
          Ja(this, p[g], d, f, l, h);
        } else Ja(this, p, d, f, l, h);
      }

      this._dueIndex = f;
      var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;
      this._outputDueEnd = v;
    } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;

    return this.unfinished();
  };

  var em = function () {
    function t() {
      return i > n ? n++ : null;
    }

    function e() {
      var t = n % o * r + Math.ceil(n / o),
          e = n >= i ? null : a > t ? t : n;
      return n++, e;
    }

    var i,
        n,
        r,
        a,
        o,
        s = {
      reset: function reset(l, h, u, c) {
        n = l, i = h, r = u, a = c, o = Math.ceil(a / r), s.next = r > 1 && a > 0 ? e : t;
      }
    };
    return s;
  }();

  tm.dirty = function () {
    this._dirty = !0, this._onDirty && this._onDirty(this.context);
  }, tm.unfinished = function () {
    return this._progress && this._dueIndex < this._dueEnd;
  }, tm.pipe = function (t) {
    (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
  }, tm.dispose = function () {
    this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
  }, tm.getUpstream = function () {
    return this._upstream;
  }, tm.getDownstream = function () {
    return this._downstream;
  }, tm.setOutputEnd = function (t) {
    this._outputDueEnd = this._settedOutputEnd = t;
  };
  var im = Ti(),
      nm = vv.extend({
    type: "series.__base__",
    seriesIndex: 0,
    coordinateSystem: null,
    defaultOption: null,
    legendDataProvider: null,
    visualColorAccessPath: "itemStyle.color",
    layoutMode: null,
    init: function init(t, e, i) {
      this.seriesIndex = this.componentIndex, this.dataTask = $a({
        count: no,
        reset: ro
      }), this.dataTask.context = {
        model: this
      }, this.mergeDefaultAndTheme(t, i), oa(this);
      var n = this.getInitialData(t, i);
      oo(n, this), this.dataTask.context.data = n, im(this).dataBeforeProcessed = n, eo(this);
    },
    mergeDefaultAndTheme: function mergeDefaultAndTheme(t, e) {
      var i = this.layoutMode,
          n = i ? Kr(t) : {},
          a = this.subType;
      vv.hasClass(a) && (a += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this.getDefaultOption()), mi(t, "label", ["show"]), this.fillDataTextStyle(t.data), i && jr(t, n, i);
    },
    mergeOption: function mergeOption(t, e) {
      t = r(this.option, t, !0), this.fillDataTextStyle(t.data);
      var i = this.layoutMode;
      i && jr(this.option, t, i), oa(this);
      var n = this.getInitialData(t, e);
      oo(n, this), this.dataTask.dirty(), this.dataTask.context.data = n, im(this).dataBeforeProcessed = n, eo(this);
    },
    fillDataTextStyle: function fillDataTextStyle(t) {
      if (t && !S(t)) for (var e = ["show"], i = 0; i < t.length; i++) {
        t[i] && t[i].label && mi(t[i], "label", e);
      }
    },
    getInitialData: function getInitialData() {},
    appendData: function appendData(t) {
      var e = this.getRawData();
      e.appendData(t.data);
    },
    getData: function getData(t) {
      var e = lo(this);

      if (e) {
        var i = e.context.data;
        return null == t ? i : i.getLinkedData(t);
      }

      return im(this).data;
    },
    setData: function setData(t) {
      var e = lo(this);

      if (e) {
        var i = e.context;
        i.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), i.outputData = t, e !== this.dataTask && (i.data = t);
      }

      im(this).data = t;
    },
    getSource: function getSource() {
      return ra(this);
    },
    getRawData: function getRawData() {
      return im(this).dataBeforeProcessed;
    },
    getBaseAxis: function getBaseAxis() {
      var t = this.coordinateSystem;
      return t && t.getBaseAxis && t.getBaseAxis();
    },
    formatTooltip: function formatTooltip(t, e) {
      function i(i) {
        function n(t, i) {
          var n = r.getDimensionInfo(i);

          if (n && n.otherDims.tooltip !== !1) {
            var a = n.type,
                l = Wr({
              color: h,
              type: "subItem"
            }),
                u = (o ? l + Vr(n.displayName || "-") + ": " : "") + Vr("ordinal" === a ? t + "" : "time" === a ? e ? "" : Xr("yyyy/MM/dd hh:mm:ss", t) : zr(t));
            u && s.push(u);
          }
        }

        var o = g(i, function (t, e, i) {
          var n = r.getDimensionInfo(i);
          return t |= n && n.tooltip !== !1 && null != n.displayName;
        }, 0),
            s = [];
        return a.length ? f(a, function (e) {
          n(ja(r, t, e), e);
        }) : f(i, n), (o ? "<br/>" : "") + s.join(o ? "<br/>" : ", ");
      }

      function n(t) {
        return Vr(zr(t));
      }

      var r = this.getData(),
          a = r.mapDimension("defaultedTooltip", !0),
          o = a.length,
          s = this.getRawValue(t),
          l = _(s),
          h = r.getItemVisual(t, "color");

      b(h) && h.colorStops && (h = (h.colorStops[0] || {}).color), h = h || "transparent";
      var u = o > 1 || l && !o ? i(s) : n(o ? ja(r, t, a[0]) : l ? s[0] : s),
          c = Wr(h),
          d = r.getName(t),
          p = this.name;
      return bi(this) || (p = ""), p = p ? Vr(p) + (e ? ": " : "<br/>") : "", e ? c + p + u : p + c + (d ? Vr(d) + ": " + u : u);
    },
    isAnimationEnabled: function isAnimationEnabled() {
      if (yd.node) return !1;
      var t = this.getShallow("animation");
      return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t;
    },
    restoreData: function restoreData() {
      this.dataTask.dirty();
    },
    getColorFromPalette: function getColorFromPalette(t, e, i) {
      var n = this.ecModel,
          r = xv.getColorFromPalette.call(this, t, e, i);
      return r || (r = n.getColorFromPalette(t, e, i)), r;
    },
    coordDimToDataDim: function coordDimToDataDim(t) {
      return this.getRawData().mapDimension(t, !0);
    },
    getProgressive: function getProgressive() {
      return this.get("progressive");
    },
    getProgressiveThreshold: function getProgressiveThreshold() {
      return this.get("progressiveThreshold");
    },
    getAxisTooltipData: null,
    getTooltipPosition: null,
    pipeTask: null,
    preventIncremental: null,
    pipelineContext: null
  });
  c(nm, Jv), c(nm, xv);

  var rm = function rm() {
    this.group = new pf(), this.uid = _r("viewComponent");
  };

  rm.prototype = {
    constructor: rm,
    init: function init() {},
    render: function render() {},
    dispose: function dispose() {}
  };
  var am = rm.prototype;
  am.updateView = am.updateLayout = am.updateVisual = function () {}, Oi(rm), zi(rm, {
    registerWhenExtend: !0
  });

  var om = function om() {
    var t = Ti();
    return function (e) {
      var i = t(e),
          n = e.pipelineContext,
          r = i.large,
          a = i.progressiveRender,
          o = i.large = n.large,
          s = i.progressiveRender = n.progressiveRender;
      return !!(r ^ o || a ^ s) && "reset";
    };
  },
      sm = Ti(),
      lm = om();

  ho.prototype = {
    type: "chart",
    init: function init() {},
    render: function render() {},
    highlight: function highlight(t, e, i, n) {
      co(t.getData(), n, "emphasis");
    },
    downplay: function downplay(t, e, i, n) {
      co(t.getData(), n, "normal");
    },
    remove: function remove() {
      this.group.removeAll();
    },
    dispose: function dispose() {},
    incrementalPrepareRender: null,
    incrementalRender: null,
    updateTransform: null
  };
  var hm = ho.prototype;
  hm.updateView = hm.updateLayout = hm.updateVisual = function (t, e, i, n) {
    this.render(t, e, i, n);
  }, Oi(ho, ["dispose"]), zi(ho, {
    registerWhenExtend: !0
  }), ho.markUpdateMethod = function (t, e) {
    sm(t).updateMethod = e;
  };

  var um = {
    incrementalPrepareRender: {
      progress: function progress(t, e) {
        e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
      }
    },
    render: {
      forceFirstProgress: !0,
      progress: function progress(t, e) {
        e.view.render(e.model, e.ecModel, e.api, e.payload);
      }
    }
  },
      cm = "\0__throttleOriginMethod",
      dm = "\0__throttleRate",
      fm = "\0__throttleType",
      pm = {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function reset(t, e) {
      var i = t.getData(),
          n = (t.visualColorAccessPath || "itemStyle.color").split("."),
          r = t.get(n) || t.getColorFromPalette(t.name, null, e.getSeriesCount());

      if (i.setVisual("color", r), !e.isSeriesFiltered(t)) {
        "function" != typeof r || r instanceof Vg || i.each(function (e) {
          i.setItemVisual(e, "color", r(t.getDataParams(e)));
        });

        var a = function a(t, e) {
          var i = t.getItemModel(e),
              r = i.get(n, !0);
          null != r && t.setItemVisual(e, "color", r);
        };

        return {
          dataEach: i.hasItemOption ? a : null
        };
      }
    }
  },
      gm = {
    toolbox: {
      brush: {
        title: {
          rect: "矩形选择",
          polygon: "圈选",
          lineX: "横向选择",
          lineY: "纵向选择",
          keep: "保持选择",
          clear: "清除选择"
        }
      },
      dataView: {
        title: "数据视图",
        lang: ["数据视图", "关闭", "刷新"]
      },
      dataZoom: {
        title: {
          zoom: "区域缩放",
          back: "区域缩放还原"
        }
      },
      magicType: {
        title: {
          line: "切换为折线图",
          bar: "切换为柱状图",
          stack: "切换为堆叠",
          tiled: "切换为平铺"
        }
      },
      restore: {
        title: "还原"
      },
      saveAsImage: {
        title: "保存为图片",
        lang: ["右键另存为图片"]
      }
    },
    series: {
      typeNames: {
        pie: "饼图",
        bar: "柱状图",
        line: "折线图",
        scatter: "散点图",
        effectScatter: "涟漪散点图",
        radar: "雷达图",
        tree: "树图",
        treemap: "矩形树图",
        boxplot: "箱型图",
        candlestick: "K线图",
        k: "K线图",
        heatmap: "热力图",
        map: "地图",
        parallel: "平行坐标图",
        lines: "线图",
        graph: "关系图",
        sankey: "桑基图",
        funnel: "漏斗图",
        gauge: "仪表盘图",
        pictorialBar: "象形柱图",
        themeRiver: "主题河流图",
        sunburst: "旭日图"
      }
    },
    aria: {
      general: {
        withTitle: "这是一个关于“{title}”的图表。",
        withoutTitle: "这是一个图表，"
      },
      series: {
        single: {
          prefix: "",
          withName: "图表类型是{seriesType}，表示{seriesName}。",
          withoutName: "图表类型是{seriesType}。"
        },
        multiple: {
          prefix: "它由{seriesCount}个图表系列组成。",
          withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
          withoutName: "第{seriesId}个系列是一个{seriesType}，",
          separator: {
            middle: "；",
            end: "。"
          }
        }
      },
      data: {
        allData: "其数据是——",
        partialData: "其中，前{displayCnt}项是——",
        withName: "{name}的数据是{value}",
        withoutName: "{value}",
        separator: {
          middle: "，",
          end: ""
        }
      }
    }
  },
      vm = function vm(t, e) {
    function i(t, e) {
      if ("string" != typeof t) return t;
      var i = t;
      return f(e, function (t, e) {
        i = i.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t);
      }), i;
    }

    function n(t) {
      var e = o.get(t);

      if (null == e) {
        for (var i = t.split("."), n = gm.aria, r = 0; r < i.length; ++r) {
          n = n[i[r]];
        }

        return n;
      }

      return e;
    }

    function r() {
      var t = e.getModel("title").option;
      return t && t.length && (t = t[0]), t && t.text;
    }

    function a(t) {
      return gm.series.typeNames[t] || "自定义图";
    }

    var o = e.getModel("aria");

    if (o.get("show")) {
      if (o.get("description")) return void t.setAttribute("aria-label", o.get("description"));
      var s = 0;
      e.eachSeries(function () {
        ++s;
      }, this);
      var l,
          h = o.get("data.maxCount") || 10,
          u = o.get("series.maxCount") || 10,
          c = Math.min(s, u);

      if (!(1 > s)) {
        var d = r();
        l = d ? i(n("general.withTitle"), {
          title: d
        }) : n("general.withoutTitle");
        var p = [],
            g = s > 1 ? "series.multiple.prefix" : "series.single.prefix";
        l += i(n(g), {
          seriesCount: s
        }), e.eachSeries(function (t, e) {
          if (c > e) {
            var r,
                o = t.get("name"),
                l = "series." + (s > 1 ? "multiple" : "single") + ".";
            r = n(o ? l + "withName" : l + "withoutName"), r = i(r, {
              seriesId: t.seriesIndex,
              seriesName: t.get("name"),
              seriesType: a(t.subType)
            });
            var u = t.getData();
            window.data = u, r += u.count() > h ? i(n("data.partialData"), {
              displayCnt: h
            }) : n("data.allData");

            for (var d = [], f = 0; f < u.count(); f++) {
              if (h > f) {
                var g = u.getName(f),
                    v = ja(u, f);
                d.push(i(n(g ? "data.withName" : "data.withoutName"), {
                  name: g,
                  value: v
                }));
              }
            }

            r += d.join(n("data.separator.middle")) + n("data.separator.end"), p.push(r);
          }
        }), l += p.join(n("series.multiple.separator.middle")) + n("series.multiple.separator.end"), t.setAttribute("aria-label", l);
      }
    }
  },
      mm = Math.PI,
      ym = function ym(t, e) {
    e = e || {}, s(e, {
      text: "loading",
      color: "#c23531",
      textColor: "#000",
      maskColor: "rgba(255, 255, 255, 0.8)",
      zlevel: 0
    });
    var i = new Og({
      style: {
        fill: e.maskColor
      },
      zlevel: e.zlevel,
      z: 1e4
    }),
        n = new zg({
      shape: {
        startAngle: -mm / 2,
        endAngle: -mm / 2 + .1,
        r: 10
      },
      style: {
        stroke: e.color,
        lineCap: "round",
        lineWidth: 5
      },
      zlevel: e.zlevel,
      z: 10001
    }),
        r = new Og({
      style: {
        fill: "none",
        text: e.text,
        textPosition: "right",
        textDistance: 10,
        textFill: e.textColor
      },
      zlevel: e.zlevel,
      z: 10001
    });
    n.animateShape(!0).when(1e3, {
      endAngle: 3 * mm / 2
    }).start("circularInOut"), n.animateShape(!0).when(1e3, {
      startAngle: 3 * mm / 2
    }).delay(300).start("circularInOut");
    var a = new pf();
    return a.add(n), a.add(r), a.add(i), a.resize = function () {
      var e = t.getWidth() / 2,
          a = t.getHeight() / 2;
      n.setShape({
        cx: e,
        cy: a
      });
      var o = n.shape.r;
      r.setShape({
        x: e - o,
        y: a - o,
        width: 2 * o,
        height: 2 * o
      }), i.setShape({
        x: 0,
        y: 0,
        width: t.getWidth(),
        height: t.getHeight()
      });
    }, a.resize(), a;
  },
      _m = mo.prototype;

  _m.restoreData = function (t, e) {
    t.restoreData(e), this._stageTaskMap.each(function (t) {
      var e = t.overallTask;
      e && e.dirty();
    });
  }, _m.getPerformArgs = function (t, e) {
    if (t.__pipeline) {
      var i = this._pipelineMap.get(t.__pipeline.id),
          n = i.context,
          r = !e && i.progressiveEnabled && (!n || n.progressiveRender) && t.__idxInPipeline > i.blockIndex,
          a = r ? i.step : null,
          o = n && n.modDataCount,
          s = null != o ? Math.ceil(o / a) : null;

      return {
        step: a,
        modBy: s,
        modDataCount: o
      };
    }
  }, _m.getPipeline = function (t) {
    return this._pipelineMap.get(t);
  }, _m.updateStreamModes = function (t, e) {
    var i = this._pipelineMap.get(t.uid),
        n = t.getData(),
        r = n.count(),
        a = i.progressiveEnabled && e.incrementalPrepareRender && r >= i.threshold,
        o = t.get("large") && r >= t.get("largeThreshold"),
        s = "mod" === t.get("progressiveChunkMode") ? r : null;

    t.pipelineContext = i.context = {
      progressiveRender: a,
      modDataCount: s,
      large: o
    };
  }, _m.restorePipelines = function (t) {
    var e = this,
        i = e._pipelineMap = z();
    t.eachSeries(function (t) {
      var n = t.getProgressive(),
          r = t.uid;
      i.set(r, {
        id: r,
        head: null,
        tail: null,
        threshold: t.getProgressiveThreshold(),
        progressiveEnabled: n && !(t.preventIncremental && t.preventIncremental()),
        blockIndex: -1,
        step: Math.round(n || 700),
        count: 0
      }), ko(e, t, t.dataTask);
    });
  }, _m.prepareStageTasks = function () {
    var t = this._stageTaskMap,
        e = this.ecInstance.getModel(),
        i = this.api;
    f(this._allHandlers, function (n) {
      var r = t.get(n.uid) || t.set(n.uid, []);
      n.reset && _o(this, n, r, e, i), n.overallReset && xo(this, n, r, e, i);
    }, this);
  }, _m.prepareView = function (t, e, i, n) {
    var r = t.renderTask,
        a = r.context;
    a.model = e, a.ecModel = i, a.api = n, r.__block = !t.incrementalPrepareRender, ko(this, e, r);
  }, _m.performDataProcessorTasks = function (t, e) {
    yo(this, this._dataProcessorHandlers, t, e, {
      block: !0
    });
  }, _m.performVisualTasks = function (t, e, i) {
    yo(this, this._visualHandlers, t, e, i);
  }, _m.performSeriesTasks = function (t) {
    var e;
    t.eachSeries(function (t) {
      e |= t.dataTask.perform();
    }), this.unfinished |= e;
  }, _m.plan = function () {
    this._pipelineMap.each(function (t) {
      var e = t.tail;

      do {
        if (e.__block) {
          t.blockIndex = e.__idxInPipeline;
          break;
        }

        e = e.getUpstream();
      } while (e);
    });
  };

  var xm = _m.updatePayload = function (t, e) {
    "remain" !== e && (t.context.payload = e);
  },
      wm = Do(0);

  mo.wrapStageHandler = function (t, e) {
    return x(t) && (t = {
      overallReset: t,
      seriesType: Ao(t)
    }), t.uid = _r("stageHandler"), e && (t.visualType = e), t;
  };

  var bm,
      Mm = {},
      Sm = {};
  Lo(Mm, Pv), Lo(Sm, ba), Mm.eachSeriesByType = Mm.eachRawSeriesByType = function (t) {
    bm = t;
  }, Mm.eachComponent = function (t) {
    "series" === t.mainType && t.subType && (bm = t.subType);
  };

  var Im = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
      Tm = {
    color: Im,
    colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], Im]
  },
      Dm = "#eee",
      Cm = function Cm() {
    return {
      axisLine: {
        lineStyle: {
          color: Dm
        }
      },
      axisTick: {
        lineStyle: {
          color: Dm
        }
      },
      axisLabel: {
        textStyle: {
          color: Dm
        }
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#aaa"
        }
      },
      splitArea: {
        areaStyle: {
          color: Dm
        }
      }
    };
  },
      km = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
      Am = {
    color: km,
    backgroundColor: "#333",
    tooltip: {
      axisPointer: {
        lineStyle: {
          color: Dm
        },
        crossStyle: {
          color: Dm
        }
      }
    },
    legend: {
      textStyle: {
        color: Dm
      }
    },
    textStyle: {
      color: Dm
    },
    title: {
      textStyle: {
        color: Dm
      }
    },
    toolbox: {
      iconStyle: {
        normal: {
          borderColor: Dm
        }
      }
    },
    dataZoom: {
      textStyle: {
        color: Dm
      }
    },
    visualMap: {
      textStyle: {
        color: Dm
      }
    },
    timeline: {
      lineStyle: {
        color: Dm
      },
      itemStyle: {
        normal: {
          color: km[1]
        }
      },
      label: {
        normal: {
          textStyle: {
            color: Dm
          }
        }
      },
      controlStyle: {
        normal: {
          color: Dm,
          borderColor: Dm
        }
      }
    },
    timeAxis: Cm(),
    logAxis: Cm(),
    valueAxis: Cm(),
    categoryAxis: Cm(),
    line: {
      symbol: "circle"
    },
    graph: {
      color: km
    },
    gauge: {
      title: {
        textStyle: {
          color: Dm
        }
      }
    },
    candlestick: {
      itemStyle: {
        normal: {
          color: "#FD1050",
          color0: "#0CF49B",
          borderColor: "#FD1050",
          borderColor0: "#0CF49B"
        }
      }
    }
  };

  Am.categoryAxis.splitLine.show = !1, vv.extend({
    type: "dataset",
    defaultOption: {
      seriesLayoutBy: Cv,
      sourceHeader: null,
      dimensions: null,
      source: null
    },
    optionUpdated: function optionUpdated() {
      na(this);
    }
  }), rm.extend({
    type: "dataset"
  });
  var Lm = P,
      Pm = f,
      Om = x,
      Nm = b,
      Rm = vv.parseClassType,
      Em = "4.1.0",
      zm = {
    zrender: "4.0.4"
  },
      Bm = 1,
      Vm = 1e3,
      Fm = 5e3,
      Hm = 1e3,
      Wm = 2e3,
      Gm = 3e3,
      Xm = 4e3,
      Ym = 5e3,
      Um = {
    PROCESSOR: {
      FILTER: Vm,
      STATISTIC: Fm
    },
    VISUAL: {
      LAYOUT: Hm,
      GLOBAL: Wm,
      CHART: Gm,
      COMPONENT: Xm,
      BRUSH: Ym
    }
  },
      qm = "__flagInMainProcess",
      Zm = "__optionUpdated",
      jm = /^[a-zA-Z0-9_]+$/;
  Oo.prototype.on = Po("on"), Oo.prototype.off = Po("off"), Oo.prototype.one = Po("one"), c(Oo, Ed);
  var Km = No.prototype;
  Km._onframe = function () {
    if (!this._disposed) {
      var t = this._scheduler;

      if (this[Zm]) {
        var e = this[Zm].silent;
        this[qm] = !0, Eo(this), $m.update.call(this), this[qm] = !1, this[Zm] = !1, Fo.call(this, e), Ho.call(this, e);
      } else if (t.unfinished) {
        var i = Bm,
            n = this._model,
            r = this._api;
        t.unfinished = !1;

        do {
          var a = +new Date();
          t.performSeriesTasks(n), t.performDataProcessorTasks(n), Bo(this, n), t.performVisualTasks(n), qo(this, this._model, r, "remain"), i -= +new Date() - a;
        } while (i > 0 && t.unfinished);

        t.unfinished || this._zr.flush();
      }
    }
  }, Km.getDom = function () {
    return this._dom;
  }, Km.getZr = function () {
    return this._zr;
  }, Km.setOption = function (t, e, i) {
    var n;

    if (Nm(e) && (i = e.lazyUpdate, n = e.silent, e = e.notMerge), this[qm] = !0, !this._model || e) {
      var r = new Sa(this._api),
          a = this._theme,
          o = this._model = new Pv(null, null, a, r);
      o.scheduler = this._scheduler, o.init(null, null, a, r);
    }

    this._model.setOption(t, iy), i ? (this[Zm] = {
      silent: n
    }, this[qm] = !1) : (Eo(this), $m.update.call(this), this._zr.flush(), this[Zm] = !1, this[qm] = !1, Fo.call(this, n), Ho.call(this, n));
  }, Km.setTheme = function () {
    console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
  }, Km.getModel = function () {
    return this._model;
  }, Km.getOption = function () {
    return this._model && this._model.getOption();
  }, Km.getWidth = function () {
    return this._zr.getWidth();
  }, Km.getHeight = function () {
    return this._zr.getHeight();
  }, Km.getDevicePixelRatio = function () {
    return this._zr.painter.dpr || window.devicePixelRatio || 1;
  }, Km.getRenderedCanvas = function (t) {
    if (yd.canvasSupported) {
      t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
      var e = this._zr;
      return e.painter.getRenderedCanvas(t);
    }
  }, Km.getSvgDataUrl = function () {
    if (yd.svgSupported) {
      var t = this._zr,
          e = t.storage.getDisplayList();
      return f(e, function (t) {
        t.stopAnimation(!0);
      }), t.painter.pathToDataUrl();
    }
  }, Km.getDataURL = function (t) {
    t = t || {};
    var e = t.excludeComponents,
        i = this._model,
        n = [],
        r = this;
    Pm(e, function (t) {
      i.eachComponent({
        mainType: t
      }, function (t) {
        var e = r._componentsMap[t.__viewId];
        e.group.ignore || (n.push(e), e.group.ignore = !0);
      });
    });
    var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
    return Pm(n, function (t) {
      t.group.ignore = !1;
    }), a;
  }, Km.getConnectedDataURL = function (t) {
    if (yd.canvasSupported) {
      var e = this.group,
          i = Math.min,
          r = Math.max,
          a = 1 / 0;

      if (ly[e]) {
        var o = a,
            s = a,
            l = -a,
            h = -a,
            u = [],
            c = t && t.pixelRatio || 1;
        f(sy, function (a) {
          if (a.group === e) {
            var c = a.getRenderedCanvas(n(t)),
                d = a.getDom().getBoundingClientRect();
            o = i(d.left, o), s = i(d.top, s), l = r(d.right, l), h = r(d.bottom, h), u.push({
              dom: c,
              left: d.left,
              top: d.top
            });
          }
        }), o *= c, s *= c, l *= c, h *= c;
        var d = l - o,
            p = h - s,
            g = kd();
        g.width = d, g.height = p;
        var v = gi(g);
        return Pm(u, function (t) {
          var e = new Ze({
            style: {
              x: t.left * c - o,
              y: t.top * c - s,
              image: t.dom
            }
          });
          v.add(e);
        }), v.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"));
      }

      return this.getDataURL(t);
    }
  }, Km.convertToPixel = y(Ro, "convertToPixel"), Km.convertFromPixel = y(Ro, "convertFromPixel"), Km.containPixel = function (t, e) {
    var i,
        n = this._model;
    return t = Di(n, t), f(t, function (t, n) {
      n.indexOf("Models") >= 0 && f(t, function (t) {
        var r = t.coordinateSystem;
        if (r && r.containPoint) i |= !!r.containPoint(e);else if ("seriesModels" === n) {
          var a = this._chartsMap[t.__viewId];
          a && a.containPoint && (i |= a.containPoint(e, t));
        }
      }, this);
    }, this), !!i;
  }, Km.getVisual = function (t, e) {
    var i = this._model;
    t = Di(i, t, {
      defaultMainType: "series"
    });
    var n = t.seriesModel,
        r = n.getData(),
        a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;
    return null != a ? r.getItemVisual(a, e) : r.getVisual(e);
  }, Km.getViewOfComponentModel = function (t) {
    return this._componentsMap[t.__viewId];
  }, Km.getViewOfSeriesModel = function (t) {
    return this._chartsMap[t.__viewId];
  };
  var $m = {
    prepareAndUpdate: function prepareAndUpdate(t) {
      Eo(this), $m.update.call(this, t);
    },
    update: function update(t) {
      var e = this._model,
          i = this._api,
          n = this._zr,
          r = this._coordSysMgr,
          a = this._scheduler;

      if (e) {
        a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, i), a.performDataProcessorTasks(e, t), Bo(this, e), r.update(e, i), Xo(e), a.performVisualTasks(e, t), Yo(this, e, i, t);
        var o = e.get("backgroundColor") || "transparent";
        if (yd.canvasSupported) n.setBackgroundColor(o);else {
          var s = It(o);
          o = Ot(s, "rgb"), 0 === s[3] && (o = "transparent");
        }
        Zo(e, i);
      }
    },
    updateTransform: function updateTransform(t) {
      var e = this._model,
          i = this,
          n = this._api;

      if (e) {
        var r = [];
        e.eachComponent(function (a, o) {
          var s = i.getViewOfComponentModel(o);
          if (s && s.__alive) if (s.updateTransform) {
            var l = s.updateTransform(o, e, n, t);
            l && l.update && r.push(s);
          } else r.push(s);
        });
        var a = z();
        e.eachSeries(function (r) {
          var o = i._chartsMap[r.__viewId];

          if (o.updateTransform) {
            var s = o.updateTransform(r, e, n, t);
            s && s.update && a.set(r.uid, 1);
          } else a.set(r.uid, 1);
        }), Xo(e), this._scheduler.performVisualTasks(e, t, {
          setDirty: !0,
          dirtyMap: a
        }), qo(i, e, n, t, a), Zo(e, this._api);
      }
    },
    updateView: function updateView(t) {
      var e = this._model;
      e && (ho.markUpdateMethod(t, "updateView"), Xo(e), this._scheduler.performVisualTasks(e, t, {
        setDirty: !0
      }), Yo(this, this._model, this._api, t), Zo(e, this._api));
    },
    updateVisual: function updateVisual(t) {
      $m.update.call(this, t);
    },
    updateLayout: function updateLayout(t) {
      $m.update.call(this, t);
    }
  };
  Km.resize = function (t) {
    this._zr.resize(t);

    var e = this._model;

    if (this._loadingFX && this._loadingFX.resize(), e) {
      var i = e.resetOption("media"),
          n = t && t.silent;
      this[qm] = !0, i && Eo(this), $m.update.call(this), this[qm] = !1, Fo.call(this, n), Ho.call(this, n);
    }
  }, Km.showLoading = function (t, e) {
    if (Nm(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), oy[t]) {
      var i = oy[t](this._api, e),
          n = this._zr;
      this._loadingFX = i, n.add(i);
    }
  }, Km.hideLoading = function () {
    this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
  }, Km.makeActionFromEvent = function (t) {
    var e = o({}, t);
    return e.type = ty[t.type], e;
  }, Km.dispatchAction = function (t, e) {
    if (Nm(e) || (e = {
      silent: !!e
    }), Jm[t.type] && this._model) {
      if (this[qm]) return void this._pendingActions.push(t);
      Vo.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && yd.browser.weChat && this._throttledZrFlush(), Fo.call(this, e.silent), Ho.call(this, e.silent);
    }
  }, Km.appendData = function (t) {
    var e = t.seriesIndex,
        i = this.getModel(),
        n = i.getSeriesByIndex(e);
    n.appendData(t), this._scheduler.unfinished = !0;
  }, Km.on = Po("on"), Km.off = Po("off"), Km.one = Po("one");
  var Qm = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
  Km._initEvents = function () {
    Pm(Qm, function (t) {
      this._zr.on(t, function (e) {
        var i,
            n = this.getModel(),
            r = e.target;
        if ("globalout" === t) i = {};else if (r && null != r.dataIndex) {
          var a = r.dataModel || n.getSeriesByIndex(r.seriesIndex);
          i = a && a.getDataParams(r.dataIndex, r.dataType) || {};
        } else r && r.eventData && (i = o({}, r.eventData));
        i && (i.event = e, i.type = t, this.trigger(t, i));
      }, this);
    }, this), Pm(ty, function (t, e) {
      this._messageCenter.on(e, function (t) {
        this.trigger(e, t);
      }, this);
    }, this);
  }, Km.isDisposed = function () {
    return this._disposed;
  }, Km.clear = function () {
    this.setOption({
      series: []
    }, !0);
  }, Km.dispose = function () {
    if (!this._disposed) {
      this._disposed = !0, ki(this.getDom(), cy, "");
      var t = this._api,
          e = this._model;
      Pm(this._componentsViews, function (i) {
        i.dispose(e, t);
      }), Pm(this._chartsViews, function (i) {
        i.dispose(e, t);
      }), this._zr.dispose(), delete sy[this.id];
    }
  }, c(No, Ed);
  var Jm = {},
      ty = {},
      ey = [],
      iy = [],
      ny = [],
      ry = [],
      ay = {},
      oy = {},
      sy = {},
      ly = {},
      hy = new Date() - 0,
      uy = new Date() - 0,
      cy = "_echarts_instance_",
      dy = {},
      fy = is;
  ps(Wm, pm), ss(Uv), ls(Fm, qv), vs("default", ym), us({
    type: "highlight",
    event: "highlight",
    update: "highlight"
  }, B), us({
    type: "downplay",
    event: "downplay",
    update: "downplay"
  }, B), os("light", Tm), os("dark", Am);
  var py = {},
      gy = "__ec_stack_",
      vy = .5,
      my = "undefined" != typeof Float32Array ? Float32Array : Array,
      yy = {
    seriesType: "bar",
    plan: om(),
    reset: function reset(t) {
      function e(t, e) {
        for (var i, c = new my(2 * t.count), d = [], f = [], p = 0; null != (i = t.next());) {
          f[h] = e.get(o, i), f[1 - h] = e.get(s, i), d = n.dataToPoint(f, null, d), c[p++] = d[0], c[p++] = d[1];
        }

        e.setLayout({
          largePoints: c,
          barWidth: u,
          valueAxisStart: Es(r, a, !1),
          valueAxisHorizontal: l
        });
      }

      if (Ns(t) && Rs(t)) {
        var i = t.getData(),
            n = t.coordinateSystem,
            r = n.getBaseAxis(),
            a = n.getOtherAxis(r),
            o = i.mapDimension(a.dim),
            s = i.mapDimension(r.dim),
            l = a.isHorizontal(),
            h = l ? 0 : 1,
            u = Ps(As([t]), r, t).width;
        return u > vy || (u = vy), {
          progress: e
        };
      }
    }
  };
  zs.prototype.parse = function (t) {
    return t;
  }, zs.prototype.getSetting = function (t) {
    return this._setting[t];
  }, zs.prototype.contain = function (t) {
    var e = this._extent;
    return t >= e[0] && t <= e[1];
  }, zs.prototype.normalize = function (t) {
    var e = this._extent;
    return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0]);
  }, zs.prototype.scale = function (t) {
    var e = this._extent;
    return t * (e[1] - e[0]) + e[0];
  }, zs.prototype.unionExtent = function (t) {
    var e = this._extent;
    t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
  }, zs.prototype.unionExtentFromData = function (t, e) {
    this.unionExtent(t.getApproximateExtent(e));
  }, zs.prototype.getExtent = function () {
    return this._extent.slice();
  }, zs.prototype.setExtent = function (t, e) {
    var i = this._extent;
    isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e);
  }, zs.prototype.isBlank = function () {
    return this._isBlank;
  }, zs.prototype.setBlank = function (t) {
    this._isBlank = t;
  }, zs.prototype.getLabel = null, Oi(zs), zi(zs, {
    registerWhenExtend: !0
  }), Bs.createByAxisModel = function (t) {
    var e = t.option,
        i = e.data,
        n = i && p(i, Fs);
    return new Bs({
      categories: n,
      needCollect: !n,
      deduplication: e.dedplication !== !1
    });
  };
  var _y = Bs.prototype;
  _y.getOrdinal = function (t) {
    return Vs(this).get(t);
  }, _y.parseAndCollect = function (t) {
    var e,
        i = this._needCollect;
    if ("string" != typeof t && !i) return t;
    if (i && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
    var n = Vs(this);
    return e = n.get(t), null == e && (i ? (e = this.categories.length, this.categories[e] = t, n.set(t, e)) : e = NaN), e;
  };
  var xy = zs.prototype,
      wy = zs.extend({
    type: "ordinal",
    init: function init(t, e) {
      (!t || _(t)) && (t = new Bs({
        categories: t
      })), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1];
    },
    parse: function parse(t) {
      return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t);
    },
    contain: function contain(t) {
      return t = this.parse(t), xy.contain.call(this, t) && null != this._ordinalMeta.categories[t];
    },
    normalize: function normalize(t) {
      return xy.normalize.call(this, this.parse(t));
    },
    scale: function scale(t) {
      return Math.round(xy.scale.call(this, t));
    },
    getTicks: function getTicks() {
      for (var t = [], e = this._extent, i = e[0]; i <= e[1];) {
        t.push(i), i++;
      }

      return t;
    },
    getLabel: function getLabel(t) {
      return this.isBlank() ? void 0 : this._ordinalMeta.categories[t];
    },
    count: function count() {
      return this._extent[1] - this._extent[0] + 1;
    },
    unionExtentFromData: function unionExtentFromData(t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    },
    getOrdinalMeta: function getOrdinalMeta() {
      return this._ordinalMeta;
    },
    niceTicks: B,
    niceExtent: B
  });

  wy.create = function () {
    return new wy();
  };

  var by = Ir,
      My = Ir,
      Sy = zs.extend({
    type: "interval",
    _interval: 0,
    _intervalPrecision: 2,
    setExtent: function setExtent(t, e) {
      var i = this._extent;
      isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e));
    },
    unionExtent: function unionExtent(t) {
      var e = this._extent;
      t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), Sy.prototype.setExtent.call(this, e[0], e[1]);
    },
    getInterval: function getInterval() {
      return this._interval;
    },
    setInterval: function setInterval(t) {
      this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = Ws(t);
    },
    getTicks: function getTicks() {
      return Ys(this._interval, this._extent, this._niceExtent, this._intervalPrecision);
    },
    getLabel: function getLabel(t, e) {
      if (null == t) return "";
      var i = e && e.precision;
      return null == i ? i = Dr(t) || 0 : "auto" === i && (i = this._intervalPrecision), t = My(t, i, !0), zr(t);
    },
    niceTicks: function niceTicks(t, e, i) {
      t = t || 5;
      var n = this._extent,
          r = n[1] - n[0];

      if (isFinite(r)) {
        0 > r && (r = -r, n.reverse());
        var a = Hs(n, t, e, i);
        this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent;
      }
    },
    niceExtent: function niceExtent(t) {
      var e = this._extent;
      if (e[0] === e[1]) if (0 !== e[0]) {
        var i = e[0];
        t.fixMax ? e[0] -= i / 2 : (e[1] += i / 2, e[0] -= i / 2);
      } else e[1] = 1;
      var n = e[1] - e[0];
      isFinite(n) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
      var r = this._interval;
      t.fixMin || (e[0] = My(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = My(Math.ceil(e[1] / r) * r));
    }
  });

  Sy.create = function () {
    return new Sy();
  };

  var Iy = Sy.prototype,
      Ty = Math.ceil,
      Dy = Math.floor,
      Cy = 1e3,
      ky = 60 * Cy,
      Ay = 60 * ky,
      Ly = 24 * Ay,
      Py = function Py(t, e, i, n) {
    for (; n > i;) {
      var r = i + n >>> 1;
      t[r][1] < e ? i = r + 1 : n = r;
    }

    return i;
  },
      Oy = Sy.extend({
    type: "time",
    getLabel: function getLabel(t) {
      var e = this._stepLvl,
          i = new Date(t);
      return Xr(e[0], i, this.getSetting("useUTC"));
    },
    niceExtent: function niceExtent(t) {
      var e = this._extent;

      if (e[0] === e[1] && (e[0] -= Ly, e[1] += Ly), e[1] === -1 / 0 && 1 / 0 === e[0]) {
        var i = new Date();
        e[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate()), e[0] = e[1] - Ly;
      }

      this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
      var n = this._interval;
      t.fixMin || (e[0] = Ir(Dy(e[0] / n) * n)), t.fixMax || (e[1] = Ir(Ty(e[1] / n) * n));
    },
    niceTicks: function niceTicks(t, e, i) {
      t = t || 10;
      var n = this._extent,
          r = n[1] - n[0],
          a = r / t;
      null != e && e > a && (a = e), null != i && a > i && (a = i);
      var o = Ny.length,
          s = Py(Ny, a, 0, o),
          l = Ny[Math.min(s, o - 1)],
          h = l[1];

      if ("year" === l[0]) {
        var u = r / h,
            c = Rr(u / t, !0);
        h *= c;
      }

      var d = this.getSetting("useUTC") ? 0 : 60 * new Date(+n[0] || +n[1]).getTimezoneOffset() * 1e3,
          f = [Math.round(Ty((n[0] - d) / h) * h + d), Math.round(Dy((n[1] - d) / h) * h + d)];
      Xs(f, n), this._stepLvl = l, this._interval = h, this._niceExtent = f;
    },
    parse: function parse(t) {
      return +Pr(t);
    }
  });

  f(["contain", "normalize"], function (t) {
    Oy.prototype[t] = function (e) {
      return Iy[t].call(this, this.parse(e));
    };
  });
  var Ny = [["hh:mm:ss", Cy], ["hh:mm:ss", 5 * Cy], ["hh:mm:ss", 10 * Cy], ["hh:mm:ss", 15 * Cy], ["hh:mm:ss", 30 * Cy], ["hh:mm\nMM-dd", ky], ["hh:mm\nMM-dd", 5 * ky], ["hh:mm\nMM-dd", 10 * ky], ["hh:mm\nMM-dd", 15 * ky], ["hh:mm\nMM-dd", 30 * ky], ["hh:mm\nMM-dd", Ay], ["hh:mm\nMM-dd", 2 * Ay], ["hh:mm\nMM-dd", 6 * Ay], ["hh:mm\nMM-dd", 12 * Ay], ["MM-dd\nyyyy", Ly], ["MM-dd\nyyyy", 2 * Ly], ["MM-dd\nyyyy", 3 * Ly], ["MM-dd\nyyyy", 4 * Ly], ["MM-dd\nyyyy", 5 * Ly], ["MM-dd\nyyyy", 6 * Ly], ["week", 7 * Ly], ["MM-dd\nyyyy", 10 * Ly], ["week", 14 * Ly], ["week", 21 * Ly], ["month", 31 * Ly], ["week", 42 * Ly], ["month", 62 * Ly], ["week", 42 * Ly], ["quarter", 380 * Ly / 4], ["month", 31 * Ly * 4], ["month", 31 * Ly * 5], ["half-year", 380 * Ly / 2], ["month", 31 * Ly * 8], ["month", 31 * Ly * 10], ["year", 380 * Ly]];

  Oy.create = function (t) {
    return new Oy({
      useUTC: t.ecModel.get("useUTC")
    });
  };

  var Ry = zs.prototype,
      Ey = Sy.prototype,
      zy = Dr,
      By = Ir,
      Vy = Math.floor,
      Fy = Math.ceil,
      Hy = Math.pow,
      Wy = Math.log,
      Gy = zs.extend({
    type: "log",
    base: 10,
    $constructor: function $constructor() {
      zs.apply(this, arguments), this._originalScale = new Sy();
    },
    getTicks: function getTicks() {
      var t = this._originalScale,
          e = this._extent,
          i = t.getExtent();
      return p(Ey.getTicks.call(this), function (n) {
        var r = Ir(Hy(this.base, n));
        return r = n === e[0] && t.__fixMin ? Us(r, i[0]) : r, r = n === e[1] && t.__fixMax ? Us(r, i[1]) : r;
      }, this);
    },
    getLabel: Ey.getLabel,
    scale: function scale(t) {
      return t = Ry.scale.call(this, t), Hy(this.base, t);
    },
    setExtent: function setExtent(t, e) {
      var i = this.base;
      t = Wy(t) / Wy(i), e = Wy(e) / Wy(i), Ey.setExtent.call(this, t, e);
    },
    getExtent: function getExtent() {
      var t = this.base,
          e = Ry.getExtent.call(this);
      e[0] = Hy(t, e[0]), e[1] = Hy(t, e[1]);
      var i = this._originalScale,
          n = i.getExtent();
      return i.__fixMin && (e[0] = Us(e[0], n[0])), i.__fixMax && (e[1] = Us(e[1], n[1])), e;
    },
    unionExtent: function unionExtent(t) {
      this._originalScale.unionExtent(t);

      var e = this.base;
      t[0] = Wy(t[0]) / Wy(e), t[1] = Wy(t[1]) / Wy(e), Ry.unionExtent.call(this, t);
    },
    unionExtentFromData: function unionExtentFromData(t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    },
    niceTicks: function niceTicks(t) {
      t = t || 10;
      var e = this._extent,
          i = e[1] - e[0];

      if (!(1 / 0 === i || 0 >= i)) {
        var n = Or(i),
            r = t / i * n;

        for (.5 >= r && (n *= 10); !isNaN(n) && Math.abs(n) < 1 && Math.abs(n) > 0;) {
          n *= 10;
        }

        var a = [Ir(Fy(e[0] / n) * n), Ir(Vy(e[1] / n) * n)];
        this._interval = n, this._niceExtent = a;
      }
    },
    niceExtent: function niceExtent(t) {
      Ey.niceExtent.call(this, t);
      var e = this._originalScale;
      e.__fixMin = t.fixMin, e.__fixMax = t.fixMax;
    }
  });
  f(["contain", "normalize"], function (t) {
    Gy.prototype[t] = function (e) {
      return e = Wy(e) / Wy(this.base), Ry[t].call(this, e);
    };
  }), Gy.create = function () {
    return new Gy();
  };

  var Xy = function Xy(t) {
    this._axes = {}, this._dimList = [], this.name = t || "";
  };

  Xy.prototype = {
    constructor: Xy,
    type: "cartesian",
    getAxis: function getAxis(t) {
      return this._axes[t];
    },
    getAxes: function getAxes() {
      return p(this._dimList, il, this);
    },
    getAxesByScale: function getAxesByScale(t) {
      return t = t.toLowerCase(), v(this.getAxes(), function (e) {
        return e.scale.type === t;
      });
    },
    addAxis: function addAxis(t) {
      var e = t.dim;
      this._axes[e] = t, this._dimList.push(e);
    },
    dataToCoord: function dataToCoord(t) {
      return this._dataCoordConvert(t, "dataToCoord");
    },
    coordToData: function coordToData(t) {
      return this._dataCoordConvert(t, "coordToData");
    },
    _dataCoordConvert: function _dataCoordConvert(t, e) {
      for (var i = this._dimList, n = t instanceof Array ? [] : {}, r = 0; r < i.length; r++) {
        var a = i[r],
            o = this._axes[a];
        n[a] = o[e](t[a]);
      }

      return n;
    }
  }, nl.prototype = {
    constructor: nl,
    type: "cartesian2d",
    dimensions: ["x", "y"],
    getBaseAxis: function getBaseAxis() {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
    },
    containPoint: function containPoint(t) {
      var e = this.getAxis("x"),
          i = this.getAxis("y");
      return e.contain(e.toLocalCoord(t[0])) && i.contain(i.toLocalCoord(t[1]));
    },
    containData: function containData(t) {
      return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1]);
    },
    dataToPoint: function dataToPoint(t, e, i) {
      var n = this.getAxis("x"),
          r = this.getAxis("y");
      return i = i || [], i[0] = n.toGlobalCoord(n.dataToCoord(t[0])), i[1] = r.toGlobalCoord(r.dataToCoord(t[1])), i;
    },
    clampData: function clampData(t, e) {
      var i = this.getAxis("x").scale,
          n = this.getAxis("y").scale,
          r = i.getExtent(),
          a = n.getExtent(),
          o = i.parse(t[0]),
          s = n.parse(t[1]);
      return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), e;
    },
    pointToData: function pointToData(t, e) {
      var i = this.getAxis("x"),
          n = this.getAxis("y");
      return e = e || [], e[0] = i.coordToData(i.toLocalCoord(t[0])), e[1] = n.coordToData(n.toLocalCoord(t[1])), e;
    },
    getOtherAxis: function getOtherAxis(t) {
      return this.getAxis("x" === t.dim ? "y" : "x");
    }
  }, u(nl, Xy);

  var Yy = Ti(),
      Uy = [0, 1],
      qy = function qy(t, e, i) {
    this.dim = t, this.scale = e, this._extent = i || [0, 0], this.inverse = !1, this.onBand = !1;
  };

  qy.prototype = {
    constructor: qy,
    contain: function contain(t) {
      var e = this._extent,
          i = Math.min(e[0], e[1]),
          n = Math.max(e[0], e[1]);
      return t >= i && n >= t;
    },
    containData: function containData(t) {
      return this.contain(this.dataToCoord(t));
    },
    getExtent: function getExtent() {
      return this._extent.slice();
    },
    getPixelPrecision: function getPixelPrecision(t) {
      return Cr(t || this.scale.getExtent(), this._extent);
    },
    setExtent: function setExtent(t, e) {
      var i = this._extent;
      i[0] = t, i[1] = e;
    },
    dataToCoord: function dataToCoord(t, e) {
      var i = this._extent,
          n = this.scale;
      return t = n.normalize(t), this.onBand && "ordinal" === n.type && (i = i.slice(), _l(i, n.count())), Mr(t, Uy, i, e);
    },
    coordToData: function coordToData(t, e) {
      var i = this._extent,
          n = this.scale;
      this.onBand && "ordinal" === n.type && (i = i.slice(), _l(i, n.count()));
      var r = Mr(t, i, Uy, e);
      return this.scale.scale(r);
    },
    pointToData: function pointToData() {},
    getTicksCoords: function getTicksCoords(t) {
      t = t || {};
      var e = t.tickModel || this.getTickModel(),
          i = al(this, e),
          n = i.ticks,
          r = p(n, function (t) {
        return {
          coord: this.dataToCoord(t),
          tickValue: t
        };
      }, this),
          a = e.get("alignWithLabel");
      return xl(this, r, i.tickCategoryInterval, a, t.clamp), r;
    },
    getViewLabels: function getViewLabels() {
      return rl(this).labels;
    },
    getLabelModel: function getLabelModel() {
      return this.model.getModel("axisLabel");
    },
    getTickModel: function getTickModel() {
      return this.model.getModel("axisTick");
    },
    getBandWidth: function getBandWidth() {
      var t = this._extent,
          e = this.scale.getExtent(),
          i = e[1] - e[0] + (this.onBand ? 1 : 0);
      0 === i && (i = 1);
      var n = Math.abs(t[1] - t[0]);
      return Math.abs(n) / i;
    },
    isHorizontal: null,
    getRotate: null,
    calculateCategoryInterval: function calculateCategoryInterval() {
      return pl(this);
    }
  };

  var Zy = function Zy(t, e, i, n, r) {
    qy.call(this, t, e, i), this.type = n || "value", this.position = r || "bottom";
  };

  Zy.prototype = {
    constructor: Zy,
    index: 0,
    getAxesOnZeroOf: null,
    model: null,
    isHorizontal: function isHorizontal() {
      var t = this.position;
      return "top" === t || "bottom" === t;
    },
    getGlobalExtent: function getGlobalExtent(t) {
      var e = this.getExtent();
      return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e;
    },
    getOtherAxis: function getOtherAxis() {
      this.grid.getOtherAxis();
    },
    pointToData: function pointToData(t, e) {
      return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e);
    },
    toLocalCoord: null,
    toGlobalCoord: null
  }, u(Zy, qy);
  var jy = {
    show: !0,
    zlevel: 0,
    z: 0,
    inverse: !1,
    name: "",
    nameLocation: "end",
    nameRotate: null,
    nameTruncate: {
      maxWidth: null,
      ellipsis: "...",
      placeholder: "."
    },
    nameTextStyle: {},
    nameGap: 15,
    silent: !1,
    triggerEvent: !1,
    tooltip: {
      show: !1
    },
    axisPointer: {},
    axisLine: {
      show: !0,
      onZero: !0,
      onZeroAxisIndex: null,
      lineStyle: {
        color: "#333",
        width: 1,
        type: "solid"
      },
      symbol: ["none", "none"],
      symbolSize: [10, 15]
    },
    axisTick: {
      show: !0,
      inside: !1,
      length: 5,
      lineStyle: {
        width: 1
      }
    },
    axisLabel: {
      show: !0,
      inside: !1,
      rotate: 0,
      showMinLabel: null,
      showMaxLabel: null,
      margin: 8,
      fontSize: 12
    },
    splitLine: {
      show: !0,
      lineStyle: {
        color: ["#ccc"],
        width: 1,
        type: "solid"
      }
    },
    splitArea: {
      show: !1,
      areaStyle: {
        color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
      }
    }
  },
      Ky = {};
  Ky.categoryAxis = r({
    boundaryGap: !0,
    deduplication: null,
    splitLine: {
      show: !1
    },
    axisTick: {
      alignWithLabel: !1,
      interval: "auto"
    },
    axisLabel: {
      interval: "auto"
    }
  }, jy), Ky.valueAxis = r({
    boundaryGap: [0, 0],
    splitNumber: 5
  }, jy), Ky.timeAxis = s({
    scale: !0,
    min: "dataMin",
    max: "dataMax"
  }, Ky.valueAxis), Ky.logAxis = s({
    scale: !0,
    logBase: 10
  }, Ky.valueAxis);

  var $y = ["value", "category", "time", "log"],
      Qy = function Qy(t, e, i, n) {
    f($y, function (o) {
      e.extend({
        type: t + "Axis." + o,
        mergeDefaultAndTheme: function mergeDefaultAndTheme(e, n) {
          var a = this.layoutMode,
              s = a ? Kr(e) : {},
              l = n.getTheme();
          r(e, l.get(o + "Axis")), r(e, this.getDefaultOption()), e.type = i(t, e), a && jr(e, s, a);
        },
        optionUpdated: function optionUpdated() {
          var t = this.option;
          "category" === t.type && (this.__ordinalMeta = Bs.createByAxisModel(this));
        },
        getCategories: function getCategories(t) {
          var e = this.option;
          return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0;
        },
        getOrdinalMeta: function getOrdinalMeta() {
          return this.__ordinalMeta;
        },
        defaultOption: a([{}, Ky[o + "Axis"], n], !0)
      });
    }), vv.registerSubTypeDefaulter(t + "Axis", y(i, t));
  },
      Jy = {
    getMin: function getMin(t) {
      var e = this.option,
          i = t || null == e.rangeStart ? e.min : e.rangeStart;
      return this.axis && null != i && "dataMin" !== i && "function" != typeof i && !T(i) && (i = this.axis.scale.parse(i)), i;
    },
    getMax: function getMax(t) {
      var e = this.option,
          i = t || null == e.rangeEnd ? e.max : e.rangeEnd;
      return this.axis && null != i && "dataMax" !== i && "function" != typeof i && !T(i) && (i = this.axis.scale.parse(i)), i;
    },
    getNeedCrossZero: function getNeedCrossZero() {
      var t = this.option;
      return null == t.rangeStart && null == t.rangeEnd && !t.scale;
    },
    getCoordSysModel: B,
    setRange: function setRange(t, e) {
      this.option.rangeStart = t, this.option.rangeEnd = e;
    },
    resetRange: function resetRange() {
      this.option.rangeStart = this.option.rangeEnd = null;
    }
  },
      t_ = vv.extend({
    type: "cartesian2dAxis",
    axis: null,
    init: function init() {
      t_.superApply(this, "init", arguments), this.resetRange();
    },
    mergeOption: function mergeOption() {
      t_.superApply(this, "mergeOption", arguments), this.resetRange();
    },
    restoreData: function restoreData() {
      t_.superApply(this, "restoreData", arguments), this.resetRange();
    },
    getCoordSysModel: function getCoordSysModel() {
      return this.ecModel.queryComponents({
        mainType: "grid",
        index: this.option.gridIndex,
        id: this.option.gridId
      })[0];
    }
  });

  r(t_.prototype, Jy);
  var e_ = {
    offset: 0
  };
  Qy("x", t_, wl, e_), Qy("y", t_, wl, e_), vv.extend({
    type: "grid",
    dependencies: ["xAxis", "yAxis"],
    layoutMode: "box",
    coordinateSystem: null,
    defaultOption: {
      show: !1,
      zlevel: 0,
      z: 0,
      left: "10%",
      top: 60,
      right: "10%",
      bottom: 60,
      containLabel: !1,
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 1,
      borderColor: "#ccc"
    }
  });
  var i_ = Ml.prototype;
  i_.type = "grid", i_.axisPointerEnabled = !0, i_.getRect = function () {
    return this._rect;
  }, i_.update = function (t, e) {
    var i = this._axesMap;
    this._updateScale(t, this.model), f(i.x, function (t) {
      js(t.scale, t.model);
    }), f(i.y, function (t) {
      js(t.scale, t.model);
    }), f(i.x, function (t) {
      Sl(i, "y", t);
    }), f(i.y, function (t) {
      Sl(i, "x", t);
    }), this.resize(this.model, e);
  }, i_.resize = function (t, e, i) {
    function n() {
      f(a, function (t) {
        var e = t.isHorizontal(),
            i = e ? [0, r.width] : [0, r.height],
            n = t.inverse ? 1 : 0;
        t.setExtent(i[n], i[1 - n]), Tl(t, e ? r.x : r.y);
      });
    }

    var r = Ur(t.getBoxLayoutParams(), {
      width: e.getWidth(),
      height: e.getHeight()
    });
    this._rect = r;
    var a = this._axesList;
    n(), !i && t.get("containLabel") && (f(a, function (t) {
      if (!t.model.get("axisLabel.inside")) {
        var e = tl(t);

        if (e) {
          var i = t.isHorizontal() ? "height" : "width",
              n = t.model.get("axisLabel.margin");
          r[i] -= e[i] + n, "top" === t.position ? r.y += e.height + n : "left" === t.position && (r.x += e.width + n);
        }
      }
    }), n());
  }, i_.getAxis = function (t, e) {
    var i = this._axesMap[t];

    if (null != i) {
      if (null == e) for (var n in i) {
        if (i.hasOwnProperty(n)) return i[n];
      }
      return i[e];
    }
  }, i_.getAxes = function () {
    return this._axesList.slice();
  }, i_.getCartesian = function (t, e) {
    if (null != t && null != e) {
      var i = "x" + t + "y" + e;
      return this._coordsMap[i];
    }

    b(t) && (e = t.yAxisIndex, t = t.xAxisIndex);

    for (var n = 0, r = this._coordsList; n < r.length; n++) {
      if (r[n].getAxis("x").index === t || r[n].getAxis("y").index === e) return r[n];
    }
  }, i_.getCartesians = function () {
    return this._coordsList.slice();
  }, i_.convertToPixel = function (t, e, i) {
    var n = this._findConvertTarget(t, e);

    return n.cartesian ? n.cartesian.dataToPoint(i) : n.axis ? n.axis.toGlobalCoord(n.axis.dataToCoord(i)) : null;
  }, i_.convertFromPixel = function (t, e, i) {
    var n = this._findConvertTarget(t, e);

    return n.cartesian ? n.cartesian.pointToData(i) : n.axis ? n.axis.coordToData(n.axis.toLocalCoord(i)) : null;
  }, i_._findConvertTarget = function (t, e) {
    var i,
        n,
        r = e.seriesModel,
        a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
        o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0],
        s = e.gridModel,
        l = this._coordsList;
    if (r) i = r.coordinateSystem, h(l, i) < 0 && (i = null);else if (a && o) i = this.getCartesian(a.componentIndex, o.componentIndex);else if (a) n = this.getAxis("x", a.componentIndex);else if (o) n = this.getAxis("y", o.componentIndex);else if (s) {
      var u = s.coordinateSystem;
      u === this && (i = this._coordsList[0]);
    }
    return {
      cartesian: i,
      axis: n
    };
  }, i_.containPoint = function (t) {
    var e = this._coordsList[0];
    return e ? e.containPoint(t) : void 0;
  }, i_._initCartesian = function (t, e) {
    function i(i) {
      return function (o, s) {
        if (bl(o, t, e)) {
          var l = o.get("position");
          "x" === i ? "top" !== l && "bottom" !== l && (l = "bottom", n[l] && (l = "top" === l ? "bottom" : "top")) : "left" !== l && "right" !== l && (l = "left", n[l] && (l = "left" === l ? "right" : "left")), n[l] = !0;
          var h = new Zy(i, Ks(o), [0, 0], o.get("type"), l),
              u = "category" === h.type;
          h.onBand = u && o.get("boundaryGap"), h.inverse = o.get("inverse"), o.axis = h, h.model = o, h.grid = this, h.index = s, this._axesList.push(h), r[i][s] = h, a[i]++;
        }
      };
    }

    var n = {
      left: !1,
      right: !1,
      top: !1,
      bottom: !1
    },
        r = {
      x: {},
      y: {}
    },
        a = {
      x: 0,
      y: 0
    };
    return e.eachComponent("xAxis", i("x"), this), e.eachComponent("yAxis", i("y"), this), a.x && a.y ? (this._axesMap = r, void f(r.x, function (e, i) {
      f(r.y, function (n, r) {
        var a = "x" + i + "y" + r,
            o = new nl(a);
        o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(e), o.addAxis(n);
      }, this);
    }, this)) : (this._axesMap = {}, void (this._axesList = []));
  }, i_._updateScale = function (t, e) {
    function i(t, e) {
      f(t.mapDimension(e.dim, !0), function (i) {
        e.scale.unionExtentFromData(t, Ts(t, i));
      });
    }

    f(this._axesList, function (t) {
      t.scale.setExtent(1 / 0, -1 / 0);
    }), t.eachSeries(function (n) {
      if (Cl(n)) {
        var r = Dl(n, t),
            a = r[0],
            o = r[1];
        if (!bl(a, e, t) || !bl(o, e, t)) return;
        var s = this.getCartesian(a.componentIndex, o.componentIndex),
            l = n.getData(),
            h = s.getAxis("x"),
            u = s.getAxis("y");
        "list" === l.type && (i(l, h, n), i(l, u, n));
      }
    }, this);
  }, i_.getTooltipAxes = function (t) {
    var e = [],
        i = [];
    return f(this.getCartesians(), function (n) {
      var r = null != t && "auto" !== t ? n.getAxis(t) : n.getBaseAxis(),
          a = n.getOtherAxis(r);
      h(e, r) < 0 && e.push(r), h(i, a) < 0 && i.push(a);
    }), {
      baseAxes: e,
      otherAxes: i
    };
  };
  var n_ = ["xAxis", "yAxis"];
  Ml.create = function (t, e) {
    var i = [];
    return t.eachComponent("grid", function (n, r) {
      var a = new Ml(n, t, e);
      a.name = "grid_" + r, a.resize(n, e, !0), n.coordinateSystem = a, i.push(a);
    }), t.eachSeries(function (e) {
      if (Cl(e)) {
        var i = Dl(e, t),
            n = i[0],
            r = i[1],
            a = n.getCoordSysModel(),
            o = a.coordinateSystem;
        e.coordinateSystem = o.getCartesian(n.componentIndex, r.componentIndex);
      }
    }), i;
  }, Ml.dimensions = Ml.prototype.dimensions = nl.prototype.dimensions, Ma.register("cartesian2d", Ml), Al.prototype = {
    constructor: Al,
    add: function add(t) {
      return this._add = t, this;
    },
    update: function update(t) {
      return this._update = t, this;
    },
    remove: function remove(t) {
      return this._remove = t, this;
    },
    execute: function execute() {
      var t,
          e = this._old,
          i = this._new,
          n = {},
          r = {},
          a = [],
          o = [];

      for (Ll(e, n, a, "_oldKeyGetter", this), Ll(i, r, o, "_newKeyGetter", this), t = 0; t < e.length; t++) {
        var s = a[t],
            l = r[s];

        if (null != l) {
          var h = l.length;
          h ? (1 === h && (r[s] = null), l = l.unshift()) : r[s] = null, this._update && this._update(l, t);
        } else this._remove && this._remove(t);
      }

      for (var t = 0; t < o.length; t++) {
        var s = o[t];

        if (r.hasOwnProperty(s)) {
          var l = r[s];
          if (null == l) continue;
          if (l.length) for (var u = 0, h = l.length; h > u; u++) {
            this._add && this._add(l[u]);
          } else this._add && this._add(l);
        }
      }
    }
  };

  var r_ = z(["tooltip", "label", "itemName", "itemId", "seriesName"]),
      a_ = b,
      o_ = "undefined",
      s_ = "e\0\0",
      l_ = {
    "float": (typeof Float64Array === "undefined" ? "undefined" : _typeof(Float64Array)) === o_ ? Array : Float64Array,
    "int": (typeof Int32Array === "undefined" ? "undefined" : _typeof(Int32Array)) === o_ ? Array : Int32Array,
    ordinal: Array,
    number: Array,
    time: Array
  },
      h_ = (typeof Uint32Array === "undefined" ? "undefined" : _typeof(Uint32Array)) === o_ ? Array : Uint32Array,
      u_ = (typeof Uint16Array === "undefined" ? "undefined" : _typeof(Uint16Array)) === o_ ? Array : Uint16Array,
      c_ = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
      d_ = ["_extent", "_approximateExtent", "_rawExtent"],
      f_ = function f_(t, e) {
    t = t || ["x", "y"];

    for (var i = {}, n = [], r = {}, a = 0; a < t.length; a++) {
      var o = t[a];
      w(o) && (o = {
        name: o
      });
      var s = o.name;
      o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), o.otherDims = o.otherDims || {}, n.push(s), i[s] = o, o.index = a, o.createInvertedIndices && (r[s] = []);
    }

    this.dimensions = n, this._dimensionInfos = i, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = Pl(this), this._invertedIndicesMap = r, this._calculationInfo = {};
  },
      p_ = f_.prototype;

  p_.type = "list", p_.hasItemOption = !0, p_.getDimension = function (t) {
    return isNaN(t) || (t = this.dimensions[t] || t), t;
  }, p_.getDimensionInfo = function (t) {
    return this._dimensionInfos[this.getDimension(t)];
  }, p_.getDimensionsOnCoord = function () {
    return this._dimensionsSummary.dataDimsOnCoord.slice();
  }, p_.mapDimension = function (t, e) {
    var i = this._dimensionsSummary;
    if (null == e) return i.encodeFirstDimNotExtra[t];
    var n = i.encode[t];
    return e === !0 ? (n || []).slice() : n && n[e];
  }, p_.initData = function (t, e, i) {
    var n = ia.isInstance(t) || d(t);
    n && (t = new Wa(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, i || (this.hasItemOption = !1), this.defaultDimValueGetter = $v[this._rawData.getSource().sourceFormat], this._dimValueGetter = i = i || this.defaultDimValueGetter, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1);
  }, p_.getProvider = function () {
    return this._rawData;
  }, p_.appendData = function (t) {
    var e = this._rawData,
        i = this.count();
    e.appendData(t);
    var n = e.count();
    e.persistent || (n += i), this._initDataFromProvider(i, n);
  }, p_._initDataFromProvider = function (t, e) {
    if (!(t >= e)) {
      for (var i, n = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, h = this._nameList, u = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = f - 1, g = 0; s > g; g++) {
        var v = o[g];
        c[v] || (c[v] = Ul());
        var m = l[v];
        0 === m.otherDims.itemName && (i = this._nameDimIdx = g), 0 === m.otherDims.itemId && (this._idDimIdx = g);
        var y = l_[m.type];
        a[v] || (a[v] = []);
        var _ = a[v][p];

        if (_ && _.length < n) {
          for (var x = new y(Math.min(e - p * n, n)), w = 0; w < _.length; w++) {
            x[w] = _[w];
          }

          a[v][p] = x;
        }

        for (var b = f * n; e > b; b += n) {
          a[v].push(new y(Math.min(e - b, n)));
        }

        this._chunkCount = a[v].length;
      }

      for (var M = new Array(s), S = t; e > S; S++) {
        M = r.getItem(S, M);

        for (var I = Math.floor(S / n), T = S % n, b = 0; s > b; b++) {
          var v = o[b],
              D = a[v][I],
              C = this._dimValueGetter(M, v, S, b);

          D[T] = C;
          var k = c[v];
          C < k[0] && (k[0] = C), C > k[1] && (k[1] = C);
        }

        if (!r.pure) {
          var A = h[S];
          if (M && null == A) if (null != M.name) h[S] = A = M.name;else if (null != i) {
            var L = o[i],
                P = a[L][I];

            if (P) {
              A = P[T];
              var O = l[L].ordinalMeta;
              O && O.categories.length && (A = O.categories[A]);
            }
          }
          var N = null == M ? null : M.id;
          null == N && null != A && (d[A] = d[A] || 0, N = A, d[A] > 0 && (N += "__ec__" + d[A]), d[A]++), null != N && (u[S] = N);
        }
      }

      !r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, Bl(this);
    }
  }, p_.count = function () {
    return this._count;
  }, p_.getIndices = function () {
    var t,
        e = this._indices;

    if (e) {
      var i = e.constructor,
          n = this._count;

      if (i === Array) {
        t = new i(n);

        for (var r = 0; n > r; r++) {
          t[r] = e[r];
        }
      } else t = new i(e.buffer, 0, n);
    } else for (var i = Rl(this), t = new i(this.count()), r = 0; r < t.length; r++) {
      t[r] = r;
    }

    return t;
  }, p_.get = function (t, e) {
    if (!(e >= 0 && e < this._count)) return NaN;
    var i = this._storage;
    if (!i[t]) return NaN;
    e = this.getRawIndex(e);
    var n = Math.floor(e / this._chunkSize),
        r = e % this._chunkSize,
        a = i[t][n],
        o = a[r];
    return o;
  }, p_.getByRawIndex = function (t, e) {
    if (!(e >= 0 && e < this._rawCount)) return NaN;
    var i = this._storage[t];
    if (!i) return NaN;
    var n = Math.floor(e / this._chunkSize),
        r = e % this._chunkSize,
        a = i[n];
    return a[r];
  }, p_._getFast = function (t, e) {
    var i = Math.floor(e / this._chunkSize),
        n = e % this._chunkSize,
        r = this._storage[t][i];
    return r[n];
  }, p_.getValues = function (t, e) {
    var i = [];
    _(t) || (e = t, t = this.dimensions);

    for (var n = 0, r = t.length; r > n; n++) {
      i.push(this.get(t[n], e));
    }

    return i;
  }, p_.hasValue = function (t) {
    for (var e = this._dimensionsSummary.dataDimsOnCoord, i = this._dimensionInfos, n = 0, r = e.length; r > n; n++) {
      if ("ordinal" !== i[e[n]].type && isNaN(this.get(e[n], t))) return !1;
    }

    return !0;
  }, p_.getDataExtent = function (t) {
    t = this.getDimension(t);
    var e = this._storage[t],
        i = Ul();
    if (!e) return i;
    var n,
        r = this.count(),
        a = !this._indices;
    if (a) return this._rawExtent[t].slice();
    if (n = this._extent[t]) return n.slice();
    n = i;

    for (var o = n[0], s = n[1], l = 0; r > l; l++) {
      var h = this._getFast(t, this.getRawIndex(l));

      o > h && (o = h), h > s && (s = h);
    }

    return n = [o, s], this._extent[t] = n, n;
  }, p_.getApproximateExtent = function (t) {
    return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t);
  }, p_.setApproximateExtent = function (t, e) {
    e = this.getDimension(e), this._approximateExtent[e] = t.slice();
  }, p_.getCalculationInfo = function (t) {
    return this._calculationInfo[t];
  }, p_.setCalculationInfo = function (t, e) {
    a_(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e;
  }, p_.getSum = function (t) {
    var e = this._storage[t],
        i = 0;
    if (e) for (var n = 0, r = this.count(); r > n; n++) {
      var a = this.get(t, n);
      isNaN(a) || (i += a);
    }
    return i;
  }, p_.getMedian = function (t) {
    var e = [];
    this.each(t, function (t) {
      isNaN(t) || e.push(t);
    });
    var i = [].concat(e).sort(function (t, e) {
      return t - e;
    }),
        n = this.count();
    return 0 === n ? 0 : n % 2 === 1 ? i[(n - 1) / 2] : (i[n / 2] + i[n / 2 - 1]) / 2;
  }, p_.rawIndexOf = function (t, e) {
    var i = t && this._invertedIndicesMap[t],
        n = i[e];
    return null == n || isNaN(n) ? -1 : n;
  }, p_.indexOfName = function (t) {
    for (var e = 0, i = this.count(); i > e; e++) {
      if (this.getName(e) === t) return e;
    }

    return -1;
  }, p_.indexOfRawIndex = function (t) {
    if (!this._indices) return t;
    if (t >= this._rawCount || 0 > t) return -1;
    var e = this._indices,
        i = e[t];
    if (null != i && i < this._count && i === t) return t;

    for (var n = 0, r = this._count - 1; r >= n;) {
      var a = (n + r) / 2 | 0;
      if (e[a] < t) n = a + 1;else {
        if (!(e[a] > t)) return a;
        r = a - 1;
      }
    }

    return -1;
  }, p_.indicesOfNearest = function (t, e, i) {
    var n = this._storage,
        r = n[t],
        a = [];
    if (!r) return a;
    null == i && (i = 1 / 0);

    for (var o = Number.MAX_VALUE, s = -1, l = 0, h = this.count(); h > l; l++) {
      var u = e - this.get(t, l),
          c = Math.abs(u);
      i >= u && o >= c && ((o > c || u >= 0 && 0 > s) && (o = c, s = u, a.length = 0), a.push(l));
    }

    return a;
  }, p_.getRawIndex = Fl, p_.getRawDataItem = function (t) {
    if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));

    for (var e = [], i = 0; i < this.dimensions.length; i++) {
      var n = this.dimensions[i];
      e.push(this.get(n, t));
    }

    return e;
  }, p_.getName = function (t) {
    var e = this.getRawIndex(t);
    return this._nameList[e] || Vl(this, this._nameDimIdx, e) || "";
  }, p_.getId = function (t) {
    return Wl(this, this.getRawIndex(t));
  }, p_.each = function (t, e, i, n) {
    if (this._count) {
      "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this, t = p(Gl(t), this.getDimension, this);

      for (var r = t.length, a = 0; a < this.count(); a++) {
        switch (r) {
          case 0:
            e.call(i, a);
            break;

          case 1:
            e.call(i, this.get(t[0], a), a);
            break;

          case 2:
            e.call(i, this.get(t[0], a), this.get(t[1], a), a);
            break;

          default:
            for (var o = 0, s = []; r > o; o++) {
              s[o] = this.get(t[o], a);
            }

            s[o] = a, e.apply(i, s);
        }
      }
    }
  }, p_.filterSelf = function (t, e, i, n) {
    if (this._count) {
      "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this, t = p(Gl(t), this.getDimension, this);

      for (var r = this.count(), a = Rl(this), o = new a(r), s = [], l = t.length, h = 0, u = t[0], c = 0; r > c; c++) {
        var d,
            f = this.getRawIndex(c);
        if (0 === l) d = e.call(i, c);else if (1 === l) {
          var g = this._getFast(u, f);

          d = e.call(i, g, c);
        } else {
          for (var v = 0; l > v; v++) {
            s[v] = this._getFast(u, f);
          }

          s[v] = c, d = e.apply(i, s);
        }
        d && (o[h++] = f);
      }

      return r > h && (this._indices = o), this._count = h, this._extent = {}, this.getRawIndex = this._indices ? Hl : Fl, this;
    }
  }, p_.selectRange = function (t) {
    if (this._count) {
      var e = [];

      for (var i in t) {
        t.hasOwnProperty(i) && e.push(i);
      }

      var n = e.length;

      if (n) {
        var r = this.count(),
            a = Rl(this),
            o = new a(r),
            s = 0,
            l = e[0],
            h = t[l][0],
            u = t[l][1],
            c = !1;

        if (!this._indices) {
          var d = 0;

          if (1 === n) {
            for (var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++) {
              for (var g = f[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                var y = g[m];
                (y >= h && u >= y || isNaN(y)) && (o[s++] = d), d++;
              }
            }

            c = !0;
          } else if (2 === n) {
            for (var f = this._storage[l], _ = this._storage[e[1]], x = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++) {
              for (var g = f[p], b = _[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                var y = g[m],
                    M = b[m];
                (y >= h && u >= y || isNaN(y)) && (M >= x && w >= M || isNaN(M)) && (o[s++] = d), d++;
              }
            }

            c = !0;
          }
        }

        if (!c) if (1 === n) for (var m = 0; r > m; m++) {
          var S = this.getRawIndex(m),
              y = this._getFast(l, S);

          (y >= h && u >= y || isNaN(y)) && (o[s++] = S);
        } else for (var m = 0; r > m; m++) {
          for (var I = !0, S = this.getRawIndex(m), p = 0; n > p; p++) {
            var T = e[p],
                y = this._getFast(i, S);

            (y < t[T][0] || y > t[T][1]) && (I = !1);
          }

          I && (o[s++] = this.getRawIndex(m));
        }
        return r > s && (this._indices = o), this._count = s, this._extent = {}, this.getRawIndex = this._indices ? Hl : Fl, this;
      }
    }
  }, p_.mapArray = function (t, e, i, n) {
    "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this;
    var r = [];
    return this.each(t, function () {
      r.push(e && e.apply(this, arguments));
    }, i), r;
  }, p_.map = function (t, e, i, n) {
    i = i || n || this, t = p(Gl(t), this.getDimension, this);
    var r = Xl(this, t);
    r._indices = this._indices, r.getRawIndex = r._indices ? Hl : Fl;

    for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, h = this.count(), u = [], c = r._rawExtent, d = 0; h > d; d++) {
      for (var f = 0; l > f; f++) {
        u[f] = this.get(t[f], d);
      }

      u[l] = d;
      var g = e && e.apply(i, u);

      if (null != g) {
        "object" != _typeof(g) && (o[0] = g, g = o);

        for (var v = this.getRawIndex(d), m = Math.floor(v / s), y = v % s, _ = 0; _ < g.length; _++) {
          var x = t[_],
              w = g[_],
              b = c[x],
              M = a[x];
          M && (M[m][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w);
        }
      }
    }

    return r;
  }, p_.downSample = function (t, e, i, n) {
    for (var r = Xl(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], h = this.count(), u = this._chunkSize, c = r._rawExtent[t], d = new (Rl(this))(h), f = 0, p = 0; h > p; p += s) {
      s > h - p && (s = h - p, o.length = s);

      for (var g = 0; s > g; g++) {
        var v = this.getRawIndex(p + g),
            m = Math.floor(v / u),
            y = v % u;
        o[g] = l[m][y];
      }

      var _ = i(o),
          x = this.getRawIndex(Math.min(p + n(o, _) || 0, h - 1)),
          w = Math.floor(x / u),
          b = x % u;

      l[w][b] = _, _ < c[0] && (c[0] = _), _ > c[1] && (c[1] = _), d[f++] = x;
    }

    return r._count = f, r._indices = d, r.getRawIndex = Hl, r;
  }, p_.getItemModel = function (t) {
    var e = this.hostModel;
    return new vr(this.getRawDataItem(t), e, e && e.ecModel);
  }, p_.diff = function (t) {
    var e = this;
    return new Al(t ? t.getIndices() : [], this.getIndices(), function (e) {
      return Wl(t, e);
    }, function (t) {
      return Wl(e, t);
    });
  }, p_.getVisual = function (t) {
    var e = this._visual;
    return e && e[t];
  }, p_.setVisual = function (t, e) {
    if (a_(t)) for (var i in t) {
      t.hasOwnProperty(i) && this.setVisual(i, t[i]);
    } else this._visual = this._visual || {}, this._visual[t] = e;
  }, p_.setLayout = function (t, e) {
    if (a_(t)) for (var i in t) {
      t.hasOwnProperty(i) && this.setLayout(i, t[i]);
    } else this._layout[t] = e;
  }, p_.getLayout = function (t) {
    return this._layout[t];
  }, p_.getItemLayout = function (t) {
    return this._itemLayouts[t];
  }, p_.setItemLayout = function (t, e, i) {
    this._itemLayouts[t] = i ? o(this._itemLayouts[t] || {}, e) : e;
  }, p_.clearItemLayouts = function () {
    this._itemLayouts.length = 0;
  }, p_.getItemVisual = function (t, e, i) {
    var n = this._itemVisuals[t],
        r = n && n[e];
    return null != r || i ? r : this.getVisual(e);
  }, p_.setItemVisual = function (t, e, i) {
    var n = this._itemVisuals[t] || {},
        r = this.hasItemVisual;
    if (this._itemVisuals[t] = n, a_(e)) for (var a in e) {
      e.hasOwnProperty(a) && (n[a] = e[a], r[a] = !0);
    } else n[e] = i, r[e] = !0;
  }, p_.clearAllVisual = function () {
    this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {};
  };

  var g_ = function g_(t) {
    t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType;
  };

  p_.setItemGraphicEl = function (t, e) {
    var i = this.hostModel;
    e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = i && i.seriesIndex, "group" === e.type && e.traverse(g_, e)), this._graphicEls[t] = e;
  }, p_.getItemGraphicEl = function (t) {
    return this._graphicEls[t];
  }, p_.eachItemGraphicEl = function (t, e) {
    f(this._graphicEls, function (i, n) {
      i && t && t.call(e, i, n);
    });
  }, p_.cloneShallow = function (t) {
    if (!t) {
      var e = p(this.dimensions, this.getDimensionInfo, this);
      t = new f_(e, this.hostModel);
    }

    if (t._storage = this._storage, zl(t, this), this._indices) {
      var i = this._indices.constructor;
      t._indices = new i(this._indices);
    } else t._indices = null;

    return t.getRawIndex = t._indices ? Hl : Fl, t;
  }, p_.wrapMethod = function (t, e) {
    var i = this[t];
    "function" == typeof i && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
      var t = i.apply(this, arguments);
      return e.apply(this, [t].concat(A(arguments)));
    });
  }, p_.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], p_.CHANGABLE_METHODS = ["filterSelf", "selectRange"];

  var v_ = function v_(t, e) {
    return e = e || {}, ql(e.coordDimensions || [], t, {
      dimsDef: e.dimensionsDefine || t.dimensionsDefine,
      encodeDef: e.encodeDefine || t.encodeDefine,
      dimCount: e.dimensionsCount,
      generateCoord: e.generateCoord,
      generateCoordCount: e.generateCoordCount
    });
  },
      m_ = nm.extend({
    type: "series.__base_bar__",
    getInitialData: function getInitialData() {
      return Kl(this.getSource(), this);
    },
    getMarkerPosition: function getMarkerPosition(t) {
      var e = this.coordinateSystem;

      if (e) {
        var i = e.dataToPoint(e.clampData(t)),
            n = this.getData(),
            r = n.getLayout("offset"),
            a = n.getLayout("size"),
            o = e.getBaseAxis().isHorizontal() ? 0 : 1;
        return i[o] += r + a / 2, i;
      }

      return [NaN, NaN];
    },
    defaultOption: {
      zlevel: 0,
      z: 2,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      barMinHeight: 0,
      barMinAngle: 0,
      large: !1,
      largeThreshold: 400,
      progressive: 3e3,
      progressiveChunkMode: "mod",
      itemStyle: {},
      emphasis: {}
    }
  });

  m_.extend({
    type: "series.bar",
    dependencies: ["grid", "polar"],
    brushSelector: "rect",
    getProgressive: function getProgressive() {
      return !!this.get("large") && this.get("progressive");
    },
    getProgressiveThreshold: function getProgressiveThreshold() {
      var t = this.get("progressiveThreshold"),
          e = this.get("largeThreshold");
      return e > t && (t = e), t;
    }
  });
  var y_ = mp([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
      __ = {
    getBarItemStyle: function getBarItemStyle(t) {
      var e = y_(this, t);

      if (this.getBorderLineDash) {
        var i = this.getBorderLineDash();
        i && (e.lineDash = i);
      }

      return e;
    }
  },
      x_ = ["itemStyle", "barBorderWidth"];
  o(vr.prototype, __), xs({
    type: "bar",
    render: function render(t, e, i) {
      this._updateDrawMode(t);

      var n = t.get("coordinateSystem");
      return ("cartesian2d" === n || "polar" === n) && (this._isLargeDraw ? this._renderLarge(t, e, i) : this._renderNormal(t, e, i)), this.group;
    },
    incrementalPrepareRender: function incrementalPrepareRender(t) {
      this._clear(), this._updateDrawMode(t);
    },
    incrementalRender: function incrementalRender(t, e) {
      this._incrementalRenderLarge(t, e);
    },
    _updateDrawMode: function _updateDrawMode(t) {
      var e = t.pipelineContext.large;
      (null == this._isLargeDraw || e ^ this._isLargeDraw) && (this._isLargeDraw = e, this._clear());
    },
    _renderNormal: function _renderNormal(t) {
      var e,
          i = this.group,
          n = t.getData(),
          r = this._data,
          a = t.coordinateSystem,
          o = a.getBaseAxis();
      "cartesian2d" === a.type ? e = o.isHorizontal() : "polar" === a.type && (e = "angle" === o.dim);
      var s = t.isAnimationEnabled() ? t : null;
      n.diff(r).add(function (r) {
        if (n.hasValue(r)) {
          var o = n.getItemModel(r),
              l = b_[a.type](n, r, o),
              h = w_[a.type](n, r, o, l, e, s);
          n.setItemGraphicEl(r, h), i.add(h), rh(h, n, r, o, l, t, e, "polar" === a.type);
        }
      }).update(function (o, l) {
        var h = r.getItemGraphicEl(l);
        if (!n.hasValue(o)) return void i.remove(h);
        var u = n.getItemModel(o),
            c = b_[a.type](n, o, u);
        h ? sr(h, {
          shape: c
        }, s, o) : h = w_[a.type](n, o, u, c, e, s, !0), n.setItemGraphicEl(o, h), i.add(h), rh(h, n, o, u, c, t, e, "polar" === a.type);
      }).remove(function (t) {
        var e = r.getItemGraphicEl(t);
        "cartesian2d" === a.type ? e && ih(t, s, e) : e && nh(t, s, e);
      }).execute(), this._data = n;
    },
    _renderLarge: function _renderLarge(t) {
      this._clear(), oh(t, this.group);
    },
    _incrementalRenderLarge: function _incrementalRenderLarge(t, e) {
      oh(e, this.group, !0);
    },
    dispose: B,
    remove: function remove(t) {
      this._clear(t);
    },
    _clear: function _clear(t) {
      var e = this.group,
          i = this._data;
      t && t.get("animation") && i && !this._isLargeDraw ? i.eachItemGraphicEl(function (e) {
        "sector" === e.type ? nh(e.dataIndex, t, e) : ih(e.dataIndex, t, e);
      }) : e.removeAll(), this._data = null;
    }
  });
  var w_ = {
    cartesian2d: function cartesian2d(t, e, i, n, r, a, s) {
      var l = new Og({
        shape: o({}, n)
      });

      if (a) {
        var h = l.shape,
            u = r ? "height" : "width",
            c = {};
        h[u] = 0, c[u] = n[u], Zg[s ? "updateProps" : "initProps"](l, {
          shape: c
        }, a, e);
      }

      return l;
    },
    polar: function polar(t, e, i, n, r, a, o) {
      var l = n.startAngle < n.endAngle,
          h = new Dg({
        shape: s({
          clockwise: l
        }, n)
      });

      if (a) {
        var u = h.shape,
            c = r ? "r" : "endAngle",
            d = {};
        u[c] = r ? 0 : n.startAngle, d[c] = n[c], Zg[o ? "updateProps" : "initProps"](h, {
          shape: d
        }, a, e);
      }

      return h;
    }
  },
      b_ = {
    cartesian2d: function cartesian2d(t, e, i) {
      var n = t.getItemLayout(e),
          r = ah(i, n),
          a = n.width > 0 ? 1 : -1,
          o = n.height > 0 ? 1 : -1;
      return {
        x: n.x + a * r / 2,
        y: n.y + o * r / 2,
        width: n.width - a * r,
        height: n.height - o * r
      };
    },
    polar: function polar(t, e) {
      var i = t.getItemLayout(e);
      return {
        cx: i.cx,
        cy: i.cy,
        r0: i.r0,
        r: i.r,
        startAngle: i.startAngle,
        endAngle: i.endAngle
      };
    }
  },
      M_ = mn.extend({
    type: "largeBar",
    shape: {
      points: []
    },
    buildPath: function buildPath(t, e) {
      for (var i = e.points, n = this.__startPoint, r = this.__valueIdx, a = 0; a < i.length; a += 2) {
        n[this.__valueIdx] = i[a + r], t.moveTo(n[0], n[1]), t.lineTo(i[a], i[a + 1]);
      }
    }
  }),
      S_ = Cn({
    type: "triangle",
    shape: {
      cx: 0,
      cy: 0,
      width: 0,
      height: 0
    },
    buildPath: function buildPath(t, e) {
      var i = e.cx,
          n = e.cy,
          r = e.width / 2,
          a = e.height / 2;
      t.moveTo(i, n - a), t.lineTo(i + r, n + a), t.lineTo(i - r, n + a), t.closePath();
    }
  }),
      I_ = Cn({
    type: "diamond",
    shape: {
      cx: 0,
      cy: 0,
      width: 0,
      height: 0
    },
    buildPath: function buildPath(t, e) {
      var i = e.cx,
          n = e.cy,
          r = e.width / 2,
          a = e.height / 2;
      t.moveTo(i, n - a), t.lineTo(i + r, n), t.lineTo(i, n + a), t.lineTo(i - r, n), t.closePath();
    }
  }),
      T_ = Cn({
    type: "pin",
    shape: {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    buildPath: function buildPath(t, e) {
      var i = e.x,
          n = e.y,
          r = e.width / 5 * 3,
          a = Math.max(r, e.height),
          o = r / 2,
          s = o * o / (a - o),
          l = n - a + o + s,
          h = Math.asin(s / o),
          u = Math.cos(h) * o,
          c = Math.sin(h),
          d = Math.cos(h),
          f = .6 * o,
          p = .7 * o;
      t.moveTo(i - u, l + s), t.arc(i, l, o, Math.PI - h, 2 * Math.PI + h), t.bezierCurveTo(i + u - c * f, l + s + d * f, i, n - p, i, n), t.bezierCurveTo(i, n - p, i - u + c * f, l + s + d * f, i - u, l + s), t.closePath();
    }
  }),
      D_ = Cn({
    type: "arrow",
    shape: {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    buildPath: function buildPath(t, e) {
      var i = e.height,
          n = e.width,
          r = e.x,
          a = e.y,
          o = n / 3 * 2;
      t.moveTo(r, a), t.lineTo(r + o, a + i), t.lineTo(r, a + i / 4 * 3), t.lineTo(r - o, a + i), t.lineTo(r, a), t.closePath();
    }
  }),
      C_ = {
    line: Ng,
    rect: Og,
    roundRect: Og,
    square: Og,
    circle: Sg,
    diamond: I_,
    pin: T_,
    arrow: D_,
    triangle: S_
  },
      k_ = {
    line: function line(t, e, i, n, r) {
      r.x1 = t, r.y1 = e + n / 2, r.x2 = t + i, r.y2 = e + n / 2;
    },
    rect: function rect(t, e, i, n, r) {
      r.x = t, r.y = e, r.width = i, r.height = n;
    },
    roundRect: function roundRect(t, e, i, n, r) {
      r.x = t, r.y = e, r.width = i, r.height = n, r.r = Math.min(i, n) / 4;
    },
    square: function square(t, e, i, n, r) {
      var a = Math.min(i, n);
      r.x = t, r.y = e, r.width = a, r.height = a;
    },
    circle: function circle(t, e, i, n, r) {
      r.cx = t + i / 2, r.cy = e + n / 2, r.r = Math.min(i, n) / 2;
    },
    diamond: function diamond(t, e, i, n, r) {
      r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n;
    },
    pin: function pin(t, e, i, n, r) {
      r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n;
    },
    arrow: function arrow(t, e, i, n, r) {
      r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n;
    },
    triangle: function triangle(t, e, i, n, r) {
      r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n;
    }
  },
      A_ = {};
  f(C_, function (t, e) {
    A_[e] = new t();
  });

  var L_ = Cn({
    type: "symbol",
    shape: {
      symbolType: "",
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    beforeBrush: function beforeBrush() {
      var t = this.style,
          e = this.shape;
      "pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle");
    },
    buildPath: function buildPath(t, e, i) {
      var n = e.symbolType,
          r = A_[n];
      "none" !== e.symbolType && (r || (n = "rect", r = A_[n]), k_[n](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, i));
    }
  }),
      P_ = Math.PI,
      O_ = function O_(t, e) {
    this.opt = e, this.axisModel = t, s(e, {
      labelOffset: 0,
      nameDirection: 1,
      tickDirection: 1,
      labelDirection: 1,
      silent: !0
    }), this.group = new pf();
    var i = new pf({
      position: e.position.slice(),
      rotation: e.rotation
    });
    i.updateTransform(), this._transform = i.transform, this._dumbGroup = i;
  };

  O_.prototype = {
    constructor: O_,
    hasBuilder: function hasBuilder(t) {
      return !!N_[t];
    },
    add: function add(t) {
      N_[t].call(this);
    },
    getGroup: function getGroup() {
      return this.group;
    }
  };

  var N_ = {
    axisLine: function axisLine() {
      var t = this.opt,
          e = this.axisModel;

      if (e.get("axisLine.show")) {
        var i = this.axisModel.axis.getExtent(),
            n = this._transform,
            r = [i[0], 0],
            a = [i[1], 0];
        n && ($(r, r, n), $(a, a, n));
        var s = o({
          lineCap: "round"
        }, e.getModel("axisLine.lineStyle").getLineStyle());
        this.group.add(new Ng(Nn({
          anid: "line",
          shape: {
            x1: r[0],
            y1: r[1],
            x2: a[0],
            y2: a[1]
          },
          style: s,
          strokeContainThreshold: t.strokeContainThreshold || 5,
          silent: !0,
          z2: 1
        })));
        var l = e.get("axisLine.symbol"),
            h = e.get("axisLine.symbolSize"),
            u = e.get("axisLine.symbolOffset") || 0;

        if ("number" == typeof u && (u = [u, u]), null != l) {
          "string" == typeof l && (l = [l, l]), ("string" == typeof h || "number" == typeof h) && (h = [h, h]);
          var c = h[0],
              d = h[1];
          f([{
            rotate: t.rotation + Math.PI / 2,
            offset: u[0],
            r: 0
          }, {
            rotate: t.rotation - Math.PI / 2,
            offset: u[1],
            r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1]))
          }], function (e, i) {
            if ("none" !== l[i] && null != l[i]) {
              var n = hh(l[i], -c / 2, -d / 2, c, d, s.stroke, !0),
                  a = e.r + e.offset,
                  o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];
              n.attr({
                rotation: e.rotate,
                position: o,
                silent: !0
              }), this.group.add(n);
            }
          }, this);
        }
      }
    },
    axisTickLabel: function axisTickLabel() {
      var t = this.axisModel,
          e = this.opt,
          i = mh(this, t, e),
          n = yh(this, t, e);
      fh(t, n, i);
    },
    axisName: function axisName() {
      var t = this.opt,
          e = this.axisModel,
          i = D(t.axisName, e.get("name"));

      if (i) {
        var n,
            r = e.get("nameLocation"),
            a = t.nameDirection,
            s = e.getModel("nameTextStyle"),
            l = e.get("nameGap") || 0,
            h = this.axisModel.axis.getExtent(),
            u = h[0] > h[1] ? -1 : 1,
            c = ["start" === r ? h[0] - u * l : "end" === r ? h[1] + u * l : (h[0] + h[1]) / 2, vh(r) ? t.labelOffset + a * l : 0],
            d = e.get("nameRotate");
        null != d && (d = d * P_ / 180);
        var f;
        vh(r) ? n = R_(t.rotation, null != d ? d : t.rotation, a) : (n = ch(t, r, d || 0, h), f = t.axisNameAvailableWidth, null != f && (f = Math.abs(f / Math.sin(n.rotation)), !isFinite(f) && (f = null)));

        var p = s.getFont(),
            g = e.get("nameTruncate", !0) || {},
            v = g.ellipsis,
            m = D(t.nameTruncateMaxWidth, g.maxWidth, f),
            y = null != v && null != m ? hv(i, m, p, v, {
          minChar: 2,
          placeholder: g.placeholder
        }) : i,
            _ = e.get("tooltip", !0),
            x = e.mainType,
            w = {
          componentType: x,
          name: i,
          $vars: ["name"]
        };

        w[x + "Index"] = e.componentIndex;
        var b = new Mg({
          anid: "name",
          __fullText: i,
          __truncatedText: y,
          position: c,
          rotation: n.rotation,
          silent: dh(e),
          z2: 1,
          tooltip: _ && _.show ? o({
            content: i,
            formatter: function formatter() {
              return i;
            },
            formatterParams: w
          }, _) : null
        });
        $n(b.style, s, {
          text: y,
          textFont: p,
          textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
          textAlign: n.textAlign,
          textVerticalAlign: n.textVerticalAlign
        }), e.get("triggerEvent") && (b.eventData = uh(e), b.eventData.targetType = "axisName", b.eventData.name = i), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform();
      }
    }
  },
      R_ = O_.innerTextLayout = function (t, e, i) {
    var n,
        r,
        a = Ar(e - t);
    return Lr(a) ? (r = i > 0 ? "top" : "bottom", n = "center") : Lr(a - P_) ? (r = i > 0 ? "bottom" : "top", n = "center") : (r = "middle", n = a > 0 && P_ > a ? i > 0 ? "right" : "left" : i > 0 ? "left" : "right"), {
      rotation: a,
      textAlign: n,
      textVerticalAlign: r
    };
  },
      E_ = f,
      z_ = y,
      B_ = ys({
    type: "axis",
    _axisPointer: null,
    axisPointerClass: null,
    render: function render(t, e, i, n) {
      this.axisPointerClass && Ih(t), B_.superApply(this, "render", arguments), Ah(this, t, e, i, n, !0);
    },
    updateAxisPointer: function updateAxisPointer(t, e, i, n) {
      Ah(this, t, e, i, n, !1);
    },
    remove: function remove(t, e) {
      var i = this._axisPointer;
      i && i.remove(e), B_.superApply(this, "remove", arguments);
    },
    dispose: function dispose(t, e) {
      Lh(this, e), B_.superApply(this, "dispose", arguments);
    }
  }),
      V_ = [];

  B_.registerAxisPointerClass = function (t, e) {
    V_[t] = e;
  }, B_.getAxisPointerClass = function (t) {
    return t && V_[t];
  };
  var F_ = ["axisLine", "axisTickLabel", "axisName"],
      H_ = ["splitArea", "splitLine"],
      W_ = B_.extend({
    type: "cartesianAxis",
    axisPointerClass: "CartesianAxisPointer",
    render: function render(t, e, i, n) {
      this.group.removeAll();
      var r = this._axisGroup;

      if (this._axisGroup = new pf(), this.group.add(this._axisGroup), t.get("show")) {
        var a = t.getCoordSysModel(),
            o = Ph(a, t),
            s = new O_(t, o);
        f(F_, s.add, s), this._axisGroup.add(s.getGroup()), f(H_, function (e) {
          t.get(e + ".show") && this["_" + e](t, a);
        }, this), dr(r, this._axisGroup, t), W_.superCall(this, "render", t, e, i, n);
      }
    },
    remove: function remove() {
      this._splitAreaColors = null;
    },
    _splitLine: function _splitLine(t, e) {
      var i = t.axis;

      if (!i.scale.isBlank()) {
        var n = t.getModel("splitLine"),
            r = n.getModel("lineStyle"),
            a = r.get("color");
        a = _(a) ? a : [a];

        for (var o = e.coordinateSystem.getRect(), l = i.isHorizontal(), h = 0, u = i.getTicksCoords({
          tickModel: n
        }), c = [], d = [], f = r.getLineStyle(), p = 0; p < u.length; p++) {
          var g = i.toGlobalCoord(u[p].coord);
          l ? (c[0] = g, c[1] = o.y, d[0] = g, d[1] = o.y + o.height) : (c[0] = o.x, c[1] = g, d[0] = o.x + o.width, d[1] = g);
          var v = h++ % a.length,
              m = u[p].tickValue;

          this._axisGroup.add(new Ng(Nn({
            anid: null != m ? "line_" + u[p].tickValue : null,
            shape: {
              x1: c[0],
              y1: c[1],
              x2: d[0],
              y2: d[1]
            },
            style: s({
              stroke: a[v]
            }, f),
            silent: !0
          })));
        }
      }
    },
    _splitArea: function _splitArea(t, e) {
      var i = t.axis;

      if (!i.scale.isBlank()) {
        var n = t.getModel("splitArea"),
            r = n.getModel("areaStyle"),
            a = r.get("color"),
            o = e.coordinateSystem.getRect(),
            l = i.getTicksCoords({
          tickModel: n,
          clamp: !0
        });

        if (l.length) {
          var h = a.length,
              u = this._splitAreaColors,
              c = z(),
              d = 0;
          if (u) for (var f = 0; f < l.length; f++) {
            var p = u.get(l[f].tickValue);

            if (null != p) {
              d = (p + (h - 1) * f) % h;
              break;
            }
          }
          var g = i.toGlobalCoord(l[0].coord),
              v = r.getAreaStyle();
          a = _(a) ? a : [a];

          for (var f = 1; f < l.length; f++) {
            var m,
                y,
                x,
                w,
                b = i.toGlobalCoord(l[f].coord);
            i.isHorizontal() ? (m = g, y = o.y, x = b - m, w = o.height, g = m + x) : (m = o.x, y = g, x = o.width, w = b - y, g = y + w);
            var M = l[f - 1].tickValue;
            null != M && c.set(M, d), this._axisGroup.add(new Og({
              anid: null != M ? "area_" + M : null,
              shape: {
                x: m,
                y: y,
                width: x,
                height: w
              },
              style: s({
                fill: a[d]
              }, v),
              silent: !0
            })), d = (d + 1) % h;
          }

          this._splitAreaColors = c;
        }
      }
    }
  });
  W_.extend({
    type: "xAxis"
  }), W_.extend({
    type: "yAxis"
  }), ys({
    type: "grid",
    render: function render(t) {
      this.group.removeAll(), t.get("show") && this.group.add(new Og({
        shape: t.coordinateSystem.getRect(),
        style: s({
          fill: t.get("backgroundColor")
        }, t.getItemStyle()),
        silent: !0,
        z2: -1
      }));
    }
  }), ss(function (t) {
    t.xAxis && t.yAxis && !t.grid && (t.grid = {});
  }), fs(y(Os, "bar")), fs(yy), ps({
    seriesType: "bar",
    reset: function reset(t) {
      t.getData().setVisual("legendSymbol", "roundRect");
    }
  }), nm.extend({
    type: "series.line",
    dependencies: ["grid", "polar"],
    getInitialData: function getInitialData() {
      return Kl(this.getSource(), this);
    },
    defaultOption: {
      zlevel: 0,
      z: 2,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      hoverAnimation: !0,
      clipOverflow: !0,
      label: {
        position: "top"
      },
      lineStyle: {
        width: 2,
        type: "solid"
      },
      step: !1,
      smooth: !1,
      smoothMonotone: null,
      symbol: "emptyCircle",
      symbolSize: 4,
      symbolRotate: null,
      showSymbol: !0,
      showAllSymbol: "auto",
      connectNulls: !1,
      sampling: "none",
      animationEasing: "linear",
      progressive: 0,
      hoverLayerThreshold: 1 / 0
    }
  });

  var G_ = Oh.prototype,
      X_ = Oh.getSymbolSize = function (t, e) {
    var i = t.getItemVisual(e, "symbolSize");
    return i instanceof Array ? i.slice() : [+i, +i];
  };

  G_._createSymbol = function (t, e, i, n, r) {
    this.removeAll();
    var a = e.getItemVisual(i, "color"),
        o = hh(t, -1, -1, 2, 2, a, r);
    o.attr({
      z2: 100,
      culling: !0,
      scale: Nh(n)
    }), o.drift = Rh, this._symbolType = t, this.add(o);
  }, G_.stopSymbolAnimation = function (t) {
    this.childAt(0).stopAnimation(t);
  }, G_.getSymbolPath = function () {
    return this.childAt(0);
  }, G_.getScale = function () {
    return this.childAt(0).scale;
  }, G_.highlight = function () {
    this.childAt(0).trigger("emphasis");
  }, G_.downplay = function () {
    this.childAt(0).trigger("normal");
  }, G_.setZ = function (t, e) {
    var i = this.childAt(0);
    i.zlevel = t, i.z = e;
  }, G_.setDraggable = function (t) {
    var e = this.childAt(0);
    e.draggable = t, e.cursor = t ? "move" : "pointer";
  }, G_.updateData = function (t, e, i) {
    this.silent = !1;
    var n = t.getItemVisual(e, "symbol") || "circle",
        r = t.hostModel,
        a = X_(t, e),
        o = n !== this._symbolType;

    if (o) {
      var s = t.getItemVisual(e, "symbolKeepAspect");

      this._createSymbol(n, t, e, a, s);
    } else {
      var l = this.childAt(0);
      l.silent = !1, sr(l, {
        scale: Nh(a)
      }, r, e);
    }

    if (this._updateCommon(t, e, a, i), o) {
      var l = this.childAt(0),
          h = i && i.fadeIn,
          u = {
        scale: l.scale.slice()
      };
      h && (u.style = {
        opacity: l.style.opacity
      }), l.scale = [0, 0], h && (l.style.opacity = 0), lr(l, u, r, e);
    }

    this._seriesModel = r;
  };
  var Y_ = ["itemStyle"],
      U_ = ["emphasis", "itemStyle"],
      q_ = ["label"],
      Z_ = ["emphasis", "label"];
  G_._updateCommon = function (t, e, i, n) {
    function r(e) {
      return b ? t.getName(e) : Jl(t, e);
    }

    var a = this.childAt(0),
        s = t.hostModel,
        l = t.getItemVisual(e, "color");
    "image" !== a.type && a.useStyle({
      strokeNoScale: !0
    });
    var h = n && n.itemStyle,
        u = n && n.hoverItemStyle,
        c = n && n.symbolRotate,
        d = n && n.symbolOffset,
        f = n && n.labelModel,
        p = n && n.hoverLabelModel,
        g = n && n.hoverAnimation,
        v = n && n.cursorStyle;

    if (!n || t.hasItemOption) {
      var m = n && n.itemModel ? n.itemModel : t.getItemModel(e);
      h = m.getModel(Y_).getItemStyle(["color"]), u = m.getModel(U_).getItemStyle(), c = m.getShallow("symbolRotate"), d = m.getShallow("symbolOffset"), f = m.getModel(q_), p = m.getModel(Z_), g = m.getShallow("hoverAnimation"), v = m.getShallow("cursor");
    } else u = o({}, u);

    var y = a.style;
    a.attr("rotation", (c || 0) * Math.PI / 180 || 0), d && a.attr("position", [Sr(d[0], i[0]), Sr(d[1], i[1])]), v && a.attr("cursor", v), a.setColor(l, n && n.symbolInnerColor), a.setStyle(h);

    var _ = t.getItemVisual(e, "opacity");

    null != _ && (y.opacity = _);
    var x = t.getItemVisual(e, "liftZ"),
        w = a.__z2Origin;
    null != x ? null == w && (a.__z2Origin = a.z2, a.z2 += x) : null != w && (a.z2 = w, a.__z2Origin = null);
    var b = n && n.useNameLabel;
    Kn(y, u, f, p, {
      labelFetcher: s,
      labelDataIndex: e,
      defaultText: r,
      isRectText: !0,
      autoColor: l
    }), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), a.hoverStyle = u, jn(a);
    var M = Nh(i);

    if (g && s.isAnimationEnabled()) {
      var S = function S() {
        if (!this.incremental) {
          var t = M[1] / M[0];
          this.animateTo({
            scale: [Math.max(1.1 * M[0], M[0] + 3), Math.max(1.1 * M[1], M[1] + 3 * t)]
          }, 400, "elasticOut");
        }
      },
          I = function I() {
        this.incremental || this.animateTo({
          scale: M
        }, 400, "elasticOut");
      };

      a.on("mouseover", S).on("mouseout", I).on("emphasis", S).on("normal", I);
    }
  }, G_.fadeOut = function (t, e) {
    var i = this.childAt(0);
    this.silent = i.silent = !0, !(e && e.keepLabel) && (i.style.text = null), sr(i, {
      style: {
        opacity: 0
      },
      scale: [0, 0]
    }, this._seriesModel, this.dataIndex, t);
  }, u(Oh, pf);
  var j_ = Eh.prototype;
  j_.updateData = function (t, e) {
    e = Bh(e);
    var i = this.group,
        n = t.hostModel,
        r = this._data,
        a = this._symbolCtor,
        o = Vh(t);
    r || i.removeAll(), t.diff(r).add(function (n) {
      var r = t.getItemLayout(n);

      if (zh(t, r, n, e)) {
        var s = new a(t, n, o);
        s.attr("position", r), t.setItemGraphicEl(n, s), i.add(s);
      }
    }).update(function (s, l) {
      var h = r.getItemGraphicEl(l),
          u = t.getItemLayout(s);
      return zh(t, u, s, e) ? (h ? (h.updateData(t, s, o), sr(h, {
        position: u
      }, n)) : (h = new a(t, s), h.attr("position", u)), i.add(h), void t.setItemGraphicEl(s, h)) : void i.remove(h);
    }).remove(function (t) {
      var e = r.getItemGraphicEl(t);
      e && e.fadeOut(function () {
        i.remove(e);
      });
    }).execute(), this._data = t;
  }, j_.isPersistent = function () {
    return !0;
  }, j_.updateLayout = function () {
    var t = this._data;
    t && t.eachItemGraphicEl(function (e, i) {
      var n = t.getItemLayout(i);
      e.attr("position", n);
    });
  }, j_.incrementalPrepareUpdate = function (t) {
    this._seriesScope = Vh(t), this._data = null, this.group.removeAll();
  }, j_.incrementalUpdate = function (t, e, i) {
    function n(t) {
      t.isGroup || (t.incremental = t.useHoverLayer = !0);
    }

    i = Bh(i);

    for (var r = t.start; r < t.end; r++) {
      var a = e.getItemLayout(r);

      if (zh(e, a, r, i)) {
        var o = new this._symbolCtor(e, r, this._seriesScope);
        o.traverse(n), o.attr("position", a), this.group.add(o), e.setItemGraphicEl(r, o);
      }
    }
  }, j_.remove = function (t) {
    var e = this.group,
        i = this._data;
    i && t ? i.eachItemGraphicEl(function (t) {
      t.fadeOut(function () {
        e.remove(t);
      });
    }) : e.removeAll();
  };

  var K_ = function K_(t, e, i, n, r, a, o, s) {
    for (var l = Gh(t, e), h = [], u = [], c = [], d = [], f = [], p = [], g = [], v = Fh(r, e, o), m = Fh(a, t, s), y = 0; y < l.length; y++) {
      var _ = l[y],
          x = !0;

      switch (_.cmd) {
        case "=":
          var w = t.getItemLayout(_.idx),
              b = e.getItemLayout(_.idx1);
          (isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), h.push(w), u.push(b), c.push(i[_.idx]), d.push(n[_.idx1]), g.push(e.getRawIndex(_.idx1));
          break;

        case "+":
          var M = _.idx;
          h.push(r.dataToPoint([e.get(v.dataDimsForPoint[0], M), e.get(v.dataDimsForPoint[1], M)])), u.push(e.getItemLayout(M).slice()), c.push(Wh(v, r, e, M)), d.push(n[M]), g.push(e.getRawIndex(M));
          break;

        case "-":
          var M = _.idx,
              S = t.getRawIndex(M);
          S !== M ? (h.push(t.getItemLayout(M)), u.push(a.dataToPoint([t.get(m.dataDimsForPoint[0], M), t.get(m.dataDimsForPoint[1], M)])), c.push(i[M]), d.push(Wh(m, a, t, M)), g.push(S)) : x = !1;
      }

      x && (f.push(_), p.push(p.length));
    }

    p.sort(function (t, e) {
      return g[t] - g[e];
    });

    for (var I = [], T = [], D = [], C = [], k = [], y = 0; y < p.length; y++) {
      var M = p[y];
      I[y] = h[M], T[y] = u[M], D[y] = c[M], C[y] = d[M], k[y] = f[M];
    }

    return {
      current: I,
      next: T,
      stackedOnCurrent: D,
      stackedOnNext: C,
      status: k
    };
  },
      $_ = Q,
      Q_ = J,
      J_ = G,
      tx = F,
      ex = [],
      ix = [],
      nx = [],
      rx = mn.extend({
    type: "ec-polyline",
    shape: {
      points: [],
      smooth: 0,
      smoothConstraint: !0,
      smoothMonotone: null,
      connectNulls: !1
    },
    style: {
      fill: null,
      stroke: "#000"
    },
    brush: Tg(mn.prototype.brush),
    buildPath: function buildPath(t, e) {
      var i = e.points,
          n = 0,
          r = i.length,
          a = Zh(i, e.smoothConstraint);

      if (e.connectNulls) {
        for (; r > 0 && Xh(i[r - 1]); r--) {
          ;
        }

        for (; r > n && Xh(i[n]); n++) {
          ;
        }
      }

      for (; r > n;) {
        n += Yh(t, i, n, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1;
      }
    }
  }),
      ax = mn.extend({
    type: "ec-polygon",
    shape: {
      points: [],
      stackedOnPoints: [],
      smooth: 0,
      stackedOnSmooth: 0,
      smoothConstraint: !0,
      smoothMonotone: null,
      connectNulls: !1
    },
    brush: Tg(mn.prototype.brush),
    buildPath: function buildPath(t, e) {
      var i = e.points,
          n = e.stackedOnPoints,
          r = 0,
          a = i.length,
          o = e.smoothMonotone,
          s = Zh(i, e.smoothConstraint),
          l = Zh(n, e.smoothConstraint);

      if (e.connectNulls) {
        for (; a > 0 && Xh(i[a - 1]); a--) {
          ;
        }

        for (; a > r && Xh(i[r]); r++) {
          ;
        }
      }

      for (; a > r;) {
        var h = Yh(t, i, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);
        Yh(t, n, r + h - 1, h, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls), r += h + 1, t.closePath();
      }
    }
  });

  ho.extend({
    type: "line",
    init: function init() {
      var t = new pf(),
          e = new Eh();
      this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t;
    },
    render: function render(t, e, i) {
      var n = t.coordinateSystem,
          r = this.group,
          a = t.getData(),
          o = t.getModel("lineStyle"),
          l = t.getModel("areaStyle"),
          h = a.mapArray(a.getItemLayout),
          u = "polar" === n.type,
          c = this._coordSys,
          d = this._symbolDraw,
          f = this._polyline,
          p = this._polygon,
          g = this._lineGroup,
          v = t.get("animation"),
          m = !l.isEmpty(),
          y = l.get("origin"),
          _ = Fh(n, a, y),
          x = Qh(n, a, _),
          w = t.get("showSymbol"),
          b = w && !u && ru(t, a, n),
          M = this._data;

      M && M.eachItemGraphicEl(function (t, e) {
        t.__temp && (r.remove(t), M.setItemGraphicEl(e, null));
      }), w || d.remove(), r.add(g);
      var S = !u && t.get("step");
      f && c.type === n.type && S === this._step ? (m && !p ? p = this._newPolygon(h, x, n, v) : p && !m && (g.remove(p), p = this._polygon = null), g.setClipPath(eu(n, !1, !1, t)), w && d.updateData(a, {
        isIgnore: b,
        clipShape: eu(n, !1, !0, t)
      }), a.eachItemGraphicEl(function (t) {
        t.stopAnimation(!0);
      }), jh(this._stackedOnPoints, x) && jh(this._points, h) || (v ? this._updateAnimation(a, x, n, i, S, y) : (S && (h = iu(h, n, S), x = iu(x, n, S)), f.setShape({
        points: h
      }), p && p.setShape({
        points: h,
        stackedOnPoints: x
      })))) : (w && d.updateData(a, {
        isIgnore: b,
        clipShape: eu(n, !1, !0, t)
      }), S && (h = iu(h, n, S), x = iu(x, n, S)), f = this._newPolyline(h, n, v), m && (p = this._newPolygon(h, x, n, v)), g.setClipPath(eu(n, !0, !1, t)));
      var I = nu(a, n) || a.getVisual("color");
      f.useStyle(s(o.getLineStyle(), {
        fill: "none",
        stroke: I,
        lineJoin: "bevel"
      }));
      var T = t.get("smooth");

      if (T = Kh(t.get("smooth")), f.setShape({
        smooth: T,
        smoothMonotone: t.get("smoothMonotone"),
        connectNulls: t.get("connectNulls")
      }), p) {
        var D = a.getCalculationInfo("stackedOnSeries"),
            C = 0;
        p.useStyle(s(l.getAreaStyle(), {
          fill: I,
          opacity: .7,
          lineJoin: "bevel"
        })), D && (C = Kh(D.get("smooth"))), p.setShape({
          smooth: T,
          stackedOnSmooth: C,
          smoothMonotone: t.get("smoothMonotone"),
          connectNulls: t.get("connectNulls")
        });
      }

      this._data = a, this._coordSys = n, this._stackedOnPoints = x, this._points = h, this._step = S, this._valueOrigin = y;
    },
    dispose: function dispose() {},
    highlight: function highlight(t, e, i, n) {
      var r = t.getData(),
          a = Ii(r, n);

      if (!(a instanceof Array) && null != a && a >= 0) {
        var o = r.getItemGraphicEl(a);

        if (!o) {
          var s = r.getItemLayout(a);
          if (!s) return;
          o = new Oh(r, a), o.position = s, o.setZ(t.get("zlevel"), t.get("z")), o.ignore = isNaN(s[0]) || isNaN(s[1]), o.__temp = !0, r.setItemGraphicEl(a, o), o.stopSymbolAnimation(!0), this.group.add(o);
        }

        o.highlight();
      } else ho.prototype.highlight.call(this, t, e, i, n);
    },
    downplay: function downplay(t, e, i, n) {
      var r = t.getData(),
          a = Ii(r, n);

      if (null != a && a >= 0) {
        var o = r.getItemGraphicEl(a);
        o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay());
      } else ho.prototype.downplay.call(this, t, e, i, n);
    },
    _newPolyline: function _newPolyline(t) {
      var e = this._polyline;
      return e && this._lineGroup.remove(e), e = new rx({
        shape: {
          points: t
        },
        silent: !0,
        z2: 10
      }), this._lineGroup.add(e), this._polyline = e, e;
    },
    _newPolygon: function _newPolygon(t, e) {
      var i = this._polygon;
      return i && this._lineGroup.remove(i), i = new ax({
        shape: {
          points: t,
          stackedOnPoints: e
        },
        silent: !0
      }), this._lineGroup.add(i), this._polygon = i, i;
    },
    _updateAnimation: function _updateAnimation(t, e, i, n, r, a) {
      var o = this._polyline,
          s = this._polygon,
          l = t.hostModel,
          h = K_(this._data, t, this._stackedOnPoints, e, this._coordSys, i, this._valueOrigin, a),
          u = h.current,
          c = h.stackedOnCurrent,
          d = h.next,
          f = h.stackedOnNext;
      r && (u = iu(h.current, i, r), c = iu(h.stackedOnCurrent, i, r), d = iu(h.next, i, r), f = iu(h.stackedOnNext, i, r)), o.shape.__points = h.current, o.shape.points = u, sr(o, {
        shape: {
          points: d
        }
      }, l), s && (s.setShape({
        points: u,
        stackedOnPoints: c
      }), sr(s, {
        shape: {
          points: d,
          stackedOnPoints: f
        }
      }, l));

      for (var p = [], g = h.status, v = 0; v < g.length; v++) {
        var m = g[v].cmd;

        if ("=" === m) {
          var y = t.getItemGraphicEl(g[v].idx1);
          y && p.push({
            el: y,
            ptIdx: v
          });
        }
      }

      o.animators && o.animators.length && o.animators[0].during(function () {
        for (var t = 0; t < p.length; t++) {
          var e = p[t].el;
          e.attr("position", o.shape.__points[p[t].ptIdx]);
        }
      });
    },
    remove: function remove() {
      var t = this.group,
          e = this._data;
      this._lineGroup.removeAll(), this._symbolDraw.remove(!0), e && e.eachItemGraphicEl(function (i, n) {
        i.__temp && (t.remove(i), e.setItemGraphicEl(n, null));
      }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null;
    }
  });

  var ox = function ox(t, e, i) {
    return {
      seriesType: t,
      performRawSeries: !0,
      reset: function reset(t, n) {
        function r(e, i) {
          if ("function" == typeof s) {
            var n = t.getRawValue(i),
                r = t.getDataParams(i);
            e.setItemVisual(i, "symbolSize", s(n, r));
          }

          if (e.hasItemOption) {
            var a = e.getItemModel(i),
                o = a.getShallow("symbol", !0),
                l = a.getShallow("symbolSize", !0),
                h = a.getShallow("symbolKeepAspect", !0);
            null != o && e.setItemVisual(i, "symbol", o), null != l && e.setItemVisual(i, "symbolSize", l), null != h && e.setItemVisual(i, "symbolKeepAspect", h);
          }
        }

        var a = t.getData(),
            o = t.get("symbol") || e,
            s = t.get("symbolSize"),
            l = t.get("symbolKeepAspect");

        if (a.setVisual({
          legendSymbol: i || o,
          symbol: o,
          symbolSize: s,
          symbolKeepAspect: l
        }), !n.isSeriesFiltered(t)) {
          var h = "function" == typeof s;
          return {
            dataEach: a.hasItemOption || h ? r : null
          };
        }
      }
    };
  },
      sx = function sx(t) {
    return {
      seriesType: t,
      plan: om(),
      reset: function reset(t) {
        function e(t, e) {
          for (var i = t.end - t.start, r = a && new Float32Array(i * s), l = t.start, h = 0, u = [], c = []; l < t.end; l++) {
            var d;

            if (1 === s) {
              var f = e.get(o[0], l);
              d = !isNaN(f) && n.dataToPoint(f, null, c);
            } else {
              var f = u[0] = e.get(o[0], l),
                  p = u[1] = e.get(o[1], l);
              d = !isNaN(f) && !isNaN(p) && n.dataToPoint(u, null, c);
            }

            a ? (r[h++] = d ? d[0] : NaN, r[h++] = d ? d[1] : NaN) : e.setItemLayout(l, d && d.slice() || [NaN, NaN]);
          }

          a && e.setLayout("symbolPoints", r);
        }

        var i = t.getData(),
            n = t.coordinateSystem,
            r = t.pipelineContext,
            a = r.large;

        if (n) {
          var o = p(n.dimensions, function (t) {
            return i.mapDimension(t);
          }).slice(0, 2),
              s = o.length,
              l = i.getCalculationInfo("stackResultDimension");
          return Is(i, o[0]) && (o[0] = l), Is(i, o[1]) && (o[1] = l), s && {
            progress: e
          };
        }
      }
    };
  },
      lx = {
    average: function average(t) {
      for (var e = 0, i = 0, n = 0; n < t.length; n++) {
        isNaN(t[n]) || (e += t[n], i++);
      }

      return 0 === i ? NaN : e / i;
    },
    sum: function sum(t) {
      for (var e = 0, i = 0; i < t.length; i++) {
        e += t[i] || 0;
      }

      return e;
    },
    max: function max(t) {
      for (var e = -1 / 0, i = 0; i < t.length; i++) {
        t[i] > e && (e = t[i]);
      }

      return isFinite(e) ? e : NaN;
    },
    min: function min(t) {
      for (var e = 1 / 0, i = 0; i < t.length; i++) {
        t[i] < e && (e = t[i]);
      }

      return isFinite(e) ? e : NaN;
    },
    nearest: function nearest(t) {
      return t[0];
    }
  },
      hx = function hx(t) {
    return Math.round(t.length / 2);
  },
      ux = function ux(t) {
    return {
      seriesType: t,
      modifyOutputEnd: !0,
      reset: function reset(t) {
        var e = t.getData(),
            i = t.get("sampling"),
            n = t.coordinateSystem;

        if ("cartesian2d" === n.type && i) {
          var r = n.getBaseAxis(),
              a = n.getOtherAxis(r),
              o = r.getExtent(),
              s = o[1] - o[0],
              l = Math.round(e.count() / s);

          if (l > 1) {
            var h;
            "string" == typeof i ? h = lx[i] : "function" == typeof i && (h = i), h && t.setData(e.downSample(e.mapDimension(a.dim), 1 / l, h, hx));
          }
        }
      }
    };
  };

  ps(ox("line", "circle", "line")), fs(sx("line")), ls(Um.PROCESSOR.STATISTIC, ux("line"));

  var cx = function cx(t, e, i) {
    e = _(e) && {
      coordDimensions: e
    } || o({}, e);
    var n = t.getSource(),
        r = v_(n, e),
        a = new f_(r, t);
    return a.initData(n, i), a;
  },
      dx = {
    updateSelectedMap: function updateSelectedMap(t) {
      this._targetList = _(t) ? t.slice() : [], this._selectTargetMap = g(t || [], function (t, e) {
        return t.set(e.name, e), t;
      }, z());
    },
    select: function select(t, e) {
      var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t),
          n = this.get("selectedMode");
      "single" === n && this._selectTargetMap.each(function (t) {
        t.selected = !1;
      }), i && (i.selected = !0);
    },
    unSelect: function unSelect(t, e) {
      var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
      i && (i.selected = !1);
    },
    toggleSelected: function toggleSelected(t, e) {
      var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
      return null != i ? (this[i.selected ? "unSelect" : "select"](t, e), i.selected) : void 0;
    },
    isSelected: function isSelected(t, e) {
      var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
      return i && i.selected;
    }
  },
      fx = _s({
    type: "series.pie",
    init: function init(t) {
      fx.superApply(this, "init", arguments), this.legendDataProvider = function () {
        return this.getRawData();
      }, this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t);
    },
    mergeOption: function mergeOption(t) {
      fx.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList());
    },
    getInitialData: function getInitialData() {
      return cx(this, ["value"]);
    },
    _createSelectableList: function _createSelectableList() {
      for (var t = this.getRawData(), e = t.mapDimension("value"), i = [], n = 0, r = t.count(); r > n; n++) {
        i.push({
          name: t.getName(n),
          value: t.get(e, n),
          selected: Ka(t, n, "selected")
        });
      }

      return i;
    },
    getDataParams: function getDataParams(t) {
      var e = this.getData(),
          i = fx.superCall(this, "getDataParams", t),
          n = [];
      return e.each(e.mapDimension("value"), function (t) {
        n.push(t);
      }), i.percent = kr(n, t, e.hostModel.get("percentPrecision")), i.$vars.push("percent"), i;
    },
    _defaultLabelLine: function _defaultLabelLine(t) {
      mi(t, "labelLine", ["show"]);
      var e = t.labelLine,
          i = t.emphasis.labelLine;
      e.show = e.show && t.label.show, i.show = i.show && t.emphasis.label.show;
    },
    defaultOption: {
      zlevel: 0,
      z: 2,
      legendHoverLink: !0,
      hoverAnimation: !0,
      center: ["50%", "50%"],
      radius: [0, "75%"],
      clockwise: !0,
      startAngle: 90,
      minAngle: 0,
      selectedOffset: 10,
      hoverOffset: 10,
      avoidLabelOverlap: !0,
      percentPrecision: 2,
      stillShowZeroSum: !0,
      label: {
        rotate: !1,
        show: !0,
        position: "outer"
      },
      labelLine: {
        show: !0,
        length: 15,
        length2: 15,
        smooth: !1,
        lineStyle: {
          width: 1,
          type: "solid"
        }
      },
      itemStyle: {
        borderWidth: 1
      },
      animationType: "expansion",
      animationEasing: "cubicOut"
    }
  });

  c(fx, dx);
  var px = lu.prototype;
  px.updateData = function (t, e, i) {
    function n() {
      a.stopAnimation(!0), a.animateTo({
        shape: {
          r: u.r + l.get("hoverOffset")
        }
      }, 300, "elasticOut");
    }

    function r() {
      a.stopAnimation(!0), a.animateTo({
        shape: {
          r: u.r
        }
      }, 300, "elasticOut");
    }

    var a = this.childAt(0),
        l = t.hostModel,
        h = t.getItemModel(e),
        u = t.getItemLayout(e),
        c = o({}, u);

    if (c.label = null, i) {
      a.setShape(c);
      var d = l.getShallow("animationType");
      "scale" === d ? (a.shape.r = u.r0, lr(a, {
        shape: {
          r: u.r
        }
      }, l, e)) : (a.shape.endAngle = u.startAngle, sr(a, {
        shape: {
          endAngle: u.endAngle
        }
      }, l, e));
    } else sr(a, {
      shape: c
    }, l, e);

    var f = t.getItemVisual(e, "color");
    a.useStyle(s({
      lineJoin: "bevel",
      fill: f
    }, h.getModel("itemStyle").getItemStyle())), a.hoverStyle = h.getModel("emphasis.itemStyle").getItemStyle();
    var p = h.getShallow("cursor");
    p && a.attr("cursor", p), su(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation")), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), h.get("hoverAnimation") && l.isAnimationEnabled() && a.on("mouseover", n).on("mouseout", r).on("emphasis", n).on("normal", r), this._updateLabel(t, e), jn(this);
  }, px._updateLabel = function (t, e) {
    var i = this.childAt(1),
        n = this.childAt(2),
        r = t.hostModel,
        a = t.getItemModel(e),
        o = t.getItemLayout(e),
        s = o.label,
        l = t.getItemVisual(e, "color");
    sr(i, {
      shape: {
        points: s.linePoints || [[s.x, s.y], [s.x, s.y], [s.x, s.y]]
      }
    }, r, e), sr(n, {
      style: {
        x: s.x,
        y: s.y
      }
    }, r, e), n.attr({
      rotation: s.rotation,
      origin: [s.x, s.y],
      z2: 10
    });
    var h = a.getModel("label"),
        u = a.getModel("emphasis.label"),
        c = a.getModel("labelLine"),
        d = a.getModel("emphasis.labelLine"),
        l = t.getItemVisual(e, "color");
    Kn(n.style, n.hoverStyle = {}, h, u, {
      labelFetcher: t.hostModel,
      labelDataIndex: e,
      defaultText: t.getName(e),
      autoColor: l,
      useInsideStyle: !!s.inside
    }, {
      textAlign: s.textAlign,
      textVerticalAlign: s.verticalAlign,
      opacity: t.getItemVisual(e, "opacity")
    }), n.ignore = n.normalIgnore = !h.get("show"), n.hoverIgnore = !u.get("show"), i.ignore = i.normalIgnore = !c.get("show"), i.hoverIgnore = !d.get("show"), i.setStyle({
      stroke: l,
      opacity: t.getItemVisual(e, "opacity")
    }), i.setStyle(c.getModel("lineStyle").getLineStyle()), i.hoverStyle = d.getModel("lineStyle").getLineStyle();
    var f = c.get("smooth");
    f && f === !0 && (f = .4), i.setShape({
      smooth: f
    });
  }, u(lu, pf);

  var gx = (ho.extend({
    type: "pie",
    init: function init() {
      var t = new pf();
      this._sectorGroup = t;
    },
    render: function render(t, e, i, n) {
      if (!n || n.from !== this.uid) {
        var r = t.getData(),
            a = this._data,
            o = this.group,
            s = e.get("animation"),
            l = !a,
            h = t.get("animationType"),
            u = y(ou, this.uid, t, s, i),
            c = t.get("selectedMode");

        if (r.diff(a).add(function (t) {
          var e = new lu(r, t);
          l && "scale" !== h && e.eachChild(function (t) {
            t.stopAnimation(!0);
          }), c && e.on("click", u), r.setItemGraphicEl(t, e), o.add(e);
        }).update(function (t, e) {
          var i = a.getItemGraphicEl(e);
          i.updateData(r, t), i.off("click"), c && i.on("click", u), o.add(i), r.setItemGraphicEl(t, i);
        }).remove(function (t) {
          var e = a.getItemGraphicEl(t);
          o.remove(e);
        }).execute(), s && l && r.count() > 0 && "scale" !== h) {
          var d = r.getItemLayout(0),
              f = Math.max(i.getWidth(), i.getHeight()) / 2,
              p = m(o.removeClipPath, o);
          o.setClipPath(this._createClipPath(d.cx, d.cy, f, d.startAngle, d.clockwise, p, t));
        }

        this._data = r;
      }
    },
    dispose: function dispose() {},
    _createClipPath: function _createClipPath(t, e, i, n, r, a, o) {
      var s = new Dg({
        shape: {
          cx: t,
          cy: e,
          r0: 0,
          r: i,
          startAngle: n,
          endAngle: n,
          clockwise: r
        }
      });
      return lr(s, {
        shape: {
          endAngle: n + (r ? 1 : -1) * Math.PI * 2
        }
      }, o, a), s;
    },
    containPoint: function containPoint(t, e) {
      var i = e.getData(),
          n = i.getItemLayout(0);

      if (n) {
        var r = t[0] - n.cx,
            a = t[1] - n.cy,
            o = Math.sqrt(r * r + a * a);
        return o <= n.r && o >= n.r0;
      }
    }
  }), function (t, e) {
    f(e, function (e) {
      e.update = "updateView", us(e, function (i, n) {
        var r = {};
        return n.eachComponent({
          mainType: "series",
          subType: t,
          query: i
        }, function (t) {
          t[e.method] && t[e.method](i.name, i.dataIndex);
          var n = t.getData();
          n.each(function (e) {
            var i = n.getName(e);
            r[i] = t.isSelected(i) || !1;
          });
        }), {
          name: i.name,
          selected: r
        };
      });
    });
  }),
      vx = function vx(t) {
    return {
      getTargetSeries: function getTargetSeries(e) {
        var i = {},
            n = z();
        return e.eachSeriesByType(t, function (t) {
          t.__paletteScope = i, n.set(t.uid, t);
        }), n;
      },
      reset: function reset(t) {
        var e = t.getRawData(),
            i = {},
            n = t.getData();
        n.each(function (t) {
          var e = n.getRawIndex(t);
          i[e] = t;
        }), e.each(function (r) {
          var a = i[r],
              o = null != a && n.getItemVisual(a, "color", !0);
          if (o) e.setItemVisual(r, "color", o);else {
            var s = e.getItemModel(r),
                l = s.get("itemStyle.color") || t.getColorFromPalette(e.getName(r) || r + "", t.__paletteScope, e.count());
            e.setItemVisual(r, "color", l), null != a && n.setItemVisual(a, "color", l);
          }
        });
      }
    };
  },
      mx = function mx(t, e, i, n) {
    var r,
        a,
        o = t.getData(),
        s = [],
        l = !1;
    o.each(function (i) {
      var n,
          h,
          u,
          c,
          d = o.getItemLayout(i),
          f = o.getItemModel(i),
          p = f.getModel("label"),
          g = p.get("position") || f.get("emphasis.label.position"),
          v = f.getModel("labelLine"),
          m = v.get("length"),
          y = v.get("length2"),
          _ = (d.startAngle + d.endAngle) / 2,
          x = Math.cos(_),
          w = Math.sin(_);

      r = d.cx, a = d.cy;
      var b = "inside" === g || "inner" === g;
      if ("center" === g) n = d.cx, h = d.cy, c = "center";else {
        var M = (b ? (d.r + d.r0) / 2 * x : d.r * x) + r,
            S = (b ? (d.r + d.r0) / 2 * w : d.r * w) + a;

        if (n = M + 3 * x, h = S + 3 * w, !b) {
          var I = M + x * (m + e - d.r),
              T = S + w * (m + e - d.r),
              D = I + (0 > x ? -1 : 1) * y,
              C = T;
          n = D + (0 > x ? -5 : 5), h = C, u = [[M, S], [I, T], [D, C]];
        }

        c = b ? "center" : x > 0 ? "left" : "right";
      }
      var k = p.getFont(),
          A = p.get("rotate") ? 0 > x ? -_ + Math.PI : -_ : 0,
          L = t.getFormattedLabel(i, "normal") || o.getName(i),
          P = de(L, k, c, "top");
      l = !!A, d.label = {
        x: n,
        y: h,
        position: g,
        height: P.height,
        len: m,
        len2: y,
        linePoints: u,
        textAlign: c,
        verticalAlign: "middle",
        rotation: A,
        inside: b
      }, b || s.push(d.label);
    }), !l && t.get("avoidLabelOverlap") && uu(s, r, a, e, i, n);
  },
      yx = 2 * Math.PI,
      _x = Math.PI / 180,
      xx = function xx(t, e, i) {
    e.eachSeriesByType(t, function (t) {
      var e = t.getData(),
          n = e.mapDimension("value"),
          r = t.get("center"),
          a = t.get("radius");
      _(a) || (a = [0, a]), _(r) || (r = [r, r]);

      var o = i.getWidth(),
          s = i.getHeight(),
          l = Math.min(o, s),
          h = Sr(r[0], o),
          u = Sr(r[1], s),
          c = Sr(a[0], l / 2),
          d = Sr(a[1], l / 2),
          f = -t.get("startAngle") * _x,
          p = t.get("minAngle") * _x,
          g = 0;

      e.each(n, function (t) {
        !isNaN(t) && g++;
      });
      var v = e.getSum(n),
          m = Math.PI / (v || g) * 2,
          y = t.get("clockwise"),
          x = t.get("roseType"),
          w = t.get("stillShowZeroSum"),
          b = e.getDataExtent(n);
      b[0] = 0;
      var M = yx,
          S = 0,
          I = f,
          T = y ? 1 : -1;
      if (e.each(n, function (t, i) {
        var n;
        if (isNaN(t)) return void e.setItemLayout(i, {
          angle: NaN,
          startAngle: NaN,
          endAngle: NaN,
          clockwise: y,
          cx: h,
          cy: u,
          r0: c,
          r: x ? NaN : d
        });
        n = "area" !== x ? 0 === v && w ? m : t * m : yx / g, p > n ? (n = p, M -= p) : S += t;
        var r = I + T * n;
        e.setItemLayout(i, {
          angle: n,
          startAngle: I,
          endAngle: r,
          clockwise: y,
          cx: h,
          cy: u,
          r0: c,
          r: x ? Mr(t, b, [c, d]) : d
        }), I = r;
      }), yx > M && g) if (.001 >= M) {
        var D = yx / g;
        e.each(n, function (t, i) {
          if (!isNaN(t)) {
            var n = e.getItemLayout(i);
            n.angle = D, n.startAngle = f + T * i * D, n.endAngle = f + T * (i + 1) * D;
          }
        });
      } else m = M / S, I = f, e.each(n, function (t, i) {
        if (!isNaN(t)) {
          var n = e.getItemLayout(i),
              r = n.angle === p ? p : t * m;
          n.startAngle = I, n.endAngle = I + T * r, I += T * r;
        }
      });
      mx(t, d, o, s);
    });
  },
      bx = function bx(t) {
    return {
      seriesType: t,
      reset: function reset(t, e) {
        var i = e.findComponents({
          mainType: "legend"
        });

        if (i && i.length) {
          var n = t.getData();
          n.filterSelf(function (t) {
            for (var e = n.getName(t), r = 0; r < i.length; r++) {
              if (!i[r].isSelected(e)) return !1;
            }

            return !0;
          });
        }
      }
    };
  };

  gx("pie", [{
    type: "pieToggleSelect",
    event: "pieselectchanged",
    method: "toggleSelected"
  }, {
    type: "pieSelect",
    event: "pieselected",
    method: "select"
  }, {
    type: "pieUnSelect",
    event: "pieunselected",
    method: "unSelect"
  }]), ps(vx("pie")), fs(y(xx, "pie")), ls(bx("pie")), nm.extend({
    type: "series.heatmap",
    getInitialData: function getInitialData() {
      return Kl(this.getSource(), this, {
        generateCoord: "value"
      });
    },
    preventIncremental: function preventIncremental() {
      var t = Ma.get(this.get("coordinateSystem"));
      return t && t.dimensions ? "lng" === t.dimensions[0] && "lat" === t.dimensions[1] : void 0;
    },
    defaultOption: {
      coordinateSystem: "cartesian2d",
      zlevel: 0,
      z: 2,
      geoIndex: 0,
      blurSize: 30,
      pointSize: 20,
      maxOpacity: 1,
      minOpacity: 0
    }
  });
  var Mx = 256;
  cu.prototype = {
    update: function update(t, e, i, n, r, a) {
      var o = this._getBrush(),
          s = this._getGradient(t, r, "inRange"),
          l = this._getGradient(t, r, "outOfRange"),
          h = this.pointSize + this.blurSize,
          u = this.canvas,
          c = u.getContext("2d"),
          d = t.length;

      u.width = e, u.height = i;

      for (var f = 0; d > f; ++f) {
        var p = t[f],
            g = p[0],
            v = p[1],
            m = p[2],
            y = n(m);
        c.globalAlpha = y, c.drawImage(o, g - h, v - h);
      }

      if (!u.width || !u.height) return u;

      for (var _ = c.getImageData(0, 0, u.width, u.height), x = _.data, w = 0, b = x.length, M = this.minOpacity, S = this.maxOpacity, I = S - M; b > w;) {
        var y = x[w + 3] / 256,
            T = 4 * Math.floor(y * (Mx - 1));

        if (y > 0) {
          var D = a(y) ? s : l;
          y > 0 && (y = y * I + M), x[w++] = D[T], x[w++] = D[T + 1], x[w++] = D[T + 2], x[w++] = D[T + 3] * y * 256;
        } else w += 4;
      }

      return c.putImageData(_, 0, 0), u;
    },
    _getBrush: function _getBrush() {
      var t = this._brushCanvas || (this._brushCanvas = kd()),
          e = this.pointSize + this.blurSize,
          i = 2 * e;
      t.width = i, t.height = i;
      var n = t.getContext("2d");
      return n.clearRect(0, 0, i, i), n.shadowOffsetX = i, n.shadowBlur = this.blurSize, n.shadowColor = "#000", n.beginPath(), n.arc(-e, e, this.pointSize, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), t;
    },
    _getGradient: function _getGradient(t, e, i) {
      for (var n = this._gradientPixels, r = n[i] || (n[i] = new Uint8ClampedArray(1024)), a = [0, 0, 0, 0], o = 0, s = 0; 256 > s; s++) {
        e[i](s / 255, !0, a), r[o++] = a[0], r[o++] = a[1], r[o++] = a[2], r[o++] = a[3];
      }

      return r;
    }
  }, xs({
    type: "heatmap",
    render: function render(t, e, i) {
      var n;
      e.eachComponent("visualMap", function (e) {
        e.eachTargetSeries(function (i) {
          i === t && (n = e);
        });
      }), this.group.removeAll(), this._incrementalDisplayable = null;
      var r = t.coordinateSystem;
      "cartesian2d" === r.type || "calendar" === r.type ? this._renderOnCartesianAndCalendar(t, i, 0, t.getData().count()) : pu(r) && this._renderOnGeo(r, t, n, i);
    },
    incrementalPrepareRender: function incrementalPrepareRender() {
      this.group.removeAll();
    },
    incrementalRender: function incrementalRender(t, e, i, n) {
      var r = e.coordinateSystem;
      r && this._renderOnCartesianAndCalendar(e, n, t.start, t.end, !0);
    },
    _renderOnCartesianAndCalendar: function _renderOnCartesianAndCalendar(t, e, i, n, r) {
      var a,
          s,
          l = t.coordinateSystem;

      if ("cartesian2d" === l.type) {
        var h = l.getAxis("x"),
            u = l.getAxis("y");
        a = h.getBandWidth(), s = u.getBandWidth();
      }

      for (var c = this.group, d = t.getData(), f = "itemStyle", p = "emphasis.itemStyle", g = "label", v = "emphasis.label", m = t.getModel(f).getItemStyle(["color"]), y = t.getModel(p).getItemStyle(), _ = t.getModel(g), x = t.getModel(v), w = l.type, b = "cartesian2d" === w ? [d.mapDimension("x"), d.mapDimension("y"), d.mapDimension("value")] : [d.mapDimension("time"), d.mapDimension("value")], M = i; n > M; M++) {
        var S;

        if ("cartesian2d" === w) {
          if (isNaN(d.get(b[2], M))) continue;
          var I = l.dataToPoint([d.get(b[0], M), d.get(b[1], M)]);
          S = new Og({
            shape: {
              x: I[0] - a / 2,
              y: I[1] - s / 2,
              width: a,
              height: s
            },
            style: {
              fill: d.getItemVisual(M, "color"),
              opacity: d.getItemVisual(M, "opacity")
            }
          });
        } else {
          if (isNaN(d.get(b[1], M))) continue;
          S = new Og({
            z2: 1,
            shape: l.dataToRect([d.get(b[0], M)]).contentShape,
            style: {
              fill: d.getItemVisual(M, "color"),
              opacity: d.getItemVisual(M, "opacity")
            }
          });
        }

        var T = d.getItemModel(M);
        d.hasItemOption && (m = T.getModel(f).getItemStyle(["color"]), y = T.getModel(p).getItemStyle(), _ = T.getModel(g), x = T.getModel(v));
        var D = t.getRawValue(M),
            C = "-";
        D && null != D[2] && (C = D[2]), Kn(m, y, _, x, {
          labelFetcher: t,
          labelDataIndex: M,
          defaultText: C,
          isRectText: !0
        }), S.setStyle(m), jn(S, d.hasItemOption ? y : o({}, y)), S.incremental = r, r && (S.useHoverLayer = !0), c.add(S), d.setItemGraphicEl(M, S);
      }
    },
    _renderOnGeo: function _renderOnGeo(t, e, i, n) {
      var r = i.targetVisuals.inRange,
          a = i.targetVisuals.outOfRange,
          o = e.getData(),
          s = this._hmLayer || this._hmLayer || new cu();
      s.blurSize = e.get("blurSize"), s.pointSize = e.get("pointSize"), s.minOpacity = e.get("minOpacity"), s.maxOpacity = e.get("maxOpacity");
      var l = t.getViewRect().clone(),
          h = t.getRoamTransform();
      l.applyTransform(h);

      var u = Math.max(l.x, 0),
          c = Math.max(l.y, 0),
          d = Math.min(l.width + l.x, n.getWidth()),
          f = Math.min(l.height + l.y, n.getHeight()),
          p = d - u,
          g = f - c,
          v = [o.mapDimension("lng"), o.mapDimension("lat"), o.mapDimension("value")],
          m = o.mapArray(v, function (e, i, n) {
        var r = t.dataToPoint([e, i]);
        return r[0] -= u, r[1] -= c, r.push(n), r;
      }),
          y = i.getExtent(),
          _ = "visualMap.continuous" === i.type ? fu(y, i.option.range) : du(y, i.getPieceList(), i.option.selected);

      s.update(m, p, g, r.color.getNormalizer(), {
        inRange: r.color.getColorMapper(),
        outOfRange: a.color.getColorMapper()
      }, _);
      var x = new Ze({
        style: {
          width: p,
          height: g,
          x: u,
          y: c,
          image: s.canvas
        },
        silent: !0
      });
      this.group.add(x);
    },
    dispose: function dispose() {}
  });

  var Sx = f,
      Ix = "\0__link_datas",
      Tx = "\0__link_mainData",
      Dx = function Dx(t, e) {
    this.name = t || "", this.depth = 0, this.height = 0, this.parentNode = null, this.dataIndex = -1, this.children = [], this.viewChildren = [], this.hostTree = e;
  };

  Dx.prototype = {
    constructor: Dx,
    isRemoved: function isRemoved() {
      return this.dataIndex < 0;
    },
    eachNode: function eachNode(t, e, i) {
      "function" == typeof t && (i = e, e = t, t = null), t = t || {}, w(t) && (t = {
        order: t
      });
      var n,
          r = t.order || "preorder",
          a = this[t.attr || "children"];
      "preorder" === r && (n = e.call(i, this));

      for (var o = 0; !n && o < a.length; o++) {
        a[o].eachNode(t, e, i);
      }

      "postorder" === r && e.call(i, this);
    },
    updateDepthAndHeight: function updateDepthAndHeight(t) {
      var e = 0;
      this.depth = t;

      for (var i = 0; i < this.children.length; i++) {
        var n = this.children[i];
        n.updateDepthAndHeight(t + 1), n.height > e && (e = n.height);
      }

      this.height = e + 1;
    },
    getNodeById: function getNodeById(t) {
      if (this.getId() === t) return this;

      for (var e = 0, i = this.children, n = i.length; n > e; e++) {
        var r = i[e].getNodeById(t);
        if (r) return r;
      }
    },
    contains: function contains(t) {
      if (t === this) return !0;

      for (var e = 0, i = this.children, n = i.length; n > e; e++) {
        var r = i[e].contains(t);
        if (r) return r;
      }
    },
    getAncestors: function getAncestors(t) {
      for (var e = [], i = t ? this : this.parentNode; i;) {
        e.push(i), i = i.parentNode;
      }

      return e.reverse(), e;
    },
    getValue: function getValue(t) {
      var e = this.hostTree.data;
      return e.get(e.getDimension(t || "value"), this.dataIndex);
    },
    setLayout: function setLayout(t, e) {
      this.dataIndex >= 0 && this.hostTree.data.setItemLayout(this.dataIndex, t, e);
    },
    getLayout: function getLayout() {
      return this.hostTree.data.getItemLayout(this.dataIndex);
    },
    getModel: function getModel(t) {
      if (!(this.dataIndex < 0)) {
        var e,
            i = this.hostTree,
            n = i.data.getItemModel(this.dataIndex),
            r = this.getLevelModel();
        return r || 0 !== this.children.length && (0 === this.children.length || this.isExpand !== !1) || (e = this.getLeavesModel()), n.getModel(t, (r || e || i.hostModel).getModel(t));
      }
    },
    getLevelModel: function getLevelModel() {
      return (this.hostTree.levelModels || [])[this.depth];
    },
    getLeavesModel: function getLeavesModel() {
      return this.hostTree.leavesModel;
    },
    setVisual: function setVisual(t, e) {
      this.dataIndex >= 0 && this.hostTree.data.setItemVisual(this.dataIndex, t, e);
    },
    getVisual: function getVisual(t, e) {
      return this.hostTree.data.getItemVisual(this.dataIndex, t, e);
    },
    getRawIndex: function getRawIndex() {
      return this.hostTree.data.getRawIndex(this.dataIndex);
    },
    getId: function getId() {
      return this.hostTree.data.getId(this.dataIndex);
    },
    isAncestorOf: function isAncestorOf(t) {
      for (var e = t.parentNode; e;) {
        if (e === this) return !0;
        e = e.parentNode;
      }

      return !1;
    },
    isDescendantOf: function isDescendantOf(t) {
      return t !== this && t.isAncestorOf(this);
    }
  }, Mu.prototype = {
    constructor: Mu,
    type: "tree",
    eachNode: function eachNode(t, e, i) {
      this.root.eachNode(t, e, i);
    },
    getNodeByDataIndex: function getNodeByDataIndex(t) {
      var e = this.data.getRawIndex(t);
      return this._nodes[e];
    },
    getNodeByName: function getNodeByName(t) {
      return this.root.getNodeByName(t);
    },
    update: function update() {
      for (var t = this.data, e = this._nodes, i = 0, n = e.length; n > i; i++) {
        e[i].dataIndex = -1;
      }

      for (var i = 0, n = t.count(); n > i; i++) {
        e[t.getRawIndex(i)].dataIndex = i;
      }
    },
    clearLayouts: function clearLayouts() {
      this.data.clearItemLayouts();
    }
  }, Mu.createTree = function (t, e, i) {
    function n(t, e) {
      var i = t.value;
      o = Math.max(o, _(i) ? i.length : 1), a.push(t);
      var s = new Dx(t.name, r);
      e ? Su(s, e) : r.root = s, r._nodes.push(s);
      var l = t.children;
      if (l) for (var h = 0; h < l.length; h++) {
        n(l[h], s);
      }
    }

    var r = new Mu(e, i.levels, i.leaves),
        a = [],
        o = 1;
    n(t), r.root.updateDepthAndHeight(0);
    var s = v_(a, {
      coordDimensions: ["value"],
      dimensionsCount: o
    }),
        l = new f_(s, e);
    return l.initData(a), gu({
      mainData: l,
      struct: r,
      structAttr: "tree"
    }), r.update(), r;
  }, nm.extend({
    type: "series.tree",
    layoutInfo: null,
    layoutMode: "box",
    getInitialData: function getInitialData(t) {
      var e = {
        name: t.name,
        children: t.data
      },
          i = t.leaves || {},
          n = {};
      n.leaves = i;
      var r = Mu.createTree(e, this, n),
          a = 0;
      r.eachNode("preorder", function (t) {
        t.depth > a && (a = t.depth);
      });
      var o = t.expandAndCollapse,
          s = o && t.initialTreeDepth >= 0 ? t.initialTreeDepth : a;
      return r.root.eachNode("preorder", function (t) {
        var e = t.hostTree.data.getRawDataItem(t.dataIndex);
        t.isExpand = e && null != e.collapsed ? !e.collapsed : t.depth <= s;
      }), r.data;
    },
    getOrient: function getOrient() {
      var t = this.get("orient");
      return "horizontal" === t ? t = "LR" : "vertical" === t && (t = "TB"), t;
    },
    formatTooltip: function formatTooltip(t) {
      for (var e = this.getData().tree, i = e.root.children[0], n = e.getNodeByDataIndex(t), r = n.getValue(), a = n.name; n && n !== i;) {
        a = n.parentNode.name + "." + a, n = n.parentNode;
      }

      return Vr(a + (isNaN(r) || null == r ? "" : " : " + r));
    },
    defaultOption: {
      zlevel: 0,
      z: 2,
      left: "12%",
      top: "12%",
      right: "12%",
      bottom: "12%",
      layout: "orthogonal",
      orient: "LR",
      symbol: "emptyCircle",
      symbolSize: 7,
      expandAndCollapse: !0,
      initialTreeDepth: 2,
      lineStyle: {
        color: "#ccc",
        width: 1.5,
        curveness: .5
      },
      itemStyle: {
        color: "lightsteelblue",
        borderColor: "#c23531",
        borderWidth: 1.5
      },
      label: {
        show: !0,
        color: "#555"
      },
      leaves: {
        label: {
          show: !0
        }
      },
      animationEasing: "linear",
      animationDuration: 700,
      animationDurationUpdate: 1e3
    }
  }), xs({
    type: "tree",
    init: function init() {
      this._oldTree, this._mainGroup = new pf(), this.group.add(this._mainGroup);
    },
    render: function render(t, e, i) {
      var n = t.getData(),
          r = t.layoutInfo,
          a = this._mainGroup,
          o = t.get("layout");
      "radial" === o ? a.attr("position", [r.x + r.width / 2, r.y + r.height / 2]) : a.attr("position", [r.x, r.y]);
      var s = this._data,
          l = {
        expandAndCollapse: t.get("expandAndCollapse"),
        layout: o,
        orient: t.getOrient(),
        curvature: t.get("lineStyle.curveness"),
        symbolRotate: t.get("symbolRotate"),
        symbolOffset: t.get("symbolOffset"),
        hoverAnimation: t.get("hoverAnimation"),
        useNameLabel: !0,
        fadeIn: !0
      };
      n.diff(s).add(function (e) {
        Bu(n, e) && Fu(n, e, null, a, t, l);
      }).update(function (e, i) {
        var r = s.getItemGraphicEl(i);
        return Bu(n, e) ? void Fu(n, e, r, a, t, l) : void (r && Hu(s, i, r, a, t, l));
      }).remove(function (e) {
        var i = s.getItemGraphicEl(e);
        i && Hu(s, e, i, a, t, l);
      }).execute(), l.expandAndCollapse === !0 && n.eachItemGraphicEl(function (e, n) {
        e.off("click").on("click", function () {
          i.dispatchAction({
            type: "treeExpandAndCollapse",
            seriesId: t.id,
            dataIndex: n
          });
        });
      }), this._data = n;
    },
    dispose: function dispose() {},
    remove: function remove() {
      this._mainGroup.removeAll(), this._data = null;
    }
  }), us({
    type: "treeExpandAndCollapse",
    event: "treeExpandAndCollapse",
    update: "update"
  }, function (t, e) {
    e.eachComponent({
      mainType: "series",
      subType: "tree",
      query: t
    }, function (e) {
      var i = t.dataIndex,
          n = e.getData().tree,
          r = n.getNodeByDataIndex(i);
      r.isExpand = !r.isExpand;
    });
  });

  var Cx = function Cx(t, e) {
    t.eachSeriesByType("tree", function (t) {
      Yu(t, e);
    });
  };

  ps(ox("tree", "circle")), fs(Cx);
  var kx = 864e5;
  Uu.prototype = {
    constructor: Uu,
    type: "calendar",
    dimensions: ["time", "value"],
    getDimensionsInfo: function getDimensionsInfo() {
      return [{
        name: "time",
        type: "time"
      }, "value"];
    },
    getRangeInfo: function getRangeInfo() {
      return this._rangeInfo;
    },
    getModel: function getModel() {
      return this._model;
    },
    getRect: function getRect() {
      return this._rect;
    },
    getCellWidth: function getCellWidth() {
      return this._sw;
    },
    getCellHeight: function getCellHeight() {
      return this._sh;
    },
    getOrient: function getOrient() {
      return this._orient;
    },
    getFirstDayOfWeek: function getFirstDayOfWeek() {
      return this._firstDayOfWeek;
    },
    getDateInfo: function getDateInfo(t) {
      t = Pr(t);
      var e = t.getFullYear(),
          i = t.getMonth() + 1;
      i = 10 > i ? "0" + i : i;
      var n = t.getDate();
      n = 10 > n ? "0" + n : n;
      var r = t.getDay();
      return r = Math.abs((r + 7 - this.getFirstDayOfWeek()) % 7), {
        y: e,
        m: i,
        d: n,
        day: r,
        time: t.getTime(),
        formatedDate: e + "-" + i + "-" + n,
        date: t
      };
    },
    getNextNDay: function getNextNDay(t, e) {
      return e = e || 0, 0 === e ? this.getDateInfo(t) : (t = new Date(this.getDateInfo(t).time), t.setDate(t.getDate() + e), this.getDateInfo(t));
    },
    update: function update(t, e) {
      function i(t, e) {
        return null != t[e] && "auto" !== t[e];
      }

      this._firstDayOfWeek = +this._model.getModel("dayLabel").get("firstDay"), this._orient = this._model.get("orient"), this._lineWidth = this._model.getModel("itemStyle").getItemStyle().lineWidth || 0, this._rangeInfo = this._getRangeInfo(this._initRangeOption());

      var n = this._rangeInfo.weeks || 1,
          r = ["width", "height"],
          a = this._model.get("cellSize").slice(),
          o = this._model.getBoxLayoutParams(),
          s = "horizontal" === this._orient ? [n, 7] : [7, n];

      f([0, 1], function (t) {
        i(a, t) && (o[r[t]] = a[t] * s[t]);
      });
      var l = {
        width: e.getWidth(),
        height: e.getHeight()
      },
          h = this._rect = Ur(o, l);
      f([0, 1], function (t) {
        i(a, t) || (a[t] = h[r[t]] / s[t]);
      }), this._sw = a[0], this._sh = a[1];
    },
    dataToPoint: function dataToPoint(t, e) {
      _(t) && (t = t[0]), null == e && (e = !0);
      var i = this.getDateInfo(t),
          n = this._rangeInfo,
          r = i.formatedDate;
      if (e && !(i.time >= n.start.time && i.time < n.end.time + kx)) return [NaN, NaN];

      var a = i.day,
          o = this._getRangeInfo([n.start.time, r]).nthWeek;

      return "vertical" === this._orient ? [this._rect.x + a * this._sw + this._sw / 2, this._rect.y + o * this._sh + this._sh / 2] : [this._rect.x + o * this._sw + this._sw / 2, this._rect.y + a * this._sh + this._sh / 2];
    },
    pointToData: function pointToData(t) {
      var e = this.pointToDate(t);
      return e && e.time;
    },
    dataToRect: function dataToRect(t, e) {
      var i = this.dataToPoint(t, e);
      return {
        contentShape: {
          x: i[0] - (this._sw - this._lineWidth) / 2,
          y: i[1] - (this._sh - this._lineWidth) / 2,
          width: this._sw - this._lineWidth,
          height: this._sh - this._lineWidth
        },
        center: i,
        tl: [i[0] - this._sw / 2, i[1] - this._sh / 2],
        tr: [i[0] + this._sw / 2, i[1] - this._sh / 2],
        br: [i[0] + this._sw / 2, i[1] + this._sh / 2],
        bl: [i[0] - this._sw / 2, i[1] + this._sh / 2]
      };
    },
    pointToDate: function pointToDate(t) {
      var e = Math.floor((t[0] - this._rect.x) / this._sw) + 1,
          i = Math.floor((t[1] - this._rect.y) / this._sh) + 1,
          n = this._rangeInfo.range;
      return "vertical" === this._orient ? this._getDateByWeeksAndDay(i, e - 1, n) : this._getDateByWeeksAndDay(e, i - 1, n);
    },
    convertToPixel: y(qu, "dataToPoint"),
    convertFromPixel: y(qu, "pointToData"),
    _initRangeOption: function _initRangeOption() {
      var t = this._model.get("range"),
          e = t;

      if (_(e) && 1 === e.length && (e = e[0]), /^\d{4}$/.test(e) && (t = [e + "-01-01", e + "-12-31"]), /^\d{4}[\/|-]\d{1,2}$/.test(e)) {
        var i = this.getDateInfo(e),
            n = i.date;
        n.setMonth(n.getMonth() + 1);
        var r = this.getNextNDay(n, -1);
        t = [i.formatedDate, r.formatedDate];
      }

      /^\d{4}[\/|-]\d{1,2}[\/|-]\d{1,2}$/.test(e) && (t = [e, e]);

      var a = this._getRangeInfo(t);

      return a.start.time > a.end.time && t.reverse(), t;
    },
    _getRangeInfo: function _getRangeInfo(t) {
      t = [this.getDateInfo(t[0]), this.getDateInfo(t[1])];
      var e;
      t[0].time > t[1].time && (e = !0, t.reverse());
      var i = Math.floor(t[1].time / kx) - Math.floor(t[0].time / kx) + 1,
          n = new Date(t[0].time),
          r = n.getDate(),
          a = t[1].date.getDate();
      if (n.setDate(r + i - 1), n.getDate() !== a) for (var o = n.getTime() - t[1].time > 0 ? 1 : -1; n.getDate() !== a && (n.getTime() - t[1].time) * o > 0;) {
        i -= o, n.setDate(r + i - 1);
      }
      var s = Math.floor((i + t[0].day + 6) / 7),
          l = e ? -s + 1 : s - 1;
      return e && t.reverse(), {
        range: [t[0].formatedDate, t[1].formatedDate],
        start: t[0],
        end: t[1],
        allDay: i,
        weeks: s,
        nthWeek: l,
        fweek: t[0].day,
        lweek: t[1].day
      };
    },
    _getDateByWeeksAndDay: function _getDateByWeeksAndDay(t, e, i) {
      var n = this._getRangeInfo(i);

      if (t > n.weeks || 0 === t && e < n.fweek || t === n.weeks && e > n.lweek) return !1;
      var r = 7 * (t - 1) - n.fweek + e,
          a = new Date(n.start.time);
      return a.setDate(n.start.d + r), this.getDateInfo(a);
    }
  }, Uu.dimensions = Uu.prototype.dimensions, Uu.getDimensionsInfo = Uu.prototype.getDimensionsInfo, Uu.create = function (t, e) {
    var i = [];
    return t.eachComponent("calendar", function (n) {
      var r = new Uu(n, t, e);
      i.push(r), n.coordinateSystem = r;
    }), t.eachSeries(function (t) {
      "calendar" === t.get("coordinateSystem") && (t.coordinateSystem = i[t.get("calendarIndex") || 0]);
    }), i;
  }, Ma.register("calendar", Uu);
  var Ax = vv.extend({
    type: "calendar",
    coordinateSystem: null,
    defaultOption: {
      zlevel: 0,
      z: 2,
      left: 80,
      top: 60,
      cellSize: 20,
      orient: "horizontal",
      splitLine: {
        show: !0,
        lineStyle: {
          color: "#000",
          width: 1,
          type: "solid"
        }
      },
      itemStyle: {
        color: "#fff",
        borderWidth: 1,
        borderColor: "#ccc"
      },
      dayLabel: {
        show: !0,
        firstDay: 0,
        position: "start",
        margin: "50%",
        nameMap: "en",
        color: "#000"
      },
      monthLabel: {
        show: !0,
        position: "start",
        margin: 5,
        align: "center",
        nameMap: "en",
        formatter: null,
        color: "#000"
      },
      yearLabel: {
        show: !0,
        position: null,
        margin: 30,
        formatter: null,
        color: "#ccc",
        fontFamily: "sans-serif",
        fontWeight: "bolder",
        fontSize: 20
      }
    },
    init: function init(t) {
      var e = Kr(t);
      Ax.superApply(this, "init", arguments), Zu(t, e);
    },
    mergeOption: function mergeOption(t) {
      Ax.superApply(this, "mergeOption", arguments), Zu(this.option, t);
    }
  }),
      Lx = {
    EN: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    CN: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
  },
      Px = {
    EN: ["S", "M", "T", "W", "T", "F", "S"],
    CN: ["日", "一", "二", "三", "四", "五", "六"]
  };
  ys({
    type: "calendar",
    _tlpoints: null,
    _blpoints: null,
    _firstDayOfMonth: null,
    _firstDayPoints: null,
    render: function render(t) {
      var e = this.group;
      e.removeAll();
      var i = t.coordinateSystem,
          n = i.getRangeInfo(),
          r = i.getOrient();
      this._renderDayRect(t, n, e), this._renderLines(t, n, r, e), this._renderYearText(t, n, r, e), this._renderMonthText(t, r, e), this._renderWeekText(t, n, r, e);
    },
    _renderDayRect: function _renderDayRect(t, e, i) {
      for (var n = t.coordinateSystem, r = t.getModel("itemStyle").getItemStyle(), a = n.getCellWidth(), o = n.getCellHeight(), s = e.start.time; s <= e.end.time; s = n.getNextNDay(s, 1).time) {
        var l = n.dataToRect([s], !1).tl,
            h = new Og({
          shape: {
            x: l[0],
            y: l[1],
            width: a,
            height: o
          },
          cursor: "default",
          style: r
        });
        i.add(h);
      }
    },
    _renderLines: function _renderLines(t, e, i, n) {
      function r(e) {
        a._firstDayOfMonth.push(o.getDateInfo(e)), a._firstDayPoints.push(o.dataToRect([e], !1).tl);

        var r = a._getLinePointsOfOneWeek(t, e, i);

        a._tlpoints.push(r[0]), a._blpoints.push(r[r.length - 1]), l && a._drawSplitline(r, s, n);
      }

      var a = this,
          o = t.coordinateSystem,
          s = t.getModel("splitLine.lineStyle").getLineStyle(),
          l = t.get("splitLine.show"),
          h = s.lineWidth;
      this._tlpoints = [], this._blpoints = [], this._firstDayOfMonth = [], this._firstDayPoints = [];

      for (var u = e.start, c = 0; u.time <= e.end.time; c++) {
        r(u.formatedDate), 0 === c && (u = o.getDateInfo(e.start.y + "-" + e.start.m));
        var d = u.date;
        d.setMonth(d.getMonth() + 1), u = o.getDateInfo(d);
      }

      r(o.getNextNDay(e.end.time, 1).formatedDate), l && this._drawSplitline(a._getEdgesPoints(a._tlpoints, h, i), s, n), l && this._drawSplitline(a._getEdgesPoints(a._blpoints, h, i), s, n);
    },
    _getEdgesPoints: function _getEdgesPoints(t, e, i) {
      var n = [t[0].slice(), t[t.length - 1].slice()],
          r = "horizontal" === i ? 0 : 1;
      return n[0][r] = n[0][r] - e / 2, n[1][r] = n[1][r] + e / 2, n;
    },
    _drawSplitline: function _drawSplitline(t, e, i) {
      var n = new Pg({
        z2: 20,
        shape: {
          points: t
        },
        style: e
      });
      i.add(n);
    },
    _getLinePointsOfOneWeek: function _getLinePointsOfOneWeek(t, e, i) {
      var n = t.coordinateSystem;
      e = n.getDateInfo(e);

      for (var r = [], a = 0; 7 > a; a++) {
        var o = n.getNextNDay(e.time, a),
            s = n.dataToRect([o.time], !1);
        r[2 * o.day] = s.tl, r[2 * o.day + 1] = s["horizontal" === i ? "bl" : "tr"];
      }

      return r;
    },
    _formatterLabel: function _formatterLabel(t, e) {
      return "string" == typeof t && t ? Hr(t, e) : "function" == typeof t ? t(e) : e.nameMap;
    },
    _yearTextPositionControl: function _yearTextPositionControl(t, e, i, n, r) {
      e = e.slice();
      var a = ["center", "bottom"];
      "bottom" === n ? (e[1] += r, a = ["center", "top"]) : "left" === n ? e[0] -= r : "right" === n ? (e[0] += r, a = ["center", "top"]) : e[1] -= r;
      var o = 0;
      return ("left" === n || "right" === n) && (o = Math.PI / 2), {
        rotation: o,
        position: e,
        style: {
          textAlign: a[0],
          textVerticalAlign: a[1]
        }
      };
    },
    _renderYearText: function _renderYearText(t, e, i, n) {
      var r = t.getModel("yearLabel");

      if (r.get("show")) {
        var a = r.get("margin"),
            o = r.get("position");
        o || (o = "horizontal" !== i ? "top" : "left");
        var s = [this._tlpoints[this._tlpoints.length - 1], this._blpoints[0]],
            l = (s[0][0] + s[1][0]) / 2,
            h = (s[0][1] + s[1][1]) / 2,
            u = "horizontal" === i ? 0 : 1,
            c = {
          top: [l, s[u][1]],
          bottom: [l, s[1 - u][1]],
          left: [s[1 - u][0], h],
          right: [s[u][0], h]
        },
            d = e.start.y;
        +e.end.y > +e.start.y && (d = d + "-" + e.end.y);

        var f = r.get("formatter"),
            p = {
          start: e.start.y,
          end: e.end.y,
          nameMap: d
        },
            g = this._formatterLabel(f, p),
            v = new Mg({
          z2: 30
        });

        $n(v.style, r, {
          text: g
        }), v.attr(this._yearTextPositionControl(v, c[o], i, o, a)), n.add(v);
      }
    },
    _monthTextPositionControl: function _monthTextPositionControl(t, e, i, n, r) {
      var a = "left",
          o = "top",
          s = t[0],
          l = t[1];
      return "horizontal" === i ? (l += r, e && (a = "center"), "start" === n && (o = "bottom")) : (s += r, e && (o = "middle"), "start" === n && (a = "right")), {
        x: s,
        y: l,
        textAlign: a,
        textVerticalAlign: o
      };
    },
    _renderMonthText: function _renderMonthText(t, e, i) {
      var n = t.getModel("monthLabel");

      if (n.get("show")) {
        var r = n.get("nameMap"),
            a = n.get("margin"),
            s = n.get("position"),
            l = n.get("align"),
            h = [this._tlpoints, this._blpoints];
        w(r) && (r = Lx[r.toUpperCase()] || []);
        var u = "start" === s ? 0 : 1,
            c = "horizontal" === e ? 0 : 1;
        a = "start" === s ? -a : a;

        for (var d = "center" === l, f = 0; f < h[u].length - 1; f++) {
          var p = h[u][f].slice(),
              g = this._firstDayOfMonth[f];

          if (d) {
            var v = this._firstDayPoints[f];
            p[c] = (v[c] + h[0][f + 1][c]) / 2;
          }

          var m = n.get("formatter"),
              y = r[+g.m - 1],
              _ = {
            yyyy: g.y,
            yy: (g.y + "").slice(2),
            MM: g.m,
            M: +g.m,
            nameMap: y
          },
              x = this._formatterLabel(m, _),
              b = new Mg({
            z2: 30
          });

          o($n(b.style, n, {
            text: x
          }), this._monthTextPositionControl(p, d, e, s, a)), i.add(b);
        }
      }
    },
    _weekTextPositionControl: function _weekTextPositionControl(t, e, i, n, r) {
      var a = "center",
          o = "middle",
          s = t[0],
          l = t[1],
          h = "start" === i;
      return "horizontal" === e ? (s = s + n + (h ? 1 : -1) * r[0] / 2, a = h ? "right" : "left") : (l = l + n + (h ? 1 : -1) * r[1] / 2, o = h ? "bottom" : "top"), {
        x: s,
        y: l,
        textAlign: a,
        textVerticalAlign: o
      };
    },
    _renderWeekText: function _renderWeekText(t, e, i, n) {
      var r = t.getModel("dayLabel");

      if (r.get("show")) {
        var a = t.coordinateSystem,
            s = r.get("position"),
            l = r.get("nameMap"),
            h = r.get("margin"),
            u = a.getFirstDayOfWeek();
        w(l) && (l = Px[l.toUpperCase()] || []);
        var c = a.getNextNDay(e.end.time, 7 - e.lweek).time,
            d = [a.getCellWidth(), a.getCellHeight()];
        h = Sr(h, d["horizontal" === i ? 0 : 1]), "start" === s && (c = a.getNextNDay(e.start.time, -(7 + e.fweek)).time, h = -h);

        for (var f = 0; 7 > f; f++) {
          var p = a.getNextNDay(c, f),
              g = a.dataToRect([p.time], !1).center,
              v = f;
          v = Math.abs((f + u) % 7);
          var m = new Mg({
            z2: 30
          });
          o($n(m.style, r, {
            text: l[v]
          }), this._weekTextPositionControl(g, i, s, h, d)), n.add(m);
        }
      }
    }
  });

  var Ox = function Ox(t, e) {
    var i,
        n = [],
        r = t.seriesIndex;
    if (null == r || !(i = e.getSeriesByIndex(r))) return {
      point: []
    };
    var a = i.getData(),
        o = Ii(a, t);
    if (null == o || 0 > o || _(o)) return {
      point: []
    };
    var s = a.getItemGraphicEl(o),
        l = i.coordinateSystem;
    if (i.getTooltipPosition) n = i.getTooltipPosition(o) || [];else if (l && l.dataToPoint) n = l.dataToPoint(a.getValues(p(l.dimensions, function (t) {
      return a.mapDimension(t);
    }), o, !0)) || [];else if (s) {
      var h = s.getBoundingRect().clone();
      h.applyTransform(s.transform), n = [h.x + h.width / 2, h.y + h.height / 2];
    }
    return {
      point: n,
      el: s
    };
  },
      Nx = f,
      Rx = y,
      Ex = Ti(),
      zx = function zx(t, e, i) {
    var n = t.currTrigger,
        r = [t.x, t.y],
        a = t,
        o = t.dispatchAction || m(i.dispatchAction, i),
        s = e.getComponent("axisPointer").coordSysAxesInfo;

    if (s) {
      rc(r) && (r = Ox({
        seriesIndex: a.seriesIndex,
        dataIndex: a.dataIndex
      }, e).point);
      var l = rc(r),
          h = a.axesInfo,
          u = s.axesInfo,
          c = "leave" === n || rc(r),
          d = {},
          f = {},
          p = {
        list: [],
        map: {}
      },
          g = {
        showPointer: Rx($u, f),
        showTooltip: Rx(Qu, p)
      };
      Nx(s.coordSysMap, function (t, e) {
        var i = l || t.containPoint(r);
        Nx(s.coordSysAxesInfo[e], function (t) {
          var e = t.axis,
              n = ic(h, t);

          if (!c && i && (!h || n)) {
            var a = n && n.value;
            null != a || l || (a = e.pointToData(r)), null != a && ju(t, a, g, !1, d);
          }
        });
      });
      var v = {};
      return Nx(u, function (t, e) {
        var i = t.linkGroup;
        i && !f[e] && Nx(i.axesInfo, function (e, n) {
          var r = f[n];

          if (e !== t && r) {
            var a = r.value;
            i.mapper && (a = t.axis.scale.parse(i.mapper(a, nc(e), nc(t)))), v[t.key] = a;
          }
        });
      }), Nx(v, function (t, e) {
        ju(u[e], t, g, !0, d);
      }), Ju(f, u, d), tc(p, r, t, o), ec(u, o, i), d;
    }
  },
      Bx = (ms({
    type: "axisPointer",
    coordSysAxesInfo: null,
    defaultOption: {
      show: "auto",
      triggerOn: null,
      zlevel: 0,
      z: 50,
      type: "line",
      snap: !1,
      triggerTooltip: !0,
      value: null,
      status: null,
      link: [],
      animation: null,
      animationDurationUpdate: 200,
      lineStyle: {
        color: "#aaa",
        width: 1,
        type: "solid"
      },
      shadowStyle: {
        color: "rgba(150,150,150,0.3)"
      },
      label: {
        show: !0,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: "#fff",
        padding: [5, 7, 5, 7],
        backgroundColor: "auto",
        borderColor: null,
        borderWidth: 0,
        shadowBlur: 3,
        shadowColor: "#aaa"
      },
      handle: {
        show: !1,
        icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
        size: 45,
        margin: 50,
        color: "#333",
        shadowBlur: 3,
        shadowColor: "#aaa",
        shadowOffsetX: 0,
        shadowOffsetY: 2,
        throttle: 40
      }
    }
  }), Ti()),
      Vx = f,
      Fx = ys({
    type: "axisPointer",
    render: function render(t, e, i) {
      var n = e.getComponent("tooltip"),
          r = t.get("triggerOn") || n && n.get("triggerOn") || "mousemove|click";
      ac("axisPointer", i, function (t, e, i) {
        "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && i({
          type: "updateAxisPointer",
          currTrigger: t,
          x: e && e.offsetX,
          y: e && e.offsetY
        });
      });
    },
    remove: function remove(t, e) {
      cc(e.getZr(), "axisPointer"), Fx.superApply(this._model, "remove", arguments);
    },
    dispose: function dispose(t, e) {
      cc("axisPointer", e), Fx.superApply(this._model, "dispose", arguments);
    }
  }),
      Hx = Ti(),
      Wx = n,
      Gx = m;

  dc.prototype = {
    _group: null,
    _lastGraphicKey: null,
    _handle: null,
    _dragging: !1,
    _lastValue: null,
    _lastStatus: null,
    _payloadInfo: null,
    animationThreshold: 15,
    render: function render(t, e, i, n) {
      var r = e.get("value"),
          a = e.get("status");

      if (this._axisModel = t, this._axisPointerModel = e, this._api = i, n || this._lastValue !== r || this._lastStatus !== a) {
        this._lastValue = r, this._lastStatus = a;
        var o = this._group,
            s = this._handle;
        if (!a || "hide" === a) return o && o.hide(), void (s && s.hide());
        o && o.show(), s && s.show();
        var l = {};
        this.makeElOption(l, r, t, e, i);
        var h = l.graphicKey;
        h !== this._lastGraphicKey && this.clear(i), this._lastGraphicKey = h;
        var u = this._moveAnimation = this.determineAnimation(t, e);

        if (o) {
          var c = y(fc, e, u);
          this.updatePointerEl(o, l, c, e), this.updateLabelEl(o, l, c, e);
        } else o = this._group = new pf(), this.createPointerEl(o, l, t, e), this.createLabelEl(o, l, t, e), i.getZr().add(o);

        mc(o, e, !0), this._renderHandle(r);
      }
    },
    remove: function remove(t) {
      this.clear(t);
    },
    dispose: function dispose(t) {
      this.clear(t);
    },
    determineAnimation: function determineAnimation(t, e) {
      var i = e.get("animation"),
          n = t.axis,
          r = "category" === n.type,
          a = e.get("snap");
      if (!a && !r) return !1;

      if ("auto" === i || null == i) {
        var o = this.animationThreshold;
        if (r && n.getBandWidth() > o) return !0;

        if (a) {
          var s = Th(t).seriesDataCount,
              l = n.getExtent();
          return Math.abs(l[0] - l[1]) / s > o;
        }

        return !1;
      }

      return i === !0;
    },
    makeElOption: function makeElOption() {},
    createPointerEl: function createPointerEl(t, e) {
      var i = e.pointer;

      if (i) {
        var n = Hx(t).pointerEl = new Zg[i.type](Wx(e.pointer));
        t.add(n);
      }
    },
    createLabelEl: function createLabelEl(t, e, i, n) {
      if (e.label) {
        var r = Hx(t).labelEl = new Og(Wx(e.label));
        t.add(r), gc(r, n);
      }
    },
    updatePointerEl: function updatePointerEl(t, e, i) {
      var n = Hx(t).pointerEl;
      n && (n.setStyle(e.pointer.style), i(n, {
        shape: e.pointer.shape
      }));
    },
    updateLabelEl: function updateLabelEl(t, e, i, n) {
      var r = Hx(t).labelEl;
      r && (r.setStyle(e.label.style), i(r, {
        shape: e.label.shape,
        position: e.label.position
      }), gc(r, n));
    },
    _renderHandle: function _renderHandle(t) {
      if (!this._dragging && this.updateHandleTransform) {
        var e = this._axisPointerModel,
            i = this._api.getZr(),
            n = this._handle,
            r = e.getModel("handle"),
            a = e.get("status");

        if (!r.get("show") || !a || "hide" === a) return n && i.remove(n), void (this._handle = null);
        var o;
        this._handle || (o = !0, n = this._handle = gr(r.get("icon"), {
          cursor: "move",
          draggable: !0,
          onmousemove: function onmousemove(t) {
            Zf(t.event);
          },
          onmousedown: Gx(this._onHandleDragMove, this, 0, 0),
          drift: Gx(this._onHandleDragMove, this),
          ondragend: Gx(this._onHandleDragEnd, this)
        }), i.add(n)), mc(n, e, !1);
        var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
        n.setStyle(r.getItemStyle(null, s));
        var l = r.get("size");
        _(l) || (l = [l, l]), n.attr("scale", [l[0] / 2, l[1] / 2]), vo(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, o);
      }
    },
    _moveHandleToValue: function _moveHandleToValue(t, e) {
      fc(this._axisPointerModel, !e && this._moveAnimation, this._handle, vc(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
    },
    _onHandleDragMove: function _onHandleDragMove(t, e) {
      var i = this._handle;

      if (i) {
        this._dragging = !0;
        var n = this.updateHandleTransform(vc(i), [t, e], this._axisModel, this._axisPointerModel);
        this._payloadInfo = n, i.stopAnimation(), i.attr(vc(n)), Hx(i).lastProp = null, this._doDispatchAxisPointer();
      }
    },
    _doDispatchAxisPointer: function _doDispatchAxisPointer() {
      var t = this._handle;

      if (t) {
        var e = this._payloadInfo,
            i = this._axisModel;

        this._api.dispatchAction({
          type: "updateAxisPointer",
          x: e.cursorPoint[0],
          y: e.cursorPoint[1],
          tooltipOption: e.tooltipOption,
          axesInfo: [{
            axisDim: i.axis.dim,
            axisIndex: i.componentIndex
          }]
        });
      }
    },
    _onHandleDragEnd: function _onHandleDragEnd() {
      this._dragging = !1;
      var t = this._handle;

      if (t) {
        var e = this._axisPointerModel.get("value");

        this._moveHandleToValue(e), this._api.dispatchAction({
          type: "hideTip"
        });
      }
    },
    getHandleTransform: null,
    updateHandleTransform: null,
    clear: function clear(t) {
      this._lastValue = null, this._lastStatus = null;
      var e = t.getZr(),
          i = this._group,
          n = this._handle;
      e && i && (this._lastGraphicKey = null, i && e.remove(i), n && e.remove(n), this._group = null, this._handle = null, this._payloadInfo = null);
    },
    doClear: function doClear() {},
    buildLabel: function buildLabel(t, e, i) {
      return i = i || 0, {
        x: t[i],
        y: t[1 - i],
        width: e[i],
        height: e[1 - i]
      };
    }
  }, dc.prototype.constructor = dc, Oi(dc);
  var Xx = dc.extend({
    makeElOption: function makeElOption(t, e, i, n, r) {
      var a = i.axis,
          o = a.grid,
          s = n.get("type"),
          l = Tc(o, a).getOtherAxis(a).getGlobalExtent(),
          h = a.toGlobalCoord(a.dataToCoord(e, !0));

      if (s && "none" !== s) {
        var u = yc(n),
            c = Yx[s](a, h, l, u);
        c.style = u, t.graphicKey = c.type, t.pointer = c;
      }

      var d = Ph(o.model, i);
      Mc(e, t, d, i, n, r);
    },
    getHandleTransform: function getHandleTransform(t, e, i) {
      var n = Ph(e.axis.grid.model, e, {
        labelInside: !1
      });
      return n.labelMargin = i.get("handle.margin"), {
        position: bc(e.axis, t, n),
        rotation: n.rotation + (n.labelDirection < 0 ? Math.PI : 0)
      };
    },
    updateHandleTransform: function updateHandleTransform(t, e, i) {
      var n = i.axis,
          r = n.grid,
          a = n.getGlobalExtent(!0),
          o = Tc(r, n).getOtherAxis(n).getGlobalExtent(),
          s = "x" === n.dim ? 0 : 1,
          l = t.position;
      l[s] += e[s], l[s] = Math.min(a[1], l[s]), l[s] = Math.max(a[0], l[s]);
      var h = (o[1] + o[0]) / 2,
          u = [h, h];
      u[s] = l[s];
      var c = [{
        verticalAlign: "middle"
      }, {
        align: "center"
      }];
      return {
        position: l,
        rotation: t.rotation,
        cursorPoint: u,
        tooltipOption: c[s]
      };
    }
  }),
      Yx = {
    line: function line(t, e, i, n) {
      var r = Sc([e, i[0]], [e, i[1]], Dc(t));
      return Nn({
        shape: r,
        style: n
      }), {
        type: "Line",
        shape: r
      };
    },
    shadow: function shadow(t, e, i) {
      var n = Math.max(1, t.getBandWidth()),
          r = i[1] - i[0];
      return {
        type: "Rect",
        shape: Ic([e - n / 2, i[0]], [n, r], Dc(t))
      };
    }
  };
  B_.registerAxisPointerClass("CartesianAxisPointer", Xx), ss(function (t) {
    if (t) {
      (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
      var e = t.axisPointer.link;
      e && !_(e) && (t.axisPointer.link = [e]);
    }
  }), ls(Um.PROCESSOR.STATISTIC, function (t, e) {
    t.getComponent("axisPointer").coordSysAxesInfo = _h(t, e);
  }), us({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, zx), ms({
    type: "tooltip",
    dependencies: ["axisPointer"],
    defaultOption: {
      zlevel: 0,
      z: 8,
      show: !0,
      showContent: !0,
      trigger: "item",
      triggerOn: "mousemove|click",
      alwaysShowContent: !1,
      displayMode: "single",
      confine: !1,
      showDelay: 0,
      hideDelay: 100,
      transitionDuration: .4,
      enterable: !1,
      backgroundColor: "rgba(50,50,50,0.7)",
      borderColor: "#333",
      borderRadius: 4,
      borderWidth: 0,
      padding: 5,
      extraCssText: "",
      axisPointer: {
        type: "line",
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: {
          color: "#999",
          width: 1,
          type: "dashed",
          textStyle: {}
        }
      },
      textStyle: {
        color: "#fff",
        fontSize: 14
      }
    }
  });
  var Ux = f,
      qx = Br,
      Zx = ["", "-webkit-", "-moz-", "-o-"],
      jx = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";
  Lc.prototype = {
    constructor: Lc,
    _enterable: !0,
    update: function update() {
      var t = this._container,
          e = t.currentStyle || document.defaultView.getComputedStyle(t),
          i = t.style;
      "absolute" !== i.position && "absolute" !== e.position && (i.position = "relative");
    },
    show: function show(t) {
      clearTimeout(this._hideTimeout);
      var e = this.el;
      e.style.cssText = jx + Ac(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", this._show = !0;
    },
    setContent: function setContent(t) {
      this.el.innerHTML = null == t ? "" : t;
    },
    setEnterable: function setEnterable(t) {
      this._enterable = t;
    },
    getSize: function getSize() {
      var t = this.el;
      return [t.clientWidth, t.clientHeight];
    },
    moveTo: function moveTo(t, e) {
      var i,
          n = this._zr;
      n && n.painter && (i = n.painter.getViewportRootOffset()) && (t += i.offsetLeft, e += i.offsetTop);
      var r = this.el.style;
      r.left = t + "px", r.top = e + "px", this._x = t, this._y = e;
    },
    hide: function hide() {
      this.el.style.display = "none", this._show = !1;
    },
    hideLater: function hideLater(t) {
      !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(m(this.hide, this), t)) : this.hide());
    },
    isShow: function isShow() {
      return this._show;
    }
  };
  var Kx = m,
      $x = f,
      Qx = Sr,
      Jx = new Og({
    shape: {
      x: -1,
      y: -1,
      width: 2,
      height: 2
    }
  });
  ys({
    type: "tooltip",
    init: function init(t, e) {
      if (!yd.node) {
        var i = new Lc(e.getDom(), e);
        this._tooltipContent = i;
      }
    },
    render: function render(t, e, i) {
      if (!yd.node && !yd.wxa) {
        this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = i, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");
        var n = this._tooltipContent;
        n.update(), n.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow();
      }
    },
    _initGlobalListener: function _initGlobalListener() {
      var t = this._tooltipModel,
          e = t.get("triggerOn");
      ac("itemTooltip", this._api, Kx(function (t, i, n) {
        "none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(i, n) : "leave" === t && this._hide(n));
      }, this));
    },
    _keepShow: function _keepShow() {
      var t = this._tooltipModel,
          e = this._ecModel,
          i = this._api;

      if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
        var n = this;
        clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
          n.manuallyShowTip(t, e, i, {
            x: n._lastX,
            y: n._lastY
          });
        });
      }
    },
    manuallyShowTip: function manuallyShowTip(t, e, i, n) {
      if (n.from !== this.uid && !yd.node) {
        var r = Oc(n, i);
        this._ticket = "";
        var a = n.dataByCoordSys;

        if (n.tooltip && null != n.x && null != n.y) {
          var o = Jx;
          o.position = [n.x, n.y], o.update(), o.tooltip = n.tooltip, this._tryShow({
            offsetX: n.x,
            offsetY: n.y,
            target: o
          }, r);
        } else if (a) this._tryShow({
          offsetX: n.x,
          offsetY: n.y,
          position: n.position,
          event: {},
          dataByCoordSys: n.dataByCoordSys,
          tooltipOption: n.tooltipOption
        }, r);else if (null != n.seriesIndex) {
          if (this._manuallyAxisShowTip(t, e, i, n)) return;
          var s = Ox(n, e),
              l = s.point[0],
              h = s.point[1];
          null != l && null != h && this._tryShow({
            offsetX: l,
            offsetY: h,
            position: n.position,
            target: s.el,
            event: {}
          }, r);
        } else null != n.x && null != n.y && (i.dispatchAction({
          type: "updateAxisPointer",
          x: n.x,
          y: n.y
        }), this._tryShow({
          offsetX: n.x,
          offsetY: n.y,
          position: n.position,
          target: i.getZr().findHover(n.x, n.y).target,
          event: {}
        }, r));
      }
    },
    manuallyHideTip: function manuallyHideTip(t, e, i, n) {
      var r = this._tooltipContent;
      !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, n.from !== this.uid && this._hide(Oc(n, i));
    },
    _manuallyAxisShowTip: function _manuallyAxisShowTip(t, e, i, n) {
      var r = n.seriesIndex,
          a = n.dataIndex,
          o = e.getComponent("axisPointer").coordSysAxesInfo;

      if (null != r && null != a && null != o) {
        var s = e.getSeriesByIndex(r);

        if (s) {
          var l = s.getData(),
              t = Pc([l.getItemModel(a), s, (s.coordinateSystem || {}).model, t]);
          if ("axis" === t.get("trigger")) return i.dispatchAction({
            type: "updateAxisPointer",
            seriesIndex: r,
            dataIndex: a,
            position: n.position
          }), !0;
        }
      }
    },
    _tryShow: function _tryShow(t, e) {
      var i = t.target,
          n = this._tooltipModel;

      if (n) {
        this._lastX = t.offsetX, this._lastY = t.offsetY;
        var r = t.dataByCoordSys;
        r && r.length ? this._showAxisTooltip(r, t) : i && null != i.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, i, e)) : i && i.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, i, e)) : (this._lastDataByCoordSys = null, this._hide(e));
      }
    },
    _showOrMove: function _showOrMove(t, e) {
      var i = t.get("showDelay");
      e = m(e, this), clearTimeout(this._showTimout), i > 0 ? this._showTimout = setTimeout(e, i) : e();
    },
    _showAxisTooltip: function _showAxisTooltip(t, e) {
      var i = this._ecModel,
          n = this._tooltipModel,
          r = [e.offsetX, e.offsetY],
          a = [],
          o = [],
          s = Pc([e.tooltipOption, n]);
      $x(t, function (t) {
        $x(t.dataByAxis, function (t) {
          var e = i.getComponent(t.axisDim + "Axis", t.axisIndex),
              n = t.value,
              r = [];

          if (e && null != n) {
            var s = wc(n, e.axis, i, t.seriesDataIndices, t.valueLabelOpt);
            f(t.seriesDataIndices, function (a) {
              var l = i.getSeriesByIndex(a.seriesIndex),
                  h = a.dataIndexInside,
                  u = l && l.getDataParams(h);
              u.axisDim = t.axisDim, u.axisIndex = t.axisIndex, u.axisType = t.axisType, u.axisId = t.axisId, u.axisValue = Js(e.axis, n), u.axisValueLabel = s, u && (o.push(u), r.push(l.formatTooltip(h, !0)));
            });
            var l = s;
            a.push((l ? Vr(l) + "<br />" : "") + r.join("<br />"));
          }
        });
      }, this), a.reverse(), a = a.join("<br /><br />");
      var l = e.position;

      this._showOrMove(s, function () {
        this._updateContentNotChangedOnAxis(t) ? this._updatePosition(s, l, r[0], r[1], this._tooltipContent, o) : this._showTooltipContent(s, a, o, Math.random(), r[0], r[1], l);
      });
    },
    _showSeriesItemTooltip: function _showSeriesItemTooltip(t, e, i) {
      var n = this._ecModel,
          r = e.seriesIndex,
          a = n.getSeriesByIndex(r),
          o = e.dataModel || a,
          s = e.dataIndex,
          l = e.dataType,
          h = o.getData(),
          u = Pc([h.getItemModel(s), o, a && (a.coordinateSystem || {}).model, this._tooltipModel]),
          c = u.get("trigger");

      if (null == c || "item" === c) {
        var d = o.getDataParams(s, l),
            f = o.formatTooltip(s, !1, l),
            p = "item_" + o.name + "_" + s;
        this._showOrMove(u, function () {
          this._showTooltipContent(u, f, d, p, t.offsetX, t.offsetY, t.position, t.target);
        }), i({
          type: "showTip",
          dataIndexInside: s,
          dataIndex: h.getRawIndex(s),
          seriesIndex: r,
          from: this.uid
        });
      }
    },
    _showComponentItemTooltip: function _showComponentItemTooltip(t, e, i) {
      var n = e.tooltip;

      if ("string" == typeof n) {
        var r = n;
        n = {
          content: r,
          formatter: r
        };
      }

      var a = new vr(n, this._tooltipModel, this._ecModel),
          o = a.get("content"),
          s = Math.random();
      this._showOrMove(a, function () {
        this._showTooltipContent(a, o, a.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e);
      }), i({
        type: "showTip",
        from: this.uid
      });
    },
    _showTooltipContent: function _showTooltipContent(t, e, i, n, r, a, o, s) {
      if (this._ticket = "", t.get("showContent") && t.get("show")) {
        var l = this._tooltipContent,
            h = t.get("formatter");
        o = o || t.get("position");
        var u = e;
        if (h && "string" == typeof h) u = Fr(h, i, !0);else if ("function" == typeof h) {
          var c = Kx(function (e, n) {
            e === this._ticket && (l.setContent(n), this._updatePosition(t, o, r, a, l, i, s));
          }, this);
          this._ticket = n, u = h(i, n, c);
        }
        l.setContent(u), l.show(t), this._updatePosition(t, o, r, a, l, i, s);
      }
    },
    _updatePosition: function _updatePosition(t, e, i, n, r, a, o) {
      var s = this._api.getWidth(),
          l = this._api.getHeight();

      e = e || t.get("position");
      var h = r.getSize(),
          u = t.get("align"),
          c = t.get("verticalAlign"),
          d = o && o.getBoundingRect().clone();
      if (o && d.applyTransform(o.transform), "function" == typeof e && (e = e([i, n], a, r.el, d, {
        viewSize: [s, l],
        contentSize: h.slice()
      })), _(e)) i = Qx(e[0], s), n = Qx(e[1], l);else if (b(e)) {
        e.width = h[0], e.height = h[1];
        var f = Ur(e, {
          width: s,
          height: l
        });
        i = f.x, n = f.y, u = null, c = null;
      } else if ("string" == typeof e && o) {
        var p = zc(e, d, h);
        i = p[0], n = p[1];
      } else {
        var p = Nc(i, n, r.el, s, l, u ? null : 20, c ? null : 20);
        i = p[0], n = p[1];
      }

      if (u && (i -= Bc(u) ? h[0] / 2 : "right" === u ? h[0] : 0), c && (n -= Bc(c) ? h[1] / 2 : "bottom" === c ? h[1] : 0), t.get("confine")) {
        var p = Rc(i, n, r.el, s, l);
        i = p[0], n = p[1];
      }

      r.moveTo(i, n);
    },
    _updateContentNotChangedOnAxis: function _updateContentNotChangedOnAxis(t) {
      var e = this._lastDataByCoordSys,
          i = !!e && e.length === t.length;
      return i && $x(e, function (e, n) {
        var r = e.dataByAxis || {},
            a = t[n] || {},
            o = a.dataByAxis || [];
        i &= r.length === o.length, i && $x(r, function (t, e) {
          var n = o[e] || {},
              r = t.seriesDataIndices || [],
              a = n.seriesDataIndices || [];
          i &= t.value === n.value && t.axisType === n.axisType && t.axisId === n.axisId && r.length === a.length, i && $x(r, function (t, e) {
            var n = a[e];
            i &= t.seriesIndex === n.seriesIndex && t.dataIndex === n.dataIndex;
          });
        });
      }), this._lastDataByCoordSys = t, !!i;
    },
    _hide: function _hide(t) {
      this._lastDataByCoordSys = null, t({
        type: "hideTip",
        from: this.uid
      });
    },
    dispose: function dispose(t, e) {
      yd.node || yd.wxa || (this._tooltipContent.hide(), cc("itemTooltip", e));
    }
  }), us({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, function () {}), us({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, function () {});

  var tw = f,
      ew = function ew(t) {
    var e = t && t.visualMap;
    _(e) || (e = e ? [e] : []), tw(e, function (t) {
      if (t) {
        Vc(t, "splitList") && !Vc(t, "pieces") && (t.pieces = t.splitList, delete t.splitList);
        var e = t.pieces;
        e && _(e) && tw(e, function (t) {
          b(t) && (Vc(t, "start") && !Vc(t, "min") && (t.min = t.start), Vc(t, "end") && !Vc(t, "max") && (t.max = t.end));
        });
      }
    });
  };

  vv.registerSubTypeDefaulter("visualMap", function (t) {
    return t.categories || (t.pieces ? t.pieces.length > 0 : t.splitNumber > 0) && !t.calculable ? "piecewise" : "continuous";
  });

  var iw = f,
      nw = b,
      rw = -1,
      aw = function aw(t) {
    var e = t.mappingMethod,
        i = t.type,
        r = this.option = n(t);
    this.type = i, this.mappingMethod = e, this._normalizeData = sw[e];
    var a = ow[i];
    this.applyVisual = a.applyVisual, this.getColorMapper = a.getColorMapper, this._doMap = a._doMap[e], "piecewise" === e ? (Wc(r), Fc(r)) : "category" === e ? r.categories ? Hc(r) : Wc(r, !0) : (P("linear" !== e || r.dataExtent), Wc(r));
  };

  aw.prototype = {
    constructor: aw,
    mapValueToVisual: function mapValueToVisual(t) {
      var e = this._normalizeData(t);

      return this._doMap(e, t);
    },
    getNormalizer: function getNormalizer() {
      return m(this._normalizeData, this);
    }
  };
  var ow = aw.visualHandlers = {
    color: {
      applyVisual: Yc("color"),
      getColorMapper: function getColorMapper() {
        var t = this.option;
        return m("category" === t.mappingMethod ? function (t, e) {
          return !e && (t = this._normalizeData(t)), Uc.call(this, t);
        } : function (e, i, n) {
          var r = !!n;
          return !i && (e = this._normalizeData(e)), n = At(e, t.parsedVisual, n), r ? n : Ot(n, "rgba");
        }, this);
      },
      _doMap: {
        linear: function linear(t) {
          return Ot(At(t, this.option.parsedVisual), "rgba");
        },
        category: Uc,
        piecewise: function piecewise(t, e) {
          var i = jc.call(this, e);
          return null == i && (i = Ot(At(t, this.option.parsedVisual), "rgba")), i;
        },
        fixed: qc
      }
    },
    colorHue: Gc(function (t, e) {
      return Lt(t, e);
    }),
    colorSaturation: Gc(function (t, e) {
      return Lt(t, null, e);
    }),
    colorLightness: Gc(function (t, e) {
      return Lt(t, null, null, e);
    }),
    colorAlpha: Gc(function (t, e) {
      return Pt(t, e);
    }),
    opacity: {
      applyVisual: Yc("opacity"),
      _doMap: Zc([0, 1])
    },
    liftZ: {
      applyVisual: Yc("liftZ"),
      _doMap: {
        linear: qc,
        category: qc,
        piecewise: qc,
        fixed: qc
      }
    },
    symbol: {
      applyVisual: function applyVisual(t, e, i) {
        var n = this.mapValueToVisual(t);
        if (w(n)) i("symbol", n);else if (nw(n)) for (var r in n) {
          n.hasOwnProperty(r) && i(r, n[r]);
        }
      },
      _doMap: {
        linear: Xc,
        category: Uc,
        piecewise: function piecewise(t, e) {
          var i = jc.call(this, e);
          return null == i && (i = Xc.call(this, t)), i;
        },
        fixed: qc
      }
    },
    symbolSize: {
      applyVisual: Yc("symbolSize"),
      _doMap: Zc([0, 1])
    }
  },
      sw = {
    linear: function linear(t) {
      return Mr(t, this.option.dataExtent, [0, 1], !0);
    },
    piecewise: function piecewise(t) {
      var e = this.option.pieceList,
          i = aw.findPieceIndex(t, e, !0);
      return null != i ? Mr(i, [0, e.length - 1], [0, 1], !0) : void 0;
    },
    category: function category(t) {
      var e = this.option.categories ? this.option.categoryMap[t] : t;
      return null == e ? rw : e;
    },
    fixed: B
  };
  aw.listVisualTypes = function () {
    var t = [];
    return f(ow, function (e, i) {
      t.push(i);
    }), t;
  }, aw.addVisualHandler = function (t, e) {
    ow[t] = e;
  }, aw.isValidType = function (t) {
    return ow.hasOwnProperty(t);
  }, aw.eachVisual = function (t, e, i) {
    b(t) ? f(t, e, i) : e.call(i, t);
  }, aw.mapVisual = function (t, e, i) {
    var n,
        r = _(t) ? [] : b(t) ? {} : (n = !0, null);
    return aw.eachVisual(t, function (t, a) {
      var o = e.call(i, t, a);
      n ? r = o : r[a] = o;
    }), r;
  }, aw.retrieveVisuals = function (t) {
    var e,
        i = {};
    return t && iw(ow, function (n, r) {
      t.hasOwnProperty(r) && (i[r] = t[r], e = !0);
    }), e ? i : null;
  }, aw.prepareVisualTypes = function (t) {
    if (nw(t)) {
      var e = [];
      iw(t, function (t, i) {
        e.push(i);
      }), t = e;
    } else {
      if (!_(t)) return [];
      t = t.slice();
    }

    return t.sort(function (t, e) {
      return "color" === e && "color" !== t && 0 === t.indexOf("color") ? 1 : -1;
    }), t;
  }, aw.dependsOn = function (t, e) {
    return "color" === e ? !(!t || 0 !== t.indexOf(e)) : t === e;
  }, aw.findPieceIndex = function (t, e, i) {
    function n(e, i) {
      var n = Math.abs(e - t);
      a > n && (a = n, r = i);
    }

    for (var r, a = 1 / 0, o = 0, s = e.length; s > o; o++) {
      var l = e[o].value;

      if (null != l) {
        if (l === t || "string" == typeof l && l === t + "") return o;
        i && n(l, o);
      }
    }

    for (var o = 0, s = e.length; s > o; o++) {
      var h = e[o],
          u = h.interval,
          c = h.close;

      if (u) {
        if (u[0] === -1 / 0) {
          if ($c(c[1], t, u[1])) return o;
        } else if (1 / 0 === u[1]) {
          if ($c(c[0], u[0], t)) return o;
        } else if ($c(c[0], u[0], t) && $c(c[1], t, u[1])) return o;

        i && n(u[0], o), i && n(u[1], o);
      }
    }

    return i ? 1 / 0 === t ? e.length - 1 : t === -1 / 0 ? 0 : r : void 0;
  };
  var lw = f,
      hw = Um.VISUAL.COMPONENT;
  ps(hw, {
    createOnAllSeries: !0,
    reset: function reset(t, e) {
      var i = [];
      return e.eachComponent("visualMap", function (e) {
        var n = t.pipelineContext;
        !e.isTargetSeries(t) || n && n.large || i.push(ed(e.stateList, e.targetVisuals, m(e.getValueState, e), e.getDataDimension(t.getData())));
      }), i;
    }
  }), ps(hw, {
    createOnAllSeries: !0,
    reset: function reset(t, e) {
      var i = t.getData(),
          n = [];
      e.eachComponent("visualMap", function (e) {
        if (e.isTargetSeries(t)) {
          var r = e.getVisualMeta(m(id, null, t, e)) || {
            stops: [],
            outerColors: []
          },
              a = e.getDataDimension(i),
              o = i.getDimensionInfo(a);
          null != o && (r.dimension = o.index, n.push(r));
        }
      }), t.getData().setVisual("visualMeta", n);
    }
  });

  var uw = {
    get: function get(t, e, i) {
      var r = n((cw[t] || {})[e]);
      return i && _(r) ? r[r.length - 1] : r;
    }
  },
      cw = {
    color: {
      active: ["#006edd", "#e0ffff"],
      inactive: ["rgba(0,0,0,0)"]
    },
    colorHue: {
      active: [0, 360],
      inactive: [0, 0]
    },
    colorSaturation: {
      active: [.3, 1],
      inactive: [0, 0]
    },
    colorLightness: {
      active: [.9, .5],
      inactive: [0, 0]
    },
    colorAlpha: {
      active: [.3, 1],
      inactive: [0, 0]
    },
    opacity: {
      active: [.3, 1],
      inactive: [0, 0]
    },
    symbol: {
      active: ["circle", "roundRect", "diamond"],
      inactive: ["none"]
    },
    symbolSize: {
      active: [10, 50],
      inactive: [0, 0]
    }
  },
      dw = aw.mapVisual,
      fw = aw.eachVisual,
      pw = _,
      gw = f,
      vw = Tr,
      mw = Mr,
      yw = B,
      _w = ms({
    type: "visualMap",
    dependencies: ["series"],
    stateList: ["inRange", "outOfRange"],
    replacableOptionKeys: ["inRange", "outOfRange", "target", "controller", "color"],
    dataBound: [-1 / 0, 1 / 0],
    layoutMode: {
      type: "box",
      ignoreSize: !0
    },
    defaultOption: {
      show: !0,
      zlevel: 0,
      z: 4,
      seriesIndex: "all",
      min: 0,
      max: 200,
      dimension: null,
      inRange: null,
      outOfRange: null,
      left: 0,
      right: null,
      top: null,
      bottom: 0,
      itemWidth: null,
      itemHeight: null,
      inverse: !1,
      orient: "vertical",
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      contentColor: "#5793f3",
      inactiveColor: "#aaa",
      borderWidth: 0,
      padding: 5,
      textGap: 10,
      precision: 0,
      color: null,
      formatter: null,
      text: null,
      textStyle: {
        color: "#333"
      }
    },
    init: function init(t, e, i) {
      this._dataExtent, this.targetVisuals = {}, this.controllerVisuals = {}, this.textStyleModel, this.itemSize, this.mergeDefaultAndTheme(t, i);
    },
    optionUpdated: function optionUpdated(t, e) {
      var i = this.option;
      yd.canvasSupported || (i.realtime = !1), !e && td(i, t, this.replacableOptionKeys), this.textStyleModel = this.getModel("textStyle"), this.resetItemSize(), this.completeVisualOption();
    },
    resetVisual: function resetVisual(t) {
      var e = this.stateList;
      t = m(t, this), this.controllerVisuals = Jc(this.option.controller, e, t), this.targetVisuals = Jc(this.option.target, e, t);
    },
    getTargetSeriesIndices: function getTargetSeriesIndices() {
      var t = this.option.seriesIndex,
          e = [];
      return null == t || "all" === t ? this.ecModel.eachSeries(function (t, i) {
        e.push(i);
      }) : e = vi(t), e;
    },
    eachTargetSeries: function eachTargetSeries(t, e) {
      f(this.getTargetSeriesIndices(), function (i) {
        t.call(e, this.ecModel.getSeriesByIndex(i));
      }, this);
    },
    isTargetSeries: function isTargetSeries(t) {
      var e = !1;
      return this.eachTargetSeries(function (i) {
        i === t && (e = !0);
      }), e;
    },
    formatValueText: function formatValueText(t, e, i) {
      function n(t) {
        return t === l[0] ? "min" : t === l[1] ? "max" : (+t).toFixed(Math.min(s, 20));
      }

      var r,
          a,
          o = this.option,
          s = o.precision,
          l = this.dataBound,
          h = o.formatter;
      return i = i || ["<", ">"], _(t) && (t = t.slice(), r = !0), a = e ? t : r ? [n(t[0]), n(t[1])] : n(t), w(h) ? h.replace("{value}", r ? a[0] : a).replace("{value2}", r ? a[1] : a) : x(h) ? r ? h(t[0], t[1]) : h(t) : r ? t[0] === l[0] ? i[0] + " " + a[1] : t[1] === l[1] ? i[1] + " " + a[0] : a[0] + " - " + a[1] : a;
    },
    resetExtent: function resetExtent() {
      var t = this.option,
          e = vw([t.min, t.max]);
      this._dataExtent = e;
    },
    getDataDimension: function getDataDimension(t) {
      var e = this.option.dimension,
          i = t.dimensions;

      if (null != e || i.length) {
        if (null != e) return t.getDimension(e);

        for (var n = t.dimensions, r = n.length - 1; r >= 0; r--) {
          var a = n[r],
              o = t.getDimensionInfo(a);
          if (!o.isCalculationCoord) return a;
        }
      }
    },
    getExtent: function getExtent() {
      return this._dataExtent.slice();
    },
    completeVisualOption: function completeVisualOption() {
      function t(t) {
        pw(o.color) && !t.inRange && (t.inRange = {
          color: o.color.slice().reverse()
        }), t.inRange = t.inRange || {
          color: a.get("gradientColor")
        }, gw(this.stateList, function (e) {
          var i = t[e];

          if (w(i)) {
            var n = uw.get(i, "active", u);
            n ? (t[e] = {}, t[e][i] = n) : delete t[e];
          }
        }, this);
      }

      function e(t, e, i) {
        var n = t[e],
            r = t[i];
        n && !r && (r = t[i] = {}, gw(n, function (t, e) {
          if (aw.isValidType(e)) {
            var i = uw.get(e, "inactive", u);
            null != i && (r[e] = i, "color" !== e || r.hasOwnProperty("opacity") || r.hasOwnProperty("colorAlpha") || (r.opacity = [0, 0]));
          }
        }));
      }

      function i(t) {
        var e = (t.inRange || {}).symbol || (t.outOfRange || {}).symbol,
            i = (t.inRange || {}).symbolSize || (t.outOfRange || {}).symbolSize,
            r = this.get("inactiveColor");
        gw(this.stateList, function (a) {
          var o = this.itemSize,
              s = t[a];
          s || (s = t[a] = {
            color: u ? r : [r]
          }), null == s.symbol && (s.symbol = e && n(e) || (u ? "roundRect" : ["roundRect"])), null == s.symbolSize && (s.symbolSize = i && n(i) || (u ? o[0] : [o[0], o[0]])), s.symbol = dw(s.symbol, function (t) {
            return "none" === t || "square" === t ? "roundRect" : t;
          });
          var l = s.symbolSize;

          if (null != l) {
            var h = -1 / 0;
            fw(l, function (t) {
              t > h && (h = t);
            }), s.symbolSize = dw(l, function (t) {
              return mw(t, [0, h], [0, o[0]], !0);
            });
          }
        }, this);
      }

      var a = this.ecModel,
          o = this.option,
          s = {
        inRange: o.inRange,
        outOfRange: o.outOfRange
      },
          l = o.target || (o.target = {}),
          h = o.controller || (o.controller = {});
      r(l, s), r(h, s);
      var u = this.isCategory();
      t.call(this, l), t.call(this, h), e.call(this, l, "inRange", "outOfRange"), i.call(this, h);
    },
    resetItemSize: function resetItemSize() {
      this.itemSize = [parseFloat(this.get("itemWidth")), parseFloat(this.get("itemHeight"))];
    },
    isCategory: function isCategory() {
      return !!this.option.categories;
    },
    setSelected: yw,
    getValueState: yw,
    getVisualMeta: yw
  }),
      xw = [20, 140],
      ww = _w.extend({
    type: "visualMap.continuous",
    defaultOption: {
      align: "auto",
      calculable: !1,
      range: null,
      realtime: !0,
      itemHeight: null,
      itemWidth: null,
      hoverLink: !0,
      hoverLinkDataSize: null,
      hoverLinkOnHandle: null
    },
    optionUpdated: function optionUpdated() {
      ww.superApply(this, "optionUpdated", arguments), this.resetExtent(), this.resetVisual(function (t) {
        t.mappingMethod = "linear", t.dataExtent = this.getExtent();
      }), this._resetRange();
    },
    resetItemSize: function resetItemSize() {
      ww.superApply(this, "resetItemSize", arguments);
      var t = this.itemSize;
      "horizontal" === this._orient && t.reverse(), (null == t[0] || isNaN(t[0])) && (t[0] = xw[0]), (null == t[1] || isNaN(t[1])) && (t[1] = xw[1]);
    },
    _resetRange: function _resetRange() {
      var t = this.getExtent(),
          e = this.option.range;
      !e || e.auto ? (t.auto = 1, this.option.range = t) : _(e) && (e[0] > e[1] && e.reverse(), e[0] = Math.max(e[0], t[0]), e[1] = Math.min(e[1], t[1]));
    },
    completeVisualOption: function completeVisualOption() {
      _w.prototype.completeVisualOption.apply(this, arguments), f(this.stateList, function (t) {
        var e = this.option.controller[t].symbolSize;
        e && e[0] !== e[1] && (e[0] = 0);
      }, this);
    },
    setSelected: function setSelected(t) {
      this.option.range = t.slice(), this._resetRange();
    },
    getSelected: function getSelected() {
      var t = this.getExtent(),
          e = Tr((this.get("range") || []).slice());
      return e[0] > t[1] && (e[0] = t[1]), e[1] > t[1] && (e[1] = t[1]), e[0] < t[0] && (e[0] = t[0]), e[1] < t[0] && (e[1] = t[0]), e;
    },
    getValueState: function getValueState(t) {
      var e = this.option.range,
          i = this.getExtent();
      return (e[0] <= i[0] || e[0] <= t) && (e[1] >= i[1] || t <= e[1]) ? "inRange" : "outOfRange";
    },
    findTargetDataIndices: function findTargetDataIndices(t) {
      var e = [];
      return this.eachTargetSeries(function (i) {
        var n = [],
            r = i.getData();
        r.each(this.getDataDimension(r), function (e, i) {
          t[0] <= e && e <= t[1] && n.push(i);
        }, this), e.push({
          seriesId: i.id,
          dataIndex: n
        });
      }, this), e;
    },
    getVisualMeta: function getVisualMeta(t) {
      function e(e, i) {
        r.push({
          value: e,
          color: t(e, i)
        });
      }

      for (var i = nd(this, "outOfRange", this.getExtent()), n = nd(this, "inRange", this.option.range.slice()), r = [], a = 0, o = 0, s = n.length, l = i.length; l > o && (!n.length || i[o] <= n[0]); o++) {
        i[o] < n[a] && e(i[o], "outOfRange");
      }

      for (var h = 1; s > a; a++, h = 0) {
        h && r.length && e(n[a], "outOfRange"), e(n[a], "inRange");
      }

      for (var h = 1; l > o; o++) {
        (!n.length || n[n.length - 1] < i[o]) && (h && (r.length && e(r[r.length - 1].value, "outOfRange"), h = 0), e(i[o], "outOfRange"));
      }

      var u = r.length;
      return {
        stops: r,
        outerColors: [u ? r[0].color : "transparent", u ? r[u - 1].color : "transparent"]
      };
    }
  }),
      bw = ys({
    type: "visualMap",
    autoPositionValues: {
      left: 1,
      right: 1,
      top: 1,
      bottom: 1
    },
    init: function init(t, e) {
      this.ecModel = t, this.api = e, this.visualMapModel;
    },
    render: function render(t) {
      return this.visualMapModel = t, t.get("show") === !1 ? void this.group.removeAll() : void this.doRender.apply(this, arguments);
    },
    renderBackground: function renderBackground(t) {
      var e = this.visualMapModel,
          i = rv(e.get("padding") || 0),
          n = t.getBoundingRect();
      t.add(new Og({
        z2: -1,
        silent: !0,
        shape: {
          x: n.x - i[3],
          y: n.y - i[0],
          width: n.width + i[3] + i[1],
          height: n.height + i[0] + i[2]
        },
        style: {
          fill: e.get("backgroundColor"),
          stroke: e.get("borderColor"),
          lineWidth: e.get("borderWidth")
        }
      }));
    },
    getControllerVisual: function getControllerVisual(t, e, i) {
      function n(t) {
        return s[t];
      }

      function r(t, e) {
        s[t] = e;
      }

      i = i || {};
      var a = i.forceState,
          o = this.visualMapModel,
          s = {};

      if ("symbol" === e && (s.symbol = o.get("itemSymbol")), "color" === e) {
        var l = o.get("contentColor");
        s.color = l;
      }

      var h = o.controllerVisuals[a || o.getValueState(t)],
          u = aw.prepareVisualTypes(h);
      return f(u, function (a) {
        var o = h[a];
        i.convertOpacityToAlpha && "opacity" === a && (a = "colorAlpha", o = h.__alphaForOpacity), aw.dependsOn(a, e) && o && o.applyVisual(t, n, r);
      }), s[e];
    },
    positionGroup: function positionGroup(t) {
      var e = this.visualMapModel,
          i = this.api;
      qr(t, e.getBoxLayoutParams(), {
        width: i.getWidth(),
        height: i.getHeight()
      });
    },
    doRender: B
  }),
      Mw = function Mw(t, e, i, n, r, a) {
    e[0] = ad(e[0], i), e[1] = ad(e[1], i), t = t || 0;
    var o = i[1] - i[0];
    null != r && (r = ad(r, [0, o])), null != a && (a = Math.max(a, null != r ? r : 0)), "all" === n && (r = a = Math.abs(e[1] - e[0]), n = 0);
    var s = rd(e, n);
    e[n] += t;
    var l = r || 0,
        h = i.slice();
    s.sign < 0 ? h[0] += l : h[1] -= l, e[n] = ad(e[n], h);
    var u = rd(e, n);
    null != r && (u.sign !== s.sign || u.span < r) && (e[1 - n] = e[n] + s.sign * r);
    var u = rd(e, n);
    return null != a && u.span > a && (e[1 - n] = e[n] + u.sign * a), e;
  },
      Sw = Mr,
      Iw = f,
      Tw = Math.min,
      Dw = Math.max,
      Cw = 12,
      kw = 6,
      Aw = bw.extend({
    type: "visualMap.continuous",
    init: function init() {
      Aw.superApply(this, "init", arguments), this._shapes = {}, this._dataInterval = [], this._handleEnds = [], this._orient, this._useHandle, this._hoverLinkDataIndices = [], this._dragging, this._hovering;
    },
    doRender: function doRender(t, e, i, n) {
      n && "selectDataRange" === n.type && n.from === this.uid || this._buildView();
    },
    _buildView: function _buildView() {
      this.group.removeAll();
      var t = this.visualMapModel,
          e = this.group;
      this._orient = t.get("orient"), this._useHandle = t.get("calculable"), this._resetInterval(), this._renderBar(e);
      var i = t.get("text");
      this._renderEndsText(e, i, 0), this._renderEndsText(e, i, 1), this._updateView(!0), this.renderBackground(e), this._updateView(), this._enableHoverLinkToSeries(), this._enableHoverLinkFromSeries(), this.positionGroup(e);
    },
    _renderEndsText: function _renderEndsText(t, e, i) {
      if (e) {
        var n = e[1 - i];
        n = null != n ? n + "" : "";

        var r = this.visualMapModel,
            a = r.get("textGap"),
            o = r.itemSize,
            s = this._shapes.barGroup,
            l = this._applyTransform([o[0] / 2, 0 === i ? -a : o[1] + a], s),
            h = this._applyTransform(0 === i ? "bottom" : "top", s),
            u = this._orient,
            c = this.visualMapModel.textStyleModel;

        this.group.add(new Mg({
          style: {
            x: l[0],
            y: l[1],
            textVerticalAlign: "horizontal" === u ? "middle" : h,
            textAlign: "horizontal" === u ? h : "center",
            text: n,
            textFont: c.getFont(),
            textFill: c.getTextColor()
          }
        }));
      }
    },
    _renderBar: function _renderBar(t) {
      var e = this.visualMapModel,
          i = this._shapes,
          n = e.itemSize,
          r = this._orient,
          a = this._useHandle,
          o = od(e, this.api, n),
          s = i.barGroup = this._createBarGroup(o);

      s.add(i.outOfRange = ld()), s.add(i.inRange = ld(null, a ? fd(this._orient) : null, m(this._dragHandle, this, "all", !1), m(this._dragHandle, this, "all", !0)));
      var l = e.textStyleModel.getTextRect("国"),
          h = Dw(l.width, l.height);
      a && (i.handleThumbs = [], i.handleLabels = [], i.handleLabelPoints = [], this._createHandle(s, 0, n, h, r, o), this._createHandle(s, 1, n, h, r, o)), this._createIndicator(s, n, h, r), t.add(s);
    },
    _createHandle: function _createHandle(t, e, i, n, r) {
      var a = m(this._dragHandle, this, e, !1),
          o = m(this._dragHandle, this, e, !0),
          s = ld(hd(e, n), fd(this._orient), a, o);
      s.position[0] = i[0], t.add(s);
      var l = this.visualMapModel.textStyleModel,
          h = new Mg({
        draggable: !0,
        drift: a,
        onmousemove: function onmousemove(t) {
          Zf(t.event);
        },
        ondragend: o,
        style: {
          x: 0,
          y: 0,
          text: "",
          textFont: l.getFont(),
          textFill: l.getTextColor()
        }
      });
      this.group.add(h);
      var u = ["horizontal" === r ? n / 2 : 1.5 * n, "horizontal" === r ? 0 === e ? -(1.5 * n) : 1.5 * n : 0 === e ? -n / 2 : n / 2],
          c = this._shapes;
      c.handleThumbs[e] = s, c.handleLabelPoints[e] = u, c.handleLabels[e] = h;
    },
    _createIndicator: function _createIndicator(t, e, i, n) {
      var r = ld([[0, 0]], "move");
      r.position[0] = e[0], r.attr({
        invisible: !0,
        silent: !0
      }), t.add(r);
      var a = this.visualMapModel.textStyleModel,
          o = new Mg({
        silent: !0,
        invisible: !0,
        style: {
          x: 0,
          y: 0,
          text: "",
          textFont: a.getFont(),
          textFill: a.getTextColor()
        }
      });
      this.group.add(o);
      var s = ["horizontal" === n ? i / 2 : kw + 3, 0],
          l = this._shapes;
      l.indicator = r, l.indicatorLabel = o, l.indicatorLabelPoint = s;
    },
    _dragHandle: function _dragHandle(t, e, i, n) {
      if (this._useHandle) {
        if (this._dragging = !e, !e) {
          var r = this._applyTransform([i, n], this._shapes.barGroup, !0);

          this._updateInterval(t, r[1]), this._updateView();
        }

        e === !this.visualMapModel.get("realtime") && this.api.dispatchAction({
          type: "selectDataRange",
          from: this.uid,
          visualMapId: this.visualMapModel.id,
          selected: this._dataInterval.slice()
        }), e ? !this._hovering && this._clearHoverLinkToSeries() : dd(this.visualMapModel) && this._doHoverLinkToSeries(this._handleEnds[t], !1);
      }
    },
    _resetInterval: function _resetInterval() {
      var t = this.visualMapModel,
          e = this._dataInterval = t.getSelected(),
          i = t.getExtent(),
          n = [0, t.itemSize[1]];
      this._handleEnds = [Sw(e[0], i, n, !0), Sw(e[1], i, n, !0)];
    },
    _updateInterval: function _updateInterval(t, e) {
      e = e || 0;
      var i = this.visualMapModel,
          n = this._handleEnds,
          r = [0, i.itemSize[1]];
      Mw(e, n, r, t, 0);
      var a = i.getExtent();
      this._dataInterval = [Sw(n[0], r, a, !0), Sw(n[1], r, a, !0)];
    },
    _updateView: function _updateView(t) {
      var e = this.visualMapModel,
          i = e.getExtent(),
          n = this._shapes,
          r = [0, e.itemSize[1]],
          a = t ? r : this._handleEnds,
          o = this._createBarVisual(this._dataInterval, i, a, "inRange"),
          s = this._createBarVisual(i, i, r, "outOfRange");

      n.inRange.setStyle({
        fill: o.barColor,
        opacity: o.opacity
      }).setShape("points", o.barPoints), n.outOfRange.setStyle({
        fill: s.barColor,
        opacity: s.opacity
      }).setShape("points", s.barPoints), this._updateHandle(a, o);
    },
    _createBarVisual: function _createBarVisual(t, e, i, n) {
      var r = {
        forceState: n,
        convertOpacityToAlpha: !0
      },
          a = this._makeColorGradient(t, r),
          o = [this.getControllerVisual(t[0], "symbolSize", r), this.getControllerVisual(t[1], "symbolSize", r)],
          s = this._createBarPoints(i, o);

      return {
        barColor: new Fg(0, 0, 0, 1, a),
        barPoints: s,
        handlesColor: [a[0].color, a[a.length - 1].color]
      };
    },
    _makeColorGradient: function _makeColorGradient(t, e) {
      var i = 100,
          n = [],
          r = (t[1] - t[0]) / i;
      n.push({
        color: this.getControllerVisual(t[0], "color", e),
        offset: 0
      });

      for (var a = 1; i > a; a++) {
        var o = t[0] + r * a;
        if (o > t[1]) break;
        n.push({
          color: this.getControllerVisual(o, "color", e),
          offset: a / i
        });
      }

      return n.push({
        color: this.getControllerVisual(t[1], "color", e),
        offset: 1
      }), n;
    },
    _createBarPoints: function _createBarPoints(t, e) {
      var i = this.visualMapModel.itemSize;
      return [[i[0] - e[0], t[0]], [i[0], t[0]], [i[0], t[1]], [i[0] - e[1], t[1]]];
    },
    _createBarGroup: function _createBarGroup(t) {
      var e = this._orient,
          i = this.visualMapModel.get("inverse");
      return new pf("horizontal" !== e || i ? "horizontal" === e && i ? {
        scale: "bottom" === t ? [-1, 1] : [1, 1],
        rotation: -Math.PI / 2
      } : "vertical" !== e || i ? {
        scale: "left" === t ? [1, 1] : [-1, 1]
      } : {
        scale: "left" === t ? [1, -1] : [-1, -1]
      } : {
        scale: "bottom" === t ? [1, 1] : [-1, 1],
        rotation: Math.PI / 2
      });
    },
    _updateHandle: function _updateHandle(t, e) {
      if (this._useHandle) {
        var i = this._shapes,
            n = this.visualMapModel,
            r = i.handleThumbs,
            a = i.handleLabels;
        Iw([0, 1], function (o) {
          var s = r[o];
          s.setStyle("fill", e.handlesColor[o]), s.position[1] = t[o];
          var l = ur(i.handleLabelPoints[o], hr(s, this.group));
          a[o].setStyle({
            x: l[0],
            y: l[1],
            text: n.formatValueText(this._dataInterval[o]),
            textVerticalAlign: "middle",
            textAlign: this._applyTransform("horizontal" === this._orient ? 0 === o ? "bottom" : "top" : "left", i.barGroup)
          });
        }, this);
      }
    },
    _showIndicator: function _showIndicator(t, e, i, n) {
      var r = this.visualMapModel,
          a = r.getExtent(),
          o = r.itemSize,
          s = [0, o[1]],
          l = Sw(t, a, s, !0),
          h = this._shapes,
          u = h.indicator;

      if (u) {
        u.position[1] = l, u.attr("invisible", !1), u.setShape("points", ud(!!i, n, l, o[1]));
        var c = {
          convertOpacityToAlpha: !0
        },
            d = this.getControllerVisual(t, "color", c);
        u.setStyle("fill", d);
        var f = ur(h.indicatorLabelPoint, hr(u, this.group)),
            p = h.indicatorLabel;
        p.attr("invisible", !1);

        var g = this._applyTransform("left", h.barGroup),
            v = this._orient;

        p.setStyle({
          text: (i ? i : "") + r.formatValueText(e),
          textVerticalAlign: "horizontal" === v ? g : "middle",
          textAlign: "horizontal" === v ? "center" : g,
          x: f[0],
          y: f[1]
        });
      }
    },
    _enableHoverLinkToSeries: function _enableHoverLinkToSeries() {
      var t = this;

      this._shapes.barGroup.on("mousemove", function (e) {
        if (t._hovering = !0, !t._dragging) {
          var i = t.visualMapModel.itemSize,
              n = t._applyTransform([e.offsetX, e.offsetY], t._shapes.barGroup, !0, !0);

          n[1] = Tw(Dw(0, n[1]), i[1]), t._doHoverLinkToSeries(n[1], 0 <= n[0] && n[0] <= i[0]);
        }
      }).on("mouseout", function () {
        t._hovering = !1, !t._dragging && t._clearHoverLinkToSeries();
      });
    },
    _enableHoverLinkFromSeries: function _enableHoverLinkFromSeries() {
      var t = this.api.getZr();
      this.visualMapModel.option.hoverLink ? (t.on("mouseover", this._hoverLinkFromSeriesMouseOver, this), t.on("mouseout", this._hideIndicator, this)) : this._clearHoverLinkFromSeries();
    },
    _doHoverLinkToSeries: function _doHoverLinkToSeries(t, e) {
      var i = this.visualMapModel,
          n = i.itemSize;

      if (i.option.hoverLink) {
        var r = [0, n[1]],
            a = i.getExtent();
        t = Tw(Dw(r[0], t), r[1]);
        var o = cd(i, a, r),
            s = [t - o, t + o],
            l = Sw(t, r, a, !0),
            h = [Sw(s[0], r, a, !0), Sw(s[1], r, a, !0)];
        s[0] < r[0] && (h[0] = -1 / 0), s[1] > r[1] && (h[1] = 1 / 0), e && (h[0] === -1 / 0 ? this._showIndicator(l, h[1], "< ", o) : 1 / 0 === h[1] ? this._showIndicator(l, h[0], "> ", o) : this._showIndicator(l, l, "≈ ", o));
        var u = this._hoverLinkDataIndices,
            c = [];
        (e || dd(i)) && (c = this._hoverLinkDataIndices = i.findTargetDataIndices(h));
        var d = Si(u, c);
        this._dispatchHighDown("downplay", sd(d[0])), this._dispatchHighDown("highlight", sd(d[1]));
      }
    },
    _hoverLinkFromSeriesMouseOver: function _hoverLinkFromSeriesMouseOver(t) {
      var e = t.target,
          i = this.visualMapModel;

      if (e && null != e.dataIndex) {
        var n = this.ecModel.getSeriesByIndex(e.seriesIndex);

        if (i.isTargetSeries(n)) {
          var r = n.getData(e.dataType),
              a = r.get(i.getDataDimension(r), e.dataIndex, !0);
          isNaN(a) || this._showIndicator(a, a);
        }
      }
    },
    _hideIndicator: function _hideIndicator() {
      var t = this._shapes;
      t.indicator && t.indicator.attr("invisible", !0), t.indicatorLabel && t.indicatorLabel.attr("invisible", !0);
    },
    _clearHoverLinkToSeries: function _clearHoverLinkToSeries() {
      this._hideIndicator();

      var t = this._hoverLinkDataIndices;
      this._dispatchHighDown("downplay", sd(t)), t.length = 0;
    },
    _clearHoverLinkFromSeries: function _clearHoverLinkFromSeries() {
      this._hideIndicator();

      var t = this.api.getZr();
      t.off("mouseover", this._hoverLinkFromSeriesMouseOver), t.off("mouseout", this._hideIndicator);
    },
    _applyTransform: function _applyTransform(t, e, i, n) {
      var r = hr(e, n ? null : this.group);
      return Zg[_(t) ? "applyTransform" : "transformDirection"](t, r, i);
    },
    _dispatchHighDown: function _dispatchHighDown(t, e) {
      e && e.length && this.api.dispatchAction({
        type: t,
        batch: e
      });
    },
    dispose: function dispose() {
      this._clearHoverLinkFromSeries(), this._clearHoverLinkToSeries();
    },
    remove: function remove() {
      this._clearHoverLinkFromSeries(), this._clearHoverLinkToSeries();
    }
  }),
      Lw = {
    type: "selectDataRange",
    event: "dataRangeSelected",
    update: "update"
  };

  us(Lw, function (t, e) {
    e.eachComponent({
      mainType: "visualMap",
      query: t
    }, function (e) {
      e.setSelected(t.selected);
    });
  }), ss(ew);

  var Pw = _w.extend({
    type: "visualMap.piecewise",
    defaultOption: {
      selected: null,
      minOpen: !1,
      maxOpen: !1,
      align: "auto",
      itemWidth: 20,
      itemHeight: 14,
      itemSymbol: "roundRect",
      pieceList: null,
      categories: null,
      splitNumber: 5,
      selectedMode: "multiple",
      itemGap: 10,
      hoverLink: !0,
      showLabel: null
    },
    optionUpdated: function optionUpdated(t, e) {
      Pw.superApply(this, "optionUpdated", arguments), this._pieceList = [], this.resetExtent();

      var i = this._mode = this._determineMode();

      Ow[this._mode].call(this), this._resetSelected(t, e);
      var r = this.option.categories;
      this.resetVisual(function (t, e) {
        "categories" === i ? (t.mappingMethod = "category", t.categories = n(r)) : (t.dataExtent = this.getExtent(), t.mappingMethod = "piecewise", t.pieceList = p(this._pieceList, function (t) {
          var t = n(t);
          return "inRange" !== e && (t.visual = null), t;
        }));
      });
    },
    completeVisualOption: function completeVisualOption() {
      function t(t, e, i) {
        return t && t[e] && (b(t[e]) ? t[e].hasOwnProperty(i) : t[e] === i);
      }

      var e = this.option,
          i = {},
          n = aw.listVisualTypes(),
          r = this.isCategory();
      f(e.pieces, function (t) {
        f(n, function (e) {
          t.hasOwnProperty(e) && (i[e] = 1);
        });
      }), f(i, function (i, n) {
        var a = 0;
        f(this.stateList, function (i) {
          a |= t(e, i, n) || t(e.target, i, n);
        }, this), !a && f(this.stateList, function (t) {
          (e[t] || (e[t] = {}))[n] = uw.get(n, "inRange" === t ? "active" : "inactive", r);
        });
      }, this), _w.prototype.completeVisualOption.apply(this, arguments);
    },
    _resetSelected: function _resetSelected(t, e) {
      var i = this.option,
          n = this._pieceList,
          r = (e ? i : t).selected || {};

      if (i.selected = r, f(n, function (t) {
        var e = this.getSelectedMapKey(t);
        r.hasOwnProperty(e) || (r[e] = !0);
      }, this), "single" === i.selectedMode) {
        var a = !1;
        f(n, function (t) {
          var e = this.getSelectedMapKey(t);
          r[e] && (a ? r[e] = !1 : a = !0);
        }, this);
      }
    },
    getSelectedMapKey: function getSelectedMapKey(t) {
      return "categories" === this._mode ? t.value + "" : t.index + "";
    },
    getPieceList: function getPieceList() {
      return this._pieceList;
    },
    _determineMode: function _determineMode() {
      var t = this.option;
      return t.pieces && t.pieces.length > 0 ? "pieces" : this.option.categories ? "categories" : "splitNumber";
    },
    setSelected: function setSelected(t) {
      this.option.selected = n(t);
    },
    getValueState: function getValueState(t) {
      var e = aw.findPieceIndex(t, this._pieceList);
      return null != e && this.option.selected[this.getSelectedMapKey(this._pieceList[e])] ? "inRange" : "outOfRange";
    },
    findTargetDataIndices: function findTargetDataIndices(t) {
      var e = [];
      return this.eachTargetSeries(function (i) {
        var n = [],
            r = i.getData();
        r.each(this.getDataDimension(r), function (e, i) {
          var r = aw.findPieceIndex(e, this._pieceList);
          r === t && n.push(i);
        }, this), e.push({
          seriesId: i.id,
          dataIndex: n
        });
      }, this), e;
    },
    getRepresentValue: function getRepresentValue(t) {
      var e;
      if (this.isCategory()) e = t.value;else if (null != t.value) e = t.value;else {
        var i = t.interval || [];
        e = i[0] === -1 / 0 && 1 / 0 === i[1] ? 0 : (i[0] + i[1]) / 2;
      }
      return e;
    },
    getVisualMeta: function getVisualMeta(t) {
      function e(e, a) {
        var o = r.getRepresentValue({
          interval: e
        });
        a || (a = r.getValueState(o));
        var s = t(o, a);
        e[0] === -1 / 0 ? n[0] = s : 1 / 0 === e[1] ? n[1] = s : i.push({
          value: e[0],
          color: s
        }, {
          value: e[1],
          color: s
        });
      }

      if (!this.isCategory()) {
        var i = [],
            n = [],
            r = this,
            a = this._pieceList.slice();

        if (a.length) {
          var o = a[0].interval[0];
          o !== -1 / 0 && a.unshift({
            interval: [-1 / 0, o]
          }), o = a[a.length - 1].interval[1], 1 / 0 !== o && a.push({
            interval: [o, 1 / 0]
          });
        } else a.push({
          interval: [-1 / 0, 1 / 0]
        });

        var s = -1 / 0;
        return f(a, function (t) {
          var i = t.interval;
          i && (i[0] > s && e([s, i[0]], "outOfRange"), e(i.slice()), s = i[1]);
        }, this), {
          stops: i,
          outerColors: n
        };
      }
    }
  }),
      Ow = {
    splitNumber: function splitNumber() {
      var t = this.option,
          e = this._pieceList,
          i = Math.min(t.precision, 20),
          n = this.getExtent(),
          r = t.splitNumber;
      r = Math.max(parseInt(r, 10), 1), t.splitNumber = r;

      for (var a = (n[1] - n[0]) / r; +a.toFixed(i) !== a && 5 > i;) {
        i++;
      }

      t.precision = i, a = +a.toFixed(i);
      var o = 0;
      t.minOpen && e.push({
        index: o++,
        interval: [-1 / 0, n[0]],
        close: [0, 0]
      });

      for (var s = n[0], l = o + r; l > o; s += a) {
        var h = o === r - 1 ? n[1] : s + a;
        e.push({
          index: o++,
          interval: [s, h],
          close: [1, 1]
        });
      }

      t.maxOpen && e.push({
        index: o++,
        interval: [n[1], 1 / 0],
        close: [0, 0]
      }), Er(e), f(e, function (t) {
        t.text = this.formatValueText(t.interval);
      }, this);
    },
    categories: function categories() {
      var t = this.option;
      f(t.categories, function (t) {
        this._pieceList.push({
          text: this.formatValueText(t, !0),
          value: t
        });
      }, this), pd(t, this._pieceList);
    },
    pieces: function pieces() {
      var t = this.option,
          e = this._pieceList;
      f(t.pieces, function (t, i) {
        b(t) || (t = {
          value: t
        });
        var n = {
          text: "",
          index: i
        };

        if (null != t.label && (n.text = t.label), t.hasOwnProperty("value")) {
          var r = n.value = t.value;
          n.interval = [r, r], n.close = [1, 1];
        } else {
          for (var a = n.interval = [], o = n.close = [0, 0], s = [1, 0, 1], l = [-1 / 0, 1 / 0], h = [], u = 0; 2 > u; u++) {
            for (var c = [["gte", "gt", "min"], ["lte", "lt", "max"]][u], d = 0; 3 > d && null == a[u]; d++) {
              a[u] = t[c[d]], o[u] = s[d], h[u] = 2 === d;
            }

            null == a[u] && (a[u] = l[u]);
          }

          h[0] && 1 / 0 === a[1] && (o[0] = 0), h[1] && a[0] === -1 / 0 && (o[1] = 0), a[0] === a[1] && o[0] && o[1] && (n.value = a[0]);
        }

        n.visual = aw.retrieveVisuals(t), e.push(n);
      }, this), pd(t, e), Er(e), f(e, function (t) {
        var e = t.close,
            i = [["<", "≤"][e[1]], [">", "≥"][e[0]]];
        t.text = t.text || this.formatValueText(null != t.value ? t.value : t.interval, !1, i);
      }, this);
    }
  };

  bw.extend({
    type: "visualMap.piecewise",
    doRender: function doRender() {
      function t(t) {
        var r = t.piece,
            h = new pf();
        h.onclick = m(this._onItemClick, this, r), this._enableHoverLink(h, t.indexInModelPieceList);
        var u = i.getRepresentValue(r);

        if (this._createItemSymbol(h, u, [0, 0, l[0], l[1]]), c) {
          var d = this.visualMapModel.getValueState(u);
          h.add(new Mg({
            style: {
              x: "right" === s ? -n : l[0] + n,
              y: l[1] / 2,
              text: r.text,
              textVerticalAlign: "middle",
              textAlign: s,
              textFont: a,
              textFill: o,
              opacity: "outOfRange" === d ? .5 : 1
            }
          }));
        }

        e.add(h);
      }

      var e = this.group;
      e.removeAll();

      var i = this.visualMapModel,
          n = i.get("textGap"),
          r = i.textStyleModel,
          a = r.getFont(),
          o = r.getTextColor(),
          s = this._getItemAlign(),
          l = i.itemSize,
          h = this._getViewData(),
          u = h.endsText,
          c = D(i.get("showLabel", !0), !u);

      u && this._renderEndsText(e, u[0], l, c, s), f(h.viewPieceList, t, this), u && this._renderEndsText(e, u[1], l, c, s), fv(i.get("orient"), e, i.get("itemGap")), this.renderBackground(e), this.positionGroup(e);
    },
    _enableHoverLink: function _enableHoverLink(t, e) {
      function i(t) {
        var i = this.visualMapModel;
        i.option.hoverLink && this.api.dispatchAction({
          type: t,
          batch: sd(i.findTargetDataIndices(e))
        });
      }

      t.on("mouseover", m(i, this, "highlight")).on("mouseout", m(i, this, "downplay"));
    },
    _getItemAlign: function _getItemAlign() {
      var t = this.visualMapModel,
          e = t.option;
      if ("vertical" === e.orient) return od(t, this.api, t.itemSize);
      var i = e.align;
      return i && "auto" !== i || (i = "left"), i;
    },
    _renderEndsText: function _renderEndsText(t, e, i, n, r) {
      if (e) {
        var a = new pf(),
            o = this.visualMapModel.textStyleModel;
        a.add(new Mg({
          style: {
            x: n ? "right" === r ? i[0] : 0 : i[0] / 2,
            y: i[1] / 2,
            textVerticalAlign: "middle",
            textAlign: n ? r : "center",
            text: e,
            textFont: o.getFont(),
            textFill: o.getTextColor()
          }
        })), t.add(a);
      }
    },
    _getViewData: function _getViewData() {
      var t = this.visualMapModel,
          e = p(t.getPieceList(), function (t, e) {
        return {
          piece: t,
          indexInModelPieceList: e
        };
      }),
          i = t.get("text"),
          n = t.get("orient"),
          r = t.get("inverse");
      return ("horizontal" === n ? r : !r) ? e.reverse() : i && (i = i.slice().reverse()), {
        viewPieceList: e,
        endsText: i
      };
    },
    _createItemSymbol: function _createItemSymbol(t, e, i) {
      t.add(hh(this.getControllerVisual(e, "symbol"), i[0], i[1], i[2], i[3], this.getControllerVisual(e, "color")));
    },
    _onItemClick: function _onItemClick(t) {
      var e = this.visualMapModel,
          i = e.option,
          r = n(i.selected),
          a = e.getSelectedMapKey(t);
      "single" === i.selectedMode ? (r[a] = !0, f(r, function (t, e) {
        r[e] = e === a;
      })) : r[a] = !r[a], this.api.dispatchAction({
        type: "selectDataRange",
        from: this.uid,
        visualMapId: this.visualMapModel.id,
        selected: r
      });
    }
  }), ss(ew), t.version = Em, t.dependencies = zm, t.PRIORITY = Um, t.init = ts, t.connect = es, t.disConnect = is, t.disconnect = fy, t.dispose = ns, t.getInstanceByDom = rs, t.getInstanceById = as, t.registerTheme = os, t.registerPreprocessor = ss, t.registerProcessor = ls, t.registerPostUpdate = hs, t.registerAction = us, t.registerCoordinateSystem = cs, t.getCoordinateSystemDimensions = ds, t.registerLayout = fs, t.registerVisual = ps, t.registerLoading = vs, t.extendComponentModel = ms, t.extendComponentView = ys, t.extendSeriesModel = _s, t.extendChartView = xs, t.setCanvasCreator = ws, t.registerMap = bs, t.getMap = Ms, t.dataTool = py;
});

/***/ }),

/***/ "./js/statistics/statistics.js":
/*!*************************************!*\
  !*** ./js/statistics/statistics.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _translations_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../translations/config */ "./js/translations/config.js");
/* harmony import */ var _translations_javascript_en_GB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../translations/javascript/en-GB */ "./js/translations/javascript/en-GB.js");
/* harmony import */ var _translations_javascript_fr_FR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translations/javascript/fr-FR */ "./js/translations/javascript/fr-FR.js");
/* harmony import */ var _translator_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translator.min.js */ "./js/translator.min.js");
/* harmony import */ var _translator_min_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_translator_min_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _echarts_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./echarts.min */ "./js/statistics/echarts.min.js");
/* harmony import */ var _echarts_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_echarts_min__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






$(document).ready(function () {
  var $statisticHolder = document.querySelector('.statistics-holder');
  var isDarkMode = $statisticHolder.dataset.isDarkMode == 1 ? true : false;
  var themeMainHue = $statisticHolder.dataset.themeMainHue;
  var themeDarkHue = $statisticHolder.dataset.themeDarkHue;
  var themeLightHue = $statisticHolder.dataset.themeLightHue;
  var themeLightestHue = $statisticHolder.dataset.themeLightestHue;
  var monthDaysChartData = JSON.parse(document.querySelector('#month-days-chart').dataset.json);
  var hoursChartData = JSON.parse(document.querySelector('#hours-chart').dataset.json);
  var monthsChartData = JSON.parse(document.querySelector('#months-chart').dataset.json);
  var weekDaysChartData = JSON.parse(document.querySelector('#week-days-chart').dataset.json);
  var itemsEvolutionData = JSON.parse(document.querySelector('#items-evolution-chart').dataset.json);
  var calendarsData = JSON.parse(document.querySelector('#calendars').dataset.json);
  var treeJson = JSON.parse(document.querySelector('#radial-tree').dataset.json); // specify chart configuration item and data

  _echarts_min__WEBPACK_IMPORTED_MODULE_4___default.a.init(document.getElementById('month-days-chart')).setOption({
    tooltip: {
      formatter: function formatter(params) {
        return _translator_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.transChoice('statistics.items_added', params.value);
      }
    },
    color: [themeMainHue],
    xAxis: {
      type: 'category',
      data: monthDaysChartData.map(function (element) {
        return element.abscissa;
      }),
      axisLabel: {
        textStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisTick: {
        alignWithLabel: true,
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisLine: {
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      }
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: isDarkMode ? '#7d7f82' : '#ccc'
        }
      },
      axisLabel: {
        textStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisTick: {
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisLine: {
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      }
    },
    series: [{
      type: 'bar',
      data: monthDaysChartData.map(function (element) {
        return element.count;
      })
    }]
  });
  _echarts_min__WEBPACK_IMPORTED_MODULE_4___default.a.init(document.getElementById('hours-chart')).setOption({
    tooltip: {
      formatter: function formatter(params) {
        return _translator_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.transChoice('statistics.items_added', params.value);
      }
    },
    color: [themeMainHue],
    xAxis: {
      type: 'category',
      data: hoursChartData.map(function (element) {
        return element.abscissa;
      }),
      axisLabel: {
        textStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisTick: {
        alignWithLabel: true,
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisLine: {
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      }
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: isDarkMode ? '#7d7f82' : '#ccc'
        }
      },
      axisLabel: {
        textStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisTick: {
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisLine: {
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      }
    },
    series: [{
      type: 'bar',
      data: hoursChartData.map(function (element) {
        return element.count;
      })
    }]
  });
  _echarts_min__WEBPACK_IMPORTED_MODULE_4___default.a.init(document.getElementById('months-chart')).setOption({
    tooltip: {
      formatter: function formatter(params) {
        return _translator_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.transChoice('statistics.items_added', params.value);
      }
    },
    color: [themeMainHue],
    xAxis: {
      type: 'category',
      data: monthsChartData.map(function (element) {
        return element.abscissa;
      }),
      axisLabel: {
        textStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisTick: {
        alignWithLabel: true,
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisLine: {
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      }
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: isDarkMode ? '#7d7f82' : '#ccc'
        }
      },
      axisLabel: {
        textStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisTick: {
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisLine: {
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      }
    },
    series: [{
      type: 'bar',
      data: monthsChartData.map(function (element) {
        return element.count;
      })
    }]
  });
  _echarts_min__WEBPACK_IMPORTED_MODULE_4___default.a.init(document.getElementById('week-days-chart')).setOption({
    tooltip: {
      formatter: function formatter(params) {
        return _translator_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.transChoice('statistics.items_added', params.value);
      }
    },
    color: [themeMainHue],
    xAxis: {
      type: 'category',
      data: weekDaysChartData.map(function (element) {
        return element.abscissa;
      }),
      axisLabel: {
        textStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisTick: {
        alignWithLabel: true,
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisLine: {
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      }
    },
    splitLine: {
      lineStyle: {
        color: isDarkMode ? '#7d7f82' : '#ccc'
      }
    },
    yAxis: {
      axisLabel: {
        textStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisTick: {
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisLine: {
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      }
    },
    series: [{
      type: 'bar',
      data: weekDaysChartData.map(function (element) {
        return element.count;
      })
    }]
  });
  _echarts_min__WEBPACK_IMPORTED_MODULE_4___default.a.init(document.getElementById('items-evolution-chart')).setOption({
    tooltip: {
      trigger: 'axis',
      position: function position(params) {
        return [params[0], '10%'];
      },
      formatter: function formatter(params) {
        return params[0].axisValue + ': ' + _translator_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.transChoice('statistics.items', params[0].data);
      }
    },
    color: [themeMainHue],
    xAxis: {
      type: 'category',
      data: Object.keys(itemsEvolutionData),
      axisLabel: {
        textStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisTick: {
        alignWithLabel: true,
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisLine: {
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        textStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisTick: {
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      axisLine: {
        lineStyle: {
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      }
    },
    dataZoom: [{
      handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
      handleSize: '80%',
      handleStyle: {
        color: '#fff',
        shadowBlur: 3,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffsetX: 2,
        shadowOffsetY: 2
      }
    }],
    series: [{
      data: Object.values(itemsEvolutionData),
      type: 'line',
      smooth: true,
      symbol: 'none',
      sampling: 'average',
      areaStyle: {
        normal: {
          color: themeMainHue
        }
      }
    }]
  });
  var monthsLabel = [_translator_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.trans('global.months.january'), _translator_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.trans('global.months.february'), _translator_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.trans('global.months.march'), _translator_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.trans('global.months.april'), _translator_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.trans('global.months.may'), _translator_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.trans('global.months.june'), _translator_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.trans('global.months.july'), _translator_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.trans('global.months.august'), _translator_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.trans('global.months.september'), _translator_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.trans('global.months.october'), _translator_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.trans('global.months.november'), _translator_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.trans('global.months.december')];
  Object.entries(calendarsData).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        year = _ref2[0],
        yearData = _ref2[1];

    var data = [];
    Object.entries(yearData).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          index = _ref4[0],
          value = _ref4[1];

      data.push([value[0], "" + value[1]]);
    });
    _echarts_min__WEBPACK_IMPORTED_MODULE_4___default.a.init(document.getElementById('calendar_' + year)).setOption({
      tooltip: {
        formatter: function formatter(params) {
          return _translator_min_js__WEBPACK_IMPORTED_MODULE_3___default.a.transChoice('statistics.items_added', params.value[1]);
        }
      },
      visualMap: {
        type: 'piecewise',
        orient: 'horizontal',
        right: '215',
        bottom: 'bottom',
        pieces: [{
          min: 31,
          color: themeDarkHue
        }, {
          min: 16,
          max: 30,
          color: themeMainHue
        }, {
          min: 6,
          max: 15,
          color: themeLightHue
        }, {
          min: 1,
          max: 5,
          color: themeLightestHue
        }, {
          min: 0,
          max: 0,
          color: '#ededed'
        }]
      },
      calendar: {
        splitLine: {
          show: false
        },
        top: 'middle',
        left: 'center',
        range: year,
        cellSize: 20,
        yearLabel: {
          show: false
        },
        itemStyle: {
          normal: {
            borderWidth: 2,
            borderColor: isDarkMode ? '#36393e' : '#ffffff',
            color: isDarkMode ? '#7d7f82' : '#ededed'
          }
        },
        dayLabel: {
          show: false
        },
        monthLabel: {
          show: true,
          nameMap: monthsLabel,
          color: isDarkMode ? '#f0f0f0' : '#323233'
        }
      },
      series: [{
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 0,
        data: data
      }]
    });
  });
  _echarts_min__WEBPACK_IMPORTED_MODULE_4___default.a.init(document.getElementById('radial-tree')).setOption({
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [{
      type: 'tree',
      data: [treeJson],
      layout: 'radial',
      symbol: 'emptyCircle',
      symbolSize: 7,
      initialTreeDepth: -1,
      animationDurationUpdate: 750,
      itemStyle: {
        borderColor: themeMainHue
      },
      lineStyle: {
        color: isDarkMode ? '#4a4b4d' : '#ccc'
      },
      label: {
        color: isDarkMode ? '#a6a7a8' : '#555'
      }
    }]
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./js/translations/config.js":
/*!***********************************!*\
  !*** ./js/translations/config.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translator_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../translator.min.js */ "./js/translator.min.js");
/* harmony import */ var _translator_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_translator_min_js__WEBPACK_IMPORTED_MODULE_0__);


(function (t) {
  t.fallback = 'en-GB';
  t.defaultDomain = 'messages';
})(_translator_min_js__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./js/translations/javascript/en-GB.js":
/*!*********************************************!*\
  !*** ./js/translations/javascript/en-GB.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translator_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../translator.min.js */ "./js/translator.min.js");
/* harmony import */ var _translator_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_translator_min_js__WEBPACK_IMPORTED_MODULE_0__);


(function (t) {
  // en-GB
  t.add("global.months.january", "January", "javascript", "en-GB");
  t.add("global.months.february", "February", "javascript", "en-GB");
  t.add("global.months.march", "March", "javascript", "en-GB");
  t.add("global.months.april", "April", "javascript", "en-GB");
  t.add("global.months.may", "May", "javascript", "en-GB");
  t.add("global.months.june", "June", "javascript", "en-GB");
  t.add("global.months.july", "July", "javascript", "en-GB");
  t.add("global.months.august", "August", "javascript", "en-GB");
  t.add("global.months.september", "September", "javascript", "en-GB");
  t.add("global.months.october", "October", "javascript", "en-GB");
  t.add("global.months.november", "November", "javascript", "en-GB");
  t.add("global.months.december", "December", "javascript", "en-GB");
  t.add("global.days.monday", "Monday", "javascript", "en-GB");
  t.add("global.days.tuesday", "Tuesday", "javascript", "en-GB");
  t.add("global.days.wednesday", "Wednesday", "javascript", "en-GB");
  t.add("global.days.thursday", "Thursday", "javascript", "en-GB");
  t.add("global.days.friday", "Friday", "javascript", "en-GB");
  t.add("global.days.saturday", "Saturday", "javascript", "en-GB");
  t.add("global.days.sunday", "Sunday", "javascript", "en-GB");
  t.add("global.today", "Today", "javascript", "en-GB");
  t.add("btn.clear", "Clear", "javascript", "en-GB");
  t.add("btn.close", "Close", "javascript", "en-GB");
  t.add("statistics.items_added", "[0,1] %count% item added| ]1,Inf[ %count% items added", "javascript", "en-GB");
  t.add("statistics.users", "[0,1] %count% user| ]1,Inf[ %count% users", "javascript", "en-GB");
  t.add("statistics.items", "[0,1] %count% item| ]1,Inf[ %count% items", "javascript", "en-GB");
  t.add("select2.no_results", "No results found", "javascript", "en-GB");
  t.add("select2.searching", "Searching...", "javascript", "en-GB");
})(_translator_min_js__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./js/translations/javascript/fr-FR.js":
/*!*********************************************!*\
  !*** ./js/translations/javascript/fr-FR.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _translator_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../translator.min.js */ "./js/translator.min.js");
/* harmony import */ var _translator_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_translator_min_js__WEBPACK_IMPORTED_MODULE_0__);


(function (t) {
  // fr-FR
  t.add("global.months.january", "Janvier", "javascript", "fr-FR");
  t.add("global.months.february", "F\xE9vrier", "javascript", "fr-FR");
  t.add("global.months.march", "Mars", "javascript", "fr-FR");
  t.add("global.months.april", "Avril", "javascript", "fr-FR");
  t.add("global.months.may", "Mai", "javascript", "fr-FR");
  t.add("global.months.june", "Juin", "javascript", "fr-FR");
  t.add("global.months.july", "Juillet", "javascript", "fr-FR");
  t.add("global.months.august", "Ao\xFBt", "javascript", "fr-FR");
  t.add("global.months.september", "Septembre", "javascript", "fr-FR");
  t.add("global.months.october", "Octobre", "javascript", "fr-FR");
  t.add("global.months.november", "Novembre", "javascript", "fr-FR");
  t.add("global.months.december", "D\xE9cembre", "javascript", "fr-FR");
  t.add("global.days.monday", "Lundi", "javascript", "fr-FR");
  t.add("global.days.tuesday", "Mardi", "javascript", "fr-FR");
  t.add("global.days.wednesday", "Mercredi", "javascript", "fr-FR");
  t.add("global.days.thursday", "Jeudi", "javascript", "fr-FR");
  t.add("global.days.friday", "Vendredi", "javascript", "fr-FR");
  t.add("global.days.saturday", "Samedi", "javascript", "fr-FR");
  t.add("global.days.sunday", "Dimanche", "javascript", "fr-FR");
  t.add("global.today", "Aujourd'hui", "javascript", "fr-FR");
  t.add("btn.clear", "Effacer", "javascript", "fr-FR");
  t.add("btn.close", "Fermer", "javascript", "fr-FR");
  t.add("statistics.items_added", "[0,1] %count% objet ajout\xE9| ]1,Inf[ %count% objets ajout\xE9s", "javascript", "fr-FR");
  t.add("statistics.users", "[0,1] %count% utilisateur| ]1,Inf[ %count% utilisateurs", "javascript", "fr-FR");
  t.add("statistics.items", "[0,1] %count% objet| ]1,Inf[ %count% objets", "javascript", "fr-FR");
  t.add("select2.no_results", "Aucun r\xE9sultat trouv\xE9", "javascript", "fr-FR");
  t.add("select2.searching", "Recherche en cours...", "javascript", "fr-FR");
})(_translator_min_js__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./js/translator.min.js":
/*!******************************!*\
  !*** ./js/translator.min.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @author William DURAND <william.durand1@gmail.com>
 * @license MIT Licensed
 */
!function (e, a) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function e(e, a) {
    var s,
        n = p.placeHolderPrefix,
        c = p.placeHolderSuffix;

    for (s in a) {
      var r = new RegExp(n + s + c, "g");

      if (r.test(e)) {
        var t = String(a[s]).replace(new RegExp("\\$", "g"), "$$$$");
        e = e.replace(r, t);
      }
    }

    return e;
  }

  function a(e, a, n, c, r) {
    var t = n || c || r,
        i = a,
        u = t.split("_")[0];
    if (!(t in l)) if (u in l) t = u;else {
      if (!(r in l)) return e;
      t = r;
    }
    if (void 0 === i || null === i) for (var o = 0; o < f.length; o++) {
      if (s(t, f[o], e) || s(u, f[o], e) || s(r, f[o], e)) {
        i = f[o];
        break;
      }
    }
    if (s(t, i, e)) return l[t][i][e];

    for (var h, d, p, m; t.length > 2 && (h = t.length, d = t.split(/[\s_]+/), p = d[d.length - 1], m = p.length, 1 !== d.length);) {
      if (t = t.substring(0, h - (m + 1)), s(t, i, e)) return l[t][i][e];
    }

    return s(r, i, e) ? l[r][i][e] : e;
  }

  function s(e, a, s) {
    return e in l && a in l[e] && s in l[e][a];
  }

  function n(e, a, s) {
    var n,
        t,
        i = [],
        l = [],
        u = e.split(p.pluralSeparator),
        f = [];

    for (n = 0; n < u.length; n++) {
      var m = u[n];
      h.test(m) ? (f = m.match(h), i[f[0]] = f[f.length - 1]) : o.test(m) ? (f = m.match(o), l.push(f[1])) : l.push(m);
    }

    for (t in i) {
      if (d.test(t)) if (f = t.match(d), f[1]) {
        var g,
            v = f[2].split(",");

        for (g in v) {
          if (a == v[g]) return i[t];
        }
      } else {
        var b = c(f[4]),
            k = c(f[5]);
        if (("[" === f[3] ? a >= b : a > b) && ("]" === f[6] ? a <= k : a < k)) return i[t];
      }
    }

    return l[r(a, s)] || l[0] || void 0;
  }

  function c(e) {
    return "-Inf" === e ? Number.NEGATIVE_INFINITY : "+Inf" === e || "Inf" === e ? Number.POSITIVE_INFINITY : parseInt(e, 10);
  }

  function r(e, a) {
    var s = a;

    switch ("pt_BR" === s && (s = "xbr"), s.length > 3 && (s = s.split("_")[0]), s) {
      case "bo":
      case "dz":
      case "id":
      case "ja":
      case "jv":
      case "ka":
      case "km":
      case "kn":
      case "ko":
      case "ms":
      case "th":
      case "tr":
      case "vi":
      case "zh":
        return 0;

      case "af":
      case "az":
      case "bn":
      case "bg":
      case "ca":
      case "da":
      case "de":
      case "el":
      case "en":
      case "eo":
      case "es":
      case "et":
      case "eu":
      case "fa":
      case "fi":
      case "fo":
      case "fur":
      case "fy":
      case "gl":
      case "gu":
      case "ha":
      case "he":
      case "hu":
      case "is":
      case "it":
      case "ku":
      case "lb":
      case "ml":
      case "mn":
      case "mr":
      case "nah":
      case "nb":
      case "ne":
      case "nl":
      case "nn":
      case "no":
      case "om":
      case "or":
      case "pa":
      case "pap":
      case "ps":
      case "pt":
      case "so":
      case "sq":
      case "sv":
      case "sw":
      case "ta":
      case "te":
      case "tk":
      case "ur":
      case "zu":
        return 1 == e ? 0 : 1;

      case "am":
      case "bh":
      case "fil":
      case "fr":
      case "gun":
      case "hi":
      case "ln":
      case "mg":
      case "nso":
      case "xbr":
      case "ti":
      case "wa":
        return 0 === e || 1 == e ? 0 : 1;

      case "be":
      case "bs":
      case "hr":
      case "ru":
      case "sr":
      case "uk":
        return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;

      case "cs":
      case "sk":
        return 1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2;

      case "ga":
        return 1 == e ? 0 : 2 == e ? 1 : 2;

      case "lt":
        return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;

      case "sl":
        return e % 100 == 1 ? 0 : e % 100 == 2 ? 1 : e % 100 == 3 || e % 100 == 4 ? 2 : 3;

      case "mk":
        return e % 10 == 1 ? 0 : 1;

      case "mt":
        return 1 == e ? 0 : 0 === e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;

      case "lv":
        return 0 === e ? 0 : e % 10 == 1 && e % 100 != 11 ? 1 : 2;

      case "pl":
        return 1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 12 || e % 100 > 14) ? 1 : 2;

      case "cy":
        return 1 == e ? 0 : 2 == e ? 1 : 8 == e || 11 == e ? 2 : 3;

      case "ro":
        return 1 == e ? 0 : 0 === e || e % 100 > 0 && e % 100 < 20 ? 1 : 2;

      case "ar":
        return 0 === e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e >= 3 && e <= 10 ? 3 : e >= 11 && e <= 99 ? 4 : 5;

      default:
        return 0;
    }
  }

  function t(e, a) {
    for (var s = 0; s < e.length; s++) {
      if (a === e[s]) return !0;
    }

    return !1;
  }

  function i() {
    return "undefined" != typeof document ? document.documentElement.lang.replace("-", "_") : u;
  }

  var l = {},
      u = "en",
      f = [],
      o = new RegExp(/^\w+\: +(.+)$/),
      h = new RegExp(/^\s*((\{\s*(\-?\d+[\s*,\s*\-?\d+]*)\s*\})|([\[\]])\s*(-Inf|\-?\d+)\s*,\s*(\+?Inf|\-?\d+)\s*([\[\]]))\s?(.+?)$/),
      d = new RegExp(/^\s*(\{\s*(\-?\d+[\s*,\s*\-?\d+]*)\s*\})|([\[\]])\s*(-Inf|\-?\d+)\s*,\s*(\+?Inf|\-?\d+)\s*([\[\]])/),
      p = {
    locale: i(),
    fallback: u,
    placeHolderPrefix: "%",
    placeHolderSuffix: "%",
    defaultDomain: "messages",
    pluralSeparator: "|",
    add: function add(e, a, s, n) {
      var c = n || this.locale || this.fallback,
          r = s || this.defaultDomain;
      return l[c] || (l[c] = {}), l[c][r] || (l[c][r] = {}), l[c][r][e] = a, !1 === t(f, r) && f.push(r), this;
    },
    trans: function trans(s, n, c, r) {
      return e(a(s, c, r, this.locale, this.fallback), n || {});
    },
    transChoice: function transChoice(s, c, r, t, i) {
      var l = a(s, t, i, this.locale, this.fallback),
          u = parseInt(c, 10);
      return r = r || {}, void 0 === r.count && (r.count = c), void 0 === l || isNaN(u) || (l = n(l, u, i || this.locale || this.fallback)), e(l, r);
    },
    fromJSON: function fromJSON(e) {
      if ("string" == typeof e && (e = JSON.parse(e)), e.locale && (this.locale = e.locale), e.fallback && (this.fallback = e.fallback), e.defaultDomain && (this.defaultDomain = e.defaultDomain), e.translations) for (var a in e.translations) {
        for (var s in e.translations[a]) {
          for (var n in e.translations[a][s]) {
            this.add(n, e.translations[a][s][n], s, a);
          }
        }
      }
      return this;
    },
    reset: function reset() {
      l = {}, f = [], this.locale = i();
    }
  };
  return p;
});

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ })

/******/ });