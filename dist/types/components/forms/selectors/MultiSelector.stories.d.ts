import { SelectorItemKey, SelectorProps } from "components/forms/selectors/types";
import React from "react";
declare const _default: {
    title: string;
    component: ({ maxItems, ...props }: {
        maxItems?: number | undefined;
        selectedKeys: SelectorItemKey[];
    } & {
        selectedKeys?: SelectorItemKey[] | undefined;
        onChange?: import("components/forms/selectors/types").OnItemsSelectedFunc | undefined;
    } & {
        disabled?: boolean | undefined;
        emptyState?: React.ReactNode;
        hint?: React.ReactNode;
        label?: React.ReactNode;
        message?: React.ReactNode;
        required?: boolean | undefined;
        validation?: import("../Validation.type").Validation | undefined;
    } & import("../../../styles/types").ContainerProps & {
        appendMenuToNode?: HTMLElement | undefined;
        clearable?: boolean | undefined;
        options: import("components/forms/selectors/types").SelectorOption[];
        optionsKeyMap?: {
            [key: string]: import("components/forms/selectors/types").SelectorOption;
        } | undefined;
        keyField: string;
        labelField: string;
        valueField?: string | undefined;
        maxMenuHeight?: string | undefined;
        menuPopperModifiers?: Record<string, any>[] | undefined;
        placement?: import("./Dropdown").MenuPlacement | undefined;
        onStateChange?: ((s: import("components/forms/selectors/types").StateChange) => void) | undefined;
        invalidOnNoSelection?: boolean | undefined;
        flat?: boolean | undefined;
        open?: boolean | undefined;
        small?: boolean | undefined;
    }) => JSX.Element;
    argTypes: {};
};
export default _default;
export declare const Default: (args: SelectorProps) => JSX.Element;
//# sourceMappingURL=MultiSelector.stories.d.ts.map