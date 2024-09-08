import PFileUploadItem from "../file-upload-item/file-upload-item.component.js";
import PIcon from "../icon/icon.component.js";
import PIconButton from "../icon-button/icon-button.component.js";
import PProgressBar from "../progress-bar/progress-bar.component.js";
import PureElement from "../../internal/pure-ui-element.js";
import type { CSSResultGroup } from "lit";
import type { FileInfo } from "./library.js";
import type { PureFormControl } from "../../internal/pure-ui-element.js";
/**
 * @since 2.0
 * @status experimental
 *
 * @dependency p-progress-bar
 * @dependency p-icon
 * @dependency p-icon-button
 * @dependency p-file-upload-item
 *
 * @slot label - The dropzone's label. Alternatively, you can use the image slot and label prop.
 * @slot image - The dropzone's image.
 * @slot button - The dropzone's button.
 *
 * @event p-drop - Emitted when dragged files have been dropped on the dropzone area.
 * @event {{ fileList: FileList }} p-change - Emitted when files have been uploaded via the dropzone or file dialog.
 * @event {{ response: unknown }} p-load - Emitted when a file transfer was finished
 * @event {{ event: ProgressEvent }} p-error - Emitted when a file transfer threw an error
 * @event {{ event: ProgressEvent }} p-abort - Emitted when a file transfer was aborted by the user
 * @event {{ file: FileInfo }} p-remove - Emitted when a file was removed
 *
 * @csspart base - The component's internal wrapper.
 * @csspart label - The dropzone container.
 * @csspart image - The dropzone image.
 * @csspart button - The dropzone button.
 *
 * @cssproperty --border-radius - The border radius of the dropzone borders.
 * @cssproperty --border-width - The width of the dropzone borders.
 * @cssproperty --border-style - The style of the dropzone borders.
 *
 */
export default class PFileUpload extends PureElement implements PureFormControl {
    static styles: CSSResultGroup;
    static dependencies: {
        "p-icon": typeof PIcon;
        "p-icon-button": typeof PIconButton;
        "p-progress-bar": typeof PProgressBar;
        "p-file-upload-item": typeof PFileUploadItem;
    };
    private readonly formControlController;
    private readonly localize;
    /** Internal property to show a warning in the dropzone */
    warning?: string;
    /** Indicates whether a file is currently dragged over the dropzone */
    isDragover: boolean;
    fileInput: HTMLInputElement;
    files: FileInfo[];
    /** The input's name attribute. */
    name: string;
    get value(): string | File[];
    set value(file: string | File | File[]);
    /** Disables the dropzone. */
    disabled: boolean;
    /** If true, hides button to open the native file selection dialog */
    noButton: boolean;
    /** If true, shows only a button as a file input */
    buttonOnly: boolean;
    /** If true, no file list will be shown */
    noFileList: boolean;
    /** An optional overwrite for the upload label */
    label?: string;
    /** An optional overwrite for the preview button label */
    buttonLabel?: string;
    /** The locale to render the component in. */
    lang: string;
    /** A string that defines the file types the file dropzone should accept. Defaults to '*' */
    accept: string;
    /** An optional maximum size of a file that will be considered valid. */
    maxFileSize?: number;
    /** The maximum amount of files that are allowed. */
    maxFiles: number;
    /** Indicates if multiple files can be uploaded */
    multiple: boolean;
    /** Gets the validity state object */
    get validity(): ValidityState;
    /** Gets the validation message */
    get validationMessage(): string;
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity(): boolean;
    /** Gets the associated form, if one exists. */
    getForm(): HTMLFormElement | null;
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity(): boolean;
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message: string): void;
    addFile(file: File): void;
    handleFiles(fileList: FileList | null): void;
    onDragLeave(): void;
    onDragOver(event: DragEvent): void;
    onDrop(event: DragEvent): void;
    handleBrowseFileClick(): void;
    handleFileInputChange(): void;
    handleFileRemove(index: number): void;
    get description(): string;
    render(): import("lit-html").TemplateResult<1>;
}
