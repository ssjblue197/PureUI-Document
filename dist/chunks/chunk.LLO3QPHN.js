import {
  PFileUploadItem
} from "./chunk.UIIBYKBH.js";

// src/react/file-upload-item/index.ts
import * as React from "react";
import { createComponent } from "@lit/react";
import "@lit/react";
var tagName = "p-file-upload-item";
PFileUploadItem.define("p-file-upload-item");
var reactWrapper = createComponent({
  tagName,
  elementClass: PFileUploadItem,
  react: React,
  events: {
    onPShow: "p-show",
    onPAfterShow: "p-after-show",
    onPHide: "p-hide",
    onPAfterHide: "p-after-hide"
  },
  displayName: "PFileUploadItem"
});
var file_upload_item_default = reactWrapper;

export {
  file_upload_item_default
};
