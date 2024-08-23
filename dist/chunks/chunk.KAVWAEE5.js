import {
  PCalendar
} from "./chunk.6CALNBWB.js";

// src/react/calendar/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-calendar";
PCalendar.define("p-calendar");
var reactWrapper = createComponent({
  tagName,
  elementClass: PCalendar,
  react: React,
  events: {
    onPChange: "p-change",
    onPClear: "p-clear",
    onPInput: "p-input",
    onPFocus: "p-focus",
    onPBlur: "p-blur",
    onPShow: "p-show",
    onPAfterShow: "p-after-show",
    onPHide: "p-hide",
    onPAfterHide: "p-after-hide",
    onPInvalid: "p-invalid"
  },
  displayName: "PCalendar"
});
var calendar_default = reactWrapper;

export {
  calendar_default
};
