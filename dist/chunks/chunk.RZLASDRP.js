import {
  radio_group_styles_default
} from "./chunk.B4NXU6TF.js";
import {
  PButtonGroup
} from "./chunk.JZ2ZYMLZ.js";
import {
  form_control_styles_default
} from "./chunk.NOMFDPO5.js";
import {
  FormControlController,
  customErrorValidityState,
  validValidityState,
  valueMissingValidityState
} from "./chunk.SW6OGP3X.js";
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
  ke
} from "./chunk.XHSHLALN.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/radio-group/radio-group.component.ts
var PRadioGroup = class extends PureElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this);
    this.hasSlotController = new HasSlotController(this, "help-text", "label");
    this.customValidityMessage = "";
    this.hasButtonGroup = false;
    this.errorMessage = "";
    this.defaultValue = "";
    this.label = "";
    this.helpText = "";
    this.name = "option";
    this.value = "";
    this.size = "medium";
    this.form = "";
    this.required = false;
  }
  /** Gets the validity state object */
  get validity() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== "";
    if (hasCustomValidityMessage) {
      return customErrorValidityState;
    } else if (isRequiredAndEmpty) {
      return valueMissingValidityState;
    }
    return validValidityState;
  }
  /** Gets the validation message */
  get validationMessage() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== "";
    if (hasCustomValidityMessage) {
      return this.customValidityMessage;
    } else if (isRequiredAndEmpty) {
      return this.validationInput.validationMessage;
    }
    return "";
  }
  connectedCallback() {
    super.connectedCallback();
    this.defaultValue = this.value;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  getAllRadios() {
    return [...this.querySelectorAll("p-radio, p-radio-button")];
  }
  handleRadioClick(event) {
    const target = event.target.closest("p-radio, p-radio-button");
    const radios = this.getAllRadios();
    const oldValue = this.value;
    if (!target || target.disabled) {
      return;
    }
    this.value = target.value;
    radios.forEach((radio) => radio.checked = radio === target);
    if (this.value !== oldValue) {
      this.emit("p-change");
      this.emit("p-input");
    }
  }
  handleKeyDown(event) {
    var _a;
    if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key)) {
      return;
    }
    const radios = this.getAllRadios().filter((radio) => !radio.disabled);
    const checkedRadio = (_a = radios.find((radio) => radio.checked)) != null ? _a : radios[0];
    const incr = event.key === " " ? 0 : ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
    const oldValue = this.value;
    let index = radios.indexOf(checkedRadio) + incr;
    if (index < 0) {
      index = radios.length - 1;
    }
    if (index > radios.length - 1) {
      index = 0;
    }
    this.getAllRadios().forEach((radio) => {
      radio.checked = false;
      if (!this.hasButtonGroup) {
        radio.setAttribute("tabindex", "-1");
      }
    });
    this.value = radios[index].value;
    radios[index].checked = true;
    if (!this.hasButtonGroup) {
      radios[index].setAttribute("tabindex", "0");
      radios[index].focus();
    } else {
      radios[index].shadowRoot.querySelector("button").focus();
    }
    if (this.value !== oldValue) {
      this.emit("p-change");
      this.emit("p-input");
    }
    event.preventDefault();
  }
  handleLabelClick() {
    const radios = this.getAllRadios();
    const checked = radios.find((radio) => radio.checked);
    const radioToFocus = checked || radios[0];
    if (radioToFocus) {
      radioToFocus.focus();
    }
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  async syncRadioElements() {
    var _a, _b;
    const radios = this.getAllRadios();
    await Promise.all(
      // Sync the checked state and size
      radios.map(async (radio) => {
        await radio.updateComplete;
        radio.checked = radio.value === this.value;
        radio.size = this.size;
      })
    );
    this.hasButtonGroup = radios.some((radio) => radio.tagName.toLowerCase() === "p-radio-button");
    if (radios.length > 0 && !radios.some((radio) => radio.checked)) {
      if (this.hasButtonGroup) {
        const buttonRadio = (_a = radios[0].shadowRoot) == null ? void 0 : _a.querySelector("button");
        if (buttonRadio) {
          buttonRadio.setAttribute("tabindex", "0");
        }
      } else {
        radios[0].setAttribute("tabindex", "0");
      }
    }
    if (this.hasButtonGroup) {
      const buttonGroup = (_b = this.shadowRoot) == null ? void 0 : _b.querySelector("p-button-group");
      if (buttonGroup) {
        buttonGroup.disableRole = true;
      }
    }
  }
  syncRadios() {
    if (customElements.get("p-radio") && customElements.get("p-radio-button")) {
      this.syncRadioElements();
      return;
    }
    if (customElements.get("p-radio")) {
      this.syncRadioElements();
    } else {
      customElements.whenDefined("p-radio").then(() => this.syncRadios());
    }
    if (customElements.get("p-radio-button")) {
      this.syncRadioElements();
    } else {
      customElements.whenDefined("p-radio-button").then(() => this.syncRadios());
    }
  }
  updateCheckedRadio() {
    const radios = this.getAllRadios();
    radios.forEach((radio) => radio.checked = radio.value === this.value);
    this.formControlController.setValidity(this.validity.valid);
  }
  handleSizeChange() {
    this.syncRadios();
  }
  handleValueChange() {
    if (this.hasUpdated) {
      this.updateCheckedRadio();
    }
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    const isRequiredAndEmpty = this.required && !this.value;
    const hasCustomValidityMessage = this.customValidityMessage !== "";
    if (isRequiredAndEmpty || hasCustomValidityMessage) {
      this.formControlController.emitInvalidEvent();
      return false;
    }
    return true;
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    const isValid = this.validity.valid;
    this.errorMessage = this.customValidityMessage || isValid ? "" : this.validationInput.validationMessage;
    this.formControlController.setValidity(isValid);
    this.validationInput.hidden = true;
    clearTimeout(this.validationTimeout);
    if (!isValid) {
      this.validationInput.hidden = false;
      this.validationInput.reportValidity();
      this.validationTimeout = setTimeout(() => this.validationInput.hidden = true, 1e4);
    }
    return isValid;
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message = "") {
    this.customValidityMessage = message;
    this.errorMessage = message;
    this.validationInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const defaultSlot = ke`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;
    return ke`
      <fieldset
        part="form-control"
        class=${Rt({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--radio-group": true,
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup ? ke`
                <p-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${defaultSlot}
                </p-button-group>
              ` : defaultSlot}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `;
  }
};
PRadioGroup.styles = [component_styles_default, form_control_styles_default, radio_group_styles_default];
PRadioGroup.dependencies = { "p-button-group": PButtonGroup };
__decorateClass([
  e("slot:not([name])")
], PRadioGroup.prototype, "defaultSlot", 2);
__decorateClass([
  e(".radio-group__validation-input")
], PRadioGroup.prototype, "validationInput", 2);
__decorateClass([
  r()
], PRadioGroup.prototype, "hasButtonGroup", 2);
__decorateClass([
  r()
], PRadioGroup.prototype, "errorMessage", 2);
__decorateClass([
  r()
], PRadioGroup.prototype, "defaultValue", 2);
__decorateClass([
  n()
], PRadioGroup.prototype, "label", 2);
__decorateClass([
  n({ attribute: "help-text" })
], PRadioGroup.prototype, "helpText", 2);
__decorateClass([
  n()
], PRadioGroup.prototype, "name", 2);
__decorateClass([
  n({ reflect: true })
], PRadioGroup.prototype, "value", 2);
__decorateClass([
  n({ reflect: true })
], PRadioGroup.prototype, "size", 2);
__decorateClass([
  n({ reflect: true })
], PRadioGroup.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PRadioGroup.prototype, "required", 2);
__decorateClass([
  watch("size", { waitUntilFirstUpdate: true })
], PRadioGroup.prototype, "handleSizeChange", 1);
__decorateClass([
  watch("value")
], PRadioGroup.prototype, "handleValueChange", 1);

export {
  PRadioGroup
};
