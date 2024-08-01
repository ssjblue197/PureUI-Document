import PButton from "./button.component.js";
export * from "./button.component.js";
export default PButton;
declare global {
    interface HTMLElementTagNameMap {
        "p-button": PButton;
    }
}
