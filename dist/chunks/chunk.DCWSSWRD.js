import {
  PCard
} from "./chunk.V2G5EICP.js";

// src/react/card/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "p-card";
PCard.define("p-card");
var reactWrapper = createComponent({
  tagName,
  elementClass: PCard,
  react: React,
  events: {},
  displayName: "PCard"
});
var card_default = reactWrapper;

export {
  card_default
};