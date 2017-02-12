! function t(e, n, o) {
  function i(s, u) {
    if (!n[s]) {
      if (!e[s]) {
        var a = "function" == typeof require && require;
        if (!u && a) return a(s, !0);
        if (r) return r(s, !0);
        var c = new Error("Cannot find module '" + s + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      var h = n[s] = {
        exports: {}
      };
      e[s][0].call(h.exports, function(t) {
        var n = e[s][1][t];
        return i(n ? n : t)
      }, h, h.exports, t, e, n, o)
    }
    return n[s].exports
  }
  for (var r = "function" == typeof require && require, s = 0; s < o.length; s++) i(o[s]);
  return i
}({
  1: [function(t, e, n) {
    ! function(t, n, o, i) {
      "use strict";

      function r(t, e, n) {
        return setTimeout(h(t, n), e)
      }

      function s(t, e, n) {
        return !!Array.isArray(t) && (u(t, n[e], n), !0)
      }

      function u(t, e, n) {
        var o;
        if (t)
          if (t.forEach) t.forEach(e, n);
          else if (t.length !== i)
          for (o = 0; o < t.length;) e.call(n, t[o], o, t), o++;
        else
          for (o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t)
      }

      function a(e, n, o) {
        var i = "DEPRECATED METHOD: " + n + "\n" + o + " AT \n";
        return function() {
          var n = new Error("get-stack-trace"),
            o = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
            r = t.console && (t.console.warn || t.console.log);
          return r && r.call(t.console, i, o), e.apply(this, arguments)
        }
      }

      function c(t, e, n) {
        var o, i = e.prototype;
        o = t.prototype = Object.create(i), o.constructor = t, o._super = i, n && pt(o, n)
      }

      function h(t, e) {
        return function() {
          return t.apply(e, arguments)
        }
      }

      function l(t, e) {
        return typeof t == ft ? t.apply(e ? e[0] || i : i, e) : t
      }

      function p(t, e) {
        return t === i ? e : t
      }

      function d(t, e, n) {
        u(v(e), function(e) {
          t.addEventListener(e, n, !1)
        })
      }

      function m(t, e, n) {
        u(v(e), function(e) {
          t.removeEventListener(e, n, !1)
        })
      }

      function f(t, e) {
        for (; t;) {
          if (t == e) return !0;
          t = t.parentNode
        }
        return !1
      }

      function _(t, e) {
        return t.indexOf(e) > -1
      }

      function v(t) {
        return t.trim().split(/\s+/g)
      }

      function y(t, e, n) {
        if (t.indexOf && !n) return t.indexOf(e);
        for (var o = 0; o < t.length;) {
          if (n && t[o][n] == e || !n && t[o] === e) return o;
          o++
        }
        return -1
      }

      function b(t) {
        return Array.prototype.slice.call(t, 0)
      }

      function g(t, e, n) {
        for (var o = [], i = [], r = 0; r < t.length;) {
          var s = e ? t[r][e] : t[r];
          y(i, s) < 0 && o.push(t[r]), i[r] = s, r++
        }
        return n && (o = e ? o.sort(function(t, n) {
          return t[e] > n[e]
        }) : o.sort()), o
      }

      function w(t, e) {
        for (var n, o, r = e[0].toUpperCase() + e.slice(1), s = 0; s < dt.length;) {
          if (n = dt[s], o = n ? n + r : e, o in t) return o;
          s++
        }
        return i
      }

      function T() {
        return wt++
      }

      function x(e) {
        var n = e.ownerDocument || e;
        return n.defaultView || n.parentWindow || t
      }

      function E(t, e) {
        var n = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
          l(t.options.enable, [t]) && n.handler(e)
        }, this.init()
      }

      function S(t) {
        var e, n = t.options.inputClass;
        return new(e = n ? n : Et ? k : St ? U : xt ? V : O)(t, I)
      }

      function I(t, e, n) {
        var o = n.pointers.length,
          i = n.changedPointers.length,
          r = e & Rt && o - i === 0,
          s = e & (Ct | Lt) && o - i === 0;
        n.isFirst = !!r, n.isFinal = !!s, r && (t.session = {}), n.eventType = e, A(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
      }

      function A(t, e) {
        var n = t.session,
          o = e.pointers,
          i = o.length;
        n.firstInput || (n.firstInput = j(e)), i > 1 && !n.firstMultiple ? n.firstMultiple = j(e) : 1 === i && (n.firstMultiple = !1);
        var r = n.firstInput,
          s = n.firstMultiple,
          u = s ? s.center : r.center,
          a = e.center = R(o);
        e.timeStamp = yt(), e.deltaTime = e.timeStamp - r.timeStamp, e.angle = H(u, a), e.distance = L(u, a), P(n, e), e.offsetDirection = C(e.deltaX, e.deltaY);
        var c = N(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = c.x, e.overallVelocityY = c.y, e.overallVelocity = vt(c.x) > vt(c.y) ? c.x : c.y, e.scale = s ? z(s.pointers, o) : 1, e.rotation = s ? q(s.pointers, o) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length, D(n, e);
        var h = t.element;
        f(e.srcEvent.target, h) && (h = e.srcEvent.target), e.target = h
      }

      function P(t, e) {
        var n = e.center,
          o = t.offsetDelta || {},
          i = t.prevDelta || {},
          r = t.prevInput || {};
        e.eventType !== Rt && r.eventType !== Ct || (i = t.prevDelta = {
          x: r.deltaX || 0,
          y: r.deltaY || 0
        }, o = t.offsetDelta = {
          x: n.x,
          y: n.y
        }), e.deltaX = i.x + (n.x - o.x), e.deltaY = i.y + (n.y - o.y)
      }

      function D(t, e) {
        var n, o, r, s, u = t.lastInterval || e,
          a = e.timeStamp - u.timeStamp;
        if (e.eventType != Lt && (a > jt || u.velocity === i)) {
          var c = e.deltaX - u.deltaX,
            h = e.deltaY - u.deltaY,
            l = N(a, c, h);
          o = l.x, r = l.y, n = vt(l.x) > vt(l.y) ? l.x : l.y, s = C(c, h), t.lastInterval = e
        } else n = u.velocity, o = u.velocityX, r = u.velocityY, s = u.direction;
        e.velocity = n, e.velocityX = o, e.velocityY = r, e.direction = s
      }

      function j(t) {
        for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
          clientX: _t(t.pointers[n].clientX),
          clientY: _t(t.pointers[n].clientY)
        }, n++;
        return {
          timeStamp: yt(),
          pointers: e,
          center: R(e),
          deltaX: t.deltaX,
          deltaY: t.deltaY
        }
      }

      function R(t) {
        var e = t.length;
        if (1 === e) return {
          x: _t(t[0].clientX),
          y: _t(t[0].clientY)
        };
        for (var n = 0, o = 0, i = 0; i < e;) n += t[i].clientX, o += t[i].clientY, i++;
        return {
          x: _t(n / e),
          y: _t(o / e)
        }
      }

      function N(t, e, n) {
        return {
          x: e / t || 0,
          y: n / t || 0
        }
      }

      function C(t, e) {
        return t === e ? Ht : vt(t) >= vt(e) ? t < 0 ? qt : zt : e < 0 ? Ot : kt
      }

      function L(t, e, n) {
        n || (n = Bt);
        var o = e[n[0]] - t[n[0]],
          i = e[n[1]] - t[n[1]];
        return Math.sqrt(o * o + i * i)
      }

      function H(t, e, n) {
        n || (n = Bt);
        var o = e[n[0]] - t[n[0]],
          i = e[n[1]] - t[n[1]];
        return 180 * Math.atan2(i, o) / Math.PI
      }

      function q(t, e) {
        return H(e[1], e[0], Vt) + H(t[1], t[0], Vt)
      }

      function z(t, e) {
        return L(e[0], e[1], Vt) / L(t[0], t[1], Vt)
      }

      function O() {
        this.evEl = Wt, this.evWin = Yt, this.pressed = !1, E.apply(this, arguments)
      }

      function k() {
        this.evEl = Kt, this.evWin = Zt, E.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
      }

      function M() {
        this.evTarget = Qt, this.evWin = te, this.started = !1, E.apply(this, arguments)
      }

      function F(t, e) {
        var n = b(t.touches),
          o = b(t.changedTouches);
        return e & (Ct | Lt) && (n = g(n.concat(o), "identifier", !0)), [n, o]
      }

      function U() {
        this.evTarget = ne, this.targetIds = {}, E.apply(this, arguments)
      }

      function B(t, e) {
        var n = b(t.touches),
          o = this.targetIds;
        if (e & (Rt | Nt) && 1 === n.length) return o[n[0].identifier] = !0, [n, n];
        var i, r, s = b(t.changedTouches),
          u = [],
          a = this.target;
        if (r = n.filter(function(t) {
            return f(t.target, a)
          }), e === Rt)
          for (i = 0; i < r.length;) o[r[i].identifier] = !0, i++;
        for (i = 0; i < s.length;) o[s[i].identifier] && u.push(s[i]), e & (Ct | Lt) && delete o[s[i].identifier], i++;
        return u.length ? [g(r.concat(u), "identifier", !0), u] : void 0
      }

      function V() {
        E.apply(this, arguments);
        var t = h(this.handler, this);
        this.touch = new U(this.manager, t), this.mouse = new O(this.manager, t), this.primaryTouch = null, this.lastTouches = []
      }

      function G(t, e) {
        t & Rt ? (this.primaryTouch = e.changedPointers[0].identifier, W.call(this, e)) : t & (Ct | Lt) && W.call(this, e)
      }

      function W(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
          var n = {
            x: e.clientX,
            y: e.clientY
          };
          this.lastTouches.push(n);
          var o = this.lastTouches,
            i = function() {
              var t = o.indexOf(n);
              t > -1 && o.splice(t, 1)
            };
          setTimeout(i, oe)
        }
      }

      function Y(t) {
        for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, o = 0; o < this.lastTouches.length; o++) {
          var i = this.lastTouches[o],
            r = Math.abs(e - i.x),
            s = Math.abs(n - i.y);
          if (r <= ie && s <= ie) return !0
        }
        return !1
      }

      function X(t, e) {
        this.manager = t, this.set(e)
      }

      function J(t) {
        if (_(t, he)) return he;
        var e = _(t, le),
          n = _(t, pe);
        return e && n ? he : e || n ? e ? le : pe : _(t, ce) ? ce : ae
      }

      function K() {
        if (!se) return !1;
        var e = {},
          n = t.CSS && t.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(o) {
          e[o] = !n || t.CSS.supports("touch-action", o)
        }), e
      }

      function Z(t) {
        this.options = pt({}, this.defaults, t || {}), this.id = T(), this.manager = null, this.options.enable = p(this.options.enable, !0), this.state = me, this.simultaneous = {}, this.requireFail = []
      }

      function $(t) {
        return t & be ? "cancel" : t & ve ? "end" : t & _e ? "move" : t & fe ? "start" : ""
      }

      function Q(t) {
        return t == kt ? "down" : t == Ot ? "up" : t == qt ? "left" : t == zt ? "right" : ""
      }

      function tt(t, e) {
        var n = e.manager;
        return n ? n.get(t) : t
      }

      function et() {
        Z.apply(this, arguments)
      }

      function nt() {
        et.apply(this, arguments), this.pX = null, this.pY = null
      }

      function ot() {
        et.apply(this, arguments)
      }

      function it() {
        Z.apply(this, arguments), this._timer = null, this._input = null
      }

      function rt() {
        et.apply(this, arguments)
      }

      function st() {
        et.apply(this, arguments)
      }

      function ut() {
        Z.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
      }

      function at(t, e) {
        return e = e || {}, e.recognizers = p(e.recognizers, at.defaults.preset), new ct(t, e)
      }

      function ct(t, e) {
        this.options = pt({}, at.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = S(this), this.touchAction = new X(this, this.options.touchAction), ht(this, !0), u(this.options.recognizers, function(t) {
          var e = this.add(new t[0](t[1]));
          t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
        }, this)
      }

      function ht(t, e) {
        var n = t.element;
        if (n.style) {
          var o;
          u(t.options.cssProps, function(i, r) {
            o = w(n.style, r), e ? (t.oldCssProps[o] = n.style[o], n.style[o] = i) : n.style[o] = t.oldCssProps[o] || ""
          }), e || (t.oldCssProps = {})
        }
      }

      function lt(t, e) {
        var o = n.createEvent("Event");
        o.initEvent(t, !0, !0), o.gesture = e, e.target.dispatchEvent(o)
      }
      var pt, dt = ["", "webkit", "Moz", "MS", "ms", "o"],
        mt = n.createElement("div"),
        ft = "function",
        _t = Math.round,
        vt = Math.abs,
        yt = Date.now;
      pt = "function" != typeof Object.assign ? function(t) {
        if (t === i || null === t) throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          if (o !== i && null !== o)
            for (var r in o) o.hasOwnProperty(r) && (e[r] = o[r])
        }
        return e
      } : Object.assign;
      var bt = a(function(t, e, n) {
          for (var o = Object.keys(e), r = 0; r < o.length;)(!n || n && t[o[r]] === i) && (t[o[r]] = e[o[r]]), r++;
          return t
        }, "extend", "Use `assign`."),
        gt = a(function(t, e) {
          return bt(t, e, !0)
        }, "merge", "Use `assign`."),
        wt = 1,
        Tt = /mobile|tablet|ip(ad|hone|od)|android/i,
        xt = "ontouchstart" in t,
        Et = w(t, "PointerEvent") !== i,
        St = xt && Tt.test(navigator.userAgent),
        It = "touch",
        At = "pen",
        Pt = "mouse",
        Dt = "kinect",
        jt = 25,
        Rt = 1,
        Nt = 2,
        Ct = 4,
        Lt = 8,
        Ht = 1,
        qt = 2,
        zt = 4,
        Ot = 8,
        kt = 16,
        Mt = qt | zt,
        Ft = Ot | kt,
        Ut = Mt | Ft,
        Bt = ["x", "y"],
        Vt = ["clientX", "clientY"];
      E.prototype = {
        handler: function() {},
        init: function() {
          this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(x(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
          this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(x(this.element), this.evWin, this.domHandler)
        }
      };
      var Gt = {
          mousedown: Rt,
          mousemove: Nt,
          mouseup: Ct
        },
        Wt = "mousedown",
        Yt = "mousemove mouseup";
      c(O, E, {
        handler: function(t) {
          var e = Gt[t.type];
          e & Rt && 0 === t.button && (this.pressed = !0), e & Nt && 1 !== t.which && (e = Ct), this.pressed && (e & Ct && (this.pressed = !1), this.callback(this.manager, e, {
            pointers: [t],
            changedPointers: [t],
            pointerType: Pt,
            srcEvent: t
          }))
        }
      });
      var Xt = {
          pointerdown: Rt,
          pointermove: Nt,
          pointerup: Ct,
          pointercancel: Lt,
          pointerout: Lt
        },
        Jt = {
          2: It,
          3: At,
          4: Pt,
          5: Dt
        },
        Kt = "pointerdown",
        Zt = "pointermove pointerup pointercancel";
      t.MSPointerEvent && !t.PointerEvent && (Kt = "MSPointerDown", Zt = "MSPointerMove MSPointerUp MSPointerCancel"), c(k, E, {
        handler: function(t) {
          var e = this.store,
            n = !1,
            o = t.type.toLowerCase().replace("ms", ""),
            i = Xt[o],
            r = Jt[t.pointerType] || t.pointerType,
            s = r == It,
            u = y(e, t.pointerId, "pointerId");
          i & Rt && (0 === t.button || s) ? u < 0 && (e.push(t), u = e.length - 1) : i & (Ct | Lt) && (n = !0), u < 0 || (e[u] = t, this.callback(this.manager, i, {
            pointers: e,
            changedPointers: [t],
            pointerType: r,
            srcEvent: t
          }), n && e.splice(u, 1))
        }
      });
      var $t = {
          touchstart: Rt,
          touchmove: Nt,
          touchend: Ct,
          touchcancel: Lt
        },
        Qt = "touchstart",
        te = "touchstart touchmove touchend touchcancel";
      c(M, E, {
        handler: function(t) {
          var e = $t[t.type];
          if (e === Rt && (this.started = !0), this.started) {
            var n = F.call(this, t, e);
            e & (Ct | Lt) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
              pointers: n[0],
              changedPointers: n[1],
              pointerType: It,
              srcEvent: t
            })
          }
        }
      });
      var ee = {
          touchstart: Rt,
          touchmove: Nt,
          touchend: Ct,
          touchcancel: Lt
        },
        ne = "touchstart touchmove touchend touchcancel";
      c(U, E, {
        handler: function(t) {
          var e = ee[t.type],
            n = B.call(this, t, e);
          n && this.callback(this.manager, e, {
            pointers: n[0],
            changedPointers: n[1],
            pointerType: It,
            srcEvent: t
          })
        }
      });
      var oe = 2500,
        ie = 25;
      c(V, E, {
        handler: function(t, e, n) {
          var o = n.pointerType == It,
            i = n.pointerType == Pt;
          if (!(i && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
            if (o) G.call(this, e, n);
            else if (i && Y.call(this, n)) return;
            this.callback(t, e, n)
          }
        },
        destroy: function() {
          this.touch.destroy(), this.mouse.destroy()
        }
      });
      var re = w(mt.style, "touchAction"),
        se = re !== i,
        ue = "compute",
        ae = "auto",
        ce = "manipulation",
        he = "none",
        le = "pan-x",
        pe = "pan-y",
        de = K();
      X.prototype = {
        set: function(t) {
          t == ue && (t = this.compute()), se && this.manager.element.style && de[t] && (this.manager.element.style[re] = t), this.actions = t.toLowerCase().trim()
        },
        update: function() {
          this.set(this.manager.options.touchAction)
        },
        compute: function() {
          var t = [];
          return u(this.manager.recognizers, function(e) {
            l(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
          }), J(t.join(" "))
        },
        preventDefaults: function(t) {
          var e = t.srcEvent,
            n = t.offsetDirection;
          if (this.manager.session.prevented) return void e.preventDefault();
          var o = this.actions,
            i = _(o, he) && !de[he],
            r = _(o, pe) && !de[pe],
            s = _(o, le) && !de[le];
          if (i) {
            var u = 1 === t.pointers.length,
              a = t.distance < 2,
              c = t.deltaTime < 250;
            if (u && a && c) return
          }
          return s && r ? void 0 : i || r && n & Mt || s && n & Ft ? this.preventSrc(e) : void 0
        },
        preventSrc: function(t) {
          this.manager.session.prevented = !0, t.preventDefault()
        }
      };
      var me = 1,
        fe = 2,
        _e = 4,
        ve = 8,
        ye = ve,
        be = 16,
        ge = 32;
      Z.prototype = {
        defaults: {},
        set: function(t) {
          return pt(this.options, t), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(t) {
          if (s(t, "recognizeWith", this)) return this;
          var e = this.simultaneous;
          return t = tt(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
        },
        dropRecognizeWith: function(t) {
          return s(t, "dropRecognizeWith", this) ? this : (t = tt(t, this), delete this.simultaneous[t.id], this)
        },
        requireFailure: function(t) {
          if (s(t, "requireFailure", this)) return this;
          var e = this.requireFail;
          return t = tt(t, this), y(e, t) === -1 && (e.push(t), t.requireFailure(this)), this
        },
        dropRequireFailure: function(t) {
          if (s(t, "dropRequireFailure", this)) return this;
          t = tt(t, this);
          var e = y(this.requireFail, t);
          return e > -1 && this.requireFail.splice(e, 1), this
        },
        hasRequireFailures: function() {
          return this.requireFail.length > 0
        },
        canRecognizeWith: function(t) {
          return !!this.simultaneous[t.id]
        },
        emit: function(t) {
          function e(e) {
            n.manager.emit(e, t)
          }
          var n = this,
            o = this.state;
          o < ve && e(n.options.event + $(o)), e(n.options.event), t.additionalEvent && e(t.additionalEvent), o >= ve && e(n.options.event + $(o))
        },
        tryEmit: function(t) {
          return this.canEmit() ? this.emit(t) : void(this.state = ge)
        },
        canEmit: function() {
          for (var t = 0; t < this.requireFail.length;) {
            if (!(this.requireFail[t].state & (ge | me))) return !1;
            t++
          }
          return !0
        },
        recognize: function(t) {
          var e = pt({}, t);
          return l(this.options.enable, [this, e]) ? (this.state & (ye | be | ge) && (this.state = me), this.state = this.process(e), void(this.state & (fe | _e | ve | be) && this.tryEmit(e))) : (this.reset(), void(this.state = ge))
        },
        process: function(t) {},
        getTouchAction: function() {},
        reset: function() {}
      }, c(et, Z, {
        defaults: {
          pointers: 1
        },
        attrTest: function(t) {
          var e = this.options.pointers;
          return 0 === e || t.pointers.length === e
        },
        process: function(t) {
          var e = this.state,
            n = t.eventType,
            o = e & (fe | _e),
            i = this.attrTest(t);
          return o && (n & Lt || !i) ? e | be : o || i ? n & Ct ? e | ve : e & fe ? e | _e : fe : ge
        }
      }), c(nt, et, {
        defaults: {
          event: "pan",
          threshold: 10,
          pointers: 1,
          direction: Ut
        },
        getTouchAction: function() {
          var t = this.options.direction,
            e = [];
          return t & Mt && e.push(pe), t & Ft && e.push(le), e
        },
        directionTest: function(t) {
          var e = this.options,
            n = !0,
            o = t.distance,
            i = t.direction,
            r = t.deltaX,
            s = t.deltaY;
          return i & e.direction || (e.direction & Mt ? (i = 0 === r ? Ht : r < 0 ? qt : zt, n = r != this.pX, o = Math.abs(t.deltaX)) : (i = 0 === s ? Ht : s < 0 ? Ot : kt, n = s != this.pY, o = Math.abs(t.deltaY))), t.direction = i, n && o > e.threshold && i & e.direction
        },
        attrTest: function(t) {
          return et.prototype.attrTest.call(this, t) && (this.state & fe || !(this.state & fe) && this.directionTest(t))
        },
        emit: function(t) {
          this.pX = t.deltaX, this.pY = t.deltaY;
          var e = Q(t.direction);
          e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
        }
      }), c(ot, et, {
        defaults: {
          event: "pinch",
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function() {
          return [he]
        },
        attrTest: function(t) {
          return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & fe)
        },
        emit: function(t) {
          if (1 !== t.scale) {
            var e = t.scale < 1 ? "in" : "out";
            t.additionalEvent = this.options.event + e
          }
          this._super.emit.call(this, t)
        }
      }), c(it, Z, {
        defaults: {
          event: "press",
          pointers: 1,
          time: 251,
          threshold: 9
        },
        getTouchAction: function() {
          return [ae]
        },
        process: function(t) {
          var e = this.options,
            n = t.pointers.length === e.pointers,
            o = t.distance < e.threshold,
            i = t.deltaTime > e.time;
          if (this._input = t, !o || !n || t.eventType & (Ct | Lt) && !i) this.reset();
          else if (t.eventType & Rt) this.reset(), this._timer = r(function() {
            this.state = ye, this.tryEmit()
          }, e.time, this);
          else if (t.eventType & Ct) return ye;
          return ge
        },
        reset: function() {
          clearTimeout(this._timer)
        },
        emit: function(t) {
          this.state === ye && (t && t.eventType & Ct ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = yt(), this.manager.emit(this.options.event, this._input)))
        }
      }), c(rt, et, {
        defaults: {
          event: "rotate",
          threshold: 0,
          pointers: 2
        },
        getTouchAction: function() {
          return [he]
        },
        attrTest: function(t) {
          return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & fe)
        }
      }), c(st, et, {
        defaults: {
          event: "swipe",
          threshold: 10,
          velocity: .3,
          direction: Mt | Ft,
          pointers: 1
        },
        getTouchAction: function() {
          return nt.prototype.getTouchAction.call(this)
        },
        attrTest: function(t) {
          var e, n = this.options.direction;
          return n & (Mt | Ft) ? e = t.overallVelocity : n & Mt ? e = t.overallVelocityX : n & Ft && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && vt(e) > this.options.velocity && t.eventType & Ct
        },
        emit: function(t) {
          var e = Q(t.offsetDirection);
          e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
        }
      }), c(ut, Z, {
        defaults: {
          event: "tap",
          pointers: 1,
          taps: 1,
          interval: 300,
          time: 250,
          threshold: 9,
          posThreshold: 10
        },
        getTouchAction: function() {
          return [ce]
        },
        process: function(t) {
          var e = this.options,
            n = t.pointers.length === e.pointers,
            o = t.distance < e.threshold,
            i = t.deltaTime < e.time;
          if (this.reset(), t.eventType & Rt && 0 === this.count) return this.failTimeout();
          if (o && i && n) {
            if (t.eventType != Ct) return this.failTimeout();
            var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
              u = !this.pCenter || L(this.pCenter, t.center) < e.posThreshold;
            this.pTime = t.timeStamp, this.pCenter = t.center, u && s ? this.count += 1 : this.count = 1, this._input = t;
            var a = this.count % e.taps;
            if (0 === a) return this.hasRequireFailures() ? (this._timer = r(function() {
              this.state = ye, this.tryEmit()
            }, e.interval, this), fe) : ye
          }
          return ge
        },
        failTimeout: function() {
          return this._timer = r(function() {
            this.state = ge
          }, this.options.interval, this), ge
        },
        reset: function() {
          clearTimeout(this._timer)
        },
        emit: function() {
          this.state == ye && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
      }), at.VERSION = "2.0.7", at.defaults = {
        domEvents: !1,
        touchAction: ue,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
          [rt, {
            enable: !1
          }],
          [ot, {
              enable: !1
            },
            ["rotate"]
          ],
          [st, {
            direction: Mt
          }],
          [nt, {
              direction: Mt
            },
            ["swipe"]
          ],
          [ut],
          [ut, {
              event: "doubletap",
              taps: 2
            },
            ["tap"]
          ],
          [it]
        ],
        cssProps: {
          userSelect: "none",
          touchSelect: "none",
          touchCallout: "none",
          contentZooming: "none",
          userDrag: "none",
          tapHighlightColor: "rgba(0,0,0,0)"
        }
      };
      var we = 1,
        Te = 2;
      ct.prototype = {
        set: function(t) {
          return pt(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
        },
        stop: function(t) {
          this.session.stopped = t ? Te : we
        },
        recognize: function(t) {
          var e = this.session;
          if (!e.stopped) {
            this.touchAction.preventDefaults(t);
            var n, o = this.recognizers,
              i = e.curRecognizer;
            (!i || i && i.state & ye) && (i = e.curRecognizer = null);
            for (var r = 0; r < o.length;) n = o[r], e.stopped === Te || i && n != i && !n.canRecognizeWith(i) ? n.reset() : n.recognize(t), !i && n.state & (fe | _e | ve) && (i = e.curRecognizer = n), r++
          }
        },
        get: function(t) {
          if (t instanceof Z) return t;
          for (var e = this.recognizers, n = 0; n < e.length; n++)
            if (e[n].options.event == t) return e[n];
          return null
        },
        add: function(t) {
          if (s(t, "add", this)) return this;
          var e = this.get(t.options.event);
          return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
        },
        remove: function(t) {
          if (s(t, "remove", this)) return this;
          if (t = this.get(t)) {
            var e = this.recognizers,
              n = y(e, t);
            n !== -1 && (e.splice(n, 1), this.touchAction.update())
          }
          return this
        },
        on: function(t, e) {
          if (t !== i && e !== i) {
            var n = this.handlers;
            return u(v(t), function(t) {
              n[t] = n[t] || [], n[t].push(e)
            }), this
          }
        },
        off: function(t, e) {
          if (t !== i) {
            var n = this.handlers;
            return u(v(t), function(t) {
              e ? n[t] && n[t].splice(y(n[t], e), 1) : delete n[t]
            }), this
          }
        },
        emit: function(t, e) {
          this.options.domEvents && lt(t, e);
          var n = this.handlers[t] && this.handlers[t].slice();
          if (n && n.length) {
            e.type = t, e.preventDefault = function() {
              e.srcEvent.preventDefault()
            };
            for (var o = 0; o < n.length;) n[o](e), o++
          }
        },
        destroy: function() {
          this.element && ht(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
      }, pt(at, {
        INPUT_START: Rt,
        INPUT_MOVE: Nt,
        INPUT_END: Ct,
        INPUT_CANCEL: Lt,
        STATE_POSSIBLE: me,
        STATE_BEGAN: fe,
        STATE_CHANGED: _e,
        STATE_ENDED: ve,
        STATE_RECOGNIZED: ye,
        STATE_CANCELLED: be,
        STATE_FAILED: ge,
        DIRECTION_NONE: Ht,
        DIRECTION_LEFT: qt,
        DIRECTION_RIGHT: zt,
        DIRECTION_UP: Ot,
        DIRECTION_DOWN: kt,
        DIRECTION_HORIZONTAL: Mt,
        DIRECTION_VERTICAL: Ft,
        DIRECTION_ALL: Ut,
        Manager: ct,
        Input: E,
        TouchAction: X,
        TouchInput: U,
        MouseInput: O,
        PointerEventInput: k,
        TouchMouseInput: V,
        SingleTouchInput: M,
        Recognizer: Z,
        AttrRecognizer: et,
        Tap: ut,
        Pan: nt,
        Swipe: st,
        Pinch: ot,
        Rotate: rt,
        Press: it,
        on: d,
        off: m,
        each: u,
        merge: gt,
        extend: bt,
        assign: pt,
        inherit: c,
        bindFn: h,
        prefixed: w
      });
      var xe = "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
      xe.Hammer = at, "function" == typeof define && define.amd ? define(function() {
        return at
      }) : "undefined" != typeof e && e.exports ? e.exports = at : t[o] = at
    }(window, document, "Hammer")
  }, {}],
  2: [function(t, e, n) {
    var o, i, r, s, u, a, c, h, l, p, d, m, f, _, v, y, b, g, w, T, x, E, S, I, A, P, D = function(t, e) {
      return function() {
        return t.apply(e, arguments)
      }
    };
    for (window.console || (window.console = {
        log: function() {}
      }), S = null, P = ["ms", "moz", "webkit", "o"], E = 0, I = P.length; E < I; E++) A = P[E], window.requestAnimationFrame || (window.requestAnimationFrame = window[A + "RequestAnimationFrame"], window.cancelAnimationFrame = window[A + "CancelAnimationFrame"] || window[A + "CancelRequestAnimationFrame"]);
    window.requestAnimationFrame || (window.requestAnimationFrame = function(t, e) {
      var n, o, i, r;
      return n = +new Date, null == S && (S = n), i = Math.max(0, 16 - (n - S)), o = window.setTimeout(function() {
        return t(n + i)
      }, i), r = n + i, o
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
      return clearTimeout(t)
    }), b = t("./event/pub-sub"), d = t("./../../bower_components/hammerjs/hammer.js"), x = t("fastdom"), _ = t("./view/home"), T = t("./components/user-reviews"), f = t("./components/hero"), p = t("./components/get"), v = t("./components/phone"), m = t("./components/header"), h = t("./components/features"), o = t("./components/about"), g = t("./components/team"), w = t("./components/testimonials"), y = t("./components/positions"), l = t("./components/gp-top"), s = t("./components/comments"), c = t("./components/factsheet"), u = t("./components/cookies"), i = t("./components/anim-block"), a = t("./utils/deeplink"), new(r = function() {
      function e() {
        this.onJumpToGet = D(this.onJumpToGet, this), this.onScroll = D(this.onScroll, this), this.onResize = D(this.onResize, this), this._init()
      }
      return e.prototype._bottom = !1, e.prototype._top = !0, e.prototype._init = function() {
        return "ontouchstart" in window ? t("./dom/add-class")(document.documentElement, "touch") : t("./dom/add-class")(document.documentElement, "no-touch"), window.addEventListener("resize", this.onResize, !1), window.addEventListener("scroll", this.onScroll, !1), b.subscribe("jump/get", this.onJumpToGet), this._detect(), this._load(), t("./dom/add-class")(document.documentElement, "ready"), this._views(), this._components(), this._ui(), this._blocks()
      }, e.prototype._detect = function() {
        var e, n;
        return n = /(iPhone)/i.test(navigator.userAgent) && !window.MSStream, e = /(android)/i.test(navigator.userAgent) && !window.MSStream && /(mobile)/i.test(navigator.userAgent), n ? t("./dom/add-class")(document.documentElement, "iphone") : e ? t("./dom/add-class")(document.documentElement, "android") : void 0
      }, e.prototype._ui = function() {
        var t;
        return t = document.body.querySelector(".ui-body"), new a(t)
      }, e.prototype._blocks = function() {
        var t, e, n;
        for (e = document.body.querySelectorAll(".anim-block, .anim-block-list"), t = 0, n = []; t < e.length;) new i(e[t]), n.push(t++);
        return n
      }, e.prototype._instance = function(t, e) {
        var n, o, i;
        for (o = document.body.querySelectorAll(e), n = 0, i = []; n < o.length;) new t(o[n]), i.push(n++);
        return i
      }, e.prototype._views = function() {
        return this._instance(_, ".vx-home")
      }, e.prototype._components = function() {
        return this._instance(T, ".cx-user-reviews"), this._instance(f, ".cx-hero"), this._instance(p, ".cx-get"), this._instance(v, ".cx-phone"), this._instance(m, ".cx-header"), this._instance(h, ".cx-features"), this._instance(o, ".cx-about"), this._instance(g, ".cx-team"), this._instance(w, ".cx-testimonials"), this._instance(y, ".cx-positions"), this._instance(l, ".cx-gp-top"), this._instance(s, ".cx-comments"), this._instance(c, ".cx-factsheet"), this._instance(u, ".cx-cookies")
      }, e.prototype._resize = function() {
        return b.publish("window/resize")
      }, e.prototype._scroll = function() {
        return b.publish("window/scroll")
      }, e.prototype._load = function() {}, e.prototype._jumpToGet = function() {
        return x.measure(function(e) {
          return function() {
            var e, n, o, i, r;
            return i = t("./dom/scrollable"), r = i.getBoundingClientRect(), e = document.body.querySelector(".cx-get").getBoundingClientRect(), n = document.body.querySelector(".cx-header").getBoundingClientRect(), o = e.top + i.scrollTop + .5 * (e.height - window.innerHeight - n.height), x.mutate(function() {
              return i.scrollTop = o, window.scrollTo(0, o)
            })
          }
        }(this))
      }, e.prototype._loadImage = function(e) {
        return console.log("img load"), e.complete ? (console.log("img complete"), t("./dom/add-class")(e, "loaded")) : (e.addEventListener("load", function(n) {
          return function(n) {
            return console.log("img loaded"), t("./dom/add-class")(e, "loaded")
          }
        }(this), !1), e.addEventListener("error", function(n) {
          return function(n) {
            return console.log("img error"), t("./dom/add-class")(e, "loaded")
          }
        }(this), !1))
      }, e.prototype.onResize = function(t) {
        return clearTimeout(this._resizeTimeout), this._resizeTimeout = setTimeout(function(t) {
          return function() {
            return t._resize()
          }
        }(this), 100)
      }, e.prototype.onScroll = function(t) {
        return this._scroll()
      }, e.prototype.onJumpToGet = function(t) {
        return this._jumpToGet()
      }, e
    }())
  }, {
    "./../../bower_components/hammerjs/hammer.js": 1,
    "./components/about": 3,
    "./components/anim-block": 4,
    "./components/comments": 6,
    "./components/cookies": 7,
    "./components/factsheet": 8,
    "./components/features": 9,
    "./components/get": 10,
    "./components/gp-top": 11,
    "./components/header": 12,
    "./components/hero": 13,
    "./components/phone": 14,
    "./components/positions": 15,
    "./components/team": 16,
    "./components/testimonials": 17,
    "./components/user-reviews": 18,
    "./dom/add-class": 19,
    "./dom/scrollable": 22,
    "./event/pub-sub": 23,
    "./utils/deeplink": 26,
    "./view/home": 27,
    fastdom: 28
  }],
  3: [function(t, e, n) {
    var o, i, r, s, u = function(t, e) {
        function n() {
          this.constructor = t
        }
        for (var o in e) a.call(e, o) && (t[o] = e[o]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
      },
      a = {}.hasOwnProperty;
    s = t("../event/pub-sub"), i = t("./animateable"), r = t("./../../../bower_components/hammerjs/hammer.js"), e.exports = o = function(t) {
      function e() {
        return e.__super__.constructor.apply(this, arguments)
      }
      return u(e, t), e.prototype._init = function() {
        var t, e;
        for (this._photos = this.node.querySelectorAll(".cx-about__photos img"), this._movement = [], t = 0, e = []; t < this._photos.length;) this._movement.push(50 * Math.random() + 10), e.push(t++);
        return e
      }, e.prototype._render = function() {
        var t, n;
        for (t = 0; t < this._photos.length;) n = -this._movement[t] * this._percent, this._photos[t].style.transform = "translate3d(0," + n + "%,0)", t++;
        return e.__super__._render.call(this)
      }, e.prototype._position = function(t) {
        var n;
        return t.bottom > this.HEADER_HEIGHT && t.top < window.innerHeight ? n = 2 * ((t.bottom - this.HEADER_HEIGHT) / (window.innerHeight - this.HEADER_HEIGHT + t.height) - .5) : t.bottom <= this.HEADER_HEIGHT ? n = -1 : t.top >= window.innerHeight && (n = 1), n !== this._percent && (this._percent = n), e.__super__._position.call(this, t)
      }, e
    }(i)
  }, {
    "../event/pub-sub": 23,
    "./../../../bower_components/hammerjs/hammer.js": 1,
    "./animateable": 5
  }],
  4: [function(t, e, n) {
    var o, i, r, s, u = function(t, e) {
      return function() {
        return t.apply(e, arguments)
      }
    };
    r = t("../event/pub-sub"), i = t("./../../../bower_components/hammerjs/hammer.js"), s = t("fastdom"), e.exports = o = function() {
      function e(t) {
        this.node = t, this.onWindowResize = u(this.onWindowResize, this), this.onWindowScroll = u(this.onWindowScroll, this), null != this.node && this._setup()
      }
      return e.prototype._init = function() {}, e.prototype._setup = function() {
        return this._scrollListener = r.subscribe("window/scroll", this.onWindowScroll), this._resizeListener = r.subscribe("window/resize", this.onWindowResize), this._update()
      }, e.prototype._update = function() {
        return s.measure(function(e) {
          return function() {
            var n;
            if (n = e.node.getBoundingClientRect(), n.top < window.innerHeight - 100) return s.mutate(function() {
              return t("../dom/add-class")(e.node, "in"), e._scrollListener.remove(), e._resizeListener.remove()
            })
          }
        }(this))
      }, e.prototype._resize = function() {
        return this._update()
      }, e.prototype._scroll = function() {
        return this._update()
      }, e.prototype.onWindowScroll = function(t) {
        return this._scroll()
      }, e.prototype.onWindowResize = function(t) {
        return this._resize()
      }, e
    }()
  }, {
    "../dom/add-class": 19,
    "../event/pub-sub": 23,
    "./../../../bower_components/hammerjs/hammer.js": 1,
    fastdom: 28
  }],
  5: [function(t, e, n) {
    var o, i, r, s, u = function(t, e) {
      return function() {
        return t.apply(e, arguments)
      }
    };
    r = t("../event/pub-sub"), i = t("./../../../bower_components/hammerjs/hammer.js"), s = t("fastdom"), e.exports = o = function() {
      function e(t) {
        this.node = t, this.onWindowResize = u(this.onWindowResize, this), this.onWindowScroll = u(this.onWindowScroll, this), null != this.node && (this._init(), this._setup())
      }
      return e.prototype._animate = !1, e.prototype._animated = !1, e.prototype.HEADER_HEIGHT = 82, e.prototype.activated = function() {
        return t("../dom/add-class")(this.node, "cx-active")
      }, e.prototype.deactivated = function() {
        return t("../dom/remove-class")(this.node, "cx-active")
      }, e.prototype._init = function() {}, e.prototype._setup = function() {
        return this._touch = "ontouchstart" in window, r.subscribe("window/scroll", this.onWindowScroll), r.subscribe("window/resize", this.onWindowResize), this._update()
      }, e.prototype._render = function() {
        if (this._animate && !this._animated) return this._animated = !0, t("../dom/add-class")(this.node, "in")
      }, e.prototype._update = function() {
        return s.measure(function(t) {
          return function() {
            return t._position(t.node.getBoundingClientRect()), s.mutate(function() {
              return t._render()
            })
          }
        }(this))
      }, e.prototype._position = function(t) {
        return t.top < window.innerHeight && !this._animated && (this._animate = !0), t.bottom > this.HEADER_HEIGHT && t.top < window.innerHeight ? this.setActive(!0) : this.setActive(!1)
      }, e.prototype._resize = function() {
        return this._update()
      }, e.prototype._scroll = function() {
        return this._update()
      }, e.prototype.setActive = function(t) {
        if (t !== this._active) return this._active = t, s.mutate(function(t) {
          return function() {
            return t._active ? t.activated() : t.deactivated()
          }
        }(this))
      }, e.prototype.getActive = function() {
        return this._active
      }, e.prototype.onWindowScroll = function(t) {
        return this._scroll()
      }, e.prototype.onWindowResize = function(t) {
        return this._resize()
      }, e
    }()
  }, {
    "../dom/add-class": 19,
    "../dom/remove-class": 21,
    "../event/pub-sub": 23,
    "./../../../bower_components/hammerjs/hammer.js": 1,
    fastdom: 28
  }],
  6: [function(t, e, n) {
    var o, i, r, s;
    s = t("../event/pub-sub"), o = t("./animateable"), r = t("./../../../bower_components/hammerjs/hammer.js"), e.exports = i = function() {
      function e(t) {
        this.node = t, null != this.node && this._init()
      }
      var n;
      return n = !1, e.prototype._init = function() {
        return this._commentsHeader = this.node.querySelector(".cx-comments__header-count"), this._commentsThread = this.node, new r(this._commentsHeader, {
          recognizers: [
            [r.Tap, {
              time: 500,
              threshold: 10
            }]
          ]
        }).on("tap", function(t) {
          return function(e) {
            return t._toggleItem()
          }
        }(this))
      }, e.prototype._toggleItem = function() {
        return this._isCommentsShown ? this._hideComments() : this._showComments()
      }, e.prototype._showComments = function() {
        return t("../dom/remove-class")(this._commentsThread, "cx-comments__hide"), this._isCommentsShown = !0
      }, e.prototype._hideComments = function() {
        return t("../dom/add-class")(this._commentsThread, "cx-comments__hide"), this._isCommentsShown = !1
      }, e
    }()
  }, {
    "../dom/add-class": 19,
    "../dom/remove-class": 21,
    "../event/pub-sub": 23,
    "./../../../bower_components/hammerjs/hammer.js": 1,
    "./animateable": 5
  }],
  7: [function(t, e, n) {
    var o, i, r, s, u, a = function(t, e) {
      return function() {
        return t.apply(e, arguments)
      }
    };
    s = t("../event/pub-sub"), o = t("../utils/cookie"), u = t("fastdom"), r = t("./../../../bower_components/hammerjs/hammer.js"), e.exports = i = function() {
      function e(t) {
        this.node = t, this.onHomeNext = a(this.onHomeNext, this), this.onWindowScroll = a(this.onWindowScroll, this), null != this.node && this._init();
      }
      return e.prototype._init = function() {
        return this._banner = this.node.querySelector(".cx-cookies__banner"), this._button = this.node.querySelector(".cx-cookies__button"), this._check()
      }, e.prototype._check = function() {
        var t;
        if (t = o.get("cookie-notice"), console.log("_check", t), "yes" !== t) return this._show()
      }, e.prototype._close = function() {
        return t("../dom/remove-class")(this.node, "open"), this._opened = !1
      }, e.prototype._open = function() {
        return t("../dom/add-class")(this.node, "open"), this._opened = !0
      }, e.prototype._show = function() {
        return t("../dom/add-class")(this.node, "visible"), console.log("show"), this._scrollSubscription = s.subscribe("window/scroll", this.onWindowScroll), this._homeNextSubscription = s.subscribe("home/next", this.onHomeNext), this._bannerHammer = new r(this._banner, {
          recognizers: [
            [r.Tap, {
              time: 500,
              threshold: 10
            }]
          ]
        }).on("tap", function(t) {
          return function(e) {
            return t._toggle()
          }
        }(this)), this._buttonHammer = new r(this._button, {
          recognizers: [
            [r.Tap, {
              time: 500,
              threshold: 10
            }]
          ]
        }).on("tap", function(t) {
          return function(e) {
            return t._hide()
          }
        }(this))
      }, e.prototype._hide = function() {
        return null != this._scrollSubscription && this._scrollSubscription.remove(), null != this._scrollSubscription && this._homeNextSubscription.remove(), null != this._bannerHammer && this._bannerHammer.destroy(), null != this._buttonHammer && this._buttonHammer.destroy(), o.set("cookie-notice", "yes", 30), t("../dom/remove-class")(this.node, "visible")
      }, e.prototype._toggle = function() {
        return this._opened ? this._close() : this._open()
      }, e.prototype._scroll = function() {
        return this._hide()
      }, e.prototype.onWindowScroll = function(t) {
        return this._scroll()
      }, e.prototype.onHomeNext = function(t) {
        return this._hide()
      }, e
    }()
  }, {
    "../dom/add-class": 19,
    "../dom/remove-class": 21,
    "../event/pub-sub": 23,
    "../utils/cookie": 25,
    "./../../../bower_components/hammerjs/hammer.js": 1,
    fastdom: 28
  }],
  8: [function(t, e, n) {
    var o, i, r, s = function(t, e) {
      return function() {
        return t.apply(e, arguments)
      }
    };
    r = t("../event/pub-sub"), i = t("./../../../bower_components/hammerjs/hammer.js"), t("whatwg-fetch"), e.exports = o = function() {
      function e(e) {
        this.node = e, this.onKeyUp = s(this.onKeyUp, this), this.onSubmit = s(this.onSubmit, this), null != this.node && (this._form = this.node.querySelector(".cx-factsheet__download"), this._input = this.node.querySelector(".ui-textinput input"), this._button = this.node.querySelector(".ui-textinput__button"), this._errorMessage = this.node.querySelector(".ui-textinput__error"), this._errored = t("../dom/has-class")(this._button, "error"), null != this._form && null != this._input && (this._form.addEventListener("submit", this.onSubmit, !1), this._input.addEventListener("keyup", this.onKeyUp, !1)))
      }
      return e.SEND_URL = "/actions/mailchimpSubscribe/list/subscribe", e.prototype._serialize = function(t) {
        var e, n;
        n = [];
        for (e in t) t.hasOwnProperty(e) && n.push(encodeURIComponent(e) + "=" + encodeURIComponent(t[e]));
        return n.join("&")
      }, e.prototype._send = function() {
        var t;
        return t = new FormData(this._form), console.log("send", e.SEND_URL, t.get("action"), t.get("email")), console.log(this._serialize(t)), fetch(e.SEND_URL, {
          method: "POST",
          body: t,
          headers: {
            Accept: "application/json"
          }
        }).then(function(t) {
          return function(t) {
            return t.json()
          }
        }(this)).then(function(t) {
          return function(t) {
            return console.log("parsed json", t), t.success ? console.log("success") : console.log("fail")
          }
        }(this))
      }, e.prototype.onSubmit = function(t) {
        return t.preventDefault(), this._send()
      }, e.prototype.onKeyUp = function(e) {
        if (t("../dom/remove-class")(this._button, "error"), t("../dom/remove-class")(this._errorMessage, "hidden"), 13 === e.keyCode) return this._send()
      }, e
    }()
  }, {
    "../dom/has-class": 20,
    "../dom/remove-class": 21,
    "../event/pub-sub": 23,
    "./../../../bower_components/hammerjs/hammer.js": 1,
    "whatwg-fetch": 32
  }],
  9: [function(t, e, n) {
    var o, i, r, s, u, a = function(t, e) {
      return function() {
        return t.apply(e, arguments)
      }
    };
    r = t("../event/pub-sub"), s = t("fastdom"), i = t("./../../../bower_components/hammerjs/hammer.js"), u = t("iphone-inline-video"), e.exports = o = function() {
      function e(t) {
        this.node = t, this.onEnded = a(this.onEnded, this), this.onTimeUpdate = a(this.onTimeUpdate, this), null != this.node && this._init()
      }
      return e.prototype._progress = 0, e.prototype._init = function() {
        var t;
        for (this._items = this.node.querySelectorAll(".cx-features__list li"), this._video = this.node.querySelector("video"), this._device = this.node.querySelector(".cx-features__device"), u(this._video, !1), this._video.addEventListener("ended", this.onEnded, !1), t = 0; t < this._items.length;) this._setupItem(this._items[t], t), t++;
        return this._index = 0, this._currentNode = this._items[this._index], this._currentProgressNode = this._currentNode.querySelector(".cx-progress__played"), this._load(), this._activate()
      }, e.prototype._load = function() {
        var e, n;
        return n = this._device.style.backgroundImage.slice(4, -1).replace(/"/g, ""), e = new Image, e.onload = function(e) {
          return function() {
            return t("../dom/add-class")(e.node, "loaded")
          }
        }(this), e.src = n
      }, e.prototype._activate = function() {
        return clearInterval(this._interval), this._interval = setInterval(function(t) {
          return function() {
            return t._update()
          }
        }(this), 100)
      }, e.prototype._deactivate = function() {
        return clearInterval(this._interval)
      }, e.prototype._setupItem = function(t, e) {
        return new i(t, {
          recognizers: [
            [i.Tap, {
              time: 500,
              threshold: 10
            }]
          ]
        }).on("tap", function(t) {
          return function(n) {
            return t._playIndex(e)
          }
        }(this))
      }, e.prototype._reset = function() {
        var t;
        if (null != this._currentProgressNode) return t = this._currentProgressNode, setTimeout(function(e) {
          return function() {
            return t.style.transform = "translateX(0%)"
          }
        }(this), 200), this._currentProgressNode = null
      }, e.prototype._playIndex = function(e) {
        var n;
        return this._reset(), n = this._items[e], this._index = e, this._lastNode = this._currentNode, this._currentNode = n, null != this._lastNode && t("../dom/remove-class")(this._lastNode, "selected"), t("../dom/add-class")(this._video, "hidden"), clearTimeout(this._timeout), this._timeout = setTimeout(function(e) {
          return function() {
            return e._currentProgressNode = n.querySelector(".cx-progress__played"), t("../dom/add-class")(e._currentNode, "selected"), t("../dom/remove-class")(e._video, "hidden"), e._video.src = n.getAttribute("data-video"), e._video.play(), e._progress = 0
          }
        }(this), 500)
      }, e.prototype._next = function(t) {
        return this._index >= this._items.length - 1 ? this._playIndex(0) : this._playIndex(this._index + 1)
      }, e.prototype._update = function() {
        var t;
        if (null != this._video.duration && null != this._video.currentTime && (t = this._video.currentTime / this._video.duration * 100, t > this._progress)) return null != this._currentProgressNode && (this._currentProgressNode.style.transform = "translateX(" + t + "%)"), this._progress = t
      }, e.prototype.onTimeUpdate = function(t) {
        var e;
        if (console.log("onTimeUpdate", this._video.duration, this._video.currentTime), null != this._video.duration && null != this._video.currentTime && (e = this._video.currentTime / this._video.duration * 100, e > this._progress)) return null != this._currentProgressNode && (this._currentProgressNode.style.transform = "translateX(" + e + "%)"), this._progress = e
      }, e.prototype.onEnded = function(t) {
        return null != this._currentProgressNode && (this._currentProgressNode.style.transform = "translateX(100%)"), this._next()
      }, e
    }()
  }, {
    "../dom/add-class": 19,
    "../dom/remove-class": 21,
    "../event/pub-sub": 23,
    "./../../../bower_components/hammerjs/hammer.js": 1,
    fastdom: 28,
    "iphone-inline-video": 29
  }],
  10: [function(t, e, n) {
    var o, i, r, s, u = function(t, e) {
        return function() {
          return t.apply(e, arguments)
        }
      },
      a = function(t, e) {
        function n() {
          this.constructor = t
        }
        for (var o in e) c.call(e, o) && (t[o] = e[o]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
      },
      c = {}.hasOwnProperty;
    s = t("../event/pub-sub"), o = t("./animateable"), r = t("./../../../bower_components/hammerjs/hammer.js"), t("whatwg-fetch"), e.exports = i = function(t) {
      function e(t) {
        this.node = t, this.onKeyUp = u(this.onKeyUp, this), this.onSubmit = u(this.onSubmit, this), this.onJumpToGet = u(this.onJumpToGet, this), e.__super__.constructor.call(this, this.node), null != this.node && (this._image = this.node.querySelector(".cx-get__image"), this._form = this.node.querySelector(".cx-get__sms"), this._input = this.node.querySelector(".ui-textinput--phone input"), null != this._form && null != this._input && (this._form.addEventListener("submit", this.onSubmit, !1), this._input.addEventListener("keyup", this.onKeyUp, !1)), s.subscribe("jump/get", this.onJumpToGet))
      }
      return a(e, t), e.SEND_URL = "/actions/twilioGetApp/message/sendMessage", e.prototype._render = function() {
        var t;
        return t = -(80 * this._percent), this._image.style.transform = "translate3d(-50%,calc(-50% + " + t + "px),0)", e.__super__._render.call(this)
      }, e.prototype._jump = function() {
        return fastdom.mutate(function(t) {
          return function() {
            return t._percent = 0, t._render()
          }
        }(this))
      }, e.prototype._position = function(t) {
        var n;
        if (t.bottom > this.HEADER_HEIGHT && t.top < window.innerHeight) {
          if (n = 2 * ((t.bottom - this.HEADER_HEIGHT) / (window.innerHeight - this.HEADER_HEIGHT + t.height) - .5), n === this._percent) return;
          this._percent = n
        }
        return e.__super__._position.call(this, t)
      }, e.prototype._send = function() {
        var t;
        return t = new FormData(this._form), console.log("send", e.SEND_URL, t.get("body"), t.get("to")), fetch(e.SEND_URL, {
          method: "POST",
          body: t
        }).then(function(t) {
          return function(t) {
            return t.json()
          }
        }(this)).then(function(t) {
          return function(t) {
            return console.log("parsed json", t)
          }
        }(this))
      }, e.prototype.onJumpToGet = function(t) {}, e.prototype.onSubmit = function(t) {
        return t.preventDefault(), this._send()
      }, e.prototype.onKeyUp = function(t) {
        if (13 === t.keyCode) return this._send()
      }, e
    }(o)
  }, {
    "../event/pub-sub": 23,
    "./../../../bower_components/hammerjs/hammer.js": 1,
    "./animateable": 5,
    "whatwg-fetch": 32
  }],
  11: [function(t, e, n) {
    var o, i, r, s, u = function(t, e) {
        function n() {
          this.constructor = t
        }
        for (var o in e) a.call(e, o) && (t[o] = e[o]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
      },
      a = {}.hasOwnProperty;
    s = t("../event/pub-sub"), o = t("./animateable"), r = t("./../../../bower_components/hammerjs/hammer.js"), e.exports = i = function(t) {
      function e(t) {
        this.node = t, e.__super__.constructor.call(this, this.node), null != this.node && (this._phone = this.node.querySelector(".cx-gp-top__phone"), this._circle1 = this.node.querySelector(".cx-gp-top__phone__circle1"), this._circle2 = this.node.querySelector(".cx-gp-top__phone__circle2"), this._check())
      }
      return u(e, t), e.prototype._render = function() {
        var t, n, o;
        return this._moveable && (o = -(.5 * this._offset), t = .2 * this._offset, n = .05 * this._offset, this._phone.style.transform = "translate3d(0," + o + "px,0)", this._circle1.style.transform = "translate3d(0," + t + "px,0)", this._circle2.style.transform = "translate3d(0," + n + "px,0)"), e.__super__._render.call(this)
      }, e.prototype._reset = function() {
        return this._phone.style.transform = "", this._circle1.style.transform = "", this._circle2.style.transform = ""
      }, e.prototype._check = function() {
        return "absolute" === window.getComputedStyle(this._phone).getPropertyValue("position") ? this._moveable = !0 : (this._moveable && this._reset(), this._moveable = !1)
      }, e.prototype._resize = function() {
        return this._check(), e.__super__._resize.call(this)
      }, e.prototype._position = function(t) {
        return this._offset = t.top - this.HEADER_HEIGHT, t.bottom > this.HEADER_HEIGHT && t.top < window.innerHeight && (this._offset = t.top - this.HEADER_HEIGHT), e.__super__._position.call(this, t)
      }, e
    }(o)
  }, {
    "../event/pub-sub": 23,
    "./../../../bower_components/hammerjs/hammer.js": 1,
    "./animateable": 5
  }],
  12: [function(t, e, n) {
    var o, i, r, s, u = function(t, e) {
      return function() {
        return t.apply(e, arguments)
      }
    };
    r = t("../event/pub-sub"), s = t("fastdom"), o = t("./../../../bower_components/hammerjs/hammer.js"), e.exports = i = function() {
      function e(t) {
        this.node = t, this.onWindowResize = u(this.onWindowResize, this), this.onWindowScroll = u(this.onWindowScroll, this), null != this.node && this._init()
      }
      return e.prototype._top = !0, e.prototype._opened = !1, e.prototype._init = function() {
        return r.subscribe("window/scroll", this.onWindowScroll), r.subscribe("window/resize", this.onWindowResize), this._isHome = t("../dom/has-class")(this.node, "cx-header--home"), this._burger = this.node.querySelector(".cx-header__burger"), this._get = this.node.querySelector(".cx-header__get"), this._mobileMenu = this.node.querySelector(".cx-header__mobile-menu"), new o(this._get, {
          recognizers: [
            [o.Tap, {
              time: 500,
              threshold: 10
            }]
          ]
        }).on("tap", function(t) {
          return function(t) {
            return r.publish("jump/get")
          }
        }(this)), new o(this._burger, {
          recognizers: [
            [o.Tap, {
              time: 500,
              threshold: 10
            }]
          ]
        }).on("tap", function(t) {
          return function(e) {
            return t._toggle()
          }
        }(this)), this._update(), this._check()
      }, e.prototype._update = function() {
        return s.measure(function(t) {
          return function() {
            return t._position = document.body.querySelector(".main").getBoundingClientRect().top, s.mutate(function() {
              return t._render()
            })
          }
        }(this))
      }, e.prototype._check = function() {
        if ("none" === window.getComputedStyle(this._burger).getPropertyValue("display")) {
          if (this._mobile) return this._mobile = !1
        } else if (!this._mobile) return this._mobile = !0
      }, e.prototype._close = function() {
        return t("../dom/remove-class")(this._burger, "burger-to-close"), t("../dom/add-class")(this._burger, "close-to-burger"), t("../dom/remove-class")(this._mobileMenu, "visible"), this._opened = !1
      }, e.prototype._open = function() {
        return t("../dom/remove-class")(this._burger, "close-to-burger"), t("../dom/add-class")(this._burger, "burger-to-close"), t("../dom/add-class")(this._mobileMenu, "visible"), this._opened = !0
      }, e.prototype._toggle = function() {
        return this._opened ? this._close() : this._open()
      }, e.prototype._render = function() {
        if (!this._isHome || this._mobile) {
          if (this._top && this._position < -5) return this._top = !1, t("../dom/add-class")(this.node, "off-top");
          if (!this._top && this._position >= -5) return this._top = !0, t("../dom/remove-class")(this.node, "off-top")
        }
      }, e.prototype._resize = function() {
        return this._update()
      }, e.prototype._scroll = function() {
        return this._update()
      }, e.prototype.onWindowScroll = function(t) {
        return this._scroll()
      }, e.prototype.onWindowResize = function(t) {
        return this._resize()
      }, e
    }()
  }, {
    "../dom/add-class": 19,
    "../dom/has-class": 20,
    "../dom/remove-class": 21,
    "../event/pub-sub": 23,
    "./../../../bower_components/hammerjs/hammer.js": 1,
    fastdom: 28
  }],
  13: [function(t, e, n) {
    var o, i, r, s, u = function(t, e) {
        function n() {
          this.constructor = t
        }
        for (var o in e) a.call(e, o) && (t[o] = e[o]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
      },
      a = {}.hasOwnProperty;
    s = t("../event/pub-sub"), o = t("./animateable"), i = t("./../../../bower_components/hammerjs/hammer.js"), e.exports = r = function(t) {
      function e() {
        return e.__super__.constructor.apply(this, arguments)
      }
      return u(e, t), e.prototype._init = function() {
        return new i(this.node.querySelector(".cx-hero__content__cta"), {
          recognizers: [
            [i.Tap, {
              time: 500,
              threshold: 10
            }]
          ]
        }).on("tap", function(t) {
          return function(t) {
            return s.publish("jump/get")
          }
        }(this))
      }, e
    }(o)
  }, {
    "../event/pub-sub": 23,
    "./../../../bower_components/hammerjs/hammer.js": 1,
    "./animateable": 5
  }],
  14: [function(t, e, n) {
    var o, i, r, s, u, a, c = function(t, e) {
        return function() {
          return t.apply(e, arguments)
        }
      },
      h = function(t, e) {
        function n() {
          this.constructor = t
        }
        for (var o in e) l.call(e, o) && (t[o] = e[o]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
      },
      l = {}.hasOwnProperty;
    s = t("../event/pub-sub"), o = t("./animateable"), i = t("./../../../bower_components/hammerjs/hammer.js"), u = t("fastdom"), a = t("iphone-inline-video"), e.exports = r = function(e) {
      function n() {
        return this.onVideoCanPlay = c(this.onVideoCanPlay, this), this.onVideoError = c(this.onVideoError, this), n.__super__.constructor.apply(this, arguments)
      }
      return h(n, e), n.prototype.inView = function() {
        return null != this._video && this._play(), t("../dom/add-class")(this.node, "in-view")
      }, n.prototype.outView = function() {
        return null != this._video && this._stop(), t("../dom/remove-class")(this.node, "in-view")
      }, n.prototype._init = function() {
        return this._video = this.node.querySelector("video"), this._device = this.node.querySelector(".cx-phone__device"), null != this._video && this._setupVideo(), this._load()
      }, n.prototype._load = function() {
        var e, n;
        return n = this._device.style.backgroundImage.slice(4, -1).replace(/"/g, ""), e = new Image, e.onload = function(e) {
          return function() {
            return t("../dom/add-class")(e.node, "loaded")
          }
        }(this), e.src = n
      }, n.prototype._setupVideo = function() {
        return this._video.controls = !1, this._video.addEventListener("timeupdate", this.onTimeUpdate, !1), this._video.addEventListener("ended", this.onEnded, !1), a(this._video, !1), this._video.readyState >= 4 ? this._readyToPlay = !0 : (this._video.addEventListener("canplay", this.onVideoCanPlay, !1), this._video.addEventListener("error", this.onVideoError, !1))
      }, n.prototype._resize = function() {
        return this._update()
      }, n.prototype._play = function() {
        return this._readyToPlay ? this._video.play() : this._waitingToPlay = !0
      }, n.prototype._stop = function() {
        return this._waitingToPlay ? this._waitingToPlay = !1 : this._video.pause()
      }, n.prototype._position = function(t) {
        return t.bottom > .5 * window.innerHeight && t.top < .5 * window.innerHeight ? this.setInView(!0) : this.setInView(!1), n.__super__._position.call(this, t)
      }, n.prototype.setInView = function(t) {
        if (t !== this._viewable) return this._viewable = t, u.mutate(function(t) {
          return function() {
            return t._viewable ? t.inView() : t.outView()
          }
        }(this))
      }, n.prototype.onVideoError = function(t) {
        return console.log(t)
      }, n.prototype.onVideoCanPlay = function(t) {
        if (this._video.removeEventListener("canplay", this.onVideoCanPlay, !1), this._readyToPlay = !0, this._waitingToPlay) return this._video.play(), this._waitingToPlay = !1
      }, n
    }(o)
  }, {
    "../dom/add-class": 19,
    "../dom/remove-class": 21,
    "../event/pub-sub": 23,
    "./../../../bower_components/hammerjs/hammer.js": 1,
    "./animateable": 5,
    fastdom: 28,
    "iphone-inline-video": 29
  }],
  15: [function(t, e, n) {
    var o, i, r, s;
    s = t("../event/pub-sub"), o = t("./animateable"), i = t("./../../../bower_components/hammerjs/hammer.js"), e.exports = r = function() {
      function e(t) {
        this.node = t, null != this.node && this._init()
      }
      return e.prototype._index = 1, e.prototype._init = function() {
        var t, e;
        for (this._items = this.node.querySelectorAll(".cx-positions__item"), t = 0, e = []; t < this._items.length;) this._setupItem(this._items[t], t), e.push(t++);
        return e
      }, e.prototype._toggleItem = function(e) {
        return e !== this._openedItem ? (null != this._openedItem && t("../dom/remove-class")(this._openedItem, "open"), t("../dom/add-class")(e, "open"), this._openedItem = e) : (t("../dom/remove-class")(this._openedItem, "open"), this._openedItem = null)
      }, e.prototype._closeItem = function(e) {
        if (e === this._openedItem) return t("../dom/remove-class")(this._openedItem, "open"), this._openedItem = null
      }, e.prototype._setupItem = function(t, e) {
        var n;
        return n = t.querySelector(".cx-positions__item__header"), new i(n, {
          recognizers: [
            [i.Tap, {
              time: 500,
              threshold: 10
            }]
          ]
        }).on("tap", function(e) {
          return function(n) {
            return e._toggleItem(t)
          }
        }(this))
      }, e
    }()
  }, {
    "../dom/add-class": 19,
    "../dom/remove-class": 21,
    "../event/pub-sub": 23,
    "./../../../bower_components/hammerjs/hammer.js": 1,
    "./animateable": 5
  }],
  16: [function(t, e, n) {
    var o, i, r, s;
    r = t("../event/pub-sub"), o = t("./animateable"), i = t("./../../../bower_components/hammerjs/hammer.js"), e.exports = s = function() {
      function e(t) {
        this.node = t, null != this.node && this._init()
      }
      return e.prototype._index = 1, e.prototype._init = function() {
        var t, e;
        for (this._items = this.node.querySelectorAll(".cx-team__list__item"), t = 0, e = []; t < this._items.length;) this._setupItem(this._items[t], t), e.push(t++);
        return e
      }, e.prototype._toggleItem = function(e) {
        return e !== this._openedItem ? (null != this._openedItem && t("../dom/remove-class")(this._openedItem, "open"), t("../dom/add-class")(e, "open"), e.style.zIndex = this._index++, this._openedItem = e) : (t("../dom/remove-class")(this._openedItem, "open"), this._openedItem = null)
      }, e.prototype._openItem = function(e) {
        if (e !== this._openedItem) return null != this._openedItem && t("../dom/remove-class")(this._openedItem, "open"), t("../dom/add-class")(e, "open"), e.style.zIndex = this._index++, this._openedItem = e
      }, e.prototype._closeItem = function(e) {
        if (e === this._openedItem) return t("../dom/remove-class")(this._openedItem, "open"), this._openedItem = null
      }, e.prototype._setupItem = function(t, e) {
        return new i(t, {
          recognizers: [
            [i.Tap, {
              time: 500,
              threshold: 10
            }]
          ]
        }).on("tap", function(e) {
          return function(n) {
            return e._toggleItem(t)
          }
        }(this))
      }, e
    }()
  }, {
    "../dom/add-class": 19,
    "../dom/remove-class": 21,
    "../event/pub-sub": 23,
    "./../../../bower_components/hammerjs/hammer.js": 1,
    "./animateable": 5
  }],
  17: [function(t, e, n) {
    var o, i, r, s, u, a = function(t, e) {
        return function() {
          return t.apply(e, arguments)
        }
      },
      c = function(t, e) {
        function n() {
          this.constructor = t
        }
        for (var o in e) h.call(e, o) && (t[o] = e[o]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
      },
      h = {}.hasOwnProperty;
    r = t("../event/pub-sub"), o = t("./animateable"), i = t("./../../../bower_components/hammerjs/hammer.js"), u = t("fastdom"), e.exports = s = function(e) {
      function n() {
        return this.onSwipeLeft = a(this.onSwipeLeft, this), this.onSwipeRight = a(this.onSwipeRight, this), this.onPreviousTap = a(this.onPreviousTap, this), this.onNextTap = a(this.onNextTap, this), n.__super__.constructor.apply(this, arguments)
      }
      return c(n, e), n.TOGGLE_DELAY = 1e4, n.prototype._index = 0, n.prototype._responsive = !0, n.prototype.activated = function() {
        return clearTimeout(this._toggleTimeout), this._toggleTimeout = setTimeout(function(t) {
          return function() {
            return t._toggle()
          }
        }(this), n.TOGGLE_DELAY)
      }, n.prototype.deactivated = function() {
        return clearTimeout(this._toggleTimeout)
      }, n.prototype._init = function() {
        var t;
        return this._items = this.node.querySelectorAll(".cx-testimonials__list li"), this._previousButton = this.node.querySelector(".cx-testimonials__button--previous"), this._nextButton = this.node.querySelector(".cx-testimonials__button--next"), t = new i(this.node), t.get("swipe").set({
          velocity: .01,
          threshold: 1
        }), t.on("swipeleft", this.onSwipeLeft), t.on("swiperight", this.onSwipeRight), new i(this._previousButton, {
          recognizers: [
            [i.Tap, {
              time: 500,
              threshold: 10
            }]
          ]
        }).on("tap", this.onPreviousTap), new i(this._nextButton, {
          recognizers: [
            [i.Tap, {
              time: 500,
              threshold: 10
            }]
          ]
        }).on("tap", this.onNextTap)
      }, n.prototype._setIndex = function(e) {
        if (u.mutate(function(n) {
            return function() {
              var o, i;
              return o = n._items[n._index], i = n._items[e], t("../dom/remove-class")(o, "selected"), t("../dom/add-class")(i, "selected"), n._index = e
            }
          }(this)), this._active && (clearTimeout(this._toggleTimeout), this._items.length > 1)) return this._toggleTimeout = setTimeout(function(t) {
          return function() {
            return t._toggle()
          }
        }(this), n.TOGGLE_DELAY)
      }, n.prototype._toggle = function() {
        return this._next()
      }, n.prototype._next = function() {
        if (this._responsive) return this._responsive = !1, null != this._responsivetimeout && clearTimeout(this._responsivetimeout), this._responsivetimeout = setTimeout(function(t) {
          return function() {
            return t._responsive = !0
          }
        }(this), 1e3), this._index === this._items.length - 1 ? this._setIndex(0) : this._setIndex(this._index + 1)
      }, n.prototype._previous = function() {
        if (this._responsive) return this._responsive = !1, null != this._responsivetimeout && clearTimeout(this._responsivetimeout), this._responsivetimeout = setTimeout(function(t) {
          return function() {
            return t._responsive = !0
          }
        }(this), 1e3), 0 === this._index ? this._setIndex(this._items.length - 1) : this._setIndex(this._index - 1)
      }, n.prototype.onNextTap = function(t) {
        return this._next()
      }, n.prototype.onPreviousTap = function(t) {
        return this._previous()
      }, n.prototype.onSwipeRight = function(t) {
        return this._previous()
      }, n.prototype.onSwipeLeft = function(t) {
        return this._next()
      }, n
    }(o)
  }, {
    "../dom/add-class": 19,
    "../dom/remove-class": 21,
    "../event/pub-sub": 23,
    "./../../../bower_components/hammerjs/hammer.js": 1,
    "./animateable": 5,
    fastdom: 28
  }],
  18: [function(t, e, n) {
    var o, i, r, s, u, a = function(t, e) {
        return function() {
          return t.apply(e, arguments)
        }
      },
      c = function(t, e) {
        function n() {
          this.constructor = t
        }
        for (var o in e) h.call(e, o) && (t[o] = e[o]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
      },
      h = {}.hasOwnProperty;
    s = t("../event/pub-sub"), o = t("./animateable"), i = t("./../../../bower_components/hammerjs/hammer.js"), u = t("fastdom"), e.exports = r = function(e) {
      function n() {
        return this.onSwipeLeft = a(this.onSwipeLeft, this), this.onSwipeRight = a(this.onSwipeRight, this), this.onPreviousTap = a(this.onPreviousTap, this), this.onNextTap = a(this.onNextTap, this), this.onDeactivate = a(this.onDeactivate, this), this.onActivate = a(this.onActivate, this), n.__super__.constructor.apply(this, arguments)
      }
      return c(n, e), n.TOGGLE_DELAY = 1e4, n.prototype._index = 2, n.prototype._responsive = !0, n.prototype.activated = function() {
        return clearTimeout(this._toggleTimeout), this._toggleTimeout = setTimeout(function(t) {
          return function() {
            return t._toggle()
          }
        }(this), n.TOGGLE_DELAY)
      }, n.prototype.deactivated = function() {
        return clearTimeout(this._toggleTimeout)
      }, n.prototype._init = function() {
        var t, e, n;
        for (this._list = this.node.querySelector(".cx-user-reviews__list"), this._items = this.node.querySelectorAll(".cx-user-reviews__list li"), this._buttons = this.node.querySelector(".cx-user-reviews__buttons"), this._buttonItems = this.node.querySelectorAll(".cx-user-reviews__buttons li"), s.subscribe("user-reviews/activate", this.onActivate), s.subscribe("user-reviews/deactivate", this.onDeactivate), t = new i(this.node), t.get("swipe").set({
            velocity: .01,
            threshold: 1
          }), t.on("swipeleft", this.onSwipeLeft), t.on("swiperight", this.onSwipeRight), e = 0; e < this._buttonItems.length;) this._setupButton(this._buttonItems[e], e), e++;
        for (e = 0, n = []; e < this._items.length;) this._setupItem(this._items[e], e), n.push(e++);
        return n
      }, n.prototype._setupButton = function(t, e) {
        return new i(t, {
          recognizers: [
            [i.Tap, {
              time: 500,
              threshold: 10
            }]
          ]
        }).on("tap", function(t) {
          return function(n) {
            return t._setIndex(e + 2, !0)
          }
        }(this))
      }, n.prototype._setupItem = function(t, e) {
        return t.addEventListener("click", function(t) {
          return function(n) {
            if (e !== t._index) return n.preventDefault()
          }
        }(this), !1), new i(t, {
          recognizers: [
            [i.Tap, {
              time: 500,
              threshold: 10
            }]
          ]
        }).on("tap", function(t) {
          return function(n) {
            return e > t._index ? t._next() : e < t._index ? t._previous() : void 0
          }
        }(this))
      }, n.prototype._setIndex = function(e, o) {
        if (u.mutate(function(n) {
            return function() {
              var i, r;
              return o ? t("../dom/add-class")(n._list, "animate") : t("../dom/remove-class")(n._list, "animate"), t("../dom/remove-class")(n._list, "selected-" + n._index), t("../dom/add-class")(n._list, "selected-" + e), r = (n._index - 2 + n._buttonItems.length) % n._buttonItems.length, i = (e - 2 + n._buttonItems.length) % n._buttonItems.length, t("../dom/remove-class")(n._buttons, "selected-" + r), t("../dom/add-class")(n._buttons, "selected-" + i), n._index = e
            }
          }(this)), o && this._active && (clearTimeout(this._toggleTimeout), this._items.length > 1)) return this._toggleTimeout = setTimeout(function(t) {
          return function() {
            return t._toggle()
          }
        }(this), n.TOGGLE_DELAY)
      }, n.prototype._toggle = function() {
        return this._next()
      }, n.prototype._next = function() {
        if (this._responsive) return this._responsive = !1, null != this._responsivetimeout && clearTimeout(this._responsivetimeout), this._responsivetimeout = setTimeout(function(t) {
          return function() {
            if (t._responsive = !0, t._index + 1 === t._items.length - 1) return t._setIndex(2, !1)
          }
        }(this), 1e3), this._setIndex(this._index + 1, !0)
      }, n.prototype._previous = function() {
        if (this._responsive) return this._responsive = !1, null != this._responsivetimeout && clearTimeout(this._responsivetimeout), this._responsivetimeout = setTimeout(function(t) {
          return function() {
            if (t._responsive = !0, 1 === t._index) return t._setIndex(t._items.length - 3, !1)
          }
        }(this), 1e3), this._setIndex(this._index - 1, !0)
      }, n.prototype.onActivate = function(t) {
        return this.setActive(!0)
      }, n.prototype.onDeactivate = function(t) {
        return this.setActive(!1)
      }, n.prototype.onNextTap = function(t) {
        return this._next()
      }, n.prototype.onPreviousTap = function(t) {
        return this._previous()
      }, n.prototype.onSwipeRight = function(t) {
        return this._previous()
      }, n.prototype.onSwipeLeft = function(t) {
        return this._next()
      }, n
    }(o)
  }, {
    "../dom/add-class": 19,
    "../dom/remove-class": 21,
    "../event/pub-sub": 23,
    "./../../../bower_components/hammerjs/hammer.js": 1,
    "./animateable": 5,
    fastdom: 28
  }],
  19: [function(t, e, n) {
    e.exports = function(t, e) {
      if (null != t) return null != t.classList ? t.classList.add(e) : t.className += " " + e
    }
  }, {}],
  20: [function(t, e, n) {
    e.exports = function(t, e) {
      if (null != t) return null != t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
    }
  }, {}],
  21: [function(t, e, n) {
    e.exports = function(t, e) {
      if (null != t) return null != t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " ")
    }
  }, {}],
  22: [function(t, e, n) {
    e.exports = function() {
      return null != window._scrollable ? window._scrollable : document.documentElement.scrollTop > document.body.scrollTop ? window._scrollable = document.documentElement : document.body.scrollTop > document.documentElement.scrollTop ? window._scrollable = document.body : document.body
    }()
  }, {}],
  23: [function(t, e, n) {
    e.exports = {
      subscribe: function(t, e) {
        var n, o;
        return o = null != window._pubsub_topics ? window._pubsub_topics : window._pubsub_topics = {}, o[t] || (o[t] = {
          queue: []
        }), n = o[t].queue.push(e) - 1, {
          remove: function() {
            delete o[t].queue[n]
          }
        }
      },
      publish: function(t, e) {
        var n, o;
        o = null != window._pubsub_topics ? window._pubsub_topics : window._pubsub_topics = {}, o[t] && o[t].queue.length && (n = o[t].queue, n.forEach(function(t) {
          t(e || {})
        }))
      }
    }
  }, {}],
  24: [function(t, e, n) {
    e.exports = function(t, e) {
      var n, o;
      return "onwheel" in document || document.documentMode >= 9 ? o = function(t, e) {
        var n;
        return n = function(t) {
          var n;
          return n = 1, t.deltaMode === t.DOM_DELTA_LINE && (n = 40), e({
            node: this,
            original: t,
            dx: t.deltaX * -n,
            dy: t.deltaY * -n
          })
        }, t.addEventListener("wheel", n, !1), {
          destroy: function() {
            return t.removeEventListener("wheel", n, !1)
          }
        }
      } : (n = ["mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], o = function(t, e) {
        var o, i;
        for (o = function(t) {
            var n, o, i;
            return n = o = i = 0, t.wheelDelta && (n = t.wheelDelta), t.detail && (n = t.detail * -1), i = n, void 0 !== t.axis && t.axis === t.HORIZONTAL_AXIS && (i = 0, o = n * -1), void 0 !== t.wheelDeltaY && (i = t.wheelDeltaY / 3), void 0 !== t.wheelDeltaX && (o = t.wheelDeltaX / 3), e({
              node: this,
              original: t,
              dx: o,
              dy: i
            })
          }, i = n.length; i--;) t.addEventListener(n[i], o, !1);
        return {
          destroy: function() {
            var e;
            for (i = n.length, e = []; i--;) e.push(t.removeEventListener(n[i], o, !1));
            return e
          }
        }
      }), o(t, e)
    }
  }, {}],
  25: [function(t, e, n) {
    var o;
    e.exports = o = function() {
      function t() {}
      return t.set = function(t, e, n) {
        var o, i;
        return n ? (o = new Date, o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3), i = "; expires=" + o.toGMTString()) : i = "", document.cookie = t + "=" + e + i + "; path=/"
      }, t.get = function(t) {
        var e, n, o, i;
        for (i = t + "=", n = document.cookie.split(";"), o = 0; o < n.length;) {
          for (e = n[o];
            " " === e.charAt(0);) e = e.substring(1, e.length);
          if (0 === e.indexOf(i)) return e.substring(i.length, e.length);
          o++
        }
        return null
      }, t["delete"] = function(e) {
        return t.set(e, "", -1)
      }, t
    }()
  }, {}],
  26: [function(t, e, n) {
    var o, i, r;
    r = t("../event/pub-sub"), i = t("./../../../bower_components/hammerjs/hammer.js"), e.exports = o = function() {
      function t(t) {
        this.node = t, null != this.node && this._init()
      }
      return t.prototype._init = function() {
        var t, e, n, o, i, r;
        if (e = location.hash, e = e.substring(e.indexOf("#") + 1), null != e && e.length > 1 && (t = this.node.querySelector("#" + e + ", [data-deeplink='" + e + "']")), null != t) return i = document.documentElement.scrollTop > document.body.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop, n = document.body.querySelector(".main"), o = null != n ? i + n.getBoundingClientRect().top : 0, r = t.getBoundingClientRect().top - o, setTimeout(function(t) {
          return function() {
            return document.body.scrollTop = r + i, document.documentElement.scrollTop = r + i
          }
        }(this), 100)
      }, t
    }()
  }, {
    "../event/pub-sub": 23,
    "./../../../bower_components/hammerjs/hammer.js": 1
  }],
  27: [function(t, e, n) {
    var o, i, r, s, u = function(t, e) {
      return function() {
        return t.apply(e, arguments)
      }
    };
    r = t("../event/pub-sub"), s = t("fastdom"), o = t("./../../../bower_components/hammerjs/hammer.js"), e.exports = i = function() {
      function e(t) {
        this.node = t, this.onWheel = u(this.onWheel, this), this.onScroll = u(this.onScroll, this), this.onPanEnd = u(this.onPanEnd, this), this.onPanStart = u(this.onPanStart, this), this.onPanMove = u(this.onPanMove, this), this.onTouchMove = u(this.onTouchMove, this), this.onHeroVideoPlaying = u(this.onHeroVideoPlaying, this), this.onResize = u(this.onResize, this), this.onJumpToGet = u(this.onJumpToGet, this), null != this.node && (this._init(), r.subscribe("jump/get", this.onJumpToGet), r.subscribe("window/resize", this.onResize))
      }
      var n;
      return n = 1300, e.prototype._active = !0, e.prototype._moveable = !1, e.prototype._freeScrolling = !1, e.prototype._scrollableMoveDone = !1, e.prototype._init = function() {
        return this._slidesNode = this.node.querySelector(".vx-home__slides"), this._scrollableNode = this.node.querySelector(".vx-home__scrollable"), this._heroPhoneScreenNode = this.node.querySelector(".cx-hero-phone .cx-phone__device__screen"), this._step1PhoneContentNode = this.node.querySelector(".cx-step-1-phone .cx-phone__device__screen__content"), this._getSections(), this._check(), this._heroAlternativeContentNode = this._step1PhoneContentNode.cloneNode(!0), this._heroAlternativeContentNode.autoplay = !1, this._heroPhoneScreenNode.appendChild(this._heroAlternativeContentNode),
          this._heroAlternativeContentNode.style.opacity = "0"
      }, e.prototype._check = function() {
        if ("absolute" === window.getComputedStyle(this._slidesNode).getPropertyValue("position")) {
          if (!this._moveable) return this._moveable = !0, document.body.style.overflow = "hidden", this._listen(), window.scrollTo(0, 0), document.body.scrollTop = 0, document.documentElement.scrollTop = 0, setTimeout(function(t) {
            return function() {
              return window.scrollTo(0, 0), document.body.scrollTop = 0, document.documentElement.scrollTop = 0
            }
          }(this), 500)
        } else if (this._moveable) return this._moveable = !1, this._reset(), document.body.style.overflow = "", this._unlisten()
      }, e.prototype._listen = function() {
        return this._wheel = t("../io/wheel")(document.documentElement, this.onWheel), document.addEventListener("touchmove", this.onTouchMove, !1), window.addEventListener("scroll", this.onScroll, !1), this._hammer = new o(this._slidesNode, {
          recognizers: [
            [o.Pan, {
              direction: o.DIRECTION_ALL,
              threshold: 1
            }]
          ]
        }), this._hammer.on("panstart", this.onPanStart), this._hammer.on("panend", this.onPanEnd), this._hammer.on("panmove", this.onPanMove)
      }, e.prototype._unlisten = function() {
        return this._wheel.destroy(), document.removeEventListener("touchmove", this.onTouchMove, !1), this._hammer.destroy()
      }, e.prototype._reset = function() {}, e.prototype._getSections = function() {
        var t;
        return t = this.node.querySelectorAll(".cx-step"), this._totalSections = t.length + 1, this._currentIndex = 0, this._mainElement = document.body.querySelector(".main"), this._headerElement = document.body.querySelector(".cx-header"), this._scrollableElement = document.body.querySelector(".cx-scrollable")
      }, e.prototype._prev = function() {
        var e;
        if (this._currentIndex > 0) return t("../dom/remove-class")(this.node, "section-" + this._currentIndex), this._currentIndex--, t("../dom/add-class")(this.node, "section-" + this._currentIndex), this._pause(), 0 === this._currentIndex ? (t("../dom/remove-class")(this._headerElement, "off-top"), this._heroAlternativeContentNode.pause(), this._hideHeroVideo()) : 1 === this._currentIndex && (this._heroAlternativeContentNode.currentTime = 0, this._heroAlternativeContentNode.play()), e = this.node.querySelector(".cx-step-3-phone .cx-phone"), 3 === this._currentIndex ? t("../dom/add-class")(e, "in-view") : t("../dom/remove-class")(e, "in-view"), r.publish("home/previous")
      }, e.prototype._next = function() {
        var e;
        return this._currentIndex >= this._totalSections - 1 ? this._stopForceScroll() : (t("../dom/add-class")(this._headerElement, "off-top"), t("../dom/remove-class")(this.node, "section-" + this._currentIndex), this._currentIndex++, t("../dom/add-class")(this.node, "section-" + this._currentIndex), this._pause(), 1 === this._currentIndex ? (t("../dom/add-class")(this._headerElement, "off-top"), this._heroAlternativeContentNode.currentTime = 0, this._heroAlternativeContentNode.play(), this._showHeroVideo()) : 2 === this._currentIndex && this._heroAlternativeContentNode.pause(), e = this.node.querySelector(".cx-step-3-phone .cx-phone"), 3 === this._currentIndex ? t("../dom/add-class")(e, "in-view") : t("../dom/remove-class")(e, "in-view")), r.publish("home/next")
      }, e.prototype._hideHeroVideo = function() {
        return clearTimeout(this._showVideoTimeout), this._heroAlternativeContentNode.style.opacity = "0", this._heroAlternativeContentNode.removeEventListener("playing", this.onHeroVideoPlaying)
      }, e.prototype._showHeroVideo = function() {
        return this._heroAlternativeContentNode.readyState >= 4 ? this._heroAlternativeContentNode.style.opacity = "1" : (this._heroAlternativeContentNode.addEventListener("playing", this.onHeroVideoPlaying, !1), this._showVideoTimeout = setTimeout(function(t) {
          return function() {
            return t._heroAlternativeContentNode.style.opacity = "1"
          }
        }(this), 1e3))
      }, e.prototype._pause = function() {
        return this._active = !1, null != this._paused && clearTimeout(this._paused), this._paused = setTimeout(function(t) {
          return function() {
            if (!t._freeScrolling) return t._active = !0, console.log("reset scroll"), window.scrollTo(0, 0), document.body.scrollTop = 0, document.documentElement.scrollTop = 0
          }
        }(this), n)
      }, e.prototype._stopForceScroll = function() {
        return this._active = !1, console.log("_stopForceScroll"), t("../dom/remove-class")(this._scrollableNode, "instant"), t("../dom/add-class")(this._scrollableNode, "visible"), this._userReviews = document.body.querySelector(".cx-user-reviews"), t("../dom/add-class")(this._userReviews, "in"), setTimeout(function(e) {
          return function() {
            return t("../dom/remove-class")(e._mainElement, "full-height"), document.body.style.overflow = "", e._scrollableMoveDone = !0, e._freeScrolling = !0, r.publish("user-reviews/activate")
          }
        }(this), n)
      }, e.prototype._startForceScroll = function() {
        return document.body.scrollTop = 0, document.documentElement.scrollTop = 0, console.log("_startForceScroll"), t("../dom/remove-class")(this._scrollableNode, "instant"), t("../dom/remove-class")(this._scrollableNode, "visible"), t("../dom/add-class")(this._mainElement, "full-height"), document.body.style.overflow = "hidden", this._freeScrolling = !1, this._active = !1, this._scrollableMoveDone = !1, setTimeout(function(t) {
          return function() {
            return t._active = !0, r.publish("user-reviews/deactivate"), window.scrollTo(0, 0)
          }
        }(this), n)
      }, e.prototype._resetToJumpToGet = function() {
        return this._active = !1, this._scrollableMoveDone = !0, this._freeScrolling = !0, null != this._currentIndex && t("../dom/remove-class")(this.node, "section-" + this._currentIndex), this._currentIndex = this._totalSections - 1, t("../dom/add-class")(this.node, "section-" + this._currentIndex), console.log("_resetToJumpToGet"), t("../dom/add-class")(this._scrollableNode, "visible"), t("../dom/add-class")(this._scrollableNode, "instant"), t("../dom/add-class")(this._headerElement, "off-top"), t("../dom/remove-class")(this._mainElement, "full-height"), document.body.style.overflow = ""
      }, e.prototype.onJumpToGet = function(t) {
        return this._resetToJumpToGet()
      }, e.prototype.onResize = function(t) {
        return this._check()
      }, e.prototype.onHeroVideoPlaying = function(t) {
        return console.log("onHeroVideoPlaying"), clearTimeout(this._showVideoTimeout), this._heroAlternativeContentNode.removeEventListener("playing", this.onHeroVideoPlaying), this._heroAlternativeContentNode.style.opacity = "1"
      }, e.prototype.onTouchMove = function(t) {
        if (console.log("onTouchMove", this._freeScrolling), !this._freeScrolling) return t.preventDefault()
      }, e.prototype.onPanMove = function(t) {
        if (console.log("onPanMove", this._freeScrolling), !this._freeScrolling) return t.srcEvent.stopPropagation(), t.srcEvent.preventDefault(), t.preventDefault()
      }, e.prototype.onPanStart = function(t) {
        if (console.log("onPanStart", this._freeScrolling), !this._freeScrolling) return t.srcEvent.stopPropagation(), t.srcEvent.preventDefault(), t.preventDefault()
      }, e.prototype.onPanEnd = function(t) {
        var e;
        if (console.log("onPanEnd", this._freeScrolling), this._freeScrolling) {
          if (e = -this._scrollableNode.getBoundingClientRect().top + 82, t.overallVelocityY > .3 && t.distance > 20 && e < 10) return t.srcEvent.stopPropagation(), t.srcEvent.preventDefault(), t.preventDefault(), this._scrollableMoveDone = !1, this._startForceScroll()
        } else if (t.srcEvent.stopPropagation(), t.srcEvent.preventDefault(), t.preventDefault(), this._active) {
          if (t.overallVelocityY < -.3 && t.distance > 20) return this._next();
          if (t.overallVelocityY > .3 && t.distance > 20) return this._prev()
        }
      }, e.prototype.onScroll = function(t) {
        var e, n;
        return this._freeScrolling ? (n = -this._scrollableNode.getBoundingClientRect().top + 82, e = n - this._scrollTop, e < -5 && n < 10 && (this._scrollableMoveDone = !1, this._startForceScroll()), this._scrollTop = n) : t.preventDefault()
      }, e.prototype.onWheel = function(t) {
        var e;
        if (this._freeScrolling) {
          if (e = -this._scrollableNode.getBoundingClientRect().top + 82, t.dy > 20 && e < 10) return t.original.preventDefault(), this._scrollableMoveDone = !1, this._startForceScroll()
        } else if (t.original.preventDefault(), this._active) {
          if (t.dy > 20) return this._prev();
          if (t.dy < -20) return this._next()
        }
      }, e
    }()
  }, {
    "../dom/add-class": 19,
    "../dom/remove-class": 21,
    "../event/pub-sub": 23,
    "../io/wheel": 24,
    "./../../../bower_components/hammerjs/hammer.js": 1,
    fastdom: 28
  }],
  28: [function(t, e, n) {
    ! function(t) {
      "use strict";

      function n() {
        var e = this;
        e.reads = [], e.writes = [], e.raf = c.bind(t), a("initialized", e)
      }

      function o(t) {
        t.scheduled || (t.scheduled = !0, t.raf(i.bind(null, t)), a("flush scheduled"))
      }

      function i(t) {
        a("flush");
        var e, n = t.writes,
          i = t.reads;
        try {
          a("flushing reads", i.length), r(i), a("flushing writes", n.length), r(n)
        } catch (s) {
          e = s
        }
        if (t.scheduled = !1, (i.length || n.length) && o(t), e) {
          if (a("task errored", e.message), !t["catch"]) throw e;
          t["catch"](e)
        }
      }

      function r(t) {
        a("run tasks");
        for (var e; e = t.shift();) e()
      }

      function s(t, e) {
        var n = t.indexOf(e);
        return !!~n && !!t.splice(n, 1)
      }

      function u(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
      }
      var a = function() {},
        c = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
          return setTimeout(t, 16)
        };
      n.prototype = {
        constructor: n,
        measure: function(t, e) {
          a("measure");
          var n = e ? t.bind(e) : t;
          return this.reads.push(n), o(this), n
        },
        mutate: function(t, e) {
          a("mutate");
          var n = e ? t.bind(e) : t;
          return this.writes.push(n), o(this), n
        },
        clear: function(t) {
          return a("clear", t), s(this.reads, t) || s(this.writes, t)
        },
        extend: function(t) {
          if (a("extend", t), "object" != typeof t) throw new Error("expected object");
          var e = Object.create(this);
          return u(e, t), e.fastdom = this, e.initialize && e.initialize(), e
        },
        "catch": null
      };
      var h = t.fastdom = t.fastdom || new n;
      "f" == (typeof define)[0] ? define(function() {
        return h
      }): "o" == (typeof e)[0] && (e.exports = h)
    }("undefined" != typeof window ? window : this)
  }, {}],
  29: [function(t, e, n) {
    "use strict";

    function o(t) {
      return t && "object" == typeof t && "default" in t ? t["default"] : t
    }

    function i(t, e, n, o) {
      function i(e) {
        Boolean(t[n]) === Boolean(o) && e.stopImmediatePropagation(), delete t[n]
      }
      return t.addEventListener(e, i, !1), i
    }

    function r(t, e, n, o) {
      function i() {
        return n[e]
      }

      function r(t) {
        n[e] = t
      }
      o && r(t[e]), Object.defineProperty(t, e, {
        get: i,
        set: r
      })
    }

    function s(t, e, n) {
      n.addEventListener(e, function() {
        return t.dispatchEvent(new Event(e))
      })
    }

    function u(t, e) {
      Promise.resolve().then(function() {
        t.dispatchEvent(new Event(e))
      })
    }

    function a(t) {
      var e = new Audio;
      return s(t, "play", e), s(t, "playing", e), s(t, "pause", e), e.crossOrigin = t.crossOrigin, e.src = t.src || t.currentSrc || "data:", e
    }

    function c(t, e, n) {
      (v || 0) + 200 < Date.now() && (t[T] = !0, v = Date.now()), n || (t.currentTime = e), S[++I % 3] = 100 * e | 0
    }

    function h(t) {
      return t.driver.currentTime >= t.video.duration
    }

    function l(t) {
      var e = this;
      e.video.readyState >= e.video.HAVE_FUTURE_DATA ? (e.hasAudio || (e.driver.currentTime = e.video.currentTime + t * e.video.playbackRate / 1e3, e.video.loop && h(e) && (e.driver.currentTime = 0)), c(e.video, e.driver.currentTime)) : e.video.networkState !== e.video.NETWORK_IDLE || e.video.buffered.length || e.video.load(), e.video.ended && (delete e.video[T], e.video.pause(!0))
    }

    function p() {
      var t = this,
        e = t[w];
      return t.webkitDisplayingFullscreen ? void t[x]() : ("data:" !== e.driver.src && e.driver.src !== t.src && (c(t, 0, !0), e.driver.src = t.src), void(t.paused && (e.paused = !1, t.buffered.length || t.load(), e.driver.play(), e.updater.start(), e.hasAudio || (u(t, "play"), e.video.readyState >= e.video.HAVE_ENOUGH_DATA && u(t, "playing")))))
    }

    function d(t) {
      var e = this,
        n = e[w];
      n.driver.pause(), n.updater.stop(), e.webkitDisplayingFullscreen && e[E](), n.paused && !t || (n.paused = !0, n.hasAudio || u(e, "pause"), e.ended && (e[T] = !0, u(e, "ended")))
    }

    function m(t, e) {
      var n = t[w] = {};
      n.paused = !0, n.hasAudio = e, n.video = t, n.updater = b.frameIntervalometer(l.bind(n)), e ? n.driver = a(t) : (t.addEventListener("canplay", function() {
        t.paused || u(t, "playing")
      }), n.driver = {
        src: t.src || t.currentSrc || "data:",
        muted: !0,
        paused: !0,
        pause: function() {
          n.driver.paused = !0
        },
        play: function() {
          n.driver.paused = !1, h(n) && c(t, 0)
        },
        get ended() {
          return h(n)
        }
      }), t.addEventListener("emptied", function() {
        var e = !n.driver.src || "data:" === n.driver.src;
        n.driver.src && n.driver.src !== t.src && (c(t, 0, !0), n.driver.src = t.src, e ? n.driver.play() : n.updater.stop())
      }, !1), t.addEventListener("webkitbeginfullscreen", function() {
        t.paused ? e && !n.driver.buffered.length && n.driver.load() : (t.pause(), t[x]())
      }), e && (t.addEventListener("webkitendfullscreen", function() {
        n.driver.currentTime = t.currentTime
      }), t.addEventListener("seeking", function() {
        S.indexOf(100 * t.currentTime | 0) < 0 && (n.driver.currentTime = t.currentTime)
      }))
    }

    function f(t) {
      var e = t[w];
      t[x] = t.play, t[E] = t.pause, t.play = p, t.pause = d, r(t, "paused", e.driver), r(t, "muted", e.driver, !0), r(t, "playbackRate", e.driver, !0), r(t, "ended", e.driver), r(t, "loop", e.driver, !0), i(t, "seeking"), i(t, "seeked"), i(t, "timeupdate", T, !1), i(t, "ended", T, !1)
    }

    function _(t, e, n) {
      void 0 === e && (e = !0), void 0 === n && (n = !0), n && !g || t[w] || (m(t, e), f(t), t.classList.add("IIV"), !e && t.autoplay && t.play(), /iPhone|iPod|iPad/.test(navigator.platform) || console.warn("iphone-inline-video is not guaranteed to work in emulated environments"))
    }
    var v, y = o(t("poor-mans-symbol")),
      b = t("intervalometer"),
      g = "object-fit" in document.head.style && /iPhone|iPod/i.test(navigator.userAgent) && !matchMedia("(-webkit-video-playable-inline)").matches,
      w = y(),
      T = y(),
      x = y("nativeplay"),
      E = y("nativepause"),
      S = [],
      I = 0;
    _.isWhitelisted = g, e.exports = _
  }, {
    intervalometer: 30,
    "poor-mans-symbol": 31
  }],
  30: [function(t, e, n) {
    "use strict";

    function o(t, e, n, o) {
      function i(n) {
        r = e(i, o), t(n - (s || n)), s = n
      }
      var r, s;
      return {
        start: function() {
          r || i(0)
        },
        stop: function() {
          n(r), r = null, s = 0
        }
      }
    }

    function i(t) {
      return o(t, requestAnimationFrame, cancelAnimationFrame)
    }

    function r(t, e) {
      return o(t, setTimeout, clearTimeout, e)
    }
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.intervalometer = o, n.frameIntervalometer = i, n.timerIntervalometer = r
  }, {}],
  31: [function(t, e, n) {
    "use strict";
    var o = "undefined" == typeof Symbol ? function(t) {
      return "@" + (t || "@") + Math.random()
    } : Symbol;
    e.exports = o
  }, {}],
  32: [function(t, e, n) {
    ! function(t) {
      "use strict";

      function e(t) {
        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
        return t.toLowerCase()
      }

      function n(t) {
        return "string" != typeof t && (t = String(t)), t
      }

      function o(t) {
        var e = {
          next: function() {
            var e = t.shift();
            return {
              done: void 0 === e,
              value: e
            }
          }
        };
        return v.iterable && (e[Symbol.iterator] = function() {
          return e
        }), e
      }

      function i(t) {
        this.map = {}, t instanceof i ? t.forEach(function(t, e) {
          this.append(e, t)
        }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
          this.append(e, t[e])
        }, this)
      }

      function r(t) {
        return t.bodyUsed ? Promise.reject(new TypeError("Already read")) : void(t.bodyUsed = !0)
      }

      function s(t) {
        return new Promise(function(e, n) {
          t.onload = function() {
            e(t.result)
          }, t.onerror = function() {
            n(t.error)
          }
        })
      }

      function u(t) {
        var e = new FileReader,
          n = s(e);
        return e.readAsArrayBuffer(t), n
      }

      function a(t) {
        var e = new FileReader,
          n = s(e);
        return e.readAsText(t), n
      }

      function c(t) {
        for (var e = new Uint8Array(t), n = new Array(e.length), o = 0; o < e.length; o++) n[o] = String.fromCharCode(e[o]);
        return n.join("")
      }

      function h(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer
      }

      function l() {
        return this.bodyUsed = !1, this._initBody = function(t) {
          if (this._bodyInit = t, t)
            if ("string" == typeof t) this._bodyText = t;
            else if (v.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
          else if (v.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
          else if (v.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
          else if (v.arrayBuffer && v.blob && b(t)) this._bodyArrayBuffer = h(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
          else {
            if (!v.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !g(t)) throw new Error("unsupported BodyInit type");
            this._bodyArrayBuffer = h(t)
          } else this._bodyText = "";
          this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : v.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, v.blob && (this.blob = function() {
          var t = r(this);
          if (t) return t;
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData) throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? r(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(u)
        }), this.text = function() {
          var t = r(this);
          if (t) return t;
          if (this._bodyBlob) return a(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(c(this._bodyArrayBuffer));
          if (this._bodyFormData) throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText)
        }, v.formData && (this.formData = function() {
          return this.text().then(m)
        }), this.json = function() {
          return this.text().then(JSON.parse)
        }, this
      }

      function p(t) {
        var e = t.toUpperCase();
        return w.indexOf(e) > -1 ? e : t
      }

      function d(t, e) {
        e = e || {};
        var n = e.body;
        if ("string" == typeof t) this.url = t;
        else {
          if (t.bodyUsed) throw new TypeError("Already read");
          this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new i(t.headers)), this.method = t.method, this.mode = t.mode, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0)
        }
        if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new i(e.headers)), this.method = p(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(n)
      }

      function m(t) {
        var e = new FormData;
        return t.trim().split("&").forEach(function(t) {
          if (t) {
            var n = t.split("="),
              o = n.shift().replace(/\+/g, " "),
              i = n.join("=").replace(/\+/g, " ");
            e.append(decodeURIComponent(o), decodeURIComponent(i))
          }
        }), e
      }

      function f(t) {
        var e = new i;
        return t.split("\r\n").forEach(function(t) {
          var n = t.split(":"),
            o = n.shift().trim();
          if (o) {
            var i = n.join(":").trim();
            e.append(o, i)
          }
        }), e
      }

      function _(t, e) {
        e || (e = {}), this.type = "default", this.status = "status" in e ? e.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new i(e.headers), this.url = e.url || "", this._initBody(t)
      }
      if (!t.fetch) {
        var v = {
          searchParams: "URLSearchParams" in t,
          iterable: "Symbol" in t && "iterator" in Symbol,
          blob: "FileReader" in t && "Blob" in t && function() {
            try {
              return new Blob, !0
            } catch (t) {
              return !1
            }
          }(),
          formData: "FormData" in t,
          arrayBuffer: "ArrayBuffer" in t
        };
        if (v.arrayBuffer) var y = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
          b = function(t) {
            return t && DataView.prototype.isPrototypeOf(t)
          },
          g = ArrayBuffer.isView || function(t) {
            return t && y.indexOf(Object.prototype.toString.call(t)) > -1
          };
        i.prototype.append = function(t, o) {
          t = e(t), o = n(o);
          var i = this.map[t];
          i || (i = [], this.map[t] = i), i.push(o)
        }, i.prototype["delete"] = function(t) {
          delete this.map[e(t)]
        }, i.prototype.get = function(t) {
          var n = this.map[e(t)];
          return n ? n[0] : null
        }, i.prototype.getAll = function(t) {
          return this.map[e(t)] || []
        }, i.prototype.has = function(t) {
          return this.map.hasOwnProperty(e(t))
        }, i.prototype.set = function(t, o) {
          this.map[e(t)] = [n(o)]
        }, i.prototype.forEach = function(t, e) {
          Object.getOwnPropertyNames(this.map).forEach(function(n) {
            this.map[n].forEach(function(o) {
              t.call(e, o, n, this)
            }, this)
          }, this)
        }, i.prototype.keys = function() {
          var t = [];
          return this.forEach(function(e, n) {
            t.push(n)
          }), o(t)
        }, i.prototype.values = function() {
          var t = [];
          return this.forEach(function(e) {
            t.push(e)
          }), o(t)
        }, i.prototype.entries = function() {
          var t = [];
          return this.forEach(function(e, n) {
            t.push([n, e])
          }), o(t)
        }, v.iterable && (i.prototype[Symbol.iterator] = i.prototype.entries);
        var w = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        d.prototype.clone = function() {
          return new d(this, {
            body: this._bodyInit
          })
        }, l.call(d.prototype), l.call(_.prototype), _.prototype.clone = function() {
          return new _(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new i(this.headers),
            url: this.url
          })
        }, _.error = function() {
          var t = new _(null, {
            status: 0,
            statusText: ""
          });
          return t.type = "error", t
        };
        var T = [301, 302, 303, 307, 308];
        _.redirect = function(t, e) {
          if (T.indexOf(e) === -1) throw new RangeError("Invalid status code");
          return new _(null, {
            status: e,
            headers: {
              location: t
            }
          })
        }, t.Headers = i, t.Request = d, t.Response = _, t.fetch = function(t, e) {
          return new Promise(function(n, o) {
            var i = new d(t, e),
              r = new XMLHttpRequest;
            r.onload = function() {
              var t = {
                status: r.status,
                statusText: r.statusText,
                headers: f(r.getAllResponseHeaders() || "")
              };
              t.url = "responseURL" in r ? r.responseURL : t.headers.get("X-Request-URL");
              var e = "response" in r ? r.response : r.responseText;
              n(new _(e, t))
            }, r.onerror = function() {
              o(new TypeError("Network request failed"))
            }, r.ontimeout = function() {
              o(new TypeError("Network request failed"))
            }, r.open(i.method, i.url, !0), "include" === i.credentials && (r.withCredentials = !0), "responseType" in r && v.blob && (r.responseType = "blob"), i.headers.forEach(function(t, e) {
              r.setRequestHeader(e, t)
            }), r.send("undefined" == typeof i._bodyInit ? null : i._bodyInit)
          })
        }, t.fetch.polyfill = !0
      }
    }("undefined" != typeof self ? self : this)
  }, {}]
}, {}, [2]);
