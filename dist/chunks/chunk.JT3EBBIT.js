import {
  PDrawer
} from "./chunk.W3OWKY52.js";

// src/react/drawer/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-drawer";
PDrawer.define("p-drawer");
var reactWrapper = createComponent({
  tagName,
  elementClass: PDrawer,
  react: React,
  events: {
    onPShow: "p-show",
    onPAfterShow: "p-after-show",
    onPHide: "p-hide",
    onPAfterHide: "p-after-hide",
    onPInitialFocus: "p-initial-focus",
    onPRequestClose: "p-request-close"
  },
  displayName: "PDrawer"
});
var drawer_default = reactWrapper;

export {
  drawer_default
};
