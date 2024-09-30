(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [142], {
      2509: function(e, t, n) {
          ! function(e, t, n, r) {
              "use strict";
              let s;
              e.addSegment = void 0, e.addMapping = void 0, e.maybeAddSegment = void 0, e.maybeAddMapping = void 0, e.setSourceContent = void 0, e.toDecodedMap = void 0, e.toEncodedMap = void 0, e.fromMap = void 0, e.allMappings = void 0;
              class o {
                  constructor({
                      file: e,
                      sourceRoot: n
                  } = {}) {
                      this._names = new t.SetArray, this._sources = new t.SetArray, this._sourcesContent = [], this._mappings = [], this.file = e, this.sourceRoot = n
                  }
              }

              function i(e, t, n) {
                  for (let n = e.length; n > t; n--) e[n] = e[n - 1];
                  e[t] = n
              }

              function a(e, n) {
                  for (let r = 0; r < n.length; r++) t.put(e, n[r])
              }

              function l(e, t, n) {
                  let {
                      generated: r,
                      source: o,
                      original: i,
                      name: a,
                      content: l
                  } = n;
                  return o ? s(e, t, r.line - 1, r.column, o, i.line - 1, i.column, a, l) : s(e, t, r.line - 1, r.column, null, null, null, null, null)
              }
              e.addSegment = (e, t, n, r, o, i, a, l) => s(!1, e, t, n, r, o, i, a, l), e.maybeAddSegment = (e, t, n, r, o, i, a, l) => s(!0, e, t, n, r, o, i, a, l), e.addMapping = (e, t) => l(!1, e, t), e.maybeAddMapping = (e, t) => l(!0, e, t), e.setSourceContent = (e, n, r) => {
                  let {
                      _sources: s,
                      _sourcesContent: o
                  } = e;
                  o[t.put(s, n)] = r
              }, e.toDecodedMap = e => {
                  let {
                      file: t,
                      sourceRoot: n,
                      _mappings: r,
                      _sources: s,
                      _sourcesContent: o,
                      _names: i
                  } = e;
                  return function(e) {
                      let {
                          length: t
                      } = e, n = t;
                      for (let t = n - 1; t >= 0 && !(e[t].length > 0); n = t, t--);
                      n < t && (e.length = n)
                  }(r), {
                      version: 3,
                      file: t || void 0,
                      names: i.array,
                      sourceRoot: n || void 0,
                      sources: s.array,
                      sourcesContent: o,
                      mappings: r
                  }
              }, e.toEncodedMap = t => {
                  let r = e.toDecodedMap(t);
                  return Object.assign(Object.assign({}, r), {
                      mappings: n.encode(r.mappings)
                  })
              }, e.allMappings = e => {
                  let t = [],
                      {
                          _mappings: n,
                          _sources: r,
                          _names: s
                      } = e;
                  for (let e = 0; e < n.length; e++) {
                      let o = n[e];
                      for (let n = 0; n < o.length; n++) {
                          let i, a, l;
                          let c = o[n],
                              u = {
                                  line: e + 1,
                                  column: c[0]
                              };
                          1 !== c.length && (i = r.array[c[1]], a = {
                              line: c[2] + 1,
                              column: c[3]
                          }, 5 === c.length && (l = s.array[c[4]])), t.push({
                              generated: u,
                              source: i,
                              original: a,
                              name: l
                          })
                      }
                  }
                  return t
              }, e.fromMap = e => {
                  let t = new r.TraceMap(e),
                      n = new o({
                          file: t.file,
                          sourceRoot: t.sourceRoot
                      });
                  return a(n._names, t.names), a(n._sources, t.sources), n._sourcesContent = t.sourcesContent || t.sources.map(() => null), n._mappings = r.decodedMappings(t), n
              }, s = (e, n, r, s, o, a, l, c, u) => {
                  let {
                      _mappings: p,
                      _sources: h,
                      _sourcesContent: d,
                      _names: f
                  } = n, m = function(e, t) {
                      for (let n = e.length; n <= t; n++) e[n] = [];
                      return e[t]
                  }(p, r), g = function(e, t) {
                      let n = e.length;
                      for (let r = n - 1; r >= 0; n = r--) {
                          let n = e[r];
                          if (t >= n[0]) break
                      }
                      return n
                  }(m, s);
                  if (!o) {
                      if (e && function(e, t) {
                              if (0 === t) return !0;
                              let n = e[t - 1];
                              return 1 === n.length
                          }(m, g)) return;
                      return i(m, g, [s])
                  }
                  let k = t.put(h, o),
                      y = c ? t.put(f, c) : -1;
                  if (k === d.length && (d[k] = null != u ? u : null), !(e && function(e, t, n, r, s, o) {
                          if (0 === t) return !1;
                          let i = e[t - 1];
                          return 1 !== i.length && n === i[1] && r === i[2] && s === i[3] && o === (5 === i.length ? i[4] : -1)
                      }(m, g, k, a, l, y))) return i(m, g, c ? [s, k, a, l, y] : [s, k, a, l])
              }, e.GenMapping = o, Object.defineProperty(e, "__esModule", {
                  value: !0
              })
          }(t, n(2208), n(2297), n(3446))
      },
      8435: function(e) {
          e.exports = function() {
              "use strict";
              var e, t;
              let n = /^[\w+.-]+:\/\//,
                  r = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/,
                  s = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;

              function o(e) {
                  return e.startsWith("/")
              }

              function i(e) {
                  return /^[.?#]/.test(e)
              }

              function a(e) {
                  let t = r.exec(e);
                  return l(t[1], t[2] || "", t[3], t[4] || "", t[5] || "/", t[6] || "", t[7] || "")
              }

              function l(t, n, r, s, o, i, a) {
                  return {
                      scheme: t,
                      user: n,
                      host: r,
                      port: s,
                      path: o,
                      query: i,
                      hash: a,
                      type: e.Absolute
                  }
              }

              function c(t) {
                  if (t.startsWith("//")) {
                      let n = a("http:" + t);
                      return n.scheme = "", n.type = e.SchemeRelative, n
                  }
                  if (o(t)) {
                      let n = a("http://foo.com" + t);
                      return n.scheme = "", n.host = "", n.type = e.AbsolutePath, n
                  }
                  if (t.startsWith("file:")) return function(e) {
                      let t = s.exec(e),
                          n = t[2];
                      return l("file:", "", t[1] || "", "", o(n) ? n : "/" + n, t[3] || "", t[4] || "")
                  }(t);
                  if (n.test(t)) return a(t);
                  let r = a("http://foo.com/" + t);
                  return r.scheme = "", r.host = "", r.type = t ? t.startsWith("?") ? e.Query : t.startsWith("#") ? e.Hash : e.RelativePath : e.Empty, r
              }

              function u(t, n) {
                  let r = n <= e.RelativePath,
                      s = t.path.split("/"),
                      o = 1,
                      i = 0,
                      a = !1;
                  for (let e = 1; e < s.length; e++) {
                      let t = s[e];
                      if (!t) {
                          a = !0;
                          continue
                      }
                      if (a = !1, "." !== t) {
                          if (".." === t) {
                              i ? (a = !0, i--, o--) : r && (s[o++] = t);
                              continue
                          }
                          s[o++] = t, i++
                      }
                  }
                  let l = "";
                  for (let e = 1; e < o; e++) l += "/" + s[e];
                  l && (!a || l.endsWith("/..")) || (l += "/"), t.path = l
              }
              return (t = e || (e = {}))[t.Empty = 1] = "Empty", t[t.Hash = 2] = "Hash", t[t.Query = 3] = "Query", t[t.RelativePath = 4] = "RelativePath", t[t.AbsolutePath = 5] = "AbsolutePath", t[t.SchemeRelative = 6] = "SchemeRelative", t[t.Absolute = 7] = "Absolute",
                  function(t, n) {
                      if (!t && !n) return "";
                      let r = c(t),
                          s = r.type;
                      if (n && s !== e.Absolute) {
                          let t = c(n),
                              i = t.type;
                          switch (s) {
                              case e.Empty:
                                  r.hash = t.hash;
                              case e.Hash:
                                  r.query = t.query;
                              case e.Query:
                              case e.RelativePath:
                                  var o;
                                  o = r, u(t, t.type), "/" === o.path ? o.path = t.path : o.path = function(e) {
                                      if (e.endsWith("/..")) return e;
                                      let t = e.lastIndexOf("/");
                                      return e.slice(0, t + 1)
                                  }(t.path) + o.path;
                              case e.AbsolutePath:
                                  r.user = t.user, r.host = t.host, r.port = t.port;
                              case e.SchemeRelative:
                                  r.scheme = t.scheme
                          }
                          i > s && (s = i)
                      }
                      u(r, s);
                      let a = r.query + r.hash;
                      switch (s) {
                          case e.Hash:
                          case e.Query:
                              return a;
                          case e.RelativePath: {
                              let e = r.path.slice(1);
                              if (!e) return a || ".";
                              if (i(n || t) && !i(e)) return "./" + e + a;
                              return e + a
                          }
                          case e.AbsolutePath:
                              return r.path + a;
                          default:
                              return r.scheme + "//" + r.user + r.host + r.port + r.path + a
                      }
                  }
          }()
      },
      2208: function(e, t) {
          var n;
          (n = t).get = void 0, n.put = void 0, n.pop = void 0, n.get = (e, t) => e._indexes[t], n.put = (e, t) => {
              let r = n.get(e, t);
              if (void 0 !== r) return r;
              let {
                  array: s,
                  _indexes: o
              } = e;
              return o[t] = s.push(t) - 1
          }, n.pop = e => {
              let {
                  array: t,
                  _indexes: n
              } = e;
              if (0 === t.length) return;
              let r = t.pop();
              n[r] = void 0
          }, n.SetArray = class {
              constructor() {
                  this._indexes = {
                      __proto__: null
                  }, this.array = []
              }
          }, Object.defineProperty(n, "__esModule", {
              value: !0
          })
      },
      2297: function(e, t, n) {
          var r = n(8764).lW;
          ! function(e) {
              "use strict";
              let t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  n = new Uint8Array(64),
                  s = new Uint8Array(128);
              for (let e = 0; e < t.length; e++) {
                  let r = t.charCodeAt(e);
                  n[e] = r, s[r] = e
              }
              let o = "undefined" != typeof TextDecoder ? new TextDecoder : void 0 !== r ? {
                  decode(e) {
                      let t = r.from(e.buffer, e.byteOffset, e.byteLength);
                      return t.toString()
                  }
              } : {
                  decode(e) {
                      let t = "";
                      for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
                      return t
                  }
              };

              function i(e, t, n, r) {
                  let o = 0,
                      i = 0,
                      a = 0;
                  do {
                      let n = e.charCodeAt(t++);
                      o |= (31 & (a = s[n])) << i, i += 5
                  } while (32 & a);
                  let l = 1 & o;
                  return o >>>= 1, l && (o = -2147483648 | -o), n[r] += o, t
              }

              function a(e, t, n) {
                  return !(t >= n) && 44 !== e.charCodeAt(t)
              }

              function l(e, t) {
                  return e[0] - t[0]
              }

              function c(e, t, r, s, o) {
                  let i = s[o],
                      a = i - r[o];
                  r[o] = i, a = a < 0 ? -a << 1 | 1 : a << 1;
                  do {
                      let r = 31 & a;
                      (a >>>= 5) > 0 && (r |= 32), e[t++] = n[r]
                  } while (a > 0);
                  return t
              }
              e.decode = function(e) {
                  let t = new Int32Array(5),
                      n = [],
                      r = 0;
                  do {
                      let s = function(e, t) {
                              let n = e.indexOf(";", t);
                              return -1 === n ? e.length : n
                          }(e, r),
                          o = [],
                          c = !0,
                          u = 0;
                      t[0] = 0;
                      for (let n = r; n < s; n++) {
                          let r;
                          n = i(e, n, t, 0);
                          let l = t[0];
                          l < u && (c = !1), u = l, a(e, n, s) ? (n = i(e, n, t, 1), n = i(e, n, t, 2), n = i(e, n, t, 3), a(e, n, s) ? (n = i(e, n, t, 4), r = [l, t[1], t[2], t[3], t[4]]) : r = [l, t[1], t[2], t[3]]) : r = [l], o.push(r)
                      }
                      c || function(e) {
                          e.sort(l)
                      }(o), n.push(o), r = s + 1
                  } while (r <= e.length);
                  return n
              }, e.encode = function(e) {
                  let t = new Int32Array(5),
                      n = new Uint8Array(16384),
                      r = n.subarray(0, 16348),
                      s = 0,
                      i = "";
                  for (let a = 0; a < e.length; a++) {
                      let l = e[a];
                      if (a > 0 && (16384 === s && (i += o.decode(n), s = 0), n[s++] = 59), 0 !== l.length) {
                          t[0] = 0;
                          for (let e = 0; e < l.length; e++) {
                              let a = l[e];
                              s > 16348 && (i += o.decode(r), n.copyWithin(0, 16348, s), s -= 16348), e > 0 && (n[s++] = 44), s = c(n, s, t, a, 0), 1 !== a.length && (s = c(n, s, t, a, 1), s = c(n, s, t, a, 2), s = c(n, s, t, a, 3), 4 !== a.length && (s = c(n, s, t, a, 4)))
                          }
                      }
                  }
                  return i + o.decode(n.subarray(0, s))
              }, Object.defineProperty(e, "__esModule", {
                  value: !0
              })
          }(t)
      },
      3446: function(e, t, n) {
          ! function(e, t, n) {
              "use strict";

              function r(e, t) {
                  return t && !t.endsWith("/") && (t += "/"), n(e, t)
              }

              function s(e, t) {
                  for (let n = t; n < e.length; n++)
                      if (! function(e) {
                              for (let t = 1; t < e.length; t++)
                                  if (e[t][0] < e[t - 1][0]) return !1;
                              return !0
                          }(e[n])) return n;
                  return e.length
              }

              function o(e, t) {
                  return e[0] - t[0]
              }
              let i = !1;

              function a(e, t, n) {
                  for (let r = n + 1; r < e.length && e[r][0] === t; n = r++);
                  return n
              }

              function l(e, t, n) {
                  for (let r = n - 1; r >= 0 && e[r][0] === t; n = r--);
                  return n
              }

              function c() {
                  return {
                      lastKey: -1,
                      lastNeedle: -1,
                      lastIndex: -1
                  }
              }

              function u(e, t, n, r) {
                  let {
                      lastKey: s,
                      lastNeedle: o,
                      lastIndex: a
                  } = n, l = 0, c = e.length - 1;
                  if (r === s) {
                      if (t === o) return i = -1 !== a && e[a][0] === t, a;
                      t >= o ? l = -1 === a ? 0 : a : c = a
                  }
                  return n.lastKey = r, n.lastNeedle = t, n.lastIndex = function(e, t, n, r) {
                      for (; n <= r;) {
                          let s = n + (r - n >> 1),
                              o = e[s][0] - t;
                          if (0 === o) return i = !0, s;
                          o < 0 ? n = s + 1 : r = s - 1
                      }
                      return i = !1, n - 1
                  }(e, t, l, c)
              }

              function p() {
                  return {
                      __proto__: null
                  }
              }

              function h(e, t) {
                  for (let n = 0; n < t.length; n++) e.push(t[n])
              }
              let d = "`line` must be greater than 0 (lines start at line 1)",
                  f = "`column` must be greater than or equal to 0 (columns start at column 0)";
              e.encodedMappings = void 0, e.decodedMappings = void 0, e.traceSegment = void 0, e.originalPositionFor = void 0, e.generatedPositionFor = void 0, e.allGeneratedPositionsFor = void 0, e.eachMapping = void 0, e.sourceContentFor = void 0, e.presortedDecodedMap = void 0, e.decodedMap = void 0, e.encodedMap = void 0;
              class m {
                  constructor(e, t) {
                      let n = "string" == typeof e;
                      if (!n && e._decodedMemo) return e;
                      let i = n ? JSON.parse(e) : e,
                          {
                              version: a,
                              file: l,
                              names: u,
                              sourceRoot: p,
                              sources: h,
                              sourcesContent: d
                          } = i;
                      this.version = a, this.file = l, this.names = u || [], this.sourceRoot = p, this.sources = h, this.sourcesContent = d;
                      let f = r(p || "", function(e) {
                          if (!e) return "";
                          let t = e.lastIndexOf("/");
                          return e.slice(0, t + 1)
                      }(t));
                      this.resolvedSources = h.map(e => r(e || "", f));
                      let {
                          mappings: m
                      } = i;
                      "string" == typeof m ? (this._encoded = m, this._decoded = void 0) : (this._encoded = void 0, this._decoded = function(e, t) {
                          let n = s(e, 0);
                          if (n === e.length) return e;
                          t || (e = e.slice());
                          for (let i = n; i < e.length; i = s(e, i + 1)) {
                              var r;
                              e[i] = (r = e[i], t || (r = r.slice()), r.sort(o))
                          }
                          return e
                      }(m, n)), this._decodedMemo = c(), this._bySources = void 0, this._bySourceMemos = void 0
                  }
              }

              function g(e, t) {
                  return {
                      version: e.version,
                      file: e.file,
                      names: e.names,
                      sourceRoot: e.sourceRoot,
                      sources: e.sources,
                      sourcesContent: e.sourcesContent,
                      mappings: t
                  }
              }

              function k(e, t, n, r) {
                  return {
                      source: e,
                      line: t,
                      column: n,
                      name: r
                  }
              }

              function y(e, t) {
                  return {
                      line: e,
                      column: t
                  }
              }

              function b(e, t, n, r, s) {
                  let o = u(e, r, t, n);
                  return (i ? o = (-1 === s ? a : l)(e, r, o) : -1 === s && o++, -1 === o || o === e.length) ? -1 : o
              }(() => {
                  function n(t, n, r, s, o, h) {
                      if (--r < 0) throw Error(d);
                      if (s < 0) throw Error(f);
                      let {
                          sources: m,
                          resolvedSources: g
                      } = t, k = m.indexOf(n);
                      if (-1 === k && (k = g.indexOf(n)), -1 === k) return h ? [] : y(null, null);
                      let _ = t._bySources || (t._bySources = function(e, t) {
                              let n = t.map(p);
                              for (let r = 0; r < e.length; r++) {
                                  let s = e[r];
                                  for (let e = 0; e < s.length; e++) {
                                      let o = s[e];
                                      if (1 === o.length) continue;
                                      let i = o[1],
                                          l = o[2],
                                          c = o[3],
                                          p = n[i],
                                          h = p[l] || (p[l] = []),
                                          d = t[i],
                                          f = a(h, c, u(h, c, d, l));
                                      (function(e, t, n) {
                                          for (let n = e.length; n > t; n--) e[n] = e[n - 1];
                                          e[t] = n
                                      })(h, d.lastIndex = f + 1, [c, r, o[0]])
                                  }
                              }
                              return n
                          }(e.decodedMappings(t), t._bySourceMemos = m.map(c))),
                          x = _[k][r];
                      if (null == x) return h ? [] : y(null, null);
                      let T = t._bySourceMemos[k];
                      if (h) return function(e, t, n, r, s) {
                          let o = b(e, t, n, r, 1);
                          if (!i && -1 === s && o++, -1 === o || o === e.length) return [];
                          let c = i ? r : e[o][0];
                          i || (o = l(e, c, o));
                          let u = a(e, c, o),
                              p = [];
                          for (; o <= u; o++) {
                              let t = e[o];
                              p.push(y(t[1] + 1, t[2]))
                          }
                          return p
                      }(x, T, r, s, o);
                      let v = b(x, T, r, s, o);
                      if (-1 === v) return y(null, null);
                      let E = x[v];
                      return y(E[1] + 1, E[2])
                  }
                  e.encodedMappings = e => {
                      var n;
                      return null !== (n = e._encoded) && void 0 !== n ? n : e._encoded = t.encode(e._decoded)
                  }, e.decodedMappings = e => e._decoded || (e._decoded = t.decode(e._encoded)), e.traceSegment = (t, n, r) => {
                      let s = e.decodedMappings(t);
                      if (n >= s.length) return null;
                      let o = s[n],
                          i = b(o, t._decodedMemo, n, r, 1);
                      return -1 === i ? null : o[i]
                  }, e.originalPositionFor = (t, {
                      line: n,
                      column: r,
                      bias: s
                  }) => {
                      if (--n < 0) throw Error(d);
                      if (r < 0) throw Error(f);
                      let o = e.decodedMappings(t);
                      if (n >= o.length) return k(null, null, null, null);
                      let i = o[n],
                          a = b(i, t._decodedMemo, n, r, s || 1);
                      if (-1 === a) return k(null, null, null, null);
                      let l = i[a];
                      if (1 === l.length) return k(null, null, null, null);
                      let {
                          names: c,
                          resolvedSources: u
                      } = t;
                      return k(u[l[1]], l[2] + 1, l[3], 5 === l.length ? c[l[4]] : null)
                  }, e.allGeneratedPositionsFor = (e, {
                      source: t,
                      line: r,
                      column: s,
                      bias: o
                  }) => n(e, t, r, s, o || -1, !0), e.generatedPositionFor = (e, {
                      source: t,
                      line: r,
                      column: s,
                      bias: o
                  }) => n(e, t, r, s, o || 1, !1), e.eachMapping = (t, n) => {
                      let r = e.decodedMappings(t),
                          {
                              names: s,
                              resolvedSources: o
                          } = t;
                      for (let e = 0; e < r.length; e++) {
                          let t = r[e];
                          for (let r = 0; r < t.length; r++) {
                              let i = t[r],
                                  a = e + 1,
                                  l = i[0],
                                  c = null,
                                  u = null,
                                  p = null,
                                  h = null;
                              1 !== i.length && (c = o[i[1]], u = i[2] + 1, p = i[3]), 5 === i.length && (h = s[i[4]]), n({
                                  generatedLine: a,
                                  generatedColumn: l,
                                  source: c,
                                  originalLine: u,
                                  originalColumn: p,
                                  name: h
                              })
                          }
                      }
                  }, e.sourceContentFor = (e, t) => {
                      let {
                          sources: n,
                          resolvedSources: r,
                          sourcesContent: s
                      } = e;
                      if (null == s) return null;
                      let o = n.indexOf(t);
                      return -1 === o && (o = r.indexOf(t)), -1 === o ? null : s[o]
                  }, e.presortedDecodedMap = (e, t) => {
                      let n = new m(g(e, []), t);
                      return n._decoded = e.mappings, n
                  }, e.decodedMap = t => g(t, e.decodedMappings(t)), e.encodedMap = t => g(t, e.encodedMappings(t))
              })(), e.AnyMap = function(t, n) {
                  let r = "string" == typeof t ? JSON.parse(t) : t;
                  if (!("sections" in r)) return new m(r, n);
                  let s = [],
                      o = [],
                      i = [],
                      a = [];
                  (function t(n, r, s, o, i, a, l, c, u, p) {
                      let {
                          sections: d
                      } = n;
                      for (let n = 0; n < d.length; n++) {
                          let {
                              map: f,
                              offset: g
                          } = d[n], k = u, y = p;
                          if (n + 1 < d.length) {
                              let e = d[n + 1].offset;
                              (k = Math.min(u, l + e.line)) === u ? y = Math.min(p, c + e.column) : k < u && (y = c + e.column)
                          }(function(n, r, s, o, i, a, l, c, u, p) {
                              if ("sections" in n) return t(...arguments);
                              let d = new m(n, r),
                                  f = o.length,
                                  g = a.length,
                                  k = e.decodedMappings(d),
                                  {
                                      resolvedSources: y,
                                      sourcesContent: b
                                  } = d;
                              if (h(o, y), h(a, d.names), b) h(i, b);
                              else
                                  for (let e = 0; e < y.length; e++) i.push(null);
                              for (let e = 0; e < k.length; e++) {
                                  let t = l + e;
                                  if (t > u) return;
                                  let n = function(e, t) {
                                          for (let n = e.length; n <= t; n++) e[n] = [];
                                          return e[t]
                                      }(s, t),
                                      r = 0 === e ? c : 0,
                                      o = k[e];
                                  for (let e = 0; e < o.length; e++) {
                                      let s = o[e],
                                          i = r + s[0];
                                      if (t === u && i >= p) return;
                                      if (1 === s.length) {
                                          n.push([i]);
                                          continue
                                      }
                                      let a = f + s[1],
                                          l = s[2],
                                          c = s[3];
                                      n.push(4 === s.length ? [i, a, l, c] : [i, a, l, c, g + s[4]])
                                  }
                              }
                          })(f, r, s, o, i, a, l + g.line, c + g.column, k, y)
                      }
                  })(r, n, s, o, i, a, 0, 0, 1 / 0, 1 / 0);
                  let l = {
                      version: 3,
                      file: r.file,
                      names: a,
                      sources: o,
                      sourcesContent: i,
                      mappings: s
                  };
                  return e.presortedDecodedMap(l)
              }, e.GREATEST_LOWER_BOUND = 1, e.LEAST_UPPER_BOUND = -1, e.TraceMap = m
          }(t, n(2297), n(8435))
      },
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
      9742: function(e, t) {
          "use strict";
          t.byteLength = function(e) {
              var t = l(e),
                  n = t[0],
                  r = t[1];
              return (n + r) * 3 / 4 - r
          }, t.toByteArray = function(e) {
              var t, n, o = l(e),
                  i = o[0],
                  a = o[1],
                  c = new s((i + a) * 3 / 4 - a),
                  u = 0,
                  p = a > 0 ? i - 4 : i;
              for (n = 0; n < p; n += 4) t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)], c[u++] = t >> 16 & 255, c[u++] = t >> 8 & 255, c[u++] = 255 & t;
              return 2 === a && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4, c[u++] = 255 & t), 1 === a && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2, c[u++] = t >> 8 & 255, c[u++] = 255 & t), c
          }, t.fromByteArray = function(e) {
              for (var t, r = e.length, s = r % 3, o = [], i = 0, a = r - s; i < a; i += 16383) o.push(function(e, t, r) {
                  for (var s, o = [], i = t; i < r; i += 3) o.push(n[(s = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (255 & e[i + 2])) >> 18 & 63] + n[s >> 12 & 63] + n[s >> 6 & 63] + n[63 & s]);
                  return o.join("")
              }(e, i, i + 16383 > a ? a : i + 16383));
              return 1 === s ? o.push(n[(t = e[r - 1]) >> 2] + n[t << 4 & 63] + "==") : 2 === s && o.push(n[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="), o.join("")
          };
          for (var n = [], r = [], s = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, a = o.length; i < a; ++i) n[i] = o[i], r[o.charCodeAt(i)] = i;

          function l(e) {
              var t = e.length;
              if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
              var n = e.indexOf("="); - 1 === n && (n = t);
              var r = n === t ? 0 : 4 - n % 4;
              return [n, r]
          }
          r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
      },
      8764: function(e, t, n) {
          "use strict";
          /*!
           * The buffer module from node.js, for the browser.
           *
           * @author   Feross Aboukhadijeh <https://feross.org>
           * @license  MIT
           */
          var r = n(9742),
              s = n(645),
              o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

          function i(e) {
              if (e > 2147483647) throw RangeError('The value "' + e + '" is invalid for option "size"');
              var t = new Uint8Array(e);
              return Object.setPrototypeOf(t, a.prototype), t
          }

          function a(e, t, n) {
              if ("number" == typeof e) {
                  if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
                  return u(e)
              }
              return l(e, t, n)
          }

          function l(e, t, n) {
              if ("string" == typeof e) return function(e, t) {
                  if (("string" != typeof t || "" === t) && (t = "utf8"), !a.isEncoding(t)) throw TypeError("Unknown encoding: " + t);
                  var n = 0 | f(e, t),
                      r = i(n),
                      s = r.write(e, t);
                  return s !== n && (r = r.slice(0, s)), r
              }(e, t);
              if (ArrayBuffer.isView(e)) return function(e) {
                  if (C(e, Uint8Array)) {
                      var t = new Uint8Array(e);
                      return h(t.buffer, t.byteOffset, t.byteLength)
                  }
                  return p(e)
              }(e);
              if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
              if (C(e, ArrayBuffer) || e && C(e.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (C(e, SharedArrayBuffer) || e && C(e.buffer, SharedArrayBuffer))) return h(e, t, n);
              if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
              var r = e.valueOf && e.valueOf();
              if (null != r && r !== e) return a.from(r, t, n);
              var s = function(e) {
                  if (a.isBuffer(e)) {
                      var t, n = 0 | d(e.length),
                          r = i(n);
                      return 0 === r.length || e.copy(r, 0, 0, n), r
                  }
                  return void 0 !== e.length ? "number" != typeof e.length || (t = e.length) != t ? i(0) : p(e) : "Buffer" === e.type && Array.isArray(e.data) ? p(e.data) : void 0
              }(e);
              if (s) return s;
              if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return a.from(e[Symbol.toPrimitive]("string"), t, n);
              throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
          }

          function c(e) {
              if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
              if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
          }

          function u(e) {
              return c(e), i(e < 0 ? 0 : 0 | d(e))
          }

          function p(e) {
              for (var t = e.length < 0 ? 0 : 0 | d(e.length), n = i(t), r = 0; r < t; r += 1) n[r] = 255 & e[r];
              return n
          }

          function h(e, t, n) {
              var r;
              if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
              if (e.byteLength < t + (n || 0)) throw RangeError('"length" is outside of buffer bounds');
              return Object.setPrototypeOf(r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), a.prototype), r
          }

          function d(e) {
              if (e >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
              return 0 | e
          }

          function f(e, t) {
              if (a.isBuffer(e)) return e.length;
              if (ArrayBuffer.isView(e) || C(e, ArrayBuffer)) return e.byteLength;
              if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
              var n = e.length,
                  r = arguments.length > 2 && !0 === arguments[2];
              if (!r && 0 === n) return 0;
              for (var s = !1;;) switch (t) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                      return n;
                  case "utf8":
                  case "utf-8":
                      return I(e).length;
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                      return 2 * n;
                  case "hex":
                      return n >>> 1;
                  case "base64":
                      return A(e).length;
                  default:
                      if (s) return r ? -1 : I(e).length;
                      t = ("" + t).toLowerCase(), s = !0
              }
          }

          function m(e, t, n) {
              var s, o, i = !1;
              if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === n || n > this.length) && (n = this.length), n <= 0 || (n >>>= 0) <= (t >>>= 0))) return "";
              for (e || (e = "utf8");;) switch (e) {
                  case "hex":
                      return function(e, t, n) {
                          var r = e.length;
                          (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                          for (var s = "", o = t; o < n; ++o) s += R[e[o]];
                          return s
                      }(this, t, n);
                  case "utf8":
                  case "utf-8":
                      return b(this, t, n);
                  case "ascii":
                      return function(e, t, n) {
                          var r = "";
                          n = Math.min(e.length, n);
                          for (var s = t; s < n; ++s) r += String.fromCharCode(127 & e[s]);
                          return r
                      }(this, t, n);
                  case "latin1":
                  case "binary":
                      return function(e, t, n) {
                          var r = "";
                          n = Math.min(e.length, n);
                          for (var s = t; s < n; ++s) r += String.fromCharCode(e[s]);
                          return r
                      }(this, t, n);
                  case "base64":
                      return s = t, o = n, 0 === s && o === this.length ? r.fromByteArray(this) : r.fromByteArray(this.slice(s, o));
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                      return function(e, t, n) {
                          for (var r = e.slice(t, n), s = "", o = 0; o < r.length - 1; o += 2) s += String.fromCharCode(r[o] + 256 * r[o + 1]);
                          return s
                      }(this, t, n);
                  default:
                      if (i) throw TypeError("Unknown encoding: " + e);
                      e = (e + "").toLowerCase(), i = !0
              }
          }

          function g(e, t, n) {
              var r = e[t];
              e[t] = e[n], e[n] = r
          }

          function k(e, t, n, r, s) {
              var o;
              if (0 === e.length) return -1;
              if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), (o = n = +n) != o && (n = s ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                  if (s) return -1;
                  n = e.length - 1
              } else if (n < 0) {
                  if (!s) return -1;
                  n = 0
              }
              if ("string" == typeof t && (t = a.from(t, r)), a.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, n, r, s);
              if ("number" == typeof t) return (t &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? s ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : y(e, [t], n, r, s);
              throw TypeError("val must be string, number or Buffer")
          }

          function y(e, t, n, r, s) {
              var o, i = 1,
                  a = e.length,
                  l = t.length;
              if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                  if (e.length < 2 || t.length < 2) return -1;
                  i = 2, a /= 2, l /= 2, n /= 2
              }

              function c(e, t) {
                  return 1 === i ? e[t] : e.readUInt16BE(t * i)
              }
              if (s) {
                  var u = -1;
                  for (o = n; o < a; o++)
                      if (c(e, o) === c(t, -1 === u ? 0 : o - u)) {
                          if (-1 === u && (u = o), o - u + 1 === l) return u * i
                      } else - 1 !== u && (o -= o - u), u = -1
              } else
                  for (n + l > a && (n = a - l), o = n; o >= 0; o--) {
                      for (var p = !0, h = 0; h < l; h++)
                          if (c(e, o + h) !== c(t, h)) {
                              p = !1;
                              break
                          } if (p) return o
                  }
              return -1
          }

          function b(e, t, n) {
              n = Math.min(e.length, n);
              for (var r = [], s = t; s < n;) {
                  var o, i, a, l, c = e[s],
                      u = null,
                      p = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                  if (s + p <= n) switch (p) {
                      case 1:
                          c < 128 && (u = c);
                          break;
                      case 2:
                          (192 & (o = e[s + 1])) == 128 && (l = (31 & c) << 6 | 63 & o) > 127 && (u = l);
                          break;
                      case 3:
                          o = e[s + 1], i = e[s + 2], (192 & o) == 128 && (192 & i) == 128 && (l = (15 & c) << 12 | (63 & o) << 6 | 63 & i) > 2047 && (l < 55296 || l > 57343) && (u = l);
                          break;
                      case 4:
                          o = e[s + 1], i = e[s + 2], a = e[s + 3], (192 & o) == 128 && (192 & i) == 128 && (192 & a) == 128 && (l = (15 & c) << 18 | (63 & o) << 12 | (63 & i) << 6 | 63 & a) > 65535 && l < 1114112 && (u = l)
                  }
                  null === u ? (u = 65533, p = 1) : u > 65535 && (u -= 65536, r.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), r.push(u), s += p
              }
              return function(e) {
                  var t = e.length;
                  if (t <= 4096) return String.fromCharCode.apply(String, e);
                  for (var n = "", r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
                  return n
              }(r)
          }

          function _(e, t, n) {
              if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
              if (e + t > n) throw RangeError("Trying to access beyond buffer length")
          }

          function x(e, t, n, r, s, o) {
              if (!a.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
              if (t > s || t < o) throw RangeError('"value" argument is out of bounds');
              if (n + r > e.length) throw RangeError("Index out of range")
          }

          function T(e, t, n, r, s, o) {
              if (n + r > e.length || n < 0) throw RangeError("Index out of range")
          }

          function v(e, t, n, r, o) {
              return t = +t, n >>>= 0, o || T(e, t, n, 4, 34028234663852886e22, -34028234663852886e22), s.write(e, t, n, r, 23, 4), n + 4
          }

          function E(e, t, n, r, o) {
              return t = +t, n >>>= 0, o || T(e, t, n, 8, 17976931348623157e292, -17976931348623157e292), s.write(e, t, n, r, 52, 8), n + 8
          }
          t.lW = a, t.h2 = 50, a.TYPED_ARRAY_SUPPORT = function() {
              try {
                  var e = new Uint8Array(1),
                      t = {
                          foo: function() {
                              return 42
                          }
                      };
                  return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
              } catch (e) {
                  return !1
              }
          }(), a.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(a.prototype, "parent", {
              enumerable: !0,
              get: function() {
                  if (a.isBuffer(this)) return this.buffer
              }
          }), Object.defineProperty(a.prototype, "offset", {
              enumerable: !0,
              get: function() {
                  if (a.isBuffer(this)) return this.byteOffset
              }
          }), a.poolSize = 8192, a.from = function(e, t, n) {
              return l(e, t, n)
          }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array), a.alloc = function(e, t, n) {
              return (c(e), e <= 0) ? i(e) : void 0 !== t ? "string" == typeof n ? i(e).fill(t, n) : i(e).fill(t) : i(e)
          }, a.allocUnsafe = function(e) {
              return u(e)
          }, a.allocUnsafeSlow = function(e) {
              return u(e)
          }, a.isBuffer = function(e) {
              return null != e && !0 === e._isBuffer && e !== a.prototype
          }, a.compare = function(e, t) {
              if (C(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), C(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(e) || !a.isBuffer(t)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
              if (e === t) return 0;
              for (var n = e.length, r = t.length, s = 0, o = Math.min(n, r); s < o; ++s)
                  if (e[s] !== t[s]) {
                      n = e[s], r = t[s];
                      break
                  } return n < r ? -1 : r < n ? 1 : 0
          }, a.isEncoding = function(e) {
              switch (String(e).toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "latin1":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                      return !0;
                  default:
                      return !1
              }
          }, a.concat = function(e, t) {
              if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
              if (0 === e.length) return a.alloc(0);
              if (void 0 === t)
                  for (n = 0, t = 0; n < e.length; ++n) t += e[n].length;
              var n, r = a.allocUnsafe(t),
                  s = 0;
              for (n = 0; n < e.length; ++n) {
                  var o = e[n];
                  if (C(o, Uint8Array)) s + o.length > r.length ? a.from(o).copy(r, s) : Uint8Array.prototype.set.call(r, o, s);
                  else if (a.isBuffer(o)) o.copy(r, s);
                  else throw TypeError('"list" argument must be an Array of Buffers');
                  s += o.length
              }
              return r
          }, a.byteLength = f, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
              var e = this.length;
              if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
              for (var t = 0; t < e; t += 2) g(this, t, t + 1);
              return this
          }, a.prototype.swap32 = function() {
              var e = this.length;
              if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
              for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
              return this
          }, a.prototype.swap64 = function() {
              var e = this.length;
              if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
              for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
              return this
          }, a.prototype.toString = function() {
              var e = this.length;
              return 0 === e ? "" : 0 == arguments.length ? b(this, 0, e) : m.apply(this, arguments)
          }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(e) {
              if (!a.isBuffer(e)) throw TypeError("Argument must be a Buffer");
              return this === e || 0 === a.compare(this, e)
          }, a.prototype.inspect = function() {
              var e = "",
                  n = t.h2;
              return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
          }, o && (a.prototype[o] = a.prototype.inspect), a.prototype.compare = function(e, t, n, r, s) {
              if (C(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
              if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === s && (s = this.length), t < 0 || n > e.length || r < 0 || s > this.length) throw RangeError("out of range index");
              if (r >= s && t >= n) return 0;
              if (r >= s) return -1;
              if (t >= n) return 1;
              if (t >>>= 0, n >>>= 0, r >>>= 0, s >>>= 0, this === e) return 0;
              for (var o = s - r, i = n - t, l = Math.min(o, i), c = this.slice(r, s), u = e.slice(t, n), p = 0; p < l; ++p)
                  if (c[p] !== u[p]) {
                      o = c[p], i = u[p];
                      break
                  } return o < i ? -1 : i < o ? 1 : 0
          }, a.prototype.includes = function(e, t, n) {
              return -1 !== this.indexOf(e, t, n)
          }, a.prototype.indexOf = function(e, t, n) {
              return k(this, e, t, n, !0)
          }, a.prototype.lastIndexOf = function(e, t, n) {
              return k(this, e, t, n, !1)
          }, a.prototype.write = function(e, t, n, r) {
              if (void 0 === t) r = "utf8", n = this.length, t = 0;
              else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
              else if (isFinite(t)) t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
              else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
              var s, o, i, a, l, c, u, p, h = this.length - t;
              if ((void 0 === n || n > h) && (n = h), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
              r || (r = "utf8");
              for (var d = !1;;) switch (r) {
                  case "hex":
                      return function(e, t, n, r) {
                          n = Number(n) || 0;
                          var s = e.length - n;
                          r ? (r = Number(r)) > s && (r = s) : r = s;
                          var o = t.length;
                          r > o / 2 && (r = o / 2);
                          for (var i = 0; i < r; ++i) {
                              var a = parseInt(t.substr(2 * i, 2), 16);
                              if (a != a) break;
                              e[n + i] = a
                          }
                          return i
                      }(this, e, t, n);
                  case "utf8":
                  case "utf-8":
                      return s = t, o = n, S(I(e, this.length - s), this, s, o);
                  case "ascii":
                  case "latin1":
                  case "binary":
                      return i = t, a = n, S(function(e) {
                          for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                          return t
                      }(e), this, i, a);
                  case "base64":
                      return l = t, c = n, S(A(e), this, l, c);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                      return u = t, p = n, S(function(e, t) {
                          for (var n, r, s = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) r = (n = e.charCodeAt(o)) >> 8, s.push(n % 256), s.push(r);
                          return s
                      }(e, this.length - u), this, u, p);
                  default:
                      if (d) throw TypeError("Unknown encoding: " + r);
                      r = ("" + r).toLowerCase(), d = !0
              }
          }, a.prototype.toJSON = function() {
              return {
                  type: "Buffer",
                  data: Array.prototype.slice.call(this._arr || this, 0)
              }
          }, a.prototype.slice = function(e, t) {
              var n = this.length;
              e = ~~e, t = void 0 === t ? n : ~~t, e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
              var r = this.subarray(e, t);
              return Object.setPrototypeOf(r, a.prototype), r
          }, a.prototype.readUintLE = a.prototype.readUIntLE = function(e, t, n) {
              e >>>= 0, t >>>= 0, n || _(e, t, this.length);
              for (var r = this[e], s = 1, o = 0; ++o < t && (s *= 256);) r += this[e + o] * s;
              return r
          }, a.prototype.readUintBE = a.prototype.readUIntBE = function(e, t, n) {
              e >>>= 0, t >>>= 0, n || _(e, t, this.length);
              for (var r = this[e + --t], s = 1; t > 0 && (s *= 256);) r += this[e + --t] * s;
              return r
          }, a.prototype.readUint8 = a.prototype.readUInt8 = function(e, t) {
              return e >>>= 0, t || _(e, 1, this.length), this[e]
          }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(e, t) {
              return e >>>= 0, t || _(e, 2, this.length), this[e] | this[e + 1] << 8
          }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(e, t) {
              return e >>>= 0, t || _(e, 2, this.length), this[e] << 8 | this[e + 1]
          }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(e, t) {
              return e >>>= 0, t || _(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
          }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(e, t) {
              return e >>>= 0, t || _(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
          }, a.prototype.readIntLE = function(e, t, n) {
              e >>>= 0, t >>>= 0, n || _(e, t, this.length);
              for (var r = this[e], s = 1, o = 0; ++o < t && (s *= 256);) r += this[e + o] * s;
              return r >= (s *= 128) && (r -= Math.pow(2, 8 * t)), r
          }, a.prototype.readIntBE = function(e, t, n) {
              e >>>= 0, t >>>= 0, n || _(e, t, this.length);
              for (var r = t, s = 1, o = this[e + --r]; r > 0 && (s *= 256);) o += this[e + --r] * s;
              return o >= (s *= 128) && (o -= Math.pow(2, 8 * t)), o
          }, a.prototype.readInt8 = function(e, t) {
              return (e >>>= 0, t || _(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
          }, a.prototype.readInt16LE = function(e, t) {
              e >>>= 0, t || _(e, 2, this.length);
              var n = this[e] | this[e + 1] << 8;
              return 32768 & n ? 4294901760 | n : n
          }, a.prototype.readInt16BE = function(e, t) {
              e >>>= 0, t || _(e, 2, this.length);
              var n = this[e + 1] | this[e] << 8;
              return 32768 & n ? 4294901760 | n : n
          }, a.prototype.readInt32LE = function(e, t) {
              return e >>>= 0, t || _(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
          }, a.prototype.readInt32BE = function(e, t) {
              return e >>>= 0, t || _(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
          }, a.prototype.readFloatLE = function(e, t) {
              return e >>>= 0, t || _(e, 4, this.length), s.read(this, e, !0, 23, 4)
          }, a.prototype.readFloatBE = function(e, t) {
              return e >>>= 0, t || _(e, 4, this.length), s.read(this, e, !1, 23, 4)
          }, a.prototype.readDoubleLE = function(e, t) {
              return e >>>= 0, t || _(e, 8, this.length), s.read(this, e, !0, 52, 8)
          }, a.prototype.readDoubleBE = function(e, t) {
              return e >>>= 0, t || _(e, 8, this.length), s.read(this, e, !1, 52, 8)
          }, a.prototype.writeUintLE = a.prototype.writeUIntLE = function(e, t, n, r) {
              if (e = +e, t >>>= 0, n >>>= 0, !r) {
                  var s = Math.pow(2, 8 * n) - 1;
                  x(this, e, t, n, s, 0)
              }
              var o = 1,
                  i = 0;
              for (this[t] = 255 & e; ++i < n && (o *= 256);) this[t + i] = e / o & 255;
              return t + n
          }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(e, t, n, r) {
              if (e = +e, t >>>= 0, n >>>= 0, !r) {
                  var s = Math.pow(2, 8 * n) - 1;
                  x(this, e, t, n, s, 0)
              }
              var o = n - 1,
                  i = 1;
              for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255;
              return t + n
          }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(e, t, n) {
              return e = +e, t >>>= 0, n || x(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
          }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(e, t, n) {
              return e = +e, t >>>= 0, n || x(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
          }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(e, t, n) {
              return e = +e, t >>>= 0, n || x(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
          }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(e, t, n) {
              return e = +e, t >>>= 0, n || x(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
          }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(e, t, n) {
              return e = +e, t >>>= 0, n || x(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
          }, a.prototype.writeIntLE = function(e, t, n, r) {
              if (e = +e, t >>>= 0, !r) {
                  var s = Math.pow(2, 8 * n - 1);
                  x(this, e, t, n, s - 1, -s)
              }
              var o = 0,
                  i = 1,
                  a = 0;
              for (this[t] = 255 & e; ++o < n && (i *= 256);) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / i >> 0) - a & 255;
              return t + n
          }, a.prototype.writeIntBE = function(e, t, n, r) {
              if (e = +e, t >>>= 0, !r) {
                  var s = Math.pow(2, 8 * n - 1);
                  x(this, e, t, n, s - 1, -s)
              }
              var o = n - 1,
                  i = 1,
                  a = 0;
              for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / i >> 0) - a & 255;
              return t + n
          }, a.prototype.writeInt8 = function(e, t, n) {
              return e = +e, t >>>= 0, n || x(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
          }, a.prototype.writeInt16LE = function(e, t, n) {
              return e = +e, t >>>= 0, n || x(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
          }, a.prototype.writeInt16BE = function(e, t, n) {
              return e = +e, t >>>= 0, n || x(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
          }, a.prototype.writeInt32LE = function(e, t, n) {
              return e = +e, t >>>= 0, n || x(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
          }, a.prototype.writeInt32BE = function(e, t, n) {
              return e = +e, t >>>= 0, n || x(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
          }, a.prototype.writeFloatLE = function(e, t, n) {
              return v(this, e, t, !0, n)
          }, a.prototype.writeFloatBE = function(e, t, n) {
              return v(this, e, t, !1, n)
          }, a.prototype.writeDoubleLE = function(e, t, n) {
              return E(this, e, t, !0, n)
          }, a.prototype.writeDoubleBE = function(e, t, n) {
              return E(this, e, t, !1, n)
          }, a.prototype.copy = function(e, t, n, r) {
              if (!a.isBuffer(e)) throw TypeError("argument should be a Buffer");
              if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n || 0 === e.length || 0 === this.length) return 0;
              if (t < 0) throw RangeError("targetStart out of bounds");
              if (n < 0 || n >= this.length) throw RangeError("Index out of range");
              if (r < 0) throw RangeError("sourceEnd out of bounds");
              r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
              var s = r - n;
              return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), s
          }, a.prototype.fill = function(e, t, n, r) {
              if ("string" == typeof e) {
                  if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw TypeError("encoding must be a string");
                  if ("string" == typeof r && !a.isEncoding(r)) throw TypeError("Unknown encoding: " + r);
                  if (1 === e.length) {
                      var s, o = e.charCodeAt(0);
                      ("utf8" === r && o < 128 || "latin1" === r) && (e = o)
                  }
              } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
              if (t < 0 || this.length < t || this.length < n) throw RangeError("Out of range index");
              if (n <= t) return this;
              if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                  for (s = t; s < n; ++s) this[s] = e;
              else {
                  var i = a.isBuffer(e) ? e : a.from(e, r),
                      l = i.length;
                  if (0 === l) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                  for (s = 0; s < n - t; ++s) this[s + t] = i[s % l]
              }
              return this
          };
          var w = /[^+/0-9A-Za-z-_]/g;

          function I(e, t) {
              t = t || 1 / 0;
              for (var n, r = e.length, s = null, o = [], i = 0; i < r; ++i) {
                  if ((n = e.charCodeAt(i)) > 55295 && n < 57344) {
                      if (!s) {
                          if (n > 56319 || i + 1 === r) {
                              (t -= 3) > -1 && o.push(239, 191, 189);
                              continue
                          }
                          s = n;
                          continue
                      }
                      if (n < 56320) {
                          (t -= 3) > -1 && o.push(239, 191, 189), s = n;
                          continue
                      }
                      n = (s - 55296 << 10 | n - 56320) + 65536
                  } else s && (t -= 3) > -1 && o.push(239, 191, 189);
                  if (s = null, n < 128) {
                      if ((t -= 1) < 0) break;
                      o.push(n)
                  } else if (n < 2048) {
                      if ((t -= 2) < 0) break;
                      o.push(n >> 6 | 192, 63 & n | 128)
                  } else if (n < 65536) {
                      if ((t -= 3) < 0) break;
                      o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                  } else if (n < 1114112) {
                      if ((t -= 4) < 0) break;
                      o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                  } else throw Error("Invalid code point")
              }
              return o
          }

          function A(e) {
              return r.toByteArray(function(e) {
                  if ((e = (e = e.split("=")[0]).trim().replace(w, "")).length < 2) return "";
                  for (; e.length % 4 != 0;) e += "=";
                  return e
              }(e))
          }

          function S(e, t, n, r) {
              for (var s = 0; s < r && !(s + n >= t.length) && !(s >= e.length); ++s) t[s + n] = e[s];
              return s
          }

          function C(e, t) {
              return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
          }
          var R = function() {
              for (var e = "0123456789abcdef", t = Array(256), n = 0; n < 16; ++n)
                  for (var r = 16 * n, s = 0; s < 16; ++s) t[r + s] = e[n] + e[s];
              return t
          }()
      },
      4184: function(e, t) {
          var n;
          /*!
            Copyright (c) 2018 Jed Watson.
            Licensed under the MIT License (MIT), see
            http://jedwatson.github.io/classnames
          */
          ! function() {
              "use strict";
              var r = {}.hasOwnProperty;

              function s() {
                  for (var e = [], t = 0; t < arguments.length; t++) {
                      var n = arguments[t];
                      if (n) {
                          var o = typeof n;
                          if ("string" === o || "number" === o) e.push(n);
                          else if (Array.isArray(n)) {
                              if (n.length) {
                                  var i = s.apply(null, n);
                                  i && e.push(i)
                              }
                          } else if ("object" === o) {
                              if (n.toString === Object.prototype.toString)
                                  for (var a in n) r.call(n, a) && n[a] && e.push(a);
                              else e.push(n.toString())
                          }
                      }
                  }
                  return e.join(" ")
              }
              e.exports ? (s.default = s, e.exports = s) : void 0 !== (n = (function() {
                  return s
              }).apply(t, [])) && (e.exports = n)
          }()
      },
      645: function(e, t) {
          /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
          t.read = function(e, t, n, r, s) {
              var o, i, a = 8 * s - r - 1,
                  l = (1 << a) - 1,
                  c = l >> 1,
                  u = -7,
                  p = n ? s - 1 : 0,
                  h = n ? -1 : 1,
                  d = e[t + p];
              for (p += h, o = d & (1 << -u) - 1, d >>= -u, u += a; u > 0; o = 256 * o + e[t + p], p += h, u -= 8);
              for (i = o & (1 << -u) - 1, o >>= -u, u += r; u > 0; i = 256 * i + e[t + p], p += h, u -= 8);
              if (0 === o) o = 1 - c;
              else {
                  if (o === l) return i ? NaN : (d ? -1 : 1) * (1 / 0);
                  i += Math.pow(2, r), o -= c
              }
              return (d ? -1 : 1) * i * Math.pow(2, o - r)
          }, t.write = function(e, t, n, r, s, o) {
              var i, a, l, c = 8 * o - s - 1,
                  u = (1 << c) - 1,
                  p = u >> 1,
                  h = 23 === s ? 5960464477539062e-23 : 0,
                  d = r ? 0 : o - 1,
                  f = r ? 1 : -1,
                  m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
              for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, i = u) : (i = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -i)) < 1 && (i--, l *= 2), i + p >= 1 ? t += h / l : t += h * Math.pow(2, 1 - p), t * l >= 2 && (i++, l /= 2), i + p >= u ? (a = 0, i = u) : i + p >= 1 ? (a = (t * l - 1) * Math.pow(2, s), i += p) : (a = t * Math.pow(2, p - 1) * Math.pow(2, s), i = 0)); s >= 8; e[n + d] = 255 & a, d += f, a /= 256, s -= 8);
              for (i = i << s | a, c += s; c > 0; e[n + d] = 255 & i, d += f, i /= 256, c -= 8);
              e[n + d - f] |= 128 * m
          }
      },
      3746: function(e, t, n) {
          "use strict";
          n.d(t, {
              ZP: function() {
                  return f
              },
              lG: function() {
                  return o
              }
          });
          var r = n(7410),
              s = n(7294),
              o = {
                  Prism: r.Z,
                  theme: {
                      plain: {
                          backgroundColor: "#2a2734",
                          color: "#9a86fd"
                      },
                      styles: [{
                          types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
                          style: {
                              color: "#6c6783"
                          }
                      }, {
                          types: ["namespace"],
                          style: {
                              opacity: .7
                          }
                      }, {
                          types: ["tag", "operator", "number"],
                          style: {
                              color: "#e09142"
                          }
                      }, {
                          types: ["property", "function"],
                          style: {
                              color: "#9a86fd"
                          }
                      }, {
                          types: ["tag-id", "selector", "atrule-id"],
                          style: {
                              color: "#eeebff"
                          }
                      }, {
                          types: ["attr-name"],
                          style: {
                              color: "#c4b9fe"
                          }
                      }, {
                          types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"],
                          style: {
                              color: "#ffcc99"
                          }
                      }, {
                          types: ["deleted"],
                          style: {
                              textDecorationLine: "line-through"
                          }
                      }, {
                          types: ["inserted"],
                          style: {
                              textDecorationLine: "underline"
                          }
                      }, {
                          types: ["italic"],
                          style: {
                              fontStyle: "italic"
                          }
                      }, {
                          types: ["important", "bold"],
                          style: {
                              fontWeight: "bold"
                          }
                      }, {
                          types: ["important"],
                          style: {
                              color: "#c4b9fe"
                          }
                      }]
                  }
              };

          function i(e, t, n) {
              return t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = n, e
          }

          function a() {
              return (a = Object.assign || function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                  }
                  return e
              }).apply(this, arguments)
          }
          var l = /\r\n|\r|\n/,
              c = function(e) {
                  0 === e.length ? e.push({
                      types: ["plain"],
                      content: "\n",
                      empty: !0
                  }) : 1 === e.length && "" === e[0].content && (e[0].content = "\n", e[0].empty = !0)
              },
              u = function(e, t) {
                  var n = e.length;
                  return n > 0 && e[n - 1] === t ? e : e.concat(t)
              },
              p = function(e) {
                  for (var t = [
                          []
                      ], n = [e], r = [0], s = [e.length], o = 0, i = 0, a = [], p = [a]; i > -1;) {
                      for (;
                          (o = r[i]++) < s[i];) {
                          var h = void 0,
                              d = t[i],
                              f = n[i][o];
                          if ("string" == typeof f ? (d = i > 0 ? d : ["plain"], h = f) : (d = u(d, f.type), f.alias && (d = u(d, f.alias)), h = f.content), "string" != typeof h) {
                              i++, t.push(d), n.push(h), r.push(0), s.push(h.length);
                              continue
                          }
                          var m = h.split(l),
                              g = m.length;
                          a.push({
                              types: d,
                              content: m[0]
                          });
                          for (var k = 1; k < g; k++) c(a), p.push(a = []), a.push({
                              types: d,
                              content: m[k]
                          })
                      }
                      i--, t.pop(), n.pop(), r.pop(), s.pop()
                  }
                  return c(a), p
              },
              h = function(e, t) {
                  var n = e.plain,
                      r = Object.create(null),
                      s = e.styles.reduce(function(e, n) {
                          var r = n.languages,
                              s = n.style;
                          return r && !r.includes(t) || n.types.forEach(function(t) {
                              var n = a({}, e[t], s);
                              e[t] = n
                          }), e
                      }, r);
                  return s.root = n, s.plain = a({}, n, {
                      backgroundColor: null
                  }), s
              };

          function d(e, t) {
              var n = {};
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && -1 === t.indexOf(r) && (n[r] = e[r]);
              return n
          }
          var f = function(e) {
              function t() {
                  for (var t = this, n = [], r = arguments.length; r--;) n[r] = arguments[r];
                  e.apply(this, n), i(this, "getThemeDict", function(e) {
                      if (void 0 !== t.themeDict && e.theme === t.prevTheme && e.language === t.prevLanguage) return t.themeDict;
                      t.prevTheme = e.theme, t.prevLanguage = e.language;
                      var n = e.theme ? h(e.theme, e.language) : void 0;
                      return t.themeDict = n
                  }), i(this, "getLineProps", function(e) {
                      var n = e.key,
                          r = e.className,
                          s = e.style,
                          o = a({}, d(e, ["key", "className", "style", "line"]), {
                              className: "token-line",
                              style: void 0,
                              key: void 0
                          }),
                          i = t.getThemeDict(t.props);
                      return void 0 !== i && (o.style = i.plain), void 0 !== s && (o.style = void 0 !== o.style ? a({}, o.style, s) : s), void 0 !== n && (o.key = n), r && (o.className += " " + r), o
                  }), i(this, "getStyleForToken", function(e) {
                      var n = e.types,
                          r = e.empty,
                          s = n.length,
                          o = t.getThemeDict(t.props);
                      if (void 0 !== o) {
                          if (1 === s && "plain" === n[0]) return r ? {
                              display: "inline-block"
                          } : void 0;
                          if (1 === s && !r) return o[n[0]];
                          var i = n.map(function(e) {
                              return o[e]
                          });
                          return Object.assign.apply(Object, [r ? {
                              display: "inline-block"
                          } : {}].concat(i))
                      }
                  }), i(this, "getTokenProps", function(e) {
                      var n = e.key,
                          r = e.className,
                          s = e.style,
                          o = e.token,
                          i = a({}, d(e, ["key", "className", "style", "token"]), {
                              className: "token " + o.types.join(" "),
                              children: o.content,
                              style: t.getStyleForToken(o),
                              key: void 0
                          });
                      return void 0 !== s && (i.style = void 0 !== i.style ? a({}, i.style, s) : s), void 0 !== n && (i.key = n), r && (i.className += " " + r), i
                  }), i(this, "tokenize", function(e, t, n, r) {
                      var s = {
                          code: t,
                          grammar: n,
                          language: r,
                          tokens: []
                      };
                      e.hooks.run("before-tokenize", s);
                      var o = s.tokens = e.tokenize(s.code, s.grammar, s.language);
                      return e.hooks.run("after-tokenize", s), o
                  })
              }
              return e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t, t.prototype.render = function() {
                  var e = this.props,
                      t = e.Prism,
                      n = e.language,
                      r = e.code,
                      s = e.children,
                      o = this.getThemeDict(this.props),
                      i = t.languages[n];
                  return s({
                      tokens: p(void 0 !== i ? this.tokenize(t, r, i, n) : [r]),
                      className: "prism-code language-" + n,
                      style: void 0 !== o ? o.root : {},
                      getLineProps: this.getLineProps,
                      getTokenProps: this.getTokenProps
                  })
              }, t
          }(s.Component)
      },
      7410: function(e, t) {
          "use strict";
          /**
           * Prism: Lightweight, robust, elegant syntax highlighting
           *
           * @license MIT <https://opensource.org/licenses/MIT>
           * @author Lea Verou <https://lea.verou.me>
           * @namespace
           * @public
           */
          var n, r, s, o, i, a, l, c, u, p, h, d, f, m, g, k, y, b, _, x, T, v, E, w, I = function() {
                  var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
                      t = 0,
                      n = {},
                      r = {
                          util: {
                              encode: function e(t) {
                                  return t instanceof s ? new s(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                              },
                              type: function(e) {
                                  return Object.prototype.toString.call(e).slice(8, -1)
                              },
                              objId: function(e) {
                                  return e.__id || Object.defineProperty(e, "__id", {
                                      value: ++t
                                  }), e.__id
                              },
                              clone: function e(t, n) {
                                  var s, o;
                                  switch (n = n || {}, r.util.type(t)) {
                                      case "Object":
                                          if (n[o = r.util.objId(t)]) return n[o];
                                          for (var i in s = {}, n[o] = s, t) t.hasOwnProperty(i) && (s[i] = e(t[i], n));
                                          return s;
                                      case "Array":
                                          if (n[o = r.util.objId(t)]) return n[o];
                                          return s = [], n[o] = s, t.forEach(function(t, r) {
                                              s[r] = e(t, n)
                                          }), s;
                                      default:
                                          return t
                                  }
                              },
                              getLanguage: function(t) {
                                  for (; t;) {
                                      var n = e.exec(t.className);
                                      if (n) return n[1].toLowerCase();
                                      t = t.parentElement
                                  }
                                  return "none"
                              },
                              setLanguage: function(t, n) {
                                  t.className = t.className.replace(RegExp(e, "gi"), ""), t.classList.add("language-" + n)
                              },
                              isActive: function(e, t, n) {
                                  for (var r = "no-" + t; e;) {
                                      var s = e.classList;
                                      if (s.contains(t)) return !0;
                                      if (s.contains(r)) return !1;
                                      e = e.parentElement
                                  }
                                  return !!n
                              }
                          },
                          languages: {
                              plain: n,
                              plaintext: n,
                              text: n,
                              txt: n,
                              extend: function(e, t) {
                                  var n = r.util.clone(r.languages[e]);
                                  for (var s in t) n[s] = t[s];
                                  return n
                              },
                              insertBefore: function(e, t, n, s) {
                                  var o = (s = s || r.languages)[e],
                                      i = {};
                                  for (var a in o)
                                      if (o.hasOwnProperty(a)) {
                                          if (a == t)
                                              for (var l in n) n.hasOwnProperty(l) && (i[l] = n[l]);
                                          n.hasOwnProperty(a) || (i[a] = o[a])
                                      } var c = s[e];
                                  return s[e] = i, r.languages.DFS(r.languages, function(t, n) {
                                      n === c && t != e && (this[t] = i)
                                  }), i
                              },
                              DFS: function e(t, n, s, o) {
                                  o = o || {};
                                  var i = r.util.objId;
                                  for (var a in t)
                                      if (t.hasOwnProperty(a)) {
                                          n.call(t, a, t[a], s || a);
                                          var l = t[a],
                                              c = r.util.type(l);
                                          "Object" !== c || o[i(l)] ? "Array" !== c || o[i(l)] || (o[i(l)] = !0, e(l, n, a, o)) : (o[i(l)] = !0, e(l, n, null, o))
                                      }
                              }
                          },
                          plugins: {},
                          highlight: function(e, t, n) {
                              var o = {
                                  code: e,
                                  grammar: t,
                                  language: n
                              };
                              return r.hooks.run("before-tokenize", o), o.tokens = r.tokenize(o.code, o.grammar), r.hooks.run("after-tokenize", o), s.stringify(r.util.encode(o.tokens), o.language)
                          },
                          tokenize: function(e, t) {
                              var n = t.rest;
                              if (n) {
                                  for (var l in n) t[l] = n[l];
                                  delete t.rest
                              }
                              var c = new i;
                              return a(c, c.head, e),
                                  function e(t, n, i, l, c, u) {
                                      for (var p in i)
                                          if (i.hasOwnProperty(p) && i[p]) {
                                              var h = i[p];
                                              h = Array.isArray(h) ? h : [h];
                                              for (var d = 0; d < h.length; ++d) {
                                                  if (u && u.cause == p + "," + d) return;
                                                  var f = h[d],
                                                      m = f.inside,
                                                      g = !!f.lookbehind,
                                                      k = !!f.greedy,
                                                      y = f.alias;
                                                  if (k && !f.pattern.global) {
                                                      var b = f.pattern.toString().match(/[imsuy]*$/)[0];
                                                      f.pattern = RegExp(f.pattern.source, b + "g")
                                                  }
                                                  for (var _ = f.pattern || f, x = l.next, T = c; x !== n.tail && (!u || !(T >= u.reach)); T += x.value.length, x = x.next) {
                                                      var v, E = x.value;
                                                      if (n.length > t.length) return;
                                                      if (!(E instanceof s)) {
                                                          var w = 1;
                                                          if (k) {
                                                              if (!(v = o(_, T, t, g)) || v.index >= t.length) break;
                                                              var I = v.index,
                                                                  A = v.index + v[0].length,
                                                                  S = T;
                                                              for (S += x.value.length; I >= S;) S += (x = x.next).value.length;
                                                              if (S -= x.value.length, T = S, x.value instanceof s) continue;
                                                              for (var C = x; C !== n.tail && (S < A || "string" == typeof C.value); C = C.next) w++, S += C.value.length;
                                                              w--, E = t.slice(T, S), v.index -= T
                                                          } else if (!(v = o(_, 0, E, g))) continue;
                                                          var I = v.index,
                                                              R = v[0],
                                                              N = E.slice(0, I),
                                                              L = E.slice(I + R.length),
                                                              O = T + E.length;
                                                          u && O > u.reach && (u.reach = O);
                                                          var D = x.prev;
                                                          N && (D = a(n, D, N), T += N.length),
                                                              function(e, t, n) {
                                                                  for (var r = t.next, s = 0; s < n && r !== e.tail; s++) r = r.next;
                                                                  t.next = r, r.prev = t, e.length -= s
                                                              }(n, D, w);
                                                          var F = new s(p, m ? r.tokenize(R, m) : R, y, R);
                                                          if (x = a(n, D, F), L && a(n, x, L), w > 1) {
                                                              var P = {
                                                                  cause: p + "," + d,
                                                                  reach: O
                                                              };
                                                              e(t, n, i, x.prev, T, P), u && P.reach > u.reach && (u.reach = P.reach)
                                                          }
                                                      }
                                                  }
                                              }
                                          }
                                  }(e, c, t, c.head, 0),
                                  function(e) {
                                      for (var t = [], n = e.head.next; n !== e.tail;) t.push(n.value), n = n.next;
                                      return t
                                  }(c)
                          },
                          hooks: {
                              all: {},
                              add: function(e, t) {
                                  var n = r.hooks.all;
                                  n[e] = n[e] || [], n[e].push(t)
                              },
                              run: function(e, t) {
                                  var n = r.hooks.all[e];
                                  if (n && n.length)
                                      for (var s, o = 0; s = n[o++];) s(t)
                              }
                          },
                          Token: s
                      };

                  function s(e, t, n, r) {
                      this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length
                  }

                  function o(e, t, n, r) {
                      e.lastIndex = t;
                      var s = e.exec(n);
                      if (s && r && s[1]) {
                          var o = s[1].length;
                          s.index += o, s[0] = s[0].slice(o)
                      }
                      return s
                  }

                  function i() {
                      var e = {
                              value: null,
                              prev: null,
                              next: null
                          },
                          t = {
                              value: null,
                              prev: e,
                              next: null
                          };
                      e.next = t, this.head = e, this.tail = t, this.length = 0
                  }

                  function a(e, t, n) {
                      var r = t.next,
                          s = {
                              value: n,
                              prev: t,
                              next: r
                          };
                      return t.next = s, r.prev = s, e.length++, s
                  }
                  return s.stringify = function e(t, n) {
                      if ("string" == typeof t) return t;
                      if (Array.isArray(t)) {
                          var s = "";
                          return t.forEach(function(t) {
                              s += e(t, n)
                          }), s
                      }
                      var o = {
                              type: t.type,
                              content: e(t.content, n),
                              tag: "span",
                              classes: ["token", t.type],
                              attributes: {},
                              language: n
                          },
                          i = t.alias;
                      i && (Array.isArray(i) ? Array.prototype.push.apply(o.classes, i) : o.classes.push(i)), r.hooks.run("wrap", o);
                      var a = "";
                      for (var l in o.attributes) a += " " + l + '="' + (o.attributes[l] || "").replace(/"/g, "&quot;") + '"';
                      return "<" + o.tag + ' class="' + o.classes.join(" ") + '"' + a + ">" + o.content + "</" + o.tag + ">"
                  }, r
              }(),
              A = I;
          I.default = I, A.languages.markup = {
                  comment: {
                      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
                      greedy: !0
                  },
                  prolog: {
                      pattern: /<\?[\s\S]+?\?>/,
                      greedy: !0
                  },
                  doctype: {
                      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
                      greedy: !0,
                      inside: {
                          "internal-subset": {
                              pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                              lookbehind: !0,
                              greedy: !0,
                              inside: null
                          },
                          string: {
                              pattern: /"[^"]*"|'[^']*'/,
                              greedy: !0
                          },
                          punctuation: /^<!|>$|[[\]]/,
                          "doctype-tag": /^DOCTYPE/i,
                          name: /[^\s<>'"]+/
                      }
                  },
                  cdata: {
                      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                      greedy: !0
                  },
                  tag: {
                      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
                      greedy: !0,
                      inside: {
                          tag: {
                              pattern: /^<\/?[^\s>\/]+/,
                              inside: {
                                  punctuation: /^<\/?/,
                                  namespace: /^[^\s>\/:]+:/
                              }
                          },
                          "special-attr": [],
                          "attr-value": {
                              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                              inside: {
                                  punctuation: [{
                                      pattern: /^=/,
                                      alias: "attr-equals"
                                  }, /"|'/]
                              }
                          },
                          punctuation: /\/?>/,
                          "attr-name": {
                              pattern: /[^\s>\/]+/,
                              inside: {
                                  namespace: /^[^\s>\/:]+:/
                              }
                          }
                      }
                  },
                  entity: [{
                      pattern: /&[\da-z]{1,8};/i,
                      alias: "named-entity"
                  }, /&#x?[\da-f]{1,8};/i]
              }, A.languages.markup.tag.inside["attr-value"].inside.entity = A.languages.markup.entity, A.languages.markup.doctype.inside["internal-subset"].inside = A.languages.markup, A.hooks.add("wrap", function(e) {
                  "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
              }), Object.defineProperty(A.languages.markup.tag, "addInlined", {
                  value: function(e, t) {
                      var n = {};
                      n["language-" + t] = {
                          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                          lookbehind: !0,
                          inside: A.languages[t]
                      }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
                      var r = {
                          "included-cdata": {
                              pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                              inside: n
                          }
                      };
                      r["language-" + t] = {
                          pattern: /[\s\S]+/,
                          inside: A.languages[t]
                      };
                      var s = {};
                      s[e] = {
                          pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                              return e
                          }), "i"),
                          lookbehind: !0,
                          greedy: !0,
                          inside: r
                      }, A.languages.insertBefore("markup", "cdata", s)
                  }
              }), Object.defineProperty(A.languages.markup.tag, "addAttribute", {
                  value: function(e, t) {
                      A.languages.markup.tag.inside["special-attr"].push({
                          pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
                          lookbehind: !0,
                          inside: {
                              "attr-name": /^[^\s=]+/,
                              "attr-value": {
                                  pattern: /=[\s\S]+/,
                                  inside: {
                                      value: {
                                          pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                          lookbehind: !0,
                                          alias: [t, "language-" + t],
                                          inside: A.languages[t]
                                      },
                                      punctuation: [{
                                          pattern: /^=/,
                                          alias: "attr-equals"
                                      }, /"|'/]
                                  }
                              }
                          }
                      })
                  }
              }), A.languages.html = A.languages.markup, A.languages.mathml = A.languages.markup, A.languages.svg = A.languages.markup, A.languages.xml = A.languages.extend("markup", {}), A.languages.ssml = A.languages.xml, A.languages.atom = A.languages.xml, A.languages.rss = A.languages.xml,
              function(e) {
                  var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
                      n = {
                          pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
                          lookbehind: !0,
                          alias: "punctuation",
                          inside: null
                      },
                      r = {
                          bash: n,
                          environment: {
                              pattern: RegExp("\\$" + t),
                              alias: "constant"
                          },
                          variable: [{
                              pattern: /\$?\(\([\s\S]+?\)\)/,
                              greedy: !0,
                              inside: {
                                  variable: [{
                                      pattern: /(^\$\(\([\s\S]+)\)\)/,
                                      lookbehind: !0
                                  }, /^\$\(\(/],
                                  number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                                  operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                                  punctuation: /\(\(?|\)\)?|,|;/
                              }
                          }, {
                              pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                              greedy: !0,
                              inside: {
                                  variable: /^\$\(|^`|\)$|`$/
                              }
                          }, {
                              pattern: /\$\{[^}]+\}/,
                              greedy: !0,
                              inside: {
                                  operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                                  punctuation: /[\[\]]/,
                                  environment: {
                                      pattern: RegExp("(\\{)" + t),
                                      lookbehind: !0,
                                      alias: "constant"
                                  }
                              }
                          }, /\$(?:\w+|[#?*!@$])/],
                          entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
                      };
                  e.languages.bash = {
                      shebang: {
                          pattern: /^#!\s*\/.*/,
                          alias: "important"
                      },
                      comment: {
                          pattern: /(^|[^"{\\$])#.*/,
                          lookbehind: !0
                      },
                      "function-name": [{
                          pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                          lookbehind: !0,
                          alias: "function"
                      }, {
                          pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
                          alias: "function"
                      }],
                      "for-or-select": {
                          pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
                          alias: "variable",
                          lookbehind: !0
                      },
                      "assign-left": {
                          pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
                          inside: {
                              environment: {
                                  pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                                  lookbehind: !0,
                                  alias: "constant"
                              }
                          },
                          alias: "variable",
                          lookbehind: !0
                      },
                      string: [{
                          pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                          lookbehind: !0,
                          greedy: !0,
                          inside: r
                      }, {
                          pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                          lookbehind: !0,
                          greedy: !0,
                          inside: {
                              bash: n
                          }
                      }, {
                          pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                          lookbehind: !0,
                          greedy: !0,
                          inside: r
                      }, {
                          pattern: /(^|[^$\\])'[^']*'/,
                          lookbehind: !0,
                          greedy: !0
                      }, {
                          pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                          greedy: !0,
                          inside: {
                              entity: r.entity
                          }
                      }],
                      environment: {
                          pattern: RegExp("\\$?" + t),
                          alias: "constant"
                      },
                      variable: r.variable,
                      function: {
                          pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
                          lookbehind: !0
                      },
                      keyword: {
                          pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
                          lookbehind: !0
                      },
                      builtin: {
                          pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
                          lookbehind: !0,
                          alias: "class-name"
                      },
                      boolean: {
                          pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
                          lookbehind: !0
                      },
                      "file-descriptor": {
                          pattern: /\B&\d\b/,
                          alias: "important"
                      },
                      operator: {
                          pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
                          inside: {
                              "file-descriptor": {
                                  pattern: /^\d/,
                                  alias: "important"
                              }
                          }
                      },
                      punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
                      number: {
                          pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
                          lookbehind: !0
                      }
                  }, n.inside = e.languages.bash;
                  for (var s = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], o = r.variable[1].inside, i = 0; i < s.length; i++) o[s[i]] = e.languages.bash[s[i]];
                  e.languages.shell = e.languages.bash
              }(A), A.languages.clike = {
                  comment: [{
                      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
                      lookbehind: !0,
                      greedy: !0
                  }, {
                      pattern: /(^|[^\\:])\/\/.*/,
                      lookbehind: !0,
                      greedy: !0
                  }],
                  string: {
                      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                      greedy: !0
                  },
                  "class-name": {
                      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
                      lookbehind: !0,
                      inside: {
                          punctuation: /[.\\]/
                      }
                  },
                  keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
                  boolean: /\b(?:false|true)\b/,
                  function: /\b\w+(?=\()/,
                  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
                  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
                  punctuation: /[{}[\];(),.:]/
              }, A.languages.c = A.languages.extend("clike", {
                  comment: {
                      pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
                      greedy: !0
                  },
                  string: {
                      pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
                      greedy: !0
                  },
                  "class-name": {
                      pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
                      lookbehind: !0
                  },
                  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
                  function: /\b[a-z_]\w*(?=\s*\()/i,
                  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
                  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
              }), A.languages.insertBefore("c", "string", {
                  char: {
                      pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
                      greedy: !0
                  }
              }), A.languages.insertBefore("c", "string", {
                  macro: {
                      pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
                      lookbehind: !0,
                      greedy: !0,
                      alias: "property",
                      inside: {
                          string: [{
                              pattern: /^(#\s*include\s*)<[^>]+>/,
                              lookbehind: !0
                          }, A.languages.c.string],
                          char: A.languages.c.char,
                          comment: A.languages.c.comment,
                          "macro-name": [{
                              pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
                              lookbehind: !0
                          }, {
                              pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                              lookbehind: !0,
                              alias: "function"
                          }],
                          directive: {
                              pattern: /^(#\s*)[a-z]+/,
                              lookbehind: !0,
                              alias: "keyword"
                          },
                          "directive-hash": /^#/,
                          punctuation: /##|\\(?=[\r\n])/,
                          expression: {
                              pattern: /\S[\s\S]*/,
                              inside: A.languages.c
                          }
                      }
                  }
              }), A.languages.insertBefore("c", "function", {
                  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
              }), delete A.languages.c.boolean, n = A, r = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, s = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
                  return r.source
              }), n.languages.cpp = n.languages.extend("c", {
                  "class-name": [{
                      pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
                          return r.source
                      })),
                      lookbehind: !0
                  }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
                  keyword: r,
                  number: {
                      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
                      greedy: !0
                  },
                  operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
                  boolean: /\b(?:false|true)\b/
              }), n.languages.insertBefore("cpp", "string", {
                  module: {
                      pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
                          return s
                      }) + ")"),
                      lookbehind: !0,
                      greedy: !0,
                      inside: {
                          string: /^[<"][\s\S]+/,
                          operator: /:/,
                          punctuation: /\./
                      }
                  },
                  "raw-string": {
                      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                      alias: "string",
                      greedy: !0
                  }
              }), n.languages.insertBefore("cpp", "keyword", {
                  "generic-function": {
                      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                      inside: {
                          function: /^\w+/,
                          generic: {
                              pattern: /<[\s\S]+/,
                              alias: "class-name",
                              inside: n.languages.cpp
                          }
                      }
                  }
              }), n.languages.insertBefore("cpp", "operator", {
                  "double-colon": {
                      pattern: /::/,
                      alias: "punctuation"
                  }
              }), n.languages.insertBefore("cpp", "class-name", {
                  "base-clause": {
                      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                      lookbehind: !0,
                      greedy: !0,
                      inside: n.languages.extend("cpp", {})
                  }
              }), n.languages.insertBefore("inside", "double-colon", {
                  "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
              }, n.languages.cpp["base-clause"]), i = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/, (o = A).languages.css = {
                  comment: /\/\*[\s\S]*?\*\//,
                  atrule: {
                      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
                      inside: {
                          rule: /^@[\w-]+/,
                          "selector-function-argument": {
                              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                              lookbehind: !0,
                              alias: "selector"
                          },
                          keyword: {
                              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                              lookbehind: !0
                          }
                      }
                  },
                  url: {
                      pattern: RegExp("\\burl\\((?:" + i.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                      greedy: !0,
                      inside: {
                          function: /^url/i,
                          punctuation: /^\(|\)$/,
                          string: {
                              pattern: RegExp("^" + i.source + "$"),
                              alias: "url"
                          }
                      }
                  },
                  selector: {
                      pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + i.source + ")*(?=\\s*\\{)"),
                      lookbehind: !0
                  },
                  string: {
                      pattern: i,
                      greedy: !0
                  },
                  property: {
                      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                      lookbehind: !0
                  },
                  important: /!important\b/i,
                  function: {
                      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                      lookbehind: !0
                  },
                  punctuation: /[(){};:,]/
              }, o.languages.css.atrule.inside.rest = o.languages.css, (a = o.languages.markup) && (a.tag.addInlined("style", "css"), a.tag.addAttribute("style", "css")),
              function(e) {
                  var t, n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
                  e.languages.css.selector = {
                      pattern: e.languages.css.selector.pattern,
                      lookbehind: !0,
                      inside: t = {
                          "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
                          "pseudo-class": /:[-\w]+/,
                          class: /\.[-\w]+/,
                          id: /#[-\w]+/,
                          attribute: {
                              pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
                              greedy: !0,
                              inside: {
                                  punctuation: /^\[|\]$/,
                                  "case-sensitivity": {
                                      pattern: /(\s)[si]$/i,
                                      lookbehind: !0,
                                      alias: "keyword"
                                  },
                                  namespace: {
                                      pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                                      lookbehind: !0,
                                      inside: {
                                          punctuation: /\|$/
                                      }
                                  },
                                  "attr-name": {
                                      pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                                      lookbehind: !0
                                  },
                                  "attr-value": [n, {
                                      pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                                      lookbehind: !0
                                  }],
                                  operator: /[|~*^$]?=/
                              }
                          },
                          "n-th": [{
                              pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                              lookbehind: !0,
                              inside: {
                                  number: /[\dn]+/,
                                  operator: /[+-]/
                              }
                          }, {
                              pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
                              lookbehind: !0
                          }],
                          combinator: />|\+|~|\|\|/,
                          punctuation: /[(),]/
                      }
                  }, e.languages.css.atrule.inside["selector-function-argument"].inside = t, e.languages.insertBefore("css", "property", {
                      variable: {
                          pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                          lookbehind: !0
                      }
                  });
                  var r = {
                          pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
                          lookbehind: !0
                      },
                      s = {
                          pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
                          lookbehind: !0
                      };
                  e.languages.insertBefore("css", "function", {
                      operator: {
                          pattern: /(\s)[+\-*\/](?=\s)/,
                          lookbehind: !0
                      },
                      hexcode: {
                          pattern: /\B#[\da-f]{3,8}\b/i,
                          alias: "color"
                      },
                      color: [{
                          pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                          lookbehind: !0
                      }, {
                          pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                          inside: {
                              unit: r,
                              number: s,
                              function: /[\w-]+(?=\()/,
                              punctuation: /[(),]/
                          }
                      }],
                      entity: /\\[\da-f]{1,8}/i,
                      unit: r,
                      number: s
                  })
              }(A), A.languages.javascript = A.languages.extend("clike", {
                  "class-name": [A.languages.clike["class-name"], {
                      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
                      lookbehind: !0
                  }],
                  keyword: [{
                      pattern: /((?:^|\})\s*)catch\b/,
                      lookbehind: !0
                  }, {
                      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
                      lookbehind: !0
                  }],
                  function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
                  number: {
                      pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|") + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
                      lookbehind: !0
                  },
                  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
              }), A.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, A.languages.insertBefore("javascript", "keyword", {
                  regex: {
                      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
                      lookbehind: !0,
                      greedy: !0,
                      inside: {
                          "regex-source": {
                              pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                              lookbehind: !0,
                              alias: "language-regex",
                              inside: A.languages.regex
                          },
                          "regex-delimiter": /^\/|\/$/,
                          "regex-flags": /^[a-z]+$/
                      }
                  },
                  "function-variable": {
                      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
                      alias: "function"
                  },
                  parameter: [{
                      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                      lookbehind: !0,
                      inside: A.languages.javascript
                  }, {
                      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                      lookbehind: !0,
                      inside: A.languages.javascript
                  }, {
                      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                      lookbehind: !0,
                      inside: A.languages.javascript
                  }, {
                      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                      lookbehind: !0,
                      inside: A.languages.javascript
                  }],
                  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
              }), A.languages.insertBefore("javascript", "string", {
                  hashbang: {
                      pattern: /^#!.*/,
                      greedy: !0,
                      alias: "comment"
                  },
                  "template-string": {
                      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
                      greedy: !0,
                      inside: {
                          "template-punctuation": {
                              pattern: /^`|`$/,
                              alias: "string"
                          },
                          interpolation: {
                              pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                              lookbehind: !0,
                              inside: {
                                  "interpolation-punctuation": {
                                      pattern: /^\$\{|\}$/,
                                      alias: "punctuation"
                                  },
                                  rest: A.languages.javascript
                              }
                          },
                          string: /[\s\S]+/
                      }
                  },
                  "string-property": {
                      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
                      lookbehind: !0,
                      greedy: !0,
                      alias: "property"
                  }
              }), A.languages.insertBefore("javascript", "operator", {
                  "literal-property": {
                      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
                      lookbehind: !0,
                      alias: "property"
                  }
              }), A.languages.markup && (A.languages.markup.tag.addInlined("script", "javascript"), A.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), A.languages.js = A.languages.javascript, c = /#(?!\{).+/, u = {
                  pattern: /#\{[^}]+\}/,
                  alias: "variable"
              }, (l = A).languages.coffeescript = l.languages.extend("javascript", {
                  comment: c,
                  string: [{
                      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                      greedy: !0
                  }, {
                      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                      greedy: !0,
                      inside: {
                          interpolation: u
                      }
                  }],
                  keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
                  "class-member": {
                      pattern: /@(?!\d)\w+/,
                      alias: "variable"
                  }
              }), l.languages.insertBefore("coffeescript", "comment", {
                  "multiline-comment": {
                      pattern: /###[\s\S]+?###/,
                      alias: "comment"
                  },
                  "block-regex": {
                      pattern: /\/{3}[\s\S]*?\/{3}/,
                      alias: "regex",
                      inside: {
                          comment: c,
                          interpolation: u
                      }
                  }
              }), l.languages.insertBefore("coffeescript", "string", {
                  "inline-javascript": {
                      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                      inside: {
                          delimiter: {
                              pattern: /^`|`$/,
                              alias: "punctuation"
                          },
                          script: {
                              pattern: /[\s\S]+/,
                              alias: "language-javascript",
                              inside: l.languages.javascript
                          }
                      }
                  },
                  "multiline-string": [{
                      pattern: /'''[\s\S]*?'''/,
                      greedy: !0,
                      alias: "string"
                  }, {
                      pattern: /"""[\s\S]*?"""/,
                      greedy: !0,
                      alias: "string",
                      inside: {
                          interpolation: u
                      }
                  }]
              }), l.languages.insertBefore("coffeescript", "keyword", {
                  property: /(?!\d)\w+(?=\s*:(?!:))/
              }), delete l.languages.coffeescript["template-string"], l.languages.coffee = l.languages.coffeescript,
              function(e) {
                  var t = /[*&][^\s[\]{},]+/,
                      n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
                      r = "(?:" + n.source + "(?:[ 	]+" + t.source + ")?|" + t.source + "(?:[ 	]+" + n.source + ")?)",
                      s = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
                          return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source
                      }),
                      o = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;

                  function i(e, t) {
                      return t = (t || "").replace(/m/g, "") + "m", RegExp(/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
                          return r
                      }).replace(/<<value>>/g, function() {
                          return e
                      }), t)
                  }
                  e.languages.yaml = {
                      scalar: {
                          pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
                              return r
                          })),
                          lookbehind: !0,
                          alias: "string"
                      },
                      comment: /#.*/,
                      key: {
                          pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
                              return r
                          }).replace(/<<key>>/g, function() {
                              return "(?:" + s + "|" + o + ")"
                          })),
                          lookbehind: !0,
                          greedy: !0,
                          alias: "atrule"
                      },
                      directive: {
                          pattern: /(^[ \t]*)%.+/m,
                          lookbehind: !0,
                          alias: "important"
                      },
                      datetime: {
                          pattern: i(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
                          lookbehind: !0,
                          alias: "number"
                      },
                      boolean: {
                          pattern: i(/false|true/.source, "i"),
                          lookbehind: !0,
                          alias: "important"
                      },
                      null: {
                          pattern: i(/null|~/.source, "i"),
                          lookbehind: !0,
                          alias: "important"
                      },
                      string: {
                          pattern: i(o),
                          lookbehind: !0,
                          greedy: !0
                      },
                      number: {
                          pattern: i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
                          lookbehind: !0
                      },
                      tag: n,
                      important: t,
                      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
                  }, e.languages.yml = e.languages.yaml
              }(A),
              function(e) {
                  var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;

                  function n(e) {
                      return e = e.replace(/<inner>/g, function() {
                          return t
                      }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
                  }
                  var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
                      s = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
                          return r
                      }),
                      o = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
                  e.languages.markdown = e.languages.extend("markup", {}), e.languages.insertBefore("markdown", "prolog", {
                      "front-matter-block": {
                          pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                          lookbehind: !0,
                          greedy: !0,
                          inside: {
                              punctuation: /^---|---$/,
                              "front-matter": {
                                  pattern: /\S+(?:\s+\S+)*/,
                                  alias: ["yaml", "language-yaml"],
                                  inside: e.languages.yaml
                              }
                          }
                      },
                      blockquote: {
                          pattern: /^>(?:[\t ]*>)*/m,
                          alias: "punctuation"
                      },
                      table: {
                          pattern: RegExp("^" + s + o + "(?:" + s + ")*", "m"),
                          inside: {
                              "table-data-rows": {
                                  pattern: RegExp("^(" + s + o + ")(?:" + s + ")*$"),
                                  lookbehind: !0,
                                  inside: {
                                      "table-data": {
                                          pattern: RegExp(r),
                                          inside: e.languages.markdown
                                      },
                                      punctuation: /\|/
                                  }
                              },
                              "table-line": {
                                  pattern: RegExp("^(" + s + ")" + o + "$"),
                                  lookbehind: !0,
                                  inside: {
                                      punctuation: /\||:?-{3,}:?/
                                  }
                              },
                              "table-header-row": {
                                  pattern: RegExp("^" + s + "$"),
                                  inside: {
                                      "table-header": {
                                          pattern: RegExp(r),
                                          alias: "important",
                                          inside: e.languages.markdown
                                      },
                                      punctuation: /\|/
                                  }
                              }
                          }
                      },
                      code: [{
                          pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                          lookbehind: !0,
                          alias: "keyword"
                      }, {
                          pattern: /^```[\s\S]*?^```$/m,
                          greedy: !0,
                          inside: {
                              "code-block": {
                                  pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                                  lookbehind: !0
                              },
                              "code-language": {
                                  pattern: /^(```).+/,
                                  lookbehind: !0
                              },
                              punctuation: /```/
                          }
                      }],
                      title: [{
                          pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                          alias: "important",
                          inside: {
                              punctuation: /==+$|--+$/
                          }
                      }, {
                          pattern: /(^\s*)#.+/m,
                          lookbehind: !0,
                          alias: "important",
                          inside: {
                              punctuation: /^#+|#+$/
                          }
                      }],
                      hr: {
                          pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                          lookbehind: !0,
                          alias: "punctuation"
                      },
                      list: {
                          pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                          lookbehind: !0,
                          alias: "punctuation"
                      },
                      "url-reference": {
                          pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                          inside: {
                              variable: {
                                  pattern: /^(!?\[)[^\]]+/,
                                  lookbehind: !0
                              },
                              string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                              punctuation: /^[\[\]!:]|[<>]/
                          },
                          alias: "url"
                      },
                      bold: {
                          pattern: n(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
                          lookbehind: !0,
                          greedy: !0,
                          inside: {
                              content: {
                                  pattern: /(^..)[\s\S]+(?=..$)/,
                                  lookbehind: !0,
                                  inside: {}
                              },
                              punctuation: /\*\*|__/
                          }
                      },
                      italic: {
                          pattern: n(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
                          lookbehind: !0,
                          greedy: !0,
                          inside: {
                              content: {
                                  pattern: /(^.)[\s\S]+(?=.$)/,
                                  lookbehind: !0,
                                  inside: {}
                              },
                              punctuation: /[*_]/
                          }
                      },
                      strike: {
                          pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
                          lookbehind: !0,
                          greedy: !0,
                          inside: {
                              content: {
                                  pattern: /(^~~?)[\s\S]+(?=\1$)/,
                                  lookbehind: !0,
                                  inside: {}
                              },
                              punctuation: /~~?/
                          }
                      },
                      "code-snippet": {
                          pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                          lookbehind: !0,
                          greedy: !0,
                          alias: ["code", "keyword"]
                      },
                      url: {
                          pattern: n(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
                          lookbehind: !0,
                          greedy: !0,
                          inside: {
                              operator: /^!/,
                              content: {
                                  pattern: /(^\[)[^\]]+(?=\])/,
                                  lookbehind: !0,
                                  inside: {}
                              },
                              variable: {
                                  pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                                  lookbehind: !0
                              },
                              url: {
                                  pattern: /(^\]\()[^\s)]+/,
                                  lookbehind: !0
                              },
                              string: {
                                  pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                                  lookbehind: !0
                              }
                          }
                      }
                  }), ["url", "bold", "italic", "strike"].forEach(function(t) {
                      ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(n) {
                          t !== n && (e.languages.markdown[t].inside.content.inside[n] = e.languages.markdown[n])
                      })
                  }), e.hooks.add("after-tokenize", function(e) {
                      ("markdown" === e.language || "md" === e.language) && function e(t) {
                          if (t && "string" != typeof t)
                              for (var n = 0, r = t.length; n < r; n++) {
                                  var s = t[n];
                                  if ("code" !== s.type) {
                                      e(s.content);
                                      continue
                                  }
                                  var o = s.content[1],
                                      i = s.content[3];
                                  if (o && i && "code-language" === o.type && "code-block" === i.type && "string" == typeof o.content) {
                                      var a = o.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"),
                                          l = "language-" + (a = (/[a-z][\w-]*/i.exec(a) || [""])[0].toLowerCase());
                                      i.alias ? "string" == typeof i.alias ? i.alias = [i.alias, l] : i.alias.push(l) : i.alias = [l]
                                  }
                              }
                      }(e.tokens)
                  }), e.hooks.add("wrap", function(t) {
                      if ("code-block" === t.type) {
                          for (var n, r = "", s = 0, o = t.classes.length; s < o; s++) {
                              var c = t.classes[s],
                                  u = /language-(.+)/.exec(c);
                              if (u) {
                                  r = u[1];
                                  break
                              }
                          }
                          var p = e.languages[r];
                          if (p) t.content = e.highlight(t.content.replace(i, "").replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(e, t) {
                              return "#" === (t = t.toLowerCase())[0] ? l("x" === t[1] ? parseInt(t.slice(2), 16) : Number(t.slice(1))) : a[t] || e
                          }), p, r);
                          else if (r && "none" !== r && e.plugins.autoloader) {
                              var h = "md-" + new Date().valueOf() + "-" + Math.floor(1e16 * Math.random());
                              t.attributes.id = h, e.plugins.autoloader.loadLanguages(r, function() {
                                  var t = document.getElementById(h);
                                  t && (t.innerHTML = e.highlight(t.textContent, e.languages[r], r))
                              })
                          }
                      }
                  });
                  var i = RegExp(e.languages.markup.tag.pattern.source, "gi"),
                      a = {
                          amp: "&",
                          lt: "<",
                          gt: ">",
                          quot: '"'
                      },
                      l = String.fromCodePoint || String.fromCharCode;
                  e.languages.md = e.languages.markdown
              }(A), A.languages.graphql = {
                  comment: /#.*/,
                  description: {
                      pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
                      greedy: !0,
                      alias: "string",
                      inside: {
                          "language-markdown": {
                              pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                              lookbehind: !0,
                              inside: A.languages.markdown
                          }
                      }
                  },
                  string: {
                      pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
                      greedy: !0
                  },
                  number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
                  boolean: /\b(?:false|true)\b/,
                  variable: /\$[a-z_]\w*/i,
                  directive: {
                      pattern: /@[a-z_]\w*/i,
                      alias: "function"
                  },
                  "attr-name": {
                      pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
                      greedy: !0
                  },
                  "atom-input": {
                      pattern: /\b[A-Z]\w*Input\b/,
                      alias: "class-name"
                  },
                  scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
                  constant: /\b[A-Z][A-Z_\d]*\b/,
                  "class-name": {
                      pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
                      lookbehind: !0
                  },
                  fragment: {
                      pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
                      lookbehind: !0,
                      alias: "function"
                  },
                  "definition-mutation": {
                      pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
                      lookbehind: !0,
                      alias: "function"
                  },
                  "definition-query": {
                      pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
                      lookbehind: !0,
                      alias: "function"
                  },
                  keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
                  operator: /[!=|&]|\.{3}/,
                  "property-query": /\w+(?=\s*\()/,
                  object: /\w+(?=\s*\{)/,
                  punctuation: /[!(){}\[\]:=,]/,
                  property: /\w+/
              }, A.hooks.add("after-tokenize", function(e) {
                  if ("graphql" === e.language)
                      for (var t = e.tokens.filter(function(e) {
                              return "string" != typeof e && "comment" !== e.type && "scalar" !== e.type
                          }), n = 0; n < t.length;) {
                          var r = t[n++];
                          if ("keyword" === r.type && "mutation" === r.content) {
                              var s = [];
                              if (u(["definition-mutation", "punctuation"]) && "(" === t[n + 1].content) {
                                  n += 2;
                                  var o = p(/^\($/, /^\)$/);
                                  if (-1 === o) continue;
                                  for (; n < o; n++) {
                                      var i = t[n + 0];
                                      "variable" === i.type && (h(i, "variable-input"), s.push(i.content))
                                  }
                                  n = o + 1
                              }
                              if (u(["punctuation", "property-query"]) && "{" === t[n + 0].content && (h(t[++n + 0], "property-mutation"), s.length > 0)) {
                                  var a = p(/^\{$/, /^\}$/);
                                  if (-1 === a) continue;
                                  for (var l = n; l < a; l++) {
                                      var c = t[l];
                                      "variable" === c.type && s.indexOf(c.content) >= 0 && h(c, "variable-input")
                                  }
                              }
                          }
                      }

                  function u(e, r) {
                      r = r || 0;
                      for (var s = 0; s < e.length; s++) {
                          var o = t[n + (s + r)];
                          if (!o || o.type !== e[s]) return !1
                      }
                      return !0
                  }

                  function p(e, r) {
                      for (var s = 1, o = n; o < t.length; o++) {
                          var i = t[o],
                              a = i.content;
                          if ("punctuation" === i.type && "string" == typeof a) {
                              if (e.test(a)) s++;
                              else if (r.test(a) && 0 == --s) return o
                          }
                      }
                      return -1
                  }

                  function h(e, t) {
                      var n = e.alias;
                      n ? Array.isArray(n) || (e.alias = n = [n]) : e.alias = n = [], n.push(t)
                  }
              }), A.languages.sql = {
                  comment: {
                      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
                      lookbehind: !0
                  },
                  variable: [{
                      pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
                      greedy: !0
                  }, /@[\w.$]+/],
                  string: {
                      pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
                      greedy: !0,
                      lookbehind: !0
                  },
                  identifier: {
                      pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
                      greedy: !0,
                      lookbehind: !0,
                      inside: {
                          punctuation: /^`|`$/
                      }
                  },
                  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
                  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
                  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
                  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
                  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
                  punctuation: /[;[\]()`,.]/
              },
              function(e) {
                  var t = e.languages.javascript["template-string"],
                      n = t.pattern.source,
                      r = t.inside.interpolation,
                      s = r.inside["interpolation-punctuation"],
                      o = r.pattern.source;

                  function i(t, r) {
                      if (e.languages[t]) return {
                          pattern: RegExp("((?:" + r + ")\\s*)" + n),
                          lookbehind: !0,
                          greedy: !0,
                          inside: {
                              "template-punctuation": {
                                  pattern: /^`|`$/,
                                  alias: "string"
                              },
                              "embedded-code": {
                                  pattern: /[\s\S]+/,
                                  alias: t
                              }
                          }
                      }
                  }

                  function a(t, n, r) {
                      var s = {
                          code: t,
                          grammar: n,
                          language: r
                      };
                      return e.hooks.run("before-tokenize", s), s.tokens = e.tokenize(s.code, s.grammar), e.hooks.run("after-tokenize", s), s.tokens
                  }
                  e.languages.javascript["template-string"] = [i("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), i("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), i("svg", /\bsvg/.source), i("markdown", /\b(?:markdown|md)/.source), i("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), i("sql", /\bsql/.source), t].filter(Boolean);
                  var l = {
                      javascript: !0,
                      js: !0,
                      typescript: !0,
                      ts: !0,
                      jsx: !0,
                      tsx: !0
                  };
                  e.hooks.add("after-tokenize", function(t) {
                      t.language in l && function t(n) {
                          for (var i = 0, l = n.length; i < l; i++) {
                              var c = n[i];
                              if ("string" != typeof c) {
                                  var u = c.content;
                                  if (!Array.isArray(u)) {
                                      "string" != typeof u && t([u]);
                                      continue
                                  }
                                  if ("template-string" === c.type) {
                                      var p = u[1];
                                      if (3 === u.length && "string" != typeof p && "embedded-code" === p.type) {
                                          var h = function e(t) {
                                                  return "string" == typeof t ? t : Array.isArray(t) ? t.map(e).join("") : e(t.content)
                                              }(p),
                                              d = p.alias,
                                              f = Array.isArray(d) ? d[0] : d,
                                              m = e.languages[f];
                                          if (!m) continue;
                                          u[1] = function(t, n, i) {
                                              var l = e.tokenize(t, {
                                                      interpolation: {
                                                          pattern: RegExp(o),
                                                          lookbehind: !0
                                                      }
                                                  }),
                                                  c = 0,
                                                  u = {},
                                                  p = a(l.map(function(e) {
                                                      if ("string" == typeof e) return e;
                                                      for (var n, r, s = e.content; - 1 !== t.indexOf((n = c++, r = "___" + i.toUpperCase() + "_" + n + "___")););
                                                      return u[r] = s, r
                                                  }).join(""), n, i),
                                                  h = Object.keys(u);
                                              return c = 0,
                                                  function t(n) {
                                                      for (var o = 0; o < n.length; o++) {
                                                          if (c >= h.length) return;
                                                          var i = n[o];
                                                          if ("string" == typeof i || "string" == typeof i.content) {
                                                              var l = h[c],
                                                                  p = "string" == typeof i ? i : i.content,
                                                                  d = p.indexOf(l);
                                                              if (-1 !== d) {
                                                                  ++c;
                                                                  var f = p.substring(0, d),
                                                                      m = function(t) {
                                                                          var n = {};
                                                                          n["interpolation-punctuation"] = s;
                                                                          var o = e.tokenize(t, n);
                                                                          if (3 === o.length) {
                                                                              var i = [1, 1];
                                                                              i.push.apply(i, a(o[1], e.languages.javascript, "javascript")), o.splice.apply(o, i)
                                                                          }
                                                                          return new e.Token("interpolation", o, r.alias, t)
                                                                      }(u[l]),
                                                                      g = p.substring(d + l.length),
                                                                      k = [];
                                                                  if (f && k.push(f), k.push(m), g) {
                                                                      var y = [g];
                                                                      t(y), k.push.apply(k, y)
                                                                  }
                                                                  "string" == typeof i ? (n.splice.apply(n, [o, 1].concat(k)), o += k.length - 1) : i.content = k
                                                              }
                                                          } else {
                                                              var b = i.content;
                                                              Array.isArray(b) ? t(b) : t([b])
                                                          }
                                                      }
                                                  }(p), new e.Token(i, p, "language-" + i, t)
                                          }(h, m, f)
                                      }
                                  } else t(u)
                              }
                          }
                      }(t.tokens)
                  })
              }(A), (p = A).languages.typescript = p.languages.extend("javascript", {
                  "class-name": {
                      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
                      lookbehind: !0,
                      greedy: !0,
                      inside: null
                  },
                  builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
              }), p.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete p.languages.typescript.parameter, delete p.languages.typescript["literal-property"], h = p.languages.extend("typescript", {}), delete h["class-name"], p.languages.typescript["class-name"].inside = h, p.languages.insertBefore("typescript", "function", {
                  decorator: {
                      pattern: /@[$\w\xA0-\uFFFF]+/,
                      inside: {
                          at: {
                              pattern: /^@/,
                              alias: "operator"
                          },
                          function: /^[\s\S]+/
                      }
                  },
                  "generic-function": {
                      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                      greedy: !0,
                      inside: {
                          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                          generic: {
                              pattern: /<[\s\S]+/,
                              alias: "class-name",
                              inside: h
                          }
                      }
                  }
              }), p.languages.ts = p.languages.typescript,
              function(e) {
                  function t(e, t) {
                      return RegExp(e.replace(/<ID>/g, function() {
                          return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source
                      }), t)
                  }
                  e.languages.insertBefore("javascript", "function-variable", {
                      "method-variable": {
                          pattern: RegExp("(\\.\\s*)" + e.languages.javascript["function-variable"].pattern.source),
                          lookbehind: !0,
                          alias: ["function-variable", "method", "function", "property-access"]
                      }
                  }), e.languages.insertBefore("javascript", "function", {
                      method: {
                          pattern: RegExp("(\\.\\s*)" + e.languages.javascript.function.source),
                          lookbehind: !0,
                          alias: ["function", "property-access"]
                      }
                  }), e.languages.insertBefore("javascript", "constant", {
                      "known-class-name": [{
                          pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                          alias: "class-name"
                      }, {
                          pattern: /\b(?:[A-Z]\w*)Error\b/,
                          alias: "class-name"
                      }]
                  }), e.languages.insertBefore("javascript", "keyword", {
                      imports: {
                          pattern: t(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
                          lookbehind: !0,
                          inside: e.languages.javascript
                      },
                      exports: {
                          pattern: t(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
                          lookbehind: !0,
                          inside: e.languages.javascript
                      }
                  }), e.languages.javascript.keyword.unshift({
                      pattern: /\b(?:as|default|export|from|import)\b/,
                      alias: "module"
                  }, {
                      pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                      alias: "control-flow"
                  }, {
                      pattern: /\bnull\b/,
                      alias: ["null", "nil"]
                  }, {
                      pattern: /\bundefined\b/,
                      alias: "nil"
                  }), e.languages.insertBefore("javascript", "operator", {
                      spread: {
                          pattern: /\.{3}/,
                          alias: "operator"
                      },
                      arrow: {
                          pattern: /=>/,
                          alias: "operator"
                      }
                  }), e.languages.insertBefore("javascript", "punctuation", {
                      "property-access": {
                          pattern: t(/(\.\s*)#?<ID>/.source),
                          lookbehind: !0
                      },
                      "maybe-class-name": {
                          pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                          lookbehind: !0
                      },
                      dom: {
                          pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                          alias: "variable"
                      },
                      console: {
                          pattern: /\bconsole(?=\s*\.)/,
                          alias: "class-name"
                      }
                  });
                  for (var n = ["function", "function-variable", "method", "method-variable", "property-access"], r = 0; r < n.length; r++) {
                      var s = n[r],
                          o = e.languages.javascript[s];
                      "RegExp" === e.util.type(o) && (o = e.languages.javascript[s] = {
                          pattern: o
                      });
                      var i = o.inside || {};
                      o.inside = i, i["maybe-class-name"] = /^[A-Z][\s\S]*/
                  }
              }(A),
              function(e) {
                  var t = e.util.clone(e.languages.javascript),
                      n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
                      r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
                      s = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;

                  function o(e, t) {
                      return RegExp(e = e.replace(/<S>/g, function() {
                          return n
                      }).replace(/<BRACES>/g, function() {
                          return r
                      }).replace(/<SPREAD>/g, function() {
                          return s
                      }), t)
                  }
                  s = o(s).source, e.languages.jsx = e.languages.extend("markup", t), e.languages.jsx.tag.pattern = o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e.languages.jsx.tag.inside.comment = t.comment, e.languages.insertBefore("inside", "attr-name", {
                      spread: {
                          pattern: o(/<SPREAD>/.source),
                          inside: e.languages.jsx
                      }
                  }, e.languages.jsx.tag), e.languages.insertBefore("inside", "special-attr", {
                      script: {
                          pattern: o(/=<BRACES>/.source),
                          alias: "language-javascript",
                          inside: {
                              "script-punctuation": {
                                  pattern: /^=(?=\{)/,
                                  alias: "punctuation"
                              },
                              rest: e.languages.jsx
                          }
                      }
                  }, e.languages.jsx.tag);
                  var i = function(e) {
                          return e ? "string" == typeof e ? e : "string" == typeof e.content ? e.content : e.content.map(i).join("") : ""
                      },
                      a = function(t) {
                          for (var n = [], r = 0; r < t.length; r++) {
                              var s = t[r],
                                  o = !1;
                              if ("string" != typeof s && ("tag" === s.type && s.content[0] && "tag" === s.content[0].type ? "</" === s.content[0].content[0].content ? n.length > 0 && n[n.length - 1].tagName === i(s.content[0].content[1]) && n.pop() : "/>" === s.content[s.content.length - 1].content || n.push({
                                      tagName: i(s.content[0].content[1]),
                                      openedBraces: 0
                                  }) : n.length > 0 && "punctuation" === s.type && "{" === s.content ? n[n.length - 1].openedBraces++ : n.length > 0 && n[n.length - 1].openedBraces > 0 && "punctuation" === s.type && "}" === s.content ? n[n.length - 1].openedBraces-- : o = !0), (o || "string" == typeof s) && n.length > 0 && 0 === n[n.length - 1].openedBraces) {
                                  var l = i(s);
                                  r < t.length - 1 && ("string" == typeof t[r + 1] || "plain-text" === t[r + 1].type) && (l += i(t[r + 1]), t.splice(r + 1, 1)), r > 0 && ("string" == typeof t[r - 1] || "plain-text" === t[r - 1].type) && (l = i(t[r - 1]) + l, t.splice(r - 1, 1), r--), t[r] = new e.Token("plain-text", l, null, l)
                              }
                              s.content && "string" != typeof s.content && a(s.content)
                          }
                      };
                  e.hooks.add("after-tokenize", function(e) {
                      ("jsx" === e.language || "tsx" === e.language) && a(e.tokens)
                  })
              }(A), (d = A).languages.diff = {
                  coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m]
              }, Object.keys(f = {
                  "deleted-sign": "-",
                  "deleted-arrow": "<",
                  "inserted-sign": "+",
                  "inserted-arrow": ">",
                  unchanged: " ",
                  diff: "!"
              }).forEach(function(e) {
                  var t = f[e],
                      n = [];
                  /^\w+$/.test(e) || n.push(/\w+/.exec(e)[0]), "diff" === e && n.push("bold"), d.languages.diff[e] = {
                      pattern: RegExp("^(?:[" + t + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"),
                      alias: n,
                      inside: {
                          line: {
                              pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                              lookbehind: !0
                          },
                          prefix: {
                              pattern: /[\s\S]/,
                              alias: /\w+/.exec(e)[0]
                          }
                      }
                  }
              }), Object.defineProperty(d.languages.diff, "PREFIXES", {
                  value: f
              }), A.languages.git = {
                  comment: /^#.*/m,
                  deleted: /^[-–].*/m,
                  inserted: /^\+.*/m,
                  string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
                  command: {
                      pattern: /^.*\$ git .*$/m,
                      inside: {
                          parameter: /\s--?\w+/
                      }
                  },
                  coord: /^@@.*@@$/m,
                  "commit-sha1": /^commit \w{40}$/m
              }, A.languages.go = A.languages.extend("clike", {
                  string: {
                      pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
                      lookbehind: !0,
                      greedy: !0
                  },
                  keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
                  boolean: /\b(?:_|false|iota|nil|true)\b/,
                  number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
                  operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
                  builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
              }), A.languages.insertBefore("go", "string", {
                  char: {
                      pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
                      greedy: !0
                  }
              }), delete A.languages.go["class-name"],
              function(e) {
                  function t(e, t) {
                      return "___" + e.toUpperCase() + t + "___"
                  }
                  Object.defineProperties(e.languages["markup-templating"] = {}, {
                      buildPlaceholders: {
                          value: function(n, r, s, o) {
                              if (n.language === r) {
                                  var i = n.tokenStack = [];
                                  n.code = n.code.replace(s, function(e) {
                                      if ("function" == typeof o && !o(e)) return e;
                                      for (var s, a = i.length; - 1 !== n.code.indexOf(s = t(r, a));) ++a;
                                      return i[a] = e, s
                                  }), n.grammar = e.languages.markup
                              }
                          }
                      },
                      tokenizePlaceholders: {
                          value: function(n, r) {
                              if (n.language === r && n.tokenStack) {
                                  n.grammar = e.languages[r];
                                  var s = 0,
                                      o = Object.keys(n.tokenStack);
                                  ! function i(a) {
                                      for (var l = 0; l < a.length && !(s >= o.length); l++) {
                                          var c = a[l];
                                          if ("string" == typeof c || c.content && "string" == typeof c.content) {
                                              var u = o[s],
                                                  p = n.tokenStack[u],
                                                  h = "string" == typeof c ? c : c.content,
                                                  d = t(r, u),
                                                  f = h.indexOf(d);
                                              if (f > -1) {
                                                  ++s;
                                                  var m = h.substring(0, f),
                                                      g = new e.Token(r, e.tokenize(p, n.grammar), "language-" + r, p),
                                                      k = h.substring(f + d.length),
                                                      y = [];
                                                  m && y.push.apply(y, i([m])), y.push(g), k && y.push.apply(y, i([k])), "string" == typeof c ? a.splice.apply(a, [l, 1].concat(y)) : c.content = y
                                              }
                                          } else c.content && i(c.content)
                                      }
                                      return a
                                  }(n.tokens)
                              }
                          }
                      }
                  })
              }(A), (m = A).languages.handlebars = {
                  comment: /\{\{![\s\S]*?\}\}/,
                  delimiter: {
                      pattern: /^\{\{\{?|\}\}\}?$/,
                      alias: "punctuation"
                  },
                  string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
                  number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
                  boolean: /\b(?:false|true)\b/,
                  block: {
                      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
                      lookbehind: !0,
                      alias: "keyword"
                  },
                  brackets: {
                      pattern: /\[[^\]]+\]/,
                      inside: {
                          punctuation: /\[|\]/,
                          variable: /[\s\S]+/
                      }
                  },
                  punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
                  variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
              }, m.hooks.add("before-tokenize", function(e) {
                  m.languages["markup-templating"].buildPlaceholders(e, "handlebars", /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)
              }), m.hooks.add("after-tokenize", function(e) {
                  m.languages["markup-templating"].tokenizePlaceholders(e, "handlebars")
              }), m.languages.hbs = m.languages.handlebars, A.languages.json = {
                  property: {
                      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
                      lookbehind: !0,
                      greedy: !0
                  },
                  string: {
                      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
                      lookbehind: !0,
                      greedy: !0
                  },
                  comment: {
                      pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
                      greedy: !0
                  },
                  number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
                  punctuation: /[{}[\],]/,
                  operator: /:/,
                  boolean: /\b(?:false|true)\b/,
                  null: {
                      pattern: /\bnull\b/,
                      alias: "keyword"
                  }
              }, A.languages.webmanifest = A.languages.json, A.languages.less = A.languages.extend("css", {
                  comment: [/\/\*[\s\S]*?\*\//, {
                      pattern: /(^|[^\\])\/\/.*/,
                      lookbehind: !0
                  }],
                  atrule: {
                      pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
                      inside: {
                          punctuation: /[:()]/
                      }
                  },
                  selector: {
                      pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
                      inside: {
                          variable: /@+[\w-]+/
                      }
                  },
                  property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
                  operator: /[+\-*\/]/
              }), A.languages.insertBefore("less", "property", {
                  variable: [{
                      pattern: /@[\w-]+\s*:/,
                      inside: {
                          punctuation: /:/
                      }
                  }, /@@?[\w-]+/],
                  "mixin-usage": {
                      pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
                      lookbehind: !0,
                      alias: "function"
                  }
              }), A.languages.makefile = {
                  comment: {
                      pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
                      lookbehind: !0
                  },
                  string: {
                      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                      greedy: !0
                  },
                  "builtin-target": {
                      pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
                      alias: "builtin"
                  },
                  target: {
                      pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
                      alias: "symbol",
                      inside: {
                          variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
                      }
                  },
                  variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
                  keyword: /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
                  function: {
                      pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
                      lookbehind: !0
                  },
                  operator: /(?:::|[?:+!])?=|[|@]/,
                  punctuation: /[:;(){}]/
              }, A.languages.objectivec = A.languages.extend("c", {
                  string: {
                      pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
                      greedy: !0
                  },
                  keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
                  operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
              }), delete A.languages.objectivec["class-name"], A.languages.objc = A.languages.objectivec, A.languages.ocaml = {
                  comment: {
                      pattern: /\(\*[\s\S]*?\*\)/,
                      greedy: !0
                  },
                  char: {
                      pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
                      greedy: !0
                  },
                  string: [{
                      pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,
                      greedy: !0
                  }, {
                      pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/,
                      greedy: !0
                  }],
                  number: [/\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i, /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i, /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i],
                  directive: {
                      pattern: /\B#\w+/,
                      alias: "property"
                  },
                  label: {
                      pattern: /\B~\w+/,
                      alias: "property"
                  },
                  "type-variable": {
                      pattern: /\B'\w+/,
                      alias: "function"
                  },
                  variant: {
                      pattern: /`\w+/,
                      alias: "symbol"
                  },
                  keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
                  boolean: /\b(?:false|true)\b/,
                  "operator-like-punctuation": {
                      pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
                      alias: "punctuation"
                  },
                  operator: /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
                  punctuation: /;;|::|[(){}\[\].,:;#]|\b_\b/
              }, A.languages.python = {
                  comment: {
                      pattern: /(^|[^\\])#.*/,
                      lookbehind: !0,
                      greedy: !0
                  },
                  "string-interpolation": {
                      pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
                      greedy: !0,
                      inside: {
                          interpolation: {
                              pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                              lookbehind: !0,
                              inside: {
                                  "format-spec": {
                                      pattern: /(:)[^:(){}]+(?=\}$)/,
                                      lookbehind: !0
                                  },
                                  "conversion-option": {
                                      pattern: /![sra](?=[:}]$)/,
                                      alias: "punctuation"
                                  },
                                  rest: null
                              }
                          },
                          string: /[\s\S]+/
                      }
                  },
                  "triple-quoted-string": {
                      pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
                      greedy: !0,
                      alias: "string"
                  },
                  string: {
                      pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
                      greedy: !0
                  },
                  function: {
                      pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
                      lookbehind: !0
                  },
                  "class-name": {
                      pattern: /(\bclass\s+)\w+/i,
                      lookbehind: !0
                  },
                  decorator: {
                      pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
                      lookbehind: !0,
                      alias: ["annotation", "punctuation"],
                      inside: {
                          punctuation: /\./
                      }
                  },
                  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
                  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
                  boolean: /\b(?:False|None|True)\b/,
                  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
                  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
                  punctuation: /[{}[\];(),.:]/
              }, A.languages.python["string-interpolation"].inside.interpolation.inside.rest = A.languages.python, A.languages.py = A.languages.python, A.languages.reason = A.languages.extend("clike", {
                  string: {
                      pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
                      greedy: !0
                  },
                  "class-name": /\b[A-Z]\w*/,
                  keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
                  operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
              }), A.languages.insertBefore("reason", "class-name", {
                  char: {
                      pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
                      greedy: !0
                  },
                  constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
                  label: {
                      pattern: /\b[a-z]\w*(?=::)/,
                      alias: "symbol"
                  }
              }), delete A.languages.reason.function, (g = A).languages.sass = g.languages.extend("css", {
                  comment: {
                      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
                      lookbehind: !0,
                      greedy: !0
                  }
              }), g.languages.insertBefore("sass", "atrule", {
                  "atrule-line": {
                      pattern: /^(?:[ \t]*)[@+=].+/m,
                      greedy: !0,
                      inside: {
                          atrule: /(?:@[\w-]+|[+=])/
                      }
                  }
              }), delete g.languages.sass.atrule, k = /\$[-\w]+|#\{\$[-\w]+\}/, y = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, {
                  pattern: /(\s)-(?=\s)/,
                  lookbehind: !0
              }], g.languages.insertBefore("sass", "property", {
                  "variable-line": {
                      pattern: /^[ \t]*\$.+/m,
                      greedy: !0,
                      inside: {
                          punctuation: /:/,
                          variable: k,
                          operator: y
                      }
                  },
                  "property-line": {
                      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
                      greedy: !0,
                      inside: {
                          property: [/[^:\s]+(?=\s*:)/, {
                              pattern: /(:)[^:\s]+/,
                              lookbehind: !0
                          }],
                          punctuation: /:/,
                          variable: k,
                          operator: y,
                          important: g.languages.sass.important
                      }
                  }
              }), delete g.languages.sass.property, delete g.languages.sass.important, g.languages.insertBefore("sass", "punctuation", {
                  selector: {
                      pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
                      lookbehind: !0,
                      greedy: !0
                  }
              }), A.languages.scss = A.languages.extend("css", {
                  comment: {
                      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                      lookbehind: !0
                  },
                  atrule: {
                      pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
                      inside: {
                          rule: /@[\w-]+/
                      }
                  },
                  url: /(?:[-a-z]+-)?url(?=\()/i,
                  selector: {
                      pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
                      inside: {
                          parent: {
                              pattern: /&/,
                              alias: "important"
                          },
                          placeholder: /%[-\w]+/,
                          variable: /\$[-\w]+|#\{\$[-\w]+\}/
                      }
                  },
                  property: {
                      pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
                      inside: {
                          variable: /\$[-\w]+|#\{\$[-\w]+\}/
                      }
                  }
              }), A.languages.insertBefore("scss", "atrule", {
                  keyword: [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
                      pattern: /( )(?:from|through)(?= )/,
                      lookbehind: !0
                  }]
              }), A.languages.insertBefore("scss", "important", {
                  variable: /\$[-\w]+|#\{\$[-\w]+\}/
              }), A.languages.insertBefore("scss", "function", {
                  "module-modifier": {
                      pattern: /\b(?:as|hide|show|with)\b/i,
                      alias: "keyword"
                  },
                  placeholder: {
                      pattern: /%[-\w]+/,
                      alias: "selector"
                  },
                  statement: {
                      pattern: /\B!(?:default|optional)\b/i,
                      alias: "keyword"
                  },
                  boolean: /\b(?:false|true)\b/,
                  null: {
                      pattern: /\bnull\b/,
                      alias: "keyword"
                  },
                  operator: {
                      pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
                      lookbehind: !0
                  }
              }), A.languages.scss.atrule.inside.rest = A.languages.scss, b = A, (T = {
                  comment: {
                      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                      lookbehind: !0
                  },
                  url: {
                      pattern: /\burl\((["']?).*?\1\)/i,
                      greedy: !0
                  },
                  string: {
                      pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
                      greedy: !0
                  },
                  interpolation: null,
                  func: null,
                  important: /\B!(?:important|optional)\b/i,
                  keyword: {
                      pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
                      lookbehind: !0
                  },
                  hexcode: /#[\da-f]{3,6}/i,
                  color: [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
                      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                      inside: {
                          unit: _ = {
                              pattern: /(\b\d+)(?:%|[a-z]+)/,
                              lookbehind: !0
                          },
                          number: x = {
                              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
                              lookbehind: !0
                          },
                          function: /[\w-]+(?=\()/,
                          punctuation: /[(),]/
                      }
                  }],
                  entity: /\\[\da-f]{1,8}/i,
                  unit: _,
                  boolean: /\b(?:false|true)\b/,
                  operator: [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
                  number: x,
                  punctuation: /[{}()\[\];:,]/
              }).interpolation = {
                  pattern: /\{[^\r\n}:]+\}/,
                  alias: "variable",
                  inside: {
                      delimiter: {
                          pattern: /^\{|\}$/,
                          alias: "punctuation"
                      },
                      rest: T
                  }
              }, T.func = {
                  pattern: /[\w-]+\([^)]*\).*/,
                  inside: {
                      function: /^[^(]+/,
                      rest: T
                  }
              }, b.languages.stylus = {
                  "atrule-declaration": {
                      pattern: /(^[ \t]*)@.+/m,
                      lookbehind: !0,
                      inside: {
                          atrule: /^@[\w-]+/,
                          rest: T
                      }
                  },
                  "variable-declaration": {
                      pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
                      lookbehind: !0,
                      inside: {
                          variable: /^\S+/,
                          rest: T
                      }
                  },
                  statement: {
                      pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
                      lookbehind: !0,
                      inside: {
                          keyword: /^\S+/,
                          rest: T
                      }
                  },
                  "property-declaration": {
                      pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
                      lookbehind: !0,
                      inside: {
                          property: {
                              pattern: /^[^\s:]+/,
                              inside: {
                                  interpolation: T.interpolation
                              }
                          },
                          rest: T
                      }
                  },
                  selector: {
                      pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
                      lookbehind: !0,
                      inside: {
                          interpolation: T.interpolation,
                          comment: T.comment,
                          punctuation: /[{},]/
                      }
                  },
                  func: T.func,
                  string: T.string,
                  comment: {
                      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                      lookbehind: !0,
                      greedy: !0
                  },
                  interpolation: T.interpolation,
                  punctuation: /[{}()\[\];:.]/
              }, E = (v = A).util.clone(v.languages.typescript), v.languages.tsx = v.languages.extend("jsx", E), delete v.languages.tsx.parameter, delete v.languages.tsx["literal-property"], (w = v.languages.tsx.tag).pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + w.pattern.source + ")", w.pattern.flags), w.lookbehind = !0, A.languages.wasm = {
                  comment: [/\(;[\s\S]*?;\)/, {
                      pattern: /;;.*/,
                      greedy: !0
                  }],
                  string: {
                      pattern: /"(?:\\[\s\S]|[^"\\])*"/,
                      greedy: !0
                  },
                  keyword: [{
                      pattern: /\b(?:align|offset)=/,
                      inside: {
                          operator: /=/
                      }
                  }, {
                      pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
                      inside: {
                          punctuation: /\./
                      }
                  }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
                  variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
                  number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
                  punctuation: /[()]/
              }, t.Z = A
      },
      9544: function(e, t, n) {
          "use strict";
          let r, s, o, i, a, l;
          n.d(t, {
              uz: function() {
                  return ru
              },
              IF: function() {
                  return rp
              },
              i5: function() {
                  return rd
              },
              nu: function() {
                  return rc
              }
          });
          var c, u, p, h, d, f, m, g, k, y, b = n(5893),
              _ = n(3746),
              x = n(7410),
              T = n(7294);
          ! function(e) {
              e[e.NONE = 0] = "NONE", e[e._abstract = 1] = "_abstract";
              e[e._accessor = 2] = "_accessor";
              let t = 3;
              e[e._as = t] = "_as";
              let n = t + 1;
              e[e._assert = n] = "_assert";
              let r = n + 1;
              e[e._asserts = r] = "_asserts";
              let s = r + 1;
              e[e._async = s] = "_async";
              let o = s + 1;
              e[e._await = o] = "_await";
              let i = o + 1;
              e[e._checks = i] = "_checks";
              let a = i + 1;
              e[e._constructor = a] = "_constructor";
              let l = a + 1;
              e[e._declare = l] = "_declare";
              let c = l + 1;
              e[e._enum = c] = "_enum";
              let u = c + 1;
              e[e._exports = u] = "_exports";
              let p = u + 1;
              e[e._from = p] = "_from";
              let h = p + 1;
              e[e._get = h] = "_get";
              let d = h + 1;
              e[e._global = d] = "_global";
              let f = d + 1;
              e[e._implements = f] = "_implements";
              let m = f + 1;
              e[e._infer = m] = "_infer";
              let g = m + 1;
              e[e._interface = g] = "_interface";
              let k = g + 1;
              e[e._is = k] = "_is";
              let y = k + 1;
              e[e._keyof = y] = "_keyof";
              let b = y + 1;
              e[e._mixins = b] = "_mixins";
              let _ = b + 1;
              e[e._module = _] = "_module";
              let x = _ + 1;
              e[e._namespace = x] = "_namespace";
              let T = x + 1;
              e[e._of = T] = "_of";
              let v = T + 1;
              e[e._opaque = v] = "_opaque";
              let E = v + 1;
              e[e._out = E] = "_out";
              let w = E + 1;
              e[e._override = w] = "_override";
              let I = w + 1;
              e[e._private = I] = "_private";
              let A = I + 1;
              e[e._protected = A] = "_protected";
              let S = A + 1;
              e[e._proto = S] = "_proto";
              let C = S + 1;
              e[e._public = C] = "_public";
              let R = C + 1;
              e[e._readonly = R] = "_readonly";
              let N = R + 1;
              e[e._require = N] = "_require";
              let L = N + 1;
              e[e._satisfies = L] = "_satisfies";
              let O = L + 1;
              e[e._set = O] = "_set";
              let D = O + 1;
              e[e._static = D] = "_static";
              let F = D + 1;
              e[e._symbol = F] = "_symbol";
              let P = F + 1;
              e[e._type = P] = "_type";
              let B = P + 1;
              e[e._unique = B] = "_unique", e[e._using = B + 1] = "_using"
          }(d || (d = {})), (p = f || (f = {}))[p.PRECEDENCE_MASK = 15] = "PRECEDENCE_MASK", p[p.IS_KEYWORD = 16] = "IS_KEYWORD", p[p.IS_ASSIGN = 32] = "IS_ASSIGN", p[p.IS_RIGHT_ASSOCIATIVE = 64] = "IS_RIGHT_ASSOCIATIVE", p[p.IS_PREFIX = 128] = "IS_PREFIX", p[p.IS_POSTFIX = 256] = "IS_POSTFIX", p[p.IS_EXPRESSION_START = 512] = "IS_EXPRESSION_START", p[p.num = 512] = "num", p[p.bigint = 1536] = "bigint", p[p.decimal = 2560] = "decimal", p[p.regexp = 3584] = "regexp", p[p.string = 4608] = "string", p[p.name = 5632] = "name", p[p.eof = 6144] = "eof", p[p.bracketL = 7680] = "bracketL", p[p.bracketR = 8192] = "bracketR", p[p.braceL = 9728] = "braceL", p[p.braceBarL = 10752] = "braceBarL", p[p.braceR = 11264] = "braceR", p[p.braceBarR = 12288] = "braceBarR", p[p.parenL = 13824] = "parenL", p[p.parenR = 14336] = "parenR", p[p.comma = 15360] = "comma", p[p.semi = 16384] = "semi", p[p.colon = 17408] = "colon", p[p.doubleColon = 18432] = "doubleColon", p[p.dot = 19456] = "dot", p[p.question = 20480] = "question", p[p.questionDot = 21504] = "questionDot", p[p.arrow = 22528] = "arrow", p[p.template = 23552] = "template", p[p.ellipsis = 24576] = "ellipsis", p[p.backQuote = 25600] = "backQuote", p[p.dollarBraceL = 27136] = "dollarBraceL", p[p.at = 27648] = "at", p[p.hash = 29184] = "hash", p[p.eq = 29728] = "eq", p[p.assign = 30752] = "assign", p[p.preIncDec = 32640] = "preIncDec", p[p.postIncDec = 33664] = "postIncDec", p[p.bang = 34432] = "bang", p[p.tilde = 35456] = "tilde", p[p.pipeline = 35841] = "pipeline", p[p.nullishCoalescing = 36866] = "nullishCoalescing", p[p.logicalOR = 37890] = "logicalOR", p[p.logicalAND = 38915] = "logicalAND", p[p.bitwiseOR = 39940] = "bitwiseOR", p[p.bitwiseXOR = 40965] = "bitwiseXOR", p[p.bitwiseAND = 41990] = "bitwiseAND", p[p.equality = 43015] = "equality", p[p.lessThan = 44040] = "lessThan", p[p.greaterThan = 45064] = "greaterThan", p[p.relationalOrEqual = 46088] = "relationalOrEqual", p[p.bitShiftL = 47113] = "bitShiftL", p[p.bitShiftR = 48137] = "bitShiftR", p[p.plus = 49802] = "plus", p[p.minus = 50826] = "minus", p[p.modulo = 51723] = "modulo", p[p.star = 52235] = "star", p[p.slash = 53259] = "slash", p[p.exponent = 54348] = "exponent", p[p.jsxName = 55296] = "jsxName", p[p.jsxText = 56320] = "jsxText", p[p.jsxEmptyText = 57344] = "jsxEmptyText", p[p.jsxTagStart = 58880] = "jsxTagStart", p[p.jsxTagEnd = 59392] = "jsxTagEnd", p[p.typeParameterStart = 60928] = "typeParameterStart", p[p.nonNullAssertion = 61440] = "nonNullAssertion", p[p._break = 62480] = "_break", p[p._case = 63504] = "_case", p[p._catch = 64528] = "_catch", p[p._continue = 65552] = "_continue", p[p._debugger = 66576] = "_debugger", p[p._default = 67600] = "_default", p[p._do = 68624] = "_do", p[p._else = 69648] = "_else", p[p._finally = 70672] = "_finally", p[p._for = 71696] = "_for", p[p._function = 73232] = "_function", p[p._if = 73744] = "_if", p[p._return = 74768] = "_return", p[p._switch = 75792] = "_switch", p[p._throw = 77456] = "_throw", p[p._try = 77840] = "_try", p[p._var = 78864] = "_var", p[p._let = 79888] = "_let", p[p._const = 80912] = "_const", p[p._while = 81936] = "_while", p[p._with = 82960] = "_with", p[p._new = 84496] = "_new", p[p._this = 85520] = "_this", p[p._super = 86544] = "_super", p[p._class = 87568] = "_class", p[p._extends = 88080] = "_extends", p[p._export = 89104] = "_export", p[p._import = 90640] = "_import", p[p._yield = 91664] = "_yield", p[p._null = 92688] = "_null", p[p._true = 93712] = "_true", p[p._false = 94736] = "_false", p[p._in = 95256] = "_in", p[p._instanceof = 96280] = "_instanceof", p[p._typeof = 97936] = "_typeof", p[p._void = 98960] = "_void", p[p._delete = 99984] = "_delete", p[p._async = 100880] = "_async", p[p._get = 101904] = "_get", p[p._set = 102928] = "_set", p[p._declare = 103952] = "_declare", p[p._readonly = 104976] = "_readonly", p[p._abstract = 106e3] = "_abstract", p[p._static = 107024] = "_static", p[p._public = 107536] = "_public", p[p._private = 108560] = "_private", p[p._protected = 109584] = "_protected", p[p._override = 110608] = "_override", p[p._as = 112144] = "_as", p[p._enum = 113168] = "_enum", p[p._type = 114192] = "_type", p[p._implements = 115216] = "_implements";
          class v {
              constructor(e, t, n) {
                  this.startTokenIndex = e, this.endTokenIndex = t, this.isFunctionScope = n
              }
          }
          class E {
              constructor(e, t, n, r, s, o, i, a, l, c, u, p, h) {
                  this.potentialArrowAt = e, this.noAnonFunctionType = t, this.inDisallowConditionalTypesContext = n, this.tokensLength = r, this.scopesLength = s, this.pos = o, this.type = i, this.contextualKeyword = a, this.start = l, this.end = c, this.isType = u, this.scopeDepth = p, this.error = h
              }
          }
          class w {
              constructor() {
                  w.prototype.__init.call(this), w.prototype.__init2.call(this), w.prototype.__init3.call(this), w.prototype.__init4.call(this), w.prototype.__init5.call(this), w.prototype.__init6.call(this), w.prototype.__init7.call(this), w.prototype.__init8.call(this), w.prototype.__init9.call(this), w.prototype.__init10.call(this), w.prototype.__init11.call(this), w.prototype.__init12.call(this), w.prototype.__init13.call(this)
              }
              __init() {
                  this.potentialArrowAt = -1
              }
              __init2() {
                  this.noAnonFunctionType = !1
              }
              __init3() {
                  this.inDisallowConditionalTypesContext = !1
              }
              __init4() {
                  this.tokens = []
              }
              __init5() {
                  this.scopes = []
              }
              __init6() {
                  this.pos = 0
              }
              __init7() {
                  this.type = f.eof
              }
              __init8() {
                  this.contextualKeyword = d.NONE
              }
              __init9() {
                  this.start = 0
              }
              __init10() {
                  this.end = 0
              }
              __init11() {
                  this.isType = !1
              }
              __init12() {
                  this.scopeDepth = 0
              }
              __init13() {
                  this.error = null
              }
              snapshot() {
                  return new E(this.potentialArrowAt, this.noAnonFunctionType, this.inDisallowConditionalTypesContext, this.tokens.length, this.scopes.length, this.pos, this.type, this.contextualKeyword, this.start, this.end, this.isType, this.scopeDepth, this.error)
              }
              restoreFromSnapshot(e) {
                  this.potentialArrowAt = e.potentialArrowAt, this.noAnonFunctionType = e.noAnonFunctionType, this.inDisallowConditionalTypesContext = e.inDisallowConditionalTypesContext, this.tokens.length = e.tokensLength, this.scopes.length = e.scopesLength, this.pos = e.pos, this.type = e.type, this.contextualKeyword = e.contextualKeyword, this.start = e.start, this.end = e.end, this.isType = e.isType, this.scopeDepth = e.scopeDepth, this.error = e.error
              }
          }(h = m || (m = {}))[h.backSpace = 8] = "backSpace", h[h.lineFeed = 10] = "lineFeed", h[h.tab = 9] = "tab", h[h.carriageReturn = 13] = "carriageReturn", h[h.shiftOut = 14] = "shiftOut", h[h.space = 32] = "space", h[h.exclamationMark = 33] = "exclamationMark", h[h.quotationMark = 34] = "quotationMark", h[h.numberSign = 35] = "numberSign", h[h.dollarSign = 36] = "dollarSign", h[h.percentSign = 37] = "percentSign", h[h.ampersand = 38] = "ampersand", h[h.apostrophe = 39] = "apostrophe", h[h.leftParenthesis = 40] = "leftParenthesis", h[h.rightParenthesis = 41] = "rightParenthesis", h[h.asterisk = 42] = "asterisk", h[h.plusSign = 43] = "plusSign", h[h.comma = 44] = "comma", h[h.dash = 45] = "dash", h[h.dot = 46] = "dot", h[h.slash = 47] = "slash", h[h.digit0 = 48] = "digit0", h[h.digit1 = 49] = "digit1", h[h.digit2 = 50] = "digit2", h[h.digit3 = 51] = "digit3", h[h.digit4 = 52] = "digit4", h[h.digit5 = 53] = "digit5", h[h.digit6 = 54] = "digit6", h[h.digit7 = 55] = "digit7", h[h.digit8 = 56] = "digit8", h[h.digit9 = 57] = "digit9", h[h.colon = 58] = "colon", h[h.semicolon = 59] = "semicolon", h[h.lessThan = 60] = "lessThan", h[h.equalsTo = 61] = "equalsTo", h[h.greaterThan = 62] = "greaterThan", h[h.questionMark = 63] = "questionMark", h[h.atSign = 64] = "atSign", h[h.uppercaseA = 65] = "uppercaseA", h[h.uppercaseB = 66] = "uppercaseB", h[h.uppercaseC = 67] = "uppercaseC", h[h.uppercaseD = 68] = "uppercaseD", h[h.uppercaseE = 69] = "uppercaseE", h[h.uppercaseF = 70] = "uppercaseF", h[h.uppercaseG = 71] = "uppercaseG", h[h.uppercaseH = 72] = "uppercaseH", h[h.uppercaseI = 73] = "uppercaseI", h[h.uppercaseJ = 74] = "uppercaseJ", h[h.uppercaseK = 75] = "uppercaseK", h[h.uppercaseL = 76] = "uppercaseL", h[h.uppercaseM = 77] = "uppercaseM", h[h.uppercaseN = 78] = "uppercaseN", h[h.uppercaseO = 79] = "uppercaseO", h[h.uppercaseP = 80] = "uppercaseP", h[h.uppercaseQ = 81] = "uppercaseQ", h[h.uppercaseR = 82] = "uppercaseR", h[h.uppercaseS = 83] = "uppercaseS", h[h.uppercaseT = 84] = "uppercaseT", h[h.uppercaseU = 85] = "uppercaseU", h[h.uppercaseV = 86] = "uppercaseV", h[h.uppercaseW = 87] = "uppercaseW", h[h.uppercaseX = 88] = "uppercaseX", h[h.uppercaseY = 89] = "uppercaseY", h[h.uppercaseZ = 90] = "uppercaseZ", h[h.leftSquareBracket = 91] = "leftSquareBracket", h[h.backslash = 92] = "backslash", h[h.rightSquareBracket = 93] = "rightSquareBracket", h[h.caret = 94] = "caret", h[h.underscore = 95] = "underscore", h[h.graveAccent = 96] = "graveAccent", h[h.lowercaseA = 97] = "lowercaseA", h[h.lowercaseB = 98] = "lowercaseB", h[h.lowercaseC = 99] = "lowercaseC", h[h.lowercaseD = 100] = "lowercaseD", h[h.lowercaseE = 101] = "lowercaseE", h[h.lowercaseF = 102] = "lowercaseF", h[h.lowercaseG = 103] = "lowercaseG", h[h.lowercaseH = 104] = "lowercaseH", h[h.lowercaseI = 105] = "lowercaseI", h[h.lowercaseJ = 106] = "lowercaseJ", h[h.lowercaseK = 107] = "lowercaseK", h[h.lowercaseL = 108] = "lowercaseL", h[h.lowercaseM = 109] = "lowercaseM", h[h.lowercaseN = 110] = "lowercaseN", h[h.lowercaseO = 111] = "lowercaseO", h[h.lowercaseP = 112] = "lowercaseP", h[h.lowercaseQ = 113] = "lowercaseQ", h[h.lowercaseR = 114] = "lowercaseR", h[h.lowercaseS = 115] = "lowercaseS", h[h.lowercaseT = 116] = "lowercaseT", h[h.lowercaseU = 117] = "lowercaseU", h[h.lowercaseV = 118] = "lowercaseV", h[h.lowercaseW = 119] = "lowercaseW", h[h.lowercaseX = 120] = "lowercaseX", h[h.lowercaseY = 121] = "lowercaseY", h[h.lowercaseZ = 122] = "lowercaseZ", h[h.leftCurlyBrace = 123] = "leftCurlyBrace", h[h.verticalBar = 124] = "verticalBar", h[h.rightCurlyBrace = 125] = "rightCurlyBrace", h[h.tilde = 126] = "tilde", h[h.nonBreakingSpace = 160] = "nonBreakingSpace", h[h.oghamSpaceMark = 5760] = "oghamSpaceMark", h[h.lineSeparator = 8232] = "lineSeparator", h[h.paragraphSeparator = 8233] = "paragraphSeparator";
          class I {
              constructor(e, t) {
                  this.line = e, this.column = t
              }
          }

          function A(e) {
              return i.contextualKeyword === e
          }

          function S(e) {
              let t = en();
              return t.type === f.name && t.contextualKeyword === e
          }

          function C(e) {
              return i.contextualKeyword === e && Z(f.name)
          }

          function R(e) {
              C(e) || B()
          }

          function N() {
              return Q(f.eof) || Q(f.braceR) || L()
          }

          function L() {
              let e = i.tokens[i.tokens.length - 1],
                  t = e ? e.end : 0;
              for (let e = t; e < i.start; e++) {
                  let t = a.charCodeAt(e);
                  if (t === m.lineFeed || t === m.carriageReturn || 8232 === t || 8233 === t) return !0
              }
              return !1
          }

          function O() {
              let e = er();
              for (let t = i.end; t < e; t++) {
                  let e = a.charCodeAt(t);
                  if (e === m.lineFeed || e === m.carriageReturn || 8232 === e || 8233 === e) return !0
              }
              return !1
          }

          function D() {
              return Z(f.semi) || N()
          }

          function F() {
              D() || B('Unexpected token, expected ";"')
          }

          function P(e) {
              let t = Z(e);
              t || B(`Unexpected token, expected "${function(e){switch(e){case f.num:return"num";case f.bigint:return"bigint";case f.decimal:return"decimal";case f.regexp:return"regexp";case f.string:return"string";case f.name:return"name";case f.eof:return"eof";case f.bracketL:return"[";case f.bracketR:return"]";case f.braceL:return"{";case f.braceBarL:return"{|";case f.braceR:return"}";case f.braceBarR:return"|}";case f.parenL:return"(";case f.parenR:return")";case f.comma:return",";case f.semi:return";";case f.colon:return":";case f.doubleColon:return"::";case f.dot:return".";case f.question:return"?";case f.questionDot:return"?.";case f.arrow:return"=>";case f.template:return"template";case f.ellipsis:return"...";case f.backQuote:return"`
                  ";case f.dollarBraceL:return"
                  $ {
                      ";case f.at:return"
                      @ ";case f.hash:return"
                      # ";case f.eq:return" = ";case f.assign:return"
                      _ = ";case f.preIncDec:case f.postIncDec:return"++/--";case f.bang:return"!";case f.tilde:return"~";case f.pipeline:return"|>";case f.nullishCoalescing:return"??";case f.logicalOR:return"||";case f.logicalAND:return"&&";case f.bitwiseOR:return"|";case f.bitwiseXOR:return"^";case f.bitwiseAND:return"&";case f.equality:return"==/ != ";case f.lessThan:return" < ";case f.greaterThan:return" > ";case f.relationalOrEqual:return" <= />=";case f.bitShiftL:return"<<";case f.bitShiftR:return">>/ >>> ";case f.plus:return" + ";case f.minus:return" - ";case f.modulo:return" % ";case f.star:return" * ";case f.slash:return" / ";case f.exponent:return" ** ";case f.jsxName:return"
                      jsxName ";case f.jsxText:return"
                      jsxText ";case f.jsxEmptyText:return"
                      jsxEmptyText ";case f.jsxTagStart:return"
                      jsxTagStart ";case f.jsxTagEnd:return"
                      jsxTagEnd ";case f.typeParameterStart:return"
                      typeParameterStart ";case f.nonNullAssertion:return"
                      nonNullAssertion ";case f._break:return"
                      break ";case f._case:return"
                      case ";case f._catch:return"
                      catch ";case f._continue:return"
                      continue ";case f._debugger:return"
                      debugger ";case f._default:return"
                      default ";case f._do:return"
                      do ";case f._else:return"
                      else ";case f._finally:return"
                      finally ";case f._for:return"
                      for ";case f._function:return"
                      function ";case f._if:return"
                      if ";case f._return:return"
                      return ";case f._switch:return"
                      switch ";case f._throw:return"
                      throw ";case f._try:return"
                      try ";case f._var:return"
                      var ";case f._let:return"
                      let ";case f._const:return"
                      const ";case f._while:return"
                      while ";case f._with:return"
                      with ";case f._new:return"
                      new ";case f._this:return"
                      this ";case f._super:return"
                      super ";case f._class:return"
                      class ";case f._extends:return"
                      extends ";case f._export:return"
                      export ";case f._import:return"
                      import ";case f._yield:return"
                      yield ";case f._null:return"
                      null ";case f._true:return"
                      true ";case f._false:return"
                      false ";case f._in:return" in ";case f._instanceof:return"
                      instanceof ";case f._typeof:return"
                      typeof ";case f._void:return"
                      void ";case f._delete:return"
                      delete ";case f._async:return"
                      async ";case f._get:return"
                      get ";case f._set:return"
                      set ";case f._declare:return"
                      declare ";case f._readonly:return"
                      readonly ";case f._abstract:return"
                      abstract ";case f._static:return"
                      static ";case f._public:return"
                      public ";case f._private:return"
                      private ";case f._protected:return"
                      protected ";case f._override:return"
                      override ";case f._as:return"
                      as ";case f._enum:return"
                      enum ";case f._type:return"
                      type ";case f._implements:return"
                      implements ";default:return"
                      "}}(e)}"
                      `)}function B(e="Unexpected token",t=i.start){if(i.error)return;let n=SyntaxError(e);n.pos=t,i.error=n,i.pos=a.length,ec(f.eof)}let j=[9,11,12,m.space,m.nonBreakingSpace,m.oghamSpaceMark,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279],M=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,$=new Uint8Array(65536);for(let e of j)$[e]=1;let q=new Uint8Array(65536);for(let e=0;e<128;e++)q[e]=!function(e){if(e<48)return 36===e;if(e<58)return!0;if(e<65)return!1;if(e<91)return!0;if(e<97)return 95===e;if(e<123)return!0;if(e<128)return!1;throw Error("Should not be called with non-ASCII char code.")}(e)?0:1;for(let e=128;e<65536;e++)q[e]=1;for(let e of j)q[e]=0;q[8232]=0,q[8233]=0;let U=q.slice();for(let e=m.digit0;e<=m.digit9;e++)U[e]=0;let G=new Int32Array([-1,27,783,918,1755,2376,2862,3483,-1,3699,-1,4617,4752,4833,5130,5508,5940,-1,6480,6939,7749,8181,8451,8613,-1,8829,-1,-1,-1,54,243,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,432,-1,-1,-1,675,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,81,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,108,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,135,-1,-1,-1,-1,-1,-1,-1,-1,-1,162,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,189,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,216,-1,-1,-1,-1,-1,-1,d._abstract<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,270,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,297,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,324,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,351,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,378,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,405,-1,-1,-1,-1,-1,-1,-1,-1,d._accessor<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._as<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,459,-1,-1,-1,-1,-1,594,-1,-1,-1,-1,-1,-1,486,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,513,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,540,-1,-1,-1,-1,-1,-1,d._assert<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,567,-1,-1,-1,-1,-1,-1,-1,d._asserts<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,621,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,648,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._async<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,702,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,729,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,756,-1,-1,-1,-1,-1,-1,d._await<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,810,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,837,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,864,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,891,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._break<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,945,-1,-1,-1,-1,-1,-1,1107,-1,-1,-1,1242,-1,-1,1350,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,972,1026,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,999,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._case<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1053,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1080,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._catch<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1134,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1161,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1188,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1215,-1,-1,-1,-1,-1,-1,-1,d._checks<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1269,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1296,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1323,-1,-1,-1,-1,-1,-1,-1,(f._class<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1377,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1404,1620,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1431,-1,-1,-1,-1,-1,-1,(f._const<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1458,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1485,-1,-1,-1,-1,-1,-1,-1,-1,1512,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1539,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1566,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1593,-1,-1,-1,-1,-1,-1,-1,-1,d._constructor<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1647,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1674,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1701,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1728,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._continue<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1782,-1,-1,-1,-1,-1,-1,-1,-1,-1,2349,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1809,1971,-1,-1,2106,-1,-1,-1,-1,-1,2241,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1836,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1863,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1890,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1917,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1944,-1,-1,-1,-1,-1,-1,-1,-1,(f._debugger<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1998,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2025,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2052,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2079,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._declare<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2133,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2160,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2187,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2214,-1,-1,-1,-1,-1,-1,(f._default<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2268,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2295,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2322,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._delete<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._do<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2403,-1,2484,-1,-1,-1,-1,-1,-1,-1,-1,-1,2565,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2430,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2457,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._else<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2511,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2538,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._enum<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2592,-1,-1,-1,2727,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2619,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2646,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2673,-1,-1,-1,-1,-1,-1,(f._export<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2700,-1,-1,-1,-1,-1,-1,-1,d._exports<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2754,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2781,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2808,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2835,-1,-1,-1,-1,-1,-1,-1,(f._extends<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2889,-1,-1,-1,-1,-1,-1,-1,2997,-1,-1,-1,-1,-1,3159,-1,-1,3213,-1,-1,3294,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2916,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2943,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2970,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._false<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3024,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3051,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3078,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3105,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3132,-1,(f._finally<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3186,-1,-1,-1,-1,-1,-1,-1,-1,(f._for<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3240,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3267,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._from<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3321,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3348,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3375,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3402,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3429,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3456,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._function<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3510,-1,-1,-1,-1,-1,-1,3564,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3537,-1,-1,-1,-1,-1,-1,d._get<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3591,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3618,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3645,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3672,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._global<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3726,-1,-1,-1,-1,-1,-1,3753,4077,-1,-1,-1,-1,4590,-1,-1,-1,-1,-1,-1,-1,(f._if<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3780,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3807,-1,-1,3996,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3834,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3861,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3888,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3915,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3942,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3969,-1,-1,-1,-1,-1,-1,-1,d._implements<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4023,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4050,-1,-1,-1,-1,-1,-1,(f._import<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._in<<1)+1,-1,-1,-1,-1,-1,4104,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4185,4401,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4131,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4158,-1,-1,-1,-1,-1,-1,-1,-1,d._infer<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4212,-1,-1,-1,-1,-1,-1,-1,4239,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4266,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4293,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4320,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4347,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4374,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._instanceof<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4428,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4455,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4482,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4509,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4536,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4563,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._interface<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._is<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4644,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4671,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4698,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4725,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._keyof<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4779,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4806,-1,-1,-1,-1,-1,-1,(f._let<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4860,-1,-1,-1,-1,-1,4995,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4887,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4914,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4941,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4968,-1,-1,-1,-1,-1,-1,-1,d._mixins<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5022,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5049,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5076,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5103,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._module<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5157,-1,-1,-1,5373,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5427,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5184,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5211,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5238,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5265,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5292,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5319,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5346,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._namespace<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5400,-1,-1,-1,(f._new<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5454,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5481,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._null<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5535,-1,-1,-1,-1,-1,-1,-1,-1,-1,5562,-1,-1,-1,-1,5697,5751,-1,-1,-1,-1,d._of<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5589,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5616,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5643,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5670,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._opaque<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5724,-1,-1,-1,-1,-1,-1,d._out<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5778,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5805,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5832,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5859,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5886,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5913,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._override<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5967,-1,-1,6345,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5994,-1,-1,-1,-1,-1,6129,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6021,-1,-1,-1,-1,-1,6048,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6075,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6102,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._private<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6156,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6183,-1,-1,-1,-1,-1,-1,-1,-1,-1,6318,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6210,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6237,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6264,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6291,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._protected<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._proto<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6399,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6426,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6453,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._public<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6507,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6534,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6696,-1,-1,6831,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6561,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6588,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6615,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6642,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6669,-1,d._readonly<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6723,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6750,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6777,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6804,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._require<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6858,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6885,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6912,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._return<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6966,-1,-1,-1,7182,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7236,7371,-1,7479,-1,7614,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6993,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7020,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7047,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7074,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7101,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7128,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7155,-1,-1,-1,-1,-1,-1,-1,d._satisfies<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7209,-1,-1,-1,-1,-1,-1,d._set<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7263,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7290,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7317,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7344,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._static<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7398,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7425,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7452,-1,-1,-1,-1,-1,-1,-1,-1,(f._super<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7506,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7533,-1,-1,-1,-1,-1,-1,-1,-1,-1,7560,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7587,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._switch<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7641,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7668,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7695,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7722,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._symbol<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7776,-1,-1,-1,-1,-1,-1,-1,-1,-1,7938,-1,-1,-1,-1,-1,-1,8046,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7803,-1,-1,-1,-1,-1,-1,-1,-1,7857,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7830,-1,-1,-1,-1,-1,-1,-1,(f._this<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7884,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7911,-1,-1,-1,(f._throw<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7965,-1,-1,-1,8019,-1,-1,-1,-1,-1,-1,7992,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._true<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._try<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8073,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8100,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._type<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8127,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8154,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._typeof<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8208,-1,-1,-1,-1,8343,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8235,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8262,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8289,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8316,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._unique<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8370,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8397,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8424,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,d._using<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8478,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8532,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8505,-1,-1,-1,-1,-1,-1,-1,-1,(f._var<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8559,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8586,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._void<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8640,8748,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8667,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8694,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8721,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._while<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8775,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8802,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._with<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8856,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8883,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8910,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8937,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(f._yield<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);function H(e){let t=e.identifierRole;return t===g.TopLevelDeclaration||t===g.FunctionScopedDeclaration||t===g.BlockScopedDeclaration||t===g.ObjectShorthandTopLevelDeclaration||t===g.ObjectShorthandFunctionScopedDeclaration||t===g.ObjectShorthandBlockScopedDeclaration}function K(e){let t=e.identifierRole;return t===g.TopLevelDeclaration||t===g.ObjectShorthandTopLevelDeclaration||t===g.ImportDeclaration}!function(e){e[e.Access=0]="Access",e[e.ExportAccess=1]="ExportAccess";e[e.TopLevelDeclaration=2]="TopLevelDeclaration";let t=3;e[e.FunctionScopedDeclaration=t]="FunctionScopedDeclaration";let n=t+1;e[e.BlockScopedDeclaration=n]="BlockScopedDeclaration";let r=n+1;e[e.ObjectShorthandTopLevelDeclaration=r]="ObjectShorthandTopLevelDeclaration";let s=r+1;e[e.ObjectShorthandFunctionScopedDeclaration=s]="ObjectShorthandFunctionScopedDeclaration";let o=s+1;e[e.ObjectShorthandBlockScopedDeclaration=o]="ObjectShorthandBlockScopedDeclaration";let i=o+1;e[e.ObjectShorthand=i]="ObjectShorthand";let a=i+1;e[e.ImportDeclaration=a]="ImportDeclaration";let l=a+1;e[e.ObjectKey=l]="ObjectKey",e[e.ImportAccess=l+1]="ImportAccess"}(g||(g={})),(c=k||(k={}))[c.NoChildren=0]="NoChildren",c[c.OneChild=1]="OneChild",c[c.StaticChildren=2]="StaticChildren",c[c.KeyAfterPropSpread=3]="KeyAfterPropSpread";class z{constructor(){this.type=i.type,this.contextualKeyword=i.contextualKeyword,this.start=i.start,this.end=i.end,this.scopeDepth=i.scopeDepth,this.isType=i.isType,this.identifierRole=null,this.jsxRole=null,this.shadowsGlobal=!1,this.isAsyncOperation=!1,this.contextId=null,this.rhsEndIndex=null,this.isExpression=!1,this.numNullishCoalesceStarts=0,this.numNullishCoalesceEnds=0,this.isOptionalChainStart=!1,this.isOptionalChainEnd=!1,this.subscriptStartIndex=null,this.nullishStartIndex=null}}function W(){i.tokens.push(new z),ei()}function V(){i.tokens.push(new z),i.start=i.pos,function(){for(;;){if(i.pos>=a.length){B("Unterminated template");return}let e=a.charCodeAt(i.pos);if(e===m.graveAccent||e===m.dollarSign&&a.charCodeAt(i.pos+1)===m.leftCurlyBrace){if(i.pos===i.start&&Q(f.template)){if(e===m.dollarSign){i.pos+=2,ec(f.dollarBraceL);return}++i.pos,ec(f.backQuote);return}ec(f.template);return}e===m.backslash&&i.pos++,i.pos++}}()}function Y(e){for(let t=i.tokens.length-e;t<i.tokens.length;t++)i.tokens[t].isType=!0;let t=i.isType;return i.isType=!0,t}function X(e){i.isType=e}function Z(e){return!!Q(e)&&(W(),!0)}function J(e){let t=i.isType;i.isType=!0,Z(e),i.isType=t}function Q(e){return i.type===e}function ee(){let e=i.snapshot();W();let t=i.type;return i.restoreFromSnapshot(e),t}class et{constructor(e,t){this.type=e,this.contextualKeyword=t}}function en(){let e=i.snapshot();W();let t=i.type,n=i.contextualKeyword;return i.restoreFromSnapshot(e),new et(t,n)}function er(){return es(i.pos)}function es(e){M.lastIndex=e;let t=M.exec(a);return e+t[0].length}function eo(){return a.charCodeAt(er())}function ei(){var e;if(el(),i.start=i.pos,i.pos>=a.length){let e=i.tokens;e.length>=2&&e[e.length-1].start>=a.length&&e[e.length-2].start>=a.length&&B("Unexpectedly reached the end of input."),ec(f.eof);return}U[e=a.charCodeAt(i.pos)]||e===m.backslash||e===m.atSign&&a.charCodeAt(i.pos+1)===m.atSign?function(){let e=0,t=0,n=i.pos;for(;n<a.length&&!((t=a.charCodeAt(n))<m.lowercaseA)&&!(t>m.lowercaseZ);){let r=G[e+(t-m.lowercaseA)+1];if(-1===r)break;e=r,n++}let r=G[e];if(r>-1&&!q[t]){i.pos=n,1&r?ec(r>>>1):ec(f.name,r>>>1);return}for(;n<a.length;){let e=a.charCodeAt(n);if(q[e])n++;else if(e===m.backslash){if(n+=2,a.charCodeAt(n)===m.leftCurlyBrace){for(;n<a.length&&a.charCodeAt(n)!==m.rightCurlyBrace;)n++;n++}}else if(e===m.atSign&&a.charCodeAt(n+1)===m.atSign)n+=2;else break}i.pos=n,ec(f.name)}():ep(e)}function ea(e){let t=a.charCodeAt(i.pos+=e);if(i.pos<a.length)for(;t!==m.lineFeed&&t!==m.carriageReturn&&t!==m.lineSeparator&&t!==m.paragraphSeparator&&++i.pos<a.length;)t=a.charCodeAt(i.pos)}function el(){for(;i.pos<a.length;){let e=a.charCodeAt(i.pos);switch(e){case m.carriageReturn:a.charCodeAt(i.pos+1)===m.lineFeed&&++i.pos;case m.lineFeed:case m.lineSeparator:case m.paragraphSeparator:++i.pos;break;case m.slash:switch(a.charCodeAt(i.pos+1)){case m.asterisk:i.pos+=2,function(){for(;a.charCodeAt(i.pos)!==m.asterisk||a.charCodeAt(i.pos+1)!==m.slash;)if(i.pos++,i.pos>a.length){B("Unterminated comment",i.pos-2);return}i.pos+=2}();break;case m.slash:ea(2);break;default:return}break;default:if(!$[e])return;++i.pos}}}function ec(e,t=d.NONE){i.end=i.pos,i.type=e,i.contextualKeyword=t}function eu(){if(i.isType){eh(f.greaterThan,1);return}let e=a.charCodeAt(i.pos+1);if(e===m.greaterThan){let e=a.charCodeAt(i.pos+2)===m.greaterThan?3:2;if(a.charCodeAt(i.pos+e)===m.equalsTo){eh(f.assign,e+1);return}eh(f.bitShiftR,e);return}e===m.equalsTo?eh(f.relationalOrEqual,2):eh(f.greaterThan,1)}function ep(e){switch(e){case m.numberSign:++i.pos,ec(f.hash);return;case m.dot:!function(){let e=a.charCodeAt(i.pos+1);if(e>=m.digit0&&e<=m.digit9){ef(!0);return}e===m.dot&&a.charCodeAt(i.pos+2)===m.dot?(i.pos+=3,ec(f.ellipsis)):(++i.pos,ec(f.dot))}();return;case m.leftParenthesis:++i.pos,ec(f.parenL);return;case m.rightParenthesis:++i.pos,ec(f.parenR);return;case m.semicolon:++i.pos,ec(f.semi);return;case m.comma:++i.pos,ec(f.comma);return;case m.leftSquareBracket:++i.pos,ec(f.bracketL);return;case m.rightSquareBracket:++i.pos,ec(f.bracketR);return;case m.leftCurlyBrace:o&&a.charCodeAt(i.pos+1)===m.verticalBar?eh(f.braceBarL,2):(++i.pos,ec(f.braceL));return;case m.rightCurlyBrace:++i.pos,ec(f.braceR);return;case m.colon:a.charCodeAt(i.pos+1)===m.colon?eh(f.doubleColon,2):(++i.pos,ec(f.colon));return;case m.questionMark:!function(){let e=a.charCodeAt(i.pos+1),t=a.charCodeAt(i.pos+2);e!==m.questionMark||o&&i.isType?e!==m.dot||t>=m.digit0&&t<=m.digit9?(++i.pos,ec(f.question)):(i.pos+=2,ec(f.questionDot)):t===m.equalsTo?eh(f.assign,3):eh(f.nullishCoalescing,2)}();return;case m.atSign:++i.pos,ec(f.at);return;case m.graveAccent:++i.pos,ec(f.backQuote);return;case m.digit0:{let e=a.charCodeAt(i.pos+1);if(e===m.lowercaseX||e===m.uppercaseX||e===m.lowercaseO||e===m.uppercaseO||e===m.lowercaseB||e===m.uppercaseB){!function(){for(i.pos+=2;;){let e=a.charCodeAt(i.pos);if(e>=m.digit0&&e<=m.digit9||e>=m.lowercaseA&&e<=m.lowercaseF||e>=m.uppercaseA&&e<=m.uppercaseF||e===m.underscore)i.pos++;else break}let e=a.charCodeAt(i.pos);e===m.lowercaseN?(++i.pos,ec(f.bigint)):ec(f.num)}();return}}case m.digit1:case m.digit2:case m.digit3:case m.digit4:case m.digit5:case m.digit6:case m.digit7:case m.digit8:case m.digit9:ef(!1);return;case m.quotationMark:case m.apostrophe:!function(e){for(i.pos++;;){if(i.pos>=a.length){B("Unterminated string constant");return}let t=a.charCodeAt(i.pos);if(t===m.backslash)i.pos++;else if(t===e)break;i.pos++}i.pos++,ec(f.string)}(e);return;case m.slash:!function(){let e=a.charCodeAt(i.pos+1);e===m.equalsTo?eh(f.assign,2):eh(f.slash,1)}();return;case m.percentSign:case m.asterisk:let t,n,r;t=e===m.asterisk?f.star:f.modulo,n=1,r=a.charCodeAt(i.pos+1),e===m.asterisk&&r===m.asterisk&&(n++,r=a.charCodeAt(i.pos+2),t=f.exponent),r===m.equalsTo&&a.charCodeAt(i.pos+2)!==m.greaterThan&&(n++,t=f.assign),eh(t,n);return;case m.verticalBar:case m.ampersand:!function(e){let t=a.charCodeAt(i.pos+1);if(t===e){a.charCodeAt(i.pos+2)===m.equalsTo?eh(f.assign,3):eh(e===m.verticalBar?f.logicalOR:f.logicalAND,2);return}if(e===m.verticalBar){if(t===m.greaterThan){eh(f.pipeline,2);return}if(t===m.rightCurlyBrace&&o){eh(f.braceBarR,2);return}}if(t===m.equalsTo){eh(f.assign,2);return}eh(e===m.verticalBar?f.bitwiseOR:f.bitwiseAND,1)}(e);return;case m.caret:!function(){let e=a.charCodeAt(i.pos+1);e===m.equalsTo?eh(f.assign,2):eh(f.bitwiseXOR,1)}();return;case m.plusSign:case m.dash:!function(e){let t=a.charCodeAt(i.pos+1);if(t===e){eh(f.preIncDec,2);return}t===m.equalsTo?eh(f.assign,2):e===m.plusSign?eh(f.plus,1):eh(f.minus,1)}(e);return;case m.lessThan:!function(){let e=a.charCodeAt(i.pos+1);if(e===m.lessThan){if(a.charCodeAt(i.pos+2)===m.equalsTo){eh(f.assign,3);return}i.isType?eh(f.lessThan,1):eh(f.bitShiftL,2);return}e===m.equalsTo?eh(f.relationalOrEqual,2):eh(f.lessThan,1)}();return;case m.greaterThan:eu();return;case m.equalsTo:case m.exclamationMark:!function(e){let t=a.charCodeAt(i.pos+1);if(t===m.equalsTo){eh(f.equality,a.charCodeAt(i.pos+2)===m.equalsTo?3:2);return}if(e===m.equalsTo&&t===m.greaterThan){i.pos+=2,ec(f.arrow);return}eh(e===m.equalsTo?f.eq:f.bang,1)}(e);return;case m.tilde:eh(f.tilde,1);return}B(`
                      Unexpected character '${String.fromCharCode(e)}'
                      `,i.pos)}function eh(e,t){i.pos+=t,ec(e)}function ed(){for(;;){let e=a.charCodeAt(i.pos);if(e>=m.digit0&&e<=m.digit9||e===m.underscore)i.pos++;else break}}function ef(e){let t=!1,n=!1;e||ed();let r=a.charCodeAt(i.pos);if(r===m.dot&&(++i.pos,ed(),r=a.charCodeAt(i.pos)),(r===m.uppercaseE||r===m.lowercaseE)&&(((r=a.charCodeAt(++i.pos))===m.plusSign||r===m.dash)&&++i.pos,ed(),r=a.charCodeAt(i.pos)),r===m.lowercaseN?(++i.pos,t=!0):r===m.lowercaseM&&(++i.pos,n=!0),t){ec(f.bigint);return}if(n){ec(f.decimal);return}ec(f.num)}function em(e,t=e.currentIndex()){let n=t+1;if(eg(e,n)){let r=e.identifierNameAtIndex(t);return{isType:!1,leftName:r,rightName:r,endIndex:n}}if(eg(e,++n))return{isType:!0,leftName:null,rightName:null,endIndex:n};if(eg(e,++n))return{isType:!1,leftName:e.identifierNameAtIndex(t),rightName:e.identifierNameAtIndex(t+2),endIndex:n};if(eg(e,++n))return{isType:!0,leftName:null,rightName:null,endIndex:n};throw Error(`
                      Unexpected
                      import /
                      export specifier at $ {
                          t
                      }
                      `)}function eg(e,t){let n=e.tokens[t];return n.type===f.braceR||n.type===f.comma}var ek=new Map([["quot",'"'],["amp","&"],["apos","'"],["lt","<"],["gt",">"],["nbsp","\xa0"],["iexcl","\xa1"],["cent","\xa2"],["pound","\xa3"],["curren","\xa4"],["yen","\xa5"],["brvbar","\xa6"],["sect","\xa7"],["uml","\xa8"],["copy","\xa9"],["ordf","\xaa"],["laquo","\xab"],["not","\xac"],["shy","\xad"],["reg","\xae"],["macr","\xaf"],["deg","\xb0"],["plusmn","\xb1"],["sup2","\xb2"],["sup3","\xb3"],["acute","\xb4"],["micro","\xb5"],["para","\xb6"],["middot","\xb7"],["cedil","\xb8"],["sup1","\xb9"],["ordm","\xba"],["raquo","\xbb"],["frac14","\xbc"],["frac12","\xbd"],["frac34","\xbe"],["iquest","\xbf"],["Agrave","\xc0"],["Aacute","\xc1"],["Acirc","\xc2"],["Atilde","\xc3"],["Auml","\xc4"],["Aring","\xc5"],["AElig","\xc6"],["Ccedil","\xc7"],["Egrave","\xc8"],["Eacute","\xc9"],["Ecirc","\xca"],["Euml","\xcb"],["Igrave","\xcc"],["Iacute","\xcd"],["Icirc","\xce"],["Iuml","\xcf"],["ETH","\xd0"],["Ntilde","\xd1"],["Ograve","\xd2"],["Oacute","\xd3"],["Ocirc","\xd4"],["Otilde","\xd5"],["Ouml","\xd6"],["times","\xd7"],["Oslash","\xd8"],["Ugrave","\xd9"],["Uacute","\xda"],["Ucirc","\xdb"],["Uuml","\xdc"],["Yacute","\xdd"],["THORN","\xde"],["szlig","\xdf"],["agrave","\xe0"],["aacute","\xe1"],["acirc","\xe2"],["atilde","\xe3"],["auml","\xe4"],["aring","\xe5"],["aelig","\xe6"],["ccedil","\xe7"],["egrave","\xe8"],["eacute","\xe9"],["ecirc","\xea"],["euml","\xeb"],["igrave","\xec"],["iacute","\xed"],["icirc","\xee"],["iuml","\xef"],["eth","\xf0"],["ntilde","\xf1"],["ograve","\xf2"],["oacute","\xf3"],["ocirc","\xf4"],["otilde","\xf5"],["ouml","\xf6"],["divide","\xf7"],["oslash","\xf8"],["ugrave","\xf9"],["uacute","\xfa"],["ucirc","\xfb"],["uuml","\xfc"],["yacute","\xfd"],["thorn","\xfe"],["yuml","\xff"],["OElig","Œ"],["oelig","œ"],["Scaron","Š"],["scaron","š"],["Yuml","Ÿ"],["fnof","ƒ"],["circ","ˆ"],["tilde","˜"],["Alpha","Α"],["Beta","Β"],["Gamma","Γ"],["Delta","Δ"],["Epsilon","Ε"],["Zeta","Ζ"],["Eta","Η"],["Theta","Θ"],["Iota","Ι"],["Kappa","Κ"],["Lambda","Λ"],["Mu","Μ"],["Nu","Ν"],["Xi","Ξ"],["Omicron","Ο"],["Pi","Π"],["Rho","Ρ"],["Sigma","Σ"],["Tau","Τ"],["Upsilon","Υ"],["Phi","Φ"],["Chi","Χ"],["Psi","Ψ"],["Omega","Ω"],["alpha","α"],["beta","β"],["gamma","γ"],["delta","δ"],["epsilon","ε"],["zeta","ζ"],["eta","η"],["theta","θ"],["iota","ι"],["kappa","κ"],["lambda","λ"],["mu","μ"],["nu","ν"],["xi","ξ"],["omicron","ο"],["pi","π"],["rho","ρ"],["sigmaf","ς"],["sigma","σ"],["tau","τ"],["upsilon","υ"],["phi","φ"],["chi","χ"],["psi","ψ"],["omega","ω"],["thetasym","ϑ"],["upsih","ϒ"],["piv","ϖ"],["ensp"," "],["emsp"," "],["thinsp"," "],["zwnj","‌"],["zwj","‍"],["lrm","‎"],["rlm","‏"],["ndash","–"],["mdash","—"],["lsquo","‘"],["rsquo","’"],["sbquo","‚"],["ldquo","“"],["rdquo","”"],["bdquo","„"],["dagger","†"],["Dagger","‡"],["bull","•"],["hellip","…"],["permil","‰"],["prime","′"],["Prime","″"],["lsaquo","‹"],["rsaquo","›"],["oline","‾"],["frasl","⁄"],["euro","€"],["image","ℑ"],["weierp","℘"],["real","ℜ"],["trade","™"],["alefsym","ℵ"],["larr","←"],["uarr","↑"],["rarr","→"],["darr","↓"],["harr","↔"],["crarr","↵"],["lArr","⇐"],["uArr","⇑"],["rArr","⇒"],["dArr","⇓"],["hArr","⇔"],["forall","∀"],["part","∂"],["exist","∃"],["empty","∅"],["nabla","∇"],["isin","∈"],["notin","∉"],["ni","∋"],["prod","∏"],["sum","∑"],["minus","−"],["lowast","∗"],["radic","√"],["prop","∝"],["infin","∞"],["ang","∠"],["and","∧"],["or","∨"],["cap","∩"],["cup","∪"],["int","∫"],["there4","∴"],["sim","∼"],["cong","≅"],["asymp","≈"],["ne","≠"],["equiv","≡"],["le","≤"],["ge","≥"],["sub","⊂"],["sup","⊃"],["nsub","⊄"],["sube","⊆"],["supe","⊇"],["oplus","⊕"],["otimes","⊗"],["perp","⊥"],["sdot","⋅"],["lceil","⌈"],["rceil","⌉"],["lfloor","⌊"],["rfloor","⌋"],["lang","〈"],["rang","〉"],["loz","◊"],["spades","♠"],["clubs","♣"],["hearts","♥"],["diams","♦"]]);function ey(e){let[t,n]=eb(e.jsxPragma||"React.createElement"),[r,s]=eb(e.jsxFragmentPragma||"React.Fragment");return{base:t,suffix:n,fragmentBase:r,fragmentSuffix:s}}function eb(e){let t=e.indexOf(".");return -1===t&&(t=e.length),[e.slice(0,t),e.slice(t)]}class e_{getPrefixCode(){return""}getHoistedCode(){return""}getSuffixCode(){return""}}class ex extends e_{__init(){this.lastLineNumber=1}__init2(){this.lastIndex=0}__init3(){this.filenameVarName=null}__init4(){this.esmAutomaticImportNameResolutions={}}__init5(){this.cjsAutomaticModuleNameResolutions={}}constructor(e,t,n,r,s){super(),this.rootTransformer=e,this.tokens=t,this.importProcessor=n,this.nameManager=r,this.options=s,ex.prototype.__init.call(this),ex.prototype.__init2.call(this),ex.prototype.__init3.call(this),ex.prototype.__init4.call(this),ex.prototype.__init5.call(this),this.jsxPragmaInfo=ey(s),this.isAutomaticRuntime="automatic"===s.jsxRuntime,this.jsxImportSource=s.jsxImportSource||"react"}process(){return!!this.tokens.matches1(f.jsxTagStart)&&(this.processJSXTag(),!0)}getPrefixCode(){let e="";if(this.filenameVarName&&(e+=`
                      const $ {
                          this.filenameVarName
                      } = $ {
                          JSON.stringify(this.options.filePath || "")
                      };
                      `),this.isAutomaticRuntime){if(this.importProcessor)for(let[t,n]of Object.entries(this.cjsAutomaticModuleNameResolutions))e+=`
                      var $ {
                          n
                      } = require("${t}");
                      `;else{let{createElement:t,...n}=this.esmAutomaticImportNameResolutions;t&&(e+=`
                      import {
                          createElement as $ {
                              t
                          }
                      } from "${this.jsxImportSource}";
                      `);let r=Object.entries(n).map(([e,t])=>`
                      $ {
                          e
                      }
                      as $ {
                          t
                      }
                      `).join(", ");if(r){let t=this.jsxImportSource+(this.options.production?"/jsx-runtime":"/jsx-dev-runtime");e+=`
                      import {
                          $ {
                              r
                          }
                      } from "${t}";
                      `}}}return e}processJSXTag(){let{jsxRole:e,start:t}=this.tokens.currentToken(),n=this.options.production?null:this.getElementLocationCode(t);this.isAutomaticRuntime&&e!==k.KeyAfterPropSpread?this.transformTagToJSXFunc(n,e):this.transformTagToCreateElement(n)}getElementLocationCode(e){let t=this.getLineNumberForIndex(e);return`
                      lineNumber: $ {
                          t
                      }
                      `}getLineNumberForIndex(e){let t=this.tokens.code;for(;this.lastIndex<e&&this.lastIndex<t.length;)"\n"===t[this.lastIndex]&&this.lastLineNumber++,this.lastIndex++;return this.lastLineNumber}transformTagToJSXFunc(e,t){let n=t===k.StaticChildren;this.tokens.replaceToken(this.getJSXFuncInvocationCode(n));let r=null;if(this.tokens.matches1(f.jsxTagEnd))this.tokens.replaceToken(`
                      $ {
                          this.getFragmentCode()
                      }, {
                          `),this.processAutomaticChildrenAndEndProps(t);else{if(this.processTagIntro(),this.tokens.appendCode(", {"),r=this.processProps(!0),this.tokens.matches2(f.slash,f.jsxTagEnd))this.tokens.appendCode("}");else if(this.tokens.matches1(f.jsxTagEnd))this.tokens.removeToken(),this.processAutomaticChildrenAndEndProps(t);else throw Error("Expected either /> or > at the end of the tag.");r&&this.tokens.appendCode(`,
                          $ {
                              r
                          }
                          `)}for(this.options.production||(null===r&&this.tokens.appendCode(", void 0"),this.tokens.appendCode(`,
                          $ {
                              n
                          },
                          $ {
                              this.getDevSource(e)
                          },
                          this`)),this.tokens.removeInitialToken();!this.tokens.matches1(f.jsxTagEnd);)this.tokens.removeToken();this.tokens.replaceToken(")")}transformTagToCreateElement(e){if(this.tokens.replaceToken(this.getCreateElementInvocationCode()),this.tokens.matches1(f.jsxTagEnd))this.tokens.replaceToken(`
                          $ {
                              this.getFragmentCode()
                          },
                          null`),this.processChildren(!0);else if(this.processTagIntro(),this.processPropsObjectWithDevInfo(e),this.tokens.matches2(f.slash,f.jsxTagEnd));else if(this.tokens.matches1(f.jsxTagEnd))this.tokens.removeToken(),this.processChildren(!0);else throw Error("Expected either /> or > at the end of the tag.");for(this.tokens.removeInitialToken();!this.tokens.matches1(f.jsxTagEnd);)this.tokens.removeToken();this.tokens.replaceToken(")")}getJSXFuncInvocationCode(e){return this.options.production?e?this.claimAutoImportedFuncInvocation("jsxs","/jsx-runtime"):this.claimAutoImportedFuncInvocation("jsx","/jsx-runtime"):this.claimAutoImportedFuncInvocation("jsxDEV","/jsx-dev-runtime")}getCreateElementInvocationCode(){if(this.isAutomaticRuntime)return this.claimAutoImportedFuncInvocation("createElement","");{let{jsxPragmaInfo:e}=this,t=this.importProcessor&&this.importProcessor.getIdentifierReplacement(e.base)||e.base;return`
                          $ {
                              t
                          }
                          $ {
                              e.suffix
                          }(`}}getFragmentCode(){if(this.isAutomaticRuntime)return this.claimAutoImportedName("Fragment",this.options.production?"/jsx-runtime":"/jsx-dev-runtime");{let{jsxPragmaInfo:e}=this,t=this.importProcessor&&this.importProcessor.getIdentifierReplacement(e.fragmentBase)||e.fragmentBase;return t+e.fragmentSuffix}}claimAutoImportedFuncInvocation(e,t){let n=this.claimAutoImportedName(e,t);return this.importProcessor?`
                              $ {
                                  n
                              }.call(void 0, `:`
                                  $ {
                                      n
                                  }(`}claimAutoImportedName(e,t){if(!this.importProcessor)return this.esmAutomaticImportNameResolutions[e]||(this.esmAutomaticImportNameResolutions[e]=this.nameManager.claimFreeName(`
                                      _$ {
                                          e
                                      }
                                      `)),this.esmAutomaticImportNameResolutions[e];{let n=this.jsxImportSource+t;return this.cjsAutomaticModuleNameResolutions[n]||(this.cjsAutomaticModuleNameResolutions[n]=this.importProcessor.getFreeIdentifierForPath(n)),`
                                      $ {
                                          this.cjsAutomaticModuleNameResolutions[n]
                                      }.$ {
                                          e
                                      }
                                      `}}processTagIntro(){let e=this.tokens.currentIndex()+1;for(;this.tokens.tokens[e].isType||!this.tokens.matches2AtIndex(e-1,f.jsxName,f.jsxName)&&!this.tokens.matches2AtIndex(e-1,f.greaterThan,f.jsxName)&&!this.tokens.matches1AtIndex(e,f.braceL)&&!this.tokens.matches1AtIndex(e,f.jsxTagEnd)&&!this.tokens.matches2AtIndex(e,f.slash,f.jsxTagEnd);)e++;if(e===this.tokens.currentIndex()+1){let e=this.tokens.identifierName();eT(e)&&this.tokens.replaceToken(`
                                      '${e}'
                                      `)}for(;this.tokens.currentIndex()<e;)this.rootTransformer.processToken()}processPropsObjectWithDevInfo(e){let t=this.options.production?"":`
                                      __self: this, __source: $ {
                                          this.getDevSource(e)
                                      }
                                      `;if(!this.tokens.matches1(f.jsxName)&&!this.tokens.matches1(f.braceL)){t?this.tokens.appendCode(`, {
                                          $ {
                                              t
                                          }
                                      }
                                      `):this.tokens.appendCode(", null");return}this.tokens.appendCode(", {"),this.processProps(!1),t?this.tokens.appendCode(`
                                      $ {
                                          t
                                      }
                                  }
                                  `):this.tokens.appendCode("}")}processProps(e){let t=null;for(;;){if(this.tokens.matches2(f.jsxName,f.eq)){let n=this.tokens.identifierName();if(e&&"key"===n){null!==t&&this.tokens.appendCode(t.replace(/[^\n]/g,"")),this.tokens.removeToken(),this.tokens.removeToken();let e=this.tokens.snapshot();this.processPropValue(),t=this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(e);continue}this.processPropName(n),this.tokens.replaceToken(": "),this.processPropValue()}else if(this.tokens.matches1(f.jsxName)){let e=this.tokens.identifierName();this.processPropName(e),this.tokens.appendCode(": true")}else if(this.tokens.matches1(f.braceL))this.tokens.replaceToken(""),this.rootTransformer.processBalancedCode(),this.tokens.replaceToken("");else break;this.tokens.appendCode(",")}return t}processPropName(e){e.includes("-")?this.tokens.replaceToken(`
                                  '${e}'
                                  `):this.tokens.copyToken()}processPropValue(){this.tokens.matches1(f.braceL)?(this.tokens.replaceToken(""),this.rootTransformer.processBalancedCode(),this.tokens.replaceToken("")):this.tokens.matches1(f.jsxTagStart)?this.processJSXTag():this.processStringPropValue()}processStringPropValue(){let e=this.tokens.currentToken(),t=this.tokens.code.slice(e.start+1,e.end-1),n=ev(t),r=function(e){let t="";for(let n=0;n<e.length;n++){let r=e[n];if("\n"===r){if(/\s/.test(e[n+1]))for(t+=" ";n<e.length&&/\s/.test(e[n+1]);)n++;else t+="\n"}else if("&"===r){let{entity:r,newI:s}=eE(e,n+1);t+=r,n=s-1}else t+=r}return JSON.stringify(t)}(t);this.tokens.replaceToken(r+n)}processAutomaticChildrenAndEndProps(e){e===k.StaticChildren?(this.tokens.appendCode(" children: ["),this.processChildren(!1),this.tokens.appendCode("]}")):(e===k.OneChild&&this.tokens.appendCode(" children: "),this.processChildren(!1),this.tokens.appendCode("}"))}processChildren(e){let t=e;for(;;){if(this.tokens.matches2(f.jsxTagStart,f.slash))return;let e=!1;if(this.tokens.matches1(f.braceL))this.tokens.matches2(f.braceL,f.braceR)?(this.tokens.replaceToken(""),this.tokens.replaceToken("")):(this.tokens.replaceToken(t?", ":""),this.rootTransformer.processBalancedCode(),this.tokens.replaceToken(""),e=!0);else if(this.tokens.matches1(f.jsxTagStart))this.tokens.appendCode(t?", ":""),this.processJSXTag(),e=!0;else if(this.tokens.matches1(f.jsxText)||this.tokens.matches1(f.jsxEmptyText))e=this.processChildTextElement(t);else throw Error("Unexpected token when processing JSX children.");e&&(t=!0)}}processChildTextElement(e){let t=this.tokens.currentToken(),n=this.tokens.code.slice(t.start,t.end),r=ev(n),s=function(e){let t="",n="",r=!1,s=!1;for(let o=0;o<e.length;o++){let i=e[o];if(" "===i||"	"===i||"\r"===i)r||(n+=i);else if("\n"===i)n="",r=!0;else{if(s&&r&&(t+=" "),t+=n,n="","&"===i){let{entity:n,newI:r}=eE(e,o+1);o=r-1,t+=n}else t+=i;s=!0,r=!1}}return r||(t+=n),JSON.stringify(t)}(n);return'""'===s?(this.tokens.replaceToken(r),!1):(this.tokens.replaceToken(`
                                  $ {
                                      e ? ", " : ""
                                  }
                                  $ {
                                      s
                                  }
                                  $ {
                                      r
                                  }
                                  `),!0)}getDevSource(e){return` {
                                      fileName: $ {
                                          this.getFilenameVarName()
                                      },
                                      $ {
                                          e
                                      }
                                  }
                                  `}getFilenameVarName(){return this.filenameVarName||(this.filenameVarName=this.nameManager.claimFreeName("_jsxFileName")),this.filenameVarName}}function eT(e){let t=e.charCodeAt(0);return t>=m.lowercaseA&&t<=m.lowercaseZ}function ev(e){let t=0,n=0;for(let r of e)"\n"===r?(t++,n=0):" "===r&&n++;return"\n".repeat(t)+" ".repeat(n)}function eE(e,t){let n,r="",s=0,o=t;if("#"===e[o]){var i,a;let t,r=10;if("x"===e[++o])for(r=16,t=++o;o<e.length&&((i=e.charCodeAt(o))>=m.digit0&&i<=m.digit9||i>=m.lowercaseA&&i<=m.lowercaseF||i>=m.uppercaseA&&i<=m.uppercaseF);)o++;else for(t=o;o<e.length&&(a=e.charCodeAt(o))>=m.digit0&&a<=m.digit9;)o++;if(";"===e[o]){let s=e.slice(t,o);s&&(o++,n=String.fromCodePoint(parseInt(s,r)))}}else for(;o<e.length&&s++<10;){let t=e[o];if(o++,";"===t){n=ek.get(r);break}r+=t}return n?{entity:n,newI:o}:{entity:"&",newI:t}}function ew(e,t){let n=ey(t),r=new Set;for(let t=0;t<e.tokens.length;t++){let s=e.tokens[t];if(s.type!==f.name||s.isType||s.identifierRole!==g.Access&&s.identifierRole!==g.ObjectShorthand&&s.identifierRole!==g.ExportAccess||s.shadowsGlobal||r.add(e.identifierNameForToken(s)),s.type===f.jsxTagStart&&r.add(n.base),s.type===f.jsxTagStart&&t+1<e.tokens.length&&e.tokens[t+1].type===f.jsxTagEnd&&(r.add(n.base),r.add(n.fragmentBase)),s.type===f.jsxName&&s.identifierRole===g.Access){let n=e.identifierNameForToken(s);eT(n)&&e.tokens[t+1].type!==f.dot||r.add(e.identifierNameForToken(s))}}return r}class eI{__init(){this.nonTypeIdentifiers=new Set}__init2(){this.importInfoByPath=new Map}__init3(){this.importsToReplace=new Map}__init4(){this.identifierReplacements=new Map}__init5(){this.exportBindingsByLocalName=new Map}constructor(e,t,n,r,s,o){this.nameManager=e,this.tokens=t,this.enableLegacyTypeScriptModuleInterop=n,this.options=r,this.isTypeScriptTransformEnabled=s,this.helperManager=o,eI.prototype.__init.call(this),eI.prototype.__init2.call(this),eI.prototype.__init3.call(this),eI.prototype.__init4.call(this),eI.prototype.__init5.call(this)}preprocessTokens(){for(let e=0;e<this.tokens.tokens.length;e++)this.tokens.matches1AtIndex(e,f._import)&&!this.tokens.matches3AtIndex(e,f._import,f.name,f.eq)&&this.preprocessImportAtIndex(e),this.tokens.matches1AtIndex(e,f._export)&&!this.tokens.matches2AtIndex(e,f._export,f.eq)&&this.preprocessExportAtIndex(e);this.generateImportReplacements()}pruneTypeOnlyImports(){for(let[e,t]of(this.nonTypeIdentifiers=ew(this.tokens,this.options),this.importInfoByPath.entries())){if(t.hasBareImport||t.hasStarExport||t.exportStarNames.length>0||t.namedExports.length>0)continue;let n=[...t.defaultNames,...t.wildcardNames,...t.namedImports.map(({localName:e})=>e)];n.every(e=>this.isTypeName(e))&&this.importsToReplace.set(e,"")}}isTypeName(e){return this.isTypeScriptTransformEnabled&&!this.nonTypeIdentifiers.has(e)}generateImportReplacements(){for(let[e,t]of this.importInfoByPath.entries()){let n;let{defaultNames:r,wildcardNames:s,namedImports:o,namedExports:i,exportStarNames:a,hasStarExport:l}=t;if(0===r.length&&0===s.length&&0===o.length&&0===i.length&&0===a.length&&!l){this.importsToReplace.set(e,`
                                  require('${e}');
                                  `);continue}let c=this.getFreeIdentifierForPath(e);n=this.enableLegacyTypeScriptModuleInterop?c:s.length>0?s[0]:this.getFreeIdentifierForPath(e);let u=`
                                  var $ {
                                      c
                                  } = require('${e}');
                                  `;if(s.length>0)for(let e of s){let t=this.enableLegacyTypeScriptModuleInterop?c:`
                                  $ {
                                      this.helperManager.getHelperName("interopRequireWildcard")
                                  }($ {
                                      c
                                  })`;u+=`
                                  var $ {
                                      e
                                  } = $ {
                                      t
                                  };
                                  `}else a.length>0&&n!==c?u+=`
                                  var $ {
                                      n
                                  } = $ {
                                      this.helperManager.getHelperName("interopRequireWildcard")
                                  }($ {
                                      c
                                  });
                                  `:r.length>0&&n!==c&&(u+=`
                                  var $ {
                                      n
                                  } = $ {
                                      this.helperManager.getHelperName("interopRequireDefault")
                                  }($ {
                                      c
                                  });
                                  `);for(let{importedName:e,localName:t}of i)u+=`
                                  $ {
                                      this.helperManager.getHelperName("createNamedExportFrom")
                                  }($ {
                                      c
                                  }, '${t}', '${e}');
                                  `;for(let e of a)u+=`
                                  exports.$ {
                                      e
                                  } = $ {
                                      n
                                  };
                                  `;for(let t of(l&&(u+=`
                                  $ {
                                      this.helperManager.getHelperName("createStarExport")
                                  }($ {
                                      c
                                  });
                                  `),this.importsToReplace.set(e,u),r))this.identifierReplacements.set(t,`
                                  $ {
                                      n
                                  }.default`);for(let{importedName:e,localName:t}of o)this.identifierReplacements.set(t,`
                                  $ {
                                      c
                                  }.$ {
                                      e
                                  }
                                  `)}}getFreeIdentifierForPath(e){let t=e.split("/"),n=t[t.length-1],r=n.replace(/\W/g,"");return this.nameManager.claimFreeName(`
                                  _$ {
                                      r
                                  }
                                  `)}preprocessImportAtIndex(e){let t=[],n=[],r=[];if(e++,(this.tokens.matchesContextualAtIndex(e,d._type)||this.tokens.matches1AtIndex(e,f._typeof))&&!this.tokens.matches1AtIndex(e+1,f.comma)&&!this.tokens.matchesContextualAtIndex(e+1,d._from)||this.tokens.matches1AtIndex(e,f.parenL))return;if(this.tokens.matches1AtIndex(e,f.name)&&(t.push(this.tokens.identifierNameAtIndex(e)),e++,this.tokens.matches1AtIndex(e,f.comma)&&e++),this.tokens.matches1AtIndex(e,f.star)&&(e+=2,n.push(this.tokens.identifierNameAtIndex(e)),e++),this.tokens.matches1AtIndex(e,f.braceL)){let n=this.getNamedImports(e+1);for(let s of(e=n.newIndex,n.namedImports))"default"===s.importedName?t.push(s.localName):r.push(s)}if(this.tokens.matchesContextualAtIndex(e,d._from)&&e++,!this.tokens.matches1AtIndex(e,f.string))throw Error("Expected string token at the end of import statement.");let s=this.tokens.stringValueAtIndex(e),o=this.getImportInfo(s);o.defaultNames.push(...t),o.wildcardNames.push(...n),o.namedImports.push(...r),0===t.length&&0===n.length&&0===r.length&&(o.hasBareImport=!0)}preprocessExportAtIndex(e){if(this.tokens.matches2AtIndex(e,f._export,f._var)||this.tokens.matches2AtIndex(e,f._export,f._let)||this.tokens.matches2AtIndex(e,f._export,f._const))this.preprocessVarExportAtIndex(e);else if(this.tokens.matches2AtIndex(e,f._export,f._function)||this.tokens.matches2AtIndex(e,f._export,f._class)){let t=this.tokens.identifierNameAtIndex(e+2);this.addExportBinding(t,t)}else if(this.tokens.matches3AtIndex(e,f._export,f.name,f._function)){let t=this.tokens.identifierNameAtIndex(e+3);this.addExportBinding(t,t)}else this.tokens.matches2AtIndex(e,f._export,f.braceL)?this.preprocessNamedExportAtIndex(e):this.tokens.matches2AtIndex(e,f._export,f.star)&&this.preprocessExportStarAtIndex(e)}preprocessVarExportAtIndex(e){let t=0;for(let n=e+2;;n++)if(this.tokens.matches1AtIndex(n,f.braceL)||this.tokens.matches1AtIndex(n,f.dollarBraceL)||this.tokens.matches1AtIndex(n,f.bracketL))t++;else if(this.tokens.matches1AtIndex(n,f.braceR)||this.tokens.matches1AtIndex(n,f.bracketR))t--;else if(0!==t||this.tokens.matches1AtIndex(n,f.name)){if(this.tokens.matches1AtIndex(1,f.eq)){let e=this.tokens.currentToken().rhsEndIndex;if(null==e)throw Error("Expected = token with an end index.");n=e-1}else{let e=this.tokens.tokens[n];if(H(e)){let e=this.tokens.identifierNameAtIndex(n);this.identifierReplacements.set(e,`
                                  exports.$ {
                                      e
                                  }
                                  `)}}}else break}preprocessNamedExportAtIndex(e){e+=2;let{newIndex:t,namedImports:n}=this.getNamedImports(e);if(e=t,this.tokens.matchesContextualAtIndex(e,d._from))e++;else{for(let{importedName:e,localName:t}of n)this.addExportBinding(e,t);return}if(!this.tokens.matches1AtIndex(e,f.string))throw Error("Expected string token at the end of import statement.");let r=this.tokens.stringValueAtIndex(e),s=this.getImportInfo(r);s.namedExports.push(...n)}preprocessExportStarAtIndex(e){let t=null;if(this.tokens.matches3AtIndex(e,f._export,f.star,f._as)?(e+=3,t=this.tokens.identifierNameAtIndex(e),e+=2):e+=3,!this.tokens.matches1AtIndex(e,f.string))throw Error("Expected string token at the end of star export statement.");let n=this.tokens.stringValueAtIndex(e),r=this.getImportInfo(n);null!==t?r.exportStarNames.push(t):r.hasStarExport=!0}getNamedImports(e){let t=[];for(;;){if(this.tokens.matches1AtIndex(e,f.braceR)){e++;break}let n=em(this.tokens,e);if(e=n.endIndex,n.isType||t.push({importedName:n.leftName,localName:n.rightName}),this.tokens.matches2AtIndex(e,f.comma,f.braceR)){e+=2;break}if(this.tokens.matches1AtIndex(e,f.braceR)){e++;break}if(this.tokens.matches1AtIndex(e,f.comma))e++;else throw Error(`
                                  Unexpected token: $ {
                                      JSON.stringify(this.tokens.tokens[e])
                                  }
                                  `)}return{newIndex:e,namedImports:t}}getImportInfo(e){let t=this.importInfoByPath.get(e);if(t)return t;let n={defaultNames:[],wildcardNames:[],namedImports:[],namedExports:[],hasBareImport:!1,exportStarNames:[],hasStarExport:!1};return this.importInfoByPath.set(e,n),n}addExportBinding(e,t){this.exportBindingsByLocalName.has(e)||this.exportBindingsByLocalName.set(e,[]),this.exportBindingsByLocalName.get(e).push(t)}claimImportCode(e){let t=this.importsToReplace.get(e);return this.importsToReplace.set(e,""),t||""}getIdentifierReplacement(e){return this.identifierReplacements.get(e)||null}resolveExportBinding(e){let t=this.exportBindingsByLocalName.get(e);return t&&0!==t.length?t.map(e=>`
                                  exports.$ {
                                      e
                                  }
                                  `).join(" = "):null}getGlobalNames(){return new Set([...this.identifierReplacements.keys(),...this.exportBindingsByLocalName.keys()])}}var eA=n(2509);let eS={require:`
                                  import {
                                      createRequire as CREATE_REQUIRE_NAME
                                  } from "module";
                                  const require = CREATE_REQUIRE_NAME(import.meta.url);
                                  `,interopRequireWildcard:`
                                  function interopRequireWildcard(obj) {
                                      if (obj && obj.__esModule) {
                                          return obj;
                                      } else {
                                          var newObj = {};
                                          if (obj != null) {
                                              for (var key in obj) {
                                                  if (Object.prototype.hasOwnProperty.call(obj, key)) {
                                                      newObj[key] = obj[key];
                                                  }
                                              }
                                          }
                                          newObj.default = obj;
                                          return newObj;
                                      }
                                  }
                                  `,interopRequireDefault:`
                                  function interopRequireDefault(obj) {
                                      return obj && obj.__esModule ? obj : {
                                          default: obj
                                      };
                                  }
                                  `,createNamedExportFrom:`
                                  function createNamedExportFrom(obj, localName, importedName) {
                                      Object.defineProperty(exports, localName, {
                                          enumerable: true,
                                          configurable: true,
                                          get: () => obj[importedName]
                                      });
                                  }
                                  `,createStarExport:`
                                  function createStarExport(obj) {
                                      Object.keys(obj)
                                          .filter((key) => key !== "default" && key !== "__esModule")
                                          .forEach((key) => {
                                              if (exports.hasOwnProperty(key)) {
                                                  return;
                                              }
                                              Object.defineProperty(exports, key, {
                                                  enumerable: true,
                                                  configurable: true,
                                                  get: () => obj[key]
                                              });
                                          });
                                  }
                                  `,nullishCoalesce:`
                                  function nullishCoalesce(lhs, rhsFn) {
                                      if (lhs != null) {
                                          return lhs;
                                      } else {
                                          return rhsFn();
                                      }
                                  }
                                  `,asyncNullishCoalesce:`
                                  async function asyncNullishCoalesce(lhs, rhsFn) {
                                      if (lhs != null) {
                                          return lhs;
                                      } else {
                                          return await rhsFn();
                                      }
                                  }
                                  `,optionalChain:`
                                  function optionalChain(ops) {
                                      let lastAccessLHS = undefined;
                                      let value = ops[0];
                                      let i = 1;
                                      while (i < ops.length) {
                                          const op = ops[i];
                                          const fn = ops[i + 1];
                                          i += 2;
                                          if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
                                              return undefined;
                                          }
                                          if (op === 'access' || op === 'optionalAccess') {
                                              lastAccessLHS = value;
                                              value = fn(value);
                                          } else if (op === 'call' || op === 'optionalCall') {
                                              value = fn((...args) => value.call(lastAccessLHS, ...args));
                                              lastAccessLHS = undefined;
                                          }
                                      }
                                      return value;
                                  }
                                  `,asyncOptionalChain:`
                                  async function asyncOptionalChain(ops) {
                                      let lastAccessLHS = undefined;
                                      let value = ops[0];
                                      let i = 1;
                                      while (i < ops.length) {
                                          const op = ops[i];
                                          const fn = ops[i + 1];
                                          i += 2;
                                          if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
                                              return undefined;
                                          }
                                          if (op === 'access' || op === 'optionalAccess') {
                                              lastAccessLHS = value;
                                              value = await fn(value);
                                          } else if (op === 'call' || op === 'optionalCall') {
                                              value = await fn((...args) => value.call(lastAccessLHS, ...args));
                                              lastAccessLHS = undefined;
                                          }
                                      }
                                      return value;
                                  }
                                  `,optionalChainDelete:`
                                  function optionalChainDelete(ops) {
                                      const result = OPTIONAL_CHAIN_NAME(ops);
                                      return result == null ? true : result;
                                  }
                                  `,asyncOptionalChainDelete:`
                                  async function asyncOptionalChainDelete(ops) {
                                      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);
                                      return result == null ? true : result;
                                  }
                                  `};class eC{__init(){this.helperNames={}}__init2(){this.createRequireName=null}constructor(e){this.nameManager=e,eC.prototype.__init.call(this),eC.prototype.__init2.call(this)}getHelperName(e){let t=this.helperNames[e];return t||(t=this.nameManager.claimFreeName(`
                                  _$ {
                                      e
                                  }
                                  `),this.helperNames[e]=t),t}emitHelpers(){let e="";for(let[t,n]of(this.helperNames.optionalChainDelete&&this.getHelperName("optionalChain"),this.helperNames.asyncOptionalChainDelete&&this.getHelperName("asyncOptionalChain"),Object.entries(eS))){let r=this.helperNames[t],s=n;"optionalChainDelete"===t?s=s.replace("OPTIONAL_CHAIN_NAME",this.helperNames.optionalChain):"asyncOptionalChainDelete"===t?s=s.replace("ASYNC_OPTIONAL_CHAIN_NAME",this.helperNames.asyncOptionalChain):"require"===t&&(null===this.createRequireName&&(this.createRequireName=this.nameManager.claimFreeName("_createRequire")),s=s.replace(/CREATE_REQUIRE_NAME/g,this.createRequireName)),r&&(e+=" "+s.replace(t,r).replace(/\s+/g," ").trim())}return e}}function eR(e,t,n){(function(e,t){for(let n of e.tokens)if(n.type===f.name&&function(e){let t=e.identifierRole;return t===g.FunctionScopedDeclaration||t===g.BlockScopedDeclaration||t===g.ObjectShorthandFunctionScopedDeclaration||t===g.ObjectShorthandBlockScopedDeclaration}(n)&&t.has(e.identifierNameForToken(n)))return!0;return!1})(e,n)&&function(e,t,n){let r=[],s=t.length-1;for(let o=e.tokens.length-1;;o--){for(;r.length>0&&r[r.length-1].startTokenIndex===o+1;)r.pop();for(;s>=0&&t[s].endTokenIndex===o+1;)r.push(t[s]),s--;if(o<0)break;let i=e.tokens[o],a=e.identifierNameForToken(i);if(r.length>1&&i.type===f.name&&n.has(a)){if(function(e){let t=e.identifierRole;return t===g.TopLevelDeclaration||t===g.BlockScopedDeclaration||t===g.ObjectShorthandTopLevelDeclaration||t===g.ObjectShorthandBlockScopedDeclaration}(i))eN(r[r.length-1],e,a);else if(function(e){let t=e.identifierRole;return t===g.FunctionScopedDeclaration||t===g.ObjectShorthandFunctionScopedDeclaration}(i)){let t=r.length-1;for(;t>0&&!r[t].isFunctionScope;)t--;if(t<0)throw Error("Did not find parent function scope.");eN(r[t],e,a)}}}if(r.length>0)throw Error("Expected empty scope stack after processing file.")}(e,t,n)}function eN(e,t,n){for(let r=e.startTokenIndex;r<e.endTokenIndex;r++){let e=t.tokens[r];(e.type===f.name||e.type===f.jsxName)&&t.identifierNameForToken(e)===n&&(e.shadowsGlobal=!0)}}class eL{__init(){this.usedNames=new Set}constructor(e,t){eL.prototype.__init.call(this),this.usedNames=new Set(function(e,t){let n=[];for(let r of t)r.type===f.name&&n.push(e.slice(r.start,r.end));return n}(e,t))}claimFreeName(e){let t=this.findFreeName(e);return this.usedNames.add(t),t}findFreeName(e){if(!this.usedNames.has(e))return e;let t=2;for(;this.usedNames.has(e+String(t));)t++;return e+String(t)}}var eO=n(1074);let eD=eO.union(eO.lit("jsx"),eO.lit("typescript"),eO.lit("flow"),eO.lit("imports"),eO.lit("react-hot-loader"),eO.lit("jest")),eF=eO.iface([],{compiledFilename:"string"}),eP=eO.iface([],{transforms:eO.array("Transform"),disableESTransforms:eO.opt("boolean"),jsxRuntime:eO.opt(eO.union(eO.lit("classic"),eO.lit("automatic"),eO.lit("preserve"))),production:eO.opt("boolean"),jsxImportSource:eO.opt("string"),jsxPragma:eO.opt("string"),jsxFragmentPragma:eO.opt("string"),preserveDynamicImport:eO.opt("boolean"),injectCreateRequireForImportRequire:eO.opt("boolean"),enableLegacyTypeScriptModuleInterop:eO.opt("boolean"),enableLegacyBabel5ModuleInterop:eO.opt("boolean"),sourceMapOptions:eO.opt("SourceMapOptions"),filePath:eO.opt("string")}),{Options:eB}=(0,eO.createCheckers)({Transform:eD,SourceMapOptions:eF,Options:eP});function ej(e){tz(),e$(e)}function eM(){tz(),i.tokens[i.tokens.length-1].identifierRole=g.ImportDeclaration}function e$(e){let t;t=0===i.scopeDepth?g.TopLevelDeclaration:e?g.BlockScopedDeclaration:g.FunctionScopedDeclaration,i.tokens[i.tokens.length-1].identifierRole=t}function eq(e){switch(i.type){case f._this:{let e=Y(0);W(),X(e);return}case f._yield:case f.name:i.type=f.name,ej(e);return;case f.bracketL:W(),eU(f.bracketR,e,!0);return;case f.braceL:tj(!0,e);return;default:B()}}function eU(e,t,n=!1,r=!1,s=0){let o=!0,a=!1,l=i.tokens.length;for(;!Z(e)&&!i.error;)if(o?o=!1:(P(f.comma),i.tokens[i.tokens.length-1].contextId=s,!a&&i.tokens[l].isType&&(i.tokens[i.tokens.length-1].isType=!0,a=!0)),n&&Q(f.comma));else if(Z(e))break;else if(Q(f.ellipsis)){W(),eq(t),eG(),Z(f.comma),P(e);break}else r&&eW([d._public,d._protected,d._private,d._readonly,d._override]),eH(t),eG(),eH(t,!0)}function eG(){o?function(){let e=Y(0);Z(f.question),Q(f.colon)&&tW(),X(e)}():s&&function(){let e=Y(0);Z(f.question),e9(),X(e)}()}function eH(e,t=!1){if(t||eq(e),!Z(f.eq))return;let n=i.tokens.length-1;tx(),i.tokens[n].rhsEndIndex=i.tokens.length}function eK(){return Q(f.name)}function ez(){let e=i.snapshot();W();let t=(Q(f.bracketL)||Q(f.braceL)||Q(f.star)||Q(f.ellipsis)||Q(f.hash)||Q(f.name)||!!(i.type&f.IS_KEYWORD)||Q(f.string)||Q(f.num)||Q(f.bigint)||Q(f.decimal))&&!L();return!!t||(i.restoreFromSnapshot(e),!1)}function eW(e){for(;;){let t=eV(e);if(null===t)break}}function eV(e){if(!Q(f.name))return null;let t=i.contextualKeyword;if(-1!==e.indexOf(t)&&ez()){switch(t){case d._readonly:i.tokens[i.tokens.length-1].type=f._readonly;break;case d._abstract:i.tokens[i.tokens.length-1].type=f._abstract;break;case d._static:i.tokens[i.tokens.length-1].type=f._static;break;case d._public:i.tokens[i.tokens.length-1].type=f._public;break;case d._private:i.tokens[i.tokens.length-1].type=f._private;break;case d._protected:i.tokens[i.tokens.length-1].type=f._protected;break;case d._override:i.tokens[i.tokens.length-1].type=f._override;break;case d._declare:i.tokens[i.tokens.length-1].type=f._declare}return t}return null}function eY(){for(tz();Z(f.dot);)tz()}function eX(){P(f._import),P(f.parenL),P(f.string),P(f.parenR),Z(f.dot)&&eY(),Q(f.lessThan)&&td()}function eZ(){Q(f.lessThan)&&eJ()}function eJ(){let e=Y(0);for(Q(f.lessThan)||Q(f.typeParameterStart)?W():B();!Z(f.greaterThan)&&!i.error;)!function(){Z(f._const);let e=Z(f._in),t=C(d._out);Z(f._const),(e||t)&&!Q(f.name)?i.tokens[i.tokens.length-1].type=f.name:tz(),Z(f._extends)&&tt(),Z(f.eq)&&tt()}(),Z(f.comma);X(e)}function eQ(e){let t=e===f.arrow;eZ(),P(f.parenL),i.scopeDepth++,eU(f.parenR,!1),i.scopeDepth--,t?e7(e):Q(e)&&e7(e)}function e1(){Z(f.comma)||F()}function e0(){eQ(f.colon),e1()}function e2(){if(!(Q(f.bracketL)&&function(){let e=i.snapshot();W();let t=Z(f.name)&&Q(f.colon);return i.restoreFromSnapshot(e),t}()))return!1;let e=Y(0);return P(f.bracketL),tz(),te(),P(f.bracketR),e9(),e1(),X(e),!0}function e3(e){Z(f.question),!e&&(Q(f.parenL)||Q(f.lessThan))?(eQ(f.colon),e1()):(e9(),e1())}function e8(){for(P(f.braceL);!Z(f.braceR)&&!i.error;)!function(){if(Q(f.parenL)||Q(f.lessThan)){e0();return}if(Q(f._new)){W(),Q(f.parenL)||Q(f.lessThan)?e0():e3(!1);return}let e=!!eV([d._readonly]),t=e2();t||((A(d._get)||A(d._set))&&ez(),tM(-1),e3(e))}()}function e6(e){e===y.TSAbstractConstructorType&&R(d._abstract),(e===y.TSConstructorType||e===y.TSAbstractConstructorType)&&P(f._new);let t=i.inDisallowConditionalTypesContext;i.inDisallowConditionalTypesContext=!1,eQ(f.arrow),i.inDisallowConditionalTypesContext=t}function e4(){if(A(d._keyof)||A(d._unique)||A(d._readonly))W(),e4();else if(A(d._infer))!function(){if(R(d._infer),tz(),Q(f._extends)){let e=i.snapshot();P(f._extends);let t=i.inDisallowConditionalTypesContext;i.inDisallowConditionalTypesContext=!0,tt(),i.inDisallowConditionalTypesContext=t,(i.error||!i.inDisallowConditionalTypesContext&&Q(f.question))&&i.restoreFromSnapshot(e)}}();else{let e=i.inDisallowConditionalTypesContext;i.inDisallowConditionalTypesContext=!1,function(){for(function(){switch(i.type){case f.name:eY(),!L()&&Q(f.lessThan)&&td();return;case f._void:case f._null:case f.string:case f.num:case f.bigint:case f.decimal:case f._true:case f._false:W();return;case f.minus:W(),W();return;case f._this:W(),A(d._is)&&!L()&&(W(),te());return;case f._typeof:P(f._typeof),Q(f._import)?eX():eY(),!L()&&Q(f.lessThan)&&td();return;case f._import:eX();return;case f.braceL:(function(){let e=i.snapshot(),t=(W(),Z(f.plus)||Z(f.minus))?A(d._readonly):(A(d._readonly)&&W(),!!Q(f.bracketL)&&(W(),!!eK()&&(W(),Q(f._in))));return i.restoreFromSnapshot(e),t})()?(P(f.braceL),Q(f.plus)||Q(f.minus)?(W(),R(d._readonly)):C(d._readonly),P(f.bracketL),tz(),P(f._in),tt(),C(d._as)&&tt(),P(f.bracketR),Q(f.plus)||Q(f.minus)?(W(),P(f.question)):Z(f.question),Z(f.colon)&&tt(),F(),P(f.braceR)):e8();return;case f.bracketL:!function(){for(P(f.bracketL);!Z(f.bracketR)&&!i.error;)Z(f.ellipsis)?tt():(tt(),Z(f.question)),Z(f.colon)&&tt(),Z(f.comma)}();return;case f.parenL:P(f.parenL),tt(),P(f.parenR);return;case f.backQuote:!function(){for(V(),V();!Q(f.backQuote)&&!i.error;)P(f.dollarBraceL),tt(),V(),V();W()}();return;default:if(i.type&f.IS_KEYWORD){W(),i.tokens[i.tokens.length-1].type=f.name;return}}B()}();!L()&&Z(f.bracketL);)Z(f.bracketR)||(tt(),P(f.bracketR))}(),i.inDisallowConditionalTypesContext=e}}function e5(){if(Z(f.bitwiseAND),e4(),Q(f.bitwiseAND))for(;Z(f.bitwiseAND);)e4()}function e7(e){let t=Y(0);P(e);let n=function(){let e=i.snapshot();if(A(d._asserts)){if(W(),C(d._is))return tt(),!0;if(eK()||Q(f._this))return W(),C(d._is)&&tt(),!0;i.restoreFromSnapshot(e)}else if(eK()||Q(f._this)){if(W(),A(d._is)&&!L())return W(),tt(),!0;i.restoreFromSnapshot(e)}return!1}();n||tt(),X(t)}function e9(){Q(f.colon)&&te()}function te(){let e=Y(0);P(f.colon),tt(),X(e)}function tt(){if(tn(),i.inDisallowConditionalTypesContext||L()||!Z(f._extends))return;let e=i.inDisallowConditionalTypesContext;i.inDisallowConditionalTypesContext=!0,tn(),i.inDisallowConditionalTypesContext=e,P(f.question),tt(),P(f.colon),tt()}function tn(){if(Q(f.lessThan)||Q(f.parenL)&&function(){let e=i.snapshot(),t=(W(),!!(Q(f.parenR)||Q(f.ellipsis)||function(){if(Q(f.name)||Q(f._this))return W(),!0;if(Q(f.braceL)||Q(f.bracketL)){let e=1;for(W();e>0&&!i.error;)Q(f.braceL)||Q(f.bracketL)?e++:(Q(f.braceR)||Q(f.bracketR))&&e--,W();return!0}return!1}()&&(Q(f.colon)||Q(f.comma)||Q(f.question)||Q(f.eq)||Q(f.parenR)&&(W(),Q(f.arrow)))));return i.restoreFromSnapshot(e),t}()){e6(y.TSFunctionType);return}if(Q(f._new)){e6(y.TSConstructorType);return}if(A(d._abstract)&&ee()===f._new){e6(y.TSAbstractConstructorType);return}!function(){if(Z(f.bitwiseOR),e5(),Q(f.bitwiseOR))for(;Z(f.bitwiseOR);)e5()}()}function tr(){for(;!Q(f.braceL)&&!i.error;)eY(),Q(f.lessThan)&&td(),Z(f.comma)}function ts(){for(ej(!1),P(f.braceL);!Z(f.braceR)&&!i.error;)!function(){if(Q(f.string)?W():tz(),Z(f.eq)){let e=i.tokens.length-1;tx(),i.tokens[e].rhsEndIndex=i.tokens.length}}(),Z(f.comma)}function to(){P(f.braceL),nc(f.braceR)}function ti(){ej(!1),Z(f.dot)?ti():to()}function ta(){A(d._global)?tz():Q(f.string)?tL():B(),Q(f.braceL)?to():F()}function tl(){eM(),P(f.eq),A(d._require)&&ee()===f.parenL?(R(d._require),P(f.parenL),Q(f.string)||B(),W(),P(f.parenR)):eY(),F()}function tc(){return tu(i.contextualKeyword,!0)}function tu(e,t){switch(e){case d._abstract:if(tp(t)&&Q(f._class))return i.tokens[i.tokens.length-1].type=f._abstract,nm(!0,!1),!0;break;case d._enum:if(tp(t)&&Q(f.name))return i.tokens[i.tokens.length-1].type=f._enum,ts(),!0;break;case d._interface:if(tp(t)&&Q(f.name)){let e=Y(t?2:1);return ej(!1),eZ(),Z(f._extends)&&tr(),e8(),X(e),!0}break;case d._module:if(tp(t)){if(Q(f.string)){let e=Y(t?2:1);return ta(),X(e),!0}if(Q(f.name)){let e=Y(t?2:1);return ti(),X(e),!0}}break;case d._namespace:if(tp(t)&&Q(f.name)){let e=Y(t?2:1);return ti(),X(e),!0}break;case d._type:if(tp(t)&&Q(f.name)){let e=Y(t?2:1);return ej(!1),eZ(),P(f.eq),tt(),F(),X(e),!0}}return!1}function tp(e){return e?(W(),!0):!D()}function th(){i.type===f.bitShiftL&&(i.pos-=1,ec(f.lessThan)),td()}function td(){let e=Y(0);for(P(f.lessThan);!Z(f.greaterThan)&&!i.error;)tt(),Z(f.comma);X(e)}function tf(){if(Q(f.name))switch(i.contextualKeyword){case d._abstract:case d._declare:case d._enum:case d._interface:case d._module:case d._namespace:case d._type:return!0}return!1}function tm(e){if(tk(),!Z(f.colon)){i.tokens[i.tokens.length-1].identifierRole=e;return}tk()}function tg(){let e=i.tokens.length;tm(g.Access);let t=!1;for(;Q(f.dot);)t=!0,tk(),tk();if(!t){let t=i.tokens[e],n=a.charCodeAt(t.start);n>=m.lowercaseA&&n<=m.lowercaseZ&&(t.identifierRole=null)}}function tk(){i.tokens.push(new z),el(),i.start=i.pos;let e=a.charCodeAt(i.pos);if(U[e])!function(){let e;do{if(i.pos>a.length){B("Unexpectedly reached the end of input.");return}e=a.charCodeAt(++i.pos)}while(q[e]||e===m.dash);ec(f.jsxName)}();else if(e===m.quotationMark||e===m.apostrophe)!function(e){for(i.pos++;;){if(i.pos>=a.length){B("Unterminated string constant");return}let t=a.charCodeAt(i.pos);if(t===e){i.pos++;break}i.pos++}ec(f.string)}(e);else switch(++i.pos,e){case m.greaterThan:ec(f.jsxTagEnd);break;case m.lessThan:ec(f.jsxTagStart);break;case m.slash:ec(f.slash);break;case m.equalsTo:ec(f.eq);break;case m.leftCurlyBrace:ec(f.braceL);break;case m.dot:ec(f.dot);break;case m.colon:ec(f.colon);break;default:B()}}function ty(){i.tokens.push(new z),i.start=i.pos,function(){let e=!1,t=!1;for(;;){if(i.pos>=a.length){B("Unterminated JSX contents");return}let n=a.charCodeAt(i.pos);if(n===m.lessThan||n===m.leftCurlyBrace){if(i.pos===i.start){if(n===m.lessThan){i.pos++,ec(f.jsxTagStart);return}ep(n);return}e&&!t?ec(f.jsxEmptyText):ec(f.jsxText);return}n===m.lineFeed?e=!0:n!==m.space&&n!==m.carriageReturn&&n!==m.tab&&(t=!0),i.pos++}}()}(u=y||(y={}))[u.TSFunctionType=0]="TSFunctionType",u[u.TSConstructorType=1]="TSConstructorType",u[u.TSAbstractConstructorType=2]="TSAbstractConstructorType";class tb{constructor(e){this.stop=e}}function t_(e=!1){if(tx(e),Q(f.comma))for(;Z(f.comma);)tx(e)}function tx(e=!1,t=!1){return s?r?function(e,t){if(!Q(f.lessThan))return tT(e,t);let n=i.snapshot(),r=tT(e,t);return i.error&&(i.restoreFromSnapshot(n),i.type=f.typeParameterStart,eJ(),(r=tT(e,t))||B()),r}(e,t):function(e,t){if(!Q(f.lessThan))return tT(e,t);let n=i.snapshot();eJ();let r=tT(e,t);return(r||B(),i.error)?(i.restoreFromSnapshot(n),tT(e,t)):r}(e,t):o?function(e,t){if(Q(f.lessThan)){let n=i.snapshot(),r=tT(e,t);if(!i.error)return r;i.restoreFromSnapshot(n),i.type=f.typeParameterStart;let s=Y(0);if(t1(),X(s),r=tT(e,t))return!0;B()}return tT(e,t)}(e,t):tT(e,t)}function tT(e,t){if(Q(f._yield))return W(),Q(f.semi)||N()||(Z(f.star),tx()),!1;(Q(f.parenL)||Q(f.name)||Q(f._yield))&&(i.potentialArrowAt=i.start);let n=function(e){let t=function(e){let t=i.tokens.length,n=tE();return!!n||(function e(t,n,r){if(s&&(f._in&f.PRECEDENCE_MASK)>n&&!L()&&(C(d._as)||C(d._satisfies))){let s=Y(1);tt(),X(s),i.type===f.greaterThan&&(i.pos-=1,eu()),e(t,n,r);return}let o=i.type&f.PRECEDENCE_MASK;if(o>0&&(!r||!Q(f._in))&&o>n){let s=i.type;W(),s===f.nullishCoalescing&&(i.tokens[i.tokens.length-1].nullishStartIndex=t);let a=i.tokens.length;tE(),e(a,s&f.IS_RIGHT_ASSOCIATIVE?o-1:o,r),s===f.nullishCoalescing&&(i.tokens[t].numNullishCoalesceStarts++,i.tokens[i.tokens.length-1].numNullishCoalesceEnds++),e(t,n,r)}}(t,-1,e),!1)}(e);return!!t||(s||o?function(e){if(Q(f.question)){let e=ee();if(e===f.colon||e===f.comma||e===f.parenR)return}tv(e)}(e):tv(e),!1)}(e);return(t&&tP(),i.type&f.IS_ASSIGN)?(W(),tx(e),!1):n}function tv(e){Z(f.question)&&(tx(),P(f.colon),tx(e))}function tE(){if(s&&!r&&Z(f.lessThan))return!function(){let e=Y(1);tt(),P(f.greaterThan),X(e),tE()}(),!1;if(A(d._module)&&eo()===m.leftCurlyBrace&&!O())return R(d._module),P(f.braceL),nc(f.braceR),!1;if(i.type&f.IS_PREFIX)return W(),tE(),!1;let e=tw();if(e)return!0;for(;i.type&f.IS_POSTFIX&&!N();)i.type===f.preIncDec&&(i.type=f.postIncDec),W();return!1}function tw(){let e=i.tokens.length,t=tL();return!!t||(tI(e),i.tokens.length>e&&i.tokens[e].isOptionalChainStart&&(i.tokens[i.tokens.length-1].isOptionalChainEnd=!0),!1)}function tI(e,t=!1){o?function(e,t=!1){if(i.tokens[i.tokens.length-1].contextualKeyword===d._async&&Q(f.lessThan)){let e=i.snapshot(),t=function(){i.scopeDepth++;let e=i.tokens.length;return nf(),!!tF()&&(tq(e),!0)}();if(t&&!i.error)return;i.restoreFromSnapshot(e)}tA(e,t)}(e,t):tA(e,t)}function tA(e,t=!1){let n=new tb(!1);do s?function(e,t,n){if(!L()&&Z(f.bang)){i.tokens[i.tokens.length-1].type=f.nonNullAssertion;return}if(Q(f.lessThan)||Q(f.bitShiftL)){let n=i.snapshot();if(!t&&tC()){let e=function(){let e=i.snapshot();return(eJ(),nf(),Q(f.colon)&&e7(f.colon),P(f.arrow),i.error)?(i.restoreFromSnapshot(e),!1):(tG(!0),!0)}();if(e)return}if(th(),!t&&Z(f.parenL)?(i.tokens[i.tokens.length-1].subscriptStartIndex=e,tR()):Q(f.backQuote)?tB():(i.type===f.greaterThan||i.type!==f.parenL&&i.type&f.IS_EXPRESSION_START&&!L())&&B(),!i.error)return;i.restoreFromSnapshot(n)}else!t&&Q(f.questionDot)&&ee()===f.lessThan&&(W(),i.tokens[e].isOptionalChainStart=!0,i.tokens[i.tokens.length-1].subscriptStartIndex=e,td(),P(f.parenL),tR());tS(e,t,n)}(e,t,n):o?function(e,t,n){if(Q(f.questionDot)&&ee()===f.lessThan){if(t){n.stop=!0;return}W(),t0(),P(f.parenL),tR();return}if(!t&&Q(f.lessThan)){let e=i.snapshot();if(t0(),P(f.parenL),tR(),!i.error)return;i.restoreFromSnapshot(e)}tS(e,t,n)}(e,t,n):tS(e,t,n);while(!n.stop&&!i.error)}function tS(e,t,n){if(!t&&Z(f.doubleColon))tN(),n.stop=!0,tI(e,t);else if(Q(f.questionDot)){if(i.tokens[e].isOptionalChainStart=!0,t&&ee()===f.parenL){n.stop=!0;return}W(),i.tokens[i.tokens.length-1].subscriptStartIndex=e,Z(f.bracketL)?(t_(),P(f.bracketR)):Z(f.parenL)?tR():tO()}else if(Z(f.dot))i.tokens[i.tokens.length-1].subscriptStartIndex=e,tO();else if(Z(f.bracketL))i.tokens[i.tokens.length-1].subscriptStartIndex=e,t_(),P(f.bracketR);else if(!t&&Q(f.parenL)){if(tC()){let t=i.snapshot(),r=i.tokens.length;W(),i.tokens[i.tokens.length-1].subscriptStartIndex=e;let a=l++;i.tokens[i.tokens.length-1].contextId=a,tR(),i.tokens[i.tokens.length-1].contextId=a,(Q(f.colon)||Q(f.arrow))&&(i.restoreFromSnapshot(t),n.stop=!0,i.scopeDepth++,nf(),s?Q(f.colon)&&te():o&&function(){if(Q(f.colon)){let e=i.noAnonFunctionType;i.noAnonFunctionType=!0,tW(),i.noAnonFunctionType=e}}(),P(f.arrow),tq(r))}else{W(),i.tokens[i.tokens.length-1].subscriptStartIndex=e;let t=l++;i.tokens[i.tokens.length-1].contextId=t,tR(),i.tokens[i.tokens.length-1].contextId=t}}else Q(f.backQuote)?tB():n.stop=!0}function tC(){return i.tokens[i.tokens.length-1].contextualKeyword===d._async&&!N()}function tR(){let e=!0;for(;!Z(f.parenR)&&!i.error;){if(e)e=!1;else if(P(f.comma),Z(f.parenR))break;tK(!1)}}function tN(){let e=i.tokens.length;tL(),tI(e,!0)}function tL(){if(Z(f.modulo))return tz(),!1;if(Q(f.jsxText)||Q(f.jsxEmptyText))return W(),!1;if(Q(f.lessThan)&&r)return i.type=f.jsxTagStart,function e(){tk(),function t(){let n=i.tokens.length-1;i.tokens[n].jsxRole=k.NoChildren;let r=0,o=function(t){if(Q(f.jsxTagEnd))return!1;tg(),s&&function(){if(Z(f.jsxTagStart)){i.tokens[i.tokens.length-1].type=f.typeParameterStart;let e=Y(1);for(;!Q(f.greaterThan)&&!i.error;)tt(),Z(f.comma);tk(),X(e)}}();let n=!1;for(;!Q(f.slash)&&!Q(f.jsxTagEnd)&&!i.error;){if(Z(f.braceL)){n=!0,P(f.ellipsis),tx(),tk();continue}n&&i.end-i.start==3&&a.charCodeAt(i.start)===m.lowercaseK&&a.charCodeAt(i.start+1)===m.lowercaseE&&a.charCodeAt(i.start+2)===m.lowercaseY&&(i.tokens[t].jsxRole=k.KeyAfterPropSpread),tm(g.ObjectKey),Q(f.eq)&&(tk(),function(){switch(i.type){case f.braceL:W(),t_(),tk();return;case f.jsxTagStart:e(),tk();return;case f.string:tk();return;default:B("JSX value should be either an expression or a quoted JSX text")}}())}let r=Q(f.slash);return r&&tk(),r}(n);if(!o)for(ty();;)switch(i.type){case f.jsxTagStart:if(tk(),Q(f.slash)){tk(),Q(f.jsxTagEnd)||tg(),i.tokens[n].jsxRole!==k.KeyAfterPropSpread&&(1===r?i.tokens[n].jsxRole=k.OneChild:r>1&&(i.tokens[n].jsxRole=k.StaticChildren));return}r++,t(),ty();break;case f.jsxText:r++,ty();break;case f.jsxEmptyText:ty();break;case f.braceL:W(),Q(f.ellipsis)?(P(f.ellipsis),t_(),ty(),r+=2):(Q(f.braceR)||(r++,t_()),ty());break;default:B();return}}()}(),W(),!1;let e=i.potentialArrowAt===i.start;switch(i.type){case f.slash:case f.assign:i.type===f.assign&&--i.pos,function(){let e=i.pos,t=!1,n=!1;for(;;){if(i.pos>=a.length){B("Unterminated regular expression",e);return}let r=a.charCodeAt(i.pos);if(t)t=!1;else{if(r===m.leftSquareBracket)n=!0;else if(r===m.rightSquareBracket&&n)n=!1;else if(r===m.slash&&!n)break;t=r===m.backslash}++i.pos}++i.pos,function(){for(;i.pos<a.length;){let e=a.charCodeAt(i.pos);if(q[e])i.pos++;else if(e===m.backslash){if(i.pos+=2,a.charCodeAt(i.pos)===m.leftCurlyBrace){for(;i.pos<a.length&&a.charCodeAt(i.pos)!==m.rightCurlyBrace;)i.pos++;i.pos++}}else break}}(),ec(f.regexp)}();case f._super:case f._this:case f.regexp:case f.num:case f.bigint:case f.decimal:case f.string:case f._null:case f._true:case f._false:return W(),!1;case f._import:return W(),Q(f.dot)&&(i.tokens[i.tokens.length-1].type=f.name,W(),tz()),!1;case f.name:{let t=i.tokens.length,n=i.start,r=i.contextualKeyword;if(tz(),r===d._await)return tE(),!1;if(r===d._async&&Q(f._function)&&!N())return W(),nd(n,!1),!1;if(e&&r===d._async&&!N()&&Q(f.name))return i.scopeDepth++,ej(!1),P(f.arrow),tq(t),!0;if(Q(f._do)&&!N())return W(),nl(),!1;if(e&&!N()&&Q(f.arrow))return i.scopeDepth++,e$(!1),P(f.arrow),tq(t),!0;return i.tokens[i.tokens.length-1].identifierRole=g.Access,!1}case f._do:return W(),nl(),!1;case f.parenL:{let t=function e(t){let n=i.snapshot(),r=i.tokens.length;P(f.parenL);let s=!0;for(;!Q(f.parenR)&&!i.error;){if(s)s=!1;else if(P(f.comma),Q(f.parenR))break;if(Q(f.ellipsis)){W(),eq(!1),tP();break}tx(!1,!0)}if(P(f.parenR),t&&(Q(f.colon)||!N())){let t=tF();if(t)return i.restoreFromSnapshot(n),i.scopeDepth++,nf(),tF(),tq(r),!i.error||(i.restoreFromSnapshot(n),e(!1),!1)}return!1}(e);return t}case f.bracketL:return W(),tH(f.bracketR,!0),!1;case f.braceL:return tj(!1,!1),!1;case f._function:return function(){let e=i.start;tz(),Z(f.dot)&&tz(),nd(e,!1)}(),!1;case f.at:no();case f._class:return nm(!1),!1;case f._new:return function(){if(P(f._new),Z(f.dot)){tz();return}tN(),Z(f.questionDot),o&&function(){if(Q(f.lessThan)){let e=i.snapshot();t0(),i.error&&i.restoreFromSnapshot(e)}}(),Z(f.parenL)&&tH(f.parenR)}(),!1;case f.backQuote:return tB(),!1;case f.doubleColon:return W(),tN(),!1;case f.hash:{let e=eo();return U[e]||e===m.backslash?tO():W(),!1}default:return B(),!1}}function tO(){Z(f.hash),tz()}function tD(){P(f.parenL),t_(),P(f.parenR)}function tF(){return s?function(){if(Q(f.colon)){let e=i.snapshot();e7(f.colon),N()&&B(),Q(f.arrow)||B(),i.error&&i.restoreFromSnapshot(e)}return Z(f.arrow)}():o?function(){if(Q(f.colon)){let e=Y(0),t=i.snapshot(),n=i.noAnonFunctionType;i.noAnonFunctionType=!0,tY(),i.noAnonFunctionType=n,N()&&B(),Q(f.arrow)||B(),i.error&&i.restoreFromSnapshot(t),X(e)}return Z(f.arrow)}():Z(f.arrow)}function tP(){(s||o)&&(J(f.question),Q(f.colon)&&(s?te():o&&tW()))}function tB(){for(V(),V();!Q(f.backQuote)&&!i.error;)P(f.dollarBraceL),t_(),V(),V();W()}function tj(e,t){let n=l++,r=!0;for(W(),i.tokens[i.tokens.length-1].contextId=n;!Z(f.braceR)&&!i.error;){if(r)r=!1;else if(P(f.comma),Z(f.braceR))break;let a=!1;if(Q(f.ellipsis)){let n=i.tokens.length;if(W(),tx(!1),e&&(i.tokens.length===n+2&&e$(t),Z(f.braceR)))break;continue}e||(a=Z(f.star)),!e&&A(d._async)?(a&&B(),tz(),Q(f.colon)||Q(f.parenL)||Q(f.braceR)||Q(f.eq)||Q(f.comma)||(Q(f.star)&&(W(),a=!0),tM(n))):tM(n),function(e,t,n){s?eZ():o&&Q(f.lessThan)&&(t1(),Q(f.parenL)||B());let r=function(e,t){let n=i.start;return Q(f.parenL)?(e&&B(),t$(n,!1),!0):!!(!e&&(Q(f.string)||Q(f.num)||Q(f.bracketL)||Q(f.name)||i.type&f.IS_KEYWORD))&&(tM(t),t$(n,!1),!0)}(e,n);r||function(e,t){let n;if(Z(f.colon)){e?eH(t):tx(!1);return}n=e?0===i.scopeDepth?g.ObjectShorthandTopLevelDeclaration:t?g.ObjectShorthandBlockScopedDeclaration:g.ObjectShorthandFunctionScopedDeclaration:g.ObjectShorthand,i.tokens[i.tokens.length-1].identifierRole=n,eH(t,!0)}(e,t)}(e,t,n)}i.tokens[i.tokens.length-1].contextId=n}function tM(e){o&&nn(),Z(f.bracketL)?(i.tokens[i.tokens.length-1].contextId=e,tx(),P(f.bracketR),i.tokens[i.tokens.length-1].contextId=e):(Q(f.num)||Q(f.string)||Q(f.bigint)||Q(f.decimal)?tL():tO(),i.tokens[i.tokens.length-1].identifierRole=g.ObjectKey,i.tokens[i.tokens.length-1].contextId=e)}function t$(e,t){let n=l++;i.scopeDepth++;let r=i.tokens.length;nf(t,n),tU(e,n);let s=i.tokens.length;i.scopes.push(new v(r,s,!0)),i.scopeDepth--}function tq(e){tG(!0);let t=i.tokens.length;i.scopes.push(new v(e,t,!0)),i.scopeDepth--}function tU(e,t=0){s?function(e,t){if(Q(f.colon)&&e7(f.colon),!Q(f.braceL)&&D()){let t=i.tokens.length-1;for(;t>=0&&(i.tokens[t].start>=e||i.tokens[t].type===f._default||i.tokens[t].type===f._export);)i.tokens[t].isType=!0,t--;return}tG(!1,t)}(e,t):(o&&Q(f.colon)&&tY(),tG(!1,t))}function tG(e,t=0){let n=e&&!Q(f.braceL);n?tx():nl(!0,t)}function tH(e,t=!1){let n=!0;for(;!Z(e)&&!i.error;){if(n)n=!1;else if(P(f.comma),Z(e))break;tK(t)}}function tK(e){e&&Q(f.comma)||(Q(f.ellipsis)?(W(),tx(!1),tP()):Q(f.question)?W():tx(!1,!0))}function tz(){W(),i.tokens[i.tokens.length-1].type=f.name}function tW(e){let t=Y(0);P(e||f.colon),ne(),X(t)}function tV(){P(f.modulo),R(d._checks),Z(f.parenL)&&(t_(),P(f.parenR))}function tY(){let e=Y(0);P(f.colon),Q(f.modulo)?tV():(ne(),Q(f.modulo)&&tV()),X(e)}function tX(e=!1){if(tz(),Q(f.lessThan)&&t1(),Z(f._extends))do tZ();while(!e&&Z(f.comma));if(A(d._mixins)||A(d._implements)){W();do tZ();while(Z(f.comma))}t8(e,!1,e)}function tZ(){t6(!1),Q(f.lessThan)&&t0()}function tJ(){tz(),Q(f.lessThan)&&t1(),tW(f.eq),F()}function tQ(e){R(d._type),tz(),Q(f.lessThan)&&t1(),Q(f.colon)&&tW(f.colon),e||tW(f.eq),F()}function t1(){let e=Y(0);Q(f.lessThan)||Q(f.typeParameterStart)?W():B();do nn(),nt(),Z(f.eq)&&ne(),Q(f.greaterThan)||P(f.comma);while(!Q(f.greaterThan)&&!i.error);P(f.greaterThan),X(e)}function t0(){let e=Y(0);for(P(f.lessThan);!Q(f.greaterThan)&&!i.error;)ne(),Q(f.greaterThan)||P(f.comma);P(f.greaterThan),X(e)}function t2(){Q(f.num)||Q(f.string)?tL():tz()}function t3(){for(Q(f.lessThan)&&t1(),P(f.parenL);!Q(f.parenR)&&!Q(f.ellipsis)&&!i.error;)t4(),Q(f.parenR)||P(f.comma);Z(f.ellipsis)&&t4(),P(f.parenR),tW()}function t8(e,t,n){let r;for(t&&Q(f.braceBarL)?(P(f.braceBarL),r=f.braceBarR):(P(f.braceL),r=f.braceR);!Q(r)&&!i.error;){if(n&&A(d._proto)){let t=ee();t!==f.colon&&t!==f.question&&(W(),e=!1)}if(e&&A(d._static)){let e=ee();e!==f.colon&&e!==f.question&&W()}if(nn(),Z(f.bracketL))Z(f.bracketL)?(t2(),P(f.bracketR),P(f.bracketR),Q(f.lessThan)||Q(f.parenL)?t3():(Z(f.question),tW())):(ee()===f.colon?(t2(),tW()):ne(),P(f.bracketR),tW());else if(Q(f.parenL)||Q(f.lessThan))t3();else{if(A(d._get)||A(d._set)){let e=ee();(e===f.name||e===f.string||e===f.num)&&W()}Q(f.ellipsis)?(P(f.ellipsis),Z(f.comma)||Z(f.semi),Q(f.braceR)||ne()):(t2(),Q(f.lessThan)||Q(f.parenL)?t3():(Z(f.question),tW()))}Z(f.semi)||Z(f.comma)||Q(f.braceR)||Q(f.braceBarR)||B()}P(r)}function t6(e){for(e||tz();Z(f.dot);)tz()}function t4(){let e=ee();e===f.colon||e===f.question?(tz(),Z(f.question),tW()):ne()}function t5(){for(;!Q(f.parenR)&&!Q(f.ellipsis)&&!i.error;)t4(),Q(f.parenR)||P(f.comma);Z(f.ellipsis)&&t4()}function t7(){!function e(){Z(f.question)?e():function(){for(function e(){let t=!1,n=i.noAnonFunctionType;switch(i.type){case f.name:if(A(d._interface)){!function(){if(R(d._interface),Z(f._extends))do tZ();while(Z(f.comma));t8(!1,!1,!1)}();return}tz(),t6(!0),Q(f.lessThan)&&t0();return;case f.braceL:t8(!1,!1,!1);return;case f.braceBarL:t8(!1,!0,!1);return;case f.bracketL:!function(){for(P(f.bracketL);i.pos<a.length&&!Q(f.bracketR)&&(ne(),!Q(f.bracketR));)P(f.comma);P(f.bracketR)}();return;case f.lessThan:t1(),P(f.parenL),t5(),P(f.parenR),P(f.arrow),ne();return;case f.parenL:if(W(),!Q(f.parenR)&&!Q(f.ellipsis)){if(Q(f.name)){let e=ee();t=e!==f.question&&e!==f.colon}else t=!0}if(t){if(i.noAnonFunctionType=!1,ne(),i.noAnonFunctionType=n,i.noAnonFunctionType||!(Q(f.comma)||Q(f.parenR)&&ee()===f.arrow)){P(f.parenR);return}Z(f.comma)}t5(),P(f.parenR),P(f.arrow),ne();return;case f.minus:W(),W();return;case f.string:case f.num:case f._true:case f._false:case f._null:case f._this:case f._void:case f.star:W();return;default:if(i.type===f._typeof){P(f._typeof),e();return}if(i.type&f.IS_KEYWORD){W(),i.tokens[i.tokens.length-1].type=f.name;return}}B()}();!N()&&(Q(f.bracketL)||Q(f.questionDot));)Z(f.questionDot),P(f.bracketL),Z(f.bracketR)||(ne(),P(f.bracketR))}()}(),!i.noAnonFunctionType&&Z(f.arrow)&&ne()}function t9(){for(Z(f.bitwiseAND),t7();Z(f.bitwiseAND);)t7()}function ne(){!function(){for(Z(f.bitwiseOR),t9();Z(f.bitwiseOR);)t9()}()}function nt(){tz(),Q(f.colon)&&tW()}function nn(){(Q(f.plus)||Q(f.minus))&&(W(),i.tokens[i.tokens.length-1].isType=!0)}function nr(){R(d._enum),i.tokens[i.tokens.length-1].type=f._enum,tz(),C(d._of)&&W(),P(f.braceL),function(){for(;!Q(f.braceR)&&!i.error&&!Z(f.ellipsis);)tz(),Z(f.eq)&&W(),Q(f.braceR)||P(f.comma)}(),P(f.braceR)}function ns(e){o&&function(){if(Q(f.name)&&i.contextualKeyword===d._interface){let e=Y(0);return W(),tX(),X(e),!0}return!!A(d._enum)&&(nr(),!0)}()||(Q(f.at)&&no(),function(e){var t;if(s&&function(){if(i.type===f._const){let e=en();if(e.type===f.name&&e.contextualKeyword===d._enum)return P(f._const),R(d._enum),i.tokens[i.tokens.length-1].type=f._enum,ts(),!0}return!1}())return;let n=i.type;switch(n){case f._break:case f._continue:W(),D()||(tz(),F());return;case f._debugger:W(),F();return;case f._do:W(),ns(!1),P(f._while),tD(),Z(f.semi);return;case f._for:(function(){i.scopeDepth++;let e=i.tokens.length;(function(){W();let e=!1;if(A(d._await)&&(e=!0,W()),P(f.parenL),Q(f.semi)){e&&B(),nu();return}if(Q(f._var)||Q(f._let)||Q(f._const)||!(!A(d._using)||S(d._of))){if(W(),nh(!0,i.type!==f._var),Q(f._in)||A(d._of)){np(e);return}nu();return}if(t_(!0),Q(f._in)||A(d._of)){np(e);return}e&&B(),nu()})();let t=i.tokens.length;i.scopes.push(new v(e,t,!1)),i.scopeDepth--})();return;case f._function:if(ee()===f.dot)break;e||B(),function(){let e=i.start;W(),nd(e,!0)}();return;case f._class:e||B(),nm(!0);return;case f._if:W(),tD(),ns(!1),Z(f._else)&&ns(!1);return;case f._return:W(),D()||(t_(),F());return;case f._switch:(function(){W(),tD(),i.scopeDepth++;let e=i.tokens.length;for(P(f.braceL);!Q(f.braceR)&&!i.error;)if(Q(f._case)||Q(f._default)){let e=Q(f._case);W(),e&&t_(),P(f.colon)}else ns(!0);W();let t=i.tokens.length;i.scopes.push(new v(e,t,!1)),i.scopeDepth--})();return;case f._throw:W(),t_(),F();return;case f._try:(function(){if(W(),nl(),Q(f._catch)){W();let e=null;if(Q(f.parenL)&&(i.scopeDepth++,e=i.tokens.length,P(f.parenL),eq(!0),s&&e9(),P(f.parenR)),nl(),null!=e){let t=i.tokens.length;i.scopes.push(new v(e,t,!1)),i.scopeDepth--}}Z(f._finally)&&nl()})();return;case f._let:case f._const:e||B();case f._var:na(n!==f._var);return;case f._while:W(),tD(),ns(!1);return;case f.braceL:nl();return;case f.semi:W();return;case f._export:case f._import:{let e=ee();if(e===f.parenL||e===f.dot)break;W(),n===f._import?nI():nx();return}case f.name:if(i.contextualKeyword===d._async){let e=i.start,t=i.snapshot();if(W(),Q(f._function)&&!N()){P(f._function),nd(e,!0);return}i.restoreFromSnapshot(t)}else if(i.contextualKeyword===d._using&&!O()&&ee()===f.name){na(!0);return}}let r=i.tokens.length;t_();let a=null;if(i.tokens.length===r+1){let e=i.tokens[i.tokens.length-1];e.type===f.name&&(a=e.contextualKeyword)}if(null==a){F();return}Z(f.colon)?ns(!0):(t=a,s?function(e){let t=function(e){switch(e){case d._declare:{let e=i.tokens.length-1,t=function(){if(D())return!1;switch(i.type){case f._function:{let e=Y(1);W();let t=i.start;return nd(t,!0),X(e),!0}case f._class:{let e=Y(1);return nm(!0,!1),X(e),!0}case f._const:if(Q(f._const)&&S(d._enum)){let e=Y(1);return P(f._const),R(d._enum),i.tokens[i.tokens.length-1].type=f._enum,ts(),X(e),!0}case f._var:case f._let:{let e=Y(1);return na(i.type!==f._var),X(e),!0}case f.name:{let e=Y(1),t=i.contextualKeyword,n=!1;return t===d._global?(ta(),n=!0):n=tu(t,!0),X(e),n}default:return!1}}();if(t)return i.tokens[e].type=f._declare,!0;break}case d._global:if(Q(f.braceL))return to(),!0;break;default:return tu(e,!1)}return!1}(e);t||F()}(t):o?function(e){if(e===d._declare){if(Q(f._class)||Q(f.name)||Q(f._function)||Q(f._var)||Q(f._export)){let e=Y(1);(function e(){Q(f._class)?(W(),tX(!0)):Q(f._function)?(W(),tz(),Q(f.lessThan)&&t1(),P(f.parenL),t5(),P(f.parenR),tY(),F()):Q(f._var)?(W(),nt(),F()):C(d._module)?Z(f.dot)?(R(d._exports),tW(),F()):function(){for(Q(f.string)?tL():tz(),P(f.braceL);!Q(f.braceR)&&!i.error;)Q(f._import)?(W(),nI()):B();P(f.braceR)}():A(d._type)?(W(),tJ()):A(d._opaque)?(W(),tQ(!0)):A(d._interface)?(W(),tX()):Q(f._export)?(P(f._export),Z(f._default)?Q(f._function)||Q(f._class)?e():(ne(),F()):Q(f._var)||Q(f._function)||Q(f._class)||A(d._opaque)?e():Q(f.star)||Q(f.braceL)||A(d._interface)||A(d._type)||A(d._opaque)?nx():B()):B()})(),X(e)}}else if(Q(f.name)){if(e===d._interface){let e=Y(1);tX(),X(e)}else if(e===d._type){let e=Y(1);tJ(),X(e)}else if(e===d._opaque){let e=Y(1);tQ(!1),X(e)}}F()}(t):F())}(e))}function no(){for(;Q(f.at);)ni()}function ni(){if(W(),Z(f.parenL))t_(),P(f.parenR);else{for(tz();Z(f.dot);)tz();s&&(Q(f.lessThan)||Q(f.bitShiftL))&&th(),Z(f.parenL)&&tR()}}function na(e){W(),nh(!1,e),F()}function nl(e=!1,t=0){let n=i.tokens.length;i.scopeDepth++,P(f.braceL),t&&(i.tokens[i.tokens.length-1].contextId=t),nc(f.braceR),t&&(i.tokens[i.tokens.length-1].contextId=t);let r=i.tokens.length;i.scopes.push(new v(n,r,e)),i.scopeDepth--}function nc(e){for(;!Z(e)&&!i.error;)ns(!0)}function nu(){P(f.semi),Q(f.semi)||t_(),P(f.semi),Q(f.parenR)||t_(),P(f.parenR),ns(!1)}function np(e){e?C(d._of):W(),t_(),P(f.parenR),ns(!1)}function nh(e,t){for(;;){if(eq(t),s?function(){let e=Y(0);L()||Z(f.bang),e9(),X(e)}():o&&Q(f.colon)&&tW(),Z(f.eq)){let t=i.tokens.length-1;tx(e),i.tokens[t].rhsEndIndex=i.tokens.length}if(!Z(f.comma))break}}function nd(e,t,n=!1){Q(f.star)&&W(),!t||n||Q(f.name)||Q(f._yield)||B();let r=null;Q(f.name)&&(!t&&(r=i.tokens.length,i.scopeDepth++),ej(!1));let s=i.tokens.length;i.scopeDepth++,nf(),tU(e);let o=i.tokens.length;i.scopes.push(new v(s,o,!0)),i.scopeDepth--,null!==r&&(i.scopes.push(new v(r,o,!0)),i.scopeDepth--)}function nf(e=!1,t=0){s?eZ():o&&function(){if(Q(f.lessThan)){let e=Y(0);t1(),X(e)}}(),P(f.parenL),t&&(i.tokens[i.tokens.length-1].contextId=t),eU(f.parenR,!1,!1,e,t),t&&(i.tokens[i.tokens.length-1].contextId=t)}function nm(e,t=!1){let n;let r=l++;W(),i.tokens[i.tokens.length-1].contextId=r,i.tokens[i.tokens.length-1].isExpression=!e;let a=null;!e&&(a=i.tokens.length,i.scopeDepth++),function(e,t=!1){!(s&&(!e||t)&&A(d._implements))&&(Q(f.name)&&ej(!0),s?eZ():o&&Q(f.lessThan)&&t1())}(e,t),n=!1,Z(f._extends)?(tw(),n=!0):n=!1,s?function(e){if(e&&(Q(f.lessThan)||Q(f.bitShiftL))&&th(),C(d._implements)){i.tokens[i.tokens.length-1].type=f._implements;let e=Y(1);tr(),X(e)}}(n):o&&function(e){if(e&&Q(f.lessThan)&&t0(),A(d._implements)){let e=Y(0);W(),i.tokens[i.tokens.length-1].type=f._implements;do tz(),Q(f.lessThan)&&t0();while(Z(f.comma));X(e)}}(n);let c=i.tokens.length;if(function(e){for(P(f.braceL);!Z(f.braceR)&&!i.error;){if(Z(f.semi))continue;if(Q(f.at)){ni();continue}let t=i.start;(function(e,t){s&&eW([d._declare,d._public,d._protected,d._private,d._override]);let n=!1;if(Q(f.name)&&i.contextualKeyword===d._static){if(tz(),nk()){ny(e,!1);return}if(ng()){n_();return}if(i.tokens[i.tokens.length-1].type=f._static,n=!0,Q(f.braceL)){i.tokens[i.tokens.length-1].contextId=t,nl();return}}(function(e,t,n){var r,o,a,l,c;if(s&&function(e){let t=i.tokens.length;eW([d._abstract,d._readonly,d._declare,d._static,d._override]);let n=i.tokens.length,r=e2();if(r){let r=e?t-1:t;for(let e=r;e<n;e++)i.tokens[e].isType=!0;return!0}return!1}(t))return;if(Z(f.star)){tM(r=n),ny(e,!1);return}tM(o=n);let u=!1,p=i.tokens[i.tokens.length-1];if(p.contextualKeyword===d._constructor&&(u=!0),nb(),nk())ny(e,u);else if(ng())n_();else if(p.contextualKeyword!==d._async||D()){p.contextualKeyword!==d._get&&p.contextualKeyword!==d._set||D()&&Q(f.star)?p.contextualKeyword!==d._accessor||D()?D()?n_():B():(tM(a=n),n_()):(p.contextualKeyword===d._get?i.tokens[i.tokens.length-1].type=f._get:i.tokens[i.tokens.length-1].type=f._set,tM(l=n),ny(e,!1))}else{i.tokens[i.tokens.length-1].type=f._async;let t=Q(f.star);t&&W(),tM(c=n),nb(),ny(e,!1)}})(e,n,t)})(t,e)}}(r),!i.error&&(i.tokens[c].contextId=r,i.tokens[i.tokens.length-1].contextId=r,null!==a)){let e=i.tokens.length;i.scopes.push(new v(a,e,!1)),i.scopeDepth--}}function ng(){return Q(f.eq)||Q(f.semi)||Q(f.braceR)||Q(f.bang)||Q(f.colon)}function nk(){return Q(f.parenL)||Q(f.lessThan)}function ny(e,t){s?eZ():o&&Q(f.lessThan)&&t1(),t$(e,t)}function nb(){if(s){let e=Y(0);Z(f.question),X(e)}}function n_(){if(s?(J(f.bang),e9()):o&&Q(f.colon)&&tW(),Q(f.eq)){let e=i.tokens.length;W(),tx(),i.tokens[e].rhsEndIndex=i.tokens.length}F()}function nx(){let e=i.tokens.length-1;s&&function(){if(Z(f._import))return A(d._type)&&ee()!==f.eq&&R(d._type),tl(),!0;if(Z(f.eq))return t_(),F(),!0;if(C(d._as))return R(d._namespace),tz(),F(),!0;if(A(d._type)){let e=ee();(e===f.braceL||e===f.star)&&W()}return!1}()||((o?Q(f.star)||A(d._type)&&ee()===f.star:Q(f.star))?o?function(){if(C(d._type)){let e=Y(2);nE(),X(e)}else nE()}():nE():function(){if(s&&tf()||o&&Q(f.name)&&(i.contextualKeyword===d._type||i.contextualKeyword===d._interface||i.contextualKeyword===d._opaque||i.contextualKeyword===d._enum))return!1;if(Q(f.name))return i.contextualKeyword!==d._async;if(!Q(f._default))return!1;let e=er(),t=en(),n=t.type===f.name&&t.contextualKeyword===d._from;if(t.type===f.comma)return!0;if(n){let t=a.charCodeAt(es(e+4));return t===m.quotationMark||t===m.apostrophe}return!1}()?(tz(),Q(f.comma)&&ee()===f.star?(P(f.comma),P(f.star),R(d._as),tz()):nT(),nv()):Z(f._default)?function(){if(s&&function(){if(A(d._abstract)&&ee()===f._class)return i.type=f._abstract,W(),nm(!0,!0),!0;if(A(d._interface)){let e=Y(2);return tu(d._interface,!0),X(e),!0}return!1}()||o&&A(d._enum)&&(nr(),1))return;let e=i.start;Z(f._function)?nd(e,!0,!0):A(d._async)&&ee()===f._function?(C(d._async),Z(f._function),nd(e,!0,!0)):Q(f._class)?nm(!0,!0):Q(f.at)?(no(),nm(!0,!0)):(tx(),F())}():s&&tf()||o&&(A(d._type)||A(d._interface)||A(d._opaque)||A(d._enum))||i.type===f._var||i.type===f._const||i.type===f._let||i.type===f._function||i.type===f._class||A(d._async)||Q(f.at)?s?function(){let e=C(d._declare);e&&(i.tokens[i.tokens.length-1].type=f._declare);let t=!1;if(Q(f.name)){if(e){let e=Y(2);t=tc(),X(e)}else t=tc()}if(!t){if(e){let e=Y(2);ns(!0),X(e)}else ns(!0)}}():o?function(){if(A(d._type)){let e=Y(1);W(),Q(f.braceL)?(nw(),nv()):tJ(),X(e)}else if(A(d._opaque)){let e=Y(1);W(),tQ(!1),X(e)}else if(A(d._interface)){let e=Y(1);W(),tX(),X(e)}else ns(!0)}():ns(!0):(nw(),nv()),i.tokens[e].rhsEndIndex=i.tokens.length)}function nT(){Z(f.comma)&&nw()}function nv(){C(d._from)&&(tL(),nA()),F()}function nE(){P(f.star),A(d._as)&&(W(),i.tokens[i.tokens.length-1].type=f._as,tz(),nT()),nv()}function nw(){let e=!0;for(P(f.braceL);!Z(f.braceR)&&!i.error;){if(e)e=!1;else if(P(f.comma),Z(f.braceR))break;!function(){if(s){!function(){if(tz(),Q(f.comma)||Q(f.braceR)){i.tokens[i.tokens.length-1].identifierRole=g.ExportAccess;return}if(tz(),Q(f.comma)||Q(f.braceR)){i.tokens[i.tokens.length-1].identifierRole=g.ExportAccess,i.tokens[i.tokens.length-2].isType=!0,i.tokens[i.tokens.length-1].isType=!0;return}if(tz(),Q(f.comma)||Q(f.braceR)){i.tokens[i.tokens.length-3].identifierRole=g.ExportAccess;return}tz(),i.tokens[i.tokens.length-3].identifierRole=g.ExportAccess,i.tokens[i.tokens.length-4].isType=!0,i.tokens[i.tokens.length-3].isType=!0,i.tokens[i.tokens.length-2].isType=!0,i.tokens[i.tokens.length-1].isType=!0}();return}tz(),i.tokens[i.tokens.length-1].identifierRole=g.ExportAccess,C(d._as)&&tz()}()}}function nI(){if(s&&Q(f.name)&&ee()===f.eq){tl();return}if(s&&A(d._type)){let e=en();if(e.type===f.name&&e.contextualKeyword!==d._from){if(R(d._type),ee()===f.eq){tl();return}}else(e.type===f.star||e.type===f.braceL)&&R(d._type)}Q(f.string)||(A(d._module)&&function(){let e=i.snapshot();return(R(d._module),C(d._from))?A(d._from)?(i.restoreFromSnapshot(e),!0):(i.restoreFromSnapshot(e),!1):Q(f.comma)?(i.restoreFromSnapshot(e),!1):(i.restoreFromSnapshot(e),!0)}()&&W(),function(){o&&function(){if(Q(f._typeof)||A(d._type)){let e=en();((e.type===f.name||e.type&f.IS_KEYWORD)&&e.contextualKeyword!==d._from||e.type===f.braceL||e.type===f.star)&&W()}}();let e=!0;if(!Q(f.name)||(eM(),Z(f.comma))){if(Q(f.star)){W(),R(d._as),eM();return}for(P(f.braceL);!Z(f.braceR)&&!i.error;){if(e)e=!1;else if(Z(f.colon)&&B("ES2015 named imports do not destructure. Use another statement for destructuring after the import."),P(f.comma),Z(f.braceR))break;(function(){if(s){!function(){if(tz(),Q(f.comma)||Q(f.braceR)){i.tokens[i.tokens.length-1].identifierRole=g.ImportDeclaration;return}if(tz(),Q(f.comma)||Q(f.braceR)){i.tokens[i.tokens.length-1].identifierRole=g.ImportDeclaration,i.tokens[i.tokens.length-2].isType=!0,i.tokens[i.tokens.length-1].isType=!0;return}if(tz(),Q(f.comma)||Q(f.braceR)){i.tokens[i.tokens.length-3].identifierRole=g.ImportAccess,i.tokens[i.tokens.length-1].identifierRole=g.ImportDeclaration;return}tz(),i.tokens[i.tokens.length-3].identifierRole=g.ImportAccess,i.tokens[i.tokens.length-1].identifierRole=g.ImportDeclaration,i.tokens[i.tokens.length-4].isType=!0,i.tokens[i.tokens.length-3].isType=!0,i.tokens[i.tokens.length-2].isType=!0,i.tokens[i.tokens.length-1].isType=!0}();return}if(o){!function(){let e=i.contextualKeyword===d._type||i.type===f._typeof;(e?W():tz(),A(d._as)&&!S(d._as))?(tz(),(!e||Q(f.name)||i.type&f.IS_KEYWORD)&&tz()):(e&&(Q(f.name)||i.type&f.IS_KEYWORD)&&tz(),C(d._as)&&tz())}();return}eM(),A(d._as)&&(i.tokens[i.tokens.length-1].identifierRole=g.ImportAccess,W(),eM())})()}}}(),R(d._from)),tL(),nA(),F()}function nA(){A(d._assert)&&!L()&&(W(),tj(!1,!1))}class nS{constructor(e,t){this.tokens=e,this.scopes=t}}class nC{__init(){this.resultCode=""}__init2(){this.resultMappings=Array(this.tokens.length)}__init3(){this.tokenIndex=0}constructor(e,t,n,r,s){this.code=e,this.tokens=t,this.isFlowEnabled=n,this.disableESTransforms=r,this.helperManager=s,nC.prototype.__init.call(this),nC.prototype.__init2.call(this),nC.prototype.__init3.call(this)}snapshot(){return{resultCode:this.resultCode,tokenIndex:this.tokenIndex}}restoreToSnapshot(e){this.resultCode=e.resultCode,this.tokenIndex=e.tokenIndex}dangerouslyGetAndRemoveCodeSinceSnapshot(e){let t=this.resultCode.slice(e.resultCode.length);return this.resultCode=e.resultCode,t}reset(){this.resultCode="",this.resultMappings=Array(this.tokens.length),this.tokenIndex=0}matchesContextualAtIndex(e,t){return this.matches1AtIndex(e,f.name)&&this.tokens[e].contextualKeyword===t}identifierNameAtIndex(e){return this.identifierNameForToken(this.tokens[e])}identifierNameAtRelativeIndex(e){return this.identifierNameForToken(this.tokenAtRelativeIndex(e))}identifierName(){return this.identifierNameForToken(this.currentToken())}identifierNameForToken(e){return this.code.slice(e.start,e.end)}rawCodeForToken(e){return this.code.slice(e.start,e.end)}stringValueAtIndex(e){return this.stringValueForToken(this.tokens[e])}stringValue(){return this.stringValueForToken(this.currentToken())}stringValueForToken(e){return this.code.slice(e.start+1,e.end-1)}matches1AtIndex(e,t){return this.tokens[e].type===t}matches2AtIndex(e,t,n){return this.tokens[e].type===t&&this.tokens[e+1].type===n}matches3AtIndex(e,t,n,r){return this.tokens[e].type===t&&this.tokens[e+1].type===n&&this.tokens[e+2].type===r}matches1(e){return this.tokens[this.tokenIndex].type===e}matches2(e,t){return this.tokens[this.tokenIndex].type===e&&this.tokens[this.tokenIndex+1].type===t}matches3(e,t,n){return this.tokens[this.tokenIndex].type===e&&this.tokens[this.tokenIndex+1].type===t&&this.tokens[this.tokenIndex+2].type===n}matches4(e,t,n,r){return this.tokens[this.tokenIndex].type===e&&this.tokens[this.tokenIndex+1].type===t&&this.tokens[this.tokenIndex+2].type===n&&this.tokens[this.tokenIndex+3].type===r}matches5(e,t,n,r,s){return this.tokens[this.tokenIndex].type===e&&this.tokens[this.tokenIndex+1].type===t&&this.tokens[this.tokenIndex+2].type===n&&this.tokens[this.tokenIndex+3].type===r&&this.tokens[this.tokenIndex+4].type===s}matchesContextual(e){return this.matchesContextualAtIndex(this.tokenIndex,e)}matchesContextIdAndLabel(e,t){return this.matches1(e)&&this.currentToken().contextId===t}previousWhitespaceAndComments(){let e=this.code.slice(this.tokenIndex>0?this.tokens[this.tokenIndex-1].end:0,this.tokenIndex<this.tokens.length?this.tokens[this.tokenIndex].start:this.code.length);return this.isFlowEnabled&&(e=e.replace(/@flow/g,"")),e}replaceToken(e){this.resultCode+=this.previousWhitespaceAndComments(),this.appendTokenPrefix(),this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=e,this.appendTokenSuffix(),this.tokenIndex++}replaceTokenTrimmingLeftWhitespace(e){this.resultCode+=this.previousWhitespaceAndComments().replace(/[^\r\n]/g,""),this.appendTokenPrefix(),this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=e,this.appendTokenSuffix(),this.tokenIndex++}removeInitialToken(){this.replaceToken("")}removeToken(){this.replaceTokenTrimmingLeftWhitespace("")}removeBalancedCode(){let e=0;for(;!this.isAtEnd();){if(this.matches1(f.braceL))e++;else if(this.matches1(f.braceR)){if(0===e)return;e--}this.removeToken()}}copyExpectedToken(e){if(this.tokens[this.tokenIndex].type!==e)throw Error(`
                                  Expected token $ {
                                      e
                                  }
                                  `);this.copyToken()}copyToken(){this.resultCode+=this.previousWhitespaceAndComments(),this.appendTokenPrefix(),this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=this.code.slice(this.tokens[this.tokenIndex].start,this.tokens[this.tokenIndex].end),this.appendTokenSuffix(),this.tokenIndex++}copyTokenWithPrefix(e){this.resultCode+=this.previousWhitespaceAndComments(),this.appendTokenPrefix(),this.resultCode+=e,this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=this.code.slice(this.tokens[this.tokenIndex].start,this.tokens[this.tokenIndex].end),this.appendTokenSuffix(),this.tokenIndex++}appendTokenPrefix(){let e=this.currentToken();if((e.numNullishCoalesceStarts||e.isOptionalChainStart)&&(e.isAsyncOperation=function(e){let t=e.currentIndex(),n=0,r=e.currentToken();do{let s=e.tokens[t];if(s.isOptionalChainStart&&n++,s.isOptionalChainEnd&&n--,n+=s.numNullishCoalesceStarts,n-=s.numNullishCoalesceEnds,s.contextualKeyword===d._await&&null==s.identifierRole&&s.scopeDepth===r.scopeDepth)return!0;t+=1}while(n>0&&t<e.tokens.length);return!1}(this)),!this.disableESTransforms){if(e.numNullishCoalesceStarts)for(let t=0;t<e.numNullishCoalesceStarts;t++)e.isAsyncOperation?(this.resultCode+="await ",this.resultCode+=this.helperManager.getHelperName("asyncNullishCoalesce")):this.resultCode+=this.helperManager.getHelperName("nullishCoalesce"),this.resultCode+="(";e.isOptionalChainStart&&(e.isAsyncOperation&&(this.resultCode+="await "),this.tokenIndex>0&&this.tokenAtRelativeIndex(-1).type===f._delete?e.isAsyncOperation?this.resultCode+=this.helperManager.getHelperName("asyncOptionalChainDelete"):this.resultCode+=this.helperManager.getHelperName("optionalChainDelete"):e.isAsyncOperation?this.resultCode+=this.helperManager.getHelperName("asyncOptionalChain"):this.resultCode+=this.helperManager.getHelperName("optionalChain"),this.resultCode+="([")}}appendTokenSuffix(){let e=this.currentToken();if(e.isOptionalChainEnd&&!this.disableESTransforms&&(this.resultCode+="])"),e.numNullishCoalesceEnds&&!this.disableESTransforms)for(let t=0;t<e.numNullishCoalesceEnds;t++)this.resultCode+="))"}appendCode(e){this.resultCode+=e}currentToken(){return this.tokens[this.tokenIndex]}currentTokenCode(){let e=this.currentToken();return this.code.slice(e.start,e.end)}tokenAtRelativeIndex(e){return this.tokens[this.tokenIndex+e]}currentIndex(){return this.tokenIndex}nextToken(){if(this.tokenIndex===this.tokens.length)throw Error("Unexpectedly reached end of input.");this.tokenIndex++}previousToken(){this.tokenIndex--}finish(){if(this.tokenIndex!==this.tokens.length)throw Error("Tried to finish processing tokens before reaching the end.");return this.resultCode+=this.previousWhitespaceAndComments(),{code:this.resultCode,mappings:this.resultMappings}}isAtEnd(){return this.tokenIndex===this.tokens.length}}function nR(e,t){for(e.nextToken();e.currentToken().contextId!==t;)e.nextToken();for(;nL(e.tokenAtRelativeIndex(-1));)e.previousToken()}function nN(e){let t=[];e.nextToken();let n=e.currentToken().contextId;if(null==n)throw Error("Expected context ID on open-paren starting constructor params.");for(;!e.matchesContextIdAndLabel(f.parenR,n);)if(e.currentToken().contextId===n){if(e.nextToken(),nL(e.currentToken())){for(e.nextToken();nL(e.currentToken());)e.nextToken();let n=e.currentToken();if(n.type!==f.name)throw Error("Expected identifier after access modifiers in constructor arg.");let r=e.identifierNameForToken(n);t.push(`
                                  this.$ {
                                      r
                                  } = $ {
                                      r
                                  }
                                  `)}}else e.nextToken();e.nextToken();let r=e.currentIndex(),s=!1;for(;!e.matchesContextIdAndLabel(f.braceR,n);){if(!s&&e.matches2(f._super,f.parenL)){e.nextToken();let t=e.currentToken().contextId;if(null==t)throw Error("Expected a context ID on the super call");for(;!e.matchesContextIdAndLabel(f.parenR,t);)e.nextToken();r=e.currentIndex(),s=!0}e.nextToken()}return e.nextToken(),{constructorInitializerStatements:t,constructorInsertPos:r}}function nL(e){return[f._async,f._get,f._set,f.plus,f.minus,f._readonly,f._static,f._public,f._private,f._protected,f._override,f._abstract,f.star,f._declare,f.hash].includes(e.type)}function nO(e){if(e.removeInitialToken(),e.removeToken(),e.removeToken(),e.removeToken(),e.matches1(f.parenL))e.removeToken(),e.removeToken(),e.removeToken();else for(;e.matches1(f.dot);)e.removeToken(),e.removeToken()}let nD={typeDeclarations:new Set,valueDeclarations:new Set};function nF(e){let t=new Set,n=new Set;for(let r=0;r<e.tokens.length;r++){let s=e.tokens[r];s.type===f.name&&K(s)&&(s.isType?t.add(e.identifierNameForToken(s)):n.add(e.identifierNameForToken(s)))}return{typeDeclarations:t,valueDeclarations:n}}function nP(e){e.matches2(f.name,f.braceL)&&e.matchesContextual(d._assert)&&(e.removeToken(),e.removeToken(),e.removeBalancedCode(),e.removeToken())}function nB(e,t,n){if(!e)return!1;let r=t.currentToken();if(null==r.rhsEndIndex)throw Error("Expected non-null rhsEndIndex on export token.");let s=r.rhsEndIndex-t.currentIndex();if(3!==s&&!(4===s&&t.matches1AtIndex(r.rhsEndIndex-1,f.semi)))return!1;let o=t.tokenAtRelativeIndex(2);if(o.type!==f.name)return!1;let i=t.identifierNameForToken(o);return n.typeDeclarations.has(i)&&!n.valueDeclarations.has(i)}class nj extends e_{__init(){this.hadExport=!1}__init2(){this.hadNamedExport=!1}__init3(){this.hadDefaultExport=!1}constructor(e,t,n,r,s,o,i,a,l,c){super(),this.rootTransformer=e,this.tokens=t,this.importProcessor=n,this.nameManager=r,this.helperManager=s,this.reactHotLoaderTransformer=o,this.enableLegacyBabel5ModuleInterop=i,this.enableLegacyTypeScriptModuleInterop=a,this.isTypeScriptTransformEnabled=l,this.preserveDynamicImport=c,nj.prototype.__init.call(this),nj.prototype.__init2.call(this),nj.prototype.__init3.call(this),this.declarationInfo=l?nF(t):nD}getPrefixCode(){let e="";return this.hadExport&&(e+='Object.defineProperty(exports, "__esModule", {value: true});'),e}getSuffixCode(){return this.enableLegacyBabel5ModuleInterop&&this.hadDefaultExport&&!this.hadNamedExport?"\nmodule.exports = exports.default;\n":""}process(){return this.tokens.matches3(f._import,f.name,f.eq)?this.processImportEquals():this.tokens.matches1(f._import)?(this.processImport(),!0):this.tokens.matches2(f._export,f.eq)?(this.tokens.replaceToken("module.exports"),!0):this.tokens.matches1(f._export)&&!this.tokens.currentToken().isType?(this.hadExport=!0,this.processExport()):!!(this.tokens.matches2(f.name,f.postIncDec)&&this.processPostIncDec())||(this.tokens.matches1(f.name)||this.tokens.matches1(f.jsxName)?this.processIdentifier():this.tokens.matches1(f.eq)?this.processAssignment():this.tokens.matches1(f.assign)?this.processComplexAssignment():!!this.tokens.matches1(f.preIncDec)&&this.processPreIncDec())}processImportEquals(){let e=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);return this.importProcessor.isTypeName(e)?nO(this.tokens):this.tokens.replaceToken("const"),!0}processImport(){if(this.tokens.matches2(f._import,f.parenL)){if(this.preserveDynamicImport){this.tokens.copyToken();return}let e=this.enableLegacyTypeScriptModuleInterop?"":`
                                  $ {
                                      this.helperManager.getHelperName("interopRequireWildcard")
                                  }(`;this.tokens.replaceToken(`
                                      Promise.resolve().then(() => $ {
                                              e
                                          }
                                          require`);let t=this.tokens.currentToken().contextId;if(null==t)throw Error("Expected context ID on dynamic import invocation.");for(this.tokens.copyToken();!this.tokens.matchesContextIdAndLabel(f.parenR,t);)this.rootTransformer.processToken();this.tokens.replaceToken(e?")))":"))");return}let e=this.removeImportAndDetectIfType();if(e)this.tokens.removeToken();else{let e=this.tokens.stringValue();this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(e)),this.tokens.appendCode(this.importProcessor.claimImportCode(e))}nP(this.tokens),this.tokens.matches1(f.semi)&&this.tokens.removeToken()}removeImportAndDetectIfType(){if(this.tokens.removeInitialToken(),this.tokens.matchesContextual(d._type)&&!this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,f.comma)&&!this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,d._from))return this.removeRemainingImport(),!0;if(this.tokens.matches1(f.name)||this.tokens.matches1(f.star))return this.removeRemainingImport(),!1;if(this.tokens.matches1(f.string))return!1;let e=!1;for(;!this.tokens.matches1(f.string);)(!e&&this.tokens.matches1(f.braceL)||this.tokens.matches1(f.comma))&&(this.tokens.removeToken(),(this.tokens.matches2(f.name,f.comma)||this.tokens.matches2(f.name,f.braceR)||this.tokens.matches4(f.name,f.name,f.name,f.comma)||this.tokens.matches4(f.name,f.name,f.name,f.braceR))&&(e=!0)),this.tokens.removeToken();return!e}removeRemainingImport(){for(;!this.tokens.matches1(f.string);)this.tokens.removeToken()}processIdentifier(){let e=this.tokens.currentToken();if(e.shadowsGlobal)return!1;if(e.identifierRole===g.ObjectShorthand)return this.processObjectShorthand();if(e.identifierRole!==g.Access)return!1;let t=this.importProcessor.getIdentifierReplacement(this.tokens.identifierNameForToken(e));if(!t)return!1;let n=this.tokens.currentIndex()+1;for(;n<this.tokens.tokens.length&&this.tokens.tokens[n].type===f.parenR;)n++;return this.tokens.tokens[n].type===f.parenL?this.tokens.tokenAtRelativeIndex(1).type===f.parenL&&this.tokens.tokenAtRelativeIndex(-1).type!==f._new?(this.tokens.replaceToken(`
                                          $ {
                                              t
                                          }.call(void 0, `),this.tokens.removeToken(),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(f.parenR)):this.tokens.replaceToken(`(0, $ {
                                                  t
                                              })`):this.tokens.replaceToken(t),!0}processObjectShorthand(){let e=this.tokens.identifierName(),t=this.importProcessor.getIdentifierReplacement(e);return!!t&&(this.tokens.replaceToken(`
                                              $ {
                                                  e
                                              }: $ {
                                                  t
                                              }
                                              `),!0)}processExport(){if(this.tokens.matches2(f._export,f._enum)||this.tokens.matches3(f._export,f._const,f._enum))return!1;if(this.tokens.matches2(f._export,f._default))return this.hadDefaultExport=!0,!this.tokens.matches3(f._export,f._default,f._enum)&&(this.processExportDefault(),!0);if(this.hadNamedExport=!0,this.tokens.matches2(f._export,f._var)||this.tokens.matches2(f._export,f._let)||this.tokens.matches2(f._export,f._const))return this.processExportVar(),!0;if(this.tokens.matches2(f._export,f._function)||this.tokens.matches3(f._export,f.name,f._function))return this.processExportFunction(),!0;if(this.tokens.matches2(f._export,f._class)||this.tokens.matches3(f._export,f._abstract,f._class)||this.tokens.matches2(f._export,f.at))return this.processExportClass(),!0;if(this.tokens.matches2(f._export,f.braceL))return this.processExportBindings(),!0;if(this.tokens.matches2(f._export,f.star))return this.processExportStar(),!0;if(this.tokens.matches2(f._export,f.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,d._type)){if(this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.matches1(f.braceL)){for(;!this.tokens.matches1(f.braceR);)this.tokens.removeToken();this.tokens.removeToken()}else this.tokens.removeToken(),this.tokens.matches1(f._as)&&(this.tokens.removeToken(),this.tokens.removeToken());return this.tokens.matchesContextual(d._from)&&this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,f.string)&&(this.tokens.removeToken(),this.tokens.removeToken(),nP(this.tokens)),!0}throw Error("Unrecognized export syntax.")}processAssignment(){let e=this.tokens.currentIndex(),t=this.tokens.tokens[e-1];if(t.isType||t.type!==f.name||t.shadowsGlobal||e>=2&&this.tokens.matches1AtIndex(e-2,f.dot)||e>=2&&[f._var,f._let,f._const].includes(this.tokens.tokens[e-2].type))return!1;let n=this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(t));return!!n&&(this.tokens.copyToken(),this.tokens.appendCode(`
                                              $ {
                                                  n
                                              } = `),!0)}processComplexAssignment(){let e=this.tokens.currentIndex(),t=this.tokens.tokens[e-1];if(t.type!==f.name||t.shadowsGlobal||e>=2&&this.tokens.matches1AtIndex(e-2,f.dot))return!1;let n=this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(t));return!!n&&(this.tokens.appendCode(` = $ {
                                                  n
                                              }
                                              `),this.tokens.copyToken(),!0)}processPreIncDec(){let e=this.tokens.currentIndex(),t=this.tokens.tokens[e+1];if(t.type!==f.name||t.shadowsGlobal||e+2<this.tokens.tokens.length&&(this.tokens.matches1AtIndex(e+2,f.dot)||this.tokens.matches1AtIndex(e+2,f.bracketL)||this.tokens.matches1AtIndex(e+2,f.parenL)))return!1;let n=this.tokens.identifierNameForToken(t),r=this.importProcessor.resolveExportBinding(n);return!!r&&(this.tokens.appendCode(`
                                              $ {
                                                  r
                                              } = `),this.tokens.copyToken(),!0)}processPostIncDec(){let e=this.tokens.currentIndex(),t=this.tokens.tokens[e],n=this.tokens.tokens[e+1];if(t.type!==f.name||t.shadowsGlobal||e>=1&&this.tokens.matches1AtIndex(e-1,f.dot))return!1;let r=this.tokens.identifierNameForToken(t),s=this.importProcessor.resolveExportBinding(r);if(!s)return!1;let o=this.tokens.rawCodeForToken(n),i=this.importProcessor.getIdentifierReplacement(r)||r;if("++"===o)this.tokens.replaceToken(`($ {
                                                  i
                                              } = $ {
                                                  s
                                              } = $ {
                                                  i
                                              } + 1, $ {
                                                  i
                                              } - 1)`);else if("--"===o)this.tokens.replaceToken(`($ {
                                                  i
                                              } = $ {
                                                  s
                                              } = $ {
                                                  i
                                              } - 1, $ {
                                                  i
                                              } + 1)`);else throw Error(`
                                              Unexpected operator: $ {
                                                  o
                                              }
                                              `);return this.tokens.removeToken(),!0}processExportDefault(){if(this.tokens.matches4(f._export,f._default,f._function,f.name)||this.tokens.matches5(f._export,f._default,f.name,f._function,f.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,d._async)){this.tokens.removeInitialToken(),this.tokens.removeToken();let e=this.processNamedFunction();this.tokens.appendCode(`
                                              exports.default = $ {
                                                  e
                                              };
                                              `)}else if(this.tokens.matches4(f._export,f._default,f._class,f.name)||this.tokens.matches5(f._export,f._default,f._abstract,f._class,f.name)||this.tokens.matches3(f._export,f._default,f.at)){this.tokens.removeInitialToken(),this.tokens.removeToken(),this.copyDecorators(),this.tokens.matches1(f._abstract)&&this.tokens.removeToken();let e=this.rootTransformer.processNamedClass();this.tokens.appendCode(`
                                              exports.default = $ {
                                                  e
                                              };
                                              `)}else if(nB(this.isTypeScriptTransformEnabled,this.tokens,this.declarationInfo))this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.removeToken();else if(this.reactHotLoaderTransformer){let e=this.nameManager.claimFreeName("_default");this.tokens.replaceToken(`
                                              let $ {
                                                  e
                                              }; exports.
                                              `),this.tokens.copyToken(),this.tokens.appendCode(` = $ {
                                                  e
                                              } = `),this.reactHotLoaderTransformer.setExtractedDefaultExportName(e)}else this.tokens.replaceToken("exports."),this.tokens.copyToken(),this.tokens.appendCode(" =")}copyDecorators(){for(;this.tokens.matches1(f.at);)if(this.tokens.copyToken(),this.tokens.matches1(f.parenL))this.tokens.copyExpectedToken(f.parenL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(f.parenR);else{for(this.tokens.copyExpectedToken(f.name);this.tokens.matches1(f.dot);)this.tokens.copyExpectedToken(f.dot),this.tokens.copyExpectedToken(f.name);this.tokens.matches1(f.parenL)&&(this.tokens.copyExpectedToken(f.parenL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(f.parenR))}}processExportVar(){this.isSimpleExportVar()?this.processSimpleExportVar():this.processComplexExportVar()}isSimpleExportVar(){let e=this.tokens.currentIndex();if(e++,e++,!this.tokens.matches1AtIndex(e,f.name))return!1;for(e++;e<this.tokens.tokens.length&&this.tokens.tokens[e].isType;)e++;return!!this.tokens.matches1AtIndex(e,f.eq)}processSimpleExportVar(){this.tokens.removeInitialToken(),this.tokens.copyToken();let e=this.tokens.identifierName();for(;!this.tokens.matches1(f.eq);)this.rootTransformer.processToken();let t=this.tokens.currentToken().rhsEndIndex;if(null==t)throw Error("Expected = token with an end index.");for(;this.tokens.currentIndex()<t;)this.rootTransformer.processToken();this.tokens.appendCode(`; exports.$ {
                                                  e
                                              } = $ {
                                                  e
                                              }
                                              `)}processComplexExportVar(){this.tokens.removeInitialToken(),this.tokens.removeToken();let e=this.tokens.matches1(f.braceL);e&&this.tokens.appendCode("(");let t=0;for(;;)if(this.tokens.matches1(f.braceL)||this.tokens.matches1(f.dollarBraceL)||this.tokens.matches1(f.bracketL))t++,this.tokens.copyToken();else if(this.tokens.matches1(f.braceR)||this.tokens.matches1(f.bracketR))t--,this.tokens.copyToken();else if(0!==t||this.tokens.matches1(f.name)||this.tokens.currentToken().isType){if(this.tokens.matches1(f.eq)){let e=this.tokens.currentToken().rhsEndIndex;if(null==e)throw Error("Expected = token with an end index.");for(;this.tokens.currentIndex()<e;)this.rootTransformer.processToken()}else{let e=this.tokens.currentToken();if(H(e)){let t=this.tokens.identifierName(),n=this.importProcessor.getIdentifierReplacement(t);if(null===n)throw Error(`
                                              Expected a replacement
                                              for $ {
                                                  t
                                              }
                                              in\ `export var\` syntax.`);
                                          (e.identifierRole === g.ObjectShorthandTopLevelDeclaration || e.identifierRole === g.ObjectShorthandBlockScopedDeclaration || e.identifierRole === g.ObjectShorthandFunctionScopedDeclaration) && (n = `${t}: ${n}`), this.tokens.replaceToken(n)
                                      }
                                      else this.rootTransformer.processToken()
                                  }
                              }
                              else break;
                              if (e) {
                                  let e = this.tokens.currentToken().rhsEndIndex;
                                  if (null == e) throw Error("Expected = token with an end index.");
                                  for (; this.tokens.currentIndex() < e;) this.rootTransformer.processToken();
                                  this.tokens.appendCode(")")
                              }
                          }
                          processExportFunction() {
                              this.tokens.replaceToken("");
                              let e = this.processNamedFunction();
                              this.tokens.appendCode(` exports.${e} = ${e};`)
                          }
                          processNamedFunction() {
                              if (this.tokens.matches1(f._function)) this.tokens.copyToken();
                              else if (this.tokens.matches2(f.name, f._function)) {
                                  if (!this.tokens.matchesContextual(d._async)) throw Error("Expected async keyword in function export.");
                                  this.tokens.copyToken(), this.tokens.copyToken()
                              }
                              if (this.tokens.matches1(f.star) && this.tokens.copyToken(), !this.tokens.matches1(f.name)) throw Error("Expected identifier for exported function name.");
                              let e = this.tokens.identifierName();
                              if (this.tokens.copyToken(), this.tokens.currentToken().isType)
                                  for (this.tokens.removeInitialToken(); this.tokens.currentToken().isType;) this.tokens.removeToken();
                              return this.tokens.copyExpectedToken(f.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(f.parenR), this.rootTransformer.processPossibleTypeRange(), this.tokens.copyExpectedToken(f.braceL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(f.braceR), e
                          }
                          processExportClass() {
                              this.tokens.removeInitialToken(), this.copyDecorators(), this.tokens.matches1(f._abstract) && this.tokens.removeToken();
                              let e = this.rootTransformer.processNamedClass();
                              this.tokens.appendCode(` exports.${e} = ${e};`)
                          }
                          processExportBindings() {
                              this.tokens.removeInitialToken(), this.tokens.removeToken();
                              let e = [];
                              for (;;) {
                                  if (this.tokens.matches1(f.braceR)) {
                                      this.tokens.removeToken();
                                      break
                                  }
                                  let t = em(this.tokens);
                                  for (; this.tokens.currentIndex() < t.endIndex;) this.tokens.removeToken();
                                  if (!t.isType && !this.shouldElideExportedIdentifier(t.leftName)) {
                                      let n = t.leftName,
                                          r = t.rightName,
                                          s = this.importProcessor.getIdentifierReplacement(n);
                                      e.push(`exports.${r} = ${s||n};`)
                                  }
                                  if (this.tokens.matches1(f.braceR)) {
                                      this.tokens.removeToken();
                                      break
                                  }
                                  if (this.tokens.matches2(f.comma, f.braceR)) {
                                      this.tokens.removeToken(), this.tokens.removeToken();
                                      break
                                  }
                                  if (this.tokens.matches1(f.comma)) this.tokens.removeToken();
                                  else throw Error(`Unexpected token: ${JSON.stringify(this.tokens.currentToken())}`)
                              }
                              if (this.tokens.matchesContextual(d._from)) {
                                  this.tokens.removeToken();
                                  let e = this.tokens.stringValue();
                                  this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(e)), nP(this.tokens)
                              } else this.tokens.appendCode(e.join(" "));
                              this.tokens.matches1(f.semi) && this.tokens.removeToken()
                          }
                          processExportStar() {
                              for (this.tokens.removeInitialToken(); !this.tokens.matches1(f.string);) this.tokens.removeToken();
                              let e = this.tokens.stringValue();
                              this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(e)), nP(this.tokens), this.tokens.matches1(f.semi) && this.tokens.removeToken()
                          }
                          shouldElideExportedIdentifier(e) {
                              return this.isTypeScriptTransformEnabled && !this.declarationInfo.valueDeclarations.has(e)
                          }
                      }
                      class nM extends e_ {
                          constructor(e, t, n, r, s, o) {
                              super(), this.tokens = e, this.nameManager = t, this.helperManager = n, this.reactHotLoaderTransformer = r, this.isTypeScriptTransformEnabled = s, this.nonTypeIdentifiers = s ? ew(e, o) : new Set, this.declarationInfo = s ? nF(e) : nD, this.injectCreateRequireForImportRequire = !!o.injectCreateRequireForImportRequire
                          }
                          process() {
                              if (this.tokens.matches3(f._import, f.name, f.eq)) return this.processImportEquals();
                              if (this.tokens.matches4(f._import, f.name, f.name, f.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, d._type)) {
                                  this.tokens.removeInitialToken();
                                  for (let e = 0; e < 7; e++) this.tokens.removeToken();
                                  return !0
                              }
                              if (this.tokens.matches2(f._export, f.eq)) return this.tokens.replaceToken("module.exports"), !0;
                              if (this.tokens.matches5(f._export, f._import, f.name, f.name, f.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, d._type)) {
                                  this.tokens.removeInitialToken();
                                  for (let e = 0; e < 8; e++) this.tokens.removeToken();
                                  return !0
                              }
                              if (this.tokens.matches1(f._import)) return this.processImport();
                              if (this.tokens.matches2(f._export, f._default)) return this.processExportDefault();
                              if (this.tokens.matches2(f._export, f.braceL)) return this.processNamedExports();
                              if (this.tokens.matches2(f._export, f.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, d._type)) {
                                  if (this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.matches1(f.braceL)) {
                                      for (; !this.tokens.matches1(f.braceR);) this.tokens.removeToken();
                                      this.tokens.removeToken()
                                  } else this.tokens.removeToken(), this.tokens.matches1(f._as) && (this.tokens.removeToken(), this.tokens.removeToken());
                                  return this.tokens.matchesContextual(d._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, f.string) && (this.tokens.removeToken(), this.tokens.removeToken(), nP(this.tokens)), !0
                              }
                              return !1
                          }
                          processImportEquals() {
                              let e = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
                              return this.isTypeName(e) ? nO(this.tokens) : this.injectCreateRequireForImportRequire ? (this.tokens.replaceToken("const"), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.replaceToken(this.helperManager.getHelperName("require"))) : this.tokens.replaceToken("const"), !0
                          }
                          processImport() {
                              if (this.tokens.matches2(f._import, f.parenL)) return !1;
                              let e = this.tokens.snapshot(),
                                  t = this.removeImportTypeBindings();
                              if (t) {
                                  for (this.tokens.restoreToSnapshot(e); !this.tokens.matches1(f.string);) this.tokens.removeToken();
                                  this.tokens.removeToken(), nP(this.tokens), this.tokens.matches1(f.semi) && this.tokens.removeToken()
                              }
                              return !0
                          }
                          removeImportTypeBindings() {
                              if (this.tokens.copyExpectedToken(f._import), this.tokens.matchesContextual(d._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, f.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, d._from)) return !0;
                              if (this.tokens.matches1(f.string)) return this.tokens.copyToken(), !1;
                              this.tokens.matchesContextual(d._module) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, d._from) && this.tokens.copyToken();
                              let e = !1,
                                  t = !1;
                              if (this.tokens.matches1(f.name) && (this.isTypeName(this.tokens.identifierName()) ? (this.tokens.removeToken(), this.tokens.matches1(f.comma) && this.tokens.removeToken()) : (e = !0, this.tokens.copyToken(), this.tokens.matches1(f.comma) && (t = !0, this.tokens.removeToken()))), this.tokens.matches1(f.star)) this.isTypeName(this.tokens.identifierNameAtRelativeIndex(2)) ? (this.tokens.removeToken(), this.tokens.removeToken(), this.tokens.removeToken()) : (t && this.tokens.appendCode(","), e = !0, this.tokens.copyExpectedToken(f.star), this.tokens.copyExpectedToken(f.name), this.tokens.copyExpectedToken(f.name));
                              else if (this.tokens.matches1(f.braceL)) {
                                  for (t && this.tokens.appendCode(","), this.tokens.copyToken(); !this.tokens.matches1(f.braceR);) {
                                      let t = em(this.tokens);
                                      if (t.isType || this.isTypeName(t.rightName)) {
                                          for (; this.tokens.currentIndex() < t.endIndex;) this.tokens.removeToken();
                                          this.tokens.matches1(f.comma) && this.tokens.removeToken()
                                      } else {
                                          for (e = !0; this.tokens.currentIndex() < t.endIndex;) this.tokens.copyToken();
                                          this.tokens.matches1(f.comma) && this.tokens.copyToken()
                                      }
                                  }
                                  this.tokens.copyExpectedToken(f.braceR)
                              }
                              return !e
                          }
                          isTypeName(e) {
                              return this.isTypeScriptTransformEnabled && !this.nonTypeIdentifiers.has(e)
                          }
                          processExportDefault() {
                              if (nB(this.isTypeScriptTransformEnabled, this.tokens, this.declarationInfo)) return this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken(), !0;
                              let e = this.tokens.matches4(f._export, f._default, f._function, f.name) || this.tokens.matches5(f._export, f._default, f.name, f._function, f.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, d._async) || this.tokens.matches4(f._export, f._default, f._class, f.name) || this.tokens.matches5(f._export, f._default, f._abstract, f._class, f.name);
                              if (!e && this.reactHotLoaderTransformer) {
                                  let e = this.nameManager.claimFreeName("_default");
                                  return this.tokens.replaceToken(`let ${e}; export`), this.tokens.copyToken(), this.tokens.appendCode(` ${e} =`), this.reactHotLoaderTransformer.setExtractedDefaultExportName(e), !0
                              }
                              return !1
                          }
                          processNamedExports() {
                              if (!this.isTypeScriptTransformEnabled) return !1;
                              for (this.tokens.copyExpectedToken(f._export), this.tokens.copyExpectedToken(f.braceL); !this.tokens.matches1(f.braceR);) {
                                  let e = em(this.tokens);
                                  if (e.isType || this.shouldElideExportedName(e.leftName)) {
                                      for (; this.tokens.currentIndex() < e.endIndex;) this.tokens.removeToken();
                                      this.tokens.matches1(f.comma) && this.tokens.removeToken()
                                  } else {
                                      for (; this.tokens.currentIndex() < e.endIndex;) this.tokens.copyToken();
                                      this.tokens.matches1(f.comma) && this.tokens.copyToken()
                                  }
                              }
                              return this.tokens.copyExpectedToken(f.braceR), !0
                          }
                          shouldElideExportedName(e) {
                              return this.isTypeScriptTransformEnabled && this.declarationInfo.typeDeclarations.has(e) && !this.declarationInfo.valueDeclarations.has(e)
                          }
                      }
                      class n$ extends e_ {
                          constructor(e, t, n) {
                              super(), this.rootTransformer = e, this.tokens = t, this.isImportsTransformEnabled = n
                          }
                          process() {
                              return !!(this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange()) || (this.tokens.matches1(f._enum) ? (this.processEnum(), !0) : this.tokens.matches2(f._export, f._enum) ? (this.processNamedExportEnum(), !0) : !!this.tokens.matches3(f._export, f._default, f._enum) && (this.processDefaultExportEnum(), !0))
                          }
                          processNamedExportEnum() {
                              if (this.isImportsTransformEnabled) {
                                  this.tokens.removeInitialToken();
                                  let e = this.tokens.identifierNameAtRelativeIndex(1);
                                  this.processEnum(), this.tokens.appendCode(` exports.${e} = ${e};`)
                              } else this.tokens.copyToken(), this.processEnum()
                          }
                          processDefaultExportEnum() {
                              this.tokens.removeInitialToken(), this.tokens.removeToken();
                              let e = this.tokens.identifierNameAtRelativeIndex(1);
                              this.processEnum(), this.isImportsTransformEnabled ? this.tokens.appendCode(` exports.default = ${e};`) : this.tokens.appendCode(` export default ${e};`)
                          }
                          processEnum() {
                              this.tokens.replaceToken("const"), this.tokens.copyExpectedToken(f.name);
                              let e = !1;
                              this.tokens.matchesContextual(d._of) && (this.tokens.removeToken(), e = this.tokens.matchesContextual(d._symbol), this.tokens.removeToken());
                              let t = this.tokens.matches3(f.braceL, f.name, f.eq);
                              this.tokens.appendCode(' = require("flow-enums-runtime")');
                              let n = !e && !t;
                              for (this.tokens.replaceTokenTrimmingLeftWhitespace(n ? ".Mirrored([" : "({"); !this.tokens.matches1(f.braceR);) {
                                  if (this.tokens.matches1(f.ellipsis)) {
                                      this.tokens.removeToken();
                                      break
                                  }
                                  this.processEnumElement(e, t), this.tokens.matches1(f.comma) && this.tokens.copyToken()
                              }
                              this.tokens.replaceToken(n ? "]);" : "});")
                          }
                          processEnumElement(e, t) {
                              if (e) {
                                  let e = this.tokens.identifierName();
                                  this.tokens.copyToken(), this.tokens.appendCode(`: Symbol("${e}")`)
                              } else t ? (this.tokens.copyToken(), this.tokens.replaceTokenTrimmingLeftWhitespace(":"), this.tokens.copyToken()) : this.tokens.replaceToken(`"${this.tokens.identifierName()}"`)
                          }
                      }
                      let nq = "jest",
                          nU = ["mock", "unmock", "enableAutomock", "disableAutomock"];
                      class nG extends e_ {
                          __init() {
                              this.hoistedFunctionNames = []
                          }
                          constructor(e, t, n, r) {
                              super(), this.rootTransformer = e, this.tokens = t, this.nameManager = n, this.importProcessor = r, nG.prototype.__init.call(this)
                          }
                          process() {
                              return !!(0 === this.tokens.currentToken().scopeDepth && this.tokens.matches4(f.name, f.dot, f.name, f.parenL)) && this.tokens.identifierName() === nq && ! function(e) {
                                  let t;
                                  let n = e[0],
                                      r = 1;
                                  for (; r < e.length;) {
                                      let s = e[r],
                                          o = e[r + 1];
                                      if (r += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
                                      "access" === s || "optionalAccess" === s ? (t = n, n = o(n)) : ("call" === s || "optionalCall" === s) && (n = o((...e) => n.call(t, ...e)), t = void 0)
                                  }
                                  return n
                              }([this, "access", e => e.importProcessor, "optionalAccess", e => e.getGlobalNames, "call", e => e(), "optionalAccess", e => e.has, "call", e => e(nq)]) && this.extractHoistedCalls()
                          }
                          getHoistedCode() {
                              return this.hoistedFunctionNames.length > 0 ? this.hoistedFunctionNames.map(e => `${e}();`).join("") : ""
                          }
                          extractHoistedCalls() {
                              this.tokens.removeToken();
                              let e = !1;
                              for (; this.tokens.matches3(f.dot, f.name, f.parenL);) {
                                  let t = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1),
                                      n = nU.includes(t);
                                  if (n) {
                                      let t = this.nameManager.claimFreeName("__jestHoist");
                                      this.hoistedFunctionNames.push(t), this.tokens.replaceToken(`function ${t}(){${nq}.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(f.parenR), this.tokens.appendCode(";}"), e = !1
                                  } else e ? this.tokens.copyToken() : this.tokens.replaceToken(`${nq}.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(f.parenR), e = !0
                              }
                              return !0
                          }
                      }
                      class nH extends e_ {
                          constructor(e) {
                              super(), this.tokens = e
                          }
                          process() {
                              if (this.tokens.matches1(f.num)) {
                                  let e = this.tokens.currentTokenCode();
                                  if (e.includes("_")) return this.tokens.replaceToken(e.replace(/_/g, "")), !0
                              }
                              return !1
                          }
                      }
                      class nK extends e_ {
                          constructor(e, t) {
                              super(), this.tokens = e, this.nameManager = t
                          }
                          process() {
                              return !!this.tokens.matches2(f._catch, f.braceL) && (this.tokens.copyToken(), this.tokens.appendCode(` (${this.nameManager.claimFreeName("e")})`), !0)
                          }
                      }
                      class nz extends e_ {
                          constructor(e, t) {
                              super(), this.tokens = e, this.nameManager = t
                          }
                          process() {
                              if (this.tokens.matches1(f.nullishCoalescing)) {
                                  let e = this.tokens.currentToken();
                                  return this.tokens.tokens[e.nullishStartIndex].isAsyncOperation ? this.tokens.replaceTokenTrimmingLeftWhitespace(", async () => (") : this.tokens.replaceTokenTrimmingLeftWhitespace(", () => ("), !0
                              }
                              if (this.tokens.matches1(f._delete)) {
                                  let e = this.tokens.tokenAtRelativeIndex(1);
                                  if (e.isOptionalChainStart) return this.tokens.removeInitialToken(), !0
                              }
                              let e = this.tokens.currentToken(),
                                  t = e.subscriptStartIndex;
                              if (null != t && this.tokens.tokens[t].isOptionalChainStart && this.tokens.tokenAtRelativeIndex(-1).type !== f._super) {
                                  let e;
                                  let n = this.nameManager.claimFreeName("_");
                                  if (e = t > 0 && this.tokens.matches1AtIndex(t - 1, f._delete) && this.isLastSubscriptInChain() ? `${n} => delete ${n}` : `${n} => ${n}`, this.tokens.tokens[t].isAsyncOperation && (e = `async ${e}`), this.tokens.matches2(f.questionDot, f.parenL) || this.tokens.matches2(f.questionDot, f.lessThan)) this.justSkippedSuper() && this.tokens.appendCode(".bind(this)"), this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${e}`);
                                  else if (this.tokens.matches2(f.questionDot, f.bracketL)) this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${e}`);
                                  else if (this.tokens.matches1(f.questionDot)) this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${e}.`);
                                  else if (this.tokens.matches1(f.dot)) this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${e}.`);
                                  else if (this.tokens.matches1(f.bracketL)) this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${e}[`);
                                  else if (this.tokens.matches1(f.parenL)) this.justSkippedSuper() && this.tokens.appendCode(".bind(this)"), this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${e}(`);
                                  else throw Error("Unexpected subscript operator in optional chain.");
                                  return !0
                              }
                              return !1
                          }
                          isLastSubscriptInChain() {
                              let e = 0;
                              for (let t = this.tokens.currentIndex() + 1;; t++) {
                                  if (t >= this.tokens.tokens.length) throw Error("Reached the end of the code while finding the end of the access chain.");
                                  if (this.tokens.tokens[t].isOptionalChainStart ? e++ : this.tokens.tokens[t].isOptionalChainEnd && e--, e < 0) return !0;
                                  if (0 === e && null != this.tokens.tokens[t].subscriptStartIndex) return !1
                              }
                          }
                          justSkippedSuper() {
                              let e = 0,
                                  t = this.tokens.currentIndex() - 1;
                              for (;;) {
                                  if (t < 0) throw Error("Reached the start of the code while finding the start of the access chain.");
                                  if (this.tokens.tokens[t].isOptionalChainStart ? e-- : this.tokens.tokens[t].isOptionalChainEnd && e++, e < 0) return !1;
                                  if (0 === e && null != this.tokens.tokens[t].subscriptStartIndex) return this.tokens.tokens[t - 1].type === f._super;
                                  t--
                              }
                          }
                      }
                      class nW extends e_ {
                          constructor(e, t, n, r) {
                              super(), this.rootTransformer = e, this.tokens = t, this.importProcessor = n, this.options = r
                          }
                          process() {
                              let e = this.tokens.currentIndex();
                              if ("createReactClass" === this.tokens.identifierName()) {
                                  let t = this.importProcessor && this.importProcessor.getIdentifierReplacement("createReactClass");
                                  return t ? this.tokens.replaceToken(`(0, ${t})`) : this.tokens.copyToken(), this.tryProcessCreateClassCall(e), !0
                              }
                              if (this.tokens.matches3(f.name, f.dot, f.name) && "React" === this.tokens.identifierName() && "createClass" === this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 2)) {
                                  let t = this.importProcessor && this.importProcessor.getIdentifierReplacement("React") || "React";
                                  return t ? (this.tokens.replaceToken(t), this.tokens.copyToken(), this.tokens.copyToken()) : (this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.copyToken()), this.tryProcessCreateClassCall(e), !0
                              }
                              return !1
                          }
                          tryProcessCreateClassCall(e) {
                              let t = this.findDisplayName(e);
                              t && this.classNeedsDisplayName() && (this.tokens.copyExpectedToken(f.parenL), this.tokens.copyExpectedToken(f.braceL), this.tokens.appendCode(`displayName: '${t}',`), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(f.braceR), this.tokens.copyExpectedToken(f.parenR))
                          }
                          findDisplayName(e) {
                              return e < 2 ? null : this.tokens.matches2AtIndex(e - 2, f.name, f.eq) || e >= 2 && this.tokens.tokens[e - 2].identifierRole === g.ObjectKey ? this.tokens.identifierNameAtIndex(e - 2) : this.tokens.matches2AtIndex(e - 2, f._export, f._default) ? this.getDisplayNameFromFilename() : null
                          }
                          getDisplayNameFromFilename() {
                              let e = this.options.filePath || "unknown",
                                  t = e.split("/"),
                                  n = t[t.length - 1],
                                  r = n.lastIndexOf("."),
                                  s = -1 === r ? n : n.slice(0, r);
                              return "index" === s && t[t.length - 2] ? t[t.length - 2] : s
                          }
                          classNeedsDisplayName() {
                              let e = this.tokens.currentIndex();
                              if (!this.tokens.matches2(f.parenL, f.braceL)) return !1;
                              let t = e + 1,
                                  n = this.tokens.tokens[t].contextId;
                              if (null == n) throw Error("Expected non-null context ID on object open-brace.");
                              for (; e < this.tokens.tokens.length; e++) {
                                  let t = this.tokens.tokens[e];
                                  if (t.type === f.braceR && t.contextId === n) {
                                      e++;
                                      break
                                  }
                                  if ("displayName" === this.tokens.identifierNameAtIndex(e) && this.tokens.tokens[e].identifierRole === g.ObjectKey && t.contextId === n) return !1
                              }
                              if (e === this.tokens.tokens.length) throw Error("Unexpected end of input when processing React class.");
                              return this.tokens.matches1AtIndex(e, f.parenR) || this.tokens.matches2AtIndex(e, f.comma, f.parenR)
                          }
                      }
                      class nV extends e_ {
                          __init() {
                              this.extractedDefaultExportName = null
                          }
                          constructor(e, t) {
                              super(), this.tokens = e, this.filePath = t, nV.prototype.__init.call(this)
                          }
                          setExtractedDefaultExportName(e) {
                              this.extractedDefaultExportName = e
                          }
                          getPrefixCode() {
                              return `
(function () {
var enterModule = require('react-hot-loader').enterModule;
enterModule && enterModule(module);
})();`.replace(/\s+/g, " ").trim()
                          }
                          getSuffixCode() {
                              let e = new Set;
                              for (let t of this.tokens.tokens) !t.isType && K(t) && t.identifierRole !== g.ImportDeclaration && e.add(this.tokens.identifierNameForToken(t));
                              let t = Array.from(e).map(e => ({
                                  variableName: e,
                                  uniqueLocalName: e
                              }));
                              return this.extractedDefaultExportName && t.push({
                                  variableName: this.extractedDefaultExportName,
                                  uniqueLocalName: "default"
                              }), `
;(function () {
var reactHotLoader = require('react-hot-loader').default;
var leaveModule = require('react-hot-loader').leaveModule;
if (!reactHotLoader) {
return;
}
${t.map(({variableName:e,uniqueLocalName:t})=>`
                              reactHotLoader.register($ {
                                  e
                              }, "${t}", $ {
                                  JSON.stringify(this.filePath || "")
                              });
                              `).join("\n")}
leaveModule(module);
})();`
                          }
                          process() {
                              return !1
                          }
                      }
                      let nY = new Set(["break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "export", "extends", "finally", "for", "function", "if", "import", "in", "instanceof", "new", "return", "super", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "yield", "enum", "implements", "interface", "let", "package", "private", "protected", "public", "static", "await", "false", "null", "true"]);

                      function nX(e) {
                          if (0 === e.length || !U[e.charCodeAt(0)]) return !1;
                          for (let t = 1; t < e.length; t++)
                              if (!q[e.charCodeAt(t)]) return !1;
                          return !nY.has(e)
                      }
                      class nZ extends e_ {
                          constructor(e, t, n) {
                              super(), this.rootTransformer = e, this.tokens = t, this.isImportsTransformEnabled = n
                          }
                          process() {
                              return !!(this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange()) || (this.tokens.matches1(f._public) || this.tokens.matches1(f._protected) || this.tokens.matches1(f._private) || this.tokens.matches1(f._abstract) || this.tokens.matches1(f._readonly) || this.tokens.matches1(f._override) || this.tokens.matches1(f.nonNullAssertion) ? (this.tokens.removeInitialToken(), !0) : this.tokens.matches1(f._enum) || this.tokens.matches2(f._const, f._enum) ? (this.processEnum(), !0) : !!(this.tokens.matches2(f._export, f._enum) || this.tokens.matches3(f._export, f._const, f._enum)) && (this.processEnum(!0), !0))
                          }
                          processEnum(e = !1) {
                              for (this.tokens.removeInitialToken(); this.tokens.matches1(f._const) || this.tokens.matches1(f._enum);) this.tokens.removeToken();
                              let t = this.tokens.identifierName();
                              this.tokens.removeToken(), e && !this.isImportsTransformEnabled && this.tokens.appendCode("export "), this.tokens.appendCode(`var ${t}; (function (${t})`), this.tokens.copyExpectedToken(f.braceL), this.processEnumBody(t), this.tokens.copyExpectedToken(f.braceR), e && this.isImportsTransformEnabled ? this.tokens.appendCode(`)(${t} || (exports.${t} = ${t} = {}));`) : this.tokens.appendCode(`)(${t} || (${t} = {}));`)
                          }
                          processEnumBody(e) {
                              let t = null;
                              for (; !this.tokens.matches1(f.braceR);) {
                                  let {
                                      nameStringCode: n,
                                      variableName: r
                                  } = this.extractEnumKeyInfo(this.tokens.currentToken());
                                  this.tokens.removeInitialToken(), this.tokens.matches3(f.eq, f.string, f.comma) || this.tokens.matches3(f.eq, f.string, f.braceR) ? this.processStringLiteralEnumMember(e, n, r) : this.tokens.matches1(f.eq) ? this.processExplicitValueEnumMember(e, n, r) : this.processImplicitValueEnumMember(e, n, r, t), this.tokens.matches1(f.comma) && this.tokens.removeToken(), t = null != r ? r : `${e}[${n}]`
                              }
                          }
                          extractEnumKeyInfo(e) {
                              if (e.type === f.name) {
                                  let t = this.tokens.identifierNameForToken(e);
                                  return {
                                      nameStringCode: `"${t}"`,
                                      variableName: nX(t) ? t : null
                                  }
                              }
                              if (e.type === f.string) {
                                  let t = this.tokens.stringValueForToken(e);
                                  return {
                                      nameStringCode: this.tokens.code.slice(e.start, e.end),
                                      variableName: nX(t) ? t : null
                                  }
                              }
                              throw Error("Expected name or string at beginning of enum element.")
                          }
                          processStringLiteralEnumMember(e, t, n) {
                              null != n ? (this.tokens.appendCode(`const ${n}`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(`; ${e}[${t}] = ${n};`)) : (this.tokens.appendCode(`${e}[${t}]`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(";"))
                          }
                          processExplicitValueEnumMember(e, t, n) {
                              let r = this.tokens.currentToken().rhsEndIndex;
                              if (null == r) throw Error("Expected rhsEndIndex on enum assign.");
                              if (null != n) {
                                  for (this.tokens.appendCode(`const ${n}`), this.tokens.copyToken(); this.tokens.currentIndex() < r;) this.rootTransformer.processToken();
                                  this.tokens.appendCode(`; ${e}[${e}[${t}] = ${n}] = ${t};`)
                              } else {
                                  for (this.tokens.appendCode(`${e}[${e}[${t}]`), this.tokens.copyToken(); this.tokens.currentIndex() < r;) this.rootTransformer.processToken();
                                  this.tokens.appendCode(`] = ${t};`)
                              }
                          }
                          processImplicitValueEnumMember(e, t, n, r) {
                              let s = null != r ? `${r} + 1` : "0";
                              null != n && (this.tokens.appendCode(`const ${n} = ${s}; `), s = n), this.tokens.appendCode(`${e}[${e}[${t}] = ${s}] = ${t};`)
                          }
                      }
                      class nJ {
                          __init() {
                              this.transformers = []
                          }
                          __init2() {
                              this.generatedVariables = []
                          }
                          constructor(e, t, n, r) {
                              nJ.prototype.__init.call(this), nJ.prototype.__init2.call(this), this.nameManager = e.nameManager, this.helperManager = e.helperManager;
                              let {
                                  tokenProcessor: s,
                                  importProcessor: o
                              } = e;
                              this.tokens = s, this.isImportsTransformEnabled = t.includes("imports"), this.isReactHotLoaderTransformEnabled = t.includes("react-hot-loader"), this.disableESTransforms = !!r.disableESTransforms, r.disableESTransforms || (this.transformers.push(new nz(s, this.nameManager)), this.transformers.push(new nH(s)), this.transformers.push(new nK(s, this.nameManager))), t.includes("jsx") && ("preserve" !== r.jsxRuntime && this.transformers.push(new ex(this, s, o, this.nameManager, r)), this.transformers.push(new nW(this, s, o, r)));
                              let i = null;
                              if (t.includes("react-hot-loader")) {
                                  if (!r.filePath) throw Error("filePath is required when using the react-hot-loader transform.");
                                  i = new nV(s, r.filePath), this.transformers.push(i)
                              }
                              if (t.includes("imports")) {
                                  if (null === o) throw Error("Expected non-null importProcessor with imports transform enabled.");
                                  this.transformers.push(new nj(this, s, o, this.nameManager, this.helperManager, i, n, !!r.enableLegacyTypeScriptModuleInterop, t.includes("typescript"), !!r.preserveDynamicImport))
                              } else this.transformers.push(new nM(s, this.nameManager, this.helperManager, i, t.includes("typescript"), r));
                              t.includes("flow") && this.transformers.push(new n$(this, s, t.includes("imports"))), t.includes("typescript") && this.transformers.push(new nZ(this, s, t.includes("imports"))), t.includes("jest") && this.transformers.push(new nG(this, s, this.nameManager, o))
                          }
                          transform() {
                              this.tokens.reset(), this.processBalancedCode();
                              let e = this.isImportsTransformEnabled,
                                  t = e ? '"use strict";' : "";
                              for (let e of this.transformers) t += e.getPrefixCode();
                              for (let e of (t += this.helperManager.emitHelpers() + this.generatedVariables.map(e => ` var ${e};`).join(""), this.transformers)) t += e.getHoistedCode();
                              let n = "";
                              for (let e of this.transformers) n += e.getSuffixCode();
                              let r = this.tokens.finish(),
                                  {
                                      code: s
                                  } = r;
                              if (!s.startsWith("#!")) return {
                                  code: t + s + n,
                                  mappings: this.shiftMappings(r.mappings, t.length)
                              };
                              {
                                  let e = s.indexOf("\n");
                                  return -1 === e && (e = s.length, s += "\n"), {
                                      code: s.slice(0, e + 1) + t + s.slice(e + 1) + n,
                                      mappings: this.shiftMappings(r.mappings, t.length)
                                  }
                              }
                          }
                          processBalancedCode() {
                              let e = 0,
                                  t = 0;
                              for (; !this.tokens.isAtEnd();) {
                                  if (this.tokens.matches1(f.braceL) || this.tokens.matches1(f.dollarBraceL)) e++;
                                  else if (this.tokens.matches1(f.braceR)) {
                                      if (0 === e) return;
                                      e--
                                  }
                                  if (this.tokens.matches1(f.parenL)) t++;
                                  else if (this.tokens.matches1(f.parenR)) {
                                      if (0 === t) return;
                                      t--
                                  }
                                  this.processToken()
                              }
                          }
                          processToken() {
                              if (this.tokens.matches1(f._class)) {
                                  this.processClass();
                                  return
                              }
                              for (let e of this.transformers) {
                                  let t = e.process();
                                  if (t) return
                              }
                              this.tokens.copyToken()
                          }
                          processNamedClass() {
                              if (!this.tokens.matches2(f._class, f.name)) throw Error("Expected identifier for exported class name.");
                              let e = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
                              return this.processClass(), e
                          }
                          processClass() {
                              let e = function(e, t, n, r) {
                                      let s = t.snapshot(),
                                          o = function(e) {
                                              let t = e.currentToken(),
                                                  n = t.contextId;
                                              if (null == n) throw Error("Expected context ID on class token.");
                                              let r = t.isExpression;
                                              if (null == r) throw Error("Expected isExpression on class token.");
                                              let s = null,
                                                  o = !1;
                                              for (e.nextToken(), e.matches1(f.name) && (s = e.identifierName()); !e.matchesContextIdAndLabel(f.braceL, n);) e.matches1(f._extends) && !e.currentToken().isType && (o = !0), e.nextToken();
                                              return {
                                                  isExpression: r,
                                                  className: s,
                                                  hasSuperclass: o
                                              }
                                          }(t),
                                          i = [],
                                          a = [],
                                          l = [],
                                          c = null,
                                          u = [],
                                          p = [],
                                          h = t.currentToken().contextId;
                                      if (null == h) throw Error("Expected non-null class context ID on class open-brace.");
                                      for (t.nextToken(); !t.matchesContextIdAndLabel(f.braceR, h);)
                                          if (t.matchesContextual(d._constructor) && !t.currentToken().isType)({
                                              constructorInitializerStatements: i,
                                              constructorInsertPos: c
                                          } = nN(t));
                                          else if (t.matches1(f.semi)) r || p.push({
                                          start: t.currentIndex(),
                                          end: t.currentIndex() + 1
                                      }), t.nextToken();
                                      else if (t.currentToken().isType) t.nextToken();
                                      else {
                                          let s = t.currentIndex(),
                                              o = !1,
                                              m = !1,
                                              g = !1;
                                          for (; nL(t.currentToken());) t.matches1(f._static) && (o = !0), t.matches1(f.hash) && (m = !0), (t.matches1(f._declare) || t.matches1(f._abstract)) && (g = !0), t.nextToken();
                                          if (o && t.matches1(f.braceL) || m) {
                                              nR(t, h);
                                              continue
                                          }
                                          if (t.matchesContextual(d._constructor) && !t.currentToken().isType) {
                                              ({
                                                  constructorInitializerStatements: i,
                                                  constructorInsertPos: c
                                              } = nN(t));
                                              continue
                                          }
                                          let k = t.currentIndex();
                                          if (function(e) {
                                                  if (e.matches1(f.bracketL)) {
                                                      let t = e.currentToken(),
                                                          n = t.contextId;
                                                      if (null == n) throw Error("Expected class context ID on computed name open bracket.");
                                                      for (; !e.matchesContextIdAndLabel(f.bracketR, n);) e.nextToken();
                                                      e.nextToken()
                                                  } else e.nextToken()
                                              }(t), t.matches1(f.lessThan) || t.matches1(f.parenL)) {
                                              nR(t, h);
                                              continue
                                          }
                                          for (; t.currentToken().isType;) t.nextToken();
                                          if (t.matches1(f.eq)) {
                                              let r;
                                              let s = t.currentIndex(),
                                                  i = t.currentToken().rhsEndIndex;
                                              if (null == i) throw Error("Expected rhsEndIndex on class field assignment.");
                                              for (t.nextToken(); t.currentIndex() < i;) e.processToken();
                                              o ? (r = n.claimFreeName("__initStatic"), l.push(r)) : (r = n.claimFreeName("__init"), a.push(r)), u.push({
                                                  initializerName: r,
                                                  equalsIndex: s,
                                                  start: k,
                                                  end: t.currentIndex()
                                              })
                                          } else(!r || g) && p.push({
                                              start: s,
                                              end: t.currentIndex()
                                          })
                                      }
                                      return (t.restoreToSnapshot(s), r) ? {
                                          headerInfo: o,
                                          constructorInitializerStatements: i,
                                          instanceInitializerNames: [],
                                          staticInitializerNames: [],
                                          constructorInsertPos: c,
                                          fields: [],
                                          rangesToRemove: p
                                      } : {
                                          headerInfo: o,
                                          constructorInitializerStatements: i,
                                          instanceInitializerNames: a,
                                          staticInitializerNames: l,
                                          constructorInsertPos: c,
                                          fields: u,
                                          rangesToRemove: p
                                      }
                                  }(this, this.tokens, this.nameManager, this.disableESTransforms),
                                  t = (e.headerInfo.isExpression || !e.headerInfo.className) && e.staticInitializerNames.length + e.instanceInitializerNames.length > 0,
                                  n = e.headerInfo.className;
                              t && (n = this.nameManager.claimFreeName("_class"), this.generatedVariables.push(n), this.tokens.appendCode(` (${n} =`));
                              let r = this.tokens.currentToken(),
                                  s = r.contextId;
                              if (null == s) throw Error("Expected class to have a context ID.");
                              for (this.tokens.copyExpectedToken(f._class); !this.tokens.matchesContextIdAndLabel(f.braceL, s);) this.processToken();
                              this.processClassBody(e, n);
                              let o = e.staticInitializerNames.map(e => `${n}.${e}()`);
                              t ? this.tokens.appendCode(`, ${o.map(e=>`${e}, `).join("")}${n})`) : e.staticInitializerNames.length > 0 && this.tokens.appendCode(` ${o.map(e=>`${e};`).join(" ")}`)
                          }
                          processClassBody(e, t) {
                              let {
                                  headerInfo: n,
                                  constructorInsertPos: r,
                                  constructorInitializerStatements: s,
                                  fields: o,
                                  instanceInitializerNames: i,
                                  rangesToRemove: a
                              } = e, l = 0, c = 0, u = this.tokens.currentToken().contextId;
                              if (null == u) throw Error("Expected non-null context ID on class.");
                              this.tokens.copyExpectedToken(f.braceL), this.isReactHotLoaderTransformEnabled && this.tokens.appendCode("__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}");
                              let p = s.length + i.length > 0;
                              if (null === r && p) {
                                  let e = this.makeConstructorInitCode(s, i, t);
                                  if (n.hasSuperclass) {
                                      let t = this.nameManager.claimFreeName("args");
                                      this.tokens.appendCode(`constructor(...${t}) { super(...${t}); ${e}; }`)
                                  } else this.tokens.appendCode(`constructor() { ${e}; }`)
                              }
                              for (; !this.tokens.matchesContextIdAndLabel(f.braceR, u);)
                                  if (l < o.length && this.tokens.currentIndex() === o[l].start) {
                                      let e = !1;
                                      for (this.tokens.matches1(f.bracketL) ? this.tokens.copyTokenWithPrefix(`${o[l].initializerName}() {this`) : this.tokens.matches1(f.string) || this.tokens.matches1(f.num) ? (this.tokens.copyTokenWithPrefix(`${o[l].initializerName}() {this[`), e = !0) : this.tokens.copyTokenWithPrefix(`${o[l].initializerName}() {this.`); this.tokens.currentIndex() < o[l].end;) e && this.tokens.currentIndex() === o[l].equalsIndex && this.tokens.appendCode("]"), this.processToken();
                                      this.tokens.appendCode("}"), l++
                                  } else if (c < a.length && this.tokens.currentIndex() >= a[c].start) {
                                  for (this.tokens.currentIndex() < a[c].end && this.tokens.removeInitialToken(); this.tokens.currentIndex() < a[c].end;) this.tokens.removeToken();
                                  c++
                              } else this.tokens.currentIndex() === r && (this.tokens.copyToken(), p && this.tokens.appendCode(`;${this.makeConstructorInitCode(s,i,t)};`)), this.processToken();
                              this.tokens.copyExpectedToken(f.braceR)
                          }
                          makeConstructorInitCode(e, t, n) {
                              return [...e, ...t.map(e => `${n}.prototype.${e}.call(this)`)].join(";")
                          }
                          processPossibleArrowParamEnd() {
                              if (this.tokens.matches2(f.parenR, f.colon) && this.tokens.tokenAtRelativeIndex(1).isType) {
                                  let e = this.tokens.currentIndex() + 1;
                                  for (; this.tokens.tokens[e].isType;) e++;
                                  if (this.tokens.matches1AtIndex(e, f.arrow)) {
                                      for (this.tokens.removeInitialToken(); this.tokens.currentIndex() < e;) this.tokens.removeToken();
                                      return this.tokens.replaceTokenTrimmingLeftWhitespace(") =>"), !0
                                  }
                              }
                              return !1
                          }
                          processPossibleAsyncArrowWithTypeParams() {
                              if (!this.tokens.matchesContextual(d._async) && !this.tokens.matches1(f._async)) return !1;
                              let e = this.tokens.tokenAtRelativeIndex(1);
                              if (e.type !== f.lessThan || !e.isType) return !1;
                              let t = this.tokens.currentIndex() + 1;
                              for (; this.tokens.tokens[t].isType;) t++;
                              if (this.tokens.matches1AtIndex(t, f.parenL)) {
                                  for (this.tokens.replaceToken("async ("), this.tokens.removeInitialToken(); this.tokens.currentIndex() < t;) this.tokens.removeToken();
                                  return this.tokens.removeToken(), this.processBalancedCode(), this.processToken(), !0
                              }
                              return !1
                          }
                          processPossibleTypeRange() {
                              if (this.tokens.currentToken().isType) {
                                  for (this.tokens.removeInitialToken(); this.tokens.currentToken().isType;) this.tokens.removeToken();
                                  return !0
                              }
                              return !1
                          }
                          shiftMappings(e, t) {
                              for (let n = 0; n < e.length; n++) {
                                  let r = e[n];
                                  void 0 !== r && (e[n] = r + t)
                              }
                              return e
                          }
                      }! function() {
                          function e(e) {
                              this.string = e;
                              for (var t = [0], n = 0; n < e.length;) switch (e[n]) {
                                  case "\n":
                                      t.push(n += 1);
                                      break;
                                  case "\r":
                                      "\n" === e[n += 1] && (n += 1), t.push(n);
                                      break;
                                  default:
                                      n++
                              }
                              this.offsets = t
                          }
                          e.prototype.locationForIndex = function(e) {
                              if (e < 0 || e > this.string.length) return null;
                              for (var t = 0, n = this.offsets; n[t + 1] <= e;) t++;
                              var r = e - n[t];
                              return {
                                  line: t,
                                  column: r
                              }
                          }, e.prototype.indexForLocation = function(e) {
                              var t = e.line,
                                  n = e.column;
                              return t < 0 || t >= this.offsets.length || n < 0 || n > this.lengthOfLine(t) ? null : this.offsets[t] + n
                          }, e.prototype.lengthOfLine = function(e) {
                              var t = this.offsets[e];
                              return (e === this.offsets.length - 1 ? this.string.length : this.offsets[e + 1]) - t
                          }
                      }();
                      var nQ = {
                          characterData: !0,
                          characterDataOldValue: !0,
                          childList: !0,
                          subtree: !0
                      };

                      function n1(e) {
                          var t = window.getSelection();
                          t.empty(), t.addRange(e)
                      }

                      function n0(e) {
                          return (e.metaKey || e.ctrlKey) && !e.altKey && "KeyZ" === e.code
                      }

                      function n2(e) {
                          e = [e.firstChild];
                          for (var t, n = ""; t = e.pop();) t.nodeType === Node.TEXT_NODE ? n += t.textContent : t.nodeType === Node.ELEMENT_NODE && "BR" === t.nodeName && (n += "\n"), t.nextSibling && e.push(t.nextSibling), t.firstChild && e.push(t.firstChild);
                          return "\n" !== n[n.length - 1] && (n += "\n"), n
                      }

                      function n3(e) {
                          var t = window.getSelection().getRangeAt(0),
                              n = t.collapsed ? 0 : t.toString().length,
                              r = document.createRange();
                          return r.setStart(e, 0), r.setEnd(t.startContainer, t.startOffset), {
                              position: e = (r = r.toString()).length,
                              extent: n,
                              content: r = (r = r.split("\n"))[t = r.length - 1],
                              line: t
                          }
                      }

                      function n8(e, t, n) {
                          0 >= t && (t = 0), (!n || 0 > n) && (n = t);
                          var r = document.createRange();
                          e = [e.firstChild];
                          for (var s, o = 0, i = t; s = e[e.length - 1];) {
                              if (s.nodeType === Node.TEXT_NODE) {
                                  if (o + s.textContent.length >= i) {
                                      var a = i - o;
                                      if (i === t) {
                                          if (i = r, a < s.textContent.length ? i.setStart(s, a) : i.setStartAfter(s), n !== t) {
                                              i = n;
                                              continue
                                          }
                                          break
                                      }
                                      t = r, a < (n = s).textContent.length ? t.setEnd(n, a) : t.setEndAfter(n);
                                      break
                                  }
                                  o += s.textContent.length
                              } else if (s.nodeType === Node.ELEMENT_NODE && "BR" === s.nodeName) {
                                  if (o + 1 >= i) {
                                      if (i === t) {
                                          if (a = r, 0 < s.textContent.length ? a.setStart(s, 0) : a.setStartAfter(s), n !== t) {
                                              i = n;
                                              continue
                                          }
                                          break
                                      }
                                      t = r, 0 < (n = s).textContent.length ? t.setEnd(n, 0) : t.setEndAfter(n);
                                      break
                                  }
                                  o++
                              }
                              e.pop(), s.nextSibling && e.push(s.nextSibling), s.firstChild && e.push(s.firstChild)
                          }
                          return r
                      }
                      let n6 = {
                              plain: {
                                  color: "#C5C8C6",
                                  backgroundColor: "#1D1F21"
                              },
                              styles: [{
                                  types: ["prolog", "comment", "doctype", "cdata"],
                                  style: {
                                      color: "hsl(30, 20%, 50%)"
                                  }
                              }, {
                                  types: ["property", "tag", "boolean", "number", "constant", "symbol"],
                                  style: {
                                      color: "hsl(350, 40%, 70%)"
                                  }
                              }, {
                                  types: ["attr-name", "string", "char", "builtin", "insterted"],
                                  style: {
                                      color: "hsl(75, 70%, 60%)"
                                  }
                              }, {
                                  types: ["operator", "entity", "url", "string", "variable", "language-css"],
                                  style: {
                                      color: "hsl(40, 90%, 60%)"
                                  }
                              }, {
                                  types: ["deleted"],
                                  style: {
                                      color: "rgb(255, 85, 85)"
                                  }
                              }, {
                                  types: ["italic"],
                                  style: {
                                      fontStyle: "italic"
                                  }
                              }, {
                                  types: ["important", "bold"],
                                  style: {
                                      fontWeight: "bold"
                                  }
                              }, {
                                  types: ["regex", "important"],
                                  style: {
                                      color: "#e90"
                                  }
                              }, {
                                  types: ["atrule", "attr-value", "keyword"],
                                  style: {
                                      color: "hsl(350, 40%, 70%)"
                                  }
                              }, {
                                  types: ["punctuation", "symbol"],
                                  style: {
                                      opacity: .7
                                  }
                              }]
                          },
                          n4 = e => {
                              let t = (0, T.useRef)(null),
                                  [n, r] = (0, T.useState)(e.code || "");
                              (0, T.useEffect)(() => {
                                  r(e.code)
                              }, [e.code]);
                              let s = (0, T.useCallback)(e => {
                                  r(e.slice(0, -1))
                              }, []);
                              return ! function(e, t, n) {
                                  function r(t) {
                                      var n = e.current;
                                      if (n) {
                                          var r = n3(n);
                                          n = n2(n), r.position += t.length - n.length, c.position = r, c.onChange(t, r)
                                      }
                                  }

                                  function s(t, n) {
                                      var r = e.current;
                                      if (r) {
                                          var s = window.getSelection().getRangeAt(0);
                                          s.deleteContents(), s.collapse();
                                          var o = n || 0;
                                          (s = n8(r, n = (s = n3(r)).position + (0 > o ? o : 0), s.position + (0 < o ? o : 0))).deleteContents(), t && s.insertNode(document.createTextNode(t)), n1(n8(r, n + t.length))
                                      }
                                  }

                                  function o(t) {
                                      var n = e.current;
                                      if (n) {
                                          n.focus();
                                          var r = 0;
                                          if ("number" == typeof t) r = t;
                                          else {
                                              var s = n2(n).split("\n").slice(0, t.row);
                                              t.row && (r += s.join("\n").length + 1), r += t.column
                                          }
                                          n1(n8(n, r))
                                      }
                                  }

                                  function i() {
                                      var t = e.current;
                                      return {
                                          text: n2(t),
                                          position: t = n3(t)
                                      }
                                  }

                                  function a() {
                                      c.observer.disconnect()
                                  }
                                  n || (n = {});
                                  var l = (0, T.useState)([])[1],
                                      c = (0, T.useState)(function() {
                                          var e = {
                                              observer: null,
                                              disconnected: !1,
                                              onChange: t,
                                              queue: [],
                                              history: [],
                                              historyAt: -1,
                                              position: null
                                          };
                                          return "undefined" != typeof MutationObserver && (e.observer = new MutationObserver(function(t) {
                                              var n;
                                              (n = e.queue).push.apply(n, t)
                                          })), e
                                      })[0],
                                      u = (0, T.useMemo)(function() {
                                          return {
                                              update: r,
                                              insert: s,
                                              move: o,
                                              getState: i
                                          }
                                      }, []);
                                  "object" != typeof navigator || ((0, T.useLayoutEffect)(function() {
                                      if (c.onChange = t, e.current && !n.disabled) {
                                          if (c.disconnected = !1, c.observer.observe(e.current, nQ), c.position) {
                                              var r = c.position,
                                                  s = r.position;
                                              n1(n8(e.current, s, s + r.extent))
                                          }
                                          return a
                                      }
                                  }), (0, T.useLayoutEffect)(function() {
                                      if (!e.current || n.disabled) c.history.length = 0, c.historyAt = -1;
                                      else {
                                          var t = e.current;
                                          if (c.position) {
                                              t.focus();
                                              var r = c.position,
                                                  s = r.position;
                                              n1(n8(t, s, s + r.extent))
                                          }
                                          var o = t.style.whiteSpace,
                                              i = t.contentEditable,
                                              a = !0;
                                          try {
                                              t.contentEditable = "plaintext-only"
                                          } catch (e) {
                                              t.contentEditable = "true", a = !1
                                          }
                                          "pre" !== o && (t.style.whiteSpace = "pre-wrap"), n.indentation && (t.style.tabSize = t.style.MozTabSize = "" + n.indentation);
                                          var p, h = RegExp("^(?:" + (r = "" + " ".repeat(n.indentation || 0)) + ")"),
                                              d = RegExp("^(?:" + r + ")*(" + r + ")$"),
                                              f = function(n) {
                                                  if (e.current && c.position) {
                                                      var r = n2(t),
                                                          s = n3(t),
                                                          o = new Date().valueOf(),
                                                          i = c.history[c.historyAt];
                                                      !n && 500 > o - p || i && i[1] === r ? p = o : (n = ++c.historyAt, c.history[n] = [s, r], c.history.splice(n + 1), 500 < n && (c.historyAt--, c.history.shift()))
                                                  }
                                              },
                                              m = function() {
                                                  var e;
                                                  if ((e = c.queue).push.apply(e, c.observer.takeRecords()), e = n3(t), c.queue.length) {
                                                      c.observer.disconnect(), c.disconnected = !0;
                                                      var n, r, s = n2(t);
                                                      for (c.position = e; n = c.queue.pop();) {
                                                          for (null !== n.oldValue && (n.target.textContent = n.oldValue), r = n.removedNodes.length - 1; 0 <= r; r--) n.target.insertBefore(n.removedNodes[r], n.nextSibling);
                                                          for (r = n.addedNodes.length - 1; 0 <= r; r--) n.addedNodes[r].parentNode && n.target.removeChild(n.addedNodes[r])
                                                      }
                                                      c.onChange(s, e)
                                                  }
                                              },
                                              g = function(e) {
                                                  if (!e.defaultPrevented && e.target === t) {
                                                      if (c.disconnected) return e.preventDefault(), l([]);
                                                      if (n0(e)) e.preventDefault(), e.shiftKey ? (e = ++c.historyAt, (e = c.history[e]) || (c.historyAt = c.history.length - 1)) : (e = --c.historyAt, (e = c.history[e]) || (c.historyAt = 0)), e && (c.observer.disconnect(), c.disconnected = !0, c.position = e[0], c.onChange(e[1], e[0]));
                                                      else {
                                                          if (f(), "Enter" === e.key) {
                                                              e.preventDefault();
                                                              var r = n3(t),
                                                                  s = /\S/g.exec(r.content);
                                                              r = "\n" + r.content.slice(0, s ? s.index : r.content.length), u.insert(r)
                                                          } else if ((!a || n.indentation) && "Backspace" === e.key) e.preventDefault(), window.getSelection().getRangeAt(0).collapsed ? (r = n3(t), r = d.exec(r.content), u.insert("", r ? -r[1].length : -1)) : u.insert("", 0);
                                                          else if (n.indentation && "Tab" === e.key) {
                                                              e.preventDefault(), s = (r = n3(t)).position - r.content.length;
                                                              var o = n2(t);
                                                              r = e.shiftKey ? o.slice(0, s) + r.content.replace(h, "") + o.slice(s + r.content.length) : o.slice(0, s) + (n.indentation ? " ".repeat(n.indentation) : "	") + o.slice(s), u.update(r)
                                                          }
                                                          e.repeat && m()
                                                      }
                                                  }
                                              },
                                              k = function(e) {
                                                  e.defaultPrevented || e.isComposing || (n0(e) || f(), m(), t.focus())
                                              },
                                              y = function(e) {
                                                  c.position = window.getSelection().rangeCount && e.target === t ? n3(t) : null
                                              },
                                              b = function(e) {
                                                  e.preventDefault(), f(!0), u.insert(e.clipboardData.getData("text/plain")), f(!0), m()
                                              };
                                          return document.addEventListener("selectstart", y), window.addEventListener("keydown", g), t.addEventListener("paste", b), t.addEventListener("keyup", k),
                                              function() {
                                                  document.removeEventListener("selectstart", y), window.removeEventListener("keydown", g), t.removeEventListener("paste", b), t.removeEventListener("keyup", k), t.style.whiteSpace = o, t.contentEditable = i
                                              }
                                      }
                                  }, [e.current, n.disabled, n.indentation]))
                              }(t, s, {
                                  disabled: e.disabled,
                                  indentation: "indentation" === e.tabMode ? 2 : void 0
                              }), (0, T.useEffect)(() => {
                                  e.onChange && e.onChange(n)
                              }, [n]), (0, b.jsx)("div", Object.assign({
                                  className: e.className,
                                  style: e.style
                              }, {
                                  children: (0, b.jsx)(_.ZP, Object.assign({
                                      Prism: e.prism || x.Z,
                                      code: n,
                                      theme: e.theme || n6,
                                      language: e.language
                                  }, {
                                      children: ({
                                          className: e,
                                          tokens: n,
                                          getLineProps: r,
                                          getTokenProps: s,
                                          style: o,
                                          theme: i
                                      }) => (0, b.jsx)("pre", Object.assign({
                                          className: e,
                                          style: Object.assign(Object.assign({
                                              margin: 0,
                                              outline: "none",
                                              padding: 10,
                                              fontFamily: "inherit"
                                          }, i && "object" == typeof i.plain ? i.plain : {}), o),
                                          ref: t,
                                          spellCheck: "false"
                                      }, {
                                          children: n.map((e, t) => (0, b.jsxs)("div", Object.assign({}, r({
                                              line: e,
                                              key: `line-${t}`
                                          }), {
                                              children: [e.filter(e => !e.empty).map((e, t) => (0, b.jsx)("span", Object.assign({}, s({
                                                  token: e,
                                                  key: `token-${t}`
                                              })))), "\n"]
                                          })))
                                      }))
                                  }))
                              }))
                          };
                      n4.defaultProps = {
                          tabMode: "indentation"
                      };
                      let n5 = (0, T.createContext)({}),
                          n7 = ["jsx", "imports"];

                      function n9(e = {}) {
                          let t = Array.isArray(e.transforms) ? e.transforms.filter(Boolean) : n7;
                          return e => (function(e, t) {
                              eB.strictCheck(t);
                              try {
                                  let n = function(e, t) {
                                          let n = t.transforms.includes("jsx"),
                                              c = t.transforms.includes("typescript"),
                                              u = t.transforms.includes("flow"),
                                              p = !0 === t.disableESTransforms,
                                              h = function(e, t, n, c) {
                                                  if (c && n) throw Error("Cannot combine flow and typescript plugins.");
                                                  a = e, i = new w, l = 1, r = t, s = n, o = c;
                                                  let u = (0 === i.pos && a.charCodeAt(0) === m.numberSign && a.charCodeAt(1) === m.exclamationMark && ea(2), ei(), function() {
                                                      if (nc(f.eof), i.scopes.push(new v(0, i.tokens.length, !0)), 0 !== i.scopeDepth) throw Error(`Invalid scope depth at end of file: ${i.scopeDepth}`);
                                                      return new nS(i.tokens, i.scopes)
                                                  }());
                                                  if (i.error) throw function(e) {
                                                      if ("pos" in e) {
                                                          let t = function(e) {
                                                              let t = 1,
                                                                  n = 1;
                                                              for (let r = 0; r < e; r++) a.charCodeAt(r) === m.lineFeed ? (t++, n = 1) : n++;
                                                              return new I(t, n)
                                                          }(e.pos);
                                                          e.message += ` (${t.line}:${t.column})`, e.loc = t
                                                      }
                                                      return e
                                                  }(i.error);
                                                  return u
                                              }(e, n, c, u),
                                              d = h.tokens,
                                              g = h.scopes,
                                              k = new eL(e, d),
                                              y = new eC(k),
                                              b = new nC(e, d, u, p, y),
                                              _ = !!t.enableLegacyTypeScriptModuleInterop,
                                              x = null;
                                          return t.transforms.includes("imports") ? ((x = new eI(k, b, _, t, t.transforms.includes("typescript"), y)).preprocessTokens(), eR(b, g, x.getGlobalNames()), t.transforms.includes("typescript") && x.pruneTypeOnlyImports()) : t.transforms.includes("typescript") && eR(b, g, function(e) {
                                              let t = new Set;
                                              for (let r = 0; r < e.tokens.length; r++) {
                                                  var n;
                                                  e.matches1AtIndex(r, f._import) && !e.matches3AtIndex(r, f._import, f.name, f.eq) && (n = r, n++, !e.matches1AtIndex(n, f.parenL) && (e.matches1AtIndex(n, f.name) && (t.add(e.identifierNameAtIndex(n)), n++, e.matches1AtIndex(n, f.comma) && n++), e.matches1AtIndex(n, f.star) && (n += 2, t.add(e.identifierNameAtIndex(n)), n++), e.matches1AtIndex(n, f.braceL) && function(e, t, n) {
                                                      for (;;) {
                                                          if (e.matches1AtIndex(t, f.braceR)) return;
                                                          let r = em(e, t);
                                                          if (t = r.endIndex, r.isType || n.add(r.rightName), e.matches2AtIndex(t, f.comma, f.braceR) || e.matches1AtIndex(t, f.braceR)) return;
                                                          if (e.matches1AtIndex(t, f.comma)) t++;
                                                          else throw Error(`Unexpected token: ${JSON.stringify(e.tokens[t])}`)
                                                      }
                                                  }(e, ++n, t)))
                                              }
                                              return t
                                          }(b)), {
                                              tokenProcessor: b,
                                              scopes: g,
                                              nameManager: k,
                                              importProcessor: x,
                                              helperManager: y
                                          }
                                      }(e, t),
                                      c = new nJ(n, t.transforms, !!t.enableLegacyBabel5ModuleInterop, t),
                                      u = c.transform(),
                                      p = {
                                          code: u.code
                                      };
                                  if (t.sourceMapOptions) {
                                      if (!t.filePath) throw Error("filePath must be specified when generating a source map.");
                                      p = {
                                          ...p,
                                          sourceMap: function({
                                              code: e,
                                              mappings: t
                                          }, n, r, s, o) {
                                              let i = function(e, t) {
                                                      let n = Array(t.length),
                                                          r = 0,
                                                          s = t[0].start,
                                                          o = 0;
                                                      for (let i = 0; i < e.length; i++) i === s && (n[r] = s - o, s = t[++r].start), e.charCodeAt(i) === m.lineFeed && (o = i + 1);
                                                      return n
                                                  }(s, o),
                                                  a = new eA.GenMapping({
                                                      file: r.compiledFilename
                                                  }),
                                                  l = 0,
                                                  c = t[0];
                                              for (; void 0 === c && l < t.length - 1;) c = t[++l];
                                              let u = 0,
                                                  p = 0;
                                              0 !== c && (0, eA.maybeAddSegment)(a, u, 0, n, u, 0);
                                              for (let r = 0; r < e.length; r++) {
                                                  if (r === c) {
                                                      let e = c - p,
                                                          s = i[l];
                                                      for ((0, eA.maybeAddSegment)(a, u, e, n, u, s);
                                                          (c === r || void 0 === c) && l < t.length - 1;) c = t[++l]
                                                  }
                                                  e.charCodeAt(r) === m.lineFeed && (u++, c !== (p = r + 1) && (0, eA.maybeAddSegment)(a, u, 0, n, u, 0))
                                              }
                                              let {
                                                  sourceRoot: h,
                                                  sourcesContent: d,
                                                  ...f
                                              } = (0, eA.toEncodedMap)(a);
                                              return f
                                          }(u, t.filePath, t.sourceMapOptions, e, n.tokenProcessor.tokens)
                                      }
                                  }
                                  return p
                              } catch (e) {
                                  throw t.filePath && (e.message = `Error transforming ${t.filePath}: ${e.message}`), e
                              }
                          })(e, {
                              transforms: t
                          }).code
                      }
                      let re = (e, t) => class extends T.Component {
                              componentDidCatch(e) {
                                  t(e)
                              }
                              render() {
                                  return "function" == typeof e ? (0, b.jsx)(e, {}) : T.isValidElement(e) ? e : null
                              }
                          },
                          rt = (e, t) => {
                              let n = Object.keys(t),
                                  r = n.map(e => t[e]);
                              return Function(...n, e)(...r)
                          },
                          rn = 'const _jsxFileName = "";',
                          rr = e => e.trim().replace(/;$/, ""),
                          rs = e => e.replace(rn, "").trim(),
                          ro = e => rn + e,
                          ri = e => `return (${e})`,
                          ra = ({
                              code: e = "",
                              scope: t = {},
                              enableTypeScript: n = !0
                          }, r) => {
                              let s = ["jsx"];
                              n && s.push("typescript");
                              let o = (function(...e) {
                                  return e.reduce((e, t) => (...n) => e(t(...n)))
                              })(ro, n9({
                                  transforms: ["imports"]
                              }), ri, rs, rr, n9({
                                  transforms: s
                              }), rr)(e);
                              return re(rt(o, Object.assign({
                                  React: T
                              }, t)), r)
                          },
                          rl = ({
                              code: e = "",
                              scope: t = {},
                              enableTypeScript: n = !0
                          }, r, s) => {
                              let o = e => {
                                  void 0 === e ? s(SyntaxError("`render` must be called with valid JSX.")) : r(re(e, s))
                              };
                              if (!/render\s*\(/.test(e)) return s(SyntaxError("No-Inline evaluations must call `render`."));
                              let i = ["jsx", "imports"];
                              n && i.splice(1, 0, "typescript"), rt(n9({
                                  transforms: i
                              })(e), Object.assign(Object.assign({
                                  React: T
                              }, t), {
                                  render: o
                              }))
                          };

                      function rc({
                          children: e,
                          code: t = "",
                          language: n = "tsx",
                          theme: r,
                          enableTypeScript: s = !0,
                          disabled: o = !1,
                          scope: i,
                          transformCode: a,
                          noInline: l = !1
                      }) {
                          let [c, u] = (0, T.useState)({
                              error: void 0,
                              element: void 0
                          });

                          function p(e) {
                              var t, n, r, o;
                              return t = this, n = void 0, r = void 0, o = function*() {
                                  let t = e => {
                                      u({
                                          error: e.toString(),
                                          element: void 0
                                      })
                                  };
                                  try {
                                      let n = a ? a(e) : e;
                                      try {
                                          let e = yield Promise.resolve(n), r = e => u({
                                              error: void 0,
                                              element: e
                                          });
                                          if ("string" != typeof e) throw Error("Code failed to transform");
                                          let o = {
                                              code: e,
                                              scope: i,
                                              enableTypeScript: s
                                          };
                                          l ? (u({
                                              error: void 0,
                                              element: null
                                          }), rl(o, r, t)) : r(ra(o, t))
                                      } catch (e) {
                                          return t(e)
                                      }
                                  } catch (e) {
                                      return t(e), Promise.resolve()
                                  }
                              }, new(r || (r = Promise))(function(e, s) {
                                  function i(e) {
                                      try {
                                          l(o.next(e))
                                      } catch (e) {
                                          s(e)
                                      }
                                  }

                                  function a(e) {
                                      try {
                                          l(o.throw(e))
                                      } catch (e) {
                                          s(e)
                                      }
                                  }

                                  function l(t) {
                                      var n;
                                      t.done ? e(t.value) : ((n = t.value) instanceof r ? n : new r(function(e) {
                                          e(n)
                                      })).then(i, a)
                                  }
                                  l((o = o.apply(t, n || [])).next())
                              })
                          }
                          let h = e => u({
                              error: e.toString()
                          });
                          (0, T.useEffect)(() => {
                              p(t).catch(h)
                          }, [t, i, l, a]);
                          let d = e => {
                              p(e).catch(h)
                          };
                          return (0, b.jsx)(n5.Provider, Object.assign({
                              value: Object.assign(Object.assign({}, c), {
                                  code: t,
                                  language: n,
                                  theme: r,
                                  disabled: o,
                                  onError: h,
                                  onChange: d
                              })
                          }, {
                              children: e
                          }))
                      }

                      function ru(e) {
                          let {
                              code: t,
                              language: n,
                              theme: r,
                              disabled: s,
                              onChange: o
                          } = (0, T.useContext)(n5);
                          return (0, b.jsx)(n4, Object.assign({
                              theme: r,
                              code: t,
                              language: n,
                              disabled: s,
                              onChange: o
                          }, e))
                      }

                      function rp(e) {
                          let {
                              error: t
                          } = (0, T.useContext)(n5);
                          return t ? (0, b.jsx)("pre", Object.assign({}, e, {
                              children: t
                          })) : null
                      }
                      let rh = e => (0, b.jsx)("div", Object.assign({}, e));

                      function rd(e) {
                          var {
                              Component: t = rh
                          } = e, n =
                              /*! *****************************************************************************
                              Copyright (c) Microsoft Corporation.

                              Permission to use, copy, modify, and/or distribute this software for any
                              purpose with or without fee is hereby granted.

                              THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
                              REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
                              AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
                              INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
                              LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
                              OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
                              PERFORMANCE OF THIS SOFTWARE.
                              ***************************************************************************** */
                              function(e, t) {
                                  var n = {};
                                  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                                  if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                                      for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++) 0 > t.indexOf(r[s]) && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
                                  return n
                              }(e, ["Component"]);
                          let {
                              element: r
                          } = (0, T.useContext)(n5);
                          return (0, b.jsx)(t, Object.assign({}, n, {
                              children: r ? (0, b.jsx)(r, {}) : null
                          }))
                      }
                  }, 1074: function(e, t, n) {
                      "use strict";
                      var r = this && this.__spreadArrays || function() {
                          for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                          for (var r = Array(e), s = 0, t = 0; t < n; t++)
                              for (var o = arguments[t], i = 0, a = o.length; i < a; i++, s++) r[s] = o[i];
                          return r
                      };
                      Object.defineProperty(t, "__esModule", {
                          value: !0
                      }), t.Checker = t.createCheckers = void 0;
                      var s = n(2746),
                          o = n(7180),
                          i = n(2746);
                      Object.defineProperty(t, "TArray", {
                          enumerable: !0,
                          get: function() {
                              return i.TArray
                          }
                      }), Object.defineProperty(t, "TEnumType", {
                          enumerable: !0,
                          get: function() {
                              return i.TEnumType
                          }
                      }), Object.defineProperty(t, "TEnumLiteral", {
                          enumerable: !0,
                          get: function() {
                              return i.TEnumLiteral
                          }
                      }), Object.defineProperty(t, "TFunc", {
                          enumerable: !0,
                          get: function() {
                              return i.TFunc
                          }
                      }), Object.defineProperty(t, "TIface", {
                          enumerable: !0,
                          get: function() {
                              return i.TIface
                          }
                      }), Object.defineProperty(t, "TLiteral", {
                          enumerable: !0,
                          get: function() {
                              return i.TLiteral
                          }
                      }), Object.defineProperty(t, "TName", {
                          enumerable: !0,
                          get: function() {
                              return i.TName
                          }
                      }), Object.defineProperty(t, "TOptional", {
                          enumerable: !0,
                          get: function() {
                              return i.TOptional
                          }
                      }), Object.defineProperty(t, "TParam", {
                          enumerable: !0,
                          get: function() {
                              return i.TParam
                          }
                      }), Object.defineProperty(t, "TParamList", {
                          enumerable: !0,
                          get: function() {
                              return i.TParamList
                          }
                      }), Object.defineProperty(t, "TProp", {
                          enumerable: !0,
                          get: function() {
                              return i.TProp
                          }
                      }), Object.defineProperty(t, "TTuple", {
                          enumerable: !0,
                          get: function() {
                              return i.TTuple
                          }
                      }), Object.defineProperty(t, "TType", {
                          enumerable: !0,
                          get: function() {
                              return i.TType
                          }
                      }), Object.defineProperty(t, "TUnion", {
                          enumerable: !0,
                          get: function() {
                              return i.TUnion
                          }
                      }), Object.defineProperty(t, "TIntersection", {
                          enumerable: !0,
                          get: function() {
                              return i.TIntersection
                          }
                      }), Object.defineProperty(t, "array", {
                          enumerable: !0,
                          get: function() {
                              return i.array
                          }
                      }), Object.defineProperty(t, "enumlit", {
                          enumerable: !0,
                          get: function() {
                              return i.enumlit
                          }
                      }), Object.defineProperty(t, "enumtype", {
                          enumerable: !0,
                          get: function() {
                              return i.enumtype
                          }
                      }), Object.defineProperty(t, "func", {
                          enumerable: !0,
                          get: function() {
                              return i.func
                          }
                      }), Object.defineProperty(t, "iface", {
                          enumerable: !0,
                          get: function() {
                              return i.iface
                          }
                      }), Object.defineProperty(t, "lit", {
                          enumerable: !0,
                          get: function() {
                              return i.lit
                          }
                      }), Object.defineProperty(t, "name", {
                          enumerable: !0,
                          get: function() {
                              return i.name
                          }
                      }), Object.defineProperty(t, "opt", {
                          enumerable: !0,
                          get: function() {
                              return i.opt
                          }
                      }), Object.defineProperty(t, "param", {
                          enumerable: !0,
                          get: function() {
                              return i.param
                          }
                      }), Object.defineProperty(t, "tuple", {
                          enumerable: !0,
                          get: function() {
                              return i.tuple
                          }
                      }), Object.defineProperty(t, "union", {
                          enumerable: !0,
                          get: function() {
                              return i.union
                          }
                      }), Object.defineProperty(t, "intersection", {
                          enumerable: !0,
                          get: function() {
                              return i.intersection
                          }
                      }), Object.defineProperty(t, "BasicType", {
                          enumerable: !0,
                          get: function() {
                              return i.BasicType
                          }
                      });
                      var a = n(7180);
                      Object.defineProperty(t, "VError", {
                          enumerable: !0,
                          get: function() {
                              return a.VError
                          }
                      }), t.createCheckers = function() {
                          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                          for (var n = Object.assign.apply(Object, r([{}, s.basicTypes], e)), o = {}, i = 0; i < e.length; i++)
                              for (var a = e[i], c = 0, u = Object.keys(a); c < u.length; c++) {
                                  var p = u[c];
                                  o[p] = new l(n, a[p])
                              }
                          return o
                      };
                      var l = function() {
                          function e(e, t, n) {
                              if (void 0 === n && (n = "value"), this.suite = e, this.ttype = t, this._path = n, this.props = new Map, t instanceof s.TIface)
                                  for (var r = 0, o = t.props; r < o.length; r++) {
                                      var i = o[r];
                                      this.props.set(i.name, i.ttype)
                                  }
                              this.checkerPlain = this.ttype.getChecker(e, !1), this.checkerStrict = this.ttype.getChecker(e, !0)
                          }
                          return e.prototype.setReportedPath = function(e) {
                              this._path = e
                          }, e.prototype.check = function(e) {
                              return this._doCheck(this.checkerPlain, e)
                          }, e.prototype.test = function(e) {
                              return this.checkerPlain(e, new o.NoopContext)
                          }, e.prototype.validate = function(e) {
                              return this._doValidate(this.checkerPlain, e)
                          }, e.prototype.strictCheck = function(e) {
                              return this._doCheck(this.checkerStrict, e)
                          }, e.prototype.strictTest = function(e) {
                              return this.checkerStrict(e, new o.NoopContext)
                          }, e.prototype.strictValidate = function(e) {
                              return this._doValidate(this.checkerStrict, e)
                          }, e.prototype.getProp = function(t) {
                              var n = this.props.get(t);
                              if (!n) throw Error("Type has no property " + t);
                              return new e(this.suite, n, this._path + "." + t)
                          }, e.prototype.methodArgs = function(t) {
                              var n = this._getMethod(t);
                              return new e(this.suite, n.paramList)
                          }, e.prototype.methodResult = function(t) {
                              var n = this._getMethod(t);
                              return new e(this.suite, n.result)
                          }, e.prototype.getArgs = function() {
                              if (!(this.ttype instanceof s.TFunc)) throw Error("getArgs() applied to non-function");
                              return new e(this.suite, this.ttype.paramList)
                          }, e.prototype.getResult = function() {
                              if (!(this.ttype instanceof s.TFunc)) throw Error("getResult() applied to non-function");
                              return new e(this.suite, this.ttype.result)
                          }, e.prototype.getType = function() {
                              return this.ttype
                          }, e.prototype._doCheck = function(e, t) {
                              if (!e(t, new o.NoopContext)) {
                                  var n = new o.DetailContext;
                                  throw e(t, n), n.getError(this._path)
                              }
                          }, e.prototype._doValidate = function(e, t) {
                              if (e(t, new o.NoopContext)) return null;
                              var n = new o.DetailContext;
                              return e(t, n), n.getErrorDetail(this._path)
                          }, e.prototype._getMethod = function(e) {
                              var t = this.props.get(e);
                              if (!t) throw Error("Type has no property " + e);
                              if (!(t instanceof s.TFunc)) throw Error("Property " + e + " is not a method");
                              return t
                          }, e
                      }();
                      t.Checker = l
                  }, 2746: function(e, t, n) {
                      "use strict";
                      var r, s = n(8764).lW,
                          o = this && this.__extends || (r = function(e, t) {
                              return (r = Object.setPrototypeOf || ({
                                  __proto__: []
                              }) instanceof Array && function(e, t) {
                                  e.__proto__ = t
                              } || function(e, t) {
                                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                              })(e, t)
                          }, function(e, t) {
                              function n() {
                                  this.constructor = e
                              }
                              r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                          });
                      Object.defineProperty(t, "__esModule", {
                          value: !0
                      }), t.basicTypes = t.BasicType = t.TParamList = t.TParam = t.param = t.TFunc = t.func = t.TProp = t.TOptional = t.opt = t.TIface = t.iface = t.TEnumLiteral = t.enumlit = t.TEnumType = t.enumtype = t.TIntersection = t.intersection = t.TUnion = t.union = t.TTuple = t.tuple = t.TArray = t.array = t.TLiteral = t.lit = t.TName = t.name = t.TType = void 0;
                      var i = n(7180),
                          a = function() {};

                      function l(e) {
                          return "string" == typeof e ? u(e) : e
                      }

                      function c(e, t) {
                          var n = e[t];
                          if (!n) throw Error("Unknown type " + t);
                          return n
                      }

                      function u(e) {
                          return new p(e)
                      }
                      t.TType = a, t.name = u;
                      var p = function(e) {
                          function t(t) {
                              var n = e.call(this) || this;
                              return n.name = t, n._failMsg = "is not a " + t, n
                          }
                          return o(t, e), t.prototype.getChecker = function(e, n, r) {
                              var s = this,
                                  o = c(e, this.name),
                                  i = o.getChecker(e, n, r);
                              return o instanceof w || o instanceof t ? i : function(e, t) {
                                  return !!i(e, t) || t.fail(null, s._failMsg, 0)
                              }
                          }, t
                      }(a);
                      t.TName = p, t.lit = function(e) {
                          return new h(e)
                      };
                      var h = function(e) {
                          function t(t) {
                              var n = e.call(this) || this;
                              return n.value = t, n.name = JSON.stringify(t), n._failMsg = "is not " + n.name, n
                          }
                          return o(t, e), t.prototype.getChecker = function(e, t) {
                              var n = this;
                              return function(e, t) {
                                  return e === n.value || t.fail(null, n._failMsg, -1)
                              }
                          }, t
                      }(a);
                      t.TLiteral = h, t.array = function(e) {
                          return new d(l(e))
                      };
                      var d = function(e) {
                          function t(t) {
                              var n = e.call(this) || this;
                              return n.ttype = t, n
                          }
                          return o(t, e), t.prototype.getChecker = function(e, t) {
                              var n = this.ttype.getChecker(e, t);
                              return function(e, t) {
                                  if (!Array.isArray(e)) return t.fail(null, "is not an array", 0);
                                  for (var r = 0; r < e.length; r++)
                                      if (!n(e[r], t)) return t.fail(r, null, 1);
                                  return !0
                              }
                          }, t
                      }(a);
                      t.TArray = d, t.tuple = function() {
                          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                          return new f(e.map(function(e) {
                              return l(e)
                          }))
                      };
                      var f = function(e) {
                          function t(t) {
                              var n = e.call(this) || this;
                              return n.ttypes = t, n
                          }
                          return o(t, e), t.prototype.getChecker = function(e, t) {
                              var n = this.ttypes.map(function(n) {
                                      return n.getChecker(e, t)
                                  }),
                                  r = function(e, t) {
                                      if (!Array.isArray(e)) return t.fail(null, "is not an array", 0);
                                      for (var r = 0; r < n.length; r++)
                                          if (!n[r](e[r], t)) return t.fail(r, null, 1);
                                      return !0
                                  };
                              return t ? function(e, t) {
                                  return !!r(e, t) && (e.length <= n.length || t.fail(n.length, "is extraneous", 2))
                              } : r
                          }, t
                      }(a);
                      t.TTuple = f, t.union = function() {
                          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                          return new m(e.map(function(e) {
                              return l(e)
                          }))
                      };
                      var m = function(e) {
                          function t(t) {
                              var n = e.call(this) || this;
                              n.ttypes = t;
                              var r = t.map(function(e) {
                                      return e instanceof p || e instanceof h ? e.name : null
                                  }).filter(function(e) {
                                      return e
                                  }),
                                  s = t.length - r.length;
                              return r.length ? (s > 0 && r.push(s + " more"), n._failMsg = "is none of " + r.join(", ")) : n._failMsg = "is none of " + s + " types", n
                          }
                          return o(t, e), t.prototype.getChecker = function(e, t) {
                              var n = this,
                                  r = this.ttypes.map(function(n) {
                                      return n.getChecker(e, t)
                                  });
                              return function(e, t) {
                                  for (var s = t.unionResolver(), o = 0; o < r.length; o++)
                                      if (r[o](e, s.createContext())) return !0;
                                  return t.resolveUnion(s), t.fail(null, n._failMsg, 0)
                              }
                          }, t
                      }(a);
                      t.TUnion = m, t.intersection = function() {
                          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                          return new g(e.map(function(e) {
                              return l(e)
                          }))
                      };
                      var g = function(e) {
                          function t(t) {
                              var n = e.call(this) || this;
                              return n.ttypes = t, n
                          }
                          return o(t, e), t.prototype.getChecker = function(e, t) {
                              var n = new Set,
                                  r = this.ttypes.map(function(r) {
                                      return r.getChecker(e, t, n)
                                  });
                              return function(e, t) {
                                  return !!r.every(function(n) {
                                      return n(e, t)
                                  }) || t.fail(null, null, 0)
                              }
                          }, t
                      }(a);
                      t.TIntersection = g, t.enumtype = function(e) {
                          return new k(e)
                      };
                      var k = function(e) {
                          function t(t) {
                              var n = e.call(this) || this;
                              return n.members = t, n.validValues = new Set, n._failMsg = "is not a valid enum value", n.validValues = new Set(Object.keys(t).map(function(e) {
                                  return t[e]
                              })), n
                          }
                          return o(t, e), t.prototype.getChecker = function(e, t) {
                              var n = this;
                              return function(e, t) {
                                  return !!n.validValues.has(e) || t.fail(null, n._failMsg, 0)
                              }
                          }, t
                      }(a);
                      t.TEnumType = k, t.enumlit = function(e, t) {
                          return new y(e, t)
                      };
                      var y = function(e) {
                          function t(t, n) {
                              var r = e.call(this) || this;
                              return r.enumName = t, r.prop = n, r._failMsg = "is not " + t + "." + n, r
                          }
                          return o(t, e), t.prototype.getChecker = function(e, t) {
                              var n = this,
                                  r = c(e, this.enumName);
                              if (!(r instanceof k)) throw Error("Type " + this.enumName + " used in enumlit is not an enum type");
                              var s = r.members[this.prop];
                              if (!r.members.hasOwnProperty(this.prop)) throw Error("Unknown value " + this.enumName + "." + this.prop + " used in enumlit");
                              return function(e, t) {
                                  return e === s || t.fail(null, n._failMsg, -1)
                              }
                          }, t
                      }(a);
                      t.TEnumLiteral = y, t.iface = function(e, t) {
                          return new b(e, Object.keys(t).map(function(e) {
                              var n;
                              return (n = t[e]) instanceof _ ? new x(e, n.ttype, !0) : new x(e, l(n), !1)
                          }))
                      };
                      var b = function(e) {
                          function t(t, n) {
                              var r = e.call(this) || this;
                              return r.bases = t, r.props = n, r.propSet = new Set(n.map(function(e) {
                                  return e.name
                              })), r
                          }
                          return o(t, e), t.prototype.getChecker = function(e, t, n) {
                              var r = this,
                                  s = this.bases.map(function(n) {
                                      return c(e, n).getChecker(e, t)
                                  }),
                                  o = this.props.map(function(n) {
                                      return n.ttype.getChecker(e, t)
                                  }),
                                  a = new i.NoopContext,
                                  l = this.props.map(function(e, t) {
                                      return !e.isOpt && !o[t](void 0, a)
                                  }),
                                  u = function(e, t) {
                                      if ("object" != typeof e || null === e) return t.fail(null, "is not an object", 0);
                                      for (var n = 0; n < s.length; n++)
                                          if (!s[n](e, t)) return !1;
                                      for (var n = 0; n < o.length; n++) {
                                          var i = r.props[n].name,
                                              a = e[i];
                                          if (void 0 === a) {
                                              if (l[n]) return t.fail(i, "is missing", 1)
                                          } else if (!o[n](a, t)) return t.fail(i, null, 1)
                                      }
                                      return !0
                                  };
                              if (!t) return u;
                              var p = this.propSet;
                              return n && (this.propSet.forEach(function(e) {
                                      return n.add(e)
                                  }), p = n),
                                  function(e, t) {
                                      if (!u(e, t)) return !1;
                                      for (var n in e)
                                          if (!p.has(n)) return t.fail(n, "is extraneous", 2);
                                      return !0
                                  }
                          }, t
                      }(a);
                      t.TIface = b, t.opt = function(e) {
                          return new _(l(e))
                      };
                      var _ = function(e) {
                          function t(t) {
                              var n = e.call(this) || this;
                              return n.ttype = t, n
                          }
                          return o(t, e), t.prototype.getChecker = function(e, t) {
                              var n = this.ttype.getChecker(e, t);
                              return function(e, t) {
                                  return void 0 === e || n(e, t)
                              }
                          }, t
                      }(a);
                      t.TOptional = _;
                      var x = function(e, t, n) {
                          this.name = e, this.ttype = t, this.isOpt = n
                      };
                      t.TProp = x, t.func = function(e) {
                          for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                          return new T(new E(t), l(e))
                      };
                      var T = function(e) {
                          function t(t, n) {
                              var r = e.call(this) || this;
                              return r.paramList = t, r.result = n, r
                          }
                          return o(t, e), t.prototype.getChecker = function(e, t) {
                              return function(e, t) {
                                  return "function" == typeof e || t.fail(null, "is not a function", 0)
                              }
                          }, t
                      }(a);
                      t.TFunc = T, t.param = function(e, t, n) {
                          return new v(e, l(t), !!n)
                      };
                      var v = function(e, t, n) {
                          this.name = e, this.ttype = t, this.isOpt = n
                      };
                      t.TParam = v;
                      var E = function(e) {
                          function t(t) {
                              var n = e.call(this) || this;
                              return n.params = t, n
                          }
                          return o(t, e), t.prototype.getChecker = function(e, t) {
                              var n = this,
                                  r = this.params.map(function(n) {
                                      return n.ttype.getChecker(e, t)
                                  }),
                                  s = new i.NoopContext,
                                  o = this.params.map(function(e, t) {
                                      return !e.isOpt && !r[t](void 0, s)
                                  }),
                                  a = function(e, t) {
                                      if (!Array.isArray(e)) return t.fail(null, "is not an array", 0);
                                      for (var s = 0; s < r.length; s++) {
                                          var i = n.params[s];
                                          if (void 0 === e[s]) {
                                              if (o[s]) return t.fail(i.name, "is missing", 1)
                                          } else if (!r[s](e[s], t)) return t.fail(i.name, null, 1)
                                      }
                                      return !0
                                  };
                              return t ? function(e, t) {
                                  return !!a(e, t) && (e.length <= r.length || t.fail(r.length, "is extraneous", 2))
                              } : a
                          }, t
                      }(a);
                      t.TParamList = E;
                      var w = function(e) {
                          function t(t, n) {
                              var r = e.call(this) || this;
                              return r.validator = t, r.message = n, r
                          }
                          return o(t, e), t.prototype.getChecker = function(e, t) {
                              var n = this;
                              return function(e, t) {
                                  return !!n.validator(e) || t.fail(null, n.message, 0)
                              }
                          }, t
                      }(a);
                      t.BasicType = w, t.basicTypes = {
                          any: new w(function(e) {
                              return !0
                          }, "is invalid"),
                          number: new w(function(e) {
                              return "number" == typeof e
                          }, "is not a number"),
                          object: new w(function(e) {
                              return "object" == typeof e && e
                          }, "is not an object"),
                          boolean: new w(function(e) {
                              return "boolean" == typeof e
                          }, "is not a boolean"),
                          string: new w(function(e) {
                              return "string" == typeof e
                          }, "is not a string"),
                          symbol: new w(function(e) {
                              return "symbol" == typeof e
                          }, "is not a symbol"),
                          void: new w(function(e) {
                              return null == e
                          }, "is not void"),
                          undefined: new w(function(e) {
                              return void 0 === e
                          }, "is not undefined"),
                          null: new w(function(e) {
                              return null === e
                          }, "is not null"),
                          never: new w(function(e) {
                              return !1
                          }, "is unexpected"),
                          Date: new w(A("[object Date]"), "is not a Date"),
                          RegExp: new w(A("[object RegExp]"), "is not a RegExp")
                      };
                      var I = Object.prototype.toString;

                      function A(e) {
                          return function(t) {
                              return "object" == typeof t && t && I.call(t) === e
                          }
                      }
                      void 0 !== s && (t.basicTypes.Buffer = new w(function(e) {
                          return s.isBuffer(e)
                      }, "is not a Buffer"));
                      for (var S = function(e) {
                              t.basicTypes[e.name] = new w(function(t) {
                                  return t instanceof e
                              }, "is not a " + e.name)
                          }, C = 0, R = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, ArrayBuffer]; C < R.length; C++) S(R[C])
                  }, 7180: function(e, t) {
                      "use strict";
                      var n, r = this && this.__extends || (n = function(e, t) {
                          return (n = Object.setPrototypeOf || ({
                              __proto__: []
                          }) instanceof Array && function(e, t) {
                              e.__proto__ = t
                          } || function(e, t) {
                              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                          })(e, t)
                      }, function(e, t) {
                          function r() {
                              this.constructor = e
                          }
                          n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                      });
                      Object.defineProperty(t, "__esModule", {
                          value: !0
                      }), t.DetailContext = t.NoopContext = t.VError = void 0;
                      var s = function(e) {
                          function t(n, r) {
                              var s = e.call(this, r) || this;
                              return s.path = n, Object.setPrototypeOf(s, t.prototype), s
                          }
                          return r(t, e), t
                      }(Error);
                      t.VError = s;
                      var o = function() {
                          function e() {}
                          return e.prototype.fail = function(e, t, n) {
                              return !1
                          }, e.prototype.unionResolver = function() {
                              return this
                          }, e.prototype.createContext = function() {
                              return this
                          }, e.prototype.resolveUnion = function(e) {}, e
                      }();
                      t.NoopContext = o;
                      var i = function() {
                          function e() {
                              this._propNames = [""], this._messages = [null], this._score = 0
                          }
                          return e.prototype.fail = function(e, t, n) {
                              return this._propNames.push(e), this._messages.push(t), this._score += n, !1
                          }, e.prototype.unionResolver = function() {
                              return new a
                          }, e.prototype.resolveUnion = function(e) {
                              for (var t, n, r = null, s = 0, o = e.contexts; s < o.length; s++) {
                                  var i = o[s];
                                  (!r || i._score >= r._score) && (r = i)
                              }
                              r && r._score > 0 && ((t = this._propNames).push.apply(t, r._propNames), (n = this._messages).push.apply(n, r._messages))
                          }, e.prototype.getError = function(e) {
                              for (var t = [], n = this._propNames.length - 1; n >= 0; n--) {
                                  var r = this._propNames[n];
                                  e += "number" == typeof r ? "[" + r + "]" : r ? "." + r : "";
                                  var o = this._messages[n];
                                  o && t.push(e + " " + o)
                              }
                              return new s(e, t.join("; "))
                          }, e.prototype.getErrorDetail = function(e) {
                              for (var t = [], n = this._propNames.length - 1; n >= 0; n--) {
                                  var r = this._propNames[n];
                                  e += "number" == typeof r ? "[" + r + "]" : r ? "." + r : "";
                                  var s = this._messages[n];
                                  s && t.push({
                                      path: e,
                                      message: s
                                  })
                              }
                              for (var o = null, n = t.length - 1; n >= 0; n--) o && (t[n].nested = [o]), o = t[n];
                              return o
                          }, e
                      }();
                      t.DetailContext = i;
                      var a = function() {
                          function e() {
                              this.contexts = []
                          }
                          return e.prototype.createContext = function() {
                              var e = new i;
                              return this.contexts.push(e), e
                          }, e
                      }()
                  }, 8206: function(e, t, n) {
                      "use strict";

                      function r(e, {
                          target: t = document.body
                      } = {}) {
                          let n = document.createElement("textarea"),
                              r = document.activeElement;
                          n.value = e, n.setAttribute("readonly", ""), n.style.contain = "strict", n.style.position = "absolute", n.style.left = "-9999px", n.style.fontSize = "12pt";
                          let s = document.getSelection(),
                              o = !1;
                          s.rangeCount > 0 && (o = s.getRangeAt(0)), t.append(n), n.select(), n.selectionStart = 0, n.selectionEnd = e.length;
                          let i = !1;
                          try {
                              i = document.execCommand("copy")
                          } catch {}
                          return n.remove(), o && (s.removeAllRanges(), s.addRange(o)), r && r.focus(), i
                      }
                      n.d(t, {
                          Z: function() {
                              return r
                          }
                      })
                  }, 3093: function(e, t, n) {
                      "use strict";
                      n.d(t, {
                          A: function() {
                              return a
                          }
                      });
                      var r = n(7294),
                          s = n(6014),
                          o = n(1492),
                          i = n(6681);

                      function a({
                          children: e,
                          isValidProp: t,
                          ...n
                      }) {
                          t && (0, o.K)(t), (n = {
                              ...(0, r.useContext)(s._),
                              ...n
                          }).isStatic = (0, i.h)(() => n.isStatic);
                          let a = (0, r.useMemo)(() => n, [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]);
                          return r.createElement(s._.Provider, {
                              value: a
                          }, e)
                      }
                  }, 1117: function(e, t, n) {
                      "use strict";
                      n.d(t, {
                          Y: function() {
                              return a
                          }
                      });
                      var r = n(7294),
                          s = n(1732),
                          o = n(6463);
                      let i = {
                          any: 0,
                          all: 1
                      };

                      function a(e, {
                          root: t,
                          margin: n,
                          amount: a,
                          once: l = !1
                      } = {}) {
                          let [c, u] = (0, r.useState)(!1);
                          return (0, r.useEffect)(() => {
                              if (!e.current || l && c) return;
                              let r = () => (u(!0), l ? void 0 : () => u(!1)),
                                  p = {
                                      root: t && t.current || void 0,
                                      margin: n,
                                      amount: "some" === a ? "any" : a
                                  };
                              return function(e, t, {
                                  root: n,
                                  margin: r,
                                  amount: a = "any"
                              } = {}) {
                                  if ("undefined" == typeof IntersectionObserver) return () => {};
                                  let l = (0, s.I)(e),
                                      c = new WeakMap,
                                      u = e => {
                                          e.forEach(e => {
                                              let n = c.get(e.target);
                                              if (!!n !== e.isIntersecting) {
                                                  if (e.isIntersecting) {
                                                      let n = t(e);
                                                      (0, o.m)(n) ? c.set(e.target, n): p.unobserve(e.target)
                                                  } else n && (n(e), c.delete(e.target))
                                              }
                                          })
                                      },
                                      p = new IntersectionObserver(u, {
                                          root: n,
                                          rootMargin: r,
                                          threshold: "number" == typeof a ? a : i[a]
                                      });
                                  return l.forEach(e => p.observe(e)), () => p.disconnect()
                              }(e.current, r, p)
                          }, [t, e, n, l]), c
                      }
                  }
              }]);