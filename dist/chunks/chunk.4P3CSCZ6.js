import {
  PCalendar
} from "./chunk.5ZNO4MYY.js";

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
    onPChange: "p-change"
  },
  displayName: "PCalendar"
});
var calendar_default = reactWrapper;

export {
  calendar_default
};
