import {
  carousel_item_styles_default
} from "./chunk.PIDKCLDC.js";
import {
  PureElement
} from "./chunk.ZOLM25O6.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
import {
  ke
} from "./chunk.XHSHLALN.js";

// src/components/carousel-item/carousel-item.component.ts
var PCarouselItem = class extends PureElement {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "group");
  }
  render() {
    return ke` <slot></slot> `;
  }
};
PCarouselItem.styles = [component_styles_default, carousel_item_styles_default];

export {
  PCarouselItem
};
