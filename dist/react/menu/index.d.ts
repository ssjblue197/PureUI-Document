import Component from "../../components/menu/menu.component.js";
import { type EventName } from "@lit/react";
import type { PSelectEvent } from "../../events/events.js";
export type { PSelectEvent } from "../../events/events.js";
/**
 * @summary Menus provide a list of options for the user to choose from.
 * @documentation https://pureui.xyz/components/menu
 * @status stable
 * @since 1.0
 *
 * @slot - The menu's content, including menu items, menu labels, and dividers.
 *
 * @event {{ item: PMenuItem }} p-select - Emitted when a menu item is selected.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPSelect: EventName<PSelectEvent>;
}>;
export default reactWrapper;
