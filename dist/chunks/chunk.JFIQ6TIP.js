import {
  getNestedValue
} from "./chunk.36U7VCWI.js";
import {
  table_styles_default
} from "./chunk.A7QIROPF.js";
import {
  PPaginate
} from "./chunk.CP2GN4OS.js";
import {
  se
} from "./chunk.VA36342L.js";
import {
  Rt
} from "./chunk.A56LY5J2.js";
import {
  watch
} from "./chunk.FA5RT4K4.js";
import {
  PureElement,
  e,
  n,
  r
} from "./chunk.ZOLM25O6.js";
import {
  component_styles_default
} from "./chunk.DNSDK7ZG.js";
import {
  ke
} from "./chunk.XHSHLALN.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/table/table.component.ts
var PTable = class extends PureElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.options = {
      columns: [],
      data: []
    };
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalItems = 0;
    this.handleEventDispatch = (e2) => {
      const path = e2.composedPath();
      const closestRow = path.find((element) => {
        var _a;
        return (_a = element == null ? void 0 : element.classList) == null ? void 0 : _a.contains("table-row");
      });
      if (closestRow) {
        const rowElement = closestRow;
        const rowValue = rowElement == null ? void 0 : rowElement["data-row"];
        this.dispatchEvent(new CustomEvent(e2.type, { detail: rowValue, bubbles: true, composed: true }));
      }
    };
  }
  // Computed property using a getter
  /**
   * Returns the current page of items based on the current page, page size, and total items.
   * If the table is not local paginated, all items are returned.
   *
   * @returns {Array} The current page of items.
   */
  get currentItems() {
    var _a;
    if (!((_a = this.options) == null ? void 0 : _a.paginate))
      return this.options.data;
    if (this.totalItems === 0)
      return [];
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.options.data.slice(start, end);
  }
  handleApplyOptionsChange() {
    this.totalItems = this.options.data.length;
  }
  connectedCallback() {
    super.connectedCallback();
  }
  firstUpdated() {
    this.tableWrapper.addEventListener("click", this.handleEventDispatch.bind(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.tableWrapper.removeEventListener("click", this.handleEventDispatch.bind(this));
  }
  handleChangePage(e2) {
    const page = Number(e2.detail.page);
    this.currentPage = page;
  }
  render() {
    var _a, _b, _c;
    return ke` <div
      class=${Rt({
      "table-wrapper": true
    })}
    >
      <div
        class=${Rt({
      table: true
    })}
        style="grid-template-columns: repeat(${this.options.columns.length}, auto);"
      >
        <div
          class=${Rt({
      "table-header": true,
      "table-header--hidden": !!((_a = this.options) == null ? void 0 : _a.hideHeader)
    })}
        >
          ${this.options.columns.map(
      (i) => ke`
              <div
                class=${Rt({
        "table-cell": true
      })}
                style=${se({
        width: (i == null ? void 0 : i.width) || "auto",
        minWidth: (i == null ? void 0 : i.minWidth) || "auto",
        maxWidth: (i == null ? void 0 : i.maxWidth) || "unset",
        display: (i == null ? void 0 : i.hide) ? "none" : "flex",
        alignItems: (i == null ? void 0 : i.alignItems) || "center",
        justifyContent: (i == null ? void 0 : i.justifyContent) || "flex-start",
        textOverflow: (i == null ? void 0 : i.truncate) ? "ellipsis" : "unset",
        whiteSpace: (i == null ? void 0 : i.truncate) ? "nowrap" : "unset",
        overflow: (i == null ? void 0 : i.truncate) ? "hidden" : "unset",
        position: (i == null ? void 0 : i.sticky) ? "sticky" : "relative",
        left: (i == null ? void 0 : i.sticky) === "start" ? `${(i == null ? void 0 : i.stickyOffset) || 0}px` : "unset",
        right: (i == null ? void 0 : i.sticky) === "end" ? `${(i == null ? void 0 : i.stickyOffset) || 0}px` : "unset",
        borderLeft: (i == null ? void 0 : i.sticky) === "end" ? "1px solid var(--p-color-gray-200)" : "",
        borderRight: (i == null ? void 0 : i.sticky) === "start" ? "1px solid var(--p-color-gray-200)" : ""
      })}
              >
                ${i == null ? void 0 : i.headerName}
              </div>
            `
    )}
        </div>
        <div
          class=${Rt({
      "table-body": true
    })}
        >
          ${this.currentItems.map(
      (i) => ke`
              <div
                class=${Rt({
        "table-row": true
      })}
                .data-row=${i}
              >
                ${this.options.columns.map(
        (k) => ke`
                    <div
                      class=${Rt({
          "table-cell": true,
          [String(k.classes)]: k.classes || false
        })}
                      style=${se({
          width: (k == null ? void 0 : k.width) || "auto",
          minWidth: (k == null ? void 0 : k.minWidth) || "auto",
          maxWidth: (k == null ? void 0 : k.maxWidth) || "unset",
          display: (k == null ? void 0 : k.hide) ? "none" : "flex",
          alignItems: (k == null ? void 0 : k.alignItems) || "center",
          justifyContent: (k == null ? void 0 : k.justifyContent) || "flex-start",
          textOverflow: (k == null ? void 0 : k.truncate) ? "ellipsis" : "unset",
          whiteSpace: (k == null ? void 0 : k.truncate) ? "nowrap" : "unset",
          overflow: (k == null ? void 0 : k.truncate) ? "hidden" : "unset",
          position: (k == null ? void 0 : k.sticky) ? "sticky" : "relative",
          left: (k == null ? void 0 : k.sticky) === "start" ? `${(k == null ? void 0 : k.stickyOffset) || 0}px` : "unset",
          right: (k == null ? void 0 : k.sticky) === "end" ? `${(k == null ? void 0 : k.stickyOffset) || 0}px` : "unset",
          borderLeft: (k == null ? void 0 : k.sticky) === "end" ? "1px solid var(--p-color-gray-200)" : "",
          borderRight: (k == null ? void 0 : k.sticky) === "start" ? "1px solid var(--p-color-gray-200)" : ""
        })}
                    >
                      ${k.render ? k.render(i) : k.field ? ke` <span>${getNestedValue(i, k.field)}</span> ` : ""}
                    </div>
                  `
      )}
              </div>
            `
    )}
        </div>
      </div>
      <div
        class=${Rt({
      "table-footer": true,
      "table-footer--hidden": !!((_b = this.options) == null ? void 0 : _b.hideFooter)
    })}
      >
        <slot name="paginate">
          ${((_c = this.options) == null ? void 0 : _c.paginate) ? ke`
                <p-paginate
                  size="small"
                  variant="default"
                  total=${this.totalItems}
                  page=${this.currentPage}
                  pageSize=${this.pageSize}
                  @p-change=${this.handleChangePage}
                ></p-paginate>
              ` : ""}
        </slot>
      </div>
    </div>`;
  }
};
PTable.styles = [component_styles_default, table_styles_default];
PTable.dependencies = {
  "p-paginate": PPaginate
};
__decorateClass([
  n({ type: Boolean, reflect: true })
], PTable.prototype, "disabled", 2);
__decorateClass([
  n({ type: Object })
], PTable.prototype, "options", 2);
__decorateClass([
  r()
], PTable.prototype, "currentPage", 2);
__decorateClass([
  r()
], PTable.prototype, "pageSize", 2);
__decorateClass([
  r()
], PTable.prototype, "totalItems", 2);
__decorateClass([
  e(".table-wrapper")
], PTable.prototype, "tableWrapper", 2);
__decorateClass([
  watch("options")
], PTable.prototype, "handleApplyOptionsChange", 1);

export {
  PTable
};
