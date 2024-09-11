import {
  PProgressBar
} from "./chunk.2MP7ICTF.js";

// src/react/progress-bar/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "p-progress-bar";
PProgressBar.define("p-progress-bar");
var reactWrapper = createComponent({
  tagName,
  elementClass: PProgressBar,
  react: React,
  events: {},
  displayName: "PProgressBar"
});
var progress_bar_default = reactWrapper;

export {
  progress_bar_default
};
