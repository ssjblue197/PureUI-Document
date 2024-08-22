import {
  drawer_styles_default
} from "./chunk.XSQV77OR.js";
import {
  Modal
} from "./chunk.Q5F6ZDL5.js";
import {
  lockBodyScrolling,
  unlockBodyScrolling
} from "./chunk.TQQ6S3EH.js";
import {
  PIconButton
} from "./chunk.234YSH56.js";
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
  o
} from "./chunk.73IAYF2H.js";
import {
  HasSlotController
} from "./chunk.MLXUTV4G.js";
import {
  e
} from "./chunk.CEXDE6O2.js";
import {
  LocalizeController
} from "./chunk.6BMNUR6W.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  e as e2,
  n
} from "./chunk.I7DGGRXW.js";
import {
  component_styles_default
} from "./chunk.4LEQW7ML.js";
import {
  x
} from "./chunk.YOCEZMWG.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/internal/string.ts
function uppercaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// src/components/drawer/drawer.component.ts
var PDrawer = class extends PureElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "footer");
    this.localize = new LocalizeController(this);
    this.modal = new Modal(this);
    this.open = false;
    this.label = "";
    this.placement = "end";
    this.contained = false;
    this.noHeader = false;
    this.handleDocumentKeyDown = (event) => {
      if (this.contained) {
        return;
      }
      if (event.key === "Escape" && this.modal.isActive() && this.open) {
        event.stopImmediatePropagation();
        this.requestClose("keyboard");
      }
    };
  }
  firstUpdated() {
    this.drawer.hidden = !this.open;
    if (this.open) {
      this.addOpenListeners();
      if (!this.contained) {
        this.modal.activate();
        lockBodyScrolling(this);
      }
    }
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    unlockBodyScrolling(this);
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
  }
  requestClose(source) {
    const slRequestClose = this.emit("p-request-close", {
      cancelable: true,
      detail: { source }
    });
    if (slRequestClose.defaultPrevented) {
      const animation = getAnimation(this, "drawer.denyClose", {
        dir: this.localize.dir()
      });
      animateTo(this.panel, animation.keyframes, animation.options);
      return;
    }
    this.hide();
  }
  addOpenListeners() {
    var _a;
    if ("CloseWatcher" in window) {
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
      if (!this.contained) {
        this.closeWatcher = new CloseWatcher();
        this.closeWatcher.onclose = () => this.requestClose("keyboard");
      }
    } else {
      document.addEventListener("keydown", this.handleDocumentKeyDown);
    }
  }
  removeOpenListeners() {
    var _a;
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
  }
  async handleOpenChange() {
    if (this.open) {
      this.emit("p-show");
      this.addOpenListeners();
      this.originalTrigger = document.activeElement;
      if (!this.contained) {
        this.modal.activate();
        lockBodyScrolling(this);
      }
      const autoFocusTarget = this.querySelector("[autofocus]");
      if (autoFocusTarget) {
        autoFocusTarget.removeAttribute("autofocus");
      }
      await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
      this.drawer.hidden = false;
      requestAnimationFrame(() => {
        const slInitialFocus = this.emit("p-initial-focus", {
          cancelable: true
        });
        if (!slInitialFocus.defaultPrevented) {
          if (autoFocusTarget) {
            autoFocusTarget.focus({
              preventScroll: true
            });
          } else {
            this.panel.focus({ preventScroll: true });
          }
        }
        if (autoFocusTarget) {
          autoFocusTarget.setAttribute("autofocus", "");
        }
      });
      const panelAnimation = getAnimation(this, `drawer.show${uppercaseFirstLetter(this.placement)}`, {
        dir: this.localize.dir()
      });
      const overlayAnimation = getAnimation(this, "drawer.overlay.show", {
        dir: this.localize.dir()
      });
      await Promise.all([
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
      ]);
      this.emit("p-after-show");
    } else {
      this.emit("p-hide");
      this.removeOpenListeners();
      if (!this.contained) {
        this.modal.deactivate();
        unlockBodyScrolling(this);
      }
      await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
      const panelAnimation = getAnimation(this, `drawer.hide${uppercaseFirstLetter(this.placement)}`, {
        dir: this.localize.dir()
      });
      const overlayAnimation = getAnimation(this, "drawer.overlay.hide", {
        dir: this.localize.dir()
      });
      await Promise.all([
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options).then(() => {
          this.overlay.hidden = true;
        }),
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options).then(() => {
          this.panel.hidden = true;
        })
      ]);
      this.drawer.hidden = true;
      this.overlay.hidden = false;
      this.panel.hidden = false;
      const trigger = this.originalTrigger;
      if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
        setTimeout(() => trigger.focus());
      }
      this.emit("p-after-hide");
    }
  }
  handleNoModalChange() {
    if (this.open && !this.contained) {
      this.modal.activate();
      lockBodyScrolling(this);
    }
    if (this.open && this.contained) {
      this.modal.deactivate();
      unlockBodyScrolling(this);
    }
  }
  /** Shows the drawer. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "p-after-show");
  }
  /** Hides the drawer */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "p-after-hide");
  }
  render() {
    return x`
      <div
        part="base"
        class=${e({
      drawer: true,
      "drawer--open": this.open,
      "drawer--top": this.placement === "top",
      "drawer--end": this.placement === "end",
      "drawer--bottom": this.placement === "bottom",
      "drawer--start": this.placement === "start",
      "drawer--contained": this.contained,
      "drawer--fixed": !this.contained,
      "drawer--rtl": this.localize.dir() === "rtl",
      "drawer--has-footer": this.hasSlotController.test("footer")
    })}
      >
        <div part="overlay" class="drawer__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${o(this.noHeader ? this.label : void 0)}
          aria-labelledby=${o(!this.noHeader ? "title" : void 0)}
          tabindex="0"
        >
          ${!this.noHeader ? x`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <p-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${() => this.requestClose("close-button")}
                    ></p-icon-button>
                  </div>
                </header>
              ` : ""}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
};
PDrawer.styles = [component_styles_default, drawer_styles_default];
PDrawer.dependencies = { "p-icon-button": PIconButton };
__decorateClass([
  e2(".drawer")
], PDrawer.prototype, "drawer", 2);
__decorateClass([
  e2(".drawer__panel")
], PDrawer.prototype, "panel", 2);
__decorateClass([
  e2(".drawer__overlay")
], PDrawer.prototype, "overlay", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PDrawer.prototype, "open", 2);
__decorateClass([
  n({ reflect: true })
], PDrawer.prototype, "label", 2);
__decorateClass([
  n({ reflect: true })
], PDrawer.prototype, "placement", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PDrawer.prototype, "contained", 2);
__decorateClass([
  n({ attribute: "no-header", type: Boolean, reflect: true })
], PDrawer.prototype, "noHeader", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], PDrawer.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("contained", { waitUntilFirstUpdate: true })
], PDrawer.prototype, "handleNoModalChange", 1);
setDefaultAnimation("drawer.showTop", {
  keyframes: [
    { opacity: 0, translate: "0 -100%" },
    { opacity: 1, translate: "0 0" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.hideTop", {
  keyframes: [
    { opacity: 1, translate: "0 0" },
    { opacity: 0, translate: "0 -100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.showEnd", {
  keyframes: [
    { opacity: 0, translate: "100%" },
    { opacity: 1, translate: "0" }
  ],
  rtlKeyframes: [
    { opacity: 0, translate: "-100%" },
    { opacity: 1, translate: "0" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.hideEnd", {
  keyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "100%" }
  ],
  rtlKeyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "-100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.showBottom", {
  keyframes: [
    { opacity: 0, translate: "0 100%" },
    { opacity: 1, translate: "0 0" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.hideBottom", {
  keyframes: [
    { opacity: 1, translate: "0 0" },
    { opacity: 0, translate: "0 100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.showStart", {
  keyframes: [
    { opacity: 0, translate: "-100%" },
    { opacity: 1, translate: "0" }
  ],
  rtlKeyframes: [
    { opacity: 0, translate: "100%" },
    { opacity: 1, translate: "0" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.hideStart", {
  keyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "-100%" }
  ],
  rtlKeyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
setDefaultAnimation("drawer.denyClose", {
  keyframes: [{ scale: 1 }, { scale: 1.01 }, { scale: 1 }],
  options: { duration: 250 }
});
setDefaultAnimation("drawer.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});
setDefaultAnimation("drawer.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});

export {
  PDrawer
};
