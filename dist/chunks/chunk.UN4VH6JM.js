import {
  smart_container_styles_default
} from "./chunk.L52NKNLQ.js";
import {
  icon_default
} from "./chunk.MWM3XZHU.js";
import {
  PDropdown
} from "./chunk.QPAKO5VY.js";
import {
  PButton
} from "./chunk.6UMEXJXB.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  e,
  n
} from "./chunk.6DIPKQ4W.js";
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
    this.overlapElements = [];
    this.attr = "example";
  }
  handleExampleChange() {
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
    var _a;
    const slot = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("slot:not([name])");
    const elements = slot == null ? void 0 : slot.assignedElements({ flatten: true });
    elements.forEach((el) => {
      var _a2;
      (_a2 = this.dropdownMenu) == null ? void 0 : _a2.appendChild(el.cloneNode(true));
    });
    this.startObserver();
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver((entries) => {
      var _a, _b;
      this.overlapElements = [];
      const slot = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector("slot:not([name])");
      if (!slot || !entries.length)
        return;
      const container = (_b = entries[0]) == null ? void 0 : _b.contentRect;
      const elements = slot == null ? void 0 : slot.assignedElements({ flatten: true });
      elements.forEach((el) => {
        el.style.display = "block";
      });
      elements.forEach((el, index) => {
        if (el.offsetLeft + el.offsetWidth > container.width) {
          this.overlapElements.push(index);
          el.style.display = "none";
        }
      });
      if (this.overlapElements.length > 0) {
        Array.from(this.dropdownMenu.children).forEach((el, index) => {
          if (this.overlapElements.includes(index)) {
            el.style.display = "block";
          } else {
            el.style.display = "none";
          }
        });
      }
      this.requestUpdate();
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObserver();
  }
  render() {
    return ke` <div class="smart-container" part="base">
      <slot></slot>
      <p-dropdown>
        <slot name="icon" slot="trigger">
          <p-button>
            <p-icon name="funnel"></p-icon>
          </p-button>
        </slot>
        <p-menu part="dropdown-menu">
          <div class="smart_container__dropdown-menu"></div>
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
  e(".smart_container__dropdown-menu")
], PSmartContainer.prototype, "dropdownMenu", 2);
__decorateClass([
  watch("example")
], PSmartContainer.prototype, "handleExampleChange", 1);

export {
  PSmartContainer
};
