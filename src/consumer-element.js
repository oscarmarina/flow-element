import {LitElement, html, css, nothing} from 'lit';
import {BlockquoteControllerContextMeta} from '@blockquote-web-components/blockquote-controller-context-meta';
import {consumerContext} from './consumer-context.js';

class ConsumerElement extends LitElement {
  static styles = css`
    :host {
      --_default-text-color: var(--color-primary-text, #432c00);
      --_default-bg-color: var(--color-primary-surface, #e5c492);

      display: block;
      padding: 0.5rem 1rem;
      margin: 1rem 0;
      color: var(--_default-text-color);
      background-color: var(--_default-bg-color);
      contain: content;
    }

    :host([hidden]),
    [hidden] {
      display: none !important;
    }

    :host([surface='dim']) {
      --_default-text-color: var(--color-primary-dim-text, #2c3400);
      --_default-bg-color: var(--color-primary-dim-surface, #cee36a);
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
