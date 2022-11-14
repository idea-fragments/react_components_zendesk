import { MultiSelectorProps, SelectorProps } from "components/forms/selectors/types";
import React, { ComponentType, FC, PropsWithChildren, ReactNode } from "react";
import { CSS } from "styles/types";
export declare type MenuPlacement = "start" | "auto" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "end" | "end-top" | "end-bottom" | "start-top" | "start-bottom";
declare type OptionalSelectorProps = {
    keyField?: string;
    labelField?: string;
};
declare type CommonProps = {
    _css?: CSS;
    appendMenuToNode?: HTMLElement;
    async?: boolean;
    isOpen?: boolean;
    maxMenuHeight?: string;
    menuCSS?: string;
    menuItemComponent?: ComponentType<any>;
    placement?: MenuPlacement;
    returnItemOnChange?: boolean;
    shouldFilterOptions?: boolean;
    trigger?: ReactNode;
    useRawOptions?: boolean;
};
declare type SelectorsProps = (CommonProps & SelectorProps) | (CommonProps & MultiSelectorProps);
declare type Props = Omit<SelectorsProps, "keyField" | "labelField"> & OptionalSelectorProps;
export declare let Dropdown: FC<PropsWithChildren<Props>>;
export declare const Autocomplete: React.ComponentType<any>;
export declare const Select: React.ComponentType<any>;
export declare const MultiSelect: import("styled-components").StyledComponent<React.ComponentType<any>, any, {}, never>;
export {};
//# sourceMappingURL=Dropdown.d.ts.map