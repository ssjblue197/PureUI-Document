import {
  PInput
} from "./chunk.EQLNSBVB.js";

// src/react/input/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-input";
PInput.define("p-input");
var reactWrapper = createComponent({
  tagName,
  elementClass: PInput,
  react: React,
  events: {
    onPBlur: "p-blur",
    onPChange: "p-change",
    onPClear: "p-clear",
    onPFocus: "p-focus",
    onPInput: "p-input",
    onPInvalid: "p-invalid"
  },
  displayName: "PInput"
});
var input_default = reactWrapper;

export {
  input_default
};
