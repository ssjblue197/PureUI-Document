import {
  PQrCode
} from "./chunk.RKESQVZE.js";

// src/react/qr-code/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
var tagName = "p-qr-code";
PQrCode.define("p-qr-code");
var reactWrapper = createComponent({
  tagName,
  elementClass: PQrCode,
  react: React,
  events: {},
  displayName: "PQrCode"
});
var qr_code_default = reactWrapper;

export {
  qr_code_default
};
