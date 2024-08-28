import {
  progress_bar_styles_default
} from "./chunk.BYDLHLG4.js";
import {
  o as o2
} from "./chunk.RCF47FIZ.js";
import {
  o
} from "./chunk.73IAYF2H.js";
import {
  e
} from "./chunk.CEXDE6O2.js";
import {
  LocalizeController
} from "./chunk.55R7PUQN.js";
import {
  PureElement,
  n
} from "./chunk.Q4V5WSWG.js";
import {
  component_styles_default
} from "./chunk.4LEQW7ML.js";
import {
  x
} from "./chunk.YOCEZMWG.js";
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
    return x`
      <div
        part="base"
        class=${e({
      "progress-bar": true,
      "progress-bar--indeterminate": this.indeterminate,
      "progress-bar--rtl": this.localize.dir() === "rtl"
    })}
        role="progressbar"
        title=${o(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${o2({ width: `${this.value}%` })}>
          ${!this.indeterminate ? x` <slot part="label" class="progress-bar__label"></slot> ` : ""}
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
