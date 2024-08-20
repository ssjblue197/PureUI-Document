import PIcon from "../icon/icon.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
/**
 * @summary Options define the selectable items within various form controls such as [select](/components/select).
 * @documentation https://pureui.xyz/components/option
 * @status stable
 * @since 1.0
 *
 * @dependency p-icon
 *
 * @slot - The option's label.
 * @slot prefix - Used to prepend an icon or similar element to the menu item.
 * @slot suffix - Used to append an icon or similar element to the menu item.
 *
 * @csspart checked-icon - The checked icon, an `<p-icon>` element.
 * @csspart base - The component's base wrapper.
 * @csspart label - The option's label.
 * @csspart prefix - The container that wraps the prefix.
 * @csspart suffix - The container that wraps the suffix.
 */
export default class POption extends PureElement {
    static styles: CSSResultGroup;
    static dependencies: {
        "p-icon": typeof PIcon;
    };
    private cachedTextLabel;
    private readonly localize;
    defaultSlot: HTMLSlotElement;
    current: boolean;
    selected: boolean;
    hasHover: boolean;
    /**
     * When true, the option is hidden from view.
     *
     * This is typically used when dynamically rendering a list of options. When an option becomes hidden, it will not be
     * rendered in the DOM. When the option becomes visible again, it will be re-rendered in the DOM.
     *
     * @attribute hidden
     * @type boolean
     * @default false
     */
    hidden: boolean;
    /**
     * The option's value. When selected, the containing form control will receive this value. The value must be unique
     * from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
     * multiple values.
     */
    value: string;
    /** Draws the option in a disabled state, preventing selection. */
    disabled: boolean;
    connectedCallback(): void;
    private handleDefaultSlotChange;
    private handleMouseEnter;
    private handleMouseLeave;
    handleDisabledChange(): void;
    handleSelectedChange(): void;
    handleValueChange(): void;
    /** Returns a plain text label based on the option's content. */
    getTextLabel(): string;
    render(): import("lit-html").TemplateResult<1>;
}
