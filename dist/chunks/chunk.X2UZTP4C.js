import {
  PCopyButton
} from "./chunk.ZQBLMDLQ.js";

// src/react/copy-button/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-copy-button";
PCopyButton.define("p-copy-button");
var reactWrapper = createComponent({
  tagName,
  elementClass: PCopyButton,
  react: React,
  events: {
    onPCopy: "p-copy",
    onPError: "p-error"
  },
  displayName: "PCopyButton"
});
var copy_button_default = reactWrapper;

export {
  copy_button_default
};
