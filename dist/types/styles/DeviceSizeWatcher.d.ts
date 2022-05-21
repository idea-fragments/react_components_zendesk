export declare type DeviceSize = number;
export declare type DeviceSizeChangeListener = (d: DeviceSize) => void;
declare class DeviceSizeWatcher {
    subscribers: {
        [key: number]: DeviceSizeChangeListener | null;
    };
    idGen: Generator<number, void, unknown>;
    currentSize: DeviceSize;
    constructor();
    subscribe: (callBack: DeviceSizeChangeListener) => number;
    unsubscribe: (id: number) => void;
    notifyReceivers: (s: DeviceSize) => void;
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
    createAllListeners: () => void;
}
export declare const deviceSizeWatcher: DeviceSizeWatcher;
export {};
//# sourceMappingURL=DeviceSizeWatcher.d.ts.map