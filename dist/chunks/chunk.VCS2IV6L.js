import {
  visually_hidden_styles_default
} from "./chunk.J5FFFMEI.js";
import {
  PureElement
} from "./chunk.Z3CEAGLD.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
import {
  ke
} from "./chunk.XHSHLALN.js";

// src/components/visually-hidden/visually-hidden.component.ts
var PVisuallyHidden = class extends PureElement {
  render() {
    return ke` <slot></slot> `;
  }
};
PVisuallyHidden.styles = [component_styles_default, visually_hidden_styles_default];

export {
  PVisuallyHidden
};
