import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
/**
 * @since 2.0
 * @status experimental
 *
 * @dependency p-icon-button
 * @dependency p-progress-bar
 *
 * @event p-show - Emitted when the item opens.
 * @event p-after-show - Emitted after the item opens and all animations are complete.
 * @event p-hide - Emitted when the item closes.
 * @event p-after-hide - Emitted after the item closes and all animations are complete.
 *
 * @slot - The file list item's label.
 * @slot image - The file list item's image.
 * @slot close-button - The file list item's close button.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart image - The file list item's image.
 * @csspart label - The file list item's label.
 * @csspart close-button -  The file list item's close button.
 */
export default class PFileUploadItem extends PureElement {
    static styles: CSSResultGroup;
    private readonly hasSlotController;
    private readonly localize;
    base: HTMLElement;
    /** Draws the item in a loading state. */
    loading: boolean;
    /** The current progress, 0 to 100. Only respects is loading prop is true. */
    progress: number;
    /** A custom label for the progress bar's aria label. Only respects if loading prop is true. */
    label: string;
    /** The locale to render the component in. */
    lang: string;
    /** Draws the item in a warning state. */
    warning: boolean;
    /** Makes the item closable. */
    closable: boolean;
    /** A unique value to store in the menu item. This can be used as a way to identify menu items when selected. */
    value: string;
    /** The size of the file in bytes as a read-only 64-bit integer. */
    size: number;
    /** Indicates whether or not the file list item is hidden. */
    hidden: boolean;
    firstUpdated(): void;
    handleHiddenChange(): Promise<void>;
    /** Shows the item. */
    show(): Promise<void>;
    /** Hides the item */
    hide(): Promise<void>;
    handleCloseClick(): void;
    handleTriggerKeyUp(event: KeyboardEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
