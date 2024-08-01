import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
/**
 * @summary Dividers are used to visually separate or group elements.
 * @documentation https://pureui.xyz/components/divider
 * @status stable
 * @since 2.0
 *
 * @cssproperty --color - The color of the divider.
 * @cssproperty --width - The width of the divider.
 * @cssproperty --spacing - The spacing of the divider.
 */
export default class PDivider extends PureElement {
    static styles: CSSResultGroup;
    /** Draws the divider in a vertical orientation. */
    vertical: boolean;
    connectedCallback(): void;
    handleVerticalChange(): void;
}
