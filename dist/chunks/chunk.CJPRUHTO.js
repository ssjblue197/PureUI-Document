import {
  select_styles_default
} from "./chunk.OJBXYWD2.js";
import {
  scrollIntoView
} from "./chunk.TQQ6S3EH.js";
import {
  debounce
} from "./chunk.NOWCQZBS.js";
import {
  PTag
} from "./chunk.O6CSDKEU.js";
import {
  ae
} from "./chunk.6JBGXCYU.js";
import {
  PPopup
} from "./chunk.2MF7KCU4.js";
import {
  defaultValue
} from "./chunk.PGG27OMY.js";
import {
  form_control_styles_default
} from "./chunk.NOMFDPO5.js";
import {
  FormControlController
} from "./chunk.OOSITRNG.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.F6XYW4W5.js";
import {
  waitForEvent
} from "./chunk.B4BZKR24.js";
import {
  animateTo,
  stopAnimations
} from "./chunk.S7GYYU7Z.js";
import {
  LocalizeController
} from "./chunk.55R7PUQN.js";
import {
  HasSlotController
} from "./chunk.MLXUTV4G.js";
import {
  Rt
} from "./chunk.A56LY5J2.js";
import {
  PIcon
} from "./chunk.FZEBYU6T.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
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
  Q,
  ke
} from "./chunk.XHSHLALN.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/select/select.component.ts
var PSelect = class extends PureElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      assumeInteractionOn: ["p-blur", "p-input"]
    });
    this.hasSlotController = new HasSlotController(this, "help-text", "label");
    this.localize = new LocalizeController(this);
    this.keyword = "";
    this.hasFocus = false;
    this.displayLabel = "";
    this.selectedOptions = [];
    this.maxCount = -1;
    this.tagMode = false;
    this.showSearch = false;
    this.name = "";
    this.value = "";
    this.defaultValue = "";
    this.size = "medium";
    this.placeholder = "";
    this.multiple = false;
    this.maxOptionsVisible = 3;
    this.disabled = false;
    this.clearable = false;
    this.open = false;
    this.hoist = false;
    this.filled = false;
    this.pill = false;
    this.label = "";
    this.placement = "bottom";
    this.helpText = "";
    this.form = "";
    this.required = false;
    this.getTag = (option) => {
      return ke`
      <p-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @p-remove=${(event) => this.handleTagRemove(event, option)}
      >
        ${option.getTextLabel()}
      </p-tag>
    `;
    };
    this.handleDocumentFocusIn = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      const target = event.target;
      const isClearButton = target.closest(".select__clear") !== null;
      const isIconButton = target.closest("p-icon-button") !== null;
      if (isClearButton || isIconButton) {
        return;
      }
      if (event.key === "Escape" && this.open && !this.closeWatcher) {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
        return;
      }
      if (event.key === "Enter") {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!this.open) {
          this.show();
          return;
        }
        if (this.tagMode && this.keyword) {
          this.handleAddNewTag(this.keyword.trim());
          if (!document.activeElement || document.activeElement !== this.displayInput) {
            this.displayInput.focus({ preventScroll: true });
          }
          this.requestUpdate();
          return;
        }
        if (this.currentOption && !this.currentOption.disabled && this.open) {
          if (this.multiple) {
            this.toggleOptionSelection(this.currentOption);
            if (!document.activeElement || document.activeElement !== this.displayInput) {
              this.displayInput.focus({ preventScroll: true });
            }
            this.hasFocus = true;
          } else {
            this.setSelectedOptions(this.currentOption);
            this.hide();
          }
          this.updateComplete.then(() => {
            this.emit("p-input");
            this.emit("p-change");
          });
        }
        return;
      }
      if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
        const allOptions = this.getAllOptions();
        allOptions.forEach((option) => {
          option.hidden = !option.getTextLabel().toLowerCase().includes(this.keyword.toLowerCase()) && !option.value.toLowerCase().includes(this.keyword.toLowerCase());
        });
        const availableOptions = allOptions.filter((el) => !el.hidden);
        const currentIndex = availableOptions.indexOf(this.currentOption);
        let newIndex = Math.max(0, currentIndex);
        event.preventDefault();
        if (!this.open) {
          this.show();
          if (this.currentOption) {
            return;
          }
        }
        if (event.key === "ArrowDown") {
          newIndex = currentIndex + 1;
          if (newIndex > availableOptions.length - 1)
            newIndex = 0;
        } else if (event.key === "ArrowUp") {
          newIndex = currentIndex - 1;
          if (newIndex < 0)
            newIndex = availableOptions.length - 1;
        } else if (event.key === "Home") {
          newIndex = 0;
        } else if (event.key === "End") {
          newIndex = availableOptions.length - 1;
        }
        this.setCurrentOption(availableOptions[newIndex]);
        return;
      }
      if (event.key === "Backspace") {
        if (!this.open && this.hasFocus) {
          this.show();
        }
        event.stopPropagation();
        if (this.multiple && this.keyword === "") {
          const allOptions = this.getAllOptions();
          const optionsSelected = allOptions.filter((el) => el.selected);
          if (optionsSelected.length > 0) {
            this.handleTagRemove(new CustomEvent("p-remove"), optionsSelected[optionsSelected.length - 1]);
          }
        }
        return;
      }
      if (event.key.length === 1) {
        if (!this.open && this.hasFocus) {
          this.show();
        }
      }
    };
    this.handleDocumentMouseDown = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
  }
  /** Gets the validity state object */
  get validity() {
    return this.valueInput.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback();
    this.open = false;
  }
  addOpenListeners() {
    var _a;
    document.addEventListener("focusin", this.handleDocumentFocusIn);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
    if (this.getRootNode() !== document) {
      this.getRootNode().addEventListener("focusin", this.handleDocumentFocusIn);
    }
    if ("CloseWatcher" in window) {
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
      this.closeWatcher = new CloseWatcher();
      this.closeWatcher.onclose = () => {
        if (this.open) {
          this.hide();
          if (!document.activeElement || document.activeElement !== this.displayInput) {
            this.displayInput.focus({ preventScroll: true });
          }
        }
      };
    }
  }
  removeOpenListeners() {
    var _a;
    document.removeEventListener("focusin", this.handleDocumentFocusIn);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    if (this.getRootNode() !== document) {
      this.getRootNode().removeEventListener("focusin", this.handleDocumentFocusIn);
    }
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("p-focus");
  }
  handleBlur() {
    this.hasFocus = false;
    if (!this.multiple) {
      this.displayLabel = this.selectedOptions.map((option) => option.getTextLabel()).join(", ");
    } else {
      this.displayLabel = " ";
    }
    this.emit("p-blur");
  }
  handleInput() {
    this.keyword = this.displayInput.value;
    this.handleFilterOptions();
    console.log("handleInput", this.keyword);
    if (document.activeElement !== this.displayInput) {
      this.displayInput.focus({ preventScroll: true });
    }
    this.emit("p-input");
  }
  handleLabelClick() {
    if (!document.activeElement || document.activeElement !== this.displayInput) {
      this.open = true;
      this.displayInput.focus({ preventScroll: true });
    }
  }
  handleComboboxMouseDown(event) {
    const path = event.composedPath();
    const isIconButton = path.some((el) => el instanceof Element && el.tagName.toLowerCase() === "p-icon-button");
    if (this.disabled || isIconButton) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.open = !this.open;
  }
  handleComboboxKeyDown(event) {
    if (event.key === "Tab") {
      return;
    }
    event.stopPropagation();
    this.handleDocumentKeyDown(event);
  }
  handleClearClick(event) {
    event.stopPropagation();
    if (this.value !== "") {
      this.setSelectedOptions([]);
      this.displayInput.blur();
      this.updateComplete.then(() => {
        this.emit("p-clear");
        this.emit("p-input");
        this.emit("p-change");
      });
    }
  }
  handleClearMouseDown(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  handleOptionClick(event) {
    const target = event.target;
    const option = target.closest("p-option");
    const oldValue = this.value;
    if (option && !option.disabled) {
      if (this.multiple) {
        this.toggleOptionSelection(option);
      } else {
        this.setSelectedOptions(option);
      }
      this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));
      if (this.value !== oldValue) {
        this.updateComplete.then(() => {
          this.emit("p-input");
          this.emit("p-change");
        });
      }
      if (!this.multiple) {
        this.hide();
        this.displayInput.blur();
      }
    }
  }
  handleDefaultSlotChange() {
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];
    const values = [];
    if (customElements.get("p-option")) {
      allOptions.forEach((option) => values.push(option.value));
      this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
    } else {
      customElements.whenDefined("p-option").then(() => this.handleDefaultSlotChange());
    }
  }
  handleTagRemove(event, option) {
    event.stopPropagation();
    if (!this.disabled) {
      this.toggleOptionSelection(option, false);
      if (this.selectedOptions.length > 0) {
        this.setCurrentOption(this.selectedOptions[this.selectedOptions.length - 1]);
      }
      this.updateComplete.then(() => {
        this.emit("p-input");
        this.emit("p-change");
      });
    }
  }
  handleAddNewTag(value) {
    if (!this.disabled) {
      const allOptions = this.getAllOptions();
      const selectedOptionValues = allOptions.map((option2) => option2.value);
      if (selectedOptionValues.includes(value)) {
        return;
      }
      const option = ke`
        <p-option value="${value.replace(/\s/g, "_")}">${value.charAt(0).toUpperCase() + value.slice(1)}</p-option>
      `;
      const fragment = document.createDocumentFragment();
      Q(option, fragment);
      this.appendChild(fragment);
      this.updateComplete.then(() => {
        this.keyword = "";
        this.displayLabel = "";
        this.handleFilterOptions();
        const newAllOptions = this.getAllOptions();
        const newOption = newAllOptions[newAllOptions.length - 1];
        this.toggleOptionSelection(newOption, true);
        this.setCurrentOption(newOption);
        this.emit("p-change");
      });
    }
  }
  // Gets an array of all <p-option> elements
  getAllOptions() {
    return [...this.querySelectorAll("p-option")];
  }
  // Gets the first <p-option> element
  getFirstOption() {
    return this.querySelector("p-option");
  }
  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  setCurrentOption(option) {
    const allOptions = this.getAllOptions();
    allOptions.forEach((el) => {
      el.current = false;
      el.tabIndex = -1;
    });
    if (option) {
      this.currentOption = option;
      option.current = true;
      option.tabIndex = 0;
    }
  }
  // Sets the selected option(s)
  setSelectedOptions(option) {
    const allOptions = this.getAllOptions();
    const newSelectedOptions = Array.isArray(option) ? option : [option];
    allOptions.forEach((el) => el.selected = false);
    if (newSelectedOptions.length) {
      newSelectedOptions.forEach((el) => el.selected = true);
    }
    this.selectionChanged();
  }
  // Toggles an option's selected state
  toggleOptionSelection(option, force) {
    if (force === true || force === false) {
      option.selected = force;
    } else {
      option.selected = !option.selected;
    }
    this.selectionChanged();
  }
  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  selectionChanged() {
    var _a, _b, _c, _d;
    this.selectedOptions = this.getAllOptions().filter((el) => el.selected);
    if (this.multiple) {
      this.value = this.selectedOptions.map((el) => el.value);
      this.placeholder = this.localize.term("numOptionsSelected", this.selectedOptions.length);
    } else {
      this.value = (_b = (_a = this.selectedOptions[0]) == null ? void 0 : _a.value) != null ? _b : "";
      this.placeholder = (_d = (_c = this.selectedOptions[0]) == null ? void 0 : _c.getTextLabel()) != null ? _d : "";
    }
    this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  get tags() {
    return this.selectedOptions.map((option, index) => {
      if (index < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const tag = this.getTag(option, index);
        return ke`<div @p-remove=${(e2) => this.handleTagRemove(e2, option)}>
          ${typeof tag === "string" ? ae(tag) : tag}
        </div>`;
      } else if (index === this.maxOptionsVisible) {
        return ke`
          <p-dropdown placement="top" behavior="hover">
            <p-tag slot="trigger" size=${this.size}>+${this.selectedOptions.length - index}</p-tag>
            <div class="select__tags--overflow" @click=${(e2) => e2.stopPropagation()}>
              ${this.selectedOptions.slice(this.maxOptionsVisible).map((other, idx) => {
          const otherTag = this.getTag(other, this.maxOptionsVisible + idx);
          return ke`<div @p-remove=${(e2) => this.handleTagRemove(e2, option)}>
                  ${typeof otherTag === "string" ? ae(otherTag) : otherTag}
                </div>`;
        })}
            </div>
          </p-dropdown>
        `;
      }
      return ke``;
    });
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleDisabledChange() {
    if (this.disabled) {
      this.open = false;
      this.handleOpenChange();
    }
  }
  handleValueChange() {
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];
    this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
  }
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());
      this.emit("p-show");
      this.addOpenListeners();
      await stopAnimations(this);
      this.listbox.hidden = false;
      this.popup.active = true;
      requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });
      const { keyframes, options } = getAnimation(this, "select.show", {
        dir: this.localize.dir()
      });
      await animateTo(this.popup.popup, keyframes, options);
      if (this.currentOption) {
        scrollIntoView(this.currentOption, this.listbox, "vertical", "auto");
      }
      this.emit("p-after-show");
      if (this.showSearch) {
        if (this.selectedOptions.length > 0) {
          if (this.multiple) {
            this.placeholder = this.localize.term("numOptionsSelected", this.selectedOptions.length);
          } else {
            this.placeholder = this.selectedOptions[0].getTextLabel();
          }
        }
        this.displayLabel = "";
        this.keyword = "";
        this.displayInput.focus({ preventScroll: true });
      }
      if (!document.activeElement || document.activeElement !== this.displayInput) {
        this.displayInput.focus({ preventScroll: true });
      }
      const allOptions = this.getAllOptions();
      allOptions.forEach((option) => {
        option.hidden = false;
      });
    } else {
      this.emit("p-hide");
      this.removeOpenListeners();
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "select.hide", {
        dir: this.localize.dir()
      });
      await animateTo(this.popup.popup, keyframes, options);
      this.listbox.hidden = true;
      this.popup.active = false;
      this.emit("p-after-hide");
      this.keyword = "";
    }
  }
  handleFilterOptions() {
    if (!this.showSearch)
      return;
    const allOptions = this.getAllOptions();
    if (this.keyword) {
      allOptions.forEach((option) => {
        option.hidden = !option.getTextLabel().toLowerCase().includes(this.keyword.toLowerCase()) && !option.value.toLowerCase().includes(this.keyword.toLowerCase());
      });
      const availableOptions = allOptions.filter((el) => !el.hidden);
      if (availableOptions.length > 0) {
        this.setCurrentOption(availableOptions[0]);
      } else {
        this.setCurrentOption(null);
      }
    } else {
      allOptions.forEach((option) => {
        option.hidden = false;
      });
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());
    }
  }
  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled) {
      this.open = false;
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "p-after-show");
  }
  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = false;
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "p-after-hide");
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.valueInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  /** Sets focus on the control. */
  focus(options) {
    this.displayInput.focus(options);
  }
  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon = this.clearable && !this.disabled && this.value.length > 0;
    const isPlaceholderVisible = this.placeholder && this.value.length === 0;
    return ke`
      <div
        part="form-control"
        class=${Rt({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <p-popup
            class=${Rt({
      select: true,
      "select--standard": true,
      "select--filled": this.filled,
      "select--pill": this.pill,
      "select--open": this.open,
      "select--disabled": this.disabled,
      "select--multiple": this.multiple,
      "select--focused": this.hasFocus,
      "select--placeholder-visible": isPlaceholderVisible,
      "select--top": this.placement === "top",
      "select--bottom": this.placement === "bottom",
      "select--small": this.size === "small",
      "select--medium": this.size === "medium",
      "select--large": this.size === "large"
    })}
            placement=${this.placement}
            strategy=${this.hoist ? "fixed" : "absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              ${this.multiple ? ke`<div part="tags" class="select__tags">${this.tags}</div>` : ""}

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.hasFocus ? this.keyword : this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                aria-controls="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? "true" : "false"}
                aria-describedby="help-text"
                ?readonly=${!this.showSearch}
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
                @input=${this.handleInput}
              />

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${hasClearIcon ? ke`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <p-icon name="x-circle-fill" library="system"></p-icon>
                      </slot>
                    </button>
                  ` : ""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <p-icon library="system" name="chevron-down"></p-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              aria-multiselectable=${this.multiple ? "true" : "false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </p-popup>
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
PSelect.styles = [component_styles_default, form_control_styles_default, select_styles_default];
PSelect.dependencies = {
  "p-icon": PIcon,
  "p-popup": PPopup,
  "p-tag": PTag
};
__decorateClass([
  e(".select")
], PSelect.prototype, "popup", 2);
__decorateClass([
  e(".select__combobox")
], PSelect.prototype, "combobox", 2);
__decorateClass([
  e(".select__display-input")
], PSelect.prototype, "displayInput", 2);
__decorateClass([
  e(".select__value-input")
], PSelect.prototype, "valueInput", 2);
__decorateClass([
  e(".select__listbox")
], PSelect.prototype, "listbox", 2);
__decorateClass([
  r()
], PSelect.prototype, "hasFocus", 2);
__decorateClass([
  r()
], PSelect.prototype, "displayLabel", 2);
__decorateClass([
  r()
], PSelect.prototype, "currentOption", 2);
__decorateClass([
  r()
], PSelect.prototype, "selectedOptions", 2);
__decorateClass([
  n({ type: Number, reflect: true, attribute: "max-count" })
], PSelect.prototype, "maxCount", 2);
__decorateClass([
  n({ type: Boolean, reflect: true, attribute: "tag-mode" })
], PSelect.prototype, "tagMode", 2);
__decorateClass([
  n({ type: Boolean, reflect: true, attribute: "show-search" })
], PSelect.prototype, "showSearch", 2);
__decorateClass([
  n()
], PSelect.prototype, "name", 2);
__decorateClass([
  n({
    converter: {
      fromAttribute: (value) => value.split(" "),
      toAttribute: (value) => value.join(" ")
    }
  })
], PSelect.prototype, "value", 2);
__decorateClass([
  defaultValue()
], PSelect.prototype, "defaultValue", 2);
__decorateClass([
  n({ reflect: true })
], PSelect.prototype, "size", 2);
__decorateClass([
  n()
], PSelect.prototype, "placeholder", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PSelect.prototype, "multiple", 2);
__decorateClass([
  n({ attribute: "max-options-visible", type: Number })
], PSelect.prototype, "maxOptionsVisible", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PSelect.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean })
], PSelect.prototype, "clearable", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PSelect.prototype, "open", 2);
__decorateClass([
  n({ type: Boolean })
], PSelect.prototype, "hoist", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PSelect.prototype, "filled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PSelect.prototype, "pill", 2);
__decorateClass([
  n()
], PSelect.prototype, "label", 2);
__decorateClass([
  n({ reflect: true })
], PSelect.prototype, "placement", 2);
__decorateClass([
  n({ attribute: "help-text" })
], PSelect.prototype, "helpText", 2);
__decorateClass([
  n({ reflect: true })
], PSelect.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PSelect.prototype, "required", 2);
__decorateClass([
  n()
], PSelect.prototype, "getTag", 2);
__decorateClass([
  debounce(100)
], PSelect.prototype, "handleInput", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], PSelect.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], PSelect.prototype, "handleValueChange", 1);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], PSelect.prototype, "handleOpenChange", 1);
setDefaultAnimation("calendar.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
setDefaultAnimation("calendar.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});

export {
  PSelect
};
