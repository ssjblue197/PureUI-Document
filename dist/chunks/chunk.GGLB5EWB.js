import {
  skeleton_styles_default
} from "./chunk.VCD4OINQ.js";
import {
  e
} from "./chunk.CEXDE6O2.js";
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

// src/components/skeleton/skeleton.component.ts
var PSkeleton = class extends PureElement {
  constructor() {
    super(...arguments);
    this.effect = "none";
  }
  render() {
    return x`
      <div
        part="base"
        class=${e({
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
