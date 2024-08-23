import {
  PSpinner
} from "./chunk.FD4M7TOG.js";
import {
  button_styles_default
} from "./chunk.4HGVEYUI.js";
import {
  FormControlController,
  validValidityState
} from "./chunk.OOSITRNG.js";
import {
  n as n2,
  s
} from "./chunk.RFSUAAU5.js";
import {
  LocalizeController
} from "./chunk.FMGP5ZX5.js";
import {
  o
} from "./chunk.73IAYF2H.js";
import {
  HasSlotController
} from "./chunk.MLXUTV4G.js";
import {
  e
} from "./chunk.CEXDE6O2.js";
import {
  PIcon
} from "./chunk.ARWAQVUI.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  e as e2,
  n,
  r
} from "./chunk.WCGAQMJE.js";
import {
  component_styles_default
} from "./chunk.4LEQW7ML.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/button/button.component.ts
var PButton = class extends PureElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      assumeInteractionOn: ["click"]
    });
    this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
    this.localize = new LocalizeController(this);
    this.hasFocus = false;
    this.invalid = false;
    this.title = "";
    this.variant = "default";
    this.size = "medium";
    this.caret = false;
    this.disabled = false;
    this.loading = false;
    this.outline = false;
    this.pill = false;
    this.circle = false;
    this.type = "button";
    this.name = "";
    this.value = "";
    this.href = "";
    this.rel = "noreferrer noopener";
  }
  /** Gets the validity state object */
  get validity() {
    if (this.isButton()) {
      return this.button.validity;
    }
    return validValidityState;
  }
  /** Gets the validation message */
  get validationMessage() {
    if (this.isButton()) {
      return this.button.validationMessage;
    }
    return "";
  }
  firstUpdated() {
    if (this.isButton()) {
      this.formControlController.updateValidity();
    }
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("p-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("p-focus");
  }
  handleClick() {
    if (this.type === "submit") {
      this.formControlController.submit(this);
    }
    if (this.type === "reset") {
      this.formControlController.reset(this);
    }
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  isButton() {
    return this.href ? false : true;
  }
  isLink() {
    return this.href ? true : false;
  }
  handleDisabledChange() {
    if (this.isButton()) {
      this.formControlController.setValidity(this.disabled);
    }
  }
  /** Simulates a click on the button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the button. */
  focus(options) {
    this.button.focus(options);
  }
  /** Removes focus from the button. */
  blur() {
    this.button.blur();
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    if (this.isButton()) {
      return this.button.checkValidity();
    }
    return true;
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    if (this.isButton()) {
      return this.button.reportValidity();
    }
    return true;
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    if (this.isButton()) {
      this.button.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
  }
  render() {
    const isLink = this.isLink();
    const tag = isLink ? s`a` : s`button`;
    return n2`
      <${tag}
        part="base"
        class=${e({
      button: true,
      "button--default": this.variant === "default",
      "button--primary": this.variant === "primary",
      "button--success": this.variant === "success",
      "button--neutral": this.variant === "neutral",
      "button--warning": this.variant === "warning",
      "button--danger": this.variant === "danger",
      "button--text": this.variant === "text",
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--caret": this.caret,
      "button--circle": this.circle,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--loading": this.loading,
      "button--standard": !this.outline,
      "button--outline": this.outline,
      "button--pill": this.pill,
      "button--rtl": this.localize.dir() === "rtl",
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
        ?disabled=${o(isLink ? void 0 : this.disabled)}
        type=${o(isLink ? void 0 : this.type)}
        title=${this.title}
        name=${o(isLink ? void 0 : this.name)}
        value=${o(isLink ? void 0 : this.value)}
        href=${o(isLink ? this.href : void 0)}
        target=${o(isLink ? this.target : void 0)}
        download=${o(isLink ? this.download : void 0)}
        rel=${o(isLink ? this.rel : void 0)}
        role=${o(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton() ? this.handleInvalid : null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret ? n2` <p-icon part="caret" class="button__caret" library="system" name="caret"></p-icon> ` : ""}
        ${this.loading ? n2`<p-spinner part="spinner"></p-spinner>` : ""}
      </${tag}>
    `;
  }
};
PButton.styles = [component_styles_default, button_styles_default];
PButton.dependencies = {
  "p-icon": PIcon,
  "p-spinner": PSpinner
};
__decorateClass([
  e2(".button")
], PButton.prototype, "button", 2);
__decorateClass([
  r()
], PButton.prototype, "hasFocus", 2);
__decorateClass([
  r()
], PButton.prototype, "invalid", 2);
__decorateClass([
  n()
], PButton.prototype, "title", 2);
__decorateClass([
  n({ reflect: true })
], PButton.prototype, "variant", 2);
__decorateClass([
  n({ reflect: true })
], PButton.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PButton.prototype, "caret", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PButton.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PButton.prototype, "loading", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PButton.prototype, "outline", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PButton.prototype, "pill", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PButton.prototype, "circle", 2);
__decorateClass([
  n()
], PButton.prototype, "type", 2);
__decorateClass([
  n()
], PButton.prototype, "name", 2);
__decorateClass([
  n()
], PButton.prototype, "value", 2);
__decorateClass([
  n()
], PButton.prototype, "href", 2);
__decorateClass([
  n()
], PButton.prototype, "target", 2);
__decorateClass([
  n()
], PButton.prototype, "rel", 2);
__decorateClass([
  n()
], PButton.prototype, "download", 2);
__decorateClass([
  n()
], PButton.prototype, "form", 2);
__decorateClass([
  n({ attribute: "formaction" })
], PButton.prototype, "formAction", 2);
__decorateClass([
  n({ attribute: "formenctype" })
], PButton.prototype, "formEnctype", 2);
__decorateClass([
  n({ attribute: "formmethod" })
], PButton.prototype, "formMethod", 2);
__decorateClass([
  n({ attribute: "formnovalidate", type: Boolean })
], PButton.prototype, "formNoValidate", 2);
__decorateClass([
  n({ attribute: "formtarget" })
], PButton.prototype, "formTarget", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], PButton.prototype, "handleDisabledChange", 1);

export {
  PButton
};
