// Inject the built CSS dynamically
const linkId = 'umbraco-fun-style'
if (!document.getElementById(linkId)) {
    const link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    link.href = '/App_Plugins/UmbracoFun/style.css';
    document.head.appendChild(link);
}

import { LitElement, customElement, html, css, repeat, state, nothing, query } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { Joke, JokesService } from "../api"
import { UUIButtonElement, UUISymbolSortElement } from "@umbraco-cms/backoffice/external/uui";
import "../components/disclaimer-box";
import "../components/select-multiple";

@customElement('jokes-dashboard')
export class JokesDashboardElement extends UmbElementMixin(LitElement) {

    @state()
    private _jokes: Joke[] = [];

    @state()
    private _jokeTypes: string[] = [];

    @state()
    private _filteredJokes: Joke[] = [];

    async firstUpdated() {
        this.#getJokes();
        this.#getJokeTypes();
    }

    #getJokes = async () =>  {
        const { data, error } = await JokesService.getJokes();

        if (error) {
            console.error(error);
        }

        if (data !== undefined) {
            this._jokes = this._jokes.concat(data);
            // Because of filtering we will not receive the full-size batch if any filter is applied
            this.#filterJokes();
        }

        return {data, error};
    }
    
    #getJokeTypes = async () =>  {
        const { data, error } = await JokesService.getJokeTypes();

        if (error)
            console.error(error);

        if (data !== undefined)
            this._jokeTypes = data;
    }

    #onClickGetJokes = async (ev: Event) => {
        const buttonElement = ev.target as UUIButtonElement;
        buttonElement.state = "waiting";

        const { data, error } = await this.#getJokes();

        if (error) {
            buttonElement.state = "failed";
            return;
        }

        // If data was received, reset button state to default
        if (data !== undefined) {
            buttonElement.state = undefined;
        }
    }

    // Table Settings
    @state()
    private _sortActive = false;

    @state()
    private _sortDescending = false;

    @state()
    private _selectedTypes: string[] = [];

    @query('uui-symbol-sort')
    private _sorter?: UUISymbolSortElement;
    
    #onClickSort = () => {
        if (!this._sorter) return;

        // Manage sort states
        if (!this._sorter.active) {
            this._sorter.active = true;
            this._filteredJokes = this.#sortByType(this._filteredJokes, 'type', this._sorter.descending);
        }
        else if (this._sorter.active && this._sorter.descending) {
            this._sorter.active = false;
            this._sorter.descending = false;
        }
        else {
            this._sorter.descending = !this._sorter.descending;
            this._filteredJokes = this.#sortByType(this._filteredJokes, 'type', this._sorter.descending);
        }
    }

    #sortByType = (arr: Joke[], key: keyof Joke, descending: boolean): Joke[] => {
        return [...arr].sort((a, b) => {
            const valA = String(a[key]).toLowerCase();
            const valB = String(b[key]).toLowerCase();
        
            const comparison = valA.localeCompare(valB);
            return descending ? -comparison : comparison;
        })
    }

    #handleFiltersChanged = (event: CustomEvent) => {
        this._selectedTypes = event.detail.selectedValues;
        this.#filterJokes();
    }

    #filterJokes = () => {
        if (!this._selectedTypes.length)
            this._filteredJokes = this._jokes;
        else
            this._filteredJokes = this._jokes.filter(j => this._selectedTypes.includes(j.type));
    }

    render() {
        return html`
            ${this._jokes.length
                ? html`
                    <uui-box headline="Filters">
                        <select-multiple .options=${this._jokeTypes} @values-changed=${this.#handleFiltersChanged}></select-multiple>
                    </uui-box>

                    <uui-box headline="Jokes" class="wide">
                        <uui-table aria-label="Table With Jokes" aria-describedby="table-description" >
                            <uui-table-column style="font-style: italic;"></uui-table-column>
                            <uui-table-column style="width: 45%;"></uui-table-column>
                            <uui-table-column style="width: 45%;"></uui-table-column>
                            <uui-table-head>
                                <uui-table-head-cell id="joke-type-header" @click=${this.#onClickSort}>
                                    Type
                                    <uui-symbol-sort 
                                        .active=${this._sortActive}
                                        .descending=${this._sortDescending}
                                    ></uui-symbol-sort>
                                </uui-table-head-cell>
                                <uui-table-head-cell>Setup</uui-table-head-cell>
                                <uui-table-head-cell>Punchline</uui-table-head-cell>
                            </uui-table-head>
                            ${repeat(
                                this._filteredJokes,
                                joke => joke.id,
                                joke => html`
                                    <uui-table-row>
                                        <uui-table-cell><i>${joke.type}</i></uui-table-cell>
                                        <uui-table-cell>${joke.setup}</uui-table-cell>
                                        <uui-table-cell>
                                            <disclaimer-box text=${joke.punchline}></disclaimer-box>
                                        </uui-table-cell>
                                    </uui-table-row>`
                            )}
                        </uui-table>

                        <div style="text-align: center;">
                            <uui-button color="default" look="primary" @click="${this.#onClickGetJokes}">
                                Load more...
                            </uui-button>
                        </div>
                    </uui-box>
                `
                : nothing}
        `;
    }

    static styles = [
        css`
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
        `];
}

export default JokesDashboardElement;

declare global {
    interface HTMLElementTagNameMap {
        'jokes-dashboard': JokesDashboardElement;
    }
}