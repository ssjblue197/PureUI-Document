import {
  PPopup
} from "./chunk.5765FPBE.js";

// src/react/popup/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-popup";
PPopup.define("p-popup");
var reactWrapper = createComponent({
  tagName,
  elementClass: PPopup,
  react: React,
  events: {
    onPReposition: "p-reposition"
  },
  displayName: "PPopup"
});
var popup_default = reactWrapper;

export {
  popup_default
};
