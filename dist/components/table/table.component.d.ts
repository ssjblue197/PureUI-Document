import PCheckbox from "../checkbox/checkbox.component.js";
import PIcon from "../icon/icon.js";
import PPaginate from "../paginate/paginate.component.js";
import PTag from "../tag/tag.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
import type { TableOptions, TableRowData } from "./table.ts";
/**
 * @summary The Table component is used to display data in a table format.
 * @documentation https://pureui.xyz/components/table
 * @status stable
 * @since 1.1.15
 *
 * @dependency p-tag
 * @dependency p-paginate
 * @dependency p-icon
 *
 * @event p-change - Emitted when the current page value changes.
 * @event p-table-row-select - Emitted when the rows selected changed.
 *
 * @slot - The default slot.
 * @slot paginate - An optional slot for paginate element.
 *
 * @csspart table-wrapper - The component's table wrapper.
 * @csspart table-header - The component's table header wrapper.
 * @csspart table-body - The component's table body wrapper.
 * @csspart table-loading - The component's table loading wrapper.
 * @csspart table-empty - The component's table empty wrapper.
 * @csspart table-footer - The component's table footer wrapper.
 *
 *
 * @cssproperty --table-header-cell-padding - Set padding for header cell.
 * @cssproperty --table-body-cell-padding - Set padding for body cell.
 * @cssproperty --table-footer-padding - Set padding for footer cell.
 * @cssproperty --table-border-horizontal-width - Set border width horizontal.
 * @cssproperty --table-border-horizontal-style - Set border style horizontal.
 * @cssproperty --table-border-horizontal-color - Set border color horizontal.
 * @cssproperty --table-border-vertical-width - Set border width vertical.
 * @cssproperty --table-border-vertical-style - Set border style vertical.
 * @cssproperty --table-border-vertical-color - Set border color vertical.
 * @cssproperty --table-border-width - Set table border width.
 * @cssproperty --table-border-color - Set table border color.
 * @cssproperty --table-border-style - Set table border style.
 * @cssproperty --table-border-radius - Set table border radius.
 * @cssproperty --table-row-hover-background-color - Set table row hover background color.
 * @cssproperty --table-cell-background-color - Set table cell background color.
 * @cssproperty --table-cell-hover-background-color - Set table cell hover background color.
 * @cssproperty --table-cell-min-height - Set table cell min height.
 * @cssproperty --table-cell-max-height - Set table cell max height.
 * @cssproperty --table-cell-min-width - Set table cell min width.
 * @cssproperty --table-cell-max-width - Set table cell max width.
 *
 *
 *
 *
 *
 */
export default class PTable extends PureElement {
    static styles: CSSResultGroup;
    private resizeObserver;
    private observedElements;
    static dependencies: {
        "p-paginate": typeof PPaginate;
        "p-tag": typeof PTag;
        "p-icon": typeof PIcon;
        "p-checkbox": typeof PCheckbox;
    };
    private readonly localize;
    /**
     * Indicates that the element is disabled.
     *
     * @attribute disabled
     * @type {boolean}
     * @defaultValue false
     */
    disabled: boolean;
    /**
     * The options for the table.
     *
     * @property options
     * @type {TableOptions<TableRowData>}
     * @defaultValue { columns: [], data: [] }
     * @reflect
     *
     * @description
     * This property is an object that contains the columns and data for the table.
     * The `columns` property is an array of objects, where each object represents a
     * column and has the following properties:
     *
     * - `field`: The field in the row data that the column represents.
     * - `headerName`: The text to display in the column header.
     * - `width`: The width of the column.
     * - `minWidth`: The minimum width of the column.
     * - `maxWidth`: The maximum width of the column.
     * - `alignItems`: The alignment of the content in the column.
     * - `justifyContent`: The justification of the content in the column.
     * - `justifyItems`: The justification of the items in the column.
     * - `truncate`: Whether to truncate the content in the column.
     * - `classes`: The CSS classes to apply to the column.
     * - `sticky`: Whether the column should be sticky.
     * - `stickyOffset`: The offset from the top of the scroll container at which the column should become sticky.
     *
     * The `data` property is an array of objects, where each object represents a row
     * in the table.
     *
     * */
    options: TableOptions<TableRowData>;
    /**
     * The data to display in the table.
     *
     * This property is an array of objects, where each object represents a row
     * in the table. The properties of each object will be used to populate the
     * columns in the table. The column headers will be determined by the
     * `options.columns` property.
     *
     * @type {TableRowData[]}
     * @default []
     */
    data: TableRowData[];
    /**
     * Whether the table is currently loading data.
     *
     * @type {boolean}
     * @default false
     */
    loading: boolean;
    /**
     * The current page of items based on the current `limit` and `total`.
     *
     * @type {number}
     * @default 1
     */
    page: number;
    /**
     * The number of items to display per page.
     *
     * @type {number}
     * @default 10
     */
    limit: number;
    /**
     * The total number of items in the table.
     *
     * @type {number}
     * @default 0
     */
    total: number;
    items: TableRowData[];
    selectedRows: TableRowData[];
    tmpSelectedRows: TableRowData[];
    tableWrapper: HTMLElement;
    /**
     * Returns the current page of items based on the current page, page size, and total items.
     * If the table is not local paginated, all items are returned.
     *
     * @returns {Array} The current page of items.
     */
    get currentItems(): TableRowData[];
    handleApplyOptionsChange(): void;
    handleDisabledChange(): void;
    private startObserver;
    private stopObserver;
    private handleAttachResizeObserved;
    connectedCallback(): void;
    private handleEventDispatch;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    private handleChangePage;
    private handleSelectAll;
    private handleSelectRow;
    getSelectedRows(): TableRowData[];
    render(): import("lit-html").TemplateResult<1>;
}
