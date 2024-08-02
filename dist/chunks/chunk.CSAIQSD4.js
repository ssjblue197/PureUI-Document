import {
  PRating
} from "./chunk.W3H2ZHZR.js";

// src/react/rating/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-rating";
PRating.define("p-rating");
var reactWrapper = createComponent({
  tagName,
  elementClass: PRating,
  react: React,
  events: {
    onPChange: "p-change",
    onPHover: "p-hover"
  },
  displayName: "PRating"
});
var rating_default = reactWrapper;

export {
  rating_default
};
