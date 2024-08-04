import {
  PCarousel
} from "./chunk.K2BOY2S3.js";

// src/react/carousel/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-carousel";
PCarousel.define("p-carousel");
var reactWrapper = createComponent({
  tagName,
  elementClass: PCarousel,
  react: React,
  events: {
    onPSlideChange: "p-slide-change"
  },
  displayName: "PCarousel"
});
var carousel_default = reactWrapper;

export {
  carousel_default
};
