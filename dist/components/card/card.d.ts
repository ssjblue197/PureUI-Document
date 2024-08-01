import PCard from "./card.component.js";
export * from "./card.component.js";
export default PCard;
declare global {
    interface HTMLElementTagNameMap {
        "p-card": PCard;
    }
}
