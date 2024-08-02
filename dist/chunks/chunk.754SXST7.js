import {
  e
} from "./chunk.KW4FMSMA.js";
import {
  icon_styles_default
} from "./chunk.X2POQZYI.js";
import {
  getIconLibrary,
  unwatchIcon,
  watchIcon
} from "./chunk.MCE657RG.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  n,
  r
} from "./chunk.YAN27CLM.js";
import {
  component_styles_default
} from "./chunk.U7KETH4O.js";
import {
  x
} from "./chunk.N4FVDREO.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/icon/icon.component.ts
var CACHEABLE_ERROR = Symbol();
var RETRYABLE_ERROR = Symbol();
var parser;
var iconCache = /* @__PURE__ */ new Map();
var PIcon = class extends PureElement {
  constructor() {
    super(...arguments);
    this.initialRender = false;
    this.svg = null;
    this.label = "";
    this.library = "default";
  }
  /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
  async resolveIcon(url, library) {
    var _a;
    let fileData;
    if (library == null ? void 0 : library.spriteSheet) {
      this.svg = x`<svg part="svg">
        <use part="use" href="${url}"></use>
      </svg>`;
      await this.updateComplete;
      const svg = this.shadowRoot.querySelector("[part='svg']");
      if (typeof library.mutator === "function") {
        library.mutator(svg);
      }
      return this.svg;
    }
    try {
      fileData = await fetch(url, { mode: "cors" });
      if (!fileData.ok)
        return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
    } catch (e2) {
      return RETRYABLE_ERROR;
    }
    try {
      const div = document.createElement("div");
      div.innerHTML = await fileData.text();
      const svg = div.firstElementChild;
      if (((_a = svg == null ? void 0 : svg.tagName) == null ? void 0 : _a.toLowerCase()) !== "svg")
        return CACHEABLE_ERROR;
      if (!parser)
        parser = new DOMParser();
      const doc = parser.parseFromString(svg.outerHTML, "text/html");
      const svgEl = doc.body.querySelector("svg");
      if (!svgEl)
        return CACHEABLE_ERROR;
      svgEl.part.add("svg");
      return document.adoptNode(svgEl);
    } catch (e2) {
      return CACHEABLE_ERROR;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    watchIcon(this);
  }
  firstUpdated() {
    this.initialRender = true;
    this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchIcon(this);
  }
  getIconSource() {
    const library = getIconLibrary(this.library);
    if (this.name && library) {
      return {
        url: library.resolver(this.name),
        fromLibrary: true
      };
    }
    return {
      url: this.src,
      fromLibrary: false
    };
  }
  handleLabelChange() {
    const hasLabel = typeof this.label === "string" && this.label.length > 0;
    if (hasLabel) {
      this.setAttribute("role", "img");
      this.setAttribute("aria-label", this.label);
      this.removeAttribute("aria-hidden");
    } else {
      this.removeAttribute("role");
      this.removeAttribute("aria-label");
      this.setAttribute("aria-hidden", "true");
    }
  }
  async setIcon() {
    var _a;
    const { url, fromLibrary } = this.getIconSource();
    const library = fromLibrary ? getIconLibrary(this.library) : void 0;
    if (!url) {
      this.svg = null;
      return;
    }
    let iconResolver = iconCache.get(url);
    if (!iconResolver) {
      iconResolver = this.resolveIcon(url, library);
      iconCache.set(url, iconResolver);
    }
    if (!this.initialRender) {
      return;
    }
    const svg = await iconResolver;
    if (svg === RETRYABLE_ERROR) {
      iconCache.delete(url);
    }
    if (url !== this.getIconSource().url) {
      return;
    }
    if (e(svg)) {
      this.svg = svg;
      return;
    }
    switch (svg) {
      case RETRYABLE_ERROR:
      case CACHEABLE_ERROR:
        this.svg = null;
        this.emit("p-error");
        break;
      default:
        this.svg = svg.cloneNode(true);
        (_a = library == null ? void 0 : library.mutator) == null ? void 0 : _a.call(library, this.svg);
        this.emit("p-load");
    }
  }
  render() {
    return this.svg;
  }
};
PIcon.styles = [component_styles_default, icon_styles_default];
__decorateClass([
  r()
], PIcon.prototype, "svg", 2);
__decorateClass([
  n({ reflect: true })
], PIcon.prototype, "name", 2);
__decorateClass([
  n()
], PIcon.prototype, "src", 2);
__decorateClass([
  n()
], PIcon.prototype, "label", 2);
__decorateClass([
  n({ reflect: true })
], PIcon.prototype, "library", 2);
__decorateClass([
  watch("label")
], PIcon.prototype, "handleLabelChange", 1);
__decorateClass([
  watch(["name", "src", "library"])
], PIcon.prototype, "setIcon", 1);

export {
  PIcon
};