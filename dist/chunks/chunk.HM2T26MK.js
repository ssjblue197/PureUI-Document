import {
  smart_container_styles_default
} from "./chunk.LJ27WTJA.js";
import {
  icon_default
} from "./chunk.5VNJVP5Q.js";
import {
  PDropdown
} from "./chunk.2A3GXKXT.js";
import {
  PButton
} from "./chunk.3LAQSUJK.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  e,
  n
} from "./chunk.APLTK2IK.js";
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
    this.attr = "example";
  }
  handleExampleChange() {
  }
  handleResize(entries) {
    var _a, _b, _c, _d;
    const slot = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("slot:not([name])");
    if (!slot || !entries.length)
      return;
    const container = (_b = entries[0]) == null ? void 0 : _b.contentRect;
    const elements = slot == null ? void 0 : slot.assignedElements({ flatten: true });
    const lastElement = elements[elements.length - 1];
    if (this.backupContainerWidth > 0 && container.width > this.backupContainerWidth) {
      if (this.dropdownContent.children.length > 1) {
        const lastChild = this.dropdownContent.lastElementChild;
        if (lastChild) {
          const width = Number(lastChild.dataset.oldWidth);
          if (lastElement.offsetLeft + lastElement.offsetWidth + width < container.width - this.dropdown.offsetWidth) {
            this.append(lastChild);
          }
        }
      } else if (this.dropdownContent.children.length === 1) {
        const lastChild = this.dropdownContent.lastElementChild;
        if (lastChild) {
          const width = Number(lastChild.dataset.oldWidth);
          if (lastElement.offsetLeft + lastElement.offsetWidth + width < container.width) {
            this.append(lastChild);
          }
        }
      }
    } else {
      for (let i = elements.length - 1; i > 0; i--) {
        const el = elements[i];
        let triggerElementWidth = 0;
        if (this.dropdownContent.children.length > 0) {
          triggerElementWidth = this.dropdown.offsetWidth;
        }
        if (el.offsetLeft + el.offsetWidth > container.width - triggerElementWidth) {
          el.dataset.oldWidth = String(el.offsetWidth);
          (_c = this.dropdownContent) == null ? void 0 : _c.appendChild(el);
        }
      }
    }
    if (this.dropdownContent.children.length > 0) {
      this.dropdown.style.width = "auto";
      this.dropdown.style.visibility = "visible";
    } else {
      this.dropdown.style.visibility = "hidden";
      this.dropdown.style.width = "0px";
    }
    this.backupContainerWidth = (_d = entries[0]) == null ? void 0 : _d.contentRect.width;
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
    return ke` <div class="smart-container" part="base">
      <slot></slot>
      <p-dropdown class="smart_container__dropdown">
        <slot name="trigger" slot="trigger">
          <p-button>
            <p-icon name="funnel"></p-icon>
          </p-button>
        </slot>
        <p-menu part="dropdown-menu">
          <div class="smart_container__dropdown-content"></div>
        </p-menu>
      </p-dropdown>
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
  n()
], PSmartContainer.prototype, "attr", 2);
__decorateClass([
  e(".smart-container")
], PSmartContainer.prototype, "smartContainer", 2);
__decorateClass([
  e(".smart_container__dropdown")
], PSmartContainer.prototype, "dropdown", 2);
__decorateClass([
  e(".smart_container__dropdown-content")
], PSmartContainer.prototype, "dropdownContent", 2);
__decorateClass([
  watch("example")
], PSmartContainer.prototype, "handleExampleChange", 1);

export {
  PSmartContainer
};
