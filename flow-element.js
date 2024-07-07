import { BaseContextMetaElement } from '@blockquote-web-components/blockquote-controller-context-meta';
import { consumerContext } from './consumer-context.js';

export class FlownElement extends BaseContextMetaElement {
  static properties = {
    surface: { reflect: true },
  };

  constructor() {
    super();
    this.surface = undefined;
    this.flowController = this.initOrGetContextProvider(consumerContext);
  }

  willUpdate(props) {
    super.willUpdate?.(props);
    if (props.has('surface')) {
      this.flowController?.setValue(this.surface);
    }
  }
}

customElements.define('flow-element', FlownElement);

