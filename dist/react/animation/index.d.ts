import Component from '../../components/animation/animation.component.js';
import { type EventName } from '@lit/react';
import type { PCancelEvent } from '../../events/events.js';
import type { PFinishEvent } from '../../events/events.js';
import type { PStartEvent } from '../../events/events.js';
export type { PCancelEvent } from '../../events/events.js';
export type { PFinishEvent } from '../../events/events.js';
export type { PStartEvent } from '../../events/events.js';
/**
 * @summary Animate elements declaratively with nearly 100 baked-in presets, or roll your own with custom keyframes. Powered by the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).
 * @documentation https://pureui.xyz/components/animation
 * @status stable
 * @since 2.0
 *
 * @event p-cancel - Emitted when the animation is canceled.
 * @event p-finish - Emitted when the animation finishes.
 * @event p-start - Emitted when the animation starts or restarts.
 *
 * @slot - The element to animate. Avoid slotting in more than one element, as subsequent ones will be ignored. To
 *  animate multiple elements, either wrap them in a single container or use multiple `<p-animation>` elements.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPCancel: EventName<PCancelEvent>;
    onPFinish: EventName<PFinishEvent>;
    onPStart: EventName<PStartEvent>;
}>;
export default reactWrapper;
