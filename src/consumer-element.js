import {LitElement, html, css} from 'lit';

class ConsumerElement extends LitElement {
  static styles = css`
    :host {
      --_default-text-color: var(--color-primary-text, #432c00);
      --_default-bg-color: var(--color-primary-surface, #e5c492);

      display: block;
      contain: content;
      padding: 0.5rem 1rem;
      margin: 1rem 0;
      color: var(--_default-text-color);
      background-color: var(--_default-bg-color);
    }

    :host([hidden]),
    [hidden] {
      display: none !important;
    }

    @container style(--surface: dim) {
      :host {
        --_default-text-color: var(--color-primary-dim-text, #2c3400);
        --_default-bg-color: var(--color-primary-dim-surface, #cee36a);
      }
    }
  `;

  render() {
    return html` <p><slot></slot></p> `;
  }
}
customElements.define('consumer-element', ConsumerElement);
