import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
/**
 * @summary The Mutation Observer component offers a thin, declarative interface to the [`MutationObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).
 * @documentation https://pureui.xyz/components/mutation-observer
 * @status stable
 * @since 1.0
 *
 * @event {{ mutationList: MutationRecord[] }} p-mutation - Emitted when a mutation occurs.
 *
 * @slot - The content to watch for mutations.
 */
export default class PMutationObserver extends PureElement {
    static styles: CSSResultGroup;
    private mutationObserver;
    /**
     * Watches for changes to attributes. To watch only specific attributes, separate them by a space, e.g.
     * `attr="class id title"`. To watch all attributes, use `*`.
     */
    attr: string;
    /** Indicates whether or not the attribute's previous value should be recorded when monitoring changes. */
    attrOldValue: boolean;
    /** Watches for changes to the character data contained within the node. */
    charData: boolean;
    /** Indicates whether or not the previous value of the node's text should be recorded. */
    charDataOldValue: boolean;
    /** Watches for the addition or removal of new child nodes. */
    childList: boolean;
    /** Disables the observer. */
    disabled: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleMutation;
    private startObserver;
    private stopObserver;
    handleDisabledChange(): void;
    handleChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
