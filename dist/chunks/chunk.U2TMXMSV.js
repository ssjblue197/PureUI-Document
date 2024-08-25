import {
  PCheckbox
} from "./chunk.5MQKNGD3.js";

// src/react/checkbox/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-checkbox";
PCheckbox.define("p-checkbox");
var reactWrapper = createComponent({
  tagName,
  elementClass: PCheckbox,
  react: React,
  events: {
    onPBlur: "p-blur",
    onPChange: "p-change",
    onPFocus: "p-focus",
    onPInput: "p-input",
    onPInvalid: "p-invalid"
  },
  displayName: "PCheckbox"
});
var checkbox_default = reactWrapper;

export {
  checkbox_default
};
