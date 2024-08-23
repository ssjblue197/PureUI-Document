import {
  PColorPicker
} from "./chunk.G2ZARRUU.js";

// src/react/color-picker/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-color-picker";
PColorPicker.define("p-color-picker");
var reactWrapper = createComponent({
  tagName,
  elementClass: PColorPicker,
  react: React,
  events: {
    onPBlur: "p-blur",
    onPChange: "p-change",
    onPFocus: "p-focus",
    onPInput: "p-input",
    onPInvalid: "p-invalid"
  },
  displayName: "PColorPicker"
});
var color_picker_default = reactWrapper;

export {
  color_picker_default
};
