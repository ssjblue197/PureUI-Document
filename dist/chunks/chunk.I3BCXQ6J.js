import {
  rating_styles_default
} from "./chunk.AAPU5K5Q.js";
import {
  se
} from "./chunk.VA36342L.js";
import {
  clamp
} from "./chunk.HF7GESMZ.js";
import {
  ae
} from "./chunk.6JBGXCYU.js";
import {
  Rt
} from "./chunk.A56LY5J2.js";
import {
  PIcon
} from "./chunk.FZEBYU6T.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  e,
  n,
  r,
  t
} from "./chunk.ZOLM25O6.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
import {
  ke
} from "./chunk.XHSHLALN.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/rating/rating.component.ts
var PRating = class extends PureElement {
  constructor() {
    super(...arguments);
    this.hoverValue = 0;
    this.isHovering = false;
    this.label = "";
    this.value = 0;
    this.max = 5;
    this.precision = 1;
    this.readonly = false;
    this.disabled = false;
    this.getSymbol = () => '<p-icon name="star-fill" library="system"></p-icon>';
  }
  getValueFromMousePosition(event) {
    return this.getValueFromXCoordinate(event.clientX);
  }
  getValueFromTouchPosition(event) {
    return this.getValueFromXCoordinate(event.touches[0].clientX);
  }
  getValueFromXCoordinate(coordinate) {
    const isRtl = this.matches(":dir(rtl)");
    const { left, right, width } = this.rating.getBoundingClientRect();
    const value = isRtl ? this.roundToPrecision((right - coordinate) / width * this.max, this.precision) : this.roundToPrecision((coordinate - left) / width * this.max, this.precision);
    return clamp(value, 0, this.max);
  }
  handleClick(event) {
    if (this.disabled) {
      return;
    }
    this.setValue(this.getValueFromMousePosition(event));
    this.emit("p-change");
  }
  setValue(newValue) {
    if (this.disabled || this.readonly) {
      return;
    }
    this.value = newValue === this.value ? 0 : newValue;
    this.isHovering = false;
  }
  handleKeyDown(event) {
    const isLtr = this.matches(":dir(ltr)");
    const isRtl = this.matches(":dir(rtl)");
    const oldValue = this.value;
    if (this.disabled || this.readonly) {
      return;
    }
    if (event.key === "ArrowDown" || isLtr && event.key === "ArrowLeft" || isRtl && event.key === "ArrowRight") {
      const decrement = event.shiftKey ? 1 : this.precision;
      this.value = Math.max(0, this.value - decrement);
      event.preventDefault();
    }
    if (event.key === "ArrowUp" || isLtr && event.key === "ArrowRight" || isRtl && event.key === "ArrowLeft") {
      const increment = event.shiftKey ? 1 : this.precision;
      this.value = Math.min(this.max, this.value + increment);
      event.preventDefault();
    }
    if (event.key === "Home") {
      this.value = 0;
      event.preventDefault();
    }
    if (event.key === "End") {
      this.value = this.max;
      event.preventDefault();
    }
    if (this.value !== oldValue) {
      this.emit("p-change");
    }
  }
  handleMouseEnter(event) {
    this.isHovering = true;
    this.hoverValue = this.getValueFromMousePosition(event);
  }
  handleMouseMove(event) {
    this.hoverValue = this.getValueFromMousePosition(event);
  }
  handleMouseLeave() {
    this.isHovering = false;
  }
  handleTouchStart(event) {
    this.isHovering = true;
    this.hoverValue = this.getValueFromTouchPosition(event);
    event.preventDefault();
  }
  handleTouchMove(event) {
    this.hoverValue = this.getValueFromTouchPosition(event);
  }
  handleTouchEnd(event) {
    this.isHovering = false;
    this.setValue(this.hoverValue);
    this.emit("p-change");
    event.preventDefault();
  }
  roundToPrecision(numberToRound, precision = 0.5) {
    const multiplier = 1 / precision;
    return Math.ceil(numberToRound * multiplier) / multiplier;
  }
  handleHoverValueChange() {
    this.emit("p-hover", {
      detail: {
        phase: "move",
        value: this.hoverValue
      }
    });
  }
  handleIsHoveringChange() {
    this.emit("p-hover", {
      detail: {
        phase: this.isHovering ? "start" : "end",
        value: this.hoverValue
      }
    });
  }
  /** Sets focus on the rating. */
  focus(options) {
    this.rating.focus(options);
  }
  /** Removes focus from the rating. */
  blur() {
    this.rating.blur();
  }
  render() {
    const isRtl = this.matches(":dir(rtl)");
    const counter = Array.from(Array(this.max).keys());
    let displayValue = 0;
    if (this.disabled || this.readonly) {
      displayValue = this.value;
    } else {
      displayValue = this.isHovering ? this.hoverValue : this.value;
    }
    return ke`
      <div
        part="base"
        class=${Rt({
      rating: true,
      "rating--readonly": this.readonly,
      "rating--disabled": this.disabled,
      "rating--rtl": isRtl
    })}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-readonly=${this.readonly ? "true" : "false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled ? "-1" : "0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${counter.map((index) => {
      if (displayValue > index && displayValue < index + 1) {
        return ke`
                <span
                  class=${Rt({
          rating__symbol: true,
          "rating__partial-symbol-container": true,
          "rating__symbol--hover": this.isHovering && Math.ceil(displayValue) === index + 1
        })}
                  role="presentation"
                >
                  <div
                    style=${se({
          clipPath: isRtl ? `inset(0 ${(displayValue - index) * 100}% 0 0)` : `inset(0 0 0 ${(displayValue - index) * 100}%)`
        })}
                  >
                    ${ae(this.getSymbol(index + 1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${se({
          clipPath: isRtl ? `inset(0 0 0 ${100 - (displayValue - index) * 100}%)` : `inset(0 ${100 - (displayValue - index) * 100}% 0 0)`
        })}
                  >
                    ${ae(this.getSymbol(index + 1))}
                  </div>
                </span>
              `;
      }
      return ke`
              <span
                class=${Rt({
        rating__symbol: true,
        "rating__symbol--hover": this.isHovering && Math.ceil(displayValue) === index + 1,
        "rating__symbol--active": displayValue >= index + 1
      })}
                role="presentation"
              >
                ${ae(this.getSymbol(index + 1))}
              </span>
            `;
    })}
        </span>
      </div>
    `;
  }
};
PRating.styles = [component_styles_default, rating_styles_default];
PRating.dependencies = { "p-icon": PIcon };
__decorateClass([
  e(".rating")
], PRating.prototype, "rating", 2);
__decorateClass([
  r()
], PRating.prototype, "hoverValue", 2);
__decorateClass([
  r()
], PRating.prototype, "isHovering", 2);
__decorateClass([
  n()
], PRating.prototype, "label", 2);
__decorateClass([
  n({ type: Number })
], PRating.prototype, "value", 2);
__decorateClass([
  n({ type: Number })
], PRating.prototype, "max", 2);
__decorateClass([
  n({ type: Number })
], PRating.prototype, "precision", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PRating.prototype, "readonly", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PRating.prototype, "disabled", 2);
__decorateClass([
  n()
], PRating.prototype, "getSymbol", 2);
__decorateClass([
  t({ passive: true })
], PRating.prototype, "handleTouchMove", 1);
__decorateClass([
  watch("hoverValue")
], PRating.prototype, "handleHoverValueChange", 1);
__decorateClass([
  watch("isHovering")
], PRating.prototype, "handleIsHoveringChange", 1);

export {
  PRating
};
