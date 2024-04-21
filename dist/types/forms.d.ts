/// <reference types="trusted-types" />
/// <reference types="react" />
import * as react_jsx_runtime from 'react/jsx-runtime';
import react, { ReactNode, ChangeEvent, ComponentType, PropsWithChildren, FC, Ref } from 'react';
import { ValueOf } from 'utils/types';
import * as styled_components from 'styled-components';
import { FlattenSimpleInterpolation, FlattenInterpolation, ThemeProps } from 'styled-components';
import { Moment } from 'moment';
import { IItemProps } from '@zendeskgarden/react-dropdowns/dist/typings/types';
import { StateChangeOptions } from 'downshift';

declare const VALIDATION_STATES: {
    readonly ERROR: "error";
    readonly WARNING: "warning";
    readonly SUCCESS: "success";
    readonly NONE: undefined;
};

type ValidationState = ValueOf<typeof VALIDATION_STATES>;
type Validation = {
    validation: ValidationState;
    message?: ReactNode;
};

type ColorProps = {
    accent?: boolean;
    color?: string;
    danger?: boolean;
    neutral?: boolean;
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    warning?: boolean;
};
type ContainerProps = {
    _css?: CSS;
    color?: string;
    compact?: boolean;
    fluid?: boolean;
    className?: any;
};
type CSS<T = any> = FlattenSimpleInterpolation | string | T;
type CSSProp<T = any> = {
    _css?: CSS<T>;
    className?: string;
};

type FormFieldProps = {
    disabled?: boolean;
    emptyState?: ReactNode;
    hint?: ReactNode;
    label?: ReactNode;
    message?: ReactNode;
    required?: boolean;
    validation?: Validation | undefined;
} & ContainerProps;
type TextFieldProps<V = string> = {
    autoComplete?: string;
    faux?: boolean;
    small?: boolean;
    type?: string;
    value?: V;
    onChange: (value: V, event: ChangeEvent<HTMLInputElement>) => void;
} & FormFieldProps;

type Props$b = {
    minimumDate?: Moment;
    disabledDates: Array<Moment>;
    onChange: (d: Moment) => void;
} & Omit<TextFieldProps, "onChange">;
declare const DatePickerSelector: {
    (props: Props$b): react_jsx_runtime.JSX.Element;
    COMPONENT_NAME: string;
    defaultProps: {
        onChange: (...args: any) => void;
        emptyState: string;
        disabledDates: never[];
        disabled: boolean;
    };
};

type ItemProps = Omit<IItemProps, "onClick"> & {
    danger?: boolean;
    disabled?: boolean;
} & CSSProp;

type SelectorItemKey = string | number | null | undefined;
type SelectorOptionOptionalAttrs = {
    Component?: ComponentType<PropsWithChildren<Record<string, any>>>;
    componentProps?: Record<string, any>;
    isClearingItem?: boolean;
    isNextItem?: boolean;
    isBackItem?: boolean;
    isAddItem?: boolean;
    isHeaderItem?: boolean;
    itemProps?: Partial<ItemProps>;
};
type SelectorOption = {
    [key: string]: any;
} & SelectorOptionOptionalAttrs;
type OnItemSelectedFunc = ((k: SelectorItemKey) => void) | ((o: SelectorOption | null | undefined) => void);
type OnItemsSelectedFunc = ((ks: SelectorItemKey[]) => void) | ((o: SelectorOption[] | null | undefined) => void);
type StateChange = StateChangeOptions<SelectorOption>;
type Common = FormFieldProps & {
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
type SelectorProps = {
    selectedKey?: SelectorItemKey;
    onChange?: OnItemSelectedFunc;
} & Common;
type MultiSelectorProps = {
    selectedKeys?: SelectorItemKey[];
    onChange?: OnItemsSelectedFunc;
} & Common;

type MenuPlacement = "start" | "auto" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "end" | "end-top" | "end-bottom" | "start-top" | "start-bottom";
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
type Props$a = Omit<SelectorsProps, "keyField" | "labelField"> & OptionalSelectorProps;
declare let Dropdown: FC<PropsWithChildren<Props$a>>;
declare const Autocomplete: react.ComponentType<any>;
declare const Select: react.ComponentType<any>;
declare const MultiSelect: styled_components.StyledComponent<react.ComponentType<any>, styled_components.DefaultTheme, {}, never>;

declare let Selector: ({ disabled, ...props }: SelectorProps) => react_jsx_runtime.JSX.Element;

type Props$9 = {
    maxItems?: number;
    selectedKeys: Array<SelectorItemKey>;
} & MultiSelectorProps;
declare let MultiSelector: ({ maxItems, ...props }: Props$9) => react_jsx_runtime.JSX.Element;

type Props$8 = {
    children?: (o: SelectorOption) => void | ReactNode;
    onSearchTextChange?: (s: string) => void;
} & SelectorProps;
declare let SearchableSelector: FC<Props$8>;

type Props$7 = {
    minimumDate?: Moment;
} & TextFieldProps;
declare const MonthYearSelector: (props: Props$7) => react_jsx_runtime.JSX.Element;

type SelectorOptionKeyMapParams = Pick<SelectorProps, "keyField" | "options" | "optionsKeyMap">;
declare class SelectorOptionKeyMap {
    static call({ keyField, options, optionsKeyMap, }: SelectorOptionKeyMapParams): {
        [key: string]: SelectorOption;
    };
}

declare class ArrayToSelectorOptionsConverter {
    static call(list: SelectorItemKey[]): SelectorOption[];
}

declare const EmailTextField: (props: TextFieldProps<any>) => react_jsx_runtime.JSX.Element;

declare let NumberTextField: ({ onChange, value: numberValue, ...props }: TextFieldProps<number>) => react_jsx_runtime.JSX.Element;

type Props$6 = TextFieldProps<any> & {
    newPassword?: boolean;
};
declare const PasswordTextField: ({ newPassword, ...props }: Props$6) => react_jsx_runtime.JSX.Element;

declare let TextField: react.ForwardRefExoticComponent<{
    autoComplete?: string | undefined;
    faux?: boolean | undefined;
    small?: boolean | undefined;
    type?: string | undefined;
    value?: string | undefined;
    onChange: (value: string, event: react.ChangeEvent<HTMLInputElement>) => void;
} & {
    disabled?: boolean | undefined;
    emptyState?: react.ReactNode;
    hint?: react.ReactNode;
    label?: react.ReactNode;
    message?: react.ReactNode;
    required?: boolean | undefined;
    validation?: Validation | undefined;
} & ContainerProps & react.RefAttributes<unknown>>;

type TextAreaProps = FormFieldProps & {
    autoExpand?: boolean;
    characterLimit?: number;
    resizable?: boolean;
    value?: string;
    onChange: (text: string, e: ChangeEvent<HTMLTextAreaElement>) => void;
};
declare const TextArea: FC<TextAreaProps>;

type FieldProps = TextFieldProps | TextAreaProps;
type Props$5 = PropsWithChildren<{
    WrappedComponent: ComponentType<Omit<FieldProps, "onChange" | "validation"> & {
        onChange: ((e: ChangeEvent<HTMLInputElement>) => void) | ((e: ChangeEvent<HTMLTextAreaElement>) => void);
        validation?: string;
    }>;
    compact?: boolean;
}> & FieldProps;
declare let TextFieldWrapper: react.ForwardRefExoticComponent<Props$5 & react.RefAttributes<unknown>>;

declare const ALIGNMENTS: {
    readonly start: "flex-start";
    readonly center: "center";
    readonly end: "flex-end";
};
type Alignment = ValueOf<typeof ALIGNMENTS>;

type PromiseFunc<T = any, Rtn = any> = (...o: T[]) => Promise<Rtn>;

declare const BUTTON_SIZES: {
    readonly SMALL: "small";
    readonly LARGE: "large";
};
type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
type AutoLoadable = {
    autoLoadable: true;
    onClick: PromiseFunc;
};
type ButtonBaseProps = PropsWithChildren<{
    alignItems?: string;
    alignSelf?: Alignment;
    autoLoadable?: boolean;
    disabled?: boolean;
    flat?: boolean;
    groupKey?: string;
    icon?: string | ComponentType;
    iconPosition?: "left" | "right";
    iconSize?: string;
    inline?: boolean;
    innerAs?: string;
    innerRef?: Ref<HTMLButtonElement>;
    loading?: boolean;
    pill?: boolean;
    primary?: boolean;
    size?: ButtonSize;
    wrapInlineText?: false;
    onClick: () => void;
}> & CSSProp & ColorProps & ContainerProps;
type ControlledLoadable = {
    loading?: boolean;
    onClick: () => void;
};
type Props$4 = (ButtonBaseProps & ControlledLoadable) | (ButtonBaseProps & AutoLoadable);
type ButtonProps = Props$4;
declare const Button: ComponentType<ButtonProps>;

type Option = {
    label: string;
    value: string;
};
type Props$3 = Omit<Props$4, "onClick"> & {
    options: Array<Option>;
    selectedOption: string;
    onCycleChanged: (value: string) => void;
};
declare const CycleButton: ({ options, selectedOption, onCycleChanged, ...buttonProps }: Props$3) => react_jsx_runtime.JSX.Element;

type Props$2 = Omit<Props$4, "children">;
declare const IconButton: styled_components.StyledComponent<({ primary, flat, pill, ...props }: Props$2) => JSX.Element, styled_components.DefaultTheme, Props$2, never>;

type CheckboxProps = FormFieldProps & {
    checked?: boolean;
    indeterminate?: boolean;
    onChange: (checked: boolean) => void;
};
declare let Checkbox: ({ checked: checkedProp, compact, emptyState, fluid, hint, indeterminate, label, message, validation, onChange, ...props }: CheckboxProps) => react_jsx_runtime.JSX.Element;

type Props$1 = PropsWithChildren<{
    onSubmit: PromiseFunc;
}> & ContainerProps;
declare let Form: FC<Props$1>;

type Props = {
    checked?: boolean;
    color?: string;
    disabled?: boolean;
    hint?: ReactNode;
    label?: string;
    onChange: (checked: boolean) => void;
    success?: boolean;
};
type ToggleProps = Props;
declare let Toggle: FC<Props>;

type TaggedToggleProps = ToggleProps & {
    active?: boolean;
    activeText?: string;
    inactiveText?: string;
    toggleColor?: string;
};
declare const TaggedToggle: ({ active, checked, color, activeText, label, inactiveText, onChange, success, toggleColor, ...props }: TaggedToggleProps) => react_jsx_runtime.JSX.Element;

type ValidatedFormProps = {
    invalidFields: {
        [key: string]: Array<string>;
    };
};

export { ArrayToSelectorOptionsConverter, Autocomplete, BUTTON_SIZES, Button, ButtonProps, ButtonSize, Checkbox, CheckboxProps, CycleButton, DatePickerSelector, Dropdown, EmailTextField, Form, FormFieldProps, IconButton, MenuPlacement, MonthYearSelector, MultiSelect, MultiSelector, MultiSelectorProps, NumberTextField, OnItemSelectedFunc, OnItemsSelectedFunc, PasswordTextField, Props$4 as Props, SearchableSelector, Select, Selector, SelectorItemKey, SelectorOption, SelectorOptionKeyMap, SelectorOptionKeyMapParams, SelectorOptionOptionalAttrs, SelectorProps, StateChange, TaggedToggle, TaggedToggleProps, TextArea, TextAreaProps, TextField, TextFieldProps, TextFieldWrapper, Toggle, ToggleProps, VALIDATION_STATES, ValidatedFormProps, Validation, ValidationState };
