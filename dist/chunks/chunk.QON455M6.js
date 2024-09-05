import {
  file_upload_item_styles_default
} from "./chunk.VBBMC5DW.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.F6XYW4W5.js";
import {
  waitForEvent
} from "./chunk.B4BZKR24.js";
import {
  animateTo,
  stopAnimations
} from "./chunk.S7GYYU7Z.js";
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
  LocalizeController
} from "./chunk.BTMIVMQK.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  e,
  n
} from "./chunk.MS3LDSMF.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
import {
  ke
} from "./chunk.XHSHLALN.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/file-upload-item/file-upload-item.component.ts
var PFileUploadItem = class extends PureElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "image", "suffix");
    this.localize = new LocalizeController(this);
    this.loading = false;
    this.warning = false;
    this.closable = false;
    this.value = "";
    this.hidden = false;
  }
  firstUpdated() {
    this.base.hidden = this.hidden;
  }
  async handleHiddenChange() {
    if (!this.hidden) {
      this.emit("p-show");
      await stopAnimations(this.base);
      this.base.hidden = false;
      const { keyframes, options } = getAnimation(this, "file-upload-item.show", { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);
      this.emit("p-after-show");
    } else {
      this.emit("p-hide");
      await stopAnimations(this.base);
      const { keyframes, options } = getAnimation(this, "file-upload-item.hide", { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);
      this.base.hidden = true;
      this.emit("p-after-hide");
    }
  }
  /** Shows the item. */
  async show() {
    if (!this.hidden) {
      return void 0;
    }
    this.hidden = false;
    return waitForEvent(this, "p-after-show");
  }
  /** Hides the item */
  async hide() {
    if (this.hidden) {
      return void 0;
    }
    this.hidden = true;
    return waitForEvent(this, "p-after-hide");
  }
  handleCloseClick() {
    this.hide();
  }
  handleTriggerKeyUp(event) {
    if (event.key === "\xA0 ") {
      event.preventDefault();
    }
  }
  render() {
    return ke`
      <div
        part="base"
        class=${Rt({
      "file-upload-item": true,
      "file-upload-item--hidden": this.hidden,
      "file-upload-item--closable": this.closable,
      "file-upload-item--warning": this.warning,
      "file-upload-item--has-size": this.size,
      "file-upload-item--is-loading": this.loading,
      "file-upload-item--has-image": this.hasSlotController.test("image")
    })}
      >
        <span class="file-upload-item__content">
          <span part="image" class="file-upload-item__image">
            <slot name="image"></slot>
          </span>
          <span part="label" class="file-upload-item__label">
            <slot></slot>
            ${this.size ? ke`<p-format-bytes value="${this.size}" class="file-upload-item__label__size"></p-format-bytes>` : ""}
          </span>
          ${this.loading ? ke`
                <span class="file-upload-item__progress-bar__container">
                  <p-progress-bar
                    class="file-upload-item__progress-bar"
                    ?indeterminate=${this.progress === void 0}
                    value=${to(this.progress)}
                    label=${to(this.label)}
                  ></p-progress-bar>
                </span>
              ` : ""}
        </span>
        ${this.closable ? ke`
              <span
                class="file-upload-item__close-button"
                @click=${this.handleCloseClick}
                @keyup=${this.handleTriggerKeyUp}
              >
                <slot name="close-button">
                  <p-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    name="x"
                    library="system"
                  ></p-icon-button>
                </slot>
              </span>
            ` : ""}
      </div>
    `;
  }
};
PFileUploadItem.styles = [component_styles_default, file_upload_item_styles_default];
__decorateClass([
  e('[part="base"]')
], PFileUploadItem.prototype, "base", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PFileUploadItem.prototype, "loading", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], PFileUploadItem.prototype, "progress", 2);
__decorateClass([
  n()
], PFileUploadItem.prototype, "label", 2);
__decorateClass([
  n()
], PFileUploadItem.prototype, "lang", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PFileUploadItem.prototype, "warning", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PFileUploadItem.prototype, "closable", 2);
__decorateClass([
  n()
], PFileUploadItem.prototype, "value", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], PFileUploadItem.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PFileUploadItem.prototype, "hidden", 2);
__decorateClass([
  watch("hidden", { waitUntilFirstUpdate: true })
], PFileUploadItem.prototype, "handleHiddenChange", 1);
setDefaultAnimation("file-upload-item.show", {
  keyframes: [
    { opacity: 0, transform: "scale(0.8)" },
    { opacity: 1, transform: "scale(1)" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("file-upload-item.hide", {
  keyframes: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.8)" }
  ],
  options: { duration: 250, easing: "ease" }
});

export {
  PFileUploadItem
};
