import {
  PPaginate
} from "./chunk.NUZFFVPP.js";

// src/react/paginate/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-paginate";
PPaginate.define("p-paginate");
var reactWrapper = createComponent({
  tagName,
  elementClass: PPaginate,
  react: React,
  events: {
    onPChange: "p-change"
  },
  displayName: "PPaginate"
});
var paginate_default = reactWrapper;

export {
  paginate_default
};
