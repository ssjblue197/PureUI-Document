import {
  PFileUpload
} from "./chunk.D7ZLRCWH.js";

// src/react/file-upload/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-file-upload";
PFileUpload.define("p-file-upload");
var reactWrapper = createComponent({
  tagName,
  elementClass: PFileUpload,
  react: React,
  events: {
    onPDrop: "p-drop",
    onPChange: "p-change",
    onPLoad: "p-load",
    onPError: "p-error",
    onPAbort: "p-abort",
    onPRemove: "p-remove"
  },
  displayName: "PFileUpload"
});
var file_upload_default = reactWrapper;

export {
  file_upload_default
};
