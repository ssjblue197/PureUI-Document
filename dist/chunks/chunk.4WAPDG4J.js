import {
  debounce
} from "./chunk.NOWCQZBS.js";
import {
  PTag
} from "./chunk.KT7PXUK6.js";
import {
  ae
} from "./chunk.6JBGXCYU.js";
import {
  PPopup
} from "./chunk.4QD2A73J.js";
import {
  defaultValue
} from "./chunk.PGG27OMY.js";
import {
  form_control_styles_default
} from "./chunk.NOMFDPO5.js";
import {
  FormControlController
} from "./chunk.SW6OGP3X.js";
import {
  calendar_styles_default
} from "./chunk.QYKZOPU7.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.F6XYW4W5.js";
import {
  waitForEvent
} from "./chunk.B4BZKR24.js";
import {
  animateTo,
  stopAnimations
} from "./chunk.S7GYYU7Z.js";
import {
  LocalizeController
} from "./chunk.BTMIVMQK.js";
import {
  HasSlotController
} from "./chunk.MLXUTV4G.js";
import {
  Rt
} from "./chunk.A56LY5J2.js";
import {
  PIcon
} from "./chunk.QJGUOIRM.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  e,
  n,
  r
} from "./chunk.BWFHTNIR.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
import {
  ke
} from "./chunk.XHSHLALN.js";
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
function getAllDayNames(locale = "en-GB", format = "long") {
  const formatter = new Intl.DateTimeFormat(locale, {
    weekday: format,
    timeZone: "UTC"
  });
  const days = [1, 2, 3, 4, 5, 6, 7].map((day) => {
    const dd = day < 10 ? `0${day}` : day;
    return /* @__PURE__ */ new Date(`2024-01-${dd}T00:00:00+00:00`);
  });
  return days.map((date) => formatter.format(date));
}
function getAllMonthNames(locale = "en-GB", format = "long") {
  const formatter = new Intl.DateTimeFormat(locale, {
    month: format,
    timeZone: "UTC"
  });
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => {
    const mm = month < 10 ? `0${month}` : month;
    return /* @__PURE__ */ new Date(`2024-${mm}-01T00:00:00+00:00`);
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
function getMonthName(date, locale = "en-GB", format = "long") {
  return getAllMonthNames(locale, format)[date.getMonth()];
}
function getDateLabelWithFormat(date, locale = "en-GB", format) {
  return new Intl.DateTimeFormat(locale, format).format(date);
}
function getDateDifferentFrom(date, days) {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1e3);
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

// node_modules/pure-date-format/dist/index.js
function padZero(num, length = 2) {
  return num.toString().padStart(length, "0");
}
function getLocalizedNames(locale) {
  const formatter = (options) => new Intl.DateTimeFormat(locale, options);
  const dayNames = Array.from({ length: 7 }, (_, i) => formatter({ weekday: "long" }).format(new Date(Date.UTC(2024, 1, i + 1))));
  const dayShortNames = Array.from({ length: 7 }, (_, i) => formatter({ weekday: "short" }).format(new Date(Date.UTC(2024, 1, i + 1))));
  const dayMinNames = Array.from({ length: 7 }, (_, i) => formatter({ weekday: "narrow" }).format(new Date(Date.UTC(2024, 1, i + 1))));
  const monthNames = Array.from({ length: 12 }, (_, i) => formatter({ month: "long" }).format(new Date(Date.UTC(2024, i, 1))));
  const monthShortNames = Array.from({ length: 12 }, (_, i) => formatter({ month: "short" }).format(new Date(Date.UTC(2024, i, 1))));
  return {
    dayNames,
    dayShortNames,
    dayMinNames,
    monthNames,
    monthShortNames
  };
}
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function tokenizeFormat(format) {
  const regex = /(\\.|YYYY|YY|MMMM|MMM|MM|M|DD|D|HH|H|hh|h|mm|m|ss|s|SSS|ZZ|Z|A|a|\[.*?\])/g;
  const tokens = [];
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(format)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({
        literal: true,
        value: format.slice(lastIndex, match.index)
      });
    }
    tokens.push({ literal: false, value: match[0] });
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < format.length) {
    tokens.push({
      literal: true,
      value: format.slice(lastIndex)
    });
  }
  return tokens;
}
function parseMatches(matches, tokens, localeData) {
  const { monthNames, monthShortNames } = localeData;
  let year = 1970;
  let month = 0;
  let day = 1;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;
  let isPM = false;
  let timezoneOffsetMinutes = null;
  let matchIndex = 1;
  tokens.forEach((token) => {
    if (token.literal) {
      return;
    }
    const value = matches[matchIndex++];
    switch (token.value) {
      case "YYYY":
        year = parseInt(value, 10);
        break;
      case "YY":
        year = 2e3 + parseInt(value, 10);
        break;
      case "MMMM":
        month = monthNames.indexOf(value);
        break;
      case "MMM":
        month = monthShortNames.indexOf(value);
        break;
      case "MM":
      case "M":
        month = parseInt(value, 10) - 1;
        break;
      case "DD":
      case "D":
        day = parseInt(value, 10);
        break;
      case "HH":
      case "H":
        hours = parseInt(value, 10);
        break;
      case "hh":
      case "h":
        hours = parseInt(value, 10);
        break;
      case "mm":
      case "m":
        minutes = parseInt(value, 10);
        break;
      case "ss":
      case "s":
        seconds = parseInt(value, 10);
        break;
      case "SSS":
        milliseconds = parseInt(value, 10);
        break;
      case "A":
      case "a":
        isPM = value.toLowerCase() === "pm";
        break;
      case "Z":
      case "ZZ":
        timezoneOffsetMinutes = parseTimezoneOffset(value);
        break;
    }
  });
  if (tokens.some((t) => t.value === "A" || t.value === "a")) {
    if (isPM && hours < 12) {
      hours += 12;
    }
    if (!isPM && hours === 12) {
      hours = 0;
    }
  }
  let date = new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));
  if (timezoneOffsetMinutes !== null) {
    date = new Date(date.getTime() - timezoneOffsetMinutes * 6e4);
  }
  return date;
}
function parseTimezoneOffset(value) {
  const sign = value[0] === "+" ? 1 : -1;
  let hours, minutes;
  if (value.includes(":")) {
    [hours, minutes] = value.slice(1).split(":").map(Number);
  } else {
    hours = Number(value.slice(1, 3));
    minutes = Number(value.slice(3, 5));
  }
  return sign * (hours * 60 + minutes);
}
function buildRegexPattern(tokens, localeData) {
  const { dayNames, dayShortNames, dayMinNames, monthNames, monthShortNames } = localeData;
  const tokenPatterns = {
    YYYY: "(\\d{4})",
    YY: "(\\d{2})",
    MMMM: "(" + monthNames.map(escapeRegex).join("|") + ")",
    MMM: "(" + monthShortNames.map(escapeRegex).join("|") + ")",
    MM: "(\\d{2})",
    M: "(\\d{1,2})",
    DD: "(\\d{2})",
    D: "(\\d{1,2})",
    dddd: "(" + dayNames.map(escapeRegex).join("|") + ")",
    ddd: "(" + dayShortNames.map(escapeRegex).join("|") + ")",
    dd: "(" + dayMinNames.map(escapeRegex).join("|") + ")",
    d: "(\\d{1})",
    HH: "(\\d{2})",
    H: "(\\d{1,2})",
    hh: "(\\d{2})",
    h: "(\\d{1,2})",
    mm: "(\\d{2})",
    m: "(\\d{1,2})",
    ss: "(\\d{2})",
    s: "(\\d{1,2})",
    SSS: "(\\d{3})",
    A: "(AM|PM)",
    a: "(am|pm)",
    Z: "([+-]\\d{2}:\\d{2})",
    ZZ: "([+-]\\d{4})"
  };
  let pattern = "";
  tokens.forEach((token) => {
    if (token.literal) {
      pattern += escapeRegex(token.value);
    } else if (tokenPatterns[token.value]) {
      pattern += tokenPatterns[token.value];
    } else {
      throw new Error(`Unknown token: ${token.value}`);
    }
  });
  return new RegExp("^" + pattern + "$", "i");
}
function index() {
  function from(date, format, locale = "en-US") {
    const { dayNames, dayShortNames, dayMinNames, monthNames, monthShortNames } = getLocalizedNames(locale);
    const day = date.getDate();
    const dayOfWeek = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    const timezoneOffset = -date.getTimezoneOffset();
    const isPM = hours >= 12;
    const hour12 = hours % 12 || 12;
    const tokens = {
      YY: padZero(year % 100),
      YYYY: year,
      M: month + 1,
      MM: padZero(month + 1),
      MMM: monthShortNames[month],
      MMMM: monthNames[month],
      D: day,
      DD: padZero(day),
      d: dayOfWeek,
      dd: dayMinNames[dayOfWeek],
      ddd: dayShortNames[dayOfWeek],
      dddd: dayNames[dayOfWeek],
      H: hours,
      HH: padZero(hours),
      h: hour12,
      hh: padZero(hour12),
      m: minutes,
      mm: padZero(minutes),
      s: seconds,
      ss: padZero(seconds),
      SSS: padZero(milliseconds, 3),
      Z: (timezoneOffset >= 0 ? "+" : "-") + padZero(Math.floor(Math.abs(timezoneOffset) / 60)) + ":" + padZero(Math.abs(timezoneOffset) % 60),
      ZZ: (timezoneOffset >= 0 ? "+" : "-") + padZero(Math.floor(Math.abs(timezoneOffset) / 60)) + padZero(Math.abs(timezoneOffset) % 60),
      A: isPM ? "PM" : "AM",
      a: isPM ? "pm" : "am"
    };
    return format.replace(/YYYY|YY|MMMM|MMM|MM|M|DDD|DD|D|dddd|ddd|dd|d|HH|H|hh|h|mm|m|ss|s|SSS|ZZ|Z|A|a/g, (match) => String(tokens[match]));
  }
  function to(dateString, format, locale = "en-US") {
    const localeData = getLocalizedNames(locale);
    const tokens = tokenizeFormat(format);
    const regex = buildRegexPattern(tokens, localeData);
    const matches = dateString.match(regex);
    if (!matches) {
      throw new Error("Date string does not match format");
    }
    return parseMatches(matches, tokens, localeData);
  }
  function isValid(dateString, format) {
    try {
      const dateObject = format ? this.to(dateString, format) : new Date(dateString);
      if (dateObject instanceof Date && !isNaN(dateObject.getTime())) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
  return { from, to, isValid };
}

// src/components/calendar/calendar.component.ts
var PCalendar = class extends PureElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      assumeInteractionOn: ["p-blur", "p-input", "p-select", "p-change"]
    });
    this.localize = new LocalizeController(this);
    this.hasSlotController = new HasSlotController(this, "prefix", "suffix");
    this.keyword = "";
    this.closeOnSelect = false;
    this.format = "";
    this.typing = true;
    this.hasFocus = false;
    this.displayLabel = "";
    this.currentOption = void 0;
    this.selectedOptions = [];
    this.name = "";
    this.temporalEndDate = void 0;
    this._value = [];
    this.defaultValue = /* @__PURE__ */ new Date();
    this.size = "medium";
    this.placeholder = "";
    this.maxOptionsVisible = 3;
    this.disabled = false;
    this.clearable = false;
    this.open = false;
    this.hoist = false;
    this.filled = false;
    this.pill = false;
    this.label = "";
    this.placement = "bottom";
    this.helpText = "";
    this.form = "";
    this.required = false;
    this.getTag = (option) => {
      return ke`
      <p-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @p-remove=${(event) => this.handleTagRemove(event, option)}
      >
        ${this.format ? index().from(option, this.format) : getDateLabelWithFormat(option)}
      </p-tag>
    `;
    };
    this.showToday = false;
    this.mode = "default";
    this.type = "single";
    this.autofocus = false;
    this.month = (/* @__PURE__ */ new Date()).getMonth() + 1;
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
    this.date = (/* @__PURE__ */ new Date()).getDate();
    this.dayLabels = "short";
    this.monthLabels = "long";
    this.showAdjacentDates = false;
    this.handleDocumentFocusIn = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      const target = event.target;
      const isClearButton = target.closest(".calendar__clear") !== null;
      const isIconButton = target.closest("p-icon-button") !== null;
      if (isClearButton || isIconButton) {
        return;
      }
      if (event.key === "Escape" && this.open && !this.closeWatcher) {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
        return;
      }
      if (event.key === "Enter") {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!this.open) {
          this.show();
          return;
        }
        if (this.keyword) {
          const isValid = index().isValid(this.keyword, this.format);
          if (!isValid) {
            return;
          } else {
            this.handleSelectDate({
              date: index().to(this.keyword, this.format),
              isToday: false,
              isWeekday: false,
              isWeekend: false,
              isCurrentMonth: false,
              isPreviousMonth: false,
              isNextMonth: false
            });
            return;
          }
        }
        if (this.currentOption && !this.disabled && this.open) {
          const allOptions = this.getAllOptions();
          const currentDayCalendar = this.currentOption && allOptions.find((option) => this.currentOption && isSameDay(option.date, this.currentOption));
          if (currentDayCalendar) {
            this.handleSelectDate(currentDayCalendar);
          }
          this.updateComplete.then(() => {
            this.emit("p-input");
            this.emit("p-change");
          });
        }
        return;
      }
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Tab"].includes(event.key)) {
        if (this.currentOption) {
          let newCurrentOption = void 0;
          switch (event.key) {
            case "ArrowUp":
              newCurrentOption = getDateDifferentFrom(this.currentOption, -7);
              break;
            case "ArrowDown":
              newCurrentOption = getDateDifferentFrom(this.currentOption, 7);
              break;
            case "ArrowLeft":
              newCurrentOption = getDateDifferentFrom(this.currentOption, -1);
              break;
            case "ArrowRight":
            case "Tab":
              newCurrentOption = getDateDifferentFrom(this.currentOption, 1);
              break;
            default:
              break;
          }
          if (newCurrentOption) {
            this.year = newCurrentOption.getFullYear();
            this.month = newCurrentOption.getMonth() + 1;
            this.date = newCurrentOption.getDate();
            this.setCurrentOption(newCurrentOption);
          }
          event.preventDefault();
          return;
        }
      }
      if (event.key === "Backspace") {
        if (!this.open && this.hasFocus) {
          this.show();
        }
        event.stopPropagation();
        if (this.type === "multiple" && this.keyword === "" && this.selectedOptions.length > 0) {
          this.handleTagRemove(new CustomEvent("p-remove"), this.selectedOptions[this.selectedOptions.length - 1]);
        }
        return;
      }
      if (event.key.length === 1) {
        if (!this.open && this.hasFocus) {
          this.show();
        }
      }
    };
    this.handleDocumentMouseDown = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
  }
  get value() {
    if (Array.isArray(this._value)) {
      return this._value.map((v) => {
        if (v instanceof Date) {
          return this.format ? index().from(v, this.format) : v;
        } else {
          return this.format ? v : new Date(v);
        }
      });
    } else {
      return this._value instanceof Date ? index().from(this._value, this.format) : this._value;
    }
  }
  set value(value) {
    if (Array.isArray(value)) {
      this._value = value.map((v) => {
        if (typeof v === "string") {
          return this.format ? index().to(v, this.format) : new Date(v);
        } else {
          return v;
        }
      });
    } else {
      if (typeof value === "string") {
        this._value = this.format ? index().to(value, this.format) : new Date(value);
      } else {
        this._value = value;
      }
    }
  }
  /** Gets the validity state object */
  get validity() {
    return this.valueInput.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback();
    this.open = false;
    this.placeholder = this.type === "range" ? `${this.format} - ${this.format}` : this.format;
    if (Array.isArray(this.value)) {
      this._value = this.value.map((v) => {
        if (typeof v === "string") {
          return this.format ? index().to(v, this.format) : new Date(v);
        } else {
          return v;
        }
      });
    } else {
      if (typeof this.value === "string") {
        this._value = this.format ? index().to(this.value, this.format) : new Date(this.value);
      } else {
        this._value = this.value;
      }
    }
  }
  firstUpdated() {
    if (Array.isArray(this._value)) {
      this.selectedOptions = this._value;
      if (this.type === "range") {
        this.keyword = "";
        if (this.selectedOptions.length === 1) {
          this.keyword = `${this.format ? index().from(this.selectedOptions[0], this.format) : getDateLabelWithFormat(this.selectedOptions[0])} - `;
        } else if (this.selectedOptions.length === 2) {
          this.keyword = this.format ? `${index().from(this.selectedOptions[0], this.format)} - ${index().from(this.selectedOptions[1], this.format)}` : `${getDateLabelWithFormat(this.selectedOptions[0])} - ${getDateLabelWithFormat(this.selectedOptions[1])}`;
        }
        this.displayLabel = this.keyword;
      }
    } else {
      this.selectedOptions = this._value ? [this._value] : [];
      this.keyword = this.format ? index().from(this.selectedOptions[0], this.format) : getDateLabelWithFormat(this.selectedOptions[0]);
      this.displayLabel = this.keyword;
    }
  }
  addOpenListeners() {
    var _a;
    document.addEventListener("focusin", this.handleDocumentFocusIn);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
    if (this.getRootNode() !== document) {
      this.getRootNode().addEventListener("focusin", this.handleDocumentFocusIn);
    }
    if ("CloseWatcher" in window) {
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
      this.closeWatcher = new CloseWatcher();
      this.closeWatcher.onclose = () => {
        if (this.open) {
          this.hide();
          if (!document.activeElement || document.activeElement !== this.displayInput) {
            this.displayInput.focus({ preventScroll: true });
          }
        }
      };
    }
  }
  removeOpenListeners() {
    var _a;
    document.removeEventListener("focusin", this.handleDocumentFocusIn);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    if (this.getRootNode() !== document) {
      this.getRootNode().removeEventListener("focusin", this.handleDocumentFocusIn);
    }
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("p-focus");
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("p-blur");
  }
  handleInput() {
    this.keyword = this.displayInput.value;
    if (document.activeElement !== this.displayInput) {
      this.displayInput.focus({ preventScroll: true });
    }
    this.emit("p-input");
  }
  handleLabelClick() {
    var _a;
    if (!document.activeElement || document.activeElement !== this.displayInput) {
      (_a = this.displayInput) == null ? void 0 : _a.focus();
    }
  }
  handleComboboxMouseDown(event) {
    const path = event.composedPath();
    const isIconButton = path.some((el) => el instanceof Element && el.tagName.toLowerCase() === "p-icon-button");
    if (this.disabled || isIconButton) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.open = !this.open;
  }
  handleComboboxKeyDown(event) {
    event.stopPropagation();
    this.handleDocumentKeyDown(event);
  }
  handleClearClick(event) {
    event.stopPropagation();
    if (String(this._value) !== "") {
      this.displayInput.blur();
      this._value = [];
      this.setSelectedOptions([]);
      this.displayLabel = "";
      this.keyword = "";
      this.updateComplete.then(() => {
        this.emit("p-clear");
        this.emit("p-input");
        this.emit("p-change");
      });
    }
  }
  handleClearMouseDown(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  checkIsDuplicateDate(day) {
    if (!Array.isArray(this._value))
      return false;
    return this._value.some((d) => isSameDay(d, day.date));
  }
  handleSetTemporaryEndDate(day) {
    if (Array.isArray(this._value) && this._value.length === 1 && this.type === "range") {
      this.temporalEndDate = day.date;
    }
  }
  handleSelectDate(day) {
    const oldValue = structuredClone(this._value);
    switch (this.type) {
      case "single":
        this._value = day.date;
        if (this.closeOnSelect) {
          this.hide();
        }
        this.setSelectedOptions([this._value]);
        break;
      case "multiple":
        if (Array.isArray(this._value)) {
          if (this.checkIsDuplicateDate(day)) {
            this._value = this._value.filter((d) => !isSameDay(d, day.date));
          } else {
            this._value = [...this._value, day.date];
          }
          this.setSelectedOptions(this._value);
        }
        break;
      case "range":
        if (Array.isArray(this._value)) {
          if (this._value.length === 2) {
            this.temporalEndDate = void 0;
            this._value = [day.date];
          } else if (this._value.length === 1) {
            this._value = this._value[0] >= day.date ? [day.date, this._value[0]] : [this._value[0], day.date];
            this.temporalEndDate = void 0;
            if (this.closeOnSelect) {
              this.hide();
            }
          } else {
            this._value = [day.date];
          }
          this.setSelectedOptions(this._value);
        }
        break;
      default:
        break;
    }
    this.updateComplete.then(() => {
      if (this.mode === "default") {
        this.displayInput.focus({ preventScroll: true });
      }
    });
    if (this._value !== oldValue) {
      this.updateComplete.then(() => {
        this.emit("p-input");
        this.emit("p-change");
      });
    }
  }
  handleTagRemove(event, option) {
    event.stopPropagation();
    if (!this.disabled) {
      this.setSelectedOptions(this.selectedOptions.filter((d) => !isSameDay(d, option)));
      this._value = structuredClone(this.selectedOptions);
      this.updateComplete.then(() => {
        this.emit("p-input");
        this.emit("p-change");
      });
    }
  }
  // Gets an array of all <p-option> elements
  getAllOptions() {
    return [...generateCalendarGrid(this.year, this.month)];
  }
  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  setCurrentOption(option) {
    if (option) {
      this.currentOption = option;
    }
  }
  // Sets the selected option(s)
  setSelectedOptions(options) {
    this.selectedOptions = options;
    this.selectionChanged();
  }
  // This method must be called whenever the selection changes. It will update the selected date cache, the current
  // value, and the display value
  selectionChanged() {
    switch (this.type) {
      case "single":
        this.keyword = "";
        this.displayLabel = this.format ? index().from(this.selectedOptions[0], this.format) : getDateLabelWithFormat(this.selectedOptions[0]);
        this._value = structuredClone(this.selectedOptions[0]);
        break;
      case "range":
        this.keyword = "";
        if (this.selectedOptions.length === 1) {
          this.keyword = `${this.format ? index().from(this.selectedOptions[0], this.format) : getDateLabelWithFormat(this.selectedOptions[0])} - `;
        } else if (this.selectedOptions.length === 2) {
          this.keyword = this.format ? `${index().from(this.selectedOptions[0], this.format)} - ${index().from(this.selectedOptions[1], this.format)}` : `${getDateLabelWithFormat(this.selectedOptions[0])} - ${getDateLabelWithFormat(this.selectedOptions[1])}`;
        }
        this.displayLabel = this.keyword;
        this._value = structuredClone(this.selectedOptions);
        break;
      case "multiple":
        this.placeholder = this.format ? this.format : "MM/DD/YYYY";
        this._value = structuredClone(this.selectedOptions);
        break;
      default:
        break;
    }
    if (Array.isArray(this._value) && this._value.length > 0) {
      this.year = this._value[this._value.length - 1].getFullYear();
      this.month = this._value[this._value.length - 1].getMonth() + 1;
    } else if (this._value instanceof Date) {
      this.year = this._value.getFullYear();
      this.month = this._value.getMonth() + 1;
    }
    this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  get tags() {
    return this.selectedOptions.map((option, index2) => {
      if (index2 < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const tag = this.getTag(option, index2);
        return ke`<div @p-remove=${(e2) => this.handleTagRemove(e2, option)}>
          ${typeof tag === "string" ? ae(tag) : tag}
        </div>`;
      } else if (index2 === this.maxOptionsVisible) {
        return ke`
          <p-dropdown placement="top" behavior="hover">
            <p-tag slot="trigger" size=${this.size}>+${this.selectedOptions.length - index2}</p-tag>
            <div class="calendar__tags--overflow" @click=${(e2) => e2.stopPropagation()}>
              ${this.selectedOptions.slice(this.maxOptionsVisible).map((other, idx) => {
          const otherTag = this.getTag(other, this.maxOptionsVisible + idx);
          return ke`<div
                  @p-remove=${(e2) => {
            console.log("handleTagRemove", e2);
          }}
                >
                  ${typeof otherTag === "string" ? ae(otherTag) : otherTag}
                </div>`;
        })}
            </div>
          </p-dropdown>
        `;
      }
      return ke``;
    });
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleDisabledChange() {
    if (this.mode === "inline") {
      return;
    }
    if (this.disabled) {
      this.open = false;
      this.handleOpenChange();
    }
  }
  handleValueChange() {
  }
  async handleOpenChange() {
    if (this.mode === "inline") {
      return;
    }
    if (this.open && !this.disabled) {
      this.emit("p-show");
      this.addOpenListeners();
      await stopAnimations(this);
      this.calendar.hidden = false;
      this.popup.active = true;
      requestAnimationFrame(() => {
        var _a, _b;
        const allOptions = this.getAllOptions();
        if (this.showAdjacentDates) {
          this.setCurrentOption((_a = allOptions == null ? void 0 : allOptions[0]) == null ? void 0 : _a.date);
        } else {
          const firstDateInMonth = (_b = allOptions.find((option) => option.date.getMonth() + 1 === this.month)) == null ? void 0 : _b.date;
          this.setCurrentOption(firstDateInMonth);
        }
      });
      const { keyframes, options } = getAnimation(this, "calendar.show", {
        dir: this.localize.dir()
      });
      await animateTo(this.popup.popup, keyframes, options);
      this.emit("p-after-show");
      if (this.typing) {
        if (this.selectedOptions.length > 0) {
          this.placeholder = this.type === "range" ? `${this.format ? `${this.format} - ${this.format}` : "MM/DD/YYYY - MM/DD/YYYY"}` : this.format || "MM/DD/YYYY";
        }
      }
      if (!document.activeElement || document.activeElement !== this.displayInput) {
        this.displayInput.focus({ preventScroll: true });
      }
    } else {
      this.emit("p-hide");
      this.removeOpenListeners();
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "calendar.hide", {
        dir: this.localize.dir()
      });
      await animateTo(this.popup.popup, keyframes, options);
      this.calendar.hidden = true;
      this.popup.active = false;
      this.emit("p-after-hide");
      this.keyword = "";
    }
  }
  /** Shows the calendar. */
  async show() {
    if (this.open || this.disabled) {
      this.open = false;
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "p-after-show");
  }
  /** Hides the calendar. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = false;
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "p-after-hide");
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.valueInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  /** Sets focus on the control. */
  focus(options) {
    this.displayInput.focus(options);
  }
  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }
  /** Moves the calendar to the current month and year. */
  goToToday() {
    this.month = (/* @__PURE__ */ new Date()).getMonth() + 1;
    this.year = (/* @__PURE__ */ new Date()).getFullYear();
    this.date = (/* @__PURE__ */ new Date()).getDate();
  }
  /** Moves the calendar to the previous month. */
  goToPreviousMonth(event) {
    if (this.month === 1) {
      this.month = 12;
      this.year--;
    } else {
      this.month--;
    }
    event == null ? void 0 : event.stopPropagation();
    event == null ? void 0 : event.preventDefault();
  }
  /** Moves the calendar to the next month. */
  goToNextMonth(event) {
    if (this.month === 12) {
      this.month = 1;
      this.year++;
    } else {
      this.month++;
    }
    event == null ? void 0 : event.stopPropagation();
    event == null ? void 0 : event.preventDefault();
  }
  /** Moves the calendar to the previous year. */
  goToPreviousYear(event) {
    if (this.year <= 1970)
      return;
    this.year--;
    event == null ? void 0 : event.stopPropagation();
    event == null ? void 0 : event.preventDefault();
  }
  /** Moves the calendar to the next year. */
  goToNextYear(event) {
    this.year++;
    event == null ? void 0 : event.stopPropagation();
    event == null ? void 0 : event.preventDefault();
  }
  handleMonthChange() {
    this.emit("p-change");
  }
  render() {
    var _a;
    if (this.month < 1 || this.month > 12) {
      throw new Error(`The value "${this.month}" is not a valid month.`);
    }
    const lang = this.lang || document.documentElement.lang;
    const month = new Date(this.year, this.month - 1, 1);
    const dayGrid = generateCalendarGrid(this.year, this.month);
    const dayNames = getAllDayNames(lang, this.dayLabels);
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon = this.clearable && !this.disabled && (Array.isArray(this._value) && this._value.length > 0 || !Array.isArray(this._value) && this._value);
    const isPlaceholderVisible = this.placeholder && (Array.isArray(this._value) && this._value.length === 0 || !Array.isArray(this._value) && !this._value);
    const calendarInline = ke`
      <div
        id="calendar"
        part="calendar"
        role="listbox"
        class=${Rt({
      "calendar--dialog": true,
      "calendar--has-footer": this.hasSlotController.test("footer"),
      "calendar--show-adjacent-dates": this.showAdjacentDates,
      "calendar--dialog-inline": this.mode === "inline"
    })}
        aria-expanded=${this.open ? "true" : "false"}
        aria-multiselectable=${this.type === "multiple" ? "true" : "false"}
        aria-labelledby="label"
        tabindex="-1"
      >
        <header class="calendar__header">
          <p-button
            variant="default"
            size="small"
            @click=${this.goToPreviousYear}
            class=${Rt({
      "calendar__header-button": true,
      "calendar__header-button--disabled": this.disabled
    })}
          >
            <p-icon-button name="chevron-double-left" label=${this.localize.term("previousMonth")}></p-icon-button>
          </p-button>
          <p-button
            variant="default"
            size="small"
            @click=${this.goToPreviousMonth}
            class=${Rt({
      "calendar__header-button": true,
      "calendar__header-button--disabled": this.disabled
    })}
          >
            <p-icon-button name="chevron-left" label=${this.localize.term("previousMonth")}></p-icon-button>
          </p-button>

          <slot name="header-prefix"></slot>

          <span class="calendar__label">
            <span class="calendar__month-label">${getMonthName(month, lang, this.monthLabels)}</span>
            <span class="calendar__year-label">${month.getFullYear()}</span>
          </span>

          <slot name="suffix-prefix"></slot>

          <p-button
            variant="default"
            size="small"
            @click=${this.goToNextMonth}
            class=${Rt({
      "calendar__header-button": true,
      "calendar__header-button--disabled": this.disabled
    })}
          >
            <p-icon-button name="chevron-right" label=${this.localize.term("nextMonth")}></p-icon-button>
          </p-button>
          <p-button
            variant="default"
            size="small"
            @click=${this.goToNextYear}
            class=${Rt({
      "calendar__header-button": true,
      "calendar__header-button--disabled": this.disabled
    })}
          >
            <p-icon-button name="chevron-double-right" label=${this.localize.term("nextMonth")}></p-icon-button>
          </p-button>
        </header>

        <div class="calendar__days">
          ${[0, 1, 2, 3, 4, 5, 6].map((day) => {
      return ke`
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
          ${dayGrid.map((day) => {
      if (day.isCurrentMonth || this.showAdjacentDates) {
        let isSelected = false;
        let isSelectionStart = false;
        let isSelectionEnd = false;
        let isSelectedInRange = false;
        const isCurrentSelect = this.currentOption ? isSameDay(this.currentOption, day.date) : false;
        switch (this.type) {
          case "single":
            isSelected = this._value && !Array.isArray(this._value) && isSameDay(this._value, day.date);
            break;
          case "multiple":
            isSelected = Array.isArray(this._value) ? this._value.some((d) => isSameDay(d, day.date)) : false;
            break;
          case "range":
            if (Array.isArray(this._value) && this._value.length > 0) {
              isSelected = this._value.some((d) => isSameDay(d, day.date));
              if (this._value.length === 2) {
                isSelectedInRange = day.date > this._value[0] && day.date < this._value[1];
              }
              if (this._value.length === 1) {
                isSelectedInRange = this.temporalEndDate ? day.date > this._value[0] && day.date < this.temporalEndDate || day.date < this._value[0] && day.date > this.temporalEndDate : false;
              }
              isSelectionStart = isSameDay(this._value[0], day.date);
              isSelectionEnd = isSameDay(this._value[this._value.length - 1], day.date);
            }
            break;
          default:
            break;
        }
        return ke`
                <button
                  type="button"
                  part=${partMap({
          day: true,
          "day-current-focus": isCurrentSelect,
          "day-current-month": day.isCurrentMonth,
          "day-previous-month": day.isPreviousMonth,
          "day-next-month": day.isNextMonth,
          "day-today": day.isToday,
          "day-weekday": day.isWeekday,
          "day-weekend": day.isWeekend,
          "day-selected": isSelected,
          "day-selected-in-range": isSelectedInRange,
          "day-selection-start": isSelectionStart,
          "day-selection-end": isSelectionEnd
        })}
                  class="calendar__day"
                  @mouseup=${() => this.handleSelectDate(day)}
                  @mouseenter=${() => this.handleSetTemporaryEndDate(day)}
                >
                  ${day.date.getDate()}
                </button>
              `;
      }
      return ke` <div class="calendar__day calendar__day--empty"></div> `;
    })}
        </div>

        <footer class="calendar__footer">
          ${this.showToday ? ke`
                <p-button
                  @click=${this.goToToday}
                  variant="primary"
                  size="small"
                  class=${Rt({
      "calendar__today-button": true,
      "calendar__today-button--disabled": this.disabled
    })}
                  >${this.localize.term("today")}
                </p-button>
              ` : null}
          <slot name="footer"></slot>
        </footer>
      </div>
    `;
    return ke`
      <div
        part="form-control"
        class=${Rt({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          ${this.mode === "inline" ? ke`<div style="display: contents">
                ${calendarInline}
                <input
                  class="calendar__value-input"
                  type="text"
                  ?disabled=${this.disabled}
                  ?required=${this.required}
                  .value=${Array.isArray(this._value) ? this._value.join(", ") : this._value.toLocaleDateString()}
                  tabindex="-1"
                  aria-hidden="true"
                  @focus=${() => this.focus()}
                  @invalid=${this.handleInvalid}
                />
              </div>` : ke`
                <p-popup
                  class=${Rt({
      calendar: true,
      "calendar--standard": true,
      "calendar--filled": this.filled,
      "calendar--pill": this.pill,
      "calendar--open": this.open,
      "calendar--disabled": this.disabled,
      "calendar--multiple": this.type === "multiple",
      "calendar--focused": this.hasFocus,
      "calendar--placeholder-visible": isPlaceholderVisible,
      "calendar--top": this.placement === "top",
      "calendar--bottom": this.placement === "bottom",
      "calendar--small": this.size === "small",
      "calendar--medium": this.size === "medium",
      "calendar--large": this.size === "large"
    })}
                  placement=${this.placement}
                  strategy=${this.hoist ? "fixed" : "absolute"}
                  flip
                  shift
                  sync="width"
                  auto-size="vertical"
                  auto-size-padding="10"
                >
                  <div
                    part="combobox"
                    class="calendar__combobox"
                    slot="anchor"
                    @keydown=${this.handleComboboxKeyDown}
                    @mousedown=${this.handleComboboxMouseDown}
                  >
                    <slot part="prefix" name="prefix" class="calendar__prefix">
                      <span class="calendar__icon">
                        ${this.type === "multiple" ? ke`<p-icon name="calendar-week"></p-icon>` : this.type === "range" ? ke`<p-icon name="calendar-range"></p-icon>` : ke`<p-icon name="calendar-day"></p-icon>`}
                      </span>
                    </slot>

                    ${this.type === "multiple" ? ke`<div part="tags" class="calendar__tags">${this.tags}</div>` : ""}

                    <input
                      part="display-input"
                      class="calendar__display-input"
                      type="text"
                      placeholder=${this.placeholder}
                      .disabled=${this.disabled}
                      .value=${this.hasFocus ? this.keyword : this.displayLabel}
                      autocomplete="off"
                      spellcheck="false"
                      autocapitalize="off"
                      aria-controls="calendar"
                      aria-expanded=${this.open ? "true" : "false"}
                      aria-haspopup="dialog"
                      aria-labelledby="label"
                      aria-disabled=${this.disabled ? "true" : "false"}
                      aria-describedby="help-text"
                      ?readonly=${!this.typing}
                      role="combobox"
                      tabindex="0"
                      @focus=${this.handleFocus}
                      @blur=${this.handleBlur}
                      @input=${this.handleInput}
                    />

                    <input
                      class="calendar__value-input"
                      type="text"
                      ?disabled=${this.disabled}
                      ?required=${this.required}
                      .value=${Array.isArray(this._value) ? this._value.join(", ") : (_a = this._value) == null ? void 0 : _a.toLocaleDateString()}
                      tabindex="-1"
                      aria-hidden="true"
                      @focus=${() => this.focus()}
                      @invalid=${this.handleInvalid}
                    />

                    ${hasClearIcon ? ke`
                          <button
                            part="clear-button"
                            class="calendar__clear"
                            type="button"
                            aria-label=${this.localize.term("clearEntry")}
                            @mousedown=${this.handleClearMouseDown}
                            @click=${this.handleClearClick}
                            tabindex="-1"
                          >
                            <slot name="clear-icon">
                              <p-icon name="x-circle-fill" library="system"></p-icon>
                            </slot>
                          </button>
                        ` : ""}

                    <slot name="suffix" part="suffix" class="calendar__suffix"></slot>
                  </div>

                  ${calendarInline}
                </p-popup>
              `}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
PCalendar.styles = [component_styles_default, form_control_styles_default, calendar_styles_default];
PCalendar.dependencies = {
  "p-icon": PIcon,
  "p-popup": PPopup,
  "p-tag": PTag
};
__decorateClass([
  e(".calendar")
], PCalendar.prototype, "popup", 2);
__decorateClass([
  e(".calendar__combobox")
], PCalendar.prototype, "combobox", 2);
__decorateClass([
  e(".calendar__display-input")
], PCalendar.prototype, "displayInput", 2);
__decorateClass([
  e(".calendar__value-input")
], PCalendar.prototype, "valueInput", 2);
__decorateClass([
  e(".calendar--dialog")
], PCalendar.prototype, "calendar", 2);
__decorateClass([
  n({ type: Boolean, attribute: "close-on-select", reflect: false })
], PCalendar.prototype, "closeOnSelect", 2);
__decorateClass([
  n({ reflect: true })
], PCalendar.prototype, "format", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PCalendar.prototype, "typing", 2);
__decorateClass([
  r()
], PCalendar.prototype, "hasFocus", 2);
__decorateClass([
  r()
], PCalendar.prototype, "displayLabel", 2);
__decorateClass([
  r()
], PCalendar.prototype, "currentOption", 2);
__decorateClass([
  r()
], PCalendar.prototype, "selectedOptions", 2);
__decorateClass([
  n()
], PCalendar.prototype, "name", 2);
__decorateClass([
  n({ reflect: true, attribute: false })
], PCalendar.prototype, "temporalEndDate", 2);
__decorateClass([
  n({ type: Array })
], PCalendar.prototype, "_value", 2);
__decorateClass([
  defaultValue()
], PCalendar.prototype, "defaultValue", 2);
__decorateClass([
  n({ reflect: true })
], PCalendar.prototype, "size", 2);
__decorateClass([
  n()
], PCalendar.prototype, "placeholder", 2);
__decorateClass([
  n({ attribute: "max-options-visible", type: Number })
], PCalendar.prototype, "maxOptionsVisible", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PCalendar.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean })
], PCalendar.prototype, "clearable", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PCalendar.prototype, "open", 2);
__decorateClass([
  n({ type: Boolean })
], PCalendar.prototype, "hoist", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PCalendar.prototype, "filled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PCalendar.prototype, "pill", 2);
__decorateClass([
  n()
], PCalendar.prototype, "label", 2);
__decorateClass([
  n({ reflect: true })
], PCalendar.prototype, "placement", 2);
__decorateClass([
  n({ attribute: "help-text" })
], PCalendar.prototype, "helpText", 2);
__decorateClass([
  n({ reflect: true })
], PCalendar.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PCalendar.prototype, "required", 2);
__decorateClass([
  n()
], PCalendar.prototype, "getTag", 2);
__decorateClass([
  n({ type: Boolean, reflect: true, attribute: "show-today" })
], PCalendar.prototype, "showToday", 2);
__decorateClass([
  n({ reflect: true })
], PCalendar.prototype, "mode", 2);
__decorateClass([
  n({ reflect: true })
], PCalendar.prototype, "type", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PCalendar.prototype, "autofocus", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], PCalendar.prototype, "month", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], PCalendar.prototype, "year", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], PCalendar.prototype, "date", 2);
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
  debounce(100)
], PCalendar.prototype, "handleInput", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], PCalendar.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], PCalendar.prototype, "handleValueChange", 1);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], PCalendar.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("month"),
  watch("year")
], PCalendar.prototype, "handleMonthChange", 1);
setDefaultAnimation("calendar.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
setDefaultAnimation("calendar.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});

export {
  PCalendar
};
