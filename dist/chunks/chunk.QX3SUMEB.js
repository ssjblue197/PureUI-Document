import {
  PTextarea
} from "./chunk.TBICZN6Q.js";

// src/react/textarea/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-textarea";
PTextarea.define("p-textarea");
var reactWrapper = createComponent({
  tagName,
  elementClass: PTextarea,
  react: React,
  events: {
    onPBlur: "p-blur",
    onPChange: "p-change",
    onPFocus: "p-focus",
    onPInput: "p-input",
    onPInvalid: "p-invalid"
  },
  displayName: "PTextarea"
});
var textarea_default = reactWrapper;

export {
  textarea_default
};
