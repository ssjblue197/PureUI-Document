import {
  tag_styles_default
} from "./chunk.BBWZSNKY.js";
import {
  PIconButton
} from "./chunk.SW6HAEMP.js";
import {
  LocalizeController
} from "./chunk.3C33BQBP.js";
import {
  Rt
} from "./chunk.A56LY5J2.js";
import {
  PureElement,
  n
} from "./chunk.YAPKKD6K.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
import {
  ke
} from "./chunk.XHSHLALN.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/tag/tag.component.ts
var PTag = class extends PureElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.variant = "neutral";
    this.size = "medium";
    this.pill = false;
    this.removable = false;
  }
  handleRemoveClick() {
    this.emit("p-remove");
  }
  render() {
    return ke`
      <span
        part="base"
        class=${Rt({
      tag: true,
      // Types
      "tag--primary": this.variant === "primary",
      "tag--success": this.variant === "success",
      "tag--neutral": this.variant === "neutral",
      "tag--warning": this.variant === "warning",
      "tag--danger": this.variant === "danger",
      "tag--text": this.variant === "text",
      // Sizes
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      // Modifiers
      "tag--pill": this.pill,
      "tag--removable": this.removable
    })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable ? ke`
              <p-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></p-icon-button>
            ` : ""}
      </span>
    `;
  }
};
PTag.styles = [component_styles_default, tag_styles_default];
PTag.dependencies = { "p-icon-button": PIconButton };
__decorateClass([
  n({ reflect: true })
], PTag.prototype, "variant", 2);
__decorateClass([
  n({ reflect: true })
], PTag.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PTag.prototype, "pill", 2);
__decorateClass([
  n({ type: Boolean })
], PTag.prototype, "removable", 2);

export {
  PTag
};
