import {
  PRadioGroup
} from "./chunk.I3XFELAZ.js";

// src/react/radio-group/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-radio-group";
PRadioGroup.define("p-radio-group");
var reactWrapper = createComponent({
  tagName,
  elementClass: PRadioGroup,
  react: React,
  events: {
    onPChange: "p-change",
    onPInput: "p-input",
    onPInvalid: "p-invalid"
  },
  displayName: "PRadioGroup"
});
var radio_group_default = reactWrapper;

export {
  radio_group_default
};
