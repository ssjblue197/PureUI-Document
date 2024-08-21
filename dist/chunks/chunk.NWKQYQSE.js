import {
  breadcrumb_item_styles_default
} from "./chunk.WUN6KET7.js";
import {
  o
} from "./chunk.F2SYCU5S.js";
import {
  HasSlotController
} from "./chunk.MLXUTV4G.js";
import {
  e
} from "./chunk.TGM7ILZL.js";
import {
  PureElement,
  n
} from "./chunk.DB2BRK7T.js";
import {
  component_styles_default
} from "./chunk.U7KETH4O.js";
import {
  x
} from "./chunk.N4FVDREO.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/breadcrumb-item/breadcrumb-item.component.ts
var PBreadcrumbItem = class extends PureElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "prefix", "suffix");
    this.rel = "noreferrer noopener";
  }
  render() {
    const isLink = this.href ? true : false;
    return x`
      <div
        part="base"
        class=${e({
      "breadcrumb-item": true,
      "breadcrumb-item--has-prefix": this.hasSlotController.test("prefix"),
      "breadcrumb-item--has-suffix": this.hasSlotController.test("suffix")
    })}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${isLink ? x`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${o(this.target ? this.target : void 0)}"
                rel=${o(this.target ? this.rel : void 0)}
              >
                <slot></slot>
              </a>
            ` : x`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `;
  }
};
PBreadcrumbItem.styles = [component_styles_default, breadcrumb_item_styles_default];
__decorateClass([
  n()
], PBreadcrumbItem.prototype, "href", 2);
__decorateClass([
  n()
], PBreadcrumbItem.prototype, "target", 2);
__decorateClass([
  n()
], PBreadcrumbItem.prototype, "rel", 2);

export {
  PBreadcrumbItem
};
