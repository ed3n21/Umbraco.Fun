import { LitElement, html, css, customElement, state, property, repeat } from '@umbraco-cms/backoffice/external/lit'

@customElement('select-multiple')
export class SelectMultiple extends LitElement {
    @property({type: Array})
    options: string[] = [];

    // @state()
    // private revealed = false

    private handleFilterChange(e: Event) {
        const selectedOptions = Array.from((e.target as HTMLSelectElement).selectedOptions)
        const values = selectedOptions.map(opt => opt.value)
        console.log('Selected filter values:', values)
        // Apply filtering logic here
    }

    render() {
        return html`
            <select id="filter" multiple @change=${this.handleFilterChange}>
                ${repeat(
                    this.options,
                    option => html`<option value=${option}>${option}</option>`
                )}
            </select>
        `
    }

    static styles = css`
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
    `
}
