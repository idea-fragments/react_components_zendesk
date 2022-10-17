export declare type ScrollPassedNavBarListener = (b: boolean) => void;
export declare class NavBarScrollWatcher {
    static onScrollPassedNavBar: (f: ScrollPassedNavBarListener) => () => void;
    static setNavBar: (n: HTMLDivElement) => void;
    static setInitialState: () => void;
}
//# sourceMappingURL=NavBarScrollWatcher.d.ts.map