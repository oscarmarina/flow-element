import {LitElement, html, css} from 'lit';
import './define/flow-element.js';
import './consumer-element.js';

// https://bugs.webkit.org/show_bug.cgi?id=289868
class ProviderElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 0.5rem 1rem;
      contain: content;
    }

    :host,
    .container {
      color: var(--_default-text-color);
      background-color: var(--_default-bg-color);
    }

    :host([hidden]),
    [hidden] {
      display: none !important;
    }

    .container {
      padding: 1rem;
    }

    :host {
      --_default-text-color: var(--color-primary-text, #342100);
      --_default-bg-color: var(--color-primary-surface, #e5a427);

      @container style(--surface: dim) {
        --_default-text-color: var(--color-primary-dim-text, #ede1d3);
        --_default-bg-color: var(--color-primary-dim-surface, #543b0f);
      }
    }

    .container {
      --_default-text-color: var(--color-primary-dim-text, #ede1d3);
      --_default-bg-color: var(--color-primary-dim-surface, #543b0f);

      @container not style(--surface: dim) {
        --surface: dim;
      }

      @container style(--surface: dim) {
        --_default-text-color: var(--color-primary-text, #342100);
        --_default-bg-color: var(--color-primary-surface, #e5a427);
        --surface: ;
      }
    }

    hr {
      border: none;
      background: linear-gradient(to right, transparent, #766043, transparent);
      height: 0.0625rem;
      margin: 1rem 0;
    }
  `;

  static properties = {
    surface: {reflect: true},
  };

  render() {
    return html`
      <p>Provider element</p>
      <consumer-element>Consumer in Shadow DOM</consumer-element>
      <slot></slot>
      <hr />
      <div id="A-div" class="container">
        <p><code>native div element:</code> container - provider element</p>
        <consumer-element>Consumer in Shadow DOM</consumer-element>
        <slot name="containerA"></slot>
      </div>
      <hr />
      <div id="B-div" class="container">
        <p><code>native div element:</code> container - provider element</p>
        <consumer-element>Consumer in Shadow DOM</consumer-element>
        <slot name="containerB"></slot>
        <flow-element id="C-div" class="container">
          <p><code>flow-element:</code> nested container - provider element</p>
          <slot name="nested-container"></slot>
          <consumer-element>Consumer in Shadow DOM</consumer-element>
        </flow-element>
      </div>
      <hr />
      <consumer-element>Consumer in Shadow DOM</consumer-element>
    `;
  }
}
customElements.define('provider-element', ProviderElement);
