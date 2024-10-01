import PButton from "../button/button.component.js";
import PDropdown from "../dropdown/dropdown.component.js";
import PIcon from "../icon/icon.js";
import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
/**
 * @summary This is a responsive container component that handles dynamic content overflow and provides an interactive dropdown menu for hidden items. It observes and manages content inside its slots, automatically adjusting the layout to handle overflow situations..
 * @documentation https://pureui.xyz/components/smart-container
 * @status stable
 * @since 1.2.17
 *
 * @dependency p-dropdown
 *
 * @slot - The default slot.
 * @slot icon - The icon slot.
 *
 * @csspart base - The component's base wrapper.
 * @csspart dropdown-menu - The dropdown menu.
 */
export default class PSmartContainer extends PureElement {
    static styles: CSSResultGroup;
    private resizeObserver;
    private observedElements;
    private overlapElements;
    static dependencies: {
        "p-dropdown": typeof PDropdown;
        "p-icon": typeof PIcon;
        "p-button": typeof PButton;
    };
    /** An example attribute. */
    attr: string;
    smartContainer: HTMLElement;
    dropdownMenu: HTMLElement;
    handleExampleChange(): void;
    private startObserver;
    private stopObserver;
    protected firstUpdated(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
