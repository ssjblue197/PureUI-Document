import {
  PImageComparer
} from "./chunk.4OAF5WJB.js";

// src/react/image-comparer/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-image-comparer";
PImageComparer.define("p-image-comparer");
var reactWrapper = createComponent({
  tagName,
  elementClass: PImageComparer,
  react: React,
  events: {
    onPChange: "p-change"
  },
  displayName: "PImageComparer"
});
var image_comparer_default = reactWrapper;

export {
  image_comparer_default
};
