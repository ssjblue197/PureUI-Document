import Component from "../../components/tab/tab.component.js";
import { type EventName } from "@lit/react";
import type { PCloseEvent } from "../../events/events.js";
export type { PCloseEvent } from "../../events/events.js";
/**
 * @summary Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).
 * @documentation https://pureui.xyz/components/tab
 * @status stable
 * @since 2.0
 *
 * @dependency p-icon-button
 *
 * @slot - The tab's label.
 *
 * @event p-close - Emitted when the tab is closable and the close button is activated.
 *
 * @csspart base - The component's base wrapper.
 * @csspart close-button - The close button, an `<p-icon-button>`.
 * @csspart close-button__base - The close button's exported `base` part.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPClose: EventName<PCloseEvent>;
}>;
export default reactWrapper;
