import {
  PIcon
} from "./chunk.AV2NC2PZ.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  Rt
} from "./chunk.A56LY5J2.js";
import {
  PureElement,
  n,
  r
} from "./chunk.JFV5DLRK.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
import {
  avatar_styles_default
} from "./chunk.TOUJN3GH.js";
import {
  ke
} from "./chunk.XHSHLALN.js";
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
    const avatarWithImage = ke`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;
    let avatarWithoutImage = ke``;
    if (this.initials) {
      avatarWithoutImage = ke`<div part="initials" class="avatar__initials">${this.initials}</div>`;
    } else {
      avatarWithoutImage = ke`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <p-icon name="person-fill" library="system"></p-icon>
          </slot>
        </div>
      `;
    }
    return ke`
      <div
        part="base"
        class=${Rt({
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
