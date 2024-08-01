import {
  radio_styles_default
} from "./chunk.JHWPIWQW.js";
import {
  e
} from "./chunk.TGM7ILZL.js";
import {
  PIcon
} from "./chunk.ADYZER2Y.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  n,
  r
} from "./chunk.NQC7SG4F.js";
import {
  component_styles_default
} from "./chunk.U7KETH4O.js";
import {
  x
} from "./chunk.N4FVDREO.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/radio/radio.component.ts
var PRadio = class extends PureElement {
  constructor() {
    super();
    this.checked = false;
    this.hasFocus = false;
    this.size = "medium";
    this.disabled = false;
    this.handleBlur = () => {
      this.hasFocus = false;
      this.emit("p-blur");
    };
    this.handleClick = () => {
      if (!this.disabled) {
        this.checked = true;
      }
    };
    this.handleFocus = () => {
      this.hasFocus = true;
      this.emit("p-focus");
    };
    this.addEventListener("blur", this.handleBlur);
    this.addEventListener("click", this.handleClick);
    this.addEventListener("focus", this.handleFocus);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setInitialAttributes();
  }
  setInitialAttributes() {
    this.setAttribute("role", "radio");
    this.setAttribute("tabindex", "-1");
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleCheckedChange() {
    this.setAttribute("aria-checked", this.checked ? "true" : "false");
    this.setAttribute("tabindex", this.checked ? "0" : "-1");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  render() {
    return x`
      <span
        part="base"
        class=${e({
      radio: true,
      "radio--checked": this.checked,
      "radio--disabled": this.disabled,
      "radio--focused": this.hasFocus,
      "radio--small": this.size === "small",
      "radio--medium": this.size === "medium",
      "radio--large": this.size === "large"
    })}
      >
        <span part="${`control${this.checked ? " control--checked" : ""}`}" class="radio__control">
          ${this.checked ? x` <p-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></p-icon> ` : ""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `;
  }
};
PRadio.styles = [component_styles_default, radio_styles_default];
PRadio.dependencies = { "p-icon": PIcon };
__decorateClass([
  r()
], PRadio.prototype, "checked", 2);
__decorateClass([
  r()
], PRadio.prototype, "hasFocus", 2);
__decorateClass([
  n()
], PRadio.prototype, "value", 2);
__decorateClass([
  n({ reflect: true })
], PRadio.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PRadio.prototype, "disabled", 2);
__decorateClass([
  watch("checked")
], PRadio.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], PRadio.prototype, "handleDisabledChange", 1);

export {
  PRadio
};
