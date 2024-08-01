import PAlert from "./alert.component.js";
export * from "./alert.component.js";
export default PAlert;
declare global {
    interface HTMLElementTagNameMap {
        "p-alert": PAlert;
    }
}
