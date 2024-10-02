import {
  PTabGroup
} from "./chunk.VVLFL3KR.js";

// src/react/tab-group/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-tab-group";
PTabGroup.define("p-tab-group");
var reactWrapper = createComponent({
  tagName,
  elementClass: PTabGroup,
  react: React,
  events: {
    onPTabShow: "p-tab-show",
    onPTabHide: "p-tab-hide"
  },
  displayName: "PTabGroup"
});
var tab_group_default = reactWrapper;

export {
  tab_group_default
};
