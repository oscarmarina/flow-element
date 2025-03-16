import {css} from 'lit';
import {BaseContextMetaElement} from '@blockquote-web-components/blockquote-controller-context-meta';

export class FlowElement extends BaseContextMetaElement {
  static properties = {
    surface: {reflect: true},
  };

  static styles = [
    super.styles,
    css`
      :host {
        outline: 0.125rem solid #ffd700;
      }
    `,
  ];
}
