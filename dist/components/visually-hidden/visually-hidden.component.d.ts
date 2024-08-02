import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
/**
 * @summary The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.
 * @documentation https://pureui.xyz/components/visually-hidden
 * @status stable
 * @since 1.0
 *
 * @slot - The content to be visually hidden.
 */
export default class PVisuallyHidden extends PureElement {
    static styles: CSSResultGroup;
    render(): import("lit-html").TemplateResult<1>;
}
