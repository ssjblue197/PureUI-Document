import {
  PDialog
} from "./chunk.G6643FL6.js";

// src/react/dialog/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-dialog";
PDialog.define("p-dialog");
var reactWrapper = createComponent({
  tagName,
  elementClass: PDialog,
  react: React,
  events: {
    onPShow: "p-show",
    onPAfterShow: "p-after-show",
    onPHide: "p-hide",
    onPAfterHide: "p-after-hide",
    onPInitialFocus: "p-initial-focus",
    onPRequestClose: "p-request-close"
  },
  displayName: "PDialog"
});
var dialog_default = reactWrapper;

export {
  dialog_default
};
