export interface TranslateResponseModel {
    readonly from: {
        readonly language: {
            readonly didYouMean: boolean;
            readonly iso: string;
        };
        readonly text: {
            autoCorrected: boolean;
            didYouMean: boolean;
            value: string;
        }
    };
    readonly raw: string;
    readonly text: string;
}
