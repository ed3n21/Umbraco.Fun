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

    async firstUpdated() {
        this.#getJokes();
    }

    #getJokes = async () =>  {
        const { data, error } = await JokesService.getJokes();

        if (error) {
            console.error(error);
        }

        if (data !== undefined) {
            this._jokes = this._jokes.concat(data);
        }

        return {data, error};
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

    @query('uui-symbol-sort')
    private _sorter?: UUISymbolSortElement;
    
    #onClickSort = () => {
        if (!this._sorter) return;

        // Manage sort states
        if (!this._sorter.active) {
            this._sorter.active = true;
            this._jokes = this.sortByType(this._jokes, 'type', this._sorter.descending);
        }
        else if (this._sorter.active && this._sorter.descending) {
            this._sorter.active = false;
            this._sorter.descending = false;
            console.log('this._sorter.descending', this._sorter.descending);
        }
        else {
            this._sorter.descending = !this._sorter.descending;
            this._jokes = this.sortByType(this._jokes, 'type', this._sorter.descending);
        }
    }

    sortByType(arr: Joke[], key: keyof Joke, descending: boolean): Joke[] {
        return [...arr].sort((a, b) => {
            const valA = String(a[key]).toLowerCase();
            const valB = String(b[key]).toLowerCase();
        
            const comparison = valA.localeCompare(valB);
            return descending ? -comparison : comparison;
        })
    }

    render() {
        return html`
            ${this._jokes.length
                ? html`
                    <uui-box headline="Filters" class="wide">
                        <select-multiple .options=${['dad', 'general']}></select-multiple>
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
                                this._jokes,
                                joke => joke.id,
                                joke => html`
                                    <uui-table-row>
                                        <uui-table-cell>${joke.type}</uui-table-cell>
                                        <uui-table-cell>${joke.setup}</uui-table-cell>
                                        <uui-table-cell>
                                            <disclaimer-box text=${joke.punchline}></disclaimer-box>
                                        </uui-table-cell>
                                    </uui-table-row>`
                            )}
                        </uui-table>
                        <div style="text-align: center">
                            <uui-button color="default" look="primary" @click="${this.#onClickGetJokes}" class="center">
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
        `];
}

export default JokesDashboardElement;

declare global {
    interface HTMLElementTagNameMap {
        'jokes-dashboard': JokesDashboardElement;
    }
}