import Component from "../../components/file-upload/file-upload.component.js";
import { type EventName } from "@lit/react";
import type { PDropEvent } from "../../events/events.js";
import type { PChangeEvent } from "../../events/events.js";
import type { PLoadEvent } from "../../events/events.js";
import type { PErrorEvent } from "../../events/events.js";
import type { PAbortEvent } from "../../events/events.js";
import type { PRemoveEvent } from "../../events/events.js";
export type { PDropEvent } from "../../events/events.js";
export type { PChangeEvent } from "../../events/events.js";
export type { PLoadEvent } from "../../events/events.js";
export type { PErrorEvent } from "../../events/events.js";
export type { PAbortEvent } from "../../events/events.js";
export type { PRemoveEvent } from "../../events/events.js";
/**
 * @since 2.0
 * @status experimental
 *
 * @dependency p-progress-bar
 * @dependency p-icon
 * @dependency p-icon-button
 * @dependency p-upload-file-item
 *
 * @slot label - The dropzone's label. Alternatively, you can use the image slot and label prop.
 * @slot image - The dropzone's image.
 * @slot button - The dropzone's button.
 *
 * @event p-drop - Emitted when dragged files have been dropped on the dropzone area.
 * @event {{ fileList: FileList }} p-change - Emitted when files have been uploaded via the dropzone or file dialog.
 * @event {{ response: unknown }} p-load - Emitted when a file transfer was finished
 * @event {{ event: ProgressEvent }} p-error - Emitted when a file transfer threw an error
 * @event {{ event: ProgressEvent }} p-abort - Emitted when a file transfer was aborted by the user
 * @event {{ file: FileInfo }} p-remove - Emitted when a file was removed
 *
 * @csspart base - The component's internal wrapper.
 * @csspart label - The dropzone container.
 * @csspart image - The dropzone image.
 * @csspart button - The dropzone button.
 *
 * @cssproperty --border-radius - The border radius of the dropzone borders.
 * @cssproperty --border-width - The width of the dropzone borders.
 * @cssproperty --border-style - The style of the dropzone borders.
 *
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPDrop: EventName<PDropEvent>;
    onPChange: EventName<PChangeEvent>;
    onPLoad: EventName<PLoadEvent>;
    onPError: EventName<PErrorEvent>;
    onPAbort: EventName<PAbortEvent>;
    onPRemove: EventName<PRemoveEvent>;
}>;
export default reactWrapper;
