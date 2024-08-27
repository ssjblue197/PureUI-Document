import {
  card_styles_default
} from "./chunk.CBNVC72O.js";
import {
  HasSlotController
} from "./chunk.MLXUTV4G.js";
import {
  e
} from "./chunk.CEXDE6O2.js";
import {
  PureElement
} from "./chunk.QI6KJOCL.js";
import {
  component_styles_default
} from "./chunk.4LEQW7ML.js";
import {
  x
} from "./chunk.YOCEZMWG.js";

// src/components/card/card.component.ts
var PCard = class extends PureElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "footer", "header", "image");
  }
  render() {
    return x`
      <div
        part="base"
        class=${e({
      card: true,
      "card--has-footer": this.hasSlotController.test("footer"),
      "card--has-image": this.hasSlotController.test("image"),
      "card--has-header": this.hasSlotController.test("header")
    })}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `;
  }
};
PCard.styles = [component_styles_default, card_styles_default];

export {
  PCard
};