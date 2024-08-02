import {
  PTooltip
} from "./chunk.QWKDVI4S.js";

// src/react/tooltip/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-tooltip";
PTooltip.define("p-tooltip");
var reactWrapper = createComponent({
  tagName,
  elementClass: PTooltip,
  react: React,
  events: {
    onPShow: "p-show",
    onPAfterShow: "p-after-show",
    onPHide: "p-hide",
    onPAfterHide: "p-after-hide"
  },
  displayName: "PTooltip"
});
var tooltip_default = reactWrapper;

export {
  tooltip_default
};
