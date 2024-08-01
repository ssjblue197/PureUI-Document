import PMenuItem from './menu-item.component.js';
export * from './menu-item.component.js';
export default PMenuItem;
declare global {
    interface HTMLElementTagNameMap {
        'p-menu-item': PMenuItem;
    }
}
