import Component from "../../components/breadcrumb/breadcrumb.component.js";
/**
 * @summary Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
 * @documentation https://pureui.xyz/components/breadcrumb
 * @status stable
 * @since 1.0
 *
 * @slot - One or more breadcrumb items to display.
 * @slot separator - The separator to use between breadcrumb items. Works best with `<p-icon>`.
 *
 * @dependency p-icon
 *
 * @csspart base - The component's base wrapper.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {}>;
export default reactWrapper;
