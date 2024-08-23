import { LocalizeController as DefaultLocalizationController } from "pure-localize";
import type { Translation as DefaultTranslation } from "pure-localize";
export declare class LocalizeController extends DefaultLocalizationController<Translation> {
}
export { registerTranslation } from "pure-localize";
export interface Translation extends DefaultTranslation {
    $code: string;
    $name: string;
    $dir: "ltr" | "rtl";
    carousel: string;
    clearEntry: string;
    close: string;
    copied: string;
    copy: string;
    currentValue: string;
    error: string;
    goToSlide: (slide: number, count: number) => string;
    hidePassword: string;
    loading: string;
    nextMonth?: string;
    nextYear?: string;
    nextSlide: string;
    numOptionsSelected: (num: number) => string;
    previousMonth?: string;
    previousYear?: string;
    previousSlide: string;
    progress: string;
    remove: string;
    resize: string;
    scrollToEnd: string;
    scrollToStart: string;
    selectAColorFromTheScreen: string;
    showPassword: string;
    slideNum: (slide: number) => string;
    toggleColorFormat: string;
    today?: string;
}
