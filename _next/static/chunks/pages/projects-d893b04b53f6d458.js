(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [327], {
        7670: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/projects", function() {
                return r(7133)
            }])
        },
        2537: function(e, t, r) {
            "use strict";
            r.d(t, {
                x: function() {
                    return o
                }
            });
            var n = r(6615);
            let o = (0, n.zo)("div", {
                display: "block",
                margin: 0,
                variants: {
                    family: {
                        body: {
                            fontFamily: "$body"
                        },
                        mono: {
                            fontFamily: "$mono"
                        },
                        serif: {
                            fontFamily: "$serif"
                        }
                    },
                    variant: {
                        heading: {
                            fontFamily: "$head",
                            fontWeight: "600 !important"
                        }
                    },
                    size: {
                        10: {
                            fontSize: "$10"
                        },
                        12: {
                            fontSize: "$12"
                        },
                        13: {
                            fontSize: "13px"
                        },
                        14: {
                            fontSize: "$14"
                        },
                        15: {
                            fontSize: "15px"
                        },
                        16: {
                            fontSize: "$16"
                        },
                        20: {
                            fontSize: "$20"
                        },
                        24: {
                            fontSize: "$24"
                        },
                        32: {
                            fontSize: "$32"
                        },
                        40: {
                            fontSize: "$40"
                        },
                        48: {
                            fontSize: "$48"
                        }
                    },
                    lineHeight: {
                        12: {
                            lineHeight: "$12"
                        },
                        16: {
                            lineHeight: "$16"
                        },
                        20: {
                            lineHeight: "$20"
                        },
                        24: {
                            lineHeight: "$24"
                        },
                        28: {
                            lineHeight: "28px"
                        },
                        32: {
                            lineHeight: "$32"
                        },
                        40: {
                            lineHeight: "$40"
                        },
                        48: {
                            lineHeight: "$48"
                        },
                        56: {
                            lineHeight: "$56"
                        }
                    },
                    weight: {
                        400: {
                            fontWeight: "400"
                        },
                        500: {
                            fontWeight: "500"
                        },
                        600: {
                            fontWeight: "600"
                        },
                        700: {
                            fontWeight: "700"
                        },
                        800: {
                            fontWeight: "800"
                        }
                    },
                    color: {
                        gray11: {
                            color: "$gray11"
                        },
                        gray12: {
                            color: "$gray12"
                        },
                        red: {
                            color: "$red11"
                        }
                    }
                },
                defaultVariants: {
                    size: "14",
                    lineHeight: "28",
                    weight: "400",
                    color: "gray12",
                    family: "body"
                }
            })
        },
        7133: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Project: function() {
                    return y
                },
                default: function() {
                    return m
                }
            });
            var n = r(5893),
                o = r(7294);
            /*!
             * shuffle-letters
             * A JavaScript library to shuffle the text content of a DOM element with an animated effect.
             *
             * @version v1.0.2
             * @author George Raptis <georapbox@gmail.com>
             * @homepage https://github.com/georapbox/shuffle-letters#readme
             * @repository git+https://github.com/georapbox/shuffle-letters.git
             * @license MIT
             */
            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach(function(t) {
                        var n, o;
                        n = e, o = r[t], t in n ? Object.defineProperty(n, t, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[t] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function s(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var c = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = a(a({}, {
                            text: "",
                            iterations: 8,
                            fps: 30,
                            onComplete: function() {}
                        }), t);
                    if (!(e && 1 === e.nodeType && e instanceof Element == !0)) throw TypeError("Expected element to be a valid HTML element.");
                    for (var n = r.text && "string" == typeof r.text ? r.text.split("") : e.textContent.split(""), o = [], i = [], c = 0; c < n.length; c += 1) {
                        var l = n[c];
                        /\s/.test(l) ? o[c] = "space" : (/[a-z]/.test(l) ? o[c] = "lowerCase" : /[A-Z]/.test(l) ? o[c] = "upperCase" : o[c] = "symbol", i.push(c))
                    }
                    e.textContent = "";
                    var f = null;
                    return function t(a) {
                            var c = function(e) {
                                    if (Array.isArray(e)) return s(e)
                                }(n) || function(e) {
                                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                                }(n) || function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return s(e, t);
                                        var r = Object.prototype.toString.call(e).slice(8, -1);
                                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, t)
                                    }
                                }(n) || function() {
                                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }(),
                                l = i.length;
                            if (a > l) "function" == typeof r.onComplete && r.onComplete(e);
                            else {
                                for (var u = Math.max(a, 0); u < l; u += 1) u < a + r.iterations ? c[i[u]] = function(e) {
                                    var t = "";
                                    "lowerCase" === e ? t = "abcdefghijklmnopqrstuvwxyz0123456789" : "upperCase" === e ? t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" : "symbol" === e && (t = ",.?/\\(^)![]{}*&^%$#'\"");
                                    var r = t.split("");
                                    return r[Math.floor(Math.random() * r.length)]
                                }(o[i[u]]) : c[i[u]] = "";
                                e.textContent = c.join(""), f = setTimeout(function() {
                                    t(a + 1)
                                }, 1e3 / r.fps)
                            }
                        }(-r.iterations),
                        function() {
                            clearTimeout(f), f = null
                        }
                },
                l = r(3694),
                f = r(5883),
                u = r(2537),
                p = r(6615),
                h = r(566);
            let d = [{
                name: "Devouring Details",
                description: "Remember your last moment of discovery?",
                href: "https://devouringdetails.com",
                year: 2025
            }, {
                name: "Vercel.com",
                description: "The Vercel homepage",
                href: "https://vercel.com/home",
                year: 2023
            }, {
                name: "Web Interface Guidelines",
                description: "A list of details that make a good web interface",
                href: "https://interfaces.rauno.me",
                year: 2023
            }, {
                name: "Vesper",
                description: "Peppermint and orange flavored dark theme for VSCode",
                href: "https://github.com/raunofreiberg/vesper",
                year: 2023
            }, {
                name: "(Basic) Bookmarks",
                description: "A home for your internet discoveries",
                href: "https://bmrks.com",
                year: 2023
            }, {
                name: "⌘K",
                description: "Fast, unstyled, composable command menu for React",
                href: "https://cmdk.paco.me",
                year: 2022
            }, {
                name: "uiwtf",
                description: "An experimental laboratory for user interfaces",
                href: "https://uiw.tf",
                year: 2021
            }, {
                name: "Flow",
                description: "Clear your mind through expressive writing",
                href: "https://flow.rest",
                year: 2021
            }, {
                name: "UI Playbook",
                description: "The documented collection of UI components",
                href: "https://uiplaybook.dev",
                year: 2020
            }];

            function m() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(l.h, {
                        title: "Projects"
                    }), (0, n.jsx)(f.x, {
                        css: {
                            mt: "$4",
                            display: "flex",
                            flexDirection: "column",
                            gap: 28
                        },
                        children: d.map((e, t) => (0, n.jsx)(y, {
                            ...e,
                            index: t
                        }, e.href))
                    })]
                })
            }

            function y(e) {
                let {
                    href: t,
                    name: r,
                    description: i,
                    css: a,
                    year: s,
                    index: l
                } = e, p = o.useRef(), d = o.useRef(), m = o.useRef();
                o.useEffect(() => {
                    c(p.current, {
                        iterations: 10
                    }), c(d.current, {
                        iterations: 10
                    }), c(m.current, {
                        iterations: 10
                    })
                }, []);
                let y = .1 * l;
                return (0, n.jsxs)(h.E.a, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: y
                    },
                    href: t,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: g({
                        css: a
                    }),
                    children: [(0, n.jsx)(u.x, {
                        ref: p,
                        as: "span",
                        color: "gray12",
                        weight: "500",
                        css: {
                            d: "inline-block"
                        },
                        children: r
                    }), (0, n.jsx)(u.x, {
                        ref: d,
                        as: "span",
                        color: "gray11",
                        css: {
                            ml: -8,
                            d: "inline-block",
                            "@mobile": {
                                d: "none"
                            }
                        },
                        children: i
                    }), (0, n.jsx)(f.x, {
                        as: h.E.div,
                        css: {
                            flex: 1,
                            position: "relative",
                            "&:after": {
                                content: "",
                                position: "absolute",
                                bottom: -1,
                                height: 1,
                                width: "0",
                                animation: "".concat(b(), " 1s ease forwards"),
                                animationDelay: "".concat(.05 * l, "s")
                            },
                            "&:before": {
                                content: "",
                                position: "absolute",
                                bottom: -1,
                                height: 1,
                                width: "0",
                                zIndex: 3,
                                animation: "".concat(v(), " 1s ease forwards"),
                                animationDelay: "".concat(y, "s")
                            }
                        }
                    }), (0, n.jsx)(u.x, {
                        ref: m,
                        css: {
                            color: "$gray9"
                        },
                        children: s
                    })]
                })
            }
            let g = (0, p.iv)({
                    display: "flex",
                    ai: "center",
                    gap: 12,
                    width: "calc(100% + 32px)",
                    position: "relative",
                    overflow: "hidden",
                    padding: "12px",
                    margin: -12,
                    br: 12,
                    outline: 0,
                    focus: !0,
                    "&:hover": {
                        background: "$gray3"
                    }
                }),
                b = (0, p.F4)({
                    "0%": {
                        background: "transparent"
                    },
                    "50%": {
                        background: "$gray10"
                    },
                    "100%": {
                        width: "100%",
                        background: "$gray5"
                    }
                }),
                v = (0, p.F4)({
                    "0%": {
                        background: "transparent"
                    },
                    "50%": {
                        background: "$gray10"
                    },
                    "100%": {
                        width: "100%",
                        background: "transparent"
                    }
                })
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], function() {
            return e(e.s = 7670)
        }), _N_E = e.O()
    }
]);