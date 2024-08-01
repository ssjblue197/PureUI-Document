import Component from "../../components/input/input.component.js";
import { type EventName } from "@lit/react";
import type { PBlurEvent } from "../../events/events.js";
import type { PChangeEvent } from "../../events/events.js";
import type { PClearEvent } from "../../events/events.js";
import type { PFocusEvent } from "../../events/events.js";
import type { PInputEvent } from "../../events/events.js";
import type { PInvalidEvent } from "../../events/events.js";
export type { PBlurEvent } from "../../events/events.js";
export type { PChangeEvent } from "../../events/events.js";
export type { PClearEvent } from "../../events/events.js";
export type { PFocusEvent } from "../../events/events.js";
export type { PInputEvent } from "../../events/events.js";
export type { PInvalidEvent } from "../../events/events.js";
/**
 * @summary Inputs collect data from the user.
 * @documentation https://pureui.xyz/components/input
 * @status stable
 * @since 2.0
 *
 * @dependency p-icon
 *
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the input.
 * @slot suffix - Used to append a presentational icon or similar element to the input.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot show-password-icon - An icon to use in lieu of the default show password icon.
 * @slot hide-password-icon - An icon to use in lieu of the default hide password icon.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event p-blur - Emitted when the control loses focus.
 * @event p-change - Emitted when an alteration to the control's value is committed by the user.
 * @event p-clear - Emitted when the clear button is activated.
 * @event p-focus - Emitted when the control gains focus.
 * @event p-input - Emitted when the control receives input.
 * @event p-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart base - The component's base wrapper.
 * @csspart input - The internal `<input>` control.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart clear-button - The clear button.
 * @csspart password-toggle-button - The password toggle button.
 * @csspart suffix - The container that wraps the suffix.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPBlur: EventName<PBlurEvent>;
    onPChange: EventName<PChangeEvent>;
    onPClear: EventName<PClearEvent>;
    onPFocus: EventName<PFocusEvent>;
    onPInput: EventName<PInputEvent>;
    onPInvalid: EventName<PInvalidEvent>;
}>;
export default reactWrapper;
