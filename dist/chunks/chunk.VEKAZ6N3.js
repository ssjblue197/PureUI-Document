import {
  progress_bar_styles_default
} from "./chunk.AT73FWMH.js";
import {
  se
} from "./chunk.VA36342L.js";
import {
  LocalizeController
} from "./chunk.55R7PUQN.js";
import {
  to
} from "./chunk.DQNILPUT.js";
import {
  Rt
} from "./chunk.A56LY5J2.js";
import {
  PureElement,
  n
} from "./chunk.Z3CEAGLD.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
import {
  ke
} from "./chunk.XHSHLALN.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/progress-bar/progress-bar.component.ts
var PProgressBar = class extends PureElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.indeterminate = false;
    this.label = "";
  }
  render() {
    return ke`
      <div
        part="base"
        class=${Rt({
      "progress-bar": true,
      "progress-bar--indeterminate": this.indeterminate,
      "progress-bar--rtl": this.localize.dir() === "rtl"
    })}
        role="progressbar"
        title=${to(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${se({ width: `${this.value}%` })}>
          ${!this.indeterminate ? ke` <slot part="label" class="progress-bar__label"></slot> ` : ""}
        </div>
      </div>
    `;
  }
};
PProgressBar.styles = [component_styles_default, progress_bar_styles_default];
__decorateClass([
  n({ type: Number, reflect: true })
], PProgressBar.prototype, "value", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PProgressBar.prototype, "indeterminate", 2);
__decorateClass([
  n()
], PProgressBar.prototype, "label", 2);

export {
  PProgressBar
};
