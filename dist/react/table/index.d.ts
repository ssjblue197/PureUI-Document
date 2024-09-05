import Component from "../../components/table/table.component.js";
import { type EventName } from "@lit/react";
import type { PChangeEvent } from "../../events/events.js";
import type { PTableRowSelectEvent } from "../../events/events.js";
export type { PChangeEvent } from "../../events/events.js";
export type { PTableRowSelectEvent } from "../../events/events.js";
/**
 * @summary The Table component is used to display data in a table format.
 * @documentation https://pureui.xyz/components/table
 * @status stable
 * @since 1.1.15
 *
 * @dependency p-tag
 * @dependency p-paginate
 * @dependency p-icon
 *
 * @event p-change - Emitted when the current page value changes.
 * @event p-table-row-select - Emitted when the rows selected changed.
 *
 * @slot - The default slot.
 * @slot paginate - An optional slot for paginate element.
 *
 * @csspart table-wrapper - The component's table wrapper.
 * @csspart table-header - The component's table header wrapper.
 * @csspart table-body - The component's table body wrapper.
 * @csspart table-loading - The component's table loading wrapper.
 * @csspart table-empty - The component's table empty wrapper.
 * @csspart table-footer - The component's table footer wrapper.
 *
 *
 * @cssproperty --table-header-cell-padding - Set padding for header cell.
 * @cssproperty --table-body-cell-padding - Set padding for body cell.
 * @cssproperty --table-footer-padding - Set padding for footer cell.
 * @cssproperty --table-border-horizontal-width - Set border width horizontal.
 * @cssproperty --table-border-horizontal-style - Set border style horizontal.
 * @cssproperty --table-border-horizontal-color - Set border color horizontal.
 * @cssproperty --table-border-vertical-width - Set border width vertical.
 * @cssproperty --table-border-vertical-style - Set border style vertical.
 * @cssproperty --table-border-vertical-color - Set border color vertical.
 * @cssproperty --table-border-width - Set table border width.
 * @cssproperty --table-border-color - Set table border color.
 * @cssproperty --table-border-style - Set table border style.
 * @cssproperty --table-border-radius - Set table border radius.
 * @cssproperty --table-row-hover-background-color - Set table row hover background color.
 * @cssproperty --table-cell-background-color - Set table cell background color.
 * @cssproperty --table-cell-hover-background-color - Set table cell hover background color.
 * @cssproperty --table-cell-min-height - Set table cell min height.
 * @cssproperty --table-cell-max-height - Set table cell max height.
 * @cssproperty --table-cell-min-width - Set table cell min width.
 * @cssproperty --table-cell-max-width - Set table cell max width.
 *
 *
 *
 *
 *
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPChange: EventName<PChangeEvent>;
    onPTableRowSelect: EventName<PTableRowSelectEvent>;
}>;
export default reactWrapper;
