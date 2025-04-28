import { css as Pi, property as zi, state as _t, customElement as Ie, LitElement as He, html as Et, repeat as Li, nothing as us, query as ps } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as fs } from "@umbraco-cms/backoffice/element-api";
import { J as ti } from "./services-CbZ9oLtH.js";
var ms = Object.defineProperty, gs = Object.getOwnPropertyDescriptor, Ti = (e) => {
  throw TypeError(e);
}, Fe = (e, t, i, s) => {
  for (var o = s > 1 ? void 0 : s ? gs(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (o = (s ? n(t, i, o) : n(o)) || o);
  return s && o && ms(t, i, o), o;
}, vs = (e, t, i) => t.has(e) || Ti("Cannot " + i), bs = (e, t, i) => (vs(e, t, "read from private field"), i ? i.call(e) : t.get(e)), ys = (e, t, i) => t.has(e) ? Ti("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), Se;
let Ut = class extends He {
  constructor() {
    super(...arguments), this.text = "This content may contain spoilers or sensitive material. Click to reveal.", this.revealed = !1, ys(this, Se, () => {
      this.revealed = !0;
    });
  }
  render() {
    return Et`
            <div
                class="disclaimer ${this.revealed ? "revealed" : ""}"
                @click=${bs(this, Se)}
            >
                ${this.text}
            </div>
        `;
  }
};
Se = /* @__PURE__ */ new WeakMap();
Ut.styles = Pi`
        .disclaimer {
            filter: blur(4px);
            cursor: pointer;
            transition: filter 0.3s ease;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 0.5rem;
            color: #444;
        }

        .disclaimer.revealed {
            filter: none;
            cursor: default;
        }
    `;
Fe([
  zi()
], Ut.prototype, "text", 2);
Fe([
  _t()
], Ut.prototype, "revealed", 2);
Ut = Fe([
  Ie("disclaimer-box")
], Ut);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qt = globalThis, Ne = Qt.ShadowRoot && (Qt.ShadyCSS === void 0 || Qt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ue = Symbol(), ei = /* @__PURE__ */ new WeakMap();
let Ri = class {
  constructor(t, i, s) {
    if (this._$cssResult$ = !0, s !== Ue) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = i;
  }
  get styleSheet() {
    let t = this.o;
    const i = this.t;
    if (Ne && t === void 0) {
      const s = i !== void 0 && i.length === 1;
      s && (t = ei.get(i)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && ei.set(i, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ws = (e) => new Ri(typeof e == "string" ? e : e + "", void 0, Ue), ct = (e, ...t) => {
  const i = e.length === 1 ? e[0] : t.reduce((s, o, r) => s + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + e[r + 1], e[0]);
  return new Ri(i, e, Ue);
}, _s = (e, t) => {
  if (Ne) e.adoptedStyleSheets = t.map((i) => i instanceof CSSStyleSheet ? i : i.styleSheet);
  else for (const i of t) {
    const s = document.createElement("style"), o = Qt.litNonce;
    o !== void 0 && s.setAttribute("nonce", o), s.textContent = i.cssText, e.appendChild(s);
  }
}, ii = Ne ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let i = "";
  for (const s of t.cssRules) i += s.cssText;
  return ws(i);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: xs, defineProperty: $s, getOwnPropertyDescriptor: Cs, getOwnPropertyNames: As, getOwnPropertySymbols: Ss, getPrototypeOf: Es } = Object, ot = globalThis, si = ot.trustedTypes, ks = si ? si.emptyScript : "", ve = ot.reactiveElementPolyfillSupport, Ht = (e, t) => e, re = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? ks : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let i = e;
  switch (t) {
    case Boolean:
      i = e !== null;
      break;
    case Number:
      i = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        i = JSON.parse(e);
      } catch {
        i = null;
      }
  }
  return i;
} }, je = (e, t) => !xs(e, t), oi = { attribute: !0, type: String, converter: re, reflect: !1, useDefault: !1, hasChanged: je };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), ot.litPropertyMetadata ?? (ot.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let At = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, i = oi) {
    if (i.state && (i.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((i = Object.create(i)).wrapped = !0), this.elementProperties.set(t, i), !i.noAccessor) {
      const s = Symbol(), o = this.getPropertyDescriptor(t, s, i);
      o !== void 0 && $s(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, i, s) {
    const { get: o, set: r } = Cs(this.prototype, t) ?? { get() {
      return this[i];
    }, set(n) {
      this[i] = n;
    } };
    return { get: o, set(n) {
      const l = o == null ? void 0 : o.call(this);
      r == null || r.call(this, n), this.requestUpdate(t, l, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? oi;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Ht("elementProperties"))) return;
    const t = Es(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ht("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Ht("properties"))) {
      const i = this.properties, s = [...As(i), ...Ss(i)];
      for (const o of s) this.createProperty(o, i[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const i = litPropertyMetadata.get(t);
      if (i !== void 0) for (const [s, o] of i) this.elementProperties.set(s, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [i, s] of this.elementProperties) {
      const o = this._$Eu(i, s);
      o !== void 0 && this._$Eh.set(o, i);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const i = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const o of s) i.unshift(ii(o));
    } else t !== void 0 && i.push(ii(t));
    return i;
  }
  static _$Eu(t, i) {
    const s = i.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((i) => this.enableUpdating = i), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((i) => i(this));
  }
  addController(t) {
    var i;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((i = t.hostConnected) == null || i.call(t));
  }
  removeController(t) {
    var i;
    (i = this._$EO) == null || i.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), i = this.constructor.elementProperties;
    for (const s of i.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return _s(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((i) => {
      var s;
      return (s = i.hostConnected) == null ? void 0 : s.call(i);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var s;
      return (s = i.hostDisconnected) == null ? void 0 : s.call(i);
    });
  }
  attributeChangedCallback(t, i, s) {
    this._$AK(t, s);
  }
  _$ET(t, i) {
    var r;
    const s = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, s);
    if (o !== void 0 && s.reflect === !0) {
      const n = (((r = s.converter) == null ? void 0 : r.toAttribute) !== void 0 ? s.converter : re).toAttribute(i, s.type);
      this._$Em = t, n == null ? this.removeAttribute(o) : this.setAttribute(o, n), this._$Em = null;
    }
  }
  _$AK(t, i) {
    var r, n;
    const s = this.constructor, o = s._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const l = s.getPropertyOptions(o), a = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((r = l.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? l.converter : re;
      this._$Em = o, this[o] = a.fromAttribute(i, l.type) ?? ((n = this._$Ej) == null ? void 0 : n.get(o)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(t, i, s) {
    var o;
    if (t !== void 0) {
      const r = this.constructor, n = this[t];
      if (s ?? (s = r.getPropertyOptions(t)), !((s.hasChanged ?? je)(n, i) || s.useDefault && s.reflect && n === ((o = this._$Ej) == null ? void 0 : o.get(t)) && !this.hasAttribute(r._$Eu(t, s)))) return;
      this.C(t, i, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, i, { useDefault: s, reflect: o, wrapped: r }, n) {
    s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, n ?? i ?? this[t]), r !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (i = void 0), this._$AL.set(t, i)), o === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (i) {
      Promise.reject(i);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, n] of this._$Ep) this[r] = n;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [r, n] of o) {
        const { wrapped: l } = n, a = this[r];
        l !== !0 || this._$AL.has(r) || a === void 0 || this.C(r, void 0, n, a);
      }
    }
    let t = !1;
    const i = this._$AL;
    try {
      t = this.shouldUpdate(i), t ? (this.willUpdate(i), (s = this._$EO) == null || s.forEach((o) => {
        var r;
        return (r = o.hostUpdate) == null ? void 0 : r.call(o);
      }), this.update(i)) : this._$EM();
    } catch (o) {
      throw t = !1, this._$EM(), o;
    }
    t && this._$AE(i);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var i;
    (i = this._$EO) == null || i.forEach((s) => {
      var o;
      return (o = s.hostUpdated) == null ? void 0 : o.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((i) => this._$ET(i, this[i]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
At.elementStyles = [], At.shadowRootOptions = { mode: "open" }, At[Ht("elementProperties")] = /* @__PURE__ */ new Map(), At[Ht("finalized")] = /* @__PURE__ */ new Map(), ve == null || ve({ ReactiveElement: At }), (ot.reactiveElementVersions ?? (ot.reactiveElementVersions = [])).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ft = globalThis, ne = Ft.trustedTypes, ri = ne ? ne.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, Di = "$lit$", st = `lit$${Math.random().toFixed(9).slice(2)}$`, Mi = "?" + st, Os = `<${Mi}>`, vt = document, jt = () => vt.createComment(""), Wt = (e) => e === null || typeof e != "object" && typeof e != "function", We = Array.isArray, Ps = (e) => We(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", be = `[ 	
\f\r]`, Dt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ni = /-->/g, li = />/g, ut = RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ai = /'/g, ci = /"/g, Bi = /^(?:script|style|textarea|title)$/i, zs = (e) => (t, ...i) => ({ _$litType$: e, strings: t, values: i }), O = zs(1), rt = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), hi = /* @__PURE__ */ new WeakMap(), mt = vt.createTreeWalker(vt, 129);
function Vi(e, t) {
  if (!We(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ri !== void 0 ? ri.createHTML(t) : t;
}
const Ls = (e, t) => {
  const i = e.length - 1, s = [];
  let o, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = Dt;
  for (let l = 0; l < i; l++) {
    const a = e[l];
    let c, h, d = -1, m = 0;
    for (; m < a.length && (n.lastIndex = m, h = n.exec(a), h !== null); ) m = n.lastIndex, n === Dt ? h[1] === "!--" ? n = ni : h[1] !== void 0 ? n = li : h[2] !== void 0 ? (Bi.test(h[2]) && (o = RegExp("</" + h[2], "g")), n = ut) : h[3] !== void 0 && (n = ut) : n === ut ? h[0] === ">" ? (n = o ?? Dt, d = -1) : h[1] === void 0 ? d = -2 : (d = n.lastIndex - h[2].length, c = h[1], n = h[3] === void 0 ? ut : h[3] === '"' ? ci : ai) : n === ci || n === ai ? n = ut : n === ni || n === li ? n = Dt : (n = ut, o = void 0);
    const p = n === ut && e[l + 1].startsWith("/>") ? " " : "";
    r += n === Dt ? a + Os : d >= 0 ? (s.push(c), a.slice(0, d) + Di + a.slice(d) + st + p) : a + st + (d === -2 ? l : p);
  }
  return [Vi(e, r + (e[i] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class qt {
  constructor({ strings: t, _$litType$: i }, s) {
    let o;
    this.parts = [];
    let r = 0, n = 0;
    const l = t.length - 1, a = this.parts, [c, h] = Ls(t, i);
    if (this.el = qt.createElement(c, s), mt.currentNode = this.el.content, i === 2 || i === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (o = mt.nextNode()) !== null && a.length < l; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const d of o.getAttributeNames()) if (d.endsWith(Di)) {
          const m = h[n++], p = o.getAttribute(d).split(st), g = /([.?@])?(.*)/.exec(m);
          a.push({ type: 1, index: r, name: g[2], strings: p, ctor: g[1] === "." ? Rs : g[1] === "?" ? Ds : g[1] === "@" ? Ms : he }), o.removeAttribute(d);
        } else d.startsWith(st) && (a.push({ type: 6, index: r }), o.removeAttribute(d));
        if (Bi.test(o.tagName)) {
          const d = o.textContent.split(st), m = d.length - 1;
          if (m > 0) {
            o.textContent = ne ? ne.emptyScript : "";
            for (let p = 0; p < m; p++) o.append(d[p], jt()), mt.nextNode(), a.push({ type: 2, index: ++r });
            o.append(d[m], jt());
          }
        }
      } else if (o.nodeType === 8) if (o.data === Mi) a.push({ type: 2, index: r });
      else {
        let d = -1;
        for (; (d = o.data.indexOf(st, d + 1)) !== -1; ) a.push({ type: 7, index: r }), d += st.length - 1;
      }
      r++;
    }
  }
  static createElement(t, i) {
    const s = vt.createElement("template");
    return s.innerHTML = t, s;
  }
}
function Ot(e, t, i = e, s) {
  var n, l;
  if (t === rt) return t;
  let o = s !== void 0 ? (n = i._$Co) == null ? void 0 : n[s] : i._$Cl;
  const r = Wt(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== r && ((l = o == null ? void 0 : o._$AO) == null || l.call(o, !1), r === void 0 ? o = void 0 : (o = new r(e), o._$AT(e, i, s)), s !== void 0 ? (i._$Co ?? (i._$Co = []))[s] = o : i._$Cl = o), o !== void 0 && (t = Ot(e, o._$AS(e, t.values), o, s)), t;
}
class Ts {
  constructor(t, i) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: i }, parts: s } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? vt).importNode(i, !0);
    mt.currentNode = o;
    let r = mt.nextNode(), n = 0, l = 0, a = s[0];
    for (; a !== void 0; ) {
      if (n === a.index) {
        let c;
        a.type === 2 ? c = new Yt(r, r.nextSibling, this, t) : a.type === 1 ? c = new a.ctor(r, a.name, a.strings, this, t) : a.type === 6 && (c = new Bs(r, this, t)), this._$AV.push(c), a = s[++l];
      }
      n !== (a == null ? void 0 : a.index) && (r = mt.nextNode(), n++);
    }
    return mt.currentNode = vt, o;
  }
  p(t) {
    let i = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
  }
}
class Yt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, i, s, o) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const i = this._$AM;
    return i !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = i.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, i = this) {
    t = Ot(this, t, i), Wt(t) ? t === A || t == null || t === "" ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== rt && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ps(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== A && Wt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(vt.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var r;
    const { values: i, _$litType$: s } = t, o = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = qt.createElement(Vi(s.h, s.h[0]), this.options)), s);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === o) this._$AH.p(i);
    else {
      const n = new Ts(o, this), l = n.u(this.options);
      n.p(i), this.T(l), this._$AH = n;
    }
  }
  _$AC(t) {
    let i = hi.get(t.strings);
    return i === void 0 && hi.set(t.strings, i = new qt(t)), i;
  }
  k(t) {
    We(this._$AH) || (this._$AH = [], this._$AR());
    const i = this._$AH;
    let s, o = 0;
    for (const r of t) o === i.length ? i.push(s = new Yt(this.O(jt()), this.O(jt()), this, this.options)) : s = i[o], s._$AI(r), o++;
    o < i.length && (this._$AR(s && s._$AB.nextSibling, o), i.length = o);
  }
  _$AR(t = this._$AA.nextSibling, i) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, i); t && t !== this._$AB; ) {
      const o = t.nextSibling;
      t.remove(), t = o;
    }
  }
  setConnected(t) {
    var i;
    this._$AM === void 0 && (this._$Cv = t, (i = this._$AP) == null || i.call(this, t));
  }
}
class he {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, i, s, o, r) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = i, this._$AM = o, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = A;
  }
  _$AI(t, i = this, s, o) {
    const r = this.strings;
    let n = !1;
    if (r === void 0) t = Ot(this, t, i, 0), n = !Wt(t) || t !== this._$AH && t !== rt, n && (this._$AH = t);
    else {
      const l = t;
      let a, c;
      for (t = r[0], a = 0; a < r.length - 1; a++) c = Ot(this, l[s + a], i, a), c === rt && (c = this._$AH[a]), n || (n = !Wt(c) || c !== this._$AH[a]), c === A ? t = A : t !== A && (t += (c ?? "") + r[a + 1]), this._$AH[a] = c;
    }
    n && !o && this.j(t);
  }
  j(t) {
    t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Rs extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === A ? void 0 : t;
  }
}
class Ds extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== A);
  }
}
class Ms extends he {
  constructor(t, i, s, o, r) {
    super(t, i, s, o, r), this.type = 5;
  }
  _$AI(t, i = this) {
    if ((t = Ot(this, t, i, 0) ?? A) === rt) return;
    const s = this._$AH, o = t === A && s !== A || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, r = t !== A && (s === A || o);
    o && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var i;
    typeof this._$AH == "function" ? this._$AH.call(((i = this.options) == null ? void 0 : i.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Bs {
  constructor(t, i, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Ot(this, t);
  }
}
const ye = Ft.litHtmlPolyfillSupport;
ye == null || ye(qt, Yt), (Ft.litHtmlVersions ?? (Ft.litHtmlVersions = [])).push("3.3.0");
const Vs = (e, t, i) => {
  const s = (i == null ? void 0 : i.renderBefore) ?? t;
  let o = s._$litPart$;
  if (o === void 0) {
    const r = (i == null ? void 0 : i.renderBefore) ?? null;
    s._$litPart$ = o = new Yt(t.insertBefore(jt(), r), r, void 0, i ?? {});
  }
  return o._$AI(e), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gt = globalThis;
let Nt = class extends At {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var i;
    const t = super.createRenderRoot();
    return (i = this.renderOptions).renderBefore ?? (i.renderBefore = t.firstChild), t;
  }
  update(t) {
    const i = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Vs(i, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return rt;
  }
};
var Oi;
Nt._$litElement$ = !0, Nt.finalized = !0, (Oi = gt.litElementHydrateSupport) == null || Oi.call(gt, { LitElement: Nt });
const we = gt.litElementPolyfillSupport;
we == null || we({ LitElement: Nt });
(gt.litElementVersions ?? (gt.litElementVersions = [])).push("4.2.0");
var Is = ct`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`, Hs = ct`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`, Ee = "";
function di(e) {
  Ee = e;
}
function Fs(e = "") {
  if (!Ee) {
    const t = [...document.getElementsByTagName("script")], i = t.find((s) => s.hasAttribute("data-shoelace"));
    if (i)
      di(i.getAttribute("data-shoelace"));
    else {
      const s = t.find((r) => /shoelace(\.min)?\.js($|\?)/.test(r.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));
      let o = "";
      s && (o = s.getAttribute("src")), di(o.split("/").slice(0, -1).join("/"));
    }
  }
  return Ee.replace(/\/$/, "") + (e ? `/${e.replace(/^\//, "")}` : "");
}
var Ns = {
  name: "default",
  resolver: (e) => Fs(`assets/icons/${e}.svg`)
}, Us = Ns, ui = {
  caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
  check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
  "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
  eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
  "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
  eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
  "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
  indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
  "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
  "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
  radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
  "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
  "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
  "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
}, js = {
  name: "system",
  resolver: (e) => e in ui ? `data:image/svg+xml,${encodeURIComponent(ui[e])}` : ""
}, Ws = js, qs = [Us, Ws], ke = [];
function Js(e) {
  ke.push(e);
}
function Ys(e) {
  ke = ke.filter((t) => t !== e);
}
function pi(e) {
  return qs.find((t) => t.name === e);
}
var Ks = ct`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`, Ii = Object.defineProperty, Xs = Object.defineProperties, Gs = Object.getOwnPropertyDescriptor, Zs = Object.getOwnPropertyDescriptors, fi = Object.getOwnPropertySymbols, Qs = Object.prototype.hasOwnProperty, to = Object.prototype.propertyIsEnumerable, Hi = (e) => {
  throw TypeError(e);
}, mi = (e, t, i) => t in e ? Ii(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i, xt = (e, t) => {
  for (var i in t || (t = {}))
    Qs.call(t, i) && mi(e, i, t[i]);
  if (fi)
    for (var i of fi(t))
      to.call(t, i) && mi(e, i, t[i]);
  return e;
}, de = (e, t) => Xs(e, Zs(t)), u = (e, t, i, s) => {
  for (var o = s > 1 ? void 0 : s ? Gs(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (o = (s ? n(t, i, o) : n(o)) || o);
  return s && o && Ii(t, i, o), o;
}, Fi = (e, t, i) => t.has(e) || Hi("Cannot " + i), eo = (e, t, i) => (Fi(e, t, "read from private field"), t.get(e)), io = (e, t, i) => t.has(e) ? Hi("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), so = (e, t, i, s) => (Fi(e, t, "write to private field"), t.set(e, i), i);
function ht(e, t) {
  const i = xt({
    waitUntilFirstUpdate: !1
  }, t);
  return (s, o) => {
    const { update: r } = s, n = Array.isArray(e) ? e : [e];
    s.update = function(l) {
      n.forEach((a) => {
        const c = a;
        if (l.has(c)) {
          const h = l.get(c), d = this[c];
          h !== d && (!i.waitUntilFirstUpdate || this.hasUpdated) && this[o](h, d);
        }
      }), r.call(this, l);
    };
  };
}
var zt = ct`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oo = { attribute: !0, type: String, converter: re, reflect: !1, hasChanged: je }, ro = (e = oo, t, i) => {
  const { kind: s, metadata: o } = i;
  let r = globalThis.litPropertyMetadata.get(o);
  if (r === void 0 && globalThis.litPropertyMetadata.set(o, r = /* @__PURE__ */ new Map()), s === "setter" && ((e = Object.create(e)).wrapped = !0), r.set(i.name, e), s === "accessor") {
    const { name: n } = i;
    return { set(l) {
      const a = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(n, a, e);
    }, init(l) {
      return l !== void 0 && this.C(n, void 0, e, l), l;
    } };
  }
  if (s === "setter") {
    const { name: n } = i;
    return function(l) {
      const a = this[n];
      t.call(this, l), this.requestUpdate(n, a, e);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function f(e) {
  return (t, i) => typeof i == "object" ? ro(e, t, i) : ((s, o, r) => {
    const n = o.hasOwnProperty(r);
    return o.constructor.createProperty(r, s), n ? Object.getOwnPropertyDescriptor(o, r) : void 0;
  })(e, t, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function I(e) {
  return f({ ...e, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const no = (e, t, i) => (i.configurable = !0, i.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, i), i);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Z(e, t) {
  return (i, s, o) => {
    const r = (n) => {
      var l;
      return ((l = n.renderRoot) == null ? void 0 : l.querySelector(e)) ?? null;
    };
    return no(i, s, { get() {
      return r(this);
    } });
  };
}
var te, Y = class extends Nt {
  constructor() {
    super(), io(this, te, !1), this.initialReflectedProperties = /* @__PURE__ */ new Map(), Object.entries(this.constructor.dependencies).forEach(([e, t]) => {
      this.constructor.define(e, t);
    });
  }
  emit(e, t) {
    const i = new CustomEvent(e, xt({
      bubbles: !0,
      cancelable: !1,
      composed: !0,
      detail: {}
    }, t));
    return this.dispatchEvent(i), i;
  }
  /* eslint-enable */
  static define(e, t = this, i = {}) {
    const s = customElements.get(e);
    if (!s) {
      try {
        customElements.define(e, t, i);
      } catch {
        customElements.define(e, class extends t {
        }, i);
      }
      return;
    }
    let o = " (unknown version)", r = o;
    "version" in t && t.version && (o = " v" + t.version), "version" in s && s.version && (r = " v" + s.version), !(o && r && o === r) && console.warn(
      `Attempted to register <${e}>${o}, but <${e}>${r} has already been registered.`
    );
  }
  attributeChangedCallback(e, t, i) {
    eo(this, te) || (this.constructor.elementProperties.forEach(
      (s, o) => {
        s.reflect && this[o] != null && this.initialReflectedProperties.set(o, this[o]);
      }
    ), so(this, te, !0)), super.attributeChangedCallback(e, t, i);
  }
  willUpdate(e) {
    super.willUpdate(e), this.initialReflectedProperties.forEach((t, i) => {
      e.has(i) && this[i] == null && (this[i] = t);
    });
  }
};
te = /* @__PURE__ */ new WeakMap();
Y.version = "2.20.1";
Y.dependencies = {};
u([
  f()
], Y.prototype, "dir", 2);
u([
  f()
], Y.prototype, "lang", 2);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lo = (e, t) => (e == null ? void 0 : e._$litType$) !== void 0;
var Mt = Symbol(), Xt = Symbol(), _e, xe = /* @__PURE__ */ new Map(), H = class extends Y {
  constructor() {
    super(...arguments), this.initialRender = !1, this.svg = null, this.label = "", this.library = "default";
  }
  /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
  async resolveIcon(e, t) {
    var i;
    let s;
    if (t != null && t.spriteSheet)
      return this.svg = O`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`, this.svg;
    try {
      if (s = await fetch(e, { mode: "cors" }), !s.ok) return s.status === 410 ? Mt : Xt;
    } catch {
      return Xt;
    }
    try {
      const o = document.createElement("div");
      o.innerHTML = await s.text();
      const r = o.firstElementChild;
      if (((i = r == null ? void 0 : r.tagName) == null ? void 0 : i.toLowerCase()) !== "svg") return Mt;
      _e || (_e = new DOMParser());
      const l = _e.parseFromString(r.outerHTML, "text/html").body.querySelector("svg");
      return l ? (l.part.add("svg"), document.adoptNode(l)) : Mt;
    } catch {
      return Mt;
    }
  }
  connectedCallback() {
    super.connectedCallback(), Js(this);
  }
  firstUpdated() {
    this.initialRender = !0, this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), Ys(this);
  }
  getIconSource() {
    const e = pi(this.library);
    return this.name && e ? {
      url: e.resolver(this.name),
      fromLibrary: !0
    } : {
      url: this.src,
      fromLibrary: !1
    };
  }
  handleLabelChange() {
    typeof this.label == "string" && this.label.length > 0 ? (this.setAttribute("role", "img"), this.setAttribute("aria-label", this.label), this.removeAttribute("aria-hidden")) : (this.removeAttribute("role"), this.removeAttribute("aria-label"), this.setAttribute("aria-hidden", "true"));
  }
  async setIcon() {
    var e;
    const { url: t, fromLibrary: i } = this.getIconSource(), s = i ? pi(this.library) : void 0;
    if (!t) {
      this.svg = null;
      return;
    }
    let o = xe.get(t);
    if (o || (o = this.resolveIcon(t, s), xe.set(t, o)), !this.initialRender)
      return;
    const r = await o;
    if (r === Xt && xe.delete(t), t === this.getIconSource().url) {
      if (lo(r)) {
        if (this.svg = r, s) {
          await this.updateComplete;
          const n = this.shadowRoot.querySelector("[part='svg']");
          typeof s.mutator == "function" && n && s.mutator(n);
        }
        return;
      }
      switch (r) {
        case Xt:
        case Mt:
          this.svg = null, this.emit("sl-error");
          break;
        default:
          this.svg = r.cloneNode(!0), (e = s == null ? void 0 : s.mutator) == null || e.call(s, this.svg), this.emit("sl-load");
      }
    }
  }
  render() {
    return this.svg;
  }
};
H.styles = [zt, Ks];
u([
  I()
], H.prototype, "svg", 2);
u([
  f({ reflect: !0 })
], H.prototype, "name", 2);
u([
  f()
], H.prototype, "src", 2);
u([
  f()
], H.prototype, "label", 2);
u([
  f({ reflect: !0 })
], H.prototype, "library", 2);
u([
  ht("label")
], H.prototype, "handleLabelChange", 1);
u([
  ht(["name", "src", "library"])
], H.prototype, "setIcon", 1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ni = { ATTRIBUTE: 1, CHILD: 2 }, Ui = (e) => (...t) => ({ _$litDirective$: e, values: t });
let ji = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, i, s) {
    this._$Ct = t, this._$AM = i, this._$Ci = s;
  }
  _$AS(t, i) {
    return this.update(t, i);
  }
  update(t, i) {
    return this.render(...i);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bt = Ui(class extends ji {
  constructor(e) {
    var t;
    if (super(e), e.type !== Ni.ATTRIBUTE || e.name !== "class" || ((t = e.strings) == null ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
  }
  update(e, [t]) {
    var s, o;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((r) => r !== "")));
      for (const r in t) t[r] && !((s = this.nt) != null && s.has(r)) && this.st.add(r);
      return this.render(t);
    }
    const i = e.element.classList;
    for (const r of this.st) r in t || (i.remove(r), this.st.delete(r));
    for (const r in t) {
      const n = !!t[r];
      n === this.st.has(r) || (o = this.nt) != null && o.has(r) || (n ? (i.add(r), this.st.add(r)) : (i.remove(r), this.st.delete(r)));
    }
    return rt;
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Wi = Symbol.for(""), ao = (e) => {
  if ((e == null ? void 0 : e.r) === Wi) return e == null ? void 0 : e._$litStatic$;
}, gi = (e, ...t) => ({ _$litStatic$: t.reduce((i, s, o) => i + ((r) => {
  if (r._$litStatic$ !== void 0) return r._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(s) + e[o + 1], e[0]), r: Wi }), vi = /* @__PURE__ */ new Map(), co = (e) => (t, ...i) => {
  const s = i.length;
  let o, r;
  const n = [], l = [];
  let a, c = 0, h = !1;
  for (; c < s; ) {
    for (a = t[c]; c < s && (r = i[c], (o = ao(r)) !== void 0); ) a += o + t[++c], h = !0;
    c !== s && l.push(r), n.push(a), c++;
  }
  if (c === s && n.push(t[s]), h) {
    const d = n.join("$$lit$$");
    (t = vi.get(d)) === void 0 && (n.raw = n, vi.set(d, t = n)), i = l;
  }
  return e(t, ...i);
}, ho = co(O);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = (e) => e ?? A;
var L = class extends Y {
  constructor() {
    super(...arguments), this.hasFocus = !1, this.label = "", this.disabled = !1;
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = !0, this.emit("sl-focus");
  }
  handleClick(e) {
    this.disabled && (e.preventDefault(), e.stopPropagation());
  }
  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the icon button. */
  focus(e) {
    this.button.focus(e);
  }
  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }
  render() {
    const e = !!this.href, t = e ? gi`a` : gi`button`;
    return ho`
      <${t}
        part="base"
        class=${bt({
      "icon-button": !0,
      "icon-button--disabled": !e && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${j(e ? void 0 : this.disabled)}
        type=${j(e ? void 0 : "button")}
        href=${j(e ? this.href : void 0)}
        target=${j(e ? this.target : void 0)}
        download=${j(e ? this.download : void 0)}
        rel=${j(e && this.target ? "noreferrer noopener" : void 0)}
        role=${j(e ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${j(this.name)}
          library=${j(this.library)}
          src=${j(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `;
  }
};
L.styles = [zt, Hs];
L.dependencies = { "sl-icon": H };
u([
  Z(".icon-button")
], L.prototype, "button", 2);
u([
  I()
], L.prototype, "hasFocus", 2);
u([
  f()
], L.prototype, "name", 2);
u([
  f()
], L.prototype, "library", 2);
u([
  f()
], L.prototype, "src", 2);
u([
  f()
], L.prototype, "href", 2);
u([
  f()
], L.prototype, "target", 2);
u([
  f()
], L.prototype, "download", 2);
u([
  f()
], L.prototype, "label", 2);
u([
  f({ type: Boolean, reflect: !0 })
], L.prototype, "disabled", 2);
const Oe = /* @__PURE__ */ new Set(), St = /* @__PURE__ */ new Map();
let ft, qe = "ltr", Je = "en";
const qi = typeof MutationObserver < "u" && typeof document < "u" && typeof document.documentElement < "u";
if (qi) {
  const e = new MutationObserver(Yi);
  qe = document.documentElement.dir || "ltr", Je = document.documentElement.lang || navigator.language, e.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["dir", "lang"]
  });
}
function Ji(...e) {
  e.map((t) => {
    const i = t.$code.toLowerCase();
    St.has(i) ? St.set(i, Object.assign(Object.assign({}, St.get(i)), t)) : St.set(i, t), ft || (ft = t);
  }), Yi();
}
function Yi() {
  qi && (qe = document.documentElement.dir || "ltr", Je = document.documentElement.lang || navigator.language), [...Oe.keys()].map((e) => {
    typeof e.requestUpdate == "function" && e.requestUpdate();
  });
}
let uo = class {
  constructor(t) {
    this.host = t, this.host.addController(this);
  }
  hostConnected() {
    Oe.add(this.host);
  }
  hostDisconnected() {
    Oe.delete(this.host);
  }
  dir() {
    return `${this.host.dir || qe}`.toLowerCase();
  }
  lang() {
    return `${this.host.lang || Je}`.toLowerCase();
  }
  getTranslationData(t) {
    var i, s;
    const o = new Intl.Locale(t.replace(/_/g, "-")), r = o == null ? void 0 : o.language.toLowerCase(), n = (s = (i = o == null ? void 0 : o.region) === null || i === void 0 ? void 0 : i.toLowerCase()) !== null && s !== void 0 ? s : "", l = St.get(`${r}-${n}`), a = St.get(r);
    return { locale: o, language: r, region: n, primary: l, secondary: a };
  }
  exists(t, i) {
    var s;
    const { primary: o, secondary: r } = this.getTranslationData((s = i.lang) !== null && s !== void 0 ? s : this.lang());
    return i = Object.assign({ includeFallback: !1 }, i), !!(o && o[t] || r && r[t] || i.includeFallback && ft && ft[t]);
  }
  term(t, ...i) {
    const { primary: s, secondary: o } = this.getTranslationData(this.lang());
    let r;
    if (s && s[t])
      r = s[t];
    else if (o && o[t])
      r = o[t];
    else if (ft && ft[t])
      r = ft[t];
    else
      return console.error(`No translation found for: ${String(t)}`), String(t);
    return typeof r == "function" ? r(...i) : r;
  }
  date(t, i) {
    return t = new Date(t), new Intl.DateTimeFormat(this.lang(), i).format(t);
  }
  number(t, i) {
    return t = Number(t), isNaN(t) ? "" : new Intl.NumberFormat(this.lang(), i).format(t);
  }
  relativeTime(t, i, s) {
    return new Intl.RelativeTimeFormat(this.lang(), s).format(t, i);
  }
};
var Ki = {
  $code: "en",
  $name: "English",
  $dir: "ltr",
  carousel: "Carousel",
  clearEntry: "Clear entry",
  close: "Close",
  copied: "Copied",
  copy: "Copy",
  currentValue: "Current value",
  error: "Error",
  goToSlide: (e, t) => `Go to slide ${e} of ${t}`,
  hidePassword: "Hide password",
  loading: "Loading",
  nextSlide: "Next slide",
  numOptionsSelected: (e) => e === 0 ? "No options selected" : e === 1 ? "1 option selected" : `${e} options selected`,
  previousSlide: "Previous slide",
  progress: "Progress",
  remove: "Remove",
  resize: "Resize",
  scrollToEnd: "Scroll to end",
  scrollToStart: "Scroll to start",
  selectAColorFromTheScreen: "Select a color from the screen",
  showPassword: "Show password",
  slideNum: (e) => `Slide ${e}`,
  toggleColorFormat: "Toggle color format"
};
Ji(Ki);
var po = Ki, ue = class extends uo {
};
Ji(po);
var $t = class extends Y {
  constructor() {
    super(...arguments), this.localize = new ue(this), this.variant = "neutral", this.size = "medium", this.pill = !1, this.removable = !1;
  }
  handleRemoveClick() {
    this.emit("sl-remove");
  }
  render() {
    return O`
      <span
        part="base"
        class=${bt({
      tag: !0,
      // Types
      "tag--primary": this.variant === "primary",
      "tag--success": this.variant === "success",
      "tag--neutral": this.variant === "neutral",
      "tag--warning": this.variant === "warning",
      "tag--danger": this.variant === "danger",
      "tag--text": this.variant === "text",
      // Sizes
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      // Modifiers
      "tag--pill": this.pill,
      "tag--removable": this.removable
    })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable ? O`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </span>
    `;
  }
};
$t.styles = [zt, Is];
$t.dependencies = { "sl-icon-button": L };
u([
  f({ reflect: !0 })
], $t.prototype, "variant", 2);
u([
  f({ reflect: !0 })
], $t.prototype, "size", 2);
u([
  f({ type: Boolean, reflect: !0 })
], $t.prototype, "pill", 2);
u([
  f({ type: Boolean })
], $t.prototype, "removable", 2);
var fo = ct`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;
function mo(e, t) {
  return {
    top: Math.round(e.getBoundingClientRect().top - t.getBoundingClientRect().top),
    left: Math.round(e.getBoundingClientRect().left - t.getBoundingClientRect().left)
  };
}
function go(e, t, i = "vertical", s = "smooth") {
  const o = mo(e, t), r = o.top + t.scrollTop, n = o.left + t.scrollLeft, l = t.scrollLeft, a = t.scrollLeft + t.offsetWidth, c = t.scrollTop, h = t.scrollTop + t.offsetHeight;
  (i === "horizontal" || i === "both") && (n < l ? t.scrollTo({ left: n, behavior: s }) : n + e.clientWidth > a && t.scrollTo({ left: n - t.offsetWidth + e.clientWidth, behavior: s })), (i === "vertical" || i === "both") && (r < c ? t.scrollTo({ top: r, behavior: s }) : r + e.clientHeight > h && t.scrollTo({ top: r - t.offsetHeight + e.clientHeight, behavior: s }));
}
var vo = ct`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`, bo = ct`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;
const nt = Math.min, P = Math.max, le = Math.round, Gt = Math.floor, q = (e) => ({
  x: e,
  y: e
}), yo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, wo = {
  start: "end",
  end: "start"
};
function Pe(e, t, i) {
  return P(e, nt(t, i));
}
function Lt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function lt(e) {
  return e.split("-")[0];
}
function Tt(e) {
  return e.split("-")[1];
}
function Xi(e) {
  return e === "x" ? "y" : "x";
}
function Ye(e) {
  return e === "y" ? "height" : "width";
}
function yt(e) {
  return ["top", "bottom"].includes(lt(e)) ? "y" : "x";
}
function Ke(e) {
  return Xi(yt(e));
}
function _o(e, t, i) {
  i === void 0 && (i = !1);
  const s = Tt(e), o = Ke(e), r = Ye(o);
  let n = o === "x" ? s === (i ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (n = ae(n)), [n, ae(n)];
}
function xo(e) {
  const t = ae(e);
  return [ze(e), t, ze(t)];
}
function ze(e) {
  return e.replace(/start|end/g, (t) => wo[t]);
}
function $o(e, t, i) {
  const s = ["left", "right"], o = ["right", "left"], r = ["top", "bottom"], n = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return i ? t ? o : s : t ? s : o;
    case "left":
    case "right":
      return t ? r : n;
    default:
      return [];
  }
}
function Co(e, t, i, s) {
  const o = Tt(e);
  let r = $o(lt(e), i === "start", s);
  return o && (r = r.map((n) => n + "-" + o), t && (r = r.concat(r.map(ze)))), r;
}
function ae(e) {
  return e.replace(/left|right|bottom|top/g, (t) => yo[t]);
}
function Ao(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Gi(e) {
  return typeof e != "number" ? Ao(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ce(e) {
  const {
    x: t,
    y: i,
    width: s,
    height: o
  } = e;
  return {
    width: s,
    height: o,
    top: i,
    left: t,
    right: t + s,
    bottom: i + o,
    x: t,
    y: i
  };
}
function bi(e, t, i) {
  let {
    reference: s,
    floating: o
  } = e;
  const r = yt(t), n = Ke(t), l = Ye(n), a = lt(t), c = r === "y", h = s.x + s.width / 2 - o.width / 2, d = s.y + s.height / 2 - o.height / 2, m = s[l] / 2 - o[l] / 2;
  let p;
  switch (a) {
    case "top":
      p = {
        x: h,
        y: s.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: h,
        y: s.y + s.height
      };
      break;
    case "right":
      p = {
        x: s.x + s.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: s.x - o.width,
        y: d
      };
      break;
    default:
      p = {
        x: s.x,
        y: s.y
      };
  }
  switch (Tt(t)) {
    case "start":
      p[n] -= m * (i && c ? -1 : 1);
      break;
    case "end":
      p[n] += m * (i && c ? -1 : 1);
      break;
  }
  return p;
}
const So = async (e, t, i) => {
  const {
    placement: s = "bottom",
    strategy: o = "absolute",
    middleware: r = [],
    platform: n
  } = i, l = r.filter(Boolean), a = await (n.isRTL == null ? void 0 : n.isRTL(t));
  let c = await n.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: h,
    y: d
  } = bi(c, s, a), m = s, p = {}, g = 0;
  for (let v = 0; v < l.length; v++) {
    const {
      name: w,
      fn: b
    } = l[v], {
      x: _,
      y: x,
      data: S,
      reset: C
    } = await b({
      x: h,
      y: d,
      initialPlacement: s,
      placement: m,
      strategy: o,
      middlewareData: p,
      rects: c,
      platform: n,
      elements: {
        reference: e,
        floating: t
      }
    });
    h = _ ?? h, d = x ?? d, p = {
      ...p,
      [w]: {
        ...p[w],
        ...S
      }
    }, C && g <= 50 && (g++, typeof C == "object" && (C.placement && (m = C.placement), C.rects && (c = C.rects === !0 ? await n.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: h,
      y: d
    } = bi(c, m, a)), v = -1);
  }
  return {
    x: h,
    y: d,
    placement: m,
    strategy: o,
    middlewareData: p
  };
};
async function Xe(e, t) {
  var i;
  t === void 0 && (t = {});
  const {
    x: s,
    y: o,
    platform: r,
    rects: n,
    elements: l,
    strategy: a
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: d = "floating",
    altBoundary: m = !1,
    padding: p = 0
  } = Lt(t, e), g = Gi(p), w = l[m ? d === "floating" ? "reference" : "floating" : d], b = ce(await r.getClippingRect({
    element: (i = await (r.isElement == null ? void 0 : r.isElement(w))) == null || i ? w : w.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: h,
    strategy: a
  })), _ = d === "floating" ? {
    x: s,
    y: o,
    width: n.floating.width,
    height: n.floating.height
  } : n.reference, x = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l.floating)), S = await (r.isElement == null ? void 0 : r.isElement(x)) ? await (r.getScale == null ? void 0 : r.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = ce(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: _,
    offsetParent: x,
    strategy: a
  }) : _);
  return {
    top: (b.top - C.top + g.top) / S.y,
    bottom: (C.bottom - b.bottom + g.bottom) / S.y,
    left: (b.left - C.left + g.left) / S.x,
    right: (C.right - b.right + g.right) / S.x
  };
}
const Eo = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: i,
      y: s,
      placement: o,
      rects: r,
      platform: n,
      elements: l,
      middlewareData: a
    } = t, {
      element: c,
      padding: h = 0
    } = Lt(e, t) || {};
    if (c == null)
      return {};
    const d = Gi(h), m = {
      x: i,
      y: s
    }, p = Ke(o), g = Ye(p), v = await n.getDimensions(c), w = p === "y", b = w ? "top" : "left", _ = w ? "bottom" : "right", x = w ? "clientHeight" : "clientWidth", S = r.reference[g] + r.reference[p] - m[p] - r.floating[g], C = m[p] - r.reference[p], R = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(c));
    let E = R ? R[x] : 0;
    (!E || !await (n.isElement == null ? void 0 : n.isElement(R))) && (E = l.floating[x] || r.floating[g]);
    const X = S / 2 - C / 2, F = E / 2 - v[g] / 2 - 1, D = nt(d[b], F), Q = nt(d[_], F), N = D, tt = E - v[g] - Q, k = E / 2 - v[g] / 2 + X, Ct = Pe(N, k, tt), G = !a.arrow && Tt(o) != null && k !== Ct && r.reference[g] / 2 - (k < N ? D : Q) - v[g] / 2 < 0, U = G ? k < N ? k - N : k - tt : 0;
    return {
      [p]: m[p] + U,
      data: {
        [p]: Ct,
        centerOffset: k - Ct - U,
        ...G && {
          alignmentOffset: U
        }
      },
      reset: G
    };
  }
}), ko = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var i, s;
      const {
        placement: o,
        middlewareData: r,
        rects: n,
        initialPlacement: l,
        platform: a,
        elements: c
      } = t, {
        mainAxis: h = !0,
        crossAxis: d = !0,
        fallbackPlacements: m,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: v = !0,
        ...w
      } = Lt(e, t);
      if ((i = r.arrow) != null && i.alignmentOffset)
        return {};
      const b = lt(o), _ = yt(l), x = lt(l) === l, S = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), C = m || (x || !v ? [ae(l)] : xo(l)), R = g !== "none";
      !m && R && C.push(...Co(l, v, g, S));
      const E = [l, ...C], X = await Xe(t, w), F = [];
      let D = ((s = r.flip) == null ? void 0 : s.overflows) || [];
      if (h && F.push(X[b]), d) {
        const k = _o(o, n, S);
        F.push(X[k[0]], X[k[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: F
      }], !F.every((k) => k <= 0)) {
        var Q, N;
        const k = (((Q = r.flip) == null ? void 0 : Q.index) || 0) + 1, Ct = E[k];
        if (Ct)
          return {
            data: {
              index: k,
              overflows: D
            },
            reset: {
              placement: Ct
            }
          };
        let G = (N = D.filter((U) => U.overflows[0] <= 0).sort((U, et) => U.overflows[1] - et.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!G)
          switch (p) {
            case "bestFit": {
              var tt;
              const U = (tt = D.filter((et) => {
                if (R) {
                  const it = yt(et.placement);
                  return it === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  it === "y";
                }
                return !0;
              }).map((et) => [et.placement, et.overflows.filter((it) => it > 0).reduce((it, ds) => it + ds, 0)]).sort((et, it) => et[1] - it[1])[0]) == null ? void 0 : tt[0];
              U && (G = U);
              break;
            }
            case "initialPlacement":
              G = l;
              break;
          }
        if (o !== G)
          return {
            reset: {
              placement: G
            }
          };
      }
      return {};
    }
  };
};
async function Oo(e, t) {
  const {
    placement: i,
    platform: s,
    elements: o
  } = e, r = await (s.isRTL == null ? void 0 : s.isRTL(o.floating)), n = lt(i), l = Tt(i), a = yt(i) === "y", c = ["left", "top"].includes(n) ? -1 : 1, h = r && a ? -1 : 1, d = Lt(t, e);
  let {
    mainAxis: m,
    crossAxis: p,
    alignmentAxis: g
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return l && typeof g == "number" && (p = l === "end" ? g * -1 : g), a ? {
    x: p * h,
    y: m * c
  } : {
    x: m * c,
    y: p * h
  };
}
const Po = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var i, s;
      const {
        x: o,
        y: r,
        placement: n,
        middlewareData: l
      } = t, a = await Oo(t, e);
      return n === ((i = l.offset) == null ? void 0 : i.placement) && (s = l.arrow) != null && s.alignmentOffset ? {} : {
        x: o + a.x,
        y: r + a.y,
        data: {
          ...a,
          placement: n
        }
      };
    }
  };
}, zo = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: i,
        y: s,
        placement: o
      } = t, {
        mainAxis: r = !0,
        crossAxis: n = !1,
        limiter: l = {
          fn: (w) => {
            let {
              x: b,
              y: _
            } = w;
            return {
              x: b,
              y: _
            };
          }
        },
        ...a
      } = Lt(e, t), c = {
        x: i,
        y: s
      }, h = await Xe(t, a), d = yt(lt(o)), m = Xi(d);
      let p = c[m], g = c[d];
      if (r) {
        const w = m === "y" ? "top" : "left", b = m === "y" ? "bottom" : "right", _ = p + h[w], x = p - h[b];
        p = Pe(_, p, x);
      }
      if (n) {
        const w = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", _ = g + h[w], x = g - h[b];
        g = Pe(_, g, x);
      }
      const v = l.fn({
        ...t,
        [m]: p,
        [d]: g
      });
      return {
        ...v,
        data: {
          x: v.x - i,
          y: v.y - s,
          enabled: {
            [m]: r,
            [d]: n
          }
        }
      };
    }
  };
}, Lo = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var i, s;
      const {
        placement: o,
        rects: r,
        platform: n,
        elements: l
      } = t, {
        apply: a = () => {
        },
        ...c
      } = Lt(e, t), h = await Xe(t, c), d = lt(o), m = Tt(o), p = yt(o) === "y", {
        width: g,
        height: v
      } = r.floating;
      let w, b;
      d === "top" || d === "bottom" ? (w = d, b = m === (await (n.isRTL == null ? void 0 : n.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (b = d, w = m === "end" ? "top" : "bottom");
      const _ = v - h.top - h.bottom, x = g - h.left - h.right, S = nt(v - h[w], _), C = nt(g - h[b], x), R = !t.middlewareData.shift;
      let E = S, X = C;
      if ((i = t.middlewareData.shift) != null && i.enabled.x && (X = x), (s = t.middlewareData.shift) != null && s.enabled.y && (E = _), R && !m) {
        const D = P(h.left, 0), Q = P(h.right, 0), N = P(h.top, 0), tt = P(h.bottom, 0);
        p ? X = g - 2 * (D !== 0 || Q !== 0 ? D + Q : P(h.left, h.right)) : E = v - 2 * (N !== 0 || tt !== 0 ? N + tt : P(h.top, h.bottom));
      }
      await a({
        ...t,
        availableWidth: X,
        availableHeight: E
      });
      const F = await n.getDimensions(l.floating);
      return g !== F.width || v !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function pe() {
  return typeof window < "u";
}
function Rt(e) {
  return Zi(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function z(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function K(e) {
  var t;
  return (t = (Zi(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Zi(e) {
  return pe() ? e instanceof Node || e instanceof z(e).Node : !1;
}
function M(e) {
  return pe() ? e instanceof Element || e instanceof z(e).Element : !1;
}
function J(e) {
  return pe() ? e instanceof HTMLElement || e instanceof z(e).HTMLElement : !1;
}
function yi(e) {
  return !pe() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof z(e).ShadowRoot;
}
function Kt(e) {
  const {
    overflow: t,
    overflowX: i,
    overflowY: s,
    display: o
  } = B(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + i) && !["inline", "contents"].includes(o);
}
function To(e) {
  return ["table", "td", "th"].includes(Rt(e));
}
function fe(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function me(e) {
  const t = Ge(), i = M(e) ? B(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((s) => i[s] ? i[s] !== "none" : !1) || (i.containerType ? i.containerType !== "normal" : !1) || !t && (i.backdropFilter ? i.backdropFilter !== "none" : !1) || !t && (i.filter ? i.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((s) => (i.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (i.contain || "").includes(s));
}
function Ro(e) {
  let t = at(e);
  for (; J(t) && !Pt(t); ) {
    if (me(t))
      return t;
    if (fe(t))
      return null;
    t = at(t);
  }
  return null;
}
function Ge() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Pt(e) {
  return ["html", "body", "#document"].includes(Rt(e));
}
function B(e) {
  return z(e).getComputedStyle(e);
}
function ge(e) {
  return M(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function at(e) {
  if (Rt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    yi(e) && e.host || // Fallback.
    K(e)
  );
  return yi(t) ? t.host : t;
}
function Qi(e) {
  const t = at(e);
  return Pt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : J(t) && Kt(t) ? t : Qi(t);
}
function Jt(e, t, i) {
  var s;
  t === void 0 && (t = []), i === void 0 && (i = !0);
  const o = Qi(e), r = o === ((s = e.ownerDocument) == null ? void 0 : s.body), n = z(o);
  if (r) {
    const l = Le(n);
    return t.concat(n, n.visualViewport || [], Kt(o) ? o : [], l && i ? Jt(l) : []);
  }
  return t.concat(o, Jt(o, [], i));
}
function Le(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ts(e) {
  const t = B(e);
  let i = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const o = J(e), r = o ? e.offsetWidth : i, n = o ? e.offsetHeight : s, l = le(i) !== r || le(s) !== n;
  return l && (i = r, s = n), {
    width: i,
    height: s,
    $: l
  };
}
function Ze(e) {
  return M(e) ? e : e.contextElement;
}
function kt(e) {
  const t = Ze(e);
  if (!J(t))
    return q(1);
  const i = t.getBoundingClientRect(), {
    width: s,
    height: o,
    $: r
  } = ts(t);
  let n = (r ? le(i.width) : i.width) / s, l = (r ? le(i.height) : i.height) / o;
  return (!n || !Number.isFinite(n)) && (n = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: n,
    y: l
  };
}
const Do = /* @__PURE__ */ q(0);
function es(e) {
  const t = z(e);
  return !Ge() || !t.visualViewport ? Do : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Mo(e, t, i) {
  return t === void 0 && (t = !1), !i || t && i !== z(e) ? !1 : t;
}
function wt(e, t, i, s) {
  t === void 0 && (t = !1), i === void 0 && (i = !1);
  const o = e.getBoundingClientRect(), r = Ze(e);
  let n = q(1);
  t && (s ? M(s) && (n = kt(s)) : n = kt(e));
  const l = Mo(r, i, s) ? es(r) : q(0);
  let a = (o.left + l.x) / n.x, c = (o.top + l.y) / n.y, h = o.width / n.x, d = o.height / n.y;
  if (r) {
    const m = z(r), p = s && M(s) ? z(s) : s;
    let g = m, v = Le(g);
    for (; v && s && p !== g; ) {
      const w = kt(v), b = v.getBoundingClientRect(), _ = B(v), x = b.left + (v.clientLeft + parseFloat(_.paddingLeft)) * w.x, S = b.top + (v.clientTop + parseFloat(_.paddingTop)) * w.y;
      a *= w.x, c *= w.y, h *= w.x, d *= w.y, a += x, c += S, g = z(v), v = Le(g);
    }
  }
  return ce({
    width: h,
    height: d,
    x: a,
    y: c
  });
}
function Qe(e, t) {
  const i = ge(e).scrollLeft;
  return t ? t.left + i : wt(K(e)).left + i;
}
function is(e, t, i) {
  i === void 0 && (i = !1);
  const s = e.getBoundingClientRect(), o = s.left + t.scrollLeft - (i ? 0 : (
    // RTL <body> scrollbar.
    Qe(e, s)
  )), r = s.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function Bo(e) {
  let {
    elements: t,
    rect: i,
    offsetParent: s,
    strategy: o
  } = e;
  const r = o === "fixed", n = K(s), l = t ? fe(t.floating) : !1;
  if (s === n || l && r)
    return i;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = q(1);
  const h = q(0), d = J(s);
  if ((d || !d && !r) && ((Rt(s) !== "body" || Kt(n)) && (a = ge(s)), J(s))) {
    const p = wt(s);
    c = kt(s), h.x = p.x + s.clientLeft, h.y = p.y + s.clientTop;
  }
  const m = n && !d && !r ? is(n, a, !0) : q(0);
  return {
    width: i.width * c.x,
    height: i.height * c.y,
    x: i.x * c.x - a.scrollLeft * c.x + h.x + m.x,
    y: i.y * c.y - a.scrollTop * c.y + h.y + m.y
  };
}
function Vo(e) {
  return Array.from(e.getClientRects());
}
function Io(e) {
  const t = K(e), i = ge(e), s = e.ownerDocument.body, o = P(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth), r = P(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let n = -i.scrollLeft + Qe(e);
  const l = -i.scrollTop;
  return B(s).direction === "rtl" && (n += P(t.clientWidth, s.clientWidth) - o), {
    width: o,
    height: r,
    x: n,
    y: l
  };
}
function Ho(e, t) {
  const i = z(e), s = K(e), o = i.visualViewport;
  let r = s.clientWidth, n = s.clientHeight, l = 0, a = 0;
  if (o) {
    r = o.width, n = o.height;
    const c = Ge();
    (!c || c && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: r,
    height: n,
    x: l,
    y: a
  };
}
function Fo(e, t) {
  const i = wt(e, !0, t === "fixed"), s = i.top + e.clientTop, o = i.left + e.clientLeft, r = J(e) ? kt(e) : q(1), n = e.clientWidth * r.x, l = e.clientHeight * r.y, a = o * r.x, c = s * r.y;
  return {
    width: n,
    height: l,
    x: a,
    y: c
  };
}
function wi(e, t, i) {
  let s;
  if (t === "viewport")
    s = Ho(e, i);
  else if (t === "document")
    s = Io(K(e));
  else if (M(t))
    s = Fo(t, i);
  else {
    const o = es(e);
    s = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ce(s);
}
function ss(e, t) {
  const i = at(e);
  return i === t || !M(i) || Pt(i) ? !1 : B(i).position === "fixed" || ss(i, t);
}
function No(e, t) {
  const i = t.get(e);
  if (i)
    return i;
  let s = Jt(e, [], !1).filter((l) => M(l) && Rt(l) !== "body"), o = null;
  const r = B(e).position === "fixed";
  let n = r ? at(e) : e;
  for (; M(n) && !Pt(n); ) {
    const l = B(n), a = me(n);
    !a && l.position === "fixed" && (o = null), (r ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Kt(n) && !a && ss(e, n)) ? s = s.filter((h) => h !== n) : o = l, n = at(n);
  }
  return t.set(e, s), s;
}
function Uo(e) {
  let {
    element: t,
    boundary: i,
    rootBoundary: s,
    strategy: o
  } = e;
  const n = [...i === "clippingAncestors" ? fe(t) ? [] : No(t, this._c) : [].concat(i), s], l = n[0], a = n.reduce((c, h) => {
    const d = wi(t, h, o);
    return c.top = P(d.top, c.top), c.right = nt(d.right, c.right), c.bottom = nt(d.bottom, c.bottom), c.left = P(d.left, c.left), c;
  }, wi(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function jo(e) {
  const {
    width: t,
    height: i
  } = ts(e);
  return {
    width: t,
    height: i
  };
}
function Wo(e, t, i) {
  const s = J(t), o = K(t), r = i === "fixed", n = wt(e, !0, r, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = q(0);
  if (s || !s && !r)
    if ((Rt(t) !== "body" || Kt(o)) && (l = ge(t)), s) {
      const m = wt(t, !0, r, t);
      a.x = m.x + t.clientLeft, a.y = m.y + t.clientTop;
    } else o && (a.x = Qe(o));
  const c = o && !s && !r ? is(o, l) : q(0), h = n.left + l.scrollLeft - a.x - c.x, d = n.top + l.scrollTop - a.y - c.y;
  return {
    x: h,
    y: d,
    width: n.width,
    height: n.height
  };
}
function $e(e) {
  return B(e).position === "static";
}
function _i(e, t) {
  if (!J(e) || B(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let i = e.offsetParent;
  return K(e) === i && (i = i.ownerDocument.body), i;
}
function os(e, t) {
  const i = z(e);
  if (fe(e))
    return i;
  if (!J(e)) {
    let o = at(e);
    for (; o && !Pt(o); ) {
      if (M(o) && !$e(o))
        return o;
      o = at(o);
    }
    return i;
  }
  let s = _i(e, t);
  for (; s && To(s) && $e(s); )
    s = _i(s, t);
  return s && Pt(s) && $e(s) && !me(s) ? i : s || Ro(e) || i;
}
const qo = async function(e) {
  const t = this.getOffsetParent || os, i = this.getDimensions, s = await i(e.floating);
  return {
    reference: Wo(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function Jo(e) {
  return B(e).direction === "rtl";
}
const ee = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Bo,
  getDocumentElement: K,
  getClippingRect: Uo,
  getOffsetParent: os,
  getElementRects: qo,
  getClientRects: Vo,
  getDimensions: jo,
  getScale: kt,
  isElement: M,
  isRTL: Jo
};
function rs(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Yo(e, t) {
  let i = null, s;
  const o = K(e);
  function r() {
    var l;
    clearTimeout(s), (l = i) == null || l.disconnect(), i = null;
  }
  function n(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), r();
    const c = e.getBoundingClientRect(), {
      left: h,
      top: d,
      width: m,
      height: p
    } = c;
    if (l || t(), !m || !p)
      return;
    const g = Gt(d), v = Gt(o.clientWidth - (h + m)), w = Gt(o.clientHeight - (d + p)), b = Gt(h), x = {
      rootMargin: -g + "px " + -v + "px " + -w + "px " + -b + "px",
      threshold: P(0, nt(1, a)) || 1
    };
    let S = !0;
    function C(R) {
      const E = R[0].intersectionRatio;
      if (E !== a) {
        if (!S)
          return n();
        E ? n(!1, E) : s = setTimeout(() => {
          n(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !rs(c, e.getBoundingClientRect()) && n(), S = !1;
    }
    try {
      i = new IntersectionObserver(C, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      i = new IntersectionObserver(C, x);
    }
    i.observe(e);
  }
  return n(!0), r;
}
function Ko(e, t, i, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: r = !0,
    elementResize: n = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = s, c = Ze(e), h = o || r ? [...c ? Jt(c) : [], ...Jt(t)] : [];
  h.forEach((b) => {
    o && b.addEventListener("scroll", i, {
      passive: !0
    }), r && b.addEventListener("resize", i);
  });
  const d = c && l ? Yo(c, i) : null;
  let m = -1, p = null;
  n && (p = new ResizeObserver((b) => {
    let [_] = b;
    _ && _.target === c && p && (p.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var x;
      (x = p) == null || x.observe(t);
    })), i();
  }), c && !a && p.observe(c), p.observe(t));
  let g, v = a ? wt(e) : null;
  a && w();
  function w() {
    const b = wt(e);
    v && !rs(v, b) && i(), v = b, g = requestAnimationFrame(w);
  }
  return i(), () => {
    var b;
    h.forEach((_) => {
      o && _.removeEventListener("scroll", i), r && _.removeEventListener("resize", i);
    }), d == null || d(), (b = p) == null || b.disconnect(), p = null, a && cancelAnimationFrame(g);
  };
}
const Xo = Po, Go = zo, Zo = ko, xi = Lo, Qo = Eo, tr = (e, t, i) => {
  const s = /* @__PURE__ */ new Map(), o = {
    platform: ee,
    ...i
  }, r = {
    ...o.platform,
    _c: s
  };
  return So(e, t, {
    ...o,
    platform: r
  });
};
function er(e) {
  return ir(e);
}
function Ce(e) {
  return e.assignedSlot ? e.assignedSlot : e.parentNode instanceof ShadowRoot ? e.parentNode.host : e.parentNode;
}
function ir(e) {
  for (let t = e; t; t = Ce(t)) if (t instanceof Element && getComputedStyle(t).display === "none") return null;
  for (let t = Ce(e); t; t = Ce(t)) {
    if (!(t instanceof Element)) continue;
    const i = getComputedStyle(t);
    if (i.display !== "contents" && (i.position !== "static" || me(i) || t.tagName === "BODY"))
      return t;
  }
  return null;
}
function sr(e) {
  return e !== null && typeof e == "object" && "getBoundingClientRect" in e && ("contextElement" in e ? e.contextElement instanceof Element : !0);
}
var $ = class extends Y {
  constructor() {
    super(...arguments), this.localize = new ue(this), this.active = !1, this.placement = "top", this.strategy = "absolute", this.distance = 0, this.skidding = 0, this.arrow = !1, this.arrowPlacement = "anchor", this.arrowPadding = 10, this.flip = !1, this.flipFallbackPlacements = "", this.flipFallbackStrategy = "best-fit", this.flipPadding = 0, this.shift = !1, this.shiftPadding = 0, this.autoSizePadding = 0, this.hoverBridge = !1, this.updateHoverBridge = () => {
      if (this.hoverBridge && this.anchorEl) {
        const e = this.anchorEl.getBoundingClientRect(), t = this.popup.getBoundingClientRect(), i = this.placement.includes("top") || this.placement.includes("bottom");
        let s = 0, o = 0, r = 0, n = 0, l = 0, a = 0, c = 0, h = 0;
        i ? e.top < t.top ? (s = e.left, o = e.bottom, r = e.right, n = e.bottom, l = t.left, a = t.top, c = t.right, h = t.top) : (s = t.left, o = t.bottom, r = t.right, n = t.bottom, l = e.left, a = e.top, c = e.right, h = e.top) : e.left < t.left ? (s = e.right, o = e.top, r = t.left, n = t.top, l = e.right, a = e.bottom, c = t.left, h = t.bottom) : (s = t.right, o = t.top, r = e.left, n = e.top, l = t.right, a = t.bottom, c = e.left, h = e.bottom), this.style.setProperty("--hover-bridge-top-left-x", `${s}px`), this.style.setProperty("--hover-bridge-top-left-y", `${o}px`), this.style.setProperty("--hover-bridge-top-right-x", `${r}px`), this.style.setProperty("--hover-bridge-top-right-y", `${n}px`), this.style.setProperty("--hover-bridge-bottom-left-x", `${l}px`), this.style.setProperty("--hover-bridge-bottom-left-y", `${a}px`), this.style.setProperty("--hover-bridge-bottom-right-x", `${c}px`), this.style.setProperty("--hover-bridge-bottom-right-y", `${h}px`);
      }
    };
  }
  async connectedCallback() {
    super.connectedCallback(), await this.updateComplete, this.start();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.stop();
  }
  async updated(e) {
    super.updated(e), e.has("active") && (this.active ? this.start() : this.stop()), e.has("anchor") && this.handleAnchorChange(), this.active && (await this.updateComplete, this.reposition());
  }
  async handleAnchorChange() {
    if (await this.stop(), this.anchor && typeof this.anchor == "string") {
      const e = this.getRootNode();
      this.anchorEl = e.getElementById(this.anchor);
    } else this.anchor instanceof Element || sr(this.anchor) ? this.anchorEl = this.anchor : this.anchorEl = this.querySelector('[slot="anchor"]');
    this.anchorEl instanceof HTMLSlotElement && (this.anchorEl = this.anchorEl.assignedElements({ flatten: !0 })[0]), this.anchorEl && this.active && this.start();
  }
  start() {
    !this.anchorEl || !this.active || (this.cleanup = Ko(this.anchorEl, this.popup, () => {
      this.reposition();
    }));
  }
  async stop() {
    return new Promise((e) => {
      this.cleanup ? (this.cleanup(), this.cleanup = void 0, this.removeAttribute("data-current-placement"), this.style.removeProperty("--auto-size-available-width"), this.style.removeProperty("--auto-size-available-height"), requestAnimationFrame(() => e())) : e();
    });
  }
  /** Forces the popup to recalculate and reposition itself. */
  reposition() {
    if (!this.active || !this.anchorEl)
      return;
    const e = [
      // The offset middleware goes first
      Xo({ mainAxis: this.distance, crossAxis: this.skidding })
    ];
    this.sync ? e.push(
      xi({
        apply: ({ rects: i }) => {
          const s = this.sync === "width" || this.sync === "both", o = this.sync === "height" || this.sync === "both";
          this.popup.style.width = s ? `${i.reference.width}px` : "", this.popup.style.height = o ? `${i.reference.height}px` : "";
        }
      })
    ) : (this.popup.style.width = "", this.popup.style.height = ""), this.flip && e.push(
      Zo({
        boundary: this.flipBoundary,
        // @ts-expect-error - We're converting a string attribute to an array here
        fallbackPlacements: this.flipFallbackPlacements,
        fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
        padding: this.flipPadding
      })
    ), this.shift && e.push(
      Go({
        boundary: this.shiftBoundary,
        padding: this.shiftPadding
      })
    ), this.autoSize ? e.push(
      xi({
        boundary: this.autoSizeBoundary,
        padding: this.autoSizePadding,
        apply: ({ availableWidth: i, availableHeight: s }) => {
          this.autoSize === "vertical" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-height", `${s}px`) : this.style.removeProperty("--auto-size-available-height"), this.autoSize === "horizontal" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-width", `${i}px`) : this.style.removeProperty("--auto-size-available-width");
        }
      })
    ) : (this.style.removeProperty("--auto-size-available-width"), this.style.removeProperty("--auto-size-available-height")), this.arrow && e.push(
      Qo({
        element: this.arrowEl,
        padding: this.arrowPadding
      })
    );
    const t = this.strategy === "absolute" ? (i) => ee.getOffsetParent(i, er) : ee.getOffsetParent;
    tr(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware: e,
      strategy: this.strategy,
      platform: de(xt({}, ee), {
        getOffsetParent: t
      })
    }).then(({ x: i, y: s, middlewareData: o, placement: r }) => {
      const n = this.localize.dir() === "rtl", l = { top: "bottom", right: "left", bottom: "top", left: "right" }[r.split("-")[0]];
      if (this.setAttribute("data-current-placement", r), Object.assign(this.popup.style, {
        left: `${i}px`,
        top: `${s}px`
      }), this.arrow) {
        const a = o.arrow.x, c = o.arrow.y;
        let h = "", d = "", m = "", p = "";
        if (this.arrowPlacement === "start") {
          const g = typeof a == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          h = typeof c == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "", d = n ? g : "", p = n ? "" : g;
        } else if (this.arrowPlacement === "end") {
          const g = typeof a == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          d = n ? "" : g, p = n ? g : "", m = typeof c == "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
        } else this.arrowPlacement === "center" ? (p = typeof a == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "", h = typeof c == "number" ? "calc(50% - var(--arrow-size-diagonal))" : "") : (p = typeof a == "number" ? `${a}px` : "", h = typeof c == "number" ? `${c}px` : "");
        Object.assign(this.arrowEl.style, {
          top: h,
          right: d,
          bottom: m,
          left: p,
          [l]: "calc(var(--arrow-size-diagonal) * -1)"
        });
      }
    }), requestAnimationFrame(() => this.updateHoverBridge()), this.emit("sl-reposition");
  }
  render() {
    return O`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${bt({
      "popup-hover-bridge": !0,
      "popup-hover-bridge--visible": this.hoverBridge && this.active
    })}
      ></span>

      <div
        part="popup"
        class=${bt({
      popup: !0,
      "popup--active": this.active,
      "popup--fixed": this.strategy === "fixed",
      "popup--has-arrow": this.arrow
    })}
      >
        <slot></slot>
        ${this.arrow ? O`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
  }
};
$.styles = [zt, bo];
u([
  Z(".popup")
], $.prototype, "popup", 2);
u([
  Z(".popup__arrow")
], $.prototype, "arrowEl", 2);
u([
  f()
], $.prototype, "anchor", 2);
u([
  f({ type: Boolean, reflect: !0 })
], $.prototype, "active", 2);
u([
  f({ reflect: !0 })
], $.prototype, "placement", 2);
u([
  f({ reflect: !0 })
], $.prototype, "strategy", 2);
u([
  f({ type: Number })
], $.prototype, "distance", 2);
u([
  f({ type: Number })
], $.prototype, "skidding", 2);
u([
  f({ type: Boolean })
], $.prototype, "arrow", 2);
u([
  f({ attribute: "arrow-placement" })
], $.prototype, "arrowPlacement", 2);
u([
  f({ attribute: "arrow-padding", type: Number })
], $.prototype, "arrowPadding", 2);
u([
  f({ type: Boolean })
], $.prototype, "flip", 2);
u([
  f({
    attribute: "flip-fallback-placements",
    converter: {
      fromAttribute: (e) => e.split(" ").map((t) => t.trim()).filter((t) => t !== ""),
      toAttribute: (e) => e.join(" ")
    }
  })
], $.prototype, "flipFallbackPlacements", 2);
u([
  f({ attribute: "flip-fallback-strategy" })
], $.prototype, "flipFallbackStrategy", 2);
u([
  f({ type: Object })
], $.prototype, "flipBoundary", 2);
u([
  f({ attribute: "flip-padding", type: Number })
], $.prototype, "flipPadding", 2);
u([
  f({ type: Boolean })
], $.prototype, "shift", 2);
u([
  f({ type: Object })
], $.prototype, "shiftBoundary", 2);
u([
  f({ attribute: "shift-padding", type: Number })
], $.prototype, "shiftPadding", 2);
u([
  f({ attribute: "auto-size" })
], $.prototype, "autoSize", 2);
u([
  f()
], $.prototype, "sync", 2);
u([
  f({ type: Object })
], $.prototype, "autoSizeBoundary", 2);
u([
  f({ attribute: "auto-size-padding", type: Number })
], $.prototype, "autoSizePadding", 2);
u([
  f({ attribute: "hover-bridge", type: Boolean })
], $.prototype, "hoverBridge", 2);
var Bt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ new WeakSet(), Zt = /* @__PURE__ */ new WeakMap(), or = class {
  constructor(e, t) {
    this.handleFormData = (i) => {
      const s = this.options.disabled(this.host), o = this.options.name(this.host), r = this.options.value(this.host), n = this.host.tagName.toLowerCase() === "sl-button";
      this.host.isConnected && !s && !n && typeof o == "string" && o.length > 0 && typeof r < "u" && (Array.isArray(r) ? r.forEach((l) => {
        i.formData.append(o, l.toString());
      }) : i.formData.append(o, r.toString()));
    }, this.handleFormSubmit = (i) => {
      var s;
      const o = this.options.disabled(this.host), r = this.options.reportValidity;
      this.form && !this.form.noValidate && ((s = Bt.get(this.form)) == null || s.forEach((n) => {
        this.setUserInteracted(n, !0);
      })), this.form && !this.form.noValidate && !o && !r(this.host) && (i.preventDefault(), i.stopImmediatePropagation());
    }, this.handleFormReset = () => {
      this.options.setValue(this.host, this.options.defaultValue(this.host)), this.setUserInteracted(this.host, !1), Zt.set(this.host, []);
    }, this.handleInteraction = (i) => {
      const s = Zt.get(this.host);
      s.includes(i.type) || s.push(i.type), s.length === this.options.assumeInteractionOn.length && this.setUserInteracted(this.host, !0);
    }, this.checkFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const i = this.form.querySelectorAll("*");
        for (const s of i)
          if (typeof s.checkValidity == "function" && !s.checkValidity())
            return !1;
      }
      return !0;
    }, this.reportFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const i = this.form.querySelectorAll("*");
        for (const s of i)
          if (typeof s.reportValidity == "function" && !s.reportValidity())
            return !1;
      }
      return !0;
    }, (this.host = e).addController(this), this.options = xt({
      form: (i) => {
        const s = i.form;
        if (s) {
          const r = i.getRootNode().querySelector(`#${s}`);
          if (r)
            return r;
        }
        return i.closest("form");
      },
      name: (i) => i.name,
      value: (i) => i.value,
      defaultValue: (i) => i.defaultValue,
      disabled: (i) => {
        var s;
        return (s = i.disabled) != null ? s : !1;
      },
      reportValidity: (i) => typeof i.reportValidity == "function" ? i.reportValidity() : !0,
      checkValidity: (i) => typeof i.checkValidity == "function" ? i.checkValidity() : !0,
      setValue: (i, s) => i.value = s,
      assumeInteractionOn: ["sl-input"]
    }, t);
  }
  hostConnected() {
    const e = this.options.form(this.host);
    e && this.attachForm(e), Zt.set(this.host, []), this.options.assumeInteractionOn.forEach((t) => {
      this.host.addEventListener(t, this.handleInteraction);
    });
  }
  hostDisconnected() {
    this.detachForm(), Zt.delete(this.host), this.options.assumeInteractionOn.forEach((e) => {
      this.host.removeEventListener(e, this.handleInteraction);
    });
  }
  hostUpdated() {
    const e = this.options.form(this.host);
    e || this.detachForm(), e && this.form !== e && (this.detachForm(), this.attachForm(e)), this.host.hasUpdated && this.setValidity(this.host.validity.valid);
  }
  attachForm(e) {
    e ? (this.form = e, Bt.has(this.form) ? Bt.get(this.form).add(this.host) : Bt.set(this.form, /* @__PURE__ */ new Set([this.host])), this.form.addEventListener("formdata", this.handleFormData), this.form.addEventListener("submit", this.handleFormSubmit), this.form.addEventListener("reset", this.handleFormReset), Vt.has(this.form) || (Vt.set(this.form, this.form.reportValidity), this.form.reportValidity = () => this.reportFormValidity()), It.has(this.form) || (It.set(this.form, this.form.checkValidity), this.form.checkValidity = () => this.checkFormValidity())) : this.form = void 0;
  }
  detachForm() {
    if (!this.form) return;
    const e = Bt.get(this.form);
    e && (e.delete(this.host), e.size <= 0 && (this.form.removeEventListener("formdata", this.handleFormData), this.form.removeEventListener("submit", this.handleFormSubmit), this.form.removeEventListener("reset", this.handleFormReset), Vt.has(this.form) && (this.form.reportValidity = Vt.get(this.form), Vt.delete(this.form)), It.has(this.form) && (this.form.checkValidity = It.get(this.form), It.delete(this.form)), this.form = void 0));
  }
  setUserInteracted(e, t) {
    t ? Ae.add(e) : Ae.delete(e), e.requestUpdate();
  }
  doAction(e, t) {
    if (this.form) {
      const i = document.createElement("button");
      i.type = e, i.style.position = "absolute", i.style.width = "0", i.style.height = "0", i.style.clipPath = "inset(50%)", i.style.overflow = "hidden", i.style.whiteSpace = "nowrap", t && (i.name = t.name, i.value = t.value, ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((s) => {
        t.hasAttribute(s) && i.setAttribute(s, t.getAttribute(s));
      })), this.form.append(i), i.click(), i.remove();
    }
  }
  /** Returns the associated `<form>` element, if one exists. */
  getForm() {
    var e;
    return (e = this.form) != null ? e : null;
  }
  /** Resets the form, restoring all the control to their default value */
  reset(e) {
    this.doAction("reset", e);
  }
  /** Submits the form, triggering validation and form data injection. */
  submit(e) {
    this.doAction("submit", e);
  }
  /**
   * Synchronously sets the form control's validity. Call this when you know the future validity but need to update
   * the host element immediately, i.e. before Lit updates the component in the next update.
   */
  setValidity(e) {
    const t = this.host, i = !!Ae.has(t), s = !!t.required;
    t.toggleAttribute("data-required", s), t.toggleAttribute("data-optional", !s), t.toggleAttribute("data-invalid", !e), t.toggleAttribute("data-valid", e), t.toggleAttribute("data-user-invalid", !e && i), t.toggleAttribute("data-user-valid", e && i);
  }
  /**
   * Updates the form control's validity based on the current value of `host.validity.valid`. Call this when anything
   * that affects constraint validation changes so the component receives the correct validity states.
   */
  updateValidity() {
    const e = this.host;
    this.setValidity(e.validity.valid);
  }
  /**
   * Dispatches a non-bubbling, cancelable custom event of type `sl-invalid`.
   * If the `sl-invalid` event will be cancelled then the original `invalid`
   * event (which may have been passed as argument) will also be cancelled.
   * If no original `invalid` event has been passed then the `sl-invalid`
   * event will be cancelled before being dispatched.
   */
  emitInvalidEvent(e) {
    const t = new CustomEvent("sl-invalid", {
      bubbles: !1,
      composed: !1,
      cancelable: !0,
      detail: {}
    });
    e || t.preventDefault(), this.host.dispatchEvent(t) || e == null || e.preventDefault();
  }
}, ns = Object.freeze({
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valid: !0,
  valueMissing: !1
});
Object.freeze(de(xt({}, ns), {
  valid: !1,
  valueMissing: !0
}));
Object.freeze(de(xt({}, ns), {
  valid: !1,
  customError: !0
}));
var ls = /* @__PURE__ */ new Map(), rr = /* @__PURE__ */ new WeakMap();
function nr(e) {
  return e ?? { keyframes: [], options: { duration: 0 } };
}
function $i(e, t) {
  return t.toLowerCase() === "rtl" ? {
    keyframes: e.rtlKeyframes || e.keyframes,
    options: e.options
  } : e;
}
function as(e, t) {
  ls.set(e, nr(t));
}
function Ci(e, t, i) {
  const s = rr.get(e);
  if (s != null && s[t])
    return $i(s[t], i.dir);
  const o = ls.get(t);
  return o ? $i(o, i.dir) : {
    keyframes: [],
    options: { duration: 0 }
  };
}
function Ai(e, t) {
  return new Promise((i) => {
    function s(o) {
      o.target === e && (e.removeEventListener(t, s), i());
    }
    e.addEventListener(t, s);
  });
}
function Si(e, t, i) {
  return new Promise((s) => {
    if ((i == null ? void 0 : i.duration) === 1 / 0)
      throw new Error("Promise-based animations must be finite.");
    const o = e.animate(t, de(xt({}, i), {
      duration: lr() ? 0 : i.duration
    }));
    o.addEventListener("cancel", s, { once: !0 }), o.addEventListener("finish", s, { once: !0 });
  });
}
function lr() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Ei(e) {
  return Promise.all(
    e.getAnimations().map((t) => new Promise((i) => {
      t.cancel(), requestAnimationFrame(i);
    }))
  );
}
var ar = class {
  constructor(e, ...t) {
    this.slotNames = [], this.handleSlotChange = (i) => {
      const s = i.target;
      (this.slotNames.includes("[default]") && !s.name || s.name && this.slotNames.includes(s.name)) && this.host.requestUpdate();
    }, (this.host = e).addController(this), this.slotNames = t;
  }
  hasDefaultSlot() {
    return [...this.host.childNodes].some((e) => {
      if (e.nodeType === e.TEXT_NODE && e.textContent.trim() !== "")
        return !0;
      if (e.nodeType === e.ELEMENT_NODE) {
        const t = e;
        if (t.tagName.toLowerCase() === "sl-visually-hidden")
          return !1;
        if (!t.hasAttribute("slot"))
          return !0;
      }
      return !1;
    });
  }
  hasNamedSlot(e) {
    return this.host.querySelector(`:scope > [slot="${e}"]`) !== null;
  }
  test(e) {
    return e === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(e);
  }
  hostConnected() {
    this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Te extends ji {
  constructor(t) {
    if (super(t), this.it = A, t.type !== Ni.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === A || t == null) return this._t = void 0, this.it = t;
    if (t === rt) return t;
    if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.it) return this._t;
    this.it = t;
    const i = [t];
    return i.raw = i, this._t = { _$litType$: this.constructor.resultType, strings: i, values: [] };
  }
}
Te.directiveName = "unsafeHTML", Te.resultType = 1;
const cr = Ui(Te);
var y = class extends Y {
  constructor() {
    super(...arguments), this.formControlController = new or(this, {
      assumeInteractionOn: ["sl-blur", "sl-input"]
    }), this.hasSlotController = new ar(this, "help-text", "label"), this.localize = new ue(this), this.typeToSelectString = "", this.hasFocus = !1, this.displayLabel = "", this.selectedOptions = [], this.valueHasChanged = !1, this.name = "", this._value = "", this.defaultValue = "", this.size = "medium", this.placeholder = "", this.multiple = !1, this.maxOptionsVisible = 3, this.disabled = !1, this.clearable = !1, this.open = !1, this.hoist = !1, this.filled = !1, this.pill = !1, this.label = "", this.placement = "bottom", this.helpText = "", this.form = "", this.required = !1, this.getTag = (e) => O`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${(t) => this.handleTagRemove(t, e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `, this.handleDocumentFocusIn = (e) => {
      const t = e.composedPath();
      this && !t.includes(this) && this.hide();
    }, this.handleDocumentKeyDown = (e) => {
      const t = e.target, i = t.closest(".select__clear") !== null, s = t.closest("sl-icon-button") !== null;
      if (!(i || s)) {
        if (e.key === "Escape" && this.open && !this.closeWatcher && (e.preventDefault(), e.stopPropagation(), this.hide(), this.displayInput.focus({ preventScroll: !0 })), e.key === "Enter" || e.key === " " && this.typeToSelectString === "") {
          if (e.preventDefault(), e.stopImmediatePropagation(), !this.open) {
            this.show();
            return;
          }
          this.currentOption && !this.currentOption.disabled && (this.valueHasChanged = !0, this.multiple ? this.toggleOptionSelection(this.currentOption) : this.setSelectedOptions(this.currentOption), this.updateComplete.then(() => {
            this.emit("sl-input"), this.emit("sl-change");
          }), this.multiple || (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
          return;
        }
        if (["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
          const o = this.getAllOptions(), r = o.indexOf(this.currentOption);
          let n = Math.max(0, r);
          if (e.preventDefault(), !this.open && (this.show(), this.currentOption))
            return;
          e.key === "ArrowDown" ? (n = r + 1, n > o.length - 1 && (n = 0)) : e.key === "ArrowUp" ? (n = r - 1, n < 0 && (n = o.length - 1)) : e.key === "Home" ? n = 0 : e.key === "End" && (n = o.length - 1), this.setCurrentOption(o[n]);
        }
        if (e.key && e.key.length === 1 || e.key === "Backspace") {
          const o = this.getAllOptions();
          if (e.metaKey || e.ctrlKey || e.altKey)
            return;
          if (!this.open) {
            if (e.key === "Backspace")
              return;
            this.show();
          }
          e.stopPropagation(), e.preventDefault(), clearTimeout(this.typeToSelectTimeout), this.typeToSelectTimeout = window.setTimeout(() => this.typeToSelectString = "", 1e3), e.key === "Backspace" ? this.typeToSelectString = this.typeToSelectString.slice(0, -1) : this.typeToSelectString += e.key.toLowerCase();
          for (const r of o)
            if (r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)) {
              this.setCurrentOption(r);
              break;
            }
        }
      }
    }, this.handleDocumentMouseDown = (e) => {
      const t = e.composedPath();
      this && !t.includes(this) && this.hide();
    };
  }
  get value() {
    return this._value;
  }
  set value(e) {
    this.multiple ? e = Array.isArray(e) ? e : e.split(" ") : e = Array.isArray(e) ? e.join(" ") : e, this._value !== e && (this.valueHasChanged = !0, this._value = e);
  }
  /** Gets the validity state object */
  get validity() {
    return this.valueInput.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback(), setTimeout(() => {
      this.handleDefaultSlotChange();
    }), this.open = !1;
  }
  addOpenListeners() {
    var e;
    document.addEventListener("focusin", this.handleDocumentFocusIn), document.addEventListener("keydown", this.handleDocumentKeyDown), document.addEventListener("mousedown", this.handleDocumentMouseDown), this.getRootNode() !== document && this.getRootNode().addEventListener("focusin", this.handleDocumentFocusIn), "CloseWatcher" in window && ((e = this.closeWatcher) == null || e.destroy(), this.closeWatcher = new CloseWatcher(), this.closeWatcher.onclose = () => {
      this.open && (this.hide(), this.displayInput.focus({ preventScroll: !0 }));
    });
  }
  removeOpenListeners() {
    var e;
    document.removeEventListener("focusin", this.handleDocumentFocusIn), document.removeEventListener("keydown", this.handleDocumentKeyDown), document.removeEventListener("mousedown", this.handleDocumentMouseDown), this.getRootNode() !== document && this.getRootNode().removeEventListener("focusin", this.handleDocumentFocusIn), (e = this.closeWatcher) == null || e.destroy();
  }
  handleFocus() {
    this.hasFocus = !0, this.displayInput.setSelectionRange(0, 0), this.emit("sl-focus");
  }
  handleBlur() {
    this.hasFocus = !1, this.emit("sl-blur");
  }
  handleLabelClick() {
    this.displayInput.focus();
  }
  handleComboboxMouseDown(e) {
    const i = e.composedPath().some((s) => s instanceof Element && s.tagName.toLowerCase() === "sl-icon-button");
    this.disabled || i || (e.preventDefault(), this.displayInput.focus({ preventScroll: !0 }), this.open = !this.open);
  }
  handleComboboxKeyDown(e) {
    e.key !== "Tab" && (e.stopPropagation(), this.handleDocumentKeyDown(e));
  }
  handleClearClick(e) {
    e.stopPropagation(), this.valueHasChanged = !0, this.value !== "" && (this.setSelectedOptions([]), this.displayInput.focus({ preventScroll: !0 }), this.updateComplete.then(() => {
      this.emit("sl-clear"), this.emit("sl-input"), this.emit("sl-change");
    }));
  }
  handleClearMouseDown(e) {
    e.stopPropagation(), e.preventDefault();
  }
  handleOptionClick(e) {
    const i = e.target.closest("sl-option"), s = this.value;
    i && !i.disabled && (this.valueHasChanged = !0, this.multiple ? this.toggleOptionSelection(i) : this.setSelectedOptions(i), this.updateComplete.then(() => this.displayInput.focus({ preventScroll: !0 })), this.value !== s && this.updateComplete.then(() => {
      this.emit("sl-input"), this.emit("sl-change");
    }), this.multiple || (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
  }
  /* @internal - used by options to update labels */
  handleDefaultSlotChange() {
    customElements.get("sl-option") || customElements.whenDefined("sl-option").then(() => this.handleDefaultSlotChange());
    const e = this.getAllOptions(), t = this.valueHasChanged ? this.value : this.defaultValue, i = Array.isArray(t) ? t : [t], s = [];
    e.forEach((o) => s.push(o.value)), this.setSelectedOptions(e.filter((o) => i.includes(o.value)));
  }
  handleTagRemove(e, t) {
    e.stopPropagation(), this.valueHasChanged = !0, this.disabled || (this.toggleOptionSelection(t, !1), this.updateComplete.then(() => {
      this.emit("sl-input"), this.emit("sl-change");
    }));
  }
  // Gets an array of all <sl-option> elements
  getAllOptions() {
    return [...this.querySelectorAll("sl-option")];
  }
  // Gets the first <sl-option> element
  getFirstOption() {
    return this.querySelector("sl-option");
  }
  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  setCurrentOption(e) {
    this.getAllOptions().forEach((i) => {
      i.current = !1, i.tabIndex = -1;
    }), e && (this.currentOption = e, e.current = !0, e.tabIndex = 0, e.focus());
  }
  // Sets the selected option(s)
  setSelectedOptions(e) {
    const t = this.getAllOptions(), i = Array.isArray(e) ? e : [e];
    t.forEach((s) => s.selected = !1), i.length && i.forEach((s) => s.selected = !0), this.selectionChanged();
  }
  // Toggles an option's selected state
  toggleOptionSelection(e, t) {
    t === !0 || t === !1 ? e.selected = t : e.selected = !e.selected, this.selectionChanged();
  }
  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  selectionChanged() {
    var e, t, i;
    const s = this.getAllOptions();
    this.selectedOptions = s.filter((r) => r.selected);
    const o = this.valueHasChanged;
    if (this.multiple)
      this.value = this.selectedOptions.map((r) => r.value), this.placeholder && this.value.length === 0 ? this.displayLabel = "" : this.displayLabel = this.localize.term("numOptionsSelected", this.selectedOptions.length);
    else {
      const r = this.selectedOptions[0];
      this.value = (e = r == null ? void 0 : r.value) != null ? e : "", this.displayLabel = (i = (t = r == null ? void 0 : r.getTextLabel) == null ? void 0 : t.call(r)) != null ? i : "";
    }
    this.valueHasChanged = o, this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  get tags() {
    return this.selectedOptions.map((e, t) => {
      if (t < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const i = this.getTag(e, t);
        return O`<div @sl-remove=${(s) => this.handleTagRemove(s, e)}>
          ${typeof i == "string" ? cr(i) : i}
        </div>`;
      } else if (t === this.maxOptionsVisible)
        return O`<sl-tag size=${this.size}>+${this.selectedOptions.length - t}</sl-tag>`;
      return O``;
    });
  }
  handleInvalid(e) {
    this.formControlController.setValidity(!1), this.formControlController.emitInvalidEvent(e);
  }
  handleDisabledChange() {
    this.disabled && (this.open = !1, this.handleOpenChange());
  }
  attributeChangedCallback(e, t, i) {
    if (super.attributeChangedCallback(e, t, i), e === "value") {
      const s = this.valueHasChanged;
      this.value = this.defaultValue, this.valueHasChanged = s;
    }
  }
  handleValueChange() {
    if (!this.valueHasChanged) {
      const i = this.valueHasChanged;
      this.value = this.defaultValue, this.valueHasChanged = i;
    }
    const e = this.getAllOptions(), t = Array.isArray(this.value) ? this.value : [this.value];
    this.setSelectedOptions(e.filter((i) => t.includes(i.value)));
  }
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption()), this.emit("sl-show"), this.addOpenListeners(), await Ei(this), this.listbox.hidden = !1, this.popup.active = !0, requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });
      const { keyframes: e, options: t } = Ci(this, "select.show", { dir: this.localize.dir() });
      await Si(this.popup.popup, e, t), this.currentOption && go(this.currentOption, this.listbox, "vertical", "auto"), this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"), this.removeOpenListeners(), await Ei(this);
      const { keyframes: e, options: t } = Ci(this, "select.hide", { dir: this.localize.dir() });
      await Si(this.popup.popup, e, t), this.listbox.hidden = !0, this.popup.active = !1, this.emit("sl-after-hide");
    }
  }
  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled) {
      this.open = !1;
      return;
    }
    return this.open = !0, Ai(this, "sl-after-show");
  }
  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = !1;
      return;
    }
    return this.open = !1, Ai(this, "sl-after-hide");
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(e) {
    this.valueInput.setCustomValidity(e), this.formControlController.updateValidity();
  }
  /** Sets focus on the control. */
  focus(e) {
    this.displayInput.focus(e);
  }
  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }
  render() {
    const e = this.hasSlotController.test("label"), t = this.hasSlotController.test("help-text"), i = this.label ? !0 : !!e, s = this.helpText ? !0 : !!t, o = this.clearable && !this.disabled && this.value.length > 0, r = this.placeholder && this.value && this.value.length <= 0;
    return O`
      <div
        part="form-control"
        class=${bt({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": i,
      "form-control--has-help-text": s
    })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${bt({
      select: !0,
      "select--standard": !0,
      "select--filled": this.filled,
      "select--pill": this.pill,
      "select--open": this.open,
      "select--disabled": this.disabled,
      "select--multiple": this.multiple,
      "select--focused": this.hasFocus,
      "select--placeholder-visible": r,
      "select--top": this.placement === "top",
      "select--bottom": this.placement === "bottom",
      "select--small": this.size === "small",
      "select--medium": this.size === "medium",
      "select--large": this.size === "large"
    })}
            placement=${this.placement}
            strategy=${this.hoist ? "fixed" : "absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? "true" : "false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple ? O`<div part="tags" class="select__tags">${this.tags}</div>` : ""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o ? O`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  ` : ""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              aria-multiselectable=${this.multiple ? "true" : "false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
y.styles = [zt, vo, fo];
y.dependencies = {
  "sl-icon": H,
  "sl-popup": $,
  "sl-tag": $t
};
u([
  Z(".select")
], y.prototype, "popup", 2);
u([
  Z(".select__combobox")
], y.prototype, "combobox", 2);
u([
  Z(".select__display-input")
], y.prototype, "displayInput", 2);
u([
  Z(".select__value-input")
], y.prototype, "valueInput", 2);
u([
  Z(".select__listbox")
], y.prototype, "listbox", 2);
u([
  I()
], y.prototype, "hasFocus", 2);
u([
  I()
], y.prototype, "displayLabel", 2);
u([
  I()
], y.prototype, "currentOption", 2);
u([
  I()
], y.prototype, "selectedOptions", 2);
u([
  I()
], y.prototype, "valueHasChanged", 2);
u([
  f()
], y.prototype, "name", 2);
u([
  I()
], y.prototype, "value", 1);
u([
  f({ attribute: "value" })
], y.prototype, "defaultValue", 2);
u([
  f({ reflect: !0 })
], y.prototype, "size", 2);
u([
  f()
], y.prototype, "placeholder", 2);
u([
  f({ type: Boolean, reflect: !0 })
], y.prototype, "multiple", 2);
u([
  f({ attribute: "max-options-visible", type: Number })
], y.prototype, "maxOptionsVisible", 2);
u([
  f({ type: Boolean, reflect: !0 })
], y.prototype, "disabled", 2);
u([
  f({ type: Boolean })
], y.prototype, "clearable", 2);
u([
  f({ type: Boolean, reflect: !0 })
], y.prototype, "open", 2);
u([
  f({ type: Boolean })
], y.prototype, "hoist", 2);
u([
  f({ type: Boolean, reflect: !0 })
], y.prototype, "filled", 2);
u([
  f({ type: Boolean, reflect: !0 })
], y.prototype, "pill", 2);
u([
  f()
], y.prototype, "label", 2);
u([
  f({ reflect: !0 })
], y.prototype, "placement", 2);
u([
  f({ attribute: "help-text" })
], y.prototype, "helpText", 2);
u([
  f({ reflect: !0 })
], y.prototype, "form", 2);
u([
  f({ type: Boolean, reflect: !0 })
], y.prototype, "required", 2);
u([
  f()
], y.prototype, "getTag", 2);
u([
  ht("disabled", { waitUntilFirstUpdate: !0 })
], y.prototype, "handleDisabledChange", 1);
u([
  ht(["defaultValue", "value"], { waitUntilFirstUpdate: !0 })
], y.prototype, "handleValueChange", 1);
u([
  ht("open", { waitUntilFirstUpdate: !0 })
], y.prototype, "handleOpenChange", 1);
as("select.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
as("select.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});
y.define("sl-select");
var hr = ct`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`, T = class extends Y {
  constructor() {
    super(...arguments), this.localize = new ue(this), this.isInitialized = !1, this.current = !1, this.selected = !1, this.hasHover = !1, this.value = "", this.disabled = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "option"), this.setAttribute("aria-selected", "false");
  }
  handleDefaultSlotChange() {
    this.isInitialized ? customElements.whenDefined("sl-select").then(() => {
      const e = this.closest("sl-select");
      e && e.handleDefaultSlotChange();
    }) : this.isInitialized = !0;
  }
  handleMouseEnter() {
    this.hasHover = !0;
  }
  handleMouseLeave() {
    this.hasHover = !1;
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleValueChange() {
    typeof this.value != "string" && (this.value = String(this.value)), this.value.includes(" ") && (console.error("Option values cannot include a space. All spaces have been replaced with underscores.", this), this.value = this.value.replace(/ /g, "_"));
  }
  /** Returns a plain text label based on the option's content. */
  getTextLabel() {
    const e = this.childNodes;
    let t = "";
    return [...e].forEach((i) => {
      i.nodeType === Node.ELEMENT_NODE && (i.hasAttribute("slot") || (t += i.textContent)), i.nodeType === Node.TEXT_NODE && (t += i.textContent);
    }), t.trim();
  }
  render() {
    return O`
      <div
        part="base"
        class=${bt({
      option: !0,
      "option--current": this.current,
      "option--disabled": this.disabled,
      "option--selected": this.selected,
      "option--hover": this.hasHover
    })}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `;
  }
};
T.styles = [zt, hr];
T.dependencies = { "sl-icon": H };
u([
  Z(".option__label")
], T.prototype, "defaultSlot", 2);
u([
  I()
], T.prototype, "current", 2);
u([
  I()
], T.prototype, "selected", 2);
u([
  I()
], T.prototype, "hasHover", 2);
u([
  f({ reflect: !0 })
], T.prototype, "value", 2);
u([
  f({ type: Boolean, reflect: !0 })
], T.prototype, "disabled", 2);
u([
  ht("disabled")
], T.prototype, "handleDisabledChange", 1);
u([
  ht("selected")
], T.prototype, "handleSelectedChange", 1);
u([
  ht("value")
], T.prototype, "handleValueChange", 1);
T.define("sl-option");
var dr = Object.defineProperty, ur = Object.getOwnPropertyDescriptor, cs = (e, t, i, s) => {
  for (var o = s > 1 ? void 0 : s ? ur(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (o = (s ? n(t, i, o) : n(o)) || o);
  return s && o && dr(t, i, o), o;
};
let Re = class extends He {
  constructor() {
    super(...arguments), this.options = [];
  }
  handleFilterChange(e) {
    const t = e.target, i = Array.from(t.selectedOptions).map((s) => s.value);
    this.dispatchEvent(new CustomEvent("values-changed", {
      detail: { selectedValues: i },
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    return Et`
            <sl-select placeholder="Category..." clearable multiple max-options-visible="2" @sl-change=${this.handleFilterChange}>
                ${Li(
      this.options,
      (e) => Et`<sl-option value=${e}>${e}</sl-option>`
    )}
            </sl-select>
        `;
  }
};
cs([
  zi({ type: Array })
], Re.prototype, "options", 2);
Re = cs([
  Ie("select-multiple")
], Re);
var pr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, hs = (e) => {
  throw TypeError(e);
}, dt = (e, t, i, s) => {
  for (var o = s > 1 ? void 0 : s ? fr(t, i) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (o = (s ? n(t, i, o) : n(o)) || o);
  return s && o && pr(t, i, o), o;
}, mr = (e, t, i) => t.has(e) || hs("Cannot " + i), W = (e, t, i) => (mr(e, t, "read from private field"), i ? i.call(e) : t.get(e)), pt = (e, t, i) => t.has(e) ? hs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), ie, De, Me, Be, se, Ve, oe;
const ki = "umbraco-fun-style";
if (!document.getElementById(ki)) {
  const e = document.createElement("link");
  e.id = ki, e.rel = "stylesheet", e.href = "/App_Plugins/UmbracoFun/style.css", document.head.appendChild(e);
}
let V = class extends fs(He) {
  constructor() {
    super(...arguments), this._jokes = [], this._jokeTypes = [], this._filteredJokes = [], pt(this, ie, async () => {
      const { data: e, error: t } = await ti.getJokes();
      return t && console.error(t), e !== void 0 && (this._jokes = this._jokes.concat(e), W(this, oe).call(this)), { data: e, error: t };
    }), pt(this, De, async () => {
      const { data: e, error: t } = await ti.getJokeTypes();
      t && console.error(t), e !== void 0 && (this._jokeTypes = e);
    }), pt(this, Me, async (e) => {
      const t = e.target;
      t.state = "waiting";
      const { data: i, error: s } = await W(this, ie).call(this);
      if (s) {
        t.state = "failed";
        return;
      }
      i !== void 0 && (t.state = void 0);
    }), this._sortActive = !1, this._sortDescending = !1, this._selectedTypes = [], pt(this, Be, () => {
      this._sorter && (this._sorter.active ? this._sorter.active && this._sorter.descending ? (this._sorter.active = !1, this._sorter.descending = !1) : (this._sorter.descending = !this._sorter.descending, this._filteredJokes = W(this, se).call(this, this._filteredJokes, "type", this._sorter.descending)) : (this._sorter.active = !0, this._filteredJokes = W(this, se).call(this, this._filteredJokes, "type", this._sorter.descending)));
    }), pt(this, se, (e, t, i) => [...e].sort((s, o) => {
      const r = String(s[t]).toLowerCase(), n = String(o[t]).toLowerCase(), l = r.localeCompare(n);
      return i ? -l : l;
    })), pt(this, Ve, (e) => {
      this._selectedTypes = e.detail.selectedValues, W(this, oe).call(this);
    }), pt(this, oe, () => {
      this._selectedTypes.length ? this._filteredJokes = this._jokes.filter((e) => this._selectedTypes.includes(e.type)) : this._filteredJokes = this._jokes;
    });
  }
  async firstUpdated() {
    W(this, ie).call(this), W(this, De).call(this);
  }
  render() {
    return Et`
            ${this._jokes.length ? Et`
                    <uui-box headline="Filters">
                        <select-multiple .options=${this._jokeTypes} @values-changed=${W(this, Ve)}></select-multiple>
                    </uui-box>

                    <uui-box headline="Jokes" class="wide">
                        <uui-table aria-label="Table With Jokes" aria-describedby="table-description" >
                            <uui-table-column style="font-style: italic;"></uui-table-column>
                            <uui-table-column style="width: 45%;"></uui-table-column>
                            <uui-table-column style="width: 45%;"></uui-table-column>
                            <uui-table-head>
                                <uui-table-head-cell id="joke-type-header" @click=${W(this, Be)}>
                                    Type
                                    <uui-symbol-sort 
                                        .active=${this._sortActive}
                                        .descending=${this._sortDescending}
                                    ></uui-symbol-sort>
                                </uui-table-head-cell>
                                <uui-table-head-cell>Setup</uui-table-head-cell>
                                <uui-table-head-cell>Punchline</uui-table-head-cell>
                            </uui-table-head>
                            ${Li(
      this._filteredJokes,
      (e) => e.id,
      (e) => Et`
                                    <uui-table-row>
                                        <uui-table-cell><i>${e.type}</i></uui-table-cell>
                                        <uui-table-cell>${e.setup}</uui-table-cell>
                                        <uui-table-cell>
                                            <disclaimer-box text=${e.punchline}></disclaimer-box>
                                        </uui-table-cell>
                                    </uui-table-row>`
    )}
                        </uui-table>

                        <div style="text-align: center;">
                            <uui-button color="default" look="primary" @click="${W(this, Me)}">
                                Load more...
                            </uui-button>
                        </div>
                    </uui-box>
                ` : us}
        `;
  }
};
ie = /* @__PURE__ */ new WeakMap();
De = /* @__PURE__ */ new WeakMap();
Me = /* @__PURE__ */ new WeakMap();
Be = /* @__PURE__ */ new WeakMap();
se = /* @__PURE__ */ new WeakMap();
Ve = /* @__PURE__ */ new WeakMap();
oe = /* @__PURE__ */ new WeakMap();
V.styles = [
  Pi`
            :host {
                display: grid;
                gap: var(--uui-size-layout-1);
                padding: var(--uui-size-layout-1);
                grid-template-columns: 1fr 1fr 1fr;
            }

            h2 {
                margin-top:0;
            }

            .wide {
                grid-column: span 3;
            }

            /* Disclaimer styles */
            .disclaimer {
                filter: blur(4px);
                cursor: pointer;
                transition: filter 0.3s ease;
                user-select: none;
                background-color: rgba(255, 255, 255, 0.8);
                padding: 1rem;
                border-radius: 0.5rem;
                color: #444;
            }

            .disclaimer.revealed {
                filter: none;
                cursor: default;
                user-select: text;
            }

            /* Styles for table header with sort button */
            #joke-type-header {
                cursor: pointer;
            }

            #joke-type-header:hover {
                --uui-symbol-sort-hover: 1;
                /* We want to provide the hover indication on the sorting arrow for the full interactive element. */
            }
        `
];
dt([
  _t()
], V.prototype, "_jokes", 2);
dt([
  _t()
], V.prototype, "_jokeTypes", 2);
dt([
  _t()
], V.prototype, "_filteredJokes", 2);
dt([
  _t()
], V.prototype, "_sortActive", 2);
dt([
  _t()
], V.prototype, "_sortDescending", 2);
dt([
  _t()
], V.prototype, "_selectedTypes", 2);
dt([
  ps("uui-symbol-sort")
], V.prototype, "_sorter", 2);
V = dt([
  Ie("jokes-dashboard")
], V);
const Cr = V;
export {
  V as JokesDashboardElement,
  Cr as default
};
//# sourceMappingURL=dashboard.element.jokes-BHPpm_fb.js.map
