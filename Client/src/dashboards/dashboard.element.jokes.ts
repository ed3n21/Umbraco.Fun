import { LitElement, customElement, html, css, repeat, state, nothing, query } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { Joke, JokesService } from "../api"
import { UUIButtonElement, UUIPaginationElement, UUISymbolSortElement } from "@umbraco-cms/backoffice/external/uui";
import { UMB_NOTIFICATION_CONTEXT, UmbNotificationContext } from "@umbraco-cms/backoffice/notification";
import "../components/disclaimer-box";

@customElement('jokes-dashboard')
export class JokesDashboardElement extends UmbElementMixin(LitElement) {

    @state()
    private _jokes: Joke[] = [];

    constructor() {
        super();

        this.consumeContext(UMB_NOTIFICATION_CONTEXT, (notificationContext) => {
            this.#notificationContext = notificationContext;
        });
    }

    #notificationContext: UmbNotificationContext | undefined;

    #onClickGetJokes = async (ev: Event) => {
        const buttonElement = ev.target as UUIButtonElement;
        buttonElement.state = "waiting";

        const { data, error } = await JokesService.getJokes();

        if (error) {
            buttonElement.state = "failed";
            console.error(error);
            return;
        }

        if (data !== undefined) {
            this._jokes = this._jokes.concat(data);
            buttonElement.state = "success";
        }

        if (this.#notificationContext) {
            this.#notificationContext.peek("warning", {
                data: {
                    headline: `Jokes Re-supply`,
                    message: `Delivered ${data?.length ?? 0} jokes`,
                }
            })
        }
    }

    // Table Settings
    @state()
    private _currentPage = 1;

    @state()
    private _sortActive = false;

    @state()
    private _sortDescending = false;

    @query('uui-symbol-sort')
    private _sorter?: UUISymbolSortElement;

    @query('uui-pagination', true)
    private _paginator?: UUIPaginationElement;

    private _pageSize = 5;

    #onPageChange(e: CustomEvent) {
        this._currentPage = (e.target as UUIPaginationElement).current;
    }

    #onSortClick = () => {
        if (this._sorter) {
            if (!this._sorter.active) {
                this._sorter.active = true;
            }
            else if (this._sorter.active && this._sorter.descending) {
                this._sorter.active = false;
                this._sorter.descending = false;
            }
            else {
                this._sorter.descending = !this._sorter.descending;
            }

            if (this._paginator) {
                this._paginator.current = 1;

                this._paginator.dispatchEvent(new Event('change', {
                    bubbles: true,
                    composed: true
                  }));
            }
        }
    }

    sortByType(arr: Joke[], key: keyof Joke, direction: 'asc' | 'desc'): Joke[] {
        return [...arr].sort((a, b) => {
            const valA = String(a[key]).toLowerCase();
            const valB = String(b[key]).toLowerCase();
        
            const comparison = valA.localeCompare(valB);
            return direction === 'asc' ? comparison : -comparison;
        })
    }

    render() {
        const startIndex = (this._currentPage - 1) * this._pageSize;
        const endIndex = startIndex + this._pageSize;
        const visibleJokes = this._jokes.slice(startIndex, endIndex);

        return html`
            <uui-box headline="Jokes Controls">
                <div slot="header">[Server]</div>
                <uui-button color="default" look="primary" @click="${this.#onClickGetJokes}">
                    Request Jokes
                </uui-button>
                <p>This endpoint gets you a list of jokes.</p>
            </uui-box>

            ${this._jokes.length
                ? html`
                    <uui-box headline="Jokes" class="wide">
                        <uui-table
                            aria-label="Table With Jokes"
                            aria-describedby="table-description"
                            >
                            <uui-table-column style="font-style: italic; background-color:"></uui-table-column>
                            <uui-table-column style="width: 45%; background-color: "></uui-table-column>
                            <uui-table-column style="width: 45%; background-color: "></uui-table-column>
                            <uui-table-head style="background-color: ; color: ">
                                <uui-table-head-cell id="joke-type-header" @click=${this.#onSortClick}>
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
                                visibleJokes,
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
                        <uui-pagination
                            .total=${Math.ceil(this._jokes.length / this._pageSize)}
                            .current=${this._currentPage}
                            @change=${this.#onPageChange}
                        ></uui-pagination>
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