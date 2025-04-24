import { css as f, property as $, state as v, customElement as g, LitElement as y, html as n, repeat as k, nothing as C, query as P } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as D } from "@umbraco-cms/backoffice/element-api";
import { J } from "./services-CwRtMm4o.js";
var E = Object.defineProperty, S = Object.getOwnPropertyDescriptor, w = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? S(t, s) : t, o = e.length - 1, l; o >= 0; o--)
    (l = e[o]) && (r = (i ? l(t, s, r) : l(r)) || r);
  return i && r && E(t, s, r), r;
};
let c = class extends y {
  constructor() {
    super(...arguments), this.text = "This content may contain spoilers or sensitive material. Click to reveal.", this.revealed = !1;
  }
  reveal() {
    this.revealed = !0;
  }
  render() {
    return n`
            <div
                class="disclaimer ${this.revealed ? "revealed" : ""}"
                @click=${this.reveal}
            >
                ${this.text}
            </div>
        `;
  }
};
c.styles = f`
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
w([
  $()
], c.prototype, "text", 2);
w([
  v()
], c.prototype, "revealed", 2);
c = w([
  g("disclaimer-box")
], c);
var A = Object.defineProperty, T = Object.getOwnPropertyDescriptor, O = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? T(t, s) : t, o = e.length - 1, l; o >= 0; o--)
    (l = e[o]) && (r = (i ? l(t, s, r) : l(r)) || r);
  return i && r && A(t, s, r), r;
};
let h = class extends y {
  constructor() {
    super(...arguments), this.options = [];
  }
  // @state()
  // private revealed = false
  handleFilterChange(e) {
    const s = Array.from(e.target.selectedOptions).map((i) => i.value);
    console.log("Selected filter values:", s);
  }
  render() {
    return n`
            <select id="filter" multiple @change=${this.handleFilterChange}>
                ${k(
      this.options,
      (e) => n`<option value=${e}>${e}</option>`
    )}
            </select>
        `;
  }
};
h.styles = f`
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
O([
  $({ type: Array })
], h.prototype, "options", 2);
h = O([
  g("select-multiple")
], h);
var W = Object.defineProperty, B = Object.getOwnPropertyDescriptor, j = (e) => {
  throw TypeError(e);
}, u = (e, t, s, i) => {
  for (var r = i > 1 ? void 0 : i ? B(t, s) : t, o = e.length - 1, l; o >= 0; o--)
    (l = e[o]) && (r = (i ? l(t, s, r) : l(r)) || r);
  return i && r && W(t, s, r), r;
}, M = (e, t, s) => t.has(e) || j("Cannot " + s), d = (e, t, s) => (M(e, t, "read from private field"), s ? s.call(e) : t.get(e)), b = (e, t, s) => t.has(e) ? j("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), p, m, _;
let a = class extends D(y) {
  constructor() {
    super(...arguments), this._jokes = [], b(this, p, async () => {
      const { data: e, error: t } = await J.getJokes();
      return t && console.error(t), e !== void 0 && (this._jokes = this._jokes.concat(e)), { data: e, error: t };
    }), b(this, m, async (e) => {
      const t = e.target;
      t.state = "waiting";
      const { data: s, error: i } = await d(this, p).call(this);
      if (i) {
        t.state = "failed";
        return;
      }
      s !== void 0 && (t.state = void 0);
    }), this._sortActive = !1, this._sortDescending = !1, b(this, _, () => {
      this._sorter && (this._sorter.active ? this._sorter.active && this._sorter.descending ? (this._sorter.active = !1, this._sorter.descending = !1, console.log("this._sorter.descending", this._sorter.descending)) : (this._sorter.descending = !this._sorter.descending, this._jokes = this.sortByType(this._jokes, "type", this._sorter.descending)) : (this._sorter.active = !0, this._jokes = this.sortByType(this._jokes, "type", this._sorter.descending)));
    });
  }
  async firstUpdated() {
    d(this, p).call(this);
  }
  sortByType(e, t, s) {
    return [...e].sort((i, r) => {
      const o = String(i[t]).toLowerCase(), l = String(r[t]).toLowerCase(), x = o.localeCompare(l);
      return s ? -x : x;
    });
  }
  render() {
    return n`
            ${this._jokes.length ? n`
                    <uui-box headline="Filters" class="wide">
                        <select-multiple .options=${["dad", "general"]}></select-multiple>
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
                                <uui-table-head-cell id="joke-type-header" @click=${d(this, _)}>
                                    Type
                                    <uui-symbol-sort 
                                        .active=${this._sortActive}
                                        .descending=${this._sortDescending}
                                    ></uui-symbol-sort>
                                </uui-table-head-cell>
                                <uui-table-head-cell>Setup</uui-table-head-cell>
                                <uui-table-head-cell>Punchline</uui-table-head-cell>
                            </uui-table-head>
                            ${k(
      this._jokes,
      (e) => e.id,
      (e) => n`
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
                            <uui-button color="default" look="primary" @click="${d(this, m)}" class="center">
                                Load more...
                            </uui-button>
                        </div>
                    </uui-box>
                ` : C}
        `;
  }
};
p = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakMap();
_ = /* @__PURE__ */ new WeakMap();
a.styles = [
  f`
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
u([
  v()
], a.prototype, "_jokes", 2);
u([
  v()
], a.prototype, "_sortActive", 2);
u([
  v()
], a.prototype, "_sortDescending", 2);
u([
  P("uui-symbol-sort")
], a.prototype, "_sorter", 2);
a = u([
  g("jokes-dashboard")
], a);
const G = a;
export {
  a as JokesDashboardElement,
  G as default
};
//# sourceMappingURL=dashboard.element.jokes-BtkdMn_N.js.map
