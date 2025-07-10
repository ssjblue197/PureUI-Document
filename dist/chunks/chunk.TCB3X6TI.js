import {
  smart_container_styles_default
} from "./chunk.AFSXL2RA.js";
import {
  icon_default
} from "./chunk.QN65Z4XP.js";
import {
  PDropdown
} from "./chunk.GNHXDAOP.js";
import {
  PButton
} from "./chunk.OLGLTFLK.js";
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
  n
} from "./chunk.UYBIUA5I.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
import {
  ke
} from "./chunk.XHSHLALN.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/smart-container/smart-container.component.ts
var PSmartContainer = class extends PureElement {
  constructor() {
    super(...arguments);
    this.observedElements = [];
    this.backupContainerWidth = 0;
    this.hasSlotController = new HasSlotController(this, "prefix", "suffix");
    this.rtl = false;
  }
  handleExampleChange() {
  }
  handleResize(entries) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const slot = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("slot:not([name])");
    const prefixElement = (_b = this.shadowRoot) == null ? void 0 : _b.querySelector(".smart-container__prefix");
    const suffixElement = (_c = this.shadowRoot) == null ? void 0 : _c.querySelector(".smart-container__suffix");
    const prefixWidth = (prefixElement == null ? void 0 : prefixElement.offsetWidth) || 0;
    const suffixWidth = (suffixElement == null ? void 0 : suffixElement.offsetWidth) || 0;
    if (!slot || !entries.length)
      return;
    const container = (_d = entries[0]) == null ? void 0 : _d.contentRect;
    const elements = slot == null ? void 0 : slot.assignedElements({ flatten: true });
    if (this.backupContainerWidth > 0 && container.width > this.backupContainerWidth) {
      if (elements.length > 0) {
        if (this.dropdownContent.children.length >= 1) {
          if (this.rtl) {
            const firstElement = elements[0];
            const lastChildOfDropdown = this.dropdownContent.lastElementChild;
            if (lastChildOfDropdown) {
              const width = Number(lastChildOfDropdown.dataset.oldWidth);
              if (firstElement.offsetLeft - width > 0) {
                this.append(lastChildOfDropdown);
              }
            }
          } else {
            const lastElement = elements[elements.length - 1];
            const lastChildOfDropdown = this.dropdownContent.lastElementChild;
            if (lastChildOfDropdown) {
              const width = Number(lastChildOfDropdown.dataset.oldWidth);
              if (lastElement.offsetLeft + lastElement.offsetWidth + prefixWidth + suffixWidth + width < container.width) {
                this.append(lastChildOfDropdown);
              }
            }
          }
        }
      } else {
        if (this.dropdownContent.children.length >= 1) {
          const lastChildOfDropdown = this.dropdownContent.lastElementChild;
          if (lastChildOfDropdown) {
            const width = Number(lastChildOfDropdown.dataset.oldWidth);
            if (width < container.width) {
              this.append(lastChildOfDropdown);
            }
          }
        }
      }
    } else {
      if (this.rtl) {
        for (let i = 0; i <= elements.length - 1; i++) {
          const el = elements[i];
          if (el.offsetLeft < 0) {
            const currentLength = (_e = slot == null ? void 0 : slot.assignedElements({ flatten: true })) == null ? void 0 : _e.length;
            const dropElement = elements[currentLength - 1];
            dropElement.dataset.oldWidth = String(dropElement.offsetWidth);
            (_f = this.dropdownContent) == null ? void 0 : _f.appendChild(dropElement);
          }
        }
      } else {
        for (let i = elements.length - 1; i >= 0; i--) {
          const el = elements[i];
          let triggerElementWidth = 0;
          if (this.dropdownContent && this.dropdownContent.children.length > 0) {
            triggerElementWidth = this.dropdown.offsetWidth;
          }
          if (el.offsetLeft + el.offsetWidth + prefixWidth + suffixWidth + triggerElementWidth > container.width) {
            el.dataset.oldWidth = String(el.offsetWidth);
            (_g = this.dropdownContent) == null ? void 0 : _g.appendChild(el);
          }
        }
      }
    }
    if (this.dropdownContent && this.dropdownContent.children.length > 0) {
      this.dropdown.style.width = "auto";
      this.dropdown.style.visibility = "visible";
      this.dropdown.style.position = "relative";
    } else {
      if (this.dropdown) {
        this.dropdown.style.visibility = "hidden";
        this.dropdown.style.width = "0px";
        this.dropdown.style.position = "fixed";
      }
    }
    this.backupContainerWidth = (_h = entries[0]) == null ? void 0 : _h.contentRect.width;
    this.requestUpdate();
  }
  startObserver() {
    var _a;
    const containerElement = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".smart-container");
    this.observedElements.forEach((el) => this.resizeObserver.unobserve(el));
    this.observedElements = [];
    this.resizeObserver.observe(containerElement);
    this.observedElements.push(containerElement);
  }
  stopObserver() {
    this.resizeObserver.disconnect();
  }
  firstUpdated() {
    this.startObserver();
    this.smartContainer.dispatchEvent(new Event("resize"));
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver((entries) => this.handleResize(entries));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObserver();
  }
  render() {
    const isRTL = this.rtl;
    return ke` <div
      part="base"
      class=${Rt({
      "smart-container": true,
      "smart-container__rtl": isRTL,
      "smart-container--has-prefix": this.hasSlotController.test("prefix"),
      "smart-container--has-suffix": this.hasSlotController.test("suffix")
    })}
    >
      <div class="smart-container__prefix">
        <slot name="prefix"></slot>
      </div>
      <slot></slot>
      <p-dropdown class="smart-container__dropdown">
        <slot name="trigger" slot="trigger">
          <p-button>
            <p-icon name="funnel"></p-icon>
          </p-button>
        </slot>
        <p-menu part="dropdown-menu">
          <div class="smart-container__dropdown-content"></div>
        </p-menu>
      </p-dropdown>
      <div class="smart-container__suffix">
        <slot name="suffix"></slot>
      </div>
    </div>`;
  }
};
PSmartContainer.styles = [component_styles_default, smart_container_styles_default];
PSmartContainer.dependencies = {
  "p-dropdown": PDropdown,
  "p-icon": icon_default,
  "p-button": PButton
};
__decorateClass([
  n({ type: Boolean, reflect: true })
], PSmartContainer.prototype, "rtl", 2);
__decorateClass([
  e(".smart-container")
], PSmartContainer.prototype, "smartContainer", 2);
__decorateClass([
  e(".smart-container__dropdown")
], PSmartContainer.prototype, "dropdown", 2);
__decorateClass([
  e(".smart-container__dropdown-content")
], PSmartContainer.prototype, "dropdownContent", 2);
__decorateClass([
  watch("example")
], PSmartContainer.prototype, "handleExampleChange", 1);

export {
  PSmartContainer
};
