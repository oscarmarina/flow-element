import {html, css, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {ContextConsumer} from '@lit/context';
import {contextKey} from './context-definition.js';

@customElement('consumer-element')
export class ConsumerElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      outline: 2px solid gold;
      background-color: #d8d8d8;
      padding: 1em;
    }
  `;

  #valueFromContext = new ContextConsumer(this, {context: contextKey, subscribe: true});

  render() {
    return html`
      <slot></slot>
      <p>Consumer Element [Value] = ${this.#valueFromContext.value ?? -1}</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'consumer-element': ConsumerElement;
  }
}
