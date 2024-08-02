import Component from "../../components/tooltip/tooltip.component.js";
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
 * @summary Tooltips display additional information based on a specific action.
 * @documentation https://pureui.xyz/components/tooltip
 * @status stable
 * @since 1.0
 *
 * @dependency p-popup
 *
 * @slot - The tooltip's target element. Avoid slotting in more than one element, as subsequent ones will be ignored.
 * @slot content - The content to render in the tooltip. Alternatively, you can use the `content` attribute.
 *
 * @event p-show - Emitted when the tooltip begins to show.
 * @event p-after-show - Emitted after the tooltip has shown and all animations are complete.
 * @event p-hide - Emitted when the tooltip begins to hide.
 * @event p-after-hide - Emitted after the tooltip has hidden and all animations are complete.
 *
 * @csspart base - The component's base wrapper, an `<p-popup>` element.
 * @csspart base__popup - The popup's exported `popup` part. Use this to target the tooltip's popup container.
 * @csspart base__arrow - The popup's exported `arrow` part. Use this to target the tooltip's arrow.
 * @csspart body - The tooltip's body where its content is rendered.
 *
 * @cssproperty --max-width - The maximum width of the tooltip before its content will wrap.
 * @cssproperty --hide-delay - The amount of time to wait before hiding the tooltip when hovering.
 * @cssproperty --show-delay - The amount of time to wait before showing the tooltip when hovering.
 *
 * @animation tooltip.show - The animation to use when showing the tooltip.
 * @animation tooltip.hide - The animation to use when hiding the tooltip.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPShow: EventName<PShowEvent>;
    onPAfterShow: EventName<PAfterShowEvent>;
    onPHide: EventName<PHideEvent>;
    onPAfterHide: EventName<PAfterHideEvent>;
}>;
export default reactWrapper;
