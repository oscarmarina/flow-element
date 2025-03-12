![Lit](https://img.shields.io/badge/lit-3.0.0-blue.svg)

## `<flow-element>`

https://github.com/lit/lit/discussions/4690

https://bugs.webkit.org/show_bug.cgi?id=289868


### `src/FlowElement.js`:

#### class: `FlowElement`, `flow-element`

##### Fields

| Name             | Privacy | Type | Default                                                                    | Description | Inherited From |
| ---------------- | ------- | ---- | -------------------------------------------------------------------------- | ----------- | -------------- |
| `surface`        | public  |      | `undefined`                                                                |             |                |
| `flowController` |         |      | `new BlockquoteControllerContextMeta(this, { context: consumerContext, })` |             |                |

##### Attributes

| Name      | Field   | Inherited From |
| --------- | ------- | -------------- |
| `surface` | surface |                |

<hr/>

#### Exports

| Kind | Name          | Declaration | Module             | Package |
| ---- | ------------- | ----------- | ------------------ | ------- |
| `js` | `FlowElement` | FlowElement | src/FlowElement.js |         |

### `src/consumer-context.js`:

#### Variables

| Name              | Description | Type |
| ----------------- | ----------- | ---- |
| `consumerContext` |             |      |

<hr/>

#### Exports

| Kind | Name              | Declaration     | Module                  | Package |
| ---- | ----------------- | --------------- | ----------------------- | ------- |
| `js` | `consumerContext` | consumerContext | src/consumer-context.js |         |

### `src/consumer-element.js`:

#### class: `ConsumerElement`, `consumer-element`

##### Fields

| Name              | Privacy | Type | Default                                                                                             | Description | Inherited From |
| ----------------- | ------- | ---- | --------------------------------------------------------------------------------------------------- | ----------- | -------------- |
| `callback`        |         |      |                                                                                                     |             |                |
| `surface`         | public  |      | `undefined`                                                                                         |             |                |
| `propertyContext` |         |      | `new BlockquoteControllerContextMeta(this, { context: consumerContext, callback: this.callback, })` |             |                |

##### Attributes

| Name      | Field   | Inherited From |
| --------- | ------- | -------------- |
| `surface` | surface |                |

<hr/>

#### Exports

| Kind                        | Name               | Declaration     | Module                  | Package |
| --------------------------- | ------------------ | --------------- | ----------------------- | ------- |
| `custom-element-definition` | `consumer-element` | ConsumerElement | src/consumer-element.js |         |

### `src/index.js`:

#### Exports

| Kind | Name          | Declaration | Module           | Package |
| ---- | ------------- | ----------- | ---------------- | ------- |
| `js` | `FlowElement` | FlowElement | ./FlowElement.js |         |

### `src/provider-element.js`:

#### class: `ProviderElement`, `provider-element`

##### Fields

| Name              | Privacy | Type | Default                                                                    | Description | Inherited From |
| ----------------- | ------- | ---- | -------------------------------------------------------------------------- | ----------- | -------------- |
| `surface`         | public  |      | `undefined`                                                                |             |                |
| `propertyContext` |         |      | `new BlockquoteControllerContextMeta(this, { context: consumerContext, })` |             |                |

##### Attributes

| Name      | Field   | Inherited From |
| --------- | ------- | -------------- |
| `surface` | surface |                |

<hr/>

#### Exports

| Kind                        | Name               | Declaration     | Module                  | Package |
| --------------------------- | ------------------ | --------------- | ----------------------- | ------- |
| `custom-element-definition` | `provider-element` | ProviderElement | src/provider-element.js |         |

### `src/define/flow-element.js`:

#### Exports

| Kind                        | Name           | Declaration | Module              | Package |
| --------------------------- | -------------- | ----------- | ------------------- | ------- |
| `custom-element-definition` | `flow-element` | FlowElement | /src/FlowElement.js |         |
