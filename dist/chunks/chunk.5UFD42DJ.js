import {
  tab_styles_default
} from "./chunk.RIHQOLPJ.js";
import {
  PIconButton
} from "./chunk.WDGIVIRH.js";
import {
  LocalizeController
} from "./chunk.55R7PUQN.js";
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
} from "./chunk.FDYCR5Z3.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
import {
  ke
} from "./chunk.XHSHLALN.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/tab/tab.component.ts
var id = 0;
var PTab = class extends PureElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.attrId = ++id;
    this.componentId = `p-tab-${this.attrId}`;
    this.panel = "";
    this.active = false;
    this.closable = false;
    this.disabled = false;
    this.tabIndex = 0;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "tab");
  }
  handleCloseClick(event) {
    event.stopPropagation();
    this.emit("p-close");
  }
  handleActiveChange() {
    this.setAttribute("aria-selected", this.active ? "true" : "false");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    if (this.disabled && !this.active) {
      this.tabIndex = -1;
    } else {
      this.tabIndex = 0;
    }
  }
  render() {
    this.id = this.id.length > 0 ? this.id : this.componentId;
    return ke`
      <div
        part="base"
        class=${Rt({
      tab: true,
      "tab--active": this.active,
      "tab--closable": this.closable,
      "tab--disabled": this.disabled
    })}
      >
        <slot></slot>
        ${this.closable ? ke`
              <p-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></p-icon-button>
            ` : ""}
      </div>
    `;
  }
};
PTab.styles = [component_styles_default, tab_styles_default];
PTab.dependencies = { "p-icon-button": PIconButton };
__decorateClass([
  e(".tab")
], PTab.prototype, "tab", 2);
__decorateClass([
  n({ reflect: true })
], PTab.prototype, "panel", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PTab.prototype, "active", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PTab.prototype, "closable", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PTab.prototype, "disabled", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], PTab.prototype, "tabIndex", 2);
__decorateClass([
  watch("active")
], PTab.prototype, "handleActiveChange", 1);
__decorateClass([
  watch("disabled")
], PTab.prototype, "handleDisabledChange", 1);

export {
  PTab
};
