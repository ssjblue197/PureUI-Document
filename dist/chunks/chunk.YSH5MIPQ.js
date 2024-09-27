import {
  rt
} from "./chunk.SLZ4BTR5.js";
import {
  e,
  i,
  t
} from "./chunk.OZEBCGEZ.js";
import {
  D,
  ke
} from "./chunk.XHSHLALN.js";

// node_modules/lit-html/async-directive.js
var mt = (i2, t2) => {
  var _a;
  const e2 = i2._$AN;
  if (void 0 === e2)
    return false;
  for (const i3 of e2)
    (_a = i3._$AO) == null ? void 0 : _a.call(i3, t2, false), mt(i3, t2);
  return true;
};
var _t = (i2) => {
  let t2, e2;
  do {
    if (void 0 === (t2 = i2._$AM))
      break;
    e2 = t2._$AN, e2.delete(i2), i2 = t2;
  } while (0 === (e2 == null ? void 0 : e2.size));
};
var wt = (i2) => {
  for (let t2; t2 = i2._$AM; i2 = t2) {
    let e2 = t2._$AN;
    if (void 0 === e2)
      t2._$AN = e2 = /* @__PURE__ */ new Set();
    else if (e2.has(i2))
      break;
    e2.add(i2), gt(t2);
  }
};
function bt(i2) {
  void 0 !== this._$AN ? (_t(this), this._$AM = i2, wt(this)) : this._$AM = i2;
}
function yt(i2, t2 = false, e2 = 0) {
  const s = this._$AH, o = this._$AN;
  if (void 0 !== o && 0 !== o.size)
    if (t2)
      if (Array.isArray(s))
        for (let i3 = e2; i3 < s.length; i3++)
          mt(s[i3], false), _t(s[i3]);
      else
        null != s && (mt(s, false), _t(s));
    else
      mt(this, i2);
}
var gt = (i2) => {
  var _a, _b;
  i2.type == t.CHILD && ((_a = i2._$AP) != null ? _a : i2._$AP = yt, (_b = i2._$AQ) != null ? _b : i2._$AQ = bt);
};
var $t = class extends i {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i2, t2, e2) {
    super._$AT(i2, t2, e2), wt(this), this.isConnected = i2._$AU;
  }
  _$AO(i2, t2 = true) {
    var _a, _b;
    i2 !== this.isConnected && (this.isConnected = i2, i2 ? (_a = this.reconnected) == null ? void 0 : _a.call(this) : (_b = this.disconnected) == null ? void 0 : _b.call(this)), t2 && (mt(this, i2), _t(this));
  }
  setValue(i2) {
    if (rt(this.t))
      this.t._$AI(i2, this);
    else {
      const t2 = [...this.t._$AH];
      t2[this.i] = i2, this.t._$AI(t2, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};

// node_modules/lit-html/directives/ref.js
var ii = () => new Zt();
var Zt = class {
};
var qt = /* @__PURE__ */ new WeakMap();
var Kt = e(class extends $t {
  render(t2) {
    return D;
  }
  update(t2, [i2]) {
    var _a;
    const s = i2 !== this.Y;
    return s && void 0 !== this.Y && this.rt(void 0), (s || this.lt !== this.ct) && (this.Y = i2, this.ht = (_a = t2.options) == null ? void 0 : _a.host, this.rt(this.ct = t2.element)), D;
  }
  rt(t2) {
    var _a;
    if (this.isConnected || (t2 = void 0), "function" == typeof this.Y) {
      const i2 = (_a = this.ht) != null ? _a : globalThis;
      let s = qt.get(i2);
      void 0 === s && (s = /* @__PURE__ */ new WeakMap(), qt.set(i2, s)), void 0 !== s.get(this.Y) && this.Y.call(this.ht, void 0), s.set(this.Y, t2), void 0 !== t2 && this.Y.call(this.ht, t2);
    } else
      this.Y.value = t2;
  }
  get lt() {
    var _a, _b, _c;
    return "function" == typeof this.Y ? (_b = qt.get((_a = this.ht) != null ? _a : globalThis)) == null ? void 0 : _b.get(this.Y) : (_c = this.Y) == null ? void 0 : _c.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});

// src/components/menu-item/submenu-controller.ts
var SubmenuController = class {
  constructor(host, hasSlotController) {
    this.popupRef = ii();
    this.enableSubmenuTimer = -1;
    this.isConnected = false;
    this.isPopupConnected = false;
    this.skidding = 0;
    this.submenuOpenDelay = 100;
    // Set the safe triangle cursor position
    this.handleMouseMove = (event) => {
      this.host.style.setProperty("--safe-triangle-cursor-x", `${event.clientX}px`);
      this.host.style.setProperty("--safe-triangle-cursor-y", `${event.clientY}px`);
    };
    this.handleMouseOver = () => {
      if (this.hasSlotController.test("submenu")) {
        this.enableSubmenu();
      }
    };
    // Focus on the first menu-item of a submenu.
    this.handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
        case "Tab":
          this.disableSubmenu();
          break;
        case "ArrowLeft":
          if (event.target !== this.host) {
            event.preventDefault();
            event.stopPropagation();
            this.host.focus();
            this.disableSubmenu();
          }
          break;
        case "ArrowRight":
        case "Enter":
        case " ":
          this.handleSubmenuEntry(event);
          break;
        default:
          break;
      }
    };
    this.handleClick = (event) => {
      var _a;
      if (event.target === this.host) {
        event.preventDefault();
        event.stopPropagation();
      } else if (event.target instanceof Element && (event.target.tagName === "p-menu-item" || ((_a = event.target.role) == null ? void 0 : _a.startsWith("menuitem")))) {
        this.disableSubmenu();
      }
    };
    // Close this submenu on focus outside of the parent or any descendants.
    this.handleFocusOut = (event) => {
      if (event.relatedTarget && event.relatedTarget instanceof Element && this.host.contains(event.relatedTarget)) {
        return;
      }
      this.disableSubmenu();
    };
    // Prevent the parent menu-item from getting focus on mouse movement on the submenu
    this.handlePopupMouseover = (event) => {
      event.stopPropagation();
    };
    // Set the safe triangle values for the submenu when the position changes
    this.handlePopupReposition = () => {
      const submenuSlot = this.host.renderRoot.querySelector("slot[name='submenu']");
      const menu = submenuSlot == null ? void 0 : submenuSlot.assignedElements({ flatten: true }).filter((el) => el.localName === "p-menu")[0];
      const isRtl = this.host.matches(":dir(rtl)");
      if (!menu) {
        return;
      }
      const { left, top, width, height } = menu.getBoundingClientRect();
      this.host.style.setProperty("--safe-triangle-submenu-start-x", `${isRtl ? left + width : left}px`);
      this.host.style.setProperty("--safe-triangle-submenu-start-y", `${top}px`);
      this.host.style.setProperty("--safe-triangle-submenu-end-x", `${isRtl ? left + width : left}px`);
      this.host.style.setProperty("--safe-triangle-submenu-end-y", `${top + height}px`);
    };
    (this.host = host).addController(this);
    this.hasSlotController = hasSlotController;
  }
  hostConnected() {
    if (this.hasSlotController.test("submenu") && !this.host.disabled) {
      this.addListeners();
    }
  }
  hostDisconnected() {
    this.removeListeners();
  }
  hostUpdated() {
    if (this.hasSlotController.test("submenu") && !this.host.disabled) {
      this.addListeners();
      this.updateSkidding();
    } else {
      this.removeListeners();
    }
  }
  addListeners() {
    if (!this.isConnected) {
      this.host.addEventListener("mousemove", this.handleMouseMove);
      this.host.addEventListener("mouseover", this.handleMouseOver);
      this.host.addEventListener("keydown", this.handleKeyDown);
      this.host.addEventListener("click", this.handleClick);
      this.host.addEventListener("focusout", this.handleFocusOut);
      this.isConnected = true;
    }
    if (!this.isPopupConnected) {
      if (this.popupRef.value) {
        this.popupRef.value.addEventListener("mouseover", this.handlePopupMouseover);
        this.popupRef.value.addEventListener("p-reposition", this.handlePopupReposition);
        this.isPopupConnected = true;
      }
    }
  }
  removeListeners() {
    if (this.isConnected) {
      this.host.removeEventListener("mousemove", this.handleMouseMove);
      this.host.removeEventListener("mouseover", this.handleMouseOver);
      this.host.removeEventListener("keydown", this.handleKeyDown);
      this.host.removeEventListener("click", this.handleClick);
      this.host.removeEventListener("focusout", this.handleFocusOut);
      this.isConnected = false;
    }
    if (this.isPopupConnected) {
      if (this.popupRef.value) {
        this.popupRef.value.removeEventListener("mouseover", this.handlePopupMouseover);
        this.popupRef.value.removeEventListener("p-reposition", this.handlePopupReposition);
        this.isPopupConnected = false;
      }
    }
  }
  handleSubmenuEntry(event) {
    const submenuSlot = this.host.renderRoot.querySelector("slot[name='submenu']");
    if (!submenuSlot) {
      console.error("Cannot activate a submenu if no corresponding menuitem can be found.", this);
      return;
    }
    let menuItems = null;
    for (const elt of submenuSlot.assignedElements()) {
      menuItems = elt.querySelectorAll("p-menu-item, [role^='menuitem']");
      if (menuItems.length !== 0) {
        break;
      }
    }
    if (!menuItems || menuItems.length === 0) {
      return;
    }
    menuItems[0].setAttribute("tabindex", "0");
    for (let i2 = 1; i2 !== menuItems.length; ++i2) {
      menuItems[i2].setAttribute("tabindex", "-1");
    }
    if (this.popupRef.value) {
      event.preventDefault();
      event.stopPropagation();
      if (this.popupRef.value.active) {
        if (menuItems[0] instanceof HTMLElement) {
          menuItems[0].focus();
        }
      } else {
        this.enableSubmenu(false);
        this.host.updateComplete.then(() => {
          if (menuItems[0] instanceof HTMLElement) {
            menuItems[0].focus();
          }
        });
        this.host.requestUpdate();
      }
    }
  }
  setSubmenuState(state) {
    if (this.popupRef.value) {
      if (this.popupRef.value.active !== state) {
        this.popupRef.value.active = state;
        this.host.requestUpdate();
      }
    }
  }
  // Shows the submenu. Supports disabling the opening delay, e.g. for keyboard events that want to set the focus to the
  // newly opened menu.
  enableSubmenu(delay = true) {
    if (delay) {
      window.clearTimeout(this.enableSubmenuTimer);
      this.enableSubmenuTimer = window.setTimeout(() => {
        this.setSubmenuState(true);
      }, this.submenuOpenDelay);
    } else {
      this.setSubmenuState(true);
    }
  }
  disableSubmenu() {
    window.clearTimeout(this.enableSubmenuTimer);
    this.setSubmenuState(false);
  }
  // Calculate the space the top of a menu takes-up, for aligning the popup menu-item with the activating element.
  updateSkidding() {
    var _a;
    if (!((_a = this.host.parentElement) == null ? void 0 : _a.computedStyleMap)) {
      return;
    }
    const styleMap = this.host.parentElement.computedStyleMap();
    const attrs = ["padding-top", "border-top-width", "margin-top"];
    const skidding = attrs.reduce((accumulator, attr) => {
      var _a2;
      const styleValue = (_a2 = styleMap.get(attr)) != null ? _a2 : new CSSUnitValue(0, "px");
      const unitValue = styleValue instanceof CSSUnitValue ? styleValue : new CSSUnitValue(0, "px");
      const pxValue = unitValue.to("px");
      return accumulator - pxValue.value;
    }, 0);
    this.skidding = skidding;
  }
  isExpanded() {
    return this.popupRef.value ? this.popupRef.value.active : false;
  }
  renderSubmenu() {
    const isRtl = this.host.matches(":dir(rtl)");
    if (!this.isConnected) {
      return ke` <slot name="submenu" hidden></slot> `;
    }
    return ke`
      <p-popup
        ${Kt(this.popupRef)}
        placement=${isRtl ? "left-start" : "right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </p-popup>
    `;
  }
};

export {
  SubmenuController
};
/*! Bundled license information:

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
