import { css as Be, property as ks, state as wt, customElement as Ve, LitElement as He, html as Et, repeat as Os, nothing as ai, query as ci } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as hi } from "@umbraco-cms/backoffice/element-api";
import { J as Qe } from "./services-9x1E8wzK.js";
var di = Object.defineProperty, ui = Object.getOwnPropertyDescriptor, Ie = (e, t, s, i) => {
  for (var o = i > 1 ? void 0 : i ? ui(t, s) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (o = (i ? n(t, s, o) : n(o)) || o);
  return i && o && di(t, s, o), o;
};
let Ut = class extends He {
  constructor() {
    super(...arguments), this.text = "This content may contain spoilers or sensitive material. Click to reveal.", this.revealed = !1;
  }
  reveal() {
    this.revealed = !0;
  }
  render() {
    return Et`
            <div
                class="disclaimer ${this.revealed ? "revealed" : ""}"
                @click=${this.reveal}
            >
                ${this.text}
            </div>
        `;
  }
};
Ut.styles = Be`
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
    `;
Ie([
  ks()
], Ut.prototype, "text", 2);
Ie([
  wt()
], Ut.prototype, "revealed", 2);
Ut = Ie([
  Ve("disclaimer-box")
], Ut);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qt = globalThis, Ne = Qt.ShadowRoot && (Qt.ShadyCSS === void 0 || Qt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Fe = Symbol(), ts = /* @__PURE__ */ new WeakMap();
let Ps = class {
  constructor(t, s, i) {
    if (this._$cssResult$ = !0, i !== Fe) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = s;
  }
  get styleSheet() {
    let t = this.o;
    const s = this.t;
    if (Ne && t === void 0) {
      const i = s !== void 0 && s.length === 1;
      i && (t = ts.get(s)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && ts.set(s, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const pi = (e) => new Ps(typeof e == "string" ? e : e + "", void 0, Fe), ct = (e, ...t) => {
  const s = e.length === 1 ? e[0] : t.reduce((i, o, r) => i + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + e[r + 1], e[0]);
  return new Ps(s, e, Fe);
}, fi = (e, t) => {
  if (Ne) e.adoptedStyleSheets = t.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
  else for (const s of t) {
    const i = document.createElement("style"), o = Qt.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = s.cssText, e.appendChild(i);
  }
}, es = Ne ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((t) => {
  let s = "";
  for (const i of t.cssRules) s += i.cssText;
  return pi(s);
})(e) : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: mi, defineProperty: gi, getOwnPropertyDescriptor: vi, getOwnPropertyNames: bi, getOwnPropertySymbols: yi, getPrototypeOf: wi } = Object, ot = globalThis, ss = ot.trustedTypes, _i = ss ? ss.emptyScript : "", be = ot.reactiveElementPolyfillSupport, It = (e, t) => e, re = { toAttribute(e, t) {
  switch (t) {
    case Boolean:
      e = e ? _i : null;
      break;
    case Object:
    case Array:
      e = e == null ? e : JSON.stringify(e);
  }
  return e;
}, fromAttribute(e, t) {
  let s = e;
  switch (t) {
    case Boolean:
      s = e !== null;
      break;
    case Number:
      s = e === null ? null : Number(e);
      break;
    case Object:
    case Array:
      try {
        s = JSON.parse(e);
      } catch {
        s = null;
      }
  }
  return s;
} }, Ue = (e, t) => !mi(e, t), is = { attribute: !0, type: String, converter: re, reflect: !1, useDefault: !1, hasChanged: Ue };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), ot.litPropertyMetadata ?? (ot.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let At = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, s = is) {
    if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
      const i = Symbol(), o = this.getPropertyDescriptor(t, i, s);
      o !== void 0 && gi(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, s, i) {
    const { get: o, set: r } = vi(this.prototype, t) ?? { get() {
      return this[s];
    }, set(n) {
      this[s] = n;
    } };
    return { get: o, set(n) {
      const l = o == null ? void 0 : o.call(this);
      r == null || r.call(this, n), this.requestUpdate(t, l, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? is;
  }
  static _$Ei() {
    if (this.hasOwnProperty(It("elementProperties"))) return;
    const t = wi(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(It("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(It("properties"))) {
      const s = this.properties, i = [...bi(s), ...yi(s)];
      for (const o of i) this.createProperty(o, s[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const s = litPropertyMetadata.get(t);
      if (s !== void 0) for (const [i, o] of s) this.elementProperties.set(i, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [s, i] of this.elementProperties) {
      const o = this._$Eu(s, i);
      o !== void 0 && this._$Eh.set(o, s);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const s = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const o of i) s.unshift(es(o));
    } else t !== void 0 && s.push(es(t));
    return s;
  }
  static _$Eu(t, s) {
    const i = s.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((s) => this.enableUpdating = s), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((s) => s(this));
  }
  addController(t) {
    var s;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((s = t.hostConnected) == null || s.call(t));
  }
  removeController(t) {
    var s;
    (s = this._$EO) == null || s.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), s = this.constructor.elementProperties;
    for (const i of s.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return fi(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((s) => {
      var i;
      return (i = s.hostConnected) == null ? void 0 : i.call(s);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((s) => {
      var i;
      return (i = s.hostDisconnected) == null ? void 0 : i.call(s);
    });
  }
  attributeChangedCallback(t, s, i) {
    this._$AK(t, i);
  }
  _$ET(t, s) {
    var r;
    const i = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, i);
    if (o !== void 0 && i.reflect === !0) {
      const n = (((r = i.converter) == null ? void 0 : r.toAttribute) !== void 0 ? i.converter : re).toAttribute(s, i.type);
      this._$Em = t, n == null ? this.removeAttribute(o) : this.setAttribute(o, n), this._$Em = null;
    }
  }
  _$AK(t, s) {
    var r, n;
    const i = this.constructor, o = i._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const l = i.getPropertyOptions(o), a = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((r = l.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? l.converter : re;
      this._$Em = o, this[o] = a.fromAttribute(s, l.type) ?? ((n = this._$Ej) == null ? void 0 : n.get(o)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(t, s, i) {
    var o;
    if (t !== void 0) {
      const r = this.constructor, n = this[t];
      if (i ?? (i = r.getPropertyOptions(t)), !((i.hasChanged ?? Ue)(n, s) || i.useDefault && i.reflect && n === ((o = this._$Ej) == null ? void 0 : o.get(t)) && !this.hasAttribute(r._$Eu(t, i)))) return;
      this.C(t, s, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, s, { useDefault: i, reflect: o, wrapped: r }, n) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, n ?? s ?? this[t]), r !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), o === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (s) {
      Promise.reject(s);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var i;
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
    const s = this._$AL;
    try {
      t = this.shouldUpdate(s), t ? (this.willUpdate(s), (i = this._$EO) == null || i.forEach((o) => {
        var r;
        return (r = o.hostUpdate) == null ? void 0 : r.call(o);
      }), this.update(s)) : this._$EM();
    } catch (o) {
      throw t = !1, this._$EM(), o;
    }
    t && this._$AE(s);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var s;
    (s = this._$EO) == null || s.forEach((i) => {
      var o;
      return (o = i.hostUpdated) == null ? void 0 : o.call(i);
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
    this._$Eq && (this._$Eq = this._$Eq.forEach((s) => this._$ET(s, this[s]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
At.elementStyles = [], At.shadowRootOptions = { mode: "open" }, At[It("elementProperties")] = /* @__PURE__ */ new Map(), At[It("finalized")] = /* @__PURE__ */ new Map(), be == null || be({ ReactiveElement: At }), (ot.reactiveElementVersions ?? (ot.reactiveElementVersions = [])).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Nt = globalThis, ne = Nt.trustedTypes, os = ne ? ne.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, zs = "$lit$", it = `lit$${Math.random().toFixed(9).slice(2)}$`, Ts = "?" + it, xi = `<${Ts}>`, gt = document, jt = () => gt.createComment(""), Wt = (e) => e === null || typeof e != "object" && typeof e != "function", je = Array.isArray, $i = (e) => je(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function", ye = `[ 	
\f\r]`, Dt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, rs = /-->/g, ns = />/g, ut = RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ls = /'/g, as = /"/g, Ls = /^(?:script|style|textarea|title)$/i, Ci = (e) => (t, ...s) => ({ _$litType$: e, strings: t, values: s }), O = Ci(1), rt = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), cs = /* @__PURE__ */ new WeakMap(), ft = gt.createTreeWalker(gt, 129);
function Rs(e, t) {
  if (!je(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return os !== void 0 ? os.createHTML(t) : t;
}
const Ai = (e, t) => {
  const s = e.length - 1, i = [];
  let o, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = Dt;
  for (let l = 0; l < s; l++) {
    const a = e[l];
    let c, h, d = -1, m = 0;
    for (; m < a.length && (n.lastIndex = m, h = n.exec(a), h !== null); ) m = n.lastIndex, n === Dt ? h[1] === "!--" ? n = rs : h[1] !== void 0 ? n = ns : h[2] !== void 0 ? (Ls.test(h[2]) && (o = RegExp("</" + h[2], "g")), n = ut) : h[3] !== void 0 && (n = ut) : n === ut ? h[0] === ">" ? (n = o ?? Dt, d = -1) : h[1] === void 0 ? d = -2 : (d = n.lastIndex - h[2].length, c = h[1], n = h[3] === void 0 ? ut : h[3] === '"' ? as : ls) : n === as || n === ls ? n = ut : n === rs || n === ns ? n = Dt : (n = ut, o = void 0);
    const p = n === ut && e[l + 1].startsWith("/>") ? " " : "";
    r += n === Dt ? a + xi : d >= 0 ? (i.push(c), a.slice(0, d) + zs + a.slice(d) + it + p) : a + it + (d === -2 ? l : p);
  }
  return [Rs(e, r + (e[s] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class qt {
  constructor({ strings: t, _$litType$: s }, i) {
    let o;
    this.parts = [];
    let r = 0, n = 0;
    const l = t.length - 1, a = this.parts, [c, h] = Ai(t, s);
    if (this.el = qt.createElement(c, i), ft.currentNode = this.el.content, s === 2 || s === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (o = ft.nextNode()) !== null && a.length < l; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const d of o.getAttributeNames()) if (d.endsWith(zs)) {
          const m = h[n++], p = o.getAttribute(d).split(it), g = /([.?@])?(.*)/.exec(m);
          a.push({ type: 1, index: r, name: g[2], strings: p, ctor: g[1] === "." ? Ei : g[1] === "?" ? ki : g[1] === "@" ? Oi : de }), o.removeAttribute(d);
        } else d.startsWith(it) && (a.push({ type: 6, index: r }), o.removeAttribute(d));
        if (Ls.test(o.tagName)) {
          const d = o.textContent.split(it), m = d.length - 1;
          if (m > 0) {
            o.textContent = ne ? ne.emptyScript : "";
            for (let p = 0; p < m; p++) o.append(d[p], jt()), ft.nextNode(), a.push({ type: 2, index: ++r });
            o.append(d[m], jt());
          }
        }
      } else if (o.nodeType === 8) if (o.data === Ts) a.push({ type: 2, index: r });
      else {
        let d = -1;
        for (; (d = o.data.indexOf(it, d + 1)) !== -1; ) a.push({ type: 7, index: r }), d += it.length - 1;
      }
      r++;
    }
  }
  static createElement(t, s) {
    const i = gt.createElement("template");
    return i.innerHTML = t, i;
  }
}
function Ot(e, t, s = e, i) {
  var n, l;
  if (t === rt) return t;
  let o = i !== void 0 ? (n = s._$Co) == null ? void 0 : n[i] : s._$Cl;
  const r = Wt(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== r && ((l = o == null ? void 0 : o._$AO) == null || l.call(o, !1), r === void 0 ? o = void 0 : (o = new r(e), o._$AT(e, s, i)), i !== void 0 ? (s._$Co ?? (s._$Co = []))[i] = o : s._$Cl = o), o !== void 0 && (t = Ot(e, o._$AS(e, t.values), o, i)), t;
}
class Si {
  constructor(t, s) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = s;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: s }, parts: i } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? gt).importNode(s, !0);
    ft.currentNode = o;
    let r = ft.nextNode(), n = 0, l = 0, a = i[0];
    for (; a !== void 0; ) {
      if (n === a.index) {
        let c;
        a.type === 2 ? c = new Yt(r, r.nextSibling, this, t) : a.type === 1 ? c = new a.ctor(r, a.name, a.strings, this, t) : a.type === 6 && (c = new Pi(r, this, t)), this._$AV.push(c), a = i[++l];
      }
      n !== (a == null ? void 0 : a.index) && (r = ft.nextNode(), n++);
    }
    return ft.currentNode = gt, o;
  }
  p(t) {
    let s = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, s), s += i.strings.length - 2) : i._$AI(t[s])), s++;
  }
}
class Yt {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, s, i, o) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = s, this._$AM = i, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const s = this._$AM;
    return s !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = s.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, s = this) {
    t = Ot(this, t, s), Wt(t) ? t === A || t == null || t === "" ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== rt && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : $i(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== A && Wt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(gt.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var r;
    const { values: s, _$litType$: i } = t, o = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = qt.createElement(Rs(i.h, i.h[0]), this.options)), i);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === o) this._$AH.p(s);
    else {
      const n = new Si(o, this), l = n.u(this.options);
      n.p(s), this.T(l), this._$AH = n;
    }
  }
  _$AC(t) {
    let s = cs.get(t.strings);
    return s === void 0 && cs.set(t.strings, s = new qt(t)), s;
  }
  k(t) {
    je(this._$AH) || (this._$AH = [], this._$AR());
    const s = this._$AH;
    let i, o = 0;
    for (const r of t) o === s.length ? s.push(i = new Yt(this.O(jt()), this.O(jt()), this, this.options)) : i = s[o], i._$AI(r), o++;
    o < s.length && (this._$AR(i && i._$AB.nextSibling, o), s.length = o);
  }
  _$AR(t = this._$AA.nextSibling, s) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, s); t && t !== this._$AB; ) {
      const o = t.nextSibling;
      t.remove(), t = o;
    }
  }
  setConnected(t) {
    var s;
    this._$AM === void 0 && (this._$Cv = t, (s = this._$AP) == null || s.call(this, t));
  }
}
class de {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, s, i, o, r) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = s, this._$AM = o, this.options = r, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = A;
  }
  _$AI(t, s = this, i, o) {
    const r = this.strings;
    let n = !1;
    if (r === void 0) t = Ot(this, t, s, 0), n = !Wt(t) || t !== this._$AH && t !== rt, n && (this._$AH = t);
    else {
      const l = t;
      let a, c;
      for (t = r[0], a = 0; a < r.length - 1; a++) c = Ot(this, l[i + a], s, a), c === rt && (c = this._$AH[a]), n || (n = !Wt(c) || c !== this._$AH[a]), c === A ? t = A : t !== A && (t += (c ?? "") + r[a + 1]), this._$AH[a] = c;
    }
    n && !o && this.j(t);
  }
  j(t) {
    t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ei extends de {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === A ? void 0 : t;
  }
}
class ki extends de {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== A);
  }
}
class Oi extends de {
  constructor(t, s, i, o, r) {
    super(t, s, i, o, r), this.type = 5;
  }
  _$AI(t, s = this) {
    if ((t = Ot(this, t, s, 0) ?? A) === rt) return;
    const i = this._$AH, o = t === A && i !== A || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, r = t !== A && (i === A || o);
    o && this.element.removeEventListener(this.name, this, i), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var s;
    typeof this._$AH == "function" ? this._$AH.call(((s = this.options) == null ? void 0 : s.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Pi {
  constructor(t, s, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = s, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Ot(this, t);
  }
}
const we = Nt.litHtmlPolyfillSupport;
we == null || we(qt, Yt), (Nt.litHtmlVersions ?? (Nt.litHtmlVersions = [])).push("3.3.0");
const zi = (e, t, s) => {
  const i = (s == null ? void 0 : s.renderBefore) ?? t;
  let o = i._$litPart$;
  if (o === void 0) {
    const r = (s == null ? void 0 : s.renderBefore) ?? null;
    i._$litPart$ = o = new Yt(t.insertBefore(jt(), r), r, void 0, s ?? {});
  }
  return o._$AI(e), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const mt = globalThis;
let Ft = class extends At {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var s;
    const t = super.createRenderRoot();
    return (s = this.renderOptions).renderBefore ?? (s.renderBefore = t.firstChild), t;
  }
  update(t) {
    const s = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = zi(s, this.renderRoot, this.renderOptions);
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
var Es;
Ft._$litElement$ = !0, Ft.finalized = !0, (Es = mt.litElementHydrateSupport) == null || Es.call(mt, { LitElement: Ft });
const _e = mt.litElementPolyfillSupport;
_e == null || _e({ LitElement: Ft });
(mt.litElementVersions ?? (mt.litElementVersions = [])).push("4.2.0");
var Ti = ct`
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
`, Li = ct`
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
function hs(e) {
  Ee = e;
}
function Ri(e = "") {
  if (!Ee) {
    const t = [...document.getElementsByTagName("script")], s = t.find((i) => i.hasAttribute("data-shoelace"));
    if (s)
      hs(s.getAttribute("data-shoelace"));
    else {
      const i = t.find((r) => /shoelace(\.min)?\.js($|\?)/.test(r.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));
      let o = "";
      i && (o = i.getAttribute("src")), hs(o.split("/").slice(0, -1).join("/"));
    }
  }
  return Ee.replace(/\/$/, "") + (e ? `/${e.replace(/^\//, "")}` : "");
}
var Di = {
  name: "default",
  resolver: (e) => Ri(`assets/icons/${e}.svg`)
}, Mi = Di, ds = {
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
}, Bi = {
  name: "system",
  resolver: (e) => e in ds ? `data:image/svg+xml,${encodeURIComponent(ds[e])}` : ""
}, Vi = Bi, Hi = [Mi, Vi], ke = [];
function Ii(e) {
  ke.push(e);
}
function Ni(e) {
  ke = ke.filter((t) => t !== e);
}
function us(e) {
  return Hi.find((t) => t.name === e);
}
var Fi = ct`
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
`, Ds = Object.defineProperty, Ui = Object.defineProperties, ji = Object.getOwnPropertyDescriptor, Wi = Object.getOwnPropertyDescriptors, ps = Object.getOwnPropertySymbols, qi = Object.prototype.hasOwnProperty, Ji = Object.prototype.propertyIsEnumerable, Ms = (e) => {
  throw TypeError(e);
}, fs = (e, t, s) => t in e ? Ds(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, _t = (e, t) => {
  for (var s in t || (t = {}))
    qi.call(t, s) && fs(e, s, t[s]);
  if (ps)
    for (var s of ps(t))
      Ji.call(t, s) && fs(e, s, t[s]);
  return e;
}, ue = (e, t) => Ui(e, Wi(t)), u = (e, t, s, i) => {
  for (var o = i > 1 ? void 0 : i ? ji(t, s) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (o = (i ? n(t, s, o) : n(o)) || o);
  return i && o && Ds(t, s, o), o;
}, Bs = (e, t, s) => t.has(e) || Ms("Cannot " + s), Yi = (e, t, s) => (Bs(e, t, "read from private field"), t.get(e)), Ki = (e, t, s) => t.has(e) ? Ms("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), Xi = (e, t, s, i) => (Bs(e, t, "write to private field"), t.set(e, s), s);
function ht(e, t) {
  const s = _t({
    waitUntilFirstUpdate: !1
  }, t);
  return (i, o) => {
    const { update: r } = i, n = Array.isArray(e) ? e : [e];
    i.update = function(l) {
      n.forEach((a) => {
        const c = a;
        if (l.has(c)) {
          const h = l.get(c), d = this[c];
          h !== d && (!s.waitUntilFirstUpdate || this.hasUpdated) && this[o](h, d);
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
const Zi = { attribute: !0, type: String, converter: re, reflect: !1, hasChanged: Ue }, Gi = (e = Zi, t, s) => {
  const { kind: i, metadata: o } = s;
  let r = globalThis.litPropertyMetadata.get(o);
  if (r === void 0 && globalThis.litPropertyMetadata.set(o, r = /* @__PURE__ */ new Map()), i === "setter" && ((e = Object.create(e)).wrapped = !0), r.set(s.name, e), i === "accessor") {
    const { name: n } = s;
    return { set(l) {
      const a = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(n, a, e);
    }, init(l) {
      return l !== void 0 && this.C(n, void 0, e, l), l;
    } };
  }
  if (i === "setter") {
    const { name: n } = s;
    return function(l) {
      const a = this[n];
      t.call(this, l), this.requestUpdate(n, a, e);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function f(e) {
  return (t, s) => typeof s == "object" ? Gi(e, t, s) : ((i, o, r) => {
    const n = o.hasOwnProperty(r);
    return o.constructor.createProperty(r, i), n ? Object.getOwnPropertyDescriptor(o, r) : void 0;
  })(e, t, s);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function H(e) {
  return f({ ...e, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qi = (e, t, s) => (s.configurable = !0, s.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, s), s);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function G(e, t) {
  return (s, i, o) => {
    const r = (n) => {
      var l;
      return ((l = n.renderRoot) == null ? void 0 : l.querySelector(e)) ?? null;
    };
    return Qi(s, i, { get() {
      return r(this);
    } });
  };
}
var te, J = class extends Ft {
  constructor() {
    super(), Ki(this, te, !1), this.initialReflectedProperties = /* @__PURE__ */ new Map(), Object.entries(this.constructor.dependencies).forEach(([e, t]) => {
      this.constructor.define(e, t);
    });
  }
  emit(e, t) {
    const s = new CustomEvent(e, _t({
      bubbles: !0,
      cancelable: !1,
      composed: !0,
      detail: {}
    }, t));
    return this.dispatchEvent(s), s;
  }
  /* eslint-enable */
  static define(e, t = this, s = {}) {
    const i = customElements.get(e);
    if (!i) {
      try {
        customElements.define(e, t, s);
      } catch {
        customElements.define(e, class extends t {
        }, s);
      }
      return;
    }
    let o = " (unknown version)", r = o;
    "version" in t && t.version && (o = " v" + t.version), "version" in i && i.version && (r = " v" + i.version), !(o && r && o === r) && console.warn(
      `Attempted to register <${e}>${o}, but <${e}>${r} has already been registered.`
    );
  }
  attributeChangedCallback(e, t, s) {
    Yi(this, te) || (this.constructor.elementProperties.forEach(
      (i, o) => {
        i.reflect && this[o] != null && this.initialReflectedProperties.set(o, this[o]);
      }
    ), Xi(this, te, !0)), super.attributeChangedCallback(e, t, s);
  }
  willUpdate(e) {
    super.willUpdate(e), this.initialReflectedProperties.forEach((t, s) => {
      e.has(s) && this[s] == null && (this[s] = t);
    });
  }
};
te = /* @__PURE__ */ new WeakMap();
J.version = "2.20.1";
J.dependencies = {};
u([
  f()
], J.prototype, "dir", 2);
u([
  f()
], J.prototype, "lang", 2);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const to = (e, t) => (e == null ? void 0 : e._$litType$) !== void 0;
var Mt = Symbol(), Xt = Symbol(), xe, $e = /* @__PURE__ */ new Map(), I = class extends J {
  constructor() {
    super(...arguments), this.initialRender = !1, this.svg = null, this.label = "", this.library = "default";
  }
  /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
  async resolveIcon(e, t) {
    var s;
    let i;
    if (t != null && t.spriteSheet)
      return this.svg = O`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`, this.svg;
    try {
      if (i = await fetch(e, { mode: "cors" }), !i.ok) return i.status === 410 ? Mt : Xt;
    } catch {
      return Xt;
    }
    try {
      const o = document.createElement("div");
      o.innerHTML = await i.text();
      const r = o.firstElementChild;
      if (((s = r == null ? void 0 : r.tagName) == null ? void 0 : s.toLowerCase()) !== "svg") return Mt;
      xe || (xe = new DOMParser());
      const l = xe.parseFromString(r.outerHTML, "text/html").body.querySelector("svg");
      return l ? (l.part.add("svg"), document.adoptNode(l)) : Mt;
    } catch {
      return Mt;
    }
  }
  connectedCallback() {
    super.connectedCallback(), Ii(this);
  }
  firstUpdated() {
    this.initialRender = !0, this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), Ni(this);
  }
  getIconSource() {
    const e = us(this.library);
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
    const { url: t, fromLibrary: s } = this.getIconSource(), i = s ? us(this.library) : void 0;
    if (!t) {
      this.svg = null;
      return;
    }
    let o = $e.get(t);
    if (o || (o = this.resolveIcon(t, i), $e.set(t, o)), !this.initialRender)
      return;
    const r = await o;
    if (r === Xt && $e.delete(t), t === this.getIconSource().url) {
      if (to(r)) {
        if (this.svg = r, i) {
          await this.updateComplete;
          const n = this.shadowRoot.querySelector("[part='svg']");
          typeof i.mutator == "function" && n && i.mutator(n);
        }
        return;
      }
      switch (r) {
        case Xt:
        case Mt:
          this.svg = null, this.emit("sl-error");
          break;
        default:
          this.svg = r.cloneNode(!0), (e = i == null ? void 0 : i.mutator) == null || e.call(i, this.svg), this.emit("sl-load");
      }
    }
  }
  render() {
    return this.svg;
  }
};
I.styles = [zt, Fi];
u([
  H()
], I.prototype, "svg", 2);
u([
  f({ reflect: !0 })
], I.prototype, "name", 2);
u([
  f()
], I.prototype, "src", 2);
u([
  f()
], I.prototype, "label", 2);
u([
  f({ reflect: !0 })
], I.prototype, "library", 2);
u([
  ht("label")
], I.prototype, "handleLabelChange", 1);
u([
  ht(["name", "src", "library"])
], I.prototype, "setIcon", 1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Vs = { ATTRIBUTE: 1, CHILD: 2 }, Hs = (e) => (...t) => ({ _$litDirective$: e, values: t });
let Is = class {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, s, i) {
    this._$Ct = t, this._$AM = s, this._$Ci = i;
  }
  _$AS(t, s) {
    return this.update(t, s);
  }
  update(t, s) {
    return this.render(...s);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const vt = Hs(class extends Is {
  constructor(e) {
    var t;
    if (super(e), e.type !== Vs.ATTRIBUTE || e.name !== "class" || ((t = e.strings) == null ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(e) {
    return " " + Object.keys(e).filter((t) => e[t]).join(" ") + " ";
  }
  update(e, [t]) {
    var i, o;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), e.strings !== void 0 && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((r) => r !== "")));
      for (const r in t) t[r] && !((i = this.nt) != null && i.has(r)) && this.st.add(r);
      return this.render(t);
    }
    const s = e.element.classList;
    for (const r of this.st) r in t || (s.remove(r), this.st.delete(r));
    for (const r in t) {
      const n = !!t[r];
      n === this.st.has(r) || (o = this.nt) != null && o.has(r) || (n ? (s.add(r), this.st.add(r)) : (s.remove(r), this.st.delete(r)));
    }
    return rt;
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ns = Symbol.for(""), eo = (e) => {
  if ((e == null ? void 0 : e.r) === Ns) return e == null ? void 0 : e._$litStatic$;
}, ms = (e, ...t) => ({ _$litStatic$: t.reduce((s, i, o) => s + ((r) => {
  if (r._$litStatic$ !== void 0) return r._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(i) + e[o + 1], e[0]), r: Ns }), gs = /* @__PURE__ */ new Map(), so = (e) => (t, ...s) => {
  const i = s.length;
  let o, r;
  const n = [], l = [];
  let a, c = 0, h = !1;
  for (; c < i; ) {
    for (a = t[c]; c < i && (r = s[c], (o = eo(r)) !== void 0); ) a += o + t[++c], h = !0;
    c !== i && l.push(r), n.push(a), c++;
  }
  if (c === i && n.push(t[i]), h) {
    const d = n.join("$$lit$$");
    (t = gs.get(d)) === void 0 && (n.raw = n, gs.set(d, t = n)), s = l;
  }
  return e(t, ...s);
}, io = so(O);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = (e) => e ?? A;
var T = class extends J {
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
    const e = !!this.href, t = e ? ms`a` : ms`button`;
    return io`
      <${t}
        part="base"
        class=${vt({
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
T.styles = [zt, Li];
T.dependencies = { "sl-icon": I };
u([
  G(".icon-button")
], T.prototype, "button", 2);
u([
  H()
], T.prototype, "hasFocus", 2);
u([
  f()
], T.prototype, "name", 2);
u([
  f()
], T.prototype, "library", 2);
u([
  f()
], T.prototype, "src", 2);
u([
  f()
], T.prototype, "href", 2);
u([
  f()
], T.prototype, "target", 2);
u([
  f()
], T.prototype, "download", 2);
u([
  f()
], T.prototype, "label", 2);
u([
  f({ type: Boolean, reflect: !0 })
], T.prototype, "disabled", 2);
const Oe = /* @__PURE__ */ new Set(), St = /* @__PURE__ */ new Map();
let pt, We = "ltr", qe = "en";
const Fs = typeof MutationObserver < "u" && typeof document < "u" && typeof document.documentElement < "u";
if (Fs) {
  const e = new MutationObserver(js);
  We = document.documentElement.dir || "ltr", qe = document.documentElement.lang || navigator.language, e.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["dir", "lang"]
  });
}
function Us(...e) {
  e.map((t) => {
    const s = t.$code.toLowerCase();
    St.has(s) ? St.set(s, Object.assign(Object.assign({}, St.get(s)), t)) : St.set(s, t), pt || (pt = t);
  }), js();
}
function js() {
  Fs && (We = document.documentElement.dir || "ltr", qe = document.documentElement.lang || navigator.language), [...Oe.keys()].map((e) => {
    typeof e.requestUpdate == "function" && e.requestUpdate();
  });
}
let oo = class {
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
    return `${this.host.dir || We}`.toLowerCase();
  }
  lang() {
    return `${this.host.lang || qe}`.toLowerCase();
  }
  getTranslationData(t) {
    var s, i;
    const o = new Intl.Locale(t.replace(/_/g, "-")), r = o == null ? void 0 : o.language.toLowerCase(), n = (i = (s = o == null ? void 0 : o.region) === null || s === void 0 ? void 0 : s.toLowerCase()) !== null && i !== void 0 ? i : "", l = St.get(`${r}-${n}`), a = St.get(r);
    return { locale: o, language: r, region: n, primary: l, secondary: a };
  }
  exists(t, s) {
    var i;
    const { primary: o, secondary: r } = this.getTranslationData((i = s.lang) !== null && i !== void 0 ? i : this.lang());
    return s = Object.assign({ includeFallback: !1 }, s), !!(o && o[t] || r && r[t] || s.includeFallback && pt && pt[t]);
  }
  term(t, ...s) {
    const { primary: i, secondary: o } = this.getTranslationData(this.lang());
    let r;
    if (i && i[t])
      r = i[t];
    else if (o && o[t])
      r = o[t];
    else if (pt && pt[t])
      r = pt[t];
    else
      return console.error(`No translation found for: ${String(t)}`), String(t);
    return typeof r == "function" ? r(...s) : r;
  }
  date(t, s) {
    return t = new Date(t), new Intl.DateTimeFormat(this.lang(), s).format(t);
  }
  number(t, s) {
    return t = Number(t), isNaN(t) ? "" : new Intl.NumberFormat(this.lang(), s).format(t);
  }
  relativeTime(t, s, i) {
    return new Intl.RelativeTimeFormat(this.lang(), i).format(t, s);
  }
};
var Ws = {
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
Us(Ws);
var ro = Ws, pe = class extends oo {
};
Us(ro);
var xt = class extends J {
  constructor() {
    super(...arguments), this.localize = new pe(this), this.variant = "neutral", this.size = "medium", this.pill = !1, this.removable = !1;
  }
  handleRemoveClick() {
    this.emit("sl-remove");
  }
  render() {
    return O`
      <span
        part="base"
        class=${vt({
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
xt.styles = [zt, Ti];
xt.dependencies = { "sl-icon-button": T };
u([
  f({ reflect: !0 })
], xt.prototype, "variant", 2);
u([
  f({ reflect: !0 })
], xt.prototype, "size", 2);
u([
  f({ type: Boolean, reflect: !0 })
], xt.prototype, "pill", 2);
u([
  f({ type: Boolean })
], xt.prototype, "removable", 2);
var no = ct`
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
function lo(e, t) {
  return {
    top: Math.round(e.getBoundingClientRect().top - t.getBoundingClientRect().top),
    left: Math.round(e.getBoundingClientRect().left - t.getBoundingClientRect().left)
  };
}
function ao(e, t, s = "vertical", i = "smooth") {
  const o = lo(e, t), r = o.top + t.scrollTop, n = o.left + t.scrollLeft, l = t.scrollLeft, a = t.scrollLeft + t.offsetWidth, c = t.scrollTop, h = t.scrollTop + t.offsetHeight;
  (s === "horizontal" || s === "both") && (n < l ? t.scrollTo({ left: n, behavior: i }) : n + e.clientWidth > a && t.scrollTo({ left: n - t.offsetWidth + e.clientWidth, behavior: i })), (s === "vertical" || s === "both") && (r < c ? t.scrollTo({ top: r, behavior: i }) : r + e.clientHeight > h && t.scrollTo({ top: r - t.offsetHeight + e.clientHeight, behavior: i }));
}
var co = ct`
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
`, ho = ct`
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
const nt = Math.min, P = Math.max, le = Math.round, Zt = Math.floor, W = (e) => ({
  x: e,
  y: e
}), uo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, po = {
  start: "end",
  end: "start"
};
function Pe(e, t, s) {
  return P(e, nt(t, s));
}
function Tt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function lt(e) {
  return e.split("-")[0];
}
function Lt(e) {
  return e.split("-")[1];
}
function qs(e) {
  return e === "x" ? "y" : "x";
}
function Je(e) {
  return e === "y" ? "height" : "width";
}
function bt(e) {
  return ["top", "bottom"].includes(lt(e)) ? "y" : "x";
}
function Ye(e) {
  return qs(bt(e));
}
function fo(e, t, s) {
  s === void 0 && (s = !1);
  const i = Lt(e), o = Ye(e), r = Je(o);
  let n = o === "x" ? i === (s ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (n = ae(n)), [n, ae(n)];
}
function mo(e) {
  const t = ae(e);
  return [ze(e), t, ze(t)];
}
function ze(e) {
  return e.replace(/start|end/g, (t) => po[t]);
}
function go(e, t, s) {
  const i = ["left", "right"], o = ["right", "left"], r = ["top", "bottom"], n = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return s ? t ? o : i : t ? i : o;
    case "left":
    case "right":
      return t ? r : n;
    default:
      return [];
  }
}
function vo(e, t, s, i) {
  const o = Lt(e);
  let r = go(lt(e), s === "start", i);
  return o && (r = r.map((n) => n + "-" + o), t && (r = r.concat(r.map(ze)))), r;
}
function ae(e) {
  return e.replace(/left|right|bottom|top/g, (t) => uo[t]);
}
function bo(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Js(e) {
  return typeof e != "number" ? bo(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ce(e) {
  const {
    x: t,
    y: s,
    width: i,
    height: o
  } = e;
  return {
    width: i,
    height: o,
    top: s,
    left: t,
    right: t + i,
    bottom: s + o,
    x: t,
    y: s
  };
}
function vs(e, t, s) {
  let {
    reference: i,
    floating: o
  } = e;
  const r = bt(t), n = Ye(t), l = Je(n), a = lt(t), c = r === "y", h = i.x + i.width / 2 - o.width / 2, d = i.y + i.height / 2 - o.height / 2, m = i[l] / 2 - o[l] / 2;
  let p;
  switch (a) {
    case "top":
      p = {
        x: h,
        y: i.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: h,
        y: i.y + i.height
      };
      break;
    case "right":
      p = {
        x: i.x + i.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: i.x - o.width,
        y: d
      };
      break;
    default:
      p = {
        x: i.x,
        y: i.y
      };
  }
  switch (Lt(t)) {
    case "start":
      p[n] -= m * (s && c ? -1 : 1);
      break;
    case "end":
      p[n] += m * (s && c ? -1 : 1);
      break;
  }
  return p;
}
const yo = async (e, t, s) => {
  const {
    placement: i = "bottom",
    strategy: o = "absolute",
    middleware: r = [],
    platform: n
  } = s, l = r.filter(Boolean), a = await (n.isRTL == null ? void 0 : n.isRTL(t));
  let c = await n.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: h,
    y: d
  } = vs(c, i, a), m = i, p = {}, g = 0;
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
      initialPlacement: i,
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
    } = vs(c, m, a)), v = -1);
  }
  return {
    x: h,
    y: d,
    placement: m,
    strategy: o,
    middlewareData: p
  };
};
async function Ke(e, t) {
  var s;
  t === void 0 && (t = {});
  const {
    x: i,
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
  } = Tt(t, e), g = Js(p), w = l[m ? d === "floating" ? "reference" : "floating" : d], b = ce(await r.getClippingRect({
    element: (s = await (r.isElement == null ? void 0 : r.isElement(w))) == null || s ? w : w.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: h,
    strategy: a
  })), _ = d === "floating" ? {
    x: i,
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
const wo = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: s,
      y: i,
      placement: o,
      rects: r,
      platform: n,
      elements: l,
      middlewareData: a
    } = t, {
      element: c,
      padding: h = 0
    } = Tt(e, t) || {};
    if (c == null)
      return {};
    const d = Js(h), m = {
      x: s,
      y: i
    }, p = Ye(o), g = Je(p), v = await n.getDimensions(c), w = p === "y", b = w ? "top" : "left", _ = w ? "bottom" : "right", x = w ? "clientHeight" : "clientWidth", S = r.reference[g] + r.reference[p] - m[p] - r.floating[g], C = m[p] - r.reference[p], R = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(c));
    let E = R ? R[x] : 0;
    (!E || !await (n.isElement == null ? void 0 : n.isElement(R))) && (E = l.floating[x] || r.floating[g]);
    const K = S / 2 - C / 2, N = E / 2 - v[g] / 2 - 1, D = nt(d[b], N), Q = nt(d[_], N), F = D, tt = E - v[g] - Q, k = E / 2 - v[g] / 2 + K, $t = Pe(F, k, tt), X = !a.arrow && Lt(o) != null && k !== $t && r.reference[g] / 2 - (k < F ? D : Q) - v[g] / 2 < 0, U = X ? k < F ? k - F : k - tt : 0;
    return {
      [p]: m[p] + U,
      data: {
        [p]: $t,
        centerOffset: k - $t - U,
        ...X && {
          alignmentOffset: U
        }
      },
      reset: X
    };
  }
}), _o = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var s, i;
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
      } = Tt(e, t);
      if ((s = r.arrow) != null && s.alignmentOffset)
        return {};
      const b = lt(o), _ = bt(l), x = lt(l) === l, S = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), C = m || (x || !v ? [ae(l)] : mo(l)), R = g !== "none";
      !m && R && C.push(...vo(l, v, g, S));
      const E = [l, ...C], K = await Ke(t, w), N = [];
      let D = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (h && N.push(K[b]), d) {
        const k = fo(o, n, S);
        N.push(K[k[0]], K[k[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: N
      }], !N.every((k) => k <= 0)) {
        var Q, F;
        const k = (((Q = r.flip) == null ? void 0 : Q.index) || 0) + 1, $t = E[k];
        if ($t)
          return {
            data: {
              index: k,
              overflows: D
            },
            reset: {
              placement: $t
            }
          };
        let X = (F = D.filter((U) => U.overflows[0] <= 0).sort((U, et) => U.overflows[1] - et.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!X)
          switch (p) {
            case "bestFit": {
              var tt;
              const U = (tt = D.filter((et) => {
                if (R) {
                  const st = bt(et.placement);
                  return st === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  st === "y";
                }
                return !0;
              }).map((et) => [et.placement, et.overflows.filter((st) => st > 0).reduce((st, li) => st + li, 0)]).sort((et, st) => et[1] - st[1])[0]) == null ? void 0 : tt[0];
              U && (X = U);
              break;
            }
            case "initialPlacement":
              X = l;
              break;
          }
        if (o !== X)
          return {
            reset: {
              placement: X
            }
          };
      }
      return {};
    }
  };
};
async function xo(e, t) {
  const {
    placement: s,
    platform: i,
    elements: o
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(o.floating)), n = lt(s), l = Lt(s), a = bt(s) === "y", c = ["left", "top"].includes(n) ? -1 : 1, h = r && a ? -1 : 1, d = Tt(t, e);
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
const $o = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var s, i;
      const {
        x: o,
        y: r,
        placement: n,
        middlewareData: l
      } = t, a = await xo(t, e);
      return n === ((s = l.offset) == null ? void 0 : s.placement) && (i = l.arrow) != null && i.alignmentOffset ? {} : {
        x: o + a.x,
        y: r + a.y,
        data: {
          ...a,
          placement: n
        }
      };
    }
  };
}, Co = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: s,
        y: i,
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
      } = Tt(e, t), c = {
        x: s,
        y: i
      }, h = await Ke(t, a), d = bt(lt(o)), m = qs(d);
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
          x: v.x - s,
          y: v.y - i,
          enabled: {
            [m]: r,
            [d]: n
          }
        }
      };
    }
  };
}, Ao = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var s, i;
      const {
        placement: o,
        rects: r,
        platform: n,
        elements: l
      } = t, {
        apply: a = () => {
        },
        ...c
      } = Tt(e, t), h = await Ke(t, c), d = lt(o), m = Lt(o), p = bt(o) === "y", {
        width: g,
        height: v
      } = r.floating;
      let w, b;
      d === "top" || d === "bottom" ? (w = d, b = m === (await (n.isRTL == null ? void 0 : n.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (b = d, w = m === "end" ? "top" : "bottom");
      const _ = v - h.top - h.bottom, x = g - h.left - h.right, S = nt(v - h[w], _), C = nt(g - h[b], x), R = !t.middlewareData.shift;
      let E = S, K = C;
      if ((s = t.middlewareData.shift) != null && s.enabled.x && (K = x), (i = t.middlewareData.shift) != null && i.enabled.y && (E = _), R && !m) {
        const D = P(h.left, 0), Q = P(h.right, 0), F = P(h.top, 0), tt = P(h.bottom, 0);
        p ? K = g - 2 * (D !== 0 || Q !== 0 ? D + Q : P(h.left, h.right)) : E = v - 2 * (F !== 0 || tt !== 0 ? F + tt : P(h.top, h.bottom));
      }
      await a({
        ...t,
        availableWidth: K,
        availableHeight: E
      });
      const N = await n.getDimensions(l.floating);
      return g !== N.width || v !== N.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function fe() {
  return typeof window < "u";
}
function Rt(e) {
  return Ys(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function z(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Y(e) {
  var t;
  return (t = (Ys(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ys(e) {
  return fe() ? e instanceof Node || e instanceof z(e).Node : !1;
}
function M(e) {
  return fe() ? e instanceof Element || e instanceof z(e).Element : !1;
}
function q(e) {
  return fe() ? e instanceof HTMLElement || e instanceof z(e).HTMLElement : !1;
}
function bs(e) {
  return !fe() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof z(e).ShadowRoot;
}
function Kt(e) {
  const {
    overflow: t,
    overflowX: s,
    overflowY: i,
    display: o
  } = B(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + s) && !["inline", "contents"].includes(o);
}
function So(e) {
  return ["table", "td", "th"].includes(Rt(e));
}
function me(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function ge(e) {
  const t = Xe(), s = M(e) ? B(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((i) => s[i] ? s[i] !== "none" : !1) || (s.containerType ? s.containerType !== "normal" : !1) || !t && (s.backdropFilter ? s.backdropFilter !== "none" : !1) || !t && (s.filter ? s.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((i) => (s.willChange || "").includes(i)) || ["paint", "layout", "strict", "content"].some((i) => (s.contain || "").includes(i));
}
function Eo(e) {
  let t = at(e);
  for (; q(t) && !Pt(t); ) {
    if (ge(t))
      return t;
    if (me(t))
      return null;
    t = at(t);
  }
  return null;
}
function Xe() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Pt(e) {
  return ["html", "body", "#document"].includes(Rt(e));
}
function B(e) {
  return z(e).getComputedStyle(e);
}
function ve(e) {
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
    bs(e) && e.host || // Fallback.
    Y(e)
  );
  return bs(t) ? t.host : t;
}
function Ks(e) {
  const t = at(e);
  return Pt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : q(t) && Kt(t) ? t : Ks(t);
}
function Jt(e, t, s) {
  var i;
  t === void 0 && (t = []), s === void 0 && (s = !0);
  const o = Ks(e), r = o === ((i = e.ownerDocument) == null ? void 0 : i.body), n = z(o);
  if (r) {
    const l = Te(n);
    return t.concat(n, n.visualViewport || [], Kt(o) ? o : [], l && s ? Jt(l) : []);
  }
  return t.concat(o, Jt(o, [], s));
}
function Te(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Xs(e) {
  const t = B(e);
  let s = parseFloat(t.width) || 0, i = parseFloat(t.height) || 0;
  const o = q(e), r = o ? e.offsetWidth : s, n = o ? e.offsetHeight : i, l = le(s) !== r || le(i) !== n;
  return l && (s = r, i = n), {
    width: s,
    height: i,
    $: l
  };
}
function Ze(e) {
  return M(e) ? e : e.contextElement;
}
function kt(e) {
  const t = Ze(e);
  if (!q(t))
    return W(1);
  const s = t.getBoundingClientRect(), {
    width: i,
    height: o,
    $: r
  } = Xs(t);
  let n = (r ? le(s.width) : s.width) / i, l = (r ? le(s.height) : s.height) / o;
  return (!n || !Number.isFinite(n)) && (n = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: n,
    y: l
  };
}
const ko = /* @__PURE__ */ W(0);
function Zs(e) {
  const t = z(e);
  return !Xe() || !t.visualViewport ? ko : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Oo(e, t, s) {
  return t === void 0 && (t = !1), !s || t && s !== z(e) ? !1 : t;
}
function yt(e, t, s, i) {
  t === void 0 && (t = !1), s === void 0 && (s = !1);
  const o = e.getBoundingClientRect(), r = Ze(e);
  let n = W(1);
  t && (i ? M(i) && (n = kt(i)) : n = kt(e));
  const l = Oo(r, s, i) ? Zs(r) : W(0);
  let a = (o.left + l.x) / n.x, c = (o.top + l.y) / n.y, h = o.width / n.x, d = o.height / n.y;
  if (r) {
    const m = z(r), p = i && M(i) ? z(i) : i;
    let g = m, v = Te(g);
    for (; v && i && p !== g; ) {
      const w = kt(v), b = v.getBoundingClientRect(), _ = B(v), x = b.left + (v.clientLeft + parseFloat(_.paddingLeft)) * w.x, S = b.top + (v.clientTop + parseFloat(_.paddingTop)) * w.y;
      a *= w.x, c *= w.y, h *= w.x, d *= w.y, a += x, c += S, g = z(v), v = Te(g);
    }
  }
  return ce({
    width: h,
    height: d,
    x: a,
    y: c
  });
}
function Ge(e, t) {
  const s = ve(e).scrollLeft;
  return t ? t.left + s : yt(Y(e)).left + s;
}
function Gs(e, t, s) {
  s === void 0 && (s = !1);
  const i = e.getBoundingClientRect(), o = i.left + t.scrollLeft - (s ? 0 : (
    // RTL <body> scrollbar.
    Ge(e, i)
  )), r = i.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function Po(e) {
  let {
    elements: t,
    rect: s,
    offsetParent: i,
    strategy: o
  } = e;
  const r = o === "fixed", n = Y(i), l = t ? me(t.floating) : !1;
  if (i === n || l && r)
    return s;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = W(1);
  const h = W(0), d = q(i);
  if ((d || !d && !r) && ((Rt(i) !== "body" || Kt(n)) && (a = ve(i)), q(i))) {
    const p = yt(i);
    c = kt(i), h.x = p.x + i.clientLeft, h.y = p.y + i.clientTop;
  }
  const m = n && !d && !r ? Gs(n, a, !0) : W(0);
  return {
    width: s.width * c.x,
    height: s.height * c.y,
    x: s.x * c.x - a.scrollLeft * c.x + h.x + m.x,
    y: s.y * c.y - a.scrollTop * c.y + h.y + m.y
  };
}
function zo(e) {
  return Array.from(e.getClientRects());
}
function To(e) {
  const t = Y(e), s = ve(e), i = e.ownerDocument.body, o = P(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth), r = P(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
  let n = -s.scrollLeft + Ge(e);
  const l = -s.scrollTop;
  return B(i).direction === "rtl" && (n += P(t.clientWidth, i.clientWidth) - o), {
    width: o,
    height: r,
    x: n,
    y: l
  };
}
function Lo(e, t) {
  const s = z(e), i = Y(e), o = s.visualViewport;
  let r = i.clientWidth, n = i.clientHeight, l = 0, a = 0;
  if (o) {
    r = o.width, n = o.height;
    const c = Xe();
    (!c || c && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: r,
    height: n,
    x: l,
    y: a
  };
}
function Ro(e, t) {
  const s = yt(e, !0, t === "fixed"), i = s.top + e.clientTop, o = s.left + e.clientLeft, r = q(e) ? kt(e) : W(1), n = e.clientWidth * r.x, l = e.clientHeight * r.y, a = o * r.x, c = i * r.y;
  return {
    width: n,
    height: l,
    x: a,
    y: c
  };
}
function ys(e, t, s) {
  let i;
  if (t === "viewport")
    i = Lo(e, s);
  else if (t === "document")
    i = To(Y(e));
  else if (M(t))
    i = Ro(t, s);
  else {
    const o = Zs(e);
    i = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ce(i);
}
function Qs(e, t) {
  const s = at(e);
  return s === t || !M(s) || Pt(s) ? !1 : B(s).position === "fixed" || Qs(s, t);
}
function Do(e, t) {
  const s = t.get(e);
  if (s)
    return s;
  let i = Jt(e, [], !1).filter((l) => M(l) && Rt(l) !== "body"), o = null;
  const r = B(e).position === "fixed";
  let n = r ? at(e) : e;
  for (; M(n) && !Pt(n); ) {
    const l = B(n), a = ge(n);
    !a && l.position === "fixed" && (o = null), (r ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Kt(n) && !a && Qs(e, n)) ? i = i.filter((h) => h !== n) : o = l, n = at(n);
  }
  return t.set(e, i), i;
}
function Mo(e) {
  let {
    element: t,
    boundary: s,
    rootBoundary: i,
    strategy: o
  } = e;
  const n = [...s === "clippingAncestors" ? me(t) ? [] : Do(t, this._c) : [].concat(s), i], l = n[0], a = n.reduce((c, h) => {
    const d = ys(t, h, o);
    return c.top = P(d.top, c.top), c.right = nt(d.right, c.right), c.bottom = nt(d.bottom, c.bottom), c.left = P(d.left, c.left), c;
  }, ys(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Bo(e) {
  const {
    width: t,
    height: s
  } = Xs(e);
  return {
    width: t,
    height: s
  };
}
function Vo(e, t, s) {
  const i = q(t), o = Y(t), r = s === "fixed", n = yt(e, !0, r, t);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = W(0);
  if (i || !i && !r)
    if ((Rt(t) !== "body" || Kt(o)) && (l = ve(t)), i) {
      const m = yt(t, !0, r, t);
      a.x = m.x + t.clientLeft, a.y = m.y + t.clientTop;
    } else o && (a.x = Ge(o));
  const c = o && !i && !r ? Gs(o, l) : W(0), h = n.left + l.scrollLeft - a.x - c.x, d = n.top + l.scrollTop - a.y - c.y;
  return {
    x: h,
    y: d,
    width: n.width,
    height: n.height
  };
}
function Ce(e) {
  return B(e).position === "static";
}
function ws(e, t) {
  if (!q(e) || B(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let s = e.offsetParent;
  return Y(e) === s && (s = s.ownerDocument.body), s;
}
function ti(e, t) {
  const s = z(e);
  if (me(e))
    return s;
  if (!q(e)) {
    let o = at(e);
    for (; o && !Pt(o); ) {
      if (M(o) && !Ce(o))
        return o;
      o = at(o);
    }
    return s;
  }
  let i = ws(e, t);
  for (; i && So(i) && Ce(i); )
    i = ws(i, t);
  return i && Pt(i) && Ce(i) && !ge(i) ? s : i || Eo(e) || s;
}
const Ho = async function(e) {
  const t = this.getOffsetParent || ti, s = this.getDimensions, i = await s(e.floating);
  return {
    reference: Vo(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: i.width,
      height: i.height
    }
  };
};
function Io(e) {
  return B(e).direction === "rtl";
}
const ee = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Po,
  getDocumentElement: Y,
  getClippingRect: Mo,
  getOffsetParent: ti,
  getElementRects: Ho,
  getClientRects: zo,
  getDimensions: Bo,
  getScale: kt,
  isElement: M,
  isRTL: Io
};
function ei(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function No(e, t) {
  let s = null, i;
  const o = Y(e);
  function r() {
    var l;
    clearTimeout(i), (l = s) == null || l.disconnect(), s = null;
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
    const g = Zt(d), v = Zt(o.clientWidth - (h + m)), w = Zt(o.clientHeight - (d + p)), b = Zt(h), x = {
      rootMargin: -g + "px " + -v + "px " + -w + "px " + -b + "px",
      threshold: P(0, nt(1, a)) || 1
    };
    let S = !0;
    function C(R) {
      const E = R[0].intersectionRatio;
      if (E !== a) {
        if (!S)
          return n();
        E ? n(!1, E) : i = setTimeout(() => {
          n(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !ei(c, e.getBoundingClientRect()) && n(), S = !1;
    }
    try {
      s = new IntersectionObserver(C, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      s = new IntersectionObserver(C, x);
    }
    s.observe(e);
  }
  return n(!0), r;
}
function Fo(e, t, s, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: r = !0,
    elementResize: n = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = i, c = Ze(e), h = o || r ? [...c ? Jt(c) : [], ...Jt(t)] : [];
  h.forEach((b) => {
    o && b.addEventListener("scroll", s, {
      passive: !0
    }), r && b.addEventListener("resize", s);
  });
  const d = c && l ? No(c, s) : null;
  let m = -1, p = null;
  n && (p = new ResizeObserver((b) => {
    let [_] = b;
    _ && _.target === c && p && (p.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var x;
      (x = p) == null || x.observe(t);
    })), s();
  }), c && !a && p.observe(c), p.observe(t));
  let g, v = a ? yt(e) : null;
  a && w();
  function w() {
    const b = yt(e);
    v && !ei(v, b) && s(), v = b, g = requestAnimationFrame(w);
  }
  return s(), () => {
    var b;
    h.forEach((_) => {
      o && _.removeEventListener("scroll", s), r && _.removeEventListener("resize", s);
    }), d == null || d(), (b = p) == null || b.disconnect(), p = null, a && cancelAnimationFrame(g);
  };
}
const Uo = $o, jo = Co, Wo = _o, _s = Ao, qo = wo, Jo = (e, t, s) => {
  const i = /* @__PURE__ */ new Map(), o = {
    platform: ee,
    ...s
  }, r = {
    ...o.platform,
    _c: i
  };
  return yo(e, t, {
    ...o,
    platform: r
  });
};
function Yo(e) {
  return Ko(e);
}
function Ae(e) {
  return e.assignedSlot ? e.assignedSlot : e.parentNode instanceof ShadowRoot ? e.parentNode.host : e.parentNode;
}
function Ko(e) {
  for (let t = e; t; t = Ae(t)) if (t instanceof Element && getComputedStyle(t).display === "none") return null;
  for (let t = Ae(e); t; t = Ae(t)) {
    if (!(t instanceof Element)) continue;
    const s = getComputedStyle(t);
    if (s.display !== "contents" && (s.position !== "static" || ge(s) || t.tagName === "BODY"))
      return t;
  }
  return null;
}
function Xo(e) {
  return e !== null && typeof e == "object" && "getBoundingClientRect" in e && ("contextElement" in e ? e.contextElement instanceof Element : !0);
}
var $ = class extends J {
  constructor() {
    super(...arguments), this.localize = new pe(this), this.active = !1, this.placement = "top", this.strategy = "absolute", this.distance = 0, this.skidding = 0, this.arrow = !1, this.arrowPlacement = "anchor", this.arrowPadding = 10, this.flip = !1, this.flipFallbackPlacements = "", this.flipFallbackStrategy = "best-fit", this.flipPadding = 0, this.shift = !1, this.shiftPadding = 0, this.autoSizePadding = 0, this.hoverBridge = !1, this.updateHoverBridge = () => {
      if (this.hoverBridge && this.anchorEl) {
        const e = this.anchorEl.getBoundingClientRect(), t = this.popup.getBoundingClientRect(), s = this.placement.includes("top") || this.placement.includes("bottom");
        let i = 0, o = 0, r = 0, n = 0, l = 0, a = 0, c = 0, h = 0;
        s ? e.top < t.top ? (i = e.left, o = e.bottom, r = e.right, n = e.bottom, l = t.left, a = t.top, c = t.right, h = t.top) : (i = t.left, o = t.bottom, r = t.right, n = t.bottom, l = e.left, a = e.top, c = e.right, h = e.top) : e.left < t.left ? (i = e.right, o = e.top, r = t.left, n = t.top, l = e.right, a = e.bottom, c = t.left, h = t.bottom) : (i = t.right, o = t.top, r = e.left, n = e.top, l = t.right, a = t.bottom, c = e.left, h = e.bottom), this.style.setProperty("--hover-bridge-top-left-x", `${i}px`), this.style.setProperty("--hover-bridge-top-left-y", `${o}px`), this.style.setProperty("--hover-bridge-top-right-x", `${r}px`), this.style.setProperty("--hover-bridge-top-right-y", `${n}px`), this.style.setProperty("--hover-bridge-bottom-left-x", `${l}px`), this.style.setProperty("--hover-bridge-bottom-left-y", `${a}px`), this.style.setProperty("--hover-bridge-bottom-right-x", `${c}px`), this.style.setProperty("--hover-bridge-bottom-right-y", `${h}px`);
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
    } else this.anchor instanceof Element || Xo(this.anchor) ? this.anchorEl = this.anchor : this.anchorEl = this.querySelector('[slot="anchor"]');
    this.anchorEl instanceof HTMLSlotElement && (this.anchorEl = this.anchorEl.assignedElements({ flatten: !0 })[0]), this.anchorEl && this.active && this.start();
  }
  start() {
    !this.anchorEl || !this.active || (this.cleanup = Fo(this.anchorEl, this.popup, () => {
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
      Uo({ mainAxis: this.distance, crossAxis: this.skidding })
    ];
    this.sync ? e.push(
      _s({
        apply: ({ rects: s }) => {
          const i = this.sync === "width" || this.sync === "both", o = this.sync === "height" || this.sync === "both";
          this.popup.style.width = i ? `${s.reference.width}px` : "", this.popup.style.height = o ? `${s.reference.height}px` : "";
        }
      })
    ) : (this.popup.style.width = "", this.popup.style.height = ""), this.flip && e.push(
      Wo({
        boundary: this.flipBoundary,
        // @ts-expect-error - We're converting a string attribute to an array here
        fallbackPlacements: this.flipFallbackPlacements,
        fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
        padding: this.flipPadding
      })
    ), this.shift && e.push(
      jo({
        boundary: this.shiftBoundary,
        padding: this.shiftPadding
      })
    ), this.autoSize ? e.push(
      _s({
        boundary: this.autoSizeBoundary,
        padding: this.autoSizePadding,
        apply: ({ availableWidth: s, availableHeight: i }) => {
          this.autoSize === "vertical" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-height", `${i}px`) : this.style.removeProperty("--auto-size-available-height"), this.autoSize === "horizontal" || this.autoSize === "both" ? this.style.setProperty("--auto-size-available-width", `${s}px`) : this.style.removeProperty("--auto-size-available-width");
        }
      })
    ) : (this.style.removeProperty("--auto-size-available-width"), this.style.removeProperty("--auto-size-available-height")), this.arrow && e.push(
      qo({
        element: this.arrowEl,
        padding: this.arrowPadding
      })
    );
    const t = this.strategy === "absolute" ? (s) => ee.getOffsetParent(s, Yo) : ee.getOffsetParent;
    Jo(this.anchorEl, this.popup, {
      placement: this.placement,
      middleware: e,
      strategy: this.strategy,
      platform: ue(_t({}, ee), {
        getOffsetParent: t
      })
    }).then(({ x: s, y: i, middlewareData: o, placement: r }) => {
      const n = this.localize.dir() === "rtl", l = { top: "bottom", right: "left", bottom: "top", left: "right" }[r.split("-")[0]];
      if (this.setAttribute("data-current-placement", r), Object.assign(this.popup.style, {
        left: `${s}px`,
        top: `${i}px`
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
        class=${vt({
      "popup-hover-bridge": !0,
      "popup-hover-bridge--visible": this.hoverBridge && this.active
    })}
      ></span>

      <div
        part="popup"
        class=${vt({
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
$.styles = [zt, ho];
u([
  G(".popup")
], $.prototype, "popup", 2);
u([
  G(".popup__arrow")
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
var Bt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakSet(), Gt = /* @__PURE__ */ new WeakMap(), Zo = class {
  constructor(e, t) {
    this.handleFormData = (s) => {
      const i = this.options.disabled(this.host), o = this.options.name(this.host), r = this.options.value(this.host), n = this.host.tagName.toLowerCase() === "sl-button";
      this.host.isConnected && !i && !n && typeof o == "string" && o.length > 0 && typeof r < "u" && (Array.isArray(r) ? r.forEach((l) => {
        s.formData.append(o, l.toString());
      }) : s.formData.append(o, r.toString()));
    }, this.handleFormSubmit = (s) => {
      var i;
      const o = this.options.disabled(this.host), r = this.options.reportValidity;
      this.form && !this.form.noValidate && ((i = Bt.get(this.form)) == null || i.forEach((n) => {
        this.setUserInteracted(n, !0);
      })), this.form && !this.form.noValidate && !o && !r(this.host) && (s.preventDefault(), s.stopImmediatePropagation());
    }, this.handleFormReset = () => {
      this.options.setValue(this.host, this.options.defaultValue(this.host)), this.setUserInteracted(this.host, !1), Gt.set(this.host, []);
    }, this.handleInteraction = (s) => {
      const i = Gt.get(this.host);
      i.includes(s.type) || i.push(s.type), i.length === this.options.assumeInteractionOn.length && this.setUserInteracted(this.host, !0);
    }, this.checkFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const s = this.form.querySelectorAll("*");
        for (const i of s)
          if (typeof i.checkValidity == "function" && !i.checkValidity())
            return !1;
      }
      return !0;
    }, this.reportFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const s = this.form.querySelectorAll("*");
        for (const i of s)
          if (typeof i.reportValidity == "function" && !i.reportValidity())
            return !1;
      }
      return !0;
    }, (this.host = e).addController(this), this.options = _t({
      form: (s) => {
        const i = s.form;
        if (i) {
          const r = s.getRootNode().querySelector(`#${i}`);
          if (r)
            return r;
        }
        return s.closest("form");
      },
      name: (s) => s.name,
      value: (s) => s.value,
      defaultValue: (s) => s.defaultValue,
      disabled: (s) => {
        var i;
        return (i = s.disabled) != null ? i : !1;
      },
      reportValidity: (s) => typeof s.reportValidity == "function" ? s.reportValidity() : !0,
      checkValidity: (s) => typeof s.checkValidity == "function" ? s.checkValidity() : !0,
      setValue: (s, i) => s.value = i,
      assumeInteractionOn: ["sl-input"]
    }, t);
  }
  hostConnected() {
    const e = this.options.form(this.host);
    e && this.attachForm(e), Gt.set(this.host, []), this.options.assumeInteractionOn.forEach((t) => {
      this.host.addEventListener(t, this.handleInteraction);
    });
  }
  hostDisconnected() {
    this.detachForm(), Gt.delete(this.host), this.options.assumeInteractionOn.forEach((e) => {
      this.host.removeEventListener(e, this.handleInteraction);
    });
  }
  hostUpdated() {
    const e = this.options.form(this.host);
    e || this.detachForm(), e && this.form !== e && (this.detachForm(), this.attachForm(e)), this.host.hasUpdated && this.setValidity(this.host.validity.valid);
  }
  attachForm(e) {
    e ? (this.form = e, Bt.has(this.form) ? Bt.get(this.form).add(this.host) : Bt.set(this.form, /* @__PURE__ */ new Set([this.host])), this.form.addEventListener("formdata", this.handleFormData), this.form.addEventListener("submit", this.handleFormSubmit), this.form.addEventListener("reset", this.handleFormReset), Vt.has(this.form) || (Vt.set(this.form, this.form.reportValidity), this.form.reportValidity = () => this.reportFormValidity()), Ht.has(this.form) || (Ht.set(this.form, this.form.checkValidity), this.form.checkValidity = () => this.checkFormValidity())) : this.form = void 0;
  }
  detachForm() {
    if (!this.form) return;
    const e = Bt.get(this.form);
    e && (e.delete(this.host), e.size <= 0 && (this.form.removeEventListener("formdata", this.handleFormData), this.form.removeEventListener("submit", this.handleFormSubmit), this.form.removeEventListener("reset", this.handleFormReset), Vt.has(this.form) && (this.form.reportValidity = Vt.get(this.form), Vt.delete(this.form)), Ht.has(this.form) && (this.form.checkValidity = Ht.get(this.form), Ht.delete(this.form)), this.form = void 0));
  }
  setUserInteracted(e, t) {
    t ? Se.add(e) : Se.delete(e), e.requestUpdate();
  }
  doAction(e, t) {
    if (this.form) {
      const s = document.createElement("button");
      s.type = e, s.style.position = "absolute", s.style.width = "0", s.style.height = "0", s.style.clipPath = "inset(50%)", s.style.overflow = "hidden", s.style.whiteSpace = "nowrap", t && (s.name = t.name, s.value = t.value, ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((i) => {
        t.hasAttribute(i) && s.setAttribute(i, t.getAttribute(i));
      })), this.form.append(s), s.click(), s.remove();
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
    const t = this.host, s = !!Se.has(t), i = !!t.required;
    t.toggleAttribute("data-required", i), t.toggleAttribute("data-optional", !i), t.toggleAttribute("data-invalid", !e), t.toggleAttribute("data-valid", e), t.toggleAttribute("data-user-invalid", !e && s), t.toggleAttribute("data-user-valid", e && s);
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
}, si = Object.freeze({
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
Object.freeze(ue(_t({}, si), {
  valid: !1,
  valueMissing: !0
}));
Object.freeze(ue(_t({}, si), {
  valid: !1,
  customError: !0
}));
var ii = /* @__PURE__ */ new Map(), Go = /* @__PURE__ */ new WeakMap();
function Qo(e) {
  return e ?? { keyframes: [], options: { duration: 0 } };
}
function xs(e, t) {
  return t.toLowerCase() === "rtl" ? {
    keyframes: e.rtlKeyframes || e.keyframes,
    options: e.options
  } : e;
}
function oi(e, t) {
  ii.set(e, Qo(t));
}
function $s(e, t, s) {
  const i = Go.get(e);
  if (i != null && i[t])
    return xs(i[t], s.dir);
  const o = ii.get(t);
  return o ? xs(o, s.dir) : {
    keyframes: [],
    options: { duration: 0 }
  };
}
function Cs(e, t) {
  return new Promise((s) => {
    function i(o) {
      o.target === e && (e.removeEventListener(t, i), s());
    }
    e.addEventListener(t, i);
  });
}
function As(e, t, s) {
  return new Promise((i) => {
    if ((s == null ? void 0 : s.duration) === 1 / 0)
      throw new Error("Promise-based animations must be finite.");
    const o = e.animate(t, ue(_t({}, s), {
      duration: tr() ? 0 : s.duration
    }));
    o.addEventListener("cancel", i, { once: !0 }), o.addEventListener("finish", i, { once: !0 });
  });
}
function tr() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Ss(e) {
  return Promise.all(
    e.getAnimations().map((t) => new Promise((s) => {
      t.cancel(), requestAnimationFrame(s);
    }))
  );
}
var er = class {
  constructor(e, ...t) {
    this.slotNames = [], this.handleSlotChange = (s) => {
      const i = s.target;
      (this.slotNames.includes("[default]") && !i.name || i.name && this.slotNames.includes(i.name)) && this.host.requestUpdate();
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
class Le extends Is {
  constructor(t) {
    if (super(t), this.it = A, t.type !== Vs.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === A || t == null) return this._t = void 0, this.it = t;
    if (t === rt) return t;
    if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.it) return this._t;
    this.it = t;
    const s = [t];
    return s.raw = s, this._t = { _$litType$: this.constructor.resultType, strings: s, values: [] };
  }
}
Le.directiveName = "unsafeHTML", Le.resultType = 1;
const sr = Hs(Le);
var y = class extends J {
  constructor() {
    super(...arguments), this.formControlController = new Zo(this, {
      assumeInteractionOn: ["sl-blur", "sl-input"]
    }), this.hasSlotController = new er(this, "help-text", "label"), this.localize = new pe(this), this.typeToSelectString = "", this.hasFocus = !1, this.displayLabel = "", this.selectedOptions = [], this.valueHasChanged = !1, this.name = "", this._value = "", this.defaultValue = "", this.size = "medium", this.placeholder = "", this.multiple = !1, this.maxOptionsVisible = 3, this.disabled = !1, this.clearable = !1, this.open = !1, this.hoist = !1, this.filled = !1, this.pill = !1, this.label = "", this.placement = "bottom", this.helpText = "", this.form = "", this.required = !1, this.getTag = (e) => O`
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
      const t = e.target, s = t.closest(".select__clear") !== null, i = t.closest("sl-icon-button") !== null;
      if (!(s || i)) {
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
    const s = e.composedPath().some((i) => i instanceof Element && i.tagName.toLowerCase() === "sl-icon-button");
    this.disabled || s || (e.preventDefault(), this.displayInput.focus({ preventScroll: !0 }), this.open = !this.open);
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
    const s = e.target.closest("sl-option"), i = this.value;
    s && !s.disabled && (this.valueHasChanged = !0, this.multiple ? this.toggleOptionSelection(s) : this.setSelectedOptions(s), this.updateComplete.then(() => this.displayInput.focus({ preventScroll: !0 })), this.value !== i && this.updateComplete.then(() => {
      this.emit("sl-input"), this.emit("sl-change");
    }), this.multiple || (this.hide(), this.displayInput.focus({ preventScroll: !0 })));
  }
  /* @internal - used by options to update labels */
  handleDefaultSlotChange() {
    customElements.get("sl-option") || customElements.whenDefined("sl-option").then(() => this.handleDefaultSlotChange());
    const e = this.getAllOptions(), t = this.valueHasChanged ? this.value : this.defaultValue, s = Array.isArray(t) ? t : [t], i = [];
    e.forEach((o) => i.push(o.value)), this.setSelectedOptions(e.filter((o) => s.includes(o.value)));
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
    this.getAllOptions().forEach((s) => {
      s.current = !1, s.tabIndex = -1;
    }), e && (this.currentOption = e, e.current = !0, e.tabIndex = 0, e.focus());
  }
  // Sets the selected option(s)
  setSelectedOptions(e) {
    const t = this.getAllOptions(), s = Array.isArray(e) ? e : [e];
    t.forEach((i) => i.selected = !1), s.length && s.forEach((i) => i.selected = !0), this.selectionChanged();
  }
  // Toggles an option's selected state
  toggleOptionSelection(e, t) {
    t === !0 || t === !1 ? e.selected = t : e.selected = !e.selected, this.selectionChanged();
  }
  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  selectionChanged() {
    var e, t, s;
    const i = this.getAllOptions();
    this.selectedOptions = i.filter((r) => r.selected);
    const o = this.valueHasChanged;
    if (this.multiple)
      this.value = this.selectedOptions.map((r) => r.value), this.placeholder && this.value.length === 0 ? this.displayLabel = "" : this.displayLabel = this.localize.term("numOptionsSelected", this.selectedOptions.length);
    else {
      const r = this.selectedOptions[0];
      this.value = (e = r == null ? void 0 : r.value) != null ? e : "", this.displayLabel = (s = (t = r == null ? void 0 : r.getTextLabel) == null ? void 0 : t.call(r)) != null ? s : "";
    }
    this.valueHasChanged = o, this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  get tags() {
    return this.selectedOptions.map((e, t) => {
      if (t < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const s = this.getTag(e, t);
        return O`<div @sl-remove=${(i) => this.handleTagRemove(i, e)}>
          ${typeof s == "string" ? sr(s) : s}
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
  attributeChangedCallback(e, t, s) {
    if (super.attributeChangedCallback(e, t, s), e === "value") {
      const i = this.valueHasChanged;
      this.value = this.defaultValue, this.valueHasChanged = i;
    }
  }
  handleValueChange() {
    if (!this.valueHasChanged) {
      const s = this.valueHasChanged;
      this.value = this.defaultValue, this.valueHasChanged = s;
    }
    const e = this.getAllOptions(), t = Array.isArray(this.value) ? this.value : [this.value];
    this.setSelectedOptions(e.filter((s) => t.includes(s.value)));
  }
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption()), this.emit("sl-show"), this.addOpenListeners(), await Ss(this), this.listbox.hidden = !1, this.popup.active = !0, requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });
      const { keyframes: e, options: t } = $s(this, "select.show", { dir: this.localize.dir() });
      await As(this.popup.popup, e, t), this.currentOption && ao(this.currentOption, this.listbox, "vertical", "auto"), this.emit("sl-after-show");
    } else {
      this.emit("sl-hide"), this.removeOpenListeners(), await Ss(this);
      const { keyframes: e, options: t } = $s(this, "select.hide", { dir: this.localize.dir() });
      await As(this.popup.popup, e, t), this.listbox.hidden = !0, this.popup.active = !1, this.emit("sl-after-hide");
    }
  }
  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled) {
      this.open = !1;
      return;
    }
    return this.open = !0, Cs(this, "sl-after-show");
  }
  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = !1;
      return;
    }
    return this.open = !1, Cs(this, "sl-after-hide");
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
    const e = this.hasSlotController.test("label"), t = this.hasSlotController.test("help-text"), s = this.label ? !0 : !!e, i = this.helpText ? !0 : !!t, o = this.clearable && !this.disabled && this.value.length > 0, r = this.placeholder && this.value && this.value.length <= 0;
    return O`
      <div
        part="form-control"
        class=${vt({
      "form-control": !0,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": s,
      "form-control--has-help-text": i
    })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${vt({
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
          aria-hidden=${i ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
y.styles = [zt, co, no];
y.dependencies = {
  "sl-icon": I,
  "sl-popup": $,
  "sl-tag": xt
};
u([
  G(".select")
], y.prototype, "popup", 2);
u([
  G(".select__combobox")
], y.prototype, "combobox", 2);
u([
  G(".select__display-input")
], y.prototype, "displayInput", 2);
u([
  G(".select__value-input")
], y.prototype, "valueInput", 2);
u([
  G(".select__listbox")
], y.prototype, "listbox", 2);
u([
  H()
], y.prototype, "hasFocus", 2);
u([
  H()
], y.prototype, "displayLabel", 2);
u([
  H()
], y.prototype, "currentOption", 2);
u([
  H()
], y.prototype, "selectedOptions", 2);
u([
  H()
], y.prototype, "valueHasChanged", 2);
u([
  f()
], y.prototype, "name", 2);
u([
  H()
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
oi("select.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
oi("select.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});
y.define("sl-select");
var ir = ct`
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
`, L = class extends J {
  constructor() {
    super(...arguments), this.localize = new pe(this), this.isInitialized = !1, this.current = !1, this.selected = !1, this.hasHover = !1, this.value = "", this.disabled = !1;
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
    return [...e].forEach((s) => {
      s.nodeType === Node.ELEMENT_NODE && (s.hasAttribute("slot") || (t += s.textContent)), s.nodeType === Node.TEXT_NODE && (t += s.textContent);
    }), t.trim();
  }
  render() {
    return O`
      <div
        part="base"
        class=${vt({
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
L.styles = [zt, ir];
L.dependencies = { "sl-icon": I };
u([
  G(".option__label")
], L.prototype, "defaultSlot", 2);
u([
  H()
], L.prototype, "current", 2);
u([
  H()
], L.prototype, "selected", 2);
u([
  H()
], L.prototype, "hasHover", 2);
u([
  f({ reflect: !0 })
], L.prototype, "value", 2);
u([
  f({ type: Boolean, reflect: !0 })
], L.prototype, "disabled", 2);
u([
  ht("disabled")
], L.prototype, "handleDisabledChange", 1);
u([
  ht("selected")
], L.prototype, "handleSelectedChange", 1);
u([
  ht("value")
], L.prototype, "handleValueChange", 1);
L.define("sl-option");
var or = Object.defineProperty, rr = Object.getOwnPropertyDescriptor, ri = (e, t, s, i) => {
  for (var o = i > 1 ? void 0 : i ? rr(t, s) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (o = (i ? n(t, s, o) : n(o)) || o);
  return i && o && or(t, s, o), o;
};
let he = class extends He {
  constructor() {
    super(...arguments), this.options = [];
  }
  handleFilterChange(e) {
    const t = e.target, s = Array.from(t.selectedOptions).map((i) => i.value);
    this.dispatchEvent(new CustomEvent("values-changed", {
      detail: { selectedValues: s },
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    return Et`
            <sl-select label="" placeholder="Category..." clearable multiple max-options-visible="2" @sl-change=${this.handleFilterChange}>
                ${Os(
      this.options,
      (e) => Et`<sl-option value=${e}>${e}</sl-option>`
    )}
            </sl-select>
        `;
  }
};
he.styles = Be`
        /* Style the main select box */
        sl-select {
            width: 300px;
        }

        sl-select::part(form-control) {
            border: 1px solid #ccc;
            border-radius: 6px;
            background-color: #fff;
            padding: 0.3rem 0.6rem;
            font-size: 14px;
            box-shadow: none;
        }

        sl-select::part(combobox) {
            height: 25px;
        }

        /* On focus */
        sl-select:focus-within::part(form-control) {
            border-color: #283566;
            outline: none;
        }

        /* Style each tag inside the multiselect */
        sl-select::part(tag) {
            box-shadow: none !important;
            font-size: 13px;
            border-radius: 4px;
            padding: 0 3px;
        }

        /* Each option */
        sl-option::part(base) {
            font-size: 14px;
            padding-top: 3px;
            background-color: white;
        }
    `;
ri([
  ks({ type: Array })
], he.prototype, "options", 2);
he = ri([
  Ve("select-multiple")
], he);
var nr = Object.defineProperty, lr = Object.getOwnPropertyDescriptor, ni = (e) => {
  throw TypeError(e);
}, dt = (e, t, s, i) => {
  for (var o = i > 1 ? void 0 : i ? lr(t, s) : t, r = e.length - 1, n; r >= 0; r--)
    (n = e[r]) && (o = (i ? n(t, s, o) : n(o)) || o);
  return i && o && nr(t, s, o), o;
}, ar = (e, t, s) => t.has(e) || ni("Cannot " + s), Z = (e, t, s) => (ar(e, t, "read from private field"), s ? s.call(e) : t.get(e)), Ct = (e, t, s) => t.has(e) ? ni("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), se, Re, ie, De, Me, oe;
let V = class extends hi(He) {
  constructor() {
    super(...arguments), this._jokes = [], this._jokeTypes = [], this._filteredJokes = [], Ct(this, se, async () => {
      const { data: e, error: t } = await Qe.getJokes();
      return t && console.error(t), e !== void 0 && (this._jokes = this._jokes.concat(e), Z(this, oe).call(this)), { data: e, error: t };
    }), Ct(this, Re, async () => {
      const { data: e, error: t } = await Qe.getJokeTypes();
      t && console.error(t), e !== void 0 && (this._jokeTypes = e);
    }), Ct(this, ie, async (e) => {
      const t = e.target;
      t.state = "waiting";
      const { data: s, error: i } = await Z(this, se).call(this);
      if (i) {
        t.state = "failed";
        return;
      }
      s !== void 0 && (t.state = void 0);
    }), this._sortActive = !1, this._sortDescending = !1, this._selectedTypes = [], Ct(this, De, () => {
      this._sorter && (this._sorter.active ? this._sorter.active && this._sorter.descending ? (this._sorter.active = !1, this._sorter.descending = !1, console.log("this._sorter.descending", this._sorter.descending)) : (this._sorter.descending = !this._sorter.descending, this._jokes = this.sortByType(this._jokes, "type", this._sorter.descending)) : (this._sorter.active = !0, this._jokes = this.sortByType(this._jokes, "type", this._sorter.descending)));
    }), this.sortByType = (e, t, s) => [...e].sort((i, o) => {
      const r = String(i[t]).toLowerCase(), n = String(o[t]).toLowerCase(), l = r.localeCompare(n);
      return s ? -l : l;
    }), Ct(this, Me, (e) => {
      console.log("Selected types:", this._selectedTypes), this._selectedTypes = e.detail.selectedValues, Z(this, oe).call(this);
    }), Ct(this, oe, () => {
      this._selectedTypes.length ? this._filteredJokes = this._jokes.filter((e) => this._selectedTypes.includes(e.type)) : this._filteredJokes = this._jokes;
    });
  }
  async firstUpdated() {
    Z(this, se).call(this), Z(this, Re).call(this);
  }
  render() {
    return Et`
            ${this._jokes.length ? Et`
                    <uui-box headline="Filters" class="">
                        <select-multiple .options=${this._jokeTypes} @values-changed=${Z(this, Me)}></select-multiple>
                    </uui-box>
                    <uui-box headline="" class="">
                        <uui-button color="default" look="primary" @click="${Z(this, ie)}">
                            Test Cancellation Token
                        </uui-button>
                    </uui-box>

                    <uui-box headline="Jokes" class="wide">
                        <uui-table
                            aria-label="Table With Jokes"
                            aria-describedby="table-description"
                            >
                            <uui-table-column style="font-style: italic; background-color:"></uui-table-column>
                            <uui-table-column style="width: 45%; background-color: "></uui-table-column>
                            <uui-table-column style="width: 45%; background-color: "></uui-table-column>
                            <uui-table-head style="background-color: ; color: ">
                                <uui-table-head-cell id="joke-type-header" @click=${Z(this, De)}>
                                    Type
                                    <uui-symbol-sort 
                                        .active=${this._sortActive}
                                        .descending=${this._sortDescending}
                                    ></uui-symbol-sort>
                                </uui-table-head-cell>
                                <uui-table-head-cell>Setup</uui-table-head-cell>
                                <uui-table-head-cell>Punchline</uui-table-head-cell>
                            </uui-table-head>
                            ${Os(
      this._filteredJokes,
      (e) => e.id,
      (e) => Et`
                                    <uui-table-row>
                                        <uui-table-cell>${e.type}</uui-table-cell>
                                        <uui-table-cell>${e.setup}</uui-table-cell>
                                        <uui-table-cell>
                                            <disclaimer-box text=${e.punchline}></disclaimer-box>
                                        </uui-table-cell>
                                    </uui-table-row>`
    )}
                        </uui-table>
                        <div style="text-align: center">
                            <uui-button color="default" look="primary" @click="${Z(this, ie)}" class="center">
                                Load more...
                            </uui-button>
                        </div>
                    </uui-box>
                ` : ai}
        `;
  }
};
se = /* @__PURE__ */ new WeakMap();
Re = /* @__PURE__ */ new WeakMap();
ie = /* @__PURE__ */ new WeakMap();
De = /* @__PURE__ */ new WeakMap();
Me = /* @__PURE__ */ new WeakMap();
oe = /* @__PURE__ */ new WeakMap();
V.styles = [
  Be`
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
  wt()
], V.prototype, "_jokes", 2);
dt([
  wt()
], V.prototype, "_jokeTypes", 2);
dt([
  wt()
], V.prototype, "_filteredJokes", 2);
dt([
  wt()
], V.prototype, "_sortActive", 2);
dt([
  wt()
], V.prototype, "_sortDescending", 2);
dt([
  wt()
], V.prototype, "_selectedTypes", 2);
dt([
  ci("uui-symbol-sort")
], V.prototype, "_sorter", 2);
V = dt([
  Ve("jokes-dashboard")
], V);
const vr = V;
export {
  V as JokesDashboardElement,
  vr as default
};
//# sourceMappingURL=dashboard.element.jokes-BgD9GKHU.js.map
