import type { PureFormControl } from "../pure-ui-element.js";
/** Runs a set of generic tests for Pure UI form controls */
export declare function runFormControlBaseTests<T extends PureFormControl = PureFormControl>(tagNameOrConfig: string | {
    tagName: string;
    init?: (control: T) => void;
    variantName: string;
}): void;
