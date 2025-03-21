import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ContextProvider} from '@lit/context';
import {contextKey} from './context-definition.js';
import './consumer-element.js';

@customElement('provider-element')
export class ProviderElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #f0f0f0;
      padding: 1em;
    }

    input {
      display: inline-block;
      margin-bottom: 1rem;
    }
  `;

  private valueFromContext = new ContextProvider(this, {context: contextKey, initialValue: 100});

  render() {
    return html`
      <div>
        Provider:
        <input
          value="100"
          type="number"
          @input=${({currentTarget}) => {
            this.valueFromContext.setValue(Number(currentTarget.value));
          }} />
        <consumer-element>Consumer in Shadow DOM</consumer-element>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'provider-element': ProviderElement;
  }
}
