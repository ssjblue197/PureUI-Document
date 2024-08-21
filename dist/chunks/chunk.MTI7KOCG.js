import {
  PResizeObserver
} from "./chunk.RPSPO3LM.js";

// src/react/resize-observer/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-resize-observer";
PResizeObserver.define("p-resize-observer");
var reactWrapper = createComponent({
  tagName,
  elementClass: PResizeObserver,
  react: React,
  events: {
    onPResize: "p-resize"
  },
  displayName: "PResizeObserver"
});
var resize_observer_default = reactWrapper;

export {
  resize_observer_default
};
