import {
  PProgressBar
} from "./chunk.TVWV4A6L.js";
import {
  file_upload_styles_default
} from "./chunk.TF3ZKHDR.js";
import {
  hasValidFileSize,
  hasValidFileType
} from "./chunk.OC75CHDN.js";
import {
  PFileUploadItem
} from "./chunk.IHGNR3EU.js";
import {
  FormControlController
} from "./chunk.SW6OGP3X.js";
import {
  PIconButton
} from "./chunk.G6TFJZLR.js";
import {
  LocalizeController
} from "./chunk.BTMIVMQK.js";
import {
  to
} from "./chunk.DQNILPUT.js";
import {
  Rt
} from "./chunk.A56LY5J2.js";
import {
  PIcon
} from "./chunk.QJGUOIRM.js";
import {
  PureElement,
  e,
  n,
  r
} from "./chunk.BWFHTNIR.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
import {
  D,
  ke
} from "./chunk.XHSHLALN.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/file-upload/file-upload.component.ts
var PFileUpload = class extends PureElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      assumeInteractionOn: ["p-change", "p-remove"]
    });
    this.localize = new LocalizeController(this);
    this.isDragover = false;
    this.files = [];
    this.disabled = false;
    this.noButton = false;
    this.buttonOnly = false;
    this.noFileList = false;
    this.accept = "*";
    this.multiple = false;
  }
  get value() {
    if (Array.isArray(this.files)) {
      return this.files.map((file) => file.file);
    }
    return "";
  }
  set value(file) {
    if (Array.isArray(file)) {
      this.files = file.map((f) => ({ file: f }));
      return;
    }
    if (file instanceof File) {
      this.files = [{ file }];
      return;
    }
    this.files = [];
  }
  /** Gets the validity state object */
  get validity() {
    return this.fileInput.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.fileInput.validationMessage;
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.fileInput.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.fileInput.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.fileInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  addFile(file) {
    if (this.maxFiles && this.files.length >= this.maxFiles) {
      this.warning = this.localize.term("maxFiles");
      return;
    }
    const fileInfo = {
      file
    };
    if (!hasValidFileType(file, this.accept)) {
      fileInfo.accepted = false;
      fileInfo.warning = this.localize.term("fileTypeNotAccepted");
    } else if (!hasValidFileSize(file, this.maxFileSize)) {
      fileInfo.accepted = false;
      fileInfo.warning = this.localize.term("fileSizeExceeded");
    } else {
      fileInfo.accepted = true;
    }
    this.files = this.multiple ? [...this.files, fileInfo] : [fileInfo];
  }
  handleFiles(fileList) {
    if (!fileList || fileList.length === 0) {
      return;
    }
    this.warning = void 0;
    if (!this.multiple && fileList.length > 1) {
      this.warning = this.localize.term("noMultipleFiles");
      return;
    }
    Object.values(fileList).forEach((file) => this.addFile(file));
    this.emit("p-change", { detail: this.files });
  }
  onDragLeave() {
    this.isDragover = false;
  }
  onDragOver(event) {
    event.preventDefault();
    if (!event.dataTransfer) {
      return;
    }
    this.isDragover = true;
  }
  onDrop(event) {
    var _a;
    event.preventDefault();
    this.isDragover = false;
    const files = (_a = event.dataTransfer) == null ? void 0 : _a.files;
    if (!files || this.disabled) {
      return;
    }
    this.handleFiles(files);
  }
  handleBrowseFileClick() {
    this.fileInput.click();
  }
  handleFileInputChange() {
    this.handleFiles(this.fileInput.files);
  }
  handleFileRemove(index) {
    const fileInfo = this.files[index];
    this.emit("p-remove", { detail: fileInfo });
    this.files = this.files.filter((_, fileIndex) => fileIndex !== index);
    this.emit("p-change", { detail: this.files });
  }
  get description() {
    if (this.warning) {
      return this.warning;
    }
    return this.label ? this.label : this.localize.term("dragDrop");
  }
  render() {
    var _a;
    const browseFilesButton = ke`
      <div @click="${this.handleBrowseFileClick}">
        <slot name="button">
          <p-button
            part="button"
            variant=${this.warning ? "warning" : "default"}
            ?disabled=${this.disabled}
            size="small"
          >
            ${(_a = this.buttonLabel) != null ? _a : this.localize.term("browseFiles")}
          </p-button>
        </slot>
      </div>
    `;
    return ke`
      <div
        part="base"
        class=${Rt({
      "file-upload": true,
      "file-upload--disabled": this.disabled,
      "file-upload--warning": !!this.warning,
      "file-upload--dragged": this.isDragover
    })}
      >
        <input
          type="file"
          id="file-input"
          style="display: none"
          accept=${this.accept}
          ?multiple=${this.multiple}
          @change="${this.handleFileInputChange}"
          value=${Array.isArray(this.value) ? this.value.map((f) => f instanceof File ? f.name : f).join(",") : ""}
        />
        ${this.buttonOnly ? browseFilesButton : ke`
              <div id="dropzone" @drop="${this.onDrop}" @dragover="${this.onDragOver}" @dragleave="${this.onDragLeave}">
                <slot name="label">
                  <div part="label" class="file-upload__label">
                    <div class="file-upload__label__container">
                      <span class="file-upload__icon">
                        <slot name="image">
                          <span style="font-size: 20px; position: relative; top: 5px;">
                            <p-icon name="cloud-upload" size="large"></p-icon>
                          </span>
                        </slot>
                      </span>
                      <div class="file-upload__label__text">
                        ${!this.noButton ? browseFilesButton : ""}
                        <div class="file-upload__label__description">${this.description}</div>
                      </div>
                    </div>
                  </div>
                </slot>
              </div>
            `}
        ${!this.noFileList ? ke`
              <div class="file-upload__file-items" id="file-items">
                ${this.files.map(
      (fileInfo, index) => ke`
                    <p-file-upload-item
                      size=${fileInfo.accepted ? fileInfo.file.size : D}
                      ?warning=${!fileInfo.accepted}
                      ?closable=${fileInfo.accepted}
                      ?loading=${fileInfo.loading}
                      progress=${to(fileInfo.progress)}
                      @p-hide=${(event) => {
        event.stopPropagation();
        this.handleFileRemove(index);
      }}
                    >
                      ${fileInfo.accepted ? fileInfo.file.name : fileInfo.warning}
                      <p-icon
                        name=${fileInfo.warning ? "exclamation-triangle" : "file-earmark"}
                        slot="image"
                        library="system"
                      ></p-icon>
                    </p-file-upload-item>
                  `
    )}
              </div>
            ` : ""}
      </div>
    `;
  }
};
PFileUpload.styles = [component_styles_default, file_upload_styles_default];
PFileUpload.dependencies = {
  "p-icon": PIcon,
  "p-icon-button": PIconButton,
  "p-progress-bar": PProgressBar,
  "p-file-upload-item": PFileUploadItem
};
__decorateClass([
  r()
], PFileUpload.prototype, "warning", 2);
__decorateClass([
  r()
], PFileUpload.prototype, "isDragover", 2);
__decorateClass([
  e("#file-input")
], PFileUpload.prototype, "fileInput", 2);
__decorateClass([
  n({ type: Array })
], PFileUpload.prototype, "files", 2);
__decorateClass([
  n()
], PFileUpload.prototype, "name", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PFileUpload.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true, attribute: "no-button" })
], PFileUpload.prototype, "noButton", 2);
__decorateClass([
  n({ type: Boolean, reflect: true, attribute: "button-only" })
], PFileUpload.prototype, "buttonOnly", 2);
__decorateClass([
  n({ type: Boolean, reflect: true, attribute: "no-file-list" })
], PFileUpload.prototype, "noFileList", 2);
__decorateClass([
  n()
], PFileUpload.prototype, "label", 2);
__decorateClass([
  n({ attribute: "button-label" })
], PFileUpload.prototype, "buttonLabel", 2);
__decorateClass([
  n()
], PFileUpload.prototype, "lang", 2);
__decorateClass([
  n({ type: String, reflect: true })
], PFileUpload.prototype, "accept", 2);
__decorateClass([
  n({ type: Number, attribute: "max-file-size" })
], PFileUpload.prototype, "maxFileSize", 2);
__decorateClass([
  n({ type: Number, attribute: "max-files" })
], PFileUpload.prototype, "maxFiles", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PFileUpload.prototype, "multiple", 2);

export {
  PFileUpload
};
