import {
  tree_item_styles_default
} from "./chunk.KUDRQ6IZ.js";
import {
  PCheckbox
} from "./chunk.AYOYKLZ7.js";
import {
  l
} from "./chunk.UMY5JZS5.js";
import {
  PSpinner
} from "./chunk.5UQPUEWC.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.RCZVQXWP.js";
import {
  animateTo,
  shimKeyframesHeightAuto,
  stopAnimations
} from "./chunk.S7GYYU7Z.js";
import {
  LocalizeController
} from "./chunk.2ALBA6CJ.js";
import {
  e
} from "./chunk.TGM7ILZL.js";
import {
  PIcon
} from "./chunk.SS7FUO7C.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  e as e2,
  n,
  r
} from "./chunk.POVQYKF3.js";
import {
  component_styles_default
} from "./chunk.U7KETH4O.js";
import {
  x
} from "./chunk.N4FVDREO.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// node_modules/lit-html/directives/when.js
function n2(n3, r2, t) {
  return n3 ? r2(n3) : t == null ? void 0 : t(n3);
}

// src/components/tree-item/tree-item.component.ts
var _PTreeItem = class _PTreeItem extends PureElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.indeterminate = false;
    this.isLeaf = false;
    this.loading = false;
    this.selectable = false;
    this.expanded = false;
    this.selected = false;
    this.disabled = false;
    this.lazy = false;
  }
  static isTreeItem(node) {
    return node instanceof Element && node.getAttribute("role") === "treeitem";
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "treeitem");
    this.setAttribute("tabindex", "-1");
    if (this.isNestedItem()) {
      this.slot = "children";
    }
  }
  firstUpdated() {
    this.childrenContainer.hidden = !this.expanded;
    this.childrenContainer.style.height = this.expanded ? "auto" : "0";
    this.isLeaf = !this.lazy && this.getChildrenItems().length === 0;
    this.handleExpandedChange();
  }
  async animateCollapse() {
    this.emit("p-collapse");
    await stopAnimations(this.childrenContainer);
    const { keyframes, options } = getAnimation(this, "tree-item.collapse", { dir: this.localize.dir() });
    await animateTo(
      this.childrenContainer,
      shimKeyframesHeightAuto(keyframes, this.childrenContainer.scrollHeight),
      options
    );
    this.childrenContainer.hidden = true;
    this.emit("p-after-collapse");
  }
  // Checks whether the item is nested into an item
  isNestedItem() {
    const parent = this.parentElement;
    return !!parent && _PTreeItem.isTreeItem(parent);
  }
  handleChildrenSlotChange() {
    this.loading = false;
    this.isLeaf = !this.lazy && this.getChildrenItems().length === 0;
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("selected") && !changedProperties.has("indeterminate")) {
      this.indeterminate = false;
    }
  }
  async animateExpand() {
    this.emit("p-expand");
    await stopAnimations(this.childrenContainer);
    this.childrenContainer.hidden = false;
    const { keyframes, options } = getAnimation(this, "tree-item.expand", { dir: this.localize.dir() });
    await animateTo(
      this.childrenContainer,
      shimKeyframesHeightAuto(keyframes, this.childrenContainer.scrollHeight),
      options
    );
    this.childrenContainer.style.height = "auto";
    this.emit("p-after-expand");
  }
  handleLoadingChange() {
    this.setAttribute("aria-busy", this.loading ? "true" : "false");
    if (!this.loading) {
      this.animateExpand();
    }
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleSelectedChange() {
    this.setAttribute("aria-selected", this.selected ? "true" : "false");
  }
  handleExpandedChange() {
    if (!this.isLeaf) {
      this.setAttribute("aria-expanded", this.expanded ? "true" : "false");
    } else {
      this.removeAttribute("aria-expanded");
    }
  }
  handleExpandAnimation() {
    if (this.expanded) {
      if (this.lazy) {
        this.loading = true;
        this.emit("p-lazy-load");
      } else {
        this.animateExpand();
      }
    } else {
      this.animateCollapse();
    }
  }
  handleLazyChange() {
    this.emit("p-lazy-change");
  }
  /** Gets all the nested tree items in this node. */
  getChildrenItems({ includeDisabled = true } = {}) {
    return this.childrenSlot ? [...this.childrenSlot.assignedElements({ flatten: true })].filter(
      (item) => _PTreeItem.isTreeItem(item) && (includeDisabled || !item.disabled)
    ) : [];
  }
  render() {
    const isRtl = this.matches(":dir(rtl)");
    const showExpandButton = !this.loading && (!this.isLeaf || this.lazy);
    return x`
      <div
        part="base"
        class="${e({
      "tree-item": true,
      "tree-item--expanded": this.expanded,
      "tree-item--selected": this.selected,
      "tree-item--disabled": this.disabled,
      "tree-item--leaf": this.isLeaf,
      "tree-item--has-expand-button": showExpandButton,
      "tree-item--rtl": this.localize.dir() === "rtl"
    })}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled ? "item--disabled" : ""}
            ${this.expanded ? "item--expanded" : ""}
            ${this.indeterminate ? "item--indeterminate" : ""}
            ${this.selected ? "item--selected" : ""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${e({
      "tree-item__expand-button": true,
      "tree-item__expand-button--visible": showExpandButton
    })}
            aria-hidden="true"
          >
            ${n2(this.loading, () => x` <p-spinner part="spinner" exportparts="base:spinner__base"></p-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <p-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></p-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <p-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></p-icon>
            </slot>
          </div>

          ${n2(
      this.selectable,
      () => x`
              <p-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${l(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></p-checkbox>
            `
    )}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `;
  }
};
_PTreeItem.styles = [component_styles_default, tree_item_styles_default];
_PTreeItem.dependencies = {
  "p-checkbox": PCheckbox,
  "p-icon": PIcon,
  "p-spinner": PSpinner
};
__decorateClass([
  r()
], _PTreeItem.prototype, "indeterminate", 2);
__decorateClass([
  r()
], _PTreeItem.prototype, "isLeaf", 2);
__decorateClass([
  r()
], _PTreeItem.prototype, "loading", 2);
__decorateClass([
  r()
], _PTreeItem.prototype, "selectable", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], _PTreeItem.prototype, "expanded", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], _PTreeItem.prototype, "selected", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], _PTreeItem.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], _PTreeItem.prototype, "lazy", 2);
__decorateClass([
  e2("slot:not([name])")
], _PTreeItem.prototype, "defaultSlot", 2);
__decorateClass([
  e2("slot[name=children]")
], _PTreeItem.prototype, "childrenSlot", 2);
__decorateClass([
  e2(".tree-item__item")
], _PTreeItem.prototype, "itemElement", 2);
__decorateClass([
  e2(".tree-item__children")
], _PTreeItem.prototype, "childrenContainer", 2);
__decorateClass([
  e2(".tree-item__expand-button slot")
], _PTreeItem.prototype, "expandButtonSlot", 2);
__decorateClass([
  watch("loading", { waitUntilFirstUpdate: true })
], _PTreeItem.prototype, "handleLoadingChange", 1);
__decorateClass([
  watch("disabled")
], _PTreeItem.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("selected")
], _PTreeItem.prototype, "handleSelectedChange", 1);
__decorateClass([
  watch("expanded", { waitUntilFirstUpdate: true })
], _PTreeItem.prototype, "handleExpandedChange", 1);
__decorateClass([
  watch("expanded", { waitUntilFirstUpdate: true })
], _PTreeItem.prototype, "handleExpandAnimation", 1);
__decorateClass([
  watch("lazy", { waitUntilFirstUpdate: true })
], _PTreeItem.prototype, "handleLazyChange", 1);
var PTreeItem = _PTreeItem;
setDefaultAnimation("tree-item.expand", {
  keyframes: [
    { height: "0", opacity: "0", overflow: "hidden" },
    { height: "auto", opacity: "1", overflow: "hidden" }
  ],
  options: { duration: 250, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" }
});
setDefaultAnimation("tree-item.collapse", {
  keyframes: [
    { height: "auto", opacity: "1", overflow: "hidden" },
    { height: "0", opacity: "0", overflow: "hidden" }
  ],
  options: { duration: 200, easing: "cubic-bezier(0.4, 0.0, 0.2, 1)" }
});

export {
  PTreeItem
};
/*! Bundled license information:

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
