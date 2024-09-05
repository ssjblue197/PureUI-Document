import {
  LocalizeController
} from "./chunk.BTMIVMQK.js";
import {
  PureElement,
  n
} from "./chunk.WZHWQGQL.js";
import {
  ke
} from "./chunk.XHSHLALN.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/format-date/format-date.component.ts
var PFormatDate = class extends PureElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.date = /* @__PURE__ */ new Date();
    this.hourFormat = "auto";
  }
  render() {
    const date = new Date(this.date);
    const hour12 = this.hourFormat === "auto" ? void 0 : this.hourFormat === "12";
    if (isNaN(date.getMilliseconds())) {
      return void 0;
    }
    return ke`
      <time datetime=${date.toISOString()}>
        ${this.localize.date(date, {
      weekday: this.weekday,
      era: this.era,
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      timeZoneName: this.timeZoneName,
      timeZone: this.timeZone,
      hour12
    })}
      </time>
    `;
  }
};
__decorateClass([
  n()
], PFormatDate.prototype, "date", 2);
__decorateClass([
  n()
], PFormatDate.prototype, "weekday", 2);
__decorateClass([
  n()
], PFormatDate.prototype, "era", 2);
__decorateClass([
  n()
], PFormatDate.prototype, "year", 2);
__decorateClass([
  n()
], PFormatDate.prototype, "month", 2);
__decorateClass([
  n()
], PFormatDate.prototype, "day", 2);
__decorateClass([
  n()
], PFormatDate.prototype, "hour", 2);
__decorateClass([
  n()
], PFormatDate.prototype, "minute", 2);
__decorateClass([
  n()
], PFormatDate.prototype, "second", 2);
__decorateClass([
  n({ attribute: "time-zone-name" })
], PFormatDate.prototype, "timeZoneName", 2);
__decorateClass([
  n({ attribute: "time-zone" })
], PFormatDate.prototype, "timeZone", 2);
__decorateClass([
  n({ attribute: "hour-format" })
], PFormatDate.prototype, "hourFormat", 2);

export {
  PFormatDate
};
