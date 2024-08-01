import PCarousel from "./carousel.component.js";
export * from "./carousel.component.js";
export default PCarousel;
declare global {
    interface HTMLElementTagNameMap {
        "p-carousel": PCarousel;
    }
}
