export type Breakpoints = {
    phoneSize: number;
    tabletSize: number;
    largeTabletSize: number;
    smallComputerSize: number;
};
export type DeviceSize = number;
export declare const DEVICES: Record<string, DeviceSize>;
export declare const breakpoints: ({ wideLayout }: {
    wideLayout?: boolean | undefined;
}) => Breakpoints;
export declare const unit: (px: number) => string;
//# sourceMappingURL=breakpoints.d.ts.map