export interface FileInfo {
    file: File;
    loading?: boolean;
    progress?: number;
    accepted?: boolean;
    warning?: string;
    xhr?: XMLHttpRequest;
}
export declare enum HttpMethod {
    PATCH = "PATCH",
    POST = "POST",
    PUT = "PUT",
    GET = "GET"
}
export declare const hasValidExtension: (file: File, acceptedExtension: string) => boolean;
export declare const hasValidBaseType: (file: File, acceptedBaseType: string) => boolean;
export declare const hasValidFileSize: (file: File, maxFileSize?: number) => boolean;
export declare const hasValidFileType: (file: File, accept: string) => boolean;
