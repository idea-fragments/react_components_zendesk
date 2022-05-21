import { FormFieldProps } from "components/forms/formField.types";
import { StateChangeOptions } from "downshift";
export declare type SelectorItemKey = string | number | null | undefined;
export declare type SelectorOptionOptionalAttrs = {
    isClearingItem?: boolean;
    isNextItem?: boolean;
    isBackItem?: boolean;
    isAddItem?: boolean;
    isHeaderItem?: boolean;
};
export declare type SelectorOption = {
    [key: string]: any;
} & SelectorOptionOptionalAttrs;
export declare type OnMultiSelectItemRemoveFunc<T = SelectorItemKey> = (k: T) => void;
export declare type OnItemSelectedFunc = ((k: SelectorItemKey) => void) | ((o: SelectorOption | null) => void);
export declare type StateChange = StateChangeOptions<SelectorOption>;
declare type Common = FormFieldProps & {
    clearable?: boolean;
    options: Array<SelectorOption>;
    optionsKeyMap?: {
        [key: string]: SelectorOption;
    };
    keyField: string;
    valueField: string;
    onChange?: OnItemSelectedFunc;
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
    onChange?: OnItemSelectedFunc;
} & Common;
export {};
//# sourceMappingURL=types.d.ts.map