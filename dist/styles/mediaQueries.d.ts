import { CSS } from "styles/types";
export declare const PHONE_SIZE = 560;
export declare const TABLET_SIZE = 840;
export type MediaQuery = (styles: CSS) => CSS;
export type MediaQueriesI = {
    forPhones: MediaQuery;
    forTablets: MediaQuery;
    forTabletsAndUp: MediaQuery;
    forLargeTabletsAndUp: MediaQuery;
    forSmallComputersAndUp: MediaQuery;
    forLargeComputers: MediaQuery;
};
export declare const mediaQueries: (wideLayout?: boolean) => MediaQueriesI;
export declare const rem: (px: number) => string;
export declare const unit: (px: number) => string;
export declare const remSize: (e?: HTMLElement) => number;
//# sourceMappingURL=mediaQueries.d.ts.map