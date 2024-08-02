import {
  PIcon
} from "./chunk.754SXST7.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  e
} from "./chunk.TGM7ILZL.js";
import {
  PureElement,
  n,
  r
} from "./chunk.YAN27CLM.js";
import {
  component_styles_default
} from "./chunk.U7KETH4O.js";
import {
  avatar_styles_default
} from "./chunk.5UHP4D6Z.js";
import {
  x
} from "./chunk.N4FVDREO.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/avatar/avatar.component.ts
var PAvatar = class extends PureElement {
  constructor() {
    super(...arguments);
    this.hasError = false;
    this.image = "";
    this.label = "";
    this.initials = "";
    this.loading = "eager";
    this.shape = "circle";
  }
  handleImageChange() {
    this.hasError = false;
  }
  handleImageLoadError() {
    this.hasError = true;
    this.emit("p-error");
  }
  render() {
    const avatarWithImage = x`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;
    let avatarWithoutImage = x``;
    if (this.initials) {
      avatarWithoutImage = x`<div part="initials" class="avatar__initials">${this.initials}</div>`;
    } else {
      avatarWithoutImage = x`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <p-icon name="person-fill" library="system"></p-icon>
          </slot>
        </div>
      `;
    }
    return x`
      <div
        part="base"
        class=${e({
      avatar: true,
      "avatar--circle": this.shape === "circle",
      "avatar--rounded": this.shape === "rounded",
      "avatar--square": this.shape === "square"
    })}
        role="img"
        aria-label=${this.label}
      >
        ${this.image && !this.hasError ? avatarWithImage : avatarWithoutImage}
      </div>
    `;
  }
};
PAvatar.styles = [component_styles_default, avatar_styles_default];
PAvatar.dependencies = {
  "p-icon": PIcon
};
__decorateClass([
  r()
], PAvatar.prototype, "hasError", 2);
__decorateClass([
  n()
], PAvatar.prototype, "image", 2);
__decorateClass([
  n()
], PAvatar.prototype, "label", 2);
__decorateClass([
  n()
], PAvatar.prototype, "initials", 2);
__decorateClass([
  n()
], PAvatar.prototype, "loading", 2);
__decorateClass([
  n({ reflect: true })
], PAvatar.prototype, "shape", 2);
__decorateClass([
  watch("image")
], PAvatar.prototype, "handleImageChange", 1);

export {
  PAvatar
};
