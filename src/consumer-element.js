import {LitElement, html, css, nothing} from 'lit';
import {BlockquoteControllerContextMeta} from '@blockquote-web-components/blockquote-controller-context-meta';
import {consumerContext} from './consumer-context.js';

class ConsumerElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 0.5rem 1rem;
      margin: 1rem 0;
      background-color: #ffd28d;
      color: #432c00;
      contain: content;
    }

    :host([hidden]),
    [hidden] {
      display: none !important;
    }

    :host([surface='dim']) {
      background-color: #cee36a;
      color: #2c3400;
    }
  `;

  static properties = {
    surface: {reflect: true},
  };

  constructor() {
    super();
    this.surface = undefined;

    this.propertyContext = new BlockquoteControllerContextMeta(this, {
      context: consumerContext,
      callback: this.callback,
    });
  }

  callback = (v) => v && (this.surface = v);

  render() {
    return html`<p data-surface="${this.propertyContext.value ?? nothing}"><slot></slot></p> `;
  }
}
customElements.define('consumer-element', ConsumerElement);
