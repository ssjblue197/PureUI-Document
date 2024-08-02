import {
  calendar_styles_default
} from "./chunk.ECHWM2QP.js";
import {
  HasSlotController
} from "./chunk.VWMKJPVE.js";
import {
  e
} from "./chunk.TGM7ILZL.js";
import {
  LocalizeController
} from "./chunk.6BMNUR6W.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  n
} from "./chunk.KS3X6AEV.js";
import {
  x
} from "./chunk.N4FVDREO.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/internal/calendar.ts
function generateCalendarGrid(year, month, options) {
  const weekStartsWith = (options == null ? void 0 : options.weekStartsWith) || "sunday";
  const today = /* @__PURE__ */ new Date();
  const dayThisMonthStartsWith = new Date(year, month - 1, 1).getDay();
  const lastDayOfMonth = new Date(year, month, 0).getDate();
  const lastDayOfPreviousMonth = month === 1 ? new Date(year - 1, 1, 0).getDate() : new Date(year, month - 1, 0).getDate();
  const dayGrid = [];
  let day = 1;
  do {
    const date = new Date(year, month - 1, day);
    let dayOfWeek = new Date(year, month - 1, day).getDay();
    if (weekStartsWith === "sunday") {
    }
    if (day === 1) {
      let lastMonthDay = lastDayOfPreviousMonth - dayThisMonthStartsWith + 1;
      for (let i = 0; i < dayThisMonthStartsWith; i++) {
        const dayOfLastMonth = new Date(year, month - 2, lastMonthDay);
        dayGrid.push({
          date: dayOfLastMonth,
          isToday: isSameDay(dayOfLastMonth, today),
          isWeekday: isWeekday(dayOfLastMonth),
          isWeekend: isWeekend(dayOfLastMonth),
          isCurrentMonth: false,
          isPreviousMonth: true,
          isNextMonth: false
        });
        lastMonthDay++;
      }
    }
    dayGrid.push({
      date,
      isToday: isSameDay(date, today),
      isWeekday: isWeekday(date),
      isWeekend: isWeekend(date),
      isCurrentMonth: true,
      isPreviousMonth: false,
      isNextMonth: false
    });
    if (day === lastDayOfMonth) {
      let nextMonthDay = 1;
      for (dayOfWeek; dayOfWeek < 6; dayOfWeek++) {
        const dayOfNextMonth = new Date(year, month, nextMonthDay);
        dayGrid.push({
          date: dayOfNextMonth,
          isToday: isSameDay(dayOfNextMonth, today),
          isWeekday: isWeekday(dayOfNextMonth),
          isWeekend: isWeekend(dayOfNextMonth),
          isCurrentMonth: false,
          isPreviousMonth: false,
          isNextMonth: true
        });
        nextMonthDay++;
      }
    }
    day++;
  } while (day <= lastDayOfMonth);
  return dayGrid;
}
function getAllDayNames(locale = "en", format = "long") {
  const formatter = new Intl.DateTimeFormat(locale, {
    weekday: format,
    timeZone: "UTC"
  });
  const days = [1, 2, 3, 4, 5, 6, 7].map((day) => {
    const dd = day < 10 ? `0${day}` : day;
    return /* @__PURE__ */ new Date(`2017-01-${dd}T00:00:00+00:00`);
  });
  return days.map((date) => formatter.format(date));
}
function getAllMonthNames(locale = "en", format = "long") {
  const formatter = new Intl.DateTimeFormat(locale, {
    month: format,
    timeZone: "UTC"
  });
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => {
    const mm = month < 10 ? `0${month}` : month;
    return /* @__PURE__ */ new Date(`2017-${mm}-01T00:00:00+00:00`);
  });
  return months.map((date) => formatter.format(date));
}
function isSameDay(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
}
function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}
function isWeekday(date) {
  const day = date.getDay();
  return day > 0 && day < 6;
}
function getMonthName(date, locale = "en", format = "long") {
  return getAllMonthNames(locale, format)[date.getMonth()];
}

// src/internal/part-map.ts
function partMap(map) {
  const parts = [];
  for (const [key, value] of Object.entries(map)) {
    if (value) {
      parts.push(key);
    }
  }
  return parts.join(" ");
}

// src/components/calendar/calendar.component.ts
var PCalendar = class extends PureElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.hasSlotController = new HasSlotController(this, "prefix", "suffix");
    this.month = (/* @__PURE__ */ new Date()).getMonth() + 1;
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
    this.dayLabels = "short";
    this.monthLabels = "long";
    this.showAdjacentDates = false;
    this.selectedDates = [];
  }
  /** Moves the calendar to the current month and year. */
  goToToday() {
    this.month = (/* @__PURE__ */ new Date()).getMonth() + 1;
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
  }
  /** Moves the calendar to the previous month. */
  goToPreviousMonth() {
    if (this.month === 1) {
      this.month = 12;
      this.year--;
    } else {
      this.month--;
    }
  }
  /** Moves the calendar to the next month. */
  goToNextMonth() {
    if (this.month === 12) {
      this.month = 1;
      this.year++;
    } else {
      this.month++;
    }
  }
  handleMonthChange() {
    this.emit("p-change");
  }
  render() {
    if (this.month < 1 || this.month > 12) {
      throw new Error(`The value "${this.month}" is not a valid month.`);
    }
    const lang = this.lang || document.documentElement.lang;
    const month = new Date(this.year, this.month - 1, 1);
    const dayGrid = generateCalendarGrid(this.year, this.month);
    const dayNames = getAllDayNames(lang, this.dayLabels);
    return x`
      <div
        class=${e({
      calendar: true,
      "calendar--has-footer": this.hasSlotController.test("footer"),
      "calendar--show-adjacent-dates": this.showAdjacentDates
    })}
      >
        <header class="calendar__header">
          <p-icon-button
            name="chevron-left"
            label=${this.localize.term("previousMonth")}
            @click=${this.goToPreviousMonth}
          ></p-icon-button>

          <span class="calendar__label">
            <span class="calendar__month-label">${getMonthName(month, lang, this.monthLabels)}</span>
            <span class="calendar__year-label">${month.getFullYear()}</span>
          </span>

          <p-icon-button
            name="chevron-right"
            label=${this.localize.term("nextMonth")}
            @click=${this.goToNextMonth}
          ></p-icon-button>
        </header>

        <div class="calendar__days">
          ${[0, 1, 2, 3, 4, 5, 6].map((day) => {
      return x`
              <span
                part=${partMap({
        day: true,
        "day-label": true,
        "day-weekday": day > 0 && day < 6,
        "day-weekend": day === 0 || day === 6
      })}
                class="calendar__day"
              >
                ${dayNames[day]}
              </span>
            `;
    })}
          ${dayGrid.map((day, index) => {
      if (day.isCurrentMonth || this.showAdjacentDates) {
        const isSelected = Array.isArray(this.selectedDates) ? this.selectedDates.some((d) => isSameDay(d, day.date)) : false;
        const previousDay = index > 0 ? dayGrid[index - 1] : null;
        const nextDay = index < dayGrid.length - 1 ? dayGrid[index + 1] : null;
        const isSelectionStart = isSelected && previousDay ? !this.selectedDates.some((d) => isSameDay(d, previousDay.date)) : false;
        const isSelectionEnd = isSelected && nextDay ? !this.selectedDates.some((d) => isSameDay(d, nextDay.date)) : false;
        return x`
                <button
                  type="button"
                  part=${partMap({
          day: true,
          "day-current-month": day.isCurrentMonth,
          "day-previous-month": day.isPreviousMonth,
          "day-next-month": day.isNextMonth,
          "day-today": day.isToday,
          "day-weekday": day.isWeekday,
          "day-weekend": day.isWeekend,
          "day-selected": isSelected,
          "day-selection-start": isSelectionStart,
          "day-selection-end": isSelectionEnd
        })}
                  class="calendar__day"
                >
                  ${day.date.getDate()}
                </button>
              `;
      }
      return x` <div class="calendar__day calendar__day--empty"></div> `;
    })}
        </div>

        <footer class="calendar__footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    `;
  }
};
PCalendar.styles = calendar_styles_default;
__decorateClass([
  n({ type: Number, reflect: true })
], PCalendar.prototype, "month", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], PCalendar.prototype, "year", 2);
__decorateClass([
  n({ attribute: "day-labels" })
], PCalendar.prototype, "dayLabels", 2);
__decorateClass([
  n({ attribute: "month-labels" })
], PCalendar.prototype, "monthLabels", 2);
__decorateClass([
  n({ attribute: "show-adjacent-dates", type: Boolean })
], PCalendar.prototype, "showAdjacentDates", 2);
__decorateClass([
  n({ type: Array })
], PCalendar.prototype, "selectedDates", 2);
__decorateClass([
  watch("month"),
  watch("year")
], PCalendar.prototype, "handleMonthChange", 1);

export {
  PCalendar
};
