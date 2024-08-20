import {
  carousel_item_styles_default
} from "./chunk.LYKVN6N4.js";
import {
  PureElement
} from "./chunk.F7OLFLXT.js";
import {
  component_styles_default
} from "./chunk.U7KETH4O.js";
import {
  x
} from "./chunk.N4FVDREO.js";

// src/components/carousel-item/carousel-item.component.ts
var PCarouselItem = class extends PureElement {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "group");
  }
  render() {
    return x` <slot></slot> `;
  }
};
PCarouselItem.styles = [component_styles_default, carousel_item_styles_default];

export {
  PCarouselItem
};
