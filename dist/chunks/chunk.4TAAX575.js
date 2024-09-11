import {
  radio_button_styles_default
} from "./chunk.FTMJ3IIF.js";
import {
  ke
} from "./chunk.V7W45QBZ.js";
import {
  to
} from "./chunk.DQNILPUT.js";
import {
  HasSlotController
} from "./chunk.MLXUTV4G.js";
import {
  Rt
} from "./chunk.A56LY5J2.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  e,
  n,
  r
} from "./chunk.BWFHTNIR.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/radio-button/radio-button.component.ts
var PRadioButton = class extends PureElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
    this.hasFocus = false;
    this.checked = false;
    this.disabled = false;
    this.size = "medium";
    this.pill = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "presentation");
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("p-blur");
  }
  handleClick(e2) {
    if (this.disabled) {
      e2.preventDefault();
      e2.stopPropagation();
      return;
    }
    this.checked = true;
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("p-focus");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  /** Sets focus on the radio button. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the radio button. */
  blur() {
    this.input.blur();
  }
  render() {
    return ke`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked ? " button--checked" : ""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${Rt({
      button: true,
      "button--default": true,
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--checked": this.checked,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--outline": true,
      "button--pill": this.pill,
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
          aria-disabled=${this.disabled}
          type="button"
          value=${to(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `;
  }
};
PRadioButton.styles = [component_styles_default, radio_button_styles_default];
__decorateClass([
  e(".button")
], PRadioButton.prototype, "input", 2);
__decorateClass([
  e(".hidden-input")
], PRadioButton.prototype, "hiddenInput", 2);
__decorateClass([
  r()
], PRadioButton.prototype, "hasFocus", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PRadioButton.prototype, "checked", 2);
__decorateClass([
  n()
], PRadioButton.prototype, "value", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PRadioButton.prototype, "disabled", 2);
__decorateClass([
  n({ reflect: true })
], PRadioButton.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PRadioButton.prototype, "pill", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], PRadioButton.prototype, "handleDisabledChange", 1);

export {
  PRadioButton
};
