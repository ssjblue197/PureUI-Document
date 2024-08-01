import Component from '../../components/checkbox/checkbox.component.js';
import { type EventName } from '@lit/react';
import type { PBlurEvent } from '../../events/events.js';
import type { PChangeEvent } from '../../events/events.js';
import type { PFocusEvent } from '../../events/events.js';
import type { PInputEvent } from '../../events/events.js';
import type { PInvalidEvent } from '../../events/events.js';
export type { PBlurEvent } from '../../events/events.js';
export type { PChangeEvent } from '../../events/events.js';
export type { PFocusEvent } from '../../events/events.js';
export type { PInputEvent } from '../../events/events.js';
export type { PInvalidEvent } from '../../events/events.js';
/**
 * @summary Checkboxes allow the user to toggle an option on or off.
 * @documentation https://pureui.xyz/components/checkbox
 * @status stable
 * @since 2.0
 *
 * @dependency p-icon
 *
 * @slot - The checkbox's label.
 * @slot help-text - Text that describes how to use the checkbox. Alternatively, you can use the `help-text` attribute.
 *
 * @event p-blur - Emitted when the checkbox loses focus.
 * @event p-change - Emitted when the checked state changes.
 * @event p-focus - Emitted when the checkbox gains focus.
 * @event p-input - Emitted when the checkbox receives input.
 * @event p-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The square container that wraps the checkbox's checked state.
 * @csspart control--checked - Matches the control part when the checkbox is checked.
 * @csspart control--indeterminate - Matches the control part when the checkbox is indeterminate.
 * @csspart checked-icon - The checked icon, an `<p-icon>` element.
 * @csspart indeterminate-icon - The indeterminate icon, an `<p-icon>` element.
 * @csspart label - The container that wraps the checkbox's label.
 * @csspart form-control-help-text - The help text's wrapper.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPBlur: EventName<PBlurEvent>;
    onPChange: EventName<PChangeEvent>;
    onPFocus: EventName<PFocusEvent>;
    onPInput: EventName<PInputEvent>;
    onPInvalid: EventName<PInvalidEvent>;
}>;
export default reactWrapper;
