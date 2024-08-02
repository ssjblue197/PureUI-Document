import PureElement from "../../internal/pure-ui-element.js";
/**
 * @summary Formats a number as a human readable bytes value.
 * @documentation https://pureui.xyz/components/format-bytes
 * @status stable
 * @since 1.0
 */
export default class PFormatBytes extends PureElement {
    private readonly localize;
    /** The number to format in bytes. */
    value: number;
    /** The type of unit to display. */
    unit: "byte" | "bit";
    /** Determines how to display the result, e.g. "100 bytes", "100 b", or "100b". */
    display: "long" | "short" | "narrow";
    render(): string;
}
