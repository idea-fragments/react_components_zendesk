import { Common as CommonSelectorProps, MultiSelectorProps, SelectorOption, SelectorProps } from "components/forms/selectors/types";
import React, { ComponentType, PropsWithChildren, ReactNode } from "react";
import { FlattenInterpolation, ThemeProps } from "styled-components";
import { CSS } from "styles/types";
export type MenuPlacement = "start" | "auto" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "end" | "end-top" | "end-bottom" | "start-top" | "start-bottom";
type OptionalSelectorProps<T> = Partial<Pick<CommonSelectorProps<T>, "keyField" | "labelField">>;
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
type SelectorsProps<T> = (CommonProps & SelectorProps<T>) | (CommonProps & MultiSelectorProps<T>);
export type DropdownProps<T> = Omit<SelectorsProps<T>, "keyField" | "labelField" | "options"> & OptionalSelectorProps<T> & ({
    options: SelectorOption<T>[];
    useRawOptions?: false;
} | {
    options: ReactNode[];
    useRawOptions: true;
});
export declare const CLEAR_OPTION: {
    label: string;
    value: string;
    isClearingItem: boolean;
};
export declare let Dropdown: <T>(props: React.PropsWithChildren<DropdownProps<T>>) => import("react/jsx-runtime").JSX.Element;
export declare const Autocomplete: React.ComponentType<any>;
export declare const Select: React.ComponentType<any>;
export declare const MultiSelect: import("styled-components").StyledComponent<React.ComponentType<any>, import("styled-components").DefaultTheme, {}, never>;
export {};
//# sourceMappingURL=Dropdown.d.ts.map