import Component from "../../components/tree-item/tree-item.component.js";
import { type EventName } from "@lit/react";
import type { PExpandEvent } from "../../events/events.js";
import type { PAfterExpandEvent } from "../../events/events.js";
import type { PCollapseEvent } from "../../events/events.js";
import type { PAfterCollapseEvent } from "../../events/events.js";
import type { PLazyChangeEvent } from "../../events/events.js";
import type { PLazyLoadEvent } from "../../events/events.js";
export type { PExpandEvent } from "../../events/events.js";
export type { PAfterExpandEvent } from "../../events/events.js";
export type { PCollapseEvent } from "../../events/events.js";
export type { PAfterCollapseEvent } from "../../events/events.js";
export type { PLazyChangeEvent } from "../../events/events.js";
export type { PLazyLoadEvent } from "../../events/events.js";
/**
 * @summary A tree item serves as a hierarchical node that lives inside a [tree](/components/tree).
 * @documentation https://pureui.xyz/components/tree-item
 * @status stable
 * @since 2.0
 *
 * @dependency p-checkbox
 * @dependency p-icon
 * @dependency p-spinner
 *
 * @event p-expand - Emitted when the tree item expands.
 * @event p-after-expand - Emitted after the tree item expands and all animations are complete.
 * @event p-collapse - Emitted when the tree item collapses.
 * @event p-after-collapse - Emitted after the tree item collapses and all animations are complete.
 * @event p-lazy-change - Emitted when the tree item's lazy state changes.
 * @event p-lazy-load - Emitted when a lazy item is selected. Use this event to asynchronously load data and append
 *  items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading
 *  state and update the tree.
 *
 * @slot - The default slot.
 * @slot expand-icon - The icon to show when the tree item is expanded.
 * @slot collapse-icon - The icon to show when the tree item is collapsed.
 *
 * @csspart base - The component's base wrapper.
 * @csspart item - The tree item's container. This element wraps everything except slotted tree item children.
 * @csspart item--disabled - Applied when the tree item is disabled.
 * @csspart item--expanded - Applied when the tree item is expanded.
 * @csspart item--indeterminate - Applied when the selection is indeterminate.
 * @csspart item--selected - Applied when the tree item is selected.
 * @csspart indentation - The tree item's indentation container.
 * @csspart expand-button - The container that wraps the tree item's expand button and spinner.
 * @csspart spinner - The spinner that shows when a lazy tree item is in the loading state.
 * @csspart spinner__base - The spinner's base part.
 * @csspart label - The tree item's label.
 * @csspart children - The container that wraps the tree item's nested children.
 * @csspart checkbox - The checkbox that shows when using multiselect.
 * @csspart checkbox__base - The checkbox's exported `base` part.
 * @csspart checkbox__control - The checkbox's exported `control` part.
 * @csspart checkbox__control--checked - The checkbox's exported `control--checked` part.
 * @csspart checkbox__control--indeterminate - The checkbox's exported `control--indeterminate` part.
 * @csspart checkbox__checked-icon - The checkbox's exported `checked-icon` part.
 * @csspart checkbox__indeterminate-icon - The checkbox's exported `indeterminate-icon` part.
 * @csspart checkbox__label - The checkbox's exported `label` part.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPExpand: EventName<PExpandEvent>;
    onPAfterExpand: EventName<PAfterExpandEvent>;
    onPCollapse: EventName<PCollapseEvent>;
    onPAfterCollapse: EventName<PAfterCollapseEvent>;
    onPLazyChange: EventName<PLazyChangeEvent>;
    onPLazyLoad: EventName<PLazyLoadEvent>;
}>;
export default reactWrapper;
