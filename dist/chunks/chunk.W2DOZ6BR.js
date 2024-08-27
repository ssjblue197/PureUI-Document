import {
  carousel_item_styles_default
} from "./chunk.2FGN24KG.js";
import {
  PureElement
} from "./chunk.6XQUAQ6V.js";
import {
  component_styles_default
} from "./chunk.4LEQW7ML.js";
import {
  x
} from "./chunk.YOCEZMWG.js";

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
