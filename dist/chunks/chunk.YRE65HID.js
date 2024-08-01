import {
  menu_label_styles_default
} from "./chunk.XBFXLY6Z.js";
import {
  PureElement
} from "./chunk.POVQYKF3.js";
import {
  component_styles_default
} from "./chunk.U7KETH4O.js";
import {
  x
} from "./chunk.N4FVDREO.js";

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
