import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
/**
 * @summary Includes give you the power to embed external HTML files into the page.
 * @documentation https://pureui.xyz/components/include
 * @status stable
 * @since 2.0
 *
 * @event p-load - Emitted when the included file is loaded.
 * @event {{ status: number }} p-error - Emitted when the included file fails to load due to an error.
 */
export default class PInclude extends PureElement {
    static styles: CSSResultGroup;
    /**
     * The location of the HTML file to include. Be sure you trust the content you are including as it will be executed as
     * code and can result in XSS attacks.
     */
    src: string;
    /** The fetch mode to use. */
    mode: "cors" | "no-cors" | "same-origin";
    /**
     * Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as
     * code and can result in XSS attacks.
     */
    allowScripts: boolean;
    private executeScript;
    handleSrcChange(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
