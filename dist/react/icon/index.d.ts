import Component from "../../components/icon/icon.component.js";
import { type EventName } from "@lit/react";
import type { PLoadEvent } from "../../events/events.js";
import type { PErrorEvent } from "../../events/events.js";
export type { PLoadEvent } from "../../events/events.js";
export type { PErrorEvent } from "../../events/events.js";
/**
 * @summary Icons are symbols that can be used to represent various options within an application.
 * @documentation https://pureui.xyz/components/icon
 * @status stable
 * @since 1.0
 *
 * @event p-load - Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit.
 * @event p-error - Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit.
 *
 * @csspart svg - The internal SVG element.
 * @csspart use - The <use> element generated when using `spriteSheet: true`
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPLoad: EventName<PLoadEvent>;
    onPError: EventName<PErrorEvent>;
}>;
export default reactWrapper;
