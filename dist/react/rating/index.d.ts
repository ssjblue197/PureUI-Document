import Component from "../../components/rating/rating.component.js";
import { type EventName } from "@lit/react";
import type { PChangeEvent } from "../../events/events.js";
import type { PHoverEvent } from "../../events/events.js";
export type { PChangeEvent } from "../../events/events.js";
export type { PHoverEvent } from "../../events/events.js";
/**
 * @summary Ratings give users a way to quickly view and provide feedback.
 * @documentation https://pureui.xyz/components/rating
 * @status stable
 * @since 2.0
 *
 * @dependency p-icon
 *
 * @event p-change - Emitted when the rating's value changes.
 * @event {{ phase: 'start' | 'move' | 'end', value: number }} p-hover - Emitted when the user hovers over a value. The
 *  `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the
 *  rating's value would be if the user were to commit to the hovered value.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --symbol-color - The inactive color for symbols.
 * @cssproperty --symbol-color-active - The active color for symbols.
 * @cssproperty --symbol-size - The size of symbols.
 * @cssproperty --symbol-spacing - The spacing to use around symbols.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPChange: EventName<PChangeEvent>;
    onPHover: EventName<PHoverEvent>;
}>;
export default reactWrapper;
