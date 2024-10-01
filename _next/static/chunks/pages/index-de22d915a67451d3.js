(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        1732: function (e, t, r) {
            "use strict";

            function n(e, t) {
                var r;
                return "string" == typeof e ? t ? (null !== (r = t[e]) && void 0 !== r || (t[e] = document.querySelectorAll(e)), e = t[e]) : e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || [])
            }
            r.d(t, {
                I: function () {
                    return n
                }
            })
        },
        6463: function (e, t, r) {
            "use strict";
            r.d(t, {
                m: function () {
                    return n
                }
            });
            let n = e => "function" == typeof e
        },
        8312: function (e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return r(6329)
            }])
        },
        9408: function (e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/dirty.6c2beb3c.png",
                height: 582,
                width: 1510,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAElBMVEUGCREfHRwxLCU8MiZZSzxTSD2RIis1AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAH0lEQVR4nBXGsQ0AAAjDsKSF/19GeDK2CpCJ+WlmhQMB7wAkt9SWcgAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 3
            }
        },
        5403: function (e, t, r) {
            "use strict";
            r.d(t, {
                x: function () {
                    return a
                }
            });
            var n = r(5893),
                i = r(6615);
            let o = "undefined" != typeof navigator && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

            function a(e) {
                let {
                    scale: t = 1,
                    style: r,
                    ...i
                } = e;
                return (0, n.jsx)("img", {
                    "aria-hidden": "true",
                    className: s(),
                    style: {
                        filter: o ? "blur(10px)" : "blur(32px)",
                        transform: "scale(".concat(t, ") translateZ(0)"),
                        ...r
                    },
                    ...i
                })
            }
            let s = (0, i.iv)({
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
        2537: function (e, t, r) {
            "use strict";
            r.d(t, {
                x: function () {
                    return i
                }
            });
            var n = r(6615);
            let i = (0, n.zo)("div", {
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
        9401: function (e, t, r) {
            "use strict";
            r.d(t, {
                s: function () {
                    return i
                }
            });
            var n = r(7294);

            function i() {
                let [e, t] = n.useState(!1);
                return n.useEffect(() => {
                    t(!0)
                }, []), e
            }
        },
        6329: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSP: function () {
                    return S
                },
                default: function () {
                    return M
                }
            });
            var n = r(5893),
                i = r(4960),
                o = r(2064),
                a = r(566),
                s = r(578),
                l = r(1117),
                c = r(1664),
                d = r.n(c),
                u = r(5675),
                f = r.n(u),
                g = r(7294),
                h = r(3935),
                m = r(6615),
                A = r(5883),
                p = r(5403),
                y = r(2537);
            let x = g.forwardRef(function (e, t) {
                let {
                    children: r,
                    variant: i,
                    href: o,
                    css: a,
                    internal: s = !1,
                    className: l,
                    ...c
                } = e;
                return (0, n.jsx)("a", {
                    ref: t,
                    href: o,
                    ...!s && {
                        target: "_blank",
                        rel: "noopener noreferrer"
                    },
                    className: "".concat(v({
                        variant: i,
                        css: a
                    }), " ").concat(l),
                    ...c,
                    children: r
                })
            }),
                v = (0, m.iv)({
                    textDecoration: "none",
                    color: "$gray11",
                    transition: "color 150ms ease",
                    br: 4,
                    focus: !0,
                    "&:hover": {
                        color: "$gray12"
                    }
                });
            var b = r(8448),
                w = r(9401),
                j = r(2905),
                E = r(9660),
                C = r(9429),
                z = r(9408);
            let V = e => {
                let t = () => !!e.match(/Android/i),
                    r = () => !!e.match(/Opera Mini/i),
                    n = () => !!e.match(/iPhone|iPad|iPod/i),
                    i = () => !!e.match(/IEMobile/i),
                    o = () => !!e.match(/SSR/i),
                    a = () => !!e.match(/Firefox/i),
                    s = () => !!e.match(/Safari/i) && !e.match(/Chrome/i),
                    l = () => !!(t() || n() || r() || i()),
                    c = () => !!(!l() && !o());
                return {
                    isMobile: l,
                    isDesktop: c,
                    isAndroid: t,
                    isFirefox: a,
                    isSSR: o,
                    isIOS: n,
                    isSafari: s
                }
            },
                R = () => {
                    let e = "undefined" == typeof navigator ? "SSR" : navigator.userAgent;
                    return V(e)
                };

            function B(e) {
                return "\n      translate(calc(-50% + var(--x)), calc(-50% + var(--y))) \n      skewX(".concat(-0, "deg)\n      skewY(").concat(0, "deg)\n      scaleX(2)\n      scale(").concat((0, C.uZ)(e / 2560, .2, .6), ")\n      rotate(var(--rotate))\n      translateZ(0)\n    ")
            }
            var S = !0;

            function M(e) {
                let {
                    lastVisitor: t
                } = e, r = (0, b.a)("(max-width: 600px) or (hover: none)"), {
                    isSafari: l,
                    isFirefox: c
                } = R(), d = r || l() || c(), u = (0, w.s)(), f = g.useRef(), h = g.useRef(null), m = g.useRef(!1), p = (0, i.c)(0), y = (0, i.c)(0), x = (0, i.c)(0);

                
                g.useEffect(() => (document.body.style.overflow = "hidden", document.body.style["overscroll-behavior"] = "none", () => {
                    document.body.style.overflow = "", document.body.style["overscroll-behavior"] = ""
                }), []), P(e => {
                    let {
                        screenWidth: t
                    } = e, r = f.current;
                    r.style.setProperty("transform", B(t))
                }), (0, j.z)("mouseup", v), (0, j.z)("touchend", v), (0, j.z)("keydown", e => {
                    " " === e.key && (m.current = !0, document.body.classList.add("pan-camera"))
                }), (0, j.z)("keyup", e => {
                    " " === e.key && (m.current = !1, document.body.classList.remove("pan-camera"))
                });


                function S() {
                    let e = (0, C.J)(Object.keys(U));
                    V({
                        id: e
                    })
                }
                
                function handleClick() {
                    console.log("clicado");
                
                    // Verifica se o card já existe
                    if (!document.getElementById("icon")) {
                        // Cria o elemento div para o card
                        const cardDiv = document.createElement("div");
                        cardDiv.id = "icon"; // Define um id para o card
                        cardDiv.style.position = "fixed";
                        cardDiv.style.top = "20%";
                        cardDiv.style.left = "50%";
                        cardDiv.style.opacity = "1";
                        cardDiv.style.width = "10%";
                        cardDiv.style.height = "10%"; // Ajuste para que a altura seja proporcional
                        cardDiv.style.backgroundColor = "#ffff";
                        cardDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                        cardDiv.style.zIndex = "1000";
                        cardDiv.style.borderRadius = "10px";
                        cardDiv.style.overflow = "hidden";
                    
                        // Adiciona o iframe ao card
                        const imgElement = document.createElement("img");
                        imgElement.src = "assets/tlm.png"; // Caminho para o arquivo da imagem
                        imgElement.alt = "Icon"; // Adiciona texto alternativo para a imagem
                        imgElement.style.width = "100%"; // Garantir que a imagem preencha a largura do card
                        imgElement.style.height = "100%"; // Ajuste para preencher a altura
                    
                        // Adiciona a imagem ao card
                        cardDiv.appendChild(imgElement);
                    
                        // Adiciona o card ao body
                        document.body.appendChild(cardDiv);
                    }
                }
                

                function handleClick2() {
                    console.log("clicado2");
                }
                
                function handleClic3k() {
                    console.log("clicado3");
                }
                function handleClic4k() {
                    console.log("clicado4");
                }
                function MyComponent() {
                    // Chama a função diretamente no corpo do componente
                    handleClick();}
                    MyComponent();
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("h1", {
                        className: "vh",
                        children: ""
                    }), (0, n.jsx)(A.x, {
                        as: a.E.div,
                        css: {
                            "--grid-cell-size": "80px",
                            "--grid-width": "1px",
                            "--grid-border": "var(--grid-width) solid var(--colors-gray4)",
                            "--crosshair-size": "calc(var(--grid-cell-size) / 4)",
                            height: "100vh",
                            
                            touchAction: "none"
                        },
                        onTouchStart: () => {
                            if (!h.current) {
                                let e = document.querySelectorAll("cell");
                                h.current = e
                            }
                        },
                        onTouchMove: e => {
                            h.current.forEach(Q);
                            let t = document.elementsFromPoint(e.touches[0].clientX, e.touches[0].clientY).filter(e => "CELL" === e.tagName);
                            t.forEach(O)
                        },
                        onTouchEnd: () => {
                            h.current.forEach(Q)
                        },
                        
                       
                        children: (0, n.jsxs)(A.x, {
                            ref: f,
                            as: a.E.div,
                            css: {
                                display: "grid",
                                borderRight: "var(--grid-border)",
                                borderTop: "var(--grid-border)",
                                gridTemplateColumns: "repeat(30, 1fr)",
                                gridTemplateRows: "repeat(30, 1fr)",
                                position: "fixed",
                                top: "50%",
                                left: "50%",
                                opacity: 0,
                                transition: "opacity 300ms ease",
                                willChange: "transform",
                                "[letter]": {
                                    position: "absolute",
                                    zIndex: 2,
                                    pointerEvents: "none",
                                    opacity: 0,
                                    animationDuration: "250ms",
                                    animationDelay: "var(--delay)",
                                    path: {
                                        fill: "$gray12"
                                    }
                                }
                            },
                            style: {
                                "--rotate": (0, s.H)(p, e => "".concat(e, "deg")),
                                "--x": (0, s.H)(y, e => "".concat(e, "px")),
                                "--y": (0, s.H)(x, e => "".concat(e, "px")),
                                opacity: u ? 1 : 0,
                                transform: B(0)
                            },
                            children: [(0, n.jsx)(Z, {
                                className: "fade",
                                style: {
                                    "--delay": "0ms",
                                    gridColumn: "".concat(11, " / ").concat(11),
                                    gridRow: "".concat(16, " / span 1")
                                }
                            }), (0, n.jsx)(L, {
                                className: "fade",
                                style: {
                                    "--delay": "0ms",
                                    gridColumn: "".concat(13, " / ").concat(14),
                                    gridRow: "".concat(18, " / span 1")
                                }
                            }), (0, n.jsx)(F, {
                                className: "fade",
                                style: {
                                    "--delay": "0ms",
                                    gridColumn: "".concat(15, " / ").concat(16),
                                    gridRow: "".concat(16, " / span 1")
                                }
                            }), (0, n.jsx)(H, {
                                className: "fade",
                                style: {
                                    "--delay": "0ms",
                                    gridColumn: "".concat(17, " / ").concat(18),
                                    gridRow: "".concat(18, " / span 1")
                                }
                            }), (0, n.jsx)(I, {
                                className: "fade",
                                style: {
                                    "--delay": "00ms",
                                    gridColumn: "".concat(19, " / ").concat(20),
                                    gridRow: "".concat(16, " / span 1")
                                }
                            }), (0, n.jsx)(k, {

                                href: "Plataforma TLM Geral",
                                onClick: (event) => {
                                    event.preventDefault(); // Impede a navegação padrão do link
                                    handleClick(); // Chama a função handleClick
                                },
                                src: (0, C.jj)("/assets/Plataforma_TLM_Geral.mp4"),
                                shadow: {
                                    default: "#193A3E55",
                                    pressed: "#00132960"
                                },
                                style: {
                                    gridColumn: "15 / 13",
                                    gridRow: "15 / 12"
                                }
                            }), (0, n.jsx)(k, {
                                placeholder: "data:image/png;base64,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",
                                href: "Opções de operação",
                                alt: "",
                                onClick: (event) => {
                                    event.preventDefault(); // Impede a navegação padrão do link
                                    handleClick2(); // Chama a função handleClick
                                },
                                src: (0, C.jj)("assets/Opes_Lic_Sup.mp4"),

                                shadow: {
                                    default: "#392C9C50",
                                    pressed: "#1C154C60",

                                },
                                style: {
                                    gridColumn: "11 / 9",
                                    gridRow: "18 / 15",

                                }
                            }), (0, n.jsx)(k, {
                                href: "https://www.tlm.net.br/",
                                alt: "Person laying on bed with hands behind their head, the photo has a vignette on the edges, suggesting that it was captured from behind an object, say a closet.",
                                src: "assets/logo-tlm.png",

                                style: {
                                    gridColumn: "18 / 14",
                                    gridRow: "18 / 16",

                                }
                            }), (0, n.jsx)(k, {
                                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAATCAIAAADqEDFSAAAACXBIWXMAAAAAAAAD6AF+hNEZAAAE40lEQVQ4jT3RaW/aBgDGcX/VvZy0atKqdk2yplmzdU0byAHhaCAJIZAY24DvG3MEsA3Y2AYD5jKBAAnJtmpfYGKb9gV++ut5AL3drhtm027r7bbWthqWobfbjVZLbRqyptVMQ2lqrCTdymVBEhiepgUap/EMns1kEZzEpLzAC7QgMvm8CJi9nt62a4bRaLWaHbtumXXL0Not1TBy5UpZlfOVIieyBIXyIkOxJEqgnMDmJBEn8AyaoVgqg2VpluJ5BrB6PctxGi3TtC3NqMlq2TDrPcd0HMsw5GKBuE6cshxqmkqpSIp8hqXTDJ0WODwnUJLElko8x9MYgVE0AbT6fc22Oz1rtejOJ+bzsv/nk/v1efL1yX2YttQyfvDh5fXF0V9/TOoVjIRDOBTgsGglB1k1tmsWukbuNPAxFr+gWQpo2nZVbzp9czltTcfGw333adH/feU+P46nY0MuYb7PP15FPU+PfaWE4VAYh4IcdlEWEUNlO818tykef946Oz8VRA6om00uLzXqxdlYvxvqy2lnbT26T8vhZKjLRdT36U0y6n16cKqFDLHuWluVHNyUaUsTOkbO59n2Hu4TJAYUK3k+JzTqxelIc/uNxZ29mjvPy9HTYjAZNNbW5zfX54erRa+SRwg4TEBBHj+vSlBTWVu2IQa8O8FQIAWBgFSUaI7R6sW7oTbu1+eT9uO897QYruYDd6ApRcy/vwHGjlbLXkWCcThEImGRiFUl2FSZdkOwNf7E+zMIJtY/ilKOoAlVzk2G2sip3U+sfyYbrOaO26+rJezEswHGjtddEoxDwbVFxuQ8bKpUS+NsjQscvE9ex3meBmiWRdCsXBEmg8awV5uNzeWsu5o7j/ddt19TS1jAs5mKHa/m3bKYIpEQlf6Soy7XlkJZddZusIGDnZubq0JBBEiagrMZucpPBrVBV5mO9MXUfrjvLme269Rqt1jAs5GK+R7v7VsxRcAhCllbSgExFNKqMbbGnXh3Li8jFI0CQi6XRtFqmXcdZdBR7obafNJaW1Pb7alqCQ94NqC4/2HW+tcikfD/lq1xXZ33e9+dRoIYngGkQoGgaKUqjDqyY8vuoD5zjcXUXty1xl1FLeFBzyZ06V9MzFsBxOEQAYckOq4U0qZC2eu9WL/nXSQSEngaEEQeJQi5wo/sitOujpzadKTfT6yZa4w7ilrCgt5N8OJo7jbLYgqH1laBTSgFxFSojs7bDca3v30aCTEsAVA0lcHQtdWuDNpV16ndDfV715yNm6OOrJawsHcLPD+cjfSyCGKpIA79Z1kq09H5js4d7m35fYckkQayWBaEU8U82beKPaM4tMuTQW3uGnO3eddX9QoZ9m7enB8s70xZgig4RCPhEp+slTLtOtPROLtBf9p9FQr6cBQBaIaEEDh5fZWIR6ORk2gkEAoc+o8+7e/t7v26vb31w4tvv9l49Z1n793OTy+3Xr94u/H97vbr33a3Dj+/93k/HO3vfvzlLXhzhWMIIAo8hmcphqIYmqAIiiFQLAOmEpeXZ9FoyO87OD70RL8E4rHTi/Nw5MvJWTQUj58l4hfgdRwCk9k0xJAYmoXRLAxk0QyEgDzPiiInSXwux3IcRVBoFkPSWSiVSt4kL1Ng4jp5mUhcQKkkCMYZCsMwBMfTJJGmKZShUAJLUyT6N8mPFWumql/3AAAAAElFTkSuQmCC",
                                href: "http://127.0.0.1:5500/assets/Integração.mp4",
                                onClick: (event) => {
                                    event.preventDefault(); // Impede a navegação padrão do link
                                    handleClic3k(); // Chama a função handleClick
                                },
                                src: (0, C.jj)("assets/Integrao.mp4", 1),
                                style: {
                                    gridColumn: "22 / 20",
                                    gridRow: "19 / 16"
                                }
                            }), (0, n.jsx)(k, {
                                placeholder: "data:image/png;base64,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",
                                href: "http://127.0.0.1:5500/assets/direo.mp4",
                                onClick: (event) => {
                                    event.preventDefault(); // Impede a navegação padrão do link
                                    handleClic4k(); // Chama a função handleClick
                                },
                                src: (0, C.jj)("assets/direo.mp4"),
                                shadow: {
                                    default: "#3F251C55",
                                    pressed: "#2A191360"
                                },
                                style: {
                                    gridColumn: "14 / 12",
                                    gridRow: "22 / 19"
                                }
                            }), Array(1e3).fill(null).map((e, t) => (0, n.jsx)(N, {
                                onMouseDown: S
                            }, t))]
                        })
                    }), (0, n.jsx)(X, {
                        "aria-hidden": !0
                    }), (0, n.jsx)(J, {
                        lastVisitor: t
                    }), (0, n.jsx)("svg", {
                        id: "c",
                        viewBox: "0 0 114 113",
                        children: (0, n.jsx)("path", {
                            d: "M57.5 0L57.5 113M0.5 56H113.5",
                            stroke: "var(--colors-gray9)",
                            strokeWidth: "3"
                        })
                    })]
                })
            }

            function k(e) {
                let {
                    href: t,
                    placeholder: r,
                    alt: i,
                    width: o,
                    height: a,
                    fit: s,
                    delay: l,
                    src: c,
                    style: u,
                    shadow: h = {
                        default: "rgba(66, 66, 66, 0.3)",
                        pressed: "rgba(66, 66, 66, 0.4)"
                    },
                    ...m
                } = e, y = g.useRef(null), x = "string" == typeof c, [v, b] = g.useState(!1), [w, j] = g.useState({
                    x: 0,
                    y: 0
                });
                return g.useEffect(() => {
                    if (!x) return;
                    let e = y.current;
                    e && (v ? e.play() : e.pause())
                }, [v, x]), (0, n.jsxs)(n.Fragment, {
                    children: [v && (0, n.jsx)(T, {
                        coordinates: w,
                        children: t
                    }), (0, n.jsx)(A.x, {
                        link: "",
                        as: d(),
                        "aria-label": t,
                        href: t,
                        className: "fade",
                        css: {
                            display: "block",
                            "--filter": "grayscale(0) blur(0.00001px)",
                            position: "absolute",
                            userSelect: "none",
                            "-webkit-user-drag": "none",
                            background: "$gray2",
                            size: "100%",
                            animationDuration: "800ms",
                            zIndex: 2,
                            opacity: 0,
                            boxShadow: "32px 32px 50px 0px var(--shadow-default)",
                            cursor: "pointer",
                            WebkitTapHighlightColor: "transparent",
                            filter: "var(--filter)",
                            borderRadius: "50px",

                            transition: "filter 500ms ease, box-shadow 200ms cubic-bezier(.25, .46, .45, .94), transform 200ms cubic-bezier(.25, .46, .45, .94)",
                            "&:after": {
                                content: "",
                                size: "calc(100% + 16px)",
                                inset: -8,
                                boxShadow: "0 0 0 3px $colors$focus",
                                position: "absolute",
                                display: "none"
                            },
                            "&:hover": {
                                filter: "grayscale(0)"
                            },
                            "&:active": {
                                boxShadow: "8px 8px 12px -4px var(--shadow-pressed)",
                                transform: "scale(0.96)"
                            },
                            "&:focus-visible": {
                                outline: 0,
                                filter: "grayscale(0)",
                                "&:after": {
                                    display: "block"
                                }
                            },
                            video: {
                                objectFit: "cover",
                                zIndex: 1,
                                position: "relative",
                                boxShadow: "0 0 1px rgba(255, 255, 255, 0)"
                            },
                            "img, video": {
                                userSelect: "none",
                                "-webkit-user-drag": "none",
                                transition: "filter 500ms ease",
                                size: "100%"
                            },
                            ...x && {
                                boxShadow: "32px 50px 50px 0px var(--shadow-default)"
                            }
                        },
                        style: {
                            ...u,
                            animationDelay: "".concat(l, "s"),
                            "--shadow-default": "".concat(h.default),
                            "--shadow-pressed": "".concat(h.pressed)
                        },
                        onPointerEnter: e => {
                            "touch" !== e.pointerType && b(!0)
                        },
                        
                        onMouseLeave: () => b(!1),
                        ...m,
                        children: x ? (0, n.jsxs)(A.x, {
                            css: {
                                overflow: "hidden",
                                size: "100%",
                                position: "relative"
                            },
                            children: [(0, n.jsx)(p.x, {
                                src: "assets/logo-tlm.png",
                                style: {
                                    filter: "",
                                    width: "fit-content",
                                    height: "85%"

                                }
                            }), (0, n.jsx)("video", {
                                ref: y,

                                muted: !0,

                                controls: !1,
                                width: o,
                                height: a,
                                src: c
                            })]

                        }) : (0, n.jsx)(f(), {
                            width: o,
                            height: a,
                            src: c,
                            placeholder: "blur",
                            sizes: "20vw",
                            alt: i,
                            style: {
                                objectFit: s
                            }
                        })
                    })]
                })
            }

            function T(e) {
                let {
                    coordinates: t,
                    children: r
                } = e, i = g.useRef(null), o = g.useRef(null), a = t.y - 200, s = g.useRef({
                    x: 0,
                    y: 0
                });
                return g.useEffect(() => {
                    let e = e => {
                        s.current.x = e.clientX, s.current.y = e.clientY
                    };
                    return window.addEventListener("mousemove", e), () => {
                        window.removeEventListener("mousemove", e)
                    }
                }, []), g.useEffect(() => {
                    let e = i.current;
                    if (!e) return;
                    let {
                        top: r
                    } = e.getBoundingClientRect();
                    if (r < 0 && null === o.current && (o.current = t.y, console.log(o.current)), o.current) {
                        let e = (0, C.uZ)(s.current.y - 40, 0, 160);
                        if (160 === e) {
                            i.current.style.top = r;
                            return
                        }
                        i.current.style.top = 0, i.current.style.setProperty("--line-height", "".concat(e, "px"))
                    }
                }, [t.y]), (0, n.jsx)(n.Fragment, {
                    children: (0, h.createPortal)((0, n.jsxs)(A.x, {
                        ref: i,
                        css: {
                            "--line-height": "".concat(160, "px"),
                            position: "fixed",
                            mixBlendMode: "difference",
                            pointerEvents: "none",
                            span: {
                                color: "white"
                            }
                        },
                        style: {
                            left: t.x,
                            top: a
                        },
                        children: [(0, n.jsx)(y.x, {
                            as: "span",
                            family: "mono",
                            size: 12,
                            children: r
                        }), (0, n.jsx)(A.x, {
                            line: "",
                            css: {
                                height: "var(--line-height)",
                                width: 1,
                                background: "white"
                            }
                        })]
                    }), document.body)
                })
            }

            function Z(e) {
                return (0, n.jsx)
            }

            function L(e) {
                return (0, n.jsx)
            }

            function F(e) {
                return (0, n.jsx)
            }

            function H(e) {
                return (0, n.jsx)
            }

            function I(e) {
                return (0, n.jsx)
            }

            function O(e) {
                let t = (0, C.J)(K);
                e.style.setProperty("--transition", "background 0ms ease"), e.style.background = t
            }

            function Q(e) {
                e.style.setProperty("--transition", "background 2s ease"), e.style.background = "transparent"
            }

            function N(e) {
                let {
                    onMouseDown: t
                } = e, r = g.useRef(), i = (0, l.Y)(r, {
                    amount: "some"
                }), o = {
                    onMouseEnter: e => O(e.target),
                    onMouseLeave: e => Q(e.target),
                    onMouseDown: t
                };
                return (0, n.jsx)("grid", {
                    ref: r,
                    className: W(),
                    children: i && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("cell", {
                            index: "1",
                            ...o
                        }), (0, n.jsx)("cell", {
                            ...o
                        }), (0, n.jsx)("cell", {
                            index: "2",
                            ...o
                        }), (0, n.jsx)("cell", {
                            index: "3",
                            ...o
                        }), (0, n.jsx)("svg", {
                            children: (0, n.jsx)("use", {
                                href: "#c"
                            })
                        })]
                    })
                })
            }
            let W = (0, m.iv)({
                border: "var(--grid-border)",
                borderTop: 0,
                borderRight: 0,
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridTemplateRows: "repeat(2, 1fr)",
                size: "var(--grid-cell-size)",
                position: "relative",
                userSelect: "none",
                cell: {
                    transition: "opacity 250ms ease-out, var(--transition)",
                    '&[index="1"]': {
                        borderRight: "var(--grid-border)"
                    },
                    '&[index="2"]': {
                        borderTop: "var(--grid-border)",
                        borderRight: "var(--grid-border)"
                    },
                    '&[index="3"]': {
                        borderTop: "var(--grid-border)"
                    },
                    "&:active": {
                        opacity: .2
                    }
                },
                svg: {
                    width: "var(--crosshair-size)",
                    height: "calc(var(--crosshair-size) + 1px)",
                    position: "absolute",
                    margin: "calc(var(--grid-cell-size) / 2 - var(--crosshair-size) / 2 - var(--grid-width))"
                }
            });

            function J(e) {
                let {
                    lastVisitor: t
                } = e, [r, i] = g.useState(""), [o, a] = g.useState(null), s = g.useRef(null);
                return P(e => {
                    let {
                        screenWidth: t,
                        screenHeight: r
                    } = e;
                    s.current.innerText = "".concat(t, "x").concat(r)
                }), g.useEffect(() => {
                    if (null == t ? void 0 : t.country) {
                        let e = new Intl.DisplayNames(["en"], {
                            type: "region"
                        }),
                            r = e.of(t.country);
                        a(r)
                    }
                }, [t]), g.useEffect(() => {
                    i(D());
                    let e = setInterval(() => {
                        i(D())
                    }, 1e3);
                    return () => clearInterval(e)
                }, []), (0, n.jsxs)(A.x, {
                    css: {
                        "> *": {
                            position: "fixed",
                            zIndex: 2,
                            opacity: 0
                        },
                        "@mobile": {
                            display: "none"
                        }
                    },
                    children: [(0, n.jsx)(y.x, {
                        lineHeight: 16,
                        className: "fade",
                        family: "mono",
                        color: "gray11",
                        size: {
                            "@initial": 12,
                            "@tablet": 10
                        },
                        as: "div",
                        css: {
                            top: 32,
                            left: 32
                        },
                        children: r
                    }), (0, n.jsx)(y.x, {
                        ref: s,
                        lineHeight: 16,
                        className: "fade",
                        family: "mono",
                        color: "gray11",
                        size: {
                            "@initial": 12,
                            "@tablet": 10
                        },
                        as: "div",
                        css: {
                            bottom: 32,
                            left: 32
                        },
                        "aria-label": "Screen size in pixels",
                        children: "1920x1080"
                    }), t && o && (0, n.jsxs)(y.x, {
                        lineHeight: 16,
                        className: "fade",
                        family: "mono",
                        color: "gray11",
                        size: {
                            "@initial": 12,
                            "@tablet": 10
                        },
                        as: "div",
                        css: {
                            bottom: 32,
                            right: 32
                        },
                        children: ["Last visit from ", t.city, ", ", o]
                    }),]
                })
            }

            function P(e) {
                g.useEffect(() => {
                    function t() {
                        e({
                            screenWidth: window.innerWidth,
                            screenHeight: window.innerHeight
                        })
                    }
                    return window.addEventListener("resize", t), t(), () => window.removeEventListener("resize", t)
                }, [])
            }
            let X = (0, m.zo)("div", {
                $$fadeTo: "$colors$lowContrast",
                ".dark &": {
                    $$fadeTo: "$colors$gray1"
                },
                position: "fixed",
                background: "radial-gradient(ellipse at center, transparent 50%, $$fadeTo 100%)",
                maskImage: "radial-gradient(ellipse at center, transparent 50%, black 100%)",
                size: "100%",
                inset: 0,
                backdropFilter: "blur(4px)",
                pointerEvents: "none",
                userSelect: "none"
            });

            function D() {
                let e = new Date().toLocaleTimeString([], {
                    timeZone: "Europe/Tallinn",
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                }),
                    [, t] = e.split(", ");
                return t
            } (0, a.E)(g.forwardRef(function (e, t) {
                return (0, n.jsx)(d(), {
                    ...e,
                    ref: t
                })
            }));
            let K = ["var(--colors-blue9)", "var(--colors-amber9)", "var(--colors-green9)"],
                Y = {
                    type: "spring",
                    stiffness: 150,
                    damping: 19,
                    mass: 1.2
                },
                U = {
                    1: [0, 4e3],
                    2: [4e3, 3e3],
                    3: [7e3, 3e3],
                    4: [14e3, 4e3],
                    5: [18e3, 4e3],
                    6: [22e3, 4e3],
                    7: [26e3, 4e3],
                    8: [3e4, 4e3],
                    9: [34e3, 4e3],
                    10: [38e3, 4e3],
                    11: [42e3, 4e3],
                    12: [46e3, 3e3],
                    13: [52e3, 3e3],
                    14: [55e3, 3e3],
                    15: [58e3, 3e3],
                    16: [61e3, 3e3],
                    17: [64e3, 3e3],
                    18: [67e3, 3e3],
                    19: [7e4, 3e3],
                    20: [73e3, 3e3],
                    21: [76e3, 3e3],
                    22: [79e3, 3e3],
                    23: [82e3, 1e3],
                    24: [83e3, 1e3],
                    25: [84e3, 1e3],
                    26: [85e3, 3e3],
                    27: [88e3, 4e3],
                    28: [92e3, 2e3],
                    29: [94e3, 2e3],
                    30: [96e3, 2e3],
                    31: [96e3, 2e3],
                    32: [98e3, 2e3],
                    33: [98e3, 2e3],
                    34: [1e5, 2e3],
                    35: [102e3, 1e3],
                    36: [103e3, 1e3],
                    37: [104e3, 2e3]
                }
        },
        1117: function (e, t, r) {
            "use strict";
            r.d(t, {
                Y: function () {
                    return s
                }
            });
            var n = r(7294),
                i = r(1732),
                o = r(6463);
            let a = {
                any: 0,
                all: 1
            };

            function s(e, {
                root: t,
                margin: r,
                amount: s,
                once: l = !1
            } = {}) {
                let [c, d] = (0, n.useState)(!1);
                return (0, n.useEffect)(() => {
                    if (!e.current || l && c) return;
                    let n = () => (d(!0), l ? void 0 : () => d(!1)),
                        u = {
                            root: t && t.current || void 0,
                            margin: r,
                            amount: "some" === s ? "any" : s
                        };
                    return function (e, t, {
                        root: r,
                        margin: n,
                        amount: s = "any"
                    } = {}) {
                        if ("undefined" == typeof IntersectionObserver) return () => { };
                        let l = (0, i.I)(e),
                            c = new WeakMap,
                            d = e => {
                                e.forEach(e => {
                                    let r = c.get(e.target);
                                    if (!!r !== e.isIntersecting) {
                                        if (e.isIntersecting) {
                                            let r = t(e);
                                            (0, o.m)(r) ? c.set(e.target, r) : u.unobserve(e.target)
                                        } else r && (r(e), c.delete(e.target))
                                    }
                                })
                            },
                            u = new IntersectionObserver(d, {
                                root: r,
                                rootMargin: n,
                                threshold: "number" == typeof s ? s : a[s]
                            });
                        return l.forEach(e => u.observe(e)), () => u.disconnect()
                    }(e.current, n, u)
                }, [t, e, r, l]), c
            }
        }
    },
    function (e) {
        e.O(0, [675, 774, 888, 179], function () {
            return e(e.s = 8312)
        }), _N_E = e.O()
    }
]);