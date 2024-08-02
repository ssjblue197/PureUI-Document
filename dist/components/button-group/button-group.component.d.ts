import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
/**
 * @summary Button groups can be used to group related buttons into sections.
 * @documentation https://pureui.xyz/components/button-group
 * @status stable
 * @since 1.0
 *
 * @slot - One or more `<p-button>` elements to display in the button group.
 *
 * @csspart base - The component's base wrapper.
 */
export default class PButtonGroup extends PureElement {
    static styles: CSSResultGroup;
    defaultSlot: HTMLSlotElement;
    disableRole: boolean;
    /**
     * A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
     * devices when interacting with the control and is strongly recommended.
     */
    label: string;
    private handleFocus;
    private handleBlur;
    private handleMouseOver;
    private handleMouseOut;
    private handleSlotChange;
    render(): import("lit-html").TemplateResult<1>;
}
