import {
  divider_styles_default
} from "./chunk.XGJ3HNR7.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  n
} from "./chunk.WCGAQMJE.js";
import {
  component_styles_default
} from "./chunk.4LEQW7ML.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/divider/divider.component.ts
var PDivider = class extends PureElement {
  constructor() {
    super(...arguments);
    this.vertical = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "separator");
  }
  handleVerticalChange() {
    this.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
  }
};
PDivider.styles = [component_styles_default, divider_styles_default];
__decorateClass([
  n({ type: Boolean, reflect: true })
], PDivider.prototype, "vertical", 2);
__decorateClass([
  watch("vertical")
], PDivider.prototype, "handleVerticalChange", 1);

export {
  PDivider
};
