import {
  PDropdown
} from "./chunk.I3LYP6YA.js";

// src/react/dropdown/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-dropdown";
PDropdown.define("p-dropdown");
var reactWrapper = createComponent({
  tagName,
  elementClass: PDropdown,
  react: React,
  events: {
    onPShow: "p-show",
    onPAfterShow: "p-after-show",
    onPHide: "p-hide",
    onPAfterHide: "p-after-hide"
  },
  displayName: "PDropdown"
});
var dropdown_default = reactWrapper;

export {
  dropdown_default
};
