import {
  icon_button_styles_default
} from "./chunk.HE2R23FK.js";
import {
  er,
  ke
} from "./chunk.V7W45QBZ.js";
import {
  to
} from "./chunk.DQNILPUT.js";
import {
  Rt
} from "./chunk.A56LY5J2.js";
import {
  PIcon
} from "./chunk.FZEBYU6T.js";
import {
  PureElement,
  e,
  n,
  r
} from "./chunk.ZOLM25O6.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
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
    const tag = isLink ? er`a` : er`button`;
    return ke`
      <${tag}
        part="base"
        class=${Rt({
      "icon-button": true,
      "icon-button--disabled": !isLink && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${to(isLink ? void 0 : this.disabled)}
        type=${to(isLink ? void 0 : "button")}
        href=${to(isLink ? this.href : void 0)}
        target=${to(isLink ? this.target : void 0)}
        download=${to(isLink ? this.download : void 0)}
        rel=${to(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${to(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <p-icon
          class="icon-button__icon"
          name=${to(this.name)}
          library=${to(this.library)}
          src=${to(this.src)}
          aria-hidden="true"
        ></p-icon>
      </${tag}>
    `;
  }
};
PIconButton.styles = [component_styles_default, icon_button_styles_default];
PIconButton.dependencies = { "p-icon": PIcon };
__decorateClass([
  e(".icon-button")
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
