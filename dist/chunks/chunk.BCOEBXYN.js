import {
  PTreeItem
} from "./chunk.75KML7ZF.js";

// src/react/tree-item/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-tree-item";
PTreeItem.define("p-tree-item");
var reactWrapper = createComponent({
  tagName,
  elementClass: PTreeItem,
  react: React,
  events: {
    onPExpand: "p-expand",
    onPAfterExpand: "p-after-expand",
    onPCollapse: "p-collapse",
    onPAfterCollapse: "p-after-collapse",
    onPLazyChange: "p-lazy-change",
    onPLazyLoad: "p-lazy-load"
  },
  displayName: "PTreeItem"
});
var tree_item_default = reactWrapper;

export {
  tree_item_default
};
