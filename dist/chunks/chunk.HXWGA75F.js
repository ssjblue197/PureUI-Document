import {
  button_group_styles_default
} from "./chunk.QJAWLLMK.js";
import {
  PureElement,
  e,
  n,
  r
} from "./chunk.KS3X6AEV.js";
import {
  component_styles_default
} from "./chunk.U7KETH4O.js";
import {
  x
} from "./chunk.N4FVDREO.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/button-group/button-group.component.ts
var PButtonGroup = class extends PureElement {
  constructor() {
    super(...arguments);
    this.disableRole = false;
    this.label = "";
  }
  handleFocus(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.toggleAttribute("data-p-button-group__button--focus", true);
  }
  handleBlur(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.toggleAttribute("data-p-button-group__button--focus", false);
  }
  handleMouseOver(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.toggleAttribute("data-p-button-group__button--hover", true);
  }
  handleMouseOut(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.toggleAttribute("data-p-button-group__button--hover", false);
  }
  handleSlotChange() {
    const slottedElements = [...this.defaultSlot.assignedElements({ flatten: true })];
    slottedElements.forEach((el) => {
      const index = slottedElements.indexOf(el);
      const button = findButton(el);
      if (button) {
        button.toggleAttribute("data-p-button-group__button", true);
        button.toggleAttribute("data-p-button-group__button--first", index === 0);
        button.toggleAttribute("data-p-button-group__button--inner", index > 0 && index < slottedElements.length - 1);
        button.toggleAttribute("data-p-button-group__button--last", index === slottedElements.length - 1);
        button.toggleAttribute("data-p-button-group__button--radio", button.tagName.toLowerCase() === "p-radio-button");
      }
    });
  }
  render() {
    return x`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole ? "presentation" : "group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
};
PButtonGroup.styles = [component_styles_default, button_group_styles_default];
__decorateClass([
  e("slot")
], PButtonGroup.prototype, "defaultSlot", 2);
__decorateClass([
  r()
], PButtonGroup.prototype, "disableRole", 2);
__decorateClass([
  n()
], PButtonGroup.prototype, "label", 2);
function findButton(el) {
  var _a;
  const selector = "p-button, p-radio-button";
  return (_a = el.closest(selector)) != null ? _a : el.querySelector(selector);
}

export {
  PButtonGroup
};
