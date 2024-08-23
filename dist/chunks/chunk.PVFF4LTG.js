import {
  menu_label_styles_default
} from "./chunk.24CP7RLQ.js";
import {
  PureElement
} from "./chunk.QI6KJOCL.js";
import {
  component_styles_default
} from "./chunk.4LEQW7ML.js";
import {
  x
} from "./chunk.YOCEZMWG.js";

// src/components/menu-label/menu-label.component.ts
var PMenuLabel = class extends PureElement {
  render() {
    return x` <slot part="base" class="menu-label"></slot> `;
  }
};
PMenuLabel.styles = [component_styles_default, menu_label_styles_default];

export {
  PMenuLabel
};
