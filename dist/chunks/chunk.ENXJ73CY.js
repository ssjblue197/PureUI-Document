import {
  option_styles_default
} from "./chunk.J7UTRKDN.js";
import {
  LocalizeController
} from "./chunk.FMGP5ZX5.js";
import {
  e
} from "./chunk.CEXDE6O2.js";
import {
  PIcon
} from "./chunk.OHNLE4XV.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  e as e2,
  n,
  r
} from "./chunk.CXJCNOP2.js";
import {
  component_styles_default
} from "./chunk.4LEQW7ML.js";
import {
  x
} from "./chunk.YOCEZMWG.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/option/option.component.ts
var POption = class extends PureElement {
  constructor() {
    super(...arguments);
    // @ts-expect-error - Controller is currently unused
    this.localize = new LocalizeController(this);
    this.current = false;
    this.selected = false;
    this.hasHover = false;
    this.hidden = false;
    this.value = "";
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "option");
    this.setAttribute("aria-selected", "false");
  }
  handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();
    if (typeof this.cachedTextLabel === "undefined") {
      this.cachedTextLabel = textLabel;
      return;
    }
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit("slotchange", {
        bubbles: true,
        composed: false,
        cancelable: false
      });
    }
  }
  handleMouseEnter() {
    this.hasHover = true;
  }
  handleMouseLeave() {
    this.hasHover = false;
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleValueChange() {
    if (typeof this.value !== "string") {
      this.value = String(this.value);
    }
    if (this.value.includes(" ")) {
      console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`, this);
      this.value = this.value.replace(/ /g, "_");
    }
  }
  /** Returns a plain text label based on the option's content. */
  getTextLabel() {
    const nodes = this.childNodes;
    let label = "";
    [...nodes].forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        if (!node.hasAttribute("slot")) {
          label += node.textContent;
        }
      }
      if (node.nodeType === Node.TEXT_NODE) {
        label += node.textContent;
      }
    });
    return label.trim();
  }
  render() {
    return x`
      <div
        part="base"
        class=${e({
      option: true,
      "option--current": this.current,
      "option--disabled": this.disabled,
      "option--selected": this.selected,
      "option--hover": this.hasHover,
      "option--hidden": this.hidden
    })}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <p-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></p-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `;
  }
};
POption.styles = [component_styles_default, option_styles_default];
POption.dependencies = { "p-icon": PIcon };
__decorateClass([
  e2(".option__label")
], POption.prototype, "defaultSlot", 2);
__decorateClass([
  r()
], POption.prototype, "current", 2);
__decorateClass([
  r()
], POption.prototype, "selected", 2);
__decorateClass([
  r()
], POption.prototype, "hasHover", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], POption.prototype, "hidden", 2);
__decorateClass([
  n({ reflect: true })
], POption.prototype, "value", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], POption.prototype, "disabled", 2);
__decorateClass([
  watch("disabled")
], POption.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("selected")
], POption.prototype, "handleSelectedChange", 1);
__decorateClass([
  watch("value")
], POption.prototype, "handleValueChange", 1);

export {
  POption
};
