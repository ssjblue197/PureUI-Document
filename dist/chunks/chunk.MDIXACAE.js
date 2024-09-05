import {
  PAlert
} from "./chunk.T5WJZYGG.js";

// src/react/alert/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-alert";
PAlert.define("p-alert");
var reactWrapper = createComponent({
  tagName,
  elementClass: PAlert,
  react: React,
  events: {
    onPShow: "p-show",
    onPAfterShow: "p-after-show",
    onPHide: "p-hide",
    onPAfterHide: "p-after-hide"
  },
  displayName: "PAlert"
});
var alert_default = reactWrapper;

export {
  alert_default
};
