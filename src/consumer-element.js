import {LitElement, html, css} from 'lit';

class ConsumerElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 0.5rem 1rem;
      margin: 1rem 0;
      background-color: #e5c492;
      color: #432c00;
      contain: content;
    }

    :host([hidden]),
    [hidden] {
      display: none !important;
    }

    @container style(--surface: dim) {
      :host {
        background-color: #cee36a;
        color: #2c3400;
      }
    }
  `;

  render() {
    return html` <p><slot></slot></p> `;
  }
}
customElements.define('consumer-element', ConsumerElement);
