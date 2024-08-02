import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup, TemplateResult } from "lit";
export interface RenderDayOptions {
    disabled?: boolean;
    content: string | TemplateResult;
}
/**
 * @summary A calendar prototype for Pure UI.
 * @documentation https://pureui.xyz/components/calendar
 *
 * @since 1.0
 * @status experimental
 *
 * @dependency p-example
 *
 * @event p-change - Emitted when the date changes.
 *
 * @slot footer - Optional content to place in the calendar's footer.
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
export default class PCalendar extends PureElement {
    static styles: CSSResultGroup;
    private readonly localize;
    private readonly hasSlotController;
    /** The month to render, 1-12/ */
    month: number;
    /** The year to render. */
    year: number;
    /** Determines how day labels are shown, e.g. "M", "Mon", or "Monday". */
    dayLabels: "narrow" | "short" | "long";
    /** Determines how month labels are shown, e.g. "J", "Jan", or "January". */
    monthLabels: "numeric" | "2-digit" | "long" | "short" | "narrow";
    /** When true, dates from the previous and next month will also be shown to fill out the grid. */
    showAdjacentDates: boolean;
    /** Draws the target dates as a selection in the calendar. */
    selectedDates: Date[];
    /** Moves the calendar to the current month and year. */
    goToToday(): void;
    /** Moves the calendar to the previous month. */
    goToPreviousMonth(): void;
    /** Moves the calendar to the next month. */
    goToNextMonth(): void;
    handleMonthChange(): void;
    render(): TemplateResult<1>;
}
