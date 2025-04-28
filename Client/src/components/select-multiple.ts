import { LitElement, html, css, customElement, property, repeat } from '@umbraco-cms/backoffice/external/lit'
import '@shoelace-style/shoelace/dist/components/select/select.js'
import '@shoelace-style/shoelace/dist/components/option/option.js'

@customElement('select-multiple')
export class SelectMultiple extends LitElement {
    @property({type: Array})
    options: string[] = [];

    private handleFilterChange(e: Event) {
        const selected = e.target as HTMLSelectElement
        const selectedValues = Array.from(selected.selectedOptions).map(option => option.value)

        this.dispatchEvent(new CustomEvent('values-changed', {
            detail: { selectedValues: selectedValues },
            bubbles: true,
            composed: true
          }))
    }

    render() {
        return html`
            <sl-select label="" placeholder="Category..." clearable multiple max-options-visible="2" @sl-change=${this.handleFilterChange}>
                ${repeat(
                    this.options,
                    option => html`<sl-option value=${option}>${option}</sl-option>`
                )}
            </sl-select>
        `
    }

    static styles = css`
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
    `
}
