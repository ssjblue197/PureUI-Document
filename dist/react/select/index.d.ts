import Component from '../../components/select/select.component.js';
import { type EventName } from '@lit/react';
import type { PChangeEvent } from '../../events/events.js';
import type { PClearEvent } from '../../events/events.js';
import type { PInputEvent } from '../../events/events.js';
import type { PFocusEvent } from '../../events/events.js';
import type { PBlurEvent } from '../../events/events.js';
import type { PShowEvent } from '../../events/events.js';
import type { PAfterShowEvent } from '../../events/events.js';
import type { PHideEvent } from '../../events/events.js';
import type { PAfterHideEvent } from '../../events/events.js';
import type { PInvalidEvent } from '../../events/events.js';
export type { PChangeEvent } from '../../events/events.js';
export type { PClearEvent } from '../../events/events.js';
export type { PInputEvent } from '../../events/events.js';
export type { PFocusEvent } from '../../events/events.js';
export type { PBlurEvent } from '../../events/events.js';
export type { PShowEvent } from '../../events/events.js';
export type { PAfterShowEvent } from '../../events/events.js';
export type { PHideEvent } from '../../events/events.js';
export type { PAfterHideEvent } from '../../events/events.js';
export type { PInvalidEvent } from '../../events/events.js';
/**
 * @summary Selects allow you to choose items from a menu of predefined options.
 * @documentation https://pureui.xyz/components/select
 * @status stable
 * @since 2.0
 *
 * @dependency p-icon
 * @dependency p-popup
 * @dependency p-tag
 *
 * @slot - The listbox options. Must be `<p-option>` elements. You can use `<p-divider>` to group items visually.
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot suffix - Used to append a presentational icon or similar element to the combobox.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot expand-icon - The icon to show when the control is expanded and collapsed. Rotates on open and close.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event p-change - Emitted when the control's value changes.
 * @event p-clear - Emitted when the control's value is cleared.
 * @event p-input - Emitted when the control receives input.
 * @event p-focus - Emitted when the control gains focus.
 * @event p-blur - Emitted when the control loses focus.
 * @event p-show - Emitted when the select's menu opens.
 * @event p-after-show - Emitted after the select's menu opens and all animations are complete.
 * @event p-hide - Emitted when the select's menu closes.
 * @event p-after-hide - Emitted after the select's menu closes and all animations are complete.
 * @event p-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The select's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart combobox - The container the wraps the prefix, suffix, combobox, clear icon, and expand button.
 * @csspart prefix - The container that wraps the prefix slot.
 * @csspart suffix - The container that wraps the suffix slot.
 * @csspart display-input - The element that displays the selected option's label, an `<input>` element.
 * @csspart listbox - The listbox container where options are slotted.
 * @csspart tags - The container that houses option tags when `multiselect` is used.
 * @csspart tag - The individual tags that represent each multiselect option.
 * @csspart tag__base - The tag's base part.
 * @csspart tag__content - The tag's content part.
 * @csspart tag__remove-button - The tag's remove button.
 * @csspart tag__remove-button__base - The tag's remove button base part.
 * @csspart clear-button - The clear button.
 * @csspart expand-icon - The container that wraps the expand icon.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPChange: EventName<PChangeEvent>;
    onPClear: EventName<PClearEvent>;
    onPInput: EventName<PInputEvent>;
    onPFocus: EventName<PFocusEvent>;
    onPBlur: EventName<PBlurEvent>;
    onPShow: EventName<PShowEvent>;
    onPAfterShow: EventName<PAfterShowEvent>;
    onPHide: EventName<PHideEvent>;
    onPAfterHide: EventName<PAfterHideEvent>;
    onPInvalid: EventName<PInvalidEvent>;
}>;
export default reactWrapper;
