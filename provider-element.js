import { LitElement, html, css } from 'lit';
import { BlockquoteControllerContextMeta } from '@blockquote-web-components/blockquote-controller-context-meta';
import { consumerContext } from './consumer-context.js';
import './flow-element.js';
import './consumer-element.js';

const handleSurface = surface => {
  switch (surface) {
    case 'dim':
      return 'bright';
    default:
      return 'dim';
  }
};

class ProviderElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      contain: content;
      padding: 0.5rem 1rem;
      contain: content;
    }

    :host([hidden]),
    [hidden] {
      display: none !important;
    }

    .container,
    .nested-container {
      padding: 1rem;
    }

    :host(:not([surface='dim'])),
    :host([surface='dim']) .container,
    :host(:not([surface='dim'])) .nested-container {
      background-color: #e5a427;
      color: #342100;
    }

    :host([surface='dim']),
    :host(:not([surface='dim'])) .container,
    :host([surface='dim']) .nested-container {
      background-color: #543b0f;
      color: #ede1d3;
    }

    hr {
      border: none;
      background: linear-gradient(to right, transparent, #3f382f, transparent);
      height: 0.0625rem;
      margin: 1rem 0;
    }
  `;

  static properties = {
    surface: { reflect: true },
  };

  constructor() {
    super();
    this.surface = undefined;
    this.propertyContext = new BlockquoteControllerContextMeta(this, {
      context: consumerContext,
    });
  }

  willUpdate(props) {
    super.willUpdate?.(props);
    if (props.has('surface')) {
      this.propertyContext.setValue(this.surface);
    }
  }

  render() {
    return html`
      <p>Provider element</p>
      <consumer-element>Consumer in Shadow DOM</consumer-element>
      <slot></slot>
      <hr />
      <flow-element id="A" class="container" .surface="${handleSurface(this.surface)}">
        <p><code>flow-element:</code> container - provider element</p>
        <consumer-element>Consumer in Shadow DOM</consumer-element>
        <slot name="container"></slot>
        <flow-element id="B" class="nested-container" .surface="${this.surface}">
          <p><code>flow-element:</code> nested container - provider element</p>
          <slot name="nested-container"></slot>
          <consumer-element>Consumer in Shadow DOM</consumer-element>
        </flow-element>
      </flow-element>
      <hr />
      <consumer-element>Consumer in Shadow DOM</consumer-element>
    `;
  }
}
customElements.define('provider-element', ProviderElement);
