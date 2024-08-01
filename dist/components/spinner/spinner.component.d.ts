import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
/**
 * @summary Spinners are used to show the progress of an indeterminate operation.
 * @documentation https://pureui.xyz/components/spinner
 * @status stable
 * @since 2.0
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --track-width - The width of the track.
 * @cssproperty --track-color - The color of the track.
 * @cssproperty --indicator-color - The color of the spinner's indicator.
 * @cssproperty --speed - The time it takes for the spinner to complete one animation cycle.
 */
export default class PSpinner extends PureElement {
    static styles: CSSResultGroup;
    private readonly localize;
    render(): import("lit-html").TemplateResult<1>;
}
