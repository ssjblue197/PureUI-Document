import PButton from "../button/button.component.js";
import PButtonGroup from "../button-group/button-group.component.js";
import PFormatNumber from "../format-number/format-number.component.js";
import PIcon from "../icon/icon.component.js";
import POption from "../option/option.component.js";
import PSelect from "../select/select.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
/**
 * @summary Paginate represent actions that are available to the user.
 * @documentation https://pureui.xyz/components/button
 * @status stable
 * @since 1.0
 *
 * @dependency p-icon
 * @dependency p-button
 *
 * @event p-change - Emitted when the page changed.
 * @event p-change-limit - Emitted when the page limit changed.
 *
 * @slot prefix - A presentational prefix icon or similar element.
 * @slot suffix - A presentational suffix icon or similar element.
 *
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 */
export default class PPaginate extends PureElement {
    static styles: CSSResultGroup;
    static dependencies: {
        "p-icon": typeof PIcon;
        "p-select": typeof PSelect;
        "p-option": typeof POption;
        "p-format-number": typeof PFormatNumber;
        "p-button": typeof PButton;
        "p-button-group": typeof PButtonGroup;
    };
    private readonly localize;
    title: string;
    /** The button's theme variant. */
    variant: "default" | "primary" | "success" | "neutral" | "warning" | "danger" | "text";
    /** The button's size. */
    size: "small" | "medium" | "large";
    /** Disables the button. */
    disabled: boolean;
    /** Draws a pill-style button with rounded edges. */
    pill: boolean;
    /** The total items to paginate. */
    total: number;
    /** The current page. */
    page: number;
    /** The limit items in a page. */
    limit: number;
    /** The limit visible pages to show. */
    maxVisiblePages: number;
    pageList: number[];
    private getPages;
    handleChangeLimit(e: Event): void;
    changeLimit(newLimit: number): void;
    changePage(newPage: number | string): void;
    prevPage(): void;
    nextPage(): void;
    render(): import("lit-html").TemplateResult;
}
