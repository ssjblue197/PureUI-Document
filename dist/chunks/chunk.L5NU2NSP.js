import {
  image_comparer_styles_default
} from "./chunk.DLU2WKEI.js";
import {
  drag
} from "./chunk.ESELY2US.js";
import {
  o
} from "./chunk.LY5BUJHA.js";
import {
  clamp
} from "./chunk.HF7GESMZ.js";
import {
  e
} from "./chunk.TGM7ILZL.js";
import {
  PIcon
} from "./chunk.FRGIYZIX.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  e as e2,
  n
} from "./chunk.HDLBJYVW.js";
import {
  component_styles_default
} from "./chunk.U7KETH4O.js";
import {
  x
} from "./chunk.N4FVDREO.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/image-comparer/image-comparer.component.ts
var PImageComparer = class extends PureElement {
  constructor() {
    super(...arguments);
    this.position = 50;
  }
  handleDrag(event) {
    const { width } = this.base.getBoundingClientRect();
    const isRtl = this.matches(":dir(rtl)");
    event.preventDefault();
    drag(this.base, {
      onMove: (x2) => {
        this.position = parseFloat(clamp(x2 / width * 100, 0, 100).toFixed(2));
        if (isRtl)
          this.position = 100 - this.position;
      },
      initialEvent: event
    });
  }
  handleKeyDown(event) {
    const isLtr = this.matches(":dir(ltr)");
    const isRtl = this.matches(":dir(rtl)");
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      const incr = event.shiftKey ? 10 : 1;
      let newPosition = this.position;
      event.preventDefault();
      if (isLtr && event.key === "ArrowLeft" || isRtl && event.key === "ArrowRight") {
        newPosition -= incr;
      }
      if (isLtr && event.key === "ArrowRight" || isRtl && event.key === "ArrowLeft") {
        newPosition += incr;
      }
      if (event.key === "Home") {
        newPosition = 0;
      }
      if (event.key === "End") {
        newPosition = 100;
      }
      newPosition = clamp(newPosition, 0, 100);
      this.position = newPosition;
    }
  }
  handlePositionChange() {
    this.emit("p-change");
  }
  render() {
    const isRtl = this.matches(":dir(rtl)");
    return x`
      <div
        part="base"
        id="image-comparer"
        class=${e({
      "image-comparer": true,
      "image-comparer--rtl": isRtl
    })}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${o({
      clipPath: isRtl ? `inset(0 0 0 ${100 - this.position}%)` : `inset(0 ${100 - this.position}% 0 0)`
    })}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${o({
      left: isRtl ? `${100 - this.position}%` : `${this.position}%`
    })}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <p-icon library="system" name="grip-vertical"></p-icon>
            </slot>
          </div>
        </div>
      </div>
    `;
  }
};
PImageComparer.styles = [component_styles_default, image_comparer_styles_default];
PImageComparer.scopedElement = { "p-icon": PIcon };
__decorateClass([
  e2(".image-comparer")
], PImageComparer.prototype, "base", 2);
__decorateClass([
  e2(".image-comparer__handle")
], PImageComparer.prototype, "handle", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], PImageComparer.prototype, "position", 2);
__decorateClass([
  watch("position", { waitUntilFirstUpdate: true })
], PImageComparer.prototype, "handlePositionChange", 1);

export {
  PImageComparer
};
