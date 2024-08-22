import {
  textarea_styles_default
} from "./chunk.XK44YLL7.js";
import {
  l
} from "./chunk.EIM3EUKO.js";
import {
  defaultValue
} from "./chunk.XHCU632S.js";
import {
  form_control_styles_default
} from "./chunk.IKYLUPM6.js";
import {
  FormControlController
} from "./chunk.OOSITRNG.js";
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
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  e as e2,
  n,
  r
} from "./chunk.2WNLI6SE.js";
import {
  component_styles_default
} from "./chunk.4LEQW7ML.js";
import {
  x
} from "./chunk.YOCEZMWG.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/textarea/textarea.component.ts
var PTextarea = class extends PureElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      assumeInteractionOn: ["p-blur", "p-input"]
    });
    this.hasSlotController = new HasSlotController(this, "help-text", "label");
    this.hasFocus = false;
    this.title = "";
    this.name = "";
    this.value = "";
    this.size = "medium";
    this.filled = false;
    this.label = "";
    this.helpText = "";
    this.placeholder = "";
    this.rows = 4;
    this.resize = "vertical";
    this.disabled = false;
    this.readonly = false;
    this.form = "";
    this.required = false;
    this.spellcheck = true;
    this.defaultValue = "";
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight());
    this.updateComplete.then(() => {
      this.setTextareaHeight();
      this.resizeObserver.observe(this.input);
    });
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.input) {
      this.resizeObserver.unobserve(this.input);
    }
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("p-blur");
  }
  handleChange() {
    this.value = this.input.value;
    this.setTextareaHeight();
    this.emit("p-change");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("p-focus");
  }
  handleInput() {
    this.value = this.input.value;
    this.emit("p-input");
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  setTextareaHeight() {
    if (this.resize === "auto") {
      this.input.style.height = "auto";
      this.input.style.height = `${this.input.scrollHeight}px`;
    } else {
      this.input.style.height = void 0;
    }
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleRowsChange() {
    this.setTextareaHeight();
  }
  async handleValueChange() {
    await this.updateComplete;
    this.formControlController.updateValidity();
    this.setTextareaHeight();
  }
  /** Sets focus on the textarea. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the textarea. */
  blur() {
    this.input.blur();
  }
  /** Selects all the text in the textarea. */
  select() {
    this.input.select();
  }
  /** Gets or sets the textarea's scroll position. */
  scrollPosition(position) {
    if (position) {
      if (typeof position.top === "number")
        this.input.scrollTop = position.top;
      if (typeof position.left === "number")
        this.input.scrollLeft = position.left;
      return void 0;
    }
    return {
      top: this.input.scrollTop,
      left: this.input.scrollTop
    };
  }
  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  /** Replaces a range of text with a new string. */
  setRangeText(replacement, start, end, selectMode = "preserve") {
    const selectionStart = start != null ? start : this.input.selectionStart;
    const selectionEnd = end != null ? end : this.input.selectionEnd;
    this.input.setRangeText(replacement, selectionStart, selectionEnd, selectMode);
    if (this.value !== this.input.value) {
      this.value = this.input.value;
      this.setTextareaHeight();
    }
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    return x`
      <div
        part="form-control"
        class=${e({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${e({
      textarea: true,
      "textarea--small": this.size === "small",
      "textarea--medium": this.size === "medium",
      "textarea--large": this.size === "large",
      "textarea--standard": !this.filled,
      "textarea--filled": this.filled,
      "textarea--disabled": this.disabled,
      "textarea--focused": this.hasFocus,
      "textarea--empty": !this.value,
      "textarea--resize-none": this.resize === "none",
      "textarea--resize-vertical": this.resize === "vertical",
      "textarea--resize-auto": this.resize === "auto"
    })}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${o(this.name)}
              .value=${l(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${o(this.placeholder)}
              rows=${o(this.rows)}
              minlength=${o(this.minlength)}
              maxlength=${o(this.maxlength)}
              autocapitalize=${o(this.autocapitalize)}
              autocorrect=${o(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${o(this.spellcheck)}
              enterkeyhint=${o(this.enterkeyhint)}
              inputmode=${o(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
PTextarea.styles = [component_styles_default, form_control_styles_default, textarea_styles_default];
__decorateClass([
  e2(".textarea__control")
], PTextarea.prototype, "input", 2);
__decorateClass([
  r()
], PTextarea.prototype, "hasFocus", 2);
__decorateClass([
  n()
], PTextarea.prototype, "title", 2);
__decorateClass([
  n()
], PTextarea.prototype, "name", 2);
__decorateClass([
  n()
], PTextarea.prototype, "value", 2);
__decorateClass([
  n({ reflect: true })
], PTextarea.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PTextarea.prototype, "filled", 2);
__decorateClass([
  n()
], PTextarea.prototype, "label", 2);
__decorateClass([
  n({ attribute: "help-text" })
], PTextarea.prototype, "helpText", 2);
__decorateClass([
  n()
], PTextarea.prototype, "placeholder", 2);
__decorateClass([
  n({ type: Number })
], PTextarea.prototype, "rows", 2);
__decorateClass([
  n()
], PTextarea.prototype, "resize", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PTextarea.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PTextarea.prototype, "readonly", 2);
__decorateClass([
  n({ reflect: true })
], PTextarea.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PTextarea.prototype, "required", 2);
__decorateClass([
  n({ type: Number })
], PTextarea.prototype, "minlength", 2);
__decorateClass([
  n({ type: Number })
], PTextarea.prototype, "maxlength", 2);
__decorateClass([
  n()
], PTextarea.prototype, "autocapitalize", 2);
__decorateClass([
  n()
], PTextarea.prototype, "autocorrect", 2);
__decorateClass([
  n()
], PTextarea.prototype, "autocomplete", 2);
__decorateClass([
  n({ type: Boolean })
], PTextarea.prototype, "autofocus", 2);
__decorateClass([
  n()
], PTextarea.prototype, "enterkeyhint", 2);
__decorateClass([
  n({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (value) => !value || value === "false" ? false : true,
      toAttribute: (value) => value ? "true" : "false"
    }
  })
], PTextarea.prototype, "spellcheck", 2);
__decorateClass([
  n()
], PTextarea.prototype, "inputmode", 2);
__decorateClass([
  defaultValue()
], PTextarea.prototype, "defaultValue", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], PTextarea.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("rows", { waitUntilFirstUpdate: true })
], PTextarea.prototype, "handleRowsChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], PTextarea.prototype, "handleValueChange", 1);

export {
  PTextarea
};
