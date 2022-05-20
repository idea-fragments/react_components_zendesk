export declare type DeviceSize = number;
export declare type DeviceSizeChangeListener = (d: DeviceSize) => void;
declare class DeviceSizeWatcher {
    #private;
    constructor();
    subscribe: (callBack: DeviceSizeChangeListener) => number;
    unsubscribe: (id: number) => void;
    isPhone: () => boolean;
    isTablet: () => boolean;
    isLargeTablet: () => boolean;
    isSmallComputer: () => boolean;
    isLargeComputer: () => boolean;
    isSmallComputerAndUp: () => boolean;
    isLargeTabletAndUp: () => boolean;
    isTabletAndUp: () => boolean;
    any: (arr: Array<() => boolean>) => boolean;
    getSize: () => DeviceSize;
}
export declare const deviceSizeWatcher: DeviceSizeWatcher;
export {};
//# sourceMappingURL=DeviceSizeWatcher.d.ts.map