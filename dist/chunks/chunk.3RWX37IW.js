import {
  PRadioButton
} from "./chunk.V3EW5WD5.js";

// src/react/radio-button/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-radio-button";
PRadioButton.define("p-radio-button");
var reactWrapper = createComponent({
  tagName,
  elementClass: PRadioButton,
  react: React,
  events: {
    onPBlur: "p-blur",
    onPFocus: "p-focus"
  },
  displayName: "PRadioButton"
});
var radio_button_default = reactWrapper;

export {
  radio_button_default
};
