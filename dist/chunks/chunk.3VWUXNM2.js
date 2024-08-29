import {
  PTable
} from "./chunk.JFIQ6TIP.js";

// src/react/table/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-table";
PTable.define("p-table");
var reactWrapper = createComponent({
  tagName,
  elementClass: PTable,
  react: React,
  events: {
    onPChange: "p-change"
  },
  displayName: "PTable"
});
var table_default = reactWrapper;

export {
  table_default
};
