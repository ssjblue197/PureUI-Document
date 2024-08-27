import {
  breadcrumb_styles_default
} from "./chunk.MUCESMCE.js";
import {
  LocalizeController
} from "./chunk.55R7PUQN.js";
import {
  PIcon
} from "./chunk.6L3KVNW6.js";
import {
  PureElement,
  e,
  n
} from "./chunk.6XQUAQ6V.js";
import {
  component_styles_default
} from "./chunk.4LEQW7ML.js";
import {
  x
} from "./chunk.YOCEZMWG.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/breadcrumb/breadcrumb.component.ts
var PBreadcrumb = class extends PureElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.separatorDir = this.localize.dir();
    this.label = "";
  }
  // Generates a clone of the separator element to use for each breadcrumb item
  getSeparator() {
    const separator = this.separatorSlot.assignedElements({
      flatten: true
    })[0];
    const clone = separator.cloneNode(true);
    [clone, ...clone.querySelectorAll("[id]")].forEach((el) => el.removeAttribute("id"));
    clone.setAttribute("data-default", "");
    clone.slot = "separator";
    return clone;
  }
  handleSlotChange() {
    const items = [...this.defaultSlot.assignedElements({ flatten: true })].filter(
      (item) => item.tagName.toLowerCase() === "p-breadcrumb-item"
    );
    items.forEach((item, index) => {
      const separator = item.querySelector('[slot="separator"]');
      if (separator === null) {
        item.append(this.getSeparator());
      } else if (separator.hasAttribute("data-default")) {
        separator.replaceWith(this.getSeparator());
      } else {
      }
      if (index === items.length - 1) {
        item.setAttribute("aria-current", "page");
      } else {
        item.removeAttribute("aria-current");
      }
    });
  }
  render() {
    if (this.separatorDir !== this.localize.dir()) {
      this.separatorDir = this.localize.dir();
      this.updateComplete.then(() => this.handleSlotChange());
    }
    return x`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <p-icon name=${this.localize.dir() === "rtl" ? "chevron-left" : "chevron-right"} library="system"></p-icon>
        </slot>
      </span>
    `;
  }
};
PBreadcrumb.styles = [component_styles_default, breadcrumb_styles_default];
PBreadcrumb.dependencies = { "p-icon": PIcon };
__decorateClass([
  e("slot")
], PBreadcrumb.prototype, "defaultSlot", 2);
__decorateClass([
  e('slot[name="separator"]')
], PBreadcrumb.prototype, "separatorSlot", 2);
__decorateClass([
  n()
], PBreadcrumb.prototype, "label", 2);

export {
  PBreadcrumb
};
