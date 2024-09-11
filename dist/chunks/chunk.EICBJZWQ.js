import {
  PTooltip
} from "./chunk.SW7WKBME.js";
import {
  copy_button_styles_default
} from "./chunk.RNZSUMOB.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.F6XYW4W5.js";
import {
  LocalizeController
} from "./chunk.BTMIVMQK.js";
import {
  Rt
} from "./chunk.A56LY5J2.js";
import {
  PIcon
} from "./chunk.XVBMOSTV.js";
import {
  PureElement,
  e,
  n,
  r
} from "./chunk.6TVMG3WD.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
import {
  ke
} from "./chunk.XHSHLALN.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/copy-button/copy-button.component.ts
var PCopyButton = class extends PureElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.isCopying = false;
    this.status = "rest";
    this.value = "";
    this.from = "";
    this.disabled = false;
    this.copyLabel = "";
    this.successLabel = "";
    this.errorLabel = "";
    this.feedbackDuration = 1e3;
    this.tooltipPlacement = "top";
    this.hoist = false;
  }
  async handleCopy() {
    if (this.disabled || this.isCopying) {
      return;
    }
    this.isCopying = true;
    let valueToCopy = this.value;
    if (this.from) {
      const root = this.getRootNode();
      const isProperty = this.from.includes(".");
      const isAttribute = this.from.includes("[") && this.from.includes("]");
      let id = this.from;
      let field = "";
      if (isProperty) {
        [id, field] = this.from.trim().split(".");
      } else if (isAttribute) {
        [id, field] = this.from.trim().replace(/\]$/, "").split("[");
      }
      const target = "getElementById" in root ? root.getElementById(id) : null;
      if (target) {
        if (isAttribute) {
          valueToCopy = target.getAttribute(field) || "";
        } else if (isProperty) {
          valueToCopy = target[field] || "";
        } else {
          valueToCopy = target.textContent || "";
        }
      } else {
        this.showStatus("error");
        this.emit("p-error");
      }
    }
    if (!valueToCopy) {
      this.showStatus("error");
      this.emit("p-error");
    } else {
      try {
        await navigator.clipboard.writeText(valueToCopy);
        this.showStatus("success");
        this.emit("p-copy", {
          detail: {
            value: valueToCopy
          }
        });
      } catch (error) {
        this.showStatus("error");
        this.emit("p-error");
      }
    }
  }
  async showStatus(status) {
    const copyLabel = this.copyLabel || this.localize.term("copy");
    const successLabel = this.successLabel || this.localize.term("copied");
    const errorLabel = this.errorLabel || this.localize.term("error");
    const iconToShow = status === "success" ? this.successIcon : this.errorIcon;
    const showAnimation = getAnimation(this, "copy.in", { dir: "ltr" });
    const hideAnimation = getAnimation(this, "copy.out", { dir: "ltr" });
    this.tooltip.content = status === "success" ? successLabel : errorLabel;
    await this.copyIcon.animate(hideAnimation.keyframes, hideAnimation.options).finished;
    this.copyIcon.hidden = true;
    this.status = status;
    iconToShow.hidden = false;
    await iconToShow.animate(showAnimation.keyframes, showAnimation.options).finished;
    setTimeout(async () => {
      await iconToShow.animate(hideAnimation.keyframes, hideAnimation.options).finished;
      iconToShow.hidden = true;
      this.status = "rest";
      this.copyIcon.hidden = false;
      await this.copyIcon.animate(showAnimation.keyframes, showAnimation.options).finished;
      this.tooltip.content = copyLabel;
      this.isCopying = false;
    }, this.feedbackDuration);
  }
  render() {
    const copyLabel = this.copyLabel || this.localize.term("copy");
    return ke`
      <p-tooltip
        class=${Rt({
      "copy-button": true,
      "copy-button--success": this.status === "success",
      "copy-button--error": this.status === "error"
    })}
        content=${copyLabel}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <p-icon library="system" name="copy"></p-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <p-icon library="system" name="check"></p-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <p-icon library="system" name="x-lg"></p-icon>
          </slot>
        </button>
      </p-tooltip>
    `;
  }
};
PCopyButton.styles = [component_styles_default, copy_button_styles_default];
PCopyButton.dependencies = {
  "p-icon": PIcon,
  "p-tooltip": PTooltip
};
__decorateClass([
  e('slot[name="copy-icon"]')
], PCopyButton.prototype, "copyIcon", 2);
__decorateClass([
  e('slot[name="success-icon"]')
], PCopyButton.prototype, "successIcon", 2);
__decorateClass([
  e('slot[name="error-icon"]')
], PCopyButton.prototype, "errorIcon", 2);
__decorateClass([
  e("p-tooltip")
], PCopyButton.prototype, "tooltip", 2);
__decorateClass([
  r()
], PCopyButton.prototype, "isCopying", 2);
__decorateClass([
  r()
], PCopyButton.prototype, "status", 2);
__decorateClass([
  n()
], PCopyButton.prototype, "value", 2);
__decorateClass([
  n()
], PCopyButton.prototype, "from", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PCopyButton.prototype, "disabled", 2);
__decorateClass([
  n({ attribute: "copy-label" })
], PCopyButton.prototype, "copyLabel", 2);
__decorateClass([
  n({ attribute: "success-label" })
], PCopyButton.prototype, "successLabel", 2);
__decorateClass([
  n({ attribute: "error-label" })
], PCopyButton.prototype, "errorLabel", 2);
__decorateClass([
  n({ attribute: "feedback-duration", type: Number })
], PCopyButton.prototype, "feedbackDuration", 2);
__decorateClass([
  n({ attribute: "tooltip-placement" })
], PCopyButton.prototype, "tooltipPlacement", 2);
__decorateClass([
  n({ type: Boolean })
], PCopyButton.prototype, "hoist", 2);
setDefaultAnimation("copy.in", {
  keyframes: [
    { scale: ".25", opacity: ".25" },
    { scale: "1", opacity: "1" }
  ],
  options: { duration: 100 }
});
setDefaultAnimation("copy.out", {
  keyframes: [
    { scale: "1", opacity: "1" },
    { scale: ".25", opacity: "0" }
  ],
  options: { duration: 100 }
});

export {
  PCopyButton
};
