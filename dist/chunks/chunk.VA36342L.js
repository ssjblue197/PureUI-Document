import {
  e,
  i,
  t
} from "./chunk.OZEBCGEZ.js";
import {
  R
} from "./chunk.XHSHLALN.js";

// node_modules/lit-html/directives/style-map.js
var ee = "important";
var ie = " !" + ee;
var se = e(class extends i {
  constructor(e2) {
    var _a;
    if (super(e2), e2.type !== t.ATTRIBUTE || "style" !== e2.name || ((_a = e2.strings) == null ? void 0 : _a.length) > 2)
      throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
  }
  render(t2) {
    return Object.keys(t2).reduce((e2, r) => {
      const s = t2[r];
      return null == s ? e2 : e2 + `${r = r.includes("-") ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
    }, "");
  }
  update(t2, [e2]) {
    const { style: r } = t2.element;
    if (void 0 === this.ft)
      return this.ft = new Set(Object.keys(e2)), this.render(e2);
    for (const t3 of this.ft)
      null == e2[t3] && (this.ft.delete(t3), t3.includes("-") ? r.removeProperty(t3) : r[t3] = null);
    for (const t3 in e2) {
      const s = e2[t3];
      if (null != s) {
        this.ft.add(t3);
        const e3 = "string" == typeof s && s.endsWith(ie);
        t3.includes("-") || e3 ? r.setProperty(t3, e3 ? s.slice(0, -11) : s, e3 ? ee : "") : r[t3] = s;
      }
    }
    return R;
  }
});

export {
  se
};
/*! Bundled license information:

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
