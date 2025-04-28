var q = Object.defineProperty;
var A = (s, t, a) => t in s ? q(s, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : s[t] = a;
var v = (s, t, a) => A(s, typeof t != "symbol" ? t + "" : t, a);
var U = /\{[^{}]+\}/g, y = ({ allowReserved: s, name: t, value: a }) => {
  if (a == null) return "";
  if (typeof a == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${t}=${s ? a : encodeURIComponent(a)}`;
}, _ = (s) => {
  switch (s) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, E = (s) => {
  switch (s) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
}, W = (s) => {
  switch (s) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, $ = ({ allowReserved: s, explode: t, name: a, style: o, value: l }) => {
  if (!t) {
    let r = (s ? l : l.map((i) => encodeURIComponent(i))).join(E(o));
    switch (o) {
      case "label":
        return `.${r}`;
      case "matrix":
        return `;${a}=${r}`;
      case "simple":
        return r;
      default:
        return `${a}=${r}`;
    }
  }
  let n = _(o), e = l.map((r) => o === "label" || o === "simple" ? s ? r : encodeURIComponent(r) : y({ allowReserved: s, name: a, value: r })).join(n);
  return o === "label" || o === "matrix" ? n + e : e;
}, O = ({ allowReserved: s, explode: t, name: a, style: o, value: l }) => {
  if (l instanceof Date) return `${a}=${l.toISOString()}`;
  if (o !== "deepObject" && !t) {
    let r = [];
    Object.entries(l).forEach(([d, c]) => {
      r = [...r, d, s ? c : encodeURIComponent(c)];
    });
    let i = r.join(",");
    switch (o) {
      case "form":
        return `${a}=${i}`;
      case "label":
        return `.${i}`;
      case "matrix":
        return `;${a}=${i}`;
      default:
        return i;
    }
  }
  let n = W(o), e = Object.entries(l).map(([r, i]) => y({ allowReserved: s, name: o === "deepObject" ? `${a}[${r}]` : r, value: i })).join(n);
  return o === "label" || o === "matrix" ? n + e : e;
}, z = ({ path: s, url: t }) => {
  let a = t, o = t.match(U);
  if (o) for (let l of o) {
    let n = !1, e = l.substring(1, l.length - 1), r = "simple";
    e.endsWith("*") && (n = !0, e = e.substring(0, e.length - 1)), e.startsWith(".") ? (e = e.substring(1), r = "label") : e.startsWith(";") && (e = e.substring(1), r = "matrix");
    let i = s[e];
    if (i == null) continue;
    if (Array.isArray(i)) {
      a = a.replace(l, $({ explode: n, name: e, style: r, value: i }));
      continue;
    }
    if (typeof i == "object") {
      a = a.replace(l, O({ explode: n, name: e, style: r, value: i }));
      continue;
    }
    if (r === "matrix") {
      a = a.replace(l, `;${y({ name: e, value: i })}`);
      continue;
    }
    let d = encodeURIComponent(r === "label" ? `.${i}` : i);
    a = a.replace(l, d);
  }
  return a;
}, S = ({ allowReserved: s, array: t, object: a } = {}) => (o) => {
  let l = [];
  if (o && typeof o == "object") for (let n in o) {
    let e = o[n];
    if (e != null) {
      if (Array.isArray(e)) {
        l = [...l, $({ allowReserved: s, explode: !0, name: n, style: "form", value: e, ...t })];
        continue;
      }
      if (typeof e == "object") {
        l = [...l, O({ allowReserved: s, explode: !0, name: n, style: "deepObject", value: e, ...a })];
        continue;
      }
      l = [...l, y({ allowReserved: s, name: n, value: e })];
    }
  }
  return l.join("&");
}, J = (s) => {
  if (!s) return;
  let t = s.split(";")[0].trim();
  if (t.startsWith("application/json") || t.endsWith("+json")) return "json";
  if (t === "multipart/form-data") return "formData";
  if (["application/", "audio/", "image/", "video/"].some((a) => t.startsWith(a))) return "blob";
  if (t.startsWith("text/")) return "text";
}, D = ({ baseUrl: s, path: t, query: a, querySerializer: o, url: l }) => {
  let n = l.startsWith("/") ? l : `/${l}`, e = s + n;
  t && (e = z({ path: t, url: e }));
  let r = a ? o(a) : "";
  return r.startsWith("?") && (r = r.substring(1)), r && (e += `?${r}`), e;
}, g = (s, t) => {
  var o;
  let a = { ...s, ...t };
  return (o = a.baseUrl) != null && o.endsWith("/") && (a.baseUrl = a.baseUrl.substring(0, a.baseUrl.length - 1)), a.headers = C(s.headers, t.headers), a;
}, C = (...s) => {
  let t = new Headers();
  for (let a of s) {
    if (!a || typeof a != "object") continue;
    let o = a instanceof Headers ? a.entries() : Object.entries(a);
    for (let [l, n] of o) if (n === null) t.delete(l);
    else if (Array.isArray(n)) for (let e of n) t.append(l, e);
    else n !== void 0 && t.set(l, typeof n == "object" ? JSON.stringify(n) : n);
  }
  return t;
}, j = class {
  constructor() {
    v(this, "_fns");
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  exists(s) {
    return this._fns.indexOf(s) !== -1;
  }
  eject(s) {
    let t = this._fns.indexOf(s);
    t !== -1 && (this._fns = [...this._fns.slice(0, t), ...this._fns.slice(t + 1)]);
  }
  use(s) {
    this._fns = [...this._fns, s];
  }
}, I = () => ({ error: new j(), request: new j(), response: new j() }), k = { bodySerializer: (s) => JSON.stringify(s) }, N = S({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), P = { "Content-Type": "application/json" }, R = (s = {}) => ({ ...k, baseUrl: "", fetch: globalThis.fetch, headers: P, parseAs: "auto", querySerializer: N, ...s }), H = (s = {}) => {
  let t = g(R(), s), a = () => ({ ...t }), o = (e) => (t = g(t, e), a()), l = I(), n = async (e) => {
    let r = { ...t, ...e, headers: C(t.headers, e.headers) };
    r.body && r.bodySerializer && (r.body = r.bodySerializer(r.body)), r.body || r.headers.delete("Content-Type");
    let i = D({ baseUrl: r.baseUrl ?? "", path: r.path, query: r.query, querySerializer: typeof r.querySerializer == "function" ? r.querySerializer : S(r.querySerializer), url: r.url }), d = { redirect: "follow", ...r }, c = new Request(i, d);
    for (let f of l.request._fns) c = await f(c, r);
    let T = r.fetch, u = await T(c);
    for (let f of l.response._fns) u = await f(u, c, r);
    let h = { request: c, response: u };
    if (u.ok) {
      if (u.status === 204 || u.headers.get("Content-Length") === "0") return { data: {}, ...h };
      if (r.parseAs === "stream") return { data: u.body, ...h };
      let f = (r.parseAs === "auto" ? J(u.headers.get("Content-Type")) : r.parseAs) ?? "json", w = await u[f]();
      return f === "json" && r.responseTransformer && (w = await r.responseTransformer(w)), { data: w, ...h };
    }
    let m = await u.text();
    try {
      m = JSON.parse(m);
    } catch {
    }
    let p = m;
    for (let f of l.error._fns) p = await f(m, u, c, r);
    if (p = p || {}, r.throwOnError) throw p;
    return { error: p, ...h };
  };
  return { connect: (e) => n({ ...e, method: "CONNECT" }), delete: (e) => n({ ...e, method: "DELETE" }), get: (e) => n({ ...e, method: "GET" }), getConfig: a, head: (e) => n({ ...e, method: "HEAD" }), interceptors: l, options: (e) => n({ ...e, method: "OPTIONS" }), patch: (e) => n({ ...e, method: "PATCH" }), post: (e) => n({ ...e, method: "POST" }), put: (e) => n({ ...e, method: "PUT" }), request: n, setConfig: o, trace: (e) => n({ ...e, method: "TRACE" }) };
};
const x = H(R());
var b = void 0;
class B {
  static getJokes(t) {
    b && b.abort(), b = new AbortController();
    const { signal: a } = b;
    return ((t == null ? void 0 : t.client) ?? x).get({
      ...t,
      url: "/umbraco/umbracofun/api/v1/jokes",
      signal: a
    });
  }
  static getJokeTypes(t) {
    return ((t == null ? void 0 : t.client) ?? x).get({
      ...t,
      url: "/umbraco/umbracofun/api/v1/jokes/types"
    });
  }
}
export {
  B as J,
  x as c
};
//# sourceMappingURL=services-CbZ9oLtH.js.map
