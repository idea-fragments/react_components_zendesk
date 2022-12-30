import { SelectorItemKey, SelectorProps } from "components/forms/selectors/types";
import React from "react";
declare const _default: {
    title: string;
    component: React.FC<{
        children?: ((o: import("components/forms/selectors/types").SelectorOption) => void | React.ReactNode) | undefined;
        onSearchTextChange?: ((s: string) => void) | undefined;
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
        onChange?: import("components/forms/selectors/types").OnItemSelectedFunc | undefined;
        onStateChange?: ((s: import("components/forms/selectors/types").StateChange) => void) | undefined;
        invalidOnNoSelection?: boolean | undefined;
        flat?: boolean | undefined;
        open?: boolean | undefined;
        small?: boolean | undefined;
    }>;
    argTypes: {};
};
export default _default;
export declare const Default: (args: SelectorProps) => JSX.Element;
//# sourceMappingURL=SearchableSelector.stories.d.ts.map