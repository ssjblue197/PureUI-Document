import {
  PDetails
} from "./chunk.RFMACMDG.js";

// src/react/details/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-details";
PDetails.define("p-details");
var reactWrapper = createComponent({
  tagName,
  elementClass: PDetails,
  react: React,
  events: {
    onPShow: "p-show",
    onPAfterShow: "p-after-show",
    onPHide: "p-hide",
    onPAfterHide: "p-after-hide"
  },
  displayName: "PDetails"
});
var details_default = reactWrapper;

export {
  details_default
};
