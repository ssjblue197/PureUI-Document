import {
  PSplitPanel
} from "./chunk.HQRIBDJ4.js";

// src/react/split-panel/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-split-panel";
PSplitPanel.define("p-split-panel");
var reactWrapper = createComponent({
  tagName,
  elementClass: PSplitPanel,
  react: React,
  events: {
    onPReposition: "p-reposition"
  },
  displayName: "PSplitPanel"
});
var split_panel_default = reactWrapper;

export {
  split_panel_default
};
