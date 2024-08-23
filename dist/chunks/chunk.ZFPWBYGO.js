import {
  PRadio
} from "./chunk.E6NQU3TH.js";

// src/react/radio/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-radio";
PRadio.define("p-radio");
var reactWrapper = createComponent({
  tagName,
  elementClass: PRadio,
  react: React,
  events: {
    onPBlur: "p-blur",
    onPFocus: "p-focus"
  },
  displayName: "PRadio"
});
var radio_default = reactWrapper;

export {
  radio_default
};
