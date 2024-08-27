import {
  PMutationObserver
} from "./chunk.HF5UE3MU.js";

// src/react/mutation-observer/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-mutation-observer";
PMutationObserver.define("p-mutation-observer");
var reactWrapper = createComponent({
  tagName,
  elementClass: PMutationObserver,
  react: React,
  events: {
    onPMutation: "p-mutation"
  },
  displayName: "PMutationObserver"
});
var mutation_observer_default = reactWrapper;

export {
  mutation_observer_default
};