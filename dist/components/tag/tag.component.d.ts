import PIconButton from '../icon-button/icon-button.component.js';
import PureElement from '../../internal/pure-ui-element.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Tags are used as labels to organize things or to indicate a selection.
 * @documentation https://pureui.xyz/components/tag
 * @status stable
 * @since 2.0
 *
 * @dependency p-icon-button
 *
 * @slot - The tag's content.
 *
 * @event p-remove - Emitted when the remove button is activated.
 *
 * @csspart base - The component's base wrapper.
 * @csspart content - The tag's content.
 * @csspart remove-button - The tag's remove button, an `<p-icon-button>`.
 * @csspart remove-button__base - The remove button's exported `base` part.
 */
export default class PTag extends PureElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'p-icon-button': typeof PIconButton;
    };
    private readonly localize;
    /** The tag's theme variant. */
    variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text';
    /** The tag's size. */
    size: 'small' | 'medium' | 'large';
    /** Draws a pill-style tag with rounded edges. */
    pill: boolean;
    /** Makes the tag removable and shows a remove button. */
    removable: boolean;
    private handleRemoveClick;
    render(): import("lit-html").TemplateResult<1>;
}
