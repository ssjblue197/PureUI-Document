import {
  PTree
} from "./chunk.A3VS4AH4.js";

// src/react/tree/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-tree";
PTree.define("p-tree");
var reactWrapper = createComponent({
  tagName,
  elementClass: PTree,
  react: React,
  events: {
    onPSelectionChange: "p-selection-change"
  },
  displayName: "PTree"
});
var tree_default = reactWrapper;

export {
  tree_default
};
