import {
  PMenu
} from "./chunk.6KOR6FQW.js";

// src/react/menu/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-menu";
PMenu.define("p-menu");
var reactWrapper = createComponent({
  tagName,
  elementClass: PMenu,
  react: React,
  events: {
    onPSelect: "p-select"
  },
  displayName: "PMenu"
});
var menu_default = reactWrapper;

export {
  menu_default
};
