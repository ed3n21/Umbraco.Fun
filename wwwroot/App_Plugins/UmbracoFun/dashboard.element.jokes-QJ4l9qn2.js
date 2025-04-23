import { css as k, property as J, state as d, customElement as w, LitElement as x, html as _, nothing as S, repeat as D, query as $ } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as E } from "@umbraco-cms/backoffice/element-api";
import { J as O } from "./services-CwRtMm4o.js";
import { UMB_NOTIFICATION_CONTEXT as j } from "@umbraco-cms/backoffice/notification";
var T = Object.defineProperty, M = Object.getOwnPropertyDescriptor, f = (e, t, r, i) => {
  for (var s = i > 1 ? void 0 : i ? M(t, r) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (s = (i ? l(t, r, s) : l(s)) || s);
  return i && s && T(t, r, s), s;
};
let c = class extends x {
  constructor() {
    super(...arguments), this.text = "This content may contain spoilers or sensitive material. Click to reveal.", this.revealed = !1;
  }
  reveal() {
    this.revealed = !0;
  }
  render() {
    return _`
            <div
                class="disclaimer ${this.revealed ? "revealed" : ""}"
                @click=${this.reveal}
            >
                ${this.text}
            </div>
        `;
  }
};
c.styles = k`
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
f([
  J()
], c.prototype, "text", 2);
f([
  d()
], c.prototype, "revealed", 2);
c = f([
  w("disclaimer-box")
], c);
var W = Object.defineProperty, z = Object.getOwnPropertyDescriptor, C = (e) => {
  throw TypeError(e);
}, n = (e, t, r, i) => {
  for (var s = i > 1 ? void 0 : i ? z(t, r) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (s = (i ? l(t, r, s) : l(s)) || s);
  return i && s && W(t, r, s), s;
}, m = (e, t, r) => t.has(e) || C("Cannot " + r), h = (e, t, r) => (m(e, t, "read from private field"), r ? r.call(e) : t.get(e)), p = (e, t, r) => t.has(e) ? C("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), A = (e, t, r, i) => (m(e, t, "write to private field"), t.set(e, r), r), I = (e, t, r) => (m(e, t, "access private method"), r), u, v, b, P, g;
let o = class extends E(x) {
  constructor() {
    super(), p(this, b), this._jokes = [], p(this, u), p(this, v, async (e) => {
      const t = e.target;
      t.state = "waiting";
      const { data: r, error: i } = await O.getJokes();
      if (i) {
        t.state = "failed", console.error(i);
        return;
      }
      r !== void 0 && (this._jokes = this._jokes.concat(r), t.state = "success"), h(this, u) && h(this, u).peek("warning", {
        data: {
          headline: "Jokes Re-supply",
          message: `Delivered ${(r == null ? void 0 : r.length) ?? 0} jokes`
        }
      });
    }), this._currentPage = 1, this._sortActive = !1, this._sortDescending = !1, this._pageSize = 5, p(this, g, () => {
      this._sorter && (this._sorter.active ? this._sorter.active && this._sorter.descending ? (this._sorter.active = !1, this._sorter.descending = !1) : this._sorter.descending = !this._sorter.descending : this._sorter.active = !0, this._paginator && (this._paginator.current = 1, this._paginator.dispatchEvent(new Event("change", {
        bubbles: !0,
        composed: !0
      }))));
    }), this.consumeContext(j, (e) => {
      A(this, u, e);
    });
  }
  sortByType(e, t, r) {
    return [...e].sort((i, s) => {
      const a = String(i[t]).toLowerCase(), l = String(s[t]).toLowerCase(), y = a.localeCompare(l);
      return r === "asc" ? y : -y;
    });
  }
  render() {
    const e = (this._currentPage - 1) * this._pageSize, t = e + this._pageSize, r = this._jokes.slice(e, t);
    return _`
            <uui-box headline="Jokes Controls">
                <div slot="header">[Server]</div>
                <uui-button color="default" look="primary" @click="${h(this, v)}">
                    Request Jokes
                </uui-button>
                <p>This endpoint gets you a list of jokes.</p>
            </uui-box>

            ${this._jokes.length ? _`
                    <uui-box headline="Jokes" class="wide">
                        <uui-table
                            aria-label="Table With Jokes"
                            aria-describedby="table-description"
                            >
                            <uui-table-column style="font-style: italic; background-color:"></uui-table-column>
                            <uui-table-column style="width: 45%; background-color: "></uui-table-column>
                            <uui-table-column style="width: 45%; background-color: "></uui-table-column>
                            <uui-table-head style="background-color: ; color: ">
                                <uui-table-head-cell id="joke-type-header" @click=${h(this, g)}>
                                    Type
                                    <uui-symbol-sort 
                                        .active=${this._sortActive}
                                        .descending=${this._sortDescending}
                                    ></uui-symbol-sort>
                                </uui-table-head-cell>
                                <uui-table-head-cell>Setup</uui-table-head-cell>
                                <uui-table-head-cell>Punchline</uui-table-head-cell>
                            </uui-table-head>
                            ${D(
      r,
      (i) => i.id,
      (i) => _`
                                    <uui-table-row>
                                        <uui-table-cell>${i.type}</uui-table-cell>
                                        <uui-table-cell>${i.setup}</uui-table-cell>
                                        <uui-table-cell>
                                            <disclaimer-box text=${i.punchline}></disclaimer-box>
                                        </uui-table-cell>
                                    </uui-table-row>`
    )}
                        </uui-table>
                        <uui-pagination
                            .total=${Math.ceil(this._jokes.length / this._pageSize)}
                            .current=${this._currentPage}
                            @change=${I(this, b, P)}
                        ></uui-pagination>
                    </uui-box>
                ` : S}
        `;
  }
};
u = /* @__PURE__ */ new WeakMap();
v = /* @__PURE__ */ new WeakMap();
b = /* @__PURE__ */ new WeakSet();
P = function(e) {
  this._currentPage = e.target.current;
};
g = /* @__PURE__ */ new WeakMap();
o.styles = [
  k`
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
n([
  d()
], o.prototype, "_jokes", 2);
n([
  d()
], o.prototype, "_currentPage", 2);
n([
  d()
], o.prototype, "_sortActive", 2);
n([
  d()
], o.prototype, "_sortDescending", 2);
n([
  $("uui-symbol-sort")
], o.prototype, "_sorter", 2);
n([
  $("uui-pagination", !0)
], o.prototype, "_paginator", 2);
o = n([
  w("jokes-dashboard")
], o);
const G = o;
export {
  o as JokesDashboardElement,
  G as default
};
//# sourceMappingURL=dashboard.element.jokes-QJ4l9qn2.js.map
