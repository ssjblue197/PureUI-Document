import {
  mutation_observer_styles_default
} from "./chunk.YGHBMGBA.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  n
} from "./chunk.I5FGHXR7.js";
import {
  component_styles_default
} from "./chunk.4LEQW7ML.js";
import {
  x
} from "./chunk.YOCEZMWG.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/mutation-observer/mutation-observer.component.ts
var PMutationObserver = class extends PureElement {
  constructor() {
    super(...arguments);
    this.attrOldValue = false;
    this.charData = false;
    this.charDataOldValue = false;
    this.childList = false;
    this.disabled = false;
    this.handleMutation = (mutationList) => {
      this.emit("p-mutation", {
        detail: { mutationList }
      });
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.mutationObserver = new MutationObserver(this.handleMutation);
    if (!this.disabled) {
      this.startObserver();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObserver();
  }
  startObserver() {
    const observeAttributes = typeof this.attr === "string" && this.attr.length > 0;
    const attributeFilter = observeAttributes && this.attr !== "*" ? this.attr.split(" ") : void 0;
    try {
      this.mutationObserver.observe(this, {
        subtree: true,
        childList: this.childList,
        attributes: observeAttributes,
        attributeFilter,
        attributeOldValue: this.attrOldValue,
        characterData: this.charData,
        characterDataOldValue: this.charDataOldValue
      });
    } catch (e) {
    }
  }
  stopObserver() {
    this.mutationObserver.disconnect();
  }
  handleDisabledChange() {
    if (this.disabled) {
      this.stopObserver();
    } else {
      this.startObserver();
    }
  }
  handleChange() {
    this.stopObserver();
    this.startObserver();
  }
  render() {
    return x` <slot></slot> `;
  }
};
PMutationObserver.styles = [component_styles_default, mutation_observer_styles_default];
__decorateClass([
  n({ reflect: true })
], PMutationObserver.prototype, "attr", 2);
__decorateClass([
  n({ attribute: "attr-old-value", type: Boolean, reflect: true })
], PMutationObserver.prototype, "attrOldValue", 2);
__decorateClass([
  n({ attribute: "char-data", type: Boolean, reflect: true })
], PMutationObserver.prototype, "charData", 2);
__decorateClass([
  n({ attribute: "char-data-old-value", type: Boolean, reflect: true })
], PMutationObserver.prototype, "charDataOldValue", 2);
__decorateClass([
  n({ attribute: "child-list", type: Boolean, reflect: true })
], PMutationObserver.prototype, "childList", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PMutationObserver.prototype, "disabled", 2);
__decorateClass([
  watch("disabled")
], PMutationObserver.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("attr", { waitUntilFirstUpdate: true }),
  watch("attr-old-value", { waitUntilFirstUpdate: true }),
  watch("char-data", { waitUntilFirstUpdate: true }),
  watch("char-data-old-value", { waitUntilFirstUpdate: true }),
  watch("childList", { waitUntilFirstUpdate: true })
], PMutationObserver.prototype, "handleChange", 1);

export {
  PMutationObserver
};
