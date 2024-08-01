import Component from '../../components/animated-image/animated-image.component.js';
import { type EventName } from '@lit/react';
import type { PLoadEvent } from '../../events/events.js';
import type { PErrorEvent } from '../../events/events.js';
export type { PLoadEvent } from '../../events/events.js';
export type { PErrorEvent } from '../../events/events.js';
/**
 * @summary A component for displaying animated GIFs and WEBPs that play and pause on interaction.
 * @documentation https://pureui.xyz/components/animated-image
 * @status stable
 * @since 2.0
 *
 * @dependency p-icon
 *
 * @event p-load - Emitted when the image loads successfully.
 * @event p-error - Emitted when the image fails to load.
 *
 * @slot play-icon - Optional play icon to use instead of the default. Works best with `<p-icon>`.
 * @slot pause-icon - Optional pause icon to use instead of the default. Works best with `<p-icon>`.
 *
 * @part control-box - The container that surrounds the pause/play icons and provides their background.
 *
 * @cssproperty --control-box-size - The size of the icon box.
 * @cssproperty --icon-size - The size of the play/pause icons.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPLoad: EventName<PLoadEvent>;
    onPError: EventName<PErrorEvent>;
}>;
export default reactWrapper;
