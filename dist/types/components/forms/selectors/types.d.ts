import { FormFieldProps } from "components/forms/formField.types";
import { MenuPlacement } from "components/forms/selectors/Dropdown";
import { ItemProps } from "components/forms/selectors/Dropdown/Item";
import { StateChangeOptions } from "downshift";
import { ComponentType, PropsWithChildren } from "react";
export declare type SelectorItemKey = string | number | null | undefined;
export declare type SelectorOptionOptionalAttrs = {
    Component?: ComponentType<PropsWithChildren<Record<string, any>>>;
    componentProps?: Record<string, any>;
    isClearingItem?: boolean;
    isNextItem?: boolean;
    isBackItem?: boolean;
    isAddItem?: boolean;
    isHeaderItem?: boolean;
    itemProps?: Partial<ItemProps>;
};
export declare type SelectorOption = {
    [key: string]: any;
} & SelectorOptionOptionalAttrs;
export declare type OnItemSelectedFunc = ((k: SelectorItemKey) => void) | ((o: SelectorOption | null | undefined) => void);
export declare type OnItemsSelectedFunc = ((ks: SelectorItemKey[]) => void) | ((o: SelectorOption[] | null | undefined) => void);
export declare type StateChange = StateChangeOptions<SelectorOption>;
declare type Common = FormFieldProps & {
    appendMenuToNode?: HTMLElement;
    clearable?: boolean;
    options: Array<SelectorOption>;
    optionsKeyMap?: {
        [key: string]: SelectorOption;
    };
    keyField: string;
    labelField: string;
    valueField?: string;
    maxMenuHeight?: string;
    menuPopperModifiers?: Record<string, any>[] | undefined;
    placement?: MenuPlacement;
    onStateChange?: (s: StateChange) => void;
    invalidOnNoSelection?: boolean;
    flat?: boolean;
    open?: boolean;
    small?: boolean;
};
export declare type SelectorProps = {
    selectedKey?: SelectorItemKey;
    onChange?: OnItemSelectedFunc;
} & Common;
export declare type MultiSelectorProps = {
    selectedKeys?: SelectorItemKey[];
    onChange?: OnItemsSelectedFunc;
} & Common;
export {};
//# sourceMappingURL=types.d.ts.map