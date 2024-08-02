import Component from "../../components/textarea/textarea.component.js";
import { type EventName } from "@lit/react";
import type { PBlurEvent } from "../../events/events.js";
import type { PChangeEvent } from "../../events/events.js";
import type { PFocusEvent } from "../../events/events.js";
import type { PInputEvent } from "../../events/events.js";
import type { PInvalidEvent } from "../../events/events.js";
export type { PBlurEvent } from "../../events/events.js";
export type { PChangeEvent } from "../../events/events.js";
export type { PFocusEvent } from "../../events/events.js";
export type { PInputEvent } from "../../events/events.js";
export type { PInvalidEvent } from "../../events/events.js";
/**
 * @summary Textareas collect data from the user and allow multiple lines of text.
 * @documentation https://pureui.xyz/components/textarea
 * @status stable
 * @since 1.0
 *
 * @slot label - The textarea's label. Alternatively, you can use the `label` attribute.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event p-blur - Emitted when the control loses focus.
 * @event p-change - Emitted when an alteration to the control's value is committed by the user.
 * @event p-focus - Emitted when the control gains focus.
 * @event p-input - Emitted when the control receives input.
 * @event p-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart base - The component's base wrapper.
 * @csspart textarea - The internal `<textarea>` control.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPBlur: EventName<PBlurEvent>;
    onPChange: EventName<PChangeEvent>;
    onPFocus: EventName<PFocusEvent>;
    onPInput: EventName<PInputEvent>;
    onPInvalid: EventName<PInvalidEvent>;
}>;
export default reactWrapper;
