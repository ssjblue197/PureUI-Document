import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
/**
 * @summary A carousel item represent a slide within a [carousel](/components/carousel).
 *
 * @since 2.0
 * @status experimental
 *
 * @slot - The carousel item's content..
 *
 * @cssproperty --aspect-ratio - The slide's aspect ratio. Inherited from the carousel by default.
 *
 */
export default class PCarouselItem extends PureElement {
    static styles: CSSResultGroup;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
