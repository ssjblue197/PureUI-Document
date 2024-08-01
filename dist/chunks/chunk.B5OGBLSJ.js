import {
  PTab
} from "./chunk.ZHBEWQZE.js";

// src/react/tab/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-tab";
PTab.define("p-tab");
var reactWrapper = createComponent({
  tagName,
  elementClass: PTab,
  react: React,
  events: {
    onPClose: "p-close"
  },
  displayName: "PTab"
});
var tab_default = reactWrapper;

export {
  tab_default
};
