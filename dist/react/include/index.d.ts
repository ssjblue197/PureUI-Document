import Component from '../../components/include/include.component.js';
import { type EventName } from '@lit/react';
import type { PLoadEvent } from '../../events/events.js';
import type { PErrorEvent } from '../../events/events.js';
export type { PLoadEvent } from '../../events/events.js';
export type { PErrorEvent } from '../../events/events.js';
/**
 * @summary Includes give you the power to embed external HTML files into the page.
 * @documentation https://pureui.xyz/components/include
 * @status stable
 * @since 2.0
 *
 * @event p-load - Emitted when the included file is loaded.
 * @event {{ status: number }} p-error - Emitted when the included file fails to load due to an error.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPLoad: EventName<PLoadEvent>;
    onPError: EventName<PErrorEvent>;
}>;
export default reactWrapper;
