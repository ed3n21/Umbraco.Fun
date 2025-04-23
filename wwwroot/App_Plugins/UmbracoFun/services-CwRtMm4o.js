var A = Object.defineProperty;
var C = (s, e, a) => e in s ? A(s, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : s[e] = a;
var j = (s, e, a) => C(s, typeof e != "symbol" ? e + "" : e, a);
var q = /\{[^{}]+\}/g, y = ({ allowReserved: s, name: e, value: a }) => {
  if (a == null) return "";
  if (typeof a == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${e}=${s ? a : encodeURIComponent(a)}`;
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
}, W = (s) => {
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
}, E = (s) => {
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
}, $ = ({ allowReserved: s, explode: e, name: a, style: i, value: l }) => {
  if (!e) {
    let t = (s ? l : l.map((u) => encodeURIComponent(u))).join(W(i));
    switch (i) {
      case "label":
        return `.${t}`;
      case "matrix":
        return `;${a}=${t}`;
      case "simple":
        return t;
      default:
        return `${a}=${t}`;
    }
  }
  let n = _(i), r = l.map((t) => i === "label" || i === "simple" ? s ? t : encodeURIComponent(t) : y({ allowReserved: s, name: a, value: t })).join(n);
  return i === "label" || i === "matrix" ? n + r : r;
}, S = ({ allowReserved: s, explode: e, name: a, style: i, value: l }) => {
  if (l instanceof Date) return `${a}=${l.toISOString()}`;
  if (i !== "deepObject" && !e) {
    let t = [];
    Object.entries(l).forEach(([d, c]) => {
      t = [...t, d, s ? c : encodeURIComponent(c)];
    });
    let u = t.join(",");
    switch (i) {
      case "form":
        return `${a}=${u}`;
      case "label":
        return `.${u}`;
      case "matrix":
        return `;${a}=${u}`;
      default:
        return u;
    }
  }
  let n = E(i), r = Object.entries(l).map(([t, u]) => y({ allowReserved: s, name: i === "deepObject" ? `${a}[${t}]` : t, value: u })).join(n);
  return i === "label" || i === "matrix" ? n + r : r;
}, z = ({ path: s, url: e }) => {
  let a = e, i = e.match(q);
  if (i) for (let l of i) {
    let n = !1, r = l.substring(1, l.length - 1), t = "simple";
    r.endsWith("*") && (n = !0, r = r.substring(0, r.length - 1)), r.startsWith(".") ? (r = r.substring(1), t = "label") : r.startsWith(";") && (r = r.substring(1), t = "matrix");
    let u = s[r];
    if (u == null) continue;
    if (Array.isArray(u)) {
      a = a.replace(l, $({ explode: n, name: r, style: t, value: u }));
      continue;
    }
    if (typeof u == "object") {
      a = a.replace(l, S({ explode: n, name: r, style: t, value: u }));
      continue;
    }
    if (t === "matrix") {
      a = a.replace(l, `;${y({ name: r, value: u })}`);
      continue;
    }
    let d = encodeURIComponent(t === "label" ? `.${u}` : u);
    a = a.replace(l, d);
  }
  return a;
}, O = ({ allowReserved: s, array: e, object: a } = {}) => (i) => {
  let l = [];
  if (i && typeof i == "object") for (let n in i) {
    let r = i[n];
    if (r != null) {
      if (Array.isArray(r)) {
        l = [...l, $({ allowReserved: s, explode: !0, name: n, style: "form", value: r, ...e })];
        continue;
      }
      if (typeof r == "object") {
        l = [...l, S({ allowReserved: s, explode: !0, name: n, style: "deepObject", value: r, ...a })];
        continue;
      }
      l = [...l, y({ allowReserved: s, name: n, value: r })];
    }
  }
  return l.join("&");
}, I = (s) => {
  if (!s) return;
  let e = s.split(";")[0].trim();
  if (e.startsWith("application/json") || e.endsWith("+json")) return "json";
  if (e === "multipart/form-data") return "formData";
  if (["application/", "audio/", "image/", "video/"].some((a) => e.startsWith(a))) return "blob";
  if (e.startsWith("text/")) return "text";
}, D = ({ baseUrl: s, path: e, query: a, querySerializer: i, url: l }) => {
  let n = l.startsWith("/") ? l : `/${l}`, r = s + n;
  e && (r = z({ path: e, url: r }));
  let t = a ? i(a) : "";
  return t.startsWith("?") && (t = t.substring(1)), t && (r += `?${t}`), r;
}, x = (s, e) => {
  var i;
  let a = { ...s, ...e };
  return (i = a.baseUrl) != null && i.endsWith("/") && (a.baseUrl = a.baseUrl.substring(0, a.baseUrl.length - 1)), a.headers = T(s.headers, e.headers), a;
}, T = (...s) => {
  let e = new Headers();
  for (let a of s) {
    if (!a || typeof a != "object") continue;
    let i = a instanceof Headers ? a.entries() : Object.entries(a);
    for (let [l, n] of i) if (n === null) e.delete(l);
    else if (Array.isArray(n)) for (let r of n) e.append(l, r);
    else n !== void 0 && e.set(l, typeof n == "object" ? JSON.stringify(n) : n);
  }
  return e;
}, v = class {
  constructor() {
    j(this, "_fns");
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  exists(s) {
    return this._fns.indexOf(s) !== -1;
  }
  eject(s) {
    let e = this._fns.indexOf(s);
    e !== -1 && (this._fns = [...this._fns.slice(0, e), ...this._fns.slice(e + 1)]);
  }
  use(s) {
    this._fns = [...this._fns, s];
  }
}, N = () => ({ error: new v(), request: new v(), response: new v() }), J = { bodySerializer: (s) => JSON.stringify(s) }, P = O({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), k = { "Content-Type": "application/json" }, g = (s = {}) => ({ ...J, baseUrl: "", fetch: globalThis.fetch, headers: k, parseAs: "auto", querySerializer: P, ...s }), R = (s = {}) => {
  let e = x(g(), s), a = () => ({ ...e }), i = (r) => (e = x(e, r), a()), l = N(), n = async (r) => {
    let t = { ...e, ...r, headers: T(e.headers, r.headers) };
    t.body && t.bodySerializer && (t.body = t.bodySerializer(t.body)), t.body || t.headers.delete("Content-Type");
    let u = D({ baseUrl: t.baseUrl ?? "", path: t.path, query: t.query, querySerializer: typeof t.querySerializer == "function" ? t.querySerializer : O(t.querySerializer), url: t.url }), d = { redirect: "follow", ...t }, c = new Request(u, d);
    for (let f of l.request._fns) c = await f(c, t);
    let U = t.fetch, o = await U(c);
    for (let f of l.response._fns) o = await f(o, c, t);
    let m = { request: c, response: o };
    if (o.ok) {
      if (o.status === 204 || o.headers.get("Content-Length") === "0") return { data: {}, ...m };
      if (t.parseAs === "stream") return { data: o.body, ...m };
      let f = (t.parseAs === "auto" ? I(o.headers.get("Content-Type")) : t.parseAs) ?? "json", w = await o[f]();
      return f === "json" && t.responseTransformer && (w = await t.responseTransformer(w)), { data: w, ...m };
    }
    let b = await o.text();
    try {
      b = JSON.parse(b);
    } catch {
    }
    let h = b;
    for (let f of l.error._fns) h = await f(b, o, c, t);
    if (h = h || {}, t.throwOnError) throw h;
    return { error: h, ...m };
  };
  return { connect: (r) => n({ ...r, method: "CONNECT" }), delete: (r) => n({ ...r, method: "DELETE" }), get: (r) => n({ ...r, method: "GET" }), getConfig: a, head: (r) => n({ ...r, method: "HEAD" }), interceptors: l, options: (r) => n({ ...r, method: "OPTIONS" }), patch: (r) => n({ ...r, method: "PATCH" }), post: (r) => n({ ...r, method: "POST" }), put: (r) => n({ ...r, method: "PUT" }), request: n, setConfig: i, trace: (r) => n({ ...r, method: "TRACE" }) };
};
const p = R(g());
class L {
  static ping(e) {
    return ((e == null ? void 0 : e.client) ?? p).get({
      ...e,
      url: "/umbraco/umbracofun/api/v1/ping"
    });
  }
  static whatsMyName(e) {
    return ((e == null ? void 0 : e.client) ?? p).get({
      ...e,
      url: "/umbraco/umbracofun/api/v1/whatsMyName"
    });
  }
  static whatsTheTimeMrWolf(e) {
    return ((e == null ? void 0 : e.client) ?? p).get({
      ...e,
      url: "/umbraco/umbracofun/api/v1/whatsTheTimeMrWolf"
    });
  }
  static whoAmI(e) {
    return ((e == null ? void 0 : e.client) ?? p).get({
      ...e,
      url: "/umbraco/umbracofun/api/v1/whoAmI"
    });
  }
}
const H = R(g());
class B {
  static getJokes(e) {
    return ((e == null ? void 0 : e.client) ?? H).get({
      ...e,
      url: "/umbraco/umbracofun/api/v1/jokes"
    });
  }
}
export {
  B as J,
  L as U,
  H as c
};
//# sourceMappingURL=services-CwRtMm4o.js.map
