import { MultiSelectorProps, SelectorProps } from "components/forms/selectors/types";
import React, { ComponentType, FC, PropsWithChildren, ReactNode } from "react";
import { FlattenInterpolation, ThemeProps } from "styled-components";
import { CSS } from "styles/types";
export type MenuPlacement = "start" | "auto" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "end" | "end-top" | "end-bottom" | "start-top" | "start-bottom";
type OptionalSelectorProps = {
    keyField?: string;
    labelField?: string;
};
type CommonProps = {
    _css?: CSS;
    appendMenuToNode?: HTMLElement;
    async?: boolean;
    isOpen?: boolean;
    maxMenuHeight?: string;
    menuCSS?: string | FlattenInterpolation<ThemeProps<any>>;
    menuItemComponent?: ComponentType<any>;
    placement?: MenuPlacement;
    returnItemOnChange?: boolean;
    shouldFilterOptions?: boolean;
    small?: boolean;
    trigger?: ReactNode;
    useRawOptions?: boolean;
};
type SelectorsProps = (CommonProps & SelectorProps) | (CommonProps & MultiSelectorProps);
type Props = Omit<SelectorsProps, "keyField" | "labelField"> & OptionalSelectorProps;
export declare let Dropdown: FC<PropsWithChildren<Props>>;
export declare const Autocomplete: React.ComponentType<any>;
export declare const Select: React.ComponentType<any>;
export declare const MultiSelect: import("styled-components").StyledComponent<React.ComponentType<any>, import("styled-components").DefaultTheme, {}, never>;
export {};
//# sourceMappingURL=Dropdown.d.ts.map