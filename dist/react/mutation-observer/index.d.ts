import Component from "../../components/mutation-observer/mutation-observer.component.js";
import { type EventName } from "@lit/react";
import type { PMutationEvent } from "../../events/events.js";
export type { PMutationEvent } from "../../events/events.js";
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
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onPMutation: EventName<PMutationEvent>;
}>;
export default reactWrapper;
