import Component from "../../components/paginate/paginate.component.js";
import { type EventName } from "@lit/react";
import type { PChangeEvent } from "../../events/events.js";
export type { PChangeEvent } from "../../events/events.js";
/**
 * @summary Paginate represent actions that are available to the user.
 * @documentation https://pureui.xyz/components/button
 * @status stable
 * @since 1.0
 *
 * @dependency p-icon
 * @dependency p-button
 *
 * @event p-change - Emitted when the page changed.
 *
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot suffix - A presentational suffix icon or similar element.
 *
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPChange: EventName<PChangeEvent>;
}>;
export default reactWrapper;
