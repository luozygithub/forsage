/* eslint-disable */
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[939], {
    4184: function (e, t) {
        var n;
        !function () {
            "use strict";
            var r = {}.hasOwnProperty;

            function i() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var o = typeof n;
                        if ("string" === o || "number" === o) e.push(n); else if (Array.isArray(n)) {
                            if (n.length) {
                                var a = i.apply(null, n);
                                a && e.push(a)
                            }
                        } else if ("object" === o) {
                            if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                e.push(n.toString());
                                continue
                            }
                            for (var s in n) r.call(n, s) && n[s] && e.push(s)
                        }
                    }
                }
                return e.join(" ")
            }

            e.exports ? (i.default = i, e.exports = i) : void 0 === (n = function () {
                return i
            }.apply(t, [])) || (e.exports = n)
        }()
    }, 7994: function () {
    }, 1876: function (e, t, n) {
        "use strict";
        n.d(t, {
            UQ: function () {
                return A
            }, Qd: function () {
                return z
            }, on: function () {
                return J
            }, Ol: function () {
                return te
            }, Mt: function () {
                return re
            }
        });
        var r = n(7294);

        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(n), !0).forEach((function (t) {
                    l(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function u(e, t, n) {
            return t && s(e.prototype, t), n && s(e, n), Object.defineProperty(e, "prototype", {writable: !1}), e
        }

        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function c() {
            return (c = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function d(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(e, "prototype", {writable: !1}), t && f(e, t)
        }

        function p(e) {
            return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function f(e, t) {
            return (f = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function h(e, t) {
            if (null == e) return {};
            var n, r, i = function (e, t) {
                if (null == e) return {};
                var n, r, i = {}, o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }

        function m(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function v(e, t) {
            if (t && ("object" === typeof t || "function" === typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return m(e)
        }

        function y(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = p(e);
                if (t) {
                    var i = p(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return v(this, n)
            }
        }

        function b(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null == n) return;
                var r, i, o = [], a = !0, s = !1;
                try {
                    for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0) ;
                } catch (u) {
                    s = !0, i = u
                } finally {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s) throw i
                    }
                }
                return o
            }(e, t) || g(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function w(e) {
            return function (e) {
                if (Array.isArray(e)) return S(e)
            }(e) || function (e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(e) || g(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function g(e, t) {
            if (e) {
                if ("string" === typeof e) return S(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? S(e, t) : void 0
            }
        }

        function S(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var E = u((function e(t) {
            var n = this, r = t.expanded, i = void 0 === r ? [] : r, s = t.allowMultipleExpanded, u = void 0 !== s && s,
                c = t.allowZeroExpanded, d = void 0 !== c && c;
            a(this, e), l(this, "expanded", void 0), l(this, "allowMultipleExpanded", void 0), l(this, "allowZeroExpanded", void 0), l(this, "toggleExpanded", (function (e) {
                return n.isItemDisabled(e) ? n : n.isItemExpanded(e) ? n.augment({
                    expanded: n.expanded.filter((function (t) {
                        return t !== e
                    }))
                }) : n.augment({expanded: n.allowMultipleExpanded ? [].concat(w(n.expanded), [e]) : [e]})
            })), l(this, "isItemDisabled", (function (e) {
                var t = n.isItemExpanded(e), r = 1 === n.expanded.length;
                return Boolean(t && !n.allowZeroExpanded && r)
            })), l(this, "isItemExpanded", (function (e) {
                return -1 !== n.expanded.indexOf(e)
            })), l(this, "getPanelAttributes", (function (e, t) {
                var r = null !== t && void 0 !== t ? t : n.isItemExpanded(e);
                return {
                    role: n.allowMultipleExpanded ? void 0 : "region",
                    "aria-hidden": n.allowMultipleExpanded ? !r : void 0,
                    "aria-labelledby": n.getButtonId(e),
                    id: n.getPanelId(e),
                    hidden: !r || void 0
                }
            })), l(this, "getHeadingAttributes", (function () {
                return {role: "heading"}
            })), l(this, "getButtonAttributes", (function (e, t) {
                var r = null !== t && void 0 !== t ? t : n.isItemExpanded(e), i = n.isItemDisabled(e);
                return {
                    id: n.getButtonId(e),
                    "aria-disabled": i,
                    "aria-expanded": r,
                    "aria-controls": n.getPanelId(e),
                    role: "button",
                    tabIndex: 0
                }
            })), l(this, "getPanelId", (function (e) {
                return "accordion__panel-".concat(e)
            })), l(this, "getButtonId", (function (e) {
                return "accordion__heading-".concat(e)
            })), l(this, "augment", (function (t) {
                return new e(o({
                    expanded: n.expanded,
                    allowMultipleExpanded: n.allowMultipleExpanded,
                    allowZeroExpanded: n.allowZeroExpanded
                }, t))
            })), this.expanded = i, this.allowMultipleExpanded = u, this.allowZeroExpanded = d
        })), O = (0, r.createContext)(null), P = function (e) {
            d(n, e);
            var t = y(n);

            function n() {
                var e;
                a(this, n);
                for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                return l(m(e = t.call.apply(t, [this].concat(i))), "state", new E({
                    expanded: e.props.preExpanded,
                    allowMultipleExpanded: e.props.allowMultipleExpanded,
                    allowZeroExpanded: e.props.allowZeroExpanded
                })), l(m(e), "toggleExpanded", (function (t) {
                    e.setState((function (e) {
                        return e.toggleExpanded(t)
                    }), (function () {
                        e.props.onChange && e.props.onChange(e.state.expanded)
                    }))
                })), l(m(e), "isItemDisabled", (function (t) {
                    return e.state.isItemDisabled(t)
                })), l(m(e), "isItemExpanded", (function (t) {
                    return e.state.isItemExpanded(t)
                })), l(m(e), "getPanelAttributes", (function (t, n) {
                    return e.state.getPanelAttributes(t, n)
                })), l(m(e), "getHeadingAttributes", (function () {
                    return e.state.getHeadingAttributes()
                })), l(m(e), "getButtonAttributes", (function (t, n) {
                    return e.state.getButtonAttributes(t, n)
                })), e
            }

            return u(n, [{
                key: "render", value: function () {
                    var e = this.state, t = e.allowZeroExpanded, n = e.allowMultipleExpanded;
                    return (0, r.createElement)(O.Provider, {
                        value: {
                            allowMultipleExpanded: n,
                            allowZeroExpanded: t,
                            toggleExpanded: this.toggleExpanded,
                            isItemDisabled: this.isItemDisabled,
                            isItemExpanded: this.isItemExpanded,
                            getPanelAttributes: this.getPanelAttributes,
                            getHeadingAttributes: this.getHeadingAttributes,
                            getButtonAttributes: this.getButtonAttributes
                        }
                    }, this.props.children || null)
                }
            }]), n
        }(r.PureComponent);
        l(P, "defaultProps", {allowMultipleExpanded: !1, allowZeroExpanded: !1});
        var I, x = function (e) {
                d(n, e);
                var t = y(n);

                function n() {
                    var e;
                    a(this, n);
                    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                    return l(m(e = t.call.apply(t, [this].concat(i))), "renderChildren", (function (t) {
                        return t ? e.props.children(t) : null
                    })), e
                }

                return u(n, [{
                    key: "render", value: function () {
                        return (0, r.createElement)(O.Consumer, null, this.renderChildren)
                    }
                }]), n
            }(r.PureComponent), M = ["className", "allowMultipleExpanded", "allowZeroExpanded", "onChange", "preExpanded"],
            A = function (e) {
                var t = e.className, n = void 0 === t ? "accordion" : t, i = e.allowMultipleExpanded,
                    o = e.allowZeroExpanded, a = e.onChange, s = e.preExpanded, u = h(e, M);
                return (0, r.createElement)(P, {
                    preExpanded: s,
                    allowMultipleExpanded: i,
                    allowZeroExpanded: o,
                    onChange: a
                }, (0, r.createElement)("div", c({"data-accordion-component": "Accordion", className: n}, u)))
            };
        !function (e) {
            e.Accordion = "Accordion", e.AccordionItem = "AccordionItem", e.AccordionItemButton = "AccordionItemButton", e.AccordionItemHeading = "AccordionItemHeading", e.AccordionItemPanel = "AccordionItemPanel"
        }(I || (I = {}));
        var R = I, _ = 0;
        var T = r.useId || function () {
            var e = _;
            return _ += 1, "raa-".concat(e)
        }, j = /[\u0009\u000a\u000c\u000d\u0020]/g;

        function k(e) {
            return "" !== e && !j.test(e) || (console.error('uuid must be a valid HTML5 id but was given "'.concat(e, '", ASCII whitespaces are forbidden')), !1)
        }

        var C = (0, r.createContext)(null), L = function (e) {
            var t = e.children, n = e.uuid, i = e.accordionContext, o = e.dangerouslySetExpanded, a = function () {
                i.toggleExpanded(n)
            }, s = function (e) {
                var i = null !== o && void 0 !== o ? o : e.isItemExpanded(n), s = e.isItemDisabled(n),
                    u = e.getPanelAttributes(n, o), l = e.getHeadingAttributes(n), c = e.getButtonAttributes(n, o);
                return (0, r.createElement)(C.Provider, {
                    value: {
                        uuid: n,
                        expanded: i,
                        disabled: s,
                        toggleExpanded: a,
                        panelAttributes: u,
                        headingAttributes: l,
                        buttonAttributes: c
                    }
                }, t)
            };
            return (0, r.createElement)(x, null, s)
        }, D = function (e) {
            return (0, r.createElement)(x, null, (function (t) {
                return (0, r.createElement)(L, c({}, e, {accordionContext: t}))
            }))
        }, N = function (e) {
            var t = e.children, n = function (e) {
                return e ? t(e) : null
            };
            return (0, r.createElement)(C.Consumer, null, n)
        }, W = ["uuid", "dangerouslySetExpanded", "className", "activeClassName"], z = function (e) {
            var t = e.uuid, n = e.dangerouslySetExpanded, i = e.className, o = void 0 === i ? "accordion__item" : i,
                a = e.activeClassName, s = h(e, W), u = b((0, r.useState)(T()), 1)[0],
                l = null !== t && void 0 !== t ? t : u, d = function (e) {
                    var t = e.expanded && a ? a : o;
                    return (0, r.createElement)("div", c({"data-accordion-component": "AccordionItem", className: t}, s))
                };
            return k(l.toString()), s.id && k(s.id), (0, r.createElement)(D, {
                uuid: l,
                dangerouslySetExpanded: n
            }, (0, r.createElement)(N, null, d))
        };

        function H(e) {
            return e && (e.matches('[data-accordion-component="Accordion"]') ? e : H(e.parentElement))
        }

        function U(e) {
            var t = H(e);
            return t && Array.from(t.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))
        }

        z.displayName = R.AccordionItem;
        var B = "End", F = "Enter", Z = "Home", K = " ", V = "Spacebar", X = "ArrowUp", Y = "ArrowDown",
            q = "ArrowLeft", Q = "ArrowRight", G = ["toggleExpanded", "className"], $ = function (e) {
                var t = e.toggleExpanded, n = e.className, i = void 0 === n ? "accordion__button" : n, o = h(e, G);
                return o.id && k(o.id), (0, r.createElement)("div", c({className: i}, o, {
                    role: "button",
                    tabIndex: 0,
                    onClick: t,
                    onKeyDown: function (e) {
                        var n = e.key;
                        if (n !== F && n !== K && n !== V || (e.preventDefault(), t()), e.target instanceof HTMLElement) switch (n) {
                            case Z:
                                e.preventDefault(), function (e) {
                                    var t = (U(e) || [])[0];
                                    t && t.focus()
                                }(e.target);
                                break;
                            case B:
                                e.preventDefault(), function (e) {
                                    var t = U(e) || [], n = t[t.length - 1];
                                    n && n.focus()
                                }(e.target);
                                break;
                            case q:
                            case X:
                                e.preventDefault(), function (e) {
                                    var t = U(e) || [], n = t.indexOf(e);
                                    if (-1 !== n) {
                                        var r = t[n - 1];
                                        r && r.focus()
                                    }
                                }(e.target);
                                break;
                            case Q:
                            case Y:
                                e.preventDefault(), function (e) {
                                    var t = U(e) || [], n = t.indexOf(e);
                                    if (-1 !== n) {
                                        var r = t[n + 1];
                                        r && r.focus()
                                    }
                                }(e.target)
                        }
                    },
                    "data-accordion-component": "AccordionItemButton"
                }))
            }, J = function (e) {
                return (0, r.createElement)(N, null, (function (t) {
                    var n = t.toggleExpanded, i = t.buttonAttributes;
                    return (0, r.createElement)($, c({toggleExpanded: n}, e, i))
                }))
            }, ee = function (e) {
                d(n, e);
                var t = y(n);

                function n() {
                    var e;
                    a(this, n);
                    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                    return l(m(e = t.call.apply(t, [this].concat(i))), "ref", void 0), l(m(e), "setRef", (function (t) {
                        e.ref = t
                    })), e
                }

                return u(n, [{
                    key: "componentDidUpdate", value: function () {
                        n.VALIDATE(this.ref)
                    }
                }, {
                    key: "componentDidMount", value: function () {
                        n.VALIDATE(this.ref)
                    }
                }, {
                    key: "render", value: function () {
                        return (0, r.createElement)("div", c({"data-accordion-component": "AccordionItemHeading"}, this.props, {ref: this.setRef}))
                    }
                }], [{
                    key: "VALIDATE", value: function (e) {
                        if (void 0 === e) throw new Error("ref is undefined");
                        if (1 !== e.childElementCount || !e.firstElementChild || "AccordionItemButton" !== e.firstElementChild.getAttribute("data-accordion-component")) throw new Error("AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201cThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201d\n\n")
                    }
                }]), n
            }(r.PureComponent);
        l(ee, "defaultProps", {className: "accordion__heading", "aria-level": 3});
        var te = function (e) {
            return (0, r.createElement)(N, null, (function (t) {
                var n = t.headingAttributes;
                return e.id && k(e.id), (0, r.createElement)(ee, c({}, e, n))
            }))
        };
        te.displayName = R.AccordionItemHeading;
        var ne = ["className", "region", "id"], re = function (e) {
            var t = e.className, n = void 0 === t ? "accordion__panel" : t, i = e.region, a = e.id, s = h(e, ne),
                u = function (e) {
                    var t = e.panelAttributes;
                    a && k(a);
                    var u = o(o({}, t), {}, {"aria-labelledby": i ? t["aria-labelledby"] : void 0});
                    return (0, r.createElement)("div", c({
                        "data-accordion-component": "AccordionItemPanel",
                        className: n
                    }, s, u, {role: i ? "region" : void 0}))
                };
            return (0, r.createElement)(N, null, u)
        }
    }, 6995: function (e, t, n) {
        var r, i, o;
        i = [t, n(8532)], void 0 === (o = "function" === typeof (r = function (e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0});
            var n = r(t);

            function r(e) {
                return e && e.__esModule ? e : {default: e}
            }

            e.default = n.default
        }) ? r.apply(t, i) : r) || (e.exports = o)
    }, 8532: function (e, t, n) {
        var r, i, o;
        i = [t, n(7294), n(5697)], void 0 === (o = "function" === typeof (r = function (e, t, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0}), e.setHasSupportToCaptureOption = f;
            var r = o(t), i = o(n);

            function o(e) {
                return e && e.__esModule ? e : {default: e}
            }

            var a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };

            function s(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            var l = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }();

            function c(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== typeof t && "function" !== typeof t ? e : t
            }

            function d(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            var p = !1;

            function f(e) {
                p = e
            }

            try {
                addEventListener("test", null, Object.defineProperty({}, "capture", {
                    get: function () {
                        f(!0)
                    }
                }))
            } catch (y) {
            }

            function h() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {capture: !0};
                return p ? e : e.capture
            }

            function m(e) {
                if ("touches" in e) {
                    var t = e.touches[0];
                    return {x: t.pageX, y: t.pageY}
                }
                return {x: e.screenX, y: e.screenY}
            }

            var v = function (e) {
                function t() {
                    var e;
                    u(this, t);
                    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    var o = c(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r)));
                    return o._handleSwipeStart = o._handleSwipeStart.bind(o), o._handleSwipeMove = o._handleSwipeMove.bind(o), o._handleSwipeEnd = o._handleSwipeEnd.bind(o), o._onMouseDown = o._onMouseDown.bind(o), o._onMouseMove = o._onMouseMove.bind(o), o._onMouseUp = o._onMouseUp.bind(o), o._setSwiperRef = o._setSwiperRef.bind(o), o
                }

                return d(t, e), l(t, [{
                    key: "componentDidMount", value: function () {
                        this.swiper && this.swiper.addEventListener("touchmove", this._handleSwipeMove, h({
                            capture: !0,
                            passive: !1
                        }))
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        this.swiper && this.swiper.removeEventListener("touchmove", this._handleSwipeMove, h({
                            capture: !0,
                            passive: !1
                        }))
                    }
                }, {
                    key: "_onMouseDown", value: function (e) {
                        this.props.allowMouseEvents && (this.mouseDown = !0, document.addEventListener("mouseup", this._onMouseUp), document.addEventListener("mousemove", this._onMouseMove), this._handleSwipeStart(e))
                    }
                }, {
                    key: "_onMouseMove", value: function (e) {
                        this.mouseDown && this._handleSwipeMove(e)
                    }
                }, {
                    key: "_onMouseUp", value: function (e) {
                        this.mouseDown = !1, document.removeEventListener("mouseup", this._onMouseUp), document.removeEventListener("mousemove", this._onMouseMove), this._handleSwipeEnd(e)
                    }
                }, {
                    key: "_handleSwipeStart", value: function (e) {
                        var t = m(e), n = t.x, r = t.y;
                        this.moveStart = {x: n, y: r}, this.props.onSwipeStart(e)
                    }
                }, {
                    key: "_handleSwipeMove", value: function (e) {
                        if (this.moveStart) {
                            var t = m(e), n = t.x, r = t.y, i = n - this.moveStart.x, o = r - this.moveStart.y;
                            this.moving = !0, this.props.onSwipeMove({
                                x: i,
                                y: o
                            }, e) && e.cancelable && e.preventDefault(), this.movePosition = {deltaX: i, deltaY: o}
                        }
                    }
                }, {
                    key: "_handleSwipeEnd", value: function (e) {
                        this.props.onSwipeEnd(e);
                        var t = this.props.tolerance;
                        this.moving && this.movePosition && (this.movePosition.deltaX < -t ? this.props.onSwipeLeft(1, e) : this.movePosition.deltaX > t && this.props.onSwipeRight(1, e), this.movePosition.deltaY < -t ? this.props.onSwipeUp(1, e) : this.movePosition.deltaY > t && this.props.onSwipeDown(1, e)), this.moveStart = null, this.moving = !1, this.movePosition = null
                    }
                }, {
                    key: "_setSwiperRef", value: function (e) {
                        this.swiper = e, this.props.innerRef(e)
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props, t = (e.tagName, e.className), n = e.style, i = e.children,
                            o = (e.allowMouseEvents, e.onSwipeUp, e.onSwipeDown, e.onSwipeLeft, e.onSwipeRight, e.onSwipeStart, e.onSwipeMove, e.onSwipeEnd, e.innerRef, e.tolerance, s(e, ["tagName", "className", "style", "children", "allowMouseEvents", "onSwipeUp", "onSwipeDown", "onSwipeLeft", "onSwipeRight", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "innerRef", "tolerance"]));
                        return r.default.createElement(this.props.tagName, a({
                            ref: this._setSwiperRef,
                            onMouseDown: this._onMouseDown,
                            onTouchStart: this._handleSwipeStart,
                            onTouchEnd: this._handleSwipeEnd,
                            className: t,
                            style: n
                        }, o), i)
                    }
                }]), t
            }(t.Component);
            v.displayName = "ReactSwipe", v.propTypes = {
                tagName: i.default.string,
                className: i.default.string,
                style: i.default.object,
                children: i.default.node,
                allowMouseEvents: i.default.bool,
                onSwipeUp: i.default.func,
                onSwipeDown: i.default.func,
                onSwipeLeft: i.default.func,
                onSwipeRight: i.default.func,
                onSwipeStart: i.default.func,
                onSwipeMove: i.default.func,
                onSwipeEnd: i.default.func,
                innerRef: i.default.func,
                tolerance: i.default.number.isRequired
            }, v.defaultProps = {
                tagName: "div", allowMouseEvents: !1, onSwipeUp: function () {
                }, onSwipeDown: function () {
                }, onSwipeLeft: function () {
                }, onSwipeRight: function () {
                }, onSwipeStart: function () {
                }, onSwipeMove: function () {
                }, onSwipeEnd: function () {
                }, innerRef: function () {
                }, tolerance: 0
            }, e.default = v
        }) ? r.apply(t, i) : r) || (e.exports = o)
    }, 2751: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        t.default = function (e, t, n) {
            var r = 0 === e ? e : e + t;
            return "translate3d" + ("(" + ("horizontal" === n ? [r, 0, 0] : [0, r, 0]).join(",") + ")")
        }
    }, 4954: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.fadeAnimationHandler = t.slideStopSwipingHandler = t.slideSwipeAnimationHandler = t.slideAnimationHandler = void 0;
        var r, i = n(7294), o = (r = n(2751)) && r.__esModule ? r : {default: r}, a = n(8918);

        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach((function (t) {
                    l(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        t.slideAnimationHandler = function (e, t) {
            var n = {}, r = t.selectedItem, s = r, l = i.Children.count(e.children) - 1;
            if (e.infiniteLoop && (r < 0 || r > l)) return s < 0 ? e.centerMode && e.centerSlidePercentage && "horizontal" === e.axis ? n.itemListStyle = (0, a.setPosition)(-(l + 2) * e.centerSlidePercentage - (100 - e.centerSlidePercentage) / 2, e.axis) : n.itemListStyle = (0, a.setPosition)(100 * -(l + 2), e.axis) : s > l && (n.itemListStyle = (0, a.setPosition)(0, e.axis)), n;
            var c = (0, a.getPosition)(r, e), d = (0, o.default)(c, "%", e.axis), p = e.transitionTime + "ms";
            return n.itemListStyle = {
                WebkitTransform: d,
                msTransform: d,
                OTransform: d,
                transform: d
            }, t.swiping || (n.itemListStyle = u(u({}, n.itemListStyle), {}, {
                WebkitTransitionDuration: p,
                MozTransitionDuration: p,
                OTransitionDuration: p,
                transitionDuration: p,
                msTransitionDuration: p
            })), n
        };
        t.slideSwipeAnimationHandler = function (e, t, n, r) {
            var o = {}, s = "horizontal" === t.axis, u = i.Children.count(t.children),
                l = (0, a.getPosition)(n.selectedItem, t),
                c = t.infiniteLoop ? (0, a.getPosition)(u - 1, t) - 100 : (0, a.getPosition)(u - 1, t),
                d = s ? e.x : e.y, p = d;
            0 === l && d > 0 && (p = 0), l === c && d < 0 && (p = 0);
            var f = l + 100 / (n.itemSize / p), h = Math.abs(d) > t.swipeScrollTolerance;
            return t.infiniteLoop && h && (0 === n.selectedItem && f > -100 ? f -= 100 * u : n.selectedItem === u - 1 && f < 100 * -u && (f += 100 * u)), (!t.preventMovementUntilSwipeScrollTolerance || h || n.swipeMovementStarted) && (n.swipeMovementStarted || r({swipeMovementStarted: !0}), o.itemListStyle = (0, a.setPosition)(f, t.axis)), h && !n.cancelClick && r({cancelClick: !0}), o
        };
        t.slideStopSwipingHandler = function (e, t) {
            var n = (0, a.getPosition)(t.selectedItem, e);
            return {itemListStyle: (0, a.setPosition)(n, e.axis)}
        };
        t.fadeAnimationHandler = function (e, t) {
            var n = e.transitionTime + "ms", r = "ease-in-out", i = {
                position: "absolute",
                display: "block",
                zIndex: -2,
                minHeight: "100%",
                opacity: 0,
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                transitionTimingFunction: r,
                msTransitionTimingFunction: r,
                MozTransitionTimingFunction: r,
                WebkitTransitionTimingFunction: r,
                OTransitionTimingFunction: r
            };
            return t.swiping || (i = u(u({}, i), {}, {
                WebkitTransitionDuration: n,
                MozTransitionDuration: n,
                OTransitionDuration: n,
                transitionDuration: n,
                msTransitionDuration: n
            })), {
                slideStyle: i,
                selectedStyle: u(u({}, i), {}, {opacity: 1, position: "relative"}),
                prevStyle: u({}, i)
            }
        }
    }, 8684: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r = function (e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== f(e) && "function" !== typeof e) return {default: e};
                var t = p();
                if (t && t.has(e)) return t.get(e);
                var n = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                    o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                }
                n.default = e, t && t.set(e, n);
                return n
            }(n(7294)), i = d(n(6995)), o = d(n(5702)), a = d(n(5040)), s = d(n(6513)), u = d(n(885)), l = n(8918),
            c = n(4954);

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function p() {
            if ("function" !== typeof WeakMap) return null;
            var e = new WeakMap;
            return p = function () {
                return e
            }, e
        }

        function f(e) {
            return (f = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function h() {
            return (h = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function m(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(n), !0).forEach((function (t) {
                    O(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function y(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function b(e, t) {
            return (b = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function w(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = E(e);
                if (t) {
                    var i = E(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return g(this, n)
            }
        }

        function g(e, t) {
            return !t || "object" !== f(t) && "function" !== typeof t ? S(e) : t
        }

        function S(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function E(e) {
            return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function O(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var P = function (e) {
            !function (e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && b(e, t)
            }(f, e);
            var t, n, d, p = w(f);

            function f(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, f), O(S(t = p.call(this, e)), "thumbsRef", void 0), O(S(t), "carouselWrapperRef", void 0), O(S(t), "listRef", void 0), O(S(t), "itemsRef", void 0), O(S(t), "timer", void 0), O(S(t), "animationHandler", void 0), O(S(t), "setThumbsRef", (function (e) {
                    t.thumbsRef = e
                })), O(S(t), "setCarouselWrapperRef", (function (e) {
                    t.carouselWrapperRef = e
                })), O(S(t), "setListRef", (function (e) {
                    t.listRef = e
                })), O(S(t), "setItemsRef", (function (e, n) {
                    t.itemsRef || (t.itemsRef = []), t.itemsRef[n] = e
                })), O(S(t), "autoPlay", (function () {
                    r.Children.count(t.props.children) <= 1 || (t.clearAutoPlay(), t.props.autoPlay && (t.timer = setTimeout((function () {
                        t.increment()
                    }), t.props.interval)))
                })), O(S(t), "clearAutoPlay", (function () {
                    t.timer && clearTimeout(t.timer)
                })), O(S(t), "resetAutoPlay", (function () {
                    t.clearAutoPlay(), t.autoPlay()
                })), O(S(t), "stopOnHover", (function () {
                    t.setState({isMouseEntered: !0}, t.clearAutoPlay)
                })), O(S(t), "startOnLeave", (function () {
                    t.setState({isMouseEntered: !1}, t.autoPlay)
                })), O(S(t), "isFocusWithinTheCarousel", (function () {
                    return !!t.carouselWrapperRef && !((0, s.default)().activeElement !== t.carouselWrapperRef && !t.carouselWrapperRef.contains((0, s.default)().activeElement))
                })), O(S(t), "navigateWithKeyboard", (function (e) {
                    if (t.isFocusWithinTheCarousel()) {
                        var n = "horizontal" === t.props.axis, r = n ? 37 : 38;
                        (n ? 39 : 40) === e.keyCode ? t.increment() : r === e.keyCode && t.decrement()
                    }
                })), O(S(t), "updateSizes", (function () {
                    if (t.state.initialized && t.itemsRef && 0 !== t.itemsRef.length) {
                        var e = "horizontal" === t.props.axis, n = t.itemsRef[0];
                        if (n) {
                            var r = e ? n.clientWidth : n.clientHeight;
                            t.setState({itemSize: r}), t.thumbsRef && t.thumbsRef.updateSizes()
                        }
                    }
                })), O(S(t), "setMountState", (function () {
                    t.setState({hasMount: !0}), t.updateSizes()
                })), O(S(t), "handleClickItem", (function (e, n) {
                    0 !== r.Children.count(t.props.children) && (t.state.cancelClick ? t.setState({cancelClick: !1}) : (t.props.onClickItem(e, n), e !== t.state.selectedItem && t.setState({selectedItem: e})))
                })), O(S(t), "handleOnChange", (function (e, n) {
                    r.Children.count(t.props.children) <= 1 || t.props.onChange(e, n)
                })), O(S(t), "handleClickThumb", (function (e, n) {
                    t.props.onClickThumb(e, n), t.moveTo(e)
                })), O(S(t), "onSwipeStart", (function (e) {
                    t.setState({swiping: !0}), t.props.onSwipeStart(e)
                })), O(S(t), "onSwipeEnd", (function (e) {
                    t.setState({
                        swiping: !1,
                        cancelClick: !1,
                        swipeMovementStarted: !1
                    }), t.props.onSwipeEnd(e), t.clearAutoPlay(), t.state.autoPlay && t.autoPlay()
                })), O(S(t), "onSwipeMove", (function (e, n) {
                    t.props.onSwipeMove(n);
                    var r = t.props.swipeAnimationHandler(e, t.props, t.state, t.setState.bind(S(t)));
                    return t.setState(v({}, r)), !!Object.keys(r).length
                })), O(S(t), "decrement", (function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    t.moveTo(t.state.selectedItem - ("number" === typeof e ? e : 1))
                })), O(S(t), "increment", (function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                    t.moveTo(t.state.selectedItem + ("number" === typeof e ? e : 1))
                })), O(S(t), "moveTo", (function (e) {
                    if ("number" === typeof e) {
                        var n = r.Children.count(t.props.children) - 1;
                        e < 0 && (e = t.props.infiniteLoop ? n : 0), e > n && (e = t.props.infiniteLoop ? 0 : n), t.selectItem({selectedItem: e}), t.state.autoPlay && !1 === t.state.isMouseEntered && t.resetAutoPlay()
                    }
                })), O(S(t), "onClickNext", (function () {
                    t.increment(1)
                })), O(S(t), "onClickPrev", (function () {
                    t.decrement(1)
                })), O(S(t), "onSwipeForward", (function () {
                    t.increment(1), t.props.emulateTouch && t.setState({cancelClick: !0})
                })), O(S(t), "onSwipeBackwards", (function () {
                    t.decrement(1), t.props.emulateTouch && t.setState({cancelClick: !0})
                })), O(S(t), "changeItem", (function (e) {
                    return function (n) {
                        (0, l.isKeyboardEvent)(n) && "Enter" !== n.key || t.moveTo(e)
                    }
                })), O(S(t), "selectItem", (function (e) {
                    t.setState(v({previousItem: t.state.selectedItem}, e), (function () {
                        t.setState(t.animationHandler(t.props, t.state))
                    })), t.handleOnChange(e.selectedItem, r.Children.toArray(t.props.children)[e.selectedItem])
                })), O(S(t), "getInitialImage", (function () {
                    var e = t.props.selectedItem, n = t.itemsRef && t.itemsRef[e];
                    return (n && n.getElementsByTagName("img") || [])[0]
                })), O(S(t), "getVariableItemHeight", (function (e) {
                    var n = t.itemsRef && t.itemsRef[e];
                    if (t.state.hasMount && n && n.children.length) {
                        var r = n.children[0].getElementsByTagName("img") || [];
                        if (r.length > 0) {
                            var i = r[0];
                            if (!i.complete) {
                                i.addEventListener("load", (function e() {
                                    t.forceUpdate(), i.removeEventListener("load", e)
                                }))
                            }
                        }
                        var o = (r[0] || n.children[0]).clientHeight;
                        return o > 0 ? o : null
                    }
                    return null
                }));
                var n = {
                    initialized: !1,
                    previousItem: e.selectedItem,
                    selectedItem: e.selectedItem,
                    hasMount: !1,
                    isMouseEntered: !1,
                    autoPlay: e.autoPlay,
                    swiping: !1,
                    swipeMovementStarted: !1,
                    cancelClick: !1,
                    itemSize: 1,
                    itemListStyle: {},
                    slideStyle: {},
                    selectedStyle: {},
                    prevStyle: {}
                };
                return t.animationHandler = "function" === typeof e.animationHandler && e.animationHandler || "fade" === e.animationHandler && c.fadeAnimationHandler || c.slideAnimationHandler, t.state = v(v({}, n), t.animationHandler(e, n)), t
            }

            return t = f, (n = [{
                key: "componentDidMount", value: function () {
                    this.props.children && this.setupCarousel()
                }
            }, {
                key: "componentDidUpdate", value: function (e, t) {
                    e.children || !this.props.children || this.state.initialized || this.setupCarousel(), !e.autoFocus && this.props.autoFocus && this.forceFocus(), t.swiping && !this.state.swiping && this.setState(v({}, this.props.stopSwipingHandler(this.props, this.state))), e.selectedItem === this.props.selectedItem && e.centerMode === this.props.centerMode || (this.updateSizes(), this.moveTo(this.props.selectedItem)), e.autoPlay !== this.props.autoPlay && (this.props.autoPlay ? this.setupAutoPlay() : this.destroyAutoPlay(), this.setState({autoPlay: this.props.autoPlay}))
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    this.destroyCarousel()
                }
            }, {
                key: "setupCarousel", value: function () {
                    var e = this;
                    this.bindEvents(), this.state.autoPlay && r.Children.count(this.props.children) > 1 && this.setupAutoPlay(), this.props.autoFocus && this.forceFocus(), this.setState({initialized: !0}, (function () {
                        var t = e.getInitialImage();
                        t && !t.complete ? t.addEventListener("load", e.setMountState) : e.setMountState()
                    }))
                }
            }, {
                key: "destroyCarousel", value: function () {
                    this.state.initialized && (this.unbindEvents(), this.destroyAutoPlay())
                }
            }, {
                key: "setupAutoPlay", value: function () {
                    this.autoPlay();
                    var e = this.carouselWrapperRef;
                    this.props.stopOnHover && e && (e.addEventListener("mouseenter", this.stopOnHover), e.addEventListener("mouseleave", this.startOnLeave))
                }
            }, {
                key: "destroyAutoPlay", value: function () {
                    this.clearAutoPlay();
                    var e = this.carouselWrapperRef;
                    this.props.stopOnHover && e && (e.removeEventListener("mouseenter", this.stopOnHover), e.removeEventListener("mouseleave", this.startOnLeave))
                }
            }, {
                key: "bindEvents", value: function () {
                    (0, u.default)().addEventListener("resize", this.updateSizes), (0, u.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.props.useKeyboardArrows && (0, s.default)().addEventListener("keydown", this.navigateWithKeyboard)
                }
            }, {
                key: "unbindEvents", value: function () {
                    (0, u.default)().removeEventListener("resize", this.updateSizes), (0, u.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
                    var e = this.getInitialImage();
                    e && e.removeEventListener("load", this.setMountState), this.props.useKeyboardArrows && (0, s.default)().removeEventListener("keydown", this.navigateWithKeyboard)
                }
            }, {
                key: "forceFocus", value: function () {
                    var e;
                    null === (e = this.carouselWrapperRef) || void 0 === e || e.focus()
                }
            }, {
                key: "renderItems", value: function (e) {
                    var t = this;
                    return this.props.children ? r.Children.map(this.props.children, (function (n, i) {
                        var a = i === t.state.selectedItem, s = i === t.state.previousItem,
                            u = a && t.state.selectedStyle || s && t.state.prevStyle || t.state.slideStyle || {};
                        t.props.centerMode && "horizontal" === t.props.axis && (u = v(v({}, u), {}, {minWidth: t.props.centerSlidePercentage + "%"})), t.state.swiping && t.state.swipeMovementStarted && (u = v(v({}, u), {}, {pointerEvents: "none"}));
                        var l = {
                            ref: function (e) {
                                return t.setItemsRef(e, i)
                            },
                            key: "itemKey" + i + (e ? "clone" : ""),
                            className: o.default.ITEM(!0, i === t.state.selectedItem, i === t.state.previousItem),
                            onClick: t.handleClickItem.bind(t, i, n),
                            style: u
                        };
                        return r.default.createElement("li", l, t.props.renderItem(n, {
                            isSelected: i === t.state.selectedItem,
                            isPrevious: i === t.state.previousItem
                        }))
                    })) : []
                }
            }, {
                key: "renderControls", value: function () {
                    var e = this, t = this.props, n = t.showIndicators, i = t.labels, o = t.renderIndicator,
                        a = t.children;
                    return n ? r.default.createElement("ul", {className: "control-dots"}, r.Children.map(a, (function (t, n) {
                        return o && o(e.changeItem(n), n === e.state.selectedItem, n, i.item)
                    }))) : null
                }
            }, {
                key: "renderStatus", value: function () {
                    return this.props.showStatus ? r.default.createElement("p", {className: "carousel-status"}, this.props.statusFormatter(this.state.selectedItem + 1, r.Children.count(this.props.children))) : null
                }
            }, {
                key: "renderThumbs", value: function () {
                    return this.props.showThumbs && this.props.children && 0 !== r.Children.count(this.props.children) ? r.default.createElement(a.default, {
                        ref: this.setThumbsRef,
                        onSelectItem: this.handleClickThumb,
                        selectedItem: this.state.selectedItem,
                        transitionTime: this.props.transitionTime,
                        thumbWidth: this.props.thumbWidth,
                        labels: this.props.labels,
                        emulateTouch: this.props.emulateTouch
                    }, this.props.renderThumbs(this.props.children)) : null
                }
            }, {
                key: "render", value: function () {
                    var e = this;
                    if (!this.props.children || 0 === r.Children.count(this.props.children)) return null;
                    var t = this.props.swipeable && r.Children.count(this.props.children) > 1,
                        n = "horizontal" === this.props.axis,
                        a = this.props.showArrows && r.Children.count(this.props.children) > 1,
                        s = a && (this.state.selectedItem > 0 || this.props.infiniteLoop) || !1,
                        u = a && (this.state.selectedItem < r.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || !1,
                        l = this.renderItems(!0), c = l.shift(), d = l.pop(), p = {
                            className: o.default.SLIDER(!0, this.state.swiping),
                            onSwipeMove: this.onSwipeMove,
                            onSwipeStart: this.onSwipeStart,
                            onSwipeEnd: this.onSwipeEnd,
                            style: this.state.itemListStyle,
                            tolerance: this.props.swipeScrollTolerance
                        }, f = {};
                    if (n) {
                        if (p.onSwipeLeft = this.onSwipeForward, p.onSwipeRight = this.onSwipeBackwards, this.props.dynamicHeight) {
                            var m = this.getVariableItemHeight(this.state.selectedItem);
                            f.height = m || "auto"
                        }
                    } else p.onSwipeUp = "natural" === this.props.verticalSwipe ? this.onSwipeBackwards : this.onSwipeForward, p.onSwipeDown = "natural" === this.props.verticalSwipe ? this.onSwipeForward : this.onSwipeBackwards, p.style = v(v({}, p.style), {}, {height: this.state.itemSize}), f.height = this.state.itemSize;
                    return r.default.createElement("div", {
                        "aria-label": this.props.ariaLabel,
                        className: o.default.ROOT(this.props.className),
                        ref: this.setCarouselWrapperRef,
                        tabIndex: this.props.useKeyboardArrows ? 0 : void 0
                    }, r.default.createElement("div", {
                        className: o.default.CAROUSEL(!0),
                        style: {width: this.props.width}
                    }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, s, this.props.labels.leftArrow), r.default.createElement("div", {
                        className: o.default.WRAPPER(!0, this.props.axis),
                        style: f
                    }, t ? r.default.createElement(i.default, h({
                        tagName: "ul",
                        innerRef: this.setListRef
                    }, p, {allowMouseEvents: this.props.emulateTouch}), this.props.infiniteLoop && d, this.renderItems(), this.props.infiniteLoop && c) : r.default.createElement("ul", {
                        className: o.default.SLIDER(!0, this.state.swiping),
                        ref: function (t) {
                            return e.setListRef(t)
                        },
                        style: this.state.itemListStyle || {}
                    }, this.props.infiniteLoop && d, this.renderItems(), this.props.infiniteLoop && c)), this.props.renderArrowNext(this.onClickNext, u, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs())
                }
            }]) && y(t.prototype, n), d && y(t, d), f
        }(r.default.Component);
        t.default = P, O(P, "displayName", "Carousel"), O(P, "defaultProps", {
            ariaLabel: void 0,
            axis: "horizontal",
            centerSlidePercentage: 80,
            interval: 3e3,
            labels: {leftArrow: "previous slide / item", rightArrow: "next slide / item", item: "slide item"},
            onClickItem: l.noop,
            onClickThumb: l.noop,
            onChange: l.noop,
            onSwipeStart: function () {
            },
            onSwipeEnd: function () {
            },
            onSwipeMove: function () {
                return !1
            },
            preventMovementUntilSwipeScrollTolerance: !1,
            renderArrowPrev: function (e, t, n) {
                return r.default.createElement("button", {
                    type: "button",
                    "aria-label": n,
                    className: o.default.ARROW_PREV(!t),
                    onClick: e
                })
            },
            renderArrowNext: function (e, t, n) {
                return r.default.createElement("button", {
                    type: "button",
                    "aria-label": n,
                    className: o.default.ARROW_NEXT(!t),
                    onClick: e
                })
            },
            renderIndicator: function (e, t, n, i) {
                return r.default.createElement("li", {
                    className: o.default.DOT(t),
                    onClick: e,
                    onKeyDown: e,
                    value: n,
                    key: n,
                    role: "button",
                    tabIndex: 0,
                    "aria-label": "".concat(i, " ").concat(n + 1)
                })
            },
            renderItem: function (e) {
                return e
            },
            renderThumbs: function (e) {
                var t = r.Children.map(e, (function (e) {
                    var t = e;
                    if ("img" !== e.type && (t = r.Children.toArray(e.props.children).find((function (e) {
                        return "img" === e.type
                    }))), t) return t
                }));
                return 0 === t.filter((function (e) {
                    return e
                })).length ? (console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"), []) : t
            },
            statusFormatter: l.defaultStatusFormatter,
            selectedItem: 0,
            showArrows: !0,
            showIndicators: !0,
            showStatus: !0,
            showThumbs: !0,
            stopOnHover: !0,
            swipeScrollTolerance: 5,
            swipeable: !0,
            transitionTime: 350,
            verticalSwipe: "standard",
            width: "100%",
            animationHandler: "slide",
            swipeAnimationHandler: c.slideSwipeAnimationHandler,
            stopSwipingHandler: c.slideStopSwipingHandler
        })
    }, 629: function () {
    }, 8918: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.setPosition = t.getPosition = t.isKeyboardEvent = t.defaultStatusFormatter = t.noop = void 0;
        var r, i = n(7294), o = (r = n(2751)) && r.__esModule ? r : {default: r};
        t.noop = function () {
        };
        t.defaultStatusFormatter = function (e, t) {
            return "".concat(e, " of ").concat(t)
        };
        t.isKeyboardEvent = function (e) {
            return !!e && e.hasOwnProperty("key")
        };
        t.getPosition = function (e, t) {
            if (t.infiniteLoop && ++e, 0 === e) return 0;
            var n = i.Children.count(t.children);
            if (t.centerMode && "horizontal" === t.axis) {
                var r = -e * t.centerSlidePercentage, o = n - 1;
                return e && (e !== o || t.infiniteLoop) ? r += (100 - t.centerSlidePercentage) / 2 : e === o && (r += 100 - t.centerSlidePercentage), r
            }
            return 100 * -e
        };
        t.setPosition = function (e, t) {
            var n = {};
            return ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach((function (r) {
                n[r] = (0, o.default)(e, "%", t)
            })), n
        }
    }, 5040: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r = function (e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" !== d(e) && "function" !== typeof e) return {default: e};
            var t = c();
            if (t && t.has(e)) return t.get(e);
            var n = {}, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
                var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
            }
            n.default = e, t && t.set(e, n);
            return n
        }(n(7294)), i = l(n(5702)), o = n(4528), a = l(n(2751)), s = l(n(6995)), u = l(n(885));

        function l(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function c() {
            if ("function" !== typeof WeakMap) return null;
            var e = new WeakMap;
            return c = function () {
                return e
            }, e
        }

        function d(e) {
            return (d = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function p() {
            return (p = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function f(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function h(e, t) {
            return (h = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function m(e) {
            var t = function () {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = b(e);
                if (t) {
                    var i = b(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return v(this, n)
            }
        }

        function v(e, t) {
            return !t || "object" !== d(t) && "function" !== typeof t ? y(e) : t
        }

        function y(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function b(e) {
            return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function w(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var g = function (e) {
            !function (e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && h(e, t)
            }(d, e);
            var t, n, l, c = m(d);

            function d(e) {
                var t;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, d), w(y(t = c.call(this, e)), "itemsWrapperRef", void 0), w(y(t), "itemsListRef", void 0), w(y(t), "thumbsRef", void 0), w(y(t), "setItemsWrapperRef", (function (e) {
                    t.itemsWrapperRef = e
                })), w(y(t), "setItemsListRef", (function (e) {
                    t.itemsListRef = e
                })), w(y(t), "setThumbsRef", (function (e, n) {
                    t.thumbsRef || (t.thumbsRef = []), t.thumbsRef[n] = e
                })), w(y(t), "updateSizes", (function () {
                    if (t.props.children && t.itemsWrapperRef && t.thumbsRef) {
                        var e = r.Children.count(t.props.children), n = t.itemsWrapperRef.clientWidth,
                            i = t.props.thumbWidth ? t.props.thumbWidth : (0, o.outerWidth)(t.thumbsRef[0]),
                            a = Math.floor(n / i), s = a < e, u = s ? e - a : 0;
                        t.setState((function (e, n) {
                            return {
                                itemSize: i,
                                visibleItems: a,
                                firstItem: s ? t.getFirstItem(n.selectedItem) : 0,
                                lastPosition: u,
                                showArrows: s
                            }
                        }))
                    }
                })), w(y(t), "handleClickItem", (function (e, n, r) {
                    if (!function (e) {
                        return e.hasOwnProperty("key")
                    }(r) || "Enter" === r.key) {
                        var i = t.props.onSelectItem;
                        "function" === typeof i && i(e, n)
                    }
                })), w(y(t), "onSwipeStart", (function () {
                    t.setState({swiping: !0})
                })), w(y(t), "onSwipeEnd", (function () {
                    t.setState({swiping: !1})
                })), w(y(t), "onSwipeMove", (function (e) {
                    var n = e.x;
                    if (!t.state.itemSize || !t.itemsWrapperRef || !t.state.visibleItems) return !1;
                    var i = r.Children.count(t.props.children), o = -100 * t.state.firstItem / t.state.visibleItems;
                    0 === o && n > 0 && (n = 0), o === 100 * -Math.max(i - t.state.visibleItems, 0) / t.state.visibleItems && n < 0 && (n = 0);
                    var s = o + 100 / (t.itemsWrapperRef.clientWidth / n);
                    return t.itemsListRef && ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach((function (e) {
                        t.itemsListRef.style[e] = (0, a.default)(s, "%", t.props.axis)
                    })), !0
                })), w(y(t), "slideRight", (function (e) {
                    t.moveTo(t.state.firstItem - ("number" === typeof e ? e : 1))
                })), w(y(t), "slideLeft", (function (e) {
                    t.moveTo(t.state.firstItem + ("number" === typeof e ? e : 1))
                })), w(y(t), "moveTo", (function (e) {
                    e = (e = e < 0 ? 0 : e) >= t.state.lastPosition ? t.state.lastPosition : e, t.setState({firstItem: e})
                })), t.state = {
                    selectedItem: e.selectedItem,
                    swiping: !1,
                    showArrows: !1,
                    firstItem: 0,
                    visibleItems: 0,
                    lastPosition: 0
                }, t
            }

            return t = d, (n = [{
                key: "componentDidMount", value: function () {
                    this.setupThumbs()
                }
            }, {
                key: "componentDidUpdate", value: function (e) {
                    this.props.selectedItem !== this.state.selectedItem && this.setState({
                        selectedItem: this.props.selectedItem,
                        firstItem: this.getFirstItem(this.props.selectedItem)
                    }), this.props.children !== e.children && this.updateSizes()
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    this.destroyThumbs()
                }
            }, {
                key: "setupThumbs", value: function () {
                    (0, u.default)().addEventListener("resize", this.updateSizes), (0, u.default)().addEventListener("DOMContentLoaded", this.updateSizes), this.updateSizes()
                }
            }, {
                key: "destroyThumbs", value: function () {
                    (0, u.default)().removeEventListener("resize", this.updateSizes), (0, u.default)().removeEventListener("DOMContentLoaded", this.updateSizes)
                }
            }, {
                key: "getFirstItem", value: function (e) {
                    var t = e;
                    return e >= this.state.lastPosition && (t = this.state.lastPosition), e < this.state.firstItem + this.state.visibleItems && (t = this.state.firstItem), e < this.state.firstItem && (t = e), t
                }
            }, {
                key: "renderItems", value: function () {
                    var e = this;
                    return this.props.children.map((function (t, n) {
                        var o = i.default.ITEM(!1, n === e.state.selectedItem), a = {
                            key: n,
                            ref: function (t) {
                                return e.setThumbsRef(t, n)
                            },
                            className: o,
                            onClick: e.handleClickItem.bind(e, n, e.props.children[n]),
                            onKeyDown: e.handleClickItem.bind(e, n, e.props.children[n]),
                            "aria-label": "".concat(e.props.labels.item, " ").concat(n + 1),
                            style: {width: e.props.thumbWidth}
                        };
                        return r.default.createElement("li", p({}, a, {role: "button", tabIndex: 0}), t)
                    }))
                }
            }, {
                key: "render", value: function () {
                    var e = this;
                    if (!this.props.children) return null;
                    var t, n = r.Children.count(this.props.children) > 1,
                        o = this.state.showArrows && this.state.firstItem > 0,
                        u = this.state.showArrows && this.state.firstItem < this.state.lastPosition,
                        l = -this.state.firstItem * (this.state.itemSize || 0),
                        c = (0, a.default)(l, "px", this.props.axis), d = this.props.transitionTime + "ms";
                    return t = {
                        WebkitTransform: c,
                        MozTransform: c,
                        MsTransform: c,
                        OTransform: c,
                        transform: c,
                        msTransform: c,
                        WebkitTransitionDuration: d,
                        MozTransitionDuration: d,
                        MsTransitionDuration: d,
                        OTransitionDuration: d,
                        transitionDuration: d,
                        msTransitionDuration: d
                    }, r.default.createElement("div", {className: i.default.CAROUSEL(!1)}, r.default.createElement("div", {
                        className: i.default.WRAPPER(!1),
                        ref: this.setItemsWrapperRef
                    }, r.default.createElement("button", {
                        type: "button",
                        className: i.default.ARROW_PREV(!o),
                        onClick: function () {
                            return e.slideRight()
                        },
                        "aria-label": this.props.labels.leftArrow
                    }), n ? r.default.createElement(s.default, {
                        tagName: "ul",
                        className: i.default.SLIDER(!1, this.state.swiping),
                        onSwipeLeft: this.slideLeft,
                        onSwipeRight: this.slideRight,
                        onSwipeMove: this.onSwipeMove,
                        onSwipeStart: this.onSwipeStart,
                        onSwipeEnd: this.onSwipeEnd,
                        style: t,
                        innerRef: this.setItemsListRef,
                        allowMouseEvents: this.props.emulateTouch
                    }, this.renderItems()) : r.default.createElement("ul", {
                        className: i.default.SLIDER(!1, this.state.swiping),
                        ref: function (t) {
                            return e.setItemsListRef(t)
                        },
                        style: t
                    }, this.renderItems()), r.default.createElement("button", {
                        type: "button",
                        className: i.default.ARROW_NEXT(!u),
                        onClick: function () {
                            return e.slideLeft()
                        },
                        "aria-label": this.props.labels.rightArrow
                    })))
                }
            }]) && f(t.prototype, n), l && f(t, l), d
        }(r.Component);
        t.default = g, w(g, "displayName", "Thumbs"), w(g, "defaultProps", {
            axis: "horizontal",
            labels: {leftArrow: "previous slide / item", rightArrow: "next slide / item", item: "slide item"},
            selectedItem: 0,
            thumbWidth: 80,
            transitionTime: 350
        })
    }, 5702: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var r, i = (r = n(4184)) && r.__esModule ? r : {default: r};
        var o = {
            ROOT: function (e) {
                return (0, i.default)(function (e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }({"carousel-root": !0}, e || "", !!e))
            }, CAROUSEL: function (e) {
                return (0, i.default)({carousel: !0, "carousel-slider": e})
            }, WRAPPER: function (e, t) {
                return (0, i.default)({
                    "thumbs-wrapper": !e,
                    "slider-wrapper": e,
                    "axis-horizontal": "horizontal" === t,
                    "axis-vertical": "horizontal" !== t
                })
            }, SLIDER: function (e, t) {
                return (0, i.default)({thumbs: !e, slider: e, animated: !t})
            }, ITEM: function (e, t, n) {
                return (0, i.default)({thumb: !e, slide: e, selected: t, previous: n})
            }, ARROW_PREV: function (e) {
                return (0, i.default)({"control-arrow control-prev": !0, "control-disabled": e})
            }, ARROW_NEXT: function (e) {
                return (0, i.default)({"control-arrow control-next": !0, "control-disabled": e})
            }, DOT: function (e) {
                return (0, i.default)({dot: !0, selected: e})
            }
        };
        t.default = o
    }, 4528: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.outerWidth = void 0;
        t.outerWidth = function (e) {
            var t = e.offsetWidth, n = getComputedStyle(e);
            return t += parseInt(n.marginLeft) + parseInt(n.marginRight)
        }
    }, 615: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "lr", {
            enumerable: !0, get: function () {
                return r.default
            }
        });
        var r = a(n(8684)), i = n(629), o = a(n(5040));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, 6513: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        t.default = function () {
            return document
        }
    }, 885: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        t.default = function () {
            return window
        }
    }
}]);
