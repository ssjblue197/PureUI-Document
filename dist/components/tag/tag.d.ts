import PTag from './tag.component.js';
export * from './tag.component.js';
export default PTag;
declare global {
    interface HTMLElementTagNameMap {
        'p-tag': PTag;
    }
}
