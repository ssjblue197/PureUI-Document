import PMenu from './menu.component.js';
export * from './menu.component.js';
export default PMenu;
declare global {
    interface HTMLElementTagNameMap {
        'p-menu': PMenu;
    }
}
