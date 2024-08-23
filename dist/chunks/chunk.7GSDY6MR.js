import {
  PIconButton
} from "./chunk.NGAHXBYG.js";

// src/react/icon-button/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-icon-button";
PIconButton.define("p-icon-button");
var reactWrapper = createComponent({
  tagName,
  elementClass: PIconButton,
  react: React,
  events: {
    onPBlur: "p-blur",
    onPFocus: "p-focus"
  },
  displayName: "PIconButton"
});
var icon_button_default = reactWrapper;

export {
  icon_button_default
};
