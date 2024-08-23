import {
  visually_hidden_styles_default
} from "./chunk.S5ZGKO6A.js";
import {
  PureElement
} from "./chunk.QI6KJOCL.js";
import {
  component_styles_default
} from "./chunk.4LEQW7ML.js";
import {
  x
} from "./chunk.YOCEZMWG.js";

// src/components/visually-hidden/visually-hidden.component.ts
var PVisuallyHidden = class extends PureElement {
  render() {
    return x` <slot></slot> `;
  }
};
PVisuallyHidden.styles = [component_styles_default, visually_hidden_styles_default];

export {
  PVisuallyHidden
};
