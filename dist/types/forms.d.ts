/// <reference types="trusted-types" />
import react, { ReactNode, InputHTMLAttributes, ChangeEvent, FC, ComponentType, PropsWithChildren, SVGAttributes, Ref } from 'react';
import { ValueOf } from 'utils/types';
import * as styled_components from 'styled-components';
import { FlattenSimpleInterpolation, FlattenInterpolation, ThemeProps } from 'styled-components';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { IItemProps } from '@zendeskgarden/react-dropdowns/dist/typings/types';
import { StateChangeOptions } from 'downshift';
import { Moment } from 'moment';
import { Nullable } from 'global';

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
type TextFieldProps<V = string> = Pick<InputHTMLAttributes<HTMLInputElement>, "autoComplete" | "inputMode" | "placeholder" | "step" | "type"> & {
    faux?: boolean;
    onChange: (value: V, event: ChangeEvent<HTMLInputElement>) => void;
    small?: boolean;
    symbolProp?: string;
    value?: V;
} & FormFieldProps;

type DatePickerSelectorProps = {
    minimumDate?: Date;
    disabledDates: Array<Date>;
    onChange: (d: Date) => void;
} & Omit<TextFieldProps<Date>, "onChange">;
declare const DatePickerSelector: FC<DatePickerSelectorProps>;

type DateRange = {
    startDate: Date;
    endDate: Date;
};

type DateRangePickerSelectorProps = {
    disabledDates?: Array<Date>;
    maxDate?: Date;
    minimumDate?: Date;
    value?: DateRange;
    onChange: (range: DateRange) => void;
} & Omit<TextFieldProps, "onChange" | "value">;
declare const DateRangePickerSelector: FC<DateRangePickerSelectorProps>;

type DateRangeSelectorProps = {
    disabledDates?: Array<Date>;
    endDateProps?: Partial<Omit<DatePickerSelectorProps, "onChange" | "value">>;
    minimumDate?: Date;
    startDateProps?: Partial<Omit<DatePickerSelectorProps, "onChange" | "value">>;
    value?: DateRange;
    onChange: (range: DateRange) => void;
};
declare const DateRangeSelector: FC<DateRangeSelectorProps>;

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
type SelectorOption<T> = T & SelectorOptionOptionalAttrs;
type OnItemSelectedFunc<T = any> = ((k: SelectorItemKey) => void) | ((o: SelectorOption<T> | null | undefined) => void);
type OnItemsSelectedFunc<T> = ((ks: SelectorItemKey[]) => void) | ((o: SelectorOption<T>[] | null | undefined) => void);
type StateChange<T> = StateChangeOptions<SelectorOption<T>>;
type Common<T> = FormFieldProps & {
    appendMenuToNode?: HTMLElement;
    clearable?: boolean;
    options: SelectorOption<T>[];
    optionsKeyMap?: {
        [key: string]: SelectorOption<T>;
    };
    keyField: keyof T;
    labelField: keyof T;
    maxMenuHeight?: string;
    menuPopperModifiers?: Record<string, any>[] | undefined;
    placement?: MenuPlacement;
    onStateChange?: (s: StateChange<T>) => void;
    invalidOnNoSelection?: boolean;
    flat?: boolean;
    open?: boolean;
    small?: boolean;
};
type SelectorProps<T> = {
    selectedKey?: SelectorItemKey;
    onChange?: OnItemSelectedFunc<T>;
} & Common<T>;
type MultiSelectorProps<T> = {
    maxItems?: number;
    onChange?: OnItemsSelectedFunc<T>;
    selectedKeys: SelectorItemKey[];
} & Common<T>;

type MenuPlacement = "start" | "auto" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "end" | "end-top" | "end-bottom" | "start-top" | "start-bottom";
type OptionalSelectorProps<T> = Partial<Pick<Common<T>, "keyField" | "labelField">>;
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
type DropdownProps<T> = Omit<SelectorsProps<T>, "keyField" | "labelField" | "options"> & OptionalSelectorProps<T> & ({
    options: SelectorOption<T>[];
    useRawOptions?: false;
} | {
    options: ReactNode[];
    useRawOptions: true;
});
declare const CLEAR_OPTION: {
    label: string;
    value: string;
    isClearingItem: boolean;
};
declare let Dropdown: <T>(props: react.PropsWithChildren<DropdownProps<T>>) => react_jsx_runtime.JSX.Element;
declare const Autocomplete: react.ComponentType<any>;
declare const Select: react.ComponentType<any>;
declare const MultiSelect: styled_components.StyledComponent<react.ComponentType<any>, styled_components.DefaultTheme, {}, never>;

declare let Selector: <T>({ disabled, invalidOnNoSelection, validation, ...props }: SelectorProps<T>) => react_jsx_runtime.JSX.Element;

declare let MultiSelector: <T>({ emptyState, maxItems, validation, ...props }: MultiSelectorProps<T>) => react_jsx_runtime.JSX.Element;

type RadioButtonProps = {
    checked?: boolean;
    color?: string;
    disabled?: boolean;
    name: string;
    value: string;
    onChange: (value: string) => void;
} & Omit<FormFieldProps, "onChange">;
declare let RadioButton: FC<RadioButtonProps>;

type RadioButtonOption = {
    color?: string;
    disabled?: boolean;
    hint?: string;
    label: string;
    value: string;
};
type RadioButtonGroupProps = {
    checkedOption?: string;
    color?: string;
    disabled?: boolean;
    name: string;
    options: Array<RadioButtonOption>;
    onChange: (value: string) => void;
} & Omit<FormFieldProps, "onChange">;
declare const RadioButtonGroup: FC<RadioButtonGroupProps>;

type SearchableSelectorProps<T> = {
    children?: (o: SelectorOption<T>) => void | ReactNode;
} & SelectorProps<T>;
declare let SearchableSelector: <T>({ children, disabled, ...props }: SearchableSelectorProps<T>) => react_jsx_runtime.JSX.Element;

type Props$3 = {
    minimumDate?: Moment;
} & TextFieldProps;
declare const MonthYearSelector: (props: Props$3) => react_jsx_runtime.JSX.Element;

type SelectorOptionKeyMapParams<T> = Pick<SelectorProps<T>, "keyField" | "options" | "optionsKeyMap">;
declare class SelectorOptionKeyMap {
    static call<T>({ keyField, options, optionsKeyMap, }: SelectorOptionKeyMapParams<T>): {
        [key: string]: SelectorOption<T>;
    };
}

declare class ArrayToSelectorOptionsConverter {
    static call(list: SelectorItemKey[]): SelectorOption<{
        label: SelectorItemKey;
        key: SelectorItemKey;
    }>[];
}

declare const EmailTextField: (props: TextFieldProps<any>) => react_jsx_runtime.JSX.Element;

type NumberTextFieldChangeValue = {
    inputValue: string;
    numberValue: number;
};
declare let NumberTextField: ({ onChange, step, value: numberValue, ...props }: TextFieldProps<NumberTextFieldChangeValue>) => react_jsx_runtime.JSX.Element;

type Props$2 = TextFieldProps<any> & {
    newPassword?: boolean;
};
declare const PasswordTextField: ({ newPassword, ...props }: Props$2) => react_jsx_runtime.JSX.Element;

declare let TextField: react.ForwardRefExoticComponent<Pick<react.InputHTMLAttributes<HTMLInputElement>, "type" | "placeholder" | "inputMode" | "autoComplete" | "step"> & {
    faux?: boolean | undefined;
    onChange: (value: string, event: react.ChangeEvent<HTMLInputElement>) => void;
    small?: boolean | undefined;
    symbolProp?: string | undefined;
    value?: string | undefined;
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
type Props$1 = PropsWithChildren<{
    WrappedComponent: ComponentType<Omit<FieldProps, "onChange" | "validation"> & {
        onChange: ((e: ChangeEvent<HTMLInputElement>) => void) | ((e: ChangeEvent<HTMLTextAreaElement>) => void);
        validation?: string;
    }>;
    compact?: boolean;
}> & FieldProps;
declare let TextFieldWrapper: react.ForwardRefExoticComponent<Props$1 & react.RefAttributes<unknown>>;

type SVGComponent = ComponentType<SVGAttributes<any>>;

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
    icon?: Nullable<string | SVGComponent | ComponentType | ReactNode>;
    iconPosition?: "left" | "right";
    iconSize?: string;
    inline?: boolean;
    innerAs?: string;
    innerRef?: Ref<HTMLButtonElement>;
    loading?: boolean;
    pill?: boolean;
    primary?: boolean;
    size?: ButtonSize;
    wrapInlineText?: boolean;
    onClick: () => void;
}> & CSSProp & ColorProps & ContainerProps;
type ControlledLoadable = {
    loading?: boolean;
    onClick: () => void;
};
type ButtonProps = (ButtonBaseProps & ControlledLoadable) | (ButtonBaseProps & AutoLoadable);
declare const Button: ComponentType<ButtonProps>;

type Option = {
    label: string;
    value: string;
};
type CycleButtonProps = Omit<ButtonProps, "onClick"> & {
    options: Array<Option>;
    selectedOption: string;
    onCycleChanged: (value: string) => void;
};
declare const CycleButton: ({ options, selectedOption, onCycleChanged, ...buttonProps }: CycleButtonProps) => react_jsx_runtime.JSX.Element;

type FileChangeHandler = {
    multiple?: false;
    onFileChange: (f: File) => void;
    onFilesChange?: (files: File[]) => void;
} | {
    multiple: true;
    onFileChange?: (f: File) => void;
    onFilesChange: (files: File[]) => void;
};
type FileButtonProps = Omit<ButtonProps, "onClick"> & FileChangeHandler & {
    fileTypes: Nullable<Array<InputHTMLAttributes<HTMLInputElement>['accept']>>;
};
declare const FileButton: FC<FileButtonProps>;

type IconButtonProps = Omit<ButtonProps, "children">;
declare const IconButton: styled_components.StyledComponent<({ primary, flat, pill, ...props }: IconButtonProps) => react_jsx_runtime.JSX.Element, styled_components.DefaultTheme, IconButtonProps, never>;

type CheckboxProps = FormFieldProps & {
    checked?: boolean;
    indeterminate?: boolean;
    onChange: (checked: boolean) => void;
};
declare let Checkbox: ({ checked: checkedProp, compact, emptyState, fluid, hint, indeterminate, label, message, validation, onChange, ...props }: CheckboxProps) => react_jsx_runtime.JSX.Element;

type MediaQuery = (styles: CSS) => CSS;

type ResponsiveProps<P> = {
    mediaQueryFunc: MediaQuery;
    props: P;
};
type FlexBoxProps = {
    alignItems?: string;
    gap?: string | null | "unset";
    fluid?: boolean;
    inline?: boolean;
    justifyContent?: string;
    responsivePropsList?: ResponsiveProps<FlexBoxProps>[];
    withRows?: boolean;
    wrapped?: boolean;
} & CSSProp;

type FormProps = PropsWithChildren<{
    onSubmit: PromiseFunc;
}> & ContainerProps & FlexBoxProps;
declare let Form: FC<FormProps>;

type NPSScore = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type NPSQuestionProps = {
    label: ReactNode;
    onChange: (n: NPSScore) => void;
    value: Nullable<NPSScore>;
};
declare const NPSQuestion: FC<NPSQuestionProps>;

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

type FullSpectrumColors = {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
};

type TaggedToggleProps = Omit<ToggleProps, "color"> & {
    active?: boolean;
    activeText?: string;
    color?: FullSpectrumColors;
    inactiveText?: string;
    toggleColor?: string;
};
declare const TaggedToggle: ({ active, checked, color, activeText, label, inactiveText, onChange, success, toggleColor, ...props }: TaggedToggleProps) => react_jsx_runtime.JSX.Element;

type ValidatedFormProps = {
    invalidFields: {
        [key: string]: Array<string>;
    };
};

export { ArrayToSelectorOptionsConverter, Autocomplete, BUTTON_SIZES, Button, ButtonProps, ButtonSize, CLEAR_OPTION, Checkbox, CheckboxProps, Common, CycleButton, DatePickerSelector, DatePickerSelectorProps, DateRangePickerSelector, DateRangePickerSelectorProps, DateRangeSelector, DateRangeSelectorProps, Dropdown, DropdownProps, EmailTextField, FileButton, FileButtonProps, Form, FormFieldProps, FormProps, IconButton, IconButtonProps, MenuPlacement, MonthYearSelector, MultiSelect, MultiSelector, MultiSelectorProps, NPSQuestion, NPSQuestionProps, NPSScore, NumberTextField, NumberTextFieldChangeValue, OnItemSelectedFunc, OnItemsSelectedFunc, PasswordTextField, RadioButton, RadioButtonGroup, RadioButtonGroupProps, RadioButtonOption, RadioButtonProps, SearchableSelector, SearchableSelectorProps, Select, Selector, SelectorItemKey, SelectorOption, SelectorOptionKeyMap, SelectorOptionKeyMapParams, SelectorOptionOptionalAttrs, SelectorProps, StateChange, TaggedToggle, TaggedToggleProps, TextArea, TextAreaProps, TextField, TextFieldProps, TextFieldWrapper, Toggle, ToggleProps, VALIDATION_STATES, ValidatedFormProps, Validation, ValidationState };
