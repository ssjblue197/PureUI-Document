import PSkeleton from "./skeleton.component.js";
export * from "./skeleton.component.js";
export default PSkeleton;
declare global {
    interface HTMLElementTagNameMap {
        "p-skeleton": PSkeleton;
    }
}
