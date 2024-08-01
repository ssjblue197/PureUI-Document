import {
  PRange
} from "./chunk.DMPPHY2R.js";

// src/react/range/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-range";
PRange.define("p-range");
var reactWrapper = createComponent({
  tagName,
  elementClass: PRange,
  react: React,
  events: {
    onPBlur: "p-blur",
    onPChange: "p-change",
    onPFocus: "p-focus",
    onPInput: "p-input",
    onPInvalid: "p-invalid"
  },
  displayName: "PRange"
});
var range_default = reactWrapper;

export {
  range_default
};
