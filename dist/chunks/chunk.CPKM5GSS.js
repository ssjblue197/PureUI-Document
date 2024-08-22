import {
  PAnimation
} from "./chunk.R5AXZTCB.js";

// src/react/animation/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-animation";
PAnimation.define("p-animation");
var reactWrapper = createComponent({
  tagName,
  elementClass: PAnimation,
  react: React,
  events: {
    onPCancel: "p-cancel",
    onPFinish: "p-finish",
    onPStart: "p-start"
  },
  displayName: "PAnimation"
});
var animation_default = reactWrapper;

export {
  animation_default
};
