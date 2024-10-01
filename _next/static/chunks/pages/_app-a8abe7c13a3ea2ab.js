(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888], {
      4394: function(e, t, n) {
          "use strict";
          n.d(t, {
              K: function() {
                  return r
              },
              k: function() {
                  return i
              }
          });
          var r = function() {},
              i = function() {}
      },
      425: function(e, t, n) {
          "use strict";
          n.d(t, {
              F: function() {
                  return s
              },
              f: function() {
                  return c
              }
          });
          var r = n(7294),
              i = n(9008),
              o = n.n(i);
          let a = (0, r.createContext)({
                  setTheme: e => {},
                  themes: []
              }),
              s = () => (0, r.useContext)(a),
              l = ["light", "dark"],
              u = "(prefers-color-scheme: dark)",
              c = ({
                  forcedTheme: e,
                  disableTransitionOnChange: t = !1,
                  enableSystem: n = !0,
                  enableColorScheme: i = !0,
                  storageKey: o = "theme",
                  themes: s = ["light", "dark"],
                  defaultTheme: c = n ? "system" : "light",
                  attribute: m = "data-theme",
                  value: g,
                  children: v
              }) => {
                  let [y, b] = (0, r.useState)(() => h(o, c)), [x, w] = (0, r.useState)(() => h(o)), k = g ? Object.values(g) : s, E = (0, r.useCallback)(t => {
                      let n = f(t);
                      w(n), "system" !== y || e || C(n, !1)
                  }, [y, e]), S = (0, r.useRef)(E);
                  S.current = E;
                  let C = (0, r.useCallback)((e, r = !0, i = !0) => {
                      let a = (null == g ? void 0 : g[e]) || e,
                          s = t && i ? p() : null;
                      if (r) try {
                          localStorage.setItem(o, e)
                      } catch (e) {}
                      if ("system" === e && n) {
                          let e = f();
                          a = (null == g ? void 0 : g[e]) || e
                      }
                      if (i) {
                          let e = document.documentElement;
                          "class" === m ? (e.classList.remove(...k), e.classList.add(a)) : e.setAttribute(m, a), null == s || s()
                      }
                  }, []);
                  (0, r.useEffect)(() => {
                      let e = function() {
                              return S.current(...[].slice.call(arguments))
                          },
                          t = window.matchMedia(u);
                      return t.addListener(e), e(t), () => t.removeListener(e)
                  }, []);
                  let j = (0, r.useCallback)(t => {
                      e ? C(t, !0, !1) : C(t), b(t)
                  }, [e]);
                  return (0, r.useEffect)(() => {
                      let e = e => {
                          e.key === o && j(e.newValue || c)
                      };
                      return window.addEventListener("storage", e), () => window.removeEventListener("storage", e)
                  }, [j]), (0, r.useEffect)(() => {
                      if (!i) return;
                      let t = e && l.includes(e) ? e : y && l.includes(y) ? y : "system" === y && x || null;
                      document.documentElement.style.setProperty("color-scheme", t)
                  }, [i, y, x, e]), r.createElement(a.Provider, {
                      value: {
                          theme: y,
                          setTheme: j,
                          forcedTheme: e,
                          resolvedTheme: "system" === y ? x : y,
                          themes: n ? [...s, "system"] : s,
                          systemTheme: n ? x : void 0
                      }
                  }, r.createElement(d, {
                      forcedTheme: e,
                      storageKey: o,
                      attribute: m,
                      value: g,
                      enableSystem: n,
                      defaultTheme: c,
                      attrs: k
                  }), v)
              },
              d = (0, r.memo)(({
                  forcedTheme: e,
                  storageKey: t,
                  attribute: n,
                  enableSystem: i,
                  defaultTheme: a,
                  value: s,
                  attrs: l
              }) => {
                  let c = "class" === n ? `var d=document.documentElement.classList;d.remove(${l.map(e=>`'${e}'`).join(",")});` : "var d=document.documentElement;",
                      d = (e, t) => {
                          e = (null == s ? void 0 : s[e]) || e;
                          let r = t ? e : `'${e}'`;
                          return "class" === n ? `d.add(${r})` : `d.setAttribute('${n}', ${r})`
                      },
                      h = "system" === a;
                  return r.createElement(o(), null, r.createElement("script", e ? {
                      key: "next-themes-script",
                      dangerouslySetInnerHTML: {
                          __html: `!function(){${c}${d(e)}}()`
                      }
                  } : i ? {
                      key: "next-themes-script",
                      dangerouslySetInnerHTML: {
                          __html: `!function(){try {${c}var e=localStorage.getItem('${t}');${h?"":d(a)+";"}if("system"===e||(!e&&${h})){var t="${u}",m=window.matchMedia(t);m.media!==t||m.matches?${d("dark")}:${d("light")}}else if(e) ${s?`var x=${JSON.stringify(s)};`:""}${d(s?"x[e]":"e",!0)}}catch(e){}}()`
                      }
                  } : {
                      key: "next-themes-script",
                      dangerouslySetInnerHTML: {
                          __html: `!function(){try{${c}var e=localStorage.getItem("${t}");if(e){${s?`var x=${JSON.stringify(s)};`:""}${d(s?"x[e]":"e",!0)}}else{${d(a)};}}catch(t){}}();`
                      }
                  }))
              }, (e, t) => e.forcedTheme === t.forcedTheme),
              h = (e, t) => {
                  let n;
                  if ("undefined" != typeof window) {
                      try {
                          n = localStorage.getItem(e) || void 0
                      } catch (e) {}
                      return n || t
                  }
              },
              p = () => {
                  let e = document.createElement("style");
                  return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e), () => {
                      window.getComputedStyle(document.body), setTimeout(() => {
                          document.head.removeChild(e)
                      }, 1)
                  }
              },
              f = e => (e || (e = window.matchMedia(u)), e.matches ? "dark" : "light")
      },
      6840: function(e, t, n) {
          (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
              return n(9150)
          }])
      },
      1516: function(e, t) {
          "use strict";

          function n(e, t, n, r) {
              return !1
          }
          Object.defineProperty(t, "__esModule", {
              value: !0
          }), Object.defineProperty(t, "getDomainLocale", {
              enumerable: !0,
              get: function() {
                  return n
              }
          }), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
              value: !0
          }), Object.assign(t.default, t), e.exports = t.default)
      },
      5569: function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
              value: !0
          }), Object.defineProperty(t, "default", {
              enumerable: !0,
              get: function() {
                  return w
              }
          });
          let r = n(4788),
              i = n(8754),
              o = n(224),
              a = i._(n(7294)),
              s = n(4532),
              l = n(3353),
              u = n(1410),
              c = n(9064),
              d = n(370),
              h = n(9955),
              p = n(4224),
              f = n(508),
              m = n(1516),
              g = n(4266),
              v = new Set;

          function y(e, t, n, r, i) {
              if (i || (0, l.isLocalURL)(t)) {
                  if (!r.bypassPrefetchedCheck) {
                      let i = void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0,
                          o = t + "%" + n + "%" + i;
                      if (v.has(o)) return;
                      v.add(o)
                  }
                  Promise.resolve(e.prefetch(t, n, r)).catch(e => {})
              }
          }

          function b(e) {
              return "string" == typeof e ? e : (0, u.formatUrl)(e)
          }
          let x = a.default.forwardRef(function(e, t) {
                  let n, i;
                  let {
                      href: u,
                      as: v,
                      children: x,
                      prefetch: w,
                      passHref: k,
                      replace: E,
                      shallow: S,
                      scroll: C,
                      locale: j,
                      onClick: A,
                      onMouseEnter: T,
                      onTouchStart: M,
                      legacyBehavior: P = !1
                  } = e, R = o._(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                  n = x, P && ("string" == typeof n || "number" == typeof n) && (n = a.default.createElement("a", null, n));
                  let V = !1 !== w,
                      L = a.default.useContext(h.RouterContext),
                      $ = a.default.useContext(p.AppRouterContext),
                      B = null != L ? L : $,
                      O = !L,
                      {
                          href: I,
                          as: D
                      } = a.default.useMemo(() => {
                          if (!L) {
                              let e = b(u);
                              return {
                                  href: e,
                                  as: v ? b(v) : e
                              }
                          }
                          let [e, t] = (0, s.resolveHref)(L, u, !0);
                          return {
                              href: e,
                              as: v ? (0, s.resolveHref)(L, v) : t || e
                          }
                      }, [L, u, v]),
                      F = a.default.useRef(I),
                      z = a.default.useRef(D);
                  P && (i = a.default.Children.only(n));
                  let G = P ? i && "object" == typeof i && i.ref : t,
                      [W, _, N] = (0, f.useIntersection)({
                          rootMargin: "200px"
                      }),
                      U = a.default.useCallback(e => {
                          (z.current !== D || F.current !== I) && (N(), z.current = D, F.current = I), W(e), G && ("function" == typeof G ? G(e) : "object" == typeof G && (G.current = e))
                      }, [D, G, I, N, W]);
                  a.default.useEffect(() => {
                      B && _ && V && y(B, I, D, {
                          locale: j
                      }, O)
                  }, [D, I, _, j, V, null == L ? void 0 : L.locale, B, O]);
                  let H = {
                      ref: U,
                      onClick(e) {
                          P || "function" != typeof A || A(e), P && i.props && "function" == typeof i.props.onClick && i.props.onClick(e), B && !e.defaultPrevented && function(e, t, n, r, i, o, s, u, c, d) {
                              let {
                                  nodeName: h
                              } = e.currentTarget, p = "A" === h.toUpperCase();
                              if (p && (function(e) {
                                      let t = e.currentTarget,
                                          n = t.getAttribute("target");
                                      return n && "_self" !== n || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                  }(e) || !c && !(0, l.isLocalURL)(n))) return;
                              e.preventDefault();
                              let f = () => {
                                  "beforePopState" in t ? t[i ? "replace" : "push"](n, r, {
                                      shallow: o,
                                      locale: u,
                                      scroll: s
                                  }) : t[i ? "replace" : "push"](r || n, {
                                      forceOptimisticNavigation: !d
                                  })
                              };
                              c ? a.default.startTransition(f) : f()
                          }(e, B, I, D, E, S, C, j, O, V)
                      },
                      onMouseEnter(e) {
                          P || "function" != typeof T || T(e), P && i.props && "function" == typeof i.props.onMouseEnter && i.props.onMouseEnter(e), B && (V || !O) && y(B, I, D, {
                              locale: j,
                              priority: !0,
                              bypassPrefetchedCheck: !0
                          }, O)
                      },
                      onTouchStart(e) {
                          P || "function" != typeof M || M(e), P && i.props && "function" == typeof i.props.onTouchStart && i.props.onTouchStart(e), B && (V || !O) && y(B, I, D, {
                              locale: j,
                              priority: !0,
                              bypassPrefetchedCheck: !0
                          }, O)
                      }
                  };
                  if ((0, c.isAbsoluteUrl)(D)) H.href = D;
                  else if (!P || k || "a" === i.type && !("href" in i.props)) {
                      let e = void 0 !== j ? j : null == L ? void 0 : L.locale,
                          t = (null == L ? void 0 : L.isLocaleDomain) && (0, m.getDomainLocale)(D, e, null == L ? void 0 : L.locales, null == L ? void 0 : L.domainLocales);
                      H.href = t || (0, g.addBasePath)((0, d.addLocale)(D, e, null == L ? void 0 : L.defaultLocale))
                  }
                  return P ? a.default.cloneElement(i, H) : a.default.createElement("a", r._({}, R, H), n)
              }),
              w = x;
          ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
              value: !0
          }), Object.assign(t.default, t), e.exports = t.default)
      },
      508: function(e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
              value: !0
          }), Object.defineProperty(t, "useIntersection", {
              enumerable: !0,
              get: function() {
                  return l
              }
          });
          let r = n(7294),
              i = n(29),
              o = "function" == typeof IntersectionObserver,
              a = new Map,
              s = [];

          function l(e) {
              let {
                  rootRef: t,
                  rootMargin: n,
                  disabled: l
              } = e, u = l || !o, [c, d] = (0, r.useState)(!1), h = (0, r.useRef)(null), p = (0, r.useCallback)(e => {
                  h.current = e
              }, []);
              (0, r.useEffect)(() => {
                  if (o) {
                      if (u || c) return;
                      let e = h.current;
                      if (e && e.tagName) {
                          let r = function(e, t, n) {
                              let {
                                  id: r,
                                  observer: i,
                                  elements: o
                              } = function(e) {
                                  let t;
                                  let n = {
                                          root: e.root || null,
                                          margin: e.rootMargin || ""
                                      },
                                      r = s.find(e => e.root === n.root && e.margin === n.margin);
                                  if (r && (t = a.get(r))) return t;
                                  let i = new Map,
                                      o = new IntersectionObserver(e => {
                                          e.forEach(e => {
                                              let t = i.get(e.target),
                                                  n = e.isIntersecting || e.intersectionRatio > 0;
                                              t && n && t(n)
                                          })
                                      }, e);
                                  return t = {
                                      id: n,
                                      observer: o,
                                      elements: i
                                  }, s.push(n), a.set(n, t), t
                              }(n);
                              return o.set(e, t), i.observe(e),
                                  function() {
                                      if (o.delete(e), i.unobserve(e), 0 === o.size) {
                                          i.disconnect(), a.delete(r);
                                          let e = s.findIndex(e => e.root === r.root && e.margin === r.margin);
                                          e > -1 && s.splice(e, 1)
                                      }
                                  }
                          }(e, e => e && d(e), {
                              root: null == t ? void 0 : t.current,
                              rootMargin: n
                          });
                          return r
                      }
                  } else if (!c) {
                      let e = (0, i.requestIdleCallback)(() => d(!0));
                      return () => (0, i.cancelIdleCallback)(e)
                  }
              }, [u, n, t, c, h.current]);
              let f = (0, r.useCallback)(() => {
                  d(!1)
              }, []);
              return [p, c, f]
          }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
              value: !0
          }), Object.assign(t.default, t), e.exports = t.default)
      },
      5883: function(e, t, n) {
          "use strict";
          n.d(t, {
              x: function() {
                  return i
              }
          });
          var r = n(6615);
          let i = (0, r.zo)("div", {
              boxSizing: "border-box"
          })
      },
      3694: function(e, t, n) {
          "use strict";
          n.d(t, {
              h: function() {
                  return f
              }
          });
          var r = n(5893),
              i = n(9008),
              o = n.n(i),
              a = n(7294);

          function s() {
              return (s = Object.assign || function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                  }
                  return e
              }).apply(this, arguments)
          }
          var l = {
                  templateTitle: "",
                  noindex: !1,
                  nofollow: !1,
                  defaultOpenGraphImageWidth: 0,
                  defaultOpenGraphImageHeight: 0,
                  defaultOpenGraphVideoWidth: 0,
                  defaultOpenGraphVideoHeight: 0
              },
              u = function(e, t, n) {
                  void 0 === t && (t = []);
                  var r = void 0 === n ? {} : n,
                      i = r.defaultWidth,
                      o = r.defaultHeight;
                  return t.reduce(function(t, n, r) {
                      return t.push(a.createElement("meta", {
                          key: "og:" + e + ":0" + r,
                          property: "og:" + e,
                          content: n.url
                      })), n.alt && t.push(a.createElement("meta", {
                          key: "og:" + e + ":alt0" + r,
                          property: "og:" + e + ":alt",
                          content: n.alt
                      })), n.secureUrl && t.push(a.createElement("meta", {
                          key: "og:" + e + ":secure_url0" + r,
                          property: "og:" + e + ":secure_url",
                          content: n.secureUrl.toString()
                      })), n.type && t.push(a.createElement("meta", {
                          key: "og:" + e + ":type0" + r,
                          property: "og:" + e + ":type",
                          content: n.type.toString()
                      })), n.width ? t.push(a.createElement("meta", {
                          key: "og:" + e + ":width0" + r,
                          property: "og:" + e + ":width",
                          content: n.width.toString()
                      })) : i && t.push(a.createElement("meta", {
                          key: "og:" + e + ":width0" + r,
                          property: "og:" + e + ":width",
                          content: i.toString()
                      })), n.height ? t.push(a.createElement("meta", {
                          key: "og:" + e + ":height" + r,
                          property: "og:" + e + ":height",
                          content: n.height.toString()
                      })) : o && t.push(a.createElement("meta", {
                          key: "og:" + e + ":height" + r,
                          property: "og:" + e + ":height",
                          content: o.toString()
                      })), t
                  }, [])
              },
              c = function(e) {
                  var t, n, r, i, o, c = [];
                  e.titleTemplate && (l.templateTitle = e.titleTemplate);
                  var d = "";
                  e.title ? (d = e.title, l.templateTitle && (d = l.templateTitle.replace(/%s/g, function() {
                      return d
                  }))) : e.defaultTitle && (d = e.defaultTitle), d && c.push(a.createElement("title", {
                      key: "title"
                  }, d));
                  var h = e.noindex || l.noindex || e.dangerouslySetAllPagesToNoIndex,
                      p = e.nofollow || l.nofollow || e.dangerouslySetAllPagesToNoFollow,
                      f = "";
                  if (e.robotsProps) {
                      var m = e.robotsProps,
                          g = m.nosnippet,
                          v = m.maxSnippet,
                          y = m.maxImagePreview,
                          b = m.maxVideoPreview,
                          x = m.noarchive,
                          w = m.noimageindex,
                          k = m.notranslate,
                          E = m.unavailableAfter;
                      f = (g ? ",nosnippet" : "") + (v ? ",max-snippet:" + v : "") + (y ? ",max-image-preview:" + y : "") + (x ? ",noarchive" : "") + (E ? ",unavailable_after:" + E : "") + (w ? ",noimageindex" : "") + (b ? ",max-video-preview:" + b : "") + (k ? ",notranslate" : "")
                  }
                  if (h || p ? (e.dangerouslySetAllPagesToNoIndex && (l.noindex = !0), e.dangerouslySetAllPagesToNoFollow && (l.nofollow = !0), c.push(a.createElement("meta", {
                          key: "robots",
                          name: "robots",
                          content: (h ? "noindex" : "index") + "," + (p ? "nofollow" : "follow") + f
                      }))) : c.push(a.createElement("meta", {
                          key: "robots",
                          name: "robots",
                          content: "index,follow" + f
                      })), e.description && c.push(a.createElement("meta", {
                          key: "description",
                          name: "description",
                          content: e.description
                      })), e.mobileAlternate && c.push(a.createElement("link", {
                          rel: "alternate",
                          key: "mobileAlternate",
                          media: e.mobileAlternate.media,
                          href: e.mobileAlternate.href
                      })), e.languageAlternates && e.languageAlternates.length > 0 && e.languageAlternates.forEach(function(e) {
                          c.push(a.createElement("link", {
                              rel: "alternate",
                              key: "languageAlternate-" + e.hrefLang,
                              hrefLang: e.hrefLang,
                              href: e.href
                          }))
                      }), e.twitter && (e.twitter.cardType && c.push(a.createElement("meta", {
                          key: "twitter:card",
                          name: "twitter:card",
                          content: e.twitter.cardType
                      })), e.twitter.site && c.push(a.createElement("meta", {
                          key: "twitter:site",
                          name: "twitter:site",
                          content: e.twitter.site
                      })), e.twitter.handle && c.push(a.createElement("meta", {
                          key: "twitter:creator",
                          name: "twitter:creator",
                          content: e.twitter.handle
                      }))), e.facebook && e.facebook.appId && c.push(a.createElement("meta", {
                          key: "fb:app_id",
                          property: "fb:app_id",
                          content: e.facebook.appId
                      })), (null != (t = e.openGraph) && t.title || d) && c.push(a.createElement("meta", {
                          key: "og:title",
                          property: "og:title",
                          content: (null == (i = e.openGraph) ? void 0 : i.title) || d
                      })), (null != (n = e.openGraph) && n.description || e.description) && c.push(a.createElement("meta", {
                          key: "og:description",
                          property: "og:description",
                          content: (null == (o = e.openGraph) ? void 0 : o.description) || e.description
                      })), e.openGraph) {
                      if ((e.openGraph.url || e.canonical) && c.push(a.createElement("meta", {
                              key: "og:url",
                              property: "og:url",
                              content: e.openGraph.url || e.canonical
                          })), e.openGraph.type) {
                          var S = e.openGraph.type.toLowerCase();
                          c.push(a.createElement("meta", {
                              key: "og:type",
                              property: "og:type",
                              content: S
                          })), "profile" === S && e.openGraph.profile ? (e.openGraph.profile.firstName && c.push(a.createElement("meta", {
                              key: "profile:first_name",
                              property: "profile:first_name",
                              content: e.openGraph.profile.firstName
                          })), e.openGraph.profile.lastName && c.push(a.createElement("meta", {
                              key: "profile:last_name",
                              property: "profile:last_name",
                              content: e.openGraph.profile.lastName
                          })), e.openGraph.profile.username && c.push(a.createElement("meta", {
                              key: "profile:username",
                              property: "profile:username",
                              content: e.openGraph.profile.username
                          })), e.openGraph.profile.gender && c.push(a.createElement("meta", {
                              key: "profile:gender",
                              property: "profile:gender",
                              content: e.openGraph.profile.gender
                          }))) : "book" === S && e.openGraph.book ? (e.openGraph.book.authors && e.openGraph.book.authors.length && e.openGraph.book.authors.forEach(function(e, t) {
                              c.push(a.createElement("meta", {
                                  key: "book:author:0" + t,
                                  property: "book:author",
                                  content: e
                              }))
                          }), e.openGraph.book.isbn && c.push(a.createElement("meta", {
                              key: "book:isbn",
                              property: "book:isbn",
                              content: e.openGraph.book.isbn
                          })), e.openGraph.book.releaseDate && c.push(a.createElement("meta", {
                              key: "book:release_date",
                              property: "book:release_date",
                              content: e.openGraph.book.releaseDate
                          })), e.openGraph.book.tags && e.openGraph.book.tags.length && e.openGraph.book.tags.forEach(function(e, t) {
                              c.push(a.createElement("meta", {
                                  key: "book:tag:0" + t,
                                  property: "book:tag",
                                  content: e
                              }))
                          })) : "article" === S && e.openGraph.article ? (e.openGraph.article.publishedTime && c.push(a.createElement("meta", {
                              key: "article:published_time",
                              property: "article:published_time",
                              content: e.openGraph.article.publishedTime
                          })), e.openGraph.article.modifiedTime && c.push(a.createElement("meta", {
                              key: "article:modified_time",
                              property: "article:modified_time",
                              content: e.openGraph.article.modifiedTime
                          })), e.openGraph.article.expirationTime && c.push(a.createElement("meta", {
                              key: "article:expiration_time",
                              property: "article:expiration_time",
                              content: e.openGraph.article.expirationTime
                          })), e.openGraph.article.authors && e.openGraph.article.authors.length && e.openGraph.article.authors.forEach(function(e, t) {
                              c.push(a.createElement("meta", {
                                  key: "article:author:0" + t,
                                  property: "article:author",
                                  content: e
                              }))
                          }), e.openGraph.article.section && c.push(a.createElement("meta", {
                              key: "article:section",
                              property: "article:section",
                              content: e.openGraph.article.section
                          })), e.openGraph.article.tags && e.openGraph.article.tags.length && e.openGraph.article.tags.forEach(function(e, t) {
                              c.push(a.createElement("meta", {
                                  key: "article:tag:0" + t,
                                  property: "article:tag",
                                  content: e
                              }))
                          })) : ("video.movie" === S || "video.episode" === S || "video.tv_show" === S || "video.other" === S) && e.openGraph.video && (e.openGraph.video.actors && e.openGraph.video.actors.length && e.openGraph.video.actors.forEach(function(e, t) {
                              e.profile && c.push(a.createElement("meta", {
                                  key: "video:actor:0" + t,
                                  property: "video:actor",
                                  content: e.profile
                              })), e.role && c.push(a.createElement("meta", {
                                  key: "video:actor:role:0" + t,
                                  property: "video:actor:role",
                                  content: e.role
                              }))
                          }), e.openGraph.video.directors && e.openGraph.video.directors.length && e.openGraph.video.directors.forEach(function(e, t) {
                              c.push(a.createElement("meta", {
                                  key: "video:director:0" + t,
                                  property: "video:director",
                                  content: e
                              }))
                          }), e.openGraph.video.writers && e.openGraph.video.writers.length && e.openGraph.video.writers.forEach(function(e, t) {
                              c.push(a.createElement("meta", {
                                  key: "video:writer:0" + t,
                                  property: "video:writer",
                                  content: e
                              }))
                          }), e.openGraph.video.duration && c.push(a.createElement("meta", {
                              key: "video:duration",
                              property: "video:duration",
                              content: e.openGraph.video.duration.toString()
                          })), e.openGraph.video.releaseDate && c.push(a.createElement("meta", {
                              key: "video:release_date",
                              property: "video:release_date",
                              content: e.openGraph.video.releaseDate
                          })), e.openGraph.video.tags && e.openGraph.video.tags.length && e.openGraph.video.tags.forEach(function(e, t) {
                              c.push(a.createElement("meta", {
                                  key: "video:tag:0" + t,
                                  property: "video:tag",
                                  content: e
                              }))
                          }), e.openGraph.video.series && c.push(a.createElement("meta", {
                              key: "video:series",
                              property: "video:series",
                              content: e.openGraph.video.series
                          })))
                      }
                      e.defaultOpenGraphImageWidth && (l.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth), e.defaultOpenGraphImageHeight && (l.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight), e.openGraph.images && e.openGraph.images.length && c.push.apply(c, u("image", e.openGraph.images, {
                          defaultWidth: l.defaultOpenGraphImageWidth,
                          defaultHeight: l.defaultOpenGraphImageHeight
                      })), e.defaultOpenGraphVideoWidth && (l.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth), e.defaultOpenGraphVideoHeight && (l.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight), e.openGraph.videos && e.openGraph.videos.length && c.push.apply(c, u("video", e.openGraph.videos, {
                          defaultWidth: l.defaultOpenGraphVideoWidth,
                          defaultHeight: l.defaultOpenGraphVideoHeight
                      })), e.openGraph.locale && c.push(a.createElement("meta", {
                          key: "og:locale",
                          property: "og:locale",
                          content: e.openGraph.locale
                      })), e.openGraph.site_name && c.push(a.createElement("meta", {
                          key: "og:site_name",
                          property: "og:site_name",
                          content: e.openGraph.site_name
                      }))
                  }
                  return e.canonical && c.push(a.createElement("link", {
                      rel: "canonical",
                      href: e.canonical,
                      key: "canonical"
                  })), e.additionalMetaTags && e.additionalMetaTags.length > 0 && e.additionalMetaTags.forEach(function(e) {
                      var t, n, r;
                      c.push(a.createElement("meta", s({
                          key: "meta:" + (null != (t = null != (n = null != (r = e.keyOverride) ? r : e.name) ? n : e.property) ? t : e.httpEquiv)
                      }, e)))
                  }), null != (r = e.additionalLinkTags) && r.length && e.additionalLinkTags.forEach(function(e) {
                      var t;
                      c.push(a.createElement("link", s({
                          key: "link" + (null != (t = e.keyOverride) ? t : e.href) + e.rel
                      }, e)))
                  }), c
              };
          a.Component;
          var d = function(e) {
              var t;

              function n() {
                  return e.apply(this, arguments) || this
              }
              return (t = n).prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e, n.prototype.render = function() {
                  var e = this.props,
                      t = e.title,
                      n = e.noindex,
                      r = e.nofollow,
                      i = e.robotsProps,
                      s = e.description,
                      l = e.canonical,
                      u = e.openGraph,
                      d = e.facebook,
                      h = e.twitter,
                      p = e.additionalMetaTags,
                      f = e.titleTemplate,
                      m = e.defaultTitle,
                      g = e.mobileAlternate,
                      v = e.languageAlternates,
                      y = e.additionalLinkTags;
                  return a.createElement(o(), null, c({
                      title: t,
                      noindex: void 0 !== n && n,
                      nofollow: r,
                      robotsProps: i,
                      description: s,
                      canonical: l,
                      facebook: d,
                      openGraph: u,
                      additionalMetaTags: p,
                      twitter: h,
                      titleTemplate: f,
                      defaultTitle: m,
                      mobileAlternate: g,
                      languageAlternates: v,
                      additionalLinkTags: y
                  }))
              }, n
          }(a.Component);
          RegExp("[" + Object.keys(Object.freeze({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&apos;"
          })).join("") + "]", "g");
          var h = n(1163);
          let p = "https://rauno.me";

          function f(e) {
              let {
                  title: t,
                  description: n = "Devouring details. Nourishing novelty. Deploying excellence.",
                  ogUrl: i
              } = e, o = (0, h.useRouter)(), {
                  id: a
              } = o.query;
              return (0, r.jsx)(d, {
                  title: t,
                  description: n,
                  canonical: "".concat(p).concat(o.asPath),
                  openGraph: {
                      type: "website",
                      url: a ? "".concat(p, "/craft/").concat(a) : p,
                      title: t,
                      description: n,
                      images: [{
                          url: i ? "".concat(p).concat(i) : "".concat(p, "/og2.png"),
                          alt: t
                      }]
                  }
              })
          }
      },
      8696: function(e, t, n) {
          "use strict";
          n.d(t, {
              u: function() {
                  return er
              }
          });
          var r, i, o, a, s, l, u, c, d, h, p, f, m, g = n(5893),
              v = n(7294);

          function y() {
              return !!("undefined" != typeof window && window.document && window.document.createElement)
          }
          var b = y() ? v.useLayoutEffect : v.useEffect,
              x = !1,
              w = 0,
              k = function() {
                  return ++w
              };

          function E(e) {
              return y() ? e ? e.ownerDocument : document : null
          }

          function S() {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return t.filter(function(e) {
                  return null != e
              }).join("--")
          }

          function C(e) {
              return !!(e && "[object Function]" == ({}).toString.call(e))
          }

          function j(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
              return r
          }

          function A() {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return (0, v.useCallback)(function(e) {
                  for (var n, r = function(e, t) {
                          var n;
                          if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                              if (Array.isArray(e) || (n = function(e, t) {
                                      if (e) {
                                          if ("string" == typeof e) return j(e, t);
                                          var n = Object.prototype.toString.call(e).slice(8, -1);
                                          if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(e, t)
                                      }
                                  }(e))) {
                                  n && (e = n);
                                  var r = 0;
                                  return function() {
                                      return r >= e.length ? {
                                          done: !0
                                      } : {
                                          done: !1,
                                          value: e[r++]
                                      }
                                  }
                              }
                              throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                          }
                          return (n = e[Symbol.iterator]()).next.bind(n)
                      }(t); !(n = r()).done;) ! function(e, t) {
                      if (null != e) {
                          if (C(e)) e(t);
                          else try {
                              e.current = t
                          } catch (n) {
                              throw Error('Cannot assign value "' + t + '" to ref "' + e + '"')
                          }
                      }
                  }(n.value, e)
              }, t)
          }

          function T(e, t) {
              return function(n) {
                  if (e && e(n), !n.defaultPrevented) return t(n)
              }
          }
          var M = n(3935),
              P = function(e) {
                  var t, n = e.children,
                      r = e.type,
                      i = void 0 === r ? "reach-portal" : r,
                      o = e.containerRef,
                      a = (0, v.useRef)(null),
                      s = (0, v.useRef)(null),
                      l = (t = (0, v.useState)(Object.create(null))[1], (0, v.useCallback)(function() {
                          t(Object.create(null))
                      }, []));
                  return b(function() {
                      if (a.current) {
                          var e = a.current.ownerDocument,
                              t = (null == o ? void 0 : o.current) || e.body;
                          return s.current = null == e ? void 0 : e.createElement(i), t.appendChild(s.current), l(),
                              function() {
                                  s.current && t && t.removeChild(s.current)
                              }
                      }
                  }, [i, l, o]), s.current ? (0, M.createPortal)(n, s.current) : (0, v.createElement)("span", {
                      ref: a
                  })
              };

          function R() {
              return (R = Object.assign || function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                  }
                  return e
              }).apply(this, arguments)
          }
          n(5697);
          var V = ["as", "style"],
              L = (0, v.forwardRef)(function(e, t) {
                  var n = e.as,
                      r = e.style,
                      i = function(e, t) {
                          if (null == e) return {};
                          var n, r, i = {},
                              o = Object.keys(e);
                          for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                          return i
                      }(e, V);
                  return (0, v.createElement)(void 0 === n ? "span" : n, R({
                      ref: t,
                      style: R({
                          border: 0,
                          clip: "rect(0 0 0 0)",
                          height: "1px",
                          margin: "-1px",
                          overflow: "hidden",
                          padding: 0,
                          position: "absolute",
                          width: "1px",
                          whiteSpace: "nowrap",
                          wordWrap: "normal"
                      }, void 0 === r ? {} : r)
                  }, i))
              }),
              $ = ["bottom", "height", "left", "right", "top", "width"],
              B = new Map,
              O = function e() {
                  var t = [];
                  B.forEach(function(e, n) {
                      var r, i, o = n.getBoundingClientRect();
                      r = o, i = e.rect, void 0 === r && (r = {}), void 0 === i && (i = {}), $.some(function(e) {
                          return r[e] !== i[e]
                      }) && (e.rect = o, t.push(e))
                  }), t.forEach(function(e) {
                      e.callbacks.forEach(function(t) {
                          return t(e.rect)
                      })
                  }), o = window.requestAnimationFrame(e)
              };

          function I(e, t, n) {
              "boolean" == typeof t ? r = t : (r = null == (a = null == t ? void 0 : t.observe) || a, i = null == t ? void 0 : t.onChange), C(n) && (i = n);
              var r, i, a, s = (0, v.useState)(e.current),
                  l = s[0],
                  u = s[1],
                  c = (0, v.useRef)(!1),
                  d = (0, v.useRef)(!1),
                  h = (0, v.useState)(null),
                  p = h[0],
                  f = h[1],
                  m = (0, v.useRef)(i);
              return b(function() {
                  m.current = i, e.current !== l && u(e.current)
              }), b(function() {
                  l && !c.current && (c.current = !0, f(l.getBoundingClientRect()))
              }, [l]), b(function() {
                  if (r) {
                      var t, n, i = l;
                      if (d.current || (d.current = !0, i = e.current), i) {
                          var a = (t = i, n = function(e) {
                              null == m.current || m.current(e), f(e)
                          }, {
                              observe: function() {
                                  var e = 0 === B.size;
                                  B.has(t) ? B.get(t).callbacks.push(n) : B.set(t, {
                                      rect: void 0,
                                      hasRectChanged: !1,
                                      callbacks: [n]
                                  }), e && O()
                              },
                              unobserve: function() {
                                  var e = B.get(t);
                                  if (e) {
                                      var r = e.callbacks.indexOf(n);
                                      r >= 0 && e.callbacks.splice(r, 1), e.callbacks.length || B.delete(t), B.size || cancelAnimationFrame(o)
                                  }
                              }
                          });
                          return a.observe(),
                              function() {
                                  a.unobserve()
                              }
                      }
                  }
              }, [r, l, e]), p
          }

          function D() {
              return (D = Object.assign || function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                  }
                  return e
              }).apply(this, arguments)
          }

          function F(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                  o = Object.keys(e);
              for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
          }
          var z = ["label", "ariaLabel", "isVisible", "id"],
              G = ["ariaLabel", "aria-label", "as", "id", "isVisible", "label", "position", "style", "triggerRect"],
              W = ["type"];
          (r = h || (h = {})).Idle = "IDLE", r.Focused = "FOCUSED", r.Visible = "VISIBLE", r.LeavingVisible = "LEAVING_VISIBLE", r.Dismissed = "DISMISSED", (i = p || (p = {})).Blur = "BLUR", i.Focus = "FOCUS", i.GlobalMouseMove = "GLOBAL_MOUSE_MOVE", i.MouseDown = "MOUSE_DOWN", i.MouseEnter = "MOUSE_ENTER", i.MouseLeave = "MOUSE_LEAVE", i.MouseMove = "MOUSE_MOVE", i.Rest = "REST", i.SelectWithKeyboard = "SELECT_WITH_KEYBOARD", i.TimeComplete = "TIME_COMPLETE";
          var _ = {
                  initial: h.Idle,
                  states: ((d = {})[h.Idle] = {
                      enter: H,
                      on: ((a = {})[p.MouseEnter] = h.Focused, a[p.Focus] = h.Visible, a)
                  }, d[h.Focused] = {
                      enter: function() {
                          window.clearTimeout(f), f = window.setTimeout(function() {
                              X({
                                  type: p.Rest
                              })
                          }, 100)
                      },
                      leave: function() {
                          window.clearTimeout(f)
                      },
                      on: ((s = {})[p.MouseMove] = h.Focused, s[p.MouseLeave] = h.Idle, s[p.MouseDown] = h.Dismissed, s[p.Blur] = h.Idle, s[p.Rest] = h.Visible, s)
                  }, d[h.Visible] = {
                      on: ((l = {})[p.Focus] = h.Focused, l[p.MouseEnter] = h.Focused, l[p.MouseLeave] = h.LeavingVisible, l[p.Blur] = h.LeavingVisible, l[p.MouseDown] = h.Dismissed, l[p.SelectWithKeyboard] = h.Dismissed, l[p.GlobalMouseMove] = h.LeavingVisible, l)
                  }, d[h.LeavingVisible] = {
                      enter: function() {
                          window.clearTimeout(m), m = window.setTimeout(function() {
                              return X({
                                  type: p.TimeComplete
                              })
                          }, 500)
                      },
                      leave: function() {
                          window.clearTimeout(m), H()
                      },
                      on: ((u = {})[p.MouseEnter] = h.Visible, u[p.Focus] = h.Visible, u[p.TimeComplete] = h.Idle, u)
                  }, d[h.Dismissed] = {
                      leave: function() {
                          H()
                      },
                      on: ((c = {})[p.MouseLeave] = h.Idle, c[p.Blur] = h.Idle, c)
                  }, d)
              },
              N = {
                  value: _.initial,
                  context: {
                      id: null
                  }
              },
              U = [];

          function H() {
              N.context.id = null
          }
          var Z = (0, v.forwardRef)(function(e, t) {
                  var n = e.label,
                      r = e.ariaLabel,
                      i = e.isVisible,
                      o = e.id,
                      a = F(e, z);
                  return i ? (0, v.createElement)(P, null, (0, v.createElement)(q, D({
                      ref: t,
                      label: n,
                      "aria-label": r,
                      isVisible: i
                  }, a, {
                      id: S("tooltip", String(o))
                  }))) : null
              }),
              q = (0, v.forwardRef)(function(e, t) {
                  var n = e.ariaLabel,
                      r = e["aria-label"],
                      i = e.as,
                      o = e.id,
                      a = e.isVisible,
                      s = e.label,
                      l = e.position,
                      u = e.style,
                      c = e.triggerRect,
                      d = F(e, G),
                      h = null != (r || n),
                      p = (0, v.useRef)(null),
                      f = A(t, p),
                      m = I(p, {
                          observe: a
                      });
                  return (0, v.createElement)(v.Fragment, null, (0, v.createElement)(void 0 === i ? "div" : i, D({
                      role: h ? void 0 : "tooltip"
                  }, d, {
                      ref: f,
                      "data-reach-tooltip": "",
                      id: h ? void 0 : o,
                      style: D({}, u, m ? (void 0 === l ? Y : l)(c, m) : {
                          visibility: "hidden"
                      })
                  }), s), h && (0, v.createElement)(L, {
                      role: "tooltip",
                      id: o
                  }, r || n))
              }),
              Y = function(e, t, n) {
                  void 0 === n && (n = 8);
                  var r, i, o, a, s = (a = (o = E(void 0)).defaultView || window, o ? {
                          width: null != (r = o.documentElement.clientWidth) ? r : a.innerWidth,
                          height: null != (i = o.documentElement.clientHeight) ? i : a.innerHeight
                      } : {
                          width: 0,
                          height: 0
                      }),
                      l = s.width,
                      u = s.height;
                  if (!e || !t) return {};
                  var c = {
                          top: e.top - t.height < 0,
                          right: l < e.left + t.width,
                          bottom: u < e.bottom + t.height + n,
                          left: e.left - t.width < 0
                      },
                      d = c.right && !c.left,
                      h = c.bottom && !c.top;
                  return {
                      left: d ? e.right - t.width + window.pageXOffset + "px" : e.left + window.pageXOffset + "px",
                      top: h ? e.top - n - t.height + window.pageYOffset + "px" : e.top + n + e.height + window.pageYOffset + "px"
                  }
              };

          function X(e) {
              var t = function(e, t) {
                      var n = _.states[e.value],
                          r = n && n.on && n.on[t.type];
                      if (!r) return D({}, e, {
                          changed: !1
                      });
                      n && n.leave && n.leave(e.context, t), t.type;
                      var i = F(t, W),
                          o = D({}, N.context, i),
                          a = "string" == typeof r ? r : r.target,
                          s = _.states[a];
                      return s && s.enter && s.enter(e.context, t), {
                          value: a,
                          context: o,
                          changed: !0
                      }
                  }(N, e),
                  n = t.value,
                  r = t.context;
              t.changed && (N = {
                  value: n,
                  context: r
              }, U.forEach(function(e) {
                  return e(N)
              }))
          }

          function K(e, t) {
              return N.context.id === e && (t ? N.value === h.Visible : N.value === h.Visible || N.value === h.LeavingVisible)
          }
          var J = n(566),
              Q = n(5820),
              ee = n(6615);
          let et = (0, J.E)(Z),
              en = (0, ee.zo)(et, {
                  position: "absolute",
                  padding: "4px 8px",
                  boxShadow: "$tooltip",
                  color: "$gray11",
                  fontFamily: "$body",
                  fontSize: "12px",
                  background: "white",
                  borderRadius: "6px",
                  border: "1px solid $grayA4",
                  backgroundClip: "padding-box",
                  zIndex: "1337",
                  pointerEvents: "none",
                  wordBreak: "break-word",
                  ".dark &": {
                      background: "$gray2"
                  }
              });

          function er(e) {
              var t, n, r, i, o, a, s;
              let {
                  children: l,
                  debug: u,
                  ...c
              } = e, [d, f, m] = function(e) {
                  var t, n, r, i, o, a, s, l, u = void 0 === e ? {} : e,
                      c = u.id,
                      d = u.onPointerEnter,
                      f = u.onPointerMove,
                      m = u.onPointerLeave,
                      g = u.onPointerDown,
                      y = u.onMouseEnter,
                      w = u.onMouseMove,
                      C = u.onMouseLeave,
                      j = u.onMouseDown,
                      M = u.onFocus,
                      P = u.onBlur,
                      R = u.onKeyDown,
                      V = u.disabled,
                      L = u.ref,
                      $ = u.DEBUG_STYLE,
                      B = String((o = c || (x ? k() : null), s = (a = (0, v.useState)(o))[0], l = a[1], b(function() {
                          null === s && l(k())
                      }, []), (0, v.useEffect)(function() {
                          !1 === x && (x = !0)
                      }, []), null != s ? String(s) : void 0)),
                      O = (0, v.useState)(!!$ || K(B, !0)),
                      D = O[0],
                      F = O[1],
                      z = (0, v.useRef)(null),
                      G = A(L, z),
                      W = I(z, {
                          observe: D
                      });

                  function _(e, t) {
                      return "undefined" != typeof window && "PointerEvent" in window ? e : T(e, t)
                  }

                  function H(e) {
                      return function(t) {
                          "mouse" === t.pointerType && e(t)
                      }
                  }

                  function Z() {
                      X({
                          type: p.MouseEnter,
                          id: B
                      })
                  }

                  function q() {
                      X({
                          type: p.MouseMove,
                          id: B
                      })
                  }

                  function Y() {
                      X({
                          type: p.MouseLeave
                      })
                  }

                  function J() {
                      N.context.id === B && X({
                          type: p.MouseDown
                      })
                  }
                  return (0, v.useEffect)(function() {
                      var e;
                      return e = function() {
                              F(K(B))
                          }, U.push(e),
                          function() {
                              U.splice(U.indexOf(e), 1)
                          }
                  }, [B]), (0, v.useEffect)(function() {
                      var e = E(z.current);

                      function t(e) {
                          ("Escape" === e.key || "Esc" === e.key) && N.value === h.Visible && X({
                              type: p.SelectWithKeyboard
                          })
                      }
                      return e.addEventListener("keydown", t),
                          function() {
                              return e.removeEventListener("keydown", t)
                          }
                  }, []), n = (t = {
                      disabled: V,
                      isVisible: D,
                      ref: z
                  }).disabled, r = t.isVisible, i = t.ref, (0, v.useEffect)(function() {
                      if ("undefined" != typeof window && "PointerEvent" in window && n && r) {
                          var e = E(i.current);
                          return e.addEventListener("mousemove", t),
                              function() {
                                  e.removeEventListener("mousemove", t)
                              }
                      }

                      function t(e) {
                          !r || e.target instanceof Element && e.target.closest("[data-reach-tooltip-trigger][data-state='tooltip-visible']") || X({
                              type: p.GlobalMouseMove
                          })
                      }
                  }, [n, r, i]), [{
                      "aria-describedby": D ? S("tooltip", B) : void 0,
                      "data-state": D ? "tooltip-visible" : "tooltip-hidden",
                      "data-reach-tooltip-trigger": "",
                      ref: G,
                      onPointerEnter: T(d, H(Z)),
                      onPointerMove: T(f, H(q)),
                      onPointerLeave: T(m, H(Y)),
                      onPointerDown: T(g, H(J)),
                      onMouseEnter: _(y, Z),
                      onMouseMove: _(w, q),
                      onMouseLeave: _(C, Y),
                      onMouseDown: _(j, J),
                      onFocus: T(M, function() {
                          window.__REACH_DISABLE_TOOLTIPS || X({
                              type: p.Focus,
                              id: B
                          })
                      }),
                      onBlur: T(P, function() {
                          N.context.id === B && X({
                              type: p.Blur
                          })
                      }),
                      onKeyDown: T(R, function(e) {
                          ("Enter" === e.key || " " === e.key) && X({
                              type: p.SelectWithKeyboard
                          })
                      })
                  }, {
                      id: B,
                      triggerRect: W,
                      isVisible: D
                  }, D]
              }({
                  onMouseEnter: null == l ? void 0 : null === (t = l.props) || void 0 === t ? void 0 : t.onMouseEnter,
                  onMouseMove: null == l ? void 0 : null === (n = l.props) || void 0 === n ? void 0 : n.onMouseMove,
                  onMouseDown: null == l ? void 0 : null === (r = l.props) || void 0 === r ? void 0 : r.onMouseDown,
                  onMouseLeave: null == l ? void 0 : null === (i = l.props) || void 0 === i ? void 0 : i.onMouseLeave,
                  onFocus: null == l ? void 0 : null === (o = l.props) || void 0 === o ? void 0 : o.onFocus,
                  onBlur: null == l ? void 0 : null === (a = l.props) || void 0 === a ? void 0 : a.onBlur,
                  onKeyDown: null == l ? void 0 : null === (s = l.props) || void 0 === s ? void 0 : s.onKeyDown,
                  ref: null == l ? void 0 : l.ref,
                  DEBUG_STYLE: u
              });
              return (0, g.jsxs)(g.Fragment, {
                  children: [v.cloneElement(l, d), (0, g.jsx)(Q.M, {
                      children: m && (0, g.jsx)(en, {
                          initial: {
                              opacity: 0,
                              y: 4
                          },
                          animate: {
                              opacity: 1,
                              y: 0
                          },
                          exit: {
                              opacity: 0,
                              y: 4
                          },
                          transition: {
                              duration: .15
                          },
                          position: ei,
                          ...f,
                          ...c
                      })
                  })]
              })
          }

          function ei(e, t) {
              if (!e || !t) return {};
              let n = {
                  top: e.top - t.height < 0,
                  right: window.innerWidth < e.left + t.width,
                  bottom: window.innerHeight < e.bottom + t.height,
                  left: e.left + e.width - t.width < 0
              };
              return {
                  left: n.left && !n.right ? e.left + window.pageXOffset : n.right && !n.left ? e.right + window.pageXOffset - t.width : e.right - t.width + (t.width / 2 - e.width / 2) + window.pageXOffset,
                  top: n.top ? e.top + 8 + e.height + window.pageYOffset : e.top - 8 - t.height + window.pageYOffset
              }
          }
      },
      2905: function(e, t, n) {
          "use strict";
          n.d(t, {
              z: function() {
                  return i
              }
          });
          var r = n(7294);

          function i(e, t) {
              let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
              r.useEffect(() => (window.addEventListener(e, t), () => {
                  window.removeEventListener(e, t)
              }), n)
          }
      },
      8448: function(e, t, n) {
          "use strict";
          n.d(t, {
              a: function() {
                  return i
              }
          });
          var r = n(7294);

          function i(e) {
              let t = e => window.matchMedia(e).matches,
                  [n, i] = (0, r.useState)(t(e));

              function o() {
                  i(t(e))
              }
              return (0, r.useEffect)(() => {
                  let t = window.matchMedia(e);
                  return o(), t.addListener ? t.addListener(o) : t.addEventListener("change", o), () => {
                      t.removeListener ? t.removeListener(o) : t.removeEventListener("change", o)
                  }
              }, [e]), n
          }
      },
      2896: function(e, t, n) {
          "use strict";
          n.d(t, {
              D: function() {
                  return a
              }
          });
          var r = n(7294),
              i = {};
          let o = function(e, t) {
              if (void 0 === t && (t = void 0 !== n.g && n.g.localStorage ? n.g.localStorage : "undefined" != typeof globalThis && globalThis.localStorage ? globalThis.localStorage : "undefined" != typeof window && window.localStorage ? window.localStorage : "undefined" != typeof localStorage ? localStorage : null), t) {
                  var o, a = (o = t, {
                      get: function(e, t) {
                          var n = o.getItem(e);
                          return null == n ? "function" == typeof t ? t() : t : JSON.parse(n)
                      },
                      set: function(e, t) {
                          o.setItem(e, JSON.stringify(t))
                      }
                  });
                  return function(t) {
                      var o, s, l, u, c, d, h, p, f, m, g, v, y, b, x;
                      return o = a.get, s = a.set, l = (0, r.useRef)(null), c = (u = (0, r.useState)(function() {
                          return o(e, t)
                      }))[0], d = u[1], h = "storage", p = function(t) {
                          if (t.key === e) {
                              var n = JSON.parse(t.newValue);
                              c !== n && d(n)
                          }
                      }, void 0 === f && (f = n.g), void 0 === m && (m = {}), g = (0, r.useRef)(), v = m.capture, y = m.passive, b = m.once, (0, r.useEffect)(function() {
                          g.current = p
                      }, [p]), (0, r.useEffect)(function() {
                          if (f && f.addEventListener) {
                              var e = function(e) {
                                      return g.current(e)
                                  },
                                  t = {
                                      capture: v,
                                      passive: y,
                                      once: b
                                  };
                              return f.addEventListener(h, e, t),
                                  function() {
                                      f.removeEventListener(h, e, t)
                                  }
                          }
                      }, [h, f, v, y, b]), (0, r.useEffect)(function() {
                          return l.current = (i[e] || (i[e] = {
                                  callbacks: [],
                                  value: t
                              }), i[e].callbacks.push(d), {
                                  deregister: function() {
                                      var t = i[e].callbacks,
                                          n = t.indexOf(d);
                                      n > -1 && t.splice(n, 1)
                                  },
                                  emit: function(t) {
                                      i[e].value !== t && (i[e].value = t, i[e].callbacks.forEach(function(e) {
                                          d !== e && e(t)
                                      }))
                                  }
                              }),
                              function() {
                                  l.current.deregister()
                              }
                      }, [t, e]), x = (0, r.useCallback)(function(t) {
                          var n = "function" == typeof t ? t(c) : t;
                          s(e, n), d(n), l.current.emit(t)
                      }, [c, s, e]), [c, x]
                  }
              }
              return r.useState
          }("__sound_enabled__");

          function a() {
              let [e, t] = o(!0);
              return [e, function() {
                  t(!e)
              }]
          }
      },
      9660: function(e, t, n) {
          "use strict";
          n.d(t, {
              c: function() {
                  return l
              }
          });
          var r = n(7294);

          function i() {
              return (i = Object.assign || function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                  }
                  return e
              }).apply(this, arguments)
          }
          
          function l(e, t) {
              return 0
          }
      },
      9150: function(e, t, n) {
          "use strict";
          n.r(t), n.d(t, {
              default: function() {
                  return eI
              }
          });
          var r = n(5893),
              i = n(7294);
          n(1460);
          var o = n(9008),
              a = n.n(o),
              s = n(3694),
              l = n(5883);
          let u = {
              logo: (0, r.jsx)("svg", {
                  width: "51.715",
                  height: "70",
                  viewBox: "0 0 51.715 70",
                  fill: "white",
                  children: (0, r.jsx)("g", {
                      transform: "translate(-385 388)",
                      children: (0, r.jsxs)("g", {
                          transform: "translate(-140 -77)",
                          children: [(0, r.jsx)("rect", {
                              width: "21",
                              height: "70",
                              transform: "translate(525 -311)"
                          }), (0, r.jsx)("circle", {
                              cx: "20",
                              cy: "20",
                              r: "20",
                              transform: "translate(525 -311)"
                          }), (0, r.jsx)("path", {
                              d: "M34.263,78.811H2.548V47.1L34.262,78.81Z",
                              transform: "translate(542.452 -319.811)"
                          })]
                      })
                  })
              }),
              logo2: (0, r.jsxs)("svg", {
                  width: "51.715",
                  height: "70",
                  viewBox: "0 0 51.715 70",
                  children: [(0, r.jsx)("defs", {
                      children: (0, r.jsxs)("linearGradient", {
                          id: "linear-gradient",
                          x1: "1.199",
                          y1: "1.722",
                          x2: "-0.068",
                          y2: "0.034",
                          gradientUnits: "objectBoundingBox",
                          children: [(0, r.jsx)("stop", {
                              id: "stopGradient",
                              offset: "0",
                              stopColor: "#4e4e4e"
                          }), (0, r.jsx)("stop", {
                              offset: "1",
                              stopColor: "#fff"
                          })]
                      })
                  }), (0, r.jsx)("g", {
                      id: "Group_2",
                      "data-name": "Group 2",
                      transform: "translate(-385 388)",
                      children: (0, r.jsxs)("g", {
                          id: "Group_1",
                          "data-name": "Group 1",
                          transform: "translate(-140 -77)",
                          children: [(0, r.jsx)("path", {
                              id: "Subtraction_1",
                              "data-name": "Subtraction 1",
                              d: "M34.263,78.811H2.548V47.1L34.262,78.81Z",
                              transform: "translate(542.452 -319.811)",
                              fill: "url(#linear-gradient)"
                          }), (0, r.jsx)("circle", {
                              id: "Ellipse_1",
                              "data-name": "Ellipse 1",
                              cx: "20",
                              cy: "20",
                              r: "20",
                              transform: "translate(525 -311)",
                              fill: "url(#linear-gradient)"
                          }), (0, r.jsx)("rect", {
                              id: "Rectangle_1",
                              "data-name": "Rectangle 1",
                              width: "21",
                              height: "70",
                              transform: "translate(525 -311)",
                              fill: "url(#linear-gradient)"
                          })]
                      })
                  })]
              }),
              twitter: (0, r.jsxs)("svg", {
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "currentColor",
                  children: [(0, r.jsx)("path", {
                      fill: "none",
                      d: "M0 0h24v24H0z"
                  }), (0, r.jsx)("path", {
                      d: "M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                  })]
              }),
              github: (0, r.jsxs)("svg", {
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "currentColor",
                  children: [(0, r.jsx)("path", {
                      fill: "none",
                      d: "M0 0h24v24H0z"
                  }), (0, r.jsx)("path", {
                      d: "M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                  })]
              }),
              linkedin: (0, r.jsxs)("svg", {
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "currentColor",
                  children: [(0, r.jsx)("path", {
                      fill: "none",
                      d: "M0 0h24v24H0z"
                  }), (0, r.jsx)("path", {
                      d: "M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                  })]
              }),
              mail: (0, r.jsx)("svg", {
                  viewBox: "0 0 24 24",
                  children: (0, r.jsxs)("g", {
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: [(0, r.jsx)("path", {
                          d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      }), (0, r.jsx)("polyline", {
                          points: "22,6 12,13 2,6"
                      })]
                  })
              }),
              help: (0, r.jsxs)("svg", {
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "currentColor",
                  children: [(0, r.jsx)("path", {
                      fill: "none",
                      d: "M0 0h24v24H0z"
                  }), (0, r.jsx)("path", {
                      d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm2-1.645A3.502 3.502 0 0 0 12 6.5a3.501 3.501 0 0 0-3.433 2.813l1.962.393A1.5 1.5 0 1 1 12 11.5a1 1 0 0 0-1 1V14h2v-.645z"
                  })]
              })
          };

          function c(e) {
              let {
                  name: t,
                  size: n,
                  ...r
              } = e;
              return i.cloneElement(u[t], {
                  ...n && {
                      width: n,
                      height: n
                  },
                  ...r
              })
          }
          var d = n(4002),
              h = n(578),
              p = n(566),
              f = n(425);
          let m = {
                  mass: 3,
                  damping: 35,
                  stiffness: 250
              },
              g = {
                  dark: {
                      rotate: 40,
                      r: 9,
                      cx: 50,
                      cy: 23,
                      opacity: 0
                  },
                  light: {
                      rotate: 90,
                      r: 5,
                      cx: 100,
                      cy: 0,
                      opacity: 1
                  }
              },
              v = i.forwardRef(function() {
                  let {
                      resolvedTheme: e
                  } = (0, f.F)(), [t, n] = i.useState(!1), o = "dark" === e ? "dark" : "light";
                  i.useEffect(() => n(!0), []);
                  let a = (0, d.q)(g[o].rotate, m),
                      s = (0, d.q)(g[o].r, m),
                      l = (0, d.q)(g[o].cx, m),
                      u = (0, d.q)(g[o].cy, m),
                      c = (0, h.H)(l, e => "".concat(e, "%")),
                      v = (0, h.H)(u, e => "".concat(e, "%")),
                      y = (0, d.q)(g[o].opacity, m);
                  return (i.useEffect(() => {
                      a.set(g[o].rotate), s.set(g[o].r), l.set(g[o].cx), u.set(g[o].cy), y.set(g[o].opacity)
                  }, [e]), t) ? (0, r.jsxs)(p.E.svg, {
                      width: "48",
                      height: "48",
                      viewBox: "0 0 24 24",
                      color: "var(--colors-gray10)",
                      fill: "none",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      stroke: "currentColor",
                      style: {
                          rotate: a
                      },
                      children: [(0, r.jsxs)("mask", {
                          id: "myMask2",
                          children: [(0, r.jsx)("rect", {
                              x: "0",
                              y: "0",
                              width: "100%",
                              height: "100%",
                              fill: "white"
                          }), (0, r.jsx)(p.E.circle, {
                              style: {
                                  cx: c,
                                  cy: v
                              },
                              r: "9",
                              fill: "black"
                          })]
                      }), (0, r.jsx)(p.E.circle, {
                          cx: "12",
                          cy: "12",
                          fill: "var(--colors-gray10)",
                          style: {
                              r: s
                          },
                          mask: "url(#myMask2)"
                      }), (0, r.jsxs)(p.E.g, {
                          stroke: "currentColor",
                          style: {
                              opacity: y
                          },
                          children: [(0, r.jsx)("line", {
                              x1: "12",
                              y1: "1",
                              x2: "12",
                              y2: "3"
                          }), (0, r.jsx)("line", {
                              x1: "12",
                              y1: "21",
                              x2: "12",
                              y2: "23"
                          }), (0, r.jsx)("line", {
                              x1: "4.22",
                              y1: "4.22",
                              x2: "5.64",
                              y2: "5.64"
                          }), (0, r.jsx)("line", {
                              x1: "18.36",
                              y1: "18.36",
                              x2: "19.78",
                              y2: "19.78"
                          }), (0, r.jsx)("line", {
                              x1: "1",
                              y1: "12",
                              x2: "3",
                              y2: "12"
                          }), (0, r.jsx)("line", {
                              x1: "21",
                              y1: "12",
                              x2: "23",
                              y2: "12"
                          }), (0, r.jsx)("line", {
                              x1: "4.22",
                              y1: "19.78",
                              x2: "5.64",
                              y2: "18.36"
                          }), (0, r.jsx)("line", {
                              x1: "18.36",
                              y1: "5.64",
                              x2: "19.78",
                              y2: "4.22"
                          })]
                      })]
                  }) : null
              });
          var y = n(2896),
              b = n(9660),
              x = n(6615);
          let w = (0, x.F4)({
              "0%": {
                  transform: "rotate(0deg)"
              },
              "25%": {
                  transform: "rotate(15deg)"
              },
              "50%": {
                  transform: "rotate(-13deg)"
              },
              "75%": {
                  transform: "rotate(12deg)"
              },
              "100%": {
                  transform: "rotate(0deg)"
              }
          });

          function k() {
              let [e, t] = i.useState(!1), [n, o] = i.useState(!1), [a, s] = (0, y.D)(), u = (0, b.c)("/static/enable-sound.mp3", {
                  volume: .1
              }), c = (0, b.c)("/static/disable-sound.mp3", {
                  volume: .1
              });
              return (i.useEffect(() => t(!0), []), e) ? (0, r.jsx)(eC, {
                  label: "Toggle sound",
                  css: {
                      "@mobile": {
                          display: "none"
                      },
                      "@touch": {
                          display: "none"
                      }
                  },
                  onClick: () => {
                      o(!0), a ? c() : u(), s()
                  },
                  children: (0, r.jsxs)("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 18 18",
                      fill: "none",
                      children: [(0, r.jsx)(l.x, {
                          as: "path",
                          d: "M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z",
                          fill: "currentColor",
                          css: {
                              animation: a && n ? "".concat(w, " 350ms ease") : "none",
                              transformOrigin: "30% center"
                          }
                      }), (0, r.jsx)(l.x, {
                          as: "path",
                          d: " M14.3025 3.69751 C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001 C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025 ",
                          css: {
                              stroke: "$gray11",
                              transition: "opacity 200ms ease",
                              transitionDelay: a ? "150ms" : "0ms",
                              opacity: a ? 1 : 0
                          }
                      }), (0, r.jsx)(l.x, {
                          as: "path",
                          d: " M11.655 6.34501 C12.358 7.04824 12.753 8.00189 12.753 8.99626 C12.753 9.99063 12.358 10.9443 11.655 11.6475 ",
                          css: {
                              stroke: "$gray10",
                              transition: "opacity 200ms ease",
                              transitionDelay: a ? "0ms" : "150ms",
                              opacity: a ? 1 : 0
                          }
                      })]
                  })
              }) : (0, r.jsx)(eC, {
                  children: (0, r.jsx)("div", {})
              })
          }
          var E = n(8696),
              S = n(5820);
          let C = (e, t, n) => {
                  let r = t - e;
                  return 0 === r ? 1 : (n - e) / r
              },
              j = (e, t, n) => -n * e + n * t + e,
              A = (e, t) => n => Math.max(Math.min(n, t), e),
              T = e => e % 1 ? Number(e.toFixed(5)) : e,
              M = /(-)?([\d]*\.?[\d])+/g,
              P = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
              R = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

          function V(e) {
              return "string" == typeof e
          }
          let L = {
                  test: e => "number" == typeof e,
                  parse: parseFloat,
                  transform: e => e
              },
              $ = Object.assign(Object.assign({}, L), {
                  transform: A(0, 1)
              });
          Object.assign(Object.assign({}, L), {
              default: 1
          });
          let B = (e, t) => n => !!(V(n) && R.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
              O = (e, t, n) => r => {
                  if (!V(r)) return r;
                  let [i, o, a, s] = r.match(M);
                  return {
                      [e]: parseFloat(i),
                      [t]: parseFloat(o),
                      [n]: parseFloat(a),
                      alpha: void 0 !== s ? parseFloat(s) : 1
                  }
              },
              I = A(0, 255),
              D = Object.assign(Object.assign({}, L), {
                  transform: e => Math.round(I(e))
              }),
              F = {
                  test: B("rgb", "red"),
                  parse: O("red", "green", "blue"),
                  transform: ({
                      red: e,
                      green: t,
                      blue: n,
                      alpha: r = 1
                  }) => "rgba(" + D.transform(e) + ", " + D.transform(t) + ", " + D.transform(n) + ", " + T($.transform(r)) + ")"
              },
              z = {
                  test: B("#"),
                  parse: function(e) {
                      let t = "",
                          n = "",
                          r = "",
                          i = "";
                      return e.length > 5 ? (t = e.substr(1, 2), n = e.substr(3, 2), r = e.substr(5, 2), i = e.substr(7, 2)) : (t = e.substr(1, 1), n = e.substr(2, 1), r = e.substr(3, 1), i = e.substr(4, 1), t += t, n += n, r += r, i += i), {
                          red: parseInt(t, 16),
                          green: parseInt(n, 16),
                          blue: parseInt(r, 16),
                          alpha: i ? parseInt(i, 16) / 255 : 1
                      }
                  },
                  transform: F.transform
              },
              G = e => ({
                  test: t => V(t) && t.endsWith(e) && 1 === t.split(" ").length,
                  parse: parseFloat,
                  transform: t => `${t}${e}`
              });
          G("deg");
          let W = G("%");
          G("px"), G("vh"), G("vw"), Object.assign(Object.assign({}, W), {
              parse: e => W.parse(e) / 100,
              transform: e => W.transform(100 * e)
          });
          let _ = {
              test: B("hsl", "hue"),
              parse: O("hue", "saturation", "lightness"),
              transform: ({
                  hue: e,
                  saturation: t,
                  lightness: n,
                  alpha: r = 1
              }) => "hsla(" + Math.round(e) + ", " + W.transform(T(t)) + ", " + W.transform(T(n)) + ", " + T($.transform(r)) + ")"
          };
          var N = n(4394);

          function U(e, t, n) {
              return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
          }

          function H({
              hue: e,
              saturation: t,
              lightness: n,
              alpha: r
          }) {
              e /= 360, n /= 100;
              let i = 0,
                  o = 0,
                  a = 0;
              if (t /= 100) {
                  let r = n < .5 ? n * (1 + t) : n + t - n * t,
                      s = 2 * n - r;
                  i = U(s, r, e + 1 / 3), o = U(s, r, e), a = U(s, r, e - 1 / 3)
              } else i = o = a = n;
              return {
                  red: Math.round(255 * i),
                  green: Math.round(255 * o),
                  blue: Math.round(255 * a),
                  alpha: r
              }
          }
          let Z = (e, t, n) => {
                  let r = e * e;
                  return Math.sqrt(Math.max(0, n * (t * t - r) + r))
              },
              q = [z, F, _],
              Y = e => q.find(t => t.test(e)),
              X = e => `'${e}' is not an animatable color. Use the equivalent color code instead.`,
              K = (e, t) => {
                  let n = Y(e),
                      r = Y(t);
                  (0, N.k)(!!n, X(e)), (0, N.k)(!!r, X(t));
                  let i = n.parse(e),
                      o = r.parse(t);
                  n === _ && (i = H(i), n = F), r === _ && (o = H(o), r = F);
                  let a = Object.assign({}, i);
                  return e => {
                      for (let t in a) "alpha" !== t && (a[t] = Z(i[t], o[t], e));
                      return a.alpha = j(i.alpha, o.alpha, e), n.transform(a)
                  }
              },
              J = {
                  test: e => F.test(e) || z.test(e) || _.test(e),
                  parse: e => F.test(e) ? F.parse(e) : _.test(e) ? _.parse(e) : z.parse(e),
                  transform: e => V(e) ? e : e.hasOwnProperty("red") ? F.transform(e) : _.transform(e)
              },
              Q = "${c}",
              ee = "${n}";

          function et(e) {
              "number" == typeof e && (e = `${e}`);
              let t = [],
                  n = 0,
                  r = e.match(P);
              r && (n = r.length, e = e.replace(P, Q), t.push(...r.map(J.parse)));
              let i = e.match(M);
              return i && (e = e.replace(M, ee), t.push(...i.map(L.parse))), {
                  values: t,
                  numColors: n,
                  tokenised: e
              }
          }

          function en(e) {
              return et(e).values
          }

          function er(e) {
              let {
                  values: t,
                  numColors: n,
                  tokenised: r
              } = et(e), i = t.length;
              return e => {
                  let t = r;
                  for (let r = 0; r < i; r++) t = t.replace(r < n ? Q : ee, r < n ? J.transform(e[r]) : T(e[r]));
                  return t
              }
          }
          let ei = e => "number" == typeof e ? 0 : e,
              eo = {
                  test: function(e) {
                      var t, n, r, i;
                      return isNaN(e) && V(e) && (null !== (n = null === (t = e.match(M)) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) + (null !== (i = null === (r = e.match(P)) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0) > 0
                  },
                  parse: en,
                  createTransformer: er,
                  getAnimatableNone: function(e) {
                      let t = en(e),
                          n = er(e);
                      return n(t.map(ei))
                  }
              },
              ea = e => "number" == typeof e,
              es = (e, t) => n => t(e(n)),
              el = (...e) => e.reduce(es);

          function eu(e, t) {
              return ea(e) ? n => j(e, t, n) : J.test(e) ? K(e, t) : ep(e, t)
          }
          let ec = (e, t) => {
                  let n = [...e],
                      r = n.length,
                      i = e.map((e, n) => eu(e, t[n]));
                  return e => {
                      for (let t = 0; t < r; t++) n[t] = i[t](e);
                      return n
                  }
              },
              ed = (e, t) => {
                  let n = Object.assign(Object.assign({}, e), t),
                      r = {};
                  for (let i in n) void 0 !== e[i] && void 0 !== t[i] && (r[i] = eu(e[i], t[i]));
                  return e => {
                      for (let t in r) n[t] = r[t](e);
                      return n
                  }
              };

          function eh(e) {
              let t = eo.parse(e),
                  n = t.length,
                  r = 0,
                  i = 0,
                  o = 0;
              for (let e = 0; e < n; e++) r || "number" == typeof t[e] ? r++ : void 0 !== t[e].hue ? o++ : i++;
              return {
                  parsed: t,
                  numNumbers: r,
                  numRGB: i,
                  numHSL: o
              }
          }
          let ep = (e, t) => {
                  let n = eo.createTransformer(t),
                      r = eh(e),
                      i = eh(t),
                      o = r.numHSL === i.numHSL && r.numRGB === i.numRGB && r.numNumbers >= i.numNumbers;
                  return o ? el(ec(r.parsed, i.parsed), n) : ((0, N.K)(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?t:e}`)
              },
              ef = (e, t, n) => Math.min(Math.max(n, e), t),
              em = (e, t) => n => j(e, t, n);
          var eg = n(1163),
              ev = n(2905),
              ey = n(9429),
              eb = n(1664),
              ex = n.n(eb);
          let ew = i.createContext(0),
              ek = () => i.useContext(ew),
              eE = (0, x.F4)({
                  "0%": {
                      opacity: 0,
                      transform: "translate(-50%, -50%) translateY(80px)"
                  },
                  "100%": {
                      opacity: 1,
                      transform: "translate(-50%, -50%) translateY(0)"
                  }
              });

          function eS() {
              let [e, t] = i.useState(!1), {
                  resolvedTheme: n,
                  setTheme: o
              } = (0, f.F)(), [a, s] = i.useState(null);
              return (0, eg.useRouter)(), (0, ev.z)("keydown", e => {
                  !ey.r8 || (0, ey.Qq)() || "d" !== e.key || t(e => !e)
              }), (0, r.jsxs)(l.x, {
                  id: "footer",
                  as: p.E.footer,
                  css: {
                      display: "flex",
                      ai: "flex-end",
                      width: "auto",
                      height: 58,
                      px: 8,
                      position: "fixed",
                      background: "#FFF",
                      boxShadow: "$large",
                      border: "1px solid $grayA4",
                      bottom: -8,
                      left: "50%",
                      borderRadius: 9999,
                      zIndex: 10,
                      transform: "translate(-50%, -50%) translateY(80px)",
                      animation: "".concat(eE, " 500ms ease forwards 200ms"),
                      ".dark &": {
                          background: "$gray1"
                      },
                      "@media (max-width: 430px)": {
                          width: "calc(100% - 69px)",
                          top: "unset",
                          bottom: 0
                      }
                  },
                  style: {
                      ...ey.r8 && {
                          visibility: e ? "hidden" : ""
                      }
                  },
                  onPointerMove: e => {
                      "mouse" === e.pointerType && s(e.clientX)
                  },
                  onPointerLeave: () => {
                      s(null)
                  },
                  children: [(0, r.jsx)(l.x, {
                      "aria-hidden": !0,
                      css: {
                          ".dark &": {
                              background: "linear-gradient(90deg,\n      rgba(0, 0, 0, 0),\n      $colors$gray6 20%,\n      $colors$gray10 67.19%,\n      rgba(0, 0, 0, 0))",
                              opacity: .2,
                              height: "1px",
                              position: "absolute",
                              top: -1,
                              width: "95%",
                              zIndex: "-1"
                          }
                      }
                  }), (0, r.jsx)(l.x, {
                      css: {
                          display: "flex",
                          ai: "flex-end",
                          gap: "8px",
                          width: "100%",
                          py: 8,
                          "@mobile": {
                              height: "72px",
                              overflowX: "auto",
                              overflowY: "hidden"
                          }
                      },
                      children: (0, r.jsxs)(ew.Provider, {
                          value: a,
                          children: [(0, r.jsx)(eC, {
                              href: "/",
                              label: "Home",
                              children: (0, r.jsx)(eT, {})
                          }), (0, r.jsx)(eC, {
                              href: "/craft",
                              label: "Craft",
                              children: (0, r.jsx)(eL, {})
                          }), (0, r.jsx)(eC, {
                              href: "/projects",
                              label: "Projects",
                              children: (0, r.jsx)(eM, {})
                          }), (0, r.jsx)(eC, {
                              href: "/photos",
                              label: "Photos",
                              children: (0, r.jsx)(eP, {})
                          }), (0, r.jsx)(eA, {}), (0, r.jsx)(eC, {
                              label: "Twitter",
                              href: "https://twitter.com/raunofreiberg",
                              children: (0, r.jsx)(eR, {})
                          }), (0, r.jsx)(eC, {
                              label: "GitHub",
                              href: "https://github.com/raunofreiberg",
                              children: (0, r.jsx)(c, {
                                  name: "github"
                              })
                          }), (0, r.jsx)(eC, {
                              label: "Mail",
                              href: "mailto:yo@rauno.me",
                              children: (0, r.jsx)(eV, {})
                          }), (0, r.jsx)(eA, {}), (0, r.jsx)(eC, {
                              label: "Toggle theme",
                              onClick: function() {
                                  o("dark" === n ? "light" : "dark")
                              },
                              children: (0, r.jsx)(v, {})
                          }), (0, r.jsx)(k, {})]
                      })
                  })]
              })
          }

          function eC(e) {
              let {
                  children: t,
                  href: n,
                  label: o,
                  onClick: a,
                  css: s,
                  ...u
              } = e, c = ek(), h = i.useRef(null), f = (0, eg.useRouter)(), [, m] = f.pathname.split("/"), g = [-240, -192, -120, 0, 120, 192, 240], v = [40, 44, 56.559999999999995, 80, 56.559999999999995, 44, 40], y = (0, d.q)(40, {
                  damping: 40,
                  stiffness: 500,
                  mass: 1
              }), b = (0, d.q)(0, {
                  damping: 19,
                  stiffness: 250
              });
              async function x() {
                  null == a || a(), b.set(window.innerWidth < 700 ? -20 : -40), setTimeout(() => {
                      b.set(0)
                  }, 300)
              }
              i.useEffect(() => {
                  let e = h.current;
                  if (!e) return;
                  let t = 241;
                  if (null !== c) {
                      let n = e.getBoundingClientRect(),
                          r = n.left + n.width / 2;
                      t = c - r
                  } else t = 241;
                  let n = (function(e, t, {
                      clamp: n = !0,
                      ease: r,
                      mixer: i
                  } = {}) {
                      let o = e.length;
                      (0, N.k)(o === t.length, "Both input and output ranges must be the same length"), (0, N.k)(!r || !Array.isArray(r) || r.length === o - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[o - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
                      let a = function(e, t, n) {
                              var r;
                              let i = [],
                                  o = n || ("number" == typeof(r = e[0]) ? em : "string" == typeof r ? J.test(r) ? K : ep : Array.isArray(r) ? ec : "object" == typeof r ? ed : void 0),
                                  a = e.length - 1;
                              for (let n = 0; n < a; n++) {
                                  let r = o(e[n], e[n + 1]);
                                  if (t) {
                                      let e = Array.isArray(t) ? t[n] : t;
                                      r = el(e, r)
                                  }
                                  i.push(r)
                              }
                              return i
                          }(t, r, i),
                          s = 2 === o ? function([e, t], [n]) {
                              return r => n(C(e, t, r))
                          }(e, a) : function(e, t) {
                              let n = e.length,
                                  r = n - 1;
                              return i => {
                                  let o = 0,
                                      a = !1;
                                  if (i <= e[0] ? a = !0 : i >= e[r] && (o = r - 1, a = !0), !a) {
                                      let t = 1;
                                      for (; t < n && !(e[t] > i) && t !== r; t++);
                                      o = t - 1
                                  }
                                  let s = C(e[o], e[o + 1], i);
                                  return t[o](s)
                              }
                          }(e, a);
                      return n ? t => s(ef(e[0], e[o - 1], t)) : s
                  })(g, v)(t);
                  y.set(n)
              }, [c]);
              let w = n ? e$ : p.E.button,
                  k = {
                      ...n && {
                          href: n,
                          ...n.startsWith("https") && {
                              target: "_blank",
                              rel: "noopener noreferrer"
                          }
                      }
                  };
              return (0, r.jsx)(E.u, {
                  label: o,
                  children: (0, r.jsx)(w, {
                      ref: h,
                      className: ej({
                          css: s
                      }),
                      style: {
                          width: y,
                          height: y,
                          top: b
                      },
                      "aria-label": o,
                      onMouseDown: () => {
                          b.set(8)
                      },
                      onMouseLeave: () => {
                          b.set(0)
                      },
                      onClick: x,
                      ...u,
                      ...k,
                      children: (0, r.jsxs)("div", {
                          "aria-hidden": !0,
                          style: {
                              display: "contents"
                          },
                          children: [(0, r.jsx)(l.x, {
                              css: {
                                  ".dark &": {
                                      background: "linear-gradient(90deg,\n      rgba(0, 0, 0, 0),\n      $colors$gray4 20%,\n      $colors$gray7 67.19%,\n      rgba(0, 0, 0, 0))",
                                      height: "1px",
                                      opacity: .8,
                                      position: "absolute",
                                      top: -1,
                                      size: "100%",
                                      br: 9999,
                                      zIndex: -1
                                  }
                              }
                          }), t, (0, r.jsx)(S.M, {
                              children: "/".concat(m) === n && (0, r.jsx)(l.x, {
                                  as: p.E.div,
                                  css: {
                                      background: "$gray7",
                                      position: "absolute",
                                      size: "4px",
                                      br: "$round",
                                      bottom: -6,
                                      zIndex: 1
                                  },
                                  initial: {
                                      opacity: 0
                                  },
                                  animate: {
                                      opacity: 1,
                                      transition: {
                                          delay: .2
                                      }
                                  },
                                  exit: {
                                      opacity: 0
                                  },
                                  transition: {
                                      duration: .2
                                  }
                              })
                          })]
                      })
                  })
              })
          }
          let ej = (0, x.iv)({
              "--gradient-color-1": "$colors$gray2",
              "--gradient-color-2": "$colors$gray5",
              border: 0,
              padding: 0,
              margin: 0,
              display: "flex",
              ai: "center",
              jc: "center",
              height: "100%",
              borderRadius: 9999,
              background: "$gray3",
              position: "relative",
              color: "$gray10",
              focus: !0,
              cursor: "pointer",
              flexShrink: 0,
              "-webkit-tap-highlight-color": "transparent",
              backgroundImage: "linear-gradient(\n            45deg,\n            var(--gradient-color-1),\n            var(--gradient-color-2),\n            var(--gradient-color-1),\n            var(--gradient-color-2)\n          )",
              backgroundSize: "200% 100%",
              ".dark &": {
                  "--gradient-color-1": "$colors$gray2",
                  "--gradient-color-2": "$colors$gray3"
              },
              "svg, img": {
                  size: "50%",
                  transformOrigin: "unset !important",
                  pointerEvents: "none"
              }
          });

          function eA(e) {
              let {
                  css: t,
                  ...n
              } = e;
              return (0, r.jsx)(l.x, {
                  as: "hr",
                  css: {
                      opacity: 1,
                      height: 36,
                      width: 1,
                      background: "$grayA6",
                      border: 0,
                      flexShrink: 0,
                      "-webkit-mask-image": "linear-gradient(0deg, transparent, #fff 16px, #fff calc(100% - 16px), transparent)",
                      ...t
                  },
                  ...n
              })
          }

          function eT() {
              return (0, r.jsxs)("svg", {
                  "aria-hidden": !0,
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  children: [(0, r.jsx)("path", {
                      opacity: "0.25",
                      d: "M20 18.8V6.63998L13.6514 2.81501L13.6514 2.815C13.0511 2.45333 12.751 2.2725 12.4304 2.20186C12.1469 2.13938 11.8531 2.13938 11.5696 2.20186C11.249 2.2725 10.9489 2.45334 10.3486 2.81501L4 6.64001V18.8C4 19.9201 4 20.4802 4.21799 20.908C4.40973 21.2843 4.71569 21.5903 5.09202 21.782C5.51984 22 6.0799 22 7.2 22H16.8C17.9201 22 18.4802 22 18.908 21.782C19.2843 21.5903 19.5903 21.2843 19.782 20.908C20 20.4802 20 19.9201 20 18.8Z",
                      fill: "currentColor"
                  }), (0, r.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M1.14251 9.5145C1.42665 9.98808 2.04091 10.1416 2.51449 9.85749L12 4.16619L21.4855 9.85749C21.9591 10.1416 22.5733 9.98808 22.8575 9.5145C23.1416 9.04092 22.9881 8.42666 22.5145 8.14251L13.029 2.45121C12.3956 2.07119 11.6044 2.07119 10.971 2.45121L1.4855 8.14251C1.01192 8.42666 0.858357 9.04092 1.14251 9.5145Z",
                      fill: "currentColor"
                  }), (0, r.jsx)("path", {
                      d: "M9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16V22H9V16Z",
                      fill: "currentColor"
                  })]
              })
          }

          function eM() {
              return (0, r.jsxs)("svg", {
                  "aria-hidden": !0,
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  children: [(0, r.jsx)("path", {
                      d: "M8 20C8 19.4477 8.44772 19 9 19H15C15.5523 19 16 19.4477 16 20V21C16 22.6569 14.6569 24 13 24H11C9.34315 24 8 22.6569 8 21V20Z",
                      fill: "currentColor"
                  }), (0, r.jsx)("path", {
                      opacity: "0.25",
                      d: "M20 8C20 10.5264 18.8289 12.7793 17 14.2454V15C17 16.1046 16.1046 17 15 17C10.8358 17 15.5135 17 9 17C7.89543 17 7 16.1046 7 15V14.2454C5.17107 12.7793 4 10.5264 4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8Z",
                      fill: "currentColor"
                  }), (0, r.jsx)("path", {
                      d: "M10.7071 8.29289C10.3166 7.90237 9.68342 7.90237 9.29289 8.29289C8.90237 8.68342 8.90237 9.31658 9.29289 9.70711L11 11.4142V17H13V11.4142L14.7071 9.70711C15.0976 9.31658 15.0976 8.68342 14.7071 8.29289C14.3166 7.90237 13.6834 7.90237 13.2929 8.29289L12 9.58579L10.7071 8.29289Z",
                      fill: "currentColor"
                  })]
              })
          }

          function eP() {
              return (0, r.jsxs)("svg", {
                  "aria-hidden": !0,
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  children: [(0, r.jsx)("path", {
                      opacity: "0.25",
                      d: "M2 8.34233C2 6.96573 2.93689 5.76578 4.27239 5.4319L6 5L7.1094 3.3359C7.6658 2.5013 8.60249 2 9.60555 2H14.3944C15.3975 2 16.3342 2.5013 16.8906 3.3359L18 5L19.7276 5.4319C21.0631 5.76578 22 6.96573 22 8.34233V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V8.34233Z",
                      fill: "currentColor"
                  }), (0, r.jsx)("path", {
                      d: "M18 10C18.5523 10 19 9.55228 19 9C19 8.44772 18.5523 8 18 8C17.4477 8 17 8.44772 17 9C17 9.55228 17.4477 10 18 10Z",
                      fill: "currentColor"
                  }), (0, r.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13ZM14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13Z",
                      fill: "currentColor"
                  })]
              })
          }

          function eR() {
              return (0, r.jsxs)("svg", {
                  "aria-hidden": !0,
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  children: [(0, r.jsx)("path", {
                      opacity: "0.25",
                      d: "M20.9999 7.5C21.4999 15 15.9999 21 8.99995 21C6.58804 21 4.17613 20.6768 2.28388 19.7706C1.85051 19.5631 2.0199 18.985 2.49936 18.9532C4.82944 18.7987 6.75765 18.2423 7.99995 17C11.0001 14 11.5 13 12.2646 9.02396C12.0933 8.54804 11.9999 8.03492 11.9999 7.5C11.9999 5.01472 14.0147 3 16.4999 3C18.0181 3 19.3607 3.75182 20.1757 4.90346L21.8929 4.65815C22.3207 4.59703 22.6194 5.07087 22.3796 5.43047L20.9999 7.5Z",
                      fill: "currentColor"
                  }), (0, r.jsx)("path", {
                      d: "M7.99998 16.9999C2.58358 15.1944 1.64928 8.49939 2.62226 5.00708C2.73651 4.59701 3.26964 4.59488 3.48453 4.96234C5.14601 7.80359 8.30518 9.38991 12.2646 9.02385C18.5 9.02385 17 19.9999 7.99998 16.9999Z",
                      fill: "currentColor"
                  })]
              })
          }

          function eV() {
              return (0, r.jsxs)("svg", {
                  "aria-hidden": !0,
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  children: [(0, r.jsx)("path", {
                      opacity: "0.25",
                      d: "M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6Z",
                      fill: "currentColor"
                  }), (0, r.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M5.23177 7.35981C5.58534 6.93553 6.2159 6.87821 6.64018 7.23177L11.3598 11.1648C11.7307 11.4738 12.2693 11.4738 12.6402 11.1648L17.3598 7.23177C17.7841 6.87821 18.4147 6.93553 18.7682 7.35981C19.1218 7.78409 19.0645 8.41465 18.6402 8.76822L13.9205 12.7012C12.808 13.6284 11.192 13.6284 10.0794 12.7012L5.35981 8.76822C4.93553 8.41465 4.87821 7.78409 5.23177 7.35981Z",
                      fill: "currentColor"
                  })]
              })
          }

          function eL() {
              return (0, r.jsxs)("svg", {
                  "aria-hidden": !0,
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [(0, r.jsx)("path", {
                      opacity: "0.25",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M5.49998 3.50004C7.29283 1.70719 10.1189 1.5772 12.0615 3.11008C12.3818 3.36283 12.6631 3.66091 12.9502 3.95004L21.6787 12.6786C21.9424 12.9423 22.0192 13.2934 21.9465 13.6089C21.8635 13.9692 21.5853 14.2829 21.1677 14.3664L18.2968 14.9406C18.1032 14.9793 17.9254 15.0745 17.7858 15.2141L11.4142 21.5858C10.6331 22.3668 9.36678 22.3668 8.58573 21.5858L2.41416 15.4142C1.63311 14.6332 1.63311 13.3668 2.41416 12.5858C3.2879 11.712 4.16159 10.8382 5.03534 9.96448C3.5819 8.02573 3.73678 5.26324 5.49998 3.50004ZM6.47443 8.52539L10.5253 4.47449C9.39087 3.7881 7.89376 3.93469 6.9142 4.91425C5.93463 5.89382 5.78804 7.39093 6.47443 8.52539Z",
                      fill: "currentColor"
                  }), (0, r.jsx)("path", {
                      d: "M14.7928 17C15.2383 17 15.4614 17.5386 15.1464 17.8536L11.4142 21.5858C10.6331 22.3668 9.36679 22.3668 8.58574 21.5858L4.8535 17.8536C4.53852 17.5386 4.7616 17 5.20706 17H14.7928Z",
                      fill: "currentColor"
                  }), (0, r.jsx)("path", {
                      d: "M22 20.0001C22 21.1047 21.1046 22.0001 20 22.0001C18.8954 22.0001 18 21.1047 18 20.0001C18 18.8592 19.1571 17.7183 19.711 17.2374C19.8788 17.0918 20.1212 17.0918 20.289 17.2374C20.8429 17.7183 22 18.8592 22 20.0001Z",
                      fill: "currentColor"
                  })]
              })
          }
          let e$ = (0, p.E)(ex());
          (0, x.zo)("div", {
              width: "20vw",
              height: "100%",
              position: "fixed",
              bottom: 0,
              zIndex: 3,
              opacity: 1,
              minWidth: 120,
              backdropFilter: "blur(4px)",
              pointerEvents: "none",
              userSelect: "none",
              $$fadeColor: "rgba(255, 255, 255, 0.00001)",
              ".dark &": {
                  $$fadeColor: "rgba(22, 22, 22, 0.00001)"
              },
              "@mobile": {
                  display: "none"
              },
              variants: {
                  variant: {
                      left: {
                          background: "linear-gradient(to left, $$fadeColor, $colors$gray1)",
                          maskImage: "linear-gradient(to right, $colors$gray1, $$fadeColor)",
                          left: -24
                      },
                      right: {
                          background: "linear-gradient(to right, $$fadeColor, $colors$gray1)",
                          maskImage: "linear-gradient(to left, $colors$gray1, $$fadeColor)",
                          right: 0
                      }
                  }
              }
          });
          let eB = (0, x.zo)("div", {
                  maskImage: "linear-gradient(to top, #000 25%, transparent)",
                  backdropFilter: "blur(5px)",
                  width: "100%",
                  height: "clamp(80px, 10vh, 200px)",
                  bottom: 0,
                  pointerEvents: "none",
                  position: "fixed",
                  variants: {
                      solid: {
                          true: {
                              "&:before": {
                                  content: "",
                                  position: "absolute",
                                  inset: 0,
                                  background: "linear-gradient(to top, var(--colors-gray1), transparent)"
                              }
                          }
                      }
                  }
              }),
              eO = ["/craft", "/craft/[id]", "/writing", "/projects", "/photos"];

          function eI(e) {
              let {
                  Component: t,
                  pageProps: n,
                  router: o
              } = e;
              return (0, x.W0)(), (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsxs)(a(), {
                      children: [(0, r.jsx)("title", {
                          children: "TLM"
                      }), (0, r.jsx)("link", {
                          rel: "shortcut icon",
                          href: "/favicon.svg"
                      }), (0, r.jsx)("meta", {
                          name: "author",
                          content: "Rauno Freiberg"
                      }), (0, r.jsx)("meta", {
                          name: "twitter:site",
                          content: "@raunofreiberg"
                      }), (0, r.jsx)("meta", {
                          name: "twitter:creator",
                          content: "@raunofreiberg"
                      }), (0, r.jsx)("meta", {
                          name: "twitter:card",
                          content: "summary_large_image"
                      }), (0, r.jsx)("meta", {
                          name: "mobile-web-app-capable",
                          content: "yes"
                      }), (0, r.jsx)("link", {
                          rel: "apple-touch-icon",
                          href: "/apple-touch-icon.png"
                      }), (0, r.jsx)("meta", {
                          name: "apple-mobile-web-app-title",
                          content: "Rauno Freiberg"
                      }), (0, r.jsx)("meta", {
                          name: "apple-mobile-web-app-status-bar-style",
                          content: "black-translucent"
                      }),  !ey.r8 && (0, r.jsx)("script", {
                          defer: !0,
                          src: "/js/script.js",
                          "data-cf-beacon": '{"token": "d6d27ce03c074b42a45de0406889ef71"}'
                      })]
                  }), (0, r.jsx)(s.h, {}), (0, r.jsxs)(f.f, {
                      disableTransitionOnChange: !0,
                      enableSystem: !0,
                      attribute: "class",
                      value: {
                          dark: x.$_.className,
                          light: x.Wb.className
                      },
                      forcedTheme: "/" === o.route ? "light" : void 0,
                      children: [(0, r.jsx)(eS, {}), (0, r.jsx)(l.x, {
                          as: "main",
                          css: {
                              display: "flex",
                              fd: "column",
                              position: "relative",
                              minHeight: "100vh",
                              margin: "0 auto",
                              ..."/craft/[id]" !== o.route && {
                                  overflow: "hidden"
                              },
                              ..."/" !== o.route && "/run" !== o.route && {
                                  px: "$3",
                                  py: "120px",
                                  "@mobile": {
                                      pt: "40px"
                                  }
                              },
                              ...("/projects" === o.route || o.route.startsWith("/craft/") || o.route.startsWith("/writing")) && {
                                  maxWidth: 720
                              },
                              ..."/interfaces" === o.route && {
                                  pb: 0,
                                  maxWidth: 840,
                                  "@mobile": {
                                      px: "8px"
                                  }
                              },
                              ..."/craft" === o.route && {
                                  padding: "8px 0px 4px 4px"
                              },
                              ..."/photos" === o.route && {
                                  padding: 8
                              }
                          },
                          children: (0, i.createElement)(t, {
                              ...n,
                              key: o.route
                          })
                      }), eO.includes(o.route) && (0, r.jsx)(eB, {
                          solid: "/craft/[id]" === o.route
                      })]
                  })]
              })
          }
      },
      9429: function(e, t, n) {
          "use strict";

          function r(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .01;
              return "".concat("https://hyagozubk.github.io/projetoTlm", "/").concat(e, "#t=").concat(t)
          }

          function i(e) {
              return e.toLowerCase().replace("\xef", "i").replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")
          }

          function o(e) {
              return e[Math.floor(Math.random() * e.length)]
          }

          function a() {
              let e = document.activeElement;
              return !!e && ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || "SELECT" === e.tagName)
          }
          n.d(t, {
              J: function() {
                  return o
              },
              Qq: function() {
                  return a
              },
              dg: function() {
                  return l
              },
              jj: function() {
                  return r
              },
              lV: function() {
                  return i
              },
              pX: function() {
                  return u
              },
              px: function() {
                  return d
              },
              r8: function() {
                  return c
              },
              uZ: function() {
                  return s
              },
              wY: function() {
                  return h
              },
              x2: function() {
                  return p
              }
          });
          let s = (e, t, n) => Math.min(Math.max(e, t), n);

          function l() {
              document.body.style.overflow = "hidden", document.body.style.touchAction = "none", document.body.style["overscroll-behavior-y"] = "none", document.body.style["overscroll-behavior-x"] = "none"
          }

          function u() {
              document.body.style.overflow = "", document.body.style.touchAction = "", document.body.style["overscroll-behavior-y"] = "", document.body.style["overscroll-behavior-x"] = ""
          }
          let c = !1;

          function d(e) {
              return "".concat(e, "px")
          }

          function h(e, t) {
              let [n, r] = t, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
              if (e > r) {
                  let t = e - r;
                  return r + (t > 0 ? Math.sqrt(t) : -Math.sqrt(-t)) * i
              }
              if (!(e < n)) return e;
              {
                  let t = e - n;
                  return n + (t > 0 ? Math.sqrt(t) : -Math.sqrt(-t)) * i
              }
          }
          let p = {
              start: () => document.body.classList.add("cursor-grabbing"),
              end: () => document.body.classList.remove("cursor-grabbing")
          }
      },
      6615: function(e, t, n) {
          "use strict";
          n.d(t, {
              vc: function() {
                  return eo
              },
              iv: function() {
                  return ee
              },
              $_: function() {
                  return el
              },
              W0: function() {
                  return eu
              },
              F4: function() {
                  return ei
              },
              Wb: function() {
                  return es
              },
              zo: function() {
                  return Q
              }
          });
          var r = n(7294),
              i = "colors",
              o = "sizes",
              a = "space",
              s = {
                  gap: a,
                  gridGap: a,
                  columnGap: a,
                  gridColumnGap: a,
                  rowGap: a,
                  gridRowGap: a,
                  inset: a,
                  insetBlock: a,
                  insetBlockEnd: a,
                  insetBlockStart: a,
                  insetInline: a,
                  insetInlineEnd: a,
                  insetInlineStart: a,
                  margin: a,
                  marginTop: a,
                  marginRight: a,
                  marginBottom: a,
                  marginLeft: a,
                  marginBlock: a,
                  marginBlockEnd: a,
                  marginBlockStart: a,
                  marginInline: a,
                  marginInlineEnd: a,
                  marginInlineStart: a,
                  padding: a,
                  paddingTop: a,
                  paddingRight: a,
                  paddingBottom: a,
                  paddingLeft: a,
                  paddingBlock: a,
                  paddingBlockEnd: a,
                  paddingBlockStart: a,
                  paddingInline: a,
                  paddingInlineEnd: a,
                  paddingInlineStart: a,
                  top: a,
                  right: a,
                  bottom: a,
                  left: a,
                  scrollMargin: a,
                  scrollMarginTop: a,
                  scrollMarginRight: a,
                  scrollMarginBottom: a,
                  scrollMarginLeft: a,
                  scrollMarginX: a,
                  scrollMarginY: a,
                  scrollMarginBlock: a,
                  scrollMarginBlockEnd: a,
                  scrollMarginBlockStart: a,
                  scrollMarginInline: a,
                  scrollMarginInlineEnd: a,
                  scrollMarginInlineStart: a,
                  scrollPadding: a,
                  scrollPaddingTop: a,
                  scrollPaddingRight: a,
                  scrollPaddingBottom: a,
                  scrollPaddingLeft: a,
                  scrollPaddingX: a,
                  scrollPaddingY: a,
                  scrollPaddingBlock: a,
                  scrollPaddingBlockEnd: a,
                  scrollPaddingBlockStart: a,
                  scrollPaddingInline: a,
                  scrollPaddingInlineEnd: a,
                  scrollPaddingInlineStart: a,
                  fontSize: "fontSizes",
                  background: i,
                  backgroundColor: i,
                  backgroundImage: i,
                  borderImage: i,
                  border: i,
                  borderBlock: i,
                  borderBlockEnd: i,
                  borderBlockStart: i,
                  borderBottom: i,
                  borderBottomColor: i,
                  borderColor: i,
                  borderInline: i,
                  borderInlineEnd: i,
                  borderInlineStart: i,
                  borderLeft: i,
                  borderLeftColor: i,
                  borderRight: i,
                  borderRightColor: i,
                  borderTop: i,
                  borderTopColor: i,
                  caretColor: i,
                  color: i,
                  columnRuleColor: i,
                  fill: i,
                  outline: i,
                  outlineColor: i,
                  stroke: i,
                  textDecorationColor: i,
                  fontFamily: "fonts",
                  fontWeight: "fontWeights",
                  lineHeight: "lineHeights",
                  letterSpacing: "letterSpacings",
                  blockSize: o,
                  minBlockSize: o,
                  maxBlockSize: o,
                  inlineSize: o,
                  minInlineSize: o,
                  maxInlineSize: o,
                  width: o,
                  minWidth: o,
                  maxWidth: o,
                  height: o,
                  minHeight: o,
                  maxHeight: o,
                  flexBasis: o,
                  gridTemplateColumns: o,
                  gridTemplateRows: o,
                  borderWidth: "borderWidths",
                  borderTopWidth: "borderWidths",
                  borderRightWidth: "borderWidths",
                  borderBottomWidth: "borderWidths",
                  borderLeftWidth: "borderWidths",
                  borderStyle: "borderStyles",
                  borderTopStyle: "borderStyles",
                  borderRightStyle: "borderStyles",
                  borderBottomStyle: "borderStyles",
                  borderLeftStyle: "borderStyles",
                  borderRadius: "radii",
                  borderTopLeftRadius: "radii",
                  borderTopRightRadius: "radii",
                  borderBottomRightRadius: "radii",
                  borderBottomLeftRadius: "radii",
                  boxShadow: "shadows",
                  textShadow: "shadows",
                  transition: "transitions",
                  zIndex: "zIndices"
              },
              l = (e, t) => "function" == typeof t ? {
                  "()": Function.prototype.toString.call(t)
              } : t,
              u = () => {
                  let e = Object.create(null);
                  return (t, n, ...r) => {
                      let i = JSON.stringify(t, l);
                      return i in e ? e[i] : e[i] = n(t, ...r)
                  }
              },
              c = Symbol.for("sxs.internal"),
              d = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)),
              h = e => {
                  for (let t in e) return !0;
                  return !1
              },
              {
                  hasOwnProperty: p
              } = Object.prototype,
              f = e => e.includes("-") ? e : e.replace(/[A-Z]/g, e => "-" + e.toLowerCase()),
              m = /\s+(?![^()]*\))/,
              g = e => t => e(..."string" == typeof t ? String(t).split(m) : [t]),
              v = {
                  appearance: e => ({
                      WebkitAppearance: e,
                      appearance: e
                  }),
                  backfaceVisibility: e => ({
                      WebkitBackfaceVisibility: e,
                      backfaceVisibility: e
                  }),
                  backdropFilter: e => ({
                      WebkitBackdropFilter: e,
                      backdropFilter: e
                  }),
                  backgroundClip: e => ({
                      WebkitBackgroundClip: e,
                      backgroundClip: e
                  }),
                  boxDecorationBreak: e => ({
                      WebkitBoxDecorationBreak: e,
                      boxDecorationBreak: e
                  }),
                  clipPath: e => ({
                      WebkitClipPath: e,
                      clipPath: e
                  }),
                  content: e => ({
                      content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"`
                  }),
                  hyphens: e => ({
                      WebkitHyphens: e,
                      hyphens: e
                  }),
                  maskImage: e => ({
                      WebkitMaskImage: e,
                      maskImage: e
                  }),
                  maskSize: e => ({
                      WebkitMaskSize: e,
                      maskSize: e
                  }),
                  tabSize: e => ({
                      MozTabSize: e,
                      tabSize: e
                  }),
                  textSizeAdjust: e => ({
                      WebkitTextSizeAdjust: e,
                      textSizeAdjust: e
                  }),
                  userSelect: e => ({
                      WebkitUserSelect: e,
                      userSelect: e
                  }),
                  marginBlock: g((e, t) => ({
                      marginBlockStart: e,
                      marginBlockEnd: t || e
                  })),
                  marginInline: g((e, t) => ({
                      marginInlineStart: e,
                      marginInlineEnd: t || e
                  })),
                  maxSize: g((e, t) => ({
                      maxBlockSize: e,
                      maxInlineSize: t || e
                  })),
                  minSize: g((e, t) => ({
                      minBlockSize: e,
                      minInlineSize: t || e
                  })),
                  paddingBlock: g((e, t) => ({
                      paddingBlockStart: e,
                      paddingBlockEnd: t || e
                  })),
                  paddingInline: g((e, t) => ({
                      paddingInlineStart: e,
                      paddingInlineEnd: t || e
                  }))
              },
              y = /([\d.]+)([^]*)/,
              b = (e, t) => e.length ? e.reduce((e, n) => (e.push(...t.map(e => e.includes("&") ? e.replace(/&/g, /[ +>|~]/.test(n) && /&.*&/.test(e) ? `:is(${n})` : n) : n + " " + e)), e), []) : t,
              x = (e, t) => e in w && "string" == typeof t ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t, n, r, i) => n + ("stretch" === r ? `-moz-available${i};${f(e)}:${n}-webkit-fill-available` : `-moz-fit-content${i};${f(e)}:${n}fit-content`) + i) : String(t),
              w = {
                  blockSize: 1,
                  height: 1,
                  inlineSize: 1,
                  maxBlockSize: 1,
                  maxHeight: 1,
                  maxInlineSize: 1,
                  maxWidth: 1,
                  minBlockSize: 1,
                  minHeight: 1,
                  minInlineSize: 1,
                  minWidth: 1,
                  width: 1
              },
              k = e => e ? e + "-" : "",
              E = (e, t, n) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e, r, i, o, a) => "$" == o == !!i ? e : (r || "--" == o ? "calc(" : "") + "var(--" + ("$" === o ? k(t) + (a.includes("$") ? "" : k(n)) + a.replace(/\$/g, "-") : a) + ")" + (r || "--" == o ? "*" + (r || "") + (i || "1") + ")" : "")),
              S = /\s*,\s*(?![^()]*\))/,
              C = Object.prototype.toString,
              j = (e, t, n, r, i) => {
                  let o, a, s;
                  let l = (e, t, n) => {
                      let u, c;
                      let d = e => {
                          var h;
                          for (u in e) {
                              let p = 64 === u.charCodeAt(0),
                                  m = p && Array.isArray(e[u]) ? e[u] : [e[u]];
                              for (c of m) {
                                  let e = /[A-Z]/.test(h = u) ? h : h.replace(/-[^]/g, e => e[1].toUpperCase()),
                                      m = "object" == typeof c && c && c.toString === C && (!r.utils[e] || !t.length);
                                  if (e in r.utils && !m) {
                                      let t = r.utils[e];
                                      if (t !== a) {
                                          a = t, d(t(c)), a = null;
                                          continue
                                      }
                                  } else if (e in v) {
                                      let t = v[e];
                                      if (t !== s) {
                                          s = t, d(t(c)), s = null;
                                          continue
                                      }
                                  }
                                  if (p && (u = (u.slice(1) in r.media ? "@media " + r.media[u.slice(1)] : u).replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e, t, n, r, i, o) => {
                                          let a = y.test(t),
                                              s = .0625 * (a ? -1 : 1),
                                              [l, u] = a ? [r, t] : [t, r];
                                          return "(" + ("=" === n[0] ? "" : ">" === n[0] === a ? "max-" : "min-") + l + ":" + ("=" !== n[0] && 1 === n.length ? u.replace(y, (e, t, r) => Number(t) + s * (">" === n ? 1 : -1) + r) : u) + (i ? ") and (" + (">" === i[0] ? "min-" : "max-") + l + ":" + (1 === i.length ? o.replace(y, (e, t, n) => Number(t) + s * (">" === i ? -1 : 1) + n) : o) : "") + ")"
                                      })), m) {
                                      let e = p ? n.concat(u) : [...n],
                                          r = p ? [...t] : b(t, u.split(S));
                                      void 0 !== o && i(A(...o)), o = void 0, l(c, r, e)
                                  } else void 0 === o && (o = [
                                      [], t, n
                                  ]), u = p || 36 !== u.charCodeAt(0) ? u : `--${k(r.prefix)}${u.slice(1).replace(/\$/g,"-")}`, c = m ? c : "number" == typeof c ? c && e in T ? String(c) + "px" : String(c) : E(x(e, null == c ? "" : c), r.prefix, r.themeMap[e]), o[0].push(`${p?`${u} `:`${f(u)}:`}${c}`)
                              }
                          }
                      };
                      d(e), void 0 !== o && i(A(...o)), o = void 0
                  };
                  l(e, t, n)
              },
              A = (e, t, n) => `${n.map(e=>`${e}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,
              T = {
                  animationDelay: 1,
                  animationDuration: 1,
                  backgroundSize: 1,
                  blockSize: 1,
                  border: 1,
                  borderBlock: 1,
                  borderBlockEnd: 1,
                  borderBlockEndWidth: 1,
                  borderBlockStart: 1,
                  borderBlockStartWidth: 1,
                  borderBlockWidth: 1,
                  borderBottom: 1,
                  borderBottomLeftRadius: 1,
                  borderBottomRightRadius: 1,
                  borderBottomWidth: 1,
                  borderEndEndRadius: 1,
                  borderEndStartRadius: 1,
                  borderInlineEnd: 1,
                  borderInlineEndWidth: 1,
                  borderInlineStart: 1,
                  borderInlineStartWidth: 1,
                  borderInlineWidth: 1,
                  borderLeft: 1,
                  borderLeftWidth: 1,
                  borderRadius: 1,
                  borderRight: 1,
                  borderRightWidth: 1,
                  borderSpacing: 1,
                  borderStartEndRadius: 1,
                  borderStartStartRadius: 1,
                  borderTop: 1,
                  borderTopLeftRadius: 1,
                  borderTopRightRadius: 1,
                  borderTopWidth: 1,
                  borderWidth: 1,
                  bottom: 1,
                  columnGap: 1,
                  columnRule: 1,
                  columnRuleWidth: 1,
                  columnWidth: 1,
                  containIntrinsicSize: 1,
                  flexBasis: 1,
                  fontSize: 1,
                  gap: 1,
                  gridAutoColumns: 1,
                  gridAutoRows: 1,
                  gridTemplateColumns: 1,
                  gridTemplateRows: 1,
                  height: 1,
                  inlineSize: 1,
                  inset: 1,
                  insetBlock: 1,
                  insetBlockEnd: 1,
                  insetBlockStart: 1,
                  insetInline: 1,
                  insetInlineEnd: 1,
                  insetInlineStart: 1,
                  left: 1,
                  letterSpacing: 1,
                  margin: 1,
                  marginBlock: 1,
                  marginBlockEnd: 1,
                  marginBlockStart: 1,
                  marginBottom: 1,
                  marginInline: 1,
                  marginInlineEnd: 1,
                  marginInlineStart: 1,
                  marginLeft: 1,
                  marginRight: 1,
                  marginTop: 1,
                  maxBlockSize: 1,
                  maxHeight: 1,
                  maxInlineSize: 1,
                  maxWidth: 1,
                  minBlockSize: 1,
                  minHeight: 1,
                  minInlineSize: 1,
                  minWidth: 1,
                  offsetDistance: 1,
                  offsetRotate: 1,
                  outline: 1,
                  outlineOffset: 1,
                  outlineWidth: 1,
                  overflowClipMargin: 1,
                  padding: 1,
                  paddingBlock: 1,
                  paddingBlockEnd: 1,
                  paddingBlockStart: 1,
                  paddingBottom: 1,
                  paddingInline: 1,
                  paddingInlineEnd: 1,
                  paddingInlineStart: 1,
                  paddingLeft: 1,
                  paddingRight: 1,
                  paddingTop: 1,
                  perspective: 1,
                  right: 1,
                  rowGap: 1,
                  scrollMargin: 1,
                  scrollMarginBlock: 1,
                  scrollMarginBlockEnd: 1,
                  scrollMarginBlockStart: 1,
                  scrollMarginBottom: 1,
                  scrollMarginInline: 1,
                  scrollMarginInlineEnd: 1,
                  scrollMarginInlineStart: 1,
                  scrollMarginLeft: 1,
                  scrollMarginRight: 1,
                  scrollMarginTop: 1,
                  scrollPadding: 1,
                  scrollPaddingBlock: 1,
                  scrollPaddingBlockEnd: 1,
                  scrollPaddingBlockStart: 1,
                  scrollPaddingBottom: 1,
                  scrollPaddingInline: 1,
                  scrollPaddingInlineEnd: 1,
                  scrollPaddingInlineStart: 1,
                  scrollPaddingLeft: 1,
                  scrollPaddingRight: 1,
                  scrollPaddingTop: 1,
                  shapeMargin: 1,
                  textDecoration: 1,
                  textDecorationThickness: 1,
                  textIndent: 1,
                  textUnderlineOffset: 1,
                  top: 1,
                  transitionDelay: 1,
                  transitionDuration: 1,
                  verticalAlign: 1,
                  width: 1,
                  wordSpacing: 1
              },
              M = e => String.fromCharCode(e + (e > 25 ? 39 : 97)),
              P = e => (e => {
                  let t, n = "";
                  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = M(t % 52) + n;
                  return M(t % 52) + n
              })(((e, t) => {
                  let n = t.length;
                  for (; n;) e = 33 * e ^ t.charCodeAt(--n);
                  return e
              })(5381, JSON.stringify(e)) >>> 0),
              R = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"],
              V = e => {
                  if (e.href && !e.href.startsWith(location.origin)) return !1;
                  try {
                      return !!e.cssRules
                  } catch (e) {
                      return !1
                  }
              },
              L = e => {
                  let t;
                  let n = () => {
                          let {
                              cssRules: e
                          } = t.sheet;
                          return [].map.call(e, (n, r) => {
                              let {
                                  cssText: i
                              } = n, o = "";
                              if (i.startsWith("--sxs")) return "";
                              if (e[r - 1] && (o = e[r - 1].cssText).startsWith("--sxs")) {
                                  if (!n.cssRules.length) return "";
                                  for (let e in t.rules)
                                      if (t.rules[e].group === n) return `--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${i}`;
                                  return n.cssRules.length ? `${o}${i}` : ""
                              }
                              return i
                          }).join("")
                      },
                      r = () => {
                          if (t) {
                              let {
                                  rules: e,
                                  sheet: n
                              } = t;
                              if (!n.deleteRule) {
                                  for (; 3 === Object(Object(n.cssRules)[0]).type;) n.cssRules.splice(0, 1);
                                  n.cssRules = []
                              }
                              for (let t in e) delete e[t]
                          }
                          let i = Object(e).styleSheets || [];
                          for (let e of i)
                              if (V(e)) {
                                  for (let i = 0, o = e.cssRules; o[i]; ++i) {
                                      let a = Object(o[i]);
                                      if (1 !== a.type) continue;
                                      let s = Object(o[i + 1]);
                                      if (4 !== s.type) continue;
                                      ++i;
                                      let {
                                          cssText: l
                                      } = a;
                                      if (!l.startsWith("--sxs")) continue;
                                      let u = l.slice(14, -3).trim().split(/\s+/),
                                          c = R[u[0]];
                                      c && (t || (t = {
                                          sheet: e,
                                          reset: r,
                                          rules: {},
                                          toString: n
                                      }), t.rules[c] = {
                                          group: s,
                                          index: i,
                                          cache: new Set(u)
                                      })
                                  }
                                  if (t) break
                              } if (!t) {
                              let i = (e, t) => ({
                                  type: t,
                                  cssRules: [],
                                  insertRule(e, t) {
                                      this.cssRules.splice(t, 0, i(e, {
                                          import: 3,
                                          undefined: 1
                                      } [(e.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4))
                                  },
                                  get cssText() {
                                      return "@media{}" === e ? `@media{${[].map.call(this.cssRules,e=>e.cssText).join("")}}` : e
                                  }
                              });
                              t = {
                                  sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : i("", "text/css"),
                                  rules: {},
                                  reset: r,
                                  toString: n
                              }
                          }
                          let {
                              sheet: o,
                              rules: a
                          } = t;
                          for (let e = R.length - 1; e >= 0; --e) {
                              let t = R[e];
                              if (!a[t]) {
                                  let n = R[e + 1],
                                      r = a[n] ? a[n].index : o.cssRules.length;
                                  o.insertRule("@media{}", r), o.insertRule(`--sxs{--sxs:${e}}`, r), a[t] = {
                                      group: o.cssRules[r + 1],
                                      index: r,
                                      cache: new Set([e])
                                  }
                              }
                              $(a[t])
                          }
                      };
                  return r(), t
              },
              $ = e => {
                  let t = e.group,
                      n = t.cssRules.length;
                  e.apply = e => {
                      try {
                          t.insertRule(e, n), ++n
                      } catch (e) {}
                  }
              },
              B = Symbol(),
              O = u(),
              I = (e, t) => O(e, () => (...n) => {
                  let r = {
                      type: null,
                      composers: new Set
                  };
                  for (let t of n)
                      if (null != t) {
                          if (t[c])
                              for (let e of (null == r.type && (r.type = t[c].type), t[c].composers)) r.composers.add(e);
                          else t.constructor !== Object || t.$$typeof ? null == r.type && (r.type = t) : r.composers.add(D(t, e))
                      } return null == r.type && (r.type = "span"), r.composers.size || r.composers.add(["PJLV", {},
                      [],
                      [], {},
                      []
                  ]), F(e, r, t)
              }),
              D = ({
                  variants: e,
                  compoundVariants: t,
                  defaultVariants: n,
                  ...r
              }, i) => {
                  var o;
                  let a = `${k(i.prefix)}c-${P(r)}`,
                      s = [],
                      l = [],
                      u = Object.create(null),
                      c = [];
                  for (let e in n) u[e] = String(n[e]);
                  if ("object" == typeof e && e)
                      for (let t in e) {
                          o = t, p.call(u, o) || (u[t] = "undefined");
                          let n = e[t];
                          for (let e in n) {
                              let r = {
                                  [t]: String(e)
                              };
                              "undefined" === String(e) && c.push(t);
                              let i = n[e],
                                  o = [r, i, !h(i)];
                              s.push(o)
                          }
                      }
                  if ("object" == typeof t && t)
                      for (let e of t) {
                          let {
                              css: t,
                              ...n
                          } = e;
                          for (let e in t = "object" == typeof t && t || {}, n) n[e] = String(n[e]);
                          let r = [n, t, !h(t)];
                          l.push(r)
                      }
                  return [a, r, s, l, u, c]
              },
              F = (e, t, n) => {
                  let [r, i, o, a] = z(t.composers), s = "function" == typeof t.type || t.type.$$typeof ? (e => {
                      function t() {
                          for (let n = 0; n < t[B].length; n++) {
                              let [r, i] = t[B][n];
                              e.rules[r].apply(i)
                          }
                          return t[B] = [], null
                      }
                      return t[B] = [], t.rules = {}, R.forEach(e => t.rules[e] = {
                          apply: n => t[B].push([e, n])
                      }), t
                  })(n) : null, l = (s || n).rules, u = `.${r}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`, h = c => {
                      c = "object" == typeof c && c || W;
                      let {
                          css: d,
                          ...h
                      } = c, p = {};
                      for (let e in o)
                          if (delete h[e], e in c) {
                              let t = c[e];
                              "object" == typeof t && t ? p[e] = {
                                  "@initial": o[e],
                                  ...t
                              } : (t = String(t), p[e] = "undefined" !== t || a.has(e) ? t : o[e])
                          } else p[e] = o[e];
                      let f = new Set([...i]);
                      for (let [r, i, o, a] of t.composers) {
                          n.rules.styled.cache.has(r) || (n.rules.styled.cache.add(r), j(i, [`.${r}`], [], e, e => {
                              l.styled.apply(e)
                          }));
                          let t = G(o, p, e.media),
                              s = G(a, p, e.media, !0);
                          for (let i of t)
                              if (void 0 !== i)
                                  for (let [t, o, a] of i) {
                                      let i = `${r}-${P(o)}-${t}`;
                                      f.add(i);
                                      let s = (a ? n.rules.resonevar : n.rules.onevar).cache,
                                          u = a ? l.resonevar : l.onevar;
                                      s.has(i) || (s.add(i), j(o, [`.${i}`], [], e, e => {
                                          u.apply(e)
                                      }))
                                  }
                          for (let t of s)
                              if (void 0 !== t)
                                  for (let [i, o] of t) {
                                      let t = `${r}-${P(o)}-${i}`;
                                      f.add(t), n.rules.allvar.cache.has(t) || (n.rules.allvar.cache.add(t), j(o, [`.${t}`], [], e, e => {
                                          l.allvar.apply(e)
                                      }))
                                  }
                      }
                      if ("object" == typeof d && d) {
                          let t = `${r}-i${P(d)}-css`;
                          f.add(t), n.rules.inline.cache.has(t) || (n.rules.inline.cache.add(t), j(d, [`.${t}`], [], e, e => {
                              l.inline.apply(e)
                          }))
                      }
                      for (let e of String(c.className || "").trim().split(/\s+/)) e && f.add(e);
                      let m = h.className = [...f].join(" ");
                      return {
                          type: t.type,
                          className: m,
                          selector: u,
                          props: h,
                          toString: () => m,
                          deferredInjector: s
                      }
                  };
                  return d(h, {
                      className: r,
                      selector: u,
                      [c]: t,
                      toString: () => (n.rules.styled.cache.has(r) || h(), r)
                  })
              },
              z = e => {
                  let t = "",
                      n = [],
                      r = {},
                      i = [];
                  for (let [o, , , , a, s] of e)
                      for (let e in "" === t && (t = o), n.push(o), i.push(...s), a) {
                          let t = a[e];
                          (void 0 === r[e] || "undefined" !== t || s.includes(t)) && (r[e] = t)
                      }
                  return [t, n, r, new Set(i)]
              },
              G = (e, t, n, r) => {
                  let i = [];
                  e: for (let [o, a, s] of e) {
                      if (s) continue;
                      let e, l = 0,
                          u = !1;
                      for (e in o) {
                          let r = o[e],
                              i = t[e];
                          if (i !== r) {
                              if ("object" != typeof i || !i) continue e;
                              {
                                  let e, t, o = 0;
                                  for (let a in i) {
                                      if (r === String(i[a])) {
                                          if ("@initial" !== a) {
                                              let e = a.slice(1);
                                              (t = t || []).push(e in n ? n[e] : a.replace(/^@media ?/, "")), u = !0
                                          }
                                          l += o, e = !0
                                      }++o
                                  }
                                  if (t && t.length && (a = {
                                          ["@media " + t.join(", ")]: a
                                      }), !e) continue e
                              }
                          }
                      }(i[l] = i[l] || []).push([r ? "cv" : `${e}-${o[e]}`, a, u])
                  }
                  return i
              },
              W = {},
              _ = u(),
              N = (e, t) => _(e, () => (...n) => {
                  let r = () => {
                      for (let r of n) {
                          let n = P(r = "object" == typeof r && r || {});
                          if (!t.rules.global.cache.has(n)) {
                              if (t.rules.global.cache.add(n), "@import" in r) {
                                  let e = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
                                  for (let n of [].concat(r["@import"])) n = n.includes('"') || n.includes("'") ? n : `"${n}"`, t.sheet.insertRule(`@import ${n};`, e++);
                                  delete r["@import"]
                              }
                              j(r, [], [], e, e => {
                                  t.rules.global.apply(e)
                              })
                          }
                      }
                      return ""
                  };
                  return d(r, {
                      toString: r
                  })
              }),
              U = u(),
              H = (e, t) => U(e, () => n => {
                  let r = `${k(e.prefix)}k-${P(n)}`,
                      i = () => {
                          if (!t.rules.global.cache.has(r)) {
                              t.rules.global.cache.add(r);
                              let i = [];
                              j(n, [], [], e, e => i.push(e));
                              let o = `@keyframes ${r}{${i.join("")}}`;
                              t.rules.global.apply(o)
                          }
                          return r
                      };
                  return d(i, {
                      get name() {
                          return i()
                      },
                      toString: i
                  })
              }),
              Z = class {
                  constructor(e, t, n, r) {
                      this.token = null == e ? "" : String(e), this.value = null == t ? "" : String(t), this.scale = null == n ? "" : String(n), this.prefix = null == r ? "" : String(r)
                  }
                  get computedValue() {
                      return "var(" + this.variable + ")"
                  }
                  get variable() {
                      return "--" + k(this.prefix) + k(this.scale) + this.token
                  }
                  toString() {
                      return this.computedValue
                  }
              },
              q = u(),
              Y = (e, t) => q(e, () => (n, r) => {
                  r = "object" == typeof n && n || Object(r);
                  let i = `.${n=(n="string"==typeof n?n:"")||`${k(e.prefix)}t-${P(r)}`}`,
                      o = {},
                      a = [];
                  for (let t in r)
                      for (let n in o[t] = {}, r[t]) {
                          let i = `--${k(e.prefix)}${t}-${n}`,
                              s = E(String(r[t][n]), e.prefix, t);
                          o[t][n] = new Z(n, s, t, e.prefix), a.push(`${i}:${s}`)
                      }
                  let s = () => {
                      if (a.length && !t.rules.themed.cache.has(n)) {
                          t.rules.themed.cache.add(n);
                          let i = `${r===e.theme?":root,":""}.${n}{${a.join(";")}}`;
                          t.rules.themed.apply(i)
                      }
                      return n
                  };
                  return {
                      ...o,
                      get className() {
                          return s()
                      },
                      selector: i,
                      toString: s
                  }
              }),
              X = u(),
              K = u(),
              J = n(2765);
          let {
              styled: Q,
              css: ee,
              globalCss: et,
              getCssText: en,
              createTheme: er,
              keyframes: ei,
              config: eo,
              theme: ea
          } = (e => {
              let t = (e => {
                  let t = !1,
                      n = X(e, e => {
                          t = !0;
                          let n = "prefix" in (e = "object" == typeof e && e || {}) ? String(e.prefix) : "",
                              r = "object" == typeof e.media && e.media || {},
                              i = "object" == typeof e.root ? e.root || null : globalThis.document || null,
                              o = "object" == typeof e.theme && e.theme || {},
                              a = {
                                  prefix: n,
                                  media: r,
                                  theme: o,
                                  themeMap: "object" == typeof e.themeMap && e.themeMap || {
                                      ...s
                                  },
                                  utils: "object" == typeof e.utils && e.utils || {}
                              },
                              l = L(i),
                              u = {
                                  css: I(a, l),
                                  globalCss: N(a, l),
                                  keyframes: H(a, l),
                                  createTheme: Y(a, l),
                                  reset() {
                                      l.reset(), u.theme.toString()
                                  },
                                  theme: {},
                                  sheet: l,
                                  config: a,
                                  prefix: n,
                                  getCssText: l.toString,
                                  toString: l.toString
                              };
                          return String(u.theme = u.createTheme(o)), u
                      });
                  return t || n.reset(), n
              })(e);
              return t.styled = (({
                  config: e,
                  sheet: t
              }) => K(e, () => {
                  let n = I(e, t);
                  return (...e) => {
                      let t = n(...e),
                          i = t[c].type,
                          o = r.forwardRef((e, n) => {
                              let o = e && e.as || i,
                                  {
                                      props: a,
                                      deferredInjector: s
                                  } = t(e);
                              return delete a.as, a.ref = n, s ? r.createElement(r.Fragment, null, r.createElement(o, a), r.createElement(s, null)) : r.createElement(o, a)
                          });
                      return o.className = t.className, o.displayName = `Styled.${i.displayName||i.name||i}`, o.selector = t.selector, o.toString = () => t.selector, o[c] = t[c], o
                  }
              }))(t), t
          })({
              theme: {
                  fonts: {
                      body: 'X, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                      mono: "JetBrains Mono, Menlo, monospace",
                      serif: "Georgia, serif"
                  },
                  space: {
                      1: "8px",
                      2: "16px",
                      3: "24px",
                      4: "32px",
                      5: "40px",
                      6: "48px",
                      7: "56px",
                      8: "64px",
                      9: "72px",
                      10: "80px",
                      11: "88px"
                  },
                  fontWeights: {
                      400: 400,
                      500: 500,
                      600: 600,
                      700: 700,
                      800: 800
                  },
                  lineHeights: {
                      12: "12px",
                      16: "16px",
                      20: "20px",
                      24: "24px",
                      32: "32px",
                      40: "40px",
                      48: "48px",
                      56: "56px"
                  },
                  fontSizes: {
                      10: "10px",
                      12: "12px",
                      14: "14px",
                      16: "16px",
                      20: "20px",
                      24: "24px",
                      32: "32px",
                      40: "40px",
                      48: "48px"
                  },
                  radii: {
                      1: "4px",
                      2: "8px",
                      3: "16px",
                      round: "9999px"
                  },
                  shadows: {
                      small: "0 5px 10px rgba(0, 0, 0, 0.12)",
                      medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
                      large: "0 30px 60px rgba(0, 0, 0, 0.12)",
                      tooltip: "0px 4px 8px 0px rgba(0, 0, 0, 0.04), 0px 1px 1px 0px rgba(0, 0, 0, 0.02)"
                  },
                  transitions: {
                      snappy: "cubic-bezier(.2, .8, .2, 1)"
                  }
              },
              media: {
                  mobile: "(max-width: 720px)",
                  touch: "(hover: none)",
                  tablet: "(max-width: 1366px)"
              },
              utils: {
                  m: e => ({
                      margin: e
                  }),
                  mt: e => ({
                      marginTop: e
                  }),
                  mr: e => ({
                      marginRight: e
                  }),
                  mb: e => ({
                      marginBottom: e
                  }),
                  ml: e => ({
                      marginLeft: e
                  }),
                  mx: e => ({
                      marginLeft: e,
                      marginRight: e
                  }),
                  my: e => ({
                      marginTop: e,
                      marginBottom: e
                  }),
                  p: e => ({
                      padding: e
                  }),
                  pt: e => ({
                      paddingTop: e
                  }),
                  pr: e => ({
                      paddingRight: e
                  }),
                  pb: e => ({
                      paddingBottom: e
                  }),
                  pl: e => ({
                      paddingLeft: e
                  }),
                  px: e => ({
                      paddingLeft: e,
                      paddingRight: e
                  }),
                  py: e => ({
                      paddingTop: e,
                      paddingBottom: e
                  }),
                  size: e => ({
                      width: e,
                      height: e
                  }),
                  ta: e => ({
                      textAlign: e
                  }),
                  fd: e => ({
                      flexDirection: e
                  }),
                  d: e => ({
                      display: e
                  }),
                  fw: e => ({
                      flexWrap: e
                  }),
                  ai: e => ({
                      alignItems: e
                  }),
                  ac: e => ({
                      alignContent: e
                  }),
                  jc: e => ({
                      justifyContent: e
                  }),
                  as: e => ({
                      alignSelf: e
                  }),
                  fg: e => ({
                      flexGrow: e
                  }),
                  fs: e => ({
                      flexShrink: e
                  }),
                  fb: e => ({
                      flexBasis: e
                  }),
                  bc: e => ({
                      backgroundColor: e
                  }),
                  br: e => ({
                      borderRadius: e
                  }),
                  btrr: e => ({
                      borderTopRightRadius: e
                  }),
                  bbrr: e => ({
                      borderBottomRightRadius: e
                  }),
                  bblr: e => ({
                      borderBottomLeftRadius: e
                  }),
                  btlr: e => ({
                      borderTopLeftRadius: e
                  }),
                  bs: e => ({
                      boxShadow: e
                  }),
                  lh: e => ({
                      lineHeight: e
                  }),
                  ox: e => ({
                      overflowX: e
                  }),
                  oy: e => ({
                      overflowY: e
                  }),
                  truncate: () => ({
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis"
                  }),
                  us: e => ({
                      WebkitUserSelect: e,
                      userSelect: e
                  }),
                  center: () => ({
                      d: "flex",
                      ai: "center",
                      jc: "center"
                  }),
                  bleed: e => !0 === e ? {
                      width: "100vw",
                      position: "relative",
                      left: "50%",
                      right: "50%",
                      transform: "translateX(-50%)",
                      maxWidth: "var(--max-width)"
                  } : {},
                  focus: () => ({
                      "&:focus-visible": {
                          outline: 0,
                          boxShadow: "0 0 0 2px $colors$gray1, 0 0 0 4px $colors$focus",
                          textDecoration: "none"
                      }
                  }),
                  y: e => ({
                      transform: "translateY(".concat(e, "px)")
                  }),
                  x: e => ({
                      transform: "translateX(".concat(e, "px)")
                  }),
                  debug: () => ({
                      outline: "1px solid red"
                  })
              }
          }), es = er("light", {
              colors: {
                  ...J.MA,
                  ...J.t3,
                  bg: "#FFF",
                  lowContrast: "#FFFFFF",
                  highContrast: "black",
                  ...J.iN,
                  ...J.fJ,
                  ...J.ek,
                  ...J.Dz,
                  ...J.Q6,
                  ...J.$C,
                  focus: "$colors$amber9",
                  grid: "var(--colors-gray8)"
              }
          }), el = er("dark", {
              colors: {
                  ...J.hU,
                  ...J.Ej,
                  ...J.qn,
                  ...J.u7,
                  ...J.zD,
                  ...J.by,
                  ...J.nA,
                  ...J.CP,
                  bg: "#000",
                  lowContrast: "black",
                  highContrast: "white"
              }
          }), eu = et({
              "*, *::before, *::after": {
                  boxSizing: "border-box",
                  margin: 0,
                  "-webkit-font-smoothing": "antialiased",
                  "-moz-osx-font-smoothing": "grayscale"
              },
              body: {
                  fontFamily: "$body"
              },
              "::selection": {
                  background: "#fff9a8",
                  color: "black"
              },
              "input, button": {
                  background: "none",
                  border: 0,
                  margin: 0,
                  padding: 0,
                  fontFamily: "$body"
              },
              strong: {
                  fontWeight: "600",
                  color: "$gray12"
              }
          })
      },
      1460: function() {},
      9008: function(e, t, n) {
          e.exports = n(2636)
      },
      1664: function(e, t, n) {
          e.exports = n(5569)
      },
      1163: function(e, t, n) {
          e.exports = n(6885)
      },
      2703: function(e, t, n) {
          "use strict";
          var r = n(414);

          function i() {}

          function o() {}
          o.resetWarningCache = i, e.exports = function() {
              function e(e, t, n, i, o, a) {
                  if (a !== r) {
                      var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                      throw s.name = "Invariant Violation", s
                  }
              }

              function t() {
                  return e
              }
              e.isRequired = e;
              var n = {
                  array: e,
                  bool: e,
                  func: e,
                  number: e,
                  object: e,
                  string: e,
                  symbol: e,
                  any: e,
                  arrayOf: t,
                  element: e,
                  elementType: e,
                  instanceOf: t,
                  node: e,
                  objectOf: t,
                  oneOf: t,
                  oneOfType: t,
                  shape: t,
                  exact: t,
                  checkPropTypes: o,
                  resetWarningCache: i
              };
              return n.PropTypes = n, n
          }
      },
      5697: function(e, t, n) {
          e.exports = n(2703)()
      },
      414: function(e) {
          "use strict";
          e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
      },
      2765: function(e, t, n) {
          "use strict";
          n.d(t, {
              $C: function() {
                  return g
              },
              CP: function() {
                  return u
              },
              Dz: function() {
                  return d
              },
              Ej: function() {
                  return c
              },
              MA: function() {
                  return p
              },
              Q6: function() {
                  return m
              },
              by: function() {
                  return l
              },
              ek: function() {
                  return f
              },
              fJ: function() {
                  return v
              },
              hU: function() {
                  return o
              },
              iN: function() {
                  return h
              },
              nA: function() {
                  return s
              },
              qn: function() {
                  return i
              },
              t3: function() {
                  return y
              },
              u7: function() {
                  return a
              },
              zD: function() {
                  return r
              }
          });
          let r = {
                  amber1: "hsl(36 100% 6.1%)",
                  amber2: "hsl(35 100% 7.6%)",
                  amber3: "hsl(32 100% 10.2%)",
                  amber4: "hsl(32 100% 12.4%)",
                  amber5: "hsl(33 100% 14.6%)",
                  amber6: "hsl(35 100% 17.1%)",
                  amber7: "hsl(35 91.0% 21.6%)",
                  amber8: "hsl(36 100% 25.5%)",
                  amber9: "hsl(39 100% 57.0%)",
                  amber10: "hsl(43 100% 64.0%)",
                  amber11: "hsl(39 90.0% 49.8%)",
                  amber12: "hsl(39 97.0% 93.2%)"
              },
              i = {
                  blue1: "hsl(212 35.0% 9.2%)",
                  blue2: "hsl(216 50.0% 11.8%)",
                  blue3: "hsl(214 59.4% 15.3%)",
                  blue4: "hsl(214 65.8% 17.9%)",
                  blue5: "hsl(213 71.2% 20.2%)",
                  blue6: "hsl(212 77.4% 23.1%)",
                  blue7: "hsl(211 85.1% 27.4%)",
                  blue8: "hsl(211 89.7% 34.1%)",
                  blue9: "hsl(206 100% 50.0%)",
                  blue10: "hsl(209 100% 60.6%)",
                  blue11: "hsl(210 100% 66.1%)",
                  blue12: "hsl(206 98.0% 95.8%)"
              },
              o = {
                  gray1: "hsl(0 0% 8.5%)",
                  gray2: "hsl(0 0% 11.0%)",
                  gray3: "hsl(0 0% 13.6%)",
                  gray4: "hsl(0 0% 15.8%)",
                  gray5: "hsl(0 0% 17.9%)",
                  gray6: "hsl(0 0% 20.5%)",
                  gray7: "hsl(0 0% 24.3%)",
                  gray8: "hsl(0 0% 31.2%)",
                  gray9: "hsl(0 0% 43.9%)",
                  gray10: "hsl(0 0% 49.4%)",
                  gray11: "hsl(0 0% 62.8%)",
                  gray12: "hsl(0 0% 93.0%)"
              },
              a = {
                  green1: "hsl(146 30.0% 7.4%)",
                  green2: "hsl(155 44.2% 8.4%)",
                  green3: "hsl(155 46.7% 10.9%)",
                  green4: "hsl(154 48.4% 12.9%)",
                  green5: "hsl(154 49.7% 14.9%)",
                  green6: "hsl(154 50.9% 17.6%)",
                  green7: "hsl(153 51.8% 21.8%)",
                  green8: "hsl(151 51.7% 28.4%)",
                  green9: "hsl(151 55.0% 41.5%)",
                  green10: "hsl(151 49.3% 46.5%)",
                  green11: "hsl(151 50.0% 53.2%)",
                  green12: "hsl(137 72.0% 94.0%)"
              },
              s = {
                  red1: "hsl(353 23.0% 9.8%)",
                  red2: "hsl(357 34.4% 12.0%)",
                  red3: "hsl(356 43.4% 16.4%)",
                  red4: "hsl(356 47.6% 19.2%)",
                  red5: "hsl(356 51.1% 21.9%)",
                  red6: "hsl(356 55.2% 25.9%)",
                  red7: "hsl(357 60.2% 31.8%)",
                  red8: "hsl(358 65.0% 40.4%)",
                  red9: "hsl(358 75.0% 59.0%)",
                  red10: "hsl(358 85.3% 64.0%)",
                  red11: "hsl(358 100% 69.5%)",
                  red12: "hsl(351 89.0% 96.0%)"
              },
              l = {
                  teal1: "hsl(168 48.0% 6.5%)",
                  teal2: "hsl(169 77.8% 7.1%)",
                  teal3: "hsl(170 76.1% 9.2%)",
                  teal4: "hsl(171 75.8% 11.0%)",
                  teal5: "hsl(171 75.7% 12.8%)",
                  teal6: "hsl(172 75.8% 15.1%)",
                  teal7: "hsl(172 76.7% 18.6%)",
                  teal8: "hsl(173 80.2% 23.7%)",
                  teal9: "hsl(173 80.0% 36.0%)",
                  teal10: "hsl(174 83.9% 38.2%)",
                  teal11: "hsl(174 90.0% 40.7%)",
                  teal12: "hsl(166 73.0% 93.1%)"
              },
              u = {
                  blueA1: "hsl(0 0% 0% / 0)",
                  blueA2: "hsl(221 97.8% 52.4% / 0.059)",
                  blueA3: "hsl(215 99.3% 54.2% / 0.135)",
                  blueA4: "hsl(215 99.3% 53.8% / 0.198)",
                  blueA5: "hsl(213 99.4% 52.8% / 0.252)",
                  blueA6: "hsl(212 99.9% 51.7% / 0.323)",
                  blueA7: "hsl(211 100% 50.7% / 0.435)",
                  blueA8: "hsl(211 99.8% 50.9% / 0.597)",
                  blueA9: "hsl(205 100% 50.0% / 0.980)",
                  blueA10: "hsl(208 100% 60.7% / 0.980)",
                  blueA11: "hsl(209 100% 66.3% / 0.980)",
                  blueA12: "hsl(196 100% 96.8% / 0.980)"
              },
              c = {
                  grayA1: "hsl(0 0% 100% / 0)",
                  grayA2: "hsl(0 0% 100% / 0.026)",
                  grayA3: "hsl(0 0% 100% / 0.056)",
                  grayA4: "hsl(0 0% 100% / 0.077)",
                  grayA5: "hsl(0 0% 100% / 0.103)",
                  grayA6: "hsl(0 0% 100% / 0.129)",
                  grayA7: "hsl(0 0% 100% / 0.172)",
                  grayA8: "hsl(0 0% 100% / 0.249)",
                  grayA9: "hsl(0 0% 100% / 0.386)",
                  grayA10: "hsl(0 0% 100% / 0.446)",
                  grayA11: "hsl(0 0% 100% / 0.592)",
                  grayA12: "hsl(0 0% 100% / 0.923)"
              },
              d = {
                  amber1: "hsl(39 70.0% 99.0%)",
                  amber2: "hsl(40 100% 96.5%)",
                  amber3: "hsl(44 100% 91.7%)",
                  amber4: "hsl(43 100% 86.8%)",
                  amber5: "hsl(42 100% 81.8%)",
                  amber6: "hsl(38 99.7% 76.3%)",
                  amber7: "hsl(36 86.1% 67.1%)",
                  amber8: "hsl(35 85.2% 55.1%)",
                  amber9: "hsl(39 100% 57.0%)",
                  amber10: "hsl(35 100% 55.5%)",
                  amber11: "hsl(30 100% 34.0%)",
                  amber12: "hsl(20 80.0% 17.0%)"
              },
              h = {
                  blue1: "hsl(206 100% 99.2%)",
                  blue2: "hsl(210 100% 98.0%)",
                  blue3: "hsl(209 100% 96.5%)",
                  blue4: "hsl(210 98.8% 94.0%)",
                  blue5: "hsl(209 95.0% 90.1%)",
                  blue6: "hsl(209 81.2% 84.5%)",
                  blue7: "hsl(208 77.5% 76.9%)",
                  blue8: "hsl(206 81.9% 65.3%)",
                  blue9: "hsl(206 100% 50.0%)",
                  blue10: "hsl(208 100% 47.3%)",
                  blue11: "hsl(211 100% 43.2%)",
                  blue12: "hsl(211 100% 15.0%)"
              },
              p = {
                  gray1: "hsl(0 0% 99.0%)",
                  gray2: "hsl(0 0% 97.3%)",
                  gray3: "hsl(0 0% 95.1%)",
                  gray4: "hsl(0 0% 93.0%)",
                  gray5: "hsl(0 0% 90.9%)",
                  gray6: "hsl(0 0% 88.7%)",
                  gray7: "hsl(0 0% 85.8%)",
                  gray8: "hsl(0 0% 78.0%)",
                  gray9: "hsl(0 0% 56.1%)",
                  gray10: "hsl(0 0% 52.3%)",
                  gray11: "hsl(0 0% 43.5%)",
                  gray12: "hsl(0 0% 9.0%)"
              },
              f = {
                  green1: "hsl(136 50.0% 98.9%)",
                  green2: "hsl(138 62.5% 96.9%)",
                  green3: "hsl(139 55.2% 94.5%)",
                  green4: "hsl(140 48.7% 91.0%)",
                  green5: "hsl(141 43.7% 86.0%)",
                  green6: "hsl(143 40.3% 79.0%)",
                  green7: "hsl(146 38.5% 69.0%)",
                  green8: "hsl(151 40.2% 54.1%)",
                  green9: "hsl(151 55.0% 41.5%)",
                  green10: "hsl(152 57.5% 37.6%)",
                  green11: "hsl(153 67.0% 28.5%)",
                  green12: "hsl(155 40.0% 14.0%)"
              },
              m = {
                  red1: "hsl(359 100% 99.4%)",
                  red2: "hsl(359 100% 98.6%)",
                  red3: "hsl(360 100% 96.8%)",
                  red4: "hsl(360 97.9% 94.8%)",
                  red5: "hsl(360 90.2% 91.9%)",
                  red6: "hsl(360 81.7% 87.8%)",
                  red7: "hsl(359 74.2% 81.7%)",
                  red8: "hsl(359 69.5% 74.3%)",
                  red9: "hsl(358 75.0% 59.0%)",
                  red10: "hsl(358 69.4% 55.2%)",
                  red11: "hsl(358 65.0% 48.7%)",
                  red12: "hsl(354 50.0% 14.6%)"
              },
              g = {
                  teal1: "hsl(165 60.0% 98.8%)",
                  teal2: "hsl(169 64.7% 96.7%)",
                  teal3: "hsl(169 59.8% 94.0%)",
                  teal4: "hsl(169 53.1% 90.2%)",
                  teal5: "hsl(170 47.1% 85.0%)",
                  teal6: "hsl(170 42.6% 77.9%)",
                  teal7: "hsl(170 39.9% 68.1%)",
                  teal8: "hsl(172 42.1% 52.5%)",
                  teal9: "hsl(173 80.0% 36.0%)",
                  teal10: "hsl(173 83.4% 32.5%)",
                  teal11: "hsl(174 90.0% 25.2%)",
                  teal12: "hsl(170 50.0% 12.5%)"
              },
              v = {
                  blueA1: "hsl(210 100% 51.0% / 0.016)",
                  blueA2: "hsl(210 100% 51.0% / 0.040)",
                  blueA3: "hsl(210 100% 50.3% / 0.071)",
                  blueA4: "hsl(210 100% 50.1% / 0.118)",
                  blueA5: "hsl(208 99.1% 47.1% / 0.189)",
                  blueA6: "hsl(209 99.5% 45.3% / 0.283)",
                  blueA7: "hsl(208 99.9% 43.8% / 0.412)",
                  blueA8: "hsl(206 99.8% 45.1% / 0.632)",
                  blueA9: "hsl(206 100% 50.0% / 0.980)",
                  blueA10: "hsl(208 100% 47.2% / 0.980)",
                  blueA11: "hsl(212 100% 43.0% / 0.980)",
                  blueA12: "hsl(213 100% 14.4% / 0.980)"
              },
              y = {
                  grayA1: "hsl(0 0% 0% / 0.012)",
                  grayA2: "hsl(0 0% 0% / 0.027)",
                  grayA3: "hsl(0 0% 0% / 0.047)",
                  grayA4: "hsl(0 0% 0% / 0.071)",
                  grayA5: "hsl(0 0% 0% / 0.090)",
                  grayA6: "hsl(0 0% 0% / 0.114)",
                  grayA7: "hsl(0 0% 0% / 0.141)",
                  grayA8: "hsl(0 0% 0% / 0.220)",
                  grayA9: "hsl(0 0% 0% / 0.439)",
                  grayA10: "hsl(0 0% 0% / 0.478)",
                  grayA11: "hsl(0 0% 0% / 0.565)",
                  grayA12: "hsl(0 0% 0% / 0.910)"
              }
      },
      2064: function(e, t, n) {
          "use strict";
          n.d(t, {
              j: function() {
                  return a
              }
          });
          var r = n(7210),
              i = n(3234),
              o = n(406);

          function a(e, t, n = {}) {
              let a = (0, o.i)(e) ? e : (0, i.B)(e);
              return a.start((0, r.Z)("", a, t, n)), {
                  stop: () => a.stop(),
                  isAnimating: () => a.isAnimating()
              }
          }
      },
      7210: function(e, t, n) {
          "use strict";
          n.d(t, {
              Z: function() {
                  return A
              }
          });
          var r = n(4394),
              i = n(6917);
          let o = {
              current: !1
          };
          var a = n(404),
              s = n(6612);
          let l = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
              u = {
                  linear: "linear",
                  ease: "ease",
                  easeIn: "ease-in",
                  easeOut: "ease-out",
                  easeInOut: "ease-in-out",
                  circIn: l([0, .65, .55, 1]),
                  circOut: l([.55, 0, 1, .45]),
                  backIn: l([.31, .01, .66, -.59]),
                  backOut: l([.33, 1.53, .69, .99])
              },
              c = {
                  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
              },
              d = {},
              h = {};
          for (let e in c) h[e] = () => (void 0 === d[e] && (d[e] = c[e]()), d[e]);
          let p = new Set(["opacity"]);
          var f = n(3378),
              m = n(3038),
              g = n(7367);
          let v = () => ({
                  type: "spring",
                  stiffness: 500,
                  damping: 25,
                  restSpeed: 10
              }),
              y = e => ({
                  type: "spring",
                  stiffness: 550,
                  damping: 0 === e ? 2 * Math.sqrt(550) : 30,
                  restSpeed: 10
              }),
              b = () => ({
                  type: "keyframes",
                  ease: "linear",
                  duration: .3
              }),
              x = {
                  type: "keyframes",
                  duration: .8
              },
              w = {
                  x: v,
                  y: v,
                  z: v,
                  rotate: v,
                  rotateX: v,
                  rotateY: v,
                  rotateZ: v,
                  scaleX: y,
                  scaleY: y,
                  scale: y,
                  opacity: b,
                  backgroundColor: b,
                  color: b,
                  default: y
              },
              k = (e, {
                  keyframes: t
              }) => {
                  if (t.length > 2) return x;
                  {
                      let n = w[e] || w.default;
                      return n(t[1])
                  }
              };
          var E = n(1550);
          let S = (e, t) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && E.P.test(t) && !t.startsWith("url("));
          var C = n(9135),
              j = n(1056);
          let A = (e, t, n, c = {}) => d => {
              let v = (0, j.ev)(c, e) || {},
                  y = v.delay || c.delay || 0,
                  {
                      elapsed: b = 0
                  } = c;
              b -= (0, i.w)(y);
              let x = function(e, t, n, r) {
                      let i = S(t, n),
                          o = void 0 !== r.from ? r.from : e.get();
                      return ("none" === o && i && "string" == typeof n ? o = (0, C.T)(t, n) : (0, j.Fr)(o) && "string" == typeof n ? o = (0, j.GZ)(n) : !Array.isArray(n) && (0, j.Fr)(n) && "string" == typeof o && (n = (0, j.GZ)(o)), Array.isArray(n)) ? (null === n[0] && (n[0] = o), n) : [o, n]
                  }(t, e, n, v),
                  w = x[0],
                  E = x[x.length - 1],
                  A = S(e, w),
                  T = S(e, E);
              (0, r.K)(A === T, `You are trying to animate ${e} from "${w}" to "${E}". ${w} is not an animatable value - to enable this animation set ${w} to a value animatable to ${E} via the \`style\` property.`);
              let M = {
                  keyframes: x,
                  velocity: t.getVelocity(),
                  ...v,
                  elapsed: b,
                  onUpdate: e => {
                      t.set(e), v.onUpdate && v.onUpdate(e)
                  },
                  onComplete: () => {
                      d(), v.onComplete && v.onComplete()
                  }
              };
              if (!A || !T || o.current || !1 === v.type) return function({
                  keyframes: e,
                  elapsed: t,
                  onUpdate: n,
                  onComplete: r
              }) {
                  let i = () => (n && n(e[e.length - 1]), r && r(), () => {});
                  return t ? (0, f.g)(i, -t) : i()
              }(M);
              if ("inertia" === v.type) {
                  let e = function({
                      keyframes: e,
                      velocity: t = 0,
                      min: n,
                      max: r,
                      power: i = .8,
                      timeConstant: o = 750,
                      bounceStiffness: a = 500,
                      bounceDamping: l = 10,
                      restDelta: u = 1,
                      modifyTarget: c,
                      driver: d,
                      onUpdate: h,
                      onComplete: p,
                      onStop: f
                  }) {
                      let v;
                      let y = e[0];

                      function b(e) {
                          return void 0 !== n && e < n || void 0 !== r && e > r
                      }

                      function x(e) {
                          return void 0 === n ? r : void 0 === r ? n : Math.abs(n - e) < Math.abs(r - e) ? n : r
                      }

                      function w(e) {
                          null == v || v.stop(), v = (0, s.jt)({
                              keyframes: [0, 1],
                              velocity: 0,
                              ...e,
                              driver: d,
                              onUpdate: t => {
                                  var n;
                                  null == h || h(t), null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                              },
                              onComplete: p,
                              onStop: f
                          })
                      }

                      function k(e) {
                          w({
                              type: "spring",
                              stiffness: a,
                              damping: l,
                              restDelta: u,
                              ...e
                          })
                      }
                      if (b(y)) k({
                          velocity: t,
                          keyframes: [y, x(y)]
                      });
                      else {
                          let e, r, a = i * t + y;
                          void 0 !== c && (a = c(a));
                          let s = x(a),
                              l = s === n ? -1 : 1,
                              d = n => {
                                  e = r, r = n, t = (0, m.R)(n - e, g.w.delta), (1 === l && n > s || -1 === l && n < s) && k({
                                      keyframes: [n, s],
                                      velocity: t
                                  })
                              };
                          w({
                              type: "decay",
                              keyframes: [y, 0],
                              velocity: t,
                              timeConstant: o,
                              power: i,
                              restDelta: u,
                              modifyTarget: c,
                              onUpdate: b(a) ? d : void 0
                          })
                      }
                      return {
                          stop: () => null == v ? void 0 : v.stop()
                      }
                  }(M);
                  return () => e.stop()
              }(0, j.rw)(v) || (M = {
                  ...M,
                  ...k(e, M)
              }), M.duration && (M.duration = (0, i.w)(M.duration)), M.repeatDelay && (M.repeatDelay = (0, i.w)(M.repeatDelay));
              let P = t.owner,
                  R = P && P.current;
              if (P && R instanceof HTMLElement && !(null == P ? void 0 : P.getProps().onUpdate)) {
                  let n = function(e, t, {
                      onUpdate: n,
                      onComplete: r,
                      ...i
                  }) {
                      var o;
                      let c = h.waapi() && p.has(t) && !i.repeatDelay && "mirror" !== i.repeatType && 0 !== i.damping;
                      if (!c) return !1;
                      let {
                          keyframes: d,
                          duration: f = 300,
                          elapsed: m = 0,
                          ease: g
                      } = i;
                      if ("spring" === i.type || !(!(o = i.ease) || Array.isArray(o) || "string" == typeof o && u[o])) {
                          if (i.repeat === 1 / 0) return;
                          let e = (0, s.jt)(i),
                              t = {
                                  done: !1,
                                  value: d[0]
                              },
                              n = [],
                              r = 0;
                          for (; !t.done && r < 2e4;) n.push((t = e.sample(r)).value), r += 10;
                          d = n, f = r - 10, g = "linear"
                      }
                      let v = function(e, t, n, {
                          delay: r = 0,
                          duration: i,
                          repeat: o = 0,
                          repeatType: a = "loop",
                          ease: s,
                          times: c
                      } = {}) {
                          return e.animate({
                              [t]: n,
                              offset: c
                          }, {
                              delay: r,
                              duration: i,
                              easing: function(e) {
                                  if (e) return Array.isArray(e) ? l(e) : u[e]
                              }(s),
                              fill: "both",
                              iterations: o + 1,
                              direction: "reverse" === a ? "alternate" : "normal"
                          })
                      }(e.owner.current, t, d, {
                          ...i,
                          delay: -m,
                          duration: f,
                          ease: g
                      });
                      return v.onfinish = () => {
                          e.set(function(e, {
                              repeat: t,
                              repeatType: n = "loop"
                          }) {
                              let r = t && "loop" !== n && t % 2 == 1 ? 0 : e.length - 1;
                              return e[r]
                          }(d, i)), r && r()
                      }, () => {
                          let {
                              currentTime: t
                          } = v;
                          if (t) {
                              let n = (0, s.jt)({
                                  ...i,
                                  autoplay: !1
                              });
                              e.setWithVelocity(n.sample(t - 10).value, n.sample(t).value, 10)
                          }
                          a.Z_.update(() => v.cancel())
                      }
                  }(t, e, M);
                  if (n) return n
              }
              let V = (0, s.jt)(M);
              return () => V.stop()
          }
      },
      6612: function(e, t, n) {
          "use strict";
          n.d(t, {
              jt: function() {
                  return $
              }
          });
          var r = n(415),
              i = n(5129);
          let o = e => e * e,
              a = (0, i.M)(o),
              s = (0, r.o)(o);
          var l = n(4606),
              u = n(4394),
              c = n(1662);
          let d = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;

          function h(e, t, n, r) {
              if (e === t && n === r) return c.Z;
              let i = t => (function(e, t, n, r, i) {
                  let o, a;
                  let s = 0;
                  do(o = d(a = t + (n - t) / 2, r, i) - e) > 0 ? n = a : t = a; while (Math.abs(o) > 1e-7 && ++s < 12);
                  return a
              })(t, 0, 1, e, n);
              return e => 0 === e || 1 === e ? e : d(i(e), t, r)
          }
          var p = n(7255);
          let f = h(.33, 1.53, .69, .99),
              m = (0, i.M)(f),
              g = (0, r.o)(m),
              v = e => (e *= 2) < 1 ? .5 * m(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
              y = {
                  linear: c.Z,
                  easeIn: o,
                  easeInOut: s,
                  easeOut: a,
                  circIn: p.Z7,
                  circInOut: p.X7,
                  circOut: p.Bn,
                  backIn: m,
                  backInOut: g,
                  backOut: f,
                  anticipate: v
              },
              b = e => {
                  if (Array.isArray(e)) {
                      (0, u.k)(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
                      let [t, n, r, i] = e;
                      return h(t, n, r, i)
                  }
                  return "string" == typeof e ? ((0, u.k)(void 0 !== y[e], `Invalid easing type '${e}'`), y[e]) : e
              },
              x = e => Array.isArray(e) && "number" != typeof e[0];

          function w({
              keyframes: e,
              ease: t = s,
              times: n,
              duration: r = 300
          }) {
              e = [...e];
              let i = x(t) ? t.map(b) : b(t),
                  o = {
                      done: !1,
                      value: e[0]
                  },
                  a = (n && n.length === e.length ? n : function(e) {
                      let t = e.length;
                      return e.map((e, n) => 0 !== n ? n / (t - 1) : 0)
                  }(e)).map(e => e * r);

              function u() {
                  var t;
                  return (0, l.s)(a, e, {
                      ease: Array.isArray(i) ? i : (t = e).map(() => i || s).splice(0, t.length - 1)
                  })
              }
              let c = u();
              return {
                  next: e => (o.value = c(e), o.done = e >= r, o),
                  flipTarget: () => {
                      e.reverse(), c = u()
                  }
              }
          }
          var k = n(4169);

          function E(e, t) {
              return e * Math.sqrt(1 - t * t)
          }
          var S = n(3038);
          let C = ["duration", "bounce"],
              j = ["stiffness", "damping", "mass"];

          function A(e, t) {
              return t.some(t => void 0 !== e[t])
          }

          function T({
              keyframes: e,
              restSpeed: t = 2,
              restDelta: n = .01,
              ...r
          }) {
              let i = e[0],
                  o = e[e.length - 1],
                  a = {
                      done: !1,
                      value: i
                  },
                  {
                      stiffness: s,
                      damping: l,
                      mass: c,
                      velocity: d,
                      duration: h,
                      isResolvedFromDuration: p
                  } = function(e) {
                      let t = {
                          velocity: 0,
                          stiffness: 100,
                          damping: 10,
                          mass: 1,
                          isResolvedFromDuration: !1,
                          ...e
                      };
                      if (!A(e, j) && A(e, C)) {
                          let n = function({
                              duration: e = 800,
                              bounce: t = .25,
                              velocity: n = 0,
                              mass: r = 1
                          }) {
                              let i, o;
                              (0, u.K)(e <= 1e4, "Spring duration must be 10 seconds or less");
                              let a = 1 - t;
                              a = (0, k.u)(.05, 1, a), e = (0, k.u)(.01, 10, e / 1e3), a < 1 ? (i = t => {
                                  let r = t * a,
                                      i = r * e,
                                      o = E(t, a);
                                  return .001 - (r - n) / o * Math.exp(-i)
                              }, o = t => {
                                  let r = t * a,
                                      o = r * e,
                                      s = Math.pow(a, 2) * Math.pow(t, 2) * e,
                                      l = E(Math.pow(t, 2), a),
                                      u = -i(t) + .001 > 0 ? -1 : 1;
                                  return u * ((o * n + n - s) * Math.exp(-o)) / l
                              }) : (i = t => {
                                  let r = Math.exp(-t * e),
                                      i = (t - n) * e + 1;
                                  return -.001 + r * i
                              }, o = t => {
                                  let r = Math.exp(-t * e),
                                      i = (n - t) * (e * e);
                                  return r * i
                              });
                              let s = 5 / e,
                                  l = function(e, t, n) {
                                      let r = n;
                                      for (let n = 1; n < 12; n++) r -= e(r) / t(r);
                                      return r
                                  }(i, o, s);
                              if (e *= 1e3, isNaN(l)) return {
                                  stiffness: 100,
                                  damping: 10,
                                  duration: e
                              };
                              {
                                  let t = Math.pow(l, 2) * r;
                                  return {
                                      stiffness: t,
                                      damping: 2 * a * Math.sqrt(r * t),
                                      duration: e
                                  }
                              }
                          }(e);
                          (t = {
                              ...t,
                              ...n,
                              velocity: 0,
                              mass: 1
                          }).isResolvedFromDuration = !0
                      }
                      return t
                  }(r),
                  f = M,
                  m = d ? -(d / 1e3) : 0,
                  g = l / (2 * Math.sqrt(s * c));

              function v() {
                  let e = o - i,
                      t = Math.sqrt(s / c) / 1e3;
                  if (void 0 === n && (n = Math.min(Math.abs(o - i) / 100, .4)), g < 1) {
                      let n = E(t, g);
                      f = r => o - Math.exp(-g * t * r) * ((m + g * t * e) / n * Math.sin(n * r) + e * Math.cos(n * r))
                  } else if (1 === g) f = n => o - Math.exp(-t * n) * (e + (m + t * e) * n);
                  else {
                      let n = t * Math.sqrt(g * g - 1);
                      f = r => {
                          let i = Math.min(n * r, 300);
                          return o - Math.exp(-g * t * r) * ((m + g * t * e) * Math.sinh(i) + n * e * Math.cosh(i)) / n
                      }
                  }
              }
              return v(), {
                  next: e => {
                      let r = f(e);
                      if (p) a.done = e >= h;
                      else {
                          let i = m;
                          if (0 !== e) {
                              if (g < 1) {
                                  let t = Math.max(0, e - 5);
                                  i = (0, S.R)(r - f(t), e - t)
                              } else i = 0
                          }
                          let s = Math.abs(i) <= t,
                              l = Math.abs(o - r) <= n;
                          a.done = s && l
                      }
                      return a.value = a.done ? o : r, a
                  },
                  flipTarget: () => {
                      m = -m, [i, o] = [o, i], v()
                  }
              }
          }
          T.needsInterpolation = (e, t) => "string" == typeof e || "string" == typeof t;
          let M = e => 0;
          var P = n(404);
          let R = {
              decay: function({
                  keyframes: e = [0],
                  velocity: t = 0,
                  power: n = .8,
                  timeConstant: r = 350,
                  restDelta: i = .5,
                  modifyTarget: o
              }) {
                  let a = e[0],
                      s = {
                          done: !1,
                          value: a
                      },
                      l = n * t,
                      u = a + l,
                      c = void 0 === o ? u : o(u);
                  return c !== u && (l = c - a), {
                      next: e => {
                          let t = -l * Math.exp(-e / r);
                          return s.done = !(t > i || t < -i), s.value = s.done ? c : c + t, s
                      },
                      flipTarget: () => {}
                  }
              },
              keyframes: w,
              tween: w,
              spring: T
          };

          function V(e, t, n = 0) {
              return e - t - n
          }
          let L = e => {
              let t = ({
                  delta: t
              }) => e(t);
              return {
                  start: () => P.Z_.update(t, !0),
                  stop: () => P.qY.update(t)
              }
          };

          function $({
              duration: e,
              driver: t = L,
              elapsed: n = 0,
              repeat: r = 0,
              repeatType: i = "loop",
              repeatDelay: o = 0,
              keyframes: a,
              autoplay: s = !0,
              onPlay: u,
              onStop: c,
              onComplete: d,
              onRepeat: h,
              onUpdate: p,
              type: f = "keyframes",
              ...m
          }) {
              var g;
              let v, y;
              let b = n,
                  x = 0,
                  k = e,
                  E = !1,
                  S = !0,
                  C = R[a.length > 2 ? "keyframes" : f] || w,
                  j = a[0],
                  A = a[a.length - 1],
                  T = {
                      done: !1,
                      value: j
                  };
              (null === (g = C.needsInterpolation) || void 0 === g ? void 0 : g.call(C, j, A)) && (y = (0, l.s)([0, 100], [j, A], {
                  clamp: !1
              }), a = [0, 100]);
              let M = C({
                  ...m,
                  duration: e,
                  keyframes: a
              });

              function P(e) {
                  if (S || (e = -e), n += e, E || (T = M.next(Math.max(0, n)), y && (T.value = y(T.value)), E = S ? T.done : n <= 0), p && p(T.value), E) {
                      if (0 === x && (k = void 0 !== k ? k : n), x < r) {
                          var t, a;
                          t = n, a = k, (S ? t >= a + o : t <= -o) && (x++, "reverse" === i ? n = function(e, t = 0, n = 0, r = !0) {
                              return r ? V(t + -e, t, n) : t - (e - t) + n
                          }(n, k, o, S = x % 2 == 0) : (n = V(n, k, o), "mirror" === i && M.flipTarget()), E = !1, h && h())
                      } else v && v.stop(), d && d()
                  }
              }
              return s && (u && u(), (v = t(P)).start()), {
                  stop: () => {
                      c && c(), v && v.stop()
                  },
                  sample: t => {
                      n = b;
                      let r = e && "number" == typeof e ? Math.max(.5 * e, 50) : 50,
                          i = 0;
                      for (P(0); i <= t;) {
                          let e = t - i;
                          P(Math.min(e, r)), i += r
                      }
                      return T
                  }
              }
          }
      },
      1056: function(e, t, n) {
          "use strict";
          n.d(t, {
              Fr: function() {
                  return o
              },
              GZ: function() {
                  return a
              },
              ev: function() {
                  return s
              },
              rw: function() {
                  return i
              }
          });
          var r = n(9135);

          function i({
              when: e,
              delay: t,
              delayChildren: n,
              staggerChildren: r,
              staggerDirection: i,
              repeat: o,
              repeatType: a,
              repeatDelay: s,
              from: l,
              elapsed: u,
              ...c
          }) {
              return !!Object.keys(c).length
          }

          function o(e) {
              return 0 === e || "string" == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ")
          }

          function a(e) {
              return "number" == typeof e ? 0 : (0, r.T)("", e)
          }

          function s(e, t) {
              return e[t] || e.default || e
          }
      },
      5820: function(e, t, n) {
          "use strict";
          n.d(t, {
              M: function() {
                  return g
              }
          });
          var r = n(7294),
              i = n(404),
              o = n(8868);

          function a() {
              let e = (0, r.useRef)(!1);
              return (0, o.L)(() => (e.current = !0, () => {
                  e.current = !1
              }), []), e
          }
          var s = n(240),
              l = n(6681);
          class u extends r.Component {
              getSnapshotBeforeUpdate(e) {
                  let t = this.props.childRef.current;
                  if (t && e.isPresent && !this.props.isPresent) {
                      let e = this.props.sizeRef.current;
                      e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
                  }
                  return null
              }
              componentDidUpdate() {}
              render() {
                  return this.props.children
              }
          }

          function c({
              children: e,
              isPresent: t
          }) {
              let n = (0, r.useId)(),
                  i = (0, r.useRef)(null),
                  o = (0, r.useRef)({
                      width: 0,
                      height: 0,
                      top: 0,
                      left: 0
                  });
              return (0, r.useInsertionEffect)(() => {
                  let {
                      width: e,
                      height: r,
                      top: a,
                      left: s
                  } = o.current;
                  if (t || !i.current || !e || !r) return;
                  i.current.dataset.motionPopId = n;
                  let l = document.createElement("style");
                  return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
        [data-motion-pop-id="${n}"] {
          position: absolute !important;
          width: ${e}px !important;
          height: ${r}px !important;
          top: ${a}px !important;
          left: ${s}px !important;
        }
      `), () => {
                      document.head.removeChild(l)
                  }
              }, [t]), r.createElement(u, {
                  isPresent: t,
                  childRef: i,
                  sizeRef: o
              }, r.cloneElement(e, {
                  ref: i
              }))
          }
          let d = ({
              children: e,
              initial: t,
              isPresent: n,
              onExitComplete: i,
              custom: o,
              presenceAffectsLayout: a,
              mode: u
          }) => {
              let d = (0, l.h)(h),
                  p = (0, r.useId)(),
                  f = (0, r.useMemo)(() => ({
                      id: p,
                      initial: t,
                      isPresent: n,
                      custom: o,
                      onExitComplete: e => {
                          for (let t of (d.set(e, !0), d.values()))
                              if (!t) return;
                          i && i()
                      },
                      register: e => (d.set(e, !1), () => d.delete(e))
                  }), a ? void 0 : [n]);
              return (0, r.useMemo)(() => {
                  d.forEach((e, t) => d.set(t, !1))
              }, [n]), r.useEffect(() => {
                  n || d.size || !i || i()
              }, [n]), "popLayout" === u && (e = r.createElement(c, {
                  isPresent: n
              }, e)), r.createElement(s.O.Provider, {
                  value: f
              }, e)
          };

          function h() {
              return new Map
          }
          var p = n(5364),
              f = n(5411);
          let m = e => e.key || "",
              g = ({
                  children: e,
                  custom: t,
                  initial: n = !0,
                  onExitComplete: s,
                  exitBeforeEnter: l,
                  presenceAffectsLayout: u = !0,
                  mode: c = "sync"
              }) => {
                  l && (c = "wait");
                  let [h] = function() {
                      let e = a(),
                          [t, n] = (0, r.useState)(0),
                          o = (0, r.useCallback)(() => {
                              e.current && n(t + 1)
                          }, [t]),
                          s = (0, r.useCallback)(() => i.Z_.postRender(o), [o]);
                      return [s, t]
                  }(), g = (0, r.useContext)(p.p).forceRender;
                  g && (h = g);
                  let v = a(),
                      y = function(e) {
                          let t = [];
                          return r.Children.forEach(e, e => {
                              (0, r.isValidElement)(e) && t.push(e)
                          }), t
                      }(e),
                      b = y,
                      x = new Set,
                      w = (0, r.useRef)(b),
                      k = (0, r.useRef)(new Map).current,
                      E = (0, r.useRef)(!0);
                  if ((0, o.L)(() => {
                          E.current = !1,
                              function(e, t) {
                                  e.forEach(e => {
                                      let n = m(e);
                                      t.set(n, e)
                                  })
                              }(y, k), w.current = b
                      }), (0, f.z)(() => {
                          E.current = !0, k.clear(), x.clear()
                      }), E.current) return r.createElement(r.Fragment, null, b.map(e => r.createElement(d, {
                      key: m(e),
                      isPresent: !0,
                      initial: !!n && void 0,
                      presenceAffectsLayout: u,
                      mode: c
                  }, e)));
                  b = [...b];
                  let S = w.current.map(m),
                      C = y.map(m),
                      j = S.length;
                  for (let e = 0; e < j; e++) {
                      let t = S[e]; - 1 === C.indexOf(t) && x.add(t)
                  }
                  return "wait" === c && x.size && (b = []), x.forEach(e => {
                      if (-1 !== C.indexOf(e)) return;
                      let n = k.get(e);
                      if (!n) return;
                      let i = S.indexOf(e),
                          o = () => {
                              k.delete(e), x.delete(e);
                              let t = w.current.findIndex(t => t.key === e);
                              if (w.current.splice(t, 1), !x.size) {
                                  if (w.current = y, !1 === v.current) return;
                                  h(), s && s()
                              }
                          };
                      b.splice(i, 0, r.createElement(d, {
                          key: m(n),
                          isPresent: !1,
                          onExitComplete: o,
                          custom: t,
                          presenceAffectsLayout: u,
                          mode: c
                      }, n))
                  }), b = b.map(e => {
                      let t = e.key;
                      return x.has(t) ? e : r.createElement(d, {
                          key: m(e),
                          isPresent: !0,
                          presenceAffectsLayout: u,
                          mode: c
                      }, e)
                  }), r.createElement(r.Fragment, null, x.size ? b : b.map(e => (0, r.cloneElement)(e)))
              }
      },
      5364: function(e, t, n) {
          "use strict";
          n.d(t, {
              p: function() {
                  return i
              }
          });
          var r = n(7294);
          let i = (0, r.createContext)({})
      },
      6014: function(e, t, n) {
          "use strict";
          n.d(t, {
              _: function() {
                  return i
              }
          });
          var r = n(7294);
          let i = (0, r.createContext)({
              transformPagePoint: e => e,
              isStatic: !1,
              reducedMotion: "never"
          })
      },
      240: function(e, t, n) {
          "use strict";
          n.d(t, {
              O: function() {
                  return i
              }
          });
          var r = n(7294);
          let i = (0, r.createContext)(null)
      },
      7255: function(e, t, n) {
          "use strict";
          n.d(t, {
              Bn: function() {
                  return a
              },
              X7: function() {
                  return s
              },
              Z7: function() {
                  return o
              }
          });
          var r = n(415),
              i = n(5129);
          let o = e => 1 - Math.sin(Math.acos(e)),
              a = (0, i.M)(o),
              s = (0, r.o)(a)
      },
      415: function(e, t, n) {
          "use strict";
          n.d(t, {
              o: function() {
                  return r
              }
          });
          let r = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
      },
      5129: function(e, t, n) {
          "use strict";
          n.d(t, {
              M: function() {
                  return r
              }
          });
          let r = e => t => 1 - e(1 - t)
      },
      7367: function(e, t, n) {
          "use strict";
          n.d(t, {
              w: function() {
                  return r
              }
          });
          let r = {
              delta: 0,
              timestamp: 0
          }
      },
      404: function(e, t, n) {
          "use strict";
          n.d(t, {
              qY: function() {
                  return p
              },
              iW: function() {
                  return f
              },
              Z_: function() {
                  return h
              }
          });
          let r = 1 / 60 * 1e3,
              i = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
              o = "undefined" != typeof window ? e => window.requestAnimationFrame(e) : e => setTimeout(() => e(i()), r);
          var a = n(7367);
          let s = !0,
              l = !1,
              u = !1,
              c = ["read", "update", "preRender", "render", "postRender"],
              d = c.reduce((e, t) => (e[t] = function(e) {
                  let t = [],
                      n = [],
                      r = 0,
                      i = !1,
                      o = !1,
                      a = new WeakSet,
                      s = {
                          schedule: (e, o = !1, s = !1) => {
                              let l = s && i,
                                  u = l ? t : n;
                              return o && a.add(e), -1 === u.indexOf(e) && (u.push(e), l && i && (r = t.length)), e
                          },
                          cancel: e => {
                              let t = n.indexOf(e); - 1 !== t && n.splice(t, 1), a.delete(e)
                          },
                          process: l => {
                              if (i) {
                                  o = !0;
                                  return
                              }
                              if (i = !0, [t, n] = [n, t], n.length = 0, r = t.length)
                                  for (let n = 0; n < r; n++) {
                                      let r = t[n];
                                      r(l), a.has(r) && (s.schedule(r), e())
                                  }
                              i = !1, o && (o = !1, s.process(l))
                          }
                      };
                  return s
              }(() => l = !0), e), {}),
              h = c.reduce((e, t) => {
                  let n = d[t];
                  return e[t] = (e, t = !1, r = !1) => (l || v(), n.schedule(e, t, r)), e
              }, {}),
              p = c.reduce((e, t) => (e[t] = d[t].cancel, e), {}),
              f = c.reduce((e, t) => (e[t] = () => d[t].process(a.w), e), {}),
              m = e => d[e].process(a.w),
              g = e => {
                  l = !1, a.w.delta = s ? r : Math.max(Math.min(e - a.w.timestamp, 40), 1), a.w.timestamp = e, u = !0, c.forEach(m), u = !1, l && (s = !1, o(g))
              },
              v = () => {
                  l = !0, s = !0, u || o(g)
              }
      },
      566: function(e, t, n) {
          "use strict";
          n.d(t, {
              E: function() {
                  return rh
              }
          });
          var r, i, o, a, s = n(7294),
              l = n(6014);
          let u = (0, s.createContext)({});
          var c = n(240),
              d = n(8868);
          let h = (0, s.createContext)({
              strict: !1
          });

          function p(e) {
              return "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
          }

          function f(e) {
              return "string" == typeof e || Array.isArray(e)
          }

          function m(e) {
              return "object" == typeof e && "function" == typeof e.start
          }
          let g = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

          function v(e) {
              return m(e.animate) || g.some(t => f(e[t]))
          }

          function y(e) {
              return !!(v(e) || e.variants)
          }

          function b(e) {
              return Array.isArray(e) ? e.join(" ") : e
          }
          let x = e => ({
                  isEnabled: t => e.some(e => !!t[e])
              }),
              w = {
                  measureLayout: x(["layout", "layoutId", "drag"]),
                  animation: x(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
                  exit: x(["exit"]),
                  drag: x(["drag", "dragControls"]),
                  focus: x(["whileFocus"]),
                  hover: x(["whileHover", "onHoverStart", "onHoverEnd"]),
                  tap: x(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
                  pan: x(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
                  inView: x(["whileInView", "onViewportEnter", "onViewportLeave"])
              };
          var k = n(1741),
              E = n(6681);
          let S = {
                  hasAnimatedSinceResize: !0,
                  hasEverUpdated: !1
              },
              C = 1;
          var j = n(5364);
          class A extends s.Component {
              getSnapshotBeforeUpdate() {
                  let {
                      visualElement: e,
                      props: t
                  } = this.props;
                  return e && e.setProps(t), null
              }
              componentDidUpdate() {}
              render() {
                  return this.props.children
              }
          }
          let T = (0, s.createContext)({}),
              M = Symbol.for("motionComponentSymbol"),
              P = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

          function R(e) {
              if ("string" != typeof e || e.includes("-"));
              else if (P.indexOf(e) > -1 || /[A-Z]/.test(e)) return !0;
              return !1
          }
          let V = {},
              L = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
              $ = new Set(L);

          function B(e, {
              layout: t,
              layoutId: n
          }) {
              return $.has(e) || e.startsWith("origin") || (t || void 0 !== n) && (!!V[e] || "opacity" === e)
          }
          var O = n(406);
          let I = {
                  x: "translateX",
                  y: "translateY",
                  z: "translateZ",
                  transformPerspective: "perspective"
              },
              D = (e, t) => L.indexOf(e) - L.indexOf(t);

          function F(e) {
              return e.startsWith("--")
          }
          let z = (e, t) => t && "number" == typeof e ? t.transform(e) : e;
          var G = n(6173);

          function W(e, t, n, r) {
              let {
                  style: i,
                  vars: o,
                  transform: a,
                  transformKeys: s,
                  transformOrigin: l
              } = e;
              s.length = 0;
              let u = !1,
                  c = !1,
                  d = !0;
              for (let e in t) {
                  let n = t[e];
                  if (F(e)) {
                      o[e] = n;
                      continue
                  }
                  let r = G.j[e],
                      h = z(n, r);
                  if ($.has(e)) {
                      if (u = !0, a[e] = h, s.push(e), !d) continue;
                      n !== (r.default || 0) && (d = !1)
                  } else e.startsWith("origin") ? (c = !0, l[e] = h) : i[e] = h
              }
              if (!t.transform && (u || r ? i.transform = function({
                      transform: e,
                      transformKeys: t
                  }, {
                      enableHardwareAcceleration: n = !0,
                      allowTransformNone: r = !0
                  }, i, o) {
                      let a = "";
                      for (let n of (t.sort(D), t)) a += `${I[n]||n}(${e[n]}) `;
                      return n && !e.z && (a += "translateZ(0)"), a = a.trim(), o ? a = o(e, i ? "" : a) : r && i && (a = "none"), a
                  }(e, n, d, r) : i.transform && (i.transform = "none")), c) {
                  let {
                      originX: e = "50%",
                      originY: t = "50%",
                      originZ: n = 0
                  } = l;
                  i.transformOrigin = `${e} ${t} ${n}`
              }
          }
          let _ = () => ({
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {}
          });

          function N(e, t, n) {
              for (let r in t)(0, O.i)(t[r]) || B(r, n) || (e[r] = t[r])
          }

          function U(e, t, n) {
              let r = {},
                  i = function(e, t, n) {
                      let r = e.style || {},
                          i = {};
                      return N(i, r, e), Object.assign(i, function({
                          transformTemplate: e
                      }, t, n) {
                          return (0, s.useMemo)(() => {
                              let r = _();
                              return W(r, t, {
                                  enableHardwareAcceleration: !n
                              }, e), Object.assign({}, r.vars, r.style)
                          }, [t])
                      }(e, t, n)), e.transformValues ? e.transformValues(i) : i
                  }(e, t, n);
              return e.drag && !1 !== e.dragListener && (r.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === e.drag ? "none" : `pan-${"x"===e.drag?"y":"x"}`), r.style = i, r
          }
          var H = n(1492),
              Z = n(6190);

          function q(e, t, n) {
              return "string" == typeof e ? e : Z.px.transform(t + n * e)
          }
          let Y = {
                  offset: "stroke-dashoffset",
                  array: "stroke-dasharray"
              },
              X = {
                  offset: "strokeDashoffset",
                  array: "strokeDasharray"
              };

          function K(e, {
              attrX: t,
              attrY: n,
              originX: r,
              originY: i,
              pathLength: o,
              pathSpacing: a = 1,
              pathOffset: s = 0,
              ...l
          }, u, c, d) {
              if (W(e, l, u, d), c) {
                  e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
                  return
              }
              e.attrs = e.style, e.style = {};
              let {
                  attrs: h,
                  style: p,
                  dimensions: f
              } = e;
              h.transform && (f && (p.transform = h.transform), delete h.transform), f && (void 0 !== r || void 0 !== i || p.transform) && (p.transformOrigin = function(e, t, n) {
                  let r = q(t, e.x, e.width),
                      i = q(n, e.y, e.height);
                  return `${r} ${i}`
              }(f, void 0 !== r ? r : .5, void 0 !== i ? i : .5)), void 0 !== t && (h.x = t), void 0 !== n && (h.y = n), void 0 !== o && function(e, t, n = 1, r = 0, i = !0) {
                  e.pathLength = 1;
                  let o = i ? Y : X;
                  e[o.offset] = Z.px.transform(-r);
                  let a = Z.px.transform(t),
                      s = Z.px.transform(n);
                  e[o.array] = `${a} ${s}`
              }(h, o, a, s, !1)
          }
          let J = () => ({
                  ..._(),
                  attrs: {}
              }),
              Q = e => "string" == typeof e && "svg" === e.toLowerCase();

          function ee(e, t, n, r) {
              let i = (0, s.useMemo)(() => {
                  let n = J();
                  return K(n, t, {
                      enableHardwareAcceleration: !1
                  }, Q(r), e.transformTemplate), {
                      ...n.attrs,
                      style: {
                          ...n.style
                      }
                  }
              }, [t]);
              if (e.style) {
                  let t = {};
                  N(t, e.style, e), i.style = {
                      ...t,
                      ...i.style
                  }
              }
              return i
          }
          let et = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

          function en(e, {
              style: t,
              vars: n
          }, r, i) {
              for (let o in Object.assign(e.style, t, i && i.getProjectionStyles(r)), n) e.style.setProperty(o, n[o])
          }
          let er = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

          function ei(e, t, n, r) {
              for (let n in en(e, t, void 0, r), t.attrs) e.setAttribute(er.has(n) ? n : et(n), t.attrs[n])
          }

          function eo(e, t) {
              let {
                  style: n
              } = e, r = {};
              for (let i in n)((0, O.i)(n[i]) || t.style && (0, O.i)(t.style[i]) || B(i, e)) && (r[i] = n[i]);
              return r
          }

          function ea(e, t) {
              let n = eo(e, t);
              for (let r in e)
                  if ((0, O.i)(e[r]) || (0, O.i)(t[r])) {
                      let t = "x" === r || "y" === r ? "attr" + r.toUpperCase() : r;
                      n[t] = e[r]
                  } return n
          }

          function es(e, t, n, r = {}, i = {}) {
              return "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)), "string" == typeof t && (t = e.variants && e.variants[t]), "function" == typeof t && (t = t(void 0 !== n ? n : e.custom, r, i)), t
          }
          let el = e => Array.isArray(e),
              eu = e => !!(e && "object" == typeof e && e.mix && e.toValue),
              ec = e => el(e) ? e[e.length - 1] || 0 : e;

          function ed(e) {
              let t = (0, O.i)(e) ? e.get() : e;
              return eu(t) ? t.toValue() : t
          }
          let eh = e => (t, n) => {
                  let r = (0, s.useContext)(u),
                      i = (0, s.useContext)(c.O),
                      o = () => (function({
                          scrapeMotionValuesFromProps: e,
                          createRenderState: t,
                          onMount: n
                      }, r, i, o) {
                          let a = {
                              latestValues: function(e, t, n, r) {
                                  let i = {},
                                      o = r(e, {});
                                  for (let e in o) i[e] = ed(o[e]);
                                  let {
                                      initial: a,
                                      animate: s
                                  } = e, l = v(e), u = y(e);
                                  t && u && !l && !1 !== e.inherit && (void 0 === a && (a = t.initial), void 0 === s && (s = t.animate));
                                  let c = !!n && !1 === n.initial;
                                  c = c || !1 === a;
                                  let d = c ? s : a;
                                  if (d && "boolean" != typeof d && !m(d)) {
                                      let t = Array.isArray(d) ? d : [d];
                                      t.forEach(t => {
                                          let n = es(e, t);
                                          if (!n) return;
                                          let {
                                              transitionEnd: r,
                                              transition: o,
                                              ...a
                                          } = n;
                                          for (let e in a) {
                                              let t = a[e];
                                              if (Array.isArray(t)) {
                                                  let e = c ? t.length - 1 : 0;
                                                  t = t[e]
                                              }
                                              null !== t && (i[e] = t)
                                          }
                                          for (let e in r) i[e] = r[e]
                                      })
                                  }
                                  return i
                              }(r, i, o, e),
                              renderState: t()
                          };
                          return n && (a.mount = e => n(r, e, a)), a
                      })(e, t, r, i);
                  return n ? o() : (0, E.h)(o)
              },
              ep = {
                  useVisualState: eh({
                      scrapeMotionValuesFromProps: ea,
                      createRenderState: J,
                      onMount: (e, t, {
                          renderState: n,
                          latestValues: r
                      }) => {
                          try {
                              n.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                          } catch (e) {
                              n.dimensions = {
                                  x: 0,
                                  y: 0,
                                  width: 0,
                                  height: 0
                              }
                          }
                          K(n, r, {
                              enableHardwareAcceleration: !1
                          }, Q(t.tagName), e.transformTemplate), ei(t, n)
                      }
                  })
              },
              ef = {
                  useVisualState: eh({
                      scrapeMotionValuesFromProps: eo,
                      createRenderState: _
                  })
              };

          function em(e, t, n, r = {
              passive: !0
          }) {
              return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
          }

          function eg(e, t, n, r) {
              (0, s.useEffect)(() => {
                  let i = e.current;
                  if (n && i) return em(i, t, n, r)
              }, [e, t, n, r])
          }(r = o || (o = {})).Animate = "animate", r.Hover = "whileHover", r.Tap = "whileTap", r.Drag = "whileDrag", r.Focus = "whileFocus", r.InView = "whileInView", r.Exit = "exit";
          let ev = e => !1 !== e.isPrimary;

          function ey(e, t = "page") {
              return {
                  point: {
                      x: e[t + "X"],
                      y: e[t + "Y"]
                  }
              }
          }
          let eb = e => t => ev(t) && e(t, ey(t));

          function ex(e, t, n, r) {
              return em(e, t, eb(n), r)
          }

          function ew(e, t, n, r) {
              return eg(e, t, n && eb(n), r)
          }

          function ek(e) {
              let t = null;
              return () => {
                  let n = () => {
                      t = null
                  };
                  return null === t && (t = e, n)
              }
          }
          let eE = ek("dragHorizontal"),
              eS = ek("dragVertical");

          function eC(e) {
              let t = !1;
              if ("y" === e) t = eS();
              else if ("x" === e) t = eE();
              else {
                  let e = eE(),
                      n = eS();
                  e && n ? t = () => {
                      e(), n()
                  } : (e && e(), n && n())
              }
              return t
          }

          function ej() {
              let e = eC(!0);
              return !e || (e(), !1)
          }

          function eA(e, t, n) {
              return (r, i) => {
                  !(!("pen" !== r.type && "touch" !== r.type) || ej()) && (e.animationState && e.animationState.setActive(o.Hover, t), n && n(r, i))
              }
          }
          let eT = (e, t) => !!t && (e === t || eT(e, t.parentElement));
          var eM = n(5411),
              eP = n(3624);
          let eR = new WeakMap,
              eV = new WeakMap,
              eL = e => {
                  let t = eR.get(e.target);
                  t && t(e)
              },
              e$ = e => {
                  e.forEach(eL)
              },
              eB = {
                  some: 0,
                  all: 1
              };

          function eO(e, t, n, {
              root: r,
              margin: i,
              amount: a = "some",
              once: l
          }) {
              (0, s.useEffect)(() => {
                  if (!e || !n.current) return;
                  let s = {
                          root: null == r ? void 0 : r.current,
                          rootMargin: i,
                          threshold: "number" == typeof a ? a : eB[a]
                      },
                      u = e => {
                          let {
                              isIntersecting: r
                          } = e;
                          if (t.isInView === r || (t.isInView = r, l && !r && t.hasEnteredView)) return;
                          r && (t.hasEnteredView = !0), n.animationState && n.animationState.setActive(o.InView, r);
                          let i = n.getProps(),
                              a = r ? i.onViewportEnter : i.onViewportLeave;
                          a && a(e)
                      };
                  return function(e, t, n) {
                      let r = function({
                          root: e,
                          ...t
                      }) {
                          let n = e || document;
                          eV.has(n) || eV.set(n, {});
                          let r = eV.get(n),
                              i = JSON.stringify(t);
                          return r[i] || (r[i] = new IntersectionObserver(e$, {
                              root: e,
                              ...t
                          })), r[i]
                      }(t);
                      return eR.set(e, n), r.observe(e), () => {
                          eR.delete(e), r.unobserve(e)
                      }
                  }(n.current, s, u)
              }, [e, r, i, a])
          }

          function eI(e, t, n, {
              fallback: r = !0
          }) {
              (0, s.useEffect)(() => {
                  e && r && requestAnimationFrame(() => {
                      t.hasEnteredView = !0;
                      let {
                          onViewportEnter: e
                      } = n.getProps();
                      e && e(null), n.animationState && n.animationState.setActive(o.InView, !0)
                  })
              }, [e])
          }
          let eD = e => t => (e(t), null),
              eF = {
                  inView: eD(function({
                      visualElement: e,
                      whileInView: t,
                      onViewportEnter: n,
                      onViewportLeave: r,
                      viewport: i = {}
                  }) {
                      let o = (0, s.useRef)({
                              hasEnteredView: !1,
                              isInView: !1
                          }),
                          a = !!(t || n || r);
                      i.once && o.current.hasEnteredView && (a = !1);
                      let l = "undefined" == typeof IntersectionObserver ? eI : eO;
                      l(a, o.current, e, i)
                  }),
                  tap: eD(function({
                      onTap: e,
                      onTapStart: t,
                      onTapCancel: n,
                      whileTap: r,
                      visualElement: i,
                      ...a
                  }) {
                      let l = (0, s.useRef)(!1),
                          u = (0, s.useRef)(null),
                          c = {
                              passive: !(t || e || n || a.onPointerDown)
                          };

                      function d() {
                          u.current && u.current(), u.current = null
                      }

                      function h() {
                          return d(), l.current = !1, i.animationState && i.animationState.setActive(o.Tap, !1), !ej()
                      }

                      function p(t, r) {
                          h() && (eT(i.current, t.target) ? e && e(t, r) : n && n(t, r))
                      }

                      function f(e, t) {
                          h() && n && n(e, t)
                      }
                      let m = (0, s.useCallback)((e, n) => {
                          d(), !l.current && (l.current = !0, u.current = (0, eP.z)(ex(window, "pointerup", p, c), ex(window, "pointercancel", f, c)), i.animationState && i.animationState.setActive(o.Tap, !0), t && t(e, n))
                      }, [t, i]);
                      ew(i, "pointerdown", e || t || n || r ? m : void 0, c), (0, eM.z)(d)
                  }),
                  focus: eD(function({
                      whileFocus: e,
                      visualElement: t
                  }) {
                      let {
                          animationState: n
                      } = t, r = (0, s.useCallback)(() => {
                          n && n.setActive(o.Focus, !0)
                      }, [n]), i = (0, s.useCallback)(() => {
                          n && n.setActive(o.Focus, !1)
                      }, [n]);
                      eg(t, "focus", e ? r : void 0), eg(t, "blur", e ? i : void 0)
                  }),
                  hover: eD(function({
                      onHoverStart: e,
                      onHoverEnd: t,
                      whileHover: n,
                      visualElement: r
                  }) {
                      ew(r, "pointerenter", (0, s.useMemo)(() => e || n ? eA(r, !0, e) : void 0, [e, !!n, r]), {
                          passive: !e
                      }), ew(r, "pointerleave", (0, s.useMemo)(() => t || n ? eA(r, !1, t) : void 0, [e, !!n, r]), {
                          passive: !t
                      })
                  })
              };

          function ez() {
              let e = (0, s.useContext)(c.O);
              if (null === e) return [!0, null];
              let {
                  isPresent: t,
                  onExitComplete: n,
                  register: r
              } = e, i = (0, s.useId)();
              (0, s.useEffect)(() => r(i), []);
              let o = () => n && n(i);
              return !t && n ? [!1, o] : [!0]
          }

          function eG(e, t) {
              if (!Array.isArray(t)) return !1;
              let n = t.length;
              if (n !== e.length) return !1;
              for (let r = 0; r < n; r++)
                  if (t[r] !== e[r]) return !1;
              return !0
          }
          let eW = e => /^\-?\d*\.?\d+$/.test(e),
              e_ = e => /^0[^.\s]+$/.test(e);
          var eN = n(3234),
              eU = n(1550),
              eH = n(9135),
              eZ = n(5385),
              eq = n(1649);
          let eY = e => t => t.test(e),
              eX = [eq.Rx, Z.px, Z.aQ, Z.RW, Z.vw, Z.vh, {
                  test: e => "auto" === e,
                  parse: e => e
              }],
              eK = e => eX.find(eY(e)),
              eJ = [...eX, eZ.$, eU.P],
              eQ = e => eJ.find(eY(e));

          function e0(e, t, n) {
              let r = e.getProps();
              return es(r, t, void 0 !== n ? n : r.custom, function(e) {
                  let t = {};
                  return e.values.forEach((e, n) => t[n] = e.get()), t
              }(e), function(e) {
                  let t = {};
                  return e.values.forEach((e, n) => t[n] = e.getVelocity()), t
              }(e))
          }

          function e1(e) {
              return !!((0, O.i)(e) && e.add)
          }
          var e2 = n(404);
          let e4 = (e, t) => `${e}: ${t}`,
              e5 = "data-" + et("framerAppearId");
          var e9 = n(7210);

          function e3(e, t, n = {}) {
              var r;
              let i = e0(e, t, n.custom),
                  {
                      transition: o = e.getDefaultTransition() || {}
                  } = i || {};
              n.transitionOverride && (o = n.transitionOverride);
              let a = i ? () => e8(e, i, n) : () => Promise.resolve(),
                  s = (null === (r = e.variantChildren) || void 0 === r ? void 0 : r.size) ? (r = 0) => {
                      let {
                          delayChildren: i = 0,
                          staggerChildren: a,
                          staggerDirection: s
                      } = o;
                      return function(e, t, n = 0, r = 0, i = 1, o) {
                          let a = [],
                              s = (e.variantChildren.size - 1) * r,
                              l = 1 === i ? (e = 0) => e * r : (e = 0) => s - e * r;
                          return Array.from(e.variantChildren).sort(e6).forEach((e, r) => {
                              e.notify("AnimationStart", t), a.push(e3(e, t, {
                                  ...o,
                                  delay: n + l(r)
                              }).then(() => e.notify("AnimationComplete", t)))
                          }), Promise.all(a)
                      }(e, t, i + r, a, s, n)
                  } : () => Promise.resolve(),
                  {
                      when: l
                  } = o;
              if (!l) return Promise.all([a(), s(n.delay)]);
              {
                  let [e, t] = "beforeChildren" === l ? [a, s] : [s, a];
                  return e().then(t)
              }
          }

          function e8(e, t, {
              delay: n = 0,
              transitionOverride: r,
              type: i
          } = {}) {
              var o;
              let {
                  transition: a = e.getDefaultTransition(),
                  transitionEnd: s,
                  ...l
              } = e.makeTargetAnimatable(t), u = e.getValue("willChange");
              r && (a = r);
              let c = [],
                  d = i && (null === (o = e.animationState) || void 0 === o ? void 0 : o.getState()[i]);
              for (let t in l) {
                  let r = e.getValue(t),
                      i = l[t];
                  if (!r || void 0 === i || d && function({
                          protectedKeys: e,
                          needsAnimating: t
                      }, n) {
                          let r = e.hasOwnProperty(n) && !0 !== t[n];
                          return t[n] = !1, r
                      }(d, t)) continue;
                  let o = {
                      delay: n,
                      elapsed: 0,
                      ...a
                  };
                  if (e.shouldReduceMotion && $.has(t) && (o = {
                          ...o,
                          type: !1,
                          delay: 0
                      }), !r.hasAnimated) {
                      let n = e.getProps()[e5];
                      n && (o.elapsed = function(e, t) {
                          let {
                              MotionAppearAnimations: n
                          } = window, r = e4(e, $.has(t) ? "transform" : t), i = n && n.get(r);
                          return i ? (e2.Z_.render(() => {
                              try {
                                  i.cancel(), n.delete(r)
                              } catch (e) {}
                          }), i.currentTime || 0) : 0
                      }(n, t))
                  }
                  let s = r.start((0, e9.Z)(t, r, i, o));
                  e1(u) && (u.add(t), s = s.then(() => u.remove(t))), c.push(s)
              }
              return Promise.all(c).then(() => {
                  s && function(e, t) {
                      let n = e0(e, t),
                          {
                              transitionEnd: r = {},
                              transition: i = {},
                              ...o
                          } = n ? e.makeTargetAnimatable(n, !1) : {};
                      for (let t in o = {
                              ...o,
                              ...r
                          }) {
                          var a;
                          let n = ec(o[t]);
                          a = t, e.hasValue(a) ? e.getValue(a).set(n) : e.addValue(a, (0, eN.B)(n))
                      }
                  }(e, s)
              })
          }

          function e6(e, t) {
              return e.sortNodePosition(t)
          }
          let e7 = [o.Animate, o.InView, o.Focus, o.Hover, o.Tap, o.Drag, o.Exit],
              te = [...e7].reverse(),
              tt = e7.length;

          function tn(e = !1) {
              return {
                  isActive: e,
                  protectedKeys: {},
                  needsAnimating: {},
                  prevResolvedValues: {}
              }
          }
          let tr = {
              animation: eD(({
                  visualElement: e,
                  animate: t
              }) => {
                  e.animationState || (e.animationState = function(e) {
                      let t = t => Promise.all(t.map(({
                              animation: t,
                              options: n
                          }) => (function(e, t, n = {}) {
                              let r;
                              if (e.notify("AnimationStart", t), Array.isArray(t)) {
                                  let i = t.map(t => e3(e, t, n));
                                  r = Promise.all(i)
                              } else if ("string" == typeof t) r = e3(e, t, n);
                              else {
                                  let i = "function" == typeof t ? e0(e, t, n.custom) : t;
                                  r = e8(e, i, n)
                              }
                              return r.then(() => e.notify("AnimationComplete", t))
                          })(e, t, n))),
                          n = {
                              [o.Animate]: tn(!0),
                              [o.InView]: tn(),
                              [o.Hover]: tn(),
                              [o.Tap]: tn(),
                              [o.Drag]: tn(),
                              [o.Focus]: tn(),
                              [o.Exit]: tn()
                          },
                          r = !0,
                          i = (t, n) => {
                              let r = e0(e, n);
                              if (r) {
                                  let {
                                      transition: e,
                                      transitionEnd: n,
                                      ...i
                                  } = r;
                                  t = {
                                      ...t,
                                      ...i,
                                      ...n
                                  }
                              }
                              return t
                          };

                      function a(o, a) {
                          let s = e.getProps(),
                              l = e.getVariantContext(!0) || {},
                              u = [],
                              c = new Set,
                              d = {},
                              h = 1 / 0;
                          for (let t = 0; t < tt; t++) {
                              var p;
                              let g = te[t],
                                  v = n[g],
                                  y = void 0 !== s[g] ? s[g] : l[g],
                                  b = f(y),
                                  x = g === a ? v.isActive : null;
                              !1 === x && (h = t);
                              let w = y === l[g] && y !== s[g] && b;
                              if (w && r && e.manuallyAnimateOnMount && (w = !1), v.protectedKeys = {
                                      ...d
                                  }, !v.isActive && null === x || !y && !v.prevProp || m(y) || "boolean" == typeof y) continue;
                              let k = (p = v.prevProp, "string" == typeof y ? y !== p : !!Array.isArray(y) && !eG(y, p)),
                                  E = k || g === a && v.isActive && !w && b || t > h && b,
                                  S = Array.isArray(y) ? y : [y],
                                  C = S.reduce(i, {});
                              !1 === x && (C = {});
                              let {
                                  prevResolvedValues: j = {}
                              } = v, A = {
                                  ...j,
                                  ...C
                              }, T = e => {
                                  E = !0, c.delete(e), v.needsAnimating[e] = !0
                              };
                              for (let e in A) {
                                  let t = C[e],
                                      n = j[e];
                                  d.hasOwnProperty(e) || (t !== n ? el(t) && el(n) ? !eG(t, n) || k ? T(e) : v.protectedKeys[e] = !0 : void 0 !== t ? T(e) : c.add(e) : void 0 !== t && c.has(e) ? T(e) : v.protectedKeys[e] = !0)
                              }
                              v.prevProp = y, v.prevResolvedValues = C, v.isActive && (d = {
                                  ...d,
                                  ...C
                              }), r && e.blockInitialAnimation && (E = !1), E && !w && u.push(...S.map(e => ({
                                  animation: e,
                                  options: {
                                      type: g,
                                      ...o
                                  }
                              })))
                          }
                          if (c.size) {
                              let t = {};
                              c.forEach(n => {
                                  let r = e.getBaseTarget(n);
                                  void 0 !== r && (t[n] = r)
                              }), u.push({
                                  animation: t
                              })
                          }
                          let g = !!u.length;
                          return r && !1 === s.initial && !e.manuallyAnimateOnMount && (g = !1), r = !1, g ? t(u) : Promise.resolve()
                      }
                      return {
                          animateChanges: a,
                          setActive: function(t, r, i) {
                              var o;
                              if (n[t].isActive === r) return Promise.resolve();
                              null === (o = e.variantChildren) || void 0 === o || o.forEach(e => {
                                  var n;
                                  return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r)
                              }), n[t].isActive = r;
                              let s = a(i, t);
                              for (let e in n) n[e].protectedKeys = {};
                              return s
                          },
                          setAnimateFunction: function(n) {
                              t = n(e)
                          },
                          getState: () => n
                      }
                  }(e)), m(t) && (0, s.useEffect)(() => t.subscribe(e), [t])
              }),
              exit: eD(e => {
                  let {
                      custom: t,
                      visualElement: n
                  } = e, [r, i] = ez(), a = (0, s.useContext)(c.O);
                  (0, s.useEffect)(() => {
                      n.isPresent = r;
                      let e = n.animationState && n.animationState.setActive(o.Exit, !r, {
                          custom: a && a.custom || t
                      });
                      e && !r && e.then(i)
                  }, [r])
              })
          };
          var ti = n(4394),
              to = n(6917);
          let ta = (e, t) => Math.abs(e - t);
          var ts = n(7367);
          class tl {
              constructor(e, t, {
                  transformPagePoint: n
              } = {}) {
                  if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                          let e = td(this.lastMoveEventInfo, this.history),
                              t = null !== this.startEvent,
                              n = function(e, t) {
                                  let n = ta(e.x, t.x),
                                      r = ta(e.y, t.y);
                                  return Math.sqrt(n ** 2 + r ** 2)
                              }(e.offset, {
                                  x: 0,
                                  y: 0
                              }) >= 3;
                          if (!t && !n) return;
                          let {
                              point: r
                          } = e, {
                              timestamp: i
                          } = ts.w;
                          this.history.push({
                              ...r,
                              timestamp: i
                          });
                          let {
                              onStart: o,
                              onMove: a
                          } = this.handlers;
                          t || (o && o(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, e)
                      }, this.handlePointerMove = (e, t) => {
                          this.lastMoveEvent = e, this.lastMoveEventInfo = tu(t, this.transformPagePoint), e2.Z_.update(this.updatePoint, !0)
                      }, this.handlePointerUp = (e, t) => {
                          this.end();
                          let {
                              onEnd: n,
                              onSessionEnd: r
                          } = this.handlers, i = td(tu(t, this.transformPagePoint), this.history);
                          this.startEvent && n && n(e, i), r && r(e, i)
                      }, !ev(e)) return;
                  this.handlers = t, this.transformPagePoint = n;
                  let r = ey(e),
                      i = tu(r, this.transformPagePoint),
                      {
                          point: o
                      } = i,
                      {
                          timestamp: a
                      } = ts.w;
                  this.history = [{
                      ...o,
                      timestamp: a
                  }];
                  let {
                      onSessionStart: s
                  } = t;
                  s && s(e, td(i, this.history)), this.removeListeners = (0, eP.z)(ex(window, "pointermove", this.handlePointerMove), ex(window, "pointerup", this.handlePointerUp), ex(window, "pointercancel", this.handlePointerUp))
              }
              updateHandlers(e) {
                  this.handlers = e
              }
              end() {
                  this.removeListeners && this.removeListeners(), e2.qY.update(this.updatePoint)
              }
          }

          function tu(e, t) {
              return t ? {
                  point: t(e.point)
              } : e
          }

          function tc(e, t) {
              return {
                  x: e.x - t.x,
                  y: e.y - t.y
              }
          }

          function td({
              point: e
          }, t) {
              return {
                  point: e,
                  delta: tc(e, th(t)),
                  offset: tc(e, t[0]),
                  velocity: function(e, t) {
                      if (e.length < 2) return {
                          x: 0,
                          y: 0
                      };
                      let n = e.length - 1,
                          r = null,
                          i = th(e);
                      for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > (0, to.w)(.1)));) n--;
                      if (!r) return {
                          x: 0,
                          y: 0
                      };
                      let o = (i.timestamp - r.timestamp) / 1e3;
                      if (0 === o) return {
                          x: 0,
                          y: 0
                      };
                      let a = {
                          x: (i.x - r.x) / o,
                          y: (i.y - r.y) / o
                      };
                      return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
                  }(t, 0)
              }
          }

          function th(e) {
              return e[e.length - 1]
          }
          var tp = n(3967),
              tf = n(22);

          function tm(e) {
              return e.max - e.min
          }

          function tg(e, t = 0, n = .01) {
              return Math.abs(e - t) <= n
          }

          function tv(e, t, n, r = .5) {
              e.origin = r, e.originPoint = (0, tf.C)(t.min, t.max, e.origin), e.scale = tm(n) / tm(t), (tg(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = (0, tf.C)(n.min, n.max, e.origin) - e.originPoint, (tg(e.translate) || isNaN(e.translate)) && (e.translate = 0)
          }

          function ty(e, t, n, r) {
              tv(e.x, t.x, n.x, null == r ? void 0 : r.originX), tv(e.y, t.y, n.y, null == r ? void 0 : r.originY)
          }

          function tb(e, t, n) {
              e.min = n.min + t.min, e.max = e.min + tm(t)
          }

          function tx(e, t, n) {
              e.min = t.min - n.min, e.max = e.min + tm(t)
          }

          function tw(e, t, n) {
              tx(e.x, t.x, n.x), tx(e.y, t.y, n.y)
          }
          var tk = n(4169);

          function tE(e, t, n) {
              return {
                  min: void 0 !== t ? e.min + t : void 0,
                  max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
              }
          }

          function tS(e, t) {
              let n = t.min - e.min,
                  r = t.max - e.max;
              return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
                  min: n,
                  max: r
              }
          }

          function tC(e, t, n) {
              return {
                  min: tj(e, t),
                  max: tj(e, n)
              }
          }

          function tj(e, t) {
              return "number" == typeof e ? e : e[t] || 0
          }
          let tA = () => ({
                  translate: 0,
                  scale: 1,
                  origin: 0,
                  originPoint: 0
              }),
              tT = () => ({
                  x: tA(),
                  y: tA()
              }),
              tM = () => ({
                  min: 0,
                  max: 0
              }),
              tP = () => ({
                  x: tM(),
                  y: tM()
              });

          function tR(e) {
              return [e("x"), e("y")]
          }

          function tV({
              top: e,
              left: t,
              right: n,
              bottom: r
          }) {
              return {
                  x: {
                      min: t,
                      max: n
                  },
                  y: {
                      min: e,
                      max: r
                  }
              }
          }

          function tL(e) {
              return void 0 === e || 1 === e
          }

          function t$({
              scale: e,
              scaleX: t,
              scaleY: n
          }) {
              return !tL(e) || !tL(t) || !tL(n)
          }

          function tB(e) {
              return t$(e) || tO(e) || e.z || e.rotate || e.rotateX || e.rotateY
          }

          function tO(e) {
              var t, n;
              return (t = e.x) && "0%" !== t || (n = e.y) && "0%" !== n
          }

          function tI(e, t, n, r, i) {
              return void 0 !== i && (e = r + i * (e - r)), r + n * (e - r) + t
          }

          function tD(e, t = 0, n = 1, r, i) {
              e.min = tI(e.min, t, n, r, i), e.max = tI(e.max, t, n, r, i)
          }

          function tF(e, {
              x: t,
              y: n
          }) {
              tD(e.x, t.translate, t.scale, t.originPoint), tD(e.y, n.translate, n.scale, n.originPoint)
          }

          function tz(e) {
              return Number.isInteger(e) ? e : e > 1.0000000000001 || e < .999999999999 ? e : 1
          }

          function tG(e, t) {
              e.min = e.min + t, e.max = e.max + t
          }

          function tW(e, t, [n, r, i]) {
              let o = void 0 !== t[i] ? t[i] : .5,
                  a = (0, tf.C)(e.min, e.max, o);
              tD(e, t[n], t[r], a, t.scale)
          }
          let t_ = ["x", "scaleX", "originX"],
              tN = ["y", "scaleY", "originY"];

          function tU(e, t) {
              tW(e.x, t, t_), tW(e.y, t, tN)
          }

          function tH(e, t) {
              return tV(function(e, t) {
                  if (!t) return e;
                  let n = t({
                          x: e.left,
                          y: e.top
                      }),
                      r = t({
                          x: e.right,
                          y: e.bottom
                      });
                  return {
                      top: n.y,
                      left: n.x,
                      bottom: r.y,
                      right: r.x
                  }
              }(e.getBoundingClientRect(), t))
          }
          let tZ = new WeakMap;
          class tq {
              constructor(e) {
                  this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                      x: 0,
                      y: 0
                  }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = tP(), this.visualElement = e
              }
              start(e, {
                  snapToCursor: t = !1
              } = {}) {
                  if (!1 === this.visualElement.isPresent) return;
                  let n = e => {
                          this.stopAnimation(), t && this.snapToCursor(ey(e, "page").point)
                      },
                      r = (e, t) => {
                          var n;
                          let {
                              drag: r,
                              dragPropagation: i,
                              onDragStart: a
                          } = this.getProps();
                          (!r || i || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = eC(r), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), tR(e => {
                              var t, n;
                              let r = this.getAxisMotionValue(e).get() || 0;
                              if (Z.aQ.test(r)) {
                                  let i = null === (n = null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout) || void 0 === n ? void 0 : n.layoutBox[e];
                                  if (i) {
                                      let e = tm(i);
                                      r = e * (parseFloat(r) / 100)
                                  }
                              }
                              this.originPoint[e] = r
                          }), null == a || a(e, t), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(o.Drag, !0))
                      },
                      i = (e, t) => {
                          let {
                              dragPropagation: n,
                              dragDirectionLock: r,
                              onDirectionLock: i,
                              onDrag: o
                          } = this.getProps();
                          if (!n && !this.openGlobalLock) return;
                          let {
                              offset: a
                          } = t;
                          if (r && null === this.currentDirection) {
                              this.currentDirection = function(e, t = 10) {
                                  let n = null;
                                  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
                              }(a), null !== this.currentDirection && (null == i || i(this.currentDirection));
                              return
                          }
                          this.updateAxis("x", t.point, a), this.updateAxis("y", t.point, a), this.visualElement.render(), null == o || o(e, t)
                      },
                      a = (e, t) => this.stop(e, t);
                  this.panSession = new tl(e, {
                      onSessionStart: n,
                      onStart: r,
                      onMove: i,
                      onSessionEnd: a
                  }, {
                      transformPagePoint: this.visualElement.getTransformPagePoint()
                  })
              }
              stop(e, t) {
                  let n = this.isDragging;
                  if (this.cancel(), !n) return;
                  let {
                      velocity: r
                  } = t;
                  this.startAnimation(r);
                  let {
                      onDragEnd: i
                  } = this.getProps();
                  null == i || i(e, t)
              }
              cancel() {
                  var e, t;
                  this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (e = this.panSession) || void 0 === e || e.end(), this.panSession = void 0;
                  let {
                      dragPropagation: n
                  } = this.getProps();
                  !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (t = this.visualElement.animationState) || void 0 === t || t.setActive(o.Drag, !1)
              }
              updateAxis(e, t, n) {
                  let {
                      drag: r
                  } = this.getProps();
                  if (!n || !tY(e, r, this.currentDirection)) return;
                  let i = this.getAxisMotionValue(e),
                      o = this.originPoint[e] + n[e];
                  this.constraints && this.constraints[e] && (o = function(e, {
                      min: t,
                      max: n
                  }, r) {
                      return void 0 !== t && e < t ? e = r ? (0, tf.C)(t, e, r.min) : Math.max(e, t) : void 0 !== n && e > n && (e = r ? (0, tf.C)(n, e, r.max) : Math.min(e, n)), e
                  }(o, this.constraints[e], this.elastic[e])), i.set(o)
              }
              resolveConstraints() {
                  let {
                      dragConstraints: e,
                      dragElastic: t
                  } = this.getProps(), {
                      layout: n
                  } = this.visualElement.projection || {}, r = this.constraints;
                  e && p(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && n ? this.constraints = function(e, {
                      top: t,
                      left: n,
                      bottom: r,
                      right: i
                  }) {
                      return {
                          x: tE(e.x, n, i),
                          y: tE(e.y, t, r)
                      }
                  }(n.layoutBox, e) : this.constraints = !1, this.elastic = function(e = .35) {
                      return !1 === e ? e = 0 : !0 === e && (e = .35), {
                          x: tC(e, "left", "right"),
                          y: tC(e, "top", "bottom")
                      }
                  }(t), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && tR(e => {
                      this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) {
                          let n = {};
                          return void 0 !== t.min && (n.min = t.min - e.min), void 0 !== t.max && (n.max = t.max - e.min), n
                      }(n.layoutBox[e], this.constraints[e]))
                  })
              }
              resolveRefConstraints() {
                  var e;
                  let {
                      dragConstraints: t,
                      onMeasureDragConstraints: n
                  } = this.getProps();
                  if (!t || !p(t)) return !1;
                  let r = t.current;
                  (0, ti.k)(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                  let {
                      projection: i
                  } = this.visualElement;
                  if (!i || !i.layout) return !1;
                  let o = function(e, t, n) {
                          let r = tH(e, n),
                              {
                                  scroll: i
                              } = t;
                          return i && (tG(r.x, i.offset.x), tG(r.y, i.offset.y)), r
                      }(r, i.root, this.visualElement.getTransformPagePoint()),
                      a = {
                          x: tS((e = i.layout.layoutBox).x, o.x),
                          y: tS(e.y, o.y)
                      };
                  if (n) {
                      let e = n(function({
                          x: e,
                          y: t
                      }) {
                          return {
                              top: t.min,
                              right: e.max,
                              bottom: t.max,
                              left: e.min
                          }
                      }(a));
                      this.hasMutatedConstraints = !!e, e && (a = tV(e))
                  }
                  return a
              }
              startAnimation(e) {
                  let {
                      drag: t,
                      dragMomentum: n,
                      dragElastic: r,
                      dragTransition: i,
                      dragSnapToOrigin: o,
                      onDragTransitionEnd: a
                  } = this.getProps(), s = this.constraints || {}, l = tR(a => {
                      if (!tY(a, t, this.currentDirection)) return;
                      let l = (null == s ? void 0 : s[a]) || {};
                      o && (l = {
                          min: 0,
                          max: 0
                      });
                      let u = {
                          type: "inertia",
                          velocity: n ? e[a] : 0,
                          bounceStiffness: r ? 200 : 1e6,
                          bounceDamping: r ? 40 : 1e7,
                          timeConstant: 750,
                          restDelta: 1,
                          restSpeed: 10,
                          ...i,
                          ...l
                      };
                      return this.startAxisValueAnimation(a, u)
                  });
                  return Promise.all(l).then(a)
              }
              startAxisValueAnimation(e, t) {
                  let n = this.getAxisMotionValue(e);
                  return n.start((0, e9.Z)(e, n, 0, t))
              }
              stopAnimation() {
                  tR(e => this.getAxisMotionValue(e).stop())
              }
              getAxisMotionValue(e) {
                  var t;
                  let n = "_drag" + e.toUpperCase(),
                      r = this.visualElement.getProps()[n];
                  return r || this.visualElement.getValue(e, (null === (t = this.visualElement.getProps().initial) || void 0 === t ? void 0 : t[e]) || 0)
              }
              snapToCursor(e) {
                  tR(t => {
                      let {
                          drag: n
                      } = this.getProps();
                      if (!tY(t, n, this.currentDirection)) return;
                      let {
                          projection: r
                      } = this.visualElement, i = this.getAxisMotionValue(t);
                      if (r && r.layout) {
                          let {
                              min: n,
                              max: o
                          } = r.layout.layoutBox[t];
                          i.set(e[t] - (0, tf.C)(n, o, .5))
                      }
                  })
              }
              scalePositionWithinConstraints() {
                  var e;
                  if (!this.visualElement.current) return;
                  let {
                      drag: t,
                      dragConstraints: n
                  } = this.getProps(), {
                      projection: r
                  } = this.visualElement;
                  if (!p(n) || !r || !this.constraints) return;
                  this.stopAnimation();
                  let i = {
                      x: 0,
                      y: 0
                  };
                  tR(e => {
                      let t = this.getAxisMotionValue(e);
                      if (t) {
                          let n = t.get();
                          i[e] = function(e, t) {
                              let n = .5,
                                  r = tm(e),
                                  i = tm(t);
                              return i > r ? n = (0, tp.Y)(t.min, t.max - r, e.min) : r > i && (n = (0, tp.Y)(e.min, e.max - i, t.min)), (0, tk.u)(0, 1, n)
                          }({
                              min: n,
                              max: n
                          }, this.constraints[e])
                      }
                  });
                  let {
                      transformTemplate: o
                  } = this.visualElement.getProps();
                  this.visualElement.current.style.transform = o ? o({}, "") : "none", null === (e = r.root) || void 0 === e || e.updateScroll(), r.updateLayout(), this.resolveConstraints(), tR(e => {
                      if (!tY(e, t, null)) return;
                      let n = this.getAxisMotionValue(e),
                          {
                              min: r,
                              max: o
                          } = this.constraints[e];
                      n.set((0, tf.C)(r, o, i[e]))
                  })
              }
              addListeners() {
                  var e;
                  if (!this.visualElement.current) return;
                  tZ.set(this.visualElement, this);
                  let t = this.visualElement.current,
                      n = ex(t, "pointerdown", e => {
                          let {
                              drag: t,
                              dragListener: n = !0
                          } = this.getProps();
                          t && n && this.start(e)
                      }),
                      r = () => {
                          let {
                              dragConstraints: e
                          } = this.getProps();
                          p(e) && (this.constraints = this.resolveRefConstraints())
                      },
                      {
                          projection: i
                      } = this.visualElement,
                      o = i.addEventListener("measure", r);
                  i && !i.layout && (null === (e = i.root) || void 0 === e || e.updateScroll(), i.updateLayout()), r();
                  let a = em(window, "resize", () => this.scalePositionWithinConstraints()),
                      s = i.addEventListener("didUpdate", ({
                          delta: e,
                          hasLayoutChanged: t
                      }) => {
                          this.isDragging && t && (tR(t => {
                              let n = this.getAxisMotionValue(t);
                              n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate))
                          }), this.visualElement.render())
                      });
                  return () => {
                      a(), n(), o(), null == s || s()
                  }
              }
              getProps() {
                  let e = this.visualElement.getProps(),
                      {
                          drag: t = !1,
                          dragDirectionLock: n = !1,
                          dragPropagation: r = !1,
                          dragConstraints: i = !1,
                          dragElastic: o = .35,
                          dragMomentum: a = !0
                      } = e;
                  return {
                      ...e,
                      drag: t,
                      dragDirectionLock: n,
                      dragPropagation: r,
                      dragConstraints: i,
                      dragElastic: o,
                      dragMomentum: a
                  }
              }
          }

          function tY(e, t, n) {
              return (!0 === t || t === e) && (null === n || n === e)
          }
          let tX = {
              pan: eD(function({
                  onPan: e,
                  onPanStart: t,
                  onPanEnd: n,
                  onPanSessionStart: r,
                  visualElement: i
              }) {
                  let o = (0, s.useRef)(null),
                      {
                          transformPagePoint: a
                      } = (0, s.useContext)(l._),
                      u = {
                          onSessionStart: r,
                          onStart: t,
                          onMove: e,
                          onEnd: (e, t) => {
                              o.current = null, n && n(e, t)
                          }
                      };
                  (0, s.useEffect)(() => {
                      null !== o.current && o.current.updateHandlers(u)
                  }), ew(i, "pointerdown", (e || t || n || r) && function(e) {
                      o.current = new tl(e, u, {
                          transformPagePoint: a
                      })
                  }), (0, eM.z)(() => o.current && o.current.end())
              }),
              drag: eD(function(e) {
                  let {
                      dragControls: t,
                      visualElement: n
                  } = e, r = (0, E.h)(() => new tq(n));
                  (0, s.useEffect)(() => t && t.subscribe(r), [r, t]), (0, s.useEffect)(() => r.addListeners(), [r])
              })
          };
          var tK = n(2728);

          function tJ(e) {
              return "string" == typeof e && e.startsWith("var(--")
          }
          let tQ = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

          function t0(e, t, n = 1) {
              (0, ti.k)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
              let [r, i] = function(e) {
                  let t = tQ.exec(e);
                  if (!t) return [, ];
                  let [, n, r] = t;
                  return [n, r]
              }(e);
              if (!r) return;
              let o = window.getComputedStyle(t).getPropertyValue(r);
              return o ? o.trim() : tJ(i) ? t0(i, t, n + 1) : i
          }
          let t1 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
              t2 = e => t1.has(e),
              t4 = e => Object.keys(e).some(t2),
              t5 = e => e === eq.Rx || e === Z.px;
          (i = a || (a = {})).width = "width", i.height = "height", i.left = "left", i.right = "right", i.top = "top", i.bottom = "bottom";
          let t9 = (e, t) => parseFloat(e.split(", ")[t]),
              t3 = (e, t) => (n, {
                  transform: r
              }) => {
                  if ("none" === r || !r) return 0;
                  let i = r.match(/^matrix3d\((.+)\)$/);
                  if (i) return t9(i[1], t);
                  {
                      let t = r.match(/^matrix\((.+)\)$/);
                      return t ? t9(t[1], e) : 0
                  }
              },
              t8 = new Set(["x", "y", "z"]),
              t6 = L.filter(e => !t8.has(e)),
              t7 = {
                  width: ({
                      x: e
                  }, {
                      paddingLeft: t = "0",
                      paddingRight: n = "0"
                  }) => e.max - e.min - parseFloat(t) - parseFloat(n),
                  height: ({
                      y: e
                  }, {
                      paddingTop: t = "0",
                      paddingBottom: n = "0"
                  }) => e.max - e.min - parseFloat(t) - parseFloat(n),
                  top: (e, {
                      top: t
                  }) => parseFloat(t),
                  left: (e, {
                      left: t
                  }) => parseFloat(t),
                  bottom: ({
                      y: e
                  }, {
                      top: t
                  }) => parseFloat(t) + (e.max - e.min),
                  right: ({
                      x: e
                  }, {
                      left: t
                  }) => parseFloat(t) + (e.max - e.min),
                  x: t3(4, 13),
                  y: t3(5, 14)
              },
              ne = (e, t, n) => {
                  let r = t.measureViewportBox(),
                      i = t.current,
                      o = getComputedStyle(i),
                      {
                          display: a
                      } = o,
                      s = {};
                  "none" === a && t.setStaticValue("display", e.display || "block"), n.forEach(e => {
                      s[e] = t7[e](r, o)
                  }), t.render();
                  let l = t.measureViewportBox();
                  return n.forEach(n => {
                      let r = t.getValue(n);
                      r && r.jump(s[n]), e[n] = t7[n](l, o)
                  }), e
              },
              nt = (e, t, n = {}, r = {}) => {
                  t = {
                      ...t
                  }, r = {
                      ...r
                  };
                  let i = Object.keys(t).filter(t2),
                      o = [],
                      a = !1,
                      s = [];
                  if (i.forEach(i => {
                          let l;
                          let u = e.getValue(i);
                          if (!e.hasValue(i)) return;
                          let c = n[i],
                              d = eK(c),
                              h = t[i];
                          if (el(h)) {
                              let e = h.length,
                                  t = null === h[0] ? 1 : 0;
                              d = eK(c = h[t]);
                              for (let n = t; n < e; n++) l ? (0, ti.k)(eK(h[n]) === l, "All keyframes must be of the same type") : (l = eK(h[n]), (0, ti.k)(l === d || t5(d) && t5(l), "Keyframes must be of the same dimension as the current value"))
                          } else l = eK(h);
                          if (d !== l) {
                              if (t5(d) && t5(l)) {
                                  let e = u.get();
                                  "string" == typeof e && u.set(parseFloat(e)), "string" == typeof h ? t[i] = parseFloat(h) : Array.isArray(h) && l === Z.px && (t[i] = h.map(parseFloat))
                              } else(null == d ? void 0 : d.transform) && (null == l ? void 0 : l.transform) && (0 === c || 0 === h) ? 0 === c ? u.set(l.transform(c)) : t[i] = d.transform(h) : (a || (o = function(e) {
                                  let t = [];
                                  return t6.forEach(n => {
                                      let r = e.getValue(n);
                                      void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                                  }), t.length && e.render(), t
                              }(e), a = !0), s.push(i), r[i] = void 0 !== r[i] ? r[i] : t[i], u.jump(h))
                          }
                      }), !s.length) return {
                      target: t,
                      transitionEnd: r
                  };
                  {
                      let n = s.indexOf("height") >= 0 ? window.pageYOffset : null,
                          i = ne(t, e, s);
                      return o.length && o.forEach(([t, n]) => {
                          e.getValue(t).set(n)
                      }), e.render(), k.j && null !== n && window.scrollTo({
                          top: n
                      }), {
                          target: i,
                          transitionEnd: r
                      }
                  }
              },
              nn = (e, t, n, r) => {
                  var i, o;
                  let a = function(e, {
                      ...t
                  }, n) {
                      let r = e.current;
                      if (!(r instanceof Element)) return {
                          target: t,
                          transitionEnd: n
                      };
                      for (let i in n && (n = {
                              ...n
                          }), e.values.forEach(e => {
                              let t = e.get();
                              if (!tJ(t)) return;
                              let n = t0(t, r);
                              n && e.set(n)
                          }), t) {
                          let e = t[i];
                          if (!tJ(e)) continue;
                          let o = t0(e, r);
                          o && (t[i] = o, n && void 0 === n[i] && (n[i] = e))
                      }
                      return {
                          target: t,
                          transitionEnd: n
                      }
                  }(e, t, r);
                  return t = a.target, r = a.transitionEnd, i = t, o = r, t4(i) ? nt(e, i, n, o) : {
                      target: i,
                      transitionEnd: o
                  }
              },
              nr = {
                  current: null
              },
              ni = {
                  current: !1
              };
          var no = n(1560);
          let na = Object.keys(w),
              ns = na.length,
              nl = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
          class nu {
              constructor({
                  parent: e,
                  props: t,
                  reducedMotionConfig: n,
                  visualState: r
              }, i = {}) {
                  this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                  }, this.scheduleRender = () => e2.Z_.render(this.render, !1, !0);
                  let {
                      latestValues: o,
                      renderState: a
                  } = r;
                  this.latestValues = o, this.baseTarget = {
                      ...o
                  }, this.initialValues = t.initial ? {
                      ...o
                  } : {}, this.renderState = a, this.parent = e, this.props = t, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = n, this.options = i, this.isControllingVariants = v(t), this.isVariantNode = y(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
                  let {
                      willChange: s,
                      ...l
                  } = this.scrapeMotionValuesFromProps(t, {});
                  for (let e in l) {
                      let t = l[e];
                      void 0 !== o[e] && (0, O.i)(t) && (t.set(o[e], !1), e1(s) && s.add(e))
                  }
              }
              scrapeMotionValuesFromProps(e, t) {
                  return {}
              }
              mount(e) {
                  var t;
                  this.current = e, this.projection && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (t = this.parent) || void 0 === t ? void 0 : t.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), ni.current || function() {
                      if (ni.current = !0, k.j) {
                          if (window.matchMedia) {
                              let e = window.matchMedia("(prefers-reduced-motion)"),
                                  t = () => nr.current = e.matches;
                              e.addListener(t), t()
                          } else nr.current = !1
                      }
                  }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || nr.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
              }
              unmount() {
                  var e, t, n;
                  for (let r in null === (e = this.projection) || void 0 === e || e.unmount(), e2.qY.update(this.notifyUpdate), e2.qY.render(this.render), this.valueSubscriptions.forEach(e => e()), null === (t = this.removeFromVariantTree) || void 0 === t || t.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this), this.events) this.events[r].clear();
                  this.current = null
              }
              bindToMotionValue(e, t) {
                  let n = $.has(e),
                      r = t.on("change", t => {
                          this.latestValues[e] = t, this.props.onUpdate && e2.Z_.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
                      }),
                      i = t.on("renderRequest", this.scheduleRender);
                  this.valueSubscriptions.set(e, () => {
                      r(), i()
                  })
              }
              sortNodePosition(e) {
                  return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
              }
              loadFeatures(e, t, n, r, i, o) {
                  let a = [];
                  for (let t = 0; t < ns; t++) {
                      let n = na[t],
                          {
                              isEnabled: r,
                              Component: i
                          } = w[n];
                      r(e) && i && a.push((0, s.createElement)(i, {
                          key: n,
                          ...e,
                          visualElement: this
                      }))
                  }
                  if (!this.projection && i) {
                      this.projection = new i(r, this.latestValues, this.parent && this.parent.projection);
                      let {
                          layoutId: t,
                          layout: n,
                          drag: a,
                          dragConstraints: s,
                          layoutScroll: l
                      } = e;
                      this.projection.setOptions({
                          layoutId: t,
                          layout: n,
                          alwaysMeasureLayout: !!a || s && p(s),
                          visualElement: this,
                          scheduleRender: () => this.scheduleRender(),
                          animationType: "string" == typeof n ? n : "both",
                          initialPromotionConfig: o,
                          layoutScroll: l
                      })
                  }
                  return a
              }
              triggerBuild() {
                  this.build(this.renderState, this.latestValues, this.options, this.props)
              }
              measureViewportBox() {
                  return this.current ? this.measureInstanceViewportBox(this.current, this.props) : tP()
              }
              getStaticValue(e) {
                  return this.latestValues[e]
              }
              setStaticValue(e, t) {
                  this.latestValues[e] = t
              }
              makeTargetAnimatable(e, t = !0) {
                  return this.makeTargetAnimatableFromInstance(e, this.props, t)
              }
              setProps(e) {
                  (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender();
                  let t = this.props;
                  this.props = e;
                  for (let t = 0; t < nl.length; t++) {
                      let n = nl[t];
                      this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                      let r = e["on" + n];
                      r && (this.propEventSubscriptions[n] = this.on(n, r))
                  }
                  this.prevMotionValues = function(e, t, n) {
                      let {
                          willChange: r
                      } = t;
                      for (let i in t) {
                          let o = t[i],
                              a = n[i];
                          if ((0, O.i)(o)) e.addValue(i, o), e1(r) && r.add(i);
                          else if ((0, O.i)(a)) e.addValue(i, (0, eN.B)(o, {
                              owner: e
                          })), e1(r) && r.remove(i);
                          else if (a !== o) {
                              if (e.hasValue(i)) {
                                  let t = e.getValue(i);
                                  t.hasAnimated || t.set(o)
                              } else {
                                  let t = e.getStaticValue(i);
                                  e.addValue(i, (0, eN.B)(void 0 !== t ? t : o))
                              }
                          }
                      }
                      for (let r in n) void 0 === t[r] && e.removeValue(r);
                      return t
                  }(this, this.scrapeMotionValuesFromProps(e, t), this.prevMotionValues)
              }
              getProps() {
                  return this.props
              }
              getVariant(e) {
                  var t;
                  return null === (t = this.props.variants) || void 0 === t ? void 0 : t[e]
              }
              getDefaultTransition() {
                  return this.props.transition
              }
              getTransformPagePoint() {
                  return this.props.transformPagePoint
              }
              getClosestVariantNode() {
                  var e;
                  return this.isVariantNode ? this : null === (e = this.parent) || void 0 === e ? void 0 : e.getClosestVariantNode()
              }
              getVariantContext(e = !1) {
                  var t, n;
                  if (e) return null === (t = this.parent) || void 0 === t ? void 0 : t.getVariantContext();
                  if (!this.isControllingVariants) {
                      let e = (null === (n = this.parent) || void 0 === n ? void 0 : n.getVariantContext()) || {};
                      return void 0 !== this.props.initial && (e.initial = this.props.initial), e
                  }
                  let r = {};
                  for (let e = 0; e < nd; e++) {
                      let t = nc[e],
                          n = this.props[t];
                      (f(n) || !1 === n) && (r[t] = n)
                  }
                  return r
              }
              addVariantChild(e) {
                  var t;
                  let n = this.getClosestVariantNode();
                  if (n) return null === (t = n.variantChildren) || void 0 === t || t.add(e), () => n.variantChildren.delete(e)
              }
              addValue(e, t) {
                  t !== this.values.get(e) && (this.removeValue(e), this.bindToMotionValue(e, t)), this.values.set(e, t), this.latestValues[e] = t.get()
              }
              removeValue(e) {
                  var t;
                  this.values.delete(e), null === (t = this.valueSubscriptions.get(e)) || void 0 === t || t(), this.valueSubscriptions.delete(e), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
              }
              hasValue(e) {
                  return this.values.has(e)
              }
              getValue(e, t) {
                  if (this.props.values && this.props.values[e]) return this.props.values[e];
                  let n = this.values.get(e);
                  return void 0 === n && void 0 !== t && (n = (0, eN.B)(t, {
                      owner: this
                  }), this.addValue(e, n)), n
              }
              readValue(e) {
                  return void 0 === this.latestValues[e] && this.current ? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e]
              }
              setBaseTarget(e, t) {
                  this.baseTarget[e] = t
              }
              getBaseTarget(e) {
                  var t;
                  let {
                      initial: n
                  } = this.props, r = "string" == typeof n || "object" == typeof n ? null === (t = es(this.props, n)) || void 0 === t ? void 0 : t[e] : void 0;
                  if (n && void 0 !== r) return r;
                  let i = this.getBaseTargetFromProps(this.props, e);
                  return void 0 === i || (0, O.i)(i) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : i
              }
              on(e, t) {
                  return this.events[e] || (this.events[e] = new no.L), this.events[e].add(t)
              }
              notify(e, ...t) {
                  var n;
                  null === (n = this.events[e]) || void 0 === n || n.notify(...t)
              }
          }
          let nc = ["initial", ...e7],
              nd = nc.length;
          class nh extends nu {
              sortInstanceNodePosition(e, t) {
                  return 2 & e.compareDocumentPosition(t) ? 1 : -1
              }
              getBaseTargetFromProps(e, t) {
                  var n;
                  return null === (n = e.style) || void 0 === n ? void 0 : n[t]
              }
              removeValueFromRenderState(e, {
                  vars: t,
                  style: n
              }) {
                  delete t[e], delete n[e]
              }
              makeTargetAnimatableFromInstance({
                  transition: e,
                  transitionEnd: t,
                  ...n
              }, {
                  transformValues: r
              }, i) {
                  let o = function(e, t, n) {
                      var r;
                      let i = {};
                      for (let o in e) {
                          let e = function(e, t) {
                              if (!t) return;
                              let n = t[e] || t.default || t;
                              return n.from
                          }(o, t);
                          i[o] = void 0 !== e ? e : null === (r = n.getValue(o)) || void 0 === r ? void 0 : r.get()
                      }
                      return i
                  }(n, e || {}, this);
                  if (r && (t && (t = r(t)), n && (n = r(n)), o && (o = r(o))), i) {
                      ! function(e, t, n) {
                          var r, i;
                          let o = Object.keys(t).filter(t => !e.hasValue(t)),
                              a = o.length;
                          if (a)
                              for (let s = 0; s < a; s++) {
                                  let a = o[s],
                                      l = t[a],
                                      u = null;
                                  Array.isArray(l) && (u = l[0]), null === u && (u = null !== (i = null !== (r = n[a]) && void 0 !== r ? r : e.readValue(a)) && void 0 !== i ? i : t[a]), null != u && ("string" == typeof u && (eW(u) || e_(u)) ? u = parseFloat(u) : !eQ(u) && eU.P.test(l) && (u = (0, eH.T)(a, l)), e.addValue(a, (0, eN.B)(u, {
                                      owner: e
                                  })), void 0 === n[a] && (n[a] = u), null !== u && e.setBaseTarget(a, u))
                              }
                      }(this, n, o);
                      let e = nn(this, n, o, t);
                      t = e.transitionEnd, n = e.target
                  }
                  return {
                      transition: e,
                      transitionEnd: t,
                      ...n
                  }
              }
          }
          class np extends nh {
              readValueFromInstance(e, t) {
                  if ($.has(t)) {
                      let e = (0, tK.A)(t);
                      return e && e.default || 0
                  } {
                      let n = window.getComputedStyle(e),
                          r = (F(t) ? n.getPropertyValue(t) : n[t]) || 0;
                      return "string" == typeof r ? r.trim() : r
                  }
              }
              measureInstanceViewportBox(e, {
                  transformPagePoint: t
              }) {
                  return tH(e, t)
              }
              build(e, t, n, r) {
                  W(e, t, n, r.transformTemplate)
              }
              scrapeMotionValuesFromProps(e, t) {
                  return eo(e, t)
              }
              renderInstance(e, t, n, r) {
                  en(e, t, n, r)
              }
          }
          class nf extends nh {
              constructor() {
                  super(...arguments), this.isSVGTag = !1
              }
              getBaseTargetFromProps(e, t) {
                  return e[t]
              }
              readValueFromInstance(e, t) {
                  var n;
                  return $.has(t) ? (null === (n = (0, tK.A)(t)) || void 0 === n ? void 0 : n.default) || 0 : (t = er.has(t) ? t : et(t), e.getAttribute(t))
              }
              measureInstanceViewportBox() {
                  return tP()
              }
              scrapeMotionValuesFromProps(e, t) {
                  return ea(e, t)
              }
              build(e, t, n, r) {
                  K(e, t, n, this.isSVGTag, r.transformTemplate)
              }
              renderInstance(e, t, n, r) {
                  ei(e, t, n, r)
              }
              mount(e) {
                  this.isSVGTag = Q(e.tagName), super.mount(e)
              }
          }
          let nm = (e, t) => R(e) ? new nf(t, {
              enableHardwareAcceleration: !1
          }) : new np(t, {
              enableHardwareAcceleration: !0
          });

          function ng(e, t) {
              return t.max === t.min ? 0 : e / (t.max - t.min) * 100
          }
          let nv = {
                  correct: (e, t) => {
                      if (!t.target) return e;
                      if ("string" == typeof e) {
                          if (!Z.px.test(e)) return e;
                          e = parseFloat(e)
                      }
                      let n = ng(e, t.target.x),
                          r = ng(e, t.target.y);
                      return `${n}% ${r}%`
                  }
              },
              ny = "_$css",
              nb = {
                  correct: (e, {
                      treeScale: t,
                      projectionDelta: n
                  }) => {
                      let r = e,
                          i = e.includes("var("),
                          o = [];
                      i && (e = e.replace(tQ, e => (o.push(e), ny)));
                      let a = eU.P.parse(e);
                      if (a.length > 5) return r;
                      let s = eU.P.createTransformer(e),
                          l = "number" != typeof a[0] ? 1 : 0,
                          u = n.x.scale * t.x,
                          c = n.y.scale * t.y;
                      a[0 + l] /= u, a[1 + l] /= c;
                      let d = (0, tf.C)(u, c, .5);
                      "number" == typeof a[2 + l] && (a[2 + l] /= d), "number" == typeof a[3 + l] && (a[3 + l] /= d);
                      let h = s(a);
                      if (i) {
                          let e = 0;
                          h = h.replace(ny, () => {
                              let t = o[e];
                              return e++, t
                          })
                      }
                      return h
                  }
              };
          class nx extends s.Component {
              componentDidMount() {
                  let {
                      visualElement: e,
                      layoutGroup: t,
                      switchLayoutGroup: n,
                      layoutId: r
                  } = this.props, {
                      projection: i
                  } = e;
                  Object.assign(V, nw), i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
                      this.safeToRemove()
                  }), i.setOptions({
                      ...i.options,
                      onExitComplete: () => this.safeToRemove()
                  })), S.hasEverUpdated = !0
              }
              getSnapshotBeforeUpdate(e) {
                  let {
                      layoutDependency: t,
                      visualElement: n,
                      drag: r,
                      isPresent: i
                  } = this.props, o = n.projection;
                  return o && (o.isPresent = i, r || e.layoutDependency !== t || void 0 === t ? o.willUpdate() : this.safeToRemove(), e.isPresent === i || (i ? o.promote() : o.relegate() || e2.Z_.postRender(() => {
                      var e;
                      (null === (e = o.getStack()) || void 0 === e ? void 0 : e.members.length) || this.safeToRemove()
                  }))), null
              }
              componentDidUpdate() {
                  let {
                      projection: e
                  } = this.props.visualElement;
                  e && (e.root.didUpdate(), !e.currentAnimation && e.isLead() && this.safeToRemove())
              }
              componentWillUnmount() {
                  let {
                      visualElement: e,
                      layoutGroup: t,
                      switchLayoutGroup: n
                  } = this.props, {
                      projection: r
                  } = e;
                  r && (r.scheduleCheckAfterUnmount(), (null == t ? void 0 : t.group) && t.group.remove(r), (null == n ? void 0 : n.deregister) && n.deregister(r))
              }
              safeToRemove() {
                  let {
                      safeToRemove: e
                  } = this.props;
                  null == e || e()
              }
              render() {
                  return null
              }
          }
          let nw = {
              borderRadius: {
                  ...nv,
                  applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
              },
              borderTopLeftRadius: nv,
              borderTopRightRadius: nv,
              borderBottomLeftRadius: nv,
              borderBottomRightRadius: nv,
              boxShadow: nb
          };
          var nk = n(2064),
              nE = n(7255),
              nS = n(1662);
          let nC = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
              nj = nC.length,
              nA = e => "string" == typeof e ? parseFloat(e) : e,
              nT = e => "number" == typeof e || Z.px.test(e);

          function nM(e, t) {
              return void 0 !== e[t] ? e[t] : e.borderRadius
          }
          let nP = nV(0, .5, nE.Bn),
              nR = nV(.5, .95, nS.Z);

          function nV(e, t, n) {
              return r => r < e ? 0 : r > t ? 1 : n((0, tp.Y)(e, t, r))
          }

          function nL(e, t) {
              e.min = t.min, e.max = t.max
          }

          function n$(e, t) {
              nL(e.x, t.x), nL(e.y, t.y)
          }

          function nB(e, t, n, r, i) {
              return e -= t, e = r + 1 / n * (e - r), void 0 !== i && (e = r + 1 / i * (e - r)), e
          }

          function nO(e, t, [n, r, i], o, a) {
              ! function(e, t = 0, n = 1, r = .5, i, o = e, a = e) {
                  if (Z.aQ.test(t)) {
                      t = parseFloat(t);
                      let e = (0, tf.C)(a.min, a.max, t / 100);
                      t = e - a.min
                  }
                  if ("number" != typeof t) return;
                  let s = (0, tf.C)(o.min, o.max, r);
                  e === o && (s -= t), e.min = nB(e.min, t, n, s, i), e.max = nB(e.max, t, n, s, i)
              }(e, t[n], t[r], t[i], t.scale, o, a)
          }
          let nI = ["x", "scaleX", "originX"],
              nD = ["y", "scaleY", "originY"];

          function nF(e, t, n, r) {
              nO(e.x, t, nI, null == n ? void 0 : n.x, null == r ? void 0 : r.x), nO(e.y, t, nD, null == n ? void 0 : n.y, null == r ? void 0 : r.y)
          }
          var nz = n(1056);

          function nG(e) {
              return 0 === e.translate && 1 === e.scale
          }

          function nW(e) {
              return nG(e.x) && nG(e.y)
          }

          function n_(e, t) {
              return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
          }

          function nN(e) {
              return tm(e.x) / tm(e.y)
          }
          var nU = n(10);
          class nH {
              constructor() {
                  this.members = []
              }
              add(e) {
                  (0, nU.y4)(this.members, e), e.scheduleRender()
              }
              remove(e) {
                  if ((0, nU.cl)(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
                      let e = this.members[this.members.length - 1];
                      e && this.promote(e)
                  }
              }
              relegate(e) {
                  let t;
                  let n = this.members.findIndex(t => e === t);
                  if (0 === n) return !1;
                  for (let e = n; e >= 0; e--) {
                      let n = this.members[e];
                      if (!1 !== n.isPresent) {
                          t = n;
                          break
                      }
                  }
                  return !!t && (this.promote(t), !0)
              }
              promote(e, t) {
                  var n;
                  let r = this.lead;
                  if (e !== r && (this.prevLead = r, this.lead = e, e.show(), r)) {
                      r.instance && r.scheduleRender(), e.scheduleRender(), e.resumeFrom = r, t && (e.resumeFrom.preserveOpacity = !0), r.snapshot && (e.snapshot = r.snapshot, e.snapshot.latestValues = r.animationValues || r.latestValues), (null === (n = e.root) || void 0 === n ? void 0 : n.isUpdating) && (e.isLayoutDirty = !0);
                      let {
                          crossfade: i
                      } = e.options;
                      !1 === i && r.hide()
                  }
              }
              exitAnimationComplete() {
                  this.members.forEach(e => {
                      var t, n, r, i, o;
                      null === (n = (t = e.options).onExitComplete) || void 0 === n || n.call(t), null === (o = null === (r = e.resumingFrom) || void 0 === r ? void 0 : (i = r.options).onExitComplete) || void 0 === o || o.call(i)
                  })
              }
              scheduleRender() {
                  this.members.forEach(e => {
                      e.instance && e.scheduleRender(!1)
                  })
              }
              removeLeadSnapshot() {
                  this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
              }
          }

          function nZ(e, t, n) {
              let r = "",
                  i = e.x.translate / t.x,
                  o = e.y.translate / t.y;
              if ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `), (1 !== t.x || 1 !== t.y) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
                  let {
                      rotate: e,
                      rotateX: t,
                      rotateY: i
                  } = n;
                  e && (r += `rotate(${e}deg) `), t && (r += `rotateX(${t}deg) `), i && (r += `rotateY(${i}deg) `)
              }
              let a = e.x.scale * t.x,
                  s = e.y.scale * t.y;
              return (1 !== a || 1 !== s) && (r += `scale(${a}, ${s})`), r || "none"
          }
          let nq = (e, t) => e.depth - t.depth;
          class nY {
              constructor() {
                  this.children = [], this.isDirty = !1
              }
              add(e) {
                  (0, nU.y4)(this.children, e), this.isDirty = !0
              }
              remove(e) {
                  (0, nU.cl)(this.children, e), this.isDirty = !0
              }
              forEach(e) {
                  this.isDirty && this.children.sort(nq), this.isDirty = !1, this.children.forEach(e)
              }
          }
          var nX = n(3378);
          let nK = ["", "X", "Y", "Z"],
              nJ = 0;

          function nQ({
              attachResizeListener: e,
              defaultParent: t,
              measureScroll: n,
              checkIsScrollRoot: r,
              resetTransform: i
          }) {
              return class {
                  constructor(e, n = {}, r = null == t ? void 0 : t()) {
                      this.id = nJ++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                          x: 1,
                          y: 1
                      }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
                          this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                      }, this.updateProjection = () => {
                          this.nodes.forEach(n2), this.nodes.forEach(n8), this.nodes.forEach(n6)
                      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = e, this.latestValues = n, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0, e && this.root.registerPotentialNode(e, this);
                      for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
                      this.root === this && (this.nodes = new nY)
                  }
                  addEventListener(e, t) {
                      return this.eventHandlers.has(e) || this.eventHandlers.set(e, new no.L), this.eventHandlers.get(e).add(t)
                  }
                  notifyListeners(e, ...t) {
                      let n = this.eventHandlers.get(e);
                      null == n || n.notify(...t)
                  }
                  hasListeners(e) {
                      return this.eventHandlers.has(e)
                  }
                  registerPotentialNode(e, t) {
                      this.potentialNodes.set(e, t)
                  }
                  mount(t, n = !1) {
                      var r;
                      if (this.instance) return;
                      this.isSVG = t instanceof SVGElement && "svg" !== t.tagName, this.instance = t;
                      let {
                          layoutId: i,
                          layout: o,
                          visualElement: a
                      } = this.options;
                      if (a && !a.current && a.mount(t), this.root.nodes.add(this), null === (r = this.parent) || void 0 === r || r.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (o || i) && (this.isLayoutDirty = !0), e) {
                          let n;
                          let r = () => this.root.updateBlockedByResize = !1;
                          e(t, () => {
                              this.root.updateBlockedByResize = !0, n && n(), n = (0, nX.g)(r, 250), S.hasAnimatedSinceResize && (S.hasAnimatedSinceResize = !1, this.nodes.forEach(n3))
                          })
                      }
                      i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && a && (i || o) && this.addEventListener("didUpdate", ({
                          delta: e,
                          hasLayoutChanged: t,
                          hasRelativeTargetChanged: n,
                          layout: r
                      }) => {
                          var i, o, s, l, u;
                          if (this.isTreeAnimationBlocked()) {
                              this.target = void 0, this.relativeTarget = void 0;
                              return
                          }
                          let c = null !== (o = null !== (i = this.options.transition) && void 0 !== i ? i : a.getDefaultTransition()) && void 0 !== o ? o : ri,
                              {
                                  onLayoutAnimationStart: d,
                                  onLayoutAnimationComplete: h
                              } = a.getProps(),
                              p = !this.targetLayout || !n_(this.targetLayout, r) || n,
                              f = !t && n;
                          if ((null === (s = this.resumeFrom) || void 0 === s ? void 0 : s.instance) || f || t && (p || !this.currentAnimation)) {
                              this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, f);
                              let t = {
                                  ...(0, nz.ev)(c, "layout"),
                                  onPlay: d,
                                  onComplete: h
                              };
                              a.shouldReduceMotion && (t.delay = 0, t.type = !1), this.startAnimation(t)
                          } else t || 0 !== this.animationProgress || n3(this), this.isLead() && (null === (u = (l = this.options).onExitComplete) || void 0 === u || u.call(l));
                          this.targetLayout = r
                      })
                  }
                  unmount() {
                      var e, t;
                      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (e = this.getStack()) || void 0 === e || e.remove(this), null === (t = this.parent) || void 0 === t || t.children.delete(this), this.instance = void 0, e2.qY.preRender(this.updateProjection)
                  }
                  blockUpdate() {
                      this.updateManuallyBlocked = !0
                  }
                  unblockUpdate() {
                      this.updateManuallyBlocked = !1
                  }
                  isUpdateBlocked() {
                      return this.updateManuallyBlocked || this.updateBlockedByResize
                  }
                  isTreeAnimationBlocked() {
                      var e;
                      return this.isAnimationBlocked || (null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimationBlocked()) || !1
                  }
                  startUpdate() {
                      var e;
                      !this.isUpdateBlocked() && (this.isUpdating = !0, null === (e = this.nodes) || void 0 === e || e.forEach(n7), this.animationId++)
                  }
                  willUpdate(e = !0) {
                      var t, n, r;
                      if (this.root.isUpdateBlocked()) {
                          null === (n = (t = this.options).onExitComplete) || void 0 === n || n.call(t);
                          return
                      }
                      if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                      this.isLayoutDirty = !0;
                      for (let e = 0; e < this.path.length; e++) {
                          let t = this.path[e];
                          t.shouldResetTransform = !0, t.updateScroll("snapshot")
                      }
                      let {
                          layoutId: i,
                          layout: o
                      } = this.options;
                      if (void 0 === i && !o) return;
                      let a = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
                      this.prevTransformTemplateValue = null == a ? void 0 : a(this.latestValues, ""), this.updateSnapshot(), e && this.notifyListeners("willUpdate")
                  }
                  didUpdate() {
                      let e = this.isUpdateBlocked();
                      if (e) {
                          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(n5);
                          return
                      }
                      this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(ro), this.potentialNodes.clear()), this.nodes.forEach(n9), this.nodes.forEach(n0), this.nodes.forEach(n1), this.clearAllSnapshots(), e2.iW.update(), e2.iW.preRender(), e2.iW.render())
                  }
                  clearAllSnapshots() {
                      this.nodes.forEach(n4), this.sharedNodes.forEach(re)
                  }
                  scheduleUpdateProjection() {
                      e2.Z_.preRender(this.updateProjection, !1, !0)
                  }
                  scheduleCheckAfterUnmount() {
                      e2.Z_.postRender(() => {
                          this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                      })
                  }
                  updateSnapshot() {
                      !this.snapshot && this.instance && (this.snapshot = this.measure())
                  }
                  updateLayout() {
                      var e;
                      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                      if (this.resumeFrom && !this.resumeFrom.instance)
                          for (let e = 0; e < this.path.length; e++) {
                              let t = this.path[e];
                              t.updateScroll()
                          }
                      let t = this.layout;
                      this.layout = this.measure(!1), this.layoutCorrected = tP(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (e = this.options.visualElement) || void 0 === e || e.notify("LayoutMeasure", this.layout.layoutBox, null == t ? void 0 : t.layoutBox)
                  }
                  updateScroll(e = "measure") {
                      let t = !!(this.options.layoutScroll && this.instance);
                      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && (this.scroll = {
                          animationId: this.root.animationId,
                          phase: e,
                          isRoot: r(this.instance),
                          offset: n(this.instance)
                      })
                  }
                  resetTransform() {
                      var e;
                      if (!i) return;
                      let t = this.isLayoutDirty || this.shouldResetTransform,
                          n = this.projectionDelta && !nW(this.projectionDelta),
                          r = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate,
                          o = null == r ? void 0 : r(this.latestValues, ""),
                          a = o !== this.prevTransformTemplateValue;
                      t && (n || tB(this.latestValues) || a) && (i(this.instance, o), this.shouldResetTransform = !1, this.scheduleRender())
                  }
                  measure(e = !0) {
                      var t;
                      let n = this.measurePageBox(),
                          r = this.removeElementScroll(n);
                      return e && (r = this.removeTransform(r)), ra((t = r).x), ra(t.y), {
                          animationId: this.root.animationId,
                          measuredBox: n,
                          layoutBox: r,
                          latestValues: {},
                          source: this.id
                      }
                  }
                  measurePageBox() {
                      let {
                          visualElement: e
                      } = this.options;
                      if (!e) return tP();
                      let t = e.measureViewportBox(),
                          {
                              scroll: n
                          } = this.root;
                      return n && (tG(t.x, n.offset.x), tG(t.y, n.offset.y)), t
                  }
                  removeElementScroll(e) {
                      let t = tP();
                      n$(t, e);
                      for (let n = 0; n < this.path.length; n++) {
                          let r = this.path[n],
                              {
                                  scroll: i,
                                  options: o
                              } = r;
                          if (r !== this.root && i && o.layoutScroll) {
                              if (i.isRoot) {
                                  n$(t, e);
                                  let {
                                      scroll: n
                                  } = this.root;
                                  n && (tG(t.x, -n.offset.x), tG(t.y, -n.offset.y))
                              }
                              tG(t.x, i.offset.x), tG(t.y, i.offset.y)
                          }
                      }
                      return t
                  }
                  applyTransform(e, t = !1) {
                      let n = tP();
                      n$(n, e);
                      for (let e = 0; e < this.path.length; e++) {
                          let r = this.path[e];
                          !t && r.options.layoutScroll && r.scroll && r !== r.root && tU(n, {
                              x: -r.scroll.offset.x,
                              y: -r.scroll.offset.y
                          }), tB(r.latestValues) && tU(n, r.latestValues)
                      }
                      return tB(this.latestValues) && tU(n, this.latestValues), n
                  }
                  removeTransform(e) {
                      var t;
                      let n = tP();
                      n$(n, e);
                      for (let e = 0; e < this.path.length; e++) {
                          let r = this.path[e];
                          if (!r.instance || !tB(r.latestValues)) continue;
                          t$(r.latestValues) && r.updateSnapshot();
                          let i = tP(),
                              o = r.measurePageBox();
                          n$(i, o), nF(n, r.latestValues, null === (t = r.snapshot) || void 0 === t ? void 0 : t.layoutBox, i)
                      }
                      return tB(this.latestValues) && nF(n, this.latestValues), n
                  }
                  setTargetDelta(e) {
                      this.targetDelta = e, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection()
                  }
                  setOptions(e) {
                      this.options = {
                          ...this.options,
                          ...e,
                          crossfade: void 0 === e.crossfade || e.crossfade
                      }
                  }
                  clearMeasurements() {
                      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                  }
                  resolveTargetDelta() {
                      var e, t, n, r;
                      let i = this.getLead();
                      if (this.isProjectionDirty || (this.isProjectionDirty = i.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = i.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget) return;
                      let {
                          layout: o,
                          layoutId: a
                      } = this.options;
                      if (this.layout && (o || a)) {
                          if (!this.targetDelta && !this.relativeTarget) {
                              let e = this.getClosestProjectingParent();
                              e && e.layout ? (this.relativeParent = e, this.relativeTarget = tP(), this.relativeTargetOrigin = tP(), tw(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), n$(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                          }
                          if ((this.relativeTarget || this.targetDelta) && ((this.target || (this.target = tP(), this.targetWithTransforms = tP()), this.relativeTarget && this.relativeTargetOrigin && (null === (e = this.relativeParent) || void 0 === e ? void 0 : e.target)) ? (t = this.target, n = this.relativeTarget, r = this.relativeParent.target, tb(t.x, n.x, r.x), tb(t.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : n$(this.target, this.layout.layoutBox), tF(this.target, this.targetDelta)) : n$(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                              this.attemptToResolveRelativeTarget = !1;
                              let e = this.getClosestProjectingParent();
                              e && !!e.resumingFrom == !!this.resumingFrom && !e.options.layoutScroll && e.target ? (this.relativeParent = e, this.relativeTarget = tP(), this.relativeTargetOrigin = tP(), tw(this.relativeTargetOrigin, this.target, e.target), n$(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                          }
                      }
                  }
                  getClosestProjectingParent() {
                      if (!(!this.parent || t$(this.parent.latestValues) || tO(this.parent.latestValues))) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                  }
                  calcProjection() {
                      var e;
                      let {
                          isProjectionDirty: t,
                          isTransformDirty: n
                      } = this;
                      this.isProjectionDirty = this.isTransformDirty = !1;
                      let r = this.getLead(),
                          i = !!this.resumingFrom || this !== r,
                          o = !0;
                      if (t && (o = !1), i && n && (o = !1), o) return;
                      let {
                          layout: a,
                          layoutId: s
                      } = this.options;
                      if (this.isTreeAnimating = !!((null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(a || s)) return;
                      n$(this.layoutCorrected, this.layout.layoutBox),
                          function(e, t, n, r = !1) {
                              var i, o;
                              let a, s;
                              let l = n.length;
                              if (l) {
                                  t.x = t.y = 1;
                                  for (let u = 0; u < l; u++) s = (a = n[u]).projectionDelta, (null === (o = null === (i = a.instance) || void 0 === i ? void 0 : i.style) || void 0 === o ? void 0 : o.display) !== "contents" && (r && a.options.layoutScroll && a.scroll && a !== a.root && tU(e, {
                                      x: -a.scroll.offset.x,
                                      y: -a.scroll.offset.y
                                  }), s && (t.x *= s.x.scale, t.y *= s.y.scale, tF(e, s)), r && tB(a.latestValues) && tU(e, a.latestValues));
                                  t.x = tz(t.x), t.y = tz(t.y)
                              }
                          }(this.layoutCorrected, this.treeScale, this.path, i);
                      let {
                          target: l
                      } = r;
                      if (!l) return;
                      this.projectionDelta || (this.projectionDelta = tT(), this.projectionDeltaWithTransform = tT());
                      let u = this.treeScale.x,
                          c = this.treeScale.y,
                          d = this.projectionTransform;
                      ty(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = nZ(this.projectionDelta, this.treeScale), (this.projectionTransform !== d || this.treeScale.x !== u || this.treeScale.y !== c) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
                  }
                  hide() {
                      this.isVisible = !1
                  }
                  show() {
                      this.isVisible = !0
                  }
                  scheduleRender(e = !0) {
                      var t, n, r;
                      null === (n = (t = this.options).scheduleRender) || void 0 === n || n.call(t), e && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                  }
                  setAnimationOrigin(e, t = !1) {
                      var n, r;
                      let i = this.snapshot,
                          o = (null == i ? void 0 : i.latestValues) || {},
                          a = {
                              ...this.latestValues
                          },
                          s = tT();
                      this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !t;
                      let l = tP(),
                          u = (null == i ? void 0 : i.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source),
                          c = 1 >= ((null === (r = this.getStack()) || void 0 === r ? void 0 : r.members.length) || 0),
                          d = !!(u && !c && !0 === this.options.crossfade && !this.path.some(rr));
                      this.animationProgress = 0, this.mixTargetDelta = t => {
                          var n, r, i;
                          let h = t / 1e3;
                          rt(s.x, e.x, h), rt(s.y, e.y, h), this.setTargetDelta(s), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (tw(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), r = this.relativeTarget, i = this.relativeTargetOrigin, rn(r.x, i.x, l.x, h), rn(r.y, i.y, l.y, h)), u && (this.animationValues = a, function(e, t, n, r, i, o) {
                              i ? (e.opacity = (0, tf.C)(0, void 0 !== n.opacity ? n.opacity : 1, nP(r)), e.opacityExit = (0, tf.C)(void 0 !== t.opacity ? t.opacity : 1, 0, nR(r))) : o && (e.opacity = (0, tf.C)(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                              for (let i = 0; i < nj; i++) {
                                  let o = `border${nC[i]}Radius`,
                                      a = nM(t, o),
                                      s = nM(n, o);
                                  if (void 0 === a && void 0 === s) continue;
                                  a || (a = 0), s || (s = 0);
                                  let l = 0 === a || 0 === s || nT(a) === nT(s);
                                  l ? (e[o] = Math.max((0, tf.C)(nA(a), nA(s), r), 0), (Z.aQ.test(s) || Z.aQ.test(a)) && (e[o] += "%")) : e[o] = s
                              }(t.rotate || n.rotate) && (e.rotate = (0, tf.C)(t.rotate || 0, n.rotate || 0, r))
                          }(a, o, this.latestValues, h, d, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = h
                      }, this.mixTargetDelta(0)
                  }
                  startAnimation(e) {
                      var t, n;
                      this.notifyListeners("animationStart"), null === (t = this.currentAnimation) || void 0 === t || t.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (e2.qY.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = e2.Z_.update(() => {
                          S.hasAnimatedSinceResize = !0, this.currentAnimation = (0, nk.j)(0, 1e3, {
                              ...e,
                              onUpdate: t => {
                                  var n;
                                  this.mixTargetDelta(t), null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                              },
                              onComplete: () => {
                                  var t;
                                  null === (t = e.onComplete) || void 0 === t || t.call(e), this.completeAnimation()
                              }
                          }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                      })
                  }
                  completeAnimation() {
                      var e;
                      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (e = this.getStack()) || void 0 === e || e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                  }
                  finishAnimation() {
                      var e;
                      this.currentAnimation && (null === (e = this.mixTargetDelta) || void 0 === e || e.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
                  }
                  applyTransformsToTarget() {
                      let e = this.getLead(),
                          {
                              targetWithTransforms: t,
                              target: n,
                              layout: r,
                              latestValues: i
                          } = e;
                      if (t && n && r) {
                          if (this !== e && this.layout && r && rs(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                              n = this.target || tP();
                              let t = tm(this.layout.layoutBox.x);
                              n.x.min = e.target.x.min, n.x.max = n.x.min + t;
                              let r = tm(this.layout.layoutBox.y);
                              n.y.min = e.target.y.min, n.y.max = n.y.min + r
                          }
                          n$(t, n), tU(t, i), ty(this.projectionDeltaWithTransform, this.layoutCorrected, t, i)
                      }
                  }
                  registerSharedNode(e, t) {
                      var n, r, i;
                      this.sharedNodes.has(e) || this.sharedNodes.set(e, new nH);
                      let o = this.sharedNodes.get(e);
                      o.add(t), t.promote({
                          transition: null === (n = t.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                          preserveFollowOpacity: null === (i = null === (r = t.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === i ? void 0 : i.call(r, t)
                      })
                  }
                  isLead() {
                      let e = this.getStack();
                      return !e || e.lead === this
                  }
                  getLead() {
                      var e;
                      let {
                          layoutId: t
                      } = this.options;
                      return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
                  }
                  getPrevLead() {
                      var e;
                      let {
                          layoutId: t
                      } = this.options;
                      return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
                  }
                  getStack() {
                      let {
                          layoutId: e
                      } = this.options;
                      if (e) return this.root.sharedNodes.get(e)
                  }
                  promote({
                      needsReset: e,
                      transition: t,
                      preserveFollowOpacity: n
                  } = {}) {
                      let r = this.getStack();
                      r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
                          transition: t
                      })
                  }
                  relegate() {
                      let e = this.getStack();
                      return !!e && e.relegate(this)
                  }
                  resetRotation() {
                      let {
                          visualElement: e
                      } = this.options;
                      if (!e) return;
                      let t = !1,
                          {
                              latestValues: n
                          } = e;
                      if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (t = !0), !t) return;
                      let r = {};
                      for (let t = 0; t < nK.length; t++) {
                          let i = "rotate" + nK[t];
                          n[i] && (r[i] = n[i], e.setStaticValue(i, 0))
                      }
                      for (let t in null == e || e.render(), r) e.setStaticValue(t, r[t]);
                      e.scheduleRender()
                  }
                  getProjectionStyles(e = {}) {
                      var t, n, r;
                      let i = {};
                      if (!this.instance || this.isSVG) return i;
                      if (!this.isVisible) return {
                          visibility: "hidden"
                      };
                      i.visibility = "";
                      let o = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate;
                      if (this.needsReset) return this.needsReset = !1, i.opacity = "", i.pointerEvents = ed(e.pointerEvents) || "", i.transform = o ? o(this.latestValues, "") : "none", i;
                      let a = this.getLead();
                      if (!this.projectionDelta || !this.layout || !a.target) {
                          let t = {};
                          return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = ed(e.pointerEvents) || ""), this.hasProjected && !tB(this.latestValues) && (t.transform = o ? o({}, "") : "none", this.hasProjected = !1), t
                      }
                      let s = a.animationValues || a.latestValues;
                      this.applyTransformsToTarget(), i.transform = nZ(this.projectionDeltaWithTransform, this.treeScale, s), o && (i.transform = o(s, i.transform));
                      let {
                          x: l,
                          y: u
                      } = this.projectionDelta;
                      for (let e in i.transformOrigin = `${100*l.origin}% ${100*u.origin}% 0`, a.animationValues ? i.opacity = a === this ? null !== (r = null !== (n = s.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== r ? r : 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : i.opacity = a === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0, V) {
                          if (void 0 === s[e]) continue;
                          let {
                              correct: t,
                              applyTo: n
                          } = V[e], r = "none" === i.transform ? s[e] : t(s[e], a);
                          if (n) {
                              let e = n.length;
                              for (let t = 0; t < e; t++) i[n[t]] = r
                          } else i[e] = r
                      }
                      return this.options.layoutId && (i.pointerEvents = a === this ? ed(e.pointerEvents) || "" : "none"), i
                  }
                  clearSnapshot() {
                      this.resumeFrom = this.snapshot = void 0
                  }
                  resetTree() {
                      this.root.nodes.forEach(e => {
                          var t;
                          return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
                      }), this.root.nodes.forEach(n5), this.root.sharedNodes.clear()
                  }
              }
          }

          function n0(e) {
              e.updateLayout()
          }

          function n1(e) {
              var t, n, r;
              let i = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
              if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
                  let {
                      layoutBox: t,
                      measuredBox: n
                  } = e.layout, {
                      animationType: r
                  } = e.options, o = i.source !== e.layout.source;
                  "size" === r ? tR(e => {
                      let n = o ? i.measuredBox[e] : i.layoutBox[e],
                          r = tm(n);
                      n.min = t[e].min, n.max = n.min + r
                  }) : rs(r, i.layoutBox, t) && tR(e => {
                      let n = o ? i.measuredBox[e] : i.layoutBox[e],
                          r = tm(t[e]);
                      n.max = n.min + r
                  });
                  let a = tT();
                  ty(a, t, i.layoutBox);
                  let s = tT();
                  o ? ty(s, e.applyTransform(n, !0), i.measuredBox) : ty(s, t, i.layoutBox);
                  let l = !nW(a),
                      u = !1;
                  if (!e.resumeFrom) {
                      let n = e.getClosestProjectingParent();
                      if (n && !n.resumeFrom) {
                          let {
                              snapshot: e,
                              layout: r
                          } = n;
                          if (e && r) {
                              let n = tP();
                              tw(n, i.layoutBox, e.layoutBox);
                              let o = tP();
                              tw(o, t, r.layoutBox), n_(n, o) || (u = !0)
                          }
                      }
                  }
                  e.notifyListeners("didUpdate", {
                      layout: t,
                      snapshot: i,
                      delta: s,
                      layoutDelta: a,
                      hasLayoutChanged: l,
                      hasRelativeTargetChanged: u
                  })
              } else e.isLead() && (null === (r = (n = e.options).onExitComplete) || void 0 === r || r.call(n));
              e.options.transition = void 0
          }

          function n2(e) {
              e.isProjectionDirty || (e.isProjectionDirty = !!(e.parent && e.parent.isProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = !!(e.parent && e.parent.isTransformDirty))
          }

          function n4(e) {
              e.clearSnapshot()
          }

          function n5(e) {
              e.clearMeasurements()
          }

          function n9(e) {
              let {
                  visualElement: t
              } = e.options;
              (null == t ? void 0 : t.getProps().onBeforeLayoutMeasure) && t.notify("BeforeLayoutMeasure"), e.resetTransform()
          }

          function n3(e) {
              e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0
          }

          function n8(e) {
              e.resolveTargetDelta()
          }

          function n6(e) {
              e.calcProjection()
          }

          function n7(e) {
              e.resetRotation()
          }

          function re(e) {
              e.removeLeadSnapshot()
          }

          function rt(e, t, n) {
              e.translate = (0, tf.C)(t.translate, 0, n), e.scale = (0, tf.C)(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
          }

          function rn(e, t, n, r) {
              e.min = (0, tf.C)(t.min, n.min, r), e.max = (0, tf.C)(t.max, n.max, r)
          }

          function rr(e) {
              return e.animationValues && void 0 !== e.animationValues.opacityExit
          }
          let ri = {
              duration: .45,
              ease: [.4, 0, .1, 1]
          };

          function ro(e, t) {
              let n = e.root;
              for (let t = e.path.length - 1; t >= 0; t--)
                  if (e.path[t].instance) {
                      n = e.path[t];
                      break
                  } let r = n && n !== e.root ? n.instance : document,
                  i = r.querySelector(`[data-projection-id="${t}"]`);
              i && e.mount(i, !0)
          }

          function ra(e) {
              e.min = Math.round(e.min), e.max = Math.round(e.max)
          }

          function rs(e, t, n) {
              return "position" === e || "preserve-aspect" === e && !tg(nN(t), nN(n), .2)
          }
          let rl = nQ({
                  attachResizeListener: (e, t) => em(e, "resize", t),
                  measureScroll: () => ({
                      x: document.documentElement.scrollLeft || document.body.scrollLeft,
                      y: document.documentElement.scrollTop || document.body.scrollTop
                  }),
                  checkIsScrollRoot: () => !0
              }),
              ru = {
                  current: void 0
              },
              rc = nQ({
                  measureScroll: e => ({
                      x: e.scrollLeft,
                      y: e.scrollTop
                  }),
                  defaultParent: () => {
                      if (!ru.current) {
                          let e = new rl(0, {});
                          e.mount(window), e.setOptions({
                              layoutScroll: !0
                          }), ru.current = e
                      }
                      return ru.current
                  },
                  resetTransform: (e, t) => {
                      e.style.transform = void 0 !== t ? t : "none"
                  },
                  checkIsScrollRoot: e => "fixed" === window.getComputedStyle(e).position
              }),
              rd = {
                  ...tr,
                  ...eF,
                  ...tX,
                  measureLayout: function(e) {
                      let [t, n] = ez(), r = (0, s.useContext)(j.p);
                      return s.createElement(nx, {
                          ...e,
                          layoutGroup: r,
                          switchLayoutGroup: (0, s.useContext)(T),
                          isPresent: t,
                          safeToRemove: n
                      })
                  }
              },
              rh = function(e) {
                  function t(t, n = {}) {
                      return function({
                          preloadedFeatures: e,
                          createVisualElement: t,
                          projectionNodeConstructor: n,
                          useRender: r,
                          useVisualState: i,
                          Component: o
                      }) {
                          e && function(e) {
                              for (let t in e) "projectionNodeConstructor" === t ? w.projectionNodeConstructor = e[t] : w[t].Component = e[t]
                          }(e);
                          let a = (0, s.forwardRef)(function(a, m) {
                              var g, y;
                              let x = {
                                      ...(0, s.useContext)(l._),
                                      ...a,
                                      layoutId: function({
                                          layoutId: e
                                      }) {
                                          let t = (0, s.useContext)(j.p).id;
                                          return t && void 0 !== e ? t + "-" + e : e
                                      }(a)
                                  },
                                  {
                                      isStatic: M
                                  } = x,
                                  P = null,
                                  R = function(e) {
                                      let {
                                          initial: t,
                                          animate: n
                                      } = function(e, t) {
                                          if (v(e)) {
                                              let {
                                                  initial: t,
                                                  animate: n
                                              } = e;
                                              return {
                                                  initial: !1 === t || f(t) ? t : void 0,
                                                  animate: f(n) ? n : void 0
                                              }
                                          }
                                          return !1 !== e.inherit ? t : {}
                                      }(e, (0, s.useContext)(u));
                                      return (0, s.useMemo)(() => ({
                                          initial: t,
                                          animate: n
                                      }), [b(t), b(n)])
                                  }(a),
                                  V = M ? void 0 : (0, E.h)(() => {
                                      if (S.hasEverUpdated) return C++
                                  }),
                                  L = i(a, M);
                              if (!M && k.j) {
                                  R.visualElement = function(e, t, n, r) {
                                      let i = (0, s.useContext)(u).visualElement,
                                          o = (0, s.useContext)(h),
                                          a = (0, s.useContext)(c.O),
                                          p = (0, s.useContext)(l._).reducedMotion,
                                          f = (0, s.useRef)();
                                      r = r || o.renderer, !f.current && r && (f.current = r(e, {
                                          visualState: t,
                                          parent: i,
                                          props: n,
                                          presenceId: a ? a.id : void 0,
                                          blockInitialAnimation: !!a && !1 === a.initial,
                                          reducedMotionConfig: p
                                      }));
                                      let m = f.current;
                                      return (0, d.L)(() => {
                                          m && m.render()
                                      }), (0, d.L)(() => {
                                          m && m.animationState && m.animationState.animateChanges()
                                      }), m
                                  }(o, L, x, t);
                                  let r = (0, s.useContext)(h).strict,
                                      i = (0, s.useContext)(T);
                                  R.visualElement && (P = R.visualElement.loadFeatures(x, r, e, V, n || w.projectionNodeConstructor, i))
                              }
                              return s.createElement(A, {
                                  visualElement: R.visualElement,
                                  props: x
                              }, P, s.createElement(u.Provider, {
                                  value: R
                              }, r(o, a, V, (g = R.visualElement, y = m, (0, s.useCallback)(e => {
                                  e && L.mount && L.mount(e), g && (e ? g.mount(e) : g.unmount()), y && ("function" == typeof y ? y(e) : p(y) && (y.current = e))
                              }, [g])), L, M, R.visualElement)))
                          });
                          return a[M] = o, a
                      }(e(t, n))
                  }
                  if ("undefined" == typeof Proxy) return t;
                  let n = new Map;
                  return new Proxy(t, {
                      get: (e, r) => (n.has(r) || n.set(r, t(r)), n.get(r))
                  })
              }((e, t) => (function(e, {
                  forwardMotionProps: t = !1
              }, n, r, i) {
                  let o = R(e) ? ep : ef;
                  return {
                      ...o,
                      preloadedFeatures: n,
                      useRender: function(e = !1) {
                          let t = (t, n, r, i, {
                              latestValues: o
                          }, a) => {
                              let l = R(t) ? ee : U,
                                  u = l(n, o, a, t),
                                  c = (0, H.L)(n, "string" == typeof t, e),
                                  d = {
                                      ...c,
                                      ...u,
                                      ref: i
                                  };
                              return r && (d["data-projection-id"] = r), (0, s.createElement)(t, d)
                          };
                          return t
                      }(t),
                      createVisualElement: r,
                      projectionNodeConstructor: i,
                      Component: e
                  }
              })(e, t, rd, nm, rc))
      },
      1492: function(e, t, n) {
          "use strict";
          n.d(t, {
              L: function() {
                  return s
              },
              K: function() {
                  return a
              }
          });
          let r = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

          function i(e) {
              return r.has(e)
          }
          let o = e => !i(e);

          function a(e) {
              e && (o = t => t.startsWith("on") ? !i(t) : e(t))
          }
          try {
              a(require("@emotion/is-prop-valid").default)
          } catch (e) {}

          function s(e, t, n) {
              let r = {};
              for (let a in e)(o(a) || !0 === n && i(a) || !t && !i(a) || e.draggable && a.startsWith("onDrag")) && (r[a] = e[a]);
              return r
          }
      },
      9135: function(e, t, n) {
          "use strict";
          n.d(t, {
              T: function() {
                  return a
              }
          });
          var r = n(1550),
              i = n(7197),
              o = n(2728);

          function a(e, t) {
              var n;
              let a = (0, o.A)(e);
              return a !== i.h && (a = r.P), null === (n = a.getAnimatableNone) || void 0 === n ? void 0 : n.call(a, t)
          }
      },
      2728: function(e, t, n) {
          "use strict";
          n.d(t, {
              A: function() {
                  return s
              }
          });
          var r = n(5385),
              i = n(7197),
              o = n(6173);
          let a = {
                  ...o.j,
                  color: r.$,
                  backgroundColor: r.$,
                  outlineColor: r.$,
                  fill: r.$,
                  stroke: r.$,
                  borderColor: r.$,
                  borderTopColor: r.$,
                  borderRightColor: r.$,
                  borderBottomColor: r.$,
                  borderLeftColor: r.$,
                  filter: i.h,
                  WebkitFilter: i.h
              },
              s = e => a[e]
      },
      6173: function(e, t, n) {
          "use strict";
          n.d(t, {
              j: function() {
                  return a
              }
          });
          var r = n(1649),
              i = n(6190);
          let o = {
                  ...r.Rx,
                  transform: Math.round
              },
              a = {
                  borderWidth: i.px,
                  borderTopWidth: i.px,
                  borderRightWidth: i.px,
                  borderBottomWidth: i.px,
                  borderLeftWidth: i.px,
                  borderRadius: i.px,
                  radius: i.px,
                  borderTopLeftRadius: i.px,
                  borderTopRightRadius: i.px,
                  borderBottomRightRadius: i.px,
                  borderBottomLeftRadius: i.px,
                  width: i.px,
                  maxWidth: i.px,
                  height: i.px,
                  maxHeight: i.px,
                  size: i.px,
                  top: i.px,
                  right: i.px,
                  bottom: i.px,
                  left: i.px,
                  padding: i.px,
                  paddingTop: i.px,
                  paddingRight: i.px,
                  paddingBottom: i.px,
                  paddingLeft: i.px,
                  margin: i.px,
                  marginTop: i.px,
                  marginRight: i.px,
                  marginBottom: i.px,
                  marginLeft: i.px,
                  rotate: i.RW,
                  rotateX: i.RW,
                  rotateY: i.RW,
                  rotateZ: i.RW,
                  scale: r.bA,
                  scaleX: r.bA,
                  scaleY: r.bA,
                  scaleZ: r.bA,
                  skew: i.RW,
                  skewX: i.RW,
                  skewY: i.RW,
                  distance: i.px,
                  translateX: i.px,
                  translateY: i.px,
                  translateZ: i.px,
                  x: i.px,
                  y: i.px,
                  z: i.px,
                  perspective: i.px,
                  transformPerspective: i.px,
                  opacity: r.Fq,
                  originX: i.$C,
                  originY: i.$C,
                  originZ: i.px,
                  zIndex: o,
                  fillOpacity: r.Fq,
                  strokeOpacity: r.Fq,
                  numOctaves: o
              }
      },
      10: function(e, t, n) {
          "use strict";

          function r(e, t) {
              -1 === e.indexOf(t) && e.push(t)
          }

          function i(e, t) {
              let n = e.indexOf(t);
              n > -1 && e.splice(n, 1)
          }
          n.d(t, {
              cl: function() {
                  return i
              },
              y4: function() {
                  return r
              }
          })
      },
      4169: function(e, t, n) {
          "use strict";
          n.d(t, {
              u: function() {
                  return r
              }
          });
          let r = (e, t, n) => Math.min(Math.max(n, e), t)
      },
      3378: function(e, t, n) {
          "use strict";
          n.d(t, {
              g: function() {
                  return i
              }
          });
          var r = n(404);

          function i(e, t) {
              let n = performance.now(),
                  i = ({
                      timestamp: o
                  }) => {
                      let a = o - n;
                      a >= t && (r.qY.read(i), e(a - t))
                  };
              return r.Z_.read(i, !0), () => r.qY.read(i)
          }
      },
      4606: function(e, t, n) {
          "use strict";
          n.d(t, {
              s: function() {
                  return S
              }
          });
          var r = n(4394),
              i = n(5385),
              o = n(4169),
              a = n(22);

          function s(e, t, n) {
              return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
          }
          var l = n(6382),
              u = n(819),
              c = n(3184);
          let d = (e, t, n) => {
                  let r = e * e;
                  return Math.sqrt(Math.max(0, n * (t * t - r) + r))
              },
              h = [l.$, u.m, c.J],
              p = e => h.find(t => t.test(e));

          function f(e) {
              let t = p(e);
              (0, r.k)(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
              let n = t.parse(e);
              return t === c.J && (n = function({
                  hue: e,
                  saturation: t,
                  lightness: n,
                  alpha: r
              }) {
                  e /= 360, n /= 100;
                  let i = 0,
                      o = 0,
                      a = 0;
                  if (t /= 100) {
                      let r = n < .5 ? n * (1 + t) : n + t - n * t,
                          l = 2 * n - r;
                      i = s(l, r, e + 1 / 3), o = s(l, r, e), a = s(l, r, e - 1 / 3)
                  } else i = o = a = n;
                  return {
                      red: Math.round(255 * i),
                      green: Math.round(255 * o),
                      blue: Math.round(255 * a),
                      alpha: r
                  }
              }(n)), n
          }
          let m = (e, t) => {
              let n = f(e),
                  r = f(t),
                  i = {
                      ...n
                  };
              return e => (i.red = d(n.red, r.red, e), i.green = d(n.green, r.green, e), i.blue = d(n.blue, r.blue, e), i.alpha = (0, a.C)(n.alpha, r.alpha, e), u.m.transform(i))
          };
          var g = n(3624),
              v = n(1550);

          function y(e, t) {
              return "number" == typeof e ? n => (0, a.C)(e, t, n) : i.$.test(e) ? m(e, t) : w(e, t)
          }
          let b = (e, t) => {
                  let n = [...e],
                      r = n.length,
                      i = e.map((e, n) => y(e, t[n]));
                  return e => {
                      for (let t = 0; t < r; t++) n[t] = i[t](e);
                      return n
                  }
              },
              x = (e, t) => {
                  let n = {
                          ...e,
                          ...t
                      },
                      r = {};
                  for (let i in n) void 0 !== e[i] && void 0 !== t[i] && (r[i] = y(e[i], t[i]));
                  return e => {
                      for (let t in r) n[t] = r[t](e);
                      return n
                  }
              },
              w = (e, t) => {
                  let n = v.P.createTransformer(t),
                      i = (0, v.V)(e),
                      o = (0, v.V)(t),
                      a = i.numColors === o.numColors && i.numNumbers >= o.numNumbers;
                  return a ? (0, g.z)(b(i.values, o.values), n) : ((0, r.K)(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?t:e}`)
              };
          var k = n(3967);
          let E = (e, t) => n => (0, a.C)(e, t, n);

          function S(e, t, {
              clamp: n = !0,
              ease: a,
              mixer: s
          } = {}) {
              let l = e.length;
              (0, r.k)(l === t.length, "Both input and output ranges must be the same length"), (0, r.k)(!a || !Array.isArray(a) || a.length === l - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[l - 1] && (e = [...e].reverse(), t = [...t].reverse());
              let u = function(e, t, n) {
                      let r = [],
                          o = n || function(e) {
                              if ("number" == typeof e);
                              else if ("string" == typeof e) return i.$.test(e) ? m : w;
                              else if (Array.isArray(e)) return b;
                              else if ("object" == typeof e) return x;
                              return E
                          }(e[0]),
                          a = e.length - 1;
                      for (let n = 0; n < a; n++) {
                          let i = o(e[n], e[n + 1]);
                          if (t) {
                              let e = Array.isArray(t) ? t[n] : t;
                              i = (0, g.z)(e, i)
                          }
                          r.push(i)
                      }
                      return r
                  }(t, a, s),
                  c = u.length,
                  d = t => {
                      let n = 0;
                      if (c > 1)
                          for (; n < e.length - 2 && !(t < e[n + 1]); n++);
                      let r = (0, k.Y)(e[n], e[n + 1], t);
                      return u[n](r)
                  };
              return n ? t => d((0, o.u)(e[0], e[l - 1], t)) : d
          }
      },
      1741: function(e, t, n) {
          "use strict";
          n.d(t, {
              j: function() {
                  return r
              }
          });
          let r = "undefined" != typeof document
      },
      22: function(e, t, n) {
          "use strict";
          n.d(t, {
              C: function() {
                  return r
              }
          });
          let r = (e, t, n) => -n * e + n * t + e
      },
      1662: function(e, t, n) {
          "use strict";
          n.d(t, {
              Z: function() {
                  return r
              }
          });
          let r = e => e
      },
      3624: function(e, t, n) {
          "use strict";
          n.d(t, {
              z: function() {
                  return i
              }
          });
          let r = (e, t) => n => t(e(n)),
              i = (...e) => e.reduce(r)
      },
      3967: function(e, t, n) {
          "use strict";
          n.d(t, {
              Y: function() {
                  return r
              }
          });
          let r = (e, t, n) => {
              let r = t - e;
              return 0 === r ? 1 : (n - e) / r
          }
      },
      1560: function(e, t, n) {
          "use strict";
          n.d(t, {
              L: function() {
                  return i
              }
          });
          var r = n(10);
          class i {
              constructor() {
                  this.subscriptions = []
              }
              add(e) {
                  return (0, r.y4)(this.subscriptions, e), () => (0, r.cl)(this.subscriptions, e)
              }
              notify(e, t, n) {
                  let r = this.subscriptions.length;
                  if (r) {
                      if (1 === r) this.subscriptions[0](e, t, n);
                      else
                          for (let i = 0; i < r; i++) {
                              let r = this.subscriptions[i];
                              r && r(e, t, n)
                          }
                  }
              }
              getSize() {
                  return this.subscriptions.length
              }
              clear() {
                  this.subscriptions.length = 0
              }
          }
      },
      6917: function(e, t, n) {
          "use strict";
          n.d(t, {
              w: function() {
                  return r
              }
          });
          let r = e => 1e3 * e
      },
      6681: function(e, t, n) {
          "use strict";
          n.d(t, {
              h: function() {
                  return i
              }
          });
          var r = n(7294);

          function i(e) {
              let t = (0, r.useRef)(null);
              return null === t.current && (t.current = e()), t.current
          }
      },
      8868: function(e, t, n) {
          "use strict";
          n.d(t, {
              L: function() {
                  return o
              }
          });
          var r = n(7294),
              i = n(1741);
          let o = i.j ? r.useLayoutEffect : r.useEffect
      },
      5411: function(e, t, n) {
          "use strict";
          n.d(t, {
              z: function() {
                  return i
              }
          });
          var r = n(7294);

          function i(e) {
              return (0, r.useEffect)(() => () => e(), [])
          }
      },
      3038: function(e, t, n) {
          "use strict";

          function r(e, t) {
              return t ? e * (1e3 / t) : 0
          }
          n.d(t, {
              R: function() {
                  return r
              }
          })
      },
      3234: function(e, t, n) {
          "use strict";
          n.d(t, {
              B: function() {
                  return u
              }
          });
          var r = n(7367),
              i = n(404),
              o = n(1560),
              a = n(3038);
          let s = e => !isNaN(parseFloat(e));
          class l {
              constructor(e, t = {}) {
                  this.version = "8.2.4", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (e, t = !0) => {
                      this.prev = this.current, this.current = e;
                      let {
                          delta: n,
                          timestamp: o
                      } = r.w;
                      this.lastUpdated !== o && (this.timeDelta = n, this.lastUpdated = o, i.Z_.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), t && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                  }, this.scheduleVelocityCheck = () => i.Z_.postRender(this.velocityCheck), this.velocityCheck = ({
                      timestamp: e
                  }) => {
                      e !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                  }, this.hasAnimated = !1, this.prev = this.current = e, this.canTrackVelocity = s(this.current), this.owner = t.owner
              }
              onChange(e) {
                  return this.on("change", e)
              }
              on(e, t) {
                  this.events[e] || (this.events[e] = new o.L);
                  let n = this.events[e].add(t);
                  return "change" === e ? () => {
                      n(), i.Z_.read(() => {
                          this.events.change.getSize() || this.stop()
                      })
                  } : n
              }
              clearListeners() {
                  for (let e in this.events) this.events[e].clear()
              }
              attach(e, t) {
                  this.passiveEffect = e, this.stopPassiveEffect = t
              }
              set(e, t = !0) {
                  t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
              }
              setWithVelocity(e, t, n) {
                  this.set(t), this.prev = e, this.timeDelta = n
              }
              jump(e) {
                  this.updateAndNotify(e), this.prev = e, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
              }
              get() {
                  return this.current
              }
              getPrevious() {
                  return this.prev
              }
              getVelocity() {
                  return this.canTrackVelocity ? (0, a.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
              }
              start(e) {
                  return this.stop(), new Promise(t => {
                      this.hasAnimated = !0, this.stopAnimation = e(t), this.events.animationStart && this.events.animationStart.notify()
                  }).then(() => {
                      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                  })
              }
              stop() {
                  this.stopAnimation && (this.stopAnimation(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
              }
              isAnimating() {
                  return !!this.stopAnimation
              }
              clearAnimation() {
                  this.stopAnimation = null
              }
              destroy() {
                  this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
              }
          }

          function u(e, t) {
              return new l(e, t)
          }
      },
      6382: function(e, t, n) {
          "use strict";
          n.d(t, {
              $: function() {
                  return o
              }
          });
          var r = n(819),
              i = n(8834);
          let o = {
              test: (0, i.i)("#"),
              parse: function(e) {
                  let t = "",
                      n = "",
                      r = "",
                      i = "";
                  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
                      red: parseInt(t, 16),
                      green: parseInt(n, 16),
                      blue: parseInt(r, 16),
                      alpha: i ? parseInt(i, 16) / 255 : 1
                  }
              },
              transform: r.m.transform
          }
      },
      3184: function(e, t, n) {
          "use strict";
          n.d(t, {
              J: function() {
                  return s
              }
          });
          var r = n(1649),
              i = n(6190),
              o = n(6430),
              a = n(8834);
          let s = {
              test: (0, a.i)("hsl", "hue"),
              parse: (0, a.d)("hue", "saturation", "lightness"),
              transform: ({
                  hue: e,
                  saturation: t,
                  lightness: n,
                  alpha: a = 1
              }) => "hsla(" + Math.round(e) + ", " + i.aQ.transform((0, o.Nw)(t)) + ", " + i.aQ.transform((0, o.Nw)(n)) + ", " + (0, o.Nw)(r.Fq.transform(a)) + ")"
          }
      },
      5385: function(e, t, n) {
          "use strict";
          n.d(t, {
              $: function() {
                  return s
              }
          });
          var r = n(6430),
              i = n(6382),
              o = n(3184),
              a = n(819);
          let s = {
              test: e => a.m.test(e) || i.$.test(e) || o.J.test(e),
              parse: e => a.m.test(e) ? a.m.parse(e) : o.J.test(e) ? o.J.parse(e) : i.$.parse(e),
              transform: e => (0, r.HD)(e) ? e : e.hasOwnProperty("red") ? a.m.transform(e) : o.J.transform(e)
          }
      },
      819: function(e, t, n) {
          "use strict";
          n.d(t, {
              m: function() {
                  return u
              }
          });
          var r = n(4169),
              i = n(1649),
              o = n(6430),
              a = n(8834);
          let s = e => (0, r.u)(0, 255, e),
              l = {
                  ...i.Rx,
                  transform: e => Math.round(s(e))
              },
              u = {
                  test: (0, a.i)("rgb", "red"),
                  parse: (0, a.d)("red", "green", "blue"),
                  transform: ({
                      red: e,
                      green: t,
                      blue: n,
                      alpha: r = 1
                  }) => "rgba(" + l.transform(e) + ", " + l.transform(t) + ", " + l.transform(n) + ", " + (0, o.Nw)(i.Fq.transform(r)) + ")"
              }
      },
      8834: function(e, t, n) {
          "use strict";
          n.d(t, {
              d: function() {
                  return o
              },
              i: function() {
                  return i
              }
          });
          var r = n(6430);
          let i = (e, t) => n => !!((0, r.HD)(n) && r.mj.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
              o = (e, t, n) => i => {
                  if (!(0, r.HD)(i)) return i;
                  let [o, a, s, l] = i.match(r.KP);
                  return {
                      [e]: parseFloat(o),
                      [t]: parseFloat(a),
                      [n]: parseFloat(s),
                      alpha: void 0 !== l ? parseFloat(l) : 1
                  }
              }
      },
      7197: function(e, t, n) {
          "use strict";
          n.d(t, {
              h: function() {
                  return l
              }
          });
          var r = n(1550),
              i = n(6430);
          let o = new Set(["brightness", "contrast", "saturate", "opacity"]);

          function a(e) {
              let [t, n] = e.slice(0, -1).split("(");
              if ("drop-shadow" === t) return e;
              let [r] = n.match(i.KP) || [];
              if (!r) return e;
              let a = n.replace(r, ""),
                  s = o.has(t) ? 1 : 0;
              return r !== n && (s *= 100), t + "(" + s + a + ")"
          }
          let s = /([a-z-]*)\(.*?\)/g,
              l = {
                  ...r.P,
                  getAnimatableNone: e => {
                      let t = e.match(s);
                      return t ? t.map(a).join(" ") : e
                  }
              }
      },
      1550: function(e, t, n) {
          "use strict";
          n.d(t, {
              P: function() {
                  return h
              },
              V: function() {
                  return l
              }
          });
          var r = n(5385),
              i = n(1649),
              o = n(6430);
          let a = "${c}",
              s = "${n}";

          function l(e) {
              "number" == typeof e && (e = `${e}`);
              let t = [],
                  n = 0,
                  l = 0,
                  u = e.match(o.dA);
              u && (n = u.length, e = e.replace(o.dA, a), t.push(...u.map(r.$.parse)));
              let c = e.match(o.KP);
              return c && (l = c.length, e = e.replace(o.KP, s), t.push(...c.map(i.Rx.parse))), {
                  values: t,
                  numColors: n,
                  numNumbers: l,
                  tokenised: e
              }
          }

          function u(e) {
              return l(e).values
          }

          function c(e) {
              let {
                  values: t,
                  numColors: n,
                  tokenised: i
              } = l(e), u = t.length;
              return e => {
                  let t = i;
                  for (let i = 0; i < u; i++) t = t.replace(i < n ? a : s, i < n ? r.$.transform(e[i]) : (0, o.Nw)(e[i]));
                  return t
              }
          }
          let d = e => "number" == typeof e ? 0 : e,
              h = {
                  test: function(e) {
                      var t, n;
                      return isNaN(e) && (0, o.HD)(e) && ((null === (t = e.match(o.KP)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(o.dA)) || void 0 === n ? void 0 : n.length) || 0) > 0
                  },
                  parse: u,
                  createTransformer: c,
                  getAnimatableNone: function(e) {
                      let t = u(e),
                          n = c(e);
                      return n(t.map(d))
                  }
              }
      },
      1649: function(e, t, n) {
          "use strict";
          n.d(t, {
              Fq: function() {
                  return o
              },
              Rx: function() {
                  return i
              },
              bA: function() {
                  return a
              }
          });
          var r = n(4169);
          let i = {
                  test: e => "number" == typeof e,
                  parse: parseFloat,
                  transform: e => e
              },
              o = {
                  ...i,
                  transform: e => (0, r.u)(0, 1, e)
              },
              a = {
                  ...i,
                  default: 1
              }
      },
      6190: function(e, t, n) {
          "use strict";
          n.d(t, {
              $C: function() {
                  return c
              },
              RW: function() {
                  return o
              },
              aQ: function() {
                  return a
              },
              px: function() {
                  return s
              },
              vh: function() {
                  return l
              },
              vw: function() {
                  return u
              }
          });
          var r = n(6430);
          let i = e => ({
                  test: t => (0, r.HD)(t) && t.endsWith(e) && 1 === t.split(" ").length,
                  parse: parseFloat,
                  transform: t => `${t}${e}`
              }),
              o = i("deg"),
              a = i("%"),
              s = i("px"),
              l = i("vh"),
              u = i("vw"),
              c = {
                  ...a,
                  parse: e => a.parse(e) / 100,
                  transform: e => a.transform(100 * e)
              }
      },
      6430: function(e, t, n) {
          "use strict";
          n.d(t, {
              HD: function() {
                  return s
              },
              KP: function() {
                  return i
              },
              Nw: function() {
                  return r
              },
              dA: function() {
                  return o
              },
              mj: function() {
                  return a
              }
          });
          let r = e => Math.round(1e5 * e) / 1e5,
              i = /(-)?([\d]*\.?[\d])+/g,
              o = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
              a = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

          function s(e) {
              return "string" == typeof e
          }
      },
      4960: function(e, t, n) {
          "use strict";
          n.d(t, {
              c: function() {
                  return s
              }
          });
          var r = n(7294),
              i = n(3234),
              o = n(6014),
              a = n(6681);

          function s(e) {
              let t = (0, a.h)(() => (0, i.B)(e)),
                  {
                      isStatic: n
                  } = (0, r.useContext)(o._);
              if (n) {
                  let [, n] = (0, r.useState)(e);
                  (0, r.useEffect)(() => t.on("change", n), [])
              }
              return t
          }
      },
      4002: function(e, t, n) {
          "use strict";
          n.d(t, {
              q: function() {
                  return u
              }
          });
          var r = n(7294),
              i = n(406),
              o = n(4960),
              a = n(6014),
              s = n(6612),
              l = n(8868);

          function u(e, t = {}) {
              let {
                  isStatic: n
              } = (0, r.useContext)(a._), u = (0, r.useRef)(null), c = (0, o.c)((0, i.i)(e) ? e.get() : e), d = () => {
                  u.current && u.current.stop()
              };
              return (0, r.useInsertionEffect)(() => c.attach((e, r) => n ? r(e) : (d(), u.current = (0, s.jt)({
                  keyframes: [c.get(), e],
                  velocity: c.getVelocity(),
                  type: "spring",
                  ...t,
                  onUpdate: r
              }), c.get()), d), [JSON.stringify(t)]), (0, l.L)(() => {
                  if ((0, i.i)(e)) return e.on("change", e => c.set(parseFloat(e)))
              }, [c]), c
          }
      },
      578: function(e, t, n) {
          "use strict";
          n.d(t, {
              H: function() {
                  return c
              }
          });
          var r = n(4606);
          let i = e => "object" == typeof e && e.mix,
              o = e => i(e) ? e.mix : void 0;
          var a = n(4960),
              s = n(404),
              l = n(8868),
              u = n(6681);

          function c(e, t, n, i) {
              let a = "function" == typeof t ? t : function(...e) {
                  let t = !Array.isArray(e[0]),
                      n = t ? 0 : -1,
                      i = e[0 + n],
                      a = e[1 + n],
                      s = e[2 + n],
                      l = e[3 + n],
                      u = (0, r.s)(a, s, {
                          mixer: o(s[0]),
                          ...l
                      });
                  return t ? u(i) : u
              }(t, n, i);
              return Array.isArray(e) ? d(e, a) : d([e], ([e]) => a(e))
          }

          function d(e, t) {
              let n = (0, u.h)(() => []);
              return function(e, t) {
                  let n = (0, a.c)(t()),
                      r = () => n.set(t());
                  return r(), (0, l.L)(() => {
                      let t = () => s.Z_.update(r, !1, !0),
                          n = e.map(e => e.on("change", t));
                      return () => {
                          n.forEach(e => e()), s.qY.update(r)
                      }
                  }), n
              }(e, () => {
                  n.length = 0;
                  let r = e.length;
                  for (let t = 0; t < r; t++) n[t] = e[t].get();
                  return t(n)
              })
          }
      },
      406: function(e, t, n) {
          "use strict";
          n.d(t, {
              i: function() {
                  return r
              }
          });
          let r = e => !!(null == e ? void 0 : e.getVelocity)
      }
  },
  function(e) {
      var t = function(t) {
          return e(e.s = t)
      };
      e.O(0, [774, 179], function() {
          return t(6840), t(6885)
      }), _N_E = e.O()
  }
]); 
