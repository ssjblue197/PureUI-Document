import PIcon from '../icon/icon.component.js';
import PureElement from '../../internal/pure-ui-element.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Details show a brief summary and expand to show additional content.
 * @documentation https://pureui.xyz/components/details
 * @status stable
 * @since 2.0
 *
 * @dependency p-icon
 *
 * @slot - The details' main content.
 * @slot summary - The details' summary. Alternatively, you can use the `summary` attribute.
 * @slot expand-icon - Optional expand icon to use instead of the default. Works best with `<p-icon>`.
 * @slot collapse-icon - Optional collapse icon to use instead of the default. Works best with `<p-icon>`.
 *
 * @event p-show - Emitted when the details opens.
 * @event p-after-show - Emitted after the details opens and all animations are complete.
 * @event p-hide - Emitted when the details closes.
 * @event p-after-hide - Emitted after the details closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart header - The header that wraps both the summary and the expand/collapse icon.
 * @csspart summary - The container that wraps the summary.
 * @csspart summary-icon - The container that wraps the expand/collapse icons.
 * @csspart content - The details content.
 *
 * @animation details.show - The animation to use when showing details. You can use `height: auto` with this animation.
 * @animation details.hide - The animation to use when hiding details. You can use `height: auto` with this animation.
 */
export default class PDetails extends PureElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'p-icon': typeof PIcon;
    };
    private readonly localize;
    details: HTMLDetailsElement;
    header: HTMLElement;
    body: HTMLElement;
    expandIconSlot: HTMLSlotElement;
    detailsObserver: MutationObserver;
    /**
     * Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
     * can use the `show()` and `hide()` methods and this attribute will reflect the details' open state.
     */
    open: boolean;
    /** The summary to show in the header. If you need to display HTML, use the `summary` slot instead. */
    summary: string;
    /** Disables the details so it can't be toggled. */
    disabled: boolean;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private handleSummaryClick;
    private handleSummaryKeyDown;
    handleOpenChange(): Promise<void>;
    /** Shows the details. */
    show(): Promise<void>;
    /** Hides the details */
    hide(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
