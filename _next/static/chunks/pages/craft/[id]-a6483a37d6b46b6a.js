(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [104], {
        4090: function(e, t, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/craft/[id]", function() {
                return i(1767)
            }])
        },
        9408: function(e, t) {
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
        5403: function(e, t, i) {
            "use strict";
            i.d(t, {
                x: function() {
                    return r
                }
            });
            var n = i(5893),
                a = i(6615);
            let s = "undefined" != typeof navigator && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

            function r(e) {
                let {
                    scale: t = 1.2,
                    style: i,
                    ...a
                } = e;
                return (0, n.jsx)("img", {
                    "aria-hidden": "true",
                    className: o(),
                    style: {
                        filter: s ? "blur(10px)" : "blur(32px)",
                        transform: "scale(".concat(t, ") translateZ(0)"),
                        ...i
                    },
                    ...a
                })
            }
            let o = (0, a.iv)({
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
        4094: function(e, t, i) {
            "use strict";
            i.d(t, {
                k: function() {
                    return a
                }
            });
            var n = i(6615);
            let a = (0, n.zo)("div", {
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
        3329: function(e, t, i) {
            "use strict";
            i.d(t, {
                LZ: function() {
                    return s
                },
                Y4: function() {
                    return r
                },
                sz: function() {
                    return o
                }
            });
            var n = i(5893),
                a = i(5883);

            function s(e) {
                return (0, n.jsx)("svg", {
                    "data-arrow": "",
                    width: "16px",
                    height: "16px",
                    strokeWidth: "1.5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    color: "currentColor",
                    ...e,
                    children: (0, n.jsx)("path", {
                        d: "M6 12h12.5m0 0l-6-6m6 6l-6 6",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }

            function r(e) {
                return (0, n.jsx)(a.x, {
                    as: "svg",
                    width: "24px",
                    height: "24px",
                    strokeWidth: "1.5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    color: "currentColor",
                    ...e,
                    children: (0, n.jsx)("path", {
                        d: "M18.5 12H6m0 0l6-6m-6 6l6 6",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }

            function o(e) {
                return (0, n.jsx)("svg", {
                    width: "24px",
                    height: "24px",
                    strokeWidth: "1.5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    ...e,
                    color: "currentColor",
                    children: (0, n.jsx)("path", {
                        d: "M12 7v6M12 17.01l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }
        },
        2537: function(e, t, i) {
            "use strict";
            i.d(t, {
                x: function() {
                    return a
                }
            });
            var n = i(6615);
            let a = (0, n.zo)("div", {
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
        9401: function(e, t, i) {
            "use strict";
            i.d(t, {
                s: function() {
                    return a
                }
            });
            var n = i(7294);

            function a() {
                let [e, t] = n.useState(!1);
                return n.useEffect(() => {
                    t(!0)
                }, []), e
            }
        },
        1767: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                SPEED_NORMAL: function() {
                    return iZ
                },
                SPEED_SLOW: function() {
                    return iP
                },
                __N_SSP: function() {
                    return iM
                },
                default: function() {
                    return iR
                },
                useCraftContext: function() {
                    return iV
                }
            });
            var n = i(5893),
                a = i(7294),
                s = i(8206),
                r = i(5675),
                o = i.n(r),
                A = i(5883),
                l = i(4094),
                c = i(3694),
                d = i(2537),
                h = i(8696),
                g = i(6615);
            let u = (0, g.iv)({
                height: 1,
                background: "$gray6",
                border: 0,
                my: "24px",
                mb: "48px"
            });

            function p(e) {
                let {
                    css: t,
                    ...i
                } = e;
                return (0, n.jsx)("hr", {
                    className: u({
                        css: t
                    }),
                    ...i
                })
            }
            var m = i(566),
                f = i(1117),
                x = i(4002),
                C = i(9429),
                w = i(5403),
                b = i(9401);
            let y = {
                ixd: [{
                    url: "ixd/iphone-unlock-c.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAACNklEQVQ4jWP4BgZfvnz5////3iNH+wM8f7dVvK0vfN9QhISKUdiNJR9r82tCAx8+e/r714+vXz9/+/bl27cvDChmHT3W7+/6p6XgbU3W+9psEKpDQrVwkZyP1ek1oX4Pnz/7/es7drP2HT3W4+34tS77eXnqy4o0nKgy/XVpUlWwDz6z9h491ulp96Eq9VFxwpOSRJyoNOlpQWxFoBfIrJ+43dXmavW6OP5ubtT9vGicKD/mQVZYmb8nfrOONzuZP82NvJYecjMjFCu6kRF6MzPsVkpAia/boxe4zdp/7HidnfGd1MDziX4XcaEk/4vJARdjPAu9nB+9eI7HrBPVlno34txPRzifjXA+G+mCjqJcT4fan410PhdqX+DugNes4ycqTDUvBlut9zbb4m99IsDqeKAtGNkcD7Q+HmRz1Nd8e5T7zmD7415Gua62BMwqM1I+7qW/0El3ubvxXje9PW4Ge9z094AYuns99Hc6a6+L81njb3PQST3b2erxyxe/sJr19/fvG/cexOgq7bWVP+Cisd9J7YCr5mEfw8O+RhB0yNvggKvGbluFIy7qq/SFk33cvv788e3rZ3SzIMb9+/dvQl9fuJxghTJfqTx3mYpgvY1ug51+g51eg71BnYVGqQJPmSJvmSJvkKb81u07/v///+XLF7gJCLMg4NfvP8fOnFu8bPmiJUsXLVm6EAUsggguW7n66u07//79+/r1K7JedLO+fv369+/f/4TAn9+/kV0EMQsAWsvZ+6dfDpsAAAAASUVORK5CYII="
                }, {
                    url: "ixd/iphone-down-swipes.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAADzElEQVQ4jVXT+VMadxQAcP61Tn7oMTbpL+20jZ2xrUljiEcKiIsu1wpuOXZREQVGReOZWK9UM22n8cSLVlFDIuCZeoDsAgL73f3uLn472HQyfT++efOZ9968p+A4ThAEAMUrwItykRNgusBBUSzlIcwCUBCgVCxeAZDnhVIl4ARRSnOAl2QoyWyhwIsiD0qh4Hk+m8stT4yN2ixNNQ/bDXhouH//zWv5+vrs5Dg08sRvbGx4pBylbKGpcZZloSTvrCzPed2kps6kqlvo8e4uLfAQAo5TyLJ8EI9HvK79bq+7um7egp91UYtPhyBC6y9m+JHumRZHT0111G3fcDTHd3chQkv+jvxIoFeDjWGqM19rsNOVYNNQEBSSLB/FY6/6vRezs6t9w5ud1JqdCI6NAoTWZ56zk0Nb4y+2uv07HmrG3HT0OgKL18GAj5mdCg2Ob/rca3TLvMeVYNj/rP39DRchDriTPe63g55sgFp9OgwQ2vhl+sJvzwXc5wEPM+SJtDbHd3ZEhOY8dD5AZ3ra3w54sgNtYX/bWYoR4Y11eHCwa9CgNgugCKnVKtnw4GAfQGhtejJnwUSXlacI1EFGcVV0e1tEaMnZUnTo8xQBaALR5jBNnjKM+K6vw8NXuArRZtGhF50m0aJdubE2pifz5nqZMkG7HtHmmK42tlOylu3NyNZ0adWlyUZkx8NOyynDvrciTT8iyghteslhFJu1q4P9AKHQ86m8SV10GqENR7QppquN75ZmDNotRSsmO42Sw4DIxm3Kesam31thbZVs1eQJFWfVFHBl8Ekvj9D69ASrU/JWbZ5Qyy3aiPr+v30tkkbeUFuw1BeaNdD0ePMn4/+sYHVFWld1rn2QxB6e11Us9PoFhFYnxo5qypM65UX9g4xOuVFVHt0OSwj9bsYSqm8vsIcXDVUpdeWKGTtPZ95Zh0eHL+9+dlpxJ/Z9WfTe7f2vPvjD11Ha8bPhN59/ePLdnWhl2Ull2eIXt/bCWzJCs9qaoy8/Pqi8vXfv0+Nvbs3VV51nrkSBV0jXxeNI1Kf95Leux2uk69hKT2H4TIdLQmhxoH+Y+OjXLnLPbIuStFdZs7e+jBAK4Pcn2+/O250nFsdLs30EU1+yN/clCEImle50qdsNP/TriWe42YY1hubnEEKxv/50GL/2Edhoo7FPp/eQZOLv42uEJkd8DkN5L278WW9qbWga7+2BEHIcp+A4jocCyPPZJJNhkiyTzLEpAUIAOB7CQjqfvbxk2WQ6leByV6W/A0AQ4NVlJsMkGSaZTSUAD3ieB4D7B0vXEgqXEm/rAAAAAElFTkSuQmCC"
                }, {
                    url: "ixd/ipad-home-swipe.mp4",
                    aspectRatio: 1.4857142857142858,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAIAAACn2JBZAAAACXBIWXMAAAAAAAAD6AF+hNEZAAAE8klEQVQ4jRXPDU8TZwAA4KtGxVoV/EBFAUGkfE2ZzCGKxkEYTMOICgx14rREoIK6sIEf4IyA0CpQWkTJNidm0W0qVUBYr+3dtdf7vnvfuyuFFhA1wEZ0P2LxDzzJg8y9X5j7sDD7fuHdv/NqUKV4CsiSGlCAKgmKwMs8yZEk4xEU3sd4WZERFMHHkTTvoxiv2+Ny4k4ABZanXBiKzH1YmPtvYf7D+7f/zKoTamByLDgZmJoOhV5PhN4EgzMTYEySFAEG4PiUPzg9Nh5SgSJMhPzTMyFZgTiJ07xPkFiKIZGZ+bmpdzOTb6fHJwNAlR48+s1y19bVY+3qtdl6e6x3uy22Tmuv9W5fT4fVcsfaY+rsvNN1p83cbrFaGNbHiyxOYgxHCSKLTEwHlYAsqWLodWhg0J6VkXc48+v8Hbm56QW6dYka7UbN8nWaZasRzcq4+ETDN8V15XmNpdGtx+MKd0e2tLXKivgxSLhGHK8QdVz2B1V5TA5OBv96OZAZpT8UEV+0YsvxCH1M/P7lmzO0kXrN6rhtCVsf//AJ1rrLdfNTx+U0V11y9cENLe23/H4JQJ7hGYfLgYAAhAGoBuSp16GBkcHUsIicxWsOayLKF0WmxGaHxe7TbdqBhOvT0xLom2lofeqgMenPcv2T0oSTOzc0t7fIsgChIKsSUEQEqhCoogD4yenQKIbu0EXmLV5fiKxq2HXkaPGVpdF7ddFZ2k3pi9bqrxxOdBr0j44k3MtPuJ+TXJy23dxlVv1AghxUeF5kEU7kOZH3UCRU4IgbzYiIytOsKUJ0TYUXG00j4dtztbHZuug9Szema9frT++Mt+1NsO3RWzP1x1KSbneZ1TEgARYqgiTzCMNzLM/RHCNC8dnwy9ykzwuXRB5Fwi6mFNjus1mHLizenLkq7oA2JnPZpnTN2uRtUduL9Ymm/PyyfV/cMjUHxmUoC4JI06wXkSBgeI7hWVmVB4btx48aa7LKTiBL65JzbPfo6y0v1iYXLIvdvzLuwIqYTN2WjEWRqdFpeTea7cUn6k3tPwkiw/Iky5JuHEVkvwL9MicKSsA/NDp46rtrt03oVWPf1WbnjR7Q0wcvNfSHJ3+5JCZbuzU7LCYzKjX/TGVXTSeVlG/o7mgRAIN7UJLCfTSBQAUCGUgqkGTw8tWLb8sbrnewZy3vSkyzJa2hshug7ja4dO15VkFNzGelKQcrzp6/Z7YQaafNK1MPmlqbaNZL+twe0k1SOMIJLMez4KMlPbM/PWNorLeESjrenHv4prRr/php+mwr3/1AfDgw2/sLfNEv2ofePnw8Xlp7P35X3q2WJq8PH3UMDw4PYASKkBRJsz6a9QEZ2ofsRUUVJ8//vtvQX9j0617j86++f1paYSup7D55eaCx6Y++a31tbU8u/fhzfUN/Tm5ZS2ujx4cNDttHHUO4x4mQDOnEnYSPUMcUTmDbzKaq6urq87WGCmNlVaWhouLUGcNpQ6Wx+lxtTXX1hdqaGuOFizVVxqrLDXXDQ889pNuBjrgxB044EcUPvD6C5ihOoBmBDkz4ZQUAyEGZkxVRkhia8SiKEBiDflUCgBNEWpRoivEwLEmSGMN4WZakKAJ1jSKEF0NdDgBFKAuyIkKZ43jGQxJuDMUJt8vtQJ0jDnQUx5wu998E4cJwJ0XhpA/DCSeGoxjm8HpdBIE60JH/AbEd4S7A/1OmAAAAAElFTkSuQmCC"
                }, {
                    url: "ixd/page-flip4.mp4",
                    aspectRatio: 1.3,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAATCAIAAADqEDFSAAAACXBIWXMAAAAAAAAD6AF+hNEZAAAE40lEQVQ4jT3RaW/aBgDGcX/VvZy0atKqdk2yplmzdU0byAHhaCAJIZAY24DvG3MEsA3Y2AYD5jKBAAnJtmpfYGKb9gV++ut5AL3drhtm027r7bbWthqWobfbjVZLbRqyptVMQ2lqrCTdymVBEhiepgUap/EMns1kEZzEpLzAC7QgMvm8CJi9nt62a4bRaLWaHbtumXXL0Not1TBy5UpZlfOVIieyBIXyIkOxJEqgnMDmJBEn8AyaoVgqg2VpluJ5BrB6PctxGi3TtC3NqMlq2TDrPcd0HMsw5GKBuE6cshxqmkqpSIp8hqXTDJ0WODwnUJLElko8x9MYgVE0AbT6fc22Oz1rtejOJ+bzsv/nk/v1efL1yX2YttQyfvDh5fXF0V9/TOoVjIRDOBTgsGglB1k1tmsWukbuNPAxFr+gWQpo2nZVbzp9czltTcfGw333adH/feU+P46nY0MuYb7PP15FPU+PfaWE4VAYh4IcdlEWEUNlO818tykef946Oz8VRA6om00uLzXqxdlYvxvqy2lnbT26T8vhZKjLRdT36U0y6n16cKqFDLHuWluVHNyUaUsTOkbO59n2Hu4TJAYUK3k+JzTqxelIc/uNxZ29mjvPy9HTYjAZNNbW5zfX54erRa+SRwg4TEBBHj+vSlBTWVu2IQa8O8FQIAWBgFSUaI7R6sW7oTbu1+eT9uO897QYruYDd6ApRcy/vwHGjlbLXkWCcThEImGRiFUl2FSZdkOwNf7E+zMIJtY/ilKOoAlVzk2G2sip3U+sfyYbrOaO26+rJezEswHGjtddEoxDwbVFxuQ8bKpUS+NsjQscvE9ex3meBmiWRdCsXBEmg8awV5uNzeWsu5o7j/ddt19TS1jAs5mKHa/m3bKYIpEQlf6Soy7XlkJZddZusIGDnZubq0JBBEiagrMZucpPBrVBV5mO9MXUfrjvLme269Rqt1jAs5GK+R7v7VsxRcAhCllbSgExFNKqMbbGnXh3Li8jFI0CQi6XRtFqmXcdZdBR7obafNJaW1Pb7alqCQ94NqC4/2HW+tcikfD/lq1xXZ33e9+dRoIYngGkQoGgaKUqjDqyY8vuoD5zjcXUXty1xl1FLeFBzyZ06V9MzFsBxOEQAYckOq4U0qZC2eu9WL/nXSQSEngaEEQeJQi5wo/sitOujpzadKTfT6yZa4w7ilrCgt5N8OJo7jbLYgqH1laBTSgFxFSojs7bDca3v30aCTEsAVA0lcHQtdWuDNpV16ndDfV715yNm6OOrJawsHcLPD+cjfSyCGKpIA79Z1kq09H5js4d7m35fYckkQayWBaEU8U82beKPaM4tMuTQW3uGnO3eddX9QoZ9m7enB8s70xZgig4RCPhEp+slTLtOtPROLtBf9p9FQr6cBQBaIaEEDh5fZWIR6ORk2gkEAoc+o8+7e/t7v26vb31w4tvv9l49Z1n793OTy+3Xr94u/H97vbr33a3Dj+/93k/HO3vfvzlLXhzhWMIIAo8hmcphqIYmqAIiiFQLAOmEpeXZ9FoyO87OD70RL8E4rHTi/Nw5MvJWTQUj58l4hfgdRwCk9k0xJAYmoXRLAxk0QyEgDzPiiInSXwux3IcRVBoFkPSWSiVSt4kL1Ng4jp5mUhcQKkkCMYZCsMwBMfTJJGmKZShUAJLUyT6N8mPFWumql/3AAAAAElFTkSuQmCC"
                }, {
                    url: "ixd/pinch-ipad2.mp4",
                    aspectRatio: 1.4857142857142858,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAIAAACn2JBZAAAACXBIWXMAAAAAAAAD6AF+hNEZAAAEpElEQVQ4jS2Sa2wUVRTHbzs7263SItQ+UoQqUawRigRKIMWQoClY0IQvBKIGisCmpVAqioUGFExb7Ha3pSwoIURJjF80bi3t7nZmdx47c+887tx57LPlFVBb4IPRaEhMxNQMcnI+nOSc/HL+53/A7IN7bt6/d3fmFzttiHJSx8ixdMNQdAxVLKXkpCglNEMWpSRSU7oBJZmHUJBkPskzbCJODFVRJJaNgtn7Lujeg/t3fr5jOdjJkFzWnp7K5qfShal0bsrGJtIMSCwtmyP5gpXNmgZR83nnxvW8aeoczyBFxDqSoQBu371949b09PVCJmthQ7185XIwNDgYCoSGB8Ph4ZGR4NDQwPnzofCF4dBQIDQ0OBDoHwwO9PX3Dg8FERQ1DfLCpIJSWEcgm08TU8OGkss7P12LeLyloLgEAFC5YnPdjv7Kd07N33qqpLmneGM3aDoGmk6C2nXAjSLKQw0O9JrEFZhIxmOxMWDZ2EkT09QyWeuHyPfe0nmUr6yoqPj5LYdW9ZkvHucXH+OrOtkF/ujTuyMlexi6YVdREQC0l6KoULDPMjExNFWVJ5koIKZuWrpl48JUZnQs4isrp3xlAIDFze2NXziv9ojLusWlHyYWdUxW7Z8o84v0a++6a1EeD0UFA72EqCbRbBPbpg6MxwI1DRYKmUk2Vlo+H3ifAgC80NKxIXxzTS9edQY3nNLqjytLjsrVn6RL17Y+YXmo8EjAtjExkW1rho6AosqKKvFiEhM9zsTnLVgAPF6Xte3wm1dm1wczq/udhjPW8s+s+h6y9PSt8ia/y/LQHo8nfD6QdrBJkG1pJtEAVCSkSDKUdKyMXhstr3gWeGgAQOOOozt/fLj167ut383svXpz59WZ18/davryt+o3Dj1h0Z5zQ2dzOWI7qoFlRRWBYahISUGUMogWjY8/U1kNaHev9/Z+zKTnIuh36DxE9p9j5K8B4Y9L1lzLnm7XRZqmS7wXRgIYQ11PqarIc3Fg2ti0dFWTLRuzSaaiphbQPgBA64HuX2fnzOzfeuERyj2ChX+5/D9wZm5n+6ePWV7aV3LpYogQKKYmEeIQ5F0fDaIRU9exMsnEKmtqAEW5Gjc2nw5/0xMKnwyeO9F/9sRAqDsYPv3Vt+s3b3c10rTX5wsFelVNhCgpSwmXpaiyqkLTxDpG49Gx6tpal1Xseamhbs/hTbv9jbver3+75bmW5iUtW+q2b6urf3khoLzFXq/XVxIMfA5ljmUmJsYjosAASeJlKEIkEvdeE1XV1Y/fGiyqLX1rU82GNRWNy8tXLitf/UrFupWVa1dUVS4s/X+A9lDDQ31Q5mIToywzLkkskKDAJuOCyGUcU9NRX3/vB/ta29r2+/372tva/P42/4H9hw+1Hek82NnZ3tXVcaTzYFdXR0eHv+fER/FYBEGeS0ZFkZFSLHBsI5XiFE3SdKipciGfzqSttK1n0kYu6xZYl3NZcn3anp62cjmSSbstYiCTQEXhMU4RQ9I1kediQBASDBu1TN22cNrBlqViHUFZEARWlviUmBB4RuAZWU5KUkJBApQ5jCVNTUGZkyVOSrEIJaHEcsnof1kSxdcHF3P7AAAAAElFTkSuQmCC"
                }, {
                    url: "ixd/pinch-earbuds.mp4",
                    aspectRatio: 1.7747440273037542,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAADAElEQVQ4jRWSa25cRRCF72YjdoAQSwCJBURYASlgxc7YM3Mf/aquqq7q7vuasS3bygOkEALEgVWg+X2ko+/TOc2nf5/+/PL505enh3eP41qmw3h3fzzcLtNxnA6VJHa2Nb5HAdJIGQffOTBapFQ13vSuQ4aAzgbTfHz656//vvzx+e+7t/fL7TQdqoySCtVDrUtGARTQSUggso8pBPSUECgQRxbsbeujTUJI0Lz/+OHdh98ff3sz3611KWWSPCkQWLA+OhLgjFI5FXLRAHvkU0tA3/Y763vk0Jn2cnM52H3z8P7hcH9cb9ZxHce16iicEQVNMBasjikVAg5APrBrzc643vrBhQEwIIMoseB2f32xuWiOD4fbN7c3jzdadDyO5VjrWmLCdmgdGJIolXVMPhpK4GC42m1ESZQieg9WNOWipWqk0Kz36/HhePNwON4f61xkTCeWzDppVIwpYAqco0Pr0QG5yDFExwkpRUogmXNR0QTRN9M6c+a6jIe7ZbmZ6lL2Q8eZv//hu2++/RpTQAnAzqN79tWzsxfPAzokcP6EKcoinGvSkkSxyaVIVqBIQnnWMquUpFV//Ons7MVzQBPZRoFU+ddXv7w8//kkzhApeDCUYp1VR0YKAUwjWZOKFA0IvRs8WqAQU6hLjhyM7ywMqRDnaMIQyPlotVKSiCkAWkzuFNlu11410zJLyVIkj8qZHDgTTGBPGqelzmvN4+lcuXJkb3znog1oIzktyCn0w9753roOomnmw7wcV605ndSkNd3F1UVv+9MhSqqj1knHWfPIqSAJ+GhtGHbdtQv9YHcBjPW9DX2IttGq0zKVuQIBCnamiwmknKYkiUBeCk6L1jnVSU505LQSCQDa6/3rbti+ujy/2l4Opm2kcB6lzMUEs9m+TpqWdRrnUqeca3JxCGglRx0pT4kVkF1klytFcv3QbtvN+auX2/2m7baNC85Hz5nzlAc3+Gh9tCwx1ySZSAILsEAkxxKSQgDTDXtiRykY31/vN5eb897s2v76fy2MDlQpks8vAAAAAElFTkSuQmCC"
                }, {
                    url: "ixd/pinch-salt.mp4",
                    aspectRatio: 1.3,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAATCAIAAADqEDFSAAAACXBIWXMAAAAAAAAD6AF+hNEZAAAFJ0lEQVQ4jS2S629TZQCHzzcTgzeYu5at7em59bRd2cCJiuLYcAIBJYYgKJipBNQYJd5iYjTxgxo+mIiXGDEaJRrAuQoIYbQ99/c973kv59KeboyObeKYY/sjzIzJ8/nJL09+3Nw/S9cXFpqLi3PLy/9ze2nun6XmrcXG3Nzk/Fz9xoxNiUMQpMjG0PYgZBhSrDnm5cqEBS3NNsp6GRHIzS8tzS8vN2/dai4uNhcWJmdvNG7MTM/PTc3OhtPTk7PNcCr24yi6Vq9fn/QbdQ3Ytgddim0EdWABDDRgao5hOAb31/LtmyvLN1dW5paW/DgGyMU+jabiRnP6zPjYkVeOPb5t28Nbtgw/+cTokSM//XIah9SEABLkUjyhV8t6hQSeDoyrWpmbv317fmX5r5XlmYUFP657PqNBgCh97vChe+5be+/alrauro6urrbOznWtre1diX3P7i9dGHc9wELCakxzDMu1EIMGsLjrN/9u3JiJm9PRVIx86vk+pOSxwcE77lyTLRR7+/pzvb1qQVXyWTmfzYhSy/1t27YPj42f082qBUzggYqpa7YOMeTia9eCuEajgIQ+IDiYbBwaHb1zzV0bBzarxaKiqlJWEbISr4i8IgqyLMpSIpXaf3D/+YulqlFBBCKCLpUnShfPc34tCCdr0WTdC5gb+KVLf7a1dxSKfYVin5zNy2pOUrNCVs4oYloWE6l0d5rPiEJx46ZPP/vYtDXoARoSRFFFr3K0HrJ6EDRqtObHzenj777d2tHR/+DmjKxKuYKUy4urOoVXxKyq7Bp67JGBDYmebrV3w+iLh38fPwOQzUIcRBQTl/N85jEKCEI+nZqd2b13bzojZIt9z+zeceHzD957+UB3JiOqSlqRNvSq37979PieQYVPJkVxz96nTv/8neNaNMB+SD3qcraHXEZN19WBwxrx0MhIOiMI2fzxl56Lfvzso6MHeElRcnkxp8qS+OG+4a9ffHpnf15Us8MjT3zz5QmILBYQFlIWYA5Q7JBVTOQCSkZ27koJUq5vo5wvDG59VMlneUVSc3klp/ZkUv1Zef+WTZvzkiArO3btOPnFJzbU/RADzzEdnWNR6DIKKAEEh1ONN956u2N9svjAgJjLJ+VsWlZ4SRJkKZnJ9PCppCCsT6c7uhPZQvHgwX0/nDpZ0a4A14LItlZd9YjVQxwGkBJaq50Z/70j0a1u6JPzvYKay0hKKiN2J1M9qVRaEHhRTGVSiZ7uR7YOvnr08NjYz5ZdBXDV5RGXQxR7jLJ6BClxPBcF7MDhF+5Z1yIVCklRSgpSWpR5QcpIUkYUUzzf2tle6OvfvWfniU8/KJ3/TTcrpqMbq+ewOYCgSzwahZDiCa2qWSby6dah4bvXtiTS/Pr/SPJCD8+v7+5p6+wUc/nBocH333nt4oWzVW1Ct6oT5ctl7cpqL822dMc2oBPGkYORDmyPkbKh73v2QFtX4r6W1nWtbS3t7S2tbfe3dwqKMrT98TdfP/Lb2GkHajY0dKt6tXLFAgaAFkfCQHdsEwK/FiCKWc0nAY3ikNWCb0+dOvj8oYGHHu7btPGBgYGRHduPHRv96uSJS5dKZW3CxQ5liIUe8hyPABsYHKJEt00SUBoxP2K1RhTFAfaxR1HUiAAC5//84+y5X0ulc5cvlwyz4rgmYa5HICYu8gBhbhBiF9m6WeFMYOm2QQIS1Px4qhZP1qI48CMWhAz7HqIuwoAF2LD1qlGBnmPYOvUxpggTuLqLeZS5HnYQdv4FhTohGLxDa4IAAAAASUVORK5CYII="
                }, {
                    url: "ixd/iphone-dynamic-island-physics-c.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAABl0lEQVQ4jWP4hgN8/fr156+ff7///fvz3/+///9++/vvx78fP398/foVlxYGXAb9/vX79v3bFUvKMutSE7MS07pTezZ0v3399scPnMZhN+vzl8////5fsHU+bxuXeJWQYDqfWLuQdKP42Utn/v/7/+XLFzLMmqcyR95gg7bBBm3dDZqqPYpnL5Nh1leQWfM2zzPYp+l828r+spndXTPd5eqnz53+/58sd83bNNdgl4bvbWfvyw4Ot8x1FqudPHOSTLPmb5xnsEvD57az1xV7hzvmuovUTp0+RZZZ//4v2DhPd6uK/Q0LuwvmNjdNteYpnz5Nnh///Z+/bp5yiZxqrZJCuYxSrZx0ptTp8+SZ9f///DXzJMPF5WOk5WOkZWMlpMOkz1wg26xV80UChWyLbIpmFGmkqssFyJy5cIZMs2YtmcnjyCXnJy3rLSnrJynhJHryzAmSzfry5cvfv3/PnDsTGh0SGBLg7u3mG+Cblpn65NmTX79+kZaHQFny29dfP3+BqC9ff/74+eXL1x/ff/z8+RNP3gYACYdvkv/RuZIAAAAASUVORK5CYII="
                }, {
                    url: "ixd/card-throw.mp4",
                    aspectRatio: 1.563076923076923,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAQCAIAAABshEP8AAAACXBIWXMAAAAAAAAD6AF+hNEZAAAD60lEQVQ4jSWQ13LqBgAF9f9/kNxx7Gtsg2hChaKGeq+oCyFUaS5grp1M8pYhmdnnnbMH8D7+sd/+sl7/VJqLULwp9VltznL5LpWvSv1BxS1qJUSYi9sDl7VUWNFRM7UyOm4Iv1rGLZvuqKCk/C3hbgD79SayXr+03VVtP+XqQqV7IT/xm+My2aH2ZhGWZFRx2QGxkrESzJx85mzpqCX8kkkaKqpJvyD9fOFkgHH4sk7f9ulb230au6vafCrVRSrel+mBCGs62eFhjQelkJ+IoCKCGtbTkRRM7Q3ubemoZtM9HZTEKp8aCeB+/K3urkpz0fdXbfepNp9qfZbKN25zouKGz4/s+oCYKR3XdFSTYUn4xdzNESMZCA6ihzM7g7UId/OZmQDG4ds8fSvNRa7P2u4qFm9CflSqdz5/na/KZdLSccOu91RYUWGNWSmiRXMnm9sZJPuoHsNqOJI8RA0hxQf0w5dx+NL3v/T9L6k+00krbE5qfRbyE7M+0EmLmsnMyXC/wKyUDErUSGAtnBnpWPC6lDYzU1SL+qyF6TGgNFe1vf4XeJXqM799Y9f7G+lByE9UWKFmgtnpzMlu2GtI9mE1nFsZ6W4hyRsKK8yIJ7Lfow1Ari9ieVaai9pcuPyNyU63oqi9veuXUyebr3IyLHG/mGgRZiaoHs/MFJL9Ee/CSgCyVo8xJ7IHSS6gNGe5PkvVB7+9iZbrIxnVRFBj9mYo+wuvwP3t1EoxM4X1EOStseQNeWfAO33OGksuogQvpPb7hBhwBiAU70Lx/r8LD5tldqTiloqasRoNJQ8105l9qxtJHqR4IGs+4hIs+2NxNRKdkWgj6m3RC6U+kzJwi8pP7ObEb1+Z9XER1HNvO3OzmZNDajRWA0gLYD0aiu5AcHqMDjL6gLMg2QFZHeQMSHYnsjvkzT6jAUTU4mGNOpu5X5FxS8UtbKZ90Z1oEWImsBZBygrkzZHsjWUP5Mweo3cZ7ZmSRoI14IyhYI1Fu88ZL7QCTFcFtipQJ4eMdKzHmL2e6BFmrQeiC6l+jzf6gjkQ7T7vDEWny+hPpNRltCdCesLFAWeMBKvPaOBS7sxZAA8bzN3CVoZY2VD2u7w9kFZ9wZlowUB0eqzxvFT7nDngrbsp84iLT5QMcvoLpXRwsYOL4FLr4PzdBH9AKICMdwu/Qp0cNteotRmpwU9cfqLVLmtOFB81oom8Ajm9zxvPlPLHlHmYcw9zrkOIL7Ryj9F3MPETox9QqjNlADyoZqtiuipGatQXVqDg/sDYR1J5pvXuUu+xKsjpQ9Hq83qP0TqkeL9gfyDkb9DiDibvEPIepf6AiXuEfMTofwEPoLDB4k81TwAAAABJRU5ErkJggg=="
                }, {
                    url: "ixd/iphone-drag-search-c.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAABlklEQVQ4jZ3TzUvCcBgH8P64DnUouniJ6FBEL4ZCaGYL0SlM0ZYGSW9UVPQGiTWT6BZRvhwkV+ZWUFFQoilj/X5uv83f1qHzDtv3/nx4nge+XW2DQAgRUoS2BGSkYizAtijJSJYhhEYjXYaQony8vd3u72wEiFn7ZCqxWDpP1Rs/sjFnYAGAML7LXsCjrWw4tumwv6xEi7EQx7JY0yAApvYCcgcXshkhc3KfumS3N8tJmiEXXisVFZu1AJAxzmeY741oa3v5aW3p5zD5GA+9sGxHs2TlmLRIeUU6WPXP6isRfmGGY8vYkqXlmTMh6O7EAyrt1+Mk73Vat4qZc5F0q3RAivr0OPk87+QfLN6oFZh0k7BLlOc35OpE5iqucd7av5Cm5dKpV8dwbX7qyzPRIqbzk0NcuYw13bSl6PrN6UnF1vs+MsCN9r2P9V/buquWreuDvUOy52qNqpIRPkyv2h3Vwi3WdWDawpgrlSjf4HrQe0wEdglfggrXPj+Qoprr0H8khEDrV6jXm816s1GDoiAj1Dbu9h/kwaaXJVvFTAAAAABJRU5ErkJggg=="
                }, {
                    url: "ixd/ipad-drag-mercury.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAACHklEQVQ4ja3TzW/SYBzA8f2LXkw8TDJeNwrtSkvL36Ce3TxMcBkVjIBuYiljQN+eFulAUQlbu4SblF44UKCGFyOdCBvEi08+efL0l/SbPIdnazBfpmmORqPBwOx0fuidjtHVu13dmOsunQ17ot+a//J3bdmh4XDY6/WwMLHt9Lj3Aq5dyOnzO31+l8/vcPscLq/D5X1s707P9o7H4fI9ePjoydNns9ms3++vtMbjsape73j3jqj08yh1+CpxEKVeHCcPYq/jqSyVoan0x3iajqdpai7xjjmMJZ1uz0/LMk3zbuvmRkNCOJU6PTpJHCffRuPJlyeJGPUmkTlLneXe04VlH/JFKnUKBWFrbUvTtH0ML7ACUywzJTZfYpm53EUpVyzny9yyAi9msnRgU0tVVRTHeSCxvHBfeRUPpGyOCcAbWxqGYRUgijwHVt2fyEA8z9EwDI/Wtq5VLYyHajJXFcuKyC725U/lz6Em82w+i2xuqQQealT4OmD/qSHzwjmNIBtaqqqR/7WF1kH5E3dR5YqXQmkN/tZnkeWYLIIga1qTyaR1dUXgaKtR/VIVGwpo1ivNeuXbpfRVAbbvNdkeNuuVVkNRhGIAgobzl7fSsixL13WP14Nh+5FIOELgJIGRBIahMByEkCAEByEMRUg8RPyGRkh81+cmSHI6na68oUWu3W5zvACAtCBJ8i1ZBpIkAmATRMDzgmEY1mi0uOMv99EuF5VvRV0AAAAASUVORK5CYII="
                }, {
                    url: "ixd/iphone-drag-app-switcher.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAABl0lEQVQ4jZ3Ty0sCQRzA8f6c/opOXXpAUJEYUlgklRqW1kGCHtCLDgVR1tpmCRUl9IDoVnSr1h6iS4cge5A9VGpdZ3Tm5+5OWOcNduc0l/nwZfj9Kgo6B2NMKUWUFqGkahoi5QslBGOs96RCDwKAp2TyYGF+ZsjrdjgWR4aPN/hMNkv0OR0LIYWxk/29cJc10GEbb6iJdLfzdqsYi2kaQwgZsBBCjLFNftXT2f6SfH25f3gU73iP8+72RmUMG7Ly+TxjbCWw1Od0pdJSVsKIKBG/T7wSNGaqa40PTs5OvX9+pNMZmpN3vO64cGnc+u0KrgR8Hg8FtUgoLZDdAWfCtBUOcN5OdwZoiVIFSpEBVyIqmLT45eVBRwdCEsJFBWDb3Z2Imukq/xfHBft7/QphGCiAsunqil+em+zaWuV8lpZnUYydnQpHh5ytKW6mC+UVxo7DobG6yjl7Y8jaut5m81dXxYULw1Z57lU1cR0dtdRMWeqnWxommmtne+xvqRQAGNuhP5AAyLgg5eRvWf7KSahQno1/dvsHAkmpHPvtemYAAAAASUVORK5CYII="
                }, {
                    url: "ixd/iphone-drag-home-peek.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAAB5ElEQVQ4jZXSy27TQBQG4D4L8ASskFj0CXgElpGyKW2DFOLIiR0b3Nix7F5I67Q0UNTQNi1QpbVTclkUCdjBEqVZ2E4AUVUqjZKZiWfsGIVLV144R/9iNufT6NeZgkEDAHAcxw8ahFDgCoRwKhDCGP/4eV41DP3oyDjWT3S9quvHlUqz2ez1+wghEMYCACAIewCUJKG9KOrU/Xu3b9y5dTMyffdgLvpF5l6/KJLRCAwGoSyXkLZlNxZYv3pwtb32SVpoLUvW+mK/tI7Lxb0sDwmBAIS2TLMhC/4382vlHbN5+n5N2xKenOaXCnTSUMUBnsRqmVaNS3qHpd6WZr98frGxZBWUi4JqL2ffijwg7gTWmWmecPRlfef7htLdLnZfbX7Y1c538ube6qHAATe05RHSsqwaHfdXRWdFAE+l4Yo4zIuulkMqV+YZEL6vv1adivkqh1XeVTKuyhElQ1Tek1L7PDPAeJK+LLtOzfsyg2WGyCwZP9iRkvk4G9GS8aHrARD6Js7sTiMZ8+X0H+tfPCXz+WH0GU053gT3hccWNe/naJxLkevIaVdIvHnMwHH3oa12p1uLz3hCHAqP0P8Ms1Q/NVtmaeh6MPy/2p2uEYtCZuYX++DqOtzcZSKym04gbxRo/QYGUoAffIeMJAAAAABJRU5ErkJggg=="
                }, {
                    url: "ixd/mercury-pinch-bad.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAACq0lEQVQ4jX2TS08aYRSG/XdN2pUumtQmTVqVGSwXARF7WTRp66YaN02abrropklt4oXLzDCXb2Y+5j7MDIiAONRiakRwAYmDTAKxQVojVn3zLM7qycnJe8Y6F3Ecp9vtOo5zdFSv1+uNRuP4KqOp/6Pb7XauZGwoOjs7a7VaC7HY9PTUrBedRQfxXgxeFPUiiBdBUMQzwONBPDMoikxOPvqwvHx+fn56ejri6vd6lb09r9dLp3E8mcAScTyZIHGMJnA6jVM4ThEjMGR648ca4vF0XddxnBFXr9ez7ep8NJpMxAkc41gGAJqmSJpK01SaoSkW0IAZMBx4DmDJRCAYHF7mumvPtiORiAi5DAt0WTJVpZDPlYvF3VJRzkCeoSEYwkBACxxLJOOBQODmvQaucLhoGQVD37GMarnUarU6nU6v388bBmRokedEjh0iQ57CUne5ouFITtNyllXOG9Vysd1uN09OBi5dFxlG4bhLNAgBht2511wor6qmqm1ntfJ27vCgdnT4+2B/X2ZZgaJEmr5EAYCKxwN+/+2uUIjc3Nxa+w4wDKbTIJVikkmQSkGCgATB/wXncRwSBLG+fpcrFAwKFM2nSZFmFJbTIVT5AZAkJQBkwCocp3JQ4qAhq2Qi5fP53Fs6Yfv9AYHPQJaHLDSzhmWZ5d2SqiuAApCFAi/okvZFNJWfhYr9a2Mr5fP5b3D1+/1KpYLO+iXV0s2CYZU4SXn7Lvbx6+qnb59FyYRSVlAszdwRq/Zx+9DeVgg8NYM+d93/+uW6bqNx/OTpFOILRRZfRV+8RgKhB+Pj9ybuTzx+6A8t+OaivlB0bn5x6f3Sysrqm5fRZ1Mz4Wjs+g9d6mq1WkYQJFkSJUGWZSObNbKmrmUlSZQuIkoiFAQeQlGSM4LQbDav9v4PzCg1vkm5W0sAAAAASUVORK5CYII="
                }, {
                    url: "ixd/mercury-pinch-good.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAACqklEQVQ4jX2Ty08TURSH+e9M2MHCRExMFJhOcfqilOJjYaKyEcLGxLhx4cZETMDSdh6d572dZ2c6U6ShtlO0JqalmPIcmEna1AxVBAR++W5ychZf7rk5d+j4NI7juK7rOE6z2Wq1Wu12e/s8F9P6i+u6x+cyNBCdnJzs7e3NJpMTE+NTQXQK9RNE/SKIosFAAPVB/AJBAgiCoujY2J1XCwv9fv/o6OiCq9ftVmu1YDDIkASRSePpNSKTzhE4QxIMRdDkZdgctfppOYAgruc5jnPB1e12bdueSSQy6RRBZHmeYxmaoSmaImmK5BiaZxnulEEBBA7PpMORyOBlLrtqth2Px2UA8jynK1LJMCrlct2u1WtVJQ8By0BuAAs5RhR4MrMWDoevvpfvmp4uW+aGaZSt4o9vWweHh57n9fv9dbMIWUYCgiTwAxQIaDx7kysRj1uFgmWVKiWzsVXfPzhoNpvdXu+LoUssqwKgCsKAAoQcjt94r1ispGlFTVvXNbuyudvp7HY6v9ptDQCRzkkMc4bKcfTazTNGY1Tqc2r5I4fjkKIEghBwnM/igCQhSYI/EIDAIUmSKyvhUOha13Qkks/RgKQkllN5QROgJgBNAJDKySynsLzf5KEswKKi5tIZDMO863YihIXyQh7yEPLQNIpWyax83dR0laM5KEARiLpceCeZWn2jan9fTWUxLHSFq9frVatVdApTtJJhlk1rE8ja8xdzr98vvfnwVpJNKBuiaulmWbLt7f2f9oZKEdlJ9KHn/bdfnue129v37o8jWDQ+9yTx6Ckaig2PjNwaHR69ezscm8ViM1g0EZ1Jzr+cX1xcevY48WB8Mp5IXv5DZ7pGo5EXRVmRJFlSFKVoGEXD1Au6LEuyf/w+FEUAoSQreVHc2dlx3X8z/gaHBjaCzk++7gAAAABJRU5ErkJggg=="
                }, {
                    url: "ixd/iphone-no-cancel.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAABuklEQVQ4jY2Ty47TMBSG5/XChqu4rtG8B4gVIDTDdJJuhjqJ+hhFYgFCGokV3ZG2TlpVJLHj2I4vxxlQUlGJDhpydDZe+NN/Ph8fNf8qANhut8vlIi9yxlhVUcbYZrNZLheUUgCQUl6/dXRwFkI452az2cnJKQrj4+fHnufdvnPX8269ePnqYhK+fvN2Pp87567j/mJJKbXWlJD3Z+eLdUEF+O9O791/8PjJs4ePnn789JnU6vLb9yAYD2JZa7MsnYTT5KdOtsJe/Soq8WO55g3wxhKmSK38YKy1HsjKEIqMbZMF/vL1stGOS8O4YlxxaQrK/WBsjPk/CwBWq9UERXXNs/U6SZKrtrXWur7athWy6VnDcqUpRmHMuShLQiumtbEWdg3guBjMAgCMVxcfEJeWcSWUraXeN28MqYTvB0N9YYzDKK6qihBiTBcKwO3auVZKdTY6P6Dc5AuhSEpZlkVZllpr+FOuW4XBLGsBY4zCSDYNISUlZC/e9e6lVKORr5QawrJZmsbxlNDdjNb2Q+5zde79YOg7ZlmKwlh0y2mkhgP3Ze9+MCtNo3hKafeZ8zx3zu1ztTfm+g2qq7zyBgaXjQAAAABJRU5ErkJggg=="
                }, {
                    url: "ixd/iphone-close-stretch.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAABnUlEQVQ4jWP4hgN8/fr156+fv779/v3jz9+//35+/f37+98fP358/foVlxYGXAb9/vX77v07PcsaihuyUrOSK/sL5myY9Ob1WzzGYTfry5fP///+X71tScBE9YA2LadCpbDJugEdeucunf3/7/+XL19IMuvL/z//V21bYtVh4Tzdy3eOv/Msb4cmu0tXzv4jx6y//5duWqTe4uEwL8t7TZ73hhLn7uDzF0+R5a5//xdtWGDd45+0vixic0Hq7tqgSWFnzp34/588s9YttJ8UErCoNGBjadzBFu9JMWfOHCfTrCXrF+m0+TksL3RfU+axs86gO/jC2ZNkmPX5////S9cutM4zdSq3s8k3syu1NkrRP3/hDJlmLV+72DZW3SlZxzFRyz5RwzxK/dyFs2SatWTVQr0g+fBiz5YZVa5pZuZBmuSY9Rls1vylc5QdRYwDVc2CNYyDVLSc5U6dISe8vvz9+/fMuTNekc4+sS7BST7uEfZxWZHPnj379esXaXkIlCW/fQVl7a/fv37++v3bjy+fv/z4/uPnz5948jYAHCV4ebiPs88AAAAASUVORK5CYII="
                }, {
                    url: "ixd/iphone-close-bsky.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAAB6ElEQVQ4jZ3S/08ScRgHcP+vMpVKEm2VHWHLRK2h1thaBUunbc5sebjRSWU1uAOurg24Y4MD+qXV1n8AfwK3JV+Eqff5fliTn8+N6/3789r7efYMQbsAACzLopQihP72c3ragxAyxgghAADbqSFbiDFWq9Xy+Xwmk4nwfITnBUEoFAqaphmGcR5nY0EITdNUFMUwjN+/fvo47sY0FwwG6/V6tVpVVZUxNpAFAMAYt9vtYrGICLWsHiS9P11CKMVnIdlsFmPswOp0DuUvX4vffxwcNDqH7ZOTo+PjI4QQxkhVVWdWt9sVxYSU+FguCd+UNS23reW2tNymXooqikwJHdQihDQajVKpZFlUksI8743FHsTeBaJv/aIYkmWJ0oHvRQhpNpu6riMEPsdfvNq+F9ldFPZWotHAh0/PkslE3zId9NJ1HWMo7IcX5z33OVdgwe2fv7ITfSQl4w4sjHGr1SqXywjByPvQ1PQlj+fC5O2xcd/I5u7jVFr6T+tNLDzhdV2evDjBjV6bGd3YCabSEnNuVUxgvt5bH/ddHfYMu26NuH1jz7dWkimx/6tOrEq5AiBYi6zOPrm7Hw+l0+Hrc+7ljSUpJTHGzMGtZn9HCMHC6vKdpZupl355fdb7cGrmqV9MnvWytf4BJHB3YFCQvFIAAAAASUVORK5CYII="
                }, {
                    url: "ixd/raycast-c.mp4",
                    aspectRatio: 1.537037037037037,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAQCAIAAABshEP8AAAACXBIWXMAAAAAAAAD6AF+hNEZAAAAJklEQVQ4jWP4Qj3AMGoWSYCBNOV4wahZpAEGEtXjA6NmkQaoGV4AC/N3/QpWRmkAAAAASUVORK5CYII="
                }, {
                    url: "ixd/list-motion.mp4",
                    aspectRatio: 1.1805555555555556,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAVCAIAAAA8SdJPAAAACXBIWXMAAAAAAAAD6AF+hNEZAAAB80lEQVQ4ja2Uy27bMBBF/f+f1EW6KlCgBbJq0G7auDVN8SE+xMeIQ9kqpJFVx0GjBMhZECQhXc6dGXIHAJxza20pJcZYSsk5A8C6rFukmVrrDgD2+72UEgCMMQAQZwDAOQcAtVZ8EWut9x4RJy1E7PseAPq+p6AI2sxb9DM5512ZQcT/WcDXUUrZIWJKyTlnZ9yFdRm26LoupTR5REQ/wzlXSkkphRBa63WyaTDNoSxaOWdnXYzx5kDa6V7EWmuMyTlPHkspfQ8xhVrr8JQ1WeUZeIGyQT20w4regtwr1SohBJ8RQjDGlFLeeyr080wjYoyR8rNolWHIoul+PGjnrTHWWq1127Y0Uu+EEGiMF0grpUROF616HgP7ze+/HnjDGNNac86bptFaiwtKKcaYlNLMtG3b9z3FRafmnKe+H8fx5+P+w93HGIIQ4ng8dl0XQkBEShlxPa+1rnF57+l6LHU8DUPqOjk3hJTSWhtCmGuysM7L0/Tfap2GQTr3cGCtkpQjuozPa3cDeVzrOGkN55NpxK9v37lojDEpJfqubIFXF+bicTzXR5Hu7plR3rphGDZVbjyufbMbx/PhD/v86UvbLvcmxvimuNyar1or5NxZl1Kid+a6rTffBpgfJfplquNU8tO/kr9SiLj+ZdJ6L95T6y8Ta+Z2/P/ibwAAAABJRU5ErkJggg=="
                }, {
                    url: "ixd/list-no-motion.mp4",
                    aspectRatio: 1.4527777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAIAAACn2JBZAAAACXBIWXMAAAAAAAAD6AF+hNEZAAABzklEQVQ4ja2UW2+jMBCF+///167Up0h96G5JQxAEBt8v2NjYoFaxt0CzF0WrfhKWEfLhnJmBh+nreFh34X+ZbrScc8YYa635wCbMHVhrN60QglKKJ4QQeZVS5o21dvwL1lpKKefcObdpGWPy+RWlVN7oxPAntNZCCKWU937L6BPLssw7lkSMcZ7nGGMIIa+ZGKNzTghhjPmVMUucz9XhcKiq6jVxPp/LsjydTkVRlGV5PB6rqmqapq7rvu9xghACAHVdA8CmNc8zwOWleO46aBIA0Pc9ShBCEEKUUsZYro74AGPcti1C6KaPE+MynaQAQMj1rJTSObeW2Tnnvd9Pg9aaMTYMw+prWpaprvzPZ8E4wvgqk7z0AIAQwhj3CZ4c5ZZlhmHgnGutd778NM1BGkVTnPVxLvlK+DyZWUsIsfmavJ/elqm4sG9PVd8aPYzjmOPcMP2GUopSqpTazWoMhivaAJfi5s3/xhijlNpm4uorRkc4ejnVbXu9vRspJcZYSrlphbfZFMAeX4kSo7FrqDXpPvKNLynl5z7Ovm7ij0IR0nUdXC+Atm0vl0vuYJdgjK2f3lovxtiuXqn2oWjE96cG924c7/zDZC3O+errHdDMvNHysNcjAAAAAElFTkSuQmCC"
                }, {
                    url: "ixd/macos-context-menu.mp4",
                    aspectRatio: 1.4830917874396135,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAIAAACn2JBZAAAACXBIWXMAAAAAAAAD6AF+hNEZAAAAP0lEQVQ4je3OoREAMAhD0ey/ZgaIgPgu0Ao4HP0WeAdyLiy3bA9YtiWRLHF4DSJC0sBfvdC8u/WtWiju53LrAE14vy5bwVmJAAAAAElFTkSuQmCC"
                }, {
                    url: "ixd/macos-context-menu-select.mp4",
                    aspectRatio: 1.4830917874396135,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAIAAACn2JBZAAAACXBIWXMAAAAAAAAD6AF+hNEZAAABEklEQVQ4jeWTy4qEMBBF+/8/TBRM+4xKiQ9MypgIJuJjPaAwtCPTdGB2cxYFtcihbpF6rH/H4z+7tm3b9/21fcXCtW2bMUYpNc+z1toYo6/M8/ypa993pRQAZFmWJEkYhoyx/spd924uRASAPM/bth3HUUopDoZh4JwbY36E/dU1TRMiRlHkui6lNE1TABgOpJR2Lq01YwwAKKVZllFKy7I80wkhrF11XSdJQggJw5BzrpQ65+r7njFmnTEIAs/zXNd1HCdNU3mAiF3XWbsAoDiglBZFwTlHROvda627rouiyPf9OI4JIUEQEEKez2dVVU3TfPon1nVdluWM873vswohEHEcx/uTd/d4uZobdi5bvgAX+qcf9oa3UgAAAABJRU5ErkJggg=="
                }, {
                    url: "ixd/macos-cmd-tab-c.mp4",
                    aspectRatio: 3.633522727272727,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAHCAIAAAByV3HfAAAACXBIWXMAAAAAAAAD6AF+hNEZAAACD0lEQVQokSXC308ScQAA8PsHiu+PO+B7B0wfTFursHCUA6QZjBTLhMzJcISYaaRpS2nlbD20tRpPPfTQ/H90JoXQqUD8igMPkOBO0OZDG332oeR1XXWFiEvKSnt1gakEaXEeiXOg/ASIM7DiR9VHsOoFovtc8d554a5CGAGiW1FfRNILur6krDxVHwZYwaujzt7pTta0tRUiBJnCLC4+xsIMLgSw4EeCDwpToOQBpQlQdIG8U5FxKNJ2kLaB/BAoB+BRkCnPqYrTpOBhsw846jTc8/dt59lrnfxKcxhksz4m40VZL8pNwtzDdjfMj8LMMEzdBgkrSFhg0gxTFlgYp0W/uuRT/faos242NcJR8saVVrjnZL3jNKRphbRHz7mcj0mMo6Qb/XKh5ChKOVHSAZODcM8Cf/ZD3gh5I+KNMO3A+UmSn1BnXOqEk+XtHNX82CVtXD3+1N1a62y+1MrLmsYiV/SzBy6ad2J+CO/bEH8Lxc0o1o92jThqQP/vm3HqPkmOkYNhwtvY2ABLNUNaKdxd/3pZ/nDh+E2HtKyVnnHyPFebZtMusmvDuwMoasLfb+BIH9ox4J1eOtIe78N7dvXeHTY+yEYtbOQmRzVWNfKqtvb54p8vl6T3XVKoQ1rQSbNcw08aU0QYIzGrMtJPbxnQZi/a0qNtPb2tZ7b1TOQaHTepYlbyw0S+GbnN69w/6nDn5m+N2ucAAAAASUVORK5CYII="
                }, {
                    url: "ixd/macos-cmd-tab-fast-c.mp4",
                    aspectRatio: 1.4143646408839778,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAIAAACn2JBZAAAACXBIWXMAAAAAAAAD6AF+hNEZAAAFF0lEQVQ4jQEMBfP6APepKfurKvusKPusJPqzOfa4VvS1WPKwVfSvVfqyWfmvVfitU/quVPyvVPqsU/yqTfqTGfyUF/yYGfuaGfuaGPqZGPqXGviUH/WRJAD3oSP7pST6pij/oxjXqVyhwtOhwdCau8yWuc2ZvdOQt9CJss6Gss+FstB8r9GFqb/uiR3/jxX7lBn7mRj6mBf7lhj6kxj3kB30iyIA+Jkg+5wh+Z0k/5wYwJlRWp+6WJmxUJOxRY2vPIerMoGsKHqsHXSqF3CpB22rFmuZ5X4Y/oYS+o4Z+5gZ+pUY+pIY948a9Yod84UiAPeRIvqTIfmUI/+SF7+UU2ClwV+guleauU6Vt0iRtUGLtTiGtC+AtSl8sx16tSd1o+V1Fv97EPqFFfyTGPuQGfmNGvaJHPODIPF/IwD0iB/3ih/1iyL+iRW6jlJgp8RhorxZnLxQmLpKk7hAjbk3ibkyhLkvgLgifrktd6fgaRb4aw71eRD7jBb6ixn3iBr0gxzxfR7udyEA8n0c9X8b84Ad/H0RuolSYqzJZKW/W6DAU5u+TJa9RJK9O4++Nou9M4e7KoW/M3uq1lEJ7VIA72EB+HoF93sI9XcI83cT73Ud7W0fAO14G/B1GfB3G/l0D7qFU2awzWiqxF+kxFafwlGcwUuYwUWVwT6RwjeNwS2JwTqIuta4quvFs+fFsOvLsevMsOrRu+qRU+1lEepmIQD0fh3vdxvocBrxaQq4gVFsttFtr8lkqshdpcdWn8JRnsVJmsVClsVAlMU1j8Q/kcLV4OXw9/rr8/js8/nr8PXs+//km27oWQrlXSAA+YIi+30c8Xof7WkLtn9Sc73Xb7LMZK3LYqzMXqXEVZ6/V6PITp7KRprJPJbIRJTDy83O4t/d6ujo6efm4N3b6e/y5pdt41AL4lYfAPaSKvuCIft9IvhyEteVXa/d44nD0p3Q17HZ28Xj37nZ0bLa14W/0m6y0Ha30WysytTX2Ofn5vT19fLy8uXj4u31+OaVcd9IC9xOIADymy/2kiv4gib5cRLkml/q+/Lh8eTo9efu+Ons9ufi8eHQ6dzH5Nur2Na64NvD3tjV19fk5OTx8fHz8/Pm5OTu9vrikG/YQAvXRx8A9IMj850v9JIs9ngV5pxj8f727/nq5/Xo5/Pm4PDi2u3e2Oze1OrbyuXYwODXu9jQ1tfW5+Xl9PPz7+7u5ODg6vLz4Ipv0zkL0kIeAPN3HvSHJPCfMfSFHOCbXtzu39vp1dfl0tXk0tHj0Mneyszhzsjhzsrk08fl1b3c0dbd3uXs7fT7/Ovy8+Lm6Oz7/92Jc80wC847HgDwdRz0dRrvjSf4myqxeTNVcldke1hnflVqf1NldEhkb0FlcEdjdE5iclFjdFRncFW4U0HIVkPIWUbIWETLW0POZEvNSSzNMxfJMhsA7m4c8nMb7nYb9ZUns4QxZHpBcH84cnwwc3ckaWYYaGAVXlUXZF0VYVgUYloTbFYRuCcNxyUNxSYNxicLyisMyzAPyjIWyDEaxS4YAO1qHPBvG+1wGvV8HreEKHN0H3RuFm1lGGlhF1tVGVdRG1JLHF1WGVpTGlROHF1NHbUvGcYwGMQwGcUwGMYxGco1HMcyGsQuF8QtFwDrZRruaBrrbBvybxrCax19Xh2CWRx5TB99TR18SRuDSRqERxqHRxiFRBeCQheEPhm4LRjGLhfCLhbDLhfELhbELxjELRnAJxbTRh0c4NP7bXAMCwAAAABJRU5ErkJggg=="
                }, {
                    url: "ixd/iphone-implicit-input-c.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAADTklEQVQ4jYWTXUxTdxjG33ra0kq/oJUvB9Y50TWxzLAIrZZpcUaKcIACZVNAwzKJAcLEOUb5WmwIYVOXEMm2DBfbYoOJyW649MbrRkOrV5RLd6OVlvZ/vnoO79JimMtC9tw9N788z/P+/0AIYVkW/y1BEAghPM9ncpIkSRAEURQ5jiOEZCQpjVsCooBbacSMKDE5AcMwhBCfz9fZ2dnT03Mpp3A4jIixWGxmZmbom+v9/f03RkbuLdx78/q1iPj08Z+LHb1jF3u/u3T5N3f3kwdLwpZE0mkQRXF9fV2v1wOATCajKAoApqamEHF5eZmm6Ta32+VydXk8LTT9/NkzRJyrb7gD4KV0o5T2LsCdk863HMsxTJYVi8UKCgoAQC6XK5VKAJicnETEUCh0su50c6u7rb3T1dRsd9RFV1cR8fbZ5llQz6vK5lVlc5D/s+P8G4b8w9LpdO/n2mYtBfx2s/6zCk3NfoOjorDu6IFINIqIM2dcs8qiBcuJX6z2OVXJrM0ZZ5ldWV6vFxGDgcAHhflmo+ZQkemAQWsxl0ciEUS85WwchbwfzdafDh0fA9Wt2vr4Tq7/7jU+Po6Ifn+AolR78jSUWgtUnt5Y/DKXa9rZOAzUqNz4vdw0AoppW32c3Z01MTGRzRUM6nS6vfl7dQWFR4oMn3xUshp9gYgT9Y2DoPo2v2RIqb0GMq/t9NudjruxHoZCxz49U+1otNrOV9Wcq651RnLbTze3D6lMC7Tn147uQblh6tyFOEn/D8sffKguPaEoqVMW22Umu+lD+8todq8fOr4cNFbc/3ooODw6aCifpjviqU2OZd+xtt8ERVEKhWLnjoGlkL68RlnsUJfZ80pPlR62v4hmcw07P28F6FKoPXJ1O8gGbKeSLMsyDEiStLa2ptFo3s81lrvjHw/8VKF1j8km32cDY622rDqy+hwRb1xo6TPuHzj48YD56NWiiutnGza2O7Ism0gkPB5PZWVlVVWV1Wq1WCwrKyuIGA6H27t6aXd3U+sXTa0Xr14b/uvVK0R89PvizZY235U+X99XN+m2wPw8L2YIIUAI4Tguk8ma7b+5Y3me5ziGISlCUgxJCTzLZT3D8Xxic3MjmdxIJhOpFMvzuYrM3/6UGjJqKGDYAAAAAElFTkSuQmCC"
                }, {
                    url: "ixd/iphone-lhv-blur.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAABD0lEQVQ4jc3TvU7DMBAH8L5yHgXEO3TMUDFBC0RCTjKTD9vKkqhFSeRg47j+kK9hKANLKjVduP1++t+dbnWcKaWUtVYIoZTy3gshpJTWWqXUXMvqAtQ0TRRFD/d3QRCs12uEUN/3xpg57pKFEOJc5FkWhiFjA8a4KAoAuNoyxiRJcjh8fstRazNNU1GUlFLv/RIrjuO6rrXWjDEAqKoKY7zQQnH8xTkAWGunaSKElGW5fEbGBQA4584WXpwrTdNxHE+n09milBJC/p9FbpxRSgngf3dPb8iFUMz/7B5nH0WeL7mjc44Qsn3avu7eNptH9I5ennf7/d45d511Lq31MLC+69u27bqOc26MOc7/9g9E7tv/sL9TMwAAAABJRU5ErkJggg=="
                }, {
                    url: "ixd/iphone-caret-drag-c.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAACdklEQVQ4jYWTy07bQBSGeZZ2EZEdfYR2AWVRiT5A2SCQTCFIUQkkqkKl9LJAXbWbInXFC7CLKhHYUhEXArgUQWLHY3sSJySD7RlnfDlV4sZKEaXfYnRmpPPpn9GcMTrEcRwAIIQoiqKqqlqvq39TH6IoCqU0CALbtuN2SulYLPJ9b2vriyAIuVwunU5n1tdfZTLrQ9bWMrlcdnV1NZ1OZ7NZQRCKxSIAjOr6Ltu2AWB7e3tlJYUQ+ilJjPOPb/KPHj5IJJPJ8fFkMplIJCYmJiRJIoScnp58PziYnX0himIYhrFubBjKT6VS5+e/AABpOAT4+vnTsyePp6anp5/2mZycmpl5fnVV7fV6utEAgJ2dnc3NTQCwLOuPy3GcKNrycgpr55wiznTf98MwhFECC0Kb9yzX0bjbgqBe2i2+e//hDpdj24uLL7EhB77NXRIEQeD7Huee5/XLIPC5xV3ieS53O4wSALa7+61QeHt3rqWlJV03KpXTsvhDkqSzszNRFMvl8uHh4cXFxdHR8XHlpFI5cRzmeT4A7O3tFQqF2y7GmGVZgiCYZpNzHp1QShlj9gBKadwQ9BP3XaVS6Q6X67qdTmdubs40TUJIu92+vr42TbPVanW7XYyxYRjdbrfdbpumiTHWdf3/uTDGCKFarRZ9TlmWEULxL61Wq1GBMf5nLsbYzc1N5DIMQ9M0XdeNAbquI4Q0TYukmqYZhsEYu89FCJmfn282mxjjaIZiV71eRwOibXfAfXckhCwsLERvEQeJ1kajERWRV1XV2LWxkR8do9vvpapqrVarDlBVVVEUWZZrAy4vL2VZjmICwP7+fj7/etT1G+HReNIVJXreAAAAAElFTkSuQmCC"
                }, {
                    url: "ixd/iphone-keyboard-press-c.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAACXElEQVQ4jY3S+0/TUBQHcP5cH/xgZJsgS2RA2JoNxYBiNDFoMGJ8BDM2sxiDRmFh4Bg4Stdt7Xp7X32OSTdYH6tSEkKCE765OTk/fXLuuXegE6Tdbtu2jRBKpVKe5zmO47ruWT2NG/S+71NKGYaxbbvdbnfOZeCi1QvieV5Q3V7Pc93T/iS+7yvK1axkMmkYBxzHN5stCLGmmQhRw2iKItB1EwB4fGwLAkgkrmBNTcUp0Xi+rlAdQoKxgrGCEBVFiWBVkmCz2WJZLh5PXGJhjCcmJjFRAJAJUTTNpFQ1zaYMkarplKqqqqmaXiwWGeYyixAyGo3WJSBDDCBuSLIEEIC4JjYAxADhBpAV3cgXtsYnJl3H6Wt1A2skOioCCCCGmMgIE0WVIJKArKgawlSG2DxoFX5ux8bHXdftb3W7CqW3hkILbz6ylZphmpgqMsSqbgCIgoMxpfmtUnL2aSx2YlmW1deilA6FI0vLuY3ir7oIIKEAEUgUCWIZEwmhSk1YK2zPP1+8qvXqffbJi7e5r/mubR93uwhhTdNtxzlo/V58l55feD337OW9sdj/rNN3HBmNrq5tffm+sb65U+HrfFWo8HWOr1erAstVv+U3V9cLy9nPYydzOZbVZ19HR0eHh4e3Q+Hc6o9iuVJtoL39Wmlnr7S7X9plS7ssywuc0JBVY+nDMsMwvu//e65Op2NZlu/76XT62o3B6YePZmbn44lUKDwcjoyEIsORO3eT92dm5h4z0w+u3xwsl8t973g2ned6FY7LZjMr6XQmk/l0LitBcrkcQujih/hr/QFqI5InDV1okAAAAABJRU5ErkJggg=="
                }, {
                    url: "ixd/iphone-slider-drag-c.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAABrElEQVQ4jcXQz0rjQBzA8d9kJgTajTNR02hl1TYtwi7aZteDbNFNiz6ABw97WCjUswgeBOlrVUjopc/RWx+gtEkmOaRh1jW0xD/r7qLgl99hGJgPMwPhfZzzKIomk4n9/VBfpdXt4u7nHcMorKxotm2f2AfnJ59Ov26eHe//PGt1frRurq9EknDfi3iwGHhoTY8aB8Zybn2tsL21sWbohVWNqh8+bhiNvXKrtvltd+u4sdewzKvLCyEE9/yIh4t5YHme98WyAECSJIQQxhKWJIwlQjCRZSRhAIQxBoBO51wI4Xt+yMPFPLasuQVpCKHF+r651flt+X6Y6S+WqqrFYjE9/99WvV7PWoqiUEoRQm9gPQ2/p4UxRs8Fr/n7R6mqSin9J2s6ndZqNQAwDEPTNMbYUibGmGmalUoFANrt9ksW53w2mzWbTQCglBJCFEVhjNF5siwTQvL5PAB0u90/WmEYBkEghOj1erqupy/K5XLVarVcLpumWSqVZFlO9y3LGg6HcRwHQfC8ld4uSZLRaNTv913XdRznNpPjOK7rDgaD8XgcxzHnPHv2zvoFIlMMAOBWWwIAAAAASUVORK5CYII="
                }, {
                    url: "ixd/iphone-toolbar-drag-c.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAAClklEQVQ4jYWTS08TURSA+TO6KZCYsNQNJW6If4GEhKQt3VhSW6uNPGJiWbE1spKtumBFY0x4rrACSS1ih5bp3Llz53Hn0Xl0ZmhnjmlHKpqq3+rmJue759xzzljnBsdxAMA0TYQQz/M8Qpj/DTQgOnueFwSBbdvD8E6nMzYUdbvdzc03yWQin89nMpn800I2l8vfkMs9KRQK2Wx2aWkpl8ulUqlyuQwAt3V9l23bALC19TaTecy12O8X31zfX19+ce/undjk5MT4eCwWi41PTE1NVatVWZZrta+Vyue5ublKpRKG4VA3NkwqnU4zTD0IgecJALze2Hj44P70zMxMPB6PT8fjD2dnHzEMY1kOIRIAbG9vl0olALAs66fLcRzXdU3TTKfTsshcd/C1S7rdbhCGIfwiDNoQWr2uE/hS71qHAO3tflxbeznalVpcpDIf9qxe1wSAoNcn0gVh6LmG7xq+59QvTkXSAujs7X5aXV39a16iKF2xrcqX02q1WqvVzs7Ozs/Pj4+PWZbtBX0th9Cr0vr7dx8AYH9/f2VlZYSr3W4nk0lNU33fN03TsizXdaO2tNtt13UB+i7btss7OycnJwPX3giX53mqqs7Pz+u6bhiGoiiUUlEUFUXRNI1Squu6JEmiKKqqappmEAT/ysswjEQiQSkVBKHZbHIDEEIsy7ZaLYxxawDGmOM4WZb/71IURRCE4aATQgRBQAhxHEcIGU4/pfTGtTyiRk3TFhYWKKWEkOjxKBghJIoiz/OiKAqCgDEmhJhmv9EHBwej/ytyqapKCIlEERj3l1KSpKjM6LJer/u+f3R0VCw+v71Gf9aIMb4a0Gg0Li8vmwNYlm00GhzHMQyDENJ1HQAODw+LxWe3XT8AkY11VoxXm54AAAAASUVORK5CYII="
                }, {
                    url: "ixd/iphone-dynamic-island-default.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAABmklEQVQ4jZ3Tyy8DURgFcP+bBQuJlY2wIYQM3ahHWxqdqj5EW1HSqMYj6hWiqjR2KvEYC0yrzHRBQ+LV1mN6r7l32tsrYT2LmbP/fjk5yVfzoxYIMVa+ZQQRLhMiyaiEMEYYQqh2UaPiQKwoT7nc0VJ42jo8wHQvOGzczma+UEAIqXEqFgCYkLPE/ncktD3mme9lrifHztysmE5VqlUIgKZeAFUIdxD/jK3zO4mrcCgd9MVZy33mpky0WgAgQrh47DnkkZYCz4uzhbWZzJQ9m9LR688639uVHEOK3yF77TTgEof7BJ4nuqwqtxeV2H7iZfGElfpZ0WQQUnqti/iuZDOSyVHsGaE+W9Zk0LX9f69YtGhm5PHBkt1YcQ1m+jrFFK/HwlV6Gt1+MLS+mZmXga5Pcw/X1fK3F9VsKZQeb23cNtXl2hqF9oZcR0OyqfaOv9ZpJVdXImz9YdApsB7R7QsyhjvuhFAKNFuECJeXLmvznN20brEtW6xTTtfr0yNWytp+6D8yxuCj9PX+Xiy+FfOvUPpCGP+o//YvLcCmay9cdNMAAAAASUVORK5CYII="
                }, {
                    url: "ixd/iphone-dynamic-island-combined-c.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAADHUlEQVQ4jX3TX0hTURwH8GW2yuoh7K+FT0UPEfTQQ9BDZRBBVFBGf6Dsn6mbOueWrpnmmn+XLtMym5ZUplYmEYRZLeRuTo3U2mZbZmpgac253L3X7d5zzv1FWivU+r2ch3P4/M6PH1/R2O9iWZZHCGOM8PhBiCAIPp8vcMtxHMaYQ4jHmEeICILf72dZNiCIAk8RQnar9ZxKrUyUqeRyWWzc9ZIShmEC0NCXL4W5+erk5Ayl4qxMlp+Z6fr61c9xAe6XRdM0ABTr9evXbV60aEWIWCwSiVatXNnf24sQ8nq9ANDU2LBxw/bw8DUhs4LnimfPmxnUQlECwES/KdZFnUgUtHj5itAly2YEi9euXt3X8zFgWV4aF4jnLFwatiwsbFZISOiC+W0URaZaDEMTgPoKQ/b+XUVHDqYeitRE7SuOOfbe+R5jTHu9GKDLYi4/cfCOJLoqQVKZFFMtPf6utYUnAjvJYhmGB3heceNZXvLLWxfGagz9tbcpjdpqswmE0F4vAnBYzB1nJP4reVCqg/JLg9lqm6UZCdNZCOBpealZp2+vecw+qPTcrzSmp9jsdjJuYQB7s6k7NQHrs3y6TFKo/aSW21os/7QaK8pMWt2rsvrhitq+Jw+N6al2e1fA6rKY+1UJUJTF6c6DXjuQlmRv/Z9laEyRUvkZg1duNtZTz84m2//+l5nqTjqO8lS0VsHnpvYqo20t083IMDQGeHz96ovTh1+fS2pTS9qVcfdPH33ncExYBMBqamo/FelKi/+cEuNSS9/GHrI2m5AAUyz6p/XoWsndHZvqIrfdi4yo27u58sBOh9NJxvdIADqbjM17IgZO7XWe3NUbvbtt/5ZOE4WntQSA6ssFOZItpSny+nhFVbwiO+qYw2YlRKC9owSgo6HBoNr6okxj1eq6dcU3pYlvjE8xTLUYBhPB0mRUJ+7LlcuKZYocaUJRltbtHvb7/QzDIIz7nM6LF6IMGmV1WmZ1hqYg4/xAzwce4ckZmiiO52kPPTri9njcnpHhMZb5EzeW9XEc62G/f3ONuL+5XUPMqMfHcWN/ZfsHyc4pP1cuBz4AAAAASUVORK5CYII="
                }, {
                    url: "ixd/iphone-dynamic-island-timer.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAABqUlEQVQ4jZ3TS0sCURQH8L5LH6A+QO0yetBLc5qM0pJyLEnDkEoqqE0PFyIhUdJLKzQnSTdhJBVEUEE5gzGtIgraZGXOVe/VuTdqbzBz9ufHOfD/V+TKDAAAQihCmEfFkiQBCHOoWCgUAADlVirKQQih56enQ69nwTFmY0xu5+TxzuZ7+v0frowlikVMEkeR+KzDZR6ZorR+G+OzDKWS9xLGoijKs5CEE0eR06W5oMuzNzsdmrK7zcZHnithDGRbGCcibHxYHxke2GH6A0z3upEWeE5SYhFyfhBeY7TLbot/xuEdZbw6jcAlFVpnYXZ/UBNbccTm5v32IV+fVkgqtS7Coa1BQ8DtOpkxsTbdZq9a4BT9CAm5ZINLVI/NPBHVV0c1VevtdQLPK7GKhCTYg6C6PkQ1BaiWIN3m62x++M0EkZ2JEiHx0P5uY22UbjjsUsXo+tXmmtT9HSYyLTGblQiJbm+Y2irHe9WLrdRCB21R1fHXV7Kt37skzN3emAwqax/t7NHbad2E1fr2+gIRktehPw9AhHLfueznRybzkflK54FYgPCfbv8AuUKLKhfhSEUAAAAASUVORK5CYII="
                }, {
                    url: "ixd/macos-scroll-magic-mouse.mp4",
                    aspectRatio: 2.142857142857143,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAMCAIAAAAYkIEcAAAACXBIWXMAAAAAAAAD6AF+hNEZAAADWklEQVQokRXQ/2tVVQAA8PunBJE/RJi+oY6IMFoRRWslLMqImZU5SDGDIC1oxIIiMKTC5l5zpsOpTClrrLlo6ba257697b13v7977+6Xd+69534995xzv7wXwucv+DB4qiedfSu925/e7U9mDsUzr0WzffFcH5p+hd7ppbdeJpM9ZLxEJ59LJ59Nr/fQm8+T6z342gvJRG/46xvOL0eqPw2dPf/XU8MVJpoZDHzPaZkYRdABwNQdYIGW6UE7JSgKotAxo+XRwIcOMGkS4TjE6KE4DChGGSUURSYkVyfKTHj/JMIFJhQTYrUAhF6aZUXRKYoCJQlKO2EQ+Etjtu1BPwoRbtkQOJ7rhcD1gOu5ng/DxA9j8kcfE8wdAxBTmlJCJLmpaoZpmqZl6UZrfW1zeflBrboZ3B+LUZLnGUKxYRgQwpRSSiglJEHIC0ngw2zqIBPceVe1sRcmhFBeVDhRkeSmaVorlY1j7w0ePfx6+cfvgn+vuH7cLookSTRNNwwT2DawHdcLJM3hFQAhzK4+zQQ3BnSX+GGCCWF5ieVEluObivpgbe37H745ceL45fKIN3cFeKjdLqI4YQWVFySOEzhBNkxQ45Qab3jQzcrdjDfydivIEH74xXKcKEpNRdN1fXV9Y3z84tDQl+WfL8DZCeAleV6EUbzNypwgNxosy4tNzVpYleYrom65+fl9DLx0ZMchQYQJxjwviPKOJKuqqomiNDo6+vHp02MjF5zpiSzPi6KI4liQFEU1lR2r1QKyBpY31dVtzQKQDncxcPp4gIo8zzBCDZbneJHlBJaXdLM1v1CZ/WepUWO1qUt5nhd5juJYkhXDci0AQ983gV1tcJWtLd00kjNdjHP7/Xan0263MSYsL7NCsyHqdVY0LbBjQVGzXQdav13OO512pxMjVOeVhmSwnMhLqtCsT/z57Vc3zqzyy8mpbgZcG8AppSSKQ8g1alyjLktisymbliHLEisolqbZty9mOM5x7NmgtrFe36ptV6tCg2uq2+dufnbu968FYYUMH2RWBnctfHJg6dMDC593z3+x/97AnsU3n1x8Z+/fJ0uzH+29d7S00L97/cXHtntL1ZdKM8/smdr/+K3uJ6b27f7vcGnrg9LioUcrr+7a+LCLP/XI/39o1QYhPsgYAAAAAElFTkSuQmCC"
                }, {
                    url: "ixd/macos-scroll-mx.mp4",
                    aspectRatio: 2.142857142857143,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAMCAIAAAAYkIEcAAAACXBIWXMAAAAAAAAD6AF+hNEZAAADW0lEQVQokR3OW2scVQAA4PkLPvsgSB5qXbrbWisojRjRIrYGCsVIiqa2WtKHPBgfVPrSUgtVQwiykSQbQ2M12AsWhZqUKGaFkGbd3LM792tmzs7lzOxczsyZncuKwvcDPiK8dxIvvddZHIgfnQsf9gd33/bvnvLvnUJ3+uL5vni2N5w8Hn3zDC4fjctH8XfH46kTYfkV99tX7Yk3jbEz4Na53WvDn35W7hkqE/7iZbfdhjrAyLctXQeqpQOjpTnQDH3Xd722oTp/TXpt29IBDv0w8KL/BZ4bRyiJMUYBsPy5G1cJ7/EwwjnGOIpwSzds2+kkSZZ10zSLOwnqdF3XtVcqlmnbru8FkW7ZhuVAxzOgY0AHOi70Itf1OtNniPYvH+oOjuNOjDEviJICNABaoKUCfWtjp7Zeb2xvOX9WEArTNEEIaZpm27ATxzHG/51Q4PiR69jJ5OuE89MHshk5bohxzHASzUmcIAIAavXty5euXBw8O1ceg8t3YDvIsywMQ0VRNQ0YpmmYFnRcXrEY0bAhTMZ7CbPyvmrHbS/CGNMMT9EcRTOiJNc3NycmvxoZuTI/O2Mu/mg4YZ5nfhDSrMywPMWwNCtowGjQUoNRHQg7N14i5FuDhpegEEcYUzTNc7woKaqqbmxtz/9QuX792vfTU/qjBcMJ0zTz/KBBCTQrNEmKYjhR1lc3+WqdVYGFvniBUMtDBxZ2/QhHEc2wnKDwgizLCsfxs5XZT0ZH56an1F8XkjTNsswPApYTJRlIB0DXdVExnuzI9YbS0m04UiS8h5dclKdJEiFEUjTNcCTFUAyvAr26WlteWWvuU9TPt9M0zdIUBQEvSFrL0g3otR1gWLtN+p+9PVXTtIslwr59Pu928zyPophmBZoVKU4lKQ60DKVlcwemZdrig/m028273QAhkpFIXqMYnuEVTiIXfv/6ywdXN+j1g8EXCTDRH8U4Dj3fhWSzQTVJnucEgQdA5XmOZCWgKOD+TCcMOiGChr67tdnY29/f2WWatCDuj9//fPy3mxRVg6MvEyvvPFU9/9zaUKH+UfHJcGnpbGGp//Af7x5a+fj5lQuFvweK1dOFtZM9628cW+07VjlxZKx4qFw6PFMqVN86Uu8vPn7t2eXentpAib3w9L9OAsuzmwndwgAAAABJRU5ErkJggg=="
                }, {
                    url: "ixd/macos-scroll-magic-mouse-cancel.mp4",
                    aspectRatio: 2.142857142857143,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAMCAIAAAAYkIEcAAAACXBIWXMAAAAAAAAD6AF+hNEZAAADVklEQVQokSWQ22scVQDG508RpD4oaruhdVEQrVFEMa3XohZpCDYYsKVEECQKVmwfilDxRt0mbY1haRtNQ7FWs22xsZua23a72c3cZ2dm5z5zZud6ztk9syurH9/D9/T7wUfBK8OdG+90Sm/hG2/CpdfjP1+NSvvim/vTP0bwb690rryMLz+PZ3P44t7Opb2d+efwr8Po8jC8+EJaHAnnDnjnRms/fD717dKTJ9apqPRBEPieZaAkBK5lG5pnG46l+55DOjAKo8DR23cLge95tonTGCbh/43DNoZJFyOURAaAc8UZKrxzNIEZRBgiZFk2AH6n2yVZn2QZIVlK+p7nuX9Pe64P2mGYQMsBtud7fmh7/n8jAGHaDmN0bT8V3Bq3fYhxByMkSrLSMgYxTU23Kpv3V1c3tmvVsHw+TlJCSJIkuq4DADoYY4QwQmkS+yEM2qC78AwVXBtTbOiHKUKYE2RWkEVJNgxzbb06/v7E2MHXzn3/VbD8s9eOe1mWpqmqtjTdsB3HcTzPD8SWy8kWAF63+BQVzB/SPdQOIUKI4SSGExiWa8rKRqXy9XenjhyZmJ0p+DfnbD/t9bIoThle4XiR5XiWl3TTbrByndMHrJk81S4ctINuCjGEiGUYQRSbsqpp2ua96k+zZ49/cXzmxzOgVHT8lJAsjOI6I7G8RDMsywmyYpYr4u0NQTNd8s1uClwYbbkoiCCCkON4sdkSm6qiqIIgTJ+dnpycPF84414vdgnJsiyKY37g0pWWYVlWU7VXa8pmXTEtgE7mKHB9IkwzQrowSQY2VmBYnuFEzbCWy+ulv1boBqMuXCCEZIQkcSxJsma6pg3Ctm9azn2aXa9v6YaeTg1R7uLhXr/f6/UgHPzF8k1G0LYZwTDtlgkE1fEcYF6dJf1+r9+Pk4TmZFo0aE7kBJVv0sXfT305P1XhVtNjecq+dAh2MEZRFAKWbrA0LUpisymapiZJIsPLpqq6i4UujAmMfceuVyvbW41GrcbTrKQ0Tv/yyemrJ3l+HZ54llqbeKj8Uf7ux0+sfJq//dme5dGd5bcfL7+369bRodKHu5bHcncOPHbvxR31kVztpdzS0zsX9jy8mH9kYfej/7yb2zqcW3njwbV9O6rjQ9yxB/4F00fVLrcJ2coAAAAASUVORK5CYII="
                }, {
                    url: "ixd/macos-sound-swipe-c.mp4",
                    aspectRatio: 2.0441176470588234,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAMCAIAAAAYkIEcAAAACXBIWXMAAAAAAAAD6AF+hNEZAAADVElEQVQokU2R609TdxjHz59EL+fASh0dWKTMepkrc5syiSKTFS/bqDrKufx+pfcLLRwoRWbEYrnYQoHTQm1ja8+trS6ZxiyaLLq4LTCLy5a9GOf4YjmoyZLvi+fV5/l8nwdZS0xcj44FAiF6Zs4dS0D6FhmeuxpN4TPZwcn1wcmMbTp/KXpnYPLO+Wv3+un8mVDGOs31x8Qvo1zvBNsXq/ZN1wamWPJmGSlHrqT87jFn1AYTJ0GmE5b0FKsFgoYSNBSvpng1yTXgXAPBqXBWhXMqglMrM6caZtU4i8Hqhx7BO5N+uO5HHtPnyqEri15X0Bn9Gi4cpzbaQbEZcCgUtYDXAgWHEiWUKDUQrOptyiqC1VAcBsV2V4WcYn5Ih3YLF5Dn9OePwucK/u9uun1Ox/cDIGUBuTZQfg8KKFBwGiBgZBHDi2qc1+Dcm2gJDgMVg7P6DZ0rp+h/8pfk/Clkiz7yc+TE/aA168GvjYQIcKMXpA+DQgtQ1mqBoAXcXtP/g3gMVPSOWu/oXWYh9lfu29e5nt1MF1IfN/0aPvpTsJv3Xkw5QQTQNjJxkmI6QEn3Tk0LOA2puLwDibqR2qcBdi4++zJre715SmK6pNXDyM74/u1w5/Og5UffmYJzMA7dbnLaSt4+BjYNoIwBEYWC0lRh8VqCRymxCdbMXnH8+sIvjF3e7JHXu+T0IXmlE/lzzPAybPwtYH7qPSE6+9egPUaO2okbX5BrHVRRUXv7BAGlRBSIjbDa5qqR0dXHabCbOy29AS2b5FQ7sjO2rx5u2wqYnnmPPXT1FOHFeRL68AkrsXiUyr0PWAxW9q7Go0BohNV9Iw++iuS5Je+/G6cVo5VDUqpTSrbLi63ITkRfH23Z9htfeMxPnZ9V4dkMeTmG++3Ds90EY6TuNUFxT03AoKgbeXA8yC7HJ//O9smMRV42y0mTdNsoLbZKCT3yalRXD+i3va2/uw48c3z0CHSX8PMLduCzT/XjyYNUoVmhVDCH2OSomjxVeia+tW6VmY+lFbOU7JCW9kvzCkiKY8irYGPdp/vDY9hyGl9A8xPyk9rw2ezQ1dhQ8PJw3EJstAC2EVaaHJUPXPeHJlafpGwyY5HSB+XkAWmpTZo3yLea5VlUmlX9B1S8+N7NCO/OAAAAAElFTkSuQmCC"
                }, {
                    url: "ixd/macos-hot-corners.mp4",
                    aspectRatio: 1.388316151202749,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAASCAIAAAAhTOL3AAAACXBIWXMAAAAAAAAD6AF+hNEZAAAFF0lEQVQ4jR3PWVBTZxjG8fckIftGdkKAsAhkwUYRnbaCU51au9haUKtFpJQWESsqRRCGpZaAQsKSxCYpSyaACzhltNObXvSmd+2MN73q1Ok47WiRLQSynXO+70M7OPNc/+b5Q+Geivzd5bsPHCmtOOx482COZVeRY6/FUWbfXVayq3R/RcWeUkf5G3sd1tx9O/PLHXn7d5pft+Y2HzYNVhlclQZvlS5wXDt5XD1zXAWgt4HOCpri7eksHL0tTW8R661yvVVlsKp0xRqDRZNh0ZjsMoOdryrZscM2/HnuZlCHxjWsX4N8WjSmQ8M6NKgFMNipjJI0Y4nUuFNrtOdk2osz7Y4s275sW3mO7VCu7bDZdshkf8toP/GaJVBrXvHoXk6nbwVVWz71lkeNR9TEpSE3NKRPBwKjXWW0mzNtjizrgRzbh/nWM0W28zZbq8PWs8fmLLO691mmjxb83mpKBDQvw8otfzo9nM66lOiGEvWno750dF2FezS4SwPFJmt5jrWywNpos3aXWcYOWMLvFi9UFf9cXfRrfeEf7Xmrtwxbd1UvbytIUJEaUTKDcsYppb+R0V1ypkPBtCuYq0q2VYVaVHC2yHKttNhzsGju48Jf6goeNef/2ZH/5Hr+4kh+/LbpxQPNi3kFmlIwfiXrUzBuOdMvTvVKUp3SVJs02SJJNMuTFxTJRmWyQQnj7xT+dKbgt+a8v7rNi4PmdU9uzJ+XmM7DD7O3Fgz4jhpNb1s4KEc+OeOW0k5xqluSvCZJtogTzdL4BVm8QRark8VqFPDoivnvvqylMVM0mJ2cNKdCecxsHv4xiyxk4jkDvqMlMyoUUqKgnPVJGbeEdoqSPeJEuyh2RRj7SrJ5TrpZL9molUVPy2Fx1LgeNMZCpmQ4h542M+E89EMWeWgk9zPwXAa+oyMzGhRSoaCU9Ylpt4h28pM9wkS7MP7K2jgnjtaL1muk65/IYG0iIxoyxsOmVDiLDpvpcC5eMJIHenLfQO5l4NtaPK1GoXQUlLA+Ie0S0E5esjst0caPXeZvXhBFvxSt14ki1ZK1kzJYmzJEp4zxUEYyZGSmTMxENp43kAU9ntfhu3oyq8VhFZqSo4CQ9fJoF492cpLdVLyNF7vE3WziR78QRD4TrH0qXj0hhZVxXXRSF5vQJcf1aFxPAgYyrSMLBnJPg++qyKwKh+VoUoICaayXw7go2kmluiDRRsUucTbO89breWtn+aunhctVYljxp0cCylggPeVXYb+a+NUkoCbzWjKvxbMyPC3CISEaFyA/h/FQ7BAwfbBtXYXNixBt5KzXcVZr0lZOCZcqRbDsEUS8/JhXmPKKkU9CfDLiU5BxOZlT4xklnuLhCS4OctEtYEeBvQnMdaA7IfE1pJoh3gCRWmq1mrt0QrB4TABLLirihtgwlRzhsqMcPJZGPCLiEZPvxWRWjkNCEqSwn0I+YIcBDQDTC6kOCrXA4ybl40bt5llYPsV9Xsn/72gaLA9AZAA2bkJiENghIC4gbg4Z5RFPGvHz8QSfjHPxd4BGAQ0B2wdMD6Tagb4Mi03ipw3ySDU8P8ldPMZ7+j4fVnoh0gsb1yHRB3Qf4H4gN4G4KTJKEQ+XeHlklMI+QMPA9m8HMp1At0LiIiQaYKMWlk/D8yrq2Qfcf44IYLUd1q5BtAPinUB3A+oF8i2QASBDQEaAeCkywiHfAr7x6lQXMO2QugLxJtioh7UaWD4Jzz6i/n2P++Rtwf9NJ13j9a8kaAAAAABJRU5ErkJggg=="
                }, {
                    url: "ixd/iphone-photos-tap.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAACyElEQVQ4jYWR309SYRzGvwfq1rhQp/0h3ndTrXVns7WM+Qs5Kg48lJBLNvCigU6BNn/c1LysVs1Et2xUakAC4dGULCVWIqaiCee85xw45/A2qdQ5XM+evfvuffd+9jz7AndMqCBZlvH/JIoiy7LH/3IcB8dBgiBIkhSNLvt87/1+XzA4Fw6HDh0KhQKBQOHJH4/HZVkuzkII8byQTqctlm6KMtpsPVarzdBBaZq1JNlCkqSWJEmypftet9Vqs1ptra1tw8NDsiwhhE6yGIbBGA8ODrqcLoT49fVkhkE3Ll8qVZ2rqKwsLy+rqDhfUqIaHR3N5/H3H4m93X0jZfR6vRjjw7JHuSRJMpvNX1djPJ/b2kql0+yzx08ddkd/v7Ovr39gwGW3O2h6YW+f3Uhu5TEee+lxu90YY4ZhTrJyOdFsNn1YWM3mZI4TeD6LuGwq9SuR2FxfTyaTP/f3M4jlYttoY5fdZPGTFxMP3K7iLFEUTSbTWiwuyRhxAi9kuQOckM6w6QybYRAnZP9cMiyPMZ6cfOV0Ok/Lleu6a9pMbmCM8/n8v+0fDkezJEkY4zder8s1UIzFcYLAkzr9o6mlqWjas7DjWUx56JSH3pmYP7CncE7Q2xP0znhk6+1a1jbyvHguFiEsZa/V66B6TKkNQv0s1M2CegZqZ+DmNNROw62Zv1bPgPqdQhuBC/0DRVkMi3BevN6kh5rxMy0RojFANPiIeh9R51c2+qHBRzT5iGY/oQkU7Ffql+CiuziLRRwWhYNc6tdKahl0H4n2MLSFy0yRqvsRVUcQWuaI9iDogkR7CHRBxZ0VuDJ0WscCq6EdNNPK7m/QuUzcXgQDXdpFV9lplfGAS+jDYIgANQ9URGFeg6sjjt7eUzrKuRqNATQBpS0Jlhh0fYHOKFBLhPETUDQYF8C0RFiiZ3tWFJbPClsCqh/a7Y7jrN+sDBTsXaPkzgAAAABJRU5ErkJggg=="
                }, {
                    url: "ixd/fidgeting-pen.mp4",
                    aspectRatio: 2.052,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAMCAIAAAAYkIEcAAAACXBIWXMAAAAAAAAD6AF+hNEZAAADfklEQVQokRXQaVMaBwCA4f0v+diZfmo/5Zi2GTNNzcQ6Y5wmpImOTdpJ7KS1Y6RpojZaxaMuCisqG1lYYE9YYHdhERCWm10OQQ45JKKik4NG/0HHP/DMOy/gbZy5G+d849xROTfEjpaYlMoszCDOeZRdIQQN4VajzlXCA7tEgztm8kmIkDBtyVhoh4yUDIKkoYMgGVAh7ARkAYT6J67SYaufuNoZXfholtpItKkPlCBe3hCysEcy+jJ4pEiF83Rij45V8OAOFS2b/blNdxIRkjp7CLR61fiWGhcAX/NMqJ/x1f/YSseWf0dk2uZUC403kdAe7Mtj8X17os5zAbtWPT4LqqZBPajb4CJrtA8ivTqbf53Z/hflJiHLgtEJCLUOV/nornX4vQ6VPaZzbSrTJuUjo1hFtkv2RD3Cu8Om9cWHiiuXLoFjz5f/+P3l3OI0qJnVboCbOIS7IUIAUW7R6AS44ju2/IEtv+fKH1yl93TmmEi1sGSTSL21JppiuubWLr1W3P316jXd01+cc9PP7vc/Gx1VvhpXTk5Oq1dBhNRYuBULv2zhAbZwasu1yXSLTB8y+RMmf0LKLSRYNkdrtNxSI8zLgSGV4p4Ir8YIy/P7P9zuujr0ePDRo4FR5dg/y9CSgdBaeYgUtLgHcOSOCalFyYdYYt8Sb+CpJpZsEKmmNVZDtwt/a00iipYxpOD3/fXk8ddfft5986v+vpsPfrwz8qdyXmeArK5VQtDRWxAhAHzxlM4ck1KLSresiQYSKpoiFVSs4LEqnajT0kHKH67acNZo/Kn3u2+vX/6+54biXu/wyG+TIDQPYxe/SO+ylddRvguLyZ/ac21KvuBI6e2mPw9vZU3BXTpe47OHglTN+X1hBzM1/PPt65f7+289HFSMTc3O682giQFRJ0R412wBAysC/O6JPXvE7LQvuuI1LFFf41OwIJuCBXNwl4yUHKl6XCrGOZd24oXixrW+vu6BQcXIq4mpFf3CG3zFymtwYc0eQNgwQCdrRGqflg8o+cAQyOsFmYhV7VKTTtTxSMUaLGDbOZ9czYVFFwwN93T1dF0ZeHBn9IXytRqa0RkX3pBzMKXFPDATAGxSHQ0XLdEKHq+iYmndLaHBAhosYGIRC+2aAzlrIM1ESlIsGXVgE0N3u7/4rPfWN0+fDI3PqGa08KzOuLhJreIeCOP/B10vU71HLnotAAAAAElFTkSuQmCC"
                }, {
                    url: "ixd/fidgeting-airpods.mp4",
                    aspectRatio: 2.052,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAMCAIAAAAYkIEcAAAACXBIWXMAAAAAAAAD6AF+hNEZAAADeklEQVQokRXObY/adAAA8H4TE30xk/lCX6hxMRovIZfNTY1ZzpksWzbdPJMzc05vydQs0RFzwsF4OmA8lIe2tKUtT6X/QoHyWKAUKLvjGe6Q43a7c3fLvoHx9wl+UHryMjV9lZ6+Ygcv0drcGpf1WHrDH9MH42YcmELspp82hxIORvAkCn4gedgSDCQ0qxAF1cNWHhPCJpbSepjfTH4oPT7lBidgdApGp9HtY6Kxj0pTX77n5BpuXnGBGpyqIzkFL6gBoYGKLUxs4QU1KChergJzVTsjGlHeGAIGDECZ6WlqfAqGJ8nei4h6SDUXuDwL1aaB0sAjtNFSn6yO8GKXKPXIcg/JtFCxheSaQaHl42U/X/eBmoUQtE7SiCSg9OiE6x+D4QswOGHai4h6wLQXdHOOlAa+7DZeHZPybqQ9D1dHZKVPlHtevoblVVRUA0LTx9f8KRnmJDudNYU4iOsecf1/k70jrn/Mdo8i7QWlzML1KdWY4ZVRVGxl2LTPYoPZMl7a8QMJ5sowVwmkqt5kxc2WYE6CuYornrfTGSi58zzaeUY353Tzn1jnIN5ZMMoMyXcJaRiTp5IyEJSJYf3nh6u3Niz2RwaDzuG2IJQVjbkiGVdM9MSLHrbsiucdVBZKdA4oZU4350R9iksTqj4NV8dMfUqU+6C1l9hy319d29LqDN9e+3rp3O3bV+/cXftz06Bz+gwwYSeBOyo+ieQcdMZG8BDoHjLtBfX/a05Ux4i4gxV7oWKPrgxYZTeFhO+dX3p047r21vXlt8+sfHn+xrWVB7//+pd1y+gNmYKMnQRbBG8KJmw4gEDvefzpYbS9oJUZ09ija5NARvULLUx8GpEGYmce+lu3pvnw6ifvL7352qXlj658dfHOvR+1Jps5QJoRxhRgbCHOhoMnVBoCO89i7f24uk839ojKkJRGrmTNm5JRsYPn1Jg0SMYz31/UaM6+sXz29U8/fm/l8oW767/8YbTq3ZjRT9kw1ool7STvotMQUx/R8m5E2aPl3UBG9fIyWe5H6xOmOqRKXSLXjood1If+dOXzb5Y+uPDuW5e/0Kw/uK93eo0wsQmTRh+j81A2LOkM8xAjj7BiFy/3yMoQyW+7uBqa62CiShQ7ZKETyiqEoHDVkZgE5h9ufvbOmUuac9+t3twwWQzuoMFH6r3kY3/EQfBWlP0PJAlgC8MFMYMAAAAASUVORK5CYII="
                }, {
                    url: "ixd/fidgeting-pen-tip.mp4",
                    aspectRatio: 2.052,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAMCAIAAAAYkIEcAAAACXBIWXMAAAAAAAAD6AF+hNEZAAADjElEQVQokRXCfU8TdwAA4PswS+aWjD8UBjKIrbwjKKiIY9lcJAMimxrBNqtAkKjBViOF6qB0BaGAcO1Be+3V9l7a0uv19X693tlaWkD6RkfVFrJ9gMUnDwRypfDhCZf/N5Q9oWK5dQeYRwjVqunVG9M8YlVvoC91eg2MrlhIGHcjlBe20waSMblCFjqyYWcWjIQGsc/otp6qdRDIHQcyRZA75g5PAqlPdOIfZyxt53aNHt7kFYw0MNGsxcvZAu9QGmBM+EtfZMvFwgQDk95li1NjsP2N2DSGtxCfP+byJ+FcCWSK/g8FJpFzx9Ou9ylS2MOCMYLfdUX3qUiC4hJEOG7xC5iPN9PAuM0iVMBA+fWUb8FITC/p5zfMEJcrguxn/rAkZIuB/SOQK4FsMZj66Iwe4Fxy+32K/vLAwSed4biDZk02l5Xh7MGY2c0aCAYhGRh364yEVo9BbKoQznzisp9jhf/i2Y+0nUAUz6xWgknmCDbm4OJOPkFxO0QoRgYEvWJK2XtTPSpRPhpXLy4vwsgaal3H7GuobXkTg8DBUXD/KJTM+AhSPy67K64ZaW/58fsqydDQ+JPHcytrS5voshFbtZAITq8qVQ9aG0dbG6d7uydudMluDzxVTM4uaLVr69p1GArt5f0fClEHqb/f31V2quds1b2LDeJTX3c2iWRjsqWtLT1Ommk/5g1bvRwZjCIvFBMdLZh8VDXYc01U+fvAL9LhPyblT6b/moX4dAFkilGPe3vmoez6hVe3fu1rFosrT3e0nh9/PKEzoTDuQOkAzr4zuQKYJ+IyY5ZHEkw5NthW21JbfqOno/9m98gDydRLFcRnCny2lNhJsksv5qUD8r6frpyrFFWfuVBfO/JwFMFxjPZZvSE8GMH9EYsbkDjFaJ7P3e+/WP5N87mKK+11t/p+VjyXq1+/hoT0EZ8qJNL5yIpqZez2vWtt4orvRNVnOi81ylVKA45jHh/JRiggkKxABaO4O+RDdJO9VxvLvmoSVXR11Eskd6bnZhfewFAwcQB2s/HUYWR9dm1ksLe9vq6mvL3+hyHJ3RUU3aScRpeHYDkK8A4gUP4IERCAx6Md/u1yxbf1Nae7LzdJZVKlWr0I66FQMuWPHwg7e5xuRivpu94saj5f3dlW92xmyoATWw436vZiTNDqC+GBMM6AtwzYpn3UrGKwsarhbNnVSw3SP4en1Wq1bvV/RUlKXgoCOgMAAAAASUVORK5CYII="
                }, {
                    url: "ixd/fidgeting-pen-spin4.mp4",
                    aspectRatio: 1.368,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAASCAIAAAAhTOL3AAAACXBIWXMAAAAAAAAD6AF+hNEZAAAFY0lEQVQ4jQFYBaf6AKC7vl90bB0qGQcRDQwVGjM2NVtcVGxtZnh6dXp+fIGHhoeQkY+bn5alrJutuJ2xvpywv6K3yaS8zaa+0LfP3azA046Yn3Bva1dVSgC+4PfA4/ueutFwip1YbX9ib3tvfIV7iZGBkJiIl6GMnKaLmqOOn6mZq7earbujuMamusujt8invc2kucucssSUqLV7hoxfYWBcXloAt9jtuNnuwOL6wOP+sdXymrzYkrLImbXIobrOp7/SqL/So7rMorjLp73Pq7/SpLrMmKy8k6rAmbPNm7PKnbHFkae7i6Czg5ipfpGiALna77XW7bra8azL31llcV5lcl1ib2Vqd0xZajZEVTZCUTVATjI9Sis3Qi48T1BZbFpaYmRUOWtULmhQLlxZUpaouJSmtJOks4+hsAC72u+62e/A4PaevdJXR1SeXW2PQE+lSFlgQFsEHj4EFCwKFykQGioDChhwUiDVmz/lp0LwnRLzlgbtjAVjTTCTpLGVoKiFkJiLl50AudftuNbsvtzwsdPnUDdAcgkRfwkTnAQPgxUtGDZeHzVVUlx1QVFwdGlW/6kM+J0C9ZcD8Y0L7oYQ2G8EWUxCmKKnlJmaiY+RhouMALbU6rjW67nV6bzc8FVIUmoBCoMOF5gIFK41SDFDbBQyWDNFYyY6WkBESeWLEfmMDud8EeJxEeFqFbxUFk5KR46PioWCfIaCfYF/eQC10ui10uixy+C/4PRcYm1iAAiEDBeVDRrKjqRqeZwIJk8NKEsKIUEAFThLNSbVYxHmXxLVVxnQUxygRyxZTEiEfnN+e3B+em+Bf3gAs8/mtdDlstHnx9Lih25zZBAaggYUkwMTu3eOrq7KIDddEStSEyxOECZEARw7IiEudzUkqkEhvkggw21bj11bcFtNfXtwfnpviYmGALnT6LbS57zL286im55sY4VUY5IiMpMAALBDUsW8131+mwknSxEqThEoSg4jPgcfOQAZMi8xQZZ7ib+dqYtXTHRMPnNpXXRwZYGAewC81Oi72O/Mvb7DhnaIXlJ/c4W3lK2hW3SjhquoqMu5rcluco0RKkwHIUUIIUIJHjshMUpvcop1kLWMj6GXZld2UEFkVUhsZ1t3dGoAutPkvNbszMLCx5F+lWpfeGNsoaPLd57iaJjmaJDccI/PkZrGh4WiTFd0MkNjSFJwg4CalJStP2WCt5yam25dZ0Y0WE5AZ19ScmxfALTL3bzT58rL08CRfYxnXGNJRouRv1qL4El/0zpzxStltiZbp1BrpJ6WsqWXsKKWsKaYspeOqYeDlcKim3xZSkwyI1BHOWBYS3BqXQC0yt23zN/H0t/AloSXdWdiTEZGQk8xP14mOVkqP18tQ2I0SWIuRWFOV2lkZnNgY3FfYnBgYXB/eoavk4xpSztPNydMRDhcVEdxb2YAt83gtcrcw87bvpSFlG5hTz00OzMoS0I0amplkZ+loLG5pbfCrsDNp7zKqL3MrMDPqbzMqbrJscLRxLe4mnJjZkY3TkY3YVlLeHhzALvP4rfN38nL0cKUgXNTR0U4MExEO2VlYo6gqqC2xKO5yKi+zrTI2LnM27fJ2bTF1rXG1rXD0rbF1cnJ0cigknFJOVJFNWFZSnt5cgC0x9q3zN3Rwb+ddWRQOi9MPzZSTEN6g4aXqrWgtMKlt8eou8utv9Crvs6svs6vwc+wwtC5yNW3xdPCxtHUs6eTaFVUPy5bVEV2cWcAt8zcvc3bxKOYelhHVD0yTD81XFhRkZ6ko7bAqbzJrL/OscPTr8HRna+8qrvIp7jHp7fFscHOtcHPw8jT2r6wrYFuWz0sXVNCcWlbCgi2OhX8Q6UAAAAASUVORK5CYII="
                }, {
                    url: "ixd/macos-find-mouse.mp4",
                    aspectRatio: 1.6611111111111112,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAPCAIAAACeBPOyAAAACXBIWXMAAAAAAAAD6AF+hNEZAAAEFElEQVQ4jTXO+VMTdxzG8c+G3U12N989vgmEJOQgJ2zukBAOQZBr+KH/S2sZUSooilWBEQ+0HKKC5TIK4aZAuVHaCo2NEay0M07/kU6wnXn9+p7ngXQdpGoz3tVA8hwcVsHBWXhbCb+egV/OEPvlxJty4nUZsVdK7JYSuyVZOzFyO0pvhJWrIeVSULkQYOb97LyPm/OykKzOOPzSV8D+Gdgvh9dlsFuasVMCOzHYjhHbxYqtqGIzQq0XKdfCqqWgat7Hznq4hAdNe1DCgxIygt8qMhfe/N/vlMB2DLaKMzajsBklNqLEekTxcyRrLUyvhJXLYWYhwMx42SkPeiWjl4UonsHHCxDslcJu7HT8SxyBjQixXgRrYWI1RKyEiOWQYimoWAySi0FqIaCa9bPTPhSX0UQBP17Aj7vRmAuNuvgxpwCbxbARhfUIrBXBahhWgvBTAJYDxGKAmPfDnE8x51PM+rJmfFTCT0/52JdeNFnIj7r55y5h2CmOOMURhzhsz4DFECyHYDEIiwFY8MNpT8x6iYSHmJaJaVkxJWfFZfKFrJqU2QlZPSbzI27hqVMcckpPHKfs0pBNHMoXYD1GT/kg4Sdm/YppLzHlhVcy8bJQES9UxAuyJt3khIsec9M/upkRNzfiRk9dwqBT6neKfQ6x3y4N2E7lSwNWET5/pT2o5mdD1IRMTMpZkzI1UUiOu8lRFznqJJ87yGEH+cxBP7Exj23coJ3vcwiP7EKvXXpgww9suDcfP7T+B/5uEP9p1J40aLZK0GihcthJP3dTIy7qmZN6YieHbORjK9lvpX6wMo+sTG8+dz+fv2sVe6xSjxXfsWT0WPBdC75nwfCpXjqpxX/V4s/12tRZPBPgBp30oIN+bFMO5NN9FuqRheo1U/dN1F2z6o6J684TbpvE2ybxllnqtOBOC+6y4C6zptusgY91wp+14nENPq6WTjLwbrHw1MXet7IPrapeC33PRPUY6W6jssvA3DaovzegDoPQYRQ7TFKHGd8w45sZmltmLRw3qI9qhaNzYrpKTFcKHyrQp0rhfZmU8PA9FqbbpLyTR3ca6Jt61Y1c5rqebc9FbXqhTS9eMUjtebg9D18zaa6bNR0mLRw1sOk69fsaPnWW/6OCT5ULqTKULuE+lqK9MOqzsdf0qht65nqu6qpO1abjvtOpW3Toko5vyRUvG6RWI27Lw1fyNFdNGjhqVKXrmFQN964KJStQshy9K+WSMXUyyn2IsqkIirv5dj3TqlO16tiWHK45h2vK5pqy0YUcoVknXcqVWgz4shG3GjEcNdLpemWqhklWqQ8r1Ydl7EGMOyjmDiLc2wj3e5j9UKTe8PI3jeqLOWxzDndey36tZb/RovPZwrc5YpNOvJCLLxpwiwH/C758R+tCwxSsAAAAAElFTkSuQmCC"
                }, {
                    url: "ixd/iphone-scroll-markers-c.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAABqklEQVQ4jZWRSY7iMBRA63qw4QB09w6pVBdhiUQWCQRBGHIN1hygAYEAx1Nsp60M1QkJSUAt2auuKpXCW1jy4j89f79cv6KqKs45AOCPlMn7exzHSZL4vg8ACMOwqqosyz5PvXy4p2la1/V6vR4Oh67rvr2+tlqtTqfTbrf7/f5qtRoMBrvdrq7rz7r/XFmWFUURhqFlWVEUPR4PxzS73W6v1/vx89dms7nf7/v9fjQaNXKVZUkIcV03juMwDP+mqY69KaSUWZYZhnG73Rq5KKWO45wUvxXb7dbzPCklxphzbhhGWZaNXAghx3GEEBhjCCHGmBACIbxcLpRSxphpmk27MMaO4+h5AABCSBsRQp7nMcYmk0lRFE1d0+kUQugpdBEAAEJ4Pp8RQrZt53n+RBdjjBCiW7QRKnsQBJZlfbB8t6/ZbEYpvSiCIIiiKI7jSJEkyRMu3SWEIAohBGNMSsk5F0I856KUzudzzjmlFCsQQvorCCFJkti23XT3hJDFYuF53vF4PBwOp9NJn/rJURQ951oul/qNnHPf95lCCJHn+fV6HY/HX7r+AXPyrA4AonpVAAAAAElFTkSuQmCC"
                }, {
                    url: "ixd/minimap.mp4",
                    aspectRatio: 1.3580705009276437,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAASCAIAAAAhTOL3AAAACXBIWXMAAAAAAAAD6AF+hNEZAAACUklEQVQ4jXWUT4vVMBTF50P6MVwPIrpRQXDhSlwoIygoKKKMG0EcHNy4UGbjRtz6XvOvSfNec5u0ucmTyX0vrQP+FiVpycm9J6c5SoVdIS+4Mq0kAnGapq0fjfPGeTuM4xSP6JO1VmvdFYwx9LTWmgJN27YFAJJDxL53Yht+r9WvP5JtfQ/DXotz3jQN55wVOOfrAmOsaRohBGNMCCGljDFSYcMw5ITGtEqKnBAA9lq0rTFGa02FtAWqq35t2zaEsNvtAKDve0z48OzntaffVtaP/qCltVaFruuUUqSoCyRKA6XUOI455xijcw4R31xc3PzwmW8hDIceGWPr9ZpzLqWkJ7VckVIyxvq+px4RI4CLiF/On799fd85Owx+r0WO0DKypmka8m61WlUHhRCISN4DXNbV2Y1uO8TknJu1qBCSIEXOuVKKGqSujTGHuvZaxlyag4izFhRcYSjQYJomXJAOVK1WayHlP1qbzYa2tdbWlBHkeo1YCCHnTFoxRg7bNdgJ46yllKoRW0LeCSHqCYS9VgTnMOXTs9N7D25xzkMIs191TV1Zx/RkhVkLXErp1cuTu7ePO2O8X5xjXVBPgPJBR1wP13u/7HEY/DROOee5R621lJJiSaGt0/qmLVzxyxgjTYdpkQlrLZ398t+u0yVxziqkaXzx7v2Nx8+UMaH2SIUIIWj/5bjGmAb0DyFGBy7ndPLk0Z3j6xvTDlWrhr56XI2jlFCx1tppunSn9Agxxh9fP30//zh6gHrnjP/nytWY6P4q8e6s7R30Dqy1fb/9C/l+7RnZVQKgAAAAAElFTkSuQmCC"
                }],
                depth: [{
                    url: "depth/windows.mp4",
                    aspectRatio: 1.8354430379746836,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAADB0lEQVQ4jW3R+2/aVhQHcP/RbdVpm/rL1HZKsrymPaRW7ao1XbRFbcIoz5QsITwMCQbb1wZf4+f1A+MHHg7YBjIBgS3VPjo/nF/O9x6di+HIq6puSXYvBPsU9lId80+gf2ihP+roAJd+KXEvzqkfPxHfn9Z38/huDt/J4Tt5fG9e9b18fT9X38/V9nO1vSyOVVW3rHpF0S10rQxnJhn9hNSOrtE7XHpTgS+K4IcCsZevbWcrW+nyRvpyI1XcTF9upktbmfJ32cp2trqdrexkqjvpClZW3KLk/iX083wv1TGSQH/f1A5q8qsyfHnB/lRo7uZqm+nS8+T5s8TZs0ThaeL0aeL0eaLwbfJs4+PFVmoeOs9NlbAzvp+HVpozEoz2gUKHDfVVVXxdFt5Uui8v4c+fqO00/s3J+ZdHmUeHyQdvjx8eHD96d/zw1/eP3x5/8dvJV4fJr3//+OQo8+Qoh3GyBlWjo+ptRQeiSosIiFoLyjUaUk3ygm5c0u0i1bnmRVpWKRnV27BMMZSgUOK8gKQCCQEZMQrCeoZu9y1nUT1Dd/rWwHW6PGxTlNtusvKVoim6pg2Hf8+mk9vb26Hv901zNpvdLsRx7A+8ZY/Ztt23+/9lOw5JUldXDcgJLMvJC57nxfFkHIZRHMeTSXgnCsNoPL5rsOFCHMdhGA4GgzAMJ/HEME2WZkSyc9W4hhAihHzfn00nSFXDMJyuTO7DopUwDE3T9H1/Op32LKvDtCUGNggC0ECWJdfzCG0ABRFyHNK08Xg8Go2i+7DRShAEqqrath1FkW4YLGAlABtNAgAgCF3H9cqiA9odlmHoBV3Xoyi6ublZJ9zLkiRplaUzDNuluSZFqZo2f8Nxi4Jz3SJpmqJpWpKk9eD/Z/27l64zgBUpjmi1OAilRVZFckmGbbMMteA4zudZ45UgCBRFcRwnjmPDMDoMK5IdoknwPL/cqyJ7JGAATVuWZRiG4zjr2aW7fxwOh0EQrBsVqSzLKrzE8zxCSFEUz/P8YTDw50aj0fL269mlfwARropwRGORXgAAAABJRU5ErkJggg=="
                }, {
                    url: "depth/figma-layers.mp4",
                    aspectRatio: 1.9210084033613446,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAANCAIAAADTzFK5AAAACXBIWXMAAAAAAAAD6AF+hNEZAAAB3ElEQVQokZWTsa8SQRDGiTYkkFyOC0dI5LgQGqNRGiQWGJpX0VjYSaEdtJoQC/8DSsLfQGFBDI00hsqCxsSGWFxlYcKLgWRvZ5a73R29Q857D3zRL9PsZPPL7DffZvA/BbHO9jP/TuGxhBCI6Pv+NeIJCwB9P6pzoDAMtdaMMQAgIiFEGneVBYBCIBFqQhSIf+5xzrXW6/W63++3Wq1OpzMajRhjQRAkuBQLAIMAfCY+vBMf30cosT/gOOdSSs/zGo1GLpcrlUq2bWez2cFgEIZhYt+RFR0A9vvg7Uv14JZ6eDsYvY6mA36whoiGw2E+n6/VapVKxXGcarVqWdZyuSQiznmaxVERemv5KKee2OqxIS+q+P0bBiECcM6JqNvtWpblOM6dWI7jFAqF8XhMRH7sb2qufYA/LuXTe+p+Rt3NyBdt5ByFAM4ZY0TU6/VM03Rd98ByXdc0zel0esKKXUFF4vOn8NWz8M1z8fULKi0AGGPb7ZaI5vO5YRjlcvnwQMMwms3mZrNJ7D/Zo5RRKYWhxKv71lpPJpN6vV4sFm3bbrfbq9UqMetsvvjvOt5I44jI87zZbLZYLHa7ndb67/k6NtPJuhZXKSXFEkIkE93AukkA4Mc6/ZK/WD8Bjb4sHesPOIQAAAAASUVORK5CYII="
                }, {
                    url: "depth/ios-choreography3.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAABeElEQVQ4jZ2TS0/CQBSF+cfqyr0JaBRUNoUoaoISSSzvQgUE2uFRCyKU0hY0xrDwEUDUMNN2WkoMcd0FPfv75ZwvuS7VJgghjDGEEGnaYrGYz+eqqmKMEUJ2Jy47kGEYo9Eok6GO9ve2NjdCodAtTU/GY13X7XC2LNM0y+VKi2sS4dSOx0tn6SBBCIKwXC4hhGv3Yhi2xfOpxiBTBHQu5/P6ZFm2LMshi29xUpOv33MVjolGwrK0YqF1WRhjAIAkig+tdiRyXaLpZIxUFGXFcuSrXCgUKgwbuby6OA153G5RFB36AgDUavVU+Jw4PCBvyGAgIEmSU/csoM+OmZPdOmClvkJRWUcbITStZZmK1wPbfb7K8+3uo5BIpJ35gti0GsX0MB+TO72e0BGFbjaVlJ25x4bBMWxcjuZfX4adj4E0DaSrSl+0nPl6Hjz54/5wlkqQd9FEiSCpz/c3bBjr9fqPpmlwNv+ZTmezyexrjH6/NV1XVdvf/gP5A7hMckt9FQAAAABJRU5ErkJggg=="
                }, {
                    url: "depth/ios-search-entry.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAABf0lEQVQ4jZ2TS0/CQBSF/ce4c20iaogkuKlENAQS0YRaLBTKG1reokhLO0WMMSw0BAE1zLSdlqkuXHdBz/5+OedL7o7uEoQQxhhCiHRjs9ms12td1zHGCCG3kx03kGVZ0+k0k+FCgeNdny8SuSjw+fl8bpqmG86VZdt2tVrrd+6pOLvvP+E5PkxR0nDoOA6EcOtetVr94b7LtsfpksDzfPAkCFRACPHCqteFXq+t9Xvdfq/aEa6vYqoKiLM9C2MsiuJIGsmSUiyUy7lciqaBphFCvPiqVCrFQqkmNBNXiWgkcnjgl2XZoy9RFJvNNhuPUsEAnUyGz8KKonh1L4i5y5BwftRpNFRlzKWzAHjYCKFNfqsc06L2lK5QyJeHAynFsAAAD74gtp1WiX3O32pP8mDwOJKkbOrOGwthy2rXBUa9Kb69ToazMViG2YamyMSbr5fx5JQJxbgMQ5dvUhWKzs4+3rFlbdfrP4ZhwNX6e7FYrj5Xizn6+TJMU9ddf/sPOFy4Qo6DOzgAAAAASUVORK5CYII="
                }, {
                    url: "depth/fish.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAECUlEQVQ4jRXRSVcaBwAA4Dn0RWUGEBz2RRYBEdSkPvKSSy95vTSXvrYaFVQUQXYYYIZt2DdZFBFEIKCoEBBNNMTEaA9Ne+ihv6ovf+C7fMDr2rdfqv9Igj0Z3hf7ukxHXRTscdEW0/WWYatQ9AWarUKzlWFbmWraJ2+lyYYsC2nw0bYsdC0NXc3vPi7kH38+/Paq9h/wqvLvy8LjfOJ2LvZBGX0/F78VBztsVx02FokbCaIuA+ky4GYC0iYoxjzFlKdZDjhITR7qc51NRfxGmfoqDvZ+Kv6lKv4NLKS/PEsNn+cefkzeKmIfniauOM4qB6nTTfuQJjKmCYO69Oh6hLidIOnTLFeZbtrjO6oKvMey12Shy6ngQBa5ViTvZtN3gCr75UX+4WX+QZUZqjKf5XiXhxyL/ecMyx5BExpb9o9oQiMaHNqMErUxqiHDQcose4WLNPlIXYSdCb2dmfhwIfco8vWA57mvqt17RXgwG7mS490p35kkcCHytamGLKTGCerA2BIGqoOgNgZtJaj6NNtWnPaezIQv6abSNP5OgJ7PpT7PxD7OxG+BZ7v3quyfT+MfJb4Lmb8jwtoi7wnLWoLNBVifJLzBiNooYTXwZCUAbcSomzHmzq4Qa4oDXQF6Ig/1OY7GbPRWGRsqk58AZepuNjmcT30SeppitMVH6jykyrGXWLYiy5Ijb8YIK97RRc/oio/uLNNMBYZln2E9YJoPpMEu03TItlWFnjNpoD+fugcmPQ2usyqPvlfErqf8HQH6lu+uC9x1tr0CG75bFH2CqMbH3ngpOxmyNg7v5BnGPE2fYVorcrw35b0Qes7EWEeGD4BJd43tqE6FBpNYm+c6lkZ6Im9L4K4zLfs0c45mSBH+cBNWfNASSjdmKBsxylZS5DvhI0cCpC7xvxNjFwKkJfF2pL5LQBoa8NA2zVKaxE45zhrP02BbS5TNGGkjAhsy45tRcDUwbkhT9EmyNs437kq9NY79UOCqyX1tqb8jRtts0+F89EaAnAJczykPa1P1BY7zmGmvMOxHsKVE1iUndvIkDQ4uIhRdFFz2PvnVDlv2WJYC11bku2qwPj/pqsuDXTF2LkRaytCVxNsFOGiT46oz7MfjhuKEuQSby+BKeFybHNemoNUQuOQmbYShVR9Jg09sZ6iGDBupcp3H8HaGb69MOht8R13m6yjw3jTeB1jOKnW7QLeWyboc1VKG1hM/vLZCywGGtcSwFEhrQXA1QF4PTxjSkDoIW/Zo1uKEIStCGy+ydzN4X/Q9cTCNX0vQNkBYS4BrCaohT93OUowlcC05thwE1RHCb9jI7+6RRQ9hCaNqwzRjluuusc05jq04vpUWoM25xI0YO2ebj/iOljRwNRsf/g8Pn4yVNkHfBgAAAABJRU5ErkJggg=="
                }, {
                    url: "depth/birds.mp4",
                    aspectRatio: 1.8972332015810276,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAANCAIAAADTzFK5AAAACXBIWXMAAAPoAAAD6AG1e1JrAAADn0lEQVQokR2O21LiBgBA8xftQx/azm4709lOR0fXxVov9Qq4gpBwD4SQQGICgRDuhNwQNILKqqhcRV2x6LAC4s6+9Ns69vU8nHMAUr1P1Qd8c5BrjcTWSLoaZ2tf5M7z7vWL0Hjia325Mcid/RMuXLJqM3N2n6n2MhcPYnMotodCeyS0noXWiG+No6d9IFbt51qvVGoP5atnpTMOKqdRtZ4ot3Z4FU/k2eJlILNnw6h4uQkzaYSTwmpDbD4pnbFy9ZpUrsdCZ5xujIBMYyC8WkbZao9WTqOlJhJOG23OLbsHCadsGOWLiYHMrtHhBn1BNCE7gwk0rrAHdUo4Yvdq2Yue2B7kb17EzgjItQfy1TCi1j3h7DaM2cmoL6ls2WAQ9YMYte3BAtlicPfY6MGMsBcOciYv4aI5MrePcII3KvqzpWC+KjWfdm9eALEzzHdG6bPPhFgyuv3LBpMZp9dBqzPIWQIMGKCTJ02l9WghGM3fKxuQ1eynjTCih2zcYd2EkFY/S/Dl3EWv8Pkr8P/hs9wexI87dL4CBph1yGnGd5yhmGZ5hRD3pPo9wRc2bM5NF0JL+2hSMKO4bSeMJCQLwdqIaPywwZ93CzcjwBcvOEJpX6boTSh4Oq9zeJa3oVWTZclgMqF4vtUt3Q3wlHD0MC51h6W7QaX/7bj/LX3aNmOUm0lG9iqUfEjLlcL1EMBTRaML3XTAdpKxU2FCKM4sr7159w5moumTevpTHUvmYCYqVtuRvCqcNaXaTbk7DOXLZox0hWLs/gmWlDOf2qXeV8CfKRBpxbkTsvgwB03jafnHt2+sBJk6uWTVI0KQJv6cQViOLaooF0M5Ll4+ES6u1iAHzMTMGGn1B/GEIDXuSg9jAEsK7iC3oNOaUIzgpcWPW1q71eL36W2Qwe0EcWzJoNfaLMlKxQDb57WrtFI0eNCoWrl4+Xf/9jF5fB5S1MTR5UF3CIAYvaTVf1iY+wjDv09P//TrW1YtedjI/NqCHtp2h2gvx86vLuggw8La4sz8LMywi5ubcq2jNG8Puk8Hd/3UcRVPCVzpHNhGaRAnAgl+RafzUMwfU5NBWXEQpGZxDo1FKTHnIgPv//pgRj06yDA5Oz01Nwt6EFqU+Wo9V61ROQnlYpDP745kAAeTSh2elW4fD7tfytc9jWYGwpANCJxbX123mjcR+OfffpnQTIG4VwsZvv/hu4n3k0gkbMFQmKb8Gd6C4a4dyk4GYVb4DwApvCHHjSCMAAAAAElFTkSuQmCC"
                }, {
                    url: "depth/openai2.mp4",
                    aspectRatio: 1.3448275862068966,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAATCAIAAADqEDFSAAAACXBIWXMAAAAAAAAD6AF+hNEZAAAClUlEQVQ4jaVUz0sUYRjeS7eg6NDBCIkOdaiICjp08NRVivoDMuiQYhAtahbJ4iFdMCorMYiQoB8G7kKGXSLwanQV0myXYXZ2dr6Z7/d838x8uxPOZ+OmuxL18MLM4X2eed4f82Y4Y5FS5R8rXYcPnOzYd6Jj/5Hdew7u2nu28/ilCz2nui4fO3fx0OnuzjPdR89fGR6fGhkcvd1/d+Ra9n7vrbGe3rfjE5z7GhnOeRCGlmmODQ+MDmdzQwODff03rvbdu3ln8sHzfH760ZOZx1Ozo/kX14cmZt7MfZh9V3j1+uPLmc/Tz748ffht7v2Gku9n9EMI0WjESTTiBI04rtfrcRyvrHz/tLDg1Ow4jqMoVFGkVBQqFdZVWG8ESm3V8n2fNYNSRiklJAzDYrGYzWaXvi6FYUgp5RqMc8Z0tNBqCc65UiqO4yAIeNqYNvhDK81upiX+yBYhnqC1FufcdV1KqRCCUgoh1E0khLiuyxgTQiCECCE6HyEEIdwil0k5tm2LBAihUqlEKZVSAgDW1tYQQlJKy7I8z9M5hmGYpimEaO3L8zz9KUJIuVz2PE9KiRNwzoUQrutCCLWWZVmVSqVFjbouAACl1Pd9Qki1WtV1QQj1u5SyUqkAALQXCCFCqIUvXaNhGGm/PM/TWo7jrK6uEkKklK7rYow1X7tr60vnCSEwxrVaDWOsa2eM6R6LbeSddkITEEKGYaQW/h6Z7Vp6pqxpof9dC2NsmiYA4H+1/GRGjuPs4Iu3+Zk2tdIB6TsRRVE7TvMQm3u6uasQQkpp6WcpP57P5XKLi4tKqe1yGOFqtWrbtt5tAEBaQYb7fD04J5Qwn9m2PT8/XygWlpeXgzBgnG0k/I71g5ScpI2LwzYTfgHbbwyhHprt0wAAAABJRU5ErkJggg=="
                }, {
                    url: "depth/ios-unlock.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAAC1UlEQVQ4jX3QS0hUURgH8P85Z3Te13TGacTJR46ipuXYi5xKSzIVe9o4PmLUnlCUQZJUZAQpqIlGEGabHrQyI1plLVtFFKRBV2gVmava3DvjzNzHiaxAwvHw5+y+H9/3R2TJC4fDsizHYzFNVZeN/i/xaFSWpKWzkUgES6GFhQVN175+n5uZ/TwtitOiOCOKnxb/GVH8KIofFvN+dvbbjx+ari9v/YEkWe7p7va5PD67o9yettmetsGeWiKklgkpPkGotNsabPaDghAQhAM5OWP37qmqGg6H/7ckSeKcj4/fdwM11FYP235YD8LqBDEAJoAS6iNsCLhrNk+WlE54vbUG9ubdO67rsiwvY51s79gAQ02SazdJ20Mc1UjxwbIOJh9M5cTcAGMX2DVKB4zGp1brFeDO2BjnXPpX3F9LXrQ6W9pKkFTNXJVwVEAIpuWHHAUnnIXHUvJO2LPPp+R2Wd1nwG6APKO0DxgdGUlodfy2kqtYRiVzN9i8e83ZbRm+gKO43pwdcq1vTy06Zss9bXT3wvCW0TvA6OjoStY6GP1Y3egsHagKXd/WfKOi7ermpoBrY++W5sGK0K2tzQ93d06YV/0EHiTaKyzLqq61HA4Uw+Knnu1J2edK9g3XnD3uremrOtXiqTzg3tFfd+l2Xffr4l0SYxqlEwlvlGWd87ZAsAjWLchoyfQP1V445Nl1oeJ0oKhpp3P75fLW55sCXzIKIoBKCDfQF4n7kjnnoWBrIYRylp9H8otpgZ+tPcrW9BPHJExzhmROqQZohMbAODO8XHEvvbkx6EL6Xua9ifRXsM4Tg0YIJ+AEOiEKVsWRpZDcqHktT8+fYrbEfXG9/UhwGFRmyRzQAQ6oQAyIwhJHjuL0KrWZysXM6LCHP8mZ6rIMDQ0uZ0lSjPOepqZ5gDMWXSSU39VAhUmxZCmNTmWEKo/s8Ufe2P0y/tg/dTZrcGBgqfULjo9MR6PwTvMAAAAASUVORK5CYII="
                }, {
                    url: "depth/ios-control-centre-2.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAABiklEQVQ4jZ2TSU/CUBSF/ZH+DfYkagQ1OGwkylABKUjpYHCoRQGhFBAwGmpksJSVEKMLi3HiYd9rAQOsu2jP6m7ul3NO7l0YGggAACEcDAbDvz9d1+cDhBAAYLSyYARCCHV7vQuW3Xa5bDab3++75DhFUVRVNcIZsjRN43k+l+PDBL2+tZPkOL93v16vj8fjqUezvgrFIpcg1iI5N8EeYF7XxoYkSaPRyDQLQlQuFVb2yUXnkdMdWHbYV1eXOp2ORVblpuCNXwVijM+zh2G+CB5qz3wBYD6jIAjHFIH5fQxF9rrP6XRKFMXJZGKlr2KpRJL05rL9jIq2pFYkRjQbDUvda5qQ5xnPJr3rwAMYTTOhUFCW5VlGczcx0EaTfPKkk8QrGY6iKZY9Dx8eWmMBqOllPnWfJat31etMtiY+Momz+U2YZiGkCQJPiTFWeri/7RZrL55E5qnVtNiX3G6H6QBOx4Ohoyhzih8n3l5fEULmfM2lqurX59dHv68o7x995ffne/qMQ8Pf/gfsiq2xuQEkbgAAAABJRU5ErkJggg=="
                }, {
                    url: "depth/ipad-dock2.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAAD0klEQVQ4jaXQ209TBwDHcZ72siyGp+nCHJEwoQKVQqnALK4t9JzTC5cigrIwLq7oFEuhPRcOB8QyGSZzYrywdMZllNJyeioUKKWwzJGMeYGZsMGIgbZQSi+UcVntSrKcxQx3ed7vD/jkl28UTdNtrS0p6h7Z6E4+uVRgduZTLjG5Chq8gt4AT7eVo9vm9m6eMGxkdewkotvxxGYMEQQ+8cK3dso0wbNdfxwFcIrU0TQdRdP05RYiubGnYOSFuH9ZYloRm9wQ6QWMfoHez9MHeH1BPhXgfxlMv7ST1LiZgG0lYr76G+sXb2yWf+qVd4dTRShF9v5jMZQ6qeV30OgRkV6IXINIn9DozzX6BWQgl/JD1lW+xsesWE+sDabVBc61buDXtmuuBKo7PRe02yypmiL1e1Yr0Zyo1IsGI4BhDXpp+SGTX0j58sw+IbUCWZy51qUjiiXGGbekxq+oW1crgvKLAbkqICc8ipu/sUXwf34l1hvAgd28vjWQ9IMmH0B5gEE3NOQGRhZZ40+TTY9zKhfOlCzJix3VRc5K2XLNac9H1T75xx5Fy4sMHkqZXlmtRHOCsg+0RPKMXsDsBR64waEV0YhLMuZ4zz7Dm536sGO6NPNxEfdJUc5MCX+2HPylQrpYJXNVly3XnQ+lczCK+ttqaU5Q9YLWXSG1Clrc0IhLPOrIH38u/WaucHa20jYjzbYKmMMge1xybLIg+wdZzvQp/uxpYL5cvFBb9isrGaEe/Ls9opNOhCCLQzziyLcvyiafn5xeKJ2fKxubAgDj8TjdiSQjP8UsZA1D6XYJ5+FfYgn/x0rJKvPdBmrgVfvLRHMyfl/67YbYvlj4vaNwal469gjUWvmX9GzGbeabXczYO2kHv+Ac+jor3pB92PT+EQuQagPTH4rYkyXcOUbsBfNA357VQhBpV7Q1P2+eGn1a+JVNWKflZrVnxBMpB3AuQ8NjfS5Kvy3I7hFm3pMcuyc73l/IpcCsoWLuUGnuxAei+cNvy82Dhj2rCcOgbkPnKl3c2FZQ3NBx58n4Lef1cwZ2KjSnxfVXr7Uj3Qby2cTkT49szwyf2e72fFd7fUl1Hu5s0lL3V5hxdf2mnj1L09b2TkUVt+Fq9P6MfdEZB+PEh/bnx0QD+17PZL3FZxwQx8ac5CRUZaYqs1gom1GflqpOOtqcFHuWk6AUpLW/8RrHZh9+ae3u7rqcTk27BlarEBTDmnAEQVQojGAYjhMqFIcxHEExFYw2qmCVSo0iKAzDiFqNoDiMYgplY9fNrq2trXA4HBUKhSKRCP3/Fg6HQ6HQn+3mZS3iXXrDAAAAAElFTkSuQmCC"
                }, {
                    url: "depth/ipad-dock-no-blur.mp4",
                    aspectRatio: 1.7777777777777777,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAAAAAAD6AF+hNEZAAADg0lEQVQ4jXXU/1PSdxwH8P6RbbfrvMrlVsyggATki58PqEyFuWNCEvLNiIrEmoHbJXartrnrum5dza1bzkgQnc212245Wwmfj8htu2x+QybG5wsiSPDhA3yIXTlvrS/ve/78uNfr9X6/X5uIJyedTpMkSaZTMeRBDI0kcDSOIwkcWYtGnuTBv8EfJ4pFEATBIstkJkMQmXWBIIhN61AmQyYTcWO7TdhiERvbqwztQl27QHucp7Htbbaz9nWyVJ0slZ3dbGc2dzZq20xms9xoOfNpT7H4KJVK/c/KU4XQ3F9s7Yma7yKyG4v1I4u1Q3+LrqOcq4k9XxH0L0n611nGFXLXhWzpJznd5fTnHvKzWymNyZLNEOln6spTVDg4KzQ5qj2IfDgoG1qUDi6Jnaiwb5X3TZJzNcntS9LPprbak6/ZYqoz8WYH2WjH1Ibj+RyR3sD+q2tpYbbS2AW4Vmrd4Vr3ktiFVDkxfn+U17/Kd0e5PfGyw8nXP4gzPsKs51c1PfH6k6EmrZXKZ1IvsmZ4BofAGZcMoGIXInZhVddxwQAu8uAST5hhwbZpYhVHVo50xc2OVd3ZqOL0rEp/lMq9xOLquyuda+IBTOzCQTcGeFBgOCK4GdzlmqZpFuuVkUMa1NSCa41RU8eKsmNBpW2j8pkX9jhToe/mOteAAQwcRMDhZcn3YWB0jgn7as7Bjbzf3xf9oRBNK6vn98vDBjXatC+oUlsp6iUWx9jFG0yAQxFwZKl6NCj9ee6dqemm21MNgp+qyn6QMMbqWF45N6AQ3VNLg+8CM0plG1XIbDyJZ+Z14CR/BKu+GZKOhxom5+W+Pxs8t/lgP/2VXvbWb3lvDAneGhWX35IyJ+S8gIQBNSkshQKZ2hjYU9b8rMDcWTe+LB+7J702xrdc2QP0vL3ZQX/1NGf7F8ztvZzSiwDtmog2CNBuyCp+Fe78RfHe4cKj5yyqUFi4Pw0e+/Do/Tyos6nMF89b7yo5H7eA6j5b1wnTpXMXfK5e36XuH4+dgtQG96lDlzuMUF1ta6H4nEVms1EUrT9g2q02by5hbykV0nbISkvAN0sEzLKanWUyzu79lXsPchh6NusgvVzHYejLt2laW63FYvHhw6f+0DqXzeXCoZD3zngg4J+aguFJnz8ATwb80CTs9/t8sNcH3YHgCRi6C8MTEOz1Qr/FYiuPF8LGRf4DMgvMtGBVN2UAAAAASUVORK5CYII="
                }]
            };
            var v = i(3329);

            function j(e) {
                let {
                    author: t,
                    ...i
                } = e, s = a.useMemo(() => (0, C.lV)(i.children), [i.children]);
                return (0, n.jsx)(d.x, {
                    "data-heading": !0,
                    as: "h3",
                    id: s,
                    ...i,
                    "data-author": t,
                    size: 16,
                    lineHeight: 20,
                    weight: 500,
                    css: {
                        mt: 24
                    }
                })
            }

            function k(e) {
                let {
                    children: t,
                    author: i,
                    ...a
                } = e;
                return (0, n.jsx)(d.x, {
                    as: "p",
                    size: 16,
                    ...a,
                    "data-author": i,
                    children: t
                })
            }

            function E(e) {
                let {
                    children: t
                } = e;
                return (0, n.jsx)(d.x, {
                    as: "code",
                    size: "12",
                    weight: "400",
                    color: "gray11",
                    css: {
                        d: "inline-block",
                        bc: "$gray3",
                        px: 4,
                        height: 20,
                        lineHeight: "20px",
                        borderRadius: 4,
                        fontFamily: "$mono",
                        color: "inherit"
                    },
                    children: t
                })
            }

            function B(e) {
                let {
                    children: t,
                    href: i
                } = e;
                return (0, n.jsx)(d.x, {
                    as: "a",
                    href: i,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    css: {
                        fontSize: "inherit",
                        d: "inline-block",
                        fontFamily: "inherit",
                        color: "inherit",
                        textDecoration: "underline",
                        textDecorationColor: "$gray11",
                        textDecorationThickness: 1,
                        textUnderlineOffset: 3,
                        br: 3,
                        focus: !0
                    },
                    children: t
                })
            }

            function M(e) {
                let {
                    style: t,
                    bleed: i,
                    videoStyle: a,
                    ...s
                } = e;
                return (0, n.jsx)(z, {
                    style: t,
                    as: m.E.div,
                    bleed: i,
                    children: (0, n.jsx)("video", {
                        playsInline: !0,
                        muted: !0,
                        loop: !0,
                        autoPlay: !0,
                        controls: !1,
                        ...s,
                        style: a
                    })
                })
            }

            function V(e) {
                let {
                    src: t,
                    bleed: i,
                    ...s
                } = e, r = (0, b.s)(), o = a.useRef(), l = (0, f.Y)(o), [c] = t.split("/"), {
                    aspectRatio: d,
                    placeholder: h
                } = s.aspectRatio && s.placeholder ? s : y[c].find(e => e.url === t) || {};
                return (0, n.jsxs)(z, {
                    ref: o,
                    bleed: i,
                    style: {
                        aspectRatio: String(d)
                    },
                    children: [(0, n.jsx)(A.x, {
                        css: {
                            size: "100%",
                            overflow: "hidden",
                            position: "absolute",
                            borderRadius: "inherit"
                        },
                        children: (0, n.jsx)(w.x, {
                            scale: 1,
                            src: h
                        })
                    }), l ? (0, n.jsx)("video","img", {
                        playsInline: !0,
                        loop: !0,
                        muted: !0,
                        autoPlay: !0,
                        src: r ? (0, C.jj)(t) : null,
                        controls: !1
                    }) : null]
                })
            }

            function R(e) {
                let {
                    css: t,
                    link: i,
                    theme: a,
                    bleed: s,
                    ...r
                } = e, c = {
                    as: i ? "a" : "div",
                    variant: i ? "link" : "img",
                    ...i && {
                        href: i.href,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, h = (0, n.jsx)(o(), {
                    src: "",
                    alt: "",
                    placeholder: "blur",
                    ...r
                });
                return (0, n.jsx)(z, {
                    bleed: s,
                    css: t,
                    ...c,
                    children: i ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(A.x, {
                            css: {
                                overflow: "hidden",
                                borderRadius: "inherit"
                            },
                            children: h
                        }), (0, n.jsxs)(l.k, {
                            align: "center",
                            className: a,
                            gap: 1,
                            css: {
                                p: 8,
                                mt: 4,
                                img: {
                                    size: 16
                                },
                                svg: {
                                    marginLeft: "auto",
                                    transform: "rotate(-45deg)",
                                    color: "$gray12"
                                }
                            },
                            children: [(0, n.jsx)(o(), {
                                "data-favicon": !0,
                                width: "16",
                                height: "16",
                                alt: "Favicon of link",
                                src: "https://www.google.com/s2/favicons?sz=64&domain=" + i.href
                            }), (0, n.jsx)(d.x, {
                                lineHeight: 16,
                                css: {
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    maxWidth: 400
                                },
                                children: i.title
                            }), (0, n.jsx)(v.LZ, {
                                "aria-hidden": !0
                            })]
                        })]
                    }) : h
                })
            }
            let z = a.forwardRef(function(e, t) {
                    let {
                        children: i,
                        variant: s,
                        bleed: r,
                        ...o
                    } = e, [l, c] = a.useState(!1), d = I({
                        variant: s,
                        bleed: r
                    }), h = (0, x.q)(1, {
                        damping: 27,
                        stiffness: 350,
                        mass: .7
                    }), g = (0, x.q)(0, {
                        damping: 35,
                        stiffness: 350,
                        mass: .7
                    });
                    return r ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(D, {
                            as: m.E.div,
                            style: {
                                opacity: g
                            }
                        }), (0, n.jsxs)(A.x, {
                            ref: t,
                            as: m.E.div,
                            className: d,
                            css: {
                                "--max-width": "960px",
                                "@media (max-width: 960px)": {
                                    width: "auto",
                                    left: "unset",
                                    right: "unset",
                                    transform: "unset !important",
                                    maxWidth: "unset"
                                }
                            },
                            style: {
                                overflow: "visible",
                                x: "-50%",
                                scale: h,
                                zIndex: l ? 16 : "unset",
                                ...o.style
                            },
                            children: [i, (0, n.jsx)(A.x, {
                                as: m.E.div,
                                style: {
                                    opacity: g
                                },
                                css: {
                                    size: "100%",
                                    position: "absolute",
                                    borderRadius: "inherit",
                                    inset: 0,
                                    boxShadow: "0px 1px 1px 0px rgba(0, 0, 0, 0.02), 0px 16px 24px -4px rgba(0, 0, 0, 0.04), 0px 32px 48px -8px rgba(0, 0, 0, 0.06)"
                                }
                            }), (0, n.jsx)(O, {
                                "aria-label": "Drag or hold Enter to zoom in",
                                initial: {
                                    y: "-50%"
                                },
                                style: {
                                    scaleY: h
                                },
                                onPanStart: () => {
                                    c(!0)
                                },
                                onKeyDown: e => {
                                    if (" " === e.key || "Enter" === e.key) {
                                        let e = h.get() + .01;
                                        e = (0, C.wY)(e, [1, 1.5], .04), h.set(e), console.log(e)
                                    }
                                },
                                onKeyUp: e => {
                                    (" " === e.key || "Enter" === e.key) && (h.set(1), g.set(0))
                                },
                                onPan: (e, t) => {
                                    if (C.x2.start(), !t.delta.x) return;
                                    let i = 1 + .001 * t.offset.x;
                                    i = (0, C.wY)(i, [1, 1.5], .04), h.set(i);
                                    let n = g.get() + t.delta.x / 25;
                                    g.set(n)
                                },
                                onPanEnd: () => {
                                    C.x2.end(), h.set(1), g.set(0), h.on("animationComplete", () => {
                                        c(!1), h.clearListeners()
                                    })
                                }
                            })]
                        })]
                    }) : (0, n.jsx)(A.x, {
                        ref: t,
                        className: d,
                        ...o,
                        children: i
                    })
                }),
                I = (0, g.iv)({
                    size: "100%",
                    height: "auto",
                    position: "relative",
                    background: "$gray1",
                    br: 12,
                    my: 12,
                    boxShadow: "0 0 0 1px $colors$gray4",
                    overflow: "hidden",
                    "img:not([data-favicon]), video": {
                        width: "100%",
                        objectFit: "contain",
                        height: "auto",
                        borderRadius: "inherit",
                        display: "block"
                    },
                    video: {
                        position: "relative"
                    },
                    "&:after": {
                        content: "",
                        borderRadius: "inherit",
                        size: "100%",
                        height: "100%",
                        inset: 0,
                        position: "absolute",
                        display: "none",
                        pointerEvents: "none"
                    },
                    ".dark &": {
                        boxShadow: "none",
                        "&:after": {
                            display: "block",
                            boxShadow: "inset 0 0 0 1px hsla(0,0%,100%,.2)"
                        }
                    },
                    variants: {
                        variant: {
                            link: {
                                focus: !0,
                                padding: 6,
                                background: "$lowContrast",
                                "&:hover": {
                                    "img:not([data-favicon])": {
                                        transform: "scale(1.02)"
                                    }
                                },
                                ".dark &": {
                                    background: "$gray2"
                                },
                                "img:not([data-favicon])": {
                                    br: 12,
                                    transition: "transform 0.2s ease-out"
                                }
                            }
                        },
                        bleed: {
                            true: {
                                bleed: !0
                            }
                        }
                    }
                });

            function S(e) {
                return (0, n.jsx)(l.k, {
                    direction: "column",
                    gap: 1,
                    ...e,
                    className: L()
                })
            }
            let L = (0, g.iv)({
                    ul: {
                        li: {
                            pl: 16,
                            lineHeight: "28px",
                            position: "relative",
                            "&::before": {
                                content: "",
                                size: 4,
                                br: "$round",
                                border: "1px solid $gray9",
                                position: "absolute",
                                top: 12,
                                left: 4
                            }
                        }
                    }
                }),
                Q = a.forwardRef(function(e, t) {
                    let {
                        children: i,
                        css: a,
                        theme: s,
                        ...r
                    } = e;
                    return (0, n.jsx)(l.k, {
                        ref: t,
                        align: "center",
                        justify: "center",
                        css: {
                            minHeight: 240,
                            br: 8,
                            p: 32,
                            my: 12,
                            background: "#FFF",
                            border: "1px solid $gray4",
                            position: "relative",
                            ".dark &": {
                                background: "$gray2"
                            },
                            ..."dark" === s && {
                                background: "$gray2"
                            },
                            ...a
                        },
                        ...r,
                        "data-expanded": !1,
                        children: i
                    })
                }),
                U = (0, g.zo)("blockquote", {
                    lineHeight: "20px",
                    fontStyle: "italic",
                    fontFamily: "$serif",
                    pl: 8,
                    position: "relative",
                    borderLeft: "2px solid $gray12"
                }),
                O = (0, g.zo)(m.E.button, {
                    all: "unset",
                    position: "absolute",
                    width: "4px",
                    height: "48px",
                    borderRadius: "9999px",
                    background: "$gray8",
                    right: "-24px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "grab",
                    focus: !0,
                    transition: "background 200ms ease-out",
                    "&:hover": {
                        background: "$gray9"
                    },
                    "&:active": {
                        cursor: "grabbing",
                        background: "$gray10"
                    },
                    "&:after": {
                        content: '""',
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        padding: "16px 8px",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                    },
                    "@media (max-width: 800px)": {
                        display: "none"
                    }
                }),
                D = (0, g.zo)("div", {
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                    inset: 0,
                    outline: "1px solid red",
                    pointerEvents: "none",
                    backdropFilter: "blur(20px)",
                    zIndex: 15,
                    ":global(.dark) &": {
                        background: "transparent"
                    }
                });
            var T = {
                    src: "/_next/static/media/67.824d308e.jpg",
                    height: 5e3,
                    width: 4e3,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAACAgIDAQAAAAAAAAAAAAABAwACBCEGERJh/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABkRAAIDAQAAAAAAAAAAAAAAAAARAQIDIf/aAAwDAQACEQMRAD8Ahcl/Hl3FaYr2Jr2PS3Cvq2tgEaHyIiJTkIPaHdn/2Q==",
                    blurWidth: 6,
                    blurHeight: 8
                },
                H = {
                    src: "/_next/static/media/42.f58c62bd.jpg",
                    height: 3806,
                    width: 2854,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAACAQMFAQAAAAAAAAAAAAABAwAEERICBRQhMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAABBP/EABgRAAMBAQAAAAAAAAAAAAAAAAABIQIx/9oADAMBAAIRAxEAPwCaZwV7QhtE9iqt2rJ6TfFQtYAAe/eyYiJNp3gpQ//Z",
                    blurWidth: 6,
                    blurHeight: 8
                },
                F = {
                    src: "/_next/static/media/71.07b74e37.jpg",
                    height: 2048,
                    width: 1536,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAABBAIDAAAAAAAAAAAAAAACAAEDIQQREhNB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgT/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADETH/2gAMAwEAAhEDEQA/AKYpsM4iZsQwAC4tJ1UdVp/URFAyqDmRm597P//Z",
                    blurWidth: 6,
                    blurHeight: 8
                },
                X = {
                    src: "/_next/static/media/visual1.de5f5a31.png",
                    height: 1272,
                    width: 2160,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAHlBMVEX7+/v5+fn9/v309fX25t7b7+vUvLvD39vlv6rI09UcVp1rAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJElEQVR4nGNgZGSAIUYmKIOFjZOVGczgYGdlZgAJMjExMDICAAZiAFKU6tDqAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 5
                },
                W = {
                    src: "/_next/static/media/visual2.bfaa7c37.png",
                    height: 1272,
                    width: 2160,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAHlBMVEX19fX5+fn7+/v3+Pnu8fH27OjW0tPj7uzf6+nt3NUeG+z1AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKElEQVR4nCXIxw0AMAyAQHBJ2X/hyAqvEzgVYmZgDHqtf/qeTaAU6AMHsgBd8qRkgAAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                N = {
                    src: "/_next/static/media/visual3.1b9c696e.png",
                    height: 1272,
                    width: 2160,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAGFBMVEX6+vr29vbv8PDi7uz37enW3N3by8vv3tj4ZzmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJUlEQVR4nCXIwREAIAyEQLhE7b9jxwi/xZgIoLyB3mvIPlUjvwsEuwAzZMaQqwAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                Z = i(9408),
                P = {
                    src: "/_next/static/media/ios-steps.7d58d476.png",
                    height: 1080,
                    width: 1920,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAALVBMVEX09PTAv8Dw8fF1cnLExceOioutqqvp6+y4t7d4fIDJxsSdmZrs6Ofk6Obs5+fwIoeWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nB3Chw0AIBADsQvf6PuPi4Rsis3hQnpoaDip6NZNaC6FzGlf8QARiACqcZb1pAAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                G = {
                    src: "/_next/static/media/ios-steps-12.bb4d629a.png",
                    height: 1080,
                    width: 1920,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEXe3t7j4uKTkZXz8/PCwcOFg4OrqaqMi4+enZ+qoqHX19iQhIGGe3m1p6OvrrN2dnmVoKbNyMa4vMHJzM4Xszx7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nAXBhQEAIAzAsKITHP7/lQSeJz8kpmiQJYF8K7ojZFNiKTCs0rrwARl5AQygJnlDAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 5
                },
                Y = {
                    src: "/_next/static/media/ios-steps-34.87432284.png",
                    height: 1080,
                    width: 1920,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAHlBMVEX5+fn29vZ0c3Z/fHyzsrTX1tanqaq+vb7q6unv7u7u+r+qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nGNgYGHjZGNhYGBgZGZiZWJihDKYURjsLBxsLIwMAAnoAG+BI2C9AAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 5
                },
                J = {
                    src: "/_next/static/media/ios-search-entry.68cd454b.png",
                    height: 1080,
                    width: 1920,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJ1BMVEX5+fn29vVxb3CwsLKhn6LY2Ne/wcaqpKN6eXvt7e2kmJCSkZPEysiDAZFrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nDXGwREAIAgEsYUDEbX/eh0f5hUY6hJgsdPdwCrS58v6OaMl4wIM+ACV5ddJfAAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                q = {
                    src: "/_next/static/media/ios-blur.debe21ed.png",
                    height: 1620,
                    width: 2880,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAANlBMVEX4+fnLy8tOd4eMgoO1qqbf0svXwravs7b8+/r09fWFo6WZsr2PlpqKlp0YQlfm4t7i3+KItcNK/FMQAAAACXBIWXMAABCcAAAQnAEmzTo0AAAALklEQVR4nAXBiQHAMAgDsSOF2PRLuv+ylXDkmgV0Hppq6Lq0vwbfr8YwWE+cMj8WsQEKMRhNwwAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 5
                };

            function K() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Blurred Backdrops"
                    }), (0, n.jsxs)(k, {
                        children: ["It's fairly common in products and operating systems to dim the backdrop when launching an overlay", " ", (0, n.jsx)(en, {
                            step: "1",
                            children: "1"
                        }), ". This is another opportunity to add dimensionality to an interface by simulating depth of field that our eyes have naturally evolved to expect."]
                    }), (0, n.jsxs)(k, {
                        children: ["For instance, launching a context menu would feel fairly awkward without any de-emphasis on the iOS Home Screen layer ", (0, n.jsx)(en, {
                            step: "2",
                            children: "2"
                        }), ". It would also signal that the entire backdrop of apps are interactive, which in this case would not be correct—only the context menu is actionable, tapping the backdrop closes it."]
                    }), (0, n.jsx)(R, {
                        bleed: !0,
                        sizes: "50vw",
                        src: q
                    })]
                })
            }

            function $() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Choreographing Motion"
                    }), (0, n.jsx)(k, {
                        children: 'In my mind, choreography is deliberately orchestrating when something happens in a structured sequence. I think there are subtle parallels between "dirtying the frame" and motion choreography. In both cases, at a high level we are looking to add more layers to a narrative, akin to layering together multiple musical instruments for variety in sound. In the context of animation, our instruments are time and artificial delays to be leveraged in a way that feels true to motion found in nature—you rarely see all the leaves of a tree moving in a jarring concert all at once.'
                    }), (0, n.jsx)(k, {
                        children: "A production example of great motion choreography would be to observe the Home Screen swipe down gesture. A first pass at a recreation would probably be to implement a swipe down to trigger a keyframed animation."
                    }), (0, n.jsx)(V, {
                        bleed: !0,
                        src: "depth/ios-choreography3.mp4"
                    }), (0, n.jsx)(k, {
                        children: "However, if we deconstruct the interaction into 4 discrete states that happen over the gesture, we end up with something like this that reveals more nuance:"
                    }), (0, n.jsx)(R, {
                        bleed: !0,
                        alt: "In iPhone frames, 4 discrete states are displayed from swiping down on the iPhone Home Screen. First state is blurring the Home Screen layer, the second state reveals the Siri suggested apps as another layer, the third state transitions the Search entry button into an input, while partially revealing the keyboard. Finally, in the fourth state, the keyboard pops up and the interaction is complete.",
                        sizes: "50vw",
                        src: P
                    }), (0, n.jsxs)(k, {
                        children: ["Because the first row of apps on the Home Screen and Siri suggestions occupy the same space on the screen, the Home Screen layer needs to be adequately blurred ", (0, n.jsx)(en, {
                            step: "1",
                            children: "1"
                        }), " before the four Siri suggestions can be cleanly surfaced ", (0, n.jsx)(en, {
                            step: "2",
                            children: "2"
                        }), ". Linearly revealing said suggestions would create a visually odd layering situation, so the reveal is intentionally delayed here."]
                    }), (0, n.jsx)(R, {
                        bleed: !0,
                        alt: "Two of the first states are displayed in iPhone frames, illustrating that the Home Screen background layer needs to be adequately blurred before revealing Siri suggested apps.",
                        sizes: "50vw",
                        src: G
                    }), (0, n.jsxs)(k, {
                        children: ["The third state in the interaction transitions the Search entry point into an input ", (0, n.jsx)(en, {
                            step: "3",
                            children: "3"
                        }), ", while subtly revealing the keyboard without fully expanding it. I'm assuming the keyboard pop-up transition is delayed to not cognitively compete with the Siri suggestions which the design could be trying to nudge you towards."]
                    }), (0, n.jsxs)(k, {
                        children: ["Because you are swiping down, it also makes sense to show immediate feedback near the top of the screen where the gesture is likely originating from. On gesture end, the animation reaches its final state and satisfyingly expands the keyboard ", (0, n.jsx)(en, {
                            step: "4",
                            children: "4"
                        }), " in coordination with releasing your finger touch."]
                    }), (0, n.jsx)(R, {
                        bleed: !0,
                        alt: "Third and fourth states are displayed in iPhone frames, illustrating that the keyboard does not pop up fully before completely revealing the Siri suggested apps.",
                        sizes: "50vw",
                        src: Y
                    }), (0, n.jsx)(k, {
                        children: "Now, the same overlay can instead of swiping also be launched by tapping the Search button at the footer of the Home Screen:"
                    }), (0, n.jsx)(V, {
                        bleed: !0,
                        src: "depth/ios-search-entry.mp4"
                    }), (0, n.jsxs)(k, {
                        children: [" ", "Interestingly, in this case, the choreography is reversed—the Search entry point transitions into an input immediately ", (0, n.jsx)(en, {
                            step: "1",
                            children: "1"
                        }), ", and with a very slight delay the Siri suggested apps are revealed", " ", (0, n.jsx)(en, {
                            step: "2",
                            children: "2"
                        }), " thereafter. Again, it makes sense to prioritise transitioning near the trigger location (Search entry button) to promptly communicate that the interface understood you."]
                    }), (0, n.jsx)(R, {
                        bleed: !0,
                        alt: "Two states are displayed in iPhone frames, illustrating that when opening the Search from its entry button, the entry button transitions first and thereafter the Siri suggested apps are revealed.",
                        sizes: "50vw",
                        src: J
                    })]
                })
            }

            function _() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(k, {
                        children: "One of the most challenging fundamental pillars in visual media is composition. How do you distill a three-dimensional world into a two-dimensional (still) frame, while conveying story and depth? A favorite technique of mine to do so and also create visual interest is to composite the scene with layered objects."
                    }), (0, n.jsx)(k, {
                        children: 'In filmmaking, this is generally referred to as "dirtying the frame" with foreground elements such as props or unconventional framing—usually the most obvious, pristine head-on shot would not subtly advance the story or be as visually compelling.'
                    }), (0, n.jsx)(k, {
                        children: "For example, the composition below produces a sense of unease by suggesting that the subject is being observed from behind another object. Without the foreground obstruction, I would not draw this assumption and this single frame would carry less emotion and information."
                    }), (0, n.jsx)(R, {
                        bleed: !0,
                        alt: "Person laying on bed with hands behind their head, the photo has a vignette on the edges, suggesting that it was captured from behind an object, say a closet.",
                        sizes: "50vw",
                        src: Z.Z
                    }), (0, n.jsxs)(k, {
                        children: ["We can also shoot through windows for novel visual effects ", (0, n.jsx)(en, {
                            step: "1",
                            children: "1"
                        }), ", obscure the frame with out-of-focus foreground objects ", (0, n.jsx)(en, {
                            step: "2",
                            children: "2"
                        }), ", or even center a subject and provide more context using the surrounding environment ", (0, n.jsx)(en, {
                            step: "3",
                            children: "3"
                        }), "."]
                    }), (0, n.jsxs)(l.k, {
                        gap: "2",
                        css: {
                            bleed: !0,
                            "--max-width": "960px",
                            "@media (max-width: 960px)": {
                                px: 16,
                                alignItems: "stretch",
                                justifyContent: "flex-start",
                                overflow: "auto",
                                gap: 12,
                                scrollSnapType: "x mandatory",
                                paddingRight: 32,
                                scrollbarWidth: "none !important",
                                "> *": {
                                    minWidth: "100%",
                                    scrollSnapAlign: "center"
                                }
                            }
                        },
                        align: "center",
                        justify: "center",
                        children: [(0, n.jsx)(ea, {
                            alt: "An industrial interior features blue street signs in Japanese, captured from the street through a window, creating orange lens flares reflecting from the lights.",
                            step: 1,
                            src: T
                        }), (0, n.jsx)(ea, {
                            alt: "Shot of a road bicycle next to a lake with lots of leaves around it. The foreground is also dirtied with out-of-focus tree leaves.",
                            step: 2,
                            src: H
                        }), (0, n.jsx)(ea, {
                            alt: "Side angle of a black bunny inside a cage, the cage bounds are out-of-focus on the foreground.",
                            step: 3,
                            src: F
                        })]
                    }), (0, n.jsx)(k, {
                        children: "In software design, we can similarly enhance a composition by introducing ambient foreground and background objects. Let's observe this visual I was struggling to put together for one of our marketing pages at Vercel:"
                    }), (0, n.jsx)(R, {
                        bleed: !0,
                        sizes: "50vw",
                        src: X
                    }), (0, n.jsx)(k, {
                        children: "The design fell flat in one of the first iterations because there is no depth to the browser frame or the overlaying surfaces—they are placed as a seemingly sloppy afterthought."
                    }), (0, n.jsx)(k, {
                        children: "A trivial change we can make to introduce depth is to blur out the inner background to visually lower it on the Z-axis, and fade out the bottom edge of the container to make the boundaries feel infinite and less clearly defined:"
                    }), (0, n.jsx)(R, {
                        bleed: !0,
                        sizes: "50vw",
                        src: W
                    }), (0, n.jsx)(k, {
                        children: "We can further emphasise the layered nature of our design with additional offset browser frames and out of focus objects. We're also not just adding gimmicky decorations around the focal point—but deliberately making use of the primary subjects (browser frame and bubble surfaces) to communicate an abundance of Preview Deployments on the Vercel platform."
                    }), (0, n.jsx)(R, {
                        bleed: !0,
                        sizes: "50vw",
                        src: N
                    })]
                })
            }

            function ee() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Staggering Motion"
                    }), (0, n.jsx)(k, {
                        children: "A school of fish swimming in the ocean produce mesmerising effects because they have very slight differences in their movement and timing, but visually look indistinguishable."
                    }), (0, n.jsx)(V, {
                        bleed: !0,
                        src: "depth/fish.mp4"
                    }), (0, n.jsx)(k, {
                        children: "Further observing how a flock of birds take flight it is apparent that nature in general does not always move in perfect synchrony."
                    }), (0, n.jsx)(V, {
                        bleed: !0,
                        src: "depth/birds.mp4"
                    }), (0, n.jsx)(k, {
                        children: "Taking inspiration from nature for interfaces, we can sometimes stagger the behavior of sibling items that look similar. For example, OpenAI staggers the fade in of loaded content in a grid layout. The interface does not feel slower as a result. Instead, there's more depth to the motion because elements don't just jarringly appear all at once—leaving the user to question whether the page scrolled and how many new items were updated on the screen."
                    }), (0, n.jsx)(V, {
                        bleed: !0,
                        src: "depth/openai2.mp4"
                    }), (0, n.jsx)(k, {
                        children: 'Observing the unlock interaction on the iPhone we can notice that the Home Screen apps are also staggered in their translation. Staggering here amplifies the unlock gesture by making a primitive swipe feel three-dimensional, exaggerated, and as a result—satisfying to perform. The Home Screen is also the "living room" on iOS and likely the first point of contact after setting up the device—a great moment to especially dial the novelty of animations up a notch.'
                    }), (0, n.jsx)(V, {
                        bleed: !0,
                        src: "depth/ios-unlock.mp4"
                    }), (0, n.jsxs)(k, {
                        children: ["The iOS Control Centre offers organic rubber banding feedback by making each row of items respond with a slightly staggered spring configuration.", " "]
                    }), (0, n.jsx)(V, {
                        bleed: !0,
                        src: "depth/ios-control-centre-2.mp4"
                    }), (0, n.jsx)(k, {
                        children: "We can also animate text with staggering motion to create a satisfying hover effect:"
                    }), (0, n.jsx)(M, {
                        bleed: !0,
                        src: (0, C.jj)("staggered-text.mp4")
                    })]
                })
            }

            function et() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Indicating Affordance"
                    }), (0, n.jsx)(k, {
                        children: "A surface that iPadOS takes special care of animating is the Dock. For example, when swiping right on the Home Screen, a full screen overlay appears as the Dock slides out of view."
                    }), (0, n.jsx)(k, {
                        children: "The Dock not being blurred along with the Home Screen and specifically sliding off-screen while maintaining its opacity communicates that it retains interactivity and can be brought back with a swipe gesture."
                    }), (0, n.jsx)(V, {
                        bleed: !0,
                        src: "depth/ipad-dock2.mp4"
                    }), (0, n.jsx)(k, {
                        children: "Apple is subtly communicating depth of the interface through motion and reinforcing the metaphor that the interface is composed of stacked layers. Now, it does feel like they could have just kept the Dock in place to avoid sliding—but because it's layered above the Today View sidebar, having it move out of the way is likely to respect your intent to interact with the surface you swiped for."
                    }), (0, n.jsx)(k, {
                        children: "Now, we can verify that the Dock does not have a sliding animation because it's simply cute that way—the Dock exhibits no properties of a separate layer while revealing the Control Centre which is also a full-screen overlay like the sidebar. Instead, it is blurred along with the Home Screen and the Home Bar is surfaced as a layer above to indicate dismissability."
                    }), (0, n.jsx)(V, {
                        bleed: !0,
                        src: "depth/ipad-dock-no-blur.mp4"
                    })]
                })
            }

            function ei() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Acknowledgments"
                    }), (0, n.jsxs)(k, {
                        children: ["Thanks to ", (0, n.jsx)(B, {
                            href: "https://twitter.com/pacocoursey",
                            children: "Paco"
                        }), " and", " ", (0, n.jsx)(B, {
                            href: "https://twitter.com/glennui",
                            children: "Glenn"
                        }), " for reading early drafts, providing insights, feedback, and screen recordings."]
                    }), (0, n.jsx)(k, {
                        children: "No artificial intelligence was used to generate content for this essay."
                    })]
                })
            }
            let en = (0, g.zo)("span", {
                center: !0,
                display: "inline-flex",
                mx: 1,
                size: 20,
                background: "red",
                fontSize: 14,
                fontWeight: 500,
                br: "$round",
                color: "white",
                variants: {
                    step: {
                        1: {
                            background: "#369EFF"
                        },
                        2: {
                            background: "#FF9447"
                        },
                        3: {
                            background: "#25D0AB"
                        },
                        4: {
                            background: "#FF6369"
                        }
                    }
                }
            });

            function ea(e) {
                let {
                    step: t,
                    ...i
                } = e;
                return (0, n.jsxs)(A.x, {
                    css: {
                        display: "grid",
                        position: "relative",
                        size: "100%",
                        img: {
                            width: "100% !important",
                            objectFit: "cover !important",
                            height: "450px !important"
                        }
                    },
                    children: [(0, n.jsx)(R, {
                        sizes: "50vw",
                        ...i
                    }), (0, n.jsx)(en, {
                        step: t,
                        css: {
                            position: "absolute",
                            top: 28,
                            left: 16
                        },
                        children: t
                    })]
                })
            }
            let es = {
                duration: .35,
                easing: "easeInOut",
                delay: .35
            };

            function er(e) {
                return {
                    filter: e ? "blur(4px)" : "blur(0px)",
                    willChange: "filter",
                    opacity: e ? .3 : 1,
                    transition: {
                        ...es,
                        delay: e ? 0 : es.delay
                    }
                }
            }
            let eo = a.createContext();

            function eA(e) {
                let {
                    children: t,
                    hide: i
                } = e, {
                    open: s,
                    setOpen: r
                } = a.useContext(eo);
                return (0, n.jsx)(A.x, {
                    as: m.E.button,
                    tabIndex: i ? -1 : 0,
                    "data-active": s === t,
                    "aria-label": "Toggle inline definition for ".concat(t),
                    css: {
                        position: "relative",
                        fontSize: "inherit",
                        padding: 0,
                        fontStyle: "italic",
                        fontFamily: "$serif",
                        cursor: "pointer",
                        br: 3,
                        color: "#171717",
                        outline: 0,
                        "&:focus-visible": {
                            "&:after": {
                                boxShadow: "0 0 0 2px $colors$focus"
                            }
                        },
                        '&:hover, &[data-active="true"]': {
                            "&:after": {
                                opacity: 1
                            }
                        },
                        "&:after": {
                            content: "",
                            position: "absolute",
                            background: "#fff9a8",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            padding: "12px 26px",
                            size: "100%",
                            zIndex: -1
                        }
                    },
                    animate: er(i),
                    onClick: () => {
                        s ? r(null) : r(t)
                    },
                    children: t
                })
            }
            let el = Object.assign(function(e) {
                let {
                    children: t
                } = e, i = function(e) {
                    let t = a.Children.toArray(e).flatMap(e => "string" == typeof e ? e : e.props.children || []);
                    return t.join("")
                }(t), [s, r] = a.useState(null), [o, l] = a.useState(null), [c, d] = a.useState([]), [h, g] = a.useState(!1);
                return a.useEffect(() => {
                    if (s) {
                        g(!0);
                        let e = i.slice(0, i.indexOf(s));
                        l(e + s);
                        let n = a.Children.toArray(t).find(e => {
                            var t;
                            return (null == e ? void 0 : null === (t = e.props) || void 0 === t ? void 0 : t.children) === s
                        });
                        if (n) {
                            let e = n.props.label,
                                t = e.split("");
                            d(t)
                        }
                        return
                    }
                }, [s]), (0, n.jsx)(eo.Provider, {
                    value: {
                        open: s,
                        setOpen: r
                    },
                    children: (0, n.jsxs)(k, {
                        as: "div",
                        css: {
                            position: "relative",
                            width: "100%"
                        },
                        children: [(0, n.jsxs)(A.x, {
                            css: {
                                position: "absolute",
                                width: "100%",
                                left: 0,
                                top: 0,
                                zIndex: 5,
                                pointerEvents: "none"
                            },
                            children: [(0, n.jsxs)("span", {
                                style: {
                                    opacity: 0
                                },
                                children: [o, " "]
                            }), (0, n.jsx)(m.E.span, {
                                animate: {
                                    opacity: s ? 1 : 0
                                },
                                transition: {
                                    ...es,
                                    delay: 0
                                },
                                onAnimationStart: () => {
                                    g(!0)
                                },
                                onAnimationComplete: e => {
                                    let {
                                        opacity: t
                                    } = e;
                                    0 === t && g(!1)
                                },
                                children: (s || h) && c.map((e, t) => (0, n.jsx)("span", {
                                    className: "letter",
                                    style: {
                                        animationDelay: "".concat(.02 * t, "s")
                                    },
                                    children: e
                                }, e + t))
                            })]
                        }), a.Children.toArray(t).map((e, t) => {
                            if ("string" == typeof e) {
                                var i;
                                let a = s;
                                return (null === (i = e.props) || void 0 === i ? void 0 : i.children) && (a = s && s !== e.props.children), s && (a = !0), (0, n.jsx)(m.E.span, {
                                    animate: er(a),
                                    children: e
                                }, t)
                            }
                            let r = s && e.props.children !== s;
                            return e.type === eA ? a.cloneElement(e, {
                                ...e.props,
                                hide: r
                            }) : (0, n.jsx)(m.E.span, {
                                animate: er(r),
                                children: e
                            }, t)
                        })]
                    })
                })
            }, {
                Word: eA
            });
            var ec = {
                    src: "/_next/static/media/bitmap.860d25bc.png",
                    height: 1632,
                    width: 2878,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAOVBMVEUwLCU5KgsoIBBBPTZVV1ZRSjogIyZKPiYbGRBJQzlDLxo2MShmWj9hYmIoISEuHhRcQiKIfGR3enxE9O0PAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVR4nAXBCQIAEAgAwUVUrvD/x5pBljwnKTpklXI6dyrVe4CmmN4aZpbr2HwbzQE39mkjCAAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                ed = {
                    src: "/_next/static/media/bitmap-grid.a5ef05f0.png",
                    height: 1080,
                    width: 1080,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEXr7e28tqqYkI+ZYFHh4eCnnYj09faRe2+hlYz6+/2GYVywrKufiYF3W0eBbGTFwritqqXOx7tsRiNxaVSQh4VyTULX1tablJSempRhUUWCc3KcoJe3sJyCfGfx4cdsQmQpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQklEQVR4nAXBhQHAMAwDMBeTlGFM/585CbAbtF4iuqMa8prQynkEYxiwFheVHZG/jrt58HynOCVIY2Rxj0ARsVfV/2T/AtC4KarvAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                },
                eh = {
                    src: "/_next/static/media/home.acf98359.png",
                    height: 940,
                    width: 1488,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAARVBMVEXTz8nLxcGThHi4s6zk4d+Be3evpZnX1dPNy8VYUUyZkITGvLCqm4anoJLQ0MpxZ2C4wsqPeWO0t7p9hYfLqYO6rZ7pyZer11wLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nAXBhwEAIAgDsKIoiHv+f6oJmkLG0gZhlh2iB3nKJUPRk5vnlocUorlq9QMfUwF2LjV8aAAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                eg = {
                    src: "/_next/static/media/home2.5fd4d86c.png",
                    height: 1752,
                    width: 1592,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAS1BMVEV4XE1DKyXFxMSRj43Pz9Di4eGtra7Ny8pbSUC2trZhUEh0UD7X2NmcnZqVinxGOznFxcfAwMJ/bV1bOSuBdWqjo6V3UEaMd2q1p5YTQaAuAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAO0lEQVR4nAXBBwLAIAgAsRNFcHe3/39pEzwELip4aON1/Djb/CbL6wNgRUTNSMWS9o5l2dM90BLjlvMPPNoB3iQJ/X8AAAAASUVORK5CYII=",
                    blurWidth: 7,
                    blurHeight: 8
                },
                eu = {
                    src: "/_next/static/media/amo.15d5c4e3.gif",
                    height: 110,
                    width: 400,
                    blurWidth: 0,
                    blurHeight: 0
                },
                ep = {
                    src: "/_next/static/media/rm.fd3c11b6.png",
                    height: 1942,
                    width: 3192,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEXPsKFjYmCMhYH16uJRTUtoZWOqpJ/r4dl/eXael5GUjoljXlq6sar108ab9Vbd08ynWIXskXdeTq36xbf20hgTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVR4nBXBhxEAIAgEsBeQYi/77+qZ4No0ZjMs96AoiiMtqohjU3JNOWOg43sdQQEXDZLYYwAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                em = {
                    src: "/_next/static/media/rm-purple.a209d51f.png",
                    height: 1272,
                    width: 2676,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEVJA713R8J7UL9nML6DU8ReIr2ObMR2RMJ6jcrrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nGNggAFmNkZGFhZ2VgYmNkYmZiZGVrgMAAP3ADa6L/cmAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 4
                },
                ef = {
                    src: "/_next/static/media/rm-green.17511e61.png",
                    height: 1458,
                    width: 2696,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAANlBMVEXs39v23eNr8V2h5ZK336bh3NDV4MTG5raz6KO75qvm0tXazsqX6YepxJqXvIqQpYVynGeT6oPI/BWfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nAXBhwEAIAjAsKKA4Pb/Z01oKZAO+VSrz8DaPndlQGgfJuUDDwgA4JTnmG4AAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 4
                };

            function ex() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Inviting Curiosity"
                    }), (0, n.jsx)(k, {
                        children: "Here's an abstract home-baked primer on contrast. First, none of the ticks in this example stand out. This without hestitation tells me that they are all of equal weight conceptually."
                    }), (0, n.jsx)(ej, {
                        state: "initial"
                    }), (0, n.jsx)(k, {
                        children: "Now, to create visual interest and call for your attention, we traditionally apply color. This might be a color relevant to a given brand, or signify state, like an error."
                    }), (0, n.jsx)(ej, {
                        state: "color"
                    }), (0, n.jsx)(k, {
                        children: 'Contrast can also be achieved with form. Through rotation we\'re again emphasising the conceptual weight of the contrasting tick by saying "this one is different, and more important for a reason".'
                    }), (0, n.jsx)(ej, {
                        state: "rotate"
                    }), (0, n.jsx)(k, {
                        children: "Let's kick it up a notch to an extreme example. We're now back to where we started—nothing really stands out or gives us an impression of narrative nor purpose. The only harmony we can attempt to find is from the equal width and height."
                    }), (0, n.jsx)(ej, {
                        state: "crazy"
                    }), (0, n.jsx)(k, {
                        children: "Let's dial it back a little, while introducing a new contrasting aesthetic: hand-drawn ticks. This feels more uniform, yet slightly playful and unorthodox."
                    }), (0, n.jsx)(ej, {
                        state: "contrasting"
                    }), (0, n.jsx)(k, {
                        children: "Now, this is a primitive example, but with higher fidelity elements the contrast between them can be exponentially stronger. Hopefully, this drives home that just the right amount of contrast invites curiosity—why is one of the elements different and what does that communicate?"
                    })]
                })
            }

            function eC() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Raw Materials"
                    }), (0, n.jsx)(k, {
                        children: "The website of Raw Materials may be a lot to take in, but from my point of view they tastefully pull off playful animation, revealing raw materials, and various styles for 3D graphics."
                    }), (0, n.jsx)(k, {
                        children: "To set the stage, their company mantra reads:"
                    }), (0, n.jsx)(U, {
                        children: "We believe that when everything is the same, different is the greatest of opportunities."
                    }), (0, n.jsx)(R, {
                        sizes: "50vw",
                        src: ep,
                        link: {
                            href: "https://www.therawmaterials.com/",
                            title: "Raw Materials |\xa0An Unusual Design Company"
                        }
                    }), (0, n.jsx)(k, {
                        children: "The logo has four different animations. Each page visit gives you a different one. They all feel equally playful due to their elastic nature."
                    }), (0, n.jsx)(k, {}), (0, n.jsxs)(A.x, {
                        css: {
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: 12,
                            my: 12,
                            "> *": {
                                margin: 0,
                                position: "relative",
                                "&::before": {
                                    content: "",
                                    position: "absolute",
                                    inset: 0,
                                    size: "100%",
                                    zIndex: 5,
                                    boxShadow: "inset 0 0 0 3px #F2E9E3"
                                }
                            }
                        },
                        children: [(0, n.jsx)(M, {
                            src: (0, C.jj)("contrast/rm1.mp4")
                        }), (0, n.jsx)(M, {
                            src: (0, C.jj)("contrast/rm2.mp4")
                        }), (0, n.jsx)(M, {
                            src: (0, C.jj)("contrast/rm3.mp4")
                        }), (0, n.jsx)(M, {
                            src: (0, C.jj)("contrast/rm4.mp4")
                        })]
                    }), (0, n.jsx)(k, {
                        children: "Throughout the website they commit to visualizing their mantra with not just contrast in color, but aesthetics in the graphics relevant to a given section."
                    }), (0, n.jsx)(k, {
                        children: "First, they start off with a 3D shape in ASCII style. This tells me that one of the materials that they work with is code. A static visual would be as describing, but being able to interact with it validates the statement through execution."
                    }), (0, n.jsx)(M, {
                        src: (0, C.jj)("contrast/rm-orange.mp4")
                    }), (0, n.jsx)(k, {
                        children: "Next we have another 3D graphic, but this clearly has a different aesthetic from the previous. The soft, rounded shapes feel more playful in contrast to the robust, raw nature of code. I can also infer from this choice of style that they are proficient in 3D design software."
                    }), (0, n.jsx)(R, {
                        sizes: "50vw",
                        alt: 'The word "different" is constructed of soft, white 3D shapes on a purple background',
                        src: em
                    }), (0, n.jsx)(k, {
                        children: "Finally, we shift away from the soft shapes into a 3D wireframe perspective composed of unrefined typography that resemble brutalism."
                    }), (0, n.jsx)(R, {
                        sizes: "50vw",
                        src: ef,
                        alt: '"Unusual Index" is centered on a 3D tunnel perspective. Some cells on the grid are green. Wireframe style.'
                    })]
                })
            }

            function ew() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "PP Foundry"
                    }), (0, n.jsx)(k, {
                        children: "This is the website for a bitmap typeface called PP NeueBit. The contrasting aesthetics here are apparent, and to do with the choice of imagery and typography. My first thought was that they don’t belong together, but rather conceptually not tastefully. Let me explain."
                    }), (0, n.jsx)(R, {
                        sizes: "50vw",
                        src: ec,
                        link: {
                            href: "https://pangrampangram.com/products/bitmap-fonts",
                            title: "NeueBit and Mondwest"
                        }
                    }), (0, n.jsxs)(k, {
                        children: ["First, the painting ", (0, n.jsx)(B, {
                            href: "https://en.wikipedia.org/wiki/Annunciation_(Leonardo)",
                            children: "Annunciation"
                        }), " by Leonardo da Vinci is from hundreds of years ago, long before computers and bitmapping. This makes me sense the tremendous passage of time and strikes a beautiful contrast between the computer and Renaissance eras."]
                    }), (0, n.jsx)(k, {
                        children: "Secondly, the contrast is intensified by expecting to see a serif typeface with ornementation, which feels aesthetically much closer to the Renaissance age where text was cursive and editorial. Instead, the bitmap typeface works great to break away from the mold and make me feel unsettled, yet pleasantly surprised."
                    }), (0, n.jsx)(k, {
                        children: "As an aside, choosing a painting in particular by Leonardo and many other distinguished artists communicates mastery of craft, reinforcing the quality and craftsmanship of the typeface. This motif is also continuously reinforced on the website through various graphics."
                    }), (0, n.jsx)(R, {
                        sizes: "50vw",
                        src: ed
                    }), (0, n.jsx)(k, {
                        children: "Altogether, the aesthetic contrast makes me immediately start finding connections like so. It creates a moment of curiosity. You would probably not want to do this often in productivity software, but for driving first impressions and establishing tone."
                    })]
                })
            }

            function eb() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Lo\xefc Nottet"
                    }), (0, n.jsx)(k, {
                        children: "Contrasting styles are more easily detected in music. Sound is a highly dynamic medium, with every bar likely to introduce change of varying degree. Some tracks have varying beats per minute, switching across sub-genres from e.g. breakbeats to ambient house but still remaining within the same genre—electronic music."
                    }), (0, n.jsx)(k, {
                        children: "This is M\xe9lodrame, a song by Lo\xefc Nottet who is a Belgian singer, dancer, and songwriter. Aesthetically, the song should be considered a passionate orchestral ballad, until 1:55 where an unexpected introduction of drum machine beats. I don't even know how to describe this track from that point on. I kind of want to say it's leaned into the grounds of hip-hop?"
                    }), (0, n.jsx)("iframe", {
                        src: "https://open.spotify.com/embed/track/32hJclF2fwOwMmb1Oo8a6e?utm_source=generator",
                        width: "100%",
                        height: "152",
                        frameBorder: "0",
                        allowFullScreen: "",
                        allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
                        loading: "lazy",
                        style: {
                            margin: "12px 0",
                            borderRadius: 16
                        }
                    }), (0, n.jsx)(k, {
                        children: "That moment feels special to me because the contrast introduced by the beat is so welcome—elevating the track outside the bounds of its supposed style."
                    })]
                })
            }

            function ey() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Spaces"
                    }), (0, n.jsx)(k, {
                        children: "Another medium for contrasting aesthetics are homes or offices. Many people make use of analog furniture, d\xe9cor, or gadgets to tastefully contrast the pristine Nordic–style minimalism commonly found in modern homes. In the context of a home, doing so also reveals hints of character."
                    }), (0, n.jsx)(R, {
                        sizes: "50vw",
                        src: eh,
                        alt: "Grid of three homes with retro gadgets for contrast: a vinyl player, radio, and an old Macintosh computer."
                    }), (0, n.jsx)(k, {
                        children: "Now, below are two examples that have arguably no use of contrasting aesthetics. Both can be categorised fairly well—vintage and minimalist. Objects, colors, patterns, and textures in both rooms are more consistent within their theme."
                    }), (0, n.jsx)(R, {
                        sizes: "50vw",
                        src: eg,
                        alt: "Two homes with distinct styles: vintage and minimalist. Nothing in particular is contrasting."
                    })]
                })
            }

            function ev() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Just Friends"
                    }), (0, n.jsxs)(k, {
                        children: [(0, n.jsx)("i", {
                            children: "amo"
                        }), " makes clever use of several contrasting typefaces for their wordmark to create this animation. The style of typefaces are unarguably different, but by retaining the word, casing, sizing, positioning, and color it creates consistency."]
                    }), (0, n.jsx)(R, {
                        sizes: "50vw",
                        className: "light",
                        src: eu,
                        theme: "light",
                        placeholder: void 0,
                        alt: "The word amo animates through several different typefaces.",
                        css: {
                            background: "white !important",
                            pt: 32
                        },
                        link: {
                            href: "https://get.amo.co/en",
                            title: "amo - Just friends."
                        },
                        height: "120",
                        style: {
                            height: 40
                        }
                    }), (0, n.jsx)(k, {
                        children: 'On their website, they deliberately make use of the word "friends" when describing apps that they make: ID, Capture, Location. On Twitter, their bio also reads "Just Friends".'
                    }), (0, n.jsx)(k, {
                        children: "I can only assume that animating through distinct typeface styles communicates kinship. And subtly hints at the diversity of people in any social group—like friends."
                    })]
                })
            }

            function ej(e) {
                let {
                    state: t
                } = e;
                return (0, n.jsx)(Q, {
                    css: {
                        gap: 16,
                        "> *": {
                            flexShrink: 0
                        },
                        "@mobile": {
                            p: 16
                        }
                    },
                    children: Array.from({
                        length: 16
                    }).map((e, i) => {
                        var a;
                        let s;
                        "color" === t && 4 === i && (s = "color"), "rotate" === t && 10 === i && (s = "rotate");
                        let {
                            color: r,
                            rotation: o
                        } = null !== (a = ek[i]) && void 0 !== a ? a : {};
                        if ("crazy" === t && (s = "crazy"), "contrasting" === t) {
                            if (2 === i) return (0, n.jsx)("svg", {
                                width: "8",
                                height: "66",
                                viewBox: "0 0 8 66",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, n.jsx)("path", {
                                    d: "M3.21319 1.62683C2.61289 3.78791 2.57756 6.07755 2.49775 8.30429C2.38157 11.5459 2.29976 14.7937 2.23656 18.0366C2.16688 21.6114 2.62783 25.1331 2.94064 28.6887C3.2139 31.7947 3.22068 34.9327 3.69015 38.0178C3.96699 39.8371 4.45899 41.6237 4.58162 43.4631C4.68276 44.9802 4.84605 46.4763 5.00748 47.9886C5.28042 50.5456 5.47828 53.0949 5.72292 55.6483C5.85375 57.0139 5.66614 58.4097 5.66614 59.782C5.66614 60.4929 5.46172 61.1807 5.46172 61.8772C5.46172 62.2575 5.26867 62.634 5.26867 62.9958C5.26867 63.2298 5.46172 63.4866 5.46172 63.768",
                                    stroke: "var(--red)",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                })
                            }, i);
                            if (5 === i) return (0, n.jsx)("svg", {
                                width: "5",
                                height: "65",
                                viewBox: "0 0 5 65",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, n.jsx)("path", {
                                    d: "M1.91857 1.74274C1.91857 5.58371 1.85422 9.43119 1.97806 13.2704C2.06889 16.086 2.23995 18.8969 2.29538 21.714C2.34383 24.1758 2.37185 26.6345 2.54329 29.0917C2.76836 32.3177 2.90027 35.5164 2.90027 38.7501C2.90027 40.8621 2.88463 42.9747 2.90523 45.0866C2.91897 46.4948 3.02479 47.9076 2.98456 49.3158C2.8772 53.0733 2.63253 56.8373 2.63253 60.5956C2.63253 61.0318 2.38727 63.2333 2.90027 63.2333",
                                    stroke: "var(--blue)",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                })
                            }, i);
                            if (8 === i) return (0, n.jsx)("svg", {
                                width: "7",
                                height: "67",
                                viewBox: "0 0 7 67",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, n.jsx)("path", {
                                    d: "M1.77637 2.42242C2.32971 4.70957 2.83779 7.01272 3.20157 9.33836C3.6434 12.1629 3.76865 14.9737 3.9454 17.8215C4.07918 19.9768 4.37501 22.1204 4.47915 24.2775C4.57983 26.3631 4.40482 28.4786 4.68356 30.5518C5.29453 35.0959 4.74272 39.7111 5.18323 44.2814C5.29426 45.4334 5.23899 46.5891 5.25705 47.7451C5.28335 49.4284 5.51385 51.1151 5.44442 52.7986C5.37617 54.4538 5.33941 56.1616 5.14916 57.8067C5.07935 58.4104 4.94475 58.9336 4.94475 59.5555C4.94475 60.6296 4.92201 61.6767 4.84822 62.7466C4.8108 63.2893 4.8145 63.8045 4.74034 64.3422C4.70314 64.6119 4.72403 65.6553 4.63813 65.4835",
                                    stroke: "var(--green)",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                })
                            }, i);
                            if (10 === i) return (0, n.jsx)("svg", {
                                width: "7",
                                height: "67",
                                viewBox: "0 0 7 67",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, n.jsx)("path", {
                                    d: "M2.46387 2.11578C2.16129 2.85544 2.27677 3.83001 2.21404 4.61415C2.10804 5.93908 1.97028 7.24794 1.93013 8.57747C1.80772 12.6306 1.96359 16.6769 2.22539 20.7229C2.70924 28.2006 3.49254 35.6813 3.68467 43.1742C3.81796 48.3727 4.1035 53.5399 4.46257 58.7265C4.61836 60.9768 4.91682 63.2278 4.91682 65.4835",
                                    stroke: "var(--orange)",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                })
                            }, i);
                            if (13 === i) return (0, n.jsx)("svg", {
                                width: "6",
                                height: "65",
                                viewBox: "0 0 6 65",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, n.jsx)("path", {
                                    d: "M3.72056 2C4.71601 11.7308 2.74399 21.4333 2.58784 31.1467C2.46542 38.7616 1.47404 46.4335 2.37388 54.0301C2.565 55.6436 2.58784 57.2342 2.58784 58.8729C2.58784 60.0788 2.21374 61.9325 2.81438 63",
                                    stroke: "var(--pink1)",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                })
                            }, i)
                        }
                        return (0, n.jsx)(A.x, {
                            as: m.E.div,
                            css: {
                                height: 64,
                                width: 2,
                                background: "$gray8",
                                '&[data-state="color"]': {
                                    background: "var(--red)"
                                },
                                '&[data-state="rotate"]': {
                                    transform: "rotate(8deg)"
                                }
                            },
                            "data-state": s,
                            style: {
                                ..."crazy" === t && {
                                    background: r,
                                    transform: "rotate(".concat(o, ")")
                                }
                            }
                        }, i)
                    })
                })
            }
            let ek = [{
                color: "var(--blue)",
                rotation: "0deg"
            }, {
                rotation: "12deg"
            }, {
                color: "var(--green)",
                rotation: "0deg"
            }, {
                rotation: "-8deg"
            }, {
                color: "var(--red)",
                rotation: "0deg"
            }, {
                color: "var(--pink1)",
                rotation: "16deg"
            }, {
                rotation: "4deg"
            }, {
                color: "var(--orange)",
                rotation: "0deg"
            }, {
                rotation: "4deg"
            }, {
                color: "var(--yellow)",
                rotation: "-12"
            }, {
                rotation: "8deg"
            }, {
                rotation: "0deg"
            }, {
                color: "var(--neon2)",
                rotation: "0deg"
            }, {
                rotation: "0deg"
            }, {
                color: "var(--blue)",
                rotation: "-12deg"
            }, {
                color: "var(--red)",
                rotation: "8deg"
            }];
            var eE = i(4184),
                eB = i.n(eE),
                eM = i(9544),
                eV = i(3746),
                eR = i(8492),
                ez = i.n(eR);

            function eI(e) {
                let {
                    children: t,
                    language: i,
                    pixel: a,
                    center: s,
                    render: r
                } = e, o = t.trim();
                return (0, n.jsxs)("section", {
                    className: ez().root,
                    "aria-label": r ? "This is a code block with a rendered preview" : "This is a code block",
                    "data-center": s,
                    children: [r && (0, n.jsx)("div", {
                        className: ez().preview,
                        dangerouslySetInnerHTML: {
                            __html: "string" == typeof r ? r : o
                        }
                    }), (0, n.jsx)(eV.ZP, {
                        ...eV.lG,
                        theme: eQ,
                        code: o,
                        language: i,
                        children: e => {
                            let {
                                style: t,
                                tokens: s,
                                getLineProps: r,
                                getTokenProps: o
                            } = e, A = s.some(e => eL(e));
                            return (0, n.jsx)("div", {
                                className: eB()(i, ez().editor),
                                style: t,
                                "data-pixel": a,
                                children: (0, n.jsx)("div", {
                                    className: ez().tokens,
                                    children: s.map((e, t) => {
                                        let i = eL(s[t - 1]),
                                            l = e.filter(e => {
                                                let t = e.content.trim();
                                                return t.includes("__")
                                            });
                                        return (l.forEach(e => {
                                            e.content = e.content.replace(/__/g, "")
                                        }), eL(e)) ? null : (0, n.jsx)("div", {
                                            ...r({
                                                line: e,
                                                className: ez().line
                                            }),
                                            "data-highlighted": i,
                                            children: e.map((e, t) => {
                                                let s = o({
                                                        token: e
                                                    }),
                                                    {
                                                        className: r,
                                                        ...l
                                                    } = s;
                                                return (0, n.jsx)("span", {
                                                    className: eB()(ez().token, r, {
                                                        ...A && {
                                                            [ez().highlight]: !i
                                                        }
                                                    }),
                                                    ...l,
                                                    ...a && {
                                                        style: {
                                                            color: "1" === s.children ? "var(--code-tag)" : "0" === s.children ? "var(--colors-gray12)" : ""
                                                        }
                                                    }
                                                }, t)
                                            })
                                        }, t)
                                    })
                                })
                            })
                        }
                    })]
                })
            }

            function eS(e) {
                let {
                    children: t,
                    collapse: i,
                    dark: s,
                    scope: r
                } = e, [o, l] = a.useState(!i), c = (0, n.jsx)(eM.uz, {
                    theme: eQ,
                    className: eB()(ez().editor, ez().editable),
                    tabMode: "focus"
                }), d = a.useRef();
                return a.useEffect(() => {
                    if (d.current) {
                        let e = d.current.querySelector("pre");
                        e && e.setAttribute("data-gramm", "false")
                    }
                }, [d.current]), (0, n.jsx)(A.x, {
                    ref: d,
                    as: i && !o ? "button" : "div",
                    className: eB()(ez().root, ez().live, {
                        [ez().collapsed]: i,
                        [ez().expanded]: o
                    }),
                    css: {
                        focus: !0
                    },
                    ...i ? {
                        onClick: () => l(!0),
                        "aria-label": "Expand codeblock"
                    } : {},
                    children: (0, n.jsxs)(eM.nu, {
                        code: t.trim(),
                        scope: {
                            motion: m.E,
                            getRandomNumber: eU,
                            ...r
                        },
                        children: [(0, n.jsx)(eM.i5, {
                            className: eB()(ez().preview, {
                                dark: s
                            }),
                            "data-expanded": o
                        }), i ? o ? c : null : c, (0, n.jsx)(eM.IF, {
                            className: ez().error
                        }), i && !o && (0, n.jsxs)("div", {
                            "data-expand-label": !0,
                            children: ["Expand", (0, n.jsx)(eO, {})]
                        })]
                    })
                })
            }

            function eL(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "// highlight-next-line";
                return null == e ? void 0 : e.some(e => e.content.trim() === t)
            }
            let eQ = {
                plain: {
                    color: "var(--code-fg)",
                    background: "var(--code-bg)",
                    fontFamily: "var(--fonts-mono)",
                    fontSize: 13
                },
                styles: [{
                    types: ["comment", "prolog", "doctype", "cdata"],
                    style: {
                        color: "var(--colors-gray10)"
                    }
                }, {
                    types: ["namespace"],
                    style: {
                        opacity: .7
                    }
                }, {
                    types: ["string", "attr-value", "string-property"],
                    style: {
                        color: "var(--code-string)"
                    }
                }, {
                    types: ["operator", "constant", "script"],
                    style: {
                        color: "var(--colors-highContrast)"
                    }
                }, {
                    types: ["entity", "url", "symbol", "number", "boolean", "regex", "inserted", "unit", "function", "tag", "class", "class-name", "builtin", "maybe-class-name"],
                    style: {
                        color: "var(--code-tag)"
                    }
                }, {
                    types: ["keyword", "attr-name", "selector"],
                    style: {
                        color: "var(--colors-blue9)"
                    }
                }, {
                    types: ["function-variable"],
                    style: {
                        color: "#6f42c1"
                    }
                }, {
                    types: ["selector", "keyword", "attr-name", "punctuation", "rule"],
                    style: {
                        color: "var(--code-keyword)"
                    }
                }]
            };

            function eU(e, t) {
                return Math.random() * (t - e) + e
            }

            function eO() {
                return (0, n.jsx)("svg", {
                    width: "13px",
                    height: "13px",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    fill: "none",
                    color: "currentColor",
                    children: (0, n.jsx)("path", {
                        d: "M17 8l-5-5-5 5M17 16l-5 5-5-5",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }
            let eD = (0, g.zo)("button", {
                br: "$round",
                background: "#FFF",
                backgroundClip: "padding-box",
                border: "1px solid $colors$grayA6",
                color: "$gray12",
                fontFamily: "$sans",
                focus: !0,
                cursor: "pointer",
                fontSize: 14,
                boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.04)",
                transition: "border-color 150ms ease-out, transform 150ms ease-out",
                "&:hover": {
                    borderColor: "$colors$grayA8"
                },
                "&:active": {
                    transform: "scale(0.96)"
                },
                ".dark &": {
                    background: "$gray3"
                },
                variants: {
                    variant: {},
                    size: {
                        small: {
                            height: 28,
                            px: 12
                        }
                    }
                }
            });
            var eT = i(8448);
            let eH = {
                Angular: {
                    label: "Angular pixelated logo",
                    color: {
                        1: "#dd0031"
                    },
                    matrix: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
                        [0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
                        [0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0],
                        [0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0],
                        [0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
                        [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAADyUlEQVR42u2cPXLbMBCFHyW1mUEKT9ocwU3Oo869S3f2Ddwl40rq06j0JTKp3cSl1KFIKzGFuNRgaWixwMKmY75mx2MQEIfvwx8XbGCsq2V73/j57R7H+BOze/jmdt/F7dq2vcb8Bv7gKwAPf4wbH/69+2zb3sz6BuAAoPFhxCkaa25d4bcdLoH2Zv54jE+PuASam6aLf3/btrfIvZB7vY9t6xq/aPegOHPw6OPFMmSilI1sBrjXY3Hj08rlspHPgAOGXo9FyDFT2Qxwr8ciZyAWc9kQGUj3eiyGDMRiLhsiA6leL2Uglw2ZAQeke72AgVgUJDKQ6vVSBnLZGDAw8Hyy18sYSGWDMzFgoNTz1gxITAwZOOvlN2CAR6YBA6Wet2ZAYqJnoPd+seeP8fsaq67qFQBcLMtY4EwQCz0D1t5/YF79Ylw/sXBiwNr7XJVY6Bmw9v4v5tVPuzos9E/g0B4c/KK1ivwB7FscvWwUqd6JgYmBiYGJgYmBIgb6udDBfg4UaLuynRNVY+BBWMNasVCPAUm5nuexkzkD3PtcVixUGwekBzD6cWBiIDV2evcMmI0Dsf6fy2o8oPrMGJC8z1XKgj0DWjkAY2JA8j5XKQvmDPAfSPtM9J6Y72nu25EzQPVtmGdJ42cg+D8i/x8xA1TfE/MsyZyBH13/fLW06f9PTIWeJeWOB1vWXvH7gVj/LzFA0rJg/34gpqAchHJ675OK3w/E+n+JAZKWhej7AZJ2PODXD98zvLyvT9KOB7w9cwa0+ULjY+DFcrAbD5jMGdDmC70ZA7H+n8YTIBoDaccDfn02A9r5v6RUFuwYsJYD8JoMaOf/klJZ4AwMnoDV/o9W2v0g0sSAmRyAj8iAehyI9f+x3DqeOx3L+0kdD3i7agak+T8vv0n0MklioZyBmM5eJ3s5rKciA9L8PzVfKHd9UMwALy/nGaXl/ZCk9QFvv5gBqbyUM6ddH9gzIJV3ABSefnUGpPJSzpx2fZDNgLz/k5c3yuuTxgNePpkBbf+fywApxkI+AzHFygdRwUBQryED2v4/lwFSjIVsBvLPEeSdG4iNB/z3TrnTxQxoI9O7z53OXhOnxlq5chMDEwNGDAzGAb63qX1nZn2GZrs+v7c6nSOrzoCg/+8cGVc5E7ae51KfJ9YyoWVAe65Yf57YAVUZUEp9nljLhJYB7bli9Zl6PRO2nucq/q5ErTVxqsq/K+GAKmviRBV/V6LWmjhV5p8mIUk5c1aqdwOJ+UKlsv+2CskBSflCY72B2XXzDH+4a67xDN/c1WrnHyaI0Jtq1HncAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwEqsT/QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0xMi0xMVQxMzozODo0MyswMDowMGP2q0EAAAAASUVORK5CYII="
                },
                "Arrow Crossed": {
                    label: "Arrows crossed pixelated icon",
                    matrix: [
                        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
                        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
                        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
                        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1],
                        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
                        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1],
                        [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
                        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1],
                        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
                        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
                        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
                        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
                    ],
                    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAADOElEQVR42u2cMW4bMRBF/+6qCRABdCEoZXID30itr+AuR8gR5GOkyxGcE7iVqmzh1lCKaARn1gOSw+FQAvibgaRdDhect8MdcjXhrM1u/evzw3p+/Q1Xkd9P9zo7UEPbF3wFMB/vfC+A/GLW2fHSUgAAzL7df+dXaSdqZ33EPTA8vj779p/8Dj91dtzstn+2L192bycEzDjRZ68LIL9aO0gx6MVCOQMBwEcx5iXJf6KdpBj0YqGUgdVhjz0AbHbjv9jCeGZh/IF5+H54qnsB5B/42PJ+cbvIA61YkBRjZJkHuG0tqV9nu8gDrViQFGPkMgKH/fHb8e6w5/dZ77xA4vlJzAP8xGthITU/jIszA4BrYEHqB7MTP+9aWEjND4sRaM2CFPtSvwapoVYsxPzy30expQCgBQsxv+z7SWqnFQsxv/x3cQS8WYjFPh2XzADJi4VUP+kMkAIADxZS/bDfJ0TkxUKqn2QGSLVZSI19UjYDpFos5LabzwApAKjBQm677LgoA6RaLOS2m80AyZqF3NgnqRkgWbGgbUfPACkAsGBB2w47PpkBkhUL2nb4eavcCyitI9Fxb6f/zz88XepBSf5xrhtlM0CyiuHSfJLPACkAMIjh0nySzQDJKoZL84l6BHLzgva+H5OaAZJ2Hm81l9IzQAoAFPN4q7mUmgGSdh5vNZfKzgNcPC/w+3npfT+mYgZI0jpz7WfqcgZIAYBj7JOKGSBJ68y1n6mLGSC9m6MAqB/7JDMGuLzqSXYMcAUADvUkMwa4vOpJZgyQvGKfZM6A97qCPQMBgOO6gjkD3usKZiOQOt+3Xl8wnwulPhdc71yIW+k4I5nPhVKfC6yYKB6B3Ni3Xl/oz8T9mfg5zx+XegRy6zy11tp6bbTXRr1ro6U1zlIW6DiyfY2sr5EVMpQ8Atb1fS0Lfa9E3ytR2G42A7XWtki5LPQ9c33PXKGfZAZqxz5XKgt973Td7if4Zd/f/N7pxfqAd32fK7Yfiferv0NTTVI/mL35d2guDLSOfS6Jhf4upbukfp3tzb9LuWod+xf/EOwpwkDr2O/v1LeOffN36r3v+7EYj9n+3yrFIr9Ke/P/rfIXa4FSonSio1kAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTItMTFUMTM6Mzg6NDMrMDA6MDASqxP9AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwY/arQQAAAABJRU5ErkJggg=="
                },
                Astro: {
                    color: {
                        1: "#E43A99"
                    },
                    label: "Astro pixelated logo",
                    matrix: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAAC2UlEQVR42u2bMY7bMBBFv5y0AbSFoZTJDXIjnyNdjpAjaI+RW+wN3MrVqkhrKMUuixCeJTn/j9YL8DcDGObQMudRQ3I4gNTxdPiNdfh1hc8uj1z/A/sA0xnfAKxYffbywPV/YB8AIwBgdVtSn1gHXy74AQw/hz8++/eJ658egeuGESs2r2X77wx0Bp64/t0jcDxNz9P564llIPnx/g43A2zsq1jwMzACYGI/t065GWBjX8WCewTY2Fe9DzoDnYG9GVDN/6r3QTMD6thnWWhnYASgjP3cNqqZAXXssyw0j4A69tn3QWegM0Ay8Ln1Aa7b4SVm8bZdHjG/NpkB4Hiqa9f6e8IYyGPZ266kOAZU7QoKYyCPZW+7kqpHoDUHyttH5UTVDLTO/14GWlmoZ2AEwMznbHtD1Qy0zv9eBlpZqB4BNqeJyok6A50BkoHqXMiRA/2nZY7JieQMlGJXnRPpGdjLz6vkDJRiV50TFUeAzYFyqXOiIgPq+Vvtr8zACEA5f4v9FRlQz99qf8URUOcwan+dgc5AFAOt8/8yX75fHpa59Iek76neByYDUfm72r/NwAggIH9X+zcZiMrf1f7NEYje11f57wx0Bkj/5po4XwPn+/03bJPSGtnyl6+dLT/VDLC1ba2q7b+egb1V2X81A2xtW6vC+2dr3dR+mjWdp23apuf39sPXC7Ei/dD1Qmxssn7omrkUw7WxnH//7mrmvGvi+6mZi2pnSF4z510TexlorpVIss4LindqNk2NRFKvG+11o7122qnOQG6d+vAMuN8D1rlvWjvXngdb58q1kt8jS7EcVSOXS3+PzPrcsqTk98hSLEfVyOVyM5B0Y38HgJ0r3dhfokQzYEmd91viGbA0AgiI+Vw0A5bUeb8lmgFLb+ytSrUbA1F7q/sxEKTdGIjaWw0bAfXdeUudAVMjgM7AHejd9v9VUp0jWIpjIGkE8BEZSFKdI1j6B7HL1yPFuRPyAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwEqsT/QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0xMi0xMVQxMzozODo0MyswMDowMGP2q0EAAAAASUVORK5CYII="
                },
                CPU: {
                    label: "CPU pixelated icon",
                    matrix: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
                        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
                        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAAB8UlEQVR42u2bMVIDMQxF5d09wHIDjkDDedKlp6SDG9CFoUqOwSUYbgAtnS+QdYqwGWIirB3JNp75v1GBiKyJHujvrB0ptV6FJ+f7hz0d42Znm5+SUzfwQddE5Mkf48uVbX5KnbYBGomInD9F6/zcDXR37pP89DhH6/zsDUxhGskPYY7W+SmBATBQuwEwAAa0H1CZgSGVEO8uv2IIo/ND2NMxWuendqUkA/HMlo4pRtIjNBKdzWzpmFCfSrj9ohuicN+/1olv73+fj2XgNJvRzJaO8zk4FlgGas++lAWegXgWa0dGLAO1Z1/KAj9Cxt51qaT1xQxod5bFDQjryxkoLWF9tgHrnWWppPXZBqz39qWS1gcD2SSsDwZyCQyAAaWk9QfWk0Y+oHQDk9A7O+neX5sBLnZW3tRcwnP10r0/5U2tJT1XF/+95WLpL0B6LjCQTcJzNc/A8Lyl7ffvnMX16n/9H9jsLp8Tu1A2Ces3vwvBD+QSGAADSoEBMKAUGAADWgnrN88AngvlEjxxK54Yz4VyCQy0wgCeC+USdqFWdiH4gVwCA2BAKTAABpQSe2LuB1JPmi0KPTnenca708p3p1kGZp8Q+4LS8YcPuCjcocEdGqUX119FxJ16XX3cpax9lxL3icGAUmAADIAB7QdUZuAA/s1DwSCVn0oAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTItMTFUMTM6Mzg6NDMrMDA6MDASqxP9AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwY/arQQAAAABJRU5ErkJggg=="
                },
                Ember: {
                    label: "Ember pixelated logo",
                    matrix: [
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
                        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
                        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
                        [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAADXklEQVR42u2cS07jQBCGyybbkcIiCkvmBtwo55gdR+AI4RjcghuwdVZ4MVsUFkMZVKaoZ3c7I/+bkqJKd0f+v3Y/04FTu0P/AGN3/wY5cXj0taPz/oD9C9wCwAhjTjxd+9rRe38AbAEAYEyLTl15v/jrBHcA3Z/uKSf+ffa1Q/0Edof96/7l5oDx7QxbGOGcFWn52napGcj2fBYTega2AJDpeSkqpWYg2/NZTIhPoJTntUxI7RMZqO19KwsyA1sAqOl9GgWJDNT2vpUF9gm08r6VBZaB1t7XssAzgB5cSmTEMtDa+1oWNvSDaZx/7v95EWxxeITjR1E/xt3BVi62i84bZgxEva8dw3jroeXPGeA8qI1aJZU/YyDqfe0YxlsPLX96AtF+fziefp+uh6P2AWB+9L0wMVDL+1RRFj4Z4DynjV4F65sYqOV9qigL03sgod93yVsvfj/MgNf7WfXGGYgqWG+YAa/3s+rtvf2/1O9r13mi84SulPdpuVx+9P3TF/O+Nt9b/0e8KuV9Wi6XH33/bKL9MBWdT0jvCW/9GNMZ0Hqfy2/PgDaPyzfGdAa03ufyizNg9bT0AKozkNX/c/nlGZAUzTdGMwNZ/T+XX5wBriHW/j+6/pTOQG3v5zOgzePynTGNgdreFxmga5y4lsk1aDjO1kC/VZb3RQaohzGv1RzYzgAV97lVXH3OyDJAPYx5rebAZgZoxV887pLW+xx7YQai0nqfYy/OQFRcPVK9Qr6agai03ufYMzPA7UlpNTtTp3zfUEnMiGOh0uv+0TGTPBbySipXW77wfXEsVHrdPzpmEucD1MsSE1J/L3meKsxAtmetTMUZoFFS9PvG8orPiaNMhRmwvh++mRfQqJJ27FRsfyAqbbvK7Q9EpWxHsf2BqLTt6r17VKUabt2zWxwD1vYsjwFjOxbHgLU9fda5Ha+89xKw3etZiegTWM9KYEG17r5k3cXB8tLOzGXNF+ozwHiTVXI9aWfmau8LzM7M4TjeeqZZmkPPYnBfgO69pZ+dLh3Ln50uHYnSz07Xvkcwuz+QxUJ25Pad1zs0rbyP+v/u0KCWwoJ05mK9S9nK+6iLv0u5AUGtWNDeS1jv1LfyPuri79SLDKDoun82E9a9M9T63yq1PU918f+t8g4sc4izRgM1DAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0xMi0xMVQxMzozODo0MyswMDowMBKrE/0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMTItMTFUMTM6Mzg6NDMrMDA6MDBj9qtBAAAAAElFTkSuQmCC"
                },
                Gatsby: {
                    label: "Gatsby pixelated logo",
                    color: {
                        1: "#653399"
                    },
                    matrix: [
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 0, 0],
                        [0, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 0],
                        [1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 3, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1],
                        [1, 1, 3, 3, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1],
                        [1, 1, 1, 3, 3, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1],
                        [1, 1, 1, 3, 3, 3, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1],
                        [1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1],
                        [0, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 3, 3, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 3, 3, 1, 1, 3, 3, 1, 1, 1, 1, 1, 0],
                        [0, 0, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 1, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAADiUlEQVR42u2cO3LbMBCGl7TazNCFRimTG+RGOke6HMFHkI+RW+QGbqkqLNJ6lMJZZgx6vf8+AFIebbOF8aAG/wcsgIU7ctr+2D/Q1P14phw/Pvq+o/P+gMMTfSGiiaYcf773fUfv/QE0EBHRlOadduet+OlM34i6793PHP/nl+874BHYHw+/D0+fj+yfLzTQRJcsX7aPfhfMQLbms5jAGRiIKFPzmgcNZiBb81lMqCNQS/MoE9r3qQy01r6VBZ2BgYhaar/0iqkMtNa+lYWd9Ic51rn0L9qkt/34SKd/VVx+f3y/ff4OKVYSGUC1741hsvqRGRiIqGIMk9WPyACqfW8Mk9XPYgTQeX88nb+e78dTdAC4He+6sGCglfaz+l0yMBBRC+0n9btgoJX2s/qd1wHHvP+6XnAvPJ5868LMgFeD0VjJ2x7X+8+AU4PpsY6x3syAV4PRWMnbHtebR8A672ftE8r5HV0XuDzMQLb2o+3bGfBq1ahp6/fADGRrP9r+zICm5Vra186F0PLd2tqP+n517Qf93draj/qdFPuIMY8SK7X2IgNb177OwMa1rzKwde2z77VYg6312Sjqbwys7T8uA944fTMMXAsLt1hobd+jcfdWWVAZ2DoLOgMbZ0FlYOssLPYDvA8ozyjLM0n0LFPz6B2b1M+CAdZ6qxgJvWeQ+ulFrUvaKy2qZdSE+gsGWOutYiT0nkHqp5f2AdJ8n70uoAMArwOoxrNYqMeAoj24nOZRE+qLDLDVZiGdAVTjWSyUZ6LSfXC1PXGtGAltN74nRstZPdhueE9cK0ZC24XPhVqtC9ZzKZgBTYtr3R/jDChahMuhHmwPZoBtrRjJzIA0H9dmwXonZz4X0jQZZcFa334upGgSLpdU33wuxFaLBWv9nba3lQZAqufdO1vv5Li8miuhxetZLNTLldAMrSeVC5ZXcyW0eD2LBXeuBFfw5vFH1wVvLgaXd+cLleZloV3OnGZoPevflXbd+UKleVmI5szNeaPafF3mh5b5/NZ1gciXi1GuF+m509nridZOfu60tXyw3/Tc6ez1RGtnMQLWfH7vORJb9L1C+A2NdT6Pzvulxd/QsEfre/sRLPyGptU5ksSQ+I7Mege2eEdwiZWT5v3Sbm8pq3vFPu5bSras++DA/fG7dntTv5b22a7+Tb3KAFsZx2cz8UbOBGS3/63SWvOlXf3/VvkL7vAlKMkU89oAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTItMTFUMTM6Mzg6NDMrMDA6MDASqxP9AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwY/arQQAAAABJRU5ErkJggg=="
                },
                Globe: {
                    label: "Globe pixelated icon",
                    matrix: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0],
                        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
                        [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
                        [0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1],
                        [1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                        [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
                        [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
                        [1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                        [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
                        [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
                        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
                        [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAADbklEQVR42u1cMZLbMAxcSW4yE8/oCo9TJj+4H7nNF9LlCfcE3zPS5QnJC66Vq6i41uMrIioTKDgABKixL9wGM0eApEe7EgmC1yEIu8P2+/vP2/Hdvc4+/4wZt4n6AfsnfAQwYtTZ013MuG3UD0APABjVNghdVEfbE+6B5kvzTWeff8SMu7EG7A7tA8bm6xnEXtoeIy5n6CzXz/Bom49ZA1auW61VG3YN9AAsXLdaI8wasHLdaq3aUGtg5qyS68MjjlPocYo3aUOrBbUGvO/5Ut8JvQZ6AB4ue+MZqDXgfc+X+k6IGuC4L3Gc9mON12pB1ADHXYnj3natFmQN9AByOO5t5/wIRA1w3JU47m3XaoF9ArvD/tf+6cPhfMFvbk52OJ4+ne6GI+dH2xPS35NfiuPaOT8KVgNR3Jf69WqB10APIIL7Vn/tuBNYDURxX+rXq4XFE9ByP4H6SQ9A8rdqYaEBKwejNWCdx1IDPQDL+1jrZ/VXzmOhASsHozVgncf8BKzcT4jWQIJWC7MGctcipTSgndcfDfQActbla/uTuFkDuWuRUhrQzmveD7yyXgegzwexfkb/tA8Yjq/vN1gNePe00fkhbn68Bihoe2krjT+B1YB3TxudH+Lmx2pgwU1j7tNrpfFFDVy71X8HrtVKGrh2O2tAm/OU8ji0XbJSvJRLTfNutNz37oUpor47bfR7WQ1r/4zttNz37oUpor47G477/+D0X+Dey1pI8WkNBEETzVr7AG88N89WzXkKq783nplnt9Y+wBvPzXMj7QM4lNYABbcvaHK5vLYGuLg2m8u5cd54EtflcnltDXBxrTWvk5Ab542ncVUDVQPRGpDOpBLW1gCXu61roboWcq6FFhqgWuA0UVoDdHxunnVPXPfE3j0xt8625irFcwHrOYEyT1VzozU36s2Nph9grWkrbbU1efWMrJ6RlT4jo+e1MOb5Hf6Y/B9cZ2S1ViLan8TdfK3E/ARy6zZL1Qtp65dqzVytmVP2K9bMJVi1EK0Ba+1erZ0O14B23Alvr3Y6QasF6V5AgnTPILdutd6hYf287Zwfwc3foRHvkXF5I21NW4I1D6Q9r653KbM1Yo1n8PbvUiZoc6jeulMt9xPqnfri+SAB/8+d+gRtfsia+wRs3E+o/1tlRg+gINc53Pz/VnkB7JjhIDX6zO0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTItMTFUMTM6Mzg6NDMrMDA6MDASqxP9AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwY/arQQAAAABJRU5ErkJggg=="
                },
                Hugo: {
                    label: "Hugo pixelated logo",
                    matrix: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAACXUlEQVR42u2cPVLDMBCFX34aZsiMKTyh5Ai5kVuuQMcROEJyDDqOACdIm1S4SJsJRbAhKyvyalf+gX3No0BajN6HJSFlBmXlxeLt9nFR3qya/fChW2+i/QDLLR4AlCibfX+nW2+q/QDIAACl15U10+5wsccKmDxNXpv98K5bTzwCebH8XG7vi8qPJ2QocfI5/X5pfTEDocyHXMqEnIEMwLXMh1woMQOhzIdcygR7BLiZT80EmwFp5rWZ4DOQAZBkPuRMsRmQZl6bieAIaGdem4kgA6kzL2UizEAGIGXmQx5QkIHUmZcy4YxA15mXMuEw0HfmuUy4DGhnWNuJHAb6zjyXCWcE+s58yI2B3v2vMTCvvsiL6QvKyfPxND1nDtd9t8H6u+mF50WadpVXP+duc25cM8DNvm+OErsvFFv/hwFhFlv3E9vO00/NADf7vjlK7L5QbP16BKR/j9v2E9vO148x4ChVO08/xgCVMWAMGAPGAKu+MUDVNQP1eqDtOqBy3y9yt26e7//yRsXWV2cgVsNhIFaR9dUZiNVg3gOxGsx7IFbGgDEglDFgDAg1mLlQvceKZq/2NKkGMxey9QCz/ujXA7YmpjIGmPWNASpjwBgwBowBVn1jgMoYMAaYGXSUqp2nn9EzUK+Jq3197rkdZ+17StOu4bwRADsz14MTjf7MnJ0bNQb+OwNz+gD0/7xt3wupvOGc6YXsDk3Xmaca/R2aOQLqmolQ5qnsLmXXmaca/V3KIANU2kxwM09ld+q7zjzV6O/Usxmg4jIhzTyVfbaKowxAwsxTjf6zVb4A17JTse60G2EAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTItMTFUMTM6Mzg6NDMrMDA6MDASqxP9AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwY/arQQAAAABJRU5ErkJggg=="
                },
                "Next.js": {
                    label: "Next.js pixelated logo",
                    matrix: [
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
                        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAAC80lEQVR42u2cPY7bQAyFn7TbBtAWhlMmN8iNfI50OUKOoD1GbpEbbCtXUZF24RRZKsAIBH9EidzAryFgD8cU5n32aDTjDk6dLv13zN23V8TE6dlXR+e9gPMLPgGYMcfE65Ovjt57ARgAAHNYdOrBm/jhii9A97X7ERN///TVoR6B0+X86/zy8ULx9YYBM25Rse1fW5eagWjPRzGhZ2AAEOl5KSqlZiDa81FMiCOwl+e1TEj1iQwc7X0rCzIDA4Ajvd9GQSIDR3vfygI7Alnet7LAMpDtfS0LPAPkwSqREctAtve1LKxGoIr3tSysGKjmfYmFNQNZHtfGRisGqnlfYmEZgarel1hYGKjufY6Ffwxke9vJwsJAde9zLCwjkO1ta7wzkB7/FwYelzXOW//XY9DF6Rnj27WPAHC6HJtPdXde77dzEms/W/Mp9mHz86Pz3+KD1/vtnMTaz9Z8iv3W72HSNF4/X5+m0ZvvrSOMAauX6zFg9bI3r4lhDFi9XI4BkpaFNq8MAySp37oMaD1tbc/EcAZIUr9lGSBJLLTtyzFA4vqvzwBJm++sYzcGSFz/5RkgcSy07coyQGo/5/0wQJLynXXszgCp/ZxyDEjPsloW2vfTGaB+tHOkegxwr2vbOesIvyfWzpHKMaB9rksscPnpDET9TuQxwL0vyVnHbutCW38n0hiw7vfh8tMZiLpvyGOAa8fJWcfua6Nb7xvSGLCyUJYBLQt1GeDaW/OZeNjzga3rSGkMWOdIZRnYi4Xjn5FJMtZx+DOyaBZ6r/e85wmiWKB2aXslop4v5O2VkKTMT9srEfV8IW2/0FYWqF36fiEvC/kMNF5mJeSl7xfysrBiwPt7cDQL7bpSmb3T3jXVOnunJTHtyuyd9q6prkagOgvt6+XO0FjXVOudoTGq3Bka65oqOwJVWWhV9ixl3HniAUBhFsqepQw7T5zFgnYE7mfqyzNAqnbPTHrUXsA0btvvbz1PoNX9v1Wy5kCkd//fKn8A3JjINVwwsv0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTItMTFUMTM6Mzg6NDMrMDA6MDASqxP9AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwY/arQQAAAABJRU5ErkJggg=="
                },
                Nuxt: {
                    label: "Nuxt pixelated logo",
                    color: {
                        1: "#00c58e"
                    },
                    matrix: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
                        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
                        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
                        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAACyElEQVR42u2aPY7bMBCFn2S3C2gLQymTG+yNfI50OUKO4Bwjt8gN3NrVqth2oS0WVOBRBvPDkekA85oBZPFRNt8nkpKBVCqVSqVSqZRbh+P4Op6/HFtfh1vjeZzHeXxt1X9f7TAAAKZWX2BXa/B0xQvQfX/70+YLuEegZP99xoAJcysWOm/D8YyvACZMt/X6fN8v4GdgAABMq3pnuRko2e9+39Z7s2AeAZp9Wq0s1LJjZoDLvpeF4udlx87AAOBf2afV6ueUmQEu+14WaucR8wjQzF9O12/X58uJHpd8ouaRagZKdrnjWh/vPFLPgHRc66NtR1TNQMkud1zr451H1CNAM1uyXz6nLHCZjp5H1AxoMy6dFz2P6BkYAGiyKp1HP+eqUmoGtBmXzoueR9QjoL3PS+dFzSNFzRnwziPmEdiMAas/UXMGvPOIWuW+7F3nczWqP5EBbzal+72XISqZgQFAzTqfq0H9iQx4synd770MUe2lC3mf+8/7M3rT/flywgkADsfb9pdfn8ej+tuMAW/7x2HA2954/mYMeNtbz2dHQFr/a2Vd42j3FUUsA7XZr/XRtuMZGABEPPP0+ijbsQxErU2i5hGuHTsC3vV5lI+2XTIgyuujbPffM7CSd/3fymfFQOvsW33WDAwAWmbf6LNioHX2rT7LCHDPLL0/3FY+lIWFgej3vlsxQP3+MjAAiHzvu5UP8VsYiH7vuxUD1G/ZE9O9qLR35XQ49j8xdT+Kn9eniNtbl89ZBlpnX+vLM+BVlI/Sl2Wgdfa1vvvozHqfI0miLJTr7qIzuxUDnH8fntloP8F/F53ZzZ7zM/57mtmFCTirkiV3P+R6O+17W2v1/lfCWnt2rVFbJQX1s9O+t7VW738lrHXPrTW8VZ39OaYfcT/wqNnX7wesVVJwP+J+4FGz3+q/2qlUKpVKpVKpVCqVSj2KPgDHbmu5ilAEPgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0xMi0xMVQxMzozODo0MyswMDowMBKrE/0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMTItMTFUMTM6Mzg6NDMrMDA6MDBj9qtBAAAAAElFTkSuQmCC"
                },
                Python: {
                    label: "Python pixelated logo",
                    color: {
                        1: "#3776ab",
                        2: "#ffd43b"
                    },
                    matrix: [
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 2, 2, 0, 0],
                        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 0],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2],
                        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2],
                        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2],
                        [1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        [1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                        [1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                        [0, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
                        [0, 0, 1, 1, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAADbUlEQVR42u2bPW7bQBCFHyW1AehCUMrkBm5yHlYRkCO48xHcKVBFH8OXCHIDt1JlFmklpqCWNodidmdm/4joNa9YkKLA93FnuMsCQq2rxROa4vEEnR+epVfQqZAeuHnFFwANGp0f73R/YCE+sgQANGpXaik98NMR90DxULzo/M9v3R9g34F1tXnbvH6uTi1KNGi1bs4n/QNsBnxl3xcLfAZKAD6yT10oNgO+su+LhRX3gFO76DKMzg/PqC9DNQCsq+G4q5t5hTsvqBmg2dUywmVBz4BtnOtMqRmg2dUywmWBfQfoc9w2znXu9dwYsI5znanZM6CeB0Z9QSubB4xzryebWigdA76dqWxqoWjzwKE+fj3eHWpf/UD0ecAol74gfU9MnankPXH0ecDoUA/7AJu79gn0d7ZV+1Q0y8cTOt+RfkHMAFeuzFAGtuS4PRmXM8BVCUDCQAkARdM7kZgBrlyZoQx8O+IeaB+WL53/IuMjBny98xy5Y41Er+fctmXRrNoTOjdMGBZGDISudbQMUBbGDJQAQtY6Nr96PR8YMH7RiIHQtY6WAcpCz0CffWU9r3UbA5SFnoHU2ecyYPydgdTZ5zJw8Z6B1NnnMmB84ft9v+9+4NyeSzSrdsqLXLIvZyB15rUM5JJ9MQOpM39jIHnm/3cGVq61D10LC+gDTdVCxp0Z0O5pkMofA6lUAl4Y0O5pkErNwIfsR1X/PkjLQK7Zd2cglUrgX9l3ZiDX7DszQE9M31UGc0v2xQy4ZjOW8xlwzGYsZzPgms1Ybu0H6A2w1eex/cZAap89A+x5wFafx/LdpUabLQPv6wNzZeCi2TLQrw+Y9d6pddzcGNiR/sS6PpAbA9PrxHNhgMi6PpAbA5PrxFMsSBnYhXuPNJB1nVjKwD5SL21fJ746zs9qKFnXiaUM0KyG0mivxJV9QAO5MsDtnXfC78nY+4VCzQNSZoT7RsM/313F3i8Uah6QMsO+A6F62231/W37+oP9PVk2DEhZyIcB40xlw4CUBfa+UW0/QGukbTUc515PdAb2zH2hNsVnwHY+pqIzQDNu2xfq/Q5on/e283Gv58bAjQElA+x54Gd9/fnt6qM+oY08Dxjl0hcov6GZYS1klEtfIP6GRsuC7Z2nq9Tf0PhiIV5PTFUCs+qJqXyxIO2J/wIqpNKh4ZBKWwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0xMi0xMVQxMzozODo0MyswMDowMBKrE/0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMTItMTFUMTM6Mzg6NDMrMDA6MDBj9qtBAAAAAElFTkSuQmCC"
                },
                React: {
                    label: "React.js pixelated logo",
                    color: {
                        1: "#139eca"
                    },
                    matrix: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0],
                        [0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0],
                        [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
                        [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
                        [0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0],
                        [0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAAC30lEQVR42u1bO3LjMAx9UtJmRi4ySpncIDfyOdLlCHsE5Rh7i72BW7uKirQepbDpOLCwAEh4ImbwGs6IwIM/AAWAJBAIBEy4X/fv/eZhncaf5musCv0GjwBGjIdxtyr7AqV8rdliBwAYT2MpCvlurAp3OzwDzUvz9zB+/Cv7/N58LDhftfqwF0+COgY4X7X6sBdPgj4GOgBzvso9vzbPEeoY4HzV6sNePGpYfZKT9+Ixo9/0Uz/176XyXjwUcgx0ACzrMyfvxUMgxkDyTa1PcvJePBS3EtF+ajuMmLQ/3HbAAAD36/YPxuZ1j8OYnmuhtSu+B9L6bM1RSnMcrV3/GKB6pfoC3GOA6uWu61q74j+wn2CKAapXqi/JRQyIeqX6AqqPAff3QFr/z9b94dvzNx2P1S6LyIW8eQiqz4XUkPJzWtNKY64dCnNNzK3LdN2XRonnejWxNK8dc+0QmGtizifpui+NEo/W99UuRPN7OmrXd2++7L6Q1qevzZffF6KjFU582X0hrU9fm4/NhS589JibbN8ucpzMfP//fBc1NRMTbAxwPkp9s7Re4Pi0McHHQAdA45vccwkSn2T3CDYGOB8tzXEkPa3dC1hzlaXInWJAW8MuTe4rBjoAllxlIXKnGNDWsEuTa5NPpT7Mdtg97VbbgfshpH4P5Usj5+Pa/lH6XJSv8drj4ua175Fc+63bHhc3b5U32r/x2uPi5rXvkVz7rbWHKcnTeau81X7EgDhvlTfarz4Gbs/2tL7l4Vz+nfL4PebrAMqX5M7yfhNfwqk+IHVE5EI/LVd9LsRC29PMPdMg8WnrhKiJoyZm+LQ1MdsXmtnjmu3X5O5lJT1t/4lD9EajN+rEJyL2yGKPbB7V75GJiHOjzjwUcVZCKx/nRhnEmTlRr1RfQPVn5uLcqKQXMSCg+hiIc6Na+ciFGFSfC6kRdymdeRLiLuXi71JSxJ16Z764U1/NnfpA4JfiE/ncjUvGOa71AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwEqsT/QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0xMi0xMVQxMzozODo0MyswMDowMGP2q0EAAAAASUVORK5CYII="
                },
                Spaces: {
                    label: "Spaces pixelated logo",
                    matrix: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
                        [0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
                        [0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
                        [0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
                        [0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
                        [0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0],
                        [0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 0],
                        [0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 0],
                        [2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2],
                        [2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2],
                        [2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2],
                        [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2],
                        [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2],
                        [0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 0],
                        [0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 0],
                        [0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 0, 0],
                        [0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
                        [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0]
                    ],
                    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAADzElEQVR42u1bMZIUMQzU7O4Dhh/wBBLeQ0ZOSAY/IDuKaO8ZfILiB0dKNh9gh+Q8VHnQtbolzxVVdKJgS9a4ttuWJXuyIrx9s36alvOHXxazd/c1caeyCTzYSzNbbInZLy9q4p6qJmCzmdm0hG0RzlUDvf5pr8zW9+evMfvte03ci+q44/y6ztNyWX9ZzPb+qiZkDbCcH6UJXQOzGcV5ZEXIGmA5P0oTtAY27gLO393b9dHl+ugX0gSrBVoDUe73nFb9EHgNzGYSp1U/AFoDUe73nFb9EMIU8nKdbE6THTc+gYcxOU123LgGZrMhOU1y3LAGPA5nc5rsuOF94La663wKn69/3yei/rIGqvL57Pi6Bqohjh+ewOnd9MOW28dmq79fHR9qwMt9qifQayyaG0ENjFr/q+JgCs1mI8+02ThwHxi1/lfFgRoYtf73UPcDWgPV3M/G4zUwGmQ8OIHR6382HpzAbb3NtlzWZkdPgI33XwPlIOP98xqg9wH2g9i+AZtzDddAtob6/Bro/VkLQOdCbA6UraHKuZB6Dsj2DdiaqasBNT+v7huguL4GZjPpHOD5Za0DVwNqfl7dN0BxdxpA9X/vw6N9A69/YKCP4GlhpwHEYY+LVX1iNv5eA7OZtC4jv6pxOuw0gDjscbGqT8zG3zQQ5bDHxSfOztfH8UNaamdjz6+Pv2kgy2GUM6k5FdqP/mhgNktxOPu7BxB/00CWwyhnUnMqtB9tGmA5jHKe/kPU2ieqF7kaUPu8rL+qBayBHv3vyEb9o3D8XA2ofV7WX9XCpoFo3u9x8YkcJ+Qf/QM8DU0sN9VcyfPP7gen0bkK9I/CiXdmuanmSp5/dj+4sPV/pAVYBxLrTF7cqZqTo+/K9XFP5TkKa1l0/udqTo6+K9fHvai1z+i+gCz7B/TfK2ugYXTtE8XTNdDQ+7M2GU/WQMPo2ieKJ2ugoT/DIqvmQg3lGmBRrbm8Blhk43X+aQ2wqNbcRT2rqlA1551b6PNAFs9/HshCjeN8J30eyKL8PJA9q7JQNeCdW8J1oSpUaYCvC1VBjeP4bRM46k6EGsfzc2uj1ftBuu+8krXRai1U953j/YEqqOMDP9gfqNoPqvvOu/6Atx9kteBxGNWfon7hPrGqhVHcb4j3iVWo4wX9wn1iVQujuN+wuyuR1QLqnVVxv+Hw+0JV3G84/r6Q6u/g8PtCVdxvcO/MIS1E6//Z/gHSjPyG5ig77g3NURZAfkNzlE2/oVH7AOyb+mi/uUf6PXH2rkS2b5B/T+zZan8H6ffE1W/q2dzrN4yIdpfoHOkRAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwEqsT/QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0xMi0xMVQxMzozODo0MyswMDowMGP2q0EAAAAASUVORK5CYII="
                },
                Support: {
                    label: "Support pixelated icon",
                    matrix: [
                        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
                        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
                        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
                        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
                        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
                        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1],
                        [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
                        [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
                        [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1],
                        [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                        [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
                    ],
                    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAADLUlEQVR42u1bO7LbMAxcyW4zw1d4nDK5QW7kc6TLEXIEvWPkFrnBa+UqKtJ6nMJDZUIFAUCAH2e0DYqnJ6yHuxIBUAOUOF3Gr1iGLzeUifOrjs+g/QHnN3wAsGApE68vOj6j9gcgAACWYlGJg/Yf3l3xCRg+D9/KxJ/fC63A6XL+cX57f7ndEbDgXirGPFJeYg+U1n6uF+QeCABKaj+NQog9UFr7Vi+QiJpMo9PtzXlYD1Da1z6vS+XhPRAAODyvS+VhPUBp302jxjzkClDP/Xm6fry+zJMvfSDeV/teID1QS/vWvLQHAoAa2jfmJT1QS/vWvJsVqK39FFovbDzQSvu5PLYeCABaaD+Tx8YDrbSfy2NdgdbaTyH1wuqBXrSfguP12wMBQA/aT8HwWj3Qi/ZTcLyO8cLbfXxoDY84v2JqS/2BeXrwOF3+5Bf/TnqgtfZTUPxoD/QGgh/pgdbaT0HxW1cgfd62JpyC4rd7oBoIfrsHamH3QHMQ/J7eA+ReiJqFaWdYWpAzuLtyL+Q1w9JCy4OvB9JYGkoebD3QS1+I4jFqZ1+l5wNaHkPu7KvWfICLY615LotMHofc2Vet+QAXj+nz9S818QRsa9L4vLa+F9bn/l2XP8ZB2g8q1Tey5h/FGpdep4Ux/0HaDyrVN7LmP0r7QVx/JhfW/IO2DvCuG6z5R7Wmtdd73y+5/qCtA7zrBmv+UVsLe9fO1vy7B2z0M+6XXP//eYDa71P7desCWPPveyHrCux7IWqPsenPFJqhWfOr+0K91MT5faEYvZGZX90X6qUm3vRGKS3+o1Z2hTQ/2RuN4LTYb280IgCoqX1t/oSH+LxQr73RpwF1plr9DU0r8DOy3hEASDzQK9g5ce9g58S9Y/dAazytB7havHsPyM+N9ooAQLMX6g3ic6NekH5vzM3WBLMzAAU84HXmIv/7ASsCAI+aWvh/7h7w2s+rvx+wwuvMhfY7BjcPeJ258PuOTIsAQNPXiVF6HwJuHvA6c6Htwbq9B6gzF1y09mCbe8D6vmjvAS4yaO4B6/vCzQPa3iYXpT3YZnshr/lDu70QF4Vothfy6n3+AiHYpxKci8rjAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwEqsT/QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0xMi0xMVQxMzozODo0MyswMDowMGP2q0EAAAAASUVORK5CYII="
                },
                Svelte: {
                    label: "Svelte.js pixelated logo",
                    color: {
                        1: "#ff3e00"
                    },
                    matrix: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 3, 3, 3, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 3, 3, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 3, 3, 3, 3, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 3, 3, 3, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 3, 3, 3, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 3, 3, 3, 3, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 3, 3, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 3, 3, 3, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAADsklEQVR42u1bMW4bQQwcyWkCRMC5EJQy+YF/pDZfSOcn+AnyM9LlCckL3EpVrnBryEV0Kdaihtwd7jmApiFg75InHOeOnOPeIBnr7ernp2+r8ePdZfv8u87/IvsHbJ7wBcCI8bI93Nb5X2b/AAwAgJHaStxkX//qgDtg8X3x47J9/lXnX34H1tvNn83T5+1kX44YMOLIbLnPG0/OAW/Oqzih58AAwJPzzDoh54A351WcaL4DtTnv5QSL38wBVc7XcqGdAwMARc5blqCZA6qcr+XCh+gFr7fLB4yL+xec7HH5N3dx3u4fsTttvWjX2/P72fWEORDNee/z3PKr58AAIOF53o0D0Zz3Ps8tvzIO/Mv9eM67sN+d58IUd/94fp+bA9l1PYtj+fVzYACQWNfTOAbcHMiu61kcyy/lQEXuN8HigrWecqBX7rO49RwYAPTIfRbXAOVAr9xnccMcYLkffd6/qaFw+flexrX8mhxguR/N+ejzvZ0DAwBlzkf9ONeZHGC5H8356PPdywHzDli96n53+Hq43e+8F856Zav3LddZ/sMcUOU+85vHgSgsP8yvM26YA6rcZ37lHPDmfqs2asW34rk50NrbRntoPQe8KPdFbTC+mwOtvW20h26uhby1yIRo7WTpQJYfK66MA9HaSaUv6ThQrmf72XpnfBkHorWTSl9q5oCVs6xfmHpfEE6kc6BXzZTHgXIdWx/1Q/w1c6BXzZTGgVLHqdWHLD2o+3vg/WijA4Ca90AryrjEr/w90FsbdfcD7LtttF9gft5NT2z5jdZW8/XEll/vOrI+vSe2/EZrK5kuFJ3nmVD2yMxPGgeu2qjXj3Pdf6+Numshs3c1dH42U8FqpvTvA60973zvActG9zM411dzoLXnVb0H3ByYcpbqOWSOyNsvpOlCKu2TIU8bLf8etV4494X7AZX2yZCmjbLeVfY9OVsbzZqh6NcTl/+3bBRBP9U9cdYMhWxeiOUg40JUH2LfF6x9V230qo0SP920UaBxfqiydpJ/J/ZC9R7Rfyf2ovRvWQL5d2IvVO8RmTbqhXeGwqu1zqaNqmqo+bRRZp2YTRtNP0dm6fRRLkTnh6IzedWz01nzQ1GO1c9Oe2Htb/V7QvXsdNb8UJRj9PyAVaNYs9BvbNKZmwmy8wPZOpEF3fmBWtsI2fmBbJ3IAuVAVAdS60QM8nNk2TlfQn+OjFkx5OfIep+1cZ+ljM64ZeV8ieoz9XOdLytRf6Z+ADBDzpeoPlM/1/myEq+waoQlioEYBwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0xMi0xMVQxMzozODo0MyswMDowMBKrE/0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMTItMTFUMTM6Mzg6NDMrMDA6MDBj9qtBAAAAAElFTkSuQmCC"
                },
                Vercel: {
                    label: "Vercel pixelated logo",
                    matrix: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAACSElEQVR42u2WPU7EMBSEJ5scwNyAI9BwHjp6Sjq4AR0SHcfgEogbQEuXC7ChWK0RDsZ+f3GifdOMlMKR9eZ7Y8Dlcrlcp6zO6uDrq+mhG/u7Lxz88XlrF3jHOYAR48Gfzmz+s7O6AAIAdGN0I5ldYHfTfWDc3x99cxfYT/uAcZiObvUfZyCrADgDFRq0D4z7f5pCNw7TFw5+/K7dB+oMpNlPXZsF/QgF4Ff2U1dWr33g5ScugOm2f/nbX990/6c+gXT/W/eBMzBTAJwBgtR6ILf/U9fuAzUGStm3YkGPgQD8m/3UlaTGQCn7ViyoTaC0/636wBmICoAzwJC4B2r3v1UfiBmgZl+bBTkDASBlP3WhxAxQs6/NApsBbva1WWAzIM2+Fgt8BgIgyn7qTLEZkGZfiwX2BKhvH6u3kTPgDAgZIPeA1v7X6gMyA9rZl7JAZyAAqtlPnSgyA9rZl7JAnoD2/pf2gTPgDAgZqO4Bq/0v7YNqBqyzz2WhnoEAmGY/9UpVM2CdfS4L1ROw3v/cPnAGnAEhA8UeWGr/c/ugyMDS2aeyUGYgAItmP/WCigwsnX0qC1kGWmWfykKWgdbZr2Uhz0CaxdaeUZaB1tmvZSE7gaXfPty3kTPgDAgZmPXAWvZ/bR/MGFhb9ksszBlonXUiCzMG1pb9EguzCbTe99Q+cAacASEDsQfWuv9LfRAZWHv2cyz8MNA620wWIgNrz36OhTiB1vud2wfOgDMgZGDYyv7P9UG3teynvmueZaH3W8t+6nC5Tlzfs25uKnwS/loAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMTItMTFUMTM6Mzg6NDMrMDA6MDASqxP9AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwY/arQQAAAABJRU5ErkJggg=="
                },
                Vue: {
                    label: "Vue.js pixelated logo",
                    color: {
                        1: "#35475C",
                        2: "#41b883"
                    },
                    matrix: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2],
                        [2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2],
                        [2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2],
                        [2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2],
                        [0, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 0],
                        [0, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 0],
                        [0, 0, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 0, 0],
                        [0, 0, 0, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 0, 0, 0],
                        [0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0],
                        [0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 1, 1, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfnDAsNJwbuGm+ZAAADRUlEQVR42u2bMW4bMRBFP3e3DUAXRtocwU3Oo859SnfODdwpcCUdw5cIfIOktLot0kqbYvMXCCPucMihlCB8zRj2iuJa/w1HgAQ0Gv837n4zPbmxfzzifN3u5wtvN90TRvd4xHp9268/oXYdaX/u/hs+ABgxnq/PN/NC74XrWA836zegXUfaXwcPAG6MVuIBAKNYJbTrCPvrPx5wB0wP/cv5+vV1XufdAXeAe3Av6/XH6/r+tetI++tO08ljHKZY5RMfJ3iMmKQqvQDadaT9NQeaA4UODKdp8m4cpiPOV/bh7Q47ALjddHNWcb6yz4fnwdL/p/XHv+3n51n6v7A/0QErF6yzn+6AlQvG2U92wMoF6+wnnwNW54F1/08+B5oDzQHhHPiyW/pulfNgmfON+//21/WO/6FaLqRWbfa5j06bOXWmK2Wfl/f8oZYLqVWbfe5j4A1IM1GuC1LVZp+V+1Y7YO2CNvvlDli7UPj8agesXdBmP+pA6nkQZlDq71LVOsj+/4cDWheu5cBzMGN1CPnbHQjow19c+jzI7f9kCG+g1mxkNfuEOESo7UJp9kmHGNpMegAXzD7pY3+o7UJp9smACLVmo9LZJ6TYAa0LpbNPSLkDrL89rt7sE1LsgNaF0tknJOpArdmI1+XOPiEOAtbngVX/Jx0kPHBVBwR66QLr88Cq/5MBAlazkdXsEyI6QEpdsM4+kR0gHihyIXcdAdEBUuqCdfaJ6ADJnY0A29knxNyBWIatZp8QewdYrR8fwdyBWIatZp+QZAdyZyNiNfuEJDtAcvu4df8n6Q4QD1R1QEmyAyS3j1v3f5LsANHORstn3IxmnxC1A0Tb162zT/QOEA+o+rpUM1E7QLR93Tr7JPsVSP0sg/azGFqaA82BQgfU5wDRzkbW/Z9kO0BKXcjNPsl3gHjgGtkn2Q6QUhdys0+yHSC5LpRmnxQ7QGq955Uod4B44JLZJ8UOkFrveSXMXoFLzT4hzYEFDzQHMig+B0jqeWDV/4mZAyT1OzlW2DlAPHCJ7BMzB0jqd3KsMHOAxFywzj4xd4CELlhnn9g7QDxQM/vVb6D75L5jPH1m/eduoNbsE9IciOKB5kCj0Wg0GgI/ATMCDH2CJoL1AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTEyLTExVDEzOjM4OjQzKzAwOjAwEqsT/QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0xMi0xMVQxMzozODo0MyswMDowMGP2q0EAAAAASUVORK5CYII="
                }
            };
            var eF = {
                    src: "/_next/static/media/Analytics.f7fd4e30.png",
                    height: 1600,
                    width: 2520,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAACVBMVEX6+vn19vPn5+eK8peHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAH0lEQVR4nDWJyREAAAxE2P6LzuTyAyiDCSuKX293ggIB+wAU4F9lcgAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                eX = {
                    src: "/_next/static/media/Blog.fd861682.png",
                    height: 1600,
                    width: 2520,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAADFBMVEX5+fnw8PDk5OTZ2dnbyATdAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAIUlEQVR4nDWJwQkAMBCDNNl/5xLKiR8R5eNcWZIUqOMuPAKdAB3hp3dtAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 5
                },
                eW = {
                    src: "/_next/static/media/Develop.66c638f2.png",
                    height: 1600,
                    width: 2520,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAElBMVEX7+/v29/fv+Pnk5OTs6+vGxsb+nvm3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJUlEQVR4nBXJwQkAMBDDMDtJ91+53E8gQCAAtubkakR8u0iYgQ8D7QAyy7WcXwAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                eN = {
                    src: "/_next/static/media/New Pricing.f7937712.png",
                    height: 1600,
                    width: 2520,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAADFBMVEX7+/v09PTs7O7k5OTrLtP/AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAIUlEQVR4nD3GsQ0AMBCEMOD23znFS3Fl+No2bwSokWD3BwM8ACf5Kj5JAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 5
                },
                eZ = {
                    src: "/_next/static/media/Goodbye.9985a97b.png",
                    height: 1600,
                    width: 2520,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEX6+vry8vI5SIo+AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAFklEQVR4nGNgYGRkgAIEiwGJhWAyAAAA8AAIGpDhvwAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                eP = {
                    src: "/_next/static/media/Contact.ae4b4c51.png",
                    height: 1600,
                    width: 2520,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAD1BMVEX6+vr19vf8/Pzl5eXw8fH65dnaAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAIklEQVR4nC3GwREAMAjDMDuw/8wctHoJIOFY9YL+BLZtqwwCQAAdSSlMLwAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                eG = {
                    src: "/_next/static/media/Icons.7063d4de.png",
                    height: 2688,
                    width: 2688,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAABlBMVEX19fX7+/u14ocOAAAACXBIWXMAACxLAAAsSwGlPZapAAAAHUlEQVR4nGNghAIGRgYwQGGAxFEZUCkoAEuAtQMABQIAIhPzVwUAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                eY = {
                    src: "/_next/static/media/Inspiration.199489db.png",
                    height: 1050,
                    width: 2229,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAARVBMVEXrTQA9UYH2zIHuZRz/jU06Wpi/dlf8dSj/fjJqf61veIXvZBvVmIDQkndybmBWXWVTUEHLu6ODe3E4OC2CbUJAMhAdGghQ7XLJAAAACXRSTlP+/////////v4HKoILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nGPgE+Di5ORlZ2EQFuNnZGVjYGYQERUCMbgZmJgEOTl5OFgAFuwBK/e5iDwAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 4
                },
                eJ = {
                    src: "/_next/static/media/Home.6c255c2f.png",
                    height: 1600,
                    width: 2520,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAARVBMVEX09PPp/Po3RUkTDgpoaWmZnJnk5uLc2tY/Ojq1tbUSFA7t4t7U0c+ipaX/7+DD39aAgYLBwMBZXFxYSUb60rNTSUj+/fl7YeJcAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMElEQVR4nAXBhwEAIAgDsKog4N7/n2oCiCCXGPFOd00cYMzV2CY0peCDLpDfl5TGBxzTAVYEUNIPAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 5
                },
                eq = {
                    src: "/_next/static/media/Comparison.4352d137.png",
                    height: 1534,
                    width: 1344,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAElBMVEX5+fn18/Lz6+To7/LS2Mrfv6P+g5z/AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKElEQVR4nDWJwQ0AIBCDoKf7r2walU9TQKW4FwmQwe4ITfN+crtWfQ4H8gA4mH+hOgAAAABJRU5ErkJggg==",
                    blurWidth: 7,
                    blurHeight: 8
                },
                eK = {
                    src: "/_next/static/media/isometric.5d3d803e.png",
                    height: 1310,
                    width: 1704,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAMFBMVEUbGxoYFxckJCIrLCuIiIfT0tLj6elfbHKdX0+8vLv128tIYFVBQUCHanBqqaHa3dtRw2ldAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nBXJyQ3AMAzAMMl27rb7j1vkR4AIGSAQ8x1xUbt9KT6t9wOYteqGmiH+EEsAl+tTn/4AAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 6
                },
                e$ = {
                    src: "/_next/static/media/globe.397d8824.jpg",
                    height: 3e3,
                    width: 6e3,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAaEAADAAMBAAAAAAAAAAAAAAAAAQIDESGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJAs9xc5kpdqt7qU0/HxgAQ//9k=",
                    blurWidth: 8,
                    blurHeight: 4
                },
                e_ = {
                    src: "/_next/static/media/graph.6ecbe948.jpg",
                    height: 3e3,
                    width: 6e3,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAZEAEAAwEBAAAAAAAAAAAAAAABAAIDERL/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABcRAQEBAQAAAAAAAAAAAAAAAAEAAiH/2gAMAwEAAhEDEQA/AJQ3dUztzxUeARER9Hacb//Z",
                    blurWidth: 8,
                    blurHeight: 4
                },
                e0 = {
                    src: "/_next/static/media/orbits.fca49604.jpg",
                    height: 3e3,
                    width: 6e3,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAABBQEBAAAAAAAAAAAAAAABAAIDBBEhMf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAXEQADAQAAAAAAAAAAAAAAAAAAAjEy/9oADAMBAAIRAxEAPwCW2YY67bDWNBEYGb30IiJNQpk//9k=",
                    blurWidth: 8,
                    blurHeight: 4
                },
                e1 = {
                    src: "/_next/static/media/visuals.2fbebe9d.png",
                    height: 2152,
                    width: 2156,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAACVBMVEX9/v739vfu7u7KG8QEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nGNgYmJiBGEGKIYwGBkZGRlAAMyA8kBSTIwgGhMAAApDADS+Cr+sAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                },
                e7 = i(7138),
                e6 = i.n(e7),
                e2 = {
                    src: "/_next/static/media/henry.f8ae6d4e.png",
                    height: 512,
                    width: 512,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEX///9sV0+rfWvV0dC4opqMaVyZl5fKyMj9+/qDX1IWExPBmIdEPjy/trRVQDnjwrTUn4fz18rAhnO0jX50XFPv7+9XVFU3Ly4Pi4qgAAAACXBIWXMAACE4AAAhOAFFljFgAAAAOklEQVR4nB2Lxw0AIBDDQufonf03RZw/sRQZAJwDYwvlv16YplkMycqXptFZlJgewLZJxp+lEFa8Rz0oMgF7JkNdDwAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                e4 = {
                    src: "/_next/static/media/rauno.fbee6eca.jpeg",
                    height: 512,
                    width: 512,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAfEAABBAEFAQAAAAAAAAAAAAABAAIDBAUGISIxQcH/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//EABoRAAICAwAAAAAAAAAAAAAAAAIDAAEREjH/2gAMAwEAAhEDEQA/AI3Mbe1FC+Y5KtC66C+IOdyl7IYfANh9REU2mSy1HkUqCxzdT//Z",
                    blurWidth: 8,
                    blurHeight: 8
                },
                e3 = {
                    src: "/_next/static/media/glenn.fbc56426.jpeg",
                    height: 512,
                    width: 512,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAbEAADAAIDAAAAAAAAAAAAAAAAAQIEESEiUf/EABUBAQEAAAAAAAAAAAAAAAAAAAUG/8QAHREAAQQCAwAAAAAAAAAAAAAAAgABAwQREhMxQf/aAAwDAQACEQMRAD8AjrIhTEtLvdSveNAAXrGR7Z8dTt2II+PVuxZf/9k=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                e5 = {
                    src: "/_next/static/media/al.aa686c2f.jpeg",
                    height: 512,
                    width: 512,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAABBAICAwAAAAAAAAAAAAACAAEDBQQGITERFFH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/EABgRAQEAAwAAAAAAAAAAAAAAAAEAAgMR/9oADAMBAAIRAxEAPwCTY6pbVGoDmZFaPvAbzykErE4RccE31vHTdIiI68Sl43//2Q==",
                    blurWidth: 8,
                    blurHeight: 8
                };

            function e8() {
                return (0, n.jsxs)(l.k, {
                    "aria-label": "Three rows of data represent metrics for their respective columns: Conformance and Code Owners.",
                    className: e6().root,
                    direction: "row",
                    role: "img",
                    children: [(0, n.jsxs)(l.k, {
                        "aria-hidden": !0,
                        direction: "column",
                        className: e6().column,
                        children: [(0, n.jsx)(d.x, {
                            as: "div",
                            className: e6().heading,
                            size: 14,
                            weight: 500,
                            children: "Conformance"
                        }), (0, n.jsxs)(l.k, {
                            direction: "column",
                            className: e6().conformance,
                            style: {
                                gap: "var(--gap)"
                            },
                            children: [(0, n.jsx)(te, {
                                score: "9.5",
                                title: "Excellent",
                                children: (0, n.jsxs)("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    className: e6().gauge,
                                    children: [(0, n.jsx)("g", {
                                        clipPath: "url(#clip0_1735_115302)",
                                        children: (0, n.jsx)("path", {
                                            d: "M10 1.5C12.02 1.5 13.9739 2.21936 15.5117 3.52917C17.0494 4.83897 18.0704 6.6536 18.3918 8.64785C18.7131 10.6421 18.3137 12.6856 17.2652 14.4121C16.2167 16.1386 14.5876 17.4353 12.6699 18.0698C10.7521 18.7043 8.67113 18.6351 6.7998 17.8746C4.92846 17.1141 3.38913 15.712 2.45767 13.9196C1.5262 12.1272 1.2635 10.0617 1.71663 8.09321C2.16977 6.12473 3.30912 4.38195 4.93051 3.17723",
                                            stroke: "#45DEC4",
                                            strokeWidth: "3",
                                            strokeLinecap: "round"
                                        })
                                    }), (0, n.jsx)("defs", {
                                        children: (0, n.jsx)("clipPath", {
                                            id: "clip0_1735_115302",
                                            children: (0, n.jsx)("rect", {
                                                width: "20",
                                                height: "20",
                                                fill: "white"
                                            })
                                        })
                                    })]
                                })
                            }), (0, n.jsx)(te, {
                                score: "34",
                                title: "Total Issues"
                            }), (0, n.jsx)(te, {
                                score: "12",
                                title: "Major Issues"
                            })]
                        })]
                    }), (0, n.jsx)("hr", {
                        "aria-hidden": !0
                    }), (0, n.jsxs)(l.k, {
                        "aria-hidden": !0,
                        direction: "column",
                        className: e6().column,
                        children: [(0, n.jsx)(d.x, {
                            as: "div",
                            className: e6().heading,
                            size: 14,
                            weight: 500,
                            children: "Code Owners"
                        }), (0, n.jsxs)(l.k, {
                            direction: "column",
                            style: {
                                gap: "var(--gap)"
                            },
                            children: [(0, n.jsx)(e9, {
                                title: "/design",
                                users: [e5, e3, e4]
                            }), (0, n.jsx)(e9, {
                                title: "/eng",
                                users: [e4, e2, e3]
                            }), (0, n.jsx)(e9, {
                                title: "/marketing",
                                users: [e2, e3, e5]
                            })]
                        })]
                    })]
                })
            }

            function e9(e) {
                let {
                    title: t,
                    users: i
                } = e;
                return (0, n.jsxs)(l.k, {
                    align: "center",
                    className: e6().score,
                    direction: "row",
                    gap: 1,
                    justify: "between",
                    children: [(0, n.jsxs)(d.x, {
                        as: "span",
                        color: "gray11",
                        size: 12,
                        lineHeight: 16,
                        children: [(0, n.jsx)("span", {
                            className: e6().scope,
                            children: "@vercel"
                        }), t]
                    }), (0, n.jsx)(l.k, {
                        children: i.map((e, t) => (0, n.jsx)(o(), {
                            quality: "75",
                            alt: "Avatar",
                            src: e,
                            width: "48",
                            height: "48",
                            placeholder: "blur",
                            className: e6().avatar,
                            style: {
                                marginLeft: 0 === t ? 0 : -8
                            }
                        }, t))
                    })]
                })
            }

            function te(e) {
                let {
                    children: t,
                    title: i,
                    subtitle: a,
                    score: s
                } = e;
                return (0, n.jsxs)(l.k, {
                    align: "center",
                    className: e6().score,
                    "data-label": i,
                    direction: "row",
                    gap: 1,
                    justify: "between",
                    children: [(0, n.jsxs)(l.k, {
                        direction: "column",
                        children: [i ? (0, n.jsx)(d.x, {
                            as: "div",
                            className: e6().title,
                            color: a ? "gray12" : "gray11",
                            size: a ? 13 : 12,
                            lineHeight: 16,
                            children: i
                        }) : null, a ? (0, n.jsx)(d.x, {
                            as: "div",
                            className: e6().subtitle,
                            color: "gray11",
                            size: 12,
                            lineHeight: 16,
                            children: a
                        }) : null]
                    }), (0, n.jsxs)(l.k, {
                        align: "center",
                        direction: "row",
                        gap: 1,
                        children: [t, (0, n.jsx)(d.x, {
                            as: "div",
                            className: e6().scoreTitle,
                            size: 16,
                            weight: 500,
                            lineHeight: 16,
                            children: s
                        })]
                    })]
                })
            }
            var tt = i(425);

            function ti() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        author: "Rauno",
                        children: "Hero Composition"
                    }), (0, n.jsxs)(k, {
                        children: ["The hero visual is composed of multiple stacked layers of CSS, SVG, and progressively a shader. It does not rely on any client side code to display the essence of it, such as rendering a ", (0, n.jsx)(E, {
                            children: "canvas"
                        }), " element. The reason why this is important is to have a fast initial paint on the screen for something so crucial and center stage."]
                    }), (0, n.jsx)(M, {
                        src: (0, C.jj)("vercel/hero.mp4")
                    }), (0, n.jsx)(k, {
                        children: "In descending order, the layer stacking order looks something like this:"
                    }), (0, n.jsxs)("ol", {
                        children: [(0, n.jsx)("li", {
                            children: "Heading"
                        }), (0, n.jsx)("li", {
                            children: "SVG triangle"
                        }), (0, n.jsx)("li", {
                            children: "CSS grid lines"
                        }), (0, n.jsx)("li", {
                            children: "SVG rays"
                        }), (0, n.jsx)("li", {
                            children: "CSS rainbow gradient"
                        }), (0, n.jsx)("li", {
                            children: "GLSL shader"
                        })]
                    }), (0, n.jsx)(R, {
                        src: eK,
                        sizes: "50vw",
                        quality: "100",
                        alt: "6 stacked layers of an interface are placed on a 3D plane at a 14 degree angle: shader, gradient, rays, grid, triangle, and heading."
                    }), (0, n.jsx)(k, {
                        children: "With layering we can progressively enhance the hero with a GLSL shader that gracefully fades in after the page has loaded. The async nature of the shader also allows us to code split it, perform light hardware detection to not render it at all on low powered devices while still retaining the core of the visual."
                    }), (0, n.jsx)(M, {
                        src: (0, C.jj)("vercel/hero-load.mp4")
                    })]
                })
            }

            function tn() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        author: "Glenn",
                        children: "Aesthetic Foundation"
                    }), (0, n.jsx)(k, {
                        children: "The new homepage is a sum of many parts. This year, Basement created our own typeface family. The goal was for beautiful, Swiss inspired design with optimisation for displays; chiefly to be used on our interface, documentation and code blocks. Icons are a often a precursor to text, so we also designed our own iconography set to pair with it. Add in a significant upgrade of our design system to supply us a wealth of new interface solutions, and there were three new common components to roll out across the site."
                    }), (0, n.jsx)(R, {
                        src: eG,
                        sizes: "50vw",
                        alt: "Various user interface icons are displayed in a 1 to 1 aspect ratio formation."
                    }), (0, n.jsx)(k, {
                        children: "It felt apt to use these and chart ourselves new territory at the same time. What would pair best with a Grotesque sans-serif? We looked at the history of the Swiss design movement and fell in love with the raw exposure to the creation of design; blocks, grids, modularity. At its core Vercel is an infrastructure for frameworks, so the metaphor of showing a literal frame on every page became a hallmark to rally around."
                    }), (0, n.jsx)(R, {
                        src: eY,
                        sizes: "50vw",
                        alt: "Three Swiss design posters with grids, big typography, and blocks."
                    }), (0, n.jsxs)(k, {
                        children: ["At the same time, Vercel is about speed. Having a consistent grid position across all pages as a user navigates through helps the user see what content swaps out, and how quickly. It lessens the appearance of a pseudo “layout shift” happening between views, and highlights incredible performance of server rendering. With this in mind, we dabbled with a set of early ideas about how the “hero” could capture this rigidity but still allow creativity. The pitch to ", (0, n.jsx)(B, {
                            href: "https://twitter.com/rauchg",
                            children: "@rauchg"
                        }), " ended up being a series of ideas that will come to life in the following months:"]
                    }), (0, n.jsx)(ts, {
                        slides: [{
                            src: eF,
                            alt: "The analytics website for Vercel. It displays a graph on a grid."
                        }, {
                            src: eW,
                            alt: "The infrastructure website for Vercel. RGB colored rays are beaming over a 3D perspective grid."
                        }, {
                            src: eP,
                            alt: "The contact website for Vercel. A message bubble is centered on a grid, illustrating a conversation."
                        }, {
                            src: eX,
                            alt: "The blog website for Vercel. Three columns display different blog posts with pixelated icons, a title, and subtitle."
                        }, {
                            src: eN,
                            alt: "The pricing website for Vercel. Three plans are displayed in a column: Hobby, Pro, Enterprise."
                        }, {
                            src: eZ,
                            alt: 'A concept website for Vercel. The sentence "say goodbye to your slow app" is displayed on a grid with each word descending in row position.'
                        }]
                    }), (0, n.jsx)(k, {
                        children: "What came out of this ideation is a signature hero, and set of columns to act as content guides for the rest of the page. To help guide the eye at certain points, we opted for crosshairs inspired by traditonal print center marks. At 1080 wide, the grid also helps each column of 360 have a readable line-length for 14-16px text. Given the modularity of everything being a block, it also collapses nicely into mobile. This empowers our design and engineering teams to roll out pages with a strong identity, consistency and speed."
                    }), (0, n.jsx)(k, {
                        children: 'Combined with the slightly curious prompt of "What will you ship?", we related to representing the full spectrum of the color wheel in the hero gradient as a metaphor for creativity.'
                    }), (0, n.jsx)(R, {
                        src: eJ,
                        sizes: "50vw",
                        alt: "The Vercel home page in light and dark mode in 3 viewport sizes: 1440px, 1024px, and 400px."
                    }), (0, n.jsxs)(k, {
                        children: ["As the design of this project commenced directly after ", (0, n.jsx)(B, {
                            href: "https://twitter.com/rauchg",
                            children: "@rauchg"
                        }), "'s", " ", "Figma Config 2023 talk, we also made use of Figma’s new variables feature throughout the entire system. This meant content div sizing, column sizing, inner paddings, and margins between sections were all set up to adapt when dragged between desktop, tablet and mobile size classes."]
                    }), (0, n.jsxs)(k, {
                        children: ["Color variables are also rife throughout — we adopted ", (0, n.jsx)(B, {
                            href: "https://twitter.com/kevinrupert",
                            children: "@kevvy"
                        }), "'s new Vercel color system, optimized for accessibility, as color variables. With these new tools, the entire team can see pages adapted to dark mode at different sizes in seconds, rather than minutes."]
                    })]
                })
            }

            function ta() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        author: "Rauno",
                        children: "Visual Rhythm"
                    }), (0, n.jsx)(k, {
                        children: "Using an accent color for call-to-action buttons and other important elements has become an industry standard. If every element made repetitive use of a strong accent color, the color would no longer feel as significant."
                    }), (0, n.jsx)(k, {
                        children: "For a consistent rhythm, we not only made deliberate effort not to overuse the grid and cross aesthetic. Subconsciously, we also made use of white space for a consistent rhythm in animation. When every element on a given section is signalling itself as novel or attractive, the novelty is diminished."
                    }), (0, n.jsx)(k, {
                        children: "For example, consider this map of highlighted sections that either respond with motion to input or move independently. Orange sections signal high novelty, like the graph tooltip animating a long distance or icons pixelating on hover. Blue sections represent low novelty micro-animations like floating cursors or scaling icons on hover."
                    }), (0, n.jsx)(R, {
                        src: eq,
                        sizes: "50vw",
                        alt: "The entire Vercel home page is displayed in two columns. Sections with high motion novelty are highlighted in orange, and sections in low motion novelty in blue."
                    }), (0, n.jsx)(k, {
                        children: "Scrolling through the page creates a consistent pattern of featuring an interlude following each animation segment. In this graphic, high novelty animations never appear consecutively between sections, but may be paired with lower novelty animations."
                    })]
                })
            }

            function ts(e) {
                let {
                    slides: t
                } = e, [i, s] = a.useState(0), r = t[i];
                return a.useEffect(() => {
                    let e = setInterval(() => {
                        s(e => e === t.length - 1 ? 0 : e + 1)
                    }, 1e3);
                    return () => {
                        clearInterval(e)
                    }
                }, [t]), (0, n.jsx)(R, {
                    sizes: "50vw",
                    placeholder: "blur",
                    src: r.src,
                    alt: r.alt
                })
            }

            function tr() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        author: "Rauno",
                        children: "Accessible Code Blocks"
                    }), (0, n.jsx)(k, {
                        children: "We invested a lot of care into accessibility and went over the page with VoiceOver dozens of times to make sure we design the website for everyone as best as we could. VoiceOver is a screen reader that helps folks with visual impairements to understand the page and receive auditory feedback of text, images, and any other elements on a given page."
                    }), (0, n.jsxs)(k, {
                        children: ["On the home page, we display a block of code. We had a component from our design system to pull in for this. Though, navigating the section together with ", (0, n.jsx)(B, {
                            href: "https://twitter.com/johnphamous",
                            children: "@johnphamous"
                        }), " we found that the experience could be more deliberate."]
                    }), (0, n.jsx)(k, {
                        children: "A couple of issues that surfaced were:"
                    }), (0, n.jsxs)("ul", {
                        children: [(0, n.jsx)("li", {
                            children: 'The file icon is non-descriptive, it just says "image"'
                        }), (0, n.jsx)("li", {
                            children: "The copy button does not audibly describe it's purpose nor provide feedback on press"
                        }), (0, n.jsx)("li", {
                            children: "The line numbers are road blocks of noise and can be confused with being part of the code"
                        })]
                    }), (0, n.jsx)(M, {
                        src: (0, C.jj)("vercel/code-block-bad.mp4"),
                        videoStyle: {
                            transform: "scale(1.005)"
                        }
                    }), (0, n.jsxs)(k, {
                        children: ["Most of the fixes were trivial: we could hide the icon with ", (0, n.jsx)(E, {
                            children: "aria-hidden"
                        }), " since the file name already includes the file type. And place an ", (0, n.jsx)(E, {
                            children: "aria-label"
                        }), " on the copy button."]
                    }), (0, n.jsxs)(k, {
                        children: ["On copying the code, we also want to make sure to provide auditory feedback that the code indeed was successfully copied. We can use", " ", (0, n.jsxs)(B, {
                            href: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions",
                            children: [" ", "ARIA live regions"]
                        }), " ", "to expose dynamic content changes to screen readers. In this case, we want to conditionally render a message:"]
                    }), (0, n.jsx)(eI, {
                        language: "tsx",
                        children: '\n<>\n  {isCopied && (\n    <div\n      // We are showing a message, so `log` is appropriate\n      role="log"\n      // The update is low priority, and should report when the user is idle\n      // For compatibility we can explicitly set this\n      aria-live="polite"\n      // Hide the element visually, but don\'t\n      // use `display` or `visibility` for this\n      className="visually-hidden"\n    >\n      Copied code to clipboard\n    </div>\n  )}\n</>\n        '
                    }), (0, n.jsxs)(k, {
                        children: ["Since the block of code on the given page is complementary, we can also make the tag into an ", (0, n.jsx)(E, {
                            children: "aside"
                        }), ", and give it a label that describes what the code does at a high level. This way someone could decide to either skip the section or dive deeper:"]
                    }), (0, n.jsx)(eI, {
                        language: "tsx",
                        children: '\n<aside \n  aria-label="This is a code block of a React Server Component. \n  The component is an async function that reads data directly \n  from a SQL function in the render block of the component."\n>\n  {...}\n</aside>\n        '
                    }), (0, n.jsx)(k, {
                        children: "The line numbers are self-incrementing pseudo elements. Here's a quick example:"
                    }), (0, n.jsx)(eI, {
                        language: "css",
                        children: "\n.code { counter-reset: line; }\n.line { counter-increment: line; }\n.line:before { content: counter(line); }\n"
                    }), (0, n.jsxs)(k, {
                        children: ["Now, since there's no DOM element rendered we can't just throw ", (0, n.jsx)(E, {
                            children: "aria-hidden"
                        }), " on it. Instead, theres a second value for ", (0, n.jsx)(E, {
                            children: "content"
                        }), " which is alternative text for pseudo elements. By setting the content to an empty string we effectively are saying that nothing should be announced for this element:"]
                    }), (0, n.jsx)(eI, {
                        language: "css",
                        children: '\n.line:before {\n  content: counter(line) / "";\n}\n      '
                    }), (0, n.jsx)(k, {
                        children: "When all of these improvements are combined, we end up receiving more information from a screen reader. And not only for a single page, but for every piece of code that we present as the component powers hundreds of examples."
                    }), (0, n.jsx)(M, {
                        src: (0, C.jj)("vercel/code-block-good.mp4"),
                        videoStyle: {
                            transform: "scale(1.005)"
                        }
                    })]
                })
            }

            function to() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        author: "Rauno",
                        children: "Orbit Rings"
                    }), (0, n.jsxs)(k, {
                        children: ["One of the animations on the website shows 3 orbit rings intersecting with icons moving along the rings. There's a really neat CSS property available called", " ", (0, n.jsx)(B, {
                            href: "https://developer.mozilla.org/en-US/docs/Web/CSS/offset-path",
                            children: "offset-path"
                        }), " that helps translate any arbitrary element on a given path."]
                    }), (0, n.jsx)(M, {
                        src: (0, C.jj)("vercel/orbit-rings.mp4"),
                        alt: "Three interactive elements display a blue focus ring that adheres to the radius"
                    }), (0, n.jsxs)(k, {
                        children: ["What I didn't realise was that the value of this property does not only have to be a SVG path — it can also be its containing bounding box. By setting ", (0, n.jsx)(E, {
                            children: "offset-path"
                        }), " to ", (0, n.jsx)(E, {
                            children: "content-box"
                        }), " the element will not only use the parent as its trajectory — it will additionally respect the radius of the parent element."]
                    }), (0, n.jsx)(k, {
                        children: "Here's a tiny example of this property in action:"
                    }), (0, n.jsx)(eI, {
                        language: "css",
                        render: '\n <div class="orbitExample">\n    <span />\n  </div>\n      ',
                        children: "\n.ring {\n  width: 200px;\n  height: 200px;\n  border: 1px solid #666;\n  border-radius: 50%;\n}\n\n.ring .ball {\n  width: 24px;\n  height: 24px;\n  background: dodgerblue;\n  border-radius: 50%;\n  // highlight-next-line\n  offset-path: content-box;\n  // highlight-next-line\n  offset-distance: 0%;\n  position: absolute;\n  animation: animate 5s linear infinite;\n}\n\n@keyframes animate {\n  to {\n    // highlight-next-line\n    offset-distance: 100%;\n  }\n}\n        "
                    }), (0, n.jsxs)(k, {
                        children: ["As of 2023, sadly ", (0, n.jsx)(E, {
                            children: "content-box"
                        }), " does not produce desirable results in Safari and Firefox. However, since 12/12 Safari 17.2 has now updated their ", (0, n.jsx)(E, {
                            children: "offset-path"
                        }), " implementation! I can confirm that using", " ", (0, n.jsx)(E, {
                            children: "offset-path: content-box"
                        }), " works well."]
                    }), (0, n.jsxs)(k, {
                        children: ["Alternatively, we could also provide ", (0, n.jsx)(E, {
                            children: "circle()"
                        }), " as a value for a similar result but likewise, this does not have", " ", (0, n.jsx)(B, {
                            href: "https://caniuse.com/mdn-css_properties_offset-path_basic-shape",
                            children: "cross-browser support yet"
                        }), "."]
                    }), (0, n.jsx)(eI, {
                        language: "css",
                        children: "offset-path: circle(100px at center);"
                    }), (0, n.jsx)(k, {
                        children: "The only workaround I found meanwhile works well for circular trajectories. Basically we can construct a circle as a SVG path from a given size (200px):"
                    }), (0, n.jsx)(eI, {
                        language: "css",
                        children: 'offset-path: path("M 100 0 A 100 100 0 1 1 100 200 A 100 100 0 1 1 100 0");'
                    }), (0, n.jsxs)(k, {
                        children: ["To make it dynamic, we can create this from a React component that takes a ", (0, n.jsx)(E, {
                            children: "size"
                        }), " prop."]
                    })]
                })
            }

            function tA() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        author: "Rauno",
                        children: "Cinematography"
                    }), (0, n.jsx)(k, {
                        children: "For showcasing our work I shot a video and a few stills for use in media or our portfolios. One of them includes practical cinematography of the design. I don't have a lot of sage, creative wisdom to share here how to make a video like this, as I was learning myself while making. It's mostly a painful, repetitive process between shooting, editing, re-shooting and editing again. In the end, I am still not completely happy with it."
                    }), (0, n.jsx)(M, {
                        src: (0, C.jj)("vercel/mini-compressed.mp4")
                    }), (0, n.jsx)(k, {
                        children: "I used the Sony A7 III, and Tamron 28-75mm for the lens. Most of the shots were shot handheld with a slow motion setting on the camera. This makes jitter less noticeable, especially when combined with Final Cut Pro's stabilization. I also found it helpful to try and not move the camera with your hands so much, but more so your entire body as if the camera was a part of it."
                    }), (0, n.jsx)(k, {
                        children: "The camera captures the display of a iPad Pro where the website runs on localhost for any modifications. Sometimes I would remove certain elements for a better scene, like while filming the grid."
                    }), (0, n.jsxs)(k, {
                        children: ["I did not capture the website through Safari. Instead, to get rid of the chrome of Safari, two meta tags were useful to add the website in stand-alone mode to the home screen:", " "]
                    }), (0, n.jsx)(eI, {
                        language: "html",
                        children: '\n<meta name="apple-mobile-web-app-capable" content="yes">\n<meta name="apple-mobile-web-app-status-bar-style" content="black">\n      '
                    }), (0, n.jsx)(k, {
                        children: "For stills, I got good results with long-exposure photography which made for some really cool overlaying visuals when capturing interactions:"
                    }), (0, n.jsx)(ts, {
                        slides: [{
                            src: e$,
                            alt: "A 2D perspective globe composed of grid lines is captured from a low-angle with a shallow depth of field"
                        }, {
                            src: e_,
                            alt: "The dynamic movement of graph lines is captured in a long-exposure shot, creating overlaying line traces of color"
                        }, {
                            src: e0,
                            alt: "The dynamic movement of orbit rings is captured in a long-exposure shot, creating overlaying circular rays of color"
                        }]
                    })]
                })
            }

            function tl() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        author: "Rauno",
                        children: "Reduced Motion"
                    }), (0, n.jsx)(k, {
                        children: "Animations on the home page will also respect reduced motion, where applicable. Looping complimentary animations get special treatment on the page, and are paused. Interactions are explicit inputs which we don't intentionally reduce since none of them produce any extravagant, amplified effects or movement."
                    }), (0, n.jsx)(k, {
                        children: "A good example where we can pause is this looping cursor and caret animation:"
                    }), (0, n.jsx)(M, {
                        src: (0, C.jj)("vercel/animation-pause.mp4")
                    }), (0, n.jsxs)(k, {
                        children: ["These are animated with CSS keyframes and we can pause them gracefully by using the", " ", (0, n.jsx)(E, {
                            children: "animation-play-state"
                        }), " property, instead of abruptly interrupting the animation by setting it to", " ", (0, n.jsx)(E, {
                            children: "none"
                        }), "."]
                    }), (0, n.jsx)(eI, {
                        language: "css",
                        children: "\n@media (prefers-reduced-motion: reduce) {\n  .cursor, .caret {\n    animation-play-state: paused;\n  }\n}\n      "
                    }), (0, n.jsx)(k, {
                        children: "And finally, a detail that no one sane has any reason to ever notice—we can make sure that the caret blink does not pause in a state where it becomes invisible."
                    }), (0, n.jsx)(eI, {
                        language: "css",
                        children: "\n@media (prefers-reduced-motion: reduce) {\n  .cursor, .caret {\n    animation-play-state: paused;\n  }\n\n  // highlight-next-line\n  .caret {\n    // highlight-next-line\n    opacity: 1 !important;\n    // highlight-next-line\n  }\n}\n      "
                    })]
                })
            }

            function tc() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Acknowledgments"
                    }), (0, n.jsx)(k, {
                        children: "In no particular order, kudos to everyone else who contributed to the 2023 Vercel Homepage:"
                    }), (0, n.jsxs)(A.x, {
                        as: "ul",
                        css: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
                        },
                        children: [(0, n.jsx)("li", {
                            children: "Alasdair Monk"
                        }), (0, n.jsx)("li", {
                            children: "Elliot Johnson"
                        }), (0, n.jsx)("li", {
                            children: "Emil Kowalski"
                        }), (0, n.jsx)("li", {
                            children: "Evil Rabbit"
                        }), (0, n.jsx)("li", {
                            children: "Genny Davila"
                        }), (0, n.jsx)("li", {
                            children: "Greta Workman"
                        }), (0, n.jsx)("li", {
                            children: "Guillermo Rauch"
                        }), (0, n.jsx)("li", {
                            children: "Hannah Gates"
                        }), (0, n.jsx)("li", {
                            children: "John Phamous"
                        }), (0, n.jsx)("li", {
                            children: "Lee Robinson"
                        }), (0, n.jsx)("li", {
                            children: "Morgane Palomares"
                        }), (0, n.jsx)("li", {
                            children: "Peri Langlois"
                        }), (0, n.jsx)("li", {
                            children: "Shu Ding"
                        }), (0, n.jsx)("li", {
                            children: "Thom Crowe"
                        })]
                    }), (0, n.jsx)(k, {
                        children: "No artificial intelligence was used to generate content for this project."
                    })]
                })
            }

            function td() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        author: "Henry",
                        children: "Grid System"
                    }), (0, n.jsx)(k, {
                        children: "After the initial designs were signed off we very quickly recognized the pivotal role of the grid and knew its foundation would be a key to our success. It was imperative for us to craft a grid system that seamlessly combined performance, responsiveness, and a strong DX while offering a suite of out of the box defaults to cater to common layout needs. We wanted to create a grid system component that could be used to build out entire pages of grid based layouts:"
                    }), (0, n.jsx)(eI, {
                        language: "tsx",
                        children: "\n{/* The system is only rendered at the root of the page */}\n<Grid.System guideWidth={1}>\n  <Grid columns={3} rows={3}>\n    {/* \n      Each cell can contain arbitrary JSX, and will render \n      grid lines automatically\n    */}\n    <Grid.Cell column={1} row={1}>1</Grid.Cell>\n    <Grid.Cell column={2} row={2}>2</Grid.Cell>\n    <Grid.Cell column={3} row={3}>3</Grid.Cell>\n    {/* Crosses can be set between the intersection of cells */}\n    <Grid.Cross column={1} row={1} />\n    <Grid.Cross column={-1} row={-1} />\n  </Grid>\n</Grid.System>\n        "
                    }), (0, n.jsx)(k, {
                        children: "The actual implementation of this component turned out to be anything but straight forward. The first significant hurdle emerged when it came to a crucial design element of the grid—drawing grid lines. Drawing guides even for a simple grid is an incredibly non-trivial task. The most common method involves bordering every child in the grid on two adjacent perpendicular sides, such as the right and bottom sides. Assuming every cell in the grid is filled, the result will have properly drawn guides but will lack the top and left borders on the grid itself. To address this issue, we can simply add a top and left border on the grid and voila, we have a grid with guides."
                    }), (0, n.jsx)(eI, {
                        language: "css",
                        render: '\n <div class="simpleGridExample1">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n      ',
                        children: "\n\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 50px);\n  border: 2px solid #666;\n  border-right: none;\n  border-bottom: none;\n}\n\n.grid > div {\n  border: 2px solid  #666;\n  border-left: none;\n  border-top: none;\n}\n        "
                    }), (0, n.jsx)(k, {
                        children: "For simple grids, this method works well. However, it quickly falls apart as soon as you begin to stray away from this basic model. For example, a major drawback of this method is that it requires every cell to be filled in the grid. For the above grid the markdown looks like this:"
                    }), (0, n.jsx)(eI, {
                        language: "tsx",
                        children: '\n <div className="grid">\n  <div />\n  <div />\n  <div />\n  <div />\n  <div />\n  <div />\n  <div />\n  <div />\n  <div />\n</div>\n        '
                    }), (0, n.jsx)(k, {
                        children: "We don't always want to explicitly define and fill each cell with content. The grid component already knows how many rows and columns we want from props, so it should just render the guides regardless of how many cells are actually given as children. So how can we draw guides around non-existent cells and ensure proper behavior when cells extend across multiple rows or columns?"
                    }), (0, n.jsxs)(k, {
                        children: ["Faced with this challenge, I eventually stumbled my way across a CSS property that is incredibly useful for this exact circumstance: ", (0, n.jsx)(E, {
                            children: "display: contents"
                        }), ". After learning about this property it really felt like I had discovered a hidden gem. This property causes an element's children to appear as if they were direct children of the element's parent, ignoring the element itself. You might be wondering why this is so useful, so let's work through how we can implement a React component that generates the guides for a grid given a set of rows and columns. First lets define the skeleton of our component:"]
                    }), (0, n.jsx)(eI, {
                        language: "tsx",
                        children: "\ninterface GridProps {\n  rows: number;\n  columns: number;\n  children: ReactElement<GridCellProps>[];\n}\n\nfunction Grid({ rows, columns, children }: GridProps) {\n  return (\n    // ...\n  );\n};\n        "
                    }), (0, n.jsx)(k, {
                        children: "We know that there are 3 main parts at play here. The parent grid element, the children of the grid, and the grid guides. The first step is to create the parent grid element and pass along our rows and columns as CSS variables:"
                    }), (0, n.jsx)(eI, {
                        language: "tsx",
                        children: '\nfunction Grid({ rows, columns, children }: GridProps) {\n  return (\n    <div className="grid" style={{ "--rows": rows, "--columns": columns }}>\n      {children}\n    </div>\n  );\n};\n        '
                    }), (0, n.jsxs)(k, {
                        children: ["Next, we need to render the grid guides. We can do this by creating a ", (0, n.jsx)(E, {
                            children: "div"
                        }), " with a class of", " ", (0, n.jsx)(E, {
                            children: "grid-guides"
                        }), " and rendering it as a direct child of the grid. Inside of this div, we will want to create ", (0, n.jsx)(E, {
                            children: "rows * columns"
                        }), " number of elements to fill our grid. Lastly, we just need to apply", (0, n.jsx)(E, {
                            children: "position: relative"
                        }), " to the ", (0, n.jsx)(E, {
                            children: "grid"
                        }), " class, and ", (0, n.jsx)(E, {
                            children: "display: contents"
                        }), " property to the ", (0, n.jsx)(E, {
                            children: "grid-guides"
                        }), " class. This will render the children of the grid-guides ", (0, n.jsx)(E, {
                            children: "div"
                        }), " as if they were direct children of the grid. However to ensure that these children don't interfere with the actual children on the grid, we need to apply a ", (0, n.jsx)(E, {
                            children: "position: absolute"
                        }), " and ", (0, n.jsx)(E, {
                            children: "inset: 0px"
                        }), " to every guide cell."]
                    }), (0, n.jsx)(eI, {
                        language: "tsx",
                        children: "\nfunction Grid({ rows, columns, children }: GridProps) {\n  return (\n    <div className=\"grid\" style={{ '--rows': rows, '--columns': columns }}>\n      <div className=\"grid-guides\">\n        {Array.from({ length: rows * columns }, (_, index) => {\n          // Calculate the x and y position of the cell\n          const x = (index % columns) + 1;\n          const y = Math.floor(index / columns) + 1;\n          return (\n            <div\n              className=\"grid-guide\"\n              style={{ '--x': x, '--y': y }}\n            />\n          );\n        })}\n      </div>\n      {/* Cells will render here */}\n      {children}\n    </div>\n  );\n};\n        "
                    }), (0, n.jsx)(eI, {
                        language: "css",
                        children: "\n.grid {\n  display: grid;\n  grid-template-columns: repeat(var(--columns), 1fr);\n  grid-template-rows: repeat(var(--rows), 1fr);\n  border: 2px solid #666;\n  border-right: none;\n  border-bottom: none;\n  // highlight-next-line\n  position: relative;\n}\n\n.grid-guides {\n  // highlight-next-line\n  display: contents;\n}\n\n.grid-guide {\n  inset: 0px;\n  // highlight-next-line\n  position: absolute;\n  grid-column-start: var(--x);\n  grid-column-end: span 1;\n  grid-row-start: var(--y);\n  grid-row-end: span 1;\n  border: 2px solid #666;\n  border-left: none;\n  border-top: none;\n}\n        "
                    }), (0, n.jsx)(k, {
                        children: "And with that, our basic component is done! Notice how we no longer need to define any cells to receive guides. Let's see what it looks like in practice. Feel free to edit the number of columns or rows:"
                    }), (0, n.jsx)(eS, {
                        scope: {
                            Grid: th
                        },
                        children: "\n() => <Grid rows={5} columns={5} />\n"
                    }), (0, n.jsx)(k, {
                        children: "Now that we have our main Grid component done, we can move onto creating a simple React abstraction for grid cells. Take a look at the following:"
                    }), (0, n.jsx)(eI, {
                        language: "tsx",
                        children: '\ninterface CellProps {\n  row: number;\n  column: number;\n  children: ReactNode;\n}\n\nfunction Cell({ row, column, children }: CellProps) {\n  return (\n    <div \n      className="grid-cell" \n      style={{ gridRow: row, gridColumn: column }}\n    >\n      {children}\n    </div>\n  );\n};\n        '
                    }), (0, n.jsx)(k, {
                        children: "This component is incredibly simple, but it allows us to easily render arbitrary JSX inside a cell on the grid by specifying the row and column of the cell and that is it!"
                    }), (0, n.jsx)(eS, {
                        scope: {
                            Grid: th
                        },
                        children: '\n<Grid rows={4} columns={4}>\n  <Grid.Cell row="auto" column={1}>\n    What\n  </Grid.Cell>\n  <Grid.Cell row="auto" column={4}>\n    will\n  </Grid.Cell>\n  <Grid.Cell row={2} column={3}>\n    you\n  </Grid.Cell>\n  <Grid.Cell row={3} column={4}>\n    ship\n  </Grid.Cell>\n  <Grid.Cell row={4} column="auto">\n    ?\n  </Grid.Cell>\n</Grid>\n    '
                    }), (0, n.jsxs)(k, {
                        children: ['One very cool thing to note here is that passing the "auto" prop as a row/column is working here. If we were not using ', (0, n.jsx)(E, {
                            children: "display: contents"
                        }), ' on our guides, setting "auto" as a row/column would break the grid entirely.']
                    }), (0, n.jsx)(k, {
                        children: "Another component to use with the grid is a cross which has the same API as the cell—you specify the row and column for which the cross appears:"
                    }), (0, n.jsx)(eS, {
                        scope: {
                            Grid: th
                        },
                        children: "\n<Grid rows={4} columns={4}>\n  <Grid.Cross column={1} row={1} />\n  <Grid.Cross column={-1} row={-1} />\n</Grid>\n    "
                    }), (0, n.jsx)(k, {
                        children: "Because the crosses are simply absolutely positioned relative to the specificed cell, they can be placed not only on the edges of the grid, but on any column and row combination:"
                    }), (0, n.jsx)(eS, {
                        scope: {
                            Grid: th
                        },
                        children: "\n<Grid rows={4} columns={4}>\n  <Grid.Cross column={1} row={4} />\n  <Grid.Cross column={2} row={3} />\n  <Grid.Cross column={2} row={4} />\n  <Grid.Cross column={3} row={2} />\n  <Grid.Cross column={3} row={3} />\n  <Grid.Cross column={3} row={4} />\n  <Grid.Cross column={4} row={3} />\n  <Grid.Cross column={4} row={4} />\n  <Grid.Cross column={5} row={4} />\n</Grid>\n    "
                    }), (0, n.jsx)(k, {
                        children: "At it's core, this is how we constructed our grid component for use on all our websites. Hopefully one could see how this component could be extended to support more advanced features such as cells that span multiple rows or columns, or responsive behaviors, i.e. setting the rows and columns to different values at different breakpoints. Additionally, this component and solution can be entirely server rendered since the component doesn't rely on client-side API-s at all."
                    })]
                })
            }

            function th(e) {
                let {
                    rows: t,
                    columns: i,
                    children: a
                } = e;
                return (0, n.jsxs)("div", {
                    className: "gridDemo",
                    style: {
                        "--rows": t,
                        "--columns": i
                    },
                    children: [a, (0, n.jsx)("div", {
                        className: "gridDemoGuides",
                        children: Array.from({
                            length: t * i
                        }, (e, a) => {
                            let s = a % i + 1,
                                r = Math.floor(a / i) + 1;
                            return (0, n.jsx)("div", {
                                className: "gridDemoGuide",
                                style: {
                                    "--x": s,
                                    "--y": r
                                }
                            }, "".concat(t, "-").concat(i, "-").concat(a, "-").concat(s, "-").concat(r))
                        })
                    })]
                })
            }

            function tg() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        author: "Rauno",
                        children: "Code Driven Visuals"
                    }), (0, n.jsx)(k, {
                        children: "All of the supplementary visuals on the website are built in code without external libraries. We felt that using images is simpler in the short term, but we would get pristine quality, granular control, and true responsiveness by investing upfront into building marketing visuals as React components. We also make use of the same visuals across different pages so being able to drop one in anywhere is clutch."
                    }), (0, n.jsx)(R, {
                        src: e1,
                        sizes: "50vw",
                        alt: "Two illustrations are side by side: one showing the Git push deployment workflow, and the other commenting on preview deployments. A third illustration is full width beneath the two. The illustration shows an analytics graph."
                    }), (0, n.jsx)(k, {
                        children: "To be deliberate we make sure to explicitly label visuals to separate illustrative elements from interactive ones. To do so, we treat the visuals as images and label them with a description that describes just enough relevant detail:"
                    }), (0, n.jsx)(eI, {
                        language: "tsx",
                        children: '\n<div \n  role="img"\n  aria-label="\n  Two abstract window frames are stacked on top of each other. \n  The bottom window displays a successful Git push output in a terminal. \n  The top window shows a corresponding preview deployment in a browser.\n">\n  {/* Hide inner tree */}\n  <div aria-hidden>\n     {...}\n  </div>\n</div>\n'
                    }), (0, n.jsxs)(k, {
                        children: ["I mentioned responsiveness earlier. Since", " ", (0, n.jsx)(B, {
                            href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries",
                            children: "CSS container queries"
                        }), " ", "are now stable in modern browsers, we can build truly independently dynamic widgets instead of relying on the window width which is not reflective of how much space a component really has to display itself."]
                    }), (0, n.jsx)(k, {
                        children: "Container queries are really easy to use. We define a containment context on the root element and make any adjustments to the children based on the container size:"
                    }), (0, n.jsx)(eI, {
                        language: "css",
                        children: "\n.root {\n  container-type: inline-size;\n}\n\n@container (max-width: 560px) {\n  .scope {\n    display: none;\n  }\n}\n        "
                    }), (0, n.jsx)(k, {
                        children: "Now it's safe to render the component inside any container and predictably assume it will always display the ideal form:"
                    }), (0, n.jsx)(tu, {})]
                })
            }

            function tu() {
                let e = (0, eT.a)(g.vc.media.mobile),
                    t = a.useRef(null),
                    [i, s] = a.useState(0);
                a.useEffect(() => {
                    let e = new ResizeObserver(e => {
                        s(e[0].contentRect.width)
                    });
                    return e.observe(t.current), () => {
                        e.disconnect()
                    }
                }, []);
                let r = i <= 320 ? "amber" : i <= 560 ? "blue" : "green";
                return (0, n.jsxs)(Q, {
                    css: {
                        px: 0,
                        minHeight: 428,
                        "@mobile": {
                            px: 16
                        }
                    },
                    children: [(0, n.jsxs)(A.x, {
                        ref: t,
                        as: m.E.div,
                        css: {
                            border: "2px solid $colors$".concat(r, "9"),
                            padding: 8,
                            position: "relative",
                            "@mobile": {
                                maxWidth: 300,
                                width: "100% !important"
                            }
                        },
                        animate: {
                            width: e ? 300 : [320, 640, 320]
                        },
                        transition: {
                            repeat: 1 / 0,
                            duration: 5,
                            repeatDelay: 1
                        },
                        children: [(0, n.jsxs)(A.x, {
                            css: {
                                padding: "0 8px",
                                height: 24,
                                background: "$".concat(r, "9"),
                                color: "white",
                                width: "fit-content",
                                position: "absolute",
                                top: -24,
                                left: -2,
                                br: "6px 6px 0 0",
                                mb: 8,
                                fontSize: 12,
                                fontFamily: "$mono",
                                lineHeight: "24px"
                            },
                            children: [Math.round(i), "px"]
                        }), (0, n.jsx)(e8, {})]
                    }), (0, n.jsxs)(d.x, {
                        align: "center",
                        color: "gray11",
                        size: 13,
                        lineHeight: 20,
                        css: {
                            position: "absolute",
                            bottom: 32,
                            d: "none",
                            "@mobile": {
                                display: "block"
                            }
                        },
                        children: ["This is a demo that unfortunately ", (0, n.jsx)("br", {}), " requires a larger screen width."]
                    })]
                })
            }

            function tp() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        author: "Rauno",
                        children: "Pixelated Iconography"
                    }), (0, n.jsx)(M, {
                        src: (0, C.jj)("vercel/pixel-icons.mp4"),
                        videoStyle: {
                            transform: "scale(1.01)"
                        }
                    }), (0, n.jsxs)(k, {
                        children: ["One of the most beloved parts of the home page were the pixelated icons. They are drawn in Figma, and extracted with a Ruby script that takes bitmaps as input, reads the pixel color at set intervals, and then creates a matrix for each icon (", (0, n.jsx)(B, {
                            href: "https://twitter.com/almonk/status/1712091228953579810/photo/1",
                            children: "source"
                        }), "). One of the matrices would look like this in code. Can you tell what framework logo this is for?"]
                    }), (0, n.jsx)(eI, {
                        pixel: !0,
                        center: !0,
                        language: "js",
                        children: "\n        \n[\n  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],\n  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],\n  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\n  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\n  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],\n  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],\n  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],\n  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],\n  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],\n  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],\n  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],\n  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],\n  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],\n  [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],\n  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0],\n  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],\n  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0],\n  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],\n  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],\n]\n        "
                    }), (0, n.jsx)(k, {
                        children: "The fact that we have icons available as pixel data means we can render them in different formats."
                    }), (0, n.jsxs)(k, {
                        children: ["For example, on the home page we render a ", (0, n.jsx)(E, {
                            children: "canvas"
                        }), " element for a smaller DOM footprint and animation. As a fallback, we make use of a base64 string to display a placeholder image which ends up costing merely ~1kb per icon. Optionally, the icon can also render as SVG for when they are above the fold."]
                    }), (0, n.jsxs)(Q, {
                        gap: 2,
                        css: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                            placeItems: "center",
                            gap: 24
                        },
                        children: [(0, n.jsx)(tf, {
                            ...eH.React
                        }), (0, n.jsx)(tf, {
                            ...eH.Svelte
                        }), (0, n.jsx)(tf, {
                            ...eH.Vue
                        }), (0, n.jsx)(tf, {
                            ...eH["Next.js"]
                        }), (0, n.jsx)(tf, {
                            ...eH["Arrow Crossed"]
                        }), (0, n.jsx)(tf, {
                            ...eH.CPU
                        }), (0, n.jsx)(tf, {
                            ...eH.Globe
                        }), (0, n.jsx)(tf, {
                            ...eH.Nuxt
                        }), (0, n.jsx)(tf, {
                            ...eH.Support
                        }), (0, n.jsx)(tf, {
                            ...eH.Vercel
                        })]
                    }), (0, n.jsxs)(k, {
                        children: ["The approach to rendering based on the matrix is pretty much the same between formats. For instance, the way we render them in ", (0, n.jsx)(E, {
                            children: "canvas"
                        }), " is by iterating over each row and pixel, and drawing a circle with", " ", (0, n.jsx)(E, {
                            children: "arc()"
                        }), " for a given coordinate:"]
                    }), (0, n.jsx)(eI, {
                        language: "tsx",
                        children: "\nmatrix.forEach((row: number[], y: number) => {\n  row.forEach((pixel: number, x: number) => {\n    // 0 means transparent, no need to render\n    if (pixel !== 0) {\n      render(ctx, x, y, pixel);\n    }\n    // When done, hide the placeholder\n    if (y === matrix.length - 1 && x === row.length - 1) {\n      setLoading(false);\n    }\n  });\n});\n        "
                    }), (0, n.jsx)(k, {
                        children: "The rendering happens very fast but to illustrate what's happening we can slow rendering down. And funnily enough, it kind of reminds me of an old computer monitor painting each frame painstakingly slowly:"
                    }), (0, n.jsx)(tm, {}), (0, n.jsxs)(k, {
                        children: ["And of course, we treat the icons as images so they recieve an ", (0, n.jsx)(E, {
                            children: "aria-label"
                        }), " for proper semantics and screen readers:"]
                    }), (0, n.jsx)(eI, {
                        language: "tsx",
                        children: '\n<div \n  role="img" \n  aria-label="Next.js logo"\n>\n  <canvas aria-hidden />\n</div>\n  '
                    })]
                })
            }

            function tm() {
                let e = a.useRef(null),
                    t = (0, f.Y)(e, {
                        once: !0,
                        margin: "-50%"
                    }),
                    [i, s] = a.useState(0);
                return (0, n.jsxs)(Q, {
                    ref: e,
                    gap: 2,
                    children: [t && (0, n.jsxs)(a.Fragment, {
                        children: [(0, n.jsx)(tf, {
                            colored: !0,
                            animate: !0,
                            size: 80,
                            ...eH.React
                        }), (0, n.jsx)(tf, {
                            colored: !0,
                            animate: !0,
                            size: 80,
                            ...eH.Svelte
                        }), (0, n.jsx)(tf, {
                            colored: !0,
                            animate: !0,
                            size: 80,
                            ...eH.Vue
                        }), (0, n.jsx)(tf, {
                            colored: !0,
                            animate: !0,
                            size: 80,
                            ...eH.Python
                        })]
                    }, i), (0, n.jsx)(eD, {
                        size: "small",
                        css: {
                            position: "absolute",
                            bottom: 16
                        },
                        onClick: () => {
                            s(e => e + 1)
                        },
                        children: "Replay"
                    })]
                })
            }

            function tf(e) {
                let {
                    matrix: t,
                    label: i,
                    base64: s,
                    size: r = 48,
                    animate: o,
                    color: l,
                    colored: c,
                    onDone: d
                } = e, h = a.useRef(null), [g, u] = a.useState(!0), {
                    resolvedTheme: p
                } = (0, tt.F)();
                return a.useEffect(() => {
                    let e = h.current,
                        i = e.getContext("2d"),
                        n = 2 * e.clientWidth,
                        a = 2 * e.clientHeight;
                    e.width = n, e.height = a;
                    let s = Math.min(n / t[0].length, a / t.length);
                    t.forEach((e, n) => {
                        e.forEach((e, a) => {
                            let r = () => (function(e, i, n, a) {
                                if (i === t[0].length - 1 && n === t.length - 1 && (u(!1), null == d || d()), 0 === a) return;
                                let r = {
                                    1: c ? null == l ? void 0 : l[1] : "dark" === p ? "#A0A0A0" : "#171717",
                                    2: c ? null == l ? void 0 : l[2] : "dark" === p ? "#EDEDED" : "#666666",
                                    3: "#FFF"
                                };
                                e.fillStyle = r[a], e.beginPath(), e.arc(i * s + s / 2, n * s + s / 2, s / 2, 0, 2 * Math.PI), e.fill()
                            })(i, a, n, e, l);
                            o ? setTimeout(r, 150 * n) : r()
                        })
                    })
                }, [o, t, p]), (0, n.jsxs)(A.x, {
                    role: "img",
                    "aria-label": i,
                    css: {
                        size: r,
                        display: "grid",
                        "> *": {
                            gridRow: 1,
                            gridColumn: 1
                        }
                    },
                    children: [!o && (0, n.jsx)(A.x, {
                        "aria-hidden": !0,
                        as: "img",
                        src: s,
                        css: {
                            size: "100%"
                        },
                        style: {
                            opacity: g ? 1 : 0,
                            transition: "opacity 500ms ease"
                        }
                    }), (0, n.jsx)(A.x, {
                        ref: h,
                        "aria-hidden": !0,
                        as: "canvas",
                        css: {
                            size: "100%"
                        }
                    })]
                })
            }
            th.Cell = function(e) {
                let {
                    row: t,
                    column: i,
                    children: a
                } = e;
                return (0, n.jsx)("div", {
                    className: "gridCell",
                    style: {
                        "--row": t,
                        "--column": i
                    },
                    children: a
                })
            }, th.Cross = function(e) {
                let {
                    row: t,
                    column: i,
                    style: a,
                    ...s
                } = e;
                return (0, n.jsxs)("div", {
                    className: "cross",
                    style: {
                        ...a,
                        "--cross-row": t,
                        "--cross-column": i
                    },
                    ...s,
                    children: [(0, n.jsx)("div", {
                        className: "crossLine",
                        style: {
                            width: "var(--cross-half-size)",
                            height: "var(--cross-size)",
                            borderRightWidth: "var(--guide-width)"
                        }
                    }), (0, n.jsx)("div", {
                        className: "crossLine",
                        style: {
                            width: "var(--cross-size)",
                            height: "var(--cross-half-size)",
                            borderBottomWidth: "var(--guide-width)"
                        }
                    })]
                })
            };
            var tx = {
                    src: "/_next/static/media/iphone-close-crop.0334862c.png",
                    height: 2162,
                    width: 3848,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAMFBMVEXg2dfNtLDDjI7Mt7e4jp23gnqxkpCsdmrr6OecfHvFoaWfm67HmZfay8mbeXjYysjUBfHsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nGPgYOPj5+Vk42BgYGVnZGRnZWBgYGJhZuThgjKYuBkADhQAoYBUr88AAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 4
                },
                tC = {
                    src: "/_next/static/media/iphone-close-bsky.720d6ba8.png",
                    height: 2162,
                    width: 3848,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJFBMVEX9///4+PjixsPDlIbfzMrEgXuSobCoc32ckJy6nJ7r3dvs3Nre0585AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nGNgZOBiZuZmYGRgZGBhZ2YBM5jYOJggDE5WJgZGAAbhAFprTRTCAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 4
                },
                tw = {
                    src: "/_next/static/media/pinch-anchor.5ed42bb5.png",
                    height: 1400,
                    width: 1920,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAATlBMVEXR0tGysa+hoqEXQmcsKypGODIYeMinqqubmZMmIB6JWETMzMre4eDaqpu5k4Q7R1vJyseeaFNtbVQAKllNXXN5Zk9LpO/Jysl+mb6/2/97hIvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nAXBhwHAIAwEsQMMb5Pek/0XjcSYJGUNYKW1Ix6Icr9LrBDnN/WawGy/tuog9zx3/wEtHwG46uMrgAAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 6
                },
                tb = {
                    src: "/_next/static/media/pinch-anchor-out.89ed4cd7.png",
                    height: 1400,
                    width: 1920,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAXVBMVEWnrbAZeMo/eazIw73NzMnKxsOPs9y1tbTR0M2ppqc4kd1Nk9RYkcIoe8ImhtiMpcFIhLbf4uKZlI42bp+0e2R3mcJfXGErfsazpqyXl5S/rbB8VENSaYKkcV+2i3vPli4/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVR4nGMQZGcAARYGDiZGXnFGYWYGFgE+LlFuJmYGVh4ubglZGXYGVn42NikRMUkGDnZOTgY5aSEALUkCG5sSsK8AAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 6
                };

            function ty(e) {
                let {
                    children: t,
                    css: i,
                    size: a = "14",
                    show: s
                } = e;
                return (0, n.jsx)(d.x, {
                    css: {
                        position: "absolute",
                        bottom: 12,
                        left: "50%",
                        height: "fit-content",
                        width: "100%",
                        textAlign: "center",
                        pointerEvents: "none",
                        transform: "translateX(-50%)",
                        transition: "opacity 250ms ease",
                        ...i
                    },
                    color: "gray11",
                    size: a,
                    style: {
                        opacity: s ? 1 : 0
                    },
                    children: t
                })
            }
            var tv = i(5820),
                tj = i(2905);

            function tk() {
                let e = (0, eT.a)("(hover: none)"),
                    [t, i] = a.useState(!0),
                    [s, r] = a.useState(null),
                    [o, l] = a.useState(!0),
                    [c, d] = a.useState(null);
                return (0, tj.z)("pointerup", () => {
                    (0, C.pX)(), document.body.classList.remove("cursor-moving"), t || l(!1), setTimeout(() => {
                        d(null)
                    }, 50)
                }, [t]), (0, n.jsxs)(A.x, {
                    as: m.E.div,
                    css: {
                        center: !0,
                        size: "100%",
                        touchAction: "none"
                    },
                    onPan: (t, i) => {
                        t.preventDefault();
                        let n = document.querySelector("[radial-menu]"),
                            a = document.querySelector("[radial-circle]"),
                            s = document.elementsFromPoint(i.point.x, i.point.y),
                            r = s.includes(n),
                            o = 180 * Math.atan2(i.offset.y, i.offset.x) / Math.PI;
                        if (n && !s.includes(a) && (n.style.setProperty("--a", "".concat(o - 100, "deg")), n.style.setProperty("--o", "1")), r && !e) return;
                        let A = Math.round((o + 180) / 60) % tB.length;
                        d(A)
                    },
                    onPointerDown: n => {
                        (0, C.dg)(), t && i(!1), t || e || r({
                            x: n.clientX,
                            y: n.clientY
                        }), document.body.classList.add("cursor-moving"), l(!0)
                    },
                    children: [(0, n.jsx)(ty, {
                        show: !o,
                        css: {
                            transform: "translate(-50%, -50%)",
                            top: "50%"
                        },
                        children: "Hold and rotate from anywhere"
                    }), (0, n.jsx)(tv.M, {
                        children: o && (0, n.jsx)(tE, {
                            position: s,
                            activeIndex: c,
                            setActiveIndex: d
                        }, "menu")
                    })]
                })
            }

            function tE(e) {
                let {
                    position: t,
                    activeIndex: i,
                    setActiveIndex: s
                } = e, r = "radial-menu", o = a.useRef(null), l = a.useRef(null), c = a.useRef(null), h = (0, x.q)(null, {
                    stiffness: 400,
                    damping: 30
                });

                function g(e) {
                    h.set(e), c.current = e
                }
                return a.useEffect(() => {
                    let e = h.on("change", e => {
                        o.current.style.setProperty("--a", "".concat(e, "deg"))
                    });
                    return e
                }, []), a.useEffect(() => {
                    if (i === l.current || null === i) return;
                    if (null === l.current && null !== i) {
                        let e = (i - 1) * 60;
                        h.jump(e), c.current = e, l.current = i;
                        return
                    }
                    let e = l.current;
                    if (i === tB.length - 1 && 0 === e) {
                        let e = c.current - 60;
                        g(e), l.current = i;
                        return
                    }
                    if (i > e || e === tB.length - 1) {
                        let t = 0 === i ? tB.length : i,
                            n = c.current + (t - e) * 60;
                        g(n)
                    } else if (i < e) {
                        let t = c.current - (e - i) * 60;
                        g(t)
                    }
                    l.current = i
                }, [i]), (0, n.jsxs)(A.x, {
                    "radial-menu": "",
                    as: m.E.div,
                    initial: !1,
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: .96
                    },
                    transition: {
                        duration: .1
                    },
                    style: {
                        ...t && {
                            position: "fixed",
                            top: t.y - 125,
                            left: t.x - 125
                        }
                    },
                    css: {
                        "--a": "0deg",
                        "--o": 0,
                        pointerEvents: "auto",
                        size: 250,
                        br: "$round",
                        position: "relative",
                        border: "1px solid $gray5",
                        boxShadow: "$medium",
                        zIndex: 5,
                        touchAction: "none",
                        li: {
                            "--a": "30deg",
                            position: "absolute",
                            bottom: "50%",
                            right: "50%",
                            fontSize: 24,
                            size: 240,
                            transformOrigin: "100% 100%",
                            overflow: "hidden",
                            background: "$gray3",
                            transitionTimingFunction: "ease",
                            boxShadow: "0 0 0 1px $colors$gray5",
                            color: "$gray11",
                            transition: "background 250ms ease",
                            '&:hover, &[data-active="true"]': {
                                background: "$gray5",
                                color: "$gray12"
                            },
                            svg: {
                                position: "absolute"
                            }
                        },
                        "li:nth-of-type(1)": {
                            transform: "rotate(calc(var(--a) * -1)) skew(var(--a))"
                        },
                        "li:nth-of-type(2)": {
                            transform: "rotate(var(--a)) skew(var(--a))"
                        },
                        "li:nth-of-type(3)": {
                            transform: "rotate(calc(var(--a) * 3)) skew(var(--a))"
                        },
                        "li:nth-of-type(4)": {
                            transform: "rotate(calc(var(--a) * 5)) skew(var(--a))"
                        },
                        "li:nth-of-type(5)": {
                            transform: "rotate(calc(var(--a) * 7)) skew(var(--a))"
                        },
                        "li:nth-of-type(6)": {
                            transform: "rotate(calc(var(--a) * 9)) skew(var(--a))"
                        }
                    },
                    children: [(0, n.jsx)(A.x, {
                        ref: o,
                        css: {
                            content: "",
                            position: "absolute",
                            border: "8px solid $gray3",
                            size: "calc(100% + 24px)",
                            br: "inherit",
                            zIndex: -1,
                            inset: -12,
                            "&:after": {
                                content: "",
                                position: "absolute",
                                inset: -8,
                                padding: 8,
                                background: "conic-gradient(from var(--a), transparent 83.5%, var(--colors-gray9) 0, var(--colors-gray9) 100%)",
                                zIndex: 1,
                                "-webkit-mask": "linear-gradient(black, black) content-box, linear-gradient(black, black)",
                                "mask-composite": "exclude",
                                "-webkit-mask-composite": "xor",
                                br: "inherit",
                                pointerEvents: "none"
                            }
                        },
                        style: {
                            "--a": "".concat(h.get(), "deg")
                        }
                    }), (0, n.jsxs)(A.x, {
                        "radial-circle": "",
                        css: {
                            size: 125,
                            br: "$round",
                            background: "$gray2",
                            position: "absolute",
                            border: "1px solid $gray5",
                            top: "50%",
                            zIndex: 3,
                            transform: "translate(-50%, -50%)",
                            left: "50%",
                            center: !0,
                            "&:after": {
                                content: "",
                                size: "calc(100% - 8px)",
                                position: "absolute",
                                br: "inherit",
                                border: "1px solid $gray5"
                            }
                        },
                        children: [(0, n.jsx)(d.x, {
                            as: "span",
                            color: "gray11",
                            size: "13",
                            children: null !== i ? tB[i].label : null
                        }), (0, n.jsx)("span", {
                            className: "vh",
                            id: r,
                            children: "Hold and rotate"
                        })]
                    }), (0, n.jsx)(A.x, {
                        as: "ul",
                        role: "menu",
                        "aria-describedby": r,
                        css: {
                            size: "100%",
                            br: "inherit",
                            overflow: "hidden",
                            position: "relative",
                            boxShadow: "0 0 0 4px $colors$gray2"
                        },
                        children: tB.map((e, t) => (0, n.jsx)("li", {
                            "radial-item": "",
                            role: "menuitem",
                            "aria-label": e.label,
                            "data-active": t === i,
                            onMouseEnter: () => s(t),
                            children: e.icon
                        }, e.label))
                    })]
                })
            }
            let tB = [{
                icon: (0, n.jsx)(v.Y4, {
                    css: {
                        transform: "skew(calc(var(--a) * -1)) rotate(var(--a)) translateX(330px) translateY(15px)"
                    }
                }),
                label: "Back"
            }, {
                icon: (0, n.jsx)(function(e) {
                    return (0, n.jsxs)(A.x, {
                        as: "svg",
                        width: "16px",
                        height: "16px",
                        strokeWidth: "1.5",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        color: "currentColor",
                        ...e,
                        children: [(0, n.jsx)("path", {
                            d: "M21.888 13.5C21.164 18.311 17.013 22 12 22 6.477 22 2 17.523 2 12S6.477 2 12 2c4.1 0 7.625 2.468 9.168 6",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, n.jsx)("path", {
                            d: "M17 8h4.4a.6.6 0 00.6-.6V3",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                }, {
                    css: {
                        transform: "skew(calc(var(--a) * -1)) rotate(var(--a)) translateX(340px) translateY(16px) rotate(-90deg)"
                    }
                }),
                label: "Reload"
            }, {
                icon: (0, n.jsx)(function(e) {
                    return (0, n.jsxs)(A.x, {
                        as: "svg",
                        width: "20px",
                        height: "20px",
                        strokeWidth: "1.2",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        color: "currentColor",
                        ...e,
                        children: [(0, n.jsx)("path", {
                            d: "M17.571 18H20.4a.6.6 0 00.6-.6V11a4 4 0 00-4-4H7a4 4 0 00-4 4v6.4a.6.6 0 00.6.6h2.829M8 7V3.6a.6.6 0 01.6-.6h6.8a.6.6 0 01.6.6V7",
                            stroke: "currentColor",
                            strokeWidth: "1.2"
                        }), (0, n.jsx)("path", {
                            d: "M6.098 20.315L6.428 18l.498-3.485A.6.6 0 017.52 14h8.96a.6.6 0 01.594.515L17.57 18l.331 2.315a.6.6 0 01-.594.685H6.692a.6.6 0 01-.594-.685z",
                            stroke: "currentColor",
                            strokeWidth: "1.2"
                        }), (0, n.jsx)("path", {
                            d: "M17 10.01l.01-.011",
                            stroke: "currentColor",
                            strokeWidth: "1.2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                }, {
                    css: {
                        transform: "skew(calc(var(--a) * -1)) rotate(var(--a)) translateX(335px) translateY(20px) rotate(-120deg)"
                    }
                }),
                label: "Print"
            }, {
                icon: (0, n.jsx)(v.Y4, {
                    css: {
                        transform: "skew(calc(var(--a) * -1)) rotate(var(--a)) translateX(335px) translateY(20px)"
                    }
                }),
                label: "Forward"
            }, {
                icon: (0, n.jsx)(function(e) {
                    return (0, n.jsxs)(A.x, {
                        as: "svg",
                        width: "20px",
                        height: "20px",
                        strokeWidth: "1.2",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        color: "currentColor",
                        ...e,
                        children: [(0, n.jsx)("path", {
                            d: "M3 19V5a2 2 0 012-2h11.172a2 2 0 011.414.586l2.828 2.828A2 2 0 0121 7.828V19a2 2 0 01-2 2H5a2 2 0 01-2-2z",
                            stroke: "currentColor",
                            strokeWidth: "1.2"
                        }), (0, n.jsx)("path", {
                            d: "M8.6 9h6.8a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6H8.6a.6.6 0 00-.6.6v4.8a.6.6 0 00.6.6zM6 13.6V21h12v-7.4a.6.6 0 00-.6-.6H6.6a.6.6 0 00-.6.6z",
                            stroke: "currentColor",
                            strokeWidth: "1.2"
                        })]
                    })
                }, {
                    css: {
                        transform: "skew(calc(var(--a) * -1)) rotate(var(--a)) translateX(335px) translateY(16px) rotate(120deg)"
                    }
                }),
                label: "Save"
            }, {
                icon: (0, n.jsx)(function(e) {
                    return (0, n.jsxs)(A.x, {
                        as: "svg",
                        width: "20px",
                        height: "20px",
                        viewBox: "0 0 24 24",
                        strokeWidth: "1.2",
                        fill: "none",
                        color: "currentColor",
                        ...e,
                        children: [(0, n.jsx)("path", {
                            d: "M4.998 2H2v2.998h2.998V2zM4.999 3.501h14M3.5 4.999V19M20.498 5v14.002M4.999 20.501h14M4.998 19H2v2.998h2.998V19zM21.997 2.002H19V5h2.998V2.002zM21.997 19.002H19V22h2.998v-2.998z",
                            stroke: "currentColor",
                            strokeWidth: "1.2",
                            strokeMiterlimit: "1.2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, n.jsx)("path", {
                            clipRule: "evenodd",
                            d: "M10.997 15.002l-3-7 7 3-2.998.999-1.002 3.001z",
                            stroke: "currentColor",
                            strokeWidth: "1.2",
                            strokeMiterlimit: "1.2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, n.jsx)("path", {
                            clipRule: "evenodd",
                            d: "M11.999 12.002l2.998 3-2.998-3z",
                            stroke: "currentColor",
                            strokeWidth: "1.2",
                            strokeMiterlimit: "1.2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                }, {
                    css: {
                        transform: "skew(calc(var(--a) * -1)) rotate(var(--a)) translateX(333px) translateY(16px) rotate(60deg)"
                    }
                }),
                label: "Inspect"
            }];

            function tM() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Metaphors"
                    }), (0, n.jsxs)(k, {
                        children: ["What even is interaction design? Here's how I think about it through the lens of technology. Interaction design is an artform to make experiences that fluidly respond to human intent. When does a swipe trigger an action? Do gestures retain momentum? What happens if a finger is covering content? How can we predict intent based on context? Executing well on details like these make products feel like a natural extension of ourselves.", " ", (0, n.jsx)("sup", {
                            children: "2"
                        })]
                    }), (0, n.jsxs)(k, {
                        children: ["But it's not an artform in the same way as painting or composing music. There's a unique human component to interaction design. Why? Because ultimately people are trying to get stuff done using a product. Beauty in form and composition is not enough. There's an inherent satisfaction apparent in striking a holistic balance between form ", (0, n.jsx)("i", {
                            children: "and "
                        }), "function."]
                    }), (0, n.jsx)(k, {
                        children: "Great interaction design rewards learning by reusing metaphors. You can use most touch interfaces with just two gestures: tapping and swiping. For example, on iOS the only gesture you're explicitly taught how to do is swiping up to open:"
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-unlock-c.mp4"
                    }), (0, n.jsxs)(k, {
                        children: ["Now you've learned swiping which unlocks control over many other parts of the interface. The sliding motion also tells you that the interface is composed of stacked layers, like a deck of cards. Knowing so, you might be enthused to try swiping down on the screen to discover more controls. Conceptually, the interface is further implicitly teaching you that swiping ", (0, n.jsx)("i", {
                            children: "down"
                        }), " reveals layers of system functionality. This knowledge compounds as you delve deeper into the Apple ecosystem."]
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-down-swipes.mp4"
                    }), (0, n.jsxs)(k, {
                        children: ["We can stretch interaction design metaphors even further. Why does swiping horizontally navigate between pages? Because that's how we've intuitively interfaced with books for thousands of years.", " "]
                    }), (0, n.jsx)(V, {
                        src: "ixd/ipad-home-swipe.mp4",
                        videoStyle: {
                            transform: "scale(1.01) rotate(0.1deg)"
                        }
                    }), (0, n.jsx)(k, {
                        children: "Great interactions are modeled after properties from the real world, like interruptability. This sounds kinda silly because, duh, obviously flipping a page in a book is interruptible. But imagine if it were an animation that you had to wait for!"
                    }), (0, n.jsx)(V, {
                        src: "ixd/page-flip4.mp4"
                    }), (0, n.jsx)(k, {
                        children: "Pinching is another gesture that we've come to intuitively associate with zooming. Simply put, zooming is an act of precision — adjusting the amount of detail visible."
                    }), (0, n.jsx)(V, {
                        src: "ixd/pinch-ipad2.mp4",
                        videoStyle: {
                            transform: "scale(1.01) rotate(0.1deg)"
                        }
                    }), (0, n.jsx)(k, {
                        children: "We can think of pinching akin to movements that require intricate motor skills, like picking up tiny objects or working with spices. Naturally, we pinch our fingers for higher precision:"
                    }), (0, n.jsx)(V, {
                        src: "ixd/pinch-earbuds.mp4"
                    }), (0, n.jsx)(V, {
                        src: "ixd/pinch-salt.mp4"
                    }), (0, n.jsx)(k, {
                        children: "On a touch screen, the interface needs to first establish an anchor point from where the zooming originates, and it's a lot easier and more precise to pick the anchor point with the fingers pinched together:"
                    }), (0, n.jsx)(R, {
                        alt: "Two fingers close together are pinching the screen, with an anchor point forming on the center of both.",
                        src: tw,
                        width: "1920",
                        height: "1400"
                    }), (0, n.jsx)(k, {
                        children: "Technically, the anchor point also needs to be calculated when the fingers start from apart. But usually this implies zooming out, and that the exact precision of the origin is not as important. Deliberate precision requires two fingers to start from close together, kind of like grabbing an object."
                    }), (0, n.jsx)(R, {
                        alt: "Two fingers close together are pinching the screen, with an anchor point forming on the center of both.",
                        src: tb,
                        width: "1920",
                        height: "1400"
                    }), (0, n.jsx)(k, {
                        children: "Scientifically or intuitively, there are hundreds of design decisions made by someone obsessesing over the tiniest margins so that when they work, no one has to think about. And many of them tap into our instinctive behaviors."
                    })]
                })
            }

            function tV() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Kinetic Physics"
                    }), (0, n.jsx)(k, {
                        children: "The lock screen sliding up establishes that, in essence, it's just an overlay that can be dismissed by swiping up, and within that framing so is an app. That means you also now know how to dismiss an application."
                    }), (0, n.jsx)(k, {
                        children: "Let's take a look at how dismissing an app morphs into the Dynamic Island. Notice how the gesture retains the momentum and angle at which it was thrown. It's never perfectly centered or consistent in timing."
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-dynamic-island-physics-c.mp4"
                    }), (0, n.jsxs)(k, {
                        children: ["This movement builds on our natural sense of physics from the real world, like how swiping a playing card would feel. Although the movement of the playing card exhibits less bounce since it's conceptually lighter and does not magnetically morph into something.", " "]
                    }), (0, n.jsx)(V, {
                        src: "ixd/card-throw.mp4"
                    })]
                })
            }

            function tR() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Swipe Gestures"
                    }), (0, n.jsxs)(k, {
                        children: ["When does a swipe trigger an action? It seems trivial: you press down, move a little, and then finally trigger an action ", (0, n.jsx)("i", {
                            children: "after"
                        }), " releasing the finger. After building a few touch interactions myself using SwiftUI, I realised that might not always be the case. Sometimes we expect the action to be triggered ", (0, n.jsx)("i", {
                            children: "whilst"
                        }), " ", "swiping."]
                    }), (0, n.jsx)(k, {
                        children: "Lightweight actions, such as displaying overlays, feel more natural to trigger during the swipe after an arbitrary amount of distance. For example, with a single gesture, I can immediately grok the overlaying surface, understand that it gives me a search input, and then dismiss if it's not what I want. Waiting for the gesture to end would feel inappropriate here."
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-drag-search-c.mp4"
                    }), (0, n.jsx)(k, {
                        children: "Here's an example from the MercuryOS SwiftUI prototype I was working on. It feels expected to trigger an action when elements moving during the gesture reach their logical, final position. Notice how the screen is unlocked after both the titles snap to their position, and then locked with a single gesture without releasing the finger. Again, waiting for the gesture to end before unlocking would make the interface feel broken and provide less affordance."
                    }), (0, n.jsx)(V, {
                        src: "ixd/ipad-drag-mercury.mp4"
                    }), (0, n.jsx)(k, {
                        children: "Now, let's look at examples where triggering an action requires explicit intent. The iOS App Switcher will never dismiss an app before the gesture ends. No matter the distance or the fact that the app is partially off-screen:"
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-drag-app-switcher.mp4"
                    }), (0, n.jsx)(k, {
                        children: "This makes sense to me because dismissing an app is destructive, and it wouldn't feel nice if the app were to dismiss in the middle of the swipe. What if I were change my mind half-way through and accidentally reached the threshold for dismissing? I could potentially lose some important progress in an app! To make sure the interface responds to intent, triggering on gesture end, regardless of distance, feels right here."
                    }), (0, n.jsx)(k, {
                        children: "Here's another example where despite swiping an adequate amount of distance for the view to be fully visible and snap, it doesn't until the gesture ends. This makes it lightweight to briefly peek at another screen when scanning for an app, without committing to it, and quickly interrupt the gesture by changing direction."
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-drag-home-peek.mp4"
                    })]
                })
            }

            function tz() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Responsive Gestures"
                    }), (0, n.jsx)(k, {
                        children: "Truly fluid gestures are immediately responsive. As mentioned above, gestures can have an explicit trigger threshold, but this does not mean simply performing an animation 0 → 1 would feel great."
                    }), (0, n.jsx)(k, {
                        children: "For example, a naive implementation for pinching a card would exponentially zoom in after a certain threshold:"
                    }), (0, n.jsx)(V, {
                        src: "ixd/mercury-pinch-bad.mp4"
                    }), (0, n.jsx)(k, {
                        children: "Pinching an adequate amount to animate would not feel exactly broken here. But the interface gives zero affordance or confidence that the card is even pinchable with a lower velocity. Neither does this feel satisfying to perform."
                    }), (0, n.jsx)(k, {
                        children: "It feels a lot better by feeling the scale delta applying immediately, and then performing an animation past a given threshold:"
                    }), (0, n.jsx)(V, {
                        src: "ixd/mercury-pinch-good.mp4"
                    }), (0, n.jsx)(k, {
                        children: "For some reason navigating iOS Settings does not feel as responsive as the App Switcher. A layer slides over from the right which tells me that it can be dismissed by swiping left. But if you happen to mistap, then swiping back immediately does not interrupt the animation — you have to wait for it to end."
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-no-cancel.mp4"
                    })]
                })
            }

            function tI() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Fluid Morphing"
                    }), (0, n.jsx)(k, {
                        children: "We're all familiar with the beautifully fluid, interruptible gestures of iOS to quickly navigate apps. Swiping up morphs the full screen app into its icon:"
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-close-stretch.mp4"
                    }), (0, n.jsx)(k, {
                        children: "A curious detail here is that the icon is intentionally stretched from the bottom to fill the frame as it fludily morphs its shape from a vertical rectangle to a uniform square. It's a tiny bit more obvious what happens when looking at the non-standard GitHub icon:"
                    }), (0, n.jsx)(R, {
                        alt: "Two app icons are in focus, both of them have the bottom 10 points duplicated and stretched for an elongated effect.",
                        src: tx,
                        width: "1920",
                        height: "1080"
                    }), (0, n.jsx)(k, {
                        children: "This technique does assume that app icons adhere to the guidelines outlined by Apple. The Bluesky icon ignores the recommended safe zone and as a result the bottom ~10pt of the icon is cropped, duplicated, and stretched, resulting in this weird repeating image effect:"
                    }), (0, n.jsx)(R, {
                        alt: "The Bluesky app icon is in focus. It is an image of a blue sky with clouds. The bottom 10 points are duplicated and stretched, but because its an image, the result is an odd stretching image effect.",
                        src: tC,
                        width: "1920",
                        height: "1080"
                    }), (0, n.jsx)(k, {
                        children: "In practice this does not feel completely off, but definitely not as great:"
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-close-bsky.mp4"
                    })]
                })
            }

            function tS() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Frequency & Novelty"
                    }), (0, n.jsxs)(k, {
                        children: ["As a designer, I love to animate everything. Object permanence, creating a focal point, and delight are all good reasons for doing so. But it's not so obvious when ", (0, n.jsx)("i", {
                            children: "not"
                        }), " to animate something."]
                    }), (0, n.jsx)(k, {
                        children: "Sometimes we can get away with not animating mouse or keyboard interactions, without it feeling jarring. There is an inherent disconnect between input from peripheral devices and what happens on the screen. Pressing a key feels less visceral, and more mechanical than touching the screen."
                    }), (0, n.jsxs)(k, {
                        children: ["A good example for this would be command menus. It's tempting to throw an opacity and scale fade on the overlay.", " ", "But if we for a moment consider the interaction frequency being hundreds of times a day, it does start to feel more like cognitive burden after seeing the same animation for the hundredth time. ", (0, n.jsx)("sup", {
                            children: "3"
                        })]
                    }), (0, n.jsx)(k, {
                        children: "When so commonly executed, the interaction novelty is also diminished. It doesn't feel like you're doing anything peculiar, deserving of a special flourish."
                    }), (0, n.jsx)(V, {
                        src: "ixd/raycast-c.mp4"
                    }), (0, n.jsxs)(k, {
                        children: ["A case in point: I was working on a bookmarking tool (", (0, n.jsx)(B, {
                            href: "https://bmrks.com",
                            children: "bmrks.com"
                        }), ") and intuitively felt great about animating the active indicator and elements being added and removed from the list:"]
                    }), (0, n.jsx)(V, {
                        src: "ixd/list-motion.mp4"
                    }), (0, n.jsx)(k, {
                        children: "After a couple of days they began to feel sluggish. Despite making the motion even snappier, my perceived performance was making me feel like I have to wait too much when interfacing with the keyboard. I removed motion from core interactions and suddenly felt like I was moving much faster:"
                    }), (0, n.jsx)(V, {
                        src: "ixd/list-no-motion.mp4"
                    }), (0, n.jsx)(k, {
                        children: "Context (right-click) menus on macOS also appear without motion. Used thousands of times a day, with very low novelty and high frequency. Despite being a mouse interaction, it feels right to not animate the menu appearing:"
                    }), (0, n.jsx)(V, {
                        src: "ixd/macos-context-menu.mp4"
                    }), (0, n.jsx)(k, {
                        children: "Interestingly enough, the menu subtly fades out. On closer inspection, the selected item briefly blinks the accent color (pink) to provide assurance that the element was successfully selected. I can only assume that the menu fading out makes this feel more graceful and intentional than abruptly disappearing after the blink:"
                    }), (0, n.jsx)(V, {
                        src: "ixd/macos-context-menu-select.mp4"
                    }), (0, n.jsxs)(k, {
                        children: ["Another good example is the App Switcher on macOS which gets a lot of mileage for heavy keyboard users. The overlay never animates which makes moving between apps feel snappy:", " "]
                    }), (0, n.jsx)(V, {
                        src: "ixd/macos-cmd-tab-c.mp4"
                    }), (0, n.jsxs)(k, {
                        children: ["Furthermore, if the time delta between pressing Command and Tab is low enough, the previously active window receives focus immediately without showing the menu:", " "]
                    }), (0, n.jsx)(V, {
                        src: "ixd/macos-cmd-tab-fast-c.mp4"
                    })]
                })
            }

            function tL() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Implicit Input"
                    }), (0, n.jsx)(k, {
                        children: "Forever long we've been peeling back the layers between humans and computing. Touch input elevated the relationship by introducing gestures and haptics. Soon applications will no longer be bound by the constraints of a fixed screen."
                    }), (0, n.jsxs)(k, {
                        children: ["The keyboard, mouse, touch, voice are all explicit inputs. They feel like a natural extension of ourselves", " ", (0, n.jsx)("sup", {
                            children: "2"
                        }), " when dialed into perfection. But isn't the mother of all inputs no input at all? When an interface makes use of context as input and can infer what you're trying to do without asking, it truly feels magical."]
                    }), (0, n.jsx)(k, {
                        children: "For example, by looking at the screen, Apple Maps will show the active route navigation without unlocking. Apple Wallet will increase the brightness when presenting a pass for scanning. Spotify will adjust the interface to be more accessible while driving."
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-implicit-input-c.mp4"
                    }), (0, n.jsx)(k, {
                        children: "Some custom iOS apps will blur the contents of the app when opening the App Switcher. At first, I figured it was just a performance optimization. But it turns out that it's a deliberate attempt to conceal possibly sensitive data, like medical records or a bank statement."
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-lhv-blur.mp4"
                    })]
                })
            }

            function tQ() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Touch Content Visiblity"
                    }), (0, n.jsx)(k, {
                        children: "On touch interfaces, sometimes a finger might obfuscate what's happening on the screen which makes it hard to perform gestures at pixel-level precision. Commonly, the interface would then render a temporary representation of what's underneath the finger."
                    }), (0, n.jsx)(k, {
                        children: "For example, on iOS when pressing down and dragging to move the text caret, a magnifying loupe will appear above the touch point. However, whenever the finger moves downwards and no longer covers the caret, the loupe disappears."
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-caret-drag-c.mp4"
                    }), (0, n.jsx)(k, {
                        children: "A similar detail is used for the keyboard. Pressing a key will show an enlarged key which gives you confidence that the interface understood what you meant."
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-keyboard-press-c.mp4"
                    }), (0, n.jsx)(k, {
                        children: "It doesn't always make sense to mirror the obfuscated region. For example, sliders can be tiny and disappear under the touch of the thumb. It helps to ensure that the dragging gesture does not cancel when moving away from the slider and still pressing down:"
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-slider-drag-c.mp4"
                    }), (0, n.jsx)(k, {
                        children: "Although seeking video is mostly a visual interaction, there's an unintelligible level of discomfort apparent when interacting with an element that you can't see."
                    }), (0, n.jsx)(k, {
                        children: "Here's a more obvious example where it's critical to understand contents of the menu: "
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-toolbar-drag-c.mp4"
                    })]
                })
            }

            function tU() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Spatial Consistency"
                    }), (0, n.jsx)(k, {
                        children: "The Dynamic Island has this nice interaction where on tap the application slides out under from the Island to cover the screen:"
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-dynamic-island-default.mp4"
                    }), (0, n.jsxs)(k, {
                        children: ["But if the Island is ", (0, n.jsx)("i", {
                            children: "expanded"
                        }), " which conceptually tells the interface my intent is to receive ", (0, n.jsx)("i", {
                            children: "more"
                        }), " ", "detail, the application does not slide out from the Island. Instead, it launches from the icon, if its visible. Alternatively, the application slides in from the right:"]
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-dynamic-island-combined-c.mp4"
                    }), (0, n.jsx)(k, {
                        children: "I can only assume that by launching Spotify from the icon, it is a lot more clear where the audio is playing from. Say you had three music apps on the same row. Through motion this helps establish a relationship between the audio player and its source."
                    }), (0, n.jsx)(k, {
                        children: "Similarly, if the app slides in from the right, it communicates where it is spatially — in the App Switcher. By moving in from the right, not left, it also signifies that the app is now first on the stack of apps in the switcher."
                    }), (0, n.jsx)(k, {
                        children: "However, the native Clock app will never open from its icon. It always jumps out from the Island, even when expanded:"
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-dynamic-island-timer.mp4"
                    }), (0, n.jsx)(k, {
                        children: "This seems to support the theory above. Because the Island timer module is only specific to one app, and there can't be another with the same Island, there's no need to make it clear where it's from."
                    })]
                })
            }

            function tO() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Scrolling"
                    }), (0, n.jsx)(k, {
                        children: "On most operating systems, you can scroll any scrollable region, even if the window itself is not active. This is great, except when another window scrolls unintentionally."
                    }), (0, n.jsx)(k, {
                        children: "With the Magic Mouse I can scroll on a window, then move the pointer over a second window to click or find something, and the scroll events will not register on the second window. This feels great to me."
                    }), (0, n.jsx)(V, {
                        src: "ixd/macos-scroll-magic-mouse.mp4"
                    }), (0, n.jsx)(k, {
                        children: "However, with any traditional mouse, like the Logitech MX Master 3, the scrolling on the first window is cancelled and hijacked by the second window. And it's really frustrating when this happens daily:"
                    }), (0, n.jsx)(V, {
                        src: "ixd/macos-scroll-mx.mp4"
                    }), (0, n.jsx)(k, {
                        children: "With the Magic Mouse, scrolling is cancelled explicitly by focusing another window:"
                    }), (0, n.jsx)(V, {
                        src: "ixd/macos-scroll-magic-mouse-cancel.mp4"
                    }), (0, n.jsx)(k, {
                        children: "Pointing devices like the Magic Trackpad and Magic Mouse also unlock direct manipulation for desktop computing. Besides the obvious ones like swiping between apps, it's also possible to directly manipulate sliders by scrolling, all with a single interaction:"
                    }), (0, n.jsx)(V, {
                        src: "ixd/macos-sound-swipe-c.mp4"
                    })]
                })
            }

            function tD() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Fitts's Law"
                    }), (0, n.jsxs)(k, {
                        children: ["Fitts's Law states that the time to click on something depends on distance and size. ", (0, n.jsx)("sup", {
                            children: "5"
                        }), " The bigger the target, and the closer it is to where your pointer is, the better."]
                    }), (0, n.jsxs)(k, {
                        children: ['Operating systems make use of "magic corners" on the edges of the screen because the target area is infinitely large. ', (0, n.jsx)("sup", {
                            children: "6"
                        }), " For example, on macOS, you can configure what happens when the pointer moves to a corner. You could show the Launchpad from the top-left corner:"]
                    }), (0, n.jsx)(V, {
                        src: "ixd/macos-hot-corners.mp4",
                        style: {
                            borderTopLeftRadius: 0
                        }
                    }), (0, n.jsx)(k, {
                        children: "The target size is infinite because the pointer can't overshoot past the corner, so the precision required for this interaction is very low. Reaching for any corner becomes a quick flick of the mouse. This is also why operating systems place commonly used menus, like the Apple menu, in corners."
                    }), (0, n.jsx)(k, {
                        children: "Radial menus are an exemplary case of Fitts's Law. They spawn around the pointer making the size and distance towards any target the same for all actions. Over time, muscle memory will kick in and even make it possible to select an action based purely on distance and direction."
                    }), (0, n.jsx)(k, {
                        children: "Here's a radial menu you can try:"
                    }), (0, n.jsx)(Q, {
                        className: "dark",
                        style: {
                            height: "360px"
                        },
                        theme: "dark",
                        children: (0, n.jsx)(tk, {})
                    })]
                })
            }

            function tT() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Fidgetability"
                    }), (0, n.jsxs)(k, {
                        children: ["Wonderful interactions don't have to be entirely practical. We've all been in math class, either biting our lips or repetitively clicking a pencil while crunching numbers. Behaviors like this are considered fidgeting. In other words, repetitive movements that apparently help release situational stress, or even enhance concentration. Although there is no scientific research that supports this claim ", (0, n.jsx)("sup", {
                            children: "4"
                        }), ", fidgeting does regardless feel like a part of intentional interaction design."]
                    }), (0, n.jsx)(V, {
                        src: "ixd/fidgeting-pen.mp4"
                    }), (0, n.jsx)(k, {
                        children: "Fidgetability could also be an after-thought, or a happy side-effect. However, the AirPods case is uncannily satisfying to play with. Assuming it to be a coincidence would be very generous."
                    }), (0, n.jsx)(V, {
                        src: "ixd/fidgeting-airpods.mp4"
                    }), (0, n.jsx)(k, {
                        children: "Apple Pencil is a more obvious candidate to intentionally design to be fidgetable. The tip of the pencil is unscrewable which means it can be replaced eventually. Oddly enough, twisting the tip and rotating the pencil body provides satisfying friction to casually play with while thinking."
                    }), (0, n.jsx)(V, {
                        src: "ixd/fidgeting-pen-tip.mp4"
                    }), (0, n.jsx)(k, {
                        children: "Now here's a crazy one that I would not bet my money on being intentional. Although it is dope."
                    }), (0, n.jsx)(V, {
                        src: "ixd/fidgeting-pen-spin4.mp4"
                    })]
                })
            }

            function tH() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Scroll Landmarks"
                    }), (0, n.jsx)(k, {
                        children: "On macOS you can always find the pointer by shaking the mouse. This interaction feels wonderful because it taps into the frustration and natural reaction that people feel when losing track of the pointer."
                    }), (0, n.jsx)(V, {
                        src: "ixd/macos-find-mouse.mp4"
                    }), (0, n.jsx)(k, {
                        children: "Something similar quite often happens to me on mobile when browsing long-form content. I've scrolled down half-way, and while reading I want to quickly recall something from above. But then I feel awkward scrolling back up because I will lose my precious scroll position and reading progress."
                    }), (0, n.jsx)(k, {
                        children: "I made a tiny prototype where double tapping the scrollbar will place a landmark for the current scroll position. Now I could freely navigate around the page and double tap the landmark to get back to where I was before."
                    }), (0, n.jsx)(k, {
                        children: "This feels familiar to use because the scrollbar is already interactive on touch. If you didn't know, long-pressing the scrollbar would make it draggable which is much faster to scroll quickly."
                    }), (0, n.jsx)(V, {
                        src: "ixd/iphone-scroll-markers-c.mp4"
                    }), (0, n.jsx)(k, {
                        children: "This reminds me of an old minimap prototype I made. Inspired by games where you always have a bird's eye view of the surrounding environment. Why not have a similar heads up display for navigating a page?"
                    }), (0, n.jsx)(V, {
                        src: "ixd/minimap.mp4"
                    })]
                })
            }

            function tF() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(j, {
                        children: "Closing Thoughts"
                    }), (0, n.jsxs)(k, {
                        children: ["For me, understanding and articulating why something feels right does not come as intuitively as", " ", (0, n.jsx)("i", {
                            children: "designing"
                        }), ' something to feel right. But they are two sides of the same coin. There must be a reason. It can be as simple as a particular spring curve or something more innate, like metaphors. Analyzing and making sense of design details beyond just "it feels nice" helps nurture taste, amplify level of execution, and grow appreciation for how hard the pursuit of excellence is.']
                    }), (0, n.jsx)(j, {
                        children: "Acknowledgments"
                    }), (0, n.jsxs)(k, {
                        children: ["Thanks to ", (0, n.jsx)(B, {
                            href: "https://twitter.com/pacocoursey",
                            children: "Paco"
                        }), ",", " ", (0, n.jsx)(B, {
                            href: "https://twitter.com/almonk",
                            children: "Alasdair"
                        }), ",", " ", (0, n.jsx)(B, {
                            href: "https://twitter.com/emilkowalski_",
                            children: "Emil"
                        }), ",", " ", (0, n.jsx)(B, {
                            href: "https://twitter.com/thomaspaulmann",
                            children: "Thomas"
                        }), " for reading early drafts and their insights and feedback."]
                    }), (0, n.jsx)(k, {
                        children: "No artificial intelligence was used to generate content for this essay."
                    }), (0, n.jsx)(j, {
                        children: "Resources"
                    }), (0, n.jsxs)(A.x, {
                        as: "ol",
                        css: {
                            pl: 27,
                            a: {
                                display: "block"
                            },
                            "li::marker": {
                                fontSize: 15
                            }
                        },
                        children: [(0, n.jsx)(tX, {
                            href: "https://summit.sfu.ca/_flysystem/fedora/sfu_migrate/15215/2011_CHI_Understanding_Goodman_vy-edited.pdf",
                            children: "E. Goodman, E. Stolterman, R. Wakkary. Understanding Interaction Design Practices (2011)"
                        }), (0, n.jsx)(tX, {
                            href: "https://developer.apple.com/videos/play/wwdc2018/803/",
                            children: "C. Karunamuni, N. Vries, M. Alonso. Designing Fluid Interfaces (2018)"
                        }), (0, n.jsx)(tX, {
                            href: "https://brandur.org/interfaces",
                            children: "Brandur. Learning From Terminals to Design the Future of User Interfaces (2017)"
                        }), (0, n.jsx)(tX, {
                            href: "https://digscholarship.unco.edu/cgi/viewcontent.cgi?article=1669&context=dissertations",
                            children: "S. L. Kriescher. The Effects of Fidgets on Attention and Learning of College Students (2020)"
                        }), (0, n.jsx)(tX, {
                            href: "https://en.wikipedia.org/wiki/Fitts%27s_law",
                            children: "Paul Morris Fitts. The information capacity of the human motor system in controlling the amplitude of movement (1954)"
                        }), (0, n.jsx)(tX, {
                            href: "http://www.particletree.com/features/visualizing-fittss-law/",
                            children: "Kevin Hale. Visualizing Fitts's Law (2010)"
                        }), (0, n.jsx)(tX, {
                            href: "https://andymatuschak.org/files/papers/Apple%20Human%20Interface%20Guidelines%201987.pdf",
                            children: "Apple Human Interface Guidelines (1987)"
                        }), (0, n.jsx)(tX, {
                            href: "https://www.youtube.com/watch?v=76b3c_ssyPQ&ab_channel=Figma",
                            children: "Rasmus Andersson. The curious case of user interfaces (2023)"
                        }), (0, n.jsx)(tX, {
                            href: "https://museapp.com/podcast/17-rethink-the-os/",
                            children: "Metamuse. Rethink the OS with Jason Yuan (2020)"
                        }), (0, n.jsx)(tX, {
                            href: "https://www.mercuryos.com/",
                            children: "Jason Yuan. MercuryOS (2019)"
                        }), (0, n.jsx)(tX, {
                            href: "http://paulgraham.com/greatwork.html#f2n",
                            children: "Paul Graham. How to Do Great Work (2023)"
                        }), (0, n.jsx)(tX, {
                            href: "https://brianlovin.com/app-dissection",
                            children: "App Dissection. Brian Lovin"
                        })]
                    })]
                })
            }

            function tX(e) {
                return (0, n.jsx)("li", {
                    children: (0, n.jsx)(B, {
                        ...e
                    })
                })
            }
            let tW = "M3.39622 186.948H14.5303C15.2314 186.948 15.8936 186.626 16.3265 186.074L22.9168 177.677C23.7626 176.599 25.3603 176.504 26.3284 177.473L41.5721 192.734C42.0003 193.163 42.5815 193.404 43.1875 193.404H59.2312C59.7142 193.404 60.1848 193.25 60.5752 192.966L67.1611 188.171C68.1134 187.478 69.4369 187.622 70.2166 188.506L77.3631 196.6C78.1747 197.519 79.5674 197.633 80.5177 196.858L104.823 177.037C105.774 176.262 107.166 176.376 107.978 177.296L114.65 184.853C115.606 185.935 117.314 185.87 118.184 184.718L128.222 171.429C128.526 171.026 128.956 170.736 129.443 170.603L145.259 166.284C145.988 166.085 146.572 165.538 146.817 164.823L153.829 144.402C154.053 143.749 154.56 143.233 155.208 142.998L166.644 138.834C167.184 138.638 167.629 138.245 167.893 137.734L172.184 129.402C173.018 127.782 175.32 127.744 176.208 129.335L187.56 149.68C188.121 150.686 189.343 151.116 190.41 150.685L207.469 143.784C208.115 143.523 208.607 142.981 208.803 142.312L221.178 100.267C221.522 99.098 222.723 98.4051 223.907 98.6925L233.424 101.002C234.412 101.242 235.44 100.8 235.945 99.9176L244.91 84.2513C245.585 83.071 247.136 82.7391 248.236 83.5395L252.888 86.9272C254.02 87.7515 255.621 87.3718 256.262 86.1268L256.756 85.1683C257.513 83.698 259.534 83.4954 260.568 84.7861L271.18 98.0327C272.328 99.4649 274.61 99.0268 275.146 97.2716L286.424 60.3201C286.827 59.0008 288.298 58.337 289.554 58.9083L303.47 65.2413C304.34 65.6371 305.364 65.4495 306.037 64.7711L318.656 52.0495C319.085 51.6173 319.668 51.3741 320.277 51.3741H338.657C339.679 51.3741 340.576 52.053 340.854 53.0362L346.821 74.1388C347.347 75.9985 349.802 76.4046 350.899 74.8132L362.604 57.83",
                tN = "M15.0855 186.948H1.23236V210.063C1.23236 210.694 1.74349 211.205 2.374 211.205H363.626C364.257 211.205 364.768 210.694 364.768 210.063V57.83L349.529 77.0623C348.95 77.7922 347.789 77.56 347.535 76.664L340.619 52.2052C340.48 51.7136 340.032 51.3741 339.521 51.3741H319.801C319.497 51.3741 319.205 51.4957 318.991 51.7118L305.477 65.3355C305.141 65.6747 304.629 65.7685 304.194 65.5706L288.369 58.3692C287.741 58.0835 287.005 58.4154 286.804 59.075L274.515 99.3394C274.247 100.217 273.106 100.436 272.532 99.72L259.467 83.4128C258.95 82.7675 257.94 82.8688 257.561 83.6039L255.652 87.3111C255.331 87.9336 254.531 88.1235 253.965 87.7113L247.205 82.7895C246.656 82.3893 245.88 82.5553 245.543 83.1454L235.518 100.662C235.266 101.104 234.752 101.325 234.258 101.205L222.849 98.4359C222.257 98.2922 221.657 98.6386 221.485 99.223L208.648 142.841C208.549 143.176 208.304 143.447 207.981 143.577L189.476 151.062C188.942 151.278 188.331 151.063 188.051 150.56L175.171 127.476C174.727 126.68 173.576 126.699 173.159 127.509L167.688 138.131C167.556 138.387 167.333 138.583 167.063 138.681L154.695 143.184C154.371 143.302 154.118 143.56 154.006 143.886L146.621 165.395C146.498 165.752 146.207 166.026 145.842 166.125L129.067 170.705C128.824 170.772 128.609 170.917 128.457 171.119L117.342 185.833C116.907 186.409 116.053 186.442 115.575 185.9L107.181 176.393C106.805 175.967 106.172 175.883 105.697 176.196L79.4636 193.499C79.0728 193.756 78.5642 193.749 78.1806 193.481L69.5088 187.415C69.1093 187.135 68.5765 187.14 68.1824 187.427L60.2748 193.185C60.0795 193.327 59.8443 193.404 59.6028 193.404H42.7142C42.4112 193.404 42.1206 193.283 41.9065 193.069L25.4179 176.561C24.9339 176.077 24.135 176.124 23.7121 176.663L15.9836 186.511C15.7672 186.787 15.4361 186.948 15.0855 186.948Z";

            function tZ() {
                (0, tj.z)("touchend", C.pX), (0, tj.z)("mouseup", C.pX);
                let e = a.useRef(),
                    t = a.useRef(),
                    i = a.useRef(),
                    [s, r] = a.useState(100),
                    [o, l] = a.useState(363),
                    c = (0, eT.a)(g.vc.media.mobile),
                    d = c ? .8 : 1,
                    h = a.useMemo(() => {
                        let e = new Date().setHours(7, 35 + s / 100 * 60, 0, 0);
                        return new Intl.DateTimeFormat("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: !0
                        }).format(e)
                    }, [s]);

                function u(n) {
                    let {
                        left: a,
                        width: s,
                        x: o
                    } = e.current.getBoundingClientRect(), A = (0, C.uZ)((n - a) / s * 100, 0, 100);
                    r(A), setTimeout(() => {
                        let {
                            x: e,
                            width: n
                        } = t.current.getBoundingClientRect(), a = (e - o + n / 2 - 1) / d;
                        l(a), i.current.style.setProperty("clip-path", "inset(0 ".concat(s / d - a - 4, "px 0 0)"))
                    }, 1)
                }

                function p(e) {
                    u(e.clientX)
                }
                return (0, n.jsx)(A.x, {
                    as: m.E.div,
                    css: {
                        size: "100%",
                        center: !0,
                        touchAction: "none"
                    },
                    onPan: (e, t) => {
                        (0, C.dg)(), u(t.point.x)
                    },
                    children: (0, n.jsxs)(A.x, {
                        ref: e,
                        css: {
                            position: "relative",
                            cursor: "none",
                            "@mobile": {
                                scale: .8
                            }
                        },
                        style: {
                            "--d": '"'.concat(tW, '"')
                        },
                        onMouseMove: p,
                        onMouseLeave: p,
                        children: [(0, n.jsx)(A.x, {
                            css: {
                                height: "calc(100% - 10px)",
                                width: 2,
                                br: "$round",
                                background: "$grayA5",
                                position: "absolute"
                            },
                            style: {
                                transform: "translateX(".concat(o, "px)")
                            },
                            children: (0, n.jsx)(A.x, {
                                css: {
                                    "--height": "24px",
                                    br: "$round",
                                    height: "var(--height)",
                                    lineHeight: "var(--height)",
                                    background: "$gray5",
                                    px: 8,
                                    position: "absolute",
                                    left: "50%",
                                    fontSize: 13,
                                    color: "$gray12",
                                    whiteSpace: "nowrap",
                                    transform: "translateX(-50%)"
                                },
                                children: h
                            })
                        }), (0, n.jsx)(A.x, {
                            ref: t,
                            css: {
                                size: 14,
                                position: "absolute",
                                boxShadow: "0 0 0 2px #FFF, 0 0 8px 2px rgba(0, 0, 0, 0.12)",
                                background: "$blue9",
                                br: "$round",
                                offsetPath: "path(var(--d))"
                            },
                            style: {
                                offsetDistance: "".concat(s, "%")
                            }
                        }), (0, n.jsxs)("svg", {
                            width: "366",
                            height: "213",
                            viewBox: "0 0 366 213",
                            fill: "none",
                            children: [(0, n.jsx)("path", {
                                d: tN,
                                fill: "url(#gradient-grayscale)"
                            }), (0, n.jsx)("path", {
                                ref: i,
                                d: tN,
                                fill: "url(#gradient-color)"
                            }), (0, n.jsxs)("g", {
                                strokeWidth: "2.2",
                                strokeLinecap: "round",
                                children: [(0, n.jsx)("path", {
                                    d: tW,
                                    stroke: "var(--colors-gray8)"
                                }), (0, n.jsx)("path", {
                                    d: tW,
                                    stroke: "var(--colors-blue9)",
                                    pathLength: 1,
                                    style: {
                                        strokeDashoffset: 1 - s / 100,
                                        strokeDasharray: 1,
                                        opacity: 0 === s ? 0 : 1
                                    }
                                })]
                            }), (0, n.jsxs)("defs", {
                                children: [(0, n.jsxs)("linearGradient", {
                                    id: "gradient-color",
                                    x1: "183",
                                    y1: "51.3741",
                                    x2: "183",
                                    y2: "211.205",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, n.jsx)("stop", {
                                        stopColor: "var(--colors-blue5)"
                                    }), (0, n.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "var(--colors-blue5)",
                                        stopOpacity: "0"
                                    })]
                                }), (0, n.jsxs)("linearGradient", {
                                    id: "gradient-grayscale",
                                    x1: "183",
                                    y1: "51.3741",
                                    x2: "183",
                                    y2: "211.205",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, n.jsx)("stop", {
                                        stopColor: "var(--colors-gray5)"
                                    }), (0, n.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "var(--colors-gray5)",
                                        stopOpacity: "0"
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }
            tZ.Sibling = function() {
                return (0, n.jsxs)(A.x, {
                    css: {
                        mt: 12,
                        "> p": {
                            mt: 12
                        }
                    },
                    children: [(0, n.jsxs)(k, {
                        children: ["The graph is an ", (0, n.jsx)(E, {
                            children: "svg"
                        }), " element. And the rounded indicator itself has", " ", (0, n.jsx)(B, {
                            href: "https://developer.mozilla.org/en-US/docs/Web/CSS/offset-path",
                            children: "offset-path"
                        }), " defined with the same path definition that renders the graph stroke. Basically, this property enables moving an element along a given path. For brevity, some details are omitted but here is the general idea:"]
                    }), (0, n.jsx)(eI, {
                        language: "tsx",
                        children: '\n<div>\n  <div \n    data-dot-indicator\n    style={{\n      position: \'absolute\',\n      offsetPath: `path("${pathDefinition}")`\n    }} \n  />\n  <svg>\n    <path \n      d={pathDefinition} \n      stroke="#C7C7C7" \n      strokeWidth="2.2" \n      strokeLinecap="round"\n    />\n  </svg>\n</div>\n        '
                    }), (0, n.jsxs)(k, {
                        children: ["Now to move the indicator, on mouse move the mouse distance is mapped to", " ", (0, n.jsx)(B, {
                            href: "https://developer.mozilla.org/en-US/docs/Web/CSS/offset-distance",
                            children: "offset-distance"
                        }), " as a percentage:"]
                    }), (0, n.jsx)(eI, {
                        language: "tsx",
                        children: "\n<div \n  data-dot-indicator\n  style={{\n    position: 'absolute',\n    offsetPath: `path(\"${offsetPath}\")`,\n    offsetDistance: ((e.clientX - parentLeft) / parentWidth) * 100 + '%',\n  }} \n/>\n        "
                    }), (0, n.jsxs)(k, {
                        children: ["We could also use ", (0, n.jsx)(E, {
                            children: "offset-path"
                        }), " for the vertical indicator but I think that the label moving makes it tricky to read the value:"]
                    }), (0, n.jsx)(M, {
                        src: (0, C.jj)("graph-slider-relative.mp4"),
                        alt: "A vertical indicator displaying the time for a given data point is changing its vertical position relative to the dot indicator"
                    }), (0, n.jsxs)(k, {
                        children: ["So we want to make sure the label position stays fixed, and translate the line with ", (0, n.jsx)(E, {
                            children: "transform"
                        }), ". However, we can't just map the mouse movement one-to-one since the dot moves along a non-linear path. It would be out of sync that way, like so:"]
                    }), (0, n.jsx)(M, {
                        src: (0, C.jj)("graph-slider-outofsync.mp4"),
                        alt: "A vertical indicator displaying the time for a given data point is moving in a fixed vertical position, but out of sync from the dot indicator"
                    }), (0, n.jsxs)(k, {
                        children: ["Instead, we can calculate the distance between the start and its current position, and center it relative to the indicator dot:", " "]
                    }), (0, n.jsx)(eI, {
                        language: "tsx",
                        children: "\nconst x = dotX - parentX + dotWidth / 2 - lineWidth / 2\n\nreturn (\n  <div\n    data-vertical-indicator\n    style={{\n      position: 'absolute',\n      transform: `translateX(${x}px)`,\n    }} \n  />\n);\n        "
                    }), (0, n.jsxs)(k, {
                        children: ["Lastly, in the SVG there are two paths on top of each other: a grayscaled and a colored one. To partially highlight the graph, ", (0, n.jsx)(E, {
                            children: "clip-path"
                        }), " is used to reveal the colored elements based on the same variable from above:"]
                    }), (0, n.jsx)(eI, {
                        language: "tsx",
                        children: '\nconst clipPath = `inset(0 ${parentWidth - x - lineWidth * 2}px 0 0)`;\n\nreturn (\n  <svg>\n    <path d={gradientDefinition} fill="url(#grayscale)" />\n    <path d={gradientDefinition} fill="url(#color)" style={{ clipPath }} />\n    <g strokeWidth="2.2" strokeLinecap="round">\n      <path \n        d={strokeDefinition} \n        stroke="var(--colors-gray8)"     \n        style={{ clipPath }}\n      />\n      <path\n        d={strokeDefinition}\n        stroke="var(--colors-blue9)"\n      />\n    </g>\n  </svg>\n);\n        '
                    }), (0, n.jsx)(j, {
                        children: "Acknowledgements"
                    }), (0, n.jsxs)(k, {
                        children: ["Thanks to ", (0, n.jsx)(B, {
                            href: "https://family.co/",
                            children: "Family's"
                        }), " iOS app for the idea, Siddhartha for the", " ", (0, n.jsx)(B, {
                            href: "https://www.figma.com/community/file/1015259660780492673",
                            children: "graph"
                        }), ", and", " ", (0, n.jsx)(B, {
                            href: "https://twitter.com/pacocoursey",
                            children: "Paco"
                        }), " and", " ", (0, n.jsx)(B, {
                            href: "https://twitter.com/destroytoday",
                            children: "Jonnie"
                        }), " for their help and feedback."]
                    })]
                })
            };
            var tP = {
                    src: "/_next/static/media/quote.0de1d288.png",
                    height: 882,
                    width: 2166,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAFVBMVEV6enp+fn6JiYnS0tLc3N29vb3Pz8/3fJcjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGklEQVR4nGNgZWYCAwZmFgYQYGJgY2EEASYAAtMAL5VKX/EAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 3
                },
                tG = {
                    src: "/_next/static/media/gradient.a5953014.png",
                    height: 702,
                    width: 1238,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEX6+vrt8vdeWJr8AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAE0lEQVR4nGNggAFGOAPGgovAWAAAmwAGPFalvwAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 5
                },
                tY = {
                    src: "/_next/static/media/next-sr-good.aff7d344.png",
                    height: 1550,
                    width: 1596,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEX5+fn19fWNjY3Nzc6GhImgoJ7Y19f////9/fulpaXu7/DR19mVebbh5eW1tbVCREAAACDGtdrutJSnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nBXLURaAIAhFwYuCPNSy9r/ZTvM/GECOgSkzJaF3ew1A+zlrXaDuYXMKKZl/6N5a80p6VFTc9gE2BAF/pGE7FgAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                tJ = i(4960);
            let tq = ["All Posts", "Engineering", "Community", "Press", "Changelog"],
                tK = a.createContext(null),
                t$ = [1, 2, 3, 4, 5];

            function t_(e) {
                let {
                    time: t,
                    isLast: i
                } = e;
                return (0, n.jsxs)(A.x, {
                    css: {
                        width: "100%",
                        position: "relative",
                        borderTop: "2px solid $gray6"
                    },
                    children: [(0, n.jsxs)(d.x, {
                        as: "span",
                        size: "14",
                        color: "gray11",
                        css: {
                            position: "absolute",
                            left: -40,
                            top: -15,
                            color: "$gray9",
                            fontSize: 13
                        },
                        children: [t, " PM"]
                    }), (0, n.jsx)(t0, {
                        "data-time": "".concat(t, " ").concat("PM")
                    }), !i && Array.from({
                        length: 3
                    }, (e, i) => (0, n.jsx)(t0, {
                        "data-time": "".concat(t, ":").concat((i + 1) * 15, " ").concat("PM")
                    }, i))]
                })
            }

            function t0(e) {
                let {
                    ...t
                } = e, {
                    setHoveredIndex: i,
                    indexRef: s
                } = a.useContext(tK), [r] = a.useState(() => {
                    let e = s.current;
                    return s.current = s.current + 1, e
                });
                return (0, n.jsx)(A.x, {
                    css: {
                        width: "100%",
                        height: 15
                    },
                    "data-index": r,
                    onMouseEnter: () => {
                        i(r)
                    },
                    ...t
                })
            }
            var t1 = i(9660);
            let t7 = Array.from({
                    length: 181
                }, (e, t) => t - 90),
                t6 = a.createContext(0);

            function t2(e) {
                let {
                    selected: t = !1,
                    color: i = "$gray11",
                    ...s
                } = e, r = a.useContext(t6);
                return (0, n.jsx)(A.x, {
                    as: m.E.div,
                    css: {
                        d: "flex",
                        alignItems: "flex-end",
                        gap: 6,
                        willChange: "transform"
                    },
                    animate: {
                        x: r
                    },
                    transition: {
                        type: "spring",
                        damping: 100,
                        stiffness: 1e3
                    },
                    ...s,
                    children: t7.map(e => {
                        let a = e % 5 == 0;
                        return (0, n.jsxs)(A.x, {
                            css: {
                                position: "relative"
                            },
                            children: [a && (0, n.jsx)(d.x, {
                                as: "span",
                                css: {
                                    position: "absolute",
                                    top: -24,
                                    transition: "color 150ms ease",
                                    letterSpacing: "-0.5px",
                                    color: i,
                                    left: -3,
                                    ...e >= 10 && {
                                        left: -6
                                    },
                                    ...e < 0 && {
                                        left: -7
                                    },
                                    ...e <= -10 && {
                                        left: -10
                                    }
                                },
                                lineHeight: "16",
                                size: "14",
                                children: e
                            }), (0, n.jsx)(A.x, {
                                as: m.E.div,
                                className: t4({
                                    selected: t,
                                    labelled: a
                                })
                            })]
                        }, e)
                    })
                })
            }
            let t4 = (0, g.iv)({
                    width: 1.5,
                    bc: "$gray9",
                    br: "$round",
                    height: 8,
                    transition: "height 50ms ease",
                    variants: {
                        labelled: {
                            true: {
                                height: 16,
                                bc: "$gray12"
                            }
                        },
                        selected: {
                            true: {
                                bc: "$blue9"
                            }
                        }
                    }
                }),
                t3 = "What do you need?",
                t5 = (e, t) => {
                    let {
                        offsetLeft: i,
                        offsetTop: n
                    } = e, a = document.createElement("div"), s = getComputedStyle(e);
                    for (let e of s) a.style[e] = s[e];
                    let r = "INPUT" === e.tagName ? e.value.replace(/ /g, ".") : e.value,
                        o = r.substr(0, t);
                    a.textContent = o, "TEXTAREA" === e.tagName && (a.style.height = "auto"), "INPUT" === e.tagName && (a.style.width = "auto");
                    let A = document.createElement("span");
                    A.textContent = r.substr(t) || ".", a.appendChild(A), document.body.appendChild(a);
                    let {
                        offsetLeft: l,
                        offsetTop: c
                    } = A;
                    return document.body.removeChild(a), {
                        x: i + l,
                        y: n + c
                    }
                };

            function t8() {
                return (0, n.jsx)("svg", {
                    width: "24px",
                    height: "24px",
                    strokeWidth: "1.5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    color: "currentColor",
                    children: (0, n.jsx)("path", {
                        d: "M15.5 15.5L19 19M5 11a6 6 0 1012 0 6 6 0 00-12 0z",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })
            }
            var t9 = i(578),
                ie = i(3093);

            function it(e) {
                let {
                    zoom: t,
                    volume: i,
                    transition: a,
                    speed: s
                } = e, r = 1 >= Math.round(i);
                return (0, n.jsx)(A.x, {
                    "aria-hidden": !0,
                    as: m.E.div,
                    css: {
                        center: !0,
                        position: "relative",
                        pointerEvents: "none",
                        zIndex: 2,
                        color: "black",
                        ".dark &": {
                            color: "white",
                            mixBlendMode: "exclusion"
                        }
                    },
                    initial: !1,
                    animate: {
                        x: t ? 40 : 0,
                        scale: .75
                    },
                    transition: a,
                    children: (0, n.jsxs)(ie.A, {
                        transition: {
                            type: "spring",
                            stiffness: 300 / s,
                            damping: 30
                        },
                        children: [(0, n.jsx)(ia, {}), (0, n.jsx)(m.E.div, {
                            className: ii({
                                css: {
                                    top: 4,
                                    left: 6,
                                    zIndex: 2,
                                    width: 2
                                }
                            }),
                            animate: {
                                height: r ? 24 : 0
                            },
                            initial: !1
                        }), (0, n.jsx)(m.E.div, {
                            className: ii({
                                css: {
                                    top: 4,
                                    left: 4.5,
                                    width: 4,
                                    background: "$colors$gray2"
                                }
                            }),
                            animate: {
                                height: r ? 24 : 0
                            },
                            initial: !1
                        }), (0, n.jsxs)(A.x, {
                            css: {
                                center: !0,
                                x: -4,
                                gap: 0
                            },
                            children: [(0, n.jsx)(is, {
                                initial: !1,
                                animate: {
                                    opacity: (r ? 0 : i <= 25 || i >= 25) ? 1 : 0
                                }
                            }), (0, n.jsx)(ir, {
                                initial: !1,
                                animate: {
                                    opacity: i > 25 ? 1 : 0
                                }
                            }), (0, n.jsx)(io, {
                                initial: !1,
                                animate: {
                                    opacity: i > 66 ? 1 : 0
                                }
                            })]
                        })]
                    })
                })
            }
            let ii = (0, g.iv)({
                transformOrigin: "top left",
                height: 24,
                background: "white",
                br: 9999,
                transform: "rotate(-45deg)",
                position: "absolute"
            });

            function ia() {
                return (0, n.jsx)("svg", {
                    width: "25",
                    height: "25",
                    viewBox: "0 0 25 25",
                    fill: "none",
                    children: (0, n.jsx)("path", {
                        d: "M16.8574 20C17.5166 20 18 19.5078 18 18.8574V5.43652C18 4.77734 17.5166 4.25 16.8398 4.25C16.3916 4.25 16.0664 4.43457 15.5918 4.90039L11.918 8.33691C11.8652 8.38965 11.7949 8.41602 11.7158 8.41602H9.22852C7.92773 8.41602 7.22461 9.13672 7.22461 10.499V13.7686C7.22461 15.1309 7.92773 15.8516 9.22852 15.8516H11.7158C11.7949 15.8516 11.8564 15.8779 11.918 15.9307L15.5918 19.3936C16.0312 19.8154 16.4004 20 16.8574 20Z",
                        fill: "currentColor"
                    })
                })
            }

            function is(e) {
                return (0, n.jsx)(m.E.svg, {
                    width: "3",
                    height: "9",
                    viewBox: "0 0 3 9",
                    fill: "none",
                    ...e,
                    style: {
                        y: -.5
                    },
                    children: (0, n.jsx)("path", {
                        d: "M0.380841 8.70504C0.758771 8.95113 1.25096 8.86324 1.52342 8.47652C2.23533 7.5273 2.65721 6.18258 2.65721 4.78511C2.65721 3.38765 2.23533 2.05172 1.52342 1.09371C1.25096 0.70699 0.758771 0.619099 0.380841 0.873982C-0.049823 1.15523 -0.128925 1.67379 0.213849 2.18355C0.697247 2.87789 0.969708 3.80953 0.969708 4.78511C0.969708 5.7607 0.697247 6.68355 0.213849 7.38668C-0.128925 7.89644 -0.049823 8.415 0.380841 8.70504Z",
                        fill: "currentColor"
                    })
                })
            }

            function ir(e) {
                return (0, n.jsx)(m.E.svg, {
                    width: "4",
                    height: "14",
                    viewBox: "0 0 4 14",
                    fill: "none",
                    ...e,
                    children: (0, n.jsx)("path", {
                        d: "M0.922639 13.0602C1.32694 13.3063 1.81912 13.2184 2.10037 12.8054C3.24295 11.1882 3.91092 9.01727 3.91092 6.78485C3.91092 4.55242 3.25174 2.37274 2.10037 0.764338C1.81912 0.351252 1.32694 0.254572 0.922639 0.509455C0.500764 0.773127 0.43924 1.30047 0.755646 1.76629C1.68729 3.13738 2.22342 4.92156 2.22342 6.78485C2.22342 8.63934 1.6785 10.4235 0.755646 11.8034C0.448029 12.2692 0.500764 12.7878 0.922639 13.0602Z",
                        fill: "currentColor"
                    })
                })
            }

            function io(e) {
                return (0, n.jsx)(m.E.svg, {
                    width: "5",
                    height: "18",
                    viewBox: "0 0 5 18",
                    fill: "none",
                    ...e,
                    children: (0, n.jsx)("path", {
                        d: "M0.48256 17.4425C0.869279 17.6974 1.38783 17.5831 1.66908 17.1612C3.21596 14.8409 4.1476 11.9581 4.1476 8.79404C4.1476 5.62118 3.19838 2.74716 1.66908 0.418059C1.38783 -0.0126051 0.869279 -0.118074 0.48256 0.136809C0.0606854 0.40927 -0.000838012 0.927825 0.289201 1.39364C1.63393 3.4415 2.46889 5.98154 2.46889 8.79404C2.46889 11.589 1.63393 14.1466 0.289201 16.1856C-0.000838012 16.6515 0.0606854 17.17 0.48256 17.4425Z",
                        fill: "currentColor"
                    })
                })
            }
            let iA = [1, -1, 1];

            function il(e) {
                let {
                    items: t,
                    index: i
                } = e, {
                    speed: s
                } = iV(), r = a.useRef(null), [o, l] = a.useState(0), c = -360 / (2 === i ? 1.2 * t.length : 3 * t.length), d = (0, x.q)(0, {
                    stiffness: 350 / (s > 1 ? 2 * s : s),
                    damping: 30,
                    onComplete: () => {
                        (0, C.pX)()
                    }
                });
                return a.useEffect(() => {
                    let e = setInterval(() => {
                        d.set(Math.round(d.get() + iA[i]))
                    }, 50);
                    setTimeout(() => {
                        clearInterval(e)
                    }, 500)
                }, []), a.useEffect(() => {
                    let e = d.on("change", e => {
                        let t = r.current;
                        t.style.setProperty("--d", e)
                    });
                    return e
                }, []), (0, n.jsx)(A.x, {
                    ref: r,
                    as: "ul",
                    css: {
                        width: "100%",
                        height: "100%",
                        listStyle: "none",
                        position: "relative",
                        perspective: "900px",
                        userSelect: "none",
                        transformStyle: "preserve-3d",
                        cursor: "ns-resize",
                        touchAction: "none"
                    },
                    style: {
                        "--d": 0,
                        "--r": c
                    },
                    onWheel: function(e) {
                        (0, C.dg)(), d.set(Math.round(d.get() + e.deltaY / 25))
                    },
                    onTouchStart: e => {
                        l(e.touches[0].clientY)
                    },
                    onTouchMove: e => {
                        (0, C.dg)();
                        let t = e.touches[0].clientY - -1 * o;
                        d.set(Math.round(d.get() + t / (t >= 500 ? 250 : 125)))
                    },
                    children: [...t, ...t, ...t].map((e, t) => (0, n.jsx)(A.x, {
                        as: "li",
                        css: {
                            position: "absolute",
                            zIndex: 10,
                            left: "50%",
                            top: "calc(50% - 20px)",
                            "--rx": "calc(1deg * var(--r) * calc(var(--idx) - var(--d)))",
                            transform: "rotateX(var(--rx)) translateZ(160px) translateX(-50%)",
                            backgroundColor: "$gray2",
                            width: "50%",
                            color: "$gray9",
                            display: "flex",
                            px: 16,
                            ai: "center",
                            jc: "center",
                            height: 40,
                            fontSize: 13,
                            span: {
                                width: 32
                            },
                            ".dark &": {
                                color: "$gray8"
                            }
                        },
                        style: {
                            "--idx": t
                        },
                        children: e
                    }, t))
                })
            }
            let ic = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                id = Array.from({
                    length: 30
                }, (e, t) => t + 1),
                ih = ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012"],
                ig = (0, g.zo)("div", {
                    width: "100%",
                    height: "15%",
                    position: "absolute",
                    bottom: 0,
                    zIndex: 3,
                    opacity: 1,
                    backdropFilter: "blur(0.3px)",
                    pointerEvents: "none",
                    $$fadeColor: "rgba(255, 255, 255, 0.00001)",
                    ".dark &": {
                        $$fadeColor: "rgba(28, 28, 28, 0.00001)"
                    },
                    variants: {
                        variant: {
                            top: {
                                background: "linear-gradient(to top, $$fadeColor, $colors$gray2)",
                                maskImage: "linear-gradient(to bottom, $colors$gray2, $$fadeColor)",
                                top: 0,
                                left: 0
                            },
                            bottom: {
                                background: "linear-gradient(to bottom, $$fadeColor, $colors$gray2)",
                                maskImage: "linear-gradient(to top, $colors$gray2, $$fadeColor)",
                                right: 0,
                                bottom: 0
                            }
                        }
                    }
                }),
                iu = a.createContext({
                    active: 2,
                    setActive: () => {}
                }),
                ip = ["Home", "Projects", "Deployments", "Members", "Settings"];

            function im(e) {
                let {
                    children: t,
                    index: i
                } = e, {
                    speed: s
                } = iV(), {
                    active: r,
                    setActive: o
                } = a.useContext(iu), l = 0 === r, c = r === ip.length - 1, d = r === i;
                return (0, n.jsxs)(A.x, {
                    as: "button",
                    css: {
                        fontSize: 15,
                        br: 500,
                        position: "relative",
                        center: !0,
                        textAlign: "center",
                        color: "$gray11",
                        px: 12,
                        outline: 0,
                        cursor: "pointer",
                        transition: "color ".concat(150 * s, "ms ease, text-shadow ").concat(250 * s, "ms ease"),
                        ...d && {
                            color: "$gray12",
                            textShadow: "1px 1px 12px hsl(0deg 0% 100% / 57%)"
                        },
                        "&:hover": {
                            color: "$gray12"
                        }
                    },
                    onClick: () => o(i),
                    children: [t, d && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(A.x, {
                            as: m.E.div,
                            layoutId: "glow",
                            transition: {
                                delay: .03,
                                type: "spring",
                                stiffness: 120 / s,
                                damping: 20,
                                mass: 1
                            },
                            css: {
                                background: "white",
                                width: "50%",
                                height: 50,
                                br: 9999,
                                position: "absolute",
                                zIndex: 1,
                                filter: "blur(7px)",
                                bottom: -52
                            },
                            style: {
                                scale: 2,
                                opacity: .2,
                                rotate: 1e-5
                            }
                        }), (0, n.jsx)(A.x, {
                            as: m.E.div,
                            initial: !1,
                            layoutId: "active",
                            css: {
                                position: "absolute",
                                left: 0,
                                top: 0,
                                width: "100%",
                                px: 12,
                                height: "100%",
                                zIndex: 6,
                                background: "$grayA3",
                                transition: "backdrop-filter 500ms ease"
                            },
                            animate: {
                                borderTopLeftRadius: c ? 120 : 500,
                                borderTopRightRadius: l ? 120 : 500,
                                borderBottomRightRadius: l ? 120 : 500,
                                borderBottomLeftRadius: c ? 120 : 500
                            },
                            transition: {
                                type: "spring",
                                stiffness: 120 / s,
                                damping: 20,
                                mass: 1
                            }
                        })]
                    })]
                })
            }
            var ix = i(3935),
                iC = {
                    src: "/_next/static/media/38.4625a168.jpg",
                    height: 1067,
                    width: 800,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAdEAABBAIDAAAAAAAAAAAAAAAEAAECAyFBBhEi/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQX/xAAaEQACAgMAAAAAAAAAAAAAAAAAAwECFDFR/9oADAMBAAIRAxEAPwCzLlptAdRtgQ04ESl0/tnw+87REU7Kb0bIXE6P/9k=",
                    blurWidth: 6,
                    blurHeight: 8
                };
            let iw = [
                [(0, n.jsx)(function() {
                    return (0, n.jsxs)("svg", {
                        preserveAspectRatio: "xMidYMid meet",
                        width: "136",
                        height: "136",
                        viewBox: "0 0 136 136",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsxs)("g", {
                            clipPath: "url(#clip0_16329_10582)",
                            children: [(0, n.jsx)("path", {
                                d: "M94.9238 63.2042V78.329H97.4549V73.0816C98.4272 74.0385 99.7236 74.625 101.144 74.625C104.138 74.625 106.561 72.0476 106.561 68.8683C106.561 65.689 104.138 63.1116 101.144 63.1116C99.7236 63.1116 98.4272 63.698 97.4549 64.6549V63.2042H94.9238ZM97.4704 69.4239C97.4086 69.0535 97.4086 68.6831 97.4704 68.3127C97.5167 67.9886 97.6093 67.6799 97.7482 67.3712C98.489 65.7198 100.233 64.9173 101.884 65.4729C103.273 65.9359 104.199 67.2632 104.215 68.822C104.246 71.3685 101.838 73.0816 99.523 72.1556C98.3964 71.6926 97.6401 70.6123 97.4704 69.4239Z",
                                fill: "black"
                            }), (0, n.jsx)("path", {
                                d: "M64.5501 63.1424V64.6549C63.5778 63.698 62.2814 63.1116 60.8615 63.1116C57.8674 63.1116 55.4443 65.689 55.4443 68.8683C55.4443 72.0476 57.8674 74.625 60.8615 74.625C62.2814 74.625 63.5778 74.0385 64.5501 73.0816V74.5478H67.0812V63.127H64.5501V63.1424ZM62.4974 72.1402C60.1824 73.0662 57.7594 71.3531 57.8057 68.8065C57.8365 67.2477 58.7625 65.9205 60.1361 65.4575C61.7875 64.9019 63.5161 65.7044 64.2723 67.3558C64.4112 67.6645 64.5038 67.9731 64.5501 68.2972C64.6118 68.6676 64.6118 69.038 64.5501 69.4084C64.3649 70.6123 63.6241 71.6926 62.4974 72.1402Z",
                                fill: "black"
                            }), (0, n.jsx)("path", {
                                d: "M38.6221 74.5479L32.6802 58.9755C32.2017 57.7562 31.0751 57 29.8404 57H26.3524C25.1332 57 23.9911 57.7562 23.5281 58.9755L17.6325 74.1466C17.4936 74.4862 17.401 74.8411 17.3393 75.1961C17.3084 75.3504 17.293 75.5202 17.293 75.69C17.293 77.3877 18.6202 78.7149 20.3179 78.7149H35.7977C35.7977 78.7149 35.7977 78.7149 35.8132 78.7149C37.0015 78.7149 38.0819 77.9896 38.5603 76.9092C38.8536 76.1838 38.8999 75.3504 38.6221 74.5479ZM30.7818 75.5974H21.5372C21.4446 75.5974 21.1976 75.5665 21.0742 75.4893C20.6575 75.2115 20.3951 74.7485 20.5803 74.1775L25.2104 62.4789C25.303 62.2011 25.5808 61.8461 26.1981 61.8461C26.5994 61.8461 26.9543 62.0622 27.1087 62.4789L31.7696 74.1775C31.8313 74.3164 31.8313 74.4553 31.8313 74.5479C31.8313 75.1189 31.3529 75.5974 30.7818 75.5974Z",
                                fill: "black"
                            }), (0, n.jsx)("path", {
                                d: "M54.4877 72.2484C53.9321 73.0046 53.2376 73.5911 52.4042 74.0232C51.4936 74.4862 50.4904 74.7177 49.4101 74.7177C47.6507 74.7177 46.2154 74.1621 45.0578 73.0663C43.9158 71.9706 43.3447 70.5661 43.3447 68.853C43.3447 67.109 43.9312 65.6737 45.0887 64.547C46.2617 63.4204 47.7124 62.8494 49.441 62.8494C50.475 62.8494 51.4319 63.0654 52.3116 63.4821C53.037 63.8371 53.6697 64.3155 54.1945 64.9175L52.2344 66.7386C51.4627 65.7817 50.5367 65.3033 49.4255 65.3033C48.4686 65.3033 47.6661 65.6274 47.0488 66.2756C46.416 66.9238 46.1073 67.7572 46.1073 68.7758C46.1073 69.8099 46.4314 70.6433 47.0796 71.2915C47.7278 71.9397 48.5149 72.2638 49.4564 72.2638C50.6602 72.2638 51.6942 71.7391 52.5277 70.6741L54.4877 72.2484Z",
                                fill: "black"
                            }), (0, n.jsx)("path", {
                                d: "M91.8834 72.9581C90.7413 74.0848 89.306 74.6404 87.5775 74.6404C85.8489 74.6404 84.4136 74.0693 83.2561 72.9427C82.114 71.8161 81.543 70.3962 81.543 68.6985C81.543 66.9854 82.114 65.5655 83.2561 64.4388C84.3982 63.3122 85.8335 62.7566 87.5775 62.7566C89.306 62.7566 90.7413 63.3122 91.8834 64.4388C93.0255 65.5655 93.5965 66.9854 93.5965 68.6985C93.5965 70.4116 93.0255 71.8315 91.8834 72.9581ZM85.2007 71.2296C85.8335 71.8778 86.6206 72.2019 87.5775 72.2019C88.5343 72.2019 89.3369 71.8778 89.9542 71.2141C90.5716 70.5505 90.8802 69.7171 90.8802 68.6985C90.8802 67.6799 90.5716 66.8465 89.9542 66.1983C89.3369 65.5501 88.5498 65.226 87.5775 65.226C86.6052 65.226 85.8026 65.5501 85.1853 66.1983C84.5679 66.8465 84.2593 67.6799 84.2593 68.6985C84.2593 69.7325 84.5679 70.5814 85.2007 71.2296Z",
                                fill: "black"
                            }), (0, n.jsx)("path", {
                                d: "M80.2153 67.8034V74.5478H77.252V68.3744C77.252 67.4175 77.0205 66.7076 76.5421 66.2137C76.0637 65.7199 75.4 65.4729 74.5666 65.4729C73.3937 65.4729 72.4522 66.0594 71.6342 66.8619V74.5478H68.9951V63.127H71.5879V64.3463C72.6529 63.59 73.8875 63.0344 75.3229 63.0344C76.8045 63.0344 77.9928 63.4511 78.888 64.3C79.7677 65.1488 80.2153 66.3063 80.2153 67.8034Z",
                                fill: "black"
                            }), (0, n.jsx)("path", {
                                d: "M118.706 63.0344L111.576 78.2364H108.983L111.453 73.0508L106.452 63.0344H109.184L112.795 70.2264L116.222 63.0344H118.706Z",
                                fill: "black"
                            })]
                        }), (0, n.jsx)("defs", {
                            children: (0, n.jsx)("clipPath", {
                                id: "clip0_16329_10582",
                                children: (0, n.jsx)("rect", {
                                    width: "102",
                                    height: "21.6995",
                                    fill: "white",
                                    transform: "translate(17 57)"
                                })
                            })
                        })]
                    })
                }, {}, "1"), (0, n.jsx)(function() {
                    return (0, n.jsxs)("svg", {
                        preserveAspectRatio: "xMidYMid meet",
                        width: "136",
                        height: "136",
                        viewBox: "0 0 136 136",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsx)("mask", {
                            id: "mask0_16329_10565",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: "30",
                            y: "56",
                            width: "76",
                            height: "25",
                            children: (0, n.jsx)("path", {
                                d: "M105.335 72.5994C105.24 72.5994 105.05 72.6944 105.05 72.8844C104.292 75.0664 103.248 76.3949 102.393 76.3949C101.918 76.3949 101.73 75.8249 101.73 74.9714C101.73 72.7894 103.058 68.1405 103.722 66.0535C103.817 65.7685 103.817 65.5785 103.817 65.39C103.817 64.82 103.437 64.4415 102.678 64.4415C101.825 64.4415 100.781 64.8215 99.9261 66.4335C99.6411 65.01 98.5976 64.3465 97.2691 64.3465C95.6556 64.3465 94.1386 65.39 92.9051 67.0035C91.6716 68.6169 90.1531 69.1854 89.1096 68.9005C89.8681 66.9085 90.2481 65.485 90.2481 64.4415C90.2481 62.733 89.3946 61.6895 88.0661 61.6895C85.9791 61.6895 84.8406 63.6815 84.8406 65.77C84.8406 67.3835 85.5991 68.9954 87.1176 69.8504C85.7891 72.8859 83.7972 75.6379 83.1322 75.6379C82.1837 75.6379 81.8987 70.9889 81.9937 67.5734C81.9937 65.6765 82.1837 65.5815 82.1837 65.0115C82.1837 64.6315 81.9937 64.4415 81.1402 64.4415C79.1482 64.4415 78.4832 66.15 78.3882 68.142C78.3882 68.9005 78.1982 69.6604 78.0082 70.3239C77.1547 73.3594 75.4462 75.6379 74.3077 75.6379C73.7377 75.6379 73.6442 75.0679 73.6442 74.4044C73.6442 72.2224 74.8777 69.4704 74.8777 67.1935C74.8777 65.485 74.1192 64.4415 72.6957 64.4415C71.0822 64.4415 68.8053 66.4335 66.8133 70.1339C67.4768 67.287 67.7618 64.5365 65.7698 64.5365C65.2948 64.5365 64.9163 64.6315 64.5363 64.8215C64.2513 64.9165 64.0613 65.2015 64.1563 65.485C64.3463 68.5205 61.6893 76.2064 59.2223 76.2064C58.7473 76.2064 58.5588 75.7314 58.5588 74.9729C58.5588 72.7909 59.8873 68.2369 60.5508 66.055C60.6458 65.77 60.6458 65.58 60.6458 65.2965C60.6458 64.7265 60.2658 64.443 59.5073 64.443C58.6538 64.443 57.6103 64.823 56.7553 66.435C56.4703 65.0115 55.4268 64.348 54.0984 64.348C51.8214 64.348 49.3544 66.7199 48.3109 69.7554C46.8874 73.8359 43.8519 77.8199 39.8664 77.8199C36.261 77.8199 34.364 74.7844 34.364 70.0404C33.889 63.3045 38.918 57.7055 42.6184 57.7055C44.4204 57.7055 45.2754 58.844 45.2754 60.5525C45.2754 62.6395 44.1369 63.683 44.1369 64.443C44.1369 64.728 44.3269 64.918 44.7069 64.918C46.3204 64.918 48.2174 63.021 48.2174 60.364C48.2174 57.707 46.1304 56 42.4299 56C36.2625 55.9955 30 62.163 30 70.1325C30 76.4899 33.1305 80.2839 38.5394 80.2839C42.2399 80.2839 45.4654 77.4369 47.1739 74.0214C47.3639 76.7734 48.5974 78.2904 50.5894 78.2904C52.2978 78.2904 53.7198 77.2469 54.7633 75.4435C55.1433 77.3404 56.2818 78.1954 57.6103 78.1954C59.2238 78.1954 60.5523 77.1519 61.8793 75.2535C61.8793 76.7719 62.1643 78.1004 63.4928 78.1004C64.0628 78.1004 64.8213 78.0054 64.9163 77.4369C66.2448 71.8395 69.6602 67.2855 70.6087 67.2855C70.8937 67.2855 70.9887 67.5705 70.9887 67.949C70.9887 69.4675 69.9452 72.598 69.9452 74.59C69.9452 76.7719 70.8937 78.1954 72.7922 78.1954C74.8792 78.1954 77.0612 75.6334 78.3897 71.838C78.8647 75.3485 79.8132 78.1954 81.3317 78.1954C83.1336 78.1954 86.4556 74.305 88.4476 70.226C89.2061 70.321 90.4396 70.321 91.4831 69.4675C91.0081 70.701 90.7246 72.0295 90.7246 73.3579C90.7246 77.1534 92.5266 78.1969 94.1401 78.1969C95.8486 78.1969 97.2706 77.1534 98.3141 75.3499C98.694 76.9634 99.5475 78.1019 101.161 78.1019C103.723 78.1019 106 75.4449 106 73.3579C105.904 72.9794 105.619 72.5994 105.335 72.5994ZM52.1064 76.2049C51.0629 76.2049 50.6829 75.1614 50.6829 73.6429C50.6829 70.986 52.4849 66.432 54.4783 66.432C55.3318 66.432 55.6168 67.4755 55.6168 68.709C55.6168 71.3659 53.9098 76.2049 52.1064 76.2049ZM87.5911 68.1405C86.9276 67.382 86.7376 66.432 86.7376 65.4835C86.7376 64.345 87.1176 63.4915 87.5911 63.4915C88.0661 63.4915 88.2546 63.9665 88.2546 64.63C88.2561 65.6735 87.8761 67.287 87.5911 68.1405ZM95.6571 76.2049C94.6136 76.2049 94.2336 74.9714 94.2336 73.6429C94.2336 71.081 96.0356 66.432 98.0291 66.432C98.8826 66.432 99.1676 67.4755 99.1676 68.709C99.1676 71.3659 97.4591 76.2049 95.6571 76.2049Z",
                                fill: "white"
                            })
                        }), (0, n.jsx)("g", {
                            mask: "url(#mask0_16329_10565)",
                            children: (0, n.jsx)("path", {
                                d: "M106.187 54.666H29.7139V81.5163H106.187V54.666Z",
                                fill: "black"
                            })
                        })]
                    })
                }, {}, "2"), (0, n.jsx)(iy, {}, "3"), (0, n.jsx)(function() {
                    return (0, n.jsxs)("svg", {
                        preserveAspectRatio: "xMidYMid meet",
                        width: "136",
                        height: "136",
                        viewBox: "0 0 136 136",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsx)("g", {
                            clipPath: "url(#clip0_16329_10564)",
                            children: (0, n.jsx)("path", {
                                d: "M36.5551 69C36.9106 69.6222 37.1106 70.4 37.1106 71.3111V71.3555C37.1106 72.2889 36.9328 73.1333 36.5551 73.8889C36.1773 74.6444 35.6439 75.2666 34.9773 75.8C34.2884 76.3111 33.4662 76.7111 32.4884 77C31.5106 77.2889 30.4217 77.4222 29.2217 77.4222C27.3995 77.4222 25.6884 77.1778 24.1106 76.6666C22.5328 76.1555 21.1773 75.4 20.0439 74.4L23.2439 70.6C24.2217 71.3555 25.2439 71.8889 26.3106 72.2C27.3773 72.5333 28.4439 72.6889 29.5106 72.6889C30.0662 72.6889 30.4439 72.6222 30.6884 72.4889C30.9328 72.3555 31.0439 72.1555 31.0439 71.9333V71.8889C31.0439 71.6222 30.8662 71.4222 30.5106 71.2444C30.1551 71.0667 29.5106 70.8889 28.5551 70.7111C27.5551 70.5111 26.5995 70.2667 25.6884 70C24.7773 69.7333 23.9773 69.3778 23.2884 68.9555C22.5995 68.5333 22.0439 68 21.6439 67.3555C21.1995 66.6667 20.9995 65.8667 20.9995 64.9333V64.8889C20.9995 64.0444 21.1551 63.2444 21.4884 62.5111C21.8217 61.7778 22.3106 61.1333 22.9551 60.6C23.5995 60.0444 24.3995 59.6222 25.3328 59.3111C26.2662 59 27.3551 58.8444 28.5995 58.8444C30.3328 58.8444 31.8662 59.0444 33.1551 59.4667C34.4662 59.8667 35.6217 60.4889 36.6662 61.3111L33.7551 65.3333C32.9106 64.7111 31.9995 64.2667 31.0662 63.9778C30.1106 63.6889 29.2217 63.5555 28.3995 63.5555C27.9551 63.5555 27.6217 63.6222 27.4217 63.7555C27.1995 63.8889 27.1106 64.0667 27.1106 64.2889V64.3333C27.1106 64.5778 27.2662 64.7778 27.5995 64.9555C27.9328 65.1333 28.5551 65.3111 29.4884 65.4889C30.6217 65.6889 31.6662 65.9333 32.5995 66.2222C33.5328 66.5111 34.3328 66.8889 35.0217 67.3333C35.6662 67.8222 36.1995 68.3555 36.5551 69ZM36.7773 64.2444H42.0439V77.0889H48.0217V64.2444H53.2884V59.1778H36.7773V64.2444ZM106.199 58.0667L96.5773 77.0889H102.311L106.199 69.4L110.111 77.0889H115.844L106.199 58.0667ZM79.3995 58.0667L89.0439 77.0889H83.3106L79.4217 69.4L75.5328 77.0889H71.6439H69.7995H64.8217L61.4439 71.9778H61.3995H60.1773V77.0889H54.1995V59.1778H62.8884C64.4884 59.1778 65.7995 59.3555 66.8439 59.7333C67.8662 60.0889 68.7106 60.6 69.3328 61.2222C69.8884 61.7555 70.2884 62.3778 70.5551 63.0667C70.8217 63.7555 70.9551 64.5555 70.9551 65.4667V65.5111C70.9551 66.8222 70.6439 67.9333 69.9995 68.8222C69.3773 69.7333 68.5106 70.4444 67.4217 70.9778L70.5328 75.5111L79.3995 58.0667ZM64.9995 65.9111C64.9995 65.3333 64.7995 64.9111 64.3773 64.6222C63.9773 64.3333 63.4217 64.2 62.7106 64.2H60.1106V67.7111H62.6884C63.3995 67.7111 63.9773 67.5555 64.3773 67.2444C64.7773 66.9333 64.9995 66.5111 64.9995 65.9555V65.9111ZM96.7106 59.1778L92.7995 66.8889L88.8884 59.1778H83.1551L92.7995 78.2L102.422 59.1778H96.7106Z",
                                fill: "black"
                            })
                        }), (0, n.jsx)("defs", {
                            children: (0, n.jsx)("clipPath", {
                                id: "clip0_16329_10564",
                                children: (0, n.jsx)("rect", {
                                    width: "96",
                                    height: "20.2222",
                                    fill: "white",
                                    transform: "translate(20 58)"
                                })
                            })
                        })]
                    })
                }, {}, "4"), (0, n.jsx)(iv, {}, "5")],
                [(0, n.jsx)(function() {
                    return (0, n.jsxs)("svg", {
                        preserveAspectRatio: "xMidYMid meet",
                        width: "136",
                        height: "136",
                        viewBox: "0 0 136 136",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsx)("path", {
                            d: "M15 78.6357C15 79.9955 15.8789 80.8774 17.2337 80.8774L23.7599 80.8775C27.6531 80.8775 30.8378 79.5554 33.0031 77.2409H15V78.6357ZM23.7599 56.0001L17.2337 56C15.8789 56 15 56.882 15 58.2418V59.6366H33.0031C30.8378 57.3221 27.6531 56.0001 23.7599 56.0001ZM29.4553 71.9835C29.4553 73.0835 30.1693 73.7973 31.2701 73.7973H35.1807C35.624 72.6932 35.9219 71.4794 36.0603 70.1697H31.2701C30.1693 70.1697 29.4553 70.8833 29.4553 71.9835ZM24.0349 64.903C24.0349 66.0032 24.7489 66.7168 25.8497 66.7168H36.0603C35.9219 65.407 35.624 64.1932 35.1807 63.0892H25.8497C24.7489 63.0892 24.0349 63.8028 24.0349 64.903ZM25.8485 71.9835C25.8485 70.8833 25.1345 70.1697 24.0336 70.1697H15V73.7973H24.0336C25.1345 73.7973 25.8485 73.0837 25.8485 71.9835ZM20.4281 64.903C20.4281 63.8028 19.7141 63.0892 18.6132 63.0892H15V66.7168H18.6132C19.7141 66.7168 20.4281 66.0032 20.4281 64.903Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M50.3072 72.1704C48.3729 72.1704 47.2101 70.7781 47.2101 69.0607C47.2101 67.3433 48.3952 65.9511 50.3072 65.9511C52.2192 65.9511 53.4043 67.3433 53.4043 69.0607C53.4043 70.7781 52.2415 72.1704 50.3072 72.1704ZM53.1935 65.107C52.4212 64.1755 51.3245 63.6046 49.9633 63.6046C46.9207 63.6046 44.7324 66.0791 44.7324 69.1314C44.7324 72.1838 46.8999 74.6582 49.9633 74.6582C51.3245 74.6582 52.4212 74.0872 53.1935 73.1558V74.386H55.882V59.7317H53.1935V65.107ZM60.9269 68.0642C61.2177 66.6446 62.157 65.9227 63.3917 65.9227C64.6158 65.9227 65.5108 66.6769 65.7964 68.0642H60.9269ZM63.4588 63.4633C60.3151 63.4633 58.3597 65.9906 58.3597 69.0819C58.3597 72.2836 60.4492 74.6582 63.5547 74.6582C65.6965 74.6582 66.9957 73.6616 67.7998 72.4067L65.8004 71.1215C65.2978 71.8124 64.4935 72.1775 63.6314 72.1775C62.2212 72.1775 61.2768 71.5131 60.9549 70.1845H66.232L68.1545 70.2011C68.2274 69.8515 68.2704 69.4902 68.2704 69.0819C68.2704 66.3893 66.6218 63.4633 63.4588 63.4633ZM76.4919 68.8771C77.2218 69.389 77.6844 70.1567 77.6844 71.1697C77.6844 73.2169 76.31 74.6374 73.7404 74.6374C71.3223 74.6374 70.0256 73.3933 69.5093 72.1368L71.7288 70.8355L71.7502 70.9107C71.8422 71.1957 72.2666 72.1933 73.7006 72.1933C74.7363 72.1933 75.0551 71.7337 75.0551 71.3278L75.0486 71.2305C75.0207 71.0345 74.8819 70.7487 74.2584 70.5012L73.9558 70.3908C72.4208 69.8698 69.9161 69.4775 69.9161 66.9708C69.9161 64.7776 71.6284 63.6078 73.7404 63.6078C75.7154 63.6078 76.984 64.8416 77.4656 65.8016L75.2941 67.0753L75.2482 66.977C75.1127 66.7133 74.6667 66.0099 73.7604 66.0099C72.645 66.0099 72.5454 66.6576 72.5454 66.8455C72.5454 67.3574 73.0304 67.5876 74.0675 67.9043L74.8331 68.1326C75.2823 68.2707 75.7403 68.4334 76.2105 68.7012L76.4919 68.8771ZM84.0722 72.0053C85.1384 72.0053 85.9583 71.4718 86.3726 70.5968L88.5999 71.9361C87.7272 73.5414 86.1011 74.6582 84.0722 74.6582C80.9949 74.6582 78.8436 72.1891 78.8436 69.1435C78.8436 66.0976 81.0147 63.6286 84.0722 63.6286C86.0713 63.6286 87.6914 64.7272 88.5735 66.3111L86.3511 67.681C85.9287 66.8174 85.1154 66.2815 84.0722 66.2815C82.5173 66.2815 81.4132 67.5628 81.4132 69.1435C81.4132 70.7239 82.5071 72.0053 84.0722 72.0053ZM93.0657 65.6551C93.5475 64.3976 94.5289 63.6783 96.0069 63.6751V66.6637C94.3406 66.4946 93.1191 67.3426 93.0682 69.3488L93.0657 69.5903V74.2597H90.5696V63.8826H93.0657V65.6551ZM97.7176 74.2597V63.8825H100.214V74.2597H97.7176ZM97.7176 62.4976V59.7317H100.296V62.4976H97.7176ZM108.012 63.5712C110.837 63.5712 112.869 66.0244 112.869 69.0504C112.869 72.0764 110.856 74.5295 108.012 74.5295C106.748 74.5295 105.73 73.9635 105.013 73.0401V78.3898H102.516V63.8618H105.013V65.0606C105.73 64.1372 106.748 63.5712 108.012 63.5712ZM107.693 66.1241C106.038 66.1241 105.013 67.4342 105.013 69.0504C105.013 70.6665 106.019 71.9768 107.693 71.9768C109.366 71.9768 110.373 70.6665 110.373 69.0504C110.373 67.4342 109.347 66.1241 107.693 66.1241ZM120.302 66.4904H118.051V70.8354C118.051 72.1933 119.366 71.9008 120.302 71.9008V74.3449L120.054 74.3763C119.827 74.4 119.45 74.4284 118.947 74.4284L118.582 74.4206C116.841 74.3429 115.482 73.6495 115.482 70.8354V66.4904H113.749V63.9001H115.482V60.9756H118.051V63.9001H120.302V66.4904Z",
                            fill: "black"
                        })]
                    })
                }, {}, "6"), (0, n.jsx)(function() {
                    return (0, n.jsxs)("svg", {
                        preserveAspectRatio: "xMidYMid meet",
                        width: "136",
                        height: "136",
                        viewBox: "0 0 136 136",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsx)("g", {
                            clipPath: "url(#clip0_16318_96887)",
                            children: (0, n.jsx)("path", {
                                d: "M105.611 67.9492C105.611 64.1701 108.49 61.5067 112.306 61.5067C116.121 61.5067 119 64.1701 119 67.9492C119 71.7283 116.121 74.3917 112.306 74.3917C108.49 74.3917 105.611 71.6923 105.611 67.9492ZM115.221 67.9492C115.221 66.1856 114.105 64.8899 112.342 64.8899C110.578 64.8899 109.462 66.1856 109.462 67.9492C109.462 69.7128 110.578 71.0085 112.342 71.0085C114.105 71.0085 115.221 69.7488 115.221 67.9492ZM103.092 64.9619C103.344 65.4658 103.452 66.0056 103.452 66.5815C103.452 67.9492 102.732 69.2089 101.58 70.1807C103.164 70.9365 104.1 72.7721 104.1 74.4996C104.1 77.7389 101.472 79.8984 97.4771 79.8984C93.482 79.8984 90.8546 77.7749 90.8546 74.4996C90.8186 72.7001 91.7904 71.0445 93.374 70.1807C92.1863 69.2089 91.5025 67.9492 91.5025 66.5815C91.5025 63.7382 93.7339 61.6507 97.2611 61.6507C99.3486 61.6507 99.9605 62.0106 101.148 62.0106C101.94 62.0466 102.768 61.8306 103.452 61.3987C103.704 61.2548 103.956 61.1468 104.243 61.1468C104.711 61.1468 104.963 61.6147 104.963 62.1905C105.071 63.4502 104.279 64.566 103.092 64.9619V64.9619ZM100.392 74.3917C100.392 72.952 99.2766 71.9442 97.5131 71.9442C95.7495 71.9442 94.6337 72.916 94.6337 74.3917C94.6337 75.7593 95.8574 76.8391 97.5131 76.8391C99.1687 76.8391 100.392 75.7593 100.392 74.3917ZM95.1736 66.7975C95.2096 68.0572 96.2893 69.0649 97.585 69.0289C98.8087 68.9929 99.7445 68.0212 99.8165 66.7975C99.8165 65.5018 98.8807 64.602 97.5131 64.602C96.1454 64.602 95.1736 65.4658 95.1736 66.7975V66.7975ZM89.127 68.2011V72.7001C89.127 73.5639 88.8031 73.9238 87.8673 73.9238H86.6076C85.6718 73.9238 85.3479 73.5639 85.3479 72.7001V68.3091C85.3479 67.1934 85.168 66.4015 84.7721 65.8977C84.3042 65.3218 83.5843 65.0339 82.8645 65.0699C82.1087 65.0339 81.3889 65.3578 80.885 65.8977C80.4531 66.4015 80.1651 67.1934 80.1651 68.2731V72.6641C80.1651 73.5639 79.7692 73.8878 78.9054 73.8878H77.6457C76.7819 73.8878 76.386 73.5639 76.386 72.6641V62.5864C76.386 62.0106 76.674 61.7586 77.1059 61.7586C77.7537 61.7586 78.6535 62.2985 79.3373 63.3423C80.3811 62.1905 81.8567 61.5427 83.4044 61.5427C85.2399 61.5427 86.7156 62.1905 87.6874 63.2703C88.6591 64.35 89.127 65.8257 89.127 68.2011ZM69.4756 58.0515C69.4756 56.8998 70.4474 56 71.5632 56H71.6351C72.7509 56.072 73.6147 57.0438 73.5427 58.1595C73.4707 59.2752 72.4989 60.139 71.3832 60.067C70.3035 60.0311 69.4756 59.1313 69.4756 58.0515V58.0515ZM69.7276 72.7001V63.2343C69.7276 62.3705 70.0515 61.9746 70.9873 61.9746H72.247C73.1828 61.9746 73.5067 62.3345 73.5067 63.2343V72.7001C73.5067 73.5639 73.1828 73.9238 72.247 73.9238H70.9873C70.0515 73.9238 69.7276 73.5639 69.7276 72.7001ZM63.0692 72.7001V60.8229C63.0692 57.8356 64.7248 56.144 66.1284 56.144C66.5603 56.144 66.8483 56.4319 66.8483 56.9718V72.7001C66.8483 73.5999 66.4884 73.9238 65.5886 73.9238H64.3289C63.4651 73.9238 63.0692 73.5999 63.0692 72.7001V72.7001ZM47.5208 67.9492C47.5208 64.1701 50.4001 61.5067 54.2152 61.5067C58.0303 61.5067 60.9097 64.1701 60.9097 67.9492C60.9097 71.7283 58.0303 74.3917 54.2152 74.3917C50.4001 74.3917 47.5208 71.6923 47.5208 67.9492ZM57.0946 67.9492C57.0946 66.1856 55.9788 64.8899 54.2152 64.8899C52.4517 64.8899 51.3359 66.1856 51.3359 67.9492C51.3359 69.7128 52.4517 71.0085 54.2152 71.0085C55.9788 71.0085 57.0946 69.7488 57.0946 67.9492ZM45.5773 63.2343V73.3119C45.5773 73.8878 45.2893 74.1397 44.8574 74.1397C44.2096 74.1397 43.3098 73.5999 42.662 72.5921C41.6542 73.7438 40.2145 74.3917 38.6669 74.3557C37.2272 74.3917 35.8596 73.8878 34.7798 72.916C33.6641 71.8363 33.0522 70.1807 33.0522 67.8052V63.2343C33.0522 62.3705 33.3761 61.9746 34.3119 61.9746H35.5716C36.5074 61.9746 36.8313 62.3345 36.8313 63.2343V67.4813C36.8313 68.921 37.0833 69.6768 37.5512 70.1807C37.9831 70.6126 38.6309 70.8645 39.2428 70.8285C39.9266 70.8285 40.5745 70.5766 41.0423 70.0727C41.5102 69.5688 41.7622 68.777 41.7622 67.5533V63.2343C41.7622 62.3345 42.1581 61.9746 43.0219 61.9746H44.2816C45.1814 61.9746 45.5773 62.3345 45.5773 63.2343V63.2343ZM30.4608 56.9718V73.3119C30.4608 73.8878 30.1729 74.1397 29.741 74.1397C29.0932 74.1397 28.1934 73.5999 27.5455 72.6281C26.7537 73.5639 25.1341 74.3917 23.2625 74.3917C19.5194 74.3917 17 71.6563 17 67.9492C17 64.2421 19.5914 61.5067 23.2625 61.5067C24.4862 61.5067 25.674 61.8666 26.7177 62.5505V60.8229C26.7177 57.8356 28.4093 56.144 29.777 56.144C30.2089 56.144 30.4608 56.4319 30.4608 56.9718V56.9718ZM26.7177 67.9492C26.7177 66.1136 25.422 64.8899 23.8024 64.8899C22.1828 64.8899 20.8511 66.1136 20.8511 67.9492C20.8511 69.7848 22.1468 71.0085 23.8024 71.0085C25.458 71.0085 26.7177 69.8207 26.7177 67.9492V67.9492Z",
                                fill: "black"
                            })
                        }), (0, n.jsx)("defs", {
                            children: (0, n.jsx)("clipPath", {
                                id: "clip0_16318_96887",
                                children: (0, n.jsx)("rect", {
                                    width: "102",
                                    height: "23.8984",
                                    fill: "white",
                                    transform: "translate(17 56)"
                                })
                            })
                        })]
                    })
                }, {}, "7"), (0, n.jsx)(function() {
                    return (0, n.jsxs)("svg", {
                        preserveAspectRatio: "xMidYMid meet",
                        width: "136",
                        height: "136",
                        viewBox: "0 0 136 136",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsx)("g", {
                            clipPath: "url(#clip0_16329_10567)",
                            children: (0, n.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M27.254 65.2234L27.0762 65.312C26.5902 64.7098 26.128 64.1962 25.6894 63.7711C25.2509 63.346 24.8242 63.0332 24.4094 62.8324C24.2079 62.738 23.8434 62.6583 23.316 62.5933C22.7885 62.5284 22.1752 62.4959 21.4759 62.4959C21.3573 62.4959 21.221 62.4989 21.067 62.5048C20.9129 62.5107 20.7647 62.5166 20.6225 62.5225C20.4803 62.5284 20.3469 62.5343 20.2225 62.5402C20.098 62.5461 20.0062 62.549 19.9469 62.549C19.935 62.6199 19.9202 62.6907 19.9024 62.7616C19.8847 62.8324 19.8699 62.9151 19.858 63.0095C19.8461 63.104 19.8343 63.225 19.8224 63.3726C19.8106 63.5202 19.7987 63.7003 19.7869 63.9128C19.775 64.3261 19.7661 64.7777 19.7602 65.2677C19.7543 65.7577 19.7513 66.2212 19.7513 66.658V68.3406H20.0713C20.261 68.3406 20.4714 68.3347 20.7025 68.3229C20.9336 68.3111 21.1736 68.2963 21.4225 68.2786C21.6714 68.2609 21.8789 68.2343 22.0448 68.1989C22.4715 68.1045 22.8093 67.9805 23.0582 67.827C23.3071 67.6735 23.5026 67.4905 23.6449 67.2779C23.7871 67.0654 23.8879 66.8322 23.9471 66.5783C24.0064 66.3245 24.0597 66.05 24.1071 65.7548H24.3205V71.4578H24.1071C24.0123 71.0799 23.876 70.6814 23.6982 70.2623C23.5204 69.8431 23.3071 69.5213 23.0582 69.297C22.833 69.0963 22.593 68.9457 22.3381 68.8454C22.0833 68.745 21.784 68.683 21.4403 68.6594C21.2625 68.6476 21.1084 68.6387 20.9781 68.6328C20.8477 68.6269 20.7232 68.624 20.6047 68.624H19.7513V70.8202C19.7513 71.1508 19.7543 71.4548 19.7602 71.7323C19.7661 72.0098 19.7691 72.2489 19.7691 72.4496C19.781 72.8274 19.8017 73.1846 19.8313 73.5211C19.861 73.8576 19.9291 74.1085 20.0358 74.2738C20.1425 74.4391 20.3232 74.5661 20.578 74.6546C20.8329 74.7432 21.2033 74.7993 21.6892 74.8229V75H16V74.8229C16.2963 74.7757 16.5719 74.6989 16.8267 74.5926C17.0815 74.4864 17.2919 74.3388 17.4579 74.1499C17.5171 74.079 17.5645 73.9757 17.6001 73.8399C17.6356 73.7041 17.6682 73.5477 17.6979 73.3706C17.7275 73.1935 17.7482 73.0075 17.7601 72.8127C17.772 72.6178 17.7779 72.426 17.7779 72.2371C17.7779 72.0718 17.7808 71.8474 17.7868 71.564C17.7927 71.2807 17.7986 70.9707 17.8045 70.6342C17.8105 70.2977 17.8134 69.9523 17.8134 69.5981V65.1172C17.8134 64.9046 17.8105 64.6862 17.8045 64.4619C17.7986 64.2375 17.7868 64.025 17.769 63.8243C17.7512 63.6235 17.7216 63.4435 17.6801 63.2841C17.6386 63.1247 17.5823 63.0095 17.5112 62.9387C17.3334 62.7498 17.1438 62.6287 16.9423 62.5756C16.7408 62.5225 16.48 62.4723 16.16 62.4251V62.248H26.045L27.254 65.2234ZM46.6803 75V74.8229C46.7158 74.8229 46.8018 74.8111 46.9381 74.7875C47.0744 74.7639 47.2166 74.7225 47.3647 74.6635C47.5129 74.6044 47.6433 74.5218 47.7559 74.4155C47.8685 74.3093 47.9248 74.1735 47.9248 74.0082C47.9248 73.9019 47.8922 73.7277 47.827 73.4857C47.7618 73.2436 47.67 72.9485 47.5514 72.6001C47.4329 72.2518 47.2966 71.8651 47.1425 71.4401C46.9884 71.015 46.8225 70.5722 46.6447 70.1117H41.9156C41.7378 70.5604 41.5659 70.9884 41.4 71.3958C41.234 71.8031 41.0681 72.2134 40.9022 72.6267C40.6533 73.2643 40.5288 73.713 40.5288 73.9728C40.5288 74.1262 40.5762 74.2532 40.671 74.3535C40.7659 74.4539 40.8873 74.5366 41.0355 74.6015C41.1837 74.6664 41.3437 74.7137 41.5155 74.7432C41.6874 74.7727 41.8504 74.7993 42.0044 74.8229V75H38.2176V74.8052C38.5257 74.7698 38.7894 74.6871 39.0087 74.5572C39.228 74.4273 39.3554 74.3388 39.391 74.2916C39.4739 74.2089 39.6102 74.0141 39.7999 73.7071C39.9895 73.4001 40.2206 72.9455 40.4932 72.3433C40.7422 71.7884 41.0207 71.1567 41.3288 70.4482C41.637 69.7398 41.9541 69.0107 42.28 68.2609C42.606 67.5111 42.9289 66.7555 43.249 65.9939C43.569 65.2323 43.8712 64.5209 44.1557 63.8597L43.9779 63.47C44.1912 63.3756 44.3838 63.2634 44.5557 63.1335C44.7276 63.0036 44.8787 62.8678 45.0091 62.7262C45.1394 62.5845 45.2491 62.4487 45.338 62.3188C45.4269 62.1889 45.495 62.0827 45.5424 62H45.6847C46.0521 62.98 46.4017 63.9099 46.7336 64.7895C47.0655 65.6692 47.3825 66.5163 47.6848 67.3311C47.987 68.1458 48.2804 68.9339 48.5648 69.6955C48.8493 70.4571 49.1337 71.2098 49.4182 71.9537C49.5486 72.3197 49.6701 72.6237 49.7827 72.8658C49.8953 73.1079 50.0227 73.3824 50.1649 73.6894C50.1886 73.7366 50.242 73.8193 50.3249 73.9373C50.4079 74.0554 50.5175 74.1764 50.6538 74.3004C50.7901 74.4244 50.959 74.5336 51.1605 74.6281C51.362 74.7225 51.5991 74.7757 51.8717 74.7875V75H46.6803ZM44.3512 64.267C44.2801 64.4205 44.1764 64.6626 44.0401 64.9932C43.9038 65.3238 43.7349 65.7252 43.5334 66.1975C43.3319 66.6698 43.1097 67.2041 42.8667 67.8004C42.6237 68.3967 42.36 69.0431 42.0756 69.7398H46.5025C46.301 69.2084 46.0965 68.6771 45.8891 68.1458C45.6817 67.6144 45.4802 67.1038 45.2846 66.6138C45.0891 66.1237 44.9113 65.6751 44.7513 65.2677C44.5913 64.8604 44.4579 64.5268 44.3512 64.267ZM69.3601 75H63.9731V74.8229C64.2694 74.7757 64.545 74.6989 64.7998 74.5926C65.0546 74.4864 65.271 74.3329 65.4487 74.1322C65.508 74.0613 65.5525 73.9609 65.5821 73.8311C65.6117 73.7012 65.6354 73.5477 65.6532 73.3706C65.671 73.1935 65.6828 73.0075 65.6888 72.8127C65.6947 72.6178 65.6976 72.426 65.6976 72.2371C65.6976 72.0718 65.7006 71.8474 65.7065 71.564C65.7125 71.2807 65.7184 70.9707 65.7243 70.6342C65.7302 70.2977 65.7332 69.9523 65.7332 69.5981V64.4796C65.7332 64.267 65.7243 64.0693 65.7065 63.8862C65.6888 63.7032 65.6621 63.5379 65.6265 63.3903C65.591 63.2427 65.5376 63.1276 65.4665 63.045C65.3006 62.8442 65.0961 62.6996 64.8532 62.611C64.6102 62.5225 64.3346 62.4605 64.0264 62.4251V62.248H69.3423V62.4251C69.0934 62.4605 68.8267 62.5254 68.5423 62.6199C68.2578 62.7144 68.0385 62.9033 67.8844 63.1866C67.7778 63.3874 67.7215 63.6412 67.7155 63.9482C67.7096 64.2552 67.7007 64.5445 67.6889 64.8161C67.6889 65.1113 67.6859 65.4035 67.68 65.6928C67.6741 65.9821 67.6711 66.2743 67.6711 66.5695V72.5027C67.6711 72.8451 67.677 73.1757 67.6889 73.4946C67.7007 73.8134 67.7541 74.0377 67.8489 74.1676C67.9911 74.3683 68.2163 74.5218 68.5245 74.6281C68.8326 74.7343 69.1112 74.7993 69.3601 74.8229V75ZM96.2712 75H92.6266C92.5199 74.8937 92.4429 74.814 92.3955 74.7609C92.3481 74.7078 92.2947 74.6458 92.2355 74.5749C92.1762 74.5041 92.1021 74.4008 92.0132 74.265C91.9243 74.1292 91.7851 73.9255 91.5954 73.654C91.3702 73.3233 91.1717 73.0252 90.9998 72.7595C90.828 72.4939 90.6531 72.2312 90.4754 71.9714C90.2976 71.7116 90.105 71.4489 89.8975 71.1832C89.6901 70.9176 89.4442 70.6194 89.1597 70.2888C88.9227 70.0173 88.6649 69.7634 88.3863 69.5272C88.1078 69.2911 87.8145 69.1435 87.5063 69.0845C87.2811 69.0372 87.1092 69.0136 86.9907 69.0136C86.884 69.0136 86.7477 69.0077 86.5818 68.9959V70.9973C86.5818 71.564 86.5877 72.0422 86.5996 72.4319C86.6114 72.8097 86.6233 73.1344 86.6351 73.406C86.647 73.6776 86.7122 73.9019 86.8307 74.079C86.9255 74.2325 87.1092 74.389 87.3818 74.5484C87.6545 74.7078 88.0337 74.7993 88.5197 74.8229V75H82.8305V74.8229C83.1268 74.7757 83.4112 74.7048 83.6839 74.6104C83.9565 74.5159 84.1698 74.3742 84.3239 74.1853C84.3832 74.1144 84.4306 74.0082 84.4661 73.8665C84.5017 73.7248 84.5283 73.5654 84.5461 73.3883C84.5639 73.2112 84.5787 73.0223 84.5906 72.8215C84.6024 72.6208 84.6084 72.426 84.6084 72.2371C84.6084 72.0718 84.6113 71.8474 84.6172 71.564C84.6232 71.2807 84.6291 70.9707 84.635 70.6342C84.641 70.2977 84.6439 69.9523 84.6439 69.5981V65.1172C84.6439 64.9046 84.641 64.6891 84.635 64.4707C84.6291 64.2523 84.6172 64.0456 84.5995 63.8508C84.5817 63.656 84.5521 63.4789 84.5106 63.3195C84.4691 63.1601 84.4128 63.045 84.3417 62.9741C84.1639 62.7852 83.9654 62.6583 83.7461 62.5933C83.5268 62.5284 83.2572 62.4723 82.9371 62.4251V62.248H83.6661C84.0691 62.248 84.5254 62.245 85.035 62.2391C85.5447 62.2332 86.0544 62.2302 86.564 62.2302H87.8085C88.6027 62.2302 89.3079 62.2539 89.9242 62.3011C90.5405 62.3483 91.1035 62.5077 91.6132 62.7793C92.1347 63.0509 92.5555 63.4198 92.8755 63.8862C93.1955 64.3526 93.3555 64.9401 93.3555 65.6485C93.3555 66.0854 93.2755 66.478 93.1155 66.8263C92.9555 67.1746 92.7422 67.4816 92.4755 67.7473C92.2088 68.0129 91.8977 68.2402 91.5421 68.4292C91.1865 68.6181 90.8132 68.7775 90.422 68.9074V68.9605C90.6235 69.0668 90.8191 69.2203 91.0087 69.421C91.1984 69.6217 91.3821 69.846 91.5599 70.094C91.868 70.5427 92.2029 71.0268 92.5644 71.5463C92.9259 72.0659 93.2488 72.5263 93.5333 72.9278C93.9719 73.5418 94.3985 73.9905 94.8134 74.2738C95.2282 74.5572 95.7142 74.7402 96.2712 74.8229V75ZM91.311 65.5422C91.311 64.9519 91.1628 64.4264 90.8665 63.9659C90.5702 63.5054 90.1376 63.1394 89.5686 62.8678C89.2842 62.738 88.9849 62.6435 88.6708 62.5845C88.3567 62.5254 88.0278 62.4959 87.6841 62.4959C87.4352 62.4959 87.2337 62.5018 87.0796 62.5136C86.9255 62.5254 86.807 62.5372 86.724 62.549C86.7122 62.6199 86.7003 62.6819 86.6885 62.735C86.6766 62.7881 86.6677 62.856 86.6618 62.9387C86.6559 63.0213 86.65 63.1365 86.644 63.2841C86.6381 63.4317 86.6292 63.6412 86.6174 63.9128C86.6055 64.3261 86.5966 64.7925 86.5907 65.312C86.5848 65.8315 86.5818 66.3333 86.5818 66.8174V68.7657C87.0678 68.7657 87.5211 68.745 87.9419 68.7037C88.3626 68.6624 88.7686 68.5767 89.1597 68.4469C89.539 68.3288 89.8649 68.1694 90.1376 67.9687C90.4102 67.7679 90.6324 67.5406 90.8043 67.2868C90.9761 67.0329 91.1035 66.7584 91.1865 66.4632C91.2695 66.168 91.311 65.861 91.311 65.5422ZM120 71.6172L119.111 75H108.23V74.8229C108.527 74.7757 108.802 74.6989 109.057 74.5926C109.312 74.4864 109.522 74.3388 109.688 74.1499C109.748 74.079 109.795 73.9757 109.831 73.8399C109.866 73.7041 109.899 73.5477 109.928 73.3706C109.958 73.1935 109.979 73.0075 109.991 72.8127C110.002 72.6178 110.008 72.426 110.008 72.2371C110.008 72.0718 110.011 71.8474 110.017 71.564C110.023 71.2807 110.029 70.9707 110.035 70.6342C110.041 70.2977 110.044 69.9523 110.044 69.5981C110.044 69.2321 110.044 68.8896 110.044 68.5708V65.1172C110.044 64.9046 110.041 64.6862 110.035 64.4619C110.029 64.2375 110.017 64.025 109.999 63.8243C109.982 63.6235 109.952 63.4435 109.911 63.2841C109.869 63.1247 109.813 63.0095 109.742 62.9387C109.564 62.7498 109.374 62.6287 109.173 62.5756C108.971 62.5225 108.71 62.4723 108.39 62.4251V62.248H118.204L119.413 65.1703L119.236 65.2589C118.275 64.0663 117.375 63.2634 116.533 62.8501C116.332 62.7557 115.958 62.673 115.413 62.6022C114.868 62.5313 114.204 62.4959 113.422 62.4959C113.173 62.4959 112.915 62.5048 112.648 62.5225C112.382 62.5402 112.189 62.5609 112.071 62.5845C112.047 62.7734 112.026 63.163 112.008 63.7534C111.991 64.3438 111.982 65.0286 111.982 65.8079C111.982 66.2566 111.982 66.6344 111.982 66.9414C111.982 67.2484 111.985 67.4993 111.991 67.6941C111.997 67.889 112 68.0395 112 68.1458C112 68.2402 112 68.3052 112 68.3406C112.059 68.3406 112.177 68.3406 112.355 68.3406C112.533 68.3406 112.737 68.3347 112.968 68.3229C113.2 68.3111 113.431 68.2963 113.662 68.2786C113.893 68.2609 114.086 68.2343 114.24 68.1989C114.595 68.1163 114.892 68.0041 115.129 67.8624C115.366 67.7207 115.558 67.5495 115.706 67.3488C115.855 67.148 115.973 66.9149 116.062 66.6492C116.151 66.3835 116.231 66.0854 116.302 65.7548H116.515V71.3338H116.302C116.207 70.9559 116.062 70.5663 115.866 70.1649C115.671 69.7634 115.466 69.4623 115.253 69.2616C115.063 69.0963 114.835 68.9605 114.569 68.8542C114.302 68.748 113.991 68.683 113.635 68.6594C113.457 68.6476 113.309 68.6387 113.191 68.6328C113.072 68.6269 112.954 68.624 112.835 68.624C112.728 68.624 112.61 68.624 112.48 68.624C112.361 68.624 112.207 68.624 112.017 68.624C111.994 68.7893 111.982 69.0313 111.982 69.3501C111.982 69.6689 111.982 69.9995 111.982 70.342C111.982 70.4955 111.982 70.6726 111.982 70.8733C111.982 71.074 111.982 71.2747 111.982 71.4755C111.982 71.6644 111.985 71.8445 111.991 72.0157C111.997 72.1869 112 72.3315 112 72.4496C112.011 72.8274 112.032 73.1846 112.062 73.5211C112.091 73.8576 112.16 74.1085 112.266 74.2738C112.373 74.4391 112.628 74.5572 113.031 74.6281C113.434 74.6989 113.872 74.7343 114.346 74.7343C114.548 74.7343 114.806 74.7284 115.12 74.7166C115.434 74.7048 115.763 74.6753 116.106 74.6281C116.486 74.5808 116.835 74.4893 117.155 74.3535C117.475 74.2178 117.784 74.0259 118.08 73.7779C118.376 73.53 118.664 73.2259 118.942 72.8658C119.221 72.5057 119.508 72.0718 119.804 71.564L120 71.6172Z",
                                fill: "black"
                            })
                        }), (0, n.jsx)("defs", {
                            children: (0, n.jsx)("clipPath", {
                                id: "clip0_16329_10567",
                                children: (0, n.jsx)("rect", {
                                    width: "104",
                                    height: "13",
                                    fill: "white",
                                    transform: "translate(16 62)"
                                })
                            })
                        })]
                    })
                }, {}, "8"), (0, n.jsx)(iv, {}, "9"), (0, n.jsx)(function() {
                    return (0, n.jsxs)("svg", {
                        preserveAspectRatio: "xMidYMid meet",
                        width: "136",
                        height: "136",
                        viewBox: "0 0 136 136",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsxs)("g", {
                            clipPath: "url(#clip0_16329_10574)",
                            children: [(0, n.jsx)("path", {
                                d: "M27.7222 58L26.3815 65.6109L22.4426 68.8235L24.3476 58H20.5307L17 77.9634H20.818L21.7985 72.4408L25.7499 69.2032L24.1914 77.9634H28.0095L31.5402 58H27.7222Z",
                                fill: "black"
                            }), (0, n.jsx)("path", {
                                d: "M36.7643 69.2503L35.1101 70.6764C33.8789 71.7313 33.2313 72.701 33.09 73.5002C32.9543 74.271 33.2108 74.8405 33.8971 74.8405C34.7613 74.8405 35.4898 74.0993 36.0336 73.3854L36.7643 69.2503ZM35.2806 77.9781L35.9914 75.9818H35.6334C34.9847 76.781 33.7683 78.2634 32.0092 78.2634C30.0403 78.2634 29.199 76.781 29.5569 74.7552C29.94 72.5874 31.1724 71.0197 33.603 69.0792L37.3184 66.1133L37.3891 65.7143C37.6216 64.4024 37.3537 63.718 36.5489 63.718C35.744 63.718 35.2355 64.4024 35.003 65.7143L34.6746 67.5684H30.9466L31.1336 66.5134C31.7185 63.2053 33.9313 61.1511 37.0026 61.1511C40.0739 61.1511 41.5606 63.2042 40.9711 66.5418L38.9486 77.9781H35.2806Z",
                                fill: "black"
                            }), (0, n.jsx)("path", {
                                d: "M40.208 77.9775L43.133 61.4365H46.8609L46.1597 63.3758H46.5177C47.6999 61.9219 48.9688 61.1511 50.3117 61.1511C51.803 61.1511 53.1767 62.3209 52.6124 65.5142L50.4086 77.9769H46.6807L48.6975 66.5691C48.8947 65.4573 48.7226 64.7434 47.887 64.7434C47.1116 64.7434 46.4733 65.4846 46.0447 66.0553L43.9365 77.9769L40.208 77.9775Z",
                                fill: "black"
                            }), (0, n.jsx)("path", {
                                d: "M60.3689 65.6862C60.1374 64.9734 59.69 64.4596 59.0048 64.4596C58.1394 64.4596 57.6209 65.3724 57.4042 66.599L56.3495 72.5593C56.1331 73.7859 56.3291 74.6988 57.1945 74.6988C57.8808 74.6988 58.5076 74.1861 58.9924 73.4722L60.3689 65.6862ZM61.9222 77.9779L58.1943 77.9784L58.8008 76.0675H58.4428C57.3859 77.3225 56.4146 78.2638 54.9532 78.2638C52.8952 78.2638 51.7918 76.0675 52.8154 70.2789L53.0172 69.1375C54.0411 63.3478 55.8012 61.1526 58.0676 61.1526C59.291 61.1526 60.0389 61.9802 60.4995 62.9215H60.8573L61.7249 58.0139H65.453L61.9222 77.9779Z",
                                fill: "black"
                            }), (0, n.jsx)("path", {
                                d: "M74.3699 67.0282L70.6418 67.0277L70.9188 65.4589C71.1059 64.4039 70.9337 63.6912 70.0683 63.6912C69.4116 63.6912 68.9637 64.205 68.8725 64.7177C68.7162 65.6021 69.1473 66.2001 69.8449 67.1425L71.8913 69.9083C72.7532 71.1065 73.5455 72.3615 73.2126 74.243C72.7942 76.6098 70.5324 78.2638 67.7599 78.2638C64.9871 78.2638 63.0456 76.7519 63.6009 73.6154L63.8529 72.1899H67.5807L67.2627 73.9872C67.0814 75.0137 67.4269 75.7549 68.2329 75.7549C68.9786 75.7549 69.3776 75.1842 69.4835 74.5851C69.6295 73.7575 69.1689 73.1596 68.4951 72.2467L66.4796 69.4809C65.6427 68.3111 64.929 67.1141 65.2676 65.2031C65.6154 63.2353 67.6834 61.1538 70.5769 61.1538C73.4702 61.1538 75.071 63.0648 74.5818 65.8306L74.3699 67.0282Z",
                                fill: "black"
                            }), (0, n.jsx)("path", {
                                d: "M103.406 77.9784L101.109 70.5631H100.751L99.44 77.9784H95.7119L99.2415 58.0139H102.971L101.211 67.9678H101.568L105.885 61.4368H109.882L104.786 69.1648L107.612 77.9784H103.406Z",
                                fill: "black"
                            }), (0, n.jsx)("path", {
                                d: "M112.046 68.4233H114.85L115.324 65.7427C115.53 64.5729 115.264 63.718 114.281 63.718C113.297 63.718 112.728 64.574 112.52 65.7427L112.046 68.4233ZM111.618 70.848L111.118 73.6719C110.912 74.8416 111.178 75.6965 112.162 75.6965C113.147 75.6965 113.715 74.8405 113.923 73.6719L114.18 72.2179H118.177C117.578 75.6113 114.931 78.2634 111.71 78.2634C108.489 78.2634 106.779 75.9534 107.788 70.2489L107.98 69.1656C108.989 63.4611 111.515 61.1511 114.735 61.1511C117.956 61.1511 119.726 63.4611 118.717 69.1656L118.419 70.848H111.618Z",
                                fill: "black"
                            }), (0, n.jsx)("path", {
                                d: "M73.3848 77.9773L76.9154 58.0139H80.6435L79.7508 63.0613H80.1088C81.2989 61.8915 82.3855 61.1503 83.7272 61.1503C85.2184 61.1503 86.3539 62.3201 85.7884 65.5134L83.5848 77.9762H79.8567L81.9191 66.3114C82.1164 65.1996 81.9442 64.4857 81.1086 64.4857C80.3332 64.4857 79.6949 65.2269 79.2663 65.7976L77.1127 77.9773H73.3848Z",
                                fill: "black"
                            }), (0, n.jsx)("path", {
                                d: "M92.2682 69.2503L90.6141 70.6764C89.3828 71.7313 88.7341 72.701 88.5939 73.5002C88.4583 74.271 88.7147 74.8405 89.401 74.8405C90.2663 74.8405 90.9936 74.0993 91.5374 73.3854L92.2682 69.2503ZM90.7845 77.9781L91.4952 75.9818H91.1374C90.4887 76.781 89.2722 78.2634 87.5131 78.2634C85.5443 78.2634 84.7028 76.781 85.0609 74.7552C85.444 72.5874 86.6763 71.0197 89.107 69.0792L92.8222 66.1133L92.893 65.7143C93.1244 64.4024 92.8577 63.718 92.0528 63.718C91.248 63.718 90.7384 64.4024 90.5068 65.7143L90.1786 67.5684H86.4505L86.6376 66.5134C87.2224 63.2053 89.4352 61.1511 92.5065 61.1511C95.5779 61.1511 97.0644 63.2042 96.4751 66.5418L94.4526 77.9781H90.7845Z",
                                fill: "black"
                            })]
                        }), (0, n.jsx)("defs", {
                            children: (0, n.jsx)("clipPath", {
                                id: "clip0_16329_10574",
                                children: (0, n.jsx)("rect", {
                                    width: "102",
                                    height: "20.4",
                                    fill: "white",
                                    transform: "translate(17 58)"
                                })
                            })
                        })]
                    })
                }, {}, "10")],
                [(0, n.jsx)(function() {
                    return (0, n.jsx)("svg", {
                        preserveAspectRatio: "xMidYMid meet",
                        width: "136",
                        height: "136",
                        viewBox: "0 0 136 136",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, n.jsx)("path", {
                            d: "M102.877 57.6337C97.0828 57.6337 92.3774 62.2756 92.3774 68.0058C92.3774 73.7361 97.0828 78.378 102.877 78.378C108.671 78.378 113.377 73.7361 113.377 68.0058C113.377 62.2756 108.671 57.6337 102.877 57.6337ZM22.6221 58.4659V61.8272H30.4651V74.2164H22.6221V77.5777H41.7014V74.2164H33.8902V61.8272H41.7014V58.4659H22.6221ZM46.7596 58.4659V77.5452H55.915C61.8373 77.4811 65.9027 73.32 65.9027 67.9739C65.9027 62.6919 61.9014 58.6259 56.0751 58.4659H46.7596ZM70.0643 58.4659V77.5777H89.3362V74.2164H73.5219V69.7021H85.8467V66.3408H73.5219V61.8272H89.3362V58.4659H70.0643ZM102.877 61.2513C106.655 61.2513 109.76 64.2923 109.76 68.0377C109.76 71.7832 106.655 74.8241 102.877 74.8241C99.0996 74.8241 95.9944 71.7832 95.9944 68.0377C95.9944 64.2923 99.0676 61.2513 102.877 61.2513ZM50.1847 61.7634H55.9788C59.7243 61.8594 62.1893 64.4843 62.1893 68.0377C62.1573 71.6231 59.6925 74.2161 55.915 74.2801H50.1847V61.7634Z",
                            fill: "black"
                        })
                    })
                }, {}, "11"), (0, n.jsx)(function() {
                    return (0, n.jsxs)("svg", {
                        preserveAspectRatio: "xMidYMid meet",
                        width: "136",
                        height: "136",
                        viewBox: "0 0 136 136",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1.6155 61.895C1.1767 62.1158 1 62.4707 1 62.9552V72.8385C1 73.3229 1.1767 73.6336 1.6155 73.8987L9.95574 78.6489C10.147 78.7441 10.3576 78.7936 10.5712 78.7936C10.7848 78.7936 10.9955 78.7441 11.1868 78.6489L19.527 73.8987C19.9687 73.6336 20.1425 73.3229 20.1425 72.8385V62.9552C20.1425 62.3824 19.876 62.0717 19.527 61.895L11.1868 57.1447C10.9955 57.0495 10.7848 57 10.5712 57C10.3576 57 10.147 57.0495 9.95574 57.1447L1.6155 61.895ZM17.8943 65.8195C13.9362 65.8401 10.7321 69.1635 10.7321 73.2629V73.4367H10.4243V73.2629C10.4243 69.1635 7.21429 65.8401 3.24885 65.8195C3.22224 66.0798 3.20897 66.3412 3.20909 66.6029C3.20909 69.8085 5.17193 72.5414 7.92109 73.5898C8.76892 73.906 9.66672 74.0671 10.5716 74.0654C11.4762 74.0647 12.3736 73.9037 13.2221 73.5898C15.9698 72.5414 17.9341 69.8085 17.9341 66.6029C17.9342 66.3412 17.9209 66.0798 17.8943 65.8195ZM12.2376 62.2773C13.1576 63.1973 13.1576 64.689 12.2376 65.6091C11.3175 66.5292 9.82576 66.5292 8.90569 65.6091C7.98561 64.689 7.98561 63.1973 8.90569 62.2773C9.82576 61.3572 11.3175 61.3572 12.2376 62.2773Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M25.4532 62.0379C25.4524 61.9812 25.463 61.9251 25.4845 61.8727C25.5059 61.8203 25.5378 61.7728 25.5781 61.733C25.6184 61.6933 25.6663 61.6621 25.719 61.6413C25.7717 61.6206 25.828 61.6107 25.8846 61.6123H27.4425C27.555 61.6135 27.6626 61.6587 27.7422 61.7382C27.8217 61.8178 27.8669 61.9253 27.8681 62.0379V66.819L32.3297 61.789C32.3684 61.7354 32.4189 61.6915 32.4775 61.6608C32.536 61.6302 32.6009 61.6136 32.6669 61.6123H34.4339C34.5089 61.6096 34.583 61.6293 34.6467 61.669C34.7104 61.7087 34.7608 61.7664 34.7915 61.8349C34.8222 61.9034 34.8317 61.9794 34.8189 62.0534C34.8061 62.1273 34.7715 62.1957 34.7196 62.2499L30.093 67.4566L35.0509 73.3878C35.094 73.446 35.12 73.5152 35.1259 73.5874C35.1318 73.6596 35.1174 73.732 35.0843 73.7965C35.0512 73.8609 35.0008 73.9149 34.9387 73.9522C34.8766 73.9895 34.8053 74.0087 34.7329 74.0077H32.8054C32.7464 74.0131 32.687 74.0047 32.6318 73.9833C32.5766 73.9618 32.5271 73.9278 32.4873 73.884L27.8622 68.1825V73.5822C27.861 73.6947 27.8158 73.8022 27.7363 73.8818C27.6567 73.9613 27.5491 74.0065 27.4366 74.0077H25.8846C25.8285 74.0085 25.7728 73.998 25.7208 73.9769C25.6688 73.9558 25.6216 73.9245 25.5819 73.8848C25.5423 73.8452 25.5109 73.7979 25.4898 73.7459C25.4687 73.6939 25.4583 73.6383 25.4591 73.5822L25.4532 62.0379Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M36.3398 62.0023C36.3464 61.9009 36.3896 61.8055 36.4615 61.7337C36.5333 61.6619 36.6287 61.6186 36.7301 61.6121H38.1643C38.2663 61.6161 38.3631 61.6585 38.4352 61.7309C38.5073 61.8033 38.5494 61.9002 38.553 62.0023V66.3402C38.9609 65.9853 39.6692 65.6496 40.6425 65.6496C43.2459 65.6496 43.9541 67.4564 43.9541 69.5105V73.6187C43.9505 73.721 43.9082 73.8182 43.8358 73.8906C43.7634 73.963 43.6662 74.0053 43.5639 74.0089H42.1297C42.0267 74.0078 41.9283 73.9662 41.8556 73.8933C41.7829 73.8203 41.7417 73.7217 41.741 73.6187V69.4958C41.741 68.3634 41.2271 67.6728 40.2537 67.6728C39.2804 67.6728 38.765 68.2751 38.553 69.107V73.6187C38.553 73.8499 38.447 74.0089 38.1289 74.0089H36.7301C36.6277 74.0053 36.5306 73.963 36.4582 73.8906C36.3858 73.8182 36.3435 73.721 36.3398 73.6187V62.0023Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M48.4549 68.8405C48.989 68.8466 49.5198 68.9239 50.0334 69.0702C50.0688 68.0248 49.7684 67.53 48.9011 67.53C48.1248 67.5409 47.3522 67.6397 46.5981 67.8245C46.3331 67.9129 46.174 67.7185 46.1387 67.4711L45.959 66.5538C45.94 66.504 45.9319 66.4508 45.9352 66.3977C45.9386 66.3445 45.9533 66.2927 45.9785 66.2458C46.0036 66.1989 46.0386 66.1579 46.0809 66.1257C46.1233 66.0934 46.1721 66.0707 46.2241 66.059C47.1334 65.7946 48.0749 65.6574 49.0218 65.6511C51.5722 65.6511 52.1023 66.9764 52.1023 69.2101V73.6217C52.1015 73.7247 52.0604 73.8233 51.9877 73.8962C51.915 73.9692 51.8166 74.0107 51.7136 74.0119H51.1113C50.9641 74.0119 50.8639 73.9589 50.7564 73.7292L50.5267 73.1799C50.1883 73.5132 49.787 73.776 49.3461 73.9529C48.9053 74.1299 48.4337 74.2175 47.9587 74.2107C46.3301 74.2107 45.1963 73.1667 45.1963 71.413C45.1963 69.9552 46.3831 68.8405 48.4549 68.8405ZM48.5079 72.5586C49.2339 72.5586 49.8715 71.9917 49.9804 71.6913V70.4868C49.5981 70.3271 49.1888 70.2417 48.7745 70.235C47.835 70.235 47.3211 70.6767 47.3211 71.4027C47.3211 72.0977 47.7467 72.5586 48.5079 72.5586Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M53.9443 66.2189C53.9447 66.1158 53.9858 66.017 54.0585 65.944C54.1313 65.8709 54.23 65.8295 54.3331 65.8287H55.006C55.083 65.8213 55.16 65.8426 55.2223 65.8886C55.2845 65.9345 55.3276 66.0018 55.3432 66.0776L55.6377 66.8389C55.9589 66.4534 56.3638 66.1461 56.8215 65.9405C57.2793 65.7348 57.7778 65.6362 58.2794 65.652C60.8827 65.652 61.5557 67.4043 61.5557 69.3877V73.6211C61.5517 73.7233 61.5093 73.8203 61.437 73.8926C61.3646 73.965 61.2677 74.0073 61.1655 74.0113H59.7313C59.6283 74.0102 59.5298 73.9687 59.4571 73.8957C59.3844 73.8227 59.3433 73.7241 59.3425 73.6211V69.3877C59.3425 68.3261 58.917 67.6708 57.926 67.6708C57.5326 67.6611 57.1468 67.7805 56.8277 68.0108C56.5086 68.2411 56.2737 68.5696 56.159 68.946V73.6211C56.159 73.923 56.0353 74.0113 55.6451 74.0113H54.3345C54.2325 74.0073 54.1357 73.9649 54.0636 73.8925C53.9915 73.8202 53.9494 73.7232 53.9458 73.6211L53.9443 66.2189Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M65.7443 73.5521L71.2514 61.6353C71.2759 61.5775 71.3169 61.5281 71.3693 61.4935C71.4217 61.459 71.4832 61.4407 71.5459 61.4409H71.7241C71.7876 61.4372 71.8506 61.4541 71.9037 61.4891C71.9568 61.5242 71.9971 61.5755 72.0186 61.6353L77.4669 73.5521C77.4936 73.6012 77.5067 73.6566 77.5047 73.7124C77.5028 73.7682 77.4859 73.8225 77.4558 73.8696C77.4257 73.9167 77.3836 73.9549 77.3337 73.9801C77.2838 74.0053 77.2281 74.0167 77.1724 74.013H75.6424C75.3774 74.013 75.2537 73.907 75.13 73.6582L74.2612 71.7439H68.9676L68.1003 73.6582C68.0627 73.7637 67.9928 73.8548 67.9006 73.9185C67.8083 73.9821 67.6984 74.0152 67.5864 74.013H66.0462C65.99 74.0176 65.9336 74.007 65.8829 73.9822C65.8322 73.9574 65.7892 73.9194 65.7583 73.8723C65.7274 73.8251 65.7098 73.7705 65.7073 73.7141C65.7049 73.6578 65.7176 73.6018 65.7443 73.5521ZM73.3939 69.7811L71.6269 65.8849H71.5739L69.8349 69.7811H73.3939Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M82.0411 65.6528C83.3163 65.6528 84.3073 66.2021 85.0862 67.034C85.2629 67.2107 85.1746 67.4419 84.9979 67.623L84.2543 68.4373C84.0776 68.6317 83.8832 68.5433 83.7227 68.3843C83.3339 68.0118 82.8554 67.676 82.0941 67.676C80.8189 67.676 79.9339 68.667 79.9339 69.9245C79.9339 71.182 80.8012 72.1907 82.0764 72.1907C82.9791 72.1907 83.4576 71.6959 83.811 71.288C83.8748 71.2169 83.9627 71.1721 84.0577 71.1623C84.1528 71.1525 84.248 71.1784 84.3249 71.235L85.1216 71.908C85.3174 72.0847 85.4057 72.279 85.2688 72.497C84.5782 73.5763 83.4812 74.2139 82.0293 74.2139C79.638 74.2139 77.709 72.3909 77.709 69.9289C77.7031 67.5126 79.6144 65.6528 82.0411 65.6528Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M89.618 68.8405C90.1511 68.8469 90.6809 68.9242 91.1936 69.0702C91.2289 68.0248 90.9285 67.53 90.0612 67.53C89.2849 67.5409 88.5123 67.6397 87.7582 67.8245C87.4932 67.9129 87.3342 67.7185 87.2988 67.4711L87.1207 66.5538C87.1019 66.5039 87.094 66.4506 87.0976 66.3975C87.1011 66.3444 87.116 66.2926 87.1413 66.2457C87.1665 66.1988 87.2016 66.1579 87.244 66.1257C87.2864 66.0935 87.3352 66.0707 87.3872 66.059C88.2965 65.7946 89.238 65.6574 90.1849 65.6511C92.7353 65.6511 93.2654 66.9764 93.2654 69.2101V73.6217C93.2646 73.7247 93.2235 73.8233 93.1508 73.8962C93.0781 73.9692 92.9797 74.0107 92.8767 74.0119H92.2744C92.1272 74.0119 92.0256 73.9589 91.9195 73.7292L91.6898 73.1799C91.3513 73.5132 90.95 73.776 90.5092 73.9529C90.0684 74.1299 89.5968 74.2175 89.1218 74.2107C87.4932 74.2107 86.3594 73.1667 86.3594 71.413C86.3594 69.9552 87.5462 68.8405 89.618 68.8405ZM89.671 72.5586C90.397 72.5586 91.0346 71.9917 91.1435 71.6913V70.4868C90.7616 70.3274 90.3528 70.2419 89.939 70.235C89.001 70.235 88.4871 70.6767 88.4871 71.4027C88.4842 72.0977 88.9083 72.5586 89.671 72.5586Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M98.7096 65.6501C99.3788 65.6533 100.043 65.7667 100.675 65.9858V62.0101C100.682 61.9088 100.725 61.8133 100.797 61.7415C100.869 61.6697 100.964 61.6265 101.066 61.6199H102.5C102.602 61.6239 102.699 61.6663 102.771 61.7387C102.843 61.8111 102.885 61.908 102.889 62.0101V73.6192C102.888 73.7222 102.847 73.8208 102.774 73.8937C102.701 73.9667 102.603 74.0082 102.5 74.0094H101.845C101.649 74.0094 101.525 73.8503 101.454 73.6192L101.242 72.9816C100.911 73.3661 100.5 73.6747 100.039 73.8864C99.5775 74.098 99.0759 74.2078 98.5682 74.2082C96.3374 74.2082 94.6514 72.397 94.6514 69.9173C94.6514 67.5275 96.2711 65.6501 98.7096 65.6501ZM100.675 68.1297C100.162 67.8222 99.5742 67.6627 98.9761 67.6688C97.6302 67.6688 96.9396 68.7659 96.9396 69.9173C96.9396 71.0688 97.5949 72.1835 98.8686 72.1835C99.9317 72.1835 100.499 71.5106 100.675 71.0511V68.1297Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M108.431 65.6526C110.555 65.6526 112.184 67.2281 112.184 69.4413C112.184 69.5665 112.166 69.8492 112.149 69.9729C112.138 70.0709 112.094 70.1621 112.023 70.2303C111.951 70.2986 111.858 70.3393 111.76 70.3454H106.518C106.536 71.3541 107.367 72.239 108.554 72.239C109.191 72.2504 109.812 72.0378 110.308 71.6382C110.502 71.4777 110.714 71.4601 110.838 71.6382L111.529 72.5586C111.566 72.5933 111.595 72.6359 111.614 72.6833C111.633 72.7308 111.641 72.7818 111.638 72.8328C111.634 72.8837 111.62 72.9332 111.595 72.9777C111.57 73.0223 111.535 73.0607 111.493 73.0901C110.647 73.8192 109.565 74.2173 108.448 74.2107C106.004 74.2107 104.305 72.2626 104.305 69.9257C104.305 67.6184 106.004 65.6526 108.431 65.6526ZM109.953 68.8921C109.918 68.094 109.28 67.4755 108.378 67.4755C107.385 67.4755 106.749 68.0763 106.642 68.8921H109.953Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M113.499 66.2193C113.499 66.1162 113.54 66.0174 113.613 65.9443C113.686 65.8713 113.785 65.8299 113.888 65.8291H114.525C114.6 65.8216 114.675 65.8406 114.736 65.883C114.798 65.9253 114.843 65.9881 114.863 66.0603L115.157 66.8392C115.454 66.4615 115.835 66.1577 116.269 65.9518C116.704 65.7459 117.18 65.6434 117.66 65.6524C118.847 65.6524 119.427 66.0779 120.103 66.8922C120.458 66.5197 121.272 65.6524 122.742 65.6524C125.363 65.6524 125.981 67.3163 125.981 69.4411V73.6215C125.98 73.674 125.969 73.7257 125.948 73.7738C125.927 73.8218 125.897 73.8653 125.859 73.9015C125.821 73.9378 125.776 73.9662 125.727 73.9851C125.678 74.004 125.626 74.0131 125.574 74.0117H124.157C124.054 74.0105 123.956 73.969 123.883 73.8961C123.81 73.8231 123.769 73.7245 123.768 73.6215V69.3881C123.768 68.3264 123.378 67.6712 122.352 67.6712C121.165 67.6712 120.828 68.5208 120.828 68.5208C120.828 68.5208 120.863 68.9287 120.863 69.2997V73.6215C120.859 73.7236 120.817 73.8205 120.745 73.8929C120.673 73.9652 120.576 74.0077 120.474 74.0117H119.022C118.971 74.0129 118.92 74.0036 118.872 73.9845C118.824 73.9653 118.78 73.9366 118.744 73.9001C118.707 73.8636 118.679 73.8201 118.659 73.7722C118.64 73.7244 118.631 73.6731 118.632 73.6215V69.3881C118.632 68.3264 118.338 67.6712 117.286 67.6712C116.278 67.6712 115.905 68.3794 115.711 68.9463V73.6215C115.707 73.7236 115.665 73.8205 115.593 73.8929C115.521 73.9652 115.424 74.0077 115.322 74.0117H113.886C113.784 74.0073 113.688 73.9647 113.616 73.8924C113.545 73.8201 113.503 73.7233 113.499 73.6215V66.2193Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M126.828 66.3567C126.722 66.074 126.863 65.8252 127.181 65.8252H128.882C128.956 65.818 129.031 65.8372 129.092 65.8795C129.153 65.9218 129.198 65.9844 129.218 66.0563L130.69 70.9435H130.727L132.582 66.0563C132.706 65.8428 132.847 65.8252 133.096 65.8252H134.601C134.667 65.8179 134.733 65.8289 134.793 65.8568C134.852 65.8847 134.903 65.9285 134.94 65.9834C134.976 66.0383 134.997 66.1021 134.999 66.168C135.002 66.2338 134.986 66.2991 134.954 66.3567L130.138 77.9732C130.107 78.0429 130.058 78.1029 129.995 78.1465C129.933 78.1901 129.859 78.2157 129.783 78.2205H128.085C128.018 78.2265 127.951 78.214 127.89 78.1845C127.83 78.155 127.779 78.1095 127.742 78.053C127.706 77.9965 127.685 77.931 127.683 77.8638C127.681 77.7965 127.697 77.73 127.73 77.6713L129.377 73.5277L126.828 66.3567Z",
                            fill: "black"
                        })]
                    })
                }, {}, "12"), (0, n.jsx)(function() {
                    return (0, n.jsxs)("svg", {
                        preserveAspectRatio: "xMidYMid meet",
                        width: "136",
                        height: "136",
                        viewBox: "0 0 136 136",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsx)("g", {
                            clipPath: "url(#clip0_16329_10577)",
                            children: (0, n.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M33.7341 59.391C39.2817 59.391 43.4682 63.4635 43.4682 68.6698C43.4682 71.0671 42.5521 73.1807 41.0605 74.7785L43.6507 77.6393H39.281L38.383 76.6186C37.0846 77.5084 35.4609 77.9228 33.7341 77.9228C28.2125 77.9228 24 73.8762 24 68.6702C24 63.3082 28.3697 59.391 33.7341 59.391ZM33.7341 74.3401C34.4662 74.3401 35.1205 74.1859 35.7487 73.9278L32.0066 69.7525H36.3766L38.3916 72.0468C39.1237 71.1441 39.4642 70.0618 39.4642 68.6698C39.4642 65.5517 37.0839 62.9996 33.7334 62.9996C30.384 62.9996 28.03 65.5255 28.03 68.6698C28.03 71.8658 30.384 74.3404 33.7337 74.3404L33.7341 74.3401ZM46.0126 64.6501H49.9636V72.073C49.9636 73.826 51.0629 74.4698 52.3713 74.4698C53.6794 74.4698 54.7787 73.8256 54.7787 72.073V64.6494H58.7301V72.4071C58.7297 76.2221 55.7471 78.0003 52.3713 78.0003C48.9956 78.0003 46.013 76.2221 46.013 72.4078V64.649L46.0126 64.6501ZM61.4307 77.64H65.3293V64.6494H61.4307V77.6393V77.64ZM61.0729 61.2605C61.0729 59.9843 62.126 59.001 63.3667 59.001C64.6354 59.001 65.6604 59.9843 65.6604 61.2605C65.6604 62.5099 64.6354 63.4939 63.3667 63.4939C62.126 63.4939 61.0729 62.5099 61.0729 61.2605ZM73.962 68.0263H67.9246V64.6501H80.6673L73.4001 74.2637H80.3005V77.64H66.6172L73.962 68.0263ZM82.4987 77.64H86.3974V59.6753H82.4984V77.6393L82.4987 77.64ZM88.6526 71.119C88.6526 66.9953 91.6359 64.3407 95.6392 64.3407C99.6688 64.3407 102.311 67.2789 102.311 70.9133C102.311 70.9133 102.311 71.641 102.233 72.2339H92.552C92.6306 73.7805 93.8071 74.7014 96.0316 74.7014C98.5439 74.7014 99.9566 73.954 100.715 73.4385V76.7893C99.4856 77.5625 98.1252 77.9752 95.8224 77.9752C91.3997 77.9752 88.6526 75.3205 88.6526 71.2481V71.119ZM98.3867 69.6757C98.3867 68.516 97.1832 67.5366 95.6392 67.5366C94.017 67.5366 92.6566 68.4902 92.578 69.6757H98.3867ZM105.301 68.1296H103.548V64.6501H105.301V59.6749H109.095V64.6494H112V68.1289H109.095V77.6396H105.301V68.1289V68.1296Z",
                                fill: "black"
                            })
                        }), (0, n.jsx)("defs", {
                            children: (0, n.jsx)("clipPath", {
                                id: "clip0_16329_10577",
                                children: (0, n.jsx)("rect", {
                                    width: "88",
                                    height: "19",
                                    fill: "white",
                                    transform: "translate(24 59)"
                                })
                            })
                        })]
                    })
                }, {}, "13"), (0, n.jsx)(function() {
                    return (0, n.jsxs)("svg", {
                        preserveAspectRatio: "xMidYMid meet",
                        width: "136",
                        height: "136",
                        viewBox: "0 0 136 136",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsx)("path", {
                            d: "M110.286 55C110.481 55.0979 110.579 55.2937 110.775 55.3916C111.754 56.3706 112.708 57.3251 113.59 58.2061C113.492 61.0207 112.537 63.6149 111.167 66.0379C108.842 70.0027 105.073 72.9885 100.618 74.3591C99.37 74.7507 97.9995 75.0444 96.7513 75.0444C95.7723 74.0654 94.9157 73.2088 93.9367 72.2298C93.741 72.034 93.5452 71.9361 93.4473 71.6425C97.51 71.3488 101.475 69.6111 104.363 66.7966C106.394 64.8631 108.132 62.4402 109.111 59.8459C109.796 58.4019 110.188 56.7377 110.286 55Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M24.9927 61.2898C25.5801 60.7024 26.3388 60.2374 27.2199 60.2374C28.0031 60.1395 28.8597 60.2374 29.5449 60.7268C29.0555 61.7058 28.566 62.7582 28.101 63.7127C27.122 63.3211 25.9717 63.3211 25.1151 63.9085C24.5277 64.3001 24.0627 64.8875 23.769 65.5483C23.4753 66.3314 23.2795 67.188 23.2795 67.9712C23.2795 70.3942 23.2795 72.7192 23.2795 75.1177C22.2272 75.1177 21.0524 75.1177 20 75.1177C20 70.2718 20 65.4504 20 60.6045C21.0524 60.6045 22.1293 60.6045 23.1816 60.6045C23.1816 61.8527 23.1816 63.1253 23.1816 64.3735C23.6467 63.3211 24.1361 62.1708 24.9927 61.2898Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M32.4572 61.0939C33.7053 60.2128 35.3696 60.1149 36.8136 60.2128C37.9638 60.3107 39.2365 60.6044 40.191 61.3631C41.0721 62.0484 41.635 63.1987 41.8308 64.2755C42.0266 64.9608 42.0266 65.6216 42.0266 66.4048C42.0266 69.3172 42.0266 72.2052 42.0266 75.1176C40.9742 75.1176 39.8973 75.1176 38.8449 75.1176C38.8449 74.3344 38.8449 73.5757 38.8449 72.6947C38.5512 73.2821 38.1596 73.9429 37.6946 74.3344C36.8136 75.0197 35.7612 75.3868 34.7088 75.3868C33.3627 75.4847 31.8942 75.191 30.8419 74.4079C29.9608 73.8205 29.3979 72.7681 29.2021 71.6912C29.1042 70.8102 29.2021 69.8557 29.6916 68.9746C30.0832 68.2893 30.6705 67.8243 31.3313 67.4327C32.0166 67.0411 32.8732 66.8453 33.6564 66.6495C35.0025 66.3559 36.373 66.3559 37.6212 65.9643C38.1107 65.8664 38.6002 65.5727 38.7715 65.1811C39.0652 64.5937 38.9673 63.9329 38.5757 63.4434C38.1841 62.9539 37.5967 62.7581 37.0338 62.6603C36.1528 62.4645 35.2962 62.5624 34.513 62.9539C33.7298 63.3455 33.2648 64.1042 33.069 64.9853C32.1879 64.5937 31.2334 64.3 30.3524 64.0063C30.5971 62.9295 31.3803 61.7792 32.4572 61.0939ZM38.0617 67.5796C37.3765 68.069 36.5199 68.2648 35.6388 68.4606C34.8556 68.5585 34.1948 68.7543 33.5095 69.1459C33.0201 69.4396 32.5306 69.9291 32.4572 70.5899C32.3593 71.2752 32.4572 71.936 32.8487 72.5234C33.2403 73.0128 33.7298 73.2086 34.2927 73.3065C35.2717 73.5023 36.422 73.3065 37.2051 72.6212C37.9883 72.0339 38.4533 71.1773 38.6491 70.1983C38.9428 69.048 38.8449 67.7754 38.8449 66.5272C38.7225 66.8943 38.4289 67.2859 38.0617 67.5796Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M50.1527 60.9962C51.205 60.1151 52.6735 60.0172 53.9217 60.3109C54.9741 60.5067 55.953 61.2899 56.4425 62.2444C56.7362 62.636 56.8341 63.1255 57.0299 63.5905C57.3236 62.5381 57.911 61.5591 58.7676 60.8738C59.7465 60.1886 61.0926 60.0907 62.2429 60.2865C63.3932 60.4823 64.4701 61.0696 65.1553 62.0241C65.7427 62.8073 66.0364 63.7618 66.1343 64.7408C66.2322 65.2303 66.1343 65.7197 66.1343 66.2826C66.1343 69.2685 66.1343 72.1809 66.1343 75.1668C65.0819 75.1668 64.005 75.1668 62.9527 75.1668C62.9527 72.2543 62.9527 69.4643 62.9527 66.5519C62.9527 65.5729 62.8548 64.6184 62.2674 63.8352C61.8758 63.2478 61.215 62.9542 60.5297 62.9542C59.6486 62.8563 58.792 63.1499 58.2047 63.8352C57.4215 64.8142 57.3236 66.0624 57.2257 67.2127C57.2257 69.8314 57.2257 72.5236 57.2257 75.1423C56.1733 75.1423 55.0964 75.1423 54.044 75.1423C54.044 72.3278 54.044 69.5377 54.044 66.7232C54.044 65.8421 53.9462 64.9855 53.6525 64.2023C53.3588 63.615 52.8693 63.1499 52.3064 63.052C51.4253 62.8563 50.4708 62.9542 49.7855 63.4436C49.1982 63.9331 48.9045 64.5939 48.7331 65.2792C48.5374 65.9645 48.4395 66.6253 48.4395 67.3106C48.4395 69.9293 48.4395 72.5236 48.4395 75.1423C47.3871 75.1423 46.3102 75.1423 45.2578 75.1423C45.2578 70.2964 45.2578 65.475 45.2578 60.6291C46.3102 60.6291 47.3871 60.6291 48.4395 60.6291C48.4395 61.6815 48.4395 62.8563 48.4395 63.9086C48.6842 62.7339 49.1737 61.6815 50.1527 60.9962Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M74.6019 60.996C75.5809 60.3107 76.927 60.1149 78.0773 60.2128C79.4233 60.3107 80.7939 60.996 81.7484 61.9505C82.8008 63.0029 83.486 64.3735 83.7797 65.8174C84.0734 67.2614 84.0734 68.7299 83.6818 70.0759C83.3881 71.422 82.7029 72.7926 81.6505 73.845C80.5981 74.8239 79.2275 75.3868 77.8815 75.4847C76.6333 75.5826 75.2627 75.3868 74.3082 74.5058C73.5251 73.9184 72.9621 72.9639 72.6685 71.9849C72.6685 74.8974 72.6685 77.6874 72.6685 80.5999C71.5182 80.5999 70.4413 80.5999 69.291 80.5999C69.291 73.9184 69.291 67.1635 69.291 60.4821C70.4413 60.4821 71.5182 60.4821 72.6685 60.4821C72.6685 61.461 72.6685 62.4155 72.6685 63.3945C73.06 62.5379 73.6474 61.5834 74.6019 60.996ZM75.7767 62.9295C75.3851 63.0274 74.9935 63.1253 74.6264 63.419C73.7453 63.9084 73.0845 64.8629 72.7908 65.8419C72.3992 66.9922 72.3992 68.2649 72.6929 69.513C72.8887 70.6633 73.574 71.7402 74.5285 72.3276C75.5075 72.915 76.6577 73.0128 77.7101 72.7192C78.7625 72.4255 79.6436 71.6668 80.1331 70.6878C80.8184 69.4396 80.9163 67.9712 80.7205 66.6251C80.5247 65.4748 79.9373 64.3 78.9828 63.5413C77.9793 62.9295 76.8291 62.7337 75.7767 62.9295Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M105.538 74.0654C106.517 73.3801 107.471 72.6214 108.352 71.7404C110.09 71.7404 111.828 71.7404 113.565 71.7404C114.618 72.7927 115.792 73.9675 116.845 75.0199C116.16 75.1178 115.401 75.0199 114.716 75.0199C111.436 75.0199 108.034 75.0199 104.755 75.0199C104.559 75.0199 104.265 75.0199 104.069 75.0199C104.485 74.7262 105.073 74.4325 105.538 74.0654Z",
                            fill: "black"
                        })]
                    })
                }, {}, "14"), (0, n.jsx)(iy, {}, "1")]
            ];

            function ib(e) {
                let {
                    children: t,
                    pristine: i,
                    index: a,
                    next: s = !1
                } = e, {
                    speed: r
                } = iV();
                return (0, n.jsx)(A.x, {
                    as: m.E.div,
                    css: {
                        willChange: "filter",
                        svg: {
                            width: "100%",
                            height: "100%"
                        }
                    },
                    initial: !i,
                    animate: {
                        y: s ? [40, 0] : [0, -40],
                        ...s ? {
                            opacity: [0, 1],
                            filter: ["blur(5px)", "blur(0px)"]
                        } : {
                            opacity: [1, 0],
                            filter: ["blur(0px)", "blur(5px)"]
                        }
                    },
                    transition: {
                        type: "spring",
                        stiffness: 80 / r,
                        damping: 25,
                        mass: .2,
                        delay: s ? .14 * a : .11 * a,
                        opacity: {
                            delay: 0
                        }
                    },
                    children: t
                })
            }

            function iy() {
                return (0, n.jsxs)("svg", {
                    preserveAspectRatio: "xMidYMid meet",
                    width: "136",
                    height: "136",
                    viewBox: "0 0 136 136",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsxs)("g", {
                        clipPath: "url(#clip0_16329_10575)",
                        children: [(0, n.jsx)("path", {
                            d: "M30.5608 66.5828C30.264 66.1113 29.8492 65.7123 29.3166 65.3859C28.784 65.0595 28.1772 64.8962 27.4961 64.8962C26.7802 64.8781 26.1384 64.996 25.5709 65.2499C25.0033 65.5038 24.5187 65.8574 24.1171 66.3108C23.7155 66.7641 23.4099 67.3036 23.2003 67.9293C22.9908 68.5549 22.886 69.2305 22.886 69.9559C22.886 70.6813 22.9908 71.3568 23.2003 71.9824C23.4099 72.6081 23.7155 73.1476 24.1171 73.601C24.5187 74.0543 25.0033 74.408 25.5709 74.6619C26.1384 74.9157 26.7802 75.0336 27.4961 75.0155C28.1772 75.0155 28.784 74.8523 29.3166 74.5259C29.8492 74.1994 30.264 73.8005 30.5608 73.329L31.9753 74.4442C31.3641 75.1878 30.6743 75.7363 29.906 76.09C29.1376 76.4436 28.3343 76.6295 27.4961 76.6476C26.5008 76.6658 25.6014 76.5071 24.7981 76.1716C23.9949 75.8361 23.3094 75.3691 22.7419 74.7707C22.1744 74.1722 21.7422 73.4604 21.4453 72.6353C21.1484 71.8102 21 70.917 21 69.9559C21 68.9947 21.1484 68.1016 21.4453 67.2764C21.7422 66.4513 22.1744 65.7395 22.7419 65.1411C23.3094 64.5426 23.9949 64.0756 24.7981 63.7401C25.6014 63.4046 26.5008 63.246 27.4961 63.2641C28.3343 63.2822 29.1376 63.4681 29.906 63.8217C30.6743 64.1754 31.3641 64.7239 31.9753 65.4675L30.5608 66.5828Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M42.4176 68.5142V68.1878C42.4176 65.9935 41.3698 64.8963 39.2743 64.8963C37.8423 64.8963 36.5937 65.395 35.5285 66.3924L34.4808 65.1139C35.6333 63.8807 37.3621 63.2642 39.6672 63.2642C40.2608 63.2642 40.8327 63.3548 41.3828 63.5362C41.9329 63.7175 42.4089 63.9941 42.8105 64.3659C43.2121 64.7376 43.5352 65.2046 43.7796 65.7668C44.0242 66.329 44.1464 66.9999 44.1464 67.7798V73.465C44.1464 73.9547 44.1682 74.467 44.2118 75.002C44.2555 75.5369 44.3036 75.9767 44.3558 76.3213H42.6795C42.6272 76.013 42.5879 75.6775 42.5616 75.3148C42.5354 74.9521 42.5223 74.5985 42.5223 74.2539H42.47C41.9635 75.1062 41.3655 75.7183 40.6756 76.09C39.9858 76.4618 39.1433 76.6477 38.1479 76.6477C37.6066 76.6477 37.0827 76.5706 36.5763 76.4165C36.0699 76.2623 35.6202 76.0266 35.2273 75.7092C34.8344 75.3919 34.52 75.002 34.2843 74.5395C34.0485 74.0771 33.9307 73.5376 33.9307 72.921C33.9307 71.8873 34.1882 71.0758 34.7034 70.4864C35.2185 69.897 35.8647 69.4572 36.6418 69.1671C37.4189 68.8769 38.2483 68.6956 39.1302 68.623C40.0121 68.5505 40.8198 68.5142 41.5531 68.5142H42.4176ZM41.527 69.9831C41.0905 69.9831 40.5447 70.0058 39.8899 70.0511C39.235 70.0965 38.6063 70.2053 38.0039 70.3776C37.4014 70.5499 36.8862 70.8173 36.4584 71.18C36.0306 71.5427 35.8166 72.0414 35.8166 72.6762C35.8166 73.0933 35.8996 73.4514 36.0655 73.7506C36.2314 74.0499 36.454 74.2947 36.7334 74.4851C37.0128 74.6755 37.3228 74.8116 37.6633 74.8931C38.0039 74.9748 38.3487 75.0156 38.698 75.0156C39.3267 75.0156 39.8724 74.9068 40.3351 74.6891C40.7979 74.4715 41.1864 74.1768 41.5007 73.8051C41.815 73.4333 42.0465 72.9981 42.195 72.4994C42.3433 72.0006 42.4176 71.4702 42.4176 70.908V69.9831H41.527Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M54.1271 66.6101C53.8652 66.0841 53.5159 65.667 53.0794 65.3587C52.6429 65.0505 52.1103 64.8963 51.4816 64.8963C51.1847 64.8963 50.8834 64.9326 50.5779 65.0051C50.2722 65.0776 49.9971 65.191 49.7527 65.3452C49.5081 65.4993 49.3117 65.6942 49.1634 65.93C49.0148 66.1658 48.9408 66.4559 48.9408 66.8005C48.9408 67.3989 49.1415 67.8342 49.5431 68.1062C49.9449 68.3782 50.5472 68.6139 51.3505 68.8134L53.1055 69.2487C53.9613 69.4482 54.6729 69.8517 55.2405 70.4592C55.8078 71.0667 56.0917 71.8238 56.0917 72.7306C56.0917 73.4197 55.9564 74.0136 55.6856 74.5123C55.4149 75.011 55.057 75.4191 54.6118 75.7364C54.1664 76.0538 53.6556 76.285 53.0794 76.4301C52.5032 76.5752 51.9181 76.6477 51.3244 76.6477C50.3814 76.6477 49.5038 76.4618 48.6919 76.09C47.8799 75.7183 47.1856 75.079 46.6094 74.1723L48.1025 73.1114C48.4518 73.6917 48.8926 74.1542 49.4252 74.4987C49.9578 74.8433 50.5908 75.0156 51.3244 75.0156C51.6735 75.0156 52.0228 74.9748 52.3721 74.8931C52.7214 74.8116 53.0313 74.6846 53.302 74.5123C53.5727 74.34 53.791 74.1179 53.9568 73.8459C54.1228 73.5738 54.2057 73.2565 54.2057 72.8938C54.2057 72.2591 53.9786 71.8012 53.5246 71.5201C53.0706 71.239 52.5205 71.0168 51.8745 70.8536L50.1979 70.4456C49.9885 70.3912 49.7046 70.3005 49.3467 70.1736C48.9887 70.0466 48.6394 69.8562 48.2989 69.6023C47.9585 69.3484 47.6659 69.0174 47.4213 68.6094C47.1769 68.2014 47.0547 67.6981 47.0547 67.0997C47.0547 66.4468 47.1813 65.8756 47.4345 65.3859C47.6877 64.8963 48.0282 64.4973 48.4561 64.189C48.884 63.8807 49.3685 63.6495 49.9099 63.4954C50.4512 63.3412 51.0101 63.2642 51.5863 63.2642C52.4419 63.2642 53.2366 63.4364 53.9699 63.781C54.7033 64.1256 55.2709 64.715 55.6727 65.5492L54.1271 66.6101Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M59.9947 70.4456C60.0472 71.0803 60.1955 71.6787 60.4401 72.2409C60.6845 72.8031 61.0075 73.2882 61.4092 73.6962C61.8108 74.1043 62.2736 74.4262 62.7974 74.6619C63.3214 74.8977 63.8889 75.0156 64.5001 75.0156C65.4256 75.0156 66.2245 74.7934 66.8967 74.3491C67.5692 73.9048 68.08 73.3925 68.4291 72.8122L69.7651 73.9547C69.0317 74.9158 68.224 75.6049 67.3421 76.022C66.4602 76.4391 65.5129 76.6477 64.5001 76.6477C63.5921 76.6477 62.7495 76.48 61.9723 76.1445C61.1953 75.809 60.5273 75.342 59.9686 74.7435C59.4096 74.1451 58.9688 73.4378 58.6456 72.6218C58.3226 71.8057 58.1611 70.9171 58.1611 69.9559C58.1611 68.9948 58.3183 68.1062 58.6326 67.2901C58.947 66.474 59.3835 65.7668 59.9422 65.1683C60.5012 64.5699 61.156 64.1029 61.9068 63.7674C62.6577 63.4319 63.4697 63.2642 64.3429 63.2642C65.2685 63.2642 66.0979 63.4364 66.8313 63.781C67.5647 64.1256 68.1804 64.5835 68.678 65.1547C69.1757 65.726 69.5556 66.397 69.8175 67.1677C70.0794 67.9384 70.2104 68.759 70.2104 69.6295V70.4456H59.9947ZM68.3244 68.9767C68.3244 67.7616 67.9751 66.7778 67.2767 66.0252C66.5781 65.2726 65.6003 64.8963 64.3429 64.8963C63.784 64.8963 63.2428 65.0096 62.7188 65.2363C62.1951 65.463 61.7365 65.7668 61.3436 66.1476C60.9509 66.5284 60.6365 66.9637 60.4008 67.4533C60.165 67.943 60.0472 68.4507 60.0472 68.9767H68.3244Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M79.4744 65.2228H75.9383V72.7307C75.9383 73.2022 75.9819 73.5875 76.0692 73.8868C76.1566 74.186 76.2788 74.4172 76.436 74.5804C76.5931 74.7437 76.7808 74.857 76.999 74.9205C77.2173 74.9839 77.4576 75.0157 77.7194 75.0157C78.0163 75.0157 78.322 74.9703 78.6363 74.8797C78.9505 74.789 79.2387 74.6711 79.5006 74.526L79.5791 76.1854C78.9332 76.4937 78.156 76.6478 77.2479 76.6478C76.9161 76.6478 76.5713 76.6025 76.2132 76.5118C75.8552 76.4211 75.5279 76.2488 75.2311 75.9949C74.9342 75.7411 74.6896 75.3965 74.4975 74.9613C74.3056 74.526 74.2095 73.9548 74.2095 73.2475V65.2228H71.6162V63.5907H74.2095V60H75.9383V63.5907H79.4744V65.2228Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M82.7291 70.4456C82.7815 71.0803 82.9299 71.6787 83.1744 72.2409C83.4188 72.8031 83.7418 73.2882 84.1436 73.6962C84.5451 74.1043 85.008 74.4262 85.5318 74.6619C86.0557 74.8977 86.6233 75.0156 87.2345 75.0156C88.16 75.0156 88.9588 74.7934 89.6313 74.3491C90.3036 73.9048 90.8144 73.3925 91.1635 72.8122L92.4994 73.9547C91.766 74.9158 90.9584 75.6049 90.0765 76.022C89.1946 76.4391 88.2472 76.6477 87.2345 76.6477C86.3264 76.6477 85.4838 76.48 84.7066 76.1445C83.9296 75.809 83.2617 75.342 82.7029 74.7435C82.144 74.1451 81.7032 73.4378 81.38 72.6218C81.057 71.8057 80.8955 70.9171 80.8955 69.9559C80.8955 68.9948 81.0527 68.1062 81.367 67.2901C81.6813 66.474 82.1179 65.7668 82.6766 65.1683C83.2355 64.5699 83.8903 64.1029 84.6412 63.7674C85.3921 63.4319 86.2041 63.2642 87.0773 63.2642C88.0028 63.2642 88.8323 63.4364 89.5657 63.781C90.2991 64.1256 90.9148 64.5835 91.4124 65.1547C91.91 65.726 92.29 66.397 92.5519 67.1677C92.8138 67.9384 92.9448 68.759 92.9448 69.6295V70.4456H82.7291ZM91.0588 68.9767C91.0588 67.7616 90.7095 66.7778 90.0111 66.0252C89.3125 65.2726 88.3347 64.8963 87.0773 64.8963C86.5184 64.8963 85.9771 65.0096 85.4532 65.2363C84.9294 65.463 84.4709 65.7668 84.0782 66.1476C83.6852 66.5284 83.3709 66.9637 83.1352 67.4533C82.8994 67.943 82.7815 68.4507 82.7815 68.9767H91.0588Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M98.577 69.5209L94.124 63.5908H96.4815L99.8868 68.3512L103.135 63.5908H105.283L101.013 69.5209L106.147 76.3215H103.79L99.6772 70.745L95.7218 76.3215H93.5215L98.577 69.5209Z",
                            fill: "black"
                        }), (0, n.jsx)("path", {
                            d: "M114.895 65.2228H111.359V72.7307C111.359 73.2022 111.403 73.5875 111.49 73.8868C111.577 74.186 111.7 74.4172 111.857 74.5804C112.014 74.7437 112.202 74.857 112.42 74.9205C112.638 74.9839 112.878 75.0157 113.14 75.0157C113.437 75.0157 113.743 74.9703 114.057 74.8797C114.371 74.789 114.66 74.6711 114.921 74.526L115 76.1854C114.354 76.4937 113.577 76.6478 112.669 76.6478C112.337 76.6478 111.992 76.6025 111.634 76.5118C111.276 76.4211 110.949 76.2488 110.652 75.995C110.355 75.7411 110.111 75.3965 109.918 74.9613C109.726 74.526 109.63 73.9548 109.63 73.2475V65.2228H107.037V63.5907H109.63V60H111.359V63.5907H114.895V65.2228Z",
                            fill: "black"
                        })]
                    }), (0, n.jsx)("defs", {
                        children: (0, n.jsx)("clipPath", {
                            id: "clip0_16329_10575",
                            children: (0, n.jsx)("rect", {
                                width: "94",
                                height: "16.732",
                                fill: "white",
                                transform: "translate(21 60)"
                            })
                        })
                    })]
                })
            }

            function iv() {
                return (0, n.jsxs)("svg", {
                    preserveAspectRatio: "xMidYMid meet",
                    width: "136",
                    height: "136",
                    viewBox: "0 0 136 136",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        d: "M40.6612 67.8929V75.297C40.6612 78.2507 40.3461 79.3141 39.775 80.3971C39.204 81.4802 38.3572 82.3269 37.2742 82.898C36.1912 83.469 35.1278 83.7841 32.1938 83.7841H24.8291V67.8929H40.6612Z",
                        fill: "black",
                        fillOpacity: "0.2"
                    }), (0, n.jsx)("path", {
                        d: "M24.8291 52H32.1938C35.1278 52 36.1912 52.3151 37.2742 52.8861C38.3572 53.4572 39.1843 54.3039 39.775 55.387C40.3461 56.47 40.6612 57.5333 40.6612 60.4871V67.8911H24.8291V52Z",
                        fill: "black",
                        fillOpacity: "0.6"
                    }), (0, n.jsx)("path", {
                        d: "M17.4674 52H24.8321V83.7823H17.4674C14.5333 83.7823 13.47 83.4672 12.387 82.8961C11.3039 82.3251 10.4769 81.4783 9.88612 80.3953C9.31507 79.3123 9 78.2489 9 75.2952V60.4871C9 57.5333 9.31507 56.47 9.88612 55.387C10.4572 54.3039 11.3039 53.4572 12.387 52.8861C13.47 52.3151 14.5333 52 17.4674 52Z",
                        fill: "black"
                    }), (0, n.jsx)("path", {
                        d: "M67.6831 66.2417C67.3376 65.7748 66.8577 65.42 66.3011 65.2332C65.7253 65.0091 65.1687 64.897 64.6313 64.897C63.9403 64.897 63.3069 65.0278 62.7311 65.2706C62.1744 65.5134 61.6754 65.8495 61.2531 66.2791C60.8501 66.7273 60.5238 67.2316 60.3126 67.7919C60.1015 68.3895 59.9863 69.0432 59.9863 69.6782C59.9863 70.3879 60.1015 71.0416 60.3126 71.6392C60.5046 72.1995 60.8117 72.7225 61.2147 73.1707C61.6178 73.6003 62.1169 73.9178 62.6543 74.1606C63.2109 74.4033 63.8443 74.5154 64.5353 74.5154C65.2647 74.5154 65.8981 74.3847 66.4547 74.1045C67.0113 73.8244 67.4528 73.4508 67.7982 73.0026L69.7176 74.31C69.1418 75.0383 68.3933 75.6173 67.5487 76.0095C66.685 76.4017 65.6869 76.6072 64.5353 76.6072C63.4796 76.6072 62.5199 76.4391 61.637 76.1029C60.7925 75.7854 60.0247 75.2998 59.3913 74.6835C58.7579 74.0672 58.2589 73.3201 57.9134 72.4983C57.5679 71.6392 57.376 70.7054 57.376 69.6782C57.376 68.6323 57.5679 67.6798 57.9326 66.8394C58.3165 65.9803 58.8155 65.2706 59.4681 64.6729C60.1399 64.0753 60.9268 63.6084 61.7714 63.3095C62.6543 62.992 63.614 62.824 64.6505 62.824C65.0727 62.824 65.5334 62.8613 65.994 62.9547C66.4547 63.0294 66.9153 63.1601 67.3376 63.3282C67.7599 63.4963 68.1629 63.6831 68.5468 63.9445C68.9307 64.1873 69.257 64.4862 69.5065 64.841L67.6831 66.2417ZM71.1188 62.2823H73.3837V76.271H71.1188V62.2823ZM82.5583 70.9295C82.5583 70.6494 82.5199 70.3692 82.424 70.1078C82.3472 69.8463 82.2128 69.6222 82.0401 69.4167C81.8482 69.2113 81.6178 69.0619 81.3491 68.9498C81.0804 68.8191 80.7733 68.7631 80.4086 68.7631C79.7176 68.7631 79.1418 68.9685 78.662 69.3794C78.2013 69.7716 77.9326 70.2945 77.8942 70.9109C77.8942 70.9295 82.5583 70.9295 82.5583 70.9295ZM84.8232 71.9381V72.2369C84.8232 72.3303 84.8232 72.4423 84.804 72.5357H77.8942C77.9134 72.8532 78.0094 73.152 78.1437 73.4322C78.2973 73.6936 78.4892 73.9178 78.7388 74.1232C78.9691 74.31 79.257 74.4594 79.5449 74.5714C79.8328 74.6835 80.1591 74.7395 80.4854 74.7395C81.0612 74.7395 81.5411 74.6461 81.9249 74.4407C82.3088 74.2353 82.6351 73.9364 82.8846 73.5816L84.4009 74.7582C83.4988 75.9348 82.2128 76.5325 80.5046 76.5325C79.7944 76.5325 79.1418 76.4204 78.5468 76.215C77.971 76.0095 77.4528 75.692 76.9921 75.2811C76.5507 74.8703 76.2052 74.3847 75.9748 73.843C75.7445 73.2641 75.6101 72.6104 75.6101 71.882C75.6101 71.1723 75.7253 70.5186 75.9748 69.9397C76.2244 69.342 76.5698 68.8564 76.9921 68.4456C77.4144 68.0347 77.9326 67.6985 78.5084 67.4744C79.1226 67.2316 79.7752 67.1195 80.4278 67.1195C81.0612 67.1195 81.637 67.2316 82.1745 67.437C82.7119 67.6238 83.1917 67.9413 83.5756 68.3522C83.9595 68.7444 84.2666 69.2487 84.4777 69.8463C84.708 70.4439 84.8232 71.135 84.8232 71.9381ZM92.5583 75.1317H92.5008C92.2704 75.5239 91.9057 75.8601 91.4067 76.1216C90.9077 76.3644 90.3318 76.4951 89.6793 76.4951C89.3146 76.4951 88.9307 76.4391 88.5276 76.3457C88.1437 76.2523 87.7599 76.1029 87.4336 75.8975C87.1073 75.6733 86.8194 75.3745 86.6082 75.0383C86.3971 74.6835 86.2819 74.2353 86.2819 73.731C86.2819 73.0586 86.4739 72.5357 86.8578 72.1435C87.2416 71.7513 87.7407 71.4525 88.3549 71.2283C88.9691 71.0229 89.6217 70.8922 90.3702 70.8175C91.0996 70.7428 91.829 70.7054 92.5391 70.7054V70.4813C92.5391 69.921 92.328 69.5101 91.9057 69.2673C91.5027 68.9872 91.0228 68.8564 90.447 68.8564C89.9672 68.8564 89.5065 68.9498 89.065 69.1553C88.6236 69.3607 88.2589 69.5848 87.971 69.8837L86.8002 68.5389C87.3184 68.072 87.9134 67.7172 88.5852 67.4744C89.257 67.2503 89.948 67.1195 90.6581 67.1195C91.4643 67.1195 92.1361 67.2316 92.6543 67.4557C93.1917 67.6798 93.5948 67.96 93.9019 68.3335C94.209 68.6884 94.4201 69.0992 94.5353 69.5288C94.6697 69.977 94.7272 70.4253 94.7272 70.8548V76.2523H92.5967L92.5583 75.1317ZM92.5199 72.2182H92.0017C91.637 72.2182 91.2531 72.2369 90.8501 72.2742C90.4662 72.2929 90.1015 72.3676 89.7368 72.4797C89.3913 72.5731 89.1034 72.7225 88.8923 72.9279C88.662 73.1147 88.5468 73.3761 88.5468 73.7123C88.5468 73.9178 88.5852 74.1045 88.6812 74.2539C88.7771 74.3847 88.9115 74.4967 89.065 74.5901C89.2186 74.6835 89.3913 74.7395 89.5833 74.7769C89.7752 74.8142 89.9672 74.8329 90.1591 74.8329C90.9461 74.8329 91.5411 74.6275 91.9441 74.2166C92.3472 73.8057 92.5583 73.2454 92.5583 72.5544V72.2182H92.5199ZM97.3184 67.381H99.4873V68.8564H99.5257C99.756 68.3522 100.121 67.9226 100.581 67.6051C101.042 67.2876 101.56 67.1195 102.174 67.1195C102.27 67.1195 102.366 67.1195 102.462 67.1382C102.558 67.1382 102.654 67.1569 102.731 67.1756V69.2113C102.597 69.1739 102.462 69.1553 102.328 69.1366C102.232 69.1179 102.117 69.1179 102.021 69.1179C101.503 69.1179 101.08 69.2113 100.773 69.3981C100.485 69.5662 100.236 69.7903 100.044 70.0704C99.8712 70.3132 99.756 70.5747 99.6793 70.8735C99.6217 71.1536 99.5833 71.3591 99.5833 71.5272V76.2897H97.3184C97.3184 76.271 97.3184 67.381 97.3184 67.381ZM106.531 62.2823V68.5203H106.589C106.704 68.3709 106.858 68.2214 107.031 68.0534C107.203 67.8853 107.414 67.7359 107.664 67.6051C107.933 67.4557 108.24 67.3437 108.528 67.269C108.892 67.1569 109.276 67.1195 109.641 67.1195C110.293 67.1195 110.869 67.2503 111.426 67.4931C111.963 67.7359 112.443 68.0534 112.827 68.4642C113.23 68.8938 113.537 69.3981 113.729 69.9397C113.94 70.5186 114.055 71.1536 114.055 71.77C114.055 72.405 113.959 73.0213 113.729 73.6189C113.537 74.1792 113.23 74.6835 112.846 75.113C112.462 75.5426 111.983 75.8788 111.445 76.1216C110.908 76.3644 110.274 76.4951 109.583 76.4951C108.95 76.4951 108.336 76.3644 107.76 76.0842C107.222 75.8227 106.762 75.4119 106.455 74.9076H106.416V76.2336H104.267V62.245H106.531V62.2823ZM111.752 71.7886C111.752 71.4525 111.695 71.0976 111.579 70.7801C111.483 70.4439 111.33 70.1264 111.1 69.8463C110.888 69.5661 110.601 69.342 110.293 69.1926C109.967 69.0245 109.583 68.9312 109.142 68.9312C108.72 68.9312 108.355 69.0245 108.029 69.1926C107.702 69.3607 107.414 69.5848 107.184 69.865C106.954 70.1451 106.781 70.4626 106.647 70.7988C106.531 71.135 106.474 71.4898 106.474 71.826C106.474 72.1622 106.531 72.517 106.647 72.8532C106.781 73.1894 106.954 73.4882 107.184 73.7683C107.414 74.0485 107.702 74.2539 108.029 74.4407C108.355 74.6088 108.739 74.6835 109.142 74.6835C109.583 74.6835 109.967 74.5901 110.293 74.422C110.62 74.2539 110.888 74.0298 111.1 73.7497C111.311 73.4695 111.464 73.1707 111.579 72.8158C111.695 72.4983 111.752 72.1435 111.752 71.7886ZM116.282 67.381H118.547V76.271H116.282V67.381ZM115.956 64.3741C115.956 64.0193 116.09 63.7018 116.359 63.4403C116.627 63.1601 116.992 63.0294 117.395 63.0294C117.817 63.0294 118.163 63.1601 118.432 63.4216C118.72 63.6644 118.873 63.9819 118.873 64.3741C118.873 64.7476 118.72 65.0838 118.432 65.3453C118.163 65.5881 117.798 65.7188 117.395 65.7188C116.973 65.7188 116.627 65.5881 116.359 65.3266C116.109 65.0651 115.956 64.729 115.956 64.3741ZM120.006 69.1553V67.381H121.599V64.8037H123.825V67.381H126.109V69.1553H123.844V73.2828C123.844 73.675 123.921 74.0111 124.055 74.2726C124.209 74.5341 124.535 74.6648 125.034 74.6648C125.188 74.6648 125.341 74.6461 125.533 74.6275C125.706 74.5901 125.86 74.5341 126.013 74.4781L126.09 76.215C125.86 76.2897 125.61 76.3457 125.361 76.383C125.092 76.4391 124.823 76.4577 124.574 76.4577C123.959 76.4577 123.48 76.383 123.096 76.215C122.712 76.0469 122.405 75.8227 122.194 75.5239C121.983 75.2251 121.829 74.8889 121.733 74.5341C121.656 74.1232 121.618 73.731 121.618 73.3201V69.1739H120.006V69.1553Z",
                        fill: "black"
                    })]
                })
            }
            let ij = [{
                date: "September 2024",
                title: "Gooey Tooltip",
                src: "gooey-tooltip.mp4"
            }, {
                date: "August 2024",
                title: "Staggered Text",
                src: "staggered-text.mp4"
            }, {
                date: "July 2024",
                title: "Designing Depth",
                component: (0, n.jsx)(function() {
                    return (0, n.jsxs)(l.k, {
                        direction: "column",
                        gap: 1,
                        css: {
                            sup: {
                                display: "inline-block",
                                lineHeight: "14px",
                                x: -1
                            }
                        },
                        children: [(0, n.jsx)(_, {}), (0, n.jsx)(K, {}), (0, n.jsx)($, {}), (0, n.jsx)(ee, {}), (0, n.jsx)(et, {}), (0, n.jsx)(ei, {})]
                    })
                }, {}),
                src: {
                    src: "/_next/static/media/og-depth.916709c9.png",
                    height: 1260,
                    width: 2400,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAM1BMVEX49/fd4/HhppnMfnKwk6/T4fKluN37/PvwbFjUzdj19vizyefw2NTTgYvvzMXqy8b8gXp/CbEKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKElEQVR4nAXBiQEAIAjEsKrgCb77T2sCylsPoPXGaCEUtq0XIH064gMPnQDJYoZ4FgAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 4
                },
                bump: !0,
                writing: !0,
                slowMotion: !1,
                slug: "depth",
                theme: "light"
            }, {
                date: "May 2024",
                title: "Logo Carousel",
                src: "logo-carousel.mp4",
                component: (0, n.jsx)(function() {
                    let [e, t] = a.useState(0), [i, s] = a.useState(!0), r = iw[e], o = iw[(e + 1) % iw.length];
                    return a.useEffect(() => {
                        let e;

                        function n() {
                            t(e => (e + 1) % iw.length)
                        }
                        if (i) {
                            e = setTimeout(() => {
                                n()
                            }, 500), s(!1);
                            return
                        }
                        let a = setInterval(n, 2e3);
                        return () => {
                            clearInterval(a), clearTimeout(e)
                        }
                    }, [i]), (0, n.jsx)(A.x, {
                        css: {
                            bleed: !0,
                            height: 320,
                            background: "$gray2",
                            center: !0,
                            px: 16
                        },
                        children: (0, n.jsxs)(A.x, {
                            css: {
                                maxWidth: 720,
                                display: "grid",
                                placeItems: "center",
                                width: "100%",
                                ".dark &": {
                                    filter: "invert(1)"
                                },
                                "> *": {
                                    gridArea: "1 / 1"
                                }
                            },
                            children: [(0, n.jsxs)(l.k, {
                                justify: "between",
                                css: {
                                    width: "100%"
                                },
                                children: [(0, n.jsx)(ib, {
                                    pristine: i,
                                    index: 0,
                                    children: r[0]
                                }), (0, n.jsx)(ib, {
                                    pristine: i,
                                    index: 1,
                                    children: r[1]
                                }), (0, n.jsx)(ib, {
                                    pristine: i,
                                    index: 2,
                                    children: r[2]
                                }), (0, n.jsx)(ib, {
                                    pristine: i,
                                    index: 3,
                                    children: r[3]
                                })]
                            }, String(e)), (0, n.jsxs)(l.k, {
                                justify: "between",
                                css: {
                                    width: "100%"
                                },
                                children: [(0, n.jsx)(ib, {
                                    next: !0,
                                    pristine: i,
                                    index: 0,
                                    children: o[0]
                                }), (0, n.jsx)(ib, {
                                    next: !0,
                                    pristine: i,
                                    index: 1,
                                    children: o[1]
                                }), (0, n.jsx)(ib, {
                                    next: !0,
                                    pristine: i,
                                    index: 2,
                                    children: o[2]
                                }), (0, n.jsx)(ib, {
                                    next: !0,
                                    pristine: i,
                                    index: 3,
                                    children: o[3]
                                })]
                            }, String(e))]
                        })
                    })
                }, {}),
                bump: !0,
                theme: "light"
            }, {
                date: "April 2024",
                title: "Blur Reveal",
                src: "blur-reveal.mp4",
                bump: !0
            }, {
                date: "April 2024",
                title: "Wheel Interface",
                src: "wheel.mp4",
                bump: !0,
                theme: "light",
                videoStyle: {
                    transform: "scale(1.001)"
                }
            }, {
                date: "March 2024",
                title: "Devouring Details",
                href: "https://devouringdetails.com",
                src: "dd.mp4",
                bump: !0,
                theme: "light",
                position: "top",
                videoStyle: {
                    transform: "scale(1.001)"
                }
            }, {
                date: "February 2024",
                title: "Running Diary",
                href: "/run",
                src: "run4.mp4",
                theme: "light",
                bump: !0
            }, {
                date: "January 2024",
                title: "Contrasting Aesthetics",
                slug: "contrasting-aesthetics",
                component: (0, n.jsx)(function() {
                    return (0, n.jsxs)(l.k, {
                        direction: "column",
                        gap: 1,
                        css: {
                            sup: {
                                display: "inline-block",
                                lineHeight: "14px",
                                x: -1
                            }
                        },
                        children: [(0, n.jsxs)(el, {
                            children: ["Much of the art I appreciate in museums can be bucketed into aesthetics like typographic, medieval, or patterned. The boundaries feel clearly defined because we can assign names to them. I have been increasingly more stimulated by aesthetic intersections—unexpected displays of art that tastefully reject the notion of a clean, singularly defined style, yet bridges many. For my taste, often this ends up in opposition to minimalism, yet does not chaotically lean into ", (0, n.jsx)(el.Word, {
                                label: " — art, decorations, or design considered by many people to be ugly, without style, or false, but enjoyed by other people, often because they are funny.",
                                children: "kitschy"
                            }), " or", " ", (0, n.jsx)(el.Word, {
                                label: " — belonging or relating to a style in art and design that uses the largest range of materials and colours possible, and very complicated shapes or forms.",
                                children: "maximalism"
                            }), ". There is authoring intent, purpose, and a sense of iteration felt throughout, not seemingly arbitrary excess for the sake of creative provocation. I believe there's something fascinating in art and design that treats my attention with care and instills curiosity."]
                        }), (0, n.jsx)(k, {
                            children: "Akin to excess—absence, or minimalism, and the idea of “clean design” can sometimes make me not think or feel anything special when interfacing with said art, software, or device. It often fails to surprise or force a moment of pause to ponder—why does this feel great? Rightfully so, I do not need to be intellectually stimulated when making breakfast—it is conveniently acceptable for the design of the toaster not to be influenced by contrasting aesthetics."
                        }), (0, n.jsx)(k, {
                            children: "But in search for novelty, it can more often than not be found at the intersection of many unrelated disciplines or styles, as one is able to increase their pool of inspiration to remix from. What does the Renaissance mixed with analog technology look like? How does an orchestral French ballad with a hip-hop beat sound like? Can you have more than one style of logo?"
                        }), (0, n.jsx)(ex, {}), (0, n.jsx)(ew, {}), (0, n.jsx)(ev, {}), (0, n.jsx)(eC, {}), (0, n.jsx)(ey, {}), (0, n.jsx)(eb, {})]
                    })
                }, {}),
                src: {
                    src: "/_next/static/media/og-contrasting-aesthetics.09147220.png",
                    height: 628,
                    width: 1200,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEVmZmZiYGAXFxd4eXlSU1MYGRl5a2t6PT3UJk6CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nB3BgQ0AIAgDsMJQ///YhNYoGO5LEqbW6LP6AwTXAFO2Oss8AAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 4
                },
                writing: !0,
                bump: !0,
                slowMotion: !1
            }, {
                date: "December 2023",
                title: "What will you ship?",
                slug: "vercel",
                src: {
                    src: "/_next/static/media/og-vercel.ece6cac2.jpg",
                    height: 1660,
                    width: 2048,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAeEAABAwQDAAAAAAAAAAAAAAABAAIEAwUREiFxgf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQEBAQEAAAAAAAAAAAAAAAABACEC/9oADAMBAAIRAxEAPwC93uEOfaasN0V4pVSdW7DDQec9+oiJOVDIU2//2Q==",
                    blurWidth: 8,
                    blurHeight: 6
                },
                component: (0, n.jsx)(function() {
                    return (0, n.jsxs)(S, {
                        children: [(0, n.jsx)(V, {
                            src: "vercel/mini-compressed.mp4",
                            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOCAIAAABVWCAXAAAACXBIWXMAAAPoAAAD6AG1e1JrAAABPklEQVQ4jWWSW5aEMAhEiTxDsv/1ztGyq22HLzShuFCRMcZxBRIzc3dVHWOYWVVFhKq+cndnCZIxhvBbVZFAMTPdHadV1d1mNsZw94hAsV6B/NZCAbTQFpdUNSLmnBSdn1xE0JJax3EItXGMtsAmnV2RH1JUZianA8fN9VyByNmgu6uKPbrb3UXu+9fiziE4zXdfGM3MQI4dq6q7Z+acU1Up1N1cGThuCBqB/nNO4oiIu/faJ/8lJCJZ5X4uAXMA4t49GnKXNBFQ0L2vilRVZhJQVTMfF2gHHYHu3ruqWCYiEYHpAAJqVSOyvJ4MApY9hdx9zok/fK609ctFa5BXldnZjQ0jYq1FaQQMYbOfwHF3c9N8H3vvtRYpgBkRbPZWxPN7eg+htRa8riuYPz35IYIDr2MQYV5KVxUY/+P8AfwPC+QBsH65AAAAAElFTkSuQmCC",
                            aspectRatio: 1.7777777777777777
                        }), (0, n.jsxs)(k, {
                            author: "Rauno",
                            children: ["In October, together with Glenn, Henry, and Alasdair, we shipped", " ", (0, n.jsx)(B, {
                                href: "https://vercel.com/home",
                                children: "a new homepage for Vercel"
                            }), ". Our north stars for the design were performance, constraint in visual flair, and opportunity for bridging different pages aesthetically. Yet, I wouldn't describe the page as minimal as we made use of different motifs like grid lines and pixelation, but rather an exercise in constraint and tranquil beauty. For instance, if an animation or interaction didn't perform well, felt pompous, or out of rhythm relative to the page, we didn't build it."]
                        }), (0, n.jsx)(k, {
                            children: "We anticipate conceptually trivial elements of an interface to gratuitously entertain and afford us with yet another masterpiece of an interaction. Naturally, we celebrate the minutiae of visual finesse to a degree that folks outside the rabbit hole don't relate as intensely to."
                        }), (0, n.jsx)(k, {
                            children: "But what elements of an interface are largely universally experienced? The page speed, legible typography, information honesty, layout stability and scannability, accessible focus states, auditory feedback, and sensible DOM ordering. Alas, primitives such as performance and accessibility are not as glamorous or fruitful to obsess over — because seemingly, they are invisible, and thus are trivial to trade off when it comes to shipping quickly. Truthfully, I would much rather spend time on polishing that animation spring over tracking down what made the initial load so slow. But is having a slow website with immaculate attention to visual craft desirable?"
                        }), (0, n.jsx)(k, {
                            children: "We are proud to have struck a balance in shipping a website that feels reflective of our collective taste, yet doesn't nervously exhibit itself through artificial gimmicks. In this essay, we'd like to share said taste, convictions, and some technical implementation details."
                        }), (0, n.jsx)(tn, {}), (0, n.jsx)(td, {}), (0, n.jsx)(ti, {}), (0, n.jsx)(ta, {}), (0, n.jsx)(tp, {}), (0, n.jsx)(tr, {}), (0, n.jsx)(tg, {}), (0, n.jsx)(to, {}), (0, n.jsx)(tl, {}), (0, n.jsx)(tA, {}), (0, n.jsx)(tc, {})]
                    })
                }, {}),
                writing: !0,
                bump: !0,
                slowMotion: !1,
                collaborators: [{
                    name: "Henry",
                    avatar: e2,
                    href: "https://henryheffernan.com"
                }, {
                    name: "Glenn",
                    avatar: e3,
                    href: "https://glenn.me"
                }, {
                    name: "Alasdair",
                    avatar: e5,
                    href: "https://alasdairmonk.com"
                }, {
                    name: "Rauno",
                    avatar: e4
                }]
            }, {
                date: "December 2023",
                title: "SwiftUI Dock",
                src: "dock-drag.mp4",
                bump: !0
            }, {
                date: "September 2023",
                title: "SwiftUI Video Scrubber",
                src: "seek.mp4",
                bump: !0
            }, {
                date: "September 2023",
                title: "SwiftUI Bezel Dock",
                src: "bezels2.mp4",
                bump: !0
            }, {
                date: "July 2023",
                title: "Invisible Details of Interaction Design",
                description: "What makes great interactions feel right?",
                slug: "interaction-design",
                src: {
                    src: "/_next/static/media/og-interaction-design2.af87778f.png",
                    height: 630,
                    width: 1200,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAMFBMVEXo6ep5dHXx8fLZ2dnk4uHIycqGgYLR0tJja3BSWlzhy71IQUi4t7lhW1ypqajKoJmyhzevAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVR4nAXBhwEAIAzDMKeDsvn/WyQs8KgE19Bs6+Kt6+lsDDIq7QMLEAClZm0LcwAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 4
                },
                component: (0, n.jsx)(function() {
                    return (0, n.jsxs)(l.k, {
                        direction: "column",
                        gap: 1,
                        css: {
                            sup: {
                                display: "inline-block",
                                lineHeight: "14px",
                                x: -1
                            }
                        },
                        children: [(0, n.jsxs)(k, {
                            children: ["Design can feel like there's no science to it — only feel and intuition. Even researchers have trouble grounding interaction design practices in science, inherently treating them as a mysterious black box. ", (0, n.jsx)("sup", {
                                children: "1"
                            }), " While from my own experience that's partly true, I have been trying to deconstruct and dig out the ", (0, n.jsx)("i", {
                                children: "why"
                            }), " behind great displays of interaction design."]
                        }), (0, n.jsx)(k, {
                            children: 'Searching the Internet for depth on interaction design yields a plethora of recycled content obsessing over user personas, storyboards, and Venn diagrams labeled with "UI" and "UX". Besides a few exceptional talks, actual substance and insight reveal themselves to those willing to fanatically dig for them. Either through studying obscure, long-winded research papers or by maniacally replaying hundreds of slow motion screen recordings.'
                        }), (0, n.jsx)(k, {
                            children: 'Sitting down and just thinking hard does not magically produce valuable discoveries either. The essence of the word "interaction" implies a relationship between a human and an environment. In my experience, great revelations surface from making something — filling your headspace with a problem — and then going for a synthesising daydreaming walk to stir the pot.'
                        }), (0, n.jsx)(k, {
                            children: "This essay is not a tutorial nor a collection of guidelines. But rather an observation on the invisible details of a few interactions that I use often but rarely think about. Besides recreating interfaces, I found this exercise in reflection to be another great way to build a stronger design intuition and vocabulary."
                        }), (0, n.jsx)(tM, {}), (0, n.jsx)(tV, {}), (0, n.jsx)(tR, {}), (0, n.jsx)(tz, {}), (0, n.jsx)(tU, {}), (0, n.jsx)(tI, {}), (0, n.jsx)(tS, {}), (0, n.jsx)(tT, {}), (0, n.jsx)(tH, {}), (0, n.jsx)(tQ, {}), (0, n.jsx)(tL, {}), (0, n.jsx)(tD, {}), (0, n.jsx)(tO, {}), (0, n.jsx)(tF, {})]
                    })
                }, {}),
                writing: !0,
                bump: !0,
                slowMotion: !1
            }, {
                date: "June 2023",
                title: "SwiftUI Radial Menu",
                src: "ios-radial-menu.mp4",
                bump: !0
            }, {
                date: "June 2023",
                title: "SwiftUI Screenshot Capture",
                src: "screenshot.mp4",
                bump: !0
            }, {
                date: "Designed by Jason Yuan",
                title: "SwiftUI MercuryOS",
                src: "mercury.mp4",
                bump: !0
            }, {
                date: "May 2023",
                title: "Graph Slider",
                src: "graph-slider-2.mp4",
                component: (0, n.jsx)(tZ, {}),
                sibling: (0, n.jsx)(tZ.Sibling, {}),
                wrap: 320,
                slowMotion: !1
            }, {
                date: "April 2023",
                title: "Crafting the Next.js Website",
                slug: "nextjs",
                src: {
                    src: "/_next/static/media/og-nextjs.78700559.png",
                    height: 630,
                    width: 1200,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAElBMVEUSevRJmfcvi/U2j/Zgpvhysfjvj6DhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHElEQVR4nGNgZGJkYmZkYmBgYWVlZGFmYmbAAAAEDQAoirkvSQAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 4
                },
                component: (0, n.jsx)(function() {
                    return (0, n.jsxs)(l.k, {
                        direction: "column",
                        gap: 1,
                        children: [(0, n.jsxs)(k, {
                            children: ["In February 2023, together with ", (0, n.jsx)(B, {
                                href: "https://twitter.com/glennui",
                                children: "@glennui"
                            }), " and", " ", (0, n.jsx)(B, {
                                href: "https://twitter.com/almonk",
                                children: "@almonk"
                            }), " we started building a new website for", " ", (0, n.jsx)(B, {
                                href: "https://nextjs.org",
                                children: "Next.js"
                            }), ". On the surface, the design made by Glenn seemed really simple, but with plenty of opportunity for delight and subtle animations. Personally, I found the design to be a breath of fresh air: no swanky mesh gradients, obnoxious artifical shines, or overuse of gimmicks. A pure masterclass in subtle craft where the intricate details almost fade into the background."]
                        }), (0, n.jsx)(k, {
                            children: 'This project also started at a time when I was taking a pause from side projects. Coincidentally, whilst working on this I felt my creative cup being filled by my dayjob, not side projects. The creative freedom and the degree of challenge combined with a deadline far beyond the horizon was the perfect "creative workcation", if you will.'
                        }), (0, n.jsx)(k, {
                            children: "Another thing that we enjoyed as a team was breaking the design up into chunks. Not very systematically from the get-go, but mostly intuitively as we went along. We had big ambitions for the page, but instead of dragging an already massive pull request out, we shipped the static version as soon as it was an improvement over what was already in production. Animations and adjustments to other surfaces could follow up later."
                        }), (0, n.jsx)(k, {
                            children: "In no particular order, we'll break down a couple of implementation details, some of which may be less trivial than others, but all of them were stimulating to build."
                        }), (0, n.jsx)(j, {
                            children: "Grid Lines"
                        }), (0, n.jsx)(k, {
                            children: "One of the first details you'll notice on the hero are container grid lines. They are absolutely positioned pseudo elements and are flexible based on the inner content and different screen sizes."
                        }), (0, n.jsx)(M, {
                            src: (0, C.jj)("next3.mp4"),
                            alt: "Next.js website grid lines being drawn in"
                        }), (0, n.jsxs)(k, {
                            children: ["I borrowed a technique from ", (0, n.jsx)(B, {
                                href: "https://stripe.com",
                                children: "Stripe"
                            }), " for these. By using a repeating linear gradient to create a dotted line we can control the dots more precisely compared to a dotted ", (0, n.jsx)(E, {
                                children: "border"
                            }), " ", "property. We can also fade out the edges on the same element with a mask."]
                        }), (0, n.jsx)(eI, {
                            render: '\n<div class="gridLine"></div>\n      ',
                            language: "css",
                            children: "\n.gridLine {\n  --background: #FFFFFF;\n  --color: rgba(0, 0, 0, 0.5);\n  --height: 1px;\n  --width: 5px;\n  --fade-stop: 90%;\n  /* Bleed in or out from the container */\n  --offset: -100px;\n\n  position: absolute;\n  width: calc(100% + var(--offset));\n  height: var(--height);\n  left: calc(var(--offset) / 2 * -1);\n  \n  background: linear-gradient(\n    to right,\n    var(--color),\n    var(--color) 50%,\n    transparent 0,\n    transparent\n  );\n  background-size: var(--width) var(--height);\n\n  /* Fade out the edges */\n  mask-composite: exclude;\n  -webkit-mask: \n    linear-gradient(\n      to left,\n      var(--background) var(--fade-stop),\n      transparent\n    ),\n    linear-gradient(\n      to right,\n      var(--background) var(--fade-stop),\n      transparent\n    ),\n    linear-gradient(black, black);\n}\n        "
                        }), (0, n.jsx)(j, {
                            children: "Blinking Switchboard"
                        }), (0, n.jsx)(k, {
                            children: 'The grid of cards features a switchboard animation. On hover, the lights spell out "NEXT":'
                        }), (0, n.jsx)(M, {
                            src: (0, C.jj)("nextjs-switchboard.mp4"),
                            alt: "Closeup of blue blinking lights randomly animating on a switchboard"
                        }), (0, n.jsx)(k, {
                            children: "Initially, this was a vector illustration, but the rendering wasn't consistent across browsers so I built it in code:"
                        }), (0, n.jsx)(eS, {
                            dark: !0,
                            collapse: !0,
                            children: "\n() => {\n  const rows = 5;\n  const columns = 18;\n  const transitionDuration = 250;\n  // Cherry-pick a few lights to animate\n  const indices = [7, 15, 19, 29, 26, 34, 46, 55, 60, 67, 70, 74, 83];\n  // Randomly animate between three states\n  const states = ['off', 'medium', 'high'];\n\n  const ref = React.useRef()\n\n  React.useEffect(() => {\n    const timeoutIds = [];\n\n    const interval = setInterval(() => {\n      indices.forEach((index) => {\n        const light = ref.current.querySelector(`[data-index=\"${index}\"]`);\n\n        if (!light) {\n          return;\n        }\n\n        // Pick a random next state\n        const nextState = states[Math.floor(Math.random() * states.length)];\n        const currentState = light.dataset.state;\n        \n        const pulse = Math.random() > 0.2 && (\n          // Make sure we only pulsate going from \"off\" → \"medium\" → \"high\"\n          (currentState === 'off' && nextState === 'high') ||\n          (currentState === 'off' && nextState === 'medium') ||\n          (currentState === 'medium' && nextState === 'high')\n        );\n\n        if (pulse) {\n          // Add an arbitrary delay between 100-500ms\n          const delay = getRandomNumber(100, 500);\n\n          timeoutIds.push(\n            setTimeout(() => {\n              light.style.transform = 'scale(2)';\n            }, delay),\n          );\n          \n          timeoutIds.push(\n            setTimeout(() => {\n              light.style.transform = 'scale(1)';\n            }, transitionDuration + delay),\n          );\n        }\n\n        // After a pulse, don't transition from \"high\" → \"medium\"\n        if (currentState === 'high' && nextState === 'medium' && pulse) {\n          light.dataset.state = 'off';\n        } else {\n          light.dataset.state = nextState;\n        }\n      });\n    }, 1000);\n\n    return () => {\n      clearInterval(interval);\n      timeoutIds.forEach(clearTimeout);\n    };\n  }, []);\n\n  return (\n    <div\n      ref={ref}\n      className=\"switchboard\"\n      style={{\n        display: 'grid',\n        gap: `${columns}px`,\n        gridTemplateColumns: `repeat(${columns}, 1fr)`,\n      }}\n    >\n    {Array.from({ length: columns * rows }).map((_, i) => {\n      return (\n        <div \n          key={i}\n          className=\"light\"\n          data-state=\"off\"\n          data-index={i}\n          style={{\n            '--transition-duration': `${transitionDuration}ms`,\n          }}\n        />\n      );\n    })}\n  </div>\n  )\n}\n        "
                        }), (0, n.jsxs)(k, {
                            children: ["The light glow is a CSS shadow. However, the only properties being animated are ", (0, n.jsx)(E, {
                                children: "opacity"
                            }), " and", " ", (0, n.jsx)(E, {
                                children: "transform"
                            }), ". Animating ", (0, n.jsx)(E, {
                                children: "box-shadow"
                            }), " would not be ideal since it would trigger a browser re-paint on every frame of the animation. Likely not to be a problem on modern computers, but older, less powerful devices, like smartphones, may drop frames and make the motion look sluggish."]
                        }), (0, n.jsx)(k, {
                            children: "Instead, we toggle the opacity of pseudo elements with a shadow:"
                        }), (0, n.jsx)(eI, {
                            language: "css",
                            children: "\n.switchboard.light {\n  width: 1px;\n  height: 1px;\n  border-radius: 9999px;\n  position: relative;\n  transition: transform var(--transition-duration) ease;\n\n  &:after,\n  &:before {\n    content: '';\n    position: absolute;\n    inset: 0;\n    opacity: 0;\n    width: inherit;\n    height: inherit;\n    border-radius: inherit;\n    transition: opacity var(--transition-duration) ease;\n  }\n\n  &:before {\n    /* Medium */\n    background: #3291FF;\n    box-shadow: 0px 0px 2px 1px rgba(50, 145, 255, 0.25);\n  }\n\n  &:after {\n    /* High */\n    background: #FFFFFF;\n    box-shadow: \n      0px 0px 1px 1px rgba(50, 145, 255, 0.8),\n      0px 0px 2px 1px rgba(50, 145, 255, 0.25);\n  }\n\n  &[data-state='off'] {\n    background: #707070;\n  }\n\n  &[data-state='medium']:before {\n    opacity: 1;\n  }\n\n  &[data-state='high']:after {\n    opacity: 1;\n  }\n}\n        "
                        }), (0, n.jsx)(k, {
                            children: 'The hover effect is basically the same idea: an array of cherry-picked indices to spell out "NEXT" and then on hover the lights are replaced sequentially.'
                        }), (0, n.jsx)(j, {
                            children: "Focus States"
                        }), (0, n.jsx)(M, {
                            src: "/static/writing/focus.mp4",
                            alt: "Three interactive elements display a blue focus ring that adheres to the radius"
                        }), (0, n.jsx)(k, {
                            children: "Consistent focus styles are rare to come across on the Web. Even the best of the best sometimes miss here. And I'm not just talking about the lack of focus states. Pick any website and try to tab through it. You'll find focus states in different color and shapes. Most of them would likely show you the default native one, matching your OS theme color. And a few components might implement a custom focus state."
                        }), (0, n.jsx)(k, {
                            children: "The Discord web app is one of the best examples of consistent focus states. They always have a custom blue color, matching the radius of the trigger element, perfectly offset from the content with enough padding. Even elements that don't have a background color, like links, will have a radius when focused. As a bonus, focus rings aren't clipped when overflowing a container."
                        }), (0, n.jsx)(k, {
                            children: "Admittely, for a single page it's not that difficult to consistently style focus states. The complexity comes from having to cover a large surface area with multiple pages and components being worked on and shared by different teams. However, there are a few curious details here for nicer focus rings. For example, I prefer to create focus rings with a shadow:"
                        }), (0, n.jsx)(eI, {
                            language: "css",
                            children: "\n\n&:focus-visible {\n  /* Don't animate the shadow, if present */\n  transition: none;\n  box-shadow: 0 0 0 2px var(--app-background), 0 0 0 4px var(--focus-color);\n}\n      "
                        }), (0, n.jsx)(k, {
                            children: "The first shadow would create padding around the element, and the second would then offset and display a 2px outline. This does assume that the element always appears on top of app background color, but I've found this to be barely noticeable even if that's not the case."
                        }), (0, n.jsxs)(k, {
                            children: ["We could technically do this with ", (0, n.jsx)(E, {
                                children: "outline"
                            }), " and ", (0, n.jsx)(E, {
                                children: "outline-offset"
                            }), " but in Safari the outline would not adhere radius of the element.", " ", (0, n.jsx)(B, {
                                href: "https://developer.apple.com/documentation/safari-release-notes/safari-16_4-release-notes",
                                children: "Safari 16.4"
                            }), " ", "does now have support for it, but since the updates are tied to the macOS version, it may still be early to rely on it."]
                        }), (0, n.jsx)(k, {
                            children: "Another neat trick is to set a slight radius, padding, and negative margin to offset the padding, for focusable elements like links. It makes the focus state a bit more pleasing even if the radius won't display until focused."
                        }), (0, n.jsx)(k, {
                            children: "On the right is an example of this treatment being applied:"
                        }), (0, n.jsxs)(l.k, {
                            gap: 4,
                            align: "center",
                            justify: "center",
                            css: {
                                bc: "#FFF",
                                height: 120,
                                br: 8,
                                border: "1px solid $gray4",
                                mt: 16,
                                mb: -16,
                                ".dark &": {
                                    bc: "$gray2"
                                }
                            },
                            children: [(0, n.jsx)(A.x, {
                                css: {
                                    boxShadow: "0 0 0 2px $colors$gray1, 0 0 0 4px $colors$blue9"
                                },
                                children: "Features"
                            }), (0, n.jsx)(A.x, {
                                css: {
                                    boxShadow: "0 0 0 2px $colors$gray1, 0 0 0 4px $colors$blue9",
                                    br: 2,
                                    px: 2,
                                    ml: -2
                                },
                                children: "Features"
                            })]
                        }), (0, n.jsx)(eI, {
                            language: "css",
                            children: "\n.link {\n  border-radius: 2px;\n  padding-left: 2px;\n  margin-left: -2px;\n}\n        "
                        }), (0, n.jsx)(j, {
                            children: "Serif Quote Marks"
                        }), (0, n.jsxs)(k, {
                            children: ["I remember first seeing this on the ", (0, n.jsx)(B, {
                                href: "https://www.radix-ui.com/",
                                children: "Radix UI website"
                            }), ". Instead of using Inter's quote marks, we render them using Georgia as the font family for that little bit of finesse."]
                        }), (0, n.jsxs)(k, {
                            children: ["To offset the quote mark from the first line and make sure each text row is vertically aligned,", " ", (0, n.jsx)(E, {
                                children: "text-indent: -0.4em"
                            }), " was also applied thanks to ", (0, n.jsx)(B, {
                                href: "https://twitter.com/shuding_",
                                children: "Shu"
                            }), "."]
                        }), (0, n.jsx)(R, {
                            src: tP,
                            width: "1084",
                            height: "463",
                            alt: "Screenshot of a quote highlighting a serif quote mark"
                        }), (0, n.jsx)(j, {
                            children: "Explicit Accessibility Labelling"
                        }), (0, n.jsx)(k, {
                            children: "It's obvious enough to include alternative text for images and videos but sometimes we might build illustrations with HTML and CSS. Most of the time screen reader output is not ideal: the user has to go through multiple elements and still might not get the full gist of what's actually being displayed on the screen:"
                        }), (0, n.jsx)(M, {
                            src: (0, C.jj)("next-sr-bad.mp4"),
                            alt: "Traversing through multiple elements with VoiceOver announcing each one separately"
                        }), (0, n.jsxs)(k, {
                            children: ["Instead, we can set ", (0, n.jsx)(E, {
                                children: "aria-hidden"
                            }), " on the inner HTML, and write a custom ", (0, n.jsx)(E, {
                                children: "aria-label"
                            }), " for the whole group. This way the user only has to navigate to a single element, and gets a more descriptive idea of the element itself. Thanks to ", (0, n.jsx)(B, {
                                href: "https://twitter.com/lucidiguana",
                                children: "Adrian"
                            }), " for catching this!"]
                        }), (0, n.jsx)(R, {
                            src: tY,
                            width: "1596",
                            height: "1550",
                            alt: "Traversing onto a single element with VoiceOver that announces the illustration all at once with a custom accessibility label"
                        }), (0, n.jsx)(j, {
                            children: "Styling Data Attributes"
                        }), (0, n.jsx)(k, {
                            children: "A tiny code habit I picked up from this project was to make more use of data attributes for styling. For example, traditionally I would map variants to class names like so:"
                        }), (0, n.jsx)(eI, {
                            language: "tsx",
                            children: "\nfunction Card({ children, variant }) {\n  return (\n    <Link\n      className={clsx(styles.card, {\n        // So much duplication!\n        [styles.minimal]: variant === 'minimal',\n        [styles.callout]: variant === 'callout',\n        [styles.next]: variant === 'next',\n      })}\n    >\n      {children}\n    </Link>\n  );\n}\n        "
                        }), (0, n.jsxs)(k, {
                            children: ["Instead, why not just pass the variant to a custom ", (0, n.jsx)(E, {
                                children: "data-variant"
                            }), " attribute:"]
                        }), (0, n.jsx)(eI, {
                            language: "tsx",
                            children: "\nfunction Card({ children, variant }) {\n  return (\n    <Link\n      className={styles.card}\n      data-variant={variant}\n    >\n      {children}\n    </Link>\n  );\n}\n        "
                        }), (0, n.jsx)(k, {
                            children: "And then style it with CSS:"
                        }), (0, n.jsx)(eI, {
                            language: "css",
                            children: '\n.card[data-variant="minimal"] {}\n.card[data-variant="callout"] {}\n        '
                        }), (0, n.jsx)(j, {
                            children: "Fluid Typography"
                        }), (0, n.jsx)(k, {
                            children: "On the hero, the title and subtitle adjust much more fluidly compared to fixed font size values at specific breakpoints."
                        }), (0, n.jsx)(M, {
                            alt: "The browser is being resized horizontally, showcasing the title and subtitle fluidly becoming smaller",
                            src: (0, C.jj)("nextjs-fluid-typography-2.mp4")
                        }), (0, n.jsxs)(k, {
                            children: ["I used to always adjust typography at manual breakpoints. Until now, I never tried using the CSS", " ", (0, n.jsx)(E, {
                                children: "clamp"
                            }), " function. It helps to responsively adjust any property between a minimum and maximum value:"]
                        }), (0, n.jsx)(eI, {
                            language: "css",
                            children: "\nh1 {\n  font-size: clamp(48px, 5vw, 76px);\n}\n        "
                        }), (0, n.jsx)(j, {
                            children: "Gradient Tracing"
                        }), (0, n.jsxs)(k, {
                            children: ["Another animation on the website is a bunch of connecting lines forming into a CPU in the center. I was delighted to see this come together so well thanks to help from", " ", (0, n.jsx)(B, {
                                href: "https://twitter.com/pacocoursey",
                                children: "Paco"
                            }), " and", " ", (0, n.jsx)(B, {
                                href: "https://twitter.com/destroytoday",
                                children: "Jonnie"
                            }), ". It's not exactly the most straightforward thing to figure out, at least for me. I tried using", " ", (0, n.jsx)(B, {
                                href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Motion_Path",
                                children: "CSS Motion Path"
                            }), " with promising results but it ", (0, n.jsx)(B, {
                                href: "https://codepen.io/rauno/pen/ExdVzaO",
                                children: "didn't quite work"
                            }), " when the path was curved."]
                        }), (0, n.jsx)(M, {
                            src: (0, C.jj)("nextjs-website-2.mp4"),
                            alt: "A bunch of connecting lines that form into the CPU, with the text Powered By on top of the the CPU. Gradient lines are animating along the drawn lines, dissolving into the CPU in the center."
                        }), (0, n.jsxs)(k, {
                            children: ["I landed on animating the ", (0, n.jsx)(E, {
                                children: "x1"
                            }), ", ", (0, n.jsx)(E, {
                                children: "x2"
                            }), " and ", (0, n.jsx)(E, {
                                children: "y1"
                            }), ", ", (0, n.jsx)(E, {
                                children: "y2"
                            }), " values on a", " ", (0, n.jsx)(B, {
                                href: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient",
                                children: "<linearGradient />"
                            }), " ", "element. The gradient is then used as a stroke on a ", (0, n.jsx)(E, {
                                children: "<path />"
                            }), " element."]
                        }), (0, n.jsx)(k, {
                            children: "Let's try breaking down an example. There are two duplicate paths on top of each other:"
                        }), (0, n.jsx)(eI, {
                            render: !0,
                            language: "tsx",
                            children: '\n<svg width="317" height="80" viewBox="0 0 317 80" fill="none">  \n  <path\n    d="M316 0V10C316 12.2091 314.209 14 312 14H5C2.79086 14 1 15.7909 1 18V80"\n    stroke="black"\n    stroke-opacity="0.2"\n  />\n  <path\n    d="M316 0V10C316 12.2091 314.209 14 312 14H5C2.79086 14 1 15.7909 1 18V80"\n    stroke="url(#pulse)"\n    stroke-linecap="round"\n    stroke-width="2"\n  />\n  <defs>\n    <linearGradient\n      id="pulse"\n      gradientUnits="userSpaceOnUse"\n      x1="0"\n      x2="0"\n      y1="30"\n      y2="60"\n    >\n      <stop stop-color="#2EB9DF" stop-opacity="0" />\n      <stop stop-color="#2EB9DF" />\n      <stop offset="1" stop-color="#9E00FF" stop-opacity="0" />\n    </linearGradient>\n  </defs>\n</svg>\n    '
                        }), (0, n.jsx)(k, {
                            children: "The gradient has a fade into the primary color near the very top to create a partial gradient on the whole path. Followed by a fully opaque gradient stop, and then fade out again to the bottom. This is what the gradient definition looks like in Figma:"
                        }), (0, n.jsx)(R, {
                            alt: "Image showing three gradient stops",
                            src: tG,
                            width: "1238",
                            height: "702"
                        }), (0, n.jsxs)(k, {
                            children: ["We can set the ", (0, n.jsx)(E, {
                                children: "y1"
                            }), " value to the height of the ", (0, n.jsx)(E, {
                                children: "<svg>"
                            }), " node and move the starting point to the bottom edge. And we want to make the ", (0, n.jsx)(E, {
                                children: "y2"
                            }), " twice the height so the tail of the gradient is offset. This way the gradient will gracefully reveal itself once animated."]
                        }), (0, n.jsx)(eI, {
                            render: '\n        <svg width="317" height="80" viewBox="0 0 317 80" fill="none"> \n  <g>\n    <path\n      d="M316 0V10C316 12.2091 314.209 14 312 14H5C2.79086 14 1 15.7909 1 18V80"\n      stroke="black"\n      stroke-opacity="0.2"\n    />\n    <rect\n      x="0"\n      y="0"\n      width="317"\n      height="80"\n      fill="url(#pulse-2)"\n    />\n  </g>\n  <defs>\n    <linearGradient\n      id="pulse-2"\n      gradientUnits="userSpaceOnUse"\n      x1="0"\n      x2="0"\n      y1="80"\n      y2="160"\n    >\n      <stop stop-color="#2EB9DF" stop-opacity="0" />\n      <stop stop-color="#2EB9DF" />\n      <stop offset="1" stop-color="#9E00FF" stop-opacity="0" />\n    </linearGradient>\n  </defs>\n</svg>\n        ',
                            language: "tsx",
                            children: '\n\n<linearGradient\n  id="pulse"\n  gradientUnits="userSpaceOnUse"\n  x1="0"\n  x2="0"\n  // highlight-next-line\n  y1={height}\n  // highlight-next-line\n  y2={height * 2}\n>\n  {...}\n</linearGradient>'
                        }), (0, n.jsxs)(k, {
                            children: ["You can't see anything, but the head of the gradient is now exactly at the starting point. To move it upwards by 40px, we can just adjust the ", (0, n.jsx)(E, {
                                children: "y1"
                            }), " and ", (0, n.jsx)(E, {
                                children: "y2"
                            }), " values:"]
                        }), (0, n.jsx)(eI, {
                            file: "index.tsx",
                            render: '\n        <svg width="317" height="80" viewBox="0 0 317 80" fill="none">  \n  <path\n    d="M316 0V10C316 12.2091 314.209 14 312 14H5C2.79086 14 1 15.7909 1 18V80"\n    stroke="black"\n    stroke-opacity="0.2"\n  />\n  <path  \n    d="M316 0V10C316 12.2091 314.209 14 312 14H5C2.79086 14 1 15.7909 1 18V80"    \n    stroke="url(#pulse-3)"    \n    stroke-linecap="round"    \n    stroke-width="2"    \n  />\n  <defs>\n    <linearGradient\n      id="pulse-3"\n      gradientUnits="userSpaceOnUse"\n      x1="0"\n      x2="0"\n      y1="40"\n      y2="80"\n    >\n      <stop stop-color="#2EB9DF" stop-opacity="0" />\n      <stop stop-color="#2EB9DF" />\n      <stop offset="1" stop-color="#9E00FF" stop-opacity="0" />\n    </linearGradient>\n  </defs>\n</svg>\n        ',
                            language: "tsx",
                            children: "\ny1={height - 40}\ny2={height * 2 - 80}"
                        }), (0, n.jsxs)(k, {
                            children: ["Next, I used React and ", (0, n.jsx)(E, {
                                children: "framer-motion"
                            }), " to animate the gradient coordinates. Any UI framework with a motion library that can interpolate between two values would work."]
                        }), (0, n.jsxs)(k, {
                            children: ["Feel free to play around with the ", (0, n.jsx)(E, {
                                children: "animate"
                            }), " values. This formula is not generic and different variations may need some fine-tuning by hand to nail the velocity and timing."]
                        }), (0, n.jsx)(eS, {
                            children: '\n() => {\n  const width = 317;\n  const height = 80;\n  const path = \n    "M316 0V10C316 12.2091 314.209 14 312 14H5C2.79086 14 1 15.7909 1 18V80";\n\n  return (\n    <svg \n      width={width} \n      height={height} \n      viewBox={`0 0 ${width} ${height}`} \n      fill="none"\n    >\n      <path\n        d={path}\n        stroke="black"\n        strokeOpacity="0.2"\n      />\n      <path\n        d={path}\n        stroke="url(#pulse-1)"\n        strokeLinecap="round"\n        strokeWidth="2"\n      />\n      <defs>\n        <motion.linearGradient\n          animate={{\n            x1: [0, width * 2],\n            x2: [0, width],\n            y1: [height, height / 2],\n            y2: [height * 2, height]\n          }}\n          transition={{\n            duration: 2,\n            repeat: Infinity\n          }}\n          id="pulse-1"\n          gradientUnits="userSpaceOnUse"\n        >\n          <stop stopColor="#2EB9DF" stopOpacity="0" />\n          <stop stopColor="#2EB9DF" />\n          <stop offset="1" stopColor="#9E00FF" stopOpacity="0" />\n        </motion.linearGradient>\n      </defs>\n    </svg>\n  )\n}\n      '
                        }), (0, n.jsx)(k, {
                            children: "To understand how the gradient is moving, here's a lil helpful visualization, courtesy of Paco:"
                        }), (0, n.jsx)(eS, {
                            collapse: !0,
                            children: '\n() => {\n  const width = 317;\n  const height = 80;\n  const path = \n    "M316 0V10C316 12.2091 314.209 14 312 14H5C2.79086 14 1 15.7909 1 18V80";\n\n  return (\n    <svg \n      width={width} \n      height={height} \n      viewBox={`0 0 ${width} ${height}`} \n      fill="none"\n    >\n      <path\n        d={path}\n        stroke="black"\n        strokeOpacity="0.2"\n      />\n      <rect\n        d={path}\n        x={0}\n        y={0}\n        width={width}\n        height={height}\n        fill="url(#pulse-4)"\n      />\n      <path\n        d={path}\n        stroke="url(#pulse-4)"\n        strokeLinecap="round"\n        strokeWidth="2"\n      />\n      <defs>\n        <motion.linearGradient\n          animate={{\n            x1: [0, width * 2],\n            x2: [0, width],\n            y1: [height, height / 2],\n            y2: [height * 2, height]\n          }}\n          transition={{\n            duration: 2,\n            repeat: Infinity\n          }}\n          id="pulse-4"\n          gradientUnits="userSpaceOnUse"\n        >\n          <stop stopColor="#2EB9DF" stopOpacity="0" />\n          <stop stopColor="#2EB9DF" />\n          <stop offset="1" stopColor="#9E00FF" stopOpacity="0" />\n        </motion.linearGradient>\n      </defs>\n    </svg>\n  )\n}\n      '
                        }), (0, n.jsx)(j, {
                            children: "Card Illustrations"
                        }), (0, n.jsx)(k, {
                            children: "Lastly, many of the ideas from above (masking, gradient tracing, random delays) are used to also animate illustrations built with CSS:"
                        }), (0, n.jsx)(M, {
                            src: (0, C.jj)("nextjs-streaming.mp4")
                        }), (0, n.jsx)(k, {
                            children: "I did briefly have some trouble making the lines fade out smoothly. A simple opacity fade was not ideal since the line would then feel like it came to a full stop all at once. In the end, I masked the SVG elements with a CSS gradient to make them smoothly fade out into the edges of the window."
                        }), (0, n.jsx)(M, {
                            src: (0, C.jj)("nextjs-optimizations-4.mp4")
                        }), (0, n.jsx)(k, {
                            children: "This one was fairly straightforward to make. Windows are created with CSS and the dots on each scatter then randomly fade in with JavaScript. On hover, similarly to the switchboard, we randomly toggle the opacity of each dot."
                        }), (0, n.jsx)(j, {
                            children: "Acknowledgments"
                        }), (0, n.jsxs)(k, {
                            children: ["Kudos to ", (0, n.jsx)(B, {
                                href: "https://twitter.com/glennui",
                                children: "Glenn"
                            }), ",", " ", (0, n.jsx)(B, {
                                href: "https://twitter.com/emilkowalski_",
                                children: "Emil"
                            }), ", ", (0, n.jsx)(B, {
                                href: "https://twitter.com/almonk",
                                children: "Al"
                            }), ",", " ", (0, n.jsx)(B, {
                                href: "https://twitter.com/pacocoursey",
                                children: "Paco"
                            }), ",", " ", (0, n.jsx)(B, {
                                href: "https://twitter.com/destroytoday",
                                children: "Jonnie"
                            }), " for all their help and direction!"]
                        }), (0, n.jsx)(k, {
                            children: "No artificial intelligence was used in the making of this project."
                        })]
                    })
                }, {}),
                writing: !0,
                slowMotion: !1
            }, {
                date: "March 2023",
                title: "Exclusion Tabs",
                src: "exclusion-tabs-dark.mp4",
                component: (0, n.jsx)(function() {
                    let {
                        speed: e
                    } = iV(), [t, i] = a.useState(!1), [s, r] = a.useState(2), o = a.useRef(), l = {
                        stiffness: 150 / e,
                        damping: 20
                    }, c = (0, tJ.c)(0), d = (0, x.q)(95.96, l);

                    function h() {
                        let e = o.current,
                            t = Array.from(document.querySelectorAll("[data-tab-button]")).filter(e => e.getBoundingClientRect().width > 0).map((e, t) => {
                                let {
                                    width: i,
                                    x: n
                                } = e.getBoundingClientRect(), a = 0;
                                return 3 === t && (a = 50), {
                                    width: i,
                                    x: n + a
                                }
                            }),
                            {
                                x: i
                            } = e.getBoundingClientRect(),
                            n = t.reduce((e, t) => Math.abs(t.x - i) < Math.abs(e.x - i) ? t : e);
                        return {
                            closestDistance: n,
                            distanceButtons: t
                        }
                    }

                    function g(e) {
                        let t = document.querySelector('[data-index="'.concat(e, '"]')),
                            {
                                width: i
                            } = t.getBoundingClientRect();
                        d.set(i)
                    }

                    function u() {
                        console.log("cancel"), (0, C.pX)(), i(!1);
                        let {
                            closestDistance: e,
                            distanceButtons: t
                        } = h(), n = t.indexOf(e);
                        c.set(void 0), r(n)
                    }
                    return (0, tj.z)("mouseup", u), (0, tj.z)("touchend", u), (0, n.jsx)(A.x, {
                        as: m.E.div,
                        css: {
                            size: "100%",
                            center: !0,
                            cursor: "pointer",
                            touchAction: "none",
                            "@mobile": {
                                "button:nth-of-type(4), button:nth-of-type(5)": {
                                    display: "none"
                                }
                            }
                        },
                        onPan: (e, t) => {
                            (0, C.dg)(), i(!0), c.set(t.offset.x)
                        },
                        onPointerMove: () => {
                            if (t) {
                                let {
                                    closestDistance: e,
                                    distanceButtons: t
                                } = h(), i = t.find(t => t === e);
                                if (i) {
                                    let {
                                        width: e
                                    } = i;
                                    d.set(e)
                                }
                            }
                        },
                        onKeyDown: e => {
                            "ArrowLeft" === e.key && r(e => 0 === e ? 0 : (g(e - 1), e - 1)), "ArrowRight" === e.key && r(e => e === tq.length - 1 ? tq.length - 1 : (g(e + 1), e + 1))
                        },
                        children: tq.map((e, t) => (0, n.jsxs)(A.x, {
                            as: "button",
                            "data-tab-button": "",
                            css: {
                                height: 32,
                                br: 9999,
                                padding: "0 12px",
                                fontFamily: "$body",
                                fontSize: 14,
                                position: "relative",
                                cursor: "pointer",
                                whiteSpace: "nowrap",
                                transition: "color 150ms ease",
                                color: "$gray12",
                                focus: !0,
                                "-webkit-tap-highlight-color": "transparent",
                                '&:not([data-active="true"]):hover': {
                                    color: "$gray11"
                                }
                            },
                            "data-index": t,
                            "data-active": t === s,
                            onClick: e => {
                                r(t);
                                let {
                                    width: i
                                } = e.currentTarget.getBoundingClientRect();
                                d.set(i)
                            },
                            children: [e, t === s && (0, n.jsx)(A.x, {
                                ref: o,
                                as: m.E.div,
                                layoutId: "active",
                                css: {
                                    position: "absolute",
                                    bc: "white",
                                    height: 32,
                                    br: 9999,
                                    top: 0,
                                    left: 0,
                                    mixBlendMode: "exclusion",
                                    zIndex: 3
                                },
                                transition: {
                                    type: "spring",
                                    ...l
                                },
                                style: {
                                    x: c,
                                    width: d
                                }
                            })]
                        }, e))
                    })
                }, {}),
                wrap: !0
            }, {
                date: "January 2023",
                title: "Adaptive Precision",
                src: "adaptive-precision-5.mp4",
                component: (0, n.jsx)(function() {
                    let {
                        resolvedTheme: e
                    } = (0, tt.F)(), {
                        speed: t
                    } = iV(), i = a.useRef(0), [s, r] = a.useState(!1), [o, c] = a.useState(null), [h, g] = a.useState(null), [u, p] = a.useState(!1), [f, x] = a.useState(null), [C, w] = a.useState(null), [b, y] = a.useState(!1), v = C && "number" == typeof C.start, j = C && C.height < 0, k = Math.abs((null == C ? void 0 : C.height) ? C.height : 0), E = j ? 3 : -3, B = {
                        type: "spring",
                        stiffness: 400 / t,
                        damping: 40
                    };

                    function M() {
                        return document.querySelector('[data-index="'.concat(f, '"]'))
                    }
                    return a.useEffect(() => {
                        h || w(null)
                    }, [h]), (0, tj.z)("mousemove", e => {
                        s || c({
                            x: e.clientX,
                            y: e.clientY
                        })
                    }, [s]), (0, n.jsxs)(A.x, {
                        as: m.E.div,
                        css: {
                            center: !0,
                            size: "100%",
                            cursor: "none"
                        },
                        onMouseEnter: () => {
                            r(!0)
                        },
                        onMouseMove: e => {
                            if (!h) {
                                c({
                                    x: e.clientX,
                                    y: e.clientY
                                });
                                return
                            }
                            if (v) {
                                let e = f - C.start,
                                    t = M();
                                w({
                                    ...C,
                                    endLabel: null == t ? void 0 : t.dataset.time,
                                    height: 15 * e
                                })
                            }
                        },
                        onMouseDown: () => {
                            if (!h || u) return;
                            let e = M();
                            document.body.classList.add("cursor-none"), y(!0), w({
                                width: null == h ? void 0 : h.width,
                                start: f,
                                startLabel: null == e ? void 0 : e.dataset.time,
                                y: o.y
                            })
                        },
                        onMouseLeave: () => {
                            r(!1)
                        },
                        onMouseUp: () => {
                            document.body.classList.remove("cursor-none"), y(!1), w(null), p(!0), setTimeout(() => {
                                p(!1)
                            }, 100)
                        },
                        children: [(0, n.jsx)(A.x, {
                            as: m.E.div,
                            css: {
                                br: "$round",
                                position: "fixed",
                                zIndex: 2,
                                pointerEvents: "none"
                            },
                            initial: !1,
                            animate: {
                                opacity: s ? 1 : 0,
                                left: null == o ? void 0 : o.x,
                                top: null == o ? void 0 : o.y,
                                width: h ? h.width : 32,
                                height: h ? 4 : 32,
                                background: b ? "var(--colors-gray9)" : "var(--colors-gray7)"
                            },
                            transition: B
                        }, e), (0, n.jsx)(tv.M, {
                            children: C && (0, n.jsx)(A.x, {
                                as: m.E.div,
                                css: {
                                    position: "fixed",
                                    background: "$blue9",
                                    br: 6,
                                    zIndex: 1,
                                    pointerEvents: "none",
                                    overflow: "hidden"
                                },
                                style: {
                                    width: null == C ? void 0 : C.width
                                },
                                animate: {
                                    top: (null == C ? void 0 : C.y) + E,
                                    ...j && {
                                        marginTop: -k + E
                                    },
                                    height: k
                                },
                                transition: B,
                                exit: {
                                    opacity: 0,
                                    transition: {
                                        duration: .1
                                    }
                                },
                                children: (0, n.jsxs)(l.k, {
                                    as: m.E.div,
                                    direction: "column",
                                    css: {
                                        "--offset": "8px",
                                        position: "absolute",
                                        left: "var(--offset)",
                                        top: "var(--offset)",
                                        gap: 4,
                                        transformOrigin: "var(--offset) var(--offset)",
                                        "> *": {
                                            color: "white"
                                        }
                                    },
                                    animate: {
                                        y: k > 15 ? 1 : -6.5,
                                        scale: k > 15 ? 1 : .8
                                    },
                                    transition: B,
                                    children: [(0, n.jsx)(d.x, {
                                        size: "13",
                                        lineHeight: "12",
                                        children: j ? (0, n.jsxs)(n.Fragment, {
                                            children: [null == C ? void 0 : C.endLabel, " - ", null == C ? void 0 : C.startLabel]
                                        }) : (0, n.jsxs)(n.Fragment, {
                                            children: [null == C ? void 0 : C.startLabel, " - ", null == C ? void 0 : C.endLabel]
                                        })
                                    }), (0, n.jsx)(d.x, {
                                        as: m.E.div,
                                        weight: "500",
                                        lineHeight: "16",
                                        animate: {
                                            opacity: k > 30 ? 1 : 0
                                        },
                                        transition: B,
                                        children: "New Event"
                                    })]
                                })
                            })
                        }), (0, n.jsx)(l.k, {
                            direction: "column",
                            css: {
                                width: "calc(100% - 400px)",
                                py: 64
                            },
                            onMouseMove: () => {
                                if (null !== f) {
                                    let e = document.querySelector('[data-index="'.concat(f, '"]'));
                                    if (!e) return;
                                    let {
                                        x: t,
                                        y: i,
                                        width: n
                                    } = e.getBoundingClientRect();
                                    g({
                                        width: n
                                    }), c({
                                        x: t,
                                        y: i - 2
                                    })
                                }
                            },
                            onMouseLeave: () => {
                                g(null)
                            },
                            children: (0, n.jsx)(tK.Provider, {
                                value: {
                                    setHoveredIndex: x,
                                    indexRef: i
                                },
                                children: t$.map((e, t) => (0, n.jsx)(t_, {
                                    time: e,
                                    isLast: t === t$.length - 1
                                }, e))
                            })
                        })]
                    })
                }, {}),
                wrap: 420,
                requiresPointer: !0
            }, {
                date: "January 2023",
                title: "Fractional Slider",
                src: "fractional-slider.mp4",
                component: (0, n.jsx)(function() {
                    let e = a.useRef(),
                        [t, i] = a.useState(0),
                        [s, r] = a.useState(!0),
                        o = -Math.round(t / 7.5),
                        l = a.useRef(0),
                        c = (0, t1.c)("/static/sounds/tick.mp3", {
                            playbackRate: (0, C.uZ)(.1 * Math.abs(o), 1, 2)
                        });

                    function d() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 300,
                            t = document.querySelector("[degrees-selected]");
                        null == t || t.style.setProperty("transition", "clip-path ".concat(e, "ms ease")), setTimeout(() => {
                            null == t || t.style.removeProperty("transition")
                        }, e)
                    }

                    function h(e, t) {
                        let i = document.querySelector("[degrees-selected]");
                        null == i || i.style.setProperty("clip-path", "inset(0 ".concat((0, C.px)(e), " 0 ").concat((0, C.px)(t), ")"))
                    }

                    function g(e) {
                        if (s && r(!1), (0, C.dg)(), e > 50 && d(100), e > 20 || e < -20) {
                            let n = function(e, t) {
                                let [i, n] = t;
                                if (e > n) {
                                    let t = e - n;
                                    return n + 2 * (t > 0 ? Math.sqrt(t) : -Math.sqrt(-t))
                                }
                                if (!(e < i)) return e;
                                {
                                    let t = e - i;
                                    return i + 2 * (t > 0 ? Math.sqrt(t) : -Math.sqrt(-t))
                                }
                            }(t + e, [-675, 675]);
                            i(n)
                        } else {
                            let n = (0, C.uZ)(t + e, -675, 675);
                            i(n)
                        }
                    }
                    return a.useEffect(() => (document.body.style["overscroll-behavior-x"] = "none", () => {
                        (0, C.pX)(), document.body.style["overscroll-behavior-x"] = ""
                    }), []), a.useEffect(() => {
                        o !== l.current && c(), l.current = o
                    }, [o]), a.useEffect(() => {
                        let e = 0;
                        90 === o ? e = -5 : -90 === o && (e = 8), t > 0 ? h(675, 675 - t - e) : t < 0 ? h(675 + t + e, 675) : 0 === t && h(676, 676)
                    }, [t, o]), (0, n.jsxs)(A.x, {
                        as: m.E.div,
                        css: {
                            size: "100%",
                            center: !0,
                            position: "relative",
                            cursor: "ew-resize",
                            overflow: "hidden",
                            transform: "translateZ(0)",
                            br: "inherit",
                            touchAction: "none"
                        },
                        onPan: (e, t) => {
                            g(t.delta.x + t.delta.y)
                        },
                        onWheel: e => {
                            g(e.deltaX + e.deltaY)
                        },
                        onDoubleClick: () => {
                            d(), i(0)
                        },
                        children: [(0, n.jsx)(ty, {
                            size: "12",
                            show: s,
                            children: "Scroll or drag"
                        }), (0, n.jsx)(A.x, {
                            ref: e
                        }), (0, n.jsx)(A.x, {
                            css: {
                                background: "linear-gradient(to left, transparent, $colors$gray2)",
                                width: 100,
                                height: "100%",
                                position: "absolute",
                                left: 0,
                                zIndex: 5
                            }
                        }), (0, n.jsx)(A.x, {
                            css: {
                                background: "linear-gradient(to right, transparent, $colors$gray2)",
                                width: 100,
                                height: "100%",
                                position: "absolute",
                                right: 0,
                                zIndex: 5
                            }
                        }), (0, n.jsxs)(t6.Provider, {
                            value: t,
                            children: [(0, n.jsx)(t2, {
                                role: "slider",
                                dir: "ltr",
                                "aria-label": "Volume",
                                "aria-orientation": "horizontal",
                                "aria-valuemin": -0,
                                "aria-valuemax": 90,
                                "aria-valuenow": o,
                                degrees: ""
                            }), (0, n.jsx)(t2, {
                                "aria-hidden": !0,
                                selected: !0,
                                "degrees-selected": "",
                                style: {
                                    position: "absolute",
                                    height: 40,
                                    top: "calc(50% - 32px)",
                                    willChange: "clip-path",
                                    transform: "translateZ(0)",
                                    clipPath: "inset(0 ".concat((0, C.px)(676), " 0 ").concat((0, C.px)(676), ")")
                                },
                                color: "gray12"
                            })]
                        }), (0, n.jsx)(A.x, {
                            css: {
                                size: 4,
                                background: "$blue9",
                                position: "absolute",
                                bottom: 86,
                                br: "$round"
                            }
                        })]
                    })
                }, {}),
                wrap: !0,
                slowMotion: !1,
                dark: !0
            }, {
                date: "January 2023",
                title: "Vanish Input",
                src: "vanish-input.mp4",
                component: (0, n.jsx)(function() {
                    let e = a.useRef(null),
                        t = a.useRef(null),
                        i = a.useRef([]),
                        [s, r] = a.useState(""),
                        [o, l] = a.useState(!1),
                        [c, d] = a.useState(!1),
                        [h, g] = a.useState(!0),
                        [u, p] = a.useState(!0),
                        [f, C] = a.useState(0),
                        w = a.useRef(null),
                        b = (0, x.q)(34, {
                            stiffness: 300,
                            damping: 40,
                            onComplete: () => {
                                d(!1)
                            }
                        }),
                        y = a.useRef(null);

                    function v() {
                        let e, n;
                        let a = t.current,
                            r = a.getContext("2d");
                        a.width = 800, a.height = 800, r.font = "32px X", r.clearRect(0, 0, 800, 800), r.fillStyle = "#FFF", r.fillText(s, 16, 40);
                        let o = r.getImageData(0, 0, 800, 800),
                            A = o.data,
                            l = [];
                        for (let t = 0; t < 800; t++) {
                            n = 4 * t * 800;
                            for (let i = 0; i < 800; i++) 0 !== A[e = n + 4 * i] && 0 !== A[e + 1] && 0 !== A[e + 2] && l.push({
                                x: i,
                                y: t,
                                color: [A[e], A[e + 1], A[e + 2], A[e + 3]]
                            })
                        }
                        i.current = l.map(e => {
                            let {
                                x: t,
                                y: i,
                                color: n
                            } = e;
                            return {
                                x: t,
                                y: i,
                                r: 1,
                                color: "rgba(".concat(n[0], ", ").concat(n[1], ", ").concat(n[2], ", ").concat(n[3], ")")
                            }
                        })
                    }
                    return a.useEffect(() => {
                        v()
                    }, [s]), a.useEffect(() => {
                        e.current.focus()
                    }, []), a.useEffect(() => {
                        let t = t5(e.current, f),
                            i = t.x,
                            n = w.current - f;
                        console.log(n), 1 === n || -1 === n ? b.jump(i) : (b.set(i), d(!0)), w.current = f
                    }, [f, s]), (0, n.jsxs)(A.x, {
                        css: {
                            position: "relative",
                            size: "100%",
                            center: !0
                        },
                        children: [(0, n.jsx)(ty, {
                            size: "12",
                            show: h,
                            children: "Type and press Enter"
                        }), (0, n.jsxs)(A.x, {
                            css: {
                                height: 40,
                                width: 250,
                                position: "relative",
                                background: "$gray1",
                                br: 6,
                                outline: 0,
                                boxShadow: "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 2px, rgba(0, 0, 0, 0.05) 0px 3px 6px -3px, rgba(0, 0, 0, 0.05) 0px 2px 4px -2px, rgba(0, 0, 0, 0.05) 0px 1px 2px -1px, rgba(0, 0, 0, 0.05) 0px 1px 1px -1px, rgba(0, 0, 0, 0.05) 0px 1px 0px -1px",
                                svg: {
                                    position: "absolute",
                                    top: 10,
                                    left: 8,
                                    color: "$gray9",
                                    size: 20
                                }
                            },
                            children: [(0, n.jsx)(A.x, {
                                ref: t,
                                as: "canvas",
                                css: {
                                    position: "absolute",
                                    pointerEvents: "none",
                                    transform: "scale(0.5)",
                                    top: 5,
                                    left: 28,
                                    transformOrigin: "top left",
                                    filter: "invert(1)",
                                    ".dark &": {
                                        filter: "none"
                                    }
                                },
                                style: {
                                    opacity: o ? 1 : 0
                                }
                            }), (0, n.jsx)(t8, {}), (0, n.jsx)(A.x, {
                                ref: e,
                                as: "input",
                                placeholder: t3,
                                maxLength: 20,
                                autoCapitalize: "false",
                                autoCorrect: "false",
                                spellCheck: "false",
                                css: {
                                    size: "100%",
                                    px: 16,
                                    pl: 35,
                                    fontSize: 16,
                                    br: "inherit",
                                    outline: "none",
                                    border: "1px solid $gray4",
                                    caretColor: "transparent",
                                    lineHeight: "40px",
                                    "&::placeholder": {
                                        color: "transparent"
                                    },
                                    "&::selection": {
                                        background: "var(--selection-bg)",
                                        color: "var(--selection-color)"
                                    },
                                    "&:focus": {}
                                },
                                style: {
                                    "--selection-bg": o ? "transparent" : "var(--colors-blue3)",
                                    "--selection-color": o ? "transparent" : "var(--colors-blue9)",
                                    color: o ? "transparent" : "var(--colors-gray12)"
                                },
                                value: s,
                                onChange: e => {
                                    e.target.value.length > 20 || o || (setTimeout(() => {
                                        C(e.target.selectionStart)
                                    }), window.clearTimeout(y.current), r(e.target.value), d(!0), y.current = setTimeout(() => {
                                        d(!1)
                                    }, 100))
                                },
                                onKeyDown: n => {
                                    setTimeout(() => {
                                        e.current && C(e.current.selectionStart)
                                    }), "Enter" === n.key && s.length <= 20 ? (function() {
                                        if (o || !s) return;
                                        v();
                                        let n = i.current.reduce((e, t) => t.r > 0 ? t.x < e ? e : t.x : e, 0),
                                            {
                                                x: a
                                            } = t5(e.current, 0);
                                        b.set(a), l(!0),
                                            function e() {
                                                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                                requestAnimationFrame(() => {
                                                    let a = [];
                                                    for (let e = 0; e < i.current.length; e++) {
                                                        let t = i.current[e];
                                                        if (t.x < n) a.push(t);
                                                        else {
                                                            if (t.r <= 0) {
                                                                t.r = 0;
                                                                continue
                                                            }
                                                            t.x = t.x + (Math.random() > .5 ? 1 : -1), t.y = t.y + (Math.random() > .5 ? 1 : -1), t.r = t.r - .05 * Math.random(), a.push(t)
                                                        }
                                                    }
                                                    i.current = a,
                                                        function() {
                                                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                                                n = t.current,
                                                                a = n.getContext("2d");
                                                            a.clearRect(e, 0, 800, 800), i.current.forEach(t => {
                                                                let {
                                                                    x: i,
                                                                    y: n,
                                                                    r: s,
                                                                    color: r
                                                                } = t;
                                                                i > e && (a.beginPath(), a.rect(i, n, s, s), a.fillStyle = r, a.strokeStyle = r, a.stroke())
                                                            })
                                                        }(n), i.current.length > 0 ? e(n - 8) : (l(!1), r(""))
                                                })
                                            }(n), setTimeout(() => {
                                                C(0)
                                            }, 250)
                                    }(), h && g(!1)) : (window.clearTimeout(y.current), d(!0), y.current = setTimeout(() => {
                                        d(!1)
                                    }, 500))
                                },
                                onBlur: () => {
                                    p(!1)
                                },
                                onFocus: () => {
                                    p(!0)
                                }
                            }), (0, n.jsx)(A.x, {
                                "aria-hidden": !0,
                                as: m.E.div,
                                css: {
                                    position: "absolute",
                                    color: "$gray9",
                                    fontSize: 16,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    left: 36,
                                    pointerEvents: "none"
                                },
                                animate: {
                                    opacity: s ? 0 : 1
                                },
                                transition: {
                                    delay: s ? 0 : .3,
                                    duration: s ? 0 : .15
                                },
                                children: t3
                            }), (0, n.jsx)(A.x, {
                                as: m.E.div,
                                css: {
                                    height: 20,
                                    width: 2,
                                    background: "$blue9",
                                    position: "absolute",
                                    left: 0,
                                    top: 10,
                                    br: 9999
                                },
                                style: {
                                    x: b
                                },
                                animate: {
                                    opacity: c ? 1 : [1, 0, 1],
                                    ...!u && {
                                        opacity: 0
                                    }
                                },
                                transition: {
                                    opacity: {
                                        repeat: 1 / 0,
                                        repeatDelay: .5,
                                        duration: 1
                                    }
                                }
                            })]
                        })]
                    })
                }, {}),
                wrap: !0,
                slowMotion: !1
            }, {
                date: "January 2023",
                title: "Radial Menu",
                src: "radial-menu-3.mp4",
                component: (0, n.jsx)(tk, {}),
                wrap: 500,
                dark: !0,
                slowMotion: !1
            }, {
                date: "January 2023",
                title: "Precision Slider",
                src: "precision-slider.mp4",
                component: (0, n.jsx)(function() {
                    let {
                        speed: e
                    } = iV(), t = e > 1 ? 2 * e : e, i = a.useRef(0), [s, r] = a.useState(!1), [o, l] = a.useState(26), [c, d] = a.useState(!0), h = s ? 32 : 4, g = (0, x.q)(26, {
                        stiffness: 500,
                        damping: 40,
                        onComplete: () => {
                            (0, C.pX)();
                            let e = g.get();
                            e < 0 ? g.jump(0) : e > 100 && g.jump(100)
                        }
                    }), u = (0, t9.H)(g, e => Math.round(e));
                    (0, tj.z)("mouseup", () => {
                        document.body.classList.remove("cursor-resizing-ew"), r(!1)
                    }), (0, tj.z)("mousemove", e => {
                        if (s) {
                            d(!1);
                            let t = e.clientX - i.current;
                            g.set((0, C.uZ)(g.get() + t, 0, 100))
                        }
                        i.current = e.clientX
                    }, [s]), a.useEffect(() => {
                        let e = u.on("change", e => {
                            l(e)
                        });
                        return e
                    }, []);
                    let p = {
                        type: "spring",
                        stiffness: 400 / t,
                        damping: 30
                    };
                    return (0, n.jsxs)(A.x, {
                        css: {
                            size: "100%",
                            center: !0,
                            touchAction: "none"
                        },
                        onWheel: e => {
                            if (e.target.blur(), s) return;
                            (0, C.dg)();
                            let t = e.deltaY + -1 * e.deltaX,
                                i = g.get() + t;
                            g.set((0, C.uZ)(i, -1, 110))
                        },
                        onMouseDown: e => {
                            r(!0), document.body.classList.add("cursor-resizing-ew"), e.target.blur()
                        },
                        onTouchStart: e => {
                            i.current = e.touches[0].clientX, (0, C.dg)(), r(!0)
                        },
                        onTouchMove: e => {
                            d(!1);
                            let t = e.touches[0].clientX - i.current;
                            g.set((0, C.uZ)(g.get() + 2 * t, 0, 100)), i.current = e.touches[0].clientX
                        },
                        onTouchEnd: () => {
                            r(!1), (0, C.pX)()
                        },
                        children: [(0, n.jsx)(ty, {
                            size: "12",
                            show: c,
                            children: "Hold and drag"
                        }), (0, n.jsxs)(A.x, {
                            role: "slider",
                            dir: "ltr",
                            "aria-label": "Volume",
                            "aria-orientation": "horizontal",
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-valuenow": Math.round(o),
                            as: m.E.div,
                            css: {
                                position: "relative",
                                d: "flex",
                                ai: "center",
                                cursor: "ew-resize",
                                focus: !0,
                                p: 4,
                                br: 8,
                                pl: 0,
                                pr: 8
                            },
                            initial: !1,
                            tabIndex: 1,
                            animate: {
                                scale: 1.3,
                                x: s ? -20 : 0
                            },
                            transition: p,
                            onKeyDown: e => {
                                "ArrowLeft" === e.key && g.set((0, C.uZ)(g.get() - 10, 0, 100)), "ArrowRight" === e.key && g.set((0, C.uZ)(g.get() + 10, 0, 100))
                            },
                            children: [(0, n.jsx)(it, {
                                zoom: s,
                                volume: o,
                                transition: p,
                                speed: t
                            }), (0, n.jsx)(A.x, {
                                as: m.E.div,
                                css: {
                                    width: "100%",
                                    height: h,
                                    flexGrow: 1,
                                    position: "relative",
                                    overflow: "hidden",
                                    background: "$gray6",
                                    willChange: "width, height, border-radius",
                                    "~ span": {
                                        zIndex: 2
                                    }
                                },
                                initial: !1,
                                animate: {
                                    width: s ? 200 : 100,
                                    height: h,
                                    borderRadius: 8
                                },
                                transition: p,
                                children: (0, n.jsx)(A.x, {
                                    as: m.E.div,
                                    css: {
                                        display: "block",
                                        position: "absolute",
                                        height: "100%",
                                        br: "none",
                                        willChange: "width",
                                        background: "$highContrast"
                                    },
                                    style: {
                                        width: (0, t9.H)(g, e => "calc(0% + ".concat(e, "%)"))
                                    }
                                })
                            })]
                        })]
                    })
                }, {}),
                wrap: !0,
                dark: !0
            }, {
                date: "January 2023",
                title: "Wheel Input",
                src: "wheel-input-3.mp4",
                component: (0, n.jsx)(function() {
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(ig, {
                            variant: "top"
                        }), (0, n.jsx)(ig, {
                            variant: "bottom"
                        }), (0, n.jsxs)(A.x, {
                            css: {
                                position: "relative",
                                width: "100%",
                                maxWidth: 320
                            },
                            children: [(0, n.jsx)(A.x, {
                                css: {
                                    height: 40,
                                    width: "100%",
                                    background: "black",
                                    br: 8,
                                    borderRight: 0,
                                    position: "absolute",
                                    zIndex: 1,
                                    pointerEvents: "none",
                                    top: -20,
                                    mixBlendMode: "overlay",
                                    ".dark &": {
                                        background: "white"
                                    }
                                }
                            }), (0, n.jsx)(A.x, {
                                css: {
                                    width: "100%",
                                    d: "flex",
                                    jc: "space-between"
                                },
                                children: [ic, ih, id].map((e, t) => (0, n.jsx)(il, {
                                    items: e,
                                    index: t
                                }, t))
                            })]
                        })]
                    })
                }, {}),
                wrap: 320
            }, {
                date: "December 2022",
                title: "⌘K Breadcrumbs",
                src: "cmdk-breadcrumbs.mp4"
            }, {
                date: "December 2022",
                title: "Geist Illustration",
                src: {
                    src: "/_next/static/media/geist-illustration-light.f3d6e7fc.png",
                    height: 840,
                    width: 1680,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAMFBMVEX5+fjz9ffv8PDt8vrd6fn//vvS0tDi4uKyze7S1tuQkpbE2fKusbXNzc3S5PdQnfdZ05H9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVR4nAXBCQIAIAQAwUVCOv7/22Y4tabka7bEqmxnmMcEsCGqyv0QdAC+IS0ndQAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 4
                }
            }, {
                date: "December 2022",
                title: "Preview Comments",
                src: "preview-comments.mp4"
            }, {
                date: "November 2022",
                title: "Cryptic List",
                src: "cryptic-list.mp4"
            }, {
                date: "November 2022",
                title: "Vercel Design",
                src: {
                    src: "/_next/static/media/vercel-design.378c85e7.png",
                    height: 870,
                    width: 1274,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAADFBMVEUDAwMoKCgQEBA0MzOEvJ0rAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHUlEQVR4nGNgYGBgYgADJkZGZkYoC8pgYILKQQAAAlMAFvqYckAAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 5
                },
                href: "https://vercel.com/design"
            }, {
                date: "November 2022",
                title: "Vercel Footer",
                src: "vercel-footer-2.mp4",
                component: (0, n.jsx)(function() {
                    let {
                        speed: e
                    } = iV(), t = a.useRef(null), i = (0, f.Y)(t, {
                        once: !0
                    }), s = (0, x.q)(347, {
                        stiffness: 150 / (2 * e),
                        damping: 20,
                        mass: .1
                    });
                    return a.useEffect(() => {
                        function e() {
                            s.set(347)
                        }

                        function t(e) {
                            s.set(e.clientX)
                        }
                        return document.addEventListener("mouseleave", e), document.addEventListener("mousemove", t), () => {
                            document.removeEventListener("mouseleave", e), document.removeEventListener("mousemove", t)
                        }
                    }, []), (0, n.jsxs)(A.x, {
                        css: {
                            size: "100%",
                            overflow: "hidden"
                        },
                        children: [(0, n.jsx)(A.x, {
                            css: {
                                margin: "0 auto",
                                bottom: 0,
                                fontSize: "100%",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                transform: "translateY(45%)",
                                left: "-4%",
                                zIndex: 2,
                                svg: {
                                    width: "100%",
                                    maxWidth: "1440px",
                                    height: "100%",
                                    opacity: .7
                                }
                            },
                            children: (0, n.jsxs)("svg", {
                                ref: t,
                                fill: "none",
                                height: "157",
                                viewBox: "0 0 695 157",
                                width: "695",
                                children: [(0, n.jsx)("path", {
                                    d: "M390.076 109.945C381.212 120.603 366.99 126.93 350.852 126.93C323.925 126.93 302.177 109.437 302.177 83.2479C302.177 70.1328 307.019 59.2175 315.209 51.5797C323.401 43.9404 334.957 39.5655 348.406 39.5655C361.867 39.5655 373.423 43.9405 381.612 51.5767C389.798 59.2114 394.635 70.1206 394.635 83.2235C394.635 86.1099 394.334 88.8588 393.823 91.5159H325.484H325.122L325.25 91.8543C328.988 101.732 339.051 107.88 350.852 107.88C359.276 107.88 366.796 104.766 371.791 99.4042L390.076 109.945ZM325.05 74.6306L324.948 74.9555H325.288H371.523H371.863L371.762 74.6311C368.693 64.7787 360.222 58.591 348.406 58.591C336.613 58.591 328.143 64.7789 325.05 74.6306ZM252.166 85.8138L294.463 12.7179H319.326L251.974 129.122L184.596 12.7179H209.436L251.733 85.8138L251.949 86.1877L252.166 85.8138ZM653.491 109.945C644.627 120.603 630.405 126.93 614.267 126.93C587.364 126.93 565.591 109.437 565.591 83.2479C565.591 70.1328 570.434 59.2175 578.624 51.5797C586.815 43.9404 598.372 39.5655 611.821 39.5655C625.282 39.5655 636.838 43.9405 645.027 51.5767C653.213 59.2114 658.05 70.1206 658.05 83.2235C658.05 86.1099 657.749 88.8588 657.238 91.5159H588.899H588.537L588.665 91.8543C592.403 101.732 602.466 107.88 614.267 107.88C622.691 107.88 630.211 104.766 635.206 99.4042L653.491 109.945ZM588.465 74.6306L588.363 74.9555H588.703H634.938H635.278L635.177 74.6311C632.108 64.7787 623.637 58.591 611.821 58.591C600.004 58.591 591.558 64.779 588.465 74.6306ZM431.579 64.2105H431.829C431.829 58.1159 435.382 52.5709 441.18 48.5391C446.922 44.5458 454.847 42.0533 463.62 42.0068V65.0753C461.251 64.4122 458.739 63.9605 456.042 63.9605C448.877 63.9605 442.696 66.4221 438.305 70.7442C433.914 75.0669 431.329 81.235 431.329 88.6174V124.49H409.813V42.0062H431.329V64.2105H431.579ZM90.6418 0.763617L180.598 156.219H0.685459L90.6418 0.763617ZM492.975 83.2479C492.975 90.6255 495.392 96.7943 499.702 101.119C504.012 105.445 510.195 107.905 517.688 107.905C527.745 107.905 535.343 103.392 539.315 95.9924L557.656 106.548C549.897 119.267 535.469 126.93 517.688 126.93C504.227 126.93 492.671 122.555 484.482 114.916C476.295 107.278 471.459 96.363 471.459 83.2479C471.459 70.1328 476.301 59.2175 484.491 51.5797C492.683 43.9404 504.239 39.5655 517.688 39.5655C535.468 39.5655 549.873 47.2288 557.656 59.9479L539.315 70.5033C535.343 63.1041 527.745 58.591 517.688 58.591C510.208 58.591 504.025 61.0512 499.711 65.3763C495.398 69.7013 492.975 75.8701 492.975 83.2479ZM694.744 12.7179V124.49H673.228V12.7179H694.744Z",
                                    "data-visible": i,
                                    fill: "url(#paint0_linear_1446_1136)",
                                    pathLength: 1,
                                    stroke: "url(#paint1_linear_1446_1136)",
                                    strokeMiterlimit: "3.99933",
                                    strokeWidth: "0.5"
                                }), (0, n.jsxs)("defs", {
                                    children: [(0, n.jsxs)(m.E.linearGradient, {
                                        gradientUnits: "userSpaceOnUse",
                                        id: "paint0_linear_1446_1136",
                                        x1: s,
                                        x2: "347",
                                        y1: "0.264465",
                                        y2: "179.855",
                                        children: [(0, n.jsx)("stop", {
                                            offset: "0.463542",
                                            stopColor: "white",
                                            stopOpacity: "0"
                                        }), (0, n.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "white"
                                        }), (0, n.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "white"
                                        })]
                                    }), (0, n.jsxs)("linearGradient", {
                                        gradientUnits: "userSpaceOnUse",
                                        id: "paint1_linear_1446_1136",
                                        x1: "317.5",
                                        x2: "314.007",
                                        y1: "-41.5",
                                        y2: "126",
                                        children: [(0, n.jsx)("stop", {
                                            stopColor: "white"
                                        }), (0, n.jsx)("stop", {
                                            offset: "1",
                                            stopOpacity: "0"
                                        })]
                                    })]
                                })]
                            })
                        }), (0, n.jsx)(A.x, {
                            css: {
                                display: "flex",
                                padding: "0 32px",
                                background: "rgba(22, 22, 22, 0.7)",
                                backdropFilter: "blur(50px)",
                                height: "100%",
                                width: "100%",
                                position: "relative",
                                zIndex: 2
                            },
                            children: (0, n.jsx)(A.x, {
                                "aria-hidden": !0,
                                css: {
                                    background: "linear-gradient(\n    90deg,\n    #d9d9d9 -1.53%,\n    rgba(0, 0, 0, 0) -1.52%,\n    #666 50%,\n    rgba(0, 0, 0, 0) 100%\n  )",
                                    width: "100%",
                                    position: "absolute",
                                    height: 1,
                                    top: -1,
                                    zIndex: 2
                                }
                            })
                        })]
                    })
                }, {}),
                wrap: !0,
                dark: !0,
                requiresPointer: !0
            }, {
                date: "October 2022",
                title: "Next.js Conf 2022",
                src: {
                    src: "/_next/static/media/nextjs-poster.669aec51.png",
                    height: 1364,
                    width: 1085,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAARVBMVEUQEBDf4ODT1NXl5ucNJS2akY04OzsoJyYaGhooMjWNhn7JxsRiZGIWFhZphXMcTFU/RUGCg4RiT0FEUkOvrq74+fkfHyB8q3GBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nC3BtwEAIAwDMFOd0Ov/r7IgIVvjnMHNKYQJm7giccpuo6LE7lVA9UJBJUl8Dy4CAXW+zTcQAAAAAElFTkSuQmCC",
                    blurWidth: 6,
                    blurHeight: 8
                }
            }, {
                date: "October 2022",
                title: "Flashlight Tabs",
                src: "flashlight.mp4",
                component: (0, n.jsx)(function() {
                    let {
                        speed: e
                    } = iV(), [t, i] = a.useState(2);
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)(iu.Provider, {
                            value: {
                                active: t,
                                setActive: i
                            },
                            children: (0, n.jsxs)(A.x, {
                                as: m.E.div,
                                css: {
                                    width: "fit-content",
                                    d: "flex",
                                    height: 48,
                                    br: 9999,
                                    position: "relative",
                                    border: "1px solid $gray6",
                                    boxShadow: "var(--shadows-small)",
                                    focus: !0,
                                    "&:after": {
                                        content: "",
                                        background: "linear-gradient(\n                to left,\n                var(--colors-gray6) 20%,\n                var(--colors-gray6) 44%,\n                var(--colors-gray11) 50%,\n                var(--colors-gray10) 55%,\n                var(--colors-gray6) 63%,\n                var(--colors-gray6) 100%\n              )",
                                        zIndex: 1,
                                        pointerEvents: "none",
                                        backgroundPositionX: ["100%", "70%", "50%", "25%", "0%"][t],
                                        backgroundSize: "200% auto",
                                        position: "absolute",
                                        borderRadius: "inherit",
                                        bottom: -1,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        willChange: "background-position-x",
                                        transition: "background-position-x ".concat(600 * e, "ms ease"),
                                        "@mobile": {
                                            backgroundPositionX: ["100%", null, "50%", "0%", null][t]
                                        }
                                    }
                                },
                                tabIndex: 1,
                                onKeyDown: e => {
                                    console.log("Hi"), "ArrowLeft" === e.key && i(e => 0 === e ? 0 : e - 1), "ArrowRight" === e.key && i(e => e === ip.length - 1 ? ip.length - 1 : e + 1)
                                },
                                children: [(0, n.jsx)(A.x, {
                                    "aria-hidden": !0,
                                    css: {
                                        background: "linear-gradient(90deg,\n      rgba(0, 0, 0, 0),\n      $colors$gray6 20%,\n      $colors$gray10 67.19%,\n      rgba(0, 0, 0, 0))",
                                        opacity: .6,
                                        height: "1px",
                                        position: "absolute",
                                        top: -1,
                                        width: "95%",
                                        zIndex: 1
                                    }
                                }), (0, n.jsx)(A.x, {
                                    css: {
                                        d: "flex",
                                        overflow: "hidden",
                                        p: 5,
                                        br: "inherit",
                                        background: "$gray2",
                                        position: "relative",
                                        zIndex: 2,
                                        "@mobile": {
                                            "button:nth-of-type(2), button:nth-of-type(5)": {
                                                display: "none"
                                            }
                                        }
                                    },
                                    children: ip.map((e, t) => (0, n.jsx)(im, {
                                        index: t,
                                        children: e
                                    }, e))
                                })]
                            })
                        })
                    })
                }, {}),
                wrap: !0,
                dark: !0
            }, {
                date: "October 2022",
                title: "Browser History",
                src: "browser-history-3.mp4"
            }, {
                date: "October 2022",
                title: "Vercel Homepage",
                src: "vercel-home.mp4"
            }, {
                date: "September 2022",
                title: "Copy & Paste",
                src: "copy-paste.mp4",
                component: (0, n.jsx)(function() {
                    let {
                        speed: e
                    } = iV(), t = a.useRef(), i = a.useRef(), [s, r] = a.useState(!1), [c, d] = a.useState(!1), [h, g] = a.useState(!1), [u, p] = a.useState(!1), [f, x] = a.useState({
                        x: 0,
                        y: 0
                    }), [C, w] = a.useState({
                        y: 0,
                        x: 0
                    });

                    function b() {
                        let {
                            x: e,
                            y: t,
                            width: n,
                            height: a
                        } = i.current.getBoundingClientRect();
                        w({
                            x: e,
                            y: t,
                            width: n,
                            height: a
                        })
                    }

                    function y() {
                        var e;
                        let {
                            x: i,
                            y: n,
                            width: a,
                            height: s
                        } = null == t ? void 0 : null === (e = t.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                        x({
                            x: i,
                            y: n,
                            width: a,
                            height: s
                        })
                    }
                    let v = a.useRef({
                        x: 0,
                        y: 0
                    });

                    function j() {
                        h || (d(!0), setTimeout(() => {
                            g(!0), p(!1), x({
                                ...f,
                                x: v.current.x + 16,
                                y: v.current.y + 16
                            })
                        }, 200))
                    }

                    function k() {
                        r(!0), g(!1)
                    }

                    function E() {
                        if (!h) return null;
                        x(C), g(!1), p(!0)
                    }
                    return a.useEffect(() => {
                        document.onmousemove = e => {
                            let t = e.clientX,
                                i = e.clientY;
                            v.current.x = t, v.current.y = i, h && !u && x(e => ({
                                ...e,
                                x: t + 16,
                                y: i + 16
                            }))
                        }, document.onmousedown = () => {
                            h && k()
                        }, document.onkeydown = e => {
                            "c" === e.key && e.metaKey && j(), "v" === e.key && e.metaKey && E(), "Escape" === e.key && k()
                        }
                    }, [h, u]), a.useEffect(() => {
                        b(), y()
                    }, []), a.useEffect(() => {
                        function e() {
                            if (b(), h || y(), u) {
                                let {
                                    x: e,
                                    y: t,
                                    width: n,
                                    height: a
                                } = i.current.getBoundingClientRect();
                                x({
                                    x: e,
                                    y: t,
                                    width: n,
                                    height: a
                                })
                            }
                        }
                        return window.addEventListener("resize", e), () => {
                            window.removeEventListener("resize", e)
                        }
                    }, [h, u]), (0, n.jsxs)(l.k, {
                        gap: "4",
                        children: [(0, n.jsx)(A.x, {
                            ref: t,
                            as: o(),
                            alt: "Image of beach in Florian\xf3polis, Brazil",
                            ...iC,
                            placeholder: "blur",
                            width: "320",
                            height: "420",
                            css: {
                                width: "100%",
                                objectFit: "cover",
                                userSelect: "none",
                                userDrag: "none"
                            },
                            draggable: !1
                        }), (0, ix.createPortal)((0, n.jsx)(A.x, {
                            "aria-hidden": !0,
                            as: m.E.img,
                            initial: !1,
                            animate: {
                                opacity: h || u ? 1 : 0,
                                filter: c ? ["blur(0px) brightness(100%)", "blur(2px) brightness(90%)", "blur(0px) brightness(100%)"] : null,
                                width: h ? 40 : f.width,
                                height: h ? 56 : f.height,
                                left: f.x,
                                top: f.y,
                                ...s && {
                                    width: 0,
                                    height: 0
                                }
                            },
                            transition: {
                                type: "spring",
                                stiffness: (u ? 750 : 250) / e,
                                damping: u ? 25 : 40
                            },
                            src: "/static/photos/38.jpg",
                            draggable: !1,
                            css: {
                                objectFit: "cover",
                                position: "fixed",
                                userSelect: "none",
                                zIndex: 2,
                                transition: "box-shadow 150ms ease",
                                ...(h || s) && {
                                    boxShadow: "$small, 0 0 0 2px white"
                                },
                                ...!h && {
                                    transition: "all 150ms ease",
                                    "&:hover": {
                                        focus: !0,
                                        filter: "brightness(90%)",
                                        cursor: "copy"
                                    }
                                }
                            },
                            onMouseDown: () => {
                                j()
                            },
                            onAnimationComplete: () => {
                                s && (y(), r(!1))
                            }
                        }), document.body), (0, n.jsx)(A.x, {
                            ref: i,
                            as: m.E.div,
                            whileTap: {
                                scale: .96
                            },
                            css: {
                                border: "2px solid $gray6",
                                background: "$gray2",
                                width: "100%",
                                transition: "all 350ms ease",
                                "&:hover": {
                                    background: "$gray4"
                                },
                                "&:active": {
                                    background: "$gray5"
                                }
                            },
                            onMouseDown: E
                        })]
                    })
                }, {}),
                requiresPointer: !0
            }, {
                date: "September 2022",
                title: "Gooey Shader",
                src: "gooey.mp4"
            }, {
                date: "September 2022",
                title: "Mirror Shader",
                src: "stripes.mp4"
            }, {
                date: "September 2022",
                title: "Flume Shader",
                src: "flume.mp4"
            }, {
                date: "September 2022",
                title: "Tangerine Shader",
                src: "peach.mp4"
            }, {
                date: "September 2022",
                title: "Rauno & Vercel",
                src: {
                    src: "/_next/static/media/vercel.0ed38192.png",
                    height: 630,
                    width: 1200,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAACVBMVEUFCAoPERQpKy8n8ZkEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAF0lEQVR4nGNgYGBgZIAARiYmCBPOgAAAARwADhUhcckAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 4
                }
            }, {
                date: "August 2022",
                title: "Personal Branding",
                src: {
                    src: "/_next/static/media/og2.1633f23c.png",
                    height: 630,
                    width: 1200,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEUWDwtINCzSwgv1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgQAKMjOgMMAAAAGwABa6H6+kAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 4
                }
            }, {
                date: "July 2022",
                title: "Signatures",
                src: "signatures.mp4"
            }, {
                date: "July 2022",
                title: "Design Details",
                src: "design.mp4"
            }, {
                date: "July 2022",
                title: "Sticky Video",
                src: "yt.mp4"
            }, {
                date: "July 2022",
                title: "Undefined Branding",
                src: {
                    src: "/_next/static/media/xxx.2132e468.jpeg",
                    height: 2473,
                    width: 2855,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAHAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAdEAABBAIDAAAAAAAAAAAAAAABAAIEEQMFEhNR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8AmuXazZQd2zZTub7IOdxbRPloiIiP/9k=",
                    blurWidth: 8,
                    blurHeight: 7
                }
            }, {
                date: "July 2022",
                title: "Focus Reading",
                src: "focus-reading.mp4"
            }, {
                date: "May 2022",
                title: "Visual Writing",
                src: "visual-writing.mp4"
            }, {
                date: "May 2022",
                title: "Animated Typing",
                src: "animated-typing.mp4",
                wrap: !0
            }, {
                date: "April 2022",
                title: "Microinteractions I",
                src: "buttons1.mp4"
            }, {
                date: "April 2022",
                title: "Microinteractions II",
                src: "buttons2.mp4"
            }, {
                date: "March 2022",
                title: "Blurred Icons",
                src: "blur-icons.mp4"
            }, {
                date: "April 2022",
                title: "Arc Teaser",
                src: "arc-promo.mp4"
            }, {
                date: "March 2022",
                title: "Website Presentation",
                src: "website-presentation.mp4"
            }, {
                date: "February 2022",
                title: "User Interface Gallery",
                src: "uig.mp4"
            }, {
                date: "January 2022",
                title: "Theme Motion",
                src: "theme-motion.mp4"
            }, {
                date: "December 2021",
                title: "Liquid Swipe",
                src: "liquid-swipe.mp4"
            }, {
                date: "November 2021",
                title: "Input",
                src: "input.mp4"
            }, {
                date: "November 2021",
                title: "Animated Checkboxes",
                src: "checkbox.mp4"
            }, {
                date: "November 2021",
                title: "Command Menu",
                src: "cmdk-ultra.mp4"
            }, {
                date: "November 2021",
                title: "Hold Enter to confirm",
                src: "enter-to-confirm.mp4"
            }, {
                date: "June 2021",
                title: "Countdown",
                src: "countdown.mp4"
            }, {
                date: "April 2021",
                title: "Browser History",
                src: "browser-history.mp4"
            }].sort((e, t) => {
                let i = new Date(e.date),
                    n = new Date(t.date);
                return i > n ? -1 : i < n ? 1 : e.component && !t.component ? -1 : !e.component && t.component ? 1 : e.href && !t.href ? -1 : !e.href && t.href ? 1 : 0
            });
            var ik = i(1664),
                iE = i.n(ik);
            let iB = a.createContext({
                speed: 1,
                videos: []
            });
            var iM = !0;
            let iV = () => a.useContext(iB);

            function iR(e) {
                let {
                    id: t,
                    title: i,
                    description: r,
                    src: o,
                    date: g,
                    wrap: u,
                    requiresPointer: p,
                    dark: m,
                    slowMotion: f = !0,
                    writing: x,
                    collaborators: w
                } = e, [b, y] = a.useState(1), {
                    component: j,
                    sibling: k
                } = ij.find(e => (0, C.lV)(e.title) === t || t === e.slug);

                function E() {
                    y(e => e === iZ ? iP : iZ)
                }
                return a.useEffect(() => {
                    function e(e) {
                        (0, C.Qq)() || "s" !== e.key || E()
                    }
                    return window.addEventListener("keydown", e), () => {
                        window.removeEventListener("keydown", e)
                    }
                }, []), (0, n.jsxs)(n.Fragment, {
                    children: [w && (0, n.jsx)(A.x, {
                        className: "verticalFade",
                        "data-side": "top",
                        css: {
                            height: 110
                        }
                    }), (0, n.jsxs)(l.k, {
                        direction: "column",
                        css: {
                            ...p && {
                                "@touch": {
                                    "[data-speed-toggle], [data-stage]": {
                                        display: "none",
                                        pointerEvents: "none"
                                    },
                                    "video, [data-mobile-disclaimer]": {
                                        display: "block"
                                    }
                                }
                            }
                        },
                        children: [(0, n.jsx)(c.h, {
                            title: i,
                            description: r || g,
                            ogUrl: "interaction-design" === t ? "/static/craft/og-interaction-design2.png" : "vercel" === t ? "/static/craft/og-vercel3.png" : "/static/craft/og-".concat(t, ".png")
                        }), (0, n.jsxs)(A.x, {
                            css: {
                                position: "fixed",
                                top: 0,
                                transform: "translate(-260px, 121px)",
                                width: "fit-content",
                                "@media (max-width: 1200px)": {
                                    transform: "translateY(120px)",
                                    position: "absolute",
                                    left: -120,
                                    nav: {
                                        display: "none"
                                    }
                                },
                                "@media (max-width: 980px)": {
                                    top: 0,
                                    position: "relative",
                                    transform: "none",
                                    left: -4,
                                    mb: 32
                                }
                            },
                            children: [(0, n.jsxs)(iE(), {
                                href: "/craft",
                                className: iO(),
                                children: [(0, n.jsx)(iX, {}), "Craft"]
                            }), x && (0, n.jsx)(iS, {})]
                        }), (0, n.jsxs)(l.k, {
                            align: "center",
                            css: {
                                mb: 32
                            },
                            children: [(0, n.jsxs)(l.k, {
                                direction: "column",
                                gap: "1",
                                children: [(0, n.jsx)(d.x, {
                                    as: "h1",
                                    size: "16",
                                    lineHeight: "20",
                                    weight: "500",
                                    children: i
                                }), (0, n.jsx)(d.x, {
                                    as: "p",
                                    size: "14",
                                    lineHeight: "20",
                                    color: "gray11",
                                    children: g
                                })]
                            }), (0, n.jsxs)(l.k, {
                                gap: "1",
                                css: {
                                    ml: "auto"
                                },
                                children: [f && (0, n.jsx)(h.u, {
                                    label: (0, n.jsxs)(n.Fragment, {
                                        children: ["Toggle Slow Motion", (0, n.jsx)("kbd", {
                                            className: iH(),
                                            children: "S"
                                        })]
                                    }),
                                    children: (0, n.jsx)("button", {
                                        "data-speed-toggle": "",
                                        className: iT({
                                            active: b === iP
                                        }),
                                        "aria-label": "Toggle Slow Motion",
                                        onClick: E,
                                        children: (0, n.jsx)(iW, {})
                                    })
                                }), (0, n.jsx)(h.u, {
                                    label: "Copy URL",
                                    children: (0, n.jsx)("button", {
                                        className: iT(),
                                        "aria-label": "Copy URL",
                                        onClick: () => {
                                            (0, s.Z)(window.location.href)
                                        },
                                        children: (0, n.jsx)(iN, {})
                                    })
                                }), w && (0, n.jsx)(iL, {
                                    collaborators: w
                                })]
                            })]
                        }), (0, n.jsx)(iB.Provider, {
                            value: {
                                speed: b,
                                videos: []
                            },
                            children: u ? (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(A.x, {
                                    className: m ? "dark" : "",
                                    "data-stage": "",
                                    css: {
                                        height: "boolean" != typeof u ? u : 230,
                                        border: "1px solid $gray4",
                                        br: 12,
                                        center: !0,
                                        background: "$gray2",
                                        overflow: "hidden",
                                        position: "relative",
                                        userSelect: "none",
                                        ..."radial-menu" === t && {
                                            "@mobile": {
                                                height: 350
                                            }
                                        }
                                    },
                                    children: j
                                }), k]
                            }) : (0, n.jsx)("div", {
                                "data-stage": "",
                                children: j
                            })
                        }), p && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsxs)(d.x, {
                                "data-mobile-disclaimer": "",
                                as: "p",
                                size: "14",
                                color: "gray11",
                                lineHeight: "24",
                                css: {
                                    display: "none",
                                    mb: 16,
                                    background: "$amber3",
                                    br: 8,
                                    p: 8,
                                    border: "1px solid $amber4",
                                    color: "$amber11",
                                    svg: {
                                        size: 16,
                                        verticalAlign: "middle",
                                        y: -1,
                                        mr: 4
                                    }
                                },
                                children: [(0, n.jsx)(v.sz, {}), "This prototype requires a pointer device."]
                            }), (0, n.jsx)("video", {
                                playsInline: !0,
                                loop: !0,
                                muted: !0,
                                autoPlay: !0,
                                className: iF(),
                                src: (0, C.jj)(o)
                            })]
                        }), (0, n.jsx)(iz, {
                            id: t
                        })]
                    })]
                })
            }

            function iz(e) {
                let {
                    id: t
                } = e, i = ij.filter(e => e.component), a = i.findIndex(e => (0, C.lV)(e.title) === t || e.slug === t), s = i[a + 1], r = i[a - 1];
                return r || s ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(p, {
                        css: {
                            my: 40
                        }
                    }), (0, n.jsxs)(l.k, {
                        justify: "between",
                        as: "footer",
                        css: {
                            width: "100%"
                        },
                        children: [r && (0, n.jsx)(iI, {
                            direction: "prev",
                            title: r.title
                        }), s && (0, n.jsx)(iI, {
                            direction: "next",
                            title: s.title
                        })]
                    })]
                }) : null
            }

            function iI(e) {
                let {
                    direction: t,
                    title: i
                } = e;
                return (0, n.jsxs)(iE(), {
                    href: "/craft/".concat((0, C.lV)(i)),
                    className: iD(),
                    style: {
                        marginLeft: "next" === t ? "auto" : void 0
                    },
                    children: [(0, n.jsxs)(l.k, {
                        align: "center",
                        css: {
                            gap: 4,
                            color: "$gray11",
                            fontSize: 14,
                            lineHeight: "20px"
                        },
                        style: {
                            marginLeft: "next" === t ? "auto" : void 0
                        },
                        children: ["prev" === t && "Previous", "next" === t && "Next"]
                    }), (0, n.jsx)(d.x, {
                        as: "span",
                        color: "gray12",
                        size: "14",
                        lineHeight: "20",
                        children: i
                    })]
                })
            }

            function iS() {
                let [e, t] = a.useState([]);
                return (a.useEffect(() => {
                    let e = Array.from(document.querySelectorAll("[data-heading]"));
                    t(e)
                }, []), e.length <= 1) ? null : (0, n.jsx)(A.x, {
                    as: "nav",
                    className: "fade",
                    css: {
                        mt: 60,
                        opacity: 0,
                        li: {
                            d: "flex",
                            color: "$gray11",
                            fontSize: 13,
                            a: {
                                br: 6,
                                m: -3,
                                p: 3,
                                focus: !0,
                                transition: "color 150ms ease",
                                "&:hover": {
                                    color: "$gray12"
                                }
                            }
                        }
                    },
                    children: (0, n.jsx)(l.k, {
                        as: "ul",
                        direction: "column",
                        css: {
                            gap: 10
                        },
                        children: e.map(e => {
                            let {
                                id: t,
                                nodeName: i,
                                innerText: a
                            } = e;
                            return (0, n.jsx)("li", {
                                "data-level": Number(i.replace("H", "")),
                                children: (0, n.jsx)("a", {
                                    href: "#".concat(t),
                                    onClick: e => {
                                        var i;
                                        e.preventDefault(), null === (i = document.getElementById(t)) || void 0 === i || i.scrollIntoView({
                                            behavior: "smooth"
                                        }), window.history.pushState({}, "", "#".concat(t))
                                    },
                                    children: a
                                })
                            }, t)
                        })
                    })
                })
            }

            function iL(e) {
                let {
                    collaborators: t
                } = e, [i, s] = a.useState(), r = a.useRef([]), o = () => {
                    var e;
                    if (0 === window.scrollY) {
                        s(void 0);
                        return
                    }
                    let t = Array.from(r.current).map(e => e.offsetTop),
                        i = t.filter(e => e <= window.scrollY).length - 1,
                        n = r.current[i],
                        a = null == n ? void 0 : null === (e = n.dataset) || void 0 === e ? void 0 : e.author;
                    a && s(a)
                };
                return a.useEffect(() => (r.current = Array.from(document.querySelectorAll("[data-author]")), window.addEventListener("scroll", o), () => {
                    window.removeEventListener("scroll", o)
                }), []), (0, n.jsx)(A.x, {
                    css: {
                        transform: "translate(-50%, -50%)",
                        left: "50%",
                        position: "fixed",
                        top: 40,
                        zIndex: 1
                    },
                    children: (0, n.jsxs)(l.k, {
                        layout: !0,
                        as: m.E.div,
                        direction: "row",
                        className: "dark",
                        css: {
                            overflow: "hidden",
                            background: "$gray1",
                            boxShadow: "$small",
                            border: "1px solid transparent",
                            backgroundClip: "padding-box",
                            p: 4,
                            gap: 4,
                            ".dark &": {
                                background: "$gray3",
                                border: "1px solid $grayA3"
                            },
                            "&:hover": {
                                "[data-name]": {
                                    opacity: 1
                                }
                            }
                        },
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1,
                            transition: {
                                opacity: {
                                    delay: .5
                                }
                            }
                        },
                        transition: {
                            type: "spring",
                            stiffness: 250,
                            damping: 25
                        },
                        style: {
                            borderRadius: 9999
                        },
                        children: [t && t.map((e, t) => (0, n.jsx)(iQ, {
                            ...e,
                            index: t,
                            activeName: i,
                            children: e.name
                        }, e.name)), (0, n.jsx)(tv.M, {
                            mode: "popLayout",
                            children: i && (0, n.jsx)(d.x, {
                                as: m.E.div,
                                css: {
                                    mr: 8,
                                    center: !0
                                },
                                lineHeight: "16",
                                layout: "position",
                                initial: {
                                    opacity: 0,
                                    filter: "blur(3px)"
                                },
                                animate: {
                                    opacity: 1,
                                    filter: "blur(0px)",
                                    transition: {
                                        delay: .2
                                    }
                                },
                                exit: {
                                    opacity: 0,
                                    filter: "blur(3px)"
                                },
                                children: i
                            }, i)
                        })]
                    })
                })
            }

            function iQ(e) {
                let {
                    children: t,
                    avatar: i,
                    activeName: a,
                    href: s,
                    index: r
                } = e, A = {
                    as: s ? m.E.a : m.E.div,
                    ...s && {
                        href: s,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                };
                return (0, n.jsx)(l.k, {
                    align: "center",
                    layout: "position",
                    gap: 1,
                    ...A,
                    className: iU(),
                    "data-active": a === t,
                    "data-name": t,
                    animate: {
                        x: a ? -8 * r : 0
                    },
                    transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                    },
                    children: (0, n.jsx)(o(), {
                        quality: "75",
                        alt: "Avatar of ".concat(t),
                        src: i,
                        width: "48",
                        height: "48",
                        placeholder: "blur"
                    })
                })
            }
            let iU = (0, g.iv)({
                    fontSize: 14,
                    focus: !0,
                    lineHeight: "20px",
                    br: "$round",
                    color: "$gray12",
                    $$color: "$colors$blue9",
                    $$shadowColor: "$colors$gray1",
                    ".dark &": {
                        $$shadowColor: "$colors$gray3"
                    },
                    '&[data-name="Glenn"]': {
                        $$color: "$colors$green9"
                    },
                    '&[data-name="Henry"]': {
                        $$color: "$colors$amber9"
                    },
                    '&[data-name="Alasdair"]': {
                        $$color: "$colors$red9"
                    },
                    '&[data-active="true"]': {
                        img: {
                            boxShadow: "0 0 0 1px $colors$gray1, 0 0 0 2.5px $$color"
                        }
                    },
                    "&:focus-visible": {
                        boxShadow: "0 0 0 2.5px $colors$focus"
                    },
                    img: {
                        size: 24,
                        br: "$round",
                        boxShadow: "0 0 0 1.5px $$shadowColor"
                    }
                }),
                iO = (0, g.iv)({
                    display: "inline-flex",
                    ai: "center",
                    gap: 4,
                    fontSize: 14,
                    color: "$gray11",
                    lineHeight: "20px",
                    transition: "color 150ms ease",
                    width: "fit-content",
                    focus: !0,
                    br: 6,
                    m: -3,
                    p: 3,
                    svg: {
                        transform: "translateY(-1px)"
                    },
                    "&:hover": {
                        color: "$gray12"
                    },
                    "&:active": {
                        color: "$gray12"
                    }
                }),
                iD = (0, g.iv)({
                    display: "flex",
                    fd: "column",
                    gap: 4,
                    focus: !0,
                    br: 3,
                    svg: {
                        size: 16
                    }
                }),
                iT = (0, g.iv)({
                    size: 36,
                    display: "inline-flex",
                    background: "$gray3",
                    br: 9999,
                    center: !0,
                    color: "$gray11",
                    gap: 8,
                    transition: "background 150ms ease",
                    cursor: "pointer",
                    focus: !0,
                    svg: {
                        size: 20
                    },
                    "&:hover": {
                        background: "$gray4"
                    },
                    "&:active": {
                        background: "$gray5"
                    },
                    variants: {
                        active: {
                            true: {
                                color: "$gray12",
                                background: "$gray5"
                            }
                        }
                    }
                }),
                iH = (0, g.iv)({
                    display: "inline-flex",
                    ml: 8,
                    br: 4,
                    size: 20,
                    jc: "center",
                    ai: "center",
                    background: "$gray4",
                    fontFamily: "$body",
                    color: "$gray11",
                    fontSize: 12,
                    textTransform: "uppercase",
                    transition: "background 150ms ease"
                }),
                iF = (0, g.iv)({
                    display: "none",
                    width: "100%",
                    padding: 0,
                    margin: 0,
                    border: "1px solid $gray4",
                    objectFit: "contain",
                    br: 12,
                    mb: 32,
                    background: "$gray2"
                });

            function iX() {
                return (0, n.jsxs)("svg", {
                    width: "18px",
                    height: "18px",
                    strokeWidth: "1.5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    color: "currentColor",
                    children: [(0, n.jsx)("path", {
                        d: "M10.25 4.75l-3.5 3.5 3.5 3.5",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, n.jsx)("path", {
                        d: "M6.75 8.25h6a4 4 0 014 4v7",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                })
            }

            function iW() {
                return (0, n.jsxs)("svg", {
                    width: "24px",
                    height: "24px",
                    strokeWidth: "1.5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    color: "currentColor",
                    children: [(0, n.jsx)("path", {
                        d: "M13.848 13.317L9.505 18.28a2 2 0 01-3.01 0l-4.343-4.963a2 2 0 010-2.634L6.495 5.72a2 2 0 013.01 0l4.343 4.963a2 2 0 010 2.634z",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, n.jsx)("path", {
                        d: "M13 19l4.884-5.698a2 2 0 000-2.604L13 5",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, n.jsx)("path", {
                        d: "M17 19l4.884-5.698a2 2 0 000-2.604L17 5",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                })
            }

            function iN() {
                return (0, n.jsxs)("svg", {
                    width: "24px",
                    height: "24px",
                    strokeWidth: "1.5",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    color: "currentColor",
                    children: [(0, n.jsx)("path", {
                        d: "M14 11.998C14 9.506 11.683 7 8.857 7H7.143C4.303 7 2 9.238 2 11.998c0 2.378 1.71 4.368 4 4.873a5.3 5.3 0 001.143.124",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), (0, n.jsx)("path", {
                        d: "M10 11.998c0 2.491 2.317 4.997 5.143 4.997h1.714c2.84 0 5.143-2.237 5.143-4.997 0-2.379-1.71-4.37-4-4.874A5.304 5.304 0 0016.857 7",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                })
            }
            let iZ = 1,
                iP = 3
        },
        8492: function(e) {
            e.exports = {
                root: "codeblock_root__pf0C4",
                collapsed: "codeblock_collapsed__wgKh3",
                expanded: "codeblock_expanded__GvaaX",
                editor: "codeblock_editor__Hq7SO",
                tokens: "codeblock_tokens__06ejV",
                editable: "codeblock_editable__lBbXt",
                line: "codeblock_line__5uT_I",
                token: "codeblock_token__AZQfk",
                preview: "codeblock_preview__CZVXF",
                markedWord: "codeblock_markedWord__D63Uy",
                error: "codeblock_error__X3irW"
            }
        },
        7138: function(e) {
            e.exports = {
                root: "conformance-dashboard_root__FwxFb",
                avatar: "conformance-dashboard_avatar__Xbbr2",
                column: "conformance-dashboard_column__VyKbS",
                heading: "conformance-dashboard_heading__uLh1C",
                score: "conformance-dashboard_score__pjf2u",
                title: "conformance-dashboard_title__NlxOd",
                subtitle: "conformance-dashboard_subtitle___HSkm",
                conformance: "conformance-dashboard_conformance__o0HFT",
                scoreTitle: "conformance-dashboard_scoreTitle__yZ_TJ",
                scope: "conformance-dashboard_scope__wfvBu"
            }
        }
    },
    function(e) {
        e.O(0, [675, 142, 774, 888, 179], function() {
            return e(e.s = 4090)
        }), _N_E = e.O()
    }
]);