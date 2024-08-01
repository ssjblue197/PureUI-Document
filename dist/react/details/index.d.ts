import Component from '../../components/details/details.component.js';
import { type EventName } from '@lit/react';
import type { PShowEvent } from '../../events/events.js';
import type { PAfterShowEvent } from '../../events/events.js';
import type { PHideEvent } from '../../events/events.js';
import type { PAfterHideEvent } from '../../events/events.js';
export type { PShowEvent } from '../../events/events.js';
export type { PAfterShowEvent } from '../../events/events.js';
export type { PHideEvent } from '../../events/events.js';
export type { PAfterHideEvent } from '../../events/events.js';
/**
 * @summary Details show a brief summary and expand to show additional content.
 * @documentation https://pureui.xyz/components/details
 * @status stable
 * @since 2.0
 *
 * @dependency p-icon
 *
 * @slot - The details' main content.
 * @slot summary - The details' summary. Alternatively, you can use the `summary` attribute.
 * @slot expand-icon - Optional expand icon to use instead of the default. Works best with `<p-icon>`.
 * @slot collapse-icon - Optional collapse icon to use instead of the default. Works best with `<p-icon>`.
 *
 * @event p-show - Emitted when the details opens.
 * @event p-after-show - Emitted after the details opens and all animations are complete.
 * @event p-hide - Emitted when the details closes.
 * @event p-after-hide - Emitted after the details closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart header - The header that wraps both the summary and the expand/collapse icon.
 * @csspart summary - The container that wraps the summary.
 * @csspart summary-icon - The container that wraps the expand/collapse icons.
 * @csspart content - The details content.
 *
 * @animation details.show - The animation to use when showing details. You can use `height: auto` with this animation.
 * @animation details.hide - The animation to use when hiding details. You can use `height: auto` with this animation.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPShow: EventName<PShowEvent>;
    onPAfterShow: EventName<PAfterShowEvent>;
    onPHide: EventName<PHideEvent>;
    onPAfterHide: EventName<PAfterHideEvent>;
}>;
export default reactWrapper;
