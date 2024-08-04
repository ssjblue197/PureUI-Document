import {
  PTag
} from "./chunk.WQRPPKQW.js";

// src/react/tag/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-tag";
PTag.define("p-tag");
var reactWrapper = createComponent({
  tagName,
  elementClass: PTag,
  react: React,
  events: {
    onPRemove: "p-remove"
  },
  displayName: "PTag"
});
var tag_default = reactWrapper;

export {
  tag_default
};
