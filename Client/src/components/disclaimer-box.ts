import { LitElement, html, css, customElement, state, property } from '@umbraco-cms/backoffice/external/lit'

@customElement('disclaimer-box')
export class DisclaimerBox extends LitElement {
    @property()
    text = 'This content may contain spoilers or sensitive material. Click to reveal.'

    @state()
    private revealed = false

    #reveal = () => {
        this.revealed = true
    }

    render() {
        return html`
            <div
                class="disclaimer ${this.revealed ? 'revealed' : ''}"
                @click=${this.#reveal}
            >
                ${this.text}
            </div>
        `
    }

    static styles = css`
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
    `
}
