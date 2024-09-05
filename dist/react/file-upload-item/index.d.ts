import Component from "../../components/file-upload-item/file-upload-item.component.js";
import { type EventName } from "@lit/react";
import type { PShowEvent } from "../../events/events.js";
import type { PAfterShowEvent } from "../../events/events.js";
import type { PHideEvent } from "../../events/events.js";
import type { PAfterHideEvent } from "../../events/events.js";
export type { PShowEvent } from "../../events/events.js";
export type { PAfterShowEvent } from "../../events/events.js";
export type { PHideEvent } from "../../events/events.js";
export type { PAfterHideEvent } from "../../events/events.js";
/**
 * @since 2.0
 * @status experimental
 *
 * @dependency p-icon-button
 * @dependency p-progress-bar
 *
 * @event p-show - Emitted when the item opens.
 * @event p-after-show - Emitted after the item opens and all animations are complete.
 * @event p-hide - Emitted when the item closes.
 * @event p-after-hide - Emitted after the item closes and all animations are complete.
 *
 * @slot - The file list item's label.
 * @slot image - The file list item's image.
 * @slot close-button - The file list item's close button.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart image - The file list item's image.
 * @csspart label - The file list item's label.
 * @csspart close-button -  The file list item's close button.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPShow: EventName<PShowEvent>;
    onPAfterShow: EventName<PAfterShowEvent>;
    onPHide: EventName<PHideEvent>;
    onPAfterHide: EventName<PAfterHideEvent>;
}>;
export default reactWrapper;
