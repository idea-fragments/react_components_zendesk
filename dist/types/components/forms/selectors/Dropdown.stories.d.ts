import { SelectorItemKey } from "components/forms/selectors/types";
import React from "react";
declare const _default: {
    title: string;
    component: React.FC<React.PropsWithChildren<Omit<({
        async?: boolean | undefined;
        isOpen?: boolean | undefined;
        maxMenuHeight?: string | undefined;
        menuCSS?: string | undefined;
        menuItemComponent?: React.ComponentType<any> | undefined;
        placement?: import("components/forms/selectors/Dropdown").MenuPlacement | undefined;
        returnItemOnChange?: boolean | undefined;
        shouldFilterOptions?: boolean | undefined;
        trigger?: React.ReactNode;
        useRawOptions?: boolean | undefined;
    } & {
        selectedKey?: SelectorItemKey;
        onChange?: import("components/forms/selectors/types").OnItemSelectedFunc | undefined;
    } & {
        label?: React.ReactNode;
        message?: React.ReactNode;
        hint?: React.ReactNode;
        emptyState?: React.ReactNode;
        disabled?: boolean | undefined;
        validation?: import("../Validation.type").Validation | undefined;
    } & import("../../../styles/types").ContainerProps & {
        clearable?: boolean | undefined;
        options: import("components/forms/selectors/types").SelectorOption[];
        optionsKeyMap?: {
            [key: string]: import("components/forms/selectors/types").SelectorOption;
        } | undefined;
        keyField: string;
        valueField: string;
        onChange?: import("components/forms/selectors/types").OnItemSelectedFunc | undefined;
        onStateChange?: ((s: import("components/forms/selectors/types").StateChange) => void) | undefined;
        invalidOnNoSelection?: boolean | undefined;
        flat?: boolean | undefined;
        open?: boolean | undefined;
        small?: boolean | undefined;
    }) | ({
        async?: boolean | undefined;
        isOpen?: boolean | undefined;
        maxMenuHeight?: string | undefined;
        menuCSS?: string | undefined;
        menuItemComponent?: React.ComponentType<any> | undefined;
        placement?: import("components/forms/selectors/Dropdown").MenuPlacement | undefined;
        returnItemOnChange?: boolean | undefined;
        shouldFilterOptions?: boolean | undefined;
        trigger?: React.ReactNode;
        useRawOptions?: boolean | undefined;
    } & {
        selectedKeys?: SelectorItemKey[] | undefined;
        onChange?: import("components/forms/selectors/types").OnItemSelectedFunc | undefined;
    } & {
        label?: React.ReactNode;
        message?: React.ReactNode;
        hint?: React.ReactNode;
        emptyState?: React.ReactNode;
        disabled?: boolean | undefined;
        validation?: import("../Validation.type").Validation | undefined;
    } & import("../../../styles/types").ContainerProps & {
        clearable?: boolean | undefined;
        options: import("components/forms/selectors/types").SelectorOption[];
        optionsKeyMap?: {
            [key: string]: import("components/forms/selectors/types").SelectorOption;
        } | undefined;
        keyField: string;
        valueField: string;
        onChange?: import("components/forms/selectors/types").OnItemSelectedFunc | undefined;
        onStateChange?: ((s: import("components/forms/selectors/types").StateChange) => void) | undefined;
        invalidOnNoSelection?: boolean | undefined;
        flat?: boolean | undefined;
        open?: boolean | undefined;
        small?: boolean | undefined;
    }), "keyField" | "valueField"> & {
        keyField?: string | undefined;
        valueField?: string | undefined;
    }>>;
    argTypes: {};
};
export default _default;
export declare const Default: () => JSX.Element;
//# sourceMappingURL=Dropdown.stories.d.ts.map