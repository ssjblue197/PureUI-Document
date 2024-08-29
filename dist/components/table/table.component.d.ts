import PPaginate from "../paginate/paginate.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
import type { TableOptions, TableRowData } from "./table.ts";
/**
 * @summary Short summary of the component's intended use.
 * @documentation https://pureui.xyz/components/table
 * @status experimental
 * @since 2.0
 *
 * @dependency p-example
 *
 * @event p-change - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
export default class PTable extends PureElement {
    static styles: CSSResultGroup;
    static dependencies: {
        "p-paginate": typeof PPaginate;
    };
    /**
     * Indicates that the element is disabled.
     *
     * @attribute disabled
     * @type {boolean}
     * @defaultValue false
     */
    disabled: boolean;
    options: TableOptions<TableRowData>;
    currentPage: number;
    pageSize: number;
    totalItems: number;
    tableWrapper: HTMLElement;
    /**
     * Returns the current page of items based on the current page, page size, and total items.
     * If the table is not local paginated, all items are returned.
     *
     * @returns {Array} The current page of items.
     */
    get currentItems(): TableRowData[];
    handleApplyOptionsChange(): void;
    connectedCallback(): void;
    private handleEventDispatch;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    private handleChangePage;
    render(): import("lit-html").TemplateResult<1>;
}
