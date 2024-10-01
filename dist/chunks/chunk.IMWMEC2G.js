import {
  SubmenuController
} from "./chunk.HMTZNKXS.js";
import {
  menu_item_styles_default
} from "./chunk.NOELO442.js";
import {
  PSpinner
} from "./chunk.CERCDU4U.js";
import {
  PPopup
} from "./chunk.MOFUCY6P.js";
import {
  HasSlotController,
  getTextContent
} from "./chunk.MLXUTV4G.js";
import {
  Rt
} from "./chunk.A56LY5J2.js";
import {
  PIcon
} from "./chunk.CMYOLYFD.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  e,
  n
} from "./chunk.YAPKKD6K.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
import {
  ke
} from "./chunk.XHSHLALN.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/menu-item/menu-item.component.ts
var PMenuItem = class extends PureElement {
  constructor() {
    super(...arguments);
    this.type = "normal";
    this.checked = false;
    this.value = "";
    this.loading = false;
    this.disabled = false;
    this.hasSlotController = new HasSlotController(this, "submenu");
    this.submenuController = new SubmenuController(this, this.hasSlotController);
    this.handleHostClick = (event) => {
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
    this.handleMouseOver = (event) => {
      this.focus();
      event.stopPropagation();
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this.handleHostClick);
    this.addEventListener("mouseover", this.handleMouseOver);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this.handleHostClick);
    this.removeEventListener("mouseover", this.handleMouseOver);
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
  handleCheckedChange() {
    if (this.checked && this.type !== "checkbox") {
      this.checked = false;
      console.error('The checked attribute can only be used on menu items with type="checkbox"', this);
      return;
    }
    if (this.type === "checkbox") {
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
    } else {
      this.removeAttribute("aria-checked");
    }
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleTypeChange() {
    if (this.type === "checkbox") {
      this.setAttribute("role", "menuitemcheckbox");
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
    } else {
      this.setAttribute("role", "menuitem");
      this.removeAttribute("aria-checked");
    }
  }
  /** Returns a text label based on the contents of the menu item's default slot. */
  getTextLabel() {
    return getTextContent(this.defaultSlot);
  }
  isSubmenu() {
    return this.hasSlotController.test("submenu");
  }
  render() {
    const isRtl = this.matches(":dir(rtl)");
    const isSubmenuExpanded = this.submenuController.isExpanded();
    return ke`
      <div
        id="anchor"
        part="base"
        class=${Rt({
      "menu-item": true,
      "menu-item--rtl": isRtl,
      "menu-item--checked": this.checked,
      "menu-item--disabled": this.disabled,
      "menu-item--loading": this.loading,
      "menu-item--has-submenu": this.isSubmenu(),
      "menu-item--submenu-expanded": isSubmenuExpanded
    })}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${isSubmenuExpanded ? true : false}"
      >
        <span part="checked-icon" class="menu-item__check">
          <p-icon name="check" library="system" aria-hidden="true"></p-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <p-icon name=${isRtl ? "chevron-left" : "chevron-right"} library="system" aria-hidden="true"></p-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading ? ke` <p-spinner part="spinner" exportparts="base:spinner__base"></p-spinner> ` : ""}
      </div>
    `;
  }
};
PMenuItem.styles = [component_styles_default, menu_item_styles_default];
PMenuItem.dependencies = {
  "p-icon": PIcon,
  "p-popup": PPopup,
  "p-spinner": PSpinner
};
__decorateClass([
  e("slot:not([name])")
], PMenuItem.prototype, "defaultSlot", 2);
__decorateClass([
  e(".menu-item")
], PMenuItem.prototype, "menuItem", 2);
__decorateClass([
  n()
], PMenuItem.prototype, "type", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PMenuItem.prototype, "checked", 2);
__decorateClass([
  n()
], PMenuItem.prototype, "value", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PMenuItem.prototype, "loading", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PMenuItem.prototype, "disabled", 2);
__decorateClass([
  watch("checked")
], PMenuItem.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled")
], PMenuItem.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("type")
], PMenuItem.prototype, "handleTypeChange", 1);

export {
  PMenuItem
};
