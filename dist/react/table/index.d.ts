import Component from "../../components/table/table.component.js";
import { type EventName } from "@lit/react";
import type { PChangeEvent } from "../../events/events.js";
export type { PChangeEvent } from "../../events/events.js";
/**
 * @summary Short summary of the component's intended use.
 * @documentation https://pureui.xyz/components/table
 * @status experimental
 * @since 2.0
 *
 * @dependency p-example
 *
 * @event p-change - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPChange: EventName<PChangeEvent>;
}>;
export default reactWrapper;
