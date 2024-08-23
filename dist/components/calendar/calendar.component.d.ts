import PIcon from "../icon/icon.component.js";
import PPopup from "../popup/popup.component.js";
import PTag from "../tag/tag.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup, TemplateResult } from "lit";
import type { PureFormControl } from "../../internal/pure-ui-element.js";
import type POption from "../option/option.component.js";
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
export default class PCalendar extends PureElement implements PureFormControl {
    static styles: CSSResultGroup;
    static dependencies: {
        "p-icon": typeof PIcon;
        "p-popup": typeof PPopup;
        "p-tag": typeof PTag;
    };
    private readonly formControlController;
    private readonly localize;
    private readonly hasSlotController;
    private keyword;
    private closeWatcher;
    popup: PPopup;
    combobox: HTMLSlotElement;
    displayInput: HTMLInputElement;
    valueInput: HTMLInputElement;
    calendar: HTMLSlotElement;
    formatter: string;
    /**
     * Indicates whether the calendar is in typing mode.
     * Typing mode means that the calendar accepts user input and emits `p-input` and `p-change` events when the user types a valid date.
     * When typing mode is `false`, the calendar does not accept user input and does not emit `p-input` or `p-change` events.
     *
     * @type {boolean}
     * @default true
     */
    typing: boolean;
    /**
     * Indicates whether the control has focus.
     * @type {boolean}
     */
    private hasFocus;
    /**
     * The display label to show in the select when no options are selected.
     * Used when the control is not focused.
     * @type {string}
     */
    displayLabel: string;
    /**
     * The currently selected option.
     * @type {POption}
     */
    currentOption: POption;
    /**
     * The selected options.
     * @type {POption[]}
     */
    selectedOptions: POption[];
    /** The name of the calendar, submitted as a name/value pair with form data. */
    name: string;
    /**
     * The current value of the calendar, submitted as a name/value pair with form data. When type is set to`multiple`, the
     * value attribute will be a space-delimited list of values based on the dates selected, and the value property will
     * be an array. **For this reason, values must not contain spaces.**
     */
    value: Date[];
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultValue: Date | Date[];
    /** The select's size. */
    size: "small" | "medium" | "large";
    /** Placeholder text to show as a hint when the select is empty. */
    placeholder: string;
    /**
     * The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
     * indicate the number of additional items that are selected. Set to 0 to remove the limit.
     */
    maxOptionsVisible: number;
    /** Disables the select control. */
    disabled: boolean;
    /** Adds a clear button when the select is not empty. */
    clearable: boolean;
    /**
     * Indicates whether or not the calendar is open. You can toggle this attribute to show and hide the menu, or you can
     * use the `show()` and `hide()` methods and this attribute will reflect the select's open state.
     */
    open: boolean;
    /**
     * Enable this option to prevent the calendar from being clipped when the component is placed inside a container with
     * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
     */
    hoist: boolean;
    /** Draws a filled select. */
    filled: boolean;
    /** Draws a pill-style select with rounded edges. */
    pill: boolean;
    /** The calendar's label. If you need to display HTML, use the `label` slot instead. */
    label: string;
    /**
     * The preferred placement of the calendar's popup. Note that the actual placement may vary as needed to keep the calendar
     * inside of the viewport.
     */
    placement: "top" | "bottom";
    /** The select's help text. If you need to display HTML, use the `help-text` slot instead. */
    helpText: string;
    /**
     * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
     * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
     * the same document or shadow root for this to work.
     */
    form: string;
    /** The select's required attribute. */
    required: boolean;
    /**
     * A function that customizes the tags to be rendered when type=multiple. The first argument is the option, the second
     * is the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at
     * the specified value.
     */
    getTag: (option: POption, index: number) => TemplateResult | string | HTMLElement;
    /**
     * When `true`, the calendar will show a button to quickly jump to today's date.
     *
     * @attribute show-today
     * @type {boolean}
     * @default false
     */
    showToday: boolean;
    /**
     * The mode of the calendar.
     * - "default": calendar is displayed in a popup.
     * - "inline": calendar is displayed inline.
     * TODO in future....
     * @attribute mode
     * @type {"default" | "inline"}
     * @default "default"
     */
    mode: "default" | "inline";
    /**
     * The type of selection the calendar allows.
     * - "single": allows selecting a single date.
     * - "multiple": allows selecting multiple dates.
     * - "range": allows selecting a range of dates.
     *
     * @attribute type
     * @type {"single" | "multiple" | "range"}
     * @default "single"
     */
    type: "single" | "multiple" | "range";
    /**
     * If `true`, the calendar will automatically receive focus when it open.
     * This can be useful when using the calendar in a dialog or other scenario where it should
     * receive focus without requiring the user to click on it.
     */
    autofocus: boolean;
    /** The month to render, 1-12/ */
    month: number;
    /** The year to render. */
    year: number;
    /** The date to render. */
    date: number;
    /** Determines how day labels are shown, e.g. "M", "Mon", or "Monday". */
    dayLabels: "narrow" | "short" | "long";
    /** Determines how month labels are shown, e.g. "J", "Jan", or "January". */
    monthLabels: "numeric" | "2-digit" | "long" | "short" | "narrow";
    /** When true, dates from the previous and next month will also be shown to fill out the grid. */
    showAdjacentDates: boolean;
    /** Gets the validity state object */
    get validity(): ValidityState;
    /** Gets the validation message */
    get validationMessage(): string;
    connectedCallback(): void;
    private addOpenListeners;
    private removeOpenListeners;
    private handleFocus;
    private handleBlur;
    handleInput(): void;
    private handleDocumentFocusIn;
    private handleDocumentKeyDown;
    private handleDocumentMouseDown;
    private handleLabelClick;
    private handleComboboxMouseDown;
    private handleComboboxKeyDown;
    private handleClearClick;
    private handleClearMouseDown;
    private handleOptionClick;
    private handleTagRemove;
    private getAllOptions;
    private setCurrentOption;
    private setSelectedOptions;
    private toggleOptionSelection;
    private selectionChanged;
    protected get tags(): TemplateResult<1>[];
    private handleInvalid;
    handleDisabledChange(): void;
    handleValueChange(): void;
    handleOpenChange(): Promise<void>;
    /** Shows the calendar. */
    show(): Promise<void>;
    /** Hides the calendar. */
    hide(): Promise<void>;
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity(): boolean;
    /** Gets the associated form, if one exists. */
    getForm(): HTMLFormElement | null;
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity(): boolean;
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message: string): void;
    /** Sets focus on the control. */
    focus(options?: FocusOptions): void;
    /** Removes focus from the control. */
    blur(): void;
    /** Moves the calendar to the current month and year. */
    goToToday(): void;
    /** Moves the calendar to the previous month. */
    goToPreviousMonth(): void;
    /** Moves the calendar to the next month. */
    goToNextMonth(): void;
    /** Moves the calendar to the previous year. */
    goToPreviousYear(): void;
    /** Moves the calendar to the next year. */
    goToNextYear(): void;
    handleMonthChange(): void;
    render(): TemplateResult<1>;
}
