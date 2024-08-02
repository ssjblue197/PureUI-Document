import {
  tab_panel_styles_default
} from "./chunk.ISAIJ6AU.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  e
} from "./chunk.TGM7ILZL.js";
import {
  PureElement,
  n
} from "./chunk.YAN27CLM.js";
import {
  component_styles_default
} from "./chunk.U7KETH4O.js";
import {
  x
} from "./chunk.N4FVDREO.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/tab-panel/tab-panel.component.ts
var id = 0;
var PTabPanel = class extends PureElement {
  constructor() {
    super(...arguments);
    this.attrId = ++id;
    this.componentId = `p-tab-panel-${this.attrId}`;
    this.name = "";
    this.active = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.id = this.id.length > 0 ? this.id : this.componentId;
    this.setAttribute("role", "tabpanel");
  }
  handleActiveChange() {
    this.setAttribute("aria-hidden", this.active ? "false" : "true");
  }
  render() {
    return x`
      <slot
        part="base"
        class=${e({
      "tab-panel": true,
      "tab-panel--active": this.active
    })}
      ></slot>
    `;
  }
};
PTabPanel.styles = [component_styles_default, tab_panel_styles_default];
__decorateClass([
  n({ reflect: true })
], PTabPanel.prototype, "name", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PTabPanel.prototype, "active", 2);
__decorateClass([
  watch("active")
], PTabPanel.prototype, "handleActiveChange", 1);

export {
  PTabPanel
};