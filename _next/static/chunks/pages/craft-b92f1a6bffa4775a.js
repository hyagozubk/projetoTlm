(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [716], {
        1732: function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n;
                return "string" == typeof e ? t ? (null !== (n = t[e]) && void 0 !== n || (t[e] = document.querySelectorAll(e)), e = t[e]) : e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || [])
            }
            n.d(t, {
                I: function() {
                    return r
                }
            })
        },
        6463: function(e, t, n) {
            "use strict";
            n.d(t, {
                m: function() {
                    return r
                }
            });
            let r = e => "function" == typeof e
        },
        5706: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/craft", function() {
                return n(1005)
            }])
        },
        5403: function(e, t, n) {
            "use strict";
            n.d(t, {
                x: function() {
                    return a
                }
            });
            var r = n(5893),
                o = n(6615);
            let i = "undefined" != typeof navigator && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

            function a(e) {
                let {
                    scale: t = 1.2,
                    style: n,
                    ...o
                } = e;
                return (0, r.jsx)("img", {
                    "aria-hidden": "true",
                    className: s(),
                    style: {
                        filter: i ? "blur(10px)" : "blur(32px)",
                        transform: "scale(".concat(t, ") translateZ(0)"),
                        ...n
                    },
                    ...o
                })
            }
            let s = (0, o.iv)({
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                br: "inherit"
            })
        },
        4094: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return o
                }
            });
            var r = n(6615);
            let o = (0, r.zo)("div", {
                boxSizing: "border-box",
                display: "flex",
                variants: {
                    direction: {
                        row: {
                            flexDirection: "row"
                        },
                        column: {
                            flexDirection: "column"
                        },
                        "row-reverse": {
                            flexDirection: "row-reverse"
                        },
                        "column-reverse": {
                            flexDirection: "column-reverse"
                        }
                    },
                    align: {
                        start: {
                            alignItems: "flex-start"
                        },
                        center: {
                            alignItems: "center"
                        },
                        end: {
                            alignItems: "flex-end"
                        },
                        stretch: {
                            alignItems: "stretch"
                        },
                        baseline: {
                            alignItems: "baseline"
                        }
                    },
                    justify: {
                        start: {
                            justifyContent: "flex-start"
                        },
                        center: {
                            justifyContent: "center"
                        },
                        end: {
                            justifyContent: "flex-end"
                        },
                        between: {
                            justifyContent: "space-between"
                        }
                    },
                    wrap: {
                        "no-wrap": {
                            flexWrap: "nowrap"
                        },
                        wrap: {
                            flexWrap: "wrap"
                        },
                        "wrap-reverse": {
                            flexWrap: "wrap-reverse"
                        }
                    },
                    gap: {
                        1: {
                            gap: "$1"
                        },
                        2: {
                            gap: "$2"
                        },
                        3: {
                            gap: "$3"
                        },
                        4: {
                            gap: "$4"
                        },
                        5: {
                            gap: "$5"
                        },
                        6: {
                            gap: "$6"
                        },
                        7: {
                            gap: "$7"
                        },
                        8: {
                            gap: "$8"
                        },
                        9: {
                            gap: "$9"
                        },
                        10: {
                            gap: "$10"
                        }
                    }
                },
                defaultVariants: {
                    direction: "row",
                    align: "stretch",
                    justify: "start",
                    wrap: "no-wrap"
                }
            })
        },
        3329: function(e, t, n) {
            "use strict";
            n.d(t, {
                LZ: function() {
                    return i
                },
                Y4: function() {
                    return a
                },
                sz: function() {
                    return s
                }
            });
            var r = n(5893),
                o = n(5883);

            function i(e) {
                return (0, r.jsx)("svg", {
                    "data-arrow": "",
                    width: "16px",
                    height: "16px",
                    strokeWidth: "1.5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    color: "currentColor",
                    ...e,
                    children: (0, r.jsx)("path", {
                        d: "M6 12h12.5m0 0l-6-6m6 6l-6 6",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }

            function a(e) {
                return (0, r.jsx)(o.x, {
                    as: "svg",
                    width: "24px",
                    height: "24px",
                    strokeWidth: "1.5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    color: "currentColor",
                    ...e,
                    children: (0, r.jsx)("path", {
                        d: "M18.5 12H6m0 0l6-6m-6 6l6 6",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }

            function s(e) {
                return (0, r.jsx)("svg", {
                    width: "24px",
                    height: "24px",
                    strokeWidth: "1.5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    color: "currentColor",
                    children: (0, r.jsx)("path", {
                        d: "M12 7v6M12 17.01l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }
        },
        2537: function(e, t, n) {
            "use strict";
            n.d(t, {
                x: function() {
                    return o
                }
            });
            var r = n(6615);
            let o = (0, r.zo)("div", {
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
        1005: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return j
                },
                default: function() {
                    return k
                }
            });
            var r = n(5893),
                o = n(7294),
                i = n(1664),
                a = n.n(i),
                s = n(5675),
                l = n.n(s);

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach(function(t) {
                        var r, o;
                        r = e, o = n[t], t in r ? Object.defineProperty(r, t, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[t] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            class f extends o.Component {
                constructor(e) {
                    let t;
                    super(e), this.reCalculateColumnCount = this.reCalculateColumnCount.bind(this), this.reCalculateColumnCountDebounce = this.reCalculateColumnCountDebounce.bind(this), t = this.props.breakpointCols && this.props.breakpointCols.default ? this.props.breakpointCols.default : parseInt(this.props.breakpointCols) || 2, this.state = {
                        columnCount: t
                    }
                }
                componentDidMount() {
                    this.reCalculateColumnCount(), window && window.addEventListener("resize", this.reCalculateColumnCountDebounce)
                }
                componentDidUpdate() {
                    this.reCalculateColumnCount()
                }
                componentWillUnmount() {
                    window && window.removeEventListener("resize", this.reCalculateColumnCountDebounce)
                }
                reCalculateColumnCountDebounce() {
                    if (!window || !window.requestAnimationFrame) {
                        this.reCalculateColumnCount();
                        return
                    }
                    window.cancelAnimationFrame && window.cancelAnimationFrame(this._lastRecalculateAnimationFrame), this._lastRecalculateAnimationFrame = window.requestAnimationFrame(() => {
                        this.reCalculateColumnCount()
                    })
                }
                reCalculateColumnCount() {
                    let e = window && window.innerWidth || 1 / 0,
                        t = this.props.breakpointCols;
                    "object" != typeof t && (t = {
                        default: parseInt(t) || 2
                    });
                    let n = 1 / 0,
                        r = t.default || 2;
                    for (let o in t) {
                        let i = parseInt(o),
                            a = i > 0 && e <= i;
                        a && i < n && (n = i, r = t[o])
                    }
                    r = Math.max(1, parseInt(r) || 1), this.state.columnCount !== r && this.setState({
                        columnCount: r
                    })
                }
                itemsInColumns() {
                    let e = this.state.columnCount,
                        t = Array(e),
                        n = o.Children.toArray(this.props.children);
                    for (let r = 0; r < n.length; r++) {
                        let o = r % e;
                        t[o] || (t[o] = []), t[o].push(n[r])
                    }
                    return t
                }
                renderColumns() {
                    let {
                        column: e,
                        columnAttrs: t = {},
                        columnClassName: n
                    } = this.props, r = this.itemsInColumns(), i = `${100/r.length}%`, a = n;
                    a && "string" != typeof a && (this.logDeprecated('The property "columnClassName" requires a string'), void 0 === a && (a = "my-masonry-grid_column"));
                    let s = d(d(d({}, e), t), {}, {
                        style: d(d({}, t.style), {}, {
                            width: i
                        }),
                        className: a
                    });
                    return r.map((e, t) => o.createElement("div", c({}, s, {
                        key: t
                    }), e))
                }
                logDeprecated(e) {
                    console.error("[Masonry]", e)
                }
                render() {
                    let e = this.props,
                        {
                            children: t,
                            breakpointCols: n,
                            columnClassName: r,
                            columnAttrs: i,
                            column: a,
                            className: s
                        } = e,
                        l = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = function(e, t) {
                                if (null == e) return {};
                                var n, r, o = {},
                                    i = Object.keys(e);
                                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                            }
                            return o
                        }(e, ["children", "breakpointCols", "columnClassName", "columnAttrs", "column", "className"]),
                        u = s;
                    return "string" != typeof s && (this.logDeprecated('The property "className" requires a string'), void 0 === s && (u = "my-masonry-grid")), o.createElement("div", c({}, l, {
                        className: u
                    }), this.renderColumns())
                }
            }
            f.defaultProps = {
                breakpointCols: void 0,
                className: void 0,
                columnClassName: void 0,
                children: void 0,
                columnAttrs: void 0,
                column: void 0
            };
            var p = n(3694),
                h = n(5883),
                g = n(4094),
                m = n(2537),
                b = n(5403),
                y = n(6615),
                v = n(1117),
                w = n(2765),
                C = n(9429),
                x = n(3329),
                j = !0;

            function k(e) {
                let {
                    experiments: t
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(p.h, {
                        title: "Craft"
                    }), (0, r.jsx)(f, {
                        breakpointCols: {
                            default: 3,
                            960: 2,
                            480: 1
                        },
                        className: "grid",
                        columnClassName: "column",
                        children: t.map(e => (0, r.jsx)($, {
                            ...e
                        }, e.title + e.date))
                    })]
                })
            }

            function $(e) {
                let {
                    component: t,
                    title: n,
                    slug: i,
                    href: s,
                    date: c,
                    src: u,
                    width: d,
                    height: f,
                    placeholder: p,
                    theme: b,
                    videoStyle: y,
                    position: j,
                    writing: k
                } = e, $ = o.useRef(null), S = !!(t || s), I = (0, v.Y)($), P = String(d / f), W = "div";
                s && !t && (W = "a"), t && !s && (W = a());
                let E = {
                        ref: $,
                        className: z({
                            interactive: S
                        }),
                        "aria-label": n,
                        ...t && {
                            href: "/craft/".concat(i || (0, C.lV)(n))
                        },
                        ...s && {
                            href: s,
                            ...s.startsWith("http") && {
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }
                        }
                    },
                    F = "string" == typeof u ? u : u.src;
                return (0, r.jsxs)(W, {
                    ...E,
                    children: [(0, r.jsxs)(h.x, {
                        "data-theme": b,
                        "data-position": j,
                        css: {
                            position: "relative",
                            overflow: "hidden",
                            transform: "translateZ(0)",
                            ...S && {
                                br: 8
                            },
                            "&:after": {
                                content: "",
                                background: "linear-gradient(to top, \n      hsla(0 0% 0% / 90%), \n      50%, \n      hsla(0 0% 0% / 0)\n    )",
                                position: "absolute",
                                width: "100%",
                                height: 200,
                                bottom: -64,
                                transition: "opacity 200ms ease",
                                pointerEvents: "none"
                            },
                            '&[data-theme="light"]': {
                                "&:after": {
                                    background: "linear-gradient(to bottom, transparent, 50%, rgba(255, 255, 255, 0.9))"
                                }
                            },
                            '&[data-position="top"]': {
                                "&:after": {
                                    transform: "rotate(180deg)",
                                    bottom: "unset",
                                    top: -64
                                }
                            }
                        },
                        children: [F.includes("gif") || F.includes("png") || F.includes("jpeg") || F.includes("jpg") ? (0, r.jsx)(l(), {
                            placeholder: "blur",
                            src: u,
                            alt: n,
                            width: d,
                            height: f,
                            sizes: "50vw",
                            style: {
                                aspectRatio: P
                            }
                        }) : (0, r.jsx)(O, {
                            src: u,
                            isInView: I,
                            aspectRatio: P,
                            placeholder: p,
                            style: y
                        }), (0, r.jsxs)(g.k, {
                            justify: "between",
                            align: "center",
                            css: {
                                width: "100%",
                                height: 32,
                                gap: 12,
                                px: 4,
                                position: "absolute",
                                bottom: 8,
                                left: 0,
                                padding: 16,
                                zIndex: 1,
                                transition: "opacity 200ms ease",
                                whiteSpace: "nowrap",
                                ..."top" === j && {
                                    bottom: "unset",
                                    top: 8
                                }
                            },
                            children: [(0, r.jsx)(m.x, {
                                size: "13",
                                weight: "400",
                                css: {
                                    color: "light" === b ? w.MA.gray12 : w.hU.gray12,
                                    gap: 4,
                                    truncate: !0
                                },
                                children: n
                            }), (0, r.jsx)(m.x, {
                                size: "13",
                                css: {
                                    color: "light" === b ? w.t3.grayA11 : w.Ej.grayA11
                                },
                                children: c
                            })]
                        })]
                    }), S && (0, r.jsxs)("div", {
                        "data-fake-button": "",
                        children: [k ? "Read" : "View", " ", k ? "Post" : t ? "Prototype" : "Production", t && (0, r.jsx)(x.LZ, {}), s && (0, r.jsx)(x.LZ, {
                            style: {
                                transform: "rotate(-45deg)"
                            }
                        })]
                    })]
                })
            }

            function O(e) {
                let {
                    src: t,
                    isInView: n,
                    aspectRatio: i,
                    placeholder: a,
                    style: s
                } = e;
                console.log(s);
                let [l, c] = o.useState(!1);
                return o.useEffect(() => c(!0), []), (0, r.jsxs)("div", {
                    className: S(),
                    style: {
                        aspectRatio: i
                    },
                    children: [(0, r.jsx)(b.x, {
                        scale: 1,
                        src: a
                    }), !n && l ? null : (0, r.jsx)("video", {
                        playsInline: !0,
                        loop: !0,
                        muted: !0,
                        autoPlay: !0,
                        src: l ? (0, C.jj)(t) : null,
                        style: s
                    })]
                })
            }
            let S = (0, y.iv)({
                    position: "relative",
                    video: {
                        position: "relative"
                    }
                }),
                z = (0, y.iv)({
                    display: "block",
                    width: "100%",
                    listStyle: "none",
                    background: "#FFFFFF",
                    height: "fit-content",
                    position: "relative",
                    border: "1px solid $gray5",
                    mb: "var(--gap)",
                    overflow: "hidden",
                    br: 12,
                    transform: "translateZ(0)",
                    ".dark &": {
                        background: "$gray2"
                    },
                    "img, video": {
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    },
                    variants: {
                        interactive: {
                            true: {
                                cursor: "pointer",
                                focus: !0,
                                p: 4,
                                "[data-fake-button]": {
                                    height: 40,
                                    background: "$gray3",
                                    br: 8,
                                    center: !0,
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: "$gray12",
                                    mt: 4,
                                    display: "flex",
                                    gap: 4,
                                    transition: "background 150ms ease, color 150ms ease"
                                },
                                "&:hover, &:focus-visible": {
                                    "[data-fake-button]": {
                                        background: "$gray4",
                                        color: "$gray12"
                                    }
                                }
                            }
                        }
                    }
                })
        },
        1117: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return s
                }
            });
            var r = n(7294),
                o = n(1732),
                i = n(6463);
            let a = {
                any: 0,
                all: 1
            };

            function s(e, {
                root: t,
                margin: n,
                amount: s,
                once: l = !1
            } = {}) {
                let [c, u] = (0, r.useState)(!1);
                return (0, r.useEffect)(() => {
                    if (!e.current || l && c) return;
                    let r = () => (u(!0), l ? void 0 : () => u(!1)),
                        d = {
                            root: t && t.current || void 0,
                            margin: n,
                            amount: "some" === s ? "any" : s
                        };
                    return function(e, t, {
                        root: n,
                        margin: r,
                        amount: s = "any"
                    } = {}) {
                        if ("undefined" == typeof IntersectionObserver) return () => {};
                        let l = (0, o.I)(e),
                            c = new WeakMap,
                            u = e => {
                                e.forEach(e => {
                                    let n = c.get(e.target);
                                    if (!!n !== e.isIntersecting) {
                                        if (e.isIntersecting) {
                                            let n = t(e);
                                            (0, i.m)(n) ? c.set(e.target, n): d.unobserve(e.target)
                                        } else n && (n(e), c.delete(e.target))
                                    }
                                })
                            },
                            d = new IntersectionObserver(u, {
                                root: n,
                                rootMargin: r,
                                threshold: "number" == typeof s ? s : a[s]
                            });
                        return l.forEach(e => d.observe(e)), () => d.disconnect()
                    }(e.current, r, d)
                }, [t, e, n, l]), c
            }
        }
    },
    function(e) {
        e.O(0, [675, 774, 888, 179], function() {
            return e(e.s = 5706)
        }), _N_E = e.O()
    }
]);