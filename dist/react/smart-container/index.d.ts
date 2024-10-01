import Component from "../../components/smart-container/smart-container.component.js";
/**
 * @summary This is a responsive container component that handles dynamic content overflow and provides an interactive dropdown menu for hidden items. It observes and manages content inside its slots, automatically adjusting the layout to handle overflow situations..
 * @documentation https://pureui.xyz/components/smart-container
 * @status stable
 * @since 1.2.17
 *
 * @dependency p-dropdown
 *
 * @slot - The default slot.
 * @slot icon - The icon slot.
 *
 * @csspart base - The component's base wrapper.
 * @csspart dropdown-menu - The dropdown menu.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {}>;
export default reactWrapper;
