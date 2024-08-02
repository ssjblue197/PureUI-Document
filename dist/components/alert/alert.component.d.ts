import PIconButton from "../icon-button/icon-button.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
/**
 * @summary Alerts are used to display important messages inline or as toast notifications.
 * @documentation https://pureui.xyz/components/alert
 * @status stable
 * @since 1.0
 *
 * @dependency p-icon-button
 *
 * @slot - The alert's main content.
 * @slot icon - An icon to show in the alert. Works best with `<p-icon>`.
 *
 * @event p-show - Emitted when the alert opens.
 * @event p-after-show - Emitted after the alert opens and all animations are complete.
 * @event p-hide - Emitted when the alert closes.
 * @event p-after-hide - Emitted after the alert closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The container that wraps the optional icon.
 * @csspart message - The container that wraps the alert's main content.
 * @csspart close-button - The close button, an `<p-icon-button>`.
 * @csspart close-button__base - The close button's exported `base` part.
 *
 * @animation alert.show - The animation to use when showing the alert.
 * @animation alert.hide - The animation to use when hiding the alert.
 */
export default class PAlert extends PureElement {
    static styles: CSSResultGroup;
    static dependencies: {
        "p-icon-button": typeof PIconButton;
    };
    private autoHideTimeout;
    private readonly hasSlotController;
    private readonly localize;
    base: HTMLElement;
    /**
     * Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can
     * use the `show()` and `hide()` methods and this attribute will reflect the alert's open state.
     */
    open: boolean;
    /** Enables a close button that allows the user to dismiss the alert. */
    closable: boolean;
    /** The alert's theme variant. */
    variant: "primary" | "success" | "neutral" | "warning" | "danger";
    /**
     * The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with
     * the alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning
     * the alert will not close on its own.
     */
    duration: number;
    firstUpdated(): void;
    private restartAutoHide;
    private handleCloseClick;
    private handleMouseMove;
    handleOpenChange(): Promise<void>;
    handleDurationChange(): void;
    /** Shows the alert. */
    show(): Promise<void>;
    /** Hides the alert */
    hide(): Promise<void>;
    /**
     * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
     * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
     * calling this method again. The returned promise will resolve after the alert is hidden.
     */
    toast(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
