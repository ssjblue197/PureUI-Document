import {
  PInclude
} from "./chunk.7XYIPKYT.js";

// src/react/include/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-include";
PInclude.define("p-include");
var reactWrapper = createComponent({
  tagName,
  elementClass: PInclude,
  react: React,
  events: {
    onPLoad: "p-load",
    onPError: "p-error"
  },
  displayName: "PInclude"
});
var include_default = reactWrapper;

export {
  include_default
};
