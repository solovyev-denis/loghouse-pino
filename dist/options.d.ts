export interface ILoghousePinoOptions {
    access_token: string;
    bucket_id: string;
}
export declare let options: ILoghousePinoOptions;
export declare function loadOptions(): ILoghousePinoOptions;
export declare function setOptions(_options: ILoghousePinoOptions): void;
