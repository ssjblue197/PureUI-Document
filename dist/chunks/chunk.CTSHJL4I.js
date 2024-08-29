import {
  breadcrumb_item_styles_default
} from "./chunk.VMI5YPYC.js";
import {
  to
} from "./chunk.DQNILPUT.js";
import {
  HasSlotController
} from "./chunk.MLXUTV4G.js";
import {
  Rt
} from "./chunk.A56LY5J2.js";
import {
  PureElement,
  n
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

// src/components/breadcrumb-item/breadcrumb-item.component.ts
var PBreadcrumbItem = class extends PureElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "prefix", "suffix");
    this.rel = "noreferrer noopener";
  }
  render() {
    const isLink = this.href ? true : false;
    return ke`
      <div
        part="base"
        class=${Rt({
      "breadcrumb-item": true,
      "breadcrumb-item--has-prefix": this.hasSlotController.test("prefix"),
      "breadcrumb-item--has-suffix": this.hasSlotController.test("suffix")
    })}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${isLink ? ke`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${to(this.target ? this.target : void 0)}"
                rel=${to(this.target ? this.rel : void 0)}
              >
                <slot></slot>
              </a>
            ` : ke`
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
