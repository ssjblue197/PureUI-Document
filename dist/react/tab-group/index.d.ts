import Component from "../../components/tab-group/tab-group.component.js";
import { type EventName } from "@lit/react";
import type { PTabShowEvent } from "../../events/events.js";
import type { PTabHideEvent } from "../../events/events.js";
export type { PTabShowEvent } from "../../events/events.js";
export type { PTabHideEvent } from "../../events/events.js";
/**
 * @summary Tab groups organize content into a container that shows one section at a time.
 * @documentation https://pureui.xyz/components/tab-group
 * @status stable
 * @since 2.0
 *
 * @dependency p-icon-button
 *
 * @slot - Used for grouping tab panels in the tab group. Must be `<p-tab-panel>` elements.
 * @slot nav - Used for grouping tabs in the tab group. Must be `<p-tab>` elements.
 *
 * @event {{ name: String }} p-tab-show - Emitted when a tab is shown.
 * @event {{ name: String }} p-tab-hide - Emitted when a tab is hidden.
 *
 * @csspart base - The component's base wrapper.
 * @csspart nav - The tab group's navigation container where tabs are slotted in.
 * @csspart tabs - The container that wraps the tabs.
 * @csspart active-tab-indicator - The line that highlights the currently selected tab.
 * @csspart body - The tab group's body where tab panels are slotted in.
 * @csspart scroll-button - The previous/next scroll buttons that show when tabs are scrollable, an `<p-icon-button>`.
 * @csspart scroll-button--start - The starting scroll button.
 * @csspart scroll-button--end - The ending scroll button.
 * @csspart scroll-button__base - The scroll button's exported `base` part.
 *
 * @cssproperty --indicator-color - The color of the active tab indicator.
 * @cssproperty --track-color - The color of the indicator's track (the line that separates tabs from panels).
 * @cssproperty --track-width - The width of the indicator's track (the line that separates tabs from panels).
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPTabShow: EventName<PTabShowEvent>;
    onPTabHide: EventName<PTabHideEvent>;
}>;
export default reactWrapper;
