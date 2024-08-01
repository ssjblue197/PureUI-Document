import {
  e,
  i,
  t
} from "./chunk.UP75L23G.js";
import {
  f,
  m
} from "./chunk.KW4FMSMA.js";
import {
  T,
  w
} from "./chunk.N4FVDREO.js";

// node_modules/lit-html/directives/live.js
var l = e(class extends i {
  constructor(r) {
    if (super(r), r.type !== t.PROPERTY && r.type !== t.ATTRIBUTE && r.type !== t.BOOLEAN_ATTRIBUTE)
      throw Error("The `live` directive is not allowed on child or event bindings");
    if (!f(r))
      throw Error("`live` bindings can only contain a single expression");
  }
  render(r) {
    return r;
  }
  update(i2, [t2]) {
    if (t2 === w || t2 === T)
      return t2;
    const o = i2.element, l2 = i2.name;
    if (i2.type === t.PROPERTY) {
      if (t2 === o[l2])
        return w;
    } else if (i2.type === t.BOOLEAN_ATTRIBUTE) {
      if (!!t2 === o.hasAttribute(l2))
        return w;
    } else if (i2.type === t.ATTRIBUTE && o.getAttribute(l2) === t2 + "")
      return w;
    return m(i2), t2;
  }
});

export {
  l
};
/*! Bundled license information:

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
