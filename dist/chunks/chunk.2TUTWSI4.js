import {
  PIcon
} from "./chunk.ZV3MKUGJ.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  e,
  n,
  r
} from "./chunk.MS3LDSMF.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
import {
  animated_image_styles_default
} from "./chunk.MKTYGTX7.js";
import {
  ke
} from "./chunk.XHSHLALN.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/animated-image/animated-image.component.ts
var PAnimatedImage = class extends PureElement {
  constructor() {
    super(...arguments);
    this.isLoaded = false;
  }
  handleClick() {
    this.play = !this.play;
  }
  handleLoad() {
    const canvas = document.createElement("canvas");
    const { width, height } = this.animatedImage;
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(this.animatedImage, 0, 0, width, height);
    this.frozenFrame = canvas.toDataURL("image/gif");
    if (!this.isLoaded) {
      this.emit("p-load");
      this.isLoaded = true;
    }
  }
  handleError() {
    this.emit("p-error");
  }
  handlePlayChange() {
    if (this.play) {
      this.animatedImage.src = "";
      this.animatedImage.src = this.src;
    }
  }
  handleSrcChange() {
    this.isLoaded = false;
  }
  render() {
    return ke`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play ? "false" : "true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded ? ke`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play ? "true" : "false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><p-icon name="play-fill" library="system"></p-icon></slot>
                <slot name="pause-icon"><p-icon name="pause-fill" library="system"></p-icon></slot>
              </div>
            ` : ""}
      </div>
    `;
  }
};
PAnimatedImage.styles = [component_styles_default, animated_image_styles_default];
PAnimatedImage.dependencies = { "p-icon": PIcon };
__decorateClass([
  e(".animated-image__animated")
], PAnimatedImage.prototype, "animatedImage", 2);
__decorateClass([
  r()
], PAnimatedImage.prototype, "frozenFrame", 2);
__decorateClass([
  r()
], PAnimatedImage.prototype, "isLoaded", 2);
__decorateClass([
  n()
], PAnimatedImage.prototype, "src", 2);
__decorateClass([
  n()
], PAnimatedImage.prototype, "alt", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PAnimatedImage.prototype, "play", 2);
__decorateClass([
  watch("play", { waitUntilFirstUpdate: true })
], PAnimatedImage.prototype, "handlePlayChange", 1);
__decorateClass([
  watch("src")
], PAnimatedImage.prototype, "handleSrcChange", 1);

export {
  PAnimatedImage
};
