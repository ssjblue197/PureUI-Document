import Component from "../../components/icon-button/icon-button.component.js";
import { type EventName } from "@lit/react";
import type { PBlurEvent } from "../../events/events.js";
import type { PFocusEvent } from "../../events/events.js";
export type { PBlurEvent } from "../../events/events.js";
export type { PFocusEvent } from "../../events/events.js";
/**
 * @summary Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
 * @documentation https://pureui.xyz/components/icon-button
 * @status stable
 * @since 2.0
 *
 * @dependency p-icon
 *
 * @event p-blur - Emitted when the icon button loses focus.
 * @event p-focus - Emitted when the icon button gains focus.
 *
 * @csspart base - The component's base wrapper.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPBlur: EventName<PBlurEvent>;
    onPFocus: EventName<PFocusEvent>;
}>;
export default reactWrapper;
