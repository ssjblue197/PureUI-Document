import PIcon from '../icon/icon.component.js';
import PureElement from '../../internal/pure-ui-element.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary A component for displaying animated GIFs and WEBPs that play and pause on interaction.
 * @documentation https://pureui.xyz/components/animated-image
 * @status stable
 * @since 2.0
 *
 * @dependency p-icon
 *
 * @event p-load - Emitted when the image loads successfully.
 * @event p-error - Emitted when the image fails to load.
 *
 * @slot play-icon - Optional play icon to use instead of the default. Works best with `<p-icon>`.
 * @slot pause-icon - Optional pause icon to use instead of the default. Works best with `<p-icon>`.
 *
 * @part control-box - The container that surrounds the pause/play icons and provides their background.
 *
 * @cssproperty --control-box-size - The size of the icon box.
 * @cssproperty --icon-size - The size of the play/pause icons.
 */
export default class PAnimatedImage extends PureElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'p-icon': typeof PIcon;
    };
    animatedImage: HTMLImageElement;
    frozenFrame: string;
    isLoaded: boolean;
    /** The path to the image to load. */
    src: string;
    /** A description of the image used by assistive devices. */
    alt: string;
    /** Plays the animation. When this attribute is remove, the animation will pause. */
    play: boolean;
    private handleClick;
    private handleLoad;
    private handleError;
    handlePlayChange(): void;
    handleSrcChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
