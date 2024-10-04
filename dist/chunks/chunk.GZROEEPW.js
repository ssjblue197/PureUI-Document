import {
  PSwitch
} from "./chunk.IFZQBMRB.js";

// src/react/switch/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-switch";
PSwitch.define("p-switch");
var reactWrapper = createComponent({
  tagName,
  elementClass: PSwitch,
  react: React,
  events: {
    onPBlur: "p-blur",
    onPChange: "p-change",
    onPInput: "p-input",
    onPFocus: "p-focus",
    onPInvalid: "p-invalid"
  },
  displayName: "PSwitch"
});
var switch_default = reactWrapper;

export {
  switch_default
};
