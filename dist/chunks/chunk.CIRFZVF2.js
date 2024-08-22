import {
  PSelect
} from "./chunk.QPQQ3CY4.js";

// src/react/select/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-select";
PSelect.define("p-select");
var reactWrapper = createComponent({
  tagName,
  elementClass: PSelect,
  react: React,
  events: {
    onPChange: "p-change",
    onPClear: "p-clear",
    onPInput: "p-input",
    onPFocus: "p-focus",
    onPBlur: "p-blur",
    onPShow: "p-show",
    onPAfterShow: "p-after-show",
    onPHide: "p-hide",
    onPAfterHide: "p-after-hide",
    onPInvalid: "p-invalid"
  },
  displayName: "PSelect"
});
var select_default = reactWrapper;

export {
  select_default
};
