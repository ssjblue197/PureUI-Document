import {
  menu_label_styles_default
} from "./chunk.32NA2AQM.js";
import {
  PureElement
} from "./chunk.APLTK2IK.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
import {
  ke
} from "./chunk.XHSHLALN.js";

// src/components/menu-label/menu-label.component.ts
var PMenuLabel = class extends PureElement {
  render() {
    return ke` <slot part="base" class="menu-label"></slot> `;
  }
};
PMenuLabel.styles = [component_styles_default, menu_label_styles_default];

export {
  PMenuLabel
};
