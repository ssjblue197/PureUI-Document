export interface CalendarDay {
    date: Date;
    isToday: boolean;
    isWeekday: boolean;
    isWeekend: boolean;
    isCurrentMonth: boolean;
    isPreviousMonth: boolean;
    isNextMonth: boolean;
}
export type CalendarInterface = "day" | "month" | "year";
export interface CalendarGridOptions {
    weekStartsWith: "sunday" | "monday";
    interface: CalendarInterface;
}
/** Generates a calendar grid. Month should be 1-12, not 0-11. */
export declare function generateCalendarGrid(year: number, month: number, options?: Partial<CalendarGridOptions>): CalendarDay[];
/** Generates a localized array of day names. */
export declare function getAllDayNames(locale?: string, format?: Intl.DateTimeFormatOptions["weekday"]): string[];
/** Generates a localized array of month names. */
export declare function getAllMonthNames(locale?: string, format?: Intl.DateTimeFormatOptions["month"]): string[];
/** Determines if two dates are the same day. */
export declare function isSameDay(date1: Date, date2: Date): boolean;
/** Determines if the date is a weekend. */
export declare function isWeekend(date: Date): boolean;
/** Determines if the date is a weekday. */
export declare function isWeekday(date: Date): boolean;
/** Returns a localized, human-readable day name. */
export declare function getDayName(date: Date, locale?: string, format?: Intl.DateTimeFormatOptions["weekday"]): string;
/** Returns a localized, human-readable month name. */
export declare function getMonthName(date: Date, locale?: string, format?: Intl.DateTimeFormatOptions["month"]): string;
export declare function getDateLabelWithFormat(date: Date, locale?: string, format?: Intl.DateTimeFormatOptions): string;
export declare function getDateDifferentFrom(date: Date, days: number): Date;
export declare function getMonthDifferentFrom(date: Date, months: number): Date;
