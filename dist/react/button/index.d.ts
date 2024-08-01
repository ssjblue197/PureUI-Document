import Component from '../../components/button/button.component.js';
import { type EventName } from '@lit/react';
import type { PBlurEvent } from '../../events/events.js';
import type { PFocusEvent } from '../../events/events.js';
import type { PInvalidEvent } from '../../events/events.js';
export type { PBlurEvent } from '../../events/events.js';
export type { PFocusEvent } from '../../events/events.js';
export type { PInvalidEvent } from '../../events/events.js';
/**
 * @summary Buttons represent actions that are available to the user.
 * @documentation https://pureui.xyz/components/button
 * @status stable
 * @since 2.0
 *
 * @dependency p-icon
 * @dependency p-spinner
 *
 * @event p-blur - Emitted when the button loses focus.
 * @event p-focus - Emitted when the button gains focus.
 * @event p-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @slot - The button's label.
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot suffix - A presentational suffix icon or similar element.
 *
 * @csspart base - The component's base wrapper.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart label - The button's label.
 * @csspart suffix - The container that wraps the suffix.
 * @csspart caret - The button's caret icon, an `<p-icon>` element.
 * @csspart spinner - The spinner that shows when the button is in the loading state.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPBlur: EventName<PBlurEvent>;
    onPFocus: EventName<PFocusEvent>;
    onPInvalid: EventName<PInvalidEvent>;
}>;
export default reactWrapper;
