import Component from '../../components/switch/switch.component.js';
import { type EventName } from '@lit/react';
import type { PBlurEvent } from '../../events/events.js';
import type { PChangeEvent } from '../../events/events.js';
import type { PInputEvent } from '../../events/events.js';
import type { PFocusEvent } from '../../events/events.js';
import type { PInvalidEvent } from '../../events/events.js';
export type { PBlurEvent } from '../../events/events.js';
export type { PChangeEvent } from '../../events/events.js';
export type { PInputEvent } from '../../events/events.js';
export type { PFocusEvent } from '../../events/events.js';
export type { PInvalidEvent } from '../../events/events.js';
/**
 * @summary Switches allow the user to toggle an option on or off.
 * @documentation https://pureui.xyz/components/switch
 * @status stable
 * @since 2.0
 *
 * @slot - The switch's label.
 * @slot help-text - Text that describes how to use the switch. Alternatively, you can use the `help-text` attribute.
 *
 * @event p-blur - Emitted when the control loses focus.
 * @event p-change - Emitted when the control's checked state changes.
 * @event p-input - Emitted when the control receives input.
 * @event p-focus - Emitted when the control gains focus.
 * @event p-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The control that houses the switch's thumb.
 * @csspart thumb - The switch's thumb.
 * @csspart label - The switch's label.
 * @csspart form-control-help-text - The help text's wrapper.
 *
 * @cssproperty --width - The width of the switch.
 * @cssproperty --height - The height of the switch.
 * @cssproperty --thumb-size - The size of the thumb.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPBlur: EventName<PBlurEvent>;
    onPChange: EventName<PChangeEvent>;
    onPInput: EventName<PInputEvent>;
    onPFocus: EventName<PFocusEvent>;
    onPInvalid: EventName<PInvalidEvent>;
}>;
export default reactWrapper;
