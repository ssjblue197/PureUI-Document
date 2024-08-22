import {
  icon_button_styles_default
} from "./chunk.7VQU7T24.js";
import {
  n as n2,
  s
} from "./chunk.RFSUAAU5.js";
import {
  o
} from "./chunk.73IAYF2H.js";
import {
  e
} from "./chunk.CEXDE6O2.js";
import {
  PIcon
} from "./chunk.GLZWKDK3.js";
import {
  PureElement,
  e as e2,
  n,
  r
} from "./chunk.I7DGGRXW.js";
import {
  component_styles_default
} from "./chunk.4LEQW7ML.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/icon-button/icon-button.component.ts
var PIconButton = class extends PureElement {
  constructor() {
    super(...arguments);
    this.hasFocus = false;
    this.label = "";
    this.disabled = false;
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("p-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("p-focus");
  }
  handleClick(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the icon button. */
  focus(options) {
    this.button.focus(options);
  }
  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }
  render() {
    const isLink = this.href ? true : false;
    const tag = isLink ? s`a` : s`button`;
    return n2`
      <${tag}
        part="base"
        class=${e({
      "icon-button": true,
      "icon-button--disabled": !isLink && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${o(isLink ? void 0 : this.disabled)}
        type=${o(isLink ? void 0 : "button")}
        href=${o(isLink ? this.href : void 0)}
        target=${o(isLink ? this.target : void 0)}
        download=${o(isLink ? this.download : void 0)}
        rel=${o(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${o(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <p-icon
          class="icon-button__icon"
          name=${o(this.name)}
          library=${o(this.library)}
          src=${o(this.src)}
          aria-hidden="true"
        ></p-icon>
      </${tag}>
    `;
  }
};
PIconButton.styles = [component_styles_default, icon_button_styles_default];
PIconButton.dependencies = { "p-icon": PIcon };
__decorateClass([
  e2(".icon-button")
], PIconButton.prototype, "button", 2);
__decorateClass([
  r()
], PIconButton.prototype, "hasFocus", 2);
__decorateClass([
  n()
], PIconButton.prototype, "name", 2);
__decorateClass([
  n()
], PIconButton.prototype, "library", 2);
__decorateClass([
  n()
], PIconButton.prototype, "src", 2);
__decorateClass([
  n()
], PIconButton.prototype, "href", 2);
__decorateClass([
  n()
], PIconButton.prototype, "target", 2);
__decorateClass([
  n()
], PIconButton.prototype, "download", 2);
__decorateClass([
  n()
], PIconButton.prototype, "label", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PIconButton.prototype, "disabled", 2);

export {
  PIconButton
};
