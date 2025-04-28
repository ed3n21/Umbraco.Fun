import { LitElement, html, customElement, property, repeat } from '@umbraco-cms/backoffice/external/lit'

import '@shoelace-style/shoelace/dist/themes/light.css';
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
            <sl-select placeholder="Category..." clearable multiple max-options-visible="2" @sl-change=${this.handleFilterChange}>
                ${repeat(
                    this.options,
                    option => html`<sl-option value=${option}>${option}</sl-option>`
                )}
            </sl-select>
        `
    }
}
