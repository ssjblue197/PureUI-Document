import PCalendar from "./calendar.component.js";
export * from "./calendar.component.js";
export default PCalendar;
declare global {
    interface HTMLElementTagNameMap {
        "p-calendar": PCalendar;
    }
}
