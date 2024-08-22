import {
  badge_styles_default
} from "./chunk.CJPMTDUT.js";
import {
  e
} from "./chunk.CEXDE6O2.js";
import {
  PureElement,
  n
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

// src/components/badge/badge.component.ts
var PBadge = class extends PureElement {
  constructor() {
    super(...arguments);
    this.variant = "primary";
    this.pill = false;
    this.pulse = false;
  }
  render() {
    return x`
      <span
        part="base"
        class=${e({
      badge: true,
      "badge--primary": this.variant === "primary",
      "badge--success": this.variant === "success",
      "badge--neutral": this.variant === "neutral",
      "badge--warning": this.variant === "warning",
      "badge--danger": this.variant === "danger",
      "badge--pill": this.pill,
      "badge--pulse": this.pulse
    })}
        role="status"
      >
        <slot></slot>
      </span>
    `;
  }
};
PBadge.styles = [component_styles_default, badge_styles_default];
__decorateClass([
  n({ reflect: true })
], PBadge.prototype, "variant", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PBadge.prototype, "pill", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PBadge.prototype, "pulse", 2);

export {
  PBadge
};