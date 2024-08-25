import {
  PButton
} from "./chunk.OY3U3GFR.js";

// src/react/button/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-button";
PButton.define("p-button");
var reactWrapper = createComponent({
  tagName,
  elementClass: PButton,
  react: React,
  events: {
    onPBlur: "p-blur",
    onPFocus: "p-focus",
    onPInvalid: "p-invalid"
  },
  displayName: "PButton"
});
var button_default = reactWrapper;

export {
  button_default
};
