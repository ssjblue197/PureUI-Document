import {
  progress_ring_styles_default
} from "./chunk.5YN3MUTE.js";
import {
  LocalizeController
} from "./chunk.6BMNUR6W.js";
import {
  PureElement,
  e,
  n,
  r
} from "./chunk.2WNLI6SE.js";
import {
  component_styles_default
} from "./chunk.4LEQW7ML.js";
import {
  x
} from "./chunk.YOCEZMWG.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/progress-ring/progress-ring.component.ts
var PProgressRing = class extends PureElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.label = "";
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("value")) {
      const radius = parseFloat(getComputedStyle(this.indicator).getPropertyValue("r"));
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - this.value / 100 * circumference;
      this.indicatorOffset = `${offset}px`;
    }
  }
  render() {
    return x`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value / 100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `;
  }
};
PProgressRing.styles = [component_styles_default, progress_ring_styles_default];
__decorateClass([
  e(".progress-ring__indicator")
], PProgressRing.prototype, "indicator", 2);
__decorateClass([
  r()
], PProgressRing.prototype, "indicatorOffset", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], PProgressRing.prototype, "value", 2);
__decorateClass([
  n()
], PProgressRing.prototype, "label", 2);

export {
  PProgressRing
};
