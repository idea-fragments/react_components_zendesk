import { FlattenSimpleInterpolation } from "styled-components";
export declare const PHONE_SIZE = 560;
export declare const TABLET_SIZE = 840;
declare type Styles = FlattenSimpleInterpolation;
export declare type MediaQuery = (styles: Styles) => Styles;
export declare const forPhones: (styles: FlattenSimpleInterpolation) => string;
export declare const forTablets: (styles: FlattenSimpleInterpolation) => string;
export declare type MediaQueriesI = {
    forPhones: MediaQuery;
    forTablets: MediaQuery;
    forTabletsAndUp: MediaQuery;
    forLargeTabletsAndUp: MediaQuery;
    forSmallComputersAndUp: MediaQuery;
    forLargeComputers: MediaQuery;
};
export declare const mediaQueries: (wideLayout?: boolean | undefined) => MediaQueriesI;
export declare const rem: (px: number) => string;
export declare const unit: (px: number) => string;
export declare const remSize: (e?: HTMLElement) => number;
export {};
//# sourceMappingURL=mediaQueries.d.ts.map