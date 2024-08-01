import Component from "../../components/alert/alert.component.js";
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
 * @summary Alerts are used to display important messages inline or as toast notifications.
 * @documentation https://pureui.xyz/components/alert
 * @status stable
 * @since 2.0
 *
 * @dependency p-icon-button
 *
 * @slot - The alert's main content.
 * @slot icon - An icon to show in the alert. Works best with `<p-icon>`.
 *
 * @event p-show - Emitted when the alert opens.
 * @event p-after-show - Emitted after the alert opens and all animations are complete.
 * @event p-hide - Emitted when the alert closes.
 * @event p-after-hide - Emitted after the alert closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The container that wraps the optional icon.
 * @csspart message - The container that wraps the alert's main content.
 * @csspart close-button - The close button, an `<p-icon-button>`.
 * @csspart close-button__base - The close button's exported `base` part.
 *
 * @animation alert.show - The animation to use when showing the alert.
 * @animation alert.hide - The animation to use when hiding the alert.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPShow: EventName<PShowEvent>;
    onPAfterShow: EventName<PAfterShowEvent>;
    onPHide: EventName<PHideEvent>;
    onPAfterHide: EventName<PAfterHideEvent>;
}>;
export default reactWrapper;
