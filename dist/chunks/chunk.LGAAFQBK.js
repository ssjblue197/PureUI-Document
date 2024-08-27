import {
  paginate_styles_default
} from "./chunk.56IZJ46V.js";
import {
  n as n2
} from "./chunk.RFSUAAU5.js";
import {
  LocalizeController
} from "./chunk.55R7PUQN.js";
import {
  e
} from "./chunk.CEXDE6O2.js";
import {
  PIcon
} from "./chunk.6L3KVNW6.js";
import {
  PureElement,
  n
} from "./chunk.6XQUAQ6V.js";
import {
  component_styles_default
} from "./chunk.4LEQW7ML.js";
import {
  __decorateClass
} from "./chunk.KIILAQWQ.js";

// src/components/paginate/paginate.component.ts
var PPaginate = class extends PureElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.title = "";
    this.variant = "default";
    this.size = "medium";
    this.disabled = false;
    this.pill = false;
    this.total = 119;
    this.page = 1;
    this.limit = 12;
    this.maxVisiblePages = 3;
  }
  getPages() {
    const totalPages = Math.ceil(this.total / this.limit);
    let pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const page = this.page;
    if (pages.length > this.maxVisiblePages) {
      if (page <= Math.floor(this.maxVisiblePages / 2)) {
        pages = [...pages.slice(0, this.maxVisiblePages), "..."];
      } else if (page >= totalPages - Math.floor(this.maxVisiblePages / 2)) {
        pages = ["...", ...pages.slice(totalPages - this.maxVisiblePages)];
      } else {
        pages = [
          "...",
          ...pages.slice(page - Math.ceil(this.maxVisiblePages / 2), page + Math.floor(this.maxVisiblePages / 2)),
          "..."
        ];
      }
    }
    return pages;
  }
  changePage(newPage) {
    if (newPage === "...")
      return;
    this.page = Number(newPage);
    this.emit("p-change");
  }
  prevPage() {
    if (this.page > 1) {
      this.changePage(this.page - 1);
    }
  }
  nextPage() {
    const totalPages = Math.ceil(this.total / this.limit);
    if (this.page < totalPages) {
      this.changePage(this.page + 1);
    }
  }
  render() {
    const pages = this.getPages();
    return n2`
      <div class="paginate">
        <p-button
          size=${this.size}
          variant=${this.variant}
          ?disabled="${this.page === 1 || this.disabled}"
          @click="${this.prevPage}"
          ?circle=${this.pill}
        >
          <slot name="prefix" part="prefix" slot="prefix">
            <p-icon name="arrow-left"></p-icon>
          </slot>
          ${this.localize.term("previousPage")}
        </p-button>
        <div class="paginate__items">
          ${pages.map(
      (page) => n2`
              <p-button
                size=${this.size}
                variant=${this.variant}
                @click="${() => this.changePage(page)}"
                ?disabled="${this.page === page || this.disabled}"
                class=${e({
        page: true,
        "page--active": Number(this.page) === Number(page) && String(this.page) !== "..."
      })}
                ?circle=${this.pill}
              >
                ${page}
              </p-button>
            `
    )}
        </div>
        <p-button
          size=${this.size}
          variant=${this.variant}
          ?disabled="${this.page === Math.ceil(this.total / this.limit) || this.disabled}"
          @click="${this.nextPage}"
          ?circle=${this.pill}
        >
          <slot slot="suffix" name="suffix" part="suffix">
            <p-icon name="arrow-right"></p-icon>
          </slot>
          ${this.localize.term("nextPage")}
        </p-button>
      </div>
    `;
  }
};
PPaginate.styles = [component_styles_default, paginate_styles_default];
PPaginate.dependencies = {
  "p-icon": PIcon
};
__decorateClass([
  n()
], PPaginate.prototype, "title", 2);
__decorateClass([
  n({ reflect: true })
], PPaginate.prototype, "variant", 2);
__decorateClass([
  n({ reflect: true })
], PPaginate.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PPaginate.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], PPaginate.prototype, "pill", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], PPaginate.prototype, "total", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], PPaginate.prototype, "page", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], PPaginate.prototype, "limit", 2);
__decorateClass([
  n({ type: Number, reflect: true, attribute: "max-visible-pages" })
], PPaginate.prototype, "maxVisiblePages", 2);

export {
  PPaginate
};
