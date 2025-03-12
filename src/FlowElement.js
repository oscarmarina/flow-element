import {
  BlockquoteControllerContextMeta,
  BaseContextMetaElement,
} from '@blockquote-web-components/blockquote-controller-context-meta';
import {consumerContext} from './consumer-context.js';

/**
 * ![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)
 *
 * ## `<flow-element>`
 *
 * https://github.com/lit/lit/discussions/4690
 *
 * https://bugs.webkit.org/show_bug.cgi?id=289868
 */
export class FlowElement extends BaseContextMetaElement {
  static properties = {
    surface: {reflect: true},
  };

  constructor() {
    super();
    this.surface = undefined;

    this.flowController = new BlockquoteControllerContextMeta(this, {
      context: consumerContext,
    });
  }

  willUpdate(props) {
    super.willUpdate?.(props);
    if (props.has('surface')) {
      this.flowController?.setValue(this.surface);
    }
  }
}
