import Component from '../../components/dropdown/dropdown.component.js';
import { type EventName } from '@lit/react';
import type { PShowEvent } from '../../events/events.js';
import type { PAfterShowEvent } from '../../events/events.js';
import type { PHideEvent } from '../../events/events.js';
import type { PAfterHideEvent } from '../../events/events.js';
export type { PShowEvent } from '../../events/events.js';
export type { PAfterShowEvent } from '../../events/events.js';
export type { PHideEvent } from '../../events/events.js';
export type { PAfterHideEvent } from '../../events/events.js';
/**
 * @summary Dropdowns expose additional content that "drops down" in a panel.
 * @documentation https://pureui.xyz/components/dropdown
 * @status stable
 * @since 2.0
 *
 * @dependency p-popup
 *
 * @slot - The dropdown's main content.
 * @slot trigger - The dropdown's trigger, usually a `<p-button>` element.
 *
 * @event p-show - Emitted when the dropdown opens.
 * @event p-after-show - Emitted after the dropdown opens and all animations are complete.
 * @event p-hide - Emitted when the dropdown closes.
 * @event p-after-hide - Emitted after the dropdown closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper, an `<p-popup>` element.
 * @csspart base__popup - The popup's exported `popup` part. Use this to target the tooltip's popup container.
 * @csspart trigger - The container that wraps the trigger.
 * @csspart panel - The panel that gets shown when the dropdown is open.
 *
 * @animation dropdown.show - The animation to use when showing the dropdown.
 * @animation dropdown.hide - The animation to use when hiding the dropdown.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPShow: EventName<PShowEvent>;
    onPAfterShow: EventName<PAfterShowEvent>;
    onPHide: EventName<PHideEvent>;
    onPAfterHide: EventName<PAfterHideEvent>;
}>;
export default reactWrapper;
