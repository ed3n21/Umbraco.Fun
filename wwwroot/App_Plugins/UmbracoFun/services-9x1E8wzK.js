var q = Object.defineProperty;
var _ = (l, e, a) => e in l ? q(l, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : l[e] = a;
var x = (l, e, a) => _(l, typeof e != "symbol" ? e + "" : e, a);
var W = /\{[^{}]+\}/g, w = ({ allowReserved: l, name: e, value: a }) => {
  if (a == null) return "";
  if (typeof a == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${e}=${l ? a : encodeURIComponent(a)}`;
}, E = (l) => {
  switch (l) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, z = (l) => {
  switch (l) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
}, I = (l) => {
  switch (l) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, T = ({ allowReserved: l, explode: e, name: a, style: i, value: s }) => {
  if (!e) {
    let t = (l ? s : s.map((u) => encodeURIComponent(u))).join(z(i));
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
  let n = E(i), r = s.map((t) => i === "label" || i === "simple" ? l ? t : encodeURIComponent(t) : w({ allowReserved: l, name: a, value: t })).join(n);
  return i === "label" || i === "matrix" ? n + r : r;
}, O = ({ allowReserved: l, explode: e, name: a, style: i, value: s }) => {
  if (s instanceof Date) return `${a}=${s.toISOString()}`;
  if (i !== "deepObject" && !e) {
    let t = [];
    Object.entries(s).forEach(([d, c]) => {
      t = [...t, d, l ? c : encodeURIComponent(c)];
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
  let n = I(i), r = Object.entries(s).map(([t, u]) => w({ allowReserved: l, name: i === "deepObject" ? `${a}[${t}]` : t, value: u })).join(n);
  return i === "label" || i === "matrix" ? n + r : r;
}, J = ({ path: l, url: e }) => {
  let a = e, i = e.match(W);
  if (i) for (let s of i) {
    let n = !1, r = s.substring(1, s.length - 1), t = "simple";
    r.endsWith("*") && (n = !0, r = r.substring(0, r.length - 1)), r.startsWith(".") ? (r = r.substring(1), t = "label") : r.startsWith(";") && (r = r.substring(1), t = "matrix");
    let u = l[r];
    if (u == null) continue;
    if (Array.isArray(u)) {
      a = a.replace(s, T({ explode: n, name: r, style: t, value: u }));
      continue;
    }
    if (typeof u == "object") {
      a = a.replace(s, O({ explode: n, name: r, style: t, value: u }));
      continue;
    }
    if (t === "matrix") {
      a = a.replace(s, `;${w({ name: r, value: u })}`);
      continue;
    }
    let d = encodeURIComponent(t === "label" ? `.${u}` : u);
    a = a.replace(s, d);
  }
  return a;
}, C = ({ allowReserved: l, array: e, object: a } = {}) => (i) => {
  let s = [];
  if (i && typeof i == "object") for (let n in i) {
    let r = i[n];
    if (r != null) {
      if (Array.isArray(r)) {
        s = [...s, T({ allowReserved: l, explode: !0, name: n, style: "form", value: r, ...e })];
        continue;
      }
      if (typeof r == "object") {
        s = [...s, O({ allowReserved: l, explode: !0, name: n, style: "deepObject", value: r, ...a })];
        continue;
      }
      s = [...s, w({ allowReserved: l, name: n, value: r })];
    }
  }
  return s.join("&");
}, D = (l) => {
  if (!l) return;
  let e = l.split(";")[0].trim();
  if (e.startsWith("application/json") || e.endsWith("+json")) return "json";
  if (e === "multipart/form-data") return "formData";
  if (["application/", "audio/", "image/", "video/"].some((a) => e.startsWith(a))) return "blob";
  if (e.startsWith("text/")) return "text";
}, N = ({ baseUrl: l, path: e, query: a, querySerializer: i, url: s }) => {
  let n = s.startsWith("/") ? s : `/${s}`, r = l + n;
  e && (r = J({ path: e, url: r }));
  let t = a ? i(a) : "";
  return t.startsWith("?") && (t = t.substring(1)), t && (r += `?${t}`), r;
}, $ = (l, e) => {
  var i;
  let a = { ...l, ...e };
  return (i = a.baseUrl) != null && i.endsWith("/") && (a.baseUrl = a.baseUrl.substring(0, a.baseUrl.length - 1)), a.headers = R(l.headers, e.headers), a;
}, R = (...l) => {
  let e = new Headers();
  for (let a of l) {
    if (!a || typeof a != "object") continue;
    let i = a instanceof Headers ? a.entries() : Object.entries(a);
    for (let [s, n] of i) if (n === null) e.delete(s);
    else if (Array.isArray(n)) for (let r of n) e.append(s, r);
    else n !== void 0 && e.set(s, typeof n == "object" ? JSON.stringify(n) : n);
  }
  return e;
}, g = class {
  constructor() {
    x(this, "_fns");
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  exists(l) {
    return this._fns.indexOf(l) !== -1;
  }
  eject(l) {
    let e = this._fns.indexOf(l);
    e !== -1 && (this._fns = [...this._fns.slice(0, e), ...this._fns.slice(e + 1)]);
  }
  use(l) {
    this._fns = [...this._fns, l];
  }
}, k = () => ({ error: new g(), request: new g(), response: new g() }), P = { bodySerializer: (l) => JSON.stringify(l) }, H = C({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), M = { "Content-Type": "application/json" }, j = (l = {}) => ({ ...P, baseUrl: "", fetch: globalThis.fetch, headers: M, parseAs: "auto", querySerializer: H, ...l }), A = (l = {}) => {
  let e = $(j(), l), a = () => ({ ...e }), i = (r) => (e = $(e, r), a()), s = k(), n = async (r) => {
    let t = { ...e, ...r, headers: R(e.headers, r.headers) };
    t.body && t.bodySerializer && (t.body = t.bodySerializer(t.body)), t.body || t.headers.delete("Content-Type");
    let u = N({ baseUrl: t.baseUrl ?? "", path: t.path, query: t.query, querySerializer: typeof t.querySerializer == "function" ? t.querySerializer : C(t.querySerializer), url: t.url }), d = { redirect: "follow", ...t }, c = new Request(u, d);
    for (let f of s.request._fns) c = await f(c, t);
    let U = t.fetch, o = await U(c);
    for (let f of s.response._fns) o = await f(o, c, t);
    let h = { request: c, response: o };
    if (o.ok) {
      if (o.status === 204 || o.headers.get("Content-Length") === "0") return { data: {}, ...h };
      if (t.parseAs === "stream") return { data: o.body, ...h };
      let f = (t.parseAs === "auto" ? D(o.headers.get("Content-Type")) : t.parseAs) ?? "json", v = await o[f]();
      return f === "json" && t.responseTransformer && (v = await t.responseTransformer(v)), { data: v, ...h };
    }
    let b = await o.text();
    try {
      b = JSON.parse(b);
    } catch {
    }
    let m = b;
    for (let f of s.error._fns) m = await f(b, o, c, t);
    if (m = m || {}, t.throwOnError) throw m;
    return { error: m, ...h };
  };
  return { connect: (r) => n({ ...r, method: "CONNECT" }), delete: (r) => n({ ...r, method: "DELETE" }), get: (r) => n({ ...r, method: "GET" }), getConfig: a, head: (r) => n({ ...r, method: "HEAD" }), interceptors: s, options: (r) => n({ ...r, method: "OPTIONS" }), patch: (r) => n({ ...r, method: "PATCH" }), post: (r) => n({ ...r, method: "POST" }), put: (r) => n({ ...r, method: "PUT" }), request: n, setConfig: i, trace: (r) => n({ ...r, method: "TRACE" }) };
};
const p = A(j());
class B {
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
const S = A(j());
var y = void 0;
class F {
  static getJokes(e) {
    y && y.abort(), y = new AbortController();
    const { signal: a } = y;
    return ((e == null ? void 0 : e.client) ?? S).get({
      ...e,
      url: "/umbraco/umbracofun/api/v1/jokes",
      signal: a
    });
  }
  static getJokeTypes(e) {
    return ((e == null ? void 0 : e.client) ?? S).get({
      ...e,
      url: "/umbraco/umbracofun/api/v1/jokes/types"
    });
  }
}
export {
  F as J,
  B as U,
  S as c
};
//# sourceMappingURL=services-9x1E8wzK.js.map
