type ScrollPassedNavBarListener = (b: boolean) => void;
declare class NavBarScrollWatcher {
    static onScrollPassedNavBar: (f: ScrollPassedNavBarListener) => () => void;
    static setNavBar: (n: HTMLDivElement) => void;
    static setInitialState: () => void;
}

type InvalidFields = {
    [key: string]: string[];
};
declare const validateFields: (fieldLabels: {
    [key: string]: string;
}) => (invalidFields: InvalidFields, field: string) => {
    validation: "error";
    message: string;
} | {
    validation: undefined;
    message?: undefined;
};

export { InvalidFields, NavBarScrollWatcher, ScrollPassedNavBarListener, validateFields };
