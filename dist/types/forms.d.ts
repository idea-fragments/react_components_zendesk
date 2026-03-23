/// <reference types="trusted-types" />
import * as react from 'react';
import react__default, { ReactNode, InputHTMLAttributes, ChangeEvent, FC, ComponentType, PropsWithChildren, TextareaHTMLAttributes, SVGAttributes, Ref } from 'react';
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

type ItemProps = Omit<IItemProps, "onClick"> & {
    danger?: boolean;
    disabled?: boolean;
} & CSSProp;
declare const Item: styled_components.StyledComponent<react.ForwardRefExoticComponent<IItemProps & react.RefAttributes<HTMLLIElement>>, styled_components.DefaultTheme, {
    slot?: string | undefined;
    style?: react.CSSProperties | undefined;
    title?: string | undefined;
    color: string;
    children?: react.ReactNode;
    suppressHydrationWarning?: boolean | undefined;
    className?: string | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    role?: react.AriaRole | undefined;
    tabIndex?: number | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: (boolean | "true" | "false") | undefined;
    'aria-autocomplete'?: "inline" | "none" | "list" | "both" | undefined;
    'aria-braillelabel'?: string | undefined;
    'aria-brailleroledescription'?: string | undefined;
    'aria-busy'?: (boolean | "true" | "false") | undefined;
    'aria-checked'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colindextext'?: string | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?: boolean | "time" | "step" | "date" | "true" | "false" | "page" | "location" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-description'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: (boolean | "true" | "false") | undefined;
    'aria-dropeffect'?: "link" | "none" | "copy" | "execute" | "move" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: (boolean | "true" | "false") | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: (boolean | "true" | "false") | undefined;
    'aria-haspopup'?: boolean | "dialog" | "menu" | "grid" | "listbox" | "tree" | "true" | "false" | undefined;
    'aria-hidden'?: (boolean | "true" | "false") | undefined;
    'aria-invalid'?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: (boolean | "true" | "false") | undefined;
    'aria-multiline'?: (boolean | "true" | "false") | undefined;
    'aria-multiselectable'?: (boolean | "true" | "false") | undefined;
    'aria-orientation'?: "horizontal" | "vertical" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-readonly'?: (boolean | "true" | "false") | undefined;
    'aria-relevant'?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    'aria-required'?: (boolean | "true" | "false") | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowindextext'?: string | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: (boolean | "true" | "false") | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: react.ClipboardEventHandler<HTMLLIElement> | undefined;
    onCopyCapture?: react.ClipboardEventHandler<HTMLLIElement> | undefined;
    onCut?: react.ClipboardEventHandler<HTMLLIElement> | undefined;
    onCutCapture?: react.ClipboardEventHandler<HTMLLIElement> | undefined;
    onPaste?: react.ClipboardEventHandler<HTMLLIElement> | undefined;
    onPasteCapture?: react.ClipboardEventHandler<HTMLLIElement> | undefined;
    onCompositionEnd?: react.CompositionEventHandler<HTMLLIElement> | undefined;
    onCompositionEndCapture?: react.CompositionEventHandler<HTMLLIElement> | undefined;
    onCompositionStart?: react.CompositionEventHandler<HTMLLIElement> | undefined;
    onCompositionStartCapture?: react.CompositionEventHandler<HTMLLIElement> | undefined;
    onCompositionUpdate?: react.CompositionEventHandler<HTMLLIElement> | undefined;
    onCompositionUpdateCapture?: react.CompositionEventHandler<HTMLLIElement> | undefined;
    onFocus?: react.FocusEventHandler<HTMLLIElement> | undefined;
    onFocusCapture?: react.FocusEventHandler<HTMLLIElement> | undefined;
    onBlur?: react.FocusEventHandler<HTMLLIElement> | undefined;
    onBlurCapture?: react.FocusEventHandler<HTMLLIElement> | undefined;
    onChange?: react.FormEventHandler<HTMLLIElement> | undefined;
    onChangeCapture?: react.FormEventHandler<HTMLLIElement> | undefined;
    onBeforeInput?: react.FormEventHandler<HTMLLIElement> | undefined;
    onBeforeInputCapture?: react.FormEventHandler<HTMLLIElement> | undefined;
    onInput?: react.FormEventHandler<HTMLLIElement> | undefined;
    onInputCapture?: react.FormEventHandler<HTMLLIElement> | undefined;
    onReset?: react.FormEventHandler<HTMLLIElement> | undefined;
    onResetCapture?: react.FormEventHandler<HTMLLIElement> | undefined;
    onSubmit?: react.FormEventHandler<HTMLLIElement> | undefined;
    onSubmitCapture?: react.FormEventHandler<HTMLLIElement> | undefined;
    onInvalid?: react.FormEventHandler<HTMLLIElement> | undefined;
    onInvalidCapture?: react.FormEventHandler<HTMLLIElement> | undefined;
    onLoad?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onLoadCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onError?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onErrorCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onKeyDown?: react.KeyboardEventHandler<HTMLLIElement> | undefined;
    onKeyDownCapture?: react.KeyboardEventHandler<HTMLLIElement> | undefined;
    onKeyPress?: react.KeyboardEventHandler<HTMLLIElement> | undefined;
    onKeyPressCapture?: react.KeyboardEventHandler<HTMLLIElement> | undefined;
    onKeyUp?: react.KeyboardEventHandler<HTMLLIElement> | undefined;
    onKeyUpCapture?: react.KeyboardEventHandler<HTMLLIElement> | undefined;
    onAbort?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onAbortCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onCanPlay?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onCanPlayCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onCanPlayThrough?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onCanPlayThroughCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onDurationChange?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onDurationChangeCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onEmptied?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onEmptiedCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onEncrypted?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onEncryptedCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onEnded?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onEndedCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onLoadedData?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onLoadedDataCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onLoadedMetadata?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onLoadedMetadataCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onLoadStart?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onLoadStartCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onPause?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onPauseCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onPlay?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onPlayCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onPlaying?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onPlayingCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onProgress?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onProgressCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onRateChange?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onRateChangeCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onResize?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onResizeCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onSeeked?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onSeekedCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onSeeking?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onSeekingCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onStalled?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onStalledCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onSuspend?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onSuspendCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onTimeUpdate?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onTimeUpdateCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onVolumeChange?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onVolumeChangeCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onWaiting?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onWaitingCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onAuxClick?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onAuxClickCapture?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onClickCapture?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onContextMenu?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onContextMenuCapture?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onDoubleClick?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onDoubleClickCapture?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onDrag?: react.DragEventHandler<HTMLLIElement> | undefined;
    onDragCapture?: react.DragEventHandler<HTMLLIElement> | undefined;
    onDragEnd?: react.DragEventHandler<HTMLLIElement> | undefined;
    onDragEndCapture?: react.DragEventHandler<HTMLLIElement> | undefined;
    onDragEnter?: react.DragEventHandler<HTMLLIElement> | undefined;
    onDragEnterCapture?: react.DragEventHandler<HTMLLIElement> | undefined;
    onDragExit?: react.DragEventHandler<HTMLLIElement> | undefined;
    onDragExitCapture?: react.DragEventHandler<HTMLLIElement> | undefined;
    onDragLeave?: react.DragEventHandler<HTMLLIElement> | undefined;
    onDragLeaveCapture?: react.DragEventHandler<HTMLLIElement> | undefined;
    onDragOver?: react.DragEventHandler<HTMLLIElement> | undefined;
    onDragOverCapture?: react.DragEventHandler<HTMLLIElement> | undefined;
    onDragStart?: react.DragEventHandler<HTMLLIElement> | undefined;
    onDragStartCapture?: react.DragEventHandler<HTMLLIElement> | undefined;
    onDrop?: react.DragEventHandler<HTMLLIElement> | undefined;
    onDropCapture?: react.DragEventHandler<HTMLLIElement> | undefined;
    onMouseDown?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onMouseDownCapture?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onMouseEnter?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onMouseLeave?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onMouseMove?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onMouseMoveCapture?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onMouseOut?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onMouseOutCapture?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onMouseOver?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onMouseOverCapture?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onMouseUp?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onMouseUpCapture?: react.MouseEventHandler<HTMLLIElement> | undefined;
    onSelect?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onSelectCapture?: react.ReactEventHandler<HTMLLIElement> | undefined;
    onTouchCancel?: react.TouchEventHandler<HTMLLIElement> | undefined;
    onTouchCancelCapture?: react.TouchEventHandler<HTMLLIElement> | undefined;
    onTouchEnd?: react.TouchEventHandler<HTMLLIElement> | undefined;
    onTouchEndCapture?: react.TouchEventHandler<HTMLLIElement> | undefined;
    onTouchMove?: react.TouchEventHandler<HTMLLIElement> | undefined;
    onTouchMoveCapture?: react.TouchEventHandler<HTMLLIElement> | undefined;
    onTouchStart?: react.TouchEventHandler<HTMLLIElement> | undefined;
    onTouchStartCapture?: react.TouchEventHandler<HTMLLIElement> | undefined;
    onPointerDown?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onPointerDownCapture?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onPointerMove?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onPointerMoveCapture?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onPointerUp?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onPointerUpCapture?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onPointerCancel?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onPointerCancelCapture?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onPointerEnter?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onPointerEnterCapture?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onPointerLeave?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onPointerLeaveCapture?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onPointerOver?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onPointerOverCapture?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onPointerOut?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onPointerOutCapture?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onGotPointerCapture?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onGotPointerCaptureCapture?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onLostPointerCapture?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onLostPointerCaptureCapture?: react.PointerEventHandler<HTMLLIElement> | undefined;
    onScroll?: react.UIEventHandler<HTMLLIElement> | undefined;
    onScrollCapture?: react.UIEventHandler<HTMLLIElement> | undefined;
    onWheel?: react.WheelEventHandler<HTMLLIElement> | undefined;
    onWheelCapture?: react.WheelEventHandler<HTMLLIElement> | undefined;
    onAnimationStart?: react.AnimationEventHandler<HTMLLIElement> | undefined;
    onAnimationStartCapture?: react.AnimationEventHandler<HTMLLIElement> | undefined;
    onAnimationEnd?: react.AnimationEventHandler<HTMLLIElement> | undefined;
    onAnimationEndCapture?: react.AnimationEventHandler<HTMLLIElement> | undefined;
    onAnimationIteration?: react.AnimationEventHandler<HTMLLIElement> | undefined;
    onAnimationIterationCapture?: react.AnimationEventHandler<HTMLLIElement> | undefined;
    onTransitionEnd?: react.TransitionEventHandler<HTMLLIElement> | undefined;
    onTransitionEndCapture?: react.TransitionEventHandler<HTMLLIElement> | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoFocus?: boolean | undefined;
    contentEditable?: "inherit" | (boolean | "true" | "false") | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    hidden?: boolean | undefined;
    nonce?: string | undefined;
    placeholder?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    translate?: "no" | "yes" | undefined;
    radioGroup?: string | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "search" | "text" | "none" | "email" | "tel" | "url" | "numeric" | "decimal" | undefined;
    is?: string | undefined;
    disabled?: boolean | undefined;
    value?: any;
    isDanger?: boolean | undefined;
    component?: any;
    hasIcon?: boolean | undefined;
    _css?: any;
    primary: boolean;
} & Omit<IItemProps, "onClick"> & {
    danger?: boolean | undefined;
    disabled?: boolean | undefined;
} & CSSProp<any>, "slot" | "style" | "title" | "color" | "primary" | "children" | "suppressHydrationWarning" | "className" | "id" | "lang" | "role" | "tabIndex" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "accessKey" | "autoFocus" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "nonce" | "placeholder" | "spellCheck" | "translate" | "radioGroup" | "about" | "content" | "datatype" | "inlist" | "prefix" | "property" | "rel" | "resource" | "rev" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "_css" | "disabled" | "value" | "isDanger" | "component" | "hasIcon">;
declare const getItemType: (o: SelectorOption<any>) => ComponentType<ItemProps> | typeof Item;

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
declare let Dropdown: <T>(props: react__default.PropsWithChildren<DropdownProps<T>>) => react_jsx_runtime.JSX.Element;
declare const Autocomplete: react__default.ComponentType<any>;
declare const Select: react__default.ComponentType<any>;
declare const MultiSelect: styled_components.StyledComponent<react__default.ComponentType<any>, styled_components.DefaultTheme, {}, never>;

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
} & Omit<TextFieldProps, "onChange" | "value"> & Omit<DropdownProps<DateRange>, "isOpen" | "onChange" | "onStateChange" | "options" | "useRawOptions">;
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

declare let Selector: <T>({ disabled, invalidOnNoSelection, validation, ...props }: SelectorProps<T>) => react_jsx_runtime.JSX.Element;

declare let MultiSelector: <T>({ emptyState, maxItems, validation, ...props }: MultiSelectorProps<T>) => react_jsx_runtime.JSX.Element;

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

type RadioStyle = "default" | "checkmark";
type RadioButtonProps = {
    checked?: boolean;
    color?: FullSpectrumColors;
    darkColorIndex?: keyof FullSpectrumColors;
    disabled?: boolean;
    name: string;
    radioStyle?: RadioStyle;
    value: string;
    onChange: (value: string) => void;
} & Omit<FormFieldProps, "color" | "onChange">;
declare let RadioButton: FC<RadioButtonProps>;

type RadioButtonOption = {
    color?: FullSpectrumColors;
    darkColorIndex?: keyof FullSpectrumColors;
    disabled?: boolean;
    hint?: string;
    label: string;
    renderAdditional?: (args: {
        renderedRadioButton: ReactNode;
    }) => ReactNode;
    value: string;
};
type RadioButtonGroupProps = {
    checkedOption?: string;
    color?: FullSpectrumColors;
    darkColorIndex?: keyof FullSpectrumColors;
    disabled?: boolean;
    name: string;
    onChange: (value: string) => void;
    options: Array<RadioButtonOption>;
    radioStyle?: RadioStyle;
} & Omit<FormFieldProps, "color" | "onChange">;
declare const RadioButtonGroup: FC<RadioButtonGroupProps>;

type SearchableSelectorProps<T> = {
    children?: (o: SelectorOption<T>) => void | ReactNode;
    dynamicSearching?: boolean;
    onSearchTextChange?: (text: string) => Promise<void>;
    skipResetOnSelection?: boolean;
} & SelectorProps<T>;
declare let SearchableSelector: <T>({ children, disabled, dynamicSearching, onSearchTextChange, onStateChange, skipResetOnSelection, ...props }: SearchableSelectorProps<T>) => react_jsx_runtime.JSX.Element;

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

declare let TextField: react__default.ForwardRefExoticComponent<Pick<react__default.InputHTMLAttributes<HTMLInputElement>, "type" | "placeholder" | "inputMode" | "autoComplete" | "step"> & {
    faux?: boolean | undefined;
    onChange: (value: string, event: react__default.ChangeEvent<HTMLInputElement>) => void;
    small?: boolean | undefined;
    symbolProp?: string | undefined;
    value?: string | undefined;
} & {
    disabled?: boolean | undefined;
    emptyState?: react__default.ReactNode;
    hint?: react__default.ReactNode;
    label?: react__default.ReactNode;
    message?: react__default.ReactNode;
    required?: boolean | undefined;
    validation?: Validation | undefined;
} & ContainerProps & react__default.RefAttributes<unknown>>;

type TextAreaProps = FormFieldProps & {
    autoExpand?: boolean;
    characterLimit?: number;
    minRows?: number;
    resizable?: boolean;
    value?: string;
    onChange: (text: string, e: ChangeEvent<HTMLTextAreaElement>) => void;
} & Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, "placeholder">;
declare const TextArea: FC<TextAreaProps>;

type FieldProps = TextFieldProps | TextAreaProps;
type Props$1 = PropsWithChildren<{
    WrappedComponent: ComponentType<Omit<FieldProps, "onChange" | "validation"> & {
        onChange: ((e: ChangeEvent<HTMLInputElement>) => void) | ((e: ChangeEvent<HTMLTextAreaElement>) => void);
        validation?: string;
    }>;
    compact?: boolean;
}> & FieldProps;
declare let TextFieldWrapper: react__default.ForwardRefExoticComponent<Props$1 & react__default.RefAttributes<unknown>>;

type SVGComponent = ComponentType<SVGAttributes<any>>;

declare const ALIGNMENTS: {
    readonly start: "flex-start";
    readonly center: "center";
    readonly end: "flex-end";
};
type Alignment = ValueOf<typeof ALIGNMENTS>;

type PromiseFunc<T = any, Rtn = any> = (...o: T[]) => Promise<Rtn>;

declare const BUTTON_SIZES: {
    readonly LARGE: "large";
    readonly MEDIUM: "medium";
    readonly SMALL: "small";
    readonly X_SMALL: "x_small";
};
type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
type AutoLoadable = {
    autoLoadable: true;
    onClick: PromiseFunc;
};
type ButtonBaseProps = PropsWithChildren<{
    alignItems?: string;
    alignSelf?: Alignment;
    ariaLabel?: string;
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
    fileTypes: Nullable<Array<InputHTMLAttributes<HTMLInputElement>["accept"]>>;
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
    reversed?: boolean;
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

export { ArrayToSelectorOptionsConverter, Autocomplete, BUTTON_SIZES, Button, ButtonProps, ButtonSize, CLEAR_OPTION, Checkbox, CheckboxProps, Common, CycleButton, DatePickerSelector, DatePickerSelectorProps, DateRangePickerSelector, DateRangePickerSelectorProps, DateRangeSelector, DateRangeSelectorProps, Dropdown, DropdownProps, EmailTextField, FileButton, FileButtonProps, Form, FormFieldProps, FormProps, IconButton, IconButtonProps, Item, ItemProps, MenuPlacement, MonthYearSelector, MultiSelect, MultiSelector, MultiSelectorProps, NPSQuestion, NPSQuestionProps, NPSScore, NumberTextField, NumberTextFieldChangeValue, OnItemSelectedFunc, OnItemsSelectedFunc, PasswordTextField, RadioButton, RadioButtonGroup, RadioButtonGroupProps, RadioButtonOption, RadioButtonProps, RadioStyle, SearchableSelector, SearchableSelectorProps, Select, Selector, SelectorItemKey, SelectorOption, SelectorOptionKeyMap, SelectorOptionKeyMapParams, SelectorOptionOptionalAttrs, SelectorProps, StateChange, TaggedToggle, TaggedToggleProps, TextArea, TextAreaProps, TextField, TextFieldProps, TextFieldWrapper, Toggle, ToggleProps, VALIDATION_STATES, ValidatedFormProps, Validation, ValidationState, getItemType };
