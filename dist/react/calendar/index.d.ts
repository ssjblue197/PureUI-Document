import Component from "../../components/calendar/calendar.component.js";
import { type EventName } from "@lit/react";
import type { PChangeEvent } from "../../events/events.js";
import type { PClearEvent } from "../../events/events.js";
import type { PInputEvent } from "../../events/events.js";
import type { PFocusEvent } from "../../events/events.js";
import type { PBlurEvent } from "../../events/events.js";
import type { PShowEvent } from "../../events/events.js";
import type { PAfterShowEvent } from "../../events/events.js";
import type { PHideEvent } from "../../events/events.js";
import type { PAfterHideEvent } from "../../events/events.js";
import type { PInvalidEvent } from "../../events/events.js";
export type { PChangeEvent } from "../../events/events.js";
export type { PClearEvent } from "../../events/events.js";
export type { PInputEvent } from "../../events/events.js";
export type { PFocusEvent } from "../../events/events.js";
export type { PBlurEvent } from "../../events/events.js";
export type { PShowEvent } from "../../events/events.js";
export type { PAfterShowEvent } from "../../events/events.js";
export type { PHideEvent } from "../../events/events.js";
export type { PAfterHideEvent } from "../../events/events.js";
export type { PInvalidEvent } from "../../events/events.js";
/**
 * @summary A calendar prototype for Pure UI.
 * @documentation https://pureui.xyz/components/calendar
 *
 * @since 1.0
 * @status experimental
 *
 * @dependency p-icon
 * @dependency p-popup
 * @dependency p-tag
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
 *
 * @slot footer - Optional content to place in the calendar's footer.
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the calendar.
 * @slot suffix - Used to append a presentational icon or similar element to the calendar.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @csspart day - Targets day cells.
 * @csspart day-label - Targets the day labels (the name of the days in the grid).
 * @csspart day-weekend - Targets days that fall on weekends.
 * @csspart day-weekday - Targets weekdays.
 * @csspart day-current-month - Targets days in the current month.
 * @csspart day-previous-month - Targets days in the previous month.
 * @csspart day-next-month - Targets days in the next month.
 * @csspart day-today - Targets today.
 * @csspart day-selected - Targets selected days.
 * @csspart day-selection-start - Targets days that begin a selection.
 * @csspart day-selection-end - Targets days that end a selection.
 *
 * @cssproperty --border-color - The calendar's border color.
 * @cssproperty --border-width - The calendar's border width.
 * @cssproperty --border-radius - The border radius of the calendar.
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
