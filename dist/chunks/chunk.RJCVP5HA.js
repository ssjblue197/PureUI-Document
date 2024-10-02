import {
  skeleton_styles_default
} from "./chunk.QWOAADCO.js";
import {
  Rt
} from "./chunk.A56LY5J2.js";
import {
  PureElement,
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

// src/components/skeleton/skeleton.component.ts
var PSkeleton = class extends PureElement {
  constructor() {
    super(...arguments);
    this.effect = "none";
  }
  render() {
    return ke`
      <div
        part="base"
        class=${Rt({
      skeleton: true,
      "skeleton--pulse": this.effect === "pulse",
      "skeleton--sheen": this.effect === "sheen"
    })}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
  }
};
PSkeleton.styles = [component_styles_default, skeleton_styles_default];
__decorateClass([
  n()
], PSkeleton.prototype, "effect", 2);

export {
  PSkeleton
};
