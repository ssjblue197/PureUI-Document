import Component from "../../components/copy-button/copy-button.component.js";
import { type EventName } from "@lit/react";
import type { PCopyEvent } from "../../events/events.js";
import type { PErrorEvent } from "../../events/events.js";
export type { PCopyEvent } from "../../events/events.js";
export type { PErrorEvent } from "../../events/events.js";
/**
 * @summary Copies text data to the clipboard when the user clicks the trigger.
 * @documentation https://pureui.xyz/components/copy
 * @status experimental
 * @since 2.7
 *
 * @dependency p-icon
 * @dependency p-tooltip
 *
 * @event p-copy - Emitted when the data has been copied.
 * @event p-error - Emitted when the data could not be copied.
 *
 * @slot copy-icon - The icon to show in the default copy state. Works best with `<p-icon>`.
 * @slot success-icon - The icon to show when the content is copied. Works best with `<p-icon>`.
 * @slot error-icon - The icon to show when a copy error occurs. Works best with `<p-icon>`.
 *
 * @csspart button - The internal `<button>` element.
 * @csspart copy-icon - The container that holds the copy icon.
 * @csspart success-icon - The container that holds the success icon.
 * @csspart error-icon - The container that holds the error icon.
 * @csspart tooltip__base - The tooltip's exported `base` part.
 * @csspart tooltip__base__popup - The tooltip's exported `popup` part.
 * @csspart tooltip__base__arrow - The tooltip's exported `arrow` part.
 * @csspart tooltip__body - The tooltip's exported `body` part.
 *
 * @cssproperty --success-color - The color to use for success feedback.
 * @cssproperty --error-color - The color to use for error feedback.
 *
 * @animation copy.in - The animation to use when feedback icons animate in.
 * @animation copy.out - The animation to use when feedback icons animate out.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPCopy: EventName<PCopyEvent>;
    onPError: EventName<PErrorEvent>;
}>;
export default reactWrapper;
