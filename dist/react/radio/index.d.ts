import Component from "../../components/radio/radio.component.js";
import { type EventName } from "@lit/react";
import type { PBlurEvent } from "../../events/events.js";
import type { PFocusEvent } from "../../events/events.js";
export type { PBlurEvent } from "../../events/events.js";
export type { PFocusEvent } from "../../events/events.js";
/**
 * @summary Radios allow the user to select a single option from a group.
 * @documentation https://pureui.xyz/components/radio
 * @status stable
 * @since 1.0
 *
 * @dependency p-icon
 *
 * @slot - The radio's label.
 *
 * @event p-blur - Emitted when the control loses focus.
 * @event p-focus - Emitted when the control gains focus.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The circular container that wraps the radio's checked state.
 * @csspart control--checked - The radio control when the radio is checked.
 * @csspart checked-icon - The checked icon, an `<p-icon>` element.
 * @csspart label - The container that wraps the radio's label.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPBlur: EventName<PBlurEvent>;
    onPFocus: EventName<PFocusEvent>;
}>;
export default reactWrapper;
