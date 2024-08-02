import {
  range_styles_default
} from "./chunk.N3BWCE2K.js";
import {
  l
} from "./chunk.UMY5JZS5.js";
import {
  defaultValue
} from "./chunk.VEGLXO4Q.js";
import {
  form_control_styles_default
} from "./chunk.2UUTT5IX.js";
import {
  FormControlController
} from "./chunk.2VQUZCFM.js";
import {
  o
} from "./chunk.F2SYCU5S.js";
import {
  HasSlotController
} from "./chunk.VWMKJPVE.js";
import {
  e
} from "./chunk.TGM7ILZL.js";
import {
  LocalizeController
} from "./chunk.6BMNUR6W.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  e as e2,
  n,
  r,
  t
} from "./chunk.HDLBJYVW.js";
import {
  component_styles_default
} from "./chunk.U7KETH4O.js";
import {
  x
} from "./chunk.N4FVDREO.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/range/range.component.ts
var PRange = class extends PureElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this);
    this.hasSlotController = new HasSlotController(this, "help-text", "label");
    this.localize = new LocalizeController(this);
    this.hasFocus = false;
    this.hasTooltip = false;
    this.title = "";
    this.name = "";
    this.value = 0;
    this.label = "";
    this.helpText = "";
    this.disabled = false;
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.tooltip = "top";
    this.tooltipFormatter = (value) => value.toString();
    this.form = "";
    this.defaultValue = 0;
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
    this.resizeObserver = new ResizeObserver(() => this.syncRange());
    if (this.value < this.min) {
      this.value = this.min;
    }
    if (this.value > this.max) {
      this.value = this.max;
    }
    this.updateComplete.then(() => {
      this.syncRange();
      this.resizeObserver.observe(this.input);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this.input);
  }
  handleChange() {
    this.emit("p-change");
  }
  handleInput() {
    this.value = parseFloat(this.input.value);
    this.emit("p-input");
    this.syncRange();
  }
  handleBlur() {
    this.hasFocus = false;
    this.hasTooltip = false;
    this.emit("p-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    this.hasTooltip = true;
    this.emit("p-focus");
  }
  handleThumbDragStart() {
    this.hasTooltip = true;
  }
  handleThumbDragEnd() {
    this.hasTooltip = false;
  }
  syncProgress(percent) {
    this.input.style.setProperty("--percent", `${percent * 100}%`);
  }
  syncTooltip(percent) {
    if (this.output !== null) {
      const inputWidth = this.input.offsetWidth;
      const tooltipWidth = this.output.offsetWidth;
      const thumbSize = getComputedStyle(this.input).getPropertyValue("--thumb-size");
      const isRtl = this.matches(":dir(rtl)");
      const percentAsWidth = inputWidth * percent;
      if (isRtl) {
        const x2 = `${inputWidth - percentAsWidth}px + ${percent} * ${thumbSize}`;
        this.output.style.translate = `calc((${x2} - ${tooltipWidth / 2}px - ${thumbSize} / 2))`;
      } else {
        const x2 = `${percentAsWidth}px - ${percent} * ${thumbSize}`;
        this.output.style.translate = `calc(${x2} - ${tooltipWidth / 2}px + ${thumbSize} / 2)`;
      }
    }
  }
  handleValueChange() {
    this.formControlController.updateValidity();
    this.input.value = this.value.toString();
    this.value = parseFloat(this.input.value);
    this.syncRange();
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  syncRange() {
    const percent = Math.max(0, (this.value - this.min) / (this.max - this.min));
    this.syncProgress(percent);
    if (this.tooltip !== "none") {
      this.updateComplete.then(() => this.syncTooltip(percent));
    }
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  /** Sets focus on the range. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the range. */
  blur() {
    this.input.blur();
  }
  /** Increments the value of the range by the value of the step attribute. */
  stepUp() {
    this.input.stepUp();
    if (this.value !== Number(this.input.value)) {
      this.value = Number(this.input.value);
    }
  }
  /** Decrements the value of the range by the value of the step attribute. */
  stepDown() {
    this.input.stepDown();
    if (this.value !== Number(this.input.value)) {
      this.value = Number(this.input.value);
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
      "form-control--medium": true,
      // range only has one size
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
      range: true,
      "range--disabled": this.disabled,
      "range--focused": this.hasFocus,
      "range--rtl": this.localize.dir() === "rtl",
      "range--tooltip-visible": this.hasTooltip,
      "range--tooltip-top": this.tooltip === "top",
      "range--tooltip-bottom": this.tooltip === "bottom"
    })}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${o(this.name)}
              ?disabled=${this.disabled}
              min=${o(this.min)}
              max=${o(this.max)}
              step=${o(this.step)}
              .value=${l(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip !== "none" && !this.disabled ? x`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter === "function" ? this.tooltipFormatter(this.value) : this.value}
                  </output>
                ` : ""}
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
PRange.styles = [component_styles_default, form_control_styles_default, range_styles_default];
__decorateClass([
  e2(".range__control")
], PRange.prototype, "input", 2);
__decorateClass([
  e2(".range__tooltip")
], PRange.prototype, "output", 2);
__decorateClass([
  r()
], PRange.prototype, "hasFocus", 2);
__decorateClass([
  r()
], PRange.prototype, "hasTooltip", 2);
__decorateClass([
  n()
], PRange.prototype, "title", 2);
__decorateClass([
  n()
], PRange.prototype, "name", 2);
__decorateClass([
  n({ type: Number })
], PRange.prototype, "value", 2);
__decorateClass([
  n()
], PRange.prototype, "label", 2);
__decorateClass([
  n({ attribute: "help-text" })
], PRange.prototype, "helpText", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PRange.prototype, "disabled", 2);
__decorateClass([
  n({ type: Number })
], PRange.prototype, "min", 2);
__decorateClass([
  n({ type: Number })
], PRange.prototype, "max", 2);
__decorateClass([
  n({ type: Number })
], PRange.prototype, "step", 2);
__decorateClass([
  n()
], PRange.prototype, "tooltip", 2);
__decorateClass([
  n({ attribute: false })
], PRange.prototype, "tooltipFormatter", 2);
__decorateClass([
  n({ reflect: true })
], PRange.prototype, "form", 2);
__decorateClass([
  defaultValue()
], PRange.prototype, "defaultValue", 2);
__decorateClass([
  t({ passive: true })
], PRange.prototype, "handleThumbDragStart", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], PRange.prototype, "handleValueChange", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], PRange.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("hasTooltip", { waitUntilFirstUpdate: true })
], PRange.prototype, "syncRange", 1);

export {
  PRange
};
